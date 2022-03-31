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
    }, t.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", t(t.s = 336);
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
            return g;
        }), t.d(n, "cb", function() {
            return m;
        }), t.d(n, "ab", function() {
            return h;
        }), t.d(n, "G", function() {
            return v;
        }), t.d(n, "e", function() {
            return b;
        }), t.d(n, "D", function() {
            return w;
        }), t.d(n, "q", function() {
            return S;
        }), t.d(n, "O", function() {
            return y;
        }), t.d(n, "P", function() {
            return O;
        }), t.d(n, "o", function() {
            return E;
        }), t.d(n, "F", function() {
            return P;
        }), t.d(n, "i", function() {
            return j;
        }), t.d(n, "N", function() {
            return G;
        }), t.d(n, "bb", function() {
            return I;
        }), t.d(n, "Q", function() {
            return R;
        }), t.d(n, "S", function() {
            return T;
        }), t.d(n, "T", function() {
            return A;
        }), t.d(n, "V", function() {
            return D;
        }), t.d(n, "W", function() {
            return F;
        }), t.d(n, "U", function() {
            return x;
        }), t.d(n, "J", function() {
            return C;
        }), t.d(n, "I", function() {
            return L;
        }), t.d(n, "a", function() {
            return M;
        }), t.d(n, "H", function() {
            return k;
        }), t.d(n, "db", function() {
            return q;
        }), t.d(n, "c", function() {
            return U;
        }), t.d(n, "E", function() {
            return H;
        }), t.d(n, "u", function() {
            return Q;
        }), t.d(n, "A", function() {
            return N;
        }), t.d(n, "w", function() {
            return B;
        }), t.d(n, "M", function() {
            return W;
        }), t.d(n, "k", function() {
            return z;
        }), t.d(n, "b", function() {
            return X;
        }), t.d(n, "r", function() {
            return J;
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
        }, g = function() {
            return d(r.a.GetProfile);
        }, m = function(e, n, t) {
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
        }, w = function(e, n) {
            return d(r.a.OpenGoogleFormsPicker, {
                url: e,
                picker: n
            });
        }, S = function(e) {
            return d(r.a.GoogleFormsPickerLoaded, {
                location: e
            });
        }, y = function(e) {
            return d(r.a.SetProfileType, {
                type: e
            });
        }, O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return d(r.a.SetShowEquatioOnFirstRun, {
                value: e
            });
        }, E = function() {
            return d(r.a.GetShouldShowEquatioOnFirstRun);
        }, P = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return d(r.a.RegisterCompanionAppTarget, {
                platform: e,
                hostname: n
            });
        }, j = function() {
            return d(r.a.GetHandwritingCount);
        }, G = function(e) {
            return d(r.a.SetHandwritingCount, {
                count: e
            });
        }, I = function(e) {
            return d(r.a.UpdateGoogleSheetEquations, {
                spreadsheetId: e
            });
        }, R = function() {
            return d(r.a.ShowHandwritingExceededReminder);
        }, T = function() {
            return d(r.a.ShowPredictionReminder);
        }, A = function() {
            return d(r.a.ShowRenewalReminder);
        }, D = function() {
            return d(r.a.ShowTrialExpiration);
        }, F = function() {
            return d(r.a.ShowUpgradeReminder);
        }, x = function() {
            return d(r.a.ShowReviewReminder);
        }, C = function(e) {
            return d(r.a.SendAnalyticsScreen, {
                screenName: e
            });
        }, L = function(e) {
            return d(r.a.SendAnalyticsEvent, {
                category: e
            });
        }, M = function() {
            return d(r.a.CaptureScreenshot);
        }, k = function(e, n, t, o, i) {
            return d(r.a.ScanMathpixOcr, {
                base64: e,
                x: n,
                y: t,
                width: o,
                height: i
            });
        }, q = function(e, n) {
            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return d(r.a.UploadImageToProxy, {
                url: e,
                base64: n,
                isPermanent: t
            });
        }, U = function() {
            return d(r.a.DismissReviewReminder);
        }, H = function(e) {
            return d(r.a.OpenMathspace, {
                platformIntegrationId: e
            });
        }, Q = function() {
            return d(r.a.InjectWebPageToolbar);
        }, N = function(e) {
            return d(r.a.MathDiscovered, {
                value: e
            });
        }, B = function() {
            return d(r.a.IsDiscoverabilityFirstTime);
        }, W = function(e) {
            return d(r.a.SetDiscoverabilityEnabled, {
                value: e
            });
        }, z = function() {
            return d(r.a.GetMathDiscoverability);
        }, X = function(e) {
            return d(r.a.DismissGSuiteMathDiscover, {
                options: e
            });
        }, J = function() {
            return d(r.a.HasGSuiteDiscoverOverlayShown);
        }, K = function() {
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
    336: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(2), o = t(47);
        function i(e, n, t, r, o, i, u) {
            try {
                var a = e[i](u), c = a.value;
            } catch (e) {
                return void t(e);
            }
            a.done ? n(c) : Promise.resolve(c).then(r, o);
        }
        function u(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(r, o) {
                    var u = e.apply(n, t);
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
        var a = function() {
            var e = u(function*() {
                var e = document.querySelector(".equatio-toolbar-wrapper");
                if (e) e.style.display = "block" === e.style.display ? "none" : "block", "block" === e.style.display && Object(o.a)(); else try {
                    yield Object(r.s)();
                } catch (e) {
                    return void window.postMessage({
                        action: "EQUATIO_LOAD_FAILED"
                    }, window.location.origin);
                }
                window.postMessage({
                    action: "EQUATIO_LOAD_SUCCESS"
                }, window.location.origin);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }();
        window.addEventListener("message", function(e) {
            if (e.source === window && e.data && e.data.action) switch (e.data.action) {
              case "EQUATIO_IS_INSTALLED":
                window.postMessage({
                    action: "EQUATIO_INSTALLED"
                }, window.location.origin);
                break;

              case "EQUATIO_TOGGLE_TOOLBAR":
                a();
            }
        }), chrome.runtime.onMessage.addListener(function(e) {
            "load_pdf_toolbar" === e.action && a();
        });
    },
    47: function(e, n, t) {
        "use strict";
        n.a = function() {
            var e = document.querySelector("#equatio-toolbar-shadow-host").shadowRoot.querySelector(".equatio-toolbar-button");
            e && setTimeout(function() {
                e.focus();
            }, 50);
        };
    }
});