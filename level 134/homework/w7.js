const promises = [
  Promise.resolve("A"),
  Promise.reject("B failed"),
  Promise.resolve("C"),
  Promise.reject("D failed"),
  Promise.resolve("E")
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach((r, i) => {
      console.log(`Promise ${i + 1}:`, r.status, r.value || r.reason);
    });
  });