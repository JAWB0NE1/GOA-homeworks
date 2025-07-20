let countriesAndCapitals = {
    France: "Paris",
    Japan: "Tokyo",
    Brazil: "Brasília",
    Canada: "Ottawa",
    Australia: "Canberra"
};
console.log("Countries and Capitals:");
for (let country in countriesAndCapitals) {
    console.log(`${country}: ${countriesAndCapitals[country]}`);
}