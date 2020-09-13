import level6 from "../level6";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
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

const title = "Level 5 - The Evil FAFSA";

const music = Dungeon;

const interactions = {
    "MoneyDoor": {
        "type": "message",
        "messages": [
            {
                "messageTitle": "Door",
                "message": "Behind me is some government dough."
            },
            {
                "messageTitle": "Door",
                "message": "It's used for college students so they can grow."
            },
            {
                "messageTitle": "Door",
                "message": "So I better make sure I apply and get paid."
            },
            {
                "messageTitle": "Door",
                "message": "If I have social security, where can I find the website for Federal Student Aid?"
            },
        ]
    },
    "Swords": {
        "type": "message",
        "messages": [
            {
                "messageTitle": "Me",
                "message": "Just some very sharp swords.. "
            },
        ]
    },
};

const playerStartingPoint = {
    row: 19, // row
    column: 8 // tile
}

const answer = "https://studentaid.gov/";

const hints = [
    "Inspect the door to find a riddle.",
    "What's the FAFSA website?",
    "The answer is https://studentaid.gov/",
];

const startingMessages = [
    {
        messageTitle: "Me:",
        message: "I'm back in the dungeon...but something seems different..I smell gold!"
    },
];

const checklist = "checklist4";

const next = level6;

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