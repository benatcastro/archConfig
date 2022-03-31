!function(e) {
    var n = {};
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        });
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var o in e) t.d(r, o, function(n) {
            return e[n];
        }.bind(null, o));
        return r;
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
    }, t.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", t(t.s = 334);
}({
    0: function(e, n, t) {
        "use strict";
        n.a = Object.freeze({
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
    14: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return r;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "b", function() {
            return i;
        });
        var r = {
            Insert: "INSERT_HTML_EDITOR",
            Extract: "EXTRACT_SELECTION_HTML_EDITOR",
            SetEditor: "SET_HTML_EDITOR"
        }, o = function(e, n) {
            window.postMessage({
                type: "EQUATIO_HTML_EDITOR_API_RESPONSE",
                action: e,
                value: n
            });
        }, i = function(e, n, t) {
            window.postMessage({
                type: "EQUATIO_HTML_EDITOR_API",
                action: e,
                value: n,
                targetEditor: t
            });
        };
    },
    2: function(e, n, t) {
        "use strict";
        t.d(n, "y", function() {
            return s;
        }), t.d(n, "s", function() {
            return f;
        }), t.d(n, "d", function() {
            return l;
        }), t.d(n, "p", function() {
            return p;
        }), t.d(n, "j", function() {
            return _;
        }), t.d(n, "n", function() {
            return m;
        }), t.d(n, "cb", function() {
            return g;
        }), t.d(n, "ab", function() {
            return h;
        }), t.d(n, "G", function() {
            return v;
        }), t.d(n, "e", function() {
            return b;
        }), t.d(n, "D", function() {
            return S;
        }), t.d(n, "q", function() {
            return w;
        }), t.d(n, "O", function() {
            return E;
        }), t.d(n, "P", function() {
            return y;
        }), t.d(n, "o", function() {
            return O;
        }), t.d(n, "F", function() {
            return P;
        }), t.d(n, "i", function() {
            return T;
        }), t.d(n, "N", function() {
            return j;
        }), t.d(n, "bb", function() {
            return I;
        }), t.d(n, "Q", function() {
            return R;
        }), t.d(n, "S", function() {
            return G;
        }), t.d(n, "T", function() {
            return D;
        }), t.d(n, "V", function() {
            return A;
        }), t.d(n, "W", function() {
            return x;
        }), t.d(n, "U", function() {
            return F;
        }), t.d(n, "J", function() {
            return M;
        }), t.d(n, "I", function() {
            return C;
        }), t.d(n, "a", function() {
            return L;
        }), t.d(n, "H", function() {
            return H;
        }), t.d(n, "db", function() {
            return U;
        }), t.d(n, "c", function() {
            return k;
        }), t.d(n, "E", function() {
            return q;
        }), t.d(n, "u", function() {
            return N;
        }), t.d(n, "A", function() {
            return B;
        }), t.d(n, "w", function() {
            return Q;
        }), t.d(n, "M", function() {
            return K;
        }), t.d(n, "k", function() {
            return W;
        }), t.d(n, "b", function() {
            return X;
        }), t.d(n, "r", function() {
            return z;
        }), t.d(n, "m", function() {
            return J;
        }), t.d(n, "x", function() {
            return V;
        }), t.d(n, "h", function() {
            return Y;
        }), t.d(n, "v", function() {
            return Z;
        }), t.d(n, "l", function() {
            return $;
        }), t.d(n, "R", function() {
            return ee;
        }), t.d(n, "B", function() {
            return ne;
        }), t.d(n, "f", function() {
            return te;
        }), t.d(n, "C", function() {
            return re;
        }), t.d(n, "Z", function() {
            return oe;
        }), t.d(n, "z", function() {
            return ie;
        }), t.d(n, "L", function() {
            return ue;
        }), t.d(n, "g", function() {
            return ae;
        }), t.d(n, "X", function() {
            return ce;
        }), t.d(n, "Y", function() {
            return de;
        }), t.d(n, "t", function() {
            return se;
        }), t.d(n, "K", function() {
            return fe;
        });
        var r = t(0);
        function o(e, n, t, r, o, i, u) {
            try {
                var a = e[i](u), c = a.value;
            } catch (e) {
                return void t(e);
            }
            a.done ? n(c) : Promise.resolve(c).then(r, o);
        }
        function i(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(r, i) {
                    var u = e.apply(n, t);
                    function a(e) {
                        o(u, r, i, a, c, "next", e);
                    }
                    function c(e) {
                        o(u, r, i, a, c, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        function u(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, r);
            }
            return t;
        }
        function a(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? u(Object(t), !0).forEach(function(n) {
                    c(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        function c(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        var d = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(function(t, r) {
                chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", a({
                    action: e
                }, n), function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = n.success, i = n.failure;
                    return chrome.runtime.lastError ? (console.error("Action failed:", e, chrome.runtime.lastError.message), 
                    r(chrome.runtime.lastError)) : i ? (console.error("Action failed:", e, i), r(i)) : t(o);
                });
            });
        }, s = function() {
            return d("load");
        }, f = function() {
            return d(r.a.InjectDocsRequirements);
        }, l = function() {
            return d(r.a.EnsureLoggedIntoFirebase);
        }, p = function(e, n) {
            return d(r.a.GetSpeech, {
                mathML: e,
                settings: n
            });
        }, _ = function() {
            return d(r.a.GetLicense);
        }, m = function() {
            return d(r.a.GetProfile);
        }, g = function(e, n, t) {
            return d(r.a.UpdateProfile, {
                options: e,
                profile: n,
                customOptions: t
            });
        }, h = function(e) {
            return d(r.a.UpdateFavourites, {
                items: e
            });
        }, v = function(e) {
            return d(r.a.RemoveFavourite, {
                item: e
            });
        }, b = function(e) {
            return d(r.a.EnterProductCode, {
                code: e
            });
        }, S = function(e, n) {
            return d(r.a.OpenGoogleFormsPicker, {
                url: e,
                picker: n
            });
        }, w = function(e) {
            return d(r.a.GoogleFormsPickerLoaded, {
                location: e
            });
        }, E = function(e) {
            return d(r.a.SetProfileType, {
                type: e
            });
        }, y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return d(r.a.SetShowEquatioOnFirstRun, {
                value: e
            });
        }, O = function() {
            return d(r.a.GetShouldShowEquatioOnFirstRun);
        }, P = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return d(r.a.RegisterCompanionAppTarget, {
                platform: e,
                hostname: n
            });
        }, T = function() {
            return d(r.a.GetHandwritingCount);
        }, j = function(e) {
            return d(r.a.SetHandwritingCount, {
                count: e
            });
        }, I = function(e) {
            return d(r.a.UpdateGoogleSheetEquations, {
                spreadsheetId: e
            });
        }, R = function() {
            return d(r.a.ShowHandwritingExceededReminder);
        }, G = function() {
            return d(r.a.ShowPredictionReminder);
        }, D = function() {
            return d(r.a.ShowRenewalReminder);
        }, A = function() {
            return d(r.a.ShowTrialExpiration);
        }, x = function() {
            return d(r.a.ShowUpgradeReminder);
        }, F = function() {
            return d(r.a.ShowReviewReminder);
        }, M = function(e) {
            return d(r.a.SendAnalyticsScreen, {
                screenName: e
            });
        }, C = function(e) {
            return d(r.a.SendAnalyticsEvent, {
                category: e
            });
        }, L = function() {
            return d(r.a.CaptureScreenshot);
        }, H = function(e, n, t, o, i) {
            return d(r.a.ScanMathpixOcr, {
                base64: e,
                x: n,
                y: t,
                width: o,
                height: i
            });
        }, U = function(e, n) {
            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return d(r.a.UploadImageToProxy, {
                url: e,
                base64: n,
                isPermanent: t
            });
        }, k = function() {
            return d(r.a.DismissReviewReminder);
        }, q = function(e) {
            return d(r.a.OpenMathspace, {
                platformIntegrationId: e
            });
        }, N = function() {
            return d(r.a.InjectWebPageToolbar);
        }, B = function(e) {
            return d(r.a.MathDiscovered, {
                value: e
            });
        }, Q = function() {
            return d(r.a.IsDiscoverabilityFirstTime);
        }, K = function(e) {
            return d(r.a.SetDiscoverabilityEnabled, {
                value: e
            });
        }, W = function() {
            return d(r.a.GetMathDiscoverability);
        }, X = function(e) {
            return d(r.a.DismissGSuiteMathDiscover, {
                options: e
            });
        }, z = function() {
            return d(r.a.HasGSuiteDiscoverOverlayShown);
        }, J = function() {
            return d(r.a.GetPlatformOs);
        }, V = function() {
            return d(r.a.IsLockedForms);
        }, Y = function() {
            return d(r.a.GetCurrentDisabledFeatures);
        }, Z = function(e, n, t, o) {
            return d(r.a.InsertImageGoogleApi, {
                url: e,
                width: n,
                height: t,
                additionalOptions: o
            });
        }, $ = function() {
            return d(r.a.GetMolecularFilter);
        }, ee = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return d(r.a.ShowInfoPopup, {
                popupType: e,
                options: n
            });
        }, ne = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return d(r.a.OfficeAddToClipboard, {
                content: e,
                isText: n
            });
        }, te = function(e) {
            return d(r.a.ExtractLatexFromUrl, {
                url: e
            });
        }, re = function(e) {
            return d(r.a.OfficeCanUseApp, {
                appName: e
            });
        }, oe = function() {
            var e = i(function*() {
                return d(r.a.SwitchAccount);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), ie = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return d(r.a.LoginToFirebase, {
                tabId: e
            });
        }, ue = function(e, n) {
            return d(r.a.SetCanShowClipboardPopup, {
                value: e,
                copyBtn: n
            });
        }, ae = function(e) {
            return d(r.a.GetCanShowClipboardPopup, {
                copyBtn: e
            });
        }, ce = function(e) {
            return d(r.a.SpeechEngineSpeak, {
                text: e
            });
        }, de = function() {
            return d(r.a.SpeechEngineStop);
        }, se = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return d(r.a.InjectHtmlEditorApi, {
                fromToolbar: e
            });
        }, fe = function(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return d(r.a.HtmlEditorApiAction, {
                command: e,
                value: n,
                fromEditor: t,
                targetFrame: o
            });
        };
    },
    334: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(36), o = t.n(r), i = t(14), u = t(2), a = t(0), c = null, d = function() {
            window.addEventListener("message", function(e) {
                if (e.source === window && e.data && "EQUATIO_HTML_EDITOR_API_RESPONSE" === e.data.type) {
                    var n = e.data, t = n.action, r = n.value;
                    if (t === i.a.SetEditor) {
                        if (r === c) return;
                        c = r;
                    }
                    Object(u.K)(t, r, !0);
                }
            }), window.addEventListener("unload", function() {
                c && Object(u.K)(i.a.SetEditor, null, !0);
            }, !0);
            var e = function(e) {
                var n = e.action, t = e.command, r = e.value, o = e.fromEditor;
                n !== a.a.HtmlEditorApiAction || o || Object(i.b)(t, r, c);
            };
            chrome.runtime.onMessage.addListener(e), o()("chrome-extension://".concat(chrome.runtime.id, "/content/htmlEditorApi.js"));
        }, s = function e(n) {
            var t = n.action, r = n.fromToolbar;
            t === a.a.InjectHtmlEditorApi && r && (d(), chrome.runtime.onMessage.removeListener(e));
        };
        chrome.runtime.onMessage.addListener(s), Object(u.t)(!1);
    },
    36: function(e, n) {
        function t(e, n, t) {
            n(new URIError(t.target.src + " could not be loaded"), t);
        }
        function r(e, n, t) {
            n(null, {
                uri: e,
                event: t
            });
        }
        e.exports = function(e, n) {
            if (!e) throw "missing uri";
            var o = document.head || document.head.getElementsByTagName("head")[0], i = document.createElement("script");
            i.type = "text/javascript", "function" == typeof n && (i.onerror = t.bind(null, e, n), 
            i.onload = r.bind(null, e, n)), o.appendChild(i), i.src = e;
        };
    }
});