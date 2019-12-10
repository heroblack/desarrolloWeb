const burger = document.querySelector("#btn-burger");
const wrapper = document.querySelector("#wrapper-menu");

console.log(burger);
console.log(wrapper);
burger.addEventListener("click", toogle);

function toogle() {
  toogleBurge();
  changePositionBurge();
}
function toogleBurge() {
  if (wrapper.classList.contains("showMenu")) {
    return wrapper.classList.remove("showMenu");
  }
  wrapper.classList.add("showMenu");
}

function changePositionBurge() {
  if (burger.classList.contains("is-active")) {
    return burger.classList.remove("is-active");
  }
  burger.classList.add("is-active");
}
