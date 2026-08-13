(() => {
  'use strict';
  const body = document.body;
  const root = document.documentElement;
  const menuButton = document.querySelector('#menu-button');
  const menu = document.querySelector('#menu-principal');
  const fontDecrease = document.querySelector('#font-decrease');
  const fontReset = document.querySelector('#font-reset');
  const fontIncrease = document.querySelector('#font-increase');
  const contrastToggle = document.querySelector('#contrast-toggle');
  const presentationToggle = document.querySelector('#presentation-toggle');
  const accessibilityToggle = document.querySelector('#accessibility-toggle');
  const accessibilityTools = document.querySelector('#accessibility-tools');
  const presentationStatus = document.querySelector('#presentation-status');
  const presentationCounter = document.querySelector('#presentation-counter');
  const slides = [...document.querySelectorAll('.slide-section')];
  const teamPhoto = document.querySelector('.team-photo img');
  const photoNote = document.querySelector('.photo-note');
  let fontSize = Number(localStorage.getItem('ihc-font-size')) || 16;
  let currentSlide = 0;

  if (teamPhoto) {
    teamPhoto.alt = 'Fotografia do trio formado por Carlos Gabriel de Morais Leal, Eric Freitas Sampaio e Larissa dos Passos Costa Ferreira em sala de aula.';
  }
  photoNote?.remove();

  const applyFont = () => {
    fontSize = Math.min(21, Math.max(13, fontSize));
    root.style.fontSize = `${fontSize}px`;
    localStorage.setItem('ihc-font-size', String(fontSize));
  };
  applyFont();

  fontDecrease?.addEventListener('click', () => { fontSize -= 1; applyFont(); });
  fontReset?.addEventListener('click', () => { fontSize = 16; applyFont(); });
  fontIncrease?.addEventListener('click', () => { fontSize += 1; applyFont(); });

  const setContrast = (enabled) => {
    body.classList.toggle('high-contrast', enabled);
    contrastToggle?.setAttribute('aria-pressed', String(enabled));
    localStorage.setItem('ihc-high-contrast', String(enabled));
  };
  setContrast(localStorage.getItem('ihc-high-contrast') === 'true');
  contrastToggle?.addEventListener('click', () => setContrast(!body.classList.contains('high-contrast')));

  menuButton?.addEventListener('click', () => {
    const open = menu?.classList.toggle('is-open') ?? false;
    menuButton.setAttribute('aria-expanded', String(open));
  });
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  accessibilityToggle?.addEventListener('click', () => {
    const expanded = accessibilityToggle.getAttribute('aria-expanded') === 'true';
    accessibilityToggle.setAttribute('aria-expanded', String(!expanded));
    if (accessibilityTools) accessibilityTools.hidden = expanded;
  });

  const renderSlide = () => {
    slides.forEach((slide, index) => slide.classList.toggle('is-active', index === currentSlide));
    if (presentationCounter) presentationCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
    slides[currentSlide]?.querySelector('h1,h2')?.focus?.({ preventScroll: true });
  };

  const exitPresentation = async () => {
    body.classList.remove('presentation-mode');
    slides.forEach((slide) => slide.classList.remove('is-active'));
    presentationToggle?.setAttribute('aria-pressed', 'false');
    if (presentationStatus) presentationStatus.hidden = true;
    if (document.fullscreenElement) {
      try { await document.exitFullscreen(); } catch (_) {}
    }
  };

  const enterPresentation = async () => {
    body.classList.add('presentation-mode');
    currentSlide = Math.max(0, slides.findIndex((slide) => {
      const rect = slide.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    }));
    presentationToggle?.setAttribute('aria-pressed', 'true');
    if (presentationStatus) presentationStatus.hidden = false;
    renderSlide();
    if (document.documentElement.requestFullscreen) {
      try { await document.documentElement.requestFullscreen(); } catch (_) {}
    }
  };

  presentationToggle?.addEventListener('click', () => {
    if (body.classList.contains('presentation-mode')) exitPresentation();
    else enterPresentation();
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && body.classList.contains('presentation-mode')) exitPresentation();
  });

  document.addEventListener('keydown', (event) => {
    if (!body.classList.contains('presentation-mode')) return;
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault(); currentSlide = Math.min(slides.length - 1, currentSlide + 1); renderSlide();
    } else if (['ArrowLeft', 'PageUp'].includes(event.key)) {
      event.preventDefault(); currentSlide = Math.max(0, currentSlide - 1); renderSlide();
    } else if (event.key === 'Home') {
      event.preventDefault(); currentSlide = 0; renderSlide();
    } else if (event.key === 'End') {
      event.preventDefault(); currentSlide = slides.length - 1; renderSlide();
    } else if (event.key === 'Escape') {
      exitPresentation();
    }
  });
})();
