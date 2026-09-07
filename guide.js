const guideTopics=[
{
 id:'banco',icon:'🏦',title:'Desde cero: ¿qué es un banco?',level:'Base 1',source:'Concepto base + Manual 2022 · Anaquel de productos',intro:'Antes de aprender TDC, SPEI o CLABE, entiende la estructura: el banco administra cuentas, mueve dinero, ofrece crédito y otros productos. Un mismo cliente puede tener varias cosas a la vez.',memory:['Cuenta = donde se registra el dinero','TDD = usa dinero de la cuenta','TDC = usa crédito prestado','Producto = servicio contratado'],related:['Banco','Producto bancario','Cuenta','Saldo','TDD','TDC'],sections:[
  {t:'1. Banco, cliente y producto',body:'<p><strong>Banco:</strong> institución que administra depósitos, pagos, créditos y otros servicios financieros.</p><p><strong>Cliente:</strong> persona que tiene una relación con el banco.</p><p><strong>Producto:</strong> cada servicio contratado: cuenta, tarjeta, crédito, seguro, inversión, etc.</p>',example:'Luis puede tener una cuenta de débito con $8,000 y, aparte, una TDC con línea de $20,000. Son productos diferentes del mismo cliente.',client:'“Tengo una tarjeta y una cuenta, ¿no son lo mismo?”',advisor:'Primero identifica de qué producto está hablando; muchas llamadas se confunden por empezar a resolver sin ubicar el producto.'},
  {t:'2. Dinero propio vs dinero prestado',body:'<p>La primera división mental es muy simple: <strong>débito = normalmente dinero del cliente</strong>; <strong>crédito = dinero que el banco permite usar como préstamo</strong>.</p>',example:'TDD: tienes $3,000 y gastas $500 → quedan $2,500. TDC: línea $10,000 y compras $500 → debes $500 y quedan $9,500 de línea disponible.'}
 ]
},
{
 id:'identificadores',icon:'🔢',title:'Identificadores: cliente, contrato, cuenta, tarjeta y CLABE',level:'Base 2',source:'Manual 2022 · p.34 + conceptos de capacitación',intro:'Esta es una de las partes que más se confunden. No todos los números identifican lo mismo.',memory:['Cliente = persona','Contrato = relación/producto','Cuenta = cuenta bancaria','CLABE = 18 dígitos','Tarjeta ≠ cuenta'],related:['Número de cliente','Contrato','Número de cuenta','CLABE','Número de tarjeta','BIN','CVV','NIP','Token'],sections:[
  {t:'1. ¿Qué identifica cada cosa?',body:'<ul><li><strong>Número de cliente:</strong> identifica a la persona dentro del banco.</li><li><strong>Número de contrato:</strong> identifica una relación contractual/producto.</li><li><strong>Número de cuenta:</strong> identifica una cuenta bancaria.</li><li><strong>Número de tarjeta:</strong> identifica el plástico/tarjeta.</li><li><strong>CLABE:</strong> identificador de 18 dígitos usado en operaciones interbancarias.</li></ul>',example:'Si te van a transferir desde otro banco, normalmente te pueden pedir la CLABE; eso no significa que tu CLABE sea tu número de tarjeta.',client:'“¿Mi cuenta CLABE es otra cuenta distinta?”',advisor:'En el manual “Cuenta CLABE” aparece como encabezado del concepto. La CLABE es la clave de 18 dígitos asociada a la cuenta; no son dos tipos de CLABE.'},
  {t:'2. BIN, CVV, NIP y Token',body:'<p><strong>BIN:</strong> rango inicial de la tarjeta que ayuda a identificar emisor/producto. <strong>CVV:</strong> código de seguridad de la tarjeta. <strong>NIP:</strong> clave personal para determinadas operaciones. <strong>Token:</strong> clave de uso único para autorizar operaciones digitales.</p>',warning:'No los mezcles con datos para transferir: BIN, CVV, NIP y Token cumplen funciones distintas de la CLABE.'}
 ]
},
{
 id:'debito',icon:'💵',title:'Cuentas y tarjeta de débito',level:'Base 3',source:'Manual 2022 · cuentas con/sin chequera, bloqueos de débito y aclaraciones',intro:'En débito trabajas principalmente con recursos que ya están en la cuenta del cliente. La clave es distinguir saldo, disponible, retenciones, límites y bloqueos.',memory:['TDD = acceso a la cuenta','Saldo ≠ siempre disponible','Con chequera ≠ sin chequera','N2/N3/N4 = nivel de cuenta'],related:['TDD','Cuenta con chequera','Cuenta sin chequera','Saldo disponible','UDIS','Niveles de cuenta','Bloqueo'],sections:[
  {t:'1. Saldo y saldo disponible',body:'<p><strong>Saldo:</strong> cantidad registrada en el producto. <strong>Saldo disponible:</strong> cantidad que realmente puede usarse en ese momento.</p>',example:'Saldo $5,000; hay $1,000 retenidos → puede aparecer disponible $4,000.',client:'“Tengo dinero y aun así no me deja comprar.”',advisor:'No asumas falta de saldo. Revisa disponible, rechazo, límite, bloqueo, restricción o estatus del plástico.'},
  {t:'2. Cuentas con y sin chequera',body:'<p>Una cuenta <strong>con chequera</strong> permite emitir cheques además de los demás canales que correspondan. Una cuenta <strong>sin chequera</strong> no usa el cheque como medio de disposición.</p>'},
  {t:'3. Niveles de cuenta y UDIS',body:'<p>Los niveles de cuenta se relacionan con regulación, expediente y límites. Las <strong>UDIS</strong> son unidades cuyo valor en pesos cambia con el tiempo y pueden usarse para expresar límites.</p>',warning:'El PDF 2022 muestra ejemplos de N2 y UDIS, pero los límites exactos deben estudiarse en el CUC vigente, no memorizarse desde el documento viejo.'}
 ]
},
{
 id:'tdc',icon:'💳',title:'Tarjeta de crédito desde cero',level:'Base 4',source:'Manual 2022 · restricciones TDC, cascada, pagos, intereses y promociones',intro:'Una TDC es un crédito. La línea es el máximo autorizado, el saldo deudor es lo que se debe y el disponible es lo que todavía puede usarse.',memory:['TDC = préstamo','Línea = máximo autorizado','Disponible = línea que queda','Saldo deudor = deuda'],related:['TDC','Línea de crédito','Saldo deudor','Crédito disponible','Sobregiro','Revolvente'],sections:[
  {t:'1. Línea, utilizado y disponible',body:'<p><strong>Línea de crédito:</strong> máximo autorizado. <strong>Utilizado/saldo deudor:</strong> parte que ya se usó. <strong>Disponible:</strong> parte que todavía queda para usar.</p>',example:'Línea $20,000; compras $6,000 → debes $6,000 y quedan $14,000 disponibles.',client:'“Tengo una línea de $20,000, entonces tengo $20,000 míos.”',advisor:'Explícale que la línea es capacidad de crédito, no saldo de una cuenta de débito.'},
  {t:'2. Sobregiro y restricciones',body:'<p>Un intento puede rechazarse si supera lo disponible o si existe una restricción. El manual también describe indicadores internos de comportamiento crediticio y estrategias que pueden limitar el uso.</p>',warning:'Para una llamada real, la causa exacta del rechazo se consulta en el sistema/CUC actual; no se deduce solo por el saldo.'}
 ]
},
{
 id:'edc',icon:'📄',title:'Estado de cuenta, corte y fecha límite',level:'Base 5',source:'Manual 2022 · cascada de pagos, ejemplos de EDC y cálculo de intereses',intro:'El estado de cuenta es la fotografía del ciclo que cerró. Aquí se conectan compras, pago mínimo, PPNGI, intereses, promociones y saldos.',memory:['Corte = cierra periodo','Fecha límite = hasta cuándo pagar','EDC = movimientos del ciclo','Periodo abierto = después del corte'],related:['Estado de cuenta','Fecha de corte','Fecha límite','PPNGI','Pago mínimo','Revolvente'],sections:[
  {t:'1. Fecha de corte',body:'<p>Es el momento en que termina un ciclo y se factura lo correspondiente. Después comienza un nuevo periodo.</p>',example:'Corte día 10: las compras del ciclo cerrado aparecen en el EDC; una compra posterior pertenece al periodo abierto.'},
  {t:'2. Fecha límite de pago',body:'<p>Es la fecha máxima para cubrir el pago correspondiente del estado de cuenta.</p>',example:'Corte 10; fecha límite 30. No significan lo mismo.'},
  {t:'3. Envío de estado de cuenta',body:'<p>El PDF sí contempla aclaraciones por problemas con el <strong>envío del estado de cuenta</strong>, pero no desarrolla en estas páginas un flujo completo actualizado de envío.</p>',advisor:'Como tema de certificación, aprende qué documento solicita el cliente y usa el proceso vigente del CUC para canal, autenticación y envío.'}
 ]
},
{
 id:'pagostdc',icon:'🧮',title:'PPNGI, pago mínimo y cascada de pagos',level:'Intermedio 1',source:'Manual 2022 · pp.15–23',intro:'Esta es una de las piezas más importantes de TDC. El manual lo enseña con “cajas”: PPNGI → revolvente → capital diferido.',memory:['PPNGI = primera caja','Pago mínimo vive dentro del PPNGI','Revolvente = corte abierto','Capital diferido = promociones/saldos congelados'],related:['PPNGI','Pago mínimo','Cascada','Revolvente','Capital diferido','MSI'],sections:[
  {t:'1. PPNGI',body:'<p><strong>Pago Para No Generar Intereses:</strong> importe que se forma en el corte con compras a una exhibición, mensualidades de promociones y otros conceptos que correspondan. Es la primera caja de la cascada.</p>',example:'En el ejemplo del manual: compras normales $4,800 + primera mensualidad de Liverpool $3,000 = PPNGI $7,800.'},
  {t:'2. Pago mínimo',body:'<p>Es el importe mínimo requerido para mantener vigente la línea según las condiciones del crédito. Pagar únicamente el mínimo implica que queda deuda y se generan costos financieros conforme al producto.</p>',client:'“Si pago el mínimo, ¿ya pagué mi tarjeta?”',advisor:'No. Explícale que cubrió el mínimo requerido, pero no necesariamente el PPNGI ni el saldo total.'},
  {t:'3. Revolvente y capital diferido',body:'<p><strong>Revolvente:</strong> saldo del periodo abierto, aún no facturado, que cambia con cargos/abonos. <strong>Capital diferido:</strong> saldos de promociones o financiamientos que se irán incorporando con el tiempo.</p>'},
  {t:'4. Ejemplo de cascada',body:'<p>Manual: saldo $40,000; PPNGI $15,000; PM $5,000; revolvente $5,000; MSI $20,000. Si el cliente paga $18,000, primero consume los $15,000 del PPNGI y $3,000 pasan al revolvente.</p>',client:'“Pagué $18,000 y todavía debo.”',advisor:'La pregunta correcta no es solo “¿cuánto pagó?”, sino “¿cómo estaba compuesto su saldo y cómo cayó el abono en la cascada?”'}
 ]
},
{
 id:'tasas',icon:'📈',title:'Intereses, tasa, anualidad, comisión, IVA y CAT',level:'Intermedio 2',source:'Manual 2022 · pp.23–25 + CAT como concepto financiero general',intro:'Estas palabras suelen mezclarse. La clave es separar porcentaje, costo financiero y comisión.',memory:['Tasa = porcentaje','Interés = costo en dinero','Anualidad = comisión','CAT = indicador global de costo'],related:['Tasa','Interés','Anualidad','Comisión','IVA','CAT','Saldo promedio'],sections:[
  {t:'1. Tasa vs interés',body:'<p><strong>Tasa:</strong> porcentaje usado para calcular el costo del crédito. <strong>Interés:</strong> dinero que resulta del financiamiento según saldo, tiempo y condiciones.</p>',example:'Una tasa anual no significa que cada día se cobre ese porcentaje completo; es una referencia anual y el cálculo del producto usa el periodo correspondiente.'},
  {t:'2. Saldo promedio',body:'<p>El manual explica que, cuando no se cubre el PPNGI, los intereses ordinarios se calculan sobre el <strong>saldo promedio</strong>, no simplemente sobre “lo que faltó pagar”.</p>',client:'“Me faltaron $1,000 del PPNGI, ¿solo me cobran interés sobre esos $1,000?”',advisor:'No lo afirmes. El manual enseña cálculo sobre saldo promedio; el monto exacto se confirma en el EDC/cálculo vigente.'},
  {t:'3. Anualidad, comisión e IVA',body:'<p><strong>Anualidad:</strong> comisión asociada al producto según contrato. <strong>Comisión:</strong> cobro por un servicio/producto. <strong>IVA:</strong> impuesto que puede acompañar ciertos intereses o comisiones.</p>',warning:'No memorices porcentajes, cuotas o montos del manual 2022 como actuales.'},
  {t:'4. CAT',body:'<p><strong>CAT (Costo Anual Total):</strong> indicador que ayuda a comparar el costo total de un crédito considerando más elementos que únicamente la tasa.</p>',warning:'El PDF compartido no desarrolla una lección de CAT; esta definición es apoyo conceptual general.'}
 ]
},
{
 id:'msi',icon:'🛍️',title:'Meses sin intereses, promociones y Puntos BBVA',level:'Intermedio 3',source:'Manual 2022 · pp.9–14',intro:'Una compra a MSI se divide en parcialidades. Además, las promociones dependen de comercio, vigencia, monto y canal.',memory:['MSI = compra dividida','Parcialidad ≠ compra total','Promoción tiene condiciones','Pago adelantado ≠ siguiente parcialidad automáticamente'],related:['MSI','Parcialidad','Promoción','Puntos BBVA','Pago anticipado'],sections:[
  {t:'1. Meses sin intereses',body:'<p>El alta a MSI puede venir de ofertas de BBVA o alianzas comerciales. El manual indica revisar vigencia, monto mínimo y canal de compra.</p>',example:'Compra $12,000 a 12 MSI → $1,000 por parcialidad, bajo las condiciones de la promoción.'},
  {t:'2. Pago adelantado a promoción',body:'<p>El manual aclara que un pago adelantado a una promoción <strong>no necesariamente cubre la siguiente parcialidad</strong>, salvo la liquidación/condiciones correspondientes.</p>',client:'“Adelanté dinero a mis meses, ¿por qué me salió otra mensualidad?”',advisor:'Revisa cómo se aplicó el anticipo y la promoción; no asumas que el siguiente pago desaparece.'},
  {t:'3. Puntos BBVA',body:'<p>El manual describe Puntos BBVA como un programa ligado a compras elegibles con TDC y contempla acumulación, vigencia, redención y ajustes.</p>',warning:'Porcentajes de acumulación y reglas específicas del 2022 pueden haber cambiado; usa CUC vigente para cifras.'}
 ]
},
{
 id:'rechazos',icon:'🚫',title:'Rechazos, restricciones y bloqueos',level:'Intermedio 4',source:'Manual 2022 · pp.3–8 y p.31',intro:'Que una tarjeta “no pase” no significa automáticamente que no tenga saldo. Puede existir rechazo, límite, bloqueo, restricción, problema del plástico o de la terminal.',memory:['Rechazo = operación declinada','Bloqueo = limita uso','Restricción ≠ cancelación','Revisa motivo exacto'],related:['Rechazo','Restricción','Bloqueo','Sobregiro','Límites de uso','Reposición'],sections:[
  {t:'1. Compra rechazada',body:'<p>El manual indica consultar movimientos declinados y el motivo de rechazo. Si no aparece rechazo, contempla fallas en terminal/canal o posible daño físico.</p>',client:'“Tengo $10,000 disponibles y no pasa una compra de $1,000.”',advisor:'Saldo suficiente no descarta una restricción. Revisa el movimiento y motivo real antes de explicar.'},
  {t:'2. Bloqueo vs cancelación',body:'<p><strong>Bloqueo:</strong> el producto sigue existiendo, pero se limita su uso. <strong>Cancelación:</strong> termina el producto/servicio según el proceso.</p>'},
  {t:'3. Modificación de límites',body:'<p>El manual incluye procesos para límites de uso de tarjetas por distintos canales.</p>',warning:'Montos máximos, canales y reglas del 2022 deben confirmarse en CUC actual.'}
 ]
},
{
 id:'autenticacion',icon:'🛡️',title:'Autenticación y MAU',level:'Clave para llamadas',source:'Manual 2022 · biometría (p.45) + tema actual de capacitación; MAU no se define en el PDF',intro:'Autenticar significa verificar que realmente estás atendiendo al cliente autorizado antes de consultar o ejecutar operaciones sensibles.',memory:['Autenticar = comprobar identidad','Biometría = rostro/huella/voz','MAU = flujo autorizado actual','No improvisar seguridad'],related:['Autenticación','MAU','Biometría','Huella de voz','Huella dactilar','Reconocimiento facial'],sections:[
  {t:'1. ¿Qué es autenticación?',body:'<p>Es la validación de identidad antes de realizar determinadas consultas u operaciones. El manual 2022 sí explica medios biométricos como rostro, huella y voz.</p>',example:'Un cliente pide una operación sensible: primero debe pasar el nivel de autenticación que corresponda al proceso vigente.'},
  {t:'2. ¿Qué es MAU?',body:'<p>En tu capacitación actual, MAU se usa como el <strong>Manual de Autenticación Unificado</strong>. El PDF 2022 compartido no desarrolla MAU con ese nombre.</p>',warning:'Los factores exactos, excepciones y pasos de autenticación deben estudiarse en el MAU/CUC vigente. Esta guía no intenta reconstruirlos.'},
  {t:'3. Como asesor',body:'<p>Tu regla mental: <strong>identifica solicitud → determina autenticación requerida → aplica flujo autorizado → recién después opera o informa lo que corresponda.</strong></p>',client:'“Solo dígame un dato rápido, no quiero validar nada.”',advisor:'La urgencia del cliente no sustituye el nivel de autenticación que marque el proceso.'}
 ]
},
{
 id:'fraude',icon:'🎣',title:'Fraudes y seguridad digital',level:'Clave para llamadas',source:'Manual 2022 · p.7 y aclaraciones p.50–54',intro:'El manual enseña varias modalidades de fraude y recalca que el asesor debe sondear antes de clasificar un caso como fraude.',memory:['Phishing = correo/web','Smishing = SMS','Vishing = llamada','Spoofing = remitente enmascarado','Pharming = redirección'],related:['Phishing','Smishing','Vishing','Spoofing','Pharming','Movimiento no reconocido'],sections:[
  {t:'1. Modalidades',body:'<ul><li><strong>Phishing:</strong> correo o sitio falso.</li><li><strong>Smishing:</strong> mensaje de texto falso.</li><li><strong>Vishing:</strong> llamada fraudulenta.</li><li><strong>Spoofing:</strong> hacer parecer legítimo el número/remitente.</li><li><strong>Pharming:</strong> redirección/manipulación hacia sitio falso.</li></ul>'},
  {t:'2. Sondeo antes de etiquetar fraude',body:'<p>El manual advierte que muchos clientes dicen “no reconozco” cuando pudo tratarse de duplicidad, operación realizada dos veces o algún otro escenario.</p>',client:'“No reconozco un cargo.”',advisor:'Pregunta qué ve, fecha, comercio, importe, estado del movimiento y si realizó algo similar. Si realmente existe sospecha de fraude, sigue el proceso de seguridad vigente.'},
  {t:'3. Prioridad',body:'<p>Si hay datos comprometidos, robo del teléfono, activaciones desconocidas o movimientos digitales no reconocidos, la prioridad es seguridad y el flujo autorizado.</p>',warning:'No improvises bloqueos ni autenticación: sigue MAU/CUC actual.'}
 ]
},
{
 id:'movimientos',icon:'⏳',title:'Movimientos en tránsito, retenciones y cargos',level:'Intermedio 5',source:'Manual 2022 · p.26 + cascada/aclaraciones',intro:'Una compra puede estar autorizada sin estar todavía posteada definitivamente. Por eso “me descontaron” no siempre significa “ya se cargó definitivamente”.',memory:['Retención = reduce disponible','Posteado = cargo en EDC','En tránsito = procesándose','Duplicado real requiere comparar estados'],related:['Saldo retenido','Movimiento en tránsito','Cargo','Cargo duplicado','Devolución'],sections:[
  {t:'1. Retención',body:'<p>El manual define las retenciones como operaciones que restan saldo disponible pero todavía no se reflejan en el estado de cuenta.</p>',example:'Compra $1,000 → baja el disponible; mientras el comercio termina el cobro puede aparecer como retenida.'},
  {t:'2. Movimiento en tránsito',body:'<p>Es una operación pendiente de completar o contabilizar definitivamente. El manual señala que ciertas compras en tránsito no se consideran todavía dentro del revolvente.</p>'},
  {t:'3. ¿Doble cargo?',body:'<p>Antes de tratarlo como duplicidad, compara si ambos movimientos están aplicados o si uno es retención/pendiente.</p>',client:'“Me cobraron dos veces.”',advisor:'Primero compara estatus; luego elige la tipología correcta.'}
 ]
},
{
 id:'spei',icon:'🔁',title:'Transferencias, SPEI y CEP',level:'Intermedio 6',source:'Manual 2022 · pp.34–35',intro:'SPEI permite transferencias entre instituciones. La CLABE identifica la cuenta; la clave de rastreo identifica la operación; el CEP es el comprobante electrónico del pago.',memory:['CLABE = cuenta','SPEI = sistema','Clave de rastreo = operación','CEP = comprobante','Estatus ≠ todos significan lo mismo'],related:['SPEI','CEP','CLABE','Clave de rastreo','Referencia','Beneficiario','Ordenante'],sections:[
  {t:'1. Ordenante y beneficiario',body:'<p><strong>Ordenante:</strong> quien envía. <strong>Beneficiario:</strong> quien recibe. En un SPEI participan además el banco emisor, el sistema y el banco receptor.</p>',example:'Luis BBVA → SPEI → Ana en otro banco.'},
  {t:'2. CEP y rastreo',body:'<p>El manual presenta el CEP como comprobante electrónico de pago emitido con información del sistema. Para rastrear una operación se usa la clave de rastreo o referencia junto con otros datos.</p>',client:'“Mandé el dinero y no llegó.”',advisor:'No respondas solo “espere”. Revisa datos y estado: en proceso, liquidado, rechazado, devuelto, no encontrado, etc., según la consulta vigente.'},
  {t:'3. Estados SPEI',body:'<p><strong>En proceso:</strong> aún procesándose. <strong>Liquidado:</strong> procesado por SPEI. <strong>Rechazado:</strong> no aceptado. <strong>Devuelto:</strong> regresó al ordenante. <strong>No encontrado:</strong> no aparece con esos criterios en ese momento.</p>',warning:'Los horarios y límites del manual 2022 son información mutable; revisa datos actuales.'}
 ]
},
{
 id:'opi',icon:'🌎',title:'OPI y transferencias internacionales',level:'Intermedio 7',source:'Manual 2022 · pp.36–37',intro:'Una OPI es una orden de pago internacional. Aquí aparecen códigos y bancos intermediarios que no se usan igual que en una transferencia nacional.',memory:['OPI = pago internacional','SWIFT/BIC = identifica banco','ABA = EE.UU.','IBAN = cuenta internacional en países que lo usan','Corresponsal = intermediario'],related:['OPI','SWIFT','BIC','ABA','IBAN','Transit','Banco corresponsal','Divisa'],sections:[
  {t:'1. SWIFT/BIC, ABA e IBAN',body:'<p><strong>SWIFT/BIC:</strong> código alfanumérico que identifica una institución financiera internacionalmente. <strong>ABA:</strong> identificador usado en EE.UU. <strong>IBAN:</strong> identificador de cuenta utilizado en determinados países.</p>'},
  {t:'2. Banco corresponsal',body:'<p>Puede intervenir como intermediario entre el banco de origen y el banco final.</p>',client:'“Mandé dólares y llegaron menos.”',advisor:'Revisa divisa, tipo de cambio, comisiones/intermediarios y datos del envío; no asumas una causa sin ver la operación.'},
  {t:'3. Información vieja',body:'<p>El manual contiene horarios, costos y códigos específicos de 2022.</p>',warning:'Para certificación actual, conserva los conceptos pero verifica tarifas, horarios, códigos y niveles de servicio vigentes.'}
 ]
},
{
 id:'cheques',icon:'🧾',title:'Cheques desde cero',level:'Intermedio 8',source:'Manual 2022 · pp.38–40',intro:'Un cheque es un título de crédito mediante el cual se ordena al banco pagar una cantidad con cargo a los recursos de una cuenta.',memory:['Cheque = orden de pago','Nominativo = beneficiario','Negociable = puede endosarse','Cruzado = depósito, no efectivo','Cheque externo puede estar en validación'],related:['Cheque','Endoso','Cheque nominativo','Cheque cruzado','Cheque de caja','Protección','Suspensión','Saldo buen cobro'],sections:[
  {t:'1. Tipos básicos',body:'<ul><li><strong>Al portador:</strong> no señala beneficiario específico.</li><li><strong>Certificado:</strong> el banco asegura existencia de recursos conforme a la modalidad.</li><li><strong>Cruzado:</strong> se abona mediante depósito y no se cobra en efectivo.</li><li><strong>De caja:</strong> expedido por la institución, a nombre de una persona determinada y no negociable según el manual.</li><li><strong>Nominativo:</strong> señala beneficiario.</li></ul>'},
  {t:'2. Endoso, negociable y no negociable',body:'<p><strong>Endoso:</strong> transmisión de derechos cuando el cheque lo permite. El manual distingue cheques negociables, que pueden endosarse, y no negociables, que no.</p>'},
  {t:'3. Protección y suspensión',body:'<p>El manual contempla protección/liberación para autorizar el pago de cheques y suspensión para evitar definitivamente su pago por situaciones como robo/extravío.</p>',warning:'El procedimiento exacto actual debe seguir CUC.'},
  {t:'4. Cheque de otro banco',body:'<p>Un depósito con cheque de otro banco puede verse reflejado sin estar todavía disponible, porque pasa por validación/cámara de compensación.</p>',client:'“Ya veo el dinero, ¿por qué no puedo retirarlo?”',advisor:'No confirmes disponibilidad solo porque aparece en saldo. Revisa estatus/saldo buen cobro y proceso vigente.'}
 ]
},
{
 id:'servicios',icon:'🧾',title:'Pagos de servicios, domiciliaciones y cargos recurrentes',level:'Intermedio 9',source:'Manual 2022 · pp.49–54 y crédito al consumo p.50',intro:'No todos los cobros automáticos son lo mismo. También hay pagos de servicios que pueden requerir aclaración si están duplicados, mal aplicados o no aplicados.',memory:['Pago de servicio = operación a proveedor','Domiciliación = cobro automático autorizado','Cargo recurrente = comercio cobra periódicamente','Duplicado ≠ no reconocido'],related:['Pago de servicios','CIE','Domiciliación','Cargo recurrente','Pago no aplicado'],sections:[
  {t:'1. Pago de servicios',body:'<p>El manual contempla pagos CIE y aclaraciones por pagos duplicados, con datos incorrectos o no aplicados por la empresa.</p>',warning:'El plazo exacto del manual 2022 no debe asumirse como vigente.'},
  {t:'2. Domiciliación',body:'<p>Es una autorización para realizar cobros automáticos conforme a las condiciones del servicio/producto.</p>',client:'“Mi préstamo estaba domiciliado y no se cobró.”',advisor:'El manual indica revisar si había saldo suficiente y si la cuenta tenía bloqueos en la fecha del pago.'},
  {t:'3. Cargo recurrente',body:'<p>Es un cobro periódico autorizado, comúnmente iniciado por un comercio/servicio.</p>',client:'“Quiero que ya no me cobren la suscripción.”',advisor:'Distingue cancelación del servicio con el comercio, bloqueo de futuros cargos y aclaración de un cargo ya aplicado, según el caso y CUC.'}
 ]
},
{
 id:'portabilidad',icon:'💼',title:'Portabilidad de nómina',level:'Intermedio 10',source:'Manual 2022 · p.53',intro:'La portabilidad permite que recursos de nómina recibidos originalmente en una institución se transfieran a la cuenta elegida por el cliente conforme al servicio.',memory:['Banco origen ≠ banco destino','No recibida = nunca llegó ese pago','Intermitente = antes llegaba y dejó de llegar','No reconocida = cliente niega solicitud'],related:['Portabilidad','Nómina','Banco de origen','Intermitente'],sections:[
  {t:'1. Flujo mental',body:'<p>Patrón deposita en banco de origen → servicio de portabilidad → cuenta destino del cliente.</p>',example:'La empresa no necesariamente cambió de banco; la portabilidad mueve el depósito después del abono de origen.'},
  {t:'2. Casos del manual',body:'<p>El PDF distingue portabilidad <strong>no reconocida</strong>, <strong>no recibida</strong> e <strong>intermitente</strong>.</p>',client:'“Siempre me llegaba a BBVA y esta quincena no.”',advisor:'Primero confirma que sea portabilidad, luego identifica si es alta nueva, no recibida o intermitente.'}
 ]
},
{
 id:'canales',icon:'📱',title:'App, banca digital, ATM, practicajas y alertas',level:'Intermedio 11',source:'Manual 2022 · pp.41–49',intro:'Los canales cambian el tipo de operación, límites, autenticación y aclaración. La guía 2022 dedica un bloque completo a canales digitales, alertas, biometría y cajeros/practicajas.',memory:['App = canal digital','ATM = cajero','Practicaja = operaciones asistidas por equipo','Alertas = avisos de actividad','Token = autorización digital'],related:['App BBVA','BBVA.mx','ATM','Practicaja','Alertas','Token','Biometría'],sections:[
  {t:'1. Canales digitales',body:'<p>El manual describe transferencias, pagos, retiros sin tarjeta, ofertas, inversiones y otras operaciones desde canales digitales.</p>',warning:'Funciones, compatibilidad, límites y pantallas pueden haber cambiado desde 2022.'},
  {t:'2. Alertas',body:'<p>Son avisos de actividad de las cuentas mediante canales como push, SMS o correo según la contratación/configuración.</p>'},
  {t:'3. ATM y practicajas',body:'<p>El manual diferencia aclaraciones de retiros, depósitos y pagos según el dispositivo/canal.</p>',client:'“El cajero no me entregó todo el efectivo.”',advisor:'Identifica si fue ATM o practicaja, tipo de operación y si corresponde aclaración por ese canal.'}
 ]
},
{
 id:'aclaraciones',icon:'🎧',title:'Aclaraciones y sondeo: pensar como asesor',level:'Clave para llamadas',source:'Manual 2022 · pp.50–55',intro:'El manual es muy claro: el cliente no siempre describe bien el problema. Tu trabajo es sondear antes de abrir o clasificar una aclaración.',memory:['Sondear antes de clasificar','Producto → movimiento → estatus','No reconocido ≠ fraude automático','Folio identifica gestión'],related:['Aclaración','Sondeo','No reconocido','Duplicado','Devolución','Folio','Dictamen'],sections:[
  {t:'1. ¿Qué es sondear?',body:'<p>Hacer preguntas para entender qué pasó realmente: producto, fecha, importe, comercio/canal, estatus, qué esperaba el cliente y qué ve en sistema.</p>',client:'“Me cobraron de más.”',advisor:'Eso todavía no es una tipología. Puede ser anualidad, interés, retención, duplicado, MSI, cascada, comisión, etc.'},
  {t:'2. No reconocido',body:'<p>Antes de clasificar fraude, el manual pide descartar escenarios como operación realizada dos veces o errores de interpretación.</p>'},
  {t:'3. Folio y dictamen',body:'<p><strong>Folio:</strong> identifica la aclaración/gestión. <strong>Dictamen:</strong> resolución de la aclaración según la investigación.</p>',warning:'Requisitos documentales y plazos deben consultarse en el proceso actual.'}
 ]
},
{
 id:'datos',icon:'✏️',title:'Actualización de datos: correo, teléfono, domicilio y otros',level:'Tema de certificación',source:'Manual 2022 · p.53 menciona modificación de datos; flujo completo actual no está desarrollado',intro:'Tu certificación incluye actualización de datos. El PDF 2022 sí menciona modificación/corrección de datos en servicios, pero no entrega aquí un mapa completo y vigente para todos los datos.',memory:['Dato personal ≠ dato de producto','Autenticación primero','Canal depende del dato','CUC actual manda'],related:['Modificación de datos','Correo','Teléfono','Domicilio','RFC'],sections:[
  {t:'1. Qué debes entender',body:'<p>Actualizar datos significa corregir o cambiar información registrada del cliente o de un producto, por ejemplo dirección de envío o datos asociados.</p>',client:'“Quiero cambiar mi teléfono/correo/dirección.”',advisor:'Identifica qué dato quiere modificar, en qué producto/contexto y qué nivel de autenticación/canal exige el CUC vigente.'},
  {t:'2. Lo que sí aparece en el PDF',body:'<p>El manual menciona corrección de nombre, dirección para envío y datos como RFC/homoclave en ciertos servicios de TDC.</p>',warning:'No extrapoles ese proceso a teléfono, correo o domicilio general sin revisar la guía actual.'}
 ]
},
{
 id:'inactividad',icon:'😴',title:'Inactividad y cancelaciones',level:'Tema de certificación',source:'Manual 2022 · p.6, pp.29–30 y p.47',intro:'El manual muestra varios efectos de inactividad: bloqueo/restricción de cuentas y baja de servicios digitales. También tiene una sección específica de cancelación de TDC.',memory:['Inactividad puede bloquear','Servicio digital ≠ cuenta','Cancelar TDC requiere revisar condiciones','Bloqueo ≠ cancelación'],related:['Inactividad','Cancelación','Bloqueo','TDC','Cuenta'],sections:[
  {t:'1. Inactividad en cuenta',body:'<p>El manual 2022 presenta un caso de cuenta con inactividad prolongada dentro de la matriz de bloqueos.</p>',warning:'El plazo exacto y el tratamiento vigente deben confirmarse en CUC/legislación actual.'},
  {t:'2. Inactividad en canales',body:'<p>El PDF también muestra estatus por inactividad de canales digitales, que no significa necesariamente que la cuenta bancaria esté cancelada.</p>'},
  {t:'3. Cancelación de TDC',body:'<p>El manual 2022 indica revisar saldo, aclaraciones, movimientos pendientes y comisiones antes del flujo de cancelación.</p>',client:'“Quiero cancelar mi tarjeta.”',advisor:'No lo confundas con bloqueo. Valida condiciones actuales y canaliza conforme al proceso vigente.'}
 ]
},
{
 id:'fallecimiento',icon:'🕊️',title:'Fallecimiento del titular',level:'Tema de certificación',source:'Tema actual indicado en capacitación; no localizado como módulo en el PDF 2022',intro:'Este tema sí está en tu lista de certificación, pero el PDF que compartiste no desarrolla un procedimiento de fallecimiento. Por eso aquí solo dejamos la lógica conceptual y marcamos el proceso como CUC actual.',memory:['No improvisar requisitos','Validar quién solicita','Producto importa','Documentación y canal = CUC actual'],related:['Fallecimiento','Titular','Beneficiario','Cuenta','TDC'],sections:[
  {t:'1. Qué significa para la llamada',body:'<p>Una persona informa que el titular falleció y busca saber qué ocurre con cuentas, tarjetas, saldos, adeudos o trámites.</p>',client:'“Mi familiar falleció, ¿qué hago con su cuenta/tarjeta?”',advisor:'Identifica producto y quién realiza la solicitud. Después consulta el mapa vigente para requisitos, documentos, áreas y canal.'},
  {t:'2. Qué NO memorizar de esta guía',body:'<p>Esta web no inventa documentos, plazos ni autorizaciones porque el PDF 2022 no los soporta.</p>',warning:'Estudia este tema directamente del CUC/presentación vigente de certificación.'}
 ]
},
{
 id:'movilidad',icon:'↔️',title:'Movilidad de saldos',level:'Tema de certificación',source:'Tema actual indicado en capacitación; definición exacta no aparece clara en el PDF 2022',intro:'Lo tienes anotado como tema de certificación, pero el manual compartido no define con claridad un proceso llamado exactamente “movilidad de saldos”.',memory:['No inventar definición','Busca nombre literal en CUC','Identifica productos origen/destino','Anota efecto en saldo'],related:['Movilidad de saldos','Saldo','TDC','Transferencia'],sections:[
  {t:'1. Cómo estudiarlo cuando aparezca en CUC',body:'<p>Anota cuatro cosas: <strong>de qué producto sale el saldo, a cuál llega, qué condiciones debe cumplir y qué cambia después del movimiento</strong>.</p>',warning:'Hasta tener el mapa actual, no conviene memorizar una definición improvisada.'}
 ]
},
{
 id:'venta',icon:'✨',title:'Crédito al consumo, EFI y venta cruzada',level:'Trabajo diario',source:'Manual 2022 · crédito al consumo/aclaraciones + contexto de tu puesto',intro:'Además de atender, tu puesto incluye venta cruzada. Primero se resuelve la necesidad; después, si existe una oferta adecuada, se explica el producto.',memory:['Primero resolver','Oferta ≠ obligación','Explica costo/plazo','Crédito ≠ dinero gratis'],related:['Venta cruzada','Oferta','Crédito al consumo','EFI','Seguro'],sections:[
  {t:'1. Crédito al consumo',body:'<p>Es un préstamo destinado a necesidades personales, pagado conforme a las condiciones del crédito.</p>',client:'“Me ofrecen un préstamo, ¿cuánto terminaré pagando?”',advisor:'Explica monto, plazo, pago, tasa/costo y condiciones de la oferta vigente.'},
  {t:'2. EFI',body:'<p>En capacitación se usa EFI para Efectivo Inmediato: utilizar parte de la línea disponible de una TDC para recibir efectivo conforme a una oferta/plan.</p>',warning:'Monto, tasa, plazo y elegibilidad dependen de la oferta actual.'},
  {t:'3. Venta cruzada',body:'<p>Es ofrecer otro producto relevante después de resolver la necesidad principal, siempre explicando condiciones con claridad.</p>',client:'El cliente ya resolvió su consulta y tiene una oferta visible.',advisor:'Presenta la oferta sin mezclarla con la resolución ni hacer parecer que es requisito para recibir atención.'}
 ]
},
{
 id:'llamada',icon:'🧭',title:'Mapa mental de una llamada completa',level:'Cierre',source:'Síntesis de la lógica repetida en el Manual 2022',intro:'Si no sabes qué hacer, vuelve a esta secuencia. No necesitas memorizar cada botón si sabes clasificar correctamente y encontrar el proceso.',memory:['1 Producto','2 Qué pasó','3 Sondeo','4 Autenticación','5 Sistema','6 CUC','7 Explicar','8 Resolver','9 Venta si aplica'],related:['Sondeo','Autenticación','CCD','CUC','Aclaración','Venta cruzada'],sections:[
  {t:'1. La secuencia',body:'<ol><li><strong>Producto:</strong> TDD, TDC, cuenta, cheque, crédito, app, etc.</li><li><strong>Qué pasó:</strong> compra, pago, retiro, transferencia, bloqueo, cargo.</li><li><strong>Sondeo:</strong> descubre el problema real.</li><li><strong>Autenticación:</strong> aplica lo que marque el flujo actual.</li><li><strong>Revisa sistema:</strong> qué movimiento/estatus existe realmente.</li><li><strong>CUC:</strong> busca el proceso exacto.</li><li><strong>Explica:</strong> tradúcelo a lenguaje sencillo.</li><li><strong>Resuelve/canaliza.</strong></li><li><strong>Venta cruzada:</strong> si corresponde.</li></ol>'},
  {t:'2. Ejemplo completo',body:'<p>Cliente: “Me cobraron dos veces $800”. Tú no saltas a fraude. Primero identificas TDD/TDC, comparas ambos movimientos, preguntas si uno está pendiente/retenido, verificas estatus y luego eliges la tipología correcta.</p>',advisor:'Tu ventaja no será memorizar 500 términos, sino aprender a separar producto + movimiento + estado + intención del cliente.'}
 ]
}
];

