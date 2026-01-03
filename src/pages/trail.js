import '../styles/trail.css';
import { initTrailAnimation } from '../scripts/trail.js';

export class TrailPage {
  constructor(navigate) {
    this.navigate = navigate;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'trail-page';

    const header = document.createElement('header');
    header.className = 'trail-header';
    header.innerHTML = `
      <h2>Trail Animation</h2>
      <p class="subtitle">Move your mouse around the screen</p>
    `;

    const trailContainer = document.createElement('div');
    trailContainer.className = 'trail-container';

    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Back Home
    `;
    backBtn.addEventListener('click', () => this.navigate('/'));

    container.appendChild(header);
    container.appendChild(trailContainer);
    container.appendChild(backBtn);

    setTimeout(() => {
      initTrailAnimation(trailContainer);
    }, 0);

    return container;
  }
}
