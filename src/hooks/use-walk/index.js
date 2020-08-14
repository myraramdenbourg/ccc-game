import { useState } from 'react';
import level1 from '../../levels/level1';

export default function useWalk(maxSteps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // check direction the character is facing, default is facing down. dir is a getter, setDir is a setter
    const [dir, setDir] = useState(0);
    // keep track of animation steps
    const [step, setStep] = useState(0);
    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    };

    const stepSize = 16;

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    };


    function walk(dir) {
        setDir(prev => {
            if (directions[dir] === prev) {
                move(dir);
                // action(dir);
            }
            return directions[dir];
        });
        setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0);
    };

    function move(dir) {
        console.log(level1.tiles);
        console.log((position.x + modifier[dir].x) / 16);
        console.log((position.y + modifier[dir].y) / 16);
        console.log(level1.tiles[(position.x + modifier[dir].x) / 16][(position.y + modifier[dir].y) / 16]);
        // level1.tiles[(position.x + modifier[dir].x) / 16][(position.y + modifier[dir].y) / 16] !== 5 ?
        //     setPosition(prev => ({
        //         x: prev.x + modifier[dir].x,
        //         y: prev.y + modifier[dir].y,
        //     })) :
        //     setPosition(prev => ({
        //         x: prev.x,
        //         y: prev.y
        //     }));

        switch (level1.tiles[(position.x + modifier[dir].x) / 16][(position.y + modifier[dir].y) / 16]) {
            case 5: // wall: don't move
                setPosition(prev => ({
                    x: prev.x,
                    y: prev.y
                }));
            case 0: // nothing: move
                setPosition(prev => ({
                    x: prev.x + modifier[dir].x,
                    y: prev.y + modifier[dir].y,
                }));
            // case 20: // object: don't move and trigger action
            //     setPosition(prev => ({
            //         x: prev.x,
            //         y: prev.y
            //     }));
            //     talkAction();
            default:
                console.log('error ');
        };
    }

    function action(dir) {
        // if lands next to character, do talkaction
        level1.tiles[(position.x + modifier[dir].x) / 16][(position.y + modifier[dir].y) / 16] == 20 ?
            talkAction() : observeAction();
        // if lands next to object, do observeaction

        // if not next to anything, do nothing
    }

    function talkAction() {
        // talk action
        console.log("hello friends");
    }

    function observeAction() {

    }

    return {
        walk, dir, step, position, action
    };
}