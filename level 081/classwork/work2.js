for (let number = 1; number <= 20; number++) {
    if (number % 3 === 0) {
        continue;
    }
    if (number === 15) {
        break;
    }
    console.log(number);
}
