"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var n = {};

  function t(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
  }

  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: r
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
    var r = Object.create(null);
    if (t.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var i in e) {
      t.d(r, i, function (n) {
        return e[n];
      }.bind(null, i));
    }
    return r;
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

  var i = function i(e) {
    var n = r[e];
    return n = null != n ? n.priority : 5, n;
  },
      o = function o(e, n) {
    var t = e,
        o = 6,
        l = -1;

    for (var u = 0; u < e.length; u++) {
      var _n = e.charAt(u),
          _t = i(_n);

      _t < o && (o = _t, l = u);
    }

    if (-1 !== l) {
      var _i = e.charAt(l),
          _o = function (e, n) {
        var t = "",
            i = r[e];

        if (null != i) {
          var _e = i.tone[n];
          t = null != _e ? _e : i[5];
        } else t = e;

        return t;
      }(_i, n);

      t = e.replace(_i, _o);
    }

    return t;
  };

  void 0 === window.savedPinyin && (window.savedPinyin = []);

  var l = function l(e) {
    return null !== e.match(/[\u3400-\u9FBF]/);
  },
      u = function u(e) {
    var n = e.length,
        t = e,
        r = "5";
    var i;
    return (i = e[n - 1]) >= "0" && i <= "9" && (t = e.slice(0, n - 1), r = e[n - 1]), {
      pinyin: t,
      tone: r
    };
  },
      a = function a(e, n) {
    var t = function (e) {
      var n = [],
          t = "";

      for (var r = 0; r < e.length; r++) {
        var _i2 = e.charAt(r);

        l(_i2) ? (t.length > 0 && (n.push(t), t = ""), n.push(_i2)) : t += _i2;
      }

      return 0 !== t.length && n.push(t), n;
    }(e),
        r = function (e) {
      return e.split(" ");
    }(n);

    if (t.length !== r.length) throw "Length of hanzi and pinyin chunks do not match";
    var i = [];

    for (var _e2 = 0; _e2 < t.length; _e2++) {
      var _n2 = t[_e2],
          _o2 = u(r[_e2]),
          _l = _o2.pinyin,
          _a = _o2.tone;

      i.push({
        hanzi: _n2,
        pinyin: _l,
        tone: _a
      });
    }

    return i;
  };

  var d = function d() {
    var e = document.getElementById("hz").innerHTML,
        n = document.getElementById("py").innerHTML;

    (function (e, n, t, r) {
      if (e) {
        var _l2 = document.getElementById(n),
            _u = document.createElement("wrap");

        for (var i = 0; i < e.length; i++) {
          var _n3 = document.createElement("character"),
              _t2 = e.length > 4 ? " small" : "",
              _r = document.createElement("hanzi");

          _r.innerHTML = e[i].hanzi, _r.className = "tone" + e[i].tone + _t2;

          var _a2 = document.createElement("pinyin");

          window.savedPinyin.push(o(e[i].pinyin, e[i].tone)), _a2.innerHTML = "&zwnj;", _a2.className = "tone" + e[i].tone + _t2, _n3.appendChild(_r), _n3.appendChild(_a2), _u.appendChild(_n3), _l2.appendChild(_u);
        }

        document.getElementById(t).outerHTML = "", document.getElementById(r).outerHTML = "";
      }
    })(a(e, n), "ch", "hz", "py");
  },
      c = function c() {
    var e = document.getElementById("tl");
    null != e && (e = e.innerHTML, function (e, n) {
      var t = document.getElementById(n);
      document.getElementById(n).innerHTML = "";
      var r = e.split(";");
      if (null != r) for (var _e3 = 0; _e3 < r.length; _e3++) {
        var _n4 = document.createElement("div");

        _n4.innerHTML = r[_e3], t.appendChild(_n4);
      }
    }(e, "tl")), function () {
      var e = document.getElementsByTagName("pinyin");

      for (var _n5 = 0; _n5 < e.length; _n5++) {
        e[_n5].innerHTML = window.savedPinyin[_n5];
      }
    }(), function () {
      if (document.getElementById("aw").childNodes.length > 0) {
        var _e4 = document.createElement("hr"),
            _n6 = document.getElementById("aw");

        _n6.parentNode.insertBefore(_e4, _n6);
      }
    }();
  };

  var m = [{
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
    n = m[1], document.getElementById("hz").innerHTML = n.hanzi, document.getElementById("py").innerHTML = n.pinyin, document.getElementById("tl").innerHTML = n.translation, document.getElementById("aw").innerHTML = n.hint, d(), c();
  });
}]);