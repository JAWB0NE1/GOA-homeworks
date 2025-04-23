function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "ლუწი";
    } else {
      return "კენტი";
    }
}
let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
alert(checkEvenOrOdd(number));
  