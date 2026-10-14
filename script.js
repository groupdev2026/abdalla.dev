"use strict";

/* =========================================================
   Abdalla.Tech — Portfolio script

   QAYBTA 1: CONFIG  <-- Halkan ka bedel macluumaadkaaga
   (email, social links, skills, projects, experience).
   Website-ku wuxuu isagu naftiisa dib u dhisayaa
   (is-manage) marka aad halkan wax bedesho.
   ========================================================= */
const CONFIG = {
  email: "biibaayeapdalla@gmail.com",

  // Contact form — sida fariimaha laguugu soo diro (email-kaaga)
  //  1) Tag https://web3forms.com, geli email-kaaga, xaqiiji, kadibna koobiyee "Access Key"
  //  2) Ku dheji key-gaas "accessKey" halkan hoose (key-gu waa public, halkan wuu ku nabdoon yahay)
  //  Haddii aad ka tagto madhan, form-ku wuxuu furayaa email app-ka qofka (mailto).
  contact: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "",
  },

  // Ereyada ku qoran hero-ga (typing effect)
  roles: [
    "modern websites",
    "scalable web apps",
    "clean & fast APIs",
    "great user experiences",
  ],

  // Social links — bedel "#" iyo URL-yada runta ah
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" },
    { name: "X (Twitter)", url: "https://x.com/", icon: "x" },
    { name: "Email", url: "biibaayeapdalla@gmail.com", icon: "mail" },
  ],

  // Skills — level waa 0 ilaa 100
  skills: [
    {
      group: "Frontend",
      icon: "🎨",
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3 & Responsive Design", level: 92 },
        { name: "JavaScript (ES6+)", level: 92 },
      ],
    },
    {
      group: "Backend",
      icon: "⚙️",
      items: [
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "Databases (SQL / NoSQL)", level: 82 },
      ],
    },
    {
      group: "Tools & Workflow",
      icon: "🛠️",
      items: [
        { name: "Git & GitHub", level: 92 },
        { name: "Testing & Debugging", level: 84 },
        { name: "Docker & CI/CD", level: 75 },
      ],
    },
  ],

  // Projects — category-yada filter-ka ayaa laga dhisayaa si toos ah
  projects: [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack",
      description: "A fast online store with cart, secure checkout and an admin dashboard for managing products and orders.",
      tags: ["JavaScript", "Node.js", "SQL"],
      emoji: "🛒",
      colors: ["#6366f1", "#8b5cf6"],
      live: "#",
      code: "#",
    },
    {
      title: "Task Manager App",
      category: "Web",
      description: "A clean productivity app with drag-and-drop boards, reminders and offline support.",
      tags: ["HTML", "CSS", "JavaScript"],
      emoji: "✅",
      colors: ["#0ea5e9", "#22d3ee"],
      live: "#",
      code: "#",
    },
    {
      title: "Analytics Dashboard",
      category: "Web",
      description: "Interactive charts and real-time metrics with a responsive layout and dark/light themes.",
      tags: ["JavaScript", "Charts", "CSS"],
      emoji: "📊",
      colors: ["#f59e0b", "#ef4444"],
      live: "#",
      code: "#",
    },
    {
      title: "Payments REST API",
      category: "Backend",
      description: "A secure, well-documented API with authentication, rate limiting and automated tests.",
      tags: ["Node.js", "REST", "JWT"],
      emoji: "🔐",
      colors: ["#10b981", "#06b6d4"],
      live: "#",
      code: "#",
    },
    {
      title: "Real-Time Chat",
      category: "Full-Stack",
      description: "Instant messaging with rooms, typing indicators and message history.",
      tags: ["WebSockets", "Node.js", "JavaScript"],
      emoji: "💬",
      colors: ["#ec4899", "#8b5cf6"],
      live: "#",
      code: "#",
    },
    {
      title: "Blog & CMS Engine",
      category: "Backend",
      description: "A lightweight content management system with markdown support and a clean publishing workflow.",
      tags: ["Node.js", "SQL", "Markdown"],
      emoji: "📝",
      colors: ["#14b8a6", "#6366f1"],
      live: "#",
      code: "#",
    },
  ],

  // Experience
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Company Name",
      period: "2024 — Present",
      description: "Leading feature development, reviewing code and mentoring teammates while improving performance and reliability.",
    },
    {
      role: "Software Engineer",
      company: "Company Name",
      period: "2022 — 2024",
      description: "Built and maintained web applications end-to-end, from UI to APIs, working closely with designers and product teams.",
    },
    {
      role: "Junior Software Engineer",
      company: "Company Name",
      period: "2021 — 2022",
      description: "Started my professional journey shipping features, fixing bugs and learning best practices in a team setting.",
    },
  ],
};

