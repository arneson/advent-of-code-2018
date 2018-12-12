const { readArray } = require("../parser");

const input = readArray(__dirname, "./input.txt").slice(0, 100);

const cloth = {};

const parse = def => {
  const data = def.split(" ");
  data;
  const startDef = data[2]
    .replace(":", '"')
    .split(",")
    .map(coord => parseInt(coord));
  const sizeDef = data[3]
    .replace(":", '"')
    .split("x")
    .map(m => parseInt(m));
  const start = { x: startDef[0], y: -startDef[1] };
  const end = { x: start.x + sizeDef[0], y: start.y - sizeDef[1] };
  return { id: data[0], start, end };
};
const draw = (plan, cloth) => {
  for (let x = plan.start.x; x < plan.end.x; x++) {
    for (let y = plan.start.y; y > plan.end.y; y--) {
      const clothCol = cloth[x] || {};
      clothCol[y] = clothCol[y] || [];
      clothCol[y].push(plan.id);
      cloth[x] = clothCol;
    }
  }
};

for (planDef of input) {
  const plan = parse(planDef);
  draw(plan, cloth);
}
const numberOfCollitions = Object.values(cloth).reduce((colSum, column) => {
  return (
    colSum +
    Object.values(column).reduce(
      (rowSum, cell) => rowSum + (cell.length > 1 ? 1 : 0),
      0
    )
  );
}, 0);

console.log(numberOfCollitions);
