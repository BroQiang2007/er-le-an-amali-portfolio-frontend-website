document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Mobile Hamburger Menu Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      navLinks.classList.toggle("active");
    });
  }

  // Smooth scroll to Portfolio Section if button exists (on index.html)
  const scrollBtn = document.getElementById("btnScrollPortfolio");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById("hasil-kerja");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
