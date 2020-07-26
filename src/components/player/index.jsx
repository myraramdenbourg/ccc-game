import React from 'react';
import Actor from '../actor';
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk"

export default function Player({ skin }) {
    const { dir, step, walk, position } = useWalk(3);
    const data = {
        h: 32,
        w: 32,
    };

    useKeyPress((e) => {
        // arrow is replaced with empty string so we just have directions
        walk(e.key.replace("Arrow", "").toLowerCase());
        // prevent keyboard from reacting with browser
        e.preventDefault();
    });

    return <Actor sprite={`./assets/${skin}.png`} data={data} step={step} dir={dir} position={position} />;

}