// ── Counter Animation ──────────────────────────────────────
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
  const target = +el.getAttribute('data-target');
  let count = 0;

  const speed = target / 100;

  const update = () => {
    count += speed;

    if (count < target) {
      el.innerText = Math.floor(count).toLocaleString();
      requestAnimationFrame(update);
    } else {
      el.innerText = target.toLocaleString() + "+";
    }
  };

  update();
};

// Trigger counter when element scrolls into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});