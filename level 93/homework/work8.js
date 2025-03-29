let numbers = [10, 20, 30, 40, 50];
let additionalNumbers = [60, 70, 80];
let combinedArray = numbers.concat(additionalNumbers);

numbers.copyWithin(numbers.length - 2, 1, 3);
numbers.fill(100, 0, 3);

let lastElement = numbers.pop();
let firstElement = numbers.shift();

numbers.unshift(5, 15);
let numbersString = numbers.join("-");
let slicedArray = numbers.slice(1, 4);

numbers.splice(2, 2, 200, 300);

let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArr.flat();

let includesFifty = numbers.includes(50);
let indexOfThirty = numbers.indexOf(30);
let lastIndexOfTwenty = numbers.lastIndexOf(20);

numbers.push(90, 100);

console.log("Combined Array:", combinedArray);
console.log("Modified Numbers:", numbers);
console.log("Last Element:", lastElement);
console.log("First Element:", firstElement);
console.log("String of Numbers:", numbersString);
console.log("Sliced Array:", slicedArray);
console.log("Flattened Array:", flatArray);
console.log("Includes 50:", includesFifty);
console.log("Index of 30:", indexOfThirty);
console.log("Last Index of 20:", lastIndexOfTwenty);
console.log("Final Numbers Array:", numbers);