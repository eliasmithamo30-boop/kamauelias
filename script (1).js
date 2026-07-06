// ---------------------------------------------------------
// 1. Type out the name in the hero, like it's being typed live
// ---------------------------------------------------------
const nameEl = document.getElementById('typedName');
const fullName = 'Elias Mithamo';
let i = 0;

function typeNext() {
  if (i <= fullName.length) {
    nameEl.textContent = fullName.slice(0, i);
    i++;
    setTimeout(typeNext, 90);
  }
}

// Respect users who prefer reduced motion: show the full name instantly
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  nameEl.textContent = fullName;
} else {
  typeNext();
}

// ---------------------------------------------------------
// 2. Today's date in the letterhead dateline
// ---------------------------------------------------------
document.getElementById('today').textContent = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// ---------------------------------------------------------
// 3. Footer year
// ---------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------------------
// 4. Mobile nav toggle
// ---------------------------------------------------------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close the mobile menu after tapping a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
