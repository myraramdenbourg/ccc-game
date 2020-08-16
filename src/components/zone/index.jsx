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

    constructor(props) {
        super(props);
        this.state = {
            numImagesLoaded: 0
        };

        // Parse the TMX file
        const level = props.level;
        const sources = level["sources"];
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
                        const tile = <img src={renderCanvas.toDataURL()}/>
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
                    const layer = layerData[i];
                    let img = this.tilesData[layer];
                    if (!img) {
                        img = <img/>
                    }
                    const tile =
                        <Tile
                            tileHeight={this.tileHeight}
                            tileWidth={this.tileWidth}
                            id={"layer" + l + "_row" + i + "_tile" + i}
                            key={"layer" + l + "_row" + i + "_tileKey" + i}>
                            {img}
                        </Tile>

                    const index = Math.floor(i / this.mapWidth); // Round down to the row's number using the width
                    if (typeof rows[index] === "undefined") {
                        rows[index] = [ tile ];
                    } else {
                        rows[index].push(tile);
                    }
                }
                layers[l] = rows;
            }
        }

        return (
            <div className="zone-container" style={{width: ZONE_WIDTH, height: ZONE_HEIGHT}}>
                {/* <DialogBox messages={this.state.currentLevel.messages} messageTitle={this.state.currentLevel.messageTitle} /> */}
                {/*<Player skin="m1" />*/}
                <div style={{
                    width: this.mapWidth * this.tileWidth,
                    height: this.mapHeight * this.tileHeight
                }}>
                    {layers.map((layer) => {
                        return (
                            <div style={{ position: "absolute" }}>
                                {layer.map((rows) => {
                                    return (
                                        <div style={{height: this.tileHeight}}>
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

const _mergeArrays = (arrays) => {
    // Assume all arrays same size
    const combined = new Array(arrays[0].length).fill(0, 0, arrays[0].length);
    arrays.forEach((arr) => {
        arr.forEach((value, i) => {
            if (value !== 0) {
                combined[i] = value;
            }
        });
    });
    return combined;
}

export default Zone;