const fruits = ["ვაშლი", "ბანანი", "სტაფილო", "ვაშლი", "მსხალი", "ბანანი"];
const unik = [...new Set(fruits)];
unik.forEach(fruits => {
    console.log(fruits);
});