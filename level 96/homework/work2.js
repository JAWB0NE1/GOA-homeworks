function displayCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
}
console.log(displayCurrentDateTime());
function calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += previousMonth;
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    return { years, months, days };
}

function showAgeOnWebpage() {
    const birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
    const age = calculateAge(birthdate);
    document.body.innerHTML = `Your age is ${age.years} years, ${age.months} months, and ${age.days} days.`;
}

showAgeOnWebpage();

function getDayOfWeek(dateInput) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateInput);
    return days[date.getDay()];
}

const inputDate = prompt("Enter a date (YYYY-MM-DD):");
console.log(`The day of the week is: ${getDayOfWeek(inputDate)}`);