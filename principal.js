const imagenesArray = [
  "categoriafem.jpg",
  "categoriajuv.jpg",
  "categoriamasc.jpg",
];

let index = 0;

function mostrarImagen() {
  const imagenes = document.querySelector(".imagenes");
  imagenes.innerHTML = `<img src="${imagenesArray[index]}" alt="Imagen ${
    index + 1
  }">`;
}

function cambiarImagen(direction) {
  index += direction;
  if (index >= imagenesArray.length) {
    index = 0; // Volver al inicio
  } else if (index < 0) {
    index = imagenesArray.length - 1; // Ir al final
  }
  mostrarImagen();
}

mostrarImagen();
