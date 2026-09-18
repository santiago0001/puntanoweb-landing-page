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
        <article class="service-card fade-up">
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
        <article class="benefit-item fade-up">
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
    .map((project) => {
      const hasUrl = project.url && project.url !== "#";
      const actionAttributes = hasUrl
        ? `href="${project.url}" target="_blank" rel="noopener"`
        : 'href="#" aria-disabled="true" tabindex="-1"';

      return `
        <article class="work-card zoom-in" data-category="${project.category}">
          <img src="${image(project.image)}" alt="Vista previa de ${project.name}" loading="lazy" />
          <div class="work-card__body">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="work-tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="work-card__actions">
              <a class="work-action work-action--primary is-disabled" href="#" aria-disabled="true" tabindex="-1">
                ${icon("play-fill")} Ver demo
              </a>
              <a class="work-action work-action--secondary${hasUrl ? "" : " is-disabled"}" ${actionAttributes}>
                ${icon("arrow-up-right")} Visitar sitio
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
};

const setupProjectFilters = () => {
  const buttons = qsa(".work-filters button");
  const cards = qsa(".work-card");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      cards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });
};

const renderProcess = () => {
  const target = qs('[data-render="process"]');
  if (!target) return;

  target.innerHTML = SITE_CONFIG.process
    .map(
      (item) => `
        <article class="process-step fade-up">
          <span class="process-number">${item.step}</span>
          <div class="process-icon">${icon(item.icon)}</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
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
        const conversion = social.hrefKey === "whatsapp"
          ? ' onclick="return gtag_report_conversion(this.href);"'
          : "";
        return `<a href="${href}" target="_blank" rel="noopener" aria-label="${social.label}"${conversion}>${icon(social.icon)}</a>`;
      })
      .join("");
  }

  if (contact) {
    const { phone, email, address } = SITE_CONFIG.contact;
    contact.innerHTML = `
      <li><a href="${resolveLink("whatsapp")}" target="_blank" rel="noopener" onclick="return gtag_report_conversion(this.href);"><span class="icon">${icon("whatsapp-logo")}</span>${phone}</a></li>
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

const setupScrollChrome = () => {
  const header = qs(".site-header");
  if (!header) return;

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 14);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
};

const setupButtonPress = () => {
  qsa(".btn, .nav-whatsapp, .mini-link").forEach((element) => {
    const press = () => element.classList.add("is-pressed");
    const release = () => element.classList.remove("is-pressed");

    element.addEventListener("pointerdown", press);
    element.addEventListener("pointerup", release);
    element.addEventListener("pointerleave", release);
    element.addEventListener("pointercancel", release);
  });
};

const setupReveal = () => {
  const elements = qsa(".reveal, .fade-up, .fade-left, .fade-right, .zoom-in");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
};

const setupPageLoadMotion = () => {
  requestAnimationFrame(() => {
    document.body.classList.add("page-loaded");
  });
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
  setupScrollChrome();
  setupButtonPress();
  setupReveal();
  setupActiveNav();
  setupProjectFilters();
  setupPageLoadMotion();
});
