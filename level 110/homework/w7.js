const obj = { name: "Janeza", age: 25, role: "Developer" };
console.log("Keys in the object:");
for (let key in obj) {
    console.log(key);
}
const arr = ["JS", "React", "Node"];
console.log("\nValues in the array:");
for (let value of arr) {
    console.log(value);
}