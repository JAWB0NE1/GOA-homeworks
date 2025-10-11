const promise4 = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
});

promise4
  .then(msg => console.log("Resolved:", msg))
  .catch(err => console.log("Rejected:", err));