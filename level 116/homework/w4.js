const title = "developer";
const level = 3;
const greet = () => "Hi";

const profile = {
  title,
  level,
  greet,
  ["isLevel" + level]: true
};

console.log(profile);