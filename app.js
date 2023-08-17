const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearSlidesActive()
        slide.classList.add('active')
    })
}

function clearSlidesActive() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}