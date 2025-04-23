function startTimer() {
    let count = 0;
    setInterval(() => {
        console.log(`Timer: ${count} seconds`);
        count++;
    }, 1000);
}

startTimer();

function displayCurrentTime() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
    }, 1000);
}

displayCurrentTime();

function logRandomNumber() {
    setInterval(() => {
        const randomNumber = Math.random();
        console.log(`Random Number: ${randomNumber}`);
    }, 1000);
}

logRandomNumber();