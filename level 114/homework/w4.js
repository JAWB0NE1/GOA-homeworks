const users = [
  { name: 'Luka', age: 25 },
  { name: 'Nino', age: 19 },
  { name: 'Giorgi', age: 31 }
];
const allAdults = users.every(user => user.age >= 18);