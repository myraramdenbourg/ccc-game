import React from "react";

export default function Sprite({ image, data, position }) {
    // image helps use different sprite images
    // data keeps track of x,y,h,w variables
    const { y, x, h, w } = data;
    return (
        <div
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                height: `${h}px`,
                width: `${w}px`,
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: `-${x}px -${y}px`,
                zIndex: 1
            }}
        />
    );
}