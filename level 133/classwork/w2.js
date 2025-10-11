function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000); 
  });
}

fetchData().then(() => {
  console.log("data fetched");
});