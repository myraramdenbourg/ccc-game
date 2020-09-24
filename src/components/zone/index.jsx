import React from "react";
import styles from "../../css/styles.css";
import Player from "../player";
import DialogBox from "../dialog";
import Tile from "../tile";
import { DualRing } from "react-css-spinners";
import PopUp from "../puzzlePopup";
import { withStyles } from '@material-ui/core/styles';

const themes = (theme) => ({
    paper: {
        backgroundColor: 'black',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 600,
        height: 850,
    },
    img: {
        width: 600,
        height: 800,
        alignItems: 'center',
    }
});

class Zone extends React.Component {

    totalImages;
    layers;
    tilesData;
    mapHeight;
    mapWidth;
    tileWidth;
    tileHeight;
    level;

    constructor(props) {
        super(props);
        this.level = props.level
        this.state = {
            numImagesLoaded: 0,
            dialogMessages: this.level.startingMessages,
            popUpImage: null
        };
        this.renderImages();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.level !== this.props.level) {
            this.level = this.props.level;
            console.log("Next Level: %s", this.level.title);
            this.setState({
                numImagesLoaded: 0,
                dialogMessages: this.level.startingMessages,
            });
            console.log("Initializing %s", this.level.title)
            this.renderImages();
        }
    }

    renderImages = () => {
        // Parse the TMX file
        const sources = this.level["sources"];
        const _map = sources["level"];

        this.mapHeight = _map["height"]; // In number of tiles
        this.mapWidth = _map["width"]; // In number of tiles
        this.tileWidth = _map["tilewidth"];
        this.tileHeight = _map["tileheight"];
        this.layers = _map["layers"];

        this.tilesData = new Array(this.mapWidth * this.mapHeight); // worst case, every tile on the tile is unique
        const tileSets = _map["tilesets"];
        for (const ts of tileSets) {
            const first = ts["firstgid"];
            const tsData = sources["tilesets"][ts["source"]];
            const maxCols = tsData["columns"];
            const imageSrc = tsData["image"];

            const targetImage = sources["images"][tsData["image"]];
            const image = new Image();
            console.log("Initialized image %s", imageSrc);

            // From https://stackoverflow.com/questions/38156779/how-to-divide-image-in-tiles
            image.onload = () => {
                console.log("Loading image %s", imageSrc);
                // create a canvas
                const canvas = document.createElement("canvas");
                //set its size to match the image
                canvas.width = image.width;
                canvas.height = image.height;

                const ctx = canvas.getContext("2d"); // get the 2d interface
                // draw the image on the canvas
                ctx.drawImage(image, 0, 0);
                // get the tile size
                let idx = first;
                // for each tile
                for (let y = 0; y < image.height; y += this.tileHeight) {
                    for (let x = 0; x < image.width && x / this.tileWidth < maxCols; x += this.tileWidth) {
                        // get the pixel data
                        const imgData = ctx.getImageData(x, y, this.tileWidth, this.tileHeight);

                        const renderCanvas = document.createElement("canvas");
                        renderCanvas.height = imgData.height;
                        renderCanvas.width = imgData.width;
                        const renderCtx = renderCanvas.getContext("2d");
                        renderCtx.putImageData(imgData, 0, 0);
                        const tile = <img src={renderCanvas.toDataURL()} />
                        this.tilesData[idx] = tile;
                        idx++;
                    }
                }
                this.setState({
                    numImagesLoaded: this.state.numImagesLoaded + 1
                });
                console.log("Loaded tiles for %s", imageSrc);
                console.log(this.tilesData);
            }
            image.src = targetImage;
        }
        this.totalImages = tileSets.length;
    }

    fullyLoaded = () => {
        return this.state.numImagesLoaded >= this.totalImages;
    }

    handleInteraction = (name) => {
        const interaction = this.level.interactions[name];
        if (interaction) {
            console.log(interaction);
            const interactionType = interaction["type"];
            if (interactionType === "message") {
                this.setState({ dialogMessages: interaction["messages"] });
            } else if (interactionType === "image") {
                console.log("interaction image");
                this.setState({ popUpImage: interaction["image"] })
            }
        } else {
            console.log("No interactions found for %s", name);
        }
    }

    render() {
        const layers = new Array(this.layers.length);
        let player = null;
        let dialog = null;
        let spinner =
            <DualRing style={{
                top: "50%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%,-50%)"
            }} />

        if (this.fullyLoaded()) {
            // Create the tile formats
            console.log("Tiles from all sources loaded");
            for (let l = 0; l < this.layers.length; l++) {
                const layerData = this.layers[l].data;
                const layerName = this.layers[l].name;
                // Number of rows is the level's height
                const rows = new Array(this.mapHeight);
                for (let i = 0; i < layerData.length; i++) {
                    const index = Math.floor(i / this.mapWidth); // Round down to the row's number using the width
                    const column = i % this.mapWidth;
                    const layer = layerData[i];
                    let img = this.tilesData[layer];
                    if (!img) {
                        img = <img />
                    }
                    const tile =
                        <Tile
                            tileHeight={this.tileHeight}
                            tileWidth={this.tileWidth}
                            id={layerName + "_row" + index + "_tile" + column}
                            key={layerName + "_rowKey" + index + "_tileKey" + column}>
                            {img}
                        </Tile>

                    if (typeof rows[index] === "undefined") {
                        rows[index] = [tile];
                    } else {
                        rows[index].push(tile);
                    }
                }
                layers[l] = {
                    name: layerName,
                    rows: rows
                };
            }

            // get the player's starting point using the tile coordinates
            const r = this.level.playerStartingPoint.row;
            const col = this.level.playerStartingPoint.column;
            const startingCoordinates = {
                x: this.tileWidth * (col - 1),
                y: this.tileHeight * (r - 1)
            };
            player =
                <Player
                    skin="m1"
                    startingPoint={startingCoordinates}
                    layers={this.layers}
                    tileDimensions={{
                        width: this.tileWidth,
                        height: this.tileHeight
                    }}
                    mapDimensions={{
                        width: this.mapWidth,
                        height: this.mapHeight
                    }}
                    playerDimensions={{
                        width: 32,
                        height: 32
                    }}
                    interactionHandler={this.handleInteraction} />;

            dialog = <DialogBox messages={this.state.dialogMessages} handleClose={() => { this.setState({ dialogMessages: null }) }} />;
            spinner = null;
        }

        console.log(this.props);
        return (
            <div className="zone-container" style={{ width: this.mapWidth * this.tileWidth, height: this.mapHeight * this.tileHeight }}>
                {spinner}
                {dialog}
                {player}
                <PopUp style={{ position: "absolute" }}
                    open={this.state.popUpImage !== null}
                    handleClose={() => { this.setState({ popUpImage: null }) }}>
                    <div className={this.props.classes.paper}>
                        <img className={this.props.classes.img} src={this.state.popUpImage}/>
                    </div>
                </PopUp>
                <div style={{
                    width: this.mapWidth * this.tileWidth,
                    height: this.mapHeight * this.tileHeight,
                    zIndex: 0
                }}>
                    {layers.map((layer, layerIndex) => {
                        return (
                            <div id={layer.name} key={layer.name} style={{ position: "absolute" }}>
                                {layer.rows.map((rows, index) => {
                                    return (
                                        <div id={layer.name + "_row" + index}
                                            key={layer.name + "_rowKey" + index}
                                            style={{ height: this.tileHeight }}>
                                            {rows}
                                        </div>
                                    )
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default withStyles(themes)(Zone);