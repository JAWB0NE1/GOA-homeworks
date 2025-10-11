Promise.allSettled(promises)
  .then(results => {
    const failures = results.filter(r => r.status === "rejected").length;
    console.log("Rejected Count:", failures);
  });