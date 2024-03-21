// // import Swiper JS
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
const swiper = new Swiper('.mySwiper', {
  modules: [Autoplay, Pagination],
  direction:'horizontal',
  loop: true,
  speed: 750,
  spaceBetween: 10,
  slidesPerView: 3,
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


    320: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 10,

    },
    1136:{
      loop: true,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1137:{
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});

