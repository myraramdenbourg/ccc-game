import level5 from "../level5";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import chestPng from "./data/chest.png";
import chestTileset from "./data/chest.json";
import resume from "./puzzles/resume.png";

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
    "Check out the second fern!",
    "Do you see numbers hidden on the resume?",
    "The answer is 315.",
];

const startingMessages = [
    {
        messageTitle: "Me:",
        message: "Okay so now I'm outside..wow it's so bright outside. Is that...my counselor's house??"
    },
    {
        messageTitle: "Me:",
        message: "Well, it looks like the first thing I need to do is get a transcript."
    },
];

const checklist = "checklist3";

const next = level5;

export default {
    sources,
    title,
    interactions,
    playerStartingPoint,
    answer,
    hints,
    startingMessages,
    checklist,
    next,
};