let guideIndex=0;
const g$=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderGuideNav(){
 const nav=g$('#guideTopicNav');
 if(!nav)return;
 nav.innerHTML=guideTopics.map((t,i)=>`<button class="guide-topic-btn ${i===guideIndex?'active':''}" data-guide-index="${i}"><span class="n">${i+1}</span><span><b>${t.icon} ${esc(t.title)}</b><small>${esc(t.level)}</small></span></button>`).join('');
 nav.querySelectorAll('[data-guide-index]').forEach(b=>b.onclick=()=>showGuideTopic(Number(b.dataset.guideIndex),true));
}

function renderGuideOverview(){
 const root=g$('#guideOverview'); if(!root)return;
 root.innerHTML=guideTopics.map((t,i)=>`<button data-overview-index="${i}"><span class="ov-icon">${t.icon}</span><b>${i+1}. ${esc(t.title)}</b><span>${esc(t.level)}</span></button>`).join('');
 root.querySelectorAll('[data-overview-index]').forEach(b=>b.onclick=()=>showGuideTopic(Number(b.dataset.overviewIndex),true));
}

function sectionHTML(s,idx){return `<details class="lesson-section" ${idx===0?'open':''}><summary>${esc(s.t)}</summary><div class="lesson-content">${s.body||''}${s.example?`<div class="lesson-example"><span class="lesson-box-title">Ejemplo rápido</span>${esc(s.example)}</div>`:''}${s.client?`<div class="lesson-client"><span class="lesson-box-title">Cliente podría decir</span>${esc(s.client)}</div>`:''}${s.advisor?`<div class="lesson-advisor"><span class="lesson-box-title">Como asesor piensa</span>${esc(s.advisor)}</div>`:''}${s.warning?`<div class="lesson-warning"><span class="lesson-box-title">Ojo</span>${esc(s.warning)}</div>`:''}</div></details>`}

