const product = {
  id: 101,
  details: {
    name: "Laptop",
    price: 1200
  }
};

const { details: { name: productName, price: productPrice } } = product;