!(function(t) {
  function e(e) {
    for (var n, o, i = e[0], a = e[1], l = 0, c = []; l < i.length; l++)
      (o = i[l]), r[o] && c.push(r[o][0]), (r[o] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    for (s && s(e); c.length; ) c.shift()();
  }
  var n = {},
    r = { 3: 0 };
  function o(e) {
    if (n[e]) return n[e].exports;
    var r = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.e = function(t) {
    var e = [],
      n = r[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var i = new Promise(function(e, o) {
          n = r[t] = [e, o];
        });
        e.push((n[2] = i));
        var a,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          o.nc && l.setAttribute("nonce", o.nc),
          (l.src = (function(t) {
            return (
              o.p + "" + ({ 2: "collect-autotrack-rangers" }[t] || t) + ".js"
            );
          })(t)),
          (a = function(e) {
            (l.onerror = l.onload = null), clearTimeout(s);
            var n = r[t];
            if (0 !== n) {
              if (n) {
                var o = e && ("load" === e.type ? "missing" : e.type),
                  i = e && e.target && e.target.src,
                  a = new Error(
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"
                  );
                (a.type = o), (a.request = i), n[1](a);
              }
              r[t] = void 0;
            }
          });
        var s = setTimeout(function() {
          a({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = a), document.head.appendChild(l);
      }
    return Promise.all(e);
  }),
    (o.m = t),
    (o.c = n),
    (o.d = function(t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          o.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    (o.oe = function(t) {
      throw t;
    });
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    a = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var l = 0; l < i.length; l++) e(i[l]);
  var s = a;
  o((o.s = 171));
})([
  function(t, e, n) {
    "use strict";
    function r() {}
    function o(t, e) {
      for (const n in e) t[n] = e[n];
      return t;
    }
    function i(t) {
      return t();
    }
    function a() {
      return Object.create(null);
    }
    function l(t) {
      t.forEach(i);
    }
    function s(t) {
      return "function" == typeof t;
    }
    function c(t, e) {
      return t != t
        ? e == e
        : t !== e || (t && "object" == typeof t) || "function" == typeof t;
    }
    let u;
    function f(t, e) {
      return u || (u = document.createElement("a")), (u.href = e), t === u.href;
    }
    function d(t) {
      return 0 === Object.keys(t).length;
    }
    function p(t, ...e) {
      if (null == t) return r;
      const n = t.subscribe(...e);
      return n.unsubscribe ? () => n.unsubscribe() : n;
    }
    function h(t) {
      let e;
      return p(t, t => (e = t))(), e;
    }
    function b(t, e, n) {
      t.$$.on_destroy.push(p(e, n));
    }
    function g(t, e, n, r) {
      if (t) {
        const o = m(t, e, n, r);
        return t[0](o);
      }
    }
    function m(t, e, n, r) {
      return t[1] && r ? o(n.ctx.slice(), t[1](r(e))) : n.ctx;
    }
    function v(t, e, n, r) {
      if (t[2] && r) {
        const o = t[2](r(n));
        if (void 0 === e.dirty) return o;
        if ("object" == typeof o) {
          const t = [],
            n = Math.max(e.dirty.length, o.length);
          for (let r = 0; r < n; r += 1) t[r] = e.dirty[r] | o[r];
          return t;
        }
        return e.dirty | o;
      }
      return e.dirty;
    }
    function y(t, e, n, r, o, i) {
      if (o) {
        const a = m(e, n, r, i);
        t.p(a, o);
      }
    }
    function x(t) {
      if (t.ctx.length > 32) {
        const e = [],
          n = t.ctx.length / 32;
        for (let t = 0; t < n; t++) e[t] = -1;
        return e;
      }
      return -1;
    }
    n.d(e, "a", function() {
      return G;
    }),
      n.d(e, "b", function() {
        return At;
      }),
      n.d(e, "c", function() {
        return ct;
      }),
      n.d(e, "d", function() {
        return st;
      }),
      n.d(e, "e", function() {
        return H;
      }),
      n.d(e, "f", function() {
        return O;
      }),
      n.d(e, "g", function() {
        return _;
      }),
      n.d(e, "h", function() {
        return o;
      }),
      n.d(e, "i", function() {
        return N;
      }),
      n.d(e, "j", function() {
        return K;
      }),
      n.d(e, "k", function() {
        return _t;
      }),
      n.d(e, "l", function() {
        return et;
      }),
      n.d(e, "m", function() {
        return Q;
      }),
      n.d(e, "n", function() {
        return vt;
      }),
      n.d(e, "o", function() {
        return b;
      }),
      n.d(e, "p", function() {
        return Y;
      }),
      n.d(e, "q", function() {
        return St;
      }),
      n.d(e, "r", function() {
        return g;
      }),
      n.d(e, "s", function() {
        return Ct;
      }),
      n.d(e, "t", function() {
        return C;
      }),
      n.d(e, "u", function() {
        return E;
      }),
      n.d(e, "v", function() {
        return T;
      }),
      n.d(e, "w", function() {
        return P;
      }),
      n.d(e, "x", function() {
        return x;
      }),
      n.d(e, "y", function() {
        return v;
      }),
      n.d(e, "z", function() {
        return Ot;
      }),
      n.d(e, "A", function() {
        return jt;
      }),
      n.d(e, "B", function() {
        return h;
      }),
      n.d(e, "C", function() {
        return mt;
      }),
      n.d(e, "D", function() {
        return Tt;
      }),
      n.d(e, "E", function() {
        return S;
      }),
      n.d(e, "F", function() {
        return s;
      }),
      n.d(e, "G", function() {
        return L;
      }),
      n.d(e, "H", function() {
        return Et;
      }),
      n.d(e, "I", function() {
        return r;
      }),
      n.d(e, "J", function() {
        return J;
      }),
      n.d(e, "K", function() {
        return wt;
      }),
      n.d(e, "L", function() {
        return R;
      }),
      n.d(e, "M", function() {
        return l;
      }),
      n.d(e, "N", function() {
        return c;
      }),
      n.d(e, "O", function() {
        return W;
      }),
      n.d(e, "P", function() {
        return U;
      }),
      n.d(e, "Q", function() {
        return D;
      }),
      n.d(e, "R", function() {
        return I;
      }),
      n.d(e, "S", function() {
        return M;
      }),
      n.d(e, "T", function() {
        return B;
      }),
      n.d(e, "U", function() {
        return q;
      }),
      n.d(e, "V", function() {
        return $;
      }),
      n.d(e, "W", function() {
        return f;
      }),
      n.d(e, "X", function() {
        return p;
      }),
      n.d(e, "Y", function() {
        return A;
      }),
      n.d(e, "Z", function() {
        return z;
      }),
      n.d(e, "ab", function() {
        return lt;
      }),
      n.d(e, "bb", function() {
        return F;
      }),
      n.d(e, "cb", function() {
        return V;
      }),
      n.d(e, "db", function() {
        return yt;
      }),
      n.d(e, "eb", function() {
        return xt;
      }),
      n.d(e, "fb", function() {
        return kt;
      }),
      n.d(e, "gb", function() {
        return y;
      }),
      new Set();
    let w,
      k,
      j = !1;
    function O(t, e) {
      t.appendChild(e);
    }
    function _(t, e, n) {
      const r = (function(t) {
        if (!t) return document;
        const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
        return e && e.host ? e : t.ownerDocument;
      })(t);
      if (!r.getElementById(e)) {
        const t = T("style");
        (t.id = e),
          (t.textContent = n),
          (function(t, e) {
            O(t.head || t, e);
          })(r, t);
      }
    }
    function S(t, e, n) {
      t.insertBefore(e, n || null);
    }
    function E(t) {
      t.parentNode.removeChild(t);
    }
    function C(t, e) {
      for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
    }
    function T(t) {
      return document.createElement(t);
    }
    function A(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function z(t) {
      return document.createTextNode(t);
    }
    function $() {
      return z(" ");
    }
    function P() {
      return z("");
    }
    function L(t, e, n, r) {
      return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
    }
    function R(t) {
      return function(e) {
        return e.preventDefault(), t.call(this, e);
      };
    }
    function N(t, e, n) {
      null == n
        ? t.removeAttribute(e)
        : t.getAttribute(e) !== n && t.setAttribute(e, n);
    }
    function D(t, e) {
      const n = Object.getOwnPropertyDescriptors(t.__proto__);
      for (const r in e)
        null == e[r]
          ? t.removeAttribute(r)
          : "style" === r
          ? (t.style.cssText = e[r])
          : "__value" === r
          ? (t.value = t[r] = e[r])
          : n[r] && n[r].set
          ? (t[r] = e[r])
          : N(t, r, e[r]);
    }
    function I(t, e, n) {
      e in t
        ? (t[e] = ("boolean" == typeof t[e] && "" === n) || n)
        : N(t, e, n);
    }
    function F(t) {
      return "" === t ? null : +t;
    }
    function M(t, e) {
      (e = "" + e), t.wholeText !== e && (t.data = e);
    }
    function B(t, e) {
      t.value = null == e ? "" : e;
    }
    function q(t, e, n, r) {
      null === n
        ? t.style.removeProperty(e)
        : t.style.setProperty(e, n, r ? "important" : "");
    }
    function W(t, e) {
      for (let n = 0; n < t.options.length; n += 1) {
        const r = t.options[n];
        if (r.__value === e) return void (r.selected = !0);
      }
      t.selectedIndex = -1;
    }
    function U(t) {
      const e = t.querySelector(":checked") || t.options[0];
      return e && e.__value;
    }
    function H(t, e) {
      "static" === getComputedStyle(t).position &&
        (t.style.position = "relative");
      const n = T("iframe");
      n.setAttribute(
        "style",
        "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
      ),
        n.setAttribute("aria-hidden", "true"),
        (n.tabIndex = -1);
      const r = (function() {
        if (void 0 === w) {
          w = !1;
          try {
            "undefined" != typeof window &&
              window.parent &&
              window.parent.document;
          } catch (t) {
            w = !0;
          }
        }
        return w;
      })();
      let o;
      return (
        r
          ? ((n.src =
              "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
            (o = L(window, "message", t => {
              t.source === n.contentWindow && e();
            })))
          : ((n.src = "about:blank"),
            (n.onload = () => {
              o = L(n.contentWindow, "resize", e);
            })),
        O(t, n),
        () => {
          r ? o() : o && n.contentWindow && o(), E(n);
        }
      );
    }
    function V(t, e, n) {
      t.classList[n ? "add" : "remove"](e);
    }
    class G {
      constructor() {
        this.e = this.n = null;
      }
      c(t) {
        this.h(t);
      }
      m(t, e, n = null) {
        this.e || ((this.e = T(e.nodeName)), (this.t = e), this.c(t)),
          this.i(n);
      }
      h(t) {
        (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
      }
      i(t) {
        for (let e = 0; e < this.n.length; e += 1) S(this.t, this.n[e], t);
      }
      p(t) {
        this.d(), this.h(t), this.i(this.a);
      }
      d() {
        this.n.forEach(E);
      }
    }
    function Z(t) {
      k = t;
    }
    function X() {
      if (!k)
        throw new Error("Function called outside component initialization");
      return k;
    }
    function K(t) {
      X().$$.before_update.push(t);
    }
    function J(t) {
      X().$$.on_mount.push(t);
    }
    function Y() {
      const t = X();
      return (e, n) => {
        const r = t.$$.callbacks[e];
        if (r) {
          const o = (function(t, e, n = !1) {
            const r = document.createEvent("CustomEvent");
            return r.initCustomEvent(t, n, !1, e), r;
          })(e, n);
          r.slice().forEach(e => {
            e.call(t, o);
          });
        }
      };
    }
    function Q(t, e) {
      const n = t.$$.callbacks[e.type];
      n && n.slice().forEach(t => t.call(this, e));
    }
    new Map();
    const tt = [],
      et = [],
      nt = [],
      rt = [],
      ot = Promise.resolve();
    let it = !1;
    function at() {
      it || ((it = !0), ot.then(dt));
    }
    function lt() {
      return at(), ot;
    }
    function st(t) {
      nt.push(t);
    }
    function ct(t) {
      rt.push(t);
    }
    const ut = new Set();
    let ft = 0;
    function dt() {
      const t = k;
      do {
        for (; ft < tt.length; ) {
          const t = tt[ft];
          ft++, Z(t), pt(t.$$);
        }
        for (Z(null), tt.length = 0, ft = 0; et.length; ) et.pop()();
        for (let t = 0; t < nt.length; t += 1) {
          const e = nt[t];
          ut.has(e) || (ut.add(e), e());
        }
        nt.length = 0;
      } while (tt.length);
      for (; rt.length; ) rt.pop()();
      (it = !1), ut.clear(), Z(t);
    }
    function pt(t) {
      if (null !== t.fragment) {
        t.update(), l(t.before_update);
        const e = t.dirty;
        (t.dirty = [-1]),
          t.fragment && t.fragment.p(t.ctx, e),
          t.after_update.forEach(st);
      }
    }
    const ht = new Set();
    let bt, gt;
    function mt() {
      bt = { r: 0, c: [], p: bt };
    }
    function vt() {
      bt.r || l(bt.c), (bt = bt.p);
    }
    function yt(t, e) {
      t && t.i && (ht.delete(t), t.i(e));
    }
    function xt(t, e, n, r) {
      if (t && t.o) {
        if (ht.has(t)) return;
        ht.add(t),
          bt.c.push(() => {
            ht.delete(t), r && (n && t.d(1), r());
          }),
          t.o(e);
      }
    }
    function wt(t, e) {
      xt(t, 1, 1, () => {
        e.delete(t.key);
      });
    }
    function kt(t, e, n, r, o, i, a, l, s, c, u, f) {
      let d = t.length,
        p = i.length,
        h = d;
      const b = {};
      for (; h--; ) b[t[h].key] = h;
      const g = [],
        m = new Map(),
        v = new Map();
      for (h = p; h--; ) {
        const t = f(o, i, h),
          l = n(t);
        let s = a.get(l);
        s ? r && s.p(t, e) : (s = c(l, t)).c(),
          m.set(l, (g[h] = s)),
          l in b && v.set(l, Math.abs(h - b[l]));
      }
      const y = new Set(),
        x = new Set();
      function w(t) {
        yt(t, 1), t.m(l, u), a.set(t.key, t), (u = t.first), p--;
      }
      for (; d && p; ) {
        const e = g[p - 1],
          n = t[d - 1],
          r = e.key,
          o = n.key;
        e === n
          ? ((u = e.first), d--, p--)
          : m.has(o)
          ? !a.has(r) || y.has(r)
            ? w(e)
            : x.has(o)
            ? d--
            : v.get(r) > v.get(o)
            ? (x.add(r), w(e))
            : (y.add(o), d--)
          : (s(n, a), d--);
      }
      for (; d--; ) {
        const e = t[d];
        m.has(e.key) || s(e, a);
      }
      for (; p; ) w(g[p - 1]);
      return g;
    }
    function jt(t, e) {
      const n = {},
        r = {},
        o = { $$scope: 1 };
      let i = t.length;
      for (; i--; ) {
        const a = t[i],
          l = e[i];
        if (l) {
          for (const t in a) t in l || (r[t] = 1);
          for (const t in l) o[t] || ((n[t] = l[t]), (o[t] = 1));
          t[i] = l;
        } else for (const t in a) o[t] = 1;
      }
      for (const t in r) t in n || (n[t] = void 0);
      return n;
    }
    function Ot(t) {
      return "object" == typeof t && null !== t ? t : {};
    }
    function _t(t, e, n) {
      const r = t.$$.props[e];
      void 0 !== r && ((t.$$.bound[r] = n), n(t.$$.ctx[r]));
    }
    function St(t) {
      t && t.c();
    }
    function Et(t, e, n, r) {
      const { fragment: o, on_mount: a, on_destroy: c, after_update: u } = t.$$;
      o && o.m(e, n),
        r ||
          st(() => {
            const e = a.map(i).filter(s);
            c ? c.push(...e) : l(e), (t.$$.on_mount = []);
          }),
        u.forEach(st);
    }
    function Ct(t, e) {
      const n = t.$$;
      null !== n.fragment &&
        (l(n.on_destroy),
        n.fragment && n.fragment.d(e),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []));
    }
    function Tt(t, e, n, o, i, s, c, u = [-1]) {
      const f = k;
      Z(t);
      const d = (t.$$ = {
        fragment: null,
        ctx: null,
        props: s,
        update: r,
        not_equal: i,
        bound: a(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (f ? f.$$.context : [])),
        callbacks: a(),
        dirty: u,
        skip_bound: !1,
        root: e.target || f.$$.root
      });
      c && c(d.root);
      let p = !1;
      if (
        ((d.ctx = n
          ? n(t, e.props || {}, (e, n, ...r) => {
              const o = r.length ? r[0] : n;
              return (
                d.ctx &&
                  i(d.ctx[e], (d.ctx[e] = o)) &&
                  (!d.skip_bound && d.bound[e] && d.bound[e](o),
                  p &&
                    (function(t, e) {
                      -1 === t.$$.dirty[0] &&
                        (tt.push(t), at(), t.$$.dirty.fill(0)),
                        (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                    })(t, e)),
                n
              );
            })
          : []),
        d.update(),
        (p = !0),
        l(d.before_update),
        (d.fragment = !!o && o(d.ctx)),
        e.target)
      ) {
        if (e.hydrate) {
          j = !0;
          const t = ((h = e.target), Array.from(h.childNodes));
          d.fragment && d.fragment.l(t), t.forEach(E);
        } else d.fragment && d.fragment.c();
        e.intro && yt(t.$$.fragment),
          Et(t, e.target, e.anchor, e.customElement),
          (j = !1),
          dt();
      }
      var h;
      Z(f);
    }
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global,
      new Set([
        "allowfullscreen",
        "allowpaymentrequest",
        "async",
        "autofocus",
        "autoplay",
        "checked",
        "controls",
        "default",
        "defer",
        "disabled",
        "formnovalidate",
        "hidden",
        "ismap",
        "loop",
        "multiple",
        "muted",
        "nomodule",
        "novalidate",
        "open",
        "playsinline",
        "readonly",
        "required",
        "reversed",
        "selected"
      ]),
      "function" == typeof HTMLElement &&
        (gt = class extends HTMLElement {
          constructor() {
            super(), this.attachShadow({ mode: "open" });
          }
          connectedCallback() {
            const { on_mount: t } = this.$$;
            this.$$.on_disconnect = t.map(i).filter(s);
            for (const t in this.$$.slotted)
              this.appendChild(this.$$.slotted[t]);
          }
          attributeChangedCallback(t, e, n) {
            this[t] = n;
          }
          disconnectedCallback() {
            l(this.$$.on_disconnect);
          }
          $destroy() {
            Ct(this, 1), (this.$destroy = r);
          }
          $on(t, e) {
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return (
              n.push(e),
              () => {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1);
              }
            );
          }
          $set(t) {
            this.$$set &&
              !d(t) &&
              ((this.$$.skip_bound = !0),
              this.$$set(t),
              (this.$$.skip_bound = !1));
          }
        });
    class At {
      $destroy() {
        Ct(this, 1), (this.$destroy = r);
      }
      $on(t, e) {
        const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          n.push(e),
          () => {
            const t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        );
      }
      $set(t) {
        this.$$set &&
          !d(t) &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }
    }
  },
  ,
  ,
  ,
  function(t, e, n) {
    "use strict";
    var r = n(18),
      o = "object" == typeof self && self && self.Object === Object && self,
      i = r.a || o || Function("return this")();
    e.a = i;
  },
  ,
  function(t, e, n) {
    "use strict";
    (function(t) {
      var r = n(18),
        o =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        i = o && "object" == typeof t && t && !t.nodeType && t,
        a = i && i.exports === o && r.a.process,
        l = (function() {
          try {
            return (
              (i && i.require && i.require("util").types) ||
              (a && a.binding && a.binding("util"))
            );
          } catch (t) {}
        })();
      e.a = l;
    }.call(this, n(27)(t)));
  },
  function(t, e, n) {
    "use strict";
    (function(t) {
      var r = n(4),
        o = n(11),
        i =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        a = i && "object" == typeof t && t && !t.nodeType && t,
        l = a && a.exports === i ? r.a.Buffer : void 0,
        s = (l ? l.isBuffer : void 0) || o.a;
      e.a = s;
    }.call(this, n(27)(t)));
  },
  function(t, e, n) {
    "use strict";
    var r = n(33),
      o = Object.prototype.toString;
    function i(t) {
      return "[object Array]" === o.call(t);
    }
    function a(t) {
      return void 0 === t;
    }
    function l(t) {
      return null !== t && "object" == typeof t;
    }
    function s(t) {
      if ("[object Object]" !== o.call(t)) return !1;
      var e = Object.getPrototypeOf(t);
      return null === e || e === Object.prototype;
    }
    function c(t) {
      return "[object Function]" === o.call(t);
    }
    function u(t, e) {
      if (null != t)
        if (("object" != typeof t && (t = [t]), i(t)))
          for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
        else
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) &&
              e.call(null, t[o], o, t);
    }
    t.exports = {
      isArray: i,
      isArrayBuffer: function(t) {
        return "[object ArrayBuffer]" === o.call(t);
      },
      isBuffer: function(t) {
        return (
          null !== t &&
          !a(t) &&
          null !== t.constructor &&
          !a(t.constructor) &&
          "function" == typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
      },
      isFormData: function(t) {
        return "undefined" != typeof FormData && t instanceof FormData;
      },
      isArrayBufferView: function(t) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer && t.buffer instanceof ArrayBuffer;
      },
      isString: function(t) {
        return "string" == typeof t;
      },
      isNumber: function(t) {
        return "number" == typeof t;
      },
      isObject: l,
      isPlainObject: s,
      isUndefined: a,
      isDate: function(t) {
        return "[object Date]" === o.call(t);
      },
      isFile: function(t) {
        return "[object File]" === o.call(t);
      },
      isBlob: function(t) {
        return "[object Blob]" === o.call(t);
      },
      isFunction: c,
      isStream: function(t) {
        return l(t) && c(t.pipe);
      },
      isURLSearchParams: function(t) {
        return (
          "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function() {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: u,
      merge: function t() {
        var e = {};
        function n(n, r) {
          s(e[r]) && s(n)
            ? (e[r] = t(e[r], n))
            : s(n)
            ? (e[r] = t({}, n))
            : i(n)
            ? (e[r] = n.slice())
            : (e[r] = n);
        }
        for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
        return e;
      },
      extend: function(t, e, n) {
        return (
          u(e, function(e, o) {
            t[o] = n && "function" == typeof e ? r(e, n) : e;
          }),
          t
        );
      },
      trim: function(t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "");
      },
      stripBOM: function(t) {
        return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
      }
    };
  },
  ,
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isFirefox = e.isSafari = e.isExtEnv = void 0);
    const r = (function() {
      try {
        if ("function" == typeof browser.runtime.getURL) return !0;
      } catch {
        try {
          if ("function" == typeof chrome.runtime.getURL) return !0;
        } catch {
          return !1;
        }
      }
    })();
    e.isExtEnv = r;
    const o = /apple/i.test(navigator.vendor);
    e.isSafari = o;
    const i = navigator.userAgent.includes("Firefox");
    e.isFirefox = i;
  },
  function(t, e, n) {
    "use strict";
    e.a = function() {
      return !1;
    };
  },
  ,
  function(t, e, n) {
    "use strict";
    var r = n(0);
    n.d(e, "a", function() {
      return r.j;
    }),
      n.d(e, "b", function() {
        return r.p;
      }),
      n.d(e, "c", function() {
        return r.J;
      }),
      n.d(e, "d", function() {
        return r.ab;
      });
  },
  ,
  ,
  ,
  ,
  function(t, e, n) {
    "use strict";
    (function(t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.a = n;
    }.call(this, n(22)));
  },
  function(t, e, n) {
    "use strict";
    (function(t) {
      var r = n(4),
        o =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        i = o && "object" == typeof t && t && !t.nodeType && t,
        a = i && i.exports === o ? r.a.Buffer : void 0,
        l = a ? a.allocUnsafe : void 0;
      e.a = function(t, e) {
        if (e) return t.slice();
        var n = t.length,
          r = l ? l(n) : new t.constructor(n);
        return t.copy(r), r;
      };
    }.call(this, n(27)(t)));
  },
  ,
  ,
  function(t, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.StorageVal = void 0);
    var r = n(24),
      o = n(26),
      i = n(10),
      a = n(49);
    e.StorageVal = class extends o.Val {
      static async get(t, e) {
        return i.isExtEnv
          ? browser.storage[t].get(e)
          : Object.keys(e).reduce(
              (n, r) => ((n[r] = (0, a.localStorageGet)(t, r, e[r])), n),
              {}
            );
      }
      static async set(t, e) {
        return i.isExtEnv
          ? browser.storage[t].set(e)
          : Object.keys(e).forEach(n => {
              (0, a.localStorageSet)(t, n, e[n]);
            });
      }
      constructor(t, e, n, o) {
        super(n),
          (this.area = t),
          (this.key = e),
          (this.compare = o || r.isEqual),
          (this._lsVal = (0, a.getLocalStorageVal)(this.area, this.key, n)),
          this._attachStorage(),
          (this.ready = this.loadStorageValue());
      }
      async loadStorageValue() {
        if (i.isExtEnv) {
          const t = await browser.storage[this.area].get(this.key);
          (0, r.has)(t, this.key) && this._setValue(t[this.key]);
        } else this._setValue(this._lsVal.value);
      }
      async setValue(t) {
        if (i.isExtEnv) await browser.storage[this.area].set({ [this.key]: t });
        else
          try {
            this._lsVal.setValue(t);
          } catch (t) {}
      }
      async _setValue(t) {
        if (!this.compare(t, this._value)) {
          const e = this._value;
          (this._value = t),
            this._subscribers && this._subscribers.forEach(n => n(t, e));
        }
      }
      destroy() {
        super.destroy(),
          this._detachStorage &&
            (this._detachStorage(), (this._detachStorage = void 0));
      }
      _attachStorage() {
        if (i.isExtEnv) {
          const t = (t, e) => {
            e === this.area &&
              (0, r.has)(t, this.key) &&
              this._setValue(t[this.key].newValue);
          };
          browser.storage.onChanged.addListener(t),
            (this._detachStorage = () => {
              browser.storage.onChanged.addListener(t);
            });
        } else
          this._detachStorage = this._lsVal.reaction(t => {
            try {
              this._setValue(t);
            } catch (t) {}
          });
      }
    };
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r,
      o = n(4),
      i = o.a.Symbol,
      a = Object.prototype,
      l = a.hasOwnProperty,
      s = a.toString,
      c = i ? i.toStringTag : void 0,
      u = Object.prototype.toString,
      f = i ? i.toStringTag : void 0,
      d = function(t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : f && f in Object(t)
          ? (function(t) {
              var e = l.call(t, c),
                n = t[c];
              try {
                t[c] = void 0;
                var r = !0;
              } catch (t) {}
              var o = s.call(t);
              return r && (e ? (t[c] = n) : delete t[c]), o;
            })(t)
          : (function(t) {
              return u.call(t);
            })(t);
      },
      p = function(t) {
        return null != t && "object" == typeof t;
      },
      h = function(t) {
        return "symbol" == typeof t || (p(t) && "[object Symbol]" == d(t));
      },
      b = function(t) {
        return "number" == typeof t ? t : h(t) ? NaN : +t;
      },
      g = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r; )
          o[n] = e(t[n], n, t);
        return o;
      },
      m = Array.isArray,
      v = i ? i.prototype : void 0,
      y = v ? v.toString : void 0,
      x = function t(e) {
        if ("string" == typeof e) return e;
        if (m(e)) return g(e, t) + "";
        if (h(e)) return y ? y.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -1 / 0 ? "-0" : n;
      },
      w = function(t, e) {
        return function(n, r) {
          var o;
          if (void 0 === n && void 0 === r) return e;
          if ((void 0 !== n && (o = n), void 0 !== r)) {
            if (void 0 === o) return r;
            "string" == typeof n || "string" == typeof r
              ? ((n = x(n)), (r = x(r)))
              : ((n = b(n)), (r = b(r))),
              (o = t(n, r));
          }
          return o;
        };
      },
      k = w(function(t, e) {
        return t + e;
      }, 0),
      j = /\s/,
      O = function(t) {
        for (var e = t.length; e-- && j.test(t.charAt(e)); );
        return e;
      },
      _ = /^\s+/,
      S = function(t) {
        return t ? t.slice(0, O(t) + 1).replace(_, "") : t;
      },
      E = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      },
      C = /^[-+]0x[0-9a-f]+$/i,
      T = /^0b[01]+$/i,
      A = /^0o[0-7]+$/i,
      z = parseInt,
      $ = function(t) {
        if ("number" == typeof t) return t;
        if (h(t)) return NaN;
        if (E(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = E(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = S(t);
        var n = T.test(t);
        return n || A.test(t) ? z(t.slice(2), n ? 2 : 8) : C.test(t) ? NaN : +t;
      },
      P = function(t) {
        return t
          ? (t = $(t)) === 1 / 0 || t === -1 / 0
            ? 1.7976931348623157e308 * (t < 0 ? -1 : 1)
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      },
      L = function(t) {
        var e = P(t),
          n = e % 1;
        return e == e ? (n ? e - n : e) : 0;
      },
      R = function(t, e) {
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          (t = L(t)),
          function() {
            if (--t < 1) return e.apply(this, arguments);
          }
        );
      },
      N = function(t) {
        return t;
      },
      D = function(t) {
        if (!E(t)) return !1;
        var e = d(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      },
      I = o.a["__core-js_shared__"],
      F = (r = /[^.]+$/.exec((I && I.keys && I.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + r
        : "",
      M = Function.prototype.toString,
      B = function(t) {
        if (null != t) {
          try {
            return M.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      },
      q = /^\[object .+?Constructor\]$/,
      W = Function.prototype,
      U = Object.prototype,
      H = W.toString,
      V = U.hasOwnProperty,
      G = RegExp(
        "^" +
          H.call(V)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      Z = function(t) {
        return (
          !(
            !E(t) ||
            (function(t) {
              return !!F && F in t;
            })(t)
          ) && (D(t) ? G : q).test(B(t))
        );
      },
      X = function(t, e) {
        var n = (function(t, e) {
          return null == t ? void 0 : t[e];
        })(t, e);
        return Z(n) ? n : void 0;
      },
      K = X(o.a, "WeakMap"),
      J = K && new K(),
      Y = J
        ? function(t, e) {
            return J.set(t, e), t;
          }
        : N,
      Q = Object.create,
      tt = (function() {
        function t() {}
        return function(e) {
          if (!E(e)) return {};
          if (Q) return Q(e);
          t.prototype = e;
          var n = new t();
          return (t.prototype = void 0), n;
        };
      })(),
      et = function(t) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new t();
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3]);
            case 5:
              return new t(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var n = tt(t.prototype),
            r = t.apply(n, e);
          return E(r) ? r : n;
        };
      },
      nt = function(t, e, n) {
        var r = 1 & e,
          i = et(t);
        return function e() {
          return (this && this !== o.a && this instanceof e ? i : t).apply(
            r ? n : this,
            arguments
          );
        };
      },
      rt = function(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      },
      ot = Math.max,
      it = function(t, e, n, r) {
        for (
          var o = -1,
            i = t.length,
            a = n.length,
            l = -1,
            s = e.length,
            c = ot(i - a, 0),
            u = Array(s + c),
            f = !r;
          ++l < s;

        )
          u[l] = e[l];
        for (; ++o < a; ) (f || o < i) && (u[n[o]] = t[o]);
        for (; c--; ) u[l++] = t[o++];
        return u;
      },
      at = Math.max,
      lt = function(t, e, n, r) {
        for (
          var o = -1,
            i = t.length,
            a = -1,
            l = n.length,
            s = -1,
            c = e.length,
            u = at(i - l, 0),
            f = Array(u + c),
            d = !r;
          ++o < u;

        )
          f[o] = t[o];
        for (var p = o; ++s < c; ) f[p + s] = e[s];
        for (; ++a < l; ) (d || o < i) && (f[p + n[a]] = t[o++]);
        return f;
      },
      st = function() {},
      ct = 4294967295;
    function ut(t) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = ct),
        (this.__views__ = []);
    }
    (ut.prototype = tt(st.prototype)), (ut.prototype.constructor = ut);
    var ft = ut,
      dt = function() {},
      pt = J
        ? function(t) {
            return J.get(t);
          }
        : dt,
      ht = {},
      bt = Object.prototype.hasOwnProperty,
      gt = function(t) {
        for (
          var e = t.name + "", n = ht[e], r = bt.call(ht, e) ? n.length : 0;
          r--;

        ) {
          var o = n[r],
            i = o.func;
          if (null == i || i == t) return o.name;
        }
        return e;
      };
    function mt(t, e) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__chain__ = !!e),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    (mt.prototype = tt(st.prototype)), (mt.prototype.constructor = mt);
    var vt = mt,
      yt = function(t, e) {
        var n = -1,
          r = t.length;
        for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
        return e;
      },
      xt = function(t) {
        if (t instanceof ft) return t.clone();
        var e = new vt(t.__wrapped__, t.__chain__);
        return (
          (e.__actions__ = yt(t.__actions__)),
          (e.__index__ = t.__index__),
          (e.__values__ = t.__values__),
          e
        );
      },
      wt = Object.prototype.hasOwnProperty;
    function kt(t) {
      if (p(t) && !m(t) && !(t instanceof ft)) {
        if (t instanceof vt) return t;
        if (wt.call(t, "__wrapped__")) return xt(t);
      }
      return new vt(t);
    }
    (kt.prototype = st.prototype), (kt.prototype.constructor = kt);
    var jt = kt,
      Ot = function(t) {
        var e = gt(t),
          n = jt[e];
        if ("function" != typeof n || !(e in ft.prototype)) return !1;
        if (t === n) return !0;
        var r = pt(n);
        return !!r && t === r[0];
      },
      _t = Date.now,
      St = function(t) {
        var e = 0,
          n = 0;
        return function() {
          var r = _t(),
            o = 16 - (r - n);
          if (((n = r), o > 0)) {
            if (++e >= 800) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      },
      Et = St(Y),
      Ct = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Tt = /,? & /,
      At = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      zt = function(t) {
        return function() {
          return t;
        };
      },
      $t = (function() {
        try {
          var t = X(Object, "defineProperty");
          return t({}, "", {}), t;
        } catch (t) {}
      })(),
      Pt = St(
        $t
          ? function(t, e) {
              return $t(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: zt(e),
                writable: !0
              });
            }
          : N
      ),
      Lt = function(t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length;
          ++n < r && !1 !== e(t[n], n, t);

        );
        return t;
      },
      Rt = function(t, e, n, r) {
        for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      },
      Nt = function(t) {
        return t != t;
      },
      Dt = function(t, e, n) {
        return e == e
          ? (function(t, e, n) {
              for (var r = n - 1, o = t.length; ++r < o; )
                if (t[r] === e) return r;
              return -1;
            })(t, e, n)
          : Rt(t, Nt, n);
      },
      It = function(t, e) {
        return !(null == t || !t.length) && Dt(t, e, 0) > -1;
      },
      Ft = [
        ["ary", 128],
        ["bind", 1],
        ["bindKey", 2],
        ["curry", 8],
        ["curryRight", 16],
        ["flip", 512],
        ["partial", 32],
        ["partialRight", 64],
        ["rearg", 256]
      ],
      Mt = function(t, e, n) {
        var r = e + "";
        return Pt(
          t,
          (function(t, e) {
            var n = e.length;
            if (!n) return t;
            var r = n - 1;
            return (
              (e[r] = (n > 1 ? "& " : "") + e[r]),
              (e = e.join(n > 2 ? ", " : " ")),
              t.replace(At, "{\n/* [wrapped with " + e + "] */\n")
            );
          })(
            r,
            (function(t, e) {
              return (
                Lt(Ft, function(n) {
                  var r = "_." + n[0];
                  e & n[1] && !It(t, r) && t.push(r);
                }),
                t.sort()
              );
            })(
              (function(t) {
                var e = t.match(Ct);
                return e ? e[1].split(Tt) : [];
              })(r),
              n
            )
          )
        );
      },
      Bt = function(t, e, n, r, o, i, a, l, s, c) {
        var u = 8 & e;
        (e |= u ? 32 : 64), 4 & (e &= ~(u ? 64 : 32)) || (e &= -4);
        var f = [
            t,
            e,
            o,
            u ? i : void 0,
            u ? a : void 0,
            u ? void 0 : i,
            u ? void 0 : a,
            l,
            s,
            c
          ],
          d = n.apply(void 0, f);
        return Ot(t) && Et(d, f), (d.placeholder = r), Mt(d, t, e);
      },
      qt = function(t) {
        return t.placeholder;
      },
      Wt = /^(?:0|[1-9]\d*)$/,
      Ut = function(t, e) {
        var n = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == n || ("symbol" != n && Wt.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      },
      Ht = Math.min,
      Vt = "__lodash_placeholder__",
      Gt = function(t, e) {
        for (var n = -1, r = t.length, o = 0, i = []; ++n < r; ) {
          var a = t[n];
          (a !== e && a !== Vt) || ((t[n] = Vt), (i[o++] = n));
        }
        return i;
      },
      Zt = function t(e, n, r, i, a, l, s, c, u, f) {
        var d = 128 & n,
          p = 1 & n,
          h = 2 & n,
          b = 24 & n,
          g = 512 & n,
          m = h ? void 0 : et(e);
        return function v() {
          for (var y = arguments.length, x = Array(y), w = y; w--; )
            x[w] = arguments[w];
          if (b)
            var k = qt(v),
              j = (function(t, e) {
                for (var n = t.length, r = 0; n--; ) t[n] === e && ++r;
                return r;
              })(x, k);
          if (
            (i && (x = it(x, i, a, b)),
            l && (x = lt(x, l, s, b)),
            (y -= j),
            b && y < f)
          ) {
            var O = Gt(x, k);
            return Bt(e, n, t, v.placeholder, r, x, O, c, u, f - y);
          }
          var _ = p ? r : this,
            S = h ? _[e] : e;
          return (
            (y = x.length),
            c
              ? (x = (function(t, e) {
                  for (
                    var n = t.length, r = Ht(e.length, n), o = yt(t);
                    r--;

                  ) {
                    var i = e[r];
                    t[r] = Ut(i, n) ? o[i] : void 0;
                  }
                  return t;
                })(x, c))
              : g && y > 1 && x.reverse(),
            d && u < y && (x.length = u),
            this && this !== o.a && this instanceof v && (S = m || et(S)),
            S.apply(_, x)
          );
        };
      },
      Xt = function(t, e, n) {
        var r = et(t);
        return function i() {
          for (var a = arguments.length, l = Array(a), s = a, c = qt(i); s--; )
            l[s] = arguments[s];
          var u = a < 3 && l[0] !== c && l[a - 1] !== c ? [] : Gt(l, c);
          if ((a -= u.length) < n)
            return Bt(
              t,
              e,
              Zt,
              i.placeholder,
              void 0,
              l,
              u,
              void 0,
              void 0,
              n - a
            );
          var f = this && this !== o.a && this instanceof i ? r : t;
          return rt(f, this, l);
        };
      },
      Kt = function(t, e, n, r) {
        var i = 1 & e,
          a = et(t);
        return function e() {
          for (
            var l = -1,
              s = arguments.length,
              c = -1,
              u = r.length,
              f = Array(u + s),
              d = this && this !== o.a && this instanceof e ? a : t;
            ++c < u;

          )
            f[c] = r[c];
          for (; s--; ) f[c++] = arguments[++l];
          return rt(d, i ? n : this, f);
        };
      },
      Jt = "__lodash_placeholder__",
      Yt = Math.min,
      Qt = Math.max,
      te = function(t, e, n, r, o, i, a, l) {
        var s = 2 & e;
        if (!s && "function" != typeof t)
          throw new TypeError("Expected a function");
        var c = r ? r.length : 0;
        if (
          (c || ((e &= -97), (r = o = void 0)),
          (a = void 0 === a ? a : Qt(L(a), 0)),
          (l = void 0 === l ? l : L(l)),
          (c -= o ? o.length : 0),
          64 & e)
        ) {
          var u = r,
            f = o;
          r = o = void 0;
        }
        var d = s ? void 0 : pt(t),
          p = [t, e, n, r, o, u, f, i, a, l];
        if (
          (d &&
            (function(t, e) {
              var n = t[1],
                r = e[1],
                o = n | r,
                i = o < 131,
                a =
                  (128 == r && 8 == n) ||
                  (128 == r && 256 == n && t[7].length <= e[8]) ||
                  (384 == r && e[7].length <= e[8] && 8 == n);
              if (!i && !a) return t;
              1 & r && ((t[2] = e[2]), (o |= 1 & n ? 0 : 4));
              var l = e[3];
              if (l) {
                var s = t[3];
                (t[3] = s ? it(s, l, e[4]) : l),
                  (t[4] = s ? Gt(t[3], Jt) : e[4]);
              }
              (l = e[5]) &&
                ((s = t[5]),
                (t[5] = s ? lt(s, l, e[6]) : l),
                (t[6] = s ? Gt(t[5], Jt) : e[6])),
                (l = e[7]) && (t[7] = l),
                128 & r && (t[8] = null == t[8] ? e[8] : Yt(t[8], e[8])),
                null == t[9] && (t[9] = e[9]),
                (t[0] = e[0]),
                (t[1] = o);
            })(p, d),
          (t = p[0]),
          (e = p[1]),
          (n = p[2]),
          (r = p[3]),
          (o = p[4]),
          !(l = p[9] =
            void 0 === p[9] ? (s ? 0 : t.length) : Qt(p[9] - c, 0)) &&
            24 & e &&
            (e &= -25),
          e && 1 != e)
        )
          h =
            8 == e || 16 == e
              ? Xt(t, e, l)
              : (32 != e && 33 != e) || o.length
              ? Zt.apply(void 0, p)
              : Kt(t, e, n, r);
        else var h = nt(t, e, n);
        return Mt((d ? Y : Et)(h, p), t, e);
      },
      ee = function(t, e, n) {
        return (
          (e = n ? void 0 : e),
          (e = t && null == e ? t.length : e),
          te(t, 128, void 0, void 0, void 0, void 0, e)
        );
      },
      ne = function(t, e, n) {
        "__proto__" == e && $t
          ? $t(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0
            })
          : (t[e] = n);
      },
      re = function(t, e) {
        return t === e || (t != t && e != e);
      },
      oe = Object.prototype.hasOwnProperty,
      ie = function(t, e, n) {
        var r = t[e];
        (oe.call(t, e) && re(r, n) && (void 0 !== n || e in t)) || ne(t, e, n);
      },
      ae = function(t, e, n, r) {
        var o = !n;
        n || (n = {});
        for (var i = -1, a = e.length; ++i < a; ) {
          var l = e[i],
            s = r ? r(n[l], t[l], l, n, t) : void 0;
          void 0 === s && (s = t[l]), o ? ne(n, l, s) : ie(n, l, s);
        }
        return n;
      },
      le = Math.max,
      se = function(t, e, n) {
        return (
          (e = le(void 0 === e ? t.length - 1 : e, 0)),
          function() {
            for (
              var r = arguments, o = -1, i = le(r.length - e, 0), a = Array(i);
              ++o < i;

            )
              a[o] = r[e + o];
            o = -1;
            for (var l = Array(e + 1); ++o < e; ) l[o] = r[o];
            return (l[e] = n(a)), rt(t, this, l);
          }
        );
      },
      ce = function(t, e) {
        return Pt(se(t, e, N), t + "");
      },
      ue = function(t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      },
      fe = function(t) {
        return null != t && ue(t.length) && !D(t);
      },
      de = function(t, e, n) {
        if (!E(n)) return !1;
        var r = typeof e;
        return (
          !!("number" == r
            ? fe(n) && Ut(e, n.length)
            : "string" == r && e in n) && re(n[e], t)
        );
      },
      pe = function(t) {
        return ce(function(e, n) {
          var r = -1,
            o = n.length,
            i = o > 1 ? n[o - 1] : void 0,
            a = o > 2 ? n[2] : void 0;
          for (
            i = t.length > 3 && "function" == typeof i ? (o--, i) : void 0,
              a && de(n[0], n[1], a) && ((i = o < 3 ? void 0 : i), (o = 1)),
              e = Object(e);
            ++r < o;

          ) {
            var l = n[r];
            l && t(e, l, r, i);
          }
          return e;
        });
      },
      he = Object.prototype,
      be = function(t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || he);
      },
      ge = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      },
      me = function(t) {
        return p(t) && "[object Arguments]" == d(t);
      },
      ve = Object.prototype,
      ye = ve.hasOwnProperty,
      xe = ve.propertyIsEnumerable,
      we = me(
        (function() {
          return arguments;
        })()
      )
        ? me
        : function(t) {
            return p(t) && ye.call(t, "callee") && !xe.call(t, "callee");
          },
      ke = n(7),
      je = {};
    (je["[object Float32Array]"] = je["[object Float64Array]"] = je[
      "[object Int8Array]"
    ] = je["[object Int16Array]"] = je["[object Int32Array]"] = je[
      "[object Uint8Array]"
    ] = je["[object Uint8ClampedArray]"] = je["[object Uint16Array]"] = je[
      "[object Uint32Array]"
    ] = !0),
      (je["[object Arguments]"] = je["[object Array]"] = je[
        "[object ArrayBuffer]"
      ] = je["[object Boolean]"] = je["[object DataView]"] = je[
        "[object Date]"
      ] = je["[object Error]"] = je["[object Function]"] = je[
        "[object Map]"
      ] = je["[object Number]"] = je["[object Object]"] = je[
        "[object RegExp]"
      ] = je["[object Set]"] = je["[object String]"] = je[
        "[object WeakMap]"
      ] = !1);
    var Oe = function(t) {
        return function(e) {
          return t(e);
        };
      },
      _e = n(6),
      Se = _e.a && _e.a.isTypedArray,
      Ee = Se
        ? Oe(Se)
        : function(t) {
            return p(t) && ue(t.length) && !!je[d(t)];
          },
      Ce = Object.prototype.hasOwnProperty,
      Te = function(t, e) {
        var n = m(t),
          r = !n && we(t),
          o = !n && !r && Object(ke.a)(t),
          i = !n && !r && !o && Ee(t),
          a = n || r || o || i,
          l = a ? ge(t.length, String) : [],
          s = l.length;
        for (var c in t)
          (!e && !Ce.call(t, c)) ||
            (a &&
              ("length" == c ||
                (o && ("offset" == c || "parent" == c)) ||
                (i &&
                  ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                Ut(c, s))) ||
            l.push(c);
        return l;
      },
      Ae = function(t, e) {
        return function(n) {
          return t(e(n));
        };
      },
      ze = Ae(Object.keys, Object),
      $e = Object.prototype.hasOwnProperty,
      Pe = function(t) {
        if (!be(t)) return ze(t);
        var e = [];
        for (var n in Object(t))
          $e.call(t, n) && "constructor" != n && e.push(n);
        return e;
      },
      Le = function(t) {
        return fe(t) ? Te(t) : Pe(t);
      },
      Re = Object.prototype.hasOwnProperty,
      Ne = pe(function(t, e) {
        if (be(e) || fe(e)) ae(e, Le(e), t);
        else for (var n in e) Re.call(e, n) && ie(t, n, e[n]);
      }),
      De = Object.prototype.hasOwnProperty,
      Ie = function(t) {
        if (!E(t))
          return (function(t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
          })(t);
        var e = be(t),
          n = [];
        for (var r in t)
          ("constructor" != r || (!e && De.call(t, r))) && n.push(r);
        return n;
      },
      Fe = function(t) {
        return fe(t) ? Te(t, !0) : Ie(t);
      },
      Me = pe(function(t, e) {
        ae(e, Fe(e), t);
      }),
      Be = pe(function(t, e, n, r) {
        ae(e, Fe(e), t, r);
      }),
      qe = pe(function(t, e, n, r) {
        ae(e, Le(e), t, r);
      }),
      We = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Ue = /^\w*$/,
      He = function(t, e) {
        if (m(t)) return !1;
        var n = typeof t;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != t &&
            !h(t)
          ) ||
          Ue.test(t) ||
          !We.test(t) ||
          (null != e && t in Object(e))
        );
      },
      Ve = X(Object, "create"),
      Ge = Object.prototype.hasOwnProperty,
      Ze = Object.prototype.hasOwnProperty;
    function Xe(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (Xe.prototype.clear = function() {
      (this.__data__ = Ve ? Ve(null) : {}), (this.size = 0);
    }),
      (Xe.prototype.delete = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      }),
      (Xe.prototype.get = function(t) {
        var e = this.__data__;
        if (Ve) {
          var n = e[t];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return Ge.call(e, t) ? e[t] : void 0;
      }),
      (Xe.prototype.has = function(t) {
        var e = this.__data__;
        return Ve ? void 0 !== e[t] : Ze.call(e, t);
      }),
      (Xe.prototype.set = function(t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = Ve && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      });
    var Ke = Xe,
      Je = function(t, e) {
        for (var n = t.length; n--; ) if (re(t[n][0], e)) return n;
        return -1;
      },
      Ye = Array.prototype.splice;
    function Qe(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (Qe.prototype.clear = function() {
      (this.__data__ = []), (this.size = 0);
    }),
      (Qe.prototype.delete = function(t) {
        var e = this.__data__,
          n = Je(e, t);
        return !(
          n < 0 ||
          (n == e.length - 1 ? e.pop() : Ye.call(e, n, 1), --this.size, 0)
        );
      }),
      (Qe.prototype.get = function(t) {
        var e = this.__data__,
          n = Je(e, t);
        return n < 0 ? void 0 : e[n][1];
      }),
      (Qe.prototype.has = function(t) {
        return Je(this.__data__, t) > -1;
      }),
      (Qe.prototype.set = function(t, e) {
        var n = this.__data__,
          r = Je(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
      });
    var tn = Qe,
      en = X(o.a, "Map"),
      nn = function(t, e) {
        var n = t.__data__;
        return (function(t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        })(e)
          ? n["string" == typeof e ? "string" : "hash"]
          : n.map;
      };
    function rn(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (rn.prototype.clear = function() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Ke(),
          map: new (en || tn)(),
          string: new Ke()
        });
    }),
      (rn.prototype.delete = function(t) {
        var e = nn(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      }),
      (rn.prototype.get = function(t) {
        return nn(this, t).get(t);
      }),
      (rn.prototype.has = function(t) {
        return nn(this, t).has(t);
      }),
      (rn.prototype.set = function(t, e) {
        var n = nn(this, t),
          r = n.size;
        return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
      });
    var on = rn,
      an = "Expected a function";
    function ln(t, e) {
      if ("function" != typeof t || (null != e && "function" != typeof e))
        throw new TypeError(an);
      var n = function() {
        var r = arguments,
          o = e ? e.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(o)) return i.get(o);
        var a = t.apply(this, r);
        return (n.cache = i.set(o, a) || i), a;
      };
      return (n.cache = new (ln.Cache || on)()), n;
    }
    ln.Cache = on;
    var sn = ln,
      cn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      un = /\\(\\)?/g,
      fn = (function(t) {
        var e = sn(
            function(t) {
              var e = [];
              return (
                46 === t.charCodeAt(0) && e.push(""),
                t.replace(cn, function(t, n, r, o) {
                  e.push(r ? o.replace(un, "$1") : n || t);
                }),
                e
              );
            },
            function(t) {
              return 500 === n.size && n.clear(), t;
            }
          ),
          n = e.cache;
        return e;
      })(),
      dn = function(t) {
        return null == t ? "" : x(t);
      },
      pn = function(t, e) {
        return m(t) ? t : He(t, e) ? [t] : fn(dn(t));
      },
      hn = function(t) {
        if ("string" == typeof t || h(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
      },
      bn = function(t, e) {
        for (var n = 0, r = (e = pn(e, t)).length; null != t && n < r; )
          t = t[hn(e[n++])];
        return n && n == r ? t : void 0;
      },
      gn = function(t, e, n) {
        var r = null == t ? void 0 : bn(t, e);
        return void 0 === r ? n : r;
      },
      mn = function(t, e) {
        for (var n = -1, r = e.length, o = Array(r), i = null == t; ++n < r; )
          o[n] = i ? void 0 : gn(t, e[n]);
        return o;
      },
      vn = function(t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
        return t;
      },
      yn = i ? i.isConcatSpreadable : void 0,
      xn = function(t) {
        return m(t) || we(t) || !!(yn && t && t[yn]);
      },
      wn = function t(e, n, r, o, i) {
        var a = -1,
          l = e.length;
        for (r || (r = xn), i || (i = []); ++a < l; ) {
          var s = e[a];
          n > 0 && r(s)
            ? n > 1
              ? t(s, n - 1, r, o, i)
              : vn(i, s)
            : o || (i[i.length] = s);
        }
        return i;
      },
      kn = function(t) {
        return null != t && t.length ? wn(t, 1) : [];
      },
      jn = function(t) {
        return Pt(se(t, void 0, kn), t + "");
      },
      On = jn(mn),
      _n = Ae(Object.getPrototypeOf, Object),
      Sn = Function.prototype,
      En = Object.prototype,
      Cn = Sn.toString,
      Tn = En.hasOwnProperty,
      An = Cn.call(Object),
      zn = function(t) {
        if (!p(t) || "[object Object]" != d(t)) return !1;
        var e = _n(t);
        if (null === e) return !0;
        var n = Tn.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && Cn.call(n) == An;
      },
      $n = function(t) {
        if (!p(t)) return !1;
        var e = d(t);
        return (
          "[object Error]" == e ||
          "[object DOMException]" == e ||
          ("string" == typeof t.message && "string" == typeof t.name && !zn(t))
        );
      },
      Pn = ce(function(t, e) {
        try {
          return rt(t, void 0, e);
        } catch (t) {
          return $n(t) ? t : new Error(t);
        }
      }),
      Ln = function(t, e) {
        var n;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          (t = L(t)),
          function() {
            return (
              --t > 0 && (n = e.apply(this, arguments)),
              t <= 1 && (e = void 0),
              n
            );
          }
        );
      },
      Rn = ce(function(t, e, n) {
        var r = 1;
        if (n.length) {
          var o = Gt(n, qt(Rn));
          r |= 32;
        }
        return te(t, r, e, n, o);
      });
    Rn.placeholder = {};
    var Nn = Rn,
      Dn = jn(function(t, e) {
        return (
          Lt(e, function(e) {
            (e = hn(e)), ne(t, e, Nn(t[e], t));
          }),
          t
        );
      }),
      In = ce(function(t, e, n) {
        var r = 3;
        if (n.length) {
          var o = Gt(n, qt(In));
          r |= 32;
        }
        return te(e, r, t, n, o);
      });
    In.placeholder = {};
    var Fn = In,
      Mn = function(t, e, n) {
        var r = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = t[r + e];
        return i;
      },
      Bn = function(t, e, n) {
        var r = t.length;
        return (n = void 0 === n ? r : n), !e && n >= r ? t : Mn(t, e, n);
      },
      qn = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      ),
      Wn = function(t) {
        return qn.test(t);
      },
      Un = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      Hn = "\\ud83c[\\udffb-\\udfff]",
      Vn = "[^\\ud800-\\udfff]",
      Gn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Zn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Xn = "(?:" + Un + "|" + Hn + ")?",
      Kn =
        "[\\ufe0e\\ufe0f]?" +
        Xn +
        "(?:\\u200d(?:" +
        [Vn, Gn, Zn].join("|") +
        ")[\\ufe0e\\ufe0f]?" +
        Xn +
        ")*",
      Jn =
        "(?:" +
        [Vn + Un + "?", Un, Gn, Zn, "[\\ud800-\\udfff]"].join("|") +
        ")",
      Yn = RegExp(Hn + "(?=" + Hn + ")|" + Jn + Kn, "g"),
      Qn = function(t) {
        return Wn(t)
          ? (function(t) {
              return t.match(Yn) || [];
            })(t)
          : (function(t) {
              return t.split("");
            })(t);
      },
      tr = function(t) {
        return function(e) {
          e = dn(e);
          var n = Wn(e) ? Qn(e) : void 0,
            r = n ? n[0] : e.charAt(0),
            o = n ? Bn(n, 1).join("") : e.slice(1);
          return r[t]() + o;
        };
      },
      er = tr("toUpperCase"),
      nr = function(t) {
        return er(dn(t).toLowerCase());
      },
      rr = function(t, e, n, r) {
        var o = -1,
          i = null == t ? 0 : t.length;
        for (r && i && (n = t[++o]); ++o < i; ) n = e(n, t[o], o, t);
        return n;
      },
      or = function(t) {
        return function(e) {
          return null == t ? void 0 : t[e];
        };
      },
      ir = or({
        ??: "A",
        ??: "A",
        ??: "A",
        ??: "A",
        ??: "A",
        ??: "A",
        ??: "a",
        ??: "a",
        ??: "a",
        ??: "a",
        ??: "a",
        ??: "a",
        ??: "C",
        ??: "c",
        ??: "D",
        ??: "d",
        ??: "E",
        ??: "E",
        ??: "E",
        ??: "E",
        ??: "e",
        ??: "e",
        ??: "e",
        ??: "e",
        ??: "I",
        ??: "I",
        ??: "I",
        ??: "I",
        ??: "i",
        ??: "i",
        ??: "i",
        ??: "i",
        ??: "N",
        ??: "n",
        ??: "O",
        ??: "O",
        ??: "O",
        ??: "O",
        ??: "O",
        ??: "O",
        ??: "o",
        ??: "o",
        ??: "o",
        ??: "o",
        ??: "o",
        ??: "o",
        ??: "U",
        ??: "U",
        ??: "U",
        ??: "U",
        ??: "u",
        ??: "u",
        ??: "u",
        ??: "u",
        ??: "Y",
        ??: "y",
        ??: "y",
        ??: "Ae",
        ??: "ae",
        ??: "Th",
        ??: "th",
        ??: "ss",
        ??: "A",
        ??: "A",
        ??: "A",
        ??: "a",
        ??: "a",
        ??: "a",
        ??: "C",
        ??: "C",
        ??: "C",
        ??: "C",
        ??: "c",
        ??: "c",
        ??: "c",
        ??: "c",
        ??: "D",
        ??: "D",
        ??: "d",
        ??: "d",
        ??: "E",
        ??: "E",
        ??: "E",
        ??: "E",
        ??: "E",
        ??: "e",
        ??: "e",
        ??: "e",
        ??: "e",
        ??: "e",
        ??: "G",
        ??: "G",
        ??: "G",
        ??: "G",
        ??: "g",
        ??: "g",
        ??: "g",
        ??: "g",
        ??: "H",
        ??: "H",
        ??: "h",
        ??: "h",
        ??: "I",
        ??: "I",
        ??: "I",
        ??: "I",
        ??: "I",
        ??: "i",
        ??: "i",
        ??: "i",
        ??: "i",
        ??: "i",
        ??: "J",
        ??: "j",
        ??: "K",
        ??: "k",
        ??: "k",
        ??: "L",
        ??: "L",
        ??: "L",
        ??: "L",
        ??: "L",
        ??: "l",
        ??: "l",
        ??: "l",
        ??: "l",
        ??: "l",
        ??: "N",
        ??: "N",
        ??: "N",
        ??: "N",
        ??: "n",
        ??: "n",
        ??: "n",
        ??: "n",
        ??: "O",
        ??: "O",
        ??: "O",
        ??: "o",
        ??: "o",
        ??: "o",
        ??: "R",
        ??: "R",
        ??: "R",
        ??: "r",
        ??: "r",
        ??: "r",
        ??: "S",
        ??: "S",
        ??: "S",
        ??: "S",
        ??: "s",
        ??: "s",
        ??: "s",
        ??: "s",
        ??: "T",
        ??: "T",
        ??: "T",
        ??: "t",
        ??: "t",
        ??: "t",
        ??: "U",
        ??: "U",
        ??: "U",
        ??: "U",
        ??: "U",
        ??: "U",
        ??: "u",
        ??: "u",
        ??: "u",
        ??: "u",
        ??: "u",
        ??: "u",
        ??: "W",
        ??: "w",
        ??: "Y",
        ??: "y",
        ??: "Y",
        ??: "Z",
        ??: "Z",
        ??: "Z",
        ??: "z",
        ??: "z",
        ??: "z",
        ??: "IJ",
        ??: "ij",
        ??: "Oe",
        ??: "oe",
        ??: "'n",
        ??: "s"
      }),
      ar = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      lr = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
      sr = function(t) {
        return (t = dn(t)) && t.replace(ar, ir).replace(lr, "");
      },
      cr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      ur = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      fr =
        "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      dr = "[" + fr + "]",
      pr = "\\d+",
      hr = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
      br =
        "[^\\ud800-\\udfff" +
        fr +
        pr +
        "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
      gr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      mr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      vr = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
      yr = "(?:" + hr + "|" + br + ")",
      xr = "(?:" + vr + "|" + br + ")",
      wr =
        "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
      kr =
        "[\\ufe0e\\ufe0f]?" +
        wr +
        "(?:\\u200d(?:" +
        ["[^\\ud800-\\udfff]", gr, mr].join("|") +
        ")[\\ufe0e\\ufe0f]?" +
        wr +
        ")*",
      jr = "(?:" + ["[\\u2700-\\u27bf]", gr, mr].join("|") + ")" + kr,
      Or = RegExp(
        [
          vr +
            "?" +
            hr +
            "+(?:['???](?:d|ll|m|re|s|t|ve))?(?=" +
            [dr, vr, "$"].join("|") +
            ")",
          xr +
            "+(?:['???](?:D|LL|M|RE|S|T|VE))?(?=" +
            [dr, vr + yr, "$"].join("|") +
            ")",
          vr + "?" + yr + "+(?:['???](?:d|ll|m|re|s|t|ve))?",
          vr + "+(?:['???](?:D|LL|M|RE|S|T|VE))?",
          "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
          "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
          pr,
          jr
        ].join("|"),
        "g"
      ),
      _r = function(t, e, n) {
        return (
          (t = dn(t)),
          void 0 === (e = n ? void 0 : e)
            ? (function(t) {
                return ur.test(t);
              })(t)
              ? (function(t) {
                  return t.match(Or) || [];
                })(t)
              : (function(t) {
                  return t.match(cr) || [];
                })(t)
            : t.match(e) || []
        );
      },
      Sr = RegExp("['???]", "g"),
      Er = function(t) {
        return function(e) {
          return rr(_r(sr(e).replace(Sr, "")), t, "");
        };
      },
      Cr = Er(function(t, e, n) {
        return (e = e.toLowerCase()), t + (n ? nr(e) : e);
      }),
      Tr = function() {
        if (!arguments.length) return [];
        var t = arguments[0];
        return m(t) ? t : [t];
      },
      Ar = o.a.isFinite,
      zr = Math.min,
      $r = function(t) {
        var e = Math[t];
        return function(t, n) {
          if (((t = $(t)), (n = null == n ? 0 : zr(L(n), 292)) && Ar(t))) {
            var r = (dn(t) + "e").split("e"),
              o = e(r[0] + "e" + (+r[1] + n));
            return +((r = (dn(o) + "e").split("e"))[0] + "e" + (+r[1] - n));
          }
          return e(t);
        };
      },
      Pr = $r("ceil"),
      Lr = function(t) {
        var e = jt(t);
        return (e.__chain__ = !0), e;
      },
      Rr = Math.ceil,
      Nr = Math.max,
      Dr = function(t, e, n) {
        e = (n ? de(t, e, n) : void 0 === e) ? 1 : Nr(L(e), 0);
        var r = null == t ? 0 : t.length;
        if (!r || e < 1) return [];
        for (var o = 0, i = 0, a = Array(Rr(r / e)); o < r; )
          a[i++] = Mn(t, o, (o += e));
        return a;
      },
      Ir = function(t, e, n) {
        return (
          t == t &&
            (void 0 !== n && (t = t <= n ? t : n),
            void 0 !== e && (t = t >= e ? t : e)),
          t
        );
      },
      Fr = function(t, e, n) {
        return (
          void 0 === n && ((n = e), (e = void 0)),
          void 0 !== n && (n = (n = $(n)) == n ? n : 0),
          void 0 !== e && (e = (e = $(e)) == e ? e : 0),
          Ir($(t), e, n)
        );
      };
    function Mr(t) {
      var e = (this.__data__ = new tn(t));
      this.size = e.size;
    }
    (Mr.prototype.clear = function() {
      (this.__data__ = new tn()), (this.size = 0);
    }),
      (Mr.prototype.delete = function(t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      }),
      (Mr.prototype.get = function(t) {
        return this.__data__.get(t);
      }),
      (Mr.prototype.has = function(t) {
        return this.__data__.has(t);
      }),
      (Mr.prototype.set = function(t, e) {
        var n = this.__data__;
        if (n instanceof tn) {
          var r = n.__data__;
          if (!en || r.length < 199)
            return r.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new on(r);
        }
        return n.set(t, e), (this.size = n.size), this;
      });
    var Br = Mr,
      qr = function(t, e) {
        return t && ae(e, Le(e), t);
      },
      Wr = n(19),
      Ur = function(t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
          ++n < r;

        ) {
          var a = t[n];
          e(a, n, t) && (i[o++] = a);
        }
        return i;
      },
      Hr = function() {
        return [];
      },
      Vr = Object.prototype.propertyIsEnumerable,
      Gr = Object.getOwnPropertySymbols,
      Zr = Gr
        ? function(t) {
            return null == t
              ? []
              : ((t = Object(t)),
                Ur(Gr(t), function(e) {
                  return Vr.call(t, e);
                }));
          }
        : Hr,
      Xr = Object.getOwnPropertySymbols
        ? function(t) {
            for (var e = []; t; ) vn(e, Zr(t)), (t = _n(t));
            return e;
          }
        : Hr,
      Kr = function(t, e, n) {
        var r = e(t);
        return m(t) ? r : vn(r, n(t));
      },
      Jr = function(t) {
        return Kr(t, Le, Zr);
      },
      Yr = function(t) {
        return Kr(t, Fe, Xr);
      },
      Qr = X(o.a, "DataView"),
      to = X(o.a, "Promise"),
      eo = X(o.a, "Set"),
      no = B(Qr),
      ro = B(en),
      oo = B(to),
      io = B(eo),
      ao = B(K),
      lo = d;
    ((Qr && "[object DataView]" != lo(new Qr(new ArrayBuffer(1)))) ||
      (en && "[object Map]" != lo(new en())) ||
      (to && "[object Promise]" != lo(to.resolve())) ||
      (eo && "[object Set]" != lo(new eo())) ||
      (K && "[object WeakMap]" != lo(new K()))) &&
      (lo = function(t) {
        var e = d(t),
          n = "[object Object]" == e ? t.constructor : void 0,
          r = n ? B(n) : "";
        if (r)
          switch (r) {
            case no:
              return "[object DataView]";
            case ro:
              return "[object Map]";
            case oo:
              return "[object Promise]";
            case io:
              return "[object Set]";
            case ao:
              return "[object WeakMap]";
          }
        return e;
      });
    var so = lo,
      co = Object.prototype.hasOwnProperty,
      uo = o.a.Uint8Array,
      fo = function(t) {
        var e = new t.constructor(t.byteLength);
        return new uo(e).set(new uo(t)), e;
      },
      po = /\w*$/,
      ho = i ? i.prototype : void 0,
      bo = ho ? ho.valueOf : void 0,
      go = function(t, e) {
        var n = e ? fo(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length);
      },
      mo = function(t, e, n) {
        var r = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return fo(t);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+t);
          case "[object DataView]":
            return (function(t, e) {
              var n = e ? fo(t.buffer) : t.buffer;
              return new t.constructor(n, t.byteOffset, t.byteLength);
            })(t, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return go(t, n);
          case "[object Map]":
            return new r();
          case "[object Number]":
          case "[object String]":
            return new r(t);
          case "[object RegExp]":
            return (function(t) {
              var e = new t.constructor(t.source, po.exec(t));
              return (e.lastIndex = t.lastIndex), e;
            })(t);
          case "[object Set]":
            return new r();
          case "[object Symbol]":
            return (function(t) {
              return bo ? Object(bo.call(t)) : {};
            })(t);
        }
      },
      vo = function(t) {
        return "function" != typeof t.constructor || be(t) ? {} : tt(_n(t));
      },
      yo = _e.a && _e.a.isMap,
      xo = yo
        ? Oe(yo)
        : function(t) {
            return p(t) && "[object Map]" == so(t);
          },
      wo = _e.a && _e.a.isSet,
      ko = wo
        ? Oe(wo)
        : function(t) {
            return p(t) && "[object Set]" == so(t);
          },
      jo = "[object Arguments]",
      Oo = "[object Function]",
      _o = "[object Object]",
      So = {};
    (So[jo] = So["[object Array]"] = So["[object ArrayBuffer]"] = So[
      "[object DataView]"
    ] = So["[object Boolean]"] = So["[object Date]"] = So[
      "[object Float32Array]"
    ] = So["[object Float64Array]"] = So["[object Int8Array]"] = So[
      "[object Int16Array]"
    ] = So["[object Int32Array]"] = So["[object Map]"] = So[
      "[object Number]"
    ] = So[_o] = So["[object RegExp]"] = So["[object Set]"] = So[
      "[object String]"
    ] = So["[object Symbol]"] = So["[object Uint8Array]"] = So[
      "[object Uint8ClampedArray]"
    ] = So["[object Uint16Array]"] = So["[object Uint32Array]"] = !0),
      (So["[object Error]"] = So[Oo] = So["[object WeakMap]"] = !1);
    var Eo = function t(e, n, r, o, i, a) {
        var l,
          s = 1 & n,
          c = 2 & n,
          u = 4 & n;
        if ((r && (l = i ? r(e, o, i, a) : r(e)), void 0 !== l)) return l;
        if (!E(e)) return e;
        var f = m(e);
        if (f) {
          if (
            ((l = (function(t) {
              var e = t.length,
                n = new t.constructor(e);
              return (
                e &&
                  "string" == typeof t[0] &&
                  co.call(t, "index") &&
                  ((n.index = t.index), (n.input = t.input)),
                n
              );
            })(e)),
            !s)
          )
            return yt(e, l);
        } else {
          var d = so(e),
            p = d == Oo || "[object GeneratorFunction]" == d;
          if (Object(ke.a)(e)) return Object(Wr.a)(e, s);
          if (d == _o || d == jo || (p && !i)) {
            if (((l = c || p ? {} : vo(e)), !s))
              return c
                ? (function(t, e) {
                    return ae(t, Xr(t), e);
                  })(
                    e,
                    (function(t, e) {
                      return t && ae(e, Fe(e), t);
                    })(l, e)
                  )
                : (function(t, e) {
                    return ae(t, Zr(t), e);
                  })(e, qr(l, e));
          } else {
            if (!So[d]) return i ? e : {};
            l = mo(e, d, s);
          }
        }
        a || (a = new Br());
        var h = a.get(e);
        if (h) return h;
        a.set(e, l),
          ko(e)
            ? e.forEach(function(o) {
                l.add(t(o, n, r, o, e, a));
              })
            : xo(e) &&
              e.forEach(function(o, i) {
                l.set(i, t(o, n, r, i, e, a));
              });
        var b = f ? void 0 : (u ? (c ? Yr : Jr) : c ? Fe : Le)(e);
        return (
          Lt(b || e, function(o, i) {
            b && (o = e[(i = o)]), ie(l, i, t(o, n, r, i, e, a));
          }),
          l
        );
      },
      Co = function(t) {
        return Eo(t, 4);
      },
      To = function(t) {
        return Eo(t, 5);
      },
      Ao = function(t, e) {
        return Eo(t, 5, (e = "function" == typeof e ? e : void 0));
      },
      zo = function(t, e) {
        return Eo(t, 4, (e = "function" == typeof e ? e : void 0));
      },
      $o = function() {
        return new vt(this.value(), this.__chain__);
      },
      Po = function(t) {
        for (
          var e = -1, n = null == t ? 0 : t.length, r = 0, o = [];
          ++e < n;

        ) {
          var i = t[e];
          i && (o[r++] = i);
        }
        return o;
      },
      Lo = function() {
        var t = arguments.length;
        if (!t) return [];
        for (var e = Array(t - 1), n = arguments[0], r = t; r--; )
          e[r - 1] = arguments[r];
        return vn(m(n) ? yt(n) : [n], wn(e, 1));
      };
    function Ro(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.__data__ = new on(); ++e < n; ) this.add(t[e]);
    }
    (Ro.prototype.add = Ro.prototype.push = function(t) {
      return this.__data__.set(t, "__lodash_hash_undefined__"), this;
    }),
      (Ro.prototype.has = function(t) {
        return this.__data__.has(t);
      });
    var No = Ro,
      Do = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      },
      Io = function(t, e) {
        return t.has(e);
      },
      Fo = function(t, e, n, r, o, i) {
        var a = 1 & n,
          l = t.length,
          s = e.length;
        if (l != s && !(a && s > l)) return !1;
        var c = i.get(t),
          u = i.get(e);
        if (c && u) return c == e && u == t;
        var f = -1,
          d = !0,
          p = 2 & n ? new No() : void 0;
        for (i.set(t, e), i.set(e, t); ++f < l; ) {
          var h = t[f],
            b = e[f];
          if (r) var g = a ? r(b, h, f, e, t, i) : r(h, b, f, t, e, i);
          if (void 0 !== g) {
            if (g) continue;
            d = !1;
            break;
          }
          if (p) {
            if (
              !Do(e, function(t, e) {
                if (!Io(p, e) && (h === t || o(h, t, n, r, i)))
                  return p.push(e);
              })
            ) {
              d = !1;
              break;
            }
          } else if (h !== b && !o(h, b, n, r, i)) {
            d = !1;
            break;
          }
        }
        return i.delete(t), i.delete(e), d;
      },
      Mo = function(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function(t, r) {
            n[++e] = [r, t];
          }),
          n
        );
      },
      Bo = function(t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function(t) {
            n[++e] = t;
          }),
          n
        );
      },
      qo = i ? i.prototype : void 0,
      Wo = qo ? qo.valueOf : void 0,
      Uo = Object.prototype.hasOwnProperty,
      Ho = "[object Arguments]",
      Vo = "[object Array]",
      Go = "[object Object]",
      Zo = Object.prototype.hasOwnProperty,
      Xo = function(t, e, n, r, o, i) {
        var a = m(t),
          l = m(e),
          s = a ? Vo : so(t),
          c = l ? Vo : so(e),
          u = (s = s == Ho ? Go : s) == Go,
          f = (c = c == Ho ? Go : c) == Go,
          d = s == c;
        if (d && Object(ke.a)(t)) {
          if (!Object(ke.a)(e)) return !1;
          (a = !0), (u = !1);
        }
        if (d && !u)
          return (
            i || (i = new Br()),
            a || Ee(t)
              ? Fo(t, e, n, r, o, i)
              : (function(t, e, n, r, o, i, a) {
                  switch (n) {
                    case "[object DataView]":
                      if (
                        t.byteLength != e.byteLength ||
                        t.byteOffset != e.byteOffset
                      )
                        return !1;
                      (t = t.buffer), (e = e.buffer);
                    case "[object ArrayBuffer]":
                      return !(
                        t.byteLength != e.byteLength || !i(new uo(t), new uo(e))
                      );
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                      return re(+t, +e);
                    case "[object Error]":
                      return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                      return t == e + "";
                    case "[object Map]":
                      var l = Mo;
                    case "[object Set]":
                      var s = 1 & r;
                      if ((l || (l = Bo), t.size != e.size && !s)) return !1;
                      var c = a.get(t);
                      if (c) return c == e;
                      (r |= 2), a.set(t, e);
                      var u = Fo(l(t), l(e), r, o, i, a);
                      return a.delete(t), u;
                    case "[object Symbol]":
                      if (Wo) return Wo.call(t) == Wo.call(e);
                  }
                  return !1;
                })(t, e, s, n, r, o, i)
          );
        if (!(1 & n)) {
          var p = u && Zo.call(t, "__wrapped__"),
            h = f && Zo.call(e, "__wrapped__");
          if (p || h) {
            var b = p ? t.value() : t,
              g = h ? e.value() : e;
            return i || (i = new Br()), o(b, g, n, r, i);
          }
        }
        return (
          !!d &&
          (i || (i = new Br()),
          (function(t, e, n, r, o, i) {
            var a = 1 & n,
              l = Jr(t),
              s = l.length;
            if (s != Jr(e).length && !a) return !1;
            for (var c = s; c--; ) {
              var u = l[c];
              if (!(a ? u in e : Uo.call(e, u))) return !1;
            }
            var f = i.get(t),
              d = i.get(e);
            if (f && d) return f == e && d == t;
            var p = !0;
            i.set(t, e), i.set(e, t);
            for (var h = a; ++c < s; ) {
              var b = t[(u = l[c])],
                g = e[u];
              if (r) var m = a ? r(g, b, u, e, t, i) : r(b, g, u, t, e, i);
              if (!(void 0 === m ? b === g || o(b, g, n, r, i) : m)) {
                p = !1;
                break;
              }
              h || (h = "constructor" == u);
            }
            if (p && !h) {
              var v = t.constructor,
                y = e.constructor;
              v != y &&
                "constructor" in t &&
                "constructor" in e &&
                !(
                  "function" == typeof v &&
                  v instanceof v &&
                  "function" == typeof y &&
                  y instanceof y
                ) &&
                (p = !1);
            }
            return i.delete(t), i.delete(e), p;
          })(t, e, n, r, o, i))
        );
      },
      Ko = function t(e, n, r, o, i) {
        return (
          e === n ||
          (null == e || null == n || (!p(e) && !p(n))
            ? e != e && n != n
            : Xo(e, n, r, o, t, i))
        );
      },
      Jo = function(t, e, n, r) {
        var o = n.length,
          i = o,
          a = !r;
        if (null == t) return !i;
        for (t = Object(t); o--; ) {
          var l = n[o];
          if (a && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
        }
        for (; ++o < i; ) {
          var s = (l = n[o])[0],
            c = t[s],
            u = l[1];
          if (a && l[2]) {
            if (void 0 === c && !(s in t)) return !1;
          } else {
            var f = new Br();
            if (r) var d = r(c, u, s, t, e, f);
            if (!(void 0 === d ? Ko(u, c, 3, r, f) : d)) return !1;
          }
        }
        return !0;
      },
      Yo = function(t) {
        return t == t && !E(t);
      },
      Qo = function(t) {
        for (var e = Le(t), n = e.length; n--; ) {
          var r = e[n],
            o = t[r];
          e[n] = [r, o, Yo(o)];
        }
        return e;
      },
      ti = function(t, e) {
        return function(n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      },
      ei = function(t) {
        var e = Qo(t);
        return 1 == e.length && e[0][2]
          ? ti(e[0][0], e[0][1])
          : function(n) {
              return n === t || Jo(n, t, e);
            };
      },
      ni = function(t, e) {
        return null != t && e in Object(t);
      },
      ri = function(t, e, n) {
        for (var r = -1, o = (e = pn(e, t)).length, i = !1; ++r < o; ) {
          var a = hn(e[r]);
          if (!(i = null != t && n(t, a))) break;
          t = t[a];
        }
        return i || ++r != o
          ? i
          : !!(o = null == t ? 0 : t.length) &&
              ue(o) &&
              Ut(a, o) &&
              (m(t) || we(t));
      },
      oi = function(t, e) {
        return null != t && ri(t, e, ni);
      },
      ii = function(t, e) {
        return He(t) && Yo(e)
          ? ti(hn(t), e)
          : function(n) {
              var r = gn(n, t);
              return void 0 === r && r === e ? oi(n, t) : Ko(e, r, 3);
            };
      },
      ai = function(t) {
        return function(e) {
          return null == e ? void 0 : e[t];
        };
      },
      li = function(t) {
        return He(t)
          ? ai(hn(t))
          : (function(t) {
              return function(e) {
                return bn(e, t);
              };
            })(t);
      },
      si = function(t) {
        return "function" == typeof t
          ? t
          : null == t
          ? N
          : "object" == typeof t
          ? m(t)
            ? ii(t[0], t[1])
            : ei(t)
          : li(t);
      },
      ci = function(t) {
        var e = null == t ? 0 : t.length,
          n = si;
        return (
          (t = e
            ? g(t, function(t) {
                if ("function" != typeof t[1])
                  throw new TypeError("Expected a function");
                return [n(t[0]), t[1]];
              })
            : []),
          ce(function(n) {
            for (var r = -1; ++r < e; ) {
              var o = t[r];
              if (rt(o[0], this, n)) return rt(o[1], this, n);
            }
          })
        );
      },
      ui = function(t, e, n) {
        var r = n.length;
        if (null == t) return !r;
        for (t = Object(t); r--; ) {
          var o = n[r],
            i = e[o],
            a = t[o];
          if ((void 0 === a && !(o in t)) || !i(a)) return !1;
        }
        return !0;
      },
      fi = function(t) {
        return (function(t) {
          var e = Le(t);
          return function(n) {
            return ui(n, t, e);
          };
        })(Eo(t, 1));
      },
      di = function(t, e) {
        return null == e || ui(t, e, Le(e));
      },
      pi = function(t, e, n, r) {
        for (var o = -1, i = null == t ? 0 : t.length; ++o < i; ) {
          var a = t[o];
          e(r, a, n(a), t);
        }
        return r;
      },
      hi = function(t) {
        return function(e, n, r) {
          for (var o = -1, i = Object(e), a = r(e), l = a.length; l--; ) {
            var s = a[t ? l : ++o];
            if (!1 === n(i[s], s, i)) break;
          }
          return e;
        };
      },
      bi = hi(),
      gi = function(t, e) {
        return t && bi(t, e, Le);
      },
      mi = function(t, e) {
        return function(n, r) {
          if (null == n) return n;
          if (!fe(n)) return t(n, r);
          for (
            var o = n.length, i = e ? o : -1, a = Object(n);
            (e ? i-- : ++i < o) && !1 !== r(a[i], i, a);

          );
          return n;
        };
      },
      vi = mi(gi),
      yi = function(t, e, n, r) {
        return (
          vi(t, function(t, o, i) {
            e(r, t, n(t), i);
          }),
          r
        );
      },
      xi = function(t, e) {
        return function(n, r) {
          var o = m(n) ? pi : yi,
            i = e ? e() : {};
          return o(n, t, si(r), i);
        };
      },
      wi = Object.prototype.hasOwnProperty,
      ki = xi(function(t, e, n) {
        wi.call(t, n) ? ++t[n] : ne(t, n, 1);
      }),
      ji = function(t, e) {
        var n = tt(t);
        return null == e ? n : qr(n, e);
      },
      Oi = 8;
    function _i(t, e, n) {
      var r = te(
        t,
        Oi,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        (e = n ? void 0 : e)
      );
      return (r.placeholder = _i.placeholder), r;
    }
    _i.placeholder = {};
    var Si = _i,
      Ei = 16;
    function Ci(t, e, n) {
      var r = te(
        t,
        Ei,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        (e = n ? void 0 : e)
      );
      return (r.placeholder = Ci.placeholder), r;
    }
    Ci.placeholder = {};
    var Ti = Ci,
      Ai = function() {
        return o.a.Date.now();
      },
      zi = Math.max,
      $i = Math.min,
      Pi = function(t, e, n) {
        var r,
          o,
          i,
          a,
          l,
          s,
          c = 0,
          u = !1,
          f = !1,
          d = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function p(e) {
          var n = r,
            i = o;
          return (r = o = void 0), (c = e), (a = t.apply(i, n));
        }
        function h(t) {
          var n = t - s;
          return void 0 === s || n >= e || n < 0 || (f && t - c >= i);
        }
        function b() {
          var t = Ai();
          if (h(t)) return g(t);
          l = setTimeout(
            b,
            (function(t) {
              var n = e - (t - s);
              return f ? $i(n, i - (t - c)) : n;
            })(t)
          );
        }
        function g(t) {
          return (l = void 0), d && r ? p(t) : ((r = o = void 0), a);
        }
        function m() {
          var t = Ai(),
            n = h(t);
          if (((r = arguments), (o = this), (s = t), n)) {
            if (void 0 === l)
              return (function(t) {
                return (c = t), (l = setTimeout(b, e)), u ? p(t) : a;
              })(s);
            if (f) return clearTimeout(l), (l = setTimeout(b, e)), p(s);
          }
          return void 0 === l && (l = setTimeout(b, e)), a;
        }
        return (
          (e = $(e) || 0),
          E(n) &&
            ((u = !!n.leading),
            (i = (f = "maxWait" in n) ? zi($(n.maxWait) || 0, e) : i),
            (d = "trailing" in n ? !!n.trailing : d)),
          (m.cancel = function() {
            void 0 !== l && clearTimeout(l), (c = 0), (r = s = o = l = void 0);
          }),
          (m.flush = function() {
            return void 0 === l ? a : g(Ai());
          }),
          m
        );
      },
      Li = function(t, e) {
        return null == t || t != t ? e : t;
      },
      Ri = Object.prototype,
      Ni = Ri.hasOwnProperty,
      Di = ce(function(t, e) {
        t = Object(t);
        var n = -1,
          r = e.length,
          o = r > 2 ? e[2] : void 0;
        for (o && de(e[0], e[1], o) && (r = 1); ++n < r; )
          for (var i = e[n], a = Fe(i), l = -1, s = a.length; ++l < s; ) {
            var c = a[l],
              u = t[c];
            (void 0 === u || (re(u, Ri[c]) && !Ni.call(t, c))) && (t[c] = i[c]);
          }
        return t;
      }),
      Ii = function(t, e, n) {
        ((void 0 === n || re(t[e], n)) && (void 0 !== n || e in t)) ||
          ne(t, e, n);
      },
      Fi = function(t) {
        return p(t) && fe(t);
      },
      Mi = function(t, e) {
        if (
          ("constructor" !== e || "function" != typeof t[e]) &&
          "__proto__" != e
        )
          return t[e];
      },
      Bi = function(t) {
        return ae(t, Fe(t));
      },
      qi = function t(e, n, r, o, i) {
        e !== n &&
          bi(
            n,
            function(a, l) {
              if ((i || (i = new Br()), E(a)))
                !(function(t, e, n, r, o, i, a) {
                  var l = Mi(t, n),
                    s = Mi(e, n),
                    c = a.get(s);
                  if (c) Ii(t, n, c);
                  else {
                    var u = i ? i(l, s, n + "", t, e, a) : void 0,
                      f = void 0 === u;
                    if (f) {
                      var d = m(s),
                        p = !d && Object(ke.a)(s),
                        h = !d && !p && Ee(s);
                      (u = s),
                        d || p || h
                          ? m(l)
                            ? (u = l)
                            : Fi(l)
                            ? (u = yt(l))
                            : p
                            ? ((f = !1), (u = Object(Wr.a)(s, !0)))
                            : h
                            ? ((f = !1), (u = go(s, !0)))
                            : (u = [])
                          : zn(s) || we(s)
                          ? ((u = l),
                            we(l)
                              ? (u = Bi(l))
                              : (E(l) && !D(l)) || (u = vo(s)))
                          : (f = !1);
                    }
                    f && (a.set(s, u), o(u, s, r, i, a), a.delete(s)),
                      Ii(t, n, u);
                  }
                })(e, n, l, r, t, o, i);
              else {
                var s = o ? o(Mi(e, l), a, l + "", e, n, i) : void 0;
                void 0 === s && (s = a), Ii(e, l, s);
              }
            },
            Fe
          );
      },
      Wi = function t(e, n, r, o, i, a) {
        return (
          E(e) && E(n) && (a.set(n, e), qi(e, n, void 0, t, a), a.delete(n)), e
        );
      },
      Ui = pe(function(t, e, n, r) {
        qi(t, e, n, r);
      }),
      Hi = ce(function(t) {
        return t.push(void 0, Wi), rt(Ui, void 0, t);
      }),
      Vi = function(t, e, n) {
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return setTimeout(function() {
          t.apply(void 0, n);
        }, e);
      },
      Gi = ce(function(t, e) {
        return Vi(t, 1, e);
      }),
      Zi = ce(function(t, e, n) {
        return Vi(t, $(e) || 0, n);
      }),
      Xi = function(t, e, n) {
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o; )
          if (n(e, t[r])) return !0;
        return !1;
      },
      Ki = function(t, e, n, r) {
        var o = -1,
          i = It,
          a = !0,
          l = t.length,
          s = [],
          c = e.length;
        if (!l) return s;
        n && (e = g(e, Oe(n))),
          r
            ? ((i = Xi), (a = !1))
            : e.length >= 200 && ((i = Io), (a = !1), (e = new No(e)));
        t: for (; ++o < l; ) {
          var u = t[o],
            f = null == n ? u : n(u);
          if (((u = r || 0 !== u ? u : 0), a && f == f)) {
            for (var d = c; d--; ) if (e[d] === f) continue t;
            s.push(u);
          } else i(e, f, r) || s.push(u);
        }
        return s;
      },
      Ji = ce(function(t, e) {
        return Fi(t) ? Ki(t, wn(e, 1, Fi, !0)) : [];
      }),
      Yi = function(t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      },
      Qi = ce(function(t, e) {
        var n = Yi(e);
        return (
          Fi(n) && (n = void 0), Fi(t) ? Ki(t, wn(e, 1, Fi, !0), si(n)) : []
        );
      }),
      ta = ce(function(t, e) {
        var n = Yi(e);
        return (
          Fi(n) && (n = void 0), Fi(t) ? Ki(t, wn(e, 1, Fi, !0), void 0, n) : []
        );
      }),
      ea = w(function(t, e) {
        return t / e;
      }, 1),
      na = function(t, e, n) {
        var r = null == t ? 0 : t.length;
        return r
          ? ((e = n || void 0 === e ? 1 : L(e)), Mn(t, e < 0 ? 0 : e, r))
          : [];
      },
      ra = function(t, e, n) {
        var r = null == t ? 0 : t.length;
        return r
          ? ((e = n || void 0 === e ? 1 : L(e)),
            Mn(t, 0, (e = r - e) < 0 ? 0 : e))
          : [];
      },
      oa = function(t, e, n, r) {
        for (
          var o = t.length, i = r ? o : -1;
          (r ? i-- : ++i < o) && e(t[i], i, t);

        );
        return n
          ? Mn(t, r ? 0 : i, r ? i + 1 : o)
          : Mn(t, r ? i + 1 : 0, r ? o : i);
      },
      ia = function(t, e) {
        return t && t.length ? oa(t, si(e), !0, !0) : [];
      },
      aa = function(t, e) {
        return t && t.length ? oa(t, si(e), !0) : [];
      },
      la = function(t) {
        return "function" == typeof t ? t : N;
      },
      sa = function(t, e) {
        return (m(t) ? Lt : vi)(t, la(e));
      },
      ca = hi(!0),
      ua = function(t, e) {
        return t && ca(t, e, Le);
      },
      fa = mi(ua, !0),
      da = function(t, e) {
        return (m(t)
          ? function(t, e) {
              for (
                var n = null == t ? 0 : t.length;
                n-- && !1 !== e(t[n], n, t);

              );
              return t;
            }
          : fa)(t, la(e));
      },
      pa = function(t, e, n) {
        (t = dn(t)), (e = x(e));
        var r = t.length,
          o = (n = void 0 === n ? r : Ir(L(n), 0, r));
        return (n -= e.length) >= 0 && t.slice(n, o) == e;
      },
      ha = function(t) {
        return function(e) {
          var n = so(e);
          return "[object Map]" == n
            ? Mo(e)
            : "[object Set]" == n
            ? (function(t) {
                var e = -1,
                  n = Array(t.size);
                return (
                  t.forEach(function(t) {
                    n[++e] = [t, t];
                  }),
                  n
                );
              })(e)
            : (function(t, e) {
                return g(e, function(e) {
                  return [e, t[e]];
                });
              })(e, t(e));
        };
      },
      ba = ha(Le),
      ga = ha(Fe),
      ma = or({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }),
      va = /[&<>"']/g,
      ya = RegExp(va.source),
      xa = function(t) {
        return (t = dn(t)) && ya.test(t) ? t.replace(va, ma) : t;
      },
      wa = /[\\^$.*+?()[\]{}|]/g,
      ka = RegExp(wa.source),
      ja = function(t) {
        return (t = dn(t)) && ka.test(t) ? t.replace(wa, "\\$&") : t;
      },
      Oa = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (!e(t[n], n, t)) return !1;
        return !0;
      },
      _a = function(t, e) {
        var n = !0;
        return (
          vi(t, function(t, r, o) {
            return (n = !!e(t, r, o));
          }),
          n
        );
      },
      Sa = function(t, e, n) {
        var r = m(t) ? Oa : _a;
        return n && de(t, e, n) && (e = void 0), r(t, si(e));
      },
      Ea = function(t) {
        return t ? Ir(L(t), 0, 4294967295) : 0;
      },
      Ca = function(t, e, n, r) {
        var o = null == t ? 0 : t.length;
        return o
          ? (n && "number" != typeof n && de(t, e, n) && ((n = 0), (r = o)),
            (function(t, e, n, r) {
              var o = t.length;
              for (
                (n = L(n)) < 0 && (n = -n > o ? 0 : o + n),
                  (r = void 0 === r || r > o ? o : L(r)) < 0 && (r += o),
                  r = n > r ? 0 : Ea(r);
                n < r;

              )
                t[n++] = e;
              return t;
            })(t, e, n, r))
          : [];
      },
      Ta = function(t, e) {
        var n = [];
        return (
          vi(t, function(t, r, o) {
            e(t, r, o) && n.push(t);
          }),
          n
        );
      },
      Aa = function(t, e) {
        return (m(t) ? Ur : Ta)(t, si(e));
      },
      za = function(t) {
        return function(e, n, r) {
          var o = Object(e);
          if (!fe(e)) {
            var i = si(n);
            (e = Le(e)),
              (n = function(t) {
                return i(o[t], t, o);
              });
          }
          var a = t(e, n, r);
          return a > -1 ? o[i ? e[a] : a] : void 0;
        };
      },
      $a = Math.max,
      Pa = function(t, e, n) {
        var r = null == t ? 0 : t.length;
        if (!r) return -1;
        var o = null == n ? 0 : L(n);
        return o < 0 && (o = $a(r + o, 0)), Rt(t, si(e), o);
      },
      La = za(Pa),
      Ra = function(t, e, n) {
        var r;
        return (
          n(t, function(t, n, o) {
            if (e(t, n, o)) return (r = n), !1;
          }),
          r
        );
      },
      Na = function(t, e) {
        return Ra(t, si(e), gi);
      },
      Da = Math.max,
      Ia = Math.min,
      Fa = function(t, e, n) {
        var r = null == t ? 0 : t.length;
        if (!r) return -1;
        var o = r - 1;
        return (
          void 0 !== n &&
            ((o = L(n)), (o = n < 0 ? Da(r + o, 0) : Ia(o, r - 1))),
          Rt(t, si(e), o, !0)
        );
      },
      Ma = za(Fa),
      Ba = function(t, e) {
        return Ra(t, si(e), ua);
      },
      qa = function(t) {
        return t && t.length ? t[0] : void 0;
      },
      Wa = function(t, e) {
        var n = -1,
          r = fe(t) ? Array(t.length) : [];
        return (
          vi(t, function(t, o, i) {
            r[++n] = e(t, o, i);
          }),
          r
        );
      },
      Ua = function(t, e) {
        return (m(t) ? g : Wa)(t, si(e));
      },
      Ha = function(t, e) {
        return wn(Ua(t, e), 1);
      },
      Va = function(t, e) {
        return wn(Ua(t, e), 1 / 0);
      },
      Ga = function(t, e, n) {
        return (n = void 0 === n ? 1 : L(n)), wn(Ua(t, e), n);
      },
      Za = function(t) {
        return null != t && t.length ? wn(t, 1 / 0) : [];
      },
      Xa = function(t, e) {
        return null != t && t.length
          ? ((e = void 0 === e ? 1 : L(e)), wn(t, e))
          : [];
      },
      Ka = function(t) {
        return te(t, 512);
      },
      Ja = $r("floor"),
      Ya = function(t) {
        return jn(function(e) {
          var n = e.length,
            r = n,
            o = vt.prototype.thru;
          for (t && e.reverse(); r--; ) {
            var i = e[r];
            if ("function" != typeof i)
              throw new TypeError("Expected a function");
            if (o && !a && "wrapper" == gt(i)) var a = new vt([], !0);
          }
          for (r = a ? r : n; ++r < n; ) {
            i = e[r];
            var l = gt(i),
              s = "wrapper" == l ? pt(i) : void 0;
            a =
              s && Ot(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9]
                ? a[gt(s[0])].apply(a, s[3])
                : 1 == i.length && Ot(i)
                ? a[l]()
                : a.thru(i);
          }
          return function() {
            var t = arguments,
              r = t[0];
            if (a && 1 == t.length && m(r)) return a.plant(r).value();
            for (var o = 0, i = n ? e[o].apply(this, t) : r; ++o < n; )
              i = e[o].call(this, i);
            return i;
          };
        });
      },
      Qa = Ya(),
      tl = Ya(!0),
      el = function(t, e) {
        return null == t ? t : bi(t, la(e), Fe);
      },
      nl = function(t, e) {
        return null == t ? t : ca(t, la(e), Fe);
      },
      rl = function(t, e) {
        return t && gi(t, la(e));
      },
      ol = function(t, e) {
        return t && ua(t, la(e));
      },
      il = function(t) {
        for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n; ) {
          var o = t[e];
          r[o[0]] = o[1];
        }
        return r;
      },
      al = function(t, e) {
        return Ur(e, function(e) {
          return D(t[e]);
        });
      },
      ll = function(t) {
        return null == t ? [] : al(t, Le(t));
      },
      sl = function(t) {
        return null == t ? [] : al(t, Fe(t));
      },
      cl = Object.prototype.hasOwnProperty,
      ul = xi(function(t, e, n) {
        cl.call(t, n) ? t[n].push(e) : ne(t, n, [e]);
      }),
      fl = function(t, e) {
        return t > e;
      },
      dl = function(t) {
        return function(e, n) {
          return (
            ("string" == typeof e && "string" == typeof n) ||
              ((e = $(e)), (n = $(n))),
            t(e, n)
          );
        };
      },
      pl = dl(fl),
      hl = dl(function(t, e) {
        return t >= e;
      }),
      bl = Object.prototype.hasOwnProperty,
      gl = function(t, e) {
        return null != t && bl.call(t, e);
      },
      ml = function(t, e) {
        return null != t && ri(t, e, gl);
      },
      vl = Math.max,
      yl = Math.min,
      xl = function(t, e, n) {
        return (
          (e = P(e)),
          void 0 === n ? ((n = e), (e = 0)) : (n = P(n)),
          (function(t, e, n) {
            return t >= yl(e, n) && t < vl(e, n);
          })((t = $(t)), e, n)
        );
      },
      wl = function(t) {
        return (
          "string" == typeof t || (!m(t) && p(t) && "[object String]" == d(t))
        );
      },
      kl = function(t, e) {
        return g(e, function(e) {
          return t[e];
        });
      },
      jl = function(t) {
        return null == t ? [] : kl(t, Le(t));
      },
      Ol = Math.max,
      _l = function(t, e, n, r) {
        (t = fe(t) ? t : jl(t)), (n = n && !r ? L(n) : 0);
        var o = t.length;
        return (
          n < 0 && (n = Ol(o + n, 0)),
          wl(t) ? n <= o && t.indexOf(e, n) > -1 : !!o && Dt(t, e, n) > -1
        );
      },
      Sl = Math.max,
      El = function(t, e, n) {
        var r = null == t ? 0 : t.length;
        if (!r) return -1;
        var o = null == n ? 0 : L(n);
        return o < 0 && (o = Sl(r + o, 0)), Dt(t, e, o);
      },
      Cl = function(t) {
        return null != t && t.length ? Mn(t, 0, -1) : [];
      },
      Tl = Math.min,
      Al = function(t, e, n) {
        for (
          var r = n ? Xi : It,
            o = t[0].length,
            i = t.length,
            a = i,
            l = Array(i),
            s = 1 / 0,
            c = [];
          a--;

        ) {
          var u = t[a];
          a && e && (u = g(u, Oe(e))),
            (s = Tl(u.length, s)),
            (l[a] =
              !n && (e || (o >= 120 && u.length >= 120))
                ? new No(a && u)
                : void 0);
        }
        u = t[0];
        var f = -1,
          d = l[0];
        t: for (; ++f < o && c.length < s; ) {
          var p = u[f],
            h = e ? e(p) : p;
          if (((p = n || 0 !== p ? p : 0), !(d ? Io(d, h) : r(c, h, n)))) {
            for (a = i; --a; ) {
              var b = l[a];
              if (!(b ? Io(b, h) : r(t[a], h, n))) continue t;
            }
            d && d.push(h), c.push(p);
          }
        }
        return c;
      },
      zl = function(t) {
        return Fi(t) ? t : [];
      },
      $l = ce(function(t) {
        var e = g(t, zl);
        return e.length && e[0] === t[0] ? Al(e) : [];
      }),
      Pl = ce(function(t) {
        var e = Yi(t),
          n = g(t, zl);
        return (
          e === Yi(n) ? (e = void 0) : n.pop(),
          n.length && n[0] === t[0] ? Al(n, si(e)) : []
        );
      }),
      Ll = ce(function(t) {
        var e = Yi(t),
          n = g(t, zl);
        return (
          (e = "function" == typeof e ? e : void 0) && n.pop(),
          n.length && n[0] === t[0] ? Al(n, void 0, e) : []
        );
      }),
      Rl = function(t, e) {
        return function(n, r) {
          return (function(t, e, n, r) {
            return (
              gi(t, function(t, o, i) {
                e(r, n(t), o, i);
              }),
              r
            );
          })(n, t, e(r), {});
        };
      },
      Nl = Object.prototype.toString,
      Dl = Rl(function(t, e, n) {
        null != e && "function" != typeof e.toString && (e = Nl.call(e)),
          (t[e] = n);
      }, zt(N)),
      Il = Object.prototype,
      Fl = Il.hasOwnProperty,
      Ml = Il.toString,
      Bl = Rl(function(t, e, n) {
        null != e && "function" != typeof e.toString && (e = Ml.call(e)),
          Fl.call(t, e) ? t[e].push(n) : (t[e] = [n]);
      }, si),
      ql = function(t, e) {
        return e.length < 2 ? t : bn(t, Mn(e, 0, -1));
      },
      Wl = function(t, e, n) {
        e = pn(e, t);
        var r = null == (t = ql(t, e)) ? t : t[hn(Yi(e))];
        return null == r ? void 0 : rt(r, t, n);
      },
      Ul = ce(Wl),
      Hl = ce(function(t, e, n) {
        var r = -1,
          o = "function" == typeof e,
          i = fe(t) ? Array(t.length) : [];
        return (
          vi(t, function(t) {
            i[++r] = o ? rt(e, t, n) : Wl(t, e, n);
          }),
          i
        );
      }),
      Vl = _e.a && _e.a.isArrayBuffer,
      Gl = Vl
        ? Oe(Vl)
        : function(t) {
            return p(t) && "[object ArrayBuffer]" == d(t);
          },
      Zl = function(t) {
        return !0 === t || !1 === t || (p(t) && "[object Boolean]" == d(t));
      },
      Xl = _e.a && _e.a.isDate,
      Kl = Xl
        ? Oe(Xl)
        : function(t) {
            return p(t) && "[object Date]" == d(t);
          },
      Jl = function(t) {
        return p(t) && 1 === t.nodeType && !zn(t);
      },
      Yl = Object.prototype.hasOwnProperty,
      Ql = function(t) {
        if (null == t) return !0;
        if (
          fe(t) &&
          (m(t) ||
            "string" == typeof t ||
            "function" == typeof t.splice ||
            Object(ke.a)(t) ||
            Ee(t) ||
            we(t))
        )
          return !t.length;
        var e = so(t);
        if ("[object Map]" == e || "[object Set]" == e) return !t.size;
        if (be(t)) return !Pe(t).length;
        for (var n in t) if (Yl.call(t, n)) return !1;
        return !0;
      },
      ts = function(t, e) {
        return Ko(t, e);
      },
      es = function(t, e, n) {
        var r = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0;
        return void 0 === r ? Ko(t, e, void 0, n) : !!r;
      },
      ns = o.a.isFinite,
      rs = function(t) {
        return "number" == typeof t && ns(t);
      },
      os = function(t) {
        return "number" == typeof t && t == L(t);
      },
      is = function(t, e) {
        return t === e || Jo(t, e, Qo(e));
      },
      as = function(t, e, n) {
        return (n = "function" == typeof n ? n : void 0), Jo(t, e, Qo(e), n);
      },
      ls = function(t) {
        return "number" == typeof t || (p(t) && "[object Number]" == d(t));
      },
      ss = function(t) {
        return ls(t) && t != +t;
      },
      cs = n(11),
      us = I ? D : cs.a,
      fs = function(t) {
        if (us(t))
          throw new Error(
            "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
          );
        return Z(t);
      },
      ds = function(t) {
        return null == t;
      },
      ps = function(t) {
        return null === t;
      },
      hs = _e.a && _e.a.isRegExp,
      bs = hs
        ? Oe(hs)
        : function(t) {
            return p(t) && "[object RegExp]" == d(t);
          },
      gs = 9007199254740991,
      ms = function(t) {
        return os(t) && t >= -gs && t <= gs;
      },
      vs = function(t) {
        return void 0 === t;
      },
      ys = function(t) {
        return p(t) && "[object WeakMap]" == so(t);
      },
      xs = function(t) {
        return p(t) && "[object WeakSet]" == d(t);
      },
      ws = function(t) {
        return si("function" == typeof t ? t : Eo(t, 1));
      },
      ks = Array.prototype.join,
      js = function(t, e) {
        return null == t ? "" : ks.call(t, e);
      },
      Os = Er(function(t, e, n) {
        return t + (n ? "-" : "") + e.toLowerCase();
      }),
      _s = xi(function(t, e, n) {
        ne(t, n, e);
      }),
      Ss = Math.max,
      Es = Math.min,
      Cs = function(t, e, n) {
        var r = null == t ? 0 : t.length;
        if (!r) return -1;
        var o = r;
        return (
          void 0 !== n && (o = (o = L(n)) < 0 ? Ss(r + o, 0) : Es(o, r - 1)),
          e == e
            ? (function(t, e, n) {
                for (var r = n + 1; r--; ) if (t[r] === e) return r;
                return r;
              })(t, e, o)
            : Rt(t, Nt, o, !0)
        );
      },
      Ts = Er(function(t, e, n) {
        return t + (n ? " " : "") + e.toLowerCase();
      }),
      As = tr("toLowerCase"),
      zs = function(t, e) {
        return t < e;
      },
      $s = dl(zs),
      Ps = dl(function(t, e) {
        return t <= e;
      }),
      Ls = function(t, e) {
        var n = {};
        return (
          (e = si(e)),
          gi(t, function(t, r, o) {
            ne(n, e(t, r, o), t);
          }),
          n
        );
      },
      Rs = function(t, e) {
        var n = {};
        return (
          (e = si(e)),
          gi(t, function(t, r, o) {
            ne(n, r, e(t, r, o));
          }),
          n
        );
      },
      Ns = function(t) {
        return ei(Eo(t, 1));
      },
      Ds = function(t, e) {
        return ii(t, Eo(e, 1));
      },
      Is = function(t, e, n) {
        for (var r = -1, o = t.length; ++r < o; ) {
          var i = t[r],
            a = e(i);
          if (null != a && (void 0 === l ? a == a && !h(a) : n(a, l)))
            var l = a,
              s = i;
        }
        return s;
      },
      Fs = function(t) {
        return t && t.length ? Is(t, N, fl) : void 0;
      },
      Ms = function(t, e) {
        return t && t.length ? Is(t, si(e), fl) : void 0;
      },
      Bs = function(t, e) {
        for (var n, r = -1, o = t.length; ++r < o; ) {
          var i = e(t[r]);
          void 0 !== i && (n = void 0 === n ? i : n + i);
        }
        return n;
      },
      qs = function(t, e) {
        var n = null == t ? 0 : t.length;
        return n ? Bs(t, e) / n : NaN;
      },
      Ws = function(t) {
        return qs(t, N);
      },
      Us = function(t, e) {
        return qs(t, si(e));
      },
      Hs = pe(function(t, e, n) {
        qi(t, e, n);
      }),
      Vs = ce(function(t, e) {
        return function(n) {
          return Wl(n, t, e);
        };
      }),
      Gs = ce(function(t, e) {
        return function(n) {
          return Wl(t, n, e);
        };
      }),
      Zs = function(t) {
        return t && t.length ? Is(t, N, zs) : void 0;
      },
      Xs = function(t, e) {
        return t && t.length ? Is(t, si(e), zs) : void 0;
      },
      Ks = function(t, e, n) {
        var r = Le(e),
          o = al(e, r),
          i = !(E(n) && "chain" in n && !n.chain),
          a = D(t);
        return (
          Lt(o, function(n) {
            var r = e[n];
            (t[n] = r),
              a &&
                (t.prototype[n] = function() {
                  var e = this.__chain__;
                  if (i || e) {
                    var n = t(this.__wrapped__);
                    return (
                      (n.__actions__ = yt(this.__actions__)).push({
                        func: r,
                        args: arguments,
                        thisArg: t
                      }),
                      (n.__chain__ = e),
                      n
                    );
                  }
                  return r.apply(t, vn([this.value()], arguments));
                });
          }),
          t
        );
      },
      Js = w(function(t, e) {
        return t * e;
      }, 1),
      Ys = function(t) {
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, e[0]);
            case 2:
              return !t.call(this, e[0], e[1]);
            case 3:
              return !t.call(this, e[0], e[1], e[2]);
          }
          return !t.apply(this, e);
        };
      },
      Qs = i ? i.iterator : void 0,
      tc = function(t) {
        if (!t) return [];
        if (fe(t)) return wl(t) ? Qn(t) : yt(t);
        if (Qs && t[Qs])
          return (function(t) {
            for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
            return n;
          })(t[Qs]());
        var e = so(t);
        return ("[object Map]" == e ? Mo : "[object Set]" == e ? Bo : jl)(t);
      },
      ec = function() {
        void 0 === this.__values__ && (this.__values__ = tc(this.value()));
        var t = this.__index__ >= this.__values__.length;
        return {
          done: t,
          value: t ? void 0 : this.__values__[this.__index__++]
        };
      },
      nc = function(t, e) {
        var n = t.length;
        if (n) return Ut((e += e < 0 ? n : 0), n) ? t[e] : void 0;
      },
      rc = function(t, e) {
        return t && t.length ? nc(t, L(e)) : void 0;
      },
      oc = function(t) {
        return (
          (t = L(t)),
          ce(function(e) {
            return nc(e, t);
          })
        );
      },
      ic = function(t, e) {
        return (e = pn(e, t)), null == (t = ql(t, e)) || delete t[hn(Yi(e))];
      },
      ac = function(t) {
        return zn(t) ? void 0 : t;
      },
      lc = jn(function(t, e) {
        var n = {};
        if (null == t) return n;
        var r = !1;
        (e = g(e, function(e) {
          return (e = pn(e, t)), r || (r = e.length > 1), e;
        })),
          ae(t, Yr(t), n),
          r && (n = Eo(n, 7, ac));
        for (var o = e.length; o--; ) ic(n, e[o]);
        return n;
      }),
      sc = function(t, e, n, r) {
        if (!E(t)) return t;
        for (
          var o = -1, i = (e = pn(e, t)).length, a = i - 1, l = t;
          null != l && ++o < i;

        ) {
          var s = hn(e[o]),
            c = n;
          if ("__proto__" === s || "constructor" === s || "prototype" === s)
            return t;
          if (o != a) {
            var u = l[s];
            void 0 === (c = r ? r(u, s, l) : void 0) &&
              (c = E(u) ? u : Ut(e[o + 1]) ? [] : {});
          }
          ie(l, s, c), (l = l[s]);
        }
        return t;
      },
      cc = function(t, e, n) {
        for (var r = -1, o = e.length, i = {}; ++r < o; ) {
          var a = e[r],
            l = bn(t, a);
          n(l, a) && sc(i, pn(a, t), l);
        }
        return i;
      },
      uc = function(t, e) {
        if (null == t) return {};
        var n = g(Yr(t), function(t) {
          return [t];
        });
        return (
          (e = si(e)),
          cc(t, n, function(t, n) {
            return e(t, n[0]);
          })
        );
      },
      fc = function(t, e) {
        return uc(t, Ys(si(e)));
      },
      dc = function(t) {
        return Ln(2, t);
      },
      pc = function(t, e) {
        if (t !== e) {
          var n = void 0 !== t,
            r = null === t,
            o = t == t,
            i = h(t),
            a = void 0 !== e,
            l = null === e,
            s = e == e,
            c = h(e);
          if (
            (!l && !c && !i && t > e) ||
            (i && a && s && !l && !c) ||
            (r && a && s) ||
            (!n && s) ||
            !o
          )
            return 1;
          if (
            (!r && !i && !c && t < e) ||
            (c && n && o && !r && !i) ||
            (l && n && o) ||
            (!a && o) ||
            !s
          )
            return -1;
        }
        return 0;
      },
      hc = function(t, e, n) {
        e = e.length
          ? g(e, function(t) {
              return m(t)
                ? function(e) {
                    return bn(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [N];
        var r = -1;
        return (
          (e = g(e, Oe(si))),
          (function(t, e) {
            var n = t.length;
            for (t.sort(e); n--; ) t[n] = t[n].value;
            return t;
          })(
            Wa(t, function(t, n, o) {
              return {
                criteria: g(e, function(e) {
                  return e(t);
                }),
                index: ++r,
                value: t
              };
            }),
            function(t, e) {
              return (function(t, e, n) {
                for (
                  var r = -1,
                    o = t.criteria,
                    i = e.criteria,
                    a = o.length,
                    l = n.length;
                  ++r < a;

                ) {
                  var s = pc(o[r], i[r]);
                  if (s) return r >= l ? s : s * ("desc" == n[r] ? -1 : 1);
                }
                return t.index - e.index;
              })(t, e, n);
            }
          )
        );
      },
      bc = function(t, e, n, r) {
        return null == t
          ? []
          : (m(e) || (e = null == e ? [] : [e]),
            m((n = r ? void 0 : n)) || (n = null == n ? [] : [n]),
            hc(t, e, n));
      },
      gc = function(t) {
        return jn(function(e) {
          return (
            (e = g(e, Oe(si))),
            ce(function(n) {
              var r = this;
              return t(e, function(t) {
                return rt(t, r, n);
              });
            })
          );
        });
      },
      mc = gc(g),
      vc = ce,
      yc = Math.min,
      xc = vc(function(t, e) {
        var n = (e =
          1 == e.length && m(e[0]) ? g(e[0], Oe(si)) : g(wn(e, 1), Oe(si)))
          .length;
        return ce(function(r) {
          for (var o = -1, i = yc(r.length, n); ++o < i; )
            r[o] = e[o].call(this, r[o]);
          return rt(t, this, r);
        });
      }),
      wc = gc(Oa),
      kc = gc(Do),
      jc = Math.floor,
      Oc = function(t, e) {
        var n = "";
        if (!t || e < 1 || e > 9007199254740991) return n;
        do {
          e % 2 && (n += t), (e = jc(e / 2)) && (t += t);
        } while (e);
        return n;
      },
      _c = ai("length"),
      Sc = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      Ec = "[^\\ud800-\\udfff]",
      Cc = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Tc = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Ac = "(?:" + Sc + "|\\ud83c[\\udffb-\\udfff])?",
      zc =
        "[\\ufe0e\\ufe0f]?" +
        Ac +
        "(?:\\u200d(?:" +
        [Ec, Cc, Tc].join("|") +
        ")[\\ufe0e\\ufe0f]?" +
        Ac +
        ")*",
      $c =
        "(?:" +
        [Ec + Sc + "?", Sc, Cc, Tc, "[\\ud800-\\udfff]"].join("|") +
        ")",
      Pc = RegExp(
        "\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + $c + zc,
        "g"
      ),
      Lc = function(t) {
        return Wn(t)
          ? (function(t) {
              for (var e = (Pc.lastIndex = 0); Pc.test(t); ) ++e;
              return e;
            })(t)
          : _c(t);
      },
      Rc = Math.ceil,
      Nc = function(t, e) {
        var n = (e = void 0 === e ? " " : x(e)).length;
        if (n < 2) return n ? Oc(e, t) : e;
        var r = Oc(e, Rc(t / Lc(e)));
        return Wn(e) ? Bn(Qn(r), 0, t).join("") : r.slice(0, t);
      },
      Dc = Math.ceil,
      Ic = Math.floor,
      Fc = function(t, e, n) {
        t = dn(t);
        var r = (e = L(e)) ? Lc(t) : 0;
        if (!e || r >= e) return t;
        var o = (e - r) / 2;
        return Nc(Ic(o), n) + t + Nc(Dc(o), n);
      },
      Mc = function(t, e, n) {
        t = dn(t);
        var r = (e = L(e)) ? Lc(t) : 0;
        return e && r < e ? t + Nc(e - r, n) : t;
      },
      Bc = function(t, e, n) {
        t = dn(t);
        var r = (e = L(e)) ? Lc(t) : 0;
        return e && r < e ? Nc(e - r, n) + t : t;
      },
      qc = /^\s+/,
      Wc = o.a.parseInt,
      Uc = function(t, e, n) {
        return (
          n || null == e ? (e = 0) : e && (e = +e),
          Wc(dn(t).replace(qc, ""), e || 0)
        );
      },
      Hc = ce(function(t, e) {
        var n = Gt(e, qt(Hc));
        return te(t, 32, void 0, e, n);
      });
    Hc.placeholder = {};
    var Vc = Hc,
      Gc = ce(function(t, e) {
        var n = Gt(e, qt(Gc));
        return te(t, 64, void 0, e, n);
      });
    Gc.placeholder = {};
    var Zc,
      Xc,
      Kc = Gc,
      Jc = xi(
        function(t, e, n) {
          t[n ? 0 : 1].push(e);
        },
        function() {
          return [[], []];
        }
      ),
      Yc = jn(function(t, e) {
        return null == t
          ? {}
          : (function(t, e) {
              return cc(t, e, function(e, n) {
                return oi(t, n);
              });
            })(t, e);
      }),
      Qc = function(t) {
        for (var e, n = this; n instanceof st; ) {
          var r = xt(n);
          (r.__index__ = 0),
            (r.__values__ = void 0),
            e ? (o.__wrapped__ = r) : (e = r);
          var o = r;
          n = n.__wrapped__;
        }
        return (o.__wrapped__ = t), e;
      },
      tu = function(t) {
        return function(e) {
          return null == t ? void 0 : bn(t, e);
        };
      },
      eu = function(t, e, n, r) {
        for (var o = n - 1, i = t.length; ++o < i; ) if (r(t[o], e)) return o;
        return -1;
      },
      nu = Array.prototype.splice,
      ru = function(t, e, n, r) {
        var o = r ? eu : Dt,
          i = -1,
          a = e.length,
          l = t;
        for (t === e && (e = yt(e)), n && (l = g(t, Oe(n))); ++i < a; )
          for (
            var s = 0, c = e[i], u = n ? n(c) : c;
            (s = o(l, u, s, r)) > -1;

          )
            l !== t && nu.call(l, s, 1), nu.call(t, s, 1);
        return t;
      },
      ou = function(t, e) {
        return t && t.length && e && e.length ? ru(t, e) : t;
      },
      iu = ce(ou),
      au = function(t, e, n) {
        return t && t.length && e && e.length ? ru(t, e, si(n)) : t;
      },
      lu = function(t, e, n) {
        return t && t.length && e && e.length ? ru(t, e, void 0, n) : t;
      },
      su = Array.prototype.splice,
      cu = function(t, e) {
        for (var n = t ? e.length : 0, r = n - 1; n--; ) {
          var o = e[n];
          if (n == r || o !== i) {
            var i = o;
            Ut(o) ? su.call(t, o, 1) : ic(t, o);
          }
        }
        return t;
      },
      uu = jn(function(t, e) {
        var n = null == t ? 0 : t.length,
          r = mn(t, e);
        return (
          cu(
            t,
            g(e, function(t) {
              return Ut(t, n) ? +t : t;
            }).sort(pc)
          ),
          r
        );
      }),
      fu = Math.floor,
      du = Math.random,
      pu = function(t, e) {
        return t + fu(du() * (e - t + 1));
      },
      hu = parseFloat,
      bu = Math.min,
      gu = Math.random,
      mu = function(t, e, n) {
        if (
          (n && "boolean" != typeof n && de(t, e, n) && (e = n = void 0),
          void 0 === n &&
            ("boolean" == typeof e
              ? ((n = e), (e = void 0))
              : "boolean" == typeof t && ((n = t), (t = void 0))),
          void 0 === t && void 0 === e
            ? ((t = 0), (e = 1))
            : ((t = P(t)), void 0 === e ? ((e = t), (t = 0)) : (e = P(e))),
          t > e)
        ) {
          var r = t;
          (t = e), (e = r);
        }
        if (n || t % 1 || e % 1) {
          var o = gu();
          return bu(t + o * (e - t + hu("1e-" + ((o + "").length - 1))), e);
        }
        return pu(t, e);
      },
      vu = Math.ceil,
      yu = Math.max,
      xu = function(t) {
        return function(e, n, r) {
          return (
            r && "number" != typeof r && de(e, n, r) && (n = r = void 0),
            (e = P(e)),
            void 0 === n ? ((n = e), (e = 0)) : (n = P(n)),
            (function(t, e, n, r) {
              for (
                var o = -1, i = yu(vu((e - t) / (n || 1)), 0), a = Array(i);
                i--;

              )
                (a[r ? i : ++o] = t), (t += n);
              return a;
            })(e, n, (r = void 0 === r ? (e < n ? 1 : -1) : P(r)), t)
          );
        };
      },
      wu = xu(),
      ku = xu(!0),
      ju = jn(function(t, e) {
        return te(t, 256, void 0, void 0, void 0, e);
      }),
      Ou = function(t, e, n, r, o) {
        return (
          o(t, function(t, o, i) {
            n = r ? ((r = !1), t) : e(n, t, o, i);
          }),
          n
        );
      },
      _u = function(t, e, n) {
        var r = m(t) ? rr : Ou,
          o = arguments.length < 3;
        return r(t, si(e), n, o, vi);
      },
      Su = function(t, e, n, r) {
        var o = null == t ? 0 : t.length;
        for (r && o && (n = t[--o]); o--; ) n = e(n, t[o], o, t);
        return n;
      },
      Eu = function(t, e, n) {
        var r = m(t) ? Su : Ou,
          o = arguments.length < 3;
        return r(t, si(e), n, o, fa);
      },
      Cu = function(t, e) {
        return (m(t) ? Ur : Ta)(t, Ys(si(e)));
      },
      Tu = function(t, e) {
        var n = [];
        if (!t || !t.length) return n;
        var r = -1,
          o = [],
          i = t.length;
        for (e = si(e); ++r < i; ) {
          var a = t[r];
          e(a, r, t) && (n.push(a), o.push(r));
        }
        return cu(t, o), n;
      },
      Au = function(t, e, n) {
        return (e = (n ? de(t, e, n) : void 0 === e) ? 1 : L(e)), Oc(dn(t), e);
      },
      zu = function() {
        var t = arguments,
          e = dn(t[0]);
        return t.length < 3 ? e : e.replace(t[1], t[2]);
      },
      $u = function(t, e) {
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (e = void 0 === e ? e : L(e)), ce(t, e);
      },
      Pu = function(t, e, n) {
        var r = -1,
          o = (e = pn(e, t)).length;
        for (o || ((o = 1), (t = void 0)); ++r < o; ) {
          var i = null == t ? void 0 : t[hn(e[r])];
          void 0 === i && ((r = o), (i = n)), (t = D(i) ? i.call(t) : i);
        }
        return t;
      },
      Lu = Array.prototype.reverse,
      Ru = function(t) {
        return null == t ? t : Lu.call(t);
      },
      Nu = $r("round"),
      Du = function(t) {
        var e = t.length;
        return e ? t[pu(0, e - 1)] : void 0;
      },
      Iu = function(t) {
        return (m(t)
          ? Du
          : function(t) {
              return Du(jl(t));
            })(t);
      },
      Fu = function(t, e) {
        var n = -1,
          r = t.length,
          o = r - 1;
        for (e = void 0 === e ? r : e; ++n < e; ) {
          var i = pu(n, o),
            a = t[i];
          (t[i] = t[n]), (t[n] = a);
        }
        return (t.length = e), t;
      },
      Mu = function(t, e, n) {
        return (
          (e = (n ? de(t, e, n) : void 0 === e) ? 1 : L(e)),
          (m(t)
            ? function(t, e) {
                return Fu(yt(t), Ir(e, 0, t.length));
              }
            : function(t, e) {
                var n = jl(t);
                return Fu(n, Ir(e, 0, n.length));
              })(t, e)
        );
      },
      Bu = function(t, e, n) {
        return null == t ? t : sc(t, e, n);
      },
      qu = function(t, e, n, r) {
        return (
          (r = "function" == typeof r ? r : void 0),
          null == t ? t : sc(t, e, n, r)
        );
      },
      Wu = function(t) {
        return (m(t)
          ? function(t) {
              return Fu(yt(t));
            }
          : function(t) {
              return Fu(jl(t));
            })(t);
      },
      Uu = function(t) {
        if (null == t) return 0;
        if (fe(t)) return wl(t) ? Lc(t) : t.length;
        var e = so(t);
        return "[object Map]" == e || "[object Set]" == e
          ? t.size
          : Pe(t).length;
      },
      Hu = function(t, e, n) {
        var r = null == t ? 0 : t.length;
        return r
          ? (n && "number" != typeof n && de(t, e, n)
              ? ((e = 0), (n = r))
              : ((e = null == e ? 0 : L(e)), (n = void 0 === n ? r : L(n))),
            Mn(t, e, n))
          : [];
      },
      Vu = Er(function(t, e, n) {
        return t + (n ? "_" : "") + e.toLowerCase();
      }),
      Gu = function(t, e) {
        var n;
        return (
          vi(t, function(t, r, o) {
            return !(n = e(t, r, o));
          }),
          !!n
        );
      },
      Zu = function(t, e, n) {
        var r = m(t) ? Do : Gu;
        return n && de(t, e, n) && (e = void 0), r(t, si(e));
      },
      Xu = ce(function(t, e) {
        if (null == t) return [];
        var n = e.length;
        return (
          n > 1 && de(t, e[0], e[1])
            ? (e = [])
            : n > 2 && de(e[0], e[1], e[2]) && (e = [e[0]]),
          hc(t, wn(e, 1), [])
        );
      }),
      Ku = Math.floor,
      Ju = Math.min,
      Yu = function(t, e, n, r) {
        var o = 0,
          i = null == t ? 0 : t.length;
        if (0 === i) return 0;
        for (
          var a = (e = n(e)) != e, l = null === e, s = h(e), c = void 0 === e;
          o < i;

        ) {
          var u = Ku((o + i) / 2),
            f = n(t[u]),
            d = void 0 !== f,
            p = null === f,
            b = f == f,
            g = h(f);
          if (a) var m = r || b;
          else
            m = c
              ? b && (r || d)
              : l
              ? b && d && (r || !p)
              : s
              ? b && d && !p && (r || !g)
              : !p && !g && (r ? f <= e : f < e);
          m ? (o = u + 1) : (i = u);
        }
        return Ju(i, 4294967294);
      },
      Qu = function(t, e, n) {
        var r = 0,
          o = null == t ? r : t.length;
        if ("number" == typeof e && e == e && o <= 2147483647) {
          for (; r < o; ) {
            var i = (r + o) >>> 1,
              a = t[i];
            null !== a && !h(a) && (n ? a <= e : a < e) ? (r = i + 1) : (o = i);
          }
          return o;
        }
        return Yu(t, e, N, n);
      },
      tf = function(t, e) {
        return Qu(t, e);
      },
      ef = function(t, e, n) {
        return Yu(t, e, si(n));
      },
      nf = function(t, e) {
        var n = null == t ? 0 : t.length;
        if (n) {
          var r = Qu(t, e);
          if (r < n && re(t[r], e)) return r;
        }
        return -1;
      },
      rf = function(t, e) {
        return Qu(t, e, !0);
      },
      of = function(t, e, n) {
        return Yu(t, e, si(n), !0);
      },
      af = function(t, e) {
        if (null != t && t.length) {
          var n = Qu(t, e, !0) - 1;
          if (re(t[n], e)) return n;
        }
        return -1;
      },
      lf = function(t, e) {
        for (var n = -1, r = t.length, o = 0, i = []; ++n < r; ) {
          var a = t[n],
            l = e ? e(a) : a;
          if (!n || !re(l, s)) {
            var s = l;
            i[o++] = 0 === a ? 0 : a;
          }
        }
        return i;
      },
      sf = function(t) {
        return t && t.length ? lf(t) : [];
      },
      cf = function(t, e) {
        return t && t.length ? lf(t, si(e)) : [];
      },
      uf = function(t, e, n) {
        return (
          n && "number" != typeof n && de(t, e, n) && (e = n = void 0),
          (n = void 0 === n ? 4294967295 : n >>> 0)
            ? (t = dn(t)) &&
              ("string" == typeof e || (null != e && !bs(e))) &&
              !(e = x(e)) &&
              Wn(t)
              ? Bn(Qn(t), 0, n)
              : t.split(e, n)
            : []
        );
      },
      ff = Math.max,
      df = function(t, e) {
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          (e = null == e ? 0 : ff(L(e), 0)),
          ce(function(n) {
            var r = n[e],
              o = Bn(n, 0, e);
            return r && vn(o, r), rt(t, this, o);
          })
        );
      },
      pf = Er(function(t, e, n) {
        return t + (n ? " " : "") + er(e);
      }),
      hf = function(t, e, n) {
        return (
          (t = dn(t)),
          (n = null == n ? 0 : Ir(L(n), 0, t.length)),
          (e = x(e)),
          t.slice(n, n + e.length) == e
        );
      },
      bf = function() {
        return {};
      },
      gf = function() {
        return "";
      },
      mf = function() {
        return !0;
      },
      vf = w(function(t, e) {
        return t - e;
      }, 0),
      yf = function(t) {
        return t && t.length ? Bs(t, N) : 0;
      },
      xf = function(t, e) {
        return t && t.length ? Bs(t, si(e)) : 0;
      },
      wf = function(t) {
        var e = null == t ? 0 : t.length;
        return e ? Mn(t, 1, e) : [];
      },
      kf = function(t, e, n) {
        return t && t.length
          ? ((e = n || void 0 === e ? 1 : L(e)), Mn(t, 0, e < 0 ? 0 : e))
          : [];
      },
      jf = function(t, e, n) {
        var r = null == t ? 0 : t.length;
        return r
          ? ((e = n || void 0 === e ? 1 : L(e)),
            Mn(t, (e = r - e) < 0 ? 0 : e, r))
          : [];
      },
      Of = function(t, e) {
        return t && t.length ? oa(t, si(e), !1, !0) : [];
      },
      _f = function(t, e) {
        return t && t.length ? oa(t, si(e)) : [];
      },
      Sf = function(t, e) {
        return e(t), t;
      },
      Ef = Object.prototype,
      Cf = Ef.hasOwnProperty,
      Tf = function(t, e, n, r) {
        return void 0 === t || (re(t, Ef[n]) && !Cf.call(r, n)) ? e : t;
      },
      Af = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      zf = function(t) {
        return "\\" + Af[t];
      },
      $f = /<%=([\s\S]+?)%>/g,
      Pf = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: $f,
        variable: "",
        imports: { _: { escape: xa } }
      },
      Lf = /\b__p \+= '';/g,
      Rf = /\b(__p \+=) '' \+/g,
      Nf = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Df = /[()=,{}\[\]\/\s]/,
      If = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Ff = /($^)/,
      Mf = /['\n\r\u2028\u2029\\]/g,
      Bf = Object.prototype.hasOwnProperty,
      qf = function(t, e, n) {
        var r = Pf.imports._.templateSettings || Pf;
        n && de(t, e, n) && (e = void 0), (t = dn(t)), (e = Be({}, e, r, Tf));
        var o,
          i,
          a = Be({}, e.imports, r.imports, Tf),
          l = Le(a),
          s = kl(a, l),
          c = 0,
          u = e.interpolate || Ff,
          f = "__p += '",
          d = RegExp(
            (e.escape || Ff).source +
              "|" +
              u.source +
              "|" +
              (u === $f ? If : Ff).source +
              "|" +
              (e.evaluate || Ff).source +
              "|$",
            "g"
          ),
          p = Bf.call(e, "sourceURL")
            ? "//# sourceURL=" + (e.sourceURL + "").replace(/\s/g, " ") + "\n"
            : "";
        t.replace(d, function(e, n, r, a, l, s) {
          return (
            r || (r = a),
            (f += t.slice(c, s).replace(Mf, zf)),
            n && ((o = !0), (f += "' +\n__e(" + n + ") +\n'")),
            l && ((i = !0), (f += "';\n" + l + ";\n__p += '")),
            r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
            (c = s + e.length),
            e
          );
        }),
          (f += "';\n");
        var h = Bf.call(e, "variable") && e.variable;
        if (h) {
          if (Df.test(h))
            throw new Error(
              "Invalid `variable` option passed into `_.template`"
            );
        } else f = "with (obj) {\n" + f + "\n}\n";
        (f = (i ? f.replace(Lf, "") : f).replace(Rf, "$1").replace(Nf, "$1;")),
          (f =
            "function(" +
            (h || "obj") +
            ") {\n" +
            (h ? "" : "obj || (obj = {});\n") +
            "var __t, __p = ''" +
            (o ? ", __e = _.escape" : "") +
            (i
              ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
              : ";\n") +
            f +
            "return __p\n}");
        var b = Pn(function() {
          return Function(l, p + "return " + f).apply(void 0, s);
        });
        if (((b.source = f), $n(b))) throw b;
        return b;
      },
      Wf = function(t, e, n) {
        var r = !0,
          o = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          E(n) &&
            ((r = "leading" in n ? !!n.leading : r),
            (o = "trailing" in n ? !!n.trailing : o)),
          Pi(t, e, { leading: r, maxWait: e, trailing: o })
        );
      },
      Uf = function(t, e) {
        return e(t);
      },
      Hf = 4294967295,
      Vf = Math.min,
      Gf = function(t, e) {
        if ((t = L(t)) < 1 || t > 9007199254740991) return [];
        var n = Hf,
          r = Vf(t, Hf);
        (e = la(e)), (t -= Hf);
        for (var o = ge(r, e); ++n < t; ) e(n);
        return o;
      },
      Zf = function() {
        return this;
      },
      Xf = function(t, e) {
        var n = t;
        return (
          n instanceof ft && (n = n.value()),
          rr(
            e,
            function(t, e) {
              return e.func.apply(e.thisArg, vn([t], e.args));
            },
            n
          )
        );
      },
      Kf = function() {
        return Xf(this.__wrapped__, this.__actions__);
      },
      Jf = function(t) {
        return dn(t).toLowerCase();
      },
      Yf = function(t) {
        return m(t) ? g(t, hn) : h(t) ? [t] : yt(fn(dn(t)));
      },
      Qf = 9007199254740991,
      td = function(t) {
        return t ? Ir(L(t), -Qf, Qf) : 0 === t ? t : 0;
      },
      ed = function(t) {
        return dn(t).toUpperCase();
      },
      nd = function(t, e, n) {
        var r = m(t),
          o = r || Object(ke.a)(t) || Ee(t);
        if (((e = si(e)), null == n)) {
          var i = t && t.constructor;
          n = o ? (r ? new i() : []) : E(t) && D(i) ? tt(_n(t)) : {};
        }
        return (
          (o ? Lt : gi)(t, function(t, r, o) {
            return e(n, t, r, o);
          }),
          n
        );
      },
      rd = function(t, e) {
        for (var n = t.length; n-- && Dt(e, t[n], 0) > -1; );
        return n;
      },
      od = function(t, e) {
        for (var n = -1, r = t.length; ++n < r && Dt(e, t[n], 0) > -1; );
        return n;
      },
      id = function(t, e, n) {
        if ((t = dn(t)) && (n || void 0 === e)) return S(t);
        if (!t || !(e = x(e))) return t;
        var r = Qn(t),
          o = Qn(e),
          i = od(r, o),
          a = rd(r, o) + 1;
        return Bn(r, i, a).join("");
      },
      ad = function(t, e, n) {
        if ((t = dn(t)) && (n || void 0 === e)) return t.slice(0, O(t) + 1);
        if (!t || !(e = x(e))) return t;
        var r = Qn(t),
          o = rd(r, Qn(e)) + 1;
        return Bn(r, 0, o).join("");
      },
      ld = /^\s+/,
      sd = function(t, e, n) {
        if ((t = dn(t)) && (n || void 0 === e)) return t.replace(ld, "");
        if (!t || !(e = x(e))) return t;
        var r = Qn(t),
          o = od(r, Qn(e));
        return Bn(r, o).join("");
      },
      cd = /\w*$/,
      ud = function(t, e) {
        var n = 30,
          r = "...";
        if (E(e)) {
          var o = "separator" in e ? e.separator : o;
          (n = "length" in e ? L(e.length) : n),
            (r = "omission" in e ? x(e.omission) : r);
        }
        var i = (t = dn(t)).length;
        if (Wn(t)) {
          var a = Qn(t);
          i = a.length;
        }
        if (n >= i) return t;
        var l = n - Lc(r);
        if (l < 1) return r;
        var s = a ? Bn(a, 0, l).join("") : t.slice(0, l);
        if (void 0 === o) return s + r;
        if ((a && (l += s.length - l), bs(o))) {
          if (t.slice(l).search(o)) {
            var c,
              u = s;
            for (
              o.global || (o = RegExp(o.source, dn(cd.exec(o)) + "g")),
                o.lastIndex = 0;
              (c = o.exec(u));

            )
              var f = c.index;
            s = s.slice(0, void 0 === f ? l : f);
          }
        } else if (t.indexOf(x(o), l) != l) {
          var d = s.lastIndexOf(o);
          d > -1 && (s = s.slice(0, d));
        }
        return s + r;
      },
      fd = function(t) {
        return ee(t, 1);
      },
      dd = or({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }),
      pd = /&(?:amp|lt|gt|quot|#39);/g,
      hd = RegExp(pd.source),
      bd = function(t) {
        return (t = dn(t)) && hd.test(t) ? t.replace(pd, dd) : t;
      },
      gd =
        eo && 1 / Bo(new eo([, -0]))[1] == 1 / 0
          ? function(t) {
              return new eo(t);
            }
          : dt,
      md = function(t, e, n) {
        var r = -1,
          o = It,
          i = t.length,
          a = !0,
          l = [],
          s = l;
        if (n) (a = !1), (o = Xi);
        else if (i >= 200) {
          var c = e ? null : gd(t);
          if (c) return Bo(c);
          (a = !1), (o = Io), (s = new No());
        } else s = e ? [] : l;
        t: for (; ++r < i; ) {
          var u = t[r],
            f = e ? e(u) : u;
          if (((u = n || 0 !== u ? u : 0), a && f == f)) {
            for (var d = s.length; d--; ) if (s[d] === f) continue t;
            e && s.push(f), l.push(u);
          } else o(s, f, n) || (s !== l && s.push(f), l.push(u));
        }
        return l;
      },
      vd = ce(function(t) {
        return md(wn(t, 1, Fi, !0));
      }),
      yd = ce(function(t) {
        var e = Yi(t);
        return Fi(e) && (e = void 0), md(wn(t, 1, Fi, !0), si(e));
      }),
      xd = ce(function(t) {
        var e = Yi(t);
        return (
          (e = "function" == typeof e ? e : void 0),
          md(wn(t, 1, Fi, !0), void 0, e)
        );
      }),
      wd = function(t) {
        return t && t.length ? md(t) : [];
      },
      kd = function(t, e) {
        return t && t.length ? md(t, si(e)) : [];
      },
      jd = function(t, e) {
        return (
          (e = "function" == typeof e ? e : void 0),
          t && t.length ? md(t, void 0, e) : []
        );
      },
      Od = 0,
      _d = function(t) {
        var e = ++Od;
        return dn(t) + e;
      },
      Sd = function(t, e) {
        return null == t || ic(t, e);
      },
      Ed = Math.max,
      Cd = function(t) {
        if (!t || !t.length) return [];
        var e = 0;
        return (
          (t = Ur(t, function(t) {
            if (Fi(t)) return (e = Ed(t.length, e)), !0;
          })),
          ge(e, function(e) {
            return g(t, ai(e));
          })
        );
      },
      Td = function(t, e) {
        if (!t || !t.length) return [];
        var n = Cd(t);
        return null == e
          ? n
          : g(n, function(t) {
              return rt(e, void 0, t);
            });
      },
      Ad = function(t, e, n, r) {
        return sc(t, e, n(bn(t, e)), r);
      },
      zd = function(t, e, n) {
        return null == t ? t : Ad(t, e, la(n));
      },
      $d = function(t, e, n, r) {
        return (
          (r = "function" == typeof r ? r : void 0),
          null == t ? t : Ad(t, e, la(n), r)
        );
      },
      Pd = Er(function(t, e, n) {
        return t + (n ? " " : "") + e.toUpperCase();
      }),
      Ld = function(t) {
        return null == t ? [] : kl(t, Fe(t));
      },
      Rd = ce(function(t, e) {
        return Fi(t) ? Ki(t, e) : [];
      }),
      Nd = function(t, e) {
        return Vc(la(e), t);
      },
      Dd = jn(function(t) {
        var e = t.length,
          n = e ? t[0] : 0,
          r = this.__wrapped__,
          o = function(e) {
            return mn(e, t);
          };
        return !(e > 1 || this.__actions__.length) && r instanceof ft && Ut(n)
          ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
              func: Uf,
              args: [o],
              thisArg: void 0
            }),
            new vt(r, this.__chain__).thru(function(t) {
              return e && !t.length && t.push(void 0), t;
            }))
          : this.thru(o);
      }),
      Id = function() {
        return Lr(this);
      },
      Fd = function() {
        var t = this.__wrapped__;
        if (t instanceof ft) {
          var e = t;
          return (
            this.__actions__.length && (e = new ft(this)),
            (e = e.reverse()).__actions__.push({
              func: Uf,
              args: [Ru],
              thisArg: void 0
            }),
            new vt(e, this.__chain__)
          );
        }
        return this.thru(Ru);
      },
      Md = function(t, e, n) {
        var r = t.length;
        if (r < 2) return r ? md(t[0]) : [];
        for (var o = -1, i = Array(r); ++o < r; )
          for (var a = t[o], l = -1; ++l < r; )
            l != o && (i[o] = Ki(i[o] || a, t[l], e, n));
        return md(wn(i, 1), e, n);
      },
      Bd = ce(function(t) {
        return Md(Ur(t, Fi));
      }),
      qd = ce(function(t) {
        var e = Yi(t);
        return Fi(e) && (e = void 0), Md(Ur(t, Fi), si(e));
      }),
      Wd = ce(function(t) {
        var e = Yi(t);
        return (
          (e = "function" == typeof e ? e : void 0), Md(Ur(t, Fi), void 0, e)
        );
      }),
      Ud = ce(Cd),
      Hd = function(t, e, n) {
        for (var r = -1, o = t.length, i = e.length, a = {}; ++r < o; ) {
          var l = r < i ? e[r] : void 0;
          n(a, t[r], l);
        }
        return a;
      },
      Vd = function(t, e) {
        return Hd(t || [], e || [], ie);
      },
      Gd = function(t, e) {
        return Hd(t || [], e || [], sc);
      },
      Zd = ce(function(t) {
        var e = t.length,
          n = e > 1 ? t[e - 1] : void 0;
        return (n = "function" == typeof n ? (t.pop(), n) : void 0), Td(t, n);
      }),
      Xd = {
        chunk: Dr,
        compact: Po,
        concat: Lo,
        difference: Ji,
        differenceBy: Qi,
        differenceWith: ta,
        drop: na,
        dropRight: ra,
        dropRightWhile: ia,
        dropWhile: aa,
        fill: Ca,
        findIndex: Pa,
        findLastIndex: Fa,
        first: qa,
        flatten: kn,
        flattenDeep: Za,
        flattenDepth: Xa,
        fromPairs: il,
        head: qa,
        indexOf: El,
        initial: Cl,
        intersection: $l,
        intersectionBy: Pl,
        intersectionWith: Ll,
        join: js,
        last: Yi,
        lastIndexOf: Cs,
        nth: rc,
        pull: iu,
        pullAll: ou,
        pullAllBy: au,
        pullAllWith: lu,
        pullAt: uu,
        remove: Tu,
        reverse: Ru,
        slice: Hu,
        sortedIndex: tf,
        sortedIndexBy: ef,
        sortedIndexOf: nf,
        sortedLastIndex: rf,
        sortedLastIndexBy: of,
        sortedLastIndexOf: af,
        sortedUniq: sf,
        sortedUniqBy: cf,
        tail: wf,
        take: kf,
        takeRight: jf,
        takeRightWhile: Of,
        takeWhile: _f,
        union: vd,
        unionBy: yd,
        unionWith: xd,
        uniq: wd,
        uniqBy: kd,
        uniqWith: jd,
        unzip: Cd,
        unzipWith: Td,
        without: Rd,
        xor: Bd,
        xorBy: qd,
        xorWith: Wd,
        zip: Ud,
        zipObject: Vd,
        zipObjectDeep: Gd,
        zipWith: Zd
      },
      Kd = {
        countBy: ki,
        each: sa,
        eachRight: da,
        every: Sa,
        filter: Aa,
        find: La,
        findLast: Ma,
        flatMap: Ha,
        flatMapDeep: Va,
        flatMapDepth: Ga,
        forEach: sa,
        forEachRight: da,
        groupBy: ul,
        includes: _l,
        invokeMap: Hl,
        keyBy: _s,
        map: Ua,
        orderBy: bc,
        partition: Jc,
        reduce: _u,
        reduceRight: Eu,
        reject: Cu,
        sample: Iu,
        sampleSize: Mu,
        shuffle: Wu,
        size: Uu,
        some: Zu,
        sortBy: Xu
      },
      Jd = { now: Ai },
      Yd = {
        after: R,
        ary: ee,
        before: Ln,
        bind: Nn,
        bindKey: Fn,
        curry: Si,
        curryRight: Ti,
        debounce: Pi,
        defer: Gi,
        delay: Zi,
        flip: Ka,
        memoize: sn,
        negate: Ys,
        once: dc,
        overArgs: xc,
        partial: Vc,
        partialRight: Kc,
        rearg: ju,
        rest: $u,
        spread: df,
        throttle: Wf,
        unary: fd,
        wrap: Nd
      },
      Qd = {
        castArray: Tr,
        clone: Co,
        cloneDeep: To,
        cloneDeepWith: Ao,
        cloneWith: zo,
        conformsTo: di,
        eq: re,
        gt: pl,
        gte: hl,
        isArguments: we,
        isArray: m,
        isArrayBuffer: Gl,
        isArrayLike: fe,
        isArrayLikeObject: Fi,
        isBoolean: Zl,
        isBuffer: ke.a,
        isDate: Kl,
        isElement: Jl,
        isEmpty: Ql,
        isEqual: ts,
        isEqualWith: es,
        isError: $n,
        isFinite: rs,
        isFunction: D,
        isInteger: os,
        isLength: ue,
        isMap: xo,
        isMatch: is,
        isMatchWith: as,
        isNaN: ss,
        isNative: fs,
        isNil: ds,
        isNull: ps,
        isNumber: ls,
        isObject: E,
        isObjectLike: p,
        isPlainObject: zn,
        isRegExp: bs,
        isSafeInteger: ms,
        isSet: ko,
        isString: wl,
        isSymbol: h,
        isTypedArray: Ee,
        isUndefined: vs,
        isWeakMap: ys,
        isWeakSet: xs,
        lt: $s,
        lte: Ps,
        toArray: tc,
        toFinite: P,
        toInteger: L,
        toLength: Ea,
        toNumber: $,
        toPlainObject: Bi,
        toSafeInteger: td,
        toString: dn
      },
      tp = {
        add: k,
        ceil: Pr,
        divide: ea,
        floor: Ja,
        max: Fs,
        maxBy: Ms,
        mean: Ws,
        meanBy: Us,
        min: Zs,
        minBy: Xs,
        multiply: Js,
        round: Nu,
        subtract: vf,
        sum: yf,
        sumBy: xf
      },
      ep = Fr,
      np = xl,
      rp = mu,
      op = {
        assign: Ne,
        assignIn: Me,
        assignInWith: Be,
        assignWith: qe,
        at: On,
        create: ji,
        defaults: Di,
        defaultsDeep: Hi,
        entries: ba,
        entriesIn: ga,
        extend: Me,
        extendWith: Be,
        findKey: Na,
        findLastKey: Ba,
        forIn: el,
        forInRight: nl,
        forOwn: rl,
        forOwnRight: ol,
        functions: ll,
        functionsIn: sl,
        get: gn,
        has: ml,
        hasIn: oi,
        invert: Dl,
        invertBy: Bl,
        invoke: Ul,
        keys: Le,
        keysIn: Fe,
        mapKeys: Ls,
        mapValues: Rs,
        merge: Hs,
        mergeWith: Ui,
        omit: lc,
        omitBy: fc,
        pick: Yc,
        pickBy: uc,
        result: Pu,
        set: Bu,
        setWith: qu,
        toPairs: ba,
        toPairsIn: ga,
        transform: nd,
        unset: Sd,
        update: zd,
        updateWith: $d,
        values: jl,
        valuesIn: Ld
      },
      ip = {
        at: Dd,
        chain: Lr,
        commit: $o,
        lodash: jt,
        next: ec,
        plant: Qc,
        reverse: Fd,
        tap: Sf,
        thru: Uf,
        toIterator: Zf,
        toJSON: Kf,
        value: Kf,
        valueOf: Kf,
        wrapperChain: Id
      },
      ap = {
        camelCase: Cr,
        capitalize: nr,
        deburr: sr,
        endsWith: pa,
        escape: xa,
        escapeRegExp: ja,
        kebabCase: Os,
        lowerCase: Ts,
        lowerFirst: As,
        pad: Fc,
        padEnd: Mc,
        padStart: Bc,
        parseInt: Uc,
        repeat: Au,
        replace: zu,
        snakeCase: Vu,
        split: uf,
        startCase: pf,
        startsWith: hf,
        template: qf,
        templateSettings: Pf,
        toLower: Jf,
        toUpper: ed,
        trim: id,
        trimEnd: ad,
        trimStart: sd,
        truncate: ud,
        unescape: bd,
        upperCase: Pd,
        upperFirst: er,
        words: _r
      },
      lp = {
        attempt: Pn,
        bindAll: Dn,
        cond: ci,
        conforms: fi,
        constant: zt,
        defaultTo: Li,
        flow: Qa,
        flowRight: tl,
        identity: N,
        iteratee: ws,
        matches: Ns,
        matchesProperty: Ds,
        method: Vs,
        methodOf: Gs,
        mixin: Ks,
        noop: dt,
        nthArg: oc,
        over: mc,
        overEvery: wc,
        overSome: kc,
        property: li,
        propertyOf: tu,
        range: wu,
        rangeRight: ku,
        stubArray: Hr,
        stubFalse: cs.a,
        stubObject: bf,
        stubString: gf,
        stubTrue: mf,
        times: Gf,
        toPath: Yf,
        uniqueId: _d
      },
      sp = Math.max,
      cp = Math.min,
      up = Math.min,
      fp = Array.prototype,
      dp = Object.prototype.hasOwnProperty,
      pp = i ? i.iterator : void 0,
      hp = Math.max,
      bp = Math.min,
      gp =
        ((Zc = Ks),
        function(t, e, n) {
          if (null == n) {
            var r = E(e),
              o = r && Le(e),
              i = o && o.length && al(e, o);
            (i ? i.length : r) || ((n = e), (e = t), (t = this));
          }
          return Zc(t, e, n);
        });
    /**
     * @license
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="es" -o ./`
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
    (jt.after = Yd.after),
      (jt.ary = Yd.ary),
      (jt.assign = op.assign),
      (jt.assignIn = op.assignIn),
      (jt.assignInWith = op.assignInWith),
      (jt.assignWith = op.assignWith),
      (jt.at = op.at),
      (jt.before = Yd.before),
      (jt.bind = Yd.bind),
      (jt.bindAll = lp.bindAll),
      (jt.bindKey = Yd.bindKey),
      (jt.castArray = Qd.castArray),
      (jt.chain = ip.chain),
      (jt.chunk = Xd.chunk),
      (jt.compact = Xd.compact),
      (jt.concat = Xd.concat),
      (jt.cond = lp.cond),
      (jt.conforms = lp.conforms),
      (jt.constant = lp.constant),
      (jt.countBy = Kd.countBy),
      (jt.create = op.create),
      (jt.curry = Yd.curry),
      (jt.curryRight = Yd.curryRight),
      (jt.debounce = Yd.debounce),
      (jt.defaults = op.defaults),
      (jt.defaultsDeep = op.defaultsDeep),
      (jt.defer = Yd.defer),
      (jt.delay = Yd.delay),
      (jt.difference = Xd.difference),
      (jt.differenceBy = Xd.differenceBy),
      (jt.differenceWith = Xd.differenceWith),
      (jt.drop = Xd.drop),
      (jt.dropRight = Xd.dropRight),
      (jt.dropRightWhile = Xd.dropRightWhile),
      (jt.dropWhile = Xd.dropWhile),
      (jt.fill = Xd.fill),
      (jt.filter = Kd.filter),
      (jt.flatMap = Kd.flatMap),
      (jt.flatMapDeep = Kd.flatMapDeep),
      (jt.flatMapDepth = Kd.flatMapDepth),
      (jt.flatten = Xd.flatten),
      (jt.flattenDeep = Xd.flattenDeep),
      (jt.flattenDepth = Xd.flattenDepth),
      (jt.flip = Yd.flip),
      (jt.flow = lp.flow),
      (jt.flowRight = lp.flowRight),
      (jt.fromPairs = Xd.fromPairs),
      (jt.functions = op.functions),
      (jt.functionsIn = op.functionsIn),
      (jt.groupBy = Kd.groupBy),
      (jt.initial = Xd.initial),
      (jt.intersection = Xd.intersection),
      (jt.intersectionBy = Xd.intersectionBy),
      (jt.intersectionWith = Xd.intersectionWith),
      (jt.invert = op.invert),
      (jt.invertBy = op.invertBy),
      (jt.invokeMap = Kd.invokeMap),
      (jt.iteratee = lp.iteratee),
      (jt.keyBy = Kd.keyBy),
      (jt.keys = Le),
      (jt.keysIn = op.keysIn),
      (jt.map = Kd.map),
      (jt.mapKeys = op.mapKeys),
      (jt.mapValues = op.mapValues),
      (jt.matches = lp.matches),
      (jt.matchesProperty = lp.matchesProperty),
      (jt.memoize = Yd.memoize),
      (jt.merge = op.merge),
      (jt.mergeWith = op.mergeWith),
      (jt.method = lp.method),
      (jt.methodOf = lp.methodOf),
      (jt.mixin = gp),
      (jt.negate = Ys),
      (jt.nthArg = lp.nthArg),
      (jt.omit = op.omit),
      (jt.omitBy = op.omitBy),
      (jt.once = Yd.once),
      (jt.orderBy = Kd.orderBy),
      (jt.over = lp.over),
      (jt.overArgs = Yd.overArgs),
      (jt.overEvery = lp.overEvery),
      (jt.overSome = lp.overSome),
      (jt.partial = Yd.partial),
      (jt.partialRight = Yd.partialRight),
      (jt.partition = Kd.partition),
      (jt.pick = op.pick),
      (jt.pickBy = op.pickBy),
      (jt.property = lp.property),
      (jt.propertyOf = lp.propertyOf),
      (jt.pull = Xd.pull),
      (jt.pullAll = Xd.pullAll),
      (jt.pullAllBy = Xd.pullAllBy),
      (jt.pullAllWith = Xd.pullAllWith),
      (jt.pullAt = Xd.pullAt),
      (jt.range = lp.range),
      (jt.rangeRight = lp.rangeRight),
      (jt.rearg = Yd.rearg),
      (jt.reject = Kd.reject),
      (jt.remove = Xd.remove),
      (jt.rest = Yd.rest),
      (jt.reverse = Xd.reverse),
      (jt.sampleSize = Kd.sampleSize),
      (jt.set = op.set),
      (jt.setWith = op.setWith),
      (jt.shuffle = Kd.shuffle),
      (jt.slice = Xd.slice),
      (jt.sortBy = Kd.sortBy),
      (jt.sortedUniq = Xd.sortedUniq),
      (jt.sortedUniqBy = Xd.sortedUniqBy),
      (jt.split = ap.split),
      (jt.spread = Yd.spread),
      (jt.tail = Xd.tail),
      (jt.take = Xd.take),
      (jt.takeRight = Xd.takeRight),
      (jt.takeRightWhile = Xd.takeRightWhile),
      (jt.takeWhile = Xd.takeWhile),
      (jt.tap = ip.tap),
      (jt.throttle = Yd.throttle),
      (jt.thru = Uf),
      (jt.toArray = Qd.toArray),
      (jt.toPairs = op.toPairs),
      (jt.toPairsIn = op.toPairsIn),
      (jt.toPath = lp.toPath),
      (jt.toPlainObject = Qd.toPlainObject),
      (jt.transform = op.transform),
      (jt.unary = Yd.unary),
      (jt.union = Xd.union),
      (jt.unionBy = Xd.unionBy),
      (jt.unionWith = Xd.unionWith),
      (jt.uniq = Xd.uniq),
      (jt.uniqBy = Xd.uniqBy),
      (jt.uniqWith = Xd.uniqWith),
      (jt.unset = op.unset),
      (jt.unzip = Xd.unzip),
      (jt.unzipWith = Xd.unzipWith),
      (jt.update = op.update),
      (jt.updateWith = op.updateWith),
      (jt.values = op.values),
      (jt.valuesIn = op.valuesIn),
      (jt.without = Xd.without),
      (jt.words = ap.words),
      (jt.wrap = Yd.wrap),
      (jt.xor = Xd.xor),
      (jt.xorBy = Xd.xorBy),
      (jt.xorWith = Xd.xorWith),
      (jt.zip = Xd.zip),
      (jt.zipObject = Xd.zipObject),
      (jt.zipObjectDeep = Xd.zipObjectDeep),
      (jt.zipWith = Xd.zipWith),
      (jt.entries = op.toPairs),
      (jt.entriesIn = op.toPairsIn),
      (jt.extend = op.assignIn),
      (jt.extendWith = op.assignInWith),
      gp(jt, jt),
      (jt.add = tp.add),
      (jt.attempt = lp.attempt),
      (jt.camelCase = ap.camelCase),
      (jt.capitalize = ap.capitalize),
      (jt.ceil = tp.ceil),
      (jt.clamp = ep),
      (jt.clone = Qd.clone),
      (jt.cloneDeep = Qd.cloneDeep),
      (jt.cloneDeepWith = Qd.cloneDeepWith),
      (jt.cloneWith = Qd.cloneWith),
      (jt.conformsTo = Qd.conformsTo),
      (jt.deburr = ap.deburr),
      (jt.defaultTo = lp.defaultTo),
      (jt.divide = tp.divide),
      (jt.endsWith = ap.endsWith),
      (jt.eq = Qd.eq),
      (jt.escape = ap.escape),
      (jt.escapeRegExp = ap.escapeRegExp),
      (jt.every = Kd.every),
      (jt.find = Kd.find),
      (jt.findIndex = Xd.findIndex),
      (jt.findKey = op.findKey),
      (jt.findLast = Kd.findLast),
      (jt.findLastIndex = Xd.findLastIndex),
      (jt.findLastKey = op.findLastKey),
      (jt.floor = tp.floor),
      (jt.forEach = Kd.forEach),
      (jt.forEachRight = Kd.forEachRight),
      (jt.forIn = op.forIn),
      (jt.forInRight = op.forInRight),
      (jt.forOwn = op.forOwn),
      (jt.forOwnRight = op.forOwnRight),
      (jt.get = op.get),
      (jt.gt = Qd.gt),
      (jt.gte = Qd.gte),
      (jt.has = op.has),
      (jt.hasIn = op.hasIn),
      (jt.head = Xd.head),
      (jt.identity = N),
      (jt.includes = Kd.includes),
      (jt.indexOf = Xd.indexOf),
      (jt.inRange = np),
      (jt.invoke = op.invoke),
      (jt.isArguments = Qd.isArguments),
      (jt.isArray = m),
      (jt.isArrayBuffer = Qd.isArrayBuffer),
      (jt.isArrayLike = Qd.isArrayLike),
      (jt.isArrayLikeObject = Qd.isArrayLikeObject),
      (jt.isBoolean = Qd.isBoolean),
      (jt.isBuffer = Qd.isBuffer),
      (jt.isDate = Qd.isDate),
      (jt.isElement = Qd.isElement),
      (jt.isEmpty = Qd.isEmpty),
      (jt.isEqual = Qd.isEqual),
      (jt.isEqualWith = Qd.isEqualWith),
      (jt.isError = Qd.isError),
      (jt.isFinite = Qd.isFinite),
      (jt.isFunction = Qd.isFunction),
      (jt.isInteger = Qd.isInteger),
      (jt.isLength = Qd.isLength),
      (jt.isMap = Qd.isMap),
      (jt.isMatch = Qd.isMatch),
      (jt.isMatchWith = Qd.isMatchWith),
      (jt.isNaN = Qd.isNaN),
      (jt.isNative = Qd.isNative),
      (jt.isNil = Qd.isNil),
      (jt.isNull = Qd.isNull),
      (jt.isNumber = Qd.isNumber),
      (jt.isObject = E),
      (jt.isObjectLike = Qd.isObjectLike),
      (jt.isPlainObject = Qd.isPlainObject),
      (jt.isRegExp = Qd.isRegExp),
      (jt.isSafeInteger = Qd.isSafeInteger),
      (jt.isSet = Qd.isSet),
      (jt.isString = Qd.isString),
      (jt.isSymbol = Qd.isSymbol),
      (jt.isTypedArray = Qd.isTypedArray),
      (jt.isUndefined = Qd.isUndefined),
      (jt.isWeakMap = Qd.isWeakMap),
      (jt.isWeakSet = Qd.isWeakSet),
      (jt.join = Xd.join),
      (jt.kebabCase = ap.kebabCase),
      (jt.last = Yi),
      (jt.lastIndexOf = Xd.lastIndexOf),
      (jt.lowerCase = ap.lowerCase),
      (jt.lowerFirst = ap.lowerFirst),
      (jt.lt = Qd.lt),
      (jt.lte = Qd.lte),
      (jt.max = tp.max),
      (jt.maxBy = tp.maxBy),
      (jt.mean = tp.mean),
      (jt.meanBy = tp.meanBy),
      (jt.min = tp.min),
      (jt.minBy = tp.minBy),
      (jt.stubArray = lp.stubArray),
      (jt.stubFalse = lp.stubFalse),
      (jt.stubObject = lp.stubObject),
      (jt.stubString = lp.stubString),
      (jt.stubTrue = lp.stubTrue),
      (jt.multiply = tp.multiply),
      (jt.nth = Xd.nth),
      (jt.noop = lp.noop),
      (jt.now = Jd.now),
      (jt.pad = ap.pad),
      (jt.padEnd = ap.padEnd),
      (jt.padStart = ap.padStart),
      (jt.parseInt = ap.parseInt),
      (jt.random = rp),
      (jt.reduce = Kd.reduce),
      (jt.reduceRight = Kd.reduceRight),
      (jt.repeat = ap.repeat),
      (jt.replace = ap.replace),
      (jt.result = op.result),
      (jt.round = tp.round),
      (jt.sample = Kd.sample),
      (jt.size = Kd.size),
      (jt.snakeCase = ap.snakeCase),
      (jt.some = Kd.some),
      (jt.sortedIndex = Xd.sortedIndex),
      (jt.sortedIndexBy = Xd.sortedIndexBy),
      (jt.sortedIndexOf = Xd.sortedIndexOf),
      (jt.sortedLastIndex = Xd.sortedLastIndex),
      (jt.sortedLastIndexBy = Xd.sortedLastIndexBy),
      (jt.sortedLastIndexOf = Xd.sortedLastIndexOf),
      (jt.startCase = ap.startCase),
      (jt.startsWith = ap.startsWith),
      (jt.subtract = tp.subtract),
      (jt.sum = tp.sum),
      (jt.sumBy = tp.sumBy),
      (jt.template = ap.template),
      (jt.times = lp.times),
      (jt.toFinite = Qd.toFinite),
      (jt.toInteger = L),
      (jt.toLength = Qd.toLength),
      (jt.toLower = ap.toLower),
      (jt.toNumber = Qd.toNumber),
      (jt.toSafeInteger = Qd.toSafeInteger),
      (jt.toString = Qd.toString),
      (jt.toUpper = ap.toUpper),
      (jt.trim = ap.trim),
      (jt.trimEnd = ap.trimEnd),
      (jt.trimStart = ap.trimStart),
      (jt.truncate = ap.truncate),
      (jt.unescape = ap.unescape),
      (jt.uniqueId = lp.uniqueId),
      (jt.upperCase = ap.upperCase),
      (jt.upperFirst = ap.upperFirst),
      (jt.each = Kd.forEach),
      (jt.eachRight = Kd.forEachRight),
      (jt.first = Xd.head),
      gp(
        jt,
        ((Xc = {}),
        gi(jt, function(t, e) {
          dp.call(jt.prototype, e) || (Xc[e] = t);
        }),
        Xc),
        { chain: !1 }
      ),
      (jt.VERSION = "4.17.21"),
      ((jt.templateSettings = ap.templateSettings).imports._ = jt),
      Lt(
        ["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"],
        function(t) {
          jt[t].placeholder = jt;
        }
      ),
      Lt(["drop", "take"], function(t, e) {
        (ft.prototype[t] = function(n) {
          n = void 0 === n ? 1 : hp(L(n), 0);
          var r = this.__filtered__ && !e ? new ft(this) : this.clone();
          return (
            r.__filtered__
              ? (r.__takeCount__ = bp(n, r.__takeCount__))
              : r.__views__.push({
                  size: bp(n, 4294967295),
                  type: t + (r.__dir__ < 0 ? "Right" : "")
                }),
            r
          );
        }),
          (ft.prototype[t + "Right"] = function(e) {
            return this.reverse()
              [t](e)
              .reverse();
          });
      }),
      Lt(["filter", "map", "takeWhile"], function(t, e) {
        var n = e + 1,
          r = 1 == n || 3 == n;
        ft.prototype[t] = function(t) {
          var e = this.clone();
          return (
            e.__iteratees__.push({ iteratee: si(t), type: n }),
            (e.__filtered__ = e.__filtered__ || r),
            e
          );
        };
      }),
      Lt(["head", "last"], function(t, e) {
        var n = "take" + (e ? "Right" : "");
        ft.prototype[t] = function() {
          return this[n](1).value()[0];
        };
      }),
      Lt(["initial", "tail"], function(t, e) {
        var n = "drop" + (e ? "" : "Right");
        ft.prototype[t] = function() {
          return this.__filtered__ ? new ft(this) : this[n](1);
        };
      }),
      (ft.prototype.compact = function() {
        return this.filter(N);
      }),
      (ft.prototype.find = function(t) {
        return this.filter(t).head();
      }),
      (ft.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }),
      (ft.prototype.invokeMap = ce(function(t, e) {
        return "function" == typeof t
          ? new ft(this)
          : this.map(function(n) {
              return Wl(n, t, e);
            });
      })),
      (ft.prototype.reject = function(t) {
        return this.filter(Ys(si(t)));
      }),
      (ft.prototype.slice = function(t, e) {
        t = L(t);
        var n = this;
        return n.__filtered__ && (t > 0 || e < 0)
          ? new ft(n)
          : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
            void 0 !== e &&
              (n = (e = L(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
            n);
      }),
      (ft.prototype.takeRightWhile = function(t) {
        return this.reverse()
          .takeWhile(t)
          .reverse();
      }),
      (ft.prototype.toArray = function() {
        return this.take(4294967295);
      }),
      gi(ft.prototype, function(t, e) {
        var n = /^(?:filter|find|map|reject)|While$/.test(e),
          r = /^(?:head|last)$/.test(e),
          o = jt[r ? "take" + ("last" == e ? "Right" : "") : e],
          i = r || /^find/.test(e);
        o &&
          (jt.prototype[e] = function() {
            var e = this.__wrapped__,
              a = r ? [1] : arguments,
              l = e instanceof ft,
              s = a[0],
              c = l || m(e),
              u = function(t) {
                var e = o.apply(jt, vn([t], a));
                return r && f ? e[0] : e;
              };
            c && n && "function" == typeof s && 1 != s.length && (l = c = !1);
            var f = this.__chain__,
              d = !!this.__actions__.length,
              p = i && !f,
              h = l && !d;
            if (!i && c) {
              e = h ? e : new ft(this);
              var b = t.apply(e, a);
              return (
                b.__actions__.push({ func: Uf, args: [u], thisArg: void 0 }),
                new vt(b, f)
              );
            }
            return p && h
              ? t.apply(this, a)
              : ((b = this.thru(u)), p ? (r ? b.value()[0] : b.value()) : b);
          });
      }),
      Lt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var e = fp[t],
          n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
          r = /^(?:pop|shift)$/.test(t);
        jt.prototype[t] = function() {
          var t = arguments;
          if (r && !this.__chain__) {
            var o = this.value();
            return e.apply(m(o) ? o : [], t);
          }
          return this[n](function(n) {
            return e.apply(m(n) ? n : [], t);
          });
        };
      }),
      gi(ft.prototype, function(t, e) {
        var n = jt[e];
        if (n) {
          var r = n.name + "";
          dp.call(ht, r) || (ht[r] = []), ht[r].push({ name: e, func: n });
        }
      }),
      (ht[Zt(void 0, 2).name] = [{ name: "wrapper", func: void 0 }]),
      (ft.prototype.clone = function() {
        var t = new ft(this.__wrapped__);
        return (
          (t.__actions__ = yt(this.__actions__)),
          (t.__dir__ = this.__dir__),
          (t.__filtered__ = this.__filtered__),
          (t.__iteratees__ = yt(this.__iteratees__)),
          (t.__takeCount__ = this.__takeCount__),
          (t.__views__ = yt(this.__views__)),
          t
        );
      }),
      (ft.prototype.reverse = function() {
        if (this.__filtered__) {
          var t = new ft(this);
          (t.__dir__ = -1), (t.__filtered__ = !0);
        } else (t = this.clone()).__dir__ *= -1;
        return t;
      }),
      (ft.prototype.value = function() {
        var t = this.__wrapped__.value(),
          e = this.__dir__,
          n = m(t),
          r = e < 0,
          o = n ? t.length : 0,
          i = (function(t, e, n) {
            for (var r = -1, o = n.length; ++r < o; ) {
              var i = n[r],
                a = i.size;
              switch (i.type) {
                case "drop":
                  t += a;
                  break;
                case "dropRight":
                  e -= a;
                  break;
                case "take":
                  e = cp(e, t + a);
                  break;
                case "takeRight":
                  t = sp(t, e - a);
              }
            }
            return { start: t, end: e };
          })(0, o, this.__views__),
          a = i.start,
          l = i.end,
          s = l - a,
          c = r ? l : a - 1,
          u = this.__iteratees__,
          f = u.length,
          d = 0,
          p = up(s, this.__takeCount__);
        if (!n || (!r && o == s && p == s)) return Xf(t, this.__actions__);
        var h = [];
        t: for (; s-- && d < p; ) {
          for (var b = -1, g = t[(c += e)]; ++b < f; ) {
            var v = u[b],
              y = v.iteratee,
              x = v.type,
              w = y(g);
            if (2 == x) g = w;
            else if (!w) {
              if (1 == x) continue t;
              break t;
            }
          }
          h[d++] = g;
        }
        return h;
      }),
      (jt.prototype.at = ip.at),
      (jt.prototype.chain = ip.wrapperChain),
      (jt.prototype.commit = ip.commit),
      (jt.prototype.next = ip.next),
      (jt.prototype.plant = ip.plant),
      (jt.prototype.reverse = ip.reverse),
      (jt.prototype.toJSON = jt.prototype.valueOf = jt.prototype.value =
        ip.value),
      (jt.prototype.first = jt.prototype.head),
      pp && (jt.prototype[pp] = ip.toIterator);
    var mp = jt;
    n.d(e, "add", function() {
      return k;
    }),
      n.d(e, "after", function() {
        return R;
      }),
      n.d(e, "ary", function() {
        return ee;
      }),
      n.d(e, "assign", function() {
        return Ne;
      }),
      n.d(e, "assignIn", function() {
        return Me;
      }),
      n.d(e, "assignInWith", function() {
        return Be;
      }),
      n.d(e, "assignWith", function() {
        return qe;
      }),
      n.d(e, "at", function() {
        return On;
      }),
      n.d(e, "attempt", function() {
        return Pn;
      }),
      n.d(e, "before", function() {
        return Ln;
      }),
      n.d(e, "bind", function() {
        return Nn;
      }),
      n.d(e, "bindAll", function() {
        return Dn;
      }),
      n.d(e, "bindKey", function() {
        return Fn;
      }),
      n.d(e, "camelCase", function() {
        return Cr;
      }),
      n.d(e, "capitalize", function() {
        return nr;
      }),
      n.d(e, "castArray", function() {
        return Tr;
      }),
      n.d(e, "ceil", function() {
        return Pr;
      }),
      n.d(e, "chain", function() {
        return Lr;
      }),
      n.d(e, "chunk", function() {
        return Dr;
      }),
      n.d(e, "clamp", function() {
        return Fr;
      }),
      n.d(e, "clone", function() {
        return Co;
      }),
      n.d(e, "cloneDeep", function() {
        return To;
      }),
      n.d(e, "cloneDeepWith", function() {
        return Ao;
      }),
      n.d(e, "cloneWith", function() {
        return zo;
      }),
      n.d(e, "commit", function() {
        return $o;
      }),
      n.d(e, "compact", function() {
        return Po;
      }),
      n.d(e, "concat", function() {
        return Lo;
      }),
      n.d(e, "cond", function() {
        return ci;
      }),
      n.d(e, "conforms", function() {
        return fi;
      }),
      n.d(e, "conformsTo", function() {
        return di;
      }),
      n.d(e, "constant", function() {
        return zt;
      }),
      n.d(e, "countBy", function() {
        return ki;
      }),
      n.d(e, "create", function() {
        return ji;
      }),
      n.d(e, "curry", function() {
        return Si;
      }),
      n.d(e, "curryRight", function() {
        return Ti;
      }),
      n.d(e, "debounce", function() {
        return Pi;
      }),
      n.d(e, "deburr", function() {
        return sr;
      }),
      n.d(e, "defaultTo", function() {
        return Li;
      }),
      n.d(e, "defaults", function() {
        return Di;
      }),
      n.d(e, "defaultsDeep", function() {
        return Hi;
      }),
      n.d(e, "defer", function() {
        return Gi;
      }),
      n.d(e, "delay", function() {
        return Zi;
      }),
      n.d(e, "difference", function() {
        return Ji;
      }),
      n.d(e, "differenceBy", function() {
        return Qi;
      }),
      n.d(e, "differenceWith", function() {
        return ta;
      }),
      n.d(e, "divide", function() {
        return ea;
      }),
      n.d(e, "drop", function() {
        return na;
      }),
      n.d(e, "dropRight", function() {
        return ra;
      }),
      n.d(e, "dropRightWhile", function() {
        return ia;
      }),
      n.d(e, "dropWhile", function() {
        return aa;
      }),
      n.d(e, "each", function() {
        return sa;
      }),
      n.d(e, "eachRight", function() {
        return da;
      }),
      n.d(e, "endsWith", function() {
        return pa;
      }),
      n.d(e, "entries", function() {
        return ba;
      }),
      n.d(e, "entriesIn", function() {
        return ga;
      }),
      n.d(e, "eq", function() {
        return re;
      }),
      n.d(e, "escape", function() {
        return xa;
      }),
      n.d(e, "escapeRegExp", function() {
        return ja;
      }),
      n.d(e, "every", function() {
        return Sa;
      }),
      n.d(e, "extend", function() {
        return Me;
      }),
      n.d(e, "extendWith", function() {
        return Be;
      }),
      n.d(e, "fill", function() {
        return Ca;
      }),
      n.d(e, "filter", function() {
        return Aa;
      }),
      n.d(e, "find", function() {
        return La;
      }),
      n.d(e, "findIndex", function() {
        return Pa;
      }),
      n.d(e, "findKey", function() {
        return Na;
      }),
      n.d(e, "findLast", function() {
        return Ma;
      }),
      n.d(e, "findLastIndex", function() {
        return Fa;
      }),
      n.d(e, "findLastKey", function() {
        return Ba;
      }),
      n.d(e, "first", function() {
        return qa;
      }),
      n.d(e, "flatMap", function() {
        return Ha;
      }),
      n.d(e, "flatMapDeep", function() {
        return Va;
      }),
      n.d(e, "flatMapDepth", function() {
        return Ga;
      }),
      n.d(e, "flatten", function() {
        return kn;
      }),
      n.d(e, "flattenDeep", function() {
        return Za;
      }),
      n.d(e, "flattenDepth", function() {
        return Xa;
      }),
      n.d(e, "flip", function() {
        return Ka;
      }),
      n.d(e, "floor", function() {
        return Ja;
      }),
      n.d(e, "flow", function() {
        return Qa;
      }),
      n.d(e, "flowRight", function() {
        return tl;
      }),
      n.d(e, "forEach", function() {
        return sa;
      }),
      n.d(e, "forEachRight", function() {
        return da;
      }),
      n.d(e, "forIn", function() {
        return el;
      }),
      n.d(e, "forInRight", function() {
        return nl;
      }),
      n.d(e, "forOwn", function() {
        return rl;
      }),
      n.d(e, "forOwnRight", function() {
        return ol;
      }),
      n.d(e, "fromPairs", function() {
        return il;
      }),
      n.d(e, "functions", function() {
        return ll;
      }),
      n.d(e, "functionsIn", function() {
        return sl;
      }),
      n.d(e, "get", function() {
        return gn;
      }),
      n.d(e, "groupBy", function() {
        return ul;
      }),
      n.d(e, "gt", function() {
        return pl;
      }),
      n.d(e, "gte", function() {
        return hl;
      }),
      n.d(e, "has", function() {
        return ml;
      }),
      n.d(e, "hasIn", function() {
        return oi;
      }),
      n.d(e, "head", function() {
        return qa;
      }),
      n.d(e, "identity", function() {
        return N;
      }),
      n.d(e, "inRange", function() {
        return xl;
      }),
      n.d(e, "includes", function() {
        return _l;
      }),
      n.d(e, "indexOf", function() {
        return El;
      }),
      n.d(e, "initial", function() {
        return Cl;
      }),
      n.d(e, "intersection", function() {
        return $l;
      }),
      n.d(e, "intersectionBy", function() {
        return Pl;
      }),
      n.d(e, "intersectionWith", function() {
        return Ll;
      }),
      n.d(e, "invert", function() {
        return Dl;
      }),
      n.d(e, "invertBy", function() {
        return Bl;
      }),
      n.d(e, "invoke", function() {
        return Ul;
      }),
      n.d(e, "invokeMap", function() {
        return Hl;
      }),
      n.d(e, "isArguments", function() {
        return we;
      }),
      n.d(e, "isArray", function() {
        return m;
      }),
      n.d(e, "isArrayBuffer", function() {
        return Gl;
      }),
      n.d(e, "isArrayLike", function() {
        return fe;
      }),
      n.d(e, "isArrayLikeObject", function() {
        return Fi;
      }),
      n.d(e, "isBoolean", function() {
        return Zl;
      }),
      n.d(e, "isBuffer", function() {
        return ke.a;
      }),
      n.d(e, "isDate", function() {
        return Kl;
      }),
      n.d(e, "isElement", function() {
        return Jl;
      }),
      n.d(e, "isEmpty", function() {
        return Ql;
      }),
      n.d(e, "isEqual", function() {
        return ts;
      }),
      n.d(e, "isEqualWith", function() {
        return es;
      }),
      n.d(e, "isError", function() {
        return $n;
      }),
      n.d(e, "isFinite", function() {
        return rs;
      }),
      n.d(e, "isFunction", function() {
        return D;
      }),
      n.d(e, "isInteger", function() {
        return os;
      }),
      n.d(e, "isLength", function() {
        return ue;
      }),
      n.d(e, "isMap", function() {
        return xo;
      }),
      n.d(e, "isMatch", function() {
        return is;
      }),
      n.d(e, "isMatchWith", function() {
        return as;
      }),
      n.d(e, "isNaN", function() {
        return ss;
      }),
      n.d(e, "isNative", function() {
        return fs;
      }),
      n.d(e, "isNil", function() {
        return ds;
      }),
      n.d(e, "isNull", function() {
        return ps;
      }),
      n.d(e, "isNumber", function() {
        return ls;
      }),
      n.d(e, "isObject", function() {
        return E;
      }),
      n.d(e, "isObjectLike", function() {
        return p;
      }),
      n.d(e, "isPlainObject", function() {
        return zn;
      }),
      n.d(e, "isRegExp", function() {
        return bs;
      }),
      n.d(e, "isSafeInteger", function() {
        return ms;
      }),
      n.d(e, "isSet", function() {
        return ko;
      }),
      n.d(e, "isString", function() {
        return wl;
      }),
      n.d(e, "isSymbol", function() {
        return h;
      }),
      n.d(e, "isTypedArray", function() {
        return Ee;
      }),
      n.d(e, "isUndefined", function() {
        return vs;
      }),
      n.d(e, "isWeakMap", function() {
        return ys;
      }),
      n.d(e, "isWeakSet", function() {
        return xs;
      }),
      n.d(e, "iteratee", function() {
        return ws;
      }),
      n.d(e, "join", function() {
        return js;
      }),
      n.d(e, "kebabCase", function() {
        return Os;
      }),
      n.d(e, "keyBy", function() {
        return _s;
      }),
      n.d(e, "keys", function() {
        return Le;
      }),
      n.d(e, "keysIn", function() {
        return Fe;
      }),
      n.d(e, "last", function() {
        return Yi;
      }),
      n.d(e, "lastIndexOf", function() {
        return Cs;
      }),
      n.d(e, "lodash", function() {
        return jt;
      }),
      n.d(e, "lowerCase", function() {
        return Ts;
      }),
      n.d(e, "lowerFirst", function() {
        return As;
      }),
      n.d(e, "lt", function() {
        return $s;
      }),
      n.d(e, "lte", function() {
        return Ps;
      }),
      n.d(e, "map", function() {
        return Ua;
      }),
      n.d(e, "mapKeys", function() {
        return Ls;
      }),
      n.d(e, "mapValues", function() {
        return Rs;
      }),
      n.d(e, "matches", function() {
        return Ns;
      }),
      n.d(e, "matchesProperty", function() {
        return Ds;
      }),
      n.d(e, "max", function() {
        return Fs;
      }),
      n.d(e, "maxBy", function() {
        return Ms;
      }),
      n.d(e, "mean", function() {
        return Ws;
      }),
      n.d(e, "meanBy", function() {
        return Us;
      }),
      n.d(e, "memoize", function() {
        return sn;
      }),
      n.d(e, "merge", function() {
        return Hs;
      }),
      n.d(e, "mergeWith", function() {
        return Ui;
      }),
      n.d(e, "method", function() {
        return Vs;
      }),
      n.d(e, "methodOf", function() {
        return Gs;
      }),
      n.d(e, "min", function() {
        return Zs;
      }),
      n.d(e, "minBy", function() {
        return Xs;
      }),
      n.d(e, "mixin", function() {
        return Ks;
      }),
      n.d(e, "multiply", function() {
        return Js;
      }),
      n.d(e, "negate", function() {
        return Ys;
      }),
      n.d(e, "next", function() {
        return ec;
      }),
      n.d(e, "noop", function() {
        return dt;
      }),
      n.d(e, "now", function() {
        return Ai;
      }),
      n.d(e, "nth", function() {
        return rc;
      }),
      n.d(e, "nthArg", function() {
        return oc;
      }),
      n.d(e, "omit", function() {
        return lc;
      }),
      n.d(e, "omitBy", function() {
        return fc;
      }),
      n.d(e, "once", function() {
        return dc;
      }),
      n.d(e, "orderBy", function() {
        return bc;
      }),
      n.d(e, "over", function() {
        return mc;
      }),
      n.d(e, "overArgs", function() {
        return xc;
      }),
      n.d(e, "overEvery", function() {
        return wc;
      }),
      n.d(e, "overSome", function() {
        return kc;
      }),
      n.d(e, "pad", function() {
        return Fc;
      }),
      n.d(e, "padEnd", function() {
        return Mc;
      }),
      n.d(e, "padStart", function() {
        return Bc;
      }),
      n.d(e, "parseInt", function() {
        return Uc;
      }),
      n.d(e, "partial", function() {
        return Vc;
      }),
      n.d(e, "partialRight", function() {
        return Kc;
      }),
      n.d(e, "partition", function() {
        return Jc;
      }),
      n.d(e, "pick", function() {
        return Yc;
      }),
      n.d(e, "pickBy", function() {
        return uc;
      }),
      n.d(e, "plant", function() {
        return Qc;
      }),
      n.d(e, "property", function() {
        return li;
      }),
      n.d(e, "propertyOf", function() {
        return tu;
      }),
      n.d(e, "pull", function() {
        return iu;
      }),
      n.d(e, "pullAll", function() {
        return ou;
      }),
      n.d(e, "pullAllBy", function() {
        return au;
      }),
      n.d(e, "pullAllWith", function() {
        return lu;
      }),
      n.d(e, "pullAt", function() {
        return uu;
      }),
      n.d(e, "random", function() {
        return mu;
      }),
      n.d(e, "range", function() {
        return wu;
      }),
      n.d(e, "rangeRight", function() {
        return ku;
      }),
      n.d(e, "rearg", function() {
        return ju;
      }),
      n.d(e, "reduce", function() {
        return _u;
      }),
      n.d(e, "reduceRight", function() {
        return Eu;
      }),
      n.d(e, "reject", function() {
        return Cu;
      }),
      n.d(e, "remove", function() {
        return Tu;
      }),
      n.d(e, "repeat", function() {
        return Au;
      }),
      n.d(e, "replace", function() {
        return zu;
      }),
      n.d(e, "rest", function() {
        return $u;
      }),
      n.d(e, "result", function() {
        return Pu;
      }),
      n.d(e, "reverse", function() {
        return Ru;
      }),
      n.d(e, "round", function() {
        return Nu;
      }),
      n.d(e, "sample", function() {
        return Iu;
      }),
      n.d(e, "sampleSize", function() {
        return Mu;
      }),
      n.d(e, "set", function() {
        return Bu;
      }),
      n.d(e, "setWith", function() {
        return qu;
      }),
      n.d(e, "shuffle", function() {
        return Wu;
      }),
      n.d(e, "size", function() {
        return Uu;
      }),
      n.d(e, "slice", function() {
        return Hu;
      }),
      n.d(e, "snakeCase", function() {
        return Vu;
      }),
      n.d(e, "some", function() {
        return Zu;
      }),
      n.d(e, "sortBy", function() {
        return Xu;
      }),
      n.d(e, "sortedIndex", function() {
        return tf;
      }),
      n.d(e, "sortedIndexBy", function() {
        return ef;
      }),
      n.d(e, "sortedIndexOf", function() {
        return nf;
      }),
      n.d(e, "sortedLastIndex", function() {
        return rf;
      }),
      n.d(e, "sortedLastIndexBy", function() {
        return of;
      }),
      n.d(e, "sortedLastIndexOf", function() {
        return af;
      }),
      n.d(e, "sortedUniq", function() {
        return sf;
      }),
      n.d(e, "sortedUniqBy", function() {
        return cf;
      }),
      n.d(e, "split", function() {
        return uf;
      }),
      n.d(e, "spread", function() {
        return df;
      }),
      n.d(e, "startCase", function() {
        return pf;
      }),
      n.d(e, "startsWith", function() {
        return hf;
      }),
      n.d(e, "stubArray", function() {
        return Hr;
      }),
      n.d(e, "stubFalse", function() {
        return cs.a;
      }),
      n.d(e, "stubObject", function() {
        return bf;
      }),
      n.d(e, "stubString", function() {
        return gf;
      }),
      n.d(e, "stubTrue", function() {
        return mf;
      }),
      n.d(e, "subtract", function() {
        return vf;
      }),
      n.d(e, "sum", function() {
        return yf;
      }),
      n.d(e, "sumBy", function() {
        return xf;
      }),
      n.d(e, "tail", function() {
        return wf;
      }),
      n.d(e, "take", function() {
        return kf;
      }),
      n.d(e, "takeRight", function() {
        return jf;
      }),
      n.d(e, "takeRightWhile", function() {
        return Of;
      }),
      n.d(e, "takeWhile", function() {
        return _f;
      }),
      n.d(e, "tap", function() {
        return Sf;
      }),
      n.d(e, "template", function() {
        return qf;
      }),
      n.d(e, "templateSettings", function() {
        return Pf;
      }),
      n.d(e, "throttle", function() {
        return Wf;
      }),
      n.d(e, "thru", function() {
        return Uf;
      }),
      n.d(e, "times", function() {
        return Gf;
      }),
      n.d(e, "toArray", function() {
        return tc;
      }),
      n.d(e, "toFinite", function() {
        return P;
      }),
      n.d(e, "toInteger", function() {
        return L;
      }),
      n.d(e, "toIterator", function() {
        return Zf;
      }),
      n.d(e, "toJSON", function() {
        return Kf;
      }),
      n.d(e, "toLength", function() {
        return Ea;
      }),
      n.d(e, "toLower", function() {
        return Jf;
      }),
      n.d(e, "toNumber", function() {
        return $;
      }),
      n.d(e, "toPairs", function() {
        return ba;
      }),
      n.d(e, "toPairsIn", function() {
        return ga;
      }),
      n.d(e, "toPath", function() {
        return Yf;
      }),
      n.d(e, "toPlainObject", function() {
        return Bi;
      }),
      n.d(e, "toSafeInteger", function() {
        return td;
      }),
      n.d(e, "toString", function() {
        return dn;
      }),
      n.d(e, "toUpper", function() {
        return ed;
      }),
      n.d(e, "transform", function() {
        return nd;
      }),
      n.d(e, "trim", function() {
        return id;
      }),
      n.d(e, "trimEnd", function() {
        return ad;
      }),
      n.d(e, "trimStart", function() {
        return sd;
      }),
      n.d(e, "truncate", function() {
        return ud;
      }),
      n.d(e, "unary", function() {
        return fd;
      }),
      n.d(e, "unescape", function() {
        return bd;
      }),
      n.d(e, "union", function() {
        return vd;
      }),
      n.d(e, "unionBy", function() {
        return yd;
      }),
      n.d(e, "unionWith", function() {
        return xd;
      }),
      n.d(e, "uniq", function() {
        return wd;
      }),
      n.d(e, "uniqBy", function() {
        return kd;
      }),
      n.d(e, "uniqWith", function() {
        return jd;
      }),
      n.d(e, "uniqueId", function() {
        return _d;
      }),
      n.d(e, "unset", function() {
        return Sd;
      }),
      n.d(e, "unzip", function() {
        return Cd;
      }),
      n.d(e, "unzipWith", function() {
        return Td;
      }),
      n.d(e, "update", function() {
        return zd;
      }),
      n.d(e, "updateWith", function() {
        return $d;
      }),
      n.d(e, "upperCase", function() {
        return Pd;
      }),
      n.d(e, "upperFirst", function() {
        return er;
      }),
      n.d(e, "value", function() {
        return Kf;
      }),
      n.d(e, "valueOf", function() {
        return Kf;
      }),
      n.d(e, "values", function() {
        return jl;
      }),
      n.d(e, "valuesIn", function() {
        return Ld;
      }),
      n.d(e, "without", function() {
        return Rd;
      }),
      n.d(e, "words", function() {
        return _r;
      }),
      n.d(e, "wrap", function() {
        return Nd;
      }),
      n.d(e, "wrapperAt", function() {
        return Dd;
      }),
      n.d(e, "wrapperChain", function() {
        return Id;
      }),
      n.d(e, "wrapperCommit", function() {
        return $o;
      }),
      n.d(e, "wrapperLodash", function() {
        return jt;
      }),
      n.d(e, "wrapperNext", function() {
        return ec;
      }),
      n.d(e, "wrapperPlant", function() {
        return Qc;
      }),
      n.d(e, "wrapperReverse", function() {
        return Fd;
      }),
      n.d(e, "wrapperToIterator", function() {
        return Zf;
      }),
      n.d(e, "wrapperValue", function() {
        return Kf;
      }),
      n.d(e, "xor", function() {
        return Bd;
      }),
      n.d(e, "xorBy", function() {
        return qd;
      }),
      n.d(e, "xorWith", function() {
        return Wd;
      }),
      n.d(e, "zip", function() {
        return Ud;
      }),
      n.d(e, "zipObject", function() {
        return Vd;
      }),
      n.d(e, "zipObjectDeep", function() {
        return Gd;
      }),
      n.d(e, "zipWith", function() {
        return Zd;
      }),
      n.d(e, "default", function() {
        return mp;
      });
  },
  ,
  function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "Val", function() {
        return i;
      }),
      n.d(e, "combine", function() {
        return a;
      }),
      n.d(e, "createSideEffectBinder", function() {
        return c;
      }),
      n.d(e, "enhanceVal", function() {
        return s;
      }),
      n.d(e, "withValueEnhancer", function() {
        return l;
      });
    var r = Object.defineProperty,
      o =
        (n(50),
        (t, e, n) => (
          ((t, e, n) => {
            e in t
              ? r(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n
                })
              : (t[e] = n);
          })(t, "symbol" != typeof e ? e + "" : e, n),
          n
        ));
    class i {
      constructor(t, e) {
        o(this, "_value"),
          o(this, "_beforeDestroys"),
          o(this, "_subscribers"),
          (this._value = t),
          e && (this.compare = e);
      }
      get value() {
        return this._value;
      }
      setValue(t, e) {
        if (!this.compare(t, this._value)) {
          const n = this._value;
          (this._value = t),
            this._subscribers && this._subscribers.forEach(r => r(t, n, e));
        }
      }
      reaction(t) {
        return (
          this._subscribers || (this._subscribers = new Set()),
          this._subscribers.add(t),
          () => {
            this._subscribers && this._subscribers.delete(t);
          }
        );
      }
      subscribe(t, e) {
        const n = this.reaction(t);
        return t(this._value, void 0, e), n;
      }
      derive(t, e, n) {
        const r = new i(t(this.value, void 0, n), e),
          o = this.reaction((e, n, o) => {
            r.setValue(t(e, n, o));
          });
        return r.addBeforeDestroy(o), r;
      }
      destroy() {
        this._beforeDestroys &&
          (this._beforeDestroys.forEach(t => t()),
          this._beforeDestroys.clear()),
          this._subscribers && this._subscribers.clear();
      }
      addBeforeDestroy(t) {
        return (
          this._beforeDestroys || (this._beforeDestroys = new Set()),
          this._beforeDestroys.add(t),
          () => {
            this._beforeDestroys && this._beforeDestroys.delete(t);
          }
        );
      }
      compare(t, e) {
        return t === e;
      }
    }
    function a(t, e, n, r) {
      let o = t.map(t => t.value);
      const a = new i(e(o, void 0, r), n);
      return (
        t.forEach((t, n) => {
          const r = t.reaction((t, r) => {
            const i = o.slice();
            i[n] = t;
            const l = o;
            (o = i), a.setValue(e(i, l, r), r);
          });
          a.addBeforeDestroy(r);
        }),
        a
      );
    }
    function l(t, e) {
      Object.keys(e).forEach(n => {
        s(t, n, e[n]);
      });
    }
    function s(t, e, n) {
      var r;
      Object.defineProperties(t, {
        [e]: { get: () => n.value },
        [`_${e}$`]: { value: n },
        [`set${((r = e), r[0].toUpperCase() + r.slice(1))}`]: {
          value: (t, e) => n.setValue(t, e)
        }
      });
    }
    function c(t) {
      const e = e => {
        const n = t.addDisposer(() => {
          e.destroy();
        });
        return (
          e.addBeforeDestroy(() => {
            t.remove(n);
          }),
          e
        );
      };
      return {
        bindSideEffect: e,
        combine: (t, n, r, o) => e(a(t, n, r, o)),
        createVal: (t, n) => e(new i(t, n))
      };
    }
  },
  function(t, e) {
    t.exports = function(t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.tStore = e.PLACEHOLDER_T = e.langStore = e.pi18n = e.i18n = void 0);
    var r = n(79),
      o = c(n(92)),
      i = n(77),
      a = c(n(88)),
      l = c(n(89)),
      s = c(n(90));
    function c(t) {
      return t && t.__esModule ? t : { default: t };
    }
    const u = window._cyxy_i18next || (window._cyxy_i18next = o.default);
    e.i18n = u;
    const f =
      window._cyxy_pi18next ||
      (window._cyxy_pi18next = u
        .init({
          lng: (0, i.detectLanguage)(),
          debug: !1,
          whitelist: ["en", "zh-CN", "zh-TW"],
          saveMissing: !1,
          load: "currentOnly",
          resources: {
            en: { translation: a.default },
            "zh-CN": { translation: l.default },
            "zh-TW": { translation: s.default }
          }
        })
        .then(() => u));
    e.pi18n = f;
    const d = (0, r.readable)(u.language, t => {
      const e = () => t(u.language);
      return u.on("languageChanged", e), () => u.off("languageChanged", e);
    });
    e.langStore = d;
    const p = () => "";
    e.PLACEHOLDER_T = p;
    const h = (0, r.readable)(p, t => {
      let e = !1;
      f.then(n => {
        e || t(n.t);
      });
      const n = () => {
        t(u.t);
      };
      return (
        u.on("languageChanged", n),
        () => {
          (e = !0), u.off("languageChanged", n);
        }
      );
    });
    e.tStore = h;
  },
  ,
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.firebasePageView = function(t) {
        (0, r.reportPageview)(t),
          (0, o.cyxyCollectEvent)("predefinePageView", {
            url: t,
            url_path: t,
            time: Date.now()
          });
      }),
      (e.firebaseEvent = async function(...t) {
        t.forEach(t => {
          (0, o.cyxyCollectEvent)(t.name, t.params);
          const e = { category: "firebase", action: t.name };
          if (t.params) {
            const n = Object.values(t.params)[0];
            null != n && (e.label = n);
          }
          (0, r.reportEvent)(e);
        });
      });
    var r = n(51),
      o = n(44);
  },
  ,
  ,
  function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
      return function() {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return t.apply(e, n);
      };
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(8);
    function o(t) {
      return encodeURIComponent(t)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    t.exports = function(t, e, n) {
      if (!e) return t;
      var i;
      if (n) i = n(e);
      else if (r.isURLSearchParams(e)) i = e.toString();
      else {
        var a = [];
        r.forEach(e, function(t, e) {
          null != t &&
            (r.isArray(t) ? (e += "[]") : (t = [t]),
            r.forEach(t, function(t) {
              r.isDate(t)
                ? (t = t.toISOString())
                : r.isObject(t) && (t = JSON.stringify(t)),
                a.push(o(e) + "=" + o(t));
            }));
        }),
          (i = a.join("&"));
      }
      if (i) {
        var l = t.indexOf("#");
        -1 !== l && (t = t.slice(0, l)),
          (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
      }
      return t;
    };
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t) {
      return !(!t || !t.__CANCEL__);
    };
  },
  function(t, e, n) {
    "use strict";
    (function(e) {
      var r = n(8),
        o = n(65),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(t, e) {
        !r.isUndefined(t) &&
          r.isUndefined(t["Content-Type"]) &&
          (t["Content-Type"] = e);
      }
      var l,
        s = {
          adapter:
            ("undefined" != typeof XMLHttpRequest
              ? (l = n(37))
              : void 0 !== e &&
                "[object process]" === Object.prototype.toString.call(e) &&
                (l = n(37)),
            l),
          transformRequest: [
            function(t, e) {
              return (
                o(e, "Accept"),
                o(e, "Content-Type"),
                r.isFormData(t) ||
                r.isArrayBuffer(t) ||
                r.isBuffer(t) ||
                r.isStream(t) ||
                r.isFile(t) ||
                r.isBlob(t)
                  ? t
                  : r.isArrayBufferView(t)
                  ? t.buffer
                  : r.isURLSearchParams(t)
                  ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"),
                    t.toString())
                  : r.isObject(t)
                  ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t))
                  : t
              );
            }
          ],
          transformResponse: [
            function(t) {
              if ("string" == typeof t)
                try {
                  t = JSON.parse(t);
                } catch (t) {}
              return t;
            }
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function(t) {
            return t >= 200 && t < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } }
        };
      r.forEach(["delete", "get", "head"], function(t) {
        s.headers[t] = {};
      }),
        r.forEach(["post", "put", "patch"], function(t) {
          s.headers[t] = r.merge(i);
        }),
        (t.exports = s);
    }.call(this, n(41)));
  },
  function(t, e, n) {
    "use strict";
    var r = n(8),
      o = n(66),
      i = n(68),
      a = n(34),
      l = n(69),
      s = n(72),
      c = n(73),
      u = n(38);
    t.exports = function(t) {
      return new Promise(function(e, n) {
        var f = t.data,
          d = t.headers;
        r.isFormData(f) && delete d["Content-Type"];
        var p = new XMLHttpRequest();
        if (t.auth) {
          var h = t.auth.username || "",
            b = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          d.Authorization = "Basic " + btoa(h + ":" + b);
        }
        var g = l(t.baseURL, t.url);
        if (
          (p.open(
            t.method.toUpperCase(),
            a(g, t.params, t.paramsSerializer),
            !0
          ),
          (p.timeout = t.timeout),
          (p.onreadystatechange = function() {
            if (
              p &&
              4 === p.readyState &&
              (0 !== p.status ||
                (p.responseURL && 0 === p.responseURL.indexOf("file:")))
            ) {
              var r =
                  "getAllResponseHeaders" in p
                    ? s(p.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    t.responseType && "text" !== t.responseType
                      ? p.response
                      : p.responseText,
                  status: p.status,
                  statusText: p.statusText,
                  headers: r,
                  config: t,
                  request: p
                };
              o(e, n, i), (p = null);
            }
          }),
          (p.onabort = function() {
            p && (n(u("Request aborted", t, "ECONNABORTED", p)), (p = null));
          }),
          (p.onerror = function() {
            n(u("Network Error", t, null, p)), (p = null);
          }),
          (p.ontimeout = function() {
            var e = "timeout of " + t.timeout + "ms exceeded";
            t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
              n(u(e, t, "ECONNABORTED", p)),
              (p = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var m =
            (t.withCredentials || c(g)) && t.xsrfCookieName
              ? i.read(t.xsrfCookieName)
              : void 0;
          m && (d[t.xsrfHeaderName] = m);
        }
        if (
          ("setRequestHeader" in p &&
            r.forEach(d, function(t, e) {
              void 0 === f && "content-type" === e.toLowerCase()
                ? delete d[e]
                : p.setRequestHeader(e, t);
            }),
          r.isUndefined(t.withCredentials) ||
            (p.withCredentials = !!t.withCredentials),
          t.responseType)
        )
          try {
            p.responseType = t.responseType;
          } catch (e) {
            if ("json" !== t.responseType) throw e;
          }
        "function" == typeof t.onDownloadProgress &&
          p.addEventListener("progress", t.onDownloadProgress),
          "function" == typeof t.onUploadProgress &&
            p.upload &&
            p.upload.addEventListener("progress", t.onUploadProgress),
          t.cancelToken &&
            t.cancelToken.promise.then(function(t) {
              p && (p.abort(), n(t), (p = null));
            }),
          f || (f = null),
          p.send(f);
      });
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(67);
    t.exports = function(t, e, n, o, i) {
      var a = new Error(t);
      return r(a, e, n, o, i);
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = function(t, e) {
      e = e || {};
      var n = {},
        o = ["url", "method", "data"],
        i = ["headers", "auth", "proxy", "params"],
        a = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding"
        ],
        l = ["validateStatus"];
      function s(t, e) {
        return r.isPlainObject(t) && r.isPlainObject(e)
          ? r.merge(t, e)
          : r.isPlainObject(e)
          ? r.merge({}, e)
          : r.isArray(e)
          ? e.slice()
          : e;
      }
      function c(o) {
        r.isUndefined(e[o])
          ? r.isUndefined(t[o]) || (n[o] = s(void 0, t[o]))
          : (n[o] = s(t[o], e[o]));
      }
      r.forEach(o, function(t) {
        r.isUndefined(e[t]) || (n[t] = s(void 0, e[t]));
      }),
        r.forEach(i, c),
        r.forEach(a, function(o) {
          r.isUndefined(e[o])
            ? r.isUndefined(t[o]) || (n[o] = s(void 0, t[o]))
            : (n[o] = s(void 0, e[o]));
        }),
        r.forEach(l, function(r) {
          r in e ? (n[r] = s(t[r], e[r])) : r in t && (n[r] = s(void 0, t[r]));
        });
      var u = o
          .concat(i)
          .concat(a)
          .concat(l),
        f = Object.keys(t)
          .concat(Object.keys(e))
          .filter(function(t) {
            return -1 === u.indexOf(t);
          });
      return r.forEach(f, c), n;
    };
  },
  function(t, e, n) {
    "use strict";
    function r(t) {
      this.message = t;
    }
    (r.prototype.toString = function() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (r.prototype.__CANCEL__ = !0),
      (t.exports = r);
  },
  function(t, e) {
    var n,
      r,
      o = (t.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function l(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function() {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    })();
    var s,
      c = [],
      u = !1,
      f = -1;
    function d() {
      u &&
        s &&
        ((u = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && p());
    }
    function p() {
      if (!u) {
        var t = l(d);
        u = !0;
        for (var e = c.length; e; ) {
          for (s = c, c = []; ++f < e; ) s && s[f].run();
          (f = -1), (e = c.length);
        }
        (s = null),
          (u = !1),
          (function(t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }
    function h(t, e) {
      (this.fun = t), (this.array = e);
    }
    function b() {}
    (o.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      c.push(new h(t, e)), 1 !== c.length || u || l(p);
    }),
      (h.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = b),
      (o.addListener = b),
      (o.once = b),
      (o.off = b),
      (o.removeListener = b),
      (o.removeAllListeners = b),
      (o.emit = b),
      (o.prependListener = b),
      (o.prependOnceListener = b),
      (o.listeners = function(t) {
        return [];
      }),
      (o.binding = function(t) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function() {
        return "/";
      }),
      (o.chdir = function(t) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function() {
        return 0;
      });
  },
  ,
  ,
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.setupVolcengine = function() {
        const t = new r.StorageVal("local", "uid"),
          e = window,
          i = "cyxyCollectEvent";
        if (((e.TeaAnalyticsObject = i), !e[i])) {
          function a() {
            a.q.push(arguments);
          }
          (a.q = a.q || []), (e[i] = a);
        }
        (e[i].l = +new Date()),
          n.e(2).then(n.t.bind(null, 97, 7)),
          window.cyxyCollectEvent("init", {
            debug: !0,
            app_id: 254266,
            channel: "cn",
            autotrack: !1,
            enable_stay_duration: !1,
            disable_auto_pv: !0,
            disable_session: !0
          }),
          window.cyxyCollectEvent("config", {
            app_version: browser.runtime.getManifest().version,
            evtParams: { userType: "??????" }
          }),
          t.subscribe(t => {
            t && o("config", { user_unique_id: t });
          }),
          window.cyxyCollectEvent("start");
      }),
      (e.cyxyCollectEvent = e.setupVolcengineBackgroundListener = void 0);
    var r = n(23);
    e.setupVolcengineBackgroundListener = () => {
      browser.runtime.onMessage.addListener(t => {
        if (t && "VolcengineCollectEvent" === t.type)
          return (
            window.cyxyCollectEvent.apply(window, t.args), Promise.resolve()
          );
      });
    };
    const o = (...t) =>
      window.cyxyCollectEvent
        ? window.cyxyCollectEvent.apply(window, t)
        : browser.runtime.sendMessage({
            type: "VolcengineCollectEvent",
            args: t
          });
    e.cyxyCollectEvent = o;
  },
  ,
  ,
  ,
  ,
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getLocalStorageKey = a),
      (e.localStorageGet = function(t, e, n) {
        const r = a(t, e);
        try {
          const e = window.localStorage.getItem(r);
          if (null != e) return JSON.parse(e);
          void 0 !== n && window.localStorage.setItem(r, JSON.stringify(n));
        } catch (t) {}
        return n;
      }),
      (e.localStorageSet = function(t, e, n) {
        const r = a(t, e);
        try {
          window.localStorage.setItem(r, JSON.stringify(n));
        } catch (t) {}
      }),
      (e.getLocalStorageVal = function(t, e, n) {
        const l = a(t, e);
        if (i.has(l)) return i.get(l);
        const s = new r.Val(n, o.isEqual);
        try {
          const e = window.localStorage.getItem(l);
          null != e
            ? s.setValue(JSON.parse(e))
            : void 0 !== n && window.localStorage.setItem(l, JSON.stringify(n));
        } catch (t) {}
        return (
          s.reaction(t => {
            try {
              window.localStorage.setItem(l, JSON.stringify(t));
            } catch (t) {}
          }),
          i.set(l, s),
          s
        );
      });
    var r = n(26),
      o = n(24);
    const i = new Map();
    function a(t, e) {
      return `${t}#${e}`;
    }
  },
  function(t, e) {
    function n(t) {
      var e = new Error("Cannot find module '" + t + "'");
      throw ((e.code = "MODULE_NOT_FOUND"), e);
    }
    (n.keys = function() {
      return [];
    }),
      (n.resolve = n),
      (t.exports = n),
      (n.id = 50);
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.reportPageview = async function(t, e) {
        const n = {
          t: "pageview",
          dp: t,
          de: "UTF-8",
          dl: document.location.href,
          sd: screen.colorDepth + "-bit",
          sr: screen.width + "x" + screen.height,
          ul: "zh-cn"
        };
        e && (n.tid = e);
        try {
          await u(n);
        } catch (t) {}
      }),
      (e.reportEvent = async function(t, e) {
        const n = { t: "event", ec: t.category, ea: t.action };
        null != t.label && (n.el = t.label),
          null != t.value && (n.ev = t.value),
          e && (n.tid = e);
        try {
          await u(n);
        } catch (t) {}
      });
    var r,
      o = n(52),
      i = (r = n(59)) && r.__esModule ? r : { default: r },
      a = n(23);
    const l = navigator.userAgent.includes("Firefox"),
      s = /apple/i.test(navigator.vendor),
      c = new a.StorageVal("local", "uid");
    async function u(t) {
      if (l || s) {
        const { isEnableGa: t = !1 } = await browser.storage.sync.get({
          isEnableGa: !0
        });
        if (!1 === t) return;
      }
      let e = "cyxy-anonymous";
      return (
        c.value || (await c.ready, c.value && (e = c.value)),
        (0, i.default)({
          url: "https://www.google-analytics.com/collect",
          method: "post",
          headers: { "content-type": "text/plain;charset=UTF-8" },
          data: new URLSearchParams({
            v: "1",
            tid: "UA-83184075-2",
            cid: e,
            z: (0, o.v4)(),
            ...t
          })
        })
      );
    }
  },
  function(t, e, n) {
    "use strict";
    var r;
    n.r(e);
    var o = new Uint8Array(16);
    function i() {
      if (
        !r &&
        !(r =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      return r(o);
    }
    for (
      var a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        l = function(t) {
          return "string" == typeof t && a.test(t);
        },
        s = [],
        c = 0;
      c < 256;
      ++c
    )
      s.push((c + 256).toString(16).substr(1));
    var u,
      f,
      d = function(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (
            s[t[e + 0]] +
            s[t[e + 1]] +
            s[t[e + 2]] +
            s[t[e + 3]] +
            "-" +
            s[t[e + 4]] +
            s[t[e + 5]] +
            "-" +
            s[t[e + 6]] +
            s[t[e + 7]] +
            "-" +
            s[t[e + 8]] +
            s[t[e + 9]] +
            "-" +
            s[t[e + 10]] +
            s[t[e + 11]] +
            s[t[e + 12]] +
            s[t[e + 13]] +
            s[t[e + 14]] +
            s[t[e + 15]]
          ).toLowerCase();
        if (!l(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      },
      p = 0,
      h = 0,
      b = function(t, e, n) {
        var r = (e && n) || 0,
          o = e || new Array(16),
          a = (t = t || {}).node || u,
          l = void 0 !== t.clockseq ? t.clockseq : f;
        if (null == a || null == l) {
          var s = t.random || (t.rng || i)();
          null == a && (a = u = [1 | s[0], s[1], s[2], s[3], s[4], s[5]]),
            null == l && (l = f = 16383 & ((s[6] << 8) | s[7]));
        }
        var c = void 0 !== t.msecs ? t.msecs : Date.now(),
          b = void 0 !== t.nsecs ? t.nsecs : h + 1,
          g = c - p + (b - h) / 1e4;
        if (
          (g < 0 && void 0 === t.clockseq && (l = (l + 1) & 16383),
          (g < 0 || c > p) && void 0 === t.nsecs && (b = 0),
          b >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (p = c), (h = b), (f = l);
        var m = (1e4 * (268435455 & (c += 122192928e5)) + b) % 4294967296;
        (o[r++] = (m >>> 24) & 255),
          (o[r++] = (m >>> 16) & 255),
          (o[r++] = (m >>> 8) & 255),
          (o[r++] = 255 & m);
        var v = ((c / 4294967296) * 1e4) & 268435455;
        (o[r++] = (v >>> 8) & 255),
          (o[r++] = 255 & v),
          (o[r++] = ((v >>> 24) & 15) | 16),
          (o[r++] = (v >>> 16) & 255),
          (o[r++] = (l >>> 8) | 128),
          (o[r++] = 255 & l);
        for (var y = 0; y < 6; ++y) o[r + y] = a[y];
        return e || d(o);
      },
      g = function(t) {
        if (!l(t)) throw TypeError("Invalid UUID");
        var e,
          n = new Uint8Array(16);
        return (
          (n[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
          (n[1] = (e >>> 16) & 255),
          (n[2] = (e >>> 8) & 255),
          (n[3] = 255 & e),
          (n[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
          (n[5] = 255 & e),
          (n[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
          (n[7] = 255 & e),
          (n[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
          (n[9] = 255 & e),
          (n[10] = ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
          (n[11] = (e / 4294967296) & 255),
          (n[12] = (e >>> 24) & 255),
          (n[13] = (e >>> 16) & 255),
          (n[14] = (e >>> 8) & 255),
          (n[15] = 255 & e),
          n
        );
      },
      m = function(t, e, n) {
        function r(t, r, o, i) {
          if (
            ("string" == typeof t &&
              (t = (function(t) {
                t = unescape(encodeURIComponent(t));
                for (var e = [], n = 0; n < t.length; ++n)
                  e.push(t.charCodeAt(n));
                return e;
              })(t)),
            "string" == typeof r && (r = g(r)),
            16 !== r.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)"
            );
          var a = new Uint8Array(16 + t.length);
          if (
            (a.set(r),
            a.set(t, r.length),
            ((a = n(a))[6] = (15 & a[6]) | e),
            (a[8] = (63 & a[8]) | 128),
            o)
          ) {
            i = i || 0;
            for (var l = 0; l < 16; ++l) o[i + l] = a[l];
            return o;
          }
          return d(a);
        }
        try {
          r.name = t;
        } catch (t) {}
        return (
          (r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
          (r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
          r
        );
      };
    function v(t) {
      return 14 + (((t + 64) >>> 9) << 4) + 1;
    }
    function y(t, e) {
      var n = (65535 & t) + (65535 & e);
      return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
    }
    function x(t, e, n, r, o, i) {
      return y(((a = y(y(e, t), y(r, i))) << (l = o)) | (a >>> (32 - l)), n);
      var a, l;
    }
    function w(t, e, n, r, o, i, a) {
      return x((e & n) | (~e & r), t, e, o, i, a);
    }
    function k(t, e, n, r, o, i, a) {
      return x((e & r) | (n & ~r), t, e, o, i, a);
    }
    function j(t, e, n, r, o, i, a) {
      return x(e ^ n ^ r, t, e, o, i, a);
    }
    function O(t, e, n, r, o, i, a) {
      return x(n ^ (e | ~r), t, e, o, i, a);
    }
    var _ = m("v3", 48, function(t) {
        if ("string" == typeof t) {
          var e = unescape(encodeURIComponent(t));
          t = new Uint8Array(e.length);
          for (var n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n);
        }
        return (function(t) {
          for (var e = [], n = 32 * t.length, r = 0; r < n; r += 8) {
            var o = (t[r >> 5] >>> r % 32) & 255,
              i = parseInt(
                "0123456789abcdef".charAt((o >>> 4) & 15) +
                  "0123456789abcdef".charAt(15 & o),
                16
              );
            e.push(i);
          }
          return e;
        })(
          (function(t, e) {
            (t[e >> 5] |= 128 << e % 32), (t[v(e) - 1] = e);
            for (
              var n = 1732584193,
                r = -271733879,
                o = -1732584194,
                i = 271733878,
                a = 0;
              a < t.length;
              a += 16
            ) {
              var l = n,
                s = r,
                c = o,
                u = i;
              (n = w(n, r, o, i, t[a], 7, -680876936)),
                (i = w(i, n, r, o, t[a + 1], 12, -389564586)),
                (o = w(o, i, n, r, t[a + 2], 17, 606105819)),
                (r = w(r, o, i, n, t[a + 3], 22, -1044525330)),
                (n = w(n, r, o, i, t[a + 4], 7, -176418897)),
                (i = w(i, n, r, o, t[a + 5], 12, 1200080426)),
                (o = w(o, i, n, r, t[a + 6], 17, -1473231341)),
                (r = w(r, o, i, n, t[a + 7], 22, -45705983)),
                (n = w(n, r, o, i, t[a + 8], 7, 1770035416)),
                (i = w(i, n, r, o, t[a + 9], 12, -1958414417)),
                (o = w(o, i, n, r, t[a + 10], 17, -42063)),
                (r = w(r, o, i, n, t[a + 11], 22, -1990404162)),
                (n = w(n, r, o, i, t[a + 12], 7, 1804603682)),
                (i = w(i, n, r, o, t[a + 13], 12, -40341101)),
                (o = w(o, i, n, r, t[a + 14], 17, -1502002290)),
                (n = k(
                  n,
                  (r = w(r, o, i, n, t[a + 15], 22, 1236535329)),
                  o,
                  i,
                  t[a + 1],
                  5,
                  -165796510
                )),
                (i = k(i, n, r, o, t[a + 6], 9, -1069501632)),
                (o = k(o, i, n, r, t[a + 11], 14, 643717713)),
                (r = k(r, o, i, n, t[a], 20, -373897302)),
                (n = k(n, r, o, i, t[a + 5], 5, -701558691)),
                (i = k(i, n, r, o, t[a + 10], 9, 38016083)),
                (o = k(o, i, n, r, t[a + 15], 14, -660478335)),
                (r = k(r, o, i, n, t[a + 4], 20, -405537848)),
                (n = k(n, r, o, i, t[a + 9], 5, 568446438)),
                (i = k(i, n, r, o, t[a + 14], 9, -1019803690)),
                (o = k(o, i, n, r, t[a + 3], 14, -187363961)),
                (r = k(r, o, i, n, t[a + 8], 20, 1163531501)),
                (n = k(n, r, o, i, t[a + 13], 5, -1444681467)),
                (i = k(i, n, r, o, t[a + 2], 9, -51403784)),
                (o = k(o, i, n, r, t[a + 7], 14, 1735328473)),
                (n = j(
                  n,
                  (r = k(r, o, i, n, t[a + 12], 20, -1926607734)),
                  o,
                  i,
                  t[a + 5],
                  4,
                  -378558
                )),
                (i = j(i, n, r, o, t[a + 8], 11, -2022574463)),
                (o = j(o, i, n, r, t[a + 11], 16, 1839030562)),
                (r = j(r, o, i, n, t[a + 14], 23, -35309556)),
                (n = j(n, r, o, i, t[a + 1], 4, -1530992060)),
                (i = j(i, n, r, o, t[a + 4], 11, 1272893353)),
                (o = j(o, i, n, r, t[a + 7], 16, -155497632)),
                (r = j(r, o, i, n, t[a + 10], 23, -1094730640)),
                (n = j(n, r, o, i, t[a + 13], 4, 681279174)),
                (i = j(i, n, r, o, t[a], 11, -358537222)),
                (o = j(o, i, n, r, t[a + 3], 16, -722521979)),
                (r = j(r, o, i, n, t[a + 6], 23, 76029189)),
                (n = j(n, r, o, i, t[a + 9], 4, -640364487)),
                (i = j(i, n, r, o, t[a + 12], 11, -421815835)),
                (o = j(o, i, n, r, t[a + 15], 16, 530742520)),
                (n = O(
                  n,
                  (r = j(r, o, i, n, t[a + 2], 23, -995338651)),
                  o,
                  i,
                  t[a],
                  6,
                  -198630844
                )),
                (i = O(i, n, r, o, t[a + 7], 10, 1126891415)),
                (o = O(o, i, n, r, t[a + 14], 15, -1416354905)),
                (r = O(r, o, i, n, t[a + 5], 21, -57434055)),
                (n = O(n, r, o, i, t[a + 12], 6, 1700485571)),
                (i = O(i, n, r, o, t[a + 3], 10, -1894986606)),
                (o = O(o, i, n, r, t[a + 10], 15, -1051523)),
                (r = O(r, o, i, n, t[a + 1], 21, -2054922799)),
                (n = O(n, r, o, i, t[a + 8], 6, 1873313359)),
                (i = O(i, n, r, o, t[a + 15], 10, -30611744)),
                (o = O(o, i, n, r, t[a + 6], 15, -1560198380)),
                (r = O(r, o, i, n, t[a + 13], 21, 1309151649)),
                (n = O(n, r, o, i, t[a + 4], 6, -145523070)),
                (i = O(i, n, r, o, t[a + 11], 10, -1120210379)),
                (o = O(o, i, n, r, t[a + 2], 15, 718787259)),
                (r = O(r, o, i, n, t[a + 9], 21, -343485551)),
                (n = y(n, l)),
                (r = y(r, s)),
                (o = y(o, c)),
                (i = y(i, u));
            }
            return [n, r, o, i];
          })(
            (function(t) {
              if (0 === t.length) return [];
              for (
                var e = 8 * t.length, n = new Uint32Array(v(e)), r = 0;
                r < e;
                r += 8
              )
                n[r >> 5] |= (255 & t[r / 8]) << r % 32;
              return n;
            })(t),
            8 * t.length
          )
        );
      }),
      S = function(t, e, n) {
        var r = (t = t || {}).random || (t.rng || i)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), e)) {
          n = n || 0;
          for (var o = 0; o < 16; ++o) e[n + o] = r[o];
          return e;
        }
        return d(r);
      };
    function E(t, e, n, r) {
      switch (t) {
        case 0:
          return (e & n) ^ (~e & r);
        case 1:
          return e ^ n ^ r;
        case 2:
          return (e & n) ^ (e & r) ^ (n & r);
        case 3:
          return e ^ n ^ r;
      }
    }
    function C(t, e) {
      return (t << e) | (t >>> (32 - e));
    }
    var T = m("v5", 80, function(t) {
        var e = [1518500249, 1859775393, 2400959708, 3395469782],
          n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof t) {
          var r = unescape(encodeURIComponent(t));
          t = [];
          for (var o = 0; o < r.length; ++o) t.push(r.charCodeAt(o));
        } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
        t.push(128);
        for (
          var i = t.length / 4 + 2,
            a = Math.ceil(i / 16),
            l = new Array(a),
            s = 0;
          s < a;
          ++s
        ) {
          for (var c = new Uint32Array(16), u = 0; u < 16; ++u)
            c[u] =
              (t[64 * s + 4 * u] << 24) |
              (t[64 * s + 4 * u + 1] << 16) |
              (t[64 * s + 4 * u + 2] << 8) |
              t[64 * s + 4 * u + 3];
          l[s] = c;
        }
        (l[a - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
          (l[a - 1][14] = Math.floor(l[a - 1][14])),
          (l[a - 1][15] = (8 * (t.length - 1)) & 4294967295);
        for (var f = 0; f < a; ++f) {
          for (var d = new Uint32Array(80), p = 0; p < 16; ++p) d[p] = l[f][p];
          for (var h = 16; h < 80; ++h)
            d[h] = C(d[h - 3] ^ d[h - 8] ^ d[h - 14] ^ d[h - 16], 1);
          for (
            var b = n[0], g = n[1], m = n[2], v = n[3], y = n[4], x = 0;
            x < 80;
            ++x
          ) {
            var w = Math.floor(x / 20),
              k = (C(b, 5) + E(w, g, m, v) + y + e[w] + d[x]) >>> 0;
            (y = v), (v = m), (m = C(g, 30) >>> 0), (g = b), (b = k);
          }
          (n[0] = (n[0] + b) >>> 0),
            (n[1] = (n[1] + g) >>> 0),
            (n[2] = (n[2] + m) >>> 0),
            (n[3] = (n[3] + v) >>> 0),
            (n[4] = (n[4] + y) >>> 0);
        }
        return [
          (n[0] >> 24) & 255,
          (n[0] >> 16) & 255,
          (n[0] >> 8) & 255,
          255 & n[0],
          (n[1] >> 24) & 255,
          (n[1] >> 16) & 255,
          (n[1] >> 8) & 255,
          255 & n[1],
          (n[2] >> 24) & 255,
          (n[2] >> 16) & 255,
          (n[2] >> 8) & 255,
          255 & n[2],
          (n[3] >> 24) & 255,
          (n[3] >> 16) & 255,
          (n[3] >> 8) & 255,
          255 & n[3],
          (n[4] >> 24) & 255,
          (n[4] >> 16) & 255,
          (n[4] >> 8) & 255,
          255 & n[4]
        ];
      }),
      A = function(t) {
        if (!l(t)) throw TypeError("Invalid UUID");
        return parseInt(t.substr(14, 1), 16);
      };
    n.d(e, "v1", function() {
      return b;
    }),
      n.d(e, "v3", function() {
        return _;
      }),
      n.d(e, "v4", function() {
        return S;
      }),
      n.d(e, "v5", function() {
        return T;
      }),
      n.d(e, "NIL", function() {
        return "00000000-0000-0000-0000-000000000000";
      }),
      n.d(e, "version", function() {
        return A;
      }),
      n.d(e, "validate", function() {
        return l;
      }),
      n.d(e, "stringify", function() {
        return d;
      }),
      n.d(e, "parse", function() {
        return g;
      });
  },
  ,
  ,
  ,
  function(t, e, n) {
    "use strict";
    t.exports = function(t) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var n = (function(t, e) {
              var n,
                r,
                o,
                i = t[1] || "",
                a = t[3];
              if (!a) return i;
              if (e && "function" == typeof btoa) {
                var l =
                    ((n = a),
                    (r = btoa(unescape(encodeURIComponent(JSON.stringify(n))))),
                    (o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      r
                    )),
                    "/*# ".concat(o, " */")),
                  s = a.sources.map(function(t) {
                    return "/*# sourceURL="
                      .concat(a.sourceRoot)
                      .concat(t, " */");
                  });
                return [i]
                  .concat(s)
                  .concat([l])
                  .join("\n");
              }
              return [i].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], "{").concat(n, "}") : n;
          }).join("");
        }),
        (e.i = function(t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (r[i] = !0);
          }
          for (var a = 0; a < t.length; a++) {
            var l = t[a];
            (null != l[0] && r[l[0]]) ||
              (n && !l[2]
                ? (l[2] = n)
                : n && (l[2] = "(".concat(l[2], ") and (").concat(n, ")")),
              e.push(l));
          }
        }),
        e
      );
    };
  },
  function(t, e, n) {
    var r,
      o,
      i = {},
      a =
        ((r = function() {
          return window && document && document.all && !window.atob;
        }),
        function() {
          return void 0 === o && (o = r.apply(this, arguments)), o;
        }),
      l = (function(t) {
        var e = {};
        return function(t, n) {
          if ("function" == typeof t) return t();
          if (void 0 === e[t]) {
            var r = function(t, e) {
              return e ? e.querySelector(t) : document.querySelector(t);
            }.call(this, t, n);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (t) {
                r = null;
              }
            e[t] = r;
          }
          return e[t];
        };
      })(),
      s = null,
      c = 0,
      u = [],
      f = n(112);
    function d(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          o = i[r.id];
        if (o) {
          o.refs++;
          for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) o.parts.push(v(r.parts[a], e));
        } else {
          var l = [];
          for (a = 0; a < r.parts.length; a++) l.push(v(r.parts[a], e));
          i[r.id] = { id: r.id, refs: 1, parts: l };
        }
      }
    }
    function p(t, e) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var i = t[o],
          a = e.base ? i[0] + e.base : i[0],
          l = { css: i[1], media: i[2], sourceMap: i[3] };
        r[a] ? r[a].parts.push(l) : n.push((r[a] = { id: a, parts: [l] }));
      }
      return n;
    }
    function h(t, e) {
      var n = l(t.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = u[u.length - 1];
      if ("top" === t.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(e, r.nextSibling)
            : n.appendChild(e)
          : n.insertBefore(e, n.firstChild),
          u.push(e);
      else if ("bottom" === t.insertAt) n.appendChild(e);
      else {
        if ("object" != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var o = l(t.insertAt.before, n);
        n.insertBefore(e, o);
      }
    }
    function b(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = u.indexOf(t);
      e >= 0 && u.splice(e, 1);
    }
    function g(t) {
      var e = document.createElement("style");
      if (
        (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce)
      ) {
        var r = n.nc;
        r && (t.attrs.nonce = r);
      }
      return m(e, t.attrs), h(t, e), e;
    }
    function m(t, e) {
      Object.keys(e).forEach(function(n) {
        t.setAttribute(n, e[n]);
      });
    }
    function v(t, e) {
      var n, r, o, i;
      if (e.transform && t.css) {
        if (
          !(i =
            "function" == typeof e.transform
              ? e.transform(t.css)
              : e.transform.default(t.css))
        )
          return function() {};
        t.css = i;
      }
      if (e.singleton) {
        var a = c++;
        (n = s || (s = g(e))),
          (r = w.bind(null, n, a, !1)),
          (o = w.bind(null, n, a, !0));
      } else
        t.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function(t) {
              var e = document.createElement("link");
              return (
                void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                (t.attrs.rel = "stylesheet"),
                m(e, t.attrs),
                h(t, e),
                e
              );
            })(e)),
            (r = function(t, e, n) {
              var r = n.css,
                o = n.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && o;
              (e.convertToAbsoluteUrls || i) && (r = f(r)),
                o &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                    " */");
              var a = new Blob([r], { type: "text/css" }),
                l = t.href;
              (t.href = URL.createObjectURL(a)), l && URL.revokeObjectURL(l);
            }.bind(null, n, e)),
            (o = function() {
              b(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = g(e)),
            (r = function(t, e) {
              var n = e.css,
                r = e.media;
              if ((r && t.setAttribute("media", r), t.styleSheet))
                t.styleSheet.cssText = n;
              else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            (o = function() {
              b(n);
            }));
      return (
        r(t),
        function(e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            r((t = e));
          } else o();
        }
      );
    }
    t.exports = function(t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
      var n = p(t, e);
      return (
        d(n, e),
        function(t) {
          for (var r = [], o = 0; o < n.length; o++) {
            var a = n[o];
            (l = i[a.id]).refs--, r.push(l);
          }
          for (t && d(p(t, e), e), o = 0; o < r.length; o++) {
            var l;
            if (0 === (l = r[o]).refs) {
              for (var s = 0; s < l.parts.length; s++) l.parts[s]();
              delete i[l.id];
            }
          }
        }
      );
    };
    var y,
      x =
        ((y = []),
        function(t, e) {
          return (y[t] = e), y.filter(Boolean).join("\n");
        });
    function w(t, e, n, r) {
      var o = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = x(e, o);
      else {
        var i = document.createTextNode(o),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
      }
    }
  },
  function(t, e) {
    function n(e) {
      return (
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? ((t.exports = n = function(t) {
              return typeof t;
            }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0))
          : ((t.exports = n = function(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0)),
        n(e)
      );
    }
    (t.exports = n),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
  },
  function(t, e, n) {
    t.exports = n(60);
  },
  function(t, e, n) {
    "use strict";
    var r = n(8),
      o = n(33),
      i = n(61),
      a = n(39);
    function l(t) {
      var e = new i(t),
        n = o(i.prototype.request, e);
      return r.extend(n, i.prototype, e), r.extend(n, e), n;
    }
    var s = l(n(36));
    (s.Axios = i),
      (s.create = function(t) {
        return l(a(s.defaults, t));
      }),
      (s.Cancel = n(40)),
      (s.CancelToken = n(74)),
      (s.isCancel = n(35)),
      (s.all = function(t) {
        return Promise.all(t);
      }),
      (s.spread = n(75)),
      (s.isAxiosError = n(76)),
      (t.exports = s),
      (t.exports.default = s);
  },
  function(t, e, n) {
    "use strict";
    var r = n(8),
      o = n(34),
      i = n(62),
      a = n(63),
      l = n(39);
    function s(t) {
      (this.defaults = t),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (s.prototype.request = function(t) {
      "string" == typeof t
        ? ((t = arguments[1] || {}).url = arguments[0])
        : (t = t || {}),
        (t = l(this.defaults, t)).method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
          ? (t.method = this.defaults.method.toLowerCase())
          : (t.method = "get");
      var e = [a, void 0],
        n = Promise.resolve(t);
      for (
        this.interceptors.request.forEach(function(t) {
          e.unshift(t.fulfilled, t.rejected);
        }),
          this.interceptors.response.forEach(function(t) {
            e.push(t.fulfilled, t.rejected);
          });
        e.length;

      )
        n = n.then(e.shift(), e.shift());
      return n;
    }),
      (s.prototype.getUri = function(t) {
        return (
          (t = l(this.defaults, t)),
          o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        );
      }),
      r.forEach(["delete", "get", "head", "options"], function(t) {
        s.prototype[t] = function(e, n) {
          return this.request(
            l(n || {}, { method: t, url: e, data: (n || {}).data })
          );
        };
      }),
      r.forEach(["post", "put", "patch"], function(t) {
        s.prototype[t] = function(e, n, r) {
          return this.request(l(r || {}, { method: t, url: e, data: n }));
        };
      }),
      (t.exports = s);
  },
  function(t, e, n) {
    "use strict";
    var r = n(8);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function(t, e) {
      return (
        this.handlers.push({ fulfilled: t, rejected: e }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null);
      }),
      (o.prototype.forEach = function(t) {
        r.forEach(this.handlers, function(e) {
          null !== e && t(e);
        });
      }),
      (t.exports = o);
  },
  function(t, e, n) {
    "use strict";
    var r = n(8),
      o = n(64),
      i = n(35),
      a = n(36);
    function l(t) {
      t.cancelToken && t.cancelToken.throwIfRequested();
    }
    t.exports = function(t) {
      return (
        l(t),
        (t.headers = t.headers || {}),
        (t.data = o(t.data, t.headers, t.transformRequest)),
        (t.headers = r.merge(
          t.headers.common || {},
          t.headers[t.method] || {},
          t.headers
        )),
        r.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function(e) {
            delete t.headers[e];
          }
        ),
        (t.adapter || a.adapter)(t).then(
          function(e) {
            return (
              l(t), (e.data = o(e.data, e.headers, t.transformResponse)), e
            );
          },
          function(e) {
            return (
              i(e) ||
                (l(t),
                e &&
                  e.response &&
                  (e.response.data = o(
                    e.response.data,
                    e.response.headers,
                    t.transformResponse
                  ))),
              Promise.reject(e)
            );
          }
        )
      );
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = function(t, e, n) {
      return (
        r.forEach(n, function(n) {
          t = n(t, e);
        }),
        t
      );
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = function(t, e) {
      r.forEach(t, function(n, r) {
        r !== e &&
          r.toUpperCase() === e.toUpperCase() &&
          ((t[e] = n), delete t[r]);
      });
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(38);
    t.exports = function(t, e, n) {
      var o = n.config.validateStatus;
      n.status && o && !o(n.status)
        ? e(
            r(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          )
        : t(n);
    };
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, o) {
      return (
        (t.config = e),
        n && (t.code = n),
        (t.request = r),
        (t.response = o),
        (t.isAxiosError = !0),
        (t.toJSON = function() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code
          };
        }),
        t
      );
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = r.isStandardBrowserEnv()
      ? {
          write: function(t, e, n, o, i, a) {
            var l = [];
            l.push(t + "=" + encodeURIComponent(e)),
              r.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
              r.isString(o) && l.push("path=" + o),
              r.isString(i) && l.push("domain=" + i),
              !0 === a && l.push("secure"),
              (document.cookie = l.join("; "));
          },
          read: function(t) {
            var e = document.cookie.match(
              new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
            );
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove: function(t) {
            this.write(t, "", Date.now() - 864e5);
          }
        }
      : {
          write: function() {},
          read: function() {
            return null;
          },
          remove: function() {}
        };
  },
  function(t, e, n) {
    "use strict";
    var r = n(70),
      o = n(71);
    t.exports = function(t, e) {
      return t && !r(e) ? o(t, e) : e;
    };
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
    };
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
      return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(8),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
    t.exports = function(t) {
      var e,
        n,
        i,
        a = {};
      return t
        ? (r.forEach(t.split("\n"), function(t) {
            if (
              ((i = t.indexOf(":")),
              (e = r.trim(t.substr(0, i)).toLowerCase()),
              (n = r.trim(t.substr(i + 1))),
              e)
            ) {
              if (a[e] && o.indexOf(e) >= 0) return;
              a[e] =
                "set-cookie" === e
                  ? (a[e] ? a[e] : []).concat([n])
                  : a[e]
                  ? a[e] + ", " + n
                  : n;
            }
          }),
          a)
        : a;
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(8);
    t.exports = r.isStandardBrowserEnv()
      ? (function() {
          var t,
            e = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function o(t) {
            var r = t;
            return (
              e && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
              }
            );
          }
          return (
            (t = o(window.location.href)),
            function(e) {
              var n = r.isString(e) ? o(e) : e;
              return n.protocol === t.protocol && n.host === t.host;
            }
          );
        })()
      : function() {
          return !0;
        };
  },
  function(t, e, n) {
    "use strict";
    var r = n(40);
    function o(t) {
      if ("function" != typeof t)
        throw new TypeError("executor must be a function.");
      var e;
      this.promise = new Promise(function(t) {
        e = t;
      });
      var n = this;
      t(function(t) {
        n.reason || ((n.reason = new r(t)), e(n.reason));
      });
    }
    (o.prototype.throwIfRequested = function() {
      if (this.reason) throw this.reason;
    }),
      (o.source = function() {
        var t;
        return {
          token: new o(function(e) {
            t = e;
          }),
          cancel: t
        };
      }),
      (t.exports = o);
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t) {
      return function(e) {
        return t.apply(null, e);
      };
    };
  },
  function(t, e, n) {
    "use strict";
    t.exports = function(t) {
      return "object" == typeof t && !0 === t.isAxiosError;
    };
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.detectLanguage = function() {
        let t =
          (r.isExtEnv && browser.i18n.getUILanguage()) || navigator.language;
        return (
          t || (t = "en"),
          o.has(t) || (t = t.startsWith("zh") ? "zh-CN" : "en"),
          t
        );
      }),
      (e.SUPPORTED_LANG = void 0);
    var r = n(10);
    const o = new Set(["zh-CN", "en", "zh-TW"]);
    e.SUPPORTED_LANG = o;
  },
  ,
  function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "derived", function() {
        return l;
      }),
      n.d(e, "readable", function() {
        return i;
      }),
      n.d(e, "writable", function() {
        return a;
      });
    var r = n(0);
    n.d(e, "get", function() {
      return r.B;
    });
    const o = [];
    function i(t, e) {
      return { subscribe: a(t, e).subscribe };
    }
    function a(t, e = r.I) {
      let n;
      const i = new Set();
      function a(e) {
        if (Object(r.N)(t, e) && ((t = e), n)) {
          const e = !o.length;
          for (const e of i) e[1](), o.push(e, t);
          if (e) {
            for (let t = 0; t < o.length; t += 2) o[t][0](o[t + 1]);
            o.length = 0;
          }
        }
      }
      return {
        set: a,
        update: function(e) {
          a(e(t));
        },
        subscribe: function(o, l = r.I) {
          const s = [o, l];
          return (
            i.add(s),
            1 === i.size && (n = e(a) || r.I),
            o(t),
            () => {
              i.delete(s), 0 === i.size && (n(), (n = null));
            }
          );
        }
      };
    }
    function l(t, e, n) {
      const o = !Array.isArray(t),
        a = o ? [t] : t,
        l = e.length < 2;
      return i(n, t => {
        let n = !1;
        const i = [];
        let s = 0,
          c = r.I;
        const u = () => {
            if (s) return;
            c();
            const n = e(o ? i[0] : i, t);
            l ? t(n) : (c = Object(r.F)(n) ? n : r.I);
          },
          f = a.map((t, e) =>
            Object(r.X)(
              t,
              t => {
                (i[e] = t), (s &= ~(1 << e)), n && u();
              },
              () => {
                s |= 1 << e;
              }
            )
          );
        return (
          (n = !0),
          u(),
          function() {
            Object(r.M)(f), c();
          }
        );
      });
    }
  },
  function(t, e, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */ !(function(e, n) {
      "use strict";
      "object" == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function(t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return n(t);
              })
        : n(e);
    })("undefined" != typeof window ? window : this, function(n, o) {
      "use strict";
      var i = [],
        a = n.document,
        l = Object.getPrototypeOf,
        s = i.slice,
        c = i.concat,
        u = i.push,
        f = i.indexOf,
        d = {},
        p = d.toString,
        h = d.hasOwnProperty,
        b = h.toString,
        g = b.call(Object),
        m = {},
        v = function(t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function(t) {
          return null != t && t === t.window;
        },
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(t, e, n) {
        var r,
          o,
          i = (n = n || a).createElement("script");
        if (((i.text = t), e))
          for (r in x)
            (o = e[r] || (e.getAttribute && e.getAttribute(r))) &&
              i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i);
      }
      function k(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? d[p.call(t)] || "object"
          : typeof t;
      }
      var j = function(t, e) {
          return new j.fn.init(t, e);
        },
        O = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function _(t) {
        var e = !!t && "length" in t && t.length,
          n = k(t);
        return (
          !v(t) &&
          !y(t) &&
          ("array" === n ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      (j.fn = j.prototype = {
        jquery: "3.4.1",
        constructor: j,
        length: 0,
        toArray: function() {
          return s.call(this);
        },
        get: function(t) {
          return null == t
            ? s.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function(t) {
          var e = j.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function(t) {
          return j.each(this, t);
        },
        map: function(t) {
          return this.pushStack(
            j.map(this, function(e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function() {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: i.sort,
        splice: i.splice
      }),
        (j.extend = j.fn.extend = function() {
          var t,
            e,
            n,
            r,
            o,
            i,
            a = arguments[0] || {},
            l = 1,
            s = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a && ((c = a), (a = arguments[l] || {}), l++),
              "object" == typeof a || v(a) || (a = {}),
              l === s && ((a = this), l--);
            l < s;
            l++
          )
            if (null != (t = arguments[l]))
              for (e in t)
                (r = t[e]),
                  "__proto__" !== e &&
                    a !== r &&
                    (c && r && (j.isPlainObject(r) || (o = Array.isArray(r)))
                      ? ((n = a[e]),
                        (i =
                          o && !Array.isArray(n)
                            ? []
                            : o || j.isPlainObject(n)
                            ? n
                            : {}),
                        (o = !1),
                        (a[e] = j.extend(c, i, r)))
                      : void 0 !== r && (a[e] = r));
          return a;
        }),
        j.extend({
          expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(t) {
            throw new Error(t);
          },
          noop: function() {},
          isPlainObject: function(t) {
            var e, n;
            return !(
              !t ||
              "[object Object]" !== p.call(t) ||
              ((e = l(t)) &&
                ("function" !=
                  typeof (n = h.call(e, "constructor") && e.constructor) ||
                  b.call(n) !== g))
            );
          },
          isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function(t, e) {
            w(t, { nonce: e && e.nonce });
          },
          each: function(t, e) {
            var n,
              r = 0;
            if (_(t))
              for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
            else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
            return t;
          },
          trim: function(t) {
            return null == t ? "" : (t + "").replace(O, "");
          },
          makeArray: function(t, e) {
            var n = e || [];
            return (
              null != t &&
                (_(Object(t))
                  ? j.merge(n, "string" == typeof t ? [t] : t)
                  : u.call(n, t)),
              n
            );
          },
          inArray: function(t, e, n) {
            return null == e ? -1 : f.call(e, t, n);
          },
          merge: function(t, e) {
            for (var n = +e.length, r = 0, o = t.length; r < n; r++)
              t[o++] = e[r];
            return (t.length = o), t;
          },
          grep: function(t, e, n) {
            for (var r = [], o = 0, i = t.length, a = !n; o < i; o++)
              !e(t[o], o) !== a && r.push(t[o]);
            return r;
          },
          map: function(t, e, n) {
            var r,
              o,
              i = 0,
              a = [];
            if (_(t))
              for (r = t.length; i < r; i++)
                null != (o = e(t[i], i, n)) && a.push(o);
            else for (i in t) null != (o = e(t[i], i, n)) && a.push(o);
            return c.apply([], a);
          },
          guid: 1,
          support: m
        }),
        "function" == typeof Symbol &&
          (j.fn[Symbol.iterator] = i[Symbol.iterator]),
        j.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function(t, e) {
            d["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function(t) {
          var e,
            n,
            r,
            o,
            i,
            a,
            l,
            s,
            c,
            u,
            f,
            d,
            p,
            h,
            b,
            g,
            m,
            v,
            y,
            x = "sizzle" + 1 * new Date(),
            w = t.document,
            k = 0,
            j = 0,
            O = st(),
            _ = st(),
            S = st(),
            E = st(),
            C = function(t, e) {
              return t === e && (f = !0), 0;
            },
            T = {}.hasOwnProperty,
            A = [],
            z = A.pop,
            $ = A.push,
            P = A.push,
            L = A.slice,
            R = function(t, e) {
              for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e) return n;
              return -1;
            },
            N =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            D = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            F =
              "\\[" +
              D +
              "*(" +
              I +
              ")(?:" +
              D +
              "*([*^$|!~]?=)" +
              D +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              D +
              "*\\]",
            M =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              F +
              ")*)|.*)\\)|)",
            B = new RegExp(D + "+", "g"),
            q = new RegExp(
              "^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$",
              "g"
            ),
            W = new RegExp("^" + D + "*," + D + "*"),
            U = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"),
            H = new RegExp(D + "|>"),
            V = new RegExp(M),
            G = new RegExp("^" + I + "$"),
            Z = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + F),
              PSEUDO: new RegExp("^" + M),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  D +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  D +
                  "*(?:([+-]|)" +
                  D +
                  "*(\\d+)|))" +
                  D +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + N + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  D +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  D +
                  "*((?:-\\d)?\\d*)" +
                  D +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            X = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp(
              "\\\\([\\da-f]{1,6}" + D + "?|(" + D + ")|.)",
              "ig"
            ),
            nt = function(t, e, n) {
              var r = "0x" + e - 65536;
              return r != r || n
                ? e
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ot = function(t, e) {
              return e
                ? "\0" === t
                  ? "???"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            },
            it = function() {
              d();
            },
            at = xt(
              function(t) {
                return (
                  !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            P.apply((A = L.call(w.childNodes)), w.childNodes),
              A[w.childNodes.length].nodeType;
          } catch (t) {
            P = {
              apply: A.length
                ? function(t, e) {
                    $.apply(t, L.call(e));
                  }
                : function(t, e) {
                    for (var n = t.length, r = 0; (t[n++] = e[r++]); );
                    t.length = n - 1;
                  }
            };
          }
          function lt(t, e, r, o) {
            var i,
              l,
              c,
              u,
              f,
              h,
              m,
              v = e && e.ownerDocument,
              k = e ? e.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof t || !t || (1 !== k && 9 !== k && 11 !== k))
            )
              return r;
            if (
              !o &&
              ((e ? e.ownerDocument || e : w) !== p && d(e), (e = e || p), b)
            ) {
              if (11 !== k && (f = Q.exec(t)))
                if ((i = f[1])) {
                  if (9 === k) {
                    if (!(c = e.getElementById(i))) return r;
                    if (c.id === i) return r.push(c), r;
                  } else if (
                    v &&
                    (c = v.getElementById(i)) &&
                    y(e, c) &&
                    c.id === i
                  )
                    return r.push(c), r;
                } else {
                  if (f[2]) return P.apply(r, e.getElementsByTagName(t)), r;
                  if (
                    (i = f[3]) &&
                    n.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return P.apply(r, e.getElementsByClassName(i)), r;
                }
              if (
                n.qsa &&
                !E[t + " "] &&
                (!g || !g.test(t)) &&
                (1 !== k || "object" !== e.nodeName.toLowerCase())
              ) {
                if (((m = t), (v = e), 1 === k && H.test(t))) {
                  for (
                    (u = e.getAttribute("id"))
                      ? (u = u.replace(rt, ot))
                      : e.setAttribute("id", (u = x)),
                      l = (h = a(t)).length;
                    l--;

                  )
                    h[l] = "#" + u + " " + yt(h[l]);
                  (m = h.join(",")),
                    (v = (tt.test(t) && mt(e.parentNode)) || e);
                }
                try {
                  return P.apply(r, v.querySelectorAll(m)), r;
                } catch (e) {
                  E(t, !0);
                } finally {
                  u === x && e.removeAttribute("id");
                }
              }
            }
            return s(t.replace(q, "$1"), e, r, o);
          }
          function st() {
            var t = [];
            return function e(n, o) {
              return (
                t.push(n + " ") > r.cacheLength && delete e[t.shift()],
                (e[n + " "] = o)
              );
            };
          }
          function ct(t) {
            return (t[x] = !0), t;
          }
          function ut(t) {
            var e = p.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function ft(t, e) {
            for (var n = t.split("|"), o = n.length; o--; )
              r.attrHandle[n[o]] = e;
          }
          function dt(t, e) {
            var n = e && t,
              r =
                n &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
            return t ? 1 : -1;
          }
          function pt(t) {
            return function(e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          }
          function ht(t) {
            return function(e) {
              var n = e.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && e.type === t;
            };
          }
          function bt(t) {
            return function(e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && at(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function gt(t) {
            return ct(function(e) {
              return (
                (e = +e),
                ct(function(n, r) {
                  for (var o, i = t([], n.length, e), a = i.length; a--; )
                    n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (e in ((n = lt.support = {}),
          (i = lt.isXML = function(t) {
            var e = t.namespaceURI,
              n = (t.ownerDocument || t).documentElement;
            return !X.test(e || (n && n.nodeName) || "HTML");
          }),
          (d = lt.setDocument = function(t) {
            var e,
              o,
              a = t ? t.ownerDocument || t : w;
            return a !== p && 9 === a.nodeType && a.documentElement
              ? ((h = (p = a).documentElement),
                (b = !i(p)),
                w !== p &&
                  (o = p.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", it, !1)
                    : o.attachEvent && o.attachEvent("onunload", it)),
                (n.attributes = ut(function(t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (n.getElementsByTagName = ut(function(t) {
                  return (
                    t.appendChild(p.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = Y.test(p.getElementsByClassName)),
                (n.getById = ut(function(t) {
                  return (
                    (h.appendChild(t).id = x),
                    !p.getElementsByName || !p.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function(t) {
                      var e = t.replace(et, nt);
                      return function(t) {
                        return t.getAttribute("id") === e;
                      };
                    }),
                    (r.find.ID = function(t, e) {
                      if (void 0 !== e.getElementById && b) {
                        var n = e.getElementById(t);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function(t) {
                      var e = t.replace(et, nt);
                      return function(t) {
                        var n =
                          void 0 !== t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    }),
                    (r.find.ID = function(t, e) {
                      if (void 0 !== e.getElementById && b) {
                        var n,
                          r,
                          o,
                          i = e.getElementById(t);
                        if (i) {
                          if ((n = i.getAttributeNode("id")) && n.value === t)
                            return [i];
                          for (
                            o = e.getElementsByName(t), r = 0;
                            (i = o[r++]);

                          )
                            if ((n = i.getAttributeNode("id")) && n.value === t)
                              return [i];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function(t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : n.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function(t, e) {
                      var n,
                        r = [],
                        o = 0,
                        i = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return i;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function(t, e) {
                    if (void 0 !== e.getElementsByClassName && b)
                      return e.getElementsByClassName(t);
                  }),
                (m = []),
                (g = []),
                (n.qsa = Y.test(p.querySelectorAll)) &&
                  (ut(function(t) {
                    (h.appendChild(t).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=" + D + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        g.push("\\[" + D + "*(?:value|" + N + ")"),
                      t.querySelectorAll("[id~=" + x + "-]").length ||
                        g.push("~="),
                      t.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      t.querySelectorAll("a#" + x + "+*").length ||
                        g.push(".#.+[+~]");
                  }),
                  ut(function(t) {
                    t.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        g.push("name" + D + "*[*^$|!~]?="),
                      2 !== t.querySelectorAll(":enabled").length &&
                        g.push(":enabled", ":disabled"),
                      (h.appendChild(t).disabled = !0),
                      2 !== t.querySelectorAll(":disabled").length &&
                        g.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (n.matchesSelector = Y.test(
                  (v =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ut(function(t) {
                    (n.disconnectedMatch = v.call(t, "*")),
                      v.call(t, "[s!='']:x"),
                      m.push("!=", M);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (m = m.length && new RegExp(m.join("|"))),
                (e = Y.test(h.compareDocumentPosition)),
                (y =
                  e || Y.test(h.contains)
                    ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          r = e && e.parentNode;
                        return (
                          t === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function(t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (C = e
                  ? function(t, e) {
                      if (t === e) return (f = !0), 0;
                      var r =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1) ||
                        (!n.sortDetached && e.compareDocumentPosition(t) === r)
                          ? t === p || (t.ownerDocument === w && y(w, t))
                            ? -1
                            : e === p || (e.ownerDocument === w && y(w, e))
                            ? 1
                            : u
                            ? R(u, t) - R(u, e)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function(t, e) {
                      if (t === e) return (f = !0), 0;
                      var n,
                        r = 0,
                        o = t.parentNode,
                        i = e.parentNode,
                        a = [t],
                        l = [e];
                      if (!o || !i)
                        return t === p
                          ? -1
                          : e === p
                          ? 1
                          : o
                          ? -1
                          : i
                          ? 1
                          : u
                          ? R(u, t) - R(u, e)
                          : 0;
                      if (o === i) return dt(t, e);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (n = e; (n = n.parentNode); ) l.unshift(n);
                      for (; a[r] === l[r]; ) r++;
                      return r
                        ? dt(a[r], l[r])
                        : a[r] === w
                        ? -1
                        : l[r] === w
                        ? 1
                        : 0;
                    }),
                p)
              : p;
          }),
          (lt.matches = function(t, e) {
            return lt(t, null, null, e);
          }),
          (lt.matchesSelector = function(t, e) {
            if (
              ((t.ownerDocument || t) !== p && d(t),
              n.matchesSelector &&
                b &&
                !E[e + " "] &&
                (!m || !m.test(e)) &&
                (!g || !g.test(e)))
            )
              try {
                var r = v.call(t, e);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return r;
              } catch (t) {
                E(e, !0);
              }
            return lt(e, p, null, [t]).length > 0;
          }),
          (lt.contains = function(t, e) {
            return (t.ownerDocument || t) !== p && d(t), y(t, e);
          }),
          (lt.attr = function(t, e) {
            (t.ownerDocument || t) !== p && d(t);
            var o = r.attrHandle[e.toLowerCase()],
              i =
                o && T.call(r.attrHandle, e.toLowerCase())
                  ? o(t, e, !b)
                  : void 0;
            return void 0 !== i
              ? i
              : n.attributes || !b
              ? t.getAttribute(e)
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
          (lt.escape = function(t) {
            return (t + "").replace(rt, ot);
          }),
          (lt.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (lt.uniqueSort = function(t) {
            var e,
              r = [],
              o = 0,
              i = 0;
            if (
              ((f = !n.detectDuplicates),
              (u = !n.sortStable && t.slice(0)),
              t.sort(C),
              f)
            ) {
              for (; (e = t[i++]); ) e === t[i] && (o = r.push(i));
              for (; o--; ) t.splice(r[o], 1);
            }
            return (u = null), t;
          }),
          (o = lt.getText = function(t) {
            var e,
              n = "",
              r = 0,
              i = t.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
              } else if (3 === i || 4 === i) return t.nodeValue;
            } else for (; (e = t[r++]); ) n += o(e);
            return n;
          }),
          ((r = lt.selectors = {
            cacheLength: 50,
            createPseudo: ct,
            match: Z,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(t) {
                return (
                  (t[1] = t[1].replace(et, nt)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function(t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || lt.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && lt.error(t[0]),
                  t
                );
              },
              PSEUDO: function(t) {
                var e,
                  n = !t[6] && t[2];
                return Z.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        V.test(n) &&
                        (e = a(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              }
            },
            filter: {
              TAG: function(t) {
                var e = t.replace(et, nt).toLowerCase();
                return "*" === t
                  ? function() {
                      return !0;
                    }
                  : function(t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function(t) {
                var e = O[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + D + ")" + t + "(" + D + "|$)")) &&
                    O(t, function(t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(t, e, n) {
                return function(r) {
                  var o = lt.attr(r, t);
                  return null == o
                    ? "!=" === e
                    : !e ||
                        ((o += ""),
                        "=" === e
                          ? o === n
                          : "!=" === e
                          ? o !== n
                          : "^=" === e
                          ? n && 0 === o.indexOf(n)
                          : "*=" === e
                          ? n && o.indexOf(n) > -1
                          : "$=" === e
                          ? n && o.slice(-n.length) === n
                          : "~=" === e
                          ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1
                          : "|=" === e &&
                            (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function(t, e, n, r, o) {
                var i = "nth" !== t.slice(0, 3),
                  a = "last" !== t.slice(-4),
                  l = "of-type" === e;
                return 1 === r && 0 === o
                  ? function(t) {
                      return !!t.parentNode;
                    }
                  : function(e, n, s) {
                      var c,
                        u,
                        f,
                        d,
                        p,
                        h,
                        b = i !== a ? "nextSibling" : "previousSibling",
                        g = e.parentNode,
                        m = l && e.nodeName.toLowerCase(),
                        v = !s && !l,
                        y = !1;
                      if (g) {
                        if (i) {
                          for (; b; ) {
                            for (d = e; (d = d[b]); )
                              if (
                                l
                                  ? d.nodeName.toLowerCase() === m
                                  : 1 === d.nodeType
                              )
                                return !1;
                            h = b = "only" === t && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && v)) {
                          for (
                            y =
                              (p =
                                (c =
                                  (u =
                                    (f = (d = g)[x] || (d[x] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[t] || [])[0] ===
                                  k && c[1]) && c[2],
                              d = p && g.childNodes[p];
                            (d = (++p && d && d[b]) || (y = p = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++y && d === e) {
                              u[t] = [k, p, y];
                              break;
                            }
                        } else if (
                          (v &&
                            (y = p =
                              (c =
                                (u =
                                  (f = (d = e)[x] || (d[x] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[t] || [])[0] === k &&
                              c[1]),
                          !1 === y)
                        )
                          for (
                            ;
                            (d =
                              (++p && d && d[b]) || (y = p = 0) || h.pop()) &&
                            ((l
                              ? d.nodeName.toLowerCase() !== m
                              : 1 !== d.nodeType) ||
                              !++y ||
                              (v &&
                                ((u =
                                  (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[t] = [k, y]),
                              d !== e));

                          );
                        return (y -= o) === r || (y % r == 0 && y / r >= 0);
                      }
                    };
              },
              PSEUDO: function(t, e) {
                var n,
                  o =
                    r.pseudos[t] ||
                    r.setFilters[t.toLowerCase()] ||
                    lt.error("unsupported pseudo: " + t);
                return o[x]
                  ? o(e)
                  : o.length > 1
                  ? ((n = [t, t, "", e]),
                    r.setFilters.hasOwnProperty(t.toLowerCase())
                      ? ct(function(t, n) {
                          for (var r, i = o(t, e), a = i.length; a--; )
                            t[(r = R(t, i[a]))] = !(n[r] = i[a]);
                        })
                      : function(t) {
                          return o(t, 0, n);
                        })
                  : o;
              }
            },
            pseudos: {
              not: ct(function(t) {
                var e = [],
                  n = [],
                  r = l(t.replace(q, "$1"));
                return r[x]
                  ? ct(function(t, e, n, o) {
                      for (var i, a = r(t, null, o, []), l = t.length; l--; )
                        (i = a[l]) && (t[l] = !(e[l] = i));
                    })
                  : function(t, o, i) {
                      return (
                        (e[0] = t), r(e, null, i, n), (e[0] = null), !n.pop()
                      );
                    };
              }),
              has: ct(function(t) {
                return function(e) {
                  return lt(t, e).length > 0;
                };
              }),
              contains: ct(function(t) {
                return (
                  (t = t.replace(et, nt)),
                  function(e) {
                    return (e.textContent || o(e)).indexOf(t) > -1;
                  }
                );
              }),
              lang: ct(function(t) {
                return (
                  G.test(t || "") || lt.error("unsupported lang: " + t),
                  (t = t.replace(et, nt).toLowerCase()),
                  function(e) {
                    var n;
                    do {
                      if (
                        (n = b
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === t ||
                          0 === n.indexOf(t + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function(t) {
                return t === h;
              },
              focus: function(t) {
                return (
                  t === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: bt(!1),
              disabled: bt(!0),
              checked: function(t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function(t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function(t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function(t) {
                return !r.pseudos.empty(t);
              },
              header: function(t) {
                return J.test(t.nodeName);
              },
              input: function(t) {
                return K.test(t.nodeName);
              },
              button: function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function(t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: gt(function() {
                return [0];
              }),
              last: gt(function(t, e) {
                return [e - 1];
              }),
              eq: gt(function(t, e, n) {
                return [n < 0 ? n + e : n];
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
                for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0; )
                  t.push(r);
                return t;
              }),
              gt: gt(function(t, e, n) {
                for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
                return t;
              })
            }
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[e] = pt(e);
          for (e in { submit: !0, reset: !0 }) r.pseudos[e] = ht(e);
          function vt() {}
          function yt(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r;
          }
          function xt(t, e, n) {
            var r = e.dir,
              o = e.next,
              i = o || r,
              a = n && "parentNode" === i,
              l = j++;
            return e.first
              ? function(e, n, o) {
                  for (; (e = e[r]); )
                    if (1 === e.nodeType || a) return t(e, n, o);
                  return !1;
                }
              : function(e, n, s) {
                  var c,
                    u,
                    f,
                    d = [k, l];
                  if (s) {
                    for (; (e = e[r]); )
                      if ((1 === e.nodeType || a) && t(e, n, s)) return !0;
                  } else
                    for (; (e = e[r]); )
                      if (1 === e.nodeType || a)
                        if (
                          ((u =
                            (f = e[x] || (e[x] = {}))[e.uniqueID] ||
                            (f[e.uniqueID] = {})),
                          o && o === e.nodeName.toLowerCase())
                        )
                          e = e[r] || e;
                        else {
                          if ((c = u[i]) && c[0] === k && c[1] === l)
                            return (d[2] = c[2]);
                          if (((u[i] = d), (d[2] = t(e, n, s)))) return !0;
                        }
                  return !1;
                };
          }
          function wt(t) {
            return t.length > 1
              ? function(e, n, r) {
                  for (var o = t.length; o--; ) if (!t[o](e, n, r)) return !1;
                  return !0;
                }
              : t[0];
          }
          function kt(t, e, n, r, o) {
            for (var i, a = [], l = 0, s = t.length, c = null != e; l < s; l++)
              (i = t[l]) && ((n && !n(i, r, o)) || (a.push(i), c && e.push(l)));
            return a;
          }
          function jt(t, e, n, r, o, i) {
            return (
              r && !r[x] && (r = jt(r)),
              o && !o[x] && (o = jt(o, i)),
              ct(function(i, a, l, s) {
                var c,
                  u,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  b =
                    i ||
                    (function(t, e, n) {
                      for (var r = 0, o = e.length; r < o; r++) lt(t, e[r], n);
                      return n;
                    })(e || "*", l.nodeType ? [l] : l, []),
                  g = !t || (!i && e) ? b : kt(b, d, t, l, s),
                  m = n ? (o || (i ? t : h || r) ? [] : a) : g;
                if ((n && n(g, m, l, s), r))
                  for (c = kt(m, p), r(c, [], l, s), u = c.length; u--; )
                    (f = c[u]) && (m[p[u]] = !(g[p[u]] = f));
                if (i) {
                  if (o || t) {
                    if (o) {
                      for (c = [], u = m.length; u--; )
                        (f = m[u]) && c.push((g[u] = f));
                      o(null, (m = []), c, s);
                    }
                    for (u = m.length; u--; )
                      (f = m[u]) &&
                        (c = o ? R(i, f) : d[u]) > -1 &&
                        (i[c] = !(a[c] = f));
                  }
                } else (m = kt(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, s) : P.apply(a, m);
              })
            );
          }
          function Ot(t) {
            for (
              var e,
                n,
                o,
                i = t.length,
                a = r.relative[t[0].type],
                l = a || r.relative[" "],
                s = a ? 1 : 0,
                u = xt(
                  function(t) {
                    return t === e;
                  },
                  l,
                  !0
                ),
                f = xt(
                  function(t) {
                    return R(e, t) > -1;
                  },
                  l,
                  !0
                ),
                d = [
                  function(t, n, r) {
                    var o =
                      (!a && (r || n !== c)) ||
                      ((e = n).nodeType ? u(t, n, r) : f(t, n, r));
                    return (e = null), o;
                  }
                ];
              s < i;
              s++
            )
              if ((n = r.relative[t[s].type])) d = [xt(wt(d), n)];
              else {
                if ((n = r.filter[t[s].type].apply(null, t[s].matches))[x]) {
                  for (o = ++s; o < i && !r.relative[t[o].type]; o++);
                  return jt(
                    s > 1 && wt(d),
                    s > 1 &&
                      yt(
                        t
                          .slice(0, s - 1)
                          .concat({ value: " " === t[s - 2].type ? "*" : "" })
                      ).replace(q, "$1"),
                    n,
                    s < o && Ot(t.slice(s, o)),
                    o < i && Ot((t = t.slice(o))),
                    o < i && yt(t)
                  );
                }
                d.push(n);
              }
            return wt(d);
          }
          return (
            (vt.prototype = r.filters = r.pseudos),
            (r.setFilters = new vt()),
            (a = lt.tokenize = function(t, e) {
              var n,
                o,
                i,
                a,
                l,
                s,
                c,
                u = _[t + " "];
              if (u) return e ? 0 : u.slice(0);
              for (l = t, s = [], c = r.preFilter; l; ) {
                for (a in ((n && !(o = W.exec(l))) ||
                  (o && (l = l.slice(o[0].length) || l), s.push((i = []))),
                (n = !1),
                (o = U.exec(l)) &&
                  ((n = o.shift()),
                  i.push({ value: n, type: o[0].replace(q, " ") }),
                  (l = l.slice(n.length))),
                r.filter))
                  !(o = Z[a].exec(l)) ||
                    (c[a] && !(o = c[a](o))) ||
                    ((n = o.shift()),
                    i.push({ value: n, type: a, matches: o }),
                    (l = l.slice(n.length)));
                if (!n) break;
              }
              return e ? l.length : l ? lt.error(t) : _(t, s).slice(0);
            }),
            (l = lt.compile = function(t, e) {
              var n,
                o = [],
                i = [],
                l = S[t + " "];
              if (!l) {
                for (e || (e = a(t)), n = e.length; n--; )
                  (l = Ot(e[n]))[x] ? o.push(l) : i.push(l);
                (l = S(
                  t,
                  (function(t, e) {
                    var n = e.length > 0,
                      o = t.length > 0,
                      i = function(i, a, l, s, u) {
                        var f,
                          h,
                          g,
                          m = 0,
                          v = "0",
                          y = i && [],
                          x = [],
                          w = c,
                          j = i || (o && r.find.TAG("*", u)),
                          O = (k += null == w ? 1 : Math.random() || 0.1),
                          _ = j.length;
                        for (
                          u && (c = a === p || a || u);
                          v !== _ && null != (f = j[v]);
                          v++
                        ) {
                          if (o && f) {
                            for (
                              h = 0,
                                a || f.ownerDocument === p || (d(f), (l = !b));
                              (g = t[h++]);

                            )
                              if (g(f, a || p, l)) {
                                s.push(f);
                                break;
                              }
                            u && (k = O);
                          }
                          n && ((f = !g && f) && m--, i && y.push(f));
                        }
                        if (((m += v), n && v !== m)) {
                          for (h = 0; (g = e[h++]); ) g(y, x, a, l);
                          if (i) {
                            if (m > 0)
                              for (; v--; ) y[v] || x[v] || (x[v] = z.call(s));
                            x = kt(x);
                          }
                          P.apply(s, x),
                            u &&
                              !i &&
                              x.length > 0 &&
                              m + e.length > 1 &&
                              lt.uniqueSort(s);
                        }
                        return u && ((k = O), (c = w)), y;
                      };
                    return n ? ct(i) : i;
                  })(i, o)
                )).selector = t;
              }
              return l;
            }),
            (s = lt.select = function(t, e, n, o) {
              var i,
                s,
                c,
                u,
                f,
                d = "function" == typeof t && t,
                p = !o && a((t = d.selector || t));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (s = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (c = s[0]).type &&
                  9 === e.nodeType &&
                  b &&
                  r.relative[s[1].type]
                ) {
                  if (
                    !(e = (r.find.ID(c.matches[0].replace(et, nt), e) || [])[0])
                  )
                    return n;
                  d && (e = e.parentNode),
                    (t = t.slice(s.shift().value.length));
                }
                for (
                  i = Z.needsContext.test(t) ? 0 : s.length;
                  i-- && ((c = s[i]), !r.relative[(u = c.type)]);

                )
                  if (
                    (f = r.find[u]) &&
                    (o = f(
                      c.matches[0].replace(et, nt),
                      (tt.test(s[0].type) && mt(e.parentNode)) || e
                    ))
                  ) {
                    if ((s.splice(i, 1), !(t = o.length && yt(s))))
                      return P.apply(n, o), n;
                    break;
                  }
              }
              return (
                (d || l(t, p))(
                  o,
                  e,
                  !b,
                  n,
                  !e || (tt.test(t) && mt(e.parentNode)) || e
                ),
                n
              );
            }),
            (n.sortStable =
              x
                .split("")
                .sort(C)
                .join("") === x),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ut(function(t) {
              return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ut(function(t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
              ft("type|href|height|width", function(t, e, n) {
                if (!n)
                  return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ut(function(t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
              ft("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                  return t.defaultValue;
              }),
            ut(function(t) {
              return null == t.getAttribute("disabled");
            }) ||
              ft(N, function(t, e, n) {
                var r;
                if (!n)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (r = t.getAttributeNode(e)) && r.specified
                    ? r.value
                    : null;
              }),
            lt
          );
        })(n);
      (j.find = S),
        (j.expr = S.selectors),
        (j.expr[":"] = j.expr.pseudos),
        (j.uniqueSort = j.unique = S.uniqueSort),
        (j.text = S.getText),
        (j.isXMLDoc = S.isXML),
        (j.contains = S.contains),
        (j.escapeSelector = S.escape);
      var E = function(t, e, n) {
          for (var r = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (o && j(t).is(n)) break;
              r.push(t);
            }
          return r;
        },
        C = function(t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        T = j.expr.match.needsContext;
      function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function $(t, e, n) {
        return v(e)
          ? j.grep(t, function(t, r) {
              return !!e.call(t, r, t) !== n;
            })
          : e.nodeType
          ? j.grep(t, function(t) {
              return (t === e) !== n;
            })
          : "string" != typeof e
          ? j.grep(t, function(t) {
              return f.call(e, t) > -1 !== n;
            })
          : j.filter(e, t, n);
      }
      (j.filter = function(t, e, n) {
        var r = e[0];
        return (
          n && (t = ":not(" + t + ")"),
          1 === e.length && 1 === r.nodeType
            ? j.find.matchesSelector(r, t)
              ? [r]
              : []
            : j.find.matches(
                t,
                j.grep(e, function(t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        j.fn.extend({
          find: function(t) {
            var e,
              n,
              r = this.length,
              o = this;
            if ("string" != typeof t)
              return this.pushStack(
                j(t).filter(function() {
                  for (e = 0; e < r; e++) if (j.contains(o[e], this)) return !0;
                })
              );
            for (n = this.pushStack([]), e = 0; e < r; e++) j.find(t, o[e], n);
            return r > 1 ? j.uniqueSort(n) : n;
          },
          filter: function(t) {
            return this.pushStack($(this, t || [], !1));
          },
          not: function(t) {
            return this.pushStack($(this, t || [], !0));
          },
          is: function(t) {
            return !!$(
              this,
              "string" == typeof t && T.test(t) ? j(t) : t || [],
              !1
            ).length;
          }
        });
      var P,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((j.fn.init = function(t, e, n) {
        var r, o;
        if (!t) return this;
        if (((n = n || P), "string" == typeof t)) {
          if (
            !(r =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : L.exec(t)) ||
            (!r[1] && e)
          )
            return !e || e.jquery
              ? (e || n).find(t)
              : this.constructor(e).find(t);
          if (r[1]) {
            if (
              ((e = e instanceof j ? e[0] : e),
              j.merge(
                this,
                j.parseHTML(
                  r[1],
                  e && e.nodeType ? e.ownerDocument || e : a,
                  !0
                )
              ),
              z.test(r[1]) && j.isPlainObject(e))
            )
              for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
            return this;
          }
          return (
            (o = a.getElementById(r[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : v(t)
          ? void 0 !== n.ready
            ? n.ready(t)
            : t(j)
          : j.makeArray(t, this);
      }).prototype = j.fn),
        (P = j(a));
      var R = /^(?:parents|prev(?:Until|All))/,
        N = { children: !0, contents: !0, next: !0, prev: !0 };
      function D(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      j.fn.extend({
        has: function(t) {
          var e = j(t, this),
            n = e.length;
          return this.filter(function() {
            for (var t = 0; t < n; t++) if (j.contains(this, e[t])) return !0;
          });
        },
        closest: function(t, e) {
          var n,
            r = 0,
            o = this.length,
            i = [],
            a = "string" != typeof t && j(t);
          if (!T.test(t))
            for (; r < o; r++)
              for (n = this[r]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && j.find.matchesSelector(n, t))
                ) {
                  i.push(n);
                  break;
                }
          return this.pushStack(i.length > 1 ? j.uniqueSort(i) : i);
        },
        index: function(t) {
          return t
            ? "string" == typeof t
              ? f.call(j(t), this[0])
              : f.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function(t, e) {
          return this.pushStack(j.uniqueSort(j.merge(this.get(), j(t, e))));
        },
        addBack: function(t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        }
      }),
        j.each(
          {
            parent: function(t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function(t) {
              return E(t, "parentNode");
            },
            parentsUntil: function(t, e, n) {
              return E(t, "parentNode", n);
            },
            next: function(t) {
              return D(t, "nextSibling");
            },
            prev: function(t) {
              return D(t, "previousSibling");
            },
            nextAll: function(t) {
              return E(t, "nextSibling");
            },
            prevAll: function(t) {
              return E(t, "previousSibling");
            },
            nextUntil: function(t, e, n) {
              return E(t, "nextSibling", n);
            },
            prevUntil: function(t, e, n) {
              return E(t, "previousSibling", n);
            },
            siblings: function(t) {
              return C((t.parentNode || {}).firstChild, t);
            },
            children: function(t) {
              return C(t.firstChild);
            },
            contents: function(t) {
              return void 0 !== t.contentDocument
                ? t.contentDocument
                : (A(t, "template") && (t = t.content || t),
                  j.merge([], t.childNodes));
            }
          },
          function(t, e) {
            j.fn[t] = function(n, r) {
              var o = j.map(this, e, n);
              return (
                "Until" !== t.slice(-5) && (r = n),
                r && "string" == typeof r && (o = j.filter(r, o)),
                this.length > 1 &&
                  (N[t] || j.uniqueSort(o), R.test(t) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function F(t) {
        return t;
      }
      function M(t) {
        throw t;
      }
      function B(t, e, n, r) {
        var o;
        try {
          t && v((o = t.promise))
            ? o
                .call(t)
                .done(e)
                .fail(n)
            : t && v((o = t.then))
            ? o.call(t, e, n)
            : e.apply(void 0, [t].slice(r));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      (j.Callbacks = function(t) {
        t =
          "string" == typeof t
            ? (function(t) {
                var e = {};
                return (
                  j.each(t.match(I) || [], function(t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
            : j.extend({}, t);
        var e,
          n,
          r,
          o,
          i = [],
          a = [],
          l = -1,
          s = function() {
            for (o = o || t.once, r = e = !0; a.length; l = -1)
              for (n = a.shift(); ++l < i.length; )
                !1 === i[l].apply(n[0], n[1]) &&
                  t.stopOnFalse &&
                  ((l = i.length), (n = !1));
            t.memory || (n = !1), (e = !1), o && (i = n ? [] : "");
          },
          c = {
            add: function() {
              return (
                i &&
                  (n && !e && ((l = i.length - 1), a.push(n)),
                  (function e(n) {
                    j.each(n, function(n, r) {
                      v(r)
                        ? (t.unique && c.has(r)) || i.push(r)
                        : r && r.length && "string" !== k(r) && e(r);
                    });
                  })(arguments),
                  n && !e && s()),
                this
              );
            },
            remove: function() {
              return (
                j.each(arguments, function(t, e) {
                  for (var n; (n = j.inArray(e, i, n)) > -1; )
                    i.splice(n, 1), n <= l && l--;
                }),
                this
              );
            },
            has: function(t) {
              return t ? j.inArray(t, i) > -1 : i.length > 0;
            },
            empty: function() {
              return i && (i = []), this;
            },
            disable: function() {
              return (o = a = []), (i = n = ""), this;
            },
            disabled: function() {
              return !i;
            },
            lock: function() {
              return (o = a = []), n || e || (i = n = ""), this;
            },
            locked: function() {
              return !!o;
            },
            fireWith: function(t, n) {
              return (
                o ||
                  ((n = [t, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  e || s()),
                this
              );
            },
            fire: function() {
              return c.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!r;
            }
          };
        return c;
      }),
        j.extend({
          Deferred: function(t) {
            var e = [
                [
                  "notify",
                  "progress",
                  j.Callbacks("memory"),
                  j.Callbacks("memory"),
                  2
                ],
                [
                  "resolve",
                  "done",
                  j.Callbacks("once memory"),
                  j.Callbacks("once memory"),
                  0,
                  "resolved"
                ],
                [
                  "reject",
                  "fail",
                  j.Callbacks("once memory"),
                  j.Callbacks("once memory"),
                  1,
                  "rejected"
                ]
              ],
              r = "pending",
              o = {
                state: function() {
                  return r;
                },
                always: function() {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function(t) {
                  return o.then(null, t);
                },
                pipe: function() {
                  var t = arguments;
                  return j
                    .Deferred(function(n) {
                      j.each(e, function(e, r) {
                        var o = v(t[r[4]]) && t[r[4]];
                        i[r[1]](function() {
                          var t = o && o.apply(this, arguments);
                          t && v(t.promise)
                            ? t
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, o ? [t] : arguments);
                        });
                      }),
                        (t = null);
                    })
                    .promise();
                },
                then: function(t, r, o) {
                  var i = 0;
                  function a(t, e, r, o) {
                    return function() {
                      var l = this,
                        s = arguments,
                        c = function() {
                          var n, c;
                          if (!(t < i)) {
                            if ((n = r.apply(l, s)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              v(c)
                                ? o
                                  ? c.call(n, a(i, e, F, o), a(i, e, M, o))
                                  : (i++,
                                    c.call(
                                      n,
                                      a(i, e, F, o),
                                      a(i, e, M, o),
                                      a(i, e, F, e.notifyWith)
                                    ))
                                : (r !== F && ((l = void 0), (s = [n])),
                                  (o || e.resolveWith)(l, s));
                          }
                        },
                        u = o
                          ? c
                          : function() {
                              try {
                                c();
                              } catch (n) {
                                j.Deferred.exceptionHook &&
                                  j.Deferred.exceptionHook(n, u.stackTrace),
                                  t + 1 >= i &&
                                    (r !== M && ((l = void 0), (s = [n])),
                                    e.rejectWith(l, s));
                              }
                            };
                      t
                        ? u()
                        : (j.Deferred.getStackHook &&
                            (u.stackTrace = j.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return j
                    .Deferred(function(n) {
                      e[0][3].add(a(0, n, v(o) ? o : F, n.notifyWith)),
                        e[1][3].add(a(0, n, v(t) ? t : F)),
                        e[2][3].add(a(0, n, v(r) ? r : M));
                    })
                    .promise();
                },
                promise: function(t) {
                  return null != t ? j.extend(t, o) : o;
                }
              },
              i = {};
            return (
              j.each(e, function(t, n) {
                var a = n[2],
                  l = n[5];
                (o[n[1]] = a.add),
                  l &&
                    a.add(
                      function() {
                        r = l;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (i[n[0]] = function() {
                    return (
                      i[n[0] + "With"](this === i ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (i[n[0] + "With"] = a.fireWith);
              }),
              o.promise(i),
              t && t.call(i, i),
              i
            );
          },
          when: function(t) {
            var e = arguments.length,
              n = e,
              r = Array(n),
              o = s.call(arguments),
              i = j.Deferred(),
              a = function(t) {
                return function(n) {
                  (r[t] = this),
                    (o[t] = arguments.length > 1 ? s.call(arguments) : n),
                    --e || i.resolveWith(r, o);
                };
              };
            if (
              e <= 1 &&
              (B(t, i.done(a(n)).resolve, i.reject, !e),
              "pending" === i.state() || v(o[n] && o[n].then))
            )
              return i.then();
            for (; n--; ) B(o[n], a(n), i.reject);
            return i.promise();
          }
        });
      var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (j.Deferred.exceptionHook = function(t, e) {
        n.console &&
          n.console.warn &&
          t &&
          q.test(t.name) &&
          n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (j.readyException = function(t) {
          n.setTimeout(function() {
            throw t;
          });
        });
      var W = j.Deferred();
      function U() {
        a.removeEventListener("DOMContentLoaded", U),
          n.removeEventListener("load", U),
          j.ready();
      }
      (j.fn.ready = function(t) {
        return (
          W.then(t).catch(function(t) {
            j.readyException(t);
          }),
          this
        );
      }),
        j.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(t) {
            (!0 === t ? --j.readyWait : j.isReady) ||
              ((j.isReady = !0),
              (!0 !== t && --j.readyWait > 0) || W.resolveWith(a, [j]));
          }
        }),
        (j.ready.then = W.then),
        "complete" === a.readyState ||
        ("loading" !== a.readyState && !a.documentElement.doScroll)
          ? n.setTimeout(j.ready)
          : (a.addEventListener("DOMContentLoaded", U),
            n.addEventListener("load", U));
      var H = function(t, e, n, r, o, i, a) {
          var l = 0,
            s = t.length,
            c = null == n;
          if ("object" === k(n))
            for (l in ((o = !0), n)) H(t, e, l, n[l], !0, i, a);
          else if (
            void 0 !== r &&
            ((o = !0),
            v(r) || (a = !0),
            c &&
              (a
                ? (e.call(t, r), (e = null))
                : ((c = e),
                  (e = function(t, e, n) {
                    return c.call(j(t), n);
                  }))),
            e)
          )
            for (; l < s; l++) e(t[l], n, a ? r : r.call(t[l], l, e(t[l], n)));
          return o ? t : c ? e.call(t) : s ? e(t[0], n) : i;
        },
        V = /^-ms-/,
        G = /-([a-z])/g;
      function Z(t, e) {
        return e.toUpperCase();
      }
      function X(t) {
        return t.replace(V, "ms-").replace(G, Z);
      }
      var K = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function J() {
        this.expando = j.expando + J.uid++;
      }
      (J.uid = 1),
        (J.prototype = {
          cache: function(t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                K(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                      }))),
              e
            );
          },
          set: function(t, e, n) {
            var r,
              o = this.cache(t);
            if ("string" == typeof e) o[X(e)] = n;
            else for (r in e) o[X(r)] = e[r];
            return o;
          },
          get: function(t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][X(e)];
          },
          access: function(t, e, n) {
            return void 0 === e || (e && "string" == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function(t, e) {
            var n,
              r = t[this.expando];
            if (void 0 !== r) {
              if (void 0 !== e) {
                n = (e = Array.isArray(e)
                  ? e.map(X)
                  : (e = X(e)) in r
                  ? [e]
                  : e.match(I) || []).length;
                for (; n--; ) delete r[e[n]];
              }
              (void 0 === e || j.isEmptyObject(r)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !j.isEmptyObject(e);
          }
        });
      var Y = new J(),
        Q = new J(),
        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        et = /[A-Z]/g;
      function nt(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((r = "data-" + e.replace(et, "-$&").toLowerCase()),
            "string" == typeof (n = t.getAttribute(r)))
          ) {
            try {
              n = (function(t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : t === +t + ""
                      ? +t
                      : tt.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(n);
            } catch (t) {}
            Q.set(t, e, n);
          } else n = void 0;
        return n;
      }
      j.extend({
        hasData: function(t) {
          return Q.hasData(t) || Y.hasData(t);
        },
        data: function(t, e, n) {
          return Q.access(t, e, n);
        },
        removeData: function(t, e) {
          Q.remove(t, e);
        },
        _data: function(t, e, n) {
          return Y.access(t, e, n);
        },
        _removeData: function(t, e) {
          Y.remove(t, e);
        }
      }),
        j.fn.extend({
          data: function(t, e) {
            var n,
              r,
              o,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((o = Q.get(i)), 1 === i.nodeType && !Y.get(i, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = X(r.slice(5))), nt(i, r, o[r]));
                Y.set(i, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof t
              ? this.each(function() {
                  Q.set(this, t);
                })
              : H(
                  this,
                  function(e) {
                    var n;
                    if (i && void 0 === e)
                      return void 0 !== (n = Q.get(i, t))
                        ? n
                        : void 0 !== (n = nt(i, t))
                        ? n
                        : void 0;
                    this.each(function() {
                      Q.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function(t) {
            return this.each(function() {
              Q.remove(this, t);
            });
          }
        }),
        j.extend({
          queue: function(t, e, n) {
            var r;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (r = Y.get(t, e)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = Y.access(t, e, j.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function(t, e) {
            e = e || "fx";
            var n = j.queue(t, e),
              r = n.length,
              o = n.shift(),
              i = j._queueHooks(t, e);
            "inprogress" === o && ((o = n.shift()), r--),
              o &&
                ("fx" === e && n.unshift("inprogress"),
                delete i.stop,
                o.call(
                  t,
                  function() {
                    j.dequeue(t, e);
                  },
                  i
                )),
              !r && i && i.empty.fire();
          },
          _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return (
              Y.get(t, n) ||
              Y.access(t, n, {
                empty: j.Callbacks("once memory").add(function() {
                  Y.remove(t, [e + "queue", n]);
                })
              })
            );
          }
        }),
        j.fn.extend({
          queue: function(t, e) {
            var n = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), n--),
              arguments.length < n
                ? j.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function() {
                    var n = j.queue(this, t, e);
                    j._queueHooks(this, t),
                      "fx" === t && "inprogress" !== n[0] && j.dequeue(this, t);
                  })
            );
          },
          dequeue: function(t) {
            return this.each(function() {
              j.dequeue(this, t);
            });
          },
          clearQueue: function(t) {
            return this.queue(t || "fx", []);
          },
          promise: function(t, e) {
            var n,
              r = 1,
              o = j.Deferred(),
              i = this,
              a = this.length,
              l = function() {
                --r || o.resolveWith(i, [i]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              a--;

            )
              (n = Y.get(i[a], t + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(l));
            return l(), o.promise(e);
          }
        });
      var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ot = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        at = a.documentElement,
        lt = function(t) {
          return j.contains(t.ownerDocument, t);
        },
        st = { composed: !0 };
      at.getRootNode &&
        (lt = function(t) {
          return (
            j.contains(t.ownerDocument, t) ||
            t.getRootNode(st) === t.ownerDocument
          );
        });
      var ct = function(t, e) {
          return (
            "none" === (t = e || t).style.display ||
            ("" === t.style.display && lt(t) && "none" === j.css(t, "display"))
          );
        },
        ut = function(t, e, n, r) {
          var o,
            i,
            a = {};
          for (i in e) (a[i] = t.style[i]), (t.style[i] = e[i]);
          for (i in ((o = n.apply(t, r || [])), e)) t.style[i] = a[i];
          return o;
        };
      function ft(t, e, n, r) {
        var o,
          i,
          a = 20,
          l = r
            ? function() {
                return r.cur();
              }
            : function() {
                return j.css(t, e, "");
              },
          s = l(),
          c = (n && n[3]) || (j.cssNumber[e] ? "" : "px"),
          u =
            t.nodeType &&
            (j.cssNumber[e] || ("px" !== c && +s)) &&
            ot.exec(j.css(t, e));
        if (u && u[3] !== c) {
          for (s /= 2, c = c || u[3], u = +s || 1; a--; )
            j.style(t, e, u + c),
              (1 - i) * (1 - (i = l() / s || 0.5)) <= 0 && (a = 0),
              (u /= i);
          (u *= 2), j.style(t, e, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +s || 0),
            (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = u), (r.end = o))),
          o
        );
      }
      var dt = {};
      function pt(t) {
        var e,
          n = t.ownerDocument,
          r = t.nodeName,
          o = dt[r];
        return (
          o ||
          ((e = n.body.appendChild(n.createElement(r))),
          (o = j.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === o && (o = "block"),
          (dt[r] = o),
          o)
        );
      }
      function ht(t, e) {
        for (var n, r, o = [], i = 0, a = t.length; i < a; i++)
          (r = t[i]).style &&
            ((n = r.style.display),
            e
              ? ("none" === n &&
                  ((o[i] = Y.get(r, "display") || null),
                  o[i] || (r.style.display = "")),
                "" === r.style.display && ct(r) && (o[i] = pt(r)))
              : "none" !== n && ((o[i] = "none"), Y.set(r, "display", n)));
        for (i = 0; i < a; i++) null != o[i] && (t[i].style.display = o[i]);
        return t;
      }
      j.fn.extend({
        show: function() {
          return ht(this, !0);
        },
        hide: function() {
          return ht(this);
        },
        toggle: function(t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function() {
                ct(this) ? j(this).show() : j(this).hide();
              });
        }
      });
      var bt = /^(?:checkbox|radio)$/i,
        gt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        mt = /^$|^module$|\/(?:java|ecma)script/i,
        vt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
      function yt(t, e) {
        var n;
        return (
          (n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && A(t, e)) ? j.merge([t], n) : n
        );
      }
      function xt(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
          Y.set(t[n], "globalEval", !e || Y.get(e[n], "globalEval"));
      }
      (vt.optgroup = vt.option),
        (vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead),
        (vt.th = vt.td);
      var wt,
        kt,
        jt = /<|&#?\w+;/;
      function Ot(t, e, n, r, o) {
        for (
          var i,
            a,
            l,
            s,
            c,
            u,
            f = e.createDocumentFragment(),
            d = [],
            p = 0,
            h = t.length;
          p < h;
          p++
        )
          if ((i = t[p]) || 0 === i)
            if ("object" === k(i)) j.merge(d, i.nodeType ? [i] : i);
            else if (jt.test(i)) {
              for (
                a = a || f.appendChild(e.createElement("div")),
                  l = (gt.exec(i) || ["", ""])[1].toLowerCase(),
                  s = vt[l] || vt._default,
                  a.innerHTML = s[1] + j.htmlPrefilter(i) + s[2],
                  u = s[0];
                u--;

              )
                a = a.lastChild;
              j.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
            } else d.push(e.createTextNode(i));
        for (f.textContent = "", p = 0; (i = d[p++]); )
          if (r && j.inArray(i, r) > -1) o && o.push(i);
          else if (
            ((c = lt(i)), (a = yt(f.appendChild(i), "script")), c && xt(a), n)
          )
            for (u = 0; (i = a[u++]); ) mt.test(i.type || "") && n.push(i);
        return f;
      }
      (wt = a.createDocumentFragment().appendChild(a.createElement("div"))),
        (kt = a.createElement("input")).setAttribute("type", "radio"),
        kt.setAttribute("checked", "checked"),
        kt.setAttribute("name", "t"),
        wt.appendChild(kt),
        (m.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (wt.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue);
      var _t = /^key/,
        St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Et = /^([^.]*)(?:\.(.+)|)/;
      function Ct() {
        return !0;
      }
      function Tt() {
        return !1;
      }
      function At(t, e) {
        return (
          (t ===
            (function() {
              try {
                return a.activeElement;
              } catch (t) {}
            })()) ==
          ("focus" === e)
        );
      }
      function zt(t, e, n, r, o, i) {
        var a, l;
        if ("object" == typeof e) {
          for (l in ("string" != typeof n && ((r = r || n), (n = void 0)), e))
            zt(t, l, n, r, e[l], i);
          return t;
        }
        if (
          (null == r && null == o
            ? ((o = n), (r = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = r), (r = void 0))
                : ((o = r), (r = n), (n = void 0))),
          !1 === o)
        )
          o = Tt;
        else if (!o) return t;
        return (
          1 === i &&
            ((a = o),
            ((o = function(t) {
              return j().off(t), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = j.guid++))),
          t.each(function() {
            j.event.add(this, e, o, r, n);
          })
        );
      }
      function $t(t, e, n) {
        n
          ? (Y.set(t, e, !1),
            j.event.add(t, e, {
              namespace: !1,
              handler: function(t) {
                var r,
                  o,
                  i = Y.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (i.length)
                    (j.event.special[e] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((i = s.call(arguments)),
                    Y.set(this, e, i),
                    (r = n(this, e)),
                    this[e](),
                    i !== (o = Y.get(this, e)) || r
                      ? Y.set(this, e, !1)
                      : (o = {}),
                    i !== o)
                  )
                    return (
                      t.stopImmediatePropagation(), t.preventDefault(), o.value
                    );
                } else
                  i.length &&
                    (Y.set(this, e, {
                      value: j.event.trigger(
                        j.extend(i[0], j.Event.prototype),
                        i.slice(1),
                        this
                      )
                    }),
                    t.stopImmediatePropagation());
              }
            }))
          : void 0 === Y.get(t, e) && j.event.add(t, e, Ct);
      }
      (j.event = {
        global: {},
        add: function(t, e, n, r, o) {
          var i,
            a,
            l,
            s,
            c,
            u,
            f,
            d,
            p,
            h,
            b,
            g = Y.get(t);
          if (g)
            for (
              n.handler && ((n = (i = n).handler), (o = i.selector)),
                o && j.find.matchesSelector(at, o),
                n.guid || (n.guid = j.guid++),
                (s = g.events) || (s = g.events = {}),
                (a = g.handle) ||
                  (a = g.handle = function(e) {
                    return void 0 !== j && j.event.triggered !== e.type
                      ? j.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                c = (e = (e || "").match(I) || [""]).length;
              c--;

            )
              (p = b = (l = Et.exec(e[c]) || [])[1]),
                (h = (l[2] || "").split(".").sort()),
                p &&
                  ((f = j.event.special[p] || {}),
                  (p = (o ? f.delegateType : f.bindType) || p),
                  (f = j.event.special[p] || {}),
                  (u = j.extend(
                    {
                      type: p,
                      origType: b,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && j.expr.match.needsContext.test(o),
                      namespace: h.join(".")
                    },
                    i
                  )),
                  (d = s[p]) ||
                    (((d = s[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                      (t.addEventListener && t.addEventListener(p, a))),
                  f.add &&
                    (f.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (j.event.global[p] = !0));
        },
        remove: function(t, e, n, r, o) {
          var i,
            a,
            l,
            s,
            c,
            u,
            f,
            d,
            p,
            h,
            b,
            g = Y.hasData(t) && Y.get(t);
          if (g && (s = g.events)) {
            for (c = (e = (e || "").match(I) || [""]).length; c--; )
              if (
                ((p = b = (l = Et.exec(e[c]) || [])[1]),
                (h = (l[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  f = j.event.special[p] || {},
                    d = s[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    l =
                      l[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = i = d.length;
                  i--;

                )
                  (u = d[i]),
                    (!o && b !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (l && !l.test(u.namespace)) ||
                      (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                      (d.splice(i, 1),
                      u.selector && d.delegateCount--,
                      f.remove && f.remove.call(t, u));
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(t, h, g.handle)) ||
                    j.removeEvent(t, p, g.handle),
                  delete s[p]);
              } else for (p in s) j.event.remove(t, p + e[c], n, r, !0);
            j.isEmptyObject(s) && Y.remove(t, "handle events");
          }
        },
        dispatch: function(t) {
          var e,
            n,
            r,
            o,
            i,
            a,
            l = j.event.fix(t),
            s = new Array(arguments.length),
            c = (Y.get(this, "events") || {})[l.type] || [],
            u = j.event.special[l.type] || {};
          for (s[0] = l, e = 1; e < arguments.length; e++) s[e] = arguments[e];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              a = j.event.handlers.call(this, l, c), e = 0;
              (o = a[e++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = o.elem, n = 0;
                (i = o.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== i.namespace &&
                  !l.rnamespace.test(i.namespace)) ||
                  ((l.handleObj = i),
                  (l.data = i.data),
                  void 0 !==
                    (r = (
                      (j.event.special[i.origType] || {}).handle || i.handler
                    ).apply(o.elem, s)) &&
                    !1 === (l.result = r) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function(t, e) {
          var n,
            r,
            o,
            i,
            a,
            l = [],
            s = e.delegateCount,
            c = t.target;
          if (s && c.nodeType && !("click" === t.type && t.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== t.type || !0 !== c.disabled)
              ) {
                for (i = [], a = {}, n = 0; n < s; n++)
                  void 0 === a[(o = (r = e[n]).selector + " ")] &&
                    (a[o] = r.needsContext
                      ? j(o, this).index(c) > -1
                      : j.find(o, this, null, [c]).length),
                    a[o] && i.push(r);
                i.length && l.push({ elem: c, handlers: i });
              }
          return (
            (c = this),
            s < e.length && l.push({ elem: c, handlers: e.slice(s) }),
            l
          );
        },
        addProp: function(t, e) {
          Object.defineProperty(j.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: v(e)
              ? function() {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function() {
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
          return t[j.expando] ? t : new j.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function(t) {
              var e = this || t;
              return (
                bt.test(e.type) &&
                  e.click &&
                  A(e, "input") &&
                  $t(e, "click", Ct),
                !1
              );
            },
            trigger: function(t) {
              var e = this || t;
              return (
                bt.test(e.type) && e.click && A(e, "input") && $t(e, "click"),
                !0
              );
            },
            _default: function(t) {
              var e = t.target;
              return (
                (bt.test(e.type) &&
                  e.click &&
                  A(e, "input") &&
                  Y.get(e, "click")) ||
                A(e, "a")
              );
            }
          },
          beforeunload: {
            postDispatch: function(t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            }
          }
        }
      }),
        (j.removeEvent = function(t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (j.Event = function(t, e) {
          if (!(this instanceof j.Event)) return new j.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? Ct
                  : Tt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && j.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[j.expando] = !0);
        }),
        (j.Event.prototype = {
          constructor: j.Event,
          isDefaultPrevented: Tt,
          isPropagationStopped: Tt,
          isImmediatePropagationStopped: Tt,
          isSimulated: !1,
          preventDefault: function() {
            var t = this.originalEvent;
            (this.isDefaultPrevented = Ct),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function() {
            var t = this.originalEvent;
            (this.isPropagationStopped = Ct),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = Ct),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        j.each(
          {
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
              return null == t.which && _t.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && St.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            }
          },
          j.event.addProp
        ),
        j.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
          j.event.special[t] = {
            setup: function() {
              return $t(this, t, At), !1;
            },
            trigger: function() {
              return $t(this, t), !0;
            },
            delegateType: e
          };
        }),
        j.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          },
          function(t, e) {
            j.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function(t) {
                var n,
                  r = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (r && (r === this || j.contains(this, r))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                );
              }
            };
          }
        ),
        j.fn.extend({
          on: function(t, e, n, r) {
            return zt(this, t, e, n, r);
          },
          one: function(t, e, n, r) {
            return zt(this, t, e, n, r, 1);
          },
          off: function(t, e, n) {
            var r, o;
            if (t && t.preventDefault && t.handleObj)
              return (
                (r = t.handleObj),
                j(t.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (o in t) this.off(o, e, t[o]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = Tt),
              this.each(function() {
                j.event.remove(this, t, n, e);
              })
            );
          }
        });
      var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Lt = /<script|<style|<link/i,
        Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Dt(t, e) {
        return (
          (A(t, "table") &&
            A(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            j(t).children("tbody")[0]) ||
          t
        );
      }
      function It(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function Ft(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function Mt(t, e) {
        var n, r, o, i, a, l, s, c;
        if (1 === e.nodeType) {
          if (
            Y.hasData(t) &&
            ((i = Y.access(t)), (a = Y.set(e, i)), (c = i.events))
          )
            for (o in (delete a.handle, (a.events = {}), c))
              for (n = 0, r = c[o].length; n < r; n++)
                j.event.add(e, o, c[o][n]);
          Q.hasData(t) &&
            ((l = Q.access(t)), (s = j.extend({}, l)), Q.set(e, s));
        }
      }
      function Bt(t, e, n, r) {
        e = c.apply([], e);
        var o,
          i,
          a,
          l,
          s,
          u,
          f = 0,
          d = t.length,
          p = d - 1,
          h = e[0],
          b = v(h);
        if (b || (d > 1 && "string" == typeof h && !m.checkClone && Rt.test(h)))
          return t.each(function(o) {
            var i = t.eq(o);
            b && (e[0] = h.call(this, o, i.html())), Bt(i, e, n, r);
          });
        if (
          d &&
          ((i = (o = Ot(e, t[0].ownerDocument, !1, t, r)).firstChild),
          1 === o.childNodes.length && (o = i),
          i || r)
        ) {
          for (l = (a = j.map(yt(o, "script"), It)).length; f < d; f++)
            (s = o),
              f !== p &&
                ((s = j.clone(s, !0, !0)), l && j.merge(a, yt(s, "script"))),
              n.call(t[f], s, f);
          if (l)
            for (
              u = a[a.length - 1].ownerDocument, j.map(a, Ft), f = 0;
              f < l;
              f++
            )
              (s = a[f]),
                mt.test(s.type || "") &&
                  !Y.access(s, "globalEval") &&
                  j.contains(u, s) &&
                  (s.src && "module" !== (s.type || "").toLowerCase()
                    ? j._evalUrl &&
                      !s.noModule &&
                      j._evalUrl(s.src, {
                        nonce: s.nonce || s.getAttribute("nonce")
                      })
                    : w(s.textContent.replace(Nt, ""), s, u));
        }
        return t;
      }
      function qt(t, e, n) {
        for (var r, o = e ? j.filter(e, t) : t, i = 0; null != (r = o[i]); i++)
          n || 1 !== r.nodeType || j.cleanData(yt(r)),
            r.parentNode &&
              (n && lt(r) && xt(yt(r, "script")), r.parentNode.removeChild(r));
        return t;
      }
      j.extend({
        htmlPrefilter: function(t) {
          return t.replace(Pt, "<$1></$2>");
        },
        clone: function(t, e, n) {
          var r,
            o,
            i,
            a,
            l,
            s,
            c,
            u = t.cloneNode(!0),
            f = lt(t);
          if (
            !(
              m.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              j.isXMLDoc(t)
            )
          )
            for (a = yt(u), r = 0, o = (i = yt(t)).length; r < o; r++)
              (l = i[r]),
                void 0,
                "input" === (c = (s = a[r]).nodeName.toLowerCase()) &&
                bt.test(l.type)
                  ? (s.checked = l.checked)
                  : ("input" !== c && "textarea" !== c) ||
                    (s.defaultValue = l.defaultValue);
          if (e)
            if (n)
              for (
                i = i || yt(t), a = a || yt(u), r = 0, o = i.length;
                r < o;
                r++
              )
                Mt(i[r], a[r]);
            else Mt(t, u);
          return (
            (a = yt(u, "script")).length > 0 && xt(a, !f && yt(t, "script")), u
          );
        },
        cleanData: function(t) {
          for (
            var e, n, r, o = j.event.special, i = 0;
            void 0 !== (n = t[i]);
            i++
          )
            if (K(n)) {
              if ((e = n[Y.expando])) {
                if (e.events)
                  for (r in e.events)
                    o[r] ? j.event.remove(n, r) : j.removeEvent(n, r, e.handle);
                n[Y.expando] = void 0;
              }
              n[Q.expando] && (n[Q.expando] = void 0);
            }
        }
      }),
        j.fn.extend({
          detach: function(t) {
            return qt(this, t, !0);
          },
          remove: function(t) {
            return qt(this, t);
          },
          text: function(t) {
            return H(
              this,
              function(t) {
                return void 0 === t
                  ? j.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function() {
            return Bt(this, arguments, function(t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Dt(this, t).appendChild(t);
            });
          },
          prepend: function() {
            return Bt(this, arguments, function(t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = Dt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function() {
            return Bt(this, arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function() {
            return Bt(this, arguments, function(t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (j.cleanData(yt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function(t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function() {
                return j.clone(this, t, e);
              })
            );
          },
          html: function(t) {
            return H(
              this,
              function(t) {
                var e = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !Lt.test(t) &&
                  !vt[(gt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = j.htmlPrefilter(t);
                  try {
                    for (; n < r; n++)
                      1 === (e = this[n] || {}).nodeType &&
                        (j.cleanData(yt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function() {
            var t = [];
            return Bt(
              this,
              arguments,
              function(e) {
                var n = this.parentNode;
                j.inArray(this, t) < 0 &&
                  (j.cleanData(yt(this)), n && n.replaceChild(e, this));
              },
              t
            );
          }
        }),
        j.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          },
          function(t, e) {
            j.fn[t] = function(t) {
              for (
                var n, r = [], o = j(t), i = o.length - 1, a = 0;
                a <= i;
                a++
              )
                (n = a === i ? this : this.clone(!0)),
                  j(o[a])[e](n),
                  u.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Wt = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
        Ut = function(t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        Ht = new RegExp(it.join("|"), "i");
      function Vt(t, e, n) {
        var r,
          o,
          i,
          a,
          l = t.style;
        return (
          (n = n || Ut(t)) &&
            ("" !== (a = n.getPropertyValue(e) || n[e]) ||
              lt(t) ||
              (a = j.style(t, e)),
            !m.pixelBoxStyles() &&
              Wt.test(a) &&
              Ht.test(e) &&
              ((r = l.width),
              (o = l.minWidth),
              (i = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = a),
              (a = n.width),
              (l.width = r),
              (l.minWidth = o),
              (l.maxWidth = i))),
          void 0 !== a ? a + "" : a
        );
      }
      function Gt(t, e) {
        return {
          get: function() {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function() {
        function t() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              at.appendChild(c).appendChild(u);
            var t = n.getComputedStyle(u);
            (r = "1%" !== t.top),
              (s = 12 === e(t.marginLeft)),
              (u.style.right = "60%"),
              (l = 36 === e(t.right)),
              (o = 36 === e(t.width)),
              (u.style.position = "absolute"),
              (i = 12 === e(u.offsetWidth / 3)),
              at.removeChild(c),
              (u = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var r,
          o,
          i,
          l,
          s,
          c = a.createElement("div"),
          u = a.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
          j.extend(m, {
            boxSizingReliable: function() {
              return t(), o;
            },
            pixelBoxStyles: function() {
              return t(), l;
            },
            pixelPosition: function() {
              return t(), r;
            },
            reliableMarginLeft: function() {
              return t(), s;
            },
            scrollboxSize: function() {
              return t(), i;
            }
          }));
      })();
      var Zt = ["Webkit", "Moz", "ms"],
        Xt = a.createElement("div").style,
        Kt = {};
      function Jt(t) {
        return (
          j.cssProps[t] ||
          Kt[t] ||
          (t in Xt
            ? t
            : (Kt[t] =
                (function(t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), n = Zt.length;
                    n--;

                  )
                    if ((t = Zt[n] + e) in Xt) return t;
                })(t) || t))
        );
      }
      var Yt = /^(none|table(?!-c[ea]).+)/,
        Qt = /^--/,
        te = { position: "absolute", visibility: "hidden", display: "block" },
        ee = { letterSpacing: "0", fontWeight: "400" };
      function ne(t, e, n) {
        var r = ot.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
      }
      function re(t, e, n, r, o, i) {
        var a = "width" === e ? 1 : 0,
          l = 0,
          s = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (s += j.css(t, n + it[a], !0, o)),
            r
              ? ("content" === n && (s -= j.css(t, "padding" + it[a], !0, o)),
                "margin" !== n &&
                  (s -= j.css(t, "border" + it[a] + "Width", !0, o)))
              : ((s += j.css(t, "padding" + it[a], !0, o)),
                "padding" !== n
                  ? (s += j.css(t, "border" + it[a] + "Width", !0, o))
                  : (l += j.css(t, "border" + it[a] + "Width", !0, o)));
        return (
          !r &&
            i >= 0 &&
            (s +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    i -
                    s -
                    l -
                    0.5
                )
              ) || 0),
          s
        );
      }
      function oe(t, e, n) {
        var r = Ut(t),
          o =
            (!m.boxSizingReliable() || n) &&
            "border-box" === j.css(t, "boxSizing", !1, r),
          i = o,
          a = Vt(t, e, r),
          l = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Wt.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!m.boxSizingReliable() && o) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === j.css(t, "display", !1, r))) &&
            t.getClientRects().length &&
            ((o = "border-box" === j.css(t, "boxSizing", !1, r)),
            (i = l in t) && (a = t[l])),
          (a = parseFloat(a) || 0) +
            re(t, e, n || (o ? "border" : "content"), i, r, a) +
            "px"
        );
      }
      function ie(t, e, n, r, o) {
        return new ie.prototype.init(t, e, n, r, o);
      }
      j.extend({
        cssHooks: {
          opacity: {
            get: function(t, e) {
              if (e) {
                var n = Vt(t, "opacity");
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
            var o,
              i,
              a,
              l = X(e),
              s = Qt.test(e),
              c = t.style;
            if (
              (s || (e = Jt(l)),
              (a = j.cssHooks[e] || j.cssHooks[l]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (o = a.get(t, !1, r))
                ? o
                : c[e];
            "string" == (i = typeof n) &&
              (o = ot.exec(n)) &&
              o[1] &&
              ((n = ft(t, e, o)), (i = "number")),
              null != n &&
                n == n &&
                ("number" !== i ||
                  s ||
                  (n += (o && o[3]) || (j.cssNumber[l] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (c[e] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(t, n, r))) ||
                  (s ? c.setProperty(e, n) : (c[e] = n)));
          }
        },
        css: function(t, e, n, r) {
          var o,
            i,
            a,
            l = X(e);
          return (
            Qt.test(e) || (e = Jt(l)),
            (a = j.cssHooks[e] || j.cssHooks[l]) &&
              "get" in a &&
              (o = a.get(t, !0, n)),
            void 0 === o && (o = Vt(t, e, r)),
            "normal" === o && e in ee && (o = ee[e]),
            "" === n || n
              ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
              : o
          );
        }
      }),
        j.each(["height", "width"], function(t, e) {
          j.cssHooks[e] = {
            get: function(t, n, r) {
              if (n)
                return !Yt.test(j.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? oe(t, e, r)
                  : ut(t, te, function() {
                      return oe(t, e, r);
                    });
            },
            set: function(t, n, r) {
              var o,
                i = Ut(t),
                a = !m.scrollboxSize() && "absolute" === i.position,
                l = (a || r) && "border-box" === j.css(t, "boxSizing", !1, i),
                s = r ? re(t, e, r, l, i) : 0;
              return (
                l &&
                  a &&
                  (s -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(i[e]) -
                      re(t, e, "border", !1, i) -
                      0.5
                  )),
                s &&
                  (o = ot.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((t.style[e] = n), (n = j.css(t, e))),
                ne(0, n, s)
              );
            }
          };
        }),
        (j.cssHooks.marginLeft = Gt(m.reliableMarginLeft, function(t, e) {
          if (e)
            return (
              (parseFloat(Vt(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  ut(t, { marginLeft: 0 }, function() {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        j.each({ margin: "", padding: "", border: "Width" }, function(t, e) {
          (j.cssHooks[t + e] = {
            expand: function(n) {
              for (
                var r = 0,
                  o = {},
                  i = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                o[t + it[r] + e] = i[r] || i[r - 2] || i[0];
              return o;
            }
          }),
            "margin" !== t && (j.cssHooks[t + e].set = ne);
        }),
        j.fn.extend({
          css: function(t, e) {
            return H(
              this,
              function(t, e, n) {
                var r,
                  o,
                  i = {},
                  a = 0;
                if (Array.isArray(e)) {
                  for (r = Ut(t), o = e.length; a < o; a++)
                    i[e[a]] = j.css(t, e[a], !1, r);
                  return i;
                }
                return void 0 !== n ? j.style(t, e, n) : j.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          }
        }),
        (j.Tween = ie),
        (ie.prototype = {
          constructor: ie,
          init: function(t, e, n, r, o, i) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = o || j.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = i || (j.cssNumber[n] ? "" : "px"));
          },
          cur: function() {
            var t = ie.propHooks[this.prop];
            return t && t.get ? t.get(this) : ie.propHooks._default.get(this);
          },
          run: function(t) {
            var e,
              n = ie.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = j.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ie.propHooks._default.set(this),
              this
            );
          }
        }),
        (ie.prototype.init.prototype = ie.prototype),
        (ie.propHooks = {
          _default: {
            get: function(t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = j.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function(t) {
              j.fx.step[t.prop]
                ? j.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!j.cssHooks[t.prop] && null == t.elem.style[Jt(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : j.style(t.elem, t.prop, t.now + t.unit);
            }
          }
        }),
        (ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
          set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          }
        }),
        (j.easing = {
          linear: function(t) {
            return t;
          },
          swing: function(t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing"
        }),
        (j.fx = ie.prototype.init),
        (j.fx.step = {});
      var ae,
        le,
        se = /^(?:toggle|show|hide)$/,
        ce = /queueHooks$/;
      function ue() {
        le &&
          (!1 === a.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ue)
            : n.setTimeout(ue, j.fx.interval),
          j.fx.tick());
      }
      function fe() {
        return (
          n.setTimeout(function() {
            ae = void 0;
          }),
          (ae = Date.now())
        );
      }
      function de(t, e) {
        var n,
          r = 0,
          o = { height: t };
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
          o["margin" + (n = it[r])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o;
      }
      function pe(t, e, n) {
        for (
          var r,
            o = (he.tweeners[e] || []).concat(he.tweeners["*"]),
            i = 0,
            a = o.length;
          i < a;
          i++
        )
          if ((r = o[i].call(n, e, t))) return r;
      }
      function he(t, e, n) {
        var r,
          o,
          i = 0,
          a = he.prefilters.length,
          l = j.Deferred().always(function() {
            delete s.elem;
          }),
          s = function() {
            if (o) return !1;
            for (
              var e = ae || fe(),
                n = Math.max(0, c.startTime + c.duration - e),
                r = 1 - (n / c.duration || 0),
                i = 0,
                a = c.tweens.length;
              i < a;
              i++
            )
              c.tweens[i].run(r);
            return (
              l.notifyWith(t, [c, r, n]),
              r < 1 && a
                ? n
                : (a || l.notifyWith(t, [c, 1, 0]), l.resolveWith(t, [c]), !1)
            );
          },
          c = l.promise({
            elem: t,
            props: j.extend({}, e),
            opts: j.extend(
              !0,
              { specialEasing: {}, easing: j.easing._default },
              n
            ),
            originalProperties: e,
            originalOptions: n,
            startTime: ae || fe(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
              var r = j.Tween(
                t,
                c.opts,
                e,
                n,
                c.opts.specialEasing[e] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function(e) {
              var n = 0,
                r = e ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < r; n++) c.tweens[n].run(1);
              return (
                e
                  ? (l.notifyWith(t, [c, 1, 0]), l.resolveWith(t, [c, e]))
                  : l.rejectWith(t, [c, e]),
                this
              );
            }
          }),
          u = c.props;
        for (
          (function(t, e) {
            var n, r, o, i, a;
            for (n in t)
              if (
                ((o = e[(r = X(n))]),
                (i = t[n]),
                Array.isArray(i) && ((o = i[1]), (i = t[n] = i[0])),
                n !== r && ((t[r] = i), delete t[n]),
                (a = j.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((i = a.expand(i)), delete t[r], i))
                  (n in t) || ((t[n] = i[n]), (e[n] = o));
              else e[r] = o;
          })(u, c.opts.specialEasing);
          i < a;
          i++
        )
          if ((r = he.prefilters[i].call(c, t, u, c.opts)))
            return (
              v(r.stop) &&
                (j._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          j.map(u, pe, c),
          v(c.opts.start) && c.opts.start.call(t, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          j.fx.timer(j.extend(s, { elem: t, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (j.Animation = j.extend(he, {
        tweeners: {
          "*": [
            function(t, e) {
              var n = this.createTween(t, e);
              return ft(n.elem, t, ot.exec(e), n), n;
            }
          ]
        },
        tweener: function(t, e) {
          v(t) ? ((e = t), (t = ["*"])) : (t = t.match(I));
          for (var n, r = 0, o = t.length; r < o; r++)
            (n = t[r]),
              (he.tweeners[n] = he.tweeners[n] || []),
              he.tweeners[n].unshift(e);
        },
        prefilters: [
          function(t, e, n) {
            var r,
              o,
              i,
              a,
              l,
              s,
              c,
              u,
              f = "width" in e || "height" in e,
              d = this,
              p = {},
              h = t.style,
              b = t.nodeType && ct(t),
              g = Y.get(t, "fxshow");
            for (r in (n.queue ||
              (null == (a = j._queueHooks(t, "fx")).unqueued &&
                ((a.unqueued = 0),
                (l = a.empty.fire),
                (a.empty.fire = function() {
                  a.unqueued || l();
                })),
              a.unqueued++,
              d.always(function() {
                d.always(function() {
                  a.unqueued--, j.queue(t, "fx").length || a.empty.fire();
                });
              })),
            e))
              if (((o = e[r]), se.test(o))) {
                if (
                  (delete e[r],
                  (i = i || "toggle" === o),
                  o === (b ? "hide" : "show"))
                ) {
                  if ("show" !== o || !g || void 0 === g[r]) continue;
                  b = !0;
                }
                p[r] = (g && g[r]) || j.style(t, r);
              }
            if ((s = !j.isEmptyObject(e)) || !j.isEmptyObject(p))
              for (r in (f &&
                1 === t.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = g && g.display) && (c = Y.get(t, "display")),
                "none" === (u = j.css(t, "display")) &&
                  (c
                    ? (u = c)
                    : (ht([t], !0),
                      (c = t.style.display || c),
                      (u = j.css(t, "display")),
                      ht([t]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === j.css(t, "float") &&
                  (s ||
                    (d.done(function() {
                      h.display = c;
                    }),
                    null == c &&
                      ((u = h.display), (c = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                d.always(function() {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (s = !1),
              p))
                s ||
                  (g
                    ? "hidden" in g && (b = g.hidden)
                    : (g = Y.access(t, "fxshow", { display: c })),
                  i && (g.hidden = !b),
                  b && ht([t], !0),
                  d.done(function() {
                    for (r in (b || ht([t]), Y.remove(t, "fxshow"), p))
                      j.style(t, r, p[r]);
                  })),
                  (s = pe(b ? g[r] : 0, r, d)),
                  r in g ||
                    ((g[r] = s.start), b && ((s.end = s.start), (s.start = 0)));
          }
        ],
        prefilter: function(t, e) {
          e ? he.prefilters.unshift(t) : he.prefilters.push(t);
        }
      })),
        (j.speed = function(t, e, n) {
          var r =
            t && "object" == typeof t
              ? j.extend({}, t)
              : {
                  complete: n || (!n && e) || (v(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !v(e) && e)
                };
          return (
            j.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in j.fx.speeds
                  ? (r.duration = j.fx.speeds[r.duration])
                  : (r.duration = j.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function() {
              v(r.old) && r.old.call(this), r.queue && j.dequeue(this, r.queue);
            }),
            r
          );
        }),
        j.fn.extend({
          fadeTo: function(t, e, n, r) {
            return this.filter(ct)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, r);
          },
          animate: function(t, e, n, r) {
            var o = j.isEmptyObject(t),
              i = j.speed(e, n, r),
              a = function() {
                var e = he(this, j.extend({}, t), i);
                (o || Y.get(this, "finish")) && e.stop(!0);
              };
            return (
              (a.finish = a),
              o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            );
          },
          stop: function(t, e, n) {
            var r = function(t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              "string" != typeof t && ((n = e), (e = t), (t = void 0)),
              e && !1 !== t && this.queue(t || "fx", []),
              this.each(function() {
                var e = !0,
                  o = null != t && t + "queueHooks",
                  i = j.timers,
                  a = Y.get(this);
                if (o) a[o] && a[o].stop && r(a[o]);
                else for (o in a) a[o] && a[o].stop && ce.test(o) && r(a[o]);
                for (o = i.length; o--; )
                  i[o].elem !== this ||
                    (null != t && i[o].queue !== t) ||
                    (i[o].anim.stop(n), (e = !1), i.splice(o, 1));
                (!e && n) || j.dequeue(this, t);
              })
            );
          },
          finish: function(t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function() {
                var e,
                  n = Y.get(this),
                  r = n[t + "queue"],
                  o = n[t + "queueHooks"],
                  i = j.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    j.queue(this, t, []),
                    o && o.stop && o.stop.call(this, !0),
                    e = i.length;
                  e--;

                )
                  i[e].elem === this &&
                    i[e].queue === t &&
                    (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < a; e++)
                  r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        j.each(["toggle", "show", "hide"], function(t, e) {
          var n = j.fn[e];
          j.fn[e] = function(t, r, o) {
            return null == t || "boolean" == typeof t
              ? n.apply(this, arguments)
              : this.animate(de(e, !0), t, r, o);
          };
        }),
        j.each(
          {
            slideDown: de("show"),
            slideUp: de("hide"),
            slideToggle: de("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          },
          function(t, e) {
            j.fn[t] = function(t, n, r) {
              return this.animate(e, t, n, r);
            };
          }
        ),
        (j.timers = []),
        (j.fx.tick = function() {
          var t,
            e = 0,
            n = j.timers;
          for (ae = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || j.fx.stop(), (ae = void 0);
        }),
        (j.fx.timer = function(t) {
          j.timers.push(t), j.fx.start();
        }),
        (j.fx.interval = 13),
        (j.fx.start = function() {
          le || ((le = !0), ue());
        }),
        (j.fx.stop = function() {
          le = null;
        }),
        (j.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (j.fn.delay = function(t, e) {
          return (
            (t = (j.fx && j.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function(e, r) {
              var o = n.setTimeout(e, t);
              r.stop = function() {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function() {
          var t = a.createElement("input"),
            e = a
              .createElement("select")
              .appendChild(a.createElement("option"));
          (t.type = "checkbox"),
            (m.checkOn = "" !== t.value),
            (m.optSelected = e.selected),
            ((t = a.createElement("input")).value = "t"),
            (t.type = "radio"),
            (m.radioValue = "t" === t.value);
        })();
      var be,
        ge = j.expr.attrHandle;
      j.fn.extend({
        attr: function(t, e) {
          return H(this, j.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
          return this.each(function() {
            j.removeAttr(this, t);
          });
        }
      }),
        j.extend({
          attr: function(t, e, n) {
            var r,
              o,
              i = t.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === t.getAttribute
                ? j.prop(t, e, n)
                : ((1 === i && j.isXMLDoc(t)) ||
                    (o =
                      j.attrHooks[e.toLowerCase()] ||
                      (j.expr.match.bool.test(e) ? be : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void j.removeAttr(t, e)
                      : o && "set" in o && void 0 !== (r = o.set(t, n, e))
                      ? r
                      : (t.setAttribute(e, n + ""), n)
                    : o && "get" in o && null !== (r = o.get(t, e))
                    ? r
                    : null == (r = j.find.attr(t, e))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function(t, e) {
                if (!m.radioValue && "radio" === e && A(t, "input")) {
                  var n = t.value;
                  return t.setAttribute("type", e), n && (t.value = n), e;
                }
              }
            }
          },
          removeAttr: function(t, e) {
            var n,
              r = 0,
              o = e && e.match(I);
            if (o && 1 === t.nodeType)
              for (; (n = o[r++]); ) t.removeAttribute(n);
          }
        }),
        (be = {
          set: function(t, e, n) {
            return !1 === e ? j.removeAttr(t, n) : t.setAttribute(n, n), n;
          }
        }),
        j.each(j.expr.match.bool.source.match(/\w+/g), function(t, e) {
          var n = ge[e] || j.find.attr;
          ge[e] = function(t, e, r) {
            var o,
              i,
              a = e.toLowerCase();
            return (
              r ||
                ((i = ge[a]),
                (ge[a] = o),
                (o = null != n(t, e, r) ? a : null),
                (ge[a] = i)),
              o
            );
          };
        });
      var me = /^(?:input|select|textarea|button)$/i,
        ve = /^(?:a|area)$/i;
      function ye(t) {
        return (t.match(I) || []).join(" ");
      }
      function xe(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function we(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(I)) || [];
      }
      j.fn.extend({
        prop: function(t, e) {
          return H(this, j.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
          return this.each(function() {
            delete this[j.propFix[t] || t];
          });
        }
      }),
        j.extend({
          prop: function(t, e, n) {
            var r,
              o,
              i = t.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && j.isXMLDoc(t)) ||
                  ((e = j.propFix[e] || e), (o = j.propHooks[e])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (r = o.set(t, n, e))
                    ? r
                    : (t[e] = n)
                  : o && "get" in o && null !== (r = o.get(t, e))
                  ? r
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(t) {
                var e = j.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : me.test(t.nodeName) || (ve.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              }
            }
          },
          propFix: { for: "htmlFor", class: "className" }
        }),
        m.optSelected ||
          (j.propHooks.selected = {
            get: function(t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function(t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            }
          }),
        j.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
          ],
          function() {
            j.propFix[this.toLowerCase()] = this;
          }
        ),
        j.fn.extend({
          addClass: function(t) {
            var e,
              n,
              r,
              o,
              i,
              a,
              l,
              s = 0;
            if (v(t))
              return this.each(function(e) {
                j(this).addClass(t.call(this, e, xe(this)));
              });
            if ((e = we(t)).length)
              for (; (n = this[s++]); )
                if (
                  ((o = xe(n)), (r = 1 === n.nodeType && " " + ye(o) + " "))
                ) {
                  for (a = 0; (i = e[a++]); )
                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                  o !== (l = ye(r)) && n.setAttribute("class", l);
                }
            return this;
          },
          removeClass: function(t) {
            var e,
              n,
              r,
              o,
              i,
              a,
              l,
              s = 0;
            if (v(t))
              return this.each(function(e) {
                j(this).removeClass(t.call(this, e, xe(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = we(t)).length)
              for (; (n = this[s++]); )
                if (
                  ((o = xe(n)), (r = 1 === n.nodeType && " " + ye(o) + " "))
                ) {
                  for (a = 0; (i = e[a++]); )
                    for (; r.indexOf(" " + i + " ") > -1; )
                      r = r.replace(" " + i + " ", " ");
                  o !== (l = ye(r)) && n.setAttribute("class", l);
                }
            return this;
          },
          toggleClass: function(t, e) {
            var n = typeof t,
              r = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && r
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : v(t)
              ? this.each(function(n) {
                  j(this).toggleClass(t.call(this, n, xe(this), e), e);
                })
              : this.each(function() {
                  var e, o, i, a;
                  if (r)
                    for (o = 0, i = j(this), a = we(t); (e = a[o++]); )
                      i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== n) ||
                      ((e = xe(this)) && Y.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : Y.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function(t) {
            var e,
              n,
              r = 0;
            for (e = " " + t + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + ye(xe(n)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          }
        });
      var ke = /\r/g;
      j.fn.extend({
        val: function(t) {
          var e,
            n,
            r,
            o = this[0];
          return arguments.length
            ? ((r = v(t)),
              this.each(function(n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = r ? t.call(this, n, j(this).val()) : t)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = j.map(o, function(t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    j.valHooks[this.type] ||
                    j.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (e =
                j.valHooks[o.type] || j.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (n = e.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(ke, "")
              : null == n
              ? ""
              : n
            : void 0;
        }
      }),
        j.extend({
          valHooks: {
            option: {
              get: function(t) {
                var e = j.find.attr(t, "value");
                return null != e ? e : ye(j.text(t));
              }
            },
            select: {
              get: function(t) {
                var e,
                  n,
                  r,
                  o = t.options,
                  i = t.selectedIndex,
                  a = "select-one" === t.type,
                  l = a ? null : [],
                  s = a ? i + 1 : o.length;
                for (r = i < 0 ? s : a ? i : 0; r < s; r++)
                  if (
                    ((n = o[r]).selected || r === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((e = j(n).val()), a)) return e;
                    l.push(e);
                  }
                return l;
              },
              set: function(t, e) {
                for (
                  var n, r, o = t.options, i = j.makeArray(e), a = o.length;
                  a--;

                )
                  ((r = o[a]).selected =
                    j.inArray(j.valHooks.option.get(r), i) > -1) && (n = !0);
                return n || (t.selectedIndex = -1), i;
              }
            }
          }
        }),
        j.each(["radio", "checkbox"], function() {
          (j.valHooks[this] = {
            set: function(t, e) {
              if (Array.isArray(e))
                return (t.checked = j.inArray(j(t).val(), e) > -1);
            }
          }),
            m.checkOn ||
              (j.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (m.focusin = "onfocusin" in n);
      var je = /^(?:focusinfocus|focusoutblur)$/,
        Oe = function(t) {
          t.stopPropagation();
        };
      j.extend(j.event, {
        trigger: function(t, e, r, o) {
          var i,
            l,
            s,
            c,
            u,
            f,
            d,
            p,
            b = [r || a],
            g = h.call(t, "type") ? t.type : t,
            m = h.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((l = p = s = r = r || a),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !je.test(g + j.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
              (u = g.indexOf(":") < 0 && "on" + g),
              ((t = t[j.expando]
                ? t
                : new j.Event(g, "object" == typeof t && t)).isTrigger = o
                ? 2
                : 3),
              (t.namespace = m.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = r),
              (e = null == e ? [t] : j.makeArray(e, [t])),
              (d = j.event.special[g] || {}),
              o || !d.trigger || !1 !== d.trigger.apply(r, e)))
          ) {
            if (!o && !d.noBubble && !y(r)) {
              for (
                c = d.delegateType || g, je.test(c + g) || (l = l.parentNode);
                l;
                l = l.parentNode
              )
                b.push(l), (s = l);
              s === (r.ownerDocument || a) &&
                b.push(s.defaultView || s.parentWindow || n);
            }
            for (i = 0; (l = b[i++]) && !t.isPropagationStopped(); )
              (p = l),
                (t.type = i > 1 ? c : d.bindType || g),
                (f =
                  (Y.get(l, "events") || {})[t.type] && Y.get(l, "handle")) &&
                  f.apply(l, e),
                (f = u && l[u]) &&
                  f.apply &&
                  K(l) &&
                  ((t.result = f.apply(l, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = g),
              o ||
                t.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(b.pop(), e)) ||
                !K(r) ||
                (u &&
                  v(r[g]) &&
                  !y(r) &&
                  ((s = r[u]) && (r[u] = null),
                  (j.event.triggered = g),
                  t.isPropagationStopped() && p.addEventListener(g, Oe),
                  r[g](),
                  t.isPropagationStopped() && p.removeEventListener(g, Oe),
                  (j.event.triggered = void 0),
                  s && (r[u] = s))),
              t.result
            );
          }
        },
        simulate: function(t, e, n) {
          var r = j.extend(new j.Event(), n, { type: t, isSimulated: !0 });
          j.event.trigger(r, null, e);
        }
      }),
        j.fn.extend({
          trigger: function(t, e) {
            return this.each(function() {
              j.event.trigger(t, e, this);
            });
          },
          triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return j.event.trigger(t, e, n, !0);
          }
        }),
        m.focusin ||
          j.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var n = function(t) {
              j.event.simulate(e, t.target, j.event.fix(t));
            };
            j.event.special[e] = {
              setup: function() {
                var r = this.ownerDocument || this,
                  o = Y.access(r, e);
                o || r.addEventListener(t, n, !0), Y.access(r, e, (o || 0) + 1);
              },
              teardown: function() {
                var r = this.ownerDocument || this,
                  o = Y.access(r, e) - 1;
                o
                  ? Y.access(r, e, o)
                  : (r.removeEventListener(t, n, !0), Y.remove(r, e));
              }
            };
          });
      var _e = n.location,
        Se = Date.now(),
        Ee = /\?/;
      j.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            j.error("Invalid XML: " + t),
          e
        );
      };
      var Ce = /\[\]$/,
        Te = /\r?\n/g,
        Ae = /^(?:submit|button|image|reset|file)$/i,
        ze = /^(?:input|select|textarea|keygen)/i;
      function $e(t, e, n, r) {
        var o;
        if (Array.isArray(e))
          j.each(e, function(e, o) {
            n || Ce.test(t)
              ? r(t, o)
              : $e(
                  t + "[" + ("object" == typeof o && null != o ? e : "") + "]",
                  o,
                  n,
                  r
                );
          });
        else if (n || "object" !== k(e)) r(t, e);
        else for (o in e) $e(t + "[" + o + "]", e[o], n, r);
      }
      (j.param = function(t, e) {
        var n,
          r = [],
          o = function(t, e) {
            var n = v(e) ? e() : e;
            r[r.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !j.isPlainObject(t)))
          j.each(t, function() {
            o(this.name, this.value);
          });
        else for (n in t) $e(n, t[n], e, o);
        return r.join("&");
      }),
        j.fn.extend({
          serialize: function() {
            return j.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var t = j.prop(this, "elements");
              return t ? j.makeArray(t) : this;
            })
              .filter(function() {
                var t = this.type;
                return (
                  this.name &&
                  !j(this).is(":disabled") &&
                  ze.test(this.nodeName) &&
                  !Ae.test(t) &&
                  (this.checked || !bt.test(t))
                );
              })
              .map(function(t, e) {
                var n = j(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? j.map(n, function(t) {
                      return { name: e.name, value: t.replace(Te, "\r\n") };
                    })
                  : { name: e.name, value: n.replace(Te, "\r\n") };
              })
              .get();
          }
        });
      var Pe = /%20/g,
        Le = /#.*$/,
        Re = /([?&])_=[^&]*/,
        Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        De = /^(?:GET|HEAD)$/,
        Ie = /^\/\//,
        Fe = {},
        Me = {},
        Be = "*/".concat("*"),
        qe = a.createElement("a");
      function We(t) {
        return function(e, n) {
          "string" != typeof e && ((n = e), (e = "*"));
          var r,
            o = 0,
            i = e.toLowerCase().match(I) || [];
          if (v(n))
            for (; (r = i[o++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(n))
                : (t[r] = t[r] || []).push(n);
        };
      }
      function Ue(t, e, n, r) {
        var o = {},
          i = t === Me;
        function a(l) {
          var s;
          return (
            (o[l] = !0),
            j.each(t[l] || [], function(t, l) {
              var c = l(e, n, r);
              return "string" != typeof c || i || o[c]
                ? i
                  ? !(s = c)
                  : void 0
                : (e.dataTypes.unshift(c), a(c), !1);
            }),
            s
          );
        }
        return a(e.dataTypes[0]) || (!o["*"] && a("*"));
      }
      function He(t, e) {
        var n,
          r,
          o = j.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : r || (r = {}))[n] = e[n]);
        return r && j.extend(!0, t, r), t;
      }
      (qe.href = _e.href),
        j.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: _e.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              _e.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Be,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": j.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function(t, e) {
            return e ? He(He(t, j.ajaxSettings), e) : He(j.ajaxSettings, t);
          },
          ajaxPrefilter: We(Fe),
          ajaxTransport: We(Me),
          ajax: function(t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var r,
              o,
              i,
              l,
              s,
              c,
              u,
              f,
              d,
              p,
              h = j.ajaxSetup({}, e),
              b = h.context || h,
              g = h.context && (b.nodeType || b.jquery) ? j(b) : j.event,
              m = j.Deferred(),
              v = j.Callbacks("once memory"),
              y = h.statusCode || {},
              x = {},
              w = {},
              k = "canceled",
              O = {
                readyState: 0,
                getResponseHeader: function(t) {
                  var e;
                  if (u) {
                    if (!l)
                      for (l = {}; (e = Ne.exec(i)); )
                        l[e[1].toLowerCase() + " "] = (
                          l[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = l[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function() {
                  return u ? i : null;
                },
                setRequestHeader: function(t, e) {
                  return (
                    null == u &&
                      ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                      (x[t] = e)),
                    this
                  );
                },
                overrideMimeType: function(t) {
                  return null == u && (h.mimeType = t), this;
                },
                statusCode: function(t) {
                  var e;
                  if (t)
                    if (u) O.always(t[O.status]);
                    else for (e in t) y[e] = [y[e], t[e]];
                  return this;
                },
                abort: function(t) {
                  var e = t || k;
                  return r && r.abort(e), _(0, e), this;
                }
              };
            if (
              (m.promise(O),
              (h.url = ((t || h.url || _e.href) + "").replace(
                Ie,
                _e.protocol + "//"
              )),
              (h.type = e.method || e.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [
                ""
              ]),
              null == h.crossDomain)
            ) {
              c = a.createElement("a");
              try {
                (c.href = h.url),
                  (c.href = c.href),
                  (h.crossDomain =
                    qe.protocol + "//" + qe.host != c.protocol + "//" + c.host);
              } catch (t) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = j.param(h.data, h.traditional)),
              Ue(Fe, h, e, O),
              u)
            )
              return O;
            for (d in ((f = j.event && h.global) &&
              0 == j.active++ &&
              j.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !De.test(h.type)),
            (o = h.url.replace(Le, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Pe, "+"))
              : ((p = h.url.slice(o.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((o += (Ee.test(o) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(Re, "$1")),
                  (p = (Ee.test(o) ? "&" : "?") + "_=" + Se++ + p)),
                (h.url = o + p)),
            h.ifModified &&
              (j.lastModified[o] &&
                O.setRequestHeader("If-Modified-Since", j.lastModified[o]),
              j.etag[o] && O.setRequestHeader("If-None-Match", j.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              e.contentType) &&
              O.setRequestHeader("Content-Type", h.contentType),
            O.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Be + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              O.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(b, O, h) || u))
              return O.abort();
            if (
              ((k = "abort"),
              v.add(h.complete),
              O.done(h.success),
              O.fail(h.error),
              (r = Ue(Me, h, e, O)))
            ) {
              if (((O.readyState = 1), f && g.trigger("ajaxSend", [O, h]), u))
                return O;
              h.async &&
                h.timeout > 0 &&
                (s = n.setTimeout(function() {
                  O.abort("timeout");
                }, h.timeout));
              try {
                (u = !1), r.send(x, _);
              } catch (t) {
                if (u) throw t;
                _(-1, t);
              }
            } else _(-1, "No Transport");
            function _(t, e, a, l) {
              var c,
                d,
                p,
                x,
                w,
                k = e;
              u ||
                ((u = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (i = l || ""),
                (O.readyState = t > 0 ? 4 : 0),
                (c = (t >= 200 && t < 300) || 304 === t),
                a &&
                  (x = (function(t, e, n) {
                    for (
                      var r, o, i, a, l = t.contents, s = t.dataTypes;
                      "*" === s[0];

                    )
                      s.shift(),
                        void 0 === r &&
                          (r =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (r)
                      for (o in l)
                        if (l[o] && l[o].test(r)) {
                          s.unshift(o);
                          break;
                        }
                    if (s[0] in n) i = s[0];
                    else {
                      for (o in n) {
                        if (!s[0] || t.converters[o + " " + s[0]]) {
                          i = o;
                          break;
                        }
                        a || (a = o);
                      }
                      i = i || a;
                    }
                    if (i) return i !== s[0] && s.unshift(i), n[i];
                  })(h, O, a)),
                (x = (function(t, e, n, r) {
                  var o,
                    i,
                    a,
                    l,
                    s,
                    c = {},
                    u = t.dataTypes.slice();
                  if (u[1])
                    for (a in t.converters)
                      c[a.toLowerCase()] = t.converters[a];
                  for (i = u.shift(); i; )
                    if (
                      (t.responseFields[i] && (n[t.responseFields[i]] = e),
                      !s &&
                        r &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (s = i),
                      (i = u.shift()))
                    )
                      if ("*" === i) i = s;
                      else if ("*" !== s && s !== i) {
                        if (!(a = c[s + " " + i] || c["* " + i]))
                          for (o in c)
                            if (
                              (l = o.split(" "))[1] === i &&
                              (a = c[s + " " + l[0]] || c["* " + l[0]])
                            ) {
                              !0 === a
                                ? (a = c[o])
                                : !0 !== c[o] && ((i = l[0]), u.unshift(l[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && t.throws) e = a(e);
                          else
                            try {
                              e = a(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? t
                                  : "No conversion from " + s + " to " + i
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(h, x, O, c)),
                c
                  ? (h.ifModified &&
                      ((w = O.getResponseHeader("Last-Modified")) &&
                        (j.lastModified[o] = w),
                      (w = O.getResponseHeader("etag")) && (j.etag[o] = w)),
                    204 === t || "HEAD" === h.type
                      ? (k = "nocontent")
                      : 304 === t
                      ? (k = "notmodified")
                      : ((k = x.state), (d = x.data), (c = !(p = x.error))))
                  : ((p = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
                (O.status = t),
                (O.statusText = (e || k) + ""),
                c ? m.resolveWith(b, [d, k, O]) : m.rejectWith(b, [O, k, p]),
                O.statusCode(y),
                (y = void 0),
                f &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [O, h, c ? d : p]),
                v.fireWith(b, [O, k]),
                f &&
                  (g.trigger("ajaxComplete", [O, h]),
                  --j.active || j.event.trigger("ajaxStop")));
            }
            return O;
          },
          getJSON: function(t, e, n) {
            return j.get(t, e, n, "json");
          },
          getScript: function(t, e) {
            return j.get(t, void 0, e, "script");
          }
        }),
        j.each(["get", "post"], function(t, e) {
          j[e] = function(t, n, r, o) {
            return (
              v(n) && ((o = o || r), (r = n), (n = void 0)),
              j.ajax(
                j.extend(
                  { url: t, type: e, dataType: o, data: n, success: r },
                  j.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        (j._evalUrl = function(t, e) {
          return j.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function() {} },
            dataFilter: function(t) {
              j.globalEval(t, e);
            }
          });
        }),
        j.fn.extend({
          wrapAll: function(t) {
            var e;
            return (
              this[0] &&
                (v(t) && (t = t.call(this[0])),
                (e = j(t, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function() {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(t) {
            return v(t)
              ? this.each(function(e) {
                  j(this).wrapInner(t.call(this, e));
                })
              : this.each(function() {
                  var e = j(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function(t) {
            var e = v(t);
            return this.each(function(n) {
              j(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function(t) {
            return (
              this.parent(t)
                .not("body")
                .each(function() {
                  j(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (j.expr.pseudos.hidden = function(t) {
          return !j.expr.pseudos.visible(t);
        }),
        (j.expr.pseudos.visible = function(t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (j.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var Ve = { 0: 200, 1223: 204 },
        Ge = j.ajaxSettings.xhr();
      (m.cors = !!Ge && "withCredentials" in Ge),
        (m.ajax = Ge = !!Ge),
        j.ajaxTransport(function(t) {
          var e, r;
          if (m.cors || (Ge && !t.crossDomain))
            return {
              send: function(o, i) {
                var a,
                  l = t.xhr();
                if (
                  (l.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) l[a] = t.xhrFields[a];
                for (a in (t.mimeType &&
                  l.overrideMimeType &&
                  l.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  l.setRequestHeader(a, o[a]);
                (e = function(t) {
                  return function() {
                    e &&
                      ((e = r = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null),
                      "abort" === t
                        ? l.abort()
                        : "error" === t
                        ? "number" != typeof l.status
                          ? i(0, "error")
                          : i(l.status, l.statusText)
                        : i(
                            Ve[l.status] || l.status,
                            l.statusText,
                            "text" !== (l.responseType || "text") ||
                              "string" != typeof l.responseText
                              ? { binary: l.response }
                              : { text: l.responseText },
                            l.getAllResponseHeaders()
                          ));
                  };
                }),
                  (l.onload = e()),
                  (r = l.onerror = l.ontimeout = e("error")),
                  void 0 !== l.onabort
                    ? (l.onabort = r)
                    : (l.onreadystatechange = function() {
                        4 === l.readyState &&
                          n.setTimeout(function() {
                            e && r();
                          });
                      }),
                  (e = e("abort"));
                try {
                  l.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function() {
                e && e();
              }
            };
        }),
        j.ajaxPrefilter(function(t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        j.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function(t) {
              return j.globalEval(t), t;
            }
          }
        }),
        j.ajaxPrefilter("script", function(t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        j.ajaxTransport("script", function(t) {
          var e, n;
          if (t.crossDomain || t.scriptAttrs)
            return {
              send: function(r, o) {
                (e = j("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (n = function(t) {
                      e.remove(),
                        (n = null),
                        t && o("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  a.head.appendChild(e[0]);
              },
              abort: function() {
                n && n();
              }
            };
        });
      var Ze,
        Xe = [],
        Ke = /(=)\?(?=&|$)|\?\?/;
      j.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var t = Xe.pop() || j.expando + "_" + Se++;
          return (this[t] = !0), t;
        }
      }),
        j.ajaxPrefilter("json jsonp", function(t, e, r) {
          var o,
            i,
            a,
            l =
              !1 !== t.jsonp &&
              (Ke.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Ke.test(t.data) &&
                  "data");
          if (l || "jsonp" === t.dataTypes[0])
            return (
              (o = t.jsonpCallback = v(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              l
                ? (t[l] = t[l].replace(Ke, "$1" + o))
                : !1 !== t.jsonp &&
                  (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
              (t.converters["script json"] = function() {
                return a || j.error(o + " was not called"), a[0];
              }),
              (t.dataTypes[0] = "json"),
              (i = n[o]),
              (n[o] = function() {
                a = arguments;
              }),
              r.always(function() {
                void 0 === i ? j(n).removeProp(o) : (n[o] = i),
                  t[o] && ((t.jsonpCallback = e.jsonpCallback), Xe.push(o)),
                  a && v(i) && i(a[0]),
                  (a = i = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Ze = a.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Ze.childNodes.length)),
        (j.parseHTML = function(t, e, n) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((n = e), (e = !1)),
              e ||
                (m.createHTMLDocument
                  ? (((r = (e = a.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = a.location.href),
                    e.head.appendChild(r))
                  : (e = a)),
              (i = !n && []),
              (o = z.exec(t))
                ? [e.createElement(o[1])]
                : ((o = Ot([t], e, i)),
                  i && i.length && j(i).remove(),
                  j.merge([], o.childNodes)));
          var r, o, i;
        }),
        (j.fn.load = function(t, e, n) {
          var r,
            o,
            i,
            a = this,
            l = t.indexOf(" ");
          return (
            l > -1 && ((r = ye(t.slice(l))), (t = t.slice(0, l))),
            v(e)
              ? ((n = e), (e = void 0))
              : e && "object" == typeof e && (o = "POST"),
            a.length > 0 &&
              j
                .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                .done(function(t) {
                  (i = arguments),
                    a.html(
                      r
                        ? j("<div>")
                            .append(j.parseHTML(t))
                            .find(r)
                        : t
                    );
                })
                .always(
                  n &&
                    function(t, e) {
                      a.each(function() {
                        n.apply(this, i || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        j.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
          ],
          function(t, e) {
            j.fn[e] = function(t) {
              return this.on(e, t);
            };
          }
        ),
        (j.expr.pseudos.animated = function(t) {
          return j.grep(j.timers, function(e) {
            return t === e.elem;
          }).length;
        }),
        (j.offset = {
          setOffset: function(t, e, n) {
            var r,
              o,
              i,
              a,
              l,
              s,
              c = j.css(t, "position"),
              u = j(t),
              f = {};
            "static" === c && (t.style.position = "relative"),
              (l = u.offset()),
              (i = j.css(t, "top")),
              (s = j.css(t, "left")),
              ("absolute" === c || "fixed" === c) &&
              (i + s).indexOf("auto") > -1
                ? ((a = (r = u.position()).top), (o = r.left))
                : ((a = parseFloat(i) || 0), (o = parseFloat(s) || 0)),
              v(e) && (e = e.call(t, n, j.extend({}, l))),
              null != e.top && (f.top = e.top - l.top + a),
              null != e.left && (f.left = e.left - l.left + o),
              "using" in e ? e.using.call(t, f) : u.css(f);
          }
        }),
        j.fn.extend({
          offset: function(t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function(e) {
                    j.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((e = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var t,
                e,
                n,
                r = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === j.css(r, "position"))
                e = r.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    n = r.ownerDocument,
                    t = r.offsetParent || n.documentElement;
                  t &&
                  (t === n.body || t === n.documentElement) &&
                  "static" === j.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== r &&
                  1 === t.nodeType &&
                  (((o = j(t).offset()).top += j.css(t, "borderTopWidth", !0)),
                  (o.left += j.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - o.top - j.css(r, "marginTop", !0),
                left: e.left - o.left - j.css(r, "marginLeft", !0)
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (
                var t = this.offsetParent;
                t && "static" === j.css(t, "position");

              )
                t = t.offsetParent;
              return t || at;
            });
          }
        }),
        j.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function(t, e) {
            var n = "pageYOffset" === e;
            j.fn[t] = function(r) {
              return H(
                this,
                function(t, r, o) {
                  var i;
                  if (
                    (y(t) ? (i = t) : 9 === t.nodeType && (i = t.defaultView),
                    void 0 === o)
                  )
                    return i ? i[e] : t[r];
                  i
                    ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset)
                    : (t[r] = o);
                },
                t,
                r,
                arguments.length
              );
            };
          }
        ),
        j.each(["top", "left"], function(t, e) {
          j.cssHooks[e] = Gt(m.pixelPosition, function(t, n) {
            if (n)
              return (n = Vt(t, e)), Wt.test(n) ? j(t).position()[e] + "px" : n;
          });
        }),
        j.each({ Height: "height", Width: "width" }, function(t, e) {
          j.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function(n, r) {
              j.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                  l = n || (!0 === o || !0 === i ? "margin" : "border");
                return H(
                  this,
                  function(e, n, o) {
                    var i;
                    return y(e)
                      ? 0 === r.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((i = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          i["scroll" + t],
                          e.body["offset" + t],
                          i["offset" + t],
                          i["client" + t]
                        ))
                      : void 0 === o
                      ? j.css(e, n, l)
                      : j.style(e, n, o, l);
                  },
                  e,
                  a ? o : void 0,
                  a
                );
              };
            }
          );
        }),
        j.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function(t, e) {
            j.fn[e] = function(t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        ),
        j.fn.extend({
          hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          }
        }),
        j.fn.extend({
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
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", n);
          }
        }),
        (j.proxy = function(t, e) {
          var n, r, o;
          if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), v(t)))
            return (
              (r = s.call(arguments, 2)),
              ((o = function() {
                return t.apply(e || this, r.concat(s.call(arguments)));
              }).guid = t.guid = t.guid || j.guid++),
              o
            );
        }),
        (j.holdReady = function(t) {
          t ? j.readyWait++ : j.ready(!0);
        }),
        (j.isArray = Array.isArray),
        (j.parseJSON = JSON.parse),
        (j.nodeName = A),
        (j.isFunction = v),
        (j.isWindow = y),
        (j.camelCase = X),
        (j.type = k),
        (j.now = Date.now),
        (j.isNumeric = function(t) {
          var e = j.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        void 0 ===
          (r = function() {
            return j;
          }.apply(e, [])) || (t.exports = r);
      var Je = n.jQuery,
        Ye = n.$;
      return (
        (j.noConflict = function(t) {
          return (
            n.$ === j && (n.$ = Ye), t && n.jQuery === j && (n.jQuery = Je), j
          );
        }),
        o || (n.jQuery = n.$ = j),
        j
      );
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t) {
    t.exports = {
      appName: "Lingocloud - Web Translation Extension",
      appNameAbbr: "Lingocloud",
      appDesc:
        "A bilingual translation extension that delivers a native reading experience at the Click of a button.",
      launchApp: "Launch Lingocloud",
      menus: {
        userCenter: "User Center",
        translationMode: "Translation Mode Switch",
        fav: "Favorite",
        videoTrans: "Video translation",
        settings: "Settings",
        btnMenus: "click to fold/unfold"
      },
      glossary: {
        title: "Choose Glossaries",
        public: "Public Glossaries",
        choosePublic: "Choose Glossaries",
        user: "User Glossaries",
        chooseUser: "Choose User Glossaries",
        add: "Add Glossaries",
        cancel: "Cancel",
        confirm: "Confirm",
        empty: "No Glossary",
        emptyUser: "No User Glossary",
        reloadTip: "Glossary has been applied, reloading page",
        using: "In Use???",
        freeText: "Only VIP/SVIP users can use glossaries",
        becomeVIP: "Become VIP>>",
        label: {
          default_en2zh: "Default_English-Chinese",
          default_zh2en: "Default_Chinese-English",
          default_ja2zh: "Default_Japanese-Chinese",
          default_zh2ja: "Default_Chinese-Japanese",
          default_all2all: "Default"
        }
      },
      zh: "Simplified Chinese",
      en: "English",
      ja: "Japanses",
      transZh2En: "zh >> en",
      transEn2Zh: "en >> zh",
      transJp2Zh: "ja >> zh",
      transZh2EnAbbr: "zh-en",
      transEn2ZhAbbr: "en-zh",
      transJp2ZhAbbr: "ja-zh",
      showOrg: "Original Language",
      showTgt: "Target Language",
      showBil: "Bilingual Subtitle",
      showOrgAbbr: "Original",
      showTgtAbbr: "Target",
      showBilAbbr: "Bilingual",
      hideRwdBtn: "Hide the menu",
      showRwdBtn: "Show the menu",
      startVideoTransBtn: "Play",
      stopVideoTransBtn: "Stop",
      clickToStartTrans:
        "Click 'Play' to enjoy bilingual subtitles of videos produced by LingoCloud AI",
      requestReloadAndReload:
        "To protect your privacy, the auto video translation can only be invoked by clicking the browser action or the context menu. After that, Lingocloud is allow to translate video subtitles automatically if it finds a translatable video.",
      requestingAudioMsg:
        "Trying to record the audio of the video by the mircrophone ...",
      closingAudioMsg: "Turning off the audio recognization ...",
      openRecorder:
        "Recognizing the audio of video, trying to create the WebSocket ...",
      openRecorderError: "Failed to recognize the audio of video ... ",
      recording: "Recognizing ...",
      closeRecorder: "The microphone is turned off",
      minimizeTransTip: "Double click the LingoCloud subtitle to minimize it",
      maximizeTransTip: "Double click the LingoCloud subtitle to maximize it",
      wsIsOpen: "The WebSocket is created",
      wsIsConnecting:
        "The WebSocket is trying to connect the LingoCloud service ...",
      wsIsNotOpened:
        "Error happened with creating WebSocket, please check your internet connection or contact us",
      wsError:
        "Error happened with connecting to the LingoCloud service, please check your internet connection or contact us",
      VideoTransReqLogin:
        "We recommend to log in LingoCloud and enjoy bilingual subtitles of videos produced by AI! If you just logged in, please reload the website and click the extension",
      searchingVideo: "LingoCloud is searching for the video of this page ...",
      videoNotFound:
        "Woops! LingoCloud can not find any translatable video, but it still tries to provide you subtitle.",
      videoBtnTitle: "Video Translation (Beta)",
      videoAlertMuted: "In order to recognize audio, please unmute the video",
      RequireAllowAccessFile:
        "Please click 'Allow access to file URLs' of LingoCloud Interpreter at chrome://extensions, then LingoCloud can provide you translation for local files",
      getCookieFailed:
        "Failed to get cookie, please click the extension again and authorize LingoCloud to get the data",
      getAllUrlsFailed:
        "In order for you to use the selection translation, automatic translation and video translation functions normally, please allow Lingocloud to read and change all the data on the website you visit.",
      getCookiesPermissionFailed:
        "Unable to access Cookie, you will not be able to login, please allow LingoCloud to read and change the site's data",
      networkErr:
        "Failed to connect to the internet, please check your internet connection~",
      swtErr:
        "Translation does not work well, please refresh the page and try again~",
      tooFreqentErr: "Too frequently operation, please try again later~",
      multiParagraghErr:
        "You may NOT translate multiple paragraphs at one time, please try again~",
      options: {
        title: "LingoCloud Options",
        isAutoSWT: "Use Selection Translate",
        targetBkgColor: "Translation Background Color",
        isEnableGa: "Enable Google Analytics to help us improve LingoCloud",
        isAutoTranslate:
          "Auto translate English/Japanese webpages into Chinese",
        transDirect: "Default Video Translation Direction",
        subType: "Default Video Translation Subtitle",
        isDirectTranslate: "Show Selection translate result directly",
        audioApi: "Default TTS Engine",
        audioSpeed: "TTS Speed",
        shortcuts: "Shortcuts",
        privacyPolicies: "Privacy Policies",
        textDocTrs: "Text Document Translate",
        userCenter: "User Center",
        lingocloudApp: "Lingocloud App",
        feedback: "Feedback",
        zh2en: "Zh ??? En",
        en2zh: "En ??? Zh",
        ja2zh: "Ja ??? Zh",
        subTypeBil: "Bilingual",
        subTypeSource: "Source Only",
        subTypeTarget: "Translation Only",
        audioReader: "Audio",
        myGlossaries: "My Glossaries",
        ttsSpeed: { slow: "Slow", standard: "Standard", fast: "Fast" }
      },
      spectrum: {
        cancelText: "cancel",
        chooseText: "choose",
        clearText: "Clear Color Selection",
        togglePaletteMoreText: "more",
        togglePaletteLessText: "less",
        noColorSelectedText: "No Color Selected"
      },
      pdfSniff: "Open PDF with Lingocloud automatically",
      pdfOpen: "Open PDF with Lingocloud",
      freeTrialPopupMessage:
        "Congratulation! You have got 60 times page translation free trial.",
      freeTrialPopupConfirm: "Got it",
      freeTrialPopupLogIn: "Login",
      "error-page-cookie":
        "Sorry, cannot request Caiyun cookies, please retry.",
      popup: {
        logout: "Logout",
        expire: "{{date}} expire",
        morePrivilege: "Enjoy more privilege with VIP",
        subscribeNow: "Subscribe now",
        renewNow: "Renew now",
        member: "",
        rechargePackage: "Recharge",
        options: "Options",
        myAccount: "My account",
        textCount: "^count^ words left",
        usageCount: "^count^ times left",
        leftCount: "^count^ words left"
      },
      none: "None"
    };
  },
  function(t) {
    t.exports = {
      appName: "???????????? - ??????????????????",
      appNameAbbr: "????????????",
      appDesc:
        "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      launchApp: "??????????????????",
      menus: {
        userCenter: "????????????",
        translationMode: "??????????????????????????????",
        fav: "????????????",
        videoTrans: "????????????",
        settings: "?????????",
        btnMenus: "????????????/??????"
      },
      glossary: {
        title: "???????????????",
        public: "???????????????",
        choosePublic: "???????????????",
        user: "???????????????",
        chooseUser: "?????????????????????",
        add: "???????????????",
        cancel: "??????",
        confirm: "??????",
        empty: "????????????",
        emptyUser: "??????????????????????????????",
        reloadTip: "??????????????????????????????????????????",
        using: "???????????????",
        freeText: "???VIP/SVIP????????????????????????",
        becomeVIP: "????????????VIP>>",
        label: {
          default_en2zh: "???????????????_??????",
          default_zh2en: "???????????????_??????",
          default_ja2zh: "???????????????_??????",
          default_zh2ja: "???????????????_??????",
          default_all2all: "???????????????"
        }
      },
      zh: "??????",
      en: "??????",
      ja: "??????",
      transZh2En: "??? >> ???",
      transEn2Zh: "??? >> ???",
      transJp2Zh: "??? >> ???",
      transZh2EnAbbr: "??? >> ???",
      transEn2ZhAbbr: "??? >> ???",
      transJp2ZhAbbr: "??? >> ???",
      showOrg: "??????",
      showTgt: "??????",
      showBil: "??????",
      showOrgAbbr: "??????",
      showTgtAbbr: "??????",
      showBilAbbr: "??????",
      hideRwdBtn: "???????????????",
      showRwdBtn: "???????????????",
      startVideoTransBtn: "??????",
      stopVideoTransBtn: "??????",
      clickToStartTrans: "??????????????????????????????????????????????????????????????????",
      requestReloadAndReload:
        "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      requestingAudioMsg: "?????????????????????????????? ...",
      closingAudioMsg: "?????????????????????????????? ...",
      openRecorder: "???????????????????????????, ???????????? WebSocket ?????? ...",
      openRecorderError: "???????????????",
      recording: "?????????...",
      closeRecorder: "?????????",
      minimizeTransTip: "???????????????????????????",
      maximizeTransTip: "??????????????????????????????",
      wsIsOpen: "????????? WebSocket",
      wsIsConnecting: "??????????????????????????????",
      wsIsNotOpened:
        "?????????WebSocket ??????????????????????????????????????????????????????????????????",
      wsError: "??????????????? WebSocket ?????????????????????????????????????????????????????????",
      VideoTransReqLogin:
        "?????????????????????????????????????????????????????????????????????????????????????????????????????????",
      searchingVideo: "???????????????????????????????????????...",
      videoNotFound:
        "???????????????????????????????????????????????????????????????????????????????????????????????????>//<",
      videoBtnTitle: "???????????????Beta???",
      videoAlertMuted:
        "?????????????????????????????????????????????????????????????????????????????????????????????>//<",
      RequireAllowAccessFile:
        "?????? chrome://extensions ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????>//<",
      getCookieFailed:
        "??????????????????????????? >//<?????????????????????????????????????????????????????????",
      getAllUrlsFailed:
        "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      getCookiesPermissionFailed:
        "????????????Cookie????????????????????????????????????????????????????????????????????????",
      networkErr: "?????????~???????????????????????????????????????????????????",
      swtErr: "?????????~?????????????????????????????????????????????????????????",
      tooFreqentErr: "?????????~??????????????????????????????????????????",
      multiParagraghErr: "?????????~???????????????????????????????????????????????????????????????",
      options: {
        title: "??????????????????????????????",
        isAutoSWT: "??????????????????",
        targetBkgColor: "????????????????????????",
        isEnableGa: "??????????????????????????????????????????????????????",
        isAutoTranslate: "??????????????????????????????????????????",
        transDirect: "????????????????????????",
        subType: "????????????????????????",
        isDirectTranslate: "????????????????????????",
        audioApi: "????????????????????????",
        audioSpeed: "??????????????????",
        shortcuts: "???????????????",
        privacyPolicies: "??????????????????",
        textDocTrs: "?????????????????????????????????",
        userCenter: "????????????",
        lingocloudApp: "????????????App",
        feedback: "????????????",
        zh2en: "?????? >> ??????",
        en2zh: "?????? >> ??????",
        ja2zh: "?????? >> ??????",
        subTypeBil: "????????????",
        subTypeSource: "???????????????",
        subTypeTarget: "???????????????",
        audioReader: "????????????",
        myGlossaries: "???????????????",
        ttsSpeed: { slow: "???", standard: "??????", fast: "???" }
      },
      spectrum: {
        cancelText: "??????",
        chooseText: "??????",
        clearText: "??????",
        togglePaletteMoreText: "????????????",
        togglePaletteLessText: "??????",
        noColorSelectedText: "????????????????????????"
      },
      pdfSniff: "?????????????????????????????? PDF",
      pdfOpen: "???????????????????????? PDF",
      freeTrialPopupMessage: "??????????????????????????????????????????60???~",
      freeTrialPopupConfirm: "?????????",
      freeTrialPopupLogIn: "??????????????????",
      "error-page-cookie": "?????????Cookie????????????????????????????????????",
      popup: {
        logout: "????????????",
        expire: "{{date}} ??????",
        morePrivilege: "??????VIP??????????????????",
        subscribeNow: "????????????",
        renewNow: "????????????",
        member: "??????",
        rechargePackage: "???????????????",
        options: "??????",
        myAccount: "????????????",
        textCount: "?????????????????? ^count^ ???",
        usageCount: "?????????????????? ^count^ ???",
        leftCount: "?????? ^count^ ???"
      },
      none: "???"
    };
  },
  function(t) {
    t.exports = {
      appName: "???????????? - ??????????????????",
      appNameAbbr: "????????????",
      appDesc: "????????????????????????????????????????????????????????????????????????????????????",
      launchApp: "??????????????????",
      menus: {
        userCenter: "????????????/??????",
        translationMode: "??????????????????????????????",
        fav: "????????????",
        videoTrans: "????????????",
        settings: "?????????",
        btnMenus: "????????????/??????"
      },
      glossary: {
        title: "???????????????",
        public: "???????????????",
        choosePublic: "???????????????",
        user: "???????????????",
        chooseUser: "?????????????????????",
        add: "???????????????",
        cancel: "??????",
        confirm: "??????",
        empty: "????????????",
        emptyUser: "??????????????????????????????",
        reloadTip: "??????????????????????????????????????????",
        using: "???????????????",
        freeText: "???VIP/SVIP???????????????????????????",
        becomeVIP: "????????????VIP>>",
        label: {
          default_en2zh: "???????????????_??????",
          default_zh2en: "???????????????_??????",
          default_ja2zh: "???????????????_??????",
          default_zh2ja: "???????????????_??????",
          default_all2all: "???????????????"
        }
      },
      hideRwdBtn: "???????????????",
      showRwdBtn: "???????????????",
      zh: "????????????",
      en: "??????",
      ja: "??????",
      transZh2En: "?????????",
      transEn2Zh: "?????????",
      transJp2Zh: "?????????",
      transZh2EnAbbr: "?????????",
      transEn2ZhAbbr: "?????????",
      transJp2ZhAbbr: "?????????",
      showOrg: "??????",
      showTgt: "??????",
      showBil: "??????",
      showOrgAbbr: "??????",
      showTgtAbbr: "??????",
      showBilAbbr: "??????",
      startVideoTransBtn: "??????",
      stopVideoTransBtn: "??????",
      clickToStartTrans: "??????????????????????????????????????????????????????????????????",
      requestReloadAndReload:
        "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      requestingAudioMsg: "?????????????????????????????? ...",
      closingAudioMsg: "?????????????????????????????? ...",
      openRecorder: "?????????????????????????????????????????? WebSocket ?????? ...???",
      openRecorderError: "???????????????",
      recording: "?????????...",
      closeRecorder: "?????????",
      minimizeTransTip: "??????????????????????????????",
      maximizeTransTip: "??????????????????????????????",
      wsIsOpen: "????????? WebSocket",
      wsIsConnecting: "??????????????????????????????",
      wsIsNotOpened:
        "?????????WebSocket ??????????????????????????????????????????????????????????????????",
      wsError: "???????????????????????????????????????????????????????????????????????????????????????",
      VideoTransReqLogin:
        "?????????????????????????????? AI ????????????????????????????????????????????????????????????????????????",
      searchingVideo: "????????????????????????????????????...",
      videoNotFound:
        "?????????????????????????????????????????????????????????????????????????????????????????????>//<",
      videoBtnTitle: "???????????????Beta???",
      videoAlertMuted:
        "?????????????????????????????????????????????????????????????????????????????????????????????>//<",
      RequireAllowAccessFile:
        "?????? chrome://extensions ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????>//<",
      getCookieFailed:
        "???????????????????????????????????????????????????????????????????????????????????????",
      getAllUrlsFailed:
        "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      getCookiesPermissionFailed:
        "????????????Cookie????????????????????????????????????????????????????????????????????????",
      networkErr: "?????????~???????????????????????????????????????????????????",
      swtErr: "?????????~?????????????????????????????????????????????????????????",
      tooFreqentErr: "?????????~??????????????????????????????????????????",
      multiParagraghErr: "?????????~???????????????????????????????????????????????????????????????",
      options: {
        title: "????????????????????????????????????",
        isAutoSWT: "??????????????????",
        targetBkgColor: "????????????????????????",
        isEnableGa: "?????????????????????????????????????????????????????????",
        isAutoTranslate: "??????????????????????????????????????????",
        transDirect: "????????????????????????",
        subType: "????????????????????????",
        isDirectTranslate: "????????????????????????",
        audioApi: "????????????????????????",
        audioSpeed: "??????????????????",
        shortcuts: "???????????????",
        privacyPolicies: "??????????????????",
        textDocTrs: "?????????????????????????????????",
        userCenter: "????????????",
        lingocloudApp: "????????????App",
        feedback: "????????????",
        zh2en: "?????? >> ??????",
        en2zh: "?????? >> ??????",
        ja2zh: "?????? >> ??????",
        subTypeBil: "????????????",
        subTypeSource: "???????????????",
        subTypeTarget: "???????????????",
        audioReader: "????????????",
        myGlossaries: "???????????????",
        ttsSpeed: { slow: "???", standard: "??????", fast: "???" }
      },
      spectrum: {
        cancelText: "??????",
        chooseText: "??????",
        clearText: "??????",
        togglePaletteMoreText: "????????????",
        togglePaletteLessText: "??????",
        noColorSelectedText: "????????????????????????"
      },
      pdfSniff: "?????????????????????????????? PDF",
      pdfOpen: "???????????????????????? PDF",
      freeTrialPopupMessage: "??????????????????????????????????????????60???~",
      freeTrialPopupConfirm: "?????????",
      freeTrialPopupLogIn: "??????????????????",
      "error-page-cookie": "?????????Cookie??????????????????????????????????????????",
      popup: {
        logout: "????????????",
        expire: "{{date}} ??????",
        morePrivilege: "??????VIP??????????????????",
        subscribeNow: "????????????",
        renewNow: "????????????",
        member: "??????",
        rechargePackage: "???????????????",
        options: "??????",
        myAccount: "????????????",
        textCount: "?????????????????? ^count^ ???",
        usageCount: "?????????????????? ^count^ ???",
        leftCount: "?????? ^count^ ???"
      },
      none: "???"
    };
  },
  ,
  function(t, e, n) {
    "use strict";
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function a(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function l(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function s(t, e) {
      return (s =
        Object.setPrototypeOf ||
        function(t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function c(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 }
      })),
        e && s(t, e);
    }
    n.r(e);
    var u = n(58),
      f = n.n(u);
    function d(t, e) {
      if (e && ("object" === f()(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return l(t);
    }
    function p(t) {
      return (p = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function h(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      );
    }
    function b(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function g(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function m(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? g(Object(n), !0).forEach(function(e) {
              h(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : g(Object(n)).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    n.d(e, "changeLanguage", function() {
      return pt;
    }),
      n.d(e, "createInstance", function() {
        return st;
      }),
      n.d(e, "exists", function() {
        return gt;
      }),
      n.d(e, "getFixedT", function() {
        return ht;
      }),
      n.d(e, "hasLoadedNamespace", function() {
        return vt;
      }),
      n.d(e, "init", function() {
        return ct;
      }),
      n.d(e, "loadLanguages", function() {
        return xt;
      }),
      n.d(e, "loadNamespaces", function() {
        return yt;
      }),
      n.d(e, "loadResources", function() {
        return ut;
      }),
      n.d(e, "reloadResources", function() {
        return ft;
      }),
      n.d(e, "setDefaultNamespace", function() {
        return mt;
      }),
      n.d(e, "t", function() {
        return bt;
      }),
      n.d(e, "use", function() {
        return dt;
      });
    var v = {
        type: "logger",
        log: function(t) {
          this.output("log", t);
        },
        warn: function(t) {
          this.output("warn", t);
        },
        error: function(t) {
          this.output("error", t);
        },
        output: function(t, e) {
          console && console[t];
        }
      },
      y = new ((function() {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          o(this, t), this.init(e, n);
        }
        return (
          a(t, [
            {
              key: "init",
              value: function(t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                (this.prefix = e.prefix || "i18next:"),
                  (this.logger = t || v),
                  (this.options = e),
                  (this.debug = e.debug);
              }
            },
            {
              key: "setDebug",
              value: function(t) {
                this.debug = t;
              }
            },
            {
              key: "log",
              value: function() {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  e[n] = arguments[n];
                return this.forward(e, "log", "", !0);
              }
            },
            {
              key: "warn",
              value: function() {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  e[n] = arguments[n];
                return this.forward(e, "warn", "", !0);
              }
            },
            {
              key: "error",
              value: function() {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  e[n] = arguments[n];
                return this.forward(e, "error", "");
              }
            },
            {
              key: "deprecate",
              value: function() {
                for (
                  var t = arguments.length, e = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  e[n] = arguments[n];
                return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
              }
            },
            {
              key: "forward",
              value: function(t, e, n, r) {
                return r && !this.debug
                  ? null
                  : ("string" == typeof t[0] &&
                      (t[0] = ""
                        .concat(n)
                        .concat(this.prefix, " ")
                        .concat(t[0])),
                    this.logger[e](t));
              }
            },
            {
              key: "create",
              value: function(e) {
                return new t(
                  this.logger,
                  m(
                    m(
                      {},
                      { prefix: "".concat(this.prefix, ":").concat(e, ":") }
                    ),
                    this.options
                  )
                );
              }
            }
          ]),
          t
        );
      })())(),
      x = (function() {
        function t() {
          o(this, t), (this.observers = {});
        }
        return (
          a(t, [
            {
              key: "on",
              value: function(t, e) {
                var n = this;
                return (
                  t.split(" ").forEach(function(t) {
                    (n.observers[t] = n.observers[t] || []),
                      n.observers[t].push(e);
                  }),
                  this
                );
              }
            },
            {
              key: "off",
              value: function(t, e) {
                this.observers[t] &&
                  (e
                    ? (this.observers[t] = this.observers[t].filter(function(
                        t
                      ) {
                        return t !== e;
                      }))
                    : delete this.observers[t]);
              }
            },
            {
              key: "emit",
              value: function(t) {
                for (
                  var e = arguments.length,
                    n = new Array(e > 1 ? e - 1 : 0),
                    r = 1;
                  r < e;
                  r++
                )
                  n[r - 1] = arguments[r];
                this.observers[t] &&
                  [].concat(this.observers[t]).forEach(function(t) {
                    t.apply(void 0, n);
                  }),
                  this.observers["*"] &&
                    [].concat(this.observers["*"]).forEach(function(e) {
                      e.apply(e, [t].concat(n));
                    });
              }
            }
          ]),
          t
        );
      })();
    function w() {
      var t,
        e,
        n = new Promise(function(n, r) {
          (t = n), (e = r);
        });
      return (n.resolve = t), (n.reject = e), n;
    }
    function k(t) {
      return null == t ? "" : "" + t;
    }
    function j(t, e, n) {
      function r(t) {
        return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t;
      }
      function o() {
        return !t || "string" == typeof t;
      }
      for (
        var i = "string" != typeof e ? [].concat(e) : e.split(".");
        i.length > 1;

      ) {
        if (o()) return {};
        var a = r(i.shift());
        !t[a] && n && (t[a] = new n()),
          (t = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : {});
      }
      return o() ? {} : { obj: t, k: r(i.shift()) };
    }
    function O(t, e, n) {
      var r = j(t, e, Object);
      r.obj[r.k] = n;
    }
    function _(t, e) {
      var n = j(t, e),
        r = n.obj,
        o = n.k;
      if (r) return r[o];
    }
    function S(t, e, n) {
      var r = _(t, n);
      return void 0 !== r ? r : _(e, n);
    }
    function E(t) {
      return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    var C = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;"
    };
    function T(t) {
      return "string" == typeof t
        ? t.replace(/[&<>"'\/]/g, function(t) {
            return C[t];
          })
        : t;
    }
    var A =
        "undefined" != typeof window &&
        window.navigator &&
        window.navigator.userAgent &&
        window.navigator.userAgent.indexOf("MSIE") > -1,
      z = [" ", ",", "?", "!", ";"];
    function $(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function P(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? $(Object(n), !0).forEach(function(e) {
              h(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : $(Object(n)).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var L = (function(t) {
        c(n, x);
        var e = (function(t) {
          var e = (function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function() {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function() {
            var n,
              r = p(t);
            if (e) {
              var o = p(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return d(this, n);
          };
        })(n);
        function n(t) {
          var r,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { ns: ["translation"], defaultNS: "translation" };
          return (
            o(this, n),
            (r = e.call(this)),
            A && x.call(l(r)),
            (r.data = t || {}),
            (r.options = i),
            void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
            void 0 === r.options.ignoreJSONStructure &&
              (r.options.ignoreJSONStructure = !0),
            r
          );
        }
        return (
          a(n, [
            {
              key: "addNamespaces",
              value: function(t) {
                this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
              }
            },
            {
              key: "removeNamespaces",
              value: function(t) {
                var e = this.options.ns.indexOf(t);
                e > -1 && this.options.ns.splice(e, 1);
              }
            },
            {
              key: "getResource",
              value: function(t, e, n) {
                var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  o =
                    void 0 !== r.keySeparator
                      ? r.keySeparator
                      : this.options.keySeparator,
                  i =
                    void 0 !== r.ignoreJSONStructure
                      ? r.ignoreJSONStructure
                      : this.options.ignoreJSONStructure,
                  a = [t, e];
                n && "string" != typeof n && (a = a.concat(n)),
                  n &&
                    "string" == typeof n &&
                    (a = a.concat(o ? n.split(o) : n)),
                  t.indexOf(".") > -1 && (a = t.split("."));
                var l = _(this.data, a);
                return l || !i || "string" != typeof n
                  ? l
                  : (function t(e, n) {
                      var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : ".";
                      if (e) {
                        if (e[n]) return e[n];
                        for (
                          var o = n.split(r), i = e, a = 0;
                          a < o.length;
                          ++a
                        ) {
                          if (!i) return;
                          if ("string" == typeof i[o[a]] && a + 1 < o.length)
                            return;
                          if (void 0 === i[o[a]]) {
                            for (
                              var l = 2,
                                s = o.slice(a, a + l).join(r),
                                c = i[s];
                              void 0 === c && o.length > a + l;

                            )
                              l++, (c = i[(s = o.slice(a, a + l).join(r))]);
                            if (void 0 === c) return;
                            if ("string" == typeof c) return c;
                            if (s && "string" == typeof c[s]) return c[s];
                            var u = o.slice(a + l).join(r);
                            return u ? t(c, u, r) : void 0;
                          }
                          i = i[o[a]];
                        }
                        return i;
                      }
                    })(this.data && this.data[t] && this.data[t][e], n, o);
              }
            },
            {
              key: "addResource",
              value: function(t, e, n, r) {
                var o =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : { silent: !1 },
                  i = this.options.keySeparator;
                void 0 === i && (i = ".");
                var a = [t, e];
                n && (a = a.concat(i ? n.split(i) : n)),
                  t.indexOf(".") > -1 && ((r = e), (e = (a = t.split("."))[1])),
                  this.addNamespaces(e),
                  O(this.data, a, r),
                  o.silent || this.emit("added", t, e, n, r);
              }
            },
            {
              key: "addResources",
              value: function(t, e, n) {
                var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : { silent: !1 };
                for (var o in n)
                  ("string" != typeof n[o] &&
                    "[object Array]" !==
                      Object.prototype.toString.apply(n[o])) ||
                    this.addResource(t, e, o, n[o], { silent: !0 });
                r.silent || this.emit("added", t, e, n);
              }
            },
            {
              key: "addResourceBundle",
              value: function(t, e, n, r, o) {
                var i =
                    arguments.length > 5 && void 0 !== arguments[5]
                      ? arguments[5]
                      : { silent: !1 },
                  a = [t, e];
                t.indexOf(".") > -1 &&
                  ((r = n), (n = e), (e = (a = t.split("."))[1])),
                  this.addNamespaces(e);
                var l = _(this.data, a) || {};
                r
                  ? (function t(e, n, r) {
                      for (var o in n)
                        "__proto__" !== o &&
                          "constructor" !== o &&
                          (o in e
                            ? "string" == typeof e[o] ||
                              e[o] instanceof String ||
                              "string" == typeof n[o] ||
                              n[o] instanceof String
                              ? r && (e[o] = n[o])
                              : t(e[o], n[o], r)
                            : (e[o] = n[o]));
                      return e;
                    })(l, n, o)
                  : (l = P(P({}, l), n)),
                  O(this.data, a, l),
                  i.silent || this.emit("added", t, e, n);
              }
            },
            {
              key: "removeResourceBundle",
              value: function(t, e) {
                this.hasResourceBundle(t, e) && delete this.data[t][e],
                  this.removeNamespaces(e),
                  this.emit("removed", t, e);
              }
            },
            {
              key: "hasResourceBundle",
              value: function(t, e) {
                return void 0 !== this.getResource(t, e);
              }
            },
            {
              key: "getResourceBundle",
              value: function(t, e) {
                return (
                  e || (e = this.options.defaultNS),
                  "v1" === this.options.compatibilityAPI
                    ? P(P({}, {}), this.getResource(t, e))
                    : this.getResource(t, e)
                );
              }
            },
            {
              key: "getDataByLanguage",
              value: function(t) {
                return this.data[t];
              }
            },
            {
              key: "hasLanguageSomeTranslations",
              value: function(t) {
                var e = this.getDataByLanguage(t);
                return !!((e && Object.keys(e)) || []).find(function(t) {
                  return e[t] && Object.keys(e[t]).length > 0;
                });
              }
            },
            {
              key: "toJSON",
              value: function() {
                return this.data;
              }
            }
          ]),
          n
        );
      })(),
      R = {
        processors: {},
        addPostProcessor: function(t) {
          this.processors[t.name] = t;
        },
        handle: function(t, e, n, r, o) {
          var i = this;
          return (
            t.forEach(function(t) {
              i.processors[t] && (e = i.processors[t].process(e, n, r, o));
            }),
            e
          );
        }
      };
    function N(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function D(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? N(Object(n), !0).forEach(function(e) {
              h(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : N(Object(n)).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var I = {},
      F = (function(t) {
        c(n, x);
        var e = (function(t) {
          var e = (function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function() {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function() {
            var n,
              r = p(t);
            if (e) {
              var o = p(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return d(this, n);
          };
        })(n);
        function n(t) {
          var r,
            i,
            a,
            s,
            c =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            o(this, n),
            (r = e.call(this)),
            A && x.call(l(r)),
            (i = [
              "resourceStore",
              "languageUtils",
              "pluralResolver",
              "interpolator",
              "backendConnector",
              "i18nFormat",
              "utils"
            ]),
            (a = t),
            (s = l(r)),
            i.forEach(function(t) {
              a[t] && (s[t] = a[t]);
            }),
            (r.options = c),
            void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
            (r.logger = y.create("translator")),
            r
          );
        }
        return (
          a(
            n,
            [
              {
                key: "changeLanguage",
                value: function(t) {
                  t && (this.language = t);
                }
              },
              {
                key: "exists",
                value: function(t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} };
                  if (null == t) return !1;
                  var n = this.resolve(t, e);
                  return n && void 0 !== n.res;
                }
              },
              {
                key: "extractFromKey",
                value: function(t, e) {
                  var n =
                    void 0 !== e.nsSeparator
                      ? e.nsSeparator
                      : this.options.nsSeparator;
                  void 0 === n && (n = ":");
                  var r =
                      void 0 !== e.keySeparator
                        ? e.keySeparator
                        : this.options.keySeparator,
                    o = e.ns || this.options.defaultNS,
                    i = n && t.indexOf(n) > -1,
                    a = !(
                      this.options.userDefinedKeySeparator ||
                      e.keySeparator ||
                      this.options.userDefinedNsSeparator ||
                      e.nsSeparator ||
                      (function(t, e, n) {
                        (e = e || ""), (n = n || "");
                        var r = z.filter(function(t) {
                          return e.indexOf(t) < 0 && n.indexOf(t) < 0;
                        });
                        if (0 === r.length) return !0;
                        var o = new RegExp(
                            "(".concat(
                              r
                                .map(function(t) {
                                  return "?" === t ? "\\?" : t;
                                })
                                .join("|"),
                              ")"
                            )
                          ),
                          i = !o.test(t);
                        if (!i) {
                          var a = t.indexOf(n);
                          a > 0 && !o.test(t.substring(0, a)) && (i = !0);
                        }
                        return i;
                      })(t, n, r)
                    );
                  if (i && !a) {
                    var l = t.match(this.interpolator.nestingRegexp);
                    if (l && l.length > 0) return { key: t, namespaces: o };
                    var s = t.split(n);
                    (n !== r ||
                      (n === r && this.options.ns.indexOf(s[0]) > -1)) &&
                      (o = s.shift()),
                      (t = s.join(r));
                  }
                  return (
                    "string" == typeof o && (o = [o]), { key: t, namespaces: o }
                  );
                }
              },
              {
                key: "translate",
                value: function(t, e, o) {
                  var i = this;
                  if (
                    ("object" !== r(e) &&
                      this.options.overloadTranslationOptionHandler &&
                      (e = this.options.overloadTranslationOptionHandler(
                        arguments
                      )),
                    e || (e = {}),
                    null == t)
                  )
                    return "";
                  Array.isArray(t) || (t = [String(t)]);
                  var a =
                      void 0 !== e.keySeparator
                        ? e.keySeparator
                        : this.options.keySeparator,
                    l = this.extractFromKey(t[t.length - 1], e),
                    s = l.key,
                    c = l.namespaces,
                    u = c[c.length - 1],
                    f = e.lng || this.language,
                    d =
                      e.appendNamespaceToCIMode ||
                      this.options.appendNamespaceToCIMode;
                  if (f && "cimode" === f.toLowerCase()) {
                    if (d) {
                      var p = e.nsSeparator || this.options.nsSeparator;
                      return u + p + s;
                    }
                    return s;
                  }
                  var h = this.resolve(t, e),
                    b = h && h.res,
                    g = (h && h.usedKey) || s,
                    m = (h && h.exactUsedKey) || s,
                    v = Object.prototype.toString.apply(b),
                    y =
                      void 0 !== e.joinArrays
                        ? e.joinArrays
                        : this.options.joinArrays,
                    x = !this.i18nFormat || this.i18nFormat.handleAsObject;
                  if (
                    x &&
                    b &&
                    "string" != typeof b &&
                    "boolean" != typeof b &&
                    "number" != typeof b &&
                    [
                      "[object Number]",
                      "[object Function]",
                      "[object RegExp]"
                    ].indexOf(v) < 0 &&
                    ("string" != typeof y || "[object Array]" !== v)
                  ) {
                    if (!e.returnObjects && !this.options.returnObjects)
                      return (
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            "accessing an object - but returnObjects options is not enabled!"
                          ),
                        this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(
                              g,
                              b,
                              D(D({}, e), {}, { ns: c })
                            )
                          : "key '"
                              .concat(s, " (")
                              .concat(
                                this.language,
                                ")' returned an object instead of string."
                              )
                      );
                    if (a) {
                      var w = "[object Array]" === v,
                        k = w ? [] : {},
                        j = w ? m : g;
                      for (var O in b)
                        if (Object.prototype.hasOwnProperty.call(b, O)) {
                          var _ = ""
                            .concat(j)
                            .concat(a)
                            .concat(O);
                          (k[O] = this.translate(
                            _,
                            D(D({}, e), { joinArrays: !1, ns: c })
                          )),
                            k[O] === _ && (k[O] = b[O]);
                        }
                      b = k;
                    }
                  } else if (
                    x &&
                    "string" == typeof y &&
                    "[object Array]" === v
                  )
                    (b = b.join(y)) && (b = this.extendTranslation(b, t, e, o));
                  else {
                    var S = !1,
                      E = !1,
                      C = void 0 !== e.count && "string" != typeof e.count,
                      T = n.hasDefaultValue(e),
                      A = C ? this.pluralResolver.getSuffix(f, e.count, e) : "",
                      z = e["defaultValue".concat(A)] || e.defaultValue;
                    !this.isValidLookup(b) && T && ((S = !0), (b = z)),
                      this.isValidLookup(b) || ((E = !0), (b = s));
                    var $ =
                        (e.missingKeyNoValueFallbackToKey ||
                          this.options.missingKeyNoValueFallbackToKey) &&
                        E
                          ? void 0
                          : b,
                      P = T && z !== b && this.options.updateMissing;
                    if (E || S || P) {
                      if (
                        (this.logger.log(
                          P ? "updateKey" : "missingKey",
                          f,
                          u,
                          s,
                          P ? z : b
                        ),
                        a)
                      ) {
                        var L = this.resolve(
                          s,
                          D(D({}, e), {}, { keySeparator: !1 })
                        );
                        L &&
                          L.res &&
                          this.logger.warn(
                            "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                          );
                      }
                      var R = [],
                        N = this.languageUtils.getFallbackCodes(
                          this.options.fallbackLng,
                          e.lng || this.language
                        );
                      if (
                        "fallback" === this.options.saveMissingTo &&
                        N &&
                        N[0]
                      )
                        for (var I = 0; I < N.length; I++) R.push(N[I]);
                      else
                        "all" === this.options.saveMissingTo
                          ? (R = this.languageUtils.toResolveHierarchy(
                              e.lng || this.language
                            ))
                          : R.push(e.lng || this.language);
                      var F = function(t, n, r) {
                        i.options.missingKeyHandler
                          ? i.options.missingKeyHandler(
                              t,
                              u,
                              n,
                              P ? r : $,
                              P,
                              e
                            )
                          : i.backendConnector &&
                            i.backendConnector.saveMissing &&
                            i.backendConnector.saveMissing(
                              t,
                              u,
                              n,
                              P ? r : $,
                              P,
                              e
                            ),
                          i.emit("missingKey", t, u, n, b);
                      };
                      this.options.saveMissing &&
                        (this.options.saveMissingPlurals && C
                          ? R.forEach(function(t) {
                              i.pluralResolver
                                .getSuffixes(t)
                                .forEach(function(n) {
                                  F(
                                    [t],
                                    s + n,
                                    e["defaultValue".concat(n)] || z
                                  );
                                });
                            })
                          : F(R, s, z));
                    }
                    (b = this.extendTranslation(b, t, e, h, o)),
                      E &&
                        b === s &&
                        this.options.appendNamespaceToMissingKey &&
                        (b = "".concat(u, ":").concat(s)),
                      (E || S) &&
                        this.options.parseMissingKeyHandler &&
                        (b = this.options.parseMissingKeyHandler(b));
                  }
                  return b;
                }
              },
              {
                key: "extendTranslation",
                value: function(t, e, n, r, o) {
                  var i = this;
                  if (this.i18nFormat && this.i18nFormat.parse)
                    t = this.i18nFormat.parse(
                      t,
                      n,
                      r.usedLng,
                      r.usedNS,
                      r.usedKey,
                      { resolved: r }
                    );
                  else if (!n.skipInterpolation) {
                    n.interpolation &&
                      this.interpolator.init(
                        D(D({}, n), {
                          interpolation: D(
                            D({}, this.options.interpolation),
                            n.interpolation
                          )
                        })
                      );
                    var a,
                      l =
                        (n.interpolation && n.interpolation.skipOnVariables) ||
                        this.options.interpolation.skipOnVariables;
                    if (l) {
                      var s = t.match(this.interpolator.nestingRegexp);
                      a = s && s.length;
                    }
                    var c =
                      n.replace && "string" != typeof n.replace ? n.replace : n;
                    if (
                      (this.options.interpolation.defaultVariables &&
                        (c = D(
                          D({}, this.options.interpolation.defaultVariables),
                          c
                        )),
                      (t = this.interpolator.interpolate(
                        t,
                        c,
                        n.lng || this.language,
                        n
                      )),
                      l)
                    ) {
                      var u = t.match(this.interpolator.nestingRegexp);
                      a < (u && u.length) && (n.nest = !1);
                    }
                    !1 !== n.nest &&
                      (t = this.interpolator.nest(
                        t,
                        function() {
                          for (
                            var t = arguments.length, r = new Array(t), a = 0;
                            a < t;
                            a++
                          )
                            r[a] = arguments[a];
                          return o && o[0] === r[0] && !n.context
                            ? (i.logger.warn(
                                "It seems you are nesting recursively key: "
                                  .concat(r[0], " in key: ")
                                  .concat(e[0])
                              ),
                              null)
                            : i.translate.apply(i, r.concat([e]));
                        },
                        n
                      )),
                      n.interpolation && this.interpolator.reset();
                  }
                  var f = n.postProcess || this.options.postProcess,
                    d = "string" == typeof f ? [f] : f;
                  return (
                    null != t &&
                      d &&
                      d.length &&
                      !1 !== n.applyPostProcessor &&
                      (t = R.handle(
                        d,
                        t,
                        e,
                        this.options && this.options.postProcessPassResolved
                          ? D({ i18nResolved: r }, n)
                          : n,
                        this
                      )),
                    t
                  );
                }
              },
              {
                key: "resolve",
                value: function(t) {
                  var e,
                    n,
                    r,
                    o,
                    i,
                    a = this,
                    l =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    "string" == typeof t && (t = [t]),
                    t.forEach(function(t) {
                      if (!a.isValidLookup(e)) {
                        var s = a.extractFromKey(t, l),
                          c = s.key;
                        n = c;
                        var u = s.namespaces;
                        a.options.fallbackNS &&
                          (u = u.concat(a.options.fallbackNS));
                        var f =
                            void 0 !== l.count && "string" != typeof l.count,
                          d =
                            void 0 !== l.context &&
                            ("string" == typeof l.context ||
                              "number" == typeof l.context) &&
                            "" !== l.context,
                          p = l.lngs
                            ? l.lngs
                            : a.languageUtils.toResolveHierarchy(
                                l.lng || a.language,
                                l.fallbackLng
                              );
                        u.forEach(function(t) {
                          a.isValidLookup(e) ||
                            ((i = t),
                            !I["".concat(p[0], "-").concat(t)] &&
                              a.utils &&
                              a.utils.hasLoadedNamespace &&
                              !a.utils.hasLoadedNamespace(i) &&
                              ((I["".concat(p[0], "-").concat(t)] = !0),
                              a.logger.warn(
                                'key "'
                                  .concat(n, '" for languages "')
                                  .concat(
                                    p.join(", "),
                                    '" won\'t get resolved as namespace "'
                                  )
                                  .concat(i, '" was not yet loaded'),
                                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                              )),
                            p.forEach(function(n) {
                              if (!a.isValidLookup(e)) {
                                o = n;
                                var i,
                                  s,
                                  u = c,
                                  p = [u];
                                for (
                                  a.i18nFormat && a.i18nFormat.addLookupKeys
                                    ? a.i18nFormat.addLookupKeys(p, c, n, t, l)
                                    : (f &&
                                        (i = a.pluralResolver.getSuffix(
                                          n,
                                          l.count,
                                          l
                                        )),
                                      f && d && p.push(u + i),
                                      d &&
                                        p.push(
                                          (u += ""
                                            .concat(a.options.contextSeparator)
                                            .concat(l.context))
                                        ),
                                      f && p.push((u += i)));
                                  (s = p.pop());

                                )
                                  a.isValidLookup(e) ||
                                    ((r = s), (e = a.getResource(n, t, s, l)));
                              }
                            }));
                        });
                      }
                    }),
                    {
                      res: e,
                      usedKey: n,
                      exactUsedKey: r,
                      usedLng: o,
                      usedNS: i
                    }
                  );
                }
              },
              {
                key: "isValidLookup",
                value: function(t) {
                  return !(
                    void 0 === t ||
                    (!this.options.returnNull && null === t) ||
                    (!this.options.returnEmptyString && "" === t)
                  );
                }
              },
              {
                key: "getResource",
                value: function(t, e, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  return this.i18nFormat && this.i18nFormat.getResource
                    ? this.i18nFormat.getResource(t, e, n, r)
                    : this.resourceStore.getResource(t, e, n, r);
                }
              }
            ],
            [
              {
                key: "hasDefaultValue",
                value: function(t) {
                  for (var e in t)
                    if (
                      Object.prototype.hasOwnProperty.call(t, e) &&
                      "defaultValue" ===
                        e.substring(0, "defaultValue".length) &&
                      void 0 !== t[e]
                    )
                      return !0;
                  return !1;
                }
              }
            ]
          ),
          n
        );
      })();
    function M(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
    var B = (function() {
        function t(e) {
          o(this, t),
            (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = y.create("languageUtils"));
        }
        return (
          a(t, [
            {
              key: "getScriptPartFromCode",
              value: function(t) {
                if (!t || t.indexOf("-") < 0) return null;
                var e = t.split("-");
                return 2 === e.length
                  ? null
                  : (e.pop(),
                    "x" === e[e.length - 1].toLowerCase()
                      ? null
                      : this.formatLanguageCode(e.join("-")));
              }
            },
            {
              key: "getLanguagePartFromCode",
              value: function(t) {
                if (!t || t.indexOf("-") < 0) return t;
                var e = t.split("-");
                return this.formatLanguageCode(e[0]);
              }
            },
            {
              key: "formatLanguageCode",
              value: function(t) {
                if ("string" == typeof t && t.indexOf("-") > -1) {
                  var e = [
                      "hans",
                      "hant",
                      "latn",
                      "cyrl",
                      "cans",
                      "mong",
                      "arab"
                    ],
                    n = t.split("-");
                  return (
                    this.options.lowerCaseLng
                      ? (n = n.map(function(t) {
                          return t.toLowerCase();
                        }))
                      : 2 === n.length
                      ? ((n[0] = n[0].toLowerCase()),
                        (n[1] = n[1].toUpperCase()),
                        e.indexOf(n[1].toLowerCase()) > -1 &&
                          (n[1] = M(n[1].toLowerCase())))
                      : 3 === n.length &&
                        ((n[0] = n[0].toLowerCase()),
                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                        "sgn" !== n[0] &&
                          2 === n[2].length &&
                          (n[2] = n[2].toUpperCase()),
                        e.indexOf(n[1].toLowerCase()) > -1 &&
                          (n[1] = M(n[1].toLowerCase())),
                        e.indexOf(n[2].toLowerCase()) > -1 &&
                          (n[2] = M(n[2].toLowerCase()))),
                    n.join("-")
                  );
                }
                return this.options.cleanCode || this.options.lowerCaseLng
                  ? t.toLowerCase()
                  : t;
              }
            },
            {
              key: "isSupportedCode",
              value: function(t) {
                return (
                  ("languageOnly" === this.options.load ||
                    this.options.nonExplicitSupportedLngs) &&
                    (t = this.getLanguagePartFromCode(t)),
                  !this.supportedLngs ||
                    !this.supportedLngs.length ||
                    this.supportedLngs.indexOf(t) > -1
                );
              }
            },
            {
              key: "getBestMatchFromCodes",
              value: function(t) {
                var e,
                  n = this;
                return t
                  ? (t.forEach(function(t) {
                      if (!e) {
                        var r = n.formatLanguageCode(t);
                        (n.options.supportedLngs && !n.isSupportedCode(r)) ||
                          (e = r);
                      }
                    }),
                    !e &&
                      this.options.supportedLngs &&
                      t.forEach(function(t) {
                        if (!e) {
                          var r = n.getLanguagePartFromCode(t);
                          if (n.isSupportedCode(r)) return (e = r);
                          e = n.options.supportedLngs.find(function(t) {
                            if (0 === t.indexOf(r)) return t;
                          });
                        }
                      }),
                    e ||
                      (e = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    e)
                  : null;
              }
            },
            {
              key: "getFallbackCodes",
              value: function(t, e) {
                if (!t) return [];
                if (
                  ("function" == typeof t && (t = t(e)),
                  "string" == typeof t && (t = [t]),
                  "[object Array]" === Object.prototype.toString.apply(t))
                )
                  return t;
                if (!e) return t.default || [];
                var n = t[e];
                return (
                  n || (n = t[this.getScriptPartFromCode(e)]),
                  n || (n = t[this.formatLanguageCode(e)]),
                  n || (n = t[this.getLanguagePartFromCode(e)]),
                  n || (n = t.default),
                  n || []
                );
              }
            },
            {
              key: "toResolveHierarchy",
              value: function(t, e) {
                var n = this,
                  r = this.getFallbackCodes(
                    e || this.options.fallbackLng || [],
                    t
                  ),
                  o = [],
                  i = function(t) {
                    t &&
                      (n.isSupportedCode(t)
                        ? o.push(t)
                        : n.logger.warn(
                            "rejecting language code not found in supportedLngs: ".concat(
                              t
                            )
                          ));
                  };
                return (
                  "string" == typeof t && t.indexOf("-") > -1
                    ? ("languageOnly" !== this.options.load &&
                        i(this.formatLanguageCode(t)),
                      "languageOnly" !== this.options.load &&
                        "currentOnly" !== this.options.load &&
                        i(this.getScriptPartFromCode(t)),
                      "currentOnly" !== this.options.load &&
                        i(this.getLanguagePartFromCode(t)))
                    : "string" == typeof t && i(this.formatLanguageCode(t)),
                  r.forEach(function(t) {
                    o.indexOf(t) < 0 && i(n.formatLanguageCode(t));
                  }),
                  o
                );
              }
            }
          ]),
          t
        );
      })(),
      q = [
        {
          lngs: [
            "ach",
            "ak",
            "am",
            "arn",
            "br",
            "fil",
            "gun",
            "ln",
            "mfe",
            "mg",
            "mi",
            "oc",
            "pt",
            "pt-BR",
            "tg",
            "tl",
            "ti",
            "tr",
            "uz",
            "wa"
          ],
          nr: [1, 2],
          fc: 1
        },
        {
          lngs: [
            "af",
            "an",
            "ast",
            "az",
            "bg",
            "bn",
            "ca",
            "da",
            "de",
            "dev",
            "el",
            "en",
            "eo",
            "es",
            "et",
            "eu",
            "fi",
            "fo",
            "fur",
            "fy",
            "gl",
            "gu",
            "ha",
            "hi",
            "hu",
            "hy",
            "ia",
            "it",
            "kk",
            "kn",
            "ku",
            "lb",
            "mai",
            "ml",
            "mn",
            "mr",
            "nah",
            "nap",
            "nb",
            "ne",
            "nl",
            "nn",
            "no",
            "nso",
            "pa",
            "pap",
            "pms",
            "ps",
            "pt-PT",
            "rm",
            "sco",
            "se",
            "si",
            "so",
            "son",
            "sq",
            "sv",
            "sw",
            "ta",
            "te",
            "tk",
            "ur",
            "yo"
          ],
          nr: [1, 2],
          fc: 2
        },
        {
          lngs: [
            "ay",
            "bo",
            "cgg",
            "fa",
            "ht",
            "id",
            "ja",
            "jbo",
            "ka",
            "km",
            "ko",
            "ky",
            "lo",
            "ms",
            "sah",
            "su",
            "th",
            "tt",
            "ug",
            "vi",
            "wo",
            "zh"
          ],
          nr: [1],
          fc: 3
        },
        {
          lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
          nr: [1, 2, 5],
          fc: 4
        },
        { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
        { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
        { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
        { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
        { lngs: ["fr"], nr: [1, 2], fc: 9 },
        { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
        { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
        { lngs: ["is"], nr: [1, 2], fc: 12 },
        { lngs: ["jv"], nr: [0, 1], fc: 13 },
        { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
        { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
        { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
        { lngs: ["mk"], nr: [1, 2], fc: 17 },
        { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
        { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
        { lngs: ["or"], nr: [2, 1], fc: 2 },
        { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
        { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
        { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }
      ],
      W = {
        1: function(t) {
          return Number(t > 1);
        },
        2: function(t) {
          return Number(1 != t);
        },
        3: function(t) {
          return 0;
        },
        4: function(t) {
          return Number(
            t % 10 == 1 && t % 100 != 11
              ? 0
              : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
              ? 1
              : 2
          );
        },
        5: function(t) {
          return Number(
            0 == t
              ? 0
              : 1 == t
              ? 1
              : 2 == t
              ? 2
              : t % 100 >= 3 && t % 100 <= 10
              ? 3
              : t % 100 >= 11
              ? 4
              : 5
          );
        },
        6: function(t) {
          return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2);
        },
        7: function(t) {
          return Number(
            1 == t
              ? 0
              : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
              ? 1
              : 2
          );
        },
        8: function(t) {
          return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3);
        },
        9: function(t) {
          return Number(t >= 2);
        },
        10: function(t) {
          return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4);
        },
        11: function(t) {
          return Number(
            1 == t || 11 == t
              ? 0
              : 2 == t || 12 == t
              ? 1
              : t > 2 && t < 20
              ? 2
              : 3
          );
        },
        12: function(t) {
          return Number(t % 10 != 1 || t % 100 == 11);
        },
        13: function(t) {
          return Number(0 !== t);
        },
        14: function(t) {
          return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3);
        },
        15: function(t) {
          return Number(
            t % 10 == 1 && t % 100 != 11
              ? 0
              : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20)
              ? 1
              : 2
          );
        },
        16: function(t) {
          return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2);
        },
        17: function(t) {
          return Number(1 == t || (t % 10 == 1 && t % 100 != 11) ? 0 : 1);
        },
        18: function(t) {
          return Number(0 == t ? 0 : 1 == t ? 1 : 2);
        },
        19: function(t) {
          return Number(
            1 == t
              ? 0
              : 0 == t || (t % 100 > 1 && t % 100 < 11)
              ? 1
              : t % 100 > 10 && t % 100 < 20
              ? 2
              : 3
          );
        },
        20: function(t) {
          return Number(
            1 == t ? 0 : 0 == t || (t % 100 > 0 && t % 100 < 20) ? 1 : 2
          );
        },
        21: function(t) {
          return Number(
            t % 100 == 1
              ? 1
              : t % 100 == 2
              ? 2
              : t % 100 == 3 || t % 100 == 4
              ? 3
              : 0
          );
        },
        22: function(t) {
          return Number(
            1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3
          );
        }
      },
      U = ["v1", "v2", "v3"],
      H = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
      V = (function() {
        function t(e) {
          var n,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          o(this, t),
            (this.languageUtils = e),
            (this.options = r),
            (this.logger = y.create("pluralResolver")),
            (this.options.compatibilityJSON &&
              "v4" !== this.options.compatibilityJSON) ||
              ("undefined" != typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules =
              ((n = {}),
              q.forEach(function(t) {
                t.lngs.forEach(function(e) {
                  n[e] = { numbers: t.nr, plurals: W[t.fc] };
                });
              }),
              n));
        }
        return (
          a(t, [
            {
              key: "addRule",
              value: function(t, e) {
                this.rules[t] = e;
              }
            },
            {
              key: "getRule",
              value: function(t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (this.shouldUseIntlApi())
                  try {
                    return new Intl.PluralRules(t, {
                      type: e.ordinal ? "ordinal" : "cardinal"
                    });
                  } catch (t) {
                    return;
                  }
                return (
                  this.rules[t] ||
                  this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                );
              }
            },
            {
              key: "needsPlural",
              value: function(t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getRule(t, e);
                return this.shouldUseIntlApi()
                  ? n && n.resolvedOptions().pluralCategories.length > 1
                  : n && n.numbers.length > 1;
              }
            },
            {
              key: "getPluralFormsOfKey",
              value: function(t, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return this.getSuffixes(t, n).map(function(t) {
                  return "".concat(e).concat(t);
                });
              }
            },
            {
              key: "getSuffixes",
              value: function(t) {
                var e = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.getRule(t, n);
                return r
                  ? this.shouldUseIntlApi()
                    ? r
                        .resolvedOptions()
                        .pluralCategories.sort(function(t, e) {
                          return H[t] - H[e];
                        })
                        .map(function(t) {
                          return "".concat(e.options.prepend).concat(t);
                        })
                    : r.numbers.map(function(r) {
                        return e.getSuffix(t, r, n);
                      })
                  : [];
              }
            },
            {
              key: "getSuffix",
              value: function(t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = this.getRule(t, n);
                return r
                  ? this.shouldUseIntlApi()
                    ? "".concat(this.options.prepend).concat(r.select(e))
                    : this.getSuffixRetroCompatible(r, e)
                  : (this.logger.warn("no plural rule found for: ".concat(t)),
                    "");
              }
            },
            {
              key: "getSuffixRetroCompatible",
              value: function(t, e) {
                var n = this,
                  r = t.noAbs ? t.plurals(e) : t.plurals(Math.abs(e)),
                  o = t.numbers[r];
                this.options.simplifyPluralSuffix &&
                  2 === t.numbers.length &&
                  1 === t.numbers[0] &&
                  (2 === o ? (o = "plural") : 1 === o && (o = ""));
                var i = function() {
                  return n.options.prepend && o.toString()
                    ? n.options.prepend + o.toString()
                    : o.toString();
                };
                return "v1" === this.options.compatibilityJSON
                  ? 1 === o
                    ? ""
                    : "number" == typeof o
                    ? "_plural_".concat(o.toString())
                    : i()
                  : "v2" === this.options.compatibilityJSON
                  ? i()
                  : this.options.simplifyPluralSuffix &&
                    2 === t.numbers.length &&
                    1 === t.numbers[0]
                  ? i()
                  : this.options.prepend && r.toString()
                  ? this.options.prepend + r.toString()
                  : r.toString();
              }
            },
            {
              key: "shouldUseIntlApi",
              value: function() {
                return !U.includes(this.options.compatibilityJSON);
              }
            }
          ]),
          t
        );
      })();
    function G(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Z(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? G(Object(n), !0).forEach(function(e) {
              h(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : G(Object(n)).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var X = (function() {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(this, t),
          (this.logger = y.create("interpolator")),
          (this.options = e),
          (this.format =
            (e.interpolation && e.interpolation.format) ||
            function(t) {
              return t;
            }),
          this.init(e);
      }
      return (
        a(t, [
          {
            key: "init",
            value: function() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              t.interpolation || (t.interpolation = { escapeValue: !0 });
              var e = t.interpolation;
              (this.escape = void 0 !== e.escape ? e.escape : T),
                (this.escapeValue = void 0 === e.escapeValue || e.escapeValue),
                (this.useRawValueToEscape =
                  void 0 !== e.useRawValueToEscape && e.useRawValueToEscape),
                (this.prefix = e.prefix
                  ? E(e.prefix)
                  : e.prefixEscaped || "{{"),
                (this.suffix = e.suffix
                  ? E(e.suffix)
                  : e.suffixEscaped || "}}"),
                (this.formatSeparator = e.formatSeparator
                  ? e.formatSeparator
                  : e.formatSeparator || ","),
                (this.unescapePrefix = e.unescapeSuffix
                  ? ""
                  : e.unescapePrefix || "-"),
                (this.unescapeSuffix = this.unescapePrefix
                  ? ""
                  : e.unescapeSuffix || ""),
                (this.nestingPrefix = e.nestingPrefix
                  ? E(e.nestingPrefix)
                  : e.nestingPrefixEscaped || E("$t(")),
                (this.nestingSuffix = e.nestingSuffix
                  ? E(e.nestingSuffix)
                  : e.nestingSuffixEscaped || E(")")),
                (this.nestingOptionsSeparator = e.nestingOptionsSeparator
                  ? e.nestingOptionsSeparator
                  : e.nestingOptionsSeparator || ","),
                (this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3),
                (this.alwaysFormat =
                  void 0 !== e.alwaysFormat && e.alwaysFormat),
                this.resetRegExp();
            }
          },
          {
            key: "reset",
            value: function() {
              this.options && this.init(this.options);
            }
          },
          {
            key: "resetRegExp",
            value: function() {
              var t = "".concat(this.prefix, "(.+?)").concat(this.suffix);
              this.regexp = new RegExp(t, "g");
              var e = ""
                .concat(this.prefix)
                .concat(this.unescapePrefix, "(.+?)")
                .concat(this.unescapeSuffix)
                .concat(this.suffix);
              this.regexpUnescape = new RegExp(e, "g");
              var n = ""
                .concat(this.nestingPrefix, "(.+?)")
                .concat(this.nestingSuffix);
              this.nestingRegexp = new RegExp(n, "g");
            }
          },
          {
            key: "interpolate",
            value: function(t, e, n, r) {
              var o,
                i,
                a,
                l = this,
                s =
                  (this.options &&
                    this.options.interpolation &&
                    this.options.interpolation.defaultVariables) ||
                  {};
              function c(t) {
                return t.replace(/\$/g, "$$$$");
              }
              var u = function(t) {
                if (t.indexOf(l.formatSeparator) < 0) {
                  var o = S(e, s, t);
                  return l.alwaysFormat
                    ? l.format(
                        o,
                        void 0,
                        n,
                        Z(Z(Z({}, r), e), {}, { interpolationkey: t })
                      )
                    : o;
                }
                var i = t.split(l.formatSeparator),
                  a = i.shift().trim(),
                  c = i.join(l.formatSeparator).trim();
                return l.format(
                  S(e, s, a),
                  c,
                  n,
                  Z(Z(Z({}, r), e), {}, { interpolationkey: a })
                );
              };
              this.resetRegExp();
              var f =
                  (r && r.missingInterpolationHandler) ||
                  this.options.missingInterpolationHandler,
                d =
                  (r && r.interpolation && r.interpolation.skipOnVariables) ||
                  this.options.interpolation.skipOnVariables;
              return (
                [
                  {
                    regex: this.regexpUnescape,
                    safeValue: function(t) {
                      return c(t);
                    }
                  },
                  {
                    regex: this.regexp,
                    safeValue: function(t) {
                      return l.escapeValue ? c(l.escape(t)) : c(t);
                    }
                  }
                ].forEach(function(e) {
                  for (a = 0; (o = e.regex.exec(t)); ) {
                    if (void 0 === (i = u(o[1].trim())))
                      if ("function" == typeof f) {
                        var n = f(t, o, r);
                        i = "string" == typeof n ? n : "";
                      } else {
                        if (d) {
                          i = o[0];
                          continue;
                        }
                        l.logger.warn(
                          "missed to pass in variable "
                            .concat(o[1], " for interpolating ")
                            .concat(t)
                        ),
                          (i = "");
                      }
                    else
                      "string" == typeof i ||
                        l.useRawValueToEscape ||
                        (i = k(i));
                    var s = e.safeValue(i);
                    if (
                      ((t = t.replace(o[0], s)),
                      d
                        ? ((e.regex.lastIndex += s.length),
                          (e.regex.lastIndex -= o[0].length))
                        : (e.regex.lastIndex = 0),
                      ++a >= l.maxReplaces)
                    )
                      break;
                  }
                }),
                t
              );
            }
          },
          {
            key: "nest",
            value: function(t, e) {
              var n,
                r,
                o = this,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                a = Z({}, i);
              function l(t, e) {
                var n = this.nestingOptionsSeparator;
                if (t.indexOf(n) < 0) return t;
                var r = t.split(new RegExp("".concat(n, "[ ]*{"))),
                  o = "{".concat(r[1]);
                (t = r[0]),
                  (o = (o = this.interpolate(o, a)).replace(/'/g, '"'));
                try {
                  (a = JSON.parse(o)), e && (a = Z(Z({}, e), a));
                } catch (e) {
                  return (
                    this.logger.warn(
                      "failed parsing options string in nesting for key ".concat(
                        t
                      ),
                      e
                    ),
                    ""
                      .concat(t)
                      .concat(n)
                      .concat(o)
                  );
                }
                return delete a.defaultValue, t;
              }
              for (
                a.applyPostProcessor = !1, delete a.defaultValue;
                (n = this.nestingRegexp.exec(t));

              ) {
                var s = [],
                  c = !1;
                if (
                  -1 !== n[0].indexOf(this.formatSeparator) &&
                  !/{.*}/.test(n[1])
                ) {
                  var u = n[1].split(this.formatSeparator).map(function(t) {
                    return t.trim();
                  });
                  (n[1] = u.shift()), (s = u), (c = !0);
                }
                if (
                  (r = e(l.call(this, n[1].trim(), a), a)) &&
                  n[0] === t &&
                  "string" != typeof r
                )
                  return r;
                "string" != typeof r && (r = k(r)),
                  r ||
                    (this.logger.warn(
                      "missed to resolve "
                        .concat(n[1], " for nesting ")
                        .concat(t)
                    ),
                    (r = "")),
                  c &&
                    (r = s.reduce(function(t, e) {
                      return o.format(
                        t,
                        e,
                        i.lng,
                        Z(Z({}, i), {}, { interpolationkey: n[1].trim() })
                      );
                    }, r.trim())),
                  (t = t.replace(n[0], r)),
                  (this.regexp.lastIndex = 0);
              }
              return t;
            }
          }
        ]),
        t
      );
    })();
    function K(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function J(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? K(Object(n), !0).forEach(function(e) {
              h(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : K(Object(n)).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var Y = (function() {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(this, t),
          (this.logger = y.create("formatter")),
          (this.options = e),
          (this.formats = {
            number: function(t, e, n) {
              return new Intl.NumberFormat(e, n).format(t);
            },
            currency: function(t, e, n) {
              return new Intl.NumberFormat(
                e,
                J(J({}, n), {}, { style: "currency" })
              ).format(t);
            },
            datetime: function(t, e, n) {
              return new Intl.DateTimeFormat(e, J({}, n)).format(t);
            },
            relativetime: function(t, e, n) {
              return new Intl.RelativeTimeFormat(e, J({}, n)).format(
                t,
                n.range || "day"
              );
            },
            list: function(t, e, n) {
              return new Intl.ListFormat(e, J({}, n)).format(t);
            }
          }),
          this.init(e);
      }
      return (
        a(t, [
          {
            key: "init",
            value: function(t) {
              var e = (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} }
              ).interpolation;
              this.formatSeparator = e.formatSeparator
                ? e.formatSeparator
                : e.formatSeparator || ",";
            }
          },
          {
            key: "add",
            value: function(t, e) {
              this.formats[t] = e;
            }
          },
          {
            key: "format",
            value: function(t, e, n, r) {
              var o = this;
              return e.split(this.formatSeparator).reduce(function(t, e) {
                var i = (function(t) {
                    var e = t.toLowerCase().trim(),
                      n = {};
                    if (t.indexOf("(") > -1) {
                      var r = t.split("(");
                      e = r[0].toLowerCase().trim();
                      var o = r[1].substring(0, r[1].length - 1);
                      "currency" === e && o.indexOf(":") < 0
                        ? n.currency || (n.currency = o.trim())
                        : "relativetime" === e && o.indexOf(":") < 0
                        ? n.range || (n.range = o.trim())
                        : o.split(";").forEach(function(t) {
                            if (t) {
                              var e = (function(t, e) {
                                  return (
                                    (function(t) {
                                      if (Array.isArray(t)) return t;
                                    })(t) ||
                                    (function(t, e) {
                                      var n =
                                        null == t
                                          ? null
                                          : ("undefined" != typeof Symbol &&
                                              t[Symbol.iterator]) ||
                                            t["@@iterator"];
                                      if (null != n) {
                                        var r,
                                          o,
                                          i = [],
                                          a = !0,
                                          l = !1;
                                        try {
                                          for (
                                            n = n.call(t);
                                            !(a = (r = n.next()).done) &&
                                            (i.push(r.value),
                                            !e || i.length !== e);
                                            a = !0
                                          );
                                        } catch (t) {
                                          (l = !0), (o = t);
                                        } finally {
                                          try {
                                            a || null == n.return || n.return();
                                          } finally {
                                            if (l) throw o;
                                          }
                                        }
                                        return i;
                                      }
                                    })(t, e) ||
                                    (function(t, e) {
                                      if (t) {
                                        if ("string" == typeof t)
                                          return b(t, e);
                                        var n = Object.prototype.toString
                                          .call(t)
                                          .slice(8, -1);
                                        return (
                                          "Object" === n &&
                                            t.constructor &&
                                            (n = t.constructor.name),
                                          "Map" === n || "Set" === n
                                            ? Array.from(t)
                                            : "Arguments" === n ||
                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                n
                                              )
                                            ? b(t, e)
                                            : void 0
                                        );
                                      }
                                    })(t, e) ||
                                    (function() {
                                      throw new TypeError(
                                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                      );
                                    })()
                                  );
                                })(t.split(":"), 2),
                                r = e[0],
                                o = e[1];
                              "false" === o.trim() && (n[r.trim()] = !1),
                                "true" === o.trim() && (n[r.trim()] = !0),
                                isNaN(o.trim()) ||
                                  (n[r.trim()] = parseInt(o.trim(), 10)),
                                n[r.trim()] || (n[r.trim()] = o.trim());
                            }
                          });
                    }
                    return { formatName: e, formatOptions: n };
                  })(e),
                  a = i.formatName,
                  l = i.formatOptions;
                if (o.formats[a]) {
                  var s = t;
                  try {
                    var c =
                        (r &&
                          r.formatParams &&
                          r.formatParams[r.interpolationkey]) ||
                        {},
                      u = c.locale || c.lng || r.locale || r.lng || n;
                    s = o.formats[a](t, u, J(J(J({}, l), r), c));
                  } catch (t) {
                    o.logger.warn(t);
                  }
                  return s;
                }
                return (
                  o.logger.warn("there was no format function for ".concat(a)),
                  t
                );
              }, t);
            }
          }
        ]),
        t
      );
    })();
    function Q(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function tt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Q(Object(n), !0).forEach(function(e) {
              h(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Q(Object(n)).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var et = (function(t) {
      c(n, x);
      var e = (function(t) {
        var e = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = p(t);
          if (e) {
            var o = p(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      })(n);
      function n(t, r, i) {
        var a,
          s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          o(this, n),
          (a = e.call(this)),
          A && x.call(l(a)),
          (a.backend = t),
          (a.store = r),
          (a.services = i),
          (a.languageUtils = i.languageUtils),
          (a.options = s),
          (a.logger = y.create("backendConnector")),
          (a.state = {}),
          (a.queue = []),
          a.backend && a.backend.init && a.backend.init(i, s.backend, s),
          a
        );
      }
      return (
        a(n, [
          {
            key: "queueLoad",
            value: function(t, e, n, r) {
              var o = this,
                i = [],
                a = [],
                l = [],
                s = [];
              return (
                t.forEach(function(t) {
                  var r = !0;
                  e.forEach(function(e) {
                    var l = "".concat(t, "|").concat(e);
                    !n.reload && o.store.hasResourceBundle(t, e)
                      ? (o.state[l] = 2)
                      : o.state[l] < 0 ||
                        (1 === o.state[l]
                          ? a.indexOf(l) < 0 && a.push(l)
                          : ((o.state[l] = 1),
                            (r = !1),
                            a.indexOf(l) < 0 && a.push(l),
                            i.indexOf(l) < 0 && i.push(l),
                            s.indexOf(e) < 0 && s.push(e)));
                  }),
                    r || l.push(t);
                }),
                (i.length || a.length) &&
                  this.queue.push({
                    pending: a,
                    loaded: {},
                    errors: [],
                    callback: r
                  }),
                {
                  toLoad: i,
                  pending: a,
                  toLoadLanguages: l,
                  toLoadNamespaces: s
                }
              );
            }
          },
          {
            key: "loaded",
            value: function(t, e, n) {
              var r = t.split("|"),
                o = r[0],
                i = r[1];
              e && this.emit("failedLoading", o, i, e),
                n && this.store.addResourceBundle(o, i, n),
                (this.state[t] = e ? -1 : 2);
              var a = {};
              this.queue.forEach(function(n) {
                var r, l, s, c, u;
                (r = n.loaded),
                  (l = i),
                  ((c = (s = j(r, [o], Object)).obj)[(u = s.k)] = c[u] || []),
                  c[u].push(l),
                  (function(t, e) {
                    for (var n = t.indexOf(e); -1 !== n; )
                      t.splice(n, 1), (n = t.indexOf(e));
                  })(n.pending, t),
                  e && n.errors.push(e),
                  0 !== n.pending.length ||
                    n.done ||
                    (Object.keys(n.loaded).forEach(function(t) {
                      a[t] || (a[t] = []),
                        n.loaded[t].length &&
                          n.loaded[t].forEach(function(e) {
                            a[t].indexOf(e) < 0 && a[t].push(e);
                          });
                    }),
                    (n.done = !0),
                    n.errors.length ? n.callback(n.errors) : n.callback());
              }),
                this.emit("loaded", a),
                (this.queue = this.queue.filter(function(t) {
                  return !t.done;
                }));
            }
          },
          {
            key: "read",
            value: function(t, e, n) {
              var r = this,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 350,
                a = arguments.length > 5 ? arguments[5] : void 0;
              return t.length
                ? this.backend[n](t, e, function(l, s) {
                    l && s && o < 5
                      ? setTimeout(function() {
                          r.read.call(r, t, e, n, o + 1, 2 * i, a);
                        }, i)
                      : a(l, s);
                  })
                : a(null, {});
            }
          },
          {
            key: "prepareLoading",
            value: function(t, e) {
              var n = this,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                o = arguments.length > 3 ? arguments[3] : void 0;
              if (!this.backend)
                return (
                  this.logger.warn(
                    "No backend was added via i18next.use. Will not load resources."
                  ),
                  o && o()
                );
              "string" == typeof t &&
                (t = this.languageUtils.toResolveHierarchy(t)),
                "string" == typeof e && (e = [e]);
              var i = this.queueLoad(t, e, r, o);
              if (!i.toLoad.length) return i.pending.length || o(), null;
              i.toLoad.forEach(function(t) {
                n.loadOne(t);
              });
            }
          },
          {
            key: "load",
            value: function(t, e, n) {
              this.prepareLoading(t, e, {}, n);
            }
          },
          {
            key: "reload",
            value: function(t, e, n) {
              this.prepareLoading(t, e, { reload: !0 }, n);
            }
          },
          {
            key: "loadOne",
            value: function(t) {
              var e = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                r = t.split("|"),
                o = r[0],
                i = r[1];
              this.read(o, i, "read", void 0, void 0, function(r, a) {
                r &&
                  e.logger.warn(
                    ""
                      .concat(n, "loading namespace ")
                      .concat(i, " for language ")
                      .concat(o, " failed"),
                    r
                  ),
                  !r &&
                    a &&
                    e.logger.log(
                      ""
                        .concat(n, "loaded namespace ")
                        .concat(i, " for language ")
                        .concat(o),
                      a
                    ),
                  e.loaded(t, r, a);
              });
            }
          },
          {
            key: "saveMissing",
            value: function(t, e, n, r, o) {
              var i =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : {};
              this.services.utils &&
              this.services.utils.hasLoadedNamespace &&
              !this.services.utils.hasLoadedNamespace(e)
                ? this.logger.warn(
                    'did not save key "'
                      .concat(n, '" as the namespace "')
                      .concat(e, '" was not yet loaded'),
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                  )
                : null != n &&
                  "" !== n &&
                  (this.backend &&
                    this.backend.create &&
                    this.backend.create(
                      t,
                      e,
                      n,
                      r,
                      null,
                      tt(tt({}, i), {}, { isUpdate: o })
                    ),
                  t && t[0] && this.store.addResource(t[0], e, n, r));
            }
          }
        ]),
        n
      );
    })();
    function nt(t) {
      return (
        "string" == typeof t.ns && (t.ns = [t.ns]),
        "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]),
        "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]),
        t.supportedLngs &&
          t.supportedLngs.indexOf("cimode") < 0 &&
          (t.supportedLngs = t.supportedLngs.concat(["cimode"])),
        t
      );
    }
    function rt(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ot(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? rt(Object(n), !0).forEach(function(e) {
              h(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : rt(Object(n)).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function it() {}
    var at = (function(t) {
      c(n, x);
      var e = (function(t) {
        var e = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function() {
          var n,
            r = p(t);
          if (e) {
            var o = p(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      })(n);
      function n() {
        var t,
          r,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = arguments.length > 1 ? arguments[1] : void 0;
        if (
          (o(this, n),
          (t = e.call(this)),
          A && x.call(l(t)),
          (t.options = nt(i)),
          (t.services = {}),
          (t.logger = y),
          (t.modules = { external: [] }),
          (r = l(t)),
          Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(function(
            t
          ) {
            "function" == typeof r[t] && (r[t] = r[t].bind(r));
          }),
          a && !t.isInitialized && !i.isClone)
        ) {
          if (!t.options.initImmediate) return t.init(i, a), d(t, l(t));
          setTimeout(function() {
            t.init(i, a);
          }, 0);
        }
        return t;
      }
      return (
        a(n, [
          {
            key: "init",
            value: function() {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = arguments.length > 1 ? arguments[1] : void 0;
              "function" == typeof e && ((n = e), (e = {})),
                !e.defaultNS &&
                  e.ns &&
                  ("string" == typeof e.ns
                    ? (e.defaultNS = e.ns)
                    : e.ns.indexOf("translation") < 0 &&
                      (e.defaultNS = e.ns[0]));
              var o = {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(t) {
                  var e = {};
                  if (
                    ("object" === r(t[1]) && (e = t[1]),
                    "string" == typeof t[1] && (e.defaultValue = t[1]),
                    "string" == typeof t[2] && (e.tDescription = t[2]),
                    "object" === r(t[2]) || "object" === r(t[3]))
                  ) {
                    var n = t[3] || t[2];
                    Object.keys(n).forEach(function(t) {
                      e[t] = n[t];
                    });
                  }
                  return e;
                },
                interpolation: {
                  escapeValue: !0,
                  format: function(t, e, n, r) {
                    return t;
                  },
                  prefix: "{{",
                  suffix: "}}",
                  formatSeparator: ",",
                  unescapePrefix: "-",
                  nestingPrefix: "$t(",
                  nestingSuffix: ")",
                  nestingOptionsSeparator: ",",
                  maxReplaces: 1e3,
                  skipOnVariables: !0
                }
              };
              function i(t) {
                return t ? ("function" == typeof t ? new t() : t) : null;
              }
              if (
                ((this.options = ot(ot(ot({}, o), this.options), nt(e))),
                (this.options.interpolation = ot(
                  {},
                  this.options.interpolation
                )),
                void 0 !== e.keySeparator &&
                  (this.options.userDefinedKeySeparator = e.keySeparator),
                void 0 !== e.nsSeparator &&
                  (this.options.userDefinedNsSeparator = e.nsSeparator),
                !this.options.isClone)
              ) {
                var a;
                this.modules.logger
                  ? y.init(i(this.modules.logger), this.options)
                  : y.init(null, this.options),
                  this.modules.formatter
                    ? (a = this.modules.formatter)
                    : "undefined" != typeof Intl && (a = Y);
                var l = new B(this.options);
                this.store = new L(this.options.resources, this.options);
                var s = this.services;
                (s.logger = y),
                  (s.resourceStore = this.store),
                  (s.languageUtils = l),
                  (s.pluralResolver = new V(l, {
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                  })),
                  !a ||
                    (this.options.interpolation.format &&
                      this.options.interpolation.format !==
                        o.interpolation.format) ||
                    ((s.formatter = i(a)),
                    s.formatter.init(s, this.options),
                    (this.options.interpolation.format = s.formatter.format.bind(
                      s.formatter
                    ))),
                  (s.interpolator = new X(this.options)),
                  (s.utils = {
                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                  }),
                  (s.backendConnector = new et(
                    i(this.modules.backend),
                    s.resourceStore,
                    s,
                    this.options
                  )),
                  s.backendConnector.on("*", function(e) {
                    for (
                      var n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    t.emit.apply(t, [e].concat(r));
                  }),
                  this.modules.languageDetector &&
                    ((s.languageDetector = i(this.modules.languageDetector)),
                    s.languageDetector.init(
                      s,
                      this.options.detection,
                      this.options
                    )),
                  this.modules.i18nFormat &&
                    ((s.i18nFormat = i(this.modules.i18nFormat)),
                    s.i18nFormat.init && s.i18nFormat.init(this)),
                  (this.translator = new F(this.services, this.options)),
                  this.translator.on("*", function(e) {
                    for (
                      var n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    t.emit.apply(t, [e].concat(r));
                  }),
                  this.modules.external.forEach(function(e) {
                    e.init && e.init(t);
                  });
              }
              if (
                ((this.format = this.options.interpolation.format),
                n || (n = it),
                this.options.fallbackLng &&
                  !this.services.languageDetector &&
                  !this.options.lng)
              ) {
                var c = this.services.languageUtils.getFallbackCodes(
                  this.options.fallbackLng
                );
                c.length > 0 && "dev" !== c[0] && (this.options.lng = c[0]);
              }
              this.services.languageDetector ||
                this.options.lng ||
                this.logger.warn(
                  "init: no languageDetector is used and no lng is defined"
                ),
                [
                  "getResource",
                  "hasResourceBundle",
                  "getResourceBundle",
                  "getDataByLanguage"
                ].forEach(function(e) {
                  t[e] = function() {
                    var n;
                    return (n = t.store)[e].apply(n, arguments);
                  };
                }),
                [
                  "addResource",
                  "addResources",
                  "addResourceBundle",
                  "removeResourceBundle"
                ].forEach(function(e) {
                  t[e] = function() {
                    var n;
                    return (n = t.store)[e].apply(n, arguments), t;
                  };
                });
              var u = w(),
                f = function() {
                  var e = function(e, r) {
                    t.isInitialized &&
                      !t.initializedStoreOnce &&
                      t.logger.warn(
                        "init: i18next is already initialized. You should call init just once!"
                      ),
                      (t.isInitialized = !0),
                      t.options.isClone ||
                        t.logger.log("initialized", t.options),
                      t.emit("initialized", t.options),
                      u.resolve(r),
                      n(e, r);
                  };
                  if (
                    t.languages &&
                    "v1" !== t.options.compatibilityAPI &&
                    !t.isInitialized
                  )
                    return e(null, t.t.bind(t));
                  t.changeLanguage(t.options.lng, e);
                };
              return (
                this.options.resources || !this.options.initImmediate
                  ? f()
                  : setTimeout(f, 0),
                u
              );
            }
          },
          {
            key: "loadResources",
            value: function(t) {
              var e = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : it,
                r = "string" == typeof t ? t : this.language;
              if (
                ("function" == typeof t && (n = t),
                !this.options.resources || this.options.partialBundledLanguages)
              ) {
                if (r && "cimode" === r.toLowerCase()) return n();
                var o = [],
                  i = function(t) {
                    t &&
                      e.services.languageUtils
                        .toResolveHierarchy(t)
                        .forEach(function(t) {
                          o.indexOf(t) < 0 && o.push(t);
                        });
                  };
                r
                  ? i(r)
                  : this.services.languageUtils
                      .getFallbackCodes(this.options.fallbackLng)
                      .forEach(function(t) {
                        return i(t);
                      }),
                  this.options.preload &&
                    this.options.preload.forEach(function(t) {
                      return i(t);
                    }),
                  this.services.backendConnector.load(o, this.options.ns, n);
              } else n(null);
            }
          },
          {
            key: "reloadResources",
            value: function(t, e, n) {
              var r = w();
              return (
                t || (t = this.languages),
                e || (e = this.options.ns),
                n || (n = it),
                this.services.backendConnector.reload(t, e, function(t) {
                  r.resolve(), n(t);
                }),
                r
              );
            }
          },
          {
            key: "use",
            value: function(t) {
              if (!t)
                throw new Error(
                  "You are passing an undefined module! Please check the object you are passing to i18next.use()"
                );
              if (!t.type)
                throw new Error(
                  "You are passing a wrong module! Please check the object you are passing to i18next.use()"
                );
              return (
                "backend" === t.type && (this.modules.backend = t),
                ("logger" === t.type || (t.log && t.warn && t.error)) &&
                  (this.modules.logger = t),
                "languageDetector" === t.type &&
                  (this.modules.languageDetector = t),
                "i18nFormat" === t.type && (this.modules.i18nFormat = t),
                "postProcessor" === t.type && R.addPostProcessor(t),
                "formatter" === t.type && (this.modules.formatter = t),
                "3rdParty" === t.type && this.modules.external.push(t),
                this
              );
            }
          },
          {
            key: "changeLanguage",
            value: function(t, e) {
              var n = this;
              this.isLanguageChangingTo = t;
              var r = w();
              this.emit("languageChanging", t);
              var o = function(t) {
                  if (
                    ((n.language = t),
                    (n.languages = n.services.languageUtils.toResolveHierarchy(
                      t
                    )),
                    (n.resolvedLanguage = void 0),
                    !(["cimode", "dev"].indexOf(t) > -1))
                  )
                    for (var e = 0; e < n.languages.length; e++) {
                      var r = n.languages[e];
                      if (
                        !(["cimode", "dev"].indexOf(r) > -1) &&
                        n.store.hasLanguageSomeTranslations(r)
                      ) {
                        n.resolvedLanguage = r;
                        break;
                      }
                    }
                },
                i = function(i) {
                  t || i || !n.services.languageDetector || (i = []);
                  var a =
                    "string" == typeof i
                      ? i
                      : n.services.languageUtils.getBestMatchFromCodes(i);
                  a &&
                    (n.language || o(a),
                    n.translator.language || n.translator.changeLanguage(a),
                    n.services.languageDetector &&
                      n.services.languageDetector.cacheUserLanguage(a)),
                    n.loadResources(a, function(t) {
                      !(function(t, i) {
                        i
                          ? (o(i),
                            n.translator.changeLanguage(i),
                            (n.isLanguageChangingTo = void 0),
                            n.emit("languageChanged", i),
                            n.logger.log("languageChanged", i))
                          : (n.isLanguageChangingTo = void 0),
                          r.resolve(function() {
                            return n.t.apply(n, arguments);
                          }),
                          e &&
                            e(t, function() {
                              return n.t.apply(n, arguments);
                            });
                      })(t, a);
                    });
                };
              return (
                t ||
                !this.services.languageDetector ||
                this.services.languageDetector.async
                  ? !t &&
                    this.services.languageDetector &&
                    this.services.languageDetector.async
                    ? this.services.languageDetector.detect(i)
                    : i(t)
                  : i(this.services.languageDetector.detect()),
                r
              );
            }
          },
          {
            key: "getFixedT",
            value: function(t, e, n) {
              var o = this,
                i = function t(e, i) {
                  var a;
                  if ("object" !== r(i)) {
                    for (
                      var l = arguments.length,
                        s = new Array(l > 2 ? l - 2 : 0),
                        c = 2;
                      c < l;
                      c++
                    )
                      s[c - 2] = arguments[c];
                    a = o.options.overloadTranslationOptionHandler(
                      [e, i].concat(s)
                    );
                  } else a = ot({}, i);
                  (a.lng = a.lng || t.lng),
                    (a.lngs = a.lngs || t.lngs),
                    (a.ns = a.ns || t.ns);
                  var u = o.options.keySeparator || ".",
                    f = n
                      ? ""
                          .concat(n)
                          .concat(u)
                          .concat(e)
                      : e;
                  return o.t(f, a);
                };
              return (
                "string" == typeof t ? (i.lng = t) : (i.lngs = t),
                (i.ns = e),
                (i.keyPrefix = n),
                i
              );
            }
          },
          {
            key: "t",
            value: function() {
              var t;
              return (
                this.translator &&
                (t = this.translator).translate.apply(t, arguments)
              );
            }
          },
          {
            key: "exists",
            value: function() {
              var t;
              return (
                this.translator &&
                (t = this.translator).exists.apply(t, arguments)
              );
            }
          },
          {
            key: "setDefaultNamespace",
            value: function(t) {
              this.options.defaultNS = t;
            }
          },
          {
            key: "hasLoadedNamespace",
            value: function(t) {
              var e = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (!this.isInitialized)
                return (
                  this.logger.warn(
                    "hasLoadedNamespace: i18next was not initialized",
                    this.languages
                  ),
                  !1
                );
              if (!this.languages || !this.languages.length)
                return (
                  this.logger.warn(
                    "hasLoadedNamespace: i18n.languages were undefined or empty",
                    this.languages
                  ),
                  !1
                );
              var r = this.resolvedLanguage || this.languages[0],
                o = !!this.options && this.options.fallbackLng,
                i = this.languages[this.languages.length - 1];
              if ("cimode" === r.toLowerCase()) return !0;
              var a = function(t, n) {
                var r =
                  e.services.backendConnector.state[
                    "".concat(t, "|").concat(n)
                  ];
                return -1 === r || 2 === r;
              };
              if (n.precheck) {
                var l = n.precheck(this, a);
                if (void 0 !== l) return l;
              }
              return (
                !!this.hasResourceBundle(r, t) ||
                !this.services.backendConnector.backend ||
                !(!a(r, t) || (o && !a(i, t)))
              );
            }
          },
          {
            key: "loadNamespaces",
            value: function(t, e) {
              var n = this,
                r = w();
              return this.options.ns
                ? ("string" == typeof t && (t = [t]),
                  t.forEach(function(t) {
                    n.options.ns.indexOf(t) < 0 && n.options.ns.push(t);
                  }),
                  this.loadResources(function(t) {
                    r.resolve(), e && e(t);
                  }),
                  r)
                : (e && e(), Promise.resolve());
            }
          },
          {
            key: "loadLanguages",
            value: function(t, e) {
              var n = w();
              "string" == typeof t && (t = [t]);
              var r = this.options.preload || [],
                o = t.filter(function(t) {
                  return r.indexOf(t) < 0;
                });
              return o.length
                ? ((this.options.preload = r.concat(o)),
                  this.loadResources(function(t) {
                    n.resolve(), e && e(t);
                  }),
                  n)
                : (e && e(), Promise.resolve());
            }
          },
          {
            key: "dir",
            value: function(t) {
              return (
                t ||
                  (t =
                    this.resolvedLanguage ||
                    (this.languages && this.languages.length > 0
                      ? this.languages[0]
                      : this.language)),
                t
                  ? [
                      "ar",
                      "shu",
                      "sqr",
                      "ssh",
                      "xaa",
                      "yhd",
                      "yud",
                      "aao",
                      "abh",
                      "abv",
                      "acm",
                      "acq",
                      "acw",
                      "acx",
                      "acy",
                      "adf",
                      "ads",
                      "aeb",
                      "aec",
                      "afb",
                      "ajp",
                      "apc",
                      "apd",
                      "arb",
                      "arq",
                      "ars",
                      "ary",
                      "arz",
                      "auz",
                      "avl",
                      "ayh",
                      "ayl",
                      "ayn",
                      "ayp",
                      "bbz",
                      "pga",
                      "he",
                      "iw",
                      "ps",
                      "pbt",
                      "pbu",
                      "pst",
                      "prp",
                      "prd",
                      "ug",
                      "ur",
                      "ydd",
                      "yds",
                      "yih",
                      "ji",
                      "yi",
                      "hbo",
                      "men",
                      "xmn",
                      "fa",
                      "jpr",
                      "peo",
                      "pes",
                      "prs",
                      "dv",
                      "sam",
                      "ckb"
                    ].indexOf(
                      this.services.languageUtils.getLanguagePartFromCode(t)
                    ) > -1 || t.toLowerCase().indexOf("-arab") > 1
                    ? "rtl"
                    : "ltr"
                  : "rtl"
              );
            }
          },
          {
            key: "cloneInstance",
            value: function() {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : it,
                o = ot(ot(ot({}, this.options), e), { isClone: !0 }),
                i = new n(o);
              return (
                ["store", "services", "language"].forEach(function(e) {
                  i[e] = t[e];
                }),
                (i.services = ot({}, this.services)),
                (i.services.utils = {
                  hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                }),
                (i.translator = new F(i.services, i.options)),
                i.translator.on("*", function(t) {
                  for (
                    var e = arguments.length,
                      n = new Array(e > 1 ? e - 1 : 0),
                      r = 1;
                    r < e;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  i.emit.apply(i, [t].concat(n));
                }),
                i.init(o, r),
                (i.translator.options = i.options),
                (i.translator.backendConnector.services.utils = {
                  hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                }),
                i
              );
            }
          },
          {
            key: "toJSON",
            value: function() {
              return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage
              };
            }
          }
        ]),
        n
      );
    })();
    h(at, "createInstance", function() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 ? arguments[1] : void 0;
      return new at(t, e);
    });
    var lt = at.createInstance();
    lt.createInstance = at.createInstance;
    var st = lt.createInstance,
      ct = lt.init,
      ut = lt.loadResources,
      ft = lt.reloadResources,
      dt = lt.use,
      pt = lt.changeLanguage,
      ht = lt.getFixedT,
      bt = lt.t,
      gt = lt.exists,
      mt = lt.setDefaultNamespace,
      vt = lt.hasLoadedNamespace,
      yt = lt.loadNamespaces,
      xt = lt.loadLanguages;
    e.default = lt;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e) {
    t.exports = function(t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
        r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(t, e) {
          var o,
            i = e
              .trim()
              .replace(/^"(.*)"$/, function(t, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function(t, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? t
            : ((o =
                0 === i.indexOf("//")
                  ? i
                  : 0 === i.indexOf("/")
                  ? n + i
                  : r + i.replace(/^\.\//, "")),
              "url(" + JSON.stringify(o) + ")");
        }
      );
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    "use strict";
    var r,
      o = (r = n(188)) && r.__esModule ? r : { default: r },
      i = n(79),
      a = n(24),
      l = n(10),
      s = n(30);
    const c = {
        isAutoTranslate: {
          value: !1,
          report: t =>
            (0, s.firebaseEvent)({
              name: "opt_auto_trans",
              params: { status: f(t) }
            })
        },
        isAutoSWT: {
          value: !0,
          report: t =>
            (0, s.firebaseEvent)({
              name: "opt_inline_trans",
              params: { status: f(t) }
            })
        },
        isEnableGa: { value: !(l.isFirefox || l.isSafari) },
        transDirect: {
          value: 1,
          report: t =>
            (0, s.firebaseEvent)({
              name: "opt_vid_direction",
              params: { direction: d(t) }
            })
        },
        subType: {
          value: 0,
          report: t =>
            (0, s.firebaseEvent)({
              name: "opt_vid_mode",
              params: { mode: p(t) }
            })
        },
        targetBkgColor: {
          value: "rgba(255, 255, 255, 0)",
          report: t =>
            (0, s.firebaseEvent)({
              name: "opt_trans_bkg",
              params: { color: t }
            })
        },
        isDirectTranslate: {
          value: !1,
          report: t =>
            (0, s.firebaseEvent)({
              name: "opt_inline_trans_direct",
              params: { status: f(t) }
            })
        },
        audioApi: {
          value: 0,
          report: t =>
            (0, s.firebaseEvent)({ name: "opt_tts", params: { tool: h(t) } })
        },
        audioSpeed: {
          value: 5,
          report: t =>
            (0, s.firebaseEvent)({
              name: "opt_tts_speed",
              params: { value: t }
            })
        },
        userGlossary: { value: "" }
      },
      u = (0, a.mapValues)(c, ({ value: t }) => t);
    function f(t) {
      return t ? "on" : "off";
    }
    function d(t) {
      switch (t) {
        case 0:
          return "chinese-english";
        case 1:
          return "english-chinese";
        case 2:
          return "japanese-chinese";
        default:
          return t;
      }
    }
    function p(t) {
      switch (t) {
        case 0:
          return "bilingualism";
        case 1:
          return "original";
        case 2:
          return "translation";
        default:
          return t;
      }
    }
    function h(t) {
      switch (t) {
        case 0:
          return "tool1";
        case 1:
          return "tool2";
        default:
          return t;
      }
    }
    !(async function() {
      const t = await browser.storage.sync.get(u),
        e = (0, a.mapValues)(t, (t, e) =>
          (0, i.writable)(
            (function(t, e) {
              switch (e) {
                case "boolean":
                  return Boolean(t);
                case "number":
                  return Number(t);
                case "string":
                  return String(t);
                default:
                  return t;
              }
            })(t, typeof u[e])
          )
        );
      (0, a.forEach)(e, (t, e) => {
        let n = !0;
        t.subscribe(async t => {
          n
            ? (n = !1)
            : (await browser.storage.sync.set({ [e]: t }),
              c[e].report && c[e].report(t));
        });
      }),
        e.isAutoTranslate.subscribe(t => {
          t
            ? (browser.browserAction.setBadgeText({ text: "auto" }),
              browser.browserAction.setBadgeBackgroundColor({
                color: "#5ebb8d"
              }))
            : browser.browserAction.setBadgeText({ text: "" });
        }),
        new o.default({
          target: document.body,
          props: {
            extVersion: browser.runtime.getManifest().version,
            userGlossaries: [],
            ...e
          }
        }).$on("open-link", t => {
          (0, s.firebaseEvent)({ name: t.detail });
        }),
        browser.runtime.sendMessage({ type: "optionsPageview" });
    })();
  },
  function(t, e, n) {
    var r = n(173);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    n(57)(r, { hmr: !0, transform: void 0, insertInto: void 0 }),
      r.locals && (t.exports = r.locals);
  },
  function(t, e, n) {
    (t.exports = n(56)(!1)).push([
      t.i,
      '/*!\r\n * Materialize v1.0.0 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\r\n.materialize-red{background-color:#e51c23 !important}.materialize-red-text{color:#e51c23 !important}.materialize-red.lighten-5{background-color:#fdeaeb !important}.materialize-red-text.text-lighten-5{color:#fdeaeb !important}.materialize-red.lighten-4{background-color:#f8c1c3 !important}.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}.materialize-red.lighten-3{background-color:#f3989b !important}.materialize-red-text.text-lighten-3{color:#f3989b !important}.materialize-red.lighten-2{background-color:#ee6e73 !important}.materialize-red-text.text-lighten-2{color:#ee6e73 !important}.materialize-red.lighten-1{background-color:#ea454b !important}.materialize-red-text.text-lighten-1{color:#ea454b !important}.materialize-red.darken-1{background-color:#d0181e !important}.materialize-red-text.text-darken-1{color:#d0181e !important}.materialize-red.darken-2{background-color:#b9151b !important}.materialize-red-text.text-darken-2{color:#b9151b !important}.materialize-red.darken-3{background-color:#a21318 !important}.materialize-red-text.text-darken-3{color:#a21318 !important}.materialize-red.darken-4{background-color:#8b1014 !important}.materialize-red-text.text-darken-4{color:#8b1014 !important}.red{background-color:#F44336 !important}.red-text{color:#F44336 !important}.red.lighten-5{background-color:#FFEBEE !important}.red-text.text-lighten-5{color:#FFEBEE !important}.red.lighten-4{background-color:#FFCDD2 !important}.red-text.text-lighten-4{color:#FFCDD2 !important}.red.lighten-3{background-color:#EF9A9A !important}.red-text.text-lighten-3{color:#EF9A9A !important}.red.lighten-2{background-color:#E57373 !important}.red-text.text-lighten-2{color:#E57373 !important}.red.lighten-1{background-color:#EF5350 !important}.red-text.text-lighten-1{color:#EF5350 !important}.red.darken-1{background-color:#E53935 !important}.red-text.text-darken-1{color:#E53935 !important}.red.darken-2{background-color:#D32F2F !important}.red-text.text-darken-2{color:#D32F2F !important}.red.darken-3{background-color:#C62828 !important}.red-text.text-darken-3{color:#C62828 !important}.red.darken-4{background-color:#B71C1C !important}.red-text.text-darken-4{color:#B71C1C !important}.red.accent-1{background-color:#FF8A80 !important}.red-text.text-accent-1{color:#FF8A80 !important}.red.accent-2{background-color:#FF5252 !important}.red-text.text-accent-2{color:#FF5252 !important}.red.accent-3{background-color:#FF1744 !important}.red-text.text-accent-3{color:#FF1744 !important}.red.accent-4{background-color:#D50000 !important}.red-text.text-accent-4{color:#D50000 !important}.pink{background-color:#e91e63 !important}.pink-text{color:#e91e63 !important}.pink.lighten-5{background-color:#fce4ec !important}.pink-text.text-lighten-5{color:#fce4ec !important}.pink.lighten-4{background-color:#f8bbd0 !important}.pink-text.text-lighten-4{color:#f8bbd0 !important}.pink.lighten-3{background-color:#f48fb1 !important}.pink-text.text-lighten-3{color:#f48fb1 !important}.pink.lighten-2{background-color:#f06292 !important}.pink-text.text-lighten-2{color:#f06292 !important}.pink.lighten-1{background-color:#ec407a !important}.pink-text.text-lighten-1{color:#ec407a !important}.pink.darken-1{background-color:#d81b60 !important}.pink-text.text-darken-1{color:#d81b60 !important}.pink.darken-2{background-color:#c2185b !important}.pink-text.text-darken-2{color:#c2185b !important}.pink.darken-3{background-color:#ad1457 !important}.pink-text.text-darken-3{color:#ad1457 !important}.pink.darken-4{background-color:#880e4f !important}.pink-text.text-darken-4{color:#880e4f !important}.pink.accent-1{background-color:#ff80ab !important}.pink-text.text-accent-1{color:#ff80ab !important}.pink.accent-2{background-color:#ff4081 !important}.pink-text.text-accent-2{color:#ff4081 !important}.pink.accent-3{background-color:#f50057 !important}.pink-text.text-accent-3{color:#f50057 !important}.pink.accent-4{background-color:#c51162 !important}.pink-text.text-accent-4{color:#c51162 !important}.purple{background-color:#9c27b0 !important}.purple-text{color:#9c27b0 !important}.purple.lighten-5{background-color:#f3e5f5 !important}.purple-text.text-lighten-5{color:#f3e5f5 !important}.purple.lighten-4{background-color:#e1bee7 !important}.purple-text.text-lighten-4{color:#e1bee7 !important}.purple.lighten-3{background-color:#ce93d8 !important}.purple-text.text-lighten-3{color:#ce93d8 !important}.purple.lighten-2{background-color:#ba68c8 !important}.purple-text.text-lighten-2{color:#ba68c8 !important}.purple.lighten-1{background-color:#ab47bc !important}.purple-text.text-lighten-1{color:#ab47bc !important}.purple.darken-1{background-color:#8e24aa !important}.purple-text.text-darken-1{color:#8e24aa !important}.purple.darken-2{background-color:#7b1fa2 !important}.purple-text.text-darken-2{color:#7b1fa2 !important}.purple.darken-3{background-color:#6a1b9a !important}.purple-text.text-darken-3{color:#6a1b9a !important}.purple.darken-4{background-color:#4a148c !important}.purple-text.text-darken-4{color:#4a148c !important}.purple.accent-1{background-color:#ea80fc !important}.purple-text.text-accent-1{color:#ea80fc !important}.purple.accent-2{background-color:#e040fb !important}.purple-text.text-accent-2{color:#e040fb !important}.purple.accent-3{background-color:#d500f9 !important}.purple-text.text-accent-3{color:#d500f9 !important}.purple.accent-4{background-color:#a0f !important}.purple-text.text-accent-4{color:#a0f !important}.deep-purple{background-color:#673ab7 !important}.deep-purple-text{color:#673ab7 !important}.deep-purple.lighten-5{background-color:#ede7f6 !important}.deep-purple-text.text-lighten-5{color:#ede7f6 !important}.deep-purple.lighten-4{background-color:#d1c4e9 !important}.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}.deep-purple.lighten-3{background-color:#b39ddb !important}.deep-purple-text.text-lighten-3{color:#b39ddb !important}.deep-purple.lighten-2{background-color:#9575cd !important}.deep-purple-text.text-lighten-2{color:#9575cd !important}.deep-purple.lighten-1{background-color:#7e57c2 !important}.deep-purple-text.text-lighten-1{color:#7e57c2 !important}.deep-purple.darken-1{background-color:#5e35b1 !important}.deep-purple-text.text-darken-1{color:#5e35b1 !important}.deep-purple.darken-2{background-color:#512da8 !important}.deep-purple-text.text-darken-2{color:#512da8 !important}.deep-purple.darken-3{background-color:#4527a0 !important}.deep-purple-text.text-darken-3{color:#4527a0 !important}.deep-purple.darken-4{background-color:#311b92 !important}.deep-purple-text.text-darken-4{color:#311b92 !important}.deep-purple.accent-1{background-color:#b388ff !important}.deep-purple-text.text-accent-1{color:#b388ff !important}.deep-purple.accent-2{background-color:#7c4dff !important}.deep-purple-text.text-accent-2{color:#7c4dff !important}.deep-purple.accent-3{background-color:#651fff !important}.deep-purple-text.text-accent-3{color:#651fff !important}.deep-purple.accent-4{background-color:#6200ea !important}.deep-purple-text.text-accent-4{color:#6200ea !important}.indigo{background-color:#3f51b5 !important}.indigo-text{color:#3f51b5 !important}.indigo.lighten-5{background-color:#e8eaf6 !important}.indigo-text.text-lighten-5{color:#e8eaf6 !important}.indigo.lighten-4{background-color:#c5cae9 !important}.indigo-text.text-lighten-4{color:#c5cae9 !important}.indigo.lighten-3{background-color:#9fa8da !important}.indigo-text.text-lighten-3{color:#9fa8da !important}.indigo.lighten-2{background-color:#7986cb !important}.indigo-text.text-lighten-2{color:#7986cb !important}.indigo.lighten-1{background-color:#5c6bc0 !important}.indigo-text.text-lighten-1{color:#5c6bc0 !important}.indigo.darken-1{background-color:#3949ab !important}.indigo-text.text-darken-1{color:#3949ab !important}.indigo.darken-2{background-color:#303f9f !important}.indigo-text.text-darken-2{color:#303f9f !important}.indigo.darken-3{background-color:#283593 !important}.indigo-text.text-darken-3{color:#283593 !important}.indigo.darken-4{background-color:#1a237e !important}.indigo-text.text-darken-4{color:#1a237e !important}.indigo.accent-1{background-color:#8c9eff !important}.indigo-text.text-accent-1{color:#8c9eff !important}.indigo.accent-2{background-color:#536dfe !important}.indigo-text.text-accent-2{color:#536dfe !important}.indigo.accent-3{background-color:#3d5afe !important}.indigo-text.text-accent-3{color:#3d5afe !important}.indigo.accent-4{background-color:#304ffe !important}.indigo-text.text-accent-4{color:#304ffe !important}.blue{background-color:#2196F3 !important}.blue-text{color:#2196F3 !important}.blue.lighten-5{background-color:#E3F2FD !important}.blue-text.text-lighten-5{color:#E3F2FD !important}.blue.lighten-4{background-color:#BBDEFB !important}.blue-text.text-lighten-4{color:#BBDEFB !important}.blue.lighten-3{background-color:#90CAF9 !important}.blue-text.text-lighten-3{color:#90CAF9 !important}.blue.lighten-2{background-color:#64B5F6 !important}.blue-text.text-lighten-2{color:#64B5F6 !important}.blue.lighten-1{background-color:#42A5F5 !important}.blue-text.text-lighten-1{color:#42A5F5 !important}.blue.darken-1{background-color:#1E88E5 !important}.blue-text.text-darken-1{color:#1E88E5 !important}.blue.darken-2{background-color:#1976D2 !important}.blue-text.text-darken-2{color:#1976D2 !important}.blue.darken-3{background-color:#1565C0 !important}.blue-text.text-darken-3{color:#1565C0 !important}.blue.darken-4{background-color:#0D47A1 !important}.blue-text.text-darken-4{color:#0D47A1 !important}.blue.accent-1{background-color:#82B1FF !important}.blue-text.text-accent-1{color:#82B1FF !important}.blue.accent-2{background-color:#448AFF !important}.blue-text.text-accent-2{color:#448AFF !important}.blue.accent-3{background-color:#2979FF !important}.blue-text.text-accent-3{color:#2979FF !important}.blue.accent-4{background-color:#2962FF !important}.blue-text.text-accent-4{color:#2962FF !important}.light-blue{background-color:#03a9f4 !important}.light-blue-text{color:#03a9f4 !important}.light-blue.lighten-5{background-color:#e1f5fe !important}.light-blue-text.text-lighten-5{color:#e1f5fe !important}.light-blue.lighten-4{background-color:#b3e5fc !important}.light-blue-text.text-lighten-4{color:#b3e5fc !important}.light-blue.lighten-3{background-color:#81d4fa !important}.light-blue-text.text-lighten-3{color:#81d4fa !important}.light-blue.lighten-2{background-color:#4fc3f7 !important}.light-blue-text.text-lighten-2{color:#4fc3f7 !important}.light-blue.lighten-1{background-color:#29b6f6 !important}.light-blue-text.text-lighten-1{color:#29b6f6 !important}.light-blue.darken-1{background-color:#039be5 !important}.light-blue-text.text-darken-1{color:#039be5 !important}.light-blue.darken-2{background-color:#0288d1 !important}.light-blue-text.text-darken-2{color:#0288d1 !important}.light-blue.darken-3{background-color:#0277bd !important}.light-blue-text.text-darken-3{color:#0277bd !important}.light-blue.darken-4{background-color:#01579b !important}.light-blue-text.text-darken-4{color:#01579b !important}.light-blue.accent-1{background-color:#80d8ff !important}.light-blue-text.text-accent-1{color:#80d8ff !important}.light-blue.accent-2{background-color:#40c4ff !important}.light-blue-text.text-accent-2{color:#40c4ff !important}.light-blue.accent-3{background-color:#00b0ff !important}.light-blue-text.text-accent-3{color:#00b0ff !important}.light-blue.accent-4{background-color:#0091ea !important}.light-blue-text.text-accent-4{color:#0091ea !important}.cyan{background-color:#00bcd4 !important}.cyan-text{color:#00bcd4 !important}.cyan.lighten-5{background-color:#e0f7fa !important}.cyan-text.text-lighten-5{color:#e0f7fa !important}.cyan.lighten-4{background-color:#b2ebf2 !important}.cyan-text.text-lighten-4{color:#b2ebf2 !important}.cyan.lighten-3{background-color:#80deea !important}.cyan-text.text-lighten-3{color:#80deea !important}.cyan.lighten-2{background-color:#4dd0e1 !important}.cyan-text.text-lighten-2{color:#4dd0e1 !important}.cyan.lighten-1{background-color:#26c6da !important}.cyan-text.text-lighten-1{color:#26c6da !important}.cyan.darken-1{background-color:#00acc1 !important}.cyan-text.text-darken-1{color:#00acc1 !important}.cyan.darken-2{background-color:#0097a7 !important}.cyan-text.text-darken-2{color:#0097a7 !important}.cyan.darken-3{background-color:#00838f !important}.cyan-text.text-darken-3{color:#00838f !important}.cyan.darken-4{background-color:#006064 !important}.cyan-text.text-darken-4{color:#006064 !important}.cyan.accent-1{background-color:#84ffff !important}.cyan-text.text-accent-1{color:#84ffff !important}.cyan.accent-2{background-color:#18ffff !important}.cyan-text.text-accent-2{color:#18ffff !important}.cyan.accent-3{background-color:#00e5ff !important}.cyan-text.text-accent-3{color:#00e5ff !important}.cyan.accent-4{background-color:#00b8d4 !important}.cyan-text.text-accent-4{color:#00b8d4 !important}.teal{background-color:#009688 !important}.teal-text{color:#009688 !important}.teal.lighten-5{background-color:#e0f2f1 !important}.teal-text.text-lighten-5{color:#e0f2f1 !important}.teal.lighten-4{background-color:#b2dfdb !important}.teal-text.text-lighten-4{color:#b2dfdb !important}.teal.lighten-3{background-color:#80cbc4 !important}.teal-text.text-lighten-3{color:#80cbc4 !important}.teal.lighten-2{background-color:#4db6ac !important}.teal-text.text-lighten-2{color:#4db6ac !important}.teal.lighten-1{background-color:#26a69a !important}.teal-text.text-lighten-1{color:#26a69a !important}.teal.darken-1{background-color:#00897b !important}.teal-text.text-darken-1{color:#00897b !important}.teal.darken-2{background-color:#00796b !important}.teal-text.text-darken-2{color:#00796b !important}.teal.darken-3{background-color:#00695c !important}.teal-text.text-darken-3{color:#00695c !important}.teal.darken-4{background-color:#004d40 !important}.teal-text.text-darken-4{color:#004d40 !important}.teal.accent-1{background-color:#a7ffeb !important}.teal-text.text-accent-1{color:#a7ffeb !important}.teal.accent-2{background-color:#64ffda !important}.teal-text.text-accent-2{color:#64ffda !important}.teal.accent-3{background-color:#1de9b6 !important}.teal-text.text-accent-3{color:#1de9b6 !important}.teal.accent-4{background-color:#00bfa5 !important}.teal-text.text-accent-4{color:#00bfa5 !important}.green{background-color:#4CAF50 !important}.green-text{color:#4CAF50 !important}.green.lighten-5{background-color:#E8F5E9 !important}.green-text.text-lighten-5{color:#E8F5E9 !important}.green.lighten-4{background-color:#C8E6C9 !important}.green-text.text-lighten-4{color:#C8E6C9 !important}.green.lighten-3{background-color:#A5D6A7 !important}.green-text.text-lighten-3{color:#A5D6A7 !important}.green.lighten-2{background-color:#81C784 !important}.green-text.text-lighten-2{color:#81C784 !important}.green.lighten-1{background-color:#66BB6A !important}.green-text.text-lighten-1{color:#66BB6A !important}.green.darken-1{background-color:#43A047 !important}.green-text.text-darken-1{color:#43A047 !important}.green.darken-2{background-color:#388E3C !important}.green-text.text-darken-2{color:#388E3C !important}.green.darken-3{background-color:#2E7D32 !important}.green-text.text-darken-3{color:#2E7D32 !important}.green.darken-4{background-color:#1B5E20 !important}.green-text.text-darken-4{color:#1B5E20 !important}.green.accent-1{background-color:#B9F6CA !important}.green-text.text-accent-1{color:#B9F6CA !important}.green.accent-2{background-color:#69F0AE !important}.green-text.text-accent-2{color:#69F0AE !important}.green.accent-3{background-color:#00E676 !important}.green-text.text-accent-3{color:#00E676 !important}.green.accent-4{background-color:#00C853 !important}.green-text.text-accent-4{color:#00C853 !important}.light-green{background-color:#8bc34a !important}.light-green-text{color:#8bc34a !important}.light-green.lighten-5{background-color:#f1f8e9 !important}.light-green-text.text-lighten-5{color:#f1f8e9 !important}.light-green.lighten-4{background-color:#dcedc8 !important}.light-green-text.text-lighten-4{color:#dcedc8 !important}.light-green.lighten-3{background-color:#c5e1a5 !important}.light-green-text.text-lighten-3{color:#c5e1a5 !important}.light-green.lighten-2{background-color:#aed581 !important}.light-green-text.text-lighten-2{color:#aed581 !important}.light-green.lighten-1{background-color:#9ccc65 !important}.light-green-text.text-lighten-1{color:#9ccc65 !important}.light-green.darken-1{background-color:#7cb342 !important}.light-green-text.text-darken-1{color:#7cb342 !important}.light-green.darken-2{background-color:#689f38 !important}.light-green-text.text-darken-2{color:#689f38 !important}.light-green.darken-3{background-color:#558b2f !important}.light-green-text.text-darken-3{color:#558b2f !important}.light-green.darken-4{background-color:#33691e !important}.light-green-text.text-darken-4{color:#33691e !important}.light-green.accent-1{background-color:#ccff90 !important}.light-green-text.text-accent-1{color:#ccff90 !important}.light-green.accent-2{background-color:#b2ff59 !important}.light-green-text.text-accent-2{color:#b2ff59 !important}.light-green.accent-3{background-color:#76ff03 !important}.light-green-text.text-accent-3{color:#76ff03 !important}.light-green.accent-4{background-color:#64dd17 !important}.light-green-text.text-accent-4{color:#64dd17 !important}.lime{background-color:#cddc39 !important}.lime-text{color:#cddc39 !important}.lime.lighten-5{background-color:#f9fbe7 !important}.lime-text.text-lighten-5{color:#f9fbe7 !important}.lime.lighten-4{background-color:#f0f4c3 !important}.lime-text.text-lighten-4{color:#f0f4c3 !important}.lime.lighten-3{background-color:#e6ee9c !important}.lime-text.text-lighten-3{color:#e6ee9c !important}.lime.lighten-2{background-color:#dce775 !important}.lime-text.text-lighten-2{color:#dce775 !important}.lime.lighten-1{background-color:#d4e157 !important}.lime-text.text-lighten-1{color:#d4e157 !important}.lime.darken-1{background-color:#c0ca33 !important}.lime-text.text-darken-1{color:#c0ca33 !important}.lime.darken-2{background-color:#afb42b !important}.lime-text.text-darken-2{color:#afb42b !important}.lime.darken-3{background-color:#9e9d24 !important}.lime-text.text-darken-3{color:#9e9d24 !important}.lime.darken-4{background-color:#827717 !important}.lime-text.text-darken-4{color:#827717 !important}.lime.accent-1{background-color:#f4ff81 !important}.lime-text.text-accent-1{color:#f4ff81 !important}.lime.accent-2{background-color:#eeff41 !important}.lime-text.text-accent-2{color:#eeff41 !important}.lime.accent-3{background-color:#c6ff00 !important}.lime-text.text-accent-3{color:#c6ff00 !important}.lime.accent-4{background-color:#aeea00 !important}.lime-text.text-accent-4{color:#aeea00 !important}.yellow{background-color:#ffeb3b !important}.yellow-text{color:#ffeb3b !important}.yellow.lighten-5{background-color:#fffde7 !important}.yellow-text.text-lighten-5{color:#fffde7 !important}.yellow.lighten-4{background-color:#fff9c4 !important}.yellow-text.text-lighten-4{color:#fff9c4 !important}.yellow.lighten-3{background-color:#fff59d !important}.yellow-text.text-lighten-3{color:#fff59d !important}.yellow.lighten-2{background-color:#fff176 !important}.yellow-text.text-lighten-2{color:#fff176 !important}.yellow.lighten-1{background-color:#ffee58 !important}.yellow-text.text-lighten-1{color:#ffee58 !important}.yellow.darken-1{background-color:#fdd835 !important}.yellow-text.text-darken-1{color:#fdd835 !important}.yellow.darken-2{background-color:#fbc02d !important}.yellow-text.text-darken-2{color:#fbc02d !important}.yellow.darken-3{background-color:#f9a825 !important}.yellow-text.text-darken-3{color:#f9a825 !important}.yellow.darken-4{background-color:#f57f17 !important}.yellow-text.text-darken-4{color:#f57f17 !important}.yellow.accent-1{background-color:#ffff8d !important}.yellow-text.text-accent-1{color:#ffff8d !important}.yellow.accent-2{background-color:#ff0 !important}.yellow-text.text-accent-2{color:#ff0 !important}.yellow.accent-3{background-color:#ffea00 !important}.yellow-text.text-accent-3{color:#ffea00 !important}.yellow.accent-4{background-color:#ffd600 !important}.yellow-text.text-accent-4{color:#ffd600 !important}.amber{background-color:#ffc107 !important}.amber-text{color:#ffc107 !important}.amber.lighten-5{background-color:#fff8e1 !important}.amber-text.text-lighten-5{color:#fff8e1 !important}.amber.lighten-4{background-color:#ffecb3 !important}.amber-text.text-lighten-4{color:#ffecb3 !important}.amber.lighten-3{background-color:#ffe082 !important}.amber-text.text-lighten-3{color:#ffe082 !important}.amber.lighten-2{background-color:#ffd54f !important}.amber-text.text-lighten-2{color:#ffd54f !important}.amber.lighten-1{background-color:#ffca28 !important}.amber-text.text-lighten-1{color:#ffca28 !important}.amber.darken-1{background-color:#ffb300 !important}.amber-text.text-darken-1{color:#ffb300 !important}.amber.darken-2{background-color:#ffa000 !important}.amber-text.text-darken-2{color:#ffa000 !important}.amber.darken-3{background-color:#ff8f00 !important}.amber-text.text-darken-3{color:#ff8f00 !important}.amber.darken-4{background-color:#ff6f00 !important}.amber-text.text-darken-4{color:#ff6f00 !important}.amber.accent-1{background-color:#ffe57f !important}.amber-text.text-accent-1{color:#ffe57f !important}.amber.accent-2{background-color:#ffd740 !important}.amber-text.text-accent-2{color:#ffd740 !important}.amber.accent-3{background-color:#ffc400 !important}.amber-text.text-accent-3{color:#ffc400 !important}.amber.accent-4{background-color:#ffab00 !important}.amber-text.text-accent-4{color:#ffab00 !important}.orange{background-color:#ff9800 !important}.orange-text{color:#ff9800 !important}.orange.lighten-5{background-color:#fff3e0 !important}.orange-text.text-lighten-5{color:#fff3e0 !important}.orange.lighten-4{background-color:#ffe0b2 !important}.orange-text.text-lighten-4{color:#ffe0b2 !important}.orange.lighten-3{background-color:#ffcc80 !important}.orange-text.text-lighten-3{color:#ffcc80 !important}.orange.lighten-2{background-color:#ffb74d !important}.orange-text.text-lighten-2{color:#ffb74d !important}.orange.lighten-1{background-color:#ffa726 !important}.orange-text.text-lighten-1{color:#ffa726 !important}.orange.darken-1{background-color:#fb8c00 !important}.orange-text.text-darken-1{color:#fb8c00 !important}.orange.darken-2{background-color:#f57c00 !important}.orange-text.text-darken-2{color:#f57c00 !important}.orange.darken-3{background-color:#ef6c00 !important}.orange-text.text-darken-3{color:#ef6c00 !important}.orange.darken-4{background-color:#e65100 !important}.orange-text.text-darken-4{color:#e65100 !important}.orange.accent-1{background-color:#ffd180 !important}.orange-text.text-accent-1{color:#ffd180 !important}.orange.accent-2{background-color:#ffab40 !important}.orange-text.text-accent-2{color:#ffab40 !important}.orange.accent-3{background-color:#ff9100 !important}.orange-text.text-accent-3{color:#ff9100 !important}.orange.accent-4{background-color:#ff6d00 !important}.orange-text.text-accent-4{color:#ff6d00 !important}.deep-orange{background-color:#ff5722 !important}.deep-orange-text{color:#ff5722 !important}.deep-orange.lighten-5{background-color:#fbe9e7 !important}.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}.deep-orange.lighten-4{background-color:#ffccbc !important}.deep-orange-text.text-lighten-4{color:#ffccbc !important}.deep-orange.lighten-3{background-color:#ffab91 !important}.deep-orange-text.text-lighten-3{color:#ffab91 !important}.deep-orange.lighten-2{background-color:#ff8a65 !important}.deep-orange-text.text-lighten-2{color:#ff8a65 !important}.deep-orange.lighten-1{background-color:#ff7043 !important}.deep-orange-text.text-lighten-1{color:#ff7043 !important}.deep-orange.darken-1{background-color:#f4511e !important}.deep-orange-text.text-darken-1{color:#f4511e !important}.deep-orange.darken-2{background-color:#e64a19 !important}.deep-orange-text.text-darken-2{color:#e64a19 !important}.deep-orange.darken-3{background-color:#d84315 !important}.deep-orange-text.text-darken-3{color:#d84315 !important}.deep-orange.darken-4{background-color:#bf360c !important}.deep-orange-text.text-darken-4{color:#bf360c !important}.deep-orange.accent-1{background-color:#ff9e80 !important}.deep-orange-text.text-accent-1{color:#ff9e80 !important}.deep-orange.accent-2{background-color:#ff6e40 !important}.deep-orange-text.text-accent-2{color:#ff6e40 !important}.deep-orange.accent-3{background-color:#ff3d00 !important}.deep-orange-text.text-accent-3{color:#ff3d00 !important}.deep-orange.accent-4{background-color:#dd2c00 !important}.deep-orange-text.text-accent-4{color:#dd2c00 !important}.brown{background-color:#795548 !important}.brown-text{color:#795548 !important}.brown.lighten-5{background-color:#efebe9 !important}.brown-text.text-lighten-5{color:#efebe9 !important}.brown.lighten-4{background-color:#d7ccc8 !important}.brown-text.text-lighten-4{color:#d7ccc8 !important}.brown.lighten-3{background-color:#bcaaa4 !important}.brown-text.text-lighten-3{color:#bcaaa4 !important}.brown.lighten-2{background-color:#a1887f !important}.brown-text.text-lighten-2{color:#a1887f !important}.brown.lighten-1{background-color:#8d6e63 !important}.brown-text.text-lighten-1{color:#8d6e63 !important}.brown.darken-1{background-color:#6d4c41 !important}.brown-text.text-darken-1{color:#6d4c41 !important}.brown.darken-2{background-color:#5d4037 !important}.brown-text.text-darken-2{color:#5d4037 !important}.brown.darken-3{background-color:#4e342e !important}.brown-text.text-darken-3{color:#4e342e !important}.brown.darken-4{background-color:#3e2723 !important}.brown-text.text-darken-4{color:#3e2723 !important}.blue-grey{background-color:#607d8b !important}.blue-grey-text{color:#607d8b !important}.blue-grey.lighten-5{background-color:#eceff1 !important}.blue-grey-text.text-lighten-5{color:#eceff1 !important}.blue-grey.lighten-4{background-color:#cfd8dc !important}.blue-grey-text.text-lighten-4{color:#cfd8dc !important}.blue-grey.lighten-3{background-color:#b0bec5 !important}.blue-grey-text.text-lighten-3{color:#b0bec5 !important}.blue-grey.lighten-2{background-color:#90a4ae !important}.blue-grey-text.text-lighten-2{color:#90a4ae !important}.blue-grey.lighten-1{background-color:#78909c !important}.blue-grey-text.text-lighten-1{color:#78909c !important}.blue-grey.darken-1{background-color:#546e7a !important}.blue-grey-text.text-darken-1{color:#546e7a !important}.blue-grey.darken-2{background-color:#455a64 !important}.blue-grey-text.text-darken-2{color:#455a64 !important}.blue-grey.darken-3{background-color:#37474f !important}.blue-grey-text.text-darken-3{color:#37474f !important}.blue-grey.darken-4{background-color:#263238 !important}.blue-grey-text.text-darken-4{color:#263238 !important}.grey{background-color:#9e9e9e !important}.grey-text{color:#9e9e9e !important}.grey.lighten-5{background-color:#fafafa !important}.grey-text.text-lighten-5{color:#fafafa !important}.grey.lighten-4{background-color:#f5f5f5 !important}.grey-text.text-lighten-4{color:#f5f5f5 !important}.grey.lighten-3{background-color:#eee !important}.grey-text.text-lighten-3{color:#eee !important}.grey.lighten-2{background-color:#e0e0e0 !important}.grey-text.text-lighten-2{color:#e0e0e0 !important}.grey.lighten-1{background-color:#bdbdbd !important}.grey-text.text-lighten-1{color:#bdbdbd !important}.grey.darken-1{background-color:#757575 !important}.grey-text.text-darken-1{color:#757575 !important}.grey.darken-2{background-color:#616161 !important}.grey-text.text-darken-2{color:#616161 !important}.grey.darken-3{background-color:#424242 !important}.grey-text.text-darken-3{color:#424242 !important}.grey.darken-4{background-color:#212121 !important}.grey-text.text-darken-4{color:#212121 !important}.black{background-color:#000 !important}.black-text{color:#000 !important}.white{background-color:#fff !important}.white-text{color:#fff !important}.transparent{background-color:rgba(0,0,0,0) !important}.transparent-text{color:rgba(0,0,0,0) !important}/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;-moz-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit}button,input,optgroup,select,textarea{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}ul:not(.browser-default){padding-left:0;list-style-type:none}ul:not(.browser-default)>li{list-style-type:none}a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.clearfix{clear:both}.z-depth-0{-webkit-box-shadow:none !important;box-shadow:none !important}.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-small,.btn-floating,.dropdown-content,.collapsible,.sidenav{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)}.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-small:hover,.btn-floating:hover{-webkit-box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2);box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)}.z-depth-2{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3);box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}.z-depth-3{-webkit-box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)}.z-depth-4{-webkit-box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2);box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2)}.z-depth-5,.modal{-webkit-box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2);box-shadow:0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)}.hoverable{-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s}.hoverable:hover{-webkit-box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2rem}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}.breadcrumb i,.breadcrumb [class^="mdi-"],.breadcrumb [class*="mdi-"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:\'\\E5CC\';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:\'Material Icons\';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax-container .parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax-container .parallax img{opacity:0;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transform:translateX(-50%);transform:translateX(-50%)}.pin-top,.pin-bottom{position:relative}.pinned{position:fixed !important}ul.staggered-list li{opacity:0}.fade-in{opacity:0;-webkit-transform-origin:0 50%;transform-origin:0 50%}@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}@media only screen and (min-width: 1201px){.hide-on-extra-large-only{display:none !important}}@media only screen and (min-width: 1201px){.show-on-extra-large{display:block !important}}@media only screen and (min-width: 993px){.show-on-large{display:block !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}@media only screen and (max-width: 600px){.show-on-small{display:block !important}}@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}.page-footer{padding-top:20px;color:#fff;background-color:#ee6e73}.page-footer .footer-copyright{overflow:hidden;min-height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}table,th,td{border:none}table{width:100%;display:table;border-collapse:collapse;border-spacing:0}table.striped tr{border-bottom:none}table.striped>tbody>tr:nth-child(odd){background-color:rgba(242,242,242,0.5)}table.striped>tbody>tr>td{border-radius:0}table.highlight>tbody>tr{-webkit-transition:background-color .25s ease;transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:rgba(242,242,242,0.5)}table.centered thead tr th,table.centered tbody tr td{text-align:center}tr{border-bottom:1px solid rgba(0,0,0,0.12)}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:\'\\00a0\'}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:"\\00a0"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{border-bottom:none;padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid rgba(0,0,0,0.12)}}.collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar:not(.circle-clipper)>.circle,.collection .collection-item.avatar :not(.circle-clipper)>.circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;-webkit-transition:.25s;transition:.25s;color:#26a69a}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#26a69a}.collapsible .collection{margin:0;border:none}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}.progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#26a69a;-webkit-transition:width .3s linear;transition:width .3s linear}.progress .indeterminate{background-color:#26a69a}.progress .indeterminate:before{content:\'\';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.progress .indeterminate:after{content:\'\';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.hide{display:none !important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left !important}.right{float:right !important}.no-select,input[type=range],input[type=range]+.thumb{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0 !important}span.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;-webkit-box-sizing:border-box;box-sizing:border-box}span.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#26a69a;border-radius:2px}span.badge.new:after{content:" new"}span.badge[data-badge-caption]::after{content:" " attr(data-badge-caption)}nav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px;-webkit-font-smoothing:auto}.collection-item span.badge{margin-top:calc(.75rem - 11px)}.collapsible span.badge{margin-left:auto}.sidenav span.badge{margin-top:calc(24px - 11px)}table span.badge{display:inline-block;float:none;margin-left:auto}.material-icons{text-rendering:optimizeLegibility;-webkit-font-feature-settings:\'liga\';-moz-font-feature-settings:\'liga\';font-feature-settings:\'liga\'}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width: 601px){.container{width:85%}}@media only screen and (min-width: 993px){.container{width:70%}}.col .row{margin-left:-.75rem;margin-right:-.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:"";display:table;clear:both}.row .col{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 .75rem;min-height:1px}.row .col[class*="push-"],.row .col[class*="pull-"]{position:relative}.row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-s1{margin-left:8.3333333333%}.row .col.pull-s1{right:8.3333333333%}.row .col.push-s1{left:8.3333333333%}.row .col.offset-s2{margin-left:16.6666666667%}.row .col.pull-s2{right:16.6666666667%}.row .col.push-s2{left:16.6666666667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.3333333333%}.row .col.pull-s4{right:33.3333333333%}.row .col.push-s4{left:33.3333333333%}.row .col.offset-s5{margin-left:41.6666666667%}.row .col.pull-s5{right:41.6666666667%}.row .col.push-s5{left:41.6666666667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.3333333333%}.row .col.pull-s7{right:58.3333333333%}.row .col.push-s7{left:58.3333333333%}.row .col.offset-s8{margin-left:66.6666666667%}.row .col.pull-s8{right:66.6666666667%}.row .col.push-s8{left:66.6666666667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.3333333333%}.row .col.pull-s10{right:83.3333333333%}.row .col.push-s10{left:83.3333333333%}.row .col.offset-s11{margin-left:91.6666666667%}.row .col.pull-s11{right:91.6666666667%}.row .col.push-s11{left:91.6666666667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width: 601px){.row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width: 993px){.row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}@media only screen and (min-width: 1201px){.row .col.xl1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.xl4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.xl7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.xl10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.xl11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.xl12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-xl1{margin-left:8.3333333333%}.row .col.pull-xl1{right:8.3333333333%}.row .col.push-xl1{left:8.3333333333%}.row .col.offset-xl2{margin-left:16.6666666667%}.row .col.pull-xl2{right:16.6666666667%}.row .col.push-xl2{left:16.6666666667%}.row .col.offset-xl3{margin-left:25%}.row .col.pull-xl3{right:25%}.row .col.push-xl3{left:25%}.row .col.offset-xl4{margin-left:33.3333333333%}.row .col.pull-xl4{right:33.3333333333%}.row .col.push-xl4{left:33.3333333333%}.row .col.offset-xl5{margin-left:41.6666666667%}.row .col.pull-xl5{right:41.6666666667%}.row .col.push-xl5{left:41.6666666667%}.row .col.offset-xl6{margin-left:50%}.row .col.pull-xl6{right:50%}.row .col.push-xl6{left:50%}.row .col.offset-xl7{margin-left:58.3333333333%}.row .col.pull-xl7{right:58.3333333333%}.row .col.push-xl7{left:58.3333333333%}.row .col.offset-xl8{margin-left:66.6666666667%}.row .col.pull-xl8{right:66.6666666667%}.row .col.push-xl8{left:66.6666666667%}.row .col.offset-xl9{margin-left:75%}.row .col.pull-xl9{right:75%}.row .col.push-xl9{left:75%}.row .col.offset-xl10{margin-left:83.3333333333%}.row .col.pull-xl10{right:83.3333333333%}.row .col.push-xl10{left:83.3333333333%}.row .col.offset-xl11{margin-left:91.6666666667%}.row .col.pull-xl11{right:91.6666666667%}.row .col.push-xl11{left:91.6666666667%}.row .col.offset-xl12{margin-left:100%}.row .col.pull-xl12{right:100%}.row .col.push-xl12{left:100%}}nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav.nav-extended{height:auto}nav.nav-extended .nav-wrapper{min-height:56px;height:auto}nav.nav-extended .nav-content{position:relative;line-height:normal}nav a{color:#fff}nav i,nav [class^="mdi-"],nav [class*="mdi-"],nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width: 993px){nav a.sidenav-trigger{display:none}}nav .sidenav-trigger{float:left;position:relative;z-index:1;height:56px;margin:0 18px}nav .sidenav-trigger i{height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0}nav .brand-logo.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media only screen and (max-width: 992px){nav .brand-logo{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;-webkit-transform:none;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}nav .brand-logo.right{right:0.5rem;padding:0}nav .brand-logo i,nav .brand-logo [class^="mdi-"],nav .brand-logo [class*="mdi-"],nav .brand-logo i.material-icons{float:left;margin-right:15px}nav .nav-title{display:inline-block;font-size:32px;padding:28px 0}nav ul{margin:0}nav ul li{-webkit-transition:background-color .3s;transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,0.1)}nav ul a{-webkit-transition:background-color .3s;transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-large,nav ul a.btn-small,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a.btn>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-small>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-flat>.material-icons,nav ul a.btn-floating>.material-icons{height:inherit;line-height:inherit}nav ul a:hover{background-color:rgba(0,0,0,0.1)}nav ul.left{float:left}nav form{height:100%}nav .input-field{margin:0;height:100%}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;-webkit-box-shadow:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:rgba(255,255,255,0.7);-webkit-transition:color .3s;transition:color .3s}nav .input-field label.active i{color:#fff}.navbar-fixed{position:relative;height:56px;z-index:997}.navbar-fixed nav{position:fixed}@media only screen and (min-width: 601px){nav.nav-extended .nav-wrapper{min-height:64px}nav,nav .nav-wrapper i,nav a.sidenav-trigger,nav a.sidenav-trigger i{height:64px;line-height:64px}.navbar-fixed{height:64px}}a{text-decoration:none}html{line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}@media only screen and (min-width: 0){html{font-size:14px}}@media only screen and (min-width: 992px){html{font-size:14.5px}}@media only screen and (min-width: 1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.3}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;line-height:110%;margin:2.8rem 0 1.68rem 0}h2{font-size:3.56rem;line-height:110%;margin:2.3733333333rem 0 1.424rem 0}h3{font-size:2.92rem;line-height:110%;margin:1.9466666667rem 0 1.168rem 0}h4{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0}h5{font-size:1.64rem;line-height:110%;margin:1.0933333333rem 0 .656rem 0}h6{font-size:1.15rem;line-height:110%;margin:.7666666667rem 0 .46rem 0}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light{font-weight:300}.thin{font-weight:200}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.scale-transition{-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:-webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;transition:transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important}.scale-transition.scale-out{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .2s !important;transition:-webkit-transform .2s !important;transition:transform .2s !important;transition:transform .2s, -webkit-transform .2s !important}.scale-transition.scale-in{-webkit-transform:scale(1);transform:scale(1)}.card-panel{-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s;padding:24px;margin:.5rem 0 1rem 0;border-radius:2px;background-color:#fff}.card{position:relative;margin:.5rem 0 1rem 0;background-color:#fff;-webkit-transition:-webkit-box-shadow .25s;transition:-webkit-box-shadow .25s;transition:box-shadow .25s;transition:box-shadow .25s, -webkit-box-shadow .25s;border-radius:2px}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.small,.card.medium,.card.large{position:relative}.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}.card.small .card-image+.card-content,.card.medium .card-image+.card-content,.card.large .card-image+.card-content{max-height:40%}.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:100%;overflow:hidden}.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card.horizontal{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.card.horizontal.small .card-image,.card.horizontal.medium .card-image,.card.horizontal.large .card-image{height:100%;max-height:none;overflow:visible}.card.horizontal.small .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.large .card-image img{height:100%}.card.horizontal .card-image{max-width:50%}.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}.card.horizontal .card-stacked{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.card.horizontal .card-stacked .card-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.card.sticky-action .card-action{z-index:2}.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;max-width:100%;padding:24px}.card .card-content{padding:24px;border-radius:0 0 2px 2px}.card .card-content p{margin:0}.card .card-content .card-title{display:block;line-height:32px;margin-bottom:8px}.card .card-content .card-title i{line-height:32px}.card .card-action{background-color:inherit;border-top:1px solid rgba(160,160,160,0.2);position:relative;padding:16px 24px}.card .card-action:last-child{border-radius:0 0 2px 2px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:24px;-webkit-transition:color .3s ease;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:24px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:35px;width:auto;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:default}.toast .toast-action{color:#eeff41;font-weight:500;margin-right:-25px;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}.tabs{position:relative;overflow-x:auto;overflow-y:hidden;height:48px;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}.tabs.tabs-transparent{background-color:transparent}.tabs.tabs-transparent .tab a,.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover{color:rgba(255,255,255,0.7)}.tabs.tabs-transparent .tab a:hover,.tabs.tabs-transparent .tab a.active{color:#fff}.tabs.tabs-transparent .indicator{background-color:#fff}.tabs.tabs-fixed-width{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs.tabs-fixed-width .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}.tabs .tab a{color:rgba(238,110,115,0.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;-webkit-transition:color .28s ease, background-color .28s ease;transition:color .28s ease, background-color .28s ease}.tabs .tab a:focus,.tabs .tab a:focus.active{background-color:rgba(246,178,181,0.2);outline:none}.tabs .tab a:hover,.tabs .tab a.active{background-color:transparent;color:#ee6e73}.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,0.4);cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}@media only screen and (max-width: 992px){.tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab a{padding:0 12px}}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none;visibility:hidden;background-color:#323232}.backdrop{position:absolute;opacity:0;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;-webkit-transform-origin:50% 0%;transform-origin:50% 0%;visibility:hidden}.btn,.btn-large,.btn-small,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn.disabled,.disabled.btn-large,.disabled.btn-small,.btn-floating.disabled,.btn-large.disabled,.btn-small.disabled,.btn-flat.disabled,.btn:disabled,.btn-large:disabled,.btn-small:disabled,.btn-floating:disabled,.btn-large:disabled,.btn-small:disabled,.btn-flat:disabled,.btn[disabled],.btn-large[disabled],.btn-small[disabled],.btn-floating[disabled],.btn-large[disabled],.btn-small[disabled],.btn-flat[disabled]{pointer-events:none;background-color:#DFDFDF !important;-webkit-box-shadow:none;box-shadow:none;color:#9F9F9F !important;cursor:default}.btn.disabled:hover,.disabled.btn-large:hover,.disabled.btn-small:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-small.disabled:hover,.btn-flat.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-floating:disabled:hover,.btn-large:disabled:hover,.btn-small:disabled:hover,.btn-flat:disabled:hover,.btn[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-floating[disabled]:hover,.btn-large[disabled]:hover,.btn-small[disabled]:hover,.btn-flat[disabled]:hover{background-color:#DFDFDF !important;color:#9F9F9F !important}.btn,.btn-large,.btn-small,.btn-floating,.btn-large,.btn-small,.btn-flat{font-size:14px;outline:0}.btn i,.btn-large i,.btn-small i,.btn-floating i,.btn-large i,.btn-small i,.btn-flat i{font-size:1.3rem;line-height:inherit}.btn:focus,.btn-large:focus,.btn-small:focus,.btn-floating:focus{background-color:#1d7d74}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;-webkit-transition:background-color .2s ease-out;transition:background-color .2s ease-out;cursor:pointer}.btn:hover,.btn-large:hover,.btn-small:hover{background-color:#2bbbad}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#26a69a;border-radius:50%;-webkit-transition:background-color .3s;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating:hover{background-color:#26a69a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab{bottom:-28px}.btn-floating.btn-large i{line-height:56px}.btn-floating.btn-small{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab{bottom:-16.2px}.btn-floating.btn-small i{line-height:32.4px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right{padding:0 15px 0 0}.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom{padding:0 0 15px 0}.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fixed-action-btn.direction-bottom ul li{margin:15px 0 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar ul li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;-webkit-transition:none;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;-webkit-transform:scale(0);transform:scale(0)}.btn-flat{-webkit-box-shadow:none;box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;-webkit-transition:background-color .2s;transition:background-color .2s}.btn-flat:focus,.btn-flat:hover{-webkit-box-shadow:none;box-shadow:none}.btn-flat:focus{background-color:rgba(0,0,0,0.1)}.btn-flat.disabled,.btn-flat.btn-flat[disabled]{background-color:transparent !important;color:#b3b2b2 !important;cursor:default}.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large i{font-size:1.6rem}.btn-small{height:32.4px;line-height:32.4px;font-size:13px}.btn-small i{font-size:1.2rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;overflow-y:auto;opacity:0;position:absolute;left:0;top:0;z-index:9999;-webkit-transform-origin:0 0;transform-origin:0 0}.dropdown-content:focus{outline:0}.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left}.dropdown-content li:hover,.dropdown-content li.active{background-color:#eee}.dropdown-content li:focus{outline:none}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:0;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit;float:left;margin:0 24px 0 0;width:24px}body.keyboard-focused .dropdown-content li:focus{background-color:#dadada}.input-field.col .dropdown-content [type="checkbox"]+label{top:1px;left:0;height:18px;-webkit-transform:none;transform:none}.dropdown-trigger{cursor:pointer}/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;-webkit-transition:.3s ease-out;transition:.3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);-webkit-transition:all 0.7s ease-out;transition:all 0.7s ease-out;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}.waves-effect input[type="button"],.waves-effect input[type="reset"],.waves-effect input[type="submit"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-effect img{position:relative;z-index:-1}.waves-notransition{-webkit-transition:none !important;transition:none !important}.waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, white 100%, black 100%)}.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}.modal:focus{outline:none}@media only screen and (max-width: 992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%;text-align:right}.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-small,.modal .modal-footer .btn-flat{margin:6px 0}.modal-overlay{position:fixed;z-index:999;top:-25%;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}.collapsible-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-tap-highlight-color:transparent;line-height:1.5;padding:1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header:focus{outline:0}.collapsible-header i{width:2rem;font-size:1.6rem;display:inline-block;text-align:center;margin-right:1rem}.keyboard-focused .collapsible-header:focus{background-color:#eee}.collapsible-body{display:none;border-bottom:1px solid #ddd;-webkit-box-sizing:border-box;box-sizing:border-box;padding:2rem}.sidenav .collapsible,.sidenav.fixed .collapsible{border:none;-webkit-box-shadow:none;box-shadow:none}.sidenav .collapsible li,.sidenav.fixed .collapsible li{padding:0}.sidenav .collapsible-header,.sidenav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}.sidenav .collapsible-header:hover,.sidenav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,0.05)}.sidenav .collapsible-header i,.sidenav.fixed .collapsible-header i{line-height:inherit}.sidenav .collapsible-body,.sidenav.fixed .collapsible-body{border:0;background-color:#fff}.sidenav .collapsible-body li a,.sidenav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}.collapsible.popout{border:none;-webkit-box-shadow:none;box-shadow:none}.collapsible.popout>li{-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;-webkit-transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.collapsible.popout>li.active{-webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}.chip:focus{outline:none;background-color:#26a69a;color:#fff}.chip>img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.chips{border:none;border-bottom:1px solid #9e9e9e;-webkit-box-shadow:none;box-shadow:none;margin:0 0 8px 0;min-height:45px;outline:none;-webkit-transition:all .3s;transition:all .3s}.chips.focus{border-bottom:1px solid #26a69a;-webkit-box-shadow:0 1px 0 0 #26a69a;box-shadow:0 1px 0 0 #26a69a}.chips:hover{cursor:text}.chips .input{background:none;border:0;color:rgba(0,0,0,0.6);display:inline-block;font-size:16px;height:3rem;line-height:32px;outline:0;margin:0;padding:0 !important;width:120px !important}.chips .input:focus{border:0 !important;-webkit-box-shadow:none !important;box-shadow:none !important}.chips .autocomplete-content{margin-top:0;margin-bottom:0}.prefix ~ .chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.chips:empty ~ label{font-size:0.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}.materialboxed{display:block;cursor:-webkit-zoom-in;cursor:zoom-in;position:relative;-webkit-transition:opacity .4s;transition:opacity .4s;-webkit-backface-visibility:hidden}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:-webkit-zoom-out;cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#292929;z-index:1000;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;left:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #c9f3ef}button:focus{outline:none;background-color:#2ab7a9}label{font-size:.8rem;color:#9e9e9e}::-webkit-input-placeholder{color:#d1d1d1}::-moz-placeholder{color:#d1d1d1}:-ms-input-placeholder{color:#d1d1d1}::-ms-input-placeholder{color:#d1d1d1}::placeholder{color:#d1d1d1}input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-transition:border .3s, -webkit-box-shadow .3s;transition:border .3s, -webkit-box-shadow .3s;transition:box-shadow .3s, border .3s;transition:box-shadow .3s, border .3s, -webkit-box-shadow .3s}input:not([type]):disabled,input:not([type])[readonly="readonly"],input[type=text]:not(.browser-default):disabled,input[type=text]:not(.browser-default)[readonly="readonly"],input[type=password]:not(.browser-default):disabled,input[type=password]:not(.browser-default)[readonly="readonly"],input[type=email]:not(.browser-default):disabled,input[type=email]:not(.browser-default)[readonly="readonly"],input[type=url]:not(.browser-default):disabled,input[type=url]:not(.browser-default)[readonly="readonly"],input[type=time]:not(.browser-default):disabled,input[type=time]:not(.browser-default)[readonly="readonly"],input[type=date]:not(.browser-default):disabled,input[type=date]:not(.browser-default)[readonly="readonly"],input[type=datetime]:not(.browser-default):disabled,input[type=datetime]:not(.browser-default)[readonly="readonly"],input[type=datetime-local]:not(.browser-default):disabled,input[type=datetime-local]:not(.browser-default)[readonly="readonly"],input[type=tel]:not(.browser-default):disabled,input[type=tel]:not(.browser-default)[readonly="readonly"],input[type=number]:not(.browser-default):disabled,input[type=number]:not(.browser-default)[readonly="readonly"],input[type=search]:not(.browser-default):disabled,input[type=search]:not(.browser-default)[readonly="readonly"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly="readonly"]{color:rgba(0,0,0,0.42);border-bottom:1px dotted rgba(0,0,0,0.42)}input:not([type]):disabled+label,input:not([type])[readonly="readonly"]+label,input[type=text]:not(.browser-default):disabled+label,input[type=text]:not(.browser-default)[readonly="readonly"]+label,input[type=password]:not(.browser-default):disabled+label,input[type=password]:not(.browser-default)[readonly="readonly"]+label,input[type=email]:not(.browser-default):disabled+label,input[type=email]:not(.browser-default)[readonly="readonly"]+label,input[type=url]:not(.browser-default):disabled+label,input[type=url]:not(.browser-default)[readonly="readonly"]+label,input[type=time]:not(.browser-default):disabled+label,input[type=time]:not(.browser-default)[readonly="readonly"]+label,input[type=date]:not(.browser-default):disabled+label,input[type=date]:not(.browser-default)[readonly="readonly"]+label,input[type=datetime]:not(.browser-default):disabled+label,input[type=datetime]:not(.browser-default)[readonly="readonly"]+label,input[type=datetime-local]:not(.browser-default):disabled+label,input[type=datetime-local]:not(.browser-default)[readonly="readonly"]+label,input[type=tel]:not(.browser-default):disabled+label,input[type=tel]:not(.browser-default)[readonly="readonly"]+label,input[type=number]:not(.browser-default):disabled+label,input[type=number]:not(.browser-default)[readonly="readonly"]+label,input[type=search]:not(.browser-default):disabled+label,input[type=search]:not(.browser-default)[readonly="readonly"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly="readonly"]+label{color:rgba(0,0,0,0.42)}input:not([type]):focus:not([readonly]),input[type=text]:not(.browser-default):focus:not([readonly]),input[type=password]:not(.browser-default):focus:not([readonly]),input[type=email]:not(.browser-default):focus:not([readonly]),input[type=url]:not(.browser-default):focus:not([readonly]),input[type=time]:not(.browser-default):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),input[type=datetime]:not(.browser-default):focus:not([readonly]),input[type=datetime-local]:not(.browser-default):focus:not([readonly]),input[type=tel]:not(.browser-default):focus:not([readonly]),input[type=number]:not(.browser-default):focus:not([readonly]),input[type=search]:not(.browser-default):focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;-webkit-box-shadow:0 1px 0 0 #26a69a;box-shadow:0 1px 0 0 #26a69a}input:not([type]):focus:not([readonly])+label,input[type=text]:not(.browser-default):focus:not([readonly])+label,input[type=password]:not(.browser-default):focus:not([readonly])+label,input[type=email]:not(.browser-default):focus:not([readonly])+label,input[type=url]:not(.browser-default):focus:not([readonly])+label,input[type=time]:not(.browser-default):focus:not([readonly])+label,input[type=date]:not(.browser-default):focus:not([readonly])+label,input[type=datetime]:not(.browser-default):focus:not([readonly])+label,input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,input[type=tel]:not(.browser-default):focus:not([readonly])+label,input[type=number]:not(.browser-default):focus:not([readonly])+label,input[type=search]:not(.browser-default):focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}input:not([type]):focus.valid ~ label,input[type=text]:not(.browser-default):focus.valid ~ label,input[type=password]:not(.browser-default):focus.valid ~ label,input[type=email]:not(.browser-default):focus.valid ~ label,input[type=url]:not(.browser-default):focus.valid ~ label,input[type=time]:not(.browser-default):focus.valid ~ label,input[type=date]:not(.browser-default):focus.valid ~ label,input[type=datetime]:not(.browser-default):focus.valid ~ label,input[type=datetime-local]:not(.browser-default):focus.valid ~ label,input[type=tel]:not(.browser-default):focus.valid ~ label,input[type=number]:not(.browser-default):focus.valid ~ label,input[type=search]:not(.browser-default):focus.valid ~ label,textarea.materialize-textarea:focus.valid ~ label{color:#4CAF50}input:not([type]):focus.invalid ~ label,input[type=text]:not(.browser-default):focus.invalid ~ label,input[type=password]:not(.browser-default):focus.invalid ~ label,input[type=email]:not(.browser-default):focus.invalid ~ label,input[type=url]:not(.browser-default):focus.invalid ~ label,input[type=time]:not(.browser-default):focus.invalid ~ label,input[type=date]:not(.browser-default):focus.invalid ~ label,input[type=datetime]:not(.browser-default):focus.invalid ~ label,input[type=datetime-local]:not(.browser-default):focus.invalid ~ label,input[type=tel]:not(.browser-default):focus.invalid ~ label,input[type=number]:not(.browser-default):focus.invalid ~ label,input[type=search]:not(.browser-default):focus.invalid ~ label,textarea.materialize-textarea:focus.invalid ~ label{color:#F44336}input:not([type]).validate+label,input[type=text]:not(.browser-default).validate+label,input[type=password]:not(.browser-default).validate+label,input[type=email]:not(.browser-default).validate+label,input[type=url]:not(.browser-default).validate+label,input[type=time]:not(.browser-default).validate+label,input[type=date]:not(.browser-default).validate+label,input[type=datetime]:not(.browser-default).validate+label,input[type=datetime-local]:not(.browser-default).validate+label,input[type=tel]:not(.browser-default).validate+label,input[type=number]:not(.browser-default).validate+label,input[type=search]:not(.browser-default).validate+label,textarea.materialize-textarea.validate+label{width:100%}input.valid:not([type]),input.valid:not([type]):focus,input.valid[type=text]:not(.browser-default),input.valid[type=text]:not(.browser-default):focus,input.valid[type=password]:not(.browser-default),input.valid[type=password]:not(.browser-default):focus,input.valid[type=email]:not(.browser-default),input.valid[type=email]:not(.browser-default):focus,input.valid[type=url]:not(.browser-default),input.valid[type=url]:not(.browser-default):focus,input.valid[type=time]:not(.browser-default),input.valid[type=time]:not(.browser-default):focus,input.valid[type=date]:not(.browser-default),input.valid[type=date]:not(.browser-default):focus,input.valid[type=datetime]:not(.browser-default),input.valid[type=datetime]:not(.browser-default):focus,input.valid[type=datetime-local]:not(.browser-default),input.valid[type=datetime-local]:not(.browser-default):focus,input.valid[type=tel]:not(.browser-default),input.valid[type=tel]:not(.browser-default):focus,input.valid[type=number]:not(.browser-default),input.valid[type=number]:not(.browser-default):focus,input.valid[type=search]:not(.browser-default),input.valid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.valid,textarea.materialize-textarea.valid:focus,.select-wrapper.valid>input.select-dropdown{border-bottom:1px solid #4CAF50;-webkit-box-shadow:0 1px 0 0 #4CAF50;box-shadow:0 1px 0 0 #4CAF50}input.invalid:not([type]),input.invalid:not([type]):focus,input.invalid[type=text]:not(.browser-default),input.invalid[type=text]:not(.browser-default):focus,input.invalid[type=password]:not(.browser-default),input.invalid[type=password]:not(.browser-default):focus,input.invalid[type=email]:not(.browser-default),input.invalid[type=email]:not(.browser-default):focus,input.invalid[type=url]:not(.browser-default),input.invalid[type=url]:not(.browser-default):focus,input.invalid[type=time]:not(.browser-default),input.invalid[type=time]:not(.browser-default):focus,input.invalid[type=date]:not(.browser-default),input.invalid[type=date]:not(.browser-default):focus,input.invalid[type=datetime]:not(.browser-default),input.invalid[type=datetime]:not(.browser-default):focus,input.invalid[type=datetime-local]:not(.browser-default),input.invalid[type=datetime-local]:not(.browser-default):focus,input.invalid[type=tel]:not(.browser-default),input.invalid[type=tel]:not(.browser-default):focus,input.invalid[type=number]:not(.browser-default),input.invalid[type=number]:not(.browser-default):focus,input.invalid[type=search]:not(.browser-default),input.invalid[type=search]:not(.browser-default):focus,textarea.materialize-textarea.invalid,textarea.materialize-textarea.invalid:focus,.select-wrapper.invalid>input.select-dropdown,.select-wrapper.invalid>input.select-dropdown:focus{border-bottom:1px solid #F44336;-webkit-box-shadow:0 1px 0 0 #F44336;box-shadow:0 1px 0 0 #F44336}input:not([type]).valid ~ .helper-text[data-success],input:not([type]):focus.valid ~ .helper-text[data-success],input:not([type]).invalid ~ .helper-text[data-error],input:not([type]):focus.invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default).valid ~ .helper-text[data-success],input[type=text]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=text]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=text]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default).valid ~ .helper-text[data-success],input[type=password]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=password]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=password]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default).valid ~ .helper-text[data-success],input[type=email]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=email]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=email]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default).valid ~ .helper-text[data-success],input[type=url]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=url]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=url]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default).valid ~ .helper-text[data-success],input[type=time]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=time]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=time]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default).valid ~ .helper-text[data-success],input[type=date]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=date]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=date]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default).valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default).valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=tel]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default).valid ~ .helper-text[data-success],input[type=number]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=number]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=number]:not(.browser-default):focus.invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default).valid ~ .helper-text[data-success],input[type=search]:not(.browser-default):focus.valid ~ .helper-text[data-success],input[type=search]:not(.browser-default).invalid ~ .helper-text[data-error],input[type=search]:not(.browser-default):focus.invalid ~ .helper-text[data-error],textarea.materialize-textarea.valid ~ .helper-text[data-success],textarea.materialize-textarea:focus.valid ~ .helper-text[data-success],textarea.materialize-textarea.invalid ~ .helper-text[data-error],textarea.materialize-textarea:focus.invalid ~ .helper-text[data-error],.select-wrapper.valid .helper-text[data-success],.select-wrapper.invalid ~ .helper-text[data-error]{color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}input:not([type]).valid ~ .helper-text:after,input:not([type]):focus.valid ~ .helper-text:after,input[type=text]:not(.browser-default).valid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=password]:not(.browser-default).valid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=email]:not(.browser-default).valid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=url]:not(.browser-default).valid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=time]:not(.browser-default).valid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=date]:not(.browser-default).valid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).valid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=tel]:not(.browser-default).valid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=number]:not(.browser-default).valid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.valid ~ .helper-text:after,input[type=search]:not(.browser-default).valid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.valid ~ .helper-text:after,textarea.materialize-textarea.valid ~ .helper-text:after,textarea.materialize-textarea:focus.valid ~ .helper-text:after,.select-wrapper.valid ~ .helper-text:after{content:attr(data-success);color:#4CAF50}input:not([type]).invalid ~ .helper-text:after,input:not([type]):focus.invalid ~ .helper-text:after,input[type=text]:not(.browser-default).invalid ~ .helper-text:after,input[type=text]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=password]:not(.browser-default).invalid ~ .helper-text:after,input[type=password]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=email]:not(.browser-default).invalid ~ .helper-text:after,input[type=email]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=url]:not(.browser-default).invalid ~ .helper-text:after,input[type=url]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=time]:not(.browser-default).invalid ~ .helper-text:after,input[type=time]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=date]:not(.browser-default).invalid ~ .helper-text:after,input[type=date]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default).invalid ~ .helper-text:after,input[type=datetime-local]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=tel]:not(.browser-default).invalid ~ .helper-text:after,input[type=tel]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=number]:not(.browser-default).invalid ~ .helper-text:after,input[type=number]:not(.browser-default):focus.invalid ~ .helper-text:after,input[type=search]:not(.browser-default).invalid ~ .helper-text:after,input[type=search]:not(.browser-default):focus.invalid ~ .helper-text:after,textarea.materialize-textarea.invalid ~ .helper-text:after,textarea.materialize-textarea:focus.invalid ~ .helper-text:after,.select-wrapper.invalid ~ .helper-text:after{content:attr(data-error);color:#F44336}input:not([type])+label:after,input[type=text]:not(.browser-default)+label:after,input[type=password]:not(.browser-default)+label:after,input[type=email]:not(.browser-default)+label:after,input[type=url]:not(.browser-default)+label:after,input[type=time]:not(.browser-default)+label:after,input[type=date]:not(.browser-default)+label:after,input[type=datetime]:not(.browser-default)+label:after,input[type=datetime-local]:not(.browser-default)+label:after,input[type=tel]:not(.browser-default)+label:after,input[type=number]:not(.browser-default)+label:after,input[type=search]:not(.browser-default)+label:after,textarea.materialize-textarea+label:after,.select-wrapper+label:after{display:block;content:"";position:absolute;top:100%;left:0;opacity:0;-webkit-transition:.2s opacity ease-out, .2s color ease-out;transition:.2s opacity ease-out, .2s color ease-out}.input-field{position:relative;margin-top:1rem;margin-bottom:1rem}.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}.input-field.inline input,.input-field.inline .select-dropdown{margin-bottom:1rem}.input-field.col label{left:.75rem}.input-field.col .prefix ~ label,.input-field.col .prefix ~ .validate ~ label{width:calc(100% - 3rem - 1.5rem)}.input-field>label{color:#9e9e9e;position:absolute;top:0;left:0;font-size:1rem;cursor:text;-webkit-transition:color .2s ease-out, -webkit-transform .2s ease-out;transition:color .2s ease-out, -webkit-transform .2s ease-out;transition:transform .2s ease-out, color .2s ease-out;transition:transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;-webkit-transform:translateY(12px);transform:translateY(12px)}.input-field>label:not(.label-icon).active{-webkit-transform:translateY(-14px) scale(0.8);transform:translateY(-14px) scale(0.8);-webkit-transform-origin:0 0;transform-origin:0 0}.input-field>input[type]:-webkit-autofill:not(.browser-default):not([type="search"])+label,.input-field>input[type=date]:not(.browser-default)+label,.input-field>input[type=time]:not(.browser-default)+label{-webkit-transform:translateY(-14px) scale(0.8);transform:translateY(-14px) scale(0.8);-webkit-transform-origin:0 0;transform-origin:0 0}.input-field .helper-text{position:relative;min-height:18px;display:block;font-size:12px;color:rgba(0,0,0,0.54)}.input-field .helper-text::after{opacity:1;position:absolute;top:0;left:0}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;-webkit-transition:color .2s;transition:color .2s;top:.5rem}.input-field .prefix.active{color:#26a69a}.input-field .prefix ~ input,.input-field .prefix ~ textarea,.input-field .prefix ~ label,.input-field .prefix ~ .validate ~ label,.input-field .prefix ~ .helper-text,.input-field .prefix ~ .autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix ~ label{margin-left:3rem}@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;-webkit-transition:.3s background-color;transition:.3s background-color}.nav-wrapper .input-field input[type=search]{height:inherit;padding-left:4rem;width:calc(100% - 4rem);border:0;-webkit-box-shadow:none;box-shadow:none}.input-field input[type=search]:focus:not(.browser-default){background-color:#fff;border:0;-webkit-box-shadow:none;box-shadow:none;color:#444}.input-field input[type=search]:focus:not(.browser-default)+label i,.input-field input[type=search]:focus:not(.browser-default) ~ .mdi-navigation-close,.input-field input[type=search]:focus:not(.browser-default) ~ .material-icons{color:#444}.input-field input[type=search]+.label-icon{-webkit-transform:none;transform:none;left:1rem}.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;-webkit-transition:.3s color;transition:.3s color}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{line-height:normal;overflow-y:hidden;padding:.8rem 0 .8rem 0;resize:none;min-height:3rem;-webkit-box-sizing:border-box;box-sizing:border-box}.hiddendiv{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem;position:absolute;top:0;z-index:-1}.autocomplete-content li .highlight{color:#444}.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}.character-counter{min-height:18px}[type="radio"]:not(:checked),[type="radio"]:checked{position:absolute;opacity:0;pointer-events:none}[type="radio"]:not(:checked)+span,[type="radio"]:checked+span{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-transition:.28s ease;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type="radio"]+span:before,[type="radio"]+span:after{content:\'\';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;-webkit-transition:.28s ease;transition:.28s ease}[type="radio"]:not(:checked)+span:before,[type="radio"]:not(:checked)+span:after,[type="radio"]:checked+span:before,[type="radio"]:checked+span:after,[type="radio"].with-gap:checked+span:before,[type="radio"].with-gap:checked+span:after{border-radius:50%}[type="radio"]:not(:checked)+span:before,[type="radio"]:not(:checked)+span:after{border:2px solid #5a5a5a}[type="radio"]:not(:checked)+span:after{-webkit-transform:scale(0);transform:scale(0)}[type="radio"]:checked+span:before{border:2px solid transparent}[type="radio"]:checked+span:after,[type="radio"].with-gap:checked+span:before,[type="radio"].with-gap:checked+span:after{border:2px solid #26a69a}[type="radio"]:checked+span:after,[type="radio"].with-gap:checked+span:after{background-color:#26a69a}[type="radio"]:checked+span:after{-webkit-transform:scale(1.02);transform:scale(1.02)}[type="radio"].with-gap:checked+span:after{-webkit-transform:scale(0.5);transform:scale(0.5)}[type="radio"].tabbed:focus+span:before{-webkit-box-shadow:0 0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 0 10px rgba(0,0,0,0.1)}[type="radio"].with-gap:disabled:checked+span:before{border:2px solid rgba(0,0,0,0.42)}[type="radio"].with-gap:disabled:checked+span:after{border:none;background-color:rgba(0,0,0,0.42)}[type="radio"]:disabled:not(:checked)+span:before,[type="radio"]:disabled:checked+span:before{background-color:transparent;border-color:rgba(0,0,0,0.42)}[type="radio"]:disabled+span{color:rgba(0,0,0,0.42)}[type="radio"]:disabled:not(:checked)+span:before{border-color:rgba(0,0,0,0.42)}[type="radio"]:disabled:checked+span:after{background-color:rgba(0,0,0,0.42);border-color:#949494}[type="checkbox"]:not(:checked),[type="checkbox"]:checked{position:absolute;opacity:0;pointer-events:none}[type="checkbox"]+span:not(.lever){position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type="checkbox"]+span:not(.lever):before,[type="checkbox"]:not(.filled-in)+span:not(.lever):after{content:\'\';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:3px;-webkit-transition:.2s;transition:.2s}[type="checkbox"]:not(.filled-in)+span:not(.lever):after{border:0;-webkit-transform:scale(0);transform:scale(0)}[type="checkbox"]:not(:checked):disabled+span:not(.lever):before{border:none;background-color:rgba(0,0,0,0.42)}[type="checkbox"].tabbed:focus+span:not(.lever):after{-webkit-transform:scale(1);transform:scale(1);border:0;border-radius:50%;-webkit-box-shadow:0 0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 0 10px rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.1)}[type="checkbox"]:checked+span:not(.lever):before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type="checkbox"]:checked:disabled+span:before{border-right:2px solid rgba(0,0,0,0.42);border-bottom:2px solid rgba(0,0,0,0.42)}[type="checkbox"]:indeterminate+span:not(.lever):before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type="checkbox"]:indeterminate:disabled+span:not(.lever):before{border-right:2px solid rgba(0,0,0,0.42);background-color:transparent}[type="checkbox"].filled-in+span:not(.lever):after{border-radius:2px}[type="checkbox"].filled-in+span:not(.lever):before,[type="checkbox"].filled-in+span:not(.lever):after{content:\'\';left:0;position:absolute;-webkit-transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}[type="checkbox"].filled-in:not(:checked)+span:not(.lever):before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type="checkbox"].filled-in:not(:checked)+span:not(.lever):after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}[type="checkbox"].filled-in:checked+span:not(.lever):before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type="checkbox"].filled-in:checked+span:not(.lever):after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}[type="checkbox"].filled-in.tabbed:focus+span:not(.lever):after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,0.1)}[type="checkbox"].filled-in.tabbed:checked:focus+span:not(.lever):after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}[type="checkbox"].filled-in:disabled:not(:checked)+span:not(.lever):before{background-color:transparent;border:2px solid transparent}[type="checkbox"].filled-in:disabled:not(:checked)+span:not(.lever):after{border-color:transparent;background-color:#949494}[type="checkbox"].filled-in:disabled:checked+span:not(.lever):before{background-color:transparent}[type="checkbox"].filled-in:disabled:checked+span:not(.lever):after{background-color:#949494;border-color:#949494}.switch,.switch *{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}.switch label input[type=checkbox]:checked+.lever:before,.switch label input[type=checkbox]:checked+.lever:after{left:18px}.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a}.switch label .lever{content:"";display:inline-block;position:relative;width:36px;height:14px;background-color:rgba(0,0,0,0.38);border-radius:15px;margin-right:10px;-webkit-transition:background 0.3s ease;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:before,.switch label .lever:after{content:"";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;-webkit-transition:left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;transition:left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease}.switch label .lever:before{background-color:rgba(38,166,154,0.15)}.switch label .lever:after{background-color:#F1F1F1;-webkit-box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)}input[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before{-webkit-transform:scale(2.4);transform:scale(2.4);background-color:rgba(38,166,154,0.15)}input[type=checkbox]:not(:disabled) ~ .lever:active:before,input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before{-webkit-transform:scale(2.4);transform:scale(2.4);background-color:rgba(0,0,0,0.08)}.switch input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,0.12)}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}select{display:none}select.browser-default{display:block}select{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper.valid+label,.select-wrapper.invalid+label{width:100%;pointer-events:none}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.select-wrapper input.select-dropdown:focus{border-bottom:1px solid #26a69a}.select-wrapper .caret{position:absolute;right:0;top:0;bottom:0;margin:auto 0;z-index:0;fill:rgba(0,0,0,0.87)}.select-wrapper+label{position:absolute;top:-26px;font-size:.8rem}select:disabled{color:rgba(0,0,0,0.42)}.select-wrapper.disabled+label{color:rgba(0,0,0,0.42)}.select-wrapper.disabled .caret{fill:rgba(0,0,0,0.42)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.42);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-wrapper i{color:rgba(0,0,0,0.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}body.keyboard-focused .select-dropdown.dropdown-content li:focus{background-color:rgba(0,0,0,0.08)}.select-dropdown.dropdown-content li:hover{background-color:rgba(0,0,0,0.08)}.select-dropdown.dropdown-content li.selected{background-color:rgba(0,0,0,0.03)}.prefix ~ .select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.prefix ~ label{margin-left:3rem}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}.select-dropdown li.optgroup ~ li.optgroup-option{padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large,.file-field .btn-small{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.file-field input[type=file]::-webkit-file-upload-button{display:none}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}input[type=range]:focus{outline:none}input[type=range]+.thumb{position:absolute;top:10px;left:0;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;margin-left:7px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s;-webkit-appearance:none;background-color:#26a69a;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0 0}.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 10px rgba(38,166,154,0.26);box-shadow:0 0 0 10px rgba(38,166,154,0.26)}input[type=range]{border:1px solid white}input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-moz-focus-inner{border:0}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s, -webkit-box-shadow .3s}.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb{box-shadow:0 0 0 10px rgba(38,166,154,0.26)}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:16px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:15px;border-left:1px solid #ee6e73}.table-of-contents a.active{font-weight:500;padding-left:14px;border-left:2px solid #ee6e73}.sidenav{position:fixed;width:300px;left:0;top:0;margin:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateX(-105%);transform:translateX(-105%)}.sidenav.right-aligned{right:0;-webkit-transform:translateX(105%);transform:translateX(105%);left:auto;-webkit-transform:translateX(100%);transform:translateX(100%)}.sidenav .collapsible{margin:0}.sidenav li{float:none;line-height:48px}.sidenav li.active{background-color:rgba(0,0,0,0.05)}.sidenav li>a{color:rgba(0,0,0,0.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}.sidenav li>a:hover{background-color:rgba(0,0,0,0.05)}.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-flat,.sidenav li>a.btn-floating{margin:10px 15px}.sidenav li>a.btn,.sidenav li>a.btn-large,.sidenav li>a.btn-small,.sidenav li>a.btn-large,.sidenav li>a.btn-floating{color:#fff}.sidenav li>a.btn-flat{color:#343434}.sidenav li>a.btn:hover,.sidenav li>a.btn-large:hover,.sidenav li>a.btn-small:hover,.sidenav li>a.btn-large:hover{background-color:#2bbbad}.sidenav li>a.btn-floating:hover{background-color:#26a69a}.sidenav li>a>i,.sidenav li>a>[class^="mdi-"],.sidenav li>a li>a>[class*="mdi-"],.sidenav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,0.54)}.sidenav .divider{margin:8px 0 0 0}.sidenav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,0.54);font-size:14px;font-weight:500;line-height:48px}.sidenav .subheader:hover{background-color:transparent}.sidenav .user-view{position:relative;padding:32px 32px 0;margin-bottom:8px}.sidenav .user-view>a{height:auto;padding:0}.sidenav .user-view>a:hover{background-color:transparent}.sidenav .user-view .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.sidenav .user-view .circle,.sidenav .user-view .name,.sidenav .user-view .email{display:block}.sidenav .user-view .circle{height:64px;width:64px}.sidenav .user-view .name,.sidenav .user-view .email{font-size:14px;line-height:24px}.sidenav .user-view .name{margin-top:16px;font-weight:500}.sidenav .user-view .email{padding-bottom:16px;font-weight:400}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.drag-target.right-aligned{right:0}.sidenav.sidenav-fixed{left:0;-webkit-transform:translateX(0);transform:translateX(0);position:fixed}.sidenav.sidenav-fixed.right-aligned{right:0;left:auto}@media only screen and (max-width: 992px){.sidenav.sidenav-fixed{-webkit-transform:translateX(-105%);transform:translateX(-105%)}.sidenav.sidenav-fixed.right-aligned{-webkit-transform:translateX(105%);transform:translateX(105%)}.sidenav>a{padding:0 16px}.sidenav .user-view{padding:16px 16px 0}}.sidenav .collapsible-body>ul:not(.collapsible)>li.active,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}.sidenav .collapsible-body>ul:not(.collapsible)>li.active a,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}.sidenav .collapsible-body{padding:0}.sidenav-overlay{position:fixed;top:0;left:0;right:0;opacity:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;display:none}.preloader-wrapper{display:inline-block;position:relative;width:50px;height:50px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-out{from{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4CAF50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;-webkit-perspective:500px;perspective:500px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0% 50%;transform-origin:0% 50%}.carousel.carousel-slider{top:0;left:0}.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}.carousel.carousel-slider .carousel-item p{font-size:15px}.carousel .carousel-item{visibility:hidden;width:200px;height:200px;position:absolute;top:0;left:0}.carousel .carousel-item>img{width:100%}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:rgba(255,255,255,0.5);-webkit-transition:background-color .3s;transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#fff}.carousel.scrolling .carousel-item .materialboxed,.carousel .carousel-item:not(.active) .materialboxed{pointer-events:none}.tap-target-wrapper{width:800px;height:800px;position:fixed;z-index:1000;visibility:hidden;-webkit-transition:visibility 0s .3s;transition:visibility 0s .3s}.tap-target-wrapper.open{visibility:visible;-webkit-transition:visibility 0s;transition:visibility 0s}.tap-target-wrapper.open .tap-target{-webkit-transform:scale(1);transform:scale(1);opacity:.95;-webkit-transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)}.tap-target-wrapper.open .tap-target-wave::before{-webkit-transform:scale(1);transform:scale(1)}.tap-target-wrapper.open .tap-target-wave::after{visibility:visible;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;-webkit-transition:opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;transition:opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s;transition:opacity .3s,\r transform .3s,\r visibility 0s 1s,\r -webkit-transform .3s}.tap-target{position:absolute;font-size:1rem;border-radius:50%;background-color:#ee6e73;-webkit-box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);box-shadow:0 20px 20px 0 rgba(0,0,0,0.14),0 10px 50px 0 rgba(0,0,0,0.12),0 30px 10px -20px rgba(0,0,0,0.2);width:100%;height:100%;opacity:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);transition:transform 0.3s cubic-bezier(0.42, 0, 0.58, 1),opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1),-webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1)}.tap-target-content{position:relative;display:table-cell}.tap-target-wave{position:absolute;border-radius:50%;z-index:10001}.tap-target-wave::before,.tap-target-wave::after{content:\'\';display:block;position:absolute;width:100%;height:100%;border-radius:50%;background-color:#ffffff}.tap-target-wave::before{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s}.tap-target-wave::after{visibility:hidden;-webkit-transition:opacity .3s,\r visibility 0s,\r -webkit-transform .3s;transition:opacity .3s,\r visibility 0s,\r -webkit-transform .3s;transition:opacity .3s,\r transform .3s,\r visibility 0s;transition:opacity .3s,\r transform .3s,\r visibility 0s,\r -webkit-transform .3s;z-index:-1}.tap-target-origin{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:10002;position:absolute !important}.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover{background:none}@media only screen and (max-width: 600px){.tap-target,.tap-target-wrapper{width:600px;height:600px}}.pulse{overflow:visible;position:relative}.pulse::before{content:\'\';display:block;position:absolute;width:100%;height:100%;top:0;left:0;background-color:inherit;border-radius:inherit;-webkit-transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, transform .3s;transition:opacity .3s, transform .3s, -webkit-transform .3s;-webkit-animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;z-index:-1}@-webkit-keyframes pulse-animation{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}}@keyframes pulse-animation{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)}}.datepicker-modal{max-width:325px;min-width:300px;max-height:none}.datepicker-container.modal-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0}.datepicker-controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:280px;margin:0 auto}.datepicker-controls .selects-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.datepicker-controls .select-wrapper input{border-bottom:none;text-align:center;margin:0}.datepicker-controls .select-wrapper input:focus{border-bottom:none}.datepicker-controls .select-wrapper .caret{display:none}.datepicker-controls .select-year input{width:50px}.datepicker-controls .select-month input{width:70px}.month-prev,.month-next{margin-top:4px;cursor:pointer;background-color:transparent;border:none}.datepicker-date-display{-webkit-box-flex:1;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;background-color:#26a69a;color:#fff;padding:20px 22px;font-weight:500}.datepicker-date-display .year-text{display:block;font-size:1.5rem;line-height:25px;color:rgba(255,255,255,0.7)}.datepicker-date-display .date-text{display:block;font-size:2.8rem;line-height:47px;font-weight:500}.datepicker-calendar-container{-webkit-box-flex:2.5;-webkit-flex:2.5 auto;-ms-flex:2.5 auto;flex:2.5 auto}.datepicker-table{width:280px;font-size:1rem;margin:0 auto}.datepicker-table thead{border-bottom:none}.datepicker-table th{padding:10px 5px;text-align:center}.datepicker-table tr{border:none}.datepicker-table abbr{text-decoration:none;color:#999}.datepicker-table td{border-radius:50%;padding:0}.datepicker-table td.is-today{color:#26a69a}.datepicker-table td.is-selected{background-color:#26a69a;color:#fff}.datepicker-table td.is-outside-current-month,.datepicker-table td.is-disabled{color:rgba(0,0,0,0.3);pointer-events:none}.datepicker-day-button{background-color:transparent;border:none;line-height:38px;display:block;width:100%;border-radius:50%;padding:0 5px;cursor:pointer;color:inherit}.datepicker-day-button:focus{background-color:rgba(43,161,150,0.25)}.datepicker-footer{width:280px;margin:0 auto;padding-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.datepicker-cancel,.datepicker-clear,.datepicker-today,.datepicker-done{color:#26a69a;padding:0 1rem}.datepicker-clear{color:#F44336}@media only screen and (min-width: 601px){.datepicker-modal{max-width:625px}.datepicker-container.modal-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.datepicker-date-display{-webkit-box-flex:0;-webkit-flex:0 1 270px;-ms-flex:0 1 270px;flex:0 1 270px}.datepicker-controls,.datepicker-table,.datepicker-footer{width:320px}.datepicker-day-button{line-height:44px}}.timepicker-modal{max-width:325px;max-height:none}.timepicker-container.modal-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0}.text-primary{color:#fff}.timepicker-digital-display{-webkit-box-flex:1;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;background-color:#26a69a;padding:10px;font-weight:300}.timepicker-text-container{font-size:4rem;font-weight:bold;text-align:center;color:rgba(255,255,255,0.6);font-weight:400;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.timepicker-span-hours,.timepicker-span-minutes,.timepicker-span-am-pm div{cursor:pointer}.timepicker-span-hours{margin-right:3px}.timepicker-span-minutes{margin-left:3px}.timepicker-display-am-pm{font-size:1.3rem;position:absolute;right:1rem;bottom:1rem;font-weight:400}.timepicker-analog-display{-webkit-box-flex:2.5;-webkit-flex:2.5 auto;-ms-flex:2.5 auto;flex:2.5 auto}.timepicker-plate{background-color:#eee;border-radius:50%;width:270px;height:270px;overflow:visible;position:relative;margin:auto;margin-top:25px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.timepicker-canvas,.timepicker-dial{position:absolute;left:0;right:0;top:0;bottom:0}.timepicker-minutes{visibility:hidden}.timepicker-tick{border-radius:50%;color:rgba(0,0,0,0.87);line-height:40px;text-align:center;width:40px;height:40px;position:absolute;cursor:pointer;font-size:15px}.timepicker-tick.active,.timepicker-tick:hover{background-color:rgba(38,166,154,0.25)}.timepicker-dial{-webkit-transition:opacity 350ms, -webkit-transform 350ms;transition:opacity 350ms, -webkit-transform 350ms;transition:transform 350ms, opacity 350ms;transition:transform 350ms, opacity 350ms, -webkit-transform 350ms}.timepicker-dial-out{opacity:0}.timepicker-dial-out.timepicker-hours{-webkit-transform:scale(1.1, 1.1);transform:scale(1.1, 1.1)}.timepicker-dial-out.timepicker-minutes{-webkit-transform:scale(0.8, 0.8);transform:scale(0.8, 0.8)}.timepicker-canvas{-webkit-transition:opacity 175ms;transition:opacity 175ms}.timepicker-canvas line{stroke:#26a69a;stroke-width:4;stroke-linecap:round}.timepicker-canvas-out{opacity:0.25}.timepicker-canvas-bearing{stroke:none;fill:#26a69a}.timepicker-canvas-bg{stroke:none;fill:#26a69a}.timepicker-footer{margin:0 auto;padding:5px 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.timepicker-clear{color:#F44336}.timepicker-close{color:#26a69a}.timepicker-clear,.timepicker-close{padding:0 20px}@media only screen and (min-width: 601px){.timepicker-modal{max-width:600px}.timepicker-container.modal-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.timepicker-text-container{top:32%}.timepicker-display-am-pm{position:relative;right:auto;bottom:auto;text-align:center;margin-top:1.2rem}}\n',
      ""
    ]);
  },
  function(t, e, n) {
    var r, o, i;
    !(function(a) {
      "use strict";
      (o = [n(80)]),
        void 0 ===
          (i =
            "function" ==
            typeof (r = function(t, e) {
              var n = {
                  beforeShow: u,
                  move: u,
                  change: u,
                  show: u,
                  hide: u,
                  color: !1,
                  flat: !1,
                  showInput: !1,
                  allowEmpty: !1,
                  showButtons: !0,
                  clickoutFiresChange: !0,
                  showInitial: !1,
                  showPalette: !1,
                  showPaletteOnly: !1,
                  hideAfterPaletteSelect: !1,
                  togglePaletteOnly: !1,
                  showSelectionPalette: !0,
                  localStorageKey: !1,
                  appendTo: "body",
                  maxSelectionSize: 7,
                  cancelText: "cancel",
                  chooseText: "choose",
                  togglePaletteMoreText: "more",
                  togglePaletteLessText: "less",
                  clearText: "Clear Color Selection",
                  noColorSelectedText: "No Color Selected",
                  preferredFormat: !1,
                  className: "",
                  containerClassName: "",
                  replacerClassName: "",
                  showAlpha: !1,
                  theme: "sp-light",
                  palette: [
                    [
                      "#ffffff",
                      "#000000",
                      "#ff0000",
                      "#ff8000",
                      "#ffff00",
                      "#008000",
                      "#0000ff",
                      "#4b0082",
                      "#9400d3"
                    ]
                  ],
                  selectionPalette: [],
                  disabled: !1,
                  offset: null
                },
                r = [],
                o = !!/msie/i.exec(window.navigator.userAgent),
                i = (function() {
                  function t(t, e) {
                    return !!~("" + t).indexOf(e);
                  }
                  var e = document.createElement("div").style;
                  return (
                    (e.cssText = "background-color:rgba(0,0,0,.5)"),
                    t(e.backgroundColor, "rgba") || t(e.backgroundColor, "hsla")
                  );
                })(),
                a = [
                  "<div class='sp-replacer'>",
                  "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
                  "<div class='sp-dd'>&#9660;</div>",
                  "</div>"
                ].join(""),
                l = (function() {
                  var t = "";
                  if (o)
                    for (var e = 1; e <= 6; e++)
                      t += "<div class='sp-" + e + "'></div>";
                  return [
                    "<div class='sp-container sp-hidden'>",
                    "<div class='sp-palette-container'>",
                    "<div class='sp-palette sp-thumb sp-cf'></div>",
                    "<div class='sp-palette-button-container sp-cf'>",
                    "<button type='button' class='sp-palette-toggle'></button>",
                    "</div>",
                    "</div>",
                    "<div class='sp-picker-container'>",
                    "<div class='sp-top sp-cf'>",
                    "<div class='sp-fill'></div>",
                    "<div class='sp-top-inner'>",
                    "<div class='sp-color'>",
                    "<div class='sp-sat'>",
                    "<div class='sp-val'>",
                    "<div class='sp-dragger'></div>",
                    "</div>",
                    "</div>",
                    "</div>",
                    "<div class='sp-clear sp-clear-display'>",
                    "</div>",
                    "<div class='sp-hue'>",
                    "<div class='sp-slider'></div>",
                    t,
                    "</div>",
                    "</div>",
                    "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
                    "</div>",
                    "<div class='sp-input-container sp-cf'>",
                    "<input class='sp-input' type='text' spellcheck='false'  />",
                    "</div>",
                    "<div class='sp-initial sp-thumb sp-cf'></div>",
                    "<div class='sp-button-container sp-cf'>",
                    "<a class='sp-cancel' href='#'></a>",
                    "<button type='button' class='sp-choose'></button>",
                    "</div>",
                    "</div>",
                    "</div>"
                  ].join("");
                })();
              function s(e, n, r, o) {
                for (var a = [], l = 0; l < e.length; l++) {
                  var s = e[l];
                  if (s) {
                    var c = tinycolor(s),
                      u =
                        c.toHsl().l < 0.5
                          ? "sp-thumb-el sp-thumb-dark"
                          : "sp-thumb-el sp-thumb-light";
                    u += tinycolor.equals(n, s) ? " sp-thumb-active" : "";
                    var f = c.toString(o.preferredFormat || "rgb"),
                      d = i
                        ? "background-color:" + c.toRgbString()
                        : "filter:" + c.toFilter();
                    a.push(
                      '<span title="' +
                        f +
                        '" data-color="' +
                        c.toRgbString() +
                        '" class="' +
                        u +
                        '"><span class="sp-thumb-inner" style="' +
                        d +
                        ';"></span></span>'
                    );
                  } else
                    a.push(
                      t("<div />")
                        .append(
                          t(
                            '<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>'
                          ).attr("title", o.noColorSelectedText)
                        )
                        .html()
                    );
                }
                return "<div class='sp-cf " + r + "'>" + a.join("") + "</div>";
              }
              function c(c, u) {
                var b,
                  g,
                  m = (function(e, r) {
                    var o = t.extend({}, n, e);
                    return (
                      (o.callbacks = {
                        move: d(o.move, r),
                        change: d(o.change, r),
                        show: d(o.show, r),
                        hide: d(o.hide, r),
                        beforeShow: d(o.beforeShow, r)
                      }),
                      o
                    );
                  })(u, c),
                  v = m.flat,
                  y = m.showSelectionPalette,
                  x = m.localStorageKey,
                  w = m.theme,
                  k = m.callbacks,
                  j =
                    ((b = Bt),
                    10,
                    function() {
                      var t = this,
                        e = arguments;
                      g ||
                        (g = setTimeout(function() {
                          (g = null), b.apply(t, e);
                        }, 10));
                    }),
                  O = !1,
                  _ = !1,
                  S = 0,
                  E = 0,
                  C = 0,
                  T = 0,
                  A = 0,
                  z = 0,
                  $ = 0,
                  P = 0,
                  L = 0,
                  R = 0,
                  N = 1,
                  D = [],
                  I = [],
                  F = {},
                  M = m.selectionPalette.slice(0),
                  B = m.maxSelectionSize,
                  q = "sp-dragging",
                  W = null,
                  U = c.ownerDocument,
                  H = (U.body, t(c)),
                  V = !1,
                  G = t(l, U).addClass(w),
                  Z = G.find(".sp-picker-container"),
                  X = G.find(".sp-color"),
                  K = G.find(".sp-dragger"),
                  J = G.find(".sp-hue"),
                  Y = G.find(".sp-slider"),
                  Q = G.find(".sp-alpha-inner"),
                  tt = G.find(".sp-alpha"),
                  et = G.find(".sp-alpha-handle"),
                  nt = G.find(".sp-input"),
                  rt = G.find(".sp-palette"),
                  ot = G.find(".sp-initial"),
                  it = G.find(".sp-cancel"),
                  at = G.find(".sp-clear"),
                  lt = G.find(".sp-choose"),
                  st = G.find(".sp-palette-toggle"),
                  ct = H.is("input"),
                  ut = ct && "color" === H.attr("type") && h(),
                  ft = ct && !v,
                  dt = ft
                    ? t(a)
                        .addClass(w)
                        .addClass(m.className)
                        .addClass(m.replacerClassName)
                    : t([]),
                  pt = ft ? dt : H,
                  ht = dt.find(".sp-preview-inner"),
                  bt = m.color || (ct && H.val()),
                  gt = !1,
                  mt = m.preferredFormat,
                  vt = !m.showButtons || m.clickoutFiresChange,
                  yt = !bt,
                  xt = m.allowEmpty && !ut;
                function wt() {
                  if (
                    (m.showPaletteOnly && (m.showPalette = !0),
                    st.text(
                      m.showPaletteOnly
                        ? m.togglePaletteMoreText
                        : m.togglePaletteLessText
                    ),
                    m.palette)
                  ) {
                    (D = m.palette.slice(0)),
                      (I = t.isArray(D[0]) ? D : [D]),
                      (F = {});
                    for (var e = 0; e < I.length; e++)
                      for (var n = 0; n < I[e].length; n++) {
                        var r = tinycolor(I[e][n]).toRgbString();
                        F[r] = !0;
                      }
                  }
                  G.toggleClass("sp-flat", v),
                    G.toggleClass("sp-input-disabled", !m.showInput),
                    G.toggleClass("sp-alpha-enabled", m.showAlpha),
                    G.toggleClass("sp-clear-enabled", xt),
                    G.toggleClass("sp-buttons-disabled", !m.showButtons),
                    G.toggleClass(
                      "sp-palette-buttons-disabled",
                      !m.togglePaletteOnly
                    ),
                    G.toggleClass("sp-palette-disabled", !m.showPalette),
                    G.toggleClass("sp-palette-only", m.showPaletteOnly),
                    G.toggleClass("sp-initial-disabled", !m.showInitial),
                    G.addClass(m.className).addClass(m.containerClassName),
                    Bt();
                }
                function kt() {
                  if (x && window.localStorage) {
                    try {
                      var e = window.localStorage[x].split(",#");
                      e.length > 1 &&
                        (delete window.localStorage[x],
                        t.each(e, function(t, e) {
                          jt(e);
                        }));
                    } catch (t) {}
                    try {
                      M = window.localStorage[x].split(";");
                    } catch (t) {}
                  }
                }
                function jt(e) {
                  if (y) {
                    var n = tinycolor(e).toRgbString();
                    if (!F[n] && -1 === t.inArray(n, M))
                      for (M.push(n); M.length > B; ) M.shift();
                    if (x && window.localStorage)
                      try {
                        window.localStorage[x] = M.join(";");
                      } catch (t) {}
                  }
                }
                function Ot() {
                  var e = Nt(),
                    n = t.map(I, function(t, n) {
                      return s(t, e, "sp-palette-row sp-palette-row-" + n, m);
                    });
                  kt(),
                    M &&
                      n.push(
                        s(
                          (function() {
                            var t = [];
                            if (m.showPalette)
                              for (var e = 0; e < M.length; e++) {
                                var n = tinycolor(M[e]).toRgbString();
                                F[n] || t.push(M[e]);
                              }
                            return t.reverse().slice(0, m.maxSelectionSize);
                          })(),
                          e,
                          "sp-palette-row sp-palette-row-selection",
                          m
                        )
                      ),
                    rt.html(n.join(""));
                }
                function _t() {
                  if (m.showInitial) {
                    var t = gt,
                      e = Nt();
                    ot.html(s([t, e], e, "sp-palette-row-initial", m));
                  }
                }
                function St() {
                  (E <= 0 || S <= 0 || T <= 0) && Bt(),
                    (_ = !0),
                    G.addClass(q),
                    (W = null),
                    H.trigger("dragstart.spectrum", [Nt()]);
                }
                function Et() {
                  (_ = !1),
                    G.removeClass(q),
                    H.trigger("dragstop.spectrum", [Nt()]);
                }
                function Ct() {
                  var t = nt.val();
                  if ((null !== t && "" !== t) || !xt) {
                    var e = tinycolor(t);
                    e.isValid()
                      ? (Rt(e), Dt(), Mt())
                      : nt.addClass("sp-validation-error");
                  } else Rt(null), Dt(), Mt();
                }
                function Tt() {
                  O ? Pt() : At();
                }
                function At() {
                  var e = t.Event("beforeShow.spectrum");
                  O
                    ? Bt()
                    : (H.trigger(e, [Nt()]),
                      !1 === k.beforeShow(Nt()) ||
                        e.isDefaultPrevented() ||
                        ((function() {
                          for (var t = 0; t < r.length; t++)
                            r[t] && r[t].hide();
                        })(),
                        (O = !0),
                        t(U).on("keydown.spectrum", zt),
                        t(U).on("click.spectrum", $t),
                        t(window).on("resize.spectrum", j),
                        dt.addClass("sp-active"),
                        G.removeClass("sp-hidden"),
                        Bt(),
                        It(),
                        (gt = Nt()),
                        _t(),
                        k.show(gt),
                        H.trigger("show.spectrum", [gt])));
                }
                function zt(t) {
                  27 === t.keyCode && Pt();
                }
                function $t(t) {
                  2 != t.button && (_ || (vt ? Mt(!0) : Lt(), Pt()));
                }
                function Pt() {
                  O &&
                    !v &&
                    ((O = !1),
                    t(U).off("keydown.spectrum", zt),
                    t(U).off("click.spectrum", $t),
                    t(window).off("resize.spectrum", j),
                    dt.removeClass("sp-active"),
                    G.addClass("sp-hidden"),
                    k.hide(Nt()),
                    H.trigger("hide.spectrum", [Nt()]));
                }
                function Lt() {
                  Rt(gt, !0), Mt(!0);
                }
                function Rt(t, e) {
                  var n, r;
                  tinycolor.equals(t, Nt())
                    ? It()
                    : (!t && xt
                        ? (yt = !0)
                        : ((yt = !1),
                          (r = (n = tinycolor(t)).toHsv()),
                          (P = (r.h % 360) / 360),
                          (L = r.s),
                          (R = r.v),
                          (N = r.a)),
                      It(),
                      n &&
                        n.isValid() &&
                        !e &&
                        (mt = m.preferredFormat || n.getFormat()));
                }
                function Nt(t) {
                  return (
                    (t = t || {}),
                    xt && yt
                      ? null
                      : tinycolor.fromRatio(
                          { h: P, s: L, v: R, a: Math.round(1e3 * N) / 1e3 },
                          { format: t.format || mt }
                        )
                  );
                }
                function Dt() {
                  It(), k.move(Nt()), H.trigger("move.spectrum", [Nt()]);
                }
                function It() {
                  nt.removeClass("sp-validation-error"), Ft();
                  var t = tinycolor.fromRatio({ h: P, s: 1, v: 1 });
                  X.css("background-color", t.toHexString());
                  var e = mt;
                  N < 1 &&
                    (0 !== N || "name" !== e) &&
                    (("hex" !== e &&
                      "hex3" !== e &&
                      "hex6" !== e &&
                      "name" !== e) ||
                      (e = "rgb"));
                  var n = Nt({ format: e }),
                    r = "";
                  if (
                    (ht.removeClass("sp-clear-display"),
                    ht.css("background-color", "transparent"),
                    !n && xt)
                  )
                    ht.addClass("sp-clear-display");
                  else {
                    var a = n.toHexString(),
                      l = n.toRgbString();
                    if (
                      (i || 1 === n.alpha
                        ? ht.css("background-color", l)
                        : (ht.css("background-color", "transparent"),
                          ht.css("filter", n.toFilter())),
                      m.showAlpha)
                    ) {
                      var s = n.toRgb();
                      s.a = 0;
                      var c = tinycolor(s).toRgbString(),
                        u = "linear-gradient(left, " + c + ", " + a + ")";
                      o
                        ? Q.css(
                            "filter",
                            tinycolor(c).toFilter({ gradientType: 1 }, a)
                          )
                        : (Q.css("background", "-webkit-" + u),
                          Q.css("background", "-moz-" + u),
                          Q.css("background", "-ms-" + u),
                          Q.css(
                            "background",
                            "linear-gradient(to right, " + c + ", " + a + ")"
                          ));
                    }
                    r = n.toString(e);
                  }
                  m.showInput && nt.val(r), m.showPalette && Ot(), _t();
                }
                function Ft() {
                  var t = L,
                    e = R;
                  if (xt && yt) et.hide(), Y.hide(), K.hide();
                  else {
                    et.show(), Y.show(), K.show();
                    var n = t * S,
                      r = E - e * E;
                    (n = Math.max(-C, Math.min(S - C, n - C))),
                      (r = Math.max(-C, Math.min(E - C, r - C))),
                      K.css({ top: r + "px", left: n + "px" });
                    var o = N * A;
                    et.css({ left: o - z / 2 + "px" });
                    var i = P * T;
                    Y.css({ top: i - $ + "px" });
                  }
                }
                function Mt(t) {
                  var e = Nt(),
                    n = "",
                    r = !tinycolor.equals(e, gt);
                  e && ((n = e.toString(mt)), jt(e)),
                    ct && H.val(n),
                    t && r && (k.change(e), H.trigger("change", [e]));
                }
                function Bt() {
                  var e, n, r, o, i, a, l, s, c, u, f, d;
                  O &&
                    ((S = X.width()),
                    (E = X.height()),
                    (C = K.height()),
                    J.width(),
                    (T = J.height()),
                    ($ = Y.height()),
                    (A = tt.width()),
                    (z = et.width()),
                    v ||
                      (G.css("position", "absolute"),
                      m.offset
                        ? G.offset(m.offset)
                        : G.offset(
                            ((n = pt),
                            (r = (e = G).outerWidth()),
                            (o = e.outerHeight()),
                            (i = n.outerHeight()),
                            (s =
                              (l = (a = e[0].ownerDocument).documentElement)
                                .clientWidth + t(a).scrollLeft()),
                            (c = l.clientHeight + t(a).scrollTop()),
                            (f = (u = n.offset()).left),
                            (d = u.top),
                            (d += i),
                            (f -= Math.min(
                              f,
                              f + r > s && s > r ? Math.abs(f + r - s) : 0
                            )),
                            {
                              top: (d -= Math.min(
                                d,
                                d + o > c && c > o ? Math.abs(o + i - 0) : 0
                              )),
                              bottom: u.bottom,
                              left: f,
                              right: u.right,
                              width: u.width,
                              height: u.height
                            })
                          )),
                    Ft(),
                    m.showPalette && Ot(),
                    H.trigger("reflow.spectrum"));
                }
                function qt() {
                  Pt(),
                    (V = !0),
                    H.attr("disabled", !0),
                    pt.addClass("sp-disabled");
                }
                !(function() {
                  if (
                    (o && G.find("*:not(input)").attr("unselectable", "on"),
                    wt(),
                    ft && H.after(dt).hide(),
                    xt || at.hide(),
                    v)
                  )
                    H.after(G).hide();
                  else {
                    var e =
                      "parent" === m.appendTo ? H.parent() : t(m.appendTo);
                    1 !== e.length && (e = t("body")), e.append(G);
                  }
                  function n(e) {
                    return (
                      e.data && e.data.ignore
                        ? (Rt(
                            t(e.target)
                              .closest(".sp-thumb-el")
                              .data("color")
                          ),
                          Dt())
                        : (Rt(
                            t(e.target)
                              .closest(".sp-thumb-el")
                              .data("color")
                          ),
                          Dt(),
                          m.hideAfterPaletteSelect ? (Mt(!0), Pt()) : Mt()),
                      !1
                    );
                  }
                  kt(),
                    pt.on("click.spectrum touchstart.spectrum", function(e) {
                      V || Tt(),
                        e.stopPropagation(),
                        t(e.target).is("input") || e.preventDefault();
                    }),
                    (H.is(":disabled") || !0 === m.disabled) && qt(),
                    G.click(f),
                    nt.change(Ct),
                    nt.on("paste", function() {
                      setTimeout(Ct, 1);
                    }),
                    nt.keydown(function(t) {
                      13 == t.keyCode && Ct();
                    }),
                    it.text(m.cancelText),
                    it.on("click.spectrum", function(t) {
                      t.stopPropagation(), t.preventDefault(), Lt(), Pt();
                    }),
                    at.attr("title", m.clearText),
                    at.on("click.spectrum", function(t) {
                      t.stopPropagation(),
                        t.preventDefault(),
                        (yt = !0),
                        Dt(),
                        v && Mt(!0);
                    }),
                    lt.text(m.chooseText),
                    lt.on("click.spectrum", function(t) {
                      t.stopPropagation(),
                        t.preventDefault(),
                        o && nt.is(":focus") && nt.trigger("change"),
                        nt.hasClass("sp-validation-error") || (Mt(!0), Pt());
                    }),
                    st.text(
                      m.showPaletteOnly
                        ? m.togglePaletteMoreText
                        : m.togglePaletteLessText
                    ),
                    st.on("click.spectrum", function(t) {
                      t.stopPropagation(),
                        t.preventDefault(),
                        (m.showPaletteOnly = !m.showPaletteOnly),
                        m.showPaletteOnly ||
                          v ||
                          G.css("left", "-=" + (Z.outerWidth(!0) + 5)),
                        wt();
                    }),
                    p(
                      tt,
                      function(t, e, n) {
                        (N = t / A),
                          (yt = !1),
                          n.shiftKey && (N = Math.round(10 * N) / 10),
                          Dt();
                      },
                      St,
                      Et
                    ),
                    p(
                      J,
                      function(t, e) {
                        (P = parseFloat(e / T)),
                          (yt = !1),
                          m.showAlpha || (N = 1),
                          Dt();
                      },
                      St,
                      Et
                    ),
                    p(
                      X,
                      function(t, e, n) {
                        if (n.shiftKey) {
                          if (!W) {
                            var r = L * S,
                              o = E - R * E,
                              i = Math.abs(t - r) > Math.abs(e - o);
                            W = i ? "x" : "y";
                          }
                        } else W = null;
                        var a = !W || "y" === W;
                        (!W || "x" === W) && (L = parseFloat(t / S)),
                          a && (R = parseFloat((E - e) / E)),
                          (yt = !1),
                          m.showAlpha || (N = 1),
                          Dt();
                      },
                      St,
                      Et
                    ),
                    bt
                      ? (Rt(bt),
                        It(),
                        (mt = m.preferredFormat || tinycolor(bt).format),
                        jt(bt))
                      : It(),
                    v && At();
                  var r = o
                    ? "mousedown.spectrum"
                    : "click.spectrum touchstart.spectrum";
                  rt.on(r, ".sp-thumb-el", n),
                    ot.on(r, ".sp-thumb-el:nth-child(1)", { ignore: !0 }, n);
                })();
                var Wt = {
                  show: At,
                  hide: Pt,
                  toggle: Tt,
                  reflow: Bt,
                  option: function(n, r) {
                    return n === e
                      ? t.extend({}, m)
                      : r === e
                      ? m[n]
                      : ((m[n] = r),
                        "preferredFormat" === n && (mt = m.preferredFormat),
                        void wt());
                  },
                  enable: function() {
                    (V = !1),
                      H.attr("disabled", !1),
                      pt.removeClass("sp-disabled");
                  },
                  disable: qt,
                  offset: function(t) {
                    (m.offset = t), Bt();
                  },
                  set: function(t) {
                    Rt(t), Mt();
                  },
                  get: Nt,
                  destroy: function() {
                    H.show(),
                      pt.off("click.spectrum touchstart.spectrum"),
                      G.remove(),
                      dt.remove(),
                      (r[Wt.id] = null);
                  },
                  container: G
                };
                return (Wt.id = r.push(Wt) - 1), Wt;
              }
              function u() {}
              function f(t) {
                t.stopPropagation();
              }
              function d(t, e) {
                var n = Array.prototype.slice,
                  r = n.call(arguments, 2);
                return function() {
                  return t.apply(e, r.concat(n.call(arguments)));
                };
              }
              function p(e, n, r, i) {
                (n = n || function() {}),
                  (r = r || function() {}),
                  (i = i || function() {});
                var a = document,
                  l = !1,
                  s = {},
                  c = 0,
                  u = 0,
                  f = "ontouchstart" in window,
                  d = {};
                function p(t) {
                  t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    (t.returnValue = !1);
                }
                function h(t) {
                  if (l) {
                    if (o && a.documentMode < 9 && !t.button) return b();
                    var r =
                        t.originalEvent &&
                        t.originalEvent.touches &&
                        t.originalEvent.touches[0],
                      i = (r && r.pageX) || t.pageX,
                      d = (r && r.pageY) || t.pageY,
                      h = Math.max(0, Math.min(i - s.left, u)),
                      g = Math.max(0, Math.min(d - s.top, c));
                    f && p(t), n.apply(e, [h, g, t]);
                  }
                }
                function b() {
                  l &&
                    (t(a).off(d),
                    t(a.body).removeClass("sp-dragging"),
                    setTimeout(function() {
                      i.apply(e, arguments);
                    }, 0)),
                    (l = !1);
                }
                (d.selectstart = p),
                  (d.dragstart = p),
                  (d["touchmove mousemove"] = h),
                  (d["touchend mouseup"] = b),
                  t(e).on("touchstart mousedown", function(n) {
                    (n.which ? 3 == n.which : 2 == n.button) ||
                      l ||
                      (!1 !== r.apply(e, arguments) &&
                        ((l = !0),
                        (c = t(e).height()),
                        (u = t(e).width()),
                        (s = t(e).offset()),
                        t(a).on(d),
                        t(a.body).addClass("sp-dragging"),
                        h(n),
                        p(n)));
                  });
              }
              function h() {
                return t.fn.spectrum.inputTypeColorSupport();
              }
              (t.fn.spectrum = function(e, n) {
                if ("string" == typeof e) {
                  var o = this,
                    i = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function() {
                      var n = r[t(this).data("spectrum.id")];
                      if (n) {
                        var a = n[e];
                        if (!a)
                          throw new Error(
                            "Spectrum: no such method: '" + e + "'"
                          );
                        "get" == e
                          ? (o = n.get())
                          : "container" == e
                          ? (o = n.container)
                          : "option" == e
                          ? (o = n.option.apply(n, i))
                          : "destroy" == e
                          ? (n.destroy(), t(this).removeData("spectrum.id"))
                          : a.apply(n, i);
                      }
                    }),
                    o
                  );
                }
                return this.spectrum("destroy").each(function() {
                  var n = c(this, t.extend({}, t(this).data(), e));
                  t(this).data("spectrum.id", n.id);
                });
              }),
                (t.fn.spectrum.load = !0),
                (t.fn.spectrum.loadOpts = {}),
                (t.fn.spectrum.draggable = p),
                (t.fn.spectrum.defaults = n),
                (t.fn.spectrum.inputTypeColorSupport = function e() {
                  if (void 0 === e._cachedResult) {
                    var n = t("<input type='color'/>")[0];
                    e._cachedResult = "color" === n.type && "" !== n.value;
                  }
                  return e._cachedResult;
                }),
                (t.spectrum = {}),
                (t.spectrum.localization = {}),
                (t.spectrum.palettes = {}),
                (t.fn.spectrum.processNativeColorInputs = function() {
                  var e = t("input[type=color]");
                  e.length && !h() && e.spectrum({ preferredFormat: "hex6" });
                }),
                (function() {
                  var t = /^[\s,#]+/,
                    e = /\s+$/,
                    n = 0,
                    r = Math,
                    o = r.round,
                    i = r.min,
                    a = r.max,
                    l = r.random,
                    s = function(l, c) {
                      if (((c = c || {}), (l = l || "") instanceof s)) return l;
                      if (!(this instanceof s)) return new s(l, c);
                      var u = (function(n) {
                        var o,
                          l,
                          s,
                          c = { r: 0, g: 0, b: 0 },
                          u = 1,
                          f = !1,
                          d = !1;
                        return (
                          "string" == typeof n &&
                            (n = (function(n) {
                              n = n
                                .replace(t, "")
                                .replace(e, "")
                                .toLowerCase();
                              var r,
                                o,
                                i = !1;
                              if (S[n]) (n = S[n]), (i = !0);
                              else if ("transparent" == n)
                                return {
                                  r: 0,
                                  g: 0,
                                  b: 0,
                                  a: 0,
                                  format: "name"
                                };
                              return (r = D.rgb.exec(n))
                                ? { r: r[1], g: r[2], b: r[3] }
                                : (r = D.rgba.exec(n))
                                ? { r: r[1], g: r[2], b: r[3], a: r[4] }
                                : (r = D.hsl.exec(n))
                                ? { h: r[1], s: r[2], l: r[3] }
                                : (r = D.hsla.exec(n))
                                ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                                : (r = D.hsv.exec(n))
                                ? { h: r[1], s: r[2], v: r[3] }
                                : (r = D.hsva.exec(n))
                                ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                                : (r = D.hex8.exec(n))
                                ? {
                                    a: ((o = r[1]), z(o) / 255),
                                    r: z(r[2]),
                                    g: z(r[3]),
                                    b: z(r[4]),
                                    format: i ? "name" : "hex8"
                                  }
                                : (r = D.hex6.exec(n))
                                ? {
                                    r: z(r[1]),
                                    g: z(r[2]),
                                    b: z(r[3]),
                                    format: i ? "name" : "hex"
                                  }
                                : !!(r = D.hex3.exec(n)) && {
                                    r: z(r[1] + "" + r[1]),
                                    g: z(r[2] + "" + r[2]),
                                    b: z(r[3] + "" + r[3]),
                                    format: i ? "name" : "hex"
                                  };
                            })(n)),
                          "object" == typeof n &&
                            (n.hasOwnProperty("r") &&
                            n.hasOwnProperty("g") &&
                            n.hasOwnProperty("b")
                              ? ((o = n.r),
                                (l = n.g),
                                (s = n.b),
                                (c = {
                                  r: 255 * T(o, 255),
                                  g: 255 * T(l, 255),
                                  b: 255 * T(s, 255)
                                }),
                                (f = !0),
                                (d =
                                  "%" === String(n.r).substr(-1)
                                    ? "prgb"
                                    : "rgb"))
                              : n.hasOwnProperty("h") &&
                                n.hasOwnProperty("s") &&
                                n.hasOwnProperty("v")
                              ? ((n.s = P(n.s)),
                                (n.v = P(n.v)),
                                (c = (function(t, e, n) {
                                  (t = 6 * T(t, 360)),
                                    (e = T(e, 100)),
                                    (n = T(n, 100));
                                  var o = r.floor(t),
                                    i = t - o,
                                    a = n * (1 - e),
                                    l = n * (1 - i * e),
                                    s = n * (1 - (1 - i) * e),
                                    c = o % 6;
                                  return {
                                    r: 255 * [n, l, a, a, s, n][c],
                                    g: 255 * [s, n, n, l, a, a][c],
                                    b: 255 * [a, a, s, n, n, l][c]
                                  };
                                })(n.h, n.s, n.v)),
                                (f = !0),
                                (d = "hsv"))
                              : n.hasOwnProperty("h") &&
                                n.hasOwnProperty("s") &&
                                n.hasOwnProperty("l") &&
                                ((n.s = P(n.s)),
                                (n.l = P(n.l)),
                                (c = (function(t, e, n) {
                                  var r, o, i;
                                  function a(t, e, n) {
                                    return (
                                      n < 0 && (n += 1),
                                      n > 1 && (n -= 1),
                                      n < 1 / 6
                                        ? t + 6 * (e - t) * n
                                        : n < 0.5
                                        ? e
                                        : n < 2 / 3
                                        ? t + (e - t) * (2 / 3 - n) * 6
                                        : t
                                    );
                                  }
                                  if (
                                    ((t = T(t, 360)),
                                    (e = T(e, 100)),
                                    (n = T(n, 100)),
                                    0 === e)
                                  )
                                    r = o = i = n;
                                  else {
                                    var l =
                                        n < 0.5 ? n * (1 + e) : n + e - n * e,
                                      s = 2 * n - l;
                                    (r = a(s, l, t + 1 / 3)),
                                      (o = a(s, l, t)),
                                      (i = a(s, l, t - 1 / 3));
                                  }
                                  return { r: 255 * r, g: 255 * o, b: 255 * i };
                                })(n.h, n.s, n.l)),
                                (f = !0),
                                (d = "hsl")),
                            n.hasOwnProperty("a") && (u = n.a)),
                          (u = C(u)),
                          {
                            ok: f,
                            format: n.format || d,
                            r: i(255, a(c.r, 0)),
                            g: i(255, a(c.g, 0)),
                            b: i(255, a(c.b, 0)),
                            a: u
                          }
                        );
                      })(l);
                      (this._originalInput = l),
                        (this._r = u.r),
                        (this._g = u.g),
                        (this._b = u.b),
                        (this._a = u.a),
                        (this._roundA = o(1e3 * this._a) / 1e3),
                        (this._format = c.format || u.format),
                        (this._gradientType = c.gradientType),
                        this._r < 1 && (this._r = o(this._r)),
                        this._g < 1 && (this._g = o(this._g)),
                        this._b < 1 && (this._b = o(this._b)),
                        (this._ok = u.ok),
                        (this._tc_id = n++);
                    };
                  function c(t, e, n) {
                    (t = T(t, 255)), (e = T(e, 255)), (n = T(n, 255));
                    var r,
                      o,
                      l = a(t, e, n),
                      s = i(t, e, n),
                      c = (l + s) / 2;
                    if (l == s) r = o = 0;
                    else {
                      var u = l - s;
                      switch (
                        ((o = c > 0.5 ? u / (2 - l - s) : u / (l + s)), l)
                      ) {
                        case t:
                          r = (e - n) / u + (e < n ? 6 : 0);
                          break;
                        case e:
                          r = (n - t) / u + 2;
                          break;
                        case n:
                          r = (t - e) / u + 4;
                      }
                      r /= 6;
                    }
                    return { h: r, s: o, l: c };
                  }
                  function u(t, e, n) {
                    (t = T(t, 255)), (e = T(e, 255)), (n = T(n, 255));
                    var r,
                      o,
                      l = a(t, e, n),
                      s = i(t, e, n),
                      c = l,
                      u = l - s;
                    if (((o = 0 === l ? 0 : u / l), l == s)) r = 0;
                    else {
                      switch (l) {
                        case t:
                          r = (e - n) / u + (e < n ? 6 : 0);
                          break;
                        case e:
                          r = (n - t) / u + 2;
                          break;
                        case n:
                          r = (t - e) / u + 4;
                      }
                      r /= 6;
                    }
                    return { h: r, s: o, v: c };
                  }
                  function f(t, e, n, r) {
                    var i = [
                      $(o(t).toString(16)),
                      $(o(e).toString(16)),
                      $(o(n).toString(16))
                    ];
                    return r &&
                      i[0].charAt(0) == i[0].charAt(1) &&
                      i[1].charAt(0) == i[1].charAt(1) &&
                      i[2].charAt(0) == i[2].charAt(1)
                      ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
                      : i.join("");
                  }
                  function d(t, e, n, r) {
                    var i;
                    return [
                      $(
                        ((i = r), Math.round(255 * parseFloat(i)).toString(16))
                      ),
                      $(o(t).toString(16)),
                      $(o(e).toString(16)),
                      $(o(n).toString(16))
                    ].join("");
                  }
                  function p(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var n = s(t).toHsl();
                    return (n.s -= e / 100), (n.s = A(n.s)), s(n);
                  }
                  function h(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var n = s(t).toHsl();
                    return (n.s += e / 100), (n.s = A(n.s)), s(n);
                  }
                  function b(t) {
                    return s(t).desaturate(100);
                  }
                  function g(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var n = s(t).toHsl();
                    return (n.l += e / 100), (n.l = A(n.l)), s(n);
                  }
                  function m(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var n = s(t).toRgb();
                    return (
                      (n.r = a(0, i(255, n.r - o((-e / 100) * 255)))),
                      (n.g = a(0, i(255, n.g - o((-e / 100) * 255)))),
                      (n.b = a(0, i(255, n.b - o((-e / 100) * 255)))),
                      s(n)
                    );
                  }
                  function v(t, e) {
                    e = 0 === e ? 0 : e || 10;
                    var n = s(t).toHsl();
                    return (n.l -= e / 100), (n.l = A(n.l)), s(n);
                  }
                  function y(t, e) {
                    var n = s(t).toHsl(),
                      r = (o(n.h) + e) % 360;
                    return (n.h = r < 0 ? 360 + r : r), s(n);
                  }
                  function x(t) {
                    var e = s(t).toHsl();
                    return (e.h = (e.h + 180) % 360), s(e);
                  }
                  function w(t) {
                    var e = s(t).toHsl(),
                      n = e.h;
                    return [
                      s(t),
                      s({ h: (n + 120) % 360, s: e.s, l: e.l }),
                      s({ h: (n + 240) % 360, s: e.s, l: e.l })
                    ];
                  }
                  function k(t) {
                    var e = s(t).toHsl(),
                      n = e.h;
                    return [
                      s(t),
                      s({ h: (n + 90) % 360, s: e.s, l: e.l }),
                      s({ h: (n + 180) % 360, s: e.s, l: e.l }),
                      s({ h: (n + 270) % 360, s: e.s, l: e.l })
                    ];
                  }
                  function j(t) {
                    var e = s(t).toHsl(),
                      n = e.h;
                    return [
                      s(t),
                      s({ h: (n + 72) % 360, s: e.s, l: e.l }),
                      s({ h: (n + 216) % 360, s: e.s, l: e.l })
                    ];
                  }
                  function O(t, e, n) {
                    (e = e || 6), (n = n || 30);
                    var r = s(t).toHsl(),
                      o = 360 / n,
                      i = [s(t)];
                    for (r.h = (r.h - ((o * e) >> 1) + 720) % 360; --e; )
                      (r.h = (r.h + o) % 360), i.push(s(r));
                    return i;
                  }
                  function _(t, e) {
                    e = e || 6;
                    for (
                      var n = s(t).toHsv(),
                        r = n.h,
                        o = n.s,
                        i = n.v,
                        a = [],
                        l = 1 / e;
                      e--;

                    )
                      a.push(s({ h: r, s: o, v: i })), (i = (i + l) % 1);
                    return a;
                  }
                  (s.prototype = {
                    isDark: function() {
                      return this.getBrightness() < 128;
                    },
                    isLight: function() {
                      return !this.isDark();
                    },
                    isValid: function() {
                      return this._ok;
                    },
                    getOriginalInput: function() {
                      return this._originalInput;
                    },
                    getFormat: function() {
                      return this._format;
                    },
                    getAlpha: function() {
                      return this._a;
                    },
                    getBrightness: function() {
                      var t = this.toRgb();
                      return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
                    },
                    setAlpha: function(t) {
                      return (
                        (this._a = C(t)),
                        (this._roundA = o(1e3 * this._a) / 1e3),
                        this
                      );
                    },
                    toHsv: function() {
                      var t = u(this._r, this._g, this._b);
                      return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
                    },
                    toHsvString: function() {
                      var t = u(this._r, this._g, this._b),
                        e = o(360 * t.h),
                        n = o(100 * t.s),
                        r = o(100 * t.v);
                      return 1 == this._a
                        ? "hsv(" + e + ", " + n + "%, " + r + "%)"
                        : "hsva(" +
                            e +
                            ", " +
                            n +
                            "%, " +
                            r +
                            "%, " +
                            this._roundA +
                            ")";
                    },
                    toHsl: function() {
                      var t = c(this._r, this._g, this._b);
                      return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
                    },
                    toHslString: function() {
                      var t = c(this._r, this._g, this._b),
                        e = o(360 * t.h),
                        n = o(100 * t.s),
                        r = o(100 * t.l);
                      return 1 == this._a
                        ? "hsl(" + e + ", " + n + "%, " + r + "%)"
                        : "hsla(" +
                            e +
                            ", " +
                            n +
                            "%, " +
                            r +
                            "%, " +
                            this._roundA +
                            ")";
                    },
                    toHex: function(t) {
                      return f(this._r, this._g, this._b, t);
                    },
                    toHexString: function(t) {
                      return "#" + this.toHex(t);
                    },
                    toHex8: function() {
                      return d(this._r, this._g, this._b, this._a);
                    },
                    toHex8String: function() {
                      return "#" + this.toHex8();
                    },
                    toRgb: function() {
                      return {
                        r: o(this._r),
                        g: o(this._g),
                        b: o(this._b),
                        a: this._a
                      };
                    },
                    toRgbString: function() {
                      return 1 == this._a
                        ? "rgb(" +
                            o(this._r) +
                            ", " +
                            o(this._g) +
                            ", " +
                            o(this._b) +
                            ")"
                        : "rgba(" +
                            o(this._r) +
                            ", " +
                            o(this._g) +
                            ", " +
                            o(this._b) +
                            ", " +
                            this._roundA +
                            ")";
                    },
                    toPercentageRgb: function() {
                      return {
                        r: o(100 * T(this._r, 255)) + "%",
                        g: o(100 * T(this._g, 255)) + "%",
                        b: o(100 * T(this._b, 255)) + "%",
                        a: this._a
                      };
                    },
                    toPercentageRgbString: function() {
                      return 1 == this._a
                        ? "rgb(" +
                            o(100 * T(this._r, 255)) +
                            "%, " +
                            o(100 * T(this._g, 255)) +
                            "%, " +
                            o(100 * T(this._b, 255)) +
                            "%)"
                        : "rgba(" +
                            o(100 * T(this._r, 255)) +
                            "%, " +
                            o(100 * T(this._g, 255)) +
                            "%, " +
                            o(100 * T(this._b, 255)) +
                            "%, " +
                            this._roundA +
                            ")";
                    },
                    toName: function() {
                      return 0 === this._a
                        ? "transparent"
                        : !(this._a < 1) &&
                            (E[f(this._r, this._g, this._b, !0)] || !1);
                    },
                    toFilter: function(t) {
                      var e = "#" + d(this._r, this._g, this._b, this._a),
                        n = e,
                        r = this._gradientType ? "GradientType = 1, " : "";
                      t && (n = s(t).toHex8String());
                      return (
                        "progid:DXImageTransform.Microsoft.gradient(" +
                        r +
                        "startColorstr=" +
                        e +
                        ",endColorstr=" +
                        n +
                        ")"
                      );
                    },
                    toString: function(t) {
                      var e = !!t;
                      t = t || this._format;
                      var n = !1,
                        r = this._a < 1 && this._a >= 0;
                      return !e &&
                        r &&
                        ("hex" === t ||
                          "hex6" === t ||
                          "hex3" === t ||
                          "name" === t)
                        ? "name" === t && 0 === this._a
                          ? this.toName()
                          : this.toRgbString()
                        : ("rgb" === t && (n = this.toRgbString()),
                          "prgb" === t && (n = this.toPercentageRgbString()),
                          ("hex" !== t && "hex6" !== t) ||
                            (n = this.toHexString()),
                          "hex3" === t && (n = this.toHexString(!0)),
                          "hex8" === t && (n = this.toHex8String()),
                          "name" === t && (n = this.toName()),
                          "hsl" === t && (n = this.toHslString()),
                          "hsv" === t && (n = this.toHsvString()),
                          n || this.toHexString());
                    },
                    _applyModification: function(t, e) {
                      var n = t.apply(null, [this].concat([].slice.call(e)));
                      return (
                        (this._r = n._r),
                        (this._g = n._g),
                        (this._b = n._b),
                        this.setAlpha(n._a),
                        this
                      );
                    },
                    lighten: function() {
                      return this._applyModification(g, arguments);
                    },
                    brighten: function() {
                      return this._applyModification(m, arguments);
                    },
                    darken: function() {
                      return this._applyModification(v, arguments);
                    },
                    desaturate: function() {
                      return this._applyModification(p, arguments);
                    },
                    saturate: function() {
                      return this._applyModification(h, arguments);
                    },
                    greyscale: function() {
                      return this._applyModification(b, arguments);
                    },
                    spin: function() {
                      return this._applyModification(y, arguments);
                    },
                    _applyCombination: function(t, e) {
                      return t.apply(null, [this].concat([].slice.call(e)));
                    },
                    analogous: function() {
                      return this._applyCombination(O, arguments);
                    },
                    complement: function() {
                      return this._applyCombination(x, arguments);
                    },
                    monochromatic: function() {
                      return this._applyCombination(_, arguments);
                    },
                    splitcomplement: function() {
                      return this._applyCombination(j, arguments);
                    },
                    triad: function() {
                      return this._applyCombination(w, arguments);
                    },
                    tetrad: function() {
                      return this._applyCombination(k, arguments);
                    }
                  }),
                    (s.fromRatio = function(t, e) {
                      if ("object" == typeof t) {
                        var n = {};
                        for (var r in t)
                          t.hasOwnProperty(r) &&
                            (n[r] = "a" === r ? t[r] : P(t[r]));
                        t = n;
                      }
                      return s(t, e);
                    }),
                    (s.equals = function(t, e) {
                      return (
                        !(!t || !e) && s(t).toRgbString() == s(e).toRgbString()
                      );
                    }),
                    (s.random = function() {
                      return s.fromRatio({ r: l(), g: l(), b: l() });
                    }),
                    (s.mix = function(t, e, n) {
                      n = 0 === n ? 0 : n || 50;
                      var r,
                        o = s(t).toRgb(),
                        i = s(e).toRgb(),
                        a = n / 100,
                        l = 2 * a - 1,
                        c = i.a - o.a,
                        u =
                          1 -
                          (r =
                            ((r = l * c == -1 ? l : (l + c) / (1 + l * c)) +
                              1) /
                            2),
                        f = {
                          r: i.r * r + o.r * u,
                          g: i.g * r + o.g * u,
                          b: i.b * r + o.b * u,
                          a: i.a * a + o.a * (1 - a)
                        };
                      return s(f);
                    }),
                    (s.readability = function(t, e) {
                      var n = s(t),
                        r = s(e),
                        o = n.toRgb(),
                        i = r.toRgb(),
                        a = n.getBrightness(),
                        l = r.getBrightness(),
                        c =
                          Math.max(o.r, i.r) -
                          Math.min(o.r, i.r) +
                          Math.max(o.g, i.g) -
                          Math.min(o.g, i.g) +
                          Math.max(o.b, i.b) -
                          Math.min(o.b, i.b);
                      return { brightness: Math.abs(a - l), color: c };
                    }),
                    (s.isReadable = function(t, e) {
                      var n = s.readability(t, e);
                      return n.brightness > 125 && n.color > 500;
                    }),
                    (s.mostReadable = function(t, e) {
                      for (
                        var n = null, r = 0, o = !1, i = 0;
                        i < e.length;
                        i++
                      ) {
                        var a = s.readability(t, e[i]),
                          l = a.brightness > 125 && a.color > 500,
                          c = (a.brightness / 125) * 3 + a.color / 500;
                        ((l && !o) ||
                          (l && o && c > r) ||
                          (!l && !o && c > r)) &&
                          ((o = l), (r = c), (n = s(e[i])));
                      }
                      return n;
                    });
                  var S = (s.names = {
                      aliceblue: "f0f8ff",
                      antiquewhite: "faebd7",
                      aqua: "0ff",
                      aquamarine: "7fffd4",
                      azure: "f0ffff",
                      beige: "f5f5dc",
                      bisque: "ffe4c4",
                      black: "000",
                      blanchedalmond: "ffebcd",
                      blue: "00f",
                      blueviolet: "8a2be2",
                      brown: "a52a2a",
                      burlywood: "deb887",
                      burntsienna: "ea7e5d",
                      cadetblue: "5f9ea0",
                      chartreuse: "7fff00",
                      chocolate: "d2691e",
                      coral: "ff7f50",
                      cornflowerblue: "6495ed",
                      cornsilk: "fff8dc",
                      crimson: "dc143c",
                      cyan: "0ff",
                      darkblue: "00008b",
                      darkcyan: "008b8b",
                      darkgoldenrod: "b8860b",
                      darkgray: "a9a9a9",
                      darkgreen: "006400",
                      darkgrey: "a9a9a9",
                      darkkhaki: "bdb76b",
                      darkmagenta: "8b008b",
                      darkolivegreen: "556b2f",
                      darkorange: "ff8c00",
                      darkorchid: "9932cc",
                      darkred: "8b0000",
                      darksalmon: "e9967a",
                      darkseagreen: "8fbc8f",
                      darkslateblue: "483d8b",
                      darkslategray: "2f4f4f",
                      darkslategrey: "2f4f4f",
                      darkturquoise: "00ced1",
                      darkviolet: "9400d3",
                      deeppink: "ff1493",
                      deepskyblue: "00bfff",
                      dimgray: "696969",
                      dimgrey: "696969",
                      dodgerblue: "1e90ff",
                      firebrick: "b22222",
                      floralwhite: "fffaf0",
                      forestgreen: "228b22",
                      fuchsia: "f0f",
                      gainsboro: "dcdcdc",
                      ghostwhite: "f8f8ff",
                      gold: "ffd700",
                      goldenrod: "daa520",
                      gray: "808080",
                      green: "008000",
                      greenyellow: "adff2f",
                      grey: "808080",
                      honeydew: "f0fff0",
                      hotpink: "ff69b4",
                      indianred: "cd5c5c",
                      indigo: "4b0082",
                      ivory: "fffff0",
                      khaki: "f0e68c",
                      lavender: "e6e6fa",
                      lavenderblush: "fff0f5",
                      lawngreen: "7cfc00",
                      lemonchiffon: "fffacd",
                      lightblue: "add8e6",
                      lightcoral: "f08080",
                      lightcyan: "e0ffff",
                      lightgoldenrodyellow: "fafad2",
                      lightgray: "d3d3d3",
                      lightgreen: "90ee90",
                      lightgrey: "d3d3d3",
                      lightpink: "ffb6c1",
                      lightsalmon: "ffa07a",
                      lightseagreen: "20b2aa",
                      lightskyblue: "87cefa",
                      lightslategray: "789",
                      lightslategrey: "789",
                      lightsteelblue: "b0c4de",
                      lightyellow: "ffffe0",
                      lime: "0f0",
                      limegreen: "32cd32",
                      linen: "faf0e6",
                      magenta: "f0f",
                      maroon: "800000",
                      mediumaquamarine: "66cdaa",
                      mediumblue: "0000cd",
                      mediumorchid: "ba55d3",
                      mediumpurple: "9370db",
                      mediumseagreen: "3cb371",
                      mediumslateblue: "7b68ee",
                      mediumspringgreen: "00fa9a",
                      mediumturquoise: "48d1cc",
                      mediumvioletred: "c71585",
                      midnightblue: "191970",
                      mintcream: "f5fffa",
                      mistyrose: "ffe4e1",
                      moccasin: "ffe4b5",
                      navajowhite: "ffdead",
                      navy: "000080",
                      oldlace: "fdf5e6",
                      olive: "808000",
                      olivedrab: "6b8e23",
                      orange: "ffa500",
                      orangered: "ff4500",
                      orchid: "da70d6",
                      palegoldenrod: "eee8aa",
                      palegreen: "98fb98",
                      paleturquoise: "afeeee",
                      palevioletred: "db7093",
                      papayawhip: "ffefd5",
                      peachpuff: "ffdab9",
                      peru: "cd853f",
                      pink: "ffc0cb",
                      plum: "dda0dd",
                      powderblue: "b0e0e6",
                      purple: "800080",
                      rebeccapurple: "663399",
                      red: "f00",
                      rosybrown: "bc8f8f",
                      royalblue: "4169e1",
                      saddlebrown: "8b4513",
                      salmon: "fa8072",
                      sandybrown: "f4a460",
                      seagreen: "2e8b57",
                      seashell: "fff5ee",
                      sienna: "a0522d",
                      silver: "c0c0c0",
                      skyblue: "87ceeb",
                      slateblue: "6a5acd",
                      slategray: "708090",
                      slategrey: "708090",
                      snow: "fffafa",
                      springgreen: "00ff7f",
                      steelblue: "4682b4",
                      tan: "d2b48c",
                      teal: "008080",
                      thistle: "d8bfd8",
                      tomato: "ff6347",
                      turquoise: "40e0d0",
                      violet: "ee82ee",
                      wheat: "f5deb3",
                      white: "fff",
                      whitesmoke: "f5f5f5",
                      yellow: "ff0",
                      yellowgreen: "9acd32"
                    }),
                    E = (s.hexNames = (function(t) {
                      var e = {};
                      for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
                      return e;
                    })(S));
                  function C(t) {
                    return (
                      (t = parseFloat(t)),
                      (isNaN(t) || t < 0 || t > 1) && (t = 1),
                      t
                    );
                  }
                  function T(t, e) {
                    (function(t) {
                      return (
                        "string" == typeof t &&
                        -1 != t.indexOf(".") &&
                        1 === parseFloat(t)
                      );
                    })(t) && (t = "100%");
                    var n = (function(t) {
                      return "string" == typeof t && -1 != t.indexOf("%");
                    })(t);
                    return (
                      (t = i(e, a(0, parseFloat(t)))),
                      n && (t = parseInt(t * e, 10) / 100),
                      r.abs(t - e) < 1e-6 ? 1 : (t % e) / parseFloat(e)
                    );
                  }
                  function A(t) {
                    return i(1, a(0, t));
                  }
                  function z(t) {
                    return parseInt(t, 16);
                  }
                  function $(t) {
                    return 1 == t.length ? "0" + t : "" + t;
                  }
                  function P(t) {
                    return t <= 1 && (t = 100 * t + "%"), t;
                  }
                  var L,
                    R,
                    N,
                    D =
                      ((R =
                        "[\\s|\\(]+(" +
                        (L = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
                        ")[,|\\s]+(" +
                        L +
                        ")[,|\\s]+(" +
                        L +
                        ")\\s*\\)?"),
                      (N =
                        "[\\s|\\(]+(" +
                        L +
                        ")[,|\\s]+(" +
                        L +
                        ")[,|\\s]+(" +
                        L +
                        ")[,|\\s]+(" +
                        L +
                        ")\\s*\\)?"),
                      {
                        rgb: new RegExp("rgb" + R),
                        rgba: new RegExp("rgba" + N),
                        hsl: new RegExp("hsl" + R),
                        hsla: new RegExp("hsla" + N),
                        hsv: new RegExp("hsv" + R),
                        hsva: new RegExp("hsva" + N),
                        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                      });
                  window.tinycolor = s;
                })(),
                t(function() {
                  t.fn.spectrum.load &&
                    t.fn.spectrum.processNativeColorInputs();
                });
            })
              ? r.apply(e, o)
              : r) || (t.exports = i);
    })();
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0),
      o = (n(172), n(28));
    function i(t) {
      Object(r.g)(
        t,
        "svelte-lirb9y",
        ".switch.svelte-lirb9y label .lever.svelte-lirb9y.svelte-lirb9y{width:40px !important;height:22px !important;margin:0;background-color:#c9cccb}.switch.svelte-lirb9y label .lever.svelte-lirb9y.svelte-lirb9y::before,.switch.svelte-lirb9y label .lever.svelte-lirb9y.svelte-lirb9y::after{left:1px;top:1px;box-shadow:none !important;transform:none !important;background-color:#fff}.switch.svelte-lirb9y label input[type=checkbox].svelte-lirb9y:checked+.lever.svelte-lirb9y{background-color:#00b978}.switch.svelte-lirb9y label input[type=checkbox].svelte-lirb9y:checked+.lever.svelte-lirb9y::before,.switch.svelte-lirb9y label input[type=checkbox].svelte-lirb9y:checked+.lever.svelte-lirb9y::after{left:19px}"
      );
    }
    function a(t) {
      let e, n, o, i, a, l, s, c, u;
      const f = t[2].default,
        d = Object(r.r)(f, t, t[1], null);
      return {
        c() {
          (e = Object(r.v)("div")),
            d && d.c(),
            (n = Object(r.V)()),
            (o = Object(r.v)("label")),
            (i = Object(r.v)("input")),
            (a = Object(r.V)()),
            (l = Object(r.v)("span")),
            Object(r.i)(i, "type", "checkbox"),
            Object(r.i)(i, "class", "svelte-lirb9y"),
            Object(r.i)(l, "class", "lever svelte-lirb9y"),
            Object(r.i)(o, "class", "secondary-content"),
            Object(r.i)(e, "class", "switch collection-item svelte-lirb9y");
        },
        m(f, p) {
          Object(r.E)(f, e, p),
            d && d.m(e, null),
            Object(r.f)(e, n),
            Object(r.f)(e, o),
            Object(r.f)(o, i),
            (i.checked = t[0]),
            Object(r.f)(o, a),
            Object(r.f)(o, l),
            (s = !0),
            c || ((u = Object(r.G)(i, "change", t[3])), (c = !0));
        },
        p(t, [e]) {
          d &&
            d.p &&
            (!s || 2 & e) &&
            Object(r.gb)(
              d,
              f,
              t,
              t[1],
              s ? Object(r.y)(f, t[1], e, null) : Object(r.x)(t[1]),
              null
            ),
            1 & e && (i.checked = t[0]);
        },
        i(t) {
          s || (Object(r.db)(d, t), (s = !0));
        },
        o(t) {
          Object(r.eb)(d, t), (s = !1);
        },
        d(t) {
          t && Object(r.u)(e), d && d.d(t), (c = !1), u();
        }
      };
    }
    function l(t, e, n) {
      let { $$slots: r = {}, $$scope: o } = e,
        { value: i = "rgba(255, 255, 255, 0)" } = e;
      return (
        (t.$$set = t => {
          "value" in t && n(0, (i = t.value)),
            "$$scope" in t && n(1, (o = t.$$scope));
        }),
        [
          i,
          o,
          r,
          function() {
            (i = this.checked), n(0, i);
          }
        ]
      );
    }
    var s = class extends r.b {
        constructor(t) {
          super(), Object(r.D)(this, t, l, a, r.N, { value: 0 }, i);
        }
      },
      c = n(80),
      u = n.n(c),
      f = (n(174), n(13));
    function d(t) {
      Object(r.g)(
        t,
        "svelte-feh2bb",
        ".switch .sp-replacer{display:flex;border-radius:4px;background-color:#fff;border-color:#ddd;padding:6px}.switch .sp-replacer:hover,.switch .sp-replacer.sp-active{border-color:#ddd}.switch .sp-replacer .sp-preview{float:none;box-sizing:border-box;margin:0;margin-right:6px;border:none}.switch .sp-replacer .sp-dd{float:none;display:flex;align-items:center;justify-content:center;height:20px;border-left:1px solid #ddd;padding-left:8px;padding-right:2px;color:#b4b5b5}.sp-container.sp-light{background-color:#fff;border-radius:4px;border-color:#ddd}.sp-container.sp-light .sp-choose{color:#666;background:transparent}"
      );
    }
    function p(t) {
      let e, n, o, i, a, l, s, c, u;
      const f = t[3].default,
        d = Object(r.r)(f, t, t[2], null);
      return {
        c() {
          (e = Object(r.v)("link")),
            (n = Object(r.V)()),
            (o = Object(r.v)("div")),
            d && d.c(),
            (i = Object(r.V)()),
            (a = Object(r.v)("label")),
            (l = Object(r.v)("input")),
            Object(r.i)(e, "href", "/css/spectrum.css"),
            Object(r.i)(e, "rel", "stylesheet"),
            Object(r.i)(a, "class", "secondary-content"),
            Object(r.i)(o, "class", "switch collection-item");
        },
        m(f, p) {
          Object(r.f)(document.head, e),
            Object(r.E)(f, n, p),
            Object(r.E)(f, o, p),
            d && d.m(o, null),
            Object(r.f)(o, i),
            Object(r.f)(o, a),
            Object(r.f)(a, l),
            t[4](l),
            Object(r.T)(l, t[0]),
            (s = !0),
            c || ((u = Object(r.G)(l, "input", t[5])), (c = !0));
        },
        p(t, [e]) {
          d &&
            d.p &&
            (!s || 4 & e) &&
            Object(r.gb)(
              d,
              f,
              t,
              t[2],
              s ? Object(r.y)(f, t[2], e, null) : Object(r.x)(t[2]),
              null
            ),
            1 & e && l.value !== t[0] && Object(r.T)(l, t[0]);
        },
        i(t) {
          s || (Object(r.db)(d, t), (s = !0));
        },
        o(t) {
          Object(r.eb)(d, t), (s = !1);
        },
        d(i) {
          Object(r.u)(e),
            i && Object(r.u)(n),
            i && Object(r.u)(o),
            d && d.d(i),
            t[4](null),
            (c = !1),
            u();
        }
      };
    }
    function h(t, e, n) {
      let i,
        { $$slots: a = {}, $$scope: l } = e,
        { value: s = "rgba(255, 255, 255, 0)" } = e;
      return (
        Object(f.c)(() => {
          const t = o.tStore.subscribe(t => {
            t !== o.PLACEHOLDER_T &&
              (u.a.extend(u.a.fn.spectrum.defaults, {
                cancelText: t("spectrum.cancelText"),
                chooseText: t("spectrum.chooseText"),
                clearText: t("spectrum.clearText"),
                togglePaletteMoreText: t("spectrum.togglePaletteMoreText"),
                togglePaletteLessText: t("spectrum.togglePaletteLessText"),
                noColorSelectedText: t("spectrum.noColorSelectedText")
              }),
              i &&
                u()(i).spectrum({
                  color: s,
                  showAlpha: !0,
                  preferredFormat: "hex",
                  showInput: !0,
                  change: t => {
                    n(0, (s = t.toRgbString()));
                  }
                }));
          });
          return () => {
            t(), i && u()(i).spectrum("destroy");
          };
        }),
        (t.$$set = t => {
          "value" in t && n(0, (s = t.value)),
            "$$scope" in t && n(2, (l = t.$$scope));
        }),
        [
          s,
          i,
          l,
          a,
          function(t) {
            r.l[t ? "unshift" : "push"](() => {
              n(1, (i = t));
            });
          },
          function() {
            (s = this.value), n(0, s);
          }
        ]
      );
    }
    var b = class extends r.b {
        constructor(t) {
          super(), Object(r.D)(this, t, h, p, r.N, { value: 0 }, d);
        }
      },
      g = n(10);
    function m(t) {
      let e, n, o, i;
      const a = t[4].default,
        l = Object(r.r)(a, t, t[3], null);
      return {
        c() {
          (e = Object(r.v)("a")),
            l && l.c(),
            Object(r.i)(e, "href", t[0]),
            Object(r.i)(e, "class", "collection-item"),
            Object(r.i)(e, "target", "_blank");
        },
        m(a, s) {
          Object(r.E)(a, e, s),
            l && l.m(e, null),
            (n = !0),
            o || ((i = Object(r.G)(e, "click", t[1])), (o = !0));
        },
        p(t, [o]) {
          l &&
            l.p &&
            (!n || 8 & o) &&
            Object(r.gb)(
              l,
              a,
              t,
              t[3],
              n ? Object(r.y)(a, t[3], o, null) : Object(r.x)(t[3]),
              null
            ),
            (!n || 1 & o) && Object(r.i)(e, "href", t[0]);
        },
        i(t) {
          n || (Object(r.db)(l, t), (n = !0));
        },
        o(t) {
          Object(r.eb)(l, t), (n = !1);
        },
        d(t) {
          t && Object(r.u)(e), l && l.d(t), (o = !1), i();
        }
      };
    }
    function v(t, e, n) {
      let { $$slots: r = {}, $$scope: o } = e;
      const i = Object(f.b)();
      let { href: a } = e,
        { name: l } = e;
      return (
        (t.$$set = t => {
          "href" in t && n(0, (a = t.href)),
            "name" in t && n(2, (l = t.name)),
            "$$scope" in t && n(3, (o = t.$$scope));
        }),
        [
          a,
          t => {
            g.isExtEnv && (t.preventDefault(), browser.tabs.create({ url: a })),
              l && i("open-link", l);
          },
          l,
          o,
          r
        ]
      );
    }
    var y = class extends r.b {
      constructor(t) {
        super(), Object(r.D)(this, t, v, m, r.N, { href: 0, name: 2 });
      }
    };
    function x(t) {
      Object(r.g)(
        t,
        "svelte-6eqwqn",
        ".cyxy-select.svelte-6eqwqn{display:block;position:relative}.cyxy-select.svelte-6eqwqn::after{content:\"\";position:absolute;right:6px;top:0;width:8px;height:100%;background:no-repeat center/contain;background-image:url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 9 17' class='design-iconfont'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.41434 0.909912L0.189453 6.45509H8.63924L4.41434 0.909912Z' fill='%23B4B5B5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.41434 17.0002L0.189453 11.4551H8.63924L4.41434 17.0002Z' fill='%23B4B5B5'/%3E%3C/svg%3E%0A\");pointer-events:none}.cyxy-select.svelte-6eqwqn::before{content:\"\";position:absolute;right:20px;top:5px;display:block;width:1px;height:22px;background:#ddd;pointer-events:none}select.svelte-6eqwqn{display:block;margin:0;padding:6px 30px 6px 10px;border-radius:4px;border:#ddd 1px solid;background:#fff;color:#666;outline:none;height:32px;font-size:14px;appearance:none;-webkit-appearance:none;font-family:\"PingFang SC\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;cursor:pointer}"
      );
    }
    function w(t, e, n) {
      const r = t.slice();
      return (r[5] = e[n]), r;
    }
    function k(t) {
      let e,
        n,
        o,
        i = t[5].name + "";
      return {
        c() {
          (e = Object(r.v)("option")),
            (n = Object(r.Z)(i)),
            (e.__value = o = t[5].value),
            (e.value = e.__value);
        },
        m(t, o) {
          Object(r.E)(t, e, o), Object(r.f)(e, n);
        },
        p(t, a) {
          2 & a && i !== (i = t[5].name + "") && Object(r.S)(n, i),
            2 & a &&
              o !== (o = t[5].value) &&
              ((e.__value = o), (e.value = e.__value));
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function j(t) {
      let e, n, o, i, a, l, s, c, u;
      const f = t[3].default,
        d = Object(r.r)(f, t, t[2], null);
      let p = t[1],
        h = [];
      for (let e = 0; e < p.length; e += 1) h[e] = k(w(t, p, e));
      return {
        c() {
          (e = Object(r.v)("div")),
            d && d.c(),
            (n = Object(r.V)()),
            (o = Object(r.v)("div")),
            (i = Object(r.v)("div")),
            (a = Object(r.v)("label")),
            (l = Object(r.v)("select"));
          for (let t = 0; t < h.length; t += 1) h[t].c();
          Object(r.i)(l, "class", "svelte-6eqwqn"),
            void 0 === t[0] && Object(r.d)(() => t[4].call(l)),
            Object(r.i)(i, "class", "cyxy-select svelte-6eqwqn"),
            Object(r.i)(o, "class", "secondary-content"),
            Object(r.i)(e, "class", "select-item collection-item");
        },
        m(f, p) {
          Object(r.E)(f, e, p),
            d && d.m(e, null),
            Object(r.f)(e, n),
            Object(r.f)(e, o),
            Object(r.f)(o, i),
            Object(r.f)(i, a),
            Object(r.f)(a, l);
          for (let t = 0; t < h.length; t += 1) h[t].m(l, null);
          Object(r.O)(l, t[0]),
            (s = !0),
            c || ((u = Object(r.G)(l, "change", t[4])), (c = !0));
        },
        p(t, [e]) {
          if (
            (d &&
              d.p &&
              (!s || 4 & e) &&
              Object(r.gb)(
                d,
                f,
                t,
                t[2],
                s ? Object(r.y)(f, t[2], e, null) : Object(r.x)(t[2]),
                null
              ),
            2 & e)
          ) {
            let n;
            for (p = t[1], n = 0; n < p.length; n += 1) {
              const r = w(t, p, n);
              h[n] ? h[n].p(r, e) : ((h[n] = k(r)), h[n].c(), h[n].m(l, null));
            }
            for (; n < h.length; n += 1) h[n].d(1);
            h.length = p.length;
          }
          3 & e && Object(r.O)(l, t[0]);
        },
        i(t) {
          s || (Object(r.db)(d, t), (s = !0));
        },
        o(t) {
          Object(r.eb)(d, t), (s = !1);
        },
        d(t) {
          t && Object(r.u)(e), d && d.d(t), Object(r.t)(h, t), (c = !1), u();
        }
      };
    }
    function O(t, e, n) {
      let { $$slots: o = {}, $$scope: i } = e,
        { value: a } = e,
        { options: l = [] } = e;
      return (
        (t.$$set = t => {
          "value" in t && n(0, (a = t.value)),
            "options" in t && n(1, (l = t.options)),
            "$$scope" in t && n(2, (i = t.$$scope));
        }),
        [
          a,
          l,
          i,
          o,
          function() {
            (a = Object(r.P)(this)), n(0, a), n(1, l);
          }
        ]
      );
    }
    var _ = class extends r.b {
      constructor(t) {
        super(), Object(r.D)(this, t, O, j, r.N, { value: 0, options: 1 }, x);
      }
    };
    function S(t) {
      Object(r.g)(
        t,
        "svelte-1czky29",
        ".tts-range.svelte-1czky29{width:140px}input[type=range].svelte-1czky29{-webkit-appearance:none;display:block;width:130px;margin:6px;height:2px;border:none;background:#ddd;background-image:linear-gradient(#00b977, #00b977);background-size:0% 100%;background-repeat:no-repeat}input[type=range].svelte-1czky29::-webkit-slider-thumb{-webkit-appearance:none;margin:0;padding:0;position:relative;top:50%;transform:translateY(-50%);width:6px;height:6px;background:#00b977;border-radius:50%;cursor:ew-resize}input[type=range].svelte-1czky29::-moz-range-thumb{-webkit-appearance:none;margin:0;padding:0;width:6px;height:6px;background:#00b977;border-radius:50%;cursor:ew-resize}input[type=range].svelte-1czky29::-ms-thumb{-webkit-appearance:none;margin:0;padding:0;position:relative;top:50%;transform:translateY(-50%);width:6px;height:6px;background:#00b977;border-radius:50%;cursor:ew-resize}input[type=range].svelte-1czky29::-webkit-slider-runnable-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range].svelte-1czky29::-moz-range-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range].svelte-1czky29::-ms-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.ts-range-text.svelte-1czky29{display:flex;justify-content:space-between;font-size:12px;color:#666;user-select:none;line-height:1.5rem}"
      );
    }
    function E(t) {
      let e,
        n,
        o,
        i,
        a,
        l,
        s,
        c,
        u,
        f,
        d,
        p,
        h,
        b,
        g,
        m,
        v,
        y,
        x,
        w = t[4]("options.ttsSpeed.slow") + "",
        k = t[4]("options.ttsSpeed.standard") + "",
        j = t[4]("options.ttsSpeed.fast") + "";
      const O = t[6].default,
        _ = Object(r.r)(O, t, t[5], null);
      return {
        c() {
          (e = Object(r.v)("div")),
            _ && _.c(),
            (n = Object(r.V)()),
            (o = Object(r.v)("div")),
            (i = Object(r.v)("div")),
            (a = Object(r.v)("input")),
            (s = Object(r.V)()),
            (c = Object(r.v)("div")),
            (u = Object(r.v)("span")),
            (f = Object(r.Z)(w)),
            (d = Object(r.V)()),
            (p = Object(r.v)("span")),
            (h = Object(r.Z)(k)),
            (b = Object(r.V)()),
            (g = Object(r.v)("span")),
            (m = Object(r.Z)(j)),
            Object(r.i)(
              a,
              "style",
              (l = `background-size: ${(100 * (t[0] - t[1])) /
                (t[2] - t[1])}% 100%`)
            ),
            Object(r.i)(a, "type", "range"),
            Object(r.i)(a, "step", t[3]),
            Object(r.i)(a, "min", t[1]),
            Object(r.i)(a, "max", t[2]),
            Object(r.i)(a, "class", "svelte-1czky29"),
            Object(r.i)(c, "class", "ts-range-text svelte-1czky29"),
            Object(r.i)(i, "class", "tts-range svelte-1czky29"),
            Object(r.i)(o, "class", "secondary-content"),
            Object(r.i)(e, "class", "select-item collection-item");
        },
        m(l, w) {
          Object(r.E)(l, e, w),
            _ && _.m(e, null),
            Object(r.f)(e, n),
            Object(r.f)(e, o),
            Object(r.f)(o, i),
            Object(r.f)(i, a),
            Object(r.T)(a, t[0]),
            Object(r.f)(i, s),
            Object(r.f)(i, c),
            Object(r.f)(c, u),
            Object(r.f)(u, f),
            Object(r.f)(c, d),
            Object(r.f)(c, p),
            Object(r.f)(p, h),
            Object(r.f)(c, b),
            Object(r.f)(c, g),
            Object(r.f)(g, m),
            (v = !0),
            y ||
              ((x = [
                Object(r.G)(a, "change", t[7]),
                Object(r.G)(a, "input", t[7])
              ]),
              (y = !0));
        },
        p(t, [e]) {
          _ &&
            _.p &&
            (!v || 32 & e) &&
            Object(r.gb)(
              _,
              O,
              t,
              t[5],
              v ? Object(r.y)(O, t[5], e, null) : Object(r.x)(t[5]),
              null
            ),
            (!v ||
              (7 & e &&
                l !==
                  (l = `background-size: ${(100 * (t[0] - t[1])) /
                    (t[2] - t[1])}% 100%`))) &&
              Object(r.i)(a, "style", l),
            (!v || 8 & e) && Object(r.i)(a, "step", t[3]),
            (!v || 2 & e) && Object(r.i)(a, "min", t[1]),
            (!v || 4 & e) && Object(r.i)(a, "max", t[2]),
            1 & e && Object(r.T)(a, t[0]),
            (!v || 16 & e) &&
              w !== (w = t[4]("options.ttsSpeed.slow") + "") &&
              Object(r.S)(f, w),
            (!v || 16 & e) &&
              k !== (k = t[4]("options.ttsSpeed.standard") + "") &&
              Object(r.S)(h, k),
            (!v || 16 & e) &&
              j !== (j = t[4]("options.ttsSpeed.fast") + "") &&
              Object(r.S)(m, j);
        },
        i(t) {
          v || (Object(r.db)(_, t), (v = !0));
        },
        o(t) {
          Object(r.eb)(_, t), (v = !1);
        },
        d(t) {
          t && Object(r.u)(e), _ && _.d(t), (y = !1), Object(r.M)(x);
        }
      };
    }
    function C(t, e, n) {
      let i;
      Object(r.o)(t, o.tStore, t => n(4, (i = t)));
      let { $$slots: a = {}, $$scope: l } = e,
        { value: s = 0 } = e,
        { min: c = 0 } = e,
        { max: u = 100 } = e,
        { step: f = 1 } = e;
      return (
        (t.$$set = t => {
          "value" in t && n(0, (s = t.value)),
            "min" in t && n(1, (c = t.min)),
            "max" in t && n(2, (u = t.max)),
            "step" in t && n(3, (f = t.step)),
            "$$scope" in t && n(5, (l = t.$$scope));
        }),
        [
          s,
          c,
          u,
          f,
          i,
          l,
          a,
          function() {
            (s = Object(r.bb)(this.value)), n(0, s);
          }
        ]
      );
    }
    var T = class extends r.b {
      constructor(t) {
        super(),
          Object(r.D)(
            this,
            t,
            C,
            E,
            r.N,
            { value: 0, min: 1, max: 2, step: 3 },
            S
          );
      }
    };
    function A(t) {
      Object(r.g)(
        t,
        "svelte-edix8z",
        '@charset "UTF-8";.container{font-family:"PingFang SC", "Helvetica Neue", "Helvetica", "Arial", "Microsoft YaHei", "????????????", "STXihei", "????????????", " sans-serif"}.logo-version{display:flex;flex-direction:column;align-items:center;padding:25px 0 30px;color:#333;font-size:16px;font-weight:400;text-align:center}.logo-version>img{margin-bottom:20px}.collection{font-size:1.14rem;margin-bottom:2rem;border:none;border-radius:10px;box-shadow:0 0 20px 0 rgba(0, 0, 0, 0.1)}.collection .collection-item{position:relative;display:flex;padding:19px 20px 18px;justify-content:space-between;align-items:center;border-bottom:1px solid transparent;color:#333}.collection .collection-item::after{content:"";position:absolute;bottom:0;left:20px;right:20px;margin:auto;height:1px;background:#f5f5f5}.collection .collection-item:last-child::after{display:none}.collection .collection-item .secondary-content{color:#00b977;float:none}.collection a.collection-item{color:#00b977}.collection a.collection-item:not(.active):hover{background-color:transparent}'
      );
    }
    function z(t) {
      let e, n, o;
      return {
        c() {
          (e = Object(r.v)("span")),
            (n = Object(r.Z)("v")),
            (o = Object(r.Z)(t[0]));
        },
        m(t, i) {
          Object(r.E)(t, e, i), Object(r.f)(e, n), Object(r.f)(e, o);
        },
        p(t, e) {
          1 & e[0] && Object(r.S)(o, t[0]);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function $(t) {
      let e,
        n = t[12]("options.isAutoSWT") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.isAutoSWT") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function P(t) {
      let e,
        n = t[12]("options.targetBkgColor") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.targetBkgColor") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function L(t) {
      let e,
        n = t[12]("options.isDirectTranslate") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.isDirectTranslate") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function R(t) {
      let e,
        n = t[12]("options.isAutoTranslate") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.isAutoTranslate") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function N(t) {
      let e, n, o;
      function i(e) {
        t[29](e);
      }
      let a = {
        options: [{ name: t[12]("none"), value: "" }, ...t[1].map(t[28])],
        $$slots: { default: [D] },
        $$scope: { ctx: t }
      };
      return (
        void 0 !== t[17] && (a.value = t[17]),
        (e = new _({ props: a })),
        r.l.push(() => Object(r.k)(e, "value", i)),
        {
          c() {
            Object(r.q)(e.$$.fragment);
          },
          m(t, n) {
            Object(r.H)(e, t, n), (o = !0);
          },
          p(t, o) {
            const i = {};
            4098 & o[0] &&
              (i.options = [
                { name: t[12]("none"), value: "" },
                ...t[1].map(t[28])
              ]),
              (4096 & o[0]) | (512 & o[1]) &&
                (i.$$scope = { dirty: o, ctx: t }),
              !n &&
                131072 & o[0] &&
                ((n = !0), (i.value = t[17]), Object(r.c)(() => (n = !1))),
              e.$set(i);
          },
          i(t) {
            o || (Object(r.db)(e.$$.fragment, t), (o = !0));
          },
          o(t) {
            Object(r.eb)(e.$$.fragment, t), (o = !1);
          },
          d(t) {
            Object(r.s)(e, t);
          }
        }
      );
    }
    function D(t) {
      let e,
        n = t[12]("options.userGlossary") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.userGlossary") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function I(t) {
      let e,
        n = t[12]("options.shortcuts") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.shortcuts") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function F(t) {
      let e,
        n = t[12]("options.transDirect") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.transDirect") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function M(t) {
      let e,
        n = t[12]("options.subType") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.subType") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function B(t) {
      let e,
        n = t[12]("options.audioApi") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.audioApi") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function q(t) {
      let e,
        n = t[12]("options.audioSpeed") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.audioSpeed") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function W(t) {
      let e,
        n = t[12]("options.textDocTrs") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.textDocTrs") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function U(t) {
      let e,
        n = t[12]("options.myGlossaries") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.myGlossaries") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function H(t) {
      let e,
        n = t[12]("options.userCenter") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.userCenter") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function V(t) {
      let e,
        n = t[12]("options.lingocloudApp") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.lingocloudApp") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function G(t) {
      let e,
        n = t[12]("options.feedback") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.feedback") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function Z(t) {
      let e,
        n = t[12]("options.privacyPolicies") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.privacyPolicies") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function X(t) {
      let e,
        n = t[12]("options.isEnableGa") + "";
      return {
        c() {
          e = Object(r.Z)(n);
        },
        m(t, n) {
          Object(r.E)(t, e, n);
        },
        p(t, o) {
          4096 & o[0] &&
            n !== (n = t[12]("options.isEnableGa") + "") &&
            Object(r.S)(e, n);
        },
        d(t) {
          t && Object(r.u)(e);
        }
      };
    }
    function K(t) {
      let e,
        n,
        o,
        i,
        a,
        l,
        c,
        u,
        f,
        d,
        p,
        h,
        m,
        v,
        x,
        w,
        k,
        j,
        O,
        S,
        E,
        C,
        A,
        D,
        K,
        J,
        Y,
        Q,
        tt,
        et,
        nt,
        rt,
        ot,
        it,
        at,
        lt,
        st,
        ct,
        ut,
        ft,
        dt,
        pt,
        ht,
        bt,
        gt,
        mt,
        vt = t[0] && z(t);
      function yt(e) {
        t[24](e);
      }
      let xt = { $$slots: { default: [$] }, $$scope: { ctx: t } };
      function wt(e) {
        t[25](e);
      }
      void 0 !== t[13] && (xt.value = t[13]),
        (u = new s({ props: xt })),
        r.l.push(() => Object(r.k)(u, "value", yt));
      let kt = { $$slots: { default: [P] }, $$scope: { ctx: t } };
      function jt(e) {
        t[26](e);
      }
      void 0 !== t[14] && (kt.value = t[14]),
        (p = new b({ props: kt })),
        r.l.push(() => Object(r.k)(p, "value", wt));
      let Ot = { $$slots: { default: [L] }, $$scope: { ctx: t } };
      function _t(e) {
        t[27](e);
      }
      void 0 !== t[15] && (Ot.value = t[15]),
        (v = new s({ props: Ot })),
        r.l.push(() => Object(r.k)(v, "value", jt));
      let St = { $$slots: { default: [R] }, $$scope: { ctx: t } };
      void 0 !== t[16] && (St.value = t[16]),
        (k = new s({ props: St })),
        r.l.push(() => Object(r.k)(k, "value", _t));
      let Et = t[1].length > 0 && N(t),
        Ct =
          t[23] &&
          (function(t) {
            let e, n;
            return (
              (e = new y({
                props: {
                  href: t[23],
                  $$slots: { default: [I] },
                  $$scope: { ctx: t }
                }
              })),
              {
                c() {
                  Object(r.q)(e.$$.fragment);
                },
                m(t, o) {
                  Object(r.H)(e, t, o), (n = !0);
                },
                p(t, n) {
                  const r = {};
                  (4096 & n[0]) | (512 & n[1]) &&
                    (r.$$scope = { dirty: n, ctx: t }),
                    e.$set(r);
                },
                i(t) {
                  n || (Object(r.db)(e.$$.fragment, t), (n = !0));
                },
                o(t) {
                  Object(r.eb)(e.$$.fragment, t), (n = !1);
                },
                d(t) {
                  Object(r.s)(e, t);
                }
              }
            );
          })(t);
      function Tt(e) {
        t[30](e);
      }
      let At = {
        options: [
          { name: t[12]("options.zh2en"), value: 0 },
          { name: t[12]("options.en2zh"), value: 1 },
          { name: t[12]("options.ja2zh"), value: 2 }
        ],
        $$slots: { default: [F] },
        $$scope: { ctx: t }
      };
      function zt(e) {
        t[31](e);
      }
      void 0 !== t[18] && (At.value = t[18]),
        (A = new _({ props: At })),
        r.l.push(() => Object(r.k)(A, "value", Tt));
      let $t = {
        options: [
          { name: t[12]("options.subTypeBil"), value: 0 },
          { name: t[12]("options.subTypeSource"), value: 1 },
          { name: t[12]("options.subTypeTarget"), value: 2 }
        ],
        $$slots: { default: [M] },
        $$scope: { ctx: t }
      };
      function Pt(e) {
        t[32](e);
      }
      void 0 !== t[19] && ($t.value = t[19]),
        (J = new _({ props: $t })),
        r.l.push(() => Object(r.k)(J, "value", zt));
      let Lt = {
        options: [
          { name: t[12]("options.audioReader") + "1", value: 0 },
          { name: t[12]("options.audioReader") + "2", value: 1 }
        ],
        $$slots: { default: [B] },
        $$scope: { ctx: t }
      };
      function Rt(e) {
        t[33](e);
      }
      void 0 !== t[20] && (Lt.value = t[20]),
        (tt = new _({ props: Lt })),
        r.l.push(() => Object(r.k)(tt, "value", Pt));
      let Nt = {
        min: 1,
        max: 9,
        $$slots: { default: [q] },
        $$scope: { ctx: t }
      };
      void 0 !== t[21] && (Nt.value = t[21]),
        (rt = new T({ props: Nt })),
        r.l.push(() => Object(r.k)(rt, "value", Rt)),
        (lt = new y({
          props: {
            href:
              "https://fanyi.caiyunapp.com/#/?utm_source=extension&utm_medium=options&utm_content=textlink",
            name: "opt_online_trans",
            $$slots: { default: [W] },
            $$scope: { ctx: t }
          }
        })).$on("open-link", t[34]),
        (ct = new y({
          props: {
            href: "https://fanyi.caiyunapp.com/#/mine/glossarys",
            name: "opt_my_glossaries",
            $$slots: { default: [U] },
            $$scope: { ctx: t }
          }
        })).$on("open-link", t[35]),
        (ft = new y({
          props: {
            href:
              "https://fanyi.caiyunapp.com/#/mine/doc?utm_source=extension&utm_medium=options&utm_content=textlink",
            name: "opt_user_center",
            $$slots: { default: [H] },
            $$scope: { ctx: t }
          }
        })).$on("open-link", t[36]),
        (pt = new y({
          props: {
            href:
              "https://fanyi.caiyunapp.com/#/app?utm_source=extension&utm_medium=options&utm_content=textlink",
            name: "opt_xy_app",
            $$slots: { default: [V] },
            $$scope: { ctx: t }
          }
        })).$on("open-link", t[37]),
        (bt = new y({
          props: {
            href:
              "https://support.qq.com/products/107129/?utm_source=extension&utm_medium=options&utm_content=textlink",
            name: "opt_feedback",
            $$slots: { default: [G] },
            $$scope: { ctx: t }
          }
        })).$on("open-link", t[38]);
      let Dt =
        g.isFirefox &&
        (function(t) {
          let e, n, o, i, a, l;
          function c(e) {
            t[39](e);
          }
          n = new y({
            props: {
              href: "https://www.caiyunapp.com/xiaoyi/privacy.html",
              $$slots: { default: [Z] },
              $$scope: { ctx: t }
            }
          });
          let u = { $$slots: { default: [X] }, $$scope: { ctx: t } };
          return (
            void 0 !== t[22] && (u.value = t[22]),
            (i = new s({ props: u })),
            r.l.push(() => Object(r.k)(i, "value", c)),
            {
              c() {
                (e = Object(r.v)("div")),
                  Object(r.q)(n.$$.fragment),
                  (o = Object(r.V)()),
                  Object(r.q)(i.$$.fragment),
                  Object(r.i)(e, "class", "collection");
              },
              m(t, a) {
                Object(r.E)(t, e, a),
                  Object(r.H)(n, e, null),
                  Object(r.f)(e, o),
                  Object(r.H)(i, e, null),
                  (l = !0);
              },
              p(t, e) {
                const o = {};
                (4096 & e[0]) | (512 & e[1]) &&
                  (o.$$scope = { dirty: e, ctx: t }),
                  n.$set(o);
                const l = {};
                (4096 & e[0]) | (512 & e[1]) &&
                  (l.$$scope = { dirty: e, ctx: t }),
                  !a &&
                    4194304 & e[0] &&
                    ((a = !0), (l.value = t[22]), Object(r.c)(() => (a = !1))),
                  i.$set(l);
              },
              i(t) {
                l ||
                  (Object(r.db)(n.$$.fragment, t),
                  Object(r.db)(i.$$.fragment, t),
                  (l = !0));
              },
              o(t) {
                Object(r.eb)(n.$$.fragment, t),
                  Object(r.eb)(i.$$.fragment, t),
                  (l = !1);
              },
              d(t) {
                t && Object(r.u)(e), Object(r.s)(n), Object(r.s)(i);
              }
            }
          );
        })(t);
      return {
        c() {
          (e = Object(r.v)("div")),
            (n = Object(r.v)("div")),
            (o = Object(r.v)("img")),
            (a = Object(r.V)()),
            vt && vt.c(),
            (l = Object(r.V)()),
            (c = Object(r.v)("div")),
            Object(r.q)(u.$$.fragment),
            (d = Object(r.V)()),
            Object(r.q)(p.$$.fragment),
            (m = Object(r.V)()),
            Object(r.q)(v.$$.fragment),
            (w = Object(r.V)()),
            Object(r.q)(k.$$.fragment),
            (O = Object(r.V)()),
            Et && Et.c(),
            (S = Object(r.V)()),
            Ct && Ct.c(),
            (E = Object(r.V)()),
            (C = Object(r.v)("div")),
            Object(r.q)(A.$$.fragment),
            (K = Object(r.V)()),
            Object(r.q)(J.$$.fragment),
            (Q = Object(r.V)()),
            Object(r.q)(tt.$$.fragment),
            (nt = Object(r.V)()),
            Object(r.q)(rt.$$.fragment),
            (it = Object(r.V)()),
            (at = Object(r.v)("div")),
            Object(r.q)(lt.$$.fragment),
            (st = Object(r.V)()),
            Object(r.q)(ct.$$.fragment),
            (ut = Object(r.V)()),
            Object(r.q)(ft.$$.fragment),
            (dt = Object(r.V)()),
            Object(r.q)(pt.$$.fragment),
            (ht = Object(r.V)()),
            Object(r.q)(bt.$$.fragment),
            (gt = Object(r.V)()),
            Dt && Dt.c(),
            Object(r.i)(o, "width", "154"),
            Object(r.i)(o, "height", "61"),
            Object(r.W)(o.src, (i = "/images/logo-name.png")) ||
              Object(r.i)(o, "src", "/images/logo-name.png"),
            Object(r.i)(o, "alt", "logo"),
            Object(r.i)(n, "class", "logo-version"),
            Object(r.i)(c, "class", "collection"),
            Object(r.i)(C, "class", "collection"),
            Object(r.i)(at, "class", "collection"),
            Object(r.i)(e, "class", "container");
        },
        m(t, i) {
          Object(r.E)(t, e, i),
            Object(r.f)(e, n),
            Object(r.f)(n, o),
            Object(r.f)(n, a),
            vt && vt.m(n, null),
            Object(r.f)(e, l),
            Object(r.f)(e, c),
            Object(r.H)(u, c, null),
            Object(r.f)(c, d),
            Object(r.H)(p, c, null),
            Object(r.f)(c, m),
            Object(r.H)(v, c, null),
            Object(r.f)(c, w),
            Object(r.H)(k, c, null),
            Object(r.f)(c, O),
            Et && Et.m(c, null),
            Object(r.f)(c, S),
            Ct && Ct.m(c, null),
            Object(r.f)(e, E),
            Object(r.f)(e, C),
            Object(r.H)(A, C, null),
            Object(r.f)(C, K),
            Object(r.H)(J, C, null),
            Object(r.f)(C, Q),
            Object(r.H)(tt, C, null),
            Object(r.f)(C, nt),
            Object(r.H)(rt, C, null),
            Object(r.f)(e, it),
            Object(r.f)(e, at),
            Object(r.H)(lt, at, null),
            Object(r.f)(at, st),
            Object(r.H)(ct, at, null),
            Object(r.f)(at, ut),
            Object(r.H)(ft, at, null),
            Object(r.f)(at, dt),
            Object(r.H)(pt, at, null),
            Object(r.f)(at, ht),
            Object(r.H)(bt, at, null),
            Object(r.f)(e, gt),
            Dt && Dt.m(e, null),
            (mt = !0);
        },
        p(t, e) {
          t[0]
            ? vt
              ? vt.p(t, e)
              : ((vt = z(t)).c(), vt.m(n, null))
            : vt && (vt.d(1), (vt = null));
          const o = {};
          (4096 & e[0]) | (512 & e[1]) && (o.$$scope = { dirty: e, ctx: t }),
            !f &&
              8192 & e[0] &&
              ((f = !0), (o.value = t[13]), Object(r.c)(() => (f = !1))),
            u.$set(o);
          const i = {};
          (4096 & e[0]) | (512 & e[1]) && (i.$$scope = { dirty: e, ctx: t }),
            !h &&
              16384 & e[0] &&
              ((h = !0), (i.value = t[14]), Object(r.c)(() => (h = !1))),
            p.$set(i);
          const a = {};
          (4096 & e[0]) | (512 & e[1]) && (a.$$scope = { dirty: e, ctx: t }),
            !x &&
              32768 & e[0] &&
              ((x = !0), (a.value = t[15]), Object(r.c)(() => (x = !1))),
            v.$set(a);
          const l = {};
          (4096 & e[0]) | (512 & e[1]) && (l.$$scope = { dirty: e, ctx: t }),
            !j &&
              65536 & e[0] &&
              ((j = !0), (l.value = t[16]), Object(r.c)(() => (j = !1))),
            k.$set(l),
            t[1].length > 0
              ? Et
                ? (Et.p(t, e), 2 & e[0] && Object(r.db)(Et, 1))
                : ((Et = N(t)).c(), Object(r.db)(Et, 1), Et.m(c, S))
              : Et &&
                (Object(r.C)(),
                Object(r.eb)(Et, 1, 1, () => {
                  Et = null;
                }),
                Object(r.n)()),
            t[23] && Ct.p(t, e);
          const s = {};
          4096 & e[0] &&
            (s.options = [
              { name: t[12]("options.zh2en"), value: 0 },
              { name: t[12]("options.en2zh"), value: 1 },
              { name: t[12]("options.ja2zh"), value: 2 }
            ]),
            (4096 & e[0]) | (512 & e[1]) && (s.$$scope = { dirty: e, ctx: t }),
            !D &&
              262144 & e[0] &&
              ((D = !0), (s.value = t[18]), Object(r.c)(() => (D = !1))),
            A.$set(s);
          const d = {};
          4096 & e[0] &&
            (d.options = [
              { name: t[12]("options.subTypeBil"), value: 0 },
              { name: t[12]("options.subTypeSource"), value: 1 },
              { name: t[12]("options.subTypeTarget"), value: 2 }
            ]),
            (4096 & e[0]) | (512 & e[1]) && (d.$$scope = { dirty: e, ctx: t }),
            !Y &&
              524288 & e[0] &&
              ((Y = !0), (d.value = t[19]), Object(r.c)(() => (Y = !1))),
            J.$set(d);
          const b = {};
          4096 & e[0] &&
            (b.options = [
              { name: t[12]("options.audioReader") + "1", value: 0 },
              { name: t[12]("options.audioReader") + "2", value: 1 }
            ]),
            (4096 & e[0]) | (512 & e[1]) && (b.$$scope = { dirty: e, ctx: t }),
            !et &&
              1048576 & e[0] &&
              ((et = !0), (b.value = t[20]), Object(r.c)(() => (et = !1))),
            tt.$set(b);
          const m = {};
          (4096 & e[0]) | (512 & e[1]) && (m.$$scope = { dirty: e, ctx: t }),
            !ot &&
              2097152 & e[0] &&
              ((ot = !0), (m.value = t[21]), Object(r.c)(() => (ot = !1))),
            rt.$set(m);
          const y = {};
          (4096 & e[0]) | (512 & e[1]) && (y.$$scope = { dirty: e, ctx: t }),
            lt.$set(y);
          const w = {};
          (4096 & e[0]) | (512 & e[1]) && (w.$$scope = { dirty: e, ctx: t }),
            ct.$set(w);
          const O = {};
          (4096 & e[0]) | (512 & e[1]) && (O.$$scope = { dirty: e, ctx: t }),
            ft.$set(O);
          const _ = {};
          (4096 & e[0]) | (512 & e[1]) && (_.$$scope = { dirty: e, ctx: t }),
            pt.$set(_);
          const E = {};
          (4096 & e[0]) | (512 & e[1]) && (E.$$scope = { dirty: e, ctx: t }),
            bt.$set(E),
            g.isFirefox && Dt.p(t, e);
        },
        i(t) {
          mt ||
            (Object(r.db)(u.$$.fragment, t),
            Object(r.db)(p.$$.fragment, t),
            Object(r.db)(v.$$.fragment, t),
            Object(r.db)(k.$$.fragment, t),
            Object(r.db)(Et),
            Object(r.db)(Ct),
            Object(r.db)(A.$$.fragment, t),
            Object(r.db)(J.$$.fragment, t),
            Object(r.db)(tt.$$.fragment, t),
            Object(r.db)(rt.$$.fragment, t),
            Object(r.db)(lt.$$.fragment, t),
            Object(r.db)(ct.$$.fragment, t),
            Object(r.db)(ft.$$.fragment, t),
            Object(r.db)(pt.$$.fragment, t),
            Object(r.db)(bt.$$.fragment, t),
            Object(r.db)(Dt),
            (mt = !0));
        },
        o(t) {
          Object(r.eb)(u.$$.fragment, t),
            Object(r.eb)(p.$$.fragment, t),
            Object(r.eb)(v.$$.fragment, t),
            Object(r.eb)(k.$$.fragment, t),
            Object(r.eb)(Et),
            Object(r.eb)(Ct),
            Object(r.eb)(A.$$.fragment, t),
            Object(r.eb)(J.$$.fragment, t),
            Object(r.eb)(tt.$$.fragment, t),
            Object(r.eb)(rt.$$.fragment, t),
            Object(r.eb)(lt.$$.fragment, t),
            Object(r.eb)(ct.$$.fragment, t),
            Object(r.eb)(ft.$$.fragment, t),
            Object(r.eb)(pt.$$.fragment, t),
            Object(r.eb)(bt.$$.fragment, t),
            Object(r.eb)(Dt),
            (mt = !1);
        },
        d(t) {
          t && Object(r.u)(e),
            vt && vt.d(),
            Object(r.s)(u),
            Object(r.s)(p),
            Object(r.s)(v),
            Object(r.s)(k),
            Et && Et.d(),
            Ct && Ct.d(),
            Object(r.s)(A),
            Object(r.s)(J),
            Object(r.s)(tt),
            Object(r.s)(rt),
            Object(r.s)(lt),
            Object(r.s)(ct),
            Object(r.s)(ft),
            Object(r.s)(pt),
            Object(r.s)(bt),
            Dt && Dt.d();
        }
      };
    }
    function J(t, e, n) {
      let i,
        a,
        l,
        s,
        c,
        u,
        f,
        d,
        p,
        h,
        b,
        m = r.I,
        v = () => (m(), (m = Object(r.X)(M, t => n(13, (a = t)))), M),
        y = r.I,
        x = () => (y(), (y = Object(r.X)(U, t => n(14, (l = t)))), U),
        w = r.I,
        k = () => (w(), (w = Object(r.X)(H, t => n(15, (s = t)))), H),
        j = r.I,
        O = () => (j(), (j = Object(r.X)(F, t => n(16, (c = t)))), F),
        _ = r.I,
        S = () => (_(), (_ = Object(r.X)(Z, t => n(17, (u = t)))), Z),
        E = r.I,
        C = () => (E(), (E = Object(r.X)(q, t => n(18, (f = t)))), q),
        T = r.I,
        A = () => (T(), (T = Object(r.X)(W, t => n(19, (d = t)))), W),
        z = r.I,
        $ = () => (z(), (z = Object(r.X)(V, t => n(20, (p = t)))), V),
        P = r.I,
        L = () => (P(), (P = Object(r.X)(G, t => n(21, (h = t)))), G),
        R = r.I,
        N = () => (R(), (R = Object(r.X)(B, t => n(22, (b = t)))), B);
      Object(r.o)(t, o.tStore, t => n(12, (i = t))),
        t.$$.on_destroy.push(() => m()),
        t.$$.on_destroy.push(() => y()),
        t.$$.on_destroy.push(() => w()),
        t.$$.on_destroy.push(() => j()),
        t.$$.on_destroy.push(() => _()),
        t.$$.on_destroy.push(() => E()),
        t.$$.on_destroy.push(() => T()),
        t.$$.on_destroy.push(() => z()),
        t.$$.on_destroy.push(() => P()),
        t.$$.on_destroy.push(() => R());
      let { extVersion: D = "" } = e,
        { userGlossaries: I = [] } = e,
        { isAutoTranslate: F } = e;
      O();
      let { isAutoSWT: M } = e;
      v();
      let { isEnableGa: B } = e;
      N();
      let { transDirect: q } = e;
      C();
      let { subType: W } = e;
      A();
      let { targetBkgColor: U } = e;
      x();
      let { isDirectTranslate: H } = e;
      k();
      let { audioApi: V } = e;
      $();
      let { audioSpeed: G } = e;
      L();
      let { userGlossary: Z } = e;
      S();
      let X = g.isSafari
        ? ""
        : g.isFirefox
        ? "https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox"
        : "chrome://extensions/shortcuts";
      return (
        (t.$$set = t => {
          "extVersion" in t && n(0, (D = t.extVersion)),
            "userGlossaries" in t && n(1, (I = t.userGlossaries)),
            "isAutoTranslate" in t && O(n(2, (F = t.isAutoTranslate))),
            "isAutoSWT" in t && v(n(3, (M = t.isAutoSWT))),
            "isEnableGa" in t && N(n(4, (B = t.isEnableGa))),
            "transDirect" in t && C(n(5, (q = t.transDirect))),
            "subType" in t && A(n(6, (W = t.subType))),
            "targetBkgColor" in t && x(n(7, (U = t.targetBkgColor))),
            "isDirectTranslate" in t && k(n(8, (H = t.isDirectTranslate))),
            "audioApi" in t && $(n(9, (V = t.audioApi))),
            "audioSpeed" in t && L(n(10, (G = t.audioSpeed))),
            "userGlossary" in t && S(n(11, (Z = t.userGlossary)));
        }),
        (t.$$.update = () => {
          4096 & t.$$.dirty[0] && (document.title = i("options.title"));
        }),
        [
          D,
          I,
          F,
          M,
          B,
          q,
          W,
          U,
          H,
          V,
          G,
          Z,
          i,
          a,
          l,
          s,
          c,
          u,
          f,
          d,
          p,
          h,
          b,
          X,
          function(t) {
            (a = t), M.set(a);
          },
          function(t) {
            (l = t), U.set(l);
          },
          function(t) {
            (s = t), H.set(s);
          },
          function(t) {
            (c = t), F.set(c);
          },
          t => ({
            name: `${t.name} (${i(`options.${t.type}`)})`,
            value: t.value
          }),
          function(t) {
            (u = t), Z.set(u);
          },
          function(t) {
            (f = t), q.set(f);
          },
          function(t) {
            (d = t), W.set(d);
          },
          function(t) {
            (p = t), V.set(p);
          },
          function(t) {
            (h = t), G.set(h);
          },
          function(e) {
            r.m.call(this, t, e);
          },
          function(e) {
            r.m.call(this, t, e);
          },
          function(e) {
            r.m.call(this, t, e);
          },
          function(e) {
            r.m.call(this, t, e);
          },
          function(e) {
            r.m.call(this, t, e);
          },
          function(t) {
            (b = t), B.set(b);
          }
        ]
      );
    }
    e.default = class extends r.b {
      constructor(t) {
        super(),
          Object(r.D)(
            this,
            t,
            J,
            K,
            r.N,
            {
              extVersion: 0,
              userGlossaries: 1,
              isAutoTranslate: 2,
              isAutoSWT: 3,
              isEnableGa: 4,
              transDirect: 5,
              subType: 6,
              targetBkgColor: 7,
              isDirectTranslate: 8,
              audioApi: 9,
              audioSpeed: 10,
              userGlossary: 11
            },
            A,
            [-1, -1]
          );
      }
    };
  }
]);
