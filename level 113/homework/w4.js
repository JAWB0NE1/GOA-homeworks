const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 15 },
    { name: "Keyboard", price: 25 }
]; 
const hasAffordableProduct = products.some(product => product.price < 20);
console.log(hasAffordableProduct);