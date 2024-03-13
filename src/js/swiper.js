// // import Swiper JS
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
const swiper = new Swiper('.mySwiper', {
  modules: [Autoplay, Pagination],
  loop: true,
  speed: 750,
  spaceBetween: 10,
  slidesPerView: 1,

  autoplay: {
    delay: 1200,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pag',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1280: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 25,
    },
  }
});