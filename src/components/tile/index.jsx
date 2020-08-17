import React from "react";

const Tile = (props) => {
    return (
        <div
            style={{
                display: "inline-flex",
                height: props.tileHeight,
                width: props.tileWidth
            }}
            id={props.id}>
            {props.children}
        </div>
    );
};

export default Tile;
