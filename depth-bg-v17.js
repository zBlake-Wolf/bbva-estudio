// v17 · Escena geométrica de fondo con varias capas de profundidad.
(function(){
  const TYPES=['circle','triangle','star','pill','diamond','ring','hex','cross','arc','square'];
  const COLORS=['red','blue','yellow','green','purple','orange','cyan','pink'];

  function makeScene(){
    if(document.querySelector('.depth-scene')) return;

    const scene=document.createElement('div');
    scene.className='depth-scene';
    scene.setAttribute('aria-hidden','true');

    // Distribución determinista: muchas formas, más densas en orillas y con distintos planos.
    const anchors=[
      [2,9],[9,18],[18,7],[29,16],[41,8],[54,18],[67,7],[79,17],[91,8],[97,25],
      [4,34],[13,42],[24,31],[37,43],[49,32],[62,41],[75,30],[87,43],[96,54],
      [2,59],[11,69],[21,56],[33,67],[45,55],[58,69],[70,57],[82,67],[93,59],
      [5,82],[16,91],[28,80],[40,92],[52,81],[65,91],[77,80],[89,92],[97,78],
      [1,23],[99,12],[1,47],[99,70],[2,95],[98,94],
      [7,52],[17,25],[84,52],[72,88],[31,4],[59,4],[43,96],[68,24]
    ];

    anchors.forEach(([x,y],i)=>{
      const type=TYPES[(i*3+2)%TYPES.length];
      const color=COLORS[(i*5+1)%COLORS.length];
      const layer=(i%4)+1;
      const edge=Math.min(x,100-x);
      const base=layer===1?86:layer===2?72:layer===3?58:46;
      const size=Math.round(base + ((i*17)%42) + (edge<8?24:0));
      const rot=((i*29)%70)-35;
      const drift=5+(i%6)*2;
      const delay=-((i*0.73)%9).toFixed(2);

      const shape=document.createElement('span');
      shape.className=`depth-shape ${type} depth-${color} layer-${layer}`;
      shape.dataset.layer=String(layer);
      shape.style.setProperty('--x',`${x}%`);
      shape.style.setProperty('--y',`${y}%`);
      shape.style.setProperty('--size',`${size}px`);
      shape.style.setProperty('--r',`${rot}deg`);
      shape.style.setProperty('--drift',`${drift}px`);
      shape.style.setProperty('--shift-x','0px');
      shape.style.setProperty('--shift-y','0px');
      shape.style.animationDelay=`${delay}s`;
      scene.appendChild(shape);
    });

    document.body.appendChild(scene);

    // Parallax muy leve: las figuras cercanas reaccionan más y las lejanas casi no se mueven.
    const shapes=[...scene.querySelectorAll('.depth-shape')];
    let pointerX=0,pointerY=0,raf=0;
    function paint(){
      raf=0;
      shapes.forEach(shape=>{
        const layer=Number(shape.dataset.layer)||4;
        const factor=[0,10,6,3,1.5][layer];
        shape.style.setProperty('--shift-x',`${(pointerX*factor).toFixed(2)}px`);
        shape.style.setProperty('--shift-y',`${(pointerY*factor).toFixed(2)}px`);
      });
    }
    window.addEventListener('pointermove',e=>{
      pointerX=(e.clientX/window.innerWidth)-.5;
      pointerY=(e.clientY/window.innerHeight)-.5;
      if(!raf) raf=requestAnimationFrame(paint);
    },{passive:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',makeScene,{once:true});
  else makeScene();
})();
