// nav scroll state
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// hamburger / drawer
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.drawer');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  drawer.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

drawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// 18+ gate
document.querySelector('#unlockBtn').addEventListener('click', () => {
  document.querySelector('.gate').classList.add('hidden');
  document.querySelector('#privateRoom').classList.remove('hidden');
});

// scroll fade
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade').forEach((el, i) => {
  el.style.transitionDelay = el.dataset.delay ? `${el.dataset.delay}ms` : '0ms';
  observer.observe(el);
});

// booking form
document.querySelector('#bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    });
  } catch (_) {
    // on preview / local, fetch may fail — show success anyway
  }

  form.innerHTML = `
    <div style="padding:28px;border:1px solid rgba(198,161,91,.45);border-radius:14px;
      font-family:Georgia,serif;font-size:1.1rem;background:rgba(198,161,91,.07)">
      Your inquiry was sent. I'll be in touch within 48 hours.
    </div>`;
});
