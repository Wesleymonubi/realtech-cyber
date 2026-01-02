// Simple interactivity: menu toggle, form submission status, and year auto-fill
document.addEventListener('DOMContentLoaded', function () {
  // Year update
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  }

  // Form submission feedback (works with Formspree or other endpoint)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      // If using Formspree standard POST, browser will handle. Here we give user immediate feedback.
      status.textContent = 'Sending…';
      setTimeout(() => {
        status.textContent = 'If your message was sent successfully you will receive a reply soon. Alternatively email wesleymonubi@gmail.com';
      }, 800);
    });
  }
});