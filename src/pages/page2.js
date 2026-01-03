import '../styles/page2.css';

export class Page2 {
  constructor(navigate) {
    this.navigate = navigate;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'page2';

    const header = document.createElement('header');
    header.className = 'page2-header';
    header.innerHTML = `
      <h2>Page Two</h2>
      <p class="subtitle">Coming Soon - More Content Here</p>
    `;

    const content = document.createElement('section');
    content.className = 'page2-content';
    content.innerHTML = `
      <div class="content-box">
        <h3>Features Coming Soon</h3>
        <ul class="feature-list">
          <li>Interactive animations</li>
          <li>Dynamic content</li>
          <li>Modern design patterns</li>
          <li>Responsive layouts</li>
        </ul>
      </div>
    `;

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
    container.appendChild(content);
    container.appendChild(backBtn);

    return container;
  }
}
