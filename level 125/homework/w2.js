const numberSet = new Set([1, 2, 3, 4, 5]);
console.log("1. Number Set:", numberSet);
const fruitSet = new Set(["apple", "banana"]);
fruitSet.add("orange");
console.log("2. Fruit Set after adding 'orange':", fruitSet);
fruitSet.add("apple");
console.log("3. Fruit Set after adding duplicate 'apple':", fruitSet);
console.log("4. Does Fruit Set have 'banana'?", fruitSet.has("banana"));
fruitSet.delete("banana");
console.log("5. Fruit Set after removing 'banana':", fruitSet);
const colorSet = new Set(["blue", "green", "purple"]);
console.log("6. Favorite Colors:");
for (const color of colorSet) {
  console.log(color);
}
const nameSet = new Set(["Alice", "Bob", "Charlie"]);
const nameArray = [...nameSet];
console.log("7. Name Array:", nameArray);
const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log("8. Unique Numbers:", uniqueNumbers);
const letters = ['a', 'b', 'a', 'c', 'b'];
const uniqueLetters = new Set(letters);
console.log("9. Unique Letter Count:", uniqueLetters.size);
const tempSet = new Set(["x", "y", "z"]);
tempSet.clear();
console.log("10. Cleared Set:", tempSet);