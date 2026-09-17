/* Reparación Balay Valladolid — app.js (JS puro, sin dependencias, sin peticiones externas) */
(function () {
  'use strict';
  var CONFIG = {
    TEL: '641 153 922', TEL_HREF: 'tel:+34641153922',
    WA: '641 153 922', WA_BASE: 'https://wa.me/34641153922?text=',
    MARCA: 'Balay', MARCA_RE: /\b(BALAY)\b/g, SAT_TXT: '<a href="https://www.balay.es/servicio-al-cliente" rel="nofollow noopener" target="_blank">balay.es</a> · 976 305 712', ETIQUETA: 'E-Nr', F_ES_E: true,
    FORM_ENDPOINT: '' /* vacío = envío por WhatsApp (canal citado en Privacidad); si se activa un proveedor, actualizar Privacidad */
  };
  var CODIGOS=[{"id":"e18-lavadora","cod":"F18 / E18","ap":"lavadora","keys":["E18"],"titulo":"No desagua","sig":"La lavadora no puede evacuar el agua: filtro de la bomba, manguera o bomba.","pasos":["Apagar y desenchufar; vaciar por la manguera de emergencia con una bandeja","Limpiar el filtro de la bomba (abajo a la derecha)","Manguera de desagüe sin dobleces y sifón limpio"],"sem":"verde","llamar":"Filtro limpio y sigue igual: bomba de desagüe."},{"id":"f04-lavadora","cod":"F04 / E06","ap":"lavadora","keys":["F04","E06","E6"],"titulo":"No desagua (gama sencilla)","sig":"Problema con el vaciado del agua en las 3TS sin pantalla; en las de display aparece como E06.","pasos":["Apagar y desenchufar; vaciar por la manguera de emergencia con una bandeja","Limpiar el filtro de la bomba (abajo a la derecha)","Manguera de desagüe sin dobleces y sifón limpio"],"sem":"verde","llamar":"Si persiste con el filtro limpio: bomba o presostato."},{"id":"e17-lavadora","cod":"F17 / E17","ap":"lavadora","keys":["E17"],"titulo":"No entra agua","sig":"Incidencia con el suministro de agua: grifo, manguera o filtro de entrada.","pasos":["Abrir el grifo del todo","Manguera de entrada sin dobleces","Con el grifo cerrado, desenroscar la manguera y limpiar el filtro de la electroválvula"],"sem":"verde","llamar":"Con presión y todo limpio: electroválvula."},{"id":"e29-lavadora","cod":"E29","ap":"lavadora","keys":["E29"],"titulo":"Presión de agua baja","sig":"El agua no entra correctamente: poca presión en la toma.","pasos":["Comprobar el grifo y la presión en otro grifo de la casa","Manguera de entrada sin dobleces"],"sem":"verde","llamar":"Presión normal y persiste: electroválvula o caudalímetro."},{"id":"e16-lavadora","cod":"E16 / F16","ap":"lavadora","keys":["E16"],"titulo":"Puerta mal cerrada","sig":"La lavadora no detecta la puerta cerrada.","pasos":["Retirar prendas atrapadas en la goma","Cerrar la puerta con firmeza"],"sem":"verde","llamar":"Persiste: cierre eléctrico (blocapuertas)."},{"id":"f23-lavadora","cod":"F23 / E23","ap":"lavadora","keys":["E23"],"titulo":"AquaStop: agua en la base","sig":"El sistema antifugas ha detectado agua bajo la lavadora.","pasos":[],"sem":"ambar","llamar":"Siempre: cierra el grifo, desenchufa y no la uses; hay una fuga interna."},{"id":"e10-lavadora","cod":"E10","ap":"lavadora","keys":["E10"],"titulo":"AutoDosificación bloqueada","sig":"La bomba de dosificación automática está bloqueada, normalmente por detergente en gel espeso.","pasos":["Apagar la lavadora","Limpiar la unidad de dosificación según el manual","Usar detergente líquido, no gel espeso"],"sem":"verde","llamar":"Limpia y sigue: módulo dosificador."},{"id":"e36-lavadora","cod":"E36","ap":"lavadora","keys":["E36"],"titulo":"Desagüe obstruido o mucha espuma","sig":"La manguera está demasiado alta (más de 1 m), obstruida, o hay exceso de detergente.","pasos":["Bajar la manguera de desagüe (máx. 1 m de altura)","Limpiar manguera y sifón","Reducir la dosis de detergente"],"sem":"verde","llamar":"Si persiste con todo revisado."},{"id":"e02-lavadora","cod":"E02","ap":"lavadora","keys":["E02","E2"],"titulo":"Fallo en el motor","sig":"Fallo de motor: escobillas, tacómetro o su control.","pasos":[],"sem":"ambar","llamar":"Siempre; desenchúfala."},{"id":"f43-lavadora","cod":"F43","ap":"lavadora","keys":["F43"],"titulo":"Motor / tambor bloqueado","sig":"Problema con el motor o el tambor no gira.","pasos":["Desenchufar y comprobar que el tambor gira a mano, sin ropa"],"sem":"ambar","llamar":"Siempre."},{"id":"e61-lavadora","cod":"E61","ap":"lavadora","keys":["E61"],"titulo":"Error en la electrónica","sig":"El módulo de control ha detectado un fallo interno.","pasos":["Desenchufar 10 minutos y volver a probar"],"sem":"ambar","llamar":"Si se repite: módulo."},{"id":"e18-lavasecadora","cod":"F18 / E18","ap":"lavasecadora","keys":["E18"],"titulo":"No desagua","sig":"La lavasecadora no puede evacuar el agua: filtro de la bomba, manguera o bomba.","pasos":["Apagar y desenchufar; vaciar por la manguera de emergencia con una bandeja","Limpiar el filtro de la bomba (abajo a la derecha)","Manguera de desagüe sin dobleces y sifón limpio"],"sem":"verde","llamar":"Filtro limpio y sigue igual: bomba de desagüe."},{"id":"f04-lavasecadora","cod":"F04 / E06","ap":"lavasecadora","keys":["F04","E06","E6"],"titulo":"No desagua (gama sencilla)","sig":"Problema con el vaciado del agua; en los modelos con display aparece como E06.","pasos":["Apagar y desenchufar; vaciar por la manguera de emergencia con una bandeja","Limpiar el filtro de la bomba (abajo a la derecha)","Manguera de desagüe sin dobleces y sifón limpio"],"sem":"verde","llamar":"Si persiste con el filtro limpio: bomba o presostato."},{"id":"e17-lavasecadora","cod":"F17 / E17","ap":"lavasecadora","keys":["E17"],"titulo":"No entra agua","sig":"Incidencia con el suministro de agua: grifo, manguera o filtro de entrada. Al secar también necesita agua para condensar.","pasos":["Abrir el grifo del todo","Manguera de entrada sin dobleces","Con el grifo cerrado, desenroscar la manguera y limpiar el filtro de la electroválvula"],"sem":"verde","llamar":"Con presión y todo limpio: electroválvula."},{"id":"e29-lavasecadora","cod":"E29","ap":"lavasecadora","keys":["E29"],"titulo":"Presión de agua baja","sig":"El agua no entra correctamente: poca presión en la toma.","pasos":["Comprobar el grifo y la presión en otro grifo de la casa","Manguera de entrada sin dobleces"],"sem":"verde","llamar":"Presión normal y persiste: electroválvula o caudalímetro."},{"id":"e16-lavasecadora","cod":"E16 / F16","ap":"lavasecadora","keys":["E16"],"titulo":"Puerta mal cerrada","sig":"La lavasecadora no detecta la puerta cerrada.","pasos":["Retirar prendas atrapadas en la goma","Cerrar la puerta con firmeza"],"sem":"verde","llamar":"Persiste: cierre eléctrico (blocapuertas)."},{"id":"f23-lavasecadora","cod":"F23 / E23","ap":"lavasecadora","keys":["E23"],"titulo":"AquaStop: agua en la base","sig":"El sistema antifugas ha detectado agua bajo la lavasecadora.","pasos":[],"sem":"ambar","llamar":"Siempre: cierra el grifo, desenchufa y no la uses; hay una fuga interna."},{"id":"e36-lavasecadora","cod":"E36","ap":"lavasecadora","keys":["E36"],"titulo":"Desagüe obstruido o mucha espuma","sig":"La manguera está demasiado alta (más de 1 m), obstruida, o hay exceso de detergente.","pasos":["Bajar la manguera de desagüe (máx. 1 m de altura)","Limpiar manguera y sifón","Reducir la dosis de detergente"],"sem":"verde","llamar":"Si persiste con todo revisado."},{"id":"e02-lavasecadora","cod":"E02","ap":"lavasecadora","keys":["E02","E2"],"titulo":"Fallo en el motor","sig":"Fallo de motor: escobillas, tacómetro o su control.","pasos":[],"sem":"ambar","llamar":"Siempre; desenchúfala."},{"id":"f43-lavasecadora","cod":"F43","ap":"lavasecadora","keys":["F43"],"titulo":"Motor / tambor bloqueado","sig":"Problema con el motor o el tambor no gira.","pasos":["Desenchufar y comprobar que el tambor gira a mano, sin ropa"],"sem":"ambar","llamar":"Siempre."},{"id":"e61-lavasecadora","cod":"E61","ap":"lavasecadora","keys":["E61"],"titulo":"Error en la electrónica","sig":"El módulo de control ha detectado un fallo interno.","pasos":["Desenchufar 10 minutos y volver a probar"],"sem":"ambar","llamar":"Si se repite: módulo."},{"id":"e15-lavavajillas","cod":"E15","ap":"lavavajillas","keys":["E15"],"titulo":"Agua en la base (AquaStop)","sig":"El sistema de protección del agua ha detectado agua en la bandeja de la base.","pasos":["Cerrar el grifo","Inclinar el lavavajillas 45° hacia atrás para vaciar la base","Mirar si hay fuga visible en la puerta o la manguera"],"sem":"verde","llamar":"Si vuelve a marcar E15: fuga interna."},{"id":"e24-lavavajillas","cod":"E24","ap":"lavavajillas","keys":["E24"],"titulo":"Desagüe obstruido","sig":"Tubo de desagüe obstruido o doblado, sifón cerrado o tapa de la bomba suelta.","pasos":["Manguera de desagüe sin dobleces","Abrir la conexión al sifón (tapón de fábrica)","Enclavar la tapa de la bomba"],"sem":"verde","llamar":"Persiste: bomba de desagüe."},{"id":"e25-lavavajillas","cod":"E25","ap":"lavavajillas","keys":["E25"],"titulo":"Bomba de desagüe bloqueada","sig":"Bomba bloqueada por cristales o restos, o tapa mal enclavada.","pasos":["Retirar cristales o huesos de la bomba (según el manual)","Enclavar bien la tapa de la bomba"],"sem":"verde","llamar":"Sigue: bomba."},{"id":"e22-lavavajillas","cod":"E22","ap":"lavavajillas","keys":["E22"],"titulo":"Filtros sucios","sig":"Los filtros del fondo de la cuba están obstruidos.","pasos":["Limpiar los tres filtros del fondo de la cuba"],"sem":"verde","llamar":"Persiste con los filtros limpios."},{"id":"e18-lavavajillas","cod":"E18","ap":"lavavajillas","keys":["E18"],"titulo":"Entrada de agua","sig":"No entra agua suficiente: manguera doblada, grifo cerrado, filtro obstruido o poco caudal.","pasos":["Abrir el grifo del todo","Manguera de entrada sin dobleces","Limpiar el filtro de entrada"],"sem":"verde","llamar":"Persiste: caudalímetro o electroválvula."},{"id":"e09-lavavajillas","cod":"E09","ap":"lavavajillas","keys":["E09","E9"],"titulo":"Sistema de calentamiento","sig":"Fallo del sistema de calentamiento: no calienta ni seca.","pasos":[],"sem":"ambar","llamar":"Siempre."},{"id":"e12-lavavajillas","cod":"E12","ap":"lavavajillas","keys":["E12"],"titulo":"Resistencia calcificada","sig":"Cal acumulada en la resistencia.","pasos":["Descalcificar con un producto específico para lavavajillas"],"sem":"verde","llamar":"Persiste tras descalcificar."},{"id":"e14-lavavajillas","cod":"E14","ap":"lavavajillas","keys":["E14"],"titulo":"Protección del agua (caudalímetro)","sig":"El sistema de protección del agua ha saltado por el caudalímetro.","pasos":[],"sem":"ambar","llamar":"Siempre: cierra el grifo y llama."},{"id":"e16-lavavajillas","cod":"E16","ap":"lavavajillas","keys":["E16"],"titulo":"Entra agua sin parar","sig":"Entra agua continuamente: electroválvula de entrada.","pasos":[],"sem":"ambar","llamar":"Siempre: cierra el grifo ya."},{"id":"e04-lavavajillas","cod":"E04","ap":"lavavajillas","keys":["E04","E4"],"titulo":"Fallo electrónico","sig":"Fallo en el módulo electrónico.","pasos":["Apagar 10 minutos y reiniciar"],"sem":"ambar","llamar":"Si se repite."},{"id":"e23-lavavajillas","cod":"E23","ap":"lavavajillas","keys":["E23"],"titulo":"Bomba de desagüe","sig":"Fallo de la bomba de desagüe.","pasos":[],"sem":"ambar","llamar":"Siempre."},{"id":"e27-lavavajillas","cod":"E27","ap":"lavavajillas","keys":["E27"],"titulo":"Tensión insuficiente","sig":"La tensión eléctrica que llega al lavavajillas es insuficiente.","pasos":["Probar en otro enchufe"],"sem":"ambar","llamar":"Si la instalación es correcta; si no, un electricista."},{"id":"e19-lavavajillas","cod":"E19","ap":"lavavajillas","keys":["E19"],"titulo":"Fallo del dosificador","sig":"Fallo del dosificador de detergente y abrillantador.","pasos":[],"sem":"ambar","llamar":"Siempre."},{"id":"e01-secadora","cod":"E01 / E02","ap":"secadora","keys":["E01","E1","E02","E2"],"titulo":"Filtro o condensador obstruidos","sig":"El aire no circula: pelusas en el filtro o restos de suavizante en el condensador.","pasos":["Limpiar el filtro de pelusas de la puerta","Sacar y lavar el condensador con agua (parte baja)","Dejar libre la salida de aire"],"sem":"verde","llamar":"Con todo limpio y sigue: sensor o bomba de calor."},{"id":"e03-secadora","cod":"E03","ap":"secadora","keys":["E03","E3"],"titulo":"Depósito lleno o tubo obstruido","sig":"El agua condensada no llega al depósito o el depósito está lleno.","pasos":["Vaciar el depósito de agua","Limpiar el tubo de condensados y el sifón si desagua directo"],"sem":"verde","llamar":"Si persiste: bomba de condensados."},{"id":"e06-secadora","cod":"E06","ap":"secadora","keys":["E06","E6"],"titulo":"Circuito de calefacción","sig":"Fallo en la resistencia o en la bomba de calor.","pasos":[],"sem":"ambar","llamar":"Siempre."},{"id":"e08-secadora","cod":"E08/E09/E24/E25/E28/E90","ap":"secadora","keys":["E08","E8","E09","E9","E24","E25","E28","E90"],"titulo":"Sensores o electrónica","sig":"Fallo en un sensor o en el módulo de control.","pasos":["Desenchufar 10 minutos y volver a probar"],"sem":"ambar","llamar":"Si vuelve a marcarlo."},{"id":"safe-horno","cod":"SAFE","ap":"horno","keys":["SAFE"],"titulo":"Bloqueo infantil","sig":"El panel está bloqueado para niños: no es avería.","pasos":["Mantener pulsado el símbolo de la llave unos 4 segundos"],"sem":"verde","llamar":"Solo si no desbloquea tras varios intentos."},{"id":"eh-horno","cod":"-E- H-","ap":"horno","keys":["EH"],"titulo":"Desconexión de seguridad","sig":"El horno se ha apagado por temperatura o tiempo de uso excesivos (gama sencilla).","pasos":["Dejar enfriar el horno","Bajar el diferencial 1 minuto y volver a conectar"],"sem":"verde","llamar":"Si lo repite: sonda de temperatura o relé."},{"id":"uout-horno","cod":"-U- out","ap":"horno","keys":["UOUT","OUT"],"titulo":"Apagado automático","sig":"Ha estado más de 4 horas en marcha y se ha apagado solo.","pasos":["Pulsar cualquier tecla para reactivarlo"],"sem":"verde","llamar":"No hace falta: es una función de seguridad."},{"id":"e011-horno","cod":"E011 / E0111 / D0111","ap":"horno","keys":["E011","E0111","D0111"],"titulo":"Tecla pulsada o panel sucio","sig":"Una tecla lleva demasiado tiempo pulsada: panel manchado, húmedo o electrónica.","pasos":["Limpiar y secar el panel táctil","Bajar el diferencial 1 minuto y reconectar"],"sem":"ambar","llamar":"Si sigue con el panel limpio y seco: placa del panel."},{"id":"e1-horno","cod":"E1 / E4","ap":"horno","keys":["E1","E4"],"titulo":"Desconexión térmica","sig":"Protección por temperatura: el horno ha cortado por seguridad.","pasos":[],"sem":"ambar","llamar":"Siempre: sonda de temperatura o relé."},{"id":"er6-horno","cod":"Er6 / Er7","ap":"horno","keys":["ER6","ER7"],"titulo":"Puerta bloqueada en pirólisis","sig":"El cierre de la puerta no bloquea (Er6) o no desbloquea (Er7) durante la pirólisis.","pasos":[],"sem":"ambar","llamar":"Siempre, sin forzar la puerta: espera a que enfríe y llama."},{"id":"f2-placa","cod":"F2 / F02","ap":"placa","keys":["F2","F02"],"titulo":"Electrónica sobrecalentada","sig":"La electrónica ha subido de temperatura o ha habido una sobretensión.","pasos":["Cortar el diferencial 30 segundos","Dejar enfriar la placa","Volver a encenderla"],"sem":"verde","llamar":"Si lo repite: ventilador o módulo."},{"id":"f4-placa","cod":"F4","ap":"placa","keys":["F4"],"titulo":"Sigue caliente tras F2","sig":"La electrónica sigue calentando después de un F2.","pasos":["Desconectar la placa al menos 30 minutos"],"sem":"ambar","llamar":"Si vuelve: ventilador o módulo de potencia."},{"id":"f5-placa","cod":"F5","ap":"placa","keys":["F5"],"titulo":"Recipiente caliente sobre el panel","sig":"Una olla caliente está sobre los mandos o junto a ellos.","pasos":["Retirar el recipiente del panel de mandos"],"sem":"verde","llamar":"No hace falta."},{"id":"f8-placa","cod":"F8","ap":"placa","keys":["F8"],"titulo":"Tiempo máximo de funcionamiento","sig":"La zona lleva demasiado tiempo encendida y se ha apagado sola.","pasos":["Apagar la zona y volver a encenderla"],"sem":"verde","llamar":"No hace falta."},{"id":"u400-placa","cod":"U400","ap":"placa","keys":["U400"],"titulo":"Conexión a 400 V","sig":"La placa está conectada a 400 V en lugar de 230 V: conexión incorrecta.","pasos":[],"sem":"ambar","llamar":"Siempre, sin encenderla: hay que corregir la conexión."},{"id":"de-placa","cod":"dE","ap":"placa","keys":["DE","DEMO"],"titulo":"Modo demo","sig":"La placa está en modo exposición: enciende pero no calienta.","pasos":["Desconectar la placa 30 segundos","Al reconectar, pulsar una tecla en menos de 3 minutos"],"sem":"verde","llamar":"Si no sale del modo demo."},{"id":"expo-frigorifico","cod":"Pantalla encendida, no enfría","ap":"frigorifico","keys":["EXPOSICION","DEMO","NOENFRIA"],"titulo":"Modo exposición activado","sig":"La pantalla se ilumina pero el compresor no arranca: en muchos modelos es el modo exposición de tienda.","pasos":["Mantener pulsada la tecla de bloqueo o alarma unos 10 segundos hasta oír un pitido","Comprobar que la función Vacaciones no está activada"],"sem":"verde","llamar":"Si tras quitarlo sigue sin enfriar al día siguiente: ventilador, damper o compresor.","aviso":1},{"id":"alarma-frigorifico","cod":"Alarma + pitido","ap":"frigorifico","keys":["ALARMA","PITA","PILOTO"],"titulo":"Temperatura demasiado alta","sig":"Pita o parpadea porque la temperatura ha subido: corte de luz, puerta abierta o comida caliente.","pasos":["Pulsar la tecla de alarma para silenciarla","Comprobar que la puerta cierra y nada la bloquea","Esperar unas horas a que recupere la temperatura"],"sem":"verde","llamar":"Si vuelve a sonar sin corte de luz ni puerta abierta.","aviso":1},{"id":"alarma-congelador","cod":"Alarma + piloto rojo","ap":"congelador","keys":["ALARMA","PILOTO","PITA"],"titulo":"Temperatura demasiado alta","sig":"El piloto rojo parpadea y pita porque el congelador ha perdido temperatura.","pasos":["Pulsar la tecla de alarma para silenciarla","Comprobar que la puerta o la tapa cierra bien","Si hubo un corte de luz, esperar a que recupere"],"sem":"verde","llamar":"Si vuelve a sonar sin causa aparente.","aviso":1},{"id":"campana-filtro","cod":"Indicador de filtro","ap":"campana","keys":["FILTRO","INDICADOR","SATURACION"],"titulo":"Filtro antigrasa saturado","sig":"El indicador avisa de que toca limpiar el filtro antigrasa (o cambiar el de carbón).","pasos":["Lavar el filtro antigrasa metálico","Cambiar el filtro de carbón si es de recirculación","Apagar el indicador según el manual del modelo"],"sem":"verde","llamar":"Si sigue encendido con el filtro limpio: placa de mandos.","aviso":1}];
var APARATOS={"lavadora":{"id":"lavadora","nombre":"Lavadora","art":"una lavadora","slug":"lavadora"},"lavavajillas":{"id":"lavavajillas","nombre":"Lavavajillas","art":"un lavavajillas","slug":"lavavajillas"},"frigorifico":{"id":"frigorifico","nombre":"Frigorífico","art":"un frigorífico","slug":"frigorifico"},"horno":{"id":"horno","nombre":"Horno","art":"un horno","slug":"horno"},"secadora":{"id":"secadora","nombre":"Secadora","art":"una secadora","slug":"secadora"},"placa":{"id":"placa","nombre":"Placa de inducción","art":"una placa","slug":"placa"},"congelador":{"id":"congelador","nombre":"Congelador","art":"un congelador","slug":"congelador"},"lavasecadora":{"id":"lavasecadora","nombre":"Lavasecadora","art":"una lavasecadora","slug":"lavasecadora"},"campana":{"id":"campana","nombre":"Campana extractora","art":"una campana","slug":"campana"}};
  var REL = document.documentElement.getAttribute('data-rel') || '';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var wa = function (t) { return CONFIG.WA_BASE + encodeURIComponent(t); };
  var ico = function (id, cls) { return '<svg class="' + (cls || '') + '" aria-hidden="true"><use href="#i-' + id + '"/></svg>'; };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- zona (memoria de sesión) */
  var Z = {
    get: function () { try { return sessionStorage.getItem('zona') || ''; } catch (e) { return ''; } },
    set: function (v) { try { v ? sessionStorage.setItem('zona', v) : sessionStorage.removeItem('zona'); } catch (e) { } }
  };
  if (document.body.getAttribute('data-zona')) Z.set(document.body.getAttribute('data-zona'));
  var zonaTxt = function () { return Z.get() || '[tu barrio o municipio]'; };

  /* ---------- horario */
  function abierto() {
    var d = new Date(), h = d.getHours() + d.getMinutes() / 60, w = d.getDay();
    if (w >= 1 && w <= 5) return h >= 8 && h < 20;
    if (w === 6) return h >= 9 && h < 14;
    return false;
  }
  if (!abierto()) $$('[data-chip-hora]').forEach(function (el) { el.textContent = 'Te llamamos a primera hora (L–V desde las 8)'; });

  /* ---------- barra inferior: solo cuando los CTA del hero no se ven */
  var barra = $('.barra');
  if (barra) {
    var heroCta = $('[data-hero-cta]');
    var setBarra = function (on) { barra.classList.toggle('on', on); document.body.classList.toggle('barra-on', on); };
    if (heroCta && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { setBarra(!es[0].isIntersecting && es[0].boundingClientRect.top < 0 || (!es[0].isIntersecting && window.scrollY > 300)); }, { threshold: 0.2 }).observe(heroCta);
    } else setBarra(true);
  }

  /* ---------- modal de llamada en escritorio */
  var esEscritorio = window.matchMedia('(hover:hover) and (pointer:fine)').matches && window.innerWidth >= 1024;
  var modal = $('#modal-tel');
  if (modal && esEscritorio) {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="tel:"]');
      if (!a) return;
      e.preventDefault(); modal.classList.add('on'); $('.cerrar', modal).focus();
    });
    $('.cerrar', modal).addEventListener('click', function () { modal.classList.remove('on'); });
    modal.addEventListener('click', function (e) { if (e.target === modal) modal.classList.remove('on'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') modal.classList.remove('on'); });
    var cp = $('[data-copiar]', modal);
    if (cp) cp.addEventListener('click', function () {
      if (navigator.clipboard) navigator.clipboard.writeText('641153922').then(function () { cp.textContent = 'Copiado: 641 153 922'; });
    });
  }

  /* ---------- vídeo del hero: solo 4G, en viewport, sin reduced-motion ni ahorro de datos */
  var v = $('video[data-src]');
  if (v) {
    var c = navigator.connection || {};
    var okRed = !c.saveData && (!c.effectiveType || c.effectiveType === '4g');
    if (window.innerWidth < 900 && v.getAttribute('data-src-m')) v.setAttribute('data-src', v.getAttribute('data-src-m'));
    if (okRed && !reduced && 'IntersectionObserver' in window) {
      var cargado = false;
      new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) {
          if (!cargado) { cargado = true; v.src = v.getAttribute('data-src'); v.load(); v.addEventListener('playing', function () { v.classList.add('on'); }, { once: true }); }
          v.play().catch(function () { });
        } else if (cargado) v.pause();
      }, { threshold: 0.1 }).observe(v);
    }
  }

  /* ---------- reveals */
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    $$('.rv').forEach(function (el) { io.observe(el); });
  } else $$('.rv').forEach(function (el) { el.classList.add('in'); });

  /* ---------- síntomas (subpáginas) */
  $$('.sint-b').forEach(function (b) {
    b.addEventListener('click', function () {
      var p = b.nextElementSibling, on = b.getAttribute('aria-expanded') === 'true';
      $$('.sint-b', b.closest('.sint')).forEach(function (o) { o.setAttribute('aria-expanded', 'false'); o.nextElementSibling.classList.remove('on'); });
      if (!on) { b.setAttribute('aria-expanded', 'true'); p.classList.add('on'); }
    });
  });
  /* WhatsApp con zona en enlaces marcados */
  $$('a[data-wa]').forEach(function (a) {
    a.addEventListener('click', function () { a.href = wa(a.getAttribute('data-wa').replace('[zona]', zonaTxt())); });
    a.href = wa(a.getAttribute('data-wa').replace('[zona]', zonaTxt()));
  });

  /* ================================================================ BUSCADOR */
  var APW = { lavasecadora: ['LAVASECADORA', 'LAVASECADORAS'], lavadora: ['LAVADORA', 'LAVADORAS'], lavavajillas: ['LAVAVAJILLAS', 'LAVAPLATOS'], congelador: ['CONGELADOR', 'CONGELADORES', 'ARCON'], frigorifico: ['FRIGORIFICO', 'FRIGO', 'NEVERA', 'COMBI', 'AMERICANO', 'FRIGORIFICOS'], secadora: ['SECADORA', 'SECADORAS'], horno: ['HORNO', 'HORNOS'], campana: ['CAMPANA', 'EXTRACTORA'], caldera: ['CALDERA', 'CONDENS', 'CALEFACCION'], calentador: ['CALENTADOR', 'TERMO', 'THERM'], 'aire-acondicionado': ['AIRE', 'ACONDICIONADO', 'SPLIT', 'CLIMA', 'CLIMATIZACION', 'CLIMATE'], placa: ['PLACA', 'INDUCCION', 'VITRO', 'VITROCERAMICA', 'ENCIMERA'] };
  function sinAcentos(s) { return s.normalize ? s.normalize('NFD').replace(/[̀-ͯ]/g, '') : s; }
  function parse(q) {
    var up = sinAcentos(q).toUpperCase(), ap = null;
    Object.keys(APW).forEach(function (k) { APW[k].forEach(function (w) { var re = new RegExp('\\b' + w + '\\b'); if (re.test(up)) { ap = ap || k; up = up.replace(re, ' '); } }); });
    var sinRelleno = up.replace(/\b(ERROR|CODIGO|CODE|DE|MI|LA|EL|MARCA|UN|UNA)\b/g, ' ');
    if (sinRelleno.trim()) up = sinRelleno; /* si la consulta es solo «dE» (código de puerta en LG), no se vacía */
    if (CONFIG.MARCA_RE) up = up.replace(CONFIG.MARCA_RE, ' ');
    var k = up.replace(/[\s\-\._:\/]/g, '');
    k = k.replace(/^O(?=\d)/, 'E').replace(/O(?=\d)/g, '0').replace(/(\d)O/g, '$10');
    if (/^\d+$/.test(k)) k = 'E' + k;
    var alt = CONFIG.F_ES_E && /^F\d/.test(k) ? k.replace(/^F/, 'E') : null;
    return { key: k, alt: alt, ap: ap, fIn: !!alt };
  }
  function buscar1(key, ap, prefijo) {
    return CODIGOS.filter(function (c) {
      if (ap && c.ap !== ap) return false;
      return c.keys.some(function (k) { return prefijo ? k.indexOf(key) === 0 : k === key; });
    });
  }
  function buscar(key, ap, prefijo, alt) {
    var r = buscar1(key, ap, prefijo);
    if (!r.length && alt) r = buscar1(alt, ap, prefijo);
    return r;
  }
  function semTxt(c) { return c.sem === 'verde' ? 'Puedes comprobarlo tú en 2 minutos' : 'Mejor llamar directamente'; }
  function textoWA(c, pasos) {
    var a = APARATOS[c.ap], codigo = c.cod.split('/')[0].trim();
    var t = 'Hola, tengo ' + a.art + ' ' + CONFIG.MARCA + ' que marca ' + codigo + '. ';
    if (pasos && pasos.length) t += 'He probado: ' + pasos.join(', ').toLowerCase() + ' y sigue igual. ';
    return t + 'Estoy en ' + zonaTxt();
  }
  function renderFicha(c, opts) {
    opts = opts || {};
    var a = APARATOS[c.ap], codigo = c.cod.split('/')[0].trim();
    var h = '<article class="ficha' + (c.sem === 'ambar' ? ' hot' : '') + '" data-id="' + c.id + '">';
    h += '<div class="ficha-h"><span class="ficha-cod">' + esc(c.cod) + '</span><span class="ficha-ap">' + ico(a.id) + esc(a.nombre) + ' <span class="marca">' + esc(CONFIG.MARCA) + '</span></span></div>';
    h += '<p class="ficha-t">' + esc(c.titulo) + '</p><p class="ficha-s">' + esc(c.sig) + '</p>';
    h += '<span class="sem sem-' + c.sem + '">' + semTxt(c) + '</span>';
    if (c.pasos.length) {
      h += '<ul class="chk" aria-label="Autocomprobación">' + c.pasos.map(function (p, i) { return '<li><label><input type="checkbox" data-paso="' + i + '"><span>' + esc(p) + '</span></label></li>'; }).join('') + '</ul>';
      h += '<div class="sigue" role="group" aria-label="Resultado"><p>¿Sigue marcando ' + esc(codigo) + '?</p><div class="g"><button type="button" class="si">Sí, sigue igual</button><button type="button" class="no">Se ha arreglado</button></div></div>';
    }
    h += '<div class="llamar-c' + (c.pasos.length ? '' : ' on') + '"><b>Cuándo llamar</b>' + esc(c.llamar) + '</div>';
    h += '<div class="ok-c">Nos alegramos. Si vuelve a marcarlo, aquí estamos. <a class="link" href="' + REL + a.slug + '/">Cómo cuidar tu ' + esc(a.nombre.toLowerCase()) + ' →</a></div>';
    h += '<div class="ficha-cta"><a class="btn btn-wa" data-cta-wa href="' + wa(textoWA(c, [])) + '" target="_blank" rel="noopener">' + ico('wa') + 'WhatsApp con el código</a>';
    h += '<a class="btn btn-amber" data-cta-tel href="' + CONFIG.TEL_HREF + '">' + ico('tel') + 'Llamar · ' + CONFIG.TEL + '</a></div>';
    h += '<div class="ficha-links"><a class="link" href="' + REL + a.slug + '/">Ver todo sobre ' + esc(a.art) + ' ' + esc(CONFIG.MARCA) + ' →</a><button type="button" data-copy="' + c.id + '">Copiar enlace a este código</button></div>';
    h += '<p class="ficha-fin">Presupuesto por escrito en casa antes de tocar nada. Si tu aparato tiene menos de 3 años, tiene garantía legal del fabricante: ' + CONFIG.SAT_TXT + '</p>';
    return h + '</article>';
  }
  function bindFicha(el) {
    var id = el.getAttribute('data-id'), c = CODIGOS.filter(function (x) { return x.id === id; })[0];
    if (!c || el.__b) return; el.__b = true;
    var chk = $$('input[type=checkbox]', el), sigue = $('.sigue', el), llamar = $('.llamar-c', el), ok = $('.ok-c', el);
    var bWa = $('[data-cta-wa]', el), bTel = $('[data-cta-tel]', el);
    var codigo = c.cod.split('/')[0].trim();
    var pasos = function () { return chk.filter(function (i) { return i.checked; }).map(function (i) { return i.nextElementSibling.textContent; }); };
    var refresca = function () { bWa.href = wa(textoWA(c, pasos())); };
    chk.forEach(function (i) {
      i.addEventListener('change', function () {
        refresca();
        if (chk.every(function (x) { return x.checked; })) { sigue.classList.add('on'); } else { sigue.classList.remove('on'); }
      });
    });
    if (sigue) {
      $('.si', sigue).addEventListener('click', function () {
        llamar.classList.add('on'); ok.classList.remove('on'); el.classList.add('hot'); refresca();
        bTel.innerHTML = ico('tel') + 'Que me llame un técnico · 60,50 € IVA incl., se descuenta';
        bTel.setAttribute('href', '#contacto'); bTel.removeAttribute('data-cta-tel');
        bTel.addEventListener('click', function (e) { e.preventDefault(); prefill(c.ap, codigo); });
        $('.si', sigue).setAttribute('aria-pressed', 'true'); $('.no', sigue).removeAttribute('aria-pressed');
      });
      $('.no', sigue).addEventListener('click', function () {
        ok.classList.add('on'); llamar.classList.remove('on'); el.classList.remove('hot');
        $('.no', sigue).setAttribute('aria-pressed', 'true'); $('.si', sigue).removeAttribute('aria-pressed');
      });
    }
    var cp = $('[data-copy]', el);
    if (cp) cp.addEventListener('click', function () {
      var url = new URL(REL + 'codigos-error/#' + c.id, location.href).href;
      var done = function () { cp.textContent = 'Enlace copiado'; setTimeout(function () { cp.textContent = 'Copiar enlace a este código'; }, 2500); };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt('Copia el enlace:', url); });
      else prompt('Copia el enlace:', url);
    });
    refresca();
  }
  $$('.ficha[data-id]').forEach(bindFicha);

  function initBus(root) {
    var input = $('input', root), sug = $('.bus-sug', root), res = $('.bus-res', root), x = $('.bus-x', root);
    var apFijo = root.getAttribute('data-ap') || null, ap = apFijo, sel = -1, items = [];
    var chips = $$('.chip-btn[data-ap]', root);
    /* atajos «más buscados»: al elegir un aparato solo se ofrecen SUS códigos (nunca los de otro aparato) */
    var top = $('.bus-top', root), topHTML = top ? top.innerHTML : '';
    function bindAtajos() {
      $$('[data-cod]', root).forEach(function (b) { if (b._ok) return; b._ok = 1; b.addEventListener('click', function () { var c = CODIGOS.filter(function (y) { return y.id === b.getAttribute('data-cod'); })[0]; if (!c) return; if (ap && c.ap !== ap) { setAp(c.ap); } input.value = c.cod.split('/')[0]; muestra(c); }); });
    }
    function pintaAtajos(k) {
      if (!top || apFijo) return;
      if (!k) { top.innerHTML = topHTML; bindAtajos(); return; }
      var a = APARATOS[k], mios = CODIGOS.filter(function (c) { return c.ap === k && !c.aviso; }).slice(0, 8), av = CODIGOS.filter(function (c) { return c.ap === k && c.aviso; });
      if (!mios.length && !av.length) { top.innerHTML = '<span class="bus-top-nota">' + esc(a.nombre) + ': sin códigos verificados de ' + esc(CONFIG.MARCA) + '. Dinos el síntoma y te decimos qué puede ser.</span>'; return; }
      top.innerHTML = 'Códigos de ' + esc(a.nombre.toLowerCase()) + ': <ul class="chips">' + mios.concat(av).map(function (c) { return '<li><button type="button" class="chip chip-btn" data-cod="' + c.id + '">' + esc(c.cod.split('/')[0]) + '</button></li>'; }).join('') + '</ul>';
      bindAtajos();
    }
    var setAp = function (k) {
      ap = k; chips.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-ap') === k ? 'true' : 'false'); });
      pintaAtajos(k);
      if (input.value.trim()) go(input.value); else if (res) { res.innerHTML = ''; }
    };
    chips.forEach(function (b) { b.addEventListener('click', function () { setAp(ap === b.getAttribute('data-ap') ? null : b.getAttribute('data-ap')); if (b.getAttribute('data-ap') === 'placa' && placaSinCodigos()) placa(); }); });
    bindAtajos();
    function limpia() { sug.classList.remove('on'); sug.innerHTML = ''; sel = -1; items = []; input.setAttribute('aria-expanded', 'false'); }
    function muestra(c) {
      if (ap && c.ap !== ap && !apFijo) { ap = c.ap; chips.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-ap') === c.ap ? 'true' : 'false'); }); pintaAtajos(c.ap); }
      limpia(); res.innerHTML = renderFicha(c); bindFicha($('.ficha', res));
      if (!reduced && root.getAttribute('data-scroll') !== 'no') setTimeout(function () { res.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 50);
    }
    function ambiguo(list, key) {
      res.innerHTML = '<div class="bus-amb"><p>' + esc(key) + ' existe en varios aparatos. ¿En cuál?</p><div class="g">' +
        list.map(function (c) { return '<button type="button" data-id="' + c.id + '">' + ico(c.ap) + esc(APARATOS[c.ap].nombre) + '</button>'; }).join('') + '</div></div>';
      $$('button', res).forEach(function (b) { b.addEventListener('click', function () { muestra(CODIGOS.filter(function (c) { return c.id === b.getAttribute('data-id'); })[0]); }); });
    }
    function nada(raw, key, apq, pre) {
      var a = apq ? APARATOS[apq] : null, art = a ? a.art : 'mi aparato';
      var quiza = (pre && pre.length) ? '<p>¿Querías decir…?</p><ul class="chips" style="margin-bottom:14px">' + pre.slice(0, 5).map(function (c) { return '<li><button type="button" class="chip chip-btn" data-id="' + c.id + '">' + ico(c.ap) + c.cod.split('/')[0] + ' · ' + esc(APARATOS[c.ap].nombre) + '</button></li>'; }).join('') + '</ul>' : '';
      var t = 'Hola, ' + (a ? 'tengo ' + art + ' ' + CONFIG.MARCA + ' que marca ' : 'mi aparato ' + CONFIG.MARCA + ' marca ') + key + '. ¿Me decís qué puede ser? Estoy en ' + zonaTxt();
      res.innerHTML = '<div class="bus-no"><p>No tenemos <strong class="mono">' + esc(key) + '</strong>' + (a ? ' en ' + esc(a.nombre.toLowerCase()) : '') + ' verificado con documentación de <span class="marca">' + esc(CONFIG.MARCA) + '</span> y preferimos no inventarlo. Escríbenoslo igual y te decimos qué puede ser.</p>' + quiza +
        '<a class="btn btn-wa" href="' + wa(t) + '" target="_blank" rel="noopener">' + ico('wa') + 'Preguntar por WhatsApp</a>' +
        '<p class="ficha-fin">Manda también una foto de la etiqueta ' + esc(CONFIG.ETIQUETA) + ' (en la puerta o el marco del aparato): así te contestamos con el modelo exacto. <a class="link" href="' + REL + 'codigos-error/#enr">Dónde está el ' + esc(CONFIG.ETIQUETA) + ' →</a></p></div>';
      $$('button[data-id]', res).forEach(function (b) { b.addEventListener('click', function () { var c = CODIGOS.filter(function (y) { return y.id === b.getAttribute('data-id'); })[0]; input.value = c.cod.split('/')[0]; muestra(c); }); });
    }
    /* la placa solo va «por síntomas» si la marca no publica códigos verificados para ella (Siemens sí los tiene) */
    function placaSinCodigos() { return !!APARATOS.placa && !CODIGOS.some(function (c) { return c.ap === 'placa'; }); }
    function placa() {
      limpia();
      var ss = ['no detecta la olla', 'parpadea', 'se apaga por temperatura'];
      res.innerHTML = '<div class="bus-no"><p>Las placas <span class="marca">' + esc(CONFIG.MARCA) + '</span> avisan por símbolos y parpadeos, no por códigos verificables: dinos el síntoma.</p><ul class="chips">' +
        ss.map(function (s) { return '<li><a class="chip chip-btn" target="_blank" rel="noopener" href="' + wa('Hola, tengo una placa ' + CONFIG.MARCA + ' que ' + s + '. Estoy en ' + zonaTxt()) + '">' + ico('wa') + esc(s) + '</a></li>'; }).join('') +
        '</ul><p class="ficha-fin mt16"><a class="link" href="' + REL + 'placa/">Placa de inducción: por síntomas, no por códigos →</a></p></div>';
    }
    function go(raw) {
      var p = parse(raw), apq = ap || p.ap;
      if (apq === 'placa' && placaSinCodigos()) { placa(); return; }
      if (!p.key && apq) { var av = CODIGOS.filter(function (c) { return c.ap === apq && c.aviso; }); if (av.length === 1) return muestra(av[0]); }
      if (!p.key) { res.innerHTML = ''; limpia(); return; }
      var ex = buscar(p.key, apq, false, p.alt);
      if (ex.length === 1) return muestra(ex[0]);
      if (ex.length > 1) { limpia(); return ambiguo(ex, p.key); }
      var pre = buscar(p.key, apq, true, p.alt);
      if (pre.length === 1 && p.key.length < 3) return muestra(pre[0]);
      limpia(); nada(raw, p.key, apq, pre);
    }
    function sugiere() {
      var raw = input.value, p = parse(raw), apq = ap || p.ap;
      x.classList.toggle('on', !!raw);
      if (!p.key || p.key.length < 2 || (apq === 'placa' && placaSinCodigos())) { limpia(); return; }
      var seen = {}, list = buscar(p.key, apq, true, p.alt).filter(function (c) { return !seen[c.id] && (seen[c.id] = 1); }).slice(0, 5);
      var ex = buscar(p.key, apq, false, p.alt); if (ex.length) list = ex.concat(list.filter(function (c) { return ex.indexOf(c) < 0; })).slice(0, 5);
      if (!list.length) { limpia(); return; }
      items = list; sel = -1;
      sug.innerHTML = list.map(function (c, i) {
        var k = c.keys.filter(function (y) { return y.indexOf(p.key) === 0 || (p.alt && y.indexOf(p.alt) === 0); })[0] || c.cod;
        var disp = c.cod; if (c.cod.indexOf(k) < 0 && c.cod.indexOf(k.replace(/^E/, 'F')) < 0) disp = k + ' (' + c.cod + ')';
        var m = disp.indexOf(p.key) >= 0 ? disp.replace(p.key, '<mark>' + p.key + '</mark>') : (p.alt ? disp.replace(p.alt, '<mark>' + p.alt + '</mark>') : disp);
        return '<li role="option" id="' + root.id + '-o' + i + '" data-id="' + c.id + '"><span class="mono">' + m + '</span><span class="ap">' + esc(APARATOS[c.ap].nombre) + '</span><span>' + esc(c.titulo) + '</span></li>';
      }).join('');
      if (p.fIn && !buscar1(p.key, apq, true).length) sug.innerHTML += '<li style="cursor:default;color:#55636F;font-size:12px">En ' + esc(CONFIG.MARCA) + ', F y E son el mismo código (F18 = E18)</li>';
      sug.classList.add('on'); input.setAttribute('aria-expanded', 'true');
      $$('li[data-id]', sug).forEach(function (li) { li.addEventListener('mousedown', function (e) { e.preventDefault(); input.value = li.querySelector('.mono').textContent.split(' ')[0]; muestra(CODIGOS.filter(function (c) { return c.id === li.getAttribute('data-id'); })[0]); }); });
    }
    input.addEventListener('input', sugiere);
    input.addEventListener('keydown', function (e) {
      var lis = $$('li[data-id]', sug);
      if (e.key === 'ArrowDown' && lis.length) { e.preventDefault(); sel = (sel + 1) % lis.length; }
      else if (e.key === 'ArrowUp' && lis.length) { e.preventDefault(); sel = (sel - 1 + lis.length) % lis.length; }
      else if (e.key === 'Enter') { e.preventDefault(); if (sel >= 0 && lis[sel]) { input.value = lis[sel].querySelector('.mono').textContent.split(' ')[0]; muestra(CODIGOS.filter(function (c) { return c.id === lis[sel].getAttribute('data-id'); })[0]); } else go(input.value); return; }
      else if (e.key === 'Escape') { limpia(); return; }
      else return;
      lis.forEach(function (li, i) { li.setAttribute('aria-selected', i === sel ? 'true' : 'false'); });
      input.setAttribute('aria-activedescendant', sel >= 0 ? lis[sel].id : '');
    });
    input.addEventListener('blur', function () { setTimeout(limpia, 150); });
    x.addEventListener('click', function () { input.value = ''; res.innerHTML = ''; limpia(); x.classList.remove('on'); input.focus(); });
    var f = $('form', root); if (f) f.addEventListener('submit', function (e) { e.preventDefault(); go(input.value); });
    root.__go = function (q) { input.value = q; go(q); };
  }
  $$('.bus').forEach(initBus);

  /* ---------- hub: abrir ancla y hacer scroll */
  function abreAncla() {
    var h = location.hash.replace('#', ''); if (!h) return;
    var d = document.getElementById(h);
    if (d && d.tagName === 'DETAILS') { d.open = true; setTimeout(function () { d.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); }, 60); }
  }
  abreAncla(); window.addEventListener('hashchange', abreAncla);

  /* ================================================================ FORMULARIO */
  var form = $('#form-llamada');
  function prefill(apId, codigo) {
    if (!form) return;
    if (apId) $$('[name=aparato]', form).forEach(function (r) { r.checked = r.value === APARATOS[apId].nombre; });
    if (codigo) { $('[name=codigo]', form).value = codigo; var s = $$('[name=sintoma]', form).filter(function (r) { return r.value === 'Error en pantalla'; })[0]; if (s) s.checked = true; }
    form.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    setTimeout(function () { $('[name=telefono]', form).focus({ preventScroll: true }); }, 500);
  }
  window.RBV = { prefill: prefill, zona: Z };
  function abreWA(t) { var w = window.open(wa(t), '_blank'); if (w) w.opener = null; else location.href = wa(t); }
  if (form) {
    var zsel = $('[name=zona]', form);
    if (zsel) { if (Z.get()) zsel.value = Z.get(); zsel.addEventListener('change', function () { Z.set(zsel.value); $$('a[data-wa]').forEach(function (a) { a.href = wa(a.getAttribute('data-wa').replace('[zona]', zonaTxt())); }); }); }
    var dl = $('#lista-codigos'); if (dl) { var ks = {}; CODIGOS.forEach(function (c) { c.keys.forEach(function (k) { if (k.length > 2) ks[k] = APARATOS[c.ap].nombre; }); }); dl.innerHTML = Object.keys(ks).sort().map(function (k) { return '<option value="' + k + '">' + ks[k] + '</option>'; }).join(''); }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if ($('[name=web]', form).value) return; /* honeypot */
      var tel = $('[name=telefono]', form), g = tel.closest('.f-g'), num = tel.value.replace(/[\s\-\.]/g, '');
      var okTel = /^(\+34|0034)?[6789]\d{8}$/.test(num); g.classList.toggle('bad', !okTel);
      var rg = $('[name=rgpd]', form), gr = rg.closest('.f-g'); gr.classList.toggle('bad', !rg.checked);
      if (!okTel) { tel.focus(); return; } if (!rg.checked) { rg.focus(); return; }
      var ap = ($$('[name=aparato]:checked', form)[0] || {}).value || '', si = ($$('[name=sintoma]:checked', form)[0] || {}).value || '';
      var cod = $('[name=codigo]', form).value.trim().toUpperCase(), zona = zsel ? zsel.value : '';
      var t = 'Hola, quiero que me llaméis.';
      if (ap) t += ' Aparato: ' + ap + ' ' + CONFIG.MARCA + '.'; if (si) t += ' Le pasa: ' + si.toLowerCase() + '.'; if (cod) t += ' Código: ' + cod + '.';
      if (zona) t += ' Zona: ' + zona + '.'; t += ' Teléfono: ' + tel.value.trim() + '.';
      var fin = function () { form.hidden = true; var ok = $('.f-ok', form.parentNode); ok.classList.add('on'); ok.setAttribute('tabindex', '-1'); ok.focus(); };
      if (CONFIG.FORM_ENDPOINT) {
        fetch(CONFIG.FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ aparato: ap, sintoma: si, codigo: cod, telefono: tel.value, zona: zona, mensaje: t }) })
          .then(function (r) { if (!r.ok) throw 0; fin(); }).catch(function () { abreWA(t); fin(); });
      } else { abreWA(t); fin(); }
    });
  }

  /* ---------- mini formulario del hero (landings de aparato) */
  function validaTel(tel) { var g = tel.closest('.f-g'), num = tel.value.replace(/[\s\-\.]/g, ''); var ok = /^(\+34|0034)?[6789]\d{8}$/.test(num); g.classList.toggle('bad', !ok); return ok; }
  $$('.form-mini').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if ($('[name=web]', f).value) return;
      var tel = $('[name=telefono]', f), rg = $('[name=rgpd]', f), gr = rg.closest('.f-g');
      var okTel = validaTel(tel); gr.classList.toggle('bad', !rg.checked);
      if (!okTel) { tel.focus(); return; } if (!rg.checked) { rg.focus(); return; }
      var ap = $('[name=aparato]', f).value, si = $('[name=sintoma]', f).value;
      var t = 'Hola, quiero que me llaméis. Aparato: ' + ap + ' ' + CONFIG.MARCA + '.' + (si ? ' Le pasa: ' + si.toLowerCase() + '.' : '') + (Z.get() ? ' Zona: ' + Z.get() + '.' : '') + ' Teléfono: ' + tel.value.trim() + '.';
      abreWA(t); f.hidden = true; var ok = $('.f-ok', f.parentNode); ok.classList.add('on'); ok.setAttribute('tabindex', '-1'); ok.focus();
    });
  });
  var hfb = $('.hero-form-b');
  if (hfb) hfb.addEventListener('click', function () { var on = hfb.getAttribute('aria-expanded') === 'true'; hfb.setAttribute('aria-expanded', on ? 'false' : 'true'); hfb.parentNode.classList.toggle('on', !on); if (!on) setTimeout(function () { $('.form-mini [name=telefono]').focus({ preventScroll: false }); }, 50); });
  /* ---------- desplegable de aparatos (cabecera) */
  var dd = $('.dd');
  if (dd) {
    var ddb = $('.dd-b', dd);
    ddb.addEventListener('click', function () { var on = dd.classList.toggle('on'); ddb.setAttribute('aria-expanded', on ? 'true' : 'false'); });
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) { dd.classList.remove('on'); ddb.setAttribute('aria-expanded', 'false'); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { dd.classList.remove('on'); ddb.setAttribute('aria-expanded', 'false'); } });
  }

  /* ================================================================ MAPA de zonas */
  var mapa = $('.mapa');
  if (mapa) {
    var info = $('.mapa-info', mapa), zs = $$('.z', mapa);
    var pinta = function (z) {
      zs.forEach(function (o) { o.classList.toggle('on', o === z); });
      var n = z.getAttribute('data-nombre'), href = z.getAttribute('data-href'); Z.set(n);
      info.innerHTML = '<p class="kicker">Cubrimos ' + esc(n) + '</p><h3>Llama al <a class="link" href="' + CONFIG.TEL_HREF + '">' + CONFIG.TEL + '</a></h3><p>' + esc(z.getAttribute('data-txt') || '') + '</p>' +
        '<div class="grid grid-2"><a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="' + wa('Hola, tengo un ' + CONFIG.MARCA + ' que… Estoy en ' + n) + '">' + ico('wa') + 'WhatsApp desde ' + esc(n) + '</a>' +
        (href ? '<a class="btn btn-ghost btn-sm" href="' + href + '">Ver ' + esc(n) + ' →</a>' : '<a class="btn btn-ghost btn-sm" href="#contacto">Te llamamos en &lt; 1 h</a>') + '</div>';
      if (zsel) zsel.value = n;
    };
    zs.forEach(function (z) { z.addEventListener('click', function () { pinta(z); }); z.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pinta(z); } }); });
  }
})();
