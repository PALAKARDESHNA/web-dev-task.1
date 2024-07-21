document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "bx bx-x" : "bx bx-menu");
  });

  navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "bx bx-menu");
  });

  // ScrollReveal options
  const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
  };

  // Initialize ScrollReveal
  ScrollReveal().reveal(".container_left h1", { ...scrollRevealOption });
  ScrollReveal().reveal(".container_btn", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".container_right h2", { ...scrollRevealOption, delay: 2000 });
  ScrollReveal().reveal(".container_right h3", { ...scrollRevealOption, delay: 2500 });
  ScrollReveal().reveal(".container_right p", { ...scrollRevealOption, delay: 3000 });
  ScrollReveal().reveal(".dog_1", { duration: 1000, delay: 3500 });
  ScrollReveal().reveal(".dog_2", { duration: 1000, delay: 4000 });
  ScrollReveal().reveal(".location", { ...scrollRevealOption, origin: "left", delay: 4500 });
  ScrollReveal().reveal(".socials span", { ...scrollRevealOption, origin: "top", delay: 5000, interval: 500 });
});
