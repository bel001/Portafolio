const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
const themeButton = document.querySelector('.theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function updateThemeButton() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.title = isDark ? 'Activar modo claro' : 'Activar modo oscuro';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#111917' : '#ffffff';
}

themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  try { localStorage.setItem('portfolio-theme', nextTheme); } catch (_) {}
  updateThemeButton();
});

systemTheme.addEventListener('change', (event) => {
  let savedTheme;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) {}
  if (savedTheme !== 'light' && savedTheme !== 'dark') {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
    updateThemeButton();
  }
});

updateThemeButton();

const imageDialog = document.querySelector('.image-dialog');
const dialogImage = imageDialog.querySelector('img');
const dialogTitle = document.querySelector('#image-dialog-title');
const dialogClose = document.querySelector('.image-dialog-close');
let imageTrigger = null;

document.querySelectorAll('.image-expand').forEach((button) => {
  button.addEventListener('click', () => {
    const figure = button.closest('figure');
    const image = figure.querySelector('img');
    if (typeof imageDialog.showModal !== 'function') {
      window.open(image.src, '_blank', 'noopener');
      return;
    }
    imageTrigger = button;
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogTitle.textContent = figure.querySelector('figcaption').textContent;
    imageDialog.showModal();
    dialogClose.focus();
  });
});

dialogClose.addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', (event) => {
  if (event.target === imageDialog) imageDialog.close();
});
imageDialog.addEventListener('close', () => imageTrigger?.focus());

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  menu.classList.toggle('open', !isOpen);
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
