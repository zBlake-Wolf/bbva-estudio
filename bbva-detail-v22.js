// v22 · Ejemplos BBVA ficticios + formatos visibles + puntos para memorizar.
// Todos los números mostrados aquí son didácticos; no pertenecen a clientes reales.
(function(){
  if(typeof guideTopics==='undefined' || !Array.isArray(guideTopics)) return;
  const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

  const D={
    'banco':{
      bbva:'Un cliente BBVA tiene una Cuenta Digital, una TDC y un Seguro de Auto. Los tres son productos distintos dentro del mismo banco.',
      memorize:['BBVA = institución financiera','El cliente puede tener varios productos','Cada producto tiene reglas, saldos y procesos propios']
    },
    'cliente':{
      bbva:'Cliente ficticio: Eduardo Martínez. Puede tener número de cliente 58320417 y, debajo de ese cliente, varias cuentas, tarjetas o créditos.',
      format:'Ejemplo ficticio · No. cliente: 58320417',
      memorize:['Identifica a la persona','No es cuenta, contrato, tarjeta ni CLABE','En capacitación BBVA 2026 se enseña como 8 dígitos']
    },
    'producto bancario':{
      bbva:'Eduardo puede tener estos productos BBVA: Cuenta de débito, TDC Azul, Préstamo Personal y Seguro de Auto. Un problema en uno no significa problema en todos.',
      memorize:['Producto = lo que el cliente tiene/contrata','Primero identifica el producto antes de resolver','TDD y TDC usan dinero distinto']
    },
    'cuenta':{
      bbva:'Contrato ficticio: 00123456789012345678. En el esquema enseñado por BBVA, la cuenta sería los últimos 10 dígitos: 9012345678.',
      format:'Cuenta ficticia: 9012345678 · 10 dígitos',
      breakdown:['Contrato ficticio: 00123456789012345678','Últimos 10 dígitos: 9012345678','La cuenta no es el número del plástico'],
      memorize:['Cuenta = registro del dinero y movimientos','En capacitación BBVA se maneja como últimos 10 dígitos del contrato','No confundir con tarjeta ni CLABE']
    },
    'saldo':{
      bbva:'Cuenta BBVA ficticia 9012345678: saldo $8,500. Si hay $1,200 retenidos, el cliente podría tener solo $7,300 libres para usar.',
      memorize:['Saldo = lo que muestra el producto','Disponible = lo que sí puede usarse ahora','En TDC el saldo puede representar deuda']
    },
    'cargo y abono':{
      bbva:'Cuenta BBVA: compra de $650 = cargo. Depósito de nómina de $9,000 = abono. En una TDC, un pago de $2,000 es un abono que reduce deuda.',
      memorize:['Cargo suele restar dinero o aumentar deuda','Abono suele sumar dinero o reducir deuda','El efecto depende del producto']
    },
    'disponible':{
      bbva:'Saldo visible $8,500; retención $1,200; disponible aproximado $7,300. La cifra útil para comprar o retirar es el disponible.',
      memorize:['Saldo y disponible pueden ser diferentes','Retenciones, tránsito, límites o bloqueos pueden reducir disponible']
    },

    'numero de cliente':{
      bbva:'Ejemplo BBVA ficticio: 58320417. Ese número identificaría al cliente, aunque tenga una cuenta 9012345678 y una TDC diferente.',
      format:'58320417',
      breakdown:['8 dígitos en la capacitación pública BBVA 2026','Identifica a la persona','Ejemplo inventado: 58320417'],
      memorize:['8 dígitos según capacitación 2026','Persona, no producto','No usar como CLABE ni como tarjeta']
    },
    'numero de contrato':{
      bbva:'Ejemplo BBVA ficticio: 00123456789012345678. Tiene 20 dígitos y representa el contrato/producto.',
      format:'00123456789012345678',
      breakdown:['20 dígitos según capacitación BBVA 2026','Ejemplo inventado','Los últimos 10 pueden corresponder a la cuenta en el esquema enseñado'],
      memorize:['20 dígitos','Identifica contrato/producto','No es CLABE']
    },
    'numero de cuenta':{
      bbva:'Si el contrato ficticio es 00123456789012345678, los últimos 10 serían 9012345678. Ese es el ejemplo visual de cuenta que usarás para estudiar.',
      format:'9012345678',
      breakdown:['10 dígitos en el esquema BBVA enseñado','Puede aparecer dentro de la composición de la CLABE','No es el número completo de tarjeta'],
      memorize:['Cuenta = 10 dígitos en este material BBVA','No cambia aunque cambie el plástico, según capacitación','Cuenta ≠ tarjeta ≠ CLABE']
    },
    'clabe':{
      bbva:'CLABE BBVA ficticia para estudiar: 012 180 0 9012345678 9. Son 18 dígitos en total. No pertenece a una persona real.',
      format:'012 180 0 9012345678 9',
      breakdown:['012 → código bancario usado por BBVA en la estructura','180 → plaza ficticia para el ejemplo','0 → dígito fijo mostrado por BBVA en su explicación','9012345678 → cuenta ficticia de 10 dígitos','9 → dígito verificador del ejemplo'],
      memorize:['18 dígitos','Sirve para transferencias interbancarias','BBVA explica: banco 3 + plaza 3 + 0 fijo + cuenta 10 + verificador 1']
    },
    'numero de tarjeta':{
      bbva:'Tarjeta BBVA ficticia SOLO para visualizar longitud: 4000 1234 5678 9010. Son 16 dígitos. No corresponde a un BIN real utilizable.',
      format:'4000 1234 5678 9010',
      breakdown:['16 dígitos en una tarjeta típica BBVA','Ejemplo deliberadamente ficticio','El número de tarjeta identifica el plástico/tarjeta, no la cuenta completa'],
      memorize:['16 dígitos en la tarjeta típica','Puede cambiar con reposición/renovación','No es la CLABE']
    },
    'bin iin':{
      bbva:'Si una tarjeta ficticia empieza 4000 12…, esos primeros dígitos serían la zona donde vive el BIN/IIN. NO uses 400012 como BIN real de BBVA: aquí solo ves la posición.',
      format:'[ BIN / IIN ] •••• •••• ••••',
      memorize:['Está al inicio del número de tarjeta','Ayuda a identificar emisor/producto','La capacitación 2026 lo explica como los primeros 4-6; rangos operativos se consultan vigentes']
    },
    'cvv nip y token':{
      bbva:'Ejemplos ficticios: NIP 4821 (4 dígitos). CVV 527 (3 dígitos). El Token genera una clave temporal y no debes memorizar una longitud fija si tu CUC no la indica.',
      format:'NIP: 4821 · CVV: 527',
      breakdown:['NIP → 4 dígitos; ATM/compras presenciales según proceso','CVV → 3 dígitos; seguridad de tarjeta, especialmente compras digitales','Token → código dinámico/temporal generado por el canal'],
      memorize:['NIP 4 dígitos','CVV 3 dígitos','Token cambia; no se comparte']
    },
    'tid tarjeta instantanea definitiva':{
      bbva:'Ejemplo: el cliente repone una tarjeta y el proceso permite entregarle una TID en el momento en vez de esperar envío. La elegibilidad exacta se valida en CUC.',
      memorize:['TID aparece en procesos de tarjeta','No asumir que siempre aplica','Condiciones vigentes → CUC']
    },

    'tus productos en la app':{
      bbva:'Pantalla ficticia App BBVA: Cuenta 9012345678 · $8,500; TDC terminación 9010 · deuda $3,200; Oportunidades · EFI disponible.',
      memorize:['La app agrupa varios productos','Primero toca el producto correcto','Un saldo de cuenta y uno de TDC significan cosas distintas']
    },
    'estado de cuenta digital':{
      bbva:'EDC ficticio TDC: periodo 01/08/2026–31/08/2026; corte 31/08; saldo del periodo $6,400; PPNGI $6,400; fecha límite 20/09. Fechas e importes son inventados.',
      memorize:['EDC resume un periodo','No es igual a movimientos recientes','En TDC incluye corte, pagos y saldos del ciclo']
    },
    'tarjeta digital':{
      bbva:'En App BBVA el cliente entra a su tarjeta y usa “Comprar con tarjeta digital”. Puede ver número digital, vencimiento y generar CVV dinámico de 3 dígitos.',
      memorize:['Es versión digital asociada al producto','BBVA usa CVV dinámico para compras en línea','No es otra cuenta']
    },
    'retiro sin tarjeta':{
      bbva:'Cliente BBVA genera un retiro desde la app y usa la referencia/clave o mecanismo vigente en un cajero BBVA, sin insertar el plástico.',
      memorize:['Se genera desde canal digital','No requiere insertar la tarjeta','Montos/vigencia cambian → consultar vigente']
    },

    'autenticacion':{
      bbva:'Ejemplo de llamada: el cliente quiere cambiar su teléfono. Antes de modificarlo, el asesor aplica la autenticación que marque el proceso vigente. No basta con que el cliente sepa su nombre o cuenta.',
      memorize:['Identificar no es autenticar','El nivel depende de la solicitud','MAU/CUC vigente manda']
    },
    'mau':{
      bbva:'Ejemplo: “actualización de teléfono” puede requerir una validación distinta a “consulta general”. El asesor busca en MAU/CUC qué nivel corresponde y sigue exactamente ese flujo.',
      memorize:['MAU = Manual de Autenticación Unificado','Define cómo validar identidad según proceso','Nunca improvisar preguntas o saltarse seguridad']
    },
    'biometria':{
      bbva:'Ejemplo BBVA: una función digital puede pedir rostro, huella o voz para reforzar identidad antes de continuar.',
      memorize:['Biometría = rasgo físico/comportamental','Puede ser rostro, huella o voz','No todos los procesos usan la misma']
    },

    'tarjeta de debito tdd':{
      bbva:'Cuenta BBVA ficticia 9012345678 con $5,000. Compra con TDD por $700 → el disponible baja aproximadamente a $4,300 si no hay otras retenciones.',
      memorize:['TDD usa dinero de la cuenta','No usa línea de crédito','Compra afecta disponible de la cuenta']
    },
    'cuenta con chequera':{
      bbva:'Cliente BBVA con cuenta de cheques emite un cheque ficticio #000123 por $2,500 a “Ana López”. El cheque usa fondos de esa cuenta y debe cumplir el proceso del tipo de cheque.',
      format:'Cheque #000123 · $2,500 · Beneficiaria: Ana López',
      memorize:['Cuenta con chequera permite emitir cheques','Cheque usa fondos de la cuenta','Protección/endoso dependen del tipo']
    },
    'cuenta sin chequera':{
      bbva:'Una Cuenta Digital BBVA puede operar por app, TDD, transferencias y cajero sin que el cliente tenga talonario de cheques.',
      memorize:['Sin chequera no significa sin transferencias','Los canales disponibles dependen del producto']
    },
    'niveles de cuenta':{
      bbva:'Ejemplo: una cuenta con expediente limitado puede tener capacidades distintas a otra con expediente más completo. Los topes exactos NO se copian del manual 2022.',
      memorize:['Nivel = clasificación regulatoria/expediente','Puede afectar límites y requisitos','Montos actuales → CUC/regla vigente']
    },
    'udis':{
      bbva:'Ejemplo didáctico: si una regla dice “X UDIS”, primero se consulta el valor vigente de la UDI y luego se convierte a pesos. No memorices un monto fijo.',
      memorize:['UDI no es peso','Su valor cambia','Si un límite está en UDIS, se convierte con valor vigente']
    },
    'cancelacion por inactividad':{
      bbva:'Cliente BBVA ficticio: “No usé mi cuenta durante mucho tiempo”. El asesor NO responde “ya se canceló”; revisa producto, saldo y estatus para distinguir activa, inactiva, bloqueada o cancelada.',
      memorize:['Inactividad ≠ cancelación automática universal','Primero revisar estatus y saldo','Plazo exacto depende del producto/regla vigente']
    },

    'saldo retenido':{
      bbva:'Cuenta BBVA: saldo $8,500; compra de hotel $1,200 aparece retenida. El cliente puede ver el movimiento, pero esos $1,200 no están libres mientras se procesa.',
      format:'Saldo: $8,500 · Retenido: $1,200 · Libre aprox.: $7,300',
      memorize:['Retenido = apartado temporalmente','Puede reducir disponible','No es automáticamente doble cargo']
    },
    'movimiento en transito':{
      bbva:'TDD BBVA: compra ficticia $650 aparece “Movimiento en tránsito”. Significa que todavía se está procesando; después podría quedar aplicada o liberarse según el caso.',
      memorize:['Tránsito = todavía procesándose','No afirmar fraude ni cargo definitivo solo por verlo','Revisar estado actual']
    },
    'doble cargo aparente':{
      bbva:'El cliente ve dos $650 del mismo comercio: uno “en tránsito” y otro aplicado. Antes de abrir duplicidad, compara ambos estados.',
      memorize:['Dos renglones ≠ dos cargos definitivos','Comparar fecha, comercio, importe y estatus']
    },

    'restriccion':{
      bbva:'TDD BBVA con $4,000 disponibles, pero compra rechazada. Puede existir una restricción aunque sí haya dinero. El asesor revisa motivo/estatus en sistema.',
      memorize:['Restricción limita uso','No significa necesariamente fraude','Motivo exacto → sistema/CUC']
    },
    'tarjeta rechazada':{
      bbva:'TDC ficticia con línea $30,000 y disponible $20,000; compra por $500 es rechazada. Tener disponible no descarta límites, seguridad, plástico o restricción.',
      memorize:['Rechazo = intento no autorizado','Revisar disponible, límites, vigencia y restricciones','No adivinar la causa']
    },

    'cargo no reconocido':{
      bbva:'TDC BBVA: aparece “STREAMING XYZ” por $199. Antes de declararlo fraude, se revisa si es suscripción, tarjeta adicional, compra duplicada o comercio que factura con otro nombre.',
      memorize:['“No reconozco” inicia investigación','Sondear antes de tipificar','Seguridad primero si hubo datos comprometidos']
    },
    'phishing':{bbva:'Correo falso: “BBVA: tu cuenta será bloqueada, entra a esta liga”. El cliente no debe capturar credenciales y se sigue el protocolo si ya compartió datos.',memorize:['Phishing = correo/web falso','Busca robar datos','Usar canales oficiales']},
    'smishing':{bbva:'SMS falso: “BBVA detectó un cargo, confirma aquí”. Es el mismo engaño pero por mensaje de texto.',memorize:['Smishing = SMS fraudulento','No confiar por nombre del remitente']},
    'vishing':{bbva:'Llamada falsa: “Soy BBVA, dime el código para cancelar un cargo”. Si el cliente entregó datos/códigos, se prioriza protección y revisión de movimientos.',memorize:['Vishing = llamada fraudulenta','Urgencia + solicitud de datos = señal de riesgo']},
    'spoofing':{bbva:'El celular muestra un identificador que parece BBVA, pero eso por sí solo no prueba que la llamada sea legítima.',memorize:['Spoofing = falsificar/remedar identificador','El nombre/número visible no garantiza legitimidad']},

    'cheque':{
      bbva:'Cheque BBVA ficticio: #000123 · Fecha 10/09/2026 · Páguese a Ana López · $2,500.00 · “Dos mil quinientos pesos 00/100 M.N.” · firma del librador.',
      format:'Cheque #000123 · $2,500.00 · Ana López',
      memorize:['Es una orden de pago contra una cuenta','Revisa beneficiario, importe, fecha, firma y estatus','El tipo de cheque cambia cómo puede cobrarse']
    },
    'endoso':{
      bbva:'Cheque negociable a nombre de Ana López. Si el tipo permite endoso, Ana puede transmitir derechos conforme a requisitos; si dice “no negociable”, no se trata igual.',
      memorize:['Endoso = transmitir derechos cuando se permite','No todo cheque puede endosarse']
    },
    'cheque cruzado':{
      bbva:'Cheque BBVA ficticio con dos líneas paralelas en el frente. La señal visual indica que su forma de cobro está restringida y normalmente se dirige a depósito en cuenta.',
      memorize:['Dos líneas = cheque cruzado','No se maneja igual que efectivo en ventanilla']
    },
    'cheque de otro banco y saldo a buen cobro':{
      bbva:'Cliente deposita a BBVA un cheque de otro banco por $6,000. Puede verlo reflejado, pero el dinero sigue pendiente de validación en Cámara de Compensación y no necesariamente está disponible.',
      memorize:['Reflejado ≠ disponible','Cheque de otro banco requiere validación','Revisar saldo a buen cobro/estatus']
    },
    'cheque devuelto':{
      bbva:'Cheque ficticio #000123 por $6,000 es devuelto. El asesor consulta la clave/motivo exacto; no responde “seguro no tenía fondos” sin revisar.',
      memorize:['Devuelto = no pudo aplicarse','Siempre revisar causa específica']
    },

    'estado de cuenta edc':{
      bbva:'EDC BBVA ficticio de TDC: periodo 01/08–31/08; saldo anterior $3,000; compras $4,200; pagos $2,000; saldo del ciclo $5,200. Los importes son solo para aprender a leerlo.',
      memorize:['EDC = resumen formal de un periodo','Lee periodo antes de buscar un movimiento','En TDC distingue saldo, pago mínimo, PPNGI y fechas']
    },
    'fecha de corte':{
      bbva:'TDC ficticia: corte 31/08. Compra el 30/08 puede entrar en ese ciclo; compra el 01/09 normalmente cae al siguiente, sujeto al procesamiento real.',
      memorize:['Corte cierra el ciclo','Después del corte empieza otro periodo']
    },

    'actualizacion de correo':{bbva:'Cliente BBVA cambia de correo de luis.viejo@ejemplo.com a luis.nuevo@ejemplo.com. Antes de modificar, se identifica qué servicio usa ese correo y la autenticación aplicable.',memorize:['Correo puede usarse en distintos servicios','No asumir que un cambio actualiza todo']},
    'actualizacion de telefono':{bbva:'Teléfono ficticio anterior: *** *** 1122. Nuevo: *** *** 7788. El proceso puede afectar alertas o canales digitales y requiere la validación vigente.',memorize:['Teléfono puede ser dato de contacto y también vínculo de seguridad','Proceso exacto → MAU/CUC']},
    'actualizacion de domicilio':{bbva:'Cliente BBVA se muda de una dirección anterior a una nueva. Se revisa qué producto/dato necesita actualizar y qué comprobante/canal aplica.',memorize:['Domicilio = dato contractual/contacto','Requisitos pueden variar por producto']},

    'pago de servicios':{
      bbva:'Cuenta BBVA ficticia paga $480 de un servicio desde la app usando la referencia indicada. Si el proveedor no lo ve, se revisan referencia, fecha, estatus y comprobante.',
      memorize:['Pago manual ≠ domiciliación','Revisar referencia y estatus','Tiempo de aplicación depende del servicio']
    },
    'cie':{
      bbva:'Pago CIE ficticio: convenio 1234567 · referencia 000987654321 · importe $850. Es solo un ejemplo visual; los convenios/referencias reales los proporciona el servicio.',
      format:'Convenio: 1234567 · Referencia: 000987654321 · $850',
      memorize:['Convenio identifica al receptor/esquema','Referencia ayuda a aplicar el pago','No inventar referencias reales']
    },
    'domiciliacion':{
      bbva:'Cliente autoriza que su recibo de internet se cargue automáticamente a su cuenta BBVA cada periodo. Él no entra a pagar manualmente cada mes.',
      memorize:['Autorización automática','Puede cargarse a cuenta/producto según servicio','Domiciliación ≠ cargo recurrente de comercio en tarjeta']
    },
    'cargo recurrente':{
      bbva:'Suscripción ficticia de streaming por $199 se cobra cada mes a una TDC BBVA porque el comercio tiene una autorización recurrente.',
      memorize:['Comercio presenta cobros periódicos','Frecuente en suscripciones','Cancelar tarjeta no siempre sustituye cancelar la relación con el comercio']
    },

    'tramite por fallecimiento':{
      bbva:'Caso ficticio: fallece Eduardo Martínez y su familiar llama por una cuenta BBVA. El asesor no trata el caso como un retiro normal: identifica producto, solicitante y trámite de fallecimiento vigente.',
      memorize:['Es proceso sensible','Producto + solicitante + documentación','No prometer entrega de saldo sin validar legitimación']
    },
    'beneficiario':{
      bbva:'Seguro de vida ficticio: Eduardo designa 50% a Ana y 50% a Carlos. Al fallecimiento, la aseguradora valida póliza, beneficiarios y documentación antes de pagar.',
      memorize:['Beneficiario recibe beneficio cuando corresponde','Parentesco por sí solo no confirma designación']
    },

    'cuenta de nomina':{
      bbva:'Empresa ficticia deposita $12,500 quincenales a la cuenta de nómina del trabajador. Ese abono es ingreso; no es un préstamo.',
      memorize:['Nómina = depósito del empleador','Préstamo de nómina = crédito distinto']
    },
    'portabilidad de nomina':{
      bbva:'Empresa deposita $12,500 en Banco Origen. La portabilidad transfiere automáticamente esos recursos a la cuenta BBVA del cliente. La empresa no necesita cambiar dónde deposita.',
      format:'Empresa → Banco origen → Cuenta BBVA destino',
      memorize:['Es gratuita según BBVA','La empresa sigue depositando al origen','Destino recibe por la instrucción de portabilidad']
    },
    'portabilidad no recibida':{
      bbva:'Caso ficticio: Banco Origen sí recibió la nómina de $12,500, pero BBVA no muestra la transferencia esperada. Eso es distinto a que el patrón nunca haya depositado.',
      memorize:['Primero confirmar si llegó la nómina al origen','Luego revisar estatus de portabilidad']
    },

    'saldo a favor en tdc':{
      bbva:'TDC BBVA ficticia debía $1,000 y el cliente pagó $1,500. Si no hay otros conceptos, podría quedar $500 a favor. Cómo se traspasa se revisa en el proceso vigente.',
      memorize:['Saldo a favor = abonos exceden saldo deudor aplicable','No es lo mismo que línea disponible']
    },
    'movilidad de saldos':{
      bbva:'Caso de estudio: cliente dice “quiero pasar $500 que tengo a favor en mi TDC a mi cuenta”. Eso puede relacionarse con traspaso de saldo a favor, pero el nombre interno “movilidad de saldos” se confirma en CUC.',
      memorize:['Preguntar origen y destino','Saldo a favor ≠ línea de crédito','Definición interna exacta → CUC']
    },

    'credito de consumo':{
      bbva:'Préstamo BBVA ficticio: $30,000 de capital a 24 meses. El cliente recibe dinero hoy y lo devuelve en pagos conforme a tasa, plazo y contrato.',
      format:'Capital: $30,000 · Plazo: 24 meses · Tasa: según oferta',
      memorize:['Capital = dinero prestado','Plazo = tiempo para pagar','Tasa/interés = costo financiero']
    },
    'capital':{bbva:'Crédito ficticio $30,000: esos $30,000 son el capital inicial, antes de considerar intereses u otros costos.',memorize:['Capital = principal','No es costo total del crédito']},
    'plazo':{bbva:'EFI/préstamo ficticio: el cliente elige 24 meses dentro de las opciones que su oferta permite. 24 meses es el plazo.',memorize:['Plazo = tiempo','Más plazo cambia distribución de pagos y puede cambiar costo total']},
    'saldo insoluto':{bbva:'Préstamo inició en $30,000. Después de amortizar capital, quedan $21,400 de principal pendiente: ese sería el saldo insoluto del ejemplo.',memorize:['Saldo insoluto = capital pendiente','No es suma de todos los pagos futuros']},

    'efi efectivo inmediato':{
      bbva:'Ejemplo cercano al publicado por BBVA: línea TDC $60,000; usados $10,000; crédito disponible $50,000. Si el cliente tiene invitación, EFI podría permitir disponer de parte de ese disponible conforme a la oferta.',
      format:'Línea $60,000 − usado $10,000 = hasta $50,000 disponibles antes de condiciones de la oferta',
      memorize:['EFI usa línea de TDC','Solo si BBVA envía una oferta/invitación','Tiene tasa, comisión/plazo y pagos propios']
    },
    'oferta preaprobada':{
      bbva:'En “Oportunidades” de App BBVA aparece una invitación ficticia de EFI por hasta $35,000. Verla significa que existe una oferta; todavía no es dinero depositado.',
      memorize:['Oferta visible ≠ dinero propio','Condiciones son individuales']
    },

    'tarjeta de credito tdc':{
      bbva:'TDC BBVA ficticia: línea $30,000. Compra $4,500 → deuda sube $4,500 y disponible baja aproximadamente a $25,500 si no hay otros movimientos.',
      format:'Línea: $30,000 · Compra: $4,500 · Disponible aprox.: $25,500',
      memorize:['TDC usa dinero prestado','Compra aumenta deuda','Pago libera línea conforme al producto']
    },
    'linea de credito':{
      bbva:'Línea ficticia $30,000; ya usados $12,000; disponible aproximado $18,000. La línea no es saldo depositado en una cuenta.',
      memorize:['Línea = máximo autorizado','Disponible = parte aún utilizable','No es dinero propio']
    },
    'pago minimo':{
      bbva:'EDC ficticio: saldo $10,000 · pago mínimo $700 · PPNGI $6,400. Pagar $700 puede mantener al corriente, pero deja deuda; no equivale a cubrir $6,400.',
      format:'Saldo: $10,000 · Mínimo: $700 · PPNGI: $6,400',
      memorize:['Mínimo ≠ PPNGI','Pagar mínimo deja saldo financiado','Puede generar intereses']
    },
    'ppngi':{
      bbva:'EDC ficticio muestra PPNGI $6,400. Si el cliente cubre ese monto antes de la fecha límite, busca evitar intereses ordinarios del saldo aplicable del ciclo según el producto.',
      format:'PPNGI ficticio: $6,400',
      memorize:['PPNGI = pago para no generar intereses','Sale en el estado de cuenta','No confundir con pago mínimo ni saldo total']
    },
    'cascada de pagos':{
      bbva:'Ejemplo del manual adaptado: compras normales $4,800 + mensualidad MSI $3,000 → PPNGI $7,800. Un pago se aplica según la composición/cascada del producto, no siempre a lo que el cliente “quería pagar” primero.',
      memorize:['El pago se distribuye por reglas','PPNGI, revolvente y diferidos son componentes distintos','Revisar aplicación real antes de explicar']
    },
    'tasa de interes':{
      bbva:'Oferta ficticia: tasa anual 32%. Ese 32% es un porcentaje; NO significa que hoy se carguen $32 por cada $100 sin considerar saldo, días y método de cálculo.',
      format:'Tasa ficticia: 32% anual',
      memorize:['Tasa = porcentaje','Interés = dinero calculado','Tasa ≠ CAT']
    },
    'interes':{
      bbva:'Si una TDC genera $420 de intereses en un ciclo, $420 es el costo en pesos. La tasa es el porcentaje usado dentro del cálculo.',
      format:'Tasa = % · Interés = $',
      memorize:['Interés se expresa en dinero','Depende de saldo/base, tiempo y tasa','No calcularlo mentalmente con una fórmula simplista']
    },
    'anualidad administracion de tarjeta':{
      bbva:'Tarjeta A ficticia: comisión por administración del titular $0. Tarjeta B ficticia: $1,200 al año. El monto real depende del producto vigente.',
      memorize:['Anualidad = comisión de administración cuando aplica','No es interés','No todas las tarjetas cobran lo mismo']
    },
    'cat':{
      bbva:'Crédito ficticio A: tasa 30%, CAT 42%. Crédito B: tasa 32%, CAT 38%. El CAT ayuda a comparar costo integral; no es simplemente la tasa.',
      format:'Tasa ≠ CAT',
      memorize:['CAT = Costo Anual Total','Indicador comparativo','Integra más que solo la tasa']
    },
    'meses sin intereses msi':{
      bbva:'Compra BBVA ficticia $12,000 a 6 MSI → $2,000 por mes, si la promoción aplica y se cumplen condiciones. No significa “seis meses sin pagar”.',
      format:'$12,000 ÷ 6 = $2,000 por mensualidad',
      memorize:['MSI divide compra','Cada parcialidad sí se paga','Promoción vigente/condiciones importan']
    },

    'seguro':{
      bbva:'Seguro BBVA ficticio: pagas una prima para proteger un riesgo definido. Si ocurre un siniestro cubierto, la aseguradora evalúa la póliza y paga/presta el servicio que corresponda.',
      memorize:['Seguro = protección contractual','Prima = costo','Cobertura = lo que protege']
    },
    'poliza':{
      bbva:'Póliza ficticia BBVA Auto #AUTO-EJEMPLO-001: vigencia 01/09/2026–31/08/2027; coberturas y deducibles se listan dentro del contrato.',
      format:'Póliza ficticia: AUTO-EJEMPLO-001',
      memorize:['Póliza = contrato/documento','Ahí viven coberturas, sumas, deducibles y exclusiones']
    },
    'prima':{
      bbva:'Seguro ficticio: prima mensual $450. Eso es lo que se paga por mantener la cobertura; no es el deducible de un accidente.',
      format:'Prima ficticia: $450/mes',
      memorize:['Prima = precio del seguro','Deducible = participación en ciertos siniestros']
    },
    'cobertura':{
      bbva:'Auto ficticio: responsabilidad civil + robo total + daños materiales. Esas son coberturas; cada una tiene condiciones propias.',
      memorize:['Cobertura = riesgo protegido','No asumir que “amplia” cubre absolutamente todo']
    },
    'suma asegurada':{
      bbva:'Seguro de vida ficticio con suma asegurada $500,000. Es el beneficio/límite contractual para esa cobertura, sujeto a condiciones; no significa pago automático en cualquier caso.',
      format:'Suma asegurada ficticia: $500,000',
      memorize:['Suma asegurada = monto/límite de cobertura','Pago real depende del evento y póliza']
    },
    'deducible':{
      bbva:'Daño ficticio al auto $20,000. Si la póliza establece un deducible aplicable, el asegurado cubre la parte que corresponda y la aseguradora cubre lo procedente según contrato.',
      memorize:['Deducible se paga en ciertos siniestros','No es la prima','Porcentaje/monto exacto está en póliza']
    },
    'siniestro':{
      bbva:'Cliente con Seguro de Auto BBVA choca. El choque es el siniestro; después se reporta y se valida si la cobertura aplica.',
      memorize:['Siniestro = evento ocurrido','No equivale a indemnización aprobada']
    },
    'beneficiario seguro':{
      bbva:'Seguro de vida ficticio: Ana 60% y Carlos 40% como beneficiarios. La aseguradora valida designación y documentos antes de pagar.',
      memorize:['Beneficiario recibe beneficio cuando corresponde','No es necesariamente quien pagó la póliza']
    },

    'transferencia':{
      bbva:'Cliente BBVA envía $1,250 desde su cuenta 9012345678 a otra cuenta. El asesor identifica si fue propia, BBVA, otro banco o internacional antes de revisar el estatus.',
      memorize:['Origen + destino + importe + fecha + estatus','Tipo de transferencia define proceso']
    },
    'spei':{
      bbva:'Transferencia ficticia BBVA → otro banco por $1,250. Se genera una clave de rastreo y Banxico puede mostrar un estado como “Liquidado”, “Devuelto” o “En proceso”.',
      memorize:['SPEI = sistema interbancario','Clave de rastreo ayuda a seguimiento','Estatus es clave para explicar']
    },
    'cep':{
      bbva:'Ejemplo: cliente descarga el CEP de un SPEI de $1,250 para comprobar los datos de la operación. El documento se consulta con información del pago.',
      memorize:['CEP = comprobante electrónico de pago','Se relaciona con SPEI','Usar datos correctos de la operación']
    },
    'clave de rastreo':{
      bbva:'Clave ficticia solo visual: BBVA-EJEMPLO-260910-001. No representa el formato real obligatorio; sirve para recordar que cada SPEI lleva un identificador de seguimiento.',
      format:'BBVA-EJEMPLO-260910-001',
      memorize:['Identifica/ayuda a rastrear un SPEI','No es CLABE ni referencia del beneficiario']
    },
    'opi':{
      bbva:'Cliente BBVA quiere enviar USD 1,000 a una cuenta en otro país. Ya no basta con una CLABE mexicana: puede requerir SWIFT/BIC, banco, beneficiario, moneda e identificadores del país.',
      memorize:['OPI = Orden de Pago Internacional','País y moneda importan','Puede intervenir banco corresponsal']
    },
    'swift bic':{
      bbva:'Ejemplo didáctico de estructura SWIFT: BBBBMXMMXXX. NO lo uses como código real; sirve para visualizar que es un identificador del banco/institución, no de la cuenta del cliente.',
      format:'BBBBMXMMXXX · ejemplo ficticio de forma',
      memorize:['SWIFT/BIC identifica institución','No es CLABE','Usado en operaciones internacionales']
    }
  };

  guideTopics.forEach(topic=>{
    (topic.sections||[]).forEach(s=>{
      const k=norm(s.t);
      const d=D[k]||{};
      Object.assign(s,d);
      if(!s.bbva) s.bbva=`Cliente BBVA ficticio: ${s.example||'aplica este concepto dentro del producto y proceso correspondiente.'}`;
      if(!s.memorize) s.memorize=[`Qué significa “${s.t}”`,`Para qué sirve dentro de ${topic.title}`,s.warning?'Qué dato debes confirmar en CUC':'Con qué concepto no debes confundirlo'];
    });
  });
})();