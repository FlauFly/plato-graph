import ForceGraph3D from "3d-force-graph";

import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/Addons.js";

import SpriteText from "three-spritetext";

const infoCard = document.getElementById('info-card');

const Graph = new ForceGraph3D(document.getElementById('3d-graph'))
  .jsonUrl('../datasets/articles.json')
  .nodeColor(node => '#ee4fc5')
  .nodeThreeObject(node => {
    const sprite = new SpriteText(node.id);
    sprite.material.depthWrite = false;
    sprite.color = '#fff';
    sprite.textHeight = 8;
    sprite.center.y = -0.6;
    return sprite;
  })
  .onNodeClick(node => {
    infoCard.innerHTML = `
    <div>${node.id}</div>
    <a href="${node.address}">Link</a>`;
  })
  .nodeThreeObjectExtend(true);

  Graph.d3Force('charge').strength(-120);


