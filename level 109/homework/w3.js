const mixedData = {
    name: "მარიამი",
    age: 25,
    isStudent: true,
    salary: 1500,
    city: "ბათუმი"
};

for (let key in mixedData) {
    if (typeof mixedData[key] === "number") {
        console.log(`${key}: ${mixedData[key]}`);
    }
}