!function(e) {
    function t(t) {
        for (var n, o, i = t[0], u = t[1], a = 0, c = []; a < i.length; a++) o = i[a], Object.prototype.hasOwnProperty.call(r, o) && r[o] && c.push(r[o][0]), 
        r[o] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (l && l(t); c.length; ) c.shift()();
    }
    var n = {}, r = {
        13: 0
    };
    function o(e) {
        return i.p + "" + e + ".9cd5a99f5fdb2d58d1eb.js";
    }
    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
    }
    i.e = function(e) {
        var t = [], n = function(e) {
            const t = o(e);
            chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", {
                action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
                scriptPath: t
            }, function() {
                chrome.runtime.lastError && console.error("Failed to load dependency", t);
                const n = r[e];
                0 !== n && (n && n[1](), r[e] = void 0);
            });
        }, u = function(e) {
            var t, n = document.getElementsByTagName("head")[0], u = document.createElement("script");
            u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = o(e), 
            0 !== u.src.indexOf(window.location.origin + "/") && (u.crossOrigin = "anonymous"), 
            t = function(t) {
                u.onerror = u.onload = null, clearTimeout(a);
                var n = r[e];
                if (0 !== n) {
                    if (n) {
                        var o = t && ("load" === t.type ? "missing" : t.type), i = t && t.target && t.target.src, c = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
                        c.type = o, c.request = i, n[1](c);
                    }
                    r[e] = void 0;
                }
            };
            var a = setTimeout(function() {
                t({
                    type: "timeout",
                    target: u
                });
            }, 12e4);
            u.onerror = u.onload = t, n.appendChild(u);
        }, a = r[e];
        if (0 !== a) if (a) t.push(a[2]); else {
            var c = new Promise(function(t, n) {
                a = r[e] = [ t, n ];
            });
            t.push(a[2] = c), "chrome" === window.equatioCoreChunkLoading ? n(e) : u(e);
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
        }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function(t) {
            return e[t];
        }.bind(null, r));
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
    var u = window.equatioChromeJsonp = window.equatioChromeJsonp || [], a = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var c = 0; c < u.length; c++) t(u[c]);
    var l = a;
    i(i.s = 323);
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
    1: function(e, t, n) {
        "use strict";
        e.exports = n(84);
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "y", function() {
            return f;
        }), n.d(t, "s", function() {
            return s;
        }), n.d(t, "d", function() {
            return d;
        }), n.d(t, "p", function() {
            return p;
        }), n.d(t, "j", function() {
            return m;
        }), n.d(t, "n", function() {
            return h;
        }), n.d(t, "cb", function() {
            return y;
        }), n.d(t, "ab", function() {
            return g;
        }), n.d(t, "G", function() {
            return v;
        }), n.d(t, "e", function() {
            return _;
        }), n.d(t, "D", function() {
            return b;
        }), n.d(t, "q", function() {
            return S;
        }), n.d(t, "O", function() {
            return w;
        }), n.d(t, "P", function() {
            return O;
        }), n.d(t, "o", function() {
            return j;
        }), n.d(t, "F", function() {
            return P;
        }), n.d(t, "i", function() {
            return E;
        }), n.d(t, "N", function() {
            return A;
        }), n.d(t, "bb", function() {
            return C;
        }), n.d(t, "Q", function() {
            return x;
        }), n.d(t, "S", function() {
            return R;
        }), n.d(t, "T", function() {
            return k;
        }), n.d(t, "V", function() {
            return I;
        }), n.d(t, "W", function() {
            return q;
        }), n.d(t, "U", function() {
            return F;
        }), n.d(t, "J", function() {
            return T;
        }), n.d(t, "I", function() {
            return D;
        }), n.d(t, "a", function() {
            return G;
        }), n.d(t, "H", function() {
            return M;
        }), n.d(t, "db", function() {
            return L;
        }), n.d(t, "c", function() {
            return U;
        }), n.d(t, "E", function() {
            return $;
        }), n.d(t, "u", function() {
            return H;
        }), n.d(t, "A", function() {
            return N;
        }), n.d(t, "w", function() {
            return B;
        }), n.d(t, "M", function() {
            return J;
        }), n.d(t, "k", function() {
            return V;
        }), n.d(t, "b", function() {
            return W;
        }), n.d(t, "r", function() {
            return z;
        }), n.d(t, "m", function() {
            return Y;
        }), n.d(t, "x", function() {
            return Q;
        }), n.d(t, "h", function() {
            return X;
        }), n.d(t, "v", function() {
            return K;
        }), n.d(t, "l", function() {
            return Z;
        }), n.d(t, "R", function() {
            return ee;
        }), n.d(t, "B", function() {
            return te;
        }), n.d(t, "f", function() {
            return ne;
        }), n.d(t, "C", function() {
            return re;
        }), n.d(t, "Z", function() {
            return oe;
        }), n.d(t, "z", function() {
            return ie;
        }), n.d(t, "L", function() {
            return ue;
        }), n.d(t, "g", function() {
            return ae;
        }), n.d(t, "X", function() {
            return ce;
        }), n.d(t, "Y", function() {
            return le;
        }), n.d(t, "t", function() {
            return fe;
        }), n.d(t, "K", function() {
            return se;
        });
        var r = n(0);
        function o(e, t, n, r, o, i, u) {
            try {
                var a = e[i](u), c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function i(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    var u = e.apply(t, n);
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
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var l = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(function(n, r) {
                chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", a({
                    action: e
                }, t), function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = t.success, i = t.failure;
                    return chrome.runtime.lastError ? (console.error("Action failed:", e, chrome.runtime.lastError.message), 
                    r(chrome.runtime.lastError)) : i ? (console.error("Action failed:", e, i), r(i)) : n(o);
                });
            });
        }, f = function() {
            return l("load");
        }, s = function() {
            return l(r.a.InjectDocsRequirements);
        }, d = function() {
            return l(r.a.EnsureLoggedIntoFirebase);
        }, p = function(e, t) {
            return l(r.a.GetSpeech, {
                mathML: e,
                settings: t
            });
        }, m = function() {
            return l(r.a.GetLicense);
        }, h = function() {
            return l(r.a.GetProfile);
        }, y = function(e, t, n) {
            return l(r.a.UpdateProfile, {
                options: e,
                profile: t,
                customOptions: n
            });
        }, g = function(e) {
            return l(r.a.UpdateFavourites, {
                items: e
            });
        }, v = function(e) {
            return l(r.a.RemoveFavourite, {
                item: e
            });
        }, _ = function(e) {
            return l(r.a.EnterProductCode, {
                code: e
            });
        }, b = function(e, t) {
            return l(r.a.OpenGoogleFormsPicker, {
                url: e,
                picker: t
            });
        }, S = function(e) {
            return l(r.a.GoogleFormsPickerLoaded, {
                location: e
            });
        }, w = function(e) {
            return l(r.a.SetProfileType, {
                type: e
            });
        }, O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return l(r.a.SetShowEquatioOnFirstRun, {
                value: e
            });
        }, j = function() {
            return l(r.a.GetShouldShowEquatioOnFirstRun);
        }, P = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return l(r.a.RegisterCompanionAppTarget, {
                platform: e,
                hostname: t
            });
        }, E = function() {
            return l(r.a.GetHandwritingCount);
        }, A = function(e) {
            return l(r.a.SetHandwritingCount, {
                count: e
            });
        }, C = function(e) {
            return l(r.a.UpdateGoogleSheetEquations, {
                spreadsheetId: e
            });
        }, x = function() {
            return l(r.a.ShowHandwritingExceededReminder);
        }, R = function() {
            return l(r.a.ShowPredictionReminder);
        }, k = function() {
            return l(r.a.ShowRenewalReminder);
        }, I = function() {
            return l(r.a.ShowTrialExpiration);
        }, q = function() {
            return l(r.a.ShowUpgradeReminder);
        }, F = function() {
            return l(r.a.ShowReviewReminder);
        }, T = function(e) {
            return l(r.a.SendAnalyticsScreen, {
                screenName: e
            });
        }, D = function(e) {
            return l(r.a.SendAnalyticsEvent, {
                category: e
            });
        }, G = function() {
            return l(r.a.CaptureScreenshot);
        }, M = function(e, t, n, o, i) {
            return l(r.a.ScanMathpixOcr, {
                base64: e,
                x: t,
                y: n,
                width: o,
                height: i
            });
        }, L = function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return l(r.a.UploadImageToProxy, {
                url: e,
                base64: t,
                isPermanent: n
            });
        }, U = function() {
            return l(r.a.DismissReviewReminder);
        }, $ = function(e) {
            return l(r.a.OpenMathspace, {
                platformIntegrationId: e
            });
        }, H = function() {
            return l(r.a.InjectWebPageToolbar);
        }, N = function(e) {
            return l(r.a.MathDiscovered, {
                value: e
            });
        }, B = function() {
            return l(r.a.IsDiscoverabilityFirstTime);
        }, J = function(e) {
            return l(r.a.SetDiscoverabilityEnabled, {
                value: e
            });
        }, V = function() {
            return l(r.a.GetMathDiscoverability);
        }, W = function(e) {
            return l(r.a.DismissGSuiteMathDiscover, {
                options: e
            });
        }, z = function() {
            return l(r.a.HasGSuiteDiscoverOverlayShown);
        }, Y = function() {
            return l(r.a.GetPlatformOs);
        }, Q = function() {
            return l(r.a.IsLockedForms);
        }, X = function() {
            return l(r.a.GetCurrentDisabledFeatures);
        }, K = function(e, t, n, o) {
            return l(r.a.InsertImageGoogleApi, {
                url: e,
                width: t,
                height: n,
                additionalOptions: o
            });
        }, Z = function() {
            return l(r.a.GetMolecularFilter);
        }, ee = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return l(r.a.ShowInfoPopup, {
                popupType: e,
                options: t
            });
        }, te = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return l(r.a.OfficeAddToClipboard, {
                content: e,
                isText: t
            });
        }, ne = function(e) {
            return l(r.a.ExtractLatexFromUrl, {
                url: e
            });
        }, re = function(e) {
            return l(r.a.OfficeCanUseApp, {
                appName: e
            });
        }, oe = function() {
            var e = i(function*() {
                return l(r.a.SwitchAccount);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), ie = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return l(r.a.LoginToFirebase, {
                tabId: e
            });
        }, ue = function(e, t) {
            return l(r.a.SetCanShowClipboardPopup, {
                value: e,
                copyBtn: t
            });
        }, ae = function(e) {
            return l(r.a.GetCanShowClipboardPopup, {
                copyBtn: e
            });
        }, ce = function(e) {
            return l(r.a.SpeechEngineSpeak, {
                text: e
            });
        }, le = function() {
            return l(r.a.SpeechEngineStop);
        }, fe = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return l(r.a.InjectHtmlEditorApi, {
                fromToolbar: e
            });
        }, se = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return l(r.a.HtmlEditorApiAction, {
                command: e,
                value: t,
                fromEditor: n,
                targetFrame: o
            });
        };
    },
    323: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            var t = n(95), r = n(2);
            function o(e, t) {
                return l(e) || c(e, t) || u(e, t) || i();
            }
            function i() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function u(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
                }
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function c(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], u = !0, a = !1;
                    try {
                        for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0) ;
                    } catch (e) {
                        a = !0, o = e;
                    } finally {
                        try {
                            u || null == n.return || n.return();
                        } finally {
                            if (a) throw o;
                        }
                    }
                    return i;
                }
            }
            function l(e) {
                if (Array.isArray(e)) return e;
            }
            function f(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u), c = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o);
            }
            function s(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function u(e) {
                            f(i, r, o, u, a, "next", e);
                        }
                        function a(e) {
                            f(i, r, o, u, a, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            window.equatioCoreChunkLoading = "chrome", s(function*() {
                var i, u = document.querySelector("#equatio-math-discoverability");
                u && document.body.removeChild(u);
                try {
                    i = yield Object(t.a)(document);
                } catch (e) {}
                var a = i && i.hasMath;
                if (s(function*() {
                    yield Object(r.A)(a);
                })(), a) {
                    var c = yield Object(r.w)();
                    if ((u = document.createElement("div")).id = "equatio-math-discoverability", document.body.appendChild(u), 
                    c) {
                        var l = o(yield Promise.all([ n.e(0).then(n.t.bind(null, 42, 7)), Promise.all([ n.e(1), n.e(0), n.e(22), n.e(26) ]).then(n.bind(null, 350)), Promise.all([ n.e(1), n.e(24) ]).then(n.bind(null, 13)), n.e(25).then(n.bind(null, 21)) ]), 4), f = l[0].render, d = l[1].default, p = l[2].IntlProvider, m = l[3], h = m.getSupportedLocaleForLanguage, y = m.getMessagesForLanguage;
                        f(e.createElement(p, {
                            locale: h(),
                            messages: y()
                        }, e.createElement(d, null)), u);
                    } else document.querySelector("#equatio-toolbar-shadow-host") || (window.equatioMathDiscovered = !0, 
                    Object(r.u)());
                }
            })();
        }.call(this, n(1));
    },
    36: function(e, t) {
        function n(e, t, n) {
            t(new URIError(n.target.src + " could not be loaded"), n);
        }
        function r(e, t, n) {
            t(null, {
                uri: e,
                event: n
            });
        }
        e.exports = function(e, t) {
            if (!e) throw "missing uri";
            var o = document.head || document.head.getElementsByTagName("head")[0], i = document.createElement("script");
            i.type = "text/javascript", "function" == typeof t && (i.onerror = n.bind(null, e, t), 
            i.onload = r.bind(null, e, t)), o.appendChild(i), i.src = e;
        };
    },
    64: function(e, t, n) {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/        var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
        function u(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        }
        function a() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e];
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
            } catch (e) {
                return !1;
            }
        }
        e.exports = a() ? Object.assign : function(e, t) {
            for (var n, a, c = u(e), l = 1; l < arguments.length; l++) {
                for (var f in n = Object(arguments[l])) o.call(n, f) && (c[f] = n[f]);
                if (r) {
                    a = r(n);
                    for (var s = 0; s < a.length; s++) i.call(n, a[s]) && (c[a[s]] = n[a[s]]);
                }
            }
            return c;
        };
    },
    84: function(e, t, n) {
        "use strict";
        /** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */        var r = n(64), o = "function" == typeof Symbol && Symbol.for, i = o ? Symbol.for("react.element") : 60103, u = o ? Symbol.for("react.portal") : 60106, a = o ? Symbol.for("react.fragment") : 60107, c = o ? Symbol.for("react.strict_mode") : 60108, l = o ? Symbol.for("react.profiler") : 60114, f = o ? Symbol.for("react.provider") : 60109, s = o ? Symbol.for("react.context") : 60110, d = o ? Symbol.for("react.forward_ref") : 60112, p = o ? Symbol.for("react.suspense") : 60113, m = o ? Symbol.for("react.memo") : 60115, h = o ? Symbol.for("react.lazy") : 60116, y = "function" == typeof Symbol && Symbol.iterator;
        function g(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var v = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, _ = {};
        function b(e, t, n) {
            this.props = e, this.context = t, this.refs = _, this.updater = n || v;
        }
        function S() {}
        function w(e, t, n) {
            this.props = e, this.context = t, this.refs = _, this.updater = n || v;
        }
        b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e) throw Error(g(85));
            this.updater.enqueueSetState(this, e, t, "setState");
        }, b.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }, S.prototype = b.prototype;
        var O = w.prototype = new S();
        O.constructor = w, r(O, b.prototype), O.isPureReactComponent = !0;
        var j = {
            current: null
        }, P = Object.prototype.hasOwnProperty, E = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function A(e, t, n) {
            var r, o = {}, u = null, a = null;
            if (null != t) for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (u = "" + t.key), 
            t) P.call(t, r) && !E.hasOwnProperty(r) && (o[r] = t[r]);
            var c = arguments.length - 2;
            if (1 === c) o.children = n; else if (1 < c) {
                for (var l = Array(c), f = 0; f < c; f++) l[f] = arguments[f + 2];
                o.children = l;
            }
            if (e && e.defaultProps) for (r in c = e.defaultProps) void 0 === o[r] && (o[r] = c[r]);
            return {
                $$typeof: i,
                type: e,
                key: u,
                ref: a,
                props: o,
                _owner: j.current
            };
        }
        function C(e, t) {
            return {
                $$typeof: i,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            };
        }
        function x(e) {
            return "object" == typeof e && null !== e && e.$$typeof === i;
        }
        function R(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, function(e) {
                return t[e];
            });
        }
        var k = /\/+/g, I = [];
        function q(e, t, n, r) {
            if (I.length) {
                var o = I.pop();
                return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o;
            }
            return {
                result: e,
                keyPrefix: t,
                func: n,
                context: r,
                count: 0
            };
        }
        function F(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 
            10 > I.length && I.push(e);
        }
        function T(e, t, n, r) {
            var o = typeof e;
            "undefined" !== o && "boolean" !== o || (e = null);
            var a = !1;
            if (null === e) a = !0; else switch (o) {
              case "string":
              case "number":
                a = !0;
                break;

              case "object":
                switch (e.$$typeof) {
                  case i:
                  case u:
                    a = !0;
                }
            }
            if (a) return n(r, e, "" === t ? "." + G(e, 0) : t), 1;
            if (a = 0, t = "" === t ? "." : t + ":", Array.isArray(e)) for (var c = 0; c < e.length; c++) {
                var l = t + G(o = e[c], c);
                a += T(o, l, n, r);
            } else if (null === e || "object" != typeof e ? l = null : l = "function" == typeof (l = y && e[y] || e["@@iterator"]) ? l : null, 
            "function" == typeof l) for (e = l.call(e), c = 0; !(o = e.next()).done; ) a += T(o = o.value, l = t + G(o, c++), n, r); else if ("object" === o) throw n = "" + e, 
            Error(g(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
            return a;
        }
        function D(e, t, n) {
            return null == e ? 0 : T(e, "", t, n);
        }
        function G(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? R(e.key) : t.toString(36);
        }
        function M(e, t) {
            e.func.call(e.context, t, e.count++);
        }
        function L(e, t, n) {
            var r = e.result, o = e.keyPrefix;
            e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? U(e, r, n, function(e) {
                return e;
            }) : null != e && (x(e) && (e = C(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(k, "$&/") + "/") + n)), 
            r.push(e));
        }
        function U(e, t, n, r, o) {
            var i = "";
            null != n && (i = ("" + n).replace(k, "$&/") + "/"), D(e, L, t = q(t, i, r, o)), 
            F(t);
        }
        var $ = {
            current: null
        };
        function H() {
            var e = $.current;
            if (null === e) throw Error(g(321));
            return e;
        }
        var N = {
            ReactCurrentDispatcher: $,
            ReactCurrentBatchConfig: {
                suspense: null
            },
            ReactCurrentOwner: j,
            IsSomeRendererActing: {
                current: !1
            },
            assign: r
        };
        t.Children = {
            map: function(e, t, n) {
                if (null == e) return e;
                var r = [];
                return U(e, r, null, t, n), r;
            },
            forEach: function(e, t, n) {
                if (null == e) return e;
                D(e, M, t = q(null, null, t, n)), F(t);
            },
            count: function(e) {
                return D(e, function() {
                    return null;
                }, null);
            },
            toArray: function(e) {
                var t = [];
                return U(e, t, null, function(e) {
                    return e;
                }), t;
            },
            only: function(e) {
                if (!x(e)) throw Error(g(143));
                return e;
            }
        }, t.Component = b, t.Fragment = a, t.Profiler = l, t.PureComponent = w, t.StrictMode = c, 
        t.Suspense = p, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, t.cloneElement = function(e, t, n) {
            if (null === e || void 0 === e) throw Error(g(267, e));
            var o = r({}, e.props), u = e.key, a = e.ref, c = e._owner;
            if (null != t) {
                if (void 0 !== t.ref && (a = t.ref, c = j.current), void 0 !== t.key && (u = "" + t.key), 
                e.type && e.type.defaultProps) var l = e.type.defaultProps;
                for (f in t) P.call(t, f) && !E.hasOwnProperty(f) && (o[f] = void 0 === t[f] && void 0 !== l ? l[f] : t[f]);
            }
            var f = arguments.length - 2;
            if (1 === f) o.children = n; else if (1 < f) {
                l = Array(f);
                for (var s = 0; s < f; s++) l[s] = arguments[s + 2];
                o.children = l;
            }
            return {
                $$typeof: i,
                type: e.type,
                key: u,
                ref: a,
                props: o,
                _owner: c
            };
        }, t.createContext = function(e, t) {
            return void 0 === t && (t = null), (e = {
                $$typeof: s,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = {
                $$typeof: f,
                _context: e
            }, e.Consumer = e;
        }, t.createElement = A, t.createFactory = function(e) {
            var t = A.bind(null, e);
            return t.type = e, t;
        }, t.createRef = function() {
            return {
                current: null
            };
        }, t.forwardRef = function(e) {
            return {
                $$typeof: d,
                render: e
            };
        }, t.isValidElement = x, t.lazy = function(e) {
            return {
                $$typeof: h,
                _ctor: e,
                _status: -1,
                _result: null
            };
        }, t.memo = function(e, t) {
            return {
                $$typeof: m,
                type: e,
                compare: void 0 === t ? null : t
            };
        }, t.useCallback = function(e, t) {
            return H().useCallback(e, t);
        }, t.useContext = function(e, t) {
            return H().useContext(e, t);
        }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
            return H().useEffect(e, t);
        }, t.useImperativeHandle = function(e, t, n) {
            return H().useImperativeHandle(e, t, n);
        }, t.useLayoutEffect = function(e, t) {
            return H().useLayoutEffect(e, t);
        }, t.useMemo = function(e, t) {
            return H().useMemo(e, t);
        }, t.useReducer = function(e, t, n) {
            return H().useReducer(e, t, n);
        }, t.useRef = function(e) {
            return H().useRef(e);
        }, t.useState = function(e) {
            return H().useState(e);
        }, t.version = "16.13.1";
    },
    95: function(e, t, n) {
        "use strict";
        var r = n(36), o = n.n(r);
        function i(e, t, n, r, o, i, u) {
            try {
                var a = e[i](u), c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function u(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var u = e.apply(t, n);
                    function a(e) {
                        i(u, r, o, a, c, "next", e);
                    }
                    function c(e) {
                        i(u, r, o, a, c, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        function a(e) {
            return s(e) || f(e) || l(e) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
            }
        }
        function f(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }
        function s(e) {
            if (Array.isArray(e)) return d(e);
        }
        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var p = function() {
            return {
                hasMath: !1,
                nodes: []
            };
        }, m = function(e) {
            return "block" === window.getComputedStyle(e, "").getPropertyValue("display");
        }, h = function(e) {
            for (var t = e; t.parentNode && !m(t); ) t = t.parentNode;
            return t;
        }, y = function(e) {
            return [].concat(a(Array.from(e.querySelectorAll("[id^=MathJax-Element-][id$=-Frame]")).map(function(e) {
                return e.querySelector(".mjx-math, [id^=MathJax-Span-]");
            })), a(Array.from(e.querySelectorAll("[role='math']"))));
        }, g = function(e) {
            return Array.from(e.querySelectorAll(".katex-html"));
        }, v = function(e) {
            return a(Array.from(e.querySelectorAll("fmath")).filter(function(e) {
                return m(e) || !m(e) && null === e.querySelector("table");
            }));
        }, _ = function(e) {
            return a(Array.from(e.querySelectorAll("img.mwe-math-fallback-image-inline")));
        }, b = function(e) {
            return a(Array.from(e.querySelectorAll("span.texhtml")));
        }, S = function(e) {
            return a(Array.from(e.querySelectorAll("svg[role='math']")).map(function(e) {
                return m(e) ? e : h(e);
            }));
        }, w = function(e) {
            return a(Array.from(e.querySelectorAll('img[src^="https://equatio-api.texthelp.com"]')).filter(function(e) {
                return e.src.includes("png") || e.src.includes("svg");
            }));
        }, O = function(e) {
            return [].concat(a(y(e)), a(g(e)), a(v(e)), a(_(e)), a(b(e)), a(S(e)), a(w(e))).filter(function(e) {
                return e && e.offsetWidth >= 30 && e.offsetHeight >= 5;
            });
        };
        t.a = function() {
            var e = u(function*(e) {
                return new Promise(function(t) {
                    if (0 !== document.length) {
                        var n = function() {
                            var t = O(e);
                            return {
                                hasMath: t.length > 0,
                                nodes: t
                            };
                        }, r = function e() {
                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = r.origin, i = r.data;
                            o === window.location.origin && i && "EQUATIO_DISCOVERABILITY_MATHJAX" === i.action && (window.removeEventListener("message", e), 
                            t(n()));
                        };
                        o()("chrome-extension://".concat(chrome.runtime.id, "/content/mathJaxBundle.js"), function() {
                            window.addEventListener("message", r);
                        });
                    } else p();
                });
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
    }
});