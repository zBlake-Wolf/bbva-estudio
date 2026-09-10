// v26 · TRIAD visible dentro de Tema 7 · Restricciones y bloqueos.
// Basado en Manual Inbound Banca Remota dic-2022. Para operación actual, confirmar CUC vigente.
(function(){
  if(typeof guideTopics==='undefined' || !Array.isArray(guideTopics)) return;
  const topic=guideTopics.find(t=>t.id==='restricciones');
  if(!topic) return;
  const has=(name)=>topic.sections.some(s=>String(s.t||'').toLowerCase()===name.toLowerCase());
  const add=(s)=>{if(!has(s.t)) topic.sections.push(s);};

  add({
    t:'Rechazos TRIAD',
    easy:'TRIAD es un grupo de rechazos/restricciones de TDC relacionado con la estrategia de riesgo y el comportamiento crediticio del cliente. Puede limitar una parte o todo el uso de la línea.',
    analogy:'Es como si te prestaran una bici, pero al ver que no la estás devolviendo bien te dicen: “sí sigue siendo tu préstamo, pero ahora solo puedes usarla bajo ciertas condiciones”.',
    bbva:'Cliente: “Tengo $20,000 disponibles y aun así no pasa mi compra”. En CCD aparece un rechazo TRIAD. Ahí ya no basta con mirar disponible: debes identificar QUÉ TRIAD aparece y qué significa.',
    body:'<p><strong>Qué es:</strong> El manual agrupa varios rechazos TRIAD para TDC. Sirven para indicar qué estrategia/restricción está afectando el uso de la línea.</p><p><strong>Dónde lo buscas:</strong> CCD → Ficha cliente → <b>Quiero</b> → <b>Movimientos Declinados</b> → localiza el intento → revisa el motivo → signo de admiración. Si necesitas ampliar: CUC → Guía de Banquero Remoto → Guía del servicio → <b>Consulta de restricciones de uso en tarjetas</b> → catálogo de rechazos MC30.</p>',
    breakdown:['SOBREGIRO TRIAD','INSUF. BH TRIAD','MOROSIDAD TRIAD','TRIAD RESTRICCIÓN','SEGMENTO TRIAD'],
    memorize:['TRIAD va en TDC/restricciones de uso.','Primero localiza Movimientos Declinados.','Después lee el motivo exacto; no adivines.','Un pago NO garantiza por sí solo quitar una restricción TRIAD.'],
    example:'La tarjeta tiene línea disponible, pero CCD muestra MOROSIDAD TRIAD: el problema no es simplemente “falta de dinero disponible”, sino una restricción vinculada al comportamiento crediticio.',
    client:'“¿Por qué no puedo comprar si todavía tengo crédito disponible?”',
    advisor:'Disponible suficiente no descarta TRIAD. Revisa el rechazo exacto y después la estrategia/indicadores relacionados.',
    warning:'TRIAD y sus tratamientos son operativos. Aprende las definiciones del manual, pero valida en CUC actual qué acción corresponde.'
  });

  add({
    t:'SOBREGIRO TRIAD',
    easy:'El cliente intentó usar más crédito del que realmente tenía disponible.',
    analogy:'Tienes $200 en la cartera y quieres pagar una cuenta de $260: simplemente te pasaste de lo que tenías disponible.',
    bbva:'Línea: $30,000 · usado: $29,000 · disponible aprox.: $1,000 · intenta compra de $2,500 → puede aparecer un rechazo por sobregiro según el caso.',
    body:'<p><strong>Qué significa en el manual:</strong> el cliente sobrepasó la línea de crédito disponible en su TDC.</p><p><strong>Qué revisar:</strong> línea total, saldo utilizado, disponible y el importe del intento.</p>',
    memorize:['Sobregiro = intenta usar más de lo disponible.','No es lo mismo que MOROSIDAD TRIAD.'],
    client:'“Pero mi tarjeta tiene una línea de $30,000.”',
    advisor:'La línea total no es lo mismo que el disponible actual.'
  });

  add({
    t:'INSUF. BH TRIAD',
    easy:'La estrategia detecta que el Behavior Score del cliente no es suficiente para permitir el uso normal de la tarjeta.',
    analogy:'Es como un videojuego que te pide cierto nivel para entrar a una zona: tienes la cuenta, pero tu puntuación actual no alcanza para esa condición.',
    bbva:'La TDC puede mostrar línea, pero el rechazo indica INSUF. BH TRIAD. Entonces debes pensar en Behavior Score/estrategia, no solo en saldo disponible.',
    body:'<p><strong>Qué significa en el manual:</strong> la tarjeta tiene una restricción porque el cliente no cuenta con el puntaje de <b>Behavior Score</b> suficiente.</p>',
    memorize:['BH = relacionarlo con Behavior Score en este material.','No le inventes al cliente cuánto score necesita; revisa la estrategia vigente.'],
    client:'“¿Entonces tengo mal historial?”',
    advisor:'Explica únicamente lo que el sistema/proceso permita. No inventes una calificación exacta ni una fecha automática de liberación.'
  });

  add({
    t:'MOROSIDAD TRIAD',
    easy:'Hay mora o una situación de pago problemática en algún producto del cliente, y eso puede restringir la TDC.',
    analogy:'Es como deber la renta de un cuarto y querer que el mismo casero te preste otro: aunque sea otro contrato, tu comportamiento anterior influye.',
    bbva:'El cliente dice: “esta tarjeta sí la pagué”. El manual indica que la mora puede estar en OTRO producto, por ejemplo otra tarjeta o crédito.',
    body:'<p><strong>Qué significa en el manual:</strong> el cliente presenta mora o quita en algún producto; puede ser incluso otra TDC o crédito.</p><p><strong>Qué revisar:</strong> no te quedes solo con la tarjeta que el cliente está intentando usar; valida el motivo y los productos que el proceso permita consultar.</p>',
    memorize:['La mora puede estar en otro producto.','Pagar una sola tarjeta no significa automáticamente que TRIAD desaparezca.'],
    client:'“¡Pero esta tarjeta está pagada!”',
    advisor:'Puede existir afectación por otro producto. Consulta el motivo exacto antes de explicarlo.',
    warning:'No prometas “pagando X se desbloquea hoy”. El tratamiento lo define el sistema/CUC vigente.'
  });

  add({
    t:'TRIAD RESTRICCIÓN',
    easy:'El banco permite usar solo una parte de la línea porque detecta tendencia a caer en mora.',
    analogy:'Te dejan usar la tarjeta, pero con “freno de mano”: no te quitan todo, solo reducen cuánto puedes usar.',
    bbva:'Línea nominal $100,000, pero la estrategia podría permitir usar solo una parte. La cifra exacta la determina el sistema/estrategia, no una regla que debas inventar.',
    body:'<p><strong>Qué significa en el manual:</strong> el uso de la tarjeta está restringido en un porcentaje porque el cliente tiene una tendencia a caer en mora.</p>',
    memorize:['Restricción TRIAD puede ser parcial.','Línea nominal ≠ monto que la estrategia permite usar.'],
    client:'“¿Por qué no puedo usar toda mi línea?”',
    advisor:'Busca el indicador/estrategia vigente y explica la restricción sin prometer porcentajes de memoria.'
  });

  add({
    t:'SEGMENTO TRIAD',
    easy:'Es una estrategia donde el uso de la TDC queda limitado; el manual señala que algunos casos pueden ir a Soluciones de Pago.',
    analogy:'Es como pasar de una fila normal a una fila especial porque tu caso necesita otro tratamiento.',
    bbva:'Si aparece SEGMENTO TRIAD, no lo trates como “simplemente falta de disponible”. Sigue la ruta indicada y verifica si el caso requiere atención especializada.',
    body:'<p><strong>Qué significa en el manual:</strong> el uso de la tarjeta está limitado y puede ser que el caso sea transferido a Soluciones de Pago.</p>',
    memorize:['Segmento TRIAD = uso limitado.','Puede implicar Soluciones de Pago según el proceso.'],
    client:'“¿Entonces ya no puedo usar mi tarjeta?”',
    advisor:'Consulta el nivel de limitación y la ruta vigente antes de responder en términos absolutos.'
  });

  add({
    t:'Behavior Score',
    easy:'Es una calificación interna basada en cómo maneja el cliente sus créditos y sus hábitos de pago.',
    analogy:'Como tu calificación de Uber, pero en vez de viajes refleja cómo has manejado tus créditos y pagos.',
    bbva:'Si un rechazo dice INSUF. BH TRIAD, Behavior Score se vuelve una pista central para entender la restricción.',
    body:'<p><strong>Definición del manual:</strong> calificación que otorga el banco a los clientes de acuerdo con el manejo de sus créditos y hábitos de pago.</p><p><strong>Dónde ampliar:</strong> el manual indica que en CUC → Auxiliares existe un listado de Behavior y clasificación por rangos.</p>',
    memorize:['Behavior Score = manejo de créditos + hábitos de pago.','No memorices rangos históricos como si fueran actuales.'],
    client:'“¿Cuál es mi score?”',
    advisor:'Usa únicamente la información y explicación permitida por el proceso vigente.'
  });

  add({
    t:'Nodo',
    easy:'Indicador dinámico que el manual usa para aplicar estrategias de uso en TDC.',
    analogy:'Como un control de volumen: la línea puede ser la misma, pero el sistema puede dejar usar solo cierto nivel.',
    bbva:'Ejemplo HISTÓRICO del manual: línea $100,000 + Nodo 95 → permitía usar $65,000. Úsalo solo para entender la lógica, no como tabla vigente.',
    body:'<p><strong>Qué es según el manual:</strong> indicador dinámico para aplicación de estrategias en las tarjetas.</p><p><strong>Idea clave:</strong> ayuda a entender por qué “tengo línea de $100,000” no necesariamente significa “hoy puedo usar los $100,000”.</p>',
    memorize:['Nodo modifica/condiciona el uso según estrategia.','La tabla 93–98 del PDF es de 2022: no memorizar como vigente.'],
    client:'“Mi línea dice una cantidad pero no me deja usarla toda.”',
    advisor:'Revisa el indicador vigente y el motivo exacto.'
  });

  add({
    t:'Portafolio',
    easy:'Número de clasificación que ayuda al banco a aplicar una estrategia a la tarjeta.',
    analogy:'Como poner una etiqueta a un expediente para saber qué reglas se le aplican.',
    bbva:'El manual muestra “Portafolio 66” en ciertos rechazos/restricciones. Eso es contexto de capacitación 2022, no una tabla para asumir vigente.',
    body:'<p><strong>Definición del manual:</strong> número de clasificación para aplicación de estrategias; dependiendo de la estrategia se determina si puede o no hacer uso de la tarjeta.</p>',
    memorize:['Portafolio = clasificación para estrategia.','No confundir con el saldo o la línea.'],
    advisor:'Si el sistema muestra un portafolio, consulta su tratamiento vigente en CUC.'
  });

  add({
    t:'Tren de pagos',
    easy:'Registro que muestra si los pagos de una TDC fueron puntuales o tuvieron mora durante los últimos meses.',
    analogy:'Como un historial de asistencias: ves mes por mes si cumpliste o faltaste.',
    bbva:'El manual 2022 dice que registra pagos puntuales y moras de la TDC durante los últimos 12 meses y usa letras para describir si existe una restricción de uso.',
    body:'<p><strong>Qué es según el manual:</strong> registro de pagos puntuales y moras de una TDC durante los últimos 12 meses.</p>',
    memorize:['Tren de pagos = historial reciente de puntualidad/mora.','Puede ayudar a entender restricciones de uso.'],
    client:'“Siempre he pagado, ¿por qué me restringieron?”',
    advisor:'No respondas por intuición; revisa los indicadores que muestra el sistema y el motivo del rechazo.'
  });

  add({
    t:'Estatus de bloqueos en tarjetas',
    easy:'Es el estado del plástico que CCD muestra y que puede explicar rápidamente por qué no funciona.',
    analogy:'Como revisar si una llave está activa, vencida o bloqueada antes de culpar a la puerta.',
    bbva:'El manual pone como ejemplo una tarjeta vencida: el estatus del plástico puede explicar por qué no se puede usar.',
    body:'<p><strong>Qué es según el manual:</strong> situación/estatus del plástico visible en Ficha cliente de CCD para identificar rápidamente causas de no uso.</p>',
    memorize:['Antes de asumir TRIAD, también revisa el estatus del plástico.','Rechazo y bloqueo no son la misma cosa.'],
    client:'“Mi tarjeta no sirve en ningún lado.”',
    advisor:'Revisa movimiento declinado + motivo + estatus del plástico.'
  });
})();