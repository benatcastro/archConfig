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
    }, t.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", t(t.s = 342);
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
    15: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "d", function() {
            return a;
        }), t.d(n, "c", function() {
            return u;
        });
        var r = [ "onedrive.live.com", ".sharepoint.com", ".officeapps.live.com" ], o = {
            Word: "Word",
            PowerPoint: "PowerPoint",
            Excel: "Excel",
            Onenote: "Onenote"
        }, i = [ o.Word ], a = function(e) {
            return i.includes(e);
        };
        n.b = function(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!e) return !1;
            var t = e;
            if (!n) try {
                t = new URL(e).hostname;
            } catch (e) {
                return !1;
            }
            for (var o = 0; o < r.length; o += 1) if (t.endsWith(r[o])) return !0;
            return !1;
        };
        var u = function(e) {
            return e.endsWith("word-edit.officeapps.live.com") ? o.Word : e.endsWith("powerpoint.officeapps.live.com") ? o.PowerPoint : e.endsWith("excel.officeapps.live.com") ? o.Excel : e.endsWith("onenote.officeapps.live.com") ? o.Onenote : null;
        };
    },
    2: function(e, n, t) {
        "use strict";
        t.d(n, "y", function() {
            return d;
        }), t.d(n, "s", function() {
            return f;
        }), t.d(n, "d", function() {
            return l;
        }), t.d(n, "p", function() {
            return p;
        }), t.d(n, "j", function() {
            return h;
        }), t.d(n, "n", function() {
            return m;
        }), t.d(n, "cb", function() {
            return v;
        }), t.d(n, "ab", function() {
            return g;
        }), t.d(n, "G", function() {
            return _;
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
            return x;
        }), t.d(n, "i", function() {
            return E;
        }), t.d(n, "N", function() {
            return P;
        }), t.d(n, "bb", function() {
            return C;
        }), t.d(n, "Q", function() {
            return R;
        }), t.d(n, "S", function() {
            return G;
        }), t.d(n, "T", function() {
            return T;
        }), t.d(n, "V", function() {
            return I;
        }), t.d(n, "W", function() {
            return F;
        }), t.d(n, "U", function() {
            return M;
        }), t.d(n, "J", function() {
            return q;
        }), t.d(n, "I", function() {
            return A;
        }), t.d(n, "a", function() {
            return D;
        }), t.d(n, "H", function() {
            return k;
        }), t.d(n, "db", function() {
            return L;
        }), t.d(n, "c", function() {
            return U;
        }), t.d(n, "E", function() {
            return H;
        }), t.d(n, "u", function() {
            return N;
        }), t.d(n, "A", function() {
            return W;
        }), t.d(n, "w", function() {
            return B;
        }), t.d(n, "M", function() {
            return z;
        }), t.d(n, "k", function() {
            return J;
        }), t.d(n, "b", function() {
            return Q;
        }), t.d(n, "r", function() {
            return X;
        }), t.d(n, "m", function() {
            return K;
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
            return ae;
        }), t.d(n, "g", function() {
            return ue;
        }), t.d(n, "X", function() {
            return ce;
        }), t.d(n, "Y", function() {
            return se;
        }), t.d(n, "t", function() {
            return de;
        }), t.d(n, "K", function() {
            return fe;
        });
        var r = t(0);
        function o(e, n, t, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void t(e);
            }
            u.done ? n(c) : Promise.resolve(c).then(r, o);
        }
        function i(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(r, i) {
                    var a = e.apply(n, t);
                    function u(e) {
                        o(a, r, i, u, c, "next", e);
                    }
                    function c(e) {
                        o(a, r, i, u, c, "throw", e);
                    }
                    u(void 0);
                });
            };
        }
        function a(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, r);
            }
            return t;
        }
        function u(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? a(Object(t), !0).forEach(function(n) {
                    c(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
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
                chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", u({
                    action: e
                }, n), function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = n.success, i = n.failure;
                    return chrome.runtime.lastError ? (console.error("Action failed:", e, chrome.runtime.lastError.message), 
                    r(chrome.runtime.lastError)) : i ? (console.error("Action failed:", e, i), r(i)) : t(o);
                });
            });
        }, d = function() {
            return s("load");
        }, f = function() {
            return s(r.a.InjectDocsRequirements);
        }, l = function() {
            return s(r.a.EnsureLoggedIntoFirebase);
        }, p = function(e, n) {
            return s(r.a.GetSpeech, {
                mathML: e,
                settings: n
            });
        }, h = function() {
            return s(r.a.GetLicense);
        }, m = function() {
            return s(r.a.GetProfile);
        }, v = function(e, n, t) {
            return s(r.a.UpdateProfile, {
                options: e,
                profile: n,
                customOptions: t
            });
        }, g = function(e) {
            return s(r.a.UpdateFavourites, {
                items: e
            });
        }, _ = function(e) {
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
        }, x = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return s(r.a.RegisterCompanionAppTarget, {
                platform: e,
                hostname: n
            });
        }, E = function() {
            return s(r.a.GetHandwritingCount);
        }, P = function(e) {
            return s(r.a.SetHandwritingCount, {
                count: e
            });
        }, C = function(e) {
            return s(r.a.UpdateGoogleSheetEquations, {
                spreadsheetId: e
            });
        }, R = function() {
            return s(r.a.ShowHandwritingExceededReminder);
        }, G = function() {
            return s(r.a.ShowPredictionReminder);
        }, T = function() {
            return s(r.a.ShowRenewalReminder);
        }, I = function() {
            return s(r.a.ShowTrialExpiration);
        }, F = function() {
            return s(r.a.ShowUpgradeReminder);
        }, M = function() {
            return s(r.a.ShowReviewReminder);
        }, q = function(e) {
            return s(r.a.SendAnalyticsScreen, {
                screenName: e
            });
        }, A = function(e) {
            return s(r.a.SendAnalyticsEvent, {
                category: e
            });
        }, D = function() {
            return s(r.a.CaptureScreenshot);
        }, k = function(e, n, t, o, i) {
            return s(r.a.ScanMathpixOcr, {
                base64: e,
                x: n,
                y: t,
                width: o,
                height: i
            });
        }, L = function(e, n) {
            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return s(r.a.UploadImageToProxy, {
                url: e,
                base64: n,
                isPermanent: t
            });
        }, U = function() {
            return s(r.a.DismissReviewReminder);
        }, H = function(e) {
            return s(r.a.OpenMathspace, {
                platformIntegrationId: e
            });
        }, N = function() {
            return s(r.a.InjectWebPageToolbar);
        }, W = function(e) {
            return s(r.a.MathDiscovered, {
                value: e
            });
        }, B = function() {
            return s(r.a.IsDiscoverabilityFirstTime);
        }, z = function(e) {
            return s(r.a.SetDiscoverabilityEnabled, {
                value: e
            });
        }, J = function() {
            return s(r.a.GetMathDiscoverability);
        }, Q = function(e) {
            return s(r.a.DismissGSuiteMathDiscover, {
                options: e
            });
        }, X = function() {
            return s(r.a.HasGSuiteDiscoverOverlayShown);
        }, K = function() {
            return s(r.a.GetPlatformOs);
        }, V = function() {
            return s(r.a.IsLockedForms);
        }, Y = function() {
            return s(r.a.GetCurrentDisabledFeatures);
        }, Z = function(e, n, t, o) {
            return s(r.a.InsertImageGoogleApi, {
                url: e,
                width: n,
                height: t,
                additionalOptions: o
            });
        }, $ = function() {
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
        }, ae = function(e, n) {
            return s(r.a.SetCanShowClipboardPopup, {
                value: e,
                copyBtn: n
            });
        }, ue = function(e) {
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
        }, fe = function(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return s(r.a.HtmlEditorApiAction, {
                command: e,
                value: n,
                fromEditor: t,
                targetFrame: o
            });
        };
    },
    25: function(e, n) {
        function t(e, n) {
            var t = e[1] || "", o = e[3];
            if (!o) return t;
            if (n && "function" == typeof btoa) {
                var i = r(o), a = o.sources.map(function(e) {
                    return "/*# sourceURL=" + o.sourceRoot + e + " */";
                });
                return [ t ].concat(a).concat([ i ]).join("\n");
            }
            return [ t ].join("\n");
        }
        function r(e) {
            return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) + " */";
        }
        e.exports = function(e) {
            var n = [];
            return n.toString = function() {
                return this.map(function(n) {
                    var r = t(n, e);
                    return n[2] ? "@media " + n[2] + "{" + r + "}" : r;
                }).join("");
            }, n.i = function(e, t) {
                "string" == typeof e && (e = [ [ null, e, "" ] ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0);
                }
                for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    "number" == typeof a[0] && r[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), 
                    n.push(a));
                }
            }, n;
        };
    },
    326: function(e, n, t) {
        e.exports = t.p + "assets/equatioicon16.png";
    },
    327: function(e, n, t) {
        e.exports = t.p + "assets/equatioicon32.png";
    },
    328: function(e, n, t) {
        e.exports = t.p + "assets/equatioicon48.png";
    },
    329: function(e, n, t) {
        e.exports = t.p + "assets/equatioicon128.png";
    },
    330: function(e, n, t) {
        var r = t(331);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]);
        var o = {
            insert: "head",
            singleton: !1
        };
        t(77)(r, o);
        r.locals && (e.exports = r.locals);
    },
    331: function(e, n, t) {
        (e.exports = t(25)(void 0)).push([ e.i, ".equatio-toolbar-wrapper {\n  font-family: 'Roboto', 'Open Sans', Arial, sans-serif !important;\n  color: #000; }\n\n.tippy-popper {\n  font-family: 'Roboto', 'Open Sans', Arial, sans-serif !important;\n  color: #000;\n  font-size: 1em; }\n", "" ]);
    },
    342: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(36), o = t.n(r), i = t(2), a = t(47), u = (t(326), t(327), t(328), t(329), 
        t(330), t(15)), c = function() {
            window.equatioCoreChunkLoading = "chrome", window.equatioCoreBaseUrl = "".concat("chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc", "/");
            var e = !1, n = !1;
            Object(i.C)(Object(u.c)(window.location.hostname)).then(function(e) {
                e && (n = !0);
            });
            var t = function() {
                var e = document.querySelector(".equatio-toolbar-wrapper");
                e && (e.style.display = "none");
            }, r = function() {
                if (e) {
                    var n = document.querySelector(".equatio-toolbar-wrapper");
                    n && (n.style.display = "block" === n.style.display ? "none" : "block", "block" === n.style.display && Object(a.a)());
                } else e = !0, o()("chrome-extension://".concat(chrome.runtime.id, "/content/docsMessagingApi.js")), 
                Object(i.s)();
            };
            chrome.runtime.onMessage.addListener(function(o) {
                var a = o.action;
                "load" === a ? n ? r() : Object(i.C)(Object(u.c)(window.location.hostname)).then(function(e) {
                    e && (n = !0, r());
                }) : "EQUATIO_CHANGE_USER" === a && Object(i.C)(Object(u.c)(window.location.hostname)).then(function(r) {
                    n = r, !e && r && Object(i.y)(), r || t();
                });
            });
        };
        function s(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        function d(e, n, t, r, o, i, a) {
            try {
                var u = e[i](a), c = u.value;
            } catch (e) {
                return void t(e);
            }
            u.done ? n(c) : Promise.resolve(c).then(r, o);
        }
        function f(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(n, t);
                    function a(e) {
                        d(i, r, o, a, u, "next", e);
                    }
                    function u(e) {
                        d(i, r, o, a, u, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        if (window !== top) {
            var l = function() {
                var e = Object(u.c)(window.location.hostname);
                document.querySelector("#MainApp") && e && (chrome.runtime.sendMessage({
                    action: "is_office_app",
                    value: !0,
                    appName: e
                }), window.addEventListener("beforeunload", function() {
                    chrome.runtime.sendMessage({
                        action: "is_office_app",
                        value: !1
                    });
                }), o()("chrome-extension://".concat(chrome.runtime.id, "/content/officeExtensionChecker.js")), 
                c());
            };
            window.addEventListener("load", l, !1);
        } else chrome.runtime.onMessage.addListener(function(e, n, t) {
            var r = e.action, o = e.content, i = e.isText;
            if ("office_add_to_clipboard" === r) return i ? navigator.clipboard.writeText(o).then(function() {
                return t(!0);
            }).catch(function(e) {
                console.error("Clipboard Copy failed", e), t(!1);
            }) : f(function*() {
                try {
                    var e = yield (yield fetch(o)).blob();
                    yield navigator.clipboard.write([ new ClipboardItem(s({}, e.type, e)) ]), t(!0);
                } catch (e) {
                    console.error("Clipboard Copy failed", e), t(!1);
                }
            })(), !0;
        });
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
    77: function(e, n, t) {
        "use strict";
        var r, o = {}, i = function() {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), 
            r;
        }, a = function() {
            var e = {};
            return function(n) {
                if (void 0 === e[n]) {
                    var t = document.querySelector(n);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head;
                    } catch (e) {
                        t = null;
                    }
                    e[n] = t;
                }
                return e[n];
            };
        }();
        function u(e, n) {
            for (var t = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o], a = n.base ? i[0] + n.base : i[0], u = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
                r[a] ? r[a].parts.push(u) : t.push(r[a] = {
                    id: a,
                    parts: [ u ]
                });
            }
            return t;
        }
        function c(e, n) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t], i = o[r.id], a = 0;
                if (i) {
                    for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                    for (;a < r.parts.length; a++) i.parts.push(g(r.parts[a], n));
                } else {
                    for (var u = []; a < r.parts.length; a++) u.push(g(r.parts[a], n));
                    o[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: u
                    };
                }
            }
        }
        function s(e) {
            var n = document.createElement("style");
            if (void 0 === e.attributes.nonce) {
                var r = t.nc;
                r && (e.attributes.nonce = r);
            }
            if (Object.keys(e.attributes).forEach(function(t) {
                n.setAttribute(t, e.attributes[t]);
            }), "function" == typeof e.insert) e.insert(n); else {
                var o = a(e.insert || "head");
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(n);
            }
            return n;
        }
        function d(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
        }
        var f, l = (f = [], function(e, n) {
            return f[e] = n, f.filter(Boolean).join("\n");
        });
        function p(e, n, t, r) {
            var o = t ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = l(n, o); else {
                var i = document.createTextNode(o), a = e.childNodes;
                a[n] && e.removeChild(a[n]), a.length ? e.insertBefore(i, a[n]) : e.appendChild(i);
            }
        }
        function h(e, n, t) {
            var r = t.css, o = t.media, i = t.sourceMap;
            if (o && e.setAttribute("media", o), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), 
            e.styleSheet) e.styleSheet.cssText = r; else {
                for (;e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(r));
            }
        }
        var m = null, v = 0;
        function g(e, n) {
            var t, r, o;
            if (n.singleton) {
                var i = v++;
                t = m || (m = s(n)), r = p.bind(null, t, i, !1), o = p.bind(null, t, i, !0);
            } else t = s(n), r = h.bind(null, t, n), o = function() {
                d(t);
            };
            return r(e), function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    r(e = n);
                } else o();
            };
        }
        e.exports = function(e, n) {
            (n = n || {}).attributes = "object" == typeof n.attributes ? n.attributes : {}, 
            n.singleton || "boolean" == typeof n.singleton || (n.singleton = i());
            var t = u(e, n);
            return c(t, n), function(e) {
                for (var r = [], i = 0; i < t.length; i++) {
                    var a = t[i], s = o[a.id];
                    s && (s.refs--, r.push(s));
                }
                e && c(u(e, n), n);
                for (var d = 0; d < r.length; d++) {
                    var f = r[d];
                    if (0 === f.refs) {
                        for (var l = 0; l < f.parts.length; l++) f.parts[l]();
                        delete o[f.id];
                    }
                }
            };
        };
    }
});