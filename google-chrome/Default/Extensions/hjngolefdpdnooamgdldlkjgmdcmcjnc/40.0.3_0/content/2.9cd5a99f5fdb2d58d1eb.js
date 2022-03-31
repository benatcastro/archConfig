(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 2 ], {
    134: function(e, t, n) {
        "use strict";
        (function(e) {
            /**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
            var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, r = function() {
                for (var e = [ "Edge", "Trident", "Firefox" ], t = 0; t < e.length; t += 1) if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                return 0;
            }();
            function o(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then(function() {
                        t = !1, e();
                    }));
                };
            }
            function i(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout(function() {
                        t = !1, e();
                    }, r));
                };
            }
            var a = n && window.Promise ? o : i;
            function s(e) {
                return e && "[object Function]" === {}.toString.call(e);
            }
            function p(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n;
            }
            function u(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host;
            }
            function f(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                  case "HTML":
                  case "BODY":
                    return e.ownerDocument.body;

                  case "#document":
                    return e.body;
                }
                var t = p(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + o + r) ? e : f(u(e));
            }
            function c(e) {
                return e && e.referenceNode ? e.referenceNode : e;
            }
            var l = n && !(!window.MSInputMethodContext || !document.documentMode), d = n && /MSIE 10/.test(navigator.userAgent);
            function h(e) {
                return 11 === e ? l : 10 === e ? d : l || d;
            }
            function m(e) {
                if (!e) return document.documentElement;
                for (var t = h(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
                var r = n && n.nodeName;
                return r && "BODY" !== r && "HTML" !== r ? -1 !== [ "TH", "TD", "TABLE" ].indexOf(n.nodeName) && "static" === p(n, "position") ? m(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
            }
            function v(e) {
                var t = e.nodeName;
                return "BODY" !== t && ("HTML" === t || m(e.firstElementChild) === e);
            }
            function g(e) {
                return null !== e.parentNode ? g(e.parentNode) : e;
            }
            function b(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, o = n ? t : e, i = document.createRange();
                i.setStart(r, 0), i.setEnd(o, 0);
                var a = i.commonAncestorContainer;
                if (e !== a && t !== a || r.contains(o)) return v(a) ? a : m(a);
                var s = g(e);
                return s.host ? b(s.host, t) : b(e, g(t).host);
            }
            function y(e) {
                var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", n = e.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var r = e.ownerDocument.documentElement;
                    return (e.ownerDocument.scrollingElement || r)[t];
                }
                return e[t];
            }
            function w(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = y(t, "top"), o = y(t, "left"), i = n ? -1 : 1;
                return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e;
            }
            function E(e, t) {
                var n = "x" === t ? "Left" : "Top", r = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"]);
            }
            function O(e, t, n, r) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], h(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
            }
            function T(e) {
                var t = e.body, n = e.documentElement, r = h(10) && getComputedStyle(n);
                return {
                    height: O("Height", t, n, r),
                    width: O("Width", t, n, r)
                };
            }
            var x = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }, L = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                        Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(), A = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }, C = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
            function D(e) {
                return C({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                });
            }
            function M(e) {
                var t = {};
                try {
                    if (h(10)) {
                        t = e.getBoundingClientRect();
                        var n = y(e, "top"), r = y(e, "left");
                        t.top += n, t.left += r, t.bottom += n, t.right += r;
                    } else t = e.getBoundingClientRect();
                } catch (e) {}
                var o = {
                    left: t.left,
                    top: t.top,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }, i = "HTML" === e.nodeName ? T(e.ownerDocument) : {}, a = i.width || e.clientWidth || o.width, s = i.height || e.clientHeight || o.height, u = e.offsetWidth - a, f = e.offsetHeight - s;
                if (u || f) {
                    var c = p(e);
                    u -= E(c, "x"), f -= E(c, "y"), o.width -= u, o.height -= f;
                }
                return D(o);
            }
            function S(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = h(10), o = "HTML" === t.nodeName, i = M(e), a = M(t), s = f(e), u = p(t), c = parseFloat(u.borderTopWidth), l = parseFloat(u.borderLeftWidth);
                n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var d = D({
                    top: i.top - a.top - c,
                    left: i.left - a.left - l,
                    width: i.width,
                    height: i.height
                });
                if (d.marginTop = 0, d.marginLeft = 0, !r && o) {
                    var m = parseFloat(u.marginTop), v = parseFloat(u.marginLeft);
                    d.top -= c - m, d.bottom -= c - m, d.left -= l - v, d.right -= l - v, d.marginTop = m, 
                    d.marginLeft = v;
                }
                return (r && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (d = w(d, t)), 
                d;
            }
            function I(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = e.ownerDocument.documentElement, r = S(e, n), o = Math.max(n.clientWidth, window.innerWidth || 0), i = Math.max(n.clientHeight, window.innerHeight || 0), a = t ? 0 : y(n), s = t ? 0 : y(n, "left");
                return D({
                    top: a - r.top + r.marginTop,
                    left: s - r.left + r.marginLeft,
                    width: o,
                    height: i
                });
            }
            function k(e) {
                var t = e.nodeName;
                if ("BODY" === t || "HTML" === t) return !1;
                if ("fixed" === p(e, "position")) return !0;
                var n = u(e);
                return !!n && k(n);
            }
            function P(e) {
                if (!e || !e.parentElement || h()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === p(t, "transform"); ) t = t.parentElement;
                return t || document.documentElement;
            }
            function N(e, t, n, r) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], i = {
                    top: 0,
                    left: 0
                }, a = o ? P(e) : b(e, c(t));
                if ("viewport" === r) i = I(a, o); else {
                    var s = void 0;
                    "scrollParent" === r ? "BODY" === (s = f(u(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === r ? e.ownerDocument.documentElement : r;
                    var p = S(s, a, o);
                    if ("HTML" !== s.nodeName || k(a)) i = p; else {
                        var l = T(e.ownerDocument), d = l.height, h = l.width;
                        i.top += p.top - p.marginTop, i.bottom = d + p.top, i.left += p.left - p.marginLeft, 
                        i.right = h + p.left;
                    }
                }
                var m = "number" == typeof (n = n || 0);
                return i.left += m ? n : n.left || 0, i.top += m ? n : n.top || 0, i.right -= m ? n : n.right || 0, 
                i.bottom -= m ? n : n.bottom || 0, i;
            }
            function F(e) {
                return e.width * e.height;
            }
            function B(e, t, n, r, o) {
                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var a = N(n, r, i, o), s = {
                    top: {
                        width: a.width,
                        height: t.top - a.top
                    },
                    right: {
                        width: a.right - t.right,
                        height: a.height
                    },
                    bottom: {
                        width: a.width,
                        height: a.bottom - t.bottom
                    },
                    left: {
                        width: t.left - a.left,
                        height: a.height
                    }
                }, p = Object.keys(s).map(function(e) {
                    return C({
                        key: e
                    }, s[e], {
                        area: F(s[e])
                    });
                }).sort(function(e, t) {
                    return t.area - e.area;
                }), u = p.filter(function(e) {
                    var t = e.width, r = e.height;
                    return t >= n.clientWidth && r >= n.clientHeight;
                }), f = u.length > 0 ? u[0].key : p[0].key, c = e.split("-")[1];
                return f + (c ? "-" + c : "");
            }
            function H(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return S(n, r ? P(t) : b(t, c(n)), r);
            }
            function j(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e), n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0), r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + r,
                    height: e.offsetHeight + n
                };
            }
            function W(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return t[e];
                });
            }
            function V(e, t, n) {
                n = n.split("-")[0];
                var r = j(e), o = {
                    width: r.width,
                    height: r.height
                }, i = -1 !== [ "right", "left" ].indexOf(n), a = i ? "top" : "left", s = i ? "left" : "top", p = i ? "height" : "width", u = i ? "width" : "height";
                return o[a] = t[a] + t[p] / 2 - r[p] / 2, o[s] = n === s ? t[s] - r[u] : t[W(s)], 
                o;
            }
            function _(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0];
            }
            function U(e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex(function(e) {
                    return e[t] === n;
                });
                var r = _(e, function(e) {
                    return e[t] === n;
                });
                return e.indexOf(r);
            }
            function R(e, t, n) {
                return (void 0 === n ? e : e.slice(0, U(e, "name", n))).forEach(function(e) {
                    e.function;
                    var n = e.function || e.fn;
                    e.enabled && s(n) && (t.offsets.popper = D(t.offsets.popper), t.offsets.reference = D(t.offsets.reference), 
                    t = n(t, e));
                }), t;
            }
            function q() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = H(this.state, this.popper, this.reference, this.options.positionFixed), 
                    e.placement = B(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), 
                    e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, 
                    e.offsets.popper = V(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", 
                    e = R(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, 
                    this.options.onCreate(e));
                }
            }
            function Y(e, t) {
                return e.some(function(e) {
                    var n = e.name;
                    return e.enabled && n === t;
                });
            }
            function z(e) {
                for (var t = [ !1, "ms", "Webkit", "Moz", "O" ], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                    var o = t[r], i = o ? "" + o + n : e;
                    if (void 0 !== document.body.style[i]) return i;
                }
                return null;
            }
            function K() {
                return this.state.isDestroyed = !0, Y(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), 
                this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", 
                this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", 
                this.popper.style[z("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), 
                this;
            }
            function J(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window;
            }
            function X(e, t, n, r) {
                var o = "BODY" === e.nodeName, i = o ? e.ownerDocument.defaultView : e;
                i.addEventListener(t, n, {
                    passive: !0
                }), o || X(f(i.parentNode), t, n, r), r.push(i);
            }
            function G(e, t, n, r) {
                n.updateBound = r, J(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var o = f(e);
                return X(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, 
                n;
            }
            function Q() {
                this.state.eventsEnabled || (this.state = G(this.reference, this.options, this.state, this.scheduleUpdate));
            }
            function Z(e, t) {
                return J(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                    e.removeEventListener("scroll", t.updateBound);
                }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, 
                t;
            }
            function $() {
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = Z(this.reference, this.state));
            }
            function ee(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
            }
            function te(e, t) {
                Object.keys(t).forEach(function(n) {
                    var r = "";
                    -1 !== [ "width", "height", "top", "right", "bottom", "left" ].indexOf(n) && ee(t[n]) && (r = "px"), 
                    e.style[n] = t[n] + r;
                });
            }
            function ne(e, t) {
                Object.keys(t).forEach(function(n) {
                    !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
                });
            }
            function re(e) {
                return te(e.instance.popper, e.styles), ne(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && te(e.arrowElement, e.arrowStyles), 
                e;
            }
            function oe(e, t, n, r, o) {
                var i = H(o, t, e, n.positionFixed), a = B(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return t.setAttribute("x-placement", a), te(t, {
                    position: n.positionFixed ? "fixed" : "absolute"
                }), n;
            }
            function ie(e, t) {
                var n = e.offsets, r = n.popper, o = n.reference, i = Math.round, a = Math.floor, s = function(e) {
                    return e;
                }, p = i(o.width), u = i(r.width), f = -1 !== [ "left", "right" ].indexOf(e.placement), c = -1 !== e.placement.indexOf("-"), l = t ? f || c || p % 2 == u % 2 ? i : a : s, d = t ? i : s;
                return {
                    left: l(p % 2 == 1 && u % 2 == 1 && !c && t ? r.left - 1 : r.left),
                    top: d(r.top),
                    bottom: d(r.bottom),
                    right: l(r.right)
                };
            }
            var ae = n && /Firefox/i.test(navigator.userAgent);
            function se(e, t) {
                var n = t.x, r = t.y, o = e.offsets.popper, i = _(e.instance.modifiers, function(e) {
                    return "applyStyle" === e.name;
                }).gpuAcceleration, a = void 0 !== i ? i : t.gpuAcceleration, s = m(e.instance.popper), p = M(s), u = {
                    position: o.position
                }, f = ie(e, window.devicePixelRatio < 2 || !ae), c = "bottom" === n ? "top" : "bottom", l = "right" === r ? "left" : "right", d = z("transform"), h = void 0, v = void 0;
                if (v = "bottom" === c ? "HTML" === s.nodeName ? -s.clientHeight + f.bottom : -p.height + f.bottom : f.top, 
                h = "right" === l ? "HTML" === s.nodeName ? -s.clientWidth + f.right : -p.width + f.right : f.left, 
                a && d) u[d] = "translate3d(" + h + "px, " + v + "px, 0)", u[c] = 0, u[l] = 0, u.willChange = "transform"; else {
                    var g = "bottom" === c ? -1 : 1, b = "right" === l ? -1 : 1;
                    u[c] = v * g, u[l] = h * b, u.willChange = c + ", " + l;
                }
                var y = {
                    "x-placement": e.placement
                };
                return e.attributes = C({}, y, e.attributes), e.styles = C({}, u, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), 
                e;
            }
            function pe(e, t, n) {
                var r = _(e, function(e) {
                    return e.name === t;
                }), o = !!r && e.some(function(e) {
                    return e.name === n && e.enabled && e.order < r.order;
                });
                if (!o) ;
                return o;
            }
            function ue(e, t) {
                var n;
                if (!pe(e.instance.modifiers, "arrow", "keepTogether")) return e;
                var r = t.element;
                if ("string" == typeof r) {
                    if (!(r = e.instance.popper.querySelector(r))) return e;
                } else if (!e.instance.popper.contains(r)) return e;
                var o = e.placement.split("-")[0], i = e.offsets, a = i.popper, s = i.reference, u = -1 !== [ "left", "right" ].indexOf(o), f = u ? "height" : "width", c = u ? "Top" : "Left", l = c.toLowerCase(), d = u ? "left" : "top", h = u ? "bottom" : "right", m = j(r)[f];
                s[h] - m < a[l] && (e.offsets.popper[l] -= a[l] - (s[h] - m)), s[l] + m > a[h] && (e.offsets.popper[l] += s[l] + m - a[h]), 
                e.offsets.popper = D(e.offsets.popper);
                var v = s[l] + s[f] / 2 - m / 2, g = p(e.instance.popper), b = parseFloat(g["margin" + c]), y = parseFloat(g["border" + c + "Width"]), w = v - e.offsets.popper[l] - b - y;
                return w = Math.max(Math.min(a[f] - m, w), 0), e.arrowElement = r, e.offsets.arrow = (A(n = {}, l, Math.round(w)), 
                A(n, d, ""), n), e;
            }
            function fe(e) {
                return "end" === e ? "start" : "start" === e ? "end" : e;
            }
            var ce = [ "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" ], le = ce.slice(3);
            function de(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = le.indexOf(e), r = le.slice(n + 1).concat(le.slice(0, n));
                return t ? r.reverse() : r;
            }
            var he = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            };
            function me(e, t) {
                if (Y(e.instance.modifiers, "inner")) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var n = N(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), r = e.placement.split("-")[0], o = W(r), i = e.placement.split("-")[1] || "", a = [];
                switch (t.behavior) {
                  case he.FLIP:
                    a = [ r, o ];
                    break;

                  case he.CLOCKWISE:
                    a = de(r);
                    break;

                  case he.COUNTERCLOCKWISE:
                    a = de(r, !0);
                    break;

                  default:
                    a = t.behavior;
                }
                return a.forEach(function(s, p) {
                    if (r !== s || a.length === p + 1) return e;
                    r = e.placement.split("-")[0], o = W(r);
                    var u = e.offsets.popper, f = e.offsets.reference, c = Math.floor, l = "left" === r && c(u.right) > c(f.left) || "right" === r && c(u.left) < c(f.right) || "top" === r && c(u.bottom) > c(f.top) || "bottom" === r && c(u.top) < c(f.bottom), d = c(u.left) < c(n.left), h = c(u.right) > c(n.right), m = c(u.top) < c(n.top), v = c(u.bottom) > c(n.bottom), g = "left" === r && d || "right" === r && h || "top" === r && m || "bottom" === r && v, b = -1 !== [ "top", "bottom" ].indexOf(r), y = !!t.flipVariations && (b && "start" === i && d || b && "end" === i && h || !b && "start" === i && m || !b && "end" === i && v), w = !!t.flipVariationsByContent && (b && "start" === i && h || b && "end" === i && d || !b && "start" === i && v || !b && "end" === i && m), E = y || w;
                    (l || g || E) && (e.flipped = !0, (l || g) && (r = a[p + 1]), E && (i = fe(i)), 
                    e.placement = r + (i ? "-" + i : ""), e.offsets.popper = C({}, e.offsets.popper, V(e.instance.popper, e.offsets.reference, e.placement)), 
                    e = R(e.instance.modifiers, e, "flip"));
                }), e;
            }
            function ve(e) {
                var t = e.offsets, n = t.popper, r = t.reference, o = e.placement.split("-")[0], i = Math.floor, a = -1 !== [ "top", "bottom" ].indexOf(o), s = a ? "right" : "bottom", p = a ? "left" : "top", u = a ? "width" : "height";
                return n[s] < i(r[p]) && (e.offsets.popper[p] = i(r[p]) - n[u]), n[p] > i(r[s]) && (e.offsets.popper[p] = i(r[s])), 
                e;
            }
            function ge(e, t, n, r) {
                var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), i = +o[1], a = o[2];
                if (!i) return e;
                if (0 === a.indexOf("%")) {
                    var s = void 0;
                    switch (a) {
                      case "%p":
                        s = n;
                        break;

                      case "%":
                      case "%r":
                      default:
                        s = r;
                    }
                    return D(s)[t] / 100 * i;
                }
                if ("vh" === a || "vw" === a) {
                    return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i;
                }
                return i;
            }
            function be(e, t, n, r) {
                var o = [ 0, 0 ], i = -1 !== [ "right", "left" ].indexOf(r), a = e.split(/(\+|\-)/).map(function(e) {
                    return e.trim();
                }), s = a.indexOf(_(a, function(e) {
                    return -1 !== e.search(/,|\s/);
                }));
                a[s] && a[s].indexOf(",");
                var p = /\s*,\s*|\s+/, u = -1 !== s ? [ a.slice(0, s).concat([ a[s].split(p)[0] ]), [ a[s].split(p)[1] ].concat(a.slice(s + 1)) ] : [ a ];
                return (u = u.map(function(e, r) {
                    var o = (1 === r ? !i : i) ? "height" : "width", a = !1;
                    return e.reduce(function(e, t) {
                        return "" === e[e.length - 1] && -1 !== [ "+", "-" ].indexOf(t) ? (e[e.length - 1] = t, 
                        a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t);
                    }, []).map(function(e) {
                        return ge(e, o, t, n);
                    });
                })).forEach(function(e, t) {
                    e.forEach(function(n, r) {
                        ee(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1));
                    });
                }), o;
            }
            function ye(e, t) {
                var n = t.offset, r = e.placement, o = e.offsets, i = o.popper, a = o.reference, s = r.split("-")[0], p = void 0;
                return p = ee(+n) ? [ +n, 0 ] : be(n, i, a, s), "left" === s ? (i.top += p[0], i.left -= p[1]) : "right" === s ? (i.top += p[0], 
                i.left += p[1]) : "top" === s ? (i.left += p[0], i.top -= p[1]) : "bottom" === s && (i.left += p[0], 
                i.top += p[1]), e.popper = i, e;
            }
            function we(e, t) {
                var n = t.boundariesElement || m(e.instance.popper);
                e.instance.reference === n && (n = m(n));
                var r = z("transform"), o = e.instance.popper.style, i = o.top, a = o.left, s = o[r];
                o.top = "", o.left = "", o[r] = "";
                var p = N(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                o.top = i, o.left = a, o[r] = s, t.boundaries = p;
                var u = t.priority, f = e.offsets.popper, c = {
                    primary: function(e) {
                        var n = f[e];
                        return f[e] < p[e] && !t.escapeWithReference && (n = Math.max(f[e], p[e])), A({}, e, n);
                    },
                    secondary: function(e) {
                        var n = "right" === e ? "left" : "top", r = f[n];
                        return f[e] > p[e] && !t.escapeWithReference && (r = Math.min(f[n], p[e] - ("right" === e ? f.width : f.height))), 
                        A({}, n, r);
                    }
                };
                return u.forEach(function(e) {
                    var t = -1 !== [ "left", "top" ].indexOf(e) ? "primary" : "secondary";
                    f = C({}, f, c[t](e));
                }), e.offsets.popper = f, e;
            }
            function Ee(e) {
                var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
                if (r) {
                    var o = e.offsets, i = o.reference, a = o.popper, s = -1 !== [ "bottom", "top" ].indexOf(n), p = s ? "left" : "top", u = s ? "width" : "height", f = {
                        start: A({}, p, i[p]),
                        end: A({}, p, i[p] + i[u] - a[u])
                    };
                    e.offsets.popper = C({}, a, f[r]);
                }
                return e;
            }
            function Oe(e) {
                if (!pe(e.instance.modifiers, "hide", "preventOverflow")) return e;
                var t = e.offsets.reference, n = _(e.instance.modifiers, function(e) {
                    return "preventOverflow" === e.name;
                }).boundaries;
                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                    if (!0 === e.hide) return e;
                    e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
                } else {
                    if (!1 === e.hide) return e;
                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
                }
                return e;
            }
            function Te(e) {
                var t = e.placement, n = t.split("-")[0], r = e.offsets, o = r.popper, i = r.reference, a = -1 !== [ "left", "right" ].indexOf(n), s = -1 === [ "top", "left" ].indexOf(n);
                return o[a ? "left" : "top"] = i[n] - (s ? o[a ? "width" : "height"] : 0), e.placement = W(t), 
                e.offsets.popper = D(o), e;
            }
            var xe = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function() {},
                onUpdate: function() {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: Ee
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: ye,
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: we,
                        priority: [ "left", "right", "top", "bottom" ],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: ve
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: ue,
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: me,
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: Te
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: Oe
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: se,
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: re,
                        onLoad: oe,
                        gpuAcceleration: void 0
                    }
                }
            }, Le = function() {
                function e(t, n) {
                    var r = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    x(this, e), this.scheduleUpdate = function() {
                        return requestAnimationFrame(r.update);
                    }, this.update = a(this.update.bind(this)), this.options = C({}, e.Defaults, o), 
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, 
                    this.options.modifiers = {}, Object.keys(C({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) {
                        r.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {});
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                        return C({
                            name: e
                        }, r.options.modifiers[e]);
                    }).sort(function(e, t) {
                        return e.order - t.order;
                    }), this.modifiers.forEach(function(e) {
                        e.enabled && s(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
                    }), this.update();
                    var i = this.options.eventsEnabled;
                    i && this.enableEventListeners(), this.state.eventsEnabled = i;
                }
                return L(e, [ {
                    key: "update",
                    value: function() {
                        return q.call(this);
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return K.call(this);
                    }
                }, {
                    key: "enableEventListeners",
                    value: function() {
                        return Q.call(this);
                    }
                }, {
                    key: "disableEventListeners",
                    value: function() {
                        return $.call(this);
                    }
                } ]), e;
            }();
            Le.Utils = ("undefined" != typeof window ? window : e).PopperUtils, Le.placements = ce, 
            Le.Defaults = xe, t.a = Le;
        }).call(this, n(45));
    },
    18: function(e, t, n) {
        e.exports = n(252)();
    },
    252: function(e, t, n) {
        "use strict";
        var r = n(253);
        function o() {}
        function i() {}
        i.resetWarningCache = o, e.exports = function() {
            function e(e, t, n, o, i, a) {
                if (a !== r) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s;
                }
            }
            function t() {
                return e;
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o
            };
            return n.PropTypes = n, n;
        };
    },
    253: function(e, t, n) {
        "use strict";
        var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        e.exports = r;
    },
    46: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var n = Object.keys(e), r = Object.keys(t), o = n.length;
            if (r.length !== o) return !1;
            for (var i = 0; i < o; i++) {
                var a = n[i];
                if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1;
            }
            return !0;
        }
        e.exports = r;
    },
    83: function(e, t, n) {
        "use strict";
        var r = n(134);
        /**!
* tippy.js v5.2.1
* (c) 2017-2020 atomiks
* MIT License
*/        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        var i = "5.2.1";
        function a(e) {
            e.offsetHeight;
        }
        function s(e, t) {
            e[g()] = t;
        }
        function p(e) {
            return !(!e || !e._tippy || e._tippy.reference !== e);
        }
        function u(e, t) {
            return {}.hasOwnProperty.call(e, t);
        }
        function f(e) {
            return h(e) ? [ e ] : m(e) ? L(e) : Array.isArray(e) ? e : L(document.querySelectorAll(e));
        }
        function c(e, t, n) {
            if (Array.isArray(e)) {
                var r = e[t];
                return null == r ? Array.isArray(n) ? n[t] : n : r;
            }
            return e;
        }
        function l(e, t) {
            return e && e.modifiers && e.modifiers[t];
        }
        function d(e, t) {
            var n = {}.toString.call(e);
            return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
        }
        function h(e) {
            return d(e, "Element");
        }
        function m(e) {
            return d(e, "NodeList");
        }
        function v(e) {
            return d(e, "MouseEvent");
        }
        function g() {
            return "innerHTML";
        }
        function b(e, t) {
            return "function" == typeof e ? e.apply(void 0, t) : e;
        }
        function y(e, t, n, r) {
            e.filter(function(e) {
                return e.name === t;
            })[0][n] = r;
        }
        function w() {
            return document.createElement("div");
        }
        function E(e, t) {
            e.forEach(function(e) {
                e && (e.style.transitionDuration = t + "ms");
            });
        }
        function O(e, t) {
            e.forEach(function(e) {
                e && e.setAttribute("data-state", t);
            });
        }
        function T(e, t) {
            return 0 === t ? e : function(r) {
                clearTimeout(n), n = setTimeout(function() {
                    e(r);
                }, t);
            };
            var n;
        }
        function x(e, t, n) {
            e && e !== t && e.apply(void 0, n);
        }
        function L(e) {
            return [].slice.call(e);
        }
        function A(e, t) {
            for (;e; ) {
                if (t(e)) return e;
                e = e.parentElement;
            }
            return null;
        }
        function C(e, t) {
            return e.indexOf(t) > -1;
        }
        function D(e) {
            return e.split(/\s+/).filter(Boolean);
        }
        function M(e, t) {
            return void 0 !== e ? e : t;
        }
        function S(e) {
            return [].concat(e);
        }
        function I(e) {
            var t = S(e)[0];
            return t && t.ownerDocument || document;
        }
        function k(e, t) {
            -1 === e.indexOf(t) && e.push(t);
        }
        function P(e) {
            return "number" == typeof e ? e + "px" : e;
        }
        function N(e) {
            return e.filter(function(t, n) {
                return e.indexOf(t) === n;
            });
        }
        function F(e) {
            return "number" == typeof e ? e : parseFloat(e);
        }
        function B(e, t) {
            var n = "string" == typeof t && C(t, "rem"), r = e.documentElement, o = 16;
            return r && n ? parseFloat(getComputedStyle(r).fontSize || String(o)) * F(t) : F(t);
        }
        function H(e, t, n) {
            void 0 === t && (t = 5);
            var r = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
            return Object.keys(r).reduce(function(r, o) {
                return r[o] = "number" == typeof t ? t : t[o], e === o && (r[o] = "number" == typeof t ? t + n : t[e] + n), 
                r;
            }, r);
        }
        var j = o({
            allowHTML: !0,
            animation: "fade",
            appendTo: function() {
                return document.body;
            },
            aria: "describedby",
            arrow: !0,
            boundary: "scrollParent",
            content: "",
            delay: 0,
            distance: 10,
            duration: [ 300, 250 ],
            flip: !0,
            flipBehavior: "flip",
            flipOnUpdate: !1,
            hideOnClick: !0,
            ignoreAttributes: !1,
            inertia: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            lazy: !0,
            maxWidth: 350,
            multiple: !1,
            offset: 0,
            onAfterUpdate: function() {},
            onBeforeUpdate: function() {},
            onCreate: function() {},
            onDestroy: function() {},
            onHidden: function() {},
            onHide: function() {},
            onMount: function() {},
            onShow: function() {},
            onShown: function() {},
            onTrigger: function() {},
            onUntrigger: function() {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            role: "tooltip",
            showOnCreate: !1,
            theme: "",
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
            updateDuration: 0,
            zIndex: 9999
        }, {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1
        }), W = Object.keys(j), V = [ "arrow", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions" ], _ = function(e) {
            Object.keys(e).forEach(function(t) {
                j[t] = e[t];
            });
        };
        function U(e) {
            var t = (e.plugins || []).reduce(function(t, n) {
                var r = n.name, o = n.defaultValue;
                return r && (t[r] = void 0 !== e[r] ? e[r] : o), t;
            }, {});
            return o({}, e, {}, t);
        }
        function R(e, t) {
            return (t ? Object.keys(U(o({}, j, {
                plugins: t
            }))) : W).reduce(function(t, n) {
                var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                if (!r) return t;
                if ("content" === n) t[n] = r; else try {
                    t[n] = JSON.parse(r);
                } catch (e) {
                    t[n] = r;
                }
                return t;
            }, {});
        }
        function q(e, t) {
            var n = o({}, t, {
                content: b(t.content, [ e ])
            }, t.ignoreAttributes ? {} : R(e, t.plugins));
            return n.interactive && (n.aria = null), n;
        }
        var Y = {
            passive: !0
        }, z = "tippy-iOS", K = "tippy-popper", J = "tippy-tooltip", X = "tippy-content", G = "tippy-arrow", Q = "tippy-svg-arrow", Z = "." + K, $ = "." + J, ee = "." + X, te = "." + G, ne = "." + Q, re = {
            isTouch: !1
        }, oe = 0;
        function ie() {
            re.isTouch || (re.isTouch = !0, window.performance && document.addEventListener("mousemove", ae));
        }
        function ae() {
            var e = performance.now();
            e - oe < 20 && (re.isTouch = !1, document.removeEventListener("mousemove", ae)), 
            oe = e;
        }
        function se() {
            var e = document.activeElement;
            if (p(e)) {
                var t = e._tippy;
                e.blur && !t.state.isVisible && e.blur();
            }
        }
        function pe() {
            document.addEventListener("touchstart", ie, o({}, Y, {
                capture: !0
            })), window.addEventListener("blur", se);
        }
        var ue = "undefined" != typeof window && "undefined" != typeof document, fe = ue ? navigator.userAgent : "", ce = /MSIE |Trident\//.test(fe), le = ue && /iPhone|iPad|iPod/.test(navigator.platform);
        function de(e) {
            var t = e && le && re.isTouch;
            document.body.classList[t ? "add" : "remove"](z);
        }
        function he(e) {
            return e.split("-")[0];
        }
        function me(e) {
            e.setAttribute("data-inertia", "");
        }
        function ve(e) {
            e.removeAttribute("data-inertia");
        }
        function ge(e) {
            e.setAttribute("data-interactive", "");
        }
        function be(e) {
            e.removeAttribute("data-interactive");
        }
        function ye(e, t) {
            if (h(t.content)) s(e, ""), e.appendChild(t.content); else if ("function" != typeof t.content) {
                e[t.allowHTML ? "innerHTML" : "textContent"] = t.content;
            }
        }
        function we(e) {
            return {
                tooltip: e.querySelector($),
                content: e.querySelector(ee),
                arrow: e.querySelector(te) || e.querySelector(ne)
            };
        }
        function Ee(e) {
            var t = w();
            return !0 === e ? t.className = G : (t.className = Q, h(e) ? t.appendChild(e) : s(t, e)), 
            t;
        }
        function Oe(e, t) {
            var n = w();
            n.className = K, n.style.position = "absolute", n.style.top = "0", n.style.left = "0";
            var r = w();
            r.className = J, r.id = "tippy-" + e, r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1"), 
            Le(r, "add", t.theme);
            var o = w();
            return o.className = X, o.setAttribute("data-state", "hidden"), t.interactive && ge(r), 
            t.arrow && (r.setAttribute("data-arrow", ""), r.appendChild(Ee(t.arrow))), t.inertia && me(r), 
            ye(o, t), r.appendChild(o), n.appendChild(r), Te(n, t, t), n;
        }
        function Te(e, t, n) {
            var r = we(e), o = r.tooltip, i = r.content, a = r.arrow;
            e.style.zIndex = "" + n.zIndex, o.setAttribute("data-animation", n.animation), o.style.maxWidth = P(n.maxWidth), 
            n.role ? o.setAttribute("role", n.role) : o.removeAttribute("role"), t.content !== n.content && ye(i, n), 
            !t.arrow && n.arrow ? (o.appendChild(Ee(n.arrow)), o.setAttribute("data-arrow", "")) : t.arrow && !n.arrow ? (o.removeChild(a), 
            o.removeAttribute("data-arrow")) : t.arrow !== n.arrow && (o.removeChild(a), o.appendChild(Ee(n.arrow))), 
            !t.interactive && n.interactive ? ge(o) : t.interactive && !n.interactive && be(o), 
            !t.inertia && n.inertia ? me(o) : t.inertia && !n.inertia && ve(o), t.theme !== n.theme && (Le(o, "remove", t.theme), 
            Le(o, "add", n.theme));
        }
        function xe(e, t, n) {
            [ "transitionend", "webkitTransitionEnd" ].forEach(function(r) {
                e[t + "EventListener"](r, n);
            });
        }
        function Le(e, t, n) {
            D(n).forEach(function(n) {
                e.classList[t](n + "-theme");
            });
        }
        function Ae(e, t) {
            var n = t.clientX, r = t.clientY;
            return e.every(function(e) {
                var t = e.popperRect, o = e.tooltipRect, i = e.interactiveBorder, a = {
                    top: Math.min(t.top, o.top),
                    right: Math.max(t.right, o.right),
                    bottom: Math.max(t.bottom, o.bottom),
                    left: Math.min(t.left, o.left)
                }, s = a.top - r > i, p = r - a.bottom > i, u = a.left - n > i, f = n - a.right > i;
                return s || p || u || f;
            });
        }
        var Ce = 1, De = [], Me = [];
        function Se(e, t) {
            var n, i, s, p = q(e, o({}, j, {}, U(t)));
            if (!p.multiple && e._tippy) return null;
            var f, d, h, m, g = !1, w = !1, P = !1, F = 0, W = [], _ = T(Ne, p.interactiveDebounce), R = I(p.triggerTarget || e), z = Ce++, K = Oe(z, p), J = we(K), X = null, G = N(p.plugins), Q = J.tooltip, $ = J.content, ee = [ Q, $ ], te = {
                id: z,
                reference: e,
                popper: K,
                popperChildren: J,
                popperInstance: X,
                props: p,
                state: {
                    currentPlacement: null,
                    isEnabled: !0,
                    isVisible: !1,
                    isDestroyed: !1,
                    isMounted: !1,
                    isShown: !1
                },
                plugins: G,
                clearDelayTimeouts: Ye,
                setProps: ze,
                setContent: Ke,
                show: Je,
                hide: Xe,
                enable: Re,
                disable: qe,
                destroy: Ge
            };
            e._tippy = te, K._tippy = te;
            var ne = G.map(function(e) {
                return e.fn(te);
            }), oe = e.hasAttribute("aria-expanded");
            return Ie(), le(), p.lazy || je(), ue("onCreate", [ te ]), p.showOnCreate && _e(), 
            K.addEventListener("mouseenter", function() {
                te.props.interactive && te.state.isVisible && te.clearDelayTimeouts();
            }), K.addEventListener("mouseleave", function(e) {
                te.props.interactive && C(te.props.trigger, "mouseenter") && (_(e), R.addEventListener("mousemove", _));
            }), te;
            function ie() {
                var e = te.props.touch;
                return Array.isArray(e) ? e : [ e, 0 ];
            }
            function ae() {
                return "hold" === ie()[0];
            }
            function se() {
                return m || e;
            }
            function pe(e) {
                return te.state.isMounted && !te.state.isVisible || re.isTouch || f && "focus" === f.type ? 0 : c(te.props.delay, e ? 0 : 1, j.delay);
            }
            function ue(e, t, n) {
                var r;
                (void 0 === n && (n = !0), ne.forEach(function(n) {
                    u(n, e) && n[e].apply(n, t);
                }), n) && (r = te.props)[e].apply(r, t);
            }
            function fe() {
                var t = te.props.aria;
                if (t) {
                    var n = "aria-" + t, r = Q.id;
                    S(te.props.triggerTarget || e).forEach(function(e) {
                        var t = e.getAttribute(n);
                        if (te.state.isVisible) e.setAttribute(n, t ? t + " " + r : r); else {
                            var o = t && t.replace(r, "").trim();
                            o ? e.setAttribute(n, o) : e.removeAttribute(n);
                        }
                    });
                }
            }
            function le() {
                oe || S(te.props.triggerTarget || e).forEach(function(e) {
                    te.props.interactive ? e.setAttribute("aria-expanded", te.state.isVisible && e === se() ? "true" : "false") : e.removeAttribute("aria-expanded");
                });
            }
            function me() {
                R.body.removeEventListener("mouseleave", Ue), R.removeEventListener("mousemove", _), 
                De = De.filter(function(e) {
                    return e !== _;
                });
            }
            function ve(e) {
                if (!te.props.interactive || !K.contains(e.target)) {
                    if (se().contains(e.target)) {
                        if (re.isTouch) return;
                        if (te.state.isVisible && C(te.props.trigger, "click")) return;
                    }
                    !0 === te.props.hideOnClick && (w = !1, te.clearDelayTimeouts(), te.hide(), P = !0, 
                    setTimeout(function() {
                        P = !1;
                    }), te.state.isMounted || be());
                }
            }
            function ge() {
                R.addEventListener("mousedown", ve, !0);
            }
            function be() {
                R.removeEventListener("mousedown", ve, !0);
            }
            function ye(e, t) {
                Le(e, function() {
                    !te.state.isVisible && K.parentNode && K.parentNode.contains(K) && t();
                });
            }
            function Ee(e, t) {
                Le(e, t);
            }
            function Le(e, t) {
                function n(e) {
                    e.target === Q && (xe(Q, "remove", n), t());
                }
                if (0 === e) return t();
                xe(Q, "remove", h), xe(Q, "add", n), h = n;
            }
            function Se(t, n, r) {
                void 0 === r && (r = !1), S(te.props.triggerTarget || e).forEach(function(e) {
                    e.addEventListener(t, n, r), W.push({
                        node: e,
                        eventType: t,
                        handler: n,
                        options: r
                    });
                });
            }
            function Ie() {
                ae() && (Se("touchstart", Pe, Y), Se("touchend", Fe, Y)), D(te.props.trigger).forEach(function(e) {
                    if ("manual" !== e) switch (Se(e, Pe), e) {
                      case "mouseenter":
                        Se("mouseleave", Fe);
                        break;

                      case "focus":
                        Se(ce ? "focusout" : "blur", Be);
                        break;

                      case "focusin":
                        Se("focusout", Be);
                    }
                });
            }
            function ke() {
                W.forEach(function(e) {
                    var t = e.node, n = e.eventType, r = e.handler, o = e.options;
                    t.removeEventListener(n, r, o);
                }), W = [];
            }
            function Pe(e) {
                var t = !1;
                if (te.state.isEnabled && !He(e) && !P) {
                    if (f = e, m = e.currentTarget, le(), !te.state.isVisible && v(e) && De.forEach(function(t) {
                        return t(e);
                    }), "click" !== e.type || C(te.props.trigger, "mouseenter") && !w || !1 === te.props.hideOnClick || !te.state.isVisible) {
                        var r = ie(), o = r[0], i = r[1];
                        re.isTouch && "hold" === o && i ? n = setTimeout(function() {
                            _e(e);
                        }, i) : _e(e);
                    } else t = !0;
                    "click" === e.type && (w = !t), t && Ue(e);
                }
            }
            function Ne(t) {
                var n = A(t.target, function(t) {
                    return t === e || t === K;
                });
                "mousemove" === t.type && n || Ae(L(K.querySelectorAll(Z)).concat(K).map(function(e) {
                    var t = e._tippy, n = t.popperChildren.tooltip, r = t.props.interactiveBorder;
                    return {
                        popperRect: e.getBoundingClientRect(),
                        tooltipRect: n.getBoundingClientRect(),
                        interactiveBorder: r
                    };
                }), t) && (me(), Ue(t));
            }
            function Fe(e) {
                if (!(He(e) || C(te.props.trigger, "click") && w)) return te.props.interactive ? (R.body.addEventListener("mouseleave", Ue), 
                R.addEventListener("mousemove", _), k(De, _), void _(e)) : void Ue(e);
            }
            function Be(e) {
                (C(te.props.trigger, "focusin") || e.target === se()) && (te.props.interactive && e.relatedTarget && K.contains(e.relatedTarget) || Ue(e));
            }
            function He(e) {
                var t = "ontouchstart" in window, n = C(e.type, "touch"), r = ae();
                return t && re.isTouch && r && !n || re.isTouch && !r && n;
            }
            function je() {
                var t, n = te.props.popperOptions, i = te.popperChildren.arrow, a = l(n, "flip"), s = l(n, "preventOverflow");
                function p(e) {
                    var n = te.state.currentPlacement;
                    te.state.currentPlacement = e.placement, te.props.flip && !te.props.flipOnUpdate && (e.flipped && (te.popperInstance.options.placement = e.placement), 
                    y(te.popperInstance.modifiers, "flip", "enabled", !1)), Q.setAttribute("data-placement", e.placement), 
                    !1 !== e.attributes["x-out-of-boundaries"] ? Q.setAttribute("data-out-of-boundaries", "") : Q.removeAttribute("data-out-of-boundaries");
                    var r = he(e.placement), o = C([ "top", "bottom" ], r), i = C([ "bottom", "right" ], r);
                    Q.style.top = "0", Q.style.left = "0", Q.style[o ? "top" : "left"] = (i ? 1 : -1) * t + "px", 
                    n && n !== e.placement && te.popperInstance.update();
                }
                var u = o({
                    eventsEnabled: !1,
                    placement: te.props.placement
                }, n, {
                    modifiers: o({}, n && n.modifiers, {
                        tippyDistance: {
                            enabled: !0,
                            order: 0,
                            fn: function(e) {
                                t = B(R, te.props.distance);
                                var n = he(e.placement), r = H(n, s && s.padding, t), o = H(n, a && a.padding, t), i = te.popperInstance.modifiers;
                                return y(i, "preventOverflow", "padding", r), y(i, "flip", "padding", o), e;
                            }
                        },
                        preventOverflow: o({
                            boundariesElement: te.props.boundary
                        }, s),
                        flip: o({
                            enabled: te.props.flip,
                            behavior: te.props.flipBehavior
                        }, a),
                        arrow: o({
                            element: i,
                            enabled: !!i
                        }, l(n, "arrow")),
                        offset: o({
                            offset: te.props.offset
                        }, l(n, "offset"))
                    }),
                    onCreate: function(e) {
                        p(e), x(n && n.onCreate, u.onCreate, [ e ]), We();
                    },
                    onUpdate: function(e) {
                        p(e), x(n && n.onUpdate, u.onUpdate, [ e ]), We();
                    }
                });
                te.popperInstance = new r.a(e, K, u);
            }
            function We() {
                0 === F ? (F++, te.popperInstance.update()) : d && 1 === F && (F++, a(K), d());
            }
            function Ve() {
                F = 0;
                var e, t = te.props.appendTo, n = se();
                (e = te.props.interactive && t === j.appendTo || "parent" === t ? n.parentNode : b(t, [ n ])).contains(K) || e.appendChild(K), 
                y(te.popperInstance.modifiers, "flip", "enabled", te.props.flip), te.popperInstance.enableEventListeners(), 
                te.popperInstance.update();
            }
            function _e(e) {
                te.clearDelayTimeouts(), te.popperInstance || je(), e && ue("onTrigger", [ te, e ]), 
                ge();
                var t = pe(!0);
                t ? n = setTimeout(function() {
                    te.show();
                }, t) : te.show();
            }
            function Ue(e) {
                if (te.clearDelayTimeouts(), ue("onUntrigger", [ te, e ]), te.state.isVisible) {
                    if (!(C(te.props.trigger, "mouseenter") && C(te.props.trigger, "click") && C([ "mouseleave", "mousemove" ], e.type) && w)) {
                        var t = pe(!1);
                        t ? i = setTimeout(function() {
                            te.state.isVisible && te.hide();
                        }, t) : s = requestAnimationFrame(function() {
                            te.hide();
                        });
                    }
                } else be();
            }
            function Re() {
                te.state.isEnabled = !0;
            }
            function qe() {
                te.hide(), te.state.isEnabled = !1;
            }
            function Ye() {
                clearTimeout(n), clearTimeout(i), cancelAnimationFrame(s);
            }
            function ze(t) {
                if (!te.state.isDestroyed) {
                    0, ue("onBeforeUpdate", [ te, t ]), ke();
                    var n = te.props, r = q(e, o({}, te.props, {}, t, {
                        ignoreAttributes: !0
                    }));
                    if (r.ignoreAttributes = M(t.ignoreAttributes, n.ignoreAttributes), te.props = r, 
                    Ie(), n.interactiveDebounce !== r.interactiveDebounce && (me(), _ = T(Ne, r.interactiveDebounce)), 
                    Te(K, n, r), te.popperChildren = we(K), n.triggerTarget && !r.triggerTarget ? S(n.triggerTarget).forEach(function(e) {
                        e.removeAttribute("aria-expanded");
                    }) : r.triggerTarget && e.removeAttribute("aria-expanded"), le(), te.popperInstance) if (V.some(function(e) {
                        return u(t, e) && t[e] !== n[e];
                    })) {
                        var i = te.popperInstance.reference;
                        te.popperInstance.destroy(), je(), te.popperInstance.reference = i, te.state.isVisible && te.popperInstance.enableEventListeners();
                    } else te.popperInstance.update();
                    ue("onAfterUpdate", [ te, t ]);
                }
            }
            function Ke(e) {
                te.setProps({
                    content: e
                });
            }
            function Je(e) {
                void 0 === e && (e = c(te.props.duration, 0, j.duration));
                var t = te.state.isVisible, n = te.state.isDestroyed, r = !te.state.isEnabled, o = re.isTouch && !te.props.touch;
                t || n || r || o || se().hasAttribute("disabled") || (te.popperInstance || je(), 
                ue("onShow", [ te ], !1), !1 !== te.props.onShow(te) && (ge(), K.style.visibility = "visible", 
                te.state.isVisible = !0, te.state.isMounted || E(ee.concat(K), 0), d = function() {
                    te.state.isVisible && (E([ K ], te.props.updateDuration), E(ee, e), O(ee, "visible"), 
                    fe(), le(), k(Me, te), de(!0), te.state.isMounted = !0, ue("onMount", [ te ]), Ee(e, function() {
                        te.state.isShown = !0, ue("onShown", [ te ]);
                    }));
                }, Ve()));
            }
            function Xe(e) {
                void 0 === e && (e = c(te.props.duration, 1, j.duration));
                var t = !te.state.isVisible && !g, n = te.state.isDestroyed, r = !te.state.isEnabled && !g;
                t || n || r || (ue("onHide", [ te ], !1), (!1 !== te.props.onHide(te) || g) && (be(), 
                K.style.visibility = "hidden", te.state.isVisible = !1, te.state.isShown = !1, E(ee, e), 
                O(ee, "hidden"), fe(), le(), ye(e, function() {
                    te.popperInstance.disableEventListeners(), te.popperInstance.options.placement = te.props.placement, 
                    K.parentNode.removeChild(K), 0 === (Me = Me.filter(function(e) {
                        return e !== te;
                    })).length && de(!1), te.state.isMounted = !1, ue("onHidden", [ te ]);
                })));
            }
            function Ge() {
                te.state.isDestroyed || (g = !0, te.clearDelayTimeouts(), te.hide(0), ke(), delete e._tippy, 
                te.popperInstance && te.popperInstance.destroy(), g = !1, te.state.isDestroyed = !0, 
                ue("onDestroy", [ te ]));
            }
        }
        function Ie(e, t, n) {
            void 0 === t && (t = {}), void 0 === n && (n = []), n = j.plugins.concat(t.plugins || n), 
            pe();
            var r = o({}, t, {
                plugins: n
            }), i = f(e).reduce(function(e, t) {
                var n = t && Se(t, r);
                return n && e.push(n), e;
            }, []);
            return h(e) ? i[0] : i;
        }
        Ie.version = i, Ie.defaultProps = j, Ie.setDefaultProps = _, Ie.currentInput = re;
        var ke = n(1), Pe = n.n(ke), Ne = (n(18), n(42));
        function Fe() {
            return (Fe = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
        }
        function Be(e, t) {
            if (null == e) return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        }
        var He = "undefined" != typeof window && "undefined" != typeof document;
        function je(e, t) {
            e && ("function" == typeof e && e(t), {}.hasOwnProperty.call(e, "current") && (e.current = t));
        }
        function We() {
            return He && document.createElement("div");
        }
        function Ve(e, t, n) {
            n.split(/\s+/).forEach(function(n) {
                n && e.classList[t](n);
            });
        }
        var _e = He ? ke.useLayoutEffect : ke.useEffect;
        function Ue(e, t, n) {
            _e(function() {
                var n = e.instance.popperChildren.tooltip;
                if (t) return Ve(n, "add", t), function() {
                    Ve(n, "remove", t);
                };
            }, [ t ].concat(n));
        }
        function Re(e) {
            var t = Object(ke.useRef)();
            return t.current || (t.current = "function" == typeof e ? e() : e), t.current;
        }
        function qe(e) {
            var t = e.children, n = e.content, r = e.className, o = e.visible, i = e.singleton, a = e.enabled, s = void 0 === a || a, p = e.multiple, u = void 0 === p || p, f = e.ignoreAttributes, c = void 0 === f || f, l = (e.__source, 
            e.__self, Be(e, [ "children", "content", "className", "visible", "singleton", "enabled", "multiple", "ignoreAttributes", "__source", "__self" ])), d = void 0 !== o, h = void 0 !== i, m = Object(ke.useState)(!1), v = m[0], g = m[1], b = Re(function() {
                return {
                    container: We(),
                    renders: 1
                };
            }), y = Fe({
                ignoreAttributes: c,
                multiple: u
            }, l, {
                content: b.container
            });
            d && (y.trigger = "manual"), h && (s = !1);
            var w = [ t.type ];
            return _e(function() {
                var e = Ie(b.ref, y);
                return b.instance = e, s || e.disable(), o && e.show(), h && i(e), g(!0), function() {
                    e.destroy();
                };
            }, w), _e(function() {
                if (1 !== b.renders) {
                    var e = b.instance;
                    e.setProps(y), s ? e.enable() : e.disable(), d && (o ? e.show() : e.hide());
                } else b.renders++;
            }), Ue(b, r, w), Pe.a.createElement(Pe.a.Fragment, null, Object(ke.cloneElement)(t, {
                ref: function(e) {
                    b.ref = e, je(t.ref, e);
                }
            }), v && Object(Ne.createPortal)(n, b.container));
        }
        var Ye = Object(ke.forwardRef)(function(e, t) {
            var n = e.children, r = Be(e, [ "children" ]);
            return Pe.a.createElement(qe, r, Object(ke.cloneElement)(n, {
                ref: function(e) {
                    je(t, e), je(n.ref, e);
                }
            }));
        });
        t.a = Ye;
    }
} ]);