function fizzBuzz(numbers) {
    const result = [];
    for (let num of numbers) {
        if (num % 3 === 0 && num % 5 === 0) {
            result.push("FizzBuzz");
        } else if (num % 3 === 0) {
            result.push("Fizz");
        } else if (num % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(num);
        }
    }
    return result;
}
const numbersList = [1, 2, 3, 4, 5, 15, 16, 20, 21];
const filteredList = fizzBuzz(numbersList);
console.log(filteredList);