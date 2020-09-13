import level2 from "../level2";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import letter from "./puzzles/finalletter.png";
import End from '../../../music/end.mp3';

const sources = {
    level: levelData,
    tilesets: {
        "tileset.json": tilesetData
    },
    images: {
        "map.png": mapPng
    }
}

const title = "Level 8 - The End";

const music = End;

const interactions = {
    "Sink": {
        "type": "image",
        "image": letter
    },
};

const playerStartingPoint = {
    row: 19, // row
    column: 8 // tile
}

const answer = "college";

const hints = [
    "Did you observe the sink?",
    "Congratulations! You're done! :) ",
];

const startingMessages = [
    {
        messageTitle: "Me:",
        message: "This is my kitchen! What am I doing here? That sink over there looks suspicious..."
    },
];

const checklist = "checklist7";

const next = level2;

export default {
    sources,
    title,
    interactions,
    music,
    playerStartingPoint,
    answer,
    hints,
    startingMessages,
    checklist,
    next,
};