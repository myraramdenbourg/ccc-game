import React from "react";
import styles from "./css/styles.css";
import Levels from "./components/levels";
import FormDialog from "./components/form"
import { Button } from "@material-ui/core";
import Zone from "./components/zone";
import CheckList from "./components/checklist/checklist";
import HintGiver from "./components/hintGiver/hintGiver";
import Start from "./components/start/start.js";
import Timer from 'react-compound-timer'
import Sound from 'react-sound';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLevel: Levels.level1,
        };
    }

    handleAnswer = (answer) => {
        if (answer === this.state.currentLevel.answer) {
            // go to next level
            this.setState({ currentLevel: this.state.currentLevel.next })
        } else {
            alert('Incorrect!');
        }
    };

    render() {
        return (
            <div>
                <Start />
                <h1>Escape High School</h1>

                <center style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Timer
                        initialTime={60 * 1000 * 60}
                        direction="backward"
                        timeToUpdate={10}
                        checkpoints={[
                            {
                                time: 0,
                                callback: () => alert('Time is up!'),
                            },
                            {
                                time: 60 * 1000 * 30,
                                callback: () => alert('30 minutes left!'),
                            },
                        ]}
                    >
                        {() => (
                            <div>
                                <Timer.Minutes /> minutes
                                <Timer.Seconds /> seconds
                            </div>
                        )}
                        <h2 style={{ fontFamily: 'Helvetica Neue' }}>
                            <h2 style={{ fontSize: 32, color: "white" }}>
                                <Timer.Minutes />:<Timer.Seconds />
                            </h2>
                        </h2>
                    </Timer>
                </center>

                <h3>{this.state.currentLevel.title}</h3>
                <CheckList image={this.state.currentLevel.checklist} />
                <Zone level={this.state.currentLevel} />
                <h3>Arrow keys: Move</h3>
                <h3>Enter/Space: Interact</h3>
                <center>
                    {this.state.currentLevel.title !== "Level 8 - The End" ?
                        <Button onClick={() => this.setState({ currentLevel: this.state.currentLevel.next })} variant="outlined" color="primary">
                            Next level
                    </Button> : null}
                    <FormDialog handleAnswer={this.handleAnswer} />
                    <HintGiver hints={this.state.currentLevel.hints} />

                    <Sound
                        url={this.state.currentLevel.music}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={300 /* in milliseconds */}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                </center>
            </div >
        );
    }
}

export default Main;