// 1. Mobile hamburger menu (open/close, Escape key, close after choosing a link)
var toggle = document.querySelector('.menu-toggle');
var menu = document.getElementById('menu-utama');

function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
}
toggle.addEventListener('click', function () {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') setMenu(false);
});

// 2. Show a clear placeholder if an image file is missing
document.querySelectorAll('.img-box img').forEach(function (img) {
  function showPlaceholder() { img.parentElement.classList.add('no-image'); }
  if (img.complete && img.naturalWidth === 0) showPlaceholder();
  img.addEventListener('error', showPlaceholder);
});

// 3. Footer year updates automatically
var year = document.getElementById('tahun');
if (year) year.textContent = new Date().getFullYear();

// 4. Video Player
document.querySelectorAll(".hover-video").forEach((video) => {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

  video.addEventListener("mouseenter", () => {
    if (canHover.matches) {
      video.play().catch(() => {});
    }
  });

  video.addEventListener("mouseleave", () => {
    if (canHover.matches) video.pause();
  });

  video.addEventListener("click", () => {
    if (!canHover.matches) {
      if (video.paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  });
});
