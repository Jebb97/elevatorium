document.addEventListener("DOMContentLoaded", () => {
  // Tally doit s’ouvrir avec un arrière-plan lisible, jamais en mode transparent.
  document.querySelectorAll('a[href*="tally.so/r/3qxNJk"]').forEach((link) => {
    const url = new URL(link.href);
    url.searchParams.delete("transparentBackground");
    link.href = url.toString();
  });

  const heroPolishStyles = document.createElement("style");
  heroPolishStyles.textContent = `
    /* La photo est une bande autonome sous le texte principal. */
    .hero::before {
      border-radius: 0 0 26px 26px;
      box-shadow:
        0 28px 45px rgba(24, 43, 9, 0.28),
        0 10px 18px rgba(24, 43, 9, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      filter: saturate(1.04) contrast(1.02);
    }

    /* Les boutons et leur texte restent groupés en bas à droite de la photo. */
    .hero-controls {
      right: clamp(1rem, 4vw, 4rem);
      bottom: clamp(2rem, 5vw, 4rem);
      padding: 1rem 1.25rem;
      border-radius: 24px;
      background: linear-gradient(
        135deg,
        rgba(24, 43, 9, 0.16),
        rgba(24, 43, 9, 0.04)
      );
      box-shadow: 0 16px 30px rgba(24, 43, 9, 0.16);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
    }

    .hero-actions {
      justify-content: flex-end;
    }

    .hero-note {
      color: #fff;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.58);
    }

    @media (max-width: 760px) {
      .hero-controls {
        right: 1rem;
        bottom: 2rem;
        left: 1rem;
        align-items: flex-end;
      }
      .hero-actions {
        justify-content: flex-end;
      }
      .hero-note {
        text-align: right;
      }
    }
  `;
  document.head.appendChild(heroPolishStyles);

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
