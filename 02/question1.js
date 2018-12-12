const { readArray } = require("../parser");

const input = readArray(__dirname, "./input.txt");

const result = input.reduce(
  (counts, boxId) => {
    const letterMap = {};
    for (const letter of boxId) {
      letterMap[letter] = (letterMap[letter] || 0) + 1;
    }
    const hasTwos = Object.keys(letterMap).some(key => letterMap[key] === 2);
    const hasThrees = Object.keys(letterMap).some(key => letterMap[key] === 3);

    return {
      twos: counts.twos + (hasTwos ? 1 : 0),
      threes: counts.threes + (hasThrees ? 1 : 0)
    };
  },
  { twos: 0, threes: 0 }
);

result;
