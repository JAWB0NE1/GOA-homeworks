const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evennumbers = numbers.filter(num => num % 2 === 0);
console.log(evennumbers);
const users = [age=15,age=47,age=20,age=67];
const adults = users.filter(user => user.age >= 18);
console.log(adults);
const xili = ["ვაშლი", "ატამი", "ბანანი", "გარგარი", "ქლიავი"];
const longWords = xili.filter(xili => xili.length > 5);
console.log(longWords); 