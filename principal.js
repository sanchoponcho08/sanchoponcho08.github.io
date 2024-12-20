window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  const carruselImagenes = [
    { url: "imagenes/carrusel1.png" }, 
    { url: "imagenes/carrusel3.png" }, 
    { url: "imagenes/carrusel4.png" },  
  ];

  const slideContainer = document.querySelector(".carrusel-contenedor");

  carruselImagenes.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("carrusel-item");
    slide.innerHTML = `
      <img src="${item.url}" class="carrusel-imagen" alt="Imagen de carrusel">
    `;
    slideContainer.appendChild(slide);
  });

  const slides = Array.from(document.querySelectorAll(".carrusel-item"));
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slideContainer.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }
  setInterval(nextSlide, 4000);
  
  showSlide(currentIndex);

  document.querySelector(".anterior").addEventListener("click", prevSlide);
  document.querySelector(".siguiente").addEventListener("click", nextSlide);
});


/*
window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});

const slides = Array.from(document.querySelectorAll(".carrusel-item"));
const slideContainer = document.querySelector(".carrusel-contenedor");
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  slideContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 4000);

showSlide(currentIndex);

document.querySelector(".anterior").addEventListener("click", prevSlide);
document.querySelector(".siguiente").addEventListener("click", nextSlide);
*/