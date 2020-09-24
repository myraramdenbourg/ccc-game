import React from "react";
import styles from "./css/styles.css";
import Levels from "./components/levels";
import FormDialog from "./components/form"
import { Button } from "@material-ui/core";
import Zone from "./components/zone";
import CheckList from "./components/checklist/checklist";
import HintGiver from "./components/hintGiver/hintGiver";
import MessageModal from "./components/start/messageModal.js";
import Timer from 'react-compound-timer'
import Sound from 'react-sound';
import Finish from "./components/start/finish.js";

class Main extends React.Component {

    timeLeft = 0;

    constructor(props) {
        super(props);
        this.state = {
            currentLevel: Levels.level1,
            isPlaying: false,
            won: false
        };
    }

    handleAnswer = (answer) => {
        if (answer.toLowerCase() === this.state.currentLevel.answer.toLowerCase()) {
            if (!this.state.currentLevel.next) {
                console.log("won");
                this.setState({ won: true })
                document.onkeydown = function (e) {
                    return false;
                }
            } else {
                // go to next level
                this.setState({ currentLevel: this.state.currentLevel.next })
            }

        } else {
            alert('Incorrect!');
        }
    };

    handlePlay = () => {
        this.state.isPlaying ?
            this.setState({ isPlaying: false }) :
            this.setState({ isPlaying: true })
    }

    render() {
        const timeTaken = 60 - (this.timeLeft / 1000 / 60);
        const timeTakenMin = Math.floor(timeTaken);
        const timeTakenSec = (((timeTaken % 1) * 60) / 100) * 100;
        const timeTakenSecFormatted = ("0" + timeTakenSec).slice(-2);
        return (
            <div>
                {!this.state.won ?
                    <MessageModal>
                        <h2 id="transition-modal-title">ESCAPE HIGH SCHOOL</h2>
                        <h4 id="transition-modal-description">Rules: </h4>
                        <p id="transition-modal-description">- Use the arrow keys to move around. </p>
                        <p id="transition-modal-description">- Use the spacebar or enter key to interact with objects.</p>
                        <p id="transition-modal-description">- When you think you have an answer, click NEXT LEVEL.</p>
                        <p id="transition-modal-description">- Do not hit the reset button or all your progress will be lost.</p>
                        <p id="transition-modal-description">Have fun! Your timer starts NOW!</p>
                    </MessageModal>
                    :
                    <MessageModal override={true}>
                        <h2 id="transition-modal-title">Congratulations!! You escaped high school! </h2>
                        <p id="transition-modal-description">- Your escape time is: {timeTakenMin}min {timeTakenSecFormatted}sec </p>
                        <p id="transition-modal-description">- Take a screenshot of this page and send it to CCC!</p>
                        <p id="transition-modal-description">- Thanks for playing!</p>
                    </MessageModal>}
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
                            }
                        ]}>
                        {({ start, resume, pause, stop, reset, getTimerState, getTime }) => {
                            this.timeLeft = getTime();
                            return (
                                <React.Fragment>
                                    <h2 style={{ fontFamily: 'Helvetica Neue' }}>
                                        <h2 style={{ fontSize: 32, color: "white" }}>
                                            <Timer.Minutes />:<Timer.Seconds />
                                        </h2>
                                    </h2>
                                </React.Fragment>
                            );
                        }}
                    </Timer>
                </center>

                <h3>{this.state.currentLevel.title}</h3>
                <CheckList image={this.state.currentLevel.checklist} />
                <Zone level={this.state.currentLevel} />
                <h3>Arrow keys: Move</h3>
                <h3>Enter/Space: Interact</h3>
                <center>
                    <FormDialog handleAnswer={this.handleAnswer} />
                    <HintGiver hints={this.state.currentLevel.hints} />
                    <Button onClick={this.handlePlay} variant="outlined" color="primary">
                        {this.state.isPlaying ? "Turn music off" : "Turn music on"}
                    </Button>
                    <Sound url={this.state.currentLevel.music}
                        playStatus={this.state.isPlaying ? Sound.status.PLAYING : null}
                        loop={true}
                        volume={25} />
                </center>
            </div >
        );
    }
}

export default Main;