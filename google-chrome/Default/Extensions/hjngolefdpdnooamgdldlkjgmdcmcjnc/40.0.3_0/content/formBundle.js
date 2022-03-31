!function(e) {
    function t(t) {
        for (var n, r, i = t[0], a = t[1], l = 0, s = []; l < i.length; l++) r = i[l], Object.prototype.hasOwnProperty.call(o, r) && o[r] && s.push(o[r][0]), 
        o[r] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (u && u(t); s.length; ) s.shift()();
    }
    var n = {}, o = {
        9: 0
    };
    function r(e) {
        return i.p + "" + e + ".9cd5a99f5fdb2d58d1eb.js";
    }
    function i(t) {
        if (n[t]) return n[t].exports;
        var o = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
    }
    i.e = function(e) {
        var t = [], n = function(e) {
            const t = r(e);
            chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", {
                action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
                scriptPath: t
            }, function() {
                chrome.runtime.lastError && console.error("Failed to load dependency", t);
                const n = o[e];
                0 !== n && (n && n[1](), o[e] = void 0);
            });
        }, a = function(e) {
            var t, n = document.getElementsByTagName("head")[0], a = document.createElement("script");
            a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = r(e), 
            0 !== a.src.indexOf(window.location.origin + "/") && (a.crossOrigin = "anonymous"), 
            t = function(t) {
                a.onerror = a.onload = null, clearTimeout(l);
                var n = o[e];
                if (0 !== n) {
                    if (n) {
                        var r = t && ("load" === t.type ? "missing" : t.type), i = t && t.target && t.target.src, s = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + i + ")");
                        s.type = r, s.request = i, n[1](s);
                    }
                    o[e] = void 0;
                }
            };
            var l = setTimeout(function() {
                t({
                    type: "timeout",
                    target: a
                });
            }, 12e4);
            a.onerror = a.onload = t, n.appendChild(a);
        }, l = o[e];
        if (0 !== l) if (l) t.push(l[2]); else {
            var s = new Promise(function(t, n) {
                l = o[e] = [ t, n ];
            });
            t.push(l[2] = s), "chrome" === window.equatioCoreChunkLoading ? n(e) : a(e);
        }
        return Promise.all(t);
    }, i.m = e, i.c = n, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function(t) {
            return e[t];
        }.bind(null, o));
        return n;
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return i.d(t, "a", t), t;
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", i.oe = function(e) {
        throw console.error(e), e;
    };
    var a = window.equatioChromeJsonp = window.equatioChromeJsonp || [], l = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var s = 0; s < a.length; s++) t(a[s]);
    var u = l;
    i(i.s = 338);
}({
    0: function(e, t, n) {
        "use strict";
        t.a = Object.freeze({
            InjectDocsRequirements: "inject_docs_requirements",
            InjectFormRequirements: "inject_form_requirements",
            EnsureLoggedIntoFirebase: "ensure_logged_into_firebase",
            GetLicense: "get_license",
            EnterProductCode: "enter_product_code",
            GetProfile: "get_profile",
            UpdateProfile: "update_profile",
            UpdateFavourites: "update_favourites",
            RemoveFavourite: "remove_favourites",
            OpenGoogleFormsPicker: "open_google_forms_picker",
            GoogleFormsPickerLoaded: "google_forms_picker_loaded",
            SetHasSeenFirstRun: "set_firebase_has_seen_first_run",
            SetProfileType: "set_firebase_profile_type",
            SetShowEquatioOnFirstRun: "set_show_equatio_on_first_run",
            GetShouldShowEquatioOnFirstRun: "get_should_show_equatio_on_first_run",
            RegisterCompanionAppTarget: "register_companion_app_target",
            UpdateCompanionAppTargetTitle: "update_companion_app_target_title",
            UpdateGoogleSheetEquations: "update_google_sheet_equations",
            SetHandwritingCount: "set_handwriting_count",
            GetHandwritingCount: "get_handwriting_count",
            ShowGoogleFormsReminder: "upgrade_google_forms_reminder",
            ShowHandwritingExceededReminder: "upgrade_handwriting_exceeded",
            ShowPredictionReminder: "upgrade_prediction",
            ShowRenewalReminder: "upgrade_renewal",
            ShowTrialExpiration: "upgrade_trial_expiration",
            ShowUpgradeReminder: "upgrade_reminder",
            ShowReviewReminder: "review_reminder",
            SendAnalyticsScreen: "send_analytics_screen",
            SendAnalyticsEvent: "send_analytics_event",
            StartScreenshotReader: "start_screenshot_reader",
            CaptureScreenshot: "capture_screenshot",
            ScanMathpixOcr: "scan_mathpix_ocr",
            UploadImageToProxy: "upload_image_proxy",
            DismissReviewReminder: "dismiss_review_reminder",
            InjectWebPageToolbar: "inject_web_page_toolbar",
            MathDiscovered: "math_discovered",
            InjectMathDiscoverability: "inject_math_discoverability",
            IsDiscoverabilityFirstTime: "isDiscoverabilityFirstTime",
            SetDiscoverabilityEnabled: "setDiscoverabilityEnabled",
            GetMathDiscoverability: "getMathDiscoverability",
            DismissGSuiteMathDiscover: "dismiss_gsuite_math_discover",
            HasGSuiteDiscoverOverlayShown: "has_gsuite_discover_overlay_shown",
            OpenMathspace: "open_mathspace",
            GetPlatformOs: "get_platform_os",
            GetIsInstalled: "is_installed",
            IsLockedForms: "is_locked_forms",
            GetSpeech: "getSpeech",
            GetCurrentDisabledFeatures: "get_current_disabled_features",
            InsertImageGoogleApi: "insert_image_google_api",
            GetMolecularFilter: "get_molecular_filter",
            ShowInfoPopup: "show_equatio_info_popup",
            OfficeAddToClipboard: "office_add_to_clipboard",
            ExtractLatexFromUrl: "extract_latex_from_url",
            OfficeCanUseApp: "office_can_use_app",
            SwitchAccount: "switch_account",
            GetDisplayEmail: "get_display_email",
            ChromeLogin: "chrome_login",
            GetXSRFToken: "get_xsrf_token",
            LoginToFirebase: "login_to_firebase",
            SetCanShowClipboardPopup: "set_can_show_clipboard_popup",
            GetCanShowClipboardPopup: "get_can_show_clipboard_popup",
            SpeechEngineSpeak: "speech_engine_speak",
            SpeechEngineStop: "speech_engine_stop",
            InjectHtmlEditorApi: "inject_html_editor_api",
            HtmlEditorApiAction: "send_html_editor_api_action"
        });
    },
    118: function(e, t) {
        e.exports = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMC41cHgiIGhlaWdodD0iMTAuNnB4IiB2aWV3Qm94PSIwIDAgMTAuNSAxMC42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMC41IDEwLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZGVmcz48L2RlZnM+PGc+PGc+PHJlY3QgeD0iNy44IiB5PSIwLjciIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIwLjYiIGhlaWdodD0iOS4xIj48L3JlY3Q+PGc+PHJlY3QgeD0iOC41IiB5PSIwLjEiIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIxLjkiIGhlaWdodD0iMC42Ij48L3JlY3Q+PHJlY3QgeD0iNS45IiB5PSIwLjEiIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIxLjkiIGhlaWdodD0iMC42Ij48L3JlY3Q+PC9nPjxnPjxyZWN0IHg9IjguNSIgeT0iOS44IiBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjAuNiI+PC9yZWN0PjxyZWN0IHg9IjUuOSIgeT0iOS44IiBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjAuNiI+PC9yZWN0PjwvZz48L2c+PGc+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTMuMSw1LjNjLTAuMSwwLTAuMiwwLTAuMy0wLjFMMC4yLDIuMyBDMC4xLDIuMiwwLjEsMiwwLjEsMS44czAuMi0wLjMsMC40LTAuM2g0LjJDNSwxLjYsNS4yLDEuOCw1LjIsMmMwLDAuMi0wLjIsMC40LTAuNCwwLjRIMS41bDEuOSwyLjFjMC4yLDAuMiwwLjEsMC40LDAsMC42IEMzLjMsNS4yLDMuMiw1LjMsMy4xLDUuM3oiPjwvcGF0aD48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNNC43LDguMUgwLjVDMC40LDguMSwwLjIsOCwwLjEsNy45IGMtMC4xLTAuMiwwLTAuMywwLjEtMC41bDIuNS0yLjhjMC4yLTAuMiwwLjQtMC4yLDAuNiwwYzAuMiwwLjIsMC4yLDAuNCwwLDAuNkwxLjUsNy4zaDMuM2MwLjIsMCwwLjQsMC4yLDAuNCwwLjRTNSw4LjEsNC43LDguMXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==";
    },
    119: function(e) {
        e.exports = JSON.parse("{\"version\":1,\"questionsRoot\":\"#SchemaEditor\",\"responsesRoot\":\"#ResponsesView\",\"imageButtons\":{\"en\":\"div[role='button'][aria-label='Add inline image'], div[role='button'][aria-label='Add image to option']\",\"es\":\"div[role='button'][aria-label='A\xf1adir una imagen insertada'], div[role='button'][aria-label='A\xf1adir una imagen a la opci\xf3n']\",\"fr\":\"div[role='button'][aria-label='Ajouter une image int\xe9gr\xe9e'], div[role='button'][aria-label='Ajouter une image \xe0 l\\\\'option']\",\"it\":\"div[role='button'][aria-label='Aggiungi immagine in linea'], div[role='button'][aria-label='Aggiungi immagine all\\\\'opzione']\",\"no\":\"div[role='button'][aria-label='Legg til et innebygd bilde'], div[role='button'][aria-label='Legg til et bilde for alternativet']\",\"da\":\"div[role='button'][aria-label='Tilf\xf8j indlejret billede'], div[role='button'][aria-label='F\xf8j billede til valgmulighed']\",\"sv\":\"div[role='button'][aria-label='L\xe4gg till infogad bild'], div[role='button'][aria-label='L\xe4gg till bild i alternativ']\",\"de\":\"div[role='button'][aria-label='Inline-Bild hinzuf\xfcgen'], div[role='button'][aria-label='Bild zur Option hinzuf\xfcgen']\",\"ru\":\"div[role='button'][aria-label='\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435'], div[role='button'][aria-label='\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435']\",\"pl\":\"div[role='button'][aria-label='Dodaj obraz w tre\u015bci'], div[role='button'][aria-label='Dodaj obraz do opcji']\",\"pt\":\"div[role='button'][aria-label='Adicionar imagem inline'], div[role='button'][aria-label='Adicionar imagem \xe0 op\xe7\xe3o']\",\"tr\":\"div[role='button'][aria-label='Sat\u0131r i\xe7i resim ekle'], div[role='button'][aria-label='Se\xe7ene\u011fe resim ekle']\",\"uk\":\"div[role='button'][aria-label='\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0435 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f'], div[role='button'][aria-label='\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u043e \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0443']\",\"nl\":\"div[role='button'][aria-label='Inline afbeelding toevoegen'], div[role='button'][aria-label='Afbeelding toevoegen aan optie']\",\"zh\":\"div[role='button'][aria-label='\u6dfb\u52a0\u5185\u5d4c\u56fe\u7247'], div[role='button'][aria-label='\u5c06\u56fe\u7247\u6dfb\u52a0\u5230\u9009\u9879']\"},\"imageButtonParentFilter\":{\"attribute\":\"data-action-id\",\"value\":\"freebird-add-image\"},\"fallbackImageCss\":{\"cssEle\":\"div[data-item-id] div[role='button'][aria-label][tabindex='0'] div[aria-hidden='true']\",\"cssTop\":\"-676px\",\"closestImgButton\":\"div[role='button'][aria-label]\",\"svgPath\":\"path[fill='#5F6368'][d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z']\"},\"answerKeyInput\":\"div[data-variant='assessment'] input[data-initial-value][badinput]\",\"answerKeyDisplay\":\"div > span:first-child\",\"responseInputAreas\":\"textarea[data-initial-value], input[type=text][data-initial-value]:not([role='combobox'])\"}");
    },
    140: function(e, t, n) {
        (e.exports = n(25)(void 0)).push([ e.i, ".tippy-tooltip[data-animation=fade][data-state=hidden] {\n  opacity: 0; }\n\n.tippy-iOS {\n  cursor: pointer !important;\n  -webkit-tap-highlight-color: transparent; }\n\n.tippy-popper {\n  pointer-events: none;\n  max-width: calc(100vw - 10px);\n  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition-property: transform; }\n\n.tippy-tooltip {\n  position: relative;\n  color: #fff;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 1.4;\n  background-color: #333;\n  transition-property: visibility,opacity,transform;\n  outline: 0; }\n\n.tippy-tooltip[data-placement^=top] > .tippy-arrow {\n  border-width: 8px 8px 0;\n  border-top-color: #333;\n  margin: 0 3px;\n  transform-origin: 50% 0;\n  bottom: -7px; }\n\n.tippy-tooltip[data-placement^=bottom] > .tippy-arrow {\n  border-width: 0 8px 8px;\n  border-bottom-color: #333;\n  margin: 0 3px;\n  transform-origin: 50% 7px;\n  top: -7px; }\n\n.tippy-tooltip[data-placement^=left] > .tippy-arrow {\n  border-width: 8px 0 8px 8px;\n  border-left-color: #333;\n  margin: 3px 0;\n  transform-origin: 0 50%;\n  right: -7px; }\n\n.tippy-tooltip[data-placement^=right] > .tippy-arrow {\n  border-width: 8px 8px 8px 0;\n  border-right-color: #333;\n  margin: 3px 0;\n  transform-origin: 7px 50%;\n  left: -7px; }\n\n.tippy-tooltip[data-interactive][data-state=visible] {\n  pointer-events: auto; }\n\n.tippy-tooltip[data-inertia][data-state=visible] {\n  transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11); }\n\n.tippy-arrow {\n  position: absolute;\n  border-color: transparent;\n  border-style: solid; }\n\n.tippy-content {\n  padding: 5px 9px; }\n\n.tippy-tooltip[data-animation=shift-away][data-placement^=top][data-state=hidden] {\n  transform: translateY(10px); }\n\n.tippy-tooltip[data-animation=shift-away][data-placement^=bottom][data-state=hidden] {\n  transform: translateY(-10px); }\n\n.tippy-tooltip[data-animation=shift-away][data-placement^=left][data-state=hidden] {\n  transform: translateX(10px); }\n\n.tippy-tooltip[data-animation=shift-away][data-placement^=right][data-state=hidden] {\n  transform: translateX(-10px); }\n\n.tippy-tooltip[data-animation=shift-away][data-state=hidden] {\n  opacity: 0; }\n\n/*\n * MathQuill v2.1.0, by Han, Jeanine, and Mary\n * http://mathquill.com | maintainers@mathquill.com\n *\n * This Source Code Form is subject to the terms of the\n * Mozilla Public License, v. 2.0. If a copy of the MPL\n * was not distributed with this file, You can obtain\n * one at http://mozilla.org/MPL/2.0/.\n */\n@font-face {\n  font-family: Symbola;\n  src: url(" + n(141) + ');\n  src: local("Symbola Regular"), local("Symbola"), url(' + n(142) + ') format("woff2"), url(' + n(143) + ') format("woff"), url(' + n(144) + ') format("truetype"), url(' + n(145) + "#Symbola) format(\"svg\"); }\n\n.mq-editable-field {\n  display: -moz-inline-box;\n  display: inline-block; }\n\n.mq-editable-field .mq-cursor {\n  border-left: 1px solid black;\n  margin-left: -1px;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  display: -moz-inline-box;\n  display: inline-block; }\n\n.mq-editable-field .mq-cursor.mq-blink {\n  visibility: hidden; }\n\n.mq-editable-field,\n.mq-math-mode .mq-editable-field {\n  border: 1px solid gray; }\n\n.mq-editable-field.mq-focused,\n.mq-math-mode .mq-editable-field.mq-focused {\n  -webkit-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  -moz-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  border-color: #709AC0;\n  border-radius: 1px; }\n\n.mq-math-mode .mq-editable-field {\n  margin: 1px; }\n\n.mq-editable-field .mq-latex-command-input {\n  color: inherit;\n  font-family: \"Courier New\", monospace;\n  border: 1px solid gray;\n  padding-right: 1px;\n  margin-right: 1px;\n  margin-left: 2px; }\n\n.mq-editable-field .mq-latex-command-input.mq-empty {\n  background: transparent; }\n\n.mq-editable-field .mq-latex-command-input.mq-hasCursor {\n  border-color: ActiveBorder; }\n\n.mq-editable-field.mq-empty:after,\n.mq-editable-field.mq-text-mode:after,\n.mq-math-mode .mq-empty:after {\n  visibility: hidden;\n  content: 'c'; }\n\n.mq-editable-field .mq-cursor:only-child:after,\n.mq-editable-field .mq-textarea + .mq-cursor:last-child:after {\n  visibility: hidden;\n  content: 'c'; }\n\n.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {\n  content: ''; }\n\n.mq-editable-field.mq-text-mode {\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.mq-root-block,\n.mq-math-mode .mq-root-block {\n  display: -moz-inline-box;\n  display: inline-block;\n  width: 100%;\n  padding: 2px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle; }\n\n.mq-math-mode {\n  font-variant: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 115%;\n  line-height: 1;\n  display: -moz-inline-box;\n  display: inline-block; }\n\n.mq-math-mode .mq-non-leaf,\n.mq-math-mode .mq-scaled {\n  display: -moz-inline-box;\n  display: inline-block; }\n\n.mq-math-mode var,\n.mq-math-mode .mq-text-mode,\n.mq-math-mode .mq-nonSymbola {\n  font-family: \"Times New Roman\", Symbola, serif;\n  line-height: .9; }\n\n.mq-math-mode * {\n  font-size: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  border-color: black;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box; }\n\n.mq-math-mode .mq-empty {\n  background: #ccc; }\n\n.mq-math-mode .mq-empty.mq-root-block {\n  background: transparent; }\n\n.mq-math-mode.mq-empty {\n  background: transparent; }\n\n.mq-math-mode .mq-text-mode {\n  display: inline-block;\n  white-space: pre; }\n\n.mq-math-mode .mq-text-mode.mq-hasCursor {\n  box-shadow: inset darkgray 0 .1em .2em;\n  padding: 0 .1em;\n  margin: 0 -0.1em;\n  min-width: 1ex; }\n\n.mq-math-mode .mq-font {\n  font: 1em \"Times New Roman\", Symbola, serif; }\n\n.mq-math-mode .mq-font * {\n  font-family: inherit;\n  font-style: inherit; }\n\n.mq-math-mode b,\n.mq-math-mode b.mq-font {\n  font-weight: bolder; }\n\n.mq-math-mode var,\n.mq-math-mode i,\n.mq-math-mode i.mq-font {\n  font-style: italic; }\n\n.mq-math-mode var.mq-f {\n  margin-right: 0.2em;\n  margin-left: 0.1em; }\n\n.mq-math-mode .mq-roman var.mq-f {\n  margin: 0; }\n\n.mq-math-mode big {\n  font-size: 200%; }\n\n.mq-math-mode .mq-int > big {\n  display: inline-block;\n  -webkit-transform: scaleX(0.7);\n  -moz-transform: scaleX(0.7);\n  -ms-transform: scaleX(0.7);\n  -o-transform: scaleX(0.7);\n  transform: scaleX(0.7);\n  vertical-align: -0.16em; }\n\n.mq-math-mode .mq-int > .mq-supsub {\n  font-size: 80%;\n  vertical-align: -1.1em;\n  padding-right: .2em; }\n\n.mq-math-mode .mq-int > .mq-supsub > .mq-sup > .mq-sup-inner {\n  vertical-align: 1.3em; }\n\n.mq-math-mode .mq-int > .mq-supsub > .mq-sub {\n  margin-left: -0.35em; }\n\n.mq-math-mode .mq-roman {\n  font-style: normal; }\n\n.mq-math-mode .mq-sans-serif {\n  font-family: sans-serif, Symbola, serif; }\n\n.mq-math-mode .mq-monospace {\n  font-family: monospace, Symbola, serif; }\n\n.mq-math-mode .mq-overline {\n  border-top: 1px solid black;\n  margin-top: 1px; }\n\n.mq-math-mode .mq-underline {\n  border-bottom: 1px solid black;\n  margin-bottom: 1px; }\n\n.mq-math-mode .mq-binary-operator {\n  padding: 0 0.2em;\n  display: -moz-inline-box;\n  display: inline-block; }\n\n.mq-math-mode .mq-supsub {\n  text-align: left;\n  font-size: 90%;\n  vertical-align: -0.5em; }\n\n.mq-math-mode .mq-supsub.mq-sup-only {\n  vertical-align: .5em; }\n\n.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {\n  display: inline-block;\n  vertical-align: text-bottom; }\n\n.mq-math-mode .mq-supsub .mq-sup {\n  display: block; }\n\n.mq-math-mode .mq-supsub .mq-sub {\n  display: block;\n  float: left; }\n\n.mq-math-mode .mq-supsub .mq-binary-operator {\n  padding: 0 .1em; }\n\n.mq-math-mode .mq-supsub .mq-fraction {\n  font-size: 70%; }\n\n.mq-math-mode sup.mq-nthroot {\n  font-size: 80%;\n  vertical-align: 0.8em;\n  margin-right: -0.6em;\n  margin-left: .2em;\n  min-width: .5em; }\n\n.mq-math-mode .mq-paren {\n  padding: 0 .1em;\n  vertical-align: top;\n  -webkit-transform-origin: center .06em;\n  -moz-transform-origin: center .06em;\n  -ms-transform-origin: center .06em;\n  -o-transform-origin: center .06em;\n  transform-origin: center .06em; }\n\n.mq-math-mode .mq-paren.mq-ghost {\n  color: silver; }\n\n.mq-math-mode .mq-paren + span {\n  margin-top: .1em;\n  margin-bottom: .1em; }\n\n.mq-math-mode .mq-array {\n  vertical-align: middle;\n  text-align: center; }\n\n.mq-math-mode .mq-array > span {\n  display: block; }\n\n.mq-math-mode .mq-operator-name {\n  font-family: Symbola, \"Times New Roman\", serif;\n  line-height: .9;\n  font-style: normal; }\n\n.mq-math-mode var.mq-operator-name.mq-first {\n  padding-left: .2em; }\n\n.mq-math-mode var.mq-operator-name.mq-last,\n.mq-math-mode .mq-supsub.mq-after-operator-name {\n  padding-right: .2em; }\n\n.mq-math-mode .mq-fraction {\n  font-size: 90%;\n  text-align: center;\n  vertical-align: -0.4em;\n  padding: 0 .2em; }\n\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link {\n  display: -moz-groupbox; }\n\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link,\n.mq-math-mode x:default {\n  display: inline-block; }\n\n.mq-math-mode .mq-numerator,\n.mq-math-mode .mq-denominator,\n.mq-math-mode .mq-dot-recurring {\n  display: block; }\n\n.mq-math-mode .mq-numerator {\n  padding: 0 0.1em; }\n\n.mq-math-mode .mq-denominator {\n  border-top: 1px solid;\n  float: right;\n  width: 100%;\n  padding: 0.1em; }\n\n.mq-math-mode .mq-dot-recurring {\n  text-align: center;\n  height: 0.3em; }\n\n.mq-math-mode .mq-sqrt-prefix {\n  padding-top: 0;\n  position: relative;\n  top: 0.1em;\n  vertical-align: top;\n  -webkit-transform-origin: top;\n  -moz-transform-origin: top;\n  -ms-transform-origin: top;\n  -o-transform-origin: top;\n  transform-origin: top; }\n\n.mq-math-mode .mq-sqrt-stem {\n  border-top: 1px solid;\n  margin-top: 1px;\n  padding-left: .15em;\n  padding-right: .2em;\n  margin-right: .1em;\n  padding-top: 1px; }\n\n.mq-math-mode .mq-diacritic-above {\n  display: block;\n  text-align: center;\n  line-height: .4em; }\n\n.mq-math-mode .mq-diacritic-stem {\n  display: block;\n  text-align: center; }\n\n.mq-math-mode .mq-hat-prefix {\n  display: block;\n  text-align: center;\n  line-height: .95em;\n  margin-bottom: -0.7em;\n  transform: scaleX(1.5);\n  -moz-transform: scaleX(1.5);\n  -o-transform: scaleX(1.5);\n  -webkit-transform: scaleX(1.5); }\n\n.mq-math-mode .mq-hat-stem {\n  display: block; }\n\n.mq-math-mode .mq-large-operator {\n  vertical-align: -0.2em;\n  padding: .2em;\n  text-align: center; }\n\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator big,\n.mq-math-mode .mq-large-operator .mq-to {\n  display: block; }\n\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator .mq-to {\n  font-size: 80%; }\n\n.mq-math-mode .mq-large-operator .mq-from {\n  float: right;\n  /* take out of normal flow to manipulate baseline */\n  width: 100%; }\n\n.mq-math-mode,\n.mq-math-mode .mq-editable-field {\n  cursor: text;\n  font-family: Symbola, \"Times New Roman\", serif; }\n\n.mq-math-mode .mq-overarc {\n  border-top: 1px solid black;\n  -webkit-border-top-right-radius: 50% .3em;\n  -moz-border-radius-topright: 50% .3em;\n  border-top-right-radius: 50% .3em;\n  -webkit-border-top-left-radius: 50% .3em;\n  -moz-border-radius-topleft: 50% .3em;\n  border-top-left-radius: 50% .3em;\n  margin-top: 1px;\n  padding-top: 0.15em; }\n\n.mq-math-mode .mq-cancel {\n  background: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 10 10'> <path d='M 10 0 L 0 10' fill='none' stroke='black' stroke-width='1' /></svg>\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100% 100%, auto; }\n\n.mq-math-mode .mq-longdiv {\n  border-top: 1px solid black;\n  padding: 3px 0 0 3px; }\n\n.mq-math-mode .mq-longdiv:before {\n  content: ')';\n  padding-bottom: 2px;\n  display: inline-block;\n  margin: -4px 2px 0 -3px;\n  position: relative;\n  top: 0;\n  -webkit-transform: scaleY(1.3);\n  -ms-transform: scaleY(1.3);\n  transform: scaleY(1.3); }\n\n.mq-math-mode .mq-stackrel {\n  display: -webkit-inline-box;\n  display: -moz-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  box-orient: vertical;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  box-direction: vertical;\n  -ms-flex-direction: column;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  vertical-align: middle; }\n\n.mq-math-mode .mq-overarrow {\n  min-width: .5em;\n  border-top: 1px solid black;\n  margin-top: 1px;\n  padding-top: 0.2em;\n  text-align: center; }\n\n.mq-math-mode .mq-overarrow:before {\n  display: block;\n  position: relative;\n  top: -0.34em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  text-align: right; }\n\n.mq-math-mode .mq-overarrow.mq-arrow-left:before {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\"; }\n\n.mq-math-mode .mq-overarrow.mq-arrow-both {\n  vertical-align: text-bottom; }\n\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty {\n  min-height: 1.23em; }\n\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty:after {\n  top: -0.34em; }\n\n.mq-math-mode .mq-overarrow.mq-arrow-both:before {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\"; }\n\n.mq-math-mode .mq-overarrow.mq-arrow-both:after {\n  display: block;\n  position: relative;\n  top: -2.3em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  visibility: visible;\n  text-align: right; }\n\n.mq-math-mode .mq-tabular {\n  vertical-align: middle;\n  margin-left: 0.1em;\n  margin-right: 0.1em;\n  /* In LaTeX environments, there is no border spacing\n     * so the borders join up.\n     */ }\n\n.mq-math-mode .mq-tabular table tbody td.mq-array-align-l {\n  text-align: left; }\n\n.mq-math-mode .mq-tabular table tbody td.mq-array-align-c {\n  text-align: center; }\n\n.mq-math-mode .mq-tabular table tbody td.mq-array-align-r {\n  text-align: right; }\n\n.mq-math-mode .mq-tabular table tbody td.mq-array-border-l {\n  border-left: 1px solid #000; }\n\n.mq-math-mode .mq-tabular table tbody td.mq-array-border-r {\n  border-right: 1px solid #000; }\n\n.mq-math-mode .mq-tabular.mq-array-table table {\n  border-spacing: 0;\n  border-collapse: collapse;\n  /* In place of this, we add some more padding to the\n         * cells to give more space */ }\n\n.mq-math-mode .mq-tabular.mq-array-table table td {\n  padding: 0.3em 0.5em; }\n\n.mq-math-mode .mq-tabular table {\n  width: auto;\n  border-bottom: none;\n  border-spacing: 3px;\n  border-collapse: separate; }\n\n.mq-math-mode .mq-tabular table.mq-rows-1 {\n  /* better alignment when there's just one row */\n  vertical-align: middle;\n  margin-bottom: 1px; }\n\n.mq-math-mode .mq-tabular table.mq-align td:nth-child(odd) {\n  text-align: right; }\n\n.mq-math-mode .mq-tabular table.mq-align td:nth-child(even) {\n  text-align: left;\n  min-width: 50px; }\n\n.mq-math-mode .mq-tabular td {\n  border: none;\n  width: auto;\n  /* defensive resets */\n  padding: 0.1em 0.3em;\n  vertical-align: baseline; }\n\n.mq-math-mode .mq-tabular.mq-align td:nth-child(odd) {\n  text-align: right; }\n\n.mq-math-mode .mq-tabular.mq-align td:nth-child(even) {\n  text-align: left;\n  min-width: 50px; }\n\n.mq-math-mode .mq-selection,\n.mq-editable-field .mq-selection,\n.mq-math-mode .mq-selection .mq-non-leaf,\n.mq-editable-field .mq-selection .mq-non-leaf,\n.mq-math-mode .mq-selection .mq-scaled,\n.mq-editable-field .mq-selection .mq-scaled {\n  background: #B4D5FE !important;\n  background: Highlight !important;\n  color: HighlightText;\n  border-color: HighlightText; }\n\n.mq-math-mode .mq-selection .mq-matrixed,\n.mq-editable-field .mq-selection .mq-matrixed {\n  background: #39F !important; }\n\n.mq-math-mode .mq-selection .mq-matrixed-container,\n.mq-editable-field .mq-selection .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important; }\n\n.mq-math-mode .mq-selection.mq-blur,\n.mq-editable-field .mq-selection.mq-blur,\n.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,\n.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,\n.mq-math-mode .mq-selection.mq-blur .mq-scaled,\n.mq-editable-field .mq-selection.mq-blur .mq-scaled,\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed {\n  background: #D4D4D4 !important;\n  color: black;\n  border-color: black; }\n\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important; }\n\n.mq-editable-field .mq-textarea,\n.mq-math-mode .mq-textarea {\n  position: relative;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text; }\n\n.mq-editable-field .mq-textarea *,\n.mq-math-mode .mq-textarea *,\n.mq-editable-field .mq-selectable,\n.mq-math-mode .mq-selectable {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n  position: absolute;\n  clip: rect(1em 1em 1em 1em);\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  resize: none;\n  width: 1px;\n  height: 1px;\n  box-sizing: content-box; }\n\n.mq-math-mode .mq-matrixed {\n  background: white;\n  display: -moz-inline-box;\n  display: inline-block; }\n\n.mq-math-mode .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='white');\n  margin-top: -0.1em; }\n\n.react-resizable {\n  position: relative; }\n\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+\");\n  background-position: bottom right;\n  padding: 0 3px 3px 0; }\n\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg); }\n\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize; }\n\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg); }\n\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg); }\n\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize; }\n\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg); }\n\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg); }\n\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize; }\n\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg); }\n\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg); }\n\n.equatio-action-button-wrapper {\n  margin: 0 5px; }\n\n.equatio-graph-freemium-text {\n  margin-top: -20px; }\n\n.equatio-graph-freemium-text ul {\n  font-weight: 600;\n  display: inline-block; }\n\n.equatio-mathjax-display a {\n  pointer-events: visibleFill; }\n\n#popup-menu-root {\n  position: fixed;\n  left: 0;\n  bottom: 54px;\n  right: 0; }\n\n.equatio-flyout-menu {\n  position: fixed;\n  bottom: 54px;\n  min-width: 200px; }\n\n.equatio-settings-fieldset[disabled] {\n  -webkit-filter: grayscale(1.5) brightness(140%); }\n\n.equatio-modal-popup-tooltip__close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 22px;\n  height: 25px;\n  padding: 0;\n  margin: 0;\n  display: block; }\n\n.equatio-modal-popup-tooltip__close > button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px; }\n\n.equatio-mathspace-floating-window {\n  position: absolute;\n  margin: 55px -20px -65px 20px;\n  width: 260px;\n  max-height: calc(100vh - 120px);\n  overflow-y: auto; }\n\n.equatio-mathspace-floating-window--hidden, .equatio-context-container--hidden {\n  display: none; }\n\n.equatio-context-container-handle-container {\n  width: 100%; }\n\n.react-draggable-dragging {\n  opacity: 0.6; }\n\n.equatio-mathspace-floating-window-premium {\n  height: 24px;\n  float: right;\n  margin-top: -21px; }\n\n.equatio-mathspace-floating-window-premium-icon {\n  height: 18px;\n  width: 18px; }\n\n.equatio-mathspace-floating-header-toggle {\n  text-indent: -9999px;\n  height: 10px;\n  top: -14px;\n  position: relative;\n  margin-bottom: -10px;\n  float: right;\n  width: 10px; }\n\n.equatio-accessibility-loading-spinner {\n  height: 40%;\n  margin: 0 auto;\n  padding: 20px;\n  background-size: 30px; }\n\n.equatio-mathspace-floating-container {\n  display: block;\n  grid-template-columns: 0;\n  grid-column-gap: 0; }\n\n.equatio-mathspace-floating-group {\n  max-height: 1000px;\n  opacity: 1;\n  transition: max-height 1s ease-in-out, opacity 2.5s ease-in-out; }\n\n.equatio-mathspace-floating-group--collapsed {\n  max-height: 0;\n  opacity: 0;\n  overflow: hidden;\n  transition: max-height 1s cubic-bezier(0, 1, 0, 1), opacity 1.5s cubic-bezier(0, 1, 0, 1);\n  padding: 0; }\n\n.equatio-settings-fieldset__list__item {\n  padding: 3px 0; }\n\n.equatio-context-math-symbol {\n  font-family: \"Times New Roman\", Arial, sans-serif;\n  font-weight: 800; }\n\n.equatio-settings-loading-spinner {\n  height: 100%;\n  margin: 0 auto; }\n\n.equatio-settings-profile {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-settings-profile-image {\n  height: 52px;\n  max-width: 52px;\n  border-radius: 50%;\n  border: 4px solid #00B7FF; }\n\n.equatio-settings-profile-detail {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  margin: 0 10px; }\n\n.equatio-settings-profile-detail-name {\n  font-size: 1.2em; }\n\n.equatio-toolbar-option-toggle-list {\n  max-height: 285px;\n  overflow-y: auto; }\n\n.equatio-toolbar-option-toggle-item__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: #494949;\n  background: #F2F2F2; }\n\n.equatio-toolbar-option-toggle-item__label {\n  display: flex;\n  align-items: center; }\n\n.equatio-toolbar-option-toggle-item__text {\n  margin-left: 10px; }\n\n.equatio-toolbar-feature-toggle-image {\n  background: #F2F2F2;\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.equatio-palette-editor-popup-list-item-button__text::first-letter, .equatio-prediction-button__text::first-letter {\n  text-transform: capitalize; }\n", "" ]);
    },
    141: function(e, t, n) {
        e.exports = n.p + "assets/Symbola.eot";
    },
    142: function(e, t, n) {
        e.exports = n.p + "assets/Symbola.woff2";
    },
    143: function(e, t, n) {
        e.exports = n.p + "assets/Symbola.woff";
    },
    144: function(e, t, n) {
        e.exports = n.p + "assets/Symbola.ttf";
    },
    145: function(e, t, n) {
        e.exports = n.p + "assets/Symbola.svg";
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "y", function() {
            return c;
        }), n.d(t, "s", function() {
            return d;
        }), n.d(t, "d", function() {
            return m;
        }), n.d(t, "p", function() {
            return p;
        }), n.d(t, "j", function() {
            return f;
        }), n.d(t, "n", function() {
            return h;
        }), n.d(t, "cb", function() {
            return b;
        }), n.d(t, "ab", function() {
            return g;
        }), n.d(t, "G", function() {
            return y;
        }), n.d(t, "e", function() {
            return v;
        }), n.d(t, "D", function() {
            return w;
        }), n.d(t, "q", function() {
            return x;
        }), n.d(t, "O", function() {
            return q;
        }), n.d(t, "P", function() {
            return L;
        }), n.d(t, "o", function() {
            return M;
        }), n.d(t, "F", function() {
            return k;
        }), n.d(t, "i", function() {
            return j;
        }), n.d(t, "N", function() {
            return C;
        }), n.d(t, "bb", function() {
            return S;
        }), n.d(t, "Q", function() {
            return I;
        }), n.d(t, "S", function() {
            return E;
        }), n.d(t, "T", function() {
            return A;
        }), n.d(t, "V", function() {
            return N;
        }), n.d(t, "W", function() {
            return T;
        }), n.d(t, "U", function() {
            return _;
        }), n.d(t, "J", function() {
            return D;
        }), n.d(t, "I", function() {
            return R;
        }), n.d(t, "a", function() {
            return z;
        }), n.d(t, "H", function() {
            return P;
        }), n.d(t, "db", function() {
            return U;
        }), n.d(t, "c", function() {
            return O;
        }), n.d(t, "E", function() {
            return G;
        }), n.d(t, "u", function() {
            return Z;
        }), n.d(t, "A", function() {
            return W;
        }), n.d(t, "w", function() {
            return F;
        }), n.d(t, "M", function() {
            return H;
        }), n.d(t, "k", function() {
            return J;
        }), n.d(t, "b", function() {
            return B;
        }), n.d(t, "r", function() {
            return Q;
        }), n.d(t, "m", function() {
            return X;
        }), n.d(t, "x", function() {
            return Y;
        }), n.d(t, "h", function() {
            return V;
        }), n.d(t, "v", function() {
            return K;
        }), n.d(t, "l", function() {
            return $;
        }), n.d(t, "R", function() {
            return ee;
        }), n.d(t, "B", function() {
            return te;
        }), n.d(t, "f", function() {
            return ne;
        }), n.d(t, "C", function() {
            return oe;
        }), n.d(t, "Z", function() {
            return re;
        }), n.d(t, "z", function() {
            return ie;
        }), n.d(t, "L", function() {
            return ae;
        }), n.d(t, "g", function() {
            return le;
        }), n.d(t, "X", function() {
            return se;
        }), n.d(t, "Y", function() {
            return ue;
        }), n.d(t, "t", function() {
            return ce;
        }), n.d(t, "K", function() {
            return de;
        });
        var o = n(0);
        function r(e, t, n, o, r, i, a) {
            try {
                var l = e[i](a), s = l.value;
            } catch (e) {
                return void n(e);
            }
            l.done ? t(s) : Promise.resolve(s).then(o, r);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    var a = e.apply(t, n);
                    function l(e) {
                        r(a, o, i, l, s, "next", e);
                    }
                    function s(e) {
                        r(a, o, i, l, s, "throw", e);
                    }
                    l(void 0);
                });
            };
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) {
                    s(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var u = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(function(n, o) {
                chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", l({
                    action: e
                }, t), function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.success, i = t.failure;
                    return chrome.runtime.lastError ? (console.error("Action failed:", e, chrome.runtime.lastError.message), 
                    o(chrome.runtime.lastError)) : i ? (console.error("Action failed:", e, i), o(i)) : n(r);
                });
            });
        }, c = function() {
            return u("load");
        }, d = function() {
            return u(o.a.InjectDocsRequirements);
        }, m = function() {
            return u(o.a.EnsureLoggedIntoFirebase);
        }, p = function(e, t) {
            return u(o.a.GetSpeech, {
                mathML: e,
                settings: t
            });
        }, f = function() {
            return u(o.a.GetLicense);
        }, h = function() {
            return u(o.a.GetProfile);
        }, b = function(e, t, n) {
            return u(o.a.UpdateProfile, {
                options: e,
                profile: t,
                customOptions: n
            });
        }, g = function(e) {
            return u(o.a.UpdateFavourites, {
                items: e
            });
        }, y = function(e) {
            return u(o.a.RemoveFavourite, {
                item: e
            });
        }, v = function(e) {
            return u(o.a.EnterProductCode, {
                code: e
            });
        }, w = function(e, t) {
            return u(o.a.OpenGoogleFormsPicker, {
                url: e,
                picker: t
            });
        }, x = function(e) {
            return u(o.a.GoogleFormsPickerLoaded, {
                location: e
            });
        }, q = function(e) {
            return u(o.a.SetProfileType, {
                type: e
            });
        }, L = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return u(o.a.SetShowEquatioOnFirstRun, {
                value: e
            });
        }, M = function() {
            return u(o.a.GetShouldShowEquatioOnFirstRun);
        }, k = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return u(o.a.RegisterCompanionAppTarget, {
                platform: e,
                hostname: t
            });
        }, j = function() {
            return u(o.a.GetHandwritingCount);
        }, C = function(e) {
            return u(o.a.SetHandwritingCount, {
                count: e
            });
        }, S = function(e) {
            return u(o.a.UpdateGoogleSheetEquations, {
                spreadsheetId: e
            });
        }, I = function() {
            return u(o.a.ShowHandwritingExceededReminder);
        }, E = function() {
            return u(o.a.ShowPredictionReminder);
        }, A = function() {
            return u(o.a.ShowRenewalReminder);
        }, N = function() {
            return u(o.a.ShowTrialExpiration);
        }, T = function() {
            return u(o.a.ShowUpgradeReminder);
        }, _ = function() {
            return u(o.a.ShowReviewReminder);
        }, D = function(e) {
            return u(o.a.SendAnalyticsScreen, {
                screenName: e
            });
        }, R = function(e) {
            return u(o.a.SendAnalyticsEvent, {
                category: e
            });
        }, z = function() {
            return u(o.a.CaptureScreenshot);
        }, P = function(e, t, n, r, i) {
            return u(o.a.ScanMathpixOcr, {
                base64: e,
                x: t,
                y: n,
                width: r,
                height: i
            });
        }, U = function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return u(o.a.UploadImageToProxy, {
                url: e,
                base64: t,
                isPermanent: n
            });
        }, O = function() {
            return u(o.a.DismissReviewReminder);
        }, G = function(e) {
            return u(o.a.OpenMathspace, {
                platformIntegrationId: e
            });
        }, Z = function() {
            return u(o.a.InjectWebPageToolbar);
        }, W = function(e) {
            return u(o.a.MathDiscovered, {
                value: e
            });
        }, F = function() {
            return u(o.a.IsDiscoverabilityFirstTime);
        }, H = function(e) {
            return u(o.a.SetDiscoverabilityEnabled, {
                value: e
            });
        }, J = function() {
            return u(o.a.GetMathDiscoverability);
        }, B = function(e) {
            return u(o.a.DismissGSuiteMathDiscover, {
                options: e
            });
        }, Q = function() {
            return u(o.a.HasGSuiteDiscoverOverlayShown);
        }, X = function() {
            return u(o.a.GetPlatformOs);
        }, Y = function() {
            return u(o.a.IsLockedForms);
        }, V = function() {
            return u(o.a.GetCurrentDisabledFeatures);
        }, K = function(e, t, n, r) {
            return u(o.a.InsertImageGoogleApi, {
                url: e,
                width: t,
                height: n,
                additionalOptions: r
            });
        }, $ = function() {
            return u(o.a.GetMolecularFilter);
        }, ee = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return u(o.a.ShowInfoPopup, {
                popupType: e,
                options: t
            });
        }, te = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return u(o.a.OfficeAddToClipboard, {
                content: e,
                isText: t
            });
        }, ne = function(e) {
            return u(o.a.ExtractLatexFromUrl, {
                url: e
            });
        }, oe = function(e) {
            return u(o.a.OfficeCanUseApp, {
                appName: e
            });
        }, re = function() {
            var e = i(function*() {
                return u(o.a.SwitchAccount);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), ie = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return u(o.a.LoginToFirebase, {
                tabId: e
            });
        }, ae = function(e, t) {
            return u(o.a.SetCanShowClipboardPopup, {
                value: e,
                copyBtn: t
            });
        }, le = function(e) {
            return u(o.a.GetCanShowClipboardPopup, {
                copyBtn: e
            });
        }, se = function(e) {
            return u(o.a.SpeechEngineSpeak, {
                text: e
            });
        }, ue = function() {
            return u(o.a.SpeechEngineStop);
        }, ce = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return u(o.a.InjectHtmlEditorApi, {
                fromToolbar: e
            });
        }, de = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return u(o.a.HtmlEditorApiAction, {
                command: e,
                value: t,
                fromEditor: n,
                targetFrame: r
            });
        };
    },
    245: function(e, t, n) {
        /*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
        var o;
        o = function() {
            return function(e) {
                var t = {};
                function n(o) {
                    if (t[o]) return t[o].exports;
                    var r = t[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = e, n.c = t, n.d = function(e, t, o) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function(t) {
                        return e[t];
                    }.bind(null, r));
                    return o;
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default;
                    } : function() {
                        return e;
                    };
                    return n.d(t, "a", t), t;
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }, n.p = "", n(n.s = 6);
            }([ function(e, t) {
                function n(e) {
                    var t;
                    if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                        var n = e.hasAttribute("readonly");
                        n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), 
                        n || e.removeAttribute("readonly"), t = e.value;
                    } else {
                        e.hasAttribute("contenteditable") && e.focus();
                        var o = window.getSelection(), r = document.createRange();
                        r.selectNodeContents(e), o.removeAllRanges(), o.addRange(r), t = o.toString();
                    }
                    return t;
                }
                e.exports = n;
            }, function(e, t) {
                function n() {}
                n.prototype = {
                    on: function(e, t, n) {
                        var o = this.e || (this.e = {});
                        return (o[e] || (o[e] = [])).push({
                            fn: t,
                            ctx: n
                        }), this;
                    },
                    once: function(e, t, n) {
                        var o = this;
                        function r() {
                            o.off(e, r), t.apply(n, arguments);
                        }
                        return r._ = t, this.on(e, r, n);
                    },
                    emit: function(e) {
                        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, t);
                        return this;
                    },
                    off: function(e, t) {
                        var n = this.e || (this.e = {}), o = n[e], r = [];
                        if (o && t) for (var i = 0, a = o.length; i < a; i++) o[i].fn !== t && o[i].fn._ !== t && r.push(o[i]);
                        return r.length ? n[e] = r : delete n[e], this;
                    }
                }, e.exports = n, e.exports.TinyEmitter = n;
            }, function(e, t, n) {
                var o = n(3), r = n(4);
                function i(e, t, n) {
                    if (!e && !t && !n) throw new Error("Missing required arguments");
                    if (!o.string(t)) throw new TypeError("Second argument must be a String");
                    if (!o.fn(n)) throw new TypeError("Third argument must be a Function");
                    if (o.node(e)) return a(e, t, n);
                    if (o.nodeList(e)) return l(e, t, n);
                    if (o.string(e)) return s(e, t, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                }
                function a(e, t, n) {
                    return e.addEventListener(t, n), {
                        destroy: function() {
                            e.removeEventListener(t, n);
                        }
                    };
                }
                function l(e, t, n) {
                    return Array.prototype.forEach.call(e, function(e) {
                        e.addEventListener(t, n);
                    }), {
                        destroy: function() {
                            Array.prototype.forEach.call(e, function(e) {
                                e.removeEventListener(t, n);
                            });
                        }
                    };
                }
                function s(e, t, n) {
                    return r(document.body, e, t, n);
                }
                e.exports = i;
            }, function(e, t) {
                t.node = function(e) {
                    return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
                }, t.nodeList = function(e) {
                    var n = Object.prototype.toString.call(e);
                    return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]));
                }, t.string = function(e) {
                    return "string" == typeof e || e instanceof String;
                }, t.fn = function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e);
                };
            }, function(e, t, n) {
                var o = n(5);
                function r(e, t, n, o, r) {
                    var i = a.apply(this, arguments);
                    return e.addEventListener(n, i, r), {
                        destroy: function() {
                            e.removeEventListener(n, i, r);
                        }
                    };
                }
                function i(e, t, n, o, i) {
                    return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), 
                    Array.prototype.map.call(e, function(e) {
                        return r(e, t, n, o, i);
                    }));
                }
                function a(e, t, n, r) {
                    return function(n) {
                        n.delegateTarget = o(n.target, t), n.delegateTarget && r.call(e, n);
                    };
                }
                e.exports = i;
            }, function(e, t) {
                var n = 9;
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var o = Element.prototype;
                    o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector;
                }
                function r(e, t) {
                    for (;e && e.nodeType !== n; ) {
                        if ("function" == typeof e.matches && e.matches(t)) return e;
                        e = e.parentNode;
                    }
                }
                e.exports = r;
            }, function(e, t, n) {
                "use strict";
                n.r(t);
                var o = n(0), r = n.n(o), i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                            Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                }();
                function l(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                var s = function() {
                    function e(t) {
                        l(this, e), this.resolveOptions(t), this.initSelection();
                    }
                    return a(e, [ {
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, 
                            this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "";
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget();
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return e.removeFake();
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, 
                            this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", 
                            this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", 
                            this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), 
                            this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = r()(this.fakeElem), 
                            this.copyText();
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), 
                            this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), 
                            this.fakeElem = null);
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = r()(this.target), this.copyText();
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action);
                            } catch (t) {
                                e = !1;
                            }
                            this.handleResult(e);
                        }
                    }, {
                        key: "handleResult",
                        value: function(e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            });
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake();
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        },
                        get: function() {
                            return this._action;
                        }
                    }, {
                        key: "target",
                        set: function(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e;
                            }
                        },
                        get: function() {
                            return this._target;
                        }
                    } ]), e;
                }(), u = n(1), c = n.n(u), d = n(2), m = n.n(d), p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, f = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                            Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                }();
                function h(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                function b(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t;
                }
                function g(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
                }
                var y = function(e) {
                    function t(e, n) {
                        h(this, t);
                        var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return o.resolveOptions(n), o.listenClick(e), o;
                    }
                    return g(t, c.a), f(t, [ {
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, 
                            this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === p(e.container) ? e.container : document.body;
                        }
                    }, {
                        key: "listenClick",
                        value: function(e) {
                            var t = this;
                            this.listener = m()(e, "click", function(e) {
                                return t.onClick(e);
                            });
                        }
                    }, {
                        key: "onClick",
                        value: function(e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                container: this.container,
                                trigger: t,
                                emitter: this
                            });
                        }
                    }, {
                        key: "defaultAction",
                        value: function(e) {
                            return v("action", e);
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(e) {
                            var t = v("target", e);
                            if (t) return document.querySelector(t);
                        }
                    }, {
                        key: "defaultText",
                        value: function(e) {
                            return v("text", e);
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), 
                            this.clipboardAction = null);
                        }
                    } ], [ {
                        key: "isSupported",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [ "copy", "cut" ], t = "string" == typeof e ? [ e ] : e, n = !!document.queryCommandSupported;
                            return t.forEach(function(e) {
                                n = n && !!document.queryCommandSupported(e);
                            }), n;
                        }
                    } ]), t;
                }();
                function v(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n);
                }
                t.default = y;
            } ]).default;
        }, e.exports = o();
    },
    246: function(e, t) {
        e.exports = "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMTUgMTE1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTUgMTE1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTt9Cgkuc3Qxe2ZpbGw6IzAwQjdGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiMwMEI3RkY7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxkZWZzPgoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjU3LjUiIGN5PSI1Ny41IiByPSI1NS41Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCTwvY2xpcFBhdGg+CgkJPGcgY2xhc3M9InN0MCI+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTc2LjQsMTE2LjZjMCw2LjItNSwxMS4yLTExLjIsMTEuMkg0NC4zYy02LjIsMC0xMS4yLTUtMTEuMi0xMS4yVjM1LjhjMC02LjIsNS0xMS4yLDExLjItMTEuMmgyMC44CgkJCQkJCWM2LjIsMCwxMS4yLDUsMTEuMiwxMS4yVjExNi42eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTU5LjMsNTIuOGMwLDMuMywxLjksNC4xLDQuMiwxLjhsMjUuNy0yNS43YzIuMy0yLjMsMS41LTQuMi0xLjgtNC4ySDY1LjNjLTMuMywwLTYsMi43LTYsNkw1OS4zLDUyLjh6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQkJPGc+CgkJCQk8Zz4KCQkJCQk8Zz4KCQkJCQkJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjUxLjYiIHkxPSIxNTYuMiIgeDI9IjUxLjYiIHkyPSIxMjEuNiIvPgoJCQkJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNiwxNTcuOWMtMC45LDAtMS42LTAuNy0xLjYtMS42di0zNC43YzAtMC45LDAuNy0xLjYsMS42LTEuNmMwLjksMCwxLjYsMC43LDEuNiwxLjZ2MzQuNwoJCQkJCQkJQzUzLjIsMTU3LjEsNTIuNSwxNTcuOSw1MS42LDE1Ny45eiIvPgoJCQkJCTwvZz4KCQkJCQk8Zz4KCQkJCQkJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjU3LjkiIHkxPSIxNTYuMiIgeDI9IjU3LjkiIHkyPSIxMjQuMyIvPgoJCQkJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTcuOSwxNTcuOWMtMC45LDAtMS42LTAuNy0xLjYtMS42di0zMS45YzAtMC45LDAuNy0xLjYsMS42LTEuNnMxLjYsMC43LDEuNiwxLjZ2MzEuOQoJCQkJCQkJQzU5LjYsMTU3LjEsNTguOSwxNTcuOSw1Ny45LDE1Ny45eiIvPgoJCQkJCTwvZz4KCQkJCTwvZz4KCQkJPC9nPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNjcuNiwzNS43SDU3LjVjLTAuNiwwLTEuMi0wLjUtMS4yLTEuMnYwYzAtMC42LDAuNS0xLjIsMS4yLTEuMmgxMC4xYzAuNiwwLDEuMiwwLjUsMS4yLDEuMnYwCgkJCQlDNjguOCwzNS4xLDY4LjIsMzUuNyw2Ny42LDM1Ljd6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02Ny4zLDM1LjJsLTYuOS00LjFjLTAuNS0wLjMtMC42LTAuOS0wLjMtMS4zdjBjMC4zLTAuNSwwLjktMC42LDEuMy0wLjNsNi45LDQuMWMwLjUsMC4zLDAuNiwwLjksMC4zLDEuMwoJCQkJbDAsMEM2OC40LDM1LjQsNjcuNywzNS41LDY3LjMsMzUuMnoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY4LjIsMzUuNmwtNi4xLDVjLTAuNCwwLjQtMS4xLDAuMy0xLjUtMC4ybDAsMGMtMC40LTAuNC0wLjMtMS4xLDAuMi0xLjVsNi4xLTVjMC40LTAuNCwxLjEtMC4zLDEuNSwwLjJ2MAoJCQkJQzY4LjcsMzQuNiw2OC43LDM1LjIsNjguMiwzNS42eiIvPgoJCTwvZz4KCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNzEuNywxNS4yYy0wLjYsMC42LTEuMywyLjYtMi42LDUuNWMzLjEtMC42LDUuMi0wLjgsNS45LTEuMmMwLjItMC4xLDAuNC0wLjIsMC42LTAuNAoJCQljMS4yLTAuOSwxLjQtMi43LDAuNS0zLjlzLTIuNy0xLjUtMy45LTAuNUM3MiwxNC44LDcxLjgsMTUsNzEuNywxNS4yeiIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZmlsbDpub25lO3N0cm9rZTojMDBCN0ZGO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgoJPC9nPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTcwLjIsNDkuNWMtMC4xLTAuOC0xLjItMi42LTIuNS01LjVjLTEuNSwyLjgtMi43LDQuNS0yLjksNS4zYy0wLjEsMC4yLTAuMSwwLjUtMC4xLDAuNwoJCWMtMC4xLDEuNSwxLjEsMi44LDIuNywyLjlzMi44LTEuMSwyLjktMi43QzcwLjMsNTAsNzAuMyw0OS43LDcwLjIsNDkuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik03MC4yLDYzLjZjLTAuMS0wLjgtMS4yLTIuNi0yLjUtNS41Yy0xLjUsMi44LTIuNyw0LjUtMi45LDUuM2MtMC4xLDAuMi0wLjEsMC41LTAuMSwwLjcKCQljLTAuMSwxLjUsMS4xLDIuOCwyLjcsMi45YzEuNSwwLjEsMi44LTEuMSwyLjktMi43QzcwLjMsNjQsNzAuMyw2My44LDcwLjIsNjMuNnoiLz4KPC9nPgo8L3N2Zz4K";
    },
    247: function(e, t) {
        e.exports = "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGcgaWQ9ImNvcHlfMl8iPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yNCwzNy41VjI3bDEyLDEySDI1LjVDMjQuNywzOSwyNCwzOC4zLDI0LDM3LjV6IE0yMi41LDQySDM2djI4LjVjMCwwLjgtMC43LDEuNS0xLjUsMS41aC0zMwoJCUMwLjcsNzIsMCw3MS4zLDAsNzAuNXYtNDJDMCwyNy43LDAuNywyNywxLjUsMjdIMjF2MTMuNUMyMSw0MS4zLDIxLjcsNDIsMjIuNSw0MnogTTQyLjEsMTVoMTcuOWMxLjcsMCwzLjEtMS4zLDMuMS0zVjkuMQoJCUM2Myw3LjQsNjEuNiw2LDU5LjksNkg1N1YzLjNDNTcsMS42LDU1LjYsMCw1NCwwaC02Yy0xLjYsMC0zLDEuNi0zLDMuM1Y2aC0yLjlDNDAuNCw2LDM5LDcuNCwzOSw5LjFWMTJDMzksMTMuNyw0MC40LDE1LDQyLjEsMTV6CgkJIE00NC40LDQ4LjZIMzlWNTdoNS40VjQ4LjZ6IE03MC41LDlINjZ2Ni4xYzAsMS43LTEuNCwyLjktMywyLjlIMzljLTEuNiwwLTMtMS4zLTMtMi45VjloLTQuNUMzMC43LDksMzAsOS43LDMwLDEwLjVWMjdsOC40LDguNGg2CgkJVjI0bDE4LDE4bC0xNSwxNWgyMy4xYzAuOCwwLDEuNS0wLjUsMS41LTEuM1YxMC41QzcyLDkuNyw3MS4zLDksNzAuNSw5eiBNNTUuOCw0Mkw0OCwzNC4yVjM5aC05djZoOXY0LjhMNTUuOCw0MnoiLz4KPC9nPgo8L3N2Zz4K";
    },
    248: function(e, t) {
        e.exports = "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggc3R5bGU9ImZpbGw6IzAwQjdGRjsiIGQ9Ik0xOCwxNlYyYzAtMS4xLTAuOS0yLTItMkgyQzAuOSwwLDAsMC45LDAsMnYxNGMwLDEuMSwwLjksMiwyLDJoMTRDMTcuMSwxOCwxOCwxNy4xLDE4LDE2eiIvPgo8ZyBpZD0icmVtb3ZlXzJfIj4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTEuMSw5bDMuOC0zLjhjMC4xLTAuMSwwLjEtMC40LDAtMC41bC0xLjYtMS42Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBMOSw2LjlMNS4yLDMuMQoJCUM1LjEsMyw0LjgsMyw0LjcsMy4xTDMuMSw0LjdDMyw0LjgsMyw1LjEsMy4xLDUuMkw2LjksOWwtMy44LDMuOGMtMC4xLDAuMS0wLjEsMC40LDAsMC41bDEuNiwxLjZjMC4xLDAuMSwwLjQsMC4xLDAuNSwwTDksMTEuMQoJCWwzLjgsMy44YzAuMSwwLjEsMC40LDAuMSwwLjUsMGwxLjYtMS42YzAuMS0wLjEsMC4xLTAuNCwwLTAuNUwxMS4xLDl6Ii8+CjwvZz4KPC9zdmc+Cg==";
    },
    25: function(e, t) {
        function n(e, t) {
            var n = e[1] || "", r = e[3];
            if (!r) return n;
            if (t && "function" == typeof btoa) {
                var i = o(r), a = r.sources.map(function(e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */";
                });
                return [ n ].concat(a).concat([ i ]).join("\n");
            }
            return [ n ].join("\n");
        }
        function o(e) {
            return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) + " */";
        }
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var o = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + o + "}" : o;
                }).join("");
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [ [ null, e, "" ] ]);
                for (var o = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];
                    "number" == typeof i && (o[i] = !0);
                }
                for (r = 0; r < e.length; r++) {
                    var a = e[r];
                    "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), 
                    t.push(a));
                }
            }, t;
        };
    },
    320: function(e, t, n) {
        var o = n(321);
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]);
        var r = {
            insert: "head",
            singleton: !1
        };
        n(77)(o, r);
        o.locals && (e.exports = o.locals);
    },
    321: function(e, t, n) {
        (e.exports = n(25)(void 0)).push([ e.i, '#equatio-error-overlay .equatio-button {\n  border: 0;\n  font-family: \'Roboto\', Arial, sans-serif;\n  background: #00B7FF;\n  color: #FFF;\n  text-transform: uppercase;\n  cursor: pointer;\n  padding: 7px 10px;\n  font-size: 0.85em;\n  margin: 0 10px;\n  min-width: 165px;\n  border-radius: 3px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  -webkit-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  -moz-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  letter-spacing: -0.2px; }\n\n#equatio-error-overlay .equatio-cancel-button {\n  border: 0;\n  font-family: \'Roboto\', Arial, sans-serif;\n  background: #FFF;\n  color: #00B7FF;\n  cursor: pointer;\n  padding: 0;\n  font-size: 0.85em;\n  margin: 10px 0;\n  min-width: 165px;\n  border-radius: 3px;\n  -webkit-font-smoothing: antialiased;\n  letter-spacing: -0.2px; }\n\n#equatio-error-overlay .equatio-cancel-button:hover {\n  text-decoration: underline; }\n\n#equatio-error-overlay .equatio-button:hover, .equatio-button:active {\n  background: #33c5ff; }\n\n#equatio-automation-overlay,\n#equatio-error-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  z-index: 9999;\n  color: #00B7FF;\n  background-color: #FFF;\n  flex-direction: column; }\n\n#equatio-automation-overlay {\n  padding-top: 110px;\n  background: #FFF url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'80\' viewBox=\'0 0 912 912\'>%3Cstyle type=\'text/css\'%3E .st0{fill:none;stroke:%2300B7FF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300B7FF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300B7FF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class=\'st0 vjXdlbbW_0\' d=\'M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0 l310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_1\' d=\'M262.8,445.6L461.1,643.9\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_2\' d=\'M453.4,650.2L401.9,701.7L97.8,397.6\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_3\' d=\'M449.1,637.7L647.4,439.4\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_4\' d=\'M653.7,447.1L705.2,498.6L401,802.7\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_5\' d=\'M643.3,444.5L445,246.2\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_6\' d=\'M452.8,239.8L504.2,188.4L808.4,492.5\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_7\' d=\'M452.8,253.1L254.5,451.4\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_8\' d=\'M248.2,443.6L196.7,392.2L500.9,88.1\'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>") 50% 50% no-repeat;\n  font-weight: 600; }\n\n#equatio-automation-overlay.graph,\n#equatio-error-overlay.graph {\n  position: fixed;\n  border: 1px solid #acacac;\n  bottom: 22%;\n  left: 22%;\n  right: 22%;\n  top: 22%;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 4px 16px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 4px 16px;\n  -webkit-transition: top .5s ease-in-out;\n  transition: top .5s ease-in-out; }\n\n#equatio-error-overlay .equatio-error-overlay__image {\n  height: 120px; }\n\n#equatio-error-overlay .equatio-error-overlay__title {\n  margin: 20px 0 5px; }\n\n#equatio-error-overlay .equatio-error-overlay__description {\n  margin: 5px 20px 0; }\n\n#equatio-error-overlay .equatio-error-overlay__url {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n#equatio-error-overlay .equatio-error-overlay__url__input {\n  font-size: 1.0em;\n  padding: 5px;\n  width: 60%;\n  display: inline-block;\n  border: 1px solid #efefef;\n  color: #333;\n  line-height: 20px;\n  font-family: "Roboto", Arial, sans-serif;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased; }\n\n#equatio-error-overlay .equatio-error-overlay__url__button {\n  border: 0;\n  background: #00B7FF;\n  display: flex;\n  overflow: hidden;\n  width: 32px;\n  height: 32px;\n  margin: 0;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center; }\n\n#equatio-error-overlay .equatio-error-overlay__url__button:hover, .equatio-error-overlay__url__button:active {\n  background: #33c5ff; }\n\nbutton[data-equatio-balloon] {\n  overflow: visible; }\n\n[data-equatio-balloon] {\n  position: relative; }\n\n[data-equatio-balloon]:before,\n[data-equatio-balloon]:after {\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n  filter: alpha(opacity=0);\n  -khtml-opacity: 0;\n  -moz-opacity: 0;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: all 0.18s ease-out 0.18s;\n  transition: all 0.18s ease-out 0.18s;\n  bottom: 100%;\n  left: 50%;\n  position: absolute;\n  z-index: 10;\n  -webkit-transform: translate(-50%, 10px);\n  -ms-transform: translate(-50%, 10px);\n  transform: translate(-50%, 10px);\n  -webkit-transform-origin: top;\n  -ms-transform-origin: top;\n  transform-origin: top; }\n\n[data-equatio-balloon]:after {\n  background: rgba(0, 183, 255, 0.9);\n  border-radius: 4px;\n  color: #fff;\n  content: attr(data-equatio-balloon);\n  font-size: 12px;\n  padding: .5em 1em;\n  white-space: nowrap;\n  margin-bottom: 11px; }\n\n[data-equatio-balloon]:before {\n  background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;\n  background-size: 100% auto;\n  height: 6px;\n  width: 18px;\n  content: "";\n  margin-bottom: 5px; }\n\n[data-equatio-balloon]:hover:before,\n[data-equatio-balloon][data-equatio-balloon-visible]:before,\n[data-equatio-balloon]:hover:after,\n[data-equatio-balloon][data-equatio-balloon-visible]:after {\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";\n  filter: alpha(opacity=100);\n  -khtml-opacity: 1;\n  -moz-opacity: 1;\n  opacity: 1;\n  pointer-events: auto;\n  -webkit-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  transform: translate(-50%, 0); }\n\n[data-equatio-balloon].font-awesome:after {\n  font-family: FontAwesome; }\n\n[data-equatio-balloon][data-equatio-balloon-break]:after {\n  white-space: pre; }\n\n[data-equatio-balloon-pos="down"]:before,\n[data-equatio-balloon-pos="down"]:after {\n  bottom: auto;\n  left: 50%;\n  top: 100%;\n  -webkit-transform: translate(-50%, -10px);\n  -ms-transform: translate(-50%, -10px);\n  transform: translate(-50%, -10px); }\n\n[data-equatio-balloon-pos="down"]:after {\n  margin-top: 11px; }\n\n[data-equatio-balloon-pos="down"]:before {\n  background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;\n  background-size: 100% auto;\n  height: 6px;\n  width: 18px;\n  margin-top: 5px;\n  margin-bottom: 0; }\n\n[data-equatio-balloon-pos="down"]:hover:before,\n[data-equatio-balloon-pos="down"][data-equatio-balloon-visible]:before,\n[data-equatio-balloon-pos="down"]:hover:after,\n[data-equatio-balloon-pos="down"][data-equatio-balloon-visible]:after {\n  -webkit-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  transform: translate(-50%, 0); }\n\n[data-equatio-balloon-pos="left"]:before,\n[data-equatio-balloon-pos="left"]:after {\n  bottom: auto;\n  left: auto;\n  right: 100%;\n  top: 50%;\n  -webkit-transform: translate(10px, -50%);\n  -ms-transform: translate(10px, -50%);\n  transform: translate(10px, -50%); }\n\n[data-equatio-balloon-pos="left"]:after {\n  margin-right: 11px; }\n\n[data-equatio-balloon-pos="left"]:before {\n  background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;\n  background-size: 100% auto;\n  height: 18px;\n  width: 6px;\n  margin-right: 5px;\n  margin-bottom: 0; }\n\n[data-equatio-balloon-pos="left"]:hover:before,\n[data-equatio-balloon-pos="left"][data-equatio-balloon-visible]:before,\n[data-equatio-balloon-pos="left"]:hover:after,\n[data-equatio-balloon-pos="left"][data-equatio-balloon-visible]:after {\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%); }\n\n[data-equatio-balloon-pos="right"]:before,\n[data-equatio-balloon-pos="right"]:after {\n  bottom: auto;\n  left: 100%;\n  top: 50%;\n  -webkit-transform: translate(-10px, -50%);\n  -ms-transform: translate(-10px, -50%);\n  transform: translate(-10px, -50%); }\n\n[data-equatio-balloon-pos="right"]:after {\n  margin-left: 11px; }\n\n[data-equatio-balloon-pos="right"]:before {\n  background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;\n  background-size: 100% auto;\n  height: 18px;\n  width: 6px;\n  margin-bottom: 0;\n  margin-left: 5px; }\n\n[data-equatio-balloon-pos="right"]:hover:before,\n[data-equatio-balloon-pos="right"][data-equatio-balloon-visible]:before,\n[data-equatio-balloon-pos="right"]:hover:after,\n[data-equatio-balloon-pos="right"][data-equatio-balloon-visible]:after {\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%); }\n\n[data-equatio-balloon-length]:after {\n  white-space: normal; }\n\n[data-equatio-balloon-length="small"]:after {\n  width: 80px; }\n\n[data-equatio-balloon-length="medium"]:after {\n  width: 150px; }\n\n[data-equatio-balloon-length="large"]:after {\n  width: 260px; }\n\n[data-equatio-balloon-length="xlarge"]:after {\n  width: 90vw; }\n\n@media screen and (min-width: 768px) {\n  [data-equatio-balloon-length="xlarge"]:after {\n    width: 380px; } }\n\n[data-equatio-balloon-length="fit"]:after {\n  width: 100%; }\n', "" ]);
    },
    322: function(e, t, n) {
        var o = n(140);
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]);
        var r = {
            insert: "head",
            singleton: !1
        };
        n(77)(o, r);
        o.locals && (e.exports = o.locals);
    },
    338: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(245), r = n.n(o), i = n(34), a = (n(320), n(2)), l = n(246), s = n.n(l), u = n(247), c = n.n(u);
        if (window.location.pathname.endsWith("/picker")) {
            var d, m = function(e, t) {
                if (e) {
                    var n = document.createEvent("MouseEvents");
                    n.initEvent(t, !0, !0), e.dispatchEvent(n);
                }
            }, p = function() {
                var e = document.getElementById("equatio-error-overlay");
                e && document.body.removeChild(e);
            }, f = function(e) {
                var t = document.createElement("div");
                t.id = "equatio-error-overlay", t.innerHTML = "<img src='".concat(s.a, "' class='equatio-error-overlay__image'><h2 class='equatio-error-overlay__title'>Uh oh!</h2><p class='equatio-error-overlay__description'>There was a problem inserting the math into the Google Form. Copy the address below into the &quot;By URL&quot; tab to continue:</p><p class='equatio-error-overlay__url'><input id='equatio-target-url' class='equatio-error-overlay__url__input' value='").concat(e, "'><button class='equatio-error-overlay__url__button' data-clipboard-target='#equatio-target-url'><img src='").concat(c.a, "' height='20'></button></p>");
                var n = document.createElement("button");
                n.className = "equatio-button", n.textContent = "Continue", n.addEventListener("click", function() {
                    p();
                }), t.appendChild(n);
                var o = document.createElement("button");
                o.textContent = "Go back to my Google Form", o.className = "equatio-cancel-button", 
                o.addEventListener("click", function() {
                    var e = document.querySelector("div[role='button'][aria-label='Close']");
                    m(e, "mousedown"), m(e, "mouseup");
                }), t.appendChild(o), document.body.appendChild(t);
                var i = document.querySelector(".equatio-error-overlay__url__button");
                new r.a(i).on("success", function() {
                    i.setAttribute("data-equatio-balloon-visible", ""), i.setAttribute("data-equatio-balloon", "Copied!"), 
                    i.setAttribute("data-equatio-balloon-pos", "up"), setTimeout(function() {
                        i.removeAttribute("data-equatio-balloon");
                    }, 5e3);
                });
            }, h = function() {
                var e = document.createElement("div");
                e.id = "equatio-automation-overlay", e.innerHTML = "Making Math", document.body.appendChild(e);
            }, b = function() {
                var e = document.getElementById("equatio-automation-overlay");
                e && document.body.removeChild(e);
            }, g = function(e) {
                var t = Array.from(document.querySelectorAll("label")).filter(function(e) {
                    return i.c.some(function(t) {
                        return t === e.textContent;
                    });
                });
                t.length && e({
                    parentElement: t[0].parentNode.parentNode.parentNode,
                    id: t[0].getAttribute("for")
                });
                var n = Array.from(document.querySelectorAll("input")).filter(function(e) {
                    return i.c.some(function(t) {
                        return t === e.getAttribute("aria-label");
                    }) || i.d.some(function(t) {
                        return t === e.getAttribute("aria-label");
                    });
                });
                n.length && e({
                    inputUrl: n[0]
                });
                var o = new MutationObserver(function(t) {
                    if (t.length && t[0].addedNodes[0] && t[0].addedNodes[0].querySelectorAll) {
                        var n = Array.from(t[0].addedNodes[0].querySelectorAll("label")).filter(function(e) {
                            return i.c.some(function(t) {
                                return t === e.textContent;
                            });
                        });
                        n.length && (e({
                            parentElement: t[0].addedNodes[0],
                            id: n[0].getAttribute("for")
                        }), o.disconnect());
                        var r = Array.from(document.querySelectorAll("input")).filter(function(e) {
                            return i.c.some(function(t) {
                                return t === e.getAttribute("aria-label");
                            }) || i.d.some(function(t) {
                                return t === e.getAttribute("aria-label");
                            });
                        });
                        r.length && (e({
                            inputUrl: r[0]
                        }), o.disconnect());
                    }
                });
                o.observe(document.body, {
                    childList: !0,
                    subtree: !0
                });
            }, y = function(e, t) {
                if ("false" !== e.getAttribute("aria-disabled")) {
                    var n = new MutationObserver(function(e) {
                        e.some(function(e) {
                            return "aria-disabled" === e.attributeName && "false" === e.target.getAttribute("aria-disabled");
                        }) && (t(), n.disconnect());
                    });
                    n.observe(e, {
                        attributes: !0,
                        characterData: !0
                    });
                } else setTimeout(t, 500);
            }, v = function(e, t) {
                if ("false" !== e.getAttribute("aria-disabled")) {
                    var n = new MutationObserver(function(e) {
                        e.some(function(e) {
                            return "aria-disabled" === e.attributeName && null === e.target.getAttribute("aria-disabled");
                        }) && (t(), n.disconnect());
                    });
                    n.observe(e, {
                        attributes: !0,
                        characterData: !0
                    });
                } else setTimeout(t, 500);
            }, w = function(e) {
                p(), d && clearTimeout(d), d = setTimeout(function() {
                    b(), f(e);
                }, 1e4), h(), setTimeout(function() {
                    var e = Array.from(document.querySelectorAll("[role='tab']")).filter(function(e) {
                        return i.h.some(function(t) {
                            return t === e.textContent;
                        });
                    });
                    m(e[0], "mousedown"), m(e[0], "mouseup");
                }, 200), setTimeout(function() {
                    var t = Array.from(document.querySelectorAll("[role='tab']")).filter(function(e) {
                        return i.a.some(function(t) {
                            return t === e.textContent;
                        }) || i.b.some(function(t) {
                            return t === e.textContent;
                        });
                    });
                    m(t[0], "mousedown"), m(t[0], "mouseup"), g(function(t) {
                        var n = t.inputUrl, o = t.parentElement;
                        if (o) {
                            var r = Array.from(o.querySelectorAll("[role='button']")).filter(function(e) {
                                return i.g.some(function(t) {
                                    return t === e.textContent;
                                });
                            }), a = r[r.length - 1];
                            y(a, function() {
                                m(a, "mousedown"), m(a, "mouseup"), b(), clearTimeout(d);
                            });
                        } else m(n, "mousedown"), m(n, "mouseup"), b(), clearTimeout(d);
                        var l = t.id, s = l ? document.getElementById(l) : n;
                        if (s.value = "".concat(e, " "), setTimeout(function() {
                            s.focus(), s.selectionStart = 1e4, s.selectionEnd = 1e4;
                        }, 500), setTimeout(function() {
                            document.execCommand("delete");
                        }, 700), n) {
                            var u = Array.from(document.querySelectorAll("div[role=button]")).filter(function(e) {
                                return i.e.some(function(t) {
                                    return t === e.getAttribute("aria-label");
                                });
                            });
                            if (u.length) {
                                var c = u[0];
                                v(c, function() {
                                    m(c, "mousedown"), m(c, "mouseup");
                                });
                            }
                        }
                    });
                }, 500);
            };
            Object(a.q)(window.location.href), chrome.runtime.onMessage.addListener(function(e) {
                "targetWindow" in e && window.location.href === e.targetWindow && "open_url" === e.action && w(e.url);
            });
        }
        n(322);
        var x, q, L = n(118), M = n.n(L), k = function() {
            window.removeEventListener("message", x), document.querySelector(".equatio-toolbar-wrapper").style.display = "none";
        }, j = function(e) {
            return [ "https://equatio-api.texthelp.com/", "https://equatio-api.dev.texthelp.com/" ].some(function(t) {
                return e.startsWith(t);
            });
        }, C = function(e) {
            return [ "https://equatio.s3.amazonaws.com/desmos/temporary/", "https://equatio-api.dev.texthelp.com/desmos/", "https://equatio-api.texthelp.com/desmos/" ].some(function(t) {
                return e.startsWith(t);
            });
        }, S = function() {
            return new Promise(function(e, t) {
                "function" == typeof q && q(), q = t, window.removeEventListener("message", x), 
                x = function(t) {
                    if (t.source === window) {
                        if (t.data && "EQUATIO_INSERT_MATH_FORMS" === t.data.action) {
                            k();
                            var n = t.data, o = n.latex, r = n.width, i = n.height;
                            e({
                                latex: o,
                                width: r,
                                height: i
                            });
                        }
                        if (t.data && "EQUATIO_INSERT_GRAPH_FORMS" === t.data.action) {
                            k();
                            var a = t.data, l = a.url, s = a.state;
                            if (!j(l)) return;
                            e({
                                url: l,
                                state: s
                            });
                        }
                        if (t.data && "EQUATIO_INSERT_IMAGE_FORMS" === t.data.action) {
                            k();
                            var u = t.data.url;
                            if (!C(u)) return;
                            e({
                                url: u
                            });
                        }
                    }
                }, window.addEventListener("message", x);
                var n = document.querySelector(".equatio-toolbar-wrapper");
                n && n.offsetParent || Object(a.y)();
            });
        }, I = n(119), E = function(e) {
            return new Promise(function(t) {
                chrome.storage.local.get("formsFallback", function(n) {
                    var o = n.formsFallback;
                    if (chrome.runtime.lastError || !o) return t();
                    var r = o.version;
                    return "number" != typeof r || e >= r ? t() : t(o);
                });
            });
        }, A = void 0;
        function N(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = T(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0, r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: r
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, a = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e);
                },
                n: function() {
                    var e = n.next();
                    return a = e.done, e;
                },
                e: function(e) {
                    l = !0, i = e;
                },
                f: function() {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (l) throw i;
                    }
                }
            };
        }
        function T(e, t) {
            if (e) {
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, t) : void 0;
            }
        }
        function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
        }
        function D(e, t, n, o, r, i, a) {
            try {
                var l = e[i](a), s = l.value;
            } catch (e) {
                return void n(e);
            }
            l.done ? t(s) : Promise.resolve(s).then(o, r);
        }
        function R(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                        D(i, o, r, a, l, "next", e);
                    }
                    function l(e) {
                        D(i, o, r, a, l, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        var z = R(function*() {
            var e = window.location.pathname;
            if (window.top === window.self && e.includes("/forms/") && e.endsWith("/edit")) {
                var t, n, o = I, r = function(e) {
                    var t = function(e, t) {
                        var n = document.createEvent("MouseEvents");
                        n.initEvent(t, !0, !0), e.dispatchEvent(n);
                    };
                    t(e, "mousedown"), t(e, "mouseup"), t(e, "click");
                }, i = function(e, t) {
                    e.value = "".concat(t, " ");
                    var n = new InputEvent("input", {
                        bubbles: !0,
                        cancelBubble: !1,
                        cancelable: !1,
                        composed: !0,
                        currentTarget: e,
                        data: t,
                        dataTransfer: null,
                        defaultPrevented: !1,
                        detail: 0,
                        eventPhase: 3,
                        inputType: "insertText",
                        isComposing: !1,
                        isTrusted: !0
                    });
                    e.dispatchEvent(n);
                }, l = new Map(), s = function(e, o, r) {
                    l.get(e) && r(), t = r, n = e;
                }, u = function(e, t, n) {
                    r(e), s(t, window.location.href, function() {
                        Object(a.D)(n, l.get(t));
                    });
                }, c = function(e) {
                    return [ "https://equatio-api.texthelp.com/", "https://equatio-api.dev.texthelp.com/" ].some(function(t) {
                        return e.includes && e.includes(t);
                    });
                }, d = function(e, t, n) {
                    if (c(t)) {
                        var o = e;
                        o.value = t, o.dataset.initialValue = t;
                        var r = document.createElement("img");
                        r.src = n || t, r.className = "equatio-answer-image";
                        var a = 200;
                        r.style.maxWidth = "".concat(a, "px"), r.style.maxHeight = "".concat(a, "px"), o.style.display = "none", 
                        o.parentNode.appendChild(r, o);
                        var l = o.parentNode.querySelector(".equatio-form-inject-button");
                        l && l.remove(), i(o, t);
                    }
                };
                chrome.runtime.onMessage.addListener(function(e) {
                    "image_dialog_loaded" === e.action && (l.set(n, e.pickerWindow), t.call(A), n = null, 
                    t = null);
                });
                var m, p, f = function(e, t) {
                    e.addEventListener("click", function() {
                        n !== e && s(e, window.location.href, function() {});
                    });
                    var o = document.createElement("div");
                    o.className = "equatio-form-inject-button", o.addEventListener("click", function() {
                        R(function*() {
                            var n = yield S(), o = n.url || "https://".concat("equatio-api.texthelp.com", "/png/").concat(encodeURIComponent(n.latex)), r = n.url || "https://".concat("equatio-api.texthelp.com", "/svg/").concat(encodeURIComponent(n.latex)), i = n.width, a = n.height;
                            t ? (i && a && (r += "?width=".concat(i, "&height=").concat(a)), d(e, o, r)) : (i && a && (o += "?width=".concat(i, "&height=").concat(a)), 
                            u(e, e, o));
                        })();
                    }), o.style.position = "relative";
                    var r = 0;
                    return t ? (o.style.cssText = "", r = 0) : (o.style.cssText = "display: inline-block;\n                vertical-align: middle;\n                width: 24px;\n                height: 48px;", 
                    r = "-6px"), o.innerHTML = '<button type="button" style="width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;position: relative; top: '.concat(r, ';title="Insert Math"><img src="').concat(M.a, '"></button>'), 
                    o;
                }, h = function() {
                    var e = R(function*(e) {
                        try {
                            var t = yield (yield fetch(e)).text(), n = new DOMParser().parseFromString(t, "image/svg+xml"), r = o.fallbackImageCss.svgPath, i = n.querySelector(r);
                            if (!i || !i.parentNode) return;
                            var a = "-".concat(i.parentNode.transform.baseVal[0].matrix.f, "px");
                            p = a;
                        } catch (e) {}
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(), b = function() {
                    var e = R(function*(e) {
                        try {
                            var t, n = o.fallbackImageCss.cssEle, r = e.querySelectorAll(n), i = new Set(), a = [], l = N(r);
                            try {
                                for (l.s(); !(t = l.n()).done; ) {
                                    var s = t.value, u = getComputedStyle(s, "::before").content;
                                    if (u && u.includes("http") && u.includes(".svg")) {
                                        var c = u.indexOf("http"), d = u.indexOf(".svg") + 4, m = u.substring(c, d);
                                        i.has(m) || (i.add(m), a.push(h(m)));
                                    }
                                }
                            } catch (e) {
                                l.e(e);
                            } finally {
                                l.f();
                            }
                            yield Promise.all(a);
                        } catch (e) {}
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(), g = function() {
                    var e = R(function*(e) {
                        var t = o.fallbackImageCss, n = t.cssTop, r = t.cssEle, i = t.closestImgButton, a = e.querySelectorAll(r), l = [];
                        m && (yield m);
                        var s, u = p || n, c = N(a);
                        try {
                            for (c.s(); !(s = c.n()).done; ) {
                                var d = s.value, f = getComputedStyle(d).top, h = d.closest(i);
                                f === u && h && l.push(h);
                            }
                        } catch (e) {
                            c.e(e);
                        } finally {
                            c.f();
                        }
                        return l;
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(), y = null, v = function(e) {
                    var t = o, n = t.imageButtons, r = t.imageButtonParentFilter, i = function(e) {
                        e.forEach(function(e) {
                            if (!(e.parentNode.querySelector(".equatio-form-inject-button") || e.parentNode && e.parentNode.getAttribute(r.attribute) === r.value)) {
                                var t = f(e);
                                e.parentNode.prepend(t);
                            }
                        });
                    }, a = e.querySelectorAll(n.en);
                    if (a && a.length) i(a); else {
                        var l = document.documentElement, s = l && l.lang ? l.lang : y;
                        if (s && "string" == typeof s && n[s]) {
                            var u = e.querySelectorAll(n[s]);
                            if (u.length) return void i(u);
                        }
                        if (!s) for (var c = Object.keys(n), d = 0; d < c.length; d++) {
                            var m = c[d], p = e.querySelectorAll(n[m]);
                            if (p && p.length) return y = m, void i(p);
                        }
                        g(e).then(function(e) {
                            e.length && i(e);
                        });
                    }
                }, w = function(e, t) {
                    t.length && (t.forEach(function(n, o) {
                        if (c(n.trim())) {
                            var r = document.createElement("img");
                            r.src = n.trim(), r.style.maxWidth = "400px", r.style.verticalAlign = "middle", 
                            r.style.margin = "2px 5px", e.parentNode.appendChild(r);
                        } else {
                            var i = document.createElement("span");
                            i.textContent = n, e.parentNode.appendChild(i);
                        }
                        if (o !== t.length - 1) {
                            var a = document.createElement("span");
                            a.textContent = ",", e.parentNode.appendChild(a);
                        }
                    }), e.textContent = "");
                }, x = function(e) {
                    var t = o.answerKeyDisplay;
                    e.querySelectorAll(t).forEach(function(e) {
                        if (e.nextSibling && e.nextSibling.textContent && e.nextSibling.textContent.includes("texthelp.com")) {
                            var t = e.nextSibling.textContent.split(",");
                            w(e.nextSibling, t);
                        }
                    });
                }, q = function(e) {
                    var t = o.answerKeyInput;
                    e.querySelectorAll(t).forEach(function(e) {
                        var t = e.parentNode.querySelectorAll(".equatio-form-inject-button, .equatio-answer-image");
                        if (!t || !t.length) {
                            var n = e.getAttribute("data-initial-value") || e.textContent;
                            if (n && c(n)) d(e, n, n); else {
                                var o = f(e, !0);
                                e.parentNode.append(o);
                            }
                        }
                    });
                }, L = function() {
                    var t = R(function*() {
                        var t = yield E(o.version);
                        t && (o = t);
                        var n, r = o.questionsRoot, i = document.querySelector(r);
                        if (!i) {
                            if (!e.endsWith("/edit")) return;
                            i = document.body;
                        }
                        m = b(i);
                        try {
                            v(i), x(i);
                        } catch (e) {}
                        (function e() {
                            new MutationObserver(function(t, o) {
                                n && clearTimeout(n), n = setTimeout(function() {
                                    o.disconnect();
                                    try {
                                        v(i), q(i), x(i);
                                    } catch (e) {
                                        console.error(e);
                                    }
                                    e();
                                }, 100);
                            }).observe(i, {
                                childList: !0,
                                subtree: !0
                            });
                        })();
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                }();
                "complete" === document.readyState ? L() : window.addEventListener("load", L);
            }
        }), P = n(54), U = n.n(P), O = n(248), G = n.n(O), Z = n(6);
        function W(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = X(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0, r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: r
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, a = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e);
                },
                n: function() {
                    var e = n.next();
                    return a = e.done, e;
                },
                e: function(e) {
                    l = !0, i = e;
                },
                f: function() {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (l) throw i;
                    }
                }
            };
        }
        function F(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function H(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(n), !0).forEach(function(t) {
                    J(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function J(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function B(e, t) {
            return K(e) || V(e, t) || X(e, t) || Q();
        }
        function Q() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function X(e, t) {
            if (e) {
                if ("string" == typeof e) return Y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Y(e, t) : void 0;
            }
        }
        function Y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
        }
        function V(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var o, r, i = [], a = !0, l = !1;
                try {
                    for (n = n.call(e); !(a = (o = n.next()).done) && (i.push(o.value), !t || i.length !== t); a = !0) ;
                } catch (e) {
                    l = !0, r = e;
                } finally {
                    try {
                        a || null == n.return || n.return();
                    } finally {
                        if (l) throw r;
                    }
                }
                return i;
            }
        }
        function K(e) {
            if (Array.isArray(e)) return e;
        }
        function $(e, t, n, o, r, i, a) {
            try {
                var l = e[i](a), s = l.value;
            } catch (e) {
                return void n(e);
            }
            l.done ? t(s) : Promise.resolve(s).then(o, r);
        }
        function ee(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                        $(i, o, r, a, l, "next", e);
                    }
                    function l(e) {
                        $(i, o, r, a, l, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        var te, ne = function(e) {
            e.dispatchEvent(new Event("input", {
                bubbles: !0,
                cancelable: !0
            }));
        }, oe = function(e, t, n) {
            if ("textarea" === e.tagName.toLowerCase()) e.parentNode.previousSibling.style.display = n, 
            e.value = t, ne(e); else {
                var o = e.querySelector("input");
                o.value = t, ne(o);
                var r = e.querySelector("input[type='hidden']");
                r && (e.setAttribute("data-initial-value", t), r.value = t, ne(e));
            }
        }, re = function() {
            return !!document.querySelector(".equatio-toolbar-wrapper");
        }, ie = function() {
            var e = document.querySelector(".equatio-toolbar-wrapper");
            return !!e && !!e.offsetParent;
        }, ae = function() {
            return ie() ? te = Promise.resolve() : re() ? (document.querySelector(".equatio-toolbar-wrapper").style.display = "block", 
            te = Promise.resolve()) : (te = new Promise(function(e, t) {
                var n = setTimeout(function() {
                    t();
                }, 1e4), o = new MutationObserver(function() {
                    ie() && (clearTimeout(n), setTimeout(function() {
                        return e();
                    }, 500), o.disconnect());
                });
                o.observe(document.body, {
                    childList: !0
                });
            }), Object(a.y)(), te);
        }, le = function(e) {
            e.url ? window.postMessage({
                action: "EQUATIO_PARTNER_EXTRACT_URL",
                url: e.url
            }, window.location.href) : e.state ? window.postMessage({
                action: "EQUATIO_CHROME_EXTRACT_GRAPH",
                state: JSON.parse(e.state)
            }, window.location.href) : window.postMessage({
                action: "EQUATIO_CHROME_EXTRACT_MATH",
                latex: e
            }, window.location.href);
        }, se = function() {
            var e = document.createElement("style");
            e.innerHTML = ".quantumWizToastEl.quantumWizToastElLeftAligned.toast.quantumWizToastMultiLine.quantumWizToastOnScreen {\n        bottom: 53px;\n        z-index: 10;\n    }", 
            document.body.appendChild(e);
        }, ue = ee(function*() {
            if (window.top === window.self && Object(Z.d)()) {
                var e = I;
                se();
                var t = "https://".concat("equatio-api.texthelp.com"), n = function(e, t, n) {
                    var o = document.createElement("button");
                    return o.addEventListener("click", function() {
                        oe(e, "", "block"), o.parentNode.removeChild(o), t.parentNode.removeChild(t), e.style.display = "block", 
                        n.removeAttribute("data-related-image");
                    }), o.className = "equatio-form-clear-button", o.type = "button", o.style.cssText = "margin-left: 4px;width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;", 
                    o.title = "Clear Math", o.innerHTML = '<img src="'.concat(G.a, '" height="20">'), 
                    o;
                }, o = [], r = function() {
                    o.forEach(function(e) {
                        try {
                            e.disconnect();
                        } catch (e) {}
                    }), o = [];
                }, i = function(e, o, r, i) {
                    var a = o.url || "".concat(t, "/svg/").concat(encodeURIComponent(o.latex || o)), l = o.url || "".concat(t, "/png/").concat(encodeURIComponent(o.latex || o)), s = o.width, u = o.height, c = o.latex;
                    if (s && u && (a += "?width=".concat(s, "&height=").concat(u)), r) {
                        var d = document.getElementById(r);
                        if (d) {
                            if (d.removeAttribute("data-graph-state"), d.removeAttribute("data-latex"), d.removeAttribute("width"), 
                            d.removeAttribute("height"), o.state) d.setAttribute("data-graph-state", JSON.stringify(o.state)); else {
                                var m = c || o;
                                d.setAttribute("data-latex", "string" == typeof m ? m : "");
                            }
                            d.src = a;
                            var p = 280;
                            if (s) {
                                var f = u < p ? s : s * (p / u);
                                d.setAttribute("width", "".concat(f, "px"));
                            }
                            if (u) {
                                var h = s < p ? u : u * (p / s);
                                d.setAttribute("height", "".concat(h, "px"));
                            }
                            return oe(e, l, "none"), r;
                        }
                    }
                    e.style.display = "none", oe(e, l, "none");
                    var b = document.createElement("div");
                    e.closest(".freebirdFormviewerViewItemsRadioChoice, .freebirdFormviewerViewItemsCheckboxChoice") ? b.style.margin = "0 10px" : b.style.width = "100%";
                    var g = document.createElement("img");
                    if (o.state) g.setAttribute("data-graph-state", JSON.stringify(o.state)), g.classList.add("equatio-form-inject-graph"); else {
                        var y = o.latex || o;
                        g.setAttribute("data-latex", "string" == typeof y ? y : "");
                    }
                    var v = 280;
                    if (s) {
                        var w = u < v ? s : s * (v / u);
                        g.setAttribute("width", "".concat(w, "px"));
                    }
                    if (u) {
                        var x = s < v ? u : u * (v / s);
                        g.setAttribute("height", "".concat(x, "px"));
                    }
                    g.id = "equatio-answer-".concat(new Date().getTime()), g.src = a, g.className = "equatio-form-inject-image", 
                    g.style.maxWidth = "".concat(v, "px"), b.appendChild(g), e.parentNode.insertBefore(b, e);
                    var q = n(e, b, i);
                    return i.appendChild(q), g.id;
                }, l = function(e) {
                    var t = document.createElement("div"), n = document.createElement("button");
                    n.addEventListener("click", function() {
                        var n = ee(function*(n) {
                            r();
                            var o, l = t.getAttribute("data-related-image");
                            if (l) {
                                var s = document.getElementById(l), u = s.getAttribute("data-latex"), c = s.getAttribute("data-graph-state"), d = s.src;
                                try {
                                    yield ae(), u && u.length > 0 ? le(u) : c ? le({
                                        state: c
                                    }) : d && le({
                                        url: d
                                    });
                                } catch (e) {}
                            }
                            try {
                                o = yield S();
                            } catch (e) {
                                return;
                            }
                            Object(a.I)("Google Forms Response: Insert Image");
                            var m = i(e, o, l, t);
                            t.setAttribute("data-related-image", m), n.preventDefault();
                        });
                        return function(e) {
                            return n.apply(this, arguments);
                        };
                    }());
                    var o = e.tagName && "textarea" !== e.tagName.toLowerCase() && e.closest("div[role='radiogroup']");
                    return t.style.display = "flex", t.style["align-items"] = "center", t.style["justify-content"] = o ? "right" : "center", 
                    t.style.margin = "-5px 5px 0 0", t.style.position = "relative", t.style.top = o ? "-25px" : "-3px", 
                    t.className = "equatio-answer-button-container", n.className = "equatio-form-inject-button", 
                    n.type = "button", n.title = "Insert Math", n.style.cssText = "width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;", 
                    n.innerHTML = '<img src="'.concat(M.a, '">'), t.append(n), t;
                }, s = function() {
                    var e = ee(function*(e, t) {
                        var n = "textarea" === e.tagName.toLowerCase() ? e : e.querySelector("input");
                        if (n.value.includes("equatio-api.texthelp.com") || n.value.includes("equatio-api.dev.texthelp.com")) {
                            var o = n.getAttribute("eq-loading");
                            if (o && "" !== o) return;
                            n.setAttribute("eq-loading", "true");
                            var r, l = new U.a(n.value, !0), s = "equatio-api.texthelp.com" === l.hostname || "equatio-api.dev.texthelp.com" === l.hostname;
                            if (s && (l.pathname.startsWith("/png/") || l.pathname.startsWith("/svg/"))) {
                                var u = B(l.pathname.split("/").splice(2, 1), 1)[0], c = l.query, d = c.width, m = c.height;
                                r = {
                                    latex: decodeURIComponent(u),
                                    width: parseFloat(d),
                                    height: parseFloat(m)
                                };
                            } else {
                                var p = yield Object(a.f)(n.value);
                                r = null == p && s && l.pathname.startsWith("/desmos/") ? H({}, p, {
                                    url: n.value
                                }) : !p || "desmos" !== p.type && "mathspace" !== p.type ? p : H({}, p, {
                                    url: n.value
                                });
                            }
                            var f = i(e, r, void 0, t), h = document.getElementById(f);
                            if ("desmos" === r.type) h.setAttribute("data-graph-state", JSON.stringify(r.state)); else {
                                var b = r.latex || r;
                                h.setAttribute("data-latex", "string" == typeof b ? b : "");
                                var g = l.query, y = g.width, v = g.height, w = 280;
                                if (y) {
                                    var x = v < w ? y : y * (w / v);
                                    h.setAttribute("width", "".concat(x, "px"));
                                }
                                if (v) {
                                    var q = y < w ? v : v * (w / y);
                                    h.setAttribute("height", "".concat(q, "px"));
                                }
                            }
                            t.setAttribute("data-related-image", f), e.style.display = "none";
                        }
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                }(), u = function(e) {
                    if ("input" === e.tagName.toLowerCase() && (e = e.parentNode), e.closest(".freebirdFormviewerViewItemsTimeInput, .freebirdFormviewerViewItemsDateDateSelectionInput")) return null;
                    if (e.closest(".quantumWizTextinputPaperinputEl.freebirdFormviewerComponentsQuestionTimeTimeInput")) return null;
                    if (e.closest(".freebirdFormviewerViewMelbaContainer")) return null;
                    if ("textarea" !== e.tagName.toLowerCase() && !e.querySelector("input:not([type]), input[type='text']")) return null;
                    var t, n = e.parentNode.querySelector(".equatio-answer-button-container");
                    if (e.parentNode.querySelector(".equatio-form-clear-button")) return null;
                    n ? t = n : (t = l(e), e.parentNode.parentNode.style.height = "auto", e.parentNode.appendChild(t));
                    var r = new MutationObserver(function(n, r) {
                        var i, a = W(n);
                        try {
                            for (a.s(); !(i = a.n()).done; ) {
                                var l = i.value;
                                if ("attributes" === l.type) {
                                    if ("data-initial-value" === l.attributeName) return r.disconnect(), o = o.filter(function(e) {
                                        return e !== r;
                                    }), void s(e, t);
                                    if ("disabled" === l.attributeName) return r.disconnect(), void (o = o.filter(function(e) {
                                        return e !== r;
                                    }));
                                }
                            }
                        } catch (e) {
                            a.e(e);
                        } finally {
                            a.f();
                        }
                    });
                    return r.observe(e, {
                        attributes: !0,
                        subtree: !0
                    }), o.push(r), s(e, t), t;
                }, c = function() {
                    var t = ee(function*() {
                        var t = yield E(e.version);
                        t && (e = t), Array.from(document.querySelectorAll(e.responseInputAreas)).forEach(u);
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                }();
                "complete" === document.readyState ? c() : window.addEventListener("load", c), chrome.runtime.sendMessage({
                    action: "inject_requirements"
                });
            }
        });
        function ce(e, t, n, o, r, i, a) {
            try {
                var l = e[i](a), s = l.value;
            } catch (e) {
                return void n(e);
            }
            l.done ? t(s) : Promise.resolve(s).then(o, r);
        }
        function de(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                        ce(i, o, r, a, l, "next", e);
                    }
                    function l(e) {
                        ce(i, o, r, a, l, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        var me, pe = window.location.pathname, fe = de(function*() {
            if (window.top === window.self && pe.includes("/forms/") && (pe.endsWith("/edit") || pe.endsWith("/viewscore"))) {
                window.equatioCoreChunkLoading = "chrome", window.equatioCoreBaseUrl = "".concat("chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc", "/");
                var e = (yield Promise.all([ n.e(1), n.e(0), n.e(2), n.e(4), n.e(27) ]).then(n.bind(null, 3))).MathRendering;
                yield Promise.all([ n.e(1), n.e(0), n.e(2), n.e(4), n.e(20) ]).then(n.bind(null, 23));
                var t = new Map(), o = function(n) {
                    var o = document.createElement("img");
                    if (o.src = n.textContent.trim(), o.src.includes("/png/") || o.src.includes("/svg/")) {
                        var r = U()(o.src).pathname;
                        de(function*() {
                            var n, i, a = decodeURIComponent(r.split("/").pop()), l = t.get(a);
                            if (l) n = l.width, i = l.height; else {
                                var s = yield e.getSvg(a);
                                n = s.width, i = s.height, t.set(a, {
                                    width: n,
                                    height: i
                                });
                            }
                            o.src = "https://".concat("equatio-api.texthelp.com", "/svg/").concat(encodeURIComponent(a)), 
                            o.style.width = "".concat(n, "px"), o.style.height = "".concat(i, "px");
                        })();
                    }
                    o.style.maxWidth = "100%", n.parentNode.replaceChild(o, n);
                }, r = function(e) {
                    var t = e || document.body, n = Array.from(t.querySelectorAll("div")).reduce(function(e, t) {
                        var n = Array.from(t.childNodes).filter(function(e) {
                            return e.nodeType === Element.TEXT_NODE && (e.textContent.includes("equatio-api.dev.texthelp.com") || e.textContent.includes("equatio-api.texthelp.com") || e.textContent.includes("equatioapi.texthelp.com"));
                        });
                        return e.concat(n);
                    }, []);
                    n.length && n.forEach(o);
                }, i = function(e) {
                    var t = e || document.body, n = Array.from(t.querySelectorAll("a")).filter(function(e) {
                        return e.textContent.includes("equatio-api.dev.texthelp.com") || e.textContent.includes("equatio-api.texthelp.com") || e.textContent.includes("equatioapi.texthelp.com");
                    });
                    n.length && n.forEach(o);
                }, a = function() {
                    if (pe.endsWith("/viewscore")) r(), i(); else {
                        var e = document.querySelector("#ResponsesView");
                        if (!e && "#responses" !== window.location.hash) return;
                        r(e), i(e), function() {
                            new MutationObserver(function() {
                                r(e), i(e);
                            }).observe(e, {
                                childList: !0,
                                subtree: !0
                            });
                        }();
                    }
                };
                "complete" === document.readyState ? a() : window.addEventListener("load", a);
            }
        });
        function he(e, t, n, o, r, i, a) {
            try {
                var l = e[i](a), s = l.value;
            } catch (e) {
                return void n(e);
            }
            l.done ? t(s) : Promise.resolve(s).then(o, r);
        }
        function be(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    var i = e.apply(t, n);
                    function a(e) {
                        he(i, o, r, a, l, "next", e);
                    }
                    function l(e) {
                        he(i, o, r, a, l, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        var ge = function() {
            var e = be(function*() {
                me || ((yield Object(a.j)()).daysleft < 1 || (me = !0, z(), ue(), fe()));
            });
            return function() {
                return e.apply(this, arguments);
            };
        }();
        chrome.runtime.onMessage.addListener(function() {
            var e = be(function*(e, t) {
                t.id === chrome.runtime.id && e && "EQUATIO_CHANGE_USER" === e.action && ge();
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }()), ge();
    },
    34: function(e, t, n) {
        "use strict";
        n.d(t, "g", function() {
            return o;
        }), n.d(t, "h", function() {
            return r;
        }), n.d(t, "a", function() {
            return i;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "f", function() {
            return l;
        }), n.d(t, "b", function() {
            return s;
        }), n.d(t, "d", function() {
            return u;
        }), n.d(t, "e", function() {
            return c;
        });
        var o = [ "Select", "Seleccionar", "Selecciona", "\u9009\u62e9", "Kies", "\u0418\u0437\u0431\u0438\u0440\u0430\u043d\u0435", "Vybrat", "V\xe6lg", "Ausw\xe4hlen", "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae", "Vali", "Valitse", "Pumili", "S\xe9lectionner", "S\xe9lectionner", "Seleccionar", "Odaberi", "Kiv\xe1laszt\xe1s", "Pilih", "Velja", "Seleziona", "Pasirinkti", "Atlas\u012bt", "Selecteren", "Velg", "Wybierz", "Selecionar", "Selecionar", "Selecta\u021bi", "Vybra\u0165", "\u0418\u0437\u0430\u0431\u0435\u0440\u0438", "V\xe4lj" ], r = [ "Upload", "Subir", "Cargar", "Penja", "\u4e0a\u4f20", "Oplaai", "\u041a\u0430\u0447\u0432\u0430\u043d\u0435", "Nahr\xe1t", "Hochladen", "\u039c\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7", "\xdcleslaadimine", "L\xe4het\xe4", "I-upload", "Importer", "T\xe9l\xe9verser", "Cargar", "Prijenos\n", "Felt\xf6lt\xe9s", "Hla\xf0a inn", "Carica", "\u012ekelti", "Aug\u0161upiel\u0101d\u0113t", "Uploaden", "Last opp", "Prze\u015blij", "Carregar", "\xcenc\u0103rca\u021bi", "Nahra\u0165", "\u041e\u0442\u043f\u0440\u0435\u043c\u0430\u045a\u0435", "Ladda upp" ], i = [ "Mediante URL", "URLaren arabera", "By URL", "De URL", "\u901a\u8fc7\u7f51\u5740", "\u4f7f\u7528\u7db2\u5740\u4e0a\u50b3", "Deur URL", "\u041f\u043e URL \u0430\u0434\u0440\u0435\u0441", "Podle adresy URL", "Efter webadresse", "Per URL", "\u039a\u03b1\u03c4\u03ac \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL", "URL-i j\xe4rgi", "URL-osoitteen mukaan", "Ayon sa URL", "\xc0 partir d'une URL", "\xc0 partir d'une URL", "Por URL", "Prema URL-u", "URL-c\xedm haszn\xe1lat\xe1val", "Melalui URL", "Af sl\xf3\xf0", "Tramite URL", "I\u0161 URL", "P\u0113c\xa0URL", "Via URL", "Via nettadresse", "Z URL-a", "Por URL", "Dup\u0103 adresa URL", "Z\xa0webovej adresy", "\u041f\u0440\u0435\u043c\u0430 URL-\u0443", "Via webbadress", "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c URL", "URL ile", "\u0417\u0430 URL" ], a = [ "Paste URL of image...", "Paste an image URL here:", "Pega una URL de imagen aqu\xed:", "Pega la URL de una imagen aqu\xed:", "Pega aqu\xed la URL de una imagen:", "Enganxeu l'URL d'una imatge aqu\xed:", "\u5728\u6b64\u5904\u7c98\u8d34\u56fe\u7247\u7f51\u5740\uff1a", "\u8cbc\u4e0a\u5716\u7247\u7db2\u5740\u2026", "Plak 'n prent-URL hier:", "\u041f\u043e\u0441\u0442\u0430\u0432\u0435\u0442\u0435 URL \u0430\u0434\u0440\u0435\u0441 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0442\u0443\u043a:", "Sem vlo\u017ete adresu URL obr\xe1zku:", "Inds\xe6t en billedwebadresse her:", "Bild-URL hier einf\xfcgen:", "\u0395\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2 \u03b5\u03b4\u03ce:", "Kleepige pildi URL siia:", "Liit\xe4 kuvan URL-osoite t\xe4h\xe4n:", "I-paste ang URL ng larawan dito:", "Coller une URL d'image ici\xa0:", "Coller l'URL d'une image ici\xa0:", "Pega o URL dunha imaxe aqu\xed:", "Ovdje zalijepite URL slike:", "M\xe1solja be egy k\xe9p URL-j\xe9t ide:", "Tempelkan URL gambar di sini:", "L\xedmdu vefsl\xf3\xf0 myndar h\xe9r:", "Incolla l'URL di un'immagine qui:", "Vaizdo URL \u012fklijuokite \u010dia:", "Iel\u012bm\u0113jiet att\u0113la\xa0URL \u0161eit:", "Plak hier een afbeeldings-URL:", "Lim inn en bildenettadresse her:", "Tutaj wklej URL obrazu:", "Cole um URL de imagem aqui:", "Colar URL da imagem aqui:", "Insera\u021bi adresa URL a unei imagini aici:", "Tu prilepte webov\xfa adresu obr\xe1zka:", "\u041e\u0432\u0434\u0435 \u043d\u0430\u043b\u0435\u043f\u0438\u0442\u0435 URL \u0441\u043b\u0438\u043a\u0435:", "Klistra in en bildwebbadress h\xe4r:", "\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435", "Resmin URL'sini yap\u0131\u015ft\u0131r\u0131n...", "\u0412\u0441\u0442\u0430\u0432\u0442\u0435 URL-\u0430\u0434\u0440\u0435\u0441\u0443 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f\u2026" ], l = [ "Image...", "Imagen...", "\u56fe\u7247...", "Prent...", "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435...", "Obr\xe1zek...", "Billede...", "Bild...", "\u0395\u03b9\u03ba\u03cc\u03bd\u03b1...", "Pilt...", "Kuva...", "Larawan...", "Image...", "Image...", "Imaxe...", "Slika...", "K\xe9p...", "Gambar...", "Mynd...", "Immagine ...", "Vaizdas...", "Att\u0113ls...", "Afbeelding...", "Bilde...", "Obraz...", "Imagem...", "Imagem...", "Imagine...", "Obr\xe1zok...", "\u0421\u043b\u0438\u043a\u0430...", "Bild..." ], s = [ "By URL", "POR URL", "DE URL", "\u901a\u8fc7\u7f51\u5740", "\u4f7f\u7528\u7db2\u5740\u4e0a\u50b3", "DEUR URL", "\u041f\u041e URL \u0410\u0414\u0420\u0415\u0421", "PODLE ADRESY URL", "EFTER WEBADRESSE", "PER URL", "\u039a\u0391\u03a4\u0391 \u0394\u0399\u0395\u03a5\u0398\u03a5\u039d\u03a3\u0397 URL", "URL-I J\xc4RGI", "URL-OSOITTEEN MUKAAN", "AYON SA URL", "\xc0 PARTIR D'UNE URL", "\xc0 PARTIR D'UNE URL", "POR URL", "PREMA URL-U", "URL-C\xcdM HASZN\xc1LAT\xc1VAL", "MELALUI URL", "AF SL\xd3\xd0", "TRAMITE URL", "I\u0160 URL", "P\u0112C\xa0URL", "VIA URL", "VIA NETTADRESSE", "Z URL-A", "POR URL", "POR URL", "DUP\u0102 ADRESA URL", "Z\xa0WEBOVEJ ADRESY", "\u041f\u0420\u0415\u041c\u0410 URL-\u0423", "VIA WEBBADRESS", "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c URL", "URL ile", "\u0417\u0430 URL" ], u = [ "insert image", "Pega la URL de la imagen\u2026", "Pegar URL de imagen\u2026", "\u7c98\u8d34\u56fe\u7247\u7684\u7f51\u5740\u2026", "Plak URL van prent \u2026", "\u041f\u043e\u0441\u0442\u0430\u0432\u0435\u0442\u0435 URL \u0430\u0434\u0440\u0435\u0441\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0442\u043e...", "Vlo\u017ete URL obr\xe1zku...", "Inds\xe6t billedets webadresse...", "Bild-URL einf\xfcgen\u2026", "\u0395\u03c0\u03b9\u03ba\u03cc\u03bb\u03bb\u03b7\u03c3\u03b7 URL \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2\u2026", "Kleepige kujutise URL...", "Liit\xe4 kuvan URL-osoite\u2026", "I-paste ang URL ng larawan...", "Coller l'URL de l'image\u2026", "Coller l'URL de l'image\u2026", "Pega o URL da imaxe\u2026", "Zalijepite URL slike...", "A k\xe9p URL-c\xedm\xe9nek besz\xfar\xe1sa...", "Tempel URL gambar...", "L\xedma sl\xf3\xf0 myndar...", "Incolla l'URL dell'immagine...", "\u012eklijuokite vaizdo URL...", "Iel\u012bm\u0113jiet att\u0113la URL...", "Plak URL van afbeelding...", "Lim inn bildenettadresse.", "Wklej adres URL obrazu...", "Cole o URL da imagem\u2026", "Cole o URL da imagem\u2026", "Insera\u021bi adresa URL a imaginii...", "Prilepte webov\xfa adresu obr\xe1zka...", "\u041d\u0430\u043b\u0435\u043f\u0438\u0442\u0435 URL \u0441\u043b\u0438\u043a\u0435...", "Klistra in webbadressen f\xf6r bilden ...", "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435", "resim ekle", "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f" ], c = [ "insert image", "insertar imagen", "insertar imagen", "\u63d2\u5165\u56fe\u7247", "\u63d2\u5165\u5716\u7247", "voeg prent in", "\u0432\u043c\u044a\u043a\u0432\u0430\u043d\u0435 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435", "vlo\u017eit obr\xe1zek", "inds\xe6t billede", "Bild einf\xfcgen", "\u03b5\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2", "sisesta kujutis", "Lis\xe4\xe4 kuva", "ilagay ang larawan", "ins\xe9rer une image", "ins\xe9rer une image", "inserir imaxe", "umetanje slike", "k\xe9p besz\xfar\xe1sa", "sisipkan gambar", "setja inn mynd", "inserisci immagine", "\u012fterpti vaizd\u0105", "ievietot att\u0113lu", "afbeelding invoegen", "sett inn bilde", "wstaw obraz", "inserir imagem", "inserir imagem", "insera\u021bi o imagine", "vlo\u017ei\u0165 obr\xe1zok", "\u0443\u043c\u0435\u0442\u043d\u0438 \u0441\u043b\u0438\u043a\u0443", "infoga bild", "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435", "resim ekle", "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f" ];
    },
    45: function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    54: function(e, t, n) {
        "use strict";
        (function(t) {
            var o = n(91), r = n(92), i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, l = /^[a-zA-Z]:/, s = new RegExp("^" + "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]" + "+");
            function u(e) {
                return (e || "").toString().replace(s, "");
            }
            var c = [ [ "#", "hash" ], [ "?", "query" ], function(e, t) {
                return p(t.protocol) ? e.replace(/\\/g, "/") : e;
            }, [ "/", "pathname" ], [ "@", "auth", 1 ], [ NaN, "host", void 0, 1, 1 ], [ /:(\d+)$/, "port", void 0, 1 ], [ NaN, "hostname", void 0, 1, 1 ] ], d = {
                hash: 1,
                query: 1
            };
            function m(e) {
                var n, o = ("undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}).location || {}, r = {}, a = typeof (e = e || o);
                if ("blob:" === e.protocol) r = new b(unescape(e.pathname), {}); else if ("string" === a) for (n in r = new b(e, {}), 
                d) delete r[n]; else if ("object" === a) {
                    for (n in e) n in d || (r[n] = e[n]);
                    void 0 === r.slashes && (r.slashes = i.test(e.href));
                }
                return r;
            }
            function p(e) {
                return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e;
            }
            function f(e, t) {
                e = u(e), t = t || {};
                var n, o = a.exec(e), r = o[1] ? o[1].toLowerCase() : "", i = !!o[2], l = !!o[3], s = 0;
                return i ? l ? (n = o[2] + o[3] + o[4], s = o[2].length + o[3].length) : (n = o[2] + o[4], 
                s = o[2].length) : l ? (n = o[3] + o[4], s = o[3].length) : n = o[4], "file:" === r ? s >= 2 && (n = n.slice(2)) : p(r) ? n = o[4] : r ? i && (n = n.slice(2)) : s >= 2 && p(t.protocol) && (n = o[4]), 
                {
                    protocol: r,
                    slashes: i || p(r),
                    slashesCount: s,
                    rest: n
                };
            }
            function h(e, t) {
                if ("" === e) return t;
                for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), o = n.length, r = n[o - 1], i = !1, a = 0; o--; ) "." === n[o] ? n.splice(o, 1) : ".." === n[o] ? (n.splice(o, 1), 
                a++) : a && (0 === o && (i = !0), n.splice(o, 1), a--);
                return i && n.unshift(""), "." !== r && ".." !== r || n.push(""), n.join("/");
            }
            function b(e, t, n) {
                if (e = u(e), !(this instanceof b)) return new b(e, t, n);
                var i, a, s, d, g, y, v = c.slice(), w = typeof t, x = this, q = 0;
                for ("object" !== w && "string" !== w && (n = t, t = null), n && "function" != typeof n && (n = r.parse), 
                t = m(t), i = !(a = f(e || "", t)).protocol && !a.slashes, x.slashes = a.slashes || i && t.slashes, 
                x.protocol = a.protocol || t.protocol || "", e = a.rest, ("file:" === a.protocol && (2 !== a.slashesCount || l.test(e)) || !a.slashes && (a.protocol || a.slashesCount < 2 || !p(x.protocol))) && (v[3] = [ /(.*)/, "pathname" ]); q < v.length; q++) "function" != typeof (d = v[q]) ? (s = d[0], 
                y = d[1], s != s ? x[y] = e : "string" == typeof s ? ~(g = e.indexOf(s)) && ("number" == typeof d[2] ? (x[y] = e.slice(0, g), 
                e = e.slice(g + d[2])) : (x[y] = e.slice(g), e = e.slice(0, g))) : (g = s.exec(e)) && (x[y] = g[1], 
                e = e.slice(0, g.index)), x[y] = x[y] || i && d[3] && t[y] || "", d[4] && (x[y] = x[y].toLowerCase())) : e = d(e, x);
                n && (x.query = n(x.query)), i && t.slashes && "/" !== x.pathname.charAt(0) && ("" !== x.pathname || "" !== t.pathname) && (x.pathname = h(x.pathname, t.pathname)), 
                "/" !== x.pathname.charAt(0) && p(x.protocol) && (x.pathname = "/" + x.pathname), 
                o(x.port, x.protocol) || (x.host = x.hostname, x.port = ""), x.username = x.password = "", 
                x.auth && (d = x.auth.split(":"), x.username = d[0] || "", x.password = d[1] || ""), 
                x.origin = "file:" !== x.protocol && p(x.protocol) && x.host ? x.protocol + "//" + x.host : "null", 
                x.href = x.toString();
            }
            function g(e, t, n) {
                var i = this;
                switch (e) {
                  case "query":
                    "string" == typeof t && t.length && (t = (n || r.parse)(t)), i[e] = t;
                    break;

                  case "port":
                    i[e] = t, o(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, 
                    i[e] = "");
                    break;

                  case "hostname":
                    i[e] = t, i.port && (t += ":" + i.port), i.host = t;
                    break;

                  case "host":
                    i[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, 
                    i.port = "");
                    break;

                  case "protocol":
                    i.protocol = t.toLowerCase(), i.slashes = !n;
                    break;

                  case "pathname":
                  case "hash":
                    if (t) {
                        var a = "pathname" === e ? "/" : "#";
                        i[e] = t.charAt(0) !== a ? a + t : t;
                    } else i[e] = t;
                    break;

                  default:
                    i[e] = t;
                }
                for (var l = 0; l < c.length; l++) {
                    var s = c[l];
                    s[4] && (i[s[1]] = i[s[1]].toLowerCase());
                }
                return i.origin = "file:" !== i.protocol && p(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", 
                i.href = i.toString(), i;
            }
            function y(e) {
                e && "function" == typeof e || (e = r.stringify);
                var t, n = this, o = n.protocol;
                o && ":" !== o.charAt(o.length - 1) && (o += ":");
                var i = o + (n.slashes || p(n.protocol) ? "//" : "");
                return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), 
                i += n.host + n.pathname, (t = "object" == typeof n.query ? e(n.query) : n.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), 
                n.hash && (i += n.hash), i;
            }
            b.prototype = {
                set: g,
                toString: y
            }, b.extractProtocol = f, b.location = m, b.trimLeft = u, b.qs = r, e.exports = b;
        }).call(this, n(45));
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "d", function() {
            return i;
        }), n.d(t, "c", function() {
            return a;
        });
        var o = {
            GoogleDocs: "Google Docs",
            GoogleForms: "Google Forms",
            GoogleSlides: "Google Slides",
            GoogleDrawings: "Google Drawings",
            GoogleSheets: "Google Sheets"
        }, r = {
            document: o.GoogleDocs,
            forms: o.GoogleForms,
            presentation: o.GoogleSlides,
            drawings: o.GoogleDrawings,
            spreadsheets: o.GoogleSheets
        }, i = function() {
            var e = window.location, t = e.host, n = e.pathname;
            if ("docs.google.com" === t) return n.indexOf("/forms/") >= 0 && (n.endsWith("/viewform") || n.endsWith("/formResponse") || n.endsWith("/prefill") || n.endsWith("/startquiz") || n.endsWith("/viewscore"));
        }, a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location, t = e.host, n = e.pathname;
            if ("docs.google.com" === t) {
                var o, i = n.split("/").filter(function(e) {
                    return !!e;
                });
                return o = n.startsWith("/a/") ? i[2] : i[0], r[o];
            }
        };
        t.b = function() {
            return -1 === window.location.href.indexOf("/document/");
        };
    },
    77: function(e, t, n) {
        "use strict";
        var o, r = {}, i = function() {
            return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), 
            o;
        }, a = function() {
            var e = {};
            return function(t) {
                if (void 0 === e[t]) {
                    var n = document.querySelector(t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head;
                    } catch (e) {
                        n = null;
                    }
                    e[t] = n;
                }
                return e[t];
            };
        }();
        function l(e, t) {
            for (var n = [], o = {}, r = 0; r < e.length; r++) {
                var i = e[r], a = t.base ? i[0] + t.base : i[0], l = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
                o[a] ? o[a].parts.push(l) : n.push(o[a] = {
                    id: a,
                    parts: [ l ]
                });
            }
            return n;
        }
        function s(e, t) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n], i = r[o.id], a = 0;
                if (i) {
                    for (i.refs++; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                    for (;a < o.parts.length; a++) i.parts.push(g(o.parts[a], t));
                } else {
                    for (var l = []; a < o.parts.length; a++) l.push(g(o.parts[a], t));
                    r[o.id] = {
                        id: o.id,
                        refs: 1,
                        parts: l
                    };
                }
            }
        }
        function u(e) {
            var t = document.createElement("style");
            if (void 0 === e.attributes.nonce) {
                var o = n.nc;
                o && (e.attributes.nonce = o);
            }
            if (Object.keys(e.attributes).forEach(function(n) {
                t.setAttribute(n, e.attributes[n]);
            }), "function" == typeof e.insert) e.insert(t); else {
                var r = a(e.insert || "head");
                if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(t);
            }
            return t;
        }
        function c(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
        }
        var d, m = (d = [], function(e, t) {
            return d[e] = t, d.filter(Boolean).join("\n");
        });
        function p(e, t, n, o) {
            var r = n ? "" : o.css;
            if (e.styleSheet) e.styleSheet.cssText = m(t, r); else {
                var i = document.createTextNode(r), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
            }
        }
        function f(e, t, n) {
            var o = n.css, r = n.media, i = n.sourceMap;
            if (r && e.setAttribute("media", r), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), 
            e.styleSheet) e.styleSheet.cssText = o; else {
                for (;e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(o));
            }
        }
        var h = null, b = 0;
        function g(e, t) {
            var n, o, r;
            if (t.singleton) {
                var i = b++;
                n = h || (h = u(t)), o = p.bind(null, n, i, !1), r = p.bind(null, n, i, !0);
            } else n = u(t), o = f.bind(null, n, t), r = function() {
                c(n);
            };
            return o(e), function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    o(e = t);
                } else r();
            };
        }
        e.exports = function(e, t) {
            (t = t || {}).attributes = "object" == typeof t.attributes ? t.attributes : {}, 
            t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());
            var n = l(e, t);
            return s(n, t), function(e) {
                for (var o = [], i = 0; i < n.length; i++) {
                    var a = n[i], u = r[a.id];
                    u && (u.refs--, o.push(u));
                }
                e && s(l(e, t), t);
                for (var c = 0; c < o.length; c++) {
                    var d = o[c];
                    if (0 === d.refs) {
                        for (var m = 0; m < d.parts.length; m++) d.parts[m]();
                        delete r[d.id];
                    }
                }
            };
        };
    },
    91: function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            if (t = t.split(":")[0], !(e = +e)) return !1;
            switch (t) {
              case "http":
              case "ws":
                return 80 !== e;

              case "https":
              case "wss":
                return 443 !== e;

              case "ftp":
                return 21 !== e;

              case "gopher":
                return 70 !== e;

              case "file":
                return !1;
            }
            return 0 !== e;
        };
    },
    92: function(e, t, n) {
        "use strict";
        var o, r = Object.prototype.hasOwnProperty;
        function i(e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "));
            } catch (e) {
                return null;
            }
        }
        function a(e) {
            try {
                return encodeURIComponent(e);
            } catch (e) {
                return null;
            }
        }
        function l(e) {
            for (var t, n = /([^=?#&]+)=?([^&]*)/g, o = {}; t = n.exec(e); ) {
                var r = i(t[1]), a = i(t[2]);
                null === r || null === a || r in o || (o[r] = a);
            }
            return o;
        }
        function s(e, t) {
            t = t || "";
            var n, i, l = [];
            for (i in "string" != typeof t && (t = "?"), e) if (r.call(e, i)) {
                if ((n = e[i]) || null !== n && n !== o && !isNaN(n) || (n = ""), i = a(i), n = a(n), 
                null === i || null === n) continue;
                l.push(i + "=" + n);
            }
            return l.length ? t + l.join("&") : "";
        }
        t.stringify = s, t.parse = l;
    }
});