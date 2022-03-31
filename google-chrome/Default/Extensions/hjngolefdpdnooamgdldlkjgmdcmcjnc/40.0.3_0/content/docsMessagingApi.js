!function(e) {
    var o = {};
    function t(r) {
        if (o[r]) return o[r].exports;
        var c = o[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(c.exports, c, c.exports, t), c.l = !0, c.exports;
    }
    t.m = e, t.c = o, t.d = function(e, o, r) {
        t.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: r
        });
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t.t = function(e, o) {
        if (1 & o && (e = t(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & o && "string" != typeof e) for (var c in e) t.d(r, c, function(o) {
            return e[o];
        }.bind(null, c));
        return r;
    }, t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(o, "a", o), o;
    }, t.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o);
    }, t.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", t(t.s = 339);
}({
    132: function(e, o, t) {
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
        }, c = 1; c < 20; c++) r["f" + c] = 111 + c;
        function n(e) {
            var o = r[e.toLowerCase()];
            return void 0 !== o ? o : 1 === e.length ? e.toUpperCase().charCodeAt(0) : void 0;
        }
        function a(e) {
            for (var o in r) if (r.hasOwnProperty(o) && r[o] === e) return o;
            return String.fromCharCode(e).toLowerCase();
        }
        e.exports = function(e) {
            return "string" == typeof e ? n(e) : "number" == typeof e ? a(e) : void 0;
        };
    },
    339: function(e, o, t) {
        "use strict";
        t.r(o);
        var r = t(35), c = t(86), n = t.n(c), a = t(87), i = t(6), d = t(88);
        function l(e, o) {
            var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
                if (Array.isArray(e) || (t = u(e)) || o && e && "number" == typeof e.length) {
                    t && (e = t);
                    var r = 0, c = function() {};
                    return {
                        s: c,
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
                        f: c
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var n, a = !0, i = !1;
            return {
                s: function() {
                    t = t.call(e);
                },
                n: function() {
                    var e = t.next();
                    return a = e.done, e;
                },
                e: function(e) {
                    i = !0, n = e;
                },
                f: function() {
                    try {
                        a || null == t.return || t.return();
                    } finally {
                        if (i) throw n;
                    }
                }
            };
        }
        function u(e, o) {
            if (e) {
                if ("string" == typeof e) return s(e, o);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, o) : void 0;
            }
        }
        function s(e, o) {
            (null == o || o > e.length) && (o = e.length);
            for (var t = 0, r = new Array(o); t < o; t++) r[t] = e[t];
            return r;
        }
        var y = function(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.querySelector(".docs-texteventtarget-iframe").contentDocument;
            try {
                var t = [], r = null, c = null;
                for (var n in o) if (n.match(/^closure/) && "number" != typeof o[n]) {
                    var a = o[n];
                    if (!a) continue;
                    if (!r) for (var i in a) {
                        var d = a[i];
                        if (d && d != o) for (var l in d) {
                            var u = d[l];
                            u && (void 0 != u.length && u[0].src == o && (r = i, t.concat(u)));
                        }
                    }
                    for (var s in a[r]) if (s == e) for (var y = a[r][s], p = 0; p < y.length; p++) {
                        if (!c && y[p].src == o) for (var f in y[p]) if (y[p][f].src == o) {
                            c = f;
                            break;
                        }
                        t.push({
                            eventObject: y[p],
                            eventHandler: y[p][c]
                        });
                    }
                }
                return t;
            } catch (e) {}
        }, p = function() {
            var e = document.querySelector(".docs-texteventtarget-iframe");
            return {
                win: e.contentWindow,
                doc: e.contentDocument
            };
        }, f = function(e, o) {
            var t = p(), r = t.doc, c = t.win, i = n()(e), l = i.altKey, u = i.shiftKey, s = i.keyCode, y = i.ctrlKey, f = e.toLowerCase().startsWith("cmd+") || e.startsWith("\u2318+");
            !f || e.toLowerCase().includes("control") || e.toLowerCase().includes("ctrl") || (y = !1);
            var g = Array.isArray(s) ? s[0] : s, C = Object(a.getKey)(g), h = (d.a[g] || {
                code: String.fromCharCode(g)
            }).code;
            return {
                altGraphKey: !1,
                bubbles: !0,
                cancelBubble: !1,
                cancelable: !0,
                clipboardData: void 0,
                currentTarget: r,
                defaultPrevented: !1,
                detail: 0,
                eventPhase: 0,
                keyLocation: 0,
                layerX: 0,
                layerY: 0,
                pageX: void 0,
                pageY: void 0,
                returnValue: !0,
                srcElement: r.body,
                target: r.body,
                timeStamp: new Date().getTime(),
                type: o,
                view: c,
                charCode: 0,
                altKey: l,
                ctrlKey: y,
                shiftKey: u,
                metaKey: f,
                keyCode: g,
                key: C,
                code: h
            };
        }, g = function(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keydown", t = p(), r = t.doc, c = t.win, n = r.body.querySelector("div[tabindex]"), a = f(e, o), i = a.key, d = a.code, l = a.keyCode, u = a.altKey, s = a.ctrlKey, y = a.shiftKey, g = a.metaKey, C = new KeyboardEvent(o, {
                bubbles: !0,
                cancelable: !0,
                view: c,
                key: i,
                code: d,
                keyCode: l,
                altKey: u,
                ctrlKey: s,
                shiftKey: y,
                metaKey: g
            });
            n.dispatchEvent(C);
        }, C = function(e) {
            var o, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keydown", r = l(y(t));
            try {
                for (r.s(); !(o = r.n()).done; ) {
                    var c = o.value, n = f(e, t);
                    try {
                        c.eventHandler(n);
                    } catch (e) {
                        console.error("Couldn't execute event", e);
                    }
                }
            } catch (e) {
                r.e(e);
            } finally {
                r.f();
            }
        }, h = function(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keydown";
            Object(i.c)() !== i.a.GoogleDocs ? g(e, o) : C(e, o);
        }, k = "\u200b\u180e\u200b", m = function(e) {
            h(e, "keydown"), h(e, "keyup");
        }, v = function() {
            m("ctrl+alt+y"), m("cmd+alt+y");
        }, S = function() {
            m("Shift+Left");
        }, w = function() {
            m("Right");
        }, b = function() {
            m("Alt+Shift+Up");
        }, A = function() {
            m("Ctrl+Shift+Up");
        }, D = function() {
            m("Delete");
        }, K = function() {
            k.split("").forEach(function(e) {
                return h(e, "keypress");
            });
        };
        window.addEventListener("message", function(e) {
            if (e.source === window && "https://docs.google.com" === e.origin && e.data && "EQUATIO_DOCS_MESSAGING_API" === e.data.type) {
                switch (e.data.action) {
                  case r.a.ShowAltTextDialog:
                    v();
                    break;

                  case r.a.SelectLeft:
                    S();
                    break;

                  case r.a.ArrowRight:
                    w();
                    break;

                  case r.a.SelectDocsEquationMac:
                    b();
                    break;

                  case r.a.SelectDocsEquationWin:
                    A();
                    break;

                  case r.a.InsertPlaceholderCharacter:
                    K();
                    break;

                  case r.a.Delete:
                    D();
                }
                window.postMessage({
                    type: "EQUATIO_DOCS_MESSAGING_API_RESPONSE",
                    action: e.data.action
                }, "https://docs.google.com");
            }
        });
    },
    35: function(e, o, t) {
        "use strict";
        o.a = Object.freeze({
            ShowAltTextDialog: 0,
            SelectLeft: 1,
            ArrowRight: 2,
            SelectDocsEquationMac: 3,
            SelectDocsEquationWin: 4,
            InsertPlaceholderCharacter: 5,
            Delete: 6
        });
    },
    6: function(e, o, t) {
        "use strict";
        t.d(o, "a", function() {
            return r;
        }), t.d(o, "d", function() {
            return n;
        }), t.d(o, "c", function() {
            return a;
        });
        var r = {
            GoogleDocs: "Google Docs",
            GoogleForms: "Google Forms",
            GoogleSlides: "Google Slides",
            GoogleDrawings: "Google Drawings",
            GoogleSheets: "Google Sheets"
        }, c = {
            document: r.GoogleDocs,
            forms: r.GoogleForms,
            presentation: r.GoogleSlides,
            drawings: r.GoogleDrawings,
            spreadsheets: r.GoogleSheets
        }, n = function() {
            var e = window.location, o = e.host, t = e.pathname;
            if ("docs.google.com" === o) return t.indexOf("/forms/") >= 0 && (t.endsWith("/viewform") || t.endsWith("/formResponse") || t.endsWith("/prefill") || t.endsWith("/startquiz") || t.endsWith("/viewscore"));
        }, a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location, o = e.host, t = e.pathname;
            if ("docs.google.com" === o) {
                var r, n = t.split("/").filter(function(e) {
                    return !!e;
                });
                return r = t.startsWith("/a/") ? n[2] : n[0], c[r];
            }
        };
        o.b = function() {
            return -1 === window.location.href.indexOf("/document/");
        };
    },
    86: function(e, o, t) {
        "use strict";
        var r = t(132);
        function c(e) {
            var o, t = {};
            t.keyCode = [], t.altKey = !1, t.ctrlKey = !1, t.shiftKey = !1;
            for (var c = 0, n = e.length; c < n; c++) 18 === (o = r(e[c])) && (t.altKey = !0), 
            17 === o && (t.ctrlKey = !0), 16 === o && (t.shiftKey = !0), (o < 16 || o > 18) && t.keyCode.push(o);
            return t;
        }
        function n(e) {
            var o = e.keyCode.length ? e.keyCode : [ e.keyCode ], t = [];
            e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.shiftKey && t.push("shift");
            for (var c = 0, n = o.length; c < n; c++) t.push(r(o[c]));
            return t;
        }
        e.exports = function(e) {
            if ("string" == typeof e && (e = e.replace(/\s/g, "").split("+")), "object" == typeof e) return e.length ? c(e) : n(e);
        };
    },
    87: function(e, o, t) {
        "use strict";
        for (var r = function(e) {
            return null !== e && !Array.isArray(e) && "object" == typeof e;
        }, c = {
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
        }, n = 0; n < 24; n += 1) c[112 + n] = "F" + (n + 1);
        for (var a = 0; a < 26; a += 1) {
            var i = a + 65;
            c[i] = [ String.fromCharCode(i + 32), String.fromCharCode(i) ];
        }
        var d = {
            codes: c,
            getCode: function(e) {
                return r(e) ? e.keyCode || e.which || this[e.key] : this[e];
            },
            getKey: function(e) {
                var o = r(e);
                if (o && e.key) return e.key;
                var t = c[o ? e.keyCode || e.which : e];
                return Array.isArray(t) && (t = o ? t[e.shiftKey ? 1 : 0] : t[0]), t;
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
        d.Spacebar = d[" "], d.Digit0 = d[0], d.Digit1 = d[1], d.Digit2 = d[2], d.Digit3 = d[3], 
        d.Digit4 = d[4], d.Digit5 = d[5], d.Digit6 = d[6], d.Digit7 = d[7], d.Digit8 = d[8], 
        d.Digit9 = d[9], d.Tilde = d["~"], d.GraveAccent = d["`"], d.ExclamationPoint = d["!"], 
        d.AtSign = d["@"], d.PoundSign = d["#"], d.PercentSign = d["%"], d.Caret = d["^"], 
        d.Ampersand = d["&"], d.PlusSign = d["+"], d.MinusSign = d["-"], d.EqualsSign = d["="], 
        d.DivisionSign = d["/"], d.MultiplicationSign = d["*"], d.Comma = d[","], d.Decimal = d["."], 
        d.Colon = d[":"], d.Semicolon = d[";"], d.Pipe = d["|"], d.BackSlash = d["\\"], 
        d.QuestionMark = d["?"], d.SingleQuote = d["'"], d.DoubleQuote = d['"'], d.LeftCurlyBrace = d["{"], 
        d.RightCurlyBrace = d["}"], d.LeftParenthesis = d["("], d.RightParenthesis = d[")"], 
        d.LeftAngleBracket = d["<"], d.RightAngleBracket = d[">"], d.LeftSquareBracket = d["["], 
        d.RightSquareBracket = d["]"], e.exports = d;
    },
    88: function(e, o, t) {
        "use strict";
        o.a = {
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
    }
});