/**
 * SHUBHAM PANDEY — PORTFOLIO TYPESCRIPT CONTROLLER
 * Full-Stack Developer & AI/ML Engineer
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initHeroEchoStack();
  initProjectFilters();
  initSmoothScrollSpy();
});

/* --------------------------------------------------------------------------
   1. Minimalist Follow Cursor
   -------------------------------------------------------------------------- */
function initCustomCursor(): void {
  const cursor = document.getElementById('customCursor');
  const dot = document.getElementById('cursorDot');
  if (!(cursor instanceof HTMLElement) || !(dot instanceof HTMLElement)) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (dot) {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
  });

  function renderCursor(): void {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    if (cursor) {
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  const interactives = document.querySelectorAll<HTMLElement>(
    'a, button, input, select, textarea, .project-card, .skill-category-card, .timeline-item, .cert-card, .edu-card, .echo-stack-container, .quick-card, .resume-toggle-btn, .subtab-btn, .what-i-do-card, .what-i-do-badge'
  );
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor?.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor?.classList.remove('active'));
  });
}

/* --------------------------------------------------------------------------
   2. Hero Typographic Echo Stack
   -------------------------------------------------------------------------- */
function initHeroEchoStack(): void {
  const heroContainer = document.getElementById('echoStackHero');
  const wordButtons = document.querySelectorAll<HTMLButtonElement>('.word-btn');

  if (!heroContainer) return;

  // Word Switcher
  wordButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetWord = btn.getAttribute('data-word');
      if (!targetWord) return;

      wordButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      if (heroContainer) {
        updateEchoText(heroContainer, targetWord);
      }
      showToast(`STACK FOCUS: [${targetWord}]`);
    });
  });

  // Mouse Parallax on Hero Echo Stack
  heroContainer.addEventListener('mousemove', (e: MouseEvent) => {
    if (!heroContainer) return;
    const rect = heroContainer.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

    const layer1 = heroContainer.querySelector<HTMLElement>('.layer-1');
    const layer2 = heroContainer.querySelector<HTMLElement>('.layer-2');
    const layer3 = heroContainer.querySelector<HTMLElement>('.layer-3');
    const layer4 = heroContainer.querySelector<HTMLElement>('.layer-4');

    if (layer1) layer1.style.transform = `translate(calc(-0.04em + ${xRatio * -10}px), calc(-0.04em + ${yRatio * -10}px))`;
    if (layer2) layer2.style.transform = `translate(calc(-0.08em + ${xRatio * -20}px), calc(-0.08em + ${yRatio * -20}px))`;
    if (layer3) layer3.style.transform = `translate(calc(-0.12em + ${xRatio * -30}px), calc(-0.12em + ${yRatio * -30}px))`;
    if (layer4) layer4.style.transform = `translate(calc(-0.16em + ${xRatio * -40}px), calc(-0.16em + ${yRatio * -40}px))`;
  });

  heroContainer.addEventListener('mouseleave', () => {
    if (!heroContainer) return;
    const layer1 = heroContainer.querySelector<HTMLElement>('.layer-1');
    const layer2 = heroContainer.querySelector<HTMLElement>('.layer-2');
    const layer3 = heroContainer.querySelector<HTMLElement>('.layer-3');
    const layer4 = heroContainer.querySelector<HTMLElement>('.layer-4');

    if (layer1) layer1.style.transform = 'translate(-0.04em, -0.04em)';
    if (layer2) layer2.style.transform = 'translate(-0.08em, -0.08em)';
    if (layer3) layer3.style.transform = 'translate(-0.12em, -0.12em)';
    if (layer4) layer4.style.transform = 'translate(-0.16em, -0.16em)';
  });
}

/**
 * Update typographic echo stack texts
 */
function updateEchoText(container: HTMLElement, text: string = ''): void {
  if (!container) return;
  const layers = container.querySelectorAll<HTMLElement>('.echo-layer');
  layers.forEach((layer) => {
    layer.textContent = text;
  });
}

/* --------------------------------------------------------------------------
   3. Project Filters
   -------------------------------------------------------------------------- */
function initProjectFilters(): void {
  const filterBtns = document.querySelectorAll<HTMLElement>('.filter-btn');
  const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') ?? 'all';

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter || (cat && cat.split(' ').includes(filter))) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });

      showToast(`FILTER APPLIED: [${filter.toUpperCase()}]`);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Smooth Scroll Spy & Header Active Class
   -------------------------------------------------------------------------- */
function initSmoothScrollSpy(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id], footer[id]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Toast Notification Utility
   -------------------------------------------------------------------------- */
let toastTimeout: number | undefined;

/**
 * Display brutalist toast message
 */
export function showToast(msg: string = ''): void {
  const toast = document.getElementById('toastMessage');
  if (!toast) return;

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  toast.textContent = msg;
  toast.classList.add('visible');

  toastTimeout = window.setTimeout(() => {
    toast?.classList.remove('visible');
  }, 2600);
}

