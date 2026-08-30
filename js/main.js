// ==========================================
// WEINSE MOBILE NAVIGATION
// ==========================================

const menuToggle =
document.getElementById("menu-toggle");

const mainNav =
document.getElementById("main-nav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            mainNav.classList.toggle("active");

        }
    );

}
/* ==========================================
   HERO SLIDESHOW
========================================== */

const heroSlides = document.querySelectorAll(".hero-slide");

let currentHeroSlide = 0;

if (heroSlides.length > 0) {

    setInterval(() => {

        heroSlides[currentHeroSlide].classList.remove("active");

        currentHeroSlide++;

        if (currentHeroSlide >= heroSlides.length) {
            currentHeroSlide = 0;
        }

        heroSlides[currentHeroSlide].classList.add("active");

    }, 5000);

}
