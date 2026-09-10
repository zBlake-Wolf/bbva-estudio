// v20 · Complementos puntuales de certificación sobre la ruta v3.
(function(){
  if(typeof guideTopics==='undefined' || !Array.isArray(guideTopics)) return;

  const restrictions=guideTopics.find(t=>t.id==='restricciones');
  if(restrictions && !restrictions.sections.some(s=>/cancelaci[oó]n por inactividad/i.test(s.t))){
    restrictions.sections.push({
      t:'Cancelación por inactividad',
      body:'<p><strong>Qué es:</strong> Terminación de una cuenta o servicio por falta de actividad cuando se cumplen las condiciones específicas de ese producto.</p><p><strong>Para qué sirve:</strong> Administrar productos sin uso conforme a contrato, regulación y políticas vigentes.</p><p><strong>Cuándo aparece:</strong> Cuando el cliente lleva tiempo sin operar y pregunta si su cuenta o servicio sigue activo.</p><p><strong>Cómo funciona / se usa:</strong> Primero se identifica el producto, saldo y estatus. Después se consulta la regla exacta de inactividad/cancelación aplicable; no existe un único plazo seguro para todos los productos.</p>',
      example:'Un cliente dice que no usa su cuenta desde hace meses. Antes de decir “ya se canceló”, se consulta si está activa, inactiva, bloqueada o cancelada y qué saldo tiene.',
      client:'“No uso mi cuenta desde hace mucho, ¿ya desapareció?”',
      advisor:'Separa inactividad, bloqueo y cancelación. Usa el documento/aviso del producto y el CUC vigente.',
      warning:'No memorices como universal el plazo de una cuenta o aviso antiguo; cambia por producto y vigencia.'
    });
  }

  const identifiers=guideTopics.find(t=>t.id==='identificadores');
  if(identifiers && !identifiers.sections.some(s=>/^TID/i.test(s.t))){
    identifiers.sections.push({
      t:'TID · Tarjeta instantánea / definitiva',
      body:'<p><strong>Qué es:</strong> Término usado en el manual/capacitación para una tarjeta entregada de forma inmediata dentro de ciertos procesos.</p><p><strong>Para qué sirve:</strong> Contar con un medio físico para operar el producto sin esperar un envío posterior, cuando el proceso aplica.</p><p><strong>Cuándo aparece:</strong> Reposición, entrega o procesos de tarjeta donde el sistema ofrece esa modalidad.</p><p><strong>Cómo funciona / se usa:</strong> El significado operativo exacto depende del producto y de la versión vigente del proceso.</p>',
      example:'El manual 2022 usa TID en escenarios de reposición de tarjeta.',
      client:'“¿Me pueden dar una tarjeta de inmediato?”',
      advisor:'Confirma en CUC qué productos y escenarios actuales admiten TID.',
      warning:'No memorices condiciones de 2022 como vigentes.'
    });
  }

  const tdc=guideTopics.find(t=>t.id==='tdc');
  if(tdc && !tdc.sections.some(s=>/Puntos BBVA/i.test(s.t))){
    tdc.sections.push({
      t:'Puntos BBVA y promociones',
      body:'<p><strong>Qué es:</strong> Programa de recompensas y promociones asociado a tarjetas elegibles.</p><p><strong>Para qué sirve:</strong> Obtener beneficios por compras y aprovechar campañas vigentes.</p><p><strong>Cuándo aparece:</strong> Consultas de puntos, compras, bonificaciones, promociones o alianzas comerciales.</p><p><strong>Cómo funciona / se usa:</strong> La acumulación, valor y elegibilidad dependen de la tarjeta, compra y campaña vigente.</p>',
      example:'Cliente pregunta por qué una compra no generó puntos o no recibió una promoción.',
      client:'“¿Por qué esta compra no me dio Puntos BBVA?”',
      advisor:'Revisa tarjeta, comercio, fecha, tipo de operación y términos de la promoción.',
      warning:'No memorices porcentajes o campañas antiguas; revisa la promoción vigente.'
    });
  }

  const debit=guideTopics.find(t=>t.id==='debito');
  if(debit && !debit.sections.some(s=>/corresponsal/i.test(s.t))){
    debit.sections.push({
      t:'Cajeros, practicajas y corresponsales',
      body:'<p><strong>Qué es:</strong> Canales físicos donde el cliente puede realizar determinadas operaciones sin acudir siempre a ventanilla.</p><p><strong>Para qué sirve:</strong> Retirar, depositar, pagar o consultar según el canal y producto.</p><p><strong>Cuándo aparece:</strong> Cuando el cliente pregunta dónde puede realizar una operación o reporta un problema en un canal físico.</p><p><strong>Cómo funciona / se usa:</strong> Cada canal tiene operaciones, horarios, límites y comisiones propios.</p>',
      example:'Un corresponsal puede permitir ciertas operaciones bancarias en un comercio afiliado.',
      client:'“¿Puedo hacer esto en una tienda o cajero?”',
      advisor:'Identifica la operación y revisa el canal compatible vigente.',
      warning:'Horarios, límites y comercios afiliados cambian; consúltalos actuales.'
    });
  }
})();