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
    }, t.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", t(t.s = 341);
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
    2: function(e, n, t) {
        "use strict";
        t.d(n, "y", function() {
            return d;
        }), t.d(n, "s", function() {
            return l;
        }), t.d(n, "d", function() {
            return f;
        }), t.d(n, "p", function() {
            return p;
        }), t.d(n, "j", function() {
            return m;
        }), t.d(n, "n", function() {
            return g;
        }), t.d(n, "cb", function() {
            return h;
        }), t.d(n, "ab", function() {
            return _;
        }), t.d(n, "G", function() {
            return v;
        }), t.d(n, "e", function() {
            return b;
        }), t.d(n, "D", function() {
            return w;
        }), t.d(n, "q", function() {
            return y;
        }), t.d(n, "O", function() {
            return S;
        }), t.d(n, "P", function() {
            return O;
        }), t.d(n, "o", function() {
            return j;
        }), t.d(n, "F", function() {
            return G;
        }), t.d(n, "i", function() {
            return P;
        }), t.d(n, "N", function() {
            return E;
        }), t.d(n, "bb", function() {
            return x;
        }), t.d(n, "Q", function() {
            return D;
        }), t.d(n, "S", function() {
            return R;
        }), t.d(n, "T", function() {
            return F;
        }), t.d(n, "V", function() {
            return I;
        }), t.d(n, "W", function() {
            return A;
        }), t.d(n, "U", function() {
            return C;
        }), t.d(n, "J", function() {
            return T;
        }), t.d(n, "I", function() {
            return q;
        }), t.d(n, "a", function() {
            return M;
        }), t.d(n, "H", function() {
            return k;
        }), t.d(n, "db", function() {
            return U;
        }), t.d(n, "c", function() {
            return L;
        }), t.d(n, "E", function() {
            return H;
        }), t.d(n, "u", function() {
            return W;
        }), t.d(n, "A", function() {
            return N;
        }), t.d(n, "w", function() {
            return B;
        }), t.d(n, "M", function() {
            return z;
        }), t.d(n, "k", function() {
            return X;
        }), t.d(n, "b", function() {
            return Q;
        }), t.d(n, "r", function() {
            return $;
        }), t.d(n, "m", function() {
            return J;
        }), t.d(n, "x", function() {
            return K;
        }), t.d(n, "h", function() {
            return V;
        }), t.d(n, "v", function() {
            return Y;
        }), t.d(n, "l", function() {
            return Z;
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
            return se;
        }), t.d(n, "t", function() {
            return de;
        }), t.d(n, "K", function() {
            return le;
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
        var s = function(e) {
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
        }, d = function() {
            return s("load");
        }, l = function() {
            return s(r.a.InjectDocsRequirements);
        }, f = function() {
            return s(r.a.EnsureLoggedIntoFirebase);
        }, p = function(e, n) {
            return s(r.a.GetSpeech, {
                mathML: e,
                settings: n
            });
        }, m = function() {
            return s(r.a.GetLicense);
        }, g = function() {
            return s(r.a.GetProfile);
        }, h = function(e, n, t) {
            return s(r.a.UpdateProfile, {
                options: e,
                profile: n,
                customOptions: t
            });
        }, _ = function(e) {
            return s(r.a.UpdateFavourites, {
                items: e
            });
        }, v = function(e) {
            return s(r.a.RemoveFavourite, {
                item: e
            });
        }, b = function(e) {
            return s(r.a.EnterProductCode, {
                code: e
            });
        }, w = function(e, n) {
            return s(r.a.OpenGoogleFormsPicker, {
                url: e,
                picker: n
            });
        }, y = function(e) {
            return s(r.a.GoogleFormsPickerLoaded, {
                location: e
            });
        }, S = function(e) {
            return s(r.a.SetProfileType, {
                type: e
            });
        }, O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return s(r.a.SetShowEquatioOnFirstRun, {
                value: e
            });
        }, j = function() {
            return s(r.a.GetShouldShowEquatioOnFirstRun);
        }, G = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return s(r.a.RegisterCompanionAppTarget, {
                platform: e,
                hostname: n
            });
        }, P = function() {
            return s(r.a.GetHandwritingCount);
        }, E = function(e) {
            return s(r.a.SetHandwritingCount, {
                count: e
            });
        }, x = function(e) {
            return s(r.a.UpdateGoogleSheetEquations, {
                spreadsheetId: e
            });
        }, D = function() {
            return s(r.a.ShowHandwritingExceededReminder);
        }, R = function() {
            return s(r.a.ShowPredictionReminder);
        }, F = function() {
            return s(r.a.ShowRenewalReminder);
        }, I = function() {
            return s(r.a.ShowTrialExpiration);
        }, A = function() {
            return s(r.a.ShowUpgradeReminder);
        }, C = function() {
            return s(r.a.ShowReviewReminder);
        }, T = function(e) {
            return s(r.a.SendAnalyticsScreen, {
                screenName: e
            });
        }, q = function(e) {
            return s(r.a.SendAnalyticsEvent, {
                category: e
            });
        }, M = function() {
            return s(r.a.CaptureScreenshot);
        }, k = function(e, n, t, o, i) {
            return s(r.a.ScanMathpixOcr, {
                base64: e,
                x: n,
                y: t,
                width: o,
                height: i
            });
        }, U = function(e, n) {
            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return s(r.a.UploadImageToProxy, {
                url: e,
                base64: n,
                isPermanent: t
            });
        }, L = function() {
            return s(r.a.DismissReviewReminder);
        }, H = function(e) {
            return s(r.a.OpenMathspace, {
                platformIntegrationId: e
            });
        }, W = function() {
            return s(r.a.InjectWebPageToolbar);
        }, N = function(e) {
            return s(r.a.MathDiscovered, {
                value: e
            });
        }, B = function() {
            return s(r.a.IsDiscoverabilityFirstTime);
        }, z = function(e) {
            return s(r.a.SetDiscoverabilityEnabled, {
                value: e
            });
        }, X = function() {
            return s(r.a.GetMathDiscoverability);
        }, Q = function(e) {
            return s(r.a.DismissGSuiteMathDiscover, {
                options: e
            });
        }, $ = function() {
            return s(r.a.HasGSuiteDiscoverOverlayShown);
        }, J = function() {
            return s(r.a.GetPlatformOs);
        }, K = function() {
            return s(r.a.IsLockedForms);
        }, V = function() {
            return s(r.a.GetCurrentDisabledFeatures);
        }, Y = function(e, n, t, o) {
            return s(r.a.InsertImageGoogleApi, {
                url: e,
                width: n,
                height: t,
                additionalOptions: o
            });
        }, Z = function() {
            return s(r.a.GetMolecularFilter);
        }, ee = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return s(r.a.ShowInfoPopup, {
                popupType: e,
                options: n
            });
        }, ne = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return s(r.a.OfficeAddToClipboard, {
                content: e,
                isText: n
            });
        }, te = function(e) {
            return s(r.a.ExtractLatexFromUrl, {
                url: e
            });
        }, re = function(e) {
            return s(r.a.OfficeCanUseApp, {
                appName: e
            });
        }, oe = function() {
            var e = i(function*() {
                return s(r.a.SwitchAccount);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), ie = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return s(r.a.LoginToFirebase, {
                tabId: e
            });
        }, ue = function(e, n) {
            return s(r.a.SetCanShowClipboardPopup, {
                value: e,
                copyBtn: n
            });
        }, ae = function(e) {
            return s(r.a.GetCanShowClipboardPopup, {
                copyBtn: e
            });
        }, ce = function(e) {
            return s(r.a.SpeechEngineSpeak, {
                text: e
            });
        }, se = function() {
            return s(r.a.SpeechEngineStop);
        }, de = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return s(r.a.InjectHtmlEditorApi, {
                fromToolbar: e
            });
        }, le = function(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return s(r.a.HtmlEditorApiAction, {
                command: e,
                value: n,
                fromEditor: t,
                targetFrame: o
            });
        };
    },
    341: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(36), o = t.n(r), i = t(2), u = t(6);
        function a(e, n) {
            return f(e) || l(e, n) || s(e, n) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(e, n) {
            if (e) {
                if ("string" == typeof e) return d(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? d(e, n) : void 0;
            }
        }
        function d(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
            return r;
        }
        function l(e, n) {
            var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != t) {
                var r, o, i = [], u = !0, a = !1;
                try {
                    for (t = t.call(e); !(u = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); u = !0) ;
                } catch (e) {
                    a = !0, o = e;
                } finally {
                    try {
                        u || null == t.return || t.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return i;
            }
        }
        function f(e) {
            if (Array.isArray(e)) return e;
        }
        var p = function() {
            return a(window.location.pathname.match(/\/d\/(.*?)(?:\/.*?|$)/), 2)[1];
        }, m = t(47);
        function g(e, n, t, r, o, i, u) {
            try {
                var a = e[i](u), c = a.value;
            } catch (e) {
                return void t(e);
            }
            a.done ? n(c) : Promise.resolve(c).then(r, o);
        }
        function h(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(n, t);
                    function u(e) {
                        g(i, r, o, u, a, "next", e);
                    }
                    function a(e) {
                        g(i, r, o, u, a, "throw", e);
                    }
                    u(void 0);
                });
            };
        }
        window.equatioCoreChunkLoading = "chrome", window.equatioCoreBaseUrl = "".concat("chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc", "/");
        var _ = !1, v = function() {
            Object(u.b)() && Object(u.c)() === u.a.GoogleSheets && Object(i.bb)(p());
        }, b = function() {
            if (document.querySelector(".equatio-onboarding-step-2")) window.postMessage("EQUATIO_ONBOARDING_NEXT_STEP", window.location.origin); else if (_) {
                var e = document.querySelector(".equatio-toolbar-wrapper");
                e && (e.style.display = "block" === e.style.display ? "none" : "block", "block" === e.style.display && (Object(m.a)(), 
                v()));
            } else _ = !0, o()("chrome-extension://".concat(chrome.runtime.id, "/content/docsMessagingApi.js")), 
            Object(i.s)(), v();
        };
        chrome.runtime.onMessage.addListener(function(e) {
            "load" === e.action && b();
        }), h(function*() {
            Object(u.c)() === u.a.GoogleDocs && ((yield Object(i.o)()) && (window.location.hash = "equatio-onboarding", 
            b(), yield Object(i.P)(!1)));
        })();
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
    },
    47: function(e, n, t) {
        "use strict";
        n.a = function() {
            var e = document.querySelector("#equatio-toolbar-shadow-host").shadowRoot.querySelector(".equatio-toolbar-button");
            e && setTimeout(function() {
                e.focus();
            }, 50);
        };
    },
    6: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return r;
        }), t.d(n, "d", function() {
            return i;
        }), t.d(n, "c", function() {
            return u;
        });
        var r = {
            GoogleDocs: "Google Docs",
            GoogleForms: "Google Forms",
            GoogleSlides: "Google Slides",
            GoogleDrawings: "Google Drawings",
            GoogleSheets: "Google Sheets"
        }, o = {
            document: r.GoogleDocs,
            forms: r.GoogleForms,
            presentation: r.GoogleSlides,
            drawings: r.GoogleDrawings,
            spreadsheets: r.GoogleSheets
        }, i = function() {
            var e = window.location, n = e.host, t = e.pathname;
            if ("docs.google.com" === n) return t.indexOf("/forms/") >= 0 && (t.endsWith("/viewform") || t.endsWith("/formResponse") || t.endsWith("/prefill") || t.endsWith("/startquiz") || t.endsWith("/viewscore"));
        }, u = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location, n = e.host, t = e.pathname;
            if ("docs.google.com" === n) {
                var r, i = t.split("/").filter(function(e) {
                    return !!e;
                });
                return r = t.startsWith("/a/") ? i[2] : i[0], o[r];
            }
        };
        n.b = function() {
            return -1 === window.location.href.indexOf("/document/");
        };
    }
});