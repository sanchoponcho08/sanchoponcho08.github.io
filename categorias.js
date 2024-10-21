const images = [
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
    const imgElement = document.querySelector('.carrusel img');
    const titleElement = document.querySelector('.carrusel .texto h2');
    const descriptionElement = document.querySelector('.carrusel .texto p');

    imgElement.src = images[currentIndex].src;
    titleElement.textContent = images[currentIndex].title;
    descriptionElement.textContent = images[currentIndex].description;
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

