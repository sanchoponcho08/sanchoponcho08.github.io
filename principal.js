window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");

  //  evento de scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
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
