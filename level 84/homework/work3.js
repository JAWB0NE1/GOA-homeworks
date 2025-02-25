function multiplyNumbers(start, end) {
    let product = 1; 
    for (let i = start; i <= end; i++) {
      product *= i;
    }
    return product;
}
console.log(multiplyNumbers(1, 5)); 
console.log(multiplyNumbers(3, 7)); 
console.log(multiplyNumbers(2, 4)); 
  