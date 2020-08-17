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
    dialogue: [
      "Hi I'm the teacher",
      "hihihihi"]
  },
  {
    type: "box1",
    position: (15, 15),
    dialogue: [
      "this is box1"
    ],
    // action: showLetter()
  }
];

const playerStartingPoint = {
  row: 19, // row
  column: 8 // tile
}

const puzzle = "puzzle";

const answer = "answer";

const hints = [
  "Hint 1",
  "Hint 2",
  "Hint 3"
];

const messages = [
  "Huh? Where am I… some kind of dungeon looking place.. maybe I should look around.",
];

const messageTitle = ["Me"];

const checklist = "/assets/checklist.png";

const next = level2;

export default {
  sources,
  title,
  characters,
  playerStartingPoint,
  puzzle,
  answer,
  hints,
  messages,
  messageTitle,
  checklist,
  next,
};