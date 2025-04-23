let students = ["Alice", "Bob", "Charlie"];
let grades = [85, 90, 78];
function addStudent(studentName, grade) {
  students.unshift(studentName);
  grades.unshift(grade);
  return { students, grades };
}

function removeLastStudent() {
  students.pop(); 
  grades.pop();
  return { students, grades };
}
function replaceGrade(index, newGrade) {
  grades.splice(index, 1, newGrade);
  return grades;
}
function updateGrades(newGrade) {
  grades.fill(newGrade);
  return grades;
}
console.log("Before:", { students, grades });
console.log("Add student:", addStudent("Diana", 92));
console.log("Remove last student:", removeLastStudent());
console.log("Replace grade at index 1:", replaceGrade(1, 95));
console.log("Update all grades to 100:", updateGrades(100));