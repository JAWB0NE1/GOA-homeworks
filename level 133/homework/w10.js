const p1 = new Promise(res => setTimeout(() => res("One"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Two"), 2000));
const p3 = new Promise(res => setTimeout(() => res("Three"), 3000));

Promise.all([p1, p2, p3])
  .then(results => console.log("All Results:", results)); 