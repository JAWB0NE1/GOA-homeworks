function greetUser(name) {
    if (name === "") {
        name = "Guest";
    }
    return `Hello, ${name}!`;
}
console.log(greetUser("MasterJaneza")); 
console.log(greetUser("")); 
console.log(greetUser());