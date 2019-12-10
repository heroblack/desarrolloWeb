console.log("hola js");
const menuWrap = document.querySelector(".header__wrap");
const menuBurger = document.querySelector("#burger-menu");
const ipad = window.matchMedia("screen and (max-width: 767px)");

ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    menuBurger.addEventListener("click", clickBtnBurger);
  } else {
    menuBurger.removeEventListener("click", clickBtnBurger);
  }
}

validation(ipad);

function clickBtnBurger() {
  hideshow();
  moveBtn();
}
function hideshow() {
  if (menuWrap.classList.contains("is-active"))
    return menuWrap.classList.remove("is-active");
  menuWrap.classList.add("is-active");
}

function moveBtn() {
  if (menuBurger.classList.contains("is-active"))
    return menuBurger.classList.remove("is-active");
  menuBurger.classList.add("is-active");
}
