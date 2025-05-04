function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function changeColor() {
    document.getElementById("colorBox").style.backgroundColor = getRandomColor();
}
