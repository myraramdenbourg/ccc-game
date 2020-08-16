import React from "react";
import styles from "./css/styles.css";
import Levels from "./components/levels";
import { FormControl } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Zone from "./components/zone";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLevel: Levels.level1
        };
    }

    render() {
        return (
            <div>
                <h1>Escape High School</h1>
                <h3>{this.state.currentLevel.title}</h3>
                <Zone level={this.state.currentLevel} />
                <h3>Arrow keys: Move</h3>
                <h3>Enter/Space: Interact</h3>
                <center>
                    <Button variant="outlined" color="primary">
                        Check answer
                    </Button>
                    <Button variant="outlined" color="primary">
                        Need a hint?
                    </Button>
                </center>
            </div>
        );
    }
}

export default Main;