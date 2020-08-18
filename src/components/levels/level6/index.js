import level7 from "../level7";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";

const sources = {
    level: levelData,
    tilesets: {
        "tileset.json": tilesetData
    },
    images: {
        "map.png": mapPng
    }
}

const title = "Level 6 - The Optional but Not Optional Essay";

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
    // "Plant": {
    //     "type": "image",
    //     "image": resume
    // },
};

const playerStartingPoint = {
    row: 19, // row
    column: 15 // tile
}

const answer = "college";

const hints = [
    "Did you observe the chest?",
    "College is the answer ;)",
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

const checklist = "checklist5";

const next = level7;

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