
export function getYear() {
  return new Date().getFullYear();
}
export function getMonth() {
  return new Date().getMonth() + 1;
}
export default function getDateString() {
  const date = new Date();
  return `${date.getDate()}/${getMonth()}/${getYear()}`;
}