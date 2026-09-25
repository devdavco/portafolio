// Navegación de la presentación /aws.
// Progresivo: sin JS la página es un documento normal con las diez
// diapositivas apiladas; este script activa el modo deck.
document.addEventListener("DOMContentLoaded", () => {
  const deck = document.getElementById("deck");
  const controls = document.getElementById("deck-controls");
  const prevBtn = document.getElementById("deck-prev");
  const nextBtn = document.getElementById("deck-next");
  const currentEl = document.getElementById("deck-current");
  const progressEl = document.getElementById("deck-progress-fill");
  const statusEl = document.getElementById("deck-status");

  if (!deck || !controls || !prevBtn || !nextBtn) {
    return;
  }

  const slides = Array.from(deck.querySelectorAll(".slide"));
  if (slides.length === 0) {
    return;
  }

  const total = slides.length;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let index = 0;

  // Índice inicial a partir del hash (#slide-4), para poder
  // compartir el enlace de una diapositiva concreta.
  const fromHash = slides.findIndex((slide) => "#" + slide.id === location.hash);
  if (fromHash !== -1) {
    index = fromHash;
  }

  document.body.classList.add("is-deck");
  controls.hidden = false;

  function render(animate) {
    slides.forEach((slide, i) => {
      const isCurrent = i === index;
      slide.hidden = !isCurrent;

      if (isCurrent && animate && !prefersReducedMotion) {
        slide.classList.remove("is-entering");
        // Reflujo forzado para reiniciar la animación de entrada.
        void slide.offsetWidth;
        slide.classList.add("is-entering");
      }
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;

    if (currentEl) {
      currentEl.textContent = String(index + 1);
    }

    if (progressEl) {
      progressEl.style.transform = "scaleX(" + (index + 1) / total + ")";
    }

    if (statusEl) {
      const heading = slides[index].querySelector("h1, h2");
      const title = heading ? heading.textContent.trim() : "";
      statusEl.textContent =
        "Diapositiva " + (index + 1) + " de " + total + ". " + title;
    }

    history.replaceState(null, "", "#" + slides[index].id);
  }

  function go(next) {
    const clamped = Math.min(Math.max(next, 0), total - 1);
    if (clamped === index) {
      return;
    }
    index = clamped;
    render(true);
    window.scrollTo(0, 0);
  }

  prevBtn.addEventListener("click", () => go(index - 1));
  nextBtn.addEventListener("click", () => go(index + 1));

  // Teclado.
  document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) {
      return;
    }

    const target = event.target;
    const inDiagram =
      target instanceof Element && target.closest(".diagram-scroll");

    // Dentro del diagrama las flechas lo desplazan, no cambian de diapositiva.
    if (inDiagram) {
      return;
    }

    const onControl =
      target instanceof Element &&
      target.closest("a, button, input, textarea, select");

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
      case "PageDown":
        event.preventDefault();
        go(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
      case "PageUp":
        event.preventDefault();
        go(index - 1);
        break;
      case " ":
        // El espacio debe seguir activando enlaces y botones enfocados.
        if (onControl) {
          return;
        }
        event.preventDefault();
        go(index + 1);
        break;
      case "Home":
        event.preventDefault();
        go(0);
        break;
      case "End":
        event.preventDefault();
        go(total - 1);
        break;
      default:
        break;
    }
  });

  // Swipe en táctil. Se ignora el ratón para no romper la selección de texto.
  let swipeStart = null;

  deck.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") {
      return;
    }
    swipeStart = { x: event.clientX, y: event.clientY };
  });

  deck.addEventListener("pointerup", (event) => {
    if (!swipeStart) {
      return;
    }
    const dx = event.clientX - swipeStart.x;
    const dy = event.clientY - swipeStart.y;
    swipeStart = null;

    // Solo gestos claramente horizontales, para no robar el scroll vertical.
    if (Math.abs(dx) < 50 || Math.abs(dx) <= Math.abs(dy)) {
      return;
    }
    go(dx < 0 ? index + 1 : index - 1);
  });

  deck.addEventListener("pointercancel", () => {
    swipeStart = null;
  });

  // Pantalla completa, útil al proyectar en la sustentación.
  const fullscreenBtn = document.getElementById("deck-fullscreen");

  if (fullscreenBtn && document.documentElement.requestFullscreen) {
    fullscreenBtn.hidden = false;

    fullscreenBtn.addEventListener("click", () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    });

    document.addEventListener("fullscreenchange", () => {
      const active = Boolean(document.fullscreenElement);
      fullscreenBtn.textContent = active
        ? "Salir de pantalla completa"
        : "Pantalla completa";
      fullscreenBtn.setAttribute("aria-pressed", String(active));
    });
  }

  render(false);
});
