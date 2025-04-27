const removableList = document.getElementById("removableList");
const secondItem = removableList.children[1];
if (secondItem) {
    removableList.removeChild(secondItem);
}