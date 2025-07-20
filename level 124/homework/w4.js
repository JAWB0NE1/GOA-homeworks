const countriesMap = new Map([
    ["France", "Paris"],
    ["Japan", "Tokyo"],
    ["Brazil", "Brasília"],
    ["Canada", "Ottawa"],
    ["Australia", "Canberra"]
]);
for (const [country, capital] of countriesMap) {
    console.log(`The capital of ${country} is ${capital}`);
}