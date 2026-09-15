/* ==========================================================================
   MOONSEA ENTERPRISES PRIVATE LIMITED
   Main JavaScript - Mobile Navigation & Functional Form Handler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFormHandler();
});

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenuDrawer');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}

function initFormHandler() {
  const contactForm = document.getElementById('contactEnquiryForm');
  const successAlert = document.getElementById('formSuccessAlert');
  const errorAlert = document.getElementById('formErrorAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const interest = contactForm.querySelector('[name="interest"]')?.value;
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !interest || !message) {
        if (errorAlert) {
          errorAlert.style.display = 'block';
          if (successAlert) successAlert.style.display = 'none';
        }
        return;
      }

      // Simulate successful form delivery & feedback
      if (successAlert) {
        successAlert.style.display = 'block';
        if (errorAlert) errorAlert.style.display = 'none';
      }

      contactForm.reset();

      // Scroll to alert
      successAlert?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}
