let images = ["images (4).jpg", "images (6).jpg", "images (5).jpg", "images (3).jpg"];
let currentIndex = 0;
function updateSlide() {
    document.getElementById("slide").src = images[currentIndex];
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
}
alert("Loged in to Georgia")