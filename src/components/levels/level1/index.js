import level2 from "../level2";
import levelData from "./data/level.json";
import tilesetData from "./data/tileset.json";
import chestData from "./data/chest.json";
import dungeonPng from "./data/dungeon.png";
import chestPng from "./data/chest.png";

const sources = {
  level: levelData,
  tilesets: {
    "tileset.json": tilesetData,
    "chest.json": chestData
  },
  images: {
    "dungeon.png": dungeonPng,
    "chest.png": chestPng
  }
}

const title = "Level 1 - The Beginning";

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
    message: "Huh? Where am I… some kind of dungeon looking place.. maybe I should look around."
  },
];

const checklist = "checklist";

const next = level2;

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