/* =========================================================
   QAYBTA 2: Caawiyayaal (helpers)
   ========================================================= */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Icons (SVG paths)
const ICON_PATHS = {
  github:
    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  external:
    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
};

const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICON_PATHS[name] || ""}</svg>`;

// Links-ka dibadda: tab cusub, links-ka "#" ama gudaha: isla tab-ka
const linkAttrs = (url) =>
  /^https?:/i.test(url) ? `href="${url}" target="_blank" rel="noopener noreferrer"` : `href="${url}"`;

/* =========================================================
   QAYBTA 3: Dark / Light mode
   ========================================================= */
let themeTimer;

function initTheme() {
  const root = document.documentElement;
  const btn = $("#themeToggle");
  const meta = $('meta[name="theme-color"]');

  const apply = (theme, save) => {
    root.setAttribute("data-theme", theme);
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0e1f" : "#f7f8fc");
    const next = theme === "dark" ? "light" : "dark";
    btn.setAttribute("aria-label", `Switch to ${next} mode`);
    btn.setAttribute("title", `Switch to ${next} mode`);
    if (save) {
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {
        /* localStorage lama heli karo */
      }
    }
  };

  apply(root.getAttribute("data-theme") || "dark", false);

  btn.addEventListener("click", () => {
    root.classList.add("theme-transition");
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
    clearTimeout(themeTimer);
    themeTimer = setTimeout(() => root.classList.remove("theme-transition"), 450);
  });

  // Haddii isticmaaluhu aanu gacanta ku dooran, raac nidaamka taleefanka/computer-ka
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = (e) => {
    let saved = null;
    try {
      saved = localStorage.getItem("theme");
    } catch (err) {
      /* ignore */
    }
    if (!saved) apply(e.matches ? "dark" : "light", false);
  };
  if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
}

/* =========================================================
   QAYBTA 4: Nuxurka laga dhisayo CONFIG
   ========================================================= */
function renderSocials() {
  const html = CONFIG.socials
    .map(
      (s) =>
        `<li><a class="social-link" ${linkAttrs(s.url)} aria-label="${s.name}" title="${s.name}">${icon(s.icon)}</a></li>`
    )
    .join("");
  ["#heroSocials", "#contactSocials"].forEach((sel) => {
    const el = $(sel);
    if (el) el.innerHTML = html;
  });
}

function renderEmail() {
  ["#aboutEmail", "#contactEmail"].forEach((sel) => {
    const el = $(sel);
    if (!el) return;
    el.textContent = CONFIG.email;
    el.setAttribute("href", `mailto:${CONFIG.email}`);
  });
}

function renderSkills() {
  const grid = $("#skillsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.skills
    .map(
      (group, i) => `
      <article class="skill-card card reveal" style="--delay:${i * 100}ms">
        <div class="skill-card__head">
          <span class="skill-card__icon" aria-hidden="true">${group.icon}</span>
          <h3>${group.group}</h3>
        </div>
        <ul class="skill-list">
          ${group.items
            .map(
              (s) => `
            <li class="skill">
              <div class="skill__row"><span>${s.name}</span><span class="skill__pct">${s.level}%</span></div>
              <div class="skill__track" role="progressbar" aria-label="${s.name}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.level}">
                <span class="skill__fill" style="--level:${s.level}%"></span>
              </div>
            </li>`
            )
            .join("")}
        </ul>
      </article>`
    )
    .join("");
}

function renderProjects() {
  const filtersEl = $("#projectFilters");
  const gridEl = $("#projectGrid");
  if (!filtersEl || !gridEl) return;

  const categories = ["All", ...new Set(CONFIG.projects.map((p) => p.category))];

  filtersEl.innerHTML = categories
    .map(
      (c, i) =>
        `<button class="filter${i === 0 ? " is-active" : ""}" type="button" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`
    )
    .join("");

  gridEl.innerHTML = CONFIG.projects
    .map(
      (p, i) => `
      <article class="project reveal" data-category="${p.category}" style="--delay:${(i % 3) * 90}ms">
        <div class="project__thumb" style="--from:${p.colors[0]};--to:${p.colors[1]}">
          <span class="project__emoji" aria-hidden="true">${p.emoji}</span>
        </div>
        <div class="project__body">
          <span class="project__cat">${p.category}</span>
          <h3 class="project__title">${p.title}</h3>
          <p class="project__desc">${p.description}</p>
          <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
          <div class="project__links">
            <a ${linkAttrs(p.live)}>Live demo ${icon("external")}</a>
            <a ${linkAttrs(p.code)}>Source ${icon("code")}</a>
          </div>
        </div>
      </article>`
    )
    .join("");

  // Filter-ka
  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    const value = btn.dataset.filter;

    $$(".filter", filtersEl).forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });

    let shown = 0;
    $$(".project", gridEl).forEach((card) => {
      const match = value === "All" || card.dataset.category === value;
      card.hidden = !match;
      if (match) {
        // Dib u ciyaar animation-ka muuqaalka
        card.style.setProperty("--delay", `${shown * 70}ms`);
        card.classList.remove("is-visible");
        void card.offsetWidth;
        card.classList.add("is-visible");
        shown++;
      }
    });
  });
}

function renderTimeline() {
  const list = $("#timeline");
  if (!list) return;
  list.innerHTML = CONFIG.experience
    .map(
      (e, i) => `
      <li class="timeline__item reveal" style="--delay:${i * 100}ms">
        <span class="timeline__dot" aria-hidden="true"></span>
        <div class="timeline__card">
          <span class="timeline__date">${e.period}</span>
          <h3>${e.role}</h3>
          <p class="timeline__company">${e.company}</p>
          <p>${e.description}</p>
        </div>
      </li>`
    )
    .join("");
}

/* =========================================================
   QAYBTA 5: Typing effect
   ========================================================= */
function initTyped() {
  const el = $("#typed");
  if (!el) return;
  const roles = CONFIG.roles;

  if (reduceMotion) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const word = roles[roleIndex];
    el.textContent = word.slice(0, charIndex);

    let delay = deleting ? 40 : 85;
    if (!deleting && charIndex === word.length) {
      deleting = true;
      delay = 1700; // joogso marka eraygu dhammaado
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }
    charIndex += deleting ? -1 : 1;
    setTimeout(tick, delay);
  };
  tick();
}

/* =========================================================
   QAYBTA 6: Navigation (mobile menu + scroll spy)
   ========================================================= */
function initNav() {
  const nav = $("#nav");
  const toggle = $("#navToggle");
  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  $$(".nav__link", nav).forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) setOpen(false);
  });

  // Scroll spy: link-ga qaybta aad ku jirto ayaa iftiimaya
  const links = $$(".nav__link", nav);
  const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => {
          const active = l.getAttribute("href") === `#${entry.target.id}`;
          l.classList.toggle("is-active", active);
          if (active) l.setAttribute("aria-current", "true");
          else l.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* =========================================================
   QAYBTA 7: Scroll effects (header, progress bar, back-to-top)
   ========================================================= */
