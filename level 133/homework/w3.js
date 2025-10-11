function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Waited ${ms} ms`), ms);
  });
}

delay(1000).then(msg => console.log(msg)); 