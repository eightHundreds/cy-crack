!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 176));
})({
  10: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isFirefox = t.isSafari = t.isExtEnv = void 0);
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
    t.isExtEnv = r;
    const i = /apple/i.test(navigator.vendor);
    t.isSafari = i;
    const o = navigator.userAgent.includes("Firefox");
    t.isFirefox = o;
  },
  113: function(e, t, n) {
    var r;
    /*!

 @Name???layer mobile v2.0 ?????????????????????
 @Author?????????
 @Site???http://layer.layui.com/mobie/
 @License???LGPL
    
 */ !(function(
      i
    ) {
      "use strict";
      var o = document,
        a = "getElementsByClassName",
        s = function(e) {
          return o.querySelectorAll(e);
        },
        u = { type: 0, shade: !0, shadeClose: !0, fixed: !0, anim: "scale" },
        c = {
          extend: function(e) {
            var t = JSON.parse(JSON.stringify(u));
            for (var n in e) t[n] = e[n];
            return t;
          },
          timer: {},
          end: {},
          touch: function(e, t) {
            e.addEventListener(
              "click",
              function(e) {
                t.call(this, e);
              },
              !1
            );
          }
        },
        l = 0,
        f = ["layui-m-layer"],
        d = function(e) {
          (this.config = c.extend(e)), this.view();
        };
      (d.prototype.view = function() {
        var e = this.config,
          t = o.createElement("div");
        (this.id = t.id = f[0] + l),
          t.setAttribute("class", f[0] + " " + f[0] + (e.type || 0)),
          t.setAttribute("index", l);
        var n,
          r =
            ((n = "object" == typeof e.title),
            e.title
              ? '<h3 style="' +
                (n ? e.title[1] : "") +
                '">' +
                (n ? e.title[0] : e.title) +
                "</h3>"
              : ""),
          i = (function() {
            "string" == typeof e.btn && (e.btn = [e.btn]);
            var t,
              n = (e.btn || []).length;
            return 0 !== n && e.btn
              ? ((t = '<span yes type="1">' + e.btn[0] + "</span>"),
                2 === n &&
                  (t = '<span no type="0">' + e.btn[1] + "</span>" + t),
                '<div class="layui-m-layerbtn">' + t + "</div>")
              : "";
          })();
        if (
          (e.fixed ||
            ((e.top = e.hasOwnProperty("top") ? e.top : 100),
            (e.style = e.style || ""),
            (e.style += " top:" + (o.body.scrollTop + e.top) + "px")),
          2 === e.type &&
            (e.content =
              '<i></i><i class="layui-m-layerload"></i><i></i><p>' +
              (e.content || "") +
              "</p>"),
          e.skin && (e.anim = "up"),
          "msg" === e.skin && (e.shade = !1),
          (t.innerHTML =
            (e.shade
              ? "<div " +
                ("string" == typeof e.shade ? 'style="' + e.shade + '"' : "") +
                ' class="layui-m-layershade"></div>'
              : "") +
            '<div class="layui-m-layermain" ' +
            (e.fixed ? "" : 'style="position:static;"') +
            '><div class="layui-m-layersection"><div class="layui-m-layerchild ' +
            (e.skin ? "layui-m-layer-" + e.skin + " " : "") +
            (e.className ? e.className : "") +
            " " +
            (e.anim ? "layui-m-anim-" + e.anim : "") +
            '" ' +
            (e.style ? 'style="' + e.style + '"' : "") +
            ">" +
            r +
            '<div class="layui-m-layercont">' +
            e.content +
            "</div>" +
            i +
            "</div></div></div>"),
          !e.type || 2 === e.type)
        ) {
          var u = o[a](f[0] + e.type);
          u.length >= 1 && layer.close(u[0].getAttribute("index"));
        }
        document.body.appendChild(t);
        var c = (this.elem = s("#" + this.id)[0]);
        e.success && e.success(c), (this.index = l++), this.action(e, c);
      }),
        (d.prototype.action = function(e, t) {
          var n = this;
          e.time &&
            (c.timer[n.index] = setTimeout(function() {
              layer.close(n.index);
            }, 1e3 * e.time));
          var r = function() {
            0 == this.getAttribute("type")
              ? (e.no && e.no(), layer.close(n.index))
              : e.yes
              ? e.yes(n.index)
              : layer.close(n.index);
          };
          if (e.btn)
            for (
              var i = t[a]("layui-m-layerbtn")[0].children, o = i.length, s = 0;
              s < o;
              s++
            )
              c.touch(i[s], r);
          if (e.shade && e.shadeClose) {
            var u = t[a]("layui-m-layershade")[0];
            c.touch(u, function() {
              layer.close(n.index, e.end);
            });
          }
          e.end && (c.end[n.index] = e.end);
        }),
        (i.layer = {
          v: "2.0",
          index: l,
          open: function(e) {
            return new d(e || {}).index;
          },
          close: function(e) {
            var t = s("#" + f[0] + e)[0];
            t &&
              ((t.innerHTML = ""),
              o.body.removeChild(t),
              clearTimeout(c.timer[e]),
              delete c.timer[e],
              "function" == typeof c.end[e] && c.end[e](),
              delete c.end[e]);
          },
          closeAll: function() {
            for (var e = o[a](f[0]), t = 0, n = e.length; t < n; t++)
              layer.close(0 | e[0].getAttribute("index"));
          }
        }),
        void 0 ===
          (r = function() {
            return layer;
          }.call(t, n, t, e)) || (e.exports = r);
    })(window);
  },
  116: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isTabWithSWT = async function(e) {
        if (r.isExtEnv && e)
          try {
            return await browser.tabs.sendMessage(e, { type: "isTabWithSWT" });
          } catch {
            return !1;
          }
        return !1;
      }),
      (t.addIsTabWithSWTListener = i),
      (t.setupIsTabWithSWT = function() {
        return i(() => Promise.resolve(!0));
      });
    var r = n(10);
    function i(e) {
      if (r.isExtEnv) {
        const t = (t, n) => {
          if (t)
            switch (t.type) {
              case "isTabWithSWT":
                return e();
            }
        };
        return (
          browser.runtime.onMessage.addListener(t),
          () => browser.runtime.onMessage.removeListener(t)
        );
      }
      return () => {};
    }
  },
  176: function(e, t, n) {
    "use strict";
    var r = n(116);
    !(async function() {
      if (window.__CYXY_SWT__) return;
      (window.__CYXY_SWT__ = !0), (0, r.setupIsTabWithSWT)(), n(113);
      const { TRS_TOKEN: e } = n(93),
        t = browser.i18n.getMessage("networkErr"),
        i = 1024,
        o = Symbol(),
        a = Symbol(),
        s = 800,
        u = 300;
      let c = n(80),
        l = !1,
        f = !1,
        d = !0,
        p = o,
        h = 5;
      function y() {
        c(".cyxy-trs-result").length > 0 && c(".cyxy-trs-result").remove();
      }
      function g(e) {
        if (!e) return !1;
        let t = e.focusNode;
        if (
          "input" == t.nodeName.toLowerCase() ||
          "textarea" == t.nodeName.toLowerCase()
        )
          return !0;
        let n = t.childNodes;
        for (let e in n)
          if (
            n[e].nodeName &&
            ("input" == n[e].nodeName.toLowerCase() ||
              "textarea" == n[e].nodeName.toLowerCase())
          )
            return !0;
        return !1;
      }
      window.addEventListener(
        "mouseup",
        (function(e, t) {
          let n = null;
          return function() {
            let e = this,
              t = arguments;
            n ||
              (n = setTimeout(() => {
                (function() {
                  setTimeout(function() {
                    let e,
                      t,
                      n,
                      r,
                      i,
                      o = "";
                    try {
                      (e = getSelection()),
                        (t = e.toString()) &&
                          ((n = e.getRangeAt(0).getBoundingClientRect()),
                          (r = n.x + n.width),
                          (i = n.y + n.height)),
                        e.focusNode && (o = e.focusNode.parentNode.className);
                    } catch (e) {
                      N("init para error: " + e);
                    }
                    if (0 != c(".cyxy-trs-result").length) {
                      if ((c("#cyxy-swt-pre").remove(), l)) l = !1;
                      else if (
                        (c(".cyxy-trs-result").remove(),
                        c("audio.cyxy-audio").remove(),
                        t && -1 == o.indexOf("cyxy-trs-target") && d)
                      )
                        try {
                          g(e) || S(t, r, i);
                        } catch (e) {
                          N("getTranslatedWordByFetch error: " + e);
                        }
                    } else if (
                      (0 != c("#cyxy-swt-pre").length &&
                        c("#cyxy-swt-pre").remove(),
                      t && -1 == o.indexOf("cyxy-trs-target") && d)
                    )
                      try {
                        g(e) || S(t, r, i);
                      } catch (e) {
                        N("getTranslatedWordByFetch error: " + e);
                      }
                  }, 0);
                }.apply(e, t),
                  (n = null));
              }, 0));
          };
        })()
      ),
        c(".cyxy-personal").on("click", function() {
          l = !0;
        }),
        c(".cyxy-function").on("click", function() {
          l = !0;
        }),
        c(".cyxy-favorite").on("click", function() {
          l = !0;
        }),
        c(".cyxy-video-trans").on("click", function() {
          l = !0;
        }),
        document.addEventListener(
          "error",
          function(e) {
            let t = e.target;
            "img" == t.tagName.toLowerCase() &&
              "cyxy-wiki" == t.className &&
              (c(".wiki-img").remove(), c(".wiki-data").removeClass("has-pic")),
              "img" == t.tagName.toLowerCase() &&
                null != t.parentNode &&
                null != t.parentNode.parentNode &&
                "cyxy-personal cyxy-trs-source" ==
                  t.parentNode.parentNode.className &&
                (t.src = "https://www.caiyunapp.com/imgs/webtrs/default.png");
          },
          !0
        );
      const m = e =>
        e.replace(
          /[&<>'"]/g,
          e =>
            ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              "'": "&#39;",
              '"': "&quot;"
            }[e] || e)
        );
      function v(e, t, n, r) {
        (function(e, t, n, r) {
          let i = document.documentElement.scrollTop || document.body.scrollTop,
            o = browser.runtime.getURL("images/logo_128.png");
          c("body").append(
            '<div class="cyxy-trs-result cyxy-trs-target" id="cyxy-swt"></div>'
          ),
            c(".cyxy-trs-result").append('<div class="trs-header"></div>'),
            c(".trs-header").append(`<div class="trs-word">${n}</div>`),
            c(".trs-header").append(
              `<a href="https://fanyi.caiyunapp.com/#/?utm_source=extension&utm_medium=swt_logo&utm_content=logolink" target="_blank" class="cyxy-link-logo"><img src="${o}" class="cyxy-link-logo"></a>`
            ),
            c(".cyxy-trs-result").css({
              left: `${e}px`,
              top: `${t + i}px`,
              visibility: "hidden"
            }),
            r &&
              c(".cyxy-trs-result").append(
                `<div class="trs-sentence">${r}</div>`
              ),
            c(".cyxy-trs-result").mousedown(function() {
              l = !0;
            });
        })(e, t, (n = m(n)), r),
          (function(e, t) {
            let n = browser.runtime.getURL("images/logo_64.png"),
              r = null;
            f ||
              (c("body").append(
                `<div id="cyxy-swt-pre"><img src="${n}"></div>`
              ),
              c("#cyxy-swt").hide(),
              c("#cyxy-swt-pre")
                .on("mouseenter", () => {
                  r = setTimeout(() => {
                    x();
                  }, s);
                })
                .on("mouseleave", () => {
                  clearTimeout(r);
                })
                .on("click", () => {
                  clearTimeout(r), x();
                }),
              (function(e, t) {
                let n =
                    document.documentElement.clientHeight ||
                    document.body.clientHeight,
                  r =
                    document.documentElement.clientWidth ||
                    document.body.clientWidth,
                  i = window
                    .getSelection()
                    .getRangeAt(0)
                    .getBoundingClientRect().height,
                  o =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                c("#cyxy-swt-pre").css({
                  left: `${e - 5}px`,
                  top: `${t + o - 2}px`
                }),
                  c("#cyxy-swt-pre").offset().left + 20 >= r &&
                    c("#cyxy-swt-pre").css({ left: `${e - 20}px` }),
                  c("#cyxy-swt-pre").offset().top + 20 - o >= n &&
                    c("#cyxy-swt-pre").css({ top: `${t + o - i - 23}px` });
              })(e, t));
          })(e, t);
      }
      function x() {
        c("#cyxy-swt").slideDown(u),
          c("#cyxy-swt-pre").fadeOut(u),
          (l = !0),
          b();
      }
      function b() {
        let e = document.documentElement.scrollTop || document.body.scrollTop,
          t = c(".cyxy-trs-result").offset().top,
          n = c(".cyxy-trs-result").offset().left,
          r =
            document.documentElement.clientHeight || document.body.clientHeight,
          i = document.documentElement.clientWidth || document.body.clientWidth,
          o = c(".cyxy-trs-result").outerHeight(),
          a = c(".cyxy-trs-result").outerWidth(),
          s = window
            .getSelection()
            .getRangeAt(0)
            .getBoundingClientRect().height;
        t + o + 20 >= r + e &&
          t > o + s &&
          c(".cyxy-trs-result").css({ top: `${t - o - s}px` }),
          n + a + 20 >= i && c(".cyxy-trs-result").css({ left: `${n - a}px` }),
          c(".cyxy-trs-result").css({ visibility: "visible" });
      }
      let w, T;
      function k(e) {
        let t = browser.runtime.getURL("images/no-voice.png");
        c(".trs-header").append(`<img src="${t}" class="sound-play">`),
          (function(e) {
            let t, n, r, i, s, u;
            "jp" === j(e)
              ? ((s = "&le=jp"), (u = "jp"))
              : ((s = ""), (u = "en")),
              (t = encodeURI(e)),
              (n = '<audio class="cyxy-audio" id="cyxy-trs-audio"></audio>'),
              p === o
                ? (r = `<source src="http://dict.youdao.com/dictvoice?audio=${t}${s}" type="audio/mpeg">`)
                : p === a &&
                  ((r = `<source src="http://tts.baidu.com/text2audio?lan=${u}&ie=UTF-8&spd=${h}&text=${t}" type="audio/mpeg">`),
                  (i = `<embed height="0" width="0" src="http://tts.baidu.com/text2audio?lan=${u}&ie=UTF-8&spd=${h}&text=${t}">`)),
              c("#cyxy-swt").append(
                '<audio class="cyxy-audio" id="cyxy-trs-audio"></audio>'
              ),
              c("audio.cyxy-audio").append(r),
              p === a && c("audio.cyxy-audio").append(i);
          })(e),
          (w = document.getElementById("cyxy-trs-audio")),
          (function e() {
            setTimeout(function() {
              let t = w.duration;
              isNaN(t)
                ? e()
                : ((t += 0.5),
                  c(".sound-play").on("click", function() {
                    clearTimeout(T),
                      (function(e) {
                        let t = browser.runtime.getURL("images/voice.png"),
                          n = browser.runtime.getURL("images/no-voice.png");
                        c(".sound-play").attr("src", t),
                          (T = setTimeout(() => {
                            c(".sound-play").attr("src", n);
                          }, 1e3 * e));
                      })(t),
                      w.play(),
                      A("audio");
                  }));
            }, 10);
          })();
      }
      function C(e) {
        return 0 === Object.keys(e).length;
      }
      function E(n, r, i, o) {
        try {
          y(), v(n, r, i);
        } catch (e) {
          N("showBox error: " + e);
        }
        try {
          !(function(n, r) {
            let i = {
              source: `${n}`,
              trans_type: `${o}`,
              request_id: "web_fanyi",
              media: "text",
              os_type: "web",
              dict: !0,
              cached: !0,
              replaced: !0
            };
            browser.runtime
              .sendMessage({
                method: "POST",
                contentScriptQuery: "fetchUrl",
                url: "https://api.interpreter.caiyunai.com/v1/dict",
                headers: {
                  "content-type": "application/json",
                  "x-authorization": `token ${e}`,
                  Authorization: "Basic caiyun:appleapple"
                },
                data: i
              })
              .then(function(e) {
                "ok" == e.status
                  ? (c(".dict-description").length > 0 &&
                      c(".dict-description").remove(),
                    c(".wiki-data").length > 0 && c(".wiki-data").remove(),
                    c(".trs-pron").length > 0 && c(".trs-pron").remove(),
                    c(".wiki-link").length > 0 && c(".wiki-link").remove(),
                    c(".sound-play").length > 0 && c(".sound-play").remove(),
                    c(".wiki-link-wrapper").length > 0 &&
                      c(".wiki-link-wrapper").remove(),
                    (function(e, t) {
                      let n;
                      try {
                        n = JSON.parse(e.data);
                      } catch (e) {
                        N("getDictByFetch data parse error: " + e);
                      }
                      try {
                        !(function(e) {
                          let t = e.wiki,
                            n = e.dictionary,
                            r = n.explanations,
                            i = "";
                          n.prons && (i = n.prons.en || "");
                          let o = i.replace(/\*/, "");
                          c(".trs-header").append(
                            `<div class="trs-pron">${o}</div>`
                          ),
                            null == r ||
                              C(r) ||
                              c(".cyxy-trs-result").append(
                                '<div class="dict-description"></div>'
                              ),
                            c(".dict-description").append(
                              '\n        <p class="wiki-hint">??????</p>\n    '
                            );
                          for (let e in r)
                            c(".dict-description").append(
                              `\n            <p class="trs-explanations">${r[e]}</p>\n        `
                            );
                          try {
                            !(function(e) {
                              if (!e || C(e)) return;
                              c(".cyxy-trs-result").append(
                                '<div class="wiki-data"></div>'
                              );
                              let t = e.item,
                                n = e.description,
                                r = e.sitelink,
                                i = browser.runtime.getURL(
                                  "images/wiki-link-logo.png"
                                ),
                                o = e.image_url;
                              o &&
                                "http://www.caiyunapp.com/imgs/link_default_img.png" !=
                                  o &&
                                (c(".wiki-data").append(
                                  `<div class="wiki-img">                <img class="cyxy-wiki" src="${o}" alt="Sorry,the server error!">                </div>`
                                ),
                                c(".wiki-data").addClass("has-pic")),
                                c(".wiki-data").append(
                                  '\n        <p class="wiki-hint">??????</p>\n        <div class="wiki-item"></div>\n    '
                                );
                              for (let e in t)
                                c(".wiki-item").append(`<p>${t[e]}</p>`);
                              c(".wiki-data").append(
                                '<div class="wiki-description"></div>'
                              );
                              for (let e in n)
                                n[e] &&
                                  "null" != n[e] &&
                                  c(".wiki-description").append(
                                    `<p>${n[e]}</p>`
                                  );
                              c(".cyxy-trs-result").append(
                                `<div class="wiki-link-wrapper">\n            <span>\n                <img src="${i}" class="wiki-link-logo">\n                <span class="wiki-link-hint">??????wiki</span>\n            </span>\n            <a href="${r}" target="_blank" class="wiki-link">???????????? ></a>\n        </div>`
                              ),
                                c(".wiki-link-wrapper").on("click", () => {
                                  window.open(r, "_blank");
                                });
                            })(t);
                          } catch (e) {
                            N("addWikiInfo error: " + e);
                          }
                        })(n);
                      } catch (e) {
                        N("addDiscriptions error: " + e);
                      }
                      try {
                        k(t);
                      } catch (e) {
                        N("addAudio error: " + e);
                      }
                    })(e, n),
                    b())
                  : D(t),
                  browser.runtime.lastError &&
                    N(browser.runtime.lastError.message);
              });
          })(i);
        } catch (e) {
          N("getDictByFetch error: " + e);
        }
        A("useDictAPI", o);
      }
      function S(n, r, o) {
        if (!(n = n.trim()) || n.length >= i || !browser.runtime) return;
        let a = (function(e, t) {
          try {
            let n = t;
            if ("" !== e) {
              {
                let t = j(e);
                n = "en" === t ? "en2zh" : "jp" === t ? "ja2zh" : "zh2en";
              }
            }
            return n;
          } catch (e) {
            N("changeLangType error: " + e);
          }
        })(n, "auto");
        if ("zh2en" == a || "num" == j(n)) return;
        let s = {
          source: `${n}`,
          trans_type: `${a}`,
          request_id: "web_fanyi",
          media: "text",
          os_type: "web",
          dict: !0,
          cached: !0,
          replaced: !0
        };
        browser.runtime
          .sendMessage({
            method: "POST",
            contentScriptQuery: "fetchUrl",
            url: "https://api.interpreter.caiyunai.com/v1/translator",
            headers: {
              "content-type": "application/json",
              "x-authorization": `token ${e}`,
              Authorization: "Basic caiyun:appleapple"
            },
            data: s
          })
          .then(function(e) {
            if ("ok" == e.status) {
              let t;
              try {
                t = JSON.parse(e.data);
              } catch (e) {
                N("getTranslatedWordByFetch data parse error: " + e);
              }
              1 == t.isdict
                ? E(r, o, n, a)
                : t.target &&
                  (function(e, t, n, r, i) {
                    try {
                      y(), v(e, t, n, r.target);
                    } catch (e) {
                      N("showBox error: " + e);
                    }
                    try {
                      k(n);
                    } catch (e) {
                      N("addAudio error: " + e);
                    }
                    A("useTranslatorAPI", i), b();
                  })(r, o, n, t, a);
            } else D(t);
            browser.runtime.lastError && N(browser.runtime.lastError.message);
          });
      }
      function N(e) {
        browser.runtime.sendMessage({ error: e });
      }
      function A(e, t) {
        browser.runtime.sendMessage({ type: e, direction: t });
      }
      function j(e) {
        try {
          if ("string" != typeof e) return "num";
          if (null !== /^[\d\.,]*$/.exec(e)) return "num";
          let t = "en",
            n = (e.match(/[\u4e00-\u9fa5]/g) || []).length / e.length,
            r = /[\u3020-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u31F0-\u31FF]/g;
          return (
            (e.match(r) || []).length / e.length > 0.03
              ? (t = "jp")
              : n > 0.1 && (t = "zh"),
            t
          );
        } catch (e) {
          N("detectLang error: " + e);
        }
      }
      function D(e) {
        layer.open({ content: e, skin: "msg", time: 5 });
      }
      browser.storage.sync
        .get({
          isDirectTranslate: !1,
          isAutoSWT: !0,
          audioApi: 0,
          audioSpeed: 5
        })
        .then(function(e) {
          (f = e.isDirectTranslate),
            (d = e.isAutoSWT),
            (p = 1 === e.audioApi ? o : a),
            (h = e.audioSpeed);
        }),
        setInterval(function() {
          browser.storage.sync
            .get({
              isDirectTranslate: !1,
              isAutoSWT: !0,
              audioApi: 0,
              audioSpeed: 5
            })
            .then(function(e) {
              (f = e.isDirectTranslate),
                (d = e.isAutoSWT),
                (p = 1 === e.audioApi ? o : a),
                (h = e.audioSpeed);
            });
        }, 2500);
    })();
  },
  80: function(e, t, n) {
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
     */ !(function(t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function(n, i) {
      "use strict";
      var o = [],
        a = n.document,
        s = Object.getPrototypeOf,
        u = o.slice,
        c = o.concat,
        l = o.push,
        f = o.indexOf,
        d = {},
        p = d.toString,
        h = d.hasOwnProperty,
        y = h.toString,
        g = y.call(Object),
        m = {},
        v = function(e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        x = function(e) {
          return null != e && e === e.window;
        },
        b = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          i,
          o = (n = n || a).createElement("script");
        if (((o.text = e), t))
          for (r in b)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function T(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? d[p.call(e)] || "object"
          : typeof e;
      }
      var k = function(e, t) {
          return new k.fn.init(e, t);
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function E(e) {
        var t = !!e && "length" in e && e.length,
          n = T(e);
        return (
          !v(e) &&
          !x(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (k.fn = k.prototype = {
        jquery: "3.4.1",
        constructor: k,
        length: 0,
        toArray: function() {
          return u.call(this);
        },
        get: function(e) {
          return null == e
            ? u.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function(e) {
          var t = k.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function(e) {
          return k.each(this, e);
        },
        map: function(e) {
          return this.pushStack(
            k.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function() {
          return this.pushStack(u.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: l,
        sort: o.sort,
        splice: o.splice
      }),
        (k.extend = k.fn.extend = function() {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || v(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (c && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || k.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (a[t] = k.extend(c, o, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
        k.extend({
          expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(e) {
            throw new Error(e);
          },
          noop: function() {},
          isPlainObject: function(e) {
            var t, n;
            return !(
              !e ||
              "[object Object]" !== p.call(e) ||
              ((t = s(e)) &&
                ("function" !=
                  typeof (n = h.call(t, "constructor") && t.constructor) ||
                  y.call(n) !== g))
            );
          },
          isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function(e, t) {
            w(e, { nonce: t && t.nonce });
          },
          each: function(e, t) {
            var n,
              r = 0;
            if (E(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function(e) {
            return null == e ? "" : (e + "").replace(C, "");
          },
          makeArray: function(e, t) {
            var n = t || [];
            return (
              null != e &&
                (E(Object(e))
                  ? k.merge(n, "string" == typeof e ? [e] : e)
                  : l.call(n, e)),
              n
            );
          },
          inArray: function(e, t, n) {
            return null == t ? -1 : f.call(t, e, n);
          },
          merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
              !t(e[i], i) !== a && r.push(e[i]);
            return r;
          },
          map: function(e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (E(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return c.apply([], a);
          },
          guid: 1,
          support: m
        }),
        "function" == typeof Symbol &&
          (k.fn[Symbol.iterator] = o[Symbol.iterator]),
        k.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
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
        (function(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            y,
            g,
            m,
            v,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            k = 0,
            C = ue(),
            E = ue(),
            S = ue(),
            N = ue(),
            A = function(e, t) {
              return e === t && (f = !0), 0;
            },
            j = {}.hasOwnProperty,
            D = [],
            L = D.pop,
            q = D.push,
            _ = D.push,
            O = D.slice,
            P = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            H =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            $ =
              "\\[" +
              R +
              "*(" +
              I +
              ")(?:" +
              R +
              "*([*^$|!~]?=)" +
              R +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              R +
              "*\\]",
            M =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              $ +
              ")*)|.*)\\)|)",
            W = new RegExp(R + "+", "g"),
            B = new RegExp(
              "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
              "g"
            ),
            F = new RegExp("^" + R + "*," + R + "*"),
            U = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            z = new RegExp(R + "|>"),
            Y = new RegExp(M),
            X = new RegExp("^" + I + "$"),
            G = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + $),
              PSEUDO: new RegExp("^" + M),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  R +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  R +
                  "*(?:([+-]|)" +
                  R +
                  "*(\\d+)|))" +
                  R +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + H + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  R +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  R +
                  "*((?:-\\d)?\\d*)" +
                  R +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            V = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)",
              "ig"
            ),
            ne = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
              return t
                ? "\0" === e
                  ? "???"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function() {
              d();
            },
            ae = be(
              function(e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            _.apply((D = O.call(w.childNodes)), w.childNodes),
              D[w.childNodes.length].nodeType;
          } catch (e) {
            _ = {
              apply: D.length
                ? function(e, t) {
                    q.apply(e, O.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  }
            };
          }
          function se(e, t, r, i) {
            var o,
              s,
              c,
              l,
              f,
              h,
              m,
              v = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
              return r;
            if (
              !i &&
              ((t ? t.ownerDocument || t : w) !== p && d(t), (t = t || p), y)
            ) {
              if (11 !== T && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === T) {
                    if (!(c = t.getElementById(o))) return r;
                    if (c.id === o) return r.push(c), r;
                  } else if (
                    v &&
                    (c = v.getElementById(o)) &&
                    x(t, c) &&
                    c.id === o
                  )
                    return r.push(c), r;
                } else {
                  if (f[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return _.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !N[e + " "] &&
                (!g || !g.test(e)) &&
                (1 !== T || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((m = e), (v = t), 1 === T && z.test(e))) {
                  for (
                    (l = t.getAttribute("id"))
                      ? (l = l.replace(re, ie))
                      : t.setAttribute("id", (l = b)),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = "#" + l + " " + xe(h[s]);
                  (m = h.join(",")),
                    (v = (ee.test(e) && me(t.parentNode)) || t);
                }
                try {
                  return _.apply(r, v.querySelectorAll(m)), r;
                } catch (t) {
                  N(e, !0);
                } finally {
                  l === b && t.removeAttribute("id");
                }
              }
            }
            return u(e.replace(B, "$1"), t, r, i);
          }
          function ue() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function ce(e) {
            return (e[b] = !0), e;
          }
          function le(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ye(e) {
            return function(t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ge(e) {
            return ce(function(t) {
              return (
                (t = +t),
                ce(function(n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (o = se.isXML = function(e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !V.test(t || (n && n.nodeName) || "HTML");
          }),
          (d = se.setDocument = function(e) {
            var t,
              i,
              a = e ? e.ownerDocument || e : w;
            return a !== p && 9 === a.nodeType && a.documentElement
              ? ((h = (p = a).documentElement),
                (y = !o(p)),
                w !== p &&
                  (i = p.defaultView) &&
                  i.top !== i &&
                  (i.addEventListener
                    ? i.addEventListener("unload", oe, !1)
                    : i.attachEvent && i.attachEvent("onunload", oe)),
                (n.attributes = le(function(e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = le(function(e) {
                  return (
                    e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                (n.getById = le(function(e) {
                  return (
                    (h.appendChild(e).id = b),
                    !p.getElementsByName || !p.getElementsByName(b).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function(e) {
                      var t = e.replace(te, ne);
                      return function(e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && y) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function(e) {
                      var t = e.replace(te, ne);
                      return function(e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && y) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                          for (
                            i = t.getElementsByName(e), r = 0;
                            (o = i[r++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function(e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function(e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function(e, t) {
                    if (void 0 !== t.getElementsByClassName && y)
                      return t.getElementsByClassName(e);
                  }),
                (m = []),
                (g = []),
                (n.qsa = K.test(p.querySelectorAll)) &&
                  (le(function(e) {
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      b +
                      "'></a><select id='" +
                      b +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=" + R + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        g.push("\\[" + R + "*(?:value|" + H + ")"),
                      e.querySelectorAll("[id~=" + b + "-]").length ||
                        g.push("~="),
                      e.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      e.querySelectorAll("a#" + b + "+*").length ||
                        g.push(".#.+[+~]");
                  }),
                  le(function(e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        g.push("name" + R + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        g.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        g.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (v =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  le(function(e) {
                    (n.disconnectedMatch = v.call(e, "*")),
                      v.call(e, "[s!='']:x"),
                      m.push("!=", M);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (m = m.length && new RegExp(m.join("|"))),
                (t = K.test(h.compareDocumentPosition)),
                (x =
                  t || K.test(h.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (A = t
                  ? function(e, t) {
                      if (e === t) return (f = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === p || (e.ownerDocument === w && x(w, e))
                            ? -1
                            : t === p || (t.ownerDocument === w && x(w, t))
                            ? 1
                            : l
                            ? P(l, e) - P(l, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!i || !o)
                        return e === p
                          ? -1
                          : t === p
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : l
                          ? P(l, e) - P(l, t)
                          : 0;
                      if (i === o) return de(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[r] === s[r]; ) r++;
                      return r
                        ? de(a[r], s[r])
                        : a[r] === w
                        ? -1
                        : s[r] === w
                        ? 1
                        : 0;
                    }),
                p)
              : p;
          }),
          (se.matches = function(e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== p && d(e),
              n.matchesSelector &&
                y &&
                !N[t + " "] &&
                (!m || !m.test(t)) &&
                (!g || !g.test(t)))
            )
              try {
                var r = v.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                N(t, !0);
              }
            return se(t, p, null, [e]).length > 0;
          }),
          (se.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && d(e), x(e, t);
          }),
          (se.attr = function(e, t) {
            (e.ownerDocument || e) !== p && d(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && j.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !y)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !y
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (se.escape = function(e) {
            return (e + "").replace(re, ie);
          }),
          (se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function(e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (l = !n.sortStable && e.slice(0)),
              e.sort(A),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (l = null), e;
          }),
          (i = se.getText = function(e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
          }),
          ((r = se.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || se.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && se.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return G.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        Y.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = C[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                    C(e, function(e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var i = se.attr(r, e);
                  return null == i
                    ? "!=" === t
                    : !t ||
                        ((i += ""),
                        "=" === t
                          ? i === n
                          : "!=" === t
                          ? i !== n
                          : "^=" === t
                          ? n && 0 === i.indexOf(n)
                          : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                          ? n && i.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (i === n || i.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function(e, t, n, r, i) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === r && 0 === i
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(t, n, u) {
                      var c,
                        l,
                        f,
                        d,
                        p,
                        h,
                        y = o !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        m = s && t.nodeName.toLowerCase(),
                        v = !u && !s,
                        x = !1;
                      if (g) {
                        if (o) {
                          for (; y; ) {
                            for (d = t; (d = d[y]); )
                              if (
                                s
                                  ? d.nodeName.toLowerCase() === m
                                  : 1 === d.nodeType
                              )
                                return !1;
                            h = y = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && v)) {
                          for (
                            x =
                              (p =
                                (c =
                                  (l =
                                    (f = (d = g)[b] || (d[b] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  T && c[1]) && c[2],
                              d = p && g.childNodes[p];
                            (d = (++p && d && d[y]) || (x = p = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++x && d === t) {
                              l[e] = [T, p, x];
                              break;
                            }
                        } else if (
                          (v &&
                            (x = p =
                              (c =
                                (l =
                                  (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                              c[1]),
                          !1 === x)
                        )
                          for (
                            ;
                            (d =
                              (++p && d && d[y]) || (x = p = 0) || h.pop()) &&
                            ((s
                              ? d.nodeName.toLowerCase() !== m
                              : 1 !== d.nodeType) ||
                              !++x ||
                              (v &&
                                ((l =
                                  (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] = [T, x]),
                              d !== t));

                          );
                        return (x -= i) === r || (x % r == 0 && x / r >= 0);
                      }
                    };
              },
              PSEUDO: function(e, t) {
                var n,
                  i =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    se.error("unsupported pseudo: " + e);
                return i[b]
                  ? i(t)
                  : i.length > 1
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ce(function(e, n) {
                          for (var r, o = i(e, t), a = o.length; a--; )
                            e[(r = P(e, o[a]))] = !(n[r] = o[a]);
                        })
                      : function(e) {
                          return i(e, 0, n);
                        })
                  : i;
              }
            },
            pseudos: {
              not: ce(function(e) {
                var t = [],
                  n = [],
                  r = s(e.replace(B, "$1"));
                return r[b]
                  ? ce(function(e, t, n, i) {
                      for (var o, a = r(e, null, i, []), s = e.length; s--; )
                        (o = a[s]) && (e[s] = !(t[s] = o));
                    })
                  : function(e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ce(function(e) {
                return function(t) {
                  return se(e, t).length > 0;
                };
              }),
              contains: ce(function(e) {
                return (
                  (e = e.replace(te, ne)),
                  function(t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ce(function(e) {
                return (
                  X.test(e || "") || se.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = y
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function(e) {
                return e === h;
              },
              focus: function(e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ye(!1),
              disabled: ye(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function(e) {
                return !r.pseudos.empty(e);
              },
              header: function(e) {
                return Q.test(e.nodeName);
              },
              input: function(e) {
                return J.test(e.nodeName);
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function(e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: ge(function() {
                return [0];
              }),
              last: ge(function(e, t) {
                return [t - 1];
              }),
              eq: ge(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ge(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ge(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ge(function(e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: ge(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              })
            }
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ve() {}
          function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function be(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = k++;
            return t.first
              ? function(t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function(t, n, u) {
                  var c,
                    l,
                    f,
                    d = [T, s];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((l =
                            (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((c = l[o]) && c[0] === T && c[1] === s)
                            return (d[2] = c[2]);
                          if (((l[o] = d), (d[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function(t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
            return a;
          }
          function ke(e, t, n, r, i, o) {
            return (
              r && !r[b] && (r = ke(r)),
              i && !i[b] && (i = ke(i, o)),
              ce(function(o, a, s, u) {
                var c,
                  l,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  y =
                    o ||
                    (function(e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  g = !e || (!o && t) ? y : Te(y, d, e, s, u),
                  m = n ? (i || (o ? e : h || r) ? [] : a) : g;
                if ((n && n(g, m, s, u), r))
                  for (c = Te(m, p), r(c, [], s, u), l = c.length; l--; )
                    (f = c[l]) && (m[p[l]] = !(g[p[l]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (c = [], l = m.length; l--; )
                        (f = m[l]) && c.push((g[l] = f));
                      i(null, (m = []), c, u);
                    }
                    for (l = m.length; l--; )
                      (f = m[l]) &&
                        (c = i ? P(o, f) : d[l]) > -1 &&
                        (o[c] = !(a[c] = f));
                  }
                } else (m = Te(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : _.apply(a, m);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                u = a ? 1 : 0,
                l = be(
                  function(e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = be(
                  function(e) {
                    return P(t, e) > -1;
                  },
                  s,
                  !0
                ),
                d = [
                  function(e, n, r) {
                    var i =
                      (!a && (r || n !== c)) ||
                      ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  }
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) d = [be(we(d), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                  return ke(
                    u > 1 && we(d),
                    u > 1 &&
                      xe(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(B, "$1"),
                    n,
                    u < i && Ce(e.slice(u, i)),
                    i < o && Ce((e = e.slice(i))),
                    i < o && xe(e)
                  );
                }
                d.push(n);
              }
            return we(d);
          }
          return (
            (ve.prototype = r.filters = r.pseudos),
            (r.setFilters = new ve()),
            (a = se.tokenize = function(e, t) {
              var n,
                i,
                o,
                a,
                s,
                u,
                c,
                l = E[e + " "];
              if (l) return t ? 0 : l.slice(0);
              for (s = e, u = [], c = r.preFilter; s; ) {
                for (a in ((n && !(i = F.exec(s))) ||
                  (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                (n = !1),
                (i = U.exec(s)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(B, " ") }),
                  (s = s.slice(n.length))),
                r.filter))
                  !(i = G[a].exec(s)) ||
                    (c[a] && !(i = c[a](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: a, matches: i }),
                    (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? se.error(e) : E(e, u).slice(0);
            }),
            (s = se.compile = function(e, t) {
              var n,
                i = [],
                o = [],
                s = S[e + " "];
              if (!s) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (s = Ce(t[n]))[b] ? i.push(s) : o.push(s);
                (s = S(
                  e,
                  (function(e, t) {
                    var n = t.length > 0,
                      i = e.length > 0,
                      o = function(o, a, s, u, l) {
                        var f,
                          h,
                          g,
                          m = 0,
                          v = "0",
                          x = o && [],
                          b = [],
                          w = c,
                          k = o || (i && r.find.TAG("*", l)),
                          C = (T += null == w ? 1 : Math.random() || 0.1),
                          E = k.length;
                        for (
                          l && (c = a === p || a || l);
                          v !== E && null != (f = k[v]);
                          v++
                        ) {
                          if (i && f) {
                            for (
                              h = 0,
                                a || f.ownerDocument === p || (d(f), (s = !y));
                              (g = e[h++]);

                            )
                              if (g(f, a || p, s)) {
                                u.push(f);
                                break;
                              }
                            l && (T = C);
                          }
                          n && ((f = !g && f) && m--, o && x.push(f));
                        }
                        if (((m += v), n && v !== m)) {
                          for (h = 0; (g = t[h++]); ) g(x, b, a, s);
                          if (o) {
                            if (m > 0)
                              for (; v--; ) x[v] || b[v] || (b[v] = L.call(u));
                            b = Te(b);
                          }
                          _.apply(u, b),
                            l &&
                              !o &&
                              b.length > 0 &&
                              m + t.length > 1 &&
                              se.uniqueSort(u);
                        }
                        return l && ((T = C), (c = w)), x;
                      };
                    return n ? ce(o) : o;
                  })(o, i)
                )).selector = e;
              }
              return s;
            }),
            (u = se.select = function(e, t, n, i) {
              var o,
                u,
                c,
                l,
                f,
                d = "function" == typeof e && e,
                p = !i && a((e = d.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (u = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (c = u[0]).type &&
                  9 === t.nodeType &&
                  y &&
                  r.relative[u[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(u.shift().value.length));
                }
                for (
                  o = G.needsContext.test(e) ? 0 : u.length;
                  o-- && ((c = u[o]), !r.relative[(l = c.type)]);

                )
                  if (
                    (f = r.find[l]) &&
                    (i = f(
                      c.matches[0].replace(te, ne),
                      (ee.test(u[0].type) && me(t.parentNode)) || t
                    ))
                  ) {
                    if ((u.splice(o, 1), !(e = i.length && xe(u))))
                      return _.apply(n, i), n;
                    break;
                  }
              }
              return (
                (d || s(e, p))(
                  i,
                  t,
                  !y,
                  n,
                  !t || (ee.test(e) && me(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable =
              b
                .split("")
                .sort(A)
                .join("") === b),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = le(function(e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            le(function(e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function(e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              le(function(e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            le(function(e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(H, function(e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(n);
      (k.find = S),
        (k.expr = S.selectors),
        (k.expr[":"] = k.expr.pseudos),
        (k.uniqueSort = k.unique = S.uniqueSort),
        (k.text = S.getText),
        (k.isXMLDoc = S.isXML),
        (k.contains = S.contains),
        (k.escapeSelector = S.escape);
      var N = function(e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && k(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        A = function(e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        j = k.expr.match.needsContext;
      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function q(e, t, n) {
        return v(t)
          ? k.grep(e, function(e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? k.grep(e, function(e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? k.grep(e, function(e) {
              return f.call(t, e) > -1 !== n;
            })
          : k.filter(t, e, n);
      }
      (k.filter = function(e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? k.find.matchesSelector(r, e)
              ? [r]
              : []
            : k.find.matches(
                e,
                k.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        k.fn.extend({
          find: function(e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                k(e).filter(function() {
                  for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return r > 1 ? k.uniqueSort(n) : n;
          },
          filter: function(e) {
            return this.pushStack(q(this, e || [], !1));
          },
          not: function(e) {
            return this.pushStack(q(this, e || [], !0));
          },
          is: function(e) {
            return !!q(
              this,
              "string" == typeof e && j.test(e) ? k(e) : e || [],
              !1
            ).length;
          }
        });
      var _,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || _), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : O.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof k ? t[0] : t),
              k.merge(
                this,
                k.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : a,
                  !0
                )
              ),
              L.test(r[1]) && k.isPlainObject(t))
            )
              for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = a.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : v(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(k)
          : k.makeArray(e, this);
      }).prototype = k.fn),
        (_ = k(a));
      var P = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      k.fn.extend({
        has: function(e) {
          var t = k(e, this),
            n = t.length;
          return this.filter(function() {
            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
          });
        },
        closest: function(e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && k(e);
          if (!j.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && k.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
        },
        index: function(e) {
          return e
            ? "string" == typeof e
              ? f.call(k(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function(e, t) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function(e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }
      }),
        k.each(
          {
            parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
              return N(e, "parentNode");
            },
            parentsUntil: function(e, t, n) {
              return N(e, "parentNode", n);
            },
            next: function(e) {
              return R(e, "nextSibling");
            },
            prev: function(e) {
              return R(e, "previousSibling");
            },
            nextAll: function(e) {
              return N(e, "nextSibling");
            },
            prevAll: function(e) {
              return N(e, "previousSibling");
            },
            nextUntil: function(e, t, n) {
              return N(e, "nextSibling", n);
            },
            prevUntil: function(e, t, n) {
              return N(e, "previousSibling", n);
            },
            siblings: function(e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
              return A(e.firstChild);
            },
            contents: function(e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (D(e, "template") && (e = e.content || e),
                  k.merge([], e.childNodes));
            }
          },
          function(e, t) {
            k.fn[e] = function(n, r) {
              var i = k.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = k.filter(r, i)),
                this.length > 1 &&
                  (H[e] || k.uniqueSort(i), P.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function $(e) {
        return e;
      }
      function M(e) {
        throw e;
      }
      function W(e, t, n, r) {
        var i;
        try {
          e && v((i = e.promise))
            ? i
                .call(e)
                .done(t)
                .fail(n)
            : e && v((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (k.Callbacks = function(e) {
        e =
          "string" == typeof e
            ? (function(e) {
                var t = {};
                return (
                  k.each(e.match(I) || [], function(e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : k.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function() {
            for (i = i || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; )
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          c = {
            add: function() {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    k.each(n, function(n, r) {
                      v(r)
                        ? (e.unique && c.has(r)) || o.push(r)
                        : r && r.length && "string" !== T(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function() {
              return (
                k.each(arguments, function(e, t) {
                  for (var n; (n = k.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function(e) {
              return e ? k.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
              return o && (o = []), this;
            },
            disable: function() {
              return (i = a = []), (o = n = ""), this;
            },
            disabled: function() {
              return !o;
            },
            lock: function() {
              return (i = a = []), n || t || (o = n = ""), this;
            },
            locked: function() {
              return !!i;
            },
            fireWith: function(e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
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
        k.extend({
          Deferred: function(e) {
            var t = [
                [
                  "notify",
                  "progress",
                  k.Callbacks("memory"),
                  k.Callbacks("memory"),
                  2
                ],
                [
                  "resolve",
                  "done",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  0,
                  "resolved"
                ],
                [
                  "reject",
                  "fail",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  1,
                  "rejected"
                ]
              ],
              r = "pending",
              i = {
                state: function() {
                  return r;
                },
                always: function() {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                  return i.then(null, e);
                },
                pipe: function() {
                  var e = arguments;
                  return k
                    .Deferred(function(n) {
                      k.each(t, function(t, r) {
                        var i = v(e[r[4]]) && e[r[4]];
                        o[r[1]](function() {
                          var e = i && i.apply(this, arguments);
                          e && v(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function(e, r, i) {
                  var o = 0;
                  function a(e, t, r, i) {
                    return function() {
                      var s = this,
                        u = arguments,
                        c = function() {
                          var n, c;
                          if (!(e < o)) {
                            if ((n = r.apply(s, u)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              v(c)
                                ? i
                                  ? c.call(n, a(o, t, $, i), a(o, t, M, i))
                                  : (o++,
                                    c.call(
                                      n,
                                      a(o, t, $, i),
                                      a(o, t, M, i),
                                      a(o, t, $, t.notifyWith)
                                    ))
                                : (r !== $ && ((s = void 0), (u = [n])),
                                  (i || t.resolveWith)(s, u));
                          }
                        },
                        l = i
                          ? c
                          : function() {
                              try {
                                c();
                              } catch (n) {
                                k.Deferred.exceptionHook &&
                                  k.Deferred.exceptionHook(n, l.stackTrace),
                                  e + 1 >= o &&
                                    (r !== M && ((s = void 0), (u = [n])),
                                    t.rejectWith(s, u));
                              }
                            };
                      e
                        ? l()
                        : (k.Deferred.getStackHook &&
                            (l.stackTrace = k.Deferred.getStackHook()),
                          n.setTimeout(l));
                    };
                  }
                  return k
                    .Deferred(function(n) {
                      t[0][3].add(a(0, n, v(i) ? i : $, n.notifyWith)),
                        t[1][3].add(a(0, n, v(e) ? e : $)),
                        t[2][3].add(a(0, n, v(r) ? r : M));
                    })
                    .promise();
                },
                promise: function(e) {
                  return null != e ? k.extend(e, i) : i;
                }
              },
              o = {};
            return (
              k.each(t, function(e, n) {
                var a = n[2],
                  s = n[5];
                (i[n[1]] = a.add),
                  s &&
                    a.add(
                      function() {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function() {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function(e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = u.call(arguments),
              o = k.Deferred(),
              a = function(e) {
                return function(n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? u.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (W(e, o.done(a(n)).resolve, o.reject, !t),
              "pending" === o.state() || v(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) W(i[n], a(n), o.reject);
            return o.promise();
          }
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (k.Deferred.exceptionHook = function(e, t) {
        n.console &&
          n.console.warn &&
          e &&
          B.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (k.readyException = function(e) {
          n.setTimeout(function() {
            throw e;
          });
        });
      var F = k.Deferred();
      function U() {
        a.removeEventListener("DOMContentLoaded", U),
          n.removeEventListener("load", U),
          k.ready();
      }
      (k.fn.ready = function(e) {
        return (
          F.then(e).catch(function(e) {
            k.readyException(e);
          }),
          this
        );
      }),
        k.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) ||
              ((k.isReady = !0),
              (!0 !== e && --k.readyWait > 0) || F.resolveWith(a, [k]));
          }
        }),
        (k.ready.then = F.then),
        "complete" === a.readyState ||
        ("loading" !== a.readyState && !a.documentElement.doScroll)
          ? n.setTimeout(k.ready)
          : (a.addEventListener("DOMContentLoaded", U),
            n.addEventListener("load", U));
      var z = function(e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            c = null == n;
          if ("object" === T(n))
            for (s in ((i = !0), n)) z(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            v(r) || (a = !0),
            c &&
              (a
                ? (t.call(e, r), (t = null))
                : ((c = t),
                  (t = function(e, t, n) {
                    return c.call(k(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
        },
        Y = /^-ms-/,
        X = /-([a-z])/g;
      function G(e, t) {
        return t.toUpperCase();
      }
      function V(e) {
        return e.replace(Y, "ms-").replace(X, G);
      }
      var J = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Q() {
        this.expando = k.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function(e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                J(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                      }))),
              t
            );
          },
          set: function(e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else for (r in t) i[V(r)] = t[r];
            return i;
          },
          get: function(e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][V(t)];
          },
          access: function(e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function(e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(V)
                  : (t = V(t)) in r
                  ? [t]
                  : t.match(I) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || k.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t);
          }
        });
      var K = new Q(),
        Z = new Q(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function(e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : ee.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      k.extend({
        hasData: function(e) {
          return Z.hasData(e) || K.hasData(e);
        },
        data: function(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function(e, t) {
          Z.remove(e, t);
        },
        _data: function(e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function(e, t) {
          K.remove(e, t);
        }
      }),
        k.fn.extend({
          data: function(e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = Z.get(o)), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = V(r.slice(5))), ne(o, r, i[r]));
                K.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function() {
                  Z.set(this, e);
                })
              : z(
                  this,
                  function(t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = Z.get(o, e))
                        ? n
                        : void 0 !== (n = ne(o, e))
                        ? n
                        : void 0;
                    this.each(function() {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function(e) {
            return this.each(function() {
              Z.remove(this, e);
            });
          }
        }),
        k.extend({
          queue: function(e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = K.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = K.access(e, t, k.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = k._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function() {
                    k.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return (
              K.get(e, n) ||
              K.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                  K.remove(e, [t + "queue", n]);
                })
              })
            );
          }
        }),
        k.fn.extend({
          queue: function(e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? k.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function() {
                    var n = k.queue(this, e, t);
                    k._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
                  })
            );
          },
          dequeue: function(e) {
            return this.each(function() {
              k.dequeue(this, e);
            });
          },
          clearQueue: function(e) {
            return this.queue(e || "fx", []);
          },
          promise: function(e, t) {
            var n,
              r = 1,
              i = k.Deferred(),
              o = this,
              a = this.length,
              s = function() {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = K.get(o[a], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), i.promise(t);
          }
        });
      var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = a.documentElement,
        se = function(e) {
          return k.contains(e.ownerDocument, e);
        },
        ue = { composed: !0 };
      ae.getRootNode &&
        (se = function(e) {
          return (
            k.contains(e.ownerDocument, e) ||
            e.getRootNode(ue) === e.ownerDocument
          );
        });
      var ce = function(e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && se(e) && "none" === k.css(e, "display"))
          );
        },
        le = function(e, t, n, r) {
          var i,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
          return i;
        };
      function fe(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function() {
                return r.cur();
              }
            : function() {
                return k.css(e, t, "");
              },
          u = s(),
          c = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
          l =
            e.nodeType &&
            (k.cssNumber[t] || ("px" !== c && +u)) &&
            ie.exec(k.css(e, t));
        if (l && l[3] !== c) {
          for (u /= 2, c = c || l[3], l = +u || 1; a--; )
            k.style(e, t, l + c),
              (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
              (l /= o);
          (l *= 2), k.style(e, t, l + c), (n = n || []);
        }
        return (
          n &&
            ((l = +l || +u || 0),
            (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = l), (r.end = i))),
          i
        );
      }
      var de = {};
      function pe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = de[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = k.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (de[r] = i),
          i)
        );
      }
      function he(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = K.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && ce(r) && (i[o] = pe(r)))
              : "none" !== n && ((i[o] = "none"), K.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      k.fn.extend({
        show: function() {
          return he(this, !0);
        },
        hide: function() {
          return he(this);
        },
        toggle: function(e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function() {
                ce(this) ? k(this).show() : k(this).hide();
              });
        }
      });
      var ye = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i,
        ve = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
      function xe(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && D(e, t)) ? k.merge([e], n) : n
        );
      }
      function be(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
      (ve.optgroup = ve.option),
        (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
        (ve.th = ve.td);
      var we,
        Te,
        ke = /<|&#?\w+;/;
      function Ce(e, t, n, r, i) {
        for (
          var o,
            a,
            s,
            u,
            c,
            l,
            f = t.createDocumentFragment(),
            d = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((o = e[p]) || 0 === o)
            if ("object" === T(o)) k.merge(d, o.nodeType ? [o] : o);
            else if (ke.test(o)) {
              for (
                a = a || f.appendChild(t.createElement("div")),
                  s = (ge.exec(o) || ["", ""])[1].toLowerCase(),
                  u = ve[s] || ve._default,
                  a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                  l = u[0];
                l--;

              )
                a = a.lastChild;
              k.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
            } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; (o = d[p++]); )
          if (r && k.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((c = se(o)), (a = xe(f.appendChild(o), "script")), c && be(a), n)
          )
            for (l = 0; (o = a[l++]); ) me.test(o.type || "") && n.push(o);
        return f;
      }
      (we = a.createDocumentFragment().appendChild(a.createElement("div"))),
        (Te = a.createElement("input")).setAttribute("type", "radio"),
        Te.setAttribute("checked", "checked"),
        Te.setAttribute("name", "t"),
        we.appendChild(Te),
        (m.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (we.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue);
      var Ee = /^key/,
        Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ne = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function je() {
        return !1;
      }
      function De(e, t) {
        return (
          (e ===
            (function() {
              try {
                return a.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Le(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = je;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            ((i = function(e) {
              return k().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = k.guid++))),
          e.each(function() {
            k.event.add(this, t, i, r, n);
          })
        );
      }
      function qe(e, t, n) {
        n
          ? (K.set(e, t, !1),
            k.event.add(e, t, {
              namespace: !1,
              handler: function(e) {
                var r,
                  i,
                  o = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (k.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = u.call(arguments)),
                    K.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = K.get(this, t)) || r
                      ? K.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (K.set(this, t, {
                      value: k.event.trigger(
                        k.extend(o[0], k.Event.prototype),
                        o.slice(1),
                        this
                      )
                    }),
                    e.stopImmediatePropagation());
              }
            }))
          : void 0 === K.get(e, t) && k.event.add(e, t, Ae);
      }
      (k.event = {
        global: {},
        add: function(e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            y,
            g = K.get(e);
          if (g)
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && k.find.matchesSelector(ae, i),
                n.guid || (n.guid = k.guid++),
                (u = g.events) || (u = g.events = {}),
                (a = g.handle) ||
                  (a = g.handle = function(t) {
                    return void 0 !== k && k.event.triggered !== t.type
                      ? k.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                c = (t = (t || "").match(I) || [""]).length;
              c--;

            )
              (p = y = (s = Ne.exec(t[c]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p &&
                  ((f = k.event.special[p] || {}),
                  (p = (i ? f.delegateType : f.bindType) || p),
                  (f = k.event.special[p] || {}),
                  (l = k.extend(
                    {
                      type: p,
                      origType: y,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && k.expr.match.needsContext.test(i),
                      namespace: h.join(".")
                    },
                    o
                  )),
                  (d = u[p]) ||
                    (((d = u[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(p, a))),
                  f.add &&
                    (f.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                  (k.event.global[p] = !0));
        },
        remove: function(e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            y,
            g = K.hasData(e) && K.get(e);
          if (g && (u = g.events)) {
            for (c = (t = (t || "").match(I) || [""]).length; c--; )
              if (
                ((p = y = (s = Ne.exec(t[c]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  f = k.event.special[p] || {},
                    d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = d.length;
                  o--;

                )
                  (l = d[o]),
                    (!i && y !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (s && !s.test(l.namespace)) ||
                      (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                      (d.splice(o, 1),
                      l.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, l));
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                    k.removeEvent(e, p, g.handle),
                  delete u[p]);
              } else for (p in u) k.event.remove(e, p + t[c], n, r, !0);
            k.isEmptyObject(u) && K.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = k.event.fix(e),
            u = new Array(arguments.length),
            c = (K.get(this, "events") || {})[s.type] || [],
            l = k.event.special[s.type] || {};
          for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
          if (
            ((s.delegateTarget = this),
            !l.preDispatch || !1 !== l.preDispatch.call(this, s))
          ) {
            for (
              a = k.event.handlers.call(this, s, c), t = 0;
              (i = a[t++]) && !s.isPropagationStopped();

            )
              for (
                s.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

              )
                (s.rnamespace &&
                  !1 !== o.namespace &&
                  !s.rnamespace.test(o.namespace)) ||
                  ((s.handleObj = o),
                  (s.data = o.data),
                  void 0 !==
                    (r = (
                      (k.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, u)) &&
                    !1 === (s.result = r) &&
                    (s.preventDefault(), s.stopPropagation()));
            return l.postDispatch && l.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function(e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            c = e.target;
          if (u && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(i = (r = t[n]).selector + " ")] &&
                    (a[i] = r.needsContext
                      ? k(i, this).index(c) > -1
                      : k.find(i, this, null, [c]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function(e, t) {
          Object.defineProperty(k.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function() {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function(e) {
          return e[k.expando] ? e : new k.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function(e) {
              var t = this || e;
              return (
                ye.test(t.type) &&
                  t.click &&
                  D(t, "input") &&
                  qe(t, "click", Ae),
                !1
              );
            },
            trigger: function(e) {
              var t = this || e;
              return (
                ye.test(t.type) && t.click && D(t, "input") && qe(t, "click"),
                !0
              );
            },
            _default: function(e) {
              var t = e.target;
              return (
                (ye.test(t.type) &&
                  t.click &&
                  D(t, "input") &&
                  K.get(t, "click")) ||
                D(t, "a")
              );
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }),
        (k.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (k.Event = function(e, t) {
          if (!(this instanceof k.Event)) return new k.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : je),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && k.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[k.expando] = !0);
        }),
        (k.Event.prototype = {
          constructor: k.Event,
          isDefaultPrevented: je,
          isPropagationStopped: je,
          isImmediatePropagationStopped: je,
          isSimulated: !1,
          preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        k.each(
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
            which: function(e) {
              var t = e.button;
              return null == e.which && Ee.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Se.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            }
          },
          k.event.addProp
        ),
        k.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
          k.event.special[e] = {
            setup: function() {
              return qe(this, e, De), !1;
            },
            trigger: function() {
              return qe(this, e), !0;
            },
            delegateType: t
          };
        }),
        k.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          },
          function(e, t) {
            k.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                var n,
                  r = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (r && (r === this || k.contains(this, r))) ||
                    ((e.type = i.origType),
                    (n = i.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        k.fn.extend({
          on: function(e, t, n, r) {
            return Le(this, e, t, n, r);
          },
          one: function(e, t, n, r) {
            return Le(this, e, t, n, r, 1);
          },
          off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                k(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = je),
              this.each(function() {
                k.event.remove(this, e, n, t);
              })
            );
          }
        });
      var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Re(e, t) {
        return (
          (D(e, "table") &&
            D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            k(e).children("tbody")[0]) ||
          e
        );
      }
      function Ie(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function $e(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Me(e, t) {
        var n, r, i, o, a, s, u, c;
        if (1 === t.nodeType) {
          if (
            K.hasData(e) &&
            ((o = K.access(e)), (a = K.set(t, o)), (c = o.events))
          )
            for (i in (delete a.handle, (a.events = {}), c))
              for (n = 0, r = c[i].length; n < r; n++)
                k.event.add(t, i, c[i][n]);
          Z.hasData(e) &&
            ((s = Z.access(e)), (u = k.extend({}, s)), Z.set(t, u));
        }
      }
      function We(e, t, n, r) {
        t = c.apply([], t);
        var i,
          o,
          a,
          s,
          u,
          l,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          y = v(h);
        if (y || (d > 1 && "string" == typeof h && !m.checkClone && Pe.test(h)))
          return e.each(function(i) {
            var o = e.eq(i);
            y && (t[0] = h.call(this, i, o.html())), We(o, t, n, r);
          });
        if (
          d &&
          ((o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (s = (a = k.map(xe(i, "script"), Ie)).length; f < d; f++)
            (u = i),
              f !== p &&
                ((u = k.clone(u, !0, !0)), s && k.merge(a, xe(u, "script"))),
              n.call(e[f], u, f);
          if (s)
            for (
              l = a[a.length - 1].ownerDocument, k.map(a, $e), f = 0;
              f < s;
              f++
            )
              (u = a[f]),
                me.test(u.type || "") &&
                  !K.access(u, "globalEval") &&
                  k.contains(l, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase()
                    ? k._evalUrl &&
                      !u.noModule &&
                      k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                      })
                    : w(u.textContent.replace(He, ""), u, l));
        }
        return e;
      }
      function Be(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || k.cleanData(xe(r)),
            r.parentNode &&
              (n && se(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      k.extend({
        htmlPrefilter: function(e) {
          return e.replace(_e, "<$1></$2>");
        },
        clone: function(e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l = e.cloneNode(!0),
            f = se(e);
          if (
            !(
              m.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              k.isXMLDoc(e)
            )
          )
            for (a = xe(l), r = 0, i = (o = xe(e)).length; r < i; r++)
              (s = o[r]),
                void 0,
                "input" === (c = (u = a[r]).nodeName.toLowerCase()) &&
                ye.test(s.type)
                  ? (u.checked = s.checked)
                  : ("input" !== c && "textarea" !== c) ||
                    (u.defaultValue = s.defaultValue);
          if (t)
            if (n)
              for (
                o = o || xe(e), a = a || xe(l), r = 0, i = o.length;
                r < i;
                r++
              )
                Me(o[r], a[r]);
            else Me(e, l);
          return (
            (a = xe(l, "script")).length > 0 && be(a, !f && xe(e, "script")), l
          );
        },
        cleanData: function(e) {
          for (
            var t, n, r, i = k.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (J(n)) {
              if ((t = n[K.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                n[K.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        }
      }),
        k.fn.extend({
          detach: function(e) {
            return Be(this, e, !0);
          },
          remove: function(e) {
            return Be(this, e);
          },
          text: function(e) {
            return z(
              this,
              function(e) {
                return void 0 === e
                  ? k.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function() {
            return We(this, arguments, function(e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Re(this, e).appendChild(e);
            });
          },
          prepend: function() {
            return We(this, arguments, function(e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Re(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function() {
            return We(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function() {
            return We(this, arguments, function(e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (k.cleanData(xe(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function(e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function() {
                return k.clone(this, e, t);
              })
            );
          },
          html: function(e) {
            return z(
              this,
              function(e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Oe.test(e) &&
                  !ve[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = k.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (k.cleanData(xe(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function() {
            var e = [];
            return We(
              this,
              arguments,
              function(t) {
                var n = this.parentNode;
                k.inArray(this, e) < 0 &&
                  (k.cleanData(xe(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        k.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          },
          function(e, t) {
            k.fn[e] = function(e) {
              for (
                var n, r = [], i = k(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  k(i[a])[t](n),
                  l.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Fe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        Ue = function(e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        ze = new RegExp(oe.join("|"), "i");
      function Ye(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || Ue(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              se(e) ||
              (a = k.style(e, t)),
            !m.pixelBoxStyles() &&
              Fe.test(a) &&
              ze.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function Xe(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function() {
        function e() {
          if (l) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (l.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ae.appendChild(c).appendChild(l);
            var e = n.getComputedStyle(l);
            (r = "1%" !== e.top),
              (u = 12 === t(e.marginLeft)),
              (l.style.right = "60%"),
              (s = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (l.style.position = "absolute"),
              (o = 12 === t(l.offsetWidth / 3)),
              ae.removeChild(c),
              (l = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          s,
          u,
          c = a.createElement("div"),
          l = a.createElement("div");
        l.style &&
          ((l.style.backgroundClip = "content-box"),
          (l.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
          k.extend(m, {
            boxSizingReliable: function() {
              return e(), i;
            },
            pixelBoxStyles: function() {
              return e(), s;
            },
            pixelPosition: function() {
              return e(), r;
            },
            reliableMarginLeft: function() {
              return e(), u;
            },
            scrollboxSize: function() {
              return e(), o;
            }
          }));
      })();
      var Ge = ["Webkit", "Moz", "ms"],
        Ve = a.createElement("div").style,
        Je = {};
      function Qe(e) {
        return (
          k.cssProps[e] ||
          Je[e] ||
          (e in Ve
            ? e
            : (Je[e] =
                (function(e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                    n--;

                  )
                    if ((e = Ge[n] + t) in Ve) return e;
                })(e) || e))
        );
      }
      var Ke = /^(none|table(?!-c[ea]).+)/,
        Ze = /^--/,
        et = { position: "absolute", visibility: "hidden", display: "block" },
        tt = { letterSpacing: "0", fontWeight: "400" };
      function nt(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function rt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += k.css(e, n + oe[a], !0, i)),
            r
              ? ("content" === n && (u -= k.css(e, "padding" + oe[a], !0, i)),
                "margin" !== n &&
                  (u -= k.css(e, "border" + oe[a] + "Width", !0, i)))
              : ((u += k.css(e, "padding" + oe[a], !0, i)),
                "padding" !== n
                  ? (u += k.css(e, "border" + oe[a] + "Width", !0, i))
                  : (s += k.css(e, "border" + oe[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    u -
                    s -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function it(e, t, n) {
        var r = Ue(e),
          i =
            (!m.boxSizingReliable() || n) &&
            "border-box" === k.css(e, "boxSizing", !1, r),
          o = i,
          a = Ye(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!m.boxSizingReliable() && i) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
            (o = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            rt(e, t, n || (i ? "border" : "content"), o, r, a) +
            "px"
        );
      }
      function ot(e, t, n, r, i) {
        return new ot.prototype.init(e, t, n, r, i);
      }
      k.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = Ye(e, "opacity");
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
        style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = V(t),
              u = Ze.test(t),
              c = e.style;
            if (
              (u || (t = Qe(s)),
              (a = k.cssHooks[t] || k.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : c[t];
            "string" == (o = typeof n) &&
              (i = ie.exec(n)) &&
              i[1] &&
              ((n = fe(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  u ||
                  (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function(e, t, n, r) {
          var i,
            o,
            a,
            s = V(t);
          return (
            Ze.test(t) || (t = Qe(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) &&
              "get" in a &&
              (i = a.get(e, !0, n)),
            void 0 === i && (i = Ye(e, t, r)),
            "normal" === i && t in tt && (i = tt[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        }
      }),
        k.each(["height", "width"], function(e, t) {
          k.cssHooks[t] = {
            get: function(e, n, r) {
              if (n)
                return !Ke.test(k.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? it(e, t, r)
                  : le(e, et, function() {
                      return it(e, t, r);
                    });
            },
            set: function(e, n, r) {
              var i,
                o = Ue(e),
                a = !m.scrollboxSize() && "absolute" === o.position,
                s = (a || r) && "border-box" === k.css(e, "boxSizing", !1, o),
                u = r ? rt(e, t, r, s, o) : 0;
              return (
                s &&
                  a &&
                  (u -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      rt(e, t, "border", !1, o) -
                      0.5
                  )),
                u &&
                  (i = ie.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = k.css(e, t))),
                nt(0, n, u)
              );
            }
          };
        }),
        (k.cssHooks.marginLeft = Xe(m.reliableMarginLeft, function(e, t) {
          if (t)
            return (
              (parseFloat(Ye(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  le(e, { marginLeft: 0 }, function() {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        k.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
          (k.cssHooks[e + t] = {
            expand: function(n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            }
          }),
            "margin" !== e && (k.cssHooks[e + t].set = nt);
        }),
        k.fn.extend({
          css: function(e, t) {
            return z(
              this,
              function(e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = Ue(e), i = t.length; a < i; a++)
                    o[t[a]] = k.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          }
        }),
        (k.Tween = ot),
        (ot.prototype = {
          constructor: ot,
          init: function(e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || k.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (k.cssNumber[n] ? "" : "px"));
          },
          cur: function() {
            var e = ot.propHooks[this.prop];
            return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
          },
          run: function(e) {
            var t,
              n = ot.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = k.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ot.propHooks._default.set(this),
              this
            );
          }
        }),
        (ot.prototype.init.prototype = ot.prototype),
        (ot.propHooks = {
          _default: {
            get: function(e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function(e) {
              k.fx.step[e.prop]
                ? k.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!k.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : k.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        (ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
          set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }),
        (k.easing = {
          linear: function(e) {
            return e;
          },
          swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing"
        }),
        (k.fx = ot.prototype.init),
        (k.fx.step = {});
      var at,
        st,
        ut = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;
      function lt() {
        st &&
          (!1 === a.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(lt)
            : n.setTimeout(lt, k.fx.interval),
          k.fx.tick());
      }
      function ft() {
        return (
          n.setTimeout(function() {
            at = void 0;
          }),
          (at = Date.now())
        );
      }
      function dt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function pt(e, t, n) {
        for (
          var r,
            i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function ht(e, t, n) {
        var r,
          i,
          o = 0,
          a = ht.prefilters.length,
          s = k.Deferred().always(function() {
            delete u.elem;
          }),
          u = function() {
            if (i) return !1;
            for (
              var t = at || ft(),
                n = Math.max(0, c.startTime + c.duration - t),
                r = 1 - (n / c.duration || 0),
                o = 0,
                a = c.tweens.length;
              o < a;
              o++
            )
              c.tweens[o].run(r);
            return (
              s.notifyWith(e, [c, r, n]),
              r < 1 && a
                ? n
                : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            );
          },
          c = s.promise({
            elem: e,
            props: k.extend({}, t),
            opts: k.extend(
              !0,
              { specialEasing: {}, easing: k.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: at || ft(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var r = k.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function(t) {
              var n = 0,
                r = t ? c.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) c.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                  : s.rejectWith(e, [c, t]),
                this
              );
            }
          }),
          l = c.props;
        for (
          (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (
                ((i = t[(r = V(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = k.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(l, c.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = ht.prefilters[o].call(c, e, l, c.opts)))
            return (
              v(r.stop) &&
                (k._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          k.map(l, pt, c),
          v(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          k.fx.timer(k.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (k.Animation = k.extend(ht, {
        tweeners: {
          "*": [
            function(e, t) {
              var n = this.createTween(e, t);
              return fe(n.elem, e, ie.exec(t), n), n;
            }
          ]
        },
        tweener: function(e, t) {
          v(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (ht.tweeners[n] = ht.tweeners[n] || []),
              ht.tweeners[n].unshift(t);
        },
        prefilters: [
          function(e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f = "width" in t || "height" in t,
              d = this,
              p = {},
              h = e.style,
              y = e.nodeType && ce(e),
              g = K.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (a = k._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function() {
                  a.unqueued || s();
                })),
              a.unqueued++,
              d.always(function() {
                d.always(function() {
                  a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), ut.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (y ? "hide" : "show"))
                ) {
                  if ("show" !== i || !g || void 0 === g[r]) continue;
                  y = !0;
                }
                p[r] = (g && g[r]) || k.style(e, r);
              }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = g && g.display) && (c = K.get(e, "display")),
                "none" === (l = k.css(e, "display")) &&
                  (c
                    ? (l = c)
                    : (he([e], !0),
                      (c = e.style.display || c),
                      (l = k.css(e, "display")),
                      he([e]))),
                ("inline" === l || ("inline-block" === l && null != c)) &&
                  "none" === k.css(e, "float") &&
                  (u ||
                    (d.done(function() {
                      h.display = c;
                    }),
                    null == c &&
                      ((l = h.display), (c = "none" === l ? "" : l))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                d.always(function() {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              p))
                u ||
                  (g
                    ? "hidden" in g && (y = g.hidden)
                    : (g = K.access(e, "fxshow", { display: c })),
                  o && (g.hidden = !y),
                  y && he([e], !0),
                  d.done(function() {
                    for (r in (y || he([e]), K.remove(e, "fxshow"), p))
                      k.style(e, r, p[r]);
                  })),
                  (u = pt(y ? g[r] : 0, r, d)),
                  r in g ||
                    ((g[r] = u.start), y && ((u.end = u.start), (u.start = 0)));
          }
        ],
        prefilter: function(e, t) {
          t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
        }
      })),
        (k.speed = function(e, t, n) {
          var r =
            e && "object" == typeof e
              ? k.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t)
                };
          return (
            k.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in k.fx.speeds
                  ? (r.duration = k.fx.speeds[r.duration])
                  : (r.duration = k.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function() {
              v(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
            }),
            r
          );
        }),
        k.fn.extend({
          fadeTo: function(e, t, n, r) {
            return this.filter(ce)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function(e, t, n, r) {
            var i = k.isEmptyObject(e),
              o = k.speed(t, n, r),
              a = function() {
                var t = ht(this, k.extend({}, e), o);
                (i || K.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function(e, t, n) {
            var r = function(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function() {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = k.timers,
                  a = K.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && ct.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || k.dequeue(this, e);
              })
            );
          },
          finish: function(e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function() {
                var t,
                  n = K.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = k.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    k.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        k.each(["toggle", "show", "hide"], function(e, t) {
          var n = k.fn[t];
          k.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(dt(t, !0), e, r, i);
          };
        }),
        k.each(
          {
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          },
          function(e, t) {
            k.fn[e] = function(e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (k.timers = []),
        (k.fx.tick = function() {
          var e,
            t = 0,
            n = k.timers;
          for (at = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || k.fx.stop(), (at = void 0);
        }),
        (k.fx.timer = function(e) {
          k.timers.push(e), k.fx.start();
        }),
        (k.fx.interval = 13),
        (k.fx.start = function() {
          st || ((st = !0), lt());
        }),
        (k.fx.stop = function() {
          st = null;
        }),
        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (k.fn.delay = function(e, t) {
          return (
            (e = (k.fx && k.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function(t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function() {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function() {
          var e = a.createElement("input"),
            t = a
              .createElement("select")
              .appendChild(a.createElement("option"));
          (e.type = "checkbox"),
            (m.checkOn = "" !== e.value),
            (m.optSelected = t.selected),
            ((e = a.createElement("input")).value = "t"),
            (e.type = "radio"),
            (m.radioValue = "t" === e.value);
        })();
      var yt,
        gt = k.expr.attrHandle;
      k.fn.extend({
        attr: function(e, t) {
          return z(this, k.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            k.removeAttr(this, e);
          });
        }
      }),
        k.extend({
          attr: function(e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? k.prop(e, t, n)
                : ((1 === o && k.isXMLDoc(e)) ||
                    (i =
                      k.attrHooks[t.toLowerCase()] ||
                      (k.expr.match.bool.test(t) ? yt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void k.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = k.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function(e, t) {
                if (!m.radioValue && "radio" === t && D(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function(e, t) {
            var n,
              r = 0,
              i = t && t.match(I);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          }
        }),
        (yt = {
          set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }),
        k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = gt[t] || k.find.attr;
          gt[t] = function(e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return (
              r ||
                ((o = gt[a]),
                (gt[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (gt[a] = o)),
              i
            );
          };
        });
      var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
      function xt(e) {
        return (e.match(I) || []).join(" ");
      }
      function bt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function wt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(I)) || [];
      }
      k.fn.extend({
        prop: function(e, t) {
          return z(this, k.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[k.propFix[e] || e];
          });
        }
      }),
        k.extend({
          prop: function(e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && k.isXMLDoc(e)) ||
                  ((t = k.propFix[t] || t), (i = k.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(e) {
                var t = k.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              }
            }
          },
          propFix: { for: "htmlFor", class: "className" }
        }),
        m.optSelected ||
          (k.propHooks.selected = {
            get: function(e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        k.each(
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
            k.propFix[this.toLowerCase()] = this;
          }
        ),
        k.fn.extend({
          addClass: function(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (v(e))
              return this.each(function(t) {
                k(this).addClass(e.call(this, t, bt(this)));
              });
            if ((t = wt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = bt(n)), (r = 1 === n.nodeType && " " + xt(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (s = xt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (v(e))
              return this.each(function(t) {
                k(this).removeClass(e.call(this, t, bt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = wt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = bt(n)), (r = 1 === n.nodeType && " " + xt(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (s = xt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function(e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : v(e)
              ? this.each(function(n) {
                  k(this).toggleClass(e.call(this, n, bt(this), t), t);
                })
              : this.each(function() {
                  var t, i, o, a;
                  if (r)
                    for (i = 0, o = k(this), a = wt(e); (t = a[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = bt(this)) && K.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : K.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function(e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + xt(bt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          }
        });
      var Tt = /\r/g;
      k.fn.extend({
        val: function(e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = v(e)),
              this.each(function(n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, k(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = k.map(i, function(e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    k.valHooks[this.type] ||
                    k.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(Tt, "")
              : null == n
              ? ""
              : n
            : void 0;
        }
      }),
        k.extend({
          valHooks: {
            option: {
              get: function(e) {
                var t = k.find.attr(e, "value");
                return null != t ? t : xt(k.text(e));
              }
            },
            select: {
              get: function(e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;
                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                  ) {
                    if (((t = k(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function(e, t) {
                for (
                  var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                    k.inArray(k.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }),
        k.each(["radio", "checkbox"], function() {
          (k.valHooks[this] = {
            set: function(e, t) {
              if (Array.isArray(t))
                return (e.checked = k.inArray(k(e).val(), t) > -1);
            }
          }),
            m.checkOn ||
              (k.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (m.focusin = "onfocusin" in n);
      var kt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) {
          e.stopPropagation();
        };
      k.extend(k.event, {
        trigger: function(e, t, r, i) {
          var o,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            y = [r || a],
            g = h.call(e, "type") ? e.type : e,
            m = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = p = u = r = r || a),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !kt.test(g + k.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
              (l = g.indexOf(":") < 0 && "on" + g),
              ((e = e[k.expando]
                ? e
                : new k.Event(g, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : k.makeArray(t, [e])),
              (d = k.event.special[g] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !x(r)) {
              for (
                c = d.delegateType || g, kt.test(c + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                y.push(s), (u = s);
              u === (r.ownerDocument || a) &&
                y.push(u.defaultView || u.parentWindow || n);
            }
            for (o = 0; (s = y[o++]) && !e.isPropagationStopped(); )
              (p = s),
                (e.type = o > 1 ? c : d.bindType || g),
                (f =
                  (K.get(s, "events") || {})[e.type] && K.get(s, "handle")) &&
                  f.apply(s, t),
                (f = l && s[l]) &&
                  f.apply &&
                  J(s) &&
                  ((e.result = f.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(y.pop(), t)) ||
                !J(r) ||
                (l &&
                  v(r[g]) &&
                  !x(r) &&
                  ((u = r[l]) && (r[l] = null),
                  (k.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, Ct),
                  r[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, Ct),
                  (k.event.triggered = void 0),
                  u && (r[l] = u))),
              e.result
            );
          }
        },
        simulate: function(e, t, n) {
          var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
          k.event.trigger(r, null, t);
        }
      }),
        k.fn.extend({
          trigger: function(e, t) {
            return this.each(function() {
              k.event.trigger(e, t, this);
            });
          },
          triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0);
          }
        }),
        m.focusin ||
          k.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) {
              k.event.simulate(t, e.target, k.event.fix(e));
            };
            k.event.special[t] = {
              setup: function() {
                var r = this.ownerDocument || this,
                  i = K.access(r, t);
                i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
              },
              teardown: function() {
                var r = this.ownerDocument || this,
                  i = K.access(r, t) - 1;
                i
                  ? K.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), K.remove(r, t));
              }
            };
          });
      var Et = n.location,
        St = Date.now(),
        Nt = /\?/;
      k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            k.error("Invalid XML: " + e),
          t
        );
      };
      var At = /\[\]$/,
        jt = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
      function qt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          k.each(t, function(t, i) {
            n || At.test(e)
              ? r(e, i)
              : qt(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== T(t)) r(e, t);
        else for (i in t) qt(e + "[" + i + "]", t[i], n, r);
      }
      (k.param = function(e, t) {
        var n,
          r = [],
          i = function(e, t) {
            var n = v(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
          k.each(e, function() {
            i(this.name, this.value);
          });
        else for (n in e) qt(n, e[n], t, i);
        return r.join("&");
      }),
        k.fn.extend({
          serialize: function() {
            return k.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var e = k.prop(this, "elements");
              return e ? k.makeArray(e) : this;
            })
              .filter(function() {
                var e = this.type;
                return (
                  this.name &&
                  !k(this).is(":disabled") &&
                  Lt.test(this.nodeName) &&
                  !Dt.test(e) &&
                  (this.checked || !ye.test(e))
                );
              })
              .map(function(e, t) {
                var n = k(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? k.map(n, function(e) {
                      return { name: t.name, value: e.replace(jt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(jt, "\r\n") };
              })
              .get();
          }
        });
      var _t = /%20/g,
        Ot = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        $t = {},
        Mt = {},
        Wt = "*/".concat("*"),
        Bt = a.createElement("a");
      function Ft(e) {
        return function(t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(I) || [];
          if (v(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Ut(e, t, n, r) {
        var i = {},
          o = e === Mt;
        function a(s) {
          var u;
          return (
            (i[s] = !0),
            k.each(e[s] || [], function(e, s) {
              var c = s(t, n, r);
              return "string" != typeof c || o || i[c]
                ? o
                  ? !(u = c)
                  : void 0
                : (t.dataTypes.unshift(c), a(c), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function zt(e, t) {
        var n,
          r,
          i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e;
      }
      (Bt.href = Et.href),
        k.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Et.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Wt,
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
              "text xml": k.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
          },
          ajaxPrefilter: Ft($t),
          ajaxTransport: Ft(Mt),
          ajax: function(e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              s,
              u,
              c,
              l,
              f,
              d,
              p,
              h = k.ajaxSetup({}, t),
              y = h.context || h,
              g = h.context && (y.nodeType || y.jquery) ? k(y) : k.event,
              m = k.Deferred(),
              v = k.Callbacks("once memory"),
              x = h.statusCode || {},
              b = {},
              w = {},
              T = "canceled",
              C = {
                readyState: 0,
                getResponseHeader: function(e) {
                  var t;
                  if (l) {
                    if (!s)
                      for (s = {}; (t = Ht.exec(o)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                  return l ? o : null;
                },
                setRequestHeader: function(e, t) {
                  return (
                    null == l &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (b[e] = t)),
                    this
                  );
                },
                overrideMimeType: function(e) {
                  return null == l && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                  var t;
                  if (e)
                    if (l) C.always(e[C.status]);
                    else for (t in e) x[t] = [x[t], e[t]];
                  return this;
                },
                abort: function(e) {
                  var t = e || T;
                  return r && r.abort(t), E(0, t), this;
                }
              };
            if (
              (m.promise(C),
              (h.url = ((e || h.url || Et.href) + "").replace(
                It,
                Et.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
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
                    Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = k.param(h.data, h.traditional)),
              Ut($t, h, t, C),
              l)
            )
              return C;
            for (d in ((f = k.event && h.global) &&
              0 == k.active++ &&
              k.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Rt.test(h.type)),
            (i = h.url.replace(Ot, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(_t, "+"))
              : ((p = h.url.slice(i.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((i += (Nt.test(i) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((i = i.replace(Pt, "$1")),
                  (p = (Nt.test(i) ? "&" : "?") + "_=" + St++ + p)),
                (h.url = i + p)),
            h.ifModified &&
              (k.lastModified[i] &&
                C.setRequestHeader("If-Modified-Since", k.lastModified[i]),
              k.etag[i] && C.setRequestHeader("If-None-Match", k.etag[i])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(y, C, h) || l))
              return C.abort();
            if (
              ((T = "abort"),
              v.add(h.complete),
              C.done(h.success),
              C.fail(h.error),
              (r = Ut(Mt, h, t, C)))
            ) {
              if (((C.readyState = 1), f && g.trigger("ajaxSend", [C, h]), l))
                return C;
              h.async &&
                h.timeout > 0 &&
                (u = n.setTimeout(function() {
                  C.abort("timeout");
                }, h.timeout));
              try {
                (l = !1), r.send(b, E);
              } catch (e) {
                if (l) throw e;
                E(-1, e);
              }
            } else E(-1, "No Transport");
            function E(e, t, a, s) {
              var c,
                d,
                p,
                b,
                w,
                T = t;
              l ||
                ((l = !0),
                u && n.clearTimeout(u),
                (r = void 0),
                (o = s || ""),
                (C.readyState = e > 0 ? 4 : 0),
                (c = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (b = (function(e, t, n) {
                    for (
                      var r, i, o, a, s = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in s)
                        if (s[i] && s[i].test(r)) {
                          u.unshift(i);
                          break;
                        }
                    if (u[0] in n) o = u[0];
                    else {
                      for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                          o = i;
                          break;
                        }
                        a || (a = i);
                      }
                      o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                  })(h, C, a)),
                (b = (function(e, t, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    u,
                    c = {},
                    l = e.dataTypes.slice();
                  if (l[1])
                    for (a in e.converters)
                      c[a.toLowerCase()] = e.converters[a];
                  for (o = l.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = o),
                      (o = l.shift()))
                    )
                      if ("*" === o) o = u;
                      else if ("*" !== u && u !== o) {
                        if (!(a = c[u + " " + o] || c["* " + o]))
                          for (i in c)
                            if (
                              (s = i.split(" "))[1] === o &&
                              (a = c[u + " " + s[0]] || c["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = c[i])
                                : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + u + " to " + o
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(h, b, C, c)),
                c
                  ? (h.ifModified &&
                      ((w = C.getResponseHeader("Last-Modified")) &&
                        (k.lastModified[i] = w),
                      (w = C.getResponseHeader("etag")) && (k.etag[i] = w)),
                    204 === e || "HEAD" === h.type
                      ? (T = "nocontent")
                      : 304 === e
                      ? (T = "notmodified")
                      : ((T = b.state), (d = b.data), (c = !(p = b.error))))
                  : ((p = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || T) + ""),
                c ? m.resolveWith(y, [d, T, C]) : m.rejectWith(y, [C, T, p]),
                C.statusCode(x),
                (x = void 0),
                f &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? d : p]),
                v.fireWith(y, [C, T]),
                f &&
                  (g.trigger("ajaxComplete", [C, h]),
                  --k.active || k.event.trigger("ajaxStop")));
            }
            return C;
          },
          getJSON: function(e, t, n) {
            return k.get(e, t, n, "json");
          },
          getScript: function(e, t) {
            return k.get(e, void 0, t, "script");
          }
        }),
        k.each(["get", "post"], function(e, t) {
          k[t] = function(e, n, r, i) {
            return (
              v(n) && ((i = i || r), (r = n), (n = void 0)),
              k.ajax(
                k.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  k.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (k._evalUrl = function(e, t) {
          return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function() {} },
            dataFilter: function(e) {
              k.globalEval(e, t);
            }
          });
        }),
        k.fn.extend({
          wrapAll: function(e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = k(e, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(e) {
            return v(e)
              ? this.each(function(t) {
                  k(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  var t = k(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function(e) {
            var t = v(e);
            return this.each(function(n) {
              k(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function(e) {
            return (
              this.parent(e)
                .not("body")
                .each(function() {
                  k(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (k.expr.pseudos.hidden = function(e) {
          return !k.expr.pseudos.visible(e);
        }),
        (k.expr.pseudos.visible = function(e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (k.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Yt = { 0: 200, 1223: 204 },
        Xt = k.ajaxSettings.xhr();
      (m.cors = !!Xt && "withCredentials" in Xt),
        (m.ajax = Xt = !!Xt),
        k.ajaxTransport(function(e) {
          var t, r;
          if (m.cors || (Xt && !e.crossDomain))
            return {
              send: function(i, o) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  s.setRequestHeader(a, i[a]);
                (t = function(e) {
                  return function() {
                    t &&
                      ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Yt[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function() {
                        4 === s.readyState &&
                          n.setTimeout(function() {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function() {
                t && t();
              }
            };
        }),
        k.ajaxPrefilter(function(e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        k.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function(e) {
              return k.globalEval(e), e;
            }
          }
        }),
        k.ajaxPrefilter("script", function(e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        k.ajaxTransport("script", function(e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function(r, i) {
                (t = k("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function(e) {
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  a.head.appendChild(t[0]);
              },
              abort: function() {
                n && n();
              }
            };
        });
      var Gt,
        Vt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
      k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Vt.pop() || k.expando + "_" + St++;
          return (this[e] = !0), e;
        }
      }),
        k.ajaxPrefilter("json jsonp", function(e, t, r) {
          var i,
            o,
            a,
            s =
              !1 !== e.jsonp &&
              (Jt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Jt.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback = v(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Jt, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function() {
                return a || k.error(i + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function() {
                a = arguments;
              }),
              r.always(function() {
                void 0 === o ? k(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)),
                  a && v(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Gt = a.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Gt.childNodes.length)),
        (k.parseHTML = function(e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((r = (t = a.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = a.location.href),
                    t.head.appendChild(r))
                  : (t = a)),
              (o = !n && []),
              (i = L.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Ce([e], t, o)),
                  o && o.length && k(o).remove(),
                  k.merge([], i.childNodes)));
          var r, i, o;
        }),
        (k.fn.load = function(e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = xt(e.slice(s))), (e = e.slice(0, s))),
            v(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            a.length > 0 &&
              k
                .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function(e) {
                  (o = arguments),
                    a.html(
                      r
                        ? k("<div>")
                            .append(k.parseHTML(e))
                            .find(r)
                        : e
                    );
                })
                .always(
                  n &&
                    function(e, t) {
                      a.each(function() {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        k.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
          ],
          function(e, t) {
            k.fn[t] = function(e) {
              return this.on(t, e);
            };
          }
        ),
        (k.expr.pseudos.animated = function(e) {
          return k.grep(k.timers, function(t) {
            return e === t.elem;
          }).length;
        }),
        (k.offset = {
          setOffset: function(e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c = k.css(e, "position"),
              l = k(e),
              f = {};
            "static" === c && (e.style.position = "relative"),
              (s = l.offset()),
              (o = k.css(e, "top")),
              (u = k.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (o + u).indexOf("auto") > -1
                ? ((a = (r = l.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
              v(t) && (t = t.call(e, n, k.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + i),
              "using" in t ? t.using.call(e, f) : l.css(f);
          }
        }),
        k.fn.extend({
          offset: function(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    k.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === k.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === k.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
                  (i.left += k.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - k.css(r, "marginTop", !0),
                left: t.left - i.left - k.css(r, "marginLeft", !0)
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (
                var e = this.offsetParent;
                e && "static" === k.css(e, "position");

              )
                e = e.offsetParent;
              return e || ae;
            });
          }
        }),
        k.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function(e, t) {
            var n = "pageYOffset" === t;
            k.fn[e] = function(r) {
              return z(
                this,
                function(e, r, i) {
                  var o;
                  if (
                    (x(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        k.each(["top", "left"], function(e, t) {
          k.cssHooks[t] = Xe(m.pixelPosition, function(e, n) {
            if (n)
              return (n = Ye(e, t)), Fe.test(n) ? k(e).position()[t] + "px" : n;
          });
        }),
        k.each({ Height: "height", Width: "width" }, function(e, t) {
          k.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function(n, r) {
              k.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(
                  this,
                  function(t, n, i) {
                    var o;
                    return x(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? k.css(t, n, s)
                      : k.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        k.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function(e, t) {
            k.fn[t] = function(e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        k.fn.extend({
          hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }),
        k.fn.extend({
          bind: function(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function(e, t) {
            return this.off(e, null, t);
          },
          delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function(e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          }
        }),
        (k.proxy = function(e, t) {
          var n, r, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
              (r = u.call(arguments, 2)),
              ((i = function() {
                return e.apply(t || this, r.concat(u.call(arguments)));
              }).guid = e.guid = e.guid || k.guid++),
              i
            );
        }),
        (k.holdReady = function(e) {
          e ? k.readyWait++ : k.ready(!0);
        }),
        (k.isArray = Array.isArray),
        (k.parseJSON = JSON.parse),
        (k.nodeName = D),
        (k.isFunction = v),
        (k.isWindow = x),
        (k.camelCase = V),
        (k.type = T),
        (k.now = Date.now),
        (k.isNumeric = function(e) {
          var t = k.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (r = function() {
            return k;
          }.apply(t, [])) || (e.exports = r);
      var Qt = n.jQuery,
        Kt = n.$;
      return (
        (k.noConflict = function(e) {
          return (
            n.$ === k && (n.$ = Kt), e && n.jQuery === k && (n.jQuery = Qt), k
          );
        }),
        i || (n.jQuery = n.$ = k),
        k
      );
    });
  },
  93: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.INTERPRETER_API = t.DISTILLER_WHITE_LIST = t.TRS_TOKEN = t.PUBLIC_SENTRY_URL = t.SUB_TYPE_l = t.DEFAULT_SUB_TYPE = t.SUB_TYPE_TGT = t.SUB_TYPE_ORG = t.SUB_TYPE_BIL = t.LANG_L = t.DEFAULT_LANG = t.JA = t.EN = t.ZH = void 0);
    (t.INTERPRETER_API = "https://api.interpreter.caiyunai.com/"),
      (t.DISTILLER_WHITE_LIST = [
        "popsci.com",
        "sciencealert.com",
        "livescience.com",
        "sciencedaily.com",
        "aeon.co",
        "thoughtco.com",
        "pixiv",
        "verywellmind.com",
        "wired.com",
        "buzzfeed.com",
        "brightside.me",
        "boredpanda.com",
        "iflscience.com",
        "archiveofourown.org"
      ]),
      (t.TRS_TOKEN = "lqkr1tfixq1wa9kmj9po"),
      (t.PUBLIC_SENTRY_URL =
        "http://c49231b0334e4624b8941767b8f6bfa4@sentry.in.caiyunapp.com/22"),
      (t.SUB_TYPE_l = ["bilingual", "original", "target"]),
      (t.DEFAULT_SUB_TYPE = "bilingual"),
      (t.SUB_TYPE_TGT = "target"),
      (t.SUB_TYPE_ORG = "original"),
      (t.SUB_TYPE_BIL = "bilingual"),
      (t.LANG_L = ["zh", "en", "ja-JP"]),
      (t.DEFAULT_LANG = "en"),
      (t.JA = "ja-JP"),
      (t.EN = "en"),
      (t.ZH = "zh");
  }
});
