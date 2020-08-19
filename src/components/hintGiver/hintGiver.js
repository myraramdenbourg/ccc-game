import React, { useState } from "react";
import { Button } from "@material-ui/core";

class HintGiver extends React.Component {

    open;

    constructor(props) {
        super(props);
        this.state = {
            index: -1 // Start at -1 to allow for the first index to be 0
        }
        this.open = false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.hints !== this.props.hints) {
            this.setState({ index: -1 })
            this.open = false;
        }
    };

    handleClick = () => {
        this.open = true;
        this.setState({ index: this.state.index + 1 })
    }

    render = () => {
        const hints = this.props.hints;
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClick}>
                    Need a hint?
                </Button>
                <div>{this.open && hints[this.state.index % hints.length]}</div>
            </div>
        );
    }
}

export default HintGiver;
