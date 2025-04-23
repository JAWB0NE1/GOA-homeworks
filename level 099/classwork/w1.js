const listContainer = document.querySelector("div");
const list = listContainer.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "Orange";
list.insertBefore(newItem, list.firstElementChild);
list.lastElementChild.remove();
console.log(list.firstElementChild.textContent);
console.log(list.children[1].parentElement.textContent);