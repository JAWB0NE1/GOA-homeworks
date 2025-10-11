const p1 = Promise.reject("Fail 1");
const p2 = Promise.reject("Fail 2");
const p3 = Promise.reject("Fail 3");

Promise.any([p1, p2, p3])
  .catch(error => console.log("All Failed:", error.message)); 