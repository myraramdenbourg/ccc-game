import { useState } from "react";

export default function WalkPlayer(maxSteps, startingPoint, tiles, tileDimensions) {

    const [position, setPosition] = useState({ x: startingPoint.x, y: startingPoint.y });
    const [dir, setDir] = useState(0);
    const stepSize = 16;
    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    };
    // keep track of animation steps
    const [step, setStep] = useState(0);
    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    };

    const walk = (dir) => {
        setDir(prev => {
            if (directions[dir] === prev) {
                move(dir);
            }
            return directions[dir];
        });
        setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0);
    };

    function move(dir) {
        const newPosX = position.x + modifier[dir].x;
        const newPosY = position.y + modifier[dir].y;
        const newRow = Math.floor(newPosX / tileDimensions.width); // To the nearest tile
        const newCol = Math.floor(newPosY / tileDimensions.height); // To the nearest tile

        setPosition(prev => ({
            x: newPosX,
            y: newPosY,
        }));
    }

    function action(dir) {
        // if lands next to character, do talkaction
        // level1.tiles[(position.x + modifier[dir].x) / 16][(position.y + modifier[dir].y) / 16] == 20 ?
        //     talkAction() : observeAction();
        // if lands next to object, do observeaction

        // if not next to anything, do nothing
    }

    function talkAction() {
        // talk action
        console.log("hello friends");
    }

    return {
        walk, dir, step, position, action
    };
}