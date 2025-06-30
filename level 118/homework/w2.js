const product = {
  id: 101,
  name: "Laptop",
  price: 1200,
  brand: "TechCorp",
  color: "Silver",
  weight: "2kg"
};
const { id, name, ...details } = product;
console.log("ID:", id);
console.log("Name:", name);
console.log("Details:", details);