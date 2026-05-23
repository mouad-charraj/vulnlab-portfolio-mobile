const btn = document.getElementById('menuBtn');
const nav = document.querySelector('.navlinks');
if (btn && nav) {
  btn.addEventListener('click', () => nav.classList.toggle('open'));
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' }
      );
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll('section article, .screen-card, .architecture-wrap, .workflow-card, .comparison-table, .video-frame').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});
