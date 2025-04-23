const university = {
    name: "თბილისის სახელმწიფო უნივერსიტეტი",
    departments: 12,
    website: "https://www.tsu.ge",
    ratings: {
      student1: 4.5,
      student2: 4.8,
      student3: 4.2
    }
};
Reflect.ownKeys(university).forEach((key) => {
  console.log(`${key}:`, university[key]);
});
console.log("Scholarship exists:", Reflect.has(university, "scholarship"));
const updatedUniversity = { ...university, studentsCount: 20000 };
console.log("განახლებული უნივერსიტეტი:", updatedUniversity);
Object.freeze(updatedUniversity);
try {
  Reflect.set(updatedUniversity, "departments", 15); 
} catch (error) {
  console.log("შეცვლის შეცდომა:", error.message);
}
  console.log("ობიექტი გაყინულია:", Object.isFrozen(updatedUniversity));

  