export function first(arr) {
  return arr[0];
}
export function last(arr) {
  return arr[arr.length - 1];
}
export default function wrapEnds(arr) {
  return [last(arr), ...arr, first(arr)];
}