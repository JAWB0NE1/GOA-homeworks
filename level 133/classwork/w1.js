function multiplyByTwo(num) {
  return Promise.resolve(num * 2);
}

Promise.resolve(5)
  .then(multiplyByTwo)
  .then(multiplyByTwo)
  .then(multiplyByTwo)
  .then(multiplyByTwo);