import level7 from "../level7";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import essay from "./puzzles/essay.png";

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
                "message": "Essay advice: Show, don't tell."
            },
        ]
    },
    "Bed": {
        "type": "message",
        "messages": [
            {
                "messageTitle": "Me",
                "message": "There's a letter! It says:"
            },
            {
                "messageTitle": "Me",
                "message": "Essay advice: Make your essay stand out."
            },
            {
                "messageTitle": "Me",
                "message": "Ooh I know! I could write about my grandma and her favorite food. What was it again?"
            },
        ]
    },
    "Shelf": {
        "type": "image",
        "image": essay
    },
};

const playerStartingPoint = {
    row: 19, // row
    column: 15 // tile
}

const answer = "kimchi";

const hints = [
    "Did you observe the chest?",
    "Did you observe the bookshelf?",
    "Did you observe the bed?",
    "My grandma always loved kimchi.",
    "The answer is kimchi.",
];

const startingMessages = [
    {
        messageTitle: "Me:",
        message: "This is my bedroom! What could be hiding in here."
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