!function(n) {
    var e = {};
    function t(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }
    t.m = n, t.c = e, t.d = function(n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: r
        });
    }, t.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        });
    }, t.t = function(n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: n
        }), 2 & e && "string" != typeof n) for (var o in n) t.d(r, o, function(e) {
            return n[e];
        }.bind(null, o));
        return r;
    }, t.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default;
        } : function() {
            return n;
        };
        return t.d(e, "a", e), e;
    }, t.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
    }, t.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", t(t.s = 332);
}({
    332: function(n, e) {
        function t(n, e, t, r, o, i, u) {
            try {
                var c = n[i](u), f = c.value;
            } catch (n) {
                return void t(n);
            }
            c.done ? e(f) : Promise.resolve(f).then(r, o);
        }
        function r(n) {
            return function() {
                var e = this, r = arguments;
                return new Promise(function(o, i) {
                    var u = n.apply(e, r);
                    function c(n) {
                        t(u, o, i, c, f, "next", n);
                    }
                    function f(n) {
                        t(u, o, i, c, f, "throw", n);
                    }
                    c(void 0);
                });
            };
        }
        var o = !1, i = function() {
            var n = r(function*() {
                return new Promise(function(n) {
                    chrome.runtime.sendMessage("ifbmcpbgkhlpfcodhjhdbllhiaomkdej", {
                        command: "test",
                        object: "ping"
                    }, function(e) {
                        if (e) return o = !0, void n(!0);
                        chrome.runtime.lastError && (o = !1, n(!1));
                    });
                });
            });
            return function() {
                return n.apply(this, arguments);
            };
        }();
        r(function*() {
            yield i();
        })(), window.addEventListener("message", function(n) {
            n.origin === window.origin && n.data && "EQUATIO_CHECK_OFFICE_EXTENSION" === n.data.type && (o ? window.postMessage({
                type: "EQUATIO_CHECK_OFFICE_EXTENSION_RESPONSE",
                installed: !0
            }, origin) : i().then(function(n) {
                o = n, window.postMessage({
                    type: "EQUATIO_CHECK_OFFICE_EXTENSION_RESPONSE",
                    installed: n
                }, origin);
            }));
        });
    }
});