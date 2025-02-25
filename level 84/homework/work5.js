function calculateSum(n) {
    let sum = 0;
    
    switch (n) {
      case n >= 1:
        for (let i = 1; i <= n; i++) {
          sum += i;
        }
        break;
      default:
        return 0;
    }
    
    return sum;
}
console.log(calculateSum(5)); 
console.log(calculateSum(10)); 
console.log(calculateSum(0)); 
  