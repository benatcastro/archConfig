!function(t) {
    function e(e) {
        for (var n, o, i = e[0], a = e[1], u = 0, s = []; u < i.length; u++) o = i[u], Object.prototype.hasOwnProperty.call(r, o) && r[o] && s.push(r[o][0]), 
        r[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (c && c(e); s.length; ) s.shift()();
    }
    var n = {}, r = {
        4: 0
    };
    function o(t) {
        return i.p + "frameChunks/" + t + ".js";
    }
    function i(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
    }
    i.e = function(t) {
        var e = [], n = function(t) {
            const e = o(t);
            chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", {
                action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
                scriptPath: e
            }, function() {
                chrome.runtime.lastError && console.error("Failed to load dependency", e);
                const n = r[t];
                0 !== n && (n && n[1](), r[t] = void 0);
            });
        }, a = function(t) {
            var e, n = document.getElementsByTagName("head")[0], a = document.createElement("script");
            a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = o(t), 
            0 !== a.src.indexOf(window.location.origin + "/") && (a.crossOrigin = "anonymous"), 
            e = function(e) {
                a.onerror = a.onload = null, clearTimeout(u);
                var n = r[t];
                if (0 !== n) {
                    if (n) {
                        var o = e && ("load" === e.type ? "missing" : e.type), i = e && e.target && e.target.src, s = new Error("Loading chunk " + t + " failed.\n(" + o + ": " + i + ")");
                        s.type = o, s.request = i, n[1](s);
                    }
                    r[t] = void 0;
                }
            };
            var u = setTimeout(function() {
                e({
                    type: "timeout",
                    target: a
                });
            }, 12e4);
            a.onerror = a.onload = e, n.appendChild(a);
        }, u = r[t];
        if (0 !== u) if (u) e.push(u[2]); else {
            var s = new Promise(function(e, n) {
                u = r[t] = [ e, n ];
            });
            e.push(u[2] = s), "chrome" === window.equatioCoreChunkLoading ? n(t) : a(t);
        }
        return Promise.all(e);
    }, i.m = t, i.c = n, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        });
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function(e) {
            return t[e];
        }.bind(null, r));
        return n;
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return i.d(e, "a", e), e;
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, i.p = "/", i.oe = function(t) {
        throw console.error(t), t;
    };
    var a = window.equatioChromeJsonp = window.equatioChromeJsonp || [], u = a.push.bind(a);
    a.push = e, a = a.slice();
    for (var s = 0; s < a.length; s++) e(a[s]);
    var c = u;
    i(i.s = 64);
}({
    12: function(t, e, n) {
        var r, o;
 /*! simple-query-string v1.3.2 - MIT license */        void 0 === (o = "function" == typeof (r = function() {
            "use strict";
            function t(t) {
                var e, n = Object.prototype.hasOwnProperty, r = [];
                for (e in t) n.call(t, e) && r.push(e);
                return r;
            }
            function e(t) {
                return void 0 === t ? null : t ? decodeURIComponent(t) : t;
            }
            function n(t) {
                switch (typeof t) {
                  case "string":
                    return encodeURIComponent(t);

                  case "boolean":
                    return t ? "true" : "false";

                  case "number":
                    return isFinite(t) ? t : "";

                  case "object":
                    return void 0 === t || null === t ? "" : JSON && JSON.stringify ? encodeURIComponent(JSON.stringify(t)) : "";

                  default:
                    return "";
                }
            }
            return Array.isArray || (Array.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            }), {
                version: "1.3.2",
                parse: function(t, n, r) {
                    var o;
                    n = n || "&", r = r || "=";
                    var i = Object.create(null);
                    if ("string" != typeof t) return i;
                    if ((o = t.indexOf("?")) < 0 && t.indexOf(r) < 0) return i;
                    o >= 0 && (t = t.substr(o + 1)), t = t.replace(/^[\s\uFEFF\xA0\?#&]+|[\s\uFEFF\xA0&]+$/g, ""), 
                    (o = t.lastIndexOf("#")) > 0 && (t = t.substr(0, o));
                    var a = t.split(n);
                    for (o = 0; o < a.length; ++o) {
                        var u, s, c = a[o].replace(/\+/g, " "), l = c.indexOf(r);
                        if (0 !== l && 0 !== c.length) {
                            l < 0 ? (u = e(c), s = null) : (u = e(c.substr(0, l)), s = e(c.substr(l + 1)));
                            var f = i[u];
                            void 0 === f ? i[u] = s : Array.isArray(f) ? f.push(s) : i[u] = [ f, s ];
                        }
                    }
                    return i;
                },
                stringify: function(e, r, o) {
                    if (r = r || "&", o = o || "=", "object" != typeof e && "function" != typeof e || null === e) return "";
                    var i = t(e);
                    if (!i || !i.length) return "";
                    for (var a, u, s, c = [], l = 0; l < i.length; l++) if (u = n(i[l]), void 0 !== (s = e[u]) && "function" != typeof s) if (Array.isArray(s)) for (a = 0; a < s.length; ++a) c.push(u + o + (s[a] ? n(s[a]) : "")); else null !== s && (s = n(s)), 
                    c.push(null === s || void 0 === s ? u : u + o + s);
                    return c.join(r);
                }
            };
        }) ? r.call(e, n, e, t) : r) || (t.exports = o);
    },
    30: function(t, e, n) {
        /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */ var r;
        r = function() {
            "use strict";
            function t(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n;
                }
                return Array.from(t);
            }
            var e = Object.hasOwnProperty, n = Object.setPrototypeOf, r = Object.isFrozen, o = Object.getPrototypeOf, i = Object.getOwnPropertyDescriptor, a = Object.freeze, u = Object.seal, s = Object.create, c = "undefined" != typeof Reflect && Reflect, l = c.apply, f = c.construct;
            l || (l = function(t, e, n) {
                return t.apply(e, n);
            }), a || (a = function(t) {
                return t;
            }), u || (u = function(t) {
                return t;
            }), f || (f = function(e, n) {
                return new (Function.prototype.bind.apply(e, [ null ].concat(t(n))))();
            });
            var m = b(Array.prototype.forEach), p = b(Array.prototype.pop), h = b(Array.prototype.push), d = b(String.prototype.toLowerCase), g = b(String.prototype.match), v = b(String.prototype.replace), y = b(String.prototype.indexOf), x = b(String.prototype.trim), S = b(RegExp.prototype.test), N = w(TypeError);
            function b(t) {
                return function(e) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    return l(t, e, r);
                };
            }
            function w(t) {
                return function() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return f(t, n);
                };
            }
            function T(t, e) {
                n && n(t, null);
                for (var o = e.length; o--; ) {
                    var i = e[o];
                    if ("string" == typeof i) {
                        var a = d(i);
                        a !== i && (r(e) || (e[o] = a), i = a);
                    }
                    t[i] = !0;
                }
                return t;
            }
            function E(t) {
                var n = s(null), r = void 0;
                for (r in t) l(e, t, [ r ]) && (n[r] = t[r]);
                return n;
            }
            function A(t, e) {
                for (;null !== t; ) {
                    var n = i(t, e);
                    if (n) {
                        if (n.get) return b(n.get);
                        if ("function" == typeof n.value) return b(n.value);
                    }
                    t = o(t);
                }
                function r(t) {
                    return null;
                }
                return r;
            }
            var O = a([ "a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr" ]), C = a([ "svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern" ]), D = a([ "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence" ]), _ = a([ "animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use" ]), M = a([ "math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover" ]), F = a([ "maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none" ]), I = a([ "#text" ]), k = a([ "accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot" ]), P = a([ "accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan" ]), U = a([ "accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns" ]), R = a([ "xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink" ]), B = u(/\{\{[\s\S]*|[\s\S]*\}\}/gm), X = u(/<%[\s\S]*|[\s\S]*%>/gm), L = u(/^data-[\-\w.\u00B7-\uFFFF]/), z = u(/^aria-[\-\w]+$/), J = u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), q = u(/^(?:\w+script|data):/i), G = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), $ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            };
            function j(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n;
                }
                return Array.from(t);
            }
            var Q = function() {
                return "undefined" == typeof window ? null : window;
            }, K = function(t, e) {
                if ("object" !== (void 0 === t ? "undefined" : $(t)) || "function" != typeof t.createPolicy) return null;
                var n = null, r = "data-tt-policy-suffix";
                e.currentScript && e.currentScript.hasAttribute(r) && (n = e.currentScript.getAttribute(r));
                var o = "dompurify" + (n ? "#" + n : "");
                try {
                    return t.createPolicy(o, {
                        createHTML: function(t) {
                            return t;
                        }
                    });
                } catch (t) {
                    return null;
                }
            };
            function V() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(), e = function(t) {
                    return V(t);
                };
                if (e.version = "2.2.9", e.removed = [], !t || !t.document || 9 !== t.document.nodeType) return e.isSupported = !1, 
                e;
                var n = t.document, r = t.document, o = t.DocumentFragment, i = t.HTMLTemplateElement, u = t.Node, s = t.Element, c = t.NodeFilter, l = t.NamedNodeMap, f = void 0 === l ? t.NamedNodeMap || t.MozNamedAttrMap : l, b = t.Text, w = t.Comment, H = t.DOMParser, Y = t.trustedTypes, W = s.prototype, Z = A(W, "cloneNode"), tt = A(W, "nextSibling"), et = A(W, "childNodes"), nt = A(W, "parentNode");
                if ("function" == typeof i) {
                    var rt = r.createElement("template");
                    rt.content && rt.content.ownerDocument && (r = rt.content.ownerDocument);
                }
                var ot = K(Y, n), it = ot && Ut ? ot.createHTML("") : "", at = r, ut = at.implementation, st = at.createNodeIterator, ct = at.createDocumentFragment, lt = n.importNode, ft = {};
                try {
                    ft = E(r).documentMode ? r.documentMode : {};
                } catch (t) {}
                var mt = {};
                e.isSupported = "function" == typeof nt && ut && void 0 !== ut.createHTMLDocument && 9 !== ft;
                var pt = B, ht = X, dt = L, gt = z, vt = q, yt = G, xt = J, St = null, Nt = T({}, [].concat(j(O), j(C), j(D), j(M), j(I))), bt = null, wt = T({}, [].concat(j(k), j(P), j(U), j(R))), Tt = null, Et = null, At = !0, Ot = !0, Ct = !1, Dt = !1, _t = !1, Mt = !1, Ft = !1, It = !1, kt = !1, Pt = !0, Ut = !1, Rt = !0, Bt = !0, Xt = !1, Lt = {}, zt = T({}, [ "annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp" ]), Jt = null, qt = T({}, [ "audio", "video", "img", "source", "image", "track" ]), Gt = null, $t = T({}, [ "alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns" ]), jt = "http://www.w3.org/1998/Math/MathML", Qt = "http://www.w3.org/2000/svg", Kt = "http://www.w3.org/1999/xhtml", Vt = Kt, Ht = !1, Yt = null, Wt = r.createElement("form"), Zt = function(t) {
                    Yt && Yt === t || (t && "object" === (void 0 === t ? "undefined" : $(t)) || (t = {}), 
                    t = E(t), St = "ALLOWED_TAGS" in t ? T({}, t.ALLOWED_TAGS) : Nt, bt = "ALLOWED_ATTR" in t ? T({}, t.ALLOWED_ATTR) : wt, 
                    Gt = "ADD_URI_SAFE_ATTR" in t ? T(E($t), t.ADD_URI_SAFE_ATTR) : $t, Jt = "ADD_DATA_URI_TAGS" in t ? T(E(qt), t.ADD_DATA_URI_TAGS) : qt, 
                    Tt = "FORBID_TAGS" in t ? T({}, t.FORBID_TAGS) : {}, Et = "FORBID_ATTR" in t ? T({}, t.FORBID_ATTR) : {}, 
                    Lt = "USE_PROFILES" in t && t.USE_PROFILES, At = !1 !== t.ALLOW_ARIA_ATTR, Ot = !1 !== t.ALLOW_DATA_ATTR, 
                    Ct = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Dt = t.SAFE_FOR_TEMPLATES || !1, _t = t.WHOLE_DOCUMENT || !1, 
                    It = t.RETURN_DOM || !1, kt = t.RETURN_DOM_FRAGMENT || !1, Pt = !1 !== t.RETURN_DOM_IMPORT, 
                    Ut = t.RETURN_TRUSTED_TYPE || !1, Ft = t.FORCE_BODY || !1, Rt = !1 !== t.SANITIZE_DOM, 
                    Bt = !1 !== t.KEEP_CONTENT, Xt = t.IN_PLACE || !1, xt = t.ALLOWED_URI_REGEXP || xt, 
                    Vt = t.NAMESPACE || Kt, Dt && (Ot = !1), kt && (It = !0), Lt && (St = T({}, [].concat(j(I))), 
                    bt = [], !0 === Lt.html && (T(St, O), T(bt, k)), !0 === Lt.svg && (T(St, C), T(bt, P), 
                    T(bt, R)), !0 === Lt.svgFilters && (T(St, D), T(bt, P), T(bt, R)), !0 === Lt.mathMl && (T(St, M), 
                    T(bt, U), T(bt, R))), t.ADD_TAGS && (St === Nt && (St = E(St)), T(St, t.ADD_TAGS)), 
                    t.ADD_ATTR && (bt === wt && (bt = E(bt)), T(bt, t.ADD_ATTR)), t.ADD_URI_SAFE_ATTR && T(Gt, t.ADD_URI_SAFE_ATTR), 
                    Bt && (St["#text"] = !0), _t && T(St, [ "html", "head", "body" ]), St.table && (T(St, [ "tbody" ]), 
                    delete Tt.tbody), a && a(t), Yt = t);
                }, te = T({}, [ "mi", "mo", "mn", "ms", "mtext" ]), ee = T({}, [ "foreignobject", "desc", "title", "annotation-xml" ]), ne = T({}, C);
                T(ne, D), T(ne, _);
                var re = T({}, M);
                T(re, F);
                var oe = function(t) {
                    var e = nt(t);
                    e && e.tagName || (e = {
                        namespaceURI: Kt,
                        tagName: "template"
                    });
                    var n = d(t.tagName), r = d(e.tagName);
                    if (t.namespaceURI === Qt) return e.namespaceURI === Kt ? "svg" === n : e.namespaceURI === jt ? "svg" === n && ("annotation-xml" === r || te[r]) : Boolean(ne[n]);
                    if (t.namespaceURI === jt) return e.namespaceURI === Kt ? "math" === n : e.namespaceURI === Qt ? "math" === n && ee[r] : Boolean(re[n]);
                    if (t.namespaceURI === Kt) {
                        if (e.namespaceURI === Qt && !ee[r]) return !1;
                        if (e.namespaceURI === jt && !te[r]) return !1;
                        var o = T({}, [ "title", "style", "font", "a", "script" ]);
                        return !re[n] && (o[n] || !ne[n]);
                    }
                    return !1;
                }, ie = function(t) {
                    h(e.removed, {
                        element: t
                    });
                    try {
                        t.parentNode.removeChild(t);
                    } catch (e) {
                        try {
                            t.outerHTML = it;
                        } catch (e) {
                            t.remove();
                        }
                    }
                }, ae = function(t, n) {
                    try {
                        h(e.removed, {
                            attribute: n.getAttributeNode(t),
                            from: n
                        });
                    } catch (t) {
                        h(e.removed, {
                            attribute: null,
                            from: n
                        });
                    }
                    if (n.removeAttribute(t), "is" === t && !bt[t]) if (It || kt) try {
                        ie(n);
                    } catch (t) {} else try {
                        n.setAttribute(t, "");
                    } catch (t) {}
                }, ue = function(t) {
                    var e = void 0, n = void 0;
                    if (Ft) t = "<remove></remove>" + t; else {
                        var o = g(t, /^[\r\n\t ]+/);
                        n = o && o[0];
                    }
                    var i = ot ? ot.createHTML(t) : t;
                    if (Vt === Kt) try {
                        e = new H().parseFromString(i, "text/html");
                    } catch (t) {}
                    if (!e || !e.documentElement) {
                        e = ut.createDocument(Vt, "template", null);
                        try {
                            e.documentElement.innerHTML = Ht ? "" : i;
                        } catch (t) {}
                    }
                    var a = e.body || e.documentElement;
                    return t && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), _t ? e.documentElement : a;
                }, se = function(t) {
                    return st.call(t.ownerDocument || t, t, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT, null, !1);
                }, ce = function(t) {
                    return !(t instanceof b || t instanceof w) && !("string" == typeof t.nodeName && "string" == typeof t.textContent && "function" == typeof t.removeChild && t.attributes instanceof f && "function" == typeof t.removeAttribute && "function" == typeof t.setAttribute && "string" == typeof t.namespaceURI && "function" == typeof t.insertBefore);
                }, le = function(t) {
                    return "object" === (void 0 === u ? "undefined" : $(u)) ? t instanceof u : t && "object" === (void 0 === t ? "undefined" : $(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName;
                }, fe = function(t, n, r) {
                    mt[t] && m(mt[t], function(t) {
                        t.call(e, n, r, Yt);
                    });
                }, me = function(t) {
                    var n = void 0;
                    if (fe("beforeSanitizeElements", t, null), ce(t)) return ie(t), !0;
                    if (g(t.nodeName, /[\u0080-\uFFFF]/)) return ie(t), !0;
                    var r = d(t.nodeName);
                    if (fe("uponSanitizeElement", t, {
                        tagName: r,
                        allowedTags: St
                    }), !le(t.firstElementChild) && (!le(t.content) || !le(t.content.firstElementChild)) && S(/<[/\w]/g, t.innerHTML) && S(/<[/\w]/g, t.textContent)) return ie(t), 
                    !0;
                    if (!St[r] || Tt[r]) {
                        if (Bt && !zt[r]) {
                            var o = nt(t) || t.parentNode, i = et(t) || t.childNodes;
                            if (i && o) for (var a = i.length - 1; a >= 0; --a) o.insertBefore(Z(i[a], !0), tt(t));
                        }
                        return ie(t), !0;
                    }
                    return t instanceof s && !oe(t) ? (ie(t), !0) : "noscript" !== r && "noembed" !== r || !S(/<\/no(script|embed)/i, t.innerHTML) ? (Dt && 3 === t.nodeType && (n = t.textContent, 
                    n = v(n, pt, " "), n = v(n, ht, " "), t.textContent !== n && (h(e.removed, {
                        element: t.cloneNode()
                    }), t.textContent = n)), fe("afterSanitizeElements", t, null), !1) : (ie(t), !0);
                }, pe = function(t, e, n) {
                    if (Rt && ("id" === e || "name" === e) && (n in r || n in Wt)) return !1;
                    if (Ot && S(dt, e)) ; else if (At && S(gt, e)) ; else {
                        if (!bt[e] || Et[e]) return !1;
                        if (Gt[e]) ; else if (S(xt, v(n, yt, ""))) ; else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== y(n, "data:") || !Jt[t]) {
                            if (Ct && !S(vt, v(n, yt, ""))) ; else if (n) return !1;
                        } else ;
                    }
                    return !0;
                }, he = function(t) {
                    var n = void 0, r = void 0, o = void 0, i = void 0;
                    fe("beforeSanitizeAttributes", t, null);
                    var a = t.attributes;
                    if (a) {
                        var u = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: bt
                        };
                        for (i = a.length; i--; ) {
                            var s = n = a[i], c = s.name, l = s.namespaceURI;
                            if (r = x(n.value), o = d(c), u.attrName = o, u.attrValue = r, u.keepAttr = !0, 
                            u.forceKeepAttr = void 0, fe("uponSanitizeAttribute", t, u), r = u.attrValue, !u.forceKeepAttr && (ae(c, t), 
                            u.keepAttr)) if (S(/\/>/i, r)) ae(c, t); else {
                                Dt && (r = v(r, pt, " "), r = v(r, ht, " "));
                                var f = t.nodeName.toLowerCase();
                                if (pe(f, o, r)) try {
                                    l ? t.setAttributeNS(l, c, r) : t.setAttribute(c, r), p(e.removed);
                                } catch (t) {}
                            }
                        }
                        fe("afterSanitizeAttributes", t, null);
                    }
                }, de = function t(e) {
                    var n = void 0, r = se(e);
                    for (fe("beforeSanitizeShadowDOM", e, null); n = r.nextNode(); ) fe("uponSanitizeShadowNode", n, null), 
                    me(n) || (n.content instanceof o && t(n.content), he(n));
                    fe("afterSanitizeShadowDOM", e, null);
                };
                return e.sanitize = function(r, i) {
                    var a = void 0, s = void 0, c = void 0, l = void 0, f = void 0;
                    if ((Ht = !r) && (r = "\x3c!--\x3e"), "string" != typeof r && !le(r)) {
                        if ("function" != typeof r.toString) throw N("toString is not a function");
                        if ("string" != typeof (r = r.toString())) throw N("dirty is not a string, aborting");
                    }
                    if (!e.isSupported) {
                        if ("object" === $(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                            if ("string" == typeof r) return t.toStaticHTML(r);
                            if (le(r)) return t.toStaticHTML(r.outerHTML);
                        }
                        return r;
                    }
                    if (Mt || Zt(i), e.removed = [], "string" == typeof r && (Xt = !1), Xt) ; else if (r instanceof u) 1 === (s = (a = ue("\x3c!----\x3e")).ownerDocument.importNode(r, !0)).nodeType && "BODY" === s.nodeName ? a = s : "HTML" === s.nodeName ? a = s : a.appendChild(s); else {
                        if (!It && !Dt && !_t && -1 === r.indexOf("<")) return ot && Ut ? ot.createHTML(r) : r;
                        if (!(a = ue(r))) return It ? null : it;
                    }
                    a && Ft && ie(a.firstChild);
                    for (var m = se(Xt ? r : a); c = m.nextNode(); ) 3 === c.nodeType && c === l || me(c) || (c.content instanceof o && de(c.content), 
                    he(c), l = c);
                    if (l = null, Xt) return r;
                    if (It) {
                        if (kt) for (f = ct.call(a.ownerDocument); a.firstChild; ) f.appendChild(a.firstChild); else f = a;
                        return Pt && (f = lt.call(n, f, !0)), f;
                    }
                    var p = _t ? a.outerHTML : a.innerHTML;
                    return Dt && (p = v(p, pt, " "), p = v(p, ht, " ")), ot && Ut ? ot.createHTML(p) : p;
                }, e.setConfig = function(t) {
                    Zt(t), Mt = !0;
                }, e.clearConfig = function() {
                    Yt = null, Mt = !1;
                }, e.isValidAttribute = function(t, e, n) {
                    Yt || Zt({});
                    var r = d(t), o = d(e);
                    return pe(r, o, n);
                }, e.addHook = function(t, e) {
                    "function" == typeof e && (mt[t] = mt[t] || [], h(mt[t], e));
                }, e.removeHook = function(t) {
                    mt[t] && p(mt[t]);
                }, e.removeHooks = function(t) {
                    mt[t] && (mt[t] = []);
                }, e.removeAllHooks = function() {
                    mt = {};
                }, e;
            }
            return V();
        }, t.exports = r();
    },
    41: function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(30);
            function o(t, e, n, r, o, i, a) {
                try {
                    var u = t[i](a), s = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(s) : Promise.resolve(s).then(r, o);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = t.apply(e, n);
                        function u(t) {
                            o(a, r, i, u, s, "next", t);
                        }
                        function s(t) {
                            o(a, r, i, u, s, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            function a(t, e) {
                return u(t) || s(t, e) || c();
            }
            function u(t) {
                if (Array.isArray(t)) return t;
            }
            function s(t, e) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), 
                        !e || n.length !== e); r = !0) ;
                    } catch (t) {
                        o = !0, i = t;
                    } finally {
                        try {
                            r || null == u.return || u.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            }
            function c() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
            var l, f = function() {
                var e = function() {
                    var t;
                    try {
                        var e = new DOMParser().parseFromString("<", "text/xml");
                        t = e.getElementsByTagName("parsererror")[0].namespaceURI;
                    } catch (t) {}
                    function n(e) {
                        return e.getElementsByTagNameNS(t, "parsererror").length > 0;
                    }
                    var i = {
                        inBrowser: !0,
                        asyncGet: function(t, e, n) {
                            var r = new XMLHttpRequest();
                            return r.open("GET", t, !0), 0 !== n && (r.timeout = n), r.onload = function(n) {
                                4 === r.readyState && (200 === r.status ? e(r.responseText) : e(new v(r.statusText + ": " + t, "SXJS0006")));
                            }, r.ontimeout = function(n) {
                                e(new v("Document fetch timeout: " + t, "SXJS0008"));
                            }, r.onabort = function(n) {
                                e(new v("Document fetch aborted: " + t, "SXJS0008"));
                            }, r.onerror = function(n) {
                                e(new v("Document fetch failed: " + t, "SXJS0006"));
                            }, r.send(null), r;
                        },
                        asyncGetXml: function(t, e, n) {
                            return i.asyncGet(t, function(n) {
                                var r = null;
                                n instanceof v ? r = n : (r = i.parseXmlFromString(n))._saxonBaseUri = t, e(t, r);
                            }, n);
                        },
                        asyncGetMultipleXml: function(t, e) {
                            var n = t.length, r = {};
                            function o(t, o) {
                                if (o instanceof v) throw o;
                                r[t] = o, --n <= 0 && e(r);
                            }
                            for (var a = 0; a < t.length; a++) t[a] ? i.asyncGetXml(t[a], o, 0) : n--;
                        },
                        addXml: function(t, e, n, r) {
                            function o(t, r) {
                                z("Add to pool " + t, 2), n[t] = r, e(n);
                            }
                            return !n[t] || n[t] instanceof v ? i.asyncGetXml(t, o, r) : (z("Doc already in pool " + t, 2), 
                            e(n), null);
                        },
                        addMultipleXml: function(t, e, n, r) {
                            var o = t.length, a = {};
                            function u(t) {
                                --o <= 0 && n(t);
                            }
                            for (var s = 0; s < t.length; s++) t[s] ? a[t[s]] = i.addXml(t[s], u, e, r) : o--;
                            return a;
                        },
                        makeHttpRequest: function(t, e, n) {
                            var o = w.convertToJS(t, !1, !0);
                            function a(t, e) {
                                if (t instanceof DocumentFragment) {
                                    var n = document.implementation.createDocument(null, null, null), r = n.importNode(t, !0);
                                    n.appendChild(r), t = n;
                                }
                                return t;
                            }
                            function u(t) {
                                if (!t.href) throw v("'href' must be specified in HTTP request", "SXJS0006");
                                function e(e) {
                                    throw v(e + " in HTTP request to: " + t.href, "SXJS0006");
                                }
                                t.method || e("'method' must be specified"), t.method = t.method.toUpperCase(), 
                                "status-only" in t && "boolean" != typeof t["status-only"] && e("'status-only' parameter must be of type xs:boolean"), 
                                t.allowedBody = "GET" != t.method && "HEAD" != t.method, t.hasData = "body" in t || "multipart-bodies" in t, 
                                ("multipart-bodies" in t || "multipart-headers" in t) && e("Multipart requests not yet implemented"), 
                                !t.allowedBody && t.hasData && e("Body and multipart body content must be null for " + t.method + " request"), 
                                "headers" in t || (t.headers = {});
                                var n = t["media-type"] || t.headers["content-type"] || "";
                                return t.hasData && "" === n && e("No content type specified"), "media-type" in t && (t.headers["content-type"] = n), 
                                "multipart-bodies" in t && !/$multipart\//.test(n) && e("Content type must be multipart media type for multipart request"), 
                                ("username" in t && !("password" in t) || !("username" in t) && "password" in t) && e("Must set both (or neither) username and password"), 
                                t.body instanceof DocumentFragment && (t.body = a(t.body, n)), "text/xml" != n && "application/xml" != n && "text/xml-external-parsed-entity" != n && "application/xml-external-parsed-entity" != n && !/\+xml$/.test(n) && "text/html" != n || t.body instanceof XMLDocument || e("HTTP request body must be a document node, supplied item is: " + r(t.body)), 
                                z("HTTP request prepared", 2), t;
                            }
                            u(o), "undefined" == typeof XMLHttpRequest && (XMLHttpRequest = function() {
                                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                            });
                            var s = new XMLHttpRequest();
                            for (var c in "override-media-type" in o && s.overrideMimeType(o["override-media-type"]), 
                            "username" in o ? s.open(o.method, o.href, !0, o.username, o.password) : s.open(o.method, o.href, !0), 
                            "timeout" in o && 0 === n && (n = o.timeout), 0 !== n && (s.timeout = n), o.headers) o.headers.hasOwnProperty(c) && s.setRequestHeader(c, o.headers[c]);
                            var l = {};
                            function f(t, n) {
                                return function(r) {
                                    l.status = 0, l.message = t + ": " + o.href, l.error = n, l.type = r.type, e(w.convertFromJS(l, !1, !0));
                                };
                            }
                            return s.ontimeout = f("HTTP request timeout", "SXJS0008"), s.onabort = f("HTTP request aborted", "SXJS0008"), 
                            s.onerror = f("HTTP request failed", "SXJS0009"), s.onload = function(t) {
                                function n(t, e) {
                                    var n = e.getAllResponseHeaders();
                                    "" === n || n.split(/\r\n/).forEach(function(e) {
                                        if ("" !== e.trim()) {
                                            var n = e.indexOf(":");
                                            n >= 0 ? t.headers[e.substring(0, n).toLowerCase()] = e.substring(n + 1).trim() : z("No ':' separator found in HTTP response header " + e);
                                        }
                                    });
                                }
                                if (z("Saxon-JS processing httpRequest response", 2), l.headers = {}, l.status = s.status, 
                                l.message = s.statusText, l.type = t.type, !o["status-only"] && s.status < 400) {
                                    var r = s.getResponseHeader("Content-Type").split(/;/), a = r[0], u = (r[1].trim(), 
                                    o["override-media-type"] || a);
                                    switch (l["media-type"] = u, u) {
                                      case "text/xml":
                                      case "application/xml":
                                      case "text/xml-external-parsed-entity":
                                      case "application/xml-external-parsed-entity":
                                      case "text/html":
                                        l.body = s.responseXML || i.parseXmlFromString(s.responseText);
                                        break;

                                      default:
                                        if (/\+xml$/.test(u)) {
                                            l.body = s.responseXML || i.parseXmlFromString(s.responseText);
                                            break;
                                        }
                                        if (/^text\//.test(u)) {
                                            l.body = s.responseText;
                                            break;
                                        }
                                        if (/^multipart\//.test(u)) {
                                            l.body = s.responseText;
                                            break;
                                        }
                                        l.body = s.responseText;
                                    }
                                }
                                n(l, s), e(w.convertFromJS(l, !1, !0));
                            }, s.send(o.body), s;
                        },
                        parseXmlFromString: function(t) {
                            t = t.replace(/\r\n|\r(?!\n)/g, "\n");
                            try {
                                if (!/Edge\//.test(window.navigator.userAgent) && /^.+<\?xml/i.test(t)) throw new Error();
                                var e = new DOMParser().parseFromString(t, "application/xml");
                                e.documentElement;
                                if (n(e)) throw new Error();
                                return e;
                            } catch (t) {
                                throw v("Misplaced or malformed XML", "FODC0002");
                            }
                        },
                        readResource: function(t) {
                            var e, n = new XMLHttpRequest(), r = i.resolveUri(t, i.baseUri());
                            if (n.open("GET", r, !1), n.send(null), 200 != n.status) throw v("Failed to read resource at " + t, "SXJS0006");
                            if ("\ufeff" == (e = n.responseText).charAt(0)) throw v(e.substring(1), "FODC0002");
                            return e;
                        },
                        readFile: function(t, e) {
                            var n, r = new XMLHttpRequest();
                            try {
                                r.open("GET", t, !1), r.send(null);
                            } catch (e) {
                                throw v("Get failure " + t, "FODC0002");
                            }
                            if (200 != r.status) throw v("Failed to read file at " + t, "FODC0002");
                            if ("\ufeff" == (n = r.responseText).charAt(0)) throw v(n.substring(1), "FODC0002");
                            if (n.indexOf("\0") >= 0) throw v("External file contains non-XML characters", "FOUT1190");
                            return n;
                        },
                        resolveUri: function(t, e) {
                            try {
                                var n, r = document, o = r.getElementsByTagName("base")[0], i = o && o.href, a = r.head || r.getElementsByTagName("head")[0], u = o || a.appendChild(r.createElement("base")), s = r.createElement("a");
                                return u.href = e || "", s.href = t, n = s.href, o ? o.href = i : a.removeChild(u), 
                                n;
                            } catch (n) {
                                throw v("Illegal URI: href=" + t + " base=" + e, "FODC0005");
                            }
                        },
                        baseUri: function() {
                            for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) if (/SaxonJS(\.min)?.js/.test(t[e].getAttribute("src"))) return t[e].src;
                            return t[t.length - 1].src;
                        },
                        initialize: function() {
                            a(), o._init();
                        },
                        deliverMessage: function(t) {
                            "function" != typeof t.deliverMessage && (t.deliverMessage = function(t) {});
                        },
                        saxonPrint: function(t) {}
                    };
                    function a() {
                        Math.trunc = Math.trunc || function(t) {
                            return t < 0 ? Math.ceil(t) : Math.floor(t);
                        }, Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
                            value: function(t) {
                                if (null === this || void 0 === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                                if ("function" != typeof t) throw new TypeError("predicate must be a function");
                                for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++) if (e = n[i], 
                                t.call(o, e, i, n)) return i;
                                return -1;
                            },
                            enumerable: !1,
                            configurable: !1,
                            writable: !1
                        }), String.prototype.includes || (String.prototype.includes = function(t, e) {
                            return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
                        });
                    }
                    return {
                        platform: i
                    };
                }();
                function r(t) {
                    if (null === t) return "#null";
                    if (void 0 === t) return "#undefined";
                    var e, n;
                    if (t instanceof w.XdmArray) {
                        var o;
                        for (e = "[", o = 0; o < t.value.length && o < 3; o++) 0 !== o && (e += ","), e += r(t.value[o]);
                        return t.value.length >= 4 && (e += ",...(" + t.value.length + ")"), e += "]";
                    }
                    if (t instanceof d) return e = "map{", t.forAllPairs(function(t) {
                        e += r(t.k), e += ": ", e += r(t.v), e += ", ";
                    }), e += "}";
                    if (t instanceof w.XDMValue) return "XDMValue " + r(t.value);
                    if (t instanceof w.JSValue) return "JSValue " + r(t.value);
                    if (!h.isNode(t) || h.isAttr(t) || h.isNSNode(t)) {
                        if (h.isAttr(t)) return "attribute @" + t.name;
                        if (h.isNSNode(t)) return "ns:" + t.prefix + "=" + t.uri;
                        if (t.type) return "string" === t.type ? '"' + t.toString() + '"' : "integer" === t.type || "boolean" === t.type ? t.toString() : "xs:" + t.type + "(" + t.toString() + ")";
                        if ("object" == typeof t && "length" in t) {
                            var i;
                            for (e = "(", i = 0; i < t.length && i < 3; i++) 0 !== i && (e += ","), e += r(t[i]);
                            return t.length >= 4 && (e += ",...(" + t.length + ")"), e += ")";
                        }
                        return "function" == typeof t ? t.toString() : "??? " + t;
                    }
                    if (e = {
                        1: "element <" + t.tagName + ">",
                        2: "attribute @" + t.name,
                        3: "text:" + (t.nodeValue ? t.nodeValue.substring(0, 8) : "''"),
                        7: "pi",
                        8: "comment",
                        9: "document " + (t._saxonDocumentNumber ? "#" + t._saxonDocumentNumber : "(No nr / #0)"),
                        11: "docFrag"
                    }[t.nodeType], "9" == t.nodeType) for (n = 0; n < t.childNodes.length; n++) e += "~>" + r(t.childNodes[n]);
                    return e;
                }
                var o = function() {
                    var t = {
                        "integer<decimal": 1,
                        "decimal<numeric": 1,
                        "double<numeric": 1,
                        "float<numeric": 1,
                        "integer<numeric": 1,
                        "dateTimeStamp<dateTime": 1
                    };
                    function e(e, n) {
                        return e == n || 1 == t[e + "<" + n];
                    }
                    function n(t, e) {
                        throw new v("Casting from xs:" + t.type + " to xs:" + e + " is not allowed", "XPTY0004");
                    }
                    function a(t, e, n) {
                        throw new v('Supplied value "' + t + '" is not a valid xs:' + e + (n ? " (" + n + ")" : ""), "FORG0001");
                    }
                    function u(t, e) {
                        throw new v('Supplied value "' + t + '" is not a valid xs:' + e, "FORG0001");
                    }
                    function s(t, e) {
                        throw new v("Cannot compare xs:" + t + " with xs:" + e, "XPTY0004");
                    }
                    function c(t, e) {
                        if (t = O.trim(t), /.\.$/.test(t) && (t += "0"), /^(\-|\+)?([0-9]+(\.[0-9]*)?|\.[0-9]+)([Ee](\-|\+)?[0-9]+)?$/.test(t)) return parseFloat(t);
                        if (/^(\-|\+)?NaN$/.test(t)) return NaN;
                        if (/^\-INF$/.test(t)) return -1 / 0;
                        if (/^(\+)?INF$/.test(t)) return 1 / 0;
                        if (e) throw new v("Cannot convert string '" + t + "' to a number", "FORG0001");
                        return NaN;
                    }
                    function l(t) {
                        return t.toString(36);
                    }
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    function m(t) {
                        var e, n, r, o, i, a = 0, u = 0, s = [];
                        if (!t) return t;
                        do {
                            e = (i = t.charCodeAt(a++) << 16 | t.charCodeAt(a++) << 8 | t.charCodeAt(a++)) >> 18 & 63, 
                            n = i >> 12 & 63, r = i >> 6 & 63, o = 63 & i, s[u++] = f.charAt(e) + f.charAt(n) + f.charAt(r) + f.charAt(o);
                        } while (a < t.length);
                        var c = s.join(""), l = t.length % 3;
                        return (l ? c.slice(0, l - 3) : c) + "===".slice(l || 3);
                    }
                    function p(t) {
                        t = t.replace(/\s/g, ""), /^(....)*$/.test(t) || a(t, "base64Binary", "length must be a multiple of 4"), 
                        /^[A-Za-z0-9+/]*=?=?$/.test(t) || a(t, "base64Binary", "only [A-Za-z0-9+/] allowed, or '=' at the end"), 
                        /^([^=]*|.*[AQgw]==|.*[AEIMQUYcgkosw048]=)$/.test(t) || a(t, "base64Binary", "invalid characters before '='");
                        var e, n, r, o, i, u, s = 0, c = 0, l = [];
                        if (0 === t.length) return t;
                        t += "";
                        do {
                            e = (u = f.indexOf(t.charAt(s++)) << 18 | f.indexOf(t.charAt(s++)) << 12 | (o = f.indexOf(t.charAt(s++))) << 6 | (i = f.indexOf(t.charAt(s++)))) >> 16 & 255, 
                            n = u >> 8 & 255, r = 255 & u, l[c++] = 64 == o ? String.fromCharCode(e) : 64 == i ? String.fromCharCode(e, n) : String.fromCharCode(e, n, r);
                        } while (s < t.length);
                        return l.join("");
                    }
                    function h(t) {
                        var e = "";
                        return w.stringToCodepoints(t).forEach(function(t) {
                            e += (t + 256).toString(16).substring(1).toUpperCase();
                        }), e;
                    }
                    function d(t) {
                        t = O.trim(t), /^([a-fA-F0-9][a-fA-F0-9])*$/.test(t) || a(t, "hexBinary");
                        var e, n = [];
                        for (e = 0; e < t.length; e += 2) n.push(String.fromCharCode(parseInt(t.substring(e, e + 2), 16)));
                        return n.join("");
                    }
                    function g(t, e) {
                        this.value = t, this.type = e || "string", "string" != typeof t && w.internalError("bad input to string constructor " + r(t));
                    }
                    function y(t, e) {
                        this.value = t, this.type = e;
                    }
                    function x(t, e) {
                        "number" != typeof t && w.internalError("type of value supplied to XdmDouble is not number: " + typeof t), 
                        this.value = t, this.type = e || "double";
                    }
                    function S(t, e) {
                        "number" != typeof t && w.internalError("type of value supplied to XdmInteger is not number: " + typeof t), 
                        this.value = t, this.type = e || "integer";
                    }
                    function N(t, e) {
                        this.value = new Big(t), this.type = e || "decimal";
                    }
                    function b(t) {
                        this.value = t, "boolean" != typeof t && w.internalError("type of value supplied to XdmBoolean is not boolean: " + typeof t);
                    }
                    function T(t, e, n) {
                        if (this.prefix = t || "", this.uri = e || "", this.local = n, "" !== t && !O.isNCName(t)) throw new v("Invalid prefix: '" + t + "'", "FORG0001");
                        if (!O.isNCName(n)) throw new v("Invalid local name: '" + n + "'", "FORG0001");
                    }
                    function E(t, e, n) {
                        this.UTCdate = t, this.timezoneOffset = e, this.type = n || "dateTime", t instanceof Date || w.internalError("type of UTCdate supplied to XdmDateTime is not Date"), 
                        e && "number" != typeof e && w.internalError("type of value for timezone offset supplied to XdmDateTime is not number: " + typeof value);
                    }
                    function A(t) {
                        return (100 + t).toString().substring(1);
                    }
                    function C(t) {
                        return (1e4 + t).toString().substring(1);
                    }
                    function D(t, e, n) {
                        if (this.months = t, this.milliseconds = e, "number" == typeof t && "number" == typeof e || w.internalError("type of value supplied to XdmDuration is not number: " + typeof t + ", " + typeof e), 
                        t > 0 && e < 0 || t < 0 && e > 0) throw new v("Months/seconds must both be negative or both positive", "FORG0001");
                        this.type = n || "duration";
                    }
                    g.prototype = {
                        value: null,
                        type: "string",
                        _hash: 0,
                        toString: function() {
                            return this.value;
                        },
                        compareTo: function(t) {
                            return t instanceof g ? i.codepointComparison(this.value, t.value) : "untypedAtomic" == this.type ? o[t.type].cast(this).compareTo(t) : void s(this.type, t.type);
                        },
                        equals: function(t) {
                            return 0 === this.compareTo(t);
                        },
                        hashCode: function() {
                            if (this.value.length <= 4) return this.value;
                            var t = this._hash, e = this.value.length;
                            if (0 === t && e > 0) {
                                var n;
                                for (n = 0; n < e; n++) t = 31 * t + this.value.charAt(n++);
                                this._hash = t;
                            }
                            return l(t);
                        },
                        matchKey: function() {
                            return "s" + this.toString();
                        }
                    }, y.prototype = {
                        value: null,
                        type: "hexBinary",
                        toString: function() {
                            return "hexBinary" == this.type ? h(this.value) : m(this.value);
                        },
                        compareTo: function(t) {
                            if (t instanceof y && this.type == t.type) return i.codepointComparison(this.value, t.value);
                            s(this.type, t.type);
                        },
                        equals: function(t) {
                            return 0 === this.compareTo(t);
                        },
                        hashCode: function() {
                            return new g(this.value).hashCode();
                        },
                        matchKey: function() {
                            return ("hexBinary" == this.type ? "h" : "i") + this.toString();
                        }
                    }, x.prototype = {
                        value: 0,
                        type: "double",
                        toString: function() {
                            if (0 === this.value) return 1 / this.value < 0 ? "-0" : "0";
                            if (this.value == Number.POSITIVE_INFINITY) return "INF";
                            if (this.value == Number.NEGATIVE_INFINITY) return "-INF";
                            var t, e = this.value, n = Math.abs(e);
                            if (n >= 1e6 || n < 1e-6) {
                                var r = (t = e.toExponential()).indexOf("e"), o = t.substring(0, r);
                                return o.includes(".") || (o += ".0"), o + "E" + t.substring(r + 1).replace("+", "");
                            }
                            if ("float" === this.type && e % 1 != 0) {
                                var i = (t = (e < 0 ? e - 5e-8 : e + 5e-8).toString()).indexOf(".");
                                return (t = t.substring(0, i + 6)).replace(/0+$/, "");
                            }
                            return e.toString();
                        },
                        equals: function(t) {
                            return 0 === this.compareTo(t);
                        },
                        compareTo: function(t) {
                            if ("toNumber" in t) return this.value < t.toNumber() ? -1 : this.value == t.toNumber() ? 0 : 1;
                            s(this.type, t.type);
                        },
                        hashCode: function() {
                            return l(this.value);
                        },
                        matchKey: function() {
                            return "n" + this.hashCode();
                        },
                        toNumber: function() {
                            return this.value;
                        },
                        toDouble: function() {
                            return this;
                        },
                        abs: function() {
                            return new x(Math.abs(this.value), this.type);
                        },
                        negate: function() {
                            return new x(-this.value, this.type);
                        },
                        ceiling: function() {
                            return new x(Math.ceil(this.value), this.type);
                        },
                        floor: function() {
                            return new x(Math.floor(this.value), this.type);
                        },
                        round: function(t) {
                            var e;
                            if (0 === t) e = Math.round(this.value); else {
                                var n = Math.pow(10, -t);
                                e = Math.round(this.value / n) * n;
                            }
                            return new x(e, this.type);
                        },
                        roundHalfToEven: function(t) {
                            if (isNaN(this.value) || !isFinite(this.value)) return this;
                            var e = new N(Big(this.value)).roundHalfToEven(t);
                            return 0 === e.toNumber() && this.value < 0 && (e = o.double.fromString("-0")), 
                            o[this.type].cast(e);
                        }
                    }, S.prototype = {
                        value: 0,
                        type: "integer",
                        toString: function() {
                            return this.value.toString();
                        },
                        equals: function(t) {
                            return 0 === this.compareTo(t);
                        },
                        compareTo: function(t) {
                            if ("toNumber" in t) return this.value - t.toNumber();
                            s(this.type, t.type);
                        },
                        hashCode: function() {
                            return l(this.value);
                        },
                        matchKey: function() {
                            return "n" + this.hashCode();
                        },
                        toDouble: function() {
                            return new x(this.value);
                        },
                        toNumber: function() {
                            return this.value;
                        },
                        toBig: function() {
                            return new Big(this.value);
                        },
                        abs: function() {
                            return new S(Math.abs(this.value));
                        },
                        negate: function() {
                            return new S(-this.value);
                        },
                        ceiling: function() {
                            return this;
                        },
                        floor: function() {
                            return this;
                        },
                        round: function(t) {
                            if (t < 0) {
                                var e = Math.pow(10, -t);
                                return new S(Math.round(this.value / e) * e);
                            }
                            return this;
                        },
                        roundHalfToEven: function(t) {
                            if (t < 0) {
                                var e = Math.pow(10, -t);
                                return new S(parseInt(Big(this.value).div(e).round(0, 2).times(e), 10));
                            }
                            return this;
                        }
                    }, N.prototype = {
                        value: null,
                        type: "decimal",
                        toString: function() {
                            return this.value.toFixed();
                        },
                        equals: function(t) {
                            return 0 === this.compareTo(t);
                        },
                        compareTo: function(t) {
                            return t instanceof N ? this.value.cmp(t.value) : "toDouble" in t ? this.value - t.toDouble().value : void s(this.type, t.type);
                        },
                        hashCode: function() {
                            return l(this.toNumber());
                        },
                        matchKey: function() {
                            return "n" + this.hashCode();
                        },
                        toBig: function() {
                            return this.value;
                        },
                        toDouble: function() {
                            return new x(parseFloat(this.value));
                        },
                        toNumber: function() {
                            return parseFloat(this.value);
                        },
                        abs: function() {
                            return new N(this.value.abs(), this.type);
                        },
                        negate: function() {
                            var t = Big(this.value);
                            return t.s = -t.s, new N(t, "decimal" == this.type ? "decimal" : "integer");
                        },
                        ceiling: function() {
                            return new N(this.value.round(0, this.value.s < 0 ? 0 : 3), this.type);
                        },
                        floor: function() {
                            return new N(this.value.round(0, this.value.s < 0 ? 3 : 0), this.type);
                        },
                        round: function(t) {
                            function e(t, e) {
                                var n = new Big(t);
                                return n.e += e, n;
                            }
                            var n = this.value, r = 0;
                            t < 0 && (r = t, t = 0, n = e(n, r));
                            var o = n.s > 0 ? Big(0) : this.floor().abs();
                            return n = n.plus(o).round(t, 1).minus(o), 0 !== e && (n = e(n, -r)), new N(n, "decimal" == this.type ? "decimal" : "integer");
                        },
                        roundHalfToEven: function(t) {
                            var e;
                            if (t < 0) {
                                var n = Big(10).pow(-t);
                                e = this.value.div(n).round(0, 2).times(n);
                            } else e = this.value.round(t, 2);
                            return new N(e, "decimal" == this.type ? "decimal" : "integer");
                        }
                    }, b.prototype = {
                        value: null,
                        type: "boolean",
                        toString: function() {
                            return this.value.toString();
                        },
                        toBoolean: function() {
                            return this.value;
                        },
                        compareTo: function(t) {
                            if (t instanceof b) return (this.value ? 1 : 0) - (t.value ? 1 : 0);
                            s(this.type, t.type);
                        },
                        equals: function(t) {
                            return 0 === this.compareTo(t);
                        },
                        hashCode: function() {
                            return this.value.toString();
                        },
                        matchKey: function() {
                            return "b" + this.toString();
                        }
                    }, T.prototype = {
                        prefix: null,
                        uri: null,
                        local: null,
                        type: "QName",
                        toEQName: function() {
                            return "Q{" + this.uri + "}" + this.local;
                        },
                        toString: function() {
                            return (this.prefix.length > 0 ? this.prefix + ":" : "") + this.local;
                        },
                        equals: function(t) {
                            return t instanceof T || s(this.type, t.type), t instanceof T && this.local == t.local && this.uri == t.uri;
                        },
                        compareTo: function() {
                            throw new v("QNames are not ordered", "FORG0006");
                        },
                        hashCode: function() {
                            return this.uri.substring(this.uri.length - 3) + ":" + new g(this.local).hashCode();
                        },
                        matchKey: function() {
                            return "q" + this.toEQName();
                        }
                    }, E.prototype = {
                        type: "dateTime",
                        UTCdate: null,
                        timezoneOffset: null,
                        proxy: function() {
                            var t = new Date(), e = null !== this.timezoneOffset ? this.timezoneOffset : -t.getTimezoneOffset();
                            return new Date(this.UTCdate.getTime() + 60 * e * 1e3);
                        },
                        _ISOEdit: function(t) {
                            if (t = t.substr(0, t.length - 1), 0 === this.UTCdate.getUTCMilliseconds()) t = t.replace(".000", ""); else for (;"0" == t.charAt(t.length - 1); ) t = t.substr(0, t.length - 1);
                            return t = t.replace(/^-0?0?/, "-");
                        },
                        toString: function() {
                            var t = this._ISOEdit(this.proxy().toISOString()), e = "-" == t.charAt(0) ? 1 : 0;
                            function n(n) {
                                switch (n) {
                                  case "dateTime":
                                  case "dateTimeStamp":
                                    return t;

                                  case "date":
                                    return t.substring(0, 10 + e);

                                  case "time":
                                    return t.substring(11 + e);

                                  case "gYearMonth":
                                    return t.substring(0, 7 + e);

                                  case "gYear":
                                    return t.substring(0, 4 + e);

                                  case "gMonthDay":
                                    return "-" + t.substring(4 + e, 10 + e);

                                  case "gMonth":
                                    return "-" + t.substring(4 + e, 7 + e);

                                  case "gDay":
                                    return "--" + t.substring(7 + e, 10 + e);

                                  default:
                                    throw "type not recognised " + n;
                                }
                            }
                            return n(this.type) + this.tzOffsetToString();
                        },
                        compareTo: function(t) {
                            if (t instanceof E && (e(t.type, this.type) || e(this.type, t.type))) return +this.UTCdate.getTime() - t.UTCdate.getTime();
                            s(this.type, t.type);
                        },
                        equals: function(t) {
                            return 0 === this.compareTo(t);
                        },
                        hashCode: function() {
                            return l(this.UTCdate.getTime() - 1454346732296);
                        },
                        matchKey: function() {
                            return "t" + this.hashCode();
                        },
                        adjustByMinutes: function(t) {
                            return o.dateTime.fromDate(new Date(this.UTCdate.getTime() + 60 * t * 1e3), this.timezoneOffset);
                        },
                        addMonths: function(t) {
                            var e = this.toString(), n = parseInt(e.substring(0, 4), 10), r = parseInt(e.substring(5, 7), 10), i = parseInt(e.substring(8, 10), 10), a = n + Math.floor((r + t - 1) / 12), u = a < 0, s = (r + t - 1) % 12 + 1;
                            for (s <= 0 && (s += 12); !U([ a, s, i, 0, 0, 0 ]); ) i -= 1;
                            return o[this.type].fromString((u ? "-" + C(-a) : C(a)) + "-" + A(s) + "-" + A(i) + e.substring(10));
                        },
                        tzOffsetToString: function() {
                            var t = this.timezoneOffset;
                            if (null === t) return "";
                            if (0 === t) return "Z";
                            var e = Math.abs(t);
                            return (t < 0 ? "-" : "+") + A(Math.floor(e / 60)) + ":" + A(e % 60);
                        }
                    }, D.prototype = {
                        type: "duration",
                        months: 0,
                        milliseconds: 0,
                        parts: function() {
                            var t = [];
                            function e(e, n) {
                                n.forEach(function(n) {
                                    1e3 != n ? (t.push(Math.floor(e / n)), e %= n) : t.push(e / n);
                                });
                            }
                            return e(Math.abs(this.months), [ 12, 1 ]), e(Math.abs(this.milliseconds), [ 864e5, 36e5, 6e4, 1e3 ]), 
                            t;
                        },
                        signum: function() {
                            var t = this.months + this.milliseconds;
                            return t < 0 ? -1 : t > 0 ? 1 : 0;
                        },
                        toString: function() {
                            var t, e = this.signum();
                            return 0 === e ? t = "yearMonthDuration" == this.type ? "P0M" : "PT0S" : (t = e < 0 ? "-P" : "P", 
                            this.parts().forEach(function(e, n) {
                                3 == n && (t += "T"), 0 !== e && (t += 6 == n ? e / 1e3 + "S" : e + [ "Y", "M", "D", "H", "M", "S" ][n]);
                            }), t = t.replace(/T$/, "")), t;
                        },
                        compareTo: function(t) {
                            if (t instanceof D) {
                                if (o.yearMonthDuration.matches(this) && o.yearMonthDuration.matches(t)) return this.months - t.months;
                                if (o.dayTimeDuration.matches(this) && o.dayTimeDuration.matches(t)) return this.milliseconds - t.milliseconds;
                                throw new v("Cannot compare durations that mix months and seconds", "XPTY0004");
                            }
                            s(this.type, t.type);
                        },
                        equals: function(t) {
                            return t instanceof D || s(this.type, t.type), t instanceof D && this.months == t.months && this.milliseconds == t.milliseconds;
                        },
                        hashCode: function() {
                            return this.months.toString() + ":" + this.milliseconds.toString();
                        },
                        matchKey: function() {
                            return "d" + this.hashCode();
                        }
                    };
                    var M = {
                        hierarchy: t,
                        isSubtype: e,
                        anyAtomicType: {
                            name: "anyAtomicType",
                            matches: function(t) {
                                return t instanceof g || t instanceof N || t instanceof S || t instanceof x || t instanceof y || t instanceof b || t instanceof D || t instanceof E || t instanceof T;
                            }
                        },
                        untypedAtomic: {
                            name: "untypedAtomic",
                            fromString: function(t) {
                                return new g(t, "untypedAtomic");
                            },
                            matches: function(t) {
                                return "untypedAtomic" == t.type;
                            },
                            cast: function(t) {
                                return new g(t.toString(), "untypedAtomic");
                            }
                        },
                        string: {
                            name: "string",
                            fromString: function(t) {
                                return new g(t, "string");
                            },
                            matches: function(t) {
                                return e(t.type, "string");
                            },
                            cast: function(t) {
                                return new g(t.toString(), "string");
                            },
                            isStringLike: function(t) {
                                return t instanceof g;
                            }
                        },
                        anyURI: {
                            name: "anyURI",
                            fromString: function(t) {
                                return new g(t.replace(/[ \r\t\n]+/g, " ").replace(/^[ ]|[ ]$/g, ""), "anyURI");
                            },
                            matches: function(t) {
                                return "anyURI" == t.type;
                            },
                            cast: function(t) {
                                if (t instanceof g) return o.anyURI.fromString(t.toString());
                                n(t, "anyURI");
                            }
                        },
                        double: {
                            name: "double",
                            fromString: function(t) {
                                return new x(c(t, !0));
                            },
                            fromStringUnfailing: function(t) {
                                return new x(c(t, !1));
                            },
                            fromNumber: function(t) {
                                return new x(t);
                            },
                            matches: function(t) {
                                return "double" == t.type;
                            },
                            cast: function(t) {
                                return null === t || void 0 === t ? o.double.fromNumber(NaN) : o.string.matches(t) || o.untypedAtomic.matches(t) ? o.double.fromString(t.toString()) : o.numeric.matches(t) ? o.double.fromNumber(t.toNumber()) : o.boolean.matches(t) ? o.double.fromNumber(t.toBoolean() ? 1 : 0) : "number" == typeof t ? o.double.fromNumber(t) : void n(t, "double");
                            }
                        },
                        decimal: {
                            name: "decimal",
                            fromString: function(t) {
                                if (t = O.trim(t), /^(\+|-)?([0-9]+(\.[0-9]*)?|\.[0-9]+)$/.test(t)) return new N(new Big(t));
                                /INF|NaN/.test(t) && u(t, "decimal"), a(t, "decimal");
                            },
                            fromBig: function(t) {
                                return new N(t);
                            },
                            fromNumber: function(t) {
                                if (isNaN(t) || !isFinite(t)) throw new v("Cannot convert NaN or INF to a decimal", "FOCA0002");
                                return new N(new Big(t));
                            },
                            matches: function(t) {
                                return t instanceof N || t instanceof S;
                            },
                            cast: function(t) {
                                return o.decimal.matches(t) ? new N(t.value, "decimal") : o.string.matches(t) || o.untypedAtomic.matches(t) ? o.decimal.fromString(t.toString()) : o.numeric.matches(t) ? o.decimal.fromNumber(t.toNumber()) : o.boolean.matches(t) ? o.decimal.fromString(t.toBoolean() ? "1" : "0") : void n(t, "decimal");
                            }
                        },
                        float: {
                            name: "float",
                            fromString: function(t) {
                                return new x(c(t, !0), "float");
                            },
                            fromNumber: function(t) {
                                return Math.fround && (t = Math.fround(t)), new x(t, "float");
                            },
                            matches: function(t) {
                                return "float" == t.type;
                            },
                            cast: function(t) {
                                return o.float.fromNumber(o.double.cast(t).toNumber());
                            }
                        },
                        boolean: {
                            name: "boolean",
                            fromString: function(t) {
                                switch (O.trim(t)) {
                                  case "true":
                                  case "1":
                                    return new b(!0);

                                  case "false":
                                  case "0":
                                    return new b(!1);

                                  default:
                                    a(t, "boolean");
                                }
                            },
                            fromBoolean: function(t) {
                                return new b(t);
                            },
                            matches: function(t) {
                                return t instanceof b;
                            },
                            cast: function(t) {
                                return o.string.matches(t) || o.untypedAtomic.matches(t) ? o.boolean.fromString(t.toString()) : o.numeric.matches(t) ? o.boolean.fromBoolean(0 !== t.toNumber() && !isNaN(t.toNumber())) : o.boolean.matches(t) ? t : "boolean" == typeof t ? o.boolean.fromBoolean(t) : void n(t, "boolean");
                            }
                        },
                        integer: {
                            name: "integer",
                            base: "decimal",
                            matches: function(t) {
                                return e(t.type, "integer");
                            },
                            fromString: function(t) {
                                if (/^\s*(\-|\+)?[0-9]+\s*$/.test(t)) return t.length > 9 ? new N(t, "integer") : new S(parseInt(t, 10));
                                /INF|NaN/.test(t) && u(t, "integer"), a(t, "integer");
                            },
                            fromNumber: function(t) {
                                if (isNaN(t) || t == Number.NEGATIVE_INFINITY || t == Number.POSITIVE_INFINITY) throw new v("Cannot convert NaN or INF to an integer", "FOCA0002");
                                return new S(Math.trunc(t));
                            },
                            fromBig: function(t) {
                                return new N(t, "integer");
                            },
                            valid: function(t) {
                                return 0 === t.value.mod(1);
                            },
                            cast: function(t) {
                                return o.string.matches(t) || o.untypedAtomic.matches(t) ? o.integer.fromString(t.toString()) : o.numeric.matches(t) ? o.integer.fromNumber(t.toNumber()) : o.boolean.matches(t) ? o.integer.fromNumber(t.toBoolean() ? 1 : 0) : void n(t, "integer");
                            },
                            convertFromJS: function(t) {
                                return "number" == typeof t ? o.integer.fromNumber(t) : "boolean" == typeof t ? o.integer.fromNumber(t ? 1 : 0) : "string" == typeof t ? o.integer.fromString(t) : o.integer.fromString(t.toString());
                            }
                        },
                        numeric: {
                            name: "numeric",
                            members: [ "double", "decimal", "float" ],
                            matches: function(t) {
                                return t instanceof x || t instanceof S || t instanceof N;
                            },
                            cast: function(t) {
                                return o.string.matches(t) || o.untypedAtomic.matches(t) ? o.double.fromString(t.toString()) : o.numeric.matches(t) ? t : o.boolean.matches(t) ? o.double.fromNumber(t.toBoolean() ? 1 : 0) : void n(t, "numeric");
                            },
                            numberFn: function(t) {
                                var e = o.double;
                                if (null === t) return e.fromNumber(Number.NaN);
                                if (o.boolean.matches(t)) return e.fromNumber(t.toBoolean() ? 1 : 0);
                                if (o.numeric.matches(t)) return e.cast(t);
                                try {
                                    return e.fromString(t.toString());
                                } catch (t) {
                                    return e.fromNumber(Number.NaN);
                                }
                            }
                        },
                        QName: {
                            name: "QName",
                            matches: function(t) {
                                return t instanceof T;
                            },
                            fromParts: function(t, e, n) {
                                return new T(t, e, n);
                            },
                            fromString: function(t, e) {
                                if ("Q{" == (t = O.trim(t)).substring(0, 2)) return o.QName.fromEQName(t);
                                O.isQName(t) || a(t, "QName");
                                var n = t.split(":");
                                if (1 == n.length) return o.QName.fromParts("", e(""), n[0]);
                                var r = e(n[0]);
                                if (null === r) throw v("Undeclared prefix: " + n[0], "FONS0004");
                                return o.QName.fromParts(n[0], r, n[1]);
                            },
                            fromEQName: function(t) {
                                var e = t.indexOf("{"), n = t.indexOf("}"), r = w.wsCollapse(t.substring(e + 1, n));
                                if ("http://www.w3.org/2000/xmlns/" == r) throw v("Use of reserved namespace: " + r, "XQST0070");
                                return new T("", r, t.substring(n + 1));
                            },
                            cast: function(t, e) {
                                if (o.string.matches(t) || o.untypedAtomic.matches(t)) {
                                    if (e) return o.QName.fromString(t.toString(), e);
                                    throw v("Casting to QName requires a namespace resolver", "FORG0001");
                                }
                                if (o.QName.matches(t)) return t;
                                n(t, "QName");
                            }
                        },
                        dateTime: {
                            name: "dateTime",
                            matches: function(t) {
                                return e(t.type, "dateTime");
                            },
                            fromString: function(t) {
                                return B(t, "dateTime");
                            },
                            fromDate: function(t, e) {
                                return new E(t, e, "dateTime");
                            },
                            cast: function(t) {
                                return o.dateTime.matches(t) ? t : o.date.matches(t) ? o.dateTime.fromDate(t.UTCdate, t.timezoneOffset) : o.string.matches(t) || o.untypedAtomic.matches(t) ? o.dateTime.fromString(t.toString()) : void n(t, "dateTime");
                            }
                        },
                        date: {
                            name: "date",
                            matches: function(t) {
                                return t instanceof E && "date" == t.type;
                            },
                            fromString: function(t) {
                                return B(t, "date");
                            },
                            fromDate: function(t, e) {
                                var n = new E(t, e, "date").toString(), r = "-" == n.charAt(0) ? 11 : 10;
                                return new E(o.dateTime.fromString(n.substring(0, r) + "T00:00:00" + n.substring(r)).UTCdate, e, "date");
                            },
                            cast: function(t) {
                                return o.date.matches(t) ? t : o.dateTime.matches(t) ? o.date.fromDate(t.UTCdate, t.timezoneOffset) : o.string.matches(t) || o.untypedAtomic.matches(t) ? o.date.fromString(t.toString()) : void n(t, "date");
                            }
                        },
                        time: {
                            name: "time",
                            matches: function(t) {
                                return t instanceof E && "time" == t.type;
                            },
                            fromString: function(t) {
                                return B(t, "time");
                            },
                            fromDate: function(t, e) {
                                var n = new E(t, e, "time");
                                return new E(o.dateTime.fromString("1972-01-01T" + n.toString()).UTCdate, e, "time");
                            },
                            cast: function(t) {
                                return o.time.matches(t) ? t : o.dateTime.matches(t) ? o.time.fromDate(t.UTCdate, t.timezoneOffset) : o.string.matches(t) || o.untypedAtomic.matches(t) ? o.time.fromString(t.toString()) : void n(t, "time");
                            }
                        },
                        dateTimeStamp: {
                            name: "dateTimeStamp",
                            matches: function(t) {
                                return t instanceof E && "dateTimeStamp" == t.type;
                            },
                            fromString: function(t) {
                                return B(t, "dateTimeStamp");
                            },
                            fromDate: function(t, e) {
                                return new E(t, e, "dateTimeStamp");
                            },
                            cast: function(t) {
                                return o.dateTimeStamp.matches(t) ? t : o.dateTime.matches(t) || o.date.matches(t) ? o.dateTimeStamp.fromDate(t.UTCdate, t.timezoneOffset) : o.string.matches(t) || o.untypedAtomic.matches(t) ? o.dateTimeStamp.fromString(t.toString()) : void n(t, "dateTimeStamp");
                            }
                        },
                        duration: {
                            name: "duration",
                            matches: function(t) {
                                return e(t.type, "duration");
                            },
                            fromString: function(t) {
                                return $(t, "duration");
                            },
                            fromMonthsMilliseconds: function(t, e) {
                                return new D(t, e, "duration");
                            },
                            cast: function(t) {
                                return o.duration.matches(t) ? t : o.string.matches(t) || o.untypedAtomic.matches(t) ? o.duration.fromString(t.toString()) : void n(t, "duration");
                            }
                        },
                        hexBinary: {
                            name: "hexBinary",
                            matches: function(t) {
                                return "hexBinary" === t.type;
                            },
                            fromString: function(t) {
                                return new y(d(t), "hexBinary");
                            },
                            cast: function(t) {
                                return t instanceof y ? new y(t.value, "hexBinary") : o.string.matches(t) || o.untypedAtomic.matches(t) ? new y(d(t.toString()), "hexBinary") : void n(t, "hexBinary");
                            }
                        },
                        base64Binary: {
                            name: "base64Binary",
                            matches: function(t) {
                                return "base64Binary" === t.type;
                            },
                            fromString: function(t) {
                                return new y(p(t), "base64Binary");
                            },
                            encodeFromString: function(t) {
                                return new y(t, "base64Binary");
                            },
                            cast: function(t) {
                                return t instanceof y ? new y(t.value, "base64Binary") : o.string.matches(t) || o.untypedAtomic.matches(t) ? new y(p(t.toString()), "base64Binary") : void n(t, "base64Binary");
                            }
                        }
                    };
                    function F(t) {
                        var e = M[t] = {};
                        e.name = t, e.matches = function(e) {
                            return e instanceof E && e.type == t;
                        }, e.fromString = function(e) {
                            return B(e, t);
                        }, e.fromDate = function(e, n) {
                            return new E(e, n, t);
                        }, e.cast = function(e) {
                            if (M[t].matches(e)) return e;
                            if (o.dateTime.matches(e) || o.date.matches(e)) {
                                var r = M[t];
                                return r.fromString(r.fromDate(e.UTCdate, e.timezoneOffset).toString());
                            }
                            if (o.string.matches(e) || o.untypedAtomic.matches(e)) return M[t].fromString(e.toString());
                            n(e, t);
                        };
                    }
                    F("gYearMonth"), F("gYear"), F("gMonthDay"), F("gMonth"), F("gDay");
                    var I = {
                        dateTime: /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
                        date: /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2}-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
                        time: /^\s*([0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
                        dateTimeStamp: /^\s*(-?[0-9]+-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?)(Z|(\+|-)[0-9]{2}:[0-9]{2})\s*$/,
                        gYearMonth: /^\s*(-?(?:[1-9][0-9]{4,}|[0-9]{4})-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
                        gYear: /^\s*(-?[1-9][0-9]{4,}|-?[0-9]{4})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
                        gMonthDay: /^\s*--([0-9]{2}-[0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
                        gMonth: /^\s*--([0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
                        gDay: /^\s*---([0-9]{2})(Z|(\+|-)[0-9]{2}:[0-9]{2})?\s*$/,
                        duration: /^\s*\-?P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]*)?)S)?)?\s*$/,
                        dayTimeDuration: /^\s*\-?P(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\.[0-9]*)?)S)?)?\s*$/,
                        yearMonthDuration: /^\s*\-?P(?:([0-9]+)Y)?(?:([0-9]+)M)?\s*$/
                    }, k = {
                        dateTime: function(t) {
                            return P(t);
                        },
                        date: function(t) {
                            return t + "T00:00:00";
                        },
                        time: function(t) {
                            return "1972-01-01T" + P(t);
                        },
                        dateTimeStamp: function(t) {
                            return P(t);
                        },
                        gYearMonth: function(t) {
                            return t + "-01T00:00:00";
                        },
                        gYear: function(t) {
                            return t + "-01-01T00:00:00";
                        },
                        gMonthDay: function(t) {
                            return "1972-" + t + "T00:00:00";
                        },
                        gMonth: function(t) {
                            return "1972-" + t + "-01T00:00:00";
                        },
                        gDay: function(t) {
                            return "1972-01-" + t + "T00:00:00";
                        }
                    };
                    function P(t) {
                        if (-1 != t.indexOf(".", t.length - 4)) {
                            for (var e = t.split("."), n = e[1]; n.length < 3; ) n += "0";
                            t = e[0] + "." + n;
                        }
                        return t;
                    }
                    function U(t) {
                        var e = t[0], n = t[1], r = t[2], o = t[3], i = t[4], a = t[5];
                        return !(n < 1 || n > 12 || r < 1 || r > [ 31, e % 4 == 0 && !(e % 100 == 0 && e % 400 != 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][n - 1] || o >= 24 || i >= 60 || a >= 60);
                    }
                    function R(t, e) {
                        var n = t.split(/[\-T:]/).map(function(t) {
                            return parseFloat(t);
                        }), r = n[0];
                        if (r < 1 || r > 9999) throw v("Year " + r + " is out of range", "FODT0001");
                        if (!U(n)) throw new v("Invalid date " + e, "FORG0001");
                    }
                    function B(t, e) {
                        var n = t.match(I[e]);
                        null === n && a(t, e);
                        var r, o, i = n[2] ? n[2] : "", u = k[e](n[1]) + i;
                        if (/24:00:00(\.0+)?([Z\+\-]|$)/.test(u) && (u = "time" == e ? u.substring(0, 10) + "T00:00:00" : _["t+u"](B(u.substring(0, 10), "date"), $("P1D", "dayTimeDuration")).toString() + "T00:00:00"), 
                        "-" == u.charAt(0)) R(u.substring(1, 20), t), o = u.substr(1).split(/[\-T:]/).map(function(t) {
                            return parseFloat(t);
                        }), r = new Date(Date.UTC(-o[0], o[1] - 1, o[2], o[3], o[4], o[5])); else {
                            R(u.substring(0, 19), t);
                            var s = u.split(/[\-T:]/), c = (o = u.split(/[\-T:]/).map(function(t) {
                                return parseFloat(t);
                            }))[5], l = c - Math.floor(c);
                            (r = new Date(Date.UTC(s[0], o[1] - 1, o[2], o[3], o[4], c, Math.round(1e3 * l)))).setUTCFullYear(s[0]);
                        }
                        if ("" === i) {
                            var f = new Date();
                            r = new Date(r.getTime() + 60 * f.getTimezoneOffset() * 1e3);
                        } else r = new Date(r.getTime() - 60 * X(i) * 1e3);
                        return new E(r, X(n[2] ? n[2] : ""), e);
                    }
                    function X(t) {
                        if ("" === t) return null;
                        if ("Z" == t) return 0;
                        var e = t.split(":"), n = parseInt(e[0], 10), r = /^\-.*/.test(e[0]), o = Math.abs(n), i = parseInt(e[1], 10);
                        if (o > 14 || i > 59) throw v("Invalid timezone " + t, "FORG0001");
                        return (r ? -1 : 1) * (60 * o + i);
                    }
                    var L = function(t, e) {
                        return e * (void 0 === t ? 0 : parseInt(t, 10));
                    }, z = function(t, e) {
                        return e * (void 0 === t ? 0 : Math.round(1e3 * parseFloat(t)));
                    }, J = function(t, e) {
                        return e ? -t : t;
                    }, q = [ function(t, e) {
                        return J(L(t[1], 12) + L(t[2], 1), e.match(/^\s*\-.*/));
                    }, function(t, e) {
                        return J(L(t[3], 864e5) + L(t[4], 36e5) + L(t[5], 6e4) + z(t[6], 1), e.match(/^\s*\-.*/));
                    }, function(t, e) {
                        return J(L(t[1], 864e5) + L(t[2], 36e5) + L(t[3], 6e4) + z(t[4], 1), e.match(/^\s*\-.*/));
                    }, function() {
                        return 0;
                    } ], G = {
                        duration: [ 0, 1 ],
                        dayTimeDuration: [ 3, 2 ],
                        yearMonthDuration: [ 0, 3 ]
                    };
                    function $(t, e) {
                        var n = t.match(I[e]);
                        return null !== n && /\d/.test(t) && !/T$/.test(t) || a(t, e), new D(q[G[e][0]](n, t), q[G[e][1]](n, t), e);
                    }
                    function j() {
                        function n(e) {
                            for (var n = M[e]; n.base; ) t[e + "<" + (void 0 !== n.base.name ? n.base.name : n.base)] = 1, 
                            n = n.base;
                            "decimal" != n && "double" != n && "float" != n || (t[e + "<numeric"] = 1);
                        }
                        function i(t, r, o) {
                            var i = M[t] = {}, u = M[r];
                            i.name = t, i.base = u, i.matches = function(n) {
                                return e(n.type, t);
                            }, i.downCast = function(e) {
                                return o(e) || a(e.toString(), t), e.type = t, e;
                            }, i.fromString = function(t) {
                                return i.downCast(u.fromString(t));
                            }, i.cast = function(t) {
                                return i.downCast(u.cast(t));
                            }, n(t);
                        }
                        function s(t, e, n) {
                            i(t, e, n);
                            var r = M[t], o = M[e];
                            function s(e) {
                                var r = e.toNumber();
                                return !isNaN(r) && isFinite(r) || u(e.toString(), t), n(e) || a(e.toString(), t), 
                                e.type = t, e;
                            }
                            r.fromString = function(e) {
                                return /INF|NaN/.test(e) && u(e, t), r.downCast(o.fromString(e));
                            }, r.fromNumber = function(t) {
                                return s(o.fromNumber(t));
                            };
                        }
                        function c(t, e, n, r) {
                            i(t, e, n);
                            var o = M[t], u = M[e];
                            o.downCast = function(e) {
                                var o = r(e.toString());
                                return n(o) || a(o, t), new g(o, t);
                            }, o.fromString = function(t) {
                                return o.downCast(u.fromString(r(t)));
                            };
                        }
                        function l(t, e, n) {
                            i(t, e, n);
                            var r = M[t], u = M[e];
                            r.downCast = function(e) {
                                return e instanceof D ? new D("yearMonthDuration" == t ? e.months : 0, "dayTimeDuration" == t ? e.milliseconds : 0, t) : (n(e) || a(e.toString(), t), 
                                e.type = t, e);
                            }, r.fromMonthsMilliseconds = function(t, e) {
                                return r.downCast(u.fromMonthsMilliseconds(t, e));
                            }, r.cast = function(e) {
                                return u.matches(e) ? r.downCast(e) : o.string.matches(e) || o.untypedAtomic.matches(e) ? $(e.toString(), t) : r.downCast(u.cast(e));
                            };
                        }
                        o.double.NaN = o.double.fromNumber(NaN), s("nonPositiveInteger", "integer", function(t) {
                            return t.toNumber() <= 0;
                        }), s("negativeInteger", "nonPositiveInteger", function(t) {
                            return t.toNumber() < 0;
                        }), s("long", "integer", function(t) {
                            var e = t.toBig();
                            return e.cmp(Big("-9223372036854775808")) >= 0 && e.cmp(Big("9223372036854775807")) <= 0;
                        }), s("int", "long", function(t) {
                            return t.toNumber() >= -2147483648 && t.toNumber() <= 2147483647;
                        }), s("short", "int", function(t) {
                            return t.toNumber() >= -32768 && t.toNumber() <= 32767;
                        }), s("byte", "short", function(t) {
                            return t.toNumber() >= -128 && t.toNumber() <= 127;
                        }), s("nonNegativeInteger", "integer", function(t) {
                            return t.toNumber() >= 0;
                        }), s("positiveInteger", "nonNegativeInteger", function(t) {
                            return t.toNumber() > 0;
                        }), s("unsignedLong", "nonNegativeInteger", function(t) {
                            return t.toNumber() >= 0 && t.toBig().cmp(Big("18446744073709551615")) <= 0;
                        }), s("unsignedInt", "unsignedLong", function(t) {
                            return t.toNumber() >= 0 && t.toBig().cmp(Big("4294967295")) <= 0;
                        }), s("unsignedShort", "unsignedInt", function(t) {
                            return t.toNumber() >= 0 && t.toNumber() <= 65535;
                        }), s("unsignedByte", "unsignedShort", function(t) {
                            return t.toNumber() >= 0 && t.toNumber() <= 255;
                        });
                        var f = function() {
                            return !0;
                        };
                        c("normalizedString", "string", f, function(t) {
                            return t.replace(/[ \r\t\n]/g, " ");
                        }), c("token", "normalizedString", f, w.wsCollapse), c("language", "token", function(t) {
                            return /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/.test(t);
                        }, w.wsCollapse), c("NMTOKEN", "token", O.isNMTOKEN, w.wsCollapse), c("Name", "token", O.isName, w.wsCollapse), 
                        c("NCName", "Name", O.isNCName, w.wsCollapse), c("ID", "NCName", O.isNCName, w.wsCollapse), 
                        c("IDREF", "NCName", O.isNCName, w.wsCollapse), c("ENTITY", "NCName", O.isNCName, w.wsCollapse), 
                        l("yearMonthDuration", "duration", function(t) {
                            return 0 === t.milliseconds;
                        }), l("dayTimeDuration", "duration", function(t) {
                            return 0 === t.months;
                        }), M.dayTimeDuration.fromNumberOfMinutes = function(t) {
                            return new D(0, 60 * t * 1e3, "dayTimeDuration");
                        }, M.showValue = r, M._init = function() {};
                    }
                    return M._init = j, M;
                }(), i = function() {
                    var t = "http://www.w3.org/2005/xpath-functions/collation/codepoint", e = "http://www.w3.org/2013/collation/UCA";
                    function n(t, e, n, r) {
                        for (var i, a, u = o.numeric.matches, s = o.untypedAtomic.matches; null !== (i = t.next()); ) for (var c = E.ForArray(e); null !== (a = c.next()); ) {
                            var l = s(i) ? s(a) ? o.string.cast(i) : u(a) ? o.double.cast(i) : o[a.type].cast(i) : i, f = s(a) ? s(i) ? o.string.cast(a) : u(i) ? o.double.cast(a) : o[i.type].cast(a) : a;
                            if (!(u(l) && isNaN(l.value) || u(f) && isNaN(f.value))) if ("=" == n ? r.equals(l, f) : "!=" == n ? !r.equals(l, f) : F(n, r.compare(l, f))) return E.oneBoolean(!0);
                        }
                        return E.oneBoolean(!1);
                    }
                    function r(t) {
                        return {
                            equals: function(e, n) {
                                var r = o.numeric.matches, i = function(t) {
                                    return o.numeric.numberFn(t).toNumber();
                                };
                                o.untypedAtomic.matches;
                                return r(e) || r(n) ? i(e) === i(n) : t.equals(e, n);
                            },
                            compare: t.compare
                        };
                    }
                    function a(t, e, r) {
                        var o = w, i = o.evalChild1(t, e), a = o.evalChild2(t, e).expand(), u = C(t.getAttribute("comp"), e);
                        return r || (r = t.getAttribute("op")), n(i, a, r, u);
                    }
                    function u(t, e) {
                        return t.equals(e);
                    }
                    function s(t, e) {
                        return t.compareTo(e);
                    }
                    function c(t) {
                        return null === t;
                    }
                    function l(t) {
                        return (o.double.matches(t) || o.float.matches(t)) && isNaN(t.toNumber());
                    }
                    function f(t, e) {
                        return function(n, r) {
                            return e(n) || e(r) ? !!e(n) && e(r) : t(n, r);
                        };
                    }
                    function m(t, e) {
                        return function(n, r) {
                            return e(n) || e(r) ? e(n) ? e(r) ? 0 : -1 : 1 : t(n, r);
                        };
                    }
                    function p(t) {
                        return m(t, c);
                    }
                    function y(t) {
                        return m(t, l);
                    }
                    function x(t, e) {
                        return null === t ? NaN : o.numeric.matches(t) ? t.toNumber() : e ? o.double.fromString(t.toString()).toNumber() : o.double.fromStringUnfailing(t.toString()).toNumber();
                    }
                    function S(t) {
                        return function(e, n) {
                            var r = x(e, t), o = x(n, t);
                            return isNaN(r) ? isNaN(o) ? 0 : -1 : isNaN(o) ? 1 : r - o;
                        };
                    }
                    function N(t) {
                        return function(e, n) {
                            var r = x(e, t), o = x(n, t);
                            return isNaN(r) ? isNaN(o) : !isNaN(o) && r - o == 0;
                        };
                    }
                    function b(t, e) {
                        return function(n, r) {
                            var o = n.toString(), i = r.toString(), a = o.toLowerCase(), u = i.toLowerCase(), s = t(a, u);
                            if (0 === s) {
                                for (var c = 0; c < o.length; c++) if (o.charAt(c) != i.charAt(c)) return e == (o.charAt(c) == o.charAt(c).toLowerCase()) ? -1 : 1;
                                return 0;
                            }
                            return s;
                        };
                    }
                    function T(t) {
                        return function(e, n) {
                            return o.string.isStringLike(e) && o.string.isStringLike(n) ? t(e.value, n.value) : e.equals(n);
                        };
                    }
                    function O(t) {
                        return function(e, n) {
                            return o.string.isStringLike(e) && o.string.isStringLike(n) ? t(e.value, n.value) : e.compareTo(n);
                        };
                    }
                    function C(e, n) {
                        var r = e.split("|");
                        if ("DESC" == r[0]) {
                            var i = C(e.slice(5), n);
                            return {
                                equals: i.equals,
                                compare: function(t, e) {
                                    return i.compare(e, t);
                                }
                            };
                        }
                        var a, m, h = {};
                        switch (r[0]) {
                          case "NC":
                            return h.equals = N(!1), h.compare = S(!1), h;

                          case "QUNC":
                            return h.equals = N(!0), h.compare = S(!0), h;

                          case "DblSC":
                            return h.equals = f(u, l), h.compare = p(y(s)), h;

                          case "CCC":
                            return h.equals = T(K().equals), h.compare = p(O(K().compare)), h;

                          case "TEXT":
                            a = r[1] || t, Q(m = j(a, n), a);
                            var d = function(t, e) {
                                return m.equals(t.toString(), e.toString());
                            };
                            h.equals = f(d, c);
                            var g = function(t, e) {
                                return O(m.compare)(o.string.cast(t), o.string.cast(e));
                            };
                            return h.compare = p(g), h;

                          case "CAVC":
                          case "DecSC":
                          case "GAC":
                          case "AtSC":
                          case "CalVC":
                            return {
                                equals: f(u, c),
                                compare: p(y(s))
                            };

                          case "EQC":
                            return h.equals = f(u, c), h.compare = function(t, e) {
                                return h.equals(t, e) ? 0 : 1;
                            }, h;

                          case "CAC":
                            return a = r[1] || t, Q(m = j(a, n), a), h.equals = function(t, e) {
                                return m.equals(t.toString(), e.toString());
                            }, h.compare = function(t, e) {
                                return m.compare(t.toString(), e.toString());
                            }, h;

                          default:
                            throw new v("Unknown comparer " + e, "SXJS0003");
                        }
                    }
                    function D(e, n) {
                        var r = w, i = null;
                        e.hasAttribute("comp") && (i = (i = e.getAttribute("comp")).replace(/^DESC\|/, ""));
                        var a = r.evaluateIfPresent(r.argRole(e, "collation"), n).next(), u = r.evaluateIfPresent(r.argRole(e, "order"), n).next(), s = r.evaluateIfPresent(r.argRole(e, "lang"), n).next(), c = r.evaluateIfPresent(r.argRole(e, "caseOrder"), n).next(), l = r.evaluateIfPresent(r.argRole(e, "dataType"), n).next();
                        c = null === a && null !== c ? c.toString() : "#default";
                        try {
                            s = null === a && null !== s && "" !== s.toString() ? o.language.fromString(s.toString()) : null;
                        } catch (t) {
                            throw v("@lang: " + t.message, "XTDE0030");
                        }
                        return u = null === u ? "ascending" : u.toString(), l = null === l ? null : l.toString(), 
                        {
                            comp: i,
                            collation: a = null === a ? t : a.toString(),
                            order: u,
                            lang: s,
                            caseOrder: c,
                            dataType: l
                        };
                    }
                    function _(t, e) {
                        return M(D(t, e), e);
                    }
                    function M(t, e) {
                        var n = j(t.collation, e);
                        Q(n, t.collation);
                        var r = n.compare, i = "#default" != t.caseOrder ? b(r, "lower-first" == t.caseOrder) : O(r);
                        function a(e) {
                            return "descending" == t.order ? function(t, n) {
                                return e(n, t);
                            } : e;
                        }
                        if ("number" == t.dataType) return a(S(!1));
                        if ("text" == t.dataType) return a(p(function(t, e) {
                            return i(o.string.cast(t), o.string.cast(e));
                        }));
                        if (t.comp) {
                            var u = t.comp;
                            if ("DblSC" == u) return a(p(y(s)));
                            if ("CalVC" == u || "DecSC" == u) return a(p(s));
                            if ("CCC" == u) return a(p(i));
                        }
                        return a(i);
                    }
                    function F(t, e) {
                        switch (t) {
                          case "=":
                          case "eq":
                            return 0 === e;

                          case "<":
                          case "lt":
                            return e < 0;

                          case ">":
                          case "gt":
                            return e > 0;

                          case ">=":
                          case "ge":
                            return e >= 0;

                          case "<=":
                          case "le":
                            return e <= 0;

                          case "!=":
                          case "ne":
                            return 0 !== e;

                          default:
                            throw new v("Unknown operator " + t, "SXJS0003");
                        }
                    }
                    function I(t, e) {
                        switch (t) {
                          case "=":
                          case "eq":
                            return e;

                          case "!=":
                          case "ne":
                            return !e;

                          case "<":
                          case "lt":
                          case ">":
                          case "gt":
                          case ">=":
                          case "ge":
                          case "<=":
                          case "le":
                            throw new v("Operator " + t + " not allowed for unordered types", "SXJS0003");

                          default:
                            throw new v("Unknown operator " + t, "SXJS0003");
                        }
                    }
                    function k(t, e, n) {
                        var r, o, i = t.expand(), a = e.expand();
                        for (t = E.ForArray(i), e = E.ForArray(a); ;) {
                            if (r = t.next(), o = e.next(), null === r) return null === o;
                            if (null === o) return !1;
                            if (!P(r, o, n)) return !1;
                        }
                    }
                    function P(t, e, n) {
                        var r = h;
                        if (t === e) return !0;
                        if (r.isNode(t)) {
                            if (!r.isNode(e) || !r.isSameNodeType(t.nodeType, e.nodeType)) return !1;
                            switch (t.nodeType) {
                              case r.DOCUMENT_NODE:
                              case r.DOCUMENT_FRAGMENT_NODE:
                                return k(g.child(t), g.child(e));

                              case r.ELEMENT_NODE:
                                if (!r.nameOfNode(t).equals(r.nameOfNode(e))) return !1;
                                var i, a = g.attribute(t).expand();
                                if (a.length != g.attribute(e).count()) return !1;
                                for (i = 0; i < a.length; i++) {
                                    var u = a[i], s = r.nameOfNode(u), c = s.uri ? s.uri : null;
                                    if (!e.hasAttributeNS(c, s.local)) return !1;
                                    if (e.getAttributeNS(c, s.local) != u.value) return !1;
                                }
                                return k(g.child(t), g.child(e), n);

                              case r.ATTRIBUTE_NODE:
                                return r.nameOfNode(t).equals(r.nameOfNode(e)) && t.value == e.value;

                              case r.NAMESPACE_NODE:
                                return t.prefix == e.prefix && t.uri == e.uri;

                              case r.PROCESSING_INSTRUCTION_NODE:
                                return t.target == e.target && (n ? n(t.textContent, e.textContent) : t.textContent == e.textContent);

                              case r.TEXT_NODE:
                              case r.COMMENT_NODE:
                                return n ? n(t.textContent, e.textContent) : t.textContent == e.textContent;

                              default:
                                throw new v("Unknown node type " + t.nodeType, "SXJS0003");
                            }
                        } else {
                            if (w.isArray(t)) {
                                if (!w.isArray(e) || e.value.length != t.value.length) return !1;
                                for (var f = 0; f < t.value.length; f++) if (!k(E.ForArray(t.value[f]), E.ForArray(e.value[f], n))) return !1;
                                return !0;
                            }
                            if (w.isMap(t)) {
                                if (!w.isMap(e)) return !1;
                                var m = t.keys(), p = e.keys();
                                return m.length == p.length && E.ForArray(m).every(function(n) {
                                    return e.containsKey(n) && k(E.ForArray(t.get(n)), E.ForArray(e.get(n)));
                                });
                            }
                            if (l(t) && l(e)) return !0;
                            if (n && o.string.isStringLike(t) && o.string.isStringLike(e)) return n(t.value, e.value);
                            try {
                                return t.equals(e);
                            } catch (t) {
                                return !1;
                            }
                        }
                    }
                    function U(t, e, n) {
                        for (var r = t.next(), i = e.next(); ;) {
                            if (null === r) return null === i ? 0 : -1;
                            if (null === i) return 1;
                            if (n) {
                                if (!P(r, i, n.equals)) return l(r) ? -1 : o.string.matches(r) && o.string.matches(i) ? n.compare(r.value, i.value) : r.compareTo(i);
                                r = t.next(), i = e.next();
                            } else {
                                if (!P(r, i)) return l(r) ? -1 : r.compareTo(i);
                                r = t.next(), i = e.next();
                            }
                        }
                    }
                    function R(t, e) {
                        return t.map(function(t) {
                            var n = w.argRole(t, "dataType"), r = null === n ? null : w.evaluate(n, e).next();
                            return "number" == r ? function(t) {
                                return null === t ? null : o.double.fromStringUnfailing(t.toString());
                            } : "text" == r ? function(t) {
                                return null === t ? null : o.string.cast(t);
                            } : function(t) {
                                return t;
                            };
                        });
                    }
                    function B(t, e) {
                        var n = h, r = E.Tracker(w.evalChild1(t, e)), o = [], i = n.getChildElements(t, "sortKey"), a = i.map(function(t) {
                            return _(t, e);
                        }), u = R(i, e), s = e.newContext(!1);
                        return s.tempOutputState = "sort key", s.focus = r, r.forEachItem(function(t) {
                            var e = i.map(function(t, e) {
                                return u[e](w.evalChild1(t, s).next());
                            });
                            o.push({
                                item: t,
                                keys: e
                            });
                        }), o.sort(function(t, e) {
                            var n;
                            for (n = 0; n < a.length; n++) {
                                var r = a[n](t.keys[n], e.keys[n]);
                                if (0 !== r) return r;
                            }
                            return 0;
                        }), E.ForArray(o).mapOneToOne(function(t) {
                            return t.item;
                        });
                    }
                    function X(e, n) {
                        var r = E.Tracker(w.evaluate(w.argRole(e, "select"), n)), a = n.newContext(!1);
                        function u(t) {
                            var e = [];
                            return r.forEachItem(function(n) {
                                t(e, n);
                            }), e;
                        }
                        a.focus = r;
                        var s = {
                            starting: function() {
                                var t = A(w.argRole(e, "match"));
                                return u(function(e, n) {
                                    1 == r.position || t(n, a) ? e.push({
                                        group: [ n ]
                                    }) : e[e.length - 1].group.push(n);
                                });
                            },
                            ending: function() {
                                var t = A(w.argRole(e, "match")), n = !1;
                                return u(function(e, o) {
                                    1 == r.position || n ? e.push({
                                        group: [ o ]
                                    }) : e[e.length - 1].group.push(o), n = t(o, a);
                                });
                            },
                            adjacent: function() {
                                var o = w.argRole(e, "collation"), i = j(o ? w.evaluate(o, n).next().toString() : t, n), s = w.argRole(e, "key"), c = null;
                                return u(function(t, e) {
                                    var n = w.evaluate(s, a).expand();
                                    1 != r.position && k(E.ForArray(n), E.ForArray(c), i.equals) ? t[t.length - 1].group.push(e) : (t.push({
                                        group: [ e ],
                                        key: n
                                    }), c = n);
                                });
                            },
                            by: function() {
                                var r = w.argRole(e, "collation"), o = j(r ? w.evaluate(r, n).next().toString() : t, n), s = i.trieWithCollation(o), c = w.argRole(e, "key");
                                return u(function(t, e) {
                                    var n, r = [];
                                    w.evaluate(c, a).forEachItem(function(o) {
                                        s.containsKey(o) ? (n = s.get(o), r.findIndex(function(t) {
                                            return t == n;
                                        }) < 0 && (t[n].group.push(e), r.push(n))) : (n = t.length, t.push({
                                            group: [ e ],
                                            key: [ o ]
                                        }), s.inSituPut(o, n), r.push(n));
                                    });
                                });
                            },
                            by_c: function() {
                                var r = w.argRole(e, "collation"), i = j(r ? w.evaluate(r, n).next().toString() : t, n), s = w.argRole(e, "key"), c = new d(), l = i.collationKey;
                                if (!l) throw new v("Collation is unsuitable for keys and grouping", "XTDE1110");
                                return c.options = {
                                    sameKey: function(t, e) {
                                        return k(E.ForArray(t), E.ForArray(e), i.equals);
                                    },
                                    hash: function(t) {
                                        return t.map(function(t) {
                                            return o.string.isStringLike(t) ? l(t.matchKey()) : t.matchKey();
                                        }).join();
                                    }
                                }, u(function(t, e) {
                                    var n, r = w.evaluate(s, a).expand();
                                    c.containsKey(r) ? t[n = c.get(r)].group.push(e) : (n = t.length, t.push({
                                        group: [ e ],
                                        key: r
                                    }), c.inSituPut(r, n));
                                });
                            }
                        };
                        s.adjacent_c = s.adjacent;
                        var c = s[e.getAttribute("algorithm") + (w.hasFlag(e, "c") ? "_c" : "")](), l = h.getChildElements(e, "sortKey");
                        if (l.length > 0) {
                            var f = E.Tracker(E.ForArray(c)), m = n.newContext(!1);
                            m.focus = f;
                            var p = l.map(function(t) {
                                return _(t, n);
                            });
                            f.forEachItem(function(t, e) {
                                t.sortKeys = l.map(function(n) {
                                    var r = m.focus;
                                    return r.current = t.group[0], r.position = e + 1, m.currentGroup = t.group, m.currentGroupingKey = t.key, 
                                    w.evalChild1(n, m).next();
                                });
                            }), c.sort(function(t, e) {
                                for (var n = 0; n < p.length; n++) {
                                    var r = p[n](t.sortKeys[n], e.sortKeys[n]);
                                    if (r < 0) return -1;
                                    if (r > 0) return 1;
                                }
                                return 0;
                            });
                        }
                        var g = n.newContext(!1);
                        g.focus = E.Tracker(E.ForArray(c));
                        for (var y = w.argRole(e, "content"), x = [], S = 0; null !== g.focus.next(); ) {
                            var N = c[S++], b = g.focus;
                            b.current = N.group[0], b.position = S, g.currentGroup = N.group, g.currentGroupingKey = N.key, 
                            Array.prototype.push.apply(x, w.evaluate(y, g).expand());
                        }
                        return E.ForArray(x);
                    }
                    function L(t, e) {
                        for (var n = w, r = n.stringToCodepoints(t.toString()), o = n.stringToCodepoints(e.toString()), i = 0; ;) {
                            if (i == r.length) return i == o.length ? 0 : -1;
                            if (i == o.length) return 1;
                            if (r[i] != o[i]) return r[i] - o[i];
                            i++;
                        }
                    }
                    function z(t, e) {
                        if (w.isAstral(t) || w.isAstral(e)) {
                            var n = L(t, e);
                            return n < 0 ? -1 : 0 === n ? 0 : 1;
                        }
                        return t < e ? -1 : t == e ? 0 : 1;
                    }
                    function J(t, e) {
                        return t.substring(0, e.length) === e;
                    }
                    function q(t, e) {
                        return t.substring(t.length - e.length) === e;
                    }
                    function G(t, e, n) {
                        return j($(t, e), n);
                    }
                    function $(t, e) {
                        return e ? e.next().toString() : h.getAttribute(t, "collation");
                    }
                    function j(t, n) {
                        var r = t && !J(t, e) ? n.fixed.options.collations[t] : K();
                        if (!r) throw v("Unrecognized collation " + t, "FOCH0002");
                        return r;
                    }
                    function Q(t, e) {
                        if (!t.hasOwnProperty("compare") || !t.hasOwnProperty("compare")) throw v("Collation " + e + " cannot be used for sorting", "XTDE1035");
                    }
                    function K() {
                        return {
                            equals: function(t, e) {
                                return t === e;
                            },
                            compare: function(t, e) {
                                return z(t, e);
                            },
                            contains: function(t, e) {
                                return -1 != t.indexOf(e);
                            },
                            startsWith: function(t, e) {
                                return J(t, e);
                            },
                            endsWith: function(t, e) {
                                return q(t, e);
                            },
                            indexOf: function(t, e) {
                                return t.indexOf(e);
                            },
                            collationKey: function(t) {
                                return t;
                            }
                        };
                    }
                    function V() {
                        function t(t) {
                            return t ? (t + "").toUpperCase() : "";
                        }
                        return {
                            equals: function(e, n) {
                                return t(e) === t(n);
                            },
                            compare: function(e, n) {
                                return z(t(e), t(n));
                            },
                            contains: function(e, n) {
                                return -1 != t(e).indexOf(t(n));
                            },
                            startsWith: function(e, n) {
                                return J(t(e), t(n));
                            },
                            endsWith: function(e, n) {
                                return q(t(e), t(n));
                            },
                            indexOf: function(e, n) {
                                return t(e).indexOf(t(n));
                            },
                            collationKey: function(e) {
                                return t(e);
                            }
                        };
                    }
                    function H(t) {
                        var e = new d(), n = t.collationKey;
                        if (!n) throw new v("Collation is unsuitable for keys and grouping", "XTDE1110");
                        var r = function(t) {
                            return o.string.isStringLike(t) ? n(t.matchKey()) : t.matchKey();
                        };
                        return e.options = {
                            sameKey: function(t, e) {
                                return r(t) === r(e);
                            },
                            hash: function(t) {
                                return r(t);
                            }
                        }, e;
                    }
                    function Y(t, e, n, r) {
                        var o = $(t, e), i = j(o, r)[n];
                        if (!i) throw v("Collation " + o + " has no " + n + " method", "FOCH0002", t);
                        return i;
                    }
                    return {
                        allocateCodedComparer: C,
                        allocateCompareFn: _,
                        caseblindCollation: V,
                        cmpFn: O,
                        codepointCollation: K,
                        codepointCollationUri: t,
                        codepointComparison: z,
                        compareFnWithProps: M,
                        deepEqualItems: P,
                        deepEqualSequences: k,
                        eqFn: T,
                        fotsCaseblindCollationUri: "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind",
                        gc: n,
                        gc10comparer: r,
                        generalComparison: a,
                        getCollation: G,
                        getCollatingFn: Y,
                        getConverters: R,
                        grouping: X,
                        htmlCaseInsensitiveCollationUri: "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive",
                        itemIsNaN: l,
                        lexicographicCompare: U,
                        sortKeyProps: D,
                        sortSequence: B,
                        testComparison: F,
                        testEquality: I,
                        trieWithCollation: H,
                        xsltsCaseblindCollationUri: "http://www.w3.org/xslts/collation/caseblind"
                    };
                }(), a = 13;
                function u(t, e, n) {
                    this.prefix = null === t ? "" : t, this.uri = null === e ? "" : e, n && (this.parentNode = n);
                }
                u.prototype = {
                    prefix: null,
                    uri: null,
                    parentNode: null,
                    nodeType: a
                };
                var s = 2;
                function c(t, e, n) {
                    this.qname = t, this.value = e, this.parent = n, this.name = this.qname.toString(), 
                    this.namespaceURI = this.qname.uri, this.localName = this.qname.local, this.prefix = this.qname.prefix;
                }
                c.prototype = {
                    qname: null,
                    value: null,
                    parent: null,
                    nodeType: s
                };
                var l, m, p, h = (l = 1, {
                    ELEMENT_NODE: 1,
                    ATTRIBUTE_NODE: 2,
                    TEXT_NODE: 3,
                    CDATA_SECTION: 4,
                    PROCESSING_INSTRUCTION_NODE: 7,
                    COMMENT_NODE: 8,
                    DOCUMENT_NODE: 9,
                    DOCUMENT_TYPE_NODE: 10,
                    DOCUMENT_FRAGMENT_NODE: 11,
                    NAMESPACE_NODE: 13,
                    shallowCopy: function(t, e, n, r) {
                        if (h.isNode(t)) {
                            var o, i;
                            switch (t.nodeType) {
                              case h.DOCUMENT_NODE:
                              case h.DOCUMENT_FRAGMENT_NODE:
                                o = e.resultDocument.createDocumentFragment();
                                var a = e.newContext(!1);
                                w.makeComplexContent(o, r(a), e);
                                break;

                              case h.ELEMENT_NODE:
                                i = h.nameOfNode(t), o = e.createElement(i.uri, i.toString()), n && n.indexOf("c") >= 0 && !(f.getPlatform().inBrowser && o instanceof HTMLElement) && h.inScopeNamespaces(t).forEach(function(t) {
                                    h.declareNS(o, t.prefix, t.uri);
                                }), o._saxonBaseUri = h.baseURI(t), w.makeComplexContent(w.markLocal(o, n), r(e), e);
                                break;

                              case h.ATTRIBUTE_NODE:
                                o = new c(h.nameOfNode(t), t.value, null);
                                break;

                              case h.TEXT_NODE:
                                o = e.resultDocument.createTextNode(t.textContent);
                                break;

                              case h.COMMENT_NODE:
                                o = e.resultDocument.createComment(t.textContent);
                                break;

                              case h.PROCESSING_INSTRUCTION_NODE:
                                o = e.resultDocument.createProcessingInstruction(t.target, t.textContent);
                                break;

                              case h.NAMESPACE_NODE:
                                o = new u(t.prefix, t.uri);
                                break;

                              default:
                                throw v("Unknown node type " + t.nodeType, "SXJS0003");
                            }
                            return E.Singleton(w.markLocal(o, n));
                        }
                        return E.Singleton(t);
                    },
                    copyItem: function(t, e, n) {
                        if (!h.isNode(t)) return t;
                        var r, o, i, a = function(t, e) {
                            n && n.indexOf("m") >= 0 && (e._saxonOriginal = t);
                        };
                        switch (t.nodeType) {
                          case h.DOCUMENT_NODE:
                          case h.DOCUMENT_FRAGMENT_NODE:
                            var s = e.resultDocument.createDocumentFragment();
                            return (r = h.obtainDocumentNumber(s))._saxonBaseUri = t._saxonBaseUri, w.makeComplexContent(r, g.child(t).mapOneToOne(function(t) {
                                return h.copyItem(t, e, n);
                            }), e), a(t, r), w.markLocal(r, n);

                          case h.NAMESPACE_NODE:
                            return new u(t.prefix, t.uri);

                          case h.ELEMENT_NODE:
                            return i = h.nameOfNode(t), o = e.createElement(i.uri, i.toString()), n && n.indexOf("c") >= 0 && !(f.getPlatform().inBrowser && o instanceof HTMLElement) && h.inScopeNamespaces(t).forEach(function(t) {
                                h.declareNS(o, t.prefix, t.uri);
                            }), g.attribute(t).forEachItem(function(t) {
                                var e = "" === t.namespaceURI ? null : t.namespaceURI;
                                o.setAttributeNS(e, t.name, t.value);
                            }), g.child(t).forEachItem(function(t) {
                                var r = h.copyItem(t, e, n);
                                r.nodeType == h.ELEMENT_NODE && "" === h.nameOfNode(r).uri && "" !== i.uri && h.declareNS(r, "", ""), 
                                o.appendChild(r);
                            }), o._saxonBaseUri = h.baseURI(t), a(t, o), w.markLocal(o, n);

                          case h.DOCUMENT_TYPE_NODE:
                            return null;

                          case h.ATTRIBUTE_NODE:
                            return new c(h.nameOfNode(t), t.value, null);

                          default:
                            return a(t, o = f.getPlatform().inBrowser ? window.document.importNode(t, !0) : cloneNode(e.resultDocument, t, !0)), 
                            w.markLocal(o, n);
                        }
                    },
                    ownerDocument: function(t) {
                        return g.ancestorOrSelf(t).expand().pop();
                    },
                    obtainDocumentNumber: function(t) {
                        return "_saxonDocumentNumber" in t || (t._saxonDocumentNumber = l++), t;
                    },
                    documentNumber: function(t) {
                        return h.obtainDocumentNumber(t)._saxonDocumentNumber;
                    },
                    nameOfNode: function(t) {
                        if (!t || !t.nodeType) return null;
                        switch (t.nodeType) {
                          case h.ELEMENT_NODE:
                            return f.getPlatform().inBrowser && t instanceof HTMLElement && "http://www.w3.org/1999/xhtml" == t.namespaceURI ? o.QName.fromParts("", "", t.localName) : o.QName.fromParts(t.prefix, t.namespaceURI, t.localName);

                          case h.ATTRIBUTE_NODE:
                            return "xml" == t.prefix ? o.QName.fromParts(t.prefix, w.KNOWN_URI.xml, t.localName) : t.qname;

                          case h.PROCESSING_INSTRUCTION_NODE:
                            return o.QName.fromParts("", "", t.target);

                          case h.NAMESPACE_NODE:
                            return t.prefix ? o.QName.fromParts("", "", t.prefix) : null;

                          default:
                            return null;
                        }
                    },
                    getChildElements: function(t, e) {
                        for (var n = [], r = t.firstChild; null !== r; ) r.nodeType != h.ELEMENT_NODE || e && e != r.tagName || n.push(r), 
                        r = r.nextSibling;
                        return n;
                    },
                    firstElementChild: function(t, e) {
                        for (var n = t.firstChild; null !== n; ) {
                            if (n.nodeType == h.ELEMENT_NODE && (!e || e == n.tagName)) return n;
                            n = n.nextSibling;
                        }
                        return null;
                    },
                    inDocumentOrder: function(t) {
                        var e = t.expand();
                        return e.sort(h.compareDocumentOrder), E.ForArray(e).mapOneToOne(function(t, n) {
                            return n > 0 && h.isSameNode(t, e[n - 1]) ? null : t;
                        });
                    },
                    compareDocumentOrder: function(t, e) {
                        function n(t) {
                            return g.ancestor(t).count();
                        }
                        if (h.isSameNode(t, e)) return 0;
                        var r = h.xdmParentNode(t), i = h.xdmParentNode(e);
                        if (null === r) {
                            if (null === i) {
                                var a = h.obtainDocumentNumber;
                                return a(t)._saxonDocumentNumber < a(e)._saxonDocumentNumber ? -1 : 1;
                            }
                            return t === i ? -1 : h.compareDocumentOrder(t, i);
                        }
                        if (null === i) return e === r ? 1 : h.compareDocumentOrder(r, e);
                        if (r !== i) {
                            if (t === i) return -1;
                            if (e === r) return 1;
                            var u = n(r), s = n(i);
                            return u == s ? h.compareDocumentOrder(r, i) : u > s ? h.compareDocumentOrder(r, e) : h.compareDocumentOrder(t, i);
                        }
                        var c = t.nodeType, l = e.nodeType;
                        if (c == h.ATTRIBUTE_NODE) {
                            if (l == h.ATTRIBUTE_NODE) {
                                var f, m = r.attributes;
                                for (f = 0; f < m.length; f++) {
                                    var p = o.QName.fromParts(m[f].prefix, m[f].namespaceURI, m[f].localName);
                                    if (p.equals(h.nameOfNode(t))) return -1;
                                    if (p.equals(h.nameOfNode(e))) return 1;
                                }
                                throw v("Att not found in parent", "SXJS0004");
                            }
                            return l == h.NAMESPACE_NODE ? 1 : -1;
                        }
                        if (c == h.NAMESPACE_NODE) return l == h.NAMESPACE_NODE ? t.prefix < e.prefix ? -1 : 1 : -1;
                        if (l == h.ATTRIBUTE_NODE || l == h.NAMESPACE_NODE) return 1;
                        for (var d = t, y = e; ;) {
                            if (null === (d = d.previousSibling)) return -1;
                            if (d === e) return 1;
                            if (null === (y = y.previousSibling)) return 1;
                            if (y === t) return -1;
                        }
                    },
                    xdmParentNode: function(t) {
                        return h.isAttr(t) ? t.parent : t.parentNode;
                    },
                    declareNS: function(t, e, n) {
                        t.setAttributeNS("http://www.w3.org/2000/xmlns/", "" === e ? "xmlns" : "xmlns:" + e, n);
                    },
                    inScopeNamespaces: function(t) {
                        for (var e, n = [ {
                            prefix: "xml",
                            uri: w.KNOWN_URI.xml
                        } ], r = {
                            xml: !0
                        }, o = g.ancestorOrSelf(t); null !== (e = o.next()) && e.nodeType == h.ELEMENT_NODE; ) {
                            var i, a = e.attributes;
                            for (i = 0; i < a.length; i++) {
                                var u = a[i].name;
                                if ("xmlns" == u.substring(0, 5)) if (5 != u.length || r[""]) {
                                    if (":" == u.charAt(5)) {
                                        var s = u.substring(6);
                                        r[s] || (r[s] = !0, n.push({
                                            prefix: s,
                                            uri: a[i].value
                                        }));
                                    }
                                } else r[""] = !0, "" !== a[i].value && n.push({
                                    prefix: "",
                                    uri: a[i].value
                                });
                            }
                        }
                        return n;
                    },
                    hasNamespaceUndeclaration: function(t) {
                        var e = t.attributes.getNamedItem("xmlns");
                        return e && "" === e.value;
                    },
                    getInheritedAttribute: function(t, e) {
                        for (var n = t; n && n.nodeType == h.ELEMENT_NODE; ) {
                            if (n.hasAttribute(e)) return n.getAttribute(e);
                            n = n.parentNode;
                        }
                        return null;
                    },
                    getAttribute: function(t, e, n) {
                        return t.hasAttribute(e) ? t.getAttribute(e) : arguments.length > 2 ? n : null;
                    },
                    getAttributeAsEQName: function(t, e, n) {
                        var r = h.getAttributeAsQName(t, e, n);
                        return null === r ? null : "Q{" + r.uri + "}" + r.local;
                    },
                    getAttributeAsQName: function(t, e, n) {
                        return t.hasAttribute(e) ? h.resolveLexicalQName(t, t.getAttribute(e), n) : null;
                    },
                    resolveLexicalQName: function(t, e, n) {
                        var r = o.QName;
                        if (/^Q\{/.test(e)) return r.fromEQName(e);
                        if (/:/.test(e)) {
                            var i = function(e) {
                                return "xml" == e ? w.KNOWN_URI.xml : t.lookupNamespaceURI(e);
                            };
                            return r.fromString(e, i);
                        }
                        var a = n && t.lookupNamespaceURI(null) || "";
                        return r.fromParts("", a, e);
                    },
                    isAttr: function(t) {
                        return t instanceof c;
                    },
                    isNSNode: function(t) {
                        return t instanceof u;
                    },
                    isNode: function(t) {
                        return t instanceof Node && !(t.nodeType == h.PROCESSING_INSTRUCTION_NODE && "xml" == t.target) || h.isAttr(t) || h.isNSNode(t);
                    },
                    isSameNode: function(t, e) {
                        return t === e || h.isNSNode(t) && h.isNSNode(e) && t.parentNode && e.parentNode && t.parentNode == e.parentNode && t.prefix == e.prefix || h.isAttr(t) && h.isAttr(e) && t.parent && e.parent && t.parent == e.parent && h.nameOfNode(t).equals(h.nameOfNode(e));
                    },
                    isSameNodeType: function(t, e) {
                        return t == e || t == h.DOCUMENT_NODE && e == h.DOCUMENT_FRAGMENT_NODE || e == h.DOCUMENT_NODE && t == h.DOCUMENT_FRAGMENT_NODE;
                    },
                    isAbsoluteURI: function(t) {
                        return /^(?:[a-z]+:)?\/\//i.test(t);
                    },
                    baseURI: function(t) {
                        function e(t) {
                            var e = h.xdmParentNode(t);
                            return e ? h.baseURI(e) : t._saxonBaseUri ? t._saxonBaseUri : null;
                        }
                        if (null === t || h.isNSNode(t)) return null;
                        if (t.nodeType == h.ELEMENT_NODE && t.hasAttribute("xml:base")) {
                            var n = t.getAttribute("xml:base");
                            return h.isAbsoluteURI(n) ? n : f.getPlatform().resolveUri(n.toString(), e(t)).toString();
                        }
                        return e(t);
                    },
                    xmlToString: function(t, e) {
                        for (var n = e["saxon:line-length"], r = "", o = e["saxon:indent-spaces"]; o-- > 0; ) r += " ";
                        var i = "  ";
                        function a(t) {
                            return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\n/g, "&#xa;");
                        }
                        function u(t, e, o, s) {
                            var c, l, f, m, p = o, d = s, y = 0, x = "";
                            function S() {
                                x.length - y > n && (y = (x += "\n" + e + i).length);
                            }
                            var N = !1, b = !1, w = !1;
                            switch (t.nodeType) {
                              case h.DOCUMENT_NODE:
                                for (l = t.childNodes, m = 0; m < l.length; ++m) f = l[m], y = x.length, x += (m > 0 ? "\n" : "") + u(f, "");
                                break;

                              case h.DOCUMENT_FRAGMENT_NODE:
                                for (l = t.childNodes, m = 0; m < l.length; ++m) f = l[m], y = x.length, x += "\n" + u(f, "");
                                break;

                              case h.ELEMENT_NODE:
                                c = h.nameOfNode(t), x += e + "<" + c;
                                var T = "", E = t.parentNode;
                                if (E && E.nodeType != h.ELEMENT_NODE && (E = null), g.namespace(t).forEachItem(function(t) {
                                    T = "";
                                    var e = E ? E.lookupNamespaceURI(t.prefix) : "unknown";
                                    e || "" !== t.prefix || (e = E.lookupNamespaceURI(null)), E && e == t.uri || "xml" == t.prefix || (T = "" === t.prefix ? ' xmlns="' + t.uri + '"' : " xmlns:" + t.prefix + '="' + t.uri + '"'), 
                                    x += T, S();
                                }), h.hasNamespaceUndeclaration(t) && (x += T = ' xmlns=""', S()), g.attribute(t).forEachItem(function(t) {
                                    T = " " + t.name + '="' + a(t.value) + '"', x += T, S();
                                }), x = x.replace(/\s+$/, ""), 0 === (l = t.childNodes).length) x += "/>"; else {
                                    for (x += ">", m = 0; m < l.length; ++m) N = (f = l[m]).nodeType == h.TEXT_NODE && "" !== f.nodeValue, 
                                    x += (w = N || b) ? "" : "\n", x += u(f, w ? "" : e + r, p, d), b = N;
                                    w || (x += "\n" + e), x += "</" + c + ">";
                                }
                                break;

                              case h.ATTRIBUTE_NODE:
                                c = h.nameOfNode(t).toString(), x += c + '="' + a(t.value) + '"';
                                break;

                              case h.TEXT_NODE:
                                x = t.nodeValue.replace(/&/g, "&amp;").replace(/</g, "&lt;");
                                break;

                              case h.COMMENT_NODE:
                                x += "\x3c!--" + t.nodeValue + "--\x3e";
                                break;

                              case h.PROCESSING_INSTRUCTION_NODE:
                                x += "<?" + t.target + " " + t.nodeValue + "?>";
                                break;

                              case h.DOCUMENT_TYPE_NODE:
                                x += "<!DOCTYPE " + t.name + ' SYSTEM "' + t.systemId + '">';
                                break;

                              case h.NAMESPACE_NODE:
                                break;

                              case h.CDATA_SECTION:
                                return t.data;

                              default:
                                throw v("Unknown node type " + t.nodeType, "SXJS0003");
                            }
                            return x;
                        }
                        return u(t, "", [], "");
                    }
                }), d = function() {
                    var t = 0, e = {
                        hash: function(t) {
                            return t.hashCode();
                        },
                        sameKey: function(t, e) {
                            function n(t) {
                                return "timezoneOffset" in t && null !== t.timezoneOffset;
                            }
                            try {
                                return (t.equals(e) || i.itemIsNaN(t) && i.itemIsNaN(e)) && n(t) == n(e);
                            } catch (t) {
                                return !1;
                            }
                        }
                    };
                    function n(t, e) {
                        if ("" === e) return t.leafKVPs;
                        var r = e.charAt(0);
                        return t.subTries.hasOwnProperty(r) ? n(t.subTries[r], e.substring(1)) : [];
                    }
                    function o(t, e) {
                        for (var r = n(t, t.options.hash(e)), o = 0; o < r.length; o++) if (t.options.sameKey(r[o].k, e)) return r[o];
                        return null;
                    }
                    function a(e, n, r, o) {
                        if ("" === o) {
                            for (var i = 0; i < e.leafKVPs.length; i++) if (e.options.sameKey(e.leafKVPs[i].k, n)) return void (e.leafKVPs[i] = {
                                k: n,
                                v: r
                            });
                            e.leafKVPs.push({
                                k: n,
                                v: r
                            });
                        } else {
                            var u, s = o.charAt(0);
                            e.subTries.hasOwnProperty(s) ? u = e.subTries[s] : ((u = new c(e.options)).id = t++, 
                            e.subTries[s] = u), a(u, n, r, o.substring(1));
                        }
                    }
                    function u(t, e, n, r) {
                        var o = new c(t.options), i = !1;
                        if ("" === r) return o.leafKVPs = t.leafKVPs.map(function(r) {
                            return t.options.sameKey(r.k, e) ? (i = !0, {
                                k: e,
                                v: n
                            }) : r;
                        }), i || o.leafKVPs.push({
                            k: e,
                            v: n
                        }), o.subTries = t.subTries, o;
                        var a = r.charAt(0);
                        for (var s in t.subTries) t.subTries.hasOwnProperty(s) && (s == a ? (o.subTries[s] = u(t.subTries[s], e, n, r.substring(1)), 
                        i = !0) : o.subTries[s] = t.subTries[s]);
                        if (!i) {
                            var l = new c(t.options);
                            l = u(l, e, n, r.substring(1)), o.subTries[a] = l;
                        }
                        return o.leafKVPs = t.leafKVPs, o;
                    }
                    function s(t, e, n) {
                        var r = new c(t.options);
                        if ("" === n) return r.leafKVPs = t.leafKVPs.filter(function(n) {
                            return !t.options.sameKey(n.k, e);
                        }), r.subTries = t.subTries, r;
                        var o = n.charAt(0);
                        for (var i in t.subTries) t.subTries.hasOwnProperty(i) && (r.subTries[i] = i == o ? s(t.subTries[i], e, n.substring(1)) : t.subTries[i]);
                        return r.leafKVPs = t.leafKVPs, r;
                    }
                    function c(t) {
                        this.leafKVPs = [], this.subTries = {}, this.options = t || {
                            hash: e.hash,
                            sameKey: e.sameKey
                        };
                    }
                    return c.prototype = {
                        leafKVPs: [],
                        subTries: {},
                        options: e,
                        containsKey: function(t) {
                            return null !== o(this, t);
                        },
                        get: function(t) {
                            var e = o(this, t);
                            return null === e ? [] : e.v;
                        },
                        inSituPut: function(t, e) {
                            a(this, t, e, this.options.hash(t));
                        },
                        put: function(t, e) {
                            return u(this, t, e, this.options.hash(t));
                        },
                        remove: function(t) {
                            return s(this, t, this.options.hash(t));
                        },
                        forAllPairs: function(t) {
                            for (var e in this.leafKVPs.forEach(t), this.subTries) this.subTries.hasOwnProperty(e) && this.subTries[e].forAllPairs(t);
                        },
                        display: function() {
                            function t(e, n) {
                                for (var o in n > 0 && z("Subtrie " + n), e.leafKVPs.forEach(function(t) {
                                    z(r(t.k) + ": " + r(t.v));
                                }), e.subTries) e.subTries.hasOwnProperty(o) && t(e.subTries[o], n + 1);
                            }
                            z("HashTrie:"), t(this, 0);
                        },
                        keys: function() {
                            var t = [];
                            return this.forAllPairs(function(e) {
                                t.push(e.k);
                            }), t;
                        },
                        conforms: function(t, e, n) {
                            var r = this;
                            return E.ForArray(r.keys()).every(function(o) {
                                var i = r.get(o);
                                return t(o) && n(i.length) && E.ForArray(i).every(e);
                            });
                        }
                    }, c;
                }(), g = (m = h, (p = {
                    ancestor: function(t) {
                        var e;
                        switch (t.nodeType) {
                          case m.DOCUMENT_NODE:
                          case m.DOCUMENT_FRAGMENT_NODE:
                            return E.Empty;

                          case m.ATTRIBUTE_NODE:
                            return t.parent ? E.Stepping(t.parent, function(t) {
                                return t.parentNode;
                            }) : E.Empty;

                          default:
                            return (e = t.parentNode) ? E.Stepping(e, function(t) {
                                return t.parentNode;
                            }) : E.Empty;
                        }
                    },
                    ancestorOrSelf: function(t) {
                        return E.Join([ E.Singleton(t), g.ancestor(t) ]);
                    },
                    attribute: function(t) {
                        if (t.nodeType == m.ELEMENT_NODE) {
                            var e, n, r = t.attributes, i = [];
                            for (e = 0; e < r.length; e++) ("xmlns" != (n = r[e].name).substring(0, 5) || 5 != n.length && ":" != n.charAt(5)) && i.push(new c(o.QName.fromParts(r[e].prefix, r[e].namespaceURI, r[e].localName), r[e].value, t));
                            return E.ForArray(i);
                        }
                        return E.Empty;
                    },
                    child: function(t) {
                        function e(t) {
                            return E.Stepping(t.firstChild, function(t) {
                                return t.nextSibling;
                            });
                        }
                        if (null === t) return E.Empty;
                        switch (t.nodeType) {
                          case m.DOCUMENT_NODE:
                            return e(t).filter(function(t) {
                                return !(t.nodeType == m.PROCESSING_INSTRUCTION_NODE && "xml" == t.target || t.nodeType == m.TEXT_NODE);
                            });

                          case m.DOCUMENT_FRAGMENT_NODE:
                          case m.ELEMENT_NODE:
                            return e(t);

                          default:
                            return E.Empty;
                        }
                    },
                    descendant: function(t) {
                        return g.child(t).mapOneToMany(function(t) {
                            return g.descendantOrSelf(t);
                        });
                    },
                    descendantOrSelf: function(t) {
                        return E.Join([ E.Singleton(t), g.descendant(t) ]);
                    },
                    following: function(t) {
                        switch (t.nodeType) {
                          case m.DOCUMENT_NODE:
                          case m.DOCUMENT_FRAGMENT_NODE:
                            return E.Empty;

                          case m.ATTRIBUTE_NODE:
                          case m.NAMESPACE_NODE:
                            var e = m.xdmParentNode(t);
                            return null === e ? E.Empty : E.Join([ g.descendant(e), g.following(e) ]);

                          default:
                            return g.ancestorOrSelf(t).mapOneToMany(function(t) {
                                return g.followingSibling(t).mapOneToMany(g.descendantOrSelf);
                            });
                        }
                    },
                    followingSibling: function(t) {
                        switch (t.nodeType) {
                          case m.DOCUMENT_NODE:
                          case m.DOCUMENT_FRAGMENT_NODE:
                          case m.ATTRIBUTE_NODE:
                          case m.NAMESPACE_NODE:
                            return E.Empty;

                          default:
                            return E.Stepping(t.nextSibling, function(t) {
                                return t.nextSibling;
                            });
                        }
                    },
                    namespace: function(t) {
                        return t.nodeType == m.ELEMENT_NODE ? E.ForArray(m.inScopeNamespaces(t).map(function(e) {
                            return new u(e.prefix, e.uri, t);
                        })) : E.Empty;
                    },
                    parent: function(t) {
                        return E.Singleton(m.xdmParentNode(t));
                    },
                    preceding: function(t) {
                        return g.ancestorOrSelf(t).mapOneToMany(function(t) {
                            return g.precedingSibling(t).mapOneToMany(function(t) {
                                return E.ForArray(g.descendantOrSelf(t).expand().reverse());
                            });
                        });
                    },
                    precedingSibling: function(t) {
                        switch (t.nodeType) {
                          case m.DOCUMENT_NODE:
                          case m.DOCUMENT_FRAGMENT_NODE:
                          case m.ATTRIBUTE_NODE:
                          case m.NAMESPACE_NODE:
                            return E.Empty;

                          default:
                            return E.Stepping(t.previousSibling, function(t) {
                                return t.previousSibling;
                            });
                        }
                    },
                    self: function(t) {
                        return E.Singleton(t);
                    }
                })["ancestor-or-self"] = p.ancestorOrSelf, p["descendant-or-self"] = p.descendantOrSelf, 
                p["following-sibling"] = p.followingSibling, p["preceding-sibling"] = p.precedingSibling, 
                p);
                function v(t, e, n) {
                    if (!(this instanceof v)) return new v(t, e, n);
                    this.name = "XError", this.message = t || "Default Message", this.code = e || "FORG0001", 
                    n && this.setExpr(n), this.stack = new Error().stack;
                }
                v.prototype = Object.create(Error.prototype), v.prototype.constructor = v, v.prototype.code = null, 
                v.prototype.xsltLineNr = null, v.prototype.xsltModule = null, v.prototype.compiledLineNr = null, 
                v.prototype.isGlobal = !1, v.prototype.setExpr = function(t) {
                    this.xsltLineNr = h.getInheritedAttribute(t, "line"), this.xsltModule = h.getInheritedAttribute(t, "module"), 
                    this.compiledLineNr = t.lineNumber, null !== this.xsltLineNr && (this.message += " at " + this.xsltModule + "#" + this.xsltLineNr);
                }, v.test = function(t) {
                    if (t) throw v.call(this, arguments[1], arguments[2], arguments[3]);
                };
                var y, x, S, N, b, w = function() {
                    var t = h, e = function() {};
                    function n() {}
                    var a = {
                        among: function(t, e) {
                            var n = X(t, e).next();
                            return L(t, e).filter(function(t) {
                                return t === n;
                            });
                        },
                        analyzeString: function(t, e) {
                            var n = Z(J(t, "select"), e).next();
                            if (null === n) return E.Empty;
                            n = n.toString();
                            var r = Z(J(t, "regex"), e).next().toString(), o = Z(J(t, "flags"), e).next().toString(), i = J(t, "matching"), a = J(t, "nonMatching"), u = l(n, r, o, !0, !1), s = e.newContext(!1), c = u.map(function(t) {
                                return t.string;
                            });
                            return s.focus = E.Tracker(E.ForArray(c)), s.focus.mapOneToMany(function(t) {
                                var e = u[s.focus.position - 1];
                                return e.matching ? (s.focus.regexGroups = e.groups, i ? Z(i, s) : E.Empty) : (s.focus.regexGroups = [], 
                                a ? Z(a, s) : E.Empty);
                            });
                        },
                        and: function(t, e) {
                            return E.oneBoolean(x(X(t, e)) && x(L(t, e)));
                        },
                        applyImports: function(t, e) {
                            var n = e.currentMode.mode;
                            if (!n) throw v("applyImports: no current mode", "XTDE0560", t);
                            if (e.noCurrentFocus()) throw v("applyImports: no context item", "XTDE0560", t);
                            var r = e.newContext(!0);
                            return r.currentComponent = e.currentMode, b(t, e, r), r.focus = E.Solo(e.getCurrentFocus()), 
                            r.focus.regexGroups = e.focus.regexGroups, n.applyImports(r);
                        },
                        applyT: function(t, e) {
                            var n, r = e.newContext(!0);
                            if (q(t, "c")) {
                                var o = e.currentComponent.actor.tagName;
                                n = "function" === o || "globalVariable" === o || "globalParam" === o ? e.fixed.modes[""] : e.currentMode.mode, 
                                r.currentComponent = e.currentMode;
                            } else {
                                var i = Y(t, e, "mode");
                                if ((n = i.mode).mustBeTyped) throw v("Mode " + h.getAttribute(n._expr, "name") + " only handles typed nodes", "XTTE3100", t);
                                r.currentComponent = i;
                            }
                            return b(t, e, r), r.focus = E.Tracker(X(t, e)), r.focus.regexGroups = e.focus ? e.focus.regexGroups : null, 
                            n.applyTemplates(r);
                        },
                        arith: function(t, e) {
                            var n = _[t.getAttribute("calc")];
                            return n || R("arithmetic (" + t.getAttribute("calc") + ")", t), E.Singleton(F(t, e, n));
                        },
                        arith10: function(t, e) {
                            function n(t) {
                                var e = t.next();
                                return null === e ? o.double.fromNumber(NaN) : o.double.cast(e);
                            }
                            var r = _[t.getAttribute("calc")];
                            return E.Singleton(r(n(X(t, e)), n(L(t, e))));
                        },
                        array: function(e, n) {
                            var r = t.getChildElements(e).map(function(t) {
                                return Z(t, n).expand();
                            });
                            return E.Singleton(new dt(r));
                        },
                        arrayBlock: function(e, n) {
                            var r = t.getChildElements(e).map(function(t) {
                                return Z(t, n).expand();
                            });
                            return E.Singleton(new dt(r));
                        },
                        atomic: function(t) {
                            var e = t.getAttribute("val"), n = t.getAttribute("type").substring(3);
                            return o[n] || H("Unknown type: " + n, t), E.Singleton(o[n].fromString(e));
                        },
                        atomSing: function(t, e) {
                            var n = X(t, e).mapOneToMany(p);
                            if (!t.hasAttribute("card") && null === (n = E.LookAhead(n)).peek()) {
                                var r = c(t.getAttribute("diag"));
                                throw v("The " + r.required + " is empty", r.code, t);
                            }
                            return n;
                        },
                        att: function(e, n) {
                            var r, i = mt(X(e, n));
                            if (e.hasAttribute("nsuri")) {
                                var a = e.getAttribute("name").split(":");
                                r = o.QName.fromParts(a[0], e.getAttribute("nsuri"), a[1]);
                            } else r = t.getAttributeAsQName(e, "name");
                            if (null === r) throw v("Invalid attribute name " + e.getAttribute("name"), "XTDE0850", e);
                            var u = n.createAttributeFromQName(r);
                            u.value = i;
                            var s = e.hasAttribute("flags") ? e.getAttribute("flags") : "";
                            return E.Singleton(T(u, s));
                        },
                        attVal: function(e, n) {
                            var r = t.getAttributeAsQName(e, "name");
                            if (n.noCurrentFocus()) throw v("attVal: no context item", "XPDY0002", e);
                            var i, a = n.getCurrentFocus();
                            if (!t.isNode(a)) throw v("Context item for 'attVal' must be a node", "XPTY0020", e);
                            return a.nodeType != t.ELEMENT_NODE ? E.Empty : null === (i = "" === r.uri ? a.hasAttribute(r.local) ? a.getAttribute(r.local) : null : r.uri === G.xml ? a.hasAttribute("xml:" + r.local) ? a.getAttribute("xml:" + r.local) : null : a.hasAttributeNS(r.uri, r.local) ? a.getAttributeNS(r.uri, r.local) : null) ? E.Empty : E.Singleton(o.untypedAtomic.fromString(i));
                        },
                        axis: function(e, n) {
                            var r = new Function("item", e.getAttribute("jsTest")), o = e.getAttribute("name");
                            if (n.noCurrentFocus()) throw v("Context item is absent for " + o + " axis", "XPDY0002", e);
                            var i = n.getCurrentFocus();
                            if (!t.isNode(i)) throw v("Context item for " + o + " axis is not a node", "XPTY0020", e);
                            return g[o](i).filter(r);
                        },
                        break: function(t, e) {
                            var r = new n();
                            return null !== t.firstChild && (r.content = X(t, e).expand()), E.Join([ E.Empty, E.Singleton(r) ]);
                        },
                        callT: function(t, e) {
                            var n = Y(t, e, "template"), r = e.newContext(!0);
                            return r.currentMergeGroup = null, r.currentComponent = n, ht(n.actor, r), b(t, e, r), 
                            X(n.actor, r);
                        },
                        cast: function(t, e) {
                            var n = X(t, e), r = n.next(), o = t.getAttribute("as");
                            if (null === r) {
                                if ("?" == o.slice(-1) || "1" == t.getAttribute("emptiable")) return E.Empty;
                                throw v("Empty sequence casting to " + o, "XPTY0004", t);
                            }
                            if (null !== n.next()) throw v("Multiple sequence casting to " + o, "XPTY0004", t);
                            try {
                                var i = I(o = o.replace(/(\?|\*)$/, "")), a = "QName" == i.name ? j(t, !0) : null;
                                return E.Singleton(i.cast(r, a));
                            } catch (e) {
                                if (null !== e.code) throw e;
                                throw v("Failed to cast to type " + o, "XPTY0004", t);
                            }
                        },
                        castable: function(t, e) {
                            var n, r = X(t, e).mapOneToMany(p).expand();
                            if (0 === r.length) n = "1" == t.getAttribute("emptiable"); else if (r.length > 1) n = !1; else try {
                                var o = I(t.getAttribute("as")), i = "QName" == o.name ? j(t, !0) : null;
                                o.cast(r[0], i), n = !0;
                            } catch (t) {
                                n = !1;
                            }
                            return E.oneBoolean(n);
                        },
                        cfn: function(t, e) {
                            var n, r = t.getAttribute("name");
                            return "_format-number_1" == r ? (n = [ X(t, e), E.oneString(t.getAttribute("pic")) ], 
                            t.hasAttribute("format") && n.push(E.oneString(t.getAttribute("format"))), C["format-number"](n, e, t)) : "_translate_1" == r ? (n = [ X(t, e), E.oneString(t.getAttribute("a1")), E.oneString(t.getAttribute("a2")) ], 
                            C.translate(n, e)) : void H("Unimplemented: cfn " + r, t);
                        },
                        check: function(t, e) {
                            var n = t.getAttribute("card"), o = {
                                "*": "zero or more",
                                "+": "one or more",
                                "?": "zero or one",
                                "\xb0": "zero",
                                1: "exactly one"
                            };
                            function i(e) {
                                var r = c(t.getAttribute("diag"));
                                throw v("Required cardinality of " + r.required + " is " + o[n] + "; supplied value " + e, r.code, t);
                            }
                            var a = X(t, e);
                            if ("*" == n) return a;
                            var u = E.LookAhead(a), s = u.peek();
                            if (null === s) {
                                if ("?" == n || "\xb0" == n) return E.Empty;
                                i("is empty");
                            } else "\xb0" == n && i("is not empty (first item " + r(s) + ")");
                            if ("+" == n) return u;
                            u.next();
                            var l = u.next();
                            if (null !== l) {
                                var f = u.count() + 2;
                                i("contains " + f + " items (" + r(s) + ", " + r(l) + (f > 2 ? ",... )" : ")"));
                            }
                            return E.Singleton(s);
                        },
                        choose: function(e, n) {
                            var r, o = t.getChildElements(e);
                            for (r = 0; r < o.length; r += 2) if (x(Z(o[r], n))) return Z(o[r + 1], n);
                            return E.Empty;
                        },
                        comment: function(t, e) {
                            var n = X(t, e), r = e.resultDocument.createComment(mt(n).replace(/--/g, "- -").replace(/-$/, "- ")), o = t.hasAttribute("flags") ? t.getAttribute("flags") : "";
                            return E.Singleton(T(r, o));
                        },
                        compareToInt: function(t, e) {
                            var n = t.getAttribute("op"), r = X(t, e).next();
                            if (null === r) return E.Empty;
                            if (i.itemIsNaN(r)) return E.oneBoolean("ne" == n);
                            var a = o.integer.fromString(t.getAttribute("val"));
                            return E.oneBoolean(i.testComparison(n, r.compareTo(a)));
                        },
                        compAtt: function(t, e) {
                            var n = t.hasAttribute("flags") ? t.getAttribute("flags") : "";
                            return A(t, e, function(r) {
                                var o = e.createAttributeFromQName(r);
                                return (o = T(o, n)).value = mt(Z(J(t, "select"), e)), o;
                            });
                        },
                        compElem: function(e, n) {
                            var r = e.hasAttribute("flags") ? e.getAttribute("flags") : "";
                            return A(e, n, function(o, i) {
                                var a = i.split(":");
                                "" === o && 2 == a.length && (i = a[1]);
                                var u = n.createElement(o, i);
                                return "" !== o && t.declareNS(u, 1 == a.length ? "" : a[0], o), pt(u, Z(J(e, "content"), n), n), 
                                T(u, r);
                            });
                        },
                        condCont: function(e, n) {
                            return X(e, n).filter(function(e) {
                                if (!t.isNode(e)) return vt(e) ? e.keys().length > 0 : "" !== o.string.cast(e).value;
                                switch (e.nodeType) {
                                  case t.DOCUMENT_NODE:
                                  case t.DOCUMENT_FRAGMENT_NODE:
                                  case t.ELEMENT_NODE:
                                    return e.hasChildNodes();

                                  default:
                                    return "" !== y(e).value;
                                }
                            });
                        },
                        condSeq: function(e, n) {
                            var r = [], i = [], a = !0;
                            function u(e) {
                                if (e instanceof Node) {
                                    if (e.nodeType == t.DOCUMENT_NODE || e.nodeType == t.DOCUMENT_FRAGMENT_NODE) return !e.hasChildNodes();
                                    if (e.nodeType == t.TEXT_NODE) return "" === e.nodeValue;
                                } else {
                                    if (e.isAtomic) return "" === o.string.cast(e).value;
                                    if (gt(e)) return !wt(E.Singleton(e)).some(function(t) {
                                        return !u(t);
                                    });
                                }
                                return !1;
                            }
                            t.getChildElements(e).map(function(t) {
                                if ("onEmpty" == t.tagName) a && (r = Z(t, n).expand()); else if ("onNonEmpty" == t.tagName) {
                                    var e = r.length;
                                    i.unshift(function() {
                                        r.splice.apply(r, [ e, 0 ].concat(Z(t, n).expand()));
                                    });
                                } else Z(t, n).forEachItem(function(t) {
                                    u(t) || (a = !1), r.push(t);
                                });
                            });
                            return a || i.forEach(function(t) {
                                t();
                            }), E.ForArray(r);
                        },
                        conditionalSort: function(e, n) {
                            return x(X(e, n)) ? L(e, n) : X(t.getChildElements(e)[1], n);
                        },
                        convert: function(t, e) {
                            var n = I(t.getAttribute("to"));
                            return X(t, e).mapOneToOne(q(t, "p") ? function(t) {
                                return ft(t, n.name);
                            } : n.cast);
                        },
                        copy: function(e, n) {
                            if (n.noCurrentFocus()) throw v("copy: no context item", "XTTE0945", e);
                            var r = n.getCurrentFocus(), o = e.getAttribute("flags");
                            return t.shallowCopy(r, n, o, function(t) {
                                return X(e, t);
                            });
                        },
                        copyOf: function(e, n) {
                            var r = e.getAttribute("flags");
                            return X(e, n).mapOneToOne(function(e) {
                                return t.copyItem(e, n, r);
                            });
                        },
                        currentGroup: function(t, e) {
                            if (e && e.currentGroup) return E.ForArray(e.currentGroup);
                            throw v("There is no current group", "XTDE1061", t);
                        },
                        currentGroupingKey: function(t, e) {
                            if (e && e.currentGroupingKey) return E.ForArray(e.currentGroupingKey);
                            throw v("There is no current grouping key", "XTDE1071", t);
                        },
                        cvUntyped: function(t, e) {
                            var n = X(t, e), r = t.getAttribute("to"), i = I(r).cast, a = "xs:string" == r;
                            return n.mapOneToOne(function(t) {
                                return o.untypedAtomic.matches(t) || a && o.anyURI.matches(t) ? i(t) : t;
                            });
                        },
                        data: function(t, e) {
                            return X(t, e).mapOneToMany(p);
                        },
                        dbl: function(t) {
                            var e = t.getAttribute("val");
                            return E.Singleton(o.double.fromString(e));
                        },
                        dec: function(t) {
                            var e = t.getAttribute("val");
                            return E.oneDecimal(Big(e));
                        },
                        doc: function(e, n) {
                            var r = U(t.getChildElements(e)[0], n), o = e.hasAttribute("flags") ? e.getAttribute("flags") : "";
                            return E.Singleton(T(r, o));
                        },
                        docOrder: function(e, n) {
                            return t.inDocumentOrder(X(e, n));
                        },
                        dot: function(t, e) {
                            if (e.noCurrentFocus()) throw v("dot: no context item", "XPDY0002", t);
                            return E.Singleton(e.getCurrentFocus());
                        },
                        elem: function(e, n) {
                            var r, o = !1, i = e.getAttribute("name"), a = i.split(":"), u = null;
                            if (e.hasAttribute("nsuri") && (u = e.getAttribute("nsuri"), o = !0), 2 == a.length && null === u && (null === (u = e.lookupNamespaceURI(a[0])) && (u = j(e, !0)(a[0])), 
                            o = !0), null === u && (u = ""), "http://www.w3.org/2000/xmlns/" == u) throw v("Disallowed namespace " + u, "XTDE0835", e);
                            try {
                                r = n.createElement(u, i);
                            } catch (t) {
                                throw v("Element name '" + i + "' is not a lexical QName", "XTDE0820", e);
                            }
                            if (e.hasAttribute("namespaces")) {
                                var s, c = e.getAttribute("namespaces").toString().split(" ");
                                for (s = 0; s < c.length; s++) {
                                    var l = c[s].split("="), f = l[0];
                                    "#" == f && (f = "");
                                    var m = 2 == l.length ? l[1] : j(e, !0)(f);
                                    t.declareNS(r, f, m);
                                }
                            }
                            o && t.declareNS(r, 2 == a.length ? a[0] : "", u), pt(r, X(e, n), n);
                            var p = e.hasAttribute("flags") ? e.getAttribute("flags") : "";
                            return E.Singleton(T(r, p));
                        },
                        empty: function() {
                            return E.Empty;
                        },
                        emptyTextNodeRemover: function(e, n) {
                            return X(e, n).filter(function(e) {
                                return !(e instanceof Node && e.nodeType == t.TEXT_NODE && "" === e.textContent);
                            });
                        },
                        error: function(t) {
                            throw v(t.getAttribute("message"), t.getAttribute("code"), t);
                        },
                        evaluate: function(e, n) {
                            var r = {
                                language: "XSLT",
                                contextType: "item()"
                            }, i = Z(J(e, "xpath"), n).next().toString(), a = Z(J(e, "cxt"), n), u = new d();
                            t.getChildElements(e, "withParam").forEach(function(t) {
                                u.inSituPut(o.string.fromString(t.getAttribute("name")), X(t, n).expand());
                            });
                            var s = Z(J(e, "wp"), n);
                            s && s.next().forAllPairs(function(t) {
                                if (!o.QName.matches(t.k)) throw v("Parameter names in xsl:evaluate/@with-params map must be QNames:" + t.k.toString(), "XTTE3165", e);
                                u.inSituPut(t.k, t.v);
                            });
                            u = E.Singleton(u);
                            var c = {}, l = J(e, "sa");
                            if (l) {
                                var m = Z(l, n).next().toString();
                                if ("true" == m || "yes" == m || "1" == m) throw v("Saxon-JS does not support schema-aware evaluation", "XTDE1665", e);
                            }
                            var p = e.getAttribute("as");
                            p && (r.requiredType = p.toString());
                            var h = e.getAttribute("dxns");
                            null !== h && (r.xpathDefaultNamespace = h.toString());
                            var g, y = J(e, "nsCxt");
                            if (y) {
                                var x = Z(y, n).next().attributes;
                                for (g = 0; g < x.length; ++g) {
                                    var S = x[g];
                                    "xmlns" == S.prefix ? c[S.localName] = S.value : "xmlns" == S.name && (c[""] = S.value, 
                                    r.xpathDefaultNamespace = S.value);
                                }
                            } else c = $(e);
                            r.params = u, r.namespaces = c, r.staticTyping = !0;
                            var N = J(e, "baseUri");
                            return N && (r.staticBaseURI = Z(N, n).next().toString()), f.XPath.evaluateXDM(i, a, u, n, c, r);
                        },
                        every: function(t, e) {
                            var n = parseInt(t.getAttribute("slot"), 10), r = X(t, e), o = it(t);
                            return E.oneBoolean(!r.some(function(t) {
                                return e.localVars[n] = [ t ], !x(o(e));
                            }));
                        },
                        except: function(e, n) {
                            var r = X(e, n), o = L(e, n);
                            return E.Difference(r, o, t.compareDocumentOrder);
                        },
                        false: function() {
                            return E.oneBoolean(!1);
                        },
                        filter: function(t, e) {
                            var n = X(t, e), r = it(t);
                            if (q(t, "i")) {
                                var i = r(e).expand();
                                if (1 == i.length && o.numeric.matches(i[0])) {
                                    var a = i[0].toNumber();
                                    if (n instanceof E.ForArray) return E.Singleton(n.expand()[a - 1] || null);
                                    var u = E.Tracker(n);
                                    return u.filter(function() {
                                        return u.position == a;
                                    });
                                }
                                return x(E.ForArray(i)) ? n : E.Empty;
                            }
                            var s, c = e.newContext(!1);
                            return c.focus = E.Tracker(n), s = q(t, "p") ? function() {
                                var t = r(c).expand();
                                return 1 == t.length && o.numeric.matches(t[0]) ? c.focus.position == t[0].toNumber() : x(E.ForArray(t));
                            } : function() {
                                return x(r(c));
                            }, c.focus.filter(s);
                        },
                        first: function(t, e) {
                            return E.Singleton(X(t, e).next());
                        },
                        fnRef: function(t) {
                            throw v("Saxon-JS does not support higher-order functions", "XTSE3540", t);
                        },
                        follows: function(e, n) {
                            return E.Singleton(F(e, n, function(e, n) {
                                return o.boolean.fromBoolean(t.compareDocumentOrder(e, n) > 0);
                            }));
                        },
                        for: function(t, e) {
                            var n = parseInt(t.getAttribute("slot"), 10), r = it(t);
                            return X(t, e).mapOneToMany(function(t) {
                                return e.localVars[n] = [ t ], r(e);
                            });
                        },
                        forEach: function(t, e) {
                            var n = e.newContext(!1);
                            n.focus = E.Tracker(X(t, e)), n.currentTemplate = null;
                            var r = it(t), o = function() {
                                return r(n);
                            };
                            return n.focus.mapOneToMany(o);
                        },
                        forEachGroup: function(t, e) {
                            return i.grouping(t, e);
                        },
                        fork: s,
                        fn: function(e, n) {
                            var r = C[e.getAttribute("name")];
                            return r || R(e.getAttribute("name") + "()", e), r(t.getChildElements(e).map(function(t) {
                                return Z(t, n);
                            }), n, e);
                        },
                        functionCall: function(t) {
                            R(t.getAttribute("name") + "()", t);
                        },
                        gc: i.generalComparison,
                        gc10: function(t, e) {
                            function n(t) {
                                return 1 == t.length && o.boolean.matches(t[0]);
                            }
                            function r(t) {
                                return [ o.boolean.fromBoolean(x(E.ForArray(t))) ];
                            }
                            function a(t) {
                                return E.ForArray(t).mapOneToMany(p).expand();
                            }
                            function u(t) {
                                return E.ForArray(t).mapOneToOne(o.numeric.numberFn).expand();
                            }
                            var s = X(t, e).expand(), c = L(t, e).expand();
                            n(s) ? c = r(c) : n(c) ? s = r(s) : (s = a(s), c = a(c));
                            var l = i.allocateCodedComparer(t.getAttribute("comp"), e), f = t.getAttribute("op");
                            return "=" !== f && "!=" !== f ? (s = u(s), c = u(c)) : l = i.gc10comparer(l), i.gc(E.ForArray(s), c, f, l);
                        },
                        gcEE: i.generalComparison,
                        gVarRef: function(n, r) {
                            var i = Y(n, r), a = i.actor, u = a.getAttribute("name");
                            if (i.value === e) {
                                var s = v("Circularity in global variable " + u, "XTDE0640");
                                throw s.isGlobal = !0, s;
                            }
                            if (null === i.value || void 0 === i.value) {
                                if ("globalParam" == a.tagName) {
                                    var c = r.fixed.options.stylesheetParams[u];
                                    if (void 0 === c && /^Q\{\}/.test(u) && (c = r.fixed.options.stylesheetParams[o.QName.fromEQName(u).local]), 
                                    void 0 !== c) {
                                        null === c && (c = []);
                                        var l = new Function("val", a.getAttribute("jsAcceptor")), f = yt(c, new Function("n", a.getAttribute("jsCardCheck") + " return c(n);"), l, u, "item()" !== a.getAttribute("type").substr(0, 6));
                                        i.value = Array.isArray(f) ? f : [ f ];
                                    } else {
                                        if (q(a, "r")) throw v("Parameter " + u + " is required", "XTDE0050", a);
                                        if (q(a, "i")) throw v("Parameter " + u + " cannot be empty", "XTDE0700", a);
                                        0 === t.getChildElements(a).length && (i.value = []);
                                    }
                                }
                                if (null === i.value || void 0 === i.value) {
                                    var m = r.newContext(!0);
                                    m.tempOutputState = "variable", m.currentMode = {}, m.currentTemplate = null, m.currentComponent = i, 
                                    m.focus = E.Solo(r.fixed.globalContextItem);
                                    try {
                                        i.value = e, i.value = X(a, m).expand();
                                    } catch (t) {
                                        throw t instanceof v && o.QName.fromEQName(u).uri != G.saxon + "generated-variable" && (t.isGlobal = !0), 
                                        t;
                                    }
                                }
                            }
                            return E.ForArray(i.value);
                        },
                        homCheck: function(e, n) {
                            var r = new E.LookAhead(X(e, n)), o = r.peek();
                            if (null === o) return E.Empty;
                            var i = t.isNode(o), a = r.filter(function(n) {
                                if (t.isNode(n) != i) throw v("Cannot mix nodes and atomic values in the result of a path expression", "XPTY0018", e);
                                return !0;
                            });
                            return i ? t.inDocumentOrder(a) : a;
                        },
                        ifCall: function(e, n) {
                            var r, o, i, a, u, s = t.getAttributeAsQName(e, "name", !1);
                            if ("schedule-action" == s.local) {
                                var c = 2 == t.getChildElements(e).length, l = 4 == t.getChildElements(e).length;
                                if (t.getChildElements(e).length > 4) throw v("Only attributes @wait, @document and @http-request are available on ixsl:schedule-action in this version of Saxon-JS", "SXJS0002", e);
                                r = X(e, n).next().toNumber(), a = c ? null : L(e, n).next(), u = l ? Z(t.getChildElements(e)[3], n).next() : null;
                                var m = null;
                                (o = n.newContext(!0)).clearGrouping();
                                var p = t.getChildElements(e)[c ? 1 : 2], h = Y(p, n, "template"), d = h.actor;
                                if (null === u && (n.noCurrentFocus() || (o.focus = new E.Tracker(new E.Singleton(n.getCurrentFocus())), 
                                o.focus.next()), o.currentMergeGroup = null, o.currentComponent = h, o.tempOutputState = !1, 
                                ht(h.actor, o), b(p, n, o)), i = function() {
                                    X(d, o).expand();
                                }, null !== u) {
                                    var g = function(t) {
                                        o.focus = new E.Tracker(new E.Singleton(t)), o.focus.next(), o.currentMergeGroup = null, 
                                        o.currentComponent = h, o.tempOutputState = !1, ht(h.actor, o), b(p, n, o), i();
                                    };
                                    m = f.getPlatform().makeHttpRequest(u, g, r);
                                } else if (null !== a) {
                                    var y = a.toString().split(" "), x = y.map(function(t) {
                                        return f.getPlatform().resolveUri(t, w.staticBaseUri(e, n));
                                    }), S = f.getPlatform().addMultipleXml(x, n.fixed.documentPool, i, r);
                                    m = 1 === y.length ? S[x[0]] : S;
                                } else 0 !== r && setTimeout(i, r);
                                return m ? E.Singleton(m) : E.Empty;
                            }
                            var N = t.getChildElements(e).map(function(t, e) {
                                return Z(t, n);
                            });
                            return D(s.uri, s.local, N, n, e);
                        },
                        indexedFilter: function(t, e) {
                            var n = e.newContext(!1);
                            n.focus = E.Tracker(X(t, e));
                            var r = it(t), o = function() {
                                return x(r(n));
                            };
                            return n.focus.filter(o);
                        },
                        indexedFilter2: function(t, e) {
                            var n = J(t, "base"), r = J(t, "use"), o = J(t, "search"), a = i.allocateCodedComparer(t.comp, e), u = e.newContext(!1);
                            u.focus = E.Tracker(Z(n, e));
                            var s = Z(o, e).expand(), c = function() {
                                var t = Z(r, u);
                                return i.gc(t, s, "=", a).next().toBoolean();
                            };
                            return u.focus.filter(c);
                        },
                        indexedLookup: function(t, e) {
                            return i.generalComparison(t, e, "=");
                        },
                        inlineFn: function(t) {
                            R("inline function", t);
                        },
                        instance: function(t, e) {
                            var n = {
                                "*": {
                                    min: 0,
                                    max: 1 / 0
                                },
                                "+": {
                                    min: 1,
                                    max: 1 / 0
                                },
                                "?": {
                                    min: 0,
                                    max: 1
                                },
                                "\xb0": {
                                    min: 0,
                                    max: 0
                                },
                                1: {
                                    min: 1,
                                    max: 1
                                }
                            }, r = X(t, e), o = t.getAttribute("of");
                            if ("empty-sequence()" == o) return E.oneBoolean(null === r.next());
                            var i = o.charAt(o.length - 1), a = "*+?\xb0".indexOf(i) >= 0, u = n[a ? i : "1"];
                            a && (o = o.substring(0, o.length - 1));
                            for (var s, c = new Function("item", t.getAttribute("jsTest")), l = 0; null !== (s = r.next()); ) if (++l > u.max || !c(s)) return E.oneBoolean(!1);
                            return E.oneBoolean(l >= u.min);
                        },
                        int: function(t) {
                            var e = t.getAttribute("val");
                            return E.Singleton(o.integer.fromString(e));
                        },
                        intersect: function(e, n) {
                            var r = X(e, n), o = L(e, n);
                            return E.Intersect(r, o, t.compareDocumentOrder);
                        },
                        intRangeTest: function(e, n) {
                            var r = X(e, n), o = t.getChildElements(e), i = Z(o[1], n).next(), a = Z(o[2], n).next();
                            if (!i || !a) return E.oneBoolean(!1);
                            var u = i.toNumber(), s = a.toNumber(), c = r.some(function(t) {
                                var e = t.value;
                                return e >= u && e <= s;
                            });
                            return E.oneBoolean(c);
                        },
                        is: function(e, n) {
                            return E.Singleton(F(e, n, function(e, n) {
                                return o.boolean.fromBoolean(t.isSameNode(e, n));
                            }));
                        },
                        isLast: function(t, e) {
                            return E.oneBoolean(e.focus.position == e.focus.last() == ("1" == t.getAttribute("test")));
                        },
                        iterate: function(e, r) {
                            t.getChildElements(t.getChildElements(e)[1]).forEach(function(t) {
                                Z(t, r);
                            });
                            var o = r.newContext(!1);
                            o.focus = E.Tracker(X(e, r)), o.currentTemplate = null;
                            for (var i, a = J(e, "action"), u = J(e, "on-completion"), s = [], c = !1; null !== (i = o.focus.next()); ) {
                                var l = o.newContext(!1);
                                l.focus.current = i;
                                var f = w.evaluate(a, l);
                                if (Array.prototype.push.apply(s, f.expand()), s[s.length - 1] instanceof n) {
                                    var m = s.pop();
                                    Array.prototype.push.apply(s, m.content), c = !0;
                                    break;
                                }
                                o.localVars = l.localVars;
                            }
                            return c || null === u || Array.prototype.push.apply(s, w.evaluate(u, o).expand()), 
                            E.ForArray(s);
                        },
                        javaCall: function(e, n) {
                            var r = t.getAttributeAsQName(e, "name", !1), o = t.getChildElements(e).map(function(t, e) {
                                return Z(t, n);
                            });
                            return D(r.uri, r.local, o, n, e);
                        },
                        lastOf: function(t, e) {
                            var n = E.LookAhead(X(t, e));
                            return n.filter(function() {
                                return null === n.peek();
                            });
                        },
                        let: function(t, e) {
                            var n = e.tempOutputState;
                            e.tempOutputState = "variable";
                            var r = X(t, e).expand();
                            e.tempOutputState = n;
                            var o = parseInt(t.getAttribute("slot"), 10);
                            return e.localVars[o] = r, L(t, e);
                        },
                        literal: s,
                        lookup: function(t, e) {
                            for (var n, i = X(t, e), a = [], u = L(t, e).expand(), s = function(e) {
                                return function(n) {
                                    if (!o.integer.matches(n)) throw new v("Array lookup key must be of type xs:integer; supplied value is " + r(n), "XPTY0004", t);
                                    var i = n.toNumber();
                                    if (i < 1 || i > e.length) throw new v("Array index (" + i + ") out of bounds (1 to " + e.length + ")", "FOAY0001", t);
                                    a = a.concat(e[i - 1]);
                                };
                            }, c = function(t) {
                                a = a.concat(n.get(t));
                            }; null !== (n = i.next()); ) if (w.isArray(n)) {
                                var l = s(n.value);
                                u.forEach(l);
                            } else {
                                if (!w.isMap(n)) throw new v("The source for a lookup operator (?) must be of type array() or map(); supplied value is " + r(n), "XPTY0004", t);
                                u.forEach(c);
                            }
                            return E.ForArray(a);
                        },
                        lookupAll: function(t, e) {
                            for (var n, o = X(t, e), i = [], a = function(t) {
                                i = i.concat(n.get(t));
                            }, u = function(t) {
                                i = i.concat(t);
                            }; null !== (n = o.next()); ) if (w.isArray(n)) n.value.forEach(u); else {
                                if (!w.isMap(n)) throw new v("The source for a lookup operator ('?') must be of type array() or map(); supplied value is " + r(n), "XPTY0004", t);
                                n.keys().forEach(a);
                            }
                            return E.ForArray(i);
                        },
                        map: function(e, n) {
                            var r = new d(), o = null;
                            return t.getChildElements(e).forEach(function(t) {
                                null === o ? o = Z(t, n).next() : (r.inSituPut(o, Z(t, n).expand()), o = null);
                            }), E.Singleton(r);
                        },
                        merge: function(t, e) {
                            return k.merge(t, e);
                        },
                        mergeAdj: function(e, n) {
                            function r(e) {
                                return e instanceof Node && e.nodeType == t.TEXT_NODE;
                            }
                            for (var o, i = [], a = X(e, n), u = !1; null !== (o = a.next()); ) {
                                var s = r(o);
                                s && "" === o.nodeValue || (u && s ? i.push(n.resultDocument.createTextNode(i.pop().nodeValue + o.nodeValue)) : (u = s, 
                                i.push(o)));
                            }
                            return E.ForArray(i);
                        },
                        message: function(t, e) {
                            var n = "", r = e.tempOutputState;
                            e.tempOutputState = "variable", X(t, e).mapOneToMany(p).forEachItem(function(t) {
                                n += " " + t.toString();
                            });
                            var o = Z(J(t, "terminate"), e).next(), i = Z(J(t, "error"), e).next();
                            if ("yes" == o || "true" == o || "1" == o) throw v("Terminated with " + n, i.toString(), t);
                            if ("no" != o && "false" != o && "0" != o) throw v("The terminate attribute of xsl:message must be yes|no|true|false|1|0", "XTDE0030", t);
                            return e.fixed.options.deliverMessage && e.fixed.options.deliverMessage(n), e.tempOutputState = r, 
                            E.Empty;
                        },
                        minus: function(t, e) {
                            return X(t, e).mapOneToOne(function(t) {
                                return t.negate();
                            });
                        },
                        namespace: function(t, e) {
                            var n = X(t, e).next().toString(), r = L(t, e).next().toString();
                            if ("" !== n && !O.isNCName(n)) throw v("Prefix " + n + " is not an NCName", "XTDE0920", t);
                            if ("" === r) throw v("Namespace is zero-length", "XTDE0930", t);
                            if ("xmlns" == n || "http://www.w3.org/2000/xmlns/" == r) throw v("Disallowed prefix/namespace " + r, "XTDE0835", t);
                            return E.Singleton(new u(n, r));
                        },
                        nextIteration: function(e, n) {
                            var r, o = t.getChildElements(e, "withParam"), i = [];
                            for (r in o.forEach(function(t) {
                                r = parseInt(t.getAttribute("slot"), 10), i[r] = X(t, n).expand();
                            }), i) n.localVars[r] = i[r];
                            return E.Empty;
                        },
                        nextMatch: function(t, e) {
                            var n = e.currentMode.mode;
                            if (!n) throw v("next-match: no current mode", "XTDE0560", t);
                            if (!e.currentTemplate) throw v("next-match: no current template", "XTDE0560", t);
                            if (e.noCurrentFocus()) throw v("next-match: no context item", "XTDE0560", t);
                            var r = e.newContext(!0);
                            return r.currentComponent = e.currentMode, b(t, e, r), n.nextMatch(r);
                        },
                        nodeNum: function(t, e) {
                            return M.nodeNum(t, e);
                        },
                        numSeqFmt: function(t, e) {
                            return M.numSeqFmt(t, e);
                        },
                        onEmpty: s,
                        onNonEmpty: s,
                        or: function(t, e) {
                            return E.oneBoolean(x(X(t, e)) || x(L(t, e)));
                        },
                        param: function(e, n) {
                            var r = t.getAttributeAsEQName(e, "name"), o = parseInt(e.getAttribute("slot"), 10), i = (q(e, "t") ? n.tunnelParams : n.localParams)[r];
                            if (!i) {
                                var a = J(e, "select");
                                if (!a || q(e, "r")) throw v("Required parameter $" + r + " not supplied", "XTDE0700", e);
                                var u = n.tempOutputState;
                                n.tempOutputState = "xsl:param", i = Z(a, n).expand(), n.tempOutputState = u;
                            }
                            if (!Array.isArray(i)) throw v("Param value of $" + r + " is not an array", "SXJS0004", e);
                            n.localVars[o] = i;
                            var s = J(e, "conversion");
                            if (null !== s) try {
                                n.localVars[o] = Z(s, n).expand();
                            } catch (t) {
                                throw v("Supplied value for parameter $" + r + " could not be converted to required type", "XTTE0590", e);
                            }
                            return E.Empty;
                        },
                        precedes: function(e, n) {
                            return E.Singleton(F(e, n, function(e, n) {
                                return o.boolean.fromBoolean(t.compareDocumentOrder(e, n) < 0);
                            }));
                        },
                        procInst: function(t, e) {
                            var n = X(t, e).next().value, r = L(t, e), o = e.resultDocument.createProcessingInstruction(n, mt(r).replace(/\?>/g, "? >").replace(/^\s+/, ""));
                            return E.Singleton(o);
                        },
                        qName: function(t) {
                            var e = t.getAttribute("pre"), n = t.getAttribute("uri"), r = t.getAttribute("loc");
                            return E.Singleton(o.QName.fromParts(e, n, r));
                        },
                        range: function(t) {
                            return N(o.integer.fromString(t.getAttribute("from")), o.integer.fromString(t.getAttribute("to")));
                        },
                        resultDoc: function(t, e) {
                            if (e.tempOutputState) throw v("Cannot call xsl:result-document while evaluating " + e.tempOutputState, "XTDE1480", t);
                            var n = J(t, "href"), r = null === n ? "" : Z(n, e).next().toString(), o = !1, i = !1;
                            t.getAttribute("local").split(/\r?\n/).forEach(function(t) {
                                /^method=/.test(t) && /interactiveXSLT\}/.test(t) && ((o = /interactiveXSLT\}replace-content$/.test(t)) || /interactiveXSLT\}append-content$/.test(t) || (i = t));
                            });
                            var a, u = J(t, "Q{}method");
                            if (u) {
                                var s = Z(u, e).next().toString(), c = Q(u, s, !1);
                                c.uri === G.ixsl && "replace-content" === c.local ? o = !0 : c.uri === G.ixsl && "append-content" === c.local || (i = s);
                            }
                            var l = "#" == r.charAt(0) || "?." == r, f = U(J(t, "content"), e, l), m = function(t, e) {
                                g.child(t).forEachItem(function(t) {
                                    e.appendChild(t);
                                });
                            };
                            if ("" === r) return E.Singleton(f);
                            if (l) return (a = "?." === r ? e.getCurrentFocus() : window.document.getElementById(r.substring(1))) ? "?." === r && a.ownerDocument !== window.document ? (z("Result document href=" + r + ": current node is not in HTML page", 1), 
                            E.Empty) : (i && z("Result document method not recognized (defaulting to append-content): " + i, 1), 
                            o && (a.innerHTML = ""), m(f, a), window.document._saxonIndexes = {}, E.Empty) : (z("Result document href=" + r + ": no such node", 1), 
                            E.Empty);
                            if (e.fixed.resultDocUris[r]) throw v("A result document with URI " + r + " has already been created", "XTDE1490", t);
                            return e.fixed.resultDocUris[r] = !0, e.fixed.options.deliverResultDocument(r, f), 
                            E.Empty;
                        },
                        root: function(e, n) {
                            if (n.noCurrentFocus()) throw v("Focus is absent", "XPDY0002", e);
                            var r = n.getCurrentFocus();
                            if (!t.isNode(r)) throw v("Context item for '/' must be a node", "XPTY0020", e);
                            var o = t.ownerDocument(r);
                            if (o.nodeType != t.DOCUMENT_NODE && o.nodeType != t.DOCUMENT_FRAGMENT_NODE) throw v("Root node for '/' must be a document node", "XPDY0050", e);
                            return E.Singleton(t.ownerDocument(r));
                        },
                        sequence: s,
                        slash: function(t, e) {
                            var n = e.newContext(!1);
                            n.focus = E.Tracker(X(t, e));
                            var r = it(t), o = function() {
                                return r(n);
                            };
                            return n.focus.mapOneToMany(o);
                        },
                        some: function(t, e) {
                            var n = parseInt(t.getAttribute("slot"), 10), r = X(t, e), o = it(t);
                            return E.oneBoolean(r.some(function(t) {
                                return e.localVars[n] = [ t ], x(o(e));
                            }));
                        },
                        sort: i.sortSequence,
                        str: function(t) {
                            var e = t.getAttribute("val");
                            return E.oneString(e);
                        },
                        subscript: function(t, e) {
                            var n = X(t, e), r = L(t, e).next().value;
                            if (n instanceof E.ForArray) {
                                var o = n.expand()[r - 1];
                                return void 0 === o && (o = null), E.Singleton(o);
                            }
                            var i = n.mapOneToOne(function(t, e) {
                                return e + 1 == r ? t : null;
                            }).next();
                            return E.Singleton(i);
                        },
                        supplied: function(t, e) {
                            var n = parseInt(t.getAttribute("slot"), 10), r = e.localVars[n];
                            return E.ForArray(r);
                        },
                        switch: function(e, n) {
                            var r = n.fixed.options.saxonVersion;
                            r && "9.7.0" == r.substring(0, 5) && parseInt(r.split(".")[3], 10) < 15 && B("9.7.0.15", e);
                            var i = X(e, n).next();
                            if (null === i) return E.oneBoolean(!1);
                            i = o.base64Binary.cast(i);
                            for (var a = t.getChildElements(e, "case"), u = 0; u < a.length; u++) {
                                if (X(a[u], n).next().equals(i)) return L(a[u], n);
                            }
                            return Z(J(e, "default"), n);
                        },
                        tail: function(t, e) {
                            var n = parseInt(t.getAttribute("start"), 10) - 1;
                            return X(t, e).filter(function(t) {
                                return n-- <= 0;
                            });
                        },
                        tailCallLoop: function(t, e) {
                            return X(t, e);
                        },
                        to: function(t, e) {
                            var n = X(t, e).next(), r = L(t, e).next();
                            return null === n || null === r || n.compareTo(r) > 0 ? E.Empty : N(n, r);
                        },
                        treat: function(t, e) {
                            var n = new Function("item", t.getAttribute("jsTest"));
                            return X(t, e).mapOneToOne(function(e) {
                                if (n(e)) return e;
                                var o = c(t.getAttribute("diag"));
                                throw v("Required item type of " + o.required + " is " + t.getAttribute("as") + "; supplied value is " + r(e), o.code, t);
                            });
                        },
                        true: function() {
                            return E.oneBoolean(!0);
                        },
                        try: function(e, n) {
                            try {
                                return E.ForArray(X(e, n).expand());
                            } catch (u) {
                                if (u instanceof v && !u.isGlobal) {
                                    n.currentError = u, null === u.compiledLineNr && u.setExpr(e);
                                    for (var r, i = o.QName.fromParts("", "http://www.w3.org/2005/xqt-errors", u.code), a = E.ForArray(t.getChildElements(e, "catch")); null !== (r = a.next()); ) {
                                        if (new Function("q", "return " + r.getAttribute("test") + ";")(i)) return X(r, n);
                                    }
                                    throw u;
                                }
                                throw u instanceof v ? u : (Error.dumpStack && Error.dumpStack(), u);
                            }
                        },
                        ufCall: function(e, n) {
                            var r = Y(e, n, "function"), o = r.actor, i = t.getChildElements(e), a = n.newContext(!0);
                            return a.currentComponent = r, a.clearGrouping(), a.tempOutputState = "function", 
                            a.currentMode = {}, a.currentTemplate = null, a.focus = null, a.localVars = i.map(function(t) {
                                return Z(t, n).expand();
                            }), a.localParams = {}, Z(J(o, "body"), a);
                        },
                        union: function(e, n) {
                            var r = X(e, n), o = L(e, n);
                            return E.Union(r, o, t.compareDocumentOrder);
                        },
                        useAS: function(t, e) {
                            var n = Y(t, e, "attributeSet"), r = n.actor, o = e.newContext(!0);
                            return o.tempOutputState = "attribute set", o.currentComponent = n, X(r, o);
                        },
                        valueOf: function(t, e) {
                            var n = X(t, e), r = e.resultDocument.createTextNode(mt(n)), o = t.hasAttribute("flags") ? t.getAttribute("flags") : "";
                            return E.Singleton(T(r, o));
                        },
                        varRef: function(t, e) {
                            var n = parseInt(t.getAttribute("slot"), 10), r = e.localVars[n];
                            return E.ForArray(r);
                        },
                        vc: function(t, e) {
                            function n(t) {
                                return null === t ? null : o.untypedAtomic.matches(t) ? o.string.cast(t) : t;
                            }
                            var r = t.getAttribute("op"), a = t.getAttribute("onEmpty"), u = X(t, e), s = L(t, e), c = n(u.next()), l = n(s.next());
                            if (null === c || null === l) return a ? E.oneBoolean("1" == a) : E.Empty;
                            if (null !== u.next() || null !== s.next()) throw v("Value comparison only applicable to single values", "XPTY0004", t);
                            if (o.isSubtype(c.type, "numeric") && isNaN(c.value) || o.isSubtype(l.type, "numeric") && isNaN(l.value)) return E.oneBoolean("ne" == r);
                            var f = i.allocateCodedComparer(t.getAttribute("comp"), e);
                            return "=" == r || "eq" == r || "!=" == r || "ne" == r ? E.oneBoolean(i.testEquality(r, f.equals(c, l))) : E.oneBoolean(i.testComparison(r, f.compare(c, l)));
                        },
                        xslNumber: function(t, e) {
                            return M.xslNumber(t, e);
                        }
                    };
                    function s(e, n) {
                        var r = t.getChildElements(e);
                        return E.Block(r, n);
                    }
                    function c(t) {
                        var e = t.split("|"), n = e[0], r = e[1], o = "" === e[2] ? "XPTY0004" : e[2], i = e[3], a = [ "ancestor", "ancestor-or-self", "attribute", "child", "descendant", "descendant-or-self", "following", "following-sibling", "namespace", "parent", "preceding", "preceding-sibling", "self", "preceding-or-ancestor" ], u = function(t) {
                            switch (t) {
                              case 1:
                                return "first";

                              case 2:
                                return "second";

                              case 3:
                                return "third";

                              default:
                                return t + "th";
                            }
                        };
                        return {
                            required: function() {
                                switch (parseInt(n, 10)) {
                                  case 0:
                                    return u(+r + 1) + " argument of " + ("" === i ? "anonymous function" : i + "()");

                                  case 1:
                                    return u(+r + 1) + " operand of '" + i + "'";

                                  case 9:
                                    return "operand of '-'";

                                  case 2:
                                    return "value in '" + i + "' expression";

                                  case 3:
                                    return "saxon:context-item" == i ? "context item" : "value of variable $" + i;

                                  case 4:
                                    var t = i.split("/");
                                    return "@" + t[1] + " attribute of " + ("LRE" == t[0] ? "a literal result element" : t[0]);

                                  case 5:
                                    return "result of call to " + ("" === i ? "anonymous function" : "function " + i);

                                  case 7:
                                    return "result of template " + i;

                                  case 6:
                                    return u(+r + 1) + " sort key";

                                  case 8:
                                    return "value of parameter $" + i;

                                  case 11:
                                    return "value of the grouping key";

                                  case 12:
                                    return "result of evaluate()";

                                  case 13:
                                    return "the context item";

                                  case 14:
                                    return "the context item for the " + a[r] + " axis";

                                  case 15:
                                    return "the value of the " + i + " option";

                                  case 17:
                                    return "document-order sorter";

                                  default:
                                    return "";
                                }
                            }(),
                            code: o
                        };
                    }
                    function l(t, e, n, r, i) {
                        if (!n.match(/^[smijxq]*$/)) throw v("Illegal flags for regular expression: " + n, "FORX0001");
                        var a = O.prepareRegex(e, n + "g", t);
                        if (!r && a.test("")) throw v("Regular expression matches zero-length string", "FORX0003");
                        for (var u, s = [], c = 0, l = 0; null !== (u = a.exec(t)); ) if ((u.index > c || u.index == c && i) && s.push({
                            matching: !1,
                            string: o.string.fromString(t.substring(c, u.index))
                        }), s.push({
                            matching: !0,
                            groups: u,
                            string: o.string.fromString(u[0])
                        }), c = a.lastIndex, 0 === u[0].length && a.lastIndex++, l++ > 1e3) throw v("looping???", "SXJS0004");
                        return t.length > c && s.push({
                            matching: !1,
                            string: o.string.fromString(t.substring(c, t.length))
                        }), s;
                    }
                    function m(t) {
                        return t.replace(/[ \n\r\t]+/g, " ").replace(/^[ ]|[ ]$/g, "");
                    }
                    function p(e) {
                        if (t.isNode(e)) return E.Singleton(y(e));
                        if (gt(e)) return E.Join(e.value.map(function(t) {
                            return E.ForArray(t);
                        })).mapOneToMany(p);
                        if (vt(e)) throw v("Cannot atomize a map", "FOTY0013");
                        return E.Singleton(e);
                    }
                    function y(e) {
                        var n = o.string.fromString, r = o.untypedAtomic.fromString;
                        switch (e.nodeType) {
                          case t.DOCUMENT_NODE:
                            return r(e.documentElement.textContent);

                          case t.DOCUMENT_FRAGMENT_NODE:
                          case t.ELEMENT_NODE:
                          case t.TEXT_NODE:
                            return r(e.textContent || "");

                          case t.ATTRIBUTE_NODE:
                            return r(e.value);

                          case t.COMMENT_NODE:
                            return n(e.textContent);

                          case t.PROCESSING_INSTRUCTION_NODE:
                            return n(e.data);

                          case t.NAMESPACE_NODE:
                            return n(e.uri);

                          default:
                            throw v("Unknown node type " + e.nodeType, "SXJS0003");
                        }
                    }
                    function x(e) {
                        var n = e.next();
                        function r(t) {
                            throw v("Effective boolean value is not defined for " + t, "FORG0006");
                        }
                        function i() {
                            if (null === e.next()) return !0;
                            r("an atomic sequence of length > 1");
                        }
                        if (null === n) return !1;
                        if (t.isNode(n)) return !0;
                        if (o.boolean.matches(n)) return i() && n.toBoolean();
                        if (o.numeric.matches(n)) {
                            var a = n.toNumber();
                            return i() && !isNaN(a) && 0 !== a;
                        }
                        if (o.string.matches(n) || o.untypedAtomic.matches(n) || o.anyURI.matches(n)) return i() && 0 !== n.toString().length;
                        r("type " + n.type);
                    }
                    function S(t) {
                        return "untypedAtomic" === t.type ? o.double.cast(t) : t;
                    }
                    function N(t, e) {
                        var n = _["i+i"], r = o.integer.fromNumber(1);
                        return E.Stepping(t, function(t) {
                            var o = n(t, r);
                            return o.compareTo(e) > 0 ? null : o;
                        });
                    }
                    function b(e, n, r) {
                        var o = t.getChildElements(e, "withParam"), i = [ {}, {} ];
                        for (var a in n.tunnelParams) n.tunnelParams.hasOwnProperty(a) && (i[1][a] = n.tunnelParams[a]);
                        var u = n.tempOutputState;
                        n.tempOutputState = "template parameter", o.forEach(function(e) {
                            var r = t.getAttributeAsEQName(e, "name"), o = q(e, "t") ? 1 : 0;
                            i[o][r] = X(e, n).expand();
                        }), n.tempOutputState = u, r.localParams = i[0], r.tunnelParams = i[1];
                    }
                    function T(t, e) {
                        return e && e.indexOf("l") >= 0 && (t._saxonIsLocal = !0), t;
                    }
                    function A(t, e, n) {
                        var r, i, a = "compAtt" == t.tagName, u = O.trim(Z(J(t, "name"), e).next().toString()), s = J(t, "namespace");
                        function c() {
                            throw new v((a ? "Attribute" : "Element") + " name '" + u + "' is not a lexical QName", a ? "XTDE0850" : "XTDE0820", t);
                        }
                        if (null === s) {
                            if (a && "xmlns" == u) throw v("Attribute must not be named xmlns", "XTDE0855", t);
                            try {
                                i = Q(t, u, !a);
                            } catch (e) {
                                if (e instanceof v) {
                                    if ("XTDE0290" === e.code) throw new v((a ? "Attribute" : "Element") + " name '" + u + "' has an unbound prefix", a ? "XTDE0860" : "XTDE0830", t);
                                    "FORG0001" === e.code && c();
                                }
                                throw e;
                            }
                            r = i.uri;
                        } else if (r = Z(s, e).next().value, a) if ("" === r && u.includes(":")) u = u.replace(/^.*:/, ""), 
                        i = o.QName.fromParts("", r, u); else if (u.includes(":")) {
                            var l = u.split(":");
                            if ("" === l[0] || "" === l[1]) throw v((a ? "Attribute" : "Element") + " name '" + u + "' is not a lexical QName", a ? "XTDE0850" : "XTDE0820", t);
                            i = o.QName.fromParts(l[0], r, l[1]);
                        } else i = o.QName.fromParts("", r, u);
                        if ("http://www.w3.org/2000/xmlns/" === r) throw new v("Disallowed namespace " + r, a ? "XTDE0865" : "XTDE0835", t);
                        return a ? E.Singleton(n(i)) : E.Singleton(n(r, u));
                    }
                    function F(t, e, n) {
                        var r = X(t, e).next(), o = L(t, e).next();
                        return null === r || null === o ? null : n(r, o);
                    }
                    function I(t) {
                        if ("xs:" == t.substring(0, 3)) {
                            var e = o[t.substring(3)];
                            if (!e) throw v("Unimplemented type " + t, "SXJS0002");
                            return e;
                        }
                        throw v("Unknown type " + t, "SXJS0003");
                    }
                    function P(e, n) {
                        if (null !== n.fixed.staticBaseURI) return n.fixed.staticBaseURI;
                        for (var r = e; ;) {
                            if (r.hasAttribute("baseUri")) return r.getAttribute("baseUri");
                            if (null === (r = t.xdmParentNode(r)) || r.nodeType != t.ELEMENT_NODE) return null;
                        }
                    }
                    function U(e, n, r) {
                        var o = n.resultDocument.createDocumentFragment(), i = t.obtainDocumentNumber(o);
                        i._saxonBaseUri = P(e, n);
                        var a = n.newContext(!1);
                        return r && (a.resultDocument = window.document), pt(i, Z(e, a), a), i;
                    }
                    function R(t, e) {
                        throw v("The " + t + " construct is not implemented in Saxon-JS", "SXJS0002", e);
                    }
                    function B(t, e) {
                        throw v("The SEF is out of date, regenerate using Saxon-EE " + t + " or later", "SXJS0002", e);
                    }
                    function X(e, n) {
                        var r = t.getChildElements(e)[0];
                        if (!r) throw v("Expr has no children", "SXJS0004", e);
                        return Z(r, n);
                    }
                    function L(e, n) {
                        return Z(t.getChildElements(e)[1], n);
                    }
                    function J(e, n) {
                        var r, o = e.childNodes;
                        for (r = 0; r < o.length; r++) {
                            var i = o[r];
                            if (i.nodeType == t.ELEMENT_NODE && i.getAttribute("role") == n) return i;
                        }
                        return null;
                    }
                    function q(t, e) {
                        return t.hasAttribute("flags") && t.getAttribute("flags").indexOf(e) >= 0;
                    }
                    var G = {
                        xsl: "http://www.w3.org/1999/XSL/Transform",
                        fn: "http://www.w3.org/2005/xpath-functions",
                        math: "http://www.w3.org/2005/xpath-functions/math",
                        map: "http://www.w3.org/2005/xpath-functions/map",
                        array: "http://www.w3.org/2005/xpath-functions/array",
                        xml: "http://www.w3.org/XML/1998/namespace",
                        xs: "http://www.w3.org/2001/XMLSchema",
                        xsi: "http://www.w3.org/2001/XMLSchema-instance",
                        err: "http://www.w3.org/2005/xqt-errors",
                        ixsl: "http://saxonica.com/ns/interactiveXSLT",
                        js: "http://saxonica.com/ns/globalJS",
                        saxon: "http://saxon.sf.net/"
                    };
                    function $(e) {
                        var n = {}, r = t.getInheritedAttribute(e, "ns");
                        if (null !== r) for (var o = r.split(" "), i = 0; i < o.length; i++) {
                            var a = o[i].split("=");
                            "~" == a[1] ? n[a[0]] = G[a[0]] : n[a[0]] = a[1];
                        }
                        return n;
                    }
                    function j(t, e) {
                        var n = $(t);
                        return function(t) {
                            if ("" === t && !e) return "";
                            var r = n[t];
                            if (r) return r;
                            if ("" === t) return "";
                            throw v("Undeclared prefix: " + t, "XTDE0290");
                        };
                    }
                    function Q(t, e, n) {
                        return o.QName.fromString(e, j(t, n));
                    }
                    function K(t) {
                        if (void 0 !== t) return V(t, "module", 20) + "#" + V(t, "line", 10);
                    }
                    function V(e, n, r) {
                        if (null !== e && r > 0) {
                            var o = t.getAttribute(e, n);
                            return null !== o && "" !== o ? o : V(e.parentNode, n, r - 1);
                        }
                    }
                    function H(t) {
                        throw Error.dumpStack && Error.dumpStack(), v("Internal error: " + t, "SXJS0004");
                    }
                    function Y(t, e, n) {
                        var r, o, i = t.getAttribute("bSlot");
                        if (i ? (i = parseInt(i), o = e.currentComponent.bindings[i], r = e.fixed.components[o]) : (o = t.getAttribute("coId")) ? r = e.fixed.components[parseInt(o)] : H("No binding slot or component Id for component"), 
                        r || H("Target component not found"), "ABSENT" === r.visibility) throw v("Cannot invoke absent component " + r.actor.tagName + " " + r.actor.getAttribute("name"), "XTDE3052");
                        return n && r.actor.tagName != n && H("Expected " + n + ", found " + r.actor.tagName), 
                        r;
                    }
                    function W(t, e) {
                        for (var n = t.parentNode; "package" != n.tagName; ) n = n.parentNode;
                        return e.fixed.packages[n.getAttribute("name")];
                    }
                    var Z = function(t, e) {
                        return 10 == f.getLogLevel() ? nt(t, e) : rt(t, e);
                    }, tt = 0, et = "                       ";
                    function nt(e, n) {
                        n || H("No context supplied!"), tt++, et.length < tt && (et += et);
                        var o = e.hasAttribute("name") ? " name='" + e.getAttribute("name") + "'" : "";
                        z(et.substring(0, tt) + "<" + e.tagName + " line='" + t.getInheritedAttribute(e, "line") + "'" + o + " focus='" + (n.noCurrentFocus() ? "absent" : r(n.getCurrentFocus())) + "'>");
                        var i = rt(e, n);
                        return "object" == typeof i && "next" in i || H("Result of " + e.tagName + " is not an iterator"), 
                        z(et.substring(0, tt) + "</" + e.tagName + ">"), tt--, i;
                    }
                    function rt(t, e) {
                        var n = a[t.tagName];
                        n || H("Unknown expr: " + t.tagName);
                        try {
                            return n(t, e);
                        } catch (n) {
                            throw n instanceof v ? (e.currentError = n, null === n.compiledLineNr && null === n.xsltLineNr && (n.setExpr(t), 
                            n.xsltLineNr), n) : n;
                        }
                    }
                    function ot(t) {
                        var e = a[t.tagName];
                        return e || H("Unknown expr: " + t.tagName), function(n) {
                            try {
                                return e(t, n);
                            } catch (e) {
                                throw e instanceof v && (n.currentError = e, null === e.compiledLineNr && e.setExpr(t)), 
                                e;
                            }
                        };
                    }
                    function it(e) {
                        return ot(t.getChildElements(e)[1]);
                    }
                    function at(t, e) {
                        return null === t ? E.Empty : Z(t, e);
                    }
                    function ut(t) {
                        if (t < 1 || t > 55295 && t < 57344 || t > 65533 && t < 65536 || t > 1114111) throw v("Invalid XML character 0x" + t.toString(16), "FOCH0001");
                    }
                    function st(t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t.charCodeAt(e);
                            if (n >= 55296 && n <= 56319) return !0;
                        }
                        return !1;
                    }
                    function ct(t) {
                        var e = "";
                        return t.forEach(function(t) {
                            return ut(t), e += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + (t - 65536 >> 10)) + String.fromCharCode(56320 + (t - 65536 & 1023));
                        }), e;
                    }
                    function lt(t) {
                        for (var e = [], n = 0; n < t.length; n++) {
                            var r = t.charCodeAt(n);
                            e.push(r >= 55296 && r <= 56319 ? 1024 * (r - 55296) + (t.charCodeAt(++n) - 56320) + 65536 : r);
                        }
                        return e;
                    }
                    function ft(t, e) {
                        function n(t, e) {
                            return o.decimal.matches(t) ? "decimal" == e || "float" == e || "double" == e : !!o.float.matches(t) && ("float" == e || "double" == e);
                        }
                        if (o[e].matches(t)) return t;
                        if (n(t, e)) return o[e].cast(t);
                        throw v("Incompatible operands: " + t.type + " and " + e, "XPTY0004");
                    }
                    function mt(t) {
                        var e = "";
                        return t.forEachItem(function(t) {
                            "" !== e && (e += " "), e += t.toString();
                        }), e;
                    }
                    function pt(e, n, o) {
                        o || H("No context in makeComplexContent for " + r(e));
                        var i = !1, a = !1;
                        function s(n, r) {
                            function o(t) {
                                return t instanceof u ? "a namespace" : "an attribute";
                            }
                            if (r) throw v("Cannot create " + o(n) + " node after creating children", "XTDE0410");
                            if (e.nodeType == t.DOCUMENT_FRAGMENT_NODE || e.nodeType == t.DOCUMENT_NODE) throw v("Cannot add " + o(n) + " to a document node", "XTDE0410");
                        }
                        function c(e, n) {
                            var r = !!n._saxonIsLocal && n._saxonIsLocal;
                            if (gt(n)) n.value.forEach(function(t) {
                                t.forEach(function(t) {
                                    c(e, t);
                                });
                            }); else {
                                if (vt(n)) throw v("A map can't be a child of an XML node", "XPTY0004");
                                if (t.isNode(n) ? (a = !1, n.nodeType == t.TEXT_NODE) : (n = o.resultDocument.createTextNode((a ? " " : "") + n.toString()), 
                                a = !0), e.nodeType == t.ELEMENT_NODE || e.nodeType == t.DOCUMENT_FRAGMENT_NODE) if (t.isNSNode(n)) if (f.getPlatform().inBrowser && e instanceof HTMLElement) e.appendChild(e.ownerDocument.importNode(n, !0)); else {
                                    if (s(n, i), n.prefix == e.prefix && n.uri != e.namespaceURI) throw v("Saxon-JS restriction: namespace nodes in content clash with the element prefix", "SXJS0002");
                                    if ("" === n.prefix) {
                                        if ("" === e.namespaceURI) throw v("Cannot add a default namespace to a no-namespace element", "XTDE0440");
                                        if (e.hasAttributeNS("", "xmlns")) {
                                            if (e.getAttributeNS("", "xmlns") != n.uri) throw v("Cannot have two different default namespaces", "XTDE0430");
                                        } else f.getPlatform().inBrowser && e instanceof HTMLElement || e.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns", n.uri);
                                    } else {
                                        var u = "http://www.w3.org/2000/xmlns/", l = "xmlns:" + n.prefix, m = n.uri;
                                        if ("~" == n.uri && void 0 !== G[n.prefix] && (m = G[n.prefix]), e.hasAttributeNS(u, n.prefix) && e.getAttributeNS(u, n.prefix) != m) throw v("Cannot have two namespaces with the same prefix '" + n.prefix + "'", "XTDE0430");
                                        e.setAttributeNS(u, l, m);
                                    }
                                } else if (n.nodeType == t.ATTRIBUTE_NODE) {
                                    if (s(n, i), "" !== n.namespaceURI) {
                                        var p = n.name.split(":");
                                        if (2 != p.length || e.lookupNamespaceURI(p[0]) != n.namespaceURI) if (2 == p.length && null === e.lookupNamespaceURI(p[0])) e.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + p[0], n.namespaceURI); else for (var h = 2 == p.length ? p[0] : "ns"; ;) {
                                            if (null === e.lookupNamespaceURI(h)) {
                                                e.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + h, n.namespaceURI), 
                                                n.name = h + ":" + p[p.length - 1];
                                                break;
                                            }
                                            h += "_1";
                                        }
                                    }
                                    var d = "" === n.namespaceURI ? null : n.namespaceURI;
                                    e.setAttributeNS(d, n.name, n.value);
                                } else if (n.nodeType == t.TEXT_NODE) {
                                    if (n.nodeValue && "" !== n.nodeValue) {
                                        var y = e.lastChild;
                                        y && y.nodeType == t.TEXT_NODE ? y.nodeValue = y.nodeValue + n.nodeValue : e.appendChild(t.copyItem(n, o, ""));
                                    }
                                } else if (n.nodeType == t.DOCUMENT_NODE || n.nodeType == t.DOCUMENT_FRAGMENT_NODE) g.child(n).forEachItem(function(t) {
                                    c(e, t);
                                }); else {
                                    if (i = !0, !(f.getPlatform().inBrowser && o.resultDocument == window.document || n.nodeType != t.ELEMENT_NODE || f.getPlatform().inBrowser && n instanceof HTMLElement)) {
                                        var x = n.prefix || "", S = n.lookupNamespaceURI(x) || "", N = n.namespaceURI || "";
                                        S !== N && t.declareNS(n, x, N), !n.lookupNamespaceURI(null) && e.lookupNamespaceURI(null) && t.declareNS(n, "", "");
                                    }
                                    if (!r || f.getPlatform().inBrowser && e instanceof HTMLElement != n instanceof HTMLElement) n = t.copyItem(n, o, "c");
                                    e.appendChild(n), n._saxonIsLocal = !1;
                                } else {
                                    if (e.nodeType != t.DOCUMENT_NODE) throw v("Unknown parent node type " + e.nodeType, "SXJS0003");
                                    null !== n && (e.documentElement = n);
                                }
                            }
                        }
                        n.forEachItem(function(t) {
                            c(e, t);
                        });
                    }
                    function ht(t, e) {
                        function n(e) {
                            return "Context item for template " + t.getAttribute("name") + " must be " + e;
                        }
                        if (e.noCurrentFocus() && -1 == t.getAttribute("flags").indexOf("o")) throw v(n("supplied"), "XTTE3090", t);
                        e.noCurrentFocus() || -1 != t.getAttribute("flags").indexOf("s") || (e.focus = {});
                        var r = t.getAttribute("jsTest");
                        if (r && !e.noCurrentFocus() && !new Function("item", r)(e.getCurrentFocus())) throw v(n("instance of " + t.getAttribute("cxt")), "XTTE0590", t);
                    }
                    function dt(t) {
                        this.value = t;
                    }
                    function gt(t) {
                        return t instanceof dt;
                    }
                    function vt(t) {
                        return t instanceof d || t instanceof xt;
                    }
                    function yt(e, n, r, i, a) {
                        function u(e) {
                            return t.isNode(e) || o.untypedAtomic.matches(e) || o.string.matches(e) || o.boolean.matches(e) || o.double.matches(e);
                        }
                        function s(t, e) {
                            return null === t || u(t) ? t : Nt(t, e, a);
                        }
                        if (void 0 === r) return e;
                        if (Array.isArray(e)) {
                            if (!n(e.length)) throw v("Supplied value for parameter " + i + " has wrong cardinality", "XTTE0590");
                            return e.map(function(t) {
                                return s(r(t), !0);
                            });
                        }
                        return s(r(e));
                    }
                    function xt(t) {
                        this.value = t;
                    }
                    function St(t) {
                        this.value = t;
                    }
                    function Nt(t, e, n) {
                        function r(t, e) {
                            var n = new d();
                            for (var r in t) if (t.hasOwnProperty(r)) {
                                var o = Nt(t[r], e, !0);
                                n.inSituPut(Nt(r, e, !0), Array.isArray(o) ? o : [ o ]);
                            }
                            return n;
                        }
                        if (o.anyAtomicType.matches(t)) return t;
                        switch (typeof t) {
                          case "undefined":
                            return [];

                          case "string":
                            return o.string.fromString(t);

                          case "number":
                            return o.double.fromNumber(t);

                          case "boolean":
                            return o.boolean.fromBoolean(t);

                          case "function":
                            return new xt(t);

                          case "object":
                            if (h.isNode(t)) return t;
                            if (t instanceof Date) return o.dateTime.fromString(t.toISOString());
                            if (Array.isArray(t)) {
                                var i = [];
                                return e ? (t.forEach(function(t) {
                                    var e = Nt(t, !0, n), r = Array.isArray(e) ? e : [ e ];
                                    i.push(r);
                                }), new w.XdmArray(i)) : (t.forEach(function(t) {
                                    i.push(Nt(t, !0, n));
                                }), i);
                            }
                            return null === t ? [] : t instanceof St ? t.value : n ? r(t, e) : new xt(t);

                          default:
                            return t;
                        }
                    }
                    function bt(e, n, r) {
                        if (null === e) return null;
                        if (n && o.anyAtomicType.matches(e)) return e;
                        if (o.string.matches(e) || o.anyURI.matches(e) || o.duration.matches(e) || o.hexBinary.matches(e) || o.base64Binary.matches(e) || o.untypedAtomic.matches(e)) return e.toString();
                        if (o.numeric.matches(e)) return e.toNumber();
                        if (o.boolean.matches(e)) return e.toBoolean();
                        if (o.dateTime.matches(e) || o.date.matches(e) || o.dateTimeStamp.matches(e)) return e.toString();
                        if (o.time.matches(e) || o.gYearMonth.matches(e) || o.gYear.matches(e) || o.gMonthDay.matches(e) || o.gMonth.matches(e) || o.gDay.matches(e)) return e.toString();
                        if (o.QName.matches(e)) return e.toEQName();
                        var i;
                        if (t.isNode(e)) return e;
                        if (e instanceof w.XdmArray) return i = [], 0 === e.value.length || e.value.forEach(function(t) {
                            i.push(bt(t, n, r));
                        }), i;
                        if (Array.isArray(e)) return i = [], 0 === e.length ? null : 1 == e.length ? bt(e[0], n, r) : (e.forEach(function(t) {
                            i.push(bt(t, n, r));
                        }), i);
                        if (e instanceof d) {
                            if (r) {
                                var a = {};
                                return e.forAllPairs(function(t) {
                                    a[t.k.toString()] = bt(t.v, n, r);
                                }), a;
                            }
                            return new St(e);
                        }
                        return e instanceof xt ? e.value : new St(e);
                    }
                    function wt(t) {
                        return t.mapOneToMany(function(t) {
                            return gt(t) ? E.Join(t.value.map(function(t) {
                                return wt(E.ForArray(t));
                            })) : E.Singleton(t);
                        });
                    }
                    function Tt(e, n) {
                        var i = n ? n instanceof E.AnyIterator ? n.next() : n : {}, a = {};
                        i instanceof d ? i.forAllPairs(function(t) {
                            a[t.k.toString()] = bt(t.v);
                        }) : a = i;
                        var u = "json" == a.method, s = u ? a : {
                            "saxon:line-length": 80,
                            "saxon:indent-spaces": 3,
                            indent: "  "
                        };
                        if (!u) for (var c in a) s[c] = a[c];
                        function l(e) {
                            if (void 0 === e) return "undefined";
                            if (gt(e)) {
                                var n = "[";
                                return e.value.forEach(function(t) {
                                    "[" != n && (n += ","), n += f(t);
                                }), n + "]";
                            }
                            if (e instanceof d) {
                                var i = "map{";
                                return e.forAllPairs(function(t) {
                                    "map{" != i && (i += ",\n"), i += l(t.k) + ":", i += f(t.v);
                                }), i + "}";
                            }
                            return t.isNode(e) ? t.xmlToString(e, s) : o.string.matches(e) || o.untypedAtomic.matches(e) ? '"' + e.toString().replace(/""/g, '"').replace(/''/g, "'") + '"' : o.integer.matches(e) || o.numeric.matches(e) || o.boolean.matches(e) ? e.toString() : e instanceof E.Singleton ? l(e.next()) : r(e);
                        }
                        function f(t) {
                            if (void 0 === t) return "(undefined)";
                            if (1 == t.length) return l(t[0]);
                            var e = "(";
                            return t.forEach(function(t) {
                                "(" != e && (e += ","), e += l(t);
                            }), e + ")";
                        }
                        return "json" == s.method ? Et(e, s) : f(e.expand());
                    }
                    function Et(e, n) {
                        var i = {
                            "allow-duplicate-names": "no",
                            "byte-order-mark": "no",
                            encoding: "utf-8",
                            indent: "no",
                            "normalization-form": "none",
                            "json-node-output-method": "xml"
                        };
                        for (var a in n) i[a] = n[a];
                        if (!0 !== i.indent && !1 !== i.indent && "yes" != i.indent && "no" != i.indent) throw v("Serialize indent option wrong type", "XPTY0004");
                        function u(e, n) {
                            if (gt(e)) {
                                var i = "[";
                                return e.value.forEach(function(t) {
                                    "[" != i && (i += ","), i += s(t, n);
                                }), i + "]";
                            }
                            if (e instanceof d) {
                                var a = "{", l = {};
                                return e.forAllPairs(function(t) {
                                    "{" != a && (a += ",\n");
                                    var e = u(o.string.cast(t.k), n);
                                    if ("no" == n["allow-duplicate-names"]) {
                                        if (1 == l[e]) throw v("Duplicate keys in serialized JSON map", "SERE0022");
                                        l[e] = 1;
                                    }
                                    a += e + ":", a += s(t.v, n);
                                }), a + "}";
                            }
                            if (t.isNode(e)) {
                                var f = {
                                    method: "xml",
                                    "omit-xml-declaration": "yes"
                                };
                                return c(t.xmlToString(e, f));
                            }
                            if (o.integer.matches(e) || o.numeric.matches(e)) {
                                if (isNaN(e.value) || !isFinite(e.value)) throw v("Cannot serialize numeric (to JSON): " + r(e), "SERE0020");
                                return e.toString();
                            }
                            if (o.boolean.matches(e)) return e.toString();
                            if (o.anyAtomicType.matches(e)) return c(e);
                            if (e instanceof E.Singleton) return u(e.next(), n);
                            throw v("Cannot serialize item (to JSON): " + r(e), "SERE0021");
                        }
                        function s(t, e) {
                            if (0 === t.length) return "null";
                            if (1 === t.length) return u(t[0], e);
                            throw v("Cannot serialize (to JSON) a sequence of length greater than one", "SERE0023");
                        }
                        function c(t) {
                            return JSON.stringify(t.toString()).replace(/\//g, "\\/");
                        }
                        return s(e.expand(), i);
                    }
                    return dt.prototype = {
                        value: [],
                        get: function(t) {
                            if ("number" != typeof t) throw v("Array subscript is not numeric", "XPTY0004");
                            if (t < 1 || t >= this.value.length) throw v("Array index (" + t + ") out of bounds (1 to " + this.value.length + ")", "FOAY0001");
                            return this.value[t - 1];
                        }
                    }, xt.prototype = {
                        value: null,
                        containsKey: function(t) {
                            return void 0 !== this.value[t];
                        },
                        get: function(t) {
                            var e = Nt(this.value[t]);
                            return Array.isArray(e) ? e : [ e ];
                        },
                        inSituPut: function(t, e) {
                            throw v("inSituPut() not allowed for JSValue", "SXJS0005");
                        },
                        put: function(t, e) {
                            throw v("put() not allowed for JSValue", "SXJS0005");
                        },
                        remove: function(t) {
                            throw v("remove() not allowed for JSValue", "SXJS0005");
                        },
                        keys: function() {
                            throw v("keys() not allowed for JSValue", "SXJS0005");
                        },
                        forAllPairs: function(t) {
                            throw v("forEach() not allowed for JSValue", "SXJS0005");
                        },
                        conforms: function(t, e, n) {
                            throw v("conforms() not allowed for JSValue", "SXJS0005");
                        }
                    }, St.prototype = {
                        value: null
                    }, {
                        analyze: l,
                        argRole: J,
                        atomize: p,
                        checkTemplateFocus: ht,
                        codepointsToString: ct,
                        convertFromJS: Nt,
                        convertToJS: bt,
                        declaringPackage: W,
                        ebv: x,
                        evalChild1: X,
                        evalChild2: L,
                        evaluate: Z,
                        evaluateIfPresent: at,
                        flatten: wt,
                        getSourceLoc: K,
                        hasFlag: q,
                        internalError: H,
                        isArray: gt,
                        isAstral: st,
                        isMap: vt,
                        JSValue: xt,
                        makeComplexContent: pt,
                        markLocal: T,
                        notImplemented: R,
                        promote: ft,
                        roleDiagnostic: c,
                        serialize: Tt,
                        staticBaseUri: P,
                        stringToCodepoints: lt,
                        stylesheetResolver: j,
                        untypedToDouble: S,
                        wsCollapse: m,
                        XdmArray: dt,
                        XDMValue: St,
                        KNOWN_URI: G
                    };
                }(), T = function() {
                    function t(t, e) {
                        return t.prec == e.prec ? t.prio == e.prio ? t.seq - e.seq : t.prio - e.prio : t.prec - e.prec;
                    }
                    function e(t, e) {
                        return t.prec == e.prec ? t.prio == e.prio ? 0 : t.prio - e.prio : t.prec - e.prec;
                    }
                    var n = {
                        TC: function(t, e, n) {
                            if (!h.isNode(t)) return o.anyAtomicType.matches(t) ? E.Singleton(n.resultDocument.createTextNode(t.toString())) : E.Singleton(t);
                            switch (t.nodeType) {
                              case h.DOCUMENT_NODE:
                              case h.DOCUMENT_FRAGMENT_NODE:
                              case h.ELEMENT_NODE:
                                var r = n.newContext(!1);
                                return r.focus = E.Tracker(g.child(t)), e.applyTemplates(r);

                              case h.TEXT_NODE:
                              case h.CDATA_SECTION:
                                return E.Singleton(h.copyItem(t, n));

                              case h.ATTRIBUTE_NODE:
                                return E.Singleton(n.resultDocument.createTextNode(t.value));

                              default:
                                return E.Empty;
                            }
                        },
                        SC: function(t, e, n) {
                            function r(n) {
                                var r = n.newContext(!1), o = [];
                                return o[0] = E.Tracker(g.attribute(t)), o[1] = E.Tracker(g.child(t)), r.focus = E.Join(o), 
                                e.applyTemplates(r);
                            }
                            return h.shallowCopy(t, n, "c", r);
                        },
                        DC: function(t, e, n) {
                            return E.Singleton(h.copyItem(t, n, "c"));
                        },
                        DS: function(t, e, n) {
                            return E.Empty;
                        },
                        SS: function(t, e, n) {
                            if (!h.isNode(t)) return E.Singleton(t);
                            switch (t.nodeType) {
                              case h.DOCUMENT_NODE:
                              case h.DOCUMENT_FRAGMENT_NODE:
                              case h.ELEMENT_NODE:
                                var r = n.newContext(!1), o = [];
                                return o[0] = E.Tracker(g.attribute(t)), o[1] = E.Tracker(g.child(t)), r.focus = E.Join(o), 
                                e.applyTemplates(r);

                              default:
                                return E.Empty;
                            }
                        },
                        bubble: function(t, e, n) {
                            if (!h.isNode(t)) return E.Singleton(t);
                            switch (t.nodeType) {
                              case h.ELEMENT_NODE:
                                var r = n.newContext(!1);
                                return r.focus = E.Tracker(g.parent(t)), e.applyTemplates(r);

                              default:
                                return E.Empty;
                            }
                        }
                    };
                    function i(t) {
                        return JSON.stringify({
                            prec: t.prec,
                            prio: t.prio,
                            seq: t.seq,
                            line: t.line,
                            match: t.pattern
                        });
                    }
                    function a(t) {
                        return A(w.argRole(t, "match"));
                    }
                    function u(e) {
                        this._expr = e, this.onNoMatch = e.getAttribute("onNo"), this.mustBeTyped = w.hasFlag(e, "t"), 
                        w.hasFlag(e, "F") && (this.failOnMultipleMatch = !0), this._rules = h.getChildElements(e).map(function(t) {
                            return {
                                rule: t,
                                prec: parseInt(t.getAttribute("prec"), 10),
                                prio: parseFloat(t.getAttribute("prio")),
                                seq: parseInt(t.getAttribute("seq"), 10),
                                minImp: parseInt(t.getAttribute("minImp"), 10),
                                pattern: a(t),
                                action: w.argRole(t, "action")
                            };
                        }).sort(t).reverse();
                    }
                    return n.TO = n.TC, u.prototype = {
                        _expr: null,
                        _rules: null,
                        onNoMatch: "TC",
                        mustBeTyped: !1,
                        failOnMultipleMatch: !1,
                        applyTemplates: function(t) {
                            var e = this;
                            return t.focus.mapOneToMany(function(n) {
                                return e._processItem(n, t);
                            });
                        },
                        applyImports: function(t) {
                            var e = t.currentTemplate;
                            if (!e) throw v("No current template rule", "XTDE0560");
                            return this._processItem(t.getCurrentFocus(), t, function(t) {
                                return t.prec >= e.minImp && t.prec < e.prec;
                            });
                        },
                        nextMatch: function(e) {
                            var n = e.currentTemplate;
                            if (!n) throw v("No current template rule", "XTDE0560");
                            return this._processItem(e.getCurrentFocus(), e, function(e) {
                                return t(e, n) < 0;
                            });
                        },
                        findBestRule: function(n, r, o) {
                            var i = this._rules, a = null;
                            return this.failOnMultipleMatch ? i.forEach(function(t) {
                                if ((!o || o(t)) && (!a || e(t, a) >= 0)) {
                                    var i = !1;
                                    try {
                                        i = t.pattern(n, r);
                                    } catch (t) {}
                                    if (i) {
                                        if (null !== a && 0 === e(t, a)) {
                                            var u = "Multiple templates matched item:";
                                            throw u += w.serialize(E.Singleton(n)), u += "\n    " + a.rule.getAttribute("module"), 
                                            v(u += "\nand " + t.rule.getAttribute("module"), "XTDE0540");
                                        }
                                        a = t;
                                    }
                                }
                            }) : i.forEach(function(e) {
                                if ((!o || o(e)) && (!a || t(e, a) > 0)) {
                                    var i = !1;
                                    try {
                                        i = e.pattern(n, r);
                                    } catch (t) {}
                                    i && (a = e);
                                }
                            }), a;
                        },
                        isNonDOMmode: function(t) {
                            return null !== this.findBestRule(w.JSValue(window), t);
                        },
                        _processItem: function(t, e, o) {
                            var i, a = this.findBestRule(t, e, o);
                            if (null !== a) return w.checkTemplateFocus(a.rule, e), e.currentTemplate = a, e.currentMode = e.currentComponent, 
                            w.evaluate(a.action, e);
                            var u = h.getAttribute(this._expr, "name");
                            i = null !== u && u.split("}")[0] == "Q{" + w.KNOWN_URI.ixsl ? "bubble" : this.onNoMatch.split("+")[0];
                            var s = n[i];
                            if (s) return s(t, this, e);
                            throw v("No matching template rule for " + r(t) + " onNoMatch = " + this.onNoMatch, "XTDE0555");
                        },
                        printRules: function() {
                            var t = "";
                            return this._rules.forEach(function(e) {
                                t += i(e);
                            }), t;
                        }
                    }, u;
                }(), E = function() {
                    function t() {}
                    function e(n) {
                        if (!(this instanceof e)) return new e(n);
                        t.call(this), this._item = n;
                    }
                    t.prototype = {
                        filter: function(t) {
                            return i(this, t);
                        },
                        mapOneToOne: function(t) {
                            return s(this, t);
                        },
                        mapOneToMany: function(t) {
                            return new a(this, t);
                        },
                        forEachItem: function(t) {
                            for (var e; null !== (e = this.next()); ) t(e);
                        },
                        some: function(t) {
                            for (var e; null !== (e = this.next()); ) if (t(e)) return !0;
                            return !1;
                        },
                        every: function(t) {
                            for (var e; null !== (e = this.next()); ) if (!t(e)) return !1;
                            return !0;
                        },
                        count: function() {
                            var t = 0;
                            return this.forEachItem(function() {
                                t++;
                            }), t;
                        },
                        expand: function() {
                            var t = [];
                            return this.forEachItem(function(e) {
                                t.push(e);
                            }), t;
                        }
                    }, e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype._item = null, 
                    e.prototype.next = function() {
                        var t = this._item;
                        return this._item = null, t;
                    }, e.prototype.peek = function() {
                        return this._item;
                    }, e.prototype.expand = function() {
                        return null === this._item ? [] : [ this._item ];
                    };
                    var n = {
                        next: function() {
                            return null;
                        },
                        peek: function() {
                            return null;
                        },
                        expand: function() {
                            return [];
                        },
                        count: function() {
                            return 0;
                        },
                        filter: function() {
                            return n;
                        },
                        mapOneToOne: function() {
                            return n;
                        },
                        mapOneToMany: function() {
                            return n;
                        },
                        forEachItem: function() {},
                        some: function() {
                            return !1;
                        }
                    };
                    function r(e) {
                        if (!(this instanceof r)) return new r(e);
                        t.call(this), Array.isArray(e) || w.internalError("ForArray expects array"), this._array = e;
                    }
                    function i(e, n) {
                        if (!(this instanceof i)) return new i(e, n);
                        t.call(this), this._base = e, this._predicate = n, n || w.internalError("Filter iterator undefined predicate");
                    }
                    function a(e, n) {
                        if (!(this instanceof a)) return new a(e, n);
                        t.call(this), this._base = e, this._mapper = n;
                    }
                    function s(e, n) {
                        if (!(this instanceof s)) return new s(e, n);
                        t.call(this), this._base = e, "object" == typeof e && "next" in e || w.internalError("Base not an iterator"), 
                        this._mapper = n;
                    }
                    function c(e, n) {
                        if (!(this instanceof c)) return new c(e, n);
                        t.call(this), this._next = e, this._step = n;
                    }
                    function l(e) {
                        if (!(this instanceof l)) return new l(e);
                        t.call(this), Array.isArray(e) || w.internalError("Join iterator expects array"), 
                        this._iterators = e;
                    }
                    function f(e, n, r) {
                        if (!(this instanceof f)) return new f(e, n, r);
                        t.call(this), this._iter1 = E.LookAhead(e), this._iter2 = E.LookAhead(n), this._compare = r;
                    }
                    function m(e, n, r) {
                        if (!(this instanceof m)) return new m(e, n, r);
                        t.call(this), this._iter1 = E.LookAhead(e), this._iter2 = E.LookAhead(n), this._compare = r;
                    }
                    function p(e, n, r) {
                        if (!(this instanceof p)) return new p(e, n, r);
                        t.call(this), this._iter1 = E.LookAhead(e), this._iter2 = E.LookAhead(n), this._compare = r;
                    }
                    function h(e) {
                        return "peek" in e ? e : this instanceof h ? (t.call(this), this._base = e, void (this._nextButOne = e.next())) : new h(e);
                    }
                    function d(e) {
                        if (!(this instanceof d)) return new d(e);
                        t.call(this), this._base = e;
                    }
                    function g(e) {
                        if (!(this instanceof g)) return new g(e);
                        t.call(this), this.current = e;
                    }
                    function v(e, n) {
                        if (!(this instanceof v)) return new v(e, n);
                        t.call(this), Array.isArray(e) || w.internalError("Block iterator expects array"), 
                        this._instructions = e, this._currentIterator = null, this._context = n;
                    }
                    return r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.prototype._array = null, 
                    r.prototype._index = 0, r.prototype.next = function() {
                        return this._index < this._array.length ? this._array[this._index++] : null;
                    }, r.prototype.peek = function() {
                        return this._index < this._array.length ? this._array[this._index] : null;
                    }, r.prototype.expand = function() {
                        return this._array;
                    }, r.prototype.count = function() {
                        return this._array.length;
                    }, i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i.prototype._base = null, 
                    i.prototype._predicate = null, i.prototype.next = function() {
                        for (;;) {
                            var t = this._base.next();
                            if (!t) return null;
                            if (this._predicate(t)) return t;
                        }
                    }, a.prototype = Object.create(t.prototype), a.prototype.constructor = a, a.prototype._base = null, 
                    a.prototype._mapper = null, a.prototype._currentIter = null, a.prototype.next = function() {
                        for (;;) {
                            if (null !== this._currentIter) {
                                var t = this._currentIter.next();
                                if (t) return t;
                            }
                            var e = this._base.next();
                            if (null === e) return null;
                            this._currentIter = this._mapper(e), this._currentIter && !this._currentIter.next && w.internalError("Result of mapper is not an iterator, mapper = " + this._mapper);
                        }
                    }, s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.prototype._base = null, 
                    s.prototype._mapper = null, s.prototype._position = 0, s.prototype.next = function() {
                        for (;;) {
                            var t = this._base.next();
                            if (null === t) return null;
                            var e = this._mapper(t, this._position++);
                            if (e) return e;
                        }
                    }, c.prototype = Object.create(t.prototype), c.prototype.constructor = c, c.prototype._step = null, 
                    c.prototype._next = null, c.prototype.next = function() {
                        var t = this._next;
                        return t ? (this._next = this._step(t), t) : null;
                    }, c.prototype.peek = function() {
                        return this._next;
                    }, l.prototype = Object.create(t.prototype), l.prototype.constructor = l, l.prototype._iterators = [], 
                    l.prototype.current = null, l.prototype.next = function() {
                        for (;;) {
                            if (0 === this._iterators.length) return this.current = null, null;
                            var t = this._iterators[0].next();
                            if (null !== t) return this.current = t, t;
                            this._iterators.shift();
                        }
                    }, f.prototype = Object.create(t.prototype), f.prototype.constructor = f, f.prototype._iter1 = null, 
                    f.prototype._iter2 = null, f.prototype._compare = null, f.prototype.current = null, 
                    f.prototype.next = function() {
                        var t = this._iter1.peek(), e = this._iter2.peek();
                        if (t && e) {
                            var n = this._compare(t, e);
                            return n < 0 ? (this.current = this._iter1.next(), this.current) : n > 0 ? (this.current = this._iter2.next(), 
                            this.current) : (this.current = this._iter1.next(), this._iter2.next(), this.current);
                        }
                        return t ? (this.current = this._iter1.next(), this.current) : e ? (this.current = this._iter2.next(), 
                        this.current) : (this.current = null, null);
                    }, m.prototype = Object.create(t.prototype), m.prototype.constructor = m, m.prototype._iter1 = null, 
                    m.prototype._iter2 = null, m.prototype._compare = null, m.prototype.current = null, 
                    m.prototype.next = function() {
                        for (var t = this._iter1.peek(), e = this._iter2.peek(); t && e; ) {
                            var n = this._compare(t, e);
                            if (n < 0) this._iter1.next(), t = this._iter1.peek(); else {
                                if (!(n > 0)) return this.current = this._iter1.next(), this._iter2.next(), this.current;
                                this._iter2.next(), e = this._iter2.peek();
                            }
                        }
                        return this.current = null, null;
                    }, p.prototype = Object.create(t.prototype), p.prototype.constructor = p, p.prototype._iter1 = null, 
                    p.prototype._iter2 = null, p.prototype._compare = null, p.prototype.current = null, 
                    p.prototype.next = function() {
                        for (var t = this._iter1.peek(), e = this._iter2.peek(); t && e; ) {
                            var n = this._compare(t, e);
                            if (n < 0) return this.current = this._iter1.next(), this.current;
                            n > 0 ? (this._iter2.next(), e = this._iter2.peek()) : (this._iter1.next(), this._iter2.next(), 
                            t = this._iter1.peek(), e = this._iter2.peek());
                        }
                        return t && !e ? (this.current = this._iter1.next(), this.current) : (this.current = null, 
                        null);
                    }, h.prototype = Object.create(t.prototype), h.prototype.constructor = h, h.prototype._base = null, 
                    h.prototype.next = function() {
                        var t = this._nextButOne;
                        return t && (this._nextButOne = this._base.next()), t;
                    }, h.prototype.peek = function() {
                        return this._nextButOne;
                    }, d.prototype = Object.create(t.prototype), d.prototype.constructor = d, d.prototype._base = null, 
                    d.prototype._last = -1, d.prototype.position = 0, d.prototype.current = null, d.prototype.regexGroups = [], 
                    d.prototype.next = function() {
                        return this.position++, this.current = this._base.next(), null === this.current && (this.position = -1), 
                        this.current;
                    }, d.prototype.last = function() {
                        if (this._last < 0) if (this._base instanceof r) this._last = this._base.expand().length; else {
                            for (var t, e = []; null !== (t = this._base.next()); ) e.push(t);
                            this._last = this.position + e.length, this._base = E.ForArray(e);
                        }
                        return this._last;
                    }, g.prototype = Object.create(t.prototype), g.prototype.constructor = g, g.prototype.position = 1, 
                    g.prototype.current = null, g.prototype.next = function() {
                        return null;
                    }, g.prototype.last = function() {
                        return 1;
                    }, v.prototype = Object.create(t.prototype), v.prototype.constructor = v, v.prototype._instructions = [], 
                    v.prototype._currentIterator = null, v.prototype._context = null, v.prototype.current = null, 
                    v.prototype.next = function() {
                        for (;;) {
                            if (null === this._currentIterator) {
                                if (0 === this._instructions.length) return this.current = null, null;
                                this._currentIterator = w.evaluate(this._instructions[0], this._context);
                            }
                            var t = this._currentIterator.next();
                            if (null !== t) return this.current = t, t;
                            this._instructions.shift(), this._currentIterator = null;
                        }
                    }, {
                        Empty: n,
                        Singleton: e,
                        Join: l,
                        Stepping: c,
                        LookAhead: h,
                        Tracker: d,
                        Solo: g,
                        ForArray: r,
                        Union: f,
                        Intersect: m,
                        Difference: p,
                        AnyIterator: t,
                        Block: v,
                        trace: function(t, e, n) {
                            for (var r, o = []; null !== (r = e.next()); ) {
                                z(t + ": " + ("object" == typeof r ? r instanceof Node ? n ? r.toString() : r.nodeType + ":" + (r.tagName || r.textContent) : r instanceof u ? "xmlns:" + r.prefix + "=" + r.uri : r.toString() : typeof r)), 
                                o.push(r);
                            }
                            return 0 === o.length && z(t + ": <empty>"), E.ForArray(o);
                        },
                        oneString: function(t) {
                            return E.Singleton(o.string.fromString(t));
                        },
                        oneInteger: function(t) {
                            return E.Singleton(o.integer.fromNumber(t));
                        },
                        oneDouble: function(t) {
                            return E.Singleton(o.double.fromNumber(t));
                        },
                        oneFloat: function(t) {
                            return E.Singleton(o.float.fromNumber(t));
                        },
                        oneDecimal: function(t) {
                            return E.Singleton(o.decimal.fromBig(t));
                        },
                        oneBoolean: function(t) {
                            return E.Singleton(o.boolean.fromBoolean(t));
                        }
                    };
                }(), A = function(t) {
                    var e = {
                        "p.any": function(t) {
                            return function() {
                                return !0;
                            };
                        },
                        "p.booleanExp": function(t) {
                            return function(e, n) {
                                var r = n.newContext();
                                return r.focus = E.Solo(e), w.ebv(w.evalChild1(t, r));
                            };
                        },
                        "p.genNode": function(t) {
                            var e = h.getChildElements(t)[0];
                            return function(t, n) {
                                if (!h.isNode(t)) return !1;
                                for (var r, o = g.ancestorOrSelf(t); null !== (r = o.next()); ) {
                                    var i = n.newContext(!1);
                                    i.focus = E.Solo(r);
                                    for (var a, u = w.evaluate(e, i); null !== (a = u.next()); ) if (h.isSameNode(a, t)) return !0;
                                }
                                return !1;
                            };
                        },
                        "p.genPos": function(t) {
                            var e = new Function("item", t.getAttribute("jsTest"));
                            return function(n, r) {
                                if (!e(n)) return !1;
                                var o = g["preceding-sibling"](r.getCurrentFocus()).filter(e).expand(), i = r.newContext(!1);
                                return i.focus = E.Solo(n), i.focus.position = o.length + 1, w.ebv(w.evalChild1(t, i));
                            };
                        },
                        "p.nodeSet": function(t) {
                            return function(e, n) {
                                for (var r, o = w.evalChild1(t, n); null !== (r = o.next()); ) if (r == e) return !0;
                                return !1;
                            };
                        },
                        "p.nodeTest": function(t) {
                            return new Function("item", t.getAttribute("jsTest"));
                        },
                        "p.simPos": function(t) {
                            var e = new Function("item", t.getAttribute("jsTest")), n = parseInt(t.getAttribute("pos"), 10);
                            return function(t, r) {
                                return e(t) && g.precedingSibling(t).filter(e).count() == n - 1;
                            };
                        },
                        "p.venn": function(t) {
                            var e = h.getChildElements(t), n = A(e[0]), r = A(e[1]), o = t.getAttribute("op");
                            switch (o) {
                              case "union":
                                return function(t, e) {
                                    return n(t, e) || r(t, e);
                                };

                              case "intersect":
                                return function(t, e) {
                                    return n(t, e) && r(t, e);
                                };

                              case "except":
                                return function(t, e) {
                                    return n(t, e) && !r(t, e);
                                };

                              default:
                                throw v("unknown op " + o, "SXJS0003");
                            }
                        },
                        "p.withCurrent": function(t) {
                            var e = A(h.getChildElements(t)[0]);
                            return function(t, n) {
                                var r = n.newContext(!0);
                                return r.localVars[0] = [ t ], e(t, r);
                            };
                        },
                        "p.withPredicate": function(t) {
                            var e = h.getChildElements(t), n = A(e[0]), r = e[1];
                            return function(t, e) {
                                if (!n(t, e)) return !1;
                                var o = e.newContext(!1);
                                return o.focus = E.Solo(t), w.ebv(w.evaluate(r, o));
                            };
                        },
                        "p.withUpper": function(t) {
                            var e = h.getChildElements(t), n = A(e[0]), r = A(e[1]), o = t.getAttribute("axis");
                            return "parent" == o ? "true" == t.getAttribute("upFirst") ? function(t, e) {
                                var o = h.xdmParentNode(t);
                                return o && r(o, e) && n(t, e);
                            } : function(t, e) {
                                var o = h.xdmParentNode(t);
                                return o && n(t, e) && r(o, e);
                            } : function(t, e) {
                                if (!n(t, e)) return !1;
                                for (var i, a = g[o](t); null !== (i = a.next()); ) if (r(i, e)) return !0;
                                return !1;
                            };
                        }
                    }[t.tagName];
                    if (e) return e(t);
                    throw v("Unimplemented pattern " + t.tagName, "SXJS0002");
                }, O = function() {
                    var t = null, e = !1;
                    try {
                        e = 1 == "\ud83d\ude80".match(new RegExp(".", "gu")).length;
                    } catch (t) {
                        e = !1;
                    }
                    function n() {
                        if (null === t) {
                            z("Loading categories.json", 2);
                            var e = f.getPlatform().readResource("opt/categories.json");
                            t = JSON.parse(e), z("Finished loading categories.json", 2);
                        }
                        return t;
                    }
                    function r(t, r, o) {
                        function i(t, r) {
                            function o(t) {
                                for (var n = t.toString(16); n.length < 4; ) n = "0" + n;
                                return "\\u" + (e && n.length > 4 ? "{" + n + "}" : n);
                            }
                            function i(t) {
                                for (var n = "", r = 0; r < t.length; r += 2) (e || t[r + 1] < 65536) && (n += o(t[r]), 
                                t[r + 1] > t[r] && (n += "-" + o(t[r + 1])));
                                return n;
                            }
                            function s(t) {
                                var n = [];
                                0 !== t[0] && (n.push(0), n.push(t[0] - 1));
                                for (var r = 2; r < t.length; r += 2) n.push(t[r - 1] + 1), n.push(t[r] - 1);
                                var o = t[t.length - 1];
                                return (e || o < 65535) && (n.push(o + 1), n.push(e ? 1114111 : 65535)), n;
                            }
                            function c(t, e, n) {
                                n && (t = s(t));
                                var r = i(t);
                                return e || (r = "[" + r + "]"), r;
                            }
                            function p(t, e, n) {
                                var r = [];
                                return Array.isArray(t) || u("Ranges must be array"), t.forEach(function(t) {
                                    r.push(parseInt(t[0], 16)), r.push(parseInt(t[1], 16));
                                }), c(r, e, n);
                            }
                            var v = t.charAt(r + 1);
                            if ("nrt\\|.-^?*+{}()[]pPsSiIcCdDwW$".indexOf(v) < 0 && (0 !== g || !/[0-9]/.test(v)) && u("\\" + v + " is not allowed in XPath regular expressions"), 
                            "p" == v || "P" == v) {
                                var y = t.indexOf("}", r), x = t.substring(r + 3, y);
                                a("x") && (x = x.replace(/[ \n\r\t]+/g, ""));
                                var S, N = n(), b = N[x];
                                b || u("Unknown category " + x), 1 == x.length ? (S = [], b.split("|").forEach(function(t) {
                                    S = S.concat(N[t]);
                                })) : S = b, l += p(S, g > 0, "P" == v), r = y;
                            } else "d" == v ? (l += p(n().Nd, g > 0, !1), r++) : "i" == v ? (l += c(f, g > 0, !1), 
                            r++) : "c" == v ? (l += c(m, g > 0, !1), r++) : "I" == v ? (l += c(f, g > 0, !0), 
                            r++) : "C" == v ? (l += c(m, g > 0, !0), r++) : /[0-9]/.test(v) ? g > 0 ? u("Numeric escape within charclass") : (h[parseInt(v, 10)] || u("No capturing expression #" + v), 
                            l += "\\" + v, d <= 9 && /[0-9]/.test(t.charAt(r + 2)) && (l += "(?:)"), r++) : "-" == v ? (g > 0 && (l += "\\"), 
                            l += v, r++) : (l += "\\" + v, r++);
                            return {
                                output: l,
                                i: r
                            };
                        }
                        if (r = r ? r.toString() : "", !e && o && w.isAstral(o)) throw new v("Cannot handle non-BMP characters with regular expressions in this browser", "SXJS0002");
                        function a(t) {
                            return r.indexOf(t) >= 0;
                        }
                        function u(t) {
                            throw new v("Invalid XPath regular expression: " + t, "FORX0002");
                        }
                        var s = (a("i") ? "i" : "") + (a("m") ? "m" : "") + (a("g") ? "g" : "") + (e ? "u" : "");
                        if (a("j")) return new RegExp(t, r.replace("j", ""));
                        if (a("q")) return new RegExp(t.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), s);
                        var c, l = "", f = [ 58, 58, 65, 90, 95, 95, 97, 122, 192, 214, 216, 246, 248, 767, 880, 893, 895, 8191, 8204, 8205, 8304, 8591, 11264, 12271, 12289, 55295, 63744, 64975, 65008, 65533, 65536, 983039 ], m = [ 45, 46, 48, 58, 65, 90, 95, 95, 97, 122, 183, 183, 192, 214, 216, 246, 248, 893, 895, 8191, 8204, 8205, 8255, 8256, 8304, 8591, 11264, 12271, 12289, 55295, 63744, 64975, 65008, 65533, 65536, 983039 ], p = [], h = [], d = 1, g = 0, y = [];
                        for (c = 0; c < t.length; c++) {
                            var x = t.charAt(c);
                            switch (x) {
                              case "[":
                                var S;
                                g > 0 && u("Nested square brackets");
                                var N = !1, b = !1;
                                for (S = c + 2; S < t.length - 3; S++) {
                                    if (!b && "-[" == t.substring(S, S + 2)) {
                                        var T, E, A = t.substring(c + 1, S);
                                        for (E = S + 2; E < t.length; E++) if ("]" == t.charAt(E) && "\\" != t.charAt(E - 1)) {
                                            T = t.substring(S + 2, E + 1);
                                            break;
                                        }
                                        "^" == A && u("Invalid subtraction"), t = t.substring(0, c) + "(?![" + T + ")[" + A + "]" + t.substring(E + 2), 
                                        c--, N = !0;
                                        break;
                                    }
                                    if (!b && "]" == t.charAt(S)) break;
                                    b = "\\" == t.charAt(S) && !b;
                                }
                                if (N) break;
                                "]" == t.charAt(c + 1) && u("Character group is empty"), g++, y.push(l.length), 
                                l += x;
                                break;

                              case "]":
                                0 === g && u("Unmatched ']'"), g--, y.pop(), l += x;
                                break;

                              case "(":
                                if (0 === g) {
                                    var O = !0;
                                    c + 2 < t.length && "?" === t.charAt(c + 1) && (":" === t.charAt(c + 2) || N && "!" === t.charAt(c + 2) ? O = !1 : u("'(?' must be followed by ':'")), 
                                    p.push(O ? d++ : -1);
                                }
                                l += x;
                                break;

                              case ")":
                                if (0 === g) {
                                    0 === p.length && u("Unmatched ')'");
                                    var C = p.pop();
                                    C > 0 && (h[C] = !0);
                                }
                                l += x;
                                break;

                              case ".":
                                0 === g && a("s") ? l += "[^]" : l += x;
                                break;

                              case "{":
                                if ("," == t.charAt(c + 1)) throw v("{,x} not allowed in XPath regex dialect", "FORX0002");
                                l += x;
                                break;

                              case " ":
                              case "\n":
                              case "\r":
                              case "\t":
                                (!a("x") || g > 0) && (l += x);
                                break;

                              case "\\":
                                if (a("q")) l += "\\\\"; else {
                                    if (!(c + 1 < t.length)) throw v("No character for escape code in XPath regex", "FORX0002");
                                    a("x") && /\s/.test(t.charAt(c + 1)) && c++;
                                    var D = i(t, c);
                                    l = D.output, c = D.i;
                                }
                                break;

                              default:
                                l += x;
                            }
                        }
                        g > 0 && u("Unmatched '['"), 0 !== p.length && u("Unmatched '(");
                        try {
                            return new RegExp(l, s);
                        } catch (e) {
                            throw /^[imsxjqg]*$/.test(r) ? new v("Invalid regular expression /" + t + "/: " + e.message, "FORX0002") : new v("Invalid regex flags: " + r, "FORX0001");
                        }
                    }
                    function o(t, e) {
                        if (e = e.toString(), /j/.test(e)) return t;
                        if (/q/.test(e)) return t.replace(/\$/g, "$$$$");
                        if (/(^|[^\\])\$([^0-9]|$)/.test(t) || /(^|[^\\])\\([^\\\$]|$)/.test(t)) throw new v("Invalid replacement string: " + t, "FORX0004");
                        var n, r = !1, o = !1, i = "";
                        for (n = 0; n < t.length; n++) {
                            var a = t.charAt(n);
                            switch (a) {
                              case "\\":
                                r && (i += a), r = !r;
                                break;

                              case "$":
                                r ? (i += "$$", r = !r) : o = !0;
                                break;

                              case "0":
                                o ? (i += "$&", o = !1) : i += a;
                                break;

                              case "1":
                              case "2":
                              case "3":
                              case "4":
                              case "5":
                              case "6":
                              case "7":
                              case "8":
                              case "9":
                                o ? (i += "$" + a, o = !1) : i += a;
                                break;

                              default:
                                i += a;
                            }
                        }
                        return i;
                    }
                    var i = r("^\\i\\c*$", ""), a = r("^\\c+$", "");
                    return {
                        obtainCategoryEscapes: n,
                        prepareRegex: r,
                        convertReplacement: o,
                        isNCName: function(t) {
                            return i.test(t) && !/:/.test(t);
                        },
                        isName: function(t) {
                            return i.test(t);
                        },
                        isNMTOKEN: function(t) {
                            return a.test(t);
                        },
                        isQName: function(t) {
                            return i.test(t) && /^[^:]+(:[^:]+)?$/.test(t);
                        },
                        trim: function(t) {
                            return t.replace(/^[ \t\r\n]+|[ \t\r\n]+$/g, "");
                        }
                    };
                }(), C = function() {
                    var t = w, e = h;
                    function n(t, e, n) {
                        var r = e.fixed.documentPool[t];
                        if (!r) {
                            try {
                                r = n();
                            } catch (t) {
                                r = t;
                            }
                            e.fixed.documentPool[t] = r;
                        }
                        if (r instanceof v) throw r;
                        return r;
                    }
                    function a(t, r) {
                        if (t.indexOf("#") >= 0) throw v("Fragments not supported in external document URIs", "FODC0002");
                        return n(t, r, function() {
                            var n = f.getPlatform().readFile(t), r = e.obtainDocumentNumber(f.getPlatform().parseXmlFromString(n));
                            return r._saxonBaseUri = t, r;
                        });
                    }
                    function s(t, e) {
                        if (t.indexOf("#") >= 0) throw v("Fragments not supported in external document URIs", "FODC0002");
                        return n(t, e, function() {
                            return f.getPlatform().readFile(t, "utf-8");
                        });
                    }
                    function c(e, n, r) {
                        var o = t.staticBaseUri(r, n), i = e[0].next();
                        return null === i ? null : f.getPlatform().resolveUri(i.toString(), o);
                    }
                    function l(t, e, r) {
                        var o;
                        try {
                            o = c(t, e, r);
                        } catch (t) {
                            throw v(t.message, "FOUT1170", r);
                        }
                        if (o.match(/#/)) throw v("Fragment identifier for unparsed-text" + o.toString(), "FOUT1170", r);
                        var i = "";
                        if (t[1] && "utf-8" != (i = b(t[1]).toLowerCase()) && "utf-16" != i) throw v("Unrecognized encoding " + i, "FOUT1190");
                        return null === o ? null : n(o, e, function() {
                            try {
                                return f.getPlatform().readFile(o, i);
                            } catch (t) {
                                throw v("Cannot retrieve unparsed-text " + o.toString(), "FOUT1170", r);
                            }
                        });
                    }
                    function m(t) {
                        try {
                            return t(), E.oneBoolean(!0);
                        } catch (t) {
                            return E.oneBoolean(!1);
                        }
                    }
                    function p(e, n, r, i) {
                        var a = e.next();
                        if (a) {
                            var u = O.trim(a.toString());
                            if (i && O.isNCName(u)) return "Q{" + i + "}" + u;
                            var s = o.QName.fromString(u, t.stylesheetResolver(n, !1));
                            if (null === s) throw new v("Invalid QName " + u, r, n);
                            return "Q{" + s.uri + "}" + s.local;
                        }
                        return null;
                    }
                    function y(t, e) {
                        var n = b(t[0]), r = "";
                        return w.stringToCodepoints(n).forEach(function(t) {
                            var n = w.codepointsToString([ t ]);
                            r += e(t, n) ? encodeURIComponent(n) : n;
                        }), E.oneString(r);
                    }
                    function x(t, e) {
                        if (2 != e.length && 5 != e.length) throw new v("Wrong number of arguments (" + e.length + ") for  " + t, "XPST0017");
                    }
                    function S(t) {
                        var e = t[0].next(), n = t[1].next(), r = w.atomize(n.value[0][0]).next();
                        return e instanceof w.XdmArray && (r = o.numeric.matches(r) ? r.toNumber() : o.double.cast(r).toNumber()), 
                        E.ForArray(e.get(r));
                    }
                    var N = {
                        version: "3.0",
                        vendor: "Saxonica",
                        "vendor-url": "http://www.saxonica.com/",
                        "product-name": "Saxon-JS",
                        "product-version": "1.2.0",
                        "is-schema-aware": "no",
                        "supports-serialization": "no",
                        "supports-backwards-compatibility": "yes",
                        "supports-namespace-axis": "yes",
                        "supports-streaming": "no",
                        "supports-dynamic-evaluation": "yes",
                        "supports-higher-order-functions": "no",
                        "xpath-version": "3.1",
                        "xsd-version": "1.1"
                    };
                    function b(t) {
                        var e = t.next();
                        return e ? e.value : "";
                    }
                    function T(e) {
                        return t.stringToCodepoints(b(e));
                    }
                    function C(t, e, n) {
                        var r = Math.round(e.next().toNumber()), o = n ? r + Math.round(n.next().toNumber()) : t.length + 1;
                        return t.filter(function(t, e) {
                            return e + 1 >= r && e + 1 < o;
                        });
                    }
                    function D(t, e, n) {
                        var r = e;
                        return t.forEachItem(function(t) {
                            r = n(t, r);
                        }), r;
                    }
                    function k(e) {
                        var n = "max" == e ? function(t) {
                            return t > 0;
                        } : function(t) {
                            return t < 0;
                        };
                        function r(t) {
                            throw new v(t, "FORG0006");
                        }
                        return function(a, u, s) {
                            var c = a[0];
                            t.hasFlag(s, "i") && (c = c.filter(function(t) {
                                return !i.itemIsNaN(t);
                            }));
                            var l = i.getCollatingFn(s, a[1], "compare", u), f = i.cmpFn(l), m = o.untypedAtomic.matches, p = o.numeric.matches, h = o.double.matches, d = o.float.matches, g = o.anyURI.matches, v = o.string.matches, y = o.duration.matches, x = o.yearMonthDuration.matches, S = o.dayTimeDuration.matches, N = o.QName.matches, b = o.double.cast, w = o.float.cast, T = o.string.cast, A = (c = c.mapOneToOne(function(t) {
                                return m(t) ? b(t) : t;
                            })).next();
                            return null === A ? E.Empty : (N(A) && r(e + "() not defined over QName"), !y(A) || x(A) || S(A) || r(e + "() not defined over mixed duations"), 
                            E.Singleton(D(c, A, function(t, e) {
                                return (v(t) && p(e) || v(e) && p(t)) && r("Cannot compare string with numeric"), 
                                (x(t) && !x(e) || S(t) && !S(e)) && r("Cannot compare mixed duations"), i.itemIsNaN(e) ? h(t) ? b(e) : e : i.itemIsNaN(t) ? h(e) ? b(t) : t : (h(e) && !v(t) ? t = b(t) : h(t) && !v(e) ? e = b(e) : d(e) && !v(t) ? t = w(t) : d(t) && !v(e) && (e = w(e)), 
                                g(e) && v(t) ? e = T(e) : g(t) && v(e) && (t = T(t)), n(f(t, e)) ? t : e);
                            })));
                        };
                    }
                    function P(t, e) {
                        var n = t[0].next();
                        if (null === n) return E.Empty;
                        if ("timezone" == e) return null === n.timezoneOffset ? E.Empty : E.Singleton(o.dayTimeDuration.fromNumberOfMinutes(n.timezoneOffset));
                        if ("seconds" == e) {
                            var r = n.proxy();
                            return E.oneDecimal(r.getUTCSeconds() + r.getUTCMilliseconds() / 1e3);
                        }
                        var i = n.proxy()[e]();
                        return "getUTCMonth" == e && i++, E.oneInteger(i);
                    }
                    function U(t, e) {
                        var n = t[0].next();
                        return null === n ? E.Empty : 5 != e ? E.oneInteger(n.parts()[e] * n.signum()) : E.oneDecimal(n.parts()[e] * n.signum());
                    }
                    function R(t, e, n) {
                        var r = t[0].next();
                        if (!r) return E.Empty;
                        var i, a = n.fixed.currentDate.getTimezoneOffset();
                        if (t[1]) {
                            var u = t[1].next();
                            if (null !== (i = null !== u ? u.milliseconds / 6e4 : null) && (i < -840 || i > 840)) throw new v("timezone out of bounds " + u, "FODT0003");
                        } else i = -a;
                        var s = r.timezoneOffset;
                        if (null === s && null === i) return E.Singleton(r);
                        function c(t, n) {
                            return E.Singleton(o[e].fromDate(t, n));
                        }
                        return null === s && null !== i ? c(r.adjustByMinutes(-a - i).UTCdate, i) : null !== s && null === i ? c(r.adjustByMinutes(a + s).UTCdate, null) : null !== s && null !== i ? c(r.UTCdate, i) : void 0;
                    }
                    return {
                        abs: function(t) {
                            var e = t[0].next();
                            return null === e ? E.Empty : E.Singleton(e.abs());
                        },
                        "accumulator-after": function(t, e, n) {
                            var r = p(t[0], n, "XTDE3340");
                            return E.ForArray(I.accumAfter(r, e.getCurrentFocus(), e));
                        },
                        "accumulator-before": function(t, e, n) {
                            var r = p(t[0], n, "XTDE3340");
                            return E.ForArray(I.accumBefore(r, e.getCurrentFocus(), e));
                        },
                        "adjust-date-to-timezone": function(t, e) {
                            return R(t, "date", e);
                        },
                        "adjust-dateTime-to-timezone": function(t, e) {
                            return R(t, "dateTime", e);
                        },
                        "adjust-time-to-timezone": function(t, e) {
                            return R(t, "time", e);
                        },
                        "analyze-string": function(t, e) {
                            var n = b(t[0]), r = e.resultDocument.createDocumentFragment(), o = w.KNOWN_URI.fn, i = e.resultDocument.createElementNS(o, "analyze-string-result");
                            if (r.appendChild(i), "" === n) return E.Singleton(i);
                            var a = t[1].next().toString(), u = t[2] ? t[2].next().toString() : "";
                            return w.analyze(n, a, u, !1, !1).forEach(function(t) {
                                var n, r;
                                if (t.matching) {
                                    var a, u = t.groups;
                                    n = e.resultDocument.createElementNS(o, "match");
                                    var s, c = 0;
                                    for (s = 1; s < u.length; s++) if (u[s]) {
                                        (a = u[0].indexOf(u[s], c)) > c && (r = e.resultDocument.createTextNode(u[0].substring(c, a)), 
                                        n.appendChild(r));
                                        var l = e.resultDocument.createElementNS(o, "group");
                                        l.setAttribute("nr", s);
                                        var f = e.resultDocument.createTextNode(u[s]);
                                        l.appendChild(f), n.appendChild(l), c = a + u[s].length;
                                    }
                                    c < u[0].length && (r = e.resultDocument.createTextNode(u[0].substring(c, a)), n.appendChild(r)), 
                                    i.appendChild(n);
                                } else n = e.resultDocument.createElementNS(o, "non-match"), r = e.resultDocument.createTextNode(t.string), 
                                n.appendChild(r), i.appendChild(n);
                            }), E.Singleton(i);
                        },
                        apply: S,
                        _APPLY: S,
                        "available-environment-variables": function() {
                            return E.Empty;
                        },
                        "available-system-properties": function() {
                            var t = [];
                            for (var e in N) N.hasOwnProperty(e) && t.push(o.QName.fromParts("xsl", w.KNOWN_URI.xsl, e));
                            return E.ForArray(t);
                        },
                        avg: function(e) {
                            var n = e[0].mapOneToOne(t.untypedToDouble), r = n.next();
                            if (null === r) return E.Empty;
                            var i = {
                                sum: r,
                                count: 1
                            }, a = _["a+a"];
                            try {
                                var u = D(n, i, function(t, e) {
                                    return {
                                        sum: a(e.sum, t),
                                        count: e.count + 1
                                    };
                                });
                                return E.Singleton(_["a/a"](u.sum, o.integer.fromNumber(u.count)));
                            } catch (t) {
                                throw new v("Input to avg() contains a mix of numeric and non-numeric values ", "FORG0006");
                            }
                        },
                        "base-uri": function(t) {
                            return t[0].mapOneToOne(function(t) {
                                var n = e.baseURI(t);
                                return null === n ? null : o.anyURI.fromString(n);
                            });
                        },
                        boolean: function(e) {
                            return E.oneBoolean(t.ebv(e[0]));
                        },
                        ceiling: function(t) {
                            var e = t[0].next();
                            return E.Singleton(null === e ? null : e.ceiling());
                        },
                        "codepoint-equal": function(t) {
                            var e = t[0].next(), n = t[1].next();
                            return null === e || null === n ? E.Empty : E.oneBoolean(e.toString() === n.toString());
                        },
                        "codepoints-to-string": function(e) {
                            return E.oneString(t.codepointsToString(e[0].expand().map(function(t) {
                                return t.toNumber();
                            })));
                        },
                        "collation-key": function(t, e, n) {
                            var r = t[0].next(), a = i.getCollatingFn(n, t[1], "collationKey", e);
                            return E.Singleton(o.base64Binary.encodeFromString(a(r.value)));
                        },
                        collection: function(e, n, r) {
                            var o = n.fixed.options.collectionFinder;
                            if (o && "function" == typeof o) {
                                var i = null;
                                if (e[0]) {
                                    var a = e[0].next();
                                    null !== a && (i = f.getPlatform().resolveUri(a.toString(), t.staticBaseUri(r, n)));
                                }
                                var u = i ? o(i) : o();
                                if (void 0 === u) throw new v("No available collection for supplied URI: " + i, "FODC0002", r);
                                u = t.convertFromJS(u);
                                var s = n.fixed.spaceStripper;
                                if (null !== s) for (var c = 0; c < u.length; c++) u[c] = s(u[c]);
                                return Array.isArray(u) ? E.ForArray(u) : E.Singleton(u);
                            }
                            if (e[0]) throw new v("Unknown collection (no collectionFinder supplied)", "FODC0002", r);
                            return E.Empty;
                        },
                        compare: function(t, e, n) {
                            var r = t[0].next(), o = t[1].next();
                            if (null === r || null === o) return E.Empty;
                            var a = i.getCollatingFn(n, t[2], "compare", e);
                            return E.oneInteger(a(r.value, o.value));
                        },
                        concat: function(t) {
                            return E.oneString(t.map(function(t) {
                                var e = t.next();
                                return null === e ? "" : o.string.cast(e);
                            }).join(""));
                        },
                        contains: function(t, e, n) {
                            var r = b(t[0]), o = b(t[1]), a = i.getCollatingFn(n, t[2], "contains", e);
                            return E.oneBoolean(a(r, o));
                        },
                        "contains-token": function(t, e, n) {
                            var r = b(t[1]);
                            if ("" === (r = O.trim(r))) return E.oneBoolean(!1);
                            for (var o, a = i.getCollatingFn(n, t[2], "equals", e), u = function(t) {
                                return a(t, r);
                            }; null !== (o = t[0].next()); ) if (o.toString().split(/[ \n\r\t]+/).findIndex(u) >= 0) return E.oneBoolean(!0);
                            return E.oneBoolean(!1);
                        },
                        count: function(t) {
                            return E.oneInteger(t[0].count());
                        },
                        "current-date": function(t, e) {
                            return E.Singleton(o.date.fromDate(e.fixed.currentDate, -e.fixed.currentDate.getTimezoneOffset()));
                        },
                        "current-dateTime": function(t, e) {
                            return E.Singleton(o.dateTimeStamp.fromDate(e.fixed.currentDate, -e.fixed.currentDate.getTimezoneOffset()));
                        },
                        "current-merge-group": function(t, e) {
                            if (null === e.currentMergeGroup) throw v("There is no current merge group", "XTDE3480");
                            if (t[0]) {
                                var n = t[0].next().value, r = e.currentMergeGroup.groups[n];
                                if (r) return E.ForArray(r);
                                throw v("Unknown merge source " + n, "XTDE3490");
                            }
                            return E.ForArray(e.currentMergeGroup.items);
                        },
                        "current-merge-key": function(t, e) {
                            if (null === e.currentMergeGroup) throw v("There is no current merge group", "XTDE3510");
                            return E.ForArray(e.currentMergeGroup.keys);
                        },
                        "current-time": function(t, e) {
                            return E.Singleton(o.time.fromDate(e.fixed.currentDate, -e.fixed.currentDate.getTimezoneOffset()));
                        },
                        data: function(e) {
                            return e[0].mapOneToOne(t.atomize);
                        },
                        dateTime: function(t) {
                            var e = t[0].next(), n = t[1].next();
                            if (null === e || null === n) return E.Empty;
                            var r = "";
                            if (null !== e.timezoneOffset) if (null === n.timezoneOffset) r = e.tzOffsetToString(); else if (null !== n.timezoneOffset && e.timezoneOffset != n.timezoneOffset) throw new v("timezones are incompatible ", "FORG0005");
                            return E.Singleton(o.dateTime.fromString(e.toString().substring(0, 10) + "T" + n.toString() + r));
                        },
                        "day-from-date": function(t) {
                            return P(t, "getUTCDate");
                        },
                        "day-from-dateTime": function(t) {
                            return P(t, "getUTCDate");
                        },
                        "days-from-duration": function(t) {
                            return U(t, 2);
                        },
                        "deep-equal": function(t, e, n) {
                            var r = i.getCollatingFn(n, t[2], "equals", e);
                            return E.oneBoolean(i.deepEqualSequences(t[0], t[1], r));
                        },
                        "default-collation": function() {
                            return E.oneString(i.codepointCollationUri);
                        },
                        "default-language": function() {
                            return E.Singleton(o.language.fromString("en"));
                        },
                        "distinct-values": function(t, e, n) {
                            var r = i.getCollation(n, t[1], e), o = i.trieWithCollation(r);
                            return t[0].filter(function(t) {
                                return !o.containsKey(t) && (o.inSituPut(t, !0), !0);
                            });
                        },
                        doc: function(t, e, n) {
                            var r = c(t, e, n);
                            if (null === r) return E.Singleton(null);
                            var o = a(r, e), i = e.fixed.spaceStripper;
                            return null !== i && (o = i(o)), E.Singleton(o);
                        },
                        "doc-available": function(t, e, n) {
                            var r = c(t, e, n);
                            return null === r ? E.oneBoolean(!1) : m(function() {
                                a(r, e);
                            });
                        },
                        document: function(n, r, o) {
                            var i;
                            if (n[1]) {
                                var u = e.baseURI(n[1].next());
                                u && (i = u);
                            }
                            return i || (i = t.staticBaseUri(o, r)), n[0].mapOneToMany(function(n) {
                                var o = e.isNode(n) ? e.baseURI(n) : i;
                                return t.atomize(n).mapOneToOne(function(t) {
                                    if (null === o) throw new v("No base URI for document('" + t + "')", "XTDE1162");
                                    return a(f.getPlatform().resolveUri(t.toString(), o), r);
                                });
                            });
                        },
                        "document-uri": function(t) {
                            var n = t[0].next();
                            return null !== n && n.nodeType == e.DOCUMENT_NODE && n._saxonBaseUri ? E.Singleton(o.anyURI.fromString(n._saxonBaseUri)) : E.Empty;
                        },
                        "element-available": function(t, e, n) {
                            var r = "http://www.w3.org/1999/XSL/Transform" == p(t[0], n, "XTDE1440").split("}")[0].substring(2);
                            return E.oneBoolean(r);
                        },
                        "element-with-id": function(t, n) {
                            var r = b(t[0]);
                            if (n.noCurrentFocus()) throw new v("No context item for element-with-id()", "XPDY0002");
                            return E.Singleton(e.ownerDocument(n.getCurrentFocus()).getElementById(r));
                        },
                        empty: function(t) {
                            return E.oneBoolean(null === t[0].next());
                        },
                        "encode-for-uri": function(t) {
                            var e = encodeURIComponent(b(t[0])).replace(/[!'()*]/g, function(t) {
                                return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                            });
                            return E.oneString(e);
                        },
                        "ends-with": function(t, e, n) {
                            var r = b(t[0]), o = b(t[1]), a = i.getCollatingFn(n, t[2], "endsWith", e);
                            return E.oneBoolean(a(r, o));
                        },
                        "environment-variable": function() {
                            return E.Empty;
                        },
                        error: function(t) {
                            if (void 0 === t[0]) throw new v("fn:error() invoked", "FOER0000");
                            var e = t[0].next();
                            throw e = e ? e.local : "FOER0000", new v(t[1] ? b(t[1]) : "", e);
                        },
                        "escape-html-uri": function(t) {
                            return y(t, function(t) {
                                return t < 32 || t > 126;
                            });
                        },
                        "exactly-one": function(t) {
                            var e = t[0].expand();
                            if (1 != e.length) throw new v("Required length 1, actual length " + e.length, "FORG0005");
                            return E.Singleton(e[0]);
                        },
                        exists: function(t) {
                            return E.oneBoolean(null !== t[0].next());
                        },
                        false: function() {
                            return E.oneBoolean(!1);
                        },
                        floor: function(t) {
                            return t[0].mapOneToOne(function(t) {
                                return t.floor();
                            });
                        },
                        "format-date": function(t) {
                            return x("format-date", t), t[2] ? E.oneString(M.formatDateTime("date", t[0].next(), t[1].next().toString(), t[2].next(), t[3].next(), t[4].next())) : E.oneString(M.formatDateTime("date", t[0].next(), t[1].next().toString()));
                        },
                        "format-dateTime": function(t) {
                            return x("format-dateTime", t), t[2] ? E.oneString(M.formatDateTime("dateTime", t[0].next(), t[1].next().toString(), t[2].next(), t[3].next(), t[4].next())) : E.oneString(M.formatDateTime("dateTime", t[0].next(), t[1].next().toString()));
                        },
                        "format-integer": function(t) {
                            var e = t[0].next();
                            return null === e ? E.oneString("") : E.oneString(M.formatInteger(e, t[1].next().toString()));
                        },
                        "format-number": function(t, e, n) {
                            var r = t[2] ? p(t[2], n, "XTDE1260") : "Q{}", o = w.declaringPackage(n, e).decimalFormats[null !== r ? r : "Q{}"];
                            if (!o) throw v("Unknown decimal format " + r, "FODF1280");
                            var i = t[0].next();
                            return i = null === i ? Number.NaN : i.toDouble().value, E.oneString(M.formatNumber(i, t[1].next().toString(), o, e));
                        },
                        "format-time": function(t) {
                            return x("format-time", t), t[2] ? E.oneString(M.formatDateTime("time", t[0].next(), t[1].next().toString(), t[2].next(), t[3].next(), t[4].next())) : E.oneString(M.formatDateTime("time", t[0].next(), t[1].next().toString()));
                        },
                        "function-available": function(t, e, n) {
                            var r = !1, i = p(t[0], n, "XTDE1400", w.KNOWN_URI.fn), a = t[1] ? t[1].next().toNumber() : -1;
                            if (e.fixed.userFunctions[i + "#" + a]) r = !0; else {
                                var u = o.QName.fromEQName(i), s = f.getPlatform().readResource("opt/functions.json"), c = JSON.parse(s)[u.uri];
                                r = !(!c || !c[u.local]) && (!(a >= 0) || c[u.local].indexOf(a) >= 0);
                            }
                            return E.oneBoolean(r);
                        },
                        "generate-id": function(t, n) {
                            var r = t[0].next();
                            if (null === r) return E.oneString("");
                            var o, i = g.ancestorOrSelf(r).expand().reverse(), a = "";
                            for (o = 0; o < i.length; o++) {
                                var s;
                                i[o] instanceof u ? a += "N" + i[o].prefix : i[o].nodeType == e.ATTRIBUTE_NODE ? a += "A" + e.nameOfNode(i[o]).local : (s = g.precedingSibling(i[o]).count() + 1, 
                                a += M.formatInteger(s, o % 2 == 0 ? "a" : "A"));
                            }
                            return a = "d" + e.documentNumber(i[0], n) + a, E.oneString(a);
                        },
                        "has-children": function(t) {
                            return E.oneBoolean(null !== g.child(t[0].next()).next());
                        },
                        head: function(t) {
                            return E.Singleton(t[0].next());
                        },
                        "hours-from-dateTime": function(t) {
                            return P(t, "getUTCHours");
                        },
                        "hours-from-duration": function(t) {
                            return U(t, 3);
                        },
                        "hours-from-time": function(t) {
                            return P(t, "getUTCHours");
                        },
                        id: function(t, n) {
                            var r = b(t[0]).trim(), o = t[1] ? t[1].next() : e.ownerDocument(n.getCurrentFocus());
                            if (!e.isNode(o)) throw new v("Context item is not a node for fn:id()", "XPTY0004");
                            if (o.nodeType != h.DOCUMENT_NODE && (o = e.ownerDocument(o)), o.nodeType == h.DOCUMENT_NODE) return E.Singleton(o.getElementById(r));
                            if (o.nodeType == h.DOCUMENT_FRAGMENT_NODE) for (var i, a = g.descendant(o); null !== (i = a.next()); ) if (i.nodeType == h.ELEMENT_NODE && i.getAttributeNS(w.KNOWN_URI.xml, "id") === r) return E.Singleton(i);
                            return E.Empty;
                        },
                        idref: function() {
                            return E.Empty;
                        },
                        "implicit-timezone": function(t, e) {
                            return E.Singleton(o.dayTimeDuration.fromNumberOfMinutes(-e.fixed.currentDate.getTimezoneOffset()));
                        },
                        "index-of": function(t, e, n) {
                            var r = E.Tracker(t[0]), a = t[1].next(), u = i.getCollatingFn(n, t[2], "equals", e), s = i.eqFn(u);
                            return r.mapOneToOne(function(t) {
                                try {
                                    return s(t, a) ? o.integer.fromNumber(r.position) : null;
                                } catch (t) {
                                    return null;
                                }
                            });
                        },
                        innermost: function(n, r, o) {
                            var i = [];
                            return (t.hasFlag(o, "p") ? n[0] : e.inDocumentOrder(n[0])).forEachItem(function(t) {
                                i.length > 0 && g.ancestor(t).some(function(t) {
                                    return t == i[i.length - 1];
                                }) && i.pop(), i.push(t);
                            }), E.ForArray(i);
                        },
                        "in-scope-prefixes": function(t) {
                            var n = t[0].next();
                            return E.ForArray(e.inScopeNamespaces(n).map(function(t) {
                                return o.string.fromString(t.prefix);
                            }));
                        },
                        "insert-before": function(t) {
                            var e = t[1].next().value, n = t[2], r = E.Tracker(t[0]);
                            return e < 1 ? E.Join([ n, r ]) : e > r.last() ? E.Join([ r, n ]) : r.mapOneToMany(function(n) {
                                return r.position == e ? E.Join([ t[2], E.Singleton(n) ]) : E.Singleton(n);
                            });
                        },
                        "iri-to-uri": function(t) {
                            return y(t, function(t, e) {
                                return t <= 32 || t > 126 || /[<>"{}|\\\^`]/.test(e);
                            });
                        },
                        "json-doc": function(t, e, n) {
                            var r, o = c(t, e, n);
                            if (!o) return E.Empty;
                            try {
                                r = s(o, e);
                            } catch (t) {
                                throw v(t.message, "FOUT1170", n);
                            }
                            var i = t[1] ? t[1].next() : null;
                            return E.Singleton(F.parseToMap(r, i));
                        },
                        "json-to-xml": function(e, n, r) {
                            var o = e[0].next();
                            if (!o) return E.Empty;
                            var i = e[1] ? e[1].next() : null, a = F.parseToXml(o.toString(), i, n), u = n.resultDocument.createDocumentFragment();
                            return u.appendChild(a), u._saxonBaseUri = t.staticBaseUri(r, n), E.Singleton(u);
                        },
                        key: function(n, r, o) {
                            var a, u, s = p(n[0], o, "XTDE1260"), c = w.declaringPackage(o, r), l = c.keys[s];
                            if (!l) throw v("Unknown key " + s, "XTDE1280");
                            function f(t) {
                                return {
                                    visibility: "PRIVATE",
                                    decl: t,
                                    pack: c,
                                    actor: t,
                                    bindings: t.getAttribute("binds").split(" ").map(function(t) {
                                        return parseInt(t);
                                    })
                                };
                            }
                            if (n[2]) a = n[2].next(), e.isNode(a) && (u = e.ownerDocument(a)); else {
                                var m = r.getCurrentFocus();
                                e.isNode(m) && (a = e.ownerDocument(m), u = a);
                            }
                            if (!u || u.nodeType !== e.DOCUMENT_NODE && u.nodeType !== e.DOCUMENT_FRAGMENT_NODE) throw new v("No containing document for key()", "XTDE1270", o);
                            "_saxonIndexes" in u || (u._saxonIndexes = {});
                            var d = u._saxonIndexes, y = d[s];
                            if (!y) {
                                var x = i.getCollation(l[0], null, r);
                                y = i.trieWithCollation(x), d[s] = y;
                                for (var S = function(t) {
                                    return E.Join([ g.namespace(t), g.attribute(t) ]);
                                }, N = function(t) {
                                    return g.attribute(t);
                                }, b = function(t) {
                                    return g.namespace(t);
                                }, T = function(t) {
                                    return M.focus = E.Solo(u), F(t, M);
                                }, O = 0; O < l.length; O++) {
                                    var C, D = l[O], _ = e.getChildElements(D)[0], M = r.newContext(!0);
                                    if (M.currentComponent = f(D), M.focus = E.Solo(u), "p.nodeSet" == _.tagName) C = t.evaluate(e.getChildElements(_)[0], M); else {
                                        var F = A(_), I = D.hasAttribute("flags") ? D.getAttribute("flags") : "";
                                        C = g.descendantOrSelf(u);
                                        var k = -1 != I.indexOf("a"), P = -1 != I.indexOf("n");
                                        if (k || P) {
                                            var U = k && P ? S : k ? N : b;
                                            C = C.mapOneToMany(U);
                                        }
                                        C = C.filter(T);
                                    }
                                    var R, B = e.getChildElements(D)[1], X = r.newContext(!0);
                                    for (X.currentComponent = f(D); null !== (R = C.next()); ) {
                                        X.focus = E.Solo(R);
                                        for (var L, z = t.evaluate(B, X); null !== (L = z.next()); ) {
                                            if (!i.itemIsNaN(L)) if (y.containsKey(L)) -1 == y.get(L).indexOf(R) && (y.get(L).push(R), 
                                            l.length > 1 && y.get(L).sort(h.compareDocumentOrder)); else y.inSituPut(L, [ R ]);
                                        }
                                    }
                                }
                            }
                            return n[1].mapOneToMany(function(t) {
                                if (y.containsKey(t)) {
                                    var e = E.ForArray(y.get(t));
                                    return u == a ? e : e.filter(function(t) {
                                        return null !== g.ancestorOrSelf(t).filter(function(t) {
                                            return t == a;
                                        }).next();
                                    });
                                }
                                return E.Empty;
                            });
                        },
                        lang: function(t, n) {
                            var r = t[1] ? t[1].next() : n.getCurrentFocus();
                            if (!r) throw new v("No context item for lang()", "XPDY0002");
                            if (!e.isNode(r)) throw new v("Context item is not a node in lang()", "XPTY0004");
                            var o = b(t[0]).toLowerCase(), i = g.ancestorOrSelf(r).filter(function(t) {
                                return t.nodeType == e.ELEMENT_NODE && t.hasAttribute("xml:lang");
                            }).next();
                            if (!i) return E.oneBoolean(!1);
                            var a = i.getAttribute("xml:lang").toLowerCase(), u = o == a || a.length > o.length + 1 && a.substring(0, o.length) == o && "-" == a.charAt(o.length);
                            return E.oneBoolean(u);
                        },
                        last: function(t, e) {
                            if (e.noCurrentFocus()) throw new v("No context item for last()", "XPDY0002");
                            return E.oneInteger(e.focus.last());
                        },
                        "load-xquery-module": function() {
                            throw new v("No XQuery processor available", "FOQM0006");
                        },
                        "local-name": function(t) {
                            var n = e.nameOfNode(t[0].next());
                            return E.oneString(n ? n.local : "");
                        },
                        "local-name-from-QName": function(t) {
                            var e = t[0].next();
                            return null === e ? E.Empty : E.Singleton(o.NCName.fromString(e.local));
                        },
                        "lower-case": function(t) {
                            return E.oneString(b(t[0]).toLowerCase());
                        },
                        matches: function(t) {
                            var e = b(t[0]), n = t[1].next().toString(), r = t[2] ? t[2].next().toString() : "";
                            if (!r.match(/^[smijxq]*$/)) throw new v("Illegal flags for regular expression: " + r, "FORX0001");
                            var o = O.prepareRegex(n, r, e);
                            return E.oneBoolean(e.search(o) >= 0);
                        },
                        max: k("max"),
                        min: k("min"),
                        "minutes-from-dateTime": function(t) {
                            return P(t, "getUTCMinutes");
                        },
                        "minutes-from-duration": function(t) {
                            return U(t, 4);
                        },
                        "minutes-from-time": function(t) {
                            return P(t, "getUTCMinutes");
                        },
                        "month-from-date": function(t) {
                            return P(t, "getUTCMonth");
                        },
                        "month-from-dateTime": function(t) {
                            return P(t, "getUTCMonth");
                        },
                        "months-from-duration": function(t) {
                            return U(t, 1);
                        },
                        name: function(t) {
                            var n = e.nameOfNode(t[0].next());
                            return E.oneString(n ? n.toString() : "");
                        },
                        "namespace-uri": function(t) {
                            var n = e.nameOfNode(t[0].next());
                            return E.Singleton(o.anyURI.fromString(n ? n.uri : ""));
                        },
                        "namespace-uri-for-prefix": function(t) {
                            var e = b(t[0]), n = t[1].next(), r = "xml" == e ? w.KNOWN_URI.xml : n.lookupNamespaceURI("" === e ? null : e);
                            return r ? E.Singleton(o.anyURI.fromString(r)) : E.Empty;
                        },
                        "namespace-uri-from-QName": function(t) {
                            var e = t[0].next();
                            return null === e ? E.Empty : E.Singleton(o.anyURI.fromString(e.uri));
                        },
                        nilled: function(t) {
                            var n = t[0].next();
                            return n && n.nodeType == e.ELEMENT_NODE ? E.oneBoolean(!1) : E.Empty;
                        },
                        "node-name": function(t) {
                            return E.Singleton(e.nameOfNode(t[0].next()));
                        },
                        "normalize-space": function(t) {
                            var e = b(t[0]);
                            return E.oneString(w.wsCollapse(e));
                        },
                        "normalize-unicode": function(t) {
                            if (String.prototype.normalize) {
                                var e = b(t[0]), n = t[1].next().toString().toUpperCase().trim();
                                if ("NFC" == n || "NFD" == n || "NFKC" == n || "NFKD" == n) return E.oneString(e.normalize(n));
                                if ("" === n) return E.oneString(e);
                            }
                            throw new v("normalize-unicode(): not supported on this Javascript platform", "FOCH0003");
                        },
                        not: function(e) {
                            return E.oneBoolean(!t.ebv(e[0]));
                        },
                        number: function(t) {
                            return E.Singleton(o.numeric.numberFn(t[0].next()));
                        },
                        "one-or-more": function(t) {
                            var e = E.LookAhead(t[0]);
                            if (null === e.peek()) throw new v("Required length >= 1, actual length zero", "FORG0004");
                            return e;
                        },
                        outermost: function(n, r, o) {
                            var i = t.hasFlag(o, "p"), a = n[0];
                            i || (a = e.inDocumentOrder(a));
                            var u = null;
                            return a.filter(function(t) {
                                return null === u ? (u = t, !0) : null === g.ancestor(t).filter(function(t) {
                                    return t === u;
                                }).next() && (u = t, !0);
                            });
                        },
                        "parse-ietf-date": function(t) {
                            return t[0].mapOneToOne(function(t) {
                                var e, n, r, i, a, u, s = function() {
                                    throw new v("Invalid IETF date/time " + t.toString(), "FORG0010");
                                }, c = function(t) {
                                    return 1 == t.length ? "0" + t : t;
                                }, l = t.toString().trim().toLowerCase();
                                l = l.replace(/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tue|wed|thu|fri|sat|sun),?\s+/, ""), 
                                /^[a-z]/.test(l) ? null !== (e = /^([a-z]{3})(?:\s*\-\s*|\s+)(\d\d\d?\d?)\s+([\d:\.]+)\s*([a-z]+|[+\-]\d\d?:?(?:\d\d)?(?:\s*\(\s*[a-z]+\s*\))?)?\s+(\d+)$/.exec(l)) ? (n = e[1], 
                                r = e[2], a = e[3], u = e[4], i = e[5]) : s() : null !== (e = /^(\d+)(?:\s*\-\s*|\s+)([a-z]{3})(?:\s*\-\s*|\s+)(\d\d\d?\d?)\s+([\d:\.]+)\s*([a-z]+|[+\-]\d\d?:?(?:\d\d)?(?:\s*\(\s*[a-z]+\s*\))?)?$/.exec(l)) ? (r = e[1], 
                                n = e[2], i = e[3], a = e[4], u = e[5]) : s(), 2 == i.length && (i = "19" + i);
                                var f = "jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec".indexOf(n);
                                f < 0 && s();
                                var m = {
                                    ut: "Z",
                                    utc: "Z",
                                    gmt: "Z",
                                    est: "-05:00",
                                    edt: "-04:00",
                                    cst: "-06:00",
                                    cdt: "-05:00",
                                    mst: "-07:00",
                                    mdt: "-06:00",
                                    pst: "-08:00",
                                    pdt: "-07:00"
                                };
                                if (/^[0-9]:/.test(a) && (a = "0" + a), 5 == a.length && (a += ":00"), u) {
                                    var p = /([a-z]+)|([+\-]\d\d?:?(?:\d\d)?)(?:\s*\(\s*([a-z]+)\s*\))?$/.exec(u);
                                    (!p[3] || p[3] in m) && (!p[1] || p[1] in m) || s(), u = p[1] ? p[1] : p[2], /^[+\-][0-9]((:|$)|[0-9]{2}$)/.test(u) && (u = u.substring(0, 1) + "0" + u.substring(1)), 
                                    u in m ? u = m[u] : 3 == u.length ? u += ":00" : 4 == u.length ? u += "00" : 5 == u.length && (u = u.substring(0, 3) + ":" + u.substring(3));
                                }
                                var h = i + "-" + c((f / 4 + 1).toString()) + "-" + c(r) + "T" + a + (u || "Z");
                                return o.dateTime.fromString(h);
                            });
                        },
                        "parse-json": function(t) {
                            var e = t[0].next().toString(), n = t[1] ? t[1].next() : null;
                            return E.Singleton(F.parseToMap(e, n));
                        },
                        "parse-xml": function(e, n, r) {
                            var o = e[0].next().toString();
                            try {
                                var i = f.getPlatform().parseXmlFromString(o);
                                return i._saxonBaseUri = t.staticBaseUri(r, n), E.Singleton(i);
                            } catch (t) {
                                throw new v("Misplaced or malformed XML:", "FODC0006");
                            }
                        },
                        "parse-xml-fragment": function(e, n, r) {
                            return e[0].mapOneToOne(function(e) {
                                var o, i = /^<\?xml(?:\s+version\s*=\s*(['"])1.[0-9]+['"])?\s+encoding\s*=\s*(['"][A-Za-z](?:[A-Za-z0-9._\-])*)['"]\s*\?>/, a = e.toString().replace(i, "");
                                try {
                                    o = f.getPlatform().parseXmlFromString("<z>" + a + "</z>");
                                } catch (t) {
                                    throw new v("Misplaced or malformed XML:", "FODC0006");
                                }
                                var u = n.resultDocument.createDocumentFragment();
                                return g.child(o.documentElement).forEachItem(function(t) {
                                    u.appendChild(t);
                                }), u._saxonBaseUri = t.staticBaseUri(r, n), u;
                            });
                        },
                        path: function(t) {
                            return t[0].mapOneToOne(function(t) {
                                var n = "";
                                return g.ancestorOrSelf(t).forEachItem(function(t) {
                                    var r, o = function(t) {
                                        return g.precedingSibling(t).filter(function(e) {
                                            return t.nodeType == e.nodeType;
                                        });
                                    }, i = function(t) {
                                        return 1 + o(t).count();
                                    };
                                    switch (t.nodeType) {
                                      case e.DOCUMENT_NODE:
                                      case e.DOCUMENT_FRAGMENT_NODE:
                                      default:
                                        break;

                                      case e.ELEMENT_NODE:
                                        r = e.nameOfNode(t), n = "/" + r.toEQName() + "[" + (1 + o(t).filter(function(t) {
                                            return e.nameOfNode(t).equals(r);
                                        }).count()) + "]" + n;
                                        break;

                                      case e.TEXT_NODE:
                                        n = "/text()[" + i(t) + "]";
                                        break;

                                      case e.COMMENT_NODE:
                                        n = "/comment()[" + i(t) + "]";
                                        break;

                                      case e.PROCESSING_INSTRUCTION_NODE:
                                        n = "/processing-instruction(" + t.target + ")[" + (1 + o(t).filter(function(e) {
                                            return t.target == e.target;
                                        }).count()) + "]";
                                        break;

                                      case e.ATTRIBUTE_NODE:
                                        n = "/@" + (t.name.indexOf(":") < 0 ? t.name : e.nameOfNode(t).toEQName());
                                        break;

                                      case e.NAMESPACE_NODE:
                                        n = "/namespace::" + ("" !== t.prefix ? t.prefix : "*[Q{" + w.KNOWN_URI.fn + '}local-name()=""]');
                                    }
                                }), "" === n && (n = "/"), o.string.fromString(n);
                            });
                        },
                        "prefix-from-QName": function(t) {
                            return t[0].mapOneToOne(function(t) {
                                return "" === t.prefix ? null : o.NCName.fromString(t.prefix);
                            });
                        },
                        position: function(t, e) {
                            if (e.noCurrentFocus()) throw new v("No context item for position()", "XPDY0002");
                            return E.oneInteger(e.focus.position);
                        },
                        QName: function(t) {
                            var e = t[1].next().value.split(":"), n = 2 == e.length ? e[0] : "", r = b(t[0]);
                            if ("" !== n && "" === r) throw new v("Prefix but no URI for QName()", "FOCA0002");
                            if (2 == e.length && "" === n || "" !== n && !O.isNCName(n)) throw new v("$paramQName not valid for QName()", "FOCA0002");
                            var i = 2 == e.length ? e[1] : e[0];
                            if (!O.isNCName(i)) throw new v("$paramQName not valid for QName()", "FOCA0002");
                            return E.Singleton(o.QName.fromParts(n, r, i));
                        },
                        "regex-group": function(t, e) {
                            var n = t[0].next().toNumber();
                            try {
                                return E.oneString(e.focus.regexGroups[n] || "");
                            } catch (t) {
                                return E.oneString("");
                            }
                        },
                        remove: function(t) {
                            var e = t[1].next().toNumber(), n = E.Tracker(t[0]);
                            return n.filter(function(t) {
                                return n.position != e;
                            });
                        },
                        replace: function(t) {
                            var e = b(t[0]), n = t[3] ? t[3].next().toString() : "";
                            if (!n.match(/^[smijxq]*$/)) throw new v("Illegal flags for regular expression: " + n, "FORX0001");
                            var r = O.prepareRegex(t[1].next().toString(), n + "g");
                            if (r.test("")) throw new v("Regular expression matches zero-length string", "FORX0003");
                            var o = O.convertReplacement(t[2].next().toString(), n);
                            return E.oneString(e.replace(r, o));
                        },
                        "resolve-QName": function(t) {
                            var n = t[1].next();
                            return t[0].mapOneToOne(function(t) {
                                try {
                                    return e.resolveLexicalQName(n, t.toString(), !0);
                                } catch (e) {
                                    throw e instanceof v && "FORG0001" == e.code && (e.code = O.isQName(t) ? "FONS0004" : "FOCA0002"), 
                                    e;
                                }
                            });
                        },
                        "resolve-uri": function(e, n, r) {
                            var i = e[1] ? e[1].next().toString() : t.staticBaseUri(r, n), a = e[0].next();
                            if (null === a) return E.Empty;
                            i = i.replace(/^file:\/(?!\/)/, "file:///"), a = a.toString();
                            var u, s = h.isAbsoluteURI(a);
                            if (!s && !h.isAbsoluteURI(i)) throw new v("resolve-uri: invalid URI (base=" + i + ", relative=" + a + ")", "FORG0002");
                            if (!f.getPlatform().inBrowser && /#/.test(i)) throw new v("Base URI " + i + " contains a fragment identifier", "FORG0002");
                            try {
                                u = s ? a : f.getPlatform().resolveUri(a, i).toString();
                            } catch (t) {
                                throw t;
                            }
                            return E.Singleton(o.anyURI.fromString(u));
                        },
                        reverse: function(t) {
                            return E.ForArray(t[0].expand().slice().reverse());
                        },
                        root: function(t) {
                            return t[0].mapOneToMany(function(t) {
                                return g.ancestorOrSelf(t);
                            }).filter(function(t) {
                                return null === e.xdmParentNode(t);
                            });
                        },
                        round: function(t) {
                            return t[0].mapOneToOne(function(e) {
                                return e.round(t[1] ? t[1].next().value : 0);
                            });
                        },
                        "round-half-to-even": function(t) {
                            return t[0].mapOneToOne(function(e) {
                                return e.roundHalfToEven(t[1] ? t[1].next().value : 0);
                            });
                        },
                        "seconds-from-dateTime": function(t) {
                            return P(t, "seconds");
                        },
                        "seconds-from-duration": function(t) {
                            return U(t, 5);
                        },
                        "seconds-from-time": function(t) {
                            return P(t, "seconds");
                        },
                        serialize: function(e) {
                            return E.oneString(t.serialize(e[0], e[1] ? e[1] : void 0));
                        },
                        snapshot: function(t, n, r) {
                            return t[0].mapOneToOne(function(t) {
                                var r = e.copyItem(t, n, "cm"), o = r;
                                return g.ancestor(t).forEachItem(function(t) {
                                    var r = e.shallowCopy(t, n, "c", function() {
                                        return E.Empty;
                                    }).next();
                                    g.attribute(t).forEachItem(function(t) {
                                        var e = "" === t.namespaceURI ? null : t.namespaceURI;
                                        r.setAttributeNS(e, t.name, t.value);
                                    }), r._saxonOriginal = t, r.appendChild(o), o = r;
                                }), r;
                            });
                        },
                        "starts-with": function(t, e, n) {
                            var r = b(t[0]), o = b(t[1]), a = i.getCollatingFn(n, t[2], "startsWith", e);
                            return E.oneBoolean(a(r, o));
                        },
                        "static-base-uri": function(e, n, r) {
                            return E.oneString(t.staticBaseUri(r, n));
                        },
                        "stream-available": function() {
                            return E.oneBoolean(!1);
                        },
                        string: function(e) {
                            var n = e[0].next();
                            if (!n) return E.oneString("");
                            if (t.isArray(n) || t.isMap(n)) throw new v("Input to string() is a function item ", "FOTY0014");
                            return t.atomize(n).mapOneToOne(function(t) {
                                return o.string.cast(t);
                            });
                        },
                        "string-join": function(t) {
                            for (var e, n = "", r = t[1] ? t[1].next().value : "", o = !0; null !== (e = t[0].next()); ) o || (n += r), 
                            n += e.toString(), o = !1;
                            return E.oneString(n);
                        },
                        "string-length": function(t) {
                            return E.oneInteger(T(t[0]).length);
                        },
                        "string-to-codepoints": function(t) {
                            return E.ForArray(T(t[0]).map(o.integer.fromNumber));
                        },
                        subsequence: function(t) {
                            return E.ForArray(C(t[0].expand(), t[1], t[2]));
                        },
                        substring: function(e) {
                            var n = T(e[0]);
                            return E.oneString(t.codepointsToString(C(n, e[1], e[2])));
                        },
                        "substring-after": function(t, e, n) {
                            var r, o = "", a = b(t[0]), u = b(t[1]);
                            return -1 != (r = i.getCollatingFn(n, t[2], "indexOf", e)(a, u)) && (o = a.substring(r + u.length)), 
                            E.oneString(o);
                        },
                        "substring-before": function(t, e, n) {
                            var r, o = "", a = b(t[0]), u = b(t[1]);
                            return -1 != (r = i.getCollatingFn(n, t[2], "indexOf", e)(a, u)) && (o = a.substring(0, r)), 
                            E.oneString(o);
                        },
                        sum: function(e) {
                            var n = e[0].mapOneToOne(t.untypedToDouble), r = n.next();
                            return null === r ? 1 == e.length ? E.oneInteger(0) : e[1] : (_["a+a"](r, r), E.Singleton(D(n, r, _["a+a"])));
                        },
                        "system-property": function(t, e, n) {
                            var r, i = o.QName.fromEQName(p(t[0], n, "XTDE1390"));
                            return i.uri == w.KNOWN_URI.xsl && (r = N[i.local]), E.oneString(r || "");
                        },
                        tail: function(t) {
                            var e = E.Tracker(t[0]);
                            return e.filter(function() {
                                return 1 != e.position;
                            });
                        },
                        "timezone-from-date": function(t) {
                            return P(t, "timezone");
                        },
                        "timezone-from-dateTime": function(t) {
                            return P(t, "timezone");
                        },
                        "timezone-from-time": function(t) {
                            return P(t, "timezone");
                        },
                        tokenize: function(t) {
                            var e = b(t[0]);
                            if (t[1] || (e = w.wsCollapse(e)), "" === e) return E.Empty;
                            var n = t[1] ? t[1].next().toString() : "[ \\n\\r\\t]+", r = w.analyze(e, n, t[2] ? t[2].next().toString() : "", !1, !0), i = t[1] && r[0].matching, a = r[r.length - 1], u = t[1] && a.matching, s = r.filter(function(t) {
                                return !t.matching;
                            }).map(function(t) {
                                return t.string;
                            });
                            return i && s.unshift(o.string.fromString("")), u && s.push(o.string.fromString("")), 
                            E.ForArray(s);
                        },
                        trace: function(t) {
                            var e = t[0].expand();
                            return z((t[1] ? t[1].next().toString() + ": " : "") + r(e), 1), E.ForArray(e);
                        },
                        transform: function(t, e, n) {
                            var r, o = t[0].next(), i = E.oneString("stylesheet-node"), a = E.oneString("source-node"), u = E.oneString("initial-template"), s = E.oneString("initial-mode"), c = E.oneString("stylesheet-parameters"), l = document.implementation.createDocument(null, null, null);
                            (r = E.ForArray(o.get(i.next())).peek().cloneNode(!0)) instanceof XMLDocument && (r = r.documentElement), 
                            l.appendChild(r);
                            var m = null, p = E.ForArray(o.get(a.next())).peek();
                            if (null !== p) if ((m = document.implementation.createDocument(null, null, null))._saxonBaseUri = p._saxonBaseUri, 
                            p instanceof XMLDocument) for (var h = p.childNodes, d = 0; d < h.length; d++) m.appendChild(h[d].cloneNode(!0)); else r = p.cloneNode(!0), 
                            m.appendChild(r);
                            var g = E.ForArray(o.get(u.next())).peek();
                            null !== g && (o.initialTemplate = g.toString());
                            var y = E.ForArray(o.get(s.next())).peek();
                            null !== y && (o.initialMode = y.toString()), o.stylesheetParams = {};
                            var x = E.ForArray(o.get(c.next())).peek();
                            null !== x && (o.stylesheetParams = w.convertToJS(x, !1, !0)), o.isDynamicStylesheet = !0;
                            try {
                                f.internalTransform(l, m, o);
                            } catch (t) {
                                if (t instanceof v && t.isGlobal) throw new v(t.message, t.code);
                                throw t;
                            }
                            return f.U.Iter.Singleton(o.principalResult);
                        },
                        translate: function(e) {
                            var n = T(e[0]), r = T(e[1]), o = T(e[2]), i = [];
                            return n.forEach(function(t) {
                                var e;
                                -1 != (e = r.indexOf(t)) ? e < o.length && i.push(o[e]) : i.push(t);
                            }), E.oneString(t.codepointsToString(i));
                        },
                        true: function() {
                            return E.oneBoolean(!0);
                        },
                        "type-available": function(t, e, n) {
                            var r = p(t[0], n, "XTDE1428").split("}");
                            return E.oneBoolean("Q{http://www.w3.org/2001/XMLSchema" == r[0] && (r[1] in o || "untyped" === r[1]));
                        },
                        unordered: function(t) {
                            return t[0];
                        },
                        "unparsed-entity-public-id": function() {
                            return E.Empty;
                        },
                        "unparsed-entity-uri": function() {
                            return E.Empty;
                        },
                        "unparsed-text": function(t, e, n) {
                            return E.oneString(l(t, e, n));
                        },
                        "unparsed-text-available": function(t, e, n) {
                            return m(function() {
                                l(t, e, n);
                            });
                        },
                        "unparsed-text-lines": function(t, e, n) {
                            var r = l(t, e, n).split(/\r?\n|\r/);
                            return r.length > 0 && "" === r[r.length - 1] && (r.length -= 1), E.ForArray(r).mapOneToOne(function(t) {
                                return o.string.fromString(t);
                            });
                        },
                        "upper-case": function(t) {
                            return E.oneString(b(t[0]).toUpperCase());
                        },
                        "uri-collection": function() {
                            return E.Empty;
                        },
                        "xml-to-json": function(t) {
                            var e = t[1] ? t[1].next() : new d();
                            return t[0].mapOneToOne(function(t) {
                                return o.string.fromString(F.xmlToJson(t, e));
                            });
                        },
                        "year-from-date": function(t) {
                            return P(t, "getUTCFullYear");
                        },
                        "year-from-dateTime": function(t) {
                            return P(t, "getUTCFullYear");
                        },
                        "years-from-duration": function(t) {
                            return U(t, 0);
                        },
                        "zero-or-one": function(t) {
                            var e = t[0].expand();
                            if (e.length > 1) throw new v("Required length 0-1, actual length " + e.length, "FORG0003");
                            return E.Singleton(e[0] ? e[0] : null);
                        }
                    };
                }(), D = (y = function(t, e, n, r) {
                    var o = !1;
                    function i(t) {
                        return null === t ? (o = !0, Number.NaN) : t.toNumber();
                    }
                    function a() {
                        return i(w.evalChild1(r, n).next());
                    }
                    function u() {
                        return i(w.evalChild2(r, n).next());
                    }
                    function s() {
                        switch (t) {
                          case "pi":
                            return Math.PI;

                          case "exp":
                            return Math.exp(a());

                          case "exp10":
                            return Math.pow(10, a());

                          case "log":
                            return Math.log(a());

                          case "log10":
                            return Math.log(a()) / Math.LN10;

                          case "pow":
                            var e = a(), n = u();
                            return -1 == e && (n == 1 / 0 || n == -1 / 0) || 1 == e ? 1 : Math.pow(e, n);

                          case "sqrt":
                            return Math.sqrt(a());

                          case "sin":
                            return Math.sin(a());

                          case "cos":
                            return Math.cos(a());

                          case "tan":
                            return Math.tan(a());

                          case "asin":
                            return Math.asin(a());

                          case "acos":
                            return Math.acos(a());

                          case "atan":
                            return Math.atan(a());

                          case "atan2":
                            return Math.atan2(a(), u());

                          default:
                            throw v("Unknown math function " + r.getAttribute("name"), "XPST0017", r);
                        }
                    }
                    var c = s();
                    return o ? E.Empty : E.oneDouble(c);
                }, x = function(t, e, n, r) {
                    var i = {
                        contains: function(t) {
                            var e = t[0].next(), n = t[1].next();
                            return E.oneBoolean(e.containsKey(n));
                        },
                        create: function(t) {
                            var e = new d();
                            return t[0].forEachItem(function(t) {
                                t.forAllPairs(function(t) {
                                    e.inSituPut(t.k, t.v);
                                });
                            }), E.Singleton(e);
                        },
                        entry: function(t) {
                            var e = new d();
                            return e.inSituPut(t[0].next(), t[1].expand()), E.Singleton(e);
                        },
                        find: function(t) {
                            var e = [], n = t[1].next();
                            function r(t) {
                                w.isArray(t) ? t.value.forEach(o) : w.isMap(t) && (t.containsKey(n) && e.push(t.get(n)), 
                                t.keys().forEach(function(e) {
                                    o(t.get(e));
                                }));
                            }
                            function o(t) {
                                t.forEach(r);
                            }
                            return o(t[0].expand()), E.Singleton(new w.XdmArray(e));
                        },
                        get: function(t) {
                            var e = t[0].next(), n = t[1].next();
                            return E.ForArray(e.get(n));
                        },
                        keys: function(t) {
                            var e = t[0].next();
                            return E.ForArray(e.keys());
                        },
                        merge: function(t) {
                            var e = new d(), n = t[1] ? t[1].next() : null;
                            return t[0].forEachItem(function(t) {
                                t.forAllPairs(function(t) {
                                    var i = o.string.fromString("duplicates"), a = n && n.containsKey(i) ? n.get(i).toString() : "use-first";
                                    if (e.containsKey(t.k) && "use-last" != a && "unspecified" != a && "use-any" != a) {
                                        if ("reject" == a) {
                                            var u = o.string.fromString("duplicates-error-code"), s = n.containsKey(u) ? n.get(u).toString() : "FOJS0003";
                                            throw v("Duplicate key value '" + t.k.toString() + "'", s, r);
                                        }
                                        if ("combine" == a) {
                                            var c = e.get(t.k);
                                            t.v.forEach(function(t) {
                                                c.push(t);
                                            }), e.inSituPut(t.k, c);
                                        }
                                    } else e.inSituPut(t.k, t.v);
                                });
                            }), E.Singleton(e);
                        },
                        _new: function(t) {
                            var e = new d();
                            return t[0] && t[0].forEachItem(function(t) {
                                t.forAllPairs(function(t) {
                                    if (e.containsKey(t.k)) throw v("Duplicate key value '" + t.k.toString() + "'", "XQDY0137", r);
                                    e.inSituPut(t.k, t.v);
                                });
                            }), E.Singleton(e);
                        },
                        put: function(t) {
                            var e = t[0].next(), n = t[1].next(), r = t[2].expand();
                            return E.Singleton(e.put(n, r));
                        },
                        remove: function(t) {
                            var e = t[0].next();
                            return t[1].forEachItem(function(t) {
                                e = e.remove(t);
                            }), E.Singleton(e);
                        },
                        size: function(t) {
                            var e = 0;
                            return t[0].next().forAllPairs(function() {
                                e++;
                            }), E.oneInteger(e);
                        },
                        "untyped-contains": function(t) {
                            var e = t[0].next(), n = t[1].next();
                            return E.oneBoolean(e.containsKey(n));
                        }
                    };
                    if (!i[t]) throw v("Unknown map function: " + t, "SXJS0003", r);
                    return i[t](e, n, r);
                }, S = function(t, e, n, r) {
                    function o(t, e) {
                        if (t < 1 || t > e) throw v("Array index (" + t + ") out of bounds (1 to " + e + ")", "FOAY0001", r);
                    }
                    function a(t) {
                        return t[0].next().value;
                    }
                    function u(t) {
                        return t[1].next().toNumber();
                    }
                    function s(t) {
                        return E.Singleton(new w.XdmArray(t));
                    }
                    var c = {
                        append: function(t) {
                            return s(a(t).concat([ t[1].expand() ]));
                        },
                        flatten: function(t) {
                            return w.flatten(t[0]);
                        },
                        "_from-sequence": function(t) {
                            var e = [];
                            return t[0].forEachItem(function(t) {
                                e.push([ t ]);
                            }), s(e);
                        },
                        get: function(t) {
                            var e = a(t), n = u(t);
                            return o(n, e.length), E.ForArray(e[n - 1]);
                        },
                        head: function(t) {
                            var e = a(t);
                            return o(1, e.length), E.ForArray(e[0]);
                        },
                        "insert-before": function(t) {
                            var e = a(t), n = u(t);
                            o(n, e.length + 1);
                            var r = t[2].expand();
                            return s(e.slice(0, n - 1).concat([ r ]).concat(e.slice(n - 1)));
                        },
                        join: function(t) {
                            var e = [];
                            return t[0].forEachItem(function(t) {
                                t.value.forEach(function(t) {
                                    e.push(t);
                                });
                            }), s(e);
                        },
                        put: function(t) {
                            var e = a(t), n = u(t);
                            o(n, e.length);
                            var r = t[2].expand();
                            return s(e.slice(0, n - 1).concat([ r ]).concat(e.slice(n)));
                        },
                        remove: function(t) {
                            var e = a(t), n = [];
                            return t[1].forEachItem(function(t) {
                                var r = t.toNumber();
                                o(r, e.length), n.push(r - 1);
                            }), s(e.filter(function(t, e) {
                                return n.indexOf(e) < 0;
                            }));
                        },
                        reverse: function(t) {
                            return s(a(t).slice().reverse());
                        },
                        size: function(t) {
                            return E.oneInteger(a(t).length);
                        },
                        sort: function(t) {
                            var e = i.getCollation(r, t[1], n);
                            function o(n, r) {
                                var o = function(t) {
                                    return E.ForArray(t).mapOneToMany(w.atomize);
                                };
                                return t[1] ? i.lexicographicCompare(o(n), o(r), e) : i.lexicographicCompare(o(n), o(r));
                            }
                            return s(a(t).slice().sort(o));
                        },
                        subarray: function(t) {
                            var e = a(t), n = u(t);
                            o(n, e.length + 1);
                            var r = t[2] ? t[2].next().toNumber() : e.length - n + 1;
                            return v.test(r < 0, "Length is negative", "FOAY0002"), o(n + r, e.length + 1), 
                            s(e.slice(n - 1, n + r - 1));
                        },
                        tail: function(t) {
                            var e = a(t);
                            return o(1, e.length), s(e.slice(1));
                        },
                        "_to-sequence": function(t) {
                            var e = [];
                            return a(t).forEach(function(t) {
                                t.forEach(function(t) {
                                    e.push(t);
                                });
                            }), E.ForArray(e);
                        }
                    };
                    if (!c[t]) throw v("Unknown array function: " + t, "SXJS0003", r);
                    return c[t](e, n, r);
                }, N = function(t, e, n, r) {
                    function i(t, e) {
                        for (var n = t, o = 0; o < e.length; o++) {
                            try {
                                n = n[e[o]];
                            } catch (t) {
                                if (null !== t.code) throw t;
                                throw v("Failed to get property " + e[o], "SXJS0007", r);
                            }
                            if (void 0 === n) return;
                        }
                        return n;
                    }
                    function a(t, e, n) {
                        var o;
                        try {
                            o = t.apply(n, e);
                        } catch (e) {
                            if (null !== e.code) throw e;
                            throw v("Failed to call method " + t, "SXJS0007", r);
                        }
                        if (null === o || void 0 === o) return E.Empty;
                        var i = w.convertFromJS(o);
                        return Array.isArray(i) ? E.ForArray(i) : E.Singleton(i);
                    }
                    function u(t) {
                        return t instanceof w.JSValue ? t.value : t;
                    }
                    var s = {
                        apply: function(t) {
                            var e = u(t[0].next());
                            if ("function" != typeof e) throw v("ixsl:apply: first argument is not a function", "SXJS0007", r);
                            return a(e, w.convertToJS(t[1].next()), null);
                        },
                        call: function(t) {
                            var e = u(t[0].next()), n = t[1].next().toString(), o = i(e, n.split("."));
                            if (void 0 === o) throw v("ixsl:call: object method '" + n + "' not found", "SXJS0007", r);
                            if ("function" != typeof o) throw v("ixsl:call: property '" + n + "' is not a function", "SXJS0007", r);
                            return a(o, w.convertToJS(t[2].next()), e);
                        },
                        eval: function(t) {
                            var e = t[0].next().toString(), n = new Function("return " + e), r = w.convertFromJS(n());
                            return Array.isArray(r) ? E.ForArray(r) : E.Singleton(r);
                        },
                        event: function(t, e) {
                            return null === e.currentEvent ? E.Empty : E.Singleton(w.convertFromJS(e.currentEvent));
                        },
                        get: function(t) {
                            var e = u(t[0].next());
                            if (null === e) return E.Empty;
                            var n = t[1].next().toString(), r = i(e, n.split("."));
                            if (void 0 === r) return z("Warning ixsl:get: object property '" + n + "' not found", 1), 
                            E.Empty;
                            var o = w.convertFromJS(r);
                            return Array.isArray(o) ? E.ForArray(o) : E.Singleton(o);
                        },
                        location: function() {
                            return E.Singleton(w.convertFromJS(window.location.toString()));
                        },
                        page: function() {
                            return E.Singleton(w.convertFromJS(window.document));
                        },
                        "query-params": function() {
                            for (var t, e = /\+/g, n = /([^&=]+)=?([^&]*)/g, r = function(t) {
                                return o.string.fromString(decodeURIComponent(t.replace(e, " ")));
                            }, i = window.location.search.substring(1), a = new d(); null !== (t = n.exec(i)); ) {
                                var u = a.get(r(t[1]));
                                u.push(r(t[2])), a.inSituPut(r(t[1]), u);
                            }
                            return E.Singleton(a);
                        },
                        source: function(t, e) {
                            return null === e.fixed.globalContextItem ? E.Empty : E.Singleton(w.convertFromJS(e.fixed.globalContextItem));
                        },
                        style: function(t) {
                            for (var e = t[0].next(), n = e instanceof Element ? window.getComputedStyle(e) : {}, r = new d(), i = 0; i < n.length; i++) {
                                var a = n.item(i), u = n.getPropertyValue(a);
                                void 0 === u || null === u ? r.inSituPut(o.string.fromString(a), []) : r.inSituPut(o.string.fromString(a), [ o.string.fromString(u.toString()) ]);
                            }
                            return E.Singleton(r);
                        },
                        window: function() {
                            return E.Singleton(w.convertFromJS(window));
                        },
                        "remove-attribute": function(t, e, n) {
                            var r = t[0].next().toString(), i = o.QName.fromString(r, w.stylesheetResolver(n, !1));
                            if (e.noCurrentFocus()) throw v("No context item for ixsl:remove-attribute", "SXJS0007", n);
                            var a = e.getCurrentFocus();
                            if (!(a instanceof Element) || a.ownerDocument != window.document) throw v("Context item for ixsl:remove-attribute must be an element in the HTML page", "SXJS0007", n);
                            return a.removeAttribute(i.local), E.Empty;
                        },
                        "schedule-action": function() {
                            throw v("ixsl:schedule-action - shouldn't be here", "SXJS0007", r);
                        },
                        "set-attribute": function(t, e, n) {
                            var r = t[0].next().toString(), i = t[1].next().toString(), a = o.QName.fromString(r, w.stylesheetResolver(n, !1));
                            if (null === a) throw v("Invalid attribute name " + r, "XTDE1260");
                            if (e.noCurrentFocus()) throw v("No context item for ixsl:set-attribute", "SXJS0007", n);
                            var u = e.getCurrentFocus();
                            if (!(u instanceof Element) || u.ownerDocument != window.document) throw v("Context item for ixsl:set-attribute must be an element in the HTML page", "SXJS0007", n);
                            return u.setAttribute(a.local, i), E.Empty;
                        },
                        "set-property": function(t, e, n) {
                            var r = t[0].next().toString(), o = w.convertToJS(t[1].next()), a = u(t[2].next()), s = r.split("."), c = s.pop(), l = i(a, s);
                            return void 0 === l || "" === l ? (z("Warning ixsl:set-property: '" + r + "' not found for supplied object", 1), 
                            E.Empty) : (l[c] = o, E.Empty);
                        },
                        "set-style": function(t, e, n) {
                            var r = t[0].next().toString(), o = w.convertToJS(t[1].next()), i = t[2] ? t[2].next() : e.getCurrentFocus();
                            if (!i) throw v("No context item for ixsl:set-style", "SXJS0007", n);
                            return i instanceof Element && "style" in i ? (i.style[r] = o, E.Empty) : (z("Warning ixsl:set-style: style '" + r + "' cannot be set for supplied object", 1), 
                            E.Empty);
                        }
                    };
                    if (!s[t]) throw v("Unknown ixsl function: " + t, "SXJS0003", r);
                    return s[t](e, n, r);
                }, b = function(t, e, n, r) {
                    var i = {
                        apply: C.apply,
                        "compile-XPath": function(t) {
                            var e, o, i = t[0].next().toString();
                            return t.length > 1 && (e = null !== (e = t[1].next()) ? w.convertToJS(e) : {}), 
                            t.length > 2 && (o = t[2]), f.XPath.compile(i, e, o, r, n);
                        },
                        "discard-document": function(t, e, n) {
                            var r = t[0].next();
                            if (null === r || r.nodeType != h.DOCUMENT_NODE || !r._saxonBaseUri) throw new v("Node supplied to saxon:discard-document() is not a document node", "XPTY0004", n);
                            var o = r._saxonBaseUri, i = e.fixed.documentPool[o];
                            return delete e.fixed.documentPool[o], E.Singleton(i);
                        },
                        doc: C.doc,
                        "dynamic-error-info": function(t) {
                            var e = n.currentError;
                            if (null === e) return E.Empty;
                            var r = t[0].next().toString();
                            switch (r) {
                              case "description":
                                return E.oneString(e.message);

                              case "code":
                                return E.Singleton(o.QName.fromParts("err", "http://www.w3.org/2005/xqt-errors", e.code));

                              case "value":
                                return E.Empty;

                              case "module":
                                return E.oneString(e.xsltModule);

                              case "line-number":
                                return E.oneInteger(e.xsltLineNr);

                              case "column-number":
                                return E.oneInteger(-1);

                              default:
                                throw v("unknown error info field " + r, "SXJS0003");
                            }
                        },
                        "parse-XPath": function(t) {
                            var e, n = t[0].next().toString(), r = "parse";
                            return t.length > 1 && (r = t[1].next().toString()), t.length > 2 && (e = t[2]), 
                            f.XPath.parse(n, r, e);
                        },
                        timestamp: function(t) {
                            return E.Singleton(o.dateTimeStamp.fromDate(new Date(), -n.fixed.currentDate.getTimezoneOffset()));
                        }
                    };
                    if (!i[t]) throw v("Unknown saxon function: " + t, "SXJS0003", r);
                    return i[t](e, n, r);
                }, function(t, e, n, r, o) {
                    switch (t) {
                      case w.KNOWN_URI.fn + "/math":
                        return y(e, n, r, o);

                      case w.KNOWN_URI.fn + "/map":
                        return x(e, n, r, o);

                      case w.KNOWN_URI.fn + "/array":
                        return S(e, n, r, o);

                      case w.KNOWN_URI.ixsl:
                        return N(e, n, r, o);

                      case w.KNOWN_URI.saxon:
                        return b(e, n, r, o);

                      default:
                        throw v("Unknown namespace " + t, "SXJS0003", o);
                    }
                }), _ = function() {
                    function t(t) {
                        return Math.abs(t) < Math.pow(2, 52);
                    }
                    var e = o.double, n = o.decimal, r = o.integer, i = o.float;
                    function a(t, e) {
                        return r.matches(t) && r.matches(e) ? r : n;
                    }
                    function u(t) {
                        throw new v("Division by zero", t || "FOAR0001");
                    }
                    function s(t, e, n) {
                        throw new v("Arithmetic operation '" + n + "' not available for operands " + t.type + " and " + e.type, "XPTY0004");
                    }
                    var c = {
                        "d+d": function(t, n) {
                            var r = t.toNumber(), o = n.toNumber();
                            return e.fromNumber(r + o);
                        },
                        "d-d": function(t, n) {
                            var r = t.toNumber(), o = n.toNumber();
                            return e.fromNumber(r - o);
                        },
                        "d*d": function(t, n) {
                            var r = t.toNumber(), o = n.toNumber();
                            return e.fromNumber(r * o);
                        },
                        "d/d": function(t, n) {
                            var r = t.toNumber(), o = n.toNumber();
                            return e.fromNumber(r / o);
                        },
                        "d%d": function(t, n) {
                            var r = t.toNumber(), o = n.toNumber();
                            return isNaN(r) || isNaN(o) || r == 1 / 0 || r == -1 / 0 || 0 === o ? e.fromNumber(NaN) : o == 1 / 0 || o == -1 / 0 || 0 === r ? t : e.fromNumber(r % o);
                        },
                        "d~d": function(n, o) {
                            try {
                                var i = n.toNumber(), a = o.toNumber(), s = e.fromNumber(Math.trunc(i / a));
                                return (s == 1 / 0 || s == -1 / 0 || isNaN(s)) && u(), t(s) ? r.fromNumber(s) : s;
                            } catch (t) {
                                u();
                            }
                        },
                        "f+f": function(t, e) {
                            var n = t.toNumber(), r = e.toNumber();
                            return i.fromNumber(n + r);
                        },
                        "f-f": function(t, e) {
                            var n = t.toNumber(), r = e.toNumber();
                            return i.fromNumber(n - r);
                        },
                        "f*f": function(t, e) {
                            var n = t.toNumber(), r = e.toNumber();
                            return i.fromNumber(n * r);
                        },
                        "f/f": function(t, e) {
                            var n = t.toNumber(), r = e.toNumber();
                            return i.fromNumber(n / r);
                        },
                        "f%f": function(t, e) {
                            var n = t.toNumber(), r = e.toNumber();
                            if (isNaN(n) || isNaN(r) || n == 1 / 0 || n == -1 / 0 || 0 === r) return i.fromNumber(NaN);
                            if (r == 1 / 0 || r == -1 / 0 || 0 === n) return t;
                            var o = i.fromNumber(n % r);
                            return (o == 1 / 0 || o == -1 / 0 || isNaN(o)) && u(), o;
                        },
                        "f~f": function(e, n) {
                            try {
                                var o = e.toNumber(), a = n.toNumber(), s = i.fromNumber(Math.trunc(o / a));
                                return (s == 1 / 0 || s == -1 / 0 || isNaN(s)) && u(), t(s) ? r.fromNumber(s) : s;
                            } catch (t) {
                                u();
                            }
                        },
                        "i+i": function(e, n) {
                            var o = e.toNumber() + n.toNumber();
                            return t(o) ? r.fromNumber(o) : r.fromBig(Big(e.toBig().plus(n.toBig())));
                        },
                        "i-i": function(e, n) {
                            var o = e.toNumber() - n.toNumber();
                            return t(o) ? r.fromNumber(o) : r.fromBig(Big(e.toBig().minus(n.toBig())));
                        },
                        "i*i": function(e, n) {
                            var o = e.toNumber() * n.toNumber();
                            return t(o) ? r.fromNumber(o) : r.fromBig(Big(e.toBig().times(n.toBig())));
                        },
                        "i/i": function(t, e) {
                            try {
                                var r = t.toBig(), o = e.toBig();
                                return n.fromBig(r.div(o));
                            } catch (t) {
                                u();
                            }
                        },
                        "i%i": function(e, n) {
                            var o = e.toNumber(), i = n.toNumber();
                            if (isNaN(o) || isNaN(i) || o == 1 / 0 || o == -1 / 0 || 0 === i) return r.fromNumber(NaN);
                            if (i == 1 / 0 || i == -1 / 0 || 0 === o) return e;
                            var a = e.toNumber() % n.toNumber();
                            return (a == 1 / 0 || a == -1 / 0 || isNaN(a)) && u(), t(a) ? r.fromNumber(a) : r.fromBig(Big(e.toBig().mod(n.toBig())));
                        },
                        "i~i": function(e, n) {
                            var o = e.toNumber() / n.toNumber();
                            return (o == 1 / 0 || o == -1 / 0 || isNaN(o)) && u(), t(o) ? r.fromNumber(Math.trunc(o)) : r.fromBig(Big(e.toBig().div(n.toBig())).round(0, 0));
                        },
                        "c+c": function(t, e) {
                            var n = t.toBig(), r = e.toBig();
                            return a(t, e).fromBig(n.plus(r));
                        },
                        "c-c": function(t, e) {
                            var n = t.toBig(), r = e.toBig();
                            return a(t, e).fromBig(n.minus(r));
                        },
                        "c*c": function(t, e) {
                            var n = t.toBig(), r = e.toBig();
                            return a(t, e).fromBig(n.times(r));
                        },
                        "c/c": function(t, e) {
                            try {
                                var r = t.toBig(), o = e.toBig();
                                return n.fromBig(r.div(o));
                            } catch (t) {
                                u();
                            }
                        },
                        "c%c": function(t, e) {
                            try {
                                var r = t.toBig(), o = e.toBig();
                                return n.fromBig(r.mod(o));
                            } catch (t) {
                                u();
                            }
                        },
                        "c~c": function(e, o) {
                            try {
                                var i = e.toBig(), a = o.toBig(), s = i.div(a).round(0, 0);
                                return t(s) ? r.fromNumber(s) : n.fromBig(s);
                            } catch (t) {
                                u();
                            }
                        },
                        "a+a": function(t, e) {
                            return l(t, e, "+");
                        },
                        "a-a": function(t, e) {
                            return l(t, e, "-");
                        },
                        "a*a": function(t, e) {
                            return l(t, e, "*");
                        },
                        "a/a": function(t, e) {
                            return l(t, e, "/");
                        },
                        "a%a": function(t, e) {
                            return l(t, e, "%");
                        },
                        "a~a": function(t, e) {
                            return l(t, e, "~");
                        },
                        "u+u": function(t, e) {
                            var n = o.dayTimeDuration, r = o.yearMonthDuration;
                            return n.matches(t) && n.matches(e) || r.matches(t) && r.matches(e) || s(t, e, "+"), 
                            r.matches(t) ? r.fromMonthsMilliseconds(t.months + e.months, 0) : n.fromMonthsMilliseconds(0, t.milliseconds + e.milliseconds);
                        },
                        "u-u": function(t, e) {
                            var n = o.dayTimeDuration, r = o.yearMonthDuration;
                            return n.matches(t) && n.matches(e) || r.matches(t) && r.matches(e) || s(t, e, "-"), 
                            r.matches(t) ? r.fromMonthsMilliseconds(t.months - e.months, 0) : n.fromMonthsMilliseconds(0, t.milliseconds - e.milliseconds);
                        },
                        "u*n": function(t, e) {
                            var n = o.dayTimeDuration, r = o.yearMonthDuration;
                            n.matches(t) || r.matches(t) || s(t, e, "*");
                            var i = e.toNumber();
                            if (i == 1 / 0 || i == -1 / 0) throw new v("Cannot multiply duration by +/-INF", "FODT0002");
                            if (isNaN(i)) throw new v("Cannot multiply duration by NaN", "FOCA0005");
                            return r.matches(t) ? r.fromMonthsMilliseconds(Math.round(t.months * i), 0) : n.fromMonthsMilliseconds(0, Math.round(t.milliseconds * i));
                        },
                        "n*u": function(t, e) {
                            return _["u*n"](e, t);
                        },
                        "u/n": function(t, e) {
                            var n = o.dayTimeDuration, r = o.yearMonthDuration;
                            n.matches(t) || r.matches(t) || s(t, e, "/");
                            var i = r.matches(t) ? t.months / e.toNumber() : t.milliseconds / e.toNumber();
                            return (i == 1 / 0 || i == -1 / 0 || isNaN(i)) && u("FODT0002"), r.matches(t) ? r.fromMonthsMilliseconds(Math.round(i), 0) : n.fromMonthsMilliseconds(0, Math.round(i));
                        },
                        "u/u": function(t, e) {
                            var r = o.dayTimeDuration, i = o.yearMonthDuration;
                            r.matches(t) && r.matches(e) || i.matches(t) && i.matches(e) || s(t, e, "/");
                            var a = new Big(i.matches(t) ? t.months : t.milliseconds), c = new Big(i.matches(e) ? e.months : e.milliseconds);
                            try {
                                return n.fromBig(a.div(c));
                            } catch (t) {
                                u();
                            }
                        },
                        "t+u": function(t, e) {
                            var n = o.dayTimeDuration, r = o.yearMonthDuration;
                            return n.matches(e) || r.matches(e) || s(t, e, "+"), n.matches(e) ? o[t.type].fromDate(new Date(t.UTCdate.getTime() + e.milliseconds), t.timezoneOffset) : t.addMonths(e.months);
                        },
                        "u+t": function(t, e) {
                            return _["t+u"](e, t);
                        },
                        "t-u": function(t, e) {
                            var n = o.dayTimeDuration, r = o.yearMonthDuration;
                            return n.matches(e) || r.matches(e) || s(t, e, "-"), n.matches(e) ? o[t.type].fromDate(new Date(t.UTCdate.getTime() - e.milliseconds), t.timezoneOffset) : t.addMonths(-e.months);
                        },
                        "t-t": function(t, e) {
                            return o.dayTimeDuration.fromMonthsMilliseconds(0, t.UTCdate.getTime() - e.UTCdate.getTime());
                        }
                    };
                    function l(t, a, u) {
                        function l(t) {
                            return o.dateTime.matches(t) || o.date.matches(t) || o.time.matches(t);
                        }
                        var f, m, p, h = o.dayTimeDuration, d = o.yearMonthDuration;
                        return (h.matches(t) || d.matches(t)) && o.numeric.matches(a) ? (p = "u" + u + "n", 
                        f = t.type, m = a.type) : (h.matches(a) || d.matches(a)) && o.numeric.matches(t) ? (p = "n" + u + "u", 
                        f = t.type, m = a.type) : r.matches(t) && r.matches(a) ? (p = "i" + u + "i", f = m = "integer") : e.matches(t) || e.matches(a) ? (p = "d" + u + "d", 
                        f = m = "double") : i.matches(t) || i.matches(a) ? (p = "f" + u + "f", f = m = "float") : n.matches(t) || n.matches(a) ? (p = "c" + u + "c", 
                        f = m = "decimal") : l(t) && l(a) ? (p = "t" + u + "t", f = t.type, m = a.type) : l(t) && (h.matches(a) || d.matches(a)) ? (p = "t" + u + "u", 
                        f = t.type, m = a.type) : (h.matches(t) || d.matches(t)) && l(a) ? (p = "u" + u + "t", 
                        f = t.type, m = a.type) : h.matches(t) && h.matches(a) || d.matches(t) && d.matches(a) ? (p = "u" + u + "u", 
                        f = m = t.type) : s(u, t, a), c[p] || s(u, t, a), c[p](w.promote(t, f), w.promote(a, m));
                    }
                    return c;
                }(), M = function() {
                    var t = w, e = h;
                    function n(e, n) {
                        return r(e.getAttribute("level"), t.argRole(e, "select"), t.argRole(e, "count"), t.argRole(e, "from"), n);
                    }
                    function r(n, r, i, a, u) {
                        var s;
                        if (r) s = t.evaluate(r, u).next(); else {
                            if (u.noCurrentFocus()) throw v("No context item in Numberer", "SXJS0004", r);
                            s = u.getCurrentFocus();
                        }
                        var c, l, f, m, p, h = e.nameOfNode(s), d = function(t) {
                            return null === e.xdmParentNode(t);
                        }, y = function(t) {
                            return t.nodeType == s.nodeType && (null === h || e.nameOfNode(t).equals(h));
                        }, x = y;
                        if (null !== i) {
                            var S = A(i);
                            x = function(t) {
                                return S(t, u);
                            };
                        }
                        if (null === a) c = d; else {
                            var N = A(a);
                            c = function(t) {
                                return d(t) || N(t, u);
                            };
                        }
                        switch (n) {
                          case "simple":
                            return l = g.precedingSibling(s).filter(y), E.oneInteger(l.count() + 1);

                          case "single":
                            return f = g.ancestorOrSelf(s).filter(x).next(), p = g.ancestorOrSelf(s).filter(c).next(), 
                            null === (m = null === f ? null : null !== g.ancestorOrSelf(f).filter(function(t) {
                                return e.isSameNode(t, p);
                            }).next() ? f : null) ? E.Empty : (l = g.precedingSibling(m).filter(x), E.oneInteger(l.count() + 1));

                          case "multi":
                            f = E.ForArray(g.ancestorOrSelf(s).filter(x).expand().reverse()), p = g.ancestorOrSelf(s).filter(c).next(), 
                            m = f.filter(function(t) {
                                return null !== g.ancestorOrSelf(t).filter(function(t) {
                                    return e.isSameNode(t, p);
                                }).next();
                            });
                            var b = o.integer.fromNumber;
                            return m.mapOneToOne(function(t, e) {
                                return b(g.precedingSibling(t).filter(x).count() + 1);
                            });

                          case "any":
                            var T = function(t, n) {
                                return e.compareDocumentOrder(n, t);
                            };
                            f = E.Union(g.preceding(s).filter(x), g.ancestorOrSelf(s).filter(x), T), null === (p = E.Union(g.preceding(s).filter(c), g.ancestorOrSelf(s).filter(c), T).next()) && w.internalError("from pattern selected empty");
                            var O = (m = f.filter(function(t) {
                                return e.compareDocumentOrder(t, p) >= 0;
                            })).count();
                            return 0 === O ? E.Empty : E.oneInteger(O);

                          default:
                            w.internalError("unknown xsl:number/@level " + n);
                        }
                    }
                    function i(e, n) {
                        var r = t.argRole(e, "value"), o = t.argRole(e, "format"), i = t.evaluateIfPresent(t.argRole(e, "gpSep"), n).next(), s = t.evaluateIfPresent(t.argRole(e, "gpSize"), n).next(), c = t.evaluateIfPresent(t.argRole(e, "ordinal"), n).next(), l = t.evaluateIfPresent(t.argRole(e, "lang"), n).next(), f = e.getAttribute("flags") || "", m = t.argRole(e, "startAt"), p = /1/.test(f), h = u(t.evaluate(r, n), p, m, !0, n);
                        return null === h ? E.oneString("NaN") : a(h, o, i, s, c, l, n);
                    }
                    function a(e, n, r, i, a, u, s) {
                        function c(e) {
                            var n, r;
                            if ("" === e && (e = "1"), /^[\x01-\x7f]*$/.test(e)) n = e.split(/\b/), r = function(t, e) {
                                return /\w+/.test(t);
                            }; else {
                                if (e.length != t.stringToCodepoints(e).length) throw v("Cannot handle non-BMP characters in format-number picture", "SXJS0002");
                                var o = t.analyze(e, "[\\p{Nd}\\p{Nl}\\p{No}\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}]+", "", !0, !1);
                                r = function(t, e) {
                                    return o[e].matching;
                                }, n = o.map(function(t) {
                                    return t.string.toString();
                                });
                            }
                            var i, a = {
                                prefix: "",
                                fTokens: [],
                                suffix: ""
                            }, u = ".";
                            for (i = 0; i < n.length; i++) {
                                var s = n[i];
                                r(s, i) ? (a.fTokens.push({
                                    chars: s,
                                    sep: u
                                }), u = ".") : (0 === i && (a.prefix = s), i == n.length - 1 ? a.suffix = s : 0 !== i && (u = s));
                            }
                            return 0 === a.fTokens.length && (a.fTokens.push({
                                chars: "1",
                                sep: "."
                            }), a.suffix = a.prefix), a;
                        }
                        function l(e) {
                            var o = c(null === n ? "1" : t.evaluate(n, s).next().toString()), u = o.prefix;
                            return e.forEach(function(t, e) {
                                var n = e >= o.fTokens.length ? o.fTokens[o.fTokens.length - 1] : o.fTokens[e];
                                0 !== e && (u += n.sep);
                                var s = n.chars;
                                "yes" == a && (s += ";o");
                                var c = M.formatInteger(t.toNumber(), s);
                                null !== r && null !== i && (c = M.addGroupingSeparators(c, r, i)), u += c;
                            }), u += o.suffix, E.oneString(u);
                        }
                        if (null !== u) try {
                            o.language.cast(u);
                        } catch (t) {
                            throw v("@lang=" + u + ": invalid language code", "XTDE0030");
                        }
                        return l(e.expand());
                    }
                    function u(e, n, r, i, a) {
                        var u = [ 1 ];
                        if (null !== r && (u = t.evaluate(r, a).next().toString().split(/\s+/).map(function(t) {
                            if (!/^-?[0-9]+$/.test(t)) throw v("xsl:number/@start-at must be a sequence of integers.Offending value: " + t, "XTSE0020");
                            return parseInt(t, 10);
                        })), n && i) {
                            var s = e.next();
                            if (null === s) return null;
                            try {
                                s = o.integer.cast(s.round(0));
                            } catch (t) {
                                return null;
                            }
                            e = E.ForArray([ s ]);
                        }
                        var c = function(t, e) {
                            if ((t = o.numeric.matches(t) ? t.toDouble() : o.double.fromStringUnfailing(t.toString())).toNumber() < 0) throw v("xsl:number/@value is less than zero", "XTDE0980");
                            try {
                                t = o.integer.cast(t.round(0));
                            } catch (t) {
                                throw t.code = "XTDE0980", t;
                            }
                            var n = e >= u.length ? u[u.length - 1] : u[e];
                            return 1 != n && (t = o.integer.fromNumber(t.toNumber() + (n - 1))), t;
                        };
                        return e.mapOneToOne(c);
                    }
                    function s(e, n) {
                        var o, i = t.argRole(e, "value"), s = t.argRole(e, "format"), c = t.evaluateIfPresent(t.argRole(e, "gpSep"), n).next(), l = t.evaluateIfPresent(t.argRole(e, "gpSize"), n).next(), f = t.evaluateIfPresent(t.argRole(e, "ordinal"), n).next(), m = t.evaluateIfPresent(t.argRole(e, "lang"), n).next(), p = e.getAttribute("flags") || "", h = /1/.test(p), d = t.argRole(e, "startAt");
                        i ? o = u(t.evaluate(i, n), h, d, !0, n) : o = u(r(e.getAttribute("level"), t.argRole(e, "select"), t.argRole(e, "count"), t.argRole(e, "from"), n), h, d, !1, n);
                        return null === o ? E.oneString("NaN") : a(o, s, c, l, f, m, n);
                    }
                    function c(t) {
                        if (t < 1 || t > 4999) return t.toString();
                        var e, n = "", r = [ "m", "cm", "d", "cd", "c", "xc", "l", "xl", "x", "ix", "v", "iv", "i" ], o = [ 1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
                        for (e = 0; e < r.length; e++) for (;t >= o[e]; ) n += r[e], t -= o[e];
                        return n;
                    }
                    function l(t, e) {
                        if (t < 1) return t.toString();
                        var n = e.length;
                        function r(t) {
                            return (t > n ? r(Math.floor((t - 1) / n)) : "") + e.charAt((t - 1) % n);
                        }
                        return r(t);
                    }
                    function f(t, e) {
                        return t < e.length ? e[t] : t.toString();
                    }
                    function m(t, e) {
                        for (var n = Math.abs(t), r = n < 999999 ? n.toString() : Big(n).toFixed(); r.length < e; ) r = "0" + r;
                        return t < 0 && (r = "-" + r), r;
                    }
                    function p(t) {
                        var e, n, r = w, o = r.stringToCodepoints(t), i = {}, a = !0, u = 0, s = O.prepareRegex("\\p{Nd}", null), c = t.search(s);
                        if (c < 0) a = !1; else {
                            var l = O.obtainCategoryEscapes().Nd;
                            for (n = 0; n < l.length; n++) {
                                var f = l[n];
                                if ((e = parseInt(f[0], 16)) <= o[c] && o[c] <= e + 10) break;
                            }
                            for (n = 0; n < o.length; n++) if (o[n] >= 128) {
                                var m = String.fromCharCode(o[n]);
                                if (s.test(m)) {
                                    if (e > o[n] || o[n] > e + 10) throw v("Picture string mixes digits from different digit families: " + t, "FODF1310");
                                } else if (O.prepareRegex("\\p{N}\\p{L}", null).test(m)) throw v("Picture string is invalid: " + t, "FODF1310");
                            }
                            var p = [];
                            u = e - 48, o.forEach(function(t) {
                                e <= t && t <= e + 10 ? p.push(48) : p.push(t);
                            }), t = r.codepointsToString(p);
                        }
                        return i.isDecimalDigitPattern = a, i.format = t, i.diff = u, i.zeroDigit = e, i;
                    }
                    function d(t, e) {
                        var n = [];
                        return w.stringToCodepoints(t).forEach(function(t) {
                            48 <= t && t <= 57 ? n.push(t + e) : n.push(t);
                        }), w.codepointsToString(n);
                    }
                    function y(t, e, n, r, o) {
                        var i, a = 0, u = t;
                        for (i = 0; i < u.length; i++) if (i == e[a]) {
                            var s = o ? i + 1 : u.length - i;
                            s > 0 && (u = u.substring(0, s) + (n ? n[o ? a : n.length - a - 1] : r) + u.substring(s)), 
                            a++;
                        }
                        return u;
                    }
                    function x(t, e) {
                        function n(t, e) {
                            if (!/^(([0-9]|#|[^A-Za-z0-9])+?)$/.test(e)) throw v("The decimal digit pattern in the picture string is invalid: " + e, "FODF1310");
                            var n, r, o = e, i = !0;
                            if (/[^0-9A-Za-z#]/.test(o)) {
                                if ((n = o.match(/[^0-9A-Za-z#]/g)).length > 1) for (r = 1; r < n.length; r++) if (n[0] != n[r]) {
                                    i = !1;
                                    break;
                                }
                                o = o.replace(/[^0-9A-Za-z#]/g, ",");
                            }
                            if (/^,|,,|,$/.test(o)) throw v("Grouping in picture string is invalid: " + e, "FODF1310");
                            if (/[0-9].*#/.test(o)) throw v("Picture string is invalid: " + e, "FODF1310");
                            var a = m(t, o.replace(/[#,]/g, "").length);
                            if (n) {
                                var u = w.stringToCodepoints(o).reverse(), s = [];
                                for (r = 0; r < u.length; r++) 44 == u[r] && s.push(r);
                                var c = !0;
                                if (u.length - s[s.length - 1] - 1 > s[0] && (c = !1), c) for (r = 1; r < s.length; r++) if ((s[r] + 1) % (s[0] + 1) != 0) {
                                    c = !1;
                                    break;
                                }
                                a = c && i ? M.addGroupingSeparators(a, n[0], s[0]) : y(a, s, n);
                            }
                            return a;
                        }
                        var r = !0, o = !0, i = 0;
                        if (w.stringToCodepoints(e).length != e.length) throw v("Cannot handle non-BMP characters in format-integer picture", "SXJS0002");
                        if (/^[\x01-\x7f]*$/.test(e) || (r = !1), r) o = /[0-9]/.test(e); else {
                            var a = p(e);
                            e = a.format, o = a.isDecimalDigitPattern, i = a.diff;
                        }
                        o || (e = "1");
                        var u = n(t, e);
                        return r || (u = d(u, i)), u;
                    }
                    function S(t) {
                        var e = [ "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" ], n = [ "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" ];
                        return t < 20 ? e[t] : t < 100 ? n[Math.floor(t / 10)] + (t % 10 == 0 ? "" : " " + e[t % 10]) : t < 1e3 ? S(Math.floor(t / 100)) + " Hundred" + (t % 100 == 0 ? "" : " and " + S(t % 100)) : t < 1e6 ? S(Math.floor(t / 1e3)) + " Thousand" + (t % 1e3 == 0 ? "" : (t % 1e3 < 100 ? " and " : " ") + S(t % 1e3)) : t < 1e9 ? S(Math.floor(t / 1e6)) + " Million" + (t % 1e3 == 0 ? "" : (t % 1e3 < 100 ? " and " : " ") + S(t % 1e6)) : t.toString();
                    }
                    function N(t) {
                        var e = [ "Zeroth", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth" ], n = [ "", "", "Twent", "Thirt", "Fort", "Fift", "Sixt", "Sevent", "Eight", "Ninet" ];
                        return t < 20 ? e[t] : t < 100 ? n[Math.floor(t / 10)] + (t % 10 == 0 ? "ieth" : "y " + e[t % 10]) : t < 1e3 ? S(Math.floor(t / 100)) + " Hundred" + (t % 100 == 0 ? "th" : " and " + N(t % 100)) : t < 1e6 ? S(Math.floor(t / 1e3)) + " Thousand" + (t % 1e3 == 0 ? "th" : (t % 1e3 < 100 ? " and " : " ") + N(t % 1e3)) : t < 1e9 ? S(Math.floor(t / 1e6)) + " Million" + (t % 1e3 == 0 ? "th" : (t % 1e3 < 100 ? " and " : " ") + N(t % 1e6)) : t.toString();
                    }
                    function b(t) {
                        return t % 10 == 1 && t % 100 != 11 ? "st" : t % 10 == 2 && t % 100 != 12 ? "nd" : t % 10 == 3 && t % 100 != 13 ? "rd" : "th";
                    }
                    function T(t, e) {
                        var n, r = null;
                        if (-1 != (n = e.lastIndexOf(";"))) {
                            if (r = e.substring(n + 1), !/^([co](\(.+\))?)?[at]?$/.test(r)) throw v("Invalid format modifier in picture string: " + r, "FODF1310");
                            r = r.charAt(0), e = e.substring(0, n);
                        }
                        if ("" === e) throw v("In the picture string, the picture cannot be empty", "FODF1310");
                        var o = t < 0 ? "-" : "";
                        if ("o" == r) switch (e.toString()) {
                          case "a":
                          case "A":
                          case "i":
                          case "I":
                            break;

                          case "Ww":
                            return o + N(Math.abs(t));

                          case "W":
                            return o + N(Math.abs(t)).toUpperCase();

                          case "w":
                            return o + N(Math.abs(t)).toLowerCase();

                          default:
                            return x(t, e) + b(Math.abs(t));
                        }
                        function i(t, e) {
                            for (var n = "", r = t.charCodeAt(0), o = 0; o < e; r++, o++) n += String.fromCharCode(r);
                            return n;
                        }
                        switch (e.toString()) {
                          case "a":
                            return l(t, i("a", 26));

                          case "A":
                            return l(t, i("A", 26));

                          case "\u03b1":
                            return l(t, i("\u03b1", 25));

                          case "\u0391":
                            return l(t, i("\u0391", 25));

                          case "i":
                            return c(t);

                          case "I":
                            return c(t).toUpperCase();

                          case "Ww":
                            return o + S(Math.abs(t));

                          case "W":
                            return o + S(Math.abs(t)).toUpperCase();

                          case "w":
                            return o + S(Math.abs(t)).toLowerCase();

                          case "\u2460":
                            return f(t, "\u24ea" + i("\u2460", 20) + i("\u3251", 15) + i("\u32b1", 15));

                          case "\u2474":
                            return f(t, "0" + i("\u2474", 20));

                          case "\u2488":
                            return 0 === t ? "\ud83c\udd00" : f(t, "0" + i("\u2488", 20));

                          case "\u2776":
                            return f(t, "\u24ff" + i("\u2776", 10) + i("\u24eb", 10));

                          case "\u2780":
                            return 0 === t ? "\ud83c\udd0b" : f(t, "0" + i("\u2780", 10));

                          case "\u278a":
                            return 0 === t ? "\ud83c\udd0c" : f(t, "0" + i("\u278a", 10));

                          case "\u24f5":
                            return f(t, "0" + i("\u24f5", 10));

                          case "\u3220":
                            return f(t, "0" + i("\u3220", 10));

                          case "\u3280":
                            return f(t, "0" + i("\u3280", 10));

                          default:
                            return x(t, e);
                        }
                    }
                    function C(t, e, n) {
                        var r, o = "";
                        for (r = 0; r < t.length; r++) {
                            var i = t.charAt(r), a = e.indexOf(i);
                            a < 0 ? o += i : a < n.length && (o += n.charAt(a));
                        }
                        return o;
                    }
                    var D = {
                        "decimal-separator": "46",
                        "grouping-separator": "44",
                        digit: "35",
                        "minus-sign": "45",
                        percent: "37",
                        "per-mille": "8240",
                        "zero-digit": "48",
                        "exponent-separator": "101",
                        "pattern-separator": "59",
                        infinity: "Infinity",
                        NaN: "NaN"
                    };
                    function _(t, n) {
                        var r = e.getAttribute(t, n, D[n]);
                        return String.fromCharCode(parseInt(r, 10));
                    }
                    function F(t, e) {
                        function n(t) {
                            throw [ [ "$gs", "grouping separator" ], [ "$es", "exponent separator" ], [ "$ds", "decimal separator" ], [ "$pc", "non-prefix passive character" ], [ "$pp", "percent|permille" ], [ "$od", "optional digit" ], [ "$md", "mandatory digit" ], [ "$ip", "integer part" ], [ "$fp", "fractional part" ] ].forEach(function(e) {
                                t = t.replace(e[0], e[1]);
                            }), v("Invalid picture: " + t, "FODF1310");
                        }
                        var r, o, i, a = {}, u = t.indexOf(e.decimalSeparator), s = u >= 0, c = e.zeroDigit.charCodeAt(0), l = 0, f = 0, m = [], p = [], h = [], d = -1, g = -1, y = !1, x = !1, S = -1, N = 0, b = s ? u : t.length;
                        for (r = 0; r < b; r++) (i = t.charCodeAt(r)) >= c && i < c + 10 ? (g > 0 && n("digit follows $pc"), 
                        y ? N++ : (l < 1 && d < 0 && (d = r), l++, f++)) : i == e.digit.charCodeAt(0) ? (g > 0 && n("digit follows $pc"), 
                        y && n("$od follows $es"), l > 0 && n("$od follows $md in $ip"), d < 0 && (d = r, 
                        x = !0), f++) : i == e.groupingSeparator.charCodeAt(0) ? (d < 0 && n("$gs before any digit"), 
                        h.length > 0 && n("$gs follows $pc"), y && n("$gs follows $es"), m.push(r)) : i == e.percent.charCodeAt(0) || i == e.permille.charCodeAt(0) ? s ? n("$pp before $ds") : (d < 0 && n("$pp before any digit"), 
                        g > 0 && n("$pp follows $pc"), y && n("$pp follows $es"), h.push(i), g < 0 && (g = r), 
                        i == e.percent.charCodeAt(0) ? a.percent = !0 : a.permille = !0) : !s && d >= 0 && i == e.exponentSeparator.charCodeAt(0) && g < 0 ? y ? (h.push(i), 
                        N > 0 ? g < 0 && (g = r) : (h.push(i), y = !1, S = -1, g < 0 && (g = r - 1))) : (y = !0, 
                        S = r) : d >= 0 && s ? n("$pc before $ds") : y && 0 === N ? (y = !1, S = -1, h.push(e.exponentSeparator.charCodeAt(0)), 
                        h.push(i), g < 0 && (g = r - 1)) : d >= 0 ? (h.push(i), g < 0 && (g = r)) : p.push(i);
                        if (m.length > 0) {
                            var w = s ? u : y ? S : g > 0 ? g : t.length;
                            m = m.map(function(t) {
                                return w - t - 1;
                            }).reverse();
                        }
                        if (0 !== m.length) for (0 === m[0] && n("$gs at end of $ip"), o = 0; o < m.length - 1; o++) m[o] + 1 == m[o + 1] && n("consecutive $gs in $ip");
                        var T = 0, E = 0, A = [];
                        if (s) {
                            var O = -1, C = t.substring(u + 1);
                            for (r = 0; r < C.length; r++) (i = C.charCodeAt(r)) >= c && i < c + 10 ? y && g < 0 ? N++ : O >= 0 || g >= 0 ? n("$md follows $od or $pc in $fp") : (T++, 
                            E++) : i == e.digit.charCodeAt(0) ? ((g >= 0 || y) && n("$od follows $pc or $es"), 
                            O < 0 && (O = r), E++) : i == e.groupingSeparator.charCodeAt(0) ? ((g >= 0 || y) && n("$gs follows $pc or $es"), 
                            A.push(r - u + 1)) : i == e.decimalSeparator.charCodeAt(0) ? n("more than one $ds") : i == e.percent.charCodeAt(0) || i == e.permille.charCodeAt(0) ? ((g >= 0 || y) && n("$pp follows $pc or $es"), 
                            h.push(i), g = r, i == e.percent.charCodeAt(0) ? a.percent = !0 : a.permille = !0) : i == e.exponentSeparator.charCodeAt(0) && g < 0 ? y ? (h.push(i), 
                            N > 0 ? g < 0 && (g = r) : (h.push(i), y = !1, S = -1, g < 0 && (g = r - 1))) : (y = !0, 
                            S = r) : y && 0 === N ? (y = !1, S = -1, h.push(e.exponentSeparator.charCodeAt(0)), 
                            h.push(i), g < 0 && (g = r - 1)) : (h.push(i), g < 0 && (g = r));
                        }
                        if (d < 0 && 0 === E && n("mantissa contains no digits"), 0 !== A.length) for (0 === A[0] && n("$gs at beginning of $fp"), 
                        o = 0; o < A.length - 1; o++) A[o] + 1 == A[o + 1] && n("consecutive $gs in $fp");
                        return 0 === l && 0 === E && (y ? (T = 1, E = 1) : l = 1), y && 0 === l && x && (l = 1), 
                        0 === l && 0 === T && (T = 1), a.minimumIntegerPartSize = l, a.prefix = p, a.intGpPos = m, 
                        a.picIntPartContainsOptDigit = x, a.picIntPartSize = f, a.minimumFractionalPartSize = T, 
                        a.maximumFractionalPartSize = E, a.fracGpPos = A, a.expPartSize = N, a.exponentSeparator = e.exponentSeparator ? e.exponentSeparator : "e", 
                        a.suffix = h, a;
                    }
                    function I(t, e) {
                        return "M" == e ? [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ][t - 1] : "F" == e ? [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ][t - 1] : t;
                    }
                    function k(t) {
                        var e = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
                        return Math.floor((t.getTime() - e.getTime()) / 864e5) + 1;
                    }
                    function P(t, e) {
                        var n = e ? k(t) : t.getUTCDate(), r = new Date(Date.UTC(t.getUTCFullYear(), e ? 0 : t.getUTCMonth(), 1)), o = r.getUTCDay();
                        if (0 === o && (o = 7), o > 4 && o + n <= 8) return P(new Date(r.getTime() - 864e5), e);
                        var i = o < 5 ? 1 : 0;
                        return Math.floor((n + o - 2) / 7) + i;
                    }
                    function U(t) {
                        return P(t, !0);
                    }
                    function R(t) {
                        return P(t, !1);
                    }
                    function B(t) {
                        return t.getUTCHours() < 13 ? 0 === t.getUTCHours() ? 12 : t.getUTCHours() : t.getUTCHours() - 12;
                    }
                    function X(t) {
                        return t.getUTCHours() < 12 ? "Am" : "Pm";
                    }
                    var L = {
                        Y: "getUTCFullYear",
                        M: "getUTCMonth",
                        D: "getUTCDate",
                        F: "getUTCDay",
                        H: "getUTCHours",
                        m: "getUTCMinutes",
                        s: "getUTCSeconds",
                        f: "getUTCMilliseconds"
                    }, z = {
                        d: k,
                        W: U,
                        w: R,
                        h: B,
                        P: X,
                        E: function() {
                            return "AD";
                        }
                    };
                    function J(t, e, n, r, o, i, a) {
                        if ("" === t) return "Z" == n ? "J" : "";
                        var u = "z" == e ? "GMT" : "";
                        if ("t" == r && "+00:00" == t && "Z" != n && "N" != n) return "Z";
                        if ("" === n) return u + t;
                        var s, c = t.match(/^([+\-])([0-9])([0-9]):([0-9]{2})$/);
                        if ("Z" == n || "N" == n) {
                            if ("Z" == n) {
                                var l = parseInt(c[1] + c[2] + c[3], 10);
                                s = l < -12 || l > 12 || "00" != c[4] ? t : "YXWVUTSRQPONZABCDEFGHIKLM".charAt(l + 12);
                            } else if ("N" == n) throw v("Timezone names not implemented", "SXJS0002");
                        } else {
                            a && !/[0-9]+/.test(n) && (n = "00:00");
                            var f, m = function(t, e) {
                                return "0" == e[2] && 1 == t.length ? e[3] : e[2] + e[3];
                            }, h = function(t, e) {
                                return ("0" != e[2] || 1 != t.length && 3 != t.length ? e[2] + e[3] : e[3]) + (t.length > 2 ? e[4] : "00" != e[4] ? ":" + e[4] : "");
                            }, g = 0;
                            if (!a) {
                                var y = p(n);
                                n = y.format, g = y.diff;
                            }
                            /[^0-9A-Za-z]/.test(n) ? (f = n.match(/^([0-9]+)([^0-9A-Za-z])([0-9]+)$/), s = c[1] + m(f[1], c) + f[2] + c[4]) : (f = n.match(/^[0-9]+$/), 
                            s = c[1] + h(f[0], c)), a || (s = d(s, g));
                        }
                        return u + s;
                    }
                    function q(t, e, n, r, o, i) {
                        function a(t, e, n, r, o) {
                            var i, a = 0;
                            if (!o) {
                                var u = p(e);
                                e = u.format, a = u.diff;
                            }
                            for (var s = t.toString(); s.length < 3; ) s = "0" + s;
                            var c = w.stringToCodepoints(s), l = parseInt(w.codepointsToString(c.reverse()), 10);
                            if (!n && !r && /^[0-9]$/.test(e)) for (;c.length > e.length; ) e += "#";
                            if (n && "*" != n) {
                                for (var f = /^([0-9]*)(#*)$/.exec(e), m = f[1] ? f[1] : "", h = f[2] ? f[2] : ""; n > m.length; ) m += "0", 
                                h = h.slice(0, -1);
                                e = m + h;
                            }
                            if (r) for ("*" == r && (r = c.length); e.length < r; ) e += "#";
                            var g = T(l, w.codepointsToString(w.stringToCodepoints(e).reverse()));
                            for (i = w.codepointsToString(w.stringToCodepoints(g).reverse()); i.length > e.length; ) i = i.slice(0, -1);
                            return n && "*" != n || 0 !== parseInt(i, 10) || (i = "0"), o || (i = d(i, a)), 
                            i;
                        }
                        var u, s = n.match(/^([YMDdWwFHhmsfZzPCE])(.*)$/);
                        if (null === s) throw v("Date/time component [" + n + "] not recognised", "FOFD1340");
                        var c, l, f, m = s[1], h = s[2] || "";
                        if ("date" == t && /[HhPmsf]/.test(m) || "time" == t && /[YMDdFWwCE]/.test(m)) throw v("Date/time component [" + n + "] not available in " + t, "FOFD1350");
                        if (-1 != (c = h.lastIndexOf(","))) {
                            var g = h.substring(c + 1).split("-");
                            if (h = h.substring(0, c), l = g[0], f = g[1] || "*", "*" != l && l < 1 || "*" != f && f < 1 || "*" != l && "*" != f && l > f) throw v("Invalid width modifier in date/time formatting picture", "FOFD1340");
                        }
                        var y, x = null;
                        h.length > 1 && /[atco]/.test(h.charAt(h.length - 1)) ? (y = h.substring(0, h.length - 1), 
                        x = h.charAt(h.length - 1)) : y = h;
                        var S = !0;
                        if (/^[\x01-\x7f]*$/.test(y)) ; else {
                            if (y.length != w.stringToCodepoints(y).length) throw v("Cannot handle non-BMP characters in date/time formatting picture", "SXJS0002");
                            S = !1;
                        }
                        if (/[Zz]/.test(m)) return J("Z" == e.tzOffsetToString() ? "+00:00" : e.tzOffsetToString(), m, y, x, l, f, S);
                        var N = e.proxy(), b = L[m] ? N[L[m]]() : z[m] ? z[m](N) : null;
                        if (null === b) throw v("Component specifier not implemented: [" + m + "]", "SXJS0002");
                        if ("M" == m ? b++ : "F" == m && 0 === b && (b = 7), "" === y && (y = /[FPCE]/.test(m) ? "n" : /[ms]/.test(m) ? "01" : "1"), 
                        "f" == m) return a(b, y, l, f, S);
                        if (/[nN]/.test(y)) u = I(b, m), "n" == y ? u = u.toLowerCase() : "N" == y && (u = u.toUpperCase()), 
                        f && "*" != f && u.length > f && (u = u.substring(0, f)); else {
                            var E = /;/.test(y) ? y + ";" : y;
                            if (x && (E += (";" == E.charAt(E.length - 1) ? "" : ";") + x), u = T(b, E), "Y" == m && /[^iIwWnN]/.test(y.charAt(y.length - 1)) && (!l && 2 == y.length || 2 == f)) for (;u.length > 2; ) u = u.substring(1);
                            if (l) {
                                var A = "*" == l ? 0 : parseInt(l, 10);
                                if (A > 0 && u.length < A) if (/[YMDdWwHhms]/.test(m) && /[^iIwWnN]/.test(y.charAt(y.length - 1))) {
                                    var O = "0";
                                    for (S || (O = String.fromCharCode(p(E).zeroDigit)); u.length < A; ) u = O + u;
                                } else {
                                    if ("Y" != m || !/[iIwWnN]/.test(y.charAt(y.length - 1))) throw v("Not implemented min width modification with specifier " + m + " and format " + y, "SXJS0002");
                                    for (;u.length < A; ) u += " ";
                                }
                            }
                        }
                        return u;
                    }
                    function G(t, n, r, o) {
                        var i = t < 0 || 0 === t && 1 / t < 0, a = {
                            decimalSeparator: _(r, "decimal-separator"),
                            groupingSeparator: _(r, "grouping-separator"),
                            digit: _(r, "digit"),
                            minusSign: _(r, "minus-sign"),
                            percent: _(r, "percent"),
                            permille: _(r, "per-mille"),
                            zeroDigit: _(r, "zero-digit"),
                            exponentSeparator: _(r, "exponent-separator"),
                            patternSeparator: _(r, "pattern-separator"),
                            infinity: e.getAttribute(r, "infinity", D.infinity),
                            nan: e.getAttribute(r, "NaN", D.NaN)
                        };
                        if (isNaN(t)) return a.nan;
                        var u = n.includes(a.patternSeparator) ? n.split(a.patternSeparator) : [ n ];
                        if (u.length > 2) throw v("Invalid picture: multiple pattern separators", "FODF1310");
                        var s, c, l = F(u.length > 1 && t < 0 ? u[1] : u[0], a);
                        if (isFinite(t)) {
                            var f;
                            if (l.expPartSize > 0) f = $(t, l); else {
                                var m = Math.abs(t);
                                l.percent && (m = Math.abs(100 * t)), l.permille && (m = Math.abs(1e3 * t));
                                var p = (f = m + "" == "Infinity" ? m + "" : m < 999999 ? m.toString() : Big(m).toFixed()).indexOf(".");
                                p < 0 && (p = f.length, l.minimumFractionalPartSize > 0 && (f += ".")), l.maximumFractionalPartSize >= 0 && "." != f.substring(p) && p != f.length && (l.maximumFractionalPartSize > 0 ? (f = Big(f).round(l.maximumFractionalPartSize, 1).toString()).indexOf(".") < 0 && (f += ".0") : f = Big(f).round(0, 1).toString());
                                var h = f.length - 1 - p;
                                if (l.minimumFractionalPartSize > 0) for (;h < l.minimumFractionalPartSize; ) f += "0", 
                                h++;
                                for (;p < l.minimumIntegerPartSize; ) f = "0" + f, p++;
                                h > 0 && 0 === l.minimumIntegerPartSize && "0" == f.substring(0, p) && (f = f.substring(p)), 
                                "0" == f && 0 === l.minimumIntegerPartSize && 0 === l.minimumFractionalPartSize && l.maximumFractionalPartSize > 0 && (f = ".0");
                            }
                            var d, g = "";
                            for (d = 0; d < 10; d++) g += String.fromCharCode(a.zeroDigit.charCodeAt(0) + d);
                            if (s = C(f, "0123456789.", g += a.decimalSeparator), l.intGpPos.length > 0 || l.fracGpPos.length > 0) {
                                var x = s.indexOf(a.decimalSeparator);
                                x < 0 && (x = s.length);
                                var S = s.substring(0, x);
                                if (c = s.substring(x), l.intGpPos.length > 0) {
                                    for (var N = !0, b = 1; b < l.intGpPos.length; b++) if ((l.intGpPos[b] + 1) % (l.intGpPos[0] + 1) != 0) {
                                        N = !1;
                                        break;
                                    }
                                    N && l.picIntPartSize + l.intGpPos.length - l.intGpPos[l.intGpPos.length - 1] - 1 > l.intGpPos[0] && (N = !1), 
                                    S = N ? M.addGroupingSeparators(S, a.groupingSeparator, l.intGpPos[0]) : y(S, l.intGpPos, null, a.groupingSeparator);
                                }
                                l.fracGpPos.length > 0 && (c = y(c, l.fracGpPos, null, a.groupingSeparator, !0)), 
                                s = S + c;
                            }
                        } else s = a.infinity;
                        return l.prefix.length > 0 && (s = w.codepointsToString(l.prefix) + s), l.suffix.length > 0 && (s += w.codepointsToString(l.suffix)), 
                        i && 1 == u.length && (s = a.minusSign + s), s;
                    }
                    function $(t, e) {
                        var n = e.minimumIntegerPartSize, r = e.minimumFractionalPartSize, o = e.maximumFractionalPartSize, i = e.exponentSeparator, a = 1 == n && e.picIntPartContainsOptDigit;
                        a && (n = 0, 0 === r && (r = 1, 0 === o && (o = 1)));
                        var u = e.expPartSize, s = Big(t), c = s.c, l = 0 !== n ? n + o : o, f = s.e;
                        c.length > l && (s = Big(s.toPrecision(l)));
                        var p = f != s.e;
                        p && (n += 1), n > 1 ? s = s.div(Big(10).pow(n - 1)) : 0 === n && (s = s.times(Big(10)));
                        var h = 0 !== n ? n + r : r;
                        for (c = s.c; c.length < h; ) c.push(0);
                        var d = "";
                        if (!(c.length > 0)) throw v("Empty mantissa", "SXJS0004");
                        if (0 === n && e.picIntPartContainsOptDigit) d += "0"; else for (var g = 0; g < n; g++) d += c[g];
                        return !(o > 0 && c.length > n) || a && p || (d += "." + c.join("").slice(n)), d + i + m(s.e, u);
                    }
                    return {
                        xslNumber: s,
                        nodeNum: n,
                        numSeqFmt: i,
                        formatInteger: T,
                        addGroupingSeparators: function(t, e, n) {
                            var r, o = "";
                            for (r = 0; r < t.length; r++) o += t.charAt(r), (1 == n || (t.length - r) % n == 1) && r < t.length - 1 && (o += e);
                            return o;
                        },
                        formatNumber: G,
                        formatDateTime: function(t, e, n, r, o, i) {
                            function a(n) {
                                return "[[" == n ? "[" : "]]" == n ? "]" : q(t, e, n.substring(1, n.length - 1).replace(/\s+/g, ""), r, o, i);
                            }
                            if (!/\[(\[|[^\]]*\])|\]\]/g.test(n)) throw v("Date format picture doesn't match required syntax", "FOFD1340");
                            return n.replace(/\[(\[|[^\]]*\])|\]\]/g, a);
                        }
                    };
                }();
                !function(e) {
                    var r, o = 20, i = 1, a = 1e6, u = 1e6, s = -7, c = 21, l = {}, f = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
                    function m() {
                        function t(e) {
                            var n = this;
                            if (!(n instanceof t)) return void 0 === e ? m() : new t(e);
                            e instanceof t ? (n.s = e.s, n.e = e.e, n.c = e.c.slice()) : h(n, e), n.constructor = t;
                        }
                        return t.prototype = l, t.DP = o, t.RM = i, t.E_NEG = s, t.E_POS = c, t;
                    }
                    function p(t, e, n) {
                        var r = t.constructor, o = e - (t = new r(t)).e, i = t.c;
                        for (i.length > ++e && d(t, o, r.RM), i[0] ? n ? o = e : (i = t.c, o = t.e + o + 1) : ++o; i.length < o; i.push(0)) ;
                        return o = t.e, 1 === n || n && (e <= o || o <= r.E_NEG) ? (t.s < 0 && i[0] ? "-" : "") + (i.length > 1 ? i[0] + "." + i.join("").slice(1) : i[0]) + (o < 0 ? "e" : "e+") + o : t.toString();
                    }
                    function h(t, e) {
                        var n, r, o;
                        for (0 === e && 1 / e < 0 ? e = "-0" : f.test(e += "") || g(NaN), t.s = "-" == e.charAt(0) ? (e = e.slice(1), 
                        -1) : 1, (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), 
                        n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; "0" == e.charAt(r); r++) ;
                        if (r == (o = e.length)) t.c = [ t.e = 0 ]; else {
                            for (;"0" == e.charAt(--o); ) ;
                            for (t.e = n - r - 1, t.c = [], n = 0; r <= o; t.c[n++] = +e.charAt(r++)) ;
                        }
                        return t;
                    }
                    function d(t, e, n, r) {
                        var o, i = t.c, a = t.e + e + 1;
                        if (1 === n ? r = i[a] >= 5 : 2 === n ? r = i[a] > 5 || 5 == i[a] && (r || a < 0 || i[a + 1] !== o || 1 & i[a - 1]) : 3 === n ? r = r || i[a] !== o || a < 0 : (r = !1, 
                        0 !== n && g("!Big.RM!")), a < 1 || !i[0]) r ? (t.e = -e, t.c = [ 1 ]) : t.c = [ t.e = 0 ]; else {
                            if (i.length = a--, r) for (;++i[a] > 9; ) i[a] = 0, a-- || (++t.e, i.unshift(1));
                            for (a = i.length; !i[--a]; i.pop()) ;
                        }
                        return t;
                    }
                    function g(t) {
                        var e = new Error(t);
                        throw e.name = "BigError", e;
                    }
                    l.abs = function() {
                        var t = new this.constructor(this);
                        return t.s = 1, t;
                    }, l.cmp = function(t) {
                        var e, n = this, r = n.c, o = (t = new n.constructor(t)).c, i = n.s, a = t.s, u = n.e, s = t.e;
                        if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -a : 0;
                        if (i != a) return i;
                        if (e = i < 0, u != s) return u > s ^ e ? 1 : -1;
                        for (i = -1, a = (u = r.length) < (s = o.length) ? u : s; ++i < a; ) if (r[i] != o[i]) return r[i] > o[i] ^ e ? 1 : -1;
                        return u == s ? 0 : u > s ^ e ? 1 : -1;
                    }, l.div = function(t) {
                        var e = this, n = e.constructor, r = e.c, o = (t = new n(t)).c, i = e.s == t.s ? 1 : -1, u = n.DP;
                        if ((u !== ~~u || u < 0 || u > a) && g("!Big.DP!"), !r[0] || !o[0]) return r[0] == o[0] && g(NaN), 
                        o[0] || g(i / 0), new n(0 * i);
                        var s, c, l, f, m, p, h = o.slice(), v = s = o.length, y = r.length, x = r.slice(0, s), S = x.length, N = t, b = N.c = [], w = 0, T = u + (N.e = e.e - t.e) + 1;
                        for (N.s = i, i = T < 0 ? 0 : T, h.unshift(0); S++ < s; x.push(0)) ;
                        do {
                            for (l = 0; l < 10; l++) {
                                if (s != (S = x.length)) f = s > S ? 1 : -1; else for (m = -1, f = 0; ++m < s; ) if (o[m] != x[m]) {
                                    f = o[m] > x[m] ? 1 : -1;
                                    break;
                                }
                                if (!(f < 0)) break;
                                for (c = S == s ? o : h; S; ) {
                                    if (x[--S] < c[S]) {
                                        for (m = S; m && !x[--m]; x[m] = 9) ;
                                        --x[m], x[S] += 10;
                                    }
                                    x[S] -= c[S];
                                }
                                for (;!x[0]; x.shift()) ;
                            }
                            b[w++] = f ? l : ++l, x[0] && f ? x[S] = r[v] || 0 : x = [ r[v] ];
                        } while ((v++ < y || x[0] !== p) && i--);
                        return b[0] || 1 == w || (b.shift(), N.e--), w > T && d(N, u, n.RM, x[0] !== p), 
                        N;
                    }, l.eq = function(t) {
                        return !this.cmp(t);
                    }, l.gt = function(t) {
                        return this.cmp(t) > 0;
                    }, l.gte = function(t) {
                        return this.cmp(t) > -1;
                    }, l.lt = function(t) {
                        return this.cmp(t) < 0;
                    }, l.lte = function(t) {
                        return this.cmp(t) < 1;
                    }, l.sub = l.minus = function(t) {
                        var e, n, r, o, i = this, a = i.constructor, u = i.s, s = (t = new a(t)).s;
                        if (u != s) return t.s = -s, i.plus(t);
                        var c = i.c.slice(), l = i.e, f = t.c, m = t.e;
                        if (!c[0] || !f[0]) return f[0] ? (t.s = -s, t) : new a(c[0] ? i : 0);
                        if (u = l - m) {
                            for ((o = u < 0) ? (u = -u, r = c) : (m = l, r = f), r.reverse(), s = u; s--; r.push(0)) ;
                            r.reverse();
                        } else for (n = ((o = c.length < f.length) ? c : f).length, u = s = 0; s < n; s++) if (c[s] != f[s]) {
                            o = c[s] < f[s];
                            break;
                        }
                        if (o && (r = c, c = f, f = r, t.s = -t.s), (s = (n = f.length) - (e = c.length)) > 0) for (;s--; c[e++] = 0) ;
                        for (s = e; n > u; ) {
                            if (c[--n] < f[n]) {
                                for (e = n; e && !c[--e]; c[e] = 9) ;
                                --c[e], c[n] += 10;
                            }
                            c[n] -= f[n];
                        }
                        for (;0 === c[--s]; c.pop()) ;
                        for (;0 === c[0]; ) c.shift(), --m;
                        return c[0] || (t.s = 1, c = [ m = 0 ]), t.c = c, t.e = m, t;
                    }, l.mod = function(t) {
                        var e, n = this, r = n.constructor, o = n.s, i = (t = new r(t)).s;
                        return t.c[0] || g(NaN), n.s = t.s = 1, e = 1 == t.cmp(n), n.s = o, t.s = i, e ? new r(n) : (o = r.DP, 
                        i = r.RM, r.DP = r.RM = 0, n = n.div(t), r.DP = o, r.RM = i, this.minus(n.times(t)));
                    }, l.add = l.plus = function(t) {
                        var e, n = this, r = n.constructor, o = n.s, i = (t = new r(t)).s;
                        if (o != i) return t.s = -i, n.minus(t);
                        var a = n.e, u = n.c, s = t.e, c = t.c;
                        if (!u[0] || !c[0]) return c[0] ? t : new r(u[0] ? n : 0 * o);
                        if (u = u.slice(), o = a - s) {
                            for (o > 0 ? (s = a, e = c) : (o = -o, e = u), e.reverse(); o--; e.push(0)) ;
                            e.reverse();
                        }
                        for (u.length - c.length < 0 && (e = c, c = u, u = e), o = c.length, i = 0; o; ) i = (u[--o] = u[o] + c[o] + i) / 10 | 0, 
                        u[o] %= 10;
                        for (i && (u.unshift(i), ++s), o = u.length; 0 === u[--o]; u.pop()) ;
                        return t.c = u, t.e = s, t;
                    }, l.pow = function(t) {
                        var e = this, n = new e.constructor(1), r = n, o = t < 0;
                        for ((t !== ~~t || t < -u || t > u) && g("!pow!"), t = o ? -t : t; 1 & t && (r = r.times(e)), 
                        t >>= 1; ) e = e.times(e);
                        return o ? n.div(r) : r;
                    }, l.round = function(t, e) {
                        var n = this, r = n.constructor;
                        return null == t ? t = 0 : (t !== ~~t || t < 0 || t > a) && g("!round!"), d(n = new r(n), t, null == e ? r.RM : e), 
                        n;
                    }, l.sqrt = function() {
                        var t, e, n, r = this, o = r.constructor, i = r.c, a = r.s, u = r.e, s = new o("0.5");
                        if (!i[0]) return new o(r);
                        a < 0 && g(NaN), 0 === (a = Math.sqrt(r.toString())) || a === 1 / 0 ? ((t = i.join("")).length + u & 1 || (t += "0"), 
                        (e = new o(Math.sqrt(t).toString())).e = ((u + 1) / 2 | 0) - (u < 0 || 1 & u)) : e = new o(a.toString()), 
                        a = e.e + (o.DP += 4);
                        do {
                            n = e, e = s.times(n.plus(r.div(n)));
                        } while (n.c.slice(0, a).join("") !== e.c.slice(0, a).join(""));
                        return d(e, o.DP -= 4, o.RM), e;
                    }, l.mul = l.times = function(t) {
                        var e, n = this, r = n.constructor, o = n.c, i = (t = new r(t)).c, a = o.length, u = i.length, s = n.e, c = t.e;
                        if (t.s = n.s == t.s ? 1 : -1, !o[0] || !i[0]) return new r(0 * t.s);
                        for (t.e = s + c, a < u && (e = o, o = i, i = e, c = a, a = u, u = c), e = new Array(c = a + u); c--; e[c] = 0) ;
                        for (s = u; s--; ) {
                            for (u = 0, c = a + s; c > s; ) u = e[c] + i[s] * o[c - s - 1] + u, e[c--] = u % 10, 
                            u = u / 10 | 0;
                            e[c] = (e[c] + u) % 10;
                        }
                        for (u && ++t.e, e[0] || e.shift(), s = e.length; !e[--s]; e.pop()) ;
                        return t.c = e, t;
                    }, l.toString = l.valueOf = l.toJSON = function() {
                        var t = this, e = t.constructor, n = t.e, r = t.c.join(""), o = r.length;
                        if (n <= e.E_NEG || n >= e.E_POS) r = r.charAt(0) + (o > 1 ? "." + r.slice(1) : "") + (n < 0 ? "e" : "e+") + n; else if (n < 0) {
                            for (;++n; r = "0" + r) ;
                            r = "0." + r;
                        } else if (n > 0) if (++n > o) for (n -= o; n--; r += "0") ; else n < o && (r = r.slice(0, n) + "." + r.slice(n)); else o > 1 && (r = r.charAt(0) + "." + r.slice(1));
                        return t.s < 0 && t.c[0] ? "-" + r : r;
                    }, l.toExponential = function(t) {
                        return null == t ? t = this.c.length - 1 : (t !== ~~t || t < 0 || t > a) && g("!toExp!"), 
                        p(this, t, 1);
                    }, l.toFixed = function(t) {
                        var e, n = this, r = n.constructor, o = r.E_NEG, i = r.E_POS;
                        return r.E_NEG = -(r.E_POS = 1 / 0), null == t ? e = n.toString() : t === ~~t && t >= 0 && t <= a && (e = p(n, n.e + t), 
                        n.s < 0 && n.c[0] && e.indexOf("-") < 0 && (e = "-" + e)), r.E_NEG = o, r.E_POS = i, 
                        e || g("!toFix!"), e;
                    }, l.toPrecision = function(t) {
                        return null == t ? this.toString() : ((t !== ~~t || t < 1 || t > a) && g("!toPre!"), 
                        p(this, t - 1, 2));
                    }, r = m(), "function" == typeof define && n(66) ? define(function() {
                        return r;
                    }) : t.exports ? t.exports = r : (window || e).Big = r;
                }(this);
                var F = function() {
                    var t = w.KNOWN_URI.fn;
                    function e(t, e, n, r, i) {
                        var a = o.string.fromString(e);
                        if (t && t.containsKey(a)) {
                            var u = t.get(a);
                            if ("function" == n) throw v("Option " + a + " must be a function", "XPTY0004");
                            if (1 == u.length && o[n].matches(u[0])) {
                                if (i && i.indexOf(u[0].value) < 0) throw v("Invalid value " + a + "=" + u[0], "FOJS0005");
                                return u[0].value;
                            }
                            throw v("Invalid option: " + e + ": must be " + n, "XPTY0004");
                        }
                        return r;
                    }
                    function n(t, e, n) {
                        var r = 0, o = a();
                        function i(t) {
                            throw v(t, "FOJS0001");
                        }
                        function a() {
                            return o = u();
                        }
                        function u() {
                            var e, n;
                            for (o = ""; ;) {
                                if (r >= t.length) return [ "eof" ];
                                if (n = t.charAt(r++), !/[ \n\r\t]/.test(n)) break;
                            }
                            switch (n) {
                              case "[":
                              case "{":
                              case "]":
                              case "}":
                              case ":":
                              case ",":
                                return [ n ];

                              case '"':
                                for (var a = !1; ;) {
                                    if ('"' == (e = t.charAt(r++)) && !a) return [ "string", o ];
                                    o += e, a = "\\" == e && !a, r >= t.length && i("Unclosed quotes in string literal");
                                }
                                return [ "string", o ];

                              case "-":
                              case "0":
                              case "1":
                              case "2":
                              case "3":
                              case "4":
                              case "5":
                              case "6":
                              case "7":
                              case "8":
                              case "9":
                                for (o += n; r < t.length; ) {
                                    if (e = t.charAt(r++), !/[0-9\-+\.eE]/.test(e)) {
                                        r--;
                                        break;
                                    }
                                    o += e;
                                }
                                return [ "number", s(o) ];

                              case "t":
                              case "f":
                              case "n":
                                for (o += n; (e = t.charAt(r)) >= "a" && e <= "z" && (o += e, !(++r >= t.length)); ) ;
                                if (/^(true|false|null)$/.test(o)) return [ o ];
                                i("Unknown constant " + o);
                                break;

                              default:
                                return i("Unexpected character '" + n + "' (" + w.stringToCodepoints(n) + ") at position " + r), 
                                -1;
                            }
                        }
                        function s(t) {
                            return /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/.test(t) ? t : i("Invalid JSON number " + t);
                        }
                        function c(t) {
                            o[0] !== t && i("Expected " + t + ", found " + o[0]);
                        }
                        function l(t) {
                            return o[0] === t && (a(), !0);
                        }
                        function f(t) {
                            return o[0] === t ? (a(), !0) : "," === o[0] ? (a(), !1) : void i("Expected ',' or '" + t + "', found '" + o[0] + "'");
                        }
                        function m() {
                            switch (o[0]) {
                              case "[":
                                a(), p();
                                break;

                              case "{":
                                a(), h();
                                break;

                              case "string":
                                n.emitString(o[1]), a();
                                break;

                              case "number":
                                n.emitNumber(o[1]), a();
                                break;

                              case "true":
                              case "false":
                                n.emitBoolean(o[0]), a();
                                break;

                              case "null":
                                n.emitNull(), a();
                                break;

                              default:
                                i("Unexpected token " + o[0]);
                            }
                        }
                        function p() {
                            if (n.startArray(), !l("]")) do {
                                m();
                            } while (!f("]"));
                            n.endArray();
                        }
                        function h() {
                            if (n.startMap(), !l("}")) do {
                                c("string"), n.emitKey(o[1]), a(), c(":"), a(), m();
                            } while (!f("}"));
                            n.endMap();
                        }
                        return m(), c("eof"), n.result();
                    }
                    function r(t) {
                        try {
                            return JSON.parse('"' + t + '"');
                        } catch (t) {
                            throw v(t.toString(), "FOJS0001");
                        }
                    }
                    var i = /[\x00-\x08\x0B\x0C\x0E-\x0F\x80-\x9F]/;
                    function a(t) {
                        return t.replace(i, "\ufffd").replace(/[\uD800-\uDFFF]+/g, function(t) {
                            for (var e = "", n = 0; n < t.length; n++) {
                                var r = t.charAt(n);
                                e += n % 2 == r < "\udc00" || n == t.length - 1 && r < "\udc00" ? "\ufffd" : r;
                            }
                            return e;
                        });
                    }
                    function u(t) {
                        for (var e = t.charCodeAt(0).toString(16); e.length < 4; ) e = "0" + e;
                        return "\\u" + e.toUpperCase();
                    }
                    function s(t) {
                        this._valStack = [], this._keyStack = [], e(t, "liberal", "boolean", !1), this._escape = e(t, "escape", "boolean", !1), 
                        this._duplicates = e(t, "duplicates", "string", "use-first", [ "reject", "use-first", "use-last" ]);
                    }
                    function c(t, n) {
                        this._valStack = [], this._keyStack = [], this._mapStack = [], this._context = n, 
                        e(t, "liberal", "boolean", !1), e(t, "validate", "boolean", !1), e(t, "fallback", "function"), 
                        this._escape = e(t, "escape", "boolean", !1), this._duplicates = e(t, "duplicates", "string", "use-first", [ "reject", "use-first", "retain" ]);
                    }
                    function l(n, i) {
                        var a = h;
                        function s(t) {
                            throw new v("Invalid input to xml-to-json(): " + t, "FOJS0006");
                        }
                        function c(t) {
                            0 !== a.getChildElements(t).length && s("node " + t.tagName + " must have no element children");
                        }
                        function l(t) {
                            g.child(t).filter(function(t) {
                                return t.nodeType == a.TEXT_NODE && t.nodeValue && "" !== O.trim(t.nodeValue);
                            }).next() && s("node " + t.tagName + " must have no text content");
                        }
                        function f(t) {
                            try {
                                return o.boolean.fromString(t).toBoolean();
                            } catch (e) {
                                s("invalid boolean: '" + t + "'");
                            }
                        }
                        function m(t) {
                            try {
                                JSON.parse('"' + t + '"');
                            } catch (t) {
                                throw v("invalid escape sequence: " + t.toString(), "FOJS0007");
                            }
                        }
                        function p(e) {
                            if (e.nodeType == a.DOCUMENT_NODE || e.nodeType == a.DOCUMENT_FRAGMENT_NODE) {
                                var n = a.getChildElements(e);
                                return 1 != n.length && s("document node has " + n.length + " element children"), 
                                p(n[0]);
                            }
                            if (e.nodeType == a.ELEMENT_NODE) {
                                var i = !1;
                                if (e.namespaceURI == t) switch (g.attribute(e).forEachItem(function(n) {
                                    (n.name.indexOf(":") < 0 || n.namespaceURI == t) && ("key" == n.name || "escaped-key" == n.name ? "escaped-key" == n.name ? (a.xdmParentNode(e) && "map" == a.xdmParentNode(e).localName || s("@escaped-key is allowed only on children of map"), 
                                    f(n.value) && m(e.getAttribute("key"))) : a.xdmParentNode(e) && "map" === a.xdmParentNode(e).localName || s("@key is allowed only on children of map") : "escaped" == n.name ? ("string" != e.localName && s("@escaped is allowed only on string"), 
                                    i = f(n.value)) : s("invalid attribute " + n.name));
                                }), !e.hasAttribute("escaped-key") || a.xdmParentNode && "map" != a.xdmParentNode.localName || s("escaped-key is allowed only on children of map"), 
                                e.localName) {
                                  case "null":
                                    return g.child(e).filter(function(t) {
                                        return t.nodeType != a.COMMENT_NODE && t.nodeType != a.PROCESSING_INSTRUCTION_NODE;
                                    }).next() && s("null element must have no content"), "null";

                                  case "string":
                                    c(e);
                                    var h = e.textContent;
                                    return i ? (m(h = h.replace(/^"/g, '\\"').replace(/^[\b]/g, "\\b").replace(/^\f/g, "\\f").replace(/^\n/g, "\\n").replace(/^\r/g, "\\r").replace(/^\t/g, "\\t").replace(/^\//g, "\\/").replace(/([^\\])"/g, '$1\\"').replace(/([^\\])[\b]/g, "$1\\b").replace(/([^\\])\f/g, "$1\\f").replace(/([^\\])\n/g, "$1\\n").replace(/([^\\])\r/g, "$1\\r").replace(/([^\\])\t/g, "$1\\t").replace(/([^\\])\//g, "$1\\/").replace(/[\u0001-\u001F\u007F-\u009F]/g, u)), 
                                    '"' + h + '"') : JSON.stringify(h).replace(/\//g, "\\/");

                                  case "number":
                                    var d;
                                    c(e);
                                    try {
                                        d = o.double.fromString(e.textContent);
                                    } catch (t) {
                                        s("invalid number");
                                    }
                                    return isFinite(d.toNumber()) || s("NaN and INF not allowed"), d.toString();

                                  case "boolean":
                                    return c(e), f(e.textContent), o.boolean.fromString(e.textContent).toString();

                                  case "array":
                                    l(e);
                                    var v = "[", y = "";
                                    return a.getChildElements(e).forEach(function(t) {
                                        v += y + p(t), y = ",";
                                    }), v + "]";

                                  case "map":
                                    l(e);
                                    var x = "{", S = "", N = {};
                                    return a.getChildElements(e).forEach(function(t) {
                                        t.hasAttribute("key") || s("child element of map must have a key");
                                        var e = a.getAttribute(t, "key"), n = e, o = a.getAttribute(t, "escaped-key"), i = !1;
                                        o && f(o) && (i = !0, n = r(e)), N[n] && s("duplicate key '" + e + "'"), N[n] = !0, 
                                        x += S + (i ? '"' + e + '"' : JSON.stringify(e).replace(/\//g, "\\/")) + ":" + p(t), 
                                        S = ",";
                                    }), x + "}";

                                  default:
                                    s("unknown local name " + e.localName);
                                } else s("wrong namespace " + e.namespaceURI);
                            } else a.isNode(e) || s("not a node"), Error.dumpStack && Error.dumpStack(), s("wrong node kind " + e.nodeType);
                        }
                        return e(i, "indent", "boolean", !1), p(n);
                    }
                    return s.prototype = {
                        _valStack: [],
                        _keyStack: [],
                        _optionsMap: {},
                        _escape: !1,
                        _duplicates: "use-first",
                        reEscape: function(t) {
                            return this._escape ? JSON.stringify(t).replace(/^"|"$/g, "").replace(/\\"/g, '"').replace(/[\uD800-\uDFFF]/g, u) : a(t);
                        },
                        peek: function() {
                            return this._valStack[this._valStack.length - 1];
                        },
                        writeItem: function(t) {
                            if (0 === this._valStack.length) this._valStack.push(t); else if (this.peek() instanceof w.XdmArray) this.peek().value.push(t); else {
                                var e = this.peek(), n = o.string.fromString(this._keyStack.pop());
                                if (e.containsKey(n)) switch (this._duplicates) {
                                  case "reject":
                                    throw v("json-to-xml: duplicate key '" + n.toString() + "'", "FOJS0003");

                                  case "use-first":
                                    return;
                                }
                                e.inSituPut(n, t);
                            }
                        },
                        emitNull: function() {
                            this.writeItem([]);
                        },
                        emitBoolean: function(t) {
                            this.writeItem([ o.boolean.fromString(t) ]);
                        },
                        emitNumber: function(t) {
                            this.writeItem([ o.double.fromNumber(parseFloat(t)) ]);
                        },
                        emitString: function(t) {
                            this.writeItem([ o.string.fromString(this.reEscape(r(t))) ]);
                        },
                        emitKey: function(t) {
                            this._keyStack.push(this.reEscape(r(t)));
                        },
                        startArray: function() {
                            this._valStack.push(new w.XdmArray([]));
                        },
                        endArray: function() {
                            this.writeItem([ this._valStack.pop() ]);
                        },
                        startMap: function() {
                            this._valStack.push(new d());
                        },
                        endMap: function() {
                            this.writeItem([ this._valStack.pop() ]);
                        },
                        result: function() {
                            return void 0 !== this.peek()[0] ? this.peek()[0] : null;
                        }
                    }, c.prototype = {
                        _valStack: [],
                        _keyStack: [ {} ],
                        _mapStack: [],
                        _context: null,
                        _optionsMap: {},
                        _escape: !1,
                        _duplicates: "use-first",
                        reEscape: function(t) {
                            return this._escape ? JSON.stringify(t).replace(/^"|"$/g, "").replace(/\\"/g, '"').replace(/[\uD800-\uDFFF]/g, u) : a(t);
                        },
                        peek: function() {
                            return this._valStack[this._valStack.length - 1];
                        },
                        writeItem: function(e) {
                            if (0 === this._valStack.length) e.setAttribute("xmlns", t), this._valStack.push(e); else {
                                var n = this.peek();
                                if ("map" == n.tagName) {
                                    var r = this._keyStack.pop(), o = this._mapStack[this._mapStack.length - 1];
                                    if (r in o) switch (this._duplicates) {
                                      case "reject":
                                        throw v("parse-json: duplicate key '" + r.toString() + "'", "FOJS0003");

                                      case "use-first":
                                        return;
                                    }
                                    o[r] = e, e.setAttribute("key", r), this._escape && /\\/.test(r.toString()) && e.setAttribute("escaped-key", "true");
                                }
                                n.appendChild(e);
                            }
                        },
                        emitNull: function() {
                            var e = this._context.resultDocument.createElementNS(t, "null");
                            this.writeItem(e);
                        },
                        emitBoolean: function(e) {
                            var n = this._context.resultDocument.createElementNS(t, "boolean"), r = this._context.resultDocument.createTextNode(e.toString());
                            n.appendChild(r), this.writeItem(n);
                        },
                        emitNumber: function(e) {
                            var n = this._context.resultDocument.createElementNS(t, "number"), r = this._context.resultDocument.createTextNode(e.toString());
                            n.appendChild(r), this.writeItem(n);
                        },
                        emitString: function(e) {
                            var n = this._context.resultDocument.createElementNS(t, "string");
                            if ("" !== e) {
                                var o = this.reEscape(r(e)), i = this._context.resultDocument.createTextNode(o);
                                this._escape && /\\/.test(o) && n.setAttribute("escaped", "true"), n.appendChild(i);
                            }
                            this.writeItem(n);
                        },
                        emitKey: function(t) {
                            this._keyStack.push(this.reEscape(r(t)));
                        },
                        startArray: function() {
                            var e = this._context.resultDocument.createElementNS(t, "array");
                            this._valStack.push(e);
                        },
                        endArray: function() {
                            this.writeItem(this._valStack.pop());
                        },
                        startMap: function() {
                            var e = this._context.resultDocument.createElementNS(t, "map");
                            this._valStack.push(e), this._mapStack.push({});
                        },
                        endMap: function() {
                            this._mapStack.pop(), this.writeItem(this._valStack.pop());
                        },
                        result: function() {
                            return this.peek();
                        }
                    }, {
                        parseToMap: function(t, e) {
                            return n(t, e, new s(e));
                        },
                        parseToXml: function(t, e, r) {
                            return n(t, e, new c(e, r));
                        },
                        xmlToJson: l
                    };
                }(), I = function() {
                    function t(t, e, n) {
                        var r = n.fixed.accumulators[e];
                        if (!r) throw v("Unknown accumulator " + e, "XTDE3340");
                        var o = h.getChildElements(r, "pre")[0], i = h.getChildElements(r, "post")[0], a = c(h.getChildElements(o, "accRule")), u = c(h.getChildElements(i, "accRule")), s = w.evaluate(w.argRole(r, "init"), n).expand();
                        function c(t) {
                            for (var e = [], n = t.length - 1; n >= 0; n--) e.push({
                                rule: t[n],
                                action: h.getChildElements(t[n])[1],
                                pattern: A(h.getChildElements(t[n])[0])
                            });
                            return e;
                        }
                        function l(t) {
                            t._saxonAccumulators || (t._saxonAccumulators = {}), t._saxonAccumulators[e] = {};
                            var n = f(a, t);
                            n && (s = m(n, t)), t._saxonAccumulators[e].pre = s, g.child(t).forEachItem(l), 
                            (n = f(u, t)) && (s = m(n, t)), t._saxonAccumulators[e].post = s;
                        }
                        function f(t, e) {
                            for (var n = 0, r = t.length; n < r; n++) if (t[n].pattern(e)) return t[n];
                            return null;
                        }
                        function m(t, e) {
                            var r = n.newContext(!0);
                            return r.focus = E.Solo(e), r.localVars = [ s ], w.evaluate(t.action, r).expand();
                        }
                        l(t);
                    }
                    function e(n, r, o, i) {
                        if (r.nodeType == h.ATTRIBUTE_NODE || r.nodeType == h.NAMESPACE_NODE) throw v("Accumulators are not available on attribute or namespace nodes", "XTTE3360");
                        return r._saxonOriginal ? e(n, r._saxonOriginal, o, i) : (r._saxonAccumulators && r._saxonAccumulators.hasOwnProperty(n) || t(h.ownerDocument(r), n, o), 
                        r._saxonAccumulators[n][i]);
                    }
                    return {
                        accumBefore: function(t, n, r) {
                            return e(t, n, r, "pre");
                        },
                        accumAfter: function(t, n, r) {
                            return e(t, n, r, "post");
                        }
                    };
                }(), k = function() {
                    function t(t, n, r) {
                        var o, a = e(n), u = h.getChildElements(n, "sortKey"), s = i.getConverters(u, r), c = [], l = r.newContext(!1);
                        l.focus = E.Tracker(t);
                        for (var f = function(t, e) {
                            var n = w.evalChild1(t, l), r = n.next();
                            if (r && n.next()) throw v("Multiple values in merge key", "XTTE1020");
                            return s[e](r);
                        }; null !== (o = l.focus.next()); ) {
                            var m = u.map(f);
                            c.push({
                                item: o,
                                keys: m,
                                ms: a
                            });
                        }
                        return c;
                    }
                    function e(t) {
                        return t.hasAttribute("name") ? t.getAttribute("name") : "#unnamed";
                    }
                    function n(t, e, n) {
                        for (var r = [], o = 0, i = 0; ;) {
                            if (o >= t.length) {
                                for (;i < e.length; ) r.push(e[i++]);
                                break;
                            }
                            if (i >= e.length) {
                                for (;o < t.length; ) r.push(t[o++]);
                                break;
                            }
                            var a = n(t[o], e[i]);
                            a <= 0 && r.push(t[o++]), a >= 0 && r.push(e[i++]);
                        }
                        return r;
                    }
                    function r(t, e) {
                        return h.getChildElements(t, "sortKey").map(function(t) {
                            return i.sortKeyProps(t, e);
                        });
                    }
                    function o(t) {
                        return function(e, n) {
                            for (var r = 0; r < t.length; r++) {
                                var o = t[r](e.keys[r], n.keys[r]);
                                if (0 !== o) return o;
                            }
                            return 0;
                        };
                    }
                    function a(t, n, r) {
                        for (var o = null, i = [], a = {}, u = 0; u < n.length; u++) {
                            var s = n[u];
                            if (null === o || 0 !== r(o, s)) {
                                a = {
                                    items: [ s.item ],
                                    keys: s.keys,
                                    groups: {}
                                };
                                for (var c = 0; c < t.length; c++) a.groups[e(t[c])] = [];
                                a.groups[s.ms] = [ s.item ], i.push(a);
                            } else a.items.push(s.item), a.groups[s.ms].push(s.item);
                            o = s;
                        }
                        return i;
                    }
                    function u(e, u) {
                        for (var s = h.getChildElements(e, "mergeSrc"), c = s.map(function(t) {
                            return r(t, u);
                        }), l = c[0], f = 1; f < c.length; f++) for (var m = 0; m < l.length; m++) {
                            var p = l[m], d = c[f][m];
                            if (p.order !== d.order || p.lang !== d.lang || p.caseOrder !== d.caseOrder || p.dataType !== d.dataType) throw v("All merge sources must have compatible merge keys", "XTDE2210");
                        }
                        for (var g = o(l.map(function(t) {
                            return i.compareFnWithProps(t, u);
                        })), y = null, x = 0; x < s.length; x++) {
                            var S = s[x], N = u.newContext(!1), b = w.argRole(S, "forEachItem");
                            N.focus = b ? E.Tracker(w.evaluate(b, u)) : E.Tracker(E.Singleton(u.getCurrentFocus()));
                            for (var T = w.argRole(S, "selectRows"); null !== N.focus.next(); ) {
                                var A = t(w.evaluate(T, N), S, N);
                                y = null === y ? A : n(y, A, g);
                            }
                        }
                        if (null === y) return E.Empty;
                        for (var O = a(s, y, g), C = w.argRole(e, "action"), D = [], _ = 0; _ < O.length; _++) {
                            var M = u.newContext(!1);
                            M.focus = E.Tracker(E.Singleton(O[_].items[0])), M.currentMergeGroup = O[_];
                            for (var F, I = w.evaluate(C, M); null !== (F = I.next()); ) D.push(F);
                        }
                        return E.ForArray(D);
                    }
                    return {
                        merge: u
                    };
                }(), P = function() {
                    function t() {
                        var t = f.getPlatform().readResource("lib/xpath/XPathJS.min.js"), e = new Function(t += "return XPath;");
                        f.XPath = e();
                    }
                    return {
                        parse: function() {
                            return t(), f.XPath.parse.apply(null, arguments);
                        },
                        compile: function() {
                            return t(), f.XPath.compile.apply(null, arguments);
                        },
                        evaluate: function() {
                            return t(), f.XPath.evaluate.apply(null, arguments);
                        },
                        evaluateXDM: function() {
                            return t(), f.XPath.evaluateXDM.apply(null, arguments);
                        },
                        setStaticContext: function() {
                            return t(), f.XPath.setStaticContext.apply(null, arguments);
                        }
                    };
                }(), U = {}, R = "undefined" != typeof window;
                function B() {
                    R ? (X(e.platform), z("Saxon-JS " + rt().productVersion + " in browser", 0)) : (X(JSTestDriver.platform), 
                    z("Saxon-JS " + rt().productVersion + " in Nashorn")), "function" == typeof U.initialize && U.initialize();
                }
                function X(t) {
                    U = t;
                }
                var L = 1;
                function z(t, e) {
                    0 === e || e || (e = 1), e <= L && U.saxonPrint(t);
                }
                var J = null;
                function q() {
                    return J;
                }
                var G, $ = null;
                function j(t) {
                    var e = new Function("uri", "local", t ? t.getAttribute("test") : "return false");
                    function n(t) {
                        switch (t.nodeType) {
                          case h.DOCUMENT_NODE:
                            n(t.documentElement);
                            break;

                          case h.DOCUMENT_FRAGMENT_NODE:
                          case h.ELEMENT_NODE:
                            for (var r = h.nameOfNode(t), o = h.getInheritedAttribute(t, "xml:space"), i = e(r.uri, r.local) && !(o && "preserve" == o), a = t.childNodes, u = 0; u < a.length; ) {
                                var s = a[u];
                                if (s.nodeType == h.CDATA_SECTION) {
                                    var c = h.ownerDocument(t).createTextNode(s.nodeValue);
                                    t.replaceChild(c, s), s = c;
                                }
                                s.nodeType == h.TEXT_NODE ? i && "" === O.trim(s.nodeValue) ? t.removeChild(s) : u++ : (n(s), 
                                u++);
                            }
                        }
                    }
                    return function(t) {
                        return n(t), t;
                    };
                }
                function Q(t, e, n) {
                    var r = g.child(t.documentElement).filter(function(t) {
                        return "stripJS" == t.tagName;
                    }).next();
                    $ = j(r), e && $ && (e = $(e)), n.saxonVersion = q();
                    var i = Z(t, e, n);
                    if (i.fixed.spaceStripper = $, e) {
                        h.obtainDocumentNumber(e);
                        var a = e._saxonBaseUri;
                        z("Adding " + a + " to doc pool (doc " + e._saxonBaseUri + ")", 2), i.fixed.documentPool[a] = e;
                    }
                    var u, s = n.destination;
                    R && void 0 === n.destination && (s = "application"), s && !/^(appendToBody|prependToBody|replaceBody|application|native)$/.test(s) && z("Warning: supplied transformation option not recognised - destination: " + s, 1), 
                    R && /^(appendToBody|prependToBody|replaceBody)$/.test(s) && (i.resultDocument = window.document);
                    var c = n.initialTemplate;
                    c && c.indexOf("Q{") < 0 && (c = "Q{}" + c);
                    var l = n.initialFunction, f = n.initialMode;
                    f || (f = t.documentElement.hasAttribute("defaultMode") ? t.documentElement.getAttribute("defaultMode") : ""), 
                    "#unnamed" == f && (f = ""), "" !== f && f.indexOf("Q{") < 0 && (f = "Q{}" + f);
                    var m = "Q{" + w.KNOWN_URI.xsl + "}initial-template";
                    if (e || c || tt(i, m) && (c = m), l) {
                        var p = n.functionParams ? n.functionParams : [], d = p.length, y = et(i, l, d);
                        if (!y) throw v("Unknown initial function " + l + "#" + d, "XTDE0041");
                        var x = h.firstElementChild(y.decl);
                        i.focus = {}, i.currentComponent = y, i.clearGrouping(), i.tempOutputState = "function", 
                        i.currentMode = {}, i.currentTemplate = null, i.localVars = p.map(function(t) {
                            var e = w.convertFromJS(t, !1, !0);
                            return Array.isArray(e) ? e : [ e ];
                        }), i.localParams = {}, u = w.evaluate(w.argRole(x, "body"), i);
                    } else if (c) {
                        var S = tt(i, c);
                        if (!S) throw v("Unknown initial template " + c, "XTDE0040");
                        var N = h.firstElementChild(S.decl);
                        i.fixed.globalContextItem ? i.focus = E.Solo(e) : (i.focus = E.Tracker(E.Empty), 
                        i.focus.next()), w.checkTemplateFocus(N, i), i.currentComponent = S, i.currentMode = {}, 
                        K(n, i), u = w.evalChild1(N, i);
                    } else {
                        var b = i.fixed.modes[f];
                        if (!b) throw v("Unknown initial mode " + f, "XTDE0045");
                        if (!e) throw v("No source document, initial template, or initial mode supplied", "SXJS0006");
                        var T = parseInt(b._expr.parentNode.getAttribute("id"));
                        i.currentComponent = i.fixed.components[T], i.focus = E.Tracker(E.Singleton(e)), 
                        K(n, i), u = b.applyTemplates(i);
                    }
                    if ("application" == s) n.principalResult = n.isDynamicStylesheet ? u : w.convertToJS(u.expand()); else if ("native" == s) {
                        var A = u.expand();
                        1 == A.length && h.isNode(A[0]) && (A[0] = o.string.fromString(w.serialize(E.ForArray(A)))), 
                        n.principalResult = A;
                    } else {
                        w.makeComplexContent(i.resultRoot, u, i);
                        var O = g.child(i.resultRoot);
                        if (O) if (R) {
                            var C = window.document.body;
                            if ("appendToBody" == s) O.forEachItem(function(t) {
                                C.appendChild(t);
                            }); else if ("prependToBody" == s) {
                                var D = C.firstChild;
                                O.forEachItem(function(t) {
                                    C.insertBefore(t, D);
                                });
                            } else if ("replaceBody" == s) {
                                for (;C.childNodes.length > 0; ) C.removeChild(C.childNodes[0]);
                                O.forEachItem(function(t) {
                                    C.appendChild(t);
                                });
                            }
                        } else n.principalResult = i.resultRoot;
                    }
                    R && Y(i);
                }
                function K(t, e) {
                    function n(t) {
                        var e = {};
                        for (var n in t) if (t.hasOwnProperty(n)) {
                            var r = w.convertFromJS(t[n], !1, !0);
                            e[n.indexOf("Q{") < 0 ? "Q{}" + n : n] = Array.isArray(r) ? r : [ r ];
                        }
                        return e;
                    }
                    t.templateParams && (e.localParams = n(t.templateParams)), t.tunnelParams && (e.tunnelParams = n(t.tunnelParams));
                }
                function V(t, e) {
                    function n(t) {
                        var e = "";
                        for (var n in t) t.hasOwnProperty(n) && (e += n + ", ");
                        return e;
                    }
                    var r, o;
                    function i(n, r) {
                        if (null === n) throw v("No stylesheet supplied", "SXJS0006");
                        H(n), Q(n, r, t), e && e(t.principalResult);
                    }
                    if (z("Transform options supplied: " + n(t), 0), t.stylesheetParams || (t.stylesheetParams = {}), 
                    "function" == typeof U.deliverMessage && U.deliverMessage(t), "number" == typeof t.logLevel && ot(t.logLevel), 
                    R) {
                        var a = [], u = window.document.baseURI;
                        t.stylesheetLocation && (t.stylesheetLocation = U.resolveUri(t.stylesheetLocation.toString(), u), 
                        a.push(t.stylesheetLocation)), t.sourceLocation && (t.sourceLocation = U.resolveUri(t.sourceLocation.toString(), u), 
                        a.push(t.sourceLocation)), r = t.stylesheetNode ? t.stylesheetNode : null, o = t.sourceNode ? t.sourceNode : t.sourceText ? U.parseXmlFromString(t.sourceText) : null, 
                        t.sourceNode && t.sourceNode.baseURI && (o._saxonBaseUri = t.sourceNode.baseURI), 
                        0 === a.length ? i(r, o) : U.asyncGetMultipleXml(a, function(e) {
                            r = t.stylesheetLocation ? e[t.stylesheetLocation] : r, o = t.sourceLocation ? e[t.sourceLocation] : o, 
                            i(r, o);
                        });
                    } else {
                        if (!(r = t.stylesheetNode)) {
                            var s = t.stylesheetText;
                            if (!s) {
                                var c = t.stylesheetFileName;
                                if (!c) throw v("No stylesheet supplied", "SXJS0006");
                                s = U.readFile(c);
                            }
                            r = U.parseXmlFromString(s);
                        }
                        if ((o = t.sourceNode) && t.sourceNode.baseURI && (o._saxonBaseUri = t.sourceNode.baseURI), 
                        !o) {
                            var l = t.sourceText;
                            if (!l) {
                                var f = t.sourceFileName;
                                f && (l = U.readFile(f));
                            }
                            l && ((o = U.parseXmlFromString(l))._saxonBaseUri = t.sourceLocation ? t.sourceLocation : t.sourceFileName);
                        }
                        i(r, o);
                    }
                }
                function H(t) {
                    var e = 0, n = 0;
                    function r(t, e) {
                        for (var n = e << 8, r = 0; r < t.length; r++) n = (n << 1) + t.charCodeAt(r);
                        return n;
                    }
                    function i(t, e) {
                        return r(t.local, e) ^ r(t.uri, e);
                    }
                    function a(t) {
                        e ^= i(h.nameOfNode(t), n++), g.attribute(t).forEachItem(function(t) {
                            e ^= i(h.nameOfNode(t), n), e ^= r(t.value, n);
                        }), g.child(t).filter(function(t) {
                            return t.nodeType == h.ELEMENT_NODE;
                        }).forEachItem(function(t) {
                            a(t);
                        }), e ^= 1;
                    }
                    var u = !1;
                    if (g.child(t).forEachItem(function(t) {
                        if (t.nodeType == h.ELEMENT_NODE) {
                            if ("package" == h.nameOfNode(t).local) {
                                var n = h.getAttribute(t, "target", "not specified");
                                if (J = h.getAttribute(t, "saxonVersion", "9.7.0.7"), G = h.getAttribute(t, "relocatable", "false"), 
                                z("SEF generated by Saxon-EE version " + J + " with -target:" + n + " -relocate:" + G, 0), 
                                "9.7.0.7" != J && "JS" != n) throw v("Supplied SEF is not customized for use with Saxon-JS. The option -target:JS should be set when generating the export. target is: " + n, "SXJS0006");
                                if (t.hasAttribute("expiry")) if (o.date.fromString(t.getAttribute("expiry")).compareTo(o.date.fromDate(new Date(), 0)) < 0) throw v("Development license for supplied stylesheet has expired", "SXJS0006");
                            }
                            a(t);
                        } else if (t.nodeType == h.PROCESSING_INSTRUCTION_NODE && h.nameOfNode(t).local == String.fromCharCode(931)) {
                            var r = (e < 0 ? 4294967295 + e + 1 : e).toString(16);
                            if (r != t.data) throw v("Invalid checksum in SEF " + t.data + " != " + r, "SXJS0006");
                            u = !0;
                        }
                    }), !u) throw v("No checksum found in SEF", "SXJS0006");
                }
                function Y(t) {
                    function e(e, n) {
                        var r = function(n) {
                            var r = n.target, o = t.newContext(!0);
                            o.tempOutputState = !1, o.currentEvent = n, o.focus = E.Tracker(E.Singleton(w.convertFromJS(r)));
                            var i = parseInt(e._expr.parentNode.getAttribute("id"));
                            o.currentComponent = t.fixed.components[i], e.applyTemplates(o).expand();
                        };
                        -1 == [ "httpabort", "afterprint", "beforeprint", "beforeunload", "hashchange", "languagechange", "message", "offline", "online", "pagehide", "pageshow", "popstate", "storage", "unhandledrejection", "unload" ].indexOf(n) ? window.document.addEventListener(n, r, !1) : window.addEventListener(n, r, !1);
                    }
                    var n = t.fixed.modes;
                    for (var r in n) if (n.hasOwnProperty(r)) {
                        var o = r.split("}");
                        o[0] == "Q{" + w.KNOWN_URI.ixsl && e(n[r], o[1].replace(/^on/, ""));
                    }
                }
                var W = R && window.performance && window.performance.now ? window.performance.now : function() {
                    return Date.now().valueOf();
                };
                function Z(t, e, n) {
                    function r(e, n) {
                        g.descendant(t).filter(function(t) {
                            return t.nodeType == h.ELEMENT_NODE && t.tagName == e;
                        }).forEachItem(n);
                    }
                    function o(t) {
                        var e = h.getAttribute(t, "name");
                        return e ? /^Q\{/.test(e) ? e : "Q{}" + e : null;
                    }
                    var a = new nt();
                    function u(t, e) {
                        function n(t) {
                            for (var n = h.getChildElements(t, "co"), r = 0; r < n.length; r++) e(n[r]);
                        }
                        n(t);
                        var r = h.firstElementChild(t, "overridden");
                        null !== r && n(r);
                    }
                    if (a.fixed = {
                        options: n,
                        stylesheet: t,
                        globalContextItem: e,
                        topPackage: null,
                        packages: {},
                        components: {},
                        globalVars: {},
                        modes: {},
                        userFunctions: {},
                        accumulators: {},
                        decimalFormats: {},
                        resultDocUris: {},
                        _nextDocumentNumber: 0,
                        currentDate: {}
                    }, n.collations || (n.collations = {}), n.collations[i.codepointCollationUri] = i.codepointCollation(), 
                    n.collations[i.fotsCaseblindCollationUri] = i.caseblindCollation(), n.collations[i.htmlCaseInsensitiveCollationUri] = i.caseblindCollation(), 
                    n.collations[i.xsltsCaseblindCollationUri] = i.caseblindCollation(), r("package", function(t) {
                        var e = {
                            name: t.getAttribute("name"),
                            decl: t,
                            decimalFormats: {},
                            keys: {}
                        };
                        a.fixed.packages[e.name] = e, a.fixed.topPackage || (a.fixed.topPackage = e), u(t, function(t) {
                            var n = parseInt(t.getAttribute("id"));
                            a.fixed.components[n] = {
                                id: n,
                                visibility: t.getAttribute("vis"),
                                decl: t,
                                pack: e,
                                actor: null,
                                bindings: t.getAttribute("binds").split(" ").map(function(t) {
                                    return parseInt(t);
                                })
                            };
                        });
                    }), r("package", function(t) {
                        var e = a.fixed.packages[t.getAttribute("name")];
                        u(t, function(t) {
                            var e = parseInt(t.getAttribute("id")), n = a.fixed.components[e], r = h.firstElementChild(t);
                            if (null === r) {
                                a.fixed.packages[t.getAttribute("dpack")];
                                var i = a.fixed.components[parseInt(t.getAttribute("base"))].decl;
                                r = h.firstElementChild(i);
                            }
                            if (n.actor = r, "globalVariable" === r.tagName || "globalParam" === r.tagName) n.value = null; else if ("mode" === r.tagName) {
                                var u = new T(r);
                                n.mode = u;
                                var s = o(r);
                                a.fixed.modes[null === s ? "" : s] = u;
                            }
                        });
                        for (var n = h.getChildElements(t, "decimalFormat"), r = 0; r < n.length; r++) {
                            var i = n[r], s = o(i);
                            e.decimalFormats[null === s ? "Q{}" : s] = i;
                        }
                        for (var c = h.getChildElements(t, "key"), l = 0; l < c.length; l++) {
                            var f = c[l], m = o(f);
                            e.keys[m] ? e.keys[m].push(f) : e.keys[m] = [ f ];
                        }
                    }), r("mode", function(t) {
                        var e = o(t);
                        a.fixed.modes[null === e ? "" : e] = new T(t);
                    }), r("globalVariable", function(t) {
                        var e = o(t);
                        a.fixed.globalVars[e] = {
                            decl: t,
                            value: null,
                            isParam: !1
                        };
                    }), r("globalParam", function(t) {
                        var e = o(t);
                        a.fixed.globalVars[e] = {
                            decl: t,
                            value: null,
                            isParam: !0
                        };
                    }), r("function", function(t) {
                        w.hasFlag(t, "m") && w.notImplemented("memo function");
                        var e = o(t), n = g.child(t).filter(function(t) {
                            return "arg" == t.tagName;
                        }).count();
                        a.fixed.userFunctions[e + "#" + n] = w.argRole(t, "body"), a.fixed.userFunctions[e + "#-1"] = !0;
                    }), r("accumulator", function(t) {
                        var e = o(t);
                        a.fixed.accumulators[e] = t;
                    }), a.fixed.documentPool = {}, a.fixed._nextDocumentNumber = 0, a.fixed.currentDate = new Date(), 
                    R) {
                        var s = window.document.baseURI;
                        if (a.fixed.htmlURI = s, a.fixed.javascriptURI = U.baseUri(), n.stylesheetLocation && !h.isAbsoluteURI(n.stylesheetLocation)) throw v("stylesheetLocation should be absolute by now", "SXJS0004");
                        a.fixed.staticBaseURI = n.isDynamicStylesheet ? null : "true" === G ? n.stylesheetLocation || s : null;
                    } else a.fixed.staticBaseURI = "true" === G ? n.stylesheetFileName : null;
                    return a.currentComponent = null, a.resultDocument = R ? document.implementation.createDocument(null, "html", null) : new Document(), 
                    a.resultRoot = a.resultDocument.createDocumentFragment(), a.localVars = [], a.localParams = {}, 
                    a.tunnelParams = {}, a;
                }
                function tt(t, e) {
                    for (var n = t.fixed.topPackage, r = h.getChildElements(n.decl, "co"), o = 0; o < r.length; o++) {
                        var i = parseInt(r[o].getAttribute("id")), a = t.fixed.components[i], u = a.actor;
                        if ("template" === u.tagName && u.getAttribute("name") === e) return a;
                    }
                }
                function et(t, e, n) {
                    for (var r = t.fixed.topPackage, o = h.getChildElements(r.decl, "co"), i = 0; i < o.length; i++) {
                        var a = parseInt(o[i].getAttribute("id")), u = t.fixed.components[a], s = u.actor;
                        if ("function" === s.tagName && s.getAttribute("name") === e && h.getChildElements(s, "arg").length == n) return u;
                    }
                }
                function nt() {}
                function rt() {
                    return {
                        version: 3,
                        vendor: "Saxonica",
                        vendorURL: "http://www.saxonica.com/",
                        productName: "Saxon-JS",
                        productVersion: "1.2.0",
                        isSchemaAware: !1,
                        supportsSerialization: !1,
                        supportsBackwardsCompatibility: !0,
                        supportsNamespaceAxis: !0,
                        supportsStreaming: !1,
                        supportsDynamicEvaluation: !0,
                        supportsHigherOrderFunctions: !1,
                        xPathVersion: 3.1,
                        xsdVersion: 1.1
                    };
                }
                function ot(t) {
                    "number" == typeof t && (L = t);
                }
                return nt.prototype = {
                    depth: 0,
                    focus: null,
                    currentComponent: null,
                    resultDocument: null,
                    tempOutputState: !1,
                    fixed: {},
                    localParams: {},
                    tunnelParams: {},
                    currentTemplate: null,
                    currentMode: {},
                    currentError: null,
                    currentEvent: null,
                    currentGroup: null,
                    currentGroupingKey: null,
                    currentMergeGroup: null,
                    localVars: [],
                    toString: function() {
                        var t = "{";
                        for (var e in this.localParams) this.localParams.hasOwnProperty(e) && (t += e + ":(" + this.localParams[e] + "),");
                        return t += "}", "context: " + this.getCurrentFocus() + " localParams: " + t;
                    },
                    newContext: function(t) {
                        var e = this, n = new nt();
                        return n.depth = e.depth + 1, n.focus = e.focus, n.currentComponent = e.currentComponent, 
                        n.resultDocument = e.resultDocument, n.currentMode = e.currentMode, n.currentTemplate = e.currentTemplate, 
                        n.currentError = e.currentError, n.currentGroup = e.currentGroup, n.currentGroupingKey = e.currentGroupingKey, 
                        n.currentMergeGroup = e.currentMergeGroup, n.fixed = e.fixed, n.tempOutputState = e.tempOutputState, 
                        n.currentEvent = e.currentEvent, t ? (n.localParams = {}, n.tunnelParams = {}, n.localVars = []) : (n.localParams = e.localParams, 
                        n.tunnelParams = e.tunnelParams, n.localVars = e.localVars), n;
                    },
                    clearGrouping: function() {
                        this.currentGroup = null, this.currentGroupingKey = null, this.currentMergeGroup = null;
                    },
                    createElement: function(t, e) {
                        return "" !== t && "http://www.w3.org/1999/xhtml" != t || !R || this.resultDocument != window.document ? this.resultDocument.createElementNS(t, e) : this.resultDocument.createElement(e);
                    },
                    createAttribute: function(t, e) {
                        return new c(new o.QName.fromEQName("Q{" + t + "}" + e), null, null);
                    },
                    createAttributeFromQName: function(t) {
                        return new c(t, null, null);
                    },
                    noCurrentFocus: function() {
                        return !this.focus || !this.focus.current;
                    },
                    getCurrentFocus: function() {
                        return this.noCurrentFocus() ? null : this.focus.current;
                    }
                }, B(), {
                    transform: V,
                    getProcessorInfo: rt,
                    setLogLevel: ot,
                    getLogLevel: function() {
                        return L;
                    },
                    setPlatform: X,
                    getPlatform: function() {
                        return U;
                    },
                    getNavigator: function() {
                        return window.navigator.userAgent;
                    },
                    timeStamp: W,
                    internalTransform: Q,
                    U: {
                        Atomic: o,
                        Axis: g,
                        Context: nt,
                        Compare: i,
                        calculator: _,
                        nameOfNode: h.nameOfNode,
                        isNode: h.isNode,
                        isAttr: h.isAttr,
                        isNamespaceNode: h.isNSNode,
                        declareNS: h.declareNS,
                        getInheritedAttribute: h.getInheritedAttribute,
                        getChildElements: h.getChildElements,
                        isMap: w.isMap,
                        isArray: w.isArray,
                        roleDiagnostic: w.roleDiagnostic,
                        wsCollapse: w.wsCollapse,
                        ForArray: E.ForArray,
                        AnyIterator: E.AnyIterator,
                        obtainDocumentNumber: h.obtainDocumentNumber,
                        evaluate: w.evaluate,
                        declaringPackage: w.declaringPackage,
                        Iter: E,
                        convertFromJS: w.convertFromJS,
                        convertToJS: w.convertToJS,
                        stringToCodepoints: w.stringToCodepoints
                    },
                    XError: v,
                    XPath: P
                };
            }(), m = Object.freeze({
                default: f
            }), p = i(function*() {
                return l || (l = i(function*() {
                    var t = a(yield Promise.all([ n.e(0).then(n.bind(null, 76)), n.e(0).then(n.bind(null, 77)), n.e(0).then(n.bind(null, 78)), n.e(0).then(n.bind(null, 79)) ]), 4), e = t[0], r = t[1], o = t[2], i = t[3];
                    return Object.assign({}, f.getPlatform(), {
                        saxonPrint: function(t) {
                            t && t.match(/Saxon\-JS .*? in browser/);
                        },
                        baseUri: function() {
                            return "SaxonJS.js";
                        },
                        readFile: function(t) {
                            return t ? t.endsWith("texmap.xml") ? o.default : t.endsWith("texmap-upgreek.xml") ? i.default : null : null;
                        },
                        readResource: function(t) {
                            if (!t) return null;
                            if (t.endsWith("categories.json")) {
                                var n = e.default || e;
                                return "string" == typeof n ? n : JSON.stringify(n);
                            }
                            if (t.endsWith("functions.json")) {
                                var o = r.default || r;
                                return "string" == typeof o ? o : JSON.stringify(o);
                            }
                            return null;
                        }
                    });
                })());
            }), h = function(t) {
                return `<?xml version="1.0" encoding="UTF-8"?>\n<article xmlns="http://docbook.org/ns/docbook" version="5.0">\n  <equation>\n  ${Object(r.sanitize)(t, {
                    USE_PROFILES: {
                        mathMl: !0
                    }
                })}\n  </equation>\n</article>`;
            }, d = function() {
                var t = i(function*(t) {
                    var e = (yield Promise.resolve().then(function() {
                        return m;
                    })).default;
                    window.SaxonJS = e;
                    var r = (yield n.e(0).then(n.bind(null, 80))).default, o = yield p();
                    e.setLogLevel(-1), e.setPlatform(o);
                    var i = new DOMParser().parseFromString(r, "application/xml"), a = h(t);
                    return new Promise(function(t, n) {
                        try {
                            e.transform({
                                stylesheetNode: i,
                                sourceText: a,
                                deliverMessage: function() {}
                            }, function(e) {
                                var n = e.querySelector("equation");
                                n ? n.childNodes.length < 2 ? t(null) : "function" != typeof n.childNodes[1].data.trim ? t(null) : t(n.childNodes[1].data.trim()) : t(null);
                            });
                        } catch (t) {
                            n(t);
                        }
                    });
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            }();
            e.a = d;
        }).call(this, n(65)(t));
    },
    64: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(41), o = n(12);
        function i(t, e, n, r, o, i, a) {
            try {
                var u = t[i](a), s = u.value;
            } catch (t) {
                return void n(t);
            }
            u.done ? e(s) : Promise.resolve(s).then(r, o);
        }
        function a(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(r, o) {
                    var a = t.apply(e, n);
                    function u(t) {
                        i(a, r, o, u, s, "next", t);
                    }
                    function s(t) {
                        i(a, r, o, u, s, "throw", t);
                    }
                    u(void 0);
                });
            };
        }
        var u = Object(o.parse)(window.location.search).mathml;
        a(function*() {
            try {
                var t = yield Object(r.a)(u);
                window.parent.postMessage({
                    type: "EQUATIO_MATHML_RESULT",
                    latex: t
                }, "https://docs.google.com");
            } catch (t) {
                window.parent.postMessage({
                    type: "EQUATIO_MATHML_RESULT",
                    error: "failed"
                }, "https://docs.google.com");
            }
        })();
    },
    65: function(t, e) {
        t.exports = function(t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l;
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i;
                    }
                }), Object.defineProperty(e, "exports", {
                    enumerable: !0
                }), e.webpackPolyfill = 1;
            }
            return e;
        };
    },
    66: function(t, e) {
        (function(e) {
            t.exports = e;
        }).call(this, {});
    }
});