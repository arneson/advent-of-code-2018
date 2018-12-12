const { readArray } = require("../parser")

const input = readArray(__dirname,"./input.txt")

const history = {}
let first = null
let index = 0
let freq = 0
while (!first) {
    freq += parseInt(input[index])
    if (history[freq]) {
        first = freq
    }
    history[freq] = true
    index = (index + 1) % input.length
}

console.log(first)



