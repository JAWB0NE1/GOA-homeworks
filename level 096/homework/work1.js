function increasePrices(prices, increase) {
    return prices.map(price => price + increase);
}
const prices = [10.0, 20.0, 30.0, 40.0];
const increase = parseFloat(prompt("Enter the amount to increase the prices by:"));
const newPrices = increasePrices(prices, increase);

console.log("Original prices:", prices);
console.log("New prices:", newPrices);