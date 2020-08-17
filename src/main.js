import React from "react";
import styles from "./css/styles.css";
import Levels from "./components/levels";
import FormDialog from "./components/form"
import { Button } from "@material-ui/core";
import Zone from "./components/zone";
import DialogBox from "./components/dialog";
import CheckList from "./components/checklist/checklist";
import HintGiver from "./components/hintGiver/hintGiver";
import PopUp from "./components/puzzlePopup";

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
                <CheckList image={this.state.currentLevel.checklist} />
                <Zone level={this.state.currentLevel} />
                <h3>Arrow keys: Move</h3>
                <h3>Enter/Space: Interact</h3>

                <center>
                    <Button onClick={() => this.setState({ currentLevel: this.state.currentLevel.next })} variant="outlined" color="primary">
                        Next level
                    </Button>
                    <FormDialog currentLevel={this.state.currentLevel}></FormDialog>
                    <HintGiver hints={this.state.currentLevel.hints} />
                    {/* <DialogBox messages={this.state.currentLevel.messages} messageTitle={this.state.currentLevel.messageTitle} /> */}
                    <PopUp></PopUp>
                </center>
            </div>
        );
    }
}

export default Main;