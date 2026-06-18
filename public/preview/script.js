// logo image fallback — reveal text/markup if a logo file is missing
document.querySelectorAll('.logo-img').forEach(img => {
  img.addEventListener('error', () => {
    img.hidden = true;
    const fb = img.parentElement.querySelector('.logo-text');
    if (fb) fb.hidden = false;
  });
});
document.querySelectorAll('.hero-mark').forEach(img => {
  img.addEventListener('error', () => {
    img.hidden = true;
    const fb = img.parentElement.querySelector('.hero-fallback');
    if (fb) fb.hidden = false;
  });
});

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

document.querySelectorAll('.fade').forEach((el) => {
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
  } catch (_) {}

  form.innerHTML = `
    <div style="padding:28px 32px;border-left:2px solid #b8924a;font-family:'Cormorant Garant',Georgia,serif;font-style:italic;font-weight:300;font-size:1.25rem;line-height:1.65;color:#16100f">
      Received. I'll be in touch within 48 hours — usually sooner.
    </div>`;
});

// signal / newsletter form
document.querySelector('#signalForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    });
  } catch (_) {}

  form.innerHTML = `<p style="font-family:'Cormorant Garant',Georgia,serif;font-style:italic;font-size:1.1rem;color:rgba(245,240,232,0.55);letter-spacing:.02em;margin:0">You're in the light now. Watch for a dispatch.</p>`;
});
