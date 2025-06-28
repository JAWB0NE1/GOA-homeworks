var car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2010,
  getInfo: function() {
    return this.brand + " " + this.model + " " + this.year ;
  }
};
console.log(car.getInfo()); 