const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");


// Abrir menu
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
});


// Fechar menu
menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});


// Fechar clicando fora do menu
menuOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});


// Fechar ao clicar em um link
const menuLinks = document.querySelectorAll(".mobile-menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    });
});