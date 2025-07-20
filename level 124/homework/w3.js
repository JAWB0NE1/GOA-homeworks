let countriesMap = new Map();
countriesMap.set("France", "Paris");
countriesMap.set("Japan", "Tokyo");
countriesMap.set("Brazil", "Brasília");
countriesMap.set("Canada", "Ottawa");
countriesMap.set("Australia", "Canberra");

let checkCountry = "Japan";
if (countriesMap.has(checkCountry)) {
    console.log("Yes");
} else {
    console.log("No");
}

for (let [country, capital] of countriesMap) {
    console.log(`The capital of ${country} is ${capital}`);
}