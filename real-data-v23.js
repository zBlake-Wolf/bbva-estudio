// v23 · Datos públicos reales BBVA México + formatos de capacitación.
// Regla: nunca usar datos de clientes reales. Cuando el dato identifica al banco, se muestra el valor público real;
// cuando identifica a una persona/cuenta/tarjeta, se muestra el formato real y un ejemplo claramente ficticio.
(function(){
  const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

  const DATA={
    'numero de cliente':{
      kind:'format',title:'FORMATO BBVA DE CAPACITACIÓN',
      lead:'Identifica a la persona. En la capacitación BBVA revisada se maneja con 8 dígitos.',
      rows:[['Longitud enseñada','8 dígitos'],['Ejemplo ficticio','58320417']],
      note:'El número es inventado. Lo real aquí es el formato usado en tu material de capacitación; no se publica un número de cliente real de ejemplo.'
    },
    'numero de contrato':{
      kind:'format',title:'FORMATO BBVA DE CAPACITACIÓN',
      lead:'Identifica el contrato/producto. En la capacitación revisada se maneja con 20 dígitos.',
      rows:[['Longitud enseñada','20 dígitos'],['Ejemplo ficticio','00123456789012345678']],
      note:'Ejemplo inventado; conserva solo la idea de longitud y función.'
    },
    'numero de cuenta':{
      kind:'format',title:'FORMATO BBVA DE CAPACITACIÓN',
      lead:'En el material BBVA que estás estudiando, la cuenta se trabaja como un número de 10 dígitos.',
      rows:[['Longitud enseñada','10 dígitos'],['Ejemplo ficticio','9012345678']],
      note:'El número es ficticio. En una cuenta real, toma siempre el dato desde App, contrato o estado de cuenta.'
    },
    'clabe':{
      kind:'real',title:'DATO PÚBLICO REAL DE BBVA MÉXICO',
      lead:'La CLABE tiene 18 dígitos y el código bancario de BBVA México es 012.',
      rows:[['Código de banco BBVA','012'],['Longitud CLABE','18 dígitos'],['Cómo se ve sin usar una cuenta real','012 · XXX · X · XXXXXXXXXX · X']],
      note:'012 sí es un dato real del banco. El resto está enmascarado porque una CLABE completa identifica una cuenta real. No inventes una CLABE para transferir: cópiala desde el canal oficial.'
    },
    'bin iin':{
      kind:'mixed',title:'REAL VS VARIABLE',
      lead:'BIN/IIN son los primeros dígitos que identifican emisor/producto, pero BBVA maneja múltiples rangos y pueden cambiar.',
      rows:[['Lo que sí memorizo','BIN/IIN = primeros dígitos del número de tarjeta'],['Lo que NO memorizo','Un BIN específico viejo']],
      note:'Para un proceso real usa el catálogo vigente de CUC/sistema; no uses un BIN inventado como si fuera oficial.'
    },
    'cvv nip y token':{
      kind:'format',title:'FORMATO DE USO BBVA',
      lead:'Son factores distintos. En tus materiales de estudio: NIP de 4 dígitos y CVV de 3 dígitos; Token es dinámico.',
      rows:[['NIP ficticio','4821'],['CVV ficticio','527'],['Token','valor temporal generado por el canal']],
      note:'Todos los valores numéricos son inventados. Nunca uses, pidas ni guardes credenciales reales fuera del proceso autorizado.'
    },
    'swift bic':{
      kind:'real',title:'DATO PÚBLICO REAL DE BBVA MÉXICO',
      lead:'Este sí es un código real del banco para transferencias internacionales.',
      rows:[['SWIFT / BIC BBVA México','BCMRMXMMPYM'],['Longitud','11 caracteres'],['País dentro del código','MX = México']],
      note:'BBVA México publica BCMRMXMMPYM como su código SWIFT para transferencias internacionales. SWIFT identifica al banco, no a la cuenta del cliente.',
      source:'BBVA México · Transferencias internacionales'
    },
    'opi':{
      kind:'real',title:'DATOS REALES PARA RECIBIR EN BBVA MÉXICO',
      lead:'BBVA publica qué datos debe proporcionar el receptor para una transferencia internacional entrante.',
      rows:[['SWIFT BBVA México','BCMRMXMMPYM'],['Cuenta receptora','CLABE BBVA de 18 dígitos'],['También se solicita','nombre completo y domicilio asociados a la cuenta'],['Mensaje de transferencia','SWIFT MT103']],
      note:'La CLABE, nombre y domicilio cambian por cliente, así que no se muestran datos personales reales. El SWIFT y el tipo de mensaje sí son datos públicos del banco.',
      source:'BBVA México · Transferencias internacionales'
    },
    'iban aba y transit':{
      kind:'real',title:'REGLA REAL PARA BBVA MÉXICO',
      lead:'México no usa IBAN para sus cuentas y los bancos mexicanos no usan código ABA propio.',
      rows:[['México','usa CLABE de 18 dígitos'],['IBAN','se usa en países que lo requieren; BBVA México no tiene IBAN de cuenta mexicana'],['ABA','9 dígitos en bancos de EE. UU.; BBVA México no usa ABA'],['Para BBVA México internacional','SWIFT BCMRMXMMPYM']],
      note:'Si envías desde México a otro país, el beneficiario puede necesitar IBAN o ABA según su país; para recibir en BBVA México se usa CLABE + SWIFT.'
    },
    'spei':{
      kind:'real',title:'DATOS REALES BANXICO / BBVA',
      lead:'BBVA México participa en SPEI. Banxico lo lista con clave de institución 40012.',
      rows:[['Institución Banxico','BBVA MEXICO'],['Clave de institución SPEI/CEP','40012'],['Prefijo bancario en CLABE','012']],
      note:'40012 y 012 NO son lo mismo: 40012 es la clave de institución en listados SPEI/CEP; 012 es el código bancario usado al inicio de la CLABE.'
    },
    'clave de rastreo':{
      kind:'format',title:'FORMATO REAL, VALOR VARIABLE',
      lead:'Cada SPEI lleva una clave de rastreo para seguimiento. No existe una sola clave “de BBVA” para todos los pagos.',
      rows:[['Qué identifica','una transferencia SPEI específica'],['Dónde se usa','consulta/seguimiento y CEP'],['Ejemplo didáctico','BNET0102… (solo para visualizar el tipo de dato)']],
      note:'La clave real la genera la operación. Para un caso real se toma del comprobante/movimiento, no se inventa.'
    },
    'portabilidad de nomina':{
      kind:'real',title:'FUNCIONAMIENTO PÚBLICO ACTUAL BBVA',
      lead:'La empresa sigue depositando en el banco origen y, después, la nómina se transfiere automáticamente a la cuenta BBVA destino.',
      rows:[['Costo publicado','sin costo'],['Se mantienen','cuenta origen + cuenta BBVA destino'],['En App BBVA','Cuenta → Mostrar más / Más → Recibir nómina / Cambiar nómina']],
      note:'BBVA publica que no necesitas avisar al empleador. Plazos/promociones pueden cambiar, así que para atención real confirma la versión vigente.'
    },
    'efi efectivo inmediato':{
      kind:'real',title:'PRODUCTO REAL BBVA',
      lead:'Efectivo Inmediato permite disponer de parte de la línea disponible de una TDC si BBVA seleccionó al cliente y existe una invitación.',
      rows:[['Nombre oficial','Efectivo Inmediato (EFI)'],['Plazos publicados actualmente','12, 18, 24, 30 o 36 meses'],['Condición clave','tener TDC BBVA y oferta/invitación']],
      note:'La tasa y el monto son propios de la oferta del cliente. No hay una tasa única para memorizar.'
    },
    'anualidad administracion de tarjeta':{
      kind:'real',title:'NOMBRE ACTUAL EN BBVA',
      lead:'Lo que comúnmente llamamos “anualidad” aparece en la oferta actual como comisión por administración de la tarjeta del titular.',
      rows:[['Tipo de dato','comisión'],['Importe','depende de la tarjeta vigente'],['No es','tasa de interés']],
      note:'No memorices un monto único: hay tarjetas con condiciones distintas.'
    }
  };

  function makeBox(data){
    const rows=(data.rows||[]).map(([k,v])=>`<div class="v23-row"><span>${k}</span><strong>${v}</strong></div>`).join('');
    return `<section class="v23-real ${data.kind||''}"><div class="v23-badge">${data.title}</div><p class="v23-lead">${data.lead||''}</p><div class="v23-rows">${rows}</div>${data.note?`<p class="v23-note">${data.note}</p>`:''}${data.source?`<div class="v23-source">Fuente: ${data.source}</div>`:''}</section>`;
  }

  function decorate(root=document){
    root.querySelectorAll('.v15-concept').forEach(card=>{
      if(card.dataset.real23==='1') return;
      const title=norm(card.querySelector('.v15-concept__button strong')?.textContent);
      const data=DATA[title];
      if(!data) return;
      const first=card.querySelector('.v21-first');
      if(!first) return;
      first.insertAdjacentHTML('beforeend',makeBox(data));
      card.dataset.real23='1';
    });
  }

  function start(){
    decorate();
    const stair=document.querySelector('#v15Stair');
    if(!stair) return;
    new MutationObserver(()=>decorate(stair)).observe(stair,{childList:true,subtree:true});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(start,0)); else setTimeout(start,0);
})();