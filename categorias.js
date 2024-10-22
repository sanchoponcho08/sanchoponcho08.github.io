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

const images = [
  "imagenes/categoriafem.jpg",
  "imagenes/categoriajuv.jpg",
  "imagenes/imagenfixed.png",
];

let currentIndex = 0;

function showImage(index) {
  const imgs = document.querySelectorAll("#inicioVista img");
  imgs.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Avanzar al siguiente índice
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Retroceder al índice anterior
  showImage(currentIndex);
}

showImage(currentIndex);
