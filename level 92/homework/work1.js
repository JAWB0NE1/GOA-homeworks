const numsArray = [1, 2, 3];
const strArray = ["a", "b", "c"];
let combinedArray = numsArray.concat(strArray);
console.log("After concatenation:", combinedArray);
combinedArray.copyWithin(4, 0, 3);
console.log("After copyWithin:", combinedArray); 
combinedArray.fill("filled", 2, 5);
console.log("After fill:", combinedArray); 
combinedArray.pop();
console.log("After pop:", combinedArray);
combinedArray.shift();
console.log("After shift:", combinedArray);
combinedArray.unshift(100, 200);
console.log("Final array:", combinedArray);