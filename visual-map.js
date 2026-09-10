// v16 · Buscador/selector de temas + conceptos en escalera. Reutiliza guideTopics sin tocar el contenido.
(function(){
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function plain(v){
    const tmp=document.createElement('div');
    tmp.innerHTML=String(v||'');
    return (tmp.textContent||tmp.innerText||'').replace(/\s+/g,' ').trim();
  }
  function cleanSectionTitle(v){return String(v??'').replace(/^\s*\d+\.\s*/,'').trim();}
  function blockNumber(level){
    const m=String(level||'').match(/Bloque\s+(\d+)/i);
    return m?Number(m[1]):999;
  }

  const themeNames={
    1:'Conceptos básicos',
    2:'Cuenta y débito',
    3:'Identificadores',
    4:'Tarjeta de crédito',
    5:'Transferencias y servicios',
    6:'App BBVA',
    7:'Aclaraciones y seguridad',
    8:'Otros productos',
    9:'Certificación',
    10:'Llamada completa'
  };
  const themeDescriptions={
    1:'Empieza por las piezas más simples: banco, cliente, producto, cuenta, tarjeta y lo que el cliente ve en la app.',
    2:'Entiende cómo se mueve el dinero en una cuenta y cómo funciona una tarjeta de débito.',
    3:'Separa los números que más se confunden: cliente, contrato, cuenta, tarjeta, CLABE y BIN.',
    4:'Aprende TDC desde cero: línea de crédito, corte, pagos, PPNGI, intereses y costos.',
    5:'Mover dinero y pagar: transferencias, SPEI, CEP, servicios, domiciliación y cargos recurrentes.',
    6:'Funciones que el cliente usa directamente en la App BBVA y los datos de seguridad asociados.',
    7:'Cómo leer movimientos, sondear, autenticar y distinguir una restricción de un posible fraude.',
    8:'Cheques, transferencias internacionales y portabilidad de nómina sin aprender todo de golpe.',
    9:'Temas de certificación y puntos que deben confirmarse en el CUC vigente.',
    10:'Junta todo en una sola secuencia mental para atender una llamada real.'
  };
  const colors=['#ff3026','#155eef','#ff5c16','#ffc400','#08a84f','#7b2cff','#00b7df','#ef2f8f','#73b500','#24458f'];

  function helperBox(type,label,value){
    if(!value) return '';
    return `<div class="v15-mini ${type}"><b>${label}</b>${esc(value)}</div>`;
  }

  function boot(){
    const page=document.querySelector('#guia');
    if(!page || typeof guideTopics==='undefined' || !Array.isArray(guideTopics) || !guideTopics.length) return;

    page.querySelectorAll('.visual-course-v15').forEach(n=>n.remove());

    const grouped=new Map();
    guideTopics.forEach((topic,topicIndex)=>{
      const n=blockNumber(topic.level);
      if(!grouped.has(n)) grouped.set(n,[]);
      grouped.get(n).push({topic,topicIndex});
    });

    const themes=[...grouped.entries()]
      .sort((a,b)=>a[0]-b[0])
      .map(([number,items],themeIndex)=>{
        const concepts=[];
        items.forEach(({topic,topicIndex})=>{
          (topic.sections||[]).forEach((section,sectionIndex)=>{
            const searchText=[
              themeNames[number]||'',topic.title,topic.level,topic.intro,
              section.t,section.body,section.example,section.client,section.advisor,section.warning,
              ...(topic.related||[])
            ].map(plain).join(' ').toLowerCase();
            concepts.push({topic,topicIndex,section,sectionIndex,searchText});
          });
        });
        return {
          number,
          title:themeNames[number]||`Bloque ${number}`,
          description:themeDescriptions[number]||plain(items[0]?.topic?.intro||''),
          color:colors[themeIndex%colors.length],
          concepts
        };
      });

    const root=document.createElement('div');
    root.className='visual-course-v15';
    root.innerHTML=`
      <section class="v15-top">
        <label class="v15-search" for="v15Search">
          <span>⌕</span>
          <input id="v15Search" type="search" placeholder="Busca un tema o concepto…" autocomplete="off" aria-haspopup="listbox" aria-expanded="false" />
        </label>
        <div class="v16-theme-menu" id="v16ThemeMenu" role="listbox" aria-label="Temas de estudio">
          <div class="v16-theme-menu__title">Elige un tema</div>
          <div class="v16-theme-list" id="v16ThemeList"></div>
        </div>
      </section>
      <section class="v15-stage" id="v15Stage" aria-live="polite">
        <div class="v15-theme-title-wrap">
          <div class="v15-theme-title" id="v15ThemeTitle"></div>
          <p class="v15-theme-subtitle" id="v15ThemeSubtitle"></p>
          <div class="v15-search-status" id="v15SearchStatus"></div>
        </div>
        <div class="v15-stair" id="v15Stair"></div>
      </section>`;
    page.prepend(root);

    const stage=root.querySelector('#v15Stage');
    const title=root.querySelector('#v15ThemeTitle');
    const subtitle=root.querySelector('#v15ThemeSubtitle');
    const stair=root.querySelector('#v15Stair');
    const input=root.querySelector('#v15Search');
    const status=root.querySelector('#v15SearchStatus');
    const menu=root.querySelector('#v16ThemeMenu');
    const themeList=root.querySelector('#v16ThemeList');

    let currentTheme=0;
    let query='';

    function themeMatches(theme){
      if(!query) return theme.concepts.length;
      const q=query.toLowerCase();
      const direct=(theme.title+' '+theme.description).toLowerCase().includes(q);
      if(direct) return theme.concepts.length;
      return theme.concepts.filter(c=>c.searchText.includes(q)).length;
    }

    function openMenu(){
      menu.classList.add('open');
      input.setAttribute('aria-expanded','true');
    }
    function closeMenu(){
      menu.classList.remove('open');
      input.setAttribute('aria-expanded','false');
    }

    function renderMenu(){
      const available=themes.map((theme,i)=>({theme,i,count:themeMatches(theme)})).filter(x=>!query||x.count>0);
      themeList.innerHTML=available.length?available.map(({theme,i,count})=>`
        <button class="v16-theme-option ${i===currentTheme?'active':''}" type="button" role="option" aria-selected="${i===currentTheme?'true':'false'}" data-theme-index="${i}" style="--theme:${theme.color}">
          <span class="v16-theme-option__dot"></span>
          <span><strong>Tema ${i+1} · ${esc(theme.title)}</strong><small>${esc(theme.description)}</small></span>
          <span class="v16-theme-option__count">${query?`${count} coincidencia${count===1?'':'s'}`:`${theme.concepts.length} conceptos`}</span>
        </button>`).join(''):`<div class="v16-menu-empty">No encontré un tema con esa palabra.</div>`;
    }

    function cardHTML(item,index){
      const s=item.section;
      const t=item.topic;
      const titleText=cleanSectionTitle(s.t);
      return `
        <article class="v15-concept ${index%2===0?'right':'left'}" data-v15-concept>
          <button class="v15-concept__button" type="button" aria-expanded="false">
            <span>
              <span class="v15-concept__meta">${esc(t.title)}</span>
              <strong>${esc(titleText)}</strong>
            </span>
            <span class="v15-concept__plus">+</span>
          </button>
          <div class="v15-concept__body">
            <div class="v15-concept__body-inner">
              <div class="v15-concept__content">
                <span class="v15-parent-note">${esc(t.level)}</span>
                ${s.body||''}
                <div class="v15-mini-grid">
                  ${helperBox('example','Ejemplo',s.example)}
                  ${helperBox('client','Cliente podría decir',s.client)}
                  ${helperBox('advisor','Como asesor piensa',s.advisor)}
                  ${helperBox('warning','Ojo',s.warning)}
                </div>
              </div>
            </div>
          </div>
        </article>`;
    }

    function matchingConcepts(theme){
      if(!query) return theme.concepts;
      const direct=(theme.title+' '+theme.description).toLowerCase().includes(query);
      return direct?theme.concepts:theme.concepts.filter(c=>c.searchText.includes(query));
    }

    function renderStage(scroll=false){
      const theme=themes[currentTheme];
      const matches=matchingConcepts(theme);
      stage.dataset.themeIndex=String(currentTheme);
      stage.style.setProperty('--theme',theme.color);
      title.innerHTML=`<small>Tema ${currentTheme+1}</small>${esc(theme.title)}`;
      subtitle.textContent=theme.description;
      status.textContent=query
        ? `${matches.length} coincidencia${matches.length===1?'':'s'} en este tema`
        : `${theme.concepts.length} conceptos · toca una figura para abrirla`;
      stair.innerHTML=matches.length
        ? matches.map(cardHTML).join('')
        : `<div class="v15-empty">No encontré ese concepto dentro de este tema.</div>`;
      renderMenu();
      if(scroll) requestAnimationFrame(()=>stage.scrollIntoView({behavior:'smooth',block:'start'}));
    }

    themeList.addEventListener('click',e=>{
      const btn=e.target.closest('[data-theme-index]');
      if(!btn) return;
      currentTheme=Number(btn.dataset.themeIndex);
      query='';
      input.value='';
      closeMenu();
      renderStage(true);
    });

    stair.addEventListener('click',e=>{
      const btn=e.target.closest('.v15-concept__button');
      if(!btn) return;
      const card=btn.closest('[data-v15-concept]');
      const willOpen=!card.classList.contains('open');
      stair.querySelectorAll('[data-v15-concept]').forEach(other=>{
        other.classList.remove('open');
        const ob=other.querySelector('.v15-concept__button');
        const op=other.querySelector('.v15-concept__plus');
        if(ob) ob.setAttribute('aria-expanded','false');
        if(op) op.textContent='+';
      });
      if(willOpen){
        card.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        card.querySelector('.v15-concept__plus').textContent='−';
        setTimeout(()=>card.scrollIntoView({behavior:'smooth',block:'center'}),120);
      }
    });

    input.addEventListener('focus',()=>{renderMenu();openMenu();});
    input.addEventListener('click',()=>{renderMenu();openMenu();});
    input.addEventListener('input',()=>{
      query=input.value.trim().toLowerCase();
      if(query){
        const firstTheme=themes.findIndex(theme=>themeMatches(theme)>0);
        if(firstTheme>=0) currentTheme=firstTheme;
      }
      renderStage(false);
      openMenu();
    });
    input.addEventListener('keydown',e=>{
      if(e.key==='Escape'){closeMenu();input.blur();}
    });
    document.addEventListener('click',e=>{
      if(!root.querySelector('.v15-top').contains(e.target)) closeMenu();
    });

    renderStage(false);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
