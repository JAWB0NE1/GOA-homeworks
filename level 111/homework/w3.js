const sumArray = (arr = [1, 2, 3]) => arr.reduce((acc, num) => acc + num, 0);
console.log(sumArray([4, 5, 6])); 
console.log(sumArray([]));        