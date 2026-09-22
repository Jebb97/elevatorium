document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav a");
  const body = document.body;

  if (menuToggle && mainNav) {
    const setMenuState = (isOpen) => {
      mainNav.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
      );
      body.style.overflow = isOpen ? "hidden" : "";
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });
  }

  const modal = document.getElementById("training-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalSummary = document.getElementById("modal-summary");
  const modalBody = document.getElementById("modal-body");
  const modalCloseButton = document.querySelector(".modal-close");
  const closeModalElements = document.querySelectorAll("[data-close-modal='true']");

  const openModal = (title, summary, body) => {
    if (!modal) return;

    modalTitle.textContent = title;
    modalSummary.textContent = summary;
    modalBody.innerHTML = body;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    const focusTarget = modal.querySelector(".modal-panel");
    if (focusTarget) {
      focusTarget.focus();
    }
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  const trainingCards = document.querySelectorAll(".training-card");
  trainingCards.forEach((card) => {
    const button = card.querySelector(".card-link");
    if (!button) return;

    button.addEventListener("click", () => {
      const title = card.dataset.title || "Formation";
      const summary = card.dataset.summary || "";
      const body = card.dataset.body || "Pour en savoir plus, contactez Elevatorium.";
      openModal(title, summary, body);
    });
  });

  if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeModal);
  }

  closeModalElements.forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  const verifyBtns = document.querySelectorAll(".verify-cert-btn");
  verifyBtns.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Le système de vérification des certificats sera disponible prochainement.");
    });
  });

  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  const navLinksForSmoothScroll = document.querySelectorAll('a[href^="#"]');
  navLinksForSmoothScroll.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
