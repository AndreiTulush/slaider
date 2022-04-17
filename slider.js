const sliderLine = document.querySelector('.slider-line');
const btnNext = document.querySelector('.slider-next');
const btnPrev = document.querySelector('.slider-prev');

let bais = 0;

btnNext.addEventListener('click', () => {
    bais += 750;
    if (bais > 3000) {
        bais = 0;
    };
    sliderLine.style.left = -bais + 'px';
});

btnPrev.addEventListener('click', () => {
    bais -= 750;
    if (bais < 0) {
        bais = 3000;
    };
    sliderLine.style.left = -bais + 'px';
});