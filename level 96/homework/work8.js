function personalizedGreeting() {
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good Morning";
        } else if (hours >= 12 && hours < 18) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }

        document.body.innerHTML = `<h1>${greeting}!</h1>`;
        console.log(greeting);
    }, 1000);
}

personalizedGreeting();