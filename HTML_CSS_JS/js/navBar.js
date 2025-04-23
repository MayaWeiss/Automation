
const hamMenu = document.querySelector(".hamburger-menu");

const links = document.querySelector(".links");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  links.classList.toggle("active");
});