const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = numbers.filter(num => num % 2 === 0);
const squaredEvens = evens.map(num => num * num);
console.log(squaredEvens); 
