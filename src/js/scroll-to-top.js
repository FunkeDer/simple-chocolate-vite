const scrollToTopButton = document.getElementById("myBtn");
const upButtonContainer = document.querySelectorAll(".up-button-container")


window.addEventListener("scroll", function() {
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        // Додаємо клас для відображення кнопки з анімацією
        scrollToTopButton.classList.add("scroll-to-top-show");
        scrollToTopButton.classList.remove("scroll-to-top-hidden");
    } else {
        // Видаляємо клас для зникнення кнопки з анімацією
        scrollToTopButton.classList.remove("scroll-to-top-show");
        scrollToTopButton.classList.add("scroll-to-top-hidden");
    }
});

scrollToTopButton.addEventListener("click", () =>{
  window.scrollTo(0, 0);
})