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

document.addEventListener("DOMContentLoaded", function () {

    const heroSlides =
        document.querySelectorAll(".hero-slide");

    console.log(
        "WEINSE hero slides found:",
        heroSlides.length
    );

    if (heroSlides.length <= 1) {
        return;
    }

    let currentHeroSlide = 0;

    setInterval(function () {

        heroSlides[currentHeroSlide]
            .classList.remove("active");

        currentHeroSlide =
            (currentHeroSlide + 1) %
            heroSlides.length;

        heroSlides[currentHeroSlide]
            .classList.add("active");

        console.log(
            "Showing WEINSE hero slide:",
            currentHeroSlide + 1
        );

    }, 5000);

});
