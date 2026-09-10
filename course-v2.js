// Ruta simple de estudio: desde cero, primero entiende el banco y luego la App BBVA.
// Conserva el diccionario, casos y quiz originales; solo reemplaza la ruta principal de la guía.
(function(){
  if(typeof guideTopics==='undefined' || !Array.isArray(guideTopics)) return;

  const courseTopics=[
    {
      id:'cero',icon:'',title:'Antes de todo: ¿qué estás viendo en un banco?',level:'Bloque 1 · Cero absoluto',
      source:'Base conceptual + Manual Banca Remota dic. 2022',
      intro:'Primero ubica las piezas. Si entiendes cliente, producto, cuenta, tarjeta y movimiento, lo demás empieza a tener sentido.',
      memory:['Banco = lugar donde el cliente tiene productos y mueve dinero'],related:['Banco','Cliente','Producto','Cuenta','Tarjeta','Movimiento'],
      sections:[
        {t:'1. Banco, cliente y producto',body:'<p><strong>Cliente</strong> es la persona. <strong>Producto</strong> es lo que tiene contratado: cuenta, tarjeta, crédito, seguro, etc.</p>',example:'Luis es el cliente. Su cuenta de débito y su tarjeta de crédito son productos distintos.'},
        {t:'2. Cuenta',body:'<p>La <strong>cuenta</strong> es donde se registran el dinero y sus movimientos. Puede tener saldo, cargos, abonos y transferencias.</p>',client:'“¿Cuánto dinero tengo?”',advisor:'Primero identifica de qué cuenta o producto está hablando.'},
        {t:'3. Tarjeta',body:'<p>La <strong>tarjeta</strong> es un medio para usar un producto. Débito normalmente usa dinero de una cuenta; crédito usa una línea que presta el banco.</p>',warning:'Cuenta y tarjeta no son lo mismo.'},
        {t:'4. Movimiento',body:'<p>Un <strong>movimiento</strong> es algo que cambió o intentó cambiar el saldo: compra, retiro, depósito, pago, transferencia, comisión, etc.</p>',advisor:'En una llamada casi siempre debes descubrir: producto + movimiento + estado.'}
      ]
    },
    {
      id:'appmap',icon:'',title:'Mapa de la App BBVA',level:'Bloque 1 · Cero absoluto',
      source:'App BBVA México y folleto informativo oficial 2025',
      intro:'Antes de memorizar procesos, aprende qué ve el cliente en su celular. Así entiendes mejor lo que te está describiendo por teléfono.',
      memory:['App = productos + saldo + movimientos + operaciones'],related:['App BBVA','Saldo','Movimientos','CLABE','Transferencias'],
      sections:[
        {t:'1. Tus productos',body:'<p>La app agrupa los productos del cliente. Al entrar a una cuenta o tarjeta puede consultar información y operar según el producto.</p>',client:'“Entré a mi app y veo mi cuenta y mi tarjeta.”',advisor:'Pregúntale cuál seleccionó antes de guiarlo.'},
        {t:'2. Saldo y movimientos',body:'<p>Desde la app el cliente puede consultar <strong>saldos</strong> y <strong>movimientos</strong>. Esa diferencia será básica para casi todas las aclaraciones.</p>',example:'Puede ver un saldo total y al mismo tiempo un movimiento reciente que todavía está procesándose.'},
        {t:'3. Operaciones comunes',body:'<p>La app permite, entre otras funciones, hacer transferencias, pagar servicios, consultar CLABE y estados de cuenta, administrar tarjetas y generar retiros sin tarjeta.</p>',advisor:'Aprende primero qué quiere hacer el cliente; después ubica la función.'},
        {t:'4. Ayuda',body:'<p>La app también tiene opciones de ayuda y contacto. La ruta exacta puede cambiar con actualizaciones, así que usa los tutoriales vigentes para familiarizarte con la pantalla.</p>',warning:'No memorices posiciones de botones como si nunca fueran a cambiar.'}
      ]
    },
    {
      id:'saldo',icon:'',title:'Cuenta, saldo, cargo y abono',level:'Bloque 2 · Dinero en movimiento',
      source:'Manual Banca Remota 2022 + conceptos generales',
      intro:'Ahora sí: aprende las cuatro palabras que vas a escuchar todo el día.',
      memory:['Saldo = cuánto hay; cargo resta; abono suma o reduce deuda'],related:['Saldo','Cargo','Abono','Disponible'],
      sections:[
        {t:'1. Saldo',body:'<p><strong>Saldo</strong> es la cantidad que muestra el producto en un momento. En débito suele representar dinero; en crédito puede representar deuda o disponible, según la pantalla.</p>'},
        {t:'2. Cargo',body:'<p><strong>Cargo</strong> es un movimiento que resta dinero de una cuenta o aumenta una deuda.</p>',example:'Compra de $500 con débito → baja el dinero disponible.'},
        {t:'3. Abono',body:'<p><strong>Abono</strong> es un movimiento que suma dinero a una cuenta o reduce una deuda.</p>',example:'Depositar a una cuenta o pagar una TDC.'},
        {t:'4. Saldo disponible',body:'<p>Es lo que realmente puede usarse en ese momento. Puede ser distinto al saldo mostrado si existen retenciones o movimientos pendientes.</p>',client:'“Veo dinero, pero no me deja usarlo.”',advisor:'Piensa en disponible, retenciones, bloqueos y movimientos en tránsito.'}
      ]
    },
    {
      id:'debito',icon:'',title:'Tarjeta de débito y cuentas',level:'Bloque 2 · Dinero en movimiento',
      source:'Manual Banca Remota 2022 + App BBVA',
      intro:'Débito es la parte más sencilla: normalmente gastas el dinero que ya tienes en una cuenta.',
      memory:['Débito = usa el dinero disponible de la cuenta'],related:['TDD','Cuenta','Saldo','NIP','Retiro'],
      sections:[
        {t:'1. TDD',body:'<p>La <strong>tarjeta de débito</strong> permite usar el dinero disponible de una cuenta para compras, retiros y otras operaciones.</p>',example:'Tienes $2,000 y compras $300: el disponible se reduce, salvo movimientos pendientes.'},
        {t:'2. Cuenta con o sin chequera',body:'<p>Una cuenta puede tener o no chequera. Eso describe una característica del producto; no cambia la idea básica de que la cuenta registra el dinero y movimientos.</p>'},
        {t:'3. Niveles de cuenta',body:'<p>Algunas cuentas se clasifican por niveles regulatorios y pueden tener condiciones o límites distintos.</p>',warning:'Los límites exactos cambian y deben validarse en CUC vigente.'},
        {t:'4. Cliente dice “mi tarjeta no pasa”',body:'<p>No significa automáticamente fraude.</p>',advisor:'Revisa primero producto, saldo/disponible, restricción, bloqueo, límites, plástico y estatus de la operación.'}
      ]
    },
    {
      id:'ids',icon:'',title:'Los números que no debes confundir',level:'Bloque 3 · Identificadores',
      source:'Manual 2022 + capacitación pública BBVA 2025/2026',
      intro:'Cliente, contrato, cuenta, tarjeta y CLABE identifican cosas diferentes. Esta separación te evita muchísimos errores.',
      memory:['Persona → cliente · Producto → contrato/cuenta · Transferir → CLABE'],related:['Número de cliente','Contrato','Cuenta','Tarjeta','CLABE','BIN'],
      sections:[
        {t:'1. Número de cliente',body:'<p>Identifica a la <strong>persona</strong> dentro del banco.</p>'},
        {t:'2. Contrato y cuenta',body:'<p>El <strong>contrato</strong> identifica la relación contractual/producto. El <strong>número de cuenta</strong> identifica una cuenta.</p>',warning:'La forma exacta en que BBVA muestra estos números es terminología de capacitación; para examen usa el material vigente.'},
        {t:'3. Número de tarjeta',body:'<p>Identifica la tarjeta o plástico. No es lo mismo que la cuenta.</p>'},
        {t:'4. CLABE y BIN',body:'<p><strong>CLABE</strong> es el identificador bancario estandarizado de 18 dígitos usado en transferencias interbancarias. <strong>BIN</strong> es el rango inicial de dígitos que ayuda a identificar emisor/producto de una tarjeta.</p>'}
      ]
    },
    {
      id:'credito',icon:'',title:'Tarjeta de crédito desde cero',level:'Bloque 4 · Crédito',
      source:'Manual Banca Remota 2022 + educación financiera BBVA',
      intro:'Aquí cambia la lógica: ya no estás gastando directamente el dinero de una cuenta, sino usando una línea de crédito.',
      memory:['TDC = línea prestada · disponible ≠ dinero propio'],related:['TDC','Línea de crédito','Disponible','Pago'],
      sections:[
        {t:'1. Línea de crédito',body:'<p>Es el monto que el banco autoriza para usar como crédito. Cuando compras, consumes parte de esa línea.</p>'},
        {t:'2. Saldo deudor y disponible',body:'<p>El <strong>saldo deudor</strong> es lo que debes; el <strong>disponible</strong> es la parte de la línea que todavía puedes usar.</p>',example:'Línea $20,000; usaste $5,000 → debes $5,000 y te queda parte disponible.'},
        {t:'3. Pago a TDC',body:'<p>Cuando pagas, reduces la deuda. Dependiendo de cómo esté compuesto el saldo, el pago se aplica conforme a reglas de la tarjeta.</p>',advisor:'No prometas que todo pago cae exactamente donde el cliente imagina; revisa la aplicación del pago.'},
        {t:'4. Adicional',body:'<p>Una tarjeta adicional comparte la línea del titular según las condiciones del producto.</p>',warning:'Adicional no significa una línea totalmente independiente.'}
      ]
    },
    {
      id:'corte',icon:'',title:'Corte, fecha límite y pagos de TDC',level:'Bloque 4 · Crédito',
      source:'Manual 2022 + educación financiera BBVA',
      intro:'Estas fechas explican gran parte de las dudas de tarjeta de crédito.',
      memory:['Corte cierra periodo · fecha límite marca hasta cuándo pagar'],related:['Fecha de corte','Fecha límite','Pago mínimo','PPNGI'],
      sections:[
        {t:'1. Fecha de corte',body:'<p>Es el día en que termina un periodo de registro de movimientos y empieza el siguiente.</p>'},
        {t:'2. Fecha límite de pago',body:'<p>Es la fecha máxima para hacer el pago requerido del periodo.</p>'},
        {t:'3. Pago mínimo',body:'<p>Es el importe mínimo requerido para mantener la cuenta al corriente, pero puede dejar saldo que genere intereses.</p>',warning:'Pagar solo el mínimo no equivale a liquidar la deuda.'},
        {t:'4. Pago para no generar intereses',body:'<p>Es el monto indicado para evitar intereses sobre el saldo revolvente del periodo, conforme al estado de cuenta.</p>',advisor:'Para una llamada real, revisa el estado de cuenta y condiciones vigentes.'}
      ]
    },
    {
      id:'cascada',icon:'',title:'PPNGI y cascada de pagos',level:'Bloque 4 · Crédito',
      source:'Manual Banca Remota 2022 · cascada de pagos',
      intro:'No memorices fórmulas viejas. Entiende la idea: una TDC puede tener distintos tipos de saldo y el pago se distribuye entre ellos.',
      memory:['Un pago puede repartirse entre distintos componentes de la deuda'],related:['PPNGI','Pago mínimo','Revolvente','Capital diferido'],
      sections:[
        {t:'1. PPNGI',body:'<p>Es el <strong>pago para no generar intereses</strong> del periodo. El manual lo coloca como una referencia central para entender el pago de TDC.</p>'},
        {t:'2. Revolvente',body:'<p>Es el saldo de crédito que puede seguir financiándose y generar intereses conforme a las condiciones de la tarjeta.</p>'},
        {t:'3. Capital diferido',body:'<p>Incluye saldos que se pagan en parcialidades o esquemas diferidos, como ciertas promociones.</p>'},
        {t:'4. Qué recordar',body:'<p>No necesitas empezar por porcentajes. Primero identifica <strong>qué tipo de saldo tiene el cliente y cuánto pagó</strong>.</p>',advisor:'Luego consulta en sistema cómo se aplicó ese pago.'}
      ]
    },
    {
      id:'costos',icon:'',title:'Interés, tasa, comisión, anualidad y CAT',level:'Bloque 4 · Crédito',
      source:'Manual 2022 + conceptos de educación financiera',
      intro:'Son costos distintos. Si los separas bien, las preguntas de crédito se vuelven mucho más fáciles.',
      memory:['Interés ≠ comisión ≠ anualidad · CAT sirve para comparar costo'],related:['Interés','Tasa','Comisión','Anualidad','CAT','IVA'],
      sections:[
        {t:'1. Tasa e interés',body:'<p>La <strong>tasa</strong> es el porcentaje usado para calcular el costo del crédito. El <strong>interés</strong> es el costo que resulta conforme a las condiciones del financiamiento.</p>'},
        {t:'2. Comisión y anualidad',body:'<p>Una <strong>comisión</strong> es un cobro por un servicio, producto u operación. La <strong>anualidad</strong> es una comisión periódica de algunas tarjetas.</p>'},
        {t:'3. CAT',body:'<p>El <strong>Costo Anual Total</strong> es un indicador estandarizado para comparar el costo integral de créditos.</p>'},
        {t:'4. En llamada',body:'<p>Antes de explicar un cobro, identifica el concepto exacto y la fecha.</p>',warning:'Tasas, comisiones y condiciones actuales se consultan en CUC/producto vigente.'}
      ]
    },
    {
      id:'transferencias',icon:'',title:'Transferencias, CLABE, SPEI y CEP',level:'Bloque 5 · Mover dinero',
      source:'Manual 2022 + App BBVA + Banco de México',
      intro:'Piensa en una transferencia como dinero que sale de una cuenta y busca llegar a otra. Después identificas si fue BBVA o interbancaria.',
      memory:['Interbancaria → CLABE/SPEI · seguimiento → clave de rastreo/CEP'],related:['Transferencia','CLABE','SPEI','CEP','Clave de rastreo'],
      sections:[
        {t:'1. Transferencia',body:'<p>Es el envío de dinero entre cuentas. En la app el cliente puede transferir a cuentas BBVA o de otros bancos.</p>'},
        {t:'2. SPEI',body:'<p>Es el sistema de pagos electrónicos interbancarios usado en México para transferencias entre instituciones participantes.</p>'},
        {t:'3. CEP',body:'<p>El <strong>Comprobante Electrónico de Pago</strong> de Banco de México ayuda a comprobar una transferencia SPEI cuando aplica.</p>'},
        {t:'4. “No llegó mi transferencia”',body:'<p>No concluyas de inmediato que se perdió.</p>',advisor:'Ubica fecha, monto, banco origen/destino, estatus, clave de rastreo y consulta el proceso vigente.'}
      ]
    },
    {
      id:'servicios',icon:'',title:'Pagos de servicios, domiciliación y cargos recurrentes',level:'Bloque 5 · Mover dinero',
      source:'Manual 2022 + servicios digitales BBVA',
      intro:'Los tres pueden parecer “cobros automáticos”, pero no significan exactamente lo mismo.',
      memory:['Pago manual ≠ domiciliación ≠ cargo recurrente'],related:['Pago de servicios','Domiciliación','Cargo recurrente'],
      sections:[
        {t:'1. Pago de servicios',body:'<p>El cliente realiza un pago a un servicio, por ejemplo desde la app o un canal disponible.</p>'},
        {t:'2. Domiciliación',body:'<p>Es una instrucción para que determinados recibos o servicios se carguen automáticamente a una cuenta, conforme a la autorización.</p>'},
        {t:'3. Cargo recurrente',body:'<p>Es un cobro periódico asociado normalmente a un comercio o servicio, frecuentemente ligado a una tarjeta.</p>'},
        {t:'4. Para cancelar',body:'<p>Primero identifica cuál de los tres es.</p>',advisor:'La ruta de cancelación depende del tipo de cargo y del producto; valida en CUC vigente.'}
      ]
    },
    {
      id:'retiro',icon:'',title:'Retiro sin tarjeta y funciones digitales',level:'Bloque 6 · App BBVA',
      source:'Tutorial oficial App BBVA México',
      intro:'Este tema te ayuda a entender algo que el cliente sí ve y usa directamente en la app.',
      memory:['Retiro sin tarjeta sale de una cuenta de débito activa'],related:['Retiro sin tarjeta','App','ATM','QR'],
      sections:[
        {t:'1. Qué es',body:'<p>Permite retirar efectivo sin usar el plástico. Se genera desde la app y se completa en un canal compatible.</p>'},
        {t:'2. Dos formas comunes',body:'<p>BBVA publica tutoriales para retiro mediante <strong>clave</strong> y mediante <strong>QR</strong>.</p>'},
        {t:'3. Consulta del retiro',body:'<p>La app también permite consultar retiros sin tarjeta y revisar su estado.</p>'},
        {t:'4. Idea para llamada',body:'<p>Si el cliente dice “hice un retiro sin tarjeta”, pregunta primero si habla de generación, cobro, vencimiento, cancelación o un problema en cajero.</p>'}
      ]
    },
    {
      id:'digital',icon:'',title:'Tarjeta digital, CVV, NIP y Token',level:'Bloque 6 · App BBVA',
      source:'Tutoriales oficiales App BBVA México',
      intro:'Son cosas de seguridad distintas. Conviene aprenderlas juntas para no mezclarlas.',
      memory:['CVV ≠ NIP ≠ Token'],related:['Tarjeta digital','CVV','NIP','Token'],
      sections:[
        {t:'1. Tarjeta digital',body:'<p>Es la versión electrónica de una tarjeta física y puede tener datos distintos para compras en línea.</p>'},
        {t:'2. CVV',body:'<p>Es un código de seguridad usado en compras con tarjeta. En la tarjeta digital de BBVA puede ser dinámico.</p>'},
        {t:'3. NIP',body:'<p>Es la clave personal usada para autorizar determinadas operaciones con la tarjeta.</p>'},
        {t:'4. Token',body:'<p>Es un factor de seguridad para autorizar operaciones digitales.</p>',warning:'No pidas ni improvises datos sensibles fuera del flujo autorizado.'}
      ]
    },
    {
      id:'pendientes',icon:'',title:'Retenido, en tránsito y movimiento aplicado',level:'Bloque 7 · Aclaraciones',
      source:'Manual Banca Remota 2022',
      intro:'Muchos “dobles cargos” o “dinero desaparecido” se entienden cuando separas el estado del movimiento.',
      memory:['Pendiente no siempre significa cobro definitivo'],related:['Saldo retenido','En tránsito','Cargo aplicado','Aclaración'],
      sections:[
        {t:'1. Retenido',body:'<p>Puede reducir el disponible mientras la operación todavía no queda como cargo definitivo.</p>'},
        {t:'2. En tránsito',body:'<p>Es una operación que todavía se está procesando o contabilizando.</p>'},
        {t:'3. Aplicado',body:'<p>Es el movimiento que ya aparece contabilizado conforme al producto.</p>'},
        {t:'4. Sondeo antes de aclarar',body:'<p>Pregunta qué ve exactamente el cliente: importe, fecha, comercio, si aparece pendiente y si hay otro movimiento similar.</p>',advisor:'El manual insiste en sondear antes de elegir tipología.'}
      ]
    },
    {
      id:'seguridad',icon:'',title:'Autenticación, MAU y seguridad',level:'Bloque 7 · Seguridad',
      source:'Capacitación pública BBVA 2025/2026 + CUC vigente para operación',
      intro:'Aquí no se trata de memorizar preguntas de seguridad en casa. Se trata de entender para qué existe la autenticación.',
      memory:['Autenticar = confirmar que atiendes a la persona autorizada'],related:['MAU','Autenticación','Seguridad','Alertas'],
      sections:[
        {t:'1. MAU',body:'<p>En capacitación se usa MAU como referencia del flujo/manual de autenticación para verificar al cliente antes de ciertos procesos.</p>'},
        {t:'2. Por qué cambia',body:'<p>No todas las solicitudes requieren exactamente lo mismo. El nivel y pasos dependen del proceso y del canal.</p>'},
        {t:'3. Qué estudiar en casa',body:'<p>Aprende <strong>cuándo necesitas autenticar</strong> y por qué, no preguntas o rutas internas antiguas.</p>'},
        {t:'4. En operación',body:'<p>Sigue siempre el MAU/CUC vigente y no improvises.</p>',warning:'Los pasos exactos de autenticación son operativos y deben consultarse en el sistema actual.'}
      ]
    },
    {
      id:'fraude',icon:'',title:'Fraude, restricción y tarjeta rechazada',level:'Bloque 7 · Seguridad',
      source:'Manual Banca Remota 2022 · restricciones y modalidades de fraude',
      intro:'Tres cosas que un cliente puede mezclar en una sola frase: “mi tarjeta no pasa y yo no hice esa compra”. Tú debes separarlas.',
      memory:['No reconocido ≠ fraude confirmado · rechazo ≠ fraude automático'],related:['Fraude','Restricción','Bloqueo','Tarjeta rechazada'],
      sections:[
        {t:'1. Restricción',body:'<p>Es una condición que impide o limita una operación o el uso del producto.</p>'},
        {t:'2. Tarjeta rechazada',body:'<p>Puede tener distintas causas. Primero consulta el estatus y la razón disponible en sistema.</p>'},
        {t:'3. Cargo no reconocido',body:'<p>El cliente informa que no identifica una operación. Antes de clasificar, hay que sondear y revisar lo que realmente aparece.</p>'},
        {t:'4. Fraude',body:'<p>Es una categoría de riesgo que requiere seguir el proceso correcto cuando los hechos encajan en la tipología.</p>',advisor:'No saltes directo a fraude por escuchar “no reconozco”.'}
      ]
    },
    {
      id:'cheques',icon:'',title:'Cheques desde cero',level:'Bloque 8 · Otros productos',
      source:'Manual Banca Remota 2022 · cheques',
      intro:'No necesitas memorizar todos los tipos de golpe. Primero entiende qué es un cheque y qué puede pasar con él.',
      memory:['Cheque = instrucción de pago contra fondos de una cuenta'],related:['Cheque','Endoso','Protección','Devolución'],
      sections:[
        {t:'1. Qué es',body:'<p>Es un documento mediante el cual se ordena pagar una cantidad con cargo a una cuenta, sujeto a las condiciones del cheque y la cuenta.</p>'},
        {t:'2. Nominativo y al portador',body:'<p>Son formas de indicar a quién se paga. Existen además otras modalidades como cruzado, certificado o cheque de caja.</p>'},
        {t:'3. Endoso',body:'<p>Es una forma de transmitir derechos de ciertos cheques cuando legalmente/procedimentalmente aplica.</p>'},
        {t:'4. Depósito y devolución',body:'<p>Un cheque depositado puede requerir validación antes de que el dinero quede realmente disponible.</p>',advisor:'Si es de otro banco, distingue saldo mostrado de saldo a buen cobro/disponible.'}
      ]
    },
    {
      id:'internacional',icon:'',title:'OPI y transferencias internacionales',level:'Bloque 8 · Otros productos',
      source:'Manual Banca Remota 2022 + BBVA transferencias internacionales',
      intro:'Es la versión internacional del problema “quiero enviar o recibir dinero”, pero aparecen identificadores y bancos intermediarios.',
      memory:['OPI = orden de pago internacional · SWIFT/BIC identifica banco'],related:['OPI','SWIFT','IBAN','ABA','Banco corresponsal'],
      sections:[
        {t:'1. OPI',body:'<p>Es una orden de pago internacional usada para enviar o recibir recursos entre países según el servicio disponible.</p>'},
        {t:'2. SWIFT / BIC',body:'<p>Es un código usado para identificar instituciones financieras en operaciones internacionales.</p>'},
        {t:'3. Otros identificadores',body:'<p>Según el país pueden aparecer IBAN, ABA, Transit u otros datos bancarios.</p>'},
        {t:'4. En llamada',body:'<p>Primero identifica si el cliente quiere enviar, recibir, consultar o aclarar una transferencia internacional.</p>',warning:'Monedas, tiempos, comisiones y requisitos deben validarse en la guía vigente.'}
      ]
    },
    {
      id:'nomina',icon:'',title:'Portabilidad de nómina',level:'Bloque 8 · Otros productos',
      source:'Manual Banca Remota 2022 + BBVA México',
      intro:'La idea simple: el cliente puede pedir que el dinero de su nómina se transfiera entre bancos conforme al servicio de portabilidad.',
      memory:['Portabilidad = mover la recepción de nómina entre bancos'],related:['Portabilidad','Nómina','Transferencia'],
      sections:[
        {t:'1. Qué es',body:'<p>Permite solicitar que los recursos recibidos como nómina en una institución se transfieran a otra cuenta designada conforme al servicio.</p>'},
        {t:'2. Dudas comunes',body:'<p>“No llegó”, “llegó tarde”, “quiero cancelarla” o “yo no la pedí” son problemas diferentes.</p>'},
        {t:'3. Qué revisar',body:'<p>Identifica banco origen, cuenta destino, si existe solicitud y qué movimiento realmente aparece.</p>'},
        {t:'4. Proceso',body:'<p>La forma exacta de alta, baja y aclaración se consulta en el proceso vigente.</p>'}
      ]
    },
    {
      id:'cert',icon:'',title:'Estado de cuenta, datos, inactividad y fallecimiento',level:'Bloque 9 · Certificación',
      source:'Manual 2022 + temas actuales de capacitación + información pública BBVA',
      intro:'Son solicitudes diferentes, pero todas requieren identificar qué quiere el cliente y después buscar el proceso exacto.',
      memory:['Primero clasifica la solicitud; luego busca el proceso exacto'],related:['Estado de cuenta','Datos','Inactividad','Fallecimiento'],
      sections:[
        {t:'1. Estado de cuenta',body:'<p>Resume movimientos y datos del producto durante un periodo. La app permite consultar/descargar estados de cuenta en productos compatibles.</p>'},
        {t:'2. Actualización de datos',body:'<p>Correo, teléfono y dirección son datos distintos. La ruta y autenticación dependen del dato que quiere modificar.</p>'},
        {t:'3. Inactividad y cancelación',body:'<p>Una cuenta inactiva, bloqueada o cancelada no son exactamente lo mismo.</p>',warning:'Plazos y reglas exactas de inactividad/cancelación deben validarse en CUC vigente.'},
        {t:'4. Fallecimiento',body:'<p>Es un proceso sensible para gestionar productos de una persona fallecida. No inventes documentación o plazos.</p>',advisor:'Usa la guía vigente y la información oficial de trámites de fallecidos.'}
      ]
    },
    {
      id:'pendientes_cuc',icon:'',title:'Temas que debes confirmar en CUC',level:'Bloque 9 · Certificación',
      source:'Temas de capacitación que no quedan definidos con precisión en el manual 2022',
      intro:'Aquí guardamos lo que no conviene inventar ni aprender con una definición dudosa.',
      memory:['Si el nombre interno no está claro, se confirma antes de memorizar'],related:['Movilidad de saldos','IBR/IVR','Recuperación','Ascenso de producto'],
      sections:[
        {t:'1. Movilidad de saldos',body:'<p>Está anotado como tema de certificación, pero el manual 2022 no define con claridad un proceso con ese nombre exacto.</p>',advisor:'En CUC anota: producto origen, producto destino, requisito y efecto en saldo.'},
        {t:'2. IBR / IVR',body:'<p>La sigla anotada no está suficientemente respaldada por el manual compartido.</p>',warning:'No la memorices hasta confirmar la sigla exacta en tu capacitación/CUC.'},
        {t:'3. “OPT usuarios recuperación”',body:'<p>La anotación tampoco tiene una definición suficientemente clara en la fuente disponible.</p>',warning:'Puede ser una sigla interna o una transcripción; confirma el nombre literal.'},
        {t:'4. Ascenso / cambio de producto',body:'<p>El concepto puede variar según el producto y la oferta.</p>',advisor:'Busca el nombre exacto del proceso en el CUC actual.'}
      ]
    },
    {
      id:'llamada',icon:'',title:'Cómo pensar una llamada completa',level:'Bloque 10 · Trabajo real',
      source:'Síntesis del Manual Banca Remota 2022 + capacitación de atención',
      intro:'No intentes recordar 500 respuestas. Aprende una secuencia y úsala para saber qué buscar.',
      memory:['Producto → qué pasó → sondeo → seguridad → sistema → CUC → explicar'],related:['Sondeo','CUC','Aclaración','Venta cruzada'],
      sections:[
        {t:'1. Producto',body:'<p>¿Habla de cuenta, TDD, TDC, cheque, crédito, transferencia, app u otro producto?</p>'},
        {t:'2. Qué pasó',body:'<p>¿Es consulta, cargo, retiro, pago, transferencia, bloqueo, cancelación, actualización o aclaración?</p>'},
        {t:'3. Sondea antes de decidir',body:'<p>Pregunta lo suficiente para entender el problema real. Un “no reconozco” puede esconder situaciones diferentes.</p>'},
        {t:'4. Resuelve con el proceso vigente',body:'<p>Autentica cuando corresponda, revisa sistema, busca el proceso en CUC, explica en lenguaje simple y resuelve o canaliza.</p>',advisor:'Después de resolver, la venta cruzada solo entra si existe una oferta pertinente y puedes explicarla con claridad.'}
      ]
    }
  ];

  // Guardamos una copia de la ruta extensa por si después se quiere recuperar sin perderla.
  if(!window.__fullGuideTopics) window.__fullGuideTopics=guideTopics.slice();
  guideTopics.splice(0,guideTopics.length,...courseTopics);

  const version='course-v2';
  if(localStorage.getItem('bancaCourseVersion')!==version){
    localStorage.setItem('bancaCourseVersion',version);
    localStorage.setItem('bancaGuideIndex','0');
    guideIndex=0;
  }else{
    const saved=Number(localStorage.getItem('bancaGuideIndex'));
    guideIndex=Number.isInteger(saved)&&saved>=0&&saved<guideTopics.length?saved:0;
  }

  if(typeof renderGuideOverview==='function') renderGuideOverview();
  if(typeof renderGuideNav==='function') renderGuideNav();
  if(typeof showGuideTopic==='function') showGuideTopic(guideIndex,false);
})();
