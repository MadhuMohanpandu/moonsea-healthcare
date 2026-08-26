/* ==========================================================================
   MOONSEA ENTERPRISES PRIVATE LIMITED
   Master JavaScript Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initForms();
});

function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }
}

function initForms() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const requiredInputs = form.querySelectorAll('[required]');
      let valid = true;

      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = '#ef4444';
        } else {
          input.style.borderColor = '#e0f2fe';
        }
      });

      if (valid) {
        alert('Thank you! Your request has been received by MOONSEA ENTERPRISES PRIVATE LIMITED.');
        form.reset();
      } else {
        alert('Please fill out all required fields.');
      }
    });
  });
}
