"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var n = {};

  function t(i) {
    if (n[i]) return n[i].exports;
    var o = n[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }

  t.m = e, t.c = n, t.d = function (e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: i
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
    var i = Object.create(null);
    if (t.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      t.d(i, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return i;
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
  var i = {
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

  var o = function o(e) {
    var n = i[e];
    return n = null != n ? n.priority : 5, n;
  },
      l = function l(e, n) {
    var t = e,
        l = 6,
        r = -1;

    for (var d = 0; d < e.length; d++) {
      var _n = e.charAt(d),
          _t = o(_n);

      _t < l && (l = _t, r = d);
    }

    if (-1 !== r) {
      var _o = e.charAt(r),
          _l = function (e, n) {
        var t = "",
            o = i[e];

        if (null != o) {
          var _e = o.tone[n];
          t = null != _e ? _e : o[5];
        } else t = e;

        return t;
      }(_o, n);

      t = e.replace(_o, _l);
    }

    return t;
  };

  void 0 === window.savedPinyin && (window.savedPinyin = []);

  var r = function r(e) {
    if (e.nodeType == Node.TEXT_NODE) return e;
    if (void 0 === e) return e;
    var n = e.childNodes;
    if (void 0 !== n) for (var _e2 = 0; _e2 < n.length; _e2++) {
      var _t2 = r(n[_e2]);

      if (null != _t2) return _t2;
    }
  };

  var d = function d(e) {
    return "." === e;
  },
      a = function a(e) {
    var n = e.length,
        t = e,
        i = "5";
    var o;
    return (o = e[n - 1]) >= "0" && o <= "9" && (t = e.slice(0, n - 1), i = e[n - 1]), {
      pinyin: t,
      tone: i
    };
  },
      u = function u(e, n) {
    var t = function (e) {
      var n = [],
          t = "";

      for (var i = 0; i < e.length; i++) {
        var _o2 = e.charAt(i);

        d(_o2) && t.length < 3 ? t += _o2 : (t.length > 0 && (n.push(t), t = ""), n.push(_o2));
      }

      return 0 !== t.length && n.push(t), n;
    }(e),
        i = function (e) {
      return e.split(" ");
    }(n);

    if (t.length !== i.length) {
      throw "Length of hanzi and pinyin chunks do not match" + " " + ('"' + t.join(",") + '"') + " " + ('"' + i.join(",") + '"');
    }

    var o = [];

    for (var _e3 = 0; _e3 < t.length; _e3++) {
      var _n2 = t[_e3],
          _l2 = a(i[_e3]),
          _r = _l2.pinyin,
          _d = _l2.tone;

      o.push({
        hanzi: _n2,
        pinyin: _r,
        tone: _d
      });
    }

    return o;
  };

  var c = function c() {
    var e = document.getElementById("hz"),
        n = document.getElementById("py");
    e = r(e), n = r(n), e = void 0 === e ? "" : e.nodeValue, n = void 0 === n ? "" : n.nodeValue, function (e, n, t, i) {
      if (e) {
        var _r2 = document.getElementById(n),
            _d2 = document.createElement("wrap");

        for (var o = 0; o < e.length; o++) {
          var _n3 = document.createElement("character"),
              _t3 = e.length > 4 ? " small" : "",
              _i = document.createElement("hanzi");

          _i.innerHTML = e[o].hanzi, _i.className = "tone" + e[o].tone + _t3;

          var _a = document.createElement("pinyin");

          window.savedPinyin.push(l(e[o].pinyin, e[o].tone)), _a.innerHTML = "&zwnj;", _a.className = "tone" + e[o].tone + _t3, _n3.appendChild(_i), _n3.appendChild(_a), _d2.appendChild(_n3), _r2.appendChild(_d2);
        }

        document.getElementById(t).outerHTML = "", document.getElementById(i).outerHTML = "";
      }
    }(u(e, n), "ch", "hz", "py");
  },
      h = function h() {
    var e = document.getElementById("tl");
    e = r(e), null != e && (e = e.nodeValue, function (e, n) {
      var t = document.getElementById(n);
      t.innerHTML = "";
      var i = e.split(";");
      if (null != i) for (var _e4 = 0; _e4 < i.length; _e4++) {
        var _n4 = document.createElement("div");

        _n4.innerHTML = i[_e4], t.appendChild(_n4);
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

        _n6 = r(_n6);
        var _t4 = _n6.parentNode;

        _t4.insertBefore(_e5, _n6);

        var _i2 = _n6.nodeValue.split(";");

        if (_t4.innerHTML = "", null != _i2) for (var _e6 = 0; _e6 < _i2.length; _e6++) {
          var _n7 = document.createElement("div");

          _n7.innerHTML = _i2[_e6], _t4.appendChild(_n7);
        }
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
  }, {
    hanzi: "有的A,有的B",
    pinyin: "you3 de A , you3 de B",
    translation: "some ..., some ...",
    hint: ""
  }, {
    hanzi: "有的...,有的....",
    pinyin: "you3 de ... , you3 de ... .",
    translation: "some ..., some ...",
    hint: "this is hint 1"
  }];
  document.addEventListener("DOMContentLoaded", function (e) {
    var n;
    n = m[3], document.getElementById("hz").innerHTML = n.hanzi, document.getElementById("py").innerHTML = n.pinyin, document.getElementById("tl").innerHTML = n.translation, document.getElementById("aw").innerHTML = n.hint, c(), h();
  });
}]);