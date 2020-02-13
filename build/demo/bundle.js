"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var n = {};

  function t(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
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
    }), 2 & n && "string" != typeof e) for (var r in e) {
      t.d(i, r, function (n) {
        return e[n];
      }.bind(null, r));
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

  var r = function r(e) {
    var n = i[e];
    return n = null != n ? n.priority : 5, n;
  },
      l = function l(e, n) {
    var t = e,
        l = 6,
        o = -1;

    for (var a = 0; a < e.length; a++) {
      var _n = e.charAt(a),
          _t = r(_n);

      _t <= l && (l = _t, o = a);
    }

    if (-1 !== o) {
      var _r = e.charAt(o),
          _l = function (e, n) {
        var t = "",
            r = i[e];

        if (null != r) {
          var _e = r.tone[n];
          t = null != _e ? _e : r[5];
        } else t = e;

        return t;
      }(_r, n);

      t = e.replace(_r, _l);
    }

    return t;
  };

  void 0 === window.savedPinyin && (window.savedPinyin = []);

  var o = function o(e) {
    var n = document.createElement("table"),
        t = document.createElement("tbody");

    for (var _n2 = 0; _n2 < e.length; _n2++) {
      var _i = e[_n2],
          _r2 = document.createElement("tr");

      for (var _e2 = 0; _e2 < _i.length; _e2++) {
        var _n3 = document.createElement("td"),
            _t2 = _i[_e2];

        _n3.appendChild(_t2), _r2.appendChild(_n3);
      }

      t.appendChild(_r2);
    }

    return n.appendChild(t), n;
  },
      a = function a(e) {
    if (null === e) return [d(""), d("")];
    var n = e.split(" ");
    if (0 === n.length) return [d(""), d(e)];
    var t = n[0],
        i = void 0;
    if (-1 !== t.indexOf("adv:") ? i = "adv" : -1 !== t.indexOf("adj:") ? i = "adj" : -1 !== t.indexOf("mw:") ? i = "mw" : -1 !== t.indexOf("v:") ? i = "verb" : -1 !== t.indexOf("n:") && (i = "noun"), void 0 === i) return [d(""), d(e)];
    var r = n.slice(1, e.length).join(" ");
    return [d("", "desc " + i), d(r)];
  },
      d = function d(e, n) {
    var t = document.createTextNode(e),
        i = t;
    return void 0 !== n && (i = document.createElement("div"), i.className = n, i.appendChild(t)), i;
  },
      u = function u(e) {
    if (e.nodeType == Node.TEXT_NODE) return e;
    if (void 0 === e) return e;
    var n = e.childNodes;
    if (void 0 !== n) for (var _e3 = 0; _e3 < n.length; _e3++) {
      var _t3 = u(n[_e3]);

      if (null != _t3) return _t3;
    }
  };

  var h = function h(e) {
    return "." === e;
  },
      s = function s(e) {
    var n = e.length,
        t = e,
        i = "5";
    var r;
    return (r = e[n - 1]) >= "0" && r <= "9" && (t = e.slice(0, n - 1), i = e[n - 1]), {
      pinyin: t,
      tone: i
    };
  },
      c = function c(e, n) {
    var t = function (e) {
      var n = [],
          t = "";

      for (var i = 0; i < e.length; i++) {
        var _r3 = e.charAt(i);

        h(_r3) && t.length < 3 ? t += _r3 : (t.length > 0 && (n.push(t), t = ""), n.push(_r3));
      }

      return 0 !== t.length && n.push(t), n;
    }(e),
        i = function (e) {
      return e.split(" ");
    }(n);

    if (t.length !== i.length) {
      throw "Length of hanzi and pinyin chunks do not match" + " " + ('"' + t.join(",") + '"') + " " + ('"' + i.join(",") + '"');
    }

    var r = [];

    for (var _e4 = 0; _e4 < t.length; _e4++) {
      var _n4 = t[_e4],
          _l2 = s(i[_e4]),
          _o = _l2.pinyin,
          _a = _l2.tone;

      r.push({
        hanzi: _n4,
        pinyin: _o,
        tone: _a
      });
    }

    return r;
  };

  var m = function m() {
    var e = document.getElementById("hz"),
        n = document.getElementById("py");
    e = u(e), n = u(n), e = void 0 === e ? "" : e.nodeValue, n = void 0 === n ? "" : n.nodeValue, function (e, n, t, i) {
      if (e) {
        var _o2 = document.getElementById(n),
            _a2 = document.createElement("wrap");

        window.savedPinyin = [];

        for (var r = 0; r < e.length; r++) {
          var _n5 = document.createElement("character"),
              _t4 = e.length > 5 ? " smaller" : e.length > 3 ? " small" : "",
              _i2 = document.createElement("hanzi");

          _i2.innerHTML = e[r].hanzi, _i2.className = "tone" + e[r].tone + _t4;

          var _d = document.createElement("pinyin");

          window.savedPinyin.push(l(e[r].pinyin, e[r].tone)), _d.innerHTML = "&zwnj;", _d.className = "tone" + e[r].tone + _t4, _n5.appendChild(_i2), _n5.appendChild(_d), _a2.appendChild(_n5), _o2.appendChild(_a2);
        }

        document.getElementById(t).outerHTML = "", document.getElementById(i).outerHTML = "";
      }
    }(c(e, n), "ch", "hz", "py");
  },
      p = function p() {
    var e = document.getElementById("tl");
    e = u(e), null != e && (e = e.nodeValue, function (e, n) {
      var t = document.getElementById(n);
      t.innerHTML = "";
      var i = e.split(";");

      if (null != i) {
        var _e5 = [];

        for (var _n7 = 0; _n7 < i.length; _n7++) {
          var _t5 = i[_n7].trim(),
              _r4 = a(_t5);

          _e5.push(_r4);
        }

        var _n6 = o(_e5);

        t.appendChild(_n6);
      }
    }(e, "tl")), function () {
      var e = document.getElementsByTagName("pinyin");

      for (var _n8 = 0; _n8 < e.length; _n8++) {
        e[_n8].innerHTML = window.savedPinyin[_n8];
      }
    }(), function () {
      if (document.getElementById("aw").childNodes.length > 0) {
        var _e6 = document.createElement("hr"),
            _n9 = document.getElementById("aw");

        _n9.parentNode.insertBefore(_e6, _n9);

        var _t6 = _n9.innerText.split(";");

        if (_n9.innerHTML = "", null != _t6) for (var _e7 = 0; _e7 < _t6.length; _e7++) {
          var _i3 = document.createElement("div");

          _i3.innerHTML = _t6[_e7].trim(), _n9.appendChild(_i3);
        }
      }
    }();
  };

  var y = [{
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
    translation: "some ..., some ...  ;   this is another line",
    hint: "this is hint 1"
  }, {
    hanzi: "有的...",
    pinyin: "you3 de ...",
    translation: "v: this is a verb  ; n: this is a noun ; a: this is an adjective ; adv: this is an adverb ; mv: this is a measure word",
    hint: "this is hint 1"
  }, {
    hanzi: "有的...",
    pinyin: "you3 de ...",
    translation: "v: this is a verb ; n: this is a noun ; mw: this a measure word ; adj: this an adjective ; adv: this an adverb",
    hint: ""
  }, {
    hanzi: "有的...",
    pinyin: "you3 de ...",
    translation: "this is a verb ; this is a noun ; this a measure word ; this an adjective ; this an adverb",
    hint: ""
  }];
  document.addEventListener("DOMContentLoaded", function (e) {
    var n;
    n = y[5], document.getElementById("hz").innerHTML = n.hanzi, document.getElementById("py").innerHTML = n.pinyin, document.getElementById("tl").innerHTML = n.translation, document.getElementById("aw").innerHTML = n.hint, m(), p();
  });
}]);