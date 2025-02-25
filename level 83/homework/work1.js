function selectRandomPerson(names) {
    const selectedPerson = names[Math.random() * names.length | 0];
    return `${selectedPerson} გადაიხდის ყველას საკვების გადასახადს!`;
}
const namesList = ["გიორგი", "ნინო", "მარიამი", "სანდრო", "ლუკა"];
console.log(selectRandomPerson(namesList));
  