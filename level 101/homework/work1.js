const myDiv = document.getElementById("myDiv");
myDiv.classList.add("highlight");
myDiv.classList.remove("highlight");
const toggleButton = document.getElementById("toggleButton");
const targetDiv = document.getElementById("targetDiv");

toggleButton.addEventListener("click", () => {
    targetDiv.classList.toggle("active");
});
const checkParagraph = document.getElementById("checkParagraph");
console.log(checkParagraph.classList.contains("important")); 
const replaceDiv = document.getElementById("replaceDiv");
replaceDiv.classList.replace("red", "blue");
const itemDiv = document.getElementById("itemDiv");
console.log(itemDiv.classList.item(1));