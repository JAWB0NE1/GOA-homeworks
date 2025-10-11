const randomPromise = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("Success") : reject("Failure");
});

randomPromise
  .then(res => console.log("Resolved:", res))
  .catch(err => console.log("Rejected:", err))
  .finally(() => console.log("Cleanup complete"));