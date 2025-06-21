const prices = [10, 20, 30];
const totalPrice = prices.reduce((sum, price) => sum + price, 0);
console.log(totalPrice);