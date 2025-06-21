const studentData = [
  { id: 1, name: "Alice", grades: { Math: [90, 85], Science: [88, 92], History: [85, 88] }, attendance: [true, true, false], extracurricular: ["Debate Team", "Drama"] },
  { id: 2, name: "Bob", grades: { Math: [78, 82], Science: [84, 85], History: [75, 80] }, attendance: [true, false, true], extracurricular: ["Football"] },
  { id: 3, name: "Charlie", grades: { Math: [95, 98], Science: [89, 91], History: [87, 90] }, attendance: [true, true, true], extracurricular: ["Debate Team"] }
];
const highestAvgSubject = studentData.reduce((subjectAvg, student) => {
  Object.keys(student.grades).forEach(subject => {
    const avgScore = student.grades[subject].reduce((a, b) => a + b) / student.grades[subject].length;
    if (!subjectAvg[subject]) subjectAvg[subject] = [];
    subjectAvg[subject].push(avgScore);
  });
  return subjectAvg;
}, {});
const avgScoresPerSubject = Object.keys(highestAvgSubject).reduce((maxSubject, subject) => {
  const avgOfSubject = highestAvgSubject[subject].reduce((a, b) => a + b) / highestAvgSubject[subject].length;
  if (!maxSubject || avgOfSubject > maxSubject.avg) {
    return { subject, avg: avgOfSubject };
  }
  return maxSubject;
}, {});
console.log("Subject with highest average score:", avgScoresPerSubject.subject); 
const debateTeamNames = studentData.reduceRight((names, student) => {
  if (student.extracurricular.includes("Debate Team")) {
    names.push(student.name);
  }
  return names;
}, []).join(" and ");

console.log("Debate Team members:", debateTeamNames); 
const allHaveGoodAttendance = studentData.every(student => {
  const attendanceRate = student.attendance.filter(attendance => attendance).length / student.attendance.length;
  return attendanceRate >= 0.5;
});
console.log("All students have good attendance:", allHaveGoodAttendance); 
const hasInactiveStudent = studentData.some(student => student.extracurricular.length === 0);

console.log("Has at least one inactive student:", hasInactiveStudent); 
studentData.forEach(student => {
  Object.keys(student.grades).forEach(subject => {
    if (student.grades[subject].includes(100)) {
      console.log(`Congratulations, ${student.name}, for achieving a perfect score in ${subject}!`);
    }
  });
});
studentData.forEach(student => {
  console.log(`Hello, ${student.name}!`);
});
const studentNames = studentData.map(student => student.name);
console.log("Student names:", studentNames);
const studentAverages = studentData.map(student => {
  const totalGrades = Object.keys(student.grades).reduce((sum, subject) => {
    return sum + student.grades[subject].reduce((a, b) => a + b) / student.grades[subject].length;
  }, 0);
  const numSubjects = Object.keys(student.grades).length;
  const average = totalGrades / numSubjects;
  return { name: student.name, average };
});
console.log("Student averages:", studentAverages); 
const highPerformingStudents = studentAverages.filter(student => student.average >= 85);
console.log("High performing students:", highPerformingStudents);
const strugglingStudents = studentData.filter(student => {
  return Object.keys(student.grades).some(subject => {
    return student.grades[subject].every(score => score < 70);
  });
});
console.log("Struggling students:", strugglingStudents);
const totalExtracurriculars = studentData.reduce((total, student) => total + student.extracurricular.length, 0);
console.log("Total extracurricular activities:", totalExtracurriculars); 