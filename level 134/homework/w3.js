const p1 = new Promise(res => setTimeout(() => res("1s"), 1000));
const p2 = new Promise(res => setTimeout(() => res("0.5s"), 500));
const p3 = new Promise(res => setTimeout(() => res("2s"), 2000));

Promise.race([p1, p2, p3])
  .then(result => console.log("Fastest:", result)); 