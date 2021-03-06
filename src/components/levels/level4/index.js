import level5 from "../level5";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import chestPng from "./data/chest.png";
import chestTileset from "./data/chest.json";
import resume from "./puzzles/resume.png";
import Forest from '../../../music/forest.mp3';

const sources = {
    level: levelData,
    tilesets: {
        "tileset.json": tilesetData,
        "chest.json": chestTileset
    },
    images: {
        "map.png": mapPng,
        "chest.png": chestPng
    }
}

const title = "Level 4 - The Resume";

const music = Forest;

const interactions = {
    "Chest": {
        "type": "message",
        "messages": [
            {
                "messageTitle": "Me",
                "message": "There's a letter! It says:"
            },
            {
                "messageTitle": "Me",
                "message": "15 left, 5 down"
            },
        ]
    },
    "Plant": {
        "type": "image",
        "image": resume
    },
};

const playerStartingPoint = {
    row: 15, // row
    column: 15 // tile
}

const answer = "315";

const hints = [
    "Did you observe the chest?",
    "Starting from the left side of the chest, take 15 steps to the left and 5 steps down",
    "Check out the third fern!",
    "Do you see numbers hidden on the resume?",
    "The answer is 315.",
];

const startingMessages = [
    {
        messageTitle: "Me:",
        message: "I guess this is some kind of forest? Better look around."
    },
];

const checklist = "checklist3";

const next = level5;

export default {
    sources,
    title,
    music,
    interactions,
    playerStartingPoint,
    answer,
    hints,
    startingMessages,
    checklist,
    next,
};