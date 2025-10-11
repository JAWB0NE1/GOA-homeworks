const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.reject("C failed");

Promise.all([p1, p2, p3])
  .catch(error => console.log("Failed:", error));