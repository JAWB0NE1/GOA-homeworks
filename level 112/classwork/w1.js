const fruits = ["Strawberry", "Blueberry", "Pineapple", "Watermelon", "Banana", "Apple", "Mango", "Papaya"];
const filteredFruits = fruits.filter(fruit => fruit.length > 7 && fruit.length < 11);
console.log(filteredFruits);