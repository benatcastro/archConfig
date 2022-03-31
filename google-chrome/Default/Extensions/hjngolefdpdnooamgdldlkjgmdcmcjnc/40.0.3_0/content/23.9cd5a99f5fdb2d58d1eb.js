(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 23 ], {
    105: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(1), o = n.n(r), a = n(42), i = n(18), s = n.n(i), c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
            function u(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports;
            }
            var l = u(function(t) {
                function e() {
                    return t.exports = e = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    }, e.apply(this, arguments);
                }
                t.exports = e;
            }), p = function(t) {
                if (Array.isArray(t)) return t;
            }, f = function(t, e) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                    var n = [], r = !0, o = !1, a = void 0;
                    try {
                        for (var i, s = t[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), 
                        !e || n.length !== e); r = !0) ;
                    } catch (t) {
                        o = !0, a = t;
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                    return n;
                }
            }, m = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }, d = function(t, e) {
                return p(t) || f(t, e) || m();
            }, b = function(t, e) {
                if (null == t) return {};
                var n, r, o = {}, a = Object.keys(t);
                for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
            }, g = function(t, e) {
                if (null == t) return {};
                var n, r, o = b(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
                }
                return o;
            }, h = u(function(t) {
                !function(e) {
                    var n = function(t, e, r) {
                        if (!c(e) || l(e) || p(e) || f(e) || s(e)) return e;
                        var o, a = 0, i = 0;
                        if (u(e)) for (o = [], i = e.length; a < i; a++) o.push(n(t, e[a], r)); else for (var m in o = {}, 
                        e) Object.prototype.hasOwnProperty.call(e, m) && (o[t(m, r)] = n(t, e[m], r));
                        return o;
                    }, r = function(t) {
                        return m(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, function(t, e) {
                            return e ? e.toUpperCase() : "";
                        })).substr(0, 1).toLowerCase() + t.substr(1);
                    }, o = function(t) {
                        var e = r(t);
                        return e.substr(0, 1).toUpperCase() + e.substr(1);
                    }, a = function(t, e) {
                        return function(t, e) {
                            var n = (e = e || {}).separator || "_", r = e.split || /(?=[A-Z])/;
                            return t.split(r).join(n);
                        }(t, e).toLowerCase();
                    }, i = Object.prototype.toString, s = function(t) {
                        return "function" == typeof t;
                    }, c = function(t) {
                        return t === Object(t);
                    }, u = function(t) {
                        return "[object Array]" == i.call(t);
                    }, l = function(t) {
                        return "[object Date]" == i.call(t);
                    }, p = function(t) {
                        return "[object RegExp]" == i.call(t);
                    }, f = function(t) {
                        return "[object Boolean]" == i.call(t);
                    }, m = function(t) {
                        return (t -= 0) == t;
                    }, d = function(t, e) {
                        var n = e && "process" in e ? e.process : e;
                        return "function" != typeof n ? t : function(e, r) {
                            return n(e, t, r);
                        };
                    }, b = {
                        camelize: r,
                        decamelize: a,
                        pascalize: o,
                        depascalize: a,
                        camelizeKeys: function(t, e) {
                            return n(d(r, e), t);
                        },
                        decamelizeKeys: function(t, e) {
                            return n(d(a, e), t, e);
                        },
                        pascalizeKeys: function(t, e) {
                            return n(d(o, e), t);
                        },
                        depascalizeKeys: function() {
                            return this.decamelizeKeys.apply(this, arguments);
                        }
                    };
                    t.exports ? t.exports = b : e.humps = b;
                }(c);
            }).decamelize;
            function y(t) {
                return t.children;
            }
            function x(t) {
                var e = t.root, n = t.children;
                return Object(a.createPortal)(n, e);
            }
            x.propTypes = {
                root: s.a.object.isRequired,
                children: s.a.node
            }, x.defaultProps = {
                children: null
            };
            var v = new Map();
            function j(e) {
                var a = Object(r.forwardRef)(function(a, i) {
                    var s = a.mode, c = a.delegatesFocus, u = a.styleSheets, p = a.children, f = g(a, [ "mode", "delegatesFocus", "styleSheets", "children" ]), m = Object(r.useState)(null), b = d(m, 2), h = b[0], v = b[1], j = Object(r.useState)(null), O = d(j, 2), F = O[0], w = O[1], _ = function() {
                        try {
                            return n(!function() {
                                var t = new Error("Cannot find module 'styled-components'");
                                throw t.code = "MODULE_NOT_FOUND", t;
                            }()).StyleSheetManager;
                        } catch (t) {
                            return y;
                        }
                    }(), E = "node_".concat(s).concat(c);
                    return Object(r.useEffect)(function() {
                        if (h) try {
                            var e = h.attachShadow({
                                mode: s,
                                delegatesFocus: c
                            });
                            u.length > 0 && (e.adoptedStyleSheets = u), t.setTimeout(function() {
                                i && "function" == typeof i && i(h), i && "current" in i && (i.current = h);
                            }), w(e);
                        } catch (e) {
                            switch (e.name) {
                              case "NotSupportedError":
                                u.length > 0 && (F.adoptedStyleSheets = u);
                                break;

                              default:
                                throw e;
                            }
                        }
                    }, [ h, u ]), o.a.createElement(e.tag, l({
                        key: E,
                        ref: v
                    }, f), F && o.a.createElement(_, {
                        target: F
                    }, o.a.createElement(x, {
                        root: F
                    }, p)));
                });
                return a.propTypes = {
                    mode: s.a.oneOf([ "open", "closed" ]),
                    delegatesFocus: s.a.bool,
                    styleSheets: s.a.arrayOf(s.a.instanceOf(t.CSSStyleSheet)),
                    children: s.a.node
                }, a.defaultProps = {
                    mode: "open",
                    delegatesFocus: !1,
                    styleSheets: [],
                    children: null
                }, a;
            }
            function O() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new Proxy(t, {
                    get: function(t, e) {
                        var n = h(e, {
                            separator: "-"
                        });
                        return v.has(n) || v.set(n, j({
                            tag: n
                        })), v.get(n);
                    }
                });
            }
            var F = O();
            e.a = F;
        }).call(this, n(45));
    },
    12: function(t, e, n) {
        "use strict";
        n.d(e, "e", function() {
            return u;
        }), n.d(e, "f", function() {
            return l;
        }), n.d(e, "h", function() {
            return p;
        }), n.d(e, "b", function() {
            return f;
        }), n.d(e, "a", function() {
            return d;
        }), n.d(e, "d", function() {
            return b;
        }), n.d(e, "c", function() {
            return g;
        }), n.d(e, "g", function() {
            return h;
        });
        var r = n(1), o = n(60), a = n(27), i = n(120);
        const s = {
            38: "&amp;",
            62: "&gt;",
            60: "&lt;",
            34: "&quot;",
            39: "&#x27;"
        }, c = /[&><"']/g;
        function u(t) {
            return ("" + t).replace(c, t => s[t.charCodeAt(0)]);
        }
        function l(t, e, n = {}) {
            return e.reduce((e, r) => (r in t ? e[r] = t[r] : r in n && (e[r] = n[r]), e), {});
        }
        function p(t) {
            Object(i.a)(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
        }
        function f(t, e) {
            return `[React Intl] ${t}${e ? `\n${e.stack}` : ""}`;
        }
        function m(t) {
            0;
        }
        const d = {
            formats: {},
            messages: {},
            timeZone: void 0,
            textComponent: r.Fragment,
            defaultLocale: "en",
            defaultFormats: {},
            onError: m
        };
        function b() {
            return {
                dateTime: {},
                number: {},
                message: {},
                relativeTime: {},
                pluralRules: {},
                list: {}
            };
        }
        function g(t = b()) {
            const e = Intl.RelativeTimeFormat, n = Intl.ListFormat;
            return {
                getDateTimeFormat: Object(a.a)(Intl.DateTimeFormat, t.dateTime),
                getNumberFormat: Object(a.a)(Intl.NumberFormat, t.number),
                getMessageFormat: Object(a.a)(o.a, t.message),
                getRelativeTimeFormat: Object(a.a)(e, t.relativeTime),
                getPluralRules: Object(a.a)(Intl.PluralRules, t.pluralRules),
                getListFormat: Object(a.a)(n, t.list)
            };
        }
        function h(t, e, n, r) {
            const o = t && t[e];
            let a;
            if (o && (a = o[n]), a) return a;
            r(f(`No ${e} format named: ${n}`));
        }
    },
    169: function(t, e, n) {
        "use strict";
        function r(t, e) {
            if ("undefined" == typeof Intl) return !1;
            if (!t) throw new Error("locales must be supplied.");
            Array.isArray(t) || (t = [ t ]);
            var n = e || [ Intl.DateTimeFormat, Intl.NumberFormat, Intl.PluralRules ];
            return !(0 === (n = n.filter(Boolean)).length || e && n.length !== e.length) && n.every(function(e) {
                return e.supportedLocalesOf(t).length === t.length;
            });
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = r;
    },
    25: function(t, e) {
        function n(t, e) {
            var n = t[1] || "", o = t[3];
            if (!o) return n;
            if (e && "function" == typeof btoa) {
                var a = r(o), i = o.sources.map(function(t) {
                    return "/*# sourceURL=" + o.sourceRoot + t + " */";
                });
                return [ n ].concat(i).concat([ a ]).join("\n");
            }
            return [ n ].join("\n");
        }
        function r(t) {
            return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t))))) + " */";
        }
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var r = n(e, t);
                    return e[2] ? "@media " + e[2] + "{" + r + "}" : r;
                }).join("");
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [ [ null, t, "" ] ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var a = this[o][0];
                    "number" == typeof a && (r[a] = !0);
                }
                for (o = 0; o < t.length; o++) {
                    var i = t[o];
                    "number" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), 
                    e.push(i));
                }
            }, e;
        };
    },
    32: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return f;
        }), n.d(e, "a", function() {
            return m;
        }), n.d(e, "c", function() {
            return d;
        });
        var r = n(1), o = n(57), a = n.n(o), i = n(12);
        const s = a.a || o;
        function c(t) {
            return t.displayName || t.name || "Component";
        }
        const u = r.createContext(null), {Consumer: l, Provider: p} = u, f = p, m = u;
        function d(t, e) {
            const {intlPropName: n = "intl", forwardRef: o = !1, enforceContext: a = !0} = e || {}, u = e => r.createElement(l, null, s => (a && Object(i.h)(s), 
            r.createElement(t, Object.assign({}, e, {
                [n]: s
            }, {
                ref: o ? e.forwardedRef : null
            }))));
            return u.displayName = `injectIntl(${c(t)})`, u.WrappedComponent = t, s(o ? r.forwardRef((t, e) => r.createElement(u, Object.assign({}, t, {
                forwardedRef: e
            }))) : u, t);
        }
    },
    48: function(t, e, n) {
        "use strict";
        function r(t) {
            return t;
        }
        function o(t) {
            return t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e._ = r, e.defineMessages = o;
    },
    58: function(t, e, n) {
        "use strict";
        var r = n(1), o = n(32), a = n(12), i = n(169), s = n.n(i);
        const c = [ "localeMatcher", "style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay" ];
        function u({locale: t, formats: e, onError: n}, r, o = {}) {
            const {format: i} = o, s = i && Object(a.g)(e, "number", i, n) || {};
            return r(t, Object(a.f)(o, c, s));
        }
        function l(t, e, n, r = {}) {
            try {
                return u(t, e, r).format(n);
            } catch (e) {
                t.onError(Object(a.b)("Error formatting number.", e));
            }
            return String(n);
        }
        function p(t, e, n, r = {}) {
            try {
                return u(t, e, r).formatToParts(n);
            } catch (e) {
                t.onError(Object(a.b)("Error formatting number.", e));
            }
            return [];
        }
        const f = [ "numeric", "style" ];
        function m({locale: t, formats: e, onError: n}, r, o = {}) {
            const {format: i} = o, s = !!i && Object(a.g)(e, "relative", i, n) || {};
            return r(t, Object(a.f)(o, f, s));
        }
        function d(t, e, n, r, o = {}) {
            r || (r = "second"), Intl.RelativeTimeFormat || t.onError(Object(a.b)('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n'));
            try {
                return m(t, e, o).format(n, r);
            } catch (e) {
                t.onError(Object(a.b)("Error formatting relative time.", e));
            }
            return String(n);
        }
        const b = [ "localeMatcher", "formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName" ];
        function g({locale: t, formats: e, onError: n, timeZone: r}, o, i, s = {}) {
            const {format: c} = s, u = Object.assign(Object.assign({}, r && {
                timeZone: r
            }), c && Object(a.g)(e, o, c, n));
            let l = Object(a.f)(s, b, u);
            return "time" !== o || l.hour || l.minute || l.second || (l = Object.assign(Object.assign({}, l), {
                hour: "numeric",
                minute: "numeric"
            })), i(t, l);
        }
        function h(t, e, n, r = {}) {
            const o = "string" == typeof n ? new Date(n || 0) : n;
            try {
                return g(t, "date", e, r).format(o);
            } catch (e) {
                t.onError(Object(a.b)("Error formatting date.", e));
            }
            return String(o);
        }
        function y(t, e, n, r = {}) {
            const o = "string" == typeof n ? new Date(n || 0) : n;
            try {
                return g(t, "time", e, r).format(o);
            } catch (e) {
                t.onError(Object(a.b)("Error formatting time.", e));
            }
            return String(o);
        }
        function x(t, e, n, r = {}) {
            const o = "string" == typeof n ? new Date(n || 0) : n;
            try {
                return g(t, "date", e, r).formatToParts(o);
            } catch (e) {
                t.onError(Object(a.b)("Error formatting date.", e));
            }
            return [];
        }
        function v(t, e, n, r = {}) {
            const o = "string" == typeof n ? new Date(n || 0) : n;
            try {
                return g(t, "time", e, r).formatToParts(o);
            } catch (e) {
                t.onError(Object(a.b)("Error formatting time.", e));
            }
            return [];
        }
        const j = [ "localeMatcher", "type" ];
        function O({locale: t, onError: e}, n, r, o = {}) {
            Intl.PluralRules || e(Object(a.b)('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n'));
            const i = Object(a.f)(o, j);
            try {
                return n(t, i).select(r);
            } catch (t) {
                e(Object(a.b)("Error formatting plural.", t));
            }
            return "other";
        }
        var F = n(85), w = n(46), _ = n.n(w);
        const E = [ "localeMatcher", "type", "style" ], S = Date.now();
        function T(t) {
            return `${S}_${t}_${S}`;
        }
        function k({locale: t, onError: e}, n, r, o = {}) {
            Intl.ListFormat || e(Object(a.b)('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n'));
            const i = Object(a.f)(o, E);
            try {
                const o = {}, s = r.map((t, e) => {
                    if ("object" == typeof t) {
                        const n = T(e);
                        return o[n] = t, n;
                    }
                    return String(t);
                });
                return Object.keys(o).length ? n(t, i).formatToParts(s).reduce((t, e) => {
                    const n = e.value;
                    return o[n] ? t.push(o[n]) : "string" == typeof t[t.length - 1] ? t[t.length - 1] += n : t.push(n), 
                    t;
                }, []) : n(t, i).format(s);
            } catch (t) {
                e(Object(a.b)("Error formatting list.", t));
            }
            return r;
        }
        n.d(e, "a", function() {
            return q;
        }), n.d(e, "b", function() {
            return R;
        });
        const D = _.a || w;
        function P(t) {
            return {
                locale: t.locale,
                timeZone: t.timeZone,
                formats: t.formats,
                textComponent: t.textComponent,
                messages: t.messages,
                defaultLocale: t.defaultLocale,
                defaultFormats: t.defaultFormats,
                onError: t.onError
            };
        }
        function q(t, e) {
            const n = Object(a.c)(e), r = Object.assign(Object.assign({}, a.a), t);
            if (!r.locale || !s()(r.locale)) {
                const {locale: t, defaultLocale: e, onError: n} = r;
                "function" == typeof n && n(Object(a.b)(`Missing locale data for locale: "${t}". ` + `Using default locale: "${e}" as fallback.`)), 
                r.locale = r.defaultLocale || "en";
            }
            return Object.assign(Object.assign({}, r), {
                formatters: n,
                formatNumber: l.bind(null, r, n.getNumberFormat),
                formatNumberToParts: p.bind(null, r, n.getNumberFormat),
                formatRelativeTime: d.bind(null, r, n.getRelativeTimeFormat),
                formatDate: h.bind(null, r, n.getDateTimeFormat),
                formatDateToParts: x.bind(null, r, n.getDateTimeFormat),
                formatTime: y.bind(null, r, n.getDateTimeFormat),
                formatTimeToParts: v.bind(null, r, n.getDateTimeFormat),
                formatPlural: O.bind(null, r, n.getPluralRules),
                formatMessage: F.b.bind(null, r, n),
                formatHTMLMessage: F.a.bind(null, r, n),
                formatList: k.bind(null, r, n.getListFormat)
            });
        }
        class R extends r.PureComponent {
            constructor() {
                super(...arguments), this.cache = Object(a.d)(), this.state = {
                    cache: this.cache,
                    intl: q(P(this.props), this.cache),
                    prevConfig: P(this.props)
                };
            }
            static getDerivedStateFromProps(t, {prevConfig: e, cache: n}) {
                const r = P(t);
                return D(e, r) ? null : {
                    intl: q(r, n),
                    prevConfig: r
                };
            }
            render() {
                return Object(a.h)(this.state.intl), r.createElement(o.b, {
                    value: this.state.intl
                }, this.props.children);
            }
        }
        R.displayName = "IntlProvider", R.defaultProps = a.a;
    },
    646: function(t, e, n) {
        var r = n(647);
        t.exports = "string" == typeof r ? r : r.toString();
    },
    647: function(t, e, n) {
        (t.exports = n(25)(void 0)).push([ t.i, '.equatio-apps-discovery-popup {\n  position: fixed;\n  padding: 10px 0;\n  margin: 0 auto;\n  top: 20px;\n  right: 25px;\n  width: 325px;\n  z-index: 10000000;\n  min-height: 192px; }\n\n.equatio-apps-discovery-popup__bubble {\n  position: relative;\n  display: block;\n  border-radius: 10px;\n  background-color: #FFF;\n  color: #484848;\n  padding: 8px 20px;\n  -webkit-box-shadow: 0px 0px 15px 0px #a8a8a8;\n  -moz-box-shadow: 0px 0px 15px 0px #a8a8a8;\n  box-shadow: 0px 0px 15px 0px #a8a8a8; }\n\n.equatio-apps-discovery-popup__bubble:before {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 15px 15px 15px;\n  border-color: transparent transparent #FFF transparent;\n  border-style: inset;\n  -webkit-transform: rotate(360deg); }\n\n.equatio-apps-discovery-popup__bubble--docs:after {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 15px 15px 15px;\n  border-color: transparent transparent #e9e9e9 transparent;\n  border-style: inset;\n  -webkit-transform: rotate(360deg); }\n\n.equatio-apps-discovery-popup__bubble:before {\n  top: -10px;\n  left: 23px; }\n\n.equatio-apps-discovery-popup__bubble:after {\n  top: -12px;\n  left: 23px;\n  z-index: -7; }\n\n.equatio-apps-discovery-popup__title {\n  position: relative;\n  font-family: "Open Sans", Arial, sans-serif;\n  height: 37px;\n  margin: 8px 0 5px 0;\n  padding: 3px;\n  font-weight: 900; }\n\n.equatio-apps-discovery-popup__text {\n  display: inline !important;\n  position: relative !important;\n  line-height: 19.7px !important;\n  font-family: "Open Sans", Arial, sans-serif !important;\n  font-size: 13px !important;\n  margin-block-end: 12px !important;\n  margin-block-start: 12px !important;\n  z-index: 1; }\n\n.equatio-apps-discovery-popup__button-wrapper {\n  position: relative;\n  display: flex !important;\n  justify-content: flex-end !important;\n  height: 46px !important;\n  padding: 3px 0 !important;\n  margin-top: 5px !important; }\n\n.equatio-apps-discovery-popup__instruction-wrapper {\n  position: relative !important;\n  display: flex !important;\n  align-items: center !important;\n  padding: 2px 0 !important;\n  height: 41px !important;\n  z-index: 1 !important; }\n\n.equatio-apps-discovery-popup__instruction-text {\n  font-family: "Open Sans", Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 300; }\n\n.equatio-apps-discovery-popup-checkbox__container {\n  display: flex;\n  align-items: center; }\n\n.equatio-apps-discovery-popup-checkbox {\n  -webkit-appearance: none;\n  position: relative;\n  cursor: pointer;\n  border-radius: 5px;\n  height: 15px;\n  width: 15px;\n  background: #D7E7FF;\n  border: 1px solid #C3DAFF;\n  margin-right: 5px; }\n\n.equatio-apps-discovery-popup-checkbox:checked:after {\n  content: "";\n  left: 4px;\n  top: 0px;\n  width: 6px;\n  height: 10px;\n  border: solid #FFF;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute; }\n\n.equatio-apps-discovery-popup-checkbox:checked {\n  background-color: #00B7FF; }\n\n.equatio-apps-discovery-popup-background {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%; }\n\n.equatio-apps-discovery-popup-title {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 8px 0; }\n\n.equatio-apps-discovery-popup-title__warning {\n  height: 38px; }\n\n.equatio-apps-discovery-popup-title__logo {\n  height: 35px;\n  margin-left: 10px; }\n\n.equatio-apps-discovery-popup__button {\n  font-family: "Open Sans", Arial, sans-serif;\n  background-color: #FFF;\n  font-size: 13px;\n  color: #00B7FF;\n  height: 40px !important;\n  position: relative;\n  font-weight: 600;\n  padding: 10px 24px;\n  border-radius: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  margin: 3px 4px;\n  border: 1px solid #00B7FF;\n  transition: 0.2s;\n  cursor: pointer;\n  z-index: 1; }\n\n.equatio-apps-discovery-popup__button.equatio-apps-discovery-popup__button--cancel {\n  background: transparent;\n  border: 0; }\n  .equatio-apps-discovery-popup__button.equatio-apps-discovery-popup__button--cancel:hover {\n    background: transparent;\n    border: 0;\n    color: #0092cc; }\n\n.equatio-apps-discovery-popup__button:hover {\n  background-color: #00B7FF;\n  color: #FFF; }\n', "" ]);
    },
    85: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return p;
        }), n.d(e, "a", function() {
            return f;
        });
        var r = n(1), o = n(120), a = n(12), i = n(60);
        function s(t, e) {
            return Object.keys(t).reduce((n, r) => (n[r] = Object.assign({
                timeZone: e
            }, t[r]), n), {});
        }
        function c(t, e) {
            return Object.keys(Object.assign(Object.assign({}, t), e)).reduce((n, r) => (n[r] = Object.assign(Object.assign({}, t[r] || {}), e[r] || {}), 
            n), {});
        }
        function u(t, e) {
            if (!e) return t;
            const n = i.a.formats;
            return Object.assign(Object.assign(Object.assign({}, n), t), {
                date: c(s(n.date, e), s(t.date || {}, e)),
                time: c(s(n.time, e), s(t.time || {}, e))
            });
        }
        const l = t => r.createElement(r.Fragment, null, ...t);
        function p({locale: t, formats: e, messages: n, defaultLocale: r, defaultFormats: i, onError: s, timeZone: c}, p, f = {
            id: ""
        }, m = {}) {
            const {id: d, defaultMessage: b} = f;
            Object(o.a)(!!d, "[React Intl] An `id` must be provided to format a message.");
            const g = n && n[String(d)];
            e = u(e, c), i = u(i, c);
            let h = [];
            if (g) try {
                h = p.getMessageFormat(g, t, e, {
                    formatters: p
                }).formatHTMLMessage(m);
            } catch (e) {
                s(Object(a.b)(`Error formatting message: "${d}" for locale: "${t}"` + (b ? ", using default message as fallback." : ""), e));
            } else (!b || t && t.toLowerCase() !== r.toLowerCase()) && s(Object(a.b)(`Missing message: "${d}" for locale: "${t}"` + (b ? ", using default message as fallback." : "")));
            if (!h.length && b) try {
                h = p.getMessageFormat(b, r, i).formatHTMLMessage(m);
            } catch (t) {
                s(Object(a.b)(`Error formatting the default message for: "${d}"`, t));
            }
            return h.length ? 1 === h.length && "string" == typeof h[0] ? h[0] || b || String(d) : l(h) : (s(Object(a.b)(`Cannot format message: "${d}", ` + `using message ${g || b ? "source" : "id"} as fallback.`)), 
            "string" == typeof g ? g || b || String(d) : b || String(d));
        }
        function f(t, e, n = {
            id: ""
        }, r = {}) {
            return p(t, e, n, Object.keys(r).reduce((t, e) => {
                const n = r[e];
                return t[e] = "string" == typeof n ? Object(a.e)(n) : n, t;
            }, {}));
        }
    }
} ]);