function initScrollEffects() {
  const header = $("#header");
  const progress = $("#scrollProgress");
  const toTop = $("#toTop");

  const update = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (header) header.classList.toggle("is-scrolled", y > 10);
    if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  };

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", update);
  update();

  if (toTop) {
    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
    );
  }
}

/* =========================================================
   QAYBTA 8: Reveal animations + counters
   ========================================================= */
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  if (Number.isNaN(target) || reduceMotion) return;
  const duration = 1400;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initReveal() {
  const items = $$(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        $$("[data-count]", entry.target).forEach(animateCounter);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

/* =========================================================
   QAYBTA 9: Contact form (validation + mailto)
   ========================================================= */
function initContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");
  if (!form) return;

  const rules = {
    name: (v) => v.trim().length >= 2 || "Please enter your name.",
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.",
    message: (v) => v.trim().length >= 10 || "Your message should be at least 10 characters.",
  };

  const check = (field) => {
    const input = form.elements[field];
    const result = rules[field](input.value);
    const ok = result === true;
    input.setAttribute("aria-invalid", String(!ok));
    const err = $(`[data-error-for="${field}"]`, form);
    if (err) err.textContent = ok ? "" : result;
    return ok;
  };

  const setStatus = (text, type) => {
    status.textContent = text;
    status.className = `form__status${type ? ` is-${type}` : ""}`;
  };

  // Ka saar khaladka marka isticmaaluhu bilaabo inuu sixo
  Object.keys(rules).forEach((field) => {
    form.elements[field].addEventListener("input", () => {
      if (form.elements[field].getAttribute("aria-invalid") === "true") check(field);
    });
  });

  const submitBtn = $('button[type="submit"]', form);

  // Ku dir fariinta adeegga (Web3Forms): waxay si toos ah ugu soo gelaysaa email-kaaga
  const sendToService = async ({ name, email, message }) => {
    const res = await fetch(CONFIG.contact.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: CONFIG.contact.accessKey,
        subject: `New message from ${name} - Abdalla.Tech`,
        from_name: "Abdalla.Tech Portfolio",
        name,
        email,
        message,
        botcheck: form.elements.botcheck ? form.elements.botcheck.checked : false,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      throw new Error(data.message || `Request failed (${res.status})`);
    }
  };

  // Hab kale (fallback): furo email app-ka qofka haddii key la dhigin
  const openMailApp = ({ name, email, message }) => {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const results = Object.keys(rules).map(check);

    if (results.includes(false)) {
      const firstBad = $('[aria-invalid="true"]', form);
      if (firstBad) firstBad.focus();
      setStatus("Please fix the highlighted fields.", "error");
      return;
    }

    const data = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };

    // Key lama dhigin: isticmaal mailto
    if (!CONFIG.contact || !CONFIG.contact.accessKey) {
      setStatus("Thanks! Opening your email app…", "success");
      openMailApp(data);
      form.reset();
      return;
    }

    submitBtn.disabled = true;
    setStatus("Sending your message…", "");
    try {
      await sendToService(data);
      setStatus("Thank you! Your message has been sent. I'll get back to you soon.", "success");
      form.reset();
    } catch (err) {
      setStatus(`Sorry, something went wrong. Please try again or email me at ${CONFIG.email}.`, "error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* =========================================================
   QAYBTA 10: Bilow (init)
   ========================================================= */
function init() {
  initTheme();
  renderSocials();
  renderEmail();
  renderSkills();
  renderProjects();
  renderTimeline();

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  initTyped();
  initNav();
  initScrollEffects();
  initReveal(); // ha dambeeyo: kadib marka nuxurka la dhiso
  initContactForm();
}

init();

/* =========================================================
   QAYBTA 11: 3D EFFECTS  (cusub — koodhkii hore waa sidiisii)

   Sharaxaad kooban:
   1) Hero parallax: mouse-ka marka uu dhaqaaqo, waxaan xisaabinaa
      meesha uu ku yaal (-1 ilaa 1) oo gelinaa CSS variables
      --mx iyo --my. CSS-ku wuxuu isticmaalaa si uu u rogo sawirka,
      chips-ka iyo dhalaalka asalka (qoto-dheeraan 3D).
   2) Card tilt: kaar kasta marka mouse-ka lagu mariyo wuu u janjeeraa
      dhinaca mouse-ka (rotateX / rotateY) + iftiin (glare) ayaa raacaya.
   Taleefanka (mouse la'aan) ama reduced-motion: tilt/parallax waa la
   dhaafaa; CSS-ku wuxuu isagu bixiyaa animation yar oo 3D ah.
   ========================================================= */
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function initHeroParallax() {
  const hero = $("#home");
  if (!hero || !canHover || reduceMotion) return;

  let frame = null;
  let nextX = 0;
  let nextY = 0;

  const apply = () => {
    hero.style.setProperty("--mx", nextX.toFixed(3));
    hero.style.setProperty("--my", nextY.toFixed(3));
    frame = null;
  };

  const queue = (x, y) => {
    nextX = x;
    nextY = y;
    if (!frame) frame = requestAnimationFrame(apply);
  };

  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1 ... 1
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2; // -1 ... 1
    queue(x, y);
  });
  // Marka mouse-ka ka baxo, dib ugu soo celi bartilmaameedka
  hero.addEventListener("pointerleave", () => queue(0, 0));
}

function initCardTilt() {
  if (!canHover || reduceMotion) return;

  const cards = $$(".skill-card, .project, .stat, .timeline__card, .contact-item");
  const MAX = 9; // dhererka ugu badan ee janjeerka (degrees)

  cards.forEach((card) => {
    card.classList.add("tilt-3d");

    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width; // 0 ... 1
      const py = (e.clientY - r.top) / r.height; // 0 ... 1
      card.style.setProperty("--rx", `${((0.5 - py) * MAX * 2).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${((px - 0.5) * MAX * 2).toFixed(2)}deg`);
      card.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

function init3D() {
  initHeroParallax();
  initCardTilt();
}

init3D();