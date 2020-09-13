import level8 from "../level8";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import monsterPng from "./data/monster.png";
import monsterTileset from "./data/monster.json";
import Monster from '../../../music/monster.mp3';

const sources = {
    level: levelData,
    tilesets: {
        "tileset.json": tilesetData,
        "monster.json": monsterTileset
    },
    images: {
        "map.png": mapPng,
        "monster.png": monsterPng
    }
}

const title = "Level 7 - Turning in the Application";

const music = Monster;

const interactions = {
    "Monster": {
        "type": "message",
        "messages": [
            {
                "messageTitle": "CCC University",
                "message": "Hello human. I am CCC University. I believe you owe me an application."
            },
            {
                "messageTitle": "Me",
                "message": "Yes I've finished everything!"
            },
            {
                "messageTitle": "CCC University",
                "message": "Are you sure? You're telling me that you have "
            },
            {
                "messageTitle": "CCC University",
                "message": "Your transcript"
            },
            {
                "messageTitle": "CCC University",
                "message": "Your test scores"
            },
            {
                "messageTitle": "CCC University",
                "message": "Your letters of recommendation"
            },
            {
                "messageTitle": "CCC University",
                "message": "Your essays"
            },
            {
                "messageTitle": "CCC University",
                "message": "Your resume"
            },
            {
                "messageTitle": "CCC University",
                "message": "And your application??"
            },
            {
                "messageTitle": "Me",
                "message": "Yes I do!"
            },
            {
                "messageTitle": "CCC University",
                "message": "Great. Then answer one last question for me."
            },
            {
                "messageTitle": "CCC University",
                "message": "..."
            },
            {
                "messageTitle": "CCC University",
                "message": "Who is always here to support you in the application process?"
            },
        ]
    },
};

const playerStartingPoint = {
    row: 19, // row
    column: 8 // tile
}

const answer = "ccc";

const hints = [
    "Talk to the monster, I mean CCC University.",
    "The answer is CCC.",
];

const startingMessages = [
    {
        messageTitle: "Me:",
        message: "OHMYGOD IT'S A MONSTER!!"
    },
    {
        messageTitle: "Me:",
        message: "Oh wait it's just CCC University."
    },
];

const checklist = "checklist6";

const next = level8;

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