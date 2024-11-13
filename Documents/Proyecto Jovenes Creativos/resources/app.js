// carrusel de productos
const track = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

const imgWidth = document.querySelector('.product').offsetWidth;

let currentPosition = 0;

// boton de izquierda
leftButton.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition -= 1;
        updateCarousel();
    }
});

// boton de derecha
rightButton.addEventListener('click', () => {
    const maxPosition = track.children.length - Math.floor(track.parentNode.offsetWidth / imgWidth);
    if (currentPosition < maxPosition) {
        currentPosition += 1;
        updateCarousel();
    }
});

// funcion para actualizar carrusel
function updateCarousel() {
    track.style.transform = `translateX(-${currentPosition * imgWidth}px)`;
}
