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
