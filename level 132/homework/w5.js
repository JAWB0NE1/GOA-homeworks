Promise.resolve(5)
  .then(n => n * 2)  
  .then(n => n * 2)   
  .then(n => n * 2)   
  .then(result => console.log("Final Result:", result)); 