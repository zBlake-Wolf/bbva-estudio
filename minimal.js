// Capa de experiencia enfocada: mantiene el contenido y distribuye mejor la navegación.
(function(){
  function setup(){
    const main=document.querySelector('.guide-main');
    const lesson=document.querySelector('#guideLesson');
    if(!main||!lesson||typeof guideTopics==='undefined') return;

    let wrap=document.querySelector('.minimal-topic-select');
    if(!wrap){
      wrap=document.createElement('div');
      wrap.className='minimal-topic-select';
      wrap.innerHTML=`
        <div class="topic-select-head">
          <span class="topic-select-title">Ruta de estudio</span>
          <span class="topic-count" id="minimalTopicCount">Tema 1 de ${guideTopics.length}</span>
        </div>
        <label for="minimalTopicSelect">Tema</label>
        <select id="minimalTopicSelect" aria-label="Cambiar tema"></select>
        <span class="topic-hint">Abre un bloque, léelo y sigue al siguiente.</span>`;
      main.insertBefore(wrap,lesson);
    }

    const select=wrap.querySelector('select');
    const count=wrap.querySelector('#minimalTopicCount');

    const cleanTitle=t=>String(t.title).replace(/^[^\p{L}\p{N}]+/u,'');
    select.innerHTML=guideTopics.map((t,i)=>`<option value="${i}">${i+1}. ${cleanTitle(t)}</option>`).join('');

    function sync(){
      const current=(typeof guideIndex==='number'&&guideIndex>=0)?guideIndex:0;
      select.value=String(current);
      if(count) count.textContent=`Tema ${current+1} de ${guideTopics.length}`;

      const details=[...lesson.querySelectorAll('details.lesson-section')];
      details.forEach(d=>d.setAttribute('name','lesson-focus'));
      details.forEach(d=>{
        d.addEventListener('toggle',()=>{
          if(!d.open) return;
          details.forEach(other=>{ if(other!==d) other.open=false; });
        },{once:false});
      });
    }

    select.onchange=()=>{
      if(typeof showGuideTopic==='function') showGuideTopic(Number(select.value),false);
      requestAnimationFrame(sync);
    };

    sync();
    const observer=new MutationObserver(()=>requestAnimationFrame(sync));
    observer.observe(lesson,{childList:true,subtree:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup);
  else setup();
})();
