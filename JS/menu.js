const menuBoto = document.querySelector(".menuBoto");
const nav = document.querySelector(".nav");

menuBoto.addEventListener("click", function () {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuBoto.setAttribute("aria-expanded", isOpen);
});