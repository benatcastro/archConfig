(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 28 ], {
    345: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(643), i = n.n(r);
        !function() {
            var t, e = i.a || {}, n = "mathquill-command-id", r = "mathquill-block-id", s = Math.min, o = Math.max;
            if (!e) throw "MathQuill requires jQuery 1.5.2+ to be loaded first";
            function a() {}
            var l = [].slice;
            function c(t) {
                var e = t.length - 1;
                return function() {
                    var n = l.call(arguments, 0, e), r = l.call(arguments, e);
                    return t.apply(this, n.concat([ r ]));
                };
            }
            var u = c(function(t, e) {
                return c(function(n, r) {
                    if (t in n) return n[t].apply(n, e.concat(r));
                });
            });
            function f(t) {
                return c(function(e, n) {
                    "function" != typeof e && (e = u(e));
                    var r = function(t) {
                        return e.apply(t, [ t ].concat(n));
                    };
                    return t.call(this, r);
                });
            }
            function h(t) {
                var e = l.call(arguments, 1);
                return function() {
                    return t.apply(this, e);
                };
            }
            function p(t, e) {
                if (!e) throw new Error("prayer failed: " + t);
            }
            var d = function(t, e, n) {
                function r(t) {
                    return "object" == typeof t;
                }
                function i(t) {
                    return "function" == typeof t;
                }
                function s() {}
                return function o(a, l) {
                    function c() {
                        var t = new u();
                        return i(t.init) && t.init.apply(t, arguments), t;
                    }
                    function u() {}
                    l === n && (l = a, a = Object), c.Bare = u;
                    var f, h = s[t] = a[t], p = u[t] = c[t] = c.p = new s();
                    return p.constructor = c, c.extend = function(t) {
                        return o(c, t);
                    }, (c.open = function(t) {
                        if (f = {}, i(t) ? f = t.call(c, p, h, c, a) : r(t) && (f = t), r(f)) for (var n in f) e.call(f, n) && (p[n] = f[n]);
                        return i(p.init) || (p.init = a), c;
                    })(l);
                };
            }("prototype", {}.hasOwnProperty), m = -1, g = 1;
            function v(t) {
                p("a direction was passed", t === m || t === g);
            }
            var y = d(e, function(t) {
                t.insDirOf = function(t, e) {
                    return t === m ? this.insertBefore(e.first()) : this.insertAfter(e.last());
                }, t.insAtDirEnd = function(t, e) {
                    return t === m ? this.prependTo(e) : this.appendTo(e);
                };
            }), b = d(function(t) {
                t.parent = 0, t[m] = 0, t[g] = 0, t.init = function(t, e, n) {
                    this.parent = t, this[m] = e, this[g] = n;
                }, this.copy = function(t) {
                    return b(t.parent, t[m], t[g]);
                };
            }), x = d(function(t) {
                t[m] = 0, t[g] = 0, t.parent = 0;
                var e = 0;
                function n() {
                    return e += 1;
                }
                this.byId = {}, t.init = function() {
                    this.id = n(), x.byId[this.id] = this, this.ends = {}, this.ends[m] = 0, this.ends[g] = 0;
                }, t.dispose = function() {
                    delete x.byId[this.id];
                }, t.toString = function() {
                    return "{{ MathQuill Node #" + this.id + " }}";
                }, t.jQ = y(), t.jQadd = function(t) {
                    return this.jQ = this.jQ.add(t);
                }, t.jQize = function(t) {
                    t = y(t || this.html());
                    function e(t) {
                        if (t.getAttribute) {
                            var n = t.getAttribute("mathquill-command-id"), r = t.getAttribute("mathquill-block-id");
                            n && x.byId[n].jQadd(t), r && x.byId[r].jQadd(t);
                        }
                        for (t = t.firstChild; t; t = t.nextSibling) e(t);
                    }
                    for (var n = 0; n < t.length; n += 1) e(t[n]);
                    return t;
                }, t.createDir = function(t, e) {
                    v(t);
                    var n = this;
                    return n.jQize(), n.jQ.insDirOf(t, e.jQ), e[t] = n.adopt(e.parent, e[m], e[g]), 
                    n;
                }, t.createLeftOf = function(t) {
                    return this.createDir(m, t);
                }, t.selectChildren = function(t, e) {
                    return j(t, e);
                }, t.bubble = f(function(t) {
                    for (var e = this; e; e = e.parent) {
                        if (!1 === t(e)) break;
                    }
                    return this;
                }), t.postOrder = f(function(t) {
                    return function e(n) {
                        n.eachChild(e), t(n);
                    }(this), this;
                }), t.isEmpty = function() {
                    return 0 === this.ends[m] && 0 === this.ends[g];
                }, t.isStyleBlock = function() {
                    return !1;
                }, t.children = function() {
                    return q(this.ends[m], this.ends[g]);
                }, t.eachChild = function() {
                    var t = this.children();
                    return t.each.apply(t, arguments), this;
                }, t.foldChildren = function(t, e) {
                    return this.children().fold(t, e);
                }, t.withDirAdopt = function(t, e, n, r) {
                    return q(this, this).withDirAdopt(t, e, n, r), this;
                }, t.adopt = function(t, e, n) {
                    return q(this, this).adopt(t, e, n), this;
                }, t.disown = function() {
                    return q(this, this).disown(), this;
                }, t.remove = function() {
                    return this.jQ.remove(), this.postOrder("dispose"), this.disown();
                };
            });
            function w(t, e, n) {
                p("a parent is always present", t), p("leftward is properly set up", e ? e[g] === n && e.parent === t : t.ends[m] === n), 
                p("rightward is properly set up", n ? n[m] === e && n.parent === t : t.ends[g] === e);
            }
            var q = d(function(e) {
                e.init = function(e, n, r) {
                    if (r === t && (r = m), v(r), p("no half-empty fragments", !e == !n), this.ends = {}, 
                    e) {
                        p("withDir is passed to Fragment", e instanceof x), p("oppDir is passed to Fragment", n instanceof x), 
                        p("withDir and oppDir have the same parent", e.parent === n.parent), this.ends[r] = e, 
                        this.ends[-r] = n;
                        var i = this.fold([], function(t, e) {
                            return t.push.apply(t, e.jQ.get()), t;
                        });
                        this.jQ = this.jQ.add(i);
                    }
                }, e.jQ = y(), e.withDirAdopt = function(t, e, n, r) {
                    return t === m ? this.adopt(e, n, r) : this.adopt(e, r, n);
                }, e.adopt = function(t, e, n) {
                    w(t, e, n);
                    var r = this;
                    r.disowned = !1;
                    var i = r.ends[m];
                    if (!i) return this;
                    var s = r.ends[g];
                    return e || (t.ends[m] = i), n ? n[m] = s : t.ends[g] = s, r.ends[g][g] = n, r.each(function(n) {
                        n[m] = e, n.parent = t, e && (e[g] = n), e = n;
                    }), r;
                }, e.disown = function() {
                    var t = this, e = t.ends[m];
                    if (!e || t.disowned) return t;
                    t.disowned = !0;
                    var n = t.ends[g], r = e.parent;
                    return w(r, e[m], e), w(r, n, n[g]), e[m] ? e[m][g] = n[g] : r.ends[m] = n[g], n[g] ? n[g][m] = e[m] : r.ends[g] = e[m], 
                    t;
                }, e.remove = function() {
                    return this.jQ.remove(), this.each("postOrder", "dispose"), this.disown();
                }, e.each = f(function(t) {
                    var e = this, n = e.ends[m];
                    if (!n) return e;
                    for (;n !== e.ends[g][g]; n = n[g]) {
                        if (!1 === t(n)) break;
                    }
                    return e;
                }), e.fold = function(t, e) {
                    return this.each(function(n) {
                        t = e.call(this, t, n);
                    }), t;
                };
            }), T = {}, C = {}, k = d(b, function(t) {
                t.init = function(t, e) {
                    this.parent = t, this.options = e;
                    var n = this.jQ = this._jQ = y('<span class="mq-cursor">&#8203;</span>');
                    this.blink = function() {
                        n.toggleClass("mq-blink");
                    }, this.upDownCache = {};
                }, t.show = function() {
                    return this.jQ = this._jQ.removeClass("mq-blink"), "intervalId" in this ? clearInterval(this.intervalId) : (this[g] ? this.selection && this.selection.ends[m][m] === this[m] ? this.jQ.insertBefore(this.selection.jQ) : this.jQ.insertBefore(this[g].jQ.first()) : this.jQ.appendTo(this.parent.jQ), 
                    this.parent.focus()), this.intervalId = setInterval(this.blink, 500), this;
                }, t.hide = function() {
                    return "intervalId" in this && clearInterval(this.intervalId), delete this.intervalId, 
                    this.jQ.detach(), this.jQ = y(), this;
                }, t.withDirInsertAt = function(t, e, n, r) {
                    var i = this.parent;
                    this.parent = e, this[t] = n, this[-t] = r, i !== e && i.blur && i.blur(this);
                }, t.insDirOf = function(t, e) {
                    return v(t), this.jQ.insDirOf(t, e.jQ), this.withDirInsertAt(t, e.parent, e[t], e), 
                    this.parent.jQ.addClass("mq-hasCursor"), this;
                }, t.insLeftOf = function(t) {
                    return this.insDirOf(m, t);
                }, t.insRightOf = function(t) {
                    return this.insDirOf(g, t);
                }, t.insAtDirEnd = function(t, e) {
                    return v(t), this.jQ.insAtDirEnd(t, e.jQ), this.withDirInsertAt(t, e, 0, e.ends[t]), 
                    e.focus(), this;
                }, t.insAtLeftEnd = function(t) {
                    return this.insAtDirEnd(m, t);
                }, t.insAtRightEnd = function(t) {
                    return this.insAtDirEnd(g, t);
                }, t.jumpUpDown = function(t, e) {
                    var n = this;
                    n.upDownCache[t.id] = b.copy(n);
                    var r = n.upDownCache[e.id];
                    if (r) r[g] ? n.insLeftOf(r[g]) : n.insAtRightEnd(r.parent); else {
                        var i = n.offset().left;
                        e.seek(i, n);
                    }
                }, t.offset = function() {
                    var t = this, e = t.jQ.removeClass("mq-cursor").offset();
                    return t.jQ.addClass("mq-cursor"), e;
                }, t.unwrapGramp = function() {
                    var t = this.parent.parent, e = t.parent, n = t[g], r = this, i = t[m];
                    if (t.disown().eachChild(function(r) {
                        r.isEmpty() || (r.children().adopt(e, i, n).each(function(e) {
                            e.jQ.insertBefore(t.jQ.first());
                        }), i = r.ends[g]);
                    }), !this[g]) if (this[m]) this[g] = this[m][g]; else for (;!this[g]; ) {
                        if (this.parent = this.parent[g], !this.parent) {
                            this[g] = t[g], this.parent = e;
                            break;
                        }
                        this[g] = this.parent.ends[m];
                    }
                    this[g] ? this.insLeftOf(this[g]) : this.insAtRightEnd(e), t.jQ.remove(), t[m].siblingDeleted && t[m].siblingDeleted(r.options, g), 
                    t[g].siblingDeleted && t[g].siblingDeleted(r.options, m);
                }, t.startSelection = function() {
                    for (var t = this.anticursor = b.copy(this), e = t.ancestors = {}, n = t; n.parent; n = n.parent) e[n.parent.id] = n;
                }, t.endSelection = function() {
                    delete this.anticursor;
                }, t.select = function() {
                    var t = this.anticursor;
                    if (this[m] === t[m] && this.parent === t.parent) return !1;
                    for (var e = this; e.parent; e = e.parent) if (e.parent.id in t.ancestors) {
                        var n = e.parent;
                        break;
                    }
                    p("cursor and anticursor in the same tree", n);
                    var r, i, s = t.ancestors[n.id], o = g;
                    if (e[m] !== s) for (var a = e; a; a = a[g]) if (a[g] === s[g]) {
                        o = m, r = e, i = s;
                        break;
                    }
                    return o === g && (r = s, i = e), r instanceof b && (r = r[g]), i instanceof b && (i = i[m]), 
                    this.hide().selection = n.selectChildren(r, i), this.insDirOf(o, this.selection.ends[o]), 
                    this.selectionChanged(), !0;
                }, t.clearSelection = function() {
                    return this.selection && (this.selection.clear(), delete this.selection, this.selectionChanged()), 
                    this;
                }, t.deleteSelection = function() {
                    this.selection && (this[m] = this.selection.ends[m][m], this[g] = this.selection.ends[g][g], 
                    this.selection.remove(), this.selectionChanged(), delete this.selection);
                }, t.replaceSelection = function() {
                    var t = this.selection;
                    return t && (this[m] = t.ends[m][m], this[g] = t.ends[g][g], delete this.selection), 
                    t;
                };
            }), j = d(q, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.ends[m].bubble(function(t) {
                        if (t.controller) return t.controller.handle("selection-start"), !0;
                    }), this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent();
                }, t.adopt = function() {
                    return this.jQ.replaceWith(this.jQ = this.jQ.children()), e.adopt.apply(this, arguments);
                }, t.clear = function() {
                    return this.ends[m].bubble(function(t) {
                        if (t.controller) return t.controller.handle("selection-end"), !0;
                    }), this.jQ.replaceWith(this.jQ[0].childNodes), this;
                }, t.join = function(t) {
                    return this.fold("", function(e, n) {
                        return e + n[t]();
                    });
                };
            }), O = d(function(t) {
                t.init = function(t, e, n) {
                    this.id = t.id, this.data = {}, this.root = t, this.container = e, this.options = n, 
                    t.controller = this, this.cursor = t.cursor = k(t, n);
                }, t.handle = function(t, e) {
                    var n = this.options.handlers;
                    if (n && n.fns[t]) {
                        var r = n.APIClasses[this.KIND_OF_MQ](this);
                        e === m || e === g ? n.fns[t](e, r) : n.fns[t](r);
                    }
                };
                var e = [];
                this.onNotify = function(t) {
                    e.push(t);
                }, t.notify = function() {
                    for (var t = 0; t < e.length; t += 1) e[t].apply(this.cursor, arguments);
                    return this;
                };
            }), S = {}, E = d(), D = {}, A = d(), L = {};
            function Q() {
                window.console;
            }
            function _(t) {
                return Q(), Ft(t);
            }
            _.prototype = A.p, _.VERSION = "v2.1.0", _.interfaceVersion = function(t) {
                if (1 !== t) throw "Only interface version 1 supported. You specified: " + t;
                return (Q = function() {
                    window.console;
                })(), _;
            }, _.getInterface = I;
            var N = I.MIN = 1, R = I.MAX = 2;
            function I(t) {
                if (!(N <= t && t <= R)) throw "Only interface versions between " + N + " and " + R + " supported. You specified: " + t;
                function n(t) {
                    if (!t || !t.nodeType) return null;
                    var e = y(t).children(".mq-root-block").attr(r), n = e && x.byId[e].controller;
                    return n ? i[n.KIND_OF_MQ](n) : null;
                }
                var i = {};
                function s(t, e) {
                    for (var n in e && e.handlers && (e.handlers = {
                        fns: e.handlers,
                        APIClasses: i
                    }), e) if (e.hasOwnProperty(n)) {
                        var r = e[n], s = D[n];
                        t[n] = s ? s(r) : r;
                    }
                }
                n.L = m, n.R = g, n.saneKeyboardEvents = M, n.config = function(t) {
                    return s(E.p, t), this;
                }, n.registerEmbed = function(t, e) {
                    if (!/^[a-z][a-z0-9]*$/i.test(t)) throw "Embed name must start with letter and be only letters and digits";
                    L[t] = e;
                };
                var o = i.AbstractMathQuill = d(A, function(t) {
                    t.init = function(t) {
                        this.__controller = t, this.__options = t.options, this.id = t.id, this.data = t.data;
                    }, t.__mathquillify = function(t) {
                        var e = this.__controller, n = e.root, i = e.container;
                        e.createTextarea();
                        var s = i.addClass(t).contents().detach();
                        n.jQ = y('<span class="mq-root-block"/>').attr(r, n.id).appendTo(i), this.latex(s.text()), 
                        this.revert = function() {
                            return i.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(s);
                        };
                    }, t.config = function(t) {
                        return s(this.__options, t), this;
                    }, t.el = function() {
                        return this.__controller.container[0];
                    }, t.text = function() {
                        return this.__controller.exportText();
                    }, t.latex = function(t) {
                        return arguments.length > 0 ? (this.__controller.renderLatexMath(t), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), 
                        this) : this.__controller.exportLatex();
                    }, t.html = function() {
                        return this.__controller.root.jQ.html().replace(/ mathquill-(?:command|block)-id="?\d+"?/g, "").replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, "").replace(/ mq-hasCursor|mq-hasCursor ?/, "").replace(/ class=(""|(?= |>))/g, "");
                    }, t.reflow = function() {
                        return this.__controller.root.postOrder("reflow"), this;
                    };
                });
                for (var l in n.prototype = o.prototype, i.EditableField = d(o, function(t, n) {
                    t.__mathquillify = function() {
                        return n.__mathquillify.apply(this, arguments), this.__controller.editable = !0, 
                        this.__controller.delegateMouseEvents(), this.__controller.editablesTextareaEvents(), 
                        this;
                    }, t.focus = function() {
                        return this.__controller.textarea.focus(), this;
                    }, t.blur = function() {
                        return this.__controller.textarea.blur(), this;
                    }, t.write = function(t) {
                        return this.__controller.writeLatex(t), this.__controller.scrollHoriz(), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), 
                        this;
                    }, t.empty = function() {
                        var t = this.__controller.root, e = this.__controller.cursor;
                        return t.eachChild("postOrder", "dispose"), t.ends[m] = t.ends[g] = 0, t.jQ.empty(), 
                        delete e.selection, e.insAtRightEnd(t), this;
                    }, t.cmd = function(t) {
                        var e = this.__controller.notify(), n = e.cursor, r = /^\\(textcolor|class){(.*?)}/i;
                        if (n && n.parent && n.parent.jQ.is(".mq-text-mode") && "\\text" === t) return n.clearSelection().show(), 
                        this;
                        if (r.test(t)) {
                            var i = r.exec(t), s = i[1];
                            t = T[s](s);
                            if ("textcolor" === s) {
                                var o = n.selection && n.selection.ends[m], a = n.selection && n.selection.ends[g];
                                if (o && a && o === a && "textcolor" === o.ctrlSeq) return o.setColor(i[2]), o.jQ.css("color", i[2]), 
                                e.handle("edit"), this;
                                t.setColor(i[2]);
                            } else "class" === s && t.setClass(i[2]);
                            return n.selection && t.replaces(n.replaceSelection()), t.createLeftOf(n.show()), 
                            this.__controller.scrollHoriz(), e.handle("edit"), this;
                        }
                        /^\\[a-z]+/i.test(t) ? (t = t.slice(1), (s = T[t] || Tt[t]) && (t = s(t), n.selection && t.replaces(n.replaceSelection()), 
                        t.createLeftOf(n.show()), this.__controller.scrollHoriz())) : n.parent.write(n, t);
                        return e.blurred && n.hide().parent.blur(), e.handle("edit"), this;
                    }, t.select = function() {
                        var t = this.__controller;
                        for (t.notify("move").cursor.insAtRightEnd(t.root); t.cursor[m]; ) t.selectLeft();
                        return this;
                    }, t.clearSelection = function() {
                        return this.__controller.cursor.clearSelection(), this;
                    }, t.moveToDirEnd = function(t) {
                        return this.__controller.notify("move").cursor.insAtDirEnd(t, this.__controller.root), 
                        this;
                    }, t.moveToLeftEnd = function() {
                        return this.moveToDirEnd(m);
                    }, t.moveToRightEnd = function() {
                        return this.moveToDirEnd(g);
                    }, t.keystroke = function(t) {
                        t = t.replace(/^\s+|\s+$/g, "").split(/\s+/);
                        for (var e = 0; e < t.length; e += 1) this.__controller.keystroke(t[e], {
                            preventDefault: a
                        });
                        return this;
                    }, t.typedText = function(t) {
                        for (var e = 0; e < t.length; e += 1) this.__controller.typedText(t.charAt(e));
                        return this;
                    }, t.dropEmbedded = function(t, e, n) {
                        var r = t - y(window).scrollLeft(), i = e - y(window).scrollTop(), s = document.elementFromPoint(r, i);
                        this.__controller.seek(y(s), t, e), qt().setOptions(n).createLeftOf(this.__controller.cursor);
                    }, t.clickAt = function(t, n, r) {
                        r = r || document.elementFromPoint(t, n);
                        var i = this.__controller, s = i.root;
                        return e.contains(s.jQ[0], r) || (r = s.jQ[0]), i.seek(y(r), t + pageXOffset, n + pageYOffset), 
                        i.blurred && this.focus(), this;
                    }, t.ignoreNextMousedown = function(t) {
                        return this.__controller.cursor.options.ignoreNextMousedown = t, this;
                    };
                }), n.EditableField = function() {
                    throw "wtf don't call me, I'm 'abstract'";
                }, n.EditableField.prototype = i.EditableField.prototype, S) !function(e, r) {
                    var s = i[e] = r(i);
                    n[e] = function(r, i) {
                        var o = n(r);
                        if (o instanceof s || !r || !r.nodeType) return o;
                        var a = O(s.RootBlock(), y(r), E());
                        return a.KIND_OF_MQ = e, s(a).__mathquillify(i, t);
                    }, n[e].prototype = s.prototype;
                }(l, S[l]);
                return n;
            }
            _.noConflict = function() {
                return window.MathQuill = H, _;
            };
            var H = window.MathQuill;
            function B(t) {
                for (var e = "moveOutOf deleteOutOf selectOutOf upOutOf downOutOf".split(" "), n = 0; n < e.length; n += 1) !function(e) {
                    t[e] = function(t) {
                        this.controller.handle(e, t);
                    };
                }(e[n]);
                t.reflow = function() {
                    this.controller.handle("reflow"), this.controller.handle("edited"), this.controller.handle("edit");
                };
            }
            window.MathQuill = _;
            var M = function() {
                var t = {
                    8: "Backspace",
                    9: "Tab",
                    10: "Enter",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    20: "CapsLock",
                    27: "Esc",
                    32: "Spacebar",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "Left",
                    38: "Up",
                    39: "Right",
                    40: "Down",
                    45: "Insert",
                    46: "Del",
                    144: "NumLock"
                };
                function n(e) {
                    var n, r = e.which || e.keyCode, i = t[r], s = [];
                    return e.ctrlKey && s.push("Ctrl"), e.originalEvent && e.originalEvent.metaKey && s.push("Meta"), 
                    e.altKey && s.push("Alt"), e.shiftKey && s.push("Shift"), n = i || String.fromCharCode(r), 
                    s.length || i ? (s.push(n), s.join("-")) : n;
                }
                return function(t, r) {
                    var i, s = null, o = null, l = e(t), c = e(r.container || l), u = a;
                    function f(t) {
                        u = t, clearTimeout(i), i = setTimeout(t);
                    }
                    function h(t) {
                        f(function(e) {
                            u = a, clearTimeout(i), t(e);
                        });
                    }
                    function p(t) {
                        u(), u = a, clearTimeout(i), l.val(t), t && l[0].select && l[0].select(), d = !!t;
                    }
                    c.bind("keydown keypress input keyup focusout paste", function(t) {
                        u(t);
                    });
                    var d = !1;
                    function m() {
                        var t = l[0];
                        return "selectionStart" in t && t.selectionStart !== t.selectionEnd;
                    }
                    function g() {
                        r.keystroke(n(s), s);
                    }
                    function v(t) {
                        s = t, o = null, d && h(function(t) {
                            t && "focusout" === t.type || !l[0].select || l[0].select();
                        }), g();
                    }
                    function y(t) {
                        s && o && g(), o = t, f(x);
                    }
                    function b(t) {
                        s && !o && f(x);
                    }
                    function x() {
                        if (!m()) {
                            var t = l.val();
                            1 === t.length ? (l.val(""), r.typedText(t)) : t && l[0].select && l[0].select();
                        }
                    }
                    function w() {
                        s = o = null;
                    }
                    function q(t) {
                        l.focus(), f(T);
                    }
                    function T() {
                        var t = l.val();
                        l.val(""), t && r.paste(t);
                    }
                    return c.bind({
                        keydown: v,
                        keypress: y,
                        keyup: b,
                        focusout: w,
                        cut: function() {
                            h(function() {
                                r.cut();
                            });
                        },
                        copy: function() {
                            h(function() {
                                r.copy();
                            });
                        },
                        paste: q
                    }), {
                        select: p
                    };
                };
            }(), z = d(function(t, e, n) {
                function r(t, e) {
                    throw "Parse Error: " + e + " at " + (t = t ? "'" + t + "'" : "EOF");
                }
                t.init = function(t) {
                    this._ = t;
                }, t.parse = function(t) {
                    return this.skip(o)._("" + t, e, r);
                    function e(t, e) {
                        return e;
                    }
                }, t.or = function(t) {
                    p("or is passed a parser", t instanceof n);
                    var e = this;
                    return n(function(n, r, i) {
                        return e._(n, r, s);
                        function s(e) {
                            return t._(n, r, i);
                        }
                    });
                }, t.then = function(t) {
                    var e = this;
                    return n(function(r, i, s) {
                        return e._(r, o, s);
                        function o(e, r) {
                            var o = t instanceof n ? t : t(r);
                            return p("a parser is returned", o instanceof n), o._(e, i, s);
                        }
                    });
                }, t.many = function() {
                    var t = this;
                    return n(function(e, n, r) {
                        for (var i = []; t._(e, s, o); ) ;
                        return n(e, i);
                        function s(t, n) {
                            return e = t, i.push(n), !0;
                        }
                        function o() {
                            return !1;
                        }
                    });
                }, t.times = function(t, e) {
                    arguments.length < 2 && (e = t);
                    var r = this;
                    return n(function(n, i, s) {
                        for (var o, a = [], l = !0, c = 0; c < t; c += 1) if (!(l = r._(n, u, f))) return s(n, o);
                        for (;c < e && l; c += 1) l = r._(n, u, h);
                        return i(n, a);
                        function u(t, e) {
                            return a.push(e), n = t, !0;
                        }
                        function f(t, e) {
                            return o = e, n = t, !1;
                        }
                        function h(t, e) {
                            return !1;
                        }
                    });
                }, t.result = function(t) {
                    return this.then(s(t));
                }, t.atMost = function(t) {
                    return this.times(0, t);
                }, t.atLeast = function(t) {
                    var e = this;
                    return e.times(t).then(function(t) {
                        return e.many().map(function(e) {
                            return t.concat(e);
                        });
                    });
                }, t.map = function(t) {
                    return this.then(function(e) {
                        return s(t(e));
                    });
                }, t.skip = function(t) {
                    return this.then(function(e) {
                        return t.result(e);
                    });
                };
                this.string = function(t) {
                    var e = t.length, r = "expected '" + t + "'";
                    return n(function(n, i, s) {
                        var o = n.slice(0, e);
                        return o === t ? i(n.slice(e), o) : s(n, r);
                    });
                };
                var i = this.regex = function(t) {
                    p("regexp parser is anchored", "^" === t.toString().charAt(1));
                    var e = "expected " + t;
                    return n(function(n, r, i) {
                        var s = t.exec(n);
                        if (s) {
                            var o = s[0];
                            return r(n.slice(o.length), o);
                        }
                        return i(n, e);
                    });
                }, s = n.succeed = function(t) {
                    return n(function(e, n) {
                        return n(e, t);
                    });
                }, o = (n.fail = function(t) {
                    return n(function(e, n, r) {
                        return r(e, t);
                    });
                }, n.letter = i(/^[a-z]/i), n.letters = i(/^[a-z]*/i), n.digit = i(/^[0-9]/), n.digits = i(/^[0-9]*/), 
                n.whitespace = i(/^\s+/), n.optWhitespace = i(/^\s*/), n.any = n(function(t, e, n) {
                    return t ? e(t.slice(1), t.charAt(0)) : n(t, "expected any character");
                }), n.all = n(function(t, e, n) {
                    return e("", t);
                }), n.eof = n(function(t, e, n) {
                    return t ? n(t, "expected EOF") : e(t, t);
                }));
            });
            O.open(function(t) {
                t.focusBlurEvents = function() {
                    var t, e = this, n = e.root, r = e.cursor;
                    function i() {
                        clearTimeout(t), r.selection && r.selection.jQ.addClass("mq-blur"), s();
                    }
                    function s() {
                        r.hide().parent.blur(), e.container.removeClass("mq-focused"), y(window).unbind("blur", i);
                    }
                    e.textarea.focus(function() {
                        e.blurred = !1, clearTimeout(t), e.container.addClass("mq-focused"), r.parent || r.insAtRightEnd(n), 
                        r.selection ? (r.selection.jQ.removeClass("mq-blur"), e.selectionChanged()) : r.show();
                    }).blur(function() {
                        e.blurred = !0, t = setTimeout(function() {
                            n.postOrder("intentionalBlur"), s();
                        }), y(window).bind("blur", i);
                    }), e.blurred = !0, r.hide().parent.blur();
                };
            }), O.open(function(t, e) {
                t.exportText = function() {
                    return this.root.foldChildren("", function(t, e) {
                        return t + e.text();
                    });
                };
            }), O.open(function(e) {
                E.p.ignoreNextMousedown = a, e.delegateMouseEvents = function() {
                    var e = this.root.jQ;
                    this.container.bind("mousedown.mathquill", function(n) {
                        var i, s = y(n.target).closest(".mq-root-block"), o = x.byId[s.attr(r) || e.attr(r)].controller, l = o.cursor, c = l.blink, u = o.textareaSpan, f = o.textarea;
                        (n.preventDefault(), n.target.unselectable = !0, l.options.ignoreNextMousedown(n)) || (l.options.ignoreNextMousedown = a, 
                        o.blurred && (o.editable || s.prepend(u), f.focus()), l.blink = a, o.seek(y(n.target), n.pageX, n.pageY).cursor.startSelection(), 
                        s.mousemove(h), y(n.target.ownerDocument).mousemove(p).mouseup(d));
                        function h(t) {
                            i = y(t.target);
                        }
                        function p(e) {
                            l.anticursor || l.startSelection(), o.seek(i, e.pageX, e.pageY).cursor.select(), 
                            i = t;
                        }
                        function d(t) {
                            l.blink = c, l.selection || (o.editable ? l.show() : u.detach()), s.unbind("mousemove", h), 
                            y(t.target.ownerDocument).unbind("mousemove", p).unbind("mouseup", d);
                        }
                    });
                };
            }), O.open(function(t) {
                t.seek = function(t, e, i) {
                    var s = this.notify("select").cursor;
                    if (t) {
                        var o = t.attr(r) || t.attr(n);
                        if (!o) {
                            var a = t.parent();
                            o = a.attr(r) || a.attr(n);
                        }
                    }
                    var l = o ? x.byId[o] : this.root;
                    return p("nodeId is the id of some Node that exists", l), s.clearSelection().show(), 
                    l.seek(e, s), this.scrollHoriz(), this;
                };
            }), O.open(function(t) {
                t.keystroke = function(t, e) {
                    this.cursor.parent.keystroke(t, e, this);
                };
            }), x.open(function(t) {
                t.keystroke = function(t, e, n) {
                    var r = n.cursor;
                    switch (t) {
                      case "Ctrl-Shift-Backspace":
                      case "Ctrl-Backspace":
                        n.ctrlDeleteDir(m);
                        break;

                      case "Shift-Backspace":
                      case "Backspace":
                        n.backspace();
                        break;

                      case "Esc":
                        return void n.escapeDir(g, t, e);

                      case "Shift-Esc":
                        return void n.escapeDir(m, t, e);

                      case "End":
                        n.notify("move").cursor.insAtRightEnd(r.parent);
                        break;

                      case "Ctrl-End":
                        n.notify("move").cursor.insAtRightEnd(n.root);
                        break;

                      case "Shift-End":
                        for (;r[g]; ) n.selectRight();
                        break;

                      case "Ctrl-Shift-End":
                        for (;r[g] || r.parent !== n.root; ) n.selectRight();
                        break;

                      case "Home":
                        n.notify("move").cursor.insAtLeftEnd(r.parent);
                        break;

                      case "Ctrl-Home":
                        n.notify("move").cursor.insAtLeftEnd(n.root);
                        break;

                      case "Shift-Home":
                        for (;r[m]; ) n.selectLeft();
                        break;

                      case "Ctrl-Shift-Home":
                        for (;r[m] || r.parent !== n.root; ) n.selectLeft();
                        break;

                      case "Left":
                        n.moveLeft();
                        break;

                      case "Shift-Left":
                        n.selectLeft();
                        break;

                      case "Ctrl-Left":
                        break;

                      case "Right":
                        n.moveRight();
                        break;

                      case "Shift-Right":
                        n.selectRight();
                        break;

                      case "Ctrl-Right":
                        break;

                      case "Up":
                        n.moveUp();
                        break;

                      case "Down":
                        n.moveDown();
                        break;

                      case "Shift-Up":
                        if (r[m]) for (;r[m]; ) n.selectLeft(); else n.selectLeft();

                      case "Shift-Down":
                        if (r[g]) for (;r[g]; ) n.selectRight(); else n.selectRight();

                      case "Ctrl-Up":
                      case "Ctrl-Down":
                        break;

                      case "Ctrl-Shift-Del":
                      case "Ctrl-Del":
                        n.ctrlDeleteDir(g);
                        break;

                      case "Shift-Del":
                      case "Del":
                        n.deleteForward();
                        break;

                      case "Meta-A":
                      case "Ctrl-A":
                        for (n.notify("move").cursor.insAtRightEnd(n.root); r[m]; ) n.selectLeft();
                        break;

                      default:
                        return;
                    }
                    e.preventDefault(), n.scrollHoriz();
                }, t.moveOutOf = t.moveTowards = t.deleteOutOf = t.deleteTowards = t.unselectInto = t.selectOutOf = t.selectTowards = function() {
                    p("overridden or never called on this node");
                };
            }), O.open(function(t) {
                function e(t, e) {
                    var n = t.notify("upDown").cursor, r = e + "Into", i = e + "OutOf";
                    return n[g][r] ? n.insAtLeftEnd(n[g][r]) : n[m][r] ? n.insAtRightEnd(n[m][r]) : n.parent.bubble(function(t) {
                        var e = t[i];
                        if (e && ("function" == typeof e && (e = t[i](n)), e instanceof x && n.jumpUpDown(t, e), 
                        !0 !== e)) return !1;
                    }), t;
                }
                this.onNotify(function(t) {
                    "move" !== t && "upDown" !== t || this.show().clearSelection();
                }), t.escapeDir = function(t, e, n) {
                    v(t);
                    var r = this.cursor;
                    if (r.parent !== this.root && n.preventDefault(), r.parent !== this.root) return r.parent.moveOutOf(t, r), 
                    this.notify("move");
                }, D.leftRightIntoCmdGoes = function(t) {
                    if (t && "up" !== t && "down" !== t) throw '"up" or "down" required for leftRightIntoCmdGoes option, got "' + t + '"';
                    return t;
                }, t.moveDir = function(t) {
                    v(t);
                    var e = this.cursor, n = e.options.leftRightIntoCmdGoes;
                    return e.selection ? e.insDirOf(t, e.selection.ends[t]) : e[t] ? e[t].moveTowards(t, e, n) : e.parent.moveOutOf(t, e, n), 
                    this.notify("move");
                }, t.moveLeft = function() {
                    return this.moveDir(m);
                }, t.moveRight = function() {
                    return this.moveDir(g);
                }, t.moveUp = function() {
                    return e(this, "up");
                }, t.moveDown = function() {
                    return e(this, "down");
                }, this.onNotify(function(t) {
                    "upDown" !== t && (this.upDownCache = {});
                }), this.onNotify(function(t) {
                    "edit" === t && this.show().deleteSelection();
                }), t.deleteDir = function(t) {
                    v(t);
                    var e = this.cursor, n = e.selection;
                    return this.notify("edit"), n || (e[t] ? e[t].deleteTowards(t, e) : e.parent.deleteOutOf(t, e)), 
                    e[m].siblingDeleted && e[m].siblingDeleted(e.options, g), e[g].siblingDeleted && e[g].siblingDeleted(e.options, m), 
                    e.parent.bubble("reflow"), this;
                }, t.ctrlDeleteDir = function(t) {
                    v(t);
                    var e = this.cursor;
                    return !e[t] || e.selection ? this.deleteDir(t) : (this.notify("edit"), t === m ? q(e.parent.ends[m], e[m]).remove() : q(e[g], e.parent.ends[g]).remove(), 
                    e.insAtDirEnd(t, e.parent), e[m].siblingDeleted && e[m].siblingDeleted(e.options, g), 
                    e[g].siblingDeleted && e[g].siblingDeleted(e.options, m), e.parent.bubble("reflow"), 
                    this);
                }, t.backspace = function() {
                    return this.deleteDir(m);
                }, t.deleteForward = function() {
                    return this.deleteDir(g);
                }, this.onNotify(function(t) {
                    "select" !== t && this.endSelection();
                }), t.selectDir = function(t) {
                    var e = this.notify("select").cursor, n = e.selection;
                    v(t), e.anticursor || e.startSelection();
                    var r = e[t];
                    r ? n && n.ends[t] === r && e.anticursor[-t] !== r ? r.unselectInto(t, e) : r.selectTowards(t, e) : e.parent.selectOutOf(t, e), 
                    e.clearSelection(), e.select() || e.show();
                }, t.selectLeft = function() {
                    return this.selectDir(m);
                }, t.selectRight = function() {
                    return this.selectDir(g);
                };
            }), O.open(function(n) {
                E.p.substituteTextarea = function() {
                    return y("<textarea autocapitalize=off autocomplete=off autocorrect=off spellcheck=false x-palm-disable-ste-all=true />")[0];
                }, n.createTextarea = function() {
                    var t = this.textareaSpan = y('<span class="mq-textarea"></span>'), e = this.options.substituteTextarea();
                    if (!e.nodeType) throw "substituteTextarea() must return a DOM element, got " + e;
                    e = this.textarea = y(e).appendTo(t);
                    var n = this;
                    n.cursor.selectionChanged = function() {
                        n.selectionChanged();
                    };
                }, n.selectionChanged = function() {
                    var e = this;
                    rt(e.container[0]), e.textareaSelectionTimeout === t && (e.textareaSelectionTimeout = setTimeout(function() {
                        e.setTextareaSelection();
                    }));
                }, n.setTextareaSelection = function() {
                    this.textareaSelectionTimeout = t;
                    var e = "";
                    this.cursor.selection && (e = this.cursor.selection.join("latex"), this.options.statelessClipboard && (e = "$" + e + "$")), 
                    this.selectFn(e);
                }, n.staticMathTextareaEvents = function() {
                    var t = this, n = (t.root, t.cursor), r = t.textarea, i = t.textareaSpan;
                    function s() {
                        i.detach(), t.blurred = !0;
                    }
                    this.container.prepend(e('<span class="mq-selectable">').text("$" + t.exportLatex() + "$")), 
                    t.blurred = !0, r.bind("cut paste", !1).bind("copy", function() {
                        t.setTextareaSelection();
                    }).focus(function() {
                        t.blurred = !1;
                    }).blur(function() {
                        n.selection && n.selection.clear(), setTimeout(s);
                    }), t.selectFn = function(t) {
                        r.val(t), t && r.select();
                    };
                }, E.p.substituteKeyboardEvents = M, n.editablesTextareaEvents = function() {
                    var t = this, e = t.textarea, n = t.textareaSpan, r = this.options.substituteKeyboardEvents(e, this);
                    this.selectFn = function(t) {
                        r.select(t);
                    }, this.container.prepend(n), this.focusBlurEvents();
                }, n.typedText = function(t) {
                    if ("\n" === t) return this.handle("enter");
                    var e = this.notify().cursor;
                    e.parent.write(e, t), this.scrollHoriz();
                }, n.cut = function() {
                    var t = this, e = t.cursor;
                    e.selection && setTimeout(function() {
                        t.notify("edit"), e.parent.bubble("reflow");
                    });
                }, n.copy = function() {
                    this.setTextareaSelection();
                }, n.paste = function(t) {
                    this.options.statelessClipboard && (t = "$" === t.slice(0, 1) && "$" === t.slice(-1) ? t.slice(1, -1) : "\\text{" + t + "}"), 
                    this.cursor && this.cursor.parent && this.cursor.parent.jQ.is(".mq-text-mode") ? this.typedText(t) : this.writeLatex(t).cursor.show();
                };
            });
            var P = function() {
                function t(t) {
                    var e = X();
                    return t.adopt(e, 0, 0), e;
                }
                function e(t) {
                    for (var e = t[0] || X(), n = 1; n < t.length; n += 1) t[n].children().adopt(e, e.ends[g], 0);
                    return e;
                }
                var n = z.string, r = z.regex, i = z.letter, s = z.any, o = z.optWhitespace, a = z.succeed, l = z.fail, c = i.map(function(t) {
                    return Dt(t);
                }), u = r(/^[^${}\\_^]/).map(function(t) {
                    return U(t);
                }), f = r(/^[^\\a-eg-zA-Z]/).or(n("\\").then(r(/^[a-z]+/i).or(r(/^\s+/).result(" ")).or(s))).then(function(t) {
                    var e = T[t];
                    return e ? e(t).parser() : l("unknown command: \\" + t);
                }).or(c).or(u), h = n("{").then(function() {
                    return d;
                }).skip(n("}")), p = o.then(h.or(f.map(t))), d = p.many().map(e).skip(o), m = n("[").then(p.then(function(t) {
                    return "]" !== t.join("latex") ? a(t) : l();
                }).many().map(e).skip(o)).skip(n("]")), v = d;
                return v.block = p, v.optBlock = m, v;
            }();
            O.open(function(t, e) {
                t.exportLatex = function() {
                    return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi, "$1");
                }, t.writeLatex = function(t) {
                    var e = this.notify("edit").cursor, n = z.all, r = z.eof, i = P.skip(r).or(n.result(!1)).parse(t);
                    i && !i.isEmpty() && (i.children().adopt(e.parent, e[m], e[g]), i.jQize().insertBefore(e.jQ), 
                    e[m] = i.ends[g], i.finalizeInsert(e.options, e), i.ends[g][g].siblingCreated && i.ends[g][g].siblingCreated(e.options, m), 
                    i.ends[m][m].siblingCreated && i.ends[m][m].siblingCreated(e.options, g), e.parent.bubble("reflow"));
                    return this;
                }, t.renderLatexMath = function(t) {
                    var e = this.root, n = this.cursor, r = z.all, i = z.eof, s = P.skip(i).or(r.result(!1)).parse(t);
                    e.eachChild("postOrder", "dispose"), e.ends[m] = e.ends[g] = 0, s && s.children().adopt(e, 0, 0);
                    var o = e.jQ;
                    if (s) {
                        var a = s.join("html");
                        o.html(a), e.jQize(o.children()), e.finalizeInsert(n.options);
                    } else o.empty();
                    delete n.selection, n.insAtRightEnd(e);
                }, t.renderLatexText = function(t) {
                    var e = this.root, n = this.cursor;
                    e.jQ.children().slice(1).remove(), e.eachChild("postOrder", "dispose"), e.ends[m] = e.ends[g] = 0, 
                    delete n.selection, n.show().insAtRightEnd(e);
                    var r = z.regex, i = z.string, s = z.eof, o = z.all, a = i("$").then(P).skip(i("$").or(s)).map(function(t) {
                        var e = J(n);
                        e.createBlocks();
                        var r = e.ends[m];
                        return t.children().adopt(r, 0, 0), e;
                    }), l = i("\\$").result("$").or(r(/^[^$]/)).map(U), c = a.or(l).many().skip(s).or(o.result(!1)).parse(t);
                    if (c) {
                        for (var u = 0; u < c.length; u += 1) c[u].adopt(e, e.ends[g], 0);
                        e.jQize().appendTo(e.jQ), e.finalizeInsert(n.options);
                    }
                };
            }), O.open(function(t) {
                t.scrollHoriz = function() {
                    var t = this.cursor, e = t.selection, n = this.root.jQ[0].getBoundingClientRect();
                    if (e) {
                        var r = e.jQ[0].getBoundingClientRect(), i = r.left - (n.left + 20), s = r.right - (n.right - 20);
                        if (e.ends[m] === t[g]) if (i < 0) a = i; else {
                            if (!(s > 0)) return;
                            if (r.left - s < n.left + 20) a = i; else a = s;
                        } else if (s > 0) a = s; else {
                            if (!(i < 0)) return;
                            if (r.right - i > n.right - 20) a = s; else a = i;
                        }
                    } else {
                        var o = t.jQ[0].getBoundingClientRect().left;
                        if (o > n.right - 20) var a = o - (n.right - 20); else {
                            if (!(o < n.left + 20)) return;
                            var a = o - (n.left + 20);
                        }
                    }
                    this.root.jQ.stop().animate({
                        scrollLeft: "+=" + a
                    }, 100);
                };
            });
            var F = d(x, function(t, e) {
                t.finalizeInsert = function(t, e) {
                    var n = this;
                    n.postOrder("finalizeTree", t), n.postOrder("contactWeld", e), n.postOrder("blur"), 
                    n.postOrder("reflow"), n[g].siblingCreated && n[g].siblingCreated(t, m), n[m].siblingCreated && n[m].siblingCreated(t, g), 
                    n.bubble("reflow");
                };
            }), $ = d(F, function(t, e) {
                t.init = function(t, n, r) {
                    var i = this;
                    e.init.call(i), i.ctrlSeq || (i.ctrlSeq = t), n && (i.htmlTemplate = n), r && (i.textTemplate = r);
                }, t.replaces = function(t) {
                    t.disown(), this.replacedFragment = t;
                }, t.isEmpty = function() {
                    return this.foldChildren(!0, function(t, e) {
                        return t && e.isEmpty();
                    });
                }, t.parser = function() {
                    var t = this;
                    return P.block.times(t.numBlocks()).map(function(e) {
                        t.blocks = e;
                        for (var n = 0; n < e.length; n += 1) e[n].adopt(t, t.ends[g], 0);
                        return t;
                    });
                }, t.createLeftOf = function(t) {
                    var n = this, r = n.replacedFragment;
                    n.createBlocks(), e.createLeftOf.call(n, t), r && (r.adopt(n.ends[m], 0, 0), r.jQ.appendTo(n.ends[m].jQ)), 
                    n.finalizeInsert(t.options), n.placeCursor(t);
                }, t.createBlocks = function() {
                    for (var t = this, e = t.numBlocks(), n = t.blocks = Array(e), r = 0; r < e; r += 1) {
                        (n[r] = X()).adopt(t, t.ends[g], 0);
                    }
                }, t.placeCursor = function(t) {
                    t.insAtRightEnd(this.foldChildren(this.ends[m], function(t, e) {
                        return t.isEmpty() ? t : e;
                    }));
                }, t.moveTowards = function(t, e, n) {
                    var r = n && this[n + "Into"];
                    e.insAtDirEnd(-t, r || this.ends[-t]);
                }, t.deleteTowards = function(t, e) {
                    this.isEmpty() ? e[t] = this.remove()[t] : this.moveTowards(t, e, null);
                }, t.selectTowards = function(t, e) {
                    e[-t] = this, e[t] = this[t];
                }, t.selectChildren = function() {
                    return j(this, this);
                }, t.unselectInto = function(t, e) {
                    e.insAtDirEnd(-t, e.anticursor.ancestors[this.id]);
                }, t.seek = function(t, e) {
                    function n(t) {
                        var e = {};
                        return e[m] = t.jQ.offset().left, e[g] = e[m] + t.jQ.outerWidth(), e;
                    }
                    var r = this, i = n(r);
                    if (t < i[m]) return e.insLeftOf(r);
                    if (t > i[g]) return e.insRightOf(r);
                    var s = i[m];
                    r.eachChild(function(o) {
                        var a = n(o);
                        return t < a[m] ? (t - s < a[m] - t ? o[m] ? e.insAtRightEnd(o[m]) : e.insLeftOf(r) : e.insAtLeftEnd(o), 
                        !1) : t > a[g] ? void (o[g] ? s = a[g] : i[g] - t < t - a[g] ? e.insRightOf(r) : e.insAtRightEnd(o)) : (o.seek(t, e), 
                        !1);
                    });
                }, t.numBlocks = function() {
                    var t = this.htmlTemplate.match(/&\d+/g);
                    return t ? t.length : 0;
                }, t.html = function() {
                    var t = this, e = t.blocks, n = " mathquill-command-id=" + t.id, r = t.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
                    p("no unmatched angle brackets", r.join("") === this.htmlTemplate);
                    for (var i = 0, s = r[0]; s; s = r[i += 1]) if ("/>" === s.slice(-2)) r[i] = s.slice(0, -2) + n + "/>"; else if ("<" === s.charAt(0)) {
                        p("not an unmatched top-level close tag", "/" !== s.charAt(1)), r[i] = s.slice(0, -1) + n + ">";
                        var o = 1;
                        do {
                            p("no missing close tags", s = r[i += 1]), "</" === s.slice(0, 2) ? o -= 1 : "<" === s.charAt(0) && "/>" !== s.slice(-2) && (o += 1);
                        } while (o > 0);
                    }
                    return r.join("").replace(/>&(\d+)/g, function(t, n) {
                        return " mathquill-block-id=" + e[n].id + ">" + e[n].join("html");
                    });
                }, t.latex = function() {
                    return this.foldChildren(this.ctrlSeq, function(t, e) {
                        return t + "{" + (e.latex() || " ") + "}";
                    });
                }, t.textTemplate = [ "" ], t.text = function() {
                    var t = this, e = 0;
                    return t.foldChildren(t.textTemplate[e], function(n, r) {
                        e += 1;
                        var i = r.text();
                        return n && "(" === t.textTemplate[e] && "(" === i[0] && ")" === i.slice(-1) ? n + i.slice(1, -1) + t.textTemplate[e] : n + r.text() + (t.textTemplate[e] || "");
                    });
                };
            }), W = d($, function(t, e) {
                t.init = function(t, n, r) {
                    r || (r = t && t.length > 1 ? t.slice(1) : t), e.init.call(this, t, n, [ r ]);
                }, t.parser = function() {
                    return z.succeed(this);
                }, t.numBlocks = function() {
                    return 0;
                }, t.replaces = function(t) {
                    t.remove();
                }, t.createBlocks = a, t.moveTowards = function(t, e) {
                    e.jQ.insDirOf(t, this.jQ), e[-t] = this, e[t] = this[t];
                }, t.deleteTowards = function(t, e) {
                    e[t] = this.remove()[t];
                }, t.seek = function(t, e) {
                    t - this.jQ.offset().left < this.jQ.outerWidth() / 2 ? e.insLeftOf(this) : e.insRightOf(this);
                }, t.latex = function() {
                    return this.ctrlSeq;
                }, t.text = function() {
                    return this.textTemplate;
                }, t.placeCursor = a, t.isEmpty = function() {
                    return !0;
                };
            }), U = d(W, function(t, e) {
                t.init = function(t, n) {
                    e.init.call(this, t, "<span>" + (n || t) + "</span>");
                };
            }), V = d(W, function(t, e) {
                t.init = function(t, n, r) {
                    e.init.call(this, t, '<span class="mq-binary-operator">' + n + "</span>", r);
                };
            }), X = d(F, function(t, e) {
                t.join = function(t) {
                    return this.foldChildren("", function(e, n) {
                        return e + n[t]();
                    });
                }, t.html = function() {
                    return this.join("html");
                }, t.latex = function() {
                    return this.join("latex");
                }, t.text = function() {
                    return this.ends[m] === this.ends[g] && 0 !== this.ends[m] ? this.ends[m].text() : this.join("text");
                }, t.keystroke = function(t, n, r) {
                    return !r.options.spaceBehavesLikeTab || "Spacebar" !== t && "Shift-Spacebar" !== t ? e.keystroke.apply(this, arguments) : (n.preventDefault(), 
                    void r.escapeDir("Shift-Spacebar" === t ? m : g, t, n));
                }, t.moveOutOf = function(t, e, n) {
                    !(n && this.parent[n + "Into"]) && this[t] ? e.insAtDirEnd(-t, this[t]) : e.insDirOf(t, this.parent);
                }, t.selectOutOf = function(t, e) {
                    e.insDirOf(t, this.parent);
                }, t.deleteOutOf = function(t, e) {
                    e.unwrapGramp();
                }, t.seek = function(t, e) {
                    var n = this.ends[g];
                    if (!n || n.jQ.offset().left + n.jQ.outerWidth() < t) return e.insAtRightEnd(this);
                    if (t < this.ends[m].jQ.offset().left) return e.insAtLeftEnd(this);
                    for (;t < n.jQ.offset().left; ) n = n[m];
                    return n.seek(t, e);
                }, t.chToCmd = function(t, e) {
                    var n;
                    return t.match(/^[a-eg-zA-Z]$/) ? Dt(t) : /^\d$/.test(t) ? St(t) : e && e.typingSlashWritesDivisionSymbol && "/" === t ? T["\xf7"](t) : e && e.typingAsteriskWritesTimesSymbol && "*" === t ? T["\xd7"](t) : (n = C[t] || T[t]) ? n(t) : U(t);
                }, t.write = function(t, e) {
                    var n = this.chToCmd(e, t.options);
                    t.selection && n.replaces(t.replaceSelection()), n.createLeftOf(t.show());
                }, t.focus = function() {
                    return this.jQ.addClass("mq-hasCursor"), this.jQ.removeClass("mq-empty"), this;
                }, t.blur = function() {
                    return this.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.jQ.addClass("mq-empty"), 
                    this;
                };
            });
            S.StaticMath = function(t) {
                return d(t.AbstractMathQuill, function(e, n) {
                    this.RootBlock = X, e.__mathquillify = function(t, e) {
                        return this.config(t), n.__mathquillify.call(this, "mq-math-mode"), this.__controller.delegateMouseEvents(), 
                        this.__controller.staticMathTextareaEvents(), this;
                    }, e.init = function() {
                        n.init.apply(this, arguments), this.__controller.root.postOrder("registerInnerField", this.innerFields = [], t.MathField);
                    }, e.latex = function() {
                        var e = n.latex.apply(this, arguments);
                        return arguments.length > 0 && this.__controller.root.postOrder("registerInnerField", this.innerFields = [], t.MathField), 
                        e;
                    };
                });
            };
            var G = d(X, B);
            S.MathField = function(t) {
                return d(t.EditableField, function(t, e) {
                    this.RootBlock = G, t.__mathquillify = function(t, n) {
                        return this.config(t), n > 1 && (this.__controller.root.reflow = a), e.__mathquillify.call(this, "mq-editable-field mq-math-mode"), 
                        delete this.__controller.root.reflow, this;
                    };
                });
            };
            var K = d(x, function(t, n) {
                function r(t) {
                    t.jQ[0].normalize();
                    var n = t.jQ[0].firstChild;
                    if (n && (e(n).is(".mq-selection") && (n = n.firstChild), n)) {
                        p("only node in TextBlock span is Text node", 3 === n.nodeType);
                        var r = Y(n.data);
                        return r.jQadd(n), t.children().disown(), r.adopt(t, 0, 0);
                    }
                }
                t.ctrlSeq = "\\text", t.replaces = function(t) {
                    t instanceof q ? this.replacedText = t.remove().jQ.text() : "string" == typeof t && (this.replacedText = t);
                }, t.jQadd = function(t) {
                    n.jQadd.call(this, t), this.ends[m] && this.ends[m].jQadd(this.jQ[0].firstChild);
                }, t.createLeftOf = function(t) {
                    var e = this;
                    if (n.createLeftOf.call(this, t), e[g].siblingCreated && e[g].siblingCreated(t.options, m), 
                    e[m].siblingCreated && e[m].siblingCreated(t.options, g), e.bubble("reflow"), t.insAtRightEnd(e), 
                    e.replacedText) for (var r = 0; r < e.replacedText.length; r += 1) e.write(t, e.replacedText.charAt(r));
                }, t.parser = function() {
                    var t = this, e = z.string, n = z.regex;
                    return z.optWhitespace.then(e("{")).then(n(/^[^}]*/)).skip(e("}")).map(function(e) {
                        return 0 === e.length ? q() : (Y(e).adopt(t, 0, 0), t);
                    });
                }, t.textContents = function() {
                    return this.foldChildren("", function(t, e) {
                        return t + e.text;
                    });
                }, t.text = function() {
                    return '"' + this.textContents() + '"';
                }, t.latex = function() {
                    var t = this.textContents();
                    return 0 === t.length ? "" : "\\text{" + t.replace(/\\/g, "\\backslash ").replace(/[{}]/g, "\\$&") + "}";
                }, t.html = function() {
                    var t = e('<span class="mq-text-mode" mathquill-command-id=' + this.id + "></span>");
                    return t.text(this.textContents()), t[0].outerHTML;
                }, t.moveTowards = function(t, e) {
                    e.insAtDirEnd(-t, this);
                }, t.moveOutOf = function(t, e) {
                    e.insDirOf(t, this);
                }, t.unselectInto = t.moveTowards, t.selectTowards = $.prototype.selectTowards, 
                t.deleteTowards = $.prototype.deleteTowards, t.selectOutOf = function(t, e) {
                    e.insDirOf(t, this);
                }, t.deleteOutOf = function(t, e) {
                    this.isEmpty() && e.insRightOf(this);
                }, t.write = function(t, e) {
                    if (t.show().deleteSelection(), "$" !== e) t[m] ? t[m].appendText(e) : Y(e).createLeftOf(t); else if (this.isEmpty()) t.insRightOf(this), 
                    U("\\$", "$").createLeftOf(t); else if (t[g]) if (t[m]) {
                        var r = K(), i = this.ends[m];
                        i.disown().jQ.detach(), i.adopt(r, 0, 0), t.insLeftOf(this), n.createLeftOf.call(r, t);
                    } else t.insLeftOf(this); else t.insRightOf(this);
                }, t.seek = function(t, e) {
                    e.hide();
                    var n = r(this), i = this.jQ.width() / this.text.length, s = Math.round((t - this.jQ.offset().left) / i);
                    s <= 0 ? e.insAtLeftEnd(this) : s >= n.text.length ? e.insAtRightEnd(this) : e.insLeftOf(n.splitRight(s));
                    for (var o = t - e.show().offset().left, a = o && o < 0 ? m : g, l = a; e[a] && o * l > 0; ) e[a].moveTowards(a, e), 
                    l = o, o = t - e.offset().left;
                    if (a * o < -a * l && e[-a].moveTowards(-a, e), e.anticursor) {
                        if (e.anticursor.parent === this) {
                            var c = e[m] && e[m].text.length;
                            if (this.anticursorPosition === c) e.anticursor = b.copy(e); else {
                                if (this.anticursorPosition < c) {
                                    var u = e[m].splitRight(this.anticursorPosition);
                                    e[m] = u;
                                } else u = e[g].splitRight(this.anticursorPosition - c);
                                e.anticursor = b(this, u[m], u);
                            }
                        }
                    } else this.anticursorPosition = e[m] && e[m].text.length;
                }, t.blur = function(t) {
                    X.prototype.blur.call(this), t && ("" === this.textContents() ? (this.remove(), 
                    t[m] === this ? t[m] = this[m] : t[g] === this && (t[g] = this[g])) : r(this));
                }, t.focus = X.prototype.focus;
            }), Y = d(x, function(t, e) {
                function n(t, e) {
                    return e.charAt(t === m ? 0 : -1 + e.length);
                }
                t.init = function(t) {
                    e.init.call(this), this.text = t;
                }, t.jQadd = function(t) {
                    this.dom = t, this.jQ = y(t);
                }, t.jQize = function() {
                    return this.jQadd(document.createTextNode(this.text));
                }, t.appendText = function(t) {
                    this.text += t, this.dom.appendData(t);
                }, t.prependText = function(t) {
                    this.text = t + this.text, this.dom.insertData(0, t);
                }, t.insTextAtDirEnd = function(t, e) {
                    v(e), e === g ? this.appendText(t) : this.prependText(t);
                }, t.splitRight = function(t) {
                    var e = Y(this.text.slice(t)).adopt(this.parent, this, this[g]);
                    return e.jQadd(this.dom.splitText(t)), this.text = this.text.slice(0, t), e;
                }, t.moveTowards = function(t, e) {
                    v(t);
                    var r = n(-t, this.text), i = this[-t];
                    return i ? i.insTextAtDirEnd(r, t) : Y(r).createDir(-t, e), this.deleteTowards(t, e);
                }, t.latex = function() {
                    return this.text;
                }, t.deleteTowards = function(t, e) {
                    this.text.length > 1 ? t === g ? (this.dom.deleteData(0, 1), this.text = this.text.slice(1)) : (this.dom.deleteData(-1 + this.text.length, 1), 
                    this.text = this.text.slice(0, -1)) : (this.remove(), this.jQ.remove(), e[t] = this[t]);
                }, t.selectTowards = function(t, e) {
                    v(t);
                    var r = e.anticursor, i = n(-t, this.text);
                    if (r[t] === this) {
                        var s = Y(i).createDir(t, e);
                        r[t] = s, e.insDirOf(t, s);
                    } else {
                        var o = this[-t];
                        if (o) o.insTextAtDirEnd(i, t); else (s = Y(i).createDir(-t, e)).jQ.insDirOf(-t, e.selection.jQ);
                        1 === this.text.length && r[-t] === this && (r[-t] = this[-t]);
                    }
                    return this.deleteTowards(t, e);
                };
            });
            function Z(t, e, n) {
                return d(K, {
                    ctrlSeq: t,
                    htmlTemplate: "<" + e + " " + n + ">&0</" + e + ">"
                });
            }
            T.text = T.textnormal = T.textrm = T.textup = T.textmd = K, T.em = T.italic = T.italics = T.emph = T.textit = T.textsl = Z("\\textit", "i", 'class="mq-text-mode"'), 
            T.strong = T.bold = T.textbf = Z("\\textbf", "b", 'class="mq-text-mode"'), T.sf = T.textsf = Z("\\textsf", "span", 'class="mq-sans-serif mq-text-mode"'), 
            T.tt = T.texttt = Z("\\texttt", "span", 'class="mq-monospace mq-text-mode"'), T.textsc = Z("\\textsc", "span", 'style="font-variant:small-caps" class="mq-text-mode"'), 
            T.uppercase = Z("\\uppercase", "span", 'style="text-transform:uppercase" class="mq-text-mode"'), 
            T.lowercase = Z("\\lowercase", "span", 'style="text-transform:lowercase" class="mq-text-mode"');
            var J = d($, function(t, e) {
                t.init = function(t) {
                    e.init.call(this, "$"), this.cursor = t;
                }, t.htmlTemplate = '<span class="mq-math-mode">&0</span>', t.createBlocks = function() {
                    e.createBlocks.call(this), this.ends[m].cursor = this.cursor, this.ends[m].write = function(t, e) {
                        "$" !== e ? X.prototype.write.call(this, t, e) : this.isEmpty() ? (t.insRightOf(this.parent), 
                        this.parent.deleteTowards(dir, t), U("\\$", "$").createLeftOf(t.show())) : t[g] ? t[m] ? X.prototype.write.call(this, t, e) : t.insLeftOf(this.parent) : t.insRightOf(this.parent);
                    };
                }, t.latex = function() {
                    return "$" + this.ends[m].latex() + "$";
                };
            }), tt = d(G, function(t, e) {
                t.keystroke = function(t) {
                    if ("Spacebar" !== t && "Shift-Spacebar" !== t) return e.keystroke.apply(this, arguments);
                }, t.write = function(t, e) {
                    var n;
                    (t.show().deleteSelection(), "$" === e) ? J(t).createLeftOf(t) : ("<" === e ? n = "&lt;" : ">" === e && (n = "&gt;"), 
                    U(e, n).createLeftOf(t));
                };
            });
            S.TextField = function(t) {
                return d(t.EditableField, function(t, e) {
                    this.RootBlock = tt, t.__mathquillify = function() {
                        return e.__mathquillify.call(this, "mq-editable-field mq-text-mode");
                    }, t.latex = function(t) {
                        return arguments.length > 0 ? (this.__controller.renderLatexText(t), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), 
                        this) : this.__controller.exportLatex();
                    };
                });
            };
            C["\\"] = d($, function(t, e) {
                t.ctrlSeq = "\\", t.replaces = function(t) {
                    this._replacedFragment = t.disown(), this.isEmpty = function() {
                        return !1;
                    };
                }, t.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>', 
                t.textTemplate = [ "\\" ], t.createBlocks = function() {
                    e.createBlocks.call(this), this.ends[m].focus = function() {
                        return this.parent.jQ.addClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.removeClass("mq-empty"), 
                        this;
                    }, this.ends[m].blur = function() {
                        return this.parent.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.addClass("mq-empty"), 
                        this;
                    }, this.ends[m].write = function(t, e) {
                        t.show().deleteSelection(), e.match(/[a-z]/i) ? U(e).createLeftOf(t) : (this.parent.renderCommand(t), 
                        "\\" === e && this.isEmpty() || t.parent.write(t, e));
                    }, this.ends[m].keystroke = function(t, n, r) {
                        return "Enter" === t || "Spacebar" === t ? (this.parent.renderCommand(r.cursor), 
                        void n.preventDefault()) : e.keystroke.apply(this, arguments);
                    };
                }, t.createLeftOf = function(t) {
                    if (e.createLeftOf.call(this, t), this._replacedFragment) {
                        var n = this.jQ[0];
                        this.jQ = this._replacedFragment.jQ.addClass("mq-blur").bind("mousedown mousemove", function(t) {
                            return y(t.target = n).trigger(t), !1;
                        }).insertBefore(this.jQ).add(this.jQ);
                    }
                }, t.latex = function() {
                    return "\\" + this.ends[m].latex() + " ";
                }, t.renderCommand = function(t) {
                    this.jQ = this.jQ.last(), this.remove(), this[g] ? t.insLeftOf(this[g]) : t.insAtRightEnd(this.parent);
                    var e = this.ends[m].latex();
                    e || (e = " ");
                    var n = T[e] || Tt[e];
                    n ? (n = n(e), this._replacedFragment && n.replaces(this._replacedFragment), n.createLeftOf(t)) : ((n = K()).replaces(e), 
                    n.createLeftOf(t), t.insRightOf(n), this._replacedFragment && this._replacedFragment.remove());
                };
            });
            var et, nt, rt = a, it = document.createElement("div").style, st = {
                transform: 1,
                WebkitTransform: 1,
                MozTransform: 1,
                OTransform: 1,
                msTransform: 1
            };
            for (var ot in st) if (ot in it) {
                nt = ot;
                break;
            }
            nt ? et = function(t, e, n) {
                t.css(nt, "scale(" + e + "," + n + ")");
            } : "filter" in it ? (rt = function(t) {
                t.className = t.className;
            }, et = function(t, e, n) {
                e /= 1 + (n - 1) / 2, t.css("fontSize", n + "em"), t.hasClass("mq-matrixed-container") || t.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>');
                var r = t.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + e + ",SizingMethod='auto expand')");
                function i() {
                    t.css("marginRight", (r.width() - 1) * (e - 1) / e + "px");
                }
                i();
                var s = setInterval(i);
                y(window).load(function() {
                    clearTimeout(s), i();
                });
            }) : et = function(t, e, n) {
                t.css("fontSize", n + "em");
            };
            var at = d($, function(t, e) {
                t.init = function(t, n, r) {
                    e.init.call(this, t, "<" + n + " " + r + ">&0</" + n + ">");
                };
            });
            T.mathrm = h(at, "\\mathrm", "span", 'class="mq-roman mq-font"'), T.mathit = h(at, "\\mathit", "i", 'class="mq-font"'), 
            T.mathbf = h(at, "\\mathbf", "b", 'class="mq-font"'), T.mathsf = h(at, "\\mathsf", "span", 'class="mq-sans-serif mq-font"'), 
            T.mathtt = h(at, "\\mathtt", "span", 'class="mq-monospace mq-font"'), T.underline = h(at, "\\underline", "span", 'class="mq-non-leaf mq-underline"'), 
            T.overline = T.bar = h(at, "\\overline", "span", 'class="mq-non-leaf mq-overline"'), 
            T.overrightarrow = h(at, "\\overrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-right"'), 
            T.overleftarrow = h(at, "\\overleftarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-left"'), 
            T.overleftrightarrow = h(at, "\\overleftrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-both"'), 
            T.overarc = h(at, "\\overarc", "span", 'class="mq-non-leaf mq-overarc"'), T.cancel = h(at, "\\cancel", "span", 'class="mq-non-leaf mq-cancel"'), 
            T.longdiv = h(at, "\\longdiv", "span", 'class="mq-non-leaf mq-longdiv"'), T.dot = d($, function(t, e) {
                t.init = function() {
                    e.init.call(this, "\\dot", '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner"><span class="mq-dot-recurring">&#x2d9;</span><span class="mq-empty-box">&0</span></span></span>');
                };
            }), T.stackrel = d($, function(t, e) {
                t.ctrlSeq = "\\stackrel", t.htmlTemplate = '<span class="mq-stackrel mq-non-leaf"><span class="mq-stackrel-top">&0</span><span class="mq-stackrel-bottom">&1</span></span>', 
                t.textTemplate = [ "(", ")/(", ")" ], t.finalizeTree = function() {
                    this.upInto = this.ends[g].upOutOf = this.ends[m], this.downInto = this.ends[m].downOutOf = this.ends[g];
                };
            });
            T.textcolor = d($, function(t, e) {
                t.setColor = function(t) {
                    this.color = t, this.htmlTemplate = '<span class="mq-textcolor" style="color:' + t + '">&0</span>';
                }, t.latex = function() {
                    return "\\textcolor{" + this.color + "}{" + this.blocks[0].latex() + "}";
                }, t.parser = function() {
                    var t = this, n = z.optWhitespace, r = z.string, i = z.regex;
                    return n.then(r("{")).then(i(/^[#\w\s.,()%-]*/)).skip(r("}")).then(function(n) {
                        return t.setColor(n), e.parser.call(t);
                    });
                }, t.isStyleBlock = function() {
                    return !0;
                };
            }), T.class = d($, function(t, e) {
                t.setClass = function(t) {
                    this.cls = t || "", this.htmlTemplate = '<span class="mq-class ' + t + '">&0</span>';
                }, t.parser = function() {
                    var t = this, n = z.string, r = z.regex;
                    return z.optWhitespace.then(n("{")).then(r(/^[-\w\s\\\xA0-\xFF]*/)).skip(n("}")).then(function(n) {
                        return t.setClass(n), e.parser.call(t);
                    });
                }, t.latex = function() {
                    return "\\class{" + this.cls + "}{" + this.blocks[0].latex() + "}";
                }, t.isStyleBlock = function() {
                    return !0;
                };
            });
            var lt = d($, function(t, e) {
                t.ctrlSeq = "_{...}^{...}", t.createLeftOf = function(t) {
                    if (this.replacedFragment || t[m] || !t.options.supSubsRequireOperand) return e.createLeftOf.apply(this, arguments);
                }, t.contactWeld = function(t) {
                    for (var e = m; e; e = e === m && g) if (this[e] instanceof lt) {
                        for (var n = "sub"; n; n = "sub" === n && "sup") {
                            var r = this[n], i = this[e][n];
                            if (r) {
                                if (i) if (r.isEmpty()) o = b(i, 0, i.ends[m]); else {
                                    r.jQ.children().insAtDirEnd(-e, i.jQ);
                                    var s = r.children().disown(), o = b(i, s.ends[g], i.ends[m]);
                                    e === m ? s.adopt(i, i.ends[g], 0) : s.adopt(i, 0, i.ends[m]);
                                } else this[e].addBlock(r.disown());
                                this.placeCursor = function(t, n) {
                                    return function(r) {
                                        r.insAtDirEnd(-e, t || n);
                                    };
                                }(i, r);
                            }
                        }
                        this.remove(), t && t[m] === this && (e === g && o ? o[m] ? t.insRightOf(o[m]) : t.insAtLeftEnd(o.parent) : t.insRightOf(this[e]));
                        break;
                    }
                }, E.p.charsThatBreakOutOfSupSub = "", t.finalizeTree = function() {
                    this.ends[m].write = function(t, e) {
                        if (t.options.autoSubscriptNumerals && this === this.parent.sub) {
                            if ("_" === e) return;
                            var n = this.chToCmd(e, t.options);
                            return n instanceof W ? t.deleteSelection() : t.clearSelection().insRightOf(this.parent), 
                            n.createLeftOf(t.show());
                        }
                        t[m] && !t[g] && !t.selection && t.options.charsThatBreakOutOfSupSub.indexOf(e) > -1 && t.insRightOf(this.parent), 
                        X.p.write.apply(this, arguments);
                    };
                }, t.moveTowards = function(t, n, r) {
                    n.options.autoSubscriptNumerals && !this.sup ? n.insDirOf(t, this) : e.moveTowards.apply(this, arguments);
                }, t.deleteTowards = function(t, n) {
                    if (n.options.autoSubscriptNumerals && this.sub) {
                        var r = this.sub.ends[-t];
                        r instanceof W ? r.remove() : r && r.deleteTowards(t, n.insAtDirEnd(-t, this.sub)), 
                        this.sub.isEmpty() && (this.sub.deleteOutOf(m, n.insAtLeftEnd(this.sub)), this.sup && n.insDirOf(-t, this));
                    } else e.deleteTowards.apply(this, arguments);
                }, t.latex = function() {
                    function t(t, e) {
                        var n = e && e.latex();
                        return e ? t + (1 === n.length ? n : "{" + (n || " ") + "}") : "";
                    }
                    return t("_", this.sub) + t("^", this.sup);
                }, t.addBlock = function(t) {
                    "sub" === this.supsub ? (this.sup = this.upInto = this.sub.upOutOf = t, t.adopt(this, this.sub, 0).downOutOf = this.sub, 
                    t.jQ = y('<span class="mq-sup"/>').append(t.jQ.children()).attr(r, t.id).prependTo(this.jQ)) : (this.sub = this.downInto = this.sup.downOutOf = t, 
                    t.adopt(this, 0, this.sup).upOutOf = this.sup, t.jQ = y('<span class="mq-sub"></span>').append(t.jQ.children()).attr(r, t.id).appendTo(this.jQ.removeClass("mq-sup-only")), 
                    this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>'));
                    for (var e = 0; e < 2; e += 1) !function(t, e, n, r) {
                        t[e].deleteOutOf = function(i, s) {
                            if (s.insDirOf(this[i] ? -i : i, this.parent), !this.isEmpty()) {
                                var o = this.ends[i];
                                this.children().disown().withDirAdopt(i, s.parent, s[i], s[-i]).jQ.insDirOf(-i, s.jQ), 
                                s[-i] = o;
                            }
                            t.supsub = n, delete t[e], delete t[r + "Into"], t[n][r + "OutOf"] = ct, delete t[n].deleteOutOf, 
                            "sub" === e && y(t.jQ.addClass("mq-sup-only")[0].lastChild).remove(), this.remove();
                        };
                    }(this, "sub sup".split(" ")[e], "sup sub".split(" ")[e], "down up".split(" ")[e]);
                }, t.reflow = function() {
                    var t = this.jQ, e = t.prev();
                    if (e.length) {
                        var n = t.children(".mq-sup");
                        if (n.length) {
                            var r = parseInt(n.css("font-size")), i = n.offset().top + n.height() - e.offset().top - .7 * r, s = parseInt(n.css("margin-bottom"));
                            n.css("margin-bottom", s + i);
                        }
                    }
                };
            });
            function ct(t) {
                var e = this.parent, n = t;
                do {
                    if (n[g]) return t.insLeftOf(e);
                    n = n.parent.parent;
                } while (n !== e);
                t.insRightOf(e);
            }
            T.subscript = T._ = d(lt, function(t, e) {
                t.supsub = "sub", t.htmlTemplate = '<span class="mq-supsub mq-non-leaf"><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203;</span></span>', 
                t.textTemplate = [ "_" ], t.finalizeTree = function() {
                    this.downInto = this.sub = this.ends[m], this.sub.upOutOf = ct, e.finalizeTree.call(this);
                };
            }), T.superscript = T.supscript = T["^"] = d(lt, function(t, e) {
                t.supsub = "sup", t.htmlTemplate = '<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">&0</span></span>', 
                t.textTemplate = [ "^" ], t.finalizeTree = function() {
                    this.upInto = this.sup = this.ends[g], this.sup.downOutOf = ct, e.finalizeTree.call(this);
                };
            });
            var ut = d($, function(t, e) {
                t.init = function(t, e) {
                    var n = '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' + e + '</big><span class="mq-from"><span>&0</span></span></span>';
                    W.prototype.init.call(this, t, n);
                }, t.createLeftOf = function(t) {
                    e.createLeftOf.apply(this, arguments), t.options.sumStartsWithNEquals && (Dt("n").createLeftOf(t), 
                    Pt().createLeftOf(t));
                }, t.latex = function() {
                    function t(t) {
                        return 1 === t.length ? t : "{" + (t || " ") + "}";
                    }
                    return this.ctrlSeq + "_" + t(this.ends[m].latex()) + "^" + t(this.ends[g].latex());
                }, t.parser = function() {
                    for (var t = z.string, e = z.optWhitespace, n = z.succeed, r = P.block, i = this, s = i.blocks = [ X(), X() ], o = 0; o < s.length; o += 1) s[o].adopt(i, i.ends[g], 0);
                    return e.then(t("_").or(t("^"))).then(function(t) {
                        var e = s["_" === t ? 0 : 1];
                        return r.then(function(t) {
                            return t.children().adopt(e, e.ends[g], 0), n(i);
                        });
                    }).many().result(i);
                }, t.finalizeTree = function() {
                    this.downInto = this.ends[m], this.upInto = this.ends[g], this.ends[m].upOutOf = this.ends[g], 
                    this.ends[g].downOutOf = this.ends[m];
                };
            });
            T["\u2211"] = T.sum = T.summation = h(ut, "\\sum ", "&sum;"), T["\u220f"] = T.prod = T.product = h(ut, "\\prod ", "&prod;"), 
            T.coprod = T.coproduct = h(ut, "\\coprod ", "&#8720;"), T["\u222b"] = T.int = T.integral = d(ut, function(t, e) {
                t.init = function() {
                    var t = '<span class="mq-int mq-non-leaf"><big>&int;</big><span class="mq-supsub mq-non-leaf"><span class="mq-sup"><span class="mq-sup-inner">&1</span></span><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203</span></span></span>';
                    W.prototype.init.call(this, "\\int ", t);
                }, t.createLeftOf = $.p.createLeftOf;
            });
            var ft = d($, function(t, e) {
                t.init = function(t, e) {
                    var n = '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' + e + '</big><span class="mq-from"><span>&0</span></span></span>';
                    W.prototype.init.call(this, t, n);
                }, t.createLeftOf = function(t) {
                    e.createLeftOf.apply(this, arguments), t.options.sumStartsWithNEquals && (Dt("n").createLeftOf(t), 
                    Pt().createLeftOf(t));
                }, t.latex = function() {
                    function t(t) {
                        return 1 === t.length ? t : "{" + (t || " ") + "}";
                    }
                    return this.ctrlSeq + "_" + t(this.ends[m].latex());
                }, t.parser = function() {
                    for (var t = z.string, e = z.optWhitespace, n = z.succeed, r = P.block, i = this, s = i.blocks = [ X() ], o = 0; o < s.length; o += 1) s[o].adopt(i, i.ends[g], 0);
                    return e.then(t("_").or(t("^"))).then(function(t) {
                        var e = s["_" === t ? 0 : 1];
                        return r.then(function(t) {
                            return t.children().adopt(e, e.ends[g], 0), n(i);
                        });
                    }).many().result(i);
                }, t.finalizeTree = function() {
                    this.downInto = this.ends[m], this.upInto = this.ends[g], this.ends[m].upOutOf = this.ends[g], 
                    this.ends[g].downOutOf = this.ends[m];
                };
            });
            T.lim = d(ft, function(t, e) {
                t.init = function() {
                    var t = '<span class="mq-stackrel mq-non-leaf"><span class="mq-supsub mq-non-leaf"><span class="mq-sup" style="text-align: center"><span class="mq-sup-inner">lim</span></span><span class="mq-sub" style="text-align: center">&0</span><span style="display:inline-block;width:0">&#8203</span></span></span>';
                    W.prototype.init.call(this, "\\lim ", t);
                };
            });
            var ht = T.frac = T.dfrac = T.cfrac = T.fraction = d($, function(t, e) {
                t.ctrlSeq = "\\frac", t.htmlTemplate = '<span class="mq-fraction mq-non-leaf"><span class="mq-numerator">&0</span><span class="mq-denominator">&1</span><span style="display:inline-block;width:0">&#8203;</span></span>', 
                t.textTemplate = [ "(", ")/(", ")" ], t.finalizeTree = function() {
                    this.upInto = this.ends[g].upOutOf = this.ends[m], this.downInto = this.ends[m].downOutOf = this.ends[g];
                };
            }), pt = T.over = C["/"] = d(ht, function(t, e) {
                t.createLeftOf = function(t) {
                    if (!this.replacedFragment) {
                        for (var n = t[m]; n && !(n instanceof V || n instanceof (T.text || a) || n instanceof ut || "\\ " === n.ctrlSeq || /^[,;:]$/.test(n.ctrlSeq)); ) n = n[m];
                        n instanceof ut && n[g] instanceof lt && (n = n[g])[g] instanceof lt && n[g].ctrlSeq != n.ctrlSeq && (n = n[g]), 
                        n !== t[m] && (this.replaces(q(n[g] || t.parent.ends[m], t[m])), t[m] = n);
                    }
                    e.createLeftOf.call(this, t);
                };
            }), dt = T.sqrt = T["\u221a"] = d($, function(t, e) {
                t.ctrlSeq = "\\sqrt", t.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem">&0</span></span>', 
                t.textTemplate = [ "sqrt(", ")" ], t.parser = function() {
                    return P.optBlock.then(function(t) {
                        return P.block.map(function(e) {
                            var n = mt();
                            return n.blocks = [ t, e ], t.adopt(n, 0, 0), e.adopt(n, t, 0), n;
                        });
                    }).or(e.parser.call(this));
                }, t.reflow = function() {
                    var t = this.ends[g].jQ;
                    et(t.prev(), 1, t.innerHeight() / +t.css("fontSize").slice(0, -2) - .1);
                };
            }), mt = (T.hat = d($, function(t, e) {
                t.ctrlSeq = "\\hat", t.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-hat-prefix">^</span><span class="mq-hat-stem">&0</span></span>', 
                t.textTemplate = [ "hat(", ")" ];
            }), T.nthroot = d(dt, function(t, e) {
                t.htmlTemplate = '<sup class="mq-nthroot mq-non-leaf">&0</sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf">&1</span></span>', 
                t.textTemplate = [ "sqrt[", "](", ")" ], t.latex = function() {
                    return "\\sqrt[" + this.ends[m].latex() + "]{" + this.ends[g].latex() + "}";
                };
            })), gt = d($, function(t, e) {
                t.init = function(t, n, r) {
                    var i = '<span class="mq-non-leaf"><span class="mq-diacritic-above">' + n + '</span><span class="mq-diacritic-stem">&0</span></span>';
                    e.init.call(this, t, i, r);
                };
            });
            function vt(t, e) {
                t.jQadd = function() {
                    e.jQadd.apply(this, arguments), this.delimjQs = this.jQ.children(":first").add(this.jQ.children(":last")), 
                    this.contentjQ = this.jQ.children(":eq(1)");
                }, t.reflow = function() {
                    var t = this.contentjQ.outerHeight() / parseFloat(this.contentjQ.css("fontSize"));
                    et(this.delimjQs, s(1 + .2 * (t - 1), 1.2), 1.2 * t);
                };
            }
            T.vec = h(gt, "\\vec", "&rarr;", [ "vec(", ")" ]), T.tilde = h(gt, "\\tilde", "~", [ "tilde(", ")" ]);
            var yt = d(d($, vt), function(e, n) {
                e.init = function(e, r, i, s, o) {
                    n.init.call(this, "\\left" + s, t, [ r, i ]), this.side = e, this.sides = {}, this.sides[m] = {
                        ch: r,
                        ctrlSeq: s
                    }, this.sides[g] = {
                        ch: i,
                        ctrlSeq: o
                    };
                }, e.numBlocks = function() {
                    return 1;
                }, e.html = function() {
                    return this.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-paren' + (this.side === g ? " mq-ghost" : "") + '">' + this.sides[m].ch + '</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren' + (this.side === m ? " mq-ghost" : "") + '">' + this.sides[g].ch + "</span></span>", 
                    n.html.call(this);
                }, e.latex = function() {
                    return "\\left" + this.sides[m].ctrlSeq + this.ends[m].latex() + "\\right" + this.sides[g].ctrlSeq;
                }, e.matchBrack = function(t, e, n) {
                    return n instanceof yt && n.side && n.side !== -e && (!t.restrictMismatchedBrackets || bt[this.sides[this.side].ch] === n.sides[n.side].ch || {
                        "(": "]",
                        "[": ")"
                    }[this.sides[m].ch] === n.sides[g].ch) && n;
                }, e.closeOpposing = function(t) {
                    t.side = 0, t.sides[this.side] = this.sides[this.side], t.delimjQs.eq(this.side === m ? 0 : 1).removeClass("mq-ghost").html(this.sides[this.side].ch);
                }, e.createLeftOf = function(t) {
                    if (!this.replacedFragment) {
                        var e = t.options;
                        if ("|" === this.sides[m].ch) var r = this.matchBrack(e, g, t[g]) || this.matchBrack(e, m, t[m]) || this.matchBrack(e, 0, t.parent.parent); else r = this.matchBrack(e, -this.side, t[-this.side]) || this.matchBrack(e, -this.side, t.parent.parent);
                    }
                    if (r) {
                        var i = this.side = -r.side;
                        this.closeOpposing(r), r === t.parent.parent && t[i] && q(t[i], t.parent.ends[i], -i).disown().withDirAdopt(-i, r.parent, r, r[i]).jQ.insDirOf(i, r.jQ), 
                        r.bubble("reflow");
                    } else i = (r = this).side, r.replacedFragment ? r.side = 0 : t[-i] && (r.replaces(q(t[-i], t.parent.ends[-i], i)), 
                    t[-i] = 0), n.createLeftOf.call(r, t);
                    i === m ? t.insAtLeftEnd(r.ends[m]) : t.insRightOf(r);
                }, e.placeCursor = a, e.unwrap = function() {
                    this.ends[m].children().disown().adopt(this.parent, this, this[g]).jQ.insertAfter(this.jQ), 
                    this.remove();
                }, e.deleteSide = function(t, e, n) {
                    var r = this.parent, i = this[t], s = r.ends[t];
                    if (t === this.side) return this.unwrap(), void (i ? n.insDirOf(-t, i) : n.insAtDirEnd(t, r));
                    var o = n.options, a = !this.side;
                    if (this.side = -t, this.matchBrack(o, t, this.ends[m].ends[this.side])) {
                        this.closeOpposing(this.ends[m].ends[this.side]);
                        var l = this.ends[m].ends[t];
                        this.unwrap(), l.siblingCreated && l.siblingCreated(n.options, t), i ? n.insDirOf(-t, i) : n.insAtDirEnd(t, r);
                    } else {
                        if (this.matchBrack(o, t, this.parent.parent)) this.parent.parent.closeOpposing(this), 
                        this.parent.parent.unwrap(); else {
                            if (e && a) return this.unwrap(), void (i ? n.insDirOf(-t, i) : n.insAtDirEnd(t, r));
                            this.sides[t] = {
                                ch: bt[this.sides[this.side].ch],
                                ctrlSeq: bt[this.sides[this.side].ctrlSeq]
                            }, this.delimjQs.removeClass("mq-ghost").eq(t === m ? 0 : 1).addClass("mq-ghost").html(this.sides[t].ch);
                        }
                        if (i) {
                            l = this.ends[m].ends[t];
                            q(i, s, -t).disown().withDirAdopt(-t, this.ends[m], l, 0).jQ.insAtDirEnd(t, this.ends[m].jQ.removeClass("mq-empty")), 
                            l.siblingCreated && l.siblingCreated(n.options, t), n.insDirOf(-t, i);
                        } else e ? n.insDirOf(t, this) : n.insAtDirEnd(t, this.ends[m]);
                    }
                }, e.deleteTowards = function(t, e) {
                    this.deleteSide(-t, !1, e);
                }, e.finalizeTree = function() {
                    this.ends[m].deleteOutOf = function(t, e) {
                        this.parent.deleteSide(t, !0, e);
                    }, this.finalizeTree = this.intentionalBlur = function() {
                        this.delimjQs.eq(this.side === m ? 1 : 0).removeClass("mq-ghost"), this.side = 0;
                    };
                }, e.siblingCreated = function(t, e) {
                    e === -this.side && this.finalizeTree();
                };
            }), bt = {
                "(": ")",
                ")": "(",
                "[": "]",
                "]": "[",
                "{": "}",
                "}": "{",
                "\\{": "\\}",
                "\\}": "\\{",
                "&lang;": "&rang;",
                "&rang;": "&lang;",
                "\\langle ": "\\rangle ",
                "\\rangle ": "\\langle ",
                "|": "|",
                "\\lVert ": "\\rVert ",
                "\\rVert ": "\\lVert "
            };
            function xt(t, e) {
                e = e || t;
                var n = bt[t], r = bt[e];
                C[t] = h(yt, m, t, n, e, r), C[n] = h(yt, g, t, n, e, r);
            }
            xt("("), xt("["), xt("{", "\\{"), T.langle = h(yt, m, "&lang;", "&rang;", "\\langle ", "\\rangle "), 
            T.rangle = h(yt, g, "&lang;", "&rang;", "\\langle ", "\\rangle "), C["|"] = h(yt, m, "|", "|", "|", "|"), 
            T.lVert = h(yt, m, "&#8741;", "&#8741;", "\\lVert ", "\\rVert "), T.rVert = h(yt, g, "&#8741;", "&#8741;", "\\lVert ", "\\rVert "), 
            T.left = d($, function(t) {
                t.parser = function() {
                    var t = z.regex, e = z.string, n = (z.succeed, z.optWhitespace);
                    return n.then(t(/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/)).then(function(r) {
                        var i = "\\" === r.charAt(0) ? r.slice(1) : r;
                        return "\\langle" == r && (i = "&lang;", r += " "), "\\lVert" == r && (i = "&#8741;", 
                        r += " "), P.then(function(s) {
                            return e("\\right").skip(n).then(t(/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/)).map(function(t) {
                                var e = "\\" === t.charAt(0) ? t.slice(1) : t;
                                "\\rangle" == t && (e = "&rang;", t += " "), "\\rVert" == t && (e = "&#8741;", t += " ");
                                var n = yt(0, i, e, r, t);
                                return n.blocks = [ s ], s.adopt(n, 0, 0), n;
                            });
                        });
                    });
                };
            }), T.right = d($, function(t) {
                t.parser = function() {
                    return z.fail("unmatched \\right");
                };
            });
            var wt = T.binom = T.binomial = d(d($, vt), function(t, e) {
                t.ctrlSeq = "\\binom", t.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>', 
                t.textTemplate = [ "choose(", ",", ")" ];
            });
            T.choose = d(wt, function(t) {
                t.createLeftOf = pt.prototype.createLeftOf;
            });
            T.editable = T.MathQuillMathField = d($, function(t, e) {
                t.ctrlSeq = "\\MathQuillMathField", t.htmlTemplate = '<span class="mq-editable-field"><span class="mq-root-block">&0</span></span>', 
                t.parser = function() {
                    var t = this, n = z.string, r = z.regex, i = z.succeed;
                    return n("[").then(r(/^[a-z][a-z0-9]*/i)).skip(n("]")).map(function(e) {
                        t.name = e;
                    }).or(i()).then(e.parser.call(t));
                }, t.finalizeTree = function(t) {
                    var e = O(this.ends[m], this.jQ, t);
                    e.KIND_OF_MQ = "MathField", e.editable = !0, e.createTextarea(), e.editablesTextareaEvents(), 
                    e.cursor.insAtRightEnd(e.root), B(e.root);
                }, t.registerInnerField = function(t, e) {
                    t.push(t[this.name] = e(this.ends[m].controller));
                }, t.latex = function() {
                    return this.ends[m].latex();
                }, t.text = function() {
                    return this.ends[m].text();
                };
            });
            var qt = T.embed = d(W, function(t, e) {
                t.setOptions = function(t) {
                    function e() {
                        return "";
                    }
                    return this.text = t.text || e, this.htmlTemplate = t.htmlString || "", this.latex = t.latex || e, 
                    this;
                }, t.parser = function() {
                    var t = this, e = z.string, n = z.regex, r = z.succeed;
                    return e("{").then(n(/^[a-z][a-z0-9]*/i)).skip(e("}")).then(function(i) {
                        return e("[").then(n(/^[-\w\s]*/)).skip(e("]")).or(r()).map(function(e) {
                            return t.setOptions(L[i](e));
                        });
                    });
                };
            }), Tt = {};
            T.begin = d($, function(t, e) {
                t.parser = function() {
                    var t = z.string, e = z.regex;
                    return t("{").then(e(/^[a-z]+\*?/i)).skip(t("}")).then(function(e) {
                        return (Tt[e] ? Tt[e]().parser() : z.fail("unknown environment type: " + e)).skip(t("\\end{" + e + "}"));
                    });
                };
            });
            var Ct = d($, function(t, e) {
                t.template = [ [ "\\begin{", "}" ], [ "\\end{", "}" ] ], t.wrappers = function() {
                    return [ t.template[0].join(this.environment), t.template[1].join(this.environment) ];
                };
            }), kt = d(Ct, function(t, e) {
                t.delimiters = {
                    column: "&",
                    row: "\\\\"
                }, t.addColumn = function(t) {
                    var e, n, i = [], s = [];
                    this.eachChild(function(n) {
                        i[n.row] = i[n.row] || [], i[n.row].push(n), n === t && (e = i[n.row].length);
                    });
                    for (var o = 0; o < i.length; o += 1) (n = Ot(o)).parent = this, s.push(n), i[o].splice(e, 0, n), 
                    n.jQ = y('<td class="mq-empty">').attr(r, n.id), this.getCellAlignmentClass && n.jQ.addClass(this.getCellAlignmentClass(i[o].length));
                    return this.jQ.find("tbody").first().children().filter("tr").each(function(t) {
                        y(this).children().filter("td").eq(e - 1).after(i[t][e].jQ);
                    }), this.blocks = [].concat.apply([], i), s[t.row];
                }, t.latex = function() {
                    var t, e = this.delimiters, n = "";
                    return this.eachChild(function(r) {
                        void 0 !== t && (n += t !== r.row ? e.row + "\r\n" : e.column), t = r.row, n += r.latex();
                    }), this.wrappers().join(n);
                }, t.tableHtml = function() {
                    var t, e = [], n = "", r = 0;
                    return this.eachChild(function(i) {
                        t !== i.row && (t = i.row, n += "<tr>$tds</tr>", e[t] = []), e[t].push("<td>&" + r++ + "</td>");
                    }), '<table class="mq-non-leaf">' + n.replace(/\$tds/g, function() {
                        return e.shift().join("");
                    }) + "</table>";
                }, t.parser = function() {
                    var t = this, e = this.delimiters, n = z.optWhitespace, r = z.string;
                    return n.then(r(e.column).or(r(e.row)).or(P.block)).many().skip(n).then(function(n) {
                        var r = [], i = 0;
                        function s() {
                            t.blocks.push(Ot(i, t, r)), r = [];
                        }
                        t.blocks = [];
                        for (var o = 0; o < n.length; o += 1) n[o] instanceof X ? r.push(n[o]) : (s(), n[o] === e.row && (i += 1));
                        return s(), t.autocorrect(), z.succeed(t);
                    });
                }, t.finalizeTree = function() {
                    var t = this.jQ.find("table");
                    t.toggleClass("mq-rows-1", 1 === t.find("tr").length), this.relink();
                }, t.getEntryPoint = function(t, e, n) {
                    return "up" === n ? t === m ? this.blocks[this.rowSize - 1] : this.blocks[0] : t === m ? this.blocks[this.blocks.length - 1] : this.blocks[this.blocks.length - this.rowSize];
                }, t.atExitPoint = function(t, e) {
                    var n = this.blocks.indexOf(e.parent);
                    return t === m ? n % this.rowSize == 0 : (n + 1) % this.rowSize == 0;
                }, t.moveTowards = function(t, e, n) {
                    var r = n && this.getEntryPoint(t, e, n);
                    e.insAtDirEnd(-t, r || this.ends[-t]);
                }, t.relink = function() {
                    var t, e, n, r = this.blocks, i = [];
                    this.rowSize = r.length;
                    for (var s = 0; s < r.length; s += 1) t !== (n = r[s]).row && (1 === n.row && (this.rowSize = e), 
                    i[t = n.row] = [], e = 0), i[t][e] = n, n[g] = r[s + 1], n[m] = r[s - 1], i[t - 1] && i[t - 1][e] && (n.upOutOf = i[t - 1][e], 
                    i[t - 1][e].downOutOf = n), e += 1;
                    this.ends[m] = r[0], this.ends[g] = r[r.length - 1];
                }, t.autocorrect = function() {
                    var t, e, n, r, i, s = [], o = [], a = this.blocks;
                    for (i = 0; i < a.length; i += 1) o[r = a[i].row] = o[r] || [], o[r].push(a[i]), 
                    s[r] = o[r].length;
                    if ((t = Math.max.apply(null, s)) !== Math.min.apply(null, s)) {
                        for (i = 0; i < o.length; i += 1) for (e = t - o[i].length; e; ) n = t * i + o[i].length, 
                        a.splice(n, 0, Ot(i, this)), e -= 1;
                        this.relink();
                    }
                }, t.deleteCell = function(t, e) {
                    var n, r, i = [], s = [], o = [], a = [], l = this.blocks;
                    function c(t) {
                        for (var e = [], n = 0; n < t.length; n += 1) t[n].isEmpty() && e.push(t[n]);
                        return e.length === t.length;
                    }
                    function u(t) {
                        for (var e = 0; e < t.length; e += 1) l.indexOf(t[e]) > -1 && (t[e].remove(), l.splice(l.indexOf(t[e]), 1));
                    }
                    this.eachChild(function(e) {
                        n !== e.row && (n = e.row, i[n] = [], r = 0), s[r] = s[r] || [], s[r].push(e), i[n].push(e), 
                        e === t && (o = i[n], a = s[r]), r += 1;
                    }), c(o) && a.length > 1 && (n = i.indexOf(o), this.eachChild(function(t) {
                        t.row > n && (t.row -= 1);
                    }), u(o), this.jQ.find("tbody").first().children().filter("tr").eq(n).remove()), 
                    (e || this.removeEmptyColumns && c(a) && o.length > 1) && u(a), this.finalizeTree();
                }, t.duplicateRow = function(t) {
                    return this.addRow(t, !0);
                }, t.addRow = function(t, e) {
                    var n, i, s = [], o = [], a = [], l = y("<tr></tr>"), c = t.row, u = 0;
                    this.eachChild(function(e) {
                        e.row <= c && s.push(e), e.row === c && (e === t && (i = u), u += 1), e.row > c && (e.row += 1, 
                        a.push(e));
                    });
                    for (var f = s.filter(function(t) {
                        return t.row === c;
                    }), h = 0; h < u; h += 1) {
                        var p = !1, d = (n = Ot(c + 1)).jQ = y("<td>");
                        if (n.parent = this, o.push(n), this.htmlColumnSeparator && !p ? l.append(y(this.htmlColumnSeparator)) : d.addClass("mq-empty"), 
                        "array" !== this.environment && "tabular" !== this.environment || d.addClass(this.getCellAlignmentClass(h)), 
                        d.attr(r, n.id).appendTo(l), this.jQ.find("tbody").first().children().filter("tr").eq(c).after(l), 
                        !0 === e) {
                            var m = this.parent.cursor, g = z.all, v = z.eof, b = P.skip(v).or(g.result(!1)).parse(f[h].latex());
                            b.isEmpty() || d.removeClass("mq-empty"), b.children().adopt(n, 0, 0), n.jQ.html(b.join("html")), 
                            n.jQize(n.jQ.children()), b.finalizeInsert(m.options), this.finalizeTree(), this.bubble("reflow");
                        }
                    }
                    return this.blocks = s.concat(o, a), o[i];
                }, t.insert = function(t, e, n) {
                    if (this[t]) {
                        var r = this[t](e);
                        this.finalizeTree(), this.bubble("reflow"), n.insAtRightEnd(r);
                    }
                }, t.backspace = function(t, e, n, r) {
                    var i = t[e];
                    if (t.isEmpty()) {
                        for (this.deleteCell(t); i && i[e] && -1 === this.blocks.indexOf(i); ) i = i[e];
                        i && n.insAtDirEnd(-e, i), 1 === this.blocks.length && this.blocks[0].isEmpty() && (r(), 
                        this.finalizeTree()), this.bubble("edited");
                    }
                };
            }), jt = Tt.matrix = d(kt, function(t, e) {
                t.environment = "matrix", t.removeEmptyColumns = !0, t.parentheses = {
                    left: "",
                    right: ""
                }, t.reflow = function() {
                    var t = this.jQ.children("table");
                    if (t.length) {
                        var e = t.outerHeight() / +t.css("fontSize").slice(0, -2), n = this.jQ.children(".mq-paren");
                        n.length && et(n, s(1 + .2 * (e - 1), 1.2), 1.05 * e);
                    }
                }, t.html = function() {
                    function t(t) {
                        return t ? '<span class="mq-scaled mq-paren">' + t + "</span>" : "";
                    }
                    return this.htmlTemplate = '<span class="mq-tabular mq-non-leaf">' + t(this.parentheses.left) + this.tableHtml() + t(this.parentheses.right) + "</span>", 
                    e.html.call(this);
                }, t.createBlocks = function() {
                    this.blocks = [ Ot(0, this), Ot(0, this), Ot(1, this), Ot(1, this) ];
                };
            });
            Tt.pmatrix = d(jt, function(t, e) {
                t.environment = "pmatrix", t.parentheses = {
                    left: "(",
                    right: ")"
                };
            }), Tt.bmatrix = d(jt, function(t, e) {
                t.environment = "bmatrix", t.parentheses = {
                    left: "[",
                    right: "]"
                };
            }), Tt.Bmatrix = d(jt, function(t, e) {
                t.environment = "Bmatrix", t.parentheses = {
                    left: "{",
                    right: "}"
                };
            }), Tt.vmatrix = d(jt, function(t, e) {
                t.environment = "vmatrix", t.parentheses = {
                    left: "|",
                    right: "|"
                };
            }), Tt.Vmatrix = d(jt, function(t, e) {
                t.environment = "Vmatrix", t.parentheses = {
                    left: "&#8214;",
                    right: "&#8214;"
                };
            }), Tt.cases = d(jt, function(t, e) {
                t.environment = "cases", t.parentheses = {
                    left: "{",
                    right: null
                };
            }), Tt["align*"] = d(kt, function(t, e) {
                t.environment = "align*", t.removeEmptyColumns = !0, t.createBlocks = function() {
                    this.blocks = [ Ot(0, this), Ot(0, this) ];
                }, t.html = function() {
                    return this.htmlTemplate = '<span class="mq-tabular mq-align mq-non-leaf">' + this.tableHtml() + "</span>", 
                    e.html.call(this);
                };
            }), Tt.aligned = d(Tt["align*"], function(t, e) {
                t.environment = "aligned";
            }), Tt.array = d(kt, function(t, e) {
                t.environment = "array", t.removeEmptyColumns = !0, t.createBlocks = function() {
                    this.blocks = [ Ot(0, this) ];
                }, t.html = function() {
                    return this.htmlTemplate = '<span class="mq-tabular mq-array-table mq-non-leaf">' + this.tableHtml() + "</span>", 
                    e.html.call(this);
                }, t.latex = function() {
                    var t, e = this.delimiters, n = "{" + this.cellAlignmentString + "}";
                    return this.eachChild(function(r) {
                        void 0 !== t && (n += t !== r.row ? e.row + "\r\n" : e.column), t = r.row, n += r.latex();
                    }), this.wrappers().join(n);
                }, t.getAlignment = function(t) {
                    return t < 0 || t > this.cellAlignment.length - 1 ? this.cellAlignment[this.cellAlignment.length - 1] || {
                        align: "l"
                    } : this.cellAlignment[t] || {
                        align: "l"
                    };
                }, t.getCellAlignmentClass = function(t) {
                    var e = this.getAlignment(t), n = "mq-array-align-" + e.align;
                    return e.leftBorder && (n += " mq-array-border-l"), e.rightBorder && (n += " mq-array-border-r"), 
                    n;
                }, t.tableHtml = function() {
                    var t, e = [], n = "", r = 0, i = this;
                    return this.eachChild(function(s) {
                        t !== s.row && (t = s.row, n += "<tr>$tds</tr>", e[t] = []), e[t].push('<td class="' + i.getCellAlignmentClass(e[t].length) + '">&' + r++ + "</td>");
                    }), '<table class="mq-non-leaf">' + n.replace(/\$tds/g, function() {
                        return e.shift().join("");
                    }) + "</table>";
                }, t.parseAlignment = function(t) {
                    for (var e = (t || "").toString().trim(), n = [], r = {}, i = 0; i < e.length; i++) {
                        var s = e.charAt(i);
                        if ("|" !== s) r.align = s, (i < e.length - 2 || "|" !== e.charAt(i + 1)) && (n.push(r), 
                        r = {}); else {
                            if (i === e.length - 1) return r.rightBorder = !0, n.push(r), n;
                            r.leftBorder || (r.leftBorder = !0);
                        }
                    }
                    return n;
                }, t.parser = function() {
                    var t = this, e = this.delimiters, n = z.optWhitespace, r = z.string, i = z.regex;
                    return n.then(r("{")).then(i(/^[ |lcr]*/)).skip(r("}")).then(function(e) {
                        return t.cellAlignmentString = e, t.cellAlignment = t.parseAlignment(e), n.then(r(t.delimiters.column).or(r(t.delimiters.row)).or(P.block)).many();
                    }).skip(n).then(function(n) {
                        var r = [], i = 0;
                        function s() {
                            t.blocks.push(Ot(i, t, r)), r = [];
                        }
                        t.blocks = [];
                        for (var o = 0; o < n.length; o += 1) n[o] instanceof X ? r.push(n[o]) : (s(), n[o] === e.row && (i += 1));
                        return s(), t.autocorrect(), z.succeed(t);
                    });
                };
            });
            var Ot = d(X, function(t, e) {
                t.init = function(t, n, r) {
                    if (e.init.call(this), this.row = t, n && this.adopt(n, n.ends[g], 0), r) for (var i = 0; i < r.length; i++) r[i].children().adopt(this, this.ends[g], 0);
                }, t.keystroke = function(t, n, r) {
                    switch (t) {
                      case "Shift-Spacebar":
                        return n.preventDefault(), this.parent.insert("addColumn", this, r.cursor);

                      case "Shift-Enter":
                        return this.parent.insert("addRow", this, r.cursor);

                      case "Shift-Backspace":
                        return this.parent.deleteCell(r.cursor.parent, !0);

                      case "Ctrl-Shift-Enter":
                        return this.parent.insert("duplicateRow", this, r.cursor);
                    }
                    return e.keystroke.apply(this, arguments);
                }, t.deleteOutOf = function(t, n) {
                    var r = this, i = arguments;
                    this.parent.backspace(this, t, n, function() {
                        return e.deleteOutOf.apply(r, i);
                    });
                }, t.moveOutOf = function(t, e, n) {
                    !(n && this.parent.atExitPoint(t, e)) && this[t] ? e.insAtDirEnd(-t, this[t]) : e.insDirOf(t, this.parent);
                };
            });
            T.notin = T.cong = T.equiv = T.oplus = T.otimes = d(V, function(t, e) {
                t.init = function(t) {
                    e.init.call(this, "\\" + t + " ", "&" + t + ";");
                };
            }), T["\u2260"] = T.ne = T.neq = h(V, "\\ne ", "&ne;"), T["\u2217"] = T.ast = T.star = T.loast = T.lowast = h(V, "\\ast ", "&lowast;"), 
            T.therefor = T.therefore = h(V, "\\therefore ", "&there4;"), T.cuz = T.because = h(V, "\\because ", "&#8757;"), 
            T.prop = T.propto = h(V, "\\propto ", "&prop;"), T["\u2248"] = T.approx = h(V, "\\approx ", "&asymp;"), 
            T.asymp = h(V, "\\asymp", "&#x224D;"), T.isin = T.in = h(V, "\\in ", "&isin;"), 
            T.ni = T.contains = h(V, "\\ni ", "&ni;"), T.notni = T.niton = T.notcontains = T.doesnotcontain = h(V, "\\not\\ni ", "&#8716;"), 
            T.sub = T.subset = h(V, "\\subset ", "&sub;"), T.sup = T.supset = T.superset = h(V, "\\supset ", "&sup;"), 
            T.nsub = T.notsub = T.nsubset = T.notsubset = h(V, "\\not\\subset ", "&#8836;"), 
            T.nsup = T.notsup = T.nsupset = T.notsupset = T.nsuperset = T.notsuperset = h(V, "\\not\\supset ", "&#8837;"), 
            T.sube = T.subeq = T.subsete = T.subseteq = h(V, "\\subseteq ", "&sube;"), T.supe = T.supeq = T.supsete = T.supseteq = T.supersete = T.superseteq = h(V, "\\supseteq ", "&supe;"), 
            T.nsube = T.nsubeq = T.notsube = T.notsubeq = T.nsubsete = T.nsubseteq = T.notsubsete = T.notsubseteq = h(V, "\\not\\subseteq ", "&#8840;"), 
            T.nsupe = T.nsupeq = T.notsupe = T.notsupeq = T.nsupsete = T.nsupseteq = T.notsupsete = T.notsupseteq = T.nsupersete = T.nsuperseteq = T.notsupersete = T.notsuperseteq = h(V, "\\not\\supseteq ", "&#8841;"), 
            T.mathbb = d($, function(t) {
                t.createLeftOf = a, t.numBlocks = function() {
                    return 1;
                }, t.parser = function() {
                    var t = z.string, e = z.regex, n = z.optWhitespace;
                    return n.then(t("{")).then(n).then(e(/^[NPZQRCH]/)).skip(n).skip(t("}")).map(function(t) {
                        return T[t]();
                    });
                };
            }), T.N = T.naturals = T.Naturals = h(U, "\\mathbb{N}", "&#8469;"), T.P = T.primes = T.Primes = T.projective = T.Projective = T.probability = T.Probability = h(U, "\\mathbb{P}", "&#8473;"), 
            T.Z = T.integers = T.Integers = h(U, "\\mathbb{Z}", "&#8484;"), T.Q = T.rationals = T.Rationals = h(U, "\\mathbb{Q}", "&#8474;"), 
            T.R = T.reals = T.Reals = h(U, "\\mathbb{R}", "&#8477;"), T.C = T.complex = T.Complex = T.complexes = T.Complexes = T.complexplane = T.Complexplane = T.ComplexPlane = h(U, "\\mathbb{C}", "&#8450;"), 
            T.H = T.Hamiltonian = T.quaternions = T.Quaternions = h(U, "\\mathbb{H}", "&#8461;"), 
            T.quad = T.emsp = h(U, "\\quad ", "    "), T.qquad = h(U, "\\qquad ", "        "), 
            T.diamond = h(U, "\\diamond ", "&#9671;"), T.bigtriangleup = h(U, "\\bigtriangleup ", "&#9651;"), 
            T.ominus = h(U, "\\ominus ", "&#8854;"), T.uplus = h(U, "\\uplus ", "&#8846;"), 
            T.bigtriangledown = h(U, "\\bigtriangledown ", "&#9661;"), T.sqcap = h(U, "\\sqcap ", "&#8851;"), 
            T.triangleleft = h(U, "\\triangleleft ", "&#8882;"), T.sqcup = h(U, "\\sqcup ", "&#8852;"), 
            T.triangleright = h(U, "\\triangleright ", "&#8883;"), T.odot = T.circledot = h(U, "\\odot ", "&#8857;"), 
            T.bigcirc = h(U, "\\bigcirc ", "&#9711;"), T.dagger = h(U, "\\dagger ", "&#0134;"), 
            T.ddagger = h(U, "\\ddagger ", "&#135;"), T.wr = h(U, "\\wr ", "&#8768;"), T.amalg = h(U, "\\amalg ", "&#8720;"), 
            T.models = h(U, "\\models ", "&#8872;"), T.prec = h(U, "\\prec ", "&#8826;"), T.succ = h(U, "\\succ ", "&#8827;"), 
            T.preceq = h(U, "\\preceq ", "&#8828;"), T.succeq = h(U, "\\succeq ", "&#8829;"), 
            T.simeq = h(U, "\\simeq ", "&#8771;"), T.mid = h(U, "\\mid ", "&#8739;"), T.ll = h(U, "\\ll ", "&#8810;"), 
            T.gg = h(U, "\\gg ", "&#8811;"), T.parallel = h(U, "\\parallel ", "&#8741;"), T.nparallel = h(U, "\\nparallel ", "&#8742;"), 
            T.bowtie = h(U, "\\bowtie ", "&#8904;"), T.sqsubset = h(U, "\\sqsubset ", "&#8847;"), 
            T.sqsupset = h(U, "\\sqsupset ", "&#8848;"), T.smile = h(U, "\\smile ", "&#8995;"), 
            T.sqsubseteq = h(U, "\\sqsubseteq ", "&#8849;"), T.sqsupseteq = h(U, "\\sqsupseteq ", "&#8850;"), 
            T.doteq = h(U, "\\doteq ", "&#8784;"), T.frown = h(U, "\\frown ", "&#8994;"), T.vdash = h(U, "\\vdash ", "&#8870;"), 
            T.dashv = h(U, "\\dashv ", "&#8867;"), T.nless = h(U, "\\nless ", "&#8814;"), T.ngtr = h(U, "\\ngtr ", "&#8815;"), 
            T.longleftarrow = h(U, "\\longleftarrow ", "&#8592;"), T.longrightarrow = h(U, "\\longrightarrow ", "&#8594;"), 
            T.Longleftarrow = h(U, "\\Longleftarrow ", "&#8656;"), T.Longrightarrow = h(U, "\\Longrightarrow ", "&#8658;"), 
            T.longleftrightarrow = h(U, "\\longleftrightarrow ", "&#8596;"), T.updownarrow = h(U, "\\updownarrow ", "&#8597;"), 
            T.Longleftrightarrow = h(U, "\\Longleftrightarrow ", "&#8660;"), T.Updownarrow = h(U, "\\Updownarrow ", "&#8661;"), 
            T.mapsto = h(U, "\\mapsto ", "&#8614;"), T.nearrow = h(U, "\\nearrow ", "&#8599;"), 
            T.hookleftarrow = h(U, "\\hookleftarrow ", "&#8617;"), T.hookrightarrow = h(U, "\\hookrightarrow ", "&#8618;"), 
            T.searrow = h(U, "\\searrow ", "&#8600;"), T.leftharpoonup = h(U, "\\leftharpoonup ", "&#8636;"), 
            T.rightharpoonup = h(U, "\\rightharpoonup ", "&#8640;"), T.rightleftharpoons = h(U, "\\rightleftharpoons ", "&#8651;"), 
            T.leftrightharpoons = h(U, "\\leftrightharpoons ", "&#8652;"), T.swarrow = h(U, "\\swarrow ", "&#8601;"), 
            T.leftharpoondown = h(U, "\\leftharpoondown ", "&#8637;"), T.rightharpoondown = h(U, "\\rightharpoondown ", "&#8641;"), 
            T.nwarrow = h(U, "\\nwarrow ", "&#8598;"), T.ldots = h(U, "\\ldots ", "&#8230;"), 
            T.cdots = h(U, "\\cdots ", "&#8943;"), T.vdots = h(U, "\\vdots ", "&#8942;"), T.ddots = h(U, "\\ddots ", "&#8945;"), 
            T.surd = h(U, "\\surd ", "&#8730;"), T.triangle = h(U, "\\triangle ", "&#9651;"), 
            T.ell = h(U, "\\ell ", "&#8467;"), T.top = h(U, "\\top ", "&#8868;"), T.flat = h(U, "\\flat ", "&#9837;"), 
            T.natural = h(U, "\\natural ", "&#9838;"), T.sharp = h(U, "\\sharp ", "&#9839;"), 
            T.wp = h(U, "\\wp ", "&#8472;"), T.bot = h(U, "\\bot ", "&#8869;"), T.clubsuit = h(U, "\\clubsuit ", "&#9827;"), 
            T.diamondsuit = h(U, "\\diamondsuit ", "&#9826;"), T.heartsuit = h(U, "\\heartsuit ", "&#9825;"), 
            T.spadesuit = h(U, "\\spadesuit ", "&#9824;"), T.parallelogram = h(U, "\\parallelogram ", "&#9649;"), 
            T.square = h(U, "\\square ", "&#11036;"), T.oint = h(U, "\\oint ", "&#8750;"), T.bigcap = h(U, "\\bigcap ", "&#8745;"), 
            T.bigcup = h(U, "\\bigcup ", "&#8746;"), T.bigsqcup = h(U, "\\bigsqcup ", "&#8852;"), 
            T.bigvee = h(U, "\\bigvee ", "&#8744;"), T.bigwedge = h(U, "\\bigwedge ", "&#8743;"), 
            T.bigodot = h(U, "\\bigodot ", "&#8857;"), T.bigotimes = h(U, "\\bigotimes ", "&#8855;"), 
            T.bigoplus = h(U, "\\bigoplus ", "&#8853;"), T.biguplus = h(U, "\\biguplus ", "&#8846;"), 
            T.lfloor = h(U, "\\lfloor ", "&#8970;"), T.rfloor = h(U, "\\rfloor ", "&#8971;"), 
            T.lceil = h(U, "\\lceil ", "&#8968;"), T.rceil = h(U, "\\rceil ", "&#8969;"), T.opencurlybrace = T.lbrace = h(U, "\\lbrace ", "{"), 
            T.closecurlybrace = T.rbrace = h(U, "\\rbrace ", "}"), T.lbrack = h(U, "["), T.rbrack = h(U, "]"), 
            T.slash = h(U, "/"), T.vert = h(U, "|"), T.perp = T.perpendicular = h(U, "\\perp ", "&perp;"), 
            T.nabla = T.del = h(U, "\\nabla ", "&nabla;"), T.hbar = h(U, "\\hbar ", "&#8463;"), 
            T.AA = T.Angstrom = T.angstrom = h(U, "\\text\\AA ", "&#8491;"), T.ring = T.circ = T.circle = h(U, "\\circ ", "&#8728;"), 
            T.bull = T.bullet = h(U, "\\bullet ", "&bull;"), T.setminus = T.smallsetminus = h(U, "\\setminus ", "&#8726;"), 
            T.not = T["\xac"] = T.neg = h(U, "\\neg ", "&not;"), T["\u2026"] = T.dots = T.ellip = T.hellip = T.ellipsis = T.hellipsis = h(U, "\\dots ", "&hellip;"), 
            T.converges = T.darr = T.dnarr = T.dnarrow = T.downarrow = h(U, "\\downarrow ", "&darr;"), 
            T.dArr = T.dnArr = T.dnArrow = T.Downarrow = h(U, "\\Downarrow ", "&dArr;"), T.diverges = T.uarr = T.uparrow = h(U, "\\uparrow ", "&uarr;"), 
            T.uArr = T.Uparrow = h(U, "\\Uparrow ", "&uArr;"), T.to = h(V, "\\to ", "&rarr;"), 
            T.rarr = T.rightarrow = h(U, "\\rightarrow ", "&rarr;"), T.implies = h(V, "\\Rightarrow ", "&rArr;"), 
            T.rArr = T.Rightarrow = h(U, "\\Rightarrow ", "&rArr;"), T.gets = h(V, "\\gets ", "&larr;"), 
            T.larr = T.leftarrow = h(U, "\\leftarrow ", "&larr;"), T.impliedby = h(V, "\\Leftarrow ", "&lArr;"), 
            T.lArr = T.Leftarrow = h(U, "\\Leftarrow ", "&lArr;"), T.harr = T.lrarr = T.leftrightarrow = h(U, "\\leftrightarrow ", "&harr;"), 
            T.iff = h(V, "\\Leftrightarrow ", "&hArr;"), T.hArr = T.lrArr = T.Leftrightarrow = h(U, "\\Leftrightarrow ", "&hArr;"), 
            T.Re = T.Real = T.real = h(U, "\\Re ", "&real;"), T.Im = T.imag = T.image = T.imagin = T.imaginary = T.Imaginary = h(U, "\\Im ", "&image;"), 
            T.part = T.partial = h(U, "\\partial ", "&part;"), T.infty = T.infin = T.infinity = h(U, "\\infty ", "&infin;"), 
            T.alef = T.alefsym = T.aleph = T.alephsym = h(U, "\\aleph ", "&alefsym;"), T.xist = T.xists = T.exist = T.exists = h(U, "\\exists ", "&exist;"), 
            T.nexists = T.nexist = h(U, "\\nexists ", "&#8708;"), T.and = T.land = T.wedge = h(V, "\\wedge ", "&and;"), 
            T.or = T.lor = T.vee = h(V, "\\vee ", "&or;"), T.o = T.O = T.empty = T.emptyset = T.oslash = T.Oslash = T.nothing = T.varnothing = h(V, "\\varnothing ", "&empty;"), 
            T.cup = T.union = h(V, "\\cup ", "&cup;"), T.cap = T.intersect = T.intersection = h(V, "\\cap ", "&cap;"), 
            T.deg = T.degree = h(U, "\\degree ", "&deg;"), T.ang = T.angle = h(U, "\\angle ", "&ang;"), 
            T.measuredangle = h(U, "\\measuredangle ", "&#8737;");
            var St = d(U, function(t, e) {
                t.createLeftOf = function(t) {
                    t.options.autoSubscriptNumerals && t.parent !== t.parent.parent.sub && (t[m] instanceof Et && !1 !== t[m].isItalic || t[m] instanceof lt && t[m][m] instanceof Et && !1 !== t[m][m].isItalic) ? (T._().createLeftOf(t), 
                    e.createLeftOf.call(this, t), t.insRightOf(t.parent.parent)) : e.createLeftOf.call(this, t);
                };
            }), Et = d(W, function(t, e) {
                t.init = function(t, n) {
                    e.init.call(this, t, "<var>" + (n || t) + "</var>");
                }, t.text = function() {
                    var t = this.ctrlSeq;
                    return this.isPartOfOperator ? "\\" == t[0] ? t = t.slice(1, t.length) : " " == t[t.length - 1] && (t = t.slice(0, -1)) : (!this[m] || this[m] instanceof Et || this[m] instanceof V || "\\ " === this[m].ctrlSeq || (t = "*" + t), 
                    !this[g] || this[g] instanceof V || this[g] instanceof lt || (t += "*")), t;
                };
            });
            E.p.autoCommands = {
                _maxLength: 0
            }, D.autoCommands = function(t) {
                if (!/^[a-z]+(?: [a-z]+)*$/i.test(t)) throw '"' + t + '" not a space-delimited list of only letters';
                for (var e = t.split(" "), n = {}, r = 0, i = 0; i < e.length; i += 1) {
                    var s = e[i];
                    if (s.length < 2) throw 'autocommand "' + s + '" not minimum length of 2';
                    if (T[s] === _t) throw '"' + s + '" is a built-in operator name';
                    n[s] = 1, r = o(r, s.length);
                }
                return n._maxLength = r, n;
            };
            var Dt = d(Et, function(t, e) {
                function n(t) {
                    return !t || t instanceof V || t instanceof ut;
                }
                t.init = function(t) {
                    return e.init.call(this, this.letter = t);
                }, t.createLeftOf = function(t) {
                    e.createLeftOf.apply(this, arguments);
                    var n = t.options.autoCommands, r = n._maxLength;
                    if (r > 0) {
                        for (var i = "", s = this, o = 0; s instanceof Dt && s.ctrlSeq === s.letter && o < r; ) i = s.letter + i, 
                        s = s[m], o += 1;
                        for (;i.length; ) {
                            if (n.hasOwnProperty(i)) {
                                for (o = 1, s = this; o < i.length; o += 1, s = s[m]) ;
                                return q(s, this).remove(), t[m] = s[m], T[i](i).createLeftOf(t);
                            }
                            i = i.slice(1);
                        }
                    }
                }, t.italicize = function(t) {
                    return this.isItalic = t, this.isPartOfOperator = !t, this.jQ.toggleClass("mq-operator-name", !t), 
                    this;
                }, t.finalizeTree = t.siblingDeleted = t.siblingCreated = function(t, e) {
                    e !== m && this[g] instanceof Dt || this.autoUnItalicize(t);
                }, t.autoUnItalicize = function(t) {
                    var e = t.autoOperatorNames;
                    if (0 !== e._maxLength) {
                        for (var r = this.letter, i = this[m]; i instanceof Dt; i = i[m]) r = i.letter + r;
                        for (var o = this[g]; o instanceof Dt; o = o[g]) r += o.letter;
                        q(i[g] || this.parent.ends[m], o[m] || this.parent.ends[g]).each(function(t) {
                            t.italicize(!0).jQ.removeClass("mq-first mq-last mq-followed-by-supsub"), t.ctrlSeq = t.letter;
                        });
                        t: for (var a = 0, l = i[g] || this.parent.ends[m]; a < r.length; a += 1, l = l[g]) for (var c = s(e._maxLength, r.length - a); c > 0; c -= 1) {
                            var u = r.slice(a, a + c);
                            if (e.hasOwnProperty(u)) {
                                for (var f = 0, h = l; f < c; f += 1, h = h[g]) {
                                    h.italicize(!1);
                                    var p = h;
                                }
                                var d = At.hasOwnProperty(u);
                                if (l.ctrlSeq = (d ? "\\" : "\\operatorname{") + l.ctrlSeq, p.ctrlSeq += d ? " " : "}", 
                                Qt.hasOwnProperty(u) && p[m][m][m].jQ.addClass("mq-last"), n(l[m]) || l.jQ.addClass("mq-first"), 
                                !n(p[g])) if (p[g] instanceof lt) {
                                    var v = p[g];
                                    (v.siblingCreated = v.siblingDeleted = function() {
                                        v.jQ.toggleClass("mq-after-operator-name", !(v[g] instanceof yt));
                                    })();
                                } else p.jQ.toggleClass("mq-last", !(p[g] instanceof yt));
                                a += c - 1, l = p;
                                continue t;
                            }
                        }
                    }
                };
            }), At = {}, Lt = E.p.autoOperatorNames = {
                _maxLength: 9
            }, Qt = {
                limsup: 1,
                liminf: 1,
                projlim: 1,
                injlim: 1
            };
            !function() {
                for (var t = "arg deg det dim exp gcd hom inf ker lg ln log max min sup limsup liminf injlim projlim Pr".split(" "), e = 0; e < t.length; e += 1) At[t[e]] = Lt[t[e]] = 1;
                var n = "sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");
                for (e = 0; e < n.length; e += 1) At[n[e]] = 1;
                var r = "sin cos tan sec cosec csc cotan cot ctg".split(" ");
                for (e = 0; e < r.length; e += 1) Lt[r[e]] = Lt["arc" + r[e]] = Lt[r[e] + "h"] = Lt["ar" + r[e] + "h"] = Lt["arc" + r[e] + "h"] = 1;
                var i = "gcf hcf lcm proj span".split(" ");
                for (e = 0; e < i.length; e += 1) Lt[i[e]] = 1;
            }(), D.autoOperatorNames = function(t) {
                if (!/^[a-z]+(?: [a-z]+)*$/i.test(t)) throw '"' + t + '" not a space-delimited list of only letters';
                for (var e = t.split(" "), n = {}, r = 0, i = 0; i < e.length; i += 1) {
                    var s = e[i];
                    if (s.length < 2) throw '"' + s + '" not minimum length of 2';
                    n[s] = 1, r = o(r, s.length);
                }
                return n._maxLength = r, n;
            };
            var _t = d(W, function(t, e) {
                t.init = function(t) {
                    this.ctrlSeq = t;
                }, t.createLeftOf = function(t) {
                    for (var e = this.ctrlSeq, n = 0; n < e.length; n += 1) Dt(e.charAt(n)).createLeftOf(t);
                }, t.parser = function() {
                    for (var t = this.ctrlSeq, e = X(), n = 0; n < t.length; n += 1) Dt(t.charAt(n)).adopt(e, e.ends[g], 0);
                    return z.succeed(e.children());
                };
            });
            for (var Nt in Lt) Lt.hasOwnProperty(Nt) && (T[Nt] = _t);
            T.operatorname = d($, function(t) {
                t.createLeftOf = a, t.numBlocks = function() {
                    return 1;
                }, t.parser = function() {
                    return P.block.map(function(t) {
                        return t.children();
                    });
                };
            }), T.f = d(Dt, function(t, e) {
                t.init = function() {
                    W.p.init.call(this, this.letter = "f", '<var class="mq-f">f</var>');
                }, t.italicize = function(t) {
                    return this.jQ.html("f").toggleClass("mq-f", t), e.italicize.apply(this, arguments);
                };
            }), T[" "] = T.space = h(U, "\\ ", "&nbsp;"), T["#"] = T.space = h(U, "\\#", "#"), 
            T.prime = h(U, "\\prime", "&prime;"), T["\u2033"] = T.dprime = h(U, "\u2033", "&Prime;"), 
            T.backslash = h(U, "\\backslash ", "\\"), C["\\"] || (C["\\"] = T.backslash), T.$ = h(U, "\\$", "$");
            var Rt = d(W, function(t, e) {
                t.init = function(t, n) {
                    e.init.call(this, t, '<span class="mq-nonSymbola">' + (n || t) + "</span>");
                };
            });
            T["@"] = Rt, T["&"] = h(Rt, "\\&", "&amp;"), T["%"] = h(Rt, "\\%", "%"), T.alpha = T.beta = T.gamma = T.delta = T.zeta = T.eta = T.theta = T.iota = T.kappa = T.mu = T.nu = T.xi = T.rho = T.sigma = T.tau = T.chi = T.psi = T.omega = d(Et, function(t, e) {
                t.init = function(t) {
                    e.init.call(this, "\\" + t + " ", "&" + t + ";");
                };
            }), T.phi = h(Et, "\\phi ", "&#981;"), T.phiv = T.varphi = h(Et, "\\varphi ", "&phi;"), 
            T.epsilon = h(Et, "\\epsilon ", "&#1013;"), T.epsiv = T.varepsilon = h(Et, "\\varepsilon ", "&epsilon;"), 
            T.piv = T.varpi = h(Et, "\\varpi ", "&piv;"), T.sigmaf = T.sigmav = T.varsigma = h(Et, "\\varsigma ", "&sigmaf;"), 
            T.thetav = T.vartheta = T.thetasym = h(Et, "\\vartheta ", "&thetasym;"), T.upsilon = T.upsi = h(Et, "\\upsilon ", "&upsilon;"), 
            T.gammad = T.Gammad = T.digamma = h(Et, "\\digamma ", "&#989;"), T.kappav = T.varkappa = h(Et, "\\varkappa ", "&#1008;"), 
            T.rhov = T.varrho = h(Et, "\\varrho ", "&#1009;"), T.pi = T["\u03c0"] = h(Rt, "\\pi ", "&pi;"), 
            T.lambda = h(Rt, "\\lambda ", "&lambda;"), T.Upsilon = T.Upsi = T.upsih = T.Upsih = h(W, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>'), 
            T.Gamma = T.Delta = T.Theta = T.Lambda = T.Xi = T.Pi = T.Sigma = T.Phi = T.Psi = T.Omega = T.forall = d(U, function(t, e) {
                t.init = function(t) {
                    e.init.call(this, "\\" + t + " ", "&" + t + ";");
                };
            });
            var It = d($, function(t) {
                t.init = function(t) {
                    this.latex = t;
                }, t.createLeftOf = function(t) {
                    var e = P.parse(this.latex);
                    e.children().adopt(t.parent, t[m], t[g]), t[m] = e.ends[g], e.jQize().insertBefore(t.jQ), 
                    e.finalizeInsert(t.options, t), e.ends[g][g].siblingCreated && e.ends[g][g].siblingCreated(t.options, m), 
                    e.ends[m][m].siblingCreated && e.ends[m][m].siblingCreated(t.options, g), t.parent.bubble("reflow");
                }, t.parser = function() {
                    var t = P.parse(this.latex).children();
                    return z.succeed(t);
                };
            });
            T["'"] = h(It, "^\\prime"), T["\xb9"] = h(It, "^1"), T["\xb2"] = h(It, "^2"), T["\xb3"] = h(It, "^3"), 
            T["\xbc"] = h(It, "\\frac14"), T["\xbd"] = h(It, "\\frac12"), T["\xbe"] = h(It, "\\frac34");
            var Ht = d(V, function(t) {
                t.init = U.prototype.init, t.contactWeld = t.siblingCreated = t.siblingDeleted = function(t, e) {
                    function n(t) {
                        return t[m] ? t[m] instanceof V || /^[,;:\(\[]$/.test(t[m].ctrlSeq) ? "" : "mq-binary-operator" : t.parent && t.parent.parent && t.parent.parent.isStyleBlock() ? n(t.parent.parent) : "";
                    }
                    if (e !== g) return this.jQ[0].className = n(this), this;
                };
            });
            T["+"] = h(Ht, "+", "+"), T["\u2013"] = T["-"] = h(Ht, "-", "&minus;"), T["\xb1"] = T.pm = T.plusmn = T.plusminus = h(Ht, "\\pm ", "&plusmn;"), 
            T.mp = T.mnplus = T.minusplus = h(Ht, "\\mp ", "&#8723;"), C["*"] = T.sdot = T.cdot = h(V, "\\cdot ", "&middot;", "*");
            var Bt = d(V, function(t, e) {
                t.init = function(t, n) {
                    this.data = t, this.strict = n;
                    var r = n ? "Strict" : "";
                    e.init.call(this, t["ctrlSeq" + r], t["html" + r], t["text" + r]);
                }, t.swap = function(t) {
                    this.strict = t;
                    var e = t ? "Strict" : "";
                    this.ctrlSeq = this.data["ctrlSeq" + e], this.jQ.html(this.data["html" + e]), this.textTemplate = [ this.data["text" + e] ];
                }, t.deleteTowards = function(t, n) {
                    if (t === m && !this.strict) return this.swap(!0), void this.bubble("reflow");
                    e.deleteTowards.apply(this, arguments);
                };
            }), Mt = {
                ctrlSeq: "\\le ",
                html: "&le;",
                text: "\u2264",
                ctrlSeqStrict: "<",
                htmlStrict: "&lt;",
                textStrict: "<"
            }, zt = {
                ctrlSeq: "\\ge ",
                html: "&ge;",
                text: "\u2265",
                ctrlSeqStrict: ">",
                htmlStrict: "&gt;",
                textStrict: ">"
            };
            T["<"] = T.lt = h(Bt, Mt, !0), T[">"] = T.gt = h(Bt, zt, !0), T["\u2264"] = T.le = T.leq = h(Bt, Mt, !1), 
            T["\u2265"] = T.ge = T.geq = h(Bt, zt, !1);
            var Pt = d(V, function(t, e) {
                t.init = function() {
                    e.init.call(this, "=", "=");
                }, t.createLeftOf = function(t) {
                    if (t[m] instanceof Bt && t[m].strict) return t[m].swap(!1), void t[m].bubble("reflow");
                    e.createLeftOf.apply(this, arguments);
                };
            });
            T["="] = Pt, T["\xd7"] = T.times = h(V, "\\times ", "&times;", "[x]"), T["\xf7"] = T.div = T.divide = T.divides = h(V, "\\div ", "&divide;", "[/]"), 
            C["~"] = T.sim = h(V, "\\sim ", "~", "~");
            var Ft = I(1);
            for (var $t in Ft) !function(t, e) {
                "function" == typeof e ? (_[t] = function() {
                    return Q(), e.apply(this, arguments);
                }, _[t].prototype = e.prototype) : _[t] = e;
            }($t, Ft[$t]);
        }(), e.default = MathQuill;
    },
    643: function(t, e, n) {
        var r;
        /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */        
        /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
        !function(e, n) {
            "use strict";
            "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return n(t);
            } : n(e);
        }("undefined" != typeof window ? window : this, function(n, i) {
            "use strict";
            var s = [], o = Object.getPrototypeOf, a = s.slice, l = s.flat ? function(t) {
                return s.flat.call(t);
            } : function(t) {
                return s.concat.apply([], t);
            }, c = s.push, u = s.indexOf, f = {}, h = f.toString, p = f.hasOwnProperty, d = p.toString, m = d.call(Object), g = {}, v = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType;
            }, y = function(t) {
                return null != t && t === t.window;
            }, b = n.document, x = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function w(t, e, n) {
                var r, i, s = (n = n || b).createElement("script");
                if (s.text = t, e) for (r in x) (i = e[r] || e.getAttribute && e.getAttribute(r)) && s.setAttribute(r, i);
                n.head.appendChild(s).parentNode.removeChild(s);
            }
            function q(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? f[h.call(t)] || "object" : typeof t;
            }
            var T = "3.5.1", C = function(t, e) {
                return new C.fn.init(t, e);
            };
            function k(t) {
                var e = !!t && "length" in t && t.length, n = q(t);
                return !v(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
            }
            C.fn = C.prototype = {
                jquery: T,
                constructor: C,
                length: 0,
                toArray: function() {
                    return a.call(this);
                },
                get: function(t) {
                    return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
                },
                pushStack: function(t) {
                    var e = C.merge(this.constructor(), t);
                    return e.prevObject = this, e;
                },
                each: function(t) {
                    return C.each(this, t);
                },
                map: function(t) {
                    return this.pushStack(C.map(this, function(e, n) {
                        return t.call(e, n, e);
                    }));
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(C.grep(this, function(t, e) {
                        return (e + 1) % 2;
                    }));
                },
                odd: function() {
                    return this.pushStack(C.grep(this, function(t, e) {
                        return e % 2;
                    }));
                },
                eq: function(t) {
                    var e = this.length, n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [ this[n] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: c,
                sort: s.sort,
                splice: s.splice
            }, C.extend = C.fn.extend = function() {
                var t, e, n, r, i, s, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || v(o) || (o = {}), 
                a === l && (o = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) r = t[e], 
                "__proto__" !== e && o !== r && (c && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = o[e], 
                s = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, o[e] = C.extend(c, s, r)) : void 0 !== r && (o[e] = r));
                return o;
            }, C.extend({
                expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t);
                },
                noop: function() {},
                isPlainObject: function(t) {
                    var e, n;
                    return !(!t || "[object Object]" !== h.call(t)) && (!(e = o(t)) || "function" == typeof (n = p.call(e, "constructor") && e.constructor) && d.call(n) === m);
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0;
                },
                globalEval: function(t, e, n) {
                    w(t, {
                        nonce: e && e.nonce
                    }, n);
                },
                each: function(t, e) {
                    var n, r = 0;
                    if (k(t)) for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++) ; else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
                    return t;
                },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (k(Object(t)) ? C.merge(n, "string" == typeof t ? [ t ] : t) : c.call(n, t)), 
                    n;
                },
                inArray: function(t, e, n) {
                    return null == e ? -1 : u.call(e, t, n);
                },
                merge: function(t, e) {
                    for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
                    return t.length = i, t;
                },
                grep: function(t, e, n) {
                    for (var r = [], i = 0, s = t.length, o = !n; i < s; i++) !e(t[i], i) !== o && r.push(t[i]);
                    return r;
                },
                map: function(t, e, n) {
                    var r, i, s = 0, o = [];
                    if (k(t)) for (r = t.length; s < r; s++) null != (i = e(t[s], s, n)) && o.push(i); else for (s in t) null != (i = e(t[s], s, n)) && o.push(i);
                    return l(o);
                },
                guid: 1,
                support: g
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = s[Symbol.iterator]), 
            C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                f["[object " + e + "]"] = e.toLowerCase();
            });
            var j = 
            /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
            function(t) {
                var e, n, r, i, s, o, a, l, c, u, f, h, p, d, m, g, v, y, b, x = "sizzle" + 1 * new Date(), w = t.document, q = 0, T = 0, C = lt(), k = lt(), j = lt(), O = lt(), S = function(t, e) {
                    return t === e && (f = !0), 0;
                }, E = {}.hasOwnProperty, D = [], A = D.pop, L = D.push, Q = D.push, _ = D.slice, N = function(t, e) {
                    for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                    return -1;
                }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", B = "\\[" + I + "*(" + H + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + I + "*\\]", M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", z = new RegExp(I + "+", "g"), P = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"), F = new RegExp("^" + I + "*," + I + "*"), $ = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), W = new RegExp(I + "|>"), U = new RegExp(M), V = new RegExp("^" + H + "$"), X = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + B),
                    PSEUDO: new RegExp("^" + M),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + R + ")$", "i"),
                    needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                }, G = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"), nt = function(t, e) {
                    var n = "0x" + t.slice(1) - 65536;
                    return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
                }, rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function(t, e) {
                    return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
                }, st = function() {
                    h();
                }, ot = xt(function(t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    Q.apply(D = _.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType;
                } catch (t) {
                    Q = {
                        apply: D.length ? function(t, e) {
                            L.apply(t, _.call(e));
                        } : function(t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++]; ) ;
                            t.length = n - 1;
                        }
                    };
                }
                function at(t, e, r, i) {
                    var s, a, c, u, f, d, v, y = e && e.ownerDocument, w = e ? e.nodeType : 9;
                    if (r = r || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return r;
                    if (!i && (h(e), e = e || p, m)) {
                        if (11 !== w && (f = J.exec(t))) if (s = f[1]) {
                            if (9 === w) {
                                if (!(c = e.getElementById(s))) return r;
                                if (c.id === s) return r.push(c), r;
                            } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s) return r.push(c), 
                            r;
                        } else {
                            if (f[2]) return Q.apply(r, e.getElementsByTagName(t)), r;
                            if ((s = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return Q.apply(r, e.getElementsByClassName(s)), 
                            r;
                        }
                        if (n.qsa && !O[t + " "] && (!g || !g.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                            if (v = t, y = e, 1 === w && (W.test(t) || $.test(t))) {
                                for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(rt, it) : e.setAttribute("id", u = x)), 
                                a = (d = o(t)).length; a--; ) d[a] = (u ? "#" + u : ":scope") + " " + bt(d[a]);
                                v = d.join(",");
                            }
                            try {
                                return Q.apply(r, y.querySelectorAll(v)), r;
                            } catch (e) {
                                O(t, !0);
                            } finally {
                                u === x && e.removeAttribute("id");
                            }
                        }
                    }
                    return l(t.replace(P, "$1"), e, r, i);
                }
                function lt() {
                    var t = [];
                    function e(n, i) {
                        return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = i;
                    }
                    return e;
                }
                function ct(t) {
                    return t[x] = !0, t;
                }
                function ut(t) {
                    var e = p.createElement("fieldset");
                    try {
                        return !!t(e);
                    } catch (t) {
                        return !1;
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null;
                    }
                }
                function ft(t, e) {
                    for (var n = t.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = e;
                }
                function ht(t, e) {
                    var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (r) return r;
                    if (n) for (;n = n.nextSibling; ) if (n === e) return -1;
                    return t ? 1 : -1;
                }
                function pt(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t;
                    };
                }
                function dt(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t;
                    };
                }
                function mt(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t;
                    };
                }
                function gt(t) {
                    return ct(function(e) {
                        return e = +e, ct(function(n, r) {
                            for (var i, s = t([], n.length, e), o = s.length; o--; ) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
                        });
                    });
                }
                function vt(t) {
                    return t && void 0 !== t.getElementsByTagName && t;
                }
                for (e in n = at.support = {}, s = at.isXML = function(t) {
                    var e = t.namespaceURI, n = (t.ownerDocument || t).documentElement;
                    return !G.test(e || n && n.nodeName || "HTML");
                }, h = at.setDocument = function(t) {
                    var e, i, o = t ? t.ownerDocument || t : w;
                    return o != p && 9 === o.nodeType && o.documentElement ? (d = (p = o).documentElement, 
                    m = !s(p), w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", st, !1) : i.attachEvent && i.attachEvent("onunload", st)), 
                    n.scope = ut(function(t) {
                        return d.appendChild(t).appendChild(p.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length;
                    }), n.attributes = ut(function(t) {
                        return t.className = "i", !t.getAttribute("className");
                    }), n.getElementsByTagName = ut(function(t) {
                        return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length;
                    }), n.getElementsByClassName = Z.test(p.getElementsByClassName), n.getById = ut(function(t) {
                        return d.appendChild(t).id = x, !p.getElementsByName || !p.getElementsByName(x).length;
                    }), n.getById ? (r.filter.ID = function(t) {
                        var e = t.replace(et, nt);
                        return function(t) {
                            return t.getAttribute("id") === e;
                        };
                    }, r.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var n = e.getElementById(t);
                            return n ? [ n ] : [];
                        }
                    }) : (r.filter.ID = function(t) {
                        var e = t.replace(et, nt);
                        return function(t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e;
                        };
                    }, r.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && m) {
                            var n, r, i, s = e.getElementById(t);
                            if (s) {
                                if ((n = s.getAttributeNode("id")) && n.value === t) return [ s ];
                                for (i = e.getElementsByName(t), r = 0; s = i[r++]; ) if ((n = s.getAttributeNode("id")) && n.value === t) return [ s ];
                            }
                            return [];
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
                    } : function(t, e) {
                        var n, r = [], i = 0, s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (;n = s[i++]; ) 1 === n.nodeType && r.push(n);
                            return r;
                        }
                        return s;
                    }, r.find.CLASS = n.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t);
                    }, v = [], g = [], (n.qsa = Z.test(p.querySelectorAll)) && (ut(function(t) {
                        var e;
                        d.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                        t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), 
                        t.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + R + ")"), 
                        t.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (e = p.createElement("input")).setAttribute("name", ""), 
                        t.appendChild(e), t.querySelectorAll("[name='']").length || g.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"), 
                        t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), 
                        t.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]");
                    }), ut(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 
                        2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), 
                        d.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), 
                        t.querySelectorAll("*,:x"), g.push(",.*:");
                    })), (n.matchesSelector = Z.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(t) {
                        n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", M);
                    }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), 
                    e = Z.test(d.compareDocumentPosition), b = e || Z.test(d.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)));
                    } : function(t, e) {
                        if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                        return !1;
                    }, S = e ? function(t, e) {
                        if (t === e) return f = !0, 0;
                        var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return r || (1 & (r = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t == p || t.ownerDocument == w && b(w, t) ? -1 : e == p || e.ownerDocument == w && b(w, e) ? 1 : u ? N(u, t) - N(u, e) : 0 : 4 & r ? -1 : 1);
                    } : function(t, e) {
                        if (t === e) return f = !0, 0;
                        var n, r = 0, i = t.parentNode, s = e.parentNode, o = [ t ], a = [ e ];
                        if (!i || !s) return t == p ? -1 : e == p ? 1 : i ? -1 : s ? 1 : u ? N(u, t) - N(u, e) : 0;
                        if (i === s) return ht(t, e);
                        for (n = t; n = n.parentNode; ) o.unshift(n);
                        for (n = e; n = n.parentNode; ) a.unshift(n);
                        for (;o[r] === a[r]; ) r++;
                        return r ? ht(o[r], a[r]) : o[r] == w ? -1 : a[r] == w ? 1 : 0;
                    }, p) : p;
                }, at.matches = function(t, e) {
                    return at(t, null, null, e);
                }, at.matchesSelector = function(t, e) {
                    if (h(t), n.matchesSelector && m && !O[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                        var r = y.call(t, e);
                        if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r;
                    } catch (t) {
                        O(e, !0);
                    }
                    return at(e, p, null, [ t ]).length > 0;
                }, at.contains = function(t, e) {
                    return (t.ownerDocument || t) != p && h(t), b(t, e);
                }, at.attr = function(t, e) {
                    (t.ownerDocument || t) != p && h(t);
                    var i = r.attrHandle[e.toLowerCase()], s = i && E.call(r.attrHandle, e.toLowerCase()) ? i(t, e, !m) : void 0;
                    return void 0 !== s ? s : n.attributes || !m ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null;
                }, at.escape = function(t) {
                    return (t + "").replace(rt, it);
                }, at.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t);
                }, at.uniqueSort = function(t) {
                    var e, r = [], i = 0, s = 0;
                    if (f = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(S), f) {
                        for (;e = t[s++]; ) e === t[s] && (i = r.push(s));
                        for (;i--; ) t.splice(r[i], 1);
                    }
                    return u = null, t;
                }, i = at.getText = function(t) {
                    var e, n = "", r = 0, s = t.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += i(t);
                        } else if (3 === s || 4 === s) return t.nodeValue;
                    } else for (;e = t[r++]; ) n += i(e);
                    return n;
                }, (r = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), 
                            "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), 
                            t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), 
                            t;
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), 
                            t[2] = n.slice(0, e)), t.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, nt).toLowerCase();
                            return "*" === t ? function() {
                                return !0;
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e;
                            };
                        },
                        CLASS: function(t) {
                            var e = C[t + " "];
                            return e || (e = new RegExp("(^|" + I + ")" + t + "(" + I + "|$)")) && C(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                            });
                        },
                        ATTR: function(t, e, n) {
                            return function(r) {
                                var i = at.attr(r, t);
                                return null == i ? "!=" === e : !e || (i += "", "=" === e ? i === n : "!=" === e ? i !== n : "^=" === e ? n && 0 === i.indexOf(n) : "*=" === e ? n && i.indexOf(n) > -1 : "$=" === e ? n && i.slice(-n.length) === n : "~=" === e ? (" " + i.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === e && (i === n || i.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function(t, e, n, r, i) {
                            var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                            return 1 === r && 0 === i ? function(t) {
                                return !!t.parentNode;
                            } : function(e, n, l) {
                                var c, u, f, h, p, d, m = s !== o ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                if (g) {
                                    if (s) {
                                        for (;m; ) {
                                            for (h = e; h = h[m]; ) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                            d = m = "only" === t && !d && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (d = [ o ? g.firstChild : g.lastChild ], o && y) {
                                        for (b = (p = (c = (u = (f = (h = g)[x] || (h[x] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === q && c[1]) && c[2], 
                                        h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || d.pop(); ) if (1 === h.nodeType && ++b && h === e) {
                                            u[t] = [ q, p, b ];
                                            break;
                                        }
                                    } else if (y && (b = p = (c = (u = (f = (h = e)[x] || (h[x] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === q && c[1]), 
                                    !1 === b) for (;(h = ++p && h && h[m] || (b = p = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (f = h[x] || (h[x] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] = [ q, b ]), 
                                    h !== e)); ) ;
                                    return (b -= i) === r || b % r == 0 && b / r >= 0;
                                }
                            };
                        },
                        PSEUDO: function(t, e) {
                            var n, i = r.pseudos[t] || r.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                            return i[x] ? i(e) : i.length > 1 ? (n = [ t, t, "", e ], r.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function(t, n) {
                                for (var r, s = i(t, e), o = s.length; o--; ) t[r = N(t, s[o])] = !(n[r] = s[o]);
                            }) : function(t) {
                                return i(t, 0, n);
                            }) : i;
                        }
                    },
                    pseudos: {
                        not: ct(function(t) {
                            var e = [], n = [], r = a(t.replace(P, "$1"));
                            return r[x] ? ct(function(t, e, n, i) {
                                for (var s, o = r(t, null, i, []), a = t.length; a--; ) (s = o[a]) && (t[a] = !(e[a] = s));
                            }) : function(t, i, s) {
                                return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop();
                            };
                        }),
                        has: ct(function(t) {
                            return function(e) {
                                return at(t, e).length > 0;
                            };
                        }),
                        contains: ct(function(t) {
                            return t = t.replace(et, nt), function(e) {
                                return (e.textContent || i(e)).indexOf(t) > -1;
                            };
                        }),
                        lang: ct(function(t) {
                            return V.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(), 
                            function(e) {
                                var n;
                                do {
                                    if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            };
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id;
                        },
                        root: function(t) {
                            return t === d;
                        },
                        focus: function(t) {
                            return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                        },
                        enabled: mt(!1),
                        disabled: mt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected;
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(t) {
                            return !r.pseudos.empty(t);
                        },
                        header: function(t) {
                            return Y.test(t.nodeName);
                        },
                        input: function(t) {
                            return K.test(t.nodeName);
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e;
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                        },
                        first: gt(function() {
                            return [ 0 ];
                        }),
                        last: gt(function(t, e) {
                            return [ e - 1 ];
                        }),
                        eq: gt(function(t, e, n) {
                            return [ n < 0 ? n + e : n ];
                        }),
                        even: gt(function(t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t;
                        }),
                        odd: gt(function(t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t;
                        }),
                        lt: gt(function(t, e, n) {
                            for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0; ) t.push(r);
                            return t;
                        }),
                        gt: gt(function(t, e, n) {
                            for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
                            return t;
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[e] = pt(e);
                for (e in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[e] = dt(e);
                function yt() {}
                function bt(t) {
                    for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                    return r;
                }
                function xt(t, e, n) {
                    var r = e.dir, i = e.next, s = i || r, o = n && "parentNode" === s, a = T++;
                    return e.first ? function(e, n, i) {
                        for (;e = e[r]; ) if (1 === e.nodeType || o) return t(e, n, i);
                        return !1;
                    } : function(e, n, l) {
                        var c, u, f, h = [ q, a ];
                        if (l) {
                            for (;e = e[r]; ) if ((1 === e.nodeType || o) && t(e, n, l)) return !0;
                        } else for (;e = e[r]; ) if (1 === e.nodeType || o) if (u = (f = e[x] || (e[x] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), 
                        i && i === e.nodeName.toLowerCase()) e = e[r] || e; else {
                            if ((c = u[s]) && c[0] === q && c[1] === a) return h[2] = c[2];
                            if (u[s] = h, h[2] = t(e, n, l)) return !0;
                        }
                        return !1;
                    };
                }
                function wt(t) {
                    return t.length > 1 ? function(e, n, r) {
                        for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
                        return !0;
                    } : t[0];
                }
                function qt(t, e, n) {
                    for (var r = 0, i = e.length; r < i; r++) at(t, e[r], n);
                    return n;
                }
                function Tt(t, e, n, r, i) {
                    for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++) (s = t[a]) && (n && !n(s, r, i) || (o.push(s), 
                    c && e.push(a)));
                    return o;
                }
                function Ct(t, e, n, r, i, s) {
                    return r && !r[x] && (r = Ct(r)), i && !i[x] && (i = Ct(i, s)), ct(function(s, o, a, l) {
                        var c, u, f, h = [], p = [], d = o.length, m = s || qt(e || "*", a.nodeType ? [ a ] : a, []), g = !t || !s && e ? m : Tt(m, h, t, a, l), v = n ? i || (s ? t : d || r) ? [] : o : g;
                        if (n && n(g, v, a, l), r) for (c = Tt(v, p), r(c, [], a, l), u = c.length; u--; ) (f = c[u]) && (v[p[u]] = !(g[p[u]] = f));
                        if (s) {
                            if (i || t) {
                                if (i) {
                                    for (c = [], u = v.length; u--; ) (f = v[u]) && c.push(g[u] = f);
                                    i(null, v = [], c, l);
                                }
                                for (u = v.length; u--; ) (f = v[u]) && (c = i ? N(s, f) : h[u]) > -1 && (s[c] = !(o[c] = f));
                            }
                        } else v = Tt(v === o ? v.splice(d, v.length) : v), i ? i(null, o, v, l) : Q.apply(o, v);
                    });
                }
                function kt(t) {
                    for (var e, n, i, s = t.length, o = r.relative[t[0].type], a = o || r.relative[" "], l = o ? 1 : 0, u = xt(function(t) {
                        return t === e;
                    }, a, !0), f = xt(function(t) {
                        return N(e, t) > -1;
                    }, a, !0), h = [ function(t, n, r) {
                        var i = !o && (r || n !== c) || ((e = n).nodeType ? u(t, n, r) : f(t, n, r));
                        return e = null, i;
                    } ]; l < s; l++) if (n = r.relative[t[l].type]) h = [ xt(wt(h), n) ]; else {
                        if ((n = r.filter[t[l].type].apply(null, t[l].matches))[x]) {
                            for (i = ++l; i < s && !r.relative[t[i].type]; i++) ;
                            return Ct(l > 1 && wt(h), l > 1 && bt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(P, "$1"), n, l < i && kt(t.slice(l, i)), i < s && kt(t = t.slice(i)), i < s && bt(t));
                        }
                        h.push(n);
                    }
                    return wt(h);
                }
                function jt(t, e) {
                    var n = e.length > 0, i = t.length > 0, s = function(s, o, a, l, u) {
                        var f, d, g, v = 0, y = "0", b = s && [], x = [], w = c, T = s || i && r.find.TAG("*", u), C = q += null == w ? 1 : Math.random() || .1, k = T.length;
                        for (u && (c = o == p || o || u); y !== k && null != (f = T[y]); y++) {
                            if (i && f) {
                                for (d = 0, o || f.ownerDocument == p || (h(f), a = !m); g = t[d++]; ) if (g(f, o || p, a)) {
                                    l.push(f);
                                    break;
                                }
                                u && (q = C);
                            }
                            n && ((f = !g && f) && v--, s && b.push(f));
                        }
                        if (v += y, n && y !== v) {
                            for (d = 0; g = e[d++]; ) g(b, x, o, a);
                            if (s) {
                                if (v > 0) for (;y--; ) b[y] || x[y] || (x[y] = A.call(l));
                                x = Tt(x);
                            }
                            Q.apply(l, x), u && !s && x.length > 0 && v + e.length > 1 && at.uniqueSort(l);
                        }
                        return u && (q = C, c = w), b;
                    };
                    return n ? ct(s) : s;
                }
                return yt.prototype = r.filters = r.pseudos, r.setFilters = new yt(), o = at.tokenize = function(t, e) {
                    var n, i, s, o, a, l, c, u = k[t + " "];
                    if (u) return e ? 0 : u.slice(0);
                    for (a = t, l = [], c = r.preFilter; a; ) {
                        for (o in n && !(i = F.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(s = [])), 
                        n = !1, (i = $.exec(a)) && (n = i.shift(), s.push({
                            value: n,
                            type: i[0].replace(P, " ")
                        }), a = a.slice(n.length)), r.filter) !(i = X[o].exec(a)) || c[o] && !(i = c[o](i)) || (n = i.shift(), 
                        s.push({
                            value: n,
                            type: o,
                            matches: i
                        }), a = a.slice(n.length));
                        if (!n) break;
                    }
                    return e ? a.length : a ? at.error(t) : k(t, l).slice(0);
                }, a = at.compile = function(t, e) {
                    var n, r = [], i = [], s = j[t + " "];
                    if (!s) {
                        for (e || (e = o(t)), n = e.length; n--; ) (s = kt(e[n]))[x] ? r.push(s) : i.push(s);
                        (s = j(t, jt(i, r))).selector = t;
                    }
                    return s;
                }, l = at.select = function(t, e, n, i) {
                    var s, l, c, u, f, h = "function" == typeof t && t, p = !i && o(t = h.selector || t);
                    if (n = n || [], 1 === p.length) {
                        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && r.relative[l[1].type]) {
                            if (!(e = (r.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                            h && (e = e.parentNode), t = t.slice(l.shift().value.length);
                        }
                        for (s = X.needsContext.test(t) ? 0 : l.length; s-- && (c = l[s], !r.relative[u = c.type]); ) if ((f = r.find[u]) && (i = f(c.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(s, 1), !(t = i.length && bt(l))) return Q.apply(n, i), n;
                            break;
                        }
                    }
                    return (h || a(t, p))(i, e, !m, n, !e || tt.test(t) && vt(e.parentNode) || e), n;
                }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!f, 
                h(), n.sortDetached = ut(function(t) {
                    return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
                }), ut(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
                }) || ft("type|href|height|width", function(t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                }), n.attributes && ut(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                }) || ft("value", function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                }), ut(function(t) {
                    return null == t.getAttribute("disabled");
                }) || ft(R, function(t, e, n) {
                    var r;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
                }), at;
            }(n);
            C.find = j, C.expr = j.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = j.uniqueSort, 
            C.text = j.getText, C.isXMLDoc = j.isXML, C.contains = j.contains, C.escapeSelector = j.escape;
            var O = function(t, e, n) {
                for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
                    if (i && C(t).is(n)) break;
                    r.push(t);
                }
                return r;
            }, S = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n;
            }, E = C.expr.match.needsContext;
            function D(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
            }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function L(t, e, n) {
                return v(e) ? C.grep(t, function(t, r) {
                    return !!e.call(t, r, t) !== n;
                }) : e.nodeType ? C.grep(t, function(t) {
                    return t === e !== n;
                }) : "string" != typeof e ? C.grep(t, function(t) {
                    return u.call(e, t) > -1 !== n;
                }) : C.filter(e, t, n);
            }
            C.filter = function(t, e, n) {
                var r = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? C.find.matchesSelector(r, t) ? [ r ] : [] : C.find.matches(t, C.grep(e, function(t) {
                    return 1 === t.nodeType;
                }));
            }, C.fn.extend({
                find: function(t) {
                    var e, n, r = this.length, i = this;
                    if ("string" != typeof t) return this.pushStack(C(t).filter(function() {
                        for (e = 0; e < r; e++) if (C.contains(i[e], this)) return !0;
                    }));
                    for (n = this.pushStack([]), e = 0; e < r; e++) C.find(t, i[e], n);
                    return r > 1 ? C.uniqueSort(n) : n;
                },
                filter: function(t) {
                    return this.pushStack(L(this, t || [], !1));
                },
                not: function(t) {
                    return this.pushStack(L(this, t || [], !0));
                },
                is: function(t) {
                    return !!L(this, "string" == typeof t && E.test(t) ? C(t) : t || [], !1).length;
                }
            });
            var Q, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function(t, e, n) {
                var r, i;
                if (!t) return this;
                if (n = n || Q, "string" == typeof t) {
                    if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [ null, t, null ] : _.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (r[1]) {
                        if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : b, !0)), 
                        A.test(r[1]) && C.isPlainObject(e)) for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                        return this;
                    }
                    return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== n.ready ? n.ready(t) : t(C) : C.makeArray(t, this);
            }).prototype = C.fn, Q = C(b);
            var N = /^(?:parents|prev(?:Until|All))/, R = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function I(t, e) {
                for (;(t = t[e]) && 1 !== t.nodeType; ) ;
                return t;
            }
            C.fn.extend({
                has: function(t) {
                    var e = C(t, this), n = e.length;
                    return this.filter(function() {
                        for (var t = 0; t < n; t++) if (C.contains(this, e[t])) return !0;
                    });
                },
                closest: function(t, e) {
                    var n, r = 0, i = this.length, s = [], o = "string" != typeof t && C(t);
                    if (!E.test(t)) for (;r < i; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, t))) {
                        s.push(n);
                        break;
                    }
                    return this.pushStack(s.length > 1 ? C.uniqueSort(s) : s);
                },
                index: function(t) {
                    return t ? "string" == typeof t ? u.call(C(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(t, e) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))));
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                }
            }), C.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function(t) {
                    return O(t, "parentNode");
                },
                parentsUntil: function(t, e, n) {
                    return O(t, "parentNode", n);
                },
                next: function(t) {
                    return I(t, "nextSibling");
                },
                prev: function(t) {
                    return I(t, "previousSibling");
                },
                nextAll: function(t) {
                    return O(t, "nextSibling");
                },
                prevAll: function(t) {
                    return O(t, "previousSibling");
                },
                nextUntil: function(t, e, n) {
                    return O(t, "nextSibling", n);
                },
                prevUntil: function(t, e, n) {
                    return O(t, "previousSibling", n);
                },
                siblings: function(t) {
                    return S((t.parentNode || {}).firstChild, t);
                },
                children: function(t) {
                    return S(t.firstChild);
                },
                contents: function(t) {
                    return null != t.contentDocument && o(t.contentDocument) ? t.contentDocument : (D(t, "template") && (t = t.content || t), 
                    C.merge([], t.childNodes));
                }
            }, function(t, e) {
                C.fn[t] = function(n, r) {
                    var i = C.map(this, e, n);
                    return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), 
                    this.length > 1 && (R[t] || C.uniqueSort(i), N.test(t) && i.reverse()), this.pushStack(i);
                };
            });
            var H = /[^\x20\t\r\n\f]+/g;
            function B(t) {
                var e = {};
                return C.each(t.match(H) || [], function(t, n) {
                    e[n] = !0;
                }), e;
            }
            function M(t) {
                return t;
            }
            function z(t) {
                throw t;
            }
            function P(t, e, n, r) {
                var i;
                try {
                    t && v(i = t.promise) ? i.call(t).done(e).fail(n) : t && v(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [ t ].slice(r));
                } catch (t) {
                    n.apply(void 0, [ t ]);
                }
            }
            C.Callbacks = function(t) {
                t = "string" == typeof t ? B(t) : C.extend({}, t);
                var e, n, r, i, s = [], o = [], a = -1, l = function() {
                    for (i = i || t.once, r = e = !0; o.length; a = -1) for (n = o.shift(); ++a < s.length; ) !1 === s[a].apply(n[0], n[1]) && t.stopOnFalse && (a = s.length, 
                    n = !1);
                    t.memory || (n = !1), e = !1, i && (s = n ? [] : "");
                }, c = {
                    add: function() {
                        return s && (n && !e && (a = s.length - 1, o.push(n)), function e(n) {
                            C.each(n, function(n, r) {
                                v(r) ? t.unique && c.has(r) || s.push(r) : r && r.length && "string" !== q(r) && e(r);
                            });
                        }(arguments), n && !e && l()), this;
                    },
                    remove: function() {
                        return C.each(arguments, function(t, e) {
                            for (var n; (n = C.inArray(e, s, n)) > -1; ) s.splice(n, 1), n <= a && a--;
                        }), this;
                    },
                    has: function(t) {
                        return t ? C.inArray(t, s) > -1 : s.length > 0;
                    },
                    empty: function() {
                        return s && (s = []), this;
                    },
                    disable: function() {
                        return i = o = [], s = n = "", this;
                    },
                    disabled: function() {
                        return !s;
                    },
                    lock: function() {
                        return i = o = [], n || e || (s = n = ""), this;
                    },
                    locked: function() {
                        return !!i;
                    },
                    fireWith: function(t, n) {
                        return i || (n = [ t, (n = n || []).slice ? n.slice() : n ], o.push(n), e || l()), 
                        this;
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!r;
                    }
                };
                return c;
            }, C.extend({
                Deferred: function(t) {
                    var e = [ [ "notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2 ], [ "resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                        state: function() {
                            return r;
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function(t) {
                            return i.then(null, t);
                        },
                        pipe: function() {
                            var t = arguments;
                            return C.Deferred(function(n) {
                                C.each(e, function(e, r) {
                                    var i = v(t[r[4]]) && t[r[4]];
                                    s[r[1]](function() {
                                        var t = i && i.apply(this, arguments);
                                        t && v(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [ t ] : arguments);
                                    });
                                }), t = null;
                            }).promise();
                        },
                        then: function(t, r, i) {
                            var s = 0;
                            function o(t, e, r, i) {
                                return function() {
                                    var a = this, l = arguments, c = function() {
                                        var n, c;
                                        if (!(t < s)) {
                                            if ((n = r.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? i ? c.call(n, o(s, e, M, i), o(s, e, z, i)) : (s++, 
                                            c.call(n, o(s, e, M, i), o(s, e, z, i), o(s, e, M, e.notifyWith))) : (r !== M && (a = void 0, 
                                            l = [ n ]), (i || e.resolveWith)(a, l));
                                        }
                                    }, u = i ? c : function() {
                                        try {
                                            c();
                                        } catch (n) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, u.stackTrace), t + 1 >= s && (r !== z && (a = void 0, 
                                            l = [ n ]), e.rejectWith(a, l));
                                        }
                                    };
                                    t ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), 
                                    n.setTimeout(u));
                                };
                            }
                            return C.Deferred(function(n) {
                                e[0][3].add(o(0, n, v(i) ? i : M, n.notifyWith)), e[1][3].add(o(0, n, v(t) ? t : M)), 
                                e[2][3].add(o(0, n, v(r) ? r : z));
                            }).promise();
                        },
                        promise: function(t) {
                            return null != t ? C.extend(t, i) : i;
                        }
                    }, s = {};
                    return C.each(e, function(t, n) {
                        var o = n[2], a = n[5];
                        i[n[1]] = o.add, a && o.add(function() {
                            r = a;
                        }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), o.add(n[3].fire), 
                        s[n[0]] = function() {
                            return s[n[0] + "With"](this === s ? void 0 : this, arguments), this;
                        }, s[n[0] + "With"] = o.fireWith;
                    }), i.promise(s), t && t.call(s, s), s;
                },
                when: function(t) {
                    var e = arguments.length, n = e, r = Array(n), i = a.call(arguments), s = C.Deferred(), o = function(t) {
                        return function(n) {
                            r[t] = this, i[t] = arguments.length > 1 ? a.call(arguments) : n, --e || s.resolveWith(r, i);
                        };
                    };
                    if (e <= 1 && (P(t, s.done(o(n)).resolve, s.reject, !e), "pending" === s.state() || v(i[n] && i[n].then))) return s.then();
                    for (;n--; ) P(i[n], o(n), s.reject);
                    return s.promise();
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(t, e) {
                n.console && n.console.warn && t && F.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
            }, C.readyException = function(t) {
                n.setTimeout(function() {
                    throw t;
                });
            };
            var $ = C.Deferred();
            function W() {
                b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), 
                C.ready();
            }
            C.fn.ready = function(t) {
                return $.then(t).catch(function(t) {
                    C.readyException(t);
                }), this;
            }, C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(t) {
                    (!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== t && --C.readyWait > 0 || $.resolveWith(b, [ C ]));
                }
            }), C.ready.then = $.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", W), 
            n.addEventListener("load", W));
            var U = function(t, e, n, r, i, s, o) {
                var a = 0, l = t.length, c = null == n;
                if ("object" === q(n)) for (a in i = !0, n) U(t, e, a, n[a], !0, s, o); else if (void 0 !== r && (i = !0, 
                v(r) || (o = !0), c && (o ? (e.call(t, r), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(C(t), n);
                })), e)) for (;a < l; a++) e(t[a], n, o ? r : r.call(t[a], a, e(t[a], n)));
                return i ? t : c ? e.call(t) : l ? e(t[0], n) : s;
            }, V = /^-ms-/, X = /-([a-z])/g;
            function G(t, e) {
                return e.toUpperCase();
            }
            function K(t) {
                return t.replace(V, "ms-").replace(X, G);
            }
            var Y = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            };
            function Z() {
                this.expando = C.expando + Z.uid++;
            }
            Z.uid = 1, Z.prototype = {
                cache: function(t) {
                    var e = t[this.expando];
                    return e || (e = {}, Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))), e;
                },
                set: function(t, e, n) {
                    var r, i = this.cache(t);
                    if ("string" == typeof e) i[K(e)] = n; else for (r in e) i[K(r)] = e[r];
                    return i;
                },
                get: function(t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][K(e)];
                },
                access: function(t, e, n) {
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), 
                    void 0 !== n ? n : e);
                },
                remove: function(t, e) {
                    var n, r = t[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== e) {
                            n = (e = Array.isArray(e) ? e.map(K) : (e = K(e)) in r ? [ e ] : e.match(H) || []).length;
                            for (;n--; ) delete r[e[n]];
                        }
                        (void 0 === e || C.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
                    }
                },
                hasData: function(t) {
                    var e = t[this.expando];
                    return void 0 !== e && !C.isEmptyObject(e);
                }
            };
            var J = new Z(), tt = new Z(), et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, nt = /[A-Z]/g;
            function rt(t) {
                return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : et.test(t) ? JSON.parse(t) : t);
            }
            function it(t, e, n) {
                var r;
                if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(nt, "-$&").toLowerCase(), 
                "string" == typeof (n = t.getAttribute(r))) {
                    try {
                        n = rt(n);
                    } catch (t) {}
                    tt.set(t, e, n);
                } else n = void 0;
                return n;
            }
            C.extend({
                hasData: function(t) {
                    return tt.hasData(t) || J.hasData(t);
                },
                data: function(t, e, n) {
                    return tt.access(t, e, n);
                },
                removeData: function(t, e) {
                    tt.remove(t, e);
                },
                _data: function(t, e, n) {
                    return J.access(t, e, n);
                },
                _removeData: function(t, e) {
                    J.remove(t, e);
                }
            }), C.fn.extend({
                data: function(t, e) {
                    var n, r, i, s = this[0], o = s && s.attributes;
                    if (void 0 === t) {
                        if (this.length && (i = tt.get(s), 1 === s.nodeType && !J.get(s, "hasDataAttrs"))) {
                            for (n = o.length; n--; ) o[n] && 0 === (r = o[n].name).indexOf("data-") && (r = K(r.slice(5)), 
                            it(s, r, i[r]));
                            J.set(s, "hasDataAttrs", !0);
                        }
                        return i;
                    }
                    return "object" == typeof t ? this.each(function() {
                        tt.set(this, t);
                    }) : U(this, function(e) {
                        var n;
                        if (s && void 0 === e) return void 0 !== (n = tt.get(s, t)) ? n : void 0 !== (n = it(s, t)) ? n : void 0;
                        this.each(function() {
                            tt.set(this, t, e);
                        });
                    }, null, e, arguments.length > 1, null, !0);
                },
                removeData: function(t) {
                    return this.each(function() {
                        tt.remove(this, t);
                    });
                }
            }), C.extend({
                queue: function(t, e, n) {
                    var r;
                    if (t) return e = (e || "fx") + "queue", r = J.get(t, e), n && (!r || Array.isArray(n) ? r = J.access(t, e, C.makeArray(n)) : r.push(n)), 
                    r || [];
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var n = C.queue(t, e), r = n.length, i = n.shift(), s = C._queueHooks(t, e), o = function() {
                        C.dequeue(t, e);
                    };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), 
                    delete s.stop, i.call(t, o, s)), !r && s && s.empty.fire();
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return J.get(t, n) || J.access(t, n, {
                        empty: C.Callbacks("once memory").add(function() {
                            J.remove(t, [ e + "queue", n ]);
                        })
                    });
                }
            }), C.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? C.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var n = C.queue(this, t, e);
                        C._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && C.dequeue(this, t);
                    });
                },
                dequeue: function(t) {
                    return this.each(function() {
                        C.dequeue(this, t);
                    });
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", []);
                },
                promise: function(t, e) {
                    var n, r = 1, i = C.Deferred(), s = this, o = this.length, a = function() {
                        --r || i.resolveWith(s, [ s ]);
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--; ) (n = J.get(s[o], t + "queueHooks")) && n.empty && (r++, 
                    n.empty.add(a));
                    return a(), i.promise(e);
                }
            });
            var st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ot = new RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"), at = [ "Top", "Right", "Bottom", "Left" ], lt = b.documentElement, ct = function(t) {
                return C.contains(t.ownerDocument, t);
            }, ut = {
                composed: !0
            };
            lt.getRootNode && (ct = function(t) {
                return C.contains(t.ownerDocument, t) || t.getRootNode(ut) === t.ownerDocument;
            });
            var ft = function(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && ct(t) && "none" === C.css(t, "display");
            };
            function ht(t, e, n, r) {
                var i, s, o = 20, a = r ? function() {
                    return r.cur();
                } : function() {
                    return C.css(t, e, "");
                }, l = a(), c = n && n[3] || (C.cssNumber[e] ? "" : "px"), u = t.nodeType && (C.cssNumber[e] || "px" !== c && +l) && ot.exec(C.css(t, e));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; o--; ) C.style(t, e, u + c), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), 
                    u /= s;
                    u *= 2, C.style(t, e, u + c), n = n || [];
                }
                return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, 
                r.start = u, r.end = i)), i;
            }
            var pt = {};
            function dt(t) {
                var e, n = t.ownerDocument, r = t.nodeName, i = pt[r];
                return i || (e = n.body.appendChild(n.createElement(r)), i = C.css(e, "display"), 
                e.parentNode.removeChild(e), "none" === i && (i = "block"), pt[r] = i, i);
            }
            function mt(t, e) {
                for (var n, r, i = [], s = 0, o = t.length; s < o; s++) (r = t[s]).style && (n = r.style.display, 
                e ? ("none" === n && (i[s] = J.get(r, "display") || null, i[s] || (r.style.display = "")), 
                "" === r.style.display && ft(r) && (i[s] = dt(r))) : "none" !== n && (i[s] = "none", 
                J.set(r, "display", n)));
                for (s = 0; s < o; s++) null != i[s] && (t[s].style.display = i[s]);
                return t;
            }
            C.fn.extend({
                show: function() {
                    return mt(this, !0);
                },
                hide: function() {
                    return mt(this);
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        ft(this) ? C(this).show() : C(this).hide();
                    });
                }
            });
            var gt, vt, yt = /^(?:checkbox|radio)$/i, bt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, xt = /^$|^module$|\/(?:java|ecma)script/i;
            gt = b.createDocumentFragment().appendChild(b.createElement("div")), (vt = b.createElement("input")).setAttribute("type", "radio"), 
            vt.setAttribute("checked", "checked"), vt.setAttribute("name", "t"), gt.appendChild(vt), 
            g.checkClone = gt.cloneNode(!0).cloneNode(!0).lastChild.checked, gt.innerHTML = "<textarea>x</textarea>", 
            g.noCloneChecked = !!gt.cloneNode(!0).lastChild.defaultValue, gt.innerHTML = "<option></option>", 
            g.option = !!gt.lastChild;
            var wt = {
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            function qt(t, e) {
                var n;
                return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], 
                void 0 === e || e && D(t, e) ? C.merge([ t ], n) : n;
            }
            function Tt(t, e) {
                for (var n = 0, r = t.length; n < r; n++) J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"));
            }
            wt.tbody = wt.tfoot = wt.colgroup = wt.caption = wt.thead, wt.th = wt.td, g.option || (wt.optgroup = wt.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
            var Ct = /<|&#?\w+;/;
            function kt(t, e, n, r, i) {
                for (var s, o, a, l, c, u, f = e.createDocumentFragment(), h = [], p = 0, d = t.length; p < d; p++) if ((s = t[p]) || 0 === s) if ("object" === q(s)) C.merge(h, s.nodeType ? [ s ] : s); else if (Ct.test(s)) {
                    for (o = o || f.appendChild(e.createElement("div")), a = (bt.exec(s) || [ "", "" ])[1].toLowerCase(), 
                    l = wt[a] || wt._default, o.innerHTML = l[1] + C.htmlPrefilter(s) + l[2], u = l[0]; u--; ) o = o.lastChild;
                    C.merge(h, o.childNodes), (o = f.firstChild).textContent = "";
                } else h.push(e.createTextNode(s));
                for (f.textContent = "", p = 0; s = h[p++]; ) if (r && C.inArray(s, r) > -1) i && i.push(s); else if (c = ct(s), 
                o = qt(f.appendChild(s), "script"), c && Tt(o), n) for (u = 0; s = o[u++]; ) xt.test(s.type || "") && n.push(s);
                return f;
            }
            var jt = /^key/, Ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, St = /^([^.]*)(?:\.(.+)|)/;
            function Et() {
                return !0;
            }
            function Dt() {
                return !1;
            }
            function At(t, e) {
                return t === Lt() == ("focus" === e);
            }
            function Lt() {
                try {
                    return b.activeElement;
                } catch (t) {}
            }
            function Qt(t, e, n, r, i, s) {
                var o, a;
                if ("object" == typeof e) {
                    for (a in "string" != typeof n && (r = r || n, n = void 0), e) Qt(t, a, n, r, e[a], s);
                    return t;
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
                r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Dt; else if (!i) return t;
                return 1 === s && (o = i, (i = function(t) {
                    return C().off(t), o.apply(this, arguments);
                }).guid = o.guid || (o.guid = C.guid++)), t.each(function() {
                    C.event.add(this, e, i, r, n);
                });
            }
            function _t(t, e, n) {
                n ? (J.set(t, e, !1), C.event.add(t, e, {
                    namespace: !1,
                    handler: function(t) {
                        var r, i, s = J.get(this, e);
                        if (1 & t.isTrigger && this[e]) {
                            if (s.length) (C.event.special[e] || {}).delegateType && t.stopPropagation(); else if (s = a.call(arguments), 
                            J.set(this, e, s), r = n(this, e), this[e](), s !== (i = J.get(this, e)) || r ? J.set(this, e, !1) : i = {}, 
                            s !== i) return t.stopImmediatePropagation(), t.preventDefault(), i.value;
                        } else s.length && (J.set(this, e, {
                            value: C.event.trigger(C.extend(s[0], C.Event.prototype), s.slice(1), this)
                        }), t.stopImmediatePropagation());
                    }
                })) : void 0 === J.get(t, e) && C.event.add(t, e, Et);
            }
            C.event = {
                global: {},
                add: function(t, e, n, r, i) {
                    var s, o, a, l, c, u, f, h, p, d, m, g = J.get(t);
                    if (Y(t)) for (n.handler && (n = (s = n).handler, i = s.selector), i && C.find.matchesSelector(lt, i), 
                    n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = Object.create(null)), 
                    (o = g.handle) || (o = g.handle = function(e) {
                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0;
                    }), c = (e = (e || "").match(H) || [ "" ]).length; c--; ) p = m = (a = St.exec(e[c]) || [])[1], 
                    d = (a[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, 
                    f = C.event.special[p] || {}, u = C.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, d, o) || t.addEventListener && t.addEventListener(p, o)), 
                    f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, u) : h.push(u), 
                    C.event.global[p] = !0);
                },
                remove: function(t, e, n, r, i) {
                    var s, o, a, l, c, u, f, h, p, d, m, g = J.hasData(t) && J.get(t);
                    if (g && (l = g.events)) {
                        for (c = (e = (e || "").match(H) || [ "" ]).length; c--; ) if (p = m = (a = St.exec(e[c]) || [])[1], 
                        d = (a[2] || "").split(".").sort(), p) {
                            for (f = C.event.special[p] || {}, h = l[p = (r ? f.delegateType : f.bindType) || p] || [], 
                            a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--; ) u = h[s], 
                            !i && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (h.splice(s, 1), 
                            u.selector && h.delegateCount--, f.remove && f.remove.call(t, u));
                            o && !h.length && (f.teardown && !1 !== f.teardown.call(t, d, g.handle) || C.removeEvent(t, p, g.handle), 
                            delete l[p]);
                        } else for (p in l) C.event.remove(t, p + e[c], n, r, !0);
                        C.isEmptyObject(l) && J.remove(t, "handle events");
                    }
                },
                dispatch: function(t) {
                    var e, n, r, i, s, o, a = new Array(arguments.length), l = C.event.fix(t), c = (J.get(this, "events") || Object.create(null))[l.type] || [], u = C.event.special[l.type] || {};
                    for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                    if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                        for (o = C.event.handlers.call(this, l, c), e = 0; (i = o[e++]) && !l.isPropagationStopped(); ) for (l.currentTarget = i.elem, 
                        n = 0; (s = i.handlers[n++]) && !l.isImmediatePropagationStopped(); ) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, 
                        l.data = s.data, void 0 !== (r = ((C.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(), 
                        l.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, l), l.result;
                    }
                },
                handlers: function(t, e) {
                    var n, r, i, s, o, a = [], l = e.delegateCount, c = t.target;
                    if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[i = (r = e[n]).selector + " "] && (o[i] = r.needsContext ? C(i, this).index(c) > -1 : C.find(i, this, null, [ c ]).length), 
                        o[i] && s.push(r);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        });
                    }
                    return c = this, l < e.length && a.push({
                        elem: c,
                        handlers: e.slice(l)
                    }), a;
                },
                addProp: function(t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(e) ? function() {
                            if (this.originalEvent) return e(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[t];
                        },
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            });
                        }
                    });
                },
                fix: function(t) {
                    return t[C.expando] ? t : new C.Event(t);
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(t) {
                            var e = this || t;
                            return yt.test(e.type) && e.click && D(e, "input") && _t(e, "click", Et), !1;
                        },
                        trigger: function(t) {
                            var e = this || t;
                            return yt.test(e.type) && e.click && D(e, "input") && _t(e, "click"), !0;
                        },
                        _default: function(t) {
                            var e = t.target;
                            return yt.test(e.type) && e.click && D(e, "input") && J.get(e, "click") || D(e, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                        }
                    }
                }
            }, C.removeEvent = function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n);
            }, C.Event = function(t, e) {
                if (!(this instanceof C.Event)) return new C.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Et : Dt, 
                this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, 
                this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, 
                e && C.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[C.expando] = !0;
            }, C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: Dt,
                isPropagationStopped: Dt,
                isImmediatePropagationStopped: Dt,
                isSimulated: !1,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = Et, t && !this.isSimulated && t.preventDefault();
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = Et, t && !this.isSimulated && t.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = Et, t && !this.isSimulated && t.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, C.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(t) {
                    var e = t.button;
                    return null == t.which && jt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Ot.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
                }
            }, C.event.addProp), C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                C.event.special[t] = {
                    setup: function() {
                        return _t(this, t, At), !1;
                    },
                    trigger: function() {
                        return _t(this, t), !0;
                    },
                    delegateType: e
                };
            }), C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, e) {
                C.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, r = this, i = t.relatedTarget, s = t.handleObj;
                        return i && (i === r || C.contains(r, i)) || (t.type = s.origType, n = s.handler.apply(this, arguments), 
                        t.type = e), n;
                    }
                };
            }), C.fn.extend({
                on: function(t, e, n, r) {
                    return Qt(this, t, e, n, r);
                },
                one: function(t, e, n, r) {
                    return Qt(this, t, e, n, r, 1);
                },
                off: function(t, e, n) {
                    var r, i;
                    if (t && t.preventDefault && t.handleObj) return r = t.handleObj, C(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                    this;
                    if ("object" == typeof t) {
                        for (i in t) this.off(i, e, t[i]);
                        return this;
                    }
                    return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Dt), 
                    this.each(function() {
                        C.event.remove(this, t, n, e);
                    });
                }
            });
            var Nt = /<script|<style|<link/i, Rt = /checked\s*(?:[^=]|=\s*.checked.)/i, It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ht(t, e) {
                return D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t;
            }
            function Bt(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
            }
            function Mt(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), 
                t;
            }
            function zt(t, e) {
                var n, r, i, s, o, a;
                if (1 === e.nodeType) {
                    if (J.hasData(t) && (a = J.get(t).events)) for (i in J.remove(e, "handle events"), 
                    a) for (n = 0, r = a[i].length; n < r; n++) C.event.add(e, i, a[i][n]);
                    tt.hasData(t) && (s = tt.access(t), o = C.extend({}, s), tt.set(e, o));
                }
            }
            function Pt(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && yt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
            }
            function Ft(t, e, n, r) {
                e = l(e);
                var i, s, o, a, c, u, f = 0, h = t.length, p = h - 1, d = e[0], m = v(d);
                if (m || h > 1 && "string" == typeof d && !g.checkClone && Rt.test(d)) return t.each(function(i) {
                    var s = t.eq(i);
                    m && (e[0] = d.call(this, i, s.html())), Ft(s, e, n, r);
                });
                if (h && (s = (i = kt(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === i.childNodes.length && (i = s), 
                s || r)) {
                    for (a = (o = C.map(qt(i, "script"), Bt)).length; f < h; f++) c = i, f !== p && (c = C.clone(c, !0, !0), 
                    a && C.merge(o, qt(c, "script"))), n.call(t[f], c, f);
                    if (a) for (u = o[o.length - 1].ownerDocument, C.map(o, Mt), f = 0; f < a; f++) c = o[f], 
                    xt.test(c.type || "") && !J.access(c, "globalEval") && C.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, u) : w(c.textContent.replace(It, ""), c, u));
                }
                return t;
            }
            function $t(t, e, n) {
                for (var r, i = e ? C.filter(e, t) : t, s = 0; null != (r = i[s]); s++) n || 1 !== r.nodeType || C.cleanData(qt(r)), 
                r.parentNode && (n && ct(r) && Tt(qt(r, "script")), r.parentNode.removeChild(r));
                return t;
            }
            C.extend({
                htmlPrefilter: function(t) {
                    return t;
                },
                clone: function(t, e, n) {
                    var r, i, s, o, a = t.cloneNode(!0), l = ct(t);
                    if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t))) for (o = qt(a), 
                    r = 0, i = (s = qt(t)).length; r < i; r++) Pt(s[r], o[r]);
                    if (e) if (n) for (s = s || qt(t), o = o || qt(a), r = 0, i = s.length; r < i; r++) zt(s[r], o[r]); else zt(t, a);
                    return (o = qt(a, "script")).length > 0 && Tt(o, !l && qt(t, "script")), a;
                },
                cleanData: function(t) {
                    for (var e, n, r, i = C.event.special, s = 0; void 0 !== (n = t[s]); s++) if (Y(n)) {
                        if (e = n[J.expando]) {
                            if (e.events) for (r in e.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, e.handle);
                            n[J.expando] = void 0;
                        }
                        n[tt.expando] && (n[tt.expando] = void 0);
                    }
                }
            }), C.fn.extend({
                detach: function(t) {
                    return $t(this, t, !0);
                },
                remove: function(t) {
                    return $t(this, t);
                },
                text: function(t) {
                    return U(this, function(t) {
                        return void 0 === t ? C.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                        });
                    }, null, t, arguments.length);
                },
                append: function() {
                    return Ft(this, arguments, function(t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ht(this, t).appendChild(t);
                    });
                },
                prepend: function() {
                    return Ft(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Ht(this, t);
                            e.insertBefore(t, e.firstChild);
                        }
                    });
                },
                before: function() {
                    return Ft(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this);
                    });
                },
                after: function() {
                    return Ft(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                    });
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(qt(t, !1)), 
                    t.textContent = "");
                    return this;
                },
                clone: function(t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function() {
                        return C.clone(this, t, e);
                    });
                },
                html: function(t) {
                    return U(this, function(t) {
                        var e = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Nt.test(t) && !wt[(bt.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                            t = C.htmlPrefilter(t);
                            try {
                                for (;n < r; n++) 1 === (e = this[n] || {}).nodeType && (C.cleanData(qt(e, !1)), 
                                e.innerHTML = t);
                                e = 0;
                            } catch (t) {}
                        }
                        e && this.empty().append(t);
                    }, null, t, arguments.length);
                },
                replaceWith: function() {
                    var t = [];
                    return Ft(this, arguments, function(e) {
                        var n = this.parentNode;
                        C.inArray(this, t) < 0 && (C.cleanData(qt(this)), n && n.replaceChild(e, this));
                    }, t);
                }
            }), C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, e) {
                C.fn[t] = function(t) {
                    for (var n, r = [], i = C(t), s = i.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), 
                    C(i[o])[e](n), c.apply(r, n.get());
                    return this.pushStack(r);
                };
            });
            var Wt = new RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"), Ut = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t);
            }, Vt = function(t, e, n) {
                var r, i, s = {};
                for (i in e) s[i] = t.style[i], t.style[i] = e[i];
                for (i in r = n.call(t), e) t.style[i] = s[i];
                return r;
            }, Xt = new RegExp(at.join("|"), "i");
            function Gt(t, e, n) {
                var r, i, s, o, a = t.style;
                return (n = n || Ut(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || ct(t) || (o = C.style(t, e)), 
                !g.pixelBoxStyles() && Wt.test(o) && Xt.test(e) && (r = a.width, i = a.minWidth, 
                s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = r, 
                a.minWidth = i, a.maxWidth = s)), void 0 !== o ? o + "" : o;
            }
            function Kt(t, e) {
                return {
                    get: function() {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            !function() {
                function t() {
                    if (u) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                        u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                        lt.appendChild(c).appendChild(u);
                        var t = n.getComputedStyle(u);
                        r = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", o = 36 === e(t.right), 
                        i = 36 === e(t.width), u.style.position = "absolute", s = 12 === e(u.offsetWidth / 3), 
                        lt.removeChild(c), u = null;
                    }
                }
                function e(t) {
                    return Math.round(parseFloat(t));
                }
                var r, i, s, o, a, l, c = b.createElement("div"), u = b.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", 
                g.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(g, {
                    boxSizingReliable: function() {
                        return t(), i;
                    },
                    pixelBoxStyles: function() {
                        return t(), o;
                    },
                    pixelPosition: function() {
                        return t(), r;
                    },
                    reliableMarginLeft: function() {
                        return t(), l;
                    },
                    scrollboxSize: function() {
                        return t(), s;
                    },
                    reliableTrDimensions: function() {
                        var t, e, r, i;
                        return null == a && (t = b.createElement("table"), e = b.createElement("tr"), r = b.createElement("div"), 
                        t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", r.style.height = "9px", 
                        lt.appendChild(t).appendChild(e).appendChild(r), i = n.getComputedStyle(e), a = parseInt(i.height) > 3, 
                        lt.removeChild(t)), a;
                    }
                }));
            }();
            var Yt = [ "Webkit", "Moz", "ms" ], Zt = b.createElement("div").style, Jt = {};
            function te(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), n = Yt.length; n--; ) if ((t = Yt[n] + e) in Zt) return t;
            }
            function ee(t) {
                var e = C.cssProps[t] || Jt[t];
                return e || (t in Zt ? t : Jt[t] = te(t) || t);
            }
            var ne = /^(none|table(?!-c[ea]).+)/, re = /^--/, ie = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, se = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function oe(t, e, n) {
                var r = ot.exec(e);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
            }
            function ae(t, e, n, r, i, s) {
                var o = "width" === e ? 1 : 0, a = 0, l = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (;o < 4; o += 2) "margin" === n && (l += C.css(t, n + at[o], !0, i)), r ? ("content" === n && (l -= C.css(t, "padding" + at[o], !0, i)), 
                "margin" !== n && (l -= C.css(t, "border" + at[o] + "Width", !0, i))) : (l += C.css(t, "padding" + at[o], !0, i), 
                "padding" !== n ? l += C.css(t, "border" + at[o] + "Width", !0, i) : a += C.css(t, "border" + at[o] + "Width", !0, i));
                return !r && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5)) || 0), 
                l;
            }
            function le(t, e, n) {
                var r = Ut(t), i = (!g.boxSizingReliable() || n) && "border-box" === C.css(t, "boxSizing", !1, r), s = i, o = Gt(t, e, r), a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Wt.test(o)) {
                    if (!n) return o;
                    o = "auto";
                }
                return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && D(t, "tr") || "auto" === o || !parseFloat(o) && "inline" === C.css(t, "display", !1, r)) && t.getClientRects().length && (i = "border-box" === C.css(t, "boxSizing", !1, r), 
                (s = a in t) && (o = t[a])), (o = parseFloat(o) || 0) + ae(t, e, n || (i ? "border" : "content"), s, r, o) + "px";
            }
            function ce(t, e, n, r, i) {
                return new ce.prototype.init(t, e, n, r, i);
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = Gt(t, "opacity");
                                return "" === n ? "1" : n;
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i, s, o, a = K(e), l = re.test(e), c = t.style;
                        if (l || (e = ee(a)), o = C.cssHooks[e] || C.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(t, !1, r)) ? i : c[e];
                        "string" === (s = typeof n) && (i = ot.exec(n)) && i[1] && (n = ht(t, e, i), s = "number"), 
                        null != n && n == n && ("number" !== s || l || (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), 
                        g.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), 
                        o && "set" in o && void 0 === (n = o.set(t, n, r)) || (l ? c.setProperty(e, n) : c[e] = n));
                    }
                },
                css: function(t, e, n, r) {
                    var i, s, o, a = K(e);
                    return re.test(e) || (e = ee(a)), (o = C.cssHooks[e] || C.cssHooks[a]) && "get" in o && (i = o.get(t, !0, n)), 
                    void 0 === i && (i = Gt(t, e, r)), "normal" === i && e in se && (i = se[e]), "" === n || n ? (s = parseFloat(i), 
                    !0 === n || isFinite(s) ? s || 0 : i) : i;
                }
            }), C.each([ "height", "width" ], function(t, e) {
                C.cssHooks[e] = {
                    get: function(t, n, r) {
                        if (n) return !ne.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? le(t, e, r) : Vt(t, ie, function() {
                            return le(t, e, r);
                        });
                    },
                    set: function(t, n, r) {
                        var i, s = Ut(t), o = !g.scrollboxSize() && "absolute" === s.position, a = (o || r) && "border-box" === C.css(t, "boxSizing", !1, s), l = r ? ae(t, e, r, a, s) : 0;
                        return a && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - ae(t, e, "border", !1, s) - .5)), 
                        l && (i = ot.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = C.css(t, e)), 
                        oe(t, n, l);
                    }
                };
            }), C.cssHooks.marginLeft = Kt(g.reliableMarginLeft, function(t, e) {
                if (e) return (parseFloat(Gt(t, "marginLeft")) || t.getBoundingClientRect().left - Vt(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left;
                })) + "px";
            }), C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(t, e) {
                C.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[t + at[r] + e] = s[r] || s[r - 2] || s[0];
                        return i;
                    }
                }, "margin" !== t && (C.cssHooks[t + e].set = oe);
            }), C.fn.extend({
                css: function(t, e) {
                    return U(this, function(t, e, n) {
                        var r, i, s = {}, o = 0;
                        if (Array.isArray(e)) {
                            for (r = Ut(t), i = e.length; o < i; o++) s[e[o]] = C.css(t, e[o], !1, r);
                            return s;
                        }
                        return void 0 !== n ? C.style(t, e, n) : C.css(t, e);
                    }, t, e, arguments.length > 1);
                }
            }), C.Tween = ce, ce.prototype = {
                constructor: ce,
                init: function(t, e, n, r, i, s) {
                    this.elem = t, this.prop = n, this.easing = i || C.easing._default, this.options = e, 
                    this.start = this.now = this.cur(), this.end = r, this.unit = s || (C.cssNumber[n] ? "" : "px");
                },
                cur: function() {
                    var t = ce.propHooks[this.prop];
                    return t && t.get ? t.get(this) : ce.propHooks._default.get(this);
                },
                run: function(t) {
                    var e, n = ce.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
                    this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    n && n.set ? n.set(this) : ce.propHooks._default.set(this), this;
                }
            }, ce.prototype.init.prototype = ce.prototype, ce.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                    },
                    set: function(t) {
                        C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !C.cssHooks[t.prop] && null == t.elem.style[ee(t.prop)] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit);
                    }
                }
            }, ce.propHooks.scrollTop = ce.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                }
            }, C.easing = {
                linear: function(t) {
                    return t;
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2;
                },
                _default: "swing"
            }, C.fx = ce.prototype.init, C.fx.step = {};
            var ue, fe, he = /^(?:toggle|show|hide)$/, pe = /queueHooks$/;
            function de() {
                fe && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(de) : n.setTimeout(de, C.fx.interval), 
                C.fx.tick());
            }
            function me() {
                return n.setTimeout(function() {
                    ue = void 0;
                }), ue = Date.now();
            }
            function ge(t, e) {
                var n, r = 0, i = {
                    height: t
                };
                for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = at[r])] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t), i;
            }
            function ve(t, e, n) {
                for (var r, i = (xe.tweeners[e] || []).concat(xe.tweeners["*"]), s = 0, o = i.length; s < o; s++) if (r = i[s].call(n, e, t)) return r;
            }
            function ye(t, e, n) {
                var r, i, s, o, a, l, c, u, f = "width" in e || "height" in e, h = this, p = {}, d = t.style, m = t.nodeType && ft(t), g = J.get(t, "fxshow");
                for (r in n.queue || (null == (o = C._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, 
                a = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || a();
                }), o.unqueued++, h.always(function() {
                    h.always(function() {
                        o.unqueued--, C.queue(t, "fx").length || o.empty.fire();
                    });
                })), e) if (i = e[r], he.test(i)) {
                    if (delete e[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        m = !0;
                    }
                    p[r] = g && g[r] || C.style(t, r);
                }
                if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(p)) for (r in f && 1 === t.nodeType && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
                null == (c = g && g.display) && (c = J.get(t, "display")), "none" === (u = C.css(t, "display")) && (c ? u = c : (mt([ t ], !0), 
                c = t.style.display || c, u = C.css(t, "display"), mt([ t ]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(t, "float") && (l || (h.done(function() {
                    d.display = c;
                }), null == c && (u = d.display, c = "none" === u ? "" : u)), d.display = "inline-block")), 
                n.overflow && (d.overflow = "hidden", h.always(function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
                })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = J.access(t, "fxshow", {
                    display: c
                }), s && (g.hidden = !m), m && mt([ t ], !0), h.done(function() {
                    for (r in m || mt([ t ]), J.remove(t, "fxshow"), p) C.style(t, r, p[r]);
                })), l = ve(m ? g[r] : 0, r, h), r in g || (g[r] = l.start, m && (l.end = l.start, 
                l.start = 0));
            }
            function be(t, e) {
                var n, r, i, s, o;
                for (n in t) if (i = e[r = K(n)], s = t[n], Array.isArray(s) && (i = s[1], s = t[n] = s[0]), 
                n !== r && (t[r] = s, delete t[n]), (o = C.cssHooks[r]) && "expand" in o) for (n in s = o.expand(s), 
                delete t[r], s) n in t || (t[n] = s[n], e[n] = i); else e[r] = i;
            }
            function xe(t, e, n) {
                var r, i, s = 0, o = xe.prefilters.length, a = C.Deferred().always(function() {
                    delete l.elem;
                }), l = function() {
                    if (i) return !1;
                    for (var e = ue || me(), n = Math.max(0, c.startTime + c.duration - e), r = 1 - (n / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++) c.tweens[s].run(r);
                    return a.notifyWith(t, [ c, r, n ]), r < 1 && o ? n : (o || a.notifyWith(t, [ c, 1, 0 ]), 
                    a.resolveWith(t, [ c ]), !1);
                }, c = a.promise({
                    elem: t,
                    props: C.extend({}, e),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ue || me(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var r = C.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(r), r;
                    },
                    stop: function(e) {
                        var n = 0, r = e ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) c.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [ c, 1, 0 ]), a.resolveWith(t, [ c, e ])) : a.rejectWith(t, [ c, e ]), 
                        this;
                    }
                }), u = c.props;
                for (be(u, c.opts.specialEasing); s < o; s++) if (r = xe.prefilters[s].call(c, t, u, c.opts)) return v(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), 
                r;
                return C.map(u, ve, c), v(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), 
                C.fx.timer(C.extend(l, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c;
            }
            C.Animation = C.extend(xe, {
                tweeners: {
                    "*": [ function(t, e) {
                        var n = this.createTween(t, e);
                        return ht(n.elem, t, ot.exec(e), n), n;
                    } ]
                },
                tweener: function(t, e) {
                    v(t) ? (e = t, t = [ "*" ]) : t = t.match(H);
                    for (var n, r = 0, i = t.length; r < i; r++) n = t[r], xe.tweeners[n] = xe.tweeners[n] || [], 
                    xe.tweeners[n].unshift(e);
                },
                prefilters: [ ye ],
                prefilter: function(t, e) {
                    e ? xe.prefilters.unshift(t) : xe.prefilters.push(t);
                }
            }), C.speed = function(t, e, n) {
                var r = t && "object" == typeof t ? C.extend({}, t) : {
                    complete: n || !n && e || v(t) && t,
                    duration: t,
                    easing: n && e || e && !v(e) && e
                };
                return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), 
                null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
                }, r;
            }, C.fn.extend({
                fadeTo: function(t, e, n, r) {
                    return this.filter(ft).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, r);
                },
                animate: function(t, e, n, r) {
                    var i = C.isEmptyObject(t), s = C.speed(e, n, r), o = function() {
                        var e = xe(this, C.extend({}, t), s);
                        (i || J.get(this, "finish")) && e.stop(!0);
                    };
                    return o.finish = o, i || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
                },
                stop: function(t, e, n) {
                    var r = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n);
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), 
                    this.each(function() {
                        var e = !0, i = null != t && t + "queueHooks", s = C.timers, o = J.get(this);
                        if (i) o[i] && o[i].stop && r(o[i]); else for (i in o) o[i] && o[i].stop && pe.test(i) && r(o[i]);
                        for (i = s.length; i--; ) s[i].elem !== this || null != t && s[i].queue !== t || (s[i].anim.stop(n), 
                        e = !1, s.splice(i, 1));
                        !e && n || C.dequeue(this, t);
                    });
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = J.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], s = C.timers, o = r ? r.length : 0;
                        for (n.finish = !0, C.queue(this, t, []), i && i.stop && i.stop.call(this, !0), 
                        e = s.length; e--; ) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), 
                        s.splice(e, 1));
                        for (e = 0; e < o; e++) r[e] && r[e].finish && r[e].finish.call(this);
                        delete n.finish;
                    });
                }
            }), C.each([ "toggle", "show", "hide" ], function(t, e) {
                var n = C.fn[e];
                C.fn[e] = function(t, r, i) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ge(e, !0), t, r, i);
                };
            }), C.each({
                slideDown: ge("show"),
                slideUp: ge("hide"),
                slideToggle: ge("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                C.fn[t] = function(t, n, r) {
                    return this.animate(e, t, n, r);
                };
            }), C.timers = [], C.fx.tick = function() {
                var t, e = 0, n = C.timers;
                for (ue = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || C.fx.stop(), ue = void 0;
            }, C.fx.timer = function(t) {
                C.timers.push(t), C.fx.start();
            }, C.fx.interval = 13, C.fx.start = function() {
                fe || (fe = !0, de());
            }, C.fx.stop = function() {
                fe = null;
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(t, e) {
                return t = C.fx && C.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, r) {
                    var i = n.setTimeout(e, t);
                    r.stop = function() {
                        n.clearTimeout(i);
                    };
                });
            }, function() {
                var t = b.createElement("input"), e = b.createElement("select").appendChild(b.createElement("option"));
                t.type = "checkbox", g.checkOn = "" !== t.value, g.optSelected = e.selected, (t = b.createElement("input")).value = "t", 
                t.type = "radio", g.radioValue = "t" === t.value;
            }();
            var we, qe = C.expr.attrHandle;
            C.fn.extend({
                attr: function(t, e) {
                    return U(this, C.attr, t, e, arguments.length > 1);
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        C.removeAttr(this, t);
                    });
                }
            }), C.extend({
                attr: function(t, e, n) {
                    var r, i, s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? C.prop(t, e, n) : (1 === s && C.isXMLDoc(t) || (i = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? we : void 0)), 
                    void 0 !== n ? null === n ? void C.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), 
                    n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = C.find.attr(t, e)) ? void 0 : r);
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!g.radioValue && "radio" === e && D(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e;
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var n, r = 0, i = e && e.match(H);
                    if (i && 1 === t.nodeType) for (;n = i[r++]; ) t.removeAttribute(n);
                }
            }), we = {
                set: function(t, e, n) {
                    return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n;
                }
            }, C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var n = qe[e] || C.find.attr;
                qe[e] = function(t, e, r) {
                    var i, s, o = e.toLowerCase();
                    return r || (s = qe[o], qe[o] = i, i = null != n(t, e, r) ? o : null, qe[o] = s), 
                    i;
                };
            });
            var Te = /^(?:input|select|textarea|button)$/i, Ce = /^(?:a|area)$/i;
            function ke(t) {
                return (t.match(H) || []).join(" ");
            }
            function je(t) {
                return t.getAttribute && t.getAttribute("class") || "";
            }
            function Oe(t) {
                return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || [];
            }
            C.fn.extend({
                prop: function(t, e) {
                    return U(this, C.prop, t, e, arguments.length > 1);
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[C.propFix[t] || t];
                    });
                }
            }), C.extend({
                prop: function(t, e, n) {
                    var r, i, s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(t) || (e = C.propFix[e] || e, 
                    i = C.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e];
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = C.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Te.test(t.nodeName) || Ce.test(t.nodeName) && t.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), g.optSelected || (C.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                }
            }), C.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
                C.propFix[this.toLowerCase()] = this;
            }), C.fn.extend({
                addClass: function(t) {
                    var e, n, r, i, s, o, a, l = 0;
                    if (v(t)) return this.each(function(e) {
                        C(this).addClass(t.call(this, e, je(this)));
                    });
                    if ((e = Oe(t)).length) for (;n = this[l++]; ) if (i = je(n), r = 1 === n.nodeType && " " + ke(i) + " ") {
                        for (o = 0; s = e[o++]; ) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                        i !== (a = ke(r)) && n.setAttribute("class", a);
                    }
                    return this;
                },
                removeClass: function(t) {
                    var e, n, r, i, s, o, a, l = 0;
                    if (v(t)) return this.each(function(e) {
                        C(this).removeClass(t.call(this, e, je(this)));
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = Oe(t)).length) for (;n = this[l++]; ) if (i = je(n), r = 1 === n.nodeType && " " + ke(i) + " ") {
                        for (o = 0; s = e[o++]; ) for (;r.indexOf(" " + s + " ") > -1; ) r = r.replace(" " + s + " ", " ");
                        i !== (a = ke(r)) && n.setAttribute("class", a);
                    }
                    return this;
                },
                toggleClass: function(t, e) {
                    var n = typeof t, r = "string" === n || Array.isArray(t);
                    return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each(function(n) {
                        C(this).toggleClass(t.call(this, n, je(this), e), e);
                    }) : this.each(function() {
                        var e, i, s, o;
                        if (r) for (i = 0, s = C(this), o = Oe(t); e = o[i++]; ) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else void 0 !== t && "boolean" !== n || ((e = je(this)) && J.set(this, "__className__", e), 
                        this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""));
                    });
                },
                hasClass: function(t) {
                    var e, n, r = 0;
                    for (e = " " + t + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + ke(je(n)) + " ").indexOf(e) > -1) return !0;
                    return !1;
                }
            });
            var Se = /\r/g;
            C.fn.extend({
                val: function(t) {
                    var e, n, r, i = this[0];
                    return arguments.length ? (r = v(t), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? t.call(this, n, C(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function(t) {
                            return null == t ? "" : t + "";
                        })), (e = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i));
                    })) : i ? (e = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Se, "") : null == n ? "" : n : void 0;
                }
            }), C.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = C.find.attr(t, "value");
                            return null != e ? e : ke(C.text(t));
                        }
                    },
                    select: {
                        get: function(t) {
                            var e, n, r, i = t.options, s = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [], l = o ? s + 1 : i.length;
                            for (r = s < 0 ? l : o ? s : 0; r < l; r++) if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                if (e = C(n).val(), o) return e;
                                a.push(e);
                            }
                            return a;
                        },
                        set: function(t, e) {
                            for (var n, r, i = t.options, s = C.makeArray(e), o = i.length; o--; ) ((r = i[o]).selected = C.inArray(C.valHooks.option.get(r), s) > -1) && (n = !0);
                            return n || (t.selectedIndex = -1), s;
                        }
                    }
                }
            }), C.each([ "radio", "checkbox" ], function() {
                C.valHooks[this] = {
                    set: function(t, e) {
                        if (Array.isArray(e)) return t.checked = C.inArray(C(t).val(), e) > -1;
                    }
                }, g.checkOn || (C.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value;
                });
            }), g.focusin = "onfocusin" in n;
            var Ee = /^(?:focusinfocus|focusoutblur)$/, De = function(t) {
                t.stopPropagation();
            };
            C.extend(C.event, {
                trigger: function(t, e, r, i) {
                    var s, o, a, l, c, u, f, h, d = [ r || b ], m = p.call(t, "type") ? t.type : t, g = p.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (o = h = a = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !Ee.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (m = (g = m.split(".")).shift(), 
                    g.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[C.expando] ? t : new C.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, 
                    t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    t.result = void 0, t.target || (t.target = r), e = null == e ? [ t ] : C.makeArray(e, [ t ]), 
                    f = C.event.special[m] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, e))) {
                        if (!i && !f.noBubble && !y(r)) {
                            for (l = f.delegateType || m, Ee.test(l + m) || (o = o.parentNode); o; o = o.parentNode) d.push(o), 
                            a = o;
                            a === (r.ownerDocument || b) && d.push(a.defaultView || a.parentWindow || n);
                        }
                        for (s = 0; (o = d[s++]) && !t.isPropagationStopped(); ) h = o, t.type = s > 1 ? l : f.bindType || m, 
                        (u = (J.get(o, "events") || Object.create(null))[t.type] && J.get(o, "handle")) && u.apply(o, e), 
                        (u = c && o[c]) && u.apply && Y(o) && (t.result = u.apply(o, e), !1 === t.result && t.preventDefault());
                        return t.type = m, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), e) || !Y(r) || c && v(r[m]) && !y(r) && ((a = r[c]) && (r[c] = null), 
                        C.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, De), r[m](), 
                        t.isPropagationStopped() && h.removeEventListener(m, De), C.event.triggered = void 0, 
                        a && (r[c] = a)), t.result;
                    }
                },
                simulate: function(t, e, n) {
                    var r = C.extend(new C.Event(), n, {
                        type: t,
                        isSimulated: !0
                    });
                    C.event.trigger(r, null, e);
                }
            }), C.fn.extend({
                trigger: function(t, e) {
                    return this.each(function() {
                        C.event.trigger(t, e, this);
                    });
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    if (n) return C.event.trigger(t, e, n, !0);
                }
            }), g.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var n = function(t) {
                    C.event.simulate(e, t.target, C.event.fix(t));
                };
                C.event.special[e] = {
                    setup: function() {
                        var r = this.ownerDocument || this.document || this, i = J.access(r, e);
                        i || r.addEventListener(t, n, !0), J.access(r, e, (i || 0) + 1);
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this.document || this, i = J.access(r, e) - 1;
                        i ? J.access(r, e, i) : (r.removeEventListener(t, n, !0), J.remove(r, e));
                    }
                };
            });
            var Ae = n.location, Le = {
                guid: Date.now()
            }, Qe = /\?/;
            C.parseXML = function(t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = new n.DOMParser().parseFromString(t, "text/xml");
                } catch (t) {
                    e = void 0;
                }
                return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t), 
                e;
            };
            var _e = /\[\]$/, Ne = /\r?\n/g, Re = /^(?:submit|button|image|reset|file)$/i, Ie = /^(?:input|select|textarea|keygen)/i;
            function He(t, e, n, r) {
                var i;
                if (Array.isArray(e)) C.each(e, function(e, i) {
                    n || _e.test(t) ? r(t, i) : He(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r);
                }); else if (n || "object" !== q(e)) r(t, e); else for (i in e) He(t + "[" + i + "]", e[i], n, r);
            }
            C.param = function(t, e) {
                var n, r = [], i = function(t, e) {
                    var n = v(e) ? e() : e;
                    r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
                };
                if (null == t) return "";
                if (Array.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function() {
                    i(this.name, this.value);
                }); else for (n in t) He(n, t[n], e, i);
                return r.join("&");
            }, C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = C.prop(this, "elements");
                        return t ? C.makeArray(t) : this;
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !C(this).is(":disabled") && Ie.test(this.nodeName) && !Re.test(t) && (this.checked || !yt.test(t));
                    }).map(function(t, e) {
                        var n = C(this).val();
                        return null == n ? null : Array.isArray(n) ? C.map(n, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(Ne, "\r\n")
                            };
                        }) : {
                            name: e.name,
                            value: n.replace(Ne, "\r\n")
                        };
                    }).get();
                }
            });
            var Be = /%20/g, Me = /#.*$/, ze = /([?&])_=[^&]*/, Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, $e = /^(?:GET|HEAD)$/, We = /^\/\//, Ue = {}, Ve = {}, Xe = "*/".concat("*"), Ge = b.createElement("a");
            function Ke(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var r, i = 0, s = e.toLowerCase().match(H) || [];
                    if (v(n)) for (;r = s[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n);
                };
            }
            function Ye(t, e, n, r) {
                var i = {}, s = t === Ve;
                function o(a) {
                    var l;
                    return i[a] = !0, C.each(t[a] || [], function(t, a) {
                        var c = a(e, n, r);
                        return "string" != typeof c || s || i[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), 
                        o(c), !1);
                    }), l;
                }
                return o(e.dataTypes[0]) || !i["*"] && o("*");
            }
            function Ze(t, e) {
                var n, r, i = C.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
                return r && C.extend(!0, t, r), t;
            }
            function Je(t, e, n) {
                for (var r, i, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), 
                void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                if (r) for (i in a) if (a[i] && a[i].test(r)) {
                    l.unshift(i);
                    break;
                }
                if (l[0] in n) s = l[0]; else {
                    for (i in n) {
                        if (!l[0] || t.converters[i + " " + l[0]]) {
                            s = i;
                            break;
                        }
                        o || (o = i);
                    }
                    s = s || o;
                }
                if (s) return s !== l[0] && l.unshift(s), n[s];
            }
            function tn(t, e, n, r) {
                var i, s, o, a, l, c = {}, u = t.dataTypes.slice();
                if (u[1]) for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
                for (s = u.shift(); s; ) if (t.responseFields[s] && (n[t.responseFields[s]] = e), 
                !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                    if (!(o = c[l + " " + s] || c["* " + s])) for (i in c) if ((a = i.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                        !0 === o ? o = c[i] : !0 !== c[i] && (s = a[0], u.unshift(a[1]));
                        break;
                    }
                    if (!0 !== o) if (o && t.throws) e = o(e); else try {
                        e = o(e);
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: o ? t : "No conversion from " + l + " to " + s
                        };
                    }
                }
                return {
                    state: "success",
                    data: e
                };
            }
            Ge.href = Ae.href, C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ae.href,
                    type: "GET",
                    isLocal: Fe.test(Ae.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Xe,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? Ze(Ze(t, C.ajaxSettings), e) : Ze(C.ajaxSettings, t);
                },
                ajaxPrefilter: Ke(Ue),
                ajaxTransport: Ke(Ve),
                ajax: function(t, e) {
                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var r, i, s, o, a, l, c, u, f, h, p = C.ajaxSetup({}, e), d = p.context || p, m = p.context && (d.nodeType || d.jquery) ? C(d) : C.event, g = C.Deferred(), v = C.Callbacks("once memory"), y = p.statusCode || {}, x = {}, w = {}, q = "canceled", T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (c) {
                                if (!o) for (o = {}; e = Pe.exec(s); ) o[e[1].toLowerCase() + " "] = (o[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = o[t.toLowerCase() + " "];
                            }
                            return null == e ? null : e.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return c ? s : null;
                        },
                        setRequestHeader: function(t, e) {
                            return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), 
                            this;
                        },
                        overrideMimeType: function(t) {
                            return null == c && (p.mimeType = t), this;
                        },
                        statusCode: function(t) {
                            var e;
                            if (t) if (c) T.always(t[T.status]); else for (e in t) y[e] = [ y[e], t[e] ];
                            return this;
                        },
                        abort: function(t) {
                            var e = t || q;
                            return r && r.abort(e), k(0, e), this;
                        }
                    };
                    if (g.promise(T), p.url = ((t || p.url || Ae.href) + "").replace(We, Ae.protocol + "//"), 
                    p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [ "" ], 
                    null == p.crossDomain) {
                        l = b.createElement("a");
                        try {
                            l.href = p.url, l.href = l.href, p.crossDomain = Ge.protocol + "//" + Ge.host != l.protocol + "//" + l.host;
                        } catch (t) {
                            p.crossDomain = !0;
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), 
                    Ye(Ue, p, e, T), c) return T;
                    for (f in (u = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), 
                    p.type = p.type.toUpperCase(), p.hasContent = !$e.test(p.type), i = p.url.replace(Me, ""), 
                    p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Be, "+")) : (h = p.url.slice(i.length), 
                    p.data && (p.processData || "string" == typeof p.data) && (i += (Qe.test(i) ? "&" : "?") + p.data, 
                    delete p.data), !1 === p.cache && (i = i.replace(ze, "$1"), h = (Qe.test(i) ? "&" : "?") + "_=" + Le.guid++ + h), 
                    p.url = i + h), p.ifModified && (C.lastModified[i] && T.setRequestHeader("If-Modified-Since", C.lastModified[i]), 
                    C.etag[i] && T.setRequestHeader("If-None-Match", C.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && T.setRequestHeader("Content-Type", p.contentType), 
                    T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : p.accepts["*"]), 
                    p.headers) T.setRequestHeader(f, p.headers[f]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(d, T, p) || c)) return T.abort();
                    if (q = "abort", v.add(p.complete), T.done(p.success), T.fail(p.error), r = Ye(Ve, p, e, T)) {
                        if (T.readyState = 1, u && m.trigger("ajaxSend", [ T, p ]), c) return T;
                        p.async && p.timeout > 0 && (a = n.setTimeout(function() {
                            T.abort("timeout");
                        }, p.timeout));
                        try {
                            c = !1, r.send(x, k);
                        } catch (t) {
                            if (c) throw t;
                            k(-1, t);
                        }
                    } else k(-1, "No Transport");
                    function k(t, e, o, l) {
                        var f, h, b, x, w, q = e;
                        c || (c = !0, a && n.clearTimeout(a), r = void 0, s = l || "", T.readyState = t > 0 ? 4 : 0, 
                        f = t >= 200 && t < 300 || 304 === t, o && (x = Je(p, T, o)), !f && C.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), 
                        x = tn(p, x, T, f), f ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), 
                        (w = T.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === t || "HEAD" === p.type ? q = "nocontent" : 304 === t ? q = "notmodified" : (q = x.state, 
                        h = x.data, f = !(b = x.error))) : (b = q, !t && q || (q = "error", t < 0 && (t = 0))), 
                        T.status = t, T.statusText = (e || q) + "", f ? g.resolveWith(d, [ h, q, T ]) : g.rejectWith(d, [ T, q, b ]), 
                        T.statusCode(y), y = void 0, u && m.trigger(f ? "ajaxSuccess" : "ajaxError", [ T, p, f ? h : b ]), 
                        v.fireWith(d, [ T, q ]), u && (m.trigger("ajaxComplete", [ T, p ]), --C.active || C.event.trigger("ajaxStop")));
                    }
                    return T;
                },
                getJSON: function(t, e, n) {
                    return C.get(t, e, n, "json");
                },
                getScript: function(t, e) {
                    return C.get(t, void 0, e, "script");
                }
            }), C.each([ "get", "post" ], function(t, e) {
                C[e] = function(t, n, r, i) {
                    return v(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                        url: t,
                        type: e,
                        dataType: i,
                        data: n,
                        success: r
                    }, C.isPlainObject(t) && t));
                };
            }), C.ajaxPrefilter(function(t) {
                var e;
                for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
            }), C._evalUrl = function(t, e, n) {
                return C.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(t) {
                        C.globalEval(t, e, n);
                    }
                });
            }, C.fn.extend({
                wrapAll: function(t) {
                    var e;
                    return this[0] && (v(t) && (t = t.call(this[0])), e = C(t, this[0].ownerDocument).eq(0).clone(!0), 
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                        return t;
                    }).append(this)), this;
                },
                wrapInner: function(t) {
                    return v(t) ? this.each(function(e) {
                        C(this).wrapInner(t.call(this, e));
                    }) : this.each(function() {
                        var e = C(this), n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t);
                    });
                },
                wrap: function(t) {
                    var e = v(t);
                    return this.each(function(n) {
                        C(this).wrapAll(e ? t.call(this, n) : t);
                    });
                },
                unwrap: function(t) {
                    return this.parent(t).not("body").each(function() {
                        C(this).replaceWith(this.childNodes);
                    }), this;
                }
            }), C.expr.pseudos.hidden = function(t) {
                return !C.expr.pseudos.visible(t);
            }, C.expr.pseudos.visible = function(t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
            }, C.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest();
                } catch (t) {}
            };
            var en = {
                0: 200,
                1223: 204
            }, nn = C.ajaxSettings.xhr();
            g.cors = !!nn && "withCredentials" in nn, g.ajax = nn = !!nn, C.ajaxTransport(function(t) {
                var e, r;
                if (g.cors || nn && !t.crossDomain) return {
                    send: function(i, s) {
                        var o, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
                        for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), 
                        i) a.setRequestHeader(o, i[o]);
                        e = function(t) {
                            return function() {
                                e && (e = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, 
                                "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(en[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()));
                            };
                        }, a.onload = e(), r = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout(function() {
                                e && r();
                            });
                        }, e = e("abort");
                        try {
                            a.send(t.hasContent && t.data || null);
                        } catch (t) {
                            if (e) throw t;
                        }
                    },
                    abort: function() {
                        e && e();
                    }
                };
            }), C.ajaxPrefilter(function(t) {
                t.crossDomain && (t.contents.script = !1);
            }), C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return C.globalEval(t), t;
                    }
                }
            }), C.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
            }), C.ajaxTransport("script", function(t) {
                var e, n;
                if (t.crossDomain || t.scriptAttrs) return {
                    send: function(r, i) {
                        e = C("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type);
                        }), b.head.appendChild(e[0]);
                    },
                    abort: function() {
                        n && n();
                    }
                };
            });
            var rn, sn = [], on = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = sn.pop() || C.expando + "_" + Le.guid++;
                    return this[t] = !0, t;
                }
            }), C.ajaxPrefilter("json jsonp", function(t, e, r) {
                var i, s, o, a = !1 !== t.jsonp && (on.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
                a ? t[a] = t[a].replace(on, "$1" + i) : !1 !== t.jsonp && (t.url += (Qe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
                t.converters["script json"] = function() {
                    return o || C.error(i + " was not called"), o[0];
                }, t.dataTypes[0] = "json", s = n[i], n[i] = function() {
                    o = arguments;
                }, r.always(function() {
                    void 0 === s ? C(n).removeProp(i) : n[i] = s, t[i] && (t.jsonpCallback = e.jsonpCallback, 
                    sn.push(i)), o && v(s) && s(o[0]), o = s = void 0;
                }), "script";
            }), g.createHTMLDocument = ((rn = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
            2 === rn.childNodes.length), C.parseHTML = function(t, e, n) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (g.createHTMLDocument ? ((r = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, 
                e.head.appendChild(r)) : e = b), i = A.exec(t), s = !n && [], i ? [ e.createElement(i[1]) ] : (i = kt([ t ], e, s), 
                s && s.length && C(s).remove(), C.merge([], i.childNodes)));
                var r, i, s;
            }, C.fn.load = function(t, e, n) {
                var r, i, s, o = this, a = t.indexOf(" ");
                return a > -1 && (r = ke(t.slice(a)), t = t.slice(0, a)), v(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), 
                o.length > 0 && C.ajax({
                    url: t,
                    type: i || "GET",
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    s = arguments, o.html(r ? C("<div>").append(C.parseHTML(t)).find(r) : t);
                }).always(n && function(t, e) {
                    o.each(function() {
                        n.apply(this, s || [ t.responseText, e, t ]);
                    });
                }), this;
            }, C.expr.pseudos.animated = function(t) {
                return C.grep(C.timers, function(e) {
                    return t === e.elem;
                }).length;
            }, C.offset = {
                setOffset: function(t, e, n) {
                    var r, i, s, o, a, l, c = C.css(t, "position"), u = C(t), f = {};
                    "static" === c && (t.style.position = "relative"), a = u.offset(), s = C.css(t, "top"), 
                    l = C.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (o = (r = u.position()).top, 
                    i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(l) || 0), v(e) && (e = e.call(t, n, C.extend({}, a))), 
                    null != e.top && (f.top = e.top - a.top + o), null != e.left && (f.left = e.left - a.left + i), 
                    "using" in e ? e.using.call(t, f) : ("number" == typeof f.top && (f.top += "px"), 
                    "number" == typeof f.left && (f.left += "px"), u.css(f));
                }
            }, C.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        C.offset.setOffset(this, t, e);
                    });
                    var e, n, r = this[0];
                    return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                    {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0;
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === C.css(r, "position")) e = r.getBoundingClientRect(); else {
                            for (e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === C.css(t, "position"); ) t = t.parentNode;
                            t && t !== r && 1 === t.nodeType && ((i = C(t).offset()).top += C.css(t, "borderTopWidth", !0), 
                            i.left += C.css(t, "borderLeftWidth", !0));
                        }
                        return {
                            top: e.top - i.top - C.css(r, "marginTop", !0),
                            left: e.left - i.left - C.css(r, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent; t && "static" === C.css(t, "position"); ) t = t.offsetParent;
                        return t || lt;
                    });
                }
            }), C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, e) {
                var n = "pageYOffset" === e;
                C.fn[t] = function(r) {
                    return U(this, function(t, r, i) {
                        var s;
                        if (y(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === i) return s ? s[e] : t[r];
                        s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : t[r] = i;
                    }, t, r, arguments.length);
                };
            }), C.each([ "top", "left" ], function(t, e) {
                C.cssHooks[e] = Kt(g.pixelPosition, function(t, n) {
                    if (n) return n = Gt(t, e), Wt.test(n) ? C(t).position()[e] + "px" : n;
                });
            }), C.each({
                Height: "height",
                Width: "width"
            }, function(t, e) {
                C.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function(n, r) {
                    C.fn[r] = function(i, s) {
                        var o = arguments.length && (n || "boolean" != typeof i), a = n || (!0 === i || !0 === s ? "margin" : "border");
                        return U(this, function(e, n, i) {
                            var s;
                            return y(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, 
                            Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === i ? C.css(e, n, a) : C.style(e, n, i, a);
                        }, e, o ? i : void 0, o);
                    };
                });
            }), C.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
                C.fn[e] = function(t) {
                    return this.on(e, t);
                };
            }), C.fn.extend({
                bind: function(t, e, n) {
                    return this.on(t, null, e, n);
                },
                unbind: function(t, e) {
                    return this.off(t, null, e);
                },
                delegate: function(t, e, n, r) {
                    return this.on(e, t, n, r);
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
                },
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t);
                }
            }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
                C.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
                };
            });
            var an = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            C.proxy = function(t, e) {
                var n, r, i;
                if ("string" == typeof e && (n = t[e], e = t, t = n), v(t)) return r = a.call(arguments, 2), 
                (i = function() {
                    return t.apply(e || this, r.concat(a.call(arguments)));
                }).guid = t.guid = t.guid || C.guid++, i;
            }, C.holdReady = function(t) {
                t ? C.readyWait++ : C.ready(!0);
            }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = D, C.isFunction = v, 
            C.isWindow = y, C.camelCase = K, C.type = q, C.now = Date.now, C.isNumeric = function(t) {
                var e = C.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
            }, C.trim = function(t) {
                return null == t ? "" : (t + "").replace(an, "");
            }, void 0 === (r = function() {
                return C;
            }.apply(e, [])) || (t.exports = r);
            var ln = n.jQuery, cn = n.$;
            return C.noConflict = function(t) {
                return n.$ === C && (n.$ = cn), t && n.jQuery === C && (n.jQuery = ln), C;
            }, void 0 === i && (n.jQuery = n.$ = C), C;
        });
    }
} ]);