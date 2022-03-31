(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 26 ], {
    106: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return h;
            });
            var o = n(1);
            function r(e, t, n, o, r, a, i) {
                try {
                    var c = e[a](i), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(o, r);
            }
            function a(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, a) {
                        var i = e.apply(t, n);
                        function c(e) {
                            r(i, o, a, c, s, "next", e);
                        }
                        function s(e) {
                            r(i, o, a, c, s, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            function s(e, t, n) {
                return t && c(e.prototype, t), n && c(e, n), e;
            }
            function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t);
            }
            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function p(e) {
                var t = d();
                return function() {
                    var n, o = m(e);
                    if (t) {
                        var r = m(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return f(this, n);
                };
            }
            function f(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? v(e) : t;
            }
            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function d() {
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
            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var h = function(t) {
                u(c, o["Component"]);
                var r = p(c);
                function c() {
                    var e;
                    return i(this, c), (e = r.call(this)).state = {
                        svgs: []
                    }, a(function*() {
                        var t = (yield Promise.all([ n.e(32).then(n.t.bind(null, 136, 7)), n.e(31).then(n.t.bind(null, 135, 7)) ])).map(function(e) {
                            return e.default;
                        });
                        e.setState({
                            svgs: t
                        });
                    })(), e;
                }
                return s(c, [ {
                    key: "render",
                    value: function() {
                        var t = this.state.svgs, n = void 0 === t ? [] : t;
                        return e.createElement("div", {
                            style: {
                                position: "absolute",
                                top: "-9999px",
                                left: "-9999px"
                            },
                            dangerouslySetInnerHTML: {
                                __html: n.join("")
                            }
                        });
                    }
                } ]), c;
            }();
        }).call(this, n(1));
    },
    350: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            var o = n(1), r = n(105), a = n(48), i = n(32), c = n(106), s = n(644), u = n(2), l = n(398);
            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            function v(e, t, n) {
                return t && f(e.prototype, t), n && f(e, n), e;
            }
            function d(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t);
            }
            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function h(e) {
                var t = w();
                return function() {
                    var n, o = g(e);
                    if (t) {
                        var r = g(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return y(this, n);
                };
            }
            function y(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? b(e) : t;
            }
            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function w() {
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
            function _(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var E = Object(a.defineMessages)({
                showMe: {
                    id: "web-discoverability.popup.activate",
                    defaultMessage: "Show me!"
                },
                dismiss: {
                    id: "web-discoverability.popup.dismiss",
                    defaultMessage: "No Thanks"
                }
            }), O = function(t) {
                d(a, o["Component"]);
                var n = h(a);
                function a() {
                    var e;
                    return p(this, a), _(b(e = n.call(this)), "showMe", function() {
                        e.setState({
                            show: !1
                        }), Object(u.M)(!0), Object(u.I)("Web Discoverability Popup: enabled"), Object(u.u)();
                    }), _(b(e), "dismissWelcome", function() {
                        Object(u.M)(!1), Object(u.I)("Web Discoverability Popup: dismissed"), e.setState({
                            show: !1
                        });
                    }), e.state = {
                        show: !0
                    }, chrome.runtime.onMessage.addListener(function(t) {
                        t && !0 === t.dismissDiscoverWelcome && e.setState({
                            show: !1
                        });
                    }), e;
                }
                return v(a, [ {
                    key: "render",
                    value: function() {
                        var t = this.state.show, n = this.props.intl;
                        return t ? e.createElement(r.a.div, {
                            id: "equatio-discover-shadow"
                        }, e.createElement(s.a, null), e.createElement(c.a, null), e.createElement("div", {
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
                        }))), e.createElement("p", {
                            className: "equatio-apps-discovery-popup__text"
                        }, n.formatMessage(l.b.containMath), " ", n.formatMessage(l.b.containMathInfo1), " ", "EquatIO", " ", n.formatMessage(l.b.containMathInfo2)), e.createElement("div", {
                            className: "equatio-apps-discovery-popup__button-wrapper"
                        }, e.createElement("button", {
                            className: "equatio-apps-discovery-popup__button equatio-apps-discovery-popup__button--cancel",
                            onClick: this.dismissWelcome
                        }, n.formatMessage(E.dismiss)), e.createElement("button", {
                            className: "equatio-apps-discovery-popup__button equatio-apps-discovery-popup__button--not-right-now",
                            onClick: this.showMe
                        }, n.formatMessage(E.showMe)))))) : null;
                    }
                } ]), a;
            }();
            t.default = Object(i.c)(O);
        }.call(this, n(1));
    },
    398: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "b", function() {
                return h;
            });
            var o = n(1), r = n(48), a = n(32);
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            function s(e, t, n) {
                return t && c(e.prototype, t), n && c(e, n), e;
            }
            function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t);
            }
            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function p(e) {
                var t = d();
                return function() {
                    var n, o = m(e);
                    if (t) {
                        var r = m(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                    } else n = o.apply(this, arguments);
                    return f(this, n);
                };
            }
            function f(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? v(e) : t;
            }
            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function d() {
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
            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var h = Object(r.defineMessages)({
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
                u(r, o["Component"]);
                var n = p(r);
                function r() {
                    return i(this, r), n.apply(this, arguments);
                }
                return s(r, [ {
                    key: "render",
                    value: function() {
                        var t = this.props, n = t.onDismiss, o = t.onDontShowClick, r = t.intl;
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
                        }, r.formatMessage(h.containMath), e.createElement("br", null), r.formatMessage(h.containMathInfo1), e.createElement("div", {
                            className: "equatio-apps-discovery-popup-browser-action__icon"
                        }, e.createElement("svg", {
                            viewBox: "0 0 37.4 37.4"
                        }, e.createElement("use", {
                            xlinkHref: "#equatio-svg-logo-icon"
                        })), e.createElement("div", {
                            className: "equatio-apps-discovery-popup-browser-action__badge"
                        }, e.createElement("div", null, "\u03a3"))), r.formatMessage(h.containMathInfo2)), e.createElement("div", {
                            className: "equatio-apps-discovery-popup__button-wrapper"
                        }, e.createElement("button", {
                            className: "equatio-apps-discovery-popup__button equatio-apps-discovery-popup__button--not-right-now",
                            onClick: function() {
                                return n();
                            }
                        }, r.formatMessage(h.notNow))), e.createElement("div", {
                            className: "equatio-apps-discovery-popup__instruction-wrapper"
                        }, e.createElement("a", {
                            href: "#",
                            role: "button",
                            className: "equatio-link-button equatio-link-button--small",
                            onClick: function() {
                                return o();
                            }
                        }, r.formatMessage(h.dontShow)))));
                    }
                } ]), r;
            }();
            t.a = Object(a.c)(y);
        }).call(this, n(1));
    },
    644: function(e, t, n) {
        "use strict";
        (function(e) {
            var o = n(109), r = n.n(o);
            t.a = function() {
                return e.createElement("div", null, [ r.a ].map(function(t, n) {
                    return e.createElement("style", {
                        key: n.toString(),
                        type: "text/css"
                    }, t);
                }));
            };
        }).call(this, n(1));
    }
} ]);