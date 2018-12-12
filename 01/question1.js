const { readArray } = require("../parser")

const input = readArray(__dirname,"./input.txt")

const result = input.reduce((prev, val) => prev + parseInt(val), 0)

console.log(result)


