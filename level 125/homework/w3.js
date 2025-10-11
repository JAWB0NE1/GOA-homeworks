const emptySet = new Set();
console.log("1. Empty Set:", emptySet);
emptySet.add("cat");
emptySet.add("dog");
emptySet.add("parrot");
console.log("2. Set after adding animals:", emptySet);
console.log("3. Does the Set have 'dog'?", emptySet.has("dog")); 
emptySet.delete("parrot");
console.log("4. Set after removing 'parrot':", emptySet);
console.log("5. Size of the Set:", emptySet.size); 
const numberSet = new Set([10, 20, 30, 40]);
console.log("6. Looping through numberSet:");
for (const num of numberSet) {
  console.log(num);
}
numberSet.clear();
console.log("7. numberSet after clearing:", numberSet);
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4];
const uniqueSet = new Set(arrayWithDuplicates);
console.log("8. Set from array with duplicates:", uniqueSet);
const arrayFromSet = [...uniqueSet];
console.log("9. Array from Set:", arrayFromSet);
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}
console.log("10. Does [1, 2, 3, 4] have duplicates?", hasDuplicates([1, 2, 3, 4])); 
console.log("10. Does [1, 2, 2, 3] have duplicates?", hasDuplicates([1, 2, 2, 3])); 