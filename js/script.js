let currentSlide = 0;
let intervaloCarrossel;
const imagens = document.querySelectorAll('#carrosselWrapper img');
const carrosselWrapper = document.getElementById('carrosselWrapper');

function atualizarSlides() {
  imagens.forEach((img, index) => {
    img.classList.remove('img-central');
    if (index === currentSlide) {
      img.classList.add('img-central');
    }
  });
}

function moverSlide(direcao) {
  currentSlide = (currentSlide + direcao + imagens.length) % imagens.length;
  atualizarSlides();
}

function iniciarAutoplay() {
  intervaloCarrossel = setInterval(() => moverSlide(1), 3000);
}

function pararAutoplay() {
  clearInterval(intervaloCarrossel);
}

document.addEventListener('DOMContentLoaded', () => {
  atualizarSlides();
  iniciarAutoplay();

  // pausa ao passar o mouse
  carrosselWrapper.addEventListener('mouseenter', pararAutoplay);
  carrosselWrapper.addEventListener('mouseleave', iniciarAutoplay);
});