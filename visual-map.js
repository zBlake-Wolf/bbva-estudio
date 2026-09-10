// v13 · Mapa visual por figuras. Reutiliza guideTopics sin alterar el contenido de estudio.
(function(){
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function cleanTitle(v){return String(v??'').replace(/^[^\p{L}\p{N}]+/u,'').trim();}
  function plain(v){
    const tmp=document.createElement('div');
    tmp.innerHTML=String(v||'');
    return (tmp.textContent||tmp.innerText||'').trim();
  }

  function boot(){
    const page=document.querySelector('#guia');
    if(!page || typeof guideTopics==='undefined' || !Array.isArray(guideTopics) || !guideTopics.length) return;
    if(page.querySelector('.visual-course')) return;

    const root=document.createElement('div');
    root.className='visual-course';
    root.innerHTML=`
      <section class="visual-course__hero">
        <div>
          <div class="visual-course__eyebrow">Ruta visual · empieza desde cero</div>
          <h1>Aprende banca<br>sin sentir que lees un manual.</h1>
          <p>Elige una figura. Cada tema abre una explicación corta y después sus subtemas. La ruta mezcla conceptos básicos, App BBVA, tu manual de Banca Remota y temas de atención.</p>
        </div>
        <label class="visual-course__search">
          <span>⌕</span>
          <input id="visualTopicSearch" type="search" placeholder="Busca TDC, app, SPEI, fraude…" autocomplete="off" />
        </label>
      </section>
      <div class="visual-course__meta">
        <span><strong id="visualTopicTotal">${guideTopics.length}</strong> temas · toca cualquiera para abrirlo</span>
        <span id="visualSearchStatus">Ruta completa</span>
      </div>
      <section class="topic-geometry-grid" id="topicGeometryGrid" aria-label="Temas de estudio"></section>
      <section class="visual-detail-wrap" id="visualDetailWrap" aria-live="polite"></section>`;

    page.prepend(root);
    const grid=root.querySelector('#topicGeometryGrid');
    const detail=root.querySelector('#visualDetailWrap');
    const input=root.querySelector('#visualTopicSearch');
    const total=root.querySelector('#visualTopicTotal');
    const status=root.querySelector('#visualSearchStatus');
    let current=-1;

    function renderTopics(){
      grid.innerHTML=guideTopics.map((t,i)=>`
        <button class="geo-topic" type="button" data-visual-topic="${i}" data-search="${esc((cleanTitle(t.title)+' '+t.level+' '+t.related.join(' ')).toLowerCase())}">
          <span class="geo-n">${String(i+1).padStart(2,'0')}</span>
          <span><strong>${esc(cleanTitle(t.title))}</strong><small>${esc(t.level)}</small></span>
        </button>`).join('');
    }

    function helperBox(type,label,value){
      if(!value) return '';
      return `<div class="visual-mini ${type}"><b>${label}</b>${esc(value)}</div>`;
    }

    function renderDetail(index,scroll=true){
      current=Math.max(0,Math.min(index,guideTopics.length-1));
      const t=guideTopics[current];
      const memory=t.memory&&t.memory.length?t.memory[0]:'';
      detail.innerHTML=`
        <article class="visual-detail">
          <div class="visual-detail__bar"></div>
          <header class="visual-detail__head">
            <div>
              <div class="visual-detail__kicker">Tema ${current+1} de ${guideTopics.length} · ${esc(t.level)}</div>
              <h2>${esc(cleanTitle(t.title))}</h2>
              <p class="visual-detail__intro">${esc(t.intro)}</p>
            </div>
            <button class="visual-close" type="button" aria-label="Cerrar tema">×</button>
          </header>
          ${memory?`<div class="visual-detail__memory"><b>Idea clave · </b>${esc(memory)}</div>`:''}
          <div class="visual-subtopics">
            ${t.sections.map((s,i)=>`
              <article class="visual-subtopic ${i===0?'open':''}" data-subtopic>
                <button type="button" aria-expanded="${i===0?'true':'false'}">
                  <span>${esc(s.t)}</span><span>${i===0?'−':'+'}</span>
                </button>
                <div class="visual-subtopic__body">
                  ${s.body||''}
                  ${helperBox('example','Ejemplo',s.example)}
                  ${helperBox('client','Cliente podría decir',s.client)}
                  ${helperBox('advisor','Como asesor piensa',s.advisor)}
                  ${helperBox('warning','Ojo',s.warning)}
                </div>
              </article>`).join('')}
          </div>
          <footer class="visual-detail__nav">
            <button class="visual-prev" type="button" ${current===0?'disabled':''}>← Tema anterior</button>
            <button class="visual-next" type="button">${current===guideTopics.length-1?'Volver al inicio':'Siguiente tema →'}</button>
          </footer>
        </article>`;

      detail.classList.add('open');
      localStorage.setItem('bancaGuideIndex',String(current));

      detail.querySelector('.visual-close').onclick=()=>{
        detail.classList.remove('open');
        setTimeout(()=>{detail.innerHTML='';},220);
      };
      detail.querySelectorAll('[data-subtopic] > button').forEach(btn=>{
        btn.onclick=()=>{
          const card=btn.closest('[data-subtopic]');
          const wasOpen=card.classList.contains('open');
          detail.querySelectorAll('[data-subtopic]').forEach(other=>{
            other.classList.remove('open');
            const b=other.querySelector(':scope > button');
            if(b){b.setAttribute('aria-expanded','false');b.lastElementChild.textContent='+';}
          });
          if(!wasOpen){card.classList.add('open');btn.setAttribute('aria-expanded','true');btn.lastElementChild.textContent='−';}
        };
      });
      detail.querySelector('.visual-prev').onclick=()=>{if(current>0) renderDetail(current-1,true);};
      detail.querySelector('.visual-next').onclick=()=>renderDetail(current===guideTopics.length-1?0:current+1,true);

      grid.querySelectorAll('.geo-topic').forEach((b,i)=>b.setAttribute('aria-pressed',i===current?'true':'false'));
      if(scroll) requestAnimationFrame(()=>detail.scrollIntoView({behavior:'smooth',block:'start'}));
    }

    renderTopics();
    grid.addEventListener('click',e=>{
      const b=e.target.closest('[data-visual-topic]');
      if(!b) return;
      renderDetail(Number(b.dataset.visualTopic),true);
    });

    input.addEventListener('input',()=>{
      const q=input.value.trim().toLowerCase();
      let visible=0;
      grid.querySelectorAll('.geo-topic').forEach(b=>{
        const show=!q||b.dataset.search.includes(q);
        b.classList.toggle('is-hidden',!show);
        if(show) visible++;
      });
      total.textContent=visible;
      status.textContent=q?`${visible} coincidencia${visible===1?'':'s'}`:'Ruta completa';
      if(q && current>=0){
        const active=grid.querySelector(`[data-visual-topic="${current}"]`);
        if(active?.classList.contains('is-hidden')) detail.classList.remove('open');
      }
    });

    // Abrir el último tema solo si el usuario ya tenía avance; si no, dejamos el mapa limpio.
    const saved=Number(localStorage.getItem('bancaGuideIndex'));
    if(Number.isInteger(saved)&&saved>0&&saved<guideTopics.length){
      const b=grid.querySelector(`[data-visual-topic="${saved}"]`);
      b?.setAttribute('aria-current','step');
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
