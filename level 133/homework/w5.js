Promise.resolve(3)
  .then(n => n + 2)       
  .then(n => n * 4)       
  .then(n => n - 5)     
  .then(result => console.log("Final Result:", result));