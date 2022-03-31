(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 1 ], {
    120: function(e, t, r) {
        "use strict";
        function n(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r(t);
        }
        r.d(t, "a", function() {
            return n;
        });
    },
    133: function(e, t, r) {
        "use strict";
        e.exports = r(279);
    },
    27: function(e, t, r) {
        "use strict";
        var n = function() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var n = Array(e), o = 0;
            for (t = 0; t < r; t++) for (var a = arguments[t], u = 0, i = a.length; u < i; u++, 
            o++) n[o] = a[u];
            return n;
        };
        function o(e) {
            return JSON.stringify(e.map(function(e) {
                return e && "object" == typeof e ? a(e) : e;
            }));
        }
        function a(e) {
            return Object.keys(e).sort().map(function(t) {
                var r;
                return (r = {})[t] = e[t], r;
            });
        }
        var u = function(e, t) {
            return void 0 === t && (t = {}), function() {
                for (var r, a = [], u = 0; u < arguments.length; u++) a[u] = arguments[u];
                var i = o(a), c = i && t[i];
                return c || (c = new ((r = e).bind.apply(r, n([ void 0 ], a)))(), i && (t[i] = c)), 
                c;
            };
        };
        t.a = u;
    },
    279: function(e, t, r) {
        "use strict";
        /** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */        var n = "function" == typeof Symbol && Symbol.for, o = n ? Symbol.for("react.element") : 60103, a = n ? Symbol.for("react.portal") : 60106, u = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, s = n ? Symbol.for("react.provider") : 60109, l = n ? Symbol.for("react.context") : 60110, f = n ? Symbol.for("react.async_mode") : 60111, p = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, m = n ? Symbol.for("react.suspense") : 60113, g = n ? Symbol.for("react.suspense_list") : 60120, y = n ? Symbol.for("react.memo") : 60115, d = n ? Symbol.for("react.lazy") : 60116, v = n ? Symbol.for("react.block") : 60121, b = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, A = n ? Symbol.for("react.scope") : 60119;
        function x(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                  case o:
                    switch (e = e.type) {
                      case f:
                      case p:
                      case u:
                      case c:
                      case i:
                      case m:
                        return e;

                      default:
                        switch (e = e && e.$$typeof) {
                          case l:
                          case h:
                          case d:
                          case y:
                          case s:
                            return e;

                          default:
                            return t;
                        }
                    }

                  case a:
                    return t;
                }
            }
        }
        function C(e) {
            return x(e) === p;
        }
        t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = l, t.ContextProvider = s, 
        t.Element = o, t.ForwardRef = h, t.Fragment = u, t.Lazy = d, t.Memo = y, t.Portal = a, 
        t.Profiler = c, t.StrictMode = i, t.Suspense = m, t.isAsyncMode = function(e) {
            return C(e) || x(e) === f;
        }, t.isConcurrentMode = C, t.isContextConsumer = function(e) {
            return x(e) === l;
        }, t.isContextProvider = function(e) {
            return x(e) === s;
        }, t.isElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === o;
        }, t.isForwardRef = function(e) {
            return x(e) === h;
        }, t.isFragment = function(e) {
            return x(e) === u;
        }, t.isLazy = function(e) {
            return x(e) === d;
        }, t.isMemo = function(e) {
            return x(e) === y;
        }, t.isPortal = function(e) {
            return x(e) === a;
        }, t.isProfiler = function(e) {
            return x(e) === c;
        }, t.isStrictMode = function(e) {
            return x(e) === i;
        }, t.isSuspense = function(e) {
            return x(e) === m;
        }, t.isValidElementType = function(e) {
            return "string" == typeof e || "function" == typeof e || e === u || e === p || e === c || e === i || e === m || e === g || "object" == typeof e && null !== e && (e.$$typeof === d || e.$$typeof === y || e.$$typeof === s || e.$$typeof === l || e.$$typeof === h || e.$$typeof === b || e.$$typeof === w || e.$$typeof === A || e.$$typeof === v);
        }, t.typeOf = x;
    },
    57: function(e, t, r) {
        "use strict";
        var n = r(133), o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }, a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }, u = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        }, i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }, c = {};
        function s(e) {
            return n.isMemo(e) ? i : c[e.$$typeof] || o;
        }
        c[n.ForwardRef] = u, c[n.Memo] = i;
        var l = Object.defineProperty, f = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, g = Object.prototype;
        function y(e, t, r) {
            if ("string" != typeof t) {
                if (g) {
                    var n = m(t);
                    n && n !== g && y(e, n, r);
                }
                var o = f(t);
                p && (o = o.concat(p(t)));
                for (var u = s(e), i = s(t), c = 0; c < o.length; ++c) {
                    var d = o[c];
                    if (!(a[d] || r && r[d] || i && i[d] || u && u[d])) {
                        var v = h(t, d);
                        try {
                            l(e, d, v);
                        } catch (e) {}
                    }
                }
            }
            return e;
        }
        e.exports = y;
    },
    60: function(e, t, r) {
        "use strict";
        var n;
        function o(e) {
            return e.type === n.literal;
        }
        function a(e) {
            return e.type === n.argument;
        }
        function u(e) {
            return e.type === n.number;
        }
        function i(e) {
            return e.type === n.date;
        }
        function c(e) {
            return e.type === n.time;
        }
        function s(e) {
            return e.type === n.select;
        }
        function l(e) {
            return e.type === n.plural;
        }
        function f(e) {
            return e.type === n.pound;
        }
        function p(e) {
            return !(!e || "object" != typeof e || 0 !== e.type);
        }
        function h(e) {
            return !(!e || "object" != typeof e || 1 !== e.type);
        }
        !function(e) {
            e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", 
            e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", 
            e[e.pound = 7] = "pound";
        }(n || (n = {}));
        var m, g = (m = function(e, t) {
            return (m = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }, function(e, t) {
            function r() {
                this.constructor = e;
            }
            m(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, 
            new r());
        }), y = function() {
            return (y = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
        }, d = function(e) {
            function t(r, n, o, a) {
                var u = e.call(this) || this;
                return u.message = r, u.expected = n, u.found = o, u.location = a, u.name = "SyntaxError", 
                "function" == typeof Error.captureStackTrace && Error.captureStackTrace(u, t), u;
            }
            return g(t, e), t.buildMessage = function(e, t) {
                function r(e) {
                    return e.charCodeAt(0).toString(16).toUpperCase();
                }
                function n(e) {
                    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                        return "\\x0" + r(e);
                    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                        return "\\x" + r(e);
                    });
                }
                function o(e) {
                    return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
                        return "\\x0" + r(e);
                    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
                        return "\\x" + r(e);
                    });
                }
                function a(e) {
                    switch (e.type) {
                      case "literal":
                        return '"' + n(e.text) + '"';

                      case "class":
                        var t = e.parts.map(function(e) {
                            return Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e);
                        });
                        return "[" + (e.inverted ? "^" : "") + t + "]";

                      case "any":
                        return "any character";

                      case "end":
                        return "end of input";

                      case "other":
                        return e.description;
                    }
                }
                function u(e) {
                    var t, r, n = e.map(a);
                    if (n.sort(), n.length > 0) {
                        for (t = 1, r = 1; t < n.length; t++) n[t - 1] !== n[t] && (n[r] = n[t], r++);
                        n.length = r;
                    }
                    switch (n.length) {
                      case 1:
                        return n[0];

                      case 2:
                        return n[0] + " or " + n[1];

                      default:
                        return n.slice(0, -1).join(", ") + ", or " + n[n.length - 1];
                    }
                }
                function i(e) {
                    return e ? '"' + n(e) + '"' : "end of input";
                }
                return "Expected " + u(e) + " but " + i(t) + " found.";
            }, t;
        }(Error);
        function v(e, t) {
            t = void 0 !== t ? t : {};
            var r, o = {}, a = {
                start: ht
            }, u = ht, i = function(e) {
                return e.join("");
            }, c = function(e) {
                return y({
                    type: n.literal,
                    value: e
                }, Qt());
            }, s = "#", l = nt("#", !1), f = function() {
                return y({
                    type: n.pound
                }, Qt());
            }, p = it("argumentElement"), h = "{", m = nt("{", !1), g = "}", v = nt("}", !1), b = function(e) {
                return y({
                    type: n.argument,
                    value: e
                }, Qt());
            }, w = it("numberSkeletonId"), A = /^['\/{}]/, x = ot([ "'", "/", "{", "}" ], !1, !1), C = at(), O = it("numberSkeletonTokenOption"), S = "/", F = nt("/", !1), D = function(e) {
                return e;
            }, k = it("numberSkeletonToken"), E = function(e, t) {
                return {
                    stem: e,
                    options: t
                };
            }, j = function(e) {
                return y({
                    type: 0,
                    tokens: e
                }, Qt());
            }, $ = "::", P = nt("::", !1), _ = function(e) {
                return e;
            }, T = function() {
                return Xt.push("numberArgStyle"), !0;
            }, R = function(e) {
                return Xt.pop(), e.replace(/\s*$/, "");
            }, M = ",", N = nt(",", !1), z = "number", I = nt("number", !1), Z = function(e, t, r) {
                return y({
                    type: "number" === t ? n.number : "date" === t ? n.date : n.time,
                    style: r && r[2],
                    value: e
                }, Qt());
            }, L = "'", B = nt("'", !1), H = /^[^']/, q = ot([ "'" ], !0, !1), J = /^[^a-zA-Z'{}]/, U = ot([ [ "a", "z" ], [ "A", "Z" ], "'", "{", "}" ], !0, !1), V = /^[a-zA-Z]/, X = ot([ [ "a", "z" ], [ "A", "Z" ] ], !1, !1), G = function(e) {
                return y({
                    type: 1,
                    pattern: e
                }, Qt());
            }, K = function() {
                return Xt.push("dateOrTimeArgStyle"), !0;
            }, Q = "date", W = nt("date", !1), Y = "time", ee = nt("time", !1), te = "plural", re = nt("plural", !1), ne = "selectordinal", oe = nt("selectordinal", !1), ae = "offset:", ue = nt("offset:", !1), ie = function(e, t, r, o) {
                return y({
                    type: n.plural,
                    pluralType: "plural" === t ? "cardinal" : "ordinal",
                    value: e,
                    offset: r ? r[2] : 0,
                    options: o.reduce(function(e, t) {
                        var r = t.id, n = t.value, o = t.location;
                        return r in e && rt('Duplicate option "' + r + '" in plural element: "' + et() + '"', tt()), 
                        e[r] = {
                            value: n,
                            location: o
                        }, e;
                    }, {})
                }, Qt());
            }, ce = "select", se = nt("select", !1), le = function(e, t) {
                return y({
                    type: n.select,
                    value: e,
                    options: t.reduce(function(e, t) {
                        var r = t.id, n = t.value, o = t.location;
                        return r in e && rt('Duplicate option "' + r + '" in select element: "' + et() + '"', tt()), 
                        e[r] = {
                            value: n,
                            location: o
                        }, e;
                    }, {})
                }, Qt());
            }, fe = "=", pe = nt("=", !1), he = function(e) {
                return Xt.push("select"), !0;
            }, me = function(e, t) {
                return Xt.pop(), y({
                    id: e,
                    value: t
                }, Qt());
            }, ge = function(e) {
                return Xt.push("plural"), !0;
            }, ye = function(e, t) {
                return Xt.pop(), y({
                    id: e,
                    value: t
                }, Qt());
            }, de = it("whitespace"), ve = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, be = ot([ [ "\t", "\r" ], " ", "\x85", "\xa0", "\u1680", [ "\u2000", "\u200a" ], "\u2028", "\u2029", "\u202f", "\u205f", "\u3000" ], !1, !1), we = it("syntax pattern"), Ae = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/, xe = ot([ [ "!", "/" ], [ ":", "@" ], [ "[", "^" ], "`", [ "{", "~" ], [ "\xa1", "\xa7" ], "\xa9", "\xab", "\xac", "\xae", "\xb0", "\xb1", "\xb6", "\xbb", "\xbf", "\xd7", "\xf7", [ "\u2010", "\u2027" ], [ "\u2030", "\u203e" ], [ "\u2041", "\u2053" ], [ "\u2055", "\u205e" ], [ "\u2190", "\u245f" ], [ "\u2500", "\u2775" ], [ "\u2794", "\u2bff" ], [ "\u2e00", "\u2e7f" ], [ "\u3001", "\u3003" ], [ "\u3008", "\u3020" ], "\u3030", "\ufd3e", "\ufd3f", "\ufe45", "\ufe46" ], !1, !1), Ce = it("optional whitespace"), Oe = it("number"), Se = "-", Fe = nt("-", !1), De = function(e, t) {
                return t ? e ? -t : t : 0;
            }, ke = (it("apostrophe"), it("double apostrophes")), Ee = "''", je = nt("''", !1), $e = function() {
                return "'";
            }, Pe = function(e, t) {
                return e + t.replace("''", "'");
            }, _e = function(e) {
                return !("{" === e || Kt() && "#" === e || Gt() && "}" === e);
            }, Te = "\n", Re = nt("\n", !1), Me = function(e) {
                return "{" === e || "}" === e || Kt() && "#" === e;
            }, Ne = it("argNameOrNumber"), ze = it("argNumber"), Ie = "0", Ze = nt("0", !1), Le = function() {
                return 0;
            }, Be = /^[1-9]/, He = ot([ [ "1", "9" ] ], !1, !1), qe = /^[0-9]/, Je = ot([ [ "0", "9" ] ], !1, !1), Ue = function(e) {
                return parseInt(e.join(""), 10);
            }, Ve = it("argName"), Xe = 0, Ge = 0, Ke = [ {
                line: 1,
                column: 1
            } ], Qe = 0, We = [], Ye = 0;
            if (void 0 !== t.startRule) {
                if (!(t.startRule in a)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                u = a[t.startRule];
            }
            function et() {
                return e.substring(Ge, Xe);
            }
            function tt() {
                return st(Ge, Xe);
            }
            function rt(e, t) {
                throw ft(e, t = void 0 !== t ? t : st(Ge, Xe));
            }
            function nt(e, t) {
                return {
                    type: "literal",
                    text: e,
                    ignoreCase: t
                };
            }
            function ot(e, t, r) {
                return {
                    type: "class",
                    parts: e,
                    inverted: t,
                    ignoreCase: r
                };
            }
            function at() {
                return {
                    type: "any"
                };
            }
            function ut() {
                return {
                    type: "end"
                };
            }
            function it(e) {
                return {
                    type: "other",
                    description: e
                };
            }
            function ct(t) {
                var r, n = Ke[t];
                if (n) return n;
                for (r = t - 1; !Ke[r]; ) r--;
                for (n = {
                    line: (n = Ke[r]).line,
                    column: n.column
                }; r < t; ) 10 === e.charCodeAt(r) ? (n.line++, n.column = 1) : n.column++, r++;
                return Ke[t] = n, n;
            }
            function st(e, t) {
                var r = ct(e), n = ct(t);
                return {
                    start: {
                        offset: e,
                        line: r.line,
                        column: r.column
                    },
                    end: {
                        offset: t,
                        line: n.line,
                        column: n.column
                    }
                };
            }
            function lt(e) {
                Xe < Qe || (Xe > Qe && (Qe = Xe, We = []), We.push(e));
            }
            function ft(e, t) {
                return new d(e, [], "", t);
            }
            function pt(e, t, r) {
                return new d(d.buildMessage(e, t), e, t, r);
            }
            function ht() {
                return mt();
            }
            function mt() {
                var e, t;
                for (e = [], t = gt(); t !== o; ) e.push(t), t = gt();
                return e;
            }
            function gt() {
                var e;
                return (e = dt()) === o && (e = bt()) === o && (e = $t()) === o && (e = Pt()) === o && (e = _t()) === o && (e = vt()), 
                e;
            }
            function yt() {
                var e, t, r;
                if (e = Xe, t = [], (r = Lt()) === o && (r = Bt()) === o && (r = Ht()), r !== o) for (;r !== o; ) t.push(r), 
                (r = Lt()) === o && (r = Bt()) === o && (r = Ht()); else t = o;
                return t !== o && (Ge = e, t = i(t)), e = t;
            }
            function dt() {
                var e, t;
                return e = Xe, (t = yt()) !== o && (Ge = e, t = c(t)), e = t;
            }
            function vt() {
                var t, r;
                return t = Xe, 35 === e.charCodeAt(Xe) ? (r = s, Xe++) : (r = o, 0 === Ye && lt(l)), 
                r !== o && (Ge = t, r = f()), t = r;
            }
            function bt() {
                var t, r, n, a;
                return Ye++, t = Xe, 123 === e.charCodeAt(Xe) ? (r = h, Xe++) : (r = o, 0 === Ye && lt(m)), 
                r !== o && It() !== o && (n = Jt()) !== o && It() !== o ? (125 === e.charCodeAt(Xe) ? (a = g, 
                Xe++) : (a = o, 0 === Ye && lt(v)), a !== o ? (Ge = t, t = r = b(n)) : (Xe = t, 
                t = o)) : (Xe = t, t = o), Ye--, t === o && (r = o, 0 === Ye && lt(p)), t;
            }
            function wt() {
                var t, r, n, a, u;
                if (Ye++, t = Xe, r = [], n = Xe, a = Xe, Ye++, (u = Nt()) === o && (A.test(e.charAt(Xe)) ? (u = e.charAt(Xe), 
                Xe++) : (u = o, 0 === Ye && lt(x))), Ye--, u === o ? a = void 0 : (Xe = a, a = o), 
                a !== o ? (e.length > Xe ? (u = e.charAt(Xe), Xe++) : (u = o, 0 === Ye && lt(C)), 
                u !== o ? n = a = [ a, u ] : (Xe = n, n = o)) : (Xe = n, n = o), n !== o) for (;n !== o; ) r.push(n), 
                n = Xe, a = Xe, Ye++, (u = Nt()) === o && (A.test(e.charAt(Xe)) ? (u = e.charAt(Xe), 
                Xe++) : (u = o, 0 === Ye && lt(x))), Ye--, u === o ? a = void 0 : (Xe = a, a = o), 
                a !== o ? (e.length > Xe ? (u = e.charAt(Xe), Xe++) : (u = o, 0 === Ye && lt(C)), 
                u !== o ? n = a = [ a, u ] : (Xe = n, n = o)) : (Xe = n, n = o); else r = o;
                return t = r !== o ? e.substring(t, Xe) : r, Ye--, t === o && (r = o, 0 === Ye && lt(w)), 
                t;
            }
            function At() {
                var t, r, n;
                return Ye++, t = Xe, 47 === e.charCodeAt(Xe) ? (r = S, Xe++) : (r = o, 0 === Ye && lt(F)), 
                r !== o && (n = wt()) !== o ? (Ge = t, t = r = D(n)) : (Xe = t, t = o), Ye--, t === o && (r = o, 
                0 === Ye && lt(O)), t;
            }
            function xt() {
                var e, t, r, n;
                if (Ye++, e = Xe, It() !== o) if ((t = wt()) !== o) {
                    for (r = [], n = At(); n !== o; ) r.push(n), n = At();
                    r !== o ? (Ge = e, e = E(t, r)) : (Xe = e, e = o);
                } else Xe = e, e = o; else Xe = e, e = o;
                return Ye--, e === o && (o, 0 === Ye && lt(k)), e;
            }
            function Ct() {
                var e, t, r;
                if (e = Xe, t = [], (r = xt()) !== o) for (;r !== o; ) t.push(r), r = xt(); else t = o;
                return t !== o && (Ge = e, t = j(t)), e = t;
            }
            function Ot() {
                var t, r, n;
                return t = Xe, e.substr(Xe, 2) === $ ? (r = $, Xe += 2) : (r = o, 0 === Ye && lt(P)), 
                r !== o && (n = Ct()) !== o ? (Ge = t, t = r = _(n)) : (Xe = t, t = o), t === o && (t = Xe, 
                Ge = Xe, (r = (r = T()) ? void 0 : o) !== o && (n = yt()) !== o ? (Ge = t, t = r = R(n)) : (Xe = t, 
                t = o)), t;
            }
            function St() {
                var t, r, n, a, u, i, c, s, l;
                return t = Xe, 123 === e.charCodeAt(Xe) ? (r = h, Xe++) : (r = o, 0 === Ye && lt(m)), 
                r !== o && It() !== o && (n = Jt()) !== o && It() !== o ? (44 === e.charCodeAt(Xe) ? (a = M, 
                Xe++) : (a = o, 0 === Ye && lt(N)), a !== o && It() !== o ? (e.substr(Xe, 6) === z ? (u = z, 
                Xe += 6) : (u = o, 0 === Ye && lt(I)), u !== o && It() !== o ? (i = Xe, 44 === e.charCodeAt(Xe) ? (c = M, 
                Xe++) : (c = o, 0 === Ye && lt(N)), c !== o && (s = It()) !== o && (l = Ot()) !== o ? i = c = [ c, s, l ] : (Xe = i, 
                i = o), i === o && (i = null), i !== o && (c = It()) !== o ? (125 === e.charCodeAt(Xe) ? (s = g, 
                Xe++) : (s = o, 0 === Ye && lt(v)), s !== o ? (Ge = t, t = r = Z(n, u, i)) : (Xe = t, 
                t = o)) : (Xe = t, t = o)) : (Xe = t, t = o)) : (Xe = t, t = o)) : (Xe = t, t = o), 
                t;
            }
            function Ft() {
                var t, r, n, a;
                if (t = Xe, 39 === e.charCodeAt(Xe) ? (r = L, Xe++) : (r = o, 0 === Ye && lt(B)), 
                r !== o) {
                    if (n = [], (a = Lt()) === o && (H.test(e.charAt(Xe)) ? (a = e.charAt(Xe), Xe++) : (a = o, 
                    0 === Ye && lt(q))), a !== o) for (;a !== o; ) n.push(a), (a = Lt()) === o && (H.test(e.charAt(Xe)) ? (a = e.charAt(Xe), 
                    Xe++) : (a = o, 0 === Ye && lt(q))); else n = o;
                    n !== o ? (39 === e.charCodeAt(Xe) ? (a = L, Xe++) : (a = o, 0 === Ye && lt(B)), 
                    a !== o ? t = r = [ r, n, a ] : (Xe = t, t = o)) : (Xe = t, t = o);
                } else Xe = t, t = o;
                if (t === o) if (t = [], (r = Lt()) === o && (J.test(e.charAt(Xe)) ? (r = e.charAt(Xe), 
                Xe++) : (r = o, 0 === Ye && lt(U))), r !== o) for (;r !== o; ) t.push(r), (r = Lt()) === o && (J.test(e.charAt(Xe)) ? (r = e.charAt(Xe), 
                Xe++) : (r = o, 0 === Ye && lt(U))); else t = o;
                return t;
            }
            function Dt() {
                var t, r;
                if (t = [], V.test(e.charAt(Xe)) ? (r = e.charAt(Xe), Xe++) : (r = o, 0 === Ye && lt(X)), 
                r !== o) for (;r !== o; ) t.push(r), V.test(e.charAt(Xe)) ? (r = e.charAt(Xe), Xe++) : (r = o, 
                0 === Ye && lt(X)); else t = o;
                return t;
            }
            function kt() {
                var t, r, n, a;
                if (t = Xe, r = Xe, n = [], (a = Ft()) === o && (a = Dt()), a !== o) for (;a !== o; ) n.push(a), 
                (a = Ft()) === o && (a = Dt()); else n = o;
                return (r = n !== o ? e.substring(r, Xe) : n) !== o && (Ge = t, r = G(r)), t = r;
            }
            function Et() {
                var t, r, n;
                return t = Xe, e.substr(Xe, 2) === $ ? (r = $, Xe += 2) : (r = o, 0 === Ye && lt(P)), 
                r !== o && (n = kt()) !== o ? (Ge = t, t = r = _(n)) : (Xe = t, t = o), t === o && (t = Xe, 
                Ge = Xe, (r = (r = K()) ? void 0 : o) !== o && (n = yt()) !== o ? (Ge = t, t = r = R(n)) : (Xe = t, 
                t = o)), t;
            }
            function jt() {
                var t, r, n, a, u, i, c, s, l;
                return t = Xe, 123 === e.charCodeAt(Xe) ? (r = h, Xe++) : (r = o, 0 === Ye && lt(m)), 
                r !== o && It() !== o && (n = Jt()) !== o && It() !== o ? (44 === e.charCodeAt(Xe) ? (a = M, 
                Xe++) : (a = o, 0 === Ye && lt(N)), a !== o && It() !== o ? (e.substr(Xe, 4) === Q ? (u = Q, 
                Xe += 4) : (u = o, 0 === Ye && lt(W)), u === o && (e.substr(Xe, 4) === Y ? (u = Y, 
                Xe += 4) : (u = o, 0 === Ye && lt(ee))), u !== o && It() !== o ? (i = Xe, 44 === e.charCodeAt(Xe) ? (c = M, 
                Xe++) : (c = o, 0 === Ye && lt(N)), c !== o && (s = It()) !== o && (l = Et()) !== o ? i = c = [ c, s, l ] : (Xe = i, 
                i = o), i === o && (i = null), i !== o && (c = It()) !== o ? (125 === e.charCodeAt(Xe) ? (s = g, 
                Xe++) : (s = o, 0 === Ye && lt(v)), s !== o ? (Ge = t, t = r = Z(n, u, i)) : (Xe = t, 
                t = o)) : (Xe = t, t = o)) : (Xe = t, t = o)) : (Xe = t, t = o)) : (Xe = t, t = o), 
                t;
            }
            function $t() {
                var e;
                return (e = St()) === o && (e = jt()), e;
            }
            function Pt() {
                var t, r, n, a, u, i, c, s, l, f, p;
                if (t = Xe, 123 === e.charCodeAt(Xe) ? (r = h, Xe++) : (r = o, 0 === Ye && lt(m)), 
                r !== o) if (It() !== o) if ((n = Jt()) !== o) if (It() !== o) if (44 === e.charCodeAt(Xe) ? (a = M, 
                Xe++) : (a = o, 0 === Ye && lt(N)), a !== o) if (It() !== o) if (e.substr(Xe, 6) === te ? (u = te, 
                Xe += 6) : (u = o, 0 === Ye && lt(re)), u === o && (e.substr(Xe, 13) === ne ? (u = ne, 
                Xe += 13) : (u = o, 0 === Ye && lt(oe))), u !== o) if (It() !== o) if (44 === e.charCodeAt(Xe) ? (i = M, 
                Xe++) : (i = o, 0 === Ye && lt(N)), i !== o) if (It() !== o) if (c = Xe, e.substr(Xe, 7) === ae ? (s = ae, 
                Xe += 7) : (s = o, 0 === Ye && lt(ue)), s !== o && (l = It()) !== o && (f = Zt()) !== o ? c = s = [ s, l, f ] : (Xe = c, 
                c = o), c === o && (c = null), c !== o) if ((s = It()) !== o) {
                    if (l = [], (f = Mt()) !== o) for (;f !== o; ) l.push(f), f = Mt(); else l = o;
                    l !== o && (f = It()) !== o ? (125 === e.charCodeAt(Xe) ? (p = g, Xe++) : (p = o, 
                    0 === Ye && lt(v)), p !== o ? (Ge = t, t = r = ie(n, u, c, l)) : (Xe = t, t = o)) : (Xe = t, 
                    t = o);
                } else Xe = t, t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, 
                t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, 
                t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, t = o;
                return t;
            }
            function _t() {
                var t, r, n, a, u, i, c, s, l;
                if (t = Xe, 123 === e.charCodeAt(Xe) ? (r = h, Xe++) : (r = o, 0 === Ye && lt(m)), 
                r !== o) if (It() !== o) if ((n = Jt()) !== o) if (It() !== o) if (44 === e.charCodeAt(Xe) ? (a = M, 
                Xe++) : (a = o, 0 === Ye && lt(N)), a !== o) if (It() !== o) if (e.substr(Xe, 6) === ce ? (u = ce, 
                Xe += 6) : (u = o, 0 === Ye && lt(se)), u !== o) if (It() !== o) if (44 === e.charCodeAt(Xe) ? (i = M, 
                Xe++) : (i = o, 0 === Ye && lt(N)), i !== o) if (It() !== o) {
                    if (c = [], (s = Rt()) !== o) for (;s !== o; ) c.push(s), s = Rt(); else c = o;
                    c !== o && (s = It()) !== o ? (125 === e.charCodeAt(Xe) ? (l = g, Xe++) : (l = o, 
                    0 === Ye && lt(v)), l !== o ? (Ge = t, t = r = le(n, c)) : (Xe = t, t = o)) : (Xe = t, 
                    t = o);
                } else Xe = t, t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, 
                t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, t = o; else Xe = t, 
                t = o; else Xe = t, t = o;
                return t;
            }
            function Tt() {
                var t, r, n, a;
                return t = Xe, r = Xe, 61 === e.charCodeAt(Xe) ? (n = fe, Xe++) : (n = o, 0 === Ye && lt(pe)), 
                n !== o && (a = Zt()) !== o ? r = n = [ n, a ] : (Xe = r, r = o), (t = r !== o ? e.substring(t, Xe) : r) === o && (t = Vt()), 
                t;
            }
            function Rt() {
                var t, r, n, a, u;
                return t = Xe, It() !== o && (r = Vt()) !== o && It() !== o ? (123 === e.charCodeAt(Xe) ? (n = h, 
                Xe++) : (n = o, 0 === Ye && lt(m)), n !== o ? (Ge = Xe, (he(r) ? void 0 : o) !== o && (a = mt()) !== o ? (125 === e.charCodeAt(Xe) ? (u = g, 
                Xe++) : (u = o, 0 === Ye && lt(v)), u !== o ? (Ge = t, t = me(r, a)) : (Xe = t, 
                t = o)) : (Xe = t, t = o)) : (Xe = t, t = o)) : (Xe = t, t = o), t;
            }
            function Mt() {
                var t, r, n, a, u;
                return t = Xe, It() !== o && (r = Tt()) !== o && It() !== o ? (123 === e.charCodeAt(Xe) ? (n = h, 
                Xe++) : (n = o, 0 === Ye && lt(m)), n !== o ? (Ge = Xe, (ge(r) ? void 0 : o) !== o && (a = mt()) !== o ? (125 === e.charCodeAt(Xe) ? (u = g, 
                Xe++) : (u = o, 0 === Ye && lt(v)), u !== o ? (Ge = t, t = ye(r, a)) : (Xe = t, 
                t = o)) : (Xe = t, t = o)) : (Xe = t, t = o)) : (Xe = t, t = o), t;
            }
            function Nt() {
                var t;
                return Ye++, ve.test(e.charAt(Xe)) ? (t = e.charAt(Xe), Xe++) : (t = o, 0 === Ye && lt(be)), 
                Ye--, t === o && (o, 0 === Ye && lt(de)), t;
            }
            function zt() {
                var t;
                return Ye++, Ae.test(e.charAt(Xe)) ? (t = e.charAt(Xe), Xe++) : (t = o, 0 === Ye && lt(xe)), 
                Ye--, t === o && (o, 0 === Ye && lt(we)), t;
            }
            function It() {
                var t, r, n;
                for (Ye++, t = Xe, r = [], n = Nt(); n !== o; ) r.push(n), n = Nt();
                return t = r !== o ? e.substring(t, Xe) : r, Ye--, t === o && (r = o, 0 === Ye && lt(Ce)), 
                t;
            }
            function Zt() {
                var t, r, n;
                return Ye++, t = Xe, 45 === e.charCodeAt(Xe) ? (r = Se, Xe++) : (r = o, 0 === Ye && lt(Fe)), 
                r === o && (r = null), r !== o && (n = Ut()) !== o ? (Ge = t, t = r = De(r, n)) : (Xe = t, 
                t = o), Ye--, t === o && (r = o, 0 === Ye && lt(Oe)), t;
            }
            function Lt() {
                var t, r;
                return Ye++, t = Xe, e.substr(Xe, 2) === Ee ? (r = Ee, Xe += 2) : (r = o, 0 === Ye && lt(je)), 
                r !== o && (Ge = t, r = $e()), Ye--, (t = r) === o && (r = o, 0 === Ye && lt(ke)), 
                t;
            }
            function Bt() {
                var t, r, n, a, u, i;
                if (t = Xe, 39 === e.charCodeAt(Xe) ? (r = L, Xe++) : (r = o, 0 === Ye && lt(B)), 
                r !== o) if ((n = qt()) !== o) {
                    for (a = Xe, u = [], e.substr(Xe, 2) === Ee ? (i = Ee, Xe += 2) : (i = o, 0 === Ye && lt(je)), 
                    i === o && (H.test(e.charAt(Xe)) ? (i = e.charAt(Xe), Xe++) : (i = o, 0 === Ye && lt(q))); i !== o; ) u.push(i), 
                    e.substr(Xe, 2) === Ee ? (i = Ee, Xe += 2) : (i = o, 0 === Ye && lt(je)), i === o && (H.test(e.charAt(Xe)) ? (i = e.charAt(Xe), 
                    Xe++) : (i = o, 0 === Ye && lt(q)));
                    (a = u !== o ? e.substring(a, Xe) : u) !== o ? (39 === e.charCodeAt(Xe) ? (u = L, 
                    Xe++) : (u = o, 0 === Ye && lt(B)), u === o && (u = null), u !== o ? (Ge = t, t = r = Pe(n, a)) : (Xe = t, 
                    t = o)) : (Xe = t, t = o);
                } else Xe = t, t = o; else Xe = t, t = o;
                return t;
            }
            function Ht() {
                var t, r, n, a;
                return t = Xe, r = Xe, e.length > Xe ? (n = e.charAt(Xe), Xe++) : (n = o, 0 === Ye && lt(C)), 
                n !== o ? (Ge = Xe, (a = (a = _e(n)) ? void 0 : o) !== o ? r = n = [ n, a ] : (Xe = r, 
                r = o)) : (Xe = r, r = o), r === o && (10 === e.charCodeAt(Xe) ? (r = Te, Xe++) : (r = o, 
                0 === Ye && lt(Re))), t = r !== o ? e.substring(t, Xe) : r;
            }
            function qt() {
                var t, r, n, a;
                return t = Xe, r = Xe, e.length > Xe ? (n = e.charAt(Xe), Xe++) : (n = o, 0 === Ye && lt(C)), 
                n !== o ? (Ge = Xe, (a = (a = Me(n)) ? void 0 : o) !== o ? r = n = [ n, a ] : (Xe = r, 
                r = o)) : (Xe = r, r = o), t = r !== o ? e.substring(t, Xe) : r;
            }
            function Jt() {
                var t, r;
                return Ye++, t = Xe, (r = Ut()) === o && (r = Vt()), t = r !== o ? e.substring(t, Xe) : r, 
                Ye--, t === o && (r = o, 0 === Ye && lt(Ne)), t;
            }
            function Ut() {
                var t, r, n, a, u;
                if (Ye++, t = Xe, 48 === e.charCodeAt(Xe) ? (r = Ie, Xe++) : (r = o, 0 === Ye && lt(Ze)), 
                r !== o && (Ge = t, r = Le()), (t = r) === o) {
                    if (t = Xe, r = Xe, Be.test(e.charAt(Xe)) ? (n = e.charAt(Xe), Xe++) : (n = o, 0 === Ye && lt(He)), 
                    n !== o) {
                        for (a = [], qe.test(e.charAt(Xe)) ? (u = e.charAt(Xe), Xe++) : (u = o, 0 === Ye && lt(Je)); u !== o; ) a.push(u), 
                        qe.test(e.charAt(Xe)) ? (u = e.charAt(Xe), Xe++) : (u = o, 0 === Ye && lt(Je));
                        a !== o ? r = n = [ n, a ] : (Xe = r, r = o);
                    } else Xe = r, r = o;
                    r !== o && (Ge = t, r = Ue(r)), t = r;
                }
                return Ye--, t === o && (r = o, 0 === Ye && lt(ze)), t;
            }
            function Vt() {
                var t, r, n, a, u;
                if (Ye++, t = Xe, r = [], n = Xe, a = Xe, Ye++, (u = Nt()) === o && (u = zt()), 
                Ye--, u === o ? a = void 0 : (Xe = a, a = o), a !== o ? (e.length > Xe ? (u = e.charAt(Xe), 
                Xe++) : (u = o, 0 === Ye && lt(C)), u !== o ? n = a = [ a, u ] : (Xe = n, n = o)) : (Xe = n, 
                n = o), n !== o) for (;n !== o; ) r.push(n), n = Xe, a = Xe, Ye++, (u = Nt()) === o && (u = zt()), 
                Ye--, u === o ? a = void 0 : (Xe = a, a = o), a !== o ? (e.length > Xe ? (u = e.charAt(Xe), 
                Xe++) : (u = o, 0 === Ye && lt(C)), u !== o ? n = a = [ a, u ] : (Xe = n, n = o)) : (Xe = n, 
                n = o); else r = o;
                return t = r !== o ? e.substring(t, Xe) : r, Ye--, t === o && (r = o, 0 === Ye && lt(Ve)), 
                t;
            }
            var Xt = [ "root" ];
            function Gt() {
                return Xt.length > 1;
            }
            function Kt() {
                return "plural" === Xt[Xt.length - 1];
            }
            function Qt() {
                return t && t.captureLocation ? {
                    location: tt()
                } : {};
            }
            if ((r = u()) !== o && Xe === e.length) return r;
            throw r !== o && Xe < e.length && lt(ut()), pt(We, Qe < e.length ? e.charAt(Qe) : null, Qe < e.length ? st(Qe, Qe + 1) : st(Qe, Qe));
        }
        var b = v, w = function() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var n = Array(e), o = 0;
            for (t = 0; t < r; t++) for (var a = arguments[t], u = 0, i = a.length; u < i; u++, 
            o++) n[o] = a[u];
            return n;
        }, A = /(^|[^\\])#/g;
        function x(e) {
            e.forEach(function(e) {
                (l(e) || s(e)) && Object.keys(e.options).forEach(function(t) {
                    for (var r, n = e.options[t], a = -1, u = void 0, i = 0; i < n.value.length; i++) {
                        var c = n.value[i];
                        if (o(c) && A.test(c.value)) {
                            a = i, u = c;
                            break;
                        }
                    }
                    if (u) {
                        var s = u.value.replace(A, "$1{" + e.value + ", number}"), l = b(s);
                        (r = n.value).splice.apply(r, w([ a, 1 ], l));
                    }
                    x(n.value);
                });
            });
        }
        function C(e, t) {
            var r = b(e, t);
            return t && !1 === t.normalizeHashtagInPlural || x(r), r;
        }
        var O = r(27), S = function() {
            return (S = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
        }, F = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
        function D(e) {
            var t = {};
            return e.replace(F, function(e) {
                var r = e.length;
                switch (e[0]) {
                  case "G":
                    t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                    break;

                  case "y":
                    t.year = 2 === r ? "2-digit" : "numeric";
                    break;

                  case "Y":
                  case "u":
                  case "U":
                  case "r":
                    throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");

                  case "q":
                  case "Q":
                    throw new RangeError("`q/Q` (quarter) patterns are not supported");

                  case "M":
                  case "L":
                    t.month = [ "numeric", "2-digit", "short", "long", "narrow" ][r - 1];
                    break;

                  case "w":
                  case "W":
                    throw new RangeError("`w/W` (week) patterns are not supported");

                  case "d":
                    t.day = [ "numeric", "2-digit" ][r - 1];
                    break;

                  case "D":
                  case "F":
                  case "g":
                    throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");

                  case "E":
                    t.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
                    break;

                  case "e":
                    if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                    t.weekday = [ "short", "long", "narrow", "short" ][r - 4];
                    break;

                  case "c":
                    if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                    t.weekday = [ "short", "long", "narrow", "short" ][r - 4];
                    break;

                  case "a":
                    t.hour12 = !0;
                    break;

                  case "b":
                  case "B":
                    throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");

                  case "h":
                    t.hourCycle = "h12", t.hour = [ "numeric", "2-digit" ][r - 1];
                    break;

                  case "H":
                    t.hourCycle = "h23", t.hour = [ "numeric", "2-digit" ][r - 1];
                    break;

                  case "K":
                    t.hourCycle = "h11", t.hour = [ "numeric", "2-digit" ][r - 1];
                    break;

                  case "k":
                    t.hourCycle = "h24", t.hour = [ "numeric", "2-digit" ][r - 1];
                    break;

                  case "j":
                  case "J":
                  case "C":
                    throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");

                  case "m":
                    t.minute = [ "numeric", "2-digit" ][r - 1];
                    break;

                  case "s":
                    t.second = [ "numeric", "2-digit" ][r - 1];
                    break;

                  case "S":
                  case "A":
                    throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");

                  case "z":
                    t.timeZoneName = r < 4 ? "short" : "long";
                    break;

                  case "Z":
                  case "O":
                  case "v":
                  case "V":
                  case "X":
                  case "x":
                    throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead");
                }
                return "";
            }), t;
        }
        function k(e) {
            return e.replace(/^(.*?)-/, "");
        }
        var E = /^\.(?:(0+)(\+|#+)?)?$/g, j = /^(@+)?(\+|#+)?$/g;
        function $(e) {
            var t = {};
            return e.replace(j, function(e, r, n) {
                return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, 
                t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), 
                "";
            }), t;
        }
        function P(e) {
            switch (e) {
              case "sign-auto":
                return {
                    signDisplay: "auto"
                };

              case "sign-accounting":
                return {
                    currencySign: "accounting"
                };

              case "sign-always":
                return {
                    signDisplay: "always"
                };

              case "sign-accounting-always":
                return {
                    signDisplay: "always",
                    currencySign: "accounting"
                };

              case "sign-except-zero":
                return {
                    signDisplay: "exceptZero"
                };

              case "sign-accounting-except-zero":
                return {
                    signDisplay: "exceptZero",
                    currencySign: "accounting"
                };

              case "sign-never":
                return {
                    signDisplay: "never"
                };
            }
        }
        function _(e) {
            var t = {}, r = P(e);
            return r || t;
        }
        function T(e) {
            for (var t = {}, r = 0, n = e; r < n.length; r++) {
                var o = n[r];
                switch (o.stem) {
                  case "percent":
                    t.style = "percent";
                    continue;

                  case "currency":
                    t.style = "currency", t.currency = o.options[0];
                    continue;

                  case "group-off":
                    t.useGrouping = !1;
                    continue;

                  case "precision-integer":
                    t.maximumFractionDigits = 0;
                    continue;

                  case "measure-unit":
                    t.style = "unit", t.unit = k(o.options[0]);
                    continue;

                  case "compact-short":
                    t.notation = "compact", t.compactDisplay = "short";
                    continue;

                  case "compact-long":
                    t.notation = "compact", t.compactDisplay = "long";
                    continue;

                  case "scientific":
                    t = S(S(S({}, t), {
                        notation: "scientific"
                    }), o.options.reduce(function(e, t) {
                        return S(S({}, e), _(t));
                    }, {}));
                    continue;

                  case "engineering":
                    t = S(S(S({}, t), {
                        notation: "engineering"
                    }), o.options.reduce(function(e, t) {
                        return S(S({}, e), _(t));
                    }, {}));
                    continue;

                  case "notation-simple":
                    t.notation = "standard";
                    continue;

                  case "unit-width-narrow":
                    t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                    continue;

                  case "unit-width-short":
                    t.currencyDisplay = "code", t.unitDisplay = "short";
                    continue;

                  case "unit-width-full-name":
                    t.currencyDisplay = "name", t.unitDisplay = "long";
                    continue;

                  case "unit-width-iso-code":
                    t.currencyDisplay = "symbol";
                    continue;
                }
                if (E.test(o.stem)) {
                    if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                    o.stem.replace(E, function(e, r, n) {
                        return "." === e ? t.maximumFractionDigits = 0 : "+" === n ? t.minimumFractionDigits = n.length : "#" === r[0] ? t.maximumFractionDigits = r.length : (t.minimumFractionDigits = r.length, 
                        t.maximumFractionDigits = r.length + ("string" == typeof n ? n.length : 0)), "";
                    }), o.options.length && (t = S(S({}, t), $(o.options[0])));
                } else if (j.test(o.stem)) t = S(S({}, t), $(o.stem)); else {
                    var a = P(o.stem);
                    a && (t = S(S({}, t), a));
                }
            }
            return t;
        }
        var R, M = function() {
            var e = function(t, r) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                })(t, r);
            };
            return function(t, r) {
                function n() {
                    this.constructor = t;
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, 
                new n());
            };
        }(), N = function() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var n = Array(e), o = 0;
            for (t = 0; t < r; t++) for (var a = arguments[t], u = 0, i = a.length; u < i; u++, 
            o++) n[o] = a[u];
            return n;
        }, z = function(e) {
            function t(t, r) {
                var n = e.call(this, t) || this;
                return n.variableId = r, n;
            }
            return M(t, e), t;
        }(Error);
        function I(e) {
            return e.length < 2 ? e : e.reduce(function(e, t) {
                var r = e[e.length - 1];
                return r && 0 === r.type && 0 === t.type ? r.value += t.value : e.push(t), e;
            }, []);
        }
        function Z(e, t, r, n, m, g, y) {
            if (1 === e.length && o(e[0])) return [ {
                type: 0,
                value: e[0].value
            } ];
            for (var d = [], v = 0, b = e; v < b.length; v++) {
                var w = b[v];
                if (o(w)) d.push({
                    type: 0,
                    value: w.value
                }); else if (f(w)) "number" == typeof g && d.push({
                    type: 0,
                    value: r.getNumberFormat(t).format(g)
                }); else {
                    var A = w.value;
                    if (!(m && A in m)) throw new z('The intl string context variable "' + A + '" was not provided to the string "' + y + '"');
                    var x = m[A];
                    if (a(w)) x && "string" != typeof x && "number" != typeof x || (x = "string" == typeof x || "number" == typeof x ? String(x) : ""), 
                    d.push({
                        type: 1,
                        value: x
                    }); else if (i(w)) {
                        var C = "string" == typeof w.style ? n.date[w.style] : void 0;
                        d.push({
                            type: 0,
                            value: r.getDateTimeFormat(t, C).format(x)
                        });
                    } else if (c(w)) {
                        C = "string" == typeof w.style ? n.time[w.style] : h(w.style) ? D(w.style.pattern) : void 0;
                        d.push({
                            type: 0,
                            value: r.getDateTimeFormat(t, C).format(x)
                        });
                    } else if (u(w)) {
                        C = "string" == typeof w.style ? n.number[w.style] : p(w.style) ? T(w.style.tokens) : void 0;
                        d.push({
                            type: 0,
                            value: r.getNumberFormat(t, C).format(x)
                        });
                    } else if (s(w)) {
                        if (!(O = w.options[x] || w.options.other)) throw new RangeError('Invalid values for "' + w.value + '": "' + x + '". Options are "' + Object.keys(w.options).join('", "') + '"');
                        d.push.apply(d, Z(O.value, t, r, n, m));
                    } else if (l(w)) {
                        var O;
                        if (!(O = w.options["=" + x])) {
                            if (!Intl.PluralRules) throw new z('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n');
                            var S = r.getPluralRules(t, {
                                type: w.pluralType
                            }).select(x - (w.offset || 0));
                            O = w.options[S] || w.options.other;
                        }
                        if (!O) throw new RangeError('Invalid values for "' + w.value + '": "' + x + '". Options are "' + Object.keys(w.options).join('", "') + '"');
                        d.push.apply(d, Z(O.value, t, r, n, m, x - (w.offset || 0)));
                    } else ;
                }
            }
            return I(d);
        }
        function L(e, t, r, n, o, a) {
            var u = Z(e, t, r, n, o, void 0, a);
            return 1 === u.length ? u[0].value : u.reduce(function(e, t) {
                return e + t.value;
            }, "");
        }
        var B = "@@", H = /@@(\d+_\d+)@@/g, q = 0;
        function J() {
            return Date.now() + "_" + ++q;
        }
        function U(e, t) {
            return e.split(H).filter(Boolean).map(function(e) {
                return null != t[e] ? t[e] : e;
            }).reduce(function(e, t) {
                return e.length && "string" == typeof t && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t : e.push(t), 
                e;
            }, []);
        }
        var V = /(<([0-9a-zA-Z-_]*?)>(.*?)<\/([0-9a-zA-Z-_]*?)>)|(<[0-9a-zA-Z-_]*?\/>)/, X = Date.now() + "@@", G = [ "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr" ];
        function K(e, t, r) {
            var n = e.tagName, o = e.outerHTML, a = e.textContent, u = e.childNodes;
            if (!n) return U(a || "", t);
            n = n.toLowerCase();
            var i = ~G.indexOf(n), c = r[n];
            if (c && i) throw new z(n + " is a self-closing tag and can not be used, please use another tag name.");
            if (!u.length) return [ o ];
            var s = Array.prototype.slice.call(u).reduce(function(e, n) {
                return e.concat(K(n, t, r));
            }, []);
            return c ? "function" == typeof c ? [ c.apply(void 0, s) ] : [ c ] : N([ "<" + n + ">" ], s, [ "</" + n + ">" ]);
        }
        function Q(e, t, r, n, o, a) {
            var u = {}, i = Z(e, t, r, n, o, void 0, a).reduce(function(e, t) {
                if (0 === t.type) return e + t.value;
                var r = J();
                return u[r] = t.value, e + "" + B + r + B;
            }, "");
            if (!V.test(i)) return U(i, u);
            if (!o) throw new z("Message has placeholders but no values was given");
            if ("undefined" == typeof DOMParser) throw new z("Cannot format XML message without DOMParser");
            R || (R = new DOMParser());
            var c = R.parseFromString('<formatted-message id="' + X + '">' + i + "</formatted-message>", "text/html").getElementById(X);
            if (!c) throw new z("Malformed HTML message " + i);
            var s = Object.keys(o).filter(function(e) {
                return !!c.getElementsByTagName(e).length;
            });
            if (!s.length) return U(i, u);
            var l = s.filter(function(e) {
                return e !== e.toLowerCase();
            });
            if (l.length) throw new z("HTML tag must be lowercased but the following tags are not: " + l.join(", "));
            return Array.prototype.slice.call(c.childNodes).reduce(function(e, t) {
                return e.concat(K(t, u, o));
            }, []);
        }
        var W = function() {
            return (W = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
        };
        function Y(e, t) {
            return t ? W(W(W({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                return r[n] = W(W({}, e[n]), t[n] || {}), r;
            }, {})) : e;
        }
        function ee(e, t) {
            return t ? Object.keys(e).reduce(function(r, n) {
                return r[n] = Y(e[n], t[n]), r;
            }, W({}, e)) : e;
        }
        function te(e) {
            return void 0 === e && (e = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }), {
                getNumberFormat: Object(O.a)(Intl.NumberFormat, e.number),
                getDateTimeFormat: Object(O.a)(Intl.DateTimeFormat, e.dateTime),
                getPluralRules: Object(O.a)(Intl.PluralRules, e.pluralRules)
            };
        }
        var re = function() {
            function e(t, r, n, o) {
                var a = this;
                if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                }, this.format = function(e) {
                    return L(a.ast, a.locales, a.formatters, a.formats, e, a.message);
                }, this.formatToParts = function(e) {
                    return Z(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
                }, this.formatHTMLMessage = function(e) {
                    return Q(a.ast, a.locales, a.formatters, a.formats, e, a.message);
                }, this.resolvedOptions = function() {
                    return {
                        locale: Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
                    };
                }, this.getAst = function() {
                    return a.ast;
                }, "string" == typeof t) {
                    if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                    this.ast = e.__parse(t, {
                        normalizeHashtagInPlural: !1
                    });
                } else this.ast = t;
                if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                this.formats = ee(e.formats, n), this.locales = r, this.formatters = o && o.formatters || te(this.formatterCache);
            }
            return e.defaultLocale = new Intl.NumberFormat().resolvedOptions().locale, e.__parse = C, 
            e.formats = {
                number: {
                    currency: {
                        style: "currency"
                    },
                    percent: {
                        style: "percent"
                    }
                },
                date: {
                    short: {
                        month: "numeric",
                        day: "numeric",
                        year: "2-digit"
                    },
                    medium: {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    },
                    long: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    full: {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                time: {
                    short: {
                        hour: "numeric",
                        minute: "numeric"
                    },
                    medium: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    },
                    long: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    },
                    full: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    }
                }
            }, e;
        }();
        t.a = re;
    }
} ]);