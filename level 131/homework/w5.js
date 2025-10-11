const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("მონაცემები მიღებულია");
  }, 2000);
});

getData.then(data => console.log(data)); 