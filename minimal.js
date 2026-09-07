// Complemento visual minimalista. Mantiene el contenido de guide.js y reduce la navegación a un selector.
(function(){
  function setup(){
    const main=document.querySelector('.guide-main');
    const lesson=document.querySelector('#guideLesson');
    if(!main||!lesson||typeof guideTopics==='undefined') return;

    let wrap=document.querySelector('.minimal-topic-select');
    if(!wrap){
      wrap=document.createElement('div');
      wrap.className='minimal-topic-select';
      wrap.innerHTML='<label for="minimalTopicSelect">Tema</label><select id="minimalTopicSelect" aria-label="Cambiar tema"></select>';
      main.insertBefore(wrap,lesson);
    }

    const select=wrap.querySelector('select');
    select.innerHTML=guideTopics.map((t,i)=>`<option value="${i}">${i+1}. ${String(t.title).replace(/^[^\p{L}\p{N}]+/u,'')}</option>`).join('');
    select.value=String(typeof guideIndex==='number'?guideIndex:0);
    select.onchange=()=>{
      if(typeof showGuideTopic==='function') showGuideTopic(Number(select.value),false);
    };

    const makeExclusive=()=>{
      document.querySelectorAll('#guideLesson details.lesson-section').forEach(d=>{
        d.setAttribute('name','lesson-focus');
      });
      if(typeof guideIndex==='number') select.value=String(guideIndex);
    };
    makeExclusive();

    const observer=new MutationObserver(makeExclusive);
    observer.observe(lesson,{childList:true,subtree:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup);
  else setup();
})();
