const items = [
  { name: "Apple",  price: 2.5, quantity: 4 },
  { name: "Banana", price: 1.2, quantity: 6 },
  { name: "Cherry", price: 0.5, quantity: 20 }
];
const totalValue = items.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log(totalValue); 
