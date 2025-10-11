const randomOutcome = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("Success") : reject("Failure");
});

randomOutcome
  .then(msg => console.log("Result:", msg))
  .catch(err => console.log("Error:", err));