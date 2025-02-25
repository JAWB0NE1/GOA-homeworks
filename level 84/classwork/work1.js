function getValues(name, lastname, age, birthyear) {
    return {name,lastname,age,birthyear,};
}
let inputValues = getValues("მიხოა", "შეფრინდაძე", 0.1, 2026);
if (inputValues.name === "მიხოა") {
    console.log("სწორია.");
} else {
    console.log("ეგეთებს არ ვიცნობ.");
}
if (inputValues.lastname === "შეფრინდაძე") {
    console.log("ხო ეგ არის.");
} else {
    console.log("ეგ რომელია?");
}
if (inputValues.age === 0.1) {
    console.log("დიდი გაზრდილა.");
} else {
    console.log("არასწორია.");
}
if (inputValues.birthyear === 2026) {
    console.log("კაი დრო იყო.");
} else {
    console.log("არასწორია ძმაო.");
}