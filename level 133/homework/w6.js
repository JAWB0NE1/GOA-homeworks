function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`User ${id} data`), 1500);
  });
}

fetchUser(42).then(data => console.log(data)); 