import './index.css';
import { distance } from '@platform/geometry';

const d = distance({ x: 0, y: 0 }, { x: 3, y: 4 });

document.body.innerHTML += `
  <p>Distancia entre (0,0) y (3,4): <strong>${d}</strong> (debe ser 5)</p>
  <svg width="300" height="300" viewBox="0 0 300 300" style="border:1px solid #888">
    <line x1="20" y1="20" x2="280" y2="280" stroke="blue" stroke-width="2" />
    <rect x="50" y="50" width="200" height="200" fill="none" stroke="red" stroke-width="2" />
  </svg>
`;