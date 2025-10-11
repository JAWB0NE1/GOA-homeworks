const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 seconds have passed");
  }, 2000);
});

promise3.then(msg => console.log(msg)); 