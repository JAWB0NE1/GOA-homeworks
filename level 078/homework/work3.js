function getWeatherType(weatherNumber) {
    switch(weatherNumber) {
      case 1:
        return "მზიანი";
      case 2:
        return "წვიმიანი";
      case 3:
        return "მოღრუბლული";
      case 4:
        return "ქარიანი";
      default:
        return "არ არის დადგენილი";
    }
  }
let weatherNumber = parseInt(prompt("შეიყვანეთ ამინდის ტიპი (1-4):"));
alert(getWeatherType(weatherNumber));
  