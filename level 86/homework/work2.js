class Student {
    constructor(name, age, faculty, course, averageGrade) {
        this.name = name; 
        this.age = age;  
        this.faculty = faculty;  
        this.course = course; 
        this.averageGrade = averageGrade; 
    }
}
const student1 = new Student("გიორგი პაპავა", 21, "ინფორმატიკა", "თამარ მეფე", 8.7);
console.log(student1);
console.log("Student Name: " + student1.name);
console.log("Student Age: " + student1.age);
console.log("Student Faculty: " + student1.faculty);
console.log("Student Course: " + student1.course);
console.log("Student Average Grade: " + student1.averageGrade);
console.log("Student Name: " + student1["name"]);
console.log("Student Age: " + student1["age"]);
console.log("Student Faculty: " + student1["faculty"]);
console.log("Student Course: " + student1["course"]);
console.log("Student Average Grade: " + student1["averageGrade"]);
console.log(`${student1.name} არის ${student1.age} წლის სტუდენტი, რომელიც სწავლობს ${student1.faculty} ფაკულტეტზე ${student1.course} კურსზე და მისი საშუალო ქულა არის ${student1.averageGrade}.`);
