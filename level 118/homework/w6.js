function getMax(a, b, c) {
  return Math.max(a, b, c);
}
const values = [25, 10, 35, 5];
const result = getMax(...values.slice(0, 3));
console.log("Maximum of first three:", result);