const sentence = "The sun shines and the moon glows";
const words = sentence.toLowerCase().split(" ");
const uniqueWords = new Set(words);
console.log("1. Unique words:", uniqueWords);
function intersection(setA, setB) {
  return new Set([...setA].filter(item => setB.has(item)));
}
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
console.log("2. Intersection:", intersection(set1, set2)); 
function difference(setA, setB) {
  return new Set([...setA].filter(item => !setB.has(item)));
}
console.log("3. Difference (A - B):", difference(set1, set2)); 
function countUniqueChars(str) {
  return new Set(str).size;
}
console.log("4. Unique characters in 'hello':", countUniqueChars("hello"));
function sameUniqueElements(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);
  if (setA.size !== setB.size) return false;
  for (let val of setA) {
    if (!setB.has(val)) return false;
  }
  return true;
}
console.log("5. Same unique elements:", sameUniqueElements([1, 2, 2], [2, 1])); 
const array2D = [[1, 2], [2, 3], [1, 2]];
const serialized = array2D.map(sub => JSON.stringify(sub));
const uniqueSerialized = [...new Set(serialized)];
const unique2D = uniqueSerialized.map(str => JSON.parse(str));
console.log("6. Unique 2D array:", unique2D); 
const objArray = [{id: 1}, {id: 2}, {id: 1}];
const seenIds = new Set();
const filtered = objArray.filter(obj => {
  if (seenIds.has(obj.id)) return false;
  seenIds.add(obj.id);
  return true;
});
console.log("7. Filtered objects:", filtered); 
const visitors = ["alice", "bob", "alice", "carol", "bob"];
const uniqueVisitors = new Set(visitors);
console.log("8. Unique visitor count:", uniqueVisitors.size); 
const nums = [15, 30, 10, 45, 60, 15];
const divisibleSet = new Set(nums.filter(n => n % 3 === 0 && n % 5 === 0));
console.log("9. Divisible by 3 and 5:", divisibleSet);
function allUniqueChars(word) {
  return new Set(word).size === word.length;
}
console.log("10. Are all characters in 'lamp' unique?", allUniqueChars("lamp")); 
console.log("10. Are all characters in 'moon' unique?", allUniqueChars("moon"));