const originalMap = new Map([
    ["banana", "yellow"],
    ["apple", "red"],
    ["grape", "purple"]
]);

const mapToArray = Array.from(originalMap);
console.log("Converted to Array:", mapToArray);

const arrayToMap = new Map(mapToArray);
console.log("Converted back to Map:", arrayToMap);