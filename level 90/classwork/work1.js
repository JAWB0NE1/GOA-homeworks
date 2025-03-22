function Contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function() {
        console.log(this.name + this.number);
    };
}
const contact1 = new Contact("nugo", "555 646 546");
const contact2 = new Contact("denzel_UWashington", "987 654 3210");
contact1.print();
contact2.print();
