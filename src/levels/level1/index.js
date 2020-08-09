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

const title = "Level 1 - The Beginning";

const characters = [
  {
    type: 'teacher',
    position: (10, 10),
    dialogue: [
      "Hello student...",
      "Escape this high school by completing your college application. yaknow, the thing you've been procrastinating on? Good luck!",
      "Enter hello in the text box to begin"]
  }
];

const playerStartingPoint = (5, 5);

const puzzle = {};

const answer = {};

const message = {
  title: 'Welcome',
  body: ``
};

export default {
  tiles,
  title,
  characters,
  playerStartingPoint,
  puzzle,
  answer,
  message
};