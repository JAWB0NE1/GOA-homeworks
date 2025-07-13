function getDefaultGreeting() {
  return 'Hello there!';
}

function greet(message = getDefaultGreeting()) {
  console.log(message);
}