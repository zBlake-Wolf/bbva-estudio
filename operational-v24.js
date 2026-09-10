// v24 · Entrenamiento operativo basado en el Manual Inbound Banca Remota dic-2022.
// IMPORTANTE: sirve para aprender la lógica y practicar el examen. Nombres/rutas/criterios operativos deben confirmarse en CUC vigente en piso.
(function(){
  if(typeof guideTopics==='undefined' || !Array.isArray(guideTopics)) return;
  const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const all=[]; guideTopics.forEach(t=>(t.sections||[]).forEach(s=>all.push({t,s,key:norm(s.t)})));
  const set=(key,data)=>{const x=all.find(x=>x.key===norm(key)); if(x) Object.assign(x.s,data);};
  const routeGeneral='Entorno colaborativo → lupa → buscar “CUC” → escribir pregunta o palabra clave en “¿Cómo podemos ayudarte?” → Buscar → abrir la pregunta (+ / “Aquí”) o el PDF correspondiente. Para servicio: Guía de Banquero Remoto → Guía del servicio. El manual también indica revisar el Manual de consultas en CCD porque CCD es prioritario para llamadas Inbound.';

  set('Tarjeta rechazada',{
    call:'Cliente: “¿Por qué no puedo comprar nada con mi tarjeta de crédito?”',
    route:'MANUAL 2022 · En CCD: Ficha cliente → columna “Quiero” → Movimientos Declinados → localizar el intento → revisar motivo → pasar el cursor por el signo de admiración. Si falta detalle: CUC → Guía de Banquero Remoto → Guía del servicio → Consulta de restricciones de uso en tarjetas → catálogo de rechazos MC30.',
    check:['¿Es TDC o TDD?','¿Hay intento declinado registrado?','Motivo exacto del rechazo','Estatus/bloqueo del plástico','Disponible/línea utilizada','Si el motivo es TRIAD: revisar tipo de TRIAD y los indicadores que correspondan'],
    signals:['SOBREGIRO TRIAD → excedió la línea disponible.','INSUF. BH TRIAD → Behavior Score insuficiente según la estrategia.','MOROSIDAD TRIAD → existe mora o quita en algún producto, incluso otro crédito/TDC.','TRIAD RESTRICCIÓN → uso restringido en un porcentaje por tendencia de riesgo.','SEGMENTO TRIAD → uso limitado; el manual indica que el caso puede pasar a Soluciones de Pago.','Si NO aparece rechazo y falla en distintos contextos, el manual pide distinguir TPV/navegador/posible daño de plástico antes de asumir bloqueo.'],
    say:'“Ya revisé el intento y la tarjeta sí presenta una restricción. El sistema nos marca el motivo específico; por eso en este momento no está autorizando la compra. Le explico qué significa y cuál es el siguiente paso que indica el proceso.”',
    exam:'EXAMEN: memoriza la secuencia Movimientos Declinados → motivo → ayuda (!) → catálogo MC30/CUC. No memorices solo “tarjeta bloqueada”. Primero identifica el código/motivo.',
    warning:'No prometas “si paga hoy se desbloquea automáticamente”. En TRIAD la restricción depende de la estrategia/comportamiento y el paso correcto lo define el rechazo/CUC vigente.'
  });

  set('Restricción',{
    route:'CUC 2022: Guía de Banquero Remoto → Guía del servicio → Consulta de restricciones de uso en tarjetas. Para débito, el manual remite a “Ejecuta” o Auxiliares → Matriz de bloqueos en cuentas de Débito.',
    check:['Producto afectado','Estatus de tarjeta/cuenta','Código o descripción de restricción','Si permite compras, disposiciones o ninguna','Si existe bloqueo de cuenta además del plástico'],
    say:'“La cuenta/tarjeta sigue existiendo, pero tiene una restricción que limita ciertas operaciones. Voy a validar qué tipo es para indicarle exactamente qué puede hacer.”',
    exam:'No confundas: restricción = limita; bloqueo = impide total/parcialmente; rechazo = resultado de un intento; cancelación = terminación del producto.'
  });

  set('Bloqueo',{
    route:'DÉBITO · Manual 2022: revisar en CCD y en CUC la Matriz de bloqueos de cuentas de Débito, disponible en “Ejecuta” o “Auxiliares”. El manual menciona UPC como área de apoyo para ciertos desbloqueos, pero el canal/teléfono debe verificarse vigente.',
    check:['Tipo de cuenta','Código/motivo de bloqueo','Si se relaciona con Art. 61/inactividad, nivel de cuenta/expediente o prevención de fraudes','Si el cliente reconoce o no la operación relacionada','Qué documentación/canal exige el bloqueo'],
    signals:['Art. 61 / inactividad → el manual 2022 lo asocia a recursos en cuenta global y atención en sucursal.','Cuenta N2 a N4 / expediente → revisar nivel y documentación requerida.','Prevención de fraudes → puede requerir proceso específico y sucursal/área de protección.'],
    say:'“Aquí sí aparece un bloqueo en la cuenta. No todos los bloqueos se eliminan de la misma forma; voy a validar el motivo exacto y el requisito que corresponde.”',
    warning:'Los plazos, UDIS, teléfonos y canales de desbloqueo del manual 2022 pueden haber cambiado. Aprende la lógica, valida CUC actual.'
  });

  set('Saldo retenido',{
    call:'Cliente: “Tengo dinero, pero mi disponible bajó y no veo el cargo en el estado de cuenta.”',
    route:'Manual 2022: CCD → Ficha cliente → dar clic en el importe de “Saldo retenido”. CUC → Guía de Banquero Remoto → Guías de atención → Guía del servicio → Consulta y liberación de cargos retenidos por compras en TDC y TDD.',
    check:['Clave del movimiento','Fecha de la operación','Fecha prevista de liberación mostrada','Importe inicial retenido','Importe que continúa retenido','Estatus: Vigente o Anulado'],
    signals:['Vigente → el importe sigue retenido.','Anulado → la operación se canceló/anuló.','Retención resta disponible aunque todavía no aparezca como cargo final en el estado de cuenta.'],
    say:'“Lo que está viendo es una retención: el monto está apartado y por eso reduce su disponible, pero todavía no es el cargo final del estado de cuenta. Voy a revisar el estatus y la fecha que muestra el sistema.”',
    exam:'EXAMEN: recuerda qué revisar A–F en CCD: clave, fecha operación, fecha liberación, importe inicial, importe aún retenido y estatus.',
    warning:'No uses como vigentes los tiempos de liberación impresos en el manual 2022; el comercio y el proceso actual pueden variar.'
  });

  set('Movimiento en tránsito',{
    call:'Cliente: “La compra está en tránsito. ¿Ya me la cobraron?”',
    check:['Producto','Importe y comercio','Si está retenido/en tránsito o aplicado','Saldo/disponible antes y después','Si existe otro registro similar'],
    say:'“El movimiento todavía está en proceso. Antes de tratarlo como un cobro definitivo, revisamos si sigue retenido o si ya quedó aplicado.”',
    exam:'No confundas tránsito/retención con movimiento aplicado. Primero revisa el estado real.'
  });

  set('Cargo no reconocido',{
    call:'Cliente: “No reconozco esta compra.”',
    route:'Manual 2022: CUC → Guía de Banquero Remoto → Guía del servicio → Información de modalidades de fraude. Si el caso implica canales digitales, existe una guía específica de bloqueo de canales digitales/token. Para aclaraciones, primero sondea y clasifica correctamente.',
    check:['Fecha','Importe','Comercio/concepto','TDC/TDD/canal digital','Si existe tarjeta adicional','Si puede ser suscripción/cargo recurrente','Si hay dos movimientos parecidos','Si compartió datos, perdió celular o recibió alertas no reconocidas'],
    say:'“Primero vamos a identificar exactamente el movimiento y cómo se realizó. Con eso determino si corresponde una aclaración de compra, un duplicado, un cargo recurrente o un posible fraude.”',
    exam:'El manual recalca SONDEAR ANTES DE TIPIFICAR. Si abres fraude sin confirmar y era duplicado/error de app, se genera un proceso incorrecto.'
  });

  set('Cheque',{
    route:'Manual 2022: CUC → Guía de Banquero Remoto → Guías de atención → Guía del servicio → Protección y suspensión de cheques. Para depósitos/devoluciones: Guía del servicio → Consulta de depósito o devolución de un cheque.',
    check:['Tipo de cheque','Cuenta con chequera','Beneficiario','Si es negociable/endosable','Estatus de protección/liberación/suspensión','Si es de otro banco y está en compensación'],
    exam:'Aprende a distinguir: portador, nominativo/a la orden, cruzado, certificado, caja, ventanilla; y las acciones proteger/liberar/suspender.'
  });

  set('Cheque de otro banco y saldo a buen cobro',{
    call:'Cliente: “Ya deposité el cheque y lo veo en saldo, ¿por qué no puedo gastarlo?”',
    route:'Manual 2022: CCD → apartado “Saldo buen cobro”. Si fue devuelto, localizar movimiento → clave CD + motivo → CUC → Auxiliares → Motivos de devolución/rechazo de cheques. Ruta general: Guía de Banquero Remoto → Guías de atención → Guía del servicio → Consulta de depósito o devolución de un cheque.',
    check:['Banco emisor','Importe','Fecha depósito','Saldo buen cobro','Si está validándose o fue devuelto','Clave CD y motivo, si aplica'],
    say:'“Aunque el importe pueda verse reflejado, el cheque de otro banco todavía necesita validarse con el banco emisor. Mientras no esté disponible/buen cobro, no debemos confirmarlo como dinero utilizable.”',
    exam:'Frase clave del manual: saldo reflejado NO significa fondos disponibles en un cheque de otro banco.',
    warning:'El plazo de 2/7 días del manual es material 2022: para trabajo actual valida la guía vigente.'
  });

  set('Pago mínimo',{
    call:'Cliente: “Pagué el mínimo, ¿por qué mi tarjeta sigue sin dejarme comprar / por qué me cobraron intereses?”',
    route:'Manual 2022: CUC → Guía de Banquero Remoto → Guías de atención → Guía del servicio → Consulta de saldo promedio, cascada de pagos y pago mínimo. En CCD/EDC revisa PPNGI, pago mínimo, saldo y aplicación de pagos.',
    check:['Pago mínimo requerido','PPNGI','Fecha límite','Pago realmente aplicado','Saldo vencido/mora','Rechazo TRIAD si además no puede comprar'],
    signals:['Pagar mínimo mantiene el crédito al corriente según el esquema del producto, pero deja saldo financiado y puede generar intereses.','No cubrir el mínimo puede generar mora y afectar el uso del crédito.','Si hay TRIAD, pagar una cantidad no garantiza por sí solo liberar la restricción.'],
    say:'“Su pago sí se aplicó, pero el pago mínimo no liquida toda la deuda ni equivale al pago para no generar intereses. Además voy a revisar si existe una restricción por comportamiento o mora que esté afectando sus compras.”',
    warning:'Las fórmulas/porcentajes de pago mínimo del manual 2022 son históricos; no los presentes como cálculo vigente.'
  });

  set('PPNGI',{
    route:'CUC 2022: Guía de Banquero Remoto → Guías de atención → Guía del servicio → Consulta de saldo promedio, cascada de pagos y pago mínimo.',
    check:['PPNGI del estado','Pago mínimo incluido','Compras a una exhibición','Mensualidades de promociones','Comisiones/cuotas/intereses/IVA','Saldo pendiente de PPNGI anterior'],
    say:'“El PPNGI es la referencia del estado de cuenta para cubrir el periodo sin generar intereses ordinarios sobre lo que corresponda. No es lo mismo que pagar solo el mínimo.”',
    exam:'Cascada del manual: PPNGI (incluye PM) → revolvente → capital diferido. Aprende el orden y luego interpreta el estado de cuenta.'
  });

  set('Estado de cuenta (EDC)',{
    route:'En CCD, el manual muestra que el estado de cuenta puede consultarse desde Ficha cliente mediante el icono PDF. Para solicitudes/envíos, busca en CUC el proceso de EDC del producto y periodo.',
    check:['Producto correcto','Periodo/corte','Movimiento que pregunta','Cargos/abonos','PPNGI y fecha límite si es TDC','Canal de envío/consulta disponible'],
    say:'“Voy a ubicar el estado de cuenta del periodo correcto y revisar el movimiento dentro de ese ciclo; así no mezclamos operaciones del corte actual con el anterior.”',
    exam:'Muchos problemas reales se expresan como “cargo no reconocido” o “mi pago está mal”, pero el manual recomienda usar el EDC para encontrar la verdadera solicitud y explicarla paso a paso.'
  });

  set('Domiciliación',{
    check:['Cuenta/tarjeta a la que carga','Empresa/servicio','Fecha esperada','Saldo suficiente','Bloqueos/restricciones','Si fue un pago manual adicional'],
    signals:['Si no se aplicó: revisar que la cuenta estuviera sin bloqueos y con saldo suficiente cuando corresponde.','Si hay duplicado: confirmar si hubo pago manual + cobro automático.'],
    say:'“Voy a validar si el cobro era domiciliado, la fecha en que debía ejecutarse y si la cuenta estaba disponible para pagarlo.”',
    exam:'No mezcles domiciliación con cargo recurrente: una suele estar asociada a instrucción sobre cuenta/servicio; el cargo recurrente suele venir del comercio sobre tarjeta.'
  });

  set('Pago de servicios',{
    check:['Servicio/convenio','Referencia','Importe','Fecha','Cuenta de cargo','Estatus del movimiento','Si la empresa lo aplicó','Si hubo duplicado o dato incorrecto'],
    say:'“Primero revisamos que el convenio/referencia e importe sean correctos y cuál es el estatus del pago; después vemos si corresponde esperar, aclarar o corregir.”',
    exam:'El manual clasifica problemas CIE como: duplicado, dato incorrecto, no aplicado por la empresa o pagos a instituciones gubernamentales.'
  });

  set('Transferencia',{
    check:['Cuenta origen','Destino','Banco','Importe','Fecha/hora','CLABE/cuenta destino','Clave de rastreo o referencia','Estatus'],
    say:'“Voy a revisar la transferencia por sus datos y estatus; con la clave de rastreo podemos distinguir si está en proceso, liquidada, rechazada o devuelta.”',
    exam:'Para SPEI, aprende los estados: En proceso, Liquidado, Cancelado, Rechazado, En proceso de devolución, Devuelto, Cancelado al cierre y No encontrado.'
  });

  set('SPEI',{
    route:'Seguimiento 2022: desde detalle del movimiento en App puede existir enlace al CEP; si no hay CEP, usar Mi-SPEI con clave de rastreo o referencia. Para examen aprende el significado de cada estado, no los horarios históricos.',
    check:['Clave de rastreo/referencia','Banco emisor','Banco receptor','Importe','Fecha','Estado SPEI','CEP disponible'],
    warning:'Horarios, límites y niveles de servicio impresos en el manual 2022 son datos operativos históricos.'
  });

  set('OPI',{
    route:'Manual 2022: CUC → Guía de Banquero Remoto → Guías de atención → Guía del servicio → Información de Orden de Pago Internacional.',
    check:['País','Moneda','Banco emisor/receptor','Beneficiario','SWIFT/BIC','Identificador requerido por país (ABA/IBAN/etc.)','Estatus y fecha valor'],
    say:'“Primero identificamos país, moneda y banco destino; con eso sabemos qué código internacional corresponde y qué datos debe llevar la orden.”',
    warning:'Los horarios y tiempos de abono del manual 2022 deben verificarse en la guía actual.'
  });

  // Tema práctico final para estudiar rutas, no solo definiciones.
  if(!guideTopics.some(t=>t.id==='rutas-cuc')){
    guideTopics.push({
      id:'rutas-cuc',title:'Rutas CUC y diagnóstico de llamadas',level:'Bloque 22 · Examen + piso',source:'Manual Inbound Banca Remota diciembre 2022',
      intro:'Aquí practicas lo que harás de verdad: escuchar al cliente, entrar a CCD/CUC, encontrar el motivo, interpretarlo y explicarlo sin inventar.',
      related:['CUC','CCD','Movimientos Declinados','MC30','TRIAD','Saldo retenido','Cheque devuelto','SPEI','sondeo'],
      sections:[
        {t:'Cómo entrar y buscar en CUC',easy:'No tienes que memorizar todo el banco: tienes que saber encontrar la respuesta correcta rápido.',analogy:'Como Google, pero del banco: si preguntas bien, llegas al proceso correcto.',body:`<p><strong>Ruta del manual 2022:</strong> ${routeGeneral}</p><p><strong>Regla para buscar:</strong> usa producto + problema. Ejemplos: “TDC rechazo TRIAD”, “TDD bloqueo”, “cheque devuelto”, “saldo retenido”, “SPEI no recibido”.</p>`,memorize:['CUC se busca desde Entorno colaborativo.','Guía de Banquero Remoto → Guía del servicio concentra procesos.','CCD es la pantalla prioritaria para llamadas Inbound según el manual.','Buscar producto + intención/problema es más rápido que una frase enorme.'],exam:'En el examen, primero identifica la familia del proceso; no memorices enlaces viejos.'},
        {t:'Caso maestro: TDC no puede comprar',easy:'Primero comprueba si existe un movimiento declinado y lee el motivo. Ese motivo manda el diagnóstico.',analogy:'Es como un auto que no arranca: no dices “es la batería” hasta leer qué indicador está encendido.',call:'“Oiga, desde ayer no puedo comprar nada con mi tarjeta de crédito.”',body:'<p><strong>Secuencia del manual:</strong> CCD → Quiero → Movimientos Declinados → seleccionar intento → revisar motivo → signo de admiración → si necesitas ampliar, catálogo MC30 en CUC.</p>',check:['Confirmar que es TDC.','Localizar intentos declinados.','Leer motivo exacto.','Revisar estatus de tarjeta y línea disponible.','Si aparece TRIAD, identificar cuál.','Dar el diálogo/solución del proceso vigente.'],signals:['SOBREGIRO TRIAD = excede línea disponible.','INSUF. BH TRIAD = score de comportamiento insuficiente.','MOROSIDAD TRIAD = mora/quita en algún producto.','TRIAD RESTRICCIÓN = uso parcial limitado.','SEGMENTO TRIAD = uso limitado; posible Soluciones de Pago.'],say:'“Ya localicé el intento. No se está rechazando por una falla de la terminal; el sistema marca una restricción específica en su crédito. Le explico qué significa y qué alternativa indica el proceso.”',warning:'NO digas “pague X y mañana queda desbloqueada” si el sistema/CUC no lo confirma.'},
        {t:'Cómo interpretar TRIAD sin inventar',easy:'TRIAD no es una sola causa: es una familia de estrategias/restricciones asociadas al comportamiento y uso del crédito.',body:'<p>El manual relaciona TRIAD con línea disponible, Behavior Score, mora/quitas, porcentaje de restricción y segmento. También enseña Tren de pagos, Portafolio y Nodo como indicadores para entender la situación financiera/estrategia de la TDC.</p>',memorize:['Tren de pagos = historial de pagos/moras de los últimos 12 meses en el manual.','Behavior Score = calificación según manejo del crédito y hábitos de pago.','Portafolio = clasificación para aplicar estrategias.','Nodo = indicador dinámico que puede limitar el porcentaje de uso.'],warning:'Los rangos de Behavior, nodos y porcentajes de 2022 son históricos; consulta tablas actuales.'},
        {t:'Caso: cliente pagó pero sigue restringido',easy:'Un pago aplicado no significa que toda restricción de riesgo desaparezca en ese momento.',call:'“Ya pagué, ¿por qué sigue sin pasar mi tarjeta?”',body:'<p>Revisa pago aplicado, pago mínimo, PPNGI, mora y después el rechazo actual. Si el rechazo es TRIAD, explica el motivo que hoy muestra el sistema. El manual indica que ciertas restricciones permanecen hasta mejorar el comportamiento/historial; no establece que un pago aislado libere automáticamente cualquier TRIAD.</p>',check:['¿El pago ya está aplicado?','¿Cubrió mínimo/PPNGI o solo abonó?','¿Quedó saldo vencido?','¿Cuál rechazo aparece AHORA?','¿Existe mora en otro producto?'],say:'“Veo que su pago ya se registró. Sin embargo, la compra sigue mostrando una restricción de crédito; esta no necesariamente se elimina con un solo abono. Le indico lo que marca el proceso actual para este motivo.”'},
        {t:'Caso: TDD con bloqueo',easy:'En débito, tener saldo no garantiza que la cuenta esté operable: primero revisa el bloqueo.',call:'“Tengo dinero pero mi débito no me deja hacer nada.”',body:'<p>Manual 2022: revisar CCD y la Matriz de bloqueos en “Ejecuta” o Auxiliares. Las familias más citadas son inactividad/Art. 61, nivel de cuenta/expediente y prevención de fraudes.</p>',check:['Estatus de cuenta','Código de bloqueo','Disponible','Nivel/expediente','Operación que originó revisión','Canal requerido para resolver'],say:'“Sí hay saldo, pero la cuenta presenta un bloqueo. Voy a validar qué tipo es, porque el requisito para retirarlo cambia según el motivo.”'},
        {t:'Caso: cargo retenido',easy:'Si está retenido, afecta disponible aunque todavía no sea un cargo final.',call:'“Me cobraron y no aparece en mi estado.”',body:'<p>CCD → Saldo retenido → revisar clave, fechas, importe inicial, importe pendiente y estatus. CUC → Consulta y liberación de cargos retenidos por compras en TDC y TDD.</p>',say:'“El monto está retenido, no aplicado todavía. Por eso reduce su disponible, pero aún no es el cargo final del estado de cuenta.”'},
        {t:'Caso: cheque de otro banco',easy:'Reflejado en saldo no significa disponible. Primero pasa por validación/compensación.',call:'“Ya veo el depósito, ¿por qué no puedo usarlo?”',body:'<p>CCD → Saldo buen cobro. Si se devuelve: movimiento → clave CD → motivo en CUC/Auxiliares. Nunca confirmes disponibilidad solo porque el saldo se vea reflejado.</p>',say:'“El cheque aún está en validación con el banco emisor; por eso puede verse reflejado pero todavía no estar disponible.”'},
        {t:'Caso: “no reconozco”',easy:'No abras fraude por reflejo. Primero identifica qué movimiento es y cómo ocurrió.',call:'“No reconozco este cargo.”',body:'<p>El manual insiste en sondear porque puede ser duplicado, error de App, cargo recurrente o fraude. Una tipificación incorrecta puede provocar bloqueo innecesario y retrasar la aclaración.</p>',check:['Importe/fecha/comercio','Canal','Adicionales','Suscripciones','Duplicados','Datos compartidos','Robo de teléfono/alertas no reconocidas'],say:'“Antes de bloquear o levantar la aclaración, voy a confirmar exactamente qué movimiento es y cómo aparece.”'},
        {t:'Regla de oro para el examen',easy:'No estudies solo “qué significa”. Estudia: dónde lo busco → qué dato miro → qué significa → qué digo → qué NO prometo.',body:'<p><strong>Plantilla mental:</strong> 1) producto, 2) intención, 3) sondeo, 4) autenticación vigente cuando aplique, 5) CCD, 6) código/estatus, 7) CUC/mapa, 8) explicación al cliente, 9) siguiente paso, 10) cierre.</p>',memorize:['PRODUCTO → PROBLEMA → ESTATUS → CÓDIGO → CUC → EXPLICACIÓN.','El código/estatus del sistema vale más que tu primera hipótesis.','El CUC te dice el tratamiento; tú debes saber llegar al proceso correcto.','No prometas desbloqueos, bonificaciones o tiempos que el proceso no garantiza.']}
      ]
    });
  }
})();