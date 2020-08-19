import level3 from "../level3";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import puzzlePng from "./puzzles/stickynote.png"
import Dungeon from '../../../music/dungeon.mp3';

const sources = {
    level: levelData,
    tilesets: {
        "tileset.json": tilesetData
    },
    images: {
        "map.png": mapPng
    }
}

const music = Dungeon;

const interactions = {
    "Trunk": {
        "type": "message",
        "messages": [
            {
                "messageTitle": "Me",
                "message": "The tree stump has something engraved in the wood...2009-2010 GPA to nearest tenth"
            }
        ]
    },
    "Door": {
        "type": "image",
        "image": puzzlePng
    },
};

const title = "Level 2 - The Transcript";

const playerStartingPoint = {
    row: 20, // row
    column: 15 // tile
}

const answer = "3.2";

const hints = [
    "Try knocking on the counselor's door.",
    "Look at the note on the bottom right of the transcript.",
    "Observe the tree stump",
    "To find overall GPA, take the averages of the GPA's",
    "The answer is 3.2",
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

const checklist = "checklist";

const next = level3;

export default {
    sources,
    interactions,
    music,
    title,
    playerStartingPoint,
    answer,
    hints,
    startingMessages,
    checklist,
    next,
};