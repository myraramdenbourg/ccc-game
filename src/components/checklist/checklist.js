import React from "react";
import styles from "../../css/styles.css";

const CheckList = ({ image }) => {

    return (
        <div id="CheckList">
            <img className="CheckList" src={"./assets/puzzles/" + image + ".png"} alt="checklist" />
        </div>
    );
};

export default CheckList;