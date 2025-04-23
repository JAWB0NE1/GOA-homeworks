function generateFizzBuzzList(limit) {
    const result = [];
  
    for (let i = 1; i <= limit; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push('Fi');
      } else if (i % 3 === 0) {
        result.push('Fizz');
      } else if (i % 5 === 0) {
        result.push('Buzz');
      } else {
        result.push(i);
      }
    }
  
    return result;
}
const limit = 20;
console.log(generateFizzBuzzList(limit));
  