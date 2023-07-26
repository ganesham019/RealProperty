const { Swiper } = require('swiper');
const { Navigation, Pagination } = require('swiper/modules');

const burgerBtn = document.getElementById("burger_btn");
const navSec = document.getElementById("nav_right_sec");
const nav = document.querySelector("nav");

window.onscroll = function () {
    const scrollHeight = window.scrollY;
    if (scrollHeight) {
        nav.classList.add("navbar-theme");
    } else {
        nav.classList.remove("navbar-theme");
    }
};

burgerBtn.addEventListener('click', function () {
    navSec.classList.toggle("open");
    burgerBtn.classList.toggle("open");
})


//  Initialize Swiper
let swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    centeredSlides: true,
    grabCursor: false,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});