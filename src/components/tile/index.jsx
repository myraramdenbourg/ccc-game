import React from "react";

const Tile = (props) => {
    return (
        <div style={{
            display: "inline-flex",
            height: props.tileHeight,
            width: props.tileWidth
        }}>
            {props.children}
        </div>
    );
};

export default Tile;
