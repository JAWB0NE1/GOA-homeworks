Promise.allSettled(promises)
  .then(results => {
    const fulfilled = results.filter(r => r.status === "fulfilled");
    console.log("Fulfilled:", fulfilled.map(r => r.value));
  });