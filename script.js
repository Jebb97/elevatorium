document.addEventListener("DOMContentLoaded", () => {
  const premiumStylesheet = document.createElement("link");
  premiumStylesheet.rel = "stylesheet";
  premiumStylesheet.href = "./premium.css";
  document.head.appendChild(premiumStylesheet);

  const tallyUrl = "https://tally.so/r/3qxNJk?transparentBackground=1";
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav a");
  const body = document.body;

  if (menuToggle && mainNav) {
    const setMenuState = (isOpen) => {
      mainNav.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
      body.style.overflow = isOpen ? "hidden" : "";
    };

    menuToggle.addEventListener("click", () => {
      setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuState(false);
    });
  }

  const modal = document.getElementById("training-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalSummary = document.getElementById("modal-summary");
  const modalBody = document.getElementById("modal-body");
  const modalCloseButton = document.querySelector(".modal-close");
  const closeModalElements = document.querySelectorAll("[data-close-modal='true']");
  let lastFocusedElement = null;

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (lastFocusedElement) lastFocusedElement.focus();
  };

  const openModal = (title, summary, description, trigger) => {
    if (!modal) return;
    lastFocusedElement = trigger;
    modalTitle.textContent = title;
    modalSummary.textContent = summary;
    modalBody.textContent = description;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modal.querySelector(".modal-panel")?.focus();
  };

  document.querySelectorAll(".training-card").forEach((card) => {
    const button = card.querySelector(".card-link");
    button?.addEventListener("click", () => openModal(
      card.dataset.title || "Formation",
      card.dataset.summary || "",
      card.dataset.body || "Pour en savoir plus, contactez Elevatorium.",
      button
    ));
  });

  modalCloseButton?.addEventListener("click", closeModal);
  closeModalElements.forEach((element) => element.addEventListener("click", closeModal));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) closeModal();
  });

  document.querySelectorAll(".verify-cert-btn").forEach((button) => {
    button.addEventListener("click", () => {
      window.alert("Le système de vérification des certificats sera disponible prochainement.");
    });
  });

  const aboutSection = document.querySelector("#about .container");
  if (aboutSection && !document.querySelector(".community-strip")) {
    const strip = document.createElement("aside");
    strip.className = "community-strip reveal";
    strip.innerHTML = `
      <div><h3>Apprendre seul est une étape. Évoluer ensemble est une force.</h3></div>
      <p>Rejoignez l’écosystème Elevatorium pour apprendre, pratiquer, créer et avancer vers de nouvelles opportunités.</p>
      <a class="button button-secondary" href="${tallyUrl}" target="_blank" rel="noopener noreferrer">Rejoindre la communauté</a>
    `;
    aboutSection.appendChild(strip);
  }

  const mobileBar = document.createElement("div");
  mobileBar.className = "mobile-conversion-bar";
  mobileBar.setAttribute("aria-label", "Inscription rapide");
  mobileBar.innerHTML = `
    <span>Prêt à évoluer ?</span>
    <a class="button button-primary" href="${tallyUrl}" target="_blank" rel="noopener noreferrer">S’inscrire</a>
  `;
  document.body.appendChild(mobileBar);

  const revealEls = document.querySelectorAll(".reveal");
  const showImmediately = () => revealEls.forEach((element) => element.classList.add("is-visible"));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    showImmediately();
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    revealEls.forEach((element) => revealObserver.observe(element));
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
