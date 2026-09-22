document.addEventListener("DOMContentLoaded",()=>{
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

  const menu=document.querySelector(".menu-toggle"),nav=document.querySelector("#main-nav"),body=document.body;
  const setMenu=(open)=>{nav?.classList.toggle("is-open",open);menu?.setAttribute("aria-expanded",String(open));menu?.setAttribute("aria-label",open?"Fermer le menu":"Ouvrir le menu");body.style.overflow=open?"hidden":""};
  menu?.addEventListener("click",()=>setMenu(menu.getAttribute("aria-expanded")!=="true"));
  nav?.querySelectorAll("a").forEach((link)=>link.addEventListener("click",()=>setMenu(false)));

  const modal=document.querySelector("#training-modal"),title=document.querySelector("#modal-title"),summary=document.querySelector("#modal-summary"),content=document.querySelector("#modal-body"),closeButton=document.querySelector(".modal-close");
  let previousFocus=null;
  const closeModal=()=>{if(!modal)return;modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");previousFocus?.focus()};
  const openModal=(card,button)=>{if(!modal)return;previousFocus=button;title.textContent=card.dataset.title||"Formation";summary.textContent=card.dataset.summary||"";content.textContent=card.dataset.body||"";modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");modal.querySelector(".modal-panel")?.focus()};
  document.querySelectorAll(".training-card").forEach((card)=>card.querySelector(".card-link")?.addEventListener("click",(event)=>openModal(card,event.currentTarget)));
  closeButton?.addEventListener("click",closeModal);modal?.querySelector(".modal-backdrop")?.addEventListener("click",closeModal);
  document.addEventListener("keydown",(event)=>{if(event.key==="Escape"){setMenu(false);if(modal?.classList.contains("is-open"))closeModal()}});
  document.querySelector(".verify-cert-btn")?.addEventListener("click",()=>window.alert("La vérification numérique des certificats sera disponible prochainement."));

  const reveal=document.querySelectorAll(".reveal");
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window)){reveal.forEach((item)=>item.classList.add("is-visible"))}else{const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12});reveal.forEach((item)=>observer.observe(item))}
  document.querySelectorAll('a[href^="#"]').forEach((link)=>link.addEventListener("click",(event)=>{const target=document.querySelector(link.getAttribute("href"));if(!target)return;event.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"})}));
});
