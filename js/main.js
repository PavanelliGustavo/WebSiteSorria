/**
 * SORRIA INSTITUTO ODONTOLÓGICO
 * JS Principal — navegação, carrossel, FAQ, animações
 */

'use strict';

/* ── UTILITÁRIOS ─────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── HEADER — SCROLL EFFECT ─────────────────────────────── */
(function initHeaderScroll() {
  const header = $('#header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── MENU HAMBURGER / DRAWER ────────────────────────────── */
(function initMobileMenu() {
  const hamburger = $('#hamburgerBtn');
  const nav       = $('#mainNav');
  const overlay   = $('#menuOverlay');
  if (!hamburger || !nav || !overlay) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    nav.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Fechar menu');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
    // Foco no primeiro link do menu para acessibilidade
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    isOpen = false;
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  // Fecha ao clicar em qualquer link do menu
  $$('.header__nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fecha com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });
})();

/* ── SMOOTH SCROLL + ACTIVE LINK ────────────────────────── */
(function initSmoothScroll() {
  const headerHeight = 68;

  // Smooth scroll em todos os links âncora
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href').slice(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  // Indicador ativo via IntersectionObserver
  const sections = $$('section[id]');
  const navLinks = $$('.header__nav-link[data-section]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      });
    },
    {
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    }
  );

  sections.forEach(sec => observer.observe(sec));
})();

/* ── ACCORDION FAQ ──────────────────────────────────────── */
(function initFAQ() {
  const items = $$('.faq__item');
  if (!items.length) return;

  items.forEach(item => {
    const btn    = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Fecha todos os outros
      items.forEach(other => {
        const otherBtn    = other.querySelector('.faq__question');
        const otherAnswer = other.querySelector('.faq__answer');
        if (otherBtn && otherAnswer && other !== item) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.hidden = true;
        }
      });

      // Alterna o atual
      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        answer.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
        // Scroll suave para o item se necessário (mobile)
        setTimeout(() => {
          const rect = btn.getBoundingClientRect();
          if (rect.top < 80) {
            window.scrollTo({ top: window.scrollY + rect.top - 80, behavior: 'smooth' });
          }
        }, 50);
      }
    });
  });
})();

/* ── CARROSSEL (genérico) ───────────────────────────────── */
class Carousel {
  constructor(options) {
    const {
      trackId,
      dotsId,
      prevId,
      nextId,
      loop = true,
      autoplay = 0
    } = options;

    this.track    = document.getElementById(trackId);
    this.dotsEl   = document.getElementById(dotsId);
    this.prevBtn  = prevId ? document.getElementById(prevId) : null;
    this.nextBtn  = nextId ? document.getElementById(nextId) : null;
    this.loop     = loop;
    this.autoplay = autoplay;

    if (!this.track) return;

    this.slides   = [...this.track.children];
    this.current  = 0;
    this.total    = this.slides.length;
    this.isDragging = false;
    this.startX   = 0;
    this.deltaX   = 0;

    if (this.total <= 1) return;

    this._buildDots();
    this._bindArrows();
    this._bindTouch();
    this._bindKeyboard();
    this.goTo(0, false);

    if (this.autoplay > 0) {
      this._startAutoplay();
      this.track.closest('.carousel')?.addEventListener('mouseenter', () => this._stopAutoplay());
      this.track.closest('.carousel')?.addEventListener('mouseleave', () => this._startAutoplay());
    }
  }

  _buildDots() {
    if (!this.dotsEl) return;
    this.dotsEl.innerHTML = this.slides.map((_, i) => `
      <button
        class="carousel__dot${i === 0 ? ' active' : ''}"
        aria-label="Slide ${i + 1} de ${this.total}"
        role="tab"
        aria-selected="${i === 0}"
        data-index="${i}"
      ></button>
    `).join('');

    this.dots = [...this.dotsEl.querySelectorAll('.carousel__dot')];
    this.dots.forEach(dot => {
      dot.addEventListener('click', () => this.goTo(parseInt(dot.dataset.index, 10)));
    });
  }

