window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav"); // Seleccionar el nav

  // Agregar el evento de scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Si el scroll es mayor que 50px
      nav.classList.add("scrolled"); // Añade la clase 'scrolled'
    } else {
      nav.classList.remove("scrolled"); // Remueve la clase 'scrolled'
    }
  });
});

let indiceImagen = 0;
const imagenes = document.querySelectorAll(".imagenes img");

function mostrarImagen(indice) {
  if (indice < 0) {
    indiceImagen = imagenes.length - 1;
  } else if (indice >= imagenes.length) {
    indiceImagen = 0;
  } else {
    indiceImagen = indice;
  }

  const desplazamiento = -indiceImagen * 100;
  document.querySelector(
    ".imagenes"
  ).style.transform = `translateX(${desplazamiento}%)`;
}

function cambiarImagen(direccion) {
  mostrarImagen(indiceImagen + direccion);
}

mostrarImagen(indiceImagen);
