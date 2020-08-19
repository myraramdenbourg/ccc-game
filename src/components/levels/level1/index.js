import level2 from "../level2";
import levelData from "./data/map.json";
import tilesetData from "./data/tileset.json";
import mapPng from "./data/map.png";
import puzzlePng from "./puzzles/Level1Puzzle.png";
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

const title = "Level 1 - The Beginning";

const music = Dungeon;

const interactions = {
  "Box": {
    "type": "message",
    "messages": [
      {
        "messageTitle": "Me",
        "message": "You search the boxes...but find nothing."
      }
    ]
  },
  "Table": {
    "type": "image",
    "image": puzzlePng
  },
  "Sword": {
    "type": "message",
    "messages": [
      {
        "messageTitle": "Me",
        "message": "You search the swords...but find nothing."
      }
    ]
  }
};

const playerStartingPoint = {
  row: 21, // row
  column: 5 // tile
}

const answer = "college";

const hints = [
  "Look around and observe some objects!",
  "The table on the right looks interesting...",
  "College is the answer ;)",
];

const startingMessages = [
  {
    messageTitle: "Me:",
    message: "Huh? Where am I? Some kind of dungeon looking place...I should take a look around."
  },
];

const checklist = "checklist";

const next = level2;

export default {
  sources,
  interactions,
  title,
  music,
  playerStartingPoint,
  answer,
  hints,
  startingMessages,
  checklist,
  next,
};