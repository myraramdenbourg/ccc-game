import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const HintGiver = ({ hints }) => {

    const [clicks, setClicks] = useState(0);
    const [currentHint, setCurrentHint] = useState(0);
    const handleClick = () => {
        if (clicks !== 0) {
            if (currentHint < hints.length - 1) {
                setCurrentHint(currentHint + 1);
            } else {
                setCurrentHint(0);
            }
        }
        setClicks(clicks + 1);
    };
    return (

        <div >
            <Button variant="outlined" color="primary" onClick={handleClick}>
                Need a hint?
            </Button>
            <div>{(clicks > 0) && hints[currentHint]}</div>
        </div>
    );
};

export default HintGiver;
