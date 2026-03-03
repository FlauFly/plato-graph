import ForceGraph3D from "3d-force-graph";

import { CSS2DRenderer, CSS2DObject } from 'https://esm.sh/three/examples/jsm/renderers/CSS2DRenderer.js';

const infoCard = document.getElementById('info-card');

const Graph = new ForceGraph3D(document.getElementById('3d-graph'), {
  extraRenderers: [new CSS2DRenderer()]
})
  .jsonUrl('../datasets/articles.json')
  .nodeAutoColorBy('group')
  .nodeThreeObject(node => {
    const nodeEl = document.createElement('div');
    nodeEl.textContent = node.id;
    nodeEl.style.color = node.color;
    nodeEl.className = 'node-label';
    return new CSS2DObject(nodeEl);
  })
  .onNodeClick(node => {
    infoCard.innerHTML = `${node.id} <br>
    <a href="${node.address}">Link</a>`;
  })
  .nodeThreeObjectExtend(true)
;


