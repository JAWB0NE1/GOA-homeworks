function sortMapByKey(map) {
    const sortedEntries = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    return new Map(sortedEntries);
}

const unsortedMap = new Map([
    ["kiwi", "green"],
    ["banana", "yellow"],
    ["apple", "red"]
]);

const sortedMap = sortMapByKey(unsortedMap);
for (const [key, value] of sortedMap) {
    console.log(`${key}: ${value}`);
}