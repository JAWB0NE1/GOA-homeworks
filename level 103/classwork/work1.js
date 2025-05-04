const buttons = document.querySelectorAll("button");
const displayedImage = document.getElementById("displayedImage");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const imageSrc = button.getAttribute("data-image");
        displayedImage.src = imageSrc;
        displayedImage.style.display = "block";
    });
});