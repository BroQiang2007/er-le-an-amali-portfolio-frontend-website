document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // 手機漢堡選單切換
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 首頁平滑滾動至作品集區塊
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
