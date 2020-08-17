import React from "react";
import styles from "../../css/styles.css";
import Player from "../player";
import DialogBox from "../dialog";
import Tile from "../tile";
import { Button } from "@material-ui/core";
import { DualRing } from "react-css-spinners";

const ZONE_WIDTH = 800
const ZONE_HEIGHT = 600;

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
        this.state = {
            numImagesLoaded: 0
        };

        // Parse the TMX file
        this.level = props.level;
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
                let col = 0;
                let idx = first;
                // for each tile
                for (let y = 0; y < image.height; y += this.tileHeight) {
                    for (let x = 0; x < image.width; x += this.tileWidth) {
                        // Do not parse the margins. Only go to the maximum number of columns
                        if (col === maxCols) {
                            col = 0;
                            continue;
                        }

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
                        col++;
                    }
                }
                this.setState({
                    numImagesLoaded: this.state.numImagesLoaded + 1
                });
                console.log("Loaded tiles for %s", imageSrc);
            }
            image.src = targetImage;
        }
        this.totalImages = tileSets.length;
    }

    fullyLoaded = () => {
        return this.state.numImagesLoaded >= this.totalImages;
    }

    render() {
        const layers = new Array(this.layers.length);
        let player = null;
        let dialog = null;

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
                x: this.tileWidth * col,
                y: this.tileHeight * r
            };
            player = <Player skin="m1"
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
                visibility={this.fullyLoaded()} />;

            dialog = <DialogBox visibility={this.fullyLoaded()} messages={this.level.StartingMessages} />;
        }

        return (
            <div className="zone-container" style={{ width: this.mapWidth * this.tileWidth, height: this.mapHeight * this.tileHeight }}>
                {!this.fullyLoaded() ? (
                    <DualRing style={{
                        top: "50%",
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%,-50%)"
                    }} />
                ) : null}
                {dialog}
                {player}
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

export default Zone;