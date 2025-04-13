function displayDelayedMessage() {
    const message = prompt("Enter the message to display:");
    const delay = parseInt(prompt("Enter the delay in milliseconds:"), 10);

    if (isNaN(delay) || delay < 0) {
        console.error("Invalid delay value. Please enter a positive number.");
        return;
    }

    setTimeout(() => {
        console.log(`Message: ${message}`);
    }, delay);
}

displayDelayedMessage();