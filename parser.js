const fs = require("fs");
const path = require("path");

const readArray = (dirName, filePath) => {
  const fileContent = fs.readFileSync(path.resolve(dirName, filePath), "utf-8");
  return fileContent.split("\n");
};

module.exports = { readArray };
