const promise1 = new Promise((resolve, reject) => {
  resolve("Hello, Promise!");
});

promise1.then(msg => console.log(msg)); 