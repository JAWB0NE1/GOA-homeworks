const password = 'Group 24_25 is best';
function checkPassword() {
    let attempts = 0; 
    const maxAttempts = 3;
    while (attempts < maxAttempts) {
        let userInput = prompt('შეიყვანეთ პაროლი:');
        
        if (userInput === password) {
            alert('თქვენი შეყვანილი პაროლი სწორია');
            return; 
        } else {
            attempts++; 
            alert('არასწორი პაროლი. დარჩენილი ცდები: ' + (maxAttempts - attempts));
        }
    }
    alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
}
checkPassword()