function showGuideTopic(index,scroll=false){
 guideIndex=Math.max(0,Math.min(index,guideTopics.length-1));
 const t=guideTopics[guideIndex], root=g$('#guideLesson'); if(!root)return;
 const pct=Math.round(((guideIndex+1)/guideTopics.length)*100);
 g$('#guideProgressText').textContent=`${guideIndex+1} / ${guideTopics.length}`;
 g$('#guideProgressBar').style.width=`${pct}%`;
 root.innerHTML=`<div class="lesson-top"><div class="lesson-eyebrow"><span>${t.icon}</span><span>Tema ${guideIndex+1} · ${esc(t.level)}</span></div><h2>${esc(t.title)}</h2><p class="lesson-intro">${esc(t.intro)}</p><span class="lesson-source">${esc(t.source)}</span></div><div class="lesson-core"><div class="quick-memory">${t.memory.map(m=>`<div class="memory-pill"><strong>→</strong> ${esc(m)}</div>`).join('')}</div>${t.sections.map(sectionHTML).join('')}<div class="related-concepts"><strong>Conceptos relacionados:</strong>${t.related.map(r=>`<span>${esc(r)}</span>`).join('')}</div></div><div class="guide-nextbar"><button class="guide-prev" id="guidePrev" ${guideIndex===0?'disabled':''}>← Anterior</button><div class="guide-step-label">Tema ${guideIndex+1} de ${guideTopics.length} · ${pct}%</div><button class="guide-next" id="guideNext">${guideIndex===guideTopics.length-1?'Volver al inicio ↺':'Siguiente →'}</button></div>`;
 g$('#guidePrev').onclick=()=>showGuideTopic(guideIndex-1,true);
 g$('#guideNext').onclick=()=>showGuideTopic(guideIndex===guideTopics.length-1?0:guideIndex+1,true);
 renderGuideNav();
 if(scroll) root.scrollIntoView({behavior:'smooth',block:'start'});
 localStorage.setItem('bancaGuideIndex',String(guideIndex));
}

function initGuide(){
 if(!g$('#guideLesson'))return;
 const saved=Number(localStorage.getItem('bancaGuideIndex'));
 if(Number.isInteger(saved)&&saved>=0&&saved<guideTopics.length)guideIndex=saved;
 renderGuideOverview(); renderGuideNav(); showGuideTopic(guideIndex,false);
 g$('#guideStart')?.addEventListener('click',()=>showGuideTopic(0,true));
 g$('#guideResume')?.addEventListener('click',()=>showGuideTopic(guideIndex,true));
}
initGuide();
