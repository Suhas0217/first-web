import '../styles/home.css';

export class HomePage {
  constructor(navigate) {
    this.navigate = navigate;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'home';

    const header = document.createElement('header');
    header.className = 'home-header';
    header.innerHTML = `
      <div class="header-content">
        <h1 class="title">Animated Portfolio</h1>
        <div class="decorative-lines">
          <div class="line line-orange"></div>
          <div class="line line-orange"></div>
          <div class="line line-purple"></div>
          <div class="line line-purple"></div>
        </div>
        <p class="published-date">Published on December 12, 2025</p>
      </div>
    `;

    const navSection = document.createElement('section');
    navSection.className = 'nav-section';
    navSection.innerHTML = `
      <h2 class="nav-title">Explore Pages</h2>
      <div class="button-grid">
        <button class="nav-button nav-button-blue" data-page="/page2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <span>Page 2</span>
        </button>

        <button class="nav-button nav-button-gradient" data-page="/cube">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
            <path d="M2 7l10 5 10-5"/>
            <path d="M12 12v10"/>
          </svg>
          <span>3D Cube</span>
        </button>

        <button class="nav-button nav-button-neon" data-page="/trail">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          <span>Trail Effect</span>
        </button>
      </div>
    `;

    const buttons = navSection.querySelectorAll('[data-page]');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigate(btn.dataset.page);
      });
    });

    container.appendChild(header);
    container.appendChild(navSection);

    return container;
  }
}
