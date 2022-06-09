// * Nabvar
const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".navbar__open-icon");
const navCloseBtn = document.querySelector(".navbar__close-icon");
const navLinks = document.querySelectorAll(".nav__link");

navOpenBtn.addEventListener('click', () => {
  nav.classList.add("open");
});

navCloseBtn.addEventListener('click', () => {
  nav.classList.remove("open");
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove("open");
  });
})



// * Swiper Js 
var swiper = new Swiper(".brand--swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 5,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});