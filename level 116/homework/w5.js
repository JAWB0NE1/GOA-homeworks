const x = 10, y = 20;

const point = {
  coords: { x, y },
  toString() {
    return `(${x}, ${y})`;
  }
};

console.log(point);