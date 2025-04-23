const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(1);
const fullyFlatArray = nestedArray.flat(Infinity);
function checkElement(array, value) {
    return array.includes(value);
}
function findIndexOfElement(array, value) {
    return array.indexOf(value);
}
function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);
}
console.log(flatArray);
console.log(fullyFlatArray); 
console.log(checkElement(fullyFlatArray, 3)); 
console.log(findIndexOfElement(fullyFlatArray, 4));
console.log(findLastIndexOfElement(fullyFlatArray, 6));