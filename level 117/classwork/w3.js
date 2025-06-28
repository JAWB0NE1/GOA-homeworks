const person = {
  name: "Giorgi",
  contacts: ["555-1234", "giorgi@example.com"],
  address: {
    city: "Batumi",
    street: "Rustaveli Ave"
  }
};

const {
  name,
  contacts: [phone, email],
  address: { city, street }
} = person;

console.log(name);   
console.log(phone); 
console.log(email);  
console.log(city);   
console.log(street);