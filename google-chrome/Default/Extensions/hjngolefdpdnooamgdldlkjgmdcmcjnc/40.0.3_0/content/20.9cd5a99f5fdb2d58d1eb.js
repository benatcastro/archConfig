(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 20, 27 ], {
    107: function(e, t) {
        /**
* pretty-data - nodejs plugin to pretty-print or minify data in XML, JSON and CSS formats.
*  
* Version - 0.40.0
* Copyright (c) 2012 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* http://www.eslinstructor.net/pretty-data/
* 
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*	pd.xml(data ) - pretty print XML;
*	pd.json(data) - pretty print JSON;
*	pd.css(data ) - pretty print CSS;
*	pd.sql(data)  - pretty print SQL;
*
*	pd.xmlmin(data [, preserveComments] ) - minify XML; 
*	pd.jsonmin(data)                      - minify JSON; 
*	pd.cssmin(data [, preserveComments] ) - minify CSS; 
*	pd.sqlmin(data)                       - minify SQL; 
*
* PARAMETERS:
*
*	@data  			- String; XML, JSON, CSS or SQL text to beautify;
* 	@preserveComments	- Bool (optional, used in minxml and mincss only); 
*				  Set this flag to true to prevent removing comments from @text; 
*	@Return 		- String;
*	
* USAGE:
*	
*	var pd  = require('pretty-data').pd;
*
*	var xml_pp   = pd.xml(xml_text);
*	var xml_min  = pd.xmlmin(xml_text [,true]);
*	var json_pp  = pd.json(json_text);
*	var json_min = pd.jsonmin(json_text);
*	var css_pp   = pd.css(css_text);
*	var css_min  = pd.cssmin(css_text [, true]);
*	var sql_pp   = pd.sql(sql_text);
*	var sql_min  = pd.sqlmin(sql_text);
*
* TEST:
*	comp-name:pretty-data$ node ./test/test_xml
*	comp-name:pretty-data$ node ./test/test_json
*	comp-name:pretty-data$ node ./test/test_css
*	comp-name:pretty-data$ node ./test/test_sql
*/
        function n() {
            for (this.shift = [ "\n" ], this.step = "  ", maxdeep = 100, ix = 0, ix = 0; ix < maxdeep; ix++) this.shift.push(this.shift[ix] + this.step);
        }
        function r(e, t) {
            return t - (e.replace(/\(/g, "").length - e.replace(/\)/g, "").length);
        }
        function o(e, t) {
            return e.replace(/\s{1,}/g, " ").replace(/ AND /gi, "~::~" + t + t + "AND ").replace(/ BETWEEN /gi, "~::~" + t + "BETWEEN ").replace(/ CASE /gi, "~::~" + t + "CASE ").replace(/ ELSE /gi, "~::~" + t + "ELSE ").replace(/ END /gi, "~::~" + t + "END ").replace(/ FROM /gi, "~::~FROM ").replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ").replace(/ HAVING /gi, "~::~HAVING ").replace(/ IN /gi, " IN ").replace(/ JOIN /gi, "~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ").replace(/ ON /gi, "~::~" + t + "ON ").replace(/ OR /gi, "~::~" + t + t + "OR ").replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ").replace(/ OVER /gi, "~::~" + t + "OVER ").replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ").replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ").replace(/ THEN /gi, " THEN~::~" + t).replace(/ UNION /gi, "~::~UNION~::~").replace(/ USING /gi, "~::~USING ").replace(/ WHEN /gi, "~::~" + t + "WHEN ").replace(/ WHERE /gi, "~::~WHERE ").replace(/ WITH /gi, "~::~WITH ").replace(/ ALL /gi, " ALL ").replace(/ AS /gi, " AS ").replace(/ ASC /gi, " ASC ").replace(/ DESC /gi, " DESC ").replace(/ DISTINCT /gi, " DISTINCT ").replace(/ EXISTS /gi, " EXISTS ").replace(/ NOT /gi, " NOT ").replace(/ NULL /gi, " NULL ").replace(/ LIKE /gi, " LIKE ").replace(/\s{0,}SELECT /gi, "SELECT ").replace(/~::~{1,}/g, "~::~").split("~::~");
        }
        n.prototype.xml = function(e) {
            var t = e.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/xmlns\:/g, "~::~xmlns:").replace(/xmlns\=/g, "~::~xmlns=").split("~::~"), n = t.length, r = !1, o = 0, i = "", c = 0;
            for (c = 0; c < n; c++) t[c].search(/<!/) > -1 ? (i += this.shift[o] + t[c], r = !0, 
            (t[c].search(/-->/) > -1 || t[c].search(/\]>/) > -1 || t[c].search(/!DOCTYPE/) > -1) && (r = !1)) : t[c].search(/-->/) > -1 || t[c].search(/\]>/) > -1 ? (i += t[c], 
            r = !1) : /^<\w/.exec(t[c - 1]) && /^<\/\w/.exec(t[c]) && /^<[\w:\-\.\,]+/.exec(t[c - 1]) == /^<\/[\w:\-\.\,]+/.exec(t[c])[0].replace("/", "") ? (i += t[c], 
            r || o--) : t[c].search(/<\w/) > -1 && -1 == t[c].search(/<\//) && -1 == t[c].search(/\/>/) ? i = i += r ? t[c] : this.shift[o++] + t[c] : t[c].search(/<\w/) > -1 && t[c].search(/<\//) > -1 ? i = i += r ? t[c] : this.shift[o] + t[c] : t[c].search(/<\//) > -1 ? i = i += r ? t[c] : this.shift[--o] + t[c] : t[c].search(/\/>/) > -1 ? i = i += r ? t[c] : this.shift[o] + t[c] : t[c].search(/<\?/) > -1 ? i += this.shift[o] + t[c] : t[c].search(/xmlns\:/) > -1 || t[c].search(/xmlns\=/) > -1 ? i += this.shift[o] + t[c] : i += t[c];
            return "\n" == i[0] ? i.slice(1) : i;
        }, n.prototype.json = function(e) {
            return "string" == typeof e ? JSON.stringify(JSON.parse(e), null, this.step) : "object" == typeof e ? JSON.stringify(e, null, this.step) : null;
        }, n.prototype.css = function(e) {
            var t = e.replace(/\s{1,}/g, " ").replace(/\{/g, "{~::~").replace(/\}/g, "~::~}~::~").replace(/\;/g, ";~::~").replace(/\/\*/g, "~::~/*").replace(/\*\//g, "*/~::~").replace(/~::~\s{0,}~::~/g, "~::~").split("~::~"), n = t.length, r = 0, o = "", i = 0;
            for (i = 0; i < n; i++) /\{/.exec(t[i]) ? o += this.shift[r++] + t[i] : /\}/.exec(t[i]) ? o += this.shift[--r] + t[i] : (/\*\\/.exec(t[i]), 
            o += this.shift[r] + t[i]);
            return o.replace(/^\n{1,}/, "");
        }, n.prototype.sql = function(e) {
            var t = e.replace(/\s{1,}/g, " ").replace(/\'/gi, "~::~'").split("~::~"), n = t.length, i = [], c = 0, a = this.step, u = 0, l = "", s = 0;
            for (s = 0; s < n; s++) i = s % 2 ? i.concat(t[s]) : i.concat(o(t[s], a));
            for (n = i.length, s = 0; s < n; s++) u = r(i[s], u), /\s{0,}\s{0,}SELECT\s{0,}/.exec(i[s]) && (i[s] = i[s].replace(/\,/g, ",\n" + a + a)), 
            /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(i[s]) ? (c++, l += this.shift[c] + i[s]) : /\'/.exec(i[s]) ? (u < 1 && c && c--, 
            l += i[s]) : (l += this.shift[c] + i[s], u < 1 && c && c--);
            return l = l.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n");
        }, n.prototype.xmlmin = function(e, t) {
            return (t ? e : e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "")).replace(/>\s{0,}</g, "><");
        }, n.prototype.jsonmin = function(e) {
            return e.replace(/\s{0,}\{\s{0,}/g, "{").replace(/\s{0,}\[$/g, "[").replace(/\[\s{0,}/g, "[").replace(/:\s{0,}\[/g, ":[").replace(/\s{0,}\}\s{0,}/g, "}").replace(/\s{0,}\]\s{0,}/g, "]").replace(/\"\s{0,}\,/g, '",').replace(/\,\s{0,}\"/g, ',"').replace(/\"\s{0,}:/g, '":').replace(/:\s{0,}\"/g, ':"').replace(/:\s{0,}\[/g, ":[").replace(/\,\s{0,}\[/g, ",[").replace(/\,\s{2,}/g, ", ").replace(/\]\s{0,},\s{0,}\[/g, "],[");
        }, n.prototype.cssmin = function(e, t) {
            return (t ? e : e.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, "")).replace(/\s{1,}/g, " ").replace(/\{\s{1,}/g, "{").replace(/\}\s{1,}/g, "}").replace(/\;\s{1,}/g, ";").replace(/\/\*\s{1,}/g, "/*").replace(/\*\/\s{1,}/g, "*/");
        }, n.prototype.sqlmin = function(e) {
            return e.replace(/\s{1,}/g, " ").replace(/\s{1,}\(/, "(").replace(/\s{1,}\)/, ")");
        }, t.pd = new n();
    },
    108: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return g;
        });
        var r = n(3), o = n(23), i = n(2), c = n(15), a = n(39), u = n(6);
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function s(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function d(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        s(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        s(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        function f(e, t) {
            return m(e) || y(e, t) || h(e, t) || p();
        }
        function p() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function h(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0;
            }
        }
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function y(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i = [], c = !0, a = !1;
                try {
                    for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); c = !0) ;
                } catch (e) {
                    a = !0, o = e;
                } finally {
                    try {
                        c || null == n.return || n.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return i;
            }
        }
        function m(e) {
            if (Array.isArray(e)) return e;
        }
        var g = function() {
            try {
                var e = f(/Chrome\/([0-9.]+)/.exec(navigator.userAgent), 2)[1];
                return parseInt(e, 10) >= 76;
            } catch (e) {
                return !0;
            }
        };
        t.a = function() {
            var e = d(function*(e) {
                var t = o.default.getState(), n = t.mathquill, s = t.mathOptions, d = t.drawer, f = n.latex, p = s.locale, h = s.speechEngine, v = d.mode, y = "";
                Object(i.I)("Copy Math As - ".concat(e));
                var m = yield Object(i.g)(!0);
                switch (e) {
                  default:
                    y = f;
                    break;

                  case r.CopyMode.Html:
                    if (v === r.ToolModes.GraphEditor) {
                        var g = yield r.GraphRendering.getScreenshot(), b = yield r.GraphRendering.getState(), w = yield Object(a.a)(g, b);
                        y = '<img src="'.concat(w, '" alt="EquatIO Graph" />');
                    } else {
                        var E = yield r.MathRendering.getSpokenText(f, p, h), S = document.createElement("img");
                        S.src = "https://".concat("equatio-api.texthelp.com", "/svg/").concat(encodeURIComponent(f)), 
                        S.alt = E, y = S.outerHTML;
                    }
                    break;

                  case r.CopyMode.MathML:
                    y = yield r.MathRendering.getMathML(f);
                    break;

                  case r.CopyMode.Speech:
                    y = yield r.MathRendering.getSpokenText(f, p, h);
                    break;

                  case r.CopyMode.SVG:
                    y = (yield r.MathRendering.getSvg(f)).html;
                    break;

                  case r.CopyMode.PNG:
                    var O;
                    if (v === r.ToolModes.GraphEditor) O = yield r.GraphRendering.getScreenshot(); else {
                        var C = (yield r.MathRendering.getSvg(f)).html;
                        O = yield r.MathRendering.getPng(C);
                    }
                    if (Object(c.c)(window.location.hostname)) yield Object(i.B)(O); else {
                        var A = yield (yield fetch(O)).blob();
                        yield navigator.clipboard.write([ new ClipboardItem(l({}, A.type, A)) ]);
                    }
                    return void (m && (yield Object(i.R)("clipboard", {
                        copyBtn: !0,
                        url: O
                    })));

                  case r.CopyMode.Download:
                    var j;
                    if (v === r.ToolModes.GraphEditor) j = yield r.GraphRendering.getScreenshot(); else {
                        var T = (yield r.MathRendering.getSvg(f)).html;
                        j = yield r.MathRendering.getPng(T);
                    }
                    var M = document.createElement("a");
                    Object.assign(M, {
                        download: "equatio.png",
                        href: j
                    }), document.body.appendChild(M), M.addEventListener("click", function(e) {
                        return e.stopPropagation();
                    }, !1), M.click(), document.body.removeChild(M);
                    break;

                  case r.CopyMode.URL:
                    if (v === r.ToolModes.GraphEditor) {
                        var x = yield r.GraphRendering.getScreenshot(), P = yield r.GraphRendering.getState();
                        y = yield Object(a.a)(x, P);
                    } else {
                        var I = yield r.MathRendering.getSvg(f), k = I.width, R = I.height, L = "height=".concat(Math.floor(R));
                        k < 20 ? L = "width=20" : R < 20 && (L = "height=20"), y = Object(u.c)() === u.a.GoogleForms ? "https://".concat("equatio-api.texthelp.com", "/png/").concat(encodeURIComponent(f)) : "https://".concat("equatio-api.texthelp.com", "/png/").concat(encodeURIComponent(f), "?").concat(L);
                    }
                }
                y && (Object(c.c)(window.location.hostname) ? yield Object(i.B)(y, !0) : yield navigator.clipboard.writeText(y), 
                m && (yield Object(i.R)("clipboard", {
                    copyBtn: !0
                })));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
    },
    132: function(e, t, n) {
        "use strict";
        for (var r = {
            ctrl: 17,
            control: 17,
            alt: 18,
            option: 18,
            shift: 16,
            windows: 91,
            command: 91,
            esc: 27,
            escape: 27,
            "`": 192,
            "-": 189,
            "=": 187,
            backspace: 8,
            tab: 9,
            "\\": 220,
            "[": 219,
            "]": 221,
            ";": 186,
            "'": 222,
            enter: 13,
            return: 13,
            ",": 188,
            ".": 190,
            "/": 191,
            space: 32,
            pause: 19,
            break: 19,
            insert: 45,
            delete: 46,
            home: 36,
            end: 35,
            pageup: 33,
            pagedown: 34,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            capslock: 20,
            numlock: 144,
            scrolllock: 145
        }, o = 1; o < 20; o++) r["f" + o] = 111 + o;
        function i(e) {
            var t = r[e.toLowerCase()];
            return void 0 !== t ? t : 1 === e.length ? e.toUpperCase().charCodeAt(0) : void 0;
        }
        function c(e) {
            for (var t in r) if (r.hasOwnProperty(t) && r[t] === e) return t;
            return String.fromCharCode(e).toLowerCase();
        }
        e.exports = function(e) {
            return "string" == typeof e ? i(e) : "number" == typeof e ? c(e) : void 0;
        };
    },
    137: function(e, t) {},
    138: function(e, t) {},
    14: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "b", function() {
            return i;
        });
        var r = {
            Insert: "INSERT_HTML_EDITOR",
            Extract: "EXTRACT_SELECTION_HTML_EDITOR",
            SetEditor: "SET_HTML_EDITOR"
        }, o = function(e, t) {
            window.postMessage({
                type: "EQUATIO_HTML_EDITOR_API_RESPONSE",
                action: e,
                value: t
            });
        }, i = function(e, t, n) {
            window.postMessage({
                type: "EQUATIO_HTML_EDITOR_API",
                action: e,
                value: t,
                targetEditor: n
            });
        };
    },
    15: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "d", function() {
            return c;
        }), n.d(t, "c", function() {
            return a;
        });
        var r = [ "onedrive.live.com", ".sharepoint.com", ".officeapps.live.com" ], o = {
            Word: "Word",
            PowerPoint: "PowerPoint",
            Excel: "Excel",
            Onenote: "Onenote"
        }, i = [ o.Word ], c = function(e) {
            return i.includes(e);
        };
        t.b = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!e) return !1;
            var n = e;
            if (!t) try {
                n = new URL(e).hostname;
            } catch (e) {
                return !1;
            }
            for (var o = 0; o < r.length; o += 1) if (n.endsWith(r[o])) return !0;
            return !1;
        };
        var a = function(e) {
            return e.endsWith("word-edit.officeapps.live.com") ? o.Word : e.endsWith("powerpoint.officeapps.live.com") ? o.PowerPoint : e.endsWith("excel.officeapps.live.com") ? o.Excel : e.endsWith("onenote.officeapps.live.com") ? o.Onenote : null;
        };
    },
    173: function(e, t) {},
    175: function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(3), o = n(2), i = n(6), c = n(23), a = n(61), u = n(55), l = n(15);
            function s(e, t, n, r, o, i, c) {
                try {
                    var a = e[i](c), u = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function d(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function c(e) {
                            s(i, r, o, c, a, "next", e);
                        }
                        function a(e) {
                            s(i, r, o, c, a, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            var f = {
                InsertImage: "EQUATIO_COMPANION_INSERT_IMAGE",
                InsertMath: "EQUATIO_COMPANION_INSERT_MATH"
            }, p = function(e) {
                var t = Object(u.b)().math;
                d(function*() {
                    var n = c.default.getState().mathOptions, o = n.locale, i = n.speechEngine, a = yield r.MathRendering.getSvg(e), u = a.width, l = a.height, s = yield r.MathRendering.getSpokenText(e, o, i), d = yield r.MathRendering.getMathML(e);
                    t(e, u, l, s, d);
                })();
            }, h = function() {
                var t = d(function*(t, n) {
                    var r = new Blob([ e.from(t.substr(22), "base64") ]);
                    return Object(o.db)(URL.createObjectURL(r, {
                        oneTimeOnly: !0
                    }), null, n);
                });
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            }(), v = function(e, t) {
                return h(e, t);
            }, y = function() {
                var e = d(function*(e) {
                    var t = Object(u.b)(), n = t.image, r = t.isEditorApi, o = window.location.hostname, c = !0;
                    if (Object(a.a)() && !r) c = !1; else if (Object(l.b)(o)) {
                        var s = Object(l.c)(o);
                        Object(l.d)(s) || (c = !1);
                    }
                    if (c) {
                        var d = Object(i.d)();
                        yield n(yield v(e, d));
                    } else yield n(e);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            }();
            t.a = function() {
                var e = function(e) {
                    if (e && e.action) switch (e.action) {
                      case f.InsertMath:
                        p(e.latex);
                        break;

                      case f.InsertImage:
                        y(e.image);
                    }
                };
                chrome.runtime.onMessage.addListener(e);
            };
        }).call(this, n(128).Buffer);
    },
    20: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "b", function() {
            return i;
        }), n.d(t, "f", function() {
            return c;
        }), n.d(t, "d", function() {
            return u;
        }), n.d(t, "g", function() {
            return l;
        }), n.d(t, "e", function() {
            return d;
        }), n.d(t, "h", function() {
            return f;
        }), n.d(t, "c", function() {
            return p;
        });
        var r = Object.freeze({
            Automatic: "automatic",
            Speed: "speed",
            Quality: "quality"
        }), o = r.Automatic, i = function() {
            return o;
        }, c = function(e) {
            return o = e;
        }, a = !0, u = function() {
            return a;
        }, l = function(e) {
            return a = e;
        }, s = 40, d = function() {
            return s;
        }, f = function(e) {
            return s = e;
        }, p = function() {
            return {
                chromeOptions: {
                    insertType: o
                },
                options: {
                    autoplaySR: a,
                    speechSpeed: s
                }
            };
        };
    },
    23: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(3), o = n(26), i = n(2), c = n(73), a = n(67), u = n(78), l = n(20);
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach(function(t) {
                    f(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function p(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function h(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        p(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        p(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var v = function() {
            return function(e) {
                return function(t) {
                    switch (t.type) {
                      case r.Events.Options.SaveSettings:
                        var n = t.profile, o = t.options, s = t.disabledFeatures;
                        h(function*() {
                            yield Object(i.cb)(d({}, o, {
                                disabledFeatures: s
                            }), n, Object(l.c)()), r.Actions.Options.closeDialog();
                        })(), Object(u.b)(o.locale);
                        break;

                      case r.Events.Options.CheckLicense:
                        var f = t.code;
                        h(function*() {
                            try {
                                var e = yield Object(c.a)(f);
                                r.Actions.Options.setUserLicense(e);
                            } catch (e) {
                                r.Actions.Options.setUserLicenseError();
                            }
                        })();
                        break;

                      case r.Events.Options.Closed:
                        Object(a.b)();
                    }
                    return e(t);
                };
            };
        };
        t.default = Object(r.createReduxStore)([ o.b, v, a.a ], "Equatio Chrome");
    },
    26: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p;
        }), n.d(t, "c", function() {
            return h;
        });
        var r = n(3), o = n(73), i = n(2), c = n(55), a = n(68), u = n(53), l = n(108);
        function s(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function d(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        s(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        s(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var f = [], p = function(e) {
            f.push(e);
        }, h = function(e) {
            var t = f.findIndex(function(t) {
                return t === e;
            });
            t >= 0 && f.splice(t, 1);
        }, v = function(e) {
            f.forEach(function(t) {
                "function" == typeof t && t(e);
            });
        };
        t.b = function(e) {
            return function(t) {
                return function(n) {
                    switch (n.type) {
                      case r.Events.Toolbar.OpenMathspace:
                        Object(i.R)(null), Object(i.E)();
                        break;

                      case r.Events.General.RequestLicense:
                        d(function*() {
                            var e = yield Object(o.b)(), t = e || {}, n = t.daysleft, c = t.auth_code, a = (e || {}).licence_type, u = void 0 === a ? "Unknown" : a;
                            n <= 30 && "Freemium" === u ? u = "Trial" : n < 0 && (u = "Expired"), Object(i.I)("License Check - ".concat(u).concat(c ? " - ".concat(c) : "")), 
                            r.Actions.General.setLicense(e);
                        })();
                        break;

                      case r.Events.Toolbar.SetInsertsLeft:
                        var s = n.value;
                        Object(i.N)(s);
                        break;

                      case r.Events.Toolbar.RequestExtractedMath:
                        var f = Object(c.a)();
                        d(function*() {
                            var t = yield f();
                            if (t) {
                                var n = e.getState().drawer.mode;
                                "mathspace" === t.type ? (Object(i.E)(t.platformIntegrationId), Object(u.d)()) : "desmos" === t.type ? (Object(i.I)("Extract Graph - ".concat(n, " - ").concat(Object(a.a)())), 
                                r.Actions.Toolbar.setExtractedGraph(t.state), n !== r.ToolModes.GraphEditor && r.Actions.Toolbar.setMode(r.ToolModes.GraphEditor)) : (Object(i.I)("Extract Math - ".concat(n, " - ").concat(Object(a.a)())), 
                                r.Actions.Toolbar.setExtractedMath(t), n !== r.ToolModes.EquationEditor && r.Actions.Toolbar.setMode(r.ToolModes.EquationEditor));
                            }
                        })();
                        break;

                      case r.Events.Toolbar.InsertMath:
                        Object(i.R)(null), r.Actions.Toolbar.setInsertMathLoading(!0);
                        var p = e.getState().drawer.mode, h = n.width, y = n.height, m = n.latex, g = n.spokenText, b = n.mathML, w = Object(c.b)().math;
                        Object(i.I)("Insert Math - ".concat(p, " - ").concat(Object(a.a)())), d(function*() {
                            try {
                                yield w(m, h, y, g, b);
                            } catch (e) {
                                r.Actions.Toolbar.setInsertMathLoading(!1), console.error("Math insert failed", e), 
                                Object(i.R)("insert_fail");
                            }
                            r.Actions.Toolbar.setInsertMathLoading(!1), p === r.ToolModes.HandwritingRecognition && Object(i.U)();
                        })();
                        break;

                      case r.Events.Toolbar.InsertGraph:
                        Object(i.R)(null);
                        var E = e.getState().drawer.mode, S = n.imageData, O = n.calculatorState;
                        S && O && d(function*() {
                            r.Actions.Toolbar.setInsertMathLoading(!0);
                            var e = Object(c.b)().graph;
                            Object(i.I)("Insert Graph - ".concat(E, " - ").concat(Object(a.a)()));
                            try {
                                yield e(S, O);
                            } catch (e) {
                                console.error("Insert Graph Failed", e), r.Actions.Toolbar.setInsertMathLoading(!1), 
                                Object(i.R)("insert_fail");
                            }
                            r.Actions.Toolbar.setInsertMathLoading(!1), Object(i.U)();
                        })();
                        break;

                      case r.Events.Toolbar.SetMode:
                        var C = n.mode;
                        if ("screenshot_reader" === C) {
                            var A = e.getState().licensing.profile, j = A.daysleft, T = A.features;
                            if (j < 0 && !T["Screenshot Reader"]) return t({
                                type: "noop"
                            });
                        }
                        C === r.ToolModes.HandwritingRecognition ? Object(i.Q)() : C === r.ToolModes.EquationEditor && Object(i.S)(), 
                        Object(u.d)();
                        break;

                      case r.Events.Favourites.Added:
                        var M = n.items;
                        d(function*() {
                            yield Object(i.ab)(M);
                        })();
                        break;

                      case r.Events.Favourites.Removed:
                        var x = n.item;
                        d(function*() {
                            yield Object(i.G)(x);
                        })();
                        break;

                      case r.Events.Toolbar.MathCopied:
                        Object(i.R)(null), d(function*() {
                            try {
                                if (yield Object(l.a)(n.mode), n.mode === r.CopyMode.Download) return;
                                r.Actions.Toolbar.setCopyMathStatus(r.CopyMathStatus.Success);
                            } catch (e) {
                                r.Actions.Toolbar.setCopyMathStatus(r.CopyMathStatus.Failure);
                            }
                        })();
                    }
                    var P = t(n);
                    return v(n), P;
                };
            };
        };
    },
    35: function(e, t, n) {
        "use strict";
        t.a = Object.freeze({
            ShowAltTextDialog: 0,
            SelectLeft: 1,
            ArrowRight: 2,
            SelectDocsEquationMac: 3,
            SelectDocsEquationWin: 4,
            InsertPlaceholderCharacter: 5,
            Delete: 6
        });
    },
    39: function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(2);
            function o(e, t, n, r, o, i, c) {
                try {
                    var a = e[i](c), u = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var c = e.apply(t, n);
                        function a(e) {
                            o(c, r, i, a, u, "next", e);
                        }
                        function u(e) {
                            o(c, r, i, a, u, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            var c = function() {
                var t = i(function*(t, n) {
                    var r = e.from(t.substr(22), "base64"), o = e.from("desmos::".concat(JSON.stringify(n), "::desmos"), "utf8"), i = e.concat([ r, o ]);
                    return URL.createObjectURL(new Blob([ i ]), {
                        oneTimeOnly: !0
                    });
                });
                return function(e, n) {
                    return t.apply(this, arguments);
                };
            }();
            t.a = function() {
                var e = i(function*(e, t) {
                    var n = yield c(e, t);
                    return Object(r.db)(n, null, !0);
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            }();
        }).call(this, n(128).Buffer);
    },
    44: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href;
            return e.includes("pdf.dev.texthelp.com") || e.includes("orbit.texthelp.com");
        };
    },
    52: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            for (var r, o, i, c = []; (r = document.elementFromPoint(e, t)) && !c.includes(r) && r !== i; ) {
                if (r.matches("".concat(n))) {
                    o = r;
                    break;
                }
                c.push({
                    element: r,
                    value: r.style.getPropertyValue("pointer-events"),
                    priority: r.style.getPropertyPriority("pointer-events")
                }), r.style.setProperty("pointer-events", "none", "important"), i = r;
            }
            return c.forEach(function(e) {
                e.element.style.setProperty("pointer-events", e.value || "", e.priority);
            }), o;
        };
    },
    53: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a;
        }), n.d(t, "b", function() {
            return u;
        }), n.d(t, "a", function() {
            return l;
        }), n.d(t, "d", function() {
            return s;
        });
        var r = n(52), o = function() {
            var e = document.querySelector("#equatio-gsuite-discover-shadow-host");
            return e && e.shadowRoot ? e.shadowRoot : document;
        }, i = function() {
            return o().querySelector(".equatio-gsuite-discover-overlay-center");
        }, c = function() {
            return o().querySelector(".equatio-gsuite-discover-overlay");
        }, a = function() {
            var e = c();
            return null !== e && "none" !== e.style.display;
        }, u = function() {
            var e = i();
            if (e) {
                var t = e.getBoundingClientRect(), n = t.x, o = t.y, c = t.width, a = t.height;
                return Object(r.a)(n + c / 2, o + a / 2, "div.kix-embeddedobject-view, g>image");
            }
        }, l = function() {
            var e = i();
            if (e) {
                var t = e.getBoundingClientRect(), n = t.x, o = t.y, c = t.width, a = t.height;
                return Object(r.a)(n + c / 2, o + a / 2, "span.typeset");
            }
        }, s = function() {
            var e = c();
            e && (e.style.display = "none");
        };
    },
    55: function(e, t, n) {
        "use strict";
        var r = n(175), o = n(6), i = n(3), c = n(23), a = n(2), u = function(e) {
            e && (i.Actions.Toolbar.setExtractedGraph(e), c.default.getState().drawer.mode !== i.ToolModes.GraphEditor && i.Actions.Toolbar.setMode(i.ToolModes.GraphEditor));
        }, l = function(e) {
            e && (i.Actions.Toolbar.setExtractedMath(e), c.default.getState().drawer.mode !== i.ToolModes.EquationEditor && i.Actions.Toolbar.setMode(i.ToolModes.EquationEditor));
        }, s = function(e) {
            e && Object(a.E)(e);
        }, d = function(e) {
            if (e.source === window && e.origin === window.location.origin && e.data && e.data.action) {
                if ("EQUATIO_CHROME_EXTRACT_MATH" === e.data.action) {
                    var t = e.data.latex;
                    l(t);
                }
                if ("EQUATIO_CHROME_EXTRACT_GRAPH" === e.data.action) {
                    var n = e.data.state;
                    u(n);
                }
                if ("EQUATIO_CHROME_EXTRACT_MATHSPACE" === e.data.action) {
                    var r = e.data.platformIntegrationId;
                    s(r);
                }
                if ("EQUATIO_PARTNER_EXTRACT_URL" === e.data.action) {
                    var o = e.data.url;
                    o && Object(a.f)(o).then(function(e) {
                        e && ("string" == typeof e && l(e), "desmos" === e.type && u(e.state), "mathspace" === e.type && s(e.platformIntegrationId));
                    });
                }
            }
        };
        window.addEventListener("message", d);
        var f = function() {
            return window.postMessage({
                action: "EQUATIO_CHROME_REQUEST_EXTRACTED_MATH"
            }, window.location.origin), Promise.resolve();
        }, p = function(e) {
            if (e.origin === window.location.origin && e.data && e.data.action && "EQUATIO_CHROME_SET_MODE" === e.data.action) {
                var t = e.data.mode;
                if ("mathspace" === t) return void Object(a.j)().then(function(e) {
                    e.daysleft > 0 && Object(a.E)();
                });
                i.Actions.Toolbar.setMode(t);
            }
        }, h = function() {
            window.addEventListener("message", p);
        }, v = function(e, t) {
            return e || t ? [ {
                name: "width",
                value: e
            }, {
                name: "height",
                value: t
            } ].map(function(e) {
                return "".concat(e.name, "=").concat(Math.ceil(e.value));
            }).join("&") : "";
        }, y = n(39);
        function m(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function g(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        m(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        m(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var b = function() {
            var e = g(function*(e, t, n, r) {
                if (e) {
                    var o = v(t, n), i = function(t) {
                        return "https://".concat("equatio-api.texthelp.com", "/").concat(t, "/").concat(encodeURIComponent(e), "?").concat(o);
                    };
                    window.postMessage({
                        action: "EQUATIO_CHROME_INSERT_MATH",
                        png: i("png"),
                        svg: i("svg"),
                        altText: r,
                        width: t,
                        height: n,
                        latex: e
                    }, window.location.href);
                }
            });
            return function(t, n, r, o) {
                return e.apply(this, arguments);
            };
        }(), w = function() {
            var e = g(function*(e) {
                window.postMessage({
                    action: "EQUATIO_CHROME_INSERT_IMAGE",
                    png: e
                }, window.location.href);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), E = function() {
            var e = g(function*(e, t) {
                if (e && t) {
                    var n = yield Object(y.a)(e, t);
                    window.postMessage({
                        action: "EQUATIO_CHROME_INSERT_GRAPH",
                        url: n
                    }, window.location.href);
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }(), S = n(52), O = function(e, t) {
            return new Promise(function(n, r) {
                var o = 0;
                (function i() {
                    o += 1;
                    try {
                        var c = e();
                        if (c) return void n(c);
                        if (o >= t) return void r();
                    } catch (e) {
                        r(e);
                    }
                    setTimeout(i, 50);
                })();
            });
        }, C = function(e) {
            var t = function(e, t) {
                var n = document.createEvent("MouseEvents");
                n.initEvent(t, !0, !0), e.dispatchEvent(n);
            };
            t(e, "mousedown"), t(e, "mouseup"), t(e, "click");
        }, A = n(35), j = n(86), T = n.n(j), M = n(87), x = n(88), P = function(e, t) {
            var n = new KeyboardEvent(t, {
                bubbles: !0,
                cancelable: !0,
                keyCode: 18,
                ctrlKey: !0,
                altKey: !0,
                shiftKey: !1,
                composed: !0,
                returnValue: !1,
                view: window,
                which: 18,
                key: "Alt",
                code: "AltLeft",
                target: document.querySelector(e),
                currentTarget: document,
                location: 1
            });
            document.querySelector(e).dispatchEvent(n);
        }, I = function(e, t, n) {
            var r = T()(e), o = r.altKey, i = r.shiftKey, c = r.ctrlKey, a = r.keyCode, u = Array.isArray(a) ? a[0] : a, l = Object(M.getKey)(u), s = (x.a[u] || {
                code: String.fromCharCode(u)
            }).code, d = new KeyboardEvent(n, {
                bubbles: !0,
                cancelable: !0,
                charCode: String.fromCharCode(u),
                keyCode: u,
                ctrlKey: c,
                altKey: o,
                shiftKey: i,
                composed: !0,
                returnValue: !1,
                view: window,
                which: u,
                key: l,
                code: s,
                target: document.querySelector(t),
                currentTarget: document,
                location: 0
            });
            document.querySelector(t).dispatchEvent(d);
        }, k = function(e, t) {
            return new Promise(function(n) {
                I(e, t, "keydown"), I(e, t, "keypress"), I(e, t, "keyup"), setTimeout(n, 100);
            });
        };
        function R(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function L(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        R(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        R(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var _, q = function(e) {
            return new Promise(function(t, n) {
                var r = function n(r) {
                    r.source === window && r.data && r.data.action === e && "EQUATIO_DOCS_MESSAGING_API_RESPONSE" === r.data.type && (window.removeEventListener("message", n), 
                    t());
                };
                setTimeout(function() {
                    window.removeEventListener("message", r), n(new Error("Keyboard shortcuts handler timed out"));
                }, 5e3), window.addEventListener("message", r), window.postMessage({
                    type: "EQUATIO_DOCS_MESSAGING_API",
                    action: e
                }, "https://docs.google.com");
            });
        }, N = function() {
            var e = L(function*() {
                if (Object(o.c)() === o.a.GoogleSheets) {
                    for (var e = 0; e < 4; e++) I("down", ".goog-menu.goog-menu-vertical[tabindex='0']", "keydown"), 
                    I("down", ".goog-menu.goog-menu-vertical[tabindex='0']", "keyup");
                    I("enter", ".goog-menu.goog-menu-vertical[tabindex='0']", "keydown"), I("enter", ".goog-menu.goog-menu-vertical[tabindex='0']", "keypress");
                } else yield q(A.a.ShowAltTextDialog);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), D = function() {
            return q(A.a.SelectLeft);
        }, F = function() {
            return q(A.a.ArrowRight);
        }, U = function() {
            var e = L(function*() {
                var e = yield Object(a.m)();
                q("mac" === e ? A.a.SelectDocsEquationMac : A.a.SelectDocsEquationWin);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), G = function() {
            return q(A.a.InsertPlaceholderCharacter);
        }, H = function() {
            var e = L(function*() {
                try {
                    yield q(A.a.Delete);
                } catch (e) {}
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), K = function() {
            if (_) return _;
            var e = Array.from(document.querySelectorAll(".goog-menuitem-label")).filter(function(e) {
                var t = e.getAttribute("aria-label");
                return !!t && ((t.endsWith("..., x;") || t.endsWith("... x")) && e.nextElementSibling && e.nextElementSibling.textContent.endsWith("+Y"));
            });
            return e.length || (e = Array.from(document.querySelectorAll(".goog-menuitem-accel")).filter(function(e) {
                if (!e.textContent.startsWith("\u2318+") || !e.textContent.endsWith("+Y")) return !1;
                var t = e.previousElementSibling;
                if (!t) return !1;
                if (!t.matches(".goog-menuitem-label")) return !1;
                var n = e.previousElementSibling.getAttribute("aria-label");
                return n && (n.endsWith(" x") || n.endsWith(" x;"));
            })), _ = e && e.length && e[0].closest(".goog-menuitem");
        };
        function B(e, t) {
            return X(e) || V(e, t) || Q(e, t) || W();
        }
        function W() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Q(e, t) {
            if (e) {
                if ("string" == typeof e) return J(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(e, t) : void 0;
            }
        }
        function J(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function V(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i = [], c = !0, a = !1;
                try {
                    for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); c = !0) ;
                } catch (e) {
                    a = !0, o = e;
                } finally {
                    try {
                        c || null == n.return || n.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return i;
            }
        }
        function X(e) {
            if (Array.isArray(e)) return e;
        }
        function $(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function z(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        $(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        $(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Y = function() {
            var e = z(function*(e, t) {
                var n = B(yield Promise.all([ O(function() {
                    return document.querySelector("#alt-text-dialog-title");
                }, 20), O(function() {
                    return document.querySelector("#alt-text-dialog-description");
                }, 20) ]), 2), r = n[0], o = n[1], i = r.maxLength || 5e3, c = o.maxLength || 5e3;
                r.value = "".concat(e).slice(0, i), t && (o.value = "".concat(t).slice(0, c));
                var a = o.closest(".modal-dialog").querySelector(".goog-buttonset-default.goog-buttonset-action");
                C(a);
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }();
        function Z(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = ee(e)) || t && e && "number" == typeof e.length) {
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
            var i, c = !0, a = !1;
            return {
                s: function() {
                    n = n.call(e);
                },
                n: function() {
                    var e = n.next();
                    return c = e.done, e;
                },
                e: function(e) {
                    a = !0, i = e;
                },
                f: function() {
                    try {
                        c || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function ee(e, t) {
            if (e) {
                if ("string" == typeof e) return te(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? te(e, t) : void 0;
            }
        }
        function te(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function ne(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function re(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        ne(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        ne(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var oe = function() {
            var e = re(function*() {
                var e = Array.from(document.querySelectorAll(".waffle-borderless-embedded-object-overlay-focused .waffle-overflow-menu-material")).find(function(e) {
                    return e.offsetParent;
                });
                e && (C(e), yield O(function() {
                    return document.querySelector(".goog-menu.goog-menu-vertical[tabindex='0'][aria-activedescendant]");
                }, 10));
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), ie = function() {
            var e = re(function*(e, t) {
                var n, r = function() {
                    var n = re(function*(n) {
                        var r = yield O(function() {
                            return Array.from(document.querySelectorAll("img[src='".concat(n.src, "']"))).find(function(e) {
                                return e.offsetParent;
                            });
                        }, 50);
                        C(r), yield oe(), N(), yield Y(e, t);
                    });
                    return function(e) {
                        return n.apply(this, arguments);
                    };
                }(), o = new MutationObserver(function(e) {
                    var t, i, c = Z(e);
                    try {
                        for (c.s(); !(i = c.n()).done; ) {
                            var a = i.value;
                            if (t = Array.from(a.addedNodes).find(function(e) {
                                return "IMG" === e.nodeName;
                            })) break;
                        }
                    } catch (e) {
                        c.e(e);
                    } finally {
                        c.f();
                    }
                    t && (r(t).catch(function(e) {
                        console.error("Setting alt text failed ".concat(e));
                    }), o.disconnect(), clearTimeout(n));
                });
                o.observe(document.querySelector("#waffle-grid-container"), {
                    childList: !0,
                    subtree: !0
                }), n = setTimeout(function() {
                    return o.disconnect();
                }, 15e3);
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }();
        function ce(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function ae(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        ce(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        ce(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var ue = ae(function*() {
            if (Object(o.c)() !== o.a.GoogleDocs) {
                if (Object(o.c)() === o.a.GoogleSheets) return yield oe(), void (yield N());
                var e = K();
                e ? C(e) : N();
            } else yield N();
        });
        function le(e, t) {
            return he(e) || pe(e, t) || de(e, t) || se();
        }
        function se() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function de(e, t) {
            if (e) {
                if ("string" == typeof e) return fe(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fe(e, t) : void 0;
            }
        }
        function fe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function pe(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i = [], c = !0, a = !1;
                try {
                    for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); c = !0) ;
                } catch (e) {
                    a = !0, o = e;
                } finally {
                    try {
                        c || null == n.return || n.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return i;
            }
        }
        function he(e) {
            if (Array.isArray(e)) return e;
        }
        function ve(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function ye(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        ve(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        ve(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var me = ye(function*() {
            yield ue();
            var e = le(yield Promise.all([ O(function() {
                return document.querySelector("#alt-text-dialog-title");
            }, 20), O(function() {
                return document.querySelector("#alt-text-dialog-description");
            }, 20) ]), 2), t = e[0], n = e[1], r = n.closest(".modal-dialog").querySelector(".goog-buttonset-default.goog-buttonset-action");
            return C(r), {
                title: t.value,
                description: n.value
            };
        });
        function ge(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function be(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        ge(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        ge(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var we = function(e) {
            return "<math" === "".concat(e).slice(0, 5).toLowerCase();
        }, Ee = function(e) {
            return we(e) && (e.includes("data-is-equatio") || e.includes("data-latex"));
        }, Se = function() {
            var e = be(function*(e) {
                var t = new DOMParser().parseFromString(e, "application/xml");
                if ("math" !== t.documentElement.tagName.toLowerCase()) throw Error("Invalid MathML document");
                var n = t.documentElement.getAttribute("data-latex");
                if ("string" == typeof n) return n;
                var r = t.documentElement.getAttribute("data-equatio-url");
                return "string" != typeof r ? null : Object(a.f)(r);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
        function Oe(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Ce(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Oe(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Oe(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Ae = function() {
            var e = null, t = "cell", n = Array.from(document.querySelectorAll(".waffle-obj-menu-control-material")).filter(function(e) {
                return e.offsetParent;
            });
            if (n.length) {
                var r = n[0].getBoundingClientRect(), o = r.x, i = r.y, c = r.width, a = r.height, u = document.querySelector("div.focused-overlay-container").getBoundingClientRect(), l = i + a < u.top ? i - u.top : 0, s = o + c > u.width ? o - u.width : 0;
                e = Object(S.a)(o - s, i - l, ".waffle-borderless-embedded-object-container img"), 
                t = "image";
            } else e = document.querySelector("#formula-bar .cell-input");
            return {
                element: e,
                type: t
            };
        }, je = function() {
            var e = document.querySelector("#formula-bar .cell-input");
            if (!e) return "";
            var t = /equatio-api(?:.dev)?\.texthelp\.com\/(?:png|svg)\/(.*?)["?]/.exec(e.textContent);
            return t && t.length > 1 ? decodeURIComponent(t[1]) : "";
        }, Te = function(e) {
            return e && e && (e.includes("googleusercontent.com") || e.includes("filesystem:")) ? Object(a.f)(e) : null;
        }, Me = Ce(function*() {
            var e = Ae();
            if (e) {
                if ("cell" === e.type) return je();
                if (e.element) {
                    try {
                        var t = yield Te(e.element.src);
                        if (t) return t;
                    } catch (e) {}
                    try {
                        var n = (yield me()).description;
                        if (Ee(n)) return Se(n);
                    } catch (e) {}
                }
            }
            return null;
        }), xe = n(107), Pe = function(e, t, n) {
            var r = new DOMParser().parseFromString('<math xmlns="http://www.w3.org/1998/Math/MathML">\n    <mglyph src="" alt="Image"></mglyph>\n</math>', "application/xml");
            r.documentElement.setAttribute("data-is-equatio", "1"), r.documentElement.setAttribute("data-equatio-url", e), 
            r.documentElement.setAttribute("data-equatio-type", t);
            var o = r.querySelector("mglyph");
            o.setAttribute("src", e), o.setAttribute("alt", n);
            var i = new XMLSerializer().serializeToString(r.documentElement);
            return xe.pd.xmlmin(i, !1).trim();
        };
        function Ie(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function ke(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Ie(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Ie(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Re, Le = function() {
            return new Promise(function(e, t) {
                var n = document.getElementById("docs-notice");
                n || t();
                var r = null, o = new MutationObserver(function() {
                    n.textContent.includes("...") || (o.disconnect(), e(), clearTimeout(r));
                });
                o.observe(n, {
                    attributeFilter: [ "data-tooltip" ],
                    attributes: !0
                }), r = setTimeout(function() {
                    o.disconnect(), t();
                }, 5e3);
            });
        }, _e = function() {
            var e = ke(function*(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.width, r = t.height, i = arguments.length > 2 ? arguments[2] : void 0, c = e;
                if (r && c.includes("/png/")) {
                    var u = "height=".concat(5 * Math.ceil(r));
                    c = "".concat(e.split("?")[0], "?").concat(u);
                }
                return Object(o.c)() === o.a.GoogleDocs && (yield G(), yield Le()), !!(yield Object(a.v)(c, n, r, i));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), qe = n(20), Ne = n(34);
        function De(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Fe(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        De(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        De(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Ue = function() {
            var e = Array.from(document.querySelectorAll(".goog-menuitem-label")).filter(function(e) {
                return !!e.getAttribute("aria-label");
            }), t = e.find(function(e) {
                return "Image i" === e.getAttribute("aria-label");
            });
            return t ? [ t ] : e.filter(function(e) {
                var t = e.getAttribute("aria-label");
                return (t.endsWith("... i") || t.endsWith("\u2026 i") || t.endsWith(" i")) && e.closest(".goog-menuitem-content") && e.closest(".goog-menuitem-content").querySelector(".docs-icon-img");
            });
        }, Ge = function() {
            return Re || (Re = new Promise(function(e, t) {
                var n = 0, r = function() {
                    var i = Fe(function*() {
                        var i = Ue();
                        i && i.length || (C(document.getElementById("docs-insert-menu")), i = Ue(), C(document.getElementById("docs-insert-menu")));
                        var c, a = Array.from(document.querySelectorAll(".goog-menuitem-mnemonic-hint")).filter(function(e) {
                            return e.closest(".goog-menuitem-label");
                        }).filter(function(e) {
                            return Ne.f.some(function(t) {
                                return e.closest(".goog-menuitem-label").textContent.startsWith(t);
                            });
                        });
                        if (!(c = "Google Sheets" === Object(o.c)() ? a && a.length && a[0].closest(".apps-menuitem") : i && i.length && i[0].closest(".apps-menuitem"))) {
                            var u = Array.from(document.querySelectorAll(".goog-menu-vertical[class='goog-menu goog-menu-vertical docs-material']"));
                            u.length >= 4 && (c = u[3].querySelector(".goog-menuitem"));
                        }
                        var l = c || document.querySelector("#imageButton");
                        return l ? e(l) : (n += 1) > 20 ? t(Error("timed_out")) : setTimeout(r, 500);
                    });
                    return function() {
                        return i.apply(this, arguments);
                    };
                }();
                r();
            }));
        };
        function He(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Ke(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        He(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        He(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Be, We, Qe = Ke(function*() {
            yield k("Ctrl+Alt+I", "#docs-chrome"), yield k("Alt+I", "#docs-chrome"), yield k("g", "#docs-menubar"), 
            yield k("a", "#docs-menubar");
        }), Je = void 0;
        function Ve(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Xe(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Ve(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Ve(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var $e = function(e, t) {
            Be = t;
        }, ze = function() {
            var e = Xe(function*(e) {
                if (Object(o.c)() === o.a.GoogleSheets) Qe(); else {
                    var t = yield Ge();
                    C(t);
                }
                $e(window.location.href, function() {
                    Object(a.D)(e, We);
                });
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
        function Ye(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Ze(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Ye(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Ye(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        chrome.runtime.onMessage.addListener(function(e) {
            "image_dialog_loaded" === e.action && (We = e.pickerWindow, "function" == typeof Be && (Be.call(Je), 
            Be = null));
        });
        var et = function() {
            var e = Ze(function*(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image", n = "desmos" === t ? "EquatIO Desmos Graph" : "EquatIO Image", r = Pe(e, t, n);
                ie(n, r), yield ze(e);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), tt = function() {
            var e = Ze(function*(e, t) {
                if (e && t) {
                    var n = yield Object(y.a)(e, t);
                    yield et(n, "desmos");
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }(), nt = function() {
            var e = document.querySelector("#docs-screenreader-menu");
            if (!e) throw Error("accessibility_menu_missing");
            return e.offsetHeight > 0;
        }, rt = function() {
            var e = document.querySelector("#docs-aria-speakable");
            if (!e) throw Error("aria_speakable_missing");
            var t = e.textContent.match(/[A-Z]+[0-9]+/);
            if (!t || !t[0]) throw Error("failed_to_find_range");
            return t[0];
        }, ot = function() {
            var e = Ze(function*(e) {
                var t = document.querySelector("#formula-bar .cell-input");
                t.focus(), yield new Promise(function(n) {
                    setTimeout(Ze(function*() {
                        try {
                            t.innerHTML = '=IMAGE("'.concat(e, '")'), yield k("Enter", "#formula-bar .cell-input"), 
                            n();
                        } catch (e) {
                            n();
                        }
                    }));
                });
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), it = function() {
            var e = Ze(function*() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (e !== nt()) {
                    var t = "body";
                    P(t, "keydown"), I("Ctrl+Alt+Z", t, "keydown"), I("Ctrl+Alt+Z", t, "keyup"), P(t, "keyup"), 
                    yield O(function() {
                        return e ? nt() : !nt();
                    }, 20);
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), ct = function() {
            var e = Ze(function*(e, t, n) {
                yield it(!0);
                try {
                    yield k("Right", ".cell-input"), yield k("Left", ".cell-input");
                    var r = rt(), o = document.querySelector(".docs-sheet-active-tab .docs-sheet-tab-name");
                    o && (r = "".concat(o.textContent, "!").concat(r)), yield _e(e, {
                        width: t,
                        height: n
                    }, {
                        range: r
                    });
                } catch (e) {
                    throw yield it(!1).catch(function() {}), e;
                }
                yield it(!1).catch(function() {});
            });
            return function(t, n, r) {
                return e.apply(this, arguments);
            };
        }(), at = function() {
            var e = Ze(function*(e, t, n) {
                if (e) {
                    var r = "https://".concat("equatio-api.texthelp.com", "/svg/").concat(encodeURIComponent(e)), o = Object(qe.b)();
                    if (o !== qe.a.Automatic && o !== qe.a.Speed) try {
                        yield ct(r, t, n);
                    } catch (e) {
                        console.error("Sheets quality insert failed", e), yield ot(r);
                    } else try {
                        yield ot(r);
                    } catch (e) {
                        console.error("Sheets speed insert failed", e), yield ct(r, t, n);
                    }
                }
            });
            return function(t, n, r) {
                return e.apply(this, arguments);
            };
        }();
        function ut(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function lt(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        ut(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        ut(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var st = function() {
            var e = lt(function*(e, t, n, r) {
                e && window.postMessage({
                    action: "EQUATIO_INSERT_MATH_FORMS",
                    latex: e,
                    width: t,
                    height: n,
                    altText: r
                }, window.location.href);
            });
            return function(t, n, r, o) {
                return e.apply(this, arguments);
            };
        }(), dt = function() {
            var e = lt(function*(e) {
                window.postMessage({
                    action: "EQUATIO_INSERT_IMAGE_FORMS",
                    url: e
                }, window.location.href);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), ft = function() {
            var e = lt(function*(e, t) {
                if (e && t) {
                    var n = yield Object(y.a)(e, t);
                    window.postMessage({
                        action: "EQUATIO_INSERT_GRAPH_FORMS",
                        url: n,
                        state: t
                    }, window.location.href);
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }();
        function pt(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function ht(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        pt(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        pt(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var vt = function() {
            var e = document.querySelector("path[stroke='#5da2ff'], path[stroke='#8ab4f8']");
            if (e) {
                if (Object(o.c)() === o.a.GoogleSlides) return e.closest("g[id^='editor-']").querySelector("image");
                var t = e.getAttribute("d"), n = document.querySelector("clipPath path[d='".concat(t, "']"));
                if (n && n.parentNode && n.parentNode.nextSibling && n.parentNode.nextSibling.children && n.parentNode.nextSibling.children.length > 0 && "image" === n.parentNode.nextSibling.children[0].tagName.toLowerCase()) return n.parentNode.nextSibling.children[0];
            }
        }, yt = function(e, t) {
            var n, r = function() {
                var n = ht(function*(n) {
                    n && C(n), yield ue(), yield Y(e, t);
                });
                return function(e) {
                    return n.apply(this, arguments);
                };
            }(), i = new MutationObserver(function(e) {
                var t;
                if (Object(o.c)() === o.a.GoogleSlides) for (var c = 0; c < e.length - 1; c += 1) {
                    var a = e[c].target;
                    if (a && a.id.includes("SLIDES_API") && e[c].addedNodes.length > 0) {
                        t = a;
                        break;
                    }
                }
                r(t).catch(function(e) {
                    console.error("Setting alt text for google app failed. ".concat(e));
                }), i.disconnect(), clearTimeout(n);
            });
            i.observe(document.querySelector("#pages"), {
                childList: !0,
                subtree: !0
            }), n = setTimeout(function() {
                return i && i.disconnect();
            }, 2e4);
        }, mt = n(53), gt = n(90), bt = n(26);
        function wt(e, t) {
            return At(e) || Ct(e, t) || St(e, t) || Et();
        }
        function Et() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function St(e, t) {
            if (e) {
                if ("string" == typeof e) return Ot(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ot(e, t) : void 0;
            }
        }
        function Ot(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function Ct(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i = [], c = !0, a = !1;
                try {
                    for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); c = !0) ;
                } catch (e) {
                    a = !0, o = e;
                } finally {
                    try {
                        c || null == n.return || n.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return i;
            }
        }
        function At(e) {
            if (Array.isArray(e)) return e;
        }
        var jt, Tt = document.createElement("iframe");
        Tt.style.display = "none", Tt.id = "my-frame", document.body.appendChild(Tt);
        var Mt = !1, xt = [ [ /\\uppi\b/g, "\\pi" ], [ /\\Updelta\b/g, "\\delta" ], [ /\\nequiv\b/g, "\\cancel{\\equiv}" ], [ /\\napprox\b/g, "\\cancel{\\approx}" ] ], Pt = function(e) {
            return xt.reduce(function(e, t) {
                var n = wt(t, 2), r = n[0], o = n[1];
                return e.replace(r, o);
            }, e);
        }, It = function(e) {
            return new Promise(function(t, n) {
                Mt || (Mt = !0, Object(bt.a)(function(e) {
                    e.type === i.Events.Toolbar.ExtractMathCancelled && (Tt.src = "about:blank", window.removeEventListener("message", jt), 
                    jt = null);
                })), i.Actions.Toolbar.setCanCancel(!0), jt && window.removeEventListener("message", jt), 
                jt = function(e) {
                    if ("null" === e.origin && e.data && "EQUATIO_MATHML_RESULT" === e.data.type) {
                        i.Actions.Toolbar.setCanCancel(!1);
                        var r = e.data, o = r.latex, c = r.error;
                        c ? n(c) : t(Pt(o));
                    }
                }, Tt.src = "".concat("chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc", "/mmlWorker/index.html?mathml=").concat(encodeURIComponent(e)), 
                window.addEventListener("message", jt);
            });
        };
        function kt(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Rt(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        kt(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        kt(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Lt = Rt(function*() {
            var e;
            if (e = Object(mt.c)() ? Object(mt.b)() : vt()) {
                C(e);
                try {
                    var t = (yield me()).description;
                    if (Ee(t)) return Se(t);
                    if (we(t)) {
                        Object(a.I)("Edit Math - MathML");
                        try {
                            return yield It(t);
                        } catch (e) {}
                    }
                } catch (e) {}
                var n = e.getAttribute("href");
                if (n && (n.includes("googleusercontent.com") || n.includes("filesystem:"))) {
                    var r;
                    try {
                        r = yield Object(a.f)(n);
                    } catch (e) {}
                    if (r) return r;
                    if ([ o.a.GoogleSlides, o.a.GoogleDrawings ].includes(Object(o.c)())) {
                        var i = yield Object(gt.b)(), c = e.closest("g[id^='editor-']");
                        if (c) {
                            var u = c.getAttribute("id").replace(/^editor-/, "");
                            if (i[u]) return Object(a.f)(i[u]);
                        }
                    }
                }
            }
            return Promise.reject(Error("no_text_found"));
        });
        function _t(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function qt(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        _t(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        _t(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Nt, Dt = function() {
            var e = document.querySelector(".kix-cursor-caret");
            if (e) {
                var t = e.getBoundingClientRect(), n = t.x, r = t.y, o = t.width, i = t.height;
                return Object(S.a)(n + o, r + i / 2, "span.typeset");
            }
        }, Ft = function() {
            var e = document.querySelector(".kix-cursor-caret"), t = e ? e.parentElement : null;
            return t && t.style.opacity > 0 ? e : null;
        }, Ut = function() {
            var e = Ft();
            if (e) {
                var t = e.getBoundingClientRect(), n = t.x, r = t.y, o = t.width, i = t.height, c = Object(S.a)(n + o, r + i / 2, ".kix-embeddedobject-image");
                if (c) return c;
                var a = Object(S.a)(n + o, r + i / 2, ".kix-embeddedobject-view");
                if (a) return a.querySelector(".kix-embeddedobject-image");
            }
            var u = document.querySelector(".docs-squarehandleselectionbox-border");
            if (u) {
                var l = u.getBoundingClientRect(), s = l.x, d = l.y, f = l.width, p = l.height;
                return Object(S.a)(s + f / 2, d + p / 2, ".kix-embeddedobject-view");
            }
        }, Gt = function() {
            var e = qt(function*(e, t) {
                yield D(), yield ue(), yield Y(e, t), setTimeout(function() {
                    F().catch(function(e) {});
                }, 300);
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }();
        function Ht(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Kt(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Ht(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Ht(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Bt = function() {
            var e = Kt(function*(e) {
                var t = !1;
                Nt ? Object(bt.c)(Nt) : (Nt = function(e) {
                    e.type === i.Events.Toolbar.ExtractMathCancelled && (t = !0);
                }, Object(bt.a)(Nt)), i.Actions.Toolbar.setCanCancel(!0);
                var n = document.querySelector(".kix-cursor"), r = n.style.display.display;
                n.style.display = "none";
                var o = function() {
                    i.Actions.Toolbar.setCanCancel(!1), r ? n.style.display = r : n.style.removeProperty("display");
                };
                return new Promise(function(n, r) {
                    setTimeout(Kt(function*() {
                        var i;
                        try {
                            var c = e.getBoundingClientRect(), u = c.x, l = c.y, s = c.width, d = c.height, f = yield Object(a.a)();
                            if (t) return o(), r(Error("no_math_found"));
                            if (i = yield Object(a.H)(f, u * window.devicePixelRatio, l * window.devicePixelRatio, s * window.devicePixelRatio, d * window.devicePixelRatio), 
                            t) return o(), r(Error("no_math_found"));
                        } catch (e) {
                            return o(), r(Error("no_math_found"));
                        }
                        return o(), n(i);
                    }));
                });
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), Wt = n(93);
        function Qt(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Jt(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Qt(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Qt(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Vt = function() {
            var e = document.querySelector(".docs-linkbubble-bubble a");
            return e && e.offsetParent && (e.href.indexOf("api.gmath.guru") >= 0 || e.href.indexOf("equatioapi.texthelp.com") >= 0);
        }, Xt = function() {
            var e = document.querySelector(".docs-linkbubble-bubble a").href.replace("http://api.gmath.guru/cgi-bin/gmath?%5Cdpi%7B480%7D", "").replace("http://api.gmath.guru/cgi-bin/gmath?", "").replace("http://equatioapi.texthelp.com/cgi-bin/gmath?%5Cdpi%7B480%7D", "").replace("http://equatioapi.texthelp.com/cgi-bin/gmath?", "");
            return decodeURIComponent(e);
        }, $t = function() {
            var e = Jt(function*(e) {
                if (Ee(e)) {
                    Object(a.I)("Edit Math - EquatIO MathML");
                    try {
                        return yield Se(e);
                    } catch (e) {}
                } else if (we(e)) {
                    Object(a.I)("Edit Math - MathML");
                    try {
                        return yield It(e);
                    } catch (e) {}
                }
                return null;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), zt = function() {
            var e = Jt(function*(e) {
                try {
                    var t = (yield Object(a.f)(e)) || (yield Object(Wt.a)(e));
                    if (t) return Object(a.I)("Edit Math - EquatIO LaTeX"), t;
                } catch (e) {}
                return null;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), Yt = function() {
            var e = Jt(function*() {
                var e, t, n = Object(mt.c)();
                if (e = n ? Object(mt.a)() : Dt()) try {
                    var r = yield Bt(e);
                    return U(), r;
                } catch (e) {
                    return Promise.reject(Error("no_math_found"));
                }
                if (!(t = n ? Object(mt.b)() : Ut())) return Promise.reject(Error("no_math_found"));
                var o = t.querySelector("desc");
                if (o) {
                    var i = o.textContent, c = yield $t(i);
                    if (c) return c;
                }
                if (t) {
                    var u = t.querySelector("image").getAttribute("xlink:href"), l = yield zt(u);
                    if (l) return l;
                }
                return Object(a.I)("Edit Math - No Math Detected"), Promise.reject(Error("no_math_found"));
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), Zt = function() {
            var e = Jt(function*() {
                var e = document.createElement("style");
                e.id = "eqTempStyle", e.type = "text/css", e.textContent = ".modal-dialog-bg, .modal-dialog.docs-dialog { display: none }", 
                document.head.appendChild(e);
                try {
                    var t = (yield me()).description;
                    return setTimeout(function() {
                        return document.querySelector("#eqTempStyle").remove();
                    }, 300), t;
                } catch (e) {}
                var n = document.querySelector("#eqTempStyle");
                return n && n.remove(), null;
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), en = function(e, t, n) {
            if (!n) return null;
            for (var r = 0; r < n.length; r++) {
                var o = n[r], i = o.getBoundingClientRect(), c = i.x, a = i.y, u = i.width, l = i.height;
                if (e > c && e < c + u && t > a && t < a + l) return o;
            }
            return null;
        }, tn = function() {
            var e = Jt(function*() {
                var e = yield Zt();
                if (e) {
                    var t = e.match(/<[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*math[\s\S]*<\/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*math>/gi);
                    if (t && t.length > 0) {
                        var n = yield $t(t[0]);
                        if (n) return n;
                    }
                }
                try {
                    var r = document.querySelector(".docs-squarehandleselectionbox-border").getBoundingClientRect(), o = r.x, i = r.y, c = r.width, u = r.height, l = document.querySelectorAll("svg > g > image"), s = en(o + c / 2, i + u / 2, l);
                    if (s) {
                        var d = yield zt(s.href.baseVal);
                        if (d) return d;
                    }
                } catch (e) {}
                return Object(a.I)("Edit Math - No Math Detected"), Promise.reject(Error("no_math_found"));
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), nn = function() {
            return document.querySelector(".kix-canvas-tile-content") ? tn() : Vt() ? Xt() : Yt();
        }, rn = function() {
            return Object(o.b)() ? Lt() : nn();
        }, on = function(e, t) {
            var n = new DOMParser().parseFromString(t, "application/xml");
            if ("math" !== n.documentElement.tagName.toLowerCase()) throw Error("Invalid MathML document");
            n.documentElement.setAttribute("data-is-equatio", "1"), n.documentElement.setAttribute("data-latex", e);
            var r = new XMLSerializer().serializeToString(n.documentElement);
            return xe.pd.xmlmin(r, !1).trim();
        }, cn = n(75);
        function an(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function un(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        an(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        an(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var ln = function() {
            var e = un(function*() {
                try {
                    yield O(function() {
                        return document.querySelector(".picker-urlview-inner-input");
                    }, 200);
                } catch (e) {
                    throw new Error("Couldn't find image dialog");
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), sn = function(e) {
            var t = function(e, t) {
                var n = document.createEvent("MouseEvents");
                n.initEvent(t, !0, !0), e.dispatchEvent(n);
            };
            t(e, "mouseover"), t(e, "mouseenter");
        }, dn = function() {
            var e = un(function*() {
                var e = function() {
                    var e = Array.from(document.querySelectorAll(".goog-menuitem.apps-menuitem:not([aria-disabled]) .goog-menuitem-label")).filter(function(e) {
                        return Ne.a.some(function(t) {
                            return e.textContent && e.textContent.includes(t);
                        });
                    });
                    return e.length < 1 ? null : e[0] && e[0].closest(".goog-menuitem");
                };
                try {
                    C(document.getElementById("docs-insert-menu"));
                    var t = yield Ge();
                    sn(t);
                    var n = yield O(e, 30);
                    C(n);
                } catch (e) {
                    throw new Error("Insert Image by URL Failed: ".concat(e));
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), fn = function() {
            var e = un(function*(e) {
                var t = document.querySelector(".picker-urlview-inner-input"), n = document.querySelector(".picker-urlview-insertbutton"), r = document.querySelector(".picker-urlview-cancelbutton"), o = document.querySelector(".picker-urlview-error-container");
                t.value = e;
                var i = new Event("paste", {
                    bubbles: !0,
                    cancelable: !1,
                    shiftKey: !1
                }), c = function() {
                    o && "none" !== o.style.display && o.textContent && (o.textContent = "");
                };
                try {
                    c(), document.querySelector(".picker-urlview-inner-input").dispatchEvent(i), yield O(function() {
                        if (o && "none" !== o.style.display && o.textContent) throw new Error("Invalid URL ".concat(e, ". ").concat(o.textContent));
                        return !n.disabled;
                    }, 300), C(n);
                } catch (e) {
                    throw r && r.click(), new Error("Insert button never enabled. ".concat(e));
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), pn = function() {
            var e = un(function*(e) {
                document.querySelector(".picker-urlview-inner-input") || (yield dn()), yield ln(), 
                yield fn(e);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
        function hn(e) {
            return gn(e) || mn(e) || yn(e) || vn();
        }
        function vn() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function yn(e, t) {
            if (e) {
                if ("string" == typeof e) return bn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bn(e, t) : void 0;
            }
        }
        function mn(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }
        function gn(e) {
            if (Array.isArray(e)) return bn(e);
        }
        function bn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function wn(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function En(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        wn(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        wn(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Sn = function() {
            var e = En(function*(e) {
                if (!(yield _e.apply(void 0, hn(e)))) throw new Error("no_result");
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), On = En(function*() {
            var e = Object(o.c)(), t = Object(qe.b)();
            e !== o.a.GoogleDocs || Ft() || (yield H());
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            if (Object(cn.a)(e)) if (t !== qe.a.Automatic && t !== qe.a.Speed) try {
                yield Sn(r);
            } catch (e) {
                console.error("Quality insert failed", e), yield pn.apply(void 0, r);
            } else try {
                yield pn.apply(void 0, r);
            } catch (e) {
                console.error("Speed insert failed", e), yield Sn(r);
            } else yield pn.apply(void 0, r);
        });
        function Cn(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function An(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Cn(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Cn(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var jn = function() {
            var e = An(function*(e, t, n, r) {
                var i = Object(o.b)();
                if (i) try {
                    yt(e, t);
                } catch (e) {
                    console.error("Error setting alt text", e);
                }
                if (yield On(n, r, e), !i) try {
                    yield Gt(e, t);
                } catch (e) {
                    console.error("Error setting alt text - docs");
                }
            });
            return function(t, n, r, o) {
                return e.apply(this, arguments);
            };
        }(), Tn = function(e, t, n, r) {
            return n || r ? n && r ? {
                width: n,
                height: r
            } : n ? {
                width: n,
                height: t * (n / e)
            } : {
                width: e * (r / t),
                height: r
            } : {
                width: e,
                height: t
            };
        }, Mn = function() {
            var e = An(function*(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image", n = "desmos" === t ? "EquatIO Desmos Graph" : "EquatIO Image", r = Pe(e, t, n);
                yield jn(n, r, e);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), xn = function() {
            var e = An(function*(e, t) {
                if (e && t) {
                    var n = yield Object(y.a)(e, t);
                    yield Mn(n, "desmos");
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }(), Pn = function() {
            var e = An(function*(e, t, n, r, i) {
                if (e) {
                    var c, a = {
                        width: t,
                        height: n
                    };
                    if (Object(cn.a)(Object(o.c)())) {
                        var u = n;
                        t < 20 ? (a = Tn(t, n, 20), u = Math.ceil(a.height)) : n < 20 && (a = Tn(t, n, void 0, 20), 
                        u = Math.ceil(a.height)), c = "height=".concat(u);
                    } else c = v(t, n);
                    var l = "https://".concat("equatio-api.texthelp.com", "/png/").concat(encodeURIComponent(e), "?").concat(c), s = on(e, i);
                    yield jn(r, s, l, a);
                }
            });
            return function(t, n, r, o, i) {
                return e.apply(this, arguments);
            };
        }();
        function In(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function kn(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        In(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        In(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Rn = function() {
            var e = kn(function*(e) {
                if (!e) throw new Error("no_math_found");
                var t = e.match(/<[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*math[\s\S]*<\/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*math>/gi), n = t && t.length ? t[0] : null;
                if (!n) throw new Error("no_math_found");
                if (Ee(n)) try {
                    return yield Se(n);
                } catch (e) {} else if (we(n)) try {
                    return yield It(n);
                } catch (e) {}
                throw new Error("no_math_found");
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
        function Ln(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function _n(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Ln(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Ln(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        function qn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function Nn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qn(Object(n), !0).forEach(function(t) {
                    Dn(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qn(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function Dn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var Fn = function(e) {
            var t = {
                bubbles: !0,
                currentTarget: document,
                defaultPrevented: !1,
                srcElement: e,
                target: e,
                timeStamp: Date.now(),
                view: window,
                charCode: 0,
                keyCode: 27,
                key: "Escape",
                code: "Escape",
                which: 27
            };
            e.dispatchEvent(new KeyboardEvent("keydown", Nn({}, t, {
                type: "keydown"
            }))), e.dispatchEvent(new KeyboardEvent("keyup", Nn({}, t, {
                type: "keyup"
            })));
        }, Un = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = {
                bubbles: !0,
                currentTarget: document,
                defaultPrevented: !1,
                srcElement: e,
                target: e,
                timeStamp: Date.now(),
                view: window,
                charCode: 0,
                keyCode: t ? 37 : 39,
                key: t ? "ArrowLeft" : "ArrowRight",
                code: t ? 37 : 39,
                which: t ? 37 : 39,
                shiftKey: t
            };
            e.dispatchEvent(new KeyboardEvent("keydown", Nn({}, n, {
                type: "keydown"
            }))), e.dispatchEvent(new KeyboardEvent("keyup", Nn({}, n, {
                type: "keyup"
            })));
        }, Gn = function(e) {
            var t = e.getBoundingClientRect(), n = t.x, r = t.y, o = {
                altKey: !1,
                bubbles: !0,
                button: 0,
                buttons: 0,
                cancelBubble: !1,
                cancelable: !0,
                clientX: n + t.width / 2,
                clientY: r + t.height / 2,
                composed: !0,
                ctrlKey: !1,
                defaultPrevented: !1,
                detail: 1,
                eventPhase: 3,
                fromElement: null,
                isTrusted: !0,
                metaKey: !1,
                relatedTarget: null,
                returnValue: !0,
                shiftKey: !1,
                timeStamp: Date.now(),
                type: "click",
                view: window,
                which: 1
            };
            e.dispatchEvent(new MouseEvent("mousedown", Nn({}, o, {
                type: "mousedown"
            }))), e.dispatchEvent(new MouseEvent("mouseup", Nn({}, o, {
                type: "mouseup"
            }))), e.dispatchEvent(new MouseEvent("click", o));
        }, Hn = function(e, t) {
            var n = new InputEvent("input", {
                bubbles: !0,
                cancelBubble: !1,
                cancelable: !1,
                composed: !0,
                currentTarget: e,
                data: t,
                dataTransfer: null,
                defaultPrevented: !1,
                detail: 0,
                eventPhase: 3,
                inputType: "insertText",
                isComposing: !1,
                isTrusted: !0
            });
            e.dispatchEvent(n);
        }, Kn = function() {
            var e = _n(function*(e, t, n) {
                Gn(n);
                var r = !!document.querySelector("#Title");
                r || ((yield O(function() {
                    return document.querySelector("#Picture");
                }, 100)).click(), (yield O(function() {
                    return document.querySelector("#EditPictureAltText");
                }, 100)).click());
                var o = yield O(function() {
                    return document.querySelector("#Title");
                }, 100);
                o.value = e, Hn(o, e);
                var i = document.querySelector("#Description");
                if (i.value = t, Hn(i, t), !r) {
                    var c = document.querySelector("#TaskPaneCloseBtnFormatPictureTaskPane");
                    c ? c.click() : Fn(i);
                }
                Un(n);
            });
            return function(t, n, r) {
                return e.apply(this, arguments);
            };
        }(), Bn = function() {
            var e = _n(function*() {
                document.querySelector("#Home").click();
                try {
                    var e = yield O(function() {
                        return document.querySelector("#PasteStandalone");
                    }, 10);
                    if (e) return void e.click();
                } catch (e) {}
                (yield O(function() {
                    return document.querySelector("#Clipboard");
                }, 100)).click();
                var t = yield O(function() {
                    return document.querySelector("#Ribbon-ClipboardDropdown");
                }, 100), n = t.querySelector("button[name=Paste]");
                n ? n.click() : t.querySelectorAll("button")[2].click();
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), Wn = function(e) {
            var t = e.tts, n = e.mathML;
            return new Promise(function(e, r) {
                var o = document.querySelector("#PageContentContainer");
                if (o) {
                    var i = new MutationObserver(function(o) {
                        for (var c = 0; c < o.length; c += 1) if (o[c].addedNodes.length > 0 && o[c].target.className.includes("WACImgSelection") && o[c].target.parentElement) {
                            var a = o[c].target.parentElement.querySelector(".WACImage");
                            i.disconnect(), Kn(t, n, a).then(e).catch(function(e) {
                                console.error("EquatIO Setting Alt Text Failed", e), r(e);
                            });
                            break;
                        }
                    });
                    i.observe(o, {
                        childList: !0,
                        subtree: !0
                    }), Bn().then(function() {
                        setTimeout(function() {
                            i.disconnect(), r(new Error("Observer timed out"));
                        }, 3e4);
                    }).catch(function(e) {
                        i.disconnect(), console.error("Error pasting into word!", e), r(e);
                    });
                } else r(new Error("PageContentContainer not found"));
            });
        }, Qn = function() {
            var e = document.querySelector(".OnlyImageSelected > img");
            return e && e.alt ? e.alt : null;
        }, Jn = function(e) {
            return Wn(e);
        }, Vn = function() {
            return Rn(Qn());
        }, Xn = n(15);
        function $n(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function zn(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        $n(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        $n(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Yn, Zn = function() {
            return new Promise(function(e, t) {
                var n = function t(n) {
                    n.source === window && n.data && "EQUATIO_CHECK_OFFICE_EXTENSION_RESPONSE" === n.data.type && (window.removeEventListener("message", t), 
                    e(n.data.installed));
                };
                setTimeout(function() {
                    window.removeEventListener("message", n), t();
                }, 5e3), window.addEventListener("message", n), window.postMessage({
                    type: "EQUATIO_CHECK_OFFICE_EXTENSION"
                }, window.origin);
            });
        }, er = function() {
            return Object(Xn.d)(Object(Xn.c)(window.location.hostname));
        }, tr = function() {
            var e = zn(function*(e) {
                try {
                    yield Object(a.B)(e), (yield Object(a.g)(!1)) && (yield Object(a.R)("clipboard", {
                        url: e
                    })), i.Actions.Toolbar.setCopyMathStatus(i.CopyMathStatus.Success);
                } catch (e) {
                    console.error("Failed to copy to clipboard", e), i.Actions.Toolbar.setCopyMathStatus(i.CopyMathStatus.Failure);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), nr = function() {
            var e = zn(function*() {
                return Yn || (Yn = yield Zn()), !!Yn || (Object(a.R)("install"), !1);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }(), rr = function() {
            var e = zn(function*(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image";
                if (er()) {
                    if (yield nr()) {
                        var n = "desmos" === t ? "EquatIO Desmos Graph" : "EquatIO Image", r = Pe(e, t, n);
                        yield Object(a.B)(e), yield Jn({
                            tts: n,
                            mathML: r
                        });
                    }
                } else tr(e);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), or = function() {
            var e = zn(function*(e, t) {
                if ((yield nr()) && e && t) {
                    var n = yield Object(y.a)(e, t);
                    yield rr(n, "desmos");
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }(), ir = function() {
            var e = zn(function*(e, t, n, r, o) {
                if (e) {
                    var c = (yield i.MathRendering.getSvg(e)).html, u = yield i.MathRendering.getPng(c);
                    if (er()) {
                        if (yield nr()) {
                            yield Object(a.B)(u);
                            var l = on(e, o);
                            yield Jn({
                                tts: r,
                                mathML: l
                            });
                        }
                    } else yield tr(u);
                }
            });
            return function(t, n, r, o, i) {
                return e.apply(this, arguments);
            };
        }();
        function cr(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function ar(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function ur(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        ar(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        ar(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var lr = function() {
            var e = ur(function*(e) {
                try {
                    var t = yield (yield fetch(e)).blob();
                    yield navigator.clipboard.write([ new ClipboardItem(cr({}, t.type, t)) ]), (yield Object(a.g)(!1)) && (yield Object(a.R)("clipboard", {
                        url: e
                    })), i.Actions.Toolbar.setCopyMathStatus(i.CopyMathStatus.Success);
                } catch (e) {
                    console.error("Failed to copy to clipboard", e), i.Actions.Toolbar.setCopyMathStatus(i.CopyMathStatus.Failure);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), sr = function() {
            var e = ur(function*(e) {
                if (e) {
                    var t = (yield i.MathRendering.getSvg(e)).html, n = yield i.MathRendering.getPng(t);
                    yield lr(n);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), dr = function() {
            var e = ur(function*(e) {
                yield lr(e);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), fr = function() {
            var e = ur(function*(e, t) {});
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }(), pr = n(14), hr = n(0), vr = n(76);
        function yr(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function mr(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        yr(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        yr(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var gr = function(e) {
            return new Promise(function(t, n) {
                var r = function e(r) {
                    var o = r.action, i = r.command, c = r.value, a = r.fromEditor;
                    o === hr.a.HtmlEditorApiAction && a && i === pr.a.Insert && (chrome.runtime.onMessage.removeListener(e), 
                    c ? t() : n(new Error("HTML_EDITOR_API_RESPONSE_FAILED")));
                };
                setTimeout(function() {
                    chrome.runtime.onMessage.removeListener(r), n(new Error("HTML_EDITOR_API_NO_RESPONSE"));
                }, 5e3), chrome.runtime.onMessage.addListener(r);
                var o = Object(vr.b)();
                Object(a.K)(pr.a.Insert, e, !1, o);
            });
        }, br = function() {
            var e = mr(function*(e, t, n, r) {
                if (e) {
                    var o = document.createElement("img");
                    o.src = "https://".concat("equatio-api.texthelp.com", "/svg/").concat(encodeURIComponent(e)), 
                    o.style.height = "".concat(Math.round(n), "px"), o.alt = r;
                    var i = o.outerHTML;
                    yield gr(i);
                }
            });
            return function(t, n, r, o) {
                return e.apply(this, arguments);
            };
        }(), wr = function() {
            var e = mr(function*(e) {
                var t = "desmos" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image") ? "EquatIO Desmos Graph" : "EquatIO Image", n = '<img src="'.concat(e, '" alt="').concat(t, '" />');
                yield gr(n);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), Er = function() {
            var e = mr(function*(e, t) {
                if (e && t) {
                    var n = yield Object(y.a)(e, t);
                    yield wr(n, "desmos");
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        }(), Sr = n(44);
        function Or(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function Cr(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        Or(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        Or(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var Ar, jr, Tr, Mr, xr = function() {
            return new Promise(function(e, t) {
                var n = function n(r) {
                    var o = r.action, i = r.command, c = r.value, a = r.fromEditor;
                    o === hr.a.HtmlEditorApiAction && a && i === pr.a.Extract && (chrome.runtime.onMessage.removeListener(n), 
                    c ? e(c) : t(new Error("HTML_EDITOR_API_RESPONSE_FAILED")));
                };
                setTimeout(function() {
                    chrome.runtime.onMessage.removeListener(n), t(new Error("HTML_EDITOR_API_NO_RESPONSE"));
                }, 5e3), chrome.runtime.onMessage.addListener(n);
                var r = Object(vr.b)();
                Object(a.K)(pr.a.Extract, null, !1, r);
            });
        }, Pr = Cr(function*() {
            var e = yield xr();
            if (!e) return null;
            Ar || (Ar = new DOMParser());
            var t = Ar.parseFromString(e, "text/html").querySelector("img");
            return t && t.src ? Object(a.f)(t.src) : null;
        });
        n.d(t, "a", function() {
            return kr;
        }), n.d(t, "b", function() {
            return Rr;
        }), n.d(t, "c", function() {
            return Lr;
        });
        var Ir = function() {
            var e = window.location, t = e.host, n = e.hostname;
            if ("docs.google.com" === t) switch (Object(o.c)()) {
              case "Google Forms":
                jr = null, Tr = {
                    graph: ft,
                    math: st,
                    image: dt
                };
                break;

              case "Google Sheets":
                jr = Me, Tr = {
                    graph: tt,
                    math: at,
                    image: et
                };
                break;

              default:
                jr = rn, Tr = {
                    graph: xn,
                    math: Pn,
                    image: Mn
                };
            } else Object(Xn.b)(n) ? (jr = Vn, Tr = {
                graph: or,
                math: ir,
                image: rr
            }) : Object(Sr.a)() ? (jr = f, Tr = {
                graph: E,
                math: b,
                image: w
            }, h()) : Mr ? (jr = Pr, Tr = {
                graph: Er,
                math: br,
                image: wr,
                isEditorApi: !0
            }) : (jr = null, Tr = {
                graph: fr,
                math: sr,
                image: dr
            });
        };
        Ir(), Object(r.a)();
        var kr = function() {
            return jr;
        }, Rr = function() {
            return Tr;
        }, Lr = function(e) {
            e !== Mr && (e ? (Tr = {
                graph: Er,
                math: br,
                image: wr,
                isEditorApi: !0
            }, jr = Pr, Mr = !0) : (Mr = !1, Ir()));
        };
    },
    61: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c;
        });
        var r = n(44), o = n(6), i = n(15), c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location, t = e.hostname, n = e.href;
            return !Object(o.c)(e) && (!Object(r.a)(n) && !Object(i.b)(t));
        };
    },
    67: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return y;
        });
        var r = n(3), o = n(2), i = n(73), c = n(20);
        function a(e, t) {
            return f(e) || d(e, t) || l(e, t) || u();
        }
        function u() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
            }
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function d(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i = [], c = !0, a = !1;
                try {
                    for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); c = !0) ;
                } catch (e) {
                    a = !0, o = e;
                } finally {
                    try {
                        c || null == n.return || n.return();
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
        function p(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function h(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        p(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        p(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var v = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enUS";
            switch (e) {
              case "en-GB":
                return "enGB";

              case "en-US":
                return "enUS";

              default:
                return e;
            }
        }, y = function() {
            var e = h(function*() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                try {
                    !(yield Object(o.d)()) && e && (yield Object(o.z)());
                } catch (e) {}
                var t = a(yield Promise.all([ Object(o.n)(), Object(i.b)() ]), 2), n = t[0], u = t[1], l = n.options || {}, s = l.fontSize, d = void 0 === s ? "regular" : s, f = l.locale, p = void 0 === f ? "enUS" : f, h = l.showTips, y = void 0 === h || h, m = l.speechEngine, g = void 0 === m ? "auto" : m, b = l.speechSpeed, w = void 0 === b ? 40 : b, E = l.autoplaySR, S = void 0 === E || E, O = l.math, C = void 0 === O || O, A = l.chemistry, j = void 0 === A || A, T = l.formulas, M = void 0 === T || T, x = l.disabledFeatures, P = void 0 === x ? {} : x;
                Object(c.g)(S), Object(c.h)(w);
                var I = n.profile_info, k = I.email, R = I.type, L = void 0 === R ? "student" : R, _ = I.provider, q = void 0 === _ ? "google" : _;
                r.Actions.Options.loadSettings({
                    fontSize: d,
                    showTips: y,
                    math: C,
                    chemistry: j,
                    formulas: M,
                    speechEngine: g,
                    locale: v(p),
                    disabledFeatures: Object.keys(P).filter(function(e) {
                        return !0 === P[e];
                    })
                }, {
                    type: L,
                    license: u,
                    displayName: k,
                    provider: q
                });
                var N = n.favourites;
                if (N && N.items) {
                    var D = Object.values(N.items);
                    r.Actions.Favourites.addFavourites(D);
                }
                var F = (n.chromeOptions || {}).insertType;
                Object(c.f)(F);
            });
            return function() {
                return e.apply(this, arguments);
            };
        }();
        t.a = function(e) {
            return function(t) {
                return function(n) {
                    var o = e.getState();
                    switch (n.type) {
                      case r.Events.PopupMenu.Shown:
                        var i = o.drawer.mode;
                        i && r.Actions.Toolbar.setMode(i);
                        break;

                      case r.Events.PopupMenu.ShowOptionsDialog:
                        r.Actions.Academy.setHidden(), r.Actions.PopupMenu.show(!1), h(function*() {
                            yield y();
                        })();
                    }
                    return t(n);
                };
            };
        };
    },
    68: function(e, t, n) {
        "use strict";
        var r = n(44), o = n(6), i = n(15), c = function() {
            var e = window.location.hostname;
            return Object(o.c)() ? "".concat(Object(o.c)()).concat(Object(o.d)() ? " - Response" : "") : Object(r.a)() ? "PDF Reader" : Object(i.b)(e) ? "Office" : "Third Party Website";
        };
        t.a = c;
    },
    73: function(e, t, n) {
        "use strict";
        var r = n(2);
        n.d(t, "b", function() {
            return r.j;
        }), n.d(t, "a", function() {
            return r.e;
        });
    },
    75: function(e, t, n) {
        "use strict";
        var r = n(6);
        t.a = function(e) {
            return [ r.a.GoogleDocs, r.a.GoogleSlides, r.a.GoogleSheets ].includes(e);
        };
    },
    76: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return f;
        });
        var r = n(3), o = n(14), i = n(0), c = n(2), a = n(55);
        function u(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function l(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        u(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        u(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var s = !1, d = null, f = function() {
            return d;
        }, p = function(e, t) {
            if (e && s) return d = t, Object(a.c)(!0), void r.Actions.Toolbar.hideActionButtons(!1);
            s && t !== d && null !== t || (d = null, Object(a.c)(!1), r.Actions.Toolbar.hideActionButtons(!0));
        }, h = function(e) {
            var t = e.action, n = e.fromToolbar;
            t !== i.a.InjectHtmlEditorApi || n || Object(c.t)(!0);
        }, v = function(e) {
            var t = e.action, n = e.command, r = e.value, c = e.fromEditor, a = e.frameId;
            t === i.a.HtmlEditorApiAction && c && n === o.a.SetEditor && p(r, a);
        }, y = function() {
            var e = l(function*(e) {
                if (e && "EQUATIO_CHANGE_USER" === e.action) {
                    var t = yield Object(c.j)();
                    s = t && t.daysleft > 0, p(!1, null);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
        t.a = function() {
            Object(c.j)().then(function(e) {
                s = e && e.daysleft > 0;
            }), chrome.runtime.onMessage.addListener(h), chrome.runtime.onMessage.addListener(v), 
            chrome.runtime.onMessage.addListener(y), Object(c.t)(!0);
        };
    },
    78: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return h;
        }), n.d(t, "a", function() {
            return v;
        });
        var r = n(2);
        function o(e, t) {
            return l(e) || u(e, t) || c(e, t) || i();
        }
        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function c(e, t) {
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
        function u(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i = [], c = !0, a = !1;
                try {
                    for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); c = !0) ;
                } catch (e) {
                    a = !0, o = e;
                } finally {
                    try {
                        c || null == n.return || n.return();
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
        function s(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function d(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        s(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        s(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
                });
            };
        }
        var f, p = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enUS";
            switch (e) {
              case "en-GB":
                return "enGB";

              case "en-US":
                return "enUS";

              default:
                return e;
            }
        }, h = function(e) {
            f && (f.locale = p(e));
        }, v = function() {
            var e = d(function*() {
                var e, t;
                if (f) e = yield Object(r.n)(), t = yield Object(r.j)(); else {
                    yield Object(r.d)();
                    var n = o(yield Promise.all([ Object(r.n)(), Object(r.j)() ]), 2);
                    e = n[0], t = n[1];
                }
                var i = e.options;
                return f = {
                    locale: p(i.locale || "enUS"),
                    speechEngine: i.speechEngine || "auto",
                    license: t,
                    autoplaySR: i.autoplaySR,
                    speechSpeed: i.speechSpeed
                };
            });
            return function() {
                return e.apply(this, arguments);
            };
        }();
    },
    86: function(e, t, n) {
        "use strict";
        var r = n(132);
        function o(e) {
            var t, n = {};
            n.keyCode = [], n.altKey = !1, n.ctrlKey = !1, n.shiftKey = !1;
            for (var o = 0, i = e.length; o < i; o++) 18 === (t = r(e[o])) && (n.altKey = !0), 
            17 === t && (n.ctrlKey = !0), 16 === t && (n.shiftKey = !0), (t < 16 || t > 18) && n.keyCode.push(t);
            return n;
        }
        function i(e) {
            var t = e.keyCode.length ? e.keyCode : [ e.keyCode ], n = [];
            e.altKey && n.push("alt"), e.ctrlKey && n.push("ctrl"), e.shiftKey && n.push("shift");
            for (var o = 0, i = t.length; o < i; o++) n.push(r(t[o]));
            return n;
        }
        e.exports = function(e) {
            if ("string" == typeof e && (e = e.replace(/\s/g, "").split("+")), "object" == typeof e) return e.length ? o(e) : i(e);
        };
    },
    87: function(e, t, n) {
        "use strict";
        for (var r = function(e) {
            return null !== e && !Array.isArray(e) && "object" == typeof e;
        }, o = {
            3: "Cancel",
            6: "Help",
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            28: "Convert",
            29: "NonConvert",
            30: "Accept",
            31: "ModeChange",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            41: "Select",
            42: "Print",
            43: "Execute",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            48: [ "0", ")" ],
            49: [ "1", "!" ],
            50: [ "2", "@" ],
            51: [ "3", "#" ],
            52: [ "4", "$" ],
            53: [ "5", "%" ],
            54: [ "6", "^" ],
            55: [ "7", "&" ],
            56: [ "8", "*" ],
            57: [ "9", "(" ],
            91: "OS",
            93: "ContextMenu",
            144: "NumLock",
            145: "ScrollLock",
            181: "VolumeMute",
            182: "VolumeDown",
            183: "VolumeUp",
            186: [ ";", ":" ],
            187: [ "=", "+" ],
            188: [ ",", "<" ],
            189: [ "-", "_" ],
            190: [ ".", ">" ],
            191: [ "/", "?" ],
            192: [ "`", "~" ],
            219: [ "[", "{" ],
            220: [ "\\", "|" ],
            221: [ "]", "}" ],
            222: [ "'", '"' ],
            224: "Meta",
            225: "AltGraph",
            246: "Attn",
            247: "CrSel",
            248: "ExSel",
            249: "EraseEof",
            250: "Play",
            251: "ZoomOut"
        }, i = 0; i < 24; i += 1) o[112 + i] = "F" + (i + 1);
        for (var c = 0; c < 26; c += 1) {
            var a = c + 65;
            o[a] = [ String.fromCharCode(a + 32), String.fromCharCode(a) ];
        }
        var u = {
            codes: o,
            getCode: function(e) {
                return r(e) ? e.keyCode || e.which || this[e.key] : this[e];
            },
            getKey: function(e) {
                var t = r(e);
                if (t && e.key) return e.key;
                var n = o[t ? e.keyCode || e.which : e];
                return Array.isArray(n) && (n = t ? n[e.shiftKey ? 1 : 0] : n[0]), n;
            },
            Cancel: 3,
            Help: 6,
            Backspace: 8,
            Tab: 9,
            Clear: 12,
            Enter: 13,
            Shift: 16,
            Control: 17,
            Alt: 18,
            Pause: 19,
            CapsLock: 20,
            Escape: 27,
            Convert: 28,
            NonConvert: 29,
            Accept: 30,
            ModeChange: 31,
            " ": 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            ArrowLeft: 37,
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            Select: 41,
            Print: 42,
            Execute: 43,
            PrintScreen: 44,
            Insert: 45,
            Delete: 46,
            0: 48,
            ")": 48,
            1: 49,
            "!": 49,
            2: 50,
            "@": 50,
            3: 51,
            "#": 51,
            4: 52,
            $: 52,
            5: 53,
            "%": 53,
            6: 54,
            "^": 54,
            7: 55,
            "&": 55,
            8: 56,
            "*": 56,
            9: 57,
            "(": 57,
            a: 65,
            A: 65,
            b: 66,
            B: 66,
            c: 67,
            C: 67,
            d: 68,
            D: 68,
            e: 69,
            E: 69,
            f: 70,
            F: 70,
            g: 71,
            G: 71,
            h: 72,
            H: 72,
            i: 73,
            I: 73,
            j: 74,
            J: 74,
            k: 75,
            K: 75,
            l: 76,
            L: 76,
            m: 77,
            M: 77,
            n: 78,
            N: 78,
            o: 79,
            O: 79,
            p: 80,
            P: 80,
            q: 81,
            Q: 81,
            r: 82,
            R: 82,
            s: 83,
            S: 83,
            t: 84,
            T: 84,
            u: 85,
            U: 85,
            v: 86,
            V: 86,
            w: 87,
            W: 87,
            x: 88,
            X: 88,
            y: 89,
            Y: 89,
            z: 90,
            Z: 90,
            OS: 91,
            ContextMenu: 93,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            F13: 124,
            F14: 125,
            F15: 126,
            F16: 127,
            F17: 128,
            F18: 129,
            F19: 130,
            F20: 131,
            F21: 132,
            F22: 133,
            F23: 134,
            F24: 135,
            NumLock: 144,
            ScrollLock: 145,
            VolumeMute: 181,
            VolumeDown: 182,
            VolumeUp: 183,
            ";": 186,
            ":": 186,
            "=": 187,
            "+": 187,
            ",": 188,
            "<": 188,
            "-": 189,
            _: 189,
            ".": 190,
            ">": 190,
            "/": 191,
            "?": 191,
            "`": 192,
            "~": 192,
            "[": 219,
            "{": 219,
            "\\": 220,
            "|": 220,
            "]": 221,
            "}": 221,
            "'": 222,
            '"': 222,
            Meta: 224,
            AltGraph: 225,
            Attn: 246,
            CrSel: 247,
            ExSel: 248,
            EraseEof: 249,
            Play: 250,
            ZoomOut: 251
        };
        u.Spacebar = u[" "], u.Digit0 = u[0], u.Digit1 = u[1], u.Digit2 = u[2], u.Digit3 = u[3], 
        u.Digit4 = u[4], u.Digit5 = u[5], u.Digit6 = u[6], u.Digit7 = u[7], u.Digit8 = u[8], 
        u.Digit9 = u[9], u.Tilde = u["~"], u.GraveAccent = u["`"], u.ExclamationPoint = u["!"], 
        u.AtSign = u["@"], u.PoundSign = u["#"], u.PercentSign = u["%"], u.Caret = u["^"], 
        u.Ampersand = u["&"], u.PlusSign = u["+"], u.MinusSign = u["-"], u.EqualsSign = u["="], 
        u.DivisionSign = u["/"], u.MultiplicationSign = u["*"], u.Comma = u[","], u.Decimal = u["."], 
        u.Colon = u[":"], u.Semicolon = u[";"], u.Pipe = u["|"], u.BackSlash = u["\\"], 
        u.QuestionMark = u["?"], u.SingleQuote = u["'"], u.DoubleQuote = u['"'], u.LeftCurlyBrace = u["{"], 
        u.RightCurlyBrace = u["}"], u.LeftParenthesis = u["("], u.RightParenthesis = u[")"], 
        u.LeftAngleBracket = u["<"], u.RightAngleBracket = u[">"], u.LeftSquareBracket = u["["], 
        u.RightSquareBracket = u["]"], e.exports = u;
    },
    88: function(e, t, n) {
        "use strict";
        t.a = {
            3: {
                code: "Cancel"
            },
            6: {
                code: "Help"
            },
            8: {
                code: "Backspace"
            },
            9: {
                code: "Tab"
            },
            12: {
                code: "Clear"
            },
            13: {
                code: "Enter"
            },
            16: {
                code: "Shift"
            },
            17: {
                code: "Control"
            },
            18: {
                code: "Alt"
            },
            19: {
                code: "Pause"
            },
            20: {
                code: "CapsLock"
            },
            21: {
                code: "KanaMode"
            },
            22: {
                code: "Lang1"
            },
            25: {
                code: "Lang2"
            },
            27: {
                code: "Escape"
            },
            28: {
                code: "Convert"
            },
            29: {
                code: "NonConvert"
            },
            30: {
                code: "Accept"
            },
            31: {
                code: "ModeChange"
            },
            32: {
                code: "Space"
            },
            33: {
                code: "PageUp"
            },
            34: {
                code: "PageDown"
            },
            35: {
                code: "End"
            },
            36: {
                code: "Home"
            },
            37: {
                code: "ArrowLeft"
            },
            38: {
                code: "ArrowUp"
            },
            39: {
                code: "ArrowRight"
            },
            40: {
                code: "ArrowDown"
            },
            41: {
                code: "Select"
            },
            42: {
                code: "Print"
            },
            43: {
                code: "Execute"
            },
            44: {
                code: "PrintScreen"
            },
            45: {
                code: "Insert"
            },
            46: {
                code: "Delete"
            },
            47: {
                code: "Help"
            },
            48: {
                code: "Digit0",
                keyCap: "0"
            },
            49: {
                code: "Digit1",
                keyCap: "1"
            },
            50: {
                code: "Digit2",
                keyCap: "2"
            },
            51: {
                code: "Digit3",
                keyCap: "3"
            },
            52: {
                code: "Digit4",
                keyCap: "4"
            },
            53: {
                code: "Digit5",
                keyCap: "5"
            },
            54: {
                code: "Digit6",
                keyCap: "6"
            },
            55: {
                code: "Digit7",
                keyCap: "7"
            },
            56: {
                code: "Digit8",
                keyCap: "8"
            },
            57: {
                code: "Digit9",
                keyCap: "9"
            },
            65: {
                code: "KeyA",
                keyCap: "a"
            },
            66: {
                code: "KeyB",
                keyCap: "b"
            },
            67: {
                code: "KeyC",
                keyCap: "c"
            },
            68: {
                code: "KeyD",
                keyCap: "d"
            },
            69: {
                code: "KeyE",
                keyCap: "e"
            },
            70: {
                code: "KeyF",
                keyCap: "f"
            },
            71: {
                code: "KeyG",
                keyCap: "g"
            },
            72: {
                code: "KeyH",
                keyCap: "h"
            },
            73: {
                code: "KeyI",
                keyCap: "i"
            },
            74: {
                code: "KeyJ",
                keyCap: "j"
            },
            75: {
                code: "KeyK",
                keyCap: "k"
            },
            76: {
                code: "KeyL",
                keyCap: "l"
            },
            77: {
                code: "KeyM",
                keyCap: "m"
            },
            78: {
                code: "KeyN",
                keyCap: "n"
            },
            79: {
                code: "KeyO",
                keyCap: "o"
            },
            80: {
                code: "KeyP",
                keyCap: "p"
            },
            81: {
                code: "KeyQ",
                keyCap: "q"
            },
            82: {
                code: "KeyR",
                keyCap: "r"
            },
            83: {
                code: "KeyS",
                keyCap: "s"
            },
            84: {
                code: "KeyT",
                keyCap: "t"
            },
            85: {
                code: "KeyU",
                keyCap: "u"
            },
            86: {
                code: "KeyV",
                keyCap: "v"
            },
            87: {
                code: "KeyW",
                keyCap: "w"
            },
            88: {
                code: "KeyX",
                keyCap: "x"
            },
            89: {
                code: "KeyY",
                keyCap: "y"
            },
            90: {
                code: "KeyZ",
                keyCap: "z"
            },
            91: {
                code: "MetaLeft"
            },
            92: {
                code: "MetaRight"
            },
            93: {
                code: "ContextMenu"
            },
            95: {
                code: "Standby"
            },
            96: {
                code: "Numpad0",
                keyCap: "0"
            },
            97: {
                code: "Numpad1",
                keyCap: "1"
            },
            98: {
                code: "Numpad2",
                keyCap: "2"
            },
            99: {
                code: "Numpad3",
                keyCap: "3"
            },
            100: {
                code: "Numpad4",
                keyCap: "4"
            },
            101: {
                code: "Numpad5",
                keyCap: "5"
            },
            102: {
                code: "Numpad6",
                keyCap: "6"
            },
            103: {
                code: "Numpad7",
                keyCap: "7"
            },
            104: {
                code: "Numpad8",
                keyCap: "8"
            },
            105: {
                code: "Numpad9",
                keyCap: "9"
            },
            106: {
                code: "NumpadMultiply",
                keyCap: "*"
            },
            107: {
                code: "NumpadAdd",
                keyCap: "+"
            },
            108: {
                code: "NumpadComma",
                keyCap: ","
            },
            109: {
                code: "NumpadSubtract",
                keyCap: "-"
            },
            110: {
                code: "NumpadDecimal",
                keyCap: "."
            },
            111: {
                code: "NumpadDivide",
                keyCap: "/"
            },
            112: {
                code: "F1"
            },
            113: {
                code: "F2"
            },
            114: {
                code: "F3"
            },
            115: {
                code: "F4"
            },
            116: {
                code: "F5"
            },
            117: {
                code: "F6"
            },
            118: {
                code: "F7"
            },
            119: {
                code: "F8"
            },
            120: {
                code: "F9"
            },
            121: {
                code: "F10"
            },
            122: {
                code: "F11"
            },
            123: {
                code: "F12"
            },
            124: {
                code: "F13"
            },
            125: {
                code: "F14"
            },
            126: {
                code: "F15"
            },
            127: {
                code: "F16"
            },
            128: {
                code: "F17"
            },
            129: {
                code: "F18"
            },
            130: {
                code: "F19"
            },
            131: {
                code: "F20"
            },
            132: {
                code: "F21"
            },
            133: {
                code: "F22"
            },
            134: {
                code: "F23"
            },
            135: {
                code: "F24"
            },
            144: {
                code: "NumLock"
            },
            145: {
                code: "ScrollLock"
            },
            160: {
                code: "ShiftLeft"
            },
            161: {
                code: "ShiftRight"
            },
            162: {
                code: "ControlLeft"
            },
            163: {
                code: "ControlRight"
            },
            164: {
                code: "AltLeft"
            },
            165: {
                code: "AltRight"
            },
            166: {
                code: "BrowserBack"
            },
            167: {
                code: "BrowserForward"
            },
            168: {
                code: "BrowserRefresh"
            },
            169: {
                code: "BrowserStop"
            },
            170: {
                code: "BrowserSearch"
            },
            171: {
                code: "BrowserFavorites"
            },
            172: {
                code: "BrowserHome"
            },
            173: {
                code: "AudioVolumeMute"
            },
            174: {
                code: "AudioVolumeDown"
            },
            175: {
                code: "AudioVolumeUp"
            },
            176: {
                code: "MediaTrackNext"
            },
            177: {
                code: "MediaTrackPrevious"
            },
            178: {
                code: "MediaStop"
            },
            179: {
                code: "MediaPlayPause"
            },
            180: {
                code: "LaunchMail"
            },
            181: {
                code: "MediaSelect"
            },
            182: {
                code: "LaunchApp1"
            },
            183: {
                code: "LaunchApp2"
            },
            186: {
                code: "Semicolon",
                keyCap: ";"
            },
            187: {
                code: "Equal",
                keyCap: "="
            },
            188: {
                code: "Comma",
                keyCap: ","
            },
            189: {
                code: "Minus",
                keyCap: "-"
            },
            190: {
                code: "Period",
                keyCap: "."
            },
            191: {
                code: "Slash",
                keyCap: "/"
            },
            192: {
                code: "Backquote",
                keyCap: "`"
            },
            219: {
                code: "BracketLeft",
                keyCap: "["
            },
            220: {
                code: "Backslash",
                keyCap: "\\"
            },
            221: {
                code: "BracketRight",
                keyCap: "]"
            },
            222: {
                code: "Quote",
                keyCap: "'"
            },
            226: {
                code: "IntlBackslash",
                keyCap: "\\"
            },
            229: {
                code: "Process"
            },
            246: {
                code: "Attn"
            },
            247: {
                code: "CrSel"
            },
            248: {
                code: "ExSel"
            },
            249: {
                code: "EraseEof"
            },
            250: {
                code: "Play"
            },
            251: {
                code: "ZoomToggle"
            },
            254: {
                code: "Clear"
            }
        };
    },
    90: function(e, t, n) {
        "use strict";
        function r(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, i) {
                    var c = e.apply(t, n);
                    function a(e) {
                        r(c, o, i, a, u, "next", e);
                    }
                    function u(e) {
                        r(c, o, i, a, u, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        function i(e) {
            return l(e) || u(e) || a(e) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
            }
        }
        function u(e) {
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
        var d = function(e) {
            return [ "https://equatio-api.texthelp.com/", "https://equatio-api.dev.texthelp.com/" ].some(function(t) {
                return e.includes && e.includes(t);
            });
        }, f = function e(t) {
            var n;
            return (n = []).concat.apply(n, i(t.map(function(t) {
                return Array.isArray(t) ? e(t) : t;
            })));
        }, p = function(e, t) {
            return e.filter(t).pop();
        }, h = function(e) {
            var t = [], n = f(e), r = n.reduce(function(e, t, n) {
                return "string" == typeof t && (d(t) || t.endsWith("\u2063")) ? [].concat(i(e), [ n ]) : e;
            }, []);
            return 0 === r.length ? null : (r.reverse().forEach(function(e) {
                var r = n.slice(0, e), o = p(r, function(e) {
                    return "string" == typeof e && e.length > 0;
                });
                t.push(o);
            }), t);
        }, v = function() {
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
                return yield v(function(t) {
                    var n = f(t), r = n.reduce(function(e, t, n) {
                        return "string" == typeof t && d(t) ? [].concat(i(e), [ n ]) : e;
                    }, []);
                    if (0 === r.length) return null;
                    r.reverse().forEach(function(t) {
                        var r = n.slice(0, t), o = p(r, function(e) {
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
            return yield v(function(t) {
                var n = h(t);
                n && e.push(n);
            }), f(e);
        });
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
        }, c = e => {
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
                n = c(e);
            } catch (e) {}
            return {
                getText: () => r(t),
                getImages: () => {
                    if (!n) throw Error("HTML did not contain any image data");
                    return o(t, n);
                }
            };
        }, u = async e => {
            if ("string" != typeof e) throw Error("url must be a string");
            if (!e.startsWith("https://docs.google.com")) throw Error("invalid_google_url");
            const t = await fetch(e, {
                method: "GET",
                credentials: "same-origin"
            }), n = await t.text();
            return a(n);
        };
        var l = n(54), s = n.n(l), d = n(2);
        function f(e, t, n, r, o, i, c) {
            try {
                var a = e[i](c), u = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function p(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function c(e) {
                        f(i, r, o, c, a, "next", e);
                    }
                    function a(e) {
                        f(i, r, o, c, a, "throw", e);
                    }
                    c(void 0);
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
            var e = p(function*(e) {
                var t = h(a(document.body.outerHTML), e);
                return t || (t = h(yield u(window.location.href), e)), t ? Object(d.f)(t.originalSrc) : null;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        }();
    },
    94: function(e, t) {}
} ]);