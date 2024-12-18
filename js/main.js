const menuBurger = document.querySelector(".menu-burger");
const divMenuBurger = document.querySelector(".div-menuBurger");
const fondMenuBurger = document.querySelector(".fond-menuBurger");
const closeMenuBurger = document.querySelector(".close-menuBurger");

menuBurger.addEventListener("click", () => {
    divMenuBurger.style.display = "block";
    fondMenuBurger.style.display = "block";
    divMenuBurger.style.position = "fixed";
    fondMenuBurger.style.position = "fixed";
});

closeMenuBurger.addEventListener("click", () => {
    divMenuBurger.style.display = "none";
    fondMenuBurger.style.display = "none";
});

