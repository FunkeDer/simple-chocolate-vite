const modal = document.getElementById("backdrop_container");
const openModal = document.getElementById("module_open");
const closeModal = document.getElementById("module_close");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.setAttribute("closing", "");

  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
});

const mobileOpenButton = document.getElementById("mobile_open");
const mobileCloseButton = document.getElementById("close-button");
const mobileContainer = document.getElementById("mobile_container");
const mobileNavItem = document.getElementById("mobile_nav_item")
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item")
const backdrop = document.querySelector(".mobile-menu-backdrop")

mobileOpenButton.addEventListener('click', () => {
  backdrop.classList.remove('visually-hidden');
  mobileContainer.classList.add("mobile-menu-show"); 
  mobileContainer.classList.remove("visually-hidden"); 
  mobileContainer.classList.remove("mobile-menu-hidden");
  document.body.classList.add('overflow-hidden'); 
});

mobileCloseButton.addEventListener('click', () => {
  backdrop.classList.add('visually-hidden');
  mobileContainer.classList.add("mobile-menu-hidden");
  setTimeout(function() {
    mobileContainer.classList.add("visually-hidden");
    mobileContainer.classList.remove("mobile-menu-show");
}, 300); 
document.body.classList.remove('overflow-hidden'); 
  })

backdrop.addEventListener("click", () => {
  mobileContainer.classList.add("mobile-menu-hidden");
  mobileContainer.classList.add("visually-hidden"); 
  mobileContainer.classList.remove("mobile-menu-show");
  document.body.classList.remove('overflow-hidden'); 
})