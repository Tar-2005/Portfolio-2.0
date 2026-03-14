/**
 * Tarun Kumar Portfolio — Frontend behavior
 * Staggered reveals, typing effect, scroll spy, mobile menu
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Preloader ---
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      setTimeout(() => preloader.remove(), 400);
    });
  }

  // --- Mobile menu toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('#header');
  if (menuToggle && header) {
    menuToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && !menuToggle.contains(e.target) && header.classList.contains('open')) {
        header.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Scroll-to-top ---
  const scrollTop = document.querySelector('#scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      scrollTop.classList.toggle('visible', window.scrollY > 400);
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // --- Typing effect ---
  const typedEl = document.querySelector('.typed[data-words]');
  if (typedEl) {
    const words = typedEl.dataset.words.split(',').map(s => s.trim());
    let idx = 0;
    let charIdx = 0;
    let deleting = false;

    function tick() {
      const word = words[idx];
      if (deleting) {
        charIdx--;
        typedEl.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % words.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 40);
      } else {
        charIdx++;
        typedEl.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          setTimeout(() => { deleting = true; tick(); }, 1500);
          return;
        }
        setTimeout(tick, 100);
      }
    }
    setTimeout(tick, 800);
  }

  // --- Staggered reveal on scroll (IntersectionObserver) ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // --- Hero staggered reveal (in view on load) ---
  const heroReveals = document.querySelectorAll('.hero-content .reveal');
  if (heroReveals.length) {
    heroReveals.forEach((el, i) => {
      el.style.transitionDelay = `${0.3 + i * 0.12}s`;
    });
    requestAnimationFrame(() => {
      heroReveals.forEach(el => el.classList.add('visible'));
    });
  }

  // --- Nav scroll spy ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sections.forEach(section => spyObserver.observe(section));
  }
});
