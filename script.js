// Add shadow to navbar when scrolling
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Scroll reveal effect
const fadeElements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    fadeElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();


const menuCards = document.querySelectorAll(".menu-card");

window.addEventListener("scroll", () => {
    menuCards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            card.classList.add("show-card");
        }
    });
});
