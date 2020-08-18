import level8 from "../level8";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import monsterPng from "./data/monster.png";
import monsterTileset from "./data/monster.json";

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

const interactions = {
    "Monster": {
        "type": "message",
        "messages": [
            {
                "messageTitle": "Collegeboard",
                "message": "Hello human. I am Collegeboard. I believe you owe me an application."
            },
            {
                "messageTitle": "Me",
                "message": "Yes I've finished everything!"
            },
            {
                "messageTitle": "Collegeboard",
                "message": "Are you sure? You're telling me that you have "
            },
            {
                "messageTitle": "Collegeboard",
                "message": "Your transcript"
            },
            {
                "messageTitle": "Collegeboard",
                "message": "Your test scores"
            },
            {
                "messageTitle": "Collegeboard",
                "message": "Your letters of recommendation"
            },
            {
                "messageTitle": "Collegeboard",
                "message": "Your essays"
            },
            {
                "messageTitle": "Collegeboard",
                "message": "Your resume"
            },
            {
                "messageTitle": "Collegeboard",
                "message": "And your application??"
            },
            {
                "messageTitle": "Me",
                "message": "Yes I do!"
            },
            {
                "messageTitle": "Collegeboard",
                "message": "Great. Then answer one last question for me."
            },
            {
                "messageTitle": "Collegeboard",
                "message": "..."
            },
            {
                "messageTitle": "Collegeboard",
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
    "Talk to the monster, I mean Collegeboard.",
    "The answer is CCC.",
];

const startingMessages = [
    {
        messageTitle: "Me:",
        message: "OHMYGOD IT'S A MONSTER!!"
    },
    {
        messageTitle: "Me:",
        message: "Oh wait it's just Collegeboard."
    },
];

const checklist = "checklist6";

const next = level8;

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