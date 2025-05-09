let currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let interval;

function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlide(currentIndex);
}

function startSlider() {
    interval = setInterval(() => changeSlide(1), 3000);
}

function pauseSlider() {
    clearInterval(interval);
}

startSlider();
updateSlide(currentIndex);