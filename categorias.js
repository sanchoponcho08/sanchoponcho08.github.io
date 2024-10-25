let currentIndex = 0;
const imagesToShow = 3;
const sliderBox = document.querySelector("#categorias .slider-box ul");
const imgs = document.querySelectorAll("#categorias .slider-box img");
const totalImages = imgs.length;

function showImages() {
  // Desplaza el slider según el índice actual
  const offset = currentIndex * (100 / imagesToShow);
  sliderBox.style.transform = `translateX(-${offset}%)`; // Desplazamiento para mostrar imágenes
}

function nextImage() {
  currentIndex += 1;
  if (currentIndex > totalImages - imagesToShow) {
    currentIndex = 0; // Limita al último grupo
  }
  showImages();
}

function prevImage() {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = totalImages - imagesToShow; // Limita al primer grupo
  }
  showImages();
}

// Inicializa el slider
document.querySelector(".arrow.left").addEventListener("click", () => {
  prevImage();
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  nextImage();
});

// Mostrar las imágenes iniciales
showImages();
