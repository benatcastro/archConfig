!function(e) {
    function t(t) {
        for (var n, o, i = t[0], u = t[1], a = 0, c = []; a < i.length; a++) o = i[a], Object.prototype.hasOwnProperty.call(r, o) && r[o] && c.push(r[o][0]), 
        r[o] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (l && l(t); c.length; ) c.shift()();
    }
    var n = {}, r = {
        12: 0
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
    i(i.s = 324);
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
            return s;
        }), n.d(t, "s", function() {
            return f;
        }), n.d(t, "d", function() {
            return p;
        }), n.d(t, "p", function() {
            return d;
        }), n.d(t, "j", function() {
            return h;
        }), n.d(t, "n", function() {
            return m;
        }), n.d(t, "cb", function() {
            return y;
        }), n.d(t, "ab", function() {
            return v;
        }), n.d(t, "G", function() {
            return g;
        }), n.d(t, "e", function() {
            return b;
        }), n.d(t, "D", function() {
            return _;
        }), n.d(t, "q", function() {
            return w;
        }), n.d(t, "O", function() {
            return S;
        }), n.d(t, "P", function() {
            return O;
        }), n.d(t, "o", function() {
            return j;
        }), n.d(t, "F", function() {
            return E;
        }), n.d(t, "i", function() {
            return x;
        }), n.d(t, "N", function() {
            return C;
        }), n.d(t, "bb", function() {
            return P;
        }), n.d(t, "Q", function() {
            return A;
        }), n.d(t, "S", function() {
            return k;
        }), n.d(t, "T", function() {
            return R;
        }), n.d(t, "V", function() {
            return G;
        }), n.d(t, "W", function() {
            return I;
        }), n.d(t, "U", function() {
            return q;
        }), n.d(t, "J", function() {
            return D;
        }), n.d(t, "I", function() {
            return F;
        }), n.d(t, "a", function() {
            return T;
        }), n.d(t, "H", function() {
            return M;
        }), n.d(t, "db", function() {
            return L;
        }), n.d(t, "c", function() {
            return N;
        }), n.d(t, "E", function() {
            return U;
        }), n.d(t, "u", function() {
            return $;
        }), n.d(t, "A", function() {
            return H;
        }), n.d(t, "w", function() {
            return W;
        }), n.d(t, "M", function() {
            return B;
        }), n.d(t, "k", function() {
            return z;
        }), n.d(t, "b", function() {
            return V;
        }), n.d(t, "r", function() {
            return J;
        }), n.d(t, "m", function() {
            return Z;
        }), n.d(t, "x", function() {
            return K;
        }), n.d(t, "h", function() {
            return Y;
        }), n.d(t, "v", function() {
            return Q;
        }), n.d(t, "l", function() {
            return X;
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
            return se;
        }), n.d(t, "K", function() {
            return fe;
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
        }, s = function() {
            return l("load");
        }, f = function() {
            return l(r.a.InjectDocsRequirements);
        }, p = function() {
            return l(r.a.EnsureLoggedIntoFirebase);
        }, d = function(e, t) {
            return l(r.a.GetSpeech, {
                mathML: e,
                settings: t
            });
        }, h = function() {
            return l(r.a.GetLicense);
        }, m = function() {
            return l(r.a.GetProfile);
        }, y = function(e, t, n) {
            return l(r.a.UpdateProfile, {
                options: e,
                profile: t,
                customOptions: n
            });
        }, v = function(e) {
            return l(r.a.UpdateFavourites, {
                items: e
            });
        }, g = function(e) {
            return l(r.a.RemoveFavourite, {
                item: e
            });
        }, b = function(e) {
            return l(r.a.EnterProductCode, {
                code: e
            });
        }, _ = function(e, t) {
            return l(r.a.OpenGoogleFormsPicker, {
                url: e,
                picker: t
            });
        }, w = function(e) {
            return l(r.a.GoogleFormsPickerLoaded, {
                location: e
            });
        }, S = function(e) {
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
        }, E = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return l(r.a.RegisterCompanionAppTarget, {
                platform: e,
                hostname: t
            });
        }, x = function() {
            return l(r.a.GetHandwritingCount);
        }, C = function(e) {
            return l(r.a.SetHandwritingCount, {
                count: e
            });
        }, P = function(e) {
            return l(r.a.UpdateGoogleSheetEquations, {
                spreadsheetId: e
            });
        }, A = function() {
            return l(r.a.ShowHandwritingExceededReminder);
        }, k = function() {
            return l(r.a.ShowPredictionReminder);
        }, R = function() {
            return l(r.a.ShowRenewalReminder);
        }, G = function() {
            return l(r.a.ShowTrialExpiration);
        }, I = function() {
            return l(r.a.ShowUpgradeReminder);
        }, q = function() {
            return l(r.a.ShowReviewReminder);
        }, D = function(e) {
            return l(r.a.SendAnalyticsScreen, {
                screenName: e
            });
        }, F = function(e) {
            return l(r.a.SendAnalyticsEvent, {
                category: e
            });
        }, T = function() {
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
        }, N = function() {
            return l(r.a.DismissReviewReminder);
        }, U = function(e) {
            return l(r.a.OpenMathspace, {
                platformIntegrationId: e
            });
        }, $ = function() {
            return l(r.a.InjectWebPageToolbar);
        }, H = function(e) {
            return l(r.a.MathDiscovered, {
                value: e
            });
        }, W = function() {
            return l(r.a.IsDiscoverabilityFirstTime);
        }, B = function(e) {
            return l(r.a.SetDiscoverabilityEnabled, {
                value: e
            });
        }, z = function() {
            return l(r.a.GetMathDiscoverability);
        }, V = function(e) {
            return l(r.a.DismissGSuiteMathDiscover, {
                options: e
            });
        }, J = function() {
            return l(r.a.HasGSuiteDiscoverOverlayShown);
        }, Z = function() {
            return l(r.a.GetPlatformOs);
        }, K = function() {
            return l(r.a.IsLockedForms);
        }, Y = function() {
            return l(r.a.GetCurrentDisabledFeatures);
        }, Q = function(e, t, n, o) {
            return l(r.a.InsertImageGoogleApi, {
                url: e,
                width: t,
                height: n,
                additionalOptions: o
            });
        }, X = function() {
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
        }, se = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return l(r.a.InjectHtmlEditorApi, {
                fromToolbar: e
            });
        }, fe = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return l(r.a.HtmlEditorApiAction, {
                command: e,
                value: t,
                fromEditor: n,
                targetFrame: o
            });
        };
    },
    249: function(e, t, n) {
        "use strict";
        var r = n(90), o = n(93), i = n(2);
        function u(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = f(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, u = !0, a = !1;
            return {
                s: function() {
                    n = n.call(e);
                },
                n: function() {
                    var e = n.next();
                    return u = e.done, e;
                },
                e: function(e) {
                    a = !0, i = e;
                },
                f: function() {
                    try {
                        u || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function a(e, t, n, r, o, i, u) {
            try {
                var a = e[i](u), c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function c(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function u(e) {
                        a(i, r, o, u, c, "next", e);
                    }
                    function c(e) {
                        a(i, r, o, u, c, "throw", e);
                    }
                    u(void 0);
                });
            };
        }
        function l(e) {
            return d(e) || p(e) || f(e) || s();
        }
        function s() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function f(e, t) {
            if (e) {
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0;
            }
        }
        function p(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }
        function d(e) {
            if (Array.isArray(e)) return h(e);
        }
        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var m = function() {
            return {
                hasMath: !1,
                nodes: []
            };
        }, y = function(e) {
            return Array.from(e.querySelectorAll("span.typeset"));
        }, v = function(e) {
            return l(Array.from(e.querySelectorAll("image desc")).filter(function(e) {
                return e.textContent.startsWith("<math");
            }).map(function(e) {
                return e.parentNode.parentNode.parentNode.parentNode;
            }));
        }, g = function(e) {
            return l(Array.from(e.querySelectorAll("image desc")).filter(function(e) {
                return e.textContent.endsWith("\u2063");
            }).map(function(e) {
                return e.parentNode.parentNode.parentNode.parentNode;
            }));
        }, b = function() {
            var e = c(function*(e) {
                return new Promise(function(t, n) {
                    Object(r.a)().then(function(n) {
                        return t(n.map(function(t) {
                            return e.querySelector("#editor-".concat(t));
                        }));
                    });
                });
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), _ = function() {
            var e = c(function*(e, t) {
                return "Google Slides" === t ? (yield b(e)).filter(function(e) {
                    return e && e.getBoundingClientRect().width >= 30 && e.getBoundingClientRect().height >= 5;
                }).sort(function(e, t) {
                    return t.getBoundingClientRect().width - e.getBoundingClientRect().height;
                }) : [].concat(l(y(e)), l(v(e)), l(g(e))).filter(function(e) {
                    return e && e.offsetWidth >= 30 && e.offsetHeight >= 5;
                }).sort(function(e, t) {
                    return t.offsetWidth - e.offsetWidth;
                });
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }();
        t.a = function() {
            var e = c(function*(e, t) {
                return new Promise(function(n, r) {
                    if (0 === document.length) return m();
                    n(function() {
                        var n = c(function*() {
                            var n = yield _(e, t);
                            if (n.length > 0) {
                                var r, a = u(n);
                                try {
                                    for (a.s(); !(r = a.n()).done; ) {
                                        var c = r.value, l = c.querySelector("image").href.baseVal;
                                        if ((yield Object(i.f)(l)) || (yield Object(o.a)(l))) return {
                                            hasMath: !0,
                                            node: c
                                        };
                                    }
                                } catch (e) {
                                    a.e(e);
                                } finally {
                                    a.f();
                                }
                            }
                            return {
                                hasMath: !1,
                                node: null
                            };
                        });
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }()());
                });
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }();
    },
    324: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            var t = n(2), r = n(249), o = n(6);
            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
            }
            function u(e, t) {
                return f(e) || s(e, t) || c(e, t) || a();
            }
            function a() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0;
                }
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function s(e, t) {
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
            function f(e) {
                if (Array.isArray(e)) return e;
            }
            function p(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u), c = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o);
            }
            function d(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function u(e) {
                            p(i, r, o, u, a, "next", e);
                        }
                        function a(e) {
                            p(i, r, o, u, a, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            window.equatioCoreChunkLoading = "chrome";
            var h = !1, m = function() {
                var t = d(function*(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (null === document.querySelector(".equatio-toolbar-wrapper")) {
                        var o = document.querySelector("#equatio-gsuite-math-discoverability");
                        if (!o) {
                            (o = document.createElement("div")).id = "equatio-gsuite-math-discoverability", 
                            document.body.appendChild(o);
                            var a = u(yield Promise.all([ n.e(0).then(n.t.bind(null, 42, 7)), Promise.all([ n.e(1), n.e(0), n.e(2), n.e(23), n.e(21) ]).then(n.bind(null, 351)) ]), 2), c = a[0].render, l = a[1].default;
                            c(e.createElement(l, i({
                                math: t
                            }, {
                                hasEquationToolbarOpened: r
                            })), o);
                        }
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            }(), y = function() {
                var e = d(function*(e) {
                    if (!h) {
                        var n;
                        try {
                            n = yield Object(r.a)(document, e);
                        } catch (e) {}
                        var o = n && n.hasMath;
                        d(function*() {
                            yield Object(t.A)(o);
                        })(), o && (h = !0, m(n));
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(), v = function(e) {
                var t = new MutationObserver(function(e) {
                    e.length && Array.prototype.forEach.call(e, function(e) {
                        e.addedNodes && e.addedNodes.length && Array.prototype.forEach.call(e.addedNodes, function(e) {
                            e.classList && "DIV" === e.nodeName && e.parentNode && e.parentNode.parentNode.parentNode && e.parentNode.parentNode.parentNode.classList.contains("kix-page-column") && (t.disconnect(), 
                            y());
                        });
                    });
                });
                t.observe(e.parentNode, {
                    childList: !0,
                    subtree: !0
                });
            };
            d(function*() {
                var e = Object(o.c)();
                yield y(e), "Google Docs" === e && Array.prototype.forEach.call(document.querySelectorAll("div.kix-page-content-wrapper"), v);
            })();
        }.call(this, n(1));
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
            var r = n(91), o = n(92), i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/, c = new RegExp("^" + "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]" + "+");
            function l(e) {
                return (e || "").toString().replace(c, "");
            }
            var s = [ [ "#", "hash" ], [ "?", "query" ], function(e, t) {
                return d(t.protocol) ? e.replace(/\\/g, "/") : e;
            }, [ "/", "pathname" ], [ "@", "auth", 1 ], [ NaN, "host", void 0, 1, 1 ], [ /:(\d+)$/, "port", void 0, 1 ], [ NaN, "hostname", void 0, 1, 1 ] ], f = {
                hash: 1,
                query: 1
            };
            function p(e) {
                var n, r = ("undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}).location || {}, o = {}, u = typeof (e = e || r);
                if ("blob:" === e.protocol) o = new y(unescape(e.pathname), {}); else if ("string" === u) for (n in o = new y(e, {}), 
                f) delete o[n]; else if ("object" === u) {
                    for (n in e) n in f || (o[n] = e[n]);
                    void 0 === o.slashes && (o.slashes = i.test(e.href));
                }
                return o;
            }
            function d(e) {
                return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e;
            }
            function h(e, t) {
                e = l(e), t = t || {};
                var n, r = u.exec(e), o = r[1] ? r[1].toLowerCase() : "", i = !!r[2], a = !!r[3], c = 0;
                return i ? a ? (n = r[2] + r[3] + r[4], c = r[2].length + r[3].length) : (n = r[2] + r[4], 
                c = r[2].length) : a ? (n = r[3] + r[4], c = r[3].length) : n = r[4], "file:" === o ? c >= 2 && (n = n.slice(2)) : d(o) ? n = r[4] : o ? i && (n = n.slice(2)) : c >= 2 && d(t.protocol) && (n = r[4]), 
                {
                    protocol: o,
                    slashes: i || d(o),
                    slashesCount: c,
                    rest: n
                };
            }
            function m(e, t) {
                if ("" === e) return t;
                for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, u = 0; r--; ) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), 
                u++) : u && (0 === r && (i = !0), n.splice(r, 1), u--);
                return i && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/");
            }
            function y(e, t, n) {
                if (e = l(e), !(this instanceof y)) return new y(e, t, n);
                var i, u, c, f, v, g, b = s.slice(), _ = typeof t, w = this, S = 0;
                for ("object" !== _ && "string" !== _ && (n = t, t = null), n && "function" != typeof n && (n = o.parse), 
                t = p(t), i = !(u = h(e || "", t)).protocol && !u.slashes, w.slashes = u.slashes || i && t.slashes, 
                w.protocol = u.protocol || t.protocol || "", e = u.rest, ("file:" === u.protocol && (2 !== u.slashesCount || a.test(e)) || !u.slashes && (u.protocol || u.slashesCount < 2 || !d(w.protocol))) && (b[3] = [ /(.*)/, "pathname" ]); S < b.length; S++) "function" != typeof (f = b[S]) ? (c = f[0], 
                g = f[1], c != c ? w[g] = e : "string" == typeof c ? ~(v = e.indexOf(c)) && ("number" == typeof f[2] ? (w[g] = e.slice(0, v), 
                e = e.slice(v + f[2])) : (w[g] = e.slice(v), e = e.slice(0, v))) : (v = c.exec(e)) && (w[g] = v[1], 
                e = e.slice(0, v.index)), w[g] = w[g] || i && f[3] && t[g] || "", f[4] && (w[g] = w[g].toLowerCase())) : e = f(e, w);
                n && (w.query = n(w.query)), i && t.slashes && "/" !== w.pathname.charAt(0) && ("" !== w.pathname || "" !== t.pathname) && (w.pathname = m(w.pathname, t.pathname)), 
                "/" !== w.pathname.charAt(0) && d(w.protocol) && (w.pathname = "/" + w.pathname), 
                r(w.port, w.protocol) || (w.host = w.hostname, w.port = ""), w.username = w.password = "", 
                w.auth && (f = w.auth.split(":"), w.username = f[0] || "", w.password = f[1] || ""), 
                w.origin = "file:" !== w.protocol && d(w.protocol) && w.host ? w.protocol + "//" + w.host : "null", 
                w.href = w.toString();
            }
            function v(e, t, n) {
                var i = this;
                switch (e) {
                  case "query":
                    "string" == typeof t && t.length && (t = (n || o.parse)(t)), i[e] = t;
                    break;

                  case "port":
                    i[e] = t, r(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, 
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
                        var u = "pathname" === e ? "/" : "#";
                        i[e] = t.charAt(0) !== u ? u + t : t;
                    } else i[e] = t;
                    break;

                  default:
                    i[e] = t;
                }
                for (var a = 0; a < s.length; a++) {
                    var c = s[a];
                    c[4] && (i[c[1]] = i[c[1]].toLowerCase());
                }
                return i.origin = "file:" !== i.protocol && d(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", 
                i.href = i.toString(), i;
            }
            function g(e) {
                e && "function" == typeof e || (e = o.stringify);
                var t, n = this, r = n.protocol;
                r && ":" !== r.charAt(r.length - 1) && (r += ":");
                var i = r + (n.slashes || d(n.protocol) ? "//" : "");
                return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), 
                i += n.host + n.pathname, (t = "object" == typeof n.query ? e(n.query) : n.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), 
                n.hash && (i += n.hash), i;
            }
            y.prototype = {
                set: v,
                toString: g
            }, y.extractProtocol = h, y.location = p, y.trimLeft = l, y.qs = o, e.exports = y;
        }).call(this, n(45));
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "d", function() {
            return i;
        }), n.d(t, "c", function() {
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
            var e = window.location, t = e.host, n = e.pathname;
            if ("docs.google.com" === t) return n.indexOf("/forms/") >= 0 && (n.endsWith("/viewform") || n.endsWith("/formResponse") || n.endsWith("/prefill") || n.endsWith("/startquiz") || n.endsWith("/viewscore"));
        }, u = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location, t = e.host, n = e.pathname;
            if ("docs.google.com" === t) {
                var r, i = n.split("/").filter(function(e) {
                    return !!e;
                });
                return r = n.startsWith("/a/") ? i[2] : i[0], o[r];
            }
        };
        t.b = function() {
            return -1 === window.location.href.indexOf("/document/");
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
                for (var s in n = Object(arguments[l])) o.call(n, s) && (c[s] = n[s]);
                if (r) {
                    a = r(n);
                    for (var f = 0; f < a.length; f++) i.call(n, a[f]) && (c[a[f]] = n[a[f]]);
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
 */        var r = n(64), o = "function" == typeof Symbol && Symbol.for, i = o ? Symbol.for("react.element") : 60103, u = o ? Symbol.for("react.portal") : 60106, a = o ? Symbol.for("react.fragment") : 60107, c = o ? Symbol.for("react.strict_mode") : 60108, l = o ? Symbol.for("react.profiler") : 60114, s = o ? Symbol.for("react.provider") : 60109, f = o ? Symbol.for("react.context") : 60110, p = o ? Symbol.for("react.forward_ref") : 60112, d = o ? Symbol.for("react.suspense") : 60113, h = o ? Symbol.for("react.memo") : 60115, m = o ? Symbol.for("react.lazy") : 60116, y = "function" == typeof Symbol && Symbol.iterator;
        function v(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var g = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, b = {};
        function _(e, t, n) {
            this.props = e, this.context = t, this.refs = b, this.updater = n || g;
        }
        function w() {}
        function S(e, t, n) {
            this.props = e, this.context = t, this.refs = b, this.updater = n || g;
        }
        _.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e) throw Error(v(85));
            this.updater.enqueueSetState(this, e, t, "setState");
        }, _.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }, w.prototype = _.prototype;
        var O = S.prototype = new w();
        O.constructor = S, r(O, _.prototype), O.isPureReactComponent = !0;
        var j = {
            current: null
        }, E = Object.prototype.hasOwnProperty, x = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function C(e, t, n) {
            var r, o = {}, u = null, a = null;
            if (null != t) for (r in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (u = "" + t.key), 
            t) E.call(t, r) && !x.hasOwnProperty(r) && (o[r] = t[r]);
            var c = arguments.length - 2;
            if (1 === c) o.children = n; else if (1 < c) {
                for (var l = Array(c), s = 0; s < c; s++) l[s] = arguments[s + 2];
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
        function P(e, t) {
            return {
                $$typeof: i,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            };
        }
        function A(e) {
            return "object" == typeof e && null !== e && e.$$typeof === i;
        }
        function k(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, function(e) {
                return t[e];
            });
        }
        var R = /\/+/g, G = [];
        function I(e, t, n, r) {
            if (G.length) {
                var o = G.pop();
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
        function q(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 
            10 > G.length && G.push(e);
        }
        function D(e, t, n, r) {
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
            if (a) return n(r, e, "" === t ? "." + T(e, 0) : t), 1;
            if (a = 0, t = "" === t ? "." : t + ":", Array.isArray(e)) for (var c = 0; c < e.length; c++) {
                var l = t + T(o = e[c], c);
                a += D(o, l, n, r);
            } else if (null === e || "object" != typeof e ? l = null : l = "function" == typeof (l = y && e[y] || e["@@iterator"]) ? l : null, 
            "function" == typeof l) for (e = l.call(e), c = 0; !(o = e.next()).done; ) a += D(o = o.value, l = t + T(o, c++), n, r); else if ("object" === o) throw n = "" + e, 
            Error(v(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
            return a;
        }
        function F(e, t, n) {
            return null == e ? 0 : D(e, "", t, n);
        }
        function T(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? k(e.key) : t.toString(36);
        }
        function M(e, t) {
            e.func.call(e.context, t, e.count++);
        }
        function L(e, t, n) {
            var r = e.result, o = e.keyPrefix;
            e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? N(e, r, n, function(e) {
                return e;
            }) : null != e && (A(e) && (e = P(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + n)), 
            r.push(e));
        }
        function N(e, t, n, r, o) {
            var i = "";
            null != n && (i = ("" + n).replace(R, "$&/") + "/"), F(e, L, t = I(t, i, r, o)), 
            q(t);
        }
        var U = {
            current: null
        };
        function $() {
            var e = U.current;
            if (null === e) throw Error(v(321));
            return e;
        }
        var H = {
            ReactCurrentDispatcher: U,
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
                return N(e, r, null, t, n), r;
            },
            forEach: function(e, t, n) {
                if (null == e) return e;
                F(e, M, t = I(null, null, t, n)), q(t);
            },
            count: function(e) {
                return F(e, function() {
                    return null;
                }, null);
            },
            toArray: function(e) {
                var t = [];
                return N(e, t, null, function(e) {
                    return e;
                }), t;
            },
            only: function(e) {
                if (!A(e)) throw Error(v(143));
                return e;
            }
        }, t.Component = _, t.Fragment = a, t.Profiler = l, t.PureComponent = S, t.StrictMode = c, 
        t.Suspense = d, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, t.cloneElement = function(e, t, n) {
            if (null === e || void 0 === e) throw Error(v(267, e));
            var o = r({}, e.props), u = e.key, a = e.ref, c = e._owner;
            if (null != t) {
                if (void 0 !== t.ref && (a = t.ref, c = j.current), void 0 !== t.key && (u = "" + t.key), 
                e.type && e.type.defaultProps) var l = e.type.defaultProps;
                for (s in t) E.call(t, s) && !x.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = n; else if (1 < s) {
                l = Array(s);
                for (var f = 0; f < s; f++) l[f] = arguments[f + 2];
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
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = {
                $$typeof: s,
                _context: e
            }, e.Consumer = e;
        }, t.createElement = C, t.createFactory = function(e) {
            var t = C.bind(null, e);
            return t.type = e, t;
        }, t.createRef = function() {
            return {
                current: null
            };
        }, t.forwardRef = function(e) {
            return {
                $$typeof: p,
                render: e
            };
        }, t.isValidElement = A, t.lazy = function(e) {
            return {
                $$typeof: m,
                _ctor: e,
                _status: -1,
                _result: null
            };
        }, t.memo = function(e, t) {
            return {
                $$typeof: h,
                type: e,
                compare: void 0 === t ? null : t
            };
        }, t.useCallback = function(e, t) {
            return $().useCallback(e, t);
        }, t.useContext = function(e, t) {
            return $().useContext(e, t);
        }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
            return $().useEffect(e, t);
        }, t.useImperativeHandle = function(e, t, n) {
            return $().useImperativeHandle(e, t, n);
        }, t.useLayoutEffect = function(e, t) {
            return $().useLayoutEffect(e, t);
        }, t.useMemo = function(e, t) {
            return $().useMemo(e, t);
        }, t.useReducer = function(e, t, n) {
            return $().useReducer(e, t, n);
        }, t.useRef = function(e) {
            return $().useRef(e);
        }, t.useState = function(e) {
            return $().useState(e);
        }, t.version = "16.13.1";
    },
    90: function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, i, u) {
            try {
                var a = e[i](u), c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    var u = e.apply(t, n);
                    function a(e) {
                        r(u, o, i, a, c, "next", e);
                    }
                    function c(e) {
                        r(u, o, i, a, c, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        function i(e) {
            return l(e) || c(e) || a(e) || u();
        }
        function u() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
            }
        }
        function c(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }
        function l(e) {
            if (Array.isArray(e)) return s(e);
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        n.d(t, "b", function() {
            return y;
        });
        var f = function(e) {
            return [ "https://equatio-api.texthelp.com/", "https://equatio-api.dev.texthelp.com/" ].some(function(t) {
                return e.includes && e.includes(t);
            });
        }, p = function e(t) {
            var n;
            return (n = []).concat.apply(n, i(t.map(function(t) {
                return Array.isArray(t) ? e(t) : t;
            })));
        }, d = function(e, t) {
            return e.filter(t).pop();
        }, h = function(e) {
            var t = [], n = p(e), r = n.reduce(function(e, t, n) {
                return "string" == typeof t && (f(t) || t.endsWith("\u2063")) ? [].concat(i(e), [ n ]) : e;
            }, []);
            return 0 === r.length ? null : (r.reverse().forEach(function(e) {
                var r = n.slice(0, e), o = d(r, function(e) {
                    return "string" == typeof e && e.length > 0;
                });
                t.push(o);
            }), t);
        }, m = function() {
            var e = o(function*(e) {
                var t = yield (yield fetch(window.location.href.toString(), {
                    method: "GET",
                    credentials: "same-origin"
                })).text(), n = document.createElement("div");
                n.id = "th-page-reloaded", n.style.display = "none", n.innerHTML = t, Array.prototype.slice.call(n.querySelectorAll("script")).filter(function(e) {
                    return "DOCS_modelChunk = [" === e.innerHTML.substr(0, 19);
                }).forEach(function(t) {
                    var n = t.innerHTML.replace("DOCS_modelChunk = ", ""), r = n.lastIndexOf("]; ");
                    n = n.substr(0, r + 1);
                    var o = JSON.parse(n);
                    e(o);
                });
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), y = function() {
            var e = o(function*() {
                var e = {};
                return yield m(function(t) {
                    var n = p(t), r = n.reduce(function(e, t, n) {
                        return "string" == typeof t && f(t) ? [].concat(i(e), [ n ]) : e;
                    }, []);
                    if (0 === r.length) return null;
                    r.reverse().forEach(function(t) {
                        var r = n.slice(0, t), o = d(r, function(e) {
                            return "string" == typeof e && e.length > 0;
                        });
                        e[o] = n[t];
                    });
                }), e;
            });
            return function() {
                return e.apply(this, arguments);
            };
        }();
        t.a = o(function*() {
            var e = [];
            return yield m(function(t) {
                var n = h(t);
                n && e.push(n);
            }), p(e);
        });
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
        var r, o = Object.prototype.hasOwnProperty;
        function i(e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "));
            } catch (e) {
                return null;
            }
        }
        function u(e) {
            try {
                return encodeURIComponent(e);
            } catch (e) {
                return null;
            }
        }
        function a(e) {
            for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; t = n.exec(e); ) {
                var o = i(t[1]), u = i(t[2]);
                null === o || null === u || o in r || (r[o] = u);
            }
            return r;
        }
        function c(e, t) {
            t = t || "";
            var n, i, a = [];
            for (i in "string" != typeof t && (t = "?"), e) if (o.call(e, i)) {
                if ((n = e[i]) || null !== n && n !== r && !isNaN(n) || (n = ""), i = u(i), n = u(n), 
                null === i || null === n) continue;
                a.push(i + "=" + n);
            }
            return a.length ? t + a.join("&") : "";
        }
        t.stringify = c, t.parse = a;
    },
    93: function(e, t, n) {
        "use strict";
        var r = e => {
            var t;
            return null === (t = e[0]) || void 0 === t ? void 0 : t.s;
        }, o = (e, t) => e.filter(e => {
            var t, n;
            return "ae" === e.ty && !!(null === (n = null === (t = e) || void 0 === t ? void 0 : t.epm) || void 0 === n ? void 0 : n.ee_eo);
        }).map(e => {
            const n = e;
            return {
                id: n.epm.ee_eo.i_cid,
                originalSrc: n.epm.ee_eo.i_src,
                proxySrc: t[n.epm.ee_eo.i_cid],
                width: n.epm.ee_eo.i_wth,
                height: n.epm.ee_eo.i_ht
            };
        });
        const i = e => {
            const [, t] = /DOCS_modelChunk = (.*?); DOCS_modelChunkLoadStart/.exec(e) || [];
            return JSON.parse(t);
        }, u = e => {
            const [, t] = /_createKixApplication\(.*?, \{(.*?)\}/.exec(e) || [];
            return JSON.parse(`{${t}}`);
        }, a = e => {
            let t, n;
            try {
                t = i(e);
            } catch (e) {
                throw Error("Failed to parse Docs Model");
            }
            try {
                n = u(e);
            } catch (e) {}
            return {
                getText: () => r(t),
                getImages: () => {
                    if (!n) throw Error("HTML did not contain any image data");
                    return o(t, n);
                }
            };
        }, c = async e => {
            if ("string" != typeof e) throw Error("url must be a string");
            if (!e.startsWith("https://docs.google.com")) throw Error("invalid_google_url");
            const t = await fetch(e, {
                method: "GET",
                credentials: "same-origin"
            }), n = await t.text();
            return a(n);
        };
        var l = n(54), s = n.n(l), f = n(2);
        function p(e, t, n, r, o, i, u) {
            try {
                var a = e[i](u), c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function d(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function u(e) {
                        p(i, r, o, u, a, "next", e);
                    }
                    function a(e) {
                        p(i, r, o, u, a, "throw", e);
                    }
                    u(void 0);
                });
            };
        }
        var h = function(e, t) {
            if (t.startsWith("filesystem:")) {
                var n = t.split("filesystem:")[1], r = s()(n);
                return "docs.google.com" !== r.hostname ? null : e.getImages().find(function(e) {
                    return e.id === r.pathname.split("/").pop();
                });
            }
            return e.getImages().find(function(e) {
                return e.proxySrc.toLowerCase() === t.toLowerCase();
            });
        };
        t.a = function() {
            var e = d(function*(e) {
                var t = h(a(document.body.outerHTML), e);
                return t || (t = h(yield c(window.location.href), e)), t ? Object(f.f)(t.originalSrc) : null;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
    }
});