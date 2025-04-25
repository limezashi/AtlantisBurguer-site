let currentSlide = 0;
let intervaloCarrossel;
const imagens = document.querySelectorAll('#carrosselWrapper img');
const carrosselWrapper = document.getElementById('carrosselWrapper');

function atualizarSlides() {
  imagens.forEach((img, index) => {
    img.classList.remove('img-central');
  });

  const img = imagens[currentSlide];
  img.classList.add('img-central');

  // Cálculo manual para centralizar
  const imgOffset = img.offsetLeft;
  const imgWidth = img.offsetWidth;
  const wrapperWidth = carrosselWrapper.offsetWidth;
  const scrollLeft = imgOffset - (wrapperWidth / 2) + (imgWidth / 2);

  carrosselWrapper.scrollLeft = scrollLeft; // 🔥 scroll imediato, sem animação
}

function moverSlide(direcao) {
  currentSlide = (currentSlide + direcao + imagens.length) % imagens.length;
  atualizarSlides();
}

// function iniciarAutoplay() {
//   intervaloCarrossel = setInterval(() => moverSlide(1), 4000);
// }

// function pararAutoplay() {
//   clearInterval(intervaloCarrossel);
// }

document.addEventListener('DOMContentLoaded', () => {
  atualizarSlides();
  iniciarAutoplay();

  carrosselWrapper.addEventListener('mouseenter', pararAutoplay);
  carrosselWrapper.addEventListener('mouseleave', iniciarAutoplay);
});
