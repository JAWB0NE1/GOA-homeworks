const academy = {
    name: "Code Academy",
    courses: ["JavaScript Basics", "Advanced Python", "Web Development"],
    socialLink: "https://codeacademy.com",
    reviews: [
      {
        name: "Alice",
        status: "parent",
        review: "Great academy, my child learned a lot!"
      },
      {
        name: "Bob",
        status: "child",
        review: "I enjoyed the practical lessons."
      },
      {
        name: "Charlie",
        status: "parent",
        review: "Helpful teachers and good resources."
      }
    ]
};
Object.entries(academy).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
console.log(Object.keys(academy));
console.log(Object.values(academy));
console.log(academy.hasOwnProperty("name"));
const newObject = { member: ["John Doe", "Jane Smith"] };
const mergedObject = { ...academy, ...newObject };
console.log(mergedObject);
Object.freeze(academy);
console.log(Object.isFrozen(academy)); 