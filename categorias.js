let currentIndex = 0;

function move(direction) {
    const images = document.querySelectorAll('.carrusel li');
    const totalImages = images.length;

    // Ajusta el índice
    currentIndex += direction;

    // Asegúrate de que el índice se mantenga dentro del rango
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Regresa a la última imagen
    } else if (currentIndex >= totalImages) {
        currentIndex = 0; // Regresa a la primera imagen
    }

    // Calcula la posición para centrar la imagen actual
    const offset = -(currentIndex * 100); // 100% por imagen
    document.querySelector('.carrusel ul').style.transform = `translateX(${offset}%)`;
}
