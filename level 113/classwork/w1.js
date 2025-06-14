const numbers1 = [2, 4, 6, 8];
const allEven = numbers1.every(num => num % 2 === 0);
console.log(allEven); 
const numbers2 = [1, 3, 5, 8];
const hasEven = numbers2.some(num => num % 2 === 0);
console.log(hasEven); 
const numbers3 = [1, 2, 3, 4];
const doubled = numbers3.map(num => num * 2);
console.log(doubled); 
//every() ამოწმებს არის თუ არა ყველა true
//some() ამოწმებს, არსებობს თუ არა მასივში მინიმუმ ერთი ელემენტი
//map() აორმაგებს