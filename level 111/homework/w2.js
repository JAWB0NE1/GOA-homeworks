const getFullName = ({ firstName, lastName = "Doe" }) => `${firstName} ${lastName}`;
console.log(getFullName({ firstName: "John", lastName: "Smith" })); 
console.log(getFullName({ firstName: "Jane" })); 