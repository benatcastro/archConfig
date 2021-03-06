(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 29 ], {
    657: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(658), o = function() {
            return (o = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
            }).apply(this, arguments);
        }, i = function() {
            function t(t) {
                this.data = {}, this.data = t;
            }
            return t.prototype.id = function() {
                return this.data.id;
            }, t.prototype.ref = function() {
                return this.data.ref;
            }, t.prototype.label = function() {
                return this.data.label;
            }, t;
        }(), a = function() {
            function t(t) {
                this.data = {}, this.data = t, this.variations = (t.variations || []).map(function(t) {
                    return new i(t);
                });
            }
            return t.prototype.id = function() {
                return this.data.id;
            }, t.prototype.googleId = function() {
                return this.data.googleId;
            }, t.prototype.name = function() {
                return this.data.name;
            }, t;
        }(), s = function() {
            function t(t) {
                t && (this.drafts = (t.drafts || []).map(function(t) {
                    return new a(t);
                }), this.running = (t.running || []).map(function(t) {
                    return new a(t);
                }));
            }
            return t.prototype.current = function() {
                return this.running.length > 0 ? this.running[0] : null;
            }, t.prototype.refFromCookie = function(t) {
                if (!t || "" === t.trim()) return null;
                var e = t.trim().split(" ");
                if (e.length < 2) return null;
                var r = e[0], n = parseInt(e[1], 10), o = this.running.filter(function(t) {
                    return t.googleId() === r && t.variations.length > n;
                })[0];
                return o ? o.variations[n].ref() : null;
            }, t;
        }(), u = function() {
            function t(t, e) {
                this.id = t, this.api = e, this.fields = {};
            }
            return t.prototype.set = function(t, e) {
                return this.fields[t] = e, this;
            }, t.prototype.ref = function(t) {
                return this.set("ref", t);
            }, t.prototype.query = function(t) {
                return this.set("q", t);
            }, t.prototype.pageSize = function(t) {
                return this.set("pageSize", t);
            }, t.prototype.fetch = function(t) {
                return this.set("fetch", t);
            }, t.prototype.fetchLinks = function(t) {
                return this.set("fetchLinks", t);
            }, t.prototype.graphQuery = function(t) {
                return this.set("graphQuery", t);
            }, t.prototype.lang = function(t) {
                return this.set("lang", t);
            }, t.prototype.page = function(t) {
                return this.set("page", t);
            }, t.prototype.after = function(t) {
                return this.set("after", t);
            }, t.prototype.orderings = function(t) {
                return this.set("orderings", t);
            }, t.prototype.url = function() {
                var e = this;
                return this.api.get().then(function(r) {
                    return t.toSearchForm(e, r).url();
                });
            }, t.prototype.submit = function(e) {
                var r = this;
                return this.api.get().then(function(n) {
                    return t.toSearchForm(r, n).submit(e);
                });
            }, t.toSearchForm = function(t, e) {
                var r = e.form(t.id);
                if (r) return Object.keys(t.fields).reduce(function(e, r) {
                    var n = t.fields[r];
                    return "q" === r ? e.query(n) : "pageSize" === r ? e.pageSize(n) : "fetch" === r ? e.fetch(n) : "fetchLinks" === r ? e.fetchLinks(n) : "graphQuery" === r ? e.graphQuery(n) : "lang" === r ? e.lang(n) : "page" === r ? e.page(n) : "after" === r ? e.after(n) : "orderings" === r ? e.orderings(n) : e.set(r, n);
                }, r);
                throw new Error("Unable to access to form " + t.id);
            }, t;
        }(), f = function() {
            function t(t, e) {
                for (var r in this.httpClient = e, this.form = t, this.data = {}, t.fields) t.fields[r].default && (this.data[r] = [ t.fields[r].default ]);
            }
            return t.prototype.set = function(t, e) {
                var r = this.form.fields[t];
                if (!r) throw new Error("Unknown field " + t);
                var n = "" === e || void 0 === e ? null : e, o = this.data[t] || [];
                return o = r.multiple ? n ? o.concat([ n ]) : o : n ? [ n ] : o, this.data[t] = o, 
                this;
            }, t.prototype.ref = function(t) {
                return this.set("ref", t);
            }, t.prototype.query = function(t) {
                if ("string" == typeof t) return this.query([ t ]);
                if (Array.isArray(t)) return this.set("q", "[" + t.join("") + "]");
                throw new Error("Invalid query : " + t);
            }, t.prototype.pageSize = function(t) {
                return this.set("pageSize", t);
            }, t.prototype.fetch = function(t) {
                var e = Array.isArray(t) ? t.join(",") : t;
                return this.set("fetch", e);
            }, t.prototype.fetchLinks = function(t) {
                var e = Array.isArray(t) ? t.join(",") : t;
                return this.set("fetchLinks", e);
            }, t.prototype.graphQuery = function(t) {
                return this.set("graphQuery", t);
            }, t.prototype.lang = function(t) {
                return this.set("lang", t);
            }, t.prototype.page = function(t) {
                return this.set("page", t);
            }, t.prototype.after = function(t) {
                return this.set("after", t);
            }, t.prototype.orderings = function(t) {
                return t ? this.set("orderings", "[" + t.join(",") + "]") : this;
            }, t.prototype.url = function() {
                var t = this.form.action;
                if (this.data) {
                    var e = t.indexOf("?") > -1 ? "&" : "?";
                    for (var r in this.data) if (Object.prototype.hasOwnProperty.call(this.data, r)) {
                        var n = this.data[r];
                        if (n) for (var o = 0; o < n.length; o++) t += e + r + "=" + encodeURIComponent(n[o]), 
                        e = "&";
                    }
                }
                return t;
            }, t.prototype.submit = function(t) {
                return this.httpClient.cachedRequest(this.url()).then(function(e) {
                    return t && t(null, e), e;
                }).catch(function(e) {
                    throw t && t(e), e;
                });
            }, t;
        }(), h = {
            at: "at",
            not: "not",
            missing: "missing",
            has: "has",
            any: "any",
            in: "in",
            fulltext: "fulltext",
            similar: "similar",
            numberGt: "number.gt",
            numberLt: "number.lt",
            numberInRange: "number.inRange",
            dateBefore: "date.before",
            dateAfter: "date.after",
            dateBetween: "date.between",
            dateDayOfMonth: "date.day-of-month",
            dateDayOfMonthAfter: "date.day-of-month-after",
            dateDayOfMonthBefore: "date.day-of-month-before",
            dateDayOfWeek: "date.day-of-week",
            dateDayOfWeekAfter: "date.day-of-week-after",
            dateDayOfWeekBefore: "date.day-of-week-before",
            dateMonth: "date.month",
            dateMonthBefore: "date.month-before",
            dateMonthAfter: "date.month-after",
            dateYear: "date.year",
            dateHour: "date.hour",
            dateHourBefore: "date.hour-before",
            dateHourAfter: "date.hour-after",
            GeopointNear: "geopoint.near"
        };
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */        function c(t) {
            if ("string" == typeof t) return '"' + t + '"';
            if ("number" == typeof t) return t.toString();
            if (t instanceof Date) return t.getTime().toString();
            if (Array.isArray(t)) return "[" + t.map(function(t) {
                return c(t);
            }).join(",") + "]";
            if ("boolean" == typeof t) return t.toString();
            throw new Error("Unable to encode " + t + " of type " + typeof t);
        }
        var p = {
            near: function(t, e, r, n) {
                return "[" + h.GeopointNear + "(" + t + ", " + e + ", " + r + ", " + n + ")]";
            }
        }, d = {
            before: function(t, e) {
                return "[" + h.dateBefore + "(" + t + ", " + c(e) + ")]";
            },
            after: function(t, e) {
                return "[" + h.dateAfter + "(" + t + ", " + c(e) + ")]";
            },
            between: function(t, e, r) {
                return "[" + h.dateBetween + "(" + t + ", " + c(e) + ", " + c(r) + ")]";
            },
            dayOfMonth: function(t, e) {
                return "[" + h.dateDayOfMonth + "(" + t + ", " + e + ")]";
            },
            dayOfMonthAfter: function(t, e) {
                return "[" + h.dateDayOfMonthAfter + "(" + t + ", " + e + ")]";
            },
            dayOfMonthBefore: function(t, e) {
                return "[" + h.dateDayOfMonthBefore + "(" + t + ", " + e + ")]";
            },
            dayOfWeek: function(t, e) {
                return "[" + h.dateDayOfWeek + "(" + t + ", " + c(e) + ")]";
            },
            dayOfWeekAfter: function(t, e) {
                return "[" + h.dateDayOfWeekAfter + "(" + t + ", " + c(e) + ")]";
            },
            dayOfWeekBefore: function(t, e) {
                return "[" + h.dateDayOfWeekBefore + "(" + t + ", " + c(e) + ")]";
            },
            month: function(t, e) {
                return "[" + h.dateMonth + "(" + t + ", " + c(e) + ")]";
            },
            monthBefore: function(t, e) {
                return "[" + h.dateMonthBefore + "(" + t + ", " + c(e) + ")]";
            },
            monthAfter: function(t, e) {
                return "[" + h.dateMonthAfter + "(" + t + ", " + c(e) + ")]";
            },
            year: function(t, e) {
                return "[" + h.dateYear + "(" + t + ", " + e + ")]";
            },
            hour: function(t, e) {
                return "[" + h.dateHour + "(" + t + ", " + e + ")]";
            },
            hourBefore: function(t, e) {
                return "[" + h.dateHourBefore + "(" + t + ", " + e + ")]";
            },
            hourAfter: function(t, e) {
                return "[" + h.dateHourAfter + "(" + t + ", " + e + ")]";
            }
        }, l = {
            gt: function(t, e) {
                return "[" + h.numberGt + "(" + t + ", " + e + ")]";
            },
            lt: function(t, e) {
                return "[" + h.numberLt + "(" + t + ", " + e + ")]";
            },
            inRange: function(t, e, r) {
                return "[" + h.numberInRange + "(" + t + ", " + e + ", " + r + ")]";
            }
        }, y = {
            at: function(t, e) {
                return "[" + h.at + "(" + t + ", " + c(e) + ")]";
            },
            not: function(t, e) {
                return "[" + h.not + "(" + t + ", " + c(e) + ")]";
            },
            missing: function(t) {
                return "[" + h.missing + "(" + t + ")]";
            },
            has: function(t) {
                return "[" + h.has + "(" + t + ")]";
            },
            any: function(t, e) {
                return "[" + h.any + "(" + t + ", " + c(e) + ")]";
            },
            in: function(t, e) {
                return "[" + h.in + "(" + t + ", " + c(e) + ")]";
            },
            fulltext: function(t, e) {
                return "[" + h.fulltext + "(" + t + ", " + c(e) + ")]";
            },
            similar: function(t, e) {
                return "[" + h.similar + '("' + t + '", ' + e + ")]";
            },
            date: d,
            dateBefore: d.before,
            dateAfter: d.after,
            dateBetween: d.between,
            dayOfMonth: d.dayOfMonth,
            dayOfMonthAfter: d.dayOfMonthAfter,
            dayOfMonthBefore: d.dayOfMonthBefore,
            dayOfWeek: d.dayOfWeek,
            dayOfWeekAfter: d.dayOfWeekAfter,
            dayOfWeekBefore: d.dayOfWeekBefore,
            month: d.month,
            monthBefore: d.monthBefore,
            monthAfter: d.monthAfter,
            year: d.year,
            hour: d.hour,
            hourBefore: d.hourBefore,
            hourAfter: d.hourAfter,
            number: l,
            gt: l.gt,
            lt: l.lt,
            inRange: l.inRange,
            near: p.near,
            geopoint: p
        }, m = decodeURIComponent;
        function g(t, e) {
            try {
                return e(t);
            } catch (e) {
                return t;
            }
        }
        function v(t, e) {
            if ("string" != typeof t) throw new TypeError("argument str must be a string");
            var r = {}, n = e || {}, o = t.split(/; */), i = n.decode || m;
            return o.forEach(function(t) {
                var e = t.indexOf("=");
                if (!(e < 0)) {
                    var n = t.substr(0, e).trim(), o = t.substr(++e, t.length).trim();
                    '"' == o[0] && (o = o.slice(1, -1)), void 0 == r[n] && (r[n] = g(o, i));
                }
            }), r;
        }
        var b = {
            parse: v
        };
        function w(t, e, r) {
            return {
                token: t,
                documentId: e,
                resolve: function(n, o, i) {
                    return e && r ? r(e, {
                        ref: t
                    }).then(function(t) {
                        if (t) {
                            var e = n && n(t) || t.url || o;
                            return i && i(null, e), e;
                        }
                        return i && i(null, o), o;
                    }) : Promise.resolve(o);
                }
            };
        }
        var A = "io.prismic.preview", k = "io.prismic.experiment", B = function() {
            function t(t, e, r) {
                this.data = t, this.masterRef = t.refs.filter(function(t) {
                    return t.isMasterRef;
                })[0], this.experiments = new s(t.experiments), this.bookmarks = t.bookmarks, this.httpClient = e, 
                this.options = r, this.refs = t.refs, this.tags = t.tags, this.types = t.types, 
                this.languages = t.languages;
            }
            return t.prototype.form = function(t) {
                var e = this.data.forms[t];
                return e ? new f(e, this.httpClient) : null;
            }, t.prototype.everything = function() {
                var t = this.form("everything");
                if (!t) throw new Error("Missing everything form");
                return t;
            }, t.prototype.master = function() {
                return this.masterRef.ref;
            }, t.prototype.ref = function(t) {
                var e = this.data.refs.filter(function(e) {
                    return e.label === t;
                })[0];
                return e ? e.ref : null;
            }, t.prototype.currentExperiment = function() {
                return this.experiments.current();
            }, t.prototype.query = function(t, e, r) {
                void 0 === r && (r = function() {});
                var n = "function" == typeof e ? {
                    options: {},
                    callback: e
                } : {
                    options: e || {},
                    callback: r
                }, o = n.options, i = n.callback, a = this.everything();
                for (var s in o) a = a.set(s, o[s]);
                if (!o.ref) {
                    var u = "";
                    this.options.req ? u = this.options.req.headers.cookie || "" : "undefined" != typeof window && window.document && (u = window.document.cookie || "");
                    var f = b.parse(u), h = f[A], c = this.experiments.refFromCookie(f[k]);
                    a = a.ref(h || c || this.masterRef.ref);
                }
                return t && a.query(t), a.submit(i);
            }, t.prototype.queryFirst = function(t, e, r) {
                var n = "function" == typeof e ? {
                    options: {},
                    callback: e
                } : {
                    options: e || {},
                    callback: r || function() {}
                }, o = n.options, i = n.callback;
                return o.page = 1, o.pageSize = 1, this.query(t, o).then(function(t) {
                    var e = t && t.results && t.results[0];
                    return i(null, e), e;
                }).catch(function(t) {
                    throw i(t), t;
                });
            }, t.prototype.getByID = function(t, e, r) {
                var n = e ? o({}, e) : {};
                return n.lang || (n.lang = "*"), this.queryFirst(y.at("document.id", t), n, r);
            }, t.prototype.getByIDs = function(t, e, r) {
                var n = e ? o({}, e) : {};
                return n.lang || (n.lang = "*"), this.query(y.in("document.id", t), n, r);
            }, t.prototype.getByUID = function(t, e, r, n) {
                var i = r ? o({}, r) : {};
                if ("*" === i.lang) throw new Error("FORBIDDEN. You can't use getByUID with *, use the predicates instead.");
                return i.page || (i.page = 1), this.queryFirst(y.at("my." + t + ".uid", e), i, n);
            }, t.prototype.getSingle = function(t, e, r) {
                var n = e ? o({}, e) : {};
                return this.queryFirst(y.at("document.type", t), n, r);
            }, t.prototype.getBookmark = function(t, e, r) {
                var n = this.data.bookmarks[t];
                return n ? this.getByID(n, e, r) : Promise.reject("Error retrieving bookmarked id");
            }, t.prototype.getPreviewResolver = function(t, e) {
                return w(t, e, this.getByID.bind(this));
            }, t.prototype.previewSession = function(t, e, r, n) {
                var o = this;
                return new Promise(function(i, a) {
                    o.httpClient.request(t, function(s, u) {
                        if (s) n && n(s), a(s); else if (u) {
                            if (u.mainDocument) return o.getByID(u.mainDocument, {
                                ref: t
                            }).then(function(t) {
                                if (t) {
                                    var o = e && e(t) || t.url || r;
                                    n && n(null, o), i(o);
                                } else n && n(null, r), i(r);
                            }).catch(a);
                            n && n(null, r), i(r);
                        }
                    });
                });
            }, t;
        }();
        function O(t) {
            return new x(t);
        }
        function x(t) {
            this.size = 0, this.limit = t, this._keymap = {};
        }
        x.prototype.put = function(t, e) {
            var r = {
                key: t,
                value: e
            };
            if (this._keymap[t] = r, this.tail ? (this.tail.newer = r, r.older = this.tail) : this.head = r, 
            this.tail = r, this.size === this.limit) return this.shift();
            this.size++;
        }, x.prototype.shift = function() {
            var t = this.head;
            return t && (this.head.newer ? (this.head = this.head.newer, this.head.older = void 0) : this.head = void 0, 
            t.newer = t.older = void 0, delete this._keymap[t.key]), t.key, t;
        }, x.prototype.get = function(t, e) {
            var r = this._keymap[t];
            if (void 0 !== r) return r === this.tail ? e ? r : r.value : (r.newer && (r === this.head && (this.head = r.newer), 
            r.newer.older = r.older), r.older && (r.older.newer = r.newer), r.newer = void 0, 
            r.older = this.tail, this.tail && (this.tail.newer = r), this.tail = r, e ? r : r.value);
        }, x.prototype.find = function(t) {
            return this._keymap[t];
        }, x.prototype.set = function(t, e) {
            var r, n = this.get(t, !0);
            return n ? (r = n.value, n.value = e) : (r = this.put(t, e)) && (r = r.value), r;
        }, x.prototype.remove = function(t) {
            var e = this._keymap[t];
            if (e) return delete this._keymap[e.key], e.newer && e.older ? (e.older.newer = e.newer, 
            e.newer.older = e.older) : e.newer ? (e.newer.older = void 0, this.head = e.newer) : e.older ? (e.older.newer = void 0, 
            this.tail = e.older) : this.head = this.tail = void 0, this.size--, e.value;
        }, x.prototype.removeAll = function() {
            this.head = this.tail = void 0, this.size = 0, this._keymap = {};
        }, "function" == typeof Object.keys ? x.prototype.keys = function() {
            return Object.keys(this._keymap);
        } : x.prototype.keys = function() {
            var t = [];
            for (var e in this._keymap) t.push(e);
            return t;
        }, x.prototype.forEach = function(t, e, r) {
            var n;
            if (!0 === e ? (r = !0, e = void 0) : "object" != typeof e && (e = this), r) for (n = this.tail; n; ) t.call(e, n.key, n.value, this), 
            n = n.older; else for (n = this.head; n; ) t.call(e, n.key, n.value, this), n = n.newer;
        }, x.prototype.toString = function() {
            for (var t = "", e = this.head; e; ) t += String(e.key) + ":" + e.value, (e = e.newer) && (t += " < ");
            return t;
        };
        var D = function() {
            function t(t) {
                void 0 === t && (t = 1e3), this.lru = O(t);
            }
            return t.prototype.isExpired = function(t) {
                var e = this.lru.get(t, !1);
                return !!e && (0 !== e.expiredIn && e.expiredIn < Date.now());
            }, t.prototype.get = function(t, e) {
                var r = this.lru.get(t, !1);
                r && !this.isExpired(t) ? e(null, r.data) : e && e(null);
            }, t.prototype.set = function(t, e, r, n) {
                this.lru.remove(t), this.lru.put(t, {
                    data: e,
                    expiredIn: r ? Date.now() + 1e3 * r : 0
                }), n && n(null);
            }, t.prototype.remove = function(t, e) {
                this.lru.remove(t), e && e(null);
            }, t.prototype.clear = function(t) {
                this.lru.removeAll(), t && t(null);
            }, t;
        }();
        function E(t, e, r) {
            var o, i = {
                headers: {
                    Accept: "application/json"
                }
            };
            e && e.proxyAgent && (i.agent = e.proxyAgent);
            var a = n(t, i);
            (e.timeoutInMs ? Promise.race([ a, new Promise(function(r, n) {
                o = setTimeout(function() {
                    return n(new Error(t + " response timeout"));
                }, e.timeoutInMs);
            }) ]) : a).then(function(e) {
                return clearTimeout(o), ~~(e.status / 100 != 2) ? e.text().then(function() {
                    var r = new Error("Unexpected status code [" + e.status + "] on URL " + t);
                    throw r.status = e.status, r;
                }) : e.json().then(function(t) {
                    var n = e.headers.get("cache-control"), o = n ? /max-age=(\d+)/.exec(n) : null, i = o ? parseInt(o[1], 10) : void 0;
                    r(null, t, e, i);
                });
            }).catch(function(t) {
                clearTimeout(o), r(t);
            });
        }
        var _ = function() {
            function t(t) {
                this.options = t || {};
            }
            return t.prototype.request = function(t, e) {
                E(t, this.options, e);
            }, t;
        }(), I = function() {
            function t(t, e, r, n) {
                this.requestHandler = t || new _({
                    proxyAgent: r,
                    timeoutInMs: n
                }), this.cache = e || new D();
            }
            return t.prototype.request = function(t, e) {
                this.requestHandler.request(t, function(t, r, n, o) {
                    t ? e && e(t, null, n, o) : r && e && e(null, r, n, o);
                });
            }, t.prototype.cachedRequest = function(t, e) {
                var r = this, n = e || {}, o = function(e) {
                    var o = n.cacheKey || t;
                    r.cache.get(o, function(i, a) {
                        i || a ? e(i, a) : r.request(t, function(t, i, a, s) {
                            if (t) e(t, null); else {
                                var u = s || n.ttl;
                                u && r.cache.set(o, i, u, e), e(null, i);
                            }
                        });
                    });
                };
                return new Promise(function(t, e) {
                    o(function(r, n) {
                        r && e(r), n && t(n);
                    });
                });
            }, t;
        }();
        function T(t) {
            return t.indexOf("?") > -1 ? "&" : "?";
        }
        var q = function() {
            function t(t, e) {
                if (this.options = e || {}, this.url = t, this.options.accessToken) {
                    var r = "access_token=" + this.options.accessToken;
                    this.url += T(t) + r;
                }
                this.options.routes && (this.url += T(t) + "routes=" + encodeURIComponent(JSON.stringify(this.options.routes))), 
                this.apiDataTTL = this.options.apiDataTTL || 5, this.httpClient = new I(this.options.requestHandler, this.options.apiCache, this.options.proxyAgent, this.options.timeoutInMs);
            }
            return t.prototype.get = function(t) {
                var e = this;
                return this.httpClient.cachedRequest(this.url, {
                    ttl: this.apiDataTTL
                }).then(function(r) {
                    var n = new B(r, e.httpClient, e.options);
                    return t && t(null, n), n;
                }).catch(function(e) {
                    throw t && t(e), e;
                });
            }, t;
        }(), R = function() {
            function t(t, e) {
                this.api = new q(t, e);
            }
            return t.prototype.getApi = function() {
                return this.api.get();
            }, t.prototype.everything = function() {
                return this.form("everything");
            }, t.prototype.form = function(t) {
                return new u(t, this.api);
            }, t.prototype.query = function(t, e, r) {
                return this.getApi().then(function(n) {
                    return n.query(t, e, r);
                });
            }, t.prototype.queryFirst = function(t, e, r) {
                return this.getApi().then(function(n) {
                    return n.queryFirst(t, e, r);
                });
            }, t.prototype.getByID = function(t, e, r) {
                return this.getApi().then(function(n) {
                    return n.getByID(t, e, r);
                });
            }, t.prototype.getByIDs = function(t, e, r) {
                return this.getApi().then(function(n) {
                    return n.getByIDs(t, e, r);
                });
            }, t.prototype.getByUID = function(t, e, r, n) {
                return this.getApi().then(function(o) {
                    return o.getByUID(t, e, r, n);
                });
            }, t.prototype.getSingle = function(t, e, r) {
                return this.getApi().then(function(n) {
                    return n.getSingle(t, e, r);
                });
            }, t.prototype.getBookmark = function(t, e, r) {
                return this.getApi().then(function(n) {
                    return n.getBookmark(t, e, r);
                });
            }, t.prototype.previewSession = function(t, e, r, n) {
                return this.getApi().then(function(o) {
                    return o.previewSession(t, e, r, n);
                });
            }, t.prototype.getPreviewResolver = function(t, e) {
                var r = this;
                return w(t, e, function(t, e) {
                    return r.getApi().then(function(r) {
                        return r.getByID(t, e);
                    });
                });
            }, t.getApi = function(t, e) {
                return new q(t, e).get();
            }, t;
        }(), M = {
            experimentCookie: k,
            previewCookie: A,
            Predicates: y,
            Experiments: s,
            Api: q,
            client: S,
            getApi: P,
            api: U
        };
        function S(t, e) {
            return new R(t, e);
        }
        function P(t, e) {
            return R.getApi(t, e);
        }
        function U(t, e) {
            return P(t, e);
        }
        e.default = M;
    },
    658: function(t, e) {
        var r = "undefined" != typeof self ? self : this, n = function() {
            function t() {
                this.fetch = !1, this.DOMException = r.DOMException;
            }
            return t.prototype = r, new t();
        }();
        !function(t) {
            !function(e) {
                var r = {
                    searchParams: "URLSearchParams" in t,
                    iterable: "Symbol" in t && "iterator" in Symbol,
                    blob: "FileReader" in t && "Blob" in t && function() {
                        try {
                            return new Blob(), !0;
                        } catch (t) {
                            return !1;
                        }
                    }(),
                    formData: "FormData" in t,
                    arrayBuffer: "ArrayBuffer" in t
                };
                function n(t) {
                    return t && DataView.prototype.isPrototypeOf(t);
                }
                if (r.arrayBuffer) var o = [ "[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]" ], i = ArrayBuffer.isView || function(t) {
                    return t && o.indexOf(Object.prototype.toString.call(t)) > -1;
                };
                function a(t) {
                    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                    return t.toLowerCase();
                }
                function s(t) {
                    return "string" != typeof t && (t = String(t)), t;
                }
                function u(t) {
                    var e = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            };
                        }
                    };
                    return r.iterable && (e[Symbol.iterator] = function() {
                        return e;
                    }), e;
                }
                function f(t) {
                    this.map = {}, t instanceof f ? t.forEach(function(t, e) {
                        this.append(e, t);
                    }, this) : Array.isArray(t) ? t.forEach(function(t) {
                        this.append(t[0], t[1]);
                    }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                        this.append(e, t[e]);
                    }, this);
                }
                function h(t) {
                    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    t.bodyUsed = !0;
                }
                function c(t) {
                    return new Promise(function(e, r) {
                        t.onload = function() {
                            e(t.result);
                        }, t.onerror = function() {
                            r(t.error);
                        };
                    });
                }
                function p(t) {
                    var e = new FileReader(), r = c(e);
                    return e.readAsArrayBuffer(t), r;
                }
                function d(t) {
                    var e = new FileReader(), r = c(e);
                    return e.readAsText(t), r;
                }
                function l(t) {
                    for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                    return r.join("");
                }
                function y(t) {
                    if (t.slice) return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)), e.buffer;
                }
                function m() {
                    return this.bodyUsed = !1, this._initBody = function(t) {
                        this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : r.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : r.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : r.arrayBuffer && r.blob && n(t) ? (this._bodyArrayBuffer = y(t.buffer), 
                        this._bodyInit = new Blob([ this._bodyArrayBuffer ])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || i(t)) ? this._bodyArrayBuffer = y(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", 
                        this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                    }, r.blob && (this.blob = function() {
                        var t = h(this);
                        if (t) return t;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([ this._bodyText ]));
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p);
                    }), this.text = function() {
                        var t = h(this);
                        if (t) return t;
                        if (this._bodyBlob) return d(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(l(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText);
                    }, r.formData && (this.formData = function() {
                        return this.text().then(w);
                    }), this.json = function() {
                        return this.text().then(JSON.parse);
                    }, this;
                }
                f.prototype.append = function(t, e) {
                    t = a(t), e = s(e);
                    var r = this.map[t];
                    this.map[t] = r ? r + ", " + e : e;
                }, f.prototype.delete = function(t) {
                    delete this.map[a(t)];
                }, f.prototype.get = function(t) {
                    return t = a(t), this.has(t) ? this.map[t] : null;
                }, f.prototype.has = function(t) {
                    return this.map.hasOwnProperty(a(t));
                }, f.prototype.set = function(t, e) {
                    this.map[a(t)] = s(e);
                }, f.prototype.forEach = function(t, e) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
                }, f.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(e, r) {
                        t.push(r);
                    }), u(t);
                }, f.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(e) {
                        t.push(e);
                    }), u(t);
                }, f.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(e, r) {
                        t.push([ r, e ]);
                    }), u(t);
                }, r.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
                var g = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
                function v(t) {
                    var e = t.toUpperCase();
                    return g.indexOf(e) > -1 ? e : t;
                }
                function b(t, e) {
                    var r = (e = e || {}).body;
                    if (t instanceof b) {
                        if (t.bodyUsed) throw new TypeError("Already read");
                        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), 
                        this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, 
                        t.bodyUsed = !0);
                    } else this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new f(e.headers)), 
                    this.method = v(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, 
                    this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(r);
                }
                function w(t) {
                    var e = new FormData();
                    return t.trim().split("&").forEach(function(t) {
                        if (t) {
                            var r = t.split("="), n = r.shift().replace(/\+/g, " "), o = r.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(n), decodeURIComponent(o));
                        }
                    }), e;
                }
                function A(t) {
                    var e = new f();
                    return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                        var r = t.split(":"), n = r.shift().trim();
                        if (n) {
                            var o = r.join(":").trim();
                            e.append(n, o);
                        }
                    }), e;
                }
                function k(t, e) {
                    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, 
                    this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", 
                    this.headers = new f(e.headers), this.url = e.url || "", this._initBody(t);
                }
                b.prototype.clone = function() {
                    return new b(this, {
                        body: this._bodyInit
                    });
                }, m.call(b.prototype), m.call(k.prototype), k.prototype.clone = function() {
                    return new k(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new f(this.headers),
                        url: this.url
                    });
                }, k.error = function() {
                    var t = new k(null, {
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error", t;
                };
                var B = [ 301, 302, 303, 307, 308 ];
                k.redirect = function(t, e) {
                    if (-1 === B.indexOf(e)) throw new RangeError("Invalid status code");
                    return new k(null, {
                        status: e,
                        headers: {
                            location: t
                        }
                    });
                }, e.DOMException = t.DOMException;
                try {
                    new e.DOMException();
                } catch (t) {
                    e.DOMException = function(t, e) {
                        this.message = t, this.name = e;
                        var r = Error(t);
                        this.stack = r.stack;
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException;
                }
                function O(t, n) {
                    return new Promise(function(o, i) {
                        var a = new b(t, n);
                        if (a.signal && a.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
                        var s = new XMLHttpRequest();
                        function u() {
                            s.abort();
                        }
                        s.onload = function() {
                            var t = {
                                status: s.status,
                                statusText: s.statusText,
                                headers: A(s.getAllResponseHeaders() || "")
                            };
                            t.url = "responseURL" in s ? s.responseURL : t.headers.get("X-Request-URL");
                            var e = "response" in s ? s.response : s.responseText;
                            o(new k(e, t));
                        }, s.onerror = function() {
                            i(new TypeError("Network request failed"));
                        }, s.ontimeout = function() {
                            i(new TypeError("Network request failed"));
                        }, s.onabort = function() {
                            i(new e.DOMException("Aborted", "AbortError"));
                        }, s.open(a.method, a.url, !0), "include" === a.credentials ? s.withCredentials = !0 : "omit" === a.credentials && (s.withCredentials = !1), 
                        "responseType" in s && r.blob && (s.responseType = "blob"), a.headers.forEach(function(t, e) {
                            s.setRequestHeader(e, t);
                        }), a.signal && (a.signal.addEventListener("abort", u), s.onreadystatechange = function() {
                            4 === s.readyState && a.signal.removeEventListener("abort", u);
                        }), s.send(void 0 === a._bodyInit ? null : a._bodyInit);
                    });
                }
                O.polyfill = !0, t.fetch || (t.fetch = O, t.Headers = f, t.Request = b, t.Response = k), 
                e.Headers = f, e.Request = b, e.Response = k, e.fetch = O, Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            }({});
        }(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var o = n;
        (e = o.fetch).default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, 
        e.Response = o.Response, t.exports = e;
    }
} ]);