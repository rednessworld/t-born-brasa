/* ============================================================
   main.js — T-Born Brasa
   ============================================================ */

/* ── Nav scroll handler ───────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const THRESHOLD = 60;

  function syncNav() {
    nav.classList.toggle('nav--scrolled', window.scrollY > THRESHOLD);
  }

  window.addEventListener('scroll', syncNav, { passive: true });
  syncNav();
})();

/* ── Mobile nav ───────────────────────────────────────────── */
(function () {
  const toggle  = document.getElementById('nav-toggle');
  const mobile  = document.getElementById('nav-mobile');
  if (!toggle || !mobile) return;

  const focusable = 'a[href], button:not([disabled])';

  function openMenu() {
    mobile.classList.add('nav__mobile--open');
    mobile.removeAttribute('aria-hidden');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('data-i18n-aria', 'nav.aria.close');
    document.body.style.overflow = 'hidden';

    // Focus first focusable in mobile menu
    const first = mobile.querySelector(focusable);
    if (first) first.focus();
  }

  function closeMenu() {
    mobile.classList.remove('nav__mobile--open');
    mobile.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('data-i18n-aria', 'nav.aria.open');
    document.body.style.overflow = '';
    toggle.focus();
  }

  toggle.addEventListener('click', () => {
    const isOpen = mobile.classList.contains('nav__mobile--open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on link click
  mobile.addEventListener('click', e => {
    if (e.target.tagName === 'A') closeMenu();
  });

  // Escape key closes
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobile.classList.contains('nav__mobile--open')) closeMenu();
  });

  // Focus trap
  mobile.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const items = Array.from(mobile.querySelectorAll(focusable));
    if (!items.length) return;
    const first = items[0];
    const last  = items[items.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();

/* ── Menu tabs ────────────────────────────────────────────── */
(function () {
  const tabList = document.querySelector('[role="tablist"]');
  if (!tabList) return;

  const tabs   = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));

  function activate(tab) {
    tabs.forEach(t => {
      t.classList.remove('menu__tab--active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    panels.forEach(p => { if (p) p.classList.add('menu__panel--hidden'); });

    tab.classList.add('menu__tab--active');
    tab.setAttribute('aria-selected', 'true');
    tab.removeAttribute('tabindex');

    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    if (panel) panel.classList.remove('menu__panel--hidden');

    // Scroll tab into view on mobile
    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }

  tabList.addEventListener('click', e => {
    const tab = e.target.closest('[role="tab"]');
    if (tab) activate(tab);
  });

  tabList.addEventListener('keydown', e => {
    const cur = document.activeElement;
    if (!tabs.includes(cur)) return;
    const idx = tabs.indexOf(cur);
    let next;
    if      (e.key === 'ArrowRight') next = tabs[(idx + 1) % tabs.length];
    else if (e.key === 'ArrowLeft')  next = tabs[(idx - 1 + tabs.length) % tabs.length];
    else if (e.key === 'Home')       next = tabs[0];
    else if (e.key === 'End')        next = tabs[tabs.length - 1];
    if (next) { e.preventDefault(); activate(next); next.focus(); }
  });

  // Init: all tabs after first get tabindex -1
  tabs.forEach((t, i) => { if (i > 0) t.setAttribute('tabindex', '-1'); });
})();

/* ── Hero parallax ────────────────────────────────────────── */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const img = document.getElementById('hero-parallax-img');
  if (!img) return;

  const hero = img.closest('#hero') || img.parentElement;
  let ticking  = false;
  let heroVisible = true;

  function update() {
    img.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!heroVisible) return;
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  new IntersectionObserver(([entry]) => {
    heroVisible = entry.isIntersecting;
  }, { threshold: 0 }).observe(hero);
})();

/* ── About image parallax ─────────────────────────────────── */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const img     = document.getElementById('about-parallax-img');
  const section = document.getElementById('about');
  if (!img || !section) return;

  let ticking      = false;
  let aboutVisible = false;

  function update() {
    const rect         = section.getBoundingClientRect();
    const centerOffset = (rect.top + rect.height / 2) - (window.innerHeight / 2);
    /* Clamp to ±120px — matches the 240px extra image height (120px each side) */
    const clamped = Math.max(-120, Math.min(120, centerOffset * 0.3));
    img.style.transform = `translateY(${clamped}px)`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!aboutVisible) return;
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  new IntersectionObserver(([entry]) => {
    aboutVisible = entry.isIntersecting;
    if (aboutVisible) update();
  }, { threshold: 0 }).observe(section);
})();

/* ── Scroll reveal — Intersection Observer ────────────────── */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sel = '.reveal, .reveal--fade, .reveal--heading, .reveal--scale';

  if (prefersReduced) {
    document.querySelectorAll(sel).forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(sel).forEach(el => observer.observe(el));
})();

/* ── Loading screen ───────────────────────────────────────── */
(function () {
  const loader = document.getElementById('loader');
  if (!loader) return;

  function dismiss() {
    loader.classList.add('loader--hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }

  let isReturn = false;
  try { isReturn = !!sessionStorage.getItem('visited'); } catch {}
  try { sessionStorage.setItem('visited', '1'); } catch {}

  if (isReturn) {
    loader.remove();
  } else {
    if (document.readyState === 'complete') {
      setTimeout(dismiss, 800);
    } else {
      window.addEventListener('load', () => setTimeout(dismiss, 800), { once: true });
    }
  }
})();

/* ── Back to top ──────────────────────────────────────────── */
(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  function sync() {
    btn.classList.toggle('back-to-top--visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', sync, { passive: true });
  sync();

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ── Cookie consent ───────────────────────────────────────── */
(function () {
  const CONSENT_KEY  = 'cookie_consent';
  const banner       = document.getElementById('cookie-banner');
  const btnAccept    = document.getElementById('cookie-accept');
  const btnNecessary = document.getElementById('cookie-necessary');

  function loadAnalytics() {
    const id = window.GA_MEASUREMENT_ID;
    if (!id || id === 'G-XXXXXXXXXX') return;
    const s = document.createElement('script');
    s.src   = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', id);
  }

  function applyConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch {}
    if (banner) banner.hidden = true;
    if (value === 'accepted') loadAnalytics();
  }

  function init() {
    let stored = null;
    try { stored = localStorage.getItem(CONSENT_KEY); } catch {}
    if (stored === 'accepted') {
      loadAnalytics();
    } else if (!stored && banner) {
      setTimeout(() => {
        banner.hidden = false;
        const firstBtn = banner.querySelector('button');
        if (firstBtn) firstBtn.focus();
      }, 800);
    }
  }

  btnAccept?.addEventListener('click',    () => applyConsent('accepted'));
  btnNecessary?.addEventListener('click', () => applyConsent('necessary'));

  init();
})();

/* ── GA4 measurement ID placeholder ──────────────────────── */
window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

/* ── Lenis smooth scroll ──────────────────────────────────── */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof Lenis === 'undefined') return;
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
})();
