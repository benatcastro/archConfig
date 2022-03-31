!function(t) {
    var e = {};
    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        });
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function(e) {
            return t[e];
        }.bind(null, r));
        return o;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", n(n.s = 340);
}({
    14: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "b", function() {
            return i;
        });
        var o = {
            Insert: "INSERT_HTML_EDITOR",
            Extract: "EXTRACT_SELECTION_HTML_EDITOR",
            SetEditor: "SET_HTML_EDITOR"
        }, r = function(t, e) {
            window.postMessage({
                type: "EQUATIO_HTML_EDITOR_API_RESPONSE",
                action: t,
                value: e
            });
        }, i = function(t, e, n) {
            window.postMessage({
                type: "EQUATIO_HTML_EDITOR_API",
                action: t,
                value: e,
                targetEditor: n
            });
        };
    },
    340: function(t, e, n) {
        "use strict";
        n.r(e);
        var o, r, i = n(14), a = "tinymce", c = function() {
            if (!window.tinyMCE || !window.tinyMCE.activeEditor) return !1;
            var t = window.tinyMCE.activeEditor;
            if (3 === o) {
                if (!t.initialized) return !1;
                var e = t.getWin().frameElement;
                return document.activeElement === e;
            }
            return t.hasFocus();
        }, d = function(t) {
            window.tinyMCE.activeEditor && (t || c()) ? Object(i.c)(i.a.SetEditor, a) : Object(i.c)(i.a.SetEditor, !1);
        }, u = !1, f = function() {
            if (!u) {
                var t = function(t) {
                    var e = function() {
                        return d(!0);
                    };
                    if (3 === o) {
                        var n = function(t) {
                            var n = t.getWin();
                            n.addEventListener("focusin", e), n.addEventListener("focus", e);
                        };
                        t.initialized ? n(t) : t.onInit.add(function() {
                            return n(t);
                        });
                    } else t.on("focusin", e), t.on("focus", e);
                }, e = function() {
                    return d();
                };
                window.tinyMCE.editors.forEach(function(e) {
                    t(e);
                }), 3 === o ? (window.tinyMCE.onAddEditor.add(function(e, n) {
                    return t(n);
                }), window.tinyMCE.onRemoveEditor.add(e)) : (window.tinyMCE.on("AddEditor", function(e) {
                    return t(e.editor);
                }), window.tinyMCE.on("RemoveEditor", e)), u = !0;
            }
        }, l = function(t, e) {
            if (window.tinyMCE.activeEditor) try {
                return window.tinyMCE.activeEditor.execCommand("mceInsertContent", !1, e), void Object(i.c)(t, !0);
            } catch (e) {
                console.error(e), Object(i.c)(t, null);
            }
        }, s = function(t) {
            if (window.tinyMCE && window.tinyMCE.activeEditor) try {
                var e = window.tinyMCE.activeEditor.selection.getContent();
                return void Object(i.c)(t, e);
            } catch (e) {
                console.error(e), Object(i.c)(t, null);
            }
        }, E = function() {
            window.addEventListener("message", function(t) {
                if (t.source === window && t.data && "EQUATIO_HTML_EDITOR_API" === t.data.type && t.data.targetEditor === a) switch (t.data.action) {
                  case i.a.Insert:
                    l(t.data.action, t.data.value);
                    break;

                  case i.a.Extract:
                    s(t.data.action);
                    break;

                  case i.a.SetEditor:
                    d();
                }
            });
        }, v = function() {
            var t = window.tinyMCE.majorVersion;
            if (!t) return !1;
            var e = Number(t);
            return !(Number.isNaN(e) || e < 3) && (o = e, !0);
        }, w = !1, m = function() {
            !w && window.tinyMCE && v() && (f(), E(), w = !0);
        }, g = "contentEditable";
        function y(t) {
            var e;
            if (!r) throw new Error("NO_ACTIVE_INSERT_RANGE");
            var n = window.getSelection();
            n.removeAllRanges(), n.addRange(r), (e = n.getRangeAt(0)).deleteContents();
            var o = document.createElement("div");
            o.innerHTML = t;
            for (var i, a, c = document.createDocumentFragment(); i = o.firstChild; ) a = c.appendChild(i);
            e.insertNode(c), a && ((e = e.cloneRange()).setStartAfter(a), e.collapse(!0), n.removeAllRanges(), 
            n.addRange(e));
        }
        var b, O, T = function(t, e) {
            try {
                return y(e), void Object(i.c)(t, !0);
            } catch (e) {
                console.error(e), Object(i.c)(t, null);
            }
        }, p = function(t) {
            try {
                var e = window.getSelection();
                e.removeAllRanges(), e.addRange(r);
                var n = e.getRangeAt(0), o = e.anchorOffset, a = n.commonAncestorContainer;
                if (!a || 1 !== a.nodeType) return void Object(i.c)(t, " ");
                var c = a, d = a.childNodes;
                return d && d.length - 1 >= o && (c = d[o]), "IMG" !== c.nodeName ? void Object(i.c)(t, " ") : void Object(i.c)(t, c.outerHTML);
            } catch (e) {
                console.error(e), Object(i.c)(t, null);
            }
        }, M = function() {
            var t = window.getSelection().getRangeAt(0);
            r = t;
        }, _ = function t(e) {
            return e ? 1 === e.nodeType ? e : e.parentElement ? t(e.parentElement) : null : null;
        }, C = function() {
            var t = window.getSelection().anchorNode, e = _(t);
            if (!e || !e.closest(".equatio-toolbar-wrapper")) {
                if (e && e.isContentEditable) return M(), b = !0, void Object(i.c)(i.a.SetEditor, g);
                b && (b = !1, Object(i.c)(i.a.SetEditor, !1));
            }
        }, j = function() {
            var t = function() {
                O && clearTimeout(O), O = setTimeout(C, 100);
            };
            document.addEventListener("selectionchange", t), document.addEventListener("selectstart", t);
        }, I = function(t) {
            if (t.source === window && t.data && "EQUATIO_HTML_EDITOR_API" === t.data.type && t.data.targetEditor === g) switch (t.data.action) {
              case i.a.Insert:
                T(t.data.action, t.data.value);
                break;

              case i.a.Extract:
                p(t.data.action);
                break;

              case i.a.SetEditor:
                C();
            }
        }, R = !1, S = function() {
            R || (window.addEventListener("message", I), j(), R = !0);
        }, A = function() {
            m(), S();
        };
        window.addEventListener("focus", function() {
            A();
        }), A();
    }
});