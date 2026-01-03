import '../styles/cube.css';

export class CubePage {
  constructor(navigate) {
    this.navigate = navigate;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'cube-page';

    const header = document.createElement('header');
    header.className = 'cube-header';
    header.innerHTML = `
      <h2>3D Rotating Cube</h2>
      <p class="subtitle">Hover to pause animation</p>
    `;

    const cubeContainer = document.createElement('div');
    cubeContainer.className = 'cube-container';
    cubeContainer.innerHTML = `
      <div class="cube">
        <div class="face front">Front</div>
        <div class="face back">Back</div>
        <div class="face right">Right</div>
        <div class="face left">Left</div>
        <div class="face top">Top</div>
        <div class="face bottom">Bottom</div>
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
    container.appendChild(cubeContainer);
    container.appendChild(backBtn);

    return container;
  }
}
