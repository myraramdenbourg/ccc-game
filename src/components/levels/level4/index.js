import level5 from "../level5";
import levelData from "./data/level.json";
import tilesetData from "./data/tileset.json";
import townPng from "./data/town.png";

const sources = {
    level: levelData,
    tilesets: {
        "tileset.json": tilesetData,
    },
    images: {
        "town.png": townPng,
    }
}

const title = "Level 4 - The Resume";

const characters = [
    {
        type: "teacher",
        position: (10, 10),
        dialog: [
            {
                messageTitle: "Teacher",
                message: "Hi I'm teacher"
            },
            {
                messageTitle: "Me",
                message: "Hi teacher"
            },
        ]
    },
    {
        type: "box1",
        position: (15, 15),
        dialog: [
            {
                messageTitle: "Box",
                message: "Hi I'm box"
            },
        ],
        // popUp: puzzlePopup("letter") this pops up after the dialogue
    }
];

const playerStartingPoint = {
    row: 19, // row
    column: 8 // tile
}

const answer = "college";

const hints = [
    "Did you observe the chest?",
    "College is the answer ;)",
];

const StartingMessages = [
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
    characters,
    playerStartingPoint,
    answer,
    hints,
    StartingMessages,
    checklist,
    next,
};