const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const cursorGlow = document.querySelector(".cursor-glow");
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");
const year = document.getElementById("year");

// Mobile navigation
menuToggle?.addEventListener("click", () => {
  const open = menuToggle.classList.toggle("open");
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle?.classList.remove("open");
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  });
});

// Navbar state + active section
const updateNav = () => {
  navbar?.classList.toggle("scrolled", window.scrollY > 30);

  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) current = section.id;
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

// Smooth reveal
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add("visible"));
}

// Subtle desktop cursor glow
if (window.matchMedia("(pointer:fine)").matches && cursorGlow) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

// Close mobile menu with Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuToggle?.classList.remove("open");
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

if (year) year.textContent = new Date().getFullYear();
