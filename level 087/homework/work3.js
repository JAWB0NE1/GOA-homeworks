function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.changePassword = function(newPassword) {
        this.password = newPassword;
    };
    this.getDetails = function() {
        return {
            username: this.username,
            email: this.email
        };
    };
}
const user1 = new User('negro', 'negro@gmail.com', 'initialPassword');
console.log(user1.getDetails());

user1.changePassword('newSecurePassword');
console.log(user1.password);
