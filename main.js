(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  const ioOpts = { threshold: 0.2, rootMargin: "0px 0px -10% 0px" };
  const exp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("expertise-row-visible");
        exp.unobserve(entry.target);
      }
    });
  }, ioOpts);
  document.querySelectorAll(".expertise-row").forEach((row) => exp.observe(row));

  const svc = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("service-item-visible");
          svc.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".service-item").forEach((item) => svc.observe(item));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bookCards = document.querySelectorAll(".books-section .book-card");
  const bookObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("book-card-visible");
          bookObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );
  bookCards.forEach((card, i) => {
    if (reduceMotion) {
      card.classList.add("book-card-visible");
      return;
    }
    card.style.transitionDelay = `${Math.min(i * 65, 1400)}ms`;
    bookObs.observe(card);
  });
})();
