// Comportamiento minimalista del sitio.
document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico del footer.
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Reveal-on-scroll de las secciones (progresivo: sin JS o sin soporte,
  // el contenido queda visible por defecto vía CSS).
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  const sections = document.querySelectorAll("main .section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => {
    section.classList.add("js-reveal");
    observer.observe(section);
  });
});
