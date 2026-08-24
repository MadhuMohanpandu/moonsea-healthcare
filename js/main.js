/* ==========================================================================
   MOONSEA PRIVATE LIMITED (moonsea.in)
   Master JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initContactForm();
  initNavbarScroll();
});

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow');
      } else {
        navbar.classList.remove('shadow');
      }
    });
  }
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('name') ? document.getElementById('name').value : '';
      const email = document.getElementById('email') ? document.getElementById('email').value : '';
      const message = document.getElementById('message') ? document.getElementById('message').value : '';

      if (name && email && message) {
        alert('Thank you for contacting Moonsea Private Limited (moonsea.in)! We will get back to you shortly.');
        form.reset();
      } else {
        alert('Please fill out all required fields.');
      }
    });
  }
}
