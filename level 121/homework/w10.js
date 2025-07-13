class Person {
  constructor(name, age = 30) {
    this.name = name;
    this.age = age;
  }
}
const person1 = new Person("Tako");
console.log(person1.age); 
const person2 = new Person("Giorgi", 22);
console.log(person2.age);