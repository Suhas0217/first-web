export function initTrailAnimation(container) {
  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const xPos = event.clientX - rect.left;
    const yPos = event.clientY - rect.top;

    const span = document.createElement('span');
    span.style.left = xPos + 'px';
    span.style.top = yPos + 'px';

    const size = Math.random() * 80 + 20;
    span.style.width = size + 'px';
    span.style.height = size + 'px';

    span.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;

    container.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 1500);
  });
}
