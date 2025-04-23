let number = 1;
for (let i = 1; i <= 10000; i++) {
  number *= i;
  if (number > 10000) {
    break;
  }
}
console.log(number);
//made with love to mentor//