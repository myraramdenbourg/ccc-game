import React from "react";
import styles from './css/styles.css';
import Player from "./components/player";
import Level from "./levels";


export default function App() {


    return (
        <div>
            <h1>Escape High School</h1>
            <h3>{Level.level1.title}</h3>
            <div className="zone-container">
                <Player skin="m1" />
            </div>
            <h3>Arrow keys: Move</h3>
            <h3>Enter/Space: Interact</h3>

        </div>
    );
}