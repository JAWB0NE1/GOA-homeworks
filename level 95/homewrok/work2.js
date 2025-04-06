function selectPersonToPay(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
const namesList = ["ნიკა", "თამარ", "ლაშა", "მარიამ", "გიორგი"];
const selectedPerson = selectPersonToPay(namesList);
console.log(`${selectedPerson} უნდა გადაიხადოს ყველას საკვების გადასახადი!`);