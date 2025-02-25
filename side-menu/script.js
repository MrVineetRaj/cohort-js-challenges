const listItems = document.querySelectorAll("li");
const closeMenuButton = document.getElementById("close-menu");
const openMenuButton = document.getElementById("open-menu");
const sideMenu = document.querySelector(".side-menu");
const body = document.querySelector("body");
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    alert(`Visiting ${item.innerText} page`);
  });
});

const openMenu = () => {
  sideMenu.style.right = "0%";
};

const closeMenu = () => {
  sideMenu.style.right = "-100%";
};

closeMenuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  closeMenu();
});

openMenuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  openMenu();
});

sideMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

body.addEventListener("click", () => {
  closeMenu();
});
