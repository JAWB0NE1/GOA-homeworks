const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success");
const p3 = Promise.reject("Fail 2");

Promise.any([p1, p2, p3])
  .then(result => console.log("Any Success:", result));