document.addEventListener("DOMContentLoaded", () => {
  // Tally doit s’ouvrir avec un arrière-plan lisible, jamais en mode transparent.
  document.querySelectorAll('a[href*="tally.so/r/3qxNJk"]').forEach((link) => {
    const url = new URL(link.href);
    url.searchParams.delete("transparentBackground");
    link.href = url.toString();
  });

  const logoRemovalStyles = document.createElement("style");
  logoRemovalStyles.textContent = `
    .logo-mark img { display: none !important; }
    .logo-mark {
      background: var(--color-primary);
      color: var(--color-white);
      font-size: 1.05rem;
      font-weight: 800;
    }
    .logo-mark::after { content: "E"; }
  `;
  document.head.appendChild(logoRemovalStyles);

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");
  const body = document.body;
  const setMenu = (isOpen) => {
    mainNav?.classList.toggle("is-open", isOpen);
    menuToggle?.setAttribute("aria-expanded", String(isOpen));
    menuToggle?.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    body.style.overflow = isOpen ? "hidden" : "";
  };

  menuToggle?.addEventListener("click", () => {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
  });
  mainNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  const modal = document.querySelector("#training-modal");
  const modalTitle = document.querySelector("#modal-title");
  const modalSummary = document.querySelector("#modal-summary");
  const modalBody = document.querySelector("#modal-body");
  const closeButton = document.querySelector(".modal-close");
  let previousFocus = null;

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    previousFocus?.focus();
  };

  const openModal = (card, button) => {
    if (!modal) return;
    previousFocus = button;
    modalTitle.textContent = card.dataset.title || "Formation";
    modalSummary.textContent = card.dataset.summary || "";
    modalBody.textContent = card.dataset.body || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modal.querySelector(".modal-panel")?.focus();
  };

  document.querySelectorAll(".training-card").forEach((card) => {
    card.querySelector(".card-link")?.addEventListener("click", (event) => {
      openModal(card, event.currentTarget);
    });
  });

  closeButton?.addEventListener("click", closeModal);
  modal?.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
      if (modal?.classList.contains("is-open")) closeModal();
    }
  });

  document.querySelector(".verify-cert-btn")?.addEventListener("click", () => {
    window.alert("La vérification numérique des certificats sera disponible prochainement.");
  });

  const revealElements = document.querySelectorAll(".reveal");
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    revealElements.forEach((element) => observer.observe(element));
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
