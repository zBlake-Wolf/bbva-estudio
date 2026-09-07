// Capa de experiencia enfocada: ruta compacta por puntos + selector discreto.
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
        <div class="topic-progress-head">
          <div class="topic-progress-copy">
            <span class="topic-progress-kicker">Ruta de estudio</span>
            <strong class="topic-current-title" id="minimalCurrentTitle"></strong>
          </div>
          <div class="topic-progress-actions">
            <span class="topic-count" id="minimalTopicCount"></span>
            <select class="topic-compact-select" id="minimalTopicSelect" aria-label="Elegir tema"></select>
          </div>
        </div>
        <div class="topic-track-shell" aria-label="Progreso por temas">
          <div class="topic-track" id="minimalTopicTrack"></div>
        </div>`;
      main.insertBefore(wrap,lesson);
    }

    const select=wrap.querySelector('#minimalTopicSelect');
    const count=wrap.querySelector('#minimalTopicCount');
    const title=wrap.querySelector('#minimalCurrentTitle');
    const track=wrap.querySelector('#minimalTopicTrack');
    const shell=wrap.querySelector('.topic-track-shell');
    const cleanTitle=t=>String(t.title).replace(/^[^\p{L}\p{N}]+/u,'').trim();

    select.innerHTML=guideTopics.map((t,i)=>`<option value="${i}">${i+1}. ${cleanTitle(t)}</option>`).join('');
    track.innerHTML=guideTopics.map((t,i)=>`<button class="topic-dot" type="button" data-topic-index="${i}" title="${i+1}. ${cleanTitle(t)}" aria-label="Tema ${i+1}: ${cleanTitle(t)}"></button>`).join('');

    track.addEventListener('click',e=>{
      const dot=e.target.closest('[data-topic-index]');
      if(!dot) return;
      const index=Number(dot.dataset.topicIndex);
      if(typeof showGuideTopic==='function') showGuideTopic(index,false);
      requestAnimationFrame(()=>sync(true));
    });

    select.addEventListener('change',()=>{
      const index=Number(select.value);
      if(typeof showGuideTopic==='function') showGuideTopic(index,false);
      requestAnimationFrame(()=>sync(true));
    });

    function sync(scrollDot=false){
      const current=(typeof guideIndex==='number'&&guideIndex>=0)?guideIndex:0;
      select.value=String(current);
      count.textContent=`${current+1} / ${guideTopics.length}`;
      title.textContent=cleanTitle(guideTopics[current]);

      const progress=guideTopics.length>1?(current/(guideTopics.length-1))*100:100;
      track.style.setProperty('--progress',`${progress}%`);

      const dots=[...track.querySelectorAll('.topic-dot')];
      dots.forEach((dot,i)=>{
        dot.classList.toggle('done',i<current);
        dot.classList.toggle('active',i===current);
        dot.classList.toggle('upcoming',i>current);
        dot.setAttribute('aria-current',i===current?'step':'false');
      });

      const active=dots[current];
      if(scrollDot&&active&&shell){
        const target=active.offsetLeft-(shell.clientWidth/2)+(active.offsetWidth/2);
        shell.scrollTo({left:Math.max(0,target),behavior:'smooth'});
      }

      const details=[...lesson.querySelectorAll('details.lesson-section')];
      details.forEach(d=>d.setAttribute('name','lesson-focus'));
    }

    lesson.addEventListener('toggle',e=>{
      const d=e.target;
      if(!(d instanceof HTMLDetailsElement)||!d.classList.contains('lesson-section')||!d.open) return;
      lesson.querySelectorAll('details.lesson-section').forEach(other=>{if(other!==d) other.open=false;});
    },true);

    sync(false);
    const observer=new MutationObserver(()=>requestAnimationFrame(()=>sync(false)));
    observer.observe(lesson,{childList:true,subtree:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup);
  else setup();
})();
