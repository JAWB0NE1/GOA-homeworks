
class User {
    constructor(name, lastName, phoneNumber, email, password, confirmPassword) {
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    ver_movipiqre_amis_saxeli() {
        return `ჩემის სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერია ${this.phoneNumber}, ჩემი ელ.ფოსტაა ${this.email}.`;
    }
}
const user1 = new User("გიორგი", " გვარაძე", "155555555", "gamwarebulinugo778@fmail.com", "12345678", "12345678");
const user2 = new User("ნუგზრა", "სახელაშვილი", "255555555", "zviadabidzia@gmail.com", "12382944", "12382944");
const user3 = new User("გიორგი", "აჯაფსანდალი", "355555555", "minecraftpro@gmail.com", "i_em_black", "i_em_black");
console.log(user1.ver_movipiqre_amis_saxeli());
console.log(user2.ver_movipiqre_amis_saxeli());
console.log(user3.ver_movipiqre_amis_saxeli());