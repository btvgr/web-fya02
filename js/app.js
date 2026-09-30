document.addEventListener("DOMContentLoaded", () => {
  const mobileBreakpoint = window.matchMedia("(max-width: 760px)");

  document.querySelectorAll(".main-nav").forEach((navigation) => {
    const toggle = navigation.querySelector(".menu-toggle");
    const menu = navigation.querySelector(".nav-links");

    if (!toggle || !menu) {
      return;
    }

    const closeMenu = () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú de navegación");
    };

    const openMenu = () => {
      menu.classList.add("is-open");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Cerrar menú de navegación");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    mobileBreakpoint.addEventListener("change", (event) => {
      if (!event.matches) {
        closeMenu();
      }
    });
  });
});
