import React from 'react';
import styles from './css/styles.css';
import Player from "./components/player";
import Level from "./levels";
import DialogBox from "./components/dialog/dialog";
import { FormControl } from '@material-ui/core';
import GroundTile from "./levels/mapMaker.jsx";
import { Button } from '@material-ui/core';
import Main from './main.js';


export default function App() {
    return (
        <div>
            <Main />
        </div>
    );

    //     var currentLevel = Level.level1; // make this a state
    //     function nextLevel() {
    //         console.log("next level");
    //         currentLevel = Level.level2; // set state
    //     }

    //     return (
    //         <div>
    //             <h1>Escape High School</h1>
    //             <h3>{currentLevel.title}</h3>
    //             <div className="zone-container">

    //                 <GroundTile></GroundTile>
    //                 <DialogBox messages={currentLevel.messages} messageTitle={currentLevel.messageTitle} />
    //                 <Player skin="m1" />

    //             </div>
    //             <h3>Arrow keys: Move</h3>
    //             <h3>Enter/Space: Interact</h3>
    //             <Button variant="outlined" color="primary">
    //                 Check answer
    //             </Button>
    //             <Button variant="outlined" color="primary">
    //                 Need a hint?
    //             </Button>
    //             <Button onClick={nextLevel} variant="outlined" color="primary">
    //                 Next level
    //             </Button>

    //             {/* <FormControl>
    //                 <InputLabel htmlFor="my-input">Email address</InputLabel>
    //                 <Input id="my-input" aria-describedby="my-helper-text" />
    //                 <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    //             </FormControl> */}

    //         </div>
    //     );
}