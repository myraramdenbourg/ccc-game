// code rom https://codeworkshop.dev/blog/2020-03-01-creating-an-rpg-dialog-effect-with-react-and-react-spring/

import React, { useState } from "react";
import Message from "./Message.js";
import styles from '../../css/styles.css';

const DialogBox = ({ messages, messageTitle }) => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const handleClick = () => {
        if (currentMessage < messages.length - 1) {
            setCurrentMessage(currentMessage + 1);
        } else {
            setCurrentMessage(0);
        }
    };
    return (
        <div className="DialogWindow">
            <div className="DialogTitle">{messageTitle}</div>
            <Message message={messages[currentMessage]} key={currentMessage} />
            <div onClick={handleClick} className="DialogFooter">
                Next
      </div>
        </div>
    );
};

export default DialogBox;
