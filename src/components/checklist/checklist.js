import React, { useState } from "react";

const CheckList = ({ imageUrl }) => {

    return (
        <div className="CheckList" id="CheckList">
            <img src={imageUrl} />
        </div>
    );
};

export default CheckList;