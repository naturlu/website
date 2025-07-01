const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

prevBtn.addEventListener('click', () => {
  let idx = currentSlide - 1;
  if (idx < 0) idx = slides.length - 1;
  showSlide(idx);
});

nextBtn.addEventListener('click', () => {
  let idx = (currentSlide + 1) % slides.length;
  showSlide(idx);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Troca automática a cada 6 segundos
autoplay = setInterval(() => {
  let idx = (currentSlide + 1) % slides.length;
  showSlide(idx);
}, 6000);

// Pausa o autoplay ao interagir
[prevBtn, nextBtn, ...dots].forEach(el => {
  el.addEventListener('click', () => {
    clearInterval(autoplay);
    autoplay = setInterval(() => {
      let idx = (currentSlide + 1) % slides.length;
      showSlide(idx);
    }, 6000);
  });
}); 