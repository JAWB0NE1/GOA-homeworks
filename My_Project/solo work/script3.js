let images = ["images (4).jpg", "images (6).jpg", "images (5).jpg", "images (3).jpg"];
let currentIndex = 0;
function updateSlide() {
    document.getElementById("slide").src = images[currentIndex];
}
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
}
function nextSlide() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlide();
    }
}
alert("Loged in to Georgia");