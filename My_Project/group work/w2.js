let count = 0;
let value = document.getElementById("value");
document.getElementById("increase").addEventListener("click", function () {
  count++;
  updateDisplay();
});
document.getElementById("decrease").addEventListener("click", function () {
  count--;
  updateDisplay();
});
document.getElementById("reset").addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
function updateDisplay() {
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
}