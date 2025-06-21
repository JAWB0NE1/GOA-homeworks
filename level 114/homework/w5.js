const products = [
  { name: 'Notebook', price: 25 },
  { name: 'Pen', price: 5 },
  { name: 'Backpack', price: 40 }
];
const hasAffordableProduct = products.some(product => product.price < 20);