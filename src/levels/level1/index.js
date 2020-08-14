import level2 from "../level2";

const tiles = [
  [0, 0, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5],
  [0, 0, 0, 0, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [20, 0, 0, 4, 5, 5, 0, 0, 5, 5, 5, 0, 3, 0, 0, 0, 5, 5, 5, 0],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
  [0, 4, 0, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
  [0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0],
  [0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 0],
  [5, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0],
  [5, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0],
  [5, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
];

// const tiles = [
//   [0, 0, 5, 5, 5],
//   [0, 0, 0, 20, 5],
//   [5, 0, 0, 0, 5],
//   [5, 0, 0, 0, 5],
//   [5, 5, 5, 5, 5],
// ]

const title = "Level 1 - The Beginning";

const characters = [
  {
    type: 'teacher',
    position: (10, 10),
    dialogue: [
      "Hi I'm the teacher",
      "hihihihi"]
  },
  {
    type: 'box1',
    position: (15, 15),
    dialogue: [
      "this is box1"
    ],
    // action: showLetter()
  }
];

const playerStartingPoint = (5, 5);

const puzzle = "puzzle";

const answer = "answer";

const hints = [
  "Hint 1",
  "Hint 2",
  "Hint 3"
];

const messages = [
  "Huh? Where am I… some kind of dungeon looking place.. maybe I should look around.",
  "Escape this high school by completing your college application. yaknow, the thing you've been procrastinating on? Good luck!",
  "Enter hello in the text box to begin"
];

const messageTitle = ["Myra"];

const next = level2;

export default {
  tiles,
  title,
  characters,
  playerStartingPoint,
  puzzle,
  answer,
  hints,
  messages,
  messageTitle,
  next,
};