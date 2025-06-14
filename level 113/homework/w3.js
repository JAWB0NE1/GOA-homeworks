const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 25 }
]; 
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); 