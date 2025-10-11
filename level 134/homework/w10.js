const nums = [
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30)
];

Promise.all(nums)
  .then(values => {
    const doubled = values.map(n => n * 2);
    console.log("Doubled:", doubled); // [20, 40, 60]
  });