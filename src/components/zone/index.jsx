import React from "react";
import styles from "../../css/styles.css";
import Player from "../player";
import DialogBox from "../dialog";
import Tile from "../tile";

const ZONE_WIDTH = 800
const ZONE_HEIGHT = 600;

class Zone extends React.Component {


    totalImages;
    tiles;
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
        this.tiles = _map["layers"];

        this.tilesData = new Array(this.mapWidth * this.mapHeight); // worst case, every tile on the tile is unique
        const tileSets = _map["tilesets"];
        for (const ts of tileSets) {
            const first = ts["firstgid"];
            const tsData = sources["tilesets"][ts["source"]];
            const imageSrc = tsData["image"];
            const targetImage = sources["images"][tsData["image"]];
            const image = new Image();

            console.log("Loading image %s", imageSrc);

            // From https://stackoverflow.com/questions/38156779/how-to-divide-image-in-tiles
            image.onload = () => {
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
                    for (let x = 0; x < image.width; x += this.tileWidth) {
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
            }
            image.src = targetImage;
        }
        this.totalImages = tileSets.length;
    }

    render() {
        const layers = new Array(this.tiles.length);
        if (this.state.numImagesLoaded >= this.totalImages) {
            console.log("Tiles from all sources loaded");
            for (let l = 0; l < this.tiles.length; l++) {
                const layerData = this.tiles[l].data;
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
                            id={"layer" + l + "_row" + index + "_tile" + column}
                            key={"layerKey" + l + "_rowKey" + index + "_tileKey" + column}>
                            {img}
                        </Tile>

                    if (typeof rows[index] === "undefined") {
                        rows[index] = [tile];
                    } else {
                        rows[index].push(tile);
                    }
                }
                layers[l] = rows;
            }
        }

        // get the player's starting point using the tile coordinates
        const r = this.level.playerStartingPoint.row;
        const col = this.level.playerStartingPoint.column;
        const startingCoordinates = {
            x: this.tileWidth * col,
            y: this.tileHeight * r
        };

        return (
            <div className="zone-container" style={{ width: ZONE_WIDTH, height: ZONE_HEIGHT }}>
                <DialogBox messages={this.level.StartingMessages} />
                <Player skin="m1"
                        startingPoint={startingCoordinates}
                        tiles={this.tiles}
                        tileDimensions={{
                            width: this.tileWidth,
                            height: this.tileHeight
                        }}/>
                <div style={{
                    width: this.mapWidth * this.tileWidth,
                    height: this.mapHeight * this.tileHeight,
                    zIndex: 0
                }}>
                    {layers.map((layer, layerIndex) => {
                        return (
                            <div id={"layer" + layerIndex} key={"layerKey" + layerIndex} style={{ position: "absolute" }}>
                                {layer.map((rows, index) => {
                                    return (
                                        <div id={"layer" + layerIndex + "_row" + index}
                                            key={"layerKey" + layerIndex + "_rowKey" + index}
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