// Comportamiento minimalista del sitio.
// Actualiza automaticamente el año del footer.
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
