/*const images = [
    {
        src: "imagenes/categoriafem.jpg",
        title: "Femenino",
        description: "loremssss"
    },
    {
        src: "imagenes/noticia1img.png",
        title: "Chicas",
        description: "loremssssss"
    },
    {
        src: "imagenes/polideportivoimg.jpg",
        title: "xd",
        description: "loremssss"
    },
    {
        src: "imagenes/noticia4img.png",
        title: "Minis",
        description: "loremssss"
    }
];

let currentIndex = 0;

function updateCarousel() {
    const listItems = document.querySelectorAll('.carrusel li');
    listItems.forEach((item, index) => {
        item.classList.remove('active'); // Ocultar todas las imágenes
        if (index === currentIndex) {
            item.classList.add('active'); // Mostrar solo la imagen activa
        }
    });
}

function move(direction) {
    const totalImages = images.length;

    currentIndex += direction;

    // Ajustar el índice para que sea cíclico
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Regresar a la última imagen
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Regresar a la primera imagen
    }

    updateCarousel();
}

// Inicializar el carrusel
updateCarousel();
*/

let currentIndex = 0;
let interval;

function showImage(index) {
  const imgs = document.querySelectorAll("#inicioVista img");
  const titles = document.querySelectorAll("#inicioVista .slide-title");

  imgs.forEach((img, i) => {
    img.classList.remove("active");
    titles[i].style.display = "none";
  });

  imgs[index].classList.add("active");
  titles[index].style.display = "block";
}

function nextImage() {
  const imgs = document.querySelectorAll("#inicioVista img");
  currentIndex = (currentIndex + 1) % imgs.length;
  showImage(currentIndex);
}

function prevImage() {
  const imgs = document.querySelectorAll("#inicioVista img");
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  showImage(currentIndex);
}

function startSlider() {
  interval = setInterval(nextImage, 5000); //
}

function stopSlider() {
  clearInterval(interval);
}

function resetSlider() {
  stopSlider();
  startSlider();
}

document.querySelector(".arrow.left").addEventListener("click", resetSlider);
document.querySelector(".arrow.right").addEventListener("click", resetSlider);

showImage(currentIndex);

startSlider();
