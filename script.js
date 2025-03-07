// script.js

// Smooth scroll for anchor links 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // offset for fixed nav
          behavior: "smooth",
        });
      }
    });
  });
  
  // Sample mobile menu toggle (for small screens)
  const menu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      menu.classList.toggle('nav-menu-visible');
    });
  }
  