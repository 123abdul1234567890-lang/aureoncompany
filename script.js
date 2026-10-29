const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  mobileMenu.hidden = isOpen;
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));
document.getElementById('year').textContent = new Date().getFullYear();
// Replace the placeholder email with your real company inbox before publishing.
const CONTACT_EMAIL = 'hello@aureon.example';
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const subject = `Aureon enquiry — ${data.get('service')}`;
  const body = [`Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Company: ${data.get('company') || 'Not supplied'}`, `Service: ${data.get('service')}`, '', `Project: ${data.get('message') || 'Not supplied'}`].join('\n');
  if (CONTACT_EMAIL.endsWith('.example')) {
    document.getElementById('form-status').textContent = 'Contact form setup needed: replace the placeholder address in script.js with your real email.';
    return;
  }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-status').textContent = 'Your email application should open with the enquiry. Send the email there to complete your request.';
});
