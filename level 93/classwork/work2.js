const fruits = ['apple', 'orange', 'lemon', 'banana', 'grape'];
function processFruits(fruits) {
    const rfruit = fruits.slice(1, 3);
    fruits.splice(-2, 2, 'fig');
    const fruitString = fruits.join('-');
    return fruitString;
}
const result = processFruits(fruits);
console.log(result);