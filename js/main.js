// Comportamiento minimalista del sitio.
document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico del footer.
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Cambio de tema claro / oscuro. El tema inicial lo aplica el script del <head>.
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const themeColors = { dark: "#14161a", light: "#f7f7f5" };

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    if (themeColor) {
      themeColor.setAttribute("content", themeColors[theme]);
    }
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      );
    }
  };

  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");

  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  // Si el visitante no eligió tema, seguir los cambios del sistema.
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (event) => {
    let saved = null;
    try {
      saved = localStorage.getItem("theme");
    } catch (e) {}
    if (!saved) {
      applyTheme(event.matches ? "light" : "dark");
    }
  });

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
