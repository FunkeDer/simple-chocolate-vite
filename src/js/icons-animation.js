const container = document.querySelector('.benefits-ul');
const items = container.querySelectorAll('.benefits-img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            items.forEach((item) => {
                item.classList.add('animate__animated');
                item.classList.add('animate__pulse');
            });
        } else {
            items.forEach((item) => {
                item.classList.remove('animate__animated');
                item.classList.remove('animate__pulse');
            });
        }
    });
});

observer.observe(container);