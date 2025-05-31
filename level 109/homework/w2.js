const prices = {
    apple: 2,
    banana: 3,
    orange: 4
};

let total = 0;
for (let key in prices) {
    total += prices[key];
}
console.log(`ჯამი: ${total}`);