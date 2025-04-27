const myList = document.getElementById("myList");
const newListItem = document.createElement("li");
newListItem.textContent = "New Item";
myList.appendChild(newListItem);
const firstListItem = myList.firstElementChild;
if (firstListItem) {
    myList.removeChild(firstListItem);
}
const secondListItem = myList.children[1];
if (secondListItem) {
    secondListItem.textContent = "Updated Item";
}