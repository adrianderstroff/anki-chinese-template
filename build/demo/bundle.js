"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var l = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(l.exports, l, l.exports, n), l.l = !0, l.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var l in e) {
      n.d(r, l, function (t) {
        return e[t];
      }.bind(null, l));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  n.r(t);
  var r = {
    a: {
      priority: 1,
      tone: {
        1: "&#257;",
        2: "&#225;",
        3: "&#462;",
        4: "&#224;",
        5: "a"
      }
    },
    e: {
      priority: 2,
      tone: {
        1: "&#275;",
        2: "&#233;",
        3: "&#283;",
        4: "&#232;",
        5: "e"
      }
    },
    o: {
      priority: 3,
      tone: {
        1: "&#333;",
        2: "&#243;",
        3: "&#466;",
        4: "&#242;",
        5: "o"
      }
    },
    u: {
      priority: 4,
      tone: {
        1: "&#363;",
        2: "&#250;",
        3: "&#468;",
        4: "&#249;",
        5: "u"
      }
    },
    i: {
      priority: 4,
      tone: {
        1: "&#299;",
        2: "&#237;",
        3: "&#464;",
        4: "&#236;",
        5: "i"
      }
    },
    v: {
      priority: 4,
      tone: {
        1: "&#470;",
        2: "&#472;",
        3: "&#474;",
        4: "&#476;",
        5: "&#252;"
      }
    }
  };

  var l = function l(e) {
    var t = r[e];
    return t = null != t ? t.priority : 5, t;
  },
      o = function o(e, t) {
    var n = e,
        o = 6,
        i = -1;

    for (var u = 0; u < e.length; u++) {
      var _t = e.charAt(u),
          _n = l(_t);

      _n < o && (o = _n, i = u);
    }

    if (-1 !== i) {
      var _l = e.charAt(i),
          _o = function (e, t) {
        var n = "",
            l = r[e];

        if (null != l) {
          var _e = l.tone[t];
          n = null != _e ? _e : l[5];
        } else n = e;

        return n;
      }(_l, t);

      n = e.replace(_l, _o);
    }

    return n;
  },
      i = [];

  var u = function u(e) {
    return null !== e.match(/[\u3400-\u9FBF]/);
  },
      d = function d(e) {
    var t = e.length,
        n = e,
        r = "5";
    var l;
    return (l = e[t - 1]) >= "0" && l <= "9" && (n = e.slice(0, t - 1), r = e[t - 1]), {
      pinyin: n,
      tone: r
    };
  },
      a = function a(e, t) {
    var n = function (e) {
      var t = [],
          n = "";

      for (var r = 0; r < e.length; r++) {
        var _l2 = e.charAt(r);

        u(_l2) ? (n.length > 0 && (t.push(n), n = ""), t.push(_l2)) : n += _l2;
      }

      return 0 !== n.length && t.push(n), t;
    }(e),
        r = function (e) {
      return e.split(" ");
    }(t);

    if (n.length !== r.length) throw "Length of hanzi and pinyin chunks do not match";
    var l = [];

    for (var _e2 = 0; _e2 < n.length; _e2++) {
      var _t2 = n[_e2],
          _o2 = d(r[_e2]),
          _i = _o2.pinyin,
          _u = _o2.tone;

      l.push({
        hanzi: _t2,
        pinyin: _i,
        tone: _u
      });
    }

    return l;
  };

  var c = function c() {
    var e = document.getElementById("hz").innerHTML,
        t = document.getElementById("py").innerHTML;

    (function (e, t, n, r) {
      if (e) {
        var _u2 = document.getElementById(t),
            _d = document.createElement("wrap");

        for (var l = 0; l < e.length; l++) {
          var _t3 = document.createElement("character"),
              _n2 = document.createElement("hanzi");

          _n2.innerHTML = e[l].hanzi, _n2.className = "tone" + e[l].tone;

          var _r = document.createElement("pinyin");

          i.push(o(e[l].pinyin, e[l].tone)), _r.innerHTML = "&zwnj;", _r.className = "tone" + e[l].tone, _t3.appendChild(_n2), _t3.appendChild(_r), _d.appendChild(_t3), _u2.appendChild(_d);
        }

        document.getElementById(n).outerHTML = "", document.getElementById(r).outerHTML = "";
      }
    })(a(e, t), "ch", "hz", "py");
  },
      m = function m() {
    var e = document.getElementById("tl");
    null != e && (e = e.innerHTML, function (e, t) {
      var n = document.getElementById(t);
      document.getElementById(t).innerHTML = "";
      var r = e.split(";");
      if (null != r) for (var _e3 = 0; _e3 < r.length; _e3++) {
        var _t4 = document.createElement("div");

        _t4.innerHTML = r[_e3], n.appendChild(_t4);
      }
    }(e, "tl")), function () {
      var e = document.getElementsByTagName("pinyin");

      for (var _t5 = 0; _t5 < e.length; _t5++) {
        e[_t5].innerHTML = i[_t5];
      }
    }(), function () {
      if (document.getElementById("aw").childNodes.length > 0) {
        var _e4 = document.createElement("hr"),
            _t6 = document.getElementById("aw");

        _t6.parentNode.insertBefore(_e4, _t6);
      }
    }();
  };

  var p = {
    hanzi: "我是从A來的.",
    pinyin: "wo3 shi4 cong2 A lai2 de .",
    translation: "Im from ... . ; I am from ...",
    hint: "no hint here"
  };
  document.addEventListener("DOMContentLoaded", function (e) {
    var t;
    t = p, document.getElementById("hz").innerHTML = t.hanzi, document.getElementById("py").innerHTML = t.pinyin, document.getElementById("tl").innerHTML = t.translation, document.getElementById("aw").innerHTML = t.hint, c(), m();
  });
}]);