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

const homeBtn = document.getElementById("navbar__home");
const aboutBtn = document.getElementById("navbar__about");
const servicesBtn = document.getElementById("navbar__services");
const productBtn = document.getElementById("navbar__product");
const contactUsBtn = document.getElementById("navbar__contact-us");

const exploreBtn = document.querySelector(".header__button");
const learnMoreBtn = document.querySelector(".about__button");
const inventoryBtn = document.querySelector(".products__description_button");
const readMoreBtn = document.querySelectorAll(".services-card__button");

const gotoPage = (url) => {
    window.location.href = url;
}

homeBtn.addEventListener("click", () => gotoPage("home.html"));
aboutBtn.addEventListener("click", () => gotoPage("about.html"));
servicesBtn.addEventListener("click", () => gotoPage("services.html"));
productBtn.addEventListener("click", () => gotoPage("products.html"));
contactUsBtn.addEventListener("click", () => gotoPage("contact-us.html"));

// exploreBtn.addEventListener("click",);
// learnMoreBtn.addEventListener("click",);
// inventoryBtn.addEventListener("click",);
// readMoreBtn.addEventListener("click",);









