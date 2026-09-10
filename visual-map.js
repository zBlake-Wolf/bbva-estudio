// v24 · Buscador + temas + conceptos en escalera + modo operativo de atención.
(function(){
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function plain(v){const tmp=document.createElement('div');tmp.innerHTML=String(v||'');return (tmp.textContent||tmp.innerText||'').replace(/\s+/g,' ').trim();}
  function cleanSectionTitle(v){return String(v??'').replace(/^\s*\d+\.\s*/,'').trim();}
  function blockNumber(level){const m=String(level||'').match(/Bloque\s+(\d+)/i);return m?Number(m[1]):999;}

  const themeNames={
    1:'Conceptos básicos',2:'Identificadores',3:'App BBVA',4:'Autenticación y MAU',5:'Cuentas de débito',
    6:'Movimientos en tránsito',7:'Restricciones y bloqueos',8:'Fraudes',9:'Cheques',10:'Estado de cuenta',
    11:'Actualización de datos',12:'Pagos de servicios',13:'Fallecimientos',14:'Nómina y portabilidad',
    15:'Movilidad de saldos',16:'Crédito de consumo',17:'EFI · Efectivo Inmediato',18:'Tarjeta de crédito y costos',
    19:'Seguros',20:'Transferencias · SPEI · OPI',21:'Llamada completa y venta cruzada',22:'Rutas CUC y diagnóstico'
  };
  const themeDescriptions={
    1:'Banco, cliente, producto, cuenta, saldo, cargo, abono y disponible: la base antes de tocar procesos.',
    2:'Número de cliente, contrato, cuenta, tarjeta, CLABE, BIN, CVV, NIP y Token sin confundirlos.',
    3:'Qué ve el cliente en la App BBVA: productos, movimientos, estado de cuenta, tarjeta digital, retiros y ofertas.',
    4:'Qué significa autenticar, para qué sirve el MAU y por qué el nivel depende del proceso.',
    5:'TDD, cuentas con o sin chequera, niveles de cuenta, UDIS, bloqueos e inactividad.',
    6:'Saldo retenido, movimiento en tránsito, aplicado, rechazado y cómo investigar un doble cargo aparente.',
    7:'Diferencia entre restricción, bloqueo, rechazo, límites e inactividad antes de dar una respuesta.',
    8:'Cargos no reconocidos y modalidades como phishing, smishing, vishing, spoofing y pharming.',
    9:'Tipos de cheque, endoso, protección, liberación, suspensión, devolución y saldo a buen cobro.',
    10:'Cómo leer un EDC, periodo, corte, envío/consulta digital y qué revisar con el cliente.',
    11:'Correo, teléfono, domicilio, alertas y la diferencia entre actualizar un dato y modificar un factor sensible.',
    12:'Pago de servicios, CIE, domiciliación, cargo recurrente, duplicados y pagos no aplicados.',
    13:'Qué ocurre cuando fallece un titular: beneficiarios, sucesión, cuentas, créditos y seguros.',
    14:'Cuenta de nómina, banco origen/destino, portabilidad no recibida y cancelación/cambio.',
    15:'Saldo a favor, traspasos, transferencias equivocadas y “movilidad de saldos” por validar literalmente en CUC.',
    16:'Capital, plazo, pago, saldo insoluto y capacidad de pago para entender préstamos y crédito al consumo.',
    17:'EFI: Efectivo Inmediato, oferta que usa línea de TDC y se paga según las condiciones mostradas al cliente.',
    18:'Línea, corte, PPNGI, cascada, revolvente, tasa, interés, anualidad, comisiones, CAT y MSI.',
    19:'Seguro, póliza, prima, cobertura, suma asegurada, deducible, siniestro, beneficiarios y productos.',
    20:'Transferencias nacionales e internacionales: SPEI, CEP, clave de rastreo, OPI, SWIFT, IBAN y corresponsales.',
    21:'Secuencia completa de llamada: producto, intención, sondeo, autenticación, CUC, explicación, cierre y venta cruzada.',
    22:'Entrenamiento de examen y piso: cómo llegar al proceso, qué mirar en CCD, cómo interpretar el estatus y qué explicarle al cliente.'
  };
  const colors=['#ff2419','#075bea','#ff4f00','#ffbf00','#00a842','#7024f5','#00afd8','#ed197b','#66ad00','#183f91','#df268a','#00a386','#c92f27','#5636d5','#ef7b00','#0768ad','#b51fd1','#df2d2d','#007d57','#0076c9','#5547ff','#ff3030'];

  function helperBox(type,label,value){if(!value)return'';return `<div class="v15-mini ${type}"><b>${label}</b>${esc(value)}</div>`;}
  function listHTML(items){return Array.isArray(items)&&items.length?`<ul>${items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'';}
  function opList(title,items,klass=''){return Array.isArray(items)&&items.length?`<div class="v24-opbox ${klass}"><span>${esc(title)}</span>${listHTML(items)}</div>`:'';}

  function boot(){
    const page=document.querySelector('#guia');
    if(!page || typeof guideTopics==='undefined' || !Array.isArray(guideTopics) || !guideTopics.length) return;
    page.querySelectorAll('.visual-course-v15').forEach(n=>n.remove());

    const grouped=new Map();
    guideTopics.forEach((topic,topicIndex)=>{const n=blockNumber(topic.level);if(!grouped.has(n))grouped.set(n,[]);grouped.get(n).push({topic,topicIndex});});

    const themes=[...grouped.entries()].sort((a,b)=>a[0]-b[0]).map(([number,items],themeIndex)=>{
      const concepts=[];
      items.forEach(({topic,topicIndex})=>{
        (topic.sections||[]).forEach((section,sectionIndex)=>{
          const searchText=[themeNames[number]||'',topic.title,topic.level,topic.intro,section.t,section.body,section.easy,section.analogy,section.example,section.bbva,section.format,section.call,section.route,section.say,section.exam,...(section.breakdown||[]),...(section.memorize||[]),...(section.check||[]),...(section.signals||[]),section.client,section.advisor,section.warning,...(topic.related||[])].map(plain).join(' ').toLowerCase();
          concepts.push({topic,topicIndex,section,sectionIndex,searchText});
        });
      });
      return {number,title:themeNames[number]||`Bloque ${number}`,description:themeDescriptions[number]||plain(items[0]?.topic?.intro||''),color:colors[themeIndex%colors.length],concepts};
    });

    const root=document.createElement('div');root.className='visual-course-v15';
    root.innerHTML=`<section class="v15-top"><label class="v15-search" for="v15Search"><span>⌕</span><input id="v15Search" type="search" placeholder="Busca: rechazo TDC, TRIAD, CUC, cheque, saldo retenido…" autocomplete="off" aria-haspopup="listbox" aria-expanded="false" /></label><div class="v16-theme-menu" id="v16ThemeMenu" role="listbox" aria-label="Temas de estudio"><div class="v16-theme-menu__title">Elige un tema</div><div class="v16-theme-list" id="v16ThemeList"></div></div></section><section class="v15-stage" id="v15Stage" aria-live="polite"><div class="v15-theme-title-wrap"><div class="v15-theme-title" id="v15ThemeTitle"></div><p class="v15-theme-subtitle" id="v15ThemeSubtitle"></p><div class="v15-search-status" id="v15SearchStatus"></div></div><div class="v15-stair" id="v15Stair"></div></section>`;
    page.prepend(root);

    const stage=root.querySelector('#v15Stage'),title=root.querySelector('#v15ThemeTitle'),subtitle=root.querySelector('#v15ThemeSubtitle'),stair=root.querySelector('#v15Stair'),input=root.querySelector('#v15Search'),status=root.querySelector('#v15SearchStatus'),menu=root.querySelector('#v16ThemeMenu'),themeList=root.querySelector('#v16ThemeList');
    let currentTheme=0,query='';

    function themeMatches(theme){if(!query)return theme.concepts.length;const q=query.toLowerCase();if((theme.title+' '+theme.description).toLowerCase().includes(q))return theme.concepts.length;return theme.concepts.filter(c=>c.searchText.includes(q)).length;}
    function openMenu(){menu.classList.add('open');input.setAttribute('aria-expanded','true');}
    function closeMenu(){menu.classList.remove('open');input.setAttribute('aria-expanded','false');}
    function renderMenu(){const available=themes.map((theme,i)=>({theme,i,count:themeMatches(theme)})).filter(x=>!query||x.count>0);themeList.innerHTML=available.length?available.map(({theme,i,count})=>`<button class="v16-theme-option ${i===currentTheme?'active':''}" type="button" role="option" aria-selected="${i===currentTheme?'true':'false'}" data-theme-index="${i}" style="--theme:${theme.color}"><span class="v16-theme-option__dot"></span><span><strong>Tema ${i+1} · ${esc(theme.title)}</strong><small>${esc(theme.description)}</small></span><span class="v16-theme-option__count">${query?`${count} coincidencia${count===1?'':'s'}`:`${theme.concepts.length} conceptos`}</span></button>`).join(''):`<div class="v16-menu-empty">No encontré un tema con esa palabra.</div>`;}

    function cardHTML(item,index){
      const s=item.section,t=item.topic,titleText=cleanSectionTitle(s.t);
      const fmt=s.format?`<div class="v22-format"><span>ASÍ SE VE</span><code>${esc(s.format)}</code><small>Ejemplo ficticio para estudiar; no pertenece a un cliente real.</small></div>`:'';
      const breakdown=Array.isArray(s.breakdown)&&s.breakdown.length?`<div class="v22-breakdown"><span>QUÉ SIGNIFICA CADA PARTE</span>${listHTML(s.breakdown)}</div>`:'';
      const mem=Array.isArray(s.memorize)&&s.memorize.length?`<div class="v22-memorize"><span>LO QUE SÍ MEMORIZO</span>${listHTML(s.memorize)}</div>`:'';
      const op=(s.call||s.route||s.check||s.signals||s.say||s.exam)?`<div class="v24-operational">
        <div class="v24-op-title"><b>☎ MODO ASESOR / EXAMEN</b><small>Ruta basada en el manual 2022; confirma nombres y pasos en CUC vigente.</small></div>
        ${s.call?`<div class="v24-call"><span>EL CLIENTE TE DICE</span><strong>${esc(s.call)}</strong></div>`:''}
        ${s.route?`<div class="v24-route"><span>POR DÓNDE LLEGAS</span><p>${esc(s.route)}</p></div>`:''}
        ${opList('QUÉ REVISAS',s.check,'check')}
        ${opList('SI VES ESTO, PIENSA ESTO',s.signals,'signals')}
        ${s.say?`<div class="v24-say"><span>CÓMO SE LO EXPLICARÍAS</span><p>${esc(s.say)}</p></div>`:''}
        ${s.exam?`<div class="v24-exam"><span>PARA EL EXAMEN</span><p>${esc(s.exam)}</p></div>`:''}
      </div>`:'';
      return `<article class="v15-concept ${index%2===0?'right':'left'}" data-v15-concept><button class="v15-concept__button" type="button" aria-expanded="false"><span><span class="v15-concept__meta">${esc(t.title)}</span><strong>${esc(titleText)}</strong></span><span class="v15-concept__plus">+</span></button><div class="v15-concept__body"><div class="v15-concept__body-inner"><div class="v15-concept__content"><div class="v21-first"><div class="v21-easy"><span>EN FÁCIL</span><strong>${esc(s.easy||plain(s.body))}</strong></div><div class="v22-bbva"><span>EJEMPLO BBVA · FICTICIO</span><p>${esc(s.bbva||s.example||'Ejemplo didáctico dentro de un producto BBVA.')}</p></div>${fmt}<div class="v21-memory"><span>PARA ACORDARTE</span><p>${esc(s.analogy||s.example||'Piensa en un ejemplo cotidiano que tenga la misma lógica.')}</p></div>${breakdown}${mem}${op}</div><details class="v21-details"><summary>Ver explicación completa</summary><div class="v21-full"><span class="v15-parent-note">${esc(t.level)}</span>${s.body||''}<div class="v15-mini-grid">${helperBox('example','Ejemplo bancario',s.example)}${helperBox('client','Cliente podría decir',s.client)}${helperBox('advisor','Como asesor piensa',s.advisor)}${helperBox('warning','Ojo',s.warning)}</div></div></details></div></div></div></article>`;
    }

    function matchingConcepts(theme){if(!query)return theme.concepts;const direct=(theme.title+' '+theme.description).toLowerCase().includes(query);return direct?theme.concepts:theme.concepts.filter(c=>c.searchText.includes(query));}
    function renderStage(scroll=false){const theme=themes[currentTheme],matches=matchingConcepts(theme);stage.dataset.themeIndex=String(currentTheme);stage.style.setProperty('--theme',theme.color);title.innerHTML=`<small>Tema ${currentTheme+1}</small>${esc(theme.title)}`;subtitle.textContent=theme.description;status.textContent=query?`${matches.length} coincidencia${matches.length===1?'':'s'} en este tema`:`${theme.concepts.length} conceptos · abre uno: entiende qué es y luego practica cómo resolverlo`;stair.innerHTML=matches.length?matches.map(cardHTML).join(''):`<div class="v15-empty">No encontré ese concepto dentro de este tema.</div>`;renderMenu();if(scroll)requestAnimationFrame(()=>stage.scrollIntoView({behavior:'smooth',block:'start'}));}

    themeList.addEventListener('click',e=>{const btn=e.target.closest('[data-theme-index]');if(!btn)return;currentTheme=Number(btn.dataset.themeIndex);query='';input.value='';closeMenu();renderStage(true);});
    stair.addEventListener('click',e=>{if(e.target.closest('.v21-details,.v24-operational'))return;const btn=e.target.closest('.v15-concept__button');if(!btn)return;const card=btn.closest('[data-v15-concept]'),willOpen=!card.classList.contains('open');stair.querySelectorAll('[data-v15-concept]').forEach(other=>{other.classList.remove('open');const ob=other.querySelector('.v15-concept__button'),op=other.querySelector('.v15-concept__plus');if(ob)ob.setAttribute('aria-expanded','false');if(op)op.textContent='+';});if(willOpen){card.classList.add('open');btn.setAttribute('aria-expanded','true');card.querySelector('.v15-concept__plus').textContent='−';setTimeout(()=>card.scrollIntoView({behavior:'smooth',block:'center'}),120);}});
    input.addEventListener('focus',()=>{renderMenu();openMenu();});input.addEventListener('click',()=>{renderMenu();openMenu();});input.addEventListener('input',()=>{query=input.value.trim().toLowerCase();if(query){const firstTheme=themes.findIndex(theme=>themeMatches(theme)>0);if(firstTheme>=0)currentTheme=firstTheme;}renderStage(false);openMenu();});input.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();input.blur();}});document.addEventListener('click',e=>{if(!root.querySelector('.v15-top').contains(e.target))closeMenu();});
    renderStage(false);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();