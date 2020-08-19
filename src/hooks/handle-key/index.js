import { useState } from "react";
import Sound from 'react-sound';
import Walking from '../../music/walking.mp3';

export default function HandleKey(maxSteps, startingPoint, layers, tileDimensions, mapDimensions, interactionHandler) {

    const [position, setPosition] = useState({ x: startingPoint.x, y: startingPoint.y });
    const [dir, setDir] = useState(0);
    const stepSize = tileDimensions.width; // width for now
    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    };
    // keep track of animation steps
    const [step, setStep] = useState(0);
    const modifier = {
        0: { x: 0, y: stepSize }, // down
        1: { x: -stepSize, y: 0 }, // left
        2: { x: stepSize, y: 0 }, // right
        3: { x: 0, y: -stepSize }, // up
    };

    const walk = (newDir) => {
        setDir(prev => {
            if (newDir === prev) {
                move(newDir);
            }
            return newDir;
        });
        setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0);
    };

    const _getNewTileIndex = (targetDir) => {
        const newPosX = position.x + modifier[targetDir].x;
        const newPosY = position.y + modifier[targetDir].y;
        // X-Y coordinate plane starts from the top left. Add 1 so the new position starts at the beginning of the tile
        const newCol = Math.floor(newPosX / tileDimensions.width) + 1;
        const newRow = Math.floor(newPosY / tileDimensions.height) + 1;
        return (newRow * mapDimensions.width) + newCol;
    }

    const _getTileLayers = (tileIndex) => {
        const targets = [];
        layers.forEach((layer) => {
            const layerData = layer.data;
            const newTile = layerData[tileIndex];
            if (newTile) {
                console.log("newTileIdx: " + tileIndex + " newTileFrom: " + layer.name);
                targets.push(layer.name);
            }
        })
        return targets;
    }

    const move = (targetDir) => {
        const newTileIdx = _getNewTileIndex(targetDir);
        const newTileLayers = _getTileLayers(newTileIdx);

        // Wall and objects check takes priority. Objects and walls are included with each other
        if (newTileLayers.includes("Wall")) {
            return;
        }

        // No walls - free to move
        if (newTileLayers.includes("Ground")) {
            setPosition(prev => ({
                x: prev.x + modifier[targetDir].x,
                y: prev.y + modifier[targetDir].y,
            }));
        }
    }

    const interact = () => {
        // Look only in the current direction
        const newTileIdx = _getNewTileIndex(dir);
        const newTileLayers = _getTileLayers(newTileIdx);

        newTileLayers.forEach((name) => {
            if (name !== "Wall" && name !== "Ground") {
                interactionHandler(name);
            }
        });
    }

    return {
        directions, walk, dir, step, position, interact
    };
}