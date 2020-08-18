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
import Start from "./components/start/start.js";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLevel: Levels.level6
        };
    }

    handleAnswer = (answer) => {
        console.log(answer);
        if (answer === this.state.currentLevel.answer) {
            // go to next level
            this.setState({ currentLevel: this.state.currentLevel.next })
        } else {
            // incorrect!
        }
    };

    render() {
        return (
            <div>
                <Start />
                <h1>Escape High School</h1>
                <h3>{this.state.currentLevel.title}</h3>
                <CheckList image={this.state.currentLevel.checklist} />
                <Zone level={this.state.currentLevel} />
                <h3>Arrow keys: Move</h3>
                <h3>Enter/Space: Interact</h3>
                <center>
                    {this.currentLevel !== Levels.level8 ?
                        <Button onClick={() => this.setState({ currentLevel: this.state.currentLevel.next })} variant="outlined" color="primary">
                            Next level
                    </Button> : null}
                    <FormDialog handleAnswer={this.handleAnswer} />
                    <HintGiver hints={this.state.currentLevel.hints} />
                </center>
            </div >
        );
    }
}

export default Main;