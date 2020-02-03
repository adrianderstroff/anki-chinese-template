"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var n = {};

  function t(o) {
    if (n[o]) return n[o].exports;
    var r = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }

  t.m = e, t.c = n, t.d = function (e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var r in e) {
      t.d(o, r, function (n) {
        return e[n];
      }.bind(null, r));
    }
    return o;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 0);
}([function (e, n, t) {
  "use strict";

  t.r(n);
  var o = {
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

  var r = function r(e) {
    var n = o[e];
    return n = null != n ? n.priority : 5, n;
  },
      i = function i(e, n) {
    var t = e,
        i = 6,
        l = -1;

    for (var d = 0; d < e.length; d++) {
      var _n = e.charAt(d),
          _t = r(_n);

      _t < i && (i = _t, l = d);
    }

    if (-1 !== l) {
      var _r = e.charAt(l),
          _i = function (e, n) {
        var t = "",
            r = o[e];

        if (null != r) {
          var _e = r.tone[n];
          t = null != _e ? _e : r[5];
        } else t = e;

        return t;
      }(_r, n);

      t = e.replace(_r, _i);
    }

    return t;
  };

  void 0 === window.savedPinyin && (window.savedPinyin = []);

  var l = function l(e) {
    if (e.nodeType == Node.TEXT_NODE) return e;
    if (void 0 === e) return e;
    var n = e.childNodes;
    if (void 0 !== n) for (var _e2 = 0; _e2 < n.length; _e2++) {
      var _t2 = l(n[_e2]);

      if (null != _t2) return _t2;
    }
  };

  var d = function d(e) {
    return null !== e.match(/[\u3400-\u9FBF]/);
  },
      u = function u(e) {
    var n = e.length,
        t = e,
        o = "5";
    var r;
    return (r = e[n - 1]) >= "0" && r <= "9" && (t = e.slice(0, n - 1), o = e[n - 1]), {
      pinyin: t,
      tone: o
    };
  },
      a = function a(e, n) {
    var t = function (e) {
      var n = [],
          t = "";

      for (var o = 0; o < e.length; o++) {
        var _r2 = e.charAt(o);

        d(_r2) ? (t.length > 0 && (n.push(t), t = ""), n.push(_r2)) : t += _r2;
      }

      return 0 !== t.length && n.push(t), n;
    }(e),
        o = function (e) {
      return e.split(" ");
    }(n);

    if (t.length !== o.length) {
      throw "Length of hanzi and pinyin chunks do not match" + " " + ('"' + t.join(",") + '"') + " " + ('"' + o.join(",") + '"');
    }

    var r = [];

    for (var _e3 = 0; _e3 < t.length; _e3++) {
      var _n2 = t[_e3],
          _i2 = u(o[_e3]),
          _l = _i2.pinyin,
          _d = _i2.tone;

      r.push({
        hanzi: _n2,
        pinyin: _l,
        tone: _d
      });
    }

    return r;
  };

  var c = function c() {
    var e = document.getElementById("hz"),
        n = document.getElementById("py");
    e = l(e), n = l(n), e = void 0 === e ? "" : e.nodeValue, n = void 0 === n ? "" : n.nodeValue, function (e, n, t, o) {
      if (e) {
        var _l2 = document.getElementById(n),
            _d2 = document.createElement("wrap");

        for (var r = 0; r < e.length; r++) {
          var _n3 = document.createElement("character"),
              _t3 = e.length > 4 ? " small" : "",
              _o = document.createElement("hanzi");

          _o.innerHTML = e[r].hanzi, _o.className = "tone" + e[r].tone + _t3;

          var _u = document.createElement("pinyin");

          window.savedPinyin.push(i(e[r].pinyin, e[r].tone)), _u.innerHTML = "&zwnj;", _u.className = "tone" + e[r].tone + _t3, _n3.appendChild(_o), _n3.appendChild(_u), _d2.appendChild(_n3), _l2.appendChild(_d2);
        }

        document.getElementById(t).outerHTML = "", document.getElementById(o).outerHTML = "";
      }
    }(a(e, n), "ch", "hz", "py");
  },
      m = function m() {
    var e = document.getElementById("tl");
    e = l(e), null != e && (e = e.nodeValue, function (e, n) {
      var t = document.getElementById(n);
      t.innerHTML = "";
      var o = e.split(";");
      if (null != o) for (var _e4 = 0; _e4 < o.length; _e4++) {
        var _n4 = document.createElement("div");

        _n4.innerHTML = o[_e4], t.appendChild(_n4);
      }
    }(e, "tl")), function () {
      var e = document.getElementsByTagName("pinyin");

      for (var _n5 = 0; _n5 < e.length; _n5++) {
        e[_n5].innerHTML = window.savedPinyin[_n5];
      }
    }(), function () {
      if (document.getElementById("aw").childNodes.length > 0) {
        var _e5 = document.createElement("hr"),
            _n6 = document.getElementById("aw");

        _n6.parentNode.insertBefore(_e5, _n6);
      }
    }();
  };

  var p = [{
    hanzi: "我是从A來的.",
    pinyin: "wo3 shi4 cong2 A lai2 de .",
    translation: "Im from ... . ; I am from ...",
    hint: "no hint here"
  }, {
    hanzi: "狼吞虎咽",
    pinyin: "lang2 tun1 hu3 yan4",
    translation: "to brush food away like a wolf",
    hint: ""
  }];
  document.addEventListener("DOMContentLoaded", function (e) {
    var n;
    n = p[0], document.getElementById("hz").innerHTML = n.hanzi, document.getElementById("py").innerHTML = n.pinyin, document.getElementById("tl").innerHTML = n.translation, document.getElementById("aw").innerHTML = n.hint, c(), m();
  });
}]);