const fruits = ['apple', 'orange', 'lemon', 'banana', 'grape'];
const citrus = fruits.slice(1, 3);
console.log(citrus);
fruits.splice(-2, 2, 'fig');
console.log(fruits);
const fruitString = fruits.join('-');
console.log(fruitString);
