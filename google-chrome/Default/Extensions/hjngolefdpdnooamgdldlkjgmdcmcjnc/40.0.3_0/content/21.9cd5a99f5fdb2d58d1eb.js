(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 21, 25 ], {
    106: function(e, t, o) {
        "use strict";
        (function(e) {
            o.d(t, "a", function() {
                return f;
            });
            var a = o(1);
            function r(e, t, o, a, r, i, n) {
                try {
                    var s = e[i](n), u = s.value;
                } catch (e) {
                    return void o(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(a, r);
            }
            function i(e) {
                return function() {
                    var t = this, o = arguments;
                    return new Promise(function(a, i) {
                        var n = e.apply(t, o);
                        function s(e) {
                            r(n, a, i, s, u, "next", e);
                        }
                        function u(e) {
                            r(n, a, i, s, u, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(e, a.key, a);
                }
            }
            function u(e, t, o) {
                return t && s(e.prototype, t), o && s(e, o), e;
            }
            function c(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t);
            }
            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function l(e) {
                var t = h();
                return function() {
                    var o, a = g(e);
                    if (t) {
                        var r = g(this).constructor;
                        o = Reflect.construct(a, arguments, r);
                    } else o = a.apply(this, arguments);
                    return d(this, o);
                };
            }
            function d(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? m(e) : t;
            }
            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function h() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }
            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var f = function(t) {
                c(s, a["Component"]);
                var r = l(s);
                function s() {
                    var e;
                    return n(this, s), (e = r.call(this)).state = {
                        svgs: []
                    }, i(function*() {
                        var t = (yield Promise.all([ o.e(32).then(o.t.bind(null, 136, 7)), o.e(31).then(o.t.bind(null, 135, 7)) ])).map(function(e) {
                            return e.default;
                        });
                        e.setState({
                            svgs: t
                        });
                    })(), e;
                }
                return u(s, [ {
                    key: "render",
                    value: function() {
                        var t = this.state.svgs, o = void 0 === t ? [] : t;
                        return e.createElement("div", {
                            style: {
                                position: "absolute",
                                top: "-9999px",
                                left: "-9999px"
                            },
                            dangerouslySetInnerHTML: {
                                __html: o.join("")
                            }
                        });
                    }
                } ]), s;
            }();
        }).call(this, o(1));
    },
    165: function(e) {
        e.exports = JSON.parse('{"browser-action-popup.unsupported-app.list-prediction":"The advanced maths and chemistry prediction engine","intro.introduction-line1":"Finally, you can create digital maths! {learnMoreLink}.","apps-discovery.overlay.contain":"This document contains Maths","apps-discovery.notification.contain":"This document contains Maths.","apps-discovery.notification.info2":"icon in the toolbar above and start making Maths digital.","upgrade-overlay-iconset-advanced-math":"The advanced maths and chemistry prediction engine","office-install-popup-body":"To Insert Maths, you\'ll need to install the Office Chrome Extension. Alternatively, try the Copy Maths As button {copyAsBtn}.","office-install-popup-title":"Insert Maths","office-not-supported-popup-body":"Inserting and editing maths is currently only supported in Word Online. Try the Copy Maths As button {copyAsBtn} instead."}');
    },
    166: function(e) {
        e.exports = JSON.parse('{"apps-discovery.notification.contain":"Este documento contiene Matem\xe1ticas.","apps-discovery.notification.dontshow":"No me muestres este mensaje otra vez.","apps-discovery.notification.info1":"Haga clic en el","apps-discovery.notification.info2":"\xedcono en la barra de herramientas de arriba y comience a hacer Matem\xe1ticas Digitales.","apps-discovery.notification.notnow":"No ahora","apps-discovery.overlay.close":"Cerrar","apps-discovery.overlay.contain":"Este documento contiene Matem\xe1ticas","apps-discovery.overlay.edit":"Editar en EquatIO","browser-action-popup.disabled-app.dismiss":"Okay","browser-action-popup.disabled-app.message":"Parece que esta integraci\xf3n de la aplicaci\xf3n Google se ha deshabilitado para su dominio. \xa1Hable con su administrador para habilitar esta funci\xf3n!","browser-action-popup.disabled-app.title":"\xa1Hola!","browser-action-popup.forms.dismiss":"Okay","browser-action-popup.forms.message":"Abra EquatIO en Formularios de Google haciendo clic en el \xedcono {equationIcon} al lado de la pregunta o respuesta en la que desea trabajar.","browser-action-popup.forms.title":"\xbfTiempo de prueba?","browser-action-popup.not-signed-into-chrome.dismiss":"Okay","browser-action-popup.not-signed-into-chrome.message":"Parece que no has iniciado sesi\xf3n en Google Chrome :(","browser-action-popup.not-signed-into-chrome.read-more":"Lee mas","browser-action-popup.not-signed-into-chrome.sign-in-message":"Para utilizar todas las excelentes funciones de EquatIO, debe iniciar sesi\xf3n. {readMoreLink}.","browser-action-popup.not-signed-into-chrome.title":"\xa1Hola!","browser-action-popup.premium-app-only.message":"Necesita una suscripci\xf3n premium para acceder a esta funci\xf3n.","browser-action-popup.premium-app-only.more-info":"M\xe1s informaci\xf3n","browser-action-popup.premium-app-only.sign-in":"Registrarse","browser-action-popup.premium-app-only.signed-in-as":"Est\xe1s registrado como:","browser-action-popup.premium-app-only.switch-user":"Cambiar de usuario","browser-action-popup.unsupported-app-office.description":"Su suscripci\xf3n actual a EquatIO no es compatible con esta aplicaci\xf3n de Office. Actualice hoy para experimentar el poder de EquatIO en Office Excel, PowerPoint y OneNote. Si es profesor, {freeForTeachersLink} para conocer nuestro programa Gratis para profesores antes de renovar.","browser-action-popup.unsupported-app.description":"Su suscripci\xf3n actual a EquatIO no es compatible con esta aplicaci\xf3n de Google. Actualice hoy para experimentar el poder de EquatIO en los formularios, hojas de c\xe1lculo, diapositivas y dibujos de Google. Si es profesor, {freeForTeachersLink} para obtener informaci\xf3n sobre nuestro programa Gratis para profesores antes de renovarlo.","browser-action-popup.unsupported-app.fft-link":"haga clic aqu\xed","browser-action-popup.unsupported-app.list-handwriting":"Entradas ilimitadas de escritura a mano","browser-action-popup.unsupported-app.list-prediction":"El avanzado motor de predicci\xf3n matem\xe1tica y qu\xedmica","browser-action-popup.unsupported-app.not-today":"Hoy no, gracias.","browser-action-popup.unsupported-app.title":"\xa1Oh no!","browser-action-popup.unsupported-app.upgrade":"Aprende m\xe1s","browser-action-popup.web-premium.dismiss":"Okay","browser-action-popup.web-premium.message":"Necesita una {premiumSubscription} para usar EquatIO dentro de las p\xe1ginas web","browser-action-popup.web-premium.premium-subscription":"Suscripci\xf3n Premium","browser-action-popup.web-premium.title":"\xa1Hola!","browser-action-popup.web-premium.upgrade":"Aprende m\xe1s","info-popup-clipboard-body":"Math se ha agregado a su portapapeles, puede pegar con <b>{pasteCommand}</b>.","info-popup-clipboard-dimiss-checkbox":"No volver a mostrar este mensaje","info-popup-clipboard-title":"Matem\xe1ticas copiadas","info-popup-insert-failed-body":"Verifique su conexi\xf3n a Internet e intente insertar nuevamente. Tambi\xe9n puede probar el bot\xf3n Copiar matem\xe1ticas como {copyAsBtn}.","info-popup-insert-failed-title":"Error al insertar","info-popup-switch-user-body":"Espere, nos estamos preparando para cambiar su perfil de usuario. Esto puede tardar unos segundos.","info-popup-switch-user-title":"Cambio de usuario","intro.academy.description":"Cuando vea el {cap}, haga clic en \xe9l para obtener muchos consejos y sugerencias sobre c\xf3mo utilizar EquatIO","intro.academy.description.cap":"hacia","intro.academy.dismiss":"Ok lo tengo","intro.academy.hints":"Las sugerencias y los consejos aparecer\xe1n aqu\xed, en nuestra Academia EquatIO f\xe1cil de usar.","intro.dismiss-button":"Prefiero no escoger ahora. Simplemente ll\xe9vame a EquatIO.","intro.equation.description":"{useIcon} para ayudarte a escribir matem\xe1ticas.","intro.equation.description.action":"Usa este icono","intro.get-started.dismiss.button":"Prefiero no decirlo, d\xe9jame usar EquatIO.","intro.get-started.student.button":"Soy un estudiante","intro.get-started.student.paragraph":"Completa pruebas, crea ecuaciones y mucho m\xe1s.","intro.get-started.student.title":"\xbfEstudiante?","intro.get-started.teacher.button":"Soy un profesor","intro.get-started.teacher.paragraph":"Comienza a crear ecuaciones, pruebas y m\xe1s en este momento.","intro.get-started.teacher.title":"\xbfProfesor?","intro.get-started.title":"Empecemos","intro.introduction-learn-more-link":"Aprende m\xe1s","intro.introduction-line1":"Ya puedes crear expresiones matem\xe1ticas digitales! {learnMoreLink}.","intro.launch.next-step":"Ok lo tengo","intro.launch.paragraph":"Puedes usar EquatIO en {googleApps}.","intro.launch.paragraph.action":"Docs, Forms, Slides, Sheets and Drawings","intro.launch.title.action":"{launchEquatio} usando el {button} arriba, o usando {keyboardShortcut}.","intro.launch.title.action.bold":"Lanzamiento EquatIO","intro.loading-doc.message":"We\'re taking you to your first EquatIO-enabled Google Doc...","intro.loading-doc.thanks":"Thanks!","intro.skip":"Saltar Tutorial","intro.student-button":"Alumno","intro.teacher-button":"Profesor","math-discoverability.action-buttons.capture-math":"Capture Math","math-discoverability.action-buttons.dismiss":"Desactivar la descubribilidad","math-discoverability.action-buttons.what-is-this":"\xbfQue es esto?","math-discoverability.info-dialog.close":"Cerca","math-discoverability.info-dialog.happy-searching":"\xa1Feliz b\xfasqueda!","math-discoverability.info-dialog.hey-there":"\xa1Hola!","math-discoverability.info-dialog.paragraph-1":"Esta es una caracter\xedstica de EquatIO, el bot\xf3n azul con forma de diamante que ves a la derecha de tu barra de direcciones.","math-discoverability.info-dialog.paragraph-2":"Entre muchas otras cosas, EquatIO busca contenido matem\xe1tico en la p\xe1gina web en la que se encuentra. Si encuentra alguno, lo resaltar\xe1 para usted, tal como lo vio aqu\xed. Luego, puede tomar una captura de pantalla {cameraButton} para convertirlo en matem\xe1tica accesible, leerlo en voz alta e incluso copiarlo y pegarlo en una aplicaci\xf3n de G Suite.","math-discoverability.info-dialog.paragraph-3":"\xbfNo quieres que EquatIO busque contenido matem\xe1tico? Haga clic en el \xedcono EquatIO y haga clic en el bot\xf3n de descubrimiento matem\xe1tico {discoverBtn} para desactivar esta funci\xf3n.","math-discoverability.info-dialog.title":"Acerca de","office-install-popup-body":"Para insertar matem\xe1ticas, deber\xe1 instalar la extensi\xf3n de Office Chrome. Alternativamente, pruebe el bot\xf3n Copiar matem\xe1ticas como {copyAsBtn}.","office-install-popup-cancel":"Cancelar","office-install-popup-install":"Instalar extensi\xf3n","office-install-popup-title":"Insertar expresi\xf3n","office-not-supported-popup-body":"La inserci\xf3n y edici\xf3n de matem\xe1ticas solo se admite actualmente en Word Online. Pruebe el bot\xf3n Copiar matem\xe1ticas como {copyAsBtn} en su lugar.","office-not-supported-popup-install":"Okay","options-dialog.chrome-options.title":"Opciones de Chrome","options-dialog.insert-type":"M\xe9todo de inserci\xf3n:","options-dialog.insert-type.automatic":"Autom\xe1tico (recomendado)","options-dialog.insert-type.quality":"Calidad","options-dialog.insert-type.speed":"Velocidad","options-dialog.save":"Guardar","options-dialog.screenshot-reader-autoplay":"Auto-reproducci\xf3n","options-dialog.screenshot-reader-speech-speed":"Velocidad del habla","options-dialog.screenshot-reader-title":"Lector de pantalla","options-dialog.screenshot-reader-title-premium-only":"(S\xf3lo Premium)","popup-menu.change-account":"Cambiar cuenta","popup-menu.close":"Cerrar EquatIO","popup-menu.switch-user":"Cambiar de usuario","popup-menu.try-mathspace":"Prueba EquatIO Mathspace","screenshot-reader-button.title":"Lector de pantalla","screenshot-reader-button.title_premium":"Lector de captura de pantalla (Funci\xf3n Premium)","screenshot-reader.context-menu.buttons.copy-latex":"Copiar LaTeX","screenshot-reader.context-menu.buttons.copy-mathml":"Copiar MathML","screenshot-reader.context-menu.buttons.send-to-equation":"Editar con EquatIO","screenshot-reader.mathjax.actions.close":"Cerca","screenshot-reader.mathjax.actions.more-options":"Mas opciones","screenshot-reader.mathjax.actions.play":"Jugar","screenshot-reader.mathjax.actions.stop":"Detener","screenshot-reader.mathjax.error-display.title":"\xa1UH oh! No pudimos detectar ninguna matem\xe1tica para esta selecci\xf3n","upgrade-overlay-fft-dismiss":"Hoy no gracias","upgrade-overlay-fft-sign-up":"Reg\xedstrese gratis para maestros","upgrade-overlay-iconset-advanced-math":"El avanzado motor de predicci\xf3n matem\xe1tica y qu\xedmica","upgrade-overlay-iconset-built-in-integration":"Integraci\xf3n integrada con formularios, diapositivas, hojas y dibujos de Google","upgrade-overlay-iconset-free-for-teachers-click-here":"haga clic aqu\xed","upgrade-overlay-iconset-unlimited-handwriting":"Entradas ilimitadas de escritura a mano","upgrade-overlay-privacy-policy":"Pol\xedtica de privacidad","upgrade-overlay-student-dismiss":"Estoy listo. Ll\xe9vame de vuelta a EquatIO.","upgrade-overlay-student-expired.text":"Parece que su acceso de 30 d\xedas a las funciones premium de EquatIO ha expirado. Hable con su maestro para aprender c\xf3mo puede seguir usando todas las incre\xedbles funciones de EquatIO, incluidas la escritura a mano y la predicci\xf3n matem\xe1tica. Si es maestro, {upgradeLink} para obtener informaci\xf3n sobre nuestro programa Gratis para maestros.","upgrade-overlay-student-handwriting-exceeded.text":"Whoops! Ya ha usado sus dos entradas de escritura a mano para el d\xeda. Hable con su maestro para obtener m\xe1s informaci\xf3n sobre sus opciones de escritura a mano. Si es maestro, {upgradeLink} para obtener informaci\xf3n sobre nuestro programa Gratis para maestros.","upgrade-overlay-student-learn-more":"Aprende m\xe1s","upgrade-overlay-student-upgrade-reminder.text":"Hable con su maestro para obtener m\xe1s informaci\xf3n sobre las caracter\xedsticas premium de EquatIO. Si es maestro, {upgradeLink} para obtener informaci\xf3n sobre nuestro programa Gratis para maestros.","upgrade-overlay-teacher-expiring.text":"Pero, \xbfpor qu\xe9 renovar cuando puedes inscribirte gratis para maestros? Como profesor, \xa1obtendr\xe1 todas las funciones que conoce y adora con su suscripci\xf3n premium de EquatIO GRATIS!","upgrade-overlay-teacher-expiring.title":"Su suscripci\xf3n premium a EquatIO caduca en menos de 5 d\xedas.","upgrade-overlay-teacher-first-time-expiry.line1":"Parece que su acceso de 30 d\xedas a las funciones premium de EquatIO ha expirado.","upgrade-overlay-teacher-first-time-expiry.line2":"Pero no hay que preocuparse. Como profesor, puede obtener todas esas funciones de forma gratuita a trav\xe9s de nuestro programa Free for Teacher. \xa1Reg\xedstrese hoy para seguir usando todas las funciones de EquatIO!","upgrade-overlay-teacher-forms-periodic-reminder.integration-with-apps":"Integraci\xf3n con diapositivas, hojas y dibujos de Google","upgrade-overlay-teacher-forms-periodic-reminder.text":"Si se registra en EquatIO Free for Teachers, puede transformar su proceso de evaluaci\xf3n a trav\xe9s de la integraci\xf3n integrada con Google Forms, \xa1sin costo adicional! Reg\xedstrese hoy para acceder a todas las funciones premium de EquatIO de forma gratuita.","upgrade-overlay-teacher-forms-periodic-reminder.title":"Eureka!","upgrade-overlay-teacher-general-periodic-reminder.line1":"\xa1Reg\xedstrese en EquatIO Free for Teachers hoy para llevar sus matem\xe1ticas digitales al siguiente nivel!","upgrade-overlay-teacher-general-periodic-reminder.line2":"Al registrarse, recibir\xe1 acceso GRATUITO a ...","upgrade-overlay-teacher-handwriting-exceeded.text":"Ya ha utilizado sus dos entradas de escritura a mano gratuitas para el d\xeda. Pero, \xbfsab\xeda que a trav\xe9s de nuestro programa Free for Teacher puede obtener una escritura ilimitada, junto con todas las otras caracter\xedsticas premium, GRATIS para siempre? \xa1Reg\xedstrate hoy!","upgrade-overlay-teacher-handwriting-exceeded.whoops":"Whoops!","upgrade-overlay-teacher-prediction-periodic-reminder.text":"Por suerte para ti, el avanzado motor de predicci\xf3n matem\xe1tica y qu\xedmica de EquatIO hace exactamente eso. Reg\xedstrese gratis para maestros hoy para acceder a esta funci\xf3n radical, \xa1y a todas las funciones premium de EquatIO, GRATIS!","upgrade-overlay-teacher-prediction-periodic-reminder.title":"Solo piense en el tiempo que ahorrar\xeda si pudiera generar ecuaciones m\xe1s r\xe1pido.","upgrade-overlay-teacher-review-action":"Rate EquatIO!","upgrade-overlay-teacher-review-dismiss":"No, gracias.","upgrade-overlay-teacher-review-no-thanks":"Recu\xe9rdame m\xe1s tarde.","upgrade-overlay-teacher-review.text":"\xa1Comparta su poder de estrella d\xe1ndole a EquatIO una calificaci\xf3n de 5 estrellas!","upgrade-overlay-teacher-review.title":"\xbfTe sientes como una estrella \u2b50\ufe0f?","upgrade-overlay-used-by-teachers":"Usado por profesores{lineBreak}y estudiantes de todo el mundo","web-discoverability.popup.activate":"\xa1Mu\xe9strame!","web-discoverability.popup.dismiss":"No gracias","web-toolbar.popup-menu.menu.close":"Hide EquatIO","web-toolbar.toolbar.calculator":"Calculadora cient\xedfica","web-toolbar.toolbar.discoverability-toggle":"Descubrimiento","web-toolbar.toolbar.molecular-viewer":"Visor Molecular","web-toolbar.toolbar.move-toolbar":"Mover barra de herramientas","web-toolbar.toolbar.periodic-table":"Tabla peri\xf3dica","web-toolbar.toolbar.premium-only":"Caracter\xedstica premium","web-toolbar.toolbar.screenshot-reader":"Lector de pantalla"}');
    },
    167: function(e) {
        e.exports = JSON.parse('{"apps-discovery.notification.contain":"Ce document contient Math.","apps-discovery.notification.dontshow":"Ne me montre plus ce message.","apps-discovery.notification.info1":"Cliquez sur","apps-discovery.notification.info2":"l\'ic\xf4ne dans la barre d\'outils ci-dessus et commencez \xe0 rendre Math digital.","apps-discovery.notification.notnow":"Pas tout de suite","apps-discovery.overlay.close":"Fermer","apps-discovery.overlay.contain":"Ce document contient Math","apps-discovery.overlay.edit":"Editer en EquatIO","browser-action-popup.disabled-app.dismiss":"OK","browser-action-popup.disabled-app.message":"On dirait que cette int\xe9gration de Google App ait \xe9t\xe9 d\xe9sactiv\xe9e. Si tu souhaites utiliser cette fonctionnalit\xe9, demande \xe0 ton administrateur de l\'activer!","browser-action-popup.disabled-app.title":"Hey!","browser-action-popup.forms.dismiss":"OK","browser-action-popup.forms.message":"Ouvre EquatIO dans Google Forms en cliquant sur l\'ic\xf4ne {equationIcon} \xe0 c\xf4t\xe9 de la question ou de la r\xe9ponse sur laquelle tu souhaites travailler.","browser-action-popup.forms.title":"Quiz time?!","browser-action-popup.invalid-page.description":"EquatIO n\'est pas disponible sur cette page. Pour l\'instant, tu peux seulement utiliser EquatIO avec:","browser-action-popup.invalid-page.dismiss":"OK","browser-action-popup.invalid-page.options.docs":"Google Docs","browser-action-popup.invalid-page.options.drawings":"Google Drawings","browser-action-popup.invalid-page.options.forms":"Google Forms","browser-action-popup.invalid-page.options.sheets":"Google Sheets","browser-action-popup.invalid-page.options.slides":"Google Slides","browser-action-popup.invalid-page.title":"Uh oh!","browser-action-popup.not-signed-into-chrome.dismiss":"OK","browser-action-popup.not-signed-into-chrome.message":"On dirait que tu n\'es pas connect\xe9 avec Google Chrome :(","browser-action-popup.not-signed-into-chrome.read-more":"En savoir plus","browser-action-popup.not-signed-into-chrome.sign-in-message":"Il est n\xe9cessaire que tu sois connect\xe9, afin de pouvoir utiliser toutes les fonctionnalit\xe9s d\'EquatIO. {readMoreLink}.","browser-action-popup.not-signed-into-chrome.title":"Hey!","browser-action-popup.premium-app-only.message":"Vous avez besoin d\'un abonnement premium pour acc\xe9der \xe0 cette fonctionnalit\xe9.","browser-action-popup.premium-app-only.more-info":"Plus d\'informations","browser-action-popup.premium-app-only.sign-in":"se connecter","browser-action-popup.premium-app-only.signed-in-as":"Vous \xeates connect\xe9 entant que:","browser-action-popup.premium-app-only.switch-user":"Changer d\'utilisateur","browser-action-popup.unsupported-app-office.description":"Votre abonnement EquatIO actuel ne prend pas en charge cette application Office. Mettez \xe0 niveau d\xe8s aujourd\'hui pour profiter de la puissance d\'EquatIO sur Office Excel, PowerPoint et OneNote. Si vous \xeates enseignant, {freeForTeachersLink} pour en savoir plus sur notre programme Gratuit pour les enseignants avant de renouveler votre abonnement.","browser-action-popup.unsupported-app.description":"Ton abonnement EquatIO actuel ne prend pas en charge cette application Google. Effectue une mise \xe0 niveau d\xe8s aujourd\'hui pour pouvoir utiliser EquatIO avec Google Forms, Google Sheets, Google Slides et Google Drawings. Si tu es un enseignant, {freeForTeachersLink} pour en savoir plus sur notre programme Free for Teachers avant de renouveler ton abonnement.","browser-action-popup.unsupported-app.fft-link":"clique ici","browser-action-popup.unsupported-app.list-handwriting":"Entr\xe9es manuscrites illimit\xe9es","browser-action-popup.unsupported-app.list-prediction":"Le moteur de pr\xe9diction avanc\xe9 en math\xe9matiques et chimie","browser-action-popup.unsupported-app.not-today":"Pas aujourd\'hui, merci.","browser-action-popup.unsupported-app.title":"Oh non!","browser-action-popup.unsupported-app.upgrade":"En savoir plus","browser-action-popup.web-premium.dismiss":"OK","browser-action-popup.web-premium.message":"Tu as besoin d\'un {premiumSubscription} pour pouvoir utiliser EquatIO dans des pages web","browser-action-popup.web-premium.premium-subscription":"Abonnement Premium","browser-action-popup.web-premium.title":"Hey!","browser-action-popup.web-premium.upgrade":"En savoir plus","info-popup-clipboard-body":"Math a \xe9t\xe9 ajout\xe9 \xe0 votre presse-papiers, vous pouvez coller avec <b>{pasteCommand}</b>.","info-popup-clipboard-dimiss-checkbox":"Ne plus afficher ce message","info-popup-clipboard-title":"Math copi\xe9","info-popup-insert-failed-body":"Veuillez v\xe9rifier votre connexion Internet et r\xe9essayer d\'ins\xe9rer. Vous pouvez \xe9galement essayer le bouton Copier les math\xe9matiques en tant que {copyAsBtn}.","info-popup-insert-failed-title":"L\'insertion a \xe9chou\xe9","info-popup-switch-user-body":"Veuillez patienter, nous nous pr\xe9parons \xe0 changer de profil utilisateur. Cela peut prendre quelques secondes.","info-popup-switch-user-title":"Changement d\'utilisateur","intro.academy.description":"Lorsque vous voyez le {cap}, cliquez dessus pour obtenir de nombreux conseils et astuces sur l\u2019utilisation d\u2019EquatIO.","intro.academy.description.cap":"cap","intro.academy.dismiss":"OK, j\'ai compris","intro.academy.hints":"Des astuces et des conseils appara\xeetront ici, dans notre facile \xe0 utiliser EquatIO Academy.","intro.dismiss-button":"Je pr\xe9f\xe8re ne pas dire. Emm\xe8ne-moi simplement \xe0 EquatIO!","intro.equation.description":"{useIcon} pour vous aider \xe0 \xe9crire en math\xe9matiques.","intro.equation.description.action":"Utilisez cette ic\xf4ne","intro.get-started.dismiss.button":"Laissez-moi plut\xf4t utiliser EquatIO","intro.get-started.student.button":"Je suis \xe9tudiant","intro.get-started.student.paragraph":"R\xe9pondez \xe0 des quiz, cr\xe9ez des \xe9quations et bien plus encore.","intro.get-started.student.title":"\xc9tudiant?","intro.get-started.teacher.button":"Je suis un enseignant","intro.get-started.teacher.paragraph":"Commencez \xe0 cr\xe9er des \xe9quations, des quiz et plus encore maintenant.","intro.get-started.teacher.title":"Prof?","intro.get-started.title":"Commen\xe7ons","intro.introduction-learn-more-link":"En savoir plus","intro.introduction-line1":"Enfin, tu peux cr\xe9er des math\xe9matiques num\xe9riques! {learnMoreLink}.","intro.launch.next-step":"OK, j\'ai compris","intro.launch.paragraph":"Vous pouvez utiliser EquatIO dans {googleApps}.","intro.launch.paragraph.action":"Docs, Forms, Slides, Sheets and Drawings","intro.launch.title.action":"{launchEquatio} en utilisant le {button} ci-dessus ou en utilisant le {keyboardShortcut}.","intro.launch.title.action.bold":"Lancer EquatIO","intro.loading-doc.message":"Nous t\'emmenons \xe0 ton premier Google Doc compatible avec EquatIO...","intro.loading-doc.thanks":"Merci!","intro.skip":"Passer le tutoriel","intro.student-button":"El\xe8ve","intro.teacher-button":"Enseignant","math-discoverability.action-buttons.capture-math":"Capture Math","math-discoverability.action-buttons.dismiss":"D\xe9sactiver la d\xe9couvrabilit\xe9","math-discoverability.action-buttons.what-is-this":"Qu\'est-ce que c\'est?","math-discoverability.info-dialog.close":"Proche","math-discoverability.info-dialog.happy-searching":"Bonne recherche!","math-discoverability.info-dialog.hey-there":"H\xe9y!","math-discoverability.info-dialog.paragraph-1":"C\u2019est une fonction d\u2019EquatIO, le bouton bleu en forme de losange que vous voyez \xe0 la droite de votre barre d\u2019adresse.","math-discoverability.info-dialog.paragraph-2":"Entre autres choses, EquatIO effectue une recherche sur le contenu math\xe9matique de votre page Web. S\'il en trouve, il le mettra en \xe9vidence pour vous, comme vous l\'avez vu ici. Vous pouvez ensuite prendre une capture d\'\xe9cran {cameraButton} pour la convertir en calcul accessible, la faire lire \xe0 voix haute et m\xeame la copier-coller dans une application G Suite.","math-discoverability.info-dialog.paragraph-3":"Vous ne voulez pas qu\'EquatIO cherche du contenu math\xe9matique? Cliquez sur l\'ic\xf4ne EquatIO, puis sur le bouton de d\xe9couvrabilit\xe9 math\xe9matique {discoverBtn} pour d\xe9sactiver cette fonctionnalit\xe9.","math-discoverability.info-dialog.title":"\xc0 propos","office-install-popup-body":"Pour ins\xe9rer des math\xe9matiques, vous devez installer l\'extension Office Chrome. Vous pouvez \xe9galement essayer le bouton Copier les math\xe9matiques sous {copyAsBtn}.","office-install-popup-cancel":"Annuler","office-install-popup-install":"Installer l\'extension","office-install-popup-title":"Ins\xe9rer Math","office-not-supported-popup-body":"L\'insertion et la modification de math\xe9matiques ne sont actuellement prises en charge que dans Word Online. Essayez plut\xf4t le bouton Copier les math\xe9matiques sous {copyAsBtn}.","office-not-supported-popup-install":"D\'accord","options-dialog.chrome-options.title":"Options de Chrome","options-dialog.insert-type":"M\xe9thode d\'insertion:","options-dialog.insert-type.automatic":"Automatique (recommand\xe9)","options-dialog.insert-type.quality":"Qualit\xe9","options-dialog.insert-type.speed":"La vitesse","options-dialog.save":"Sauvegarder","options-dialog.screenshot-reader-autoplay":"Lecture automatique","options-dialog.screenshot-reader-speech-speed":"Vitesse de parole","options-dialog.screenshot-reader-title":"Lecteur de capture d\'\xe9cran","options-dialog.screenshot-reader-title-premium-only":"(Seulement Premium)","popup-menu.change-account":"Changer de compte","popup-menu.close":"Fermer EquatIO","popup-menu.switch-user":"Changer d\'utilisateur","popup-menu.try-mathspace":"Essayez EquatIO Mathspace","screenshot-reader-button.title":"Lecteur de capture d\'\xe9cran","screenshot-reader-button.title_premium":"Lecteur de capture d\'\xe9cran (Fonctionnalit\xe9 Premium)","screenshot-reader.context-menu.buttons.copy-latex":"Copier LaTeX","screenshot-reader.context-menu.buttons.copy-mathml":"Copier MatML","screenshot-reader.context-menu.buttons.send-to-equation":"Editer avec EquatIO","screenshot-reader.mathjax.actions.close":"Fermer","screenshot-reader.mathjax.actions.more-options":"Plus d\'options","screenshot-reader.mathjax.actions.play":"Jouer","screenshot-reader.mathjax.actions.stop":"Arr\xeat","screenshot-reader.mathjax.error-display.title":"Uh oh! Nous n\'avons pu d\xe9tecter aucun calcul pour cette s\xe9lection","sheetsAuthorization.authorize-button":"Autoriser Google","sheetsAuthorization.introduction-line1":"Salut!","sheetsAuthorization.introduction-line2":"Comme c\'est la premi\xe8re fois tu vous utilises EquatIO avec Google Forms, tu dois d\'abord donner ton autorisation \xe0 Google. Clique sur le bouton ci-dessous lorsque tu es pr\xeat.","upgrade-overlay-fft-dismiss":"Pas aujourd\'hui, merci","upgrade-overlay-fft-sign-up":"Inscris-toi \xe0 Free for Teachers","upgrade-overlay-iconset-advanced-math":"Le moteur de pr\xe9diction avanc\xe9 en math\xe9matiques et chimie","upgrade-overlay-iconset-built-in-integration":"Integration avec Google Forms, Google Slides, Google Sheets & Google Drawings","upgrade-overlay-iconset-free-for-teachers-click-here":"clique ici","upgrade-overlay-iconset-unlimited-handwriting":"Entr\xe9es manuscrites illimit\xe9es","upgrade-overlay-privacy-policy":"Politique de confidentialit\xe9","upgrade-overlay-student-dismiss":"Je suis pr\xeat. Ram\xe8ne-moi \xe0 EquatIO.","upgrade-overlay-student-expired.text":"On dirait que ton acc\xe8s gratuit de 30 jours aux fonctionnalit\xe9s premium d\'EquatIO ait expir\xe9. Vois avec ton enseignant pour pouvoir continuer \xe0 utiliser toutes les fonctionnalit\xe9s d\'EquatIO, y compris l\'\xe9criture manuscrite et la pr\xe9vision math\xe9matique. Si tu es un enseignant, {upgradeLink} pour en savoir plus sur notre programme Free for Teachers.","upgrade-overlay-student-handwriting-exceeded.text":"Oups! Tu as d\xe9j\xe0 utilis\xe9 tes deux entr\xe9es manuscrites pour la journ\xe9e. Vois avec ton enseignant pour en savoir plus sur tes options d\'\xe9criture. Si tu es un enseignant, {upgradeLink} pour en savoir plus sur notre programme Free for Teachers.","upgrade-overlay-student-learn-more":"En savoir plus","upgrade-overlay-student-upgrade-reminder.text":"Vois avec ton enseignant pour en savoir plus sur les fonctionnalit\xe9s premium d\'EquatIO. Si tu es un enseignant, {upgradeLink} pour en savoir plus sur notre programme Free for Teachers.","upgrade-overlay-teacher-expiring.text":"Mais pourquoi renouveler quand tu peux t\'inscrire gratuitement en tant qu\'enseignants? Tu obtiendras ainsi GRATUITEMENT toutes les fonctionnalit\xe9s de ton abonnement premium EquatIO que tu connais et appr\xe9cies d\xe9j\xe0!","upgrade-overlay-teacher-expiring.title":"Ton abonnement premium \xe0 EquatIO expire dans moins de 5 jours.","upgrade-overlay-teacher-first-time-expiry.line1":"On dirait que ton acc\xe8s de 30 jours aux fonctionnalit\xe9s premium d\'EquatIO ait expir\xe9.","upgrade-overlay-teacher-first-time-expiry.line2":"Mais pas besoin de s\'inqui\xe9ter. En tant qu\'enseignant, tu peux obtenir gratuitement toutes ces fonctionnalit\xe9s gr\xe2ce \xe0 notre programme Free for Teacher. Inscris-toi aujourd\'hui pour continuer \xe0 utiliser toutes les fonctionnalit\xe9s d\'EquatIO!","upgrade-overlay-teacher-forms-periodic-reminder.integration-with-apps":"Integration avec Google Slides, Google Sheets & Google Drawings","upgrade-overlay-teacher-forms-periodic-reminder.text":"Si tu t\'inscris \xe0 EquatIO Free for Teachers, tu peux transformer ton processus d\'\xe9valuation gr\xe2ce \xe0 notre int\xe9gration avec Google Forms, et ceci sans frais suppl\xe9mentaires! Inscris-toi aujourd\'hui pour acc\xe9der gratuitement \xe0 toutes les fonctionnalit\xe9s premium d\'EquatIO.","upgrade-overlay-teacher-forms-periodic-reminder.title":"Eureka!","upgrade-overlay-teacher-general-periodic-reminder.line1":"Inscris-toi \xe0 EquatIO Free for Teachers d\xe8s aujourd\'hui pour faire passer tes maths num\xe9riques au niveau sup\xe9rieur!","upgrade-overlay-teacher-general-periodic-reminder.line2":"En t\'inscrivant, tu recevras un acc\xe8s gratuit \xe0...","upgrade-overlay-teacher-handwriting-exceeded.text":"Tu as d\xe9j\xe0 utilis\xe9 tes deux entr\xe9es manuscrites gratuites pour la journ\xe9e. Mais savais-tu que gr\xe2ce \xe0 notre programme Free for Teacher, tu peux avoir acc\xe8s \xe0 toutes les fonctionnalit\xe9s premium GRATUITEMENT, et pour toujours? Inscris-toi d\xe8s aujourd\'hui!","upgrade-overlay-teacher-handwriting-exceeded.whoops":"Oups!","upgrade-overlay-teacher-prediction-periodic-reminder.text":"Heureusement pour toi, le moteur avanc\xe9 de calcul de math\xe9matiques et de chimie d\'EquatIO est fait pour toi! Inscris-toi \xe0 notre programme Free for Teachers d\xe8s aujourd\'hui pour acc\xe9der GRATUITEMENT \xe0 cette fonctionnalit\xe9, et \xe0 toutes les autres fonctionnalit\xe9s premium d\'EquatIO!","upgrade-overlay-teacher-prediction-periodic-reminder.title":"Imagine le temps que tu gagnerais si tu pouvais g\xe9n\xe9rer des \xe9quations plus rapidement.","upgrade-overlay-teacher-review-action":"Evalue EquatIO!","upgrade-overlay-teacher-review-dismiss":"Non merci.","upgrade-overlay-teacher-review-no-thanks":"Rapp\xe8le-moi plus tard","upgrade-overlay-teacher-review.text":"Fais don d\'une fraction de ton rayonnement en donnant \xe0 EquatIO une note de 5 \xe9toiles!","upgrade-overlay-teacher-review.title":"A pr\xe9sent tu es une star\u2b50\ufe0f des maths!","upgrade-overlay-used-by-teachers":"Utilis\xe9 par les enseignants{lineBreak}et les \xe9l\xe8ves du monde entier","web-discoverability.popup.activate":"Montrez-moi!","web-discoverability.popup.dismiss":"Non merci","web-toolbar.popup-menu.menu.close":"Cacher EquatIO","web-toolbar.toolbar.calculator":"Calculatrice scientifique","web-toolbar.toolbar.discoverability-toggle":"D\xe9couvrabilit\xe9","web-toolbar.toolbar.molecular-viewer":"Visionneuse mol\xe9culaire","web-toolbar.toolbar.move-toolbar":"D\xe9placer la barre d\'outils","web-toolbar.toolbar.periodic-table":"Tableau p\xe9riodique","web-toolbar.toolbar.premium-only":"Fonction Premium","web-toolbar.toolbar.screenshot-reader":"Lecteur de capture d\'\xe9cran"}');
    },
    168: function(e) {
        e.exports = JSON.parse('{"apps-discovery.notification.contain":"Questo documento contiene Math.","apps-discovery.notification.dontshow":"Non mostrare pi\xf9 questo messaggio.","apps-discovery.notification.info1":"Clicca sul","apps-discovery.notification.info2":"icona nella barra degli strumenti sopra e iniziare a rendi il Math digitale.","apps-discovery.notification.notnow":"Non adesso","apps-discovery.overlay.close":"Chiudi","apps-discovery.overlay.contain":"Questo documento contiene un Math","apps-discovery.overlay.edit":"Modifica in EquatIO","browser-action-popup.disabled-app.dismiss":"OK","browser-action-popup.disabled-app.message":"Sembra che l\'integrazione di questa Google App per il tuo dominio \xe8 stata disattivata . Chiedi al tuo amministratore per attivare questa funzione!","browser-action-popup.disabled-app.title":"Ehil\xe0!","browser-action-popup.forms.dismiss":"OK","browser-action-popup.forms.message":"Apri EquatIO in Google Forms cliccando sull\'icona {equationIcon} accanto alla domanda o risposta che si desidera lavorare.","browser-action-popup.forms.title":"Tempo di quiz?!","browser-action-popup.not-signed-into-chrome.dismiss":"OK","browser-action-popup.not-signed-into-chrome.message":"Sembra che tu non abbia fatto l\'accesso a Google Chrome :(","browser-action-popup.not-signed-into-chrome.read-more":"Leggi di pi\xf9","browser-action-popup.not-signed-into-chrome.sign-in-message":"Per poter utilizzare tutte le spettacolari caratteristiche di EquatIO, \xe8 necessario accedere. {readMoreLink}.","browser-action-popup.not-signed-into-chrome.title":"Ehil\xe0!","browser-action-popup.premium-app-only.message":"Per accedere a questa funzione \xe8 necessario l\'abbonamento Premium","browser-action-popup.premium-app-only.more-info":"Ulteriori informazioni","browser-action-popup.premium-app-only.sign-in":"Accedi","browser-action-popup.premium-app-only.signed-in-as":"Hai eseguito l\'accesso come:","browser-action-popup.premium-app-only.switch-user":"Cambia utente","browser-action-popup.web-premium.dismiss":"OK","browser-action-popup.web-premium.message":"Hai bisogno di un {premiumSubscription} per utilizzare EquatIO all\'interno di pagine web","browser-action-popup.web-premium.premium-subscription":"Abbonamento Premium","browser-action-popup.web-premium.title":"Ehil\xe0!","browser-action-popup.web-premium.upgrade":"Per saperne di pi\xf9","info-popup-clipboard-body":"Math \xe8 stato aggiunto alla tua clipboard, \xe8 possibile incollare con <b> {pasteCommand} </b>.","info-popup-clipboard-dimiss-checkbox":"Non mostrare pi\xf9 questo messaggio","info-popup-clipboard-title":"Math copiato","info-popup-insert-failed-body":"Si prega di verificare la connessione a Internet e provare nuovamente  l\'inserimento. Puoi anche provare il tasto Copia Math come {copyAsBtn}.","info-popup-insert-failed-title":"Inserimento non riuscito","info-popup-switch-user-body":"Stiamo preparando il cambio del profilo utente. Questo potrebbe richiedere alcuni secondi.","info-popup-switch-user-title":"Cambio utente","intro.academy.description":"Ogni volta che vedi {cap}, cliccaci per avere sacco di consigli e suggerimenti su come utilizzare EquatIO.","intro.academy.description.cap":"Cappello","intro.academy.dismiss":"Ok, capito","intro.academy.hints":"Qui appariranno i suggerimenti di EquatIO Academy.","intro.equation.description":"{useIcon} per facilitare la scrittura matematica.","intro.equation.description.action":"Utilizzare questa icona","intro.get-started.dismiss.button":"Preferisco non dire, lasciami usare EquatIO","intro.get-started.student.button":"Sono uno studente","intro.get-started.student.paragraph":"Completa i quiz, crea equazioni e molto altro ancora.","intro.get-started.student.title":"Studente?","intro.get-started.teacher.button":"Sono un\'insegnante","intro.get-started.teacher.paragraph":"Inizia subito a creare equazioni, quiz e molto altro.","intro.get-started.teacher.title":"Insegnante?","intro.get-started.title":"Iniziamo","intro.launch.next-step":"Ok capito","intro.launch.paragraph":"\xc8 possibile utilizzare EquatIO in {googleApps}.","intro.launch.paragraph.action":"Docs, Forms, Slides, Sheets and Drawings","intro.launch.title.action":"{launchEquatio} utilizzando il {button} sopra, o utilizzando {keyboardShortcut}.","intro.launch.title.action.bold":"Avvia EquatIO","intro.skip":"Salta il tutorial","math-discoverability.action-buttons.capture-math":"Cattura Math","math-discoverability.action-buttons.dismiss":"Disabilita Rilevamento Formule","math-discoverability.action-buttons.what-is-this":"Cos\'\xe8 questo?","math-discoverability.info-dialog.close":"Chiudi","math-discoverability.info-dialog.happy-searching":"Buona ricerca!","math-discoverability.info-dialog.hey-there":"Ehil\xe0!","math-discoverability.info-dialog.paragraph-1":"Questa \xe8 una caratteristica di EquatIO, il pulsante blu a forma di diamante che si vede laggi\xf9 alla destra della barra degli indirizzi.","math-discoverability.info-dialog.paragraph-2":"Tra molte altre cose, EquatIO cerca formule matematiche nella pagina web in cui ti trovi. Se ne trova una, la evidenzier\xe0, proprio come avete visto qui. Poi si puoi fare  un  {cameraButton} screenshot per convertirla in un Math, farla leggere ad alta voce, e persino copiare e incollare in una App di G Suite.","math-discoverability.info-dialog.paragraph-3":"Non vuoi EquatIO per la ricerca di contenuti di matematica? Fai clic sull\'icona EquatIO e fai clic sul pulsante di rilevazione matematica {discoverBtn} per disattivare questa funzione.","math-discoverability.info-dialog.title":"A proposito","office-install-popup-body":"Per inserire un Math \xe8 necessario installare Chrome Extension Office. In alternativa, prova {copyAsBtn}  il pulsante Copia Math.","office-install-popup-cancel":"Annulla","office-install-popup-install":"Installa estensione","office-install-popup-title":"Inserisci Math","office-not-supported-popup-body":"L\'inserimentio e la modifica di un Math sono attualmente supportati solo in Word Online. In alternativa, prova il pulsante Copia {copyAsBtn} Math.","office-not-supported-popup-install":"Ok","options-dialog.chrome-options.title":"Opzioni Chrome","options-dialog.insert-type":"Inserisci Metodo:","options-dialog.insert-type.automatic":"Automatico (scelta consigliata)","options-dialog.insert-type.quality":"Qualit\xe0","options-dialog.insert-type.speed":"Velocit\xe0","options-dialog.save":"Salva","options-dialog.screenshot-reader-autoplay":"Riproduzione automatica","options-dialog.screenshot-reader-speech-speed":"Velocit\xe0 Speech","options-dialog.screenshot-reader-title":"Lettore Screenshot","options-dialog.screenshot-reader-title-premium-only":"(Solo Premium)","popup-menu.close":"Chiudi EquatIO","popup-menu.switch-user":"Cambia utente","popup-menu.try-mathspace":"Prova EquatIO Mathspace","screenshot-reader-button.title":"Lettore Screenshot","screenshot-reader-button.title_premium":"Lettore Screenshot (Caratteristica Premium)","screenshot-reader.context-menu.buttons.copy-latex":"Copia LaTeX","screenshot-reader.context-menu.buttons.copy-mathml":"Copia MathML","screenshot-reader.context-menu.buttons.send-to-equation":"Modifica con EquatIO","screenshot-reader.mathjax.actions.close":"Chiudi","screenshot-reader.mathjax.actions.more-options":"Pi\xf9 opzioni","screenshot-reader.mathjax.actions.play":"Giocare","screenshot-reader.mathjax.actions.stop":"Ferma","screenshot-reader.mathjax.error-display.title":"Uh Oh! Non abbiamo potuto rilevare alcun Math per questa selezione","upgrade-overlay-fft-dismiss":"Non oggi, grazie","upgrade-overlay-fft-sign-up":"Iscriviti gratuitamente per gli insegnanti","upgrade-overlay-iconset-advanced-math":"Il motore avanzato per la previsione matematica e chimica ","upgrade-overlay-iconset-built-in-integration":"Integrazione con Google Forms, Presentazioni, Fogli e Disegni","upgrade-overlay-iconset-free-for-teachers-click-here":"clicca qui","upgrade-overlay-iconset-unlimited-handwriting":"Input illimitati per la scrittura a mano","upgrade-overlay-privacy-policy":"politica sulla privacy","upgrade-overlay-student-dismiss":"Sono pronto. Fammi tornare ad EquatIO.","upgrade-overlay-student-expired.text":"Sembra che l\'accesso di 30 giorni per le caratteristiche premium di EquatIO \xe8 scaduto. Parla con il tuo insegnante per capire come  continuare a utilizzare tutte le spettacolari funzionalit\xe0 di EquatIO, tra cui la scrittura e la previsione matematica. Se sei un insegnante, {upgradeLink} per conoscere il nostro programma \\"Gratis per gli Insegnanti\\".","upgrade-overlay-student-handwriting-exceeded.text":"Ops! Hai gi\xe0 usato i tuoi due input di scrittura a mano per oggi. Parla con il tuo insegnante per saperne di pi\xf9 sulle opzioni di scrittura a mano. Se sei un insegnante, {upgradeLink} per conoscere il nostro programma \\"Gratis per gli Insegnanti\\".","upgrade-overlay-student-learn-more":"Per saperne di pi\xf9","upgrade-overlay-student-upgrade-reminder.text":"Parla con il tuo insegnante per ulteriori informazioni sulle funzioni premium di EquatIO.  Se sei un insegnante, {upgradeLink} per conoscere il nostro programma \\"Gratis per gli Insegnanti\\".","upgrade-overlay-teacher-expiring.text":"Ma perch\xe9 rinnovare quando puoi registrati a \\"Gratis per gli Insegnanti\\"? Come insegnante, otterrai tutte le caratteristiche che abbiamo imparato a conoscere con il vostro abbonamento premium di EquatIO GRATIS!","upgrade-overlay-teacher-expiring.title":"Il tuo abbonamento premium a EquatIO scade in meno di 5 giorni.","upgrade-overlay-teacher-first-time-expiry.line1":"Sembra che l\'accesso di 30 giorni per le caratteristiche premium di EquatIO \xe8 scaduto.","upgrade-overlay-teacher-first-time-expiry.line2":"Ma non c\'\xe8 bisogno di preoccuparsi. Come insegnante, \xe8 possibile ottenere tutte quelle caratteristiche gratis per sempre attraverso il nostro programma: \\"Gratis per gli Insegnanti\\". Iscriviti oggi per continuare a utilizzare tutte le funzioni di EquatIO!","upgrade-overlay-teacher-forms-periodic-reminder.integration-with-apps":"Integrazione con Google Slides, Fogli e disegni","upgrade-overlay-teacher-forms-periodic-reminder.text":"Iscrivendosi a \\"Gratis per gli Insegnanti\\" \xe8 possibile trasformare il tuo processo di valutazione grazie  all\'integrazione con Google Forms - senza alcun costo aggiuntivo! Iscriviti oggi per accedere a tutte le caratteristiche premium di EquatIO gratuitamente.","upgrade-overlay-teacher-forms-periodic-reminder.title":"Eureka!","upgrade-overlay-teacher-general-periodic-reminder.line1":"Iscriviti oggi ad EquatIO \\"Gratis per gli Insegnanti\\" e porta la matematica digitale al livello successivo!","upgrade-overlay-teacher-general-periodic-reminder.line2":"Con la firma, riceverai l\'accesso gratuito a...","upgrade-overlay-teacher-handwriting-exceeded.text":"Hai gi\xe0 usato i tuoi due input gratuiti di scrittura a mano libera per oggi. Attraverso il programma \\"Gratis per gli Insegnanti\\" \xe8 possibile ottenerne gratuitamente un numero illimitato - insieme a tutte le altre caratteristiche premium - per sempre. Iscriviti oggi!","upgrade-overlay-teacher-handwriting-exceeded.whoops":"Ops!","upgrade-overlay-teacher-prediction-periodic-reminder.text":"Fortunatamente per voi, il motore di predizione matematica e chimica di EquatIO fa proprio questo! Iscriviti gratuitamente con il programma \\"Gratis per gli Insegnanti\\" e potrai accedere a questa funzione e tutte le caratteristiche premium di EquatIO - GRATIS!","upgrade-overlay-teacher-prediction-periodic-reminder.title":"Basti pensare al tempo che risparmieresti generando equazioni pi\xf9 velocemente.","upgrade-overlay-teacher-review-action":"Valuta EquatIO!","upgrade-overlay-teacher-review-dismiss":"No grazie.","upgrade-overlay-teacher-review-no-thanks":"Ricordamelo pi\xf9 tardi.","upgrade-overlay-teacher-review.text":"Condividi il tuo star-power dando ad EquatIO 5 stelle!","upgrade-overlay-teacher-review.title":"Ti senti una stella \u2b50\ufe0f?","upgrade-overlay-used-by-teachers":"Utilizzato da insegnanti{lineBreak}e studenti di tutto il mondo","web-discoverability.popup.activate":"Mostrami!","web-discoverability.popup.dismiss":"No grazie","web-toolbar.toolbar.discoverability-toggle":"Rilevamento Formule"}');
    },
    21: function(e, t, o) {
        "use strict";
        o.r(t);
        var a = o(50);
        function r(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), o.push.apply(o, a);
            }
            return o;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(o), !0).forEach(function(t) {
                    n(e, t, o[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : r(Object(o)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                });
            }
            return e;
        }
        function n(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e;
        }
        var s = i({}, a, {}, o(165));
        function u(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), o.push.apply(o, a);
            }
            return o;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(o), !0).forEach(function(t) {
                    p(e, t, o[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : u(Object(o)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                });
            }
            return e;
        }
        function p(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e;
        }
        var l = c({}, a);
        function d(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), o.push.apply(o, a);
            }
            return o;
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(o), !0).forEach(function(t) {
                    h(e, t, o[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                });
            }
            return e;
        }
        function h(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e;
        }
        var g = m({}, a, {}, o(166));
        function f(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), o.push.apply(o, a);
            }
            return o;
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(o), !0).forEach(function(t) {
                    b(e, t, o[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : f(Object(o)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                });
            }
            return e;
        }
        function b(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e;
        }
        var v = y({}, a, {}, o(167));
        function w(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), o.push.apply(o, a);
            }
            return o;
        }
        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(o), !0).forEach(function(t) {
                    q(e, t, o[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : w(Object(o)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                });
            }
            return e;
        }
        function q(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e;
        }
        var E = O({}, a, {}, o(168));
        o.d(t, "getBrowserLanguage", function() {
            return x;
        }), o.d(t, "getSupportedLocaleForLanguage", function() {
            return j;
        }), o.d(t, "getMessagesForLanguage", function() {
            return S;
        }), o.d(t, "getLocaleCode", function() {
            return k;
        });
        var I = {
            enUS: l,
            enGB: s,
            es: g,
            fr: v,
            it: E
        }, x = (t.default = I, function() {
            return (Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language) || navigator.userLanguage;
        }), j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x();
            return "es" === e || e.startsWith("es-") ? "es" : "fr" === e || e.startsWith("fr-") ? "fr" : "it" === e || e.startsWith("it-") ? "it" : "en";
        }, S = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x();
            return e ? "en-GB" === e ? I.enGB : "en-US" === e ? I.enUS : "es" === e || e.startsWith("es-") ? I.es : "fr" === e || e.startsWith("fr-") ? I.fr : "it" === e || e.startsWith("it-") ? I.it : I.enUS : I.enUS;
        }, k = function(e) {
            return "fr" === e || e.startsWith("fr-") ? "fr" : "es" === e || e.startsWith("es-") ? "es" : "it" === e || e.startsWith("it-") ? "it" : "enGB" === e ? "en-GB" : "en-US";
        };
    },
    33: function(e, t, o) {
        "use strict";
        (function(e) {
            var a = o(83);
            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                    }
                    return e;
                }).apply(this, arguments);
            }
            t.a = function(t) {
                return e.createElement(a.a, r({}, t, {
                    arrow: !0,
                    animation: "shift-away",
                    placement: t.placement || "top",
                    delay: [ 200, 50 ],
                    allowHTML: !1,
                    zIndex: 99999,
                    boundary: "viewport",
                    trigger: "mouseenter"
                }));
            };
        }).call(this, o(1));
    },
    351: function(e, t, o) {
        "use strict";
        o.r(t), function(e) {
            o.d(t, "default", function() {
                return I;
            });
            var a = o(1), r = o(58), i = o(105), n = o(645), s = o(650), u = o(656), c = o(21), p = o(2), l = o(106);
            function d(e, t, o, a, r, i, n) {
                try {
                    var s = e[i](n), u = s.value;
                } catch (e) {
                    return void o(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(a, r);
            }
            function m(e) {
                return function() {
                    var t = this, o = arguments;
                    return new Promise(function(a, r) {
                        var i = e.apply(t, o);
                        function n(e) {
                            d(i, a, r, n, s, "next", e);
                        }
                        function s(e) {
                            d(i, a, r, n, s, "throw", e);
                        }
                        n(void 0);
                    });
                };
            }
            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function g(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(e, a.key, a);
                }
            }
            function f(e, t, o) {
                return t && g(e.prototype, t), o && g(e, o), e;
            }
            function y(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t);
            }
            function b(e, t) {
                return (b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function v(e) {
                var t = q();
                return function() {
                    var o, a = E(e);
                    if (t) {
                        var r = E(this).constructor;
                        o = Reflect.construct(a, arguments, r);
                    } else o = a.apply(this, arguments);
                    return w(this, o);
                };
            }
            function w(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? O(e) : t;
            }
            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function q() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }
            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var I = function(t) {
                y(d, a["Component"]);
                var o = v(d);
                function d(e) {
                    var t;
                    return h(this, d), (t = o.call(this, e)).state = {
                        locale: u.a.locale,
                        hasMath: !1,
                        element: null
                    }, t;
                }
                return f(d, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this, t = this.props.math;
                        m(function*() {
                            if (t.hasMath) {
                                Object(p.I)("Docs Discoverability Shown");
                                var o = t.node;
                                e.setState({
                                    hasMath: !0,
                                    element: o
                                });
                            }
                        })();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props.hasEquationToolbarOpened, o = this.state, a = o.hasMath, u = o.element, p = o.locale;
                        return a ? e.createElement(r.b, {
                            locale: Object(c.getSupportedLocaleForLanguage)(p),
                            messages: Object(c.getMessagesForLanguage)(p)
                        }, e.createElement(i.a.div, {
                            id: "equatio-gsuite-discover-shadow-host"
                        }, e.createElement(l.a, null), e.createElement(n.a, null), e.createElement(s.a, {
                            element: u,
                            hasEquationToolbarOpened: t
                        }))) : null;
                    }
                } ]), d;
            }();
        }.call(this, o(1));
    },
    398: function(e, t, o) {
        "use strict";
        (function(e) {
            o.d(t, "b", function() {
                return f;
            });
            var a = o(1), r = o(48), i = o(32);
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(e, a.key, a);
                }
            }
            function u(e, t, o) {
                return t && s(e.prototype, t), o && s(e, o), e;
            }
            function c(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t);
            }
            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function l(e) {
                var t = h();
                return function() {
                    var o, a = g(e);
                    if (t) {
                        var r = g(this).constructor;
                        o = Reflect.construct(a, arguments, r);
                    } else o = a.apply(this, arguments);
                    return d(this, o);
                };
            }
            function d(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? m(e) : t;
            }
            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function h() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }
            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var f = Object(r.defineMessages)({
                close: {
                    id: "apps-discovery.overlay.close",
                    defaultMessage: "Close"
                },
                containMath: {
                    id: "apps-discovery.notification.contain",
                    defaultMessage: "This document contains Math."
                },
                containMathInfo1: {
                    id: "apps-discovery.notification.info1",
                    defaultMessage: "Click on the"
                },
                containMathInfo2: {
                    id: "apps-discovery.notification.info2",
                    defaultMessage: "icon in the toolbar above and start making Math digital."
                },
                notNow: {
                    id: "apps-discovery.notification.notnow",
                    defaultMessage: "Not right now"
                },
                dontShow: {
                    id: "apps-discovery.notification.dontshow",
                    defaultMessage: "Don't show me this message again."
                }
            }), y = function(t) {
                c(r, a["Component"]);
                var o = l(r);
                function r() {
                    return n(this, r), o.apply(this, arguments);
                }
                return u(r, [ {
                    key: "render",
                    value: function() {
                        var t = this.props, o = t.onDismiss, a = t.onDontShowClick, r = t.intl;
                        return e.createElement("div", {
                            className: "equatio-apps-discovery-popup"
                        }, e.createElement("div", {
                            className: "equatio-apps-discovery-popup__bubble"
                        }, e.createElement("svg", {
                            className: "equatio-apps-discovery-popup-background",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 260.871 263"
                        }, e.createElement("path", {
                            fill: "#fafafa",
                            d: "M60.641 263.002l-4.685-2.928A119 119 0 0 1 18.098 96.096L78.144.002h171.727a11 11 0 0 1 11 11v241a11 11 0 0 1-11 11z"
                        }), e.createElement("path", {
                            fill: "#f2f2f2",
                            d: "M146.839 263.002l-36.114-20.85A119 119 0 0 1 67.171 79.594L113.121.002h136.75a11 11 0 0 1 11 11v241a11 11 0 0 1-11 11z"
                        })), e.createElement("div", {
                            className: "equatio-apps-discovery-popup-title"
                        }, e.createElement("svg", {
                            viewBox: "0 0 38 38",
                            className: "equatio-apps-discovery-popup-title__warning"
                        }, e.createElement("use", {
                            xlinkHref: "#equatio-svg-discover-header-warning"
                        })), e.createElement("svg", {
                            viewBox: "0 0 98.197 22.312",
                            className: "equatio-apps-discovery-popup-title__logo"
                        }, e.createElement("use", {
                            xlinkHref: "#equatio-svg-logo-blue"
                        }))), e.createElement("div", {
                            className: "equatio-apps-discovery-popup__text"
                        }, r.formatMessage(f.containMath), e.createElement("br", null), r.formatMessage(f.containMathInfo1), e.createElement("div", {
                            className: "equatio-apps-discovery-popup-browser-action__icon"
                        }, e.createElement("svg", {
                            viewBox: "0 0 37.4 37.4"
                        }, e.createElement("use", {
                            xlinkHref: "#equatio-svg-logo-icon"
                        })), e.createElement("div", {
                            className: "equatio-apps-discovery-popup-browser-action__badge"
                        }, e.createElement("div", null, "\u03a3"))), r.formatMessage(f.containMathInfo2)), e.createElement("div", {
                            className: "equatio-apps-discovery-popup__button-wrapper"
                        }, e.createElement("button", {
                            className: "equatio-apps-discovery-popup__button equatio-apps-discovery-popup__button--not-right-now",
                            onClick: function() {
                                return o();
                            }
                        }, r.formatMessage(f.notNow))), e.createElement("div", {
                            className: "equatio-apps-discovery-popup__instruction-wrapper"
                        }, e.createElement("a", {
                            href: "#",
                            role: "button",
                            className: "equatio-link-button equatio-link-button--small",
                            onClick: function() {
                                return a();
                            }
                        }, r.formatMessage(f.dontShow)))));
                    }
                } ]), r;
            }();
            t.a = Object(i.c)(y);
        }).call(this, o(1));
    },
    50: function(e) {
        e.exports = JSON.parse('{"apps-discovery.notification.contain":"This document contains Math.","apps-discovery.notification.dontshow":"Don\'t show me this message again.","apps-discovery.notification.info1":"Click on the","apps-discovery.notification.info2":"icon in the toolbar above and start making Math digital.","apps-discovery.notification.notnow":"Not right now","apps-discovery.overlay.close":"Close","apps-discovery.overlay.contain":"This document contains Math","apps-discovery.overlay.edit":"Edit in EquatIO","browser-action-popup.disabled-app.dismiss":"OK","browser-action-popup.disabled-app.message":"Looks like this Google App integration has been disabled for your domain. Talk to your admin to have this feature enabled!","browser-action-popup.disabled-app.title":"Hey there!","browser-action-popup.forms.dismiss":"OK","browser-action-popup.forms.message":"Open up EquatIO in Google Forms by clicking on the {equationIcon} icon beside the question or answer you want to work on.","browser-action-popup.forms.title":"Quiz time?!","browser-action-popup.not-signed-into-chrome.dismiss":"OK","browser-action-popup.not-signed-into-chrome.message":"Looks like you\'re not signed into Google Chrome :(","browser-action-popup.not-signed-into-chrome.read-more":"Read More","browser-action-popup.not-signed-into-chrome.sign-in-message":"In order to use all the great features of EquatIO, you need to sign in. {readMoreLink}.","browser-action-popup.not-signed-into-chrome.title":"Hey there!","browser-action-popup.premium-app-only.message":"You need a premium subscription to access this feature.","browser-action-popup.premium-app-only.more-info":"More Info","browser-action-popup.premium-app-only.sign-in":"Sign in","browser-action-popup.premium-app-only.signed-in-as":"You are signed in as:","browser-action-popup.premium-app-only.switch-user":"Switch User","browser-action-popup.web-premium.dismiss":"OK","browser-action-popup.web-premium.message":"You need a {premiumSubscription} to use EquatIO inside web pages","browser-action-popup.web-premium.premium-subscription":"Premium Subscription","browser-action-popup.web-premium.title":"Hey there!","browser-action-popup.web-premium.upgrade":"Learn More","info-popup-clipboard-body":"Math has been added to your clipboard, you can paste with <b>{pasteCommand}</b>.","info-popup-clipboard-dimiss-checkbox":"Don\'t show this message again","info-popup-clipboard-title":"Math Copied","info-popup-insert-failed-body":"Please check your internet connection and try inserting again. You can also try the Copy Math as button {copyAsBtn}.","info-popup-insert-failed-title":"Insert Failed","info-popup-switch-user-body":"Sit tight, we\'re just getting ready to switch your user profile. This might take a few seconds.","info-popup-switch-user-title":"Switching User","intro.academy.description":"Whenever you see the {cap}, click on it for lots of hints and tips on how to use EquatIO.","intro.academy.description.cap":"cap","intro.academy.dismiss":"OK, got it","intro.academy.hints":"Hints and tips will appear here, in our easy to use EquatIO Academy.","intro.equation.description":"{useIcon} to help you write math.","intro.equation.description.action":"Use this icon","intro.get-started.dismiss.button":"Rather not say, let me use EquatIO","intro.get-started.student.button":"I\'m a student","intro.get-started.student.paragraph":"Complete quizzes, create equations and lots more.","intro.get-started.student.title":"Student?","intro.get-started.teacher.button":"I\'m a teacher","intro.get-started.teacher.paragraph":"Start creating equations, quizzes and more right now.","intro.get-started.teacher.title":"Teacher?","intro.get-started.title":"Let\'s get started","intro.launch.next-step":"OK, got it","intro.launch.paragraph":"You can use EquatIO in {googleApps}.","intro.launch.paragraph.action":"Docs, Forms, Slides, Sheets and Drawings","intro.launch.title.action":"{launchEquatio} using the {button} above, or using {keyboardShortcut}.","intro.launch.title.action.bold":"Launch EquatIO","intro.skip":"Skip Tutorial","math-discoverability.action-buttons.capture-math":"Capture Math","math-discoverability.action-buttons.dismiss":"Disable Discoverability","math-discoverability.action-buttons.what-is-this":"What is this?","math-discoverability.info-dialog.close":"Close","math-discoverability.info-dialog.happy-searching":"Happy searching!","math-discoverability.info-dialog.hey-there":"Hey there!","math-discoverability.info-dialog.paragraph-1":"This is a feature of EquatIO, the blue diamond-shaped button you see over there to the right of your address bar.","math-discoverability.info-dialog.paragraph-2":"Among many other things, EquatIO searches the web page you\u2019re on for math content. If it finds any, it will highlight it for you, just as you saw here. Then you can take a screenshot {cameraButton} to convert it into accessible math, have it read aloud, and even copy and paste it into a G Suite App.","math-discoverability.info-dialog.paragraph-3":"Don\u2019t want EquatIO to search for math content? Click on the EquatIO Icon and click the math discoverability button {discoverBtn} to turn off this feature.","math-discoverability.info-dialog.title":"About","office-install-popup-body":"To Insert Math, you\'ll need to install the Office Chrome Extension. Alternatively, try the Copy Math As button {copyAsBtn}.","office-install-popup-cancel":"Cancel","office-install-popup-install":"Install Extension","office-install-popup-title":"Insert Math","office-not-supported-popup-body":"Inserting and editing math is currently only supported in Word Online. Try the Copy Math As button {copyAsBtn} instead.","office-not-supported-popup-install":"Ok","options-dialog.chrome-options.title":"Chrome Options","options-dialog.insert-type":"Insert Method:","options-dialog.insert-type.automatic":"Automatic (Recommended)","options-dialog.insert-type.quality":"Quality","options-dialog.insert-type.speed":"Speed","options-dialog.save":"Save","options-dialog.screenshot-reader-autoplay":"Autoplay","options-dialog.screenshot-reader-speech-speed":"Speech Speed","options-dialog.screenshot-reader-title":"Screenshot Reader","options-dialog.screenshot-reader-title-premium-only":"(Premium Only)","popup-menu.close":"Close EquatIO","popup-menu.switch-user":"Switch User","popup-menu.try-mathspace":"Try EquatIO Mathspace","screenshot-reader-button.title":"Screenshot Reader","screenshot-reader-button.title_premium":"Screenshot Reader (Premium Feature)","screenshot-reader.context-menu.buttons.copy-latex":"Copy LaTeX","screenshot-reader.context-menu.buttons.copy-mathml":"Copy MathML","screenshot-reader.context-menu.buttons.send-to-equation":"Edit with EquatIO","screenshot-reader.mathjax.actions.close":"Close","screenshot-reader.mathjax.actions.more-options":"More Options","screenshot-reader.mathjax.actions.play":"Play","screenshot-reader.mathjax.actions.stop":"Stop","screenshot-reader.mathjax.error-display.title":"Uh oh! We couldn\'t detect any math for this selection","upgrade-overlay-fft-dismiss":"Not today, thanks","upgrade-overlay-fft-sign-up":"Sign up for Free for Teachers","upgrade-overlay-iconset-advanced-math":"The advanced math and chemistry prediction engine","upgrade-overlay-iconset-built-in-integration":"Built-in integration with Google Forms, Slides, Sheets & Drawings","upgrade-overlay-iconset-free-for-teachers-click-here":"click here","upgrade-overlay-iconset-unlimited-handwriting":"Unlimited handwriting inputs","upgrade-overlay-privacy-policy":"Privacy Policy","upgrade-overlay-student-dismiss":"I\'m all set. Take me back to EquatIO.","upgrade-overlay-student-expired.text":"It looks like your 30-day access to EquatIO\'s premium features has expired. Talk with your teacher to learn how you can keep using all of EquatIO\'s awesome features, including handwriting and math prediction. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.","upgrade-overlay-student-handwriting-exceeded.text":"Whoops! You\'ve already used your two handwriting inputs for the day. Talk with your teacher to learn more about your handwriting options. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.","upgrade-overlay-student-learn-more":"Learn More","upgrade-overlay-student-upgrade-reminder.text":"Talk with your teacher to learn more about EquatIO\'s premium features. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.","upgrade-overlay-teacher-expiring.text":"But why renew when you can sign up for Free for Teachers? As a teacher, you\'ll get all the features you\'ve come to know and love with your premium subscription of EquatIO for FREE!","upgrade-overlay-teacher-expiring.title":"Your premium subscription to EquatIO expires in less than 5 days.","upgrade-overlay-teacher-first-time-expiry.line1":"It looks like your 30-day access to EquatIO\'s premium features has expired.","upgrade-overlay-teacher-first-time-expiry.line2":"But no need to worry. As a teacher, you can get all those features free forever through our Free for Teacher program. Sign up today to keep using all of EquatIO\'s features!","upgrade-overlay-teacher-forms-periodic-reminder.integration-with-apps":"Integration with Google Slides, Sheets & Drawings","upgrade-overlay-teacher-forms-periodic-reminder.text":"If you sign up for EquatIO Free for Teachers, you can transform your assessment process through built-in integration with Google Forms - for no additional cost! Sign up today to access all of EquatIO\'s premium features for free.","upgrade-overlay-teacher-forms-periodic-reminder.title":"Eureka!","upgrade-overlay-teacher-general-periodic-reminder.line1":"Sign up for EquatIO Free for Teachers today to take your digital math to the next level!","upgrade-overlay-teacher-general-periodic-reminder.line2":"By signing up, you\'ll receive FREE access to...","upgrade-overlay-teacher-handwriting-exceeded.text":"You\'ve already used your two free handwriting inputs for the day. But did you know that through our Free for Teacher program you can get unlimited handwriting - along with all of the other premium features - FREE forever? Sign up today!","upgrade-overlay-teacher-handwriting-exceeded.whoops":"Whoops!","upgrade-overlay-teacher-prediction-periodic-reminder.text":"Lucky for you, EquatIO\'s advanced math and chemistry prediction engine does just that! Sign up for Free for Teachers today to access this radical feature - and all of EquatIO\'s premium features - for FREE!","upgrade-overlay-teacher-prediction-periodic-reminder.title":"Just think of the time you would save if you could generate equations faster.","upgrade-overlay-teacher-review-action":"Rate EquatIO!","upgrade-overlay-teacher-review-dismiss":"No, thanks.","upgrade-overlay-teacher-review-no-thanks":"Remind me later.","upgrade-overlay-teacher-review.text":"Share your star-power by giving EquatIO a 5-star rating!","upgrade-overlay-teacher-review.title":"Feeling like a star \u2b50\ufe0f?","upgrade-overlay-used-by-teachers":"Used by teachers{lineBreak}and students worldwide","web-discoverability.popup.activate":"Show me!","web-discoverability.popup.dismiss":"No Thanks","web-toolbar.toolbar.discoverability-toggle":"Discoverability"}');
    },
    645: function(e, t, o) {
        "use strict";
        (function(e) {
            var a = o(646), r = o.n(a), i = o(648), n = o.n(i);
            t.a = function() {
                return e.createElement("div", null, [ r.a, n.a ].map(function(t, o) {
                    return e.createElement("style", {
                        key: o.toString(),
                        type: "text/css"
                    }, t);
                }));
            };
        }).call(this, o(1));
    },
    648: function(e, t, o) {
        var a = o(649);
        e.exports = "string" == typeof a ? a : a.toString();
    },
    649: function(e, t, o) {
        (e.exports = o(25)(void 0)).push([ e.i, '#equatio-gsuite-discover-container {\n  all: initial; }\n\n#equatio-gsuite-discover-shadow-wrapper.equatio-hidden {\n  opacity: 0; }\n\n#equatio-gsuite-discover-shadow-wrapper.equatio-toggle {\n  display: none; }\n\n.equatio-apps-discovery-popup {\n  position: fixed;\n  top: 20px;\n  right: 25px;\n  width: 325px;\n  z-index: 10000000;\n  min-height: 192px; }\n\n.equatio-gsuite-discover-overlay-close {\n  position: absolute !important;\n  top: 130px !important;\n  right: 20px !important;\n  background: #2ba7dd !important;\n  border-radius: 11px !important;\n  width: 22px;\n  height: 22px;\n  z-index: 1053; }\n\n.equatio-gsuite-discover-overlay-close__icon {\n  color: #fff !important; }\n\n.equatio-gsuite-discover-overlay {\n  color: #fff; }\n\n.equatio-gsuite-discover-overlay-info {\n  font-weight: 800;\n  background: none !important;\n  opacity: 1 !important;\n  z-index: 1052 !important; }\n\n.equatio-gsuite-discover-overlay > div {\n  position: absolute;\n  background-color: #00b7ff;\n  margin: 0 !important;\n  padding: 0 !important;\n  opacity: 0.89;\n  z-index: 1051; }\n\n.equatio-gsuite-discover-overlay-top {\n  top: 0;\n  left: 0; }\n\n.equatio-gsuite-discover-overlay-right {\n  top: 0;\n  right: 0; }\n\n.equatio-gsuite-discover-overlay-bottom {\n  right: 0;\n  bottom: 0; }\n\n.equatio-gsuite-discover-overlay-left {\n  bottom: 0;\n  left: 0; }\n\n.equatio-gsuite-discover-overlay-center {\n  background-color: transparent !important; }\n\n.equatio-placeholder-toolbar-wrapper {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #00b7ff;\n  z-index: 9999; }\n\n.equatio-apps-discovery-overlay-title__warning {\n  height: 20px;\n  margin: 10px 10px -5px 0; }\n\n.equatio-apps-discovery-overlay-pointer__icon {\n  height: 240px;\n  display: block;\n  margin: 10px 0 10px 7px; }\n\n.equatio-apps-discovery-overlay-title__logo {\n  height: 60px;\n  position: absolute;\n  right: 30px;\n  bottom: 80px;\n  z-index: 2000; }\n\n.equatio-apps-discovery-popup-browser-action__icon {\n  width: 16px;\n  display: inline-block;\n  margin: -16px 10px 0 4px;\n  position: relative;\n  top: 16px; }\n\n.equatio-apps-discovery-popup-browser-action__badge {\n  background-color: #565656;\n  color: #fff;\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: -12px;\n  left: 9px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  border: 1px #fff solid; }\n\n.equatio-apps-discovery-popup-browser-action__badge > div {\n  position: relative;\n  left: -1px;\n  top: 0;\n  font-size: 11px;\n  font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif; }\n\n.equatio-link-button {\n  color: #494949 !important; }\n\n.equatio-link-button--small {\n  font-size: 0.8em; }\n', "" ]);
    },
    650: function(e, t, o) {
        "use strict";
        (function(e) {
            o.d(t, "a", function() {
                return q;
            });
            var a = o(1), r = o(398), i = o(651), n = o(2), s = o(655);
            function u(e, t, o, a, r, i, n) {
                try {
                    var s = e[i](n), u = s.value;
                } catch (e) {
                    return void o(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(a, r);
            }
            function c(e) {
                return function() {
                    var t = this, o = arguments;
                    return new Promise(function(a, r) {
                        var i = e.apply(t, o);
                        function n(e) {
                            u(i, a, r, n, s, "next", e);
                        }
                        function s(e) {
                            u(i, a, r, n, s, "throw", e);
                        }
                        n(void 0);
                    });
                };
            }
            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(e, a.key, a);
                }
            }
            function d(e, t, o) {
                return t && l(e.prototype, t), o && l(e, o), e;
            }
            function m(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t);
            }
            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function g(e) {
                var t = b();
                return function() {
                    var o, a = v(e);
                    if (t) {
                        var r = v(this).constructor;
                        o = Reflect.construct(a, arguments, r);
                    } else o = a.apply(this, arguments);
                    return f(this, o);
                };
            }
            function f(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? y(e) : t;
            }
            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function b() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }
            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function w(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e;
            }
            var O = Object.freeze({
                None: 0,
                Overlay: 1,
                Hidden: 2
            }), q = function(t) {
                m(u, a["Component"]);
                var o = g(u);
                function u(e) {
                    var t;
                    return p(this, u), w(y(t = o.call(this, e)), "setStatus", function(e) {
                        e === O.Hidden && Object(n.I)("Docs Discoverability - Dismiss"), t.setState(function() {
                            return {
                                status: e
                            };
                        });
                    }), w(y(t), "setShowMessage", function() {
                        c(function*() {
                            Object(n.I)("Docs Discoverability - Don't Show Again");
                            var e = {
                                type: "permanent"
                            };
                            yield Object(n.b)(e);
                        })(), t.setStatus(O.Hidden);
                    }), w(y(t), "showOverlay", function() {
                        var e = t.props.element;
                        Object(s.a)(e) ? (t.setStatus(O.Overlay), c(function*() {
                            var e = {
                                type: "permanent"
                            };
                            yield Object(n.b)(e);
                        })()) : t.setStatus(O.Hidden);
                    }), w(y(t), "dismissClick", function() {
                        t.setStatus(O.Hidden);
                    }), t.state = {
                        status: O.None
                    }, t;
                }
                return d(u, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        chrome.runtime.onMessage.addListener(function(t) {
                            "load" === t.action && c(function*() {
                                (yield Object(n.r)()) ? e.setStatus(O.Hidden) : e.showOverlay();
                            })();
                        });
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this, o = this.props, a = o.hasEquationToolbarOpened, n = o.element;
                        switch (this.state.status) {
                          case O.Hidden:
                            return null;

                          case O.Overlay:
                            return e.createElement(i.a, {
                                element: n,
                                onClose: function() {
                                    return t.dismissClick();
                                }
                            });

                          default:
                            return e.createElement(r.a, {
                                hasEquationToolbarOpened: a,
                                onDismiss: function() {
                                    return t.setStatus(O.Hidden);
                                },
                                onDontShowClick: function() {
                                    return t.setShowMessage();
                                }
                            });
                        }
                    }
                } ]), u;
            }();
        }).call(this, o(1));
    },
    651: function(e, t, o) {
        "use strict";
        (function(e) {
            var a = o(1), r = o(48), i = o(32), n = o(652), s = o(653), u = o(654), c = o(33);
            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(e, a.key, a);
                }
            }
            function d(e, t, o) {
                return t && l(e.prototype, t), o && l(e, o), e;
            }
            function m(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t);
            }
            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function g(e) {
                var t = b();
                return function() {
                    var o, a = v(e);
                    if (t) {
                        var r = v(this).constructor;
                        o = Reflect.construct(a, arguments, r);
                    } else o = a.apply(this, arguments);
                    return f(this, o);
                };
            }
            function f(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? y(e) : t;
            }
            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function b() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                    !0;
                } catch (e) {
                    return !1;
                }
            }
            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function w(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e;
            }
            var O = Object(r.defineMessages)({
                close: {
                    id: "apps-discovery.overlay.close",
                    defaultMessage: "Close"
                },
                containMath: {
                    id: "apps-discovery.overlay.contain",
                    defaultMessage: "This document contains Math"
                },
                edit: {
                    id: "apps-discovery.overlay.edit",
                    defaultMessage: "Edit in EquatIO"
                }
            }), q = function(e) {
                var t = Object(n.a)(e), o = t.x, a = t.y, r = t.width, i = t.height, s = document.querySelector("#docs-editor-container").getBoundingClientRect(), u = s.y, c = s.width, p = s.height, l = 10, d = i >= 0 ? a : a + i, m = i >= 0 ? a + i : a, h = r >= 0 ? c - o : c - o - r;
                return {
                    top: {
                        width: (r >= 0 ? o + r : o) + l,
                        height: d - l - u,
                        top: u
                    },
                    right: {
                        width: (r >= 0 ? c - o - r : c - o) - l,
                        height: m + l - u,
                        top: u
                    },
                    bottom: {
                        width: h + l,
                        height: p - m - l + u
                    },
                    left: {
                        width: c - h - l,
                        height: p - d + l + u
                    },
                    info: {
                        top: a - 50,
                        left: o - l
                    },
                    center: {
                        top: a - l,
                        left: o - l,
                        width: r + 2 * l,
                        height: i + 2 * l
                    }
                };
            }, E = function(t) {
                m(r, a["Component"]);
                var o = g(r);
                function r(e) {
                    var t;
                    p(this, r), w(y(t = o.call(this, e)), "resizeListener", function() {
                        var e = t.props.element, o = q(e);
                        t.setState({
                            containerStyles: o
                        });
                    });
                    var a = t.props.element;
                    return t.state = {
                        containerStyles: q(a)
                    }, "SPAN" === a.nodeName && a.classList.contains("typeset") || Object(u.a)(a), window.addEventListener("resize", t.resizeListener, {
                        passive: !0
                    }), t;
                }
                return d(r, [ {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.resizeListener);
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.state.containerStyles, o = this.props, a = o.onClose, r = o.intl;
                        return e.createElement("div", null, e.createElement("div", {
                            className: "equatio-gsuite-discover-overlay"
                        }, e.createElement(c.a, {
                            content: r.formatMessage(O.close)
                        }, e.createElement("button", {
                            className: "equatio-gsuite-discover-overlay-close equatio-modal-popup__close",
                            "aria-label": r.formatMessage(O.close),
                            onClick: function() {
                                return a();
                            },
                            style: {
                                border: "none"
                            }
                        }, e.createElement("svg", {
                            viewBox: "0 0 11.172 11.172",
                            className: "equatio-modal-popup__close__icon equatio-gsuite-discover-overlay-close__icon"
                        }, e.createElement("use", {
                            xlinkHref: "#equatio-svg-modal-close"
                        })))), e.createElement("div", {
                            className: "equatio-gsuite-discover-overlay-info",
                            style: t.info
                        }, e.createElement("svg", {
                            viewBox: "0 0 38 38",
                            className: "equatio-apps-discovery-overlay-title__warning"
                        }, e.createElement("use", {
                            xlinkHref: "#equatio-svg-discover-header-warning"
                        })), e.createElement("span", null, r.formatMessage(O.containMath))), e.createElement("div", {
                            className: "equatio-gsuite-discover-overlay-top",
                            style: t.top
                        }), e.createElement("div", {
                            className: "equatio-gsuite-discover-overlay-right",
                            style: t.right
                        }), e.createElement("div", {
                            className: "equatio-gsuite-discover-overlay-bottom",
                            style: t.bottom
                        }), e.createElement("div", {
                            className: "equatio-gsuite-discover-overlay-left",
                            style: t.left
                        }), e.createElement("div", {
                            className: "equatio-gsuite-discover-overlay-center",
                            style: t.center
                        }), e.createElement("div", {
                            className: "equatio-gsuite-discover-overlay-info",
                            style: {
                                bottom: "53px",
                                right: "325px"
                            }
                        }, e.createElement("span", null, r.formatMessage(O.edit)), e.createElement("svg", {
                            viewBox: "0 0 77.815 282.645",
                            className: "equatio-apps-discovery-overlay-pointer__icon"
                        }, e.createElement("use", {
                            xlinkHref: "#equatio-svg-discover-pointer"
                        }))), e.createElement("svg", {
                            viewBox: "0 0 1628.5 546",
                            className: "equatio-apps-discovery-overlay-title__logo"
                        }, e.createElement("use", {
                            xlinkHref: "#equatio-svg-logo-upgrade-overlay"
                        }))), e.createElement(s.a, null));
                    }
                } ]), r;
            }();
            t.a = Object(i.c)(E);
        }).call(this, o(1));
    },
    652: function(e, t, o) {
        "use strict";
        t.a = function(e) {
            return e.matches(".typeset") ? e.parentNode.getBoundingClientRect() : e.getBoundingClientRect();
        };
    },
    653: function(e, t, o) {
        "use strict";
        (function(e) {
            t.a = function() {
                return e.createElement("div", {
                    className: "equatio-placeholder-toolbar-wrapper"
                });
            };
        }).call(this, o(1));
    },
    654: function(e, t, o) {
        "use strict";
        t.a = function(e) {
            var t = new MouseEvent("mousedown", {
                view: window,
                bubbles: !0,
                cancelable: !0,
                clientX: e.getBoundingClientRect().left,
                clientY: e.getBoundingClientRect().top
            });
            e.dispatchEvent(t);
        };
    },
    655: function(e, t, o) {
        "use strict";
        t.a = function(e) {
            if (!e) return !1;
            var t = e.getBoundingClientRect(), o = t.x, a = t.y, r = t.width, i = t.height, n = document.querySelector("div.kix-appview-editor-container, #slides-view");
            if (!n) return !1;
            var s = n.getBoundingClientRect(), u = s.y, c = s.width, p = s.height;
            return a > u && a < u + p - 53 - i && o + r < c - 250;
        };
    },
    656: function(e, t, o) {
        "use strict";
        t.a = {
            locale: Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language || navigator.userLanguage
        };
    }
} ]);