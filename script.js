const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const whatsappHref = () => {
  const { whatsappNumber, whatsappMessage } = SITE_CONFIG.contact;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};

const resolveLink = (key) => {
  if (key === "whatsapp") return whatsappHref();
  return SITE_CONFIG.links[key] || "#";
};

const image = (name) => IMAGES[name] || "";
const icon = (name, extraClass = "") => {
  const classes = ["ph", `ph-${name}`, extraClass].filter(Boolean).join(" ");
  return `<i class="${classes}" aria-hidden="true"></i>`;
};

const setImages = () => {
  qsa("[data-image]").forEach((element) => {
    const src = image(element.dataset.image);
    if (src) element.setAttribute("src", src);
  });
};

const setLinks = () => {
  qsa("[data-link]").forEach((element) => {
    element.setAttribute("href", resolveLink(element.dataset.link));
  });
};

const setIcons = () => {
  qsa("[data-icon]").forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
};

const setText = () => {
  qsa("[data-text]").forEach((element) => {
    const value = element.dataset.text;
    if (value === "brandSummary") element.textContent = SITE_CONFIG.brand.summary;
    if (value === "copyright") element.textContent = SITE_CONFIG.brand.copyright;
  });
};

const renderNav = () => {
  const nav = qs('[data-render="navLinks"]');
  const footerNav = qs('[data-render="footerNav"]');

  if (nav) {
    nav.innerHTML = SITE_CONFIG.navigation
      .map((item, index) => {
        const activeClass = index === 0 ? "is-active" : "";
        return `<li><a class="${activeClass}" href="${item.href}">${item.label}</a></li>`;
      })
      .join("");
  }

  if (footerNav) {
    footerNav.innerHTML = SITE_CONFIG.navigation
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");
  }
};

const renderAvatars = () => {
  const target = qs('[data-render="avatars"]');
  if (!target) return;

  target.innerHTML = SITE_CONFIG.avatars
    .map((initials) => `<span class="avatar">${initials}</span>`)
    .join("");
};

const renderServices = () => {
  const target = qs('[data-render="services"]');
  if (!target) return;

  target.innerHTML = SITE_CONFIG.services
    .map(
      (service) => `
        <article class="service-card reveal">
          <div class="card-icon">${icon(service.icon)}</div>
          <h3>${service.title}</h3>
          <p>${service.text}</p>
        </article>
      `
    )
    .join("");
};

const renderBenefits = () => {
  const target = qs('[data-render="benefits"]');
  if (!target) return;

  target.innerHTML = SITE_CONFIG.benefits
    .map(
      (benefit) => `
        <article class="benefit-item reveal">
          <div class="benefit-icon">${icon(benefit.icon)}</div>
          <h3>${benefit.title}</h3>
          <p>${benefit.text}</p>
        </article>
      `
    )
    .join("");
};

const renderProjects = () => {
  const target = qs('[data-render="projects"]');
  if (!target) return;

  target.innerHTML = SITE_CONFIG.projects
    .map(
      (project) => `
        <article class="work-card reveal">
          <img src="${image(project.image)}" alt="Vista previa de ${project.name}" loading="lazy" />
          <div class="work-card__body">
            <h3>${project.name}</h3>
            <p>${project.category}</p>
            <a class="mini-link" href="${project.url}" target="_blank" rel="noopener">
              Ver sitio
              <span class="icon">${icon("arrow-right")}</span>
            </a>
          </div>
        </article>
      `
    )
    .join("");
};

const renderProcess = () => {
  const target = qs('[data-render="process"]');
  if (!target) return;

  target.innerHTML = SITE_CONFIG.process
    .map(
      (item) => `
        <article class="process-step reveal">
          <span class="process-number">${item.step}</span>
          <div class="process-icon">${icon(item.icon)}</div>
          <h3>${item.title}</h3>
        </article>
      `
    )
    .join("");
};

const renderFooter = () => {
  const services = qs('[data-render="footerServices"]');
  const socials = qs('[data-render="socials"]');
  const contact = qs('[data-render="contact"]');

  if (services) {
    services.innerHTML = SITE_CONFIG.footerServices.map((item) => `<li>${item}</li>`).join("");
  }

  if (socials) {
    socials.innerHTML = SITE_CONFIG.socials
      .map((social) => {
        const href = social.hrefKey === "whatsapp" ? resolveLink("whatsapp") : resolveLink(social.hrefKey);
        return `<a href="${href}" target="_blank" rel="noopener" aria-label="${social.label}">${icon(social.icon)}</a>`;
      })
      .join("");
  }

  if (contact) {
    const { phone, email, address } = SITE_CONFIG.contact;
    contact.innerHTML = `
      <li><a href="${resolveLink("whatsapp")}" target="_blank" rel="noopener"><span class="icon">${icon("whatsapp-logo")}</span>${phone}</a></li>
      <li><a href="mailto:${email}"><span class="icon">${icon("envelope-simple")}</span>${email}</a></li>
      <li><span><span class="icon">${icon("map-pin")}</span>${address}</span></li>
    `;
  }
};

const setupMobileNav = () => {
  const toggle = qs(".nav-toggle");
  const panel = qs(".nav-panel");
  if (!toggle || !panel) return;

  const closeMenu = () => {
    toggle.classList.remove("is-open");
    panel.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("is-open");
    panel.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa("a", panel).forEach((linkElement) => {
    linkElement.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
};

const setupReveal = () => {
  const elements = qsa(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
};

const setupActiveNav = () => {
  const links = qsa(".nav-links a");
  const sections = SITE_CONFIG.navigation
    .map((item) => qs(item.href))
    .filter(Boolean);

  if (!links.length || !sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((linkElement) => {
          linkElement.classList.toggle("is-active", linkElement.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((section) => observer.observe(section));
};

const renderPage = () => {
  renderNav();
  renderAvatars();
  renderServices();
  renderBenefits();
  renderProjects();
  renderProcess();
  renderFooter();
  setImages();
  setLinks();
  setIcons();
  setText();
};

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
  setupMobileNav();
  setupReveal();
  setupActiveNav();
});
