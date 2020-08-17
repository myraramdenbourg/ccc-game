// code from https://codeworkshop.dev/blog/2020-03-01-creating-an-rpg-dialog-effect-with-react-and-react-spring/

import React, { useState } from "react";
import Message from "./message.js";

const DialogBox = ({ messages }) => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const handleClick = () => {
        if (currentMessage < messages.length - 1) {
            setCurrentMessage(currentMessage + 1);
        } else {
            setCurrentMessage(null);
        }
    };
    return (
        (currentMessage !== null) &&
        <div className="DialogWindow">
            <div className="DialogTitle">{messages[currentMessage].messageTitle}</div>
            <Message message={messages[currentMessage].message} key={currentMessage} />
            <div onClick={handleClick} className="DialogFooter">
                Next
            </div>
        </div>
    );
};

export default DialogBox;
