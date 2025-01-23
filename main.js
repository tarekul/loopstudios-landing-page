const menu = document.querySelector("menu");

function toggleVisibility(element) {
  element.classList.toggle("active");
}

function handleMenuClick() {
  toggleVisibility(menu);
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    menu.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

document
  .querySelector(".fa-solid.fa-bars")
  .addEventListener("click", handleMenuClick);

document
  .querySelector(".fa-solid.fa-times")
  .addEventListener("click", handleMenuClick);
