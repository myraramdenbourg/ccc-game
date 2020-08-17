import React from "react";

const CheckList = ({ image }) => {

    return (
        <div className="CheckList" id="CheckList">
            <img src={"./assets/puzzles/" + image + ".png"} alt="checklist" />
        </div>
    );
};

export default CheckList;