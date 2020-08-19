// code from https://codeworkshop.dev/blog/2020-03-01-creating-an-rpg-dialog-effect-with-react-and-react-spring/
import React from "react";
import Message from "./message.js";

class DialogBox extends React.Component {

    messages;

    constructor(props) {
        super(props);
        this.messages = props.messages;
        this.state = {
            messageIndex: 0
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.messages !== this.props.messages) {
            console.log("Message Updated!");
            this.messages = this.props.messages;
            this.setState({
                messageIndex: 0
            });
        }
    }

    handleClick = () => {
        let target;
        if (this.state.messageIndex < this.messages.length - 1) {
            target = this.state.messageIndex + 1;
        } else {
            target = -1; // Message is done
            this.props.handleClose();
        }
        this.setState({
            messageIndex: target
        });
    }

    render() {
        if (this.messages !== null && this.state.messageIndex !== -1) {
            const currentMessage = this.messages[this.state.messageIndex];
            console.log(currentMessage.message);
            return (
                <div className="DialogWindow">
                    <div className="DialogTitle">{currentMessage.messageTitle}</div>
                    <Message message={currentMessage.message} key={currentMessage} />
                    <div onClick={this.handleClick} className="DialogFooter">
                        Next
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default DialogBox;
