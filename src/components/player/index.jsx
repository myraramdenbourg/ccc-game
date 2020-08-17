import React from "react";
import Actor from "../actor";
import PressKey from "../../hooks/press-key";
import WalkPlayer from "../../hooks/walk-player"

export default function Player(props) {

    const { dir, step, walk, position, action } = WalkPlayer(3, props.startingPoint, props.layers, props.tileDimensions, props.mapDimensions);
    const data = {
        h: props.playerDimensions.height,
        w: props.playerDimensions.width,
    };



    PressKey((e) => {
        // prevent keyboard from reacting with browser
        // move with "WASD" or Arrow keys
        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                return walk("left");
            case 38:
                e.preventDefault();
                return walk("up");
            case 39:
                e.preventDefault();
                return walk("right");
            case 40:
                e.preventDefault();
                return walk("down");
            case 13:
            case 32:
                e.preventDefault();
                // action with enter or space key
                return action(true);
            default:
                console.log("key not mapped: ", e.keyCode);
        }
    });

    return <Actor sprite={`./assets/sprites/${props.skin}.png`} data={data} step={step} dir={dir} position={position} />;

}