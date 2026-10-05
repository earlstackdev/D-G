const form = document.querySelector('#lead-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  form.classList.add('is-success');
  form.querySelector('.form-success').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.setAttribute('tabindex', '-1');
  });
});
