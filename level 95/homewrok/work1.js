function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false; 
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}
const year = prompt("Enter a year:");
if (isLeapYear(Number(year))) {
    console.log(`${year} is a leap year!`);
} else {
    console.log(`${year} is not a leap year!`);
}