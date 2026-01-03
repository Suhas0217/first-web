import { HomePage } from '../pages/home.js';
import { Page2 } from '../pages/page2.js';
import { CubePage } from '../pages/cube.js';
import { TrailPage } from '../pages/trail.js';

const pages = {
  '/': HomePage,
  '/page2': Page2,
  '/cube': CubePage,
  '/trail': TrailPage,
};

export function initRouter(app) {
  function navigate(path) {
    window.history.pushState(null, '', path);
    renderPage(path);
  }

  function renderPage(path) {
    const Page = pages[path] || HomePage;
    app.innerHTML = '';
    const page = new Page(navigate);
    app.appendChild(page.render());
  }

  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });

  window.navigate = navigate;

  const initialPath = window.location.pathname;
  renderPage(initialPath === '/' ? '/' : initialPath);
}
