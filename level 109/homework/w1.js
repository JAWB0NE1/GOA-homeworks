const person = {
    name: "გიორგი",
    age: 30,
    city: "თბილისი"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}