  _updateDots() {
    if (!this.dots) return;
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.current);
      dot.setAttribute('aria-selected', i === this.current);
    });
  }

  _updateArrows() {
    if (!this.prevBtn || !this.nextBtn) return;
    if (!this.loop) {
      this.prevBtn.disabled = this.current === 0;
      this.nextBtn.disabled = this.current === this.total - 1;
    }
  }

  goTo(index, animate = true) {
    let idx = index;
    if (this.loop) {
      idx = ((idx % this.total) + this.total) % this.total;
    } else {
      idx = Math.max(0, Math.min(index, this.total - 1));
    }
    this.current = idx;

    if (this._isScrollMode()) {
      // Modo scroll-snap (mobile): scrollTo em vez de transform
      let scrollLeft = 0;
      for (let i = 0; i < idx; i++) {
        scrollLeft += this.slides[i].offsetWidth +
          parseInt(getComputedStyle(this.slides[i]).marginRight || 0, 10);
      }
      if (animate) {
        this.track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      } else {
        this.track.scrollLeft = scrollLeft;
      }
    } else {
      // Modo transform (desktop)
      if (!animate) this.track.style.transition = 'none';
      else this.track.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
      const slideWidth = this.slides[0].getBoundingClientRect().width +
        parseInt(getComputedStyle(this.slides[0]).marginRight || 0, 10);
      this.track.style.transform = `translateX(${-slideWidth * idx}px)`;
      if (!animate) void this.track.offsetWidth;
    }

    this._updateDots();
    this._updateArrows();
  }

  next() { this.goTo(this.current + 1); }
  prev() { this.goTo(this.current - 1); }

  _bindArrows() {
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());
  }

  _bindTouch() {
    const el = this.track;

    // Modo scroll-snap (mobile): o browser cuida do swipe; só sincronizar dots
    let syncTimer;
    el.addEventListener('scroll', () => {
      if (!this._isScrollMode()) return;
      clearTimeout(syncTimer);
      syncTimer = setTimeout(() => {
        const trackLeft = el.getBoundingClientRect().left;
        let idx = 0;
        let minDist = Infinity;
        this.slides.forEach((slide, i) => {
          const dist = Math.abs(slide.getBoundingClientRect().left - trackLeft);
          if (dist < minDist) { minDist = dist; idx = i; }
        });
        if (idx !== this.current) {
          this.current = idx;
          this._updateDots();
          this._updateArrows();
        }
      }, 50);
    }, { passive: true });

    // Modo transform (desktop): arrastar com eventos de toque
    let startY = 0;
    let direction = null;

    el.addEventListener('touchstart', (e) => {
      if (this._isScrollMode()) return;
      this.startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      this.deltaX = 0;
      this.isDragging = true;
      direction = null;
      el.style.transition = 'none';
    }, { passive: true });

    el.addEventListener('touchmove', (e) => {
      if (this._isScrollMode() || !this.isDragging) return;
      const dx = e.touches[0].clientX - this.startX;
      const dy = e.touches[0].clientY - startY;

      if (direction === null) {
        if (Math.abs(dx) > Math.abs(dy) + 4) {
          direction = 'h';
        } else if (Math.abs(dy) > Math.abs(dx) + 4) {
          direction = 'v';
          this.isDragging = false;
          return;
        } else {
          return;
        }
      }
      if (direction !== 'h') return;

      e.preventDefault();
      this.deltaX = dx;
      const slideWidth = this.slides[0].getBoundingClientRect().width +
        parseInt(getComputedStyle(this.slides[0]).marginRight || 0, 10);
      const base = -slideWidth * this.current;
      el.style.transform = `translateX(${base + this.deltaX * 0.8}px)`;
    }, { passive: false });

    el.addEventListener('touchend', () => {
      if (this._isScrollMode()) return;
      const wasH = direction === 'h';
      this.isDragging = false;
      direction = null;
      el.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
      if (!wasH) return;
      const threshold = 60;
      if (this.deltaX < -threshold) this.next();
      else if (this.deltaX > threshold) this.prev();
      else this.goTo(this.current);
    });
  }

  _bindKeyboard() {
    const carousel = this.track.closest('.carousel');
    if (!carousel) return;
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); this.prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
    });
  }

  _startAutoplay() {
    this._stopAutoplay();
    this._autoplayTimer = setInterval(() => this.next(), this.autoplay);
  }
  _stopAutoplay() {
    clearInterval(this._autoplayTimer);
  }

  // Retorna true quando o CSS de mobile ativou overflow-x (scroll-snap)
  _isScrollMode() {
    return getComputedStyle(this.track).overflowX !== 'visible';
  }

  // Recalcula posição no resize
  recalc() { this.goTo(this.current, false); }
}

/* ── INIT CARROSSÉIS ────────────────────────────────────── */
(function initCarousels() {
  // Galeria (mobile)
  const galeriaCarousel = new Carousel({
    trackId: 'galeriaTrack',
    dotsId: 'galeriaDots',
    loop: true
  });

  // Depoimentos (mobile + desktop)
  const depoimentosCarousel = new Carousel({
    trackId: 'depoimentosTrack',
    dotsId: 'depoimentosDots',
    prevId: 'depoimentosPrev',
    nextId: 'depoimentosNext',
    loop: true,
    autoplay: 6000
  });

  // Recalcular em resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      galeriaCarousel.recalc?.();
      depoimentosCarousel.recalc?.();
    }, 150);
  });
})();

/* ── ANIMAÇÕES DE ENTRADA (IntersectionObserver) ─────────── */
(function initFadeUp() {
  const elements = $$('.fade-up, .tec-card, .especialidade-card, .convenio-item');
  if (!elements.length) return;

  // Adiciona classe fade-up em elementos que devem animar
  $$('.tec-card, .especialidade-card, .section__header, .about__image-wrapper, .about__content').forEach(el => {
    if (!el.classList.contains('fade-up')) el.classList.add('fade-up');
  });

  const all = $$('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay para cards em grid
        const siblings = [...entry.target.parentElement.children].filter(c => c.classList.contains('fade-up'));
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.min(index * 80, 400)}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  all.forEach(el => observer.observe(el));
})();

/* ── DEPOIMENTOS CARROSSEL — centralizar no desktop ──────── */
(function initDepoimentosPadding() {
  function updatePadding() {
    const track = document.getElementById('depoimentosTrack');
    if (!track) return;
    if (window.innerWidth >= 768) {
      const carousel = track.closest('.carousel');
      const carouselWidth = carousel?.offsetWidth || window.innerWidth;
      const cardWidth = 620;
      const padding = Math.max(20, (carouselWidth - cardWidth) / 2);
      track.style.paddingInline = `${Math.min(padding, 120)}px`;
    } else {
      track.style.paddingInline = ''; // mobile: CSS scroll-snap cuida do layout
    }
  }
  window.addEventListener('resize', updatePadding);
  updatePadding();
})();

/* ── RE-INIT LUCIDE APÓS RENDER ─────────────────────────── */
/* Garante que quaisquer ícones adicionados dinamicamente sejam inicializados. */
window.addEventListener('load', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
