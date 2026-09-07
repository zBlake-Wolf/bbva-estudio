const searchInput = document.querySelector('#searchInput');
const clearSearch = document.querySelector('#clearSearch');
const topicCards = [...document.querySelectorAll('.topic-card')];
const sideLinks = [...document.querySelectorAll('.side-link')];
const resultText = document.querySelector('#resultText');

function normalize(value = '') {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function applyFilter() {
  const query = normalize(searchInput.value.trim());
  let visible = 0;

  topicCards.forEach((card) => {
    const haystack = normalize(card.innerText + ' ' + (card.dataset.keywords || ''));
    const show = !query || haystack.includes(query);
    card.hidden = !show;
    if (show) visible += 1;
  });

  sideLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute('href'));
    link.classList.toggle('filtered-out', Boolean(target?.hidden));
  });

  if (!query) {
    resultText.textContent = 'Explora los temas o usa la búsqueda para encontrar algo rápido.';
  } else if (visible === 0) {
    resultText.textContent = `No encontré coincidencias para “${searchInput.value.trim()}”.`;
  } else {
    resultText.textContent = `${visible} tema${visible === 1 ? '' : 's'} coincide${visible === 1 ? '' : 'n'} con “${searchInput.value.trim()}”.`;
  }
}

searchInput?.addEventListener('input', applyFilter);
clearSearch?.addEventListener('click', () => {
  searchInput.value = '';
  applyFilter();
  searchInput.focus();
});

sideLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sideLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

const observer = new IntersectionObserver((entries) => {
  const activeEntry = entries
    .filter((entry) => entry.isIntersecting && !entry.target.hidden)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!activeEntry) return;
  sideLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${activeEntry.target.id}`);
  });
}, {
  rootMargin: '-28% 0px -60% 0px',
  threshold: [0.05, 0.2, 0.5]
});

topicCards.forEach((card) => observer.observe(card));

const mobileMenuButton = document.querySelector('#mobileMenuButton');
const sidePanel = document.querySelector('#sidePanel');
mobileMenuButton?.addEventListener('click', () => {
  const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
  mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
  sidePanel.classList.toggle('mobile-open', !expanded);
});

sideLinks.forEach((link) => link.addEventListener('click', () => {
  sidePanel.classList.remove('mobile-open');
  mobileMenuButton?.setAttribute('aria-expanded', 'false');
}));

applyFilter();
