let people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  
  let morePeople = [
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
  ];
  
  let allPeople = people.concat(morePeople);
  allPeople.copyWithin(allPeople.length - 2, 0, 2);
  allPeople.fill({ id: 0, name: 'Unknown' }, 0, 2);
  let removedPerson = allPeople.pop();
  let firstRemovedPerson = allPeople.shift();
  allPeople.unshift({ id: 6, name: 'Frank' }, { id: 7, name: 'Grace' });
  let peopleString = allPeople.map(person => person.name).join(",");
  let somePeople = allPeople.slice(1, 4);
  
  console.log("All People:", allPeople);
  console.log("Removed Person:", removedPerson);
  console.log("First Removed Person:", firstRemovedPerson);
  console.log("People String:", peopleString);
  console.log("Some People:", somePeople);