function generateRandomNumbersAndCalculateAverage(N) {
    const numbers = [];
    let sum = 0;
    for (let i = 0; i < N; i++) {
        const randomNumber = Math.random() * 100;
        numbers.push(randomNumber);
        sum += randomNumber;
    }
    const average = sum / N;
    return {
        numbers: numbers,
        average: average
    };
}
const N = 10; 
const result = generateRandomNumbersAndCalculateAverage(N);
console.log("Generated Numbers:", result.numbers);
console.log("Average:", result.average);