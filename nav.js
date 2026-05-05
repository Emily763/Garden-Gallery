const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const mainNav = document.querySelector('#mainNav');

menuBtn.addEventListener('click', () => mainNav.classList.add('open'));
closeBtn.addEventListener('click', () => mainNav.classList.remove('open'));

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const form = document.querySelector('#contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

document.querySelectorAll('[data-slider]').forEach(slider => {
  const track = slider.querySelector('.slider-track');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');

  function move(direction) {
    const card = track.querySelector('.product-card');
    const gap = 24;
    const amount = card.offsetWidth + gap;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
});

function openMenu() {
  document.getElementById("mainNav").classList.add("open");
}

function closeMenu() {
  document.getElementById("mainNav").classList.remove("open");
}

document.getElementById("year").textContent = new Date().getFullYear();
