const menuIcons = document.querySelector(".menu-icons");
const hamburgerMenu = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const navbarMenu = document.querySelector(".navbar-menu");
const mainSection = document.querySelector("main");

function toggleMenu() {
  hamburgerMenu.classList.toggle("hide");
  closeIcon.classList.toggle("show");
  navbarMenu.classList.toggle("show");
  mainSection.classList.toggle("nav-show");
}

menuIcons.addEventListener("click", toggleMenu);
