const p1 = Promise.reject("Immediate failure");
const p2 = new Promise(res => setTimeout(() => res("Delayed 1"), 1000));
const p3 = new Promise(res => setTimeout(() => res("Delayed 2"), 2000));

Promise.race([p1, p2, p3])
  .catch(error => console.log("Race Rejected:", error)); 