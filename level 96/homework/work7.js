function logMessageOne() {
    console.log("Message 1: Hello, world!");
}

function logMessageTwo() {
    console.log("Message 2: JavaScript is awesome!");
}

function logMessageThree() {
    console.log("Message 3: Keep learning and coding!");
}

function logMessageFour() {
    console.log("Message 4: You've got this!");
}

function logMessageFive() {
    console.log("Message 5: Have a great day!");
}

function executeFunctionsInSequence() {
    setTimeout(logMessageOne, 1000); 
    setTimeout(logMessageTwo, 2000);
    setTimeout(logMessageThree, 3000); 
    setTimeout(logMessageFour, 4000);
    setTimeout(logMessageFive, 5000);
}

executeFunctionsInSequence();