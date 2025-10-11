const nested = Promise.resolve(
  Promise.resolve("Nested resolved!")
);

nested.then(inner => inner.then(result => console.log(result)));