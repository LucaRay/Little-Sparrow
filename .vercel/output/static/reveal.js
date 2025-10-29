(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("reveal-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach((el) => io.observe(el));
})();
