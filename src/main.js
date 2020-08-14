import React from 'react';
import styles from './css/styles.css';
import Player from "./components/player";
import Level from "./levels";
import DialogBox from "./components/dialog/dialog";
import { FormControl } from '@material-ui/core';
import GroundTile from "./levels/mapMaker.jsx";
import MapTile from "./levels/mapMaker.jsx";
import { Button } from '@material-ui/core';
import FormDialog from './formDialog';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentLevel: Level.level1 };
    }
    render() {

        return (
            <div>
                <h1>Escape High School</h1>
                <h3>{this.state.currentLevel.title}</h3>
                <div className="zone-container">
                    <DialogBox messages={this.state.currentLevel.messages} messageTitle={this.state.currentLevel.messageTitle} />
                    <Player skin="m1" />
                    {/* for each tile in level.tiles, make a groundtile */}
                    <GroundTile></GroundTile>
                    <MapTile></MapTile>
                </div>
                <h3>Arrow keys: Move</h3>
                <h3>Enter/Space: Interact</h3>
                <center>
                    <Button variant="outlined" color="primary">
                        Check answer
                </Button>
                    <Button variant="outlined" color="primary">
                        Need a hint?
                </Button>
                    <Button onClick={() => this.setState({ currentLevel: this.state.currentLevel.next })} variant="outlined" color="primary">
                        Next level
                </Button>
                    <FormDialog></FormDialog>
                </center>

                {/* <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl> */}

            </div>
        );
    }
}
export default Main;
// function App() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     );
// }