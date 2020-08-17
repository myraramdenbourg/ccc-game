import level2 from "../level2";
import levelData from "./data/dungeonGold.json";
import tilesetData from "./data/dungeonGoldtileset.json";
import dungeonGoldPng from "./data/dungeonGold.png";

const sources = {
  level: levelData,
  tilesets: {
    "dungeonGoldtileset.json": tilesetData
  },
  images: {
    "dungeonGold.png": dungeonGoldPng
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
  row: 20, // row
  column: 5 // tile
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