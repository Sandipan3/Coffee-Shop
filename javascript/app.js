/* navbar */
console.log("LINK SUCCESSFUL");

const menu = document.getElementById("menu-list");
const navbar = document.getElementById("navbar");
menu.style.maxHeight = "0rem";
navbar.style.height = "auto";


const toggleMenu = () => {
    if (menu.style.maxHeight === "0rem") {
        menu.style.maxHeight = "35rem"
        navbar.style.height = "12rem";
    }
    else {
        menu.style.maxHeight = "0rem"
        navbar.style.height = "auto";
    }
};

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

/* different menu list buttons and site navigation */


const exploreBtn = document.querySelector(".header__button");
const learnMoreBtn = document.querySelector(".about__button");
const inventoryBtn = document.querySelector(".products__description_button");
const readMoreBtn = document.querySelectorAll(".services-card__button");

const gotoPage = (url) => {
    window.location.href = url;
}


exploreBtn.addEventListener("click", () => gotoPage("services.html"));
learnMoreBtn.addEventListener("click", () => gotoPage("about.html"));
inventoryBtn.addEventListener("click", () => gotoPage("products.html"));

readMoreBtn.forEach((btn) => {
    btn.addEventListener("click", () => gotoPage("products.html"))
})









