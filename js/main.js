/* ==========================================================================
   MOONSEA ENTERPRISES PRIVATE LIMITED
   Exact sureshhealthcare.com Clone JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFormHandlers();
});

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenuDrawer');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

function initFormHandlers() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your submission has been received by MOONSEA ENTERPRISES PRIVATE LIMITED.');
      form.reset();
    });
  });
}
