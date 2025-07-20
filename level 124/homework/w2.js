let fruitsAndColors = {
    Apple: "Red",
    Banana: "Yellow",
    Grape: "Purple"
};


fruitsAndColors["Orange"] = "Orange";
fruitsAndColors["Kiwi"] = "Green";

delete fruitsAndColors["Banana"];
console.log("\nFruits and Their Colors:");
for (let fruit in fruitsAndColors) {
    console.log(`${fruit}: ${fruitsAndColors[fruit]}`);
}