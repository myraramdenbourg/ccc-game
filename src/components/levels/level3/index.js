import level4 from "../level4";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import puzzle from "./puzzles/decoration.png";
import Teacher from '../../../music/teacher.mp3';

const sources = {
    level: levelData,
    tilesets: {
        "tileset.json": tilesetData
    },
    images: {
        "map.png": mapPng
    }
}

const title = "Level 3 - The Letter of Recommendation";

const music = Teacher;

const interactions = {
    "Teacher": {
        "type": "message",
        "messages": [
            {
                "messageTitle": "Mrs. Kibel",
                "message": "Hey! What can I help you with?"
            },
            {
                "messageTitle": "Me",
                "message": "I was wondering if you'd write me a letter of recommendation for my college applications."
            },
            {
                "messageTitle": "Mrs. Kibel",
                "message": "Of course! I'll have that ready for you in a week or two. Could you do me a quick favor though?"
            },
            {
                "messageTitle": "Me",
                "message": "Sure. What do you need me to do?"
            },
            {
                "messageTitle": "Mrs. Kibel",
                "message": "Over there on your right there's a map next to the door. Could you help me solve that?"
            },
        ]
    },
    "Decoration": {
        "type": "image",
        "image": puzzle
    },
};

const playerStartingPoint = {
    row: 19, // row
    column: 8 // tile
}

const answer = "cougar";

const hints = [
    "Talk to the teacher.",
    "Observe the decoration to the left of the door.",
    "The cypher should say: UH Mascot",
    "The University of Houston mascot is a cougar!",
];

const startingMessages = [
    {
        messageTitle: "Me:",
        message: "That's Mrs. Kibel! I need to ask her for a recommendation letter, but she's looking bigger and more intimidating than ever!"
    },
];

const checklist = "checklist2";

const next = level4;

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