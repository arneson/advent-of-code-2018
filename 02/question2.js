const { readArray } = require("../parser");

const input = readArray(__dirname, "./input.txt");

const getAns = () => {
  d = {};
  for (let boxId of input) {
    for (let i = 0; i < boxId.length; i++) {
      const maskedBoxId = `${boxId.substring(0, i)}_${boxId.substring(i + 1)}`;
      if (d[maskedBoxId]) {
        return maskedBoxId.replace("_", "");
      }
      d[maskedBoxId] = true;
    }
  }
};

const result = getAns();

result;
