let ulElement = document.createElement('ul');
["Item 1", "Item 2", "Item 3"].forEach(text => {
    let liElement = document.createElement('li');
    liElement.textContent = text;
    ulElement.appendChild(liElement);
});
document.body.appendChild(ulElement);
console.log("First child:", ulElement.firstChild.textContent);
console.log("Last child:", ulElement.lastChild.textContent);