import React from "react";
import Actor from "../actor";
import PressKey from "../../hooks/press-key";
import WalkPlayer from "../../hooks/walk-player"

export default function Player({ skin }) {
    const { dir, step, walk, position, action } = WalkPlayer(3);
    const data = {
        h: 32,
        w: 32,
    };

    PressKey((e) => {
        // prevent keyboard from reacting with browser
        e.preventDefault();
        // move with "WASD" or Arrow keys
        switch (e.keyCode) {
            case 37:
            case 65:
                return walk("left");
            case 38:
            case 87:
                return walk("up");
            case 39:
            case 68:
                return walk("right");
            case 40:
            case 83:
                return walk("down");
            case 13:
            case 32:
                // action with enter or space key
                // TODO: change this so that you can do an action from any direction
                return action("down");
            default:
                console.log("key not mapped: ", e.keyCode);
        }
    });

    return <Actor sprite={`./assets/${skin}.png`} data={data} step={step} dir={dir} position={position} />;

}