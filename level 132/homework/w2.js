const promise2 = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

promise2.catch(err => console.log("Error:", err));