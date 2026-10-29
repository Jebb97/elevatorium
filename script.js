document.addEventListener("DOMContentLoaded", () => {
  const trainingContent = {
    "digital-marketing": {
      title: "Digital Marketing",
      summary: "Comprendre les bases du marketing digital et les appliquer à des situations réelles.",
      body: [
        { heading: "Présentation", items: ["Découvrir les fondamentaux du marketing digital à partir d’exemples concrets et de cas simples."] },
        { heading: "Objectifs", items: ["Comprendre le rôle du marketing digital dans la croissance d’une marque ou d’un projet.", "Identifier les bonnes pratiques pour attirer et engager une audience."] },
        { heading: "Compétences développées", items: ["Analyse de marché", "Stratégie digitale", "Positionnement", "Communication utile"] },
        { heading: "Pratique", items: ["Études de cas", "Exercices de positionnement", "Travail sur des messages et des parcours utilisateurs simples."] },
        { heading: "Projets", items: ["Concevoir une proposition de valeur claire.", "Mettre en place une approche marketing adaptée à un projet concret."] },
        { heading: "Évaluation", items: ["Évaluation continue sur la qualité de la compréhension, de l’analyse et de la mise en application."] }
      ]
    },
    "social-media-marketing": {
      title: "Social Media Marketing",
      summary: "Créer une présence utile, cohérente et crédible sur les réseaux sociaux.",
      body: [
        { heading: "Présentation", items: ["Explorer comment concevoir une présence digitale plus claire et plus utile sur les plateformes sociales."] },
        { heading: "Objectifs", items: ["Comprendre les attentes des audiences sur les réseaux sociaux.", "Créer une identité visuelle et éditoriale cohérente."] },
        { heading: "Compétences développées", items: ["Planification de contenus", "Rédaction pour les réseaux", "Analyse de performance", "Animation de communautés"] },
        { heading: "Pratique", items: ["Création de contenus adaptés à différents publics.", "Structuration d’une présence digitale simple et crédible."] },
        { heading: "Projets", items: ["Proposer une stratégie de diffusion adaptée à un projet ou une marque.", "Rédiger un plan de contenus cohérent."] },
        { heading: "Évaluation", items: ["Évaluation des compétences de planification, de communication et d’adaptation."] }
      ]
    },
    "creation-de-contenu": {
      title: "Création de contenu",
      summary: "Produire des contenus clairs, pertinents et adaptés à une audience.",
      body: [
        { heading: "Présentation", items: ["Développer des compétences pour créer des contenus utiles, lisibles et adaptés à des objectifs précis."] },
        { heading: "Objectifs", items: ["Identifier le bon message pour le bon public.", "Créer un contenu cohérent pour informer, inspirer ou engager."] },
        { heading: "Compétences développées", items: ["Rédaction", "Structuration de message", "Production visuelle", "Adaptation selon le canal"] },
        { heading: "Pratique", items: ["Ateliers de production de contenus.", "Travail sur la clarté, l’originalité et la cohérence éditoriale."] },
        { heading: "Projets", items: ["Réaliser des contenus à partir d’un objectif précis.", "Créer un mini cadre de production cohérent."] },
        { heading: "Évaluation", items: ["Évaluation du message, de la qualité de la structure et de la pertinence du contenu."] }
      ]
    },
    "community-management": {
      title: "Community Management",
      summary: "Créer des échanges de qualité et animer une communauté avec méthode.",
      body: [
        { heading: "Présentation", items: ["Comprendre les bases de l’animation de communauté et de la gestion des échanges en ligne."] },
        { heading: "Objectifs", items: ["Créer un cadre d’échanges positif et utile.", "Répondre de manière claire et professionnelle aux demandes, questions et feedbacks."] },
        { heading: "Compétences développées", items: ["Animation de groupes", "Rédaction de réponses", "Mise en place d’une culture de communauté", "Organisation des interactions"] },
        { heading: "Pratique", items: ["Simulation de discussions et de réponses.", "Organisation de contenus et d’échanges pour maintenir une dynamique claire."] },
        { heading: "Projets", items: ["Mettre en place une logique d’animation cohérente pour une communauté donnée."] },
        { heading: "Évaluation", items: ["Évaluation de la qualité des échanges, de la clarté de la communication et de la compréhension du public."] }
      ]
    },
    "intelligence-artificielle": {
      title: "Intelligence artificielle",
      summary: "Explorer des usages utiles et responsables pour apprendre, créer et travailler.",
      body: [
        { heading: "Présentation", items: ["Découvrir les usages de l’IA dans les métiers, la création et le travail quotidien."] },
        { heading: "Objectifs", items: ["Comprendre les outils d’IA disponibles et leur utilisation responsable.", "Apprendre à utiliser l’IA pour soutenir la création et le travail."] },
        { heading: "Compétences développées", items: ["Compréhension des outils IA", "Utilisation responsable", "Création assistée", "Analyse critique des résultats"] },
        { heading: "Pratique", items: ["Découverte des outils et de leurs usages utiles.", "Exercices sur la production assistée, l’organisation et la recherche d’information."] },
        { heading: "Projets", items: ["Créer une petite production assistée par l’IA.", "Mettre en place un usage réfléchi dans un contexte professionnel ou créatif."] },
        { heading: "Évaluation", items: ["Évaluation de la compréhension des outils, de leur usage responsable et des résultats produits."] }
      ]
    },
    "design-graphique": {
      title: "Design graphique",
      summary: "Développer un langage visuel lisible, professionnel et attractif.",
      body: [
        { heading: "Présentation", items: ["Explorer les bases du design graphique pour produire des visuels simples, lisibles et pertinents."] },
        { heading: "Objectifs", items: ["Comprendre les principes fondamentaux du visuel.", "Créer des supports simples et efficaces pour communiquer."] },
        { heading: "Compétences développées", items: ["Palette et hiérarchie visuelle", "Composition", "Typographie", "Création simple de visuels"] },
        { heading: "Pratique", items: ["Exercices sur les formes, la mise en page et les contrastes.", "Production de visuels utiles pour un message ou un projet."] },
        { heading: "Projets", items: ["Créer une petite composition visuelle cohérente.", "Mettre en pratique la communication visuelle dans un contexte concret."] },
        { heading: "Évaluation", items: ["Évaluation de la cohérence visuelle, de la lisibilité et de la qualité de la composition."] }
      ]
    },
    "entrepreneuriat": {
      title: "Entrepreneuriat",
      summary: "Transformer une idée en projet structuré, réaliste et orienté vers l’action.",
      body: [
        { heading: "Présentation", items: ["Approfondir la manière de penser un projet, de le structurer et de le rendre plus concret."] },
        { heading: "Objectifs", items: ["Comprendre les bases de la création de projet.", "Transformer une idée en plan action simple et crédible."] },
        { heading: "Compétences développées", items: ["Idéation", "Structuration de projet", "Analyse de besoin", "Mise en route d’une idée"] },
        { heading: "Pratique", items: ["Travail sur l’idée, le contexte et les éléments essentiels à clarifier.", "Exercices de réflexion autour de la faisabilité et de la valeur."] },
        { heading: "Projets", items: ["Développer une idée de projet simple et actionnable.", "Créer un plan de base pour la mise en œuvre."] },
        { heading: "Évaluation", items: ["Évaluation de la clarté du projet, de la logique de mise en œuvre et de la capacité à structurer une idée."] }
      ]
    },
    "anglais": {
      title: "Anglais (L1–3)",
      summary: "Renforcer la compréhension, la communication et la confiance pour évoluer.",
      body: [
        { heading: "Présentation", items: ["Développer les compétences de compréhension et d’expression pour mieux communiquer et apprendre dans un contexte international."] },
        { heading: "Objectifs", items: ["Améliorer la compréhension orale et écrite.", "Développer la capacité à communiquer de manière plus claire et plus confiante."] },
        { heading: "Compétences développées", items: ["Compréhension", "Expression écrite", "Communication orale", "Autonomie dans l’apprentissage"] },
        { heading: "Pratique", items: ["Exercices de vocabulaire, de compréhension et de communication.", "Travail sur des situations concrètes de dialogue et d’expression."] },
        { heading: "Projets", items: ["Réaliser des activités de communication et de compréhension adaptées à un contexte professionnel ou académique."] },
        { heading: "Évaluation", items: ["Évaluation continue sur la compréhension, la précision et la fluidité de communication."] }
      ]
    }
  };

  const modal = document.querySelector("#training-modal");
  const modalTitle = document.querySelector("#modal-title");
  const modalSummary = document.querySelector("#modal-summary");
  const modalBody = document.querySelector("#modal-body");
  const closeButton = document.querySelector(".modal-close");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");

  const openModal = (courseKey) => {
    if (!modal) return;
    const course = trainingContent[courseKey];
    if (!course) return;

    modalTitle.textContent = course.title;
    modalSummary.textContent = course.summary;
    modalBody.innerHTML = course.body
      .map(
        (section) => `
          <div>
            <h4>${section.heading}</h4>
            <ul>
              ${section.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        `
      )
      .join("");

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modal.querySelector(".modal-panel")?.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  document.querySelectorAll(".training-card").forEach((card) => {
    card.querySelector(".card-link")?.addEventListener("click", () => openModal(card.dataset.course));
  });

  closeButton?.addEventListener("click", closeModal);
  modalBackdrop?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (menuToggle && menuToggle.getAttribute("aria-expanded") === "true") {
        menuToggle.setAttribute("aria-expanded", "false");
        mainNav?.classList.remove("is-open");
      }
      if (modal?.classList.contains("is-open")) {
        closeModal();
      }
    }
  });

  const setMenu = (isOpen) => {
    if (!menuToggle || !mainNav) return;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    mainNav.classList.toggle("is-open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  menuToggle?.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    setMenu(!isExpanded);
  });

  mainNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.querySelector(".verify-cert-btn")?.addEventListener("click", () => {
    window.alert("La vérification numérique des certificats sera disponible prochainement.");
  });

  const revealElements = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));
  }
});
