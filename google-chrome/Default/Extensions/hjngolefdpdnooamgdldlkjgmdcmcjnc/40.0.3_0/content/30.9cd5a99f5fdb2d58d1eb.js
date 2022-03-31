(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([ [ 30 ], {
    346: function(i, e, r) {
        "use strict";
        r.r(e);
        var t, o, a = r(8), n = (r(125), r(101), r(7), r(1), r(17), r(29), r(126), r(127), 
        r(71), r(72), r(102), r(70), r(103), Object(a.L)(function*() {
            if (t && o) return Promise.resolve({
                Prismic: t,
                api: o
            });
            var i = (yield r.e(29).then(r.bind(null, 657))).default;
            if (o) return Promise.resolve({
                Prismic: i,
                api: o
            });
            var e = yield i.getApi("https://equatio-academy.prismic.io/api/v2");
            return o = e, {
                Prismic: i,
                api: e
            };
        }));
        e.default = n;
    }
} ]);