function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Carousel sliding

const slide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
let counter = 0;

function nextSlide() {
  counter++;
  if (counter >= items.length) counter = 0;
  slide.style.transform = `translateX(${-100 * counter}%)`;
}
// Set interval for auto-play
setInterval(nextSlide, 3000);