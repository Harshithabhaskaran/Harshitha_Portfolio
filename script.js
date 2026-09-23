// ================================
// PORTFOLIO INTERACTIONS
// ================================

// Add a subtle scroll effect to the navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.style.borderBottomColor = "#333";
    } else {
        navbar.style.borderBottomColor = "#222";
    }
});


// ================================
// REVEAL SECTIONS ON SCROLL
// ================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .research-card, .education-card, .experience-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


// Initial state

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ================================
// CURRENT YEAR
// ================================

const footerYear = document.querySelector("footer p");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Harshitha Bhaskaran`;

}
