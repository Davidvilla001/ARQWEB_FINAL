const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateSliderPosition() {
    const slideWidth = slider.querySelector('.book-item').offsetWidth;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slider.querySelectorAll('.book-item').length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

window.addEventListener('resize', updateSliderPosition);