// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a navigation link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// Contact Form

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thanks for reaching out! I’ll get back to you as soon as possible."
    );

    contactForm.reset();

});