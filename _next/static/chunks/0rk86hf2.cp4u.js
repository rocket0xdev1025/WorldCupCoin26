(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  58678,
  (e, t, i) => {
    t.exports = e.r(80963);
  },
  54348,
  (e) => {
    e.v({
      className: "anton_38b4131a-module__CKrkwG__className",
      variable: "anton_38b4131a-module__CKrkwG__variable",
    });
  },
  94653,
  (e) => {
    e.v({
      className: "oswald_5b537522-module__uT3nDW__className",
      variable: "oswald_5b537522-module__uT3nDW__variable",
    });
  },
  92809,
  (e) => {
    e.v({
      className: "montserrat_1b1c297e-module__XecLRa__className",
      variable: "montserrat_1b1c297e-module__XecLRa__variable",
    });
  },
  13606,
  (e, t, i) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: i,
      blurHeight: s,
      blurDataURL: r,
      objectFit: a,
    }) {
      let o = i ? 40 * i : e,
        l = s ? 40 * s : t,
        h = o && l ? `viewBox='0 0 ${o} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${h}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        h
          ? "none"
          : "contain" === a
          ? "xMidYMid"
          : "cover" === a
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  66785,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "getImgProps", {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      e.r(94470);
    let n = e.r(20262),
      s = e.r(13606),
      r = e.r(15125),
      a = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function o(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function h(
      {
        src: e,
        sizes: t,
        unoptimized: i = !1,
        priority: c = !1,
        preload: d = !1,
        loading: u,
        className: p,
        quality: m,
        width: f,
        height: g,
        fill: x = !1,
        style: y,
        overrideSrc: v,
        onLoad: w,
        onLoadingComplete: b,
        placeholder: j = "empty",
        blurDataURL: k,
        fetchPriority: S,
        decoding: T = "async",
        layout: P,
        objectFit: N,
        objectPosition: C,
        lazyBoundary: E,
        lazyRoot: A,
        ...M
      },
      V
    ) {
      var R;
      let D,
        L,
        B,
        { imgConf: I, showAltText: F, blurComplete: O, defaultLoader: _ } = V,
        $ = I || r.imageConfigDefault;
      if ("allSizes" in $) D = $;
      else {
        let e = [...$.deviceSizes, ...$.imageSizes].sort((e, t) => e - t),
          t = $.deviceSizes.sort((e, t) => e - t),
          i = $.qualities?.sort((e, t) => e - t);
        D = { ...$, allSizes: e, deviceSizes: t, qualities: i };
      }
      if (void 0 === _)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let z = M.loader || _;
      delete M.loader, delete M.srcSet;
      let W = "__next_img_default" in z;
      if (W) {
        if ("custom" === D.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = z;
        z = (t) => {
          let { config: i, ...n } = t;
          return e(n);
        };
      }
      if (P) {
        "fill" === P && (x = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[P];
        e && (y = { ...y, ...e });
        let i = { responsive: "100vw", fill: "100vw" }[P];
        i && !t && (t = i);
      }
      let U = "",
        X = l(f),
        H = l(g);
      if ((R = e) && "object" == typeof R && (o(R) || void 0 !== R.src)) {
        let t = o(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((L = t.blurWidth),
          (B = t.blurHeight),
          (k = k || t.blurDataURL),
          (U = t.src),
          !x)
        )
          if (X || H) {
            if (X && !H) {
              let e = X / t.width;
              H = Math.round(t.height * e);
            } else if (!X && H) {
              let e = H / t.height;
              X = Math.round(t.width * e);
            }
          } else (X = t.width), (H = t.height);
      }
      let Y = !c && !d && ("lazy" === u || void 0 === u);
      (!(e = "string" == typeof e ? e : U) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((i = !0), (Y = !1)),
        D.unoptimized && (i = !0),
        W &&
          !D.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (i = !0);
      let q = l(m),
        G = Object.assign(
          x
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: N,
                objectPosition: C,
              }
            : {},
          F ? {} : { color: "transparent" },
          y
        ),
        K =
          O || "empty" === j
            ? null
            : "blur" === j
            ? `url("data:image/svg+xml;charset=utf-8,${(0, s.getImageBlurSvg)({
                widthInt: X,
                heightInt: H,
                blurWidth: L,
                blurHeight: B,
                blurDataURL: k || "",
                objectFit: G.objectFit,
              })}")`
            : `url("${j}")`,
        Z = a.includes(G.objectFit)
          ? "fill" === G.objectFit
            ? "100% 100%"
            : "cover"
          : G.objectFit,
        J = K
          ? {
              backgroundSize: Z,
              backgroundPosition: G.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: K,
            }
          : {},
        Q = (function ({
          config: e,
          src: t,
          unoptimized: i,
          width: s,
          quality: r,
          sizes: a,
          loader: o,
        }) {
          if (i) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, n.getDeploymentId)();
              if (e) {
                let i = t.indexOf("?");
                if (-1 !== i) {
                  let n = new URLSearchParams(t.slice(i + 1));
                  n.get("dpl") ||
                    (n.append("dpl", e),
                    (t = t.slice(0, i) + "?" + n.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: l, kind: h } = (function (
              { deviceSizes: e, allSizes: t },
              i,
              n
            ) {
              if (n) {
                let i = /(^|\s)(1?\d?\d)vw/g,
                  s = [];
                for (let e; (e = i.exec(n)); ) s.push(parseInt(e[2]));
                if (s.length) {
                  let i = 0.01 * Math.min(...s);
                  return { widths: t.filter((t) => t >= e[0] * i), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof i
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [i, 2 * i].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, s, a),
            c = l.length - 1;
          return {
            sizes: a || "w" !== h ? a : "100vw",
            srcSet: l
              .map(
                (i, n) =>
                  `${o({ config: e, src: t, quality: r, width: i })} ${
                    "w" === h ? i : n + 1
                  }${h}`
              )
              .join(", "),
            src: o({ config: e, src: t, quality: r, width: l[c] }),
          };
        })({
          config: D,
          src: e,
          unoptimized: i,
          width: X,
          quality: q,
          sizes: t,
          loader: z,
        }),
        ee = Y ? "lazy" : u;
      return {
        props: {
          ...M,
          loading: ee,
          fetchPriority: S,
          width: X,
          height: H,
          decoding: T,
          className: p,
          style: { ...G, ...J },
          sizes: Q.sizes,
          srcSet: Q.srcSet,
          src: v || Q.src,
        },
        meta: { unoptimized: i, preload: d || c, placeholder: j, fill: x },
      };
    }
  },
  68816,
  (e, t, i) => {
    "use strict";
    function n(e, t) {
      let i = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e),
            t.qualities[0]
          )
        : i;
    }
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  3866,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(68816),
      s = e.r(20262);
    function r({ config: e, src: t, width: i, quality: a }) {
      let o = (0, s.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//")) {
        let e = t.indexOf("?");
        if (-1 !== e) {
          let i = new URLSearchParams(t.slice(e + 1)),
            n = i.get("dpl");
          if (n) {
            (o = n), i.delete("dpl");
            let s = i.toString();
            t = t.slice(0, e) + (s ? "?" + s : "");
          }
        }
      }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let l = (0, n.findClosestQuality)(a, e);
      return t;
    }
    r.__next_img_default = !0;
    let a = r;
  },
  63230,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let n = e.r(91788);
    function s(e, t) {
      let i = (0, n.useRef)(null),
        s = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = i.current;
            e && ((i.current = null), e());
            let t = s.current;
            t && ((s.current = null), t());
          } else e && (i.current = r(e, n)), t && (s.current = r(t, n));
        },
        [e, t]
      );
    }
    function r(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let i = e(t);
        return "function" == typeof i ? i : () => e(null);
      }
    }
    ("function" == typeof i.default ||
      ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }),
      Object.assign(i.default, i),
      (t.exports = i.default));
  },
  49194,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "Image", {
        enumerable: !0,
        get: function () {
          return w;
        },
      });
    let n = e.r(41705),
      s = e.r(52456),
      r = e.r(91398),
      a = s._(e.r(91788)),
      o = n._(e.r(30943)),
      l = n._(e.r(80963)),
      h = e.r(66785),
      c = e.r(15125),
      d = e.r(13521);
    e.r(94470);
    let u = e.r(25479),
      p = n._(e.r(3866)),
      m = e.r(63230),
      f = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function g(e, t, i, n, s, r, a) {
      let o = e?.src;
      e &&
        e["data-loaded-src"] !== o &&
        ((e["data-loaded-src"] = o),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && s(!0), i?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  s = !1;
                i.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => s,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (s = !0), t.stopPropagation();
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function x(e) {
      return a.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = (0, a.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: i,
          height: n,
          width: s,
          decoding: o,
          className: l,
          style: h,
          fetchPriority: c,
          placeholder: d,
          loading: u,
          unoptimized: p,
          fill: f,
          onLoadRef: y,
          onLoadingCompleteRef: v,
          setBlurComplete: w,
          setShowAltText: b,
          sizesInput: j,
          onLoad: k,
          onError: S,
          ...T
        },
        P
      ) => {
        let N = (0, a.useCallback)(
            (e) => {
              e && (S && (e.src = e.src), e.complete && g(e, d, y, v, w, p, j));
            },
            [e, d, y, v, w, S, p, j]
          ),
          C = (0, m.useMergedRef)(P, N);
        return (0, r.jsx)("img", {
          ...T,
          ...x(c),
          loading: u,
          width: s,
          height: n,
          decoding: o,
          "data-nimg": f ? "fill" : "1",
          className: l,
          style: h,
          sizes: i,
          srcSet: t,
          src: e,
          ref: C,
          onLoad: (e) => {
            g(e.currentTarget, d, y, v, w, p, j);
          },
          onError: (e) => {
            b(!0), "empty" !== d && w(!0), S && S(e);
          },
        });
      }
    );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let i = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...x(t.fetchPriority),
      };
      return e && o.default.preload
        ? (o.default.preload(t.src, i), null)
        : (0, r.jsx)(l.default, {
            children: (0, r.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...i },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let w = (0, a.forwardRef)((e, t) => {
      let i = (0, a.useContext)(u.RouterContext),
        n = (0, a.useContext)(d.ImageConfigContext),
        s = (0, a.useMemo)(() => {
          let e = f || n || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            i = e.deviceSizes.sort((e, t) => e - t),
            s = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: i,
            qualities: s,
            localPatterns:
              "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: o, onLoadingComplete: l } = e,
        m = (0, a.useRef)(o);
      (0, a.useEffect)(() => {
        m.current = o;
      }, [o]);
      let g = (0, a.useRef)(l);
      (0, a.useEffect)(() => {
        g.current = l;
      }, [l]);
      let [x, w] = (0, a.useState)(!1),
        [b, j] = (0, a.useState)(!1),
        { props: k, meta: S } = (0, h.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: s,
          blurComplete: x,
          showAltText: b,
        });
      return (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(y, {
            ...k,
            unoptimized: S.unoptimized,
            placeholder: S.placeholder,
            fill: S.fill,
            onLoadRef: m,
            onLoadingCompleteRef: g,
            setBlurComplete: w,
            setShowAltText: j,
            sizesInput: e.sizes,
            ref: t,
          }),
          S.preload
            ? (0, r.jsx)(v, { isAppRouter: !i, imgAttributes: k })
            : null,
        ],
      });
    });
    ("function" == typeof i.default ||
      ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }),
      Object.assign(i.default, i),
      (t.exports = i.default));
  },
  88961,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return h;
      },
    };
    for (var s in n) Object.defineProperty(i, s, { enumerable: !0, get: n[s] });
    let r = e.r(41705),
      a = e.r(66785),
      o = e.r(49194),
      l = r._(e.r(3866));
    function h(e) {
      let { props: t } = (0, a.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
      return { props: t };
    }
    let c = o.Image;
  },
  26019,
  (e, t, i) => {
    t.exports = e.r(88961);
  },
  10477,
  (e) => {
    "use strict";
    let t, i, n;
    var s,
      r = e.i(91398),
      a = e.i(58678),
      o = e.i(54348);
    let l = {
      className: o.default.className,
      style: {
        fontFamily: "'Anton', 'Anton Fallback'",
        fontWeight: 400,
        fontStyle: "normal",
      },
    };
    null != o.default.variable && (l.variable = o.default.variable);
    var h = e.i(94653);
    let c = {
      className: h.default.className,
      style: { fontFamily: "'Oswald', 'Oswald Fallback'", fontStyle: "normal" },
    };
    null != h.default.variable && (c.variable = h.default.variable);
    var d = e.i(92809);
    let u = {
      className: d.default.className,
      style: {
        fontFamily: "'Montserrat', 'Montserrat Fallback'",
        fontStyle: "normal",
      },
    };
    null != d.default.variable && (u.variable = d.default.variable);
    var p = e.i(91788),
      m = e.i(26019);
    let f = "$WORLDCUP",
      g = "0xcomingsoon",
      x = "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
      y = "https://x.com/worldcup_26_x",
      v = "https://t.me/worldcup_26_portal",
      w = [
        { label: "About", href: "#history" },
        { label: "Fans", href: "#about" },
        { label: "Tokenomics", href: "#tokenomics" },
        { label: "How to Buy", href: "#how-to-buy" },
        { label: "Community", href: "#community" },
      ],
      b = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ],
      j = new Set([...b, "pathRotation"]),
      k = (e, t, i) => (i > t ? t : i < e ? e : i),
      S = {
        test: (e) => "number" == typeof e,
        parse: parseFloat,
        transform: (e) => e,
      },
      T = { ...S, transform: (e) => k(0, 1, e) },
      P = { ...S, default: 1 },
      N = (e) => Math.round(1e5 * e) / 1e5,
      C = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
      E =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
      A = (e, t) => (i) =>
        !!(
          ("string" == typeof i && E.test(i) && i.startsWith(e)) ||
          (t && null != i && Object.prototype.hasOwnProperty.call(i, t))
        ),
      M = (e, t, i) => (n) => {
        if ("string" != typeof n) return n;
        let [s, r, a, o] = n.match(C);
        return {
          [e]: parseFloat(s),
          [t]: parseFloat(r),
          [i]: parseFloat(a),
          alpha: void 0 !== o ? parseFloat(o) : 1,
        };
      },
      V = { ...S, transform: (e) => Math.round(k(0, 255, e)) },
      R = {
        test: A("rgb", "red"),
        parse: M("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: i, alpha: n = 1 }) =>
          "rgba(" +
          V.transform(e) +
          ", " +
          V.transform(t) +
          ", " +
          V.transform(i) +
          ", " +
          N(T.transform(n)) +
          ")",
      },
      D = {
        test: A("#"),
        parse: function (e) {
          let t = "",
            i = "",
            n = "",
            s = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (i = e.substring(3, 5)),
                (n = e.substring(5, 7)),
                (s = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (i = e.substring(2, 3)),
                (n = e.substring(3, 4)),
                (s = e.substring(4, 5)),
                (t += t),
                (i += i),
                (n += n),
                (s += s)),
            {
              red: parseInt(t, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: s ? parseInt(s, 16) / 255 : 1,
            }
          );
        },
        transform: R.transform,
      },
      L = (e) => ({
        test: (t) =>
          "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      }),
      B = L("deg"),
      I = L("%"),
      F = L("px"),
      O = L("vh"),
      _ = L("vw"),
      $ = {
        ...I,
        parse: (e) => I.parse(e) / 100,
        transform: (e) => I.transform(100 * e),
      },
      z = {
        test: A("hsl", "hue"),
        parse: M("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: i, alpha: n = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          I.transform(N(t)) +
          ", " +
          I.transform(N(i)) +
          ", " +
          N(T.transform(n)) +
          ")",
      },
      W = {
        test: (e) => R.test(e) || D.test(e) || z.test(e),
        parse: (e) =>
          R.test(e) ? R.parse(e) : z.test(e) ? z.parse(e) : D.parse(e),
        transform: (e) =>
          "string" == typeof e
            ? e
            : e.hasOwnProperty("red")
            ? R.transform(e)
            : z.transform(e),
        getAnimatableNone: (e) => {
          let t = W.parse(e);
          return (t.alpha = 0), W.transform(t);
        },
      },
      U =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
      X = "number",
      H = "color",
      Y =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function q(e) {
      let t = e.toString(),
        i = [],
        n = { color: [], number: [], var: [] },
        s = [],
        r = 0,
        a = t
          .replace(
            Y,
            (e) => (
              W.test(e)
                ? (n.color.push(r), s.push(H), i.push(W.parse(e)))
                : e.startsWith("var(")
                ? (n.var.push(r), s.push("var"), i.push(e))
                : (n.number.push(r), s.push(X), i.push(parseFloat(e))),
              ++r,
              "${}"
            )
          )
          .split("${}");
      return { values: i, split: a, indexes: n, types: s };
    }
    function G({ split: e, types: t }) {
      let i = e.length;
      return (n) => {
        let s = "";
        for (let r = 0; r < i; r++)
          if (((s += e[r]), void 0 !== n[r])) {
            let e = t[r];
            e === X
              ? (s += N(n[r]))
              : e === H
              ? (s += W.transform(n[r]))
              : (s += n[r]);
          }
        return s;
      };
    }
    let K = {
        test: function (e) {
          return (
            isNaN(e) &&
            "string" == typeof e &&
            (e.match(C)?.length || 0) + (e.match(U)?.length || 0) > 0
          );
        },
        parse: function (e) {
          return q(e).values;
        },
        createTransformer: function (e) {
          return G(q(e));
        },
        getAnimatableNone: function (e) {
          let t = q(e);
          return G(t)(
            t.values.map((e, i) =>
              ((e, t) =>
                "number" == typeof e
                  ? t?.trim().endsWith("/")
                    ? e
                    : 0
                  : "number" == typeof e
                  ? 0
                  : W.test(e)
                  ? W.getAnimatableNone(e)
                  : e)(e, t.split[i])
            )
          );
        },
      },
      Z = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function J(e) {
      let [t, i] = e.slice(0, -1).split("(");
      if ("drop-shadow" === t) return e;
      let [n] = i.match(C) || [];
      if (!n) return e;
      let s = i.replace(n, ""),
        r = +!!Z.has(t);
      return n !== i && (r *= 100), t + "(" + r + s + ")";
    }
    let Q = /\b([a-z-]*)\(.*?\)/gu,
      ee = {
        ...K,
        getAnimatableNone: (e) => {
          let t = e.match(Q);
          return t ? t.map(J).join(" ") : e;
        },
      },
      et = {
        ...K,
        getAnimatableNone: (e) => {
          let t = K.parse(e);
          return K.createTransformer(e)(
            t.map((e) =>
              "number" == typeof e
                ? 0
                : "object" == typeof e
                ? { ...e, alpha: 1 }
                : e
            )
          );
        },
      },
      ei = { ...S, transform: Math.round },
      en = {
        borderWidth: F,
        borderTopWidth: F,
        borderRightWidth: F,
        borderBottomWidth: F,
        borderLeftWidth: F,
        borderRadius: F,
        borderTopLeftRadius: F,
        borderTopRightRadius: F,
        borderBottomRightRadius: F,
        borderBottomLeftRadius: F,
        width: F,
        maxWidth: F,
        height: F,
        maxHeight: F,
        top: F,
        right: F,
        bottom: F,
        left: F,
        inset: F,
        insetBlock: F,
        insetBlockStart: F,
        insetBlockEnd: F,
        insetInline: F,
        insetInlineStart: F,
        insetInlineEnd: F,
        padding: F,
        paddingTop: F,
        paddingRight: F,
        paddingBottom: F,
        paddingLeft: F,
        paddingBlock: F,
        paddingBlockStart: F,
        paddingBlockEnd: F,
        paddingInline: F,
        paddingInlineStart: F,
        paddingInlineEnd: F,
        margin: F,
        marginTop: F,
        marginRight: F,
        marginBottom: F,
        marginLeft: F,
        marginBlock: F,
        marginBlockStart: F,
        marginBlockEnd: F,
        marginInline: F,
        marginInlineStart: F,
        marginInlineEnd: F,
        fontSize: F,
        backgroundPositionX: F,
        backgroundPositionY: F,
        rotate: B,
        pathRotation: B,
        rotateX: B,
        rotateY: B,
        rotateZ: B,
        scale: P,
        scaleX: P,
        scaleY: P,
        scaleZ: P,
        skew: B,
        skewX: B,
        skewY: B,
        distance: F,
        translateX: F,
        translateY: F,
        translateZ: F,
        x: F,
        y: F,
        z: F,
        perspective: F,
        transformPerspective: F,
        opacity: T,
        originX: $,
        originY: $,
        originZ: F,
        zIndex: ei,
        fillOpacity: T,
        strokeOpacity: T,
        numOctaves: ei,
      },
      es = {
        ...en,
        color: W,
        backgroundColor: W,
        outlineColor: W,
        fill: W,
        stroke: W,
        borderColor: W,
        borderTopColor: W,
        borderRightColor: W,
        borderBottomColor: W,
        borderLeftColor: W,
        filter: ee,
        WebkitFilter: ee,
        mask: et,
        WebkitMask: et,
      },
      er = (e) => es[e],
      ea = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
      eo = () => ({ x: ea(), y: ea() }),
      el = () => ({ min: 0, max: 0 }),
      eh = () => ({ x: el(), y: el() }),
      ec = (e) => !!(e && e.getVelocity),
      ed = new Set(["width", "height", "top", "left", "right", "bottom", ...b]),
      eu = (e) => (t) => t.test(e),
      ep = [S, F, I, B, _, O, { test: (e) => "auto" === e, parse: (e) => e }],
      em = (e) => ep.find(eu(e));
    var ef = e.i(50461);
    let eg = () => {},
      ex = () => {};
    ef.default;
    let ey = (e) => (t) => "string" == typeof t && t.startsWith(e),
      ev = ey("--"),
      ew = ey("var(--"),
      eb = (e) => !!ew(e) && ej.test(e.split("/*")[0].trim()),
      ej =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function ek(e) {
      return "string" == typeof e && e.split("/*")[0].includes("var(--");
    }
    let eS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
      eT = (e) => (180 * e) / Math.PI,
      eP = (e) => eC(eT(Math.atan2(e[1], e[0]))),
      eN = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: eP,
        rotateZ: eP,
        skewX: (e) => eT(Math.atan(e[1])),
        skewY: (e) => eT(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      },
      eC = (e) => ((e %= 360) < 0 && (e += 360), e),
      eE = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
      eA = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
      eM = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: eE,
        scaleY: eA,
        scale: (e) => (eE(e) + eA(e)) / 2,
        rotateX: (e) => eC(eT(Math.atan2(e[6], e[5]))),
        rotateY: (e) => eC(eT(Math.atan2(-e[2], e[0]))),
        rotateZ: eP,
        rotate: eP,
        skewX: (e) => eT(Math.atan(e[4])),
        skewY: (e) => eT(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      };
    function eV(e) {
      return +!!e.includes("scale");
    }
    function eR(e, t) {
      let i, n;
      if (!e || "none" === e) return eV(t);
      let s = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
      if (s) (i = eM), (n = s);
      else {
        let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        (i = eN), (n = t);
      }
      if (!n) return eV(t);
      let r = i[t],
        a = n[1].split(",").map(eD);
      return "function" == typeof r ? r(a) : a[r];
    }
    function eD(e) {
      return parseFloat(e.trim());
    }
    let eL = (e) => e === S || e === F,
      eB = new Set(["x", "y", "z"]),
      eI = b.filter((e) => !eB.has(e)),
      eF = {
        width: (
          { x: e },
          { paddingLeft: t = "0", paddingRight: i = "0", boxSizing: n }
        ) => {
          let s = e.max - e.min;
          return "border-box" === n ? s : s - parseFloat(t) - parseFloat(i);
        },
        height: (
          { y: e },
          { paddingTop: t = "0", paddingBottom: i = "0", boxSizing: n }
        ) => {
          let s = e.max - e.min;
          return "border-box" === n ? s : s - parseFloat(t) - parseFloat(i);
        },
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: (e, { transform: t }) => eR(t, "x"),
        y: (e, { transform: t }) => eR(t, "y"),
      };
    (eF.translateX = eF.x), (eF.translateY = eF.y);
    let eO = (e) => e,
      e_ = {},
      e$ = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
    function ez(e, t) {
      let i = !1,
        n = !0,
        s = { delta: 0, timestamp: 0, isProcessing: !1 },
        r = () => (i = !0),
        a = e$.reduce(
          (e, i) => (
            (e[i] = (function (e, t) {
              let i = new Set(),
                n = new Set(),
                s = !1,
                r = !1,
                a = new WeakSet(),
                o = { delta: 0, timestamp: 0, isProcessing: !1 },
                l = 0;
              function h(t) {
                a.has(t) && (c.schedule(t), e()), l++, t(o);
              }
              let c = {
                schedule: (e, t = !1, r = !1) => {
                  let o = r && s ? i : n;
                  return t && a.add(e), o.add(e), e;
                },
                cancel: (e) => {
                  n.delete(e), a.delete(e);
                },
                process: (e) => {
                  if (((o = e), s)) {
                    r = !0;
                    return;
                  }
                  s = !0;
                  let a = i;
                  (i = n),
                    (n = a),
                    i.forEach(h),
                    t,
                    (l = 0),
                    i.clear(),
                    (s = !1),
                    r && ((r = !1), c.process(e));
                },
              };
              return c;
            })(r, t ? i : void 0)),
            e
          ),
          {}
        ),
        {
          setup: o,
          read: l,
          resolveKeyframes: h,
          preUpdate: c,
          update: d,
          preRender: u,
          render: p,
          postRender: m,
        } = a,
        f = () => {
          let r = e_.useManualTiming,
            a = r ? s.timestamp : performance.now();
          (i = !1),
            r ||
              (s.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(a - s.timestamp, 40), 1)),
            (s.timestamp = a),
            (s.isProcessing = !0),
            o.process(s),
            l.process(s),
            h.process(s),
            c.process(s),
            d.process(s),
            u.process(s),
            p.process(s),
            m.process(s),
            (s.isProcessing = !1),
            i && t && ((n = !1), e(f));
        };
      return {
        schedule: e$.reduce((t, r) => {
          let o = a[r];
          return (
            (t[r] = (t, r = !1, a = !1) => (
              !i && ((i = !0), (n = !0), s.isProcessing || e(f)),
              o.schedule(t, r, a)
            )),
            t
          );
        }, {}),
        cancel: (e) => {
          for (let t = 0; t < e$.length; t++) a[e$[t]].cancel(e);
        },
        state: s,
        steps: a,
      };
    }
    let {
        schedule: eW,
        cancel: eU,
        state: eX,
        steps: eH,
      } = ez(
        "u" > typeof requestAnimationFrame ? requestAnimationFrame : eO,
        !0
      ),
      eY = new Set(),
      eq = !1,
      eG = !1,
      eK = !1;
    function eZ() {
      if (eG) {
        let e = Array.from(eY).filter((e) => e.needsMeasurement),
          t = new Set(e.map((e) => e.element)),
          i = new Map();
        t.forEach((e) => {
          let t,
            n =
              ((t = []),
              eI.forEach((i) => {
                let n = e.getValue(i);
                void 0 !== n &&
                  (t.push([i, n.get()]), n.set(+!!i.startsWith("scale")));
              }),
              t);
          n.length && (i.set(e, n), e.render());
        }),
          e.forEach((e) => e.measureInitialState()),
          t.forEach((e) => {
            e.render();
            let t = i.get(e);
            t &&
              t.forEach(([t, i]) => {
                e.getValue(t)?.set(i);
              });
          }),
          e.forEach((e) => e.measureEndState()),
          e.forEach((e) => {
            void 0 !== e.suspendedScrollY &&
              window.scrollTo(0, e.suspendedScrollY);
          });
      }
      (eG = !1), (eq = !1), eY.forEach((e) => e.complete(eK)), eY.clear();
    }
    function eJ() {
      eY.forEach((e) => {
        e.readKeyframes(), e.needsMeasurement && (eG = !0);
      });
    }
    class eQ {
      constructor(e, t, i, n, s, r = !1) {
        (this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...e]),
          (this.onComplete = t),
          (this.name = i),
          (this.motionValue = n),
          (this.element = s),
          (this.isAsync = r);
      }
      scheduleResolve() {
        (this.state = "scheduled"),
          this.isAsync
            ? (eY.add(this),
              eq || ((eq = !0), eW.read(eJ), eW.resolveKeyframes(eZ)))
            : (this.readKeyframes(), this.complete());
      }
      readKeyframes() {
        let {
          unresolvedKeyframes: e,
          name: t,
          element: i,
          motionValue: n,
        } = this;
        if (null === e[0]) {
          let s = n?.get(),
            r = e[e.length - 1];
          if (void 0 !== s) e[0] = s;
          else if (i && t) {
            let n = i.readValue(t, r);
            null != n && (e[0] = n);
          }
          void 0 === e[0] && (e[0] = r), n && void 0 === s && n.set(e[0]);
        }
        for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete(e = !1) {
        (this.state = "complete"),
          this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
          eY.delete(this);
      }
      cancel() {
        "scheduled" === this.state &&
          (eY.delete(this), (this.state = "pending"));
      }
      resume() {
        "pending" === this.state && this.scheduleResolve();
      }
    }
    let e0 = new Set([ee, et]);
    function e1(e, t) {
      let i = er(e);
      return (
        e0.has(i) || (i = K),
        i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
      );
    }
    let e2 = new Set(["auto", "none", "0"]);
    class e5 extends eQ {
      constructor(e, t, i, n, s) {
        super(e, t, i, n, s, !0);
      }
      readKeyframes() {
        let { unresolvedKeyframes: e, element: t, name: i } = this;
        if (!t || !t.current) return;
        super.readKeyframes();
        for (let i = 0; i < e.length; i++) {
          let n = e[i];
          if ("string" == typeof n && eb((n = n.trim()))) {
            let s = (function e(t, i, n = 1) {
              ex(
                n <= 4,
                `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
                "max-css-var-depth"
              );
              let [s, r] = (function (e) {
                let t = eS.exec(e);
                if (!t) return [,];
                let [, i, n, s] = t;
                return [`--${i ?? n}`, s];
              })(t);
              if (!s) return;
              let a = window.getComputedStyle(i).getPropertyValue(s);
              if (a) {
                let e = a.trim();
                return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
                  ? parseFloat(e)
                  : e;
              }
              return eb(r) ? e(r, i, n + 1) : r;
            })(n, t.current);
            void 0 !== s && (e[i] = s),
              i === e.length - 1 && (this.finalKeyframe = n);
          }
        }
        if ((this.resolveNoneKeyframes(), !ed.has(i) || 2 !== e.length)) return;
        let [n, s] = e,
          r = em(n),
          a = em(s);
        if (ek(n) !== ek(s) && eF[i]) {
          this.needsMeasurement = !0;
          return;
        }
        if (r !== a)
          if (eL(r) && eL(a))
            for (let t = 0; t < e.length; t++) {
              let i = e[t];
              "string" == typeof i && (e[t] = parseFloat(i));
            }
          else eF[i] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        let { unresolvedKeyframes: e, name: t } = this,
          i = [];
        for (let t = 0; t < e.length; t++)
          (null === e[t] ||
            (function (e) {
              if ("number" == typeof e) return 0 === e;
              if (null === e) return !0;
              return "none" === e || "0" === e || /^0[^.\s]+$/u.test(e);
            })(e[t])) &&
            i.push(t);
        i.length &&
          (function (e, t, i) {
            let n,
              s = 0;
            for (; s < e.length && !n; ) {
              let t = e[s];
              "string" == typeof t &&
                !e2.has(t) &&
                q(t).values.length &&
                (n = e[s]),
                s++;
            }
            if (n && i) for (let s of t) e[s] = e1(i, n);
          })(e, i, t);
      }
      measureInitialState() {
        let { element: e, unresolvedKeyframes: t, name: i } = this;
        if (!e || !e.current) return;
        "height" === i && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = eF[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
          (t[0] = this.measuredOrigin);
        let n = t[t.length - 1];
        void 0 !== n && e.getValue(i, n).jump(n, !1);
      }
      measureEndState() {
        let { element: e, name: t, unresolvedKeyframes: i } = this;
        if (!e || !e.current) return;
        let n = e.getValue(t);
        n && n.jump(this.measuredOrigin, !1);
        let s = i.length - 1,
          r = i[s];
        (i[s] = eF[t](
          e.measureViewportBox(),
          window.getComputedStyle(e.current)
        )),
          null !== r &&
            void 0 === this.finalKeyframe &&
            (this.finalKeyframe = r),
          this.removedTransforms?.length &&
            this.removedTransforms.forEach(([t, i]) => {
              e.getValue(t).set(i);
            }),
          this.resolveNoneKeyframes();
      }
    }
    let e3 = (e) => 1e3 * e;
    function e4(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function e6(e, t) {
      let i = e.indexOf(t);
      i > -1 && e.splice(i, 1);
    }
    class e8 {
      constructor() {
        this.subscriptions = [];
      }
      add(e) {
        return e4(this.subscriptions, e), () => e6(this.subscriptions, e);
      }
      notify(e, t, i) {
        let n = this.subscriptions.length;
        if (n)
          if (1 === n) this.subscriptions[0](e, t, i);
          else
            for (let s = 0; s < n; s++) {
              let n = this.subscriptions[s];
              n && n(e, t, i);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    function e7(e, t, i) {
      t.startsWith("--") ? e.style.setProperty(t, i) : (e.style[t] = i);
    }
    function e9(e) {
      let t;
      return () => (void 0 === t && (t = e()), t);
    }
    let te = {};
    function tt(e, t) {
      let i = e9(e);
      return () => te[t] ?? i();
    }
    let ti = tt(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
      tn = (e) => null !== e;
    function ts(e, { repeat: t, repeatType: i = "loop" }, n, s = 1) {
      let r = e.filter(tn),
        a = s < 0 || (t && "loop" !== i && t % 2 == 1) ? 0 : r.length - 1;
      return a && void 0 !== n ? n : r[a];
    }
    class tr {
      constructor() {
        this.updateFinished();
      }
      get finished() {
        return this._finished;
      }
      updateFinished() {
        this._finished = new Promise((e) => {
          this.resolve = e;
        });
      }
      notifyFinished() {
        this.resolve();
      }
      then(e, t) {
        return this.finished.then(e, t);
      }
    }
    let ta = { layout: 0, mainThread: 0, waapi: 0 },
      to = (e) => Array.isArray(e) && "number" == typeof e[0],
      tl = tt(() => {
        try {
          document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch (e) {
          return !1;
        }
        return !0;
      }, "linearEasing"),
      th = (e, t, i = 10) => {
        let n = "",
          s = Math.max(Math.round(t / i), 2);
        for (let t = 0; t < s; t++)
          n += Math.round(1e4 * e(t / (s - 1))) / 1e4 + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
      },
      tc = ([e, t, i, n]) => `cubic-bezier(${e}, ${t}, ${i}, ${n})`,
      td = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: tc([0, 0.65, 0.55, 1]),
        circOut: tc([0.55, 0, 1, 0.45]),
        backIn: tc([0.31, 0.01, 0.66, -0.59]),
        backOut: tc([0.33, 1.53, 0.69, 0.99]),
      };
    function tu(e) {
      return "function" == typeof e && "applyToOptions" in e;
    }
    class tp extends tr {
      constructor(e) {
        if (
          (super(),
          (this.finishedTime = null),
          (this.isStopped = !1),
          (this.manualStartTime = null),
          !e)
        )
          return;
        const {
          element: t,
          name: i,
          keyframes: n,
          pseudoElement: s,
          allowFlatten: r = !1,
          finalKeyframe: a,
          onComplete: o,
        } = e;
        (this.isPseudoElement = !!s),
          (this.allowFlatten = r),
          (this.options = e),
          ex(
            "string" != typeof e.type,
            'Mini animate() doesn\'t support "type" as a string.',
            "mini-spring"
          );
        const l = (function ({ type: e, ...t }) {
          return tu(e) && tl()
            ? e.applyToOptions(t)
            : (t.duration ?? (t.duration = 300),
              t.ease ?? (t.ease = "easeOut"),
              t);
        })(e);
        (this.animation = (function (
          e,
          t,
          i,
          {
            delay: n = 0,
            duration: s = 300,
            repeat: r = 0,
            repeatType: a = "loop",
            ease: o = "easeOut",
            times: l,
          } = {},
          h
        ) {
          let c = { [t]: i };
          l && (c.offset = l);
          let d = (function e(t, i) {
            if (t)
              return "function" == typeof t
                ? tl()
                  ? th(t, i)
                  : "ease-out"
                : to(t)
                ? tc(t)
                : Array.isArray(t)
                ? t.map((t) => e(t, i) || td.easeOut)
                : td[t];
          })(o, s);
          Array.isArray(d) && (c.easing = d);
          let u = {
            delay: n,
            duration: s,
            easing: Array.isArray(d) ? "linear" : d,
            fill: "both",
            iterations: r + 1,
            direction: "reverse" === a ? "alternate" : "normal",
          };
          h && (u.pseudoElement = h);
          let p = e.animate(c, u);
          return p;
        })(t, i, n, l, s)),
          !1 === l.autoplay && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !s)) {
              let e = ts(n, this.options, a, this.speed);
              this.updateMotionValue && this.updateMotionValue(e),
                e7(t, i, e),
                this.animation.cancel();
            }
            o?.(), this.notifyFinished();
          });
      }
      play() {
        this.isStopped ||
          ((this.manualStartTime = null),
          this.animation.play(),
          "finished" === this.state && this.updateFinished());
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.finish?.();
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch (e) {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        let { state: e } = this;
        "idle" !== e &&
          "finished" !== e &&
          (this.updateMotionValue
            ? this.updateMotionValue()
            : this.commitStyles(),
          this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        let e = this.options?.element;
        !this.isPseudoElement &&
          e?.isConnected &&
          this.animation.commitStyles?.();
      }
      get duration() {
        return (
          Number(this.animation.effect?.getComputedTiming?.().duration || 0) /
          1e3
        );
      }
      get iterationDuration() {
        let { delay: e = 0 } = this.options || {};
        return this.duration + e / 1e3;
      }
      get time() {
        return (Number(this.animation.currentTime) || 0) / 1e3;
      }
      set time(e) {
        let t = null !== this.finishedTime;
        (this.manualStartTime = null),
          (this.finishedTime = null),
          (this.animation.currentTime = e3(e)),
          t && this.animation.pause();
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(e) {
        e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e);
      }
      get state() {
        return null !== this.finishedTime
          ? "finished"
          : this.animation.playState;
      }
      get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
      }
      set startTime(e) {
        this.manualStartTime = this.animation.startTime = e;
      }
      attachTimeline({ timeline: e, rangeStart: t, rangeEnd: i, observe: n }) {
        return (this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: "linear" }),
        (this.animation.onfinish = null),
        e && ti())
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            i && (this.animation.rangeEnd = i),
            eO)
          : n(this);
      }
    }
    let tm = new Set(["opacity", "clipPath", "filter", "transform"]),
      { schedule: tf } = ez(queueMicrotask, !1);
    function tg() {
      t = void 0;
    }
    let tx = {
        now: () => (
          void 0 === t &&
            tx.set(
              eX.isProcessing || e_.useManualTiming
                ? eX.timestamp
                : performance.now()
            ),
          t
        ),
        set: (e) => {
          (t = e), queueMicrotask(tg);
        },
      },
      ty = (e, t) => (t ? (1e3 / t) * e : 0),
      tv;
    class tw {
      constructor(e, t = {}) {
        (this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (e) => {
            let t = tx.now();
            if (
              (this.updatedAt !== t && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(e),
              this.current !== this.prev &&
                (this.events.change?.notify(this.current), this.dependents))
            )
              for (let e of this.dependents) e.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(e),
          (this.owner = t.owner);
      }
      setCurrent(e) {
        (this.current = e),
          (this.updatedAt = tx.now()),
          null === this.canTrackVelocity &&
            void 0 !== e &&
            (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
      }
      setPrevFrameValue(e = this.current) {
        (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
      }
      onChange(e) {
        return this.on("change", e);
      }
      on(e, t) {
        this.events[e] || (this.events[e] = new e8());
        let i = this.events[e].add(t);
        return "change" === e
          ? () => {
              i(),
                eW.read(() => {
                  this.events.change.getSize() || this.stop();
                });
            }
          : i;
      }
      clearListeners() {
        for (let e in this.events) this.events[e].clear();
      }
      attach(e, t) {
        (this.passiveEffect = e), (this.stopPassiveEffect = t);
      }
      set(e) {
        this.passiveEffect
          ? this.passiveEffect(e, this.updateAndNotify)
          : this.updateAndNotify(e);
      }
      setWithVelocity(e, t, i) {
        this.set(t),
          (this.prev = void 0),
          (this.prevFrameValue = e),
          (this.prevUpdatedAt = this.updatedAt - i);
      }
      jump(e, t = !0) {
        this.updateAndNotify(e),
          (this.prev = e),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          t && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
      dirty() {
        this.events.change?.notify(this.current);
      }
      addDependent(e) {
        this.dependents || (this.dependents = new Set()),
          this.dependents.add(e);
      }
      removeDependent(e) {
        this.dependents && this.dependents.delete(e);
      }
      get() {
        return tv && tv.push(this), this.current;
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        let e = tx.now();
        if (
          !this.canTrackVelocity ||
          void 0 === this.prevFrameValue ||
          e - this.updatedAt > 30
        )
          return 0;
        let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return ty(
          parseFloat(this.current) - parseFloat(this.prevFrameValue),
          t
        );
      }
      start(e) {
        return (
          this.stop(),
          new Promise((t) => {
            (this.hasAnimated = !0),
              (this.animation = e(t)),
              this.events.animationStart && this.events.animationStart.notify();
          }).then(() => {
            this.events.animationComplete &&
              this.events.animationComplete.notify(),
              this.clearAnimation();
          })
        );
      }
      stop() {
        this.animation &&
          (this.animation.stop(),
          this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation();
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        delete this.animation;
      }
      destroy() {
        this.dependents?.clear(),
          this.events.destroy?.notify(),
          this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
    }
    function tb(e, t) {
      return new tw(e, t);
    }
    let tj = [...ep, W, K],
      tk = new WeakMap();
    function tS(e) {
      return null !== e && "object" == typeof e && "function" == typeof e.start;
    }
    function tT(e) {
      return "string" == typeof e || Array.isArray(e);
    }
    let tP = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ],
      tN = ["initial", ...tP];
    function tC(e) {
      return tS(e.animate) || tN.some((t) => tT(e[t]));
    }
    function tE(e) {
      return !!(tC(e) || e.variants);
    }
    let tA = { current: null },
      tM = { current: !1 },
      tV = "u" > typeof window;
    function tR(e) {
      let t = [{}, {}];
      return (
        e?.values.forEach((e, i) => {
          (t[0][i] = e.get()), (t[1][i] = e.getVelocity());
        }),
        t
      );
    }
    function tD(e, t, i, n) {
      if ("function" == typeof t) {
        let [s, r] = tR(n);
        t = t(void 0 !== i ? i : e.custom, s, r);
      }
      if (
        ("string" == typeof t && (t = e.variants && e.variants[t]),
        "function" == typeof t)
      ) {
        let [s, r] = tR(n);
        t = t(void 0 !== i ? i : e.custom, s, r);
      }
      return t;
    }
    let tL = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ],
      tB = {};
    class tI {
      scrapeMotionValuesFromProps(e, t, i) {
        return {};
      }
      constructor(
        {
          parent: e,
          props: t,
          presenceContext: i,
          reducedMotionConfig: n,
          skipAnimations: s,
          blockInitialAnimation: r,
          visualState: a,
        },
        o = {}
      ) {
        (this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.shouldSkipAnimations = !1),
          (this.values = new Map()),
          (this.KeyframeResolver = eQ),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.hasBeenMounted = !1),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection
              ));
          }),
          (this.renderScheduledAt = 0),
          (this.scheduleRender = () => {
            let e = tx.now();
            this.renderScheduledAt < e &&
              ((this.renderScheduledAt = e), eW.render(this.render, !1, !0));
          });
        const { latestValues: l, renderState: h } = a;
        (this.latestValues = l),
          (this.baseTarget = { ...l }),
          (this.initialValues = t.initial ? { ...l } : {}),
          (this.renderState = h),
          (this.parent = e),
          (this.props = t),
          (this.presenceContext = i),
          (this.depth = e ? e.depth + 1 : 0),
          (this.reducedMotionConfig = n),
          (this.skipAnimationsConfig = s),
          (this.options = o),
          (this.blockInitialAnimation = !!r),
          (this.isControllingVariants = tC(t)),
          (this.isVariantNode = tE(t)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = !!(e && e.current));
        const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
          t,
          {},
          this
        );
        for (const e in d) {
          const t = d[e];
          void 0 !== l[e] && ec(t) && t.set(l[e]);
        }
      }
      mount(e) {
        if (this.hasBeenMounted)
          for (let e in this.initialValues)
            this.values.get(e)?.jump(this.initialValues[e]),
              (this.latestValues[e] = this.initialValues[e]);
        (this.current = e),
          tk.set(e, this),
          this.projection &&
            !this.projection.instance &&
            this.projection.mount(e),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
          "never" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !1)
            : "always" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !0)
            : (tM.current ||
                (function () {
                  if (((tM.current = !0), tV))
                    if (window.matchMedia) {
                      let e = window.matchMedia("(prefers-reduced-motion)"),
                        t = () => (tA.current = e.matches);
                      e.addEventListener("change", t), t();
                    } else tA.current = !1;
                })(),
              (this.shouldReduceMotion = tA.current)),
          (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
          this.parent?.addChild(this),
          this.update(this.props, this.presenceContext),
          (this.hasBeenMounted = !0);
      }
      unmount() {
        for (let e in (this.projection && this.projection.unmount(),
        eU(this.notifyUpdate),
        eU(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this),
        this.events))
          this.events[e].clear();
        for (let e in this.features) {
          let t = this.features[e];
          t && (t.unmount(), (t.isMounted = !1));
        }
        this.current = null;
      }
      addChild(e) {
        this.children.add(e),
          this.enteringChildren ?? (this.enteringChildren = new Set()),
          this.enteringChildren.add(e);
      }
      removeChild(e) {
        this.children.delete(e),
          this.enteringChildren && this.enteringChildren.delete(e);
      }
      bindToMotionValue(e, t) {
        let i;
        if (
          (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
          t.accelerate && tm.has(e) && this.current instanceof HTMLElement)
        ) {
          let {
              factory: i,
              keyframes: n,
              times: s,
              ease: r,
              duration: a,
            } = t.accelerate,
            o = new tp({
              element: this.current,
              name: e,
              keyframes: n,
              times: s,
              ease: r,
              duration: e3(a),
            }),
            l = i(o);
          this.valueSubscriptions.set(e, () => {
            l(), o.cancel();
          });
          return;
        }
        let n = j.has(e);
        n && this.onBindTransform && this.onBindTransform();
        let s = t.on("change", (t) => {
          (this.latestValues[e] = t),
            this.props.onUpdate && eW.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender();
        });
        "u" > typeof window &&
          window.MotionCheckAppearSync &&
          (i = window.MotionCheckAppearSync(this, e, t)),
          this.valueSubscriptions.set(e, () => {
            s(), i && i();
          });
      }
      sortNodePosition(e) {
        return this.current &&
          this.sortInstanceNodePosition &&
          this.type === e.type
          ? this.sortInstanceNodePosition(this.current, e.current)
          : 0;
      }
      updateFeatures() {
        let e = "animation";
        for (e in tB) {
          let t = tB[e];
          if (!t) continue;
          let { isEnabled: i, Feature: n } = t;
          if (
            (!this.features[e] &&
              n &&
              i(this.props) &&
              (this.features[e] = new n(this)),
            this.features[e])
          ) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current
          ? this.measureInstanceViewportBox(this.current, this.props)
          : eh();
      }
      getStaticValue(e) {
        return this.latestValues[e];
      }
      setStaticValue(e, t) {
        this.latestValues[e] = t;
      }
      update(e, t) {
        (e.transformTemplate || this.props.transformTemplate) &&
          this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = e),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = t);
        for (let t = 0; t < tL.length; t++) {
          let i = tL[t];
          this.propEventSubscriptions[i] &&
            (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
          let n = e["on" + i];
          n && (this.propEventSubscriptions[i] = this.on(i, n));
        }
        (this.prevMotionValues = (function (e, t, i) {
          for (let n in t) {
            let s = t[n],
              r = i[n];
            if (ec(s)) e.addValue(n, s);
            else if (ec(r)) e.addValue(n, tb(s, { owner: e }));
            else if (r !== s)
              if (e.hasValue(n)) {
                let t = e.getValue(n);
                !0 === t.liveStyle ? t.jump(s) : t.hasAnimated || t.set(s);
              } else {
                let t = e.getStaticValue(n);
                e.addValue(n, tb(void 0 !== t ? t : s, { owner: e }));
              }
          }
          for (let n in i) void 0 === t[n] && e.removeValue(n);
          return t;
        })(
          this,
          this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
          this.prevMotionValues
        )),
          this.handleChildMotionValue && this.handleChildMotionValue();
      }
      getProps() {
        return this.props;
      }
      getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      getClosestVariantNode() {
        return this.isVariantNode
          ? this
          : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
      }
      addVariantChild(e) {
        let t = this.getClosestVariantNode();
        if (t)
          return (
            t.variantChildren && t.variantChildren.add(e),
            () => t.variantChildren.delete(e)
          );
      }
      addValue(e, t) {
        let i = this.values.get(e);
        t !== i &&
          (i && this.removeValue(e),
          this.bindToMotionValue(e, t),
          this.values.set(e, t),
          (this.latestValues[e] = t.get()));
      }
      removeValue(e) {
        this.values.delete(e);
        let t = this.valueSubscriptions.get(e);
        t && (t(), this.valueSubscriptions.delete(e)),
          delete this.latestValues[e],
          this.removeValueFromRenderState(e, this.renderState);
      }
      hasValue(e) {
        return this.values.has(e);
      }
      getValue(e, t) {
        if (this.props.values && this.props.values[e])
          return this.props.values[e];
        let i = this.values.get(e);
        return (
          void 0 === i &&
            void 0 !== t &&
            ((i = tb(null === t ? void 0 : t, { owner: this })),
            this.addValue(e, i)),
          i
        );
      }
      readValue(e, t) {
        let i =
          void 0 === this.latestValues[e] && this.current
            ? this.getBaseTargetFromProps(this.props, e) ??
              this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        if (null != i) {
          let n, s;
          if (
            "string" == typeof i &&
            ((n = i),
            /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) ||
              ((s = i), /^0[^.\s]+$/u.test(s)))
          )
            i = parseFloat(i);
          else {
            let n;
            (n = i), !tj.find(eu(n)) && K.test(t) && (i = e1(e, t));
          }
          this.setBaseTarget(e, ec(i) ? i.get() : i);
        }
        return ec(i) ? i.get() : i;
      }
      setBaseTarget(e, t) {
        this.baseTarget[e] = t;
      }
      getBaseTarget(e) {
        let t,
          { initial: i } = this.props;
        if ("string" == typeof i || "object" == typeof i) {
          let n = tD(this.props, i, this.presenceContext?.custom);
          n && (t = n[e]);
        }
        if (i && void 0 !== t) return t;
        let n = this.getBaseTargetFromProps(this.props, e);
        return void 0 === n || ec(n)
          ? void 0 !== this.initialValues[e] && void 0 === t
            ? void 0
            : this.baseTarget[e]
          : n;
      }
      on(e, t) {
        return (
          this.events[e] || (this.events[e] = new e8()), this.events[e].add(t)
        );
      }
      notify(e, ...t) {
        this.events[e] && this.events[e].notify(...t);
      }
      scheduleRenderMicrotask() {
        tf.render(this.render);
      }
    }
    class tF extends tI {
      constructor() {
        super(...arguments), (this.KeyframeResolver = e5);
      }
      sortInstanceNodePosition(e, t) {
        return 2 & e.compareDocumentPosition(t) ? 1 : -1;
      }
      getBaseTargetFromProps(e, t) {
        let i = e.style;
        return i ? i[t] : void 0;
      }
      removeValueFromRenderState(e, { vars: t, style: i }) {
        delete t[e], delete i[e];
      }
      handleChildMotionValue() {
        this.childSubscription &&
          (this.childSubscription(), delete this.childSubscription);
        let { children: e } = this.props;
        ec(e) &&
          (this.childSubscription = e.on("change", (e) => {
            this.current && (this.current.textContent = `${e}`);
          }));
      }
    }
    function tO(e) {
      return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
    }
    let t_ = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
      t$ = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      },
      tz = b.length;
    function tW(e, t, i) {
      let { style: n, vars: s, transformOrigin: r } = e,
        a = !1,
        o = !1;
      for (let e in t) {
        let i = t[e];
        if (j.has(e)) {
          a = !0;
          continue;
        }
        if (ev(e)) {
          s[e] = i;
          continue;
        }
        {
          let t = t_(i, en[e]);
          e.startsWith("origin") ? ((o = !0), (r[e] = t)) : (n[e] = t);
        }
      }
      if (
        (!t.transform &&
          (a || i
            ? (n.transform = (function (e, t, i) {
                let n = "",
                  s = !0;
                for (let r = 0; r < tz; r++) {
                  let a = b[r],
                    o = e[a];
                  if (void 0 === o) continue;
                  let l = !0;
                  if ("number" == typeof o) l = o === +!!a.startsWith("scale");
                  else {
                    let e = parseFloat(o);
                    l = a.startsWith("scale") ? 1 === e : 0 === e;
                  }
                  if (!l || i) {
                    let e = t_(o, en[a]);
                    if (!l) {
                      s = !1;
                      let t = t$[a] || a;
                      n += `${t}(${e}) `;
                    }
                    i && (t[a] = e);
                  }
                }
                let r = e.pathRotation;
                return (
                  r && ((s = !1), (n += `rotate(${t_(r, en.pathRotation)}) `)),
                  (n = n.trim()),
                  i ? (n = i(t, s ? "" : n)) : s && (n = "none"),
                  n
                );
              })(t, e.transform, i))
            : n.transform && (n.transform = "none")),
        o)
      ) {
        let { originX: e = "50%", originY: t = "50%", originZ: i = 0 } = r;
        n.transformOrigin = `${e} ${t} ${i}`;
      }
    }
    let tU = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      tX = { offset: "strokeDashoffset", array: "strokeDasharray" },
      tH = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
    function tY(
      e,
      {
        attrX: t,
        attrY: i,
        attrScale: n,
        pathLength: s,
        pathSpacing: r = 1,
        pathOffset: a = 0,
        ...o
      },
      l,
      h,
      c
    ) {
      if ((tW(e, o, h), l)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
      }
      (e.attrs = e.style), (e.style = {});
      let { attrs: d, style: u } = e;
      for (let e of (d.transform &&
        ((u.transform = d.transform), delete d.transform),
      (u.transform || d.transformOrigin) &&
        ((u.transformOrigin = d.transformOrigin ?? "50% 50%"),
        delete d.transformOrigin),
      u.transform &&
        ((u.transformBox = c?.transformBox ?? "fill-box"),
        delete d.transformBox),
      tH))
        void 0 !== d[e] && ((u[e] = d[e]), delete d[e]);
      void 0 !== t && (d.x = t),
        void 0 !== i && (d.y = i),
        void 0 !== n && (d.scale = n),
        void 0 !== s &&
          (function (e, t, i = 1, n = 0, s = !0) {
            e.pathLength = 1;
            let r = s ? tU : tX;
            (e[r.offset] = `${-n}`), (e[r.array] = `${t} ${i}`);
          })(d, s, r, a, !1);
    }
    let tq = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]),
      tG = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    function tK(e, { style: t, vars: i }, n, s) {
      let r,
        a = e.style;
      for (r in t) a[r] = t[r];
      for (r in (s?.applyProjectionStyles(a, n), i)) a.setProperty(r, i[r]);
    }
    function tZ(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    let tJ = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e)
            if (!F.test(e)) return e;
            else e = parseFloat(e);
          let i = tZ(e, t.target.x),
            n = tZ(e, t.target.y);
          return `${i}% ${n}%`;
        },
      },
      tQ = (e, t, i) => e + (t - e) * i,
      t0 = {
        borderRadius: {
          ...tJ,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tJ,
        borderTopRightRadius: tJ,
        borderBottomLeftRadius: tJ,
        borderBottomRightRadius: tJ,
        boxShadow: {
          correct: (e, { treeScale: t, projectionDelta: i }) => {
            let n = K.parse(e);
            if (n.length > 5) return e;
            let s = K.createTransformer(e),
              r = +("number" != typeof n[0]),
              a = i.x.scale * t.x,
              o = i.y.scale * t.y;
            (n[0 + r] /= a), (n[1 + r] /= o);
            let l = tQ(a, o, 0.5);
            return (
              "number" == typeof n[2 + r] && (n[2 + r] /= l),
              "number" == typeof n[3 + r] && (n[3 + r] /= l),
              s(n)
            );
          },
        },
      };
    function t1(e, { layout: t, layoutId: i }) {
      return (
        j.has(e) ||
        e.startsWith("origin") ||
        ((t || void 0 !== i) && (!!t0[e] || "opacity" === e))
      );
    }
    function t2(e, t, i) {
      let n = e.style,
        s = t?.style,
        r = {};
      if (!n) return r;
      for (let t in n)
        (ec(n[t]) ||
          (s && ec(s[t])) ||
          t1(t, e) ||
          i?.getValue(t)?.liveStyle !== void 0) &&
          (r[t] = n[t]);
      return r;
    }
    function t5(e, t, i) {
      let n = t2(e, t, i);
      for (let i in e)
        (ec(e[i]) || ec(t[i])) &&
          (n[
            -1 !== b.indexOf(i)
              ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
              : i
          ] = e[i]);
      return n;
    }
    class t3 extends tF {
      constructor() {
        super(...arguments),
          (this.type = "svg"),
          (this.isSVGTag = !1),
          (this.measureInstanceViewportBox = eh);
      }
      getBaseTargetFromProps(e, t) {
        return e[t];
      }
      readValueFromInstance(e, t) {
        if (j.has(t)) {
          let e = er(t);
          return (e && e.default) || 0;
        }
        return (t = tq.has(t) ? t : tO(t)), e.getAttribute(t);
      }
      scrapeMotionValuesFromProps(e, t, i) {
        return t5(e, t, i);
      }
      build(e, t, i) {
        tY(e, t, this.isSVGTag, i.transformTemplate, i.style);
      }
      renderInstance(e, t, i, n) {
        for (let i in (tK(e, t, void 0, n), t.attrs))
          e.setAttribute(tq.has(i) ? i : tO(i), t.attrs[i]);
      }
      mount(e) {
        (this.isSVGTag = tG(e.tagName)), super.mount(e);
      }
    }
    function t4({ top: e, left: t, right: i, bottom: n }) {
      return { x: { min: t, max: i }, y: { min: e, max: n } };
    }
    function t6(e) {
      return void 0 === e || 1 === e;
    }
    function t8({ scale: e, scaleX: t, scaleY: i }) {
      return !t6(e) || !t6(t) || !t6(i);
    }
    function t7(e) {
      return (
        t8(e) ||
        t9(e) ||
        e.z ||
        e.rotate ||
        e.rotateX ||
        e.rotateY ||
        e.skewX ||
        e.skewY
      );
    }
    function t9(e) {
      var t, i;
      return ((t = e.x) && "0%" !== t) || ((i = e.y) && "0%" !== i);
    }
    function ie(e, t, i, n, s) {
      return void 0 !== s && (e = n + s * (e - n)), n + i * (e - n) + t;
    }
    function it(e, t = 0, i = 1, n, s) {
      (e.min = ie(e.min, t, i, n, s)), (e.max = ie(e.max, t, i, n, s));
    }
    function ii(e, { x: t, y: i }) {
      it(e.x, t.translate, t.scale, t.originPoint),
        it(e.y, i.translate, i.scale, i.originPoint);
    }
    function is(e, t) {
      (e.min += t), (e.max += t);
    }
    function ir(e, t, i, n, s = 0.5) {
      let r = tQ(e.min, e.max, s);
      it(e, t, i, r, n);
    }
    function ia(e, t) {
      return "string" == typeof e ? (parseFloat(e) / 100) * (t.max - t.min) : e;
    }
    function io(e, t, i) {
      let n = i ?? e;
      ir(e.x, ia(t.x, n.x), t.scaleX, t.scale, t.originX),
        ir(e.y, ia(t.y, n.y), t.scaleY, t.scale, t.originY);
    }
    function il(e, t) {
      return t4(
        (function (e, t) {
          if (!t) return e;
          let i = t({ x: e.left, y: e.top }),
            n = t({ x: e.right, y: e.bottom });
          return { top: i.y, left: i.x, bottom: n.y, right: n.x };
        })(e.getBoundingClientRect(), t)
      );
    }
    class ih extends tF {
      constructor() {
        super(...arguments), (this.type = "html"), (this.renderInstance = tK);
      }
      readValueFromInstance(e, t) {
        if (j.has(t))
          return this.projection?.isProjecting
            ? eV(t)
            : ((e, t) => {
                let { transform: i = "none" } = getComputedStyle(e);
                return eR(i, t);
              })(e, t);
        {
          let i = window.getComputedStyle(e),
            n = (ev(t) ? i.getPropertyValue(t) : i[t]) || 0;
          return "string" == typeof n ? n.trim() : n;
        }
      }
      measureInstanceViewportBox(e, { transformPagePoint: t }) {
        return il(e, t);
      }
      build(e, t, i) {
        tW(e, t, i.transformTemplate);
      }
      scrapeMotionValuesFromProps(e, t, i) {
        return t2(e, t, i);
      }
    }
    let ic = [
      "animate",
      "circle",
      "defs",
      "desc",
      "ellipse",
      "g",
      "image",
      "line",
      "filter",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "rect",
      "stop",
      "switch",
      "symbol",
      "svg",
      "text",
      "tspan",
      "use",
      "view",
    ];
    function id(e) {
      if ("string" != typeof e || e.includes("-"));
      else if (ic.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
      return !1;
    }
    let iu = (0, p.createContext)({}),
      ip = (0, p.createContext)({ strict: !1 }),
      im = (0, p.createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      }),
      ig = (0, p.createContext)({});
    function ix(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    let iy = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    });
    function iv(e, t, i) {
      for (let n in t) ec(t[n]) || t1(n, i) || (e[n] = t[n]);
    }
    let iw = () => ({ ...iy(), attrs: {} }),
      ib = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "propagate",
        "ignoreStrict",
        "viewport",
      ]);
    function ij(e) {
      return (
        e.startsWith("while") ||
        (e.startsWith("drag") && "draggable" !== e) ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        ib.has(e)
      );
    }
    let ik = (e) => !ij(e);
    try {
      (s = (() => {
        let e = Error("Cannot find module '@emotion/is-prop-valid'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      })().default),
        "function" == typeof s &&
          (ik = (e) => (e.startsWith("on") ? !ij(e) : s(e)));
    } catch {}
    function iS(e) {
      return ec(e) ? e.get() : e;
    }
    let iT = (0, p.createContext)(null);
    function iP(e) {
      let t = (0, p.useRef)(null);
      return null === t.current && (t.current = e()), t.current;
    }
    let iN = (e) => (t, i) => {
        let n = (0, p.useContext)(ig),
          s = (0, p.useContext)(iT),
          r = () =>
            (function (
              { scrapeMotionValuesFromProps: e, createRenderState: t },
              i,
              n,
              s
            ) {
              return {
                latestValues: (function (e, t, i, n) {
                  let s = {},
                    r = n(e, {});
                  for (let e in r) s[e] = iS(r[e]);
                  let { initial: a, animate: o } = e,
                    l = tC(e),
                    h = tE(e);
                  t &&
                    h &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === a && (a = t.initial),
                    void 0 === o && (o = t.animate));
                  let c = !!i && !1 === i.initial,
                    d = (c = c || !1 === a) ? o : a;
                  if (d && "boolean" != typeof d && !tS(d)) {
                    let t = Array.isArray(d) ? d : [d];
                    for (let i = 0; i < t.length; i++) {
                      let n = tD(e, t[i]);
                      if (n) {
                        let { transitionEnd: e, transition: t, ...i } = n;
                        for (let e in i) {
                          let t = i[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (s[e] = t);
                        }
                        for (let t in e) s[t] = e[t];
                      }
                    }
                  }
                  return s;
                })(i, n, s, e),
                renderState: t(),
              };
            })(e, t, n, s);
        return i ? r() : iP(r);
      },
      iC = iN({ scrapeMotionValuesFromProps: t2, createRenderState: iy }),
      iE = iN({ scrapeMotionValuesFromProps: t5, createRenderState: iw }),
      iA = {
        animation: [
          "animate",
          "variants",
          "whileHover",
          "whileTap",
          "exit",
          "whileInView",
          "whileFocus",
          "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      },
      iM = !1;
    function iV() {
      return (
        !(function () {
          if (iM) return;
          let e = {};
          for (let t in iA)
            e[t] = { isEnabled: (e) => iA[t].some((t) => !!e[t]) };
          (tB = e), (iM = !0);
        })(),
        tB
      );
    }
    let iR = Symbol.for("motionComponentSymbol"),
      iD = "data-" + tO("framerAppearId"),
      iL = (0, p.createContext)({});
    function iB(e) {
      return (
        e &&
        "object" == typeof e &&
        Object.prototype.hasOwnProperty.call(e, "current")
      );
    }
    let iI = "u" > typeof window ? p.useLayoutEffect : p.useEffect;
    function iF(e, { forwardMotionProps: t = !1, type: i } = {}, n, s) {
      n &&
        (function (e) {
          let t = iV();
          for (let i in e) t[i] = { ...t[i], ...e[i] };
          tB = t;
        })(n);
      let a = i ? "svg" === i : id(e),
        o = a ? iE : iC;
      function l(i, n) {
        var l;
        let h,
          c,
          d,
          u = {
            ...(0, p.useContext)(im),
            ...i,
            layoutId: (function ({ layoutId: e }) {
              let t = (0, p.useContext)(iu).id;
              return t && void 0 !== e ? t + "-" + e : e;
            })(i),
          },
          { isStatic: m } = u,
          f = (function (e) {
            let { initial: t, animate: i } = (function (e, t) {
              if (tC(e)) {
                let { initial: t, animate: i } = e;
                return {
                  initial: !1 === t || tT(t) ? t : void 0,
                  animate: tT(i) ? i : void 0,
                };
              }
              return !1 !== e.inherit ? t : {};
            })(e, (0, p.useContext)(ig));
            return (0, p.useMemo)(
              () => ({ initial: t, animate: i }),
              [ix(t), ix(i)]
            );
          })(i),
          g = o(i, m);
        if (!m && "u" > typeof window) {
          (0, p.useContext)(ip).strict;
          let t = (function (e) {
            let { drag: t, layout: i } = iV();
            if (!t && !i) return {};
            let n = { ...t, ...i };
            return {
              MeasureLayout:
                t?.isEnabled(e) || i?.isEnabled(e) ? n.MeasureLayout : void 0,
              ProjectionNode: n.ProjectionNode,
            };
          })(u);
          (h = t.MeasureLayout),
            (f.visualElement = (function (e, t, i, n, s, r) {
              let { visualElement: a } = (0, p.useContext)(ig),
                o = (0, p.useContext)(ip),
                l = (0, p.useContext)(iT),
                h = (0, p.useContext)(im),
                c = h.reducedMotion,
                d = h.skipAnimations,
                u = (0, p.useRef)(null),
                m = (0, p.useRef)(!1);
              (n = n || o.renderer),
                !u.current &&
                  n &&
                  ((u.current = n(e, {
                    visualState: t,
                    parent: a,
                    props: i,
                    presenceContext: l,
                    blockInitialAnimation: !!l && !1 === l.initial,
                    reducedMotionConfig: c,
                    skipAnimations: d,
                    isSVG: r,
                  })),
                  m.current &&
                    u.current &&
                    (u.current.manuallyAnimateOnMount = !0));
              let f = u.current,
                g = (0, p.useContext)(iL);
              f &&
                !f.projection &&
                s &&
                ("html" === f.type || "svg" === f.type) &&
                (function (e, t, i, n) {
                  let {
                    layoutId: s,
                    layout: r,
                    drag: a,
                    dragConstraints: o,
                    layoutScroll: l,
                    layoutRoot: h,
                    layoutAnchor: c,
                    layoutCrossfade: d,
                  } = t;
                  (e.projection = new i(
                    e.latestValues,
                    t["data-framer-portal-id"]
                      ? void 0
                      : (function e(t) {
                          if (t)
                            return !1 !== t.options.allowProjection
                              ? t.projection
                              : e(t.parent);
                        })(e.parent)
                  )),
                    e.projection.setOptions({
                      layoutId: s,
                      layout: r,
                      alwaysMeasureLayout: !!a || (o && iB(o)),
                      visualElement: e,
                      animationType: "string" == typeof r ? r : "both",
                      initialPromotionConfig: n,
                      crossfade: d,
                      layoutScroll: l,
                      layoutRoot: h,
                      layoutAnchor: c,
                    });
                })(u.current, i, s, g);
              let x = (0, p.useRef)(!1);
              (0, p.useInsertionEffect)(() => {
                f && x.current && f.update(i, l);
              });
              let y = i[iD],
                v = (0, p.useRef)(
                  !!y &&
                    "u" > typeof window &&
                    !window.MotionHandoffIsComplete?.(y) &&
                    window.MotionHasOptimisedAnimation?.(y)
                );
              return (
                iI(() => {
                  (m.current = !0),
                    f &&
                      ((x.current = !0),
                      (window.MotionIsMounted = !0),
                      f.updateFeatures(),
                      f.scheduleRenderMicrotask(),
                      v.current &&
                        f.animationState &&
                        f.animationState.animateChanges());
                }),
                (0, p.useEffect)(() => {
                  f &&
                    (!v.current &&
                      f.animationState &&
                      f.animationState.animateChanges(),
                    v.current &&
                      (queueMicrotask(() => {
                        window.MotionHandoffMarkAsComplete?.(y);
                      }),
                      (v.current = !1)),
                    (f.enteringChildren = void 0));
                }),
                f
              );
            })(e, g, u, s, t.ProjectionNode, a));
        }
        return (0, r.jsxs)(ig.Provider, {
          value: f,
          children: [
            h && f.visualElement
              ? (0, r.jsx)(h, { visualElement: f.visualElement, ...u })
              : null,
            (function (e, t, i, { latestValues: n }, s, r = !1, a) {
              let o = (
                  a ?? id(e)
                    ? function (e, t, i, n) {
                        let s = (0, p.useMemo)(() => {
                          let i = iw();
                          return (
                            tY(i, t, tG(n), e.transformTemplate, e.style),
                            { ...i.attrs, style: { ...i.style } }
                          );
                        }, [t]);
                        if (e.style) {
                          let t = {};
                          iv(t, e.style, e), (s.style = { ...t, ...s.style });
                        }
                        return s;
                      }
                    : function (e, t) {
                        let i,
                          n,
                          s = {},
                          r =
                            ((i = e.style || {}),
                            iv((n = {}), i, e),
                            Object.assign(
                              n,
                              (function ({ transformTemplate: e }, t) {
                                return (0, p.useMemo)(() => {
                                  let i = iy();
                                  return (
                                    tW(i, t, e),
                                    Object.assign({}, i.vars, i.style)
                                  );
                                }, [t]);
                              })(e, t)
                            ),
                            n);
                        return (
                          e.drag &&
                            !1 !== e.dragListener &&
                            ((s.draggable = !1),
                            (r.userSelect =
                              r.WebkitUserSelect =
                              r.WebkitTouchCallout =
                                "none"),
                            (r.touchAction =
                              !0 === e.drag
                                ? "none"
                                : `pan-${"x" === e.drag ? "y" : "x"}`)),
                          void 0 === e.tabIndex &&
                            (e.onTap || e.onTapStart || e.whileTap) &&
                            (s.tabIndex = 0),
                          (s.style = r),
                          s
                        );
                      }
                )(t, n, s, e),
                l = (function (e, t, i) {
                  let n = {};
                  for (let s in e)
                    ("values" !== s || "object" != typeof e.values) &&
                      !ec(e[s]) &&
                      (ik(s) ||
                        (!0 === i && ij(s)) ||
                        (!t && !ij(s)) ||
                        (e.draggable && s.startsWith("onDrag"))) &&
                      (n[s] = e[s]);
                  return n;
                })(t, "string" == typeof e, r),
                h = e !== p.Fragment ? { ...l, ...o, ref: i } : {},
                { children: c } = t,
                d = (0, p.useMemo)(() => (ec(c) ? c.get() : c), [c]);
              return (0, p.createElement)(e, { ...h, children: d });
            })(
              e,
              i,
              ((l = f.visualElement),
              (c = (0, p.useRef)(n)),
              (0, p.useInsertionEffect)(() => {
                c.current = n;
              }),
              (d = (0, p.useRef)(null)),
              (0, p.useCallback)(
                (e) => {
                  e && g.onMount?.(e), l && (e ? l.mount(e) : l.unmount());
                  let t = c.current;
                  if ("function" == typeof t)
                    if (e) {
                      let i = t(e);
                      "function" == typeof i && (d.current = i);
                    } else d.current ? (d.current(), (d.current = null)) : t(e);
                  else t && (t.current = e);
                },
                [l]
              )),
              g,
              m,
              t,
              a
            ),
          ],
        });
      }
      l.displayName = `motion.${
        "string" == typeof e ? e : `create(${e.displayName ?? e.name ?? ""})`
      }`;
      let h = (0, p.forwardRef)(l);
      return (h[iR] = e), h;
    }
    class iO {
      constructor(e) {
        (this.isMounted = !1), (this.node = e);
      }
      update() {}
    }
    function i_(e, t, i) {
      let n = e.getProps();
      return tD(n, t, void 0 !== i ? i : n.custom, e);
    }
    function i$(e, t) {
      if (e?.inherit && t) {
        let { inherit: i, ...n } = e;
        return { ...t, ...n };
      }
      return e;
    }
    function iz(e, t) {
      let i = e?.[t] ?? e?.default ?? e;
      return i !== e ? i$(i, e) : i;
    }
    let iW = (e) => Array.isArray(e);
    function iU(e, t) {
      let i = e.getValue("willChange");
      if (ec(i) && i.add) return i.add(t);
      if (!i && e_.WillChange) {
        let i = new e_.WillChange("auto");
        e.addValue("willChange", i), i.add(t);
      }
    }
    let iX = (...e) => e.reduce((e, t) => (i) => t(e(i)));
    function iH(e, t, i) {
      return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
        ? e + (t - e) * 6 * i
        : i < 0.5
        ? t
        : i < 2 / 3
        ? e + (t - e) * (2 / 3 - i) * 6
        : e;
    }
    function iY(e, t) {
      return (i) => (i > 0 ? t : e);
    }
    let iq = (e, t, i) => {
        let n = e * e,
          s = i * (t * t - n) + n;
        return s < 0 ? 0 : Math.sqrt(s);
      },
      iG = [D, R, z];
    function iK(e) {
      let t = iG.find((t) => t.test(e));
      if (
        (eg(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`,
          "color-not-animatable"
        ),
        !t)
      )
        return !1;
      let i = t.parse(e);
      return (
        t === z &&
          (i = (function ({ hue: e, saturation: t, lightness: i, alpha: n }) {
            (e /= 360), (i /= 100);
            let s = 0,
              r = 0,
              a = 0;
            if ((t /= 100)) {
              let n = i < 0.5 ? i * (1 + t) : i + t - i * t,
                o = 2 * i - n;
              (s = iH(o, n, e + 1 / 3)),
                (r = iH(o, n, e)),
                (a = iH(o, n, e - 1 / 3));
            } else s = r = a = i;
            return {
              red: Math.round(255 * s),
              green: Math.round(255 * r),
              blue: Math.round(255 * a),
              alpha: n,
            };
          })(i)),
        i
      );
    }
    let iZ = (e, t) => {
        let i = iK(e),
          n = iK(t);
        if (!i || !n) return iY(e, t);
        let s = { ...i };
        return (e) => (
          (s.red = iq(i.red, n.red, e)),
          (s.green = iq(i.green, n.green, e)),
          (s.blue = iq(i.blue, n.blue, e)),
          (s.alpha = tQ(i.alpha, n.alpha, e)),
          R.transform(s)
        );
      },
      iJ = new Set(["none", "hidden"]);
    function iQ(e, t) {
      return (i) => tQ(e, t, i);
    }
    function i0(e) {
      return "number" == typeof e
        ? iQ
        : "string" == typeof e
        ? eb(e)
          ? iY
          : W.test(e)
          ? iZ
          : i5
        : Array.isArray(e)
        ? i1
        : "object" == typeof e
        ? W.test(e)
          ? iZ
          : i2
        : iY;
    }
    function i1(e, t) {
      let i = [...e],
        n = i.length,
        s = e.map((e, i) => i0(e)(e, t[i]));
      return (e) => {
        for (let t = 0; t < n; t++) i[t] = s[t](e);
        return i;
      };
    }
    function i2(e, t) {
      let i = { ...e, ...t },
        n = {};
      for (let s in i)
        void 0 !== e[s] && void 0 !== t[s] && (n[s] = i0(e[s])(e[s], t[s]));
      return (e) => {
        for (let t in n) i[t] = n[t](e);
        return i;
      };
    }
    let i5 = (e, t) => {
      let i = K.createTransformer(t),
        n = q(e),
        s = q(t);
      if (
        !(
          n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
        )
      )
        return (
          eg(
            !0,
            `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            "complex-values-different"
          ),
          iY(e, t)
        );
      if ((iJ.has(e) && !s.values.length) || (iJ.has(t) && !n.values.length))
        return iJ.has(e) ? (i) => (i <= 0 ? e : t) : (i) => (i >= 1 ? t : e);
      return iX(
        i1(
          (function (e, t) {
            let i = [],
              n = { color: 0, var: 0, number: 0 };
            for (let s = 0; s < t.values.length; s++) {
              let r = t.types[s],
                a = e.indexes[r][n[r]],
                o = e.values[a] ?? 0;
              (i[s] = o), n[r]++;
            }
            return i;
          })(n, s),
          s.values
        ),
        i
      );
    };
    function i3(e, t, i) {
      return "number" == typeof e &&
        "number" == typeof t &&
        "number" == typeof i
        ? tQ(e, t, i)
        : i0(e)(e, t);
    }
    let i4 = (e) => {
      let t = ({ timestamp: t }) => e(t);
      return {
        start: (e = !0) => eW.update(t, e),
        stop: () => eU(t),
        now: () => (eX.isProcessing ? eX.timestamp : tx.now()),
      };
    };
    function i6(e) {
      let t = 0,
        i = e.next(t);
      for (; !i.done && t < 2e4; ) (t += 50), (i = e.next(t));
      return t >= 2e4 ? 1 / 0 : t;
    }
    let i8 = 0.01,
      i7 = 2,
      i9 = 0.005,
      ne = 0.5;
    function nt(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    let ni = ["duration", "bounce"],
      nn = ["stiffness", "damping", "mass"];
    function ns(e, t) {
      return t.some((t) => void 0 !== e[t]);
    }
    function nr(e = 0.3, t = 0.3) {
      let i,
        n,
        s,
        r,
        a,
        o,
        l =
          "object" != typeof e
            ? { visualDuration: e, keyframes: [0, 1], bounce: t }
            : e,
        { restSpeed: h, restDelta: c } = l,
        d = l.keyframes[0],
        u = l.keyframes[l.keyframes.length - 1],
        p = { done: !1, value: d },
        {
          stiffness: m,
          damping: f,
          mass: g,
          duration: x,
          velocity: y,
          isResolvedFromDuration: v,
        } = (function (e) {
          let t = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...e,
          };
          if (!ns(e, nn) && ns(e, ni))
            if (((t.velocity = 0), e.visualDuration)) {
              let i = (2 * Math.PI) / (1.2 * e.visualDuration),
                n = i * i,
                s = 2 * k(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(n);
              t = { ...t, mass: 1, stiffness: n, damping: s };
            } else {
              let i = (function ({
                duration: e = 800,
                bounce: t = 0.3,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let s, r;
                eg(
                  e <= e3(10),
                  "Spring duration must be 10 seconds or less",
                  "spring-duration-limit"
                );
                let a = 1 - t;
                (a = k(0.05, 1, a)),
                  (e = k(0.01, 10, e / 1e3)),
                  a < 1
                    ? ((s = (t) => {
                        let n = t * a,
                          s = n * e;
                        return 0.001 - ((n - i) / nt(t, a)) * Math.exp(-s);
                      }),
                      (r = (t) => {
                        let n = t * a * e,
                          r = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          o = Math.exp(-n),
                          l = nt(Math.pow(t, 2), a);
                        return (
                          ((n * i + i - r) * o * (-s(t) + 0.001 > 0 ? -1 : 1)) /
                          l
                        );
                      }))
                    : ((s = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - i) * e + 1)),
                      (r = (t) => e * e * (i - t) * Math.exp(-t * e)));
                let o = (function (e, t, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= e(n) / t(n);
                  return n;
                })(s, r, 5 / e);
                if (((e = e3(e)), isNaN(o)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(o, 2) * n;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(n * t),
                    duration: e,
                  };
                }
              })({ ...e, velocity: 0 });
              (t = { ...t, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
          return t;
        })({ ...l, velocity: -((l.velocity || 0) / 1e3) }),
        w = y || 0,
        b = f / (2 * Math.sqrt(m * g)),
        j = u - d,
        S = Math.sqrt(m / g) / 1e3,
        T = 5 > Math.abs(j);
      if ((h || (h = T ? i8 : i7), c || (c = T ? i9 : ne), b < 1))
        (s = nt(S, b)),
          (r = (w + b * S * j) / s),
          (i = (e) =>
            u -
            Math.exp(-b * S * e) * (r * Math.sin(s * e) + j * Math.cos(s * e))),
          (a = b * S * r + j * s),
          (o = b * S * j - r * s),
          (n = (e) =>
            Math.exp(-b * S * e) * (a * Math.sin(s * e) + o * Math.cos(s * e)));
      else if (1 === b) {
        i = (e) => u - Math.exp(-S * e) * (j + (w + S * j) * e);
        let e = w + S * j;
        n = (t) => Math.exp(-S * t) * (S * e * t - w);
      } else {
        let e = S * Math.sqrt(b * b - 1);
        i = (t) => {
          let i = Math.exp(-b * S * t),
            n = Math.min(e * t, 300);
          return (
            u -
            (i * ((w + b * S * j) * Math.sinh(n) + e * j * Math.cosh(n))) / e
          );
        };
        let t = (w + b * S * j) / e,
          s = b * S * t - j * e,
          r = b * S * j - t * e;
        n = (t) => {
          let i = Math.exp(-b * S * t),
            n = Math.min(e * t, 300);
          return i * (s * Math.sinh(n) + r * Math.cosh(n));
        };
      }
      let P = {
        calculatedDuration: (v && x) || null,
        velocity: (e) => e3(n(e)),
        next: (e) => {
          if (!v && b < 1) {
            let t = Math.exp(-b * S * e),
              i = Math.sin(s * e),
              n = Math.cos(s * e),
              l = u - t * (r * i + j * n);
            return (
              (p.done =
                Math.abs(e3(t * (a * i + o * n))) <= h && Math.abs(u - l) <= c),
              (p.value = p.done ? u : l),
              p
            );
          }
          let t = i(e);
          return (
            v
              ? (p.done = e >= x)
              : (p.done = Math.abs(e3(n(e))) <= h && Math.abs(u - t) <= c),
            (p.value = p.done ? u : t),
            p
          );
        },
        toString: () => {
          let e = Math.min(i6(P), 2e4),
            t = th((t) => P.next(e * t).value, e, 30);
          return e + "ms " + t;
        },
        toTransition: () => {},
      };
      return P;
    }
    function na(e, t, i) {
      let n = Math.max(t - 5, 0);
      return ty(i - e(n), t - n);
    }
    function no({
      keyframes: e,
      velocity: t = 0,
      power: i = 0.8,
      timeConstant: n = 325,
      bounceDamping: s = 10,
      bounceStiffness: r = 500,
      modifyTarget: a,
      min: o,
      max: l,
      restDelta: h = 0.5,
      restSpeed: c,
    }) {
      let d,
        u,
        p = e[0],
        m = { done: !1, value: p },
        f = i * t,
        g = p + f,
        x = void 0 === a ? g : a(g);
      x !== g && (f = x - p);
      let y = (e) => -f * Math.exp(-e / n),
        v = (e) => x + y(e),
        w = (e) => {
          let t = y(e),
            i = v(e);
          (m.done = Math.abs(t) <= h), (m.value = m.done ? x : i);
        },
        b = (e) => {
          let t;
          if (
            ((t = m.value), (void 0 !== o && t < o) || (void 0 !== l && t > l))
          ) {
            var i;
            (d = e),
              (u = nr({
                keyframes: [
                  m.value,
                  ((i = m.value),
                  void 0 === o
                    ? l
                    : void 0 === l || Math.abs(o - i) < Math.abs(l - i)
                    ? o
                    : l),
                ],
                velocity: na(v, e, m.value),
                damping: s,
                stiffness: r,
                restDelta: h,
                restSpeed: c,
              }));
          }
        };
      return (
        b(0),
        {
          calculatedDuration: null,
          next: (e) => {
            let t = !1;
            return (u || void 0 !== d || ((t = !0), w(e), b(e)),
            void 0 !== d && e >= d)
              ? u.next(e - d)
              : (t || w(e), m);
          },
        }
      );
    }
    nr.applyToOptions = (e) => {
      let t = (function (e, t = 100, i) {
        let n = i({ ...e, keyframes: [0, t] }),
          s = Math.min(i6(n), 2e4);
        return {
          type: "keyframes",
          ease: (e) => n.next(s * e).value / t,
          duration: s / 1e3,
        };
      })(e, 100, nr);
      return (
        (e.ease = t.ease),
        (e.duration = e3(t.duration)),
        (e.type = "keyframes"),
        e
      );
    };
    let nl = (e, t, i) =>
      (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;
    function nh(e, t, i, n) {
      return e === t && i === n
        ? eO
        : (s) =>
            0 === s || 1 === s
              ? s
              : nl(
                  (function (e, t, i, n, s) {
                    let r,
                      a,
                      o = 0;
                    do
                      (r = nl((a = t + (i - t) / 2), n, s) - e) > 0
                        ? (i = a)
                        : (t = a);
                    while (Math.abs(r) > 1e-7 && ++o < 12);
                    return a;
                  })(s, 0, 1, e, i),
                  t,
                  n
                );
    }
    let nc = nh(0.42, 0, 1, 1),
      nd = nh(0, 0, 0.58, 1),
      nu = nh(0.42, 0, 0.58, 1),
      np = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
      nm = (e) => (t) => 1 - e(1 - t),
      nf = nh(0.33, 1.53, 0.69, 0.99),
      ng = nm(nf),
      nx = np(ng),
      ny = (e) =>
        e >= 1
          ? 1
          : (e *= 2) < 1
          ? 0.5 * ng(e)
          : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
      nv = (e) => 1 - Math.sin(Math.acos(e)),
      nw = nm(nv),
      nb = np(nv),
      nj = {
        linear: eO,
        easeIn: nc,
        easeInOut: nu,
        easeOut: nd,
        circIn: nv,
        circInOut: nb,
        circOut: nw,
        backIn: ng,
        backInOut: nx,
        backOut: nf,
        anticipate: ny,
      },
      nk = (e) => {
        if (to(e)) {
          ex(
            4 === e.length,
            "Cubic bezier arrays must contain four numerical values.",
            "cubic-bezier-length"
          );
          let [t, i, n, s] = e;
          return nh(t, i, n, s);
        }
        return "string" == typeof e
          ? (ex(
              void 0 !== nj[e],
              `Invalid easing type '${e}'`,
              "invalid-easing-type"
            ),
            nj[e])
          : e;
      },
      nS = (e, t, i) => {
        let n = t - e;
        return n ? (i - e) / n : 1;
      };
    function nT({
      duration: e = 300,
      keyframes: t,
      times: i,
      ease: n = "easeInOut",
    }) {
      var s;
      let r,
        a = Array.isArray(n) && "number" != typeof n[0] ? n.map(nk) : nk(n),
        o = { done: !1, value: t[0] },
        l = (function (e, t, { clamp: i = !0, ease: n, mixer: s } = {}) {
          let r = e.length;
          if (
            (ex(
              r === t.length,
              "Both input and output ranges must be the same length",
              "range-length"
            ),
            1 === r)
          )
            return () => t[0];
          if (2 === r && t[0] === t[1]) return () => t[1];
          let a = e[0] === e[1];
          e[0] > e[r - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
          let o = (function (e, t, i) {
              let n = [],
                s = i || e_.mix || i3,
                r = e.length - 1;
              for (let i = 0; i < r; i++) {
                let r = s(e[i], e[i + 1]);
                t && (r = iX(Array.isArray(t) ? t[i] || eO : t, r)), n.push(r);
              }
              return n;
            })(t, n, s),
            l = o.length,
            h = (i) => {
              if (a && i < e[0]) return t[0];
              let n = 0;
              if (l > 1) for (; n < e.length - 2 && !(i < e[n + 1]); n++);
              let s = nS(e[n], e[n + 1], i);
              return o[n](s);
            };
          return i ? (t) => h(k(e[0], e[r - 1], t)) : h;
        })(
          ((s =
            i && i.length === t.length
              ? i
              : (!(function (e, t) {
                  let i = e[e.length - 1];
                  for (let n = 1; n <= t; n++) {
                    let s = nS(0, t, n);
                    e.push(tQ(i, 1, s));
                  }
                })((r = [0]), t.length - 1),
                r)),
          s.map((t) => t * e)),
          t,
          {
            ease: Array.isArray(a)
              ? a
              : t.map(() => a || nu).splice(0, t.length - 1),
          }
        );
      return {
        calculatedDuration: e,
        next: (t) => ((o.value = l(t)), (o.done = t >= e), o),
      };
    }
    let nP = { decay: no, inertia: no, tween: nT, keyframes: nT, spring: nr };
    function nN(e) {
      "string" == typeof e.type && (e.type = nP[e.type]);
    }
    let nC = (e) => e / 100;
    class nE extends tr {
      constructor(e) {
        super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.delayState = { done: !1, value: void 0 }),
          (this.stop = () => {
            let { motionValue: e } = this.options;
            e && e.updatedAt !== tx.now() && this.tick(tx.now()),
              (this.isStopped = !0),
              "idle" !== this.state &&
                (this.teardown(), this.options.onStop?.());
          }),
          ta.mainThread++,
          (this.options = e),
          this.initAnimation(),
          this.play(),
          !1 === e.autoplay && this.pause();
      }
      initAnimation() {
        let { options: e } = this;
        nN(e);
        let {
            type: t = nT,
            repeat: i = 0,
            repeatDelay: n = 0,
            repeatType: s,
            velocity: r = 0,
          } = e,
          { keyframes: a } = e,
          o = t || nT;
        o !== nT &&
          "number" != typeof a[0] &&
          ((this.mixKeyframes = iX(nC, i3(a[0], a[1]))), (a = [0, 100]));
        let l = o({ ...e, keyframes: a });
        "mirror" === s &&
          (this.mirroredGenerator = o({
            ...e,
            keyframes: [...a].reverse(),
            velocity: -r,
          })),
          null === l.calculatedDuration && (l.calculatedDuration = i6(l));
        let { calculatedDuration: h } = l;
        (this.calculatedDuration = h),
          (this.resolvedDuration = h + n),
          (this.totalDuration = this.resolvedDuration * (i + 1) - n),
          (this.generator = l);
      }
      updateTime(e) {
        let t = Math.round(e - this.startTime) * this.playbackSpeed;
        null !== this.holdTime
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = t);
      }
      tick(e, t = !1) {
        let i,
          {
            generator: n,
            totalDuration: s,
            mixKeyframes: r,
            mirroredGenerator: a,
            resolvedDuration: o,
            calculatedDuration: l,
          } = this;
        if (null === this.startTime) return n.next(0);
        let {
          delay: h = 0,
          keyframes: c,
          repeat: d,
          repeatType: u,
          repeatDelay: p,
          type: m,
          onUpdate: f,
          finalKeyframe: g,
        } = this.options;
        this.speed > 0
          ? (this.startTime = Math.min(this.startTime, e))
          : this.speed < 0 &&
            (this.startTime = Math.min(e - s / this.speed, this.startTime)),
          t ? (this.currentTime = e) : this.updateTime(e);
        let x = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
          y = this.playbackSpeed >= 0 ? x < 0 : x > s;
        (this.currentTime = Math.max(x, 0)),
          "finished" === this.state &&
            null === this.holdTime &&
            (this.currentTime = s);
        let v = this.currentTime,
          w = n;
        if (d) {
          let e = Math.min(this.currentTime, s) / o,
            t = Math.floor(e),
            i = e % 1;
          !i && e >= 1 && (i = 1),
            1 === i && t--,
            (t = Math.min(t, d + 1)) % 2 &&
              ("reverse" === u
                ? ((i = 1 - i), p && (i -= p / o))
                : "mirror" === u && (w = a)),
            (v = k(0, 1, i) * o);
        }
        y
          ? ((this.delayState.value = c[0]), (i = this.delayState))
          : (i = w.next(v)),
          r && !y && (i.value = r(i.value));
        let { done: b } = i;
        y ||
          null === l ||
          (b =
            this.playbackSpeed >= 0
              ? this.currentTime >= s
              : this.currentTime <= 0);
        let j =
          null === this.holdTime &&
          ("finished" === this.state || ("running" === this.state && b));
        return (
          j && m !== no && (i.value = ts(c, this.options, g, this.speed)),
          f && f(i.value),
          j && this.finish(),
          i
        );
      }
      then(e, t) {
        return this.finished.then(e, t);
      }
      get duration() {
        return this.calculatedDuration / 1e3;
      }
      get iterationDuration() {
        let { delay: e = 0 } = this.options || {};
        return this.duration + e / 1e3;
      }
      get time() {
        return this.currentTime / 1e3;
      }
      set time(e) {
        (e = e3(e)),
          (this.currentTime = e),
          null === this.startTime ||
          null !== this.holdTime ||
          0 === this.playbackSpeed
            ? (this.holdTime = e)
            : this.driver &&
              (this.startTime = this.driver.now() - e / this.playbackSpeed),
          this.driver
            ? this.driver.start(!1)
            : ((this.startTime = 0),
              (this.state = "paused"),
              (this.holdTime = e),
              this.tick(e));
      }
      getGeneratorVelocity() {
        let e = this.currentTime;
        if (e <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(e);
        let t = this.generator.next(e).value;
        return na((e) => this.generator.next(e).value, e, t);
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(e) {
        let t = this.playbackSpeed !== e;
        t && this.driver && this.updateTime(tx.now()),
          (this.playbackSpeed = e),
          t && this.driver && (this.time = this.currentTime / 1e3);
      }
      play() {
        if (this.isStopped) return;
        let { driver: e = i4, startTime: t } = this.options;
        this.driver || (this.driver = e((e) => this.tick(e))),
          this.options.onPlay?.();
        let i = this.driver.now();
        "finished" === this.state
          ? (this.updateFinished(), (this.startTime = i))
          : null !== this.holdTime
          ? (this.startTime = i - this.holdTime)
          : this.startTime || (this.startTime = t ?? i),
          "finished" === this.state &&
            this.speed < 0 &&
            (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start();
      }
      pause() {
        (this.state = "paused"),
          this.updateTime(tx.now()),
          (this.holdTime = this.currentTime);
      }
      complete() {
        "running" !== this.state && this.play(),
          (this.state = "finished"),
          (this.holdTime = null);
      }
      finish() {
        this.notifyFinished(),
          this.teardown(),
          (this.state = "finished"),
          this.options.onComplete?.();
      }
      cancel() {
        (this.holdTime = null),
          (this.startTime = 0),
          this.tick(0),
          this.teardown(),
          this.options.onCancel?.();
      }
      teardown() {
        (this.state = "idle"),
          this.stopDriver(),
          (this.startTime = this.holdTime = null),
          ta.mainThread--;
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(e) {
        return (this.startTime = 0), this.tick(e, !0);
      }
      attachTimeline(e) {
        return (
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"),
            (this.options.ease = "linear"),
            this.initAnimation()),
          this.driver?.stop(),
          e.observe(this)
        );
      }
    }
    let nA = { anticipate: ny, backInOut: nx, circInOut: nb };
    class nM extends tp {
      constructor(e) {
        !(function (e) {
          "string" == typeof e.ease && e.ease in nA && (e.ease = nA[e.ease]);
        })(e),
          nN(e),
          super(e),
          void 0 !== e.startTime &&
            !1 !== e.autoplay &&
            (this.startTime = e.startTime),
          (this.options = e);
      }
      updateMotionValue(e) {
        let {
          motionValue: t,
          onUpdate: i,
          onComplete: n,
          element: s,
          ...r
        } = this.options;
        if (!t) return;
        if (void 0 !== e) return void t.set(e);
        let a = new nE({ ...r, autoplay: !1 }),
          o = Math.max(10, tx.now() - this.startTime),
          l = k(0, 10, o - 10),
          h = a.sample(o).value,
          { name: c } = this.options;
        s && c && e7(s, c, h),
          t.setWithVelocity(a.sample(Math.max(0, o - l)).value, h, l),
          a.stop();
      }
    }
    let nV = (e, t) =>
      "zIndex" !== t &&
      !!(
        "number" == typeof e ||
        Array.isArray(e) ||
        ("string" == typeof e &&
          (K.test(e) || "0" === e) &&
          !e.startsWith("url("))
      );
    function nR(e) {
      (e.duration = 0), (e.type = "keyframes");
    }
    let nD = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
      nL = new Set([
        "color",
        "backgroundColor",
        "outlineColor",
        "fill",
        "stroke",
        "borderColor",
        "borderTopColor",
        "borderRightColor",
        "borderBottomColor",
        "borderLeftColor",
      ]),
      nB = e9(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class nI extends tr {
      constructor({
        autoplay: e = !0,
        delay: t = 0,
        type: i = "keyframes",
        repeat: n = 0,
        repeatDelay: s = 0,
        repeatType: r = "loop",
        keyframes: a,
        name: o,
        motionValue: l,
        element: h,
        ...c
      }) {
        super(),
          (this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()),
              this.keyframeResolver?.cancel();
          }),
          (this.createdAt = tx.now());
        const d = {
            autoplay: e,
            delay: t,
            type: i,
            repeat: n,
            repeatDelay: s,
            repeatType: r,
            name: o,
            motionValue: l,
            element: h,
            ...c,
          },
          u = h?.KeyframeResolver || eQ;
        (this.keyframeResolver = new u(
          a,
          (e, t, i) => this.onKeyframesResolved(e, t, d, !i),
          o,
          l,
          h
        )),
          this.keyframeResolver?.scheduleResolve();
      }
      onKeyframesResolved(e, t, i, n) {
        let s;
        this.keyframeResolver = void 0;
        let {
          name: r,
          type: a,
          velocity: o,
          delay: l,
          isHandoff: h,
          onUpdate: c,
        } = i;
        this.resolvedAt = tx.now();
        let d = !0;
        !(function (e, t, i, n) {
          let s = e[0];
          if (null === s) return !1;
          if ("display" === t || "visibility" === t) return !0;
          let r = e[e.length - 1],
            a = nV(s, t),
            o = nV(r, t);
          return (
            eg(
              a === o,
              `You are trying to animate ${t} from "${s}" to "${r}". "${
                a ? r : s
              }" is not an animatable value.`,
              "value-not-animatable"
            ),
            !!a &&
              !!o &&
              ((function (e) {
                let t = e[0];
                if (1 === e.length) return !0;
                for (let i = 0; i < e.length; i++) if (e[i] !== t) return !0;
              })(e) ||
                (("spring" === i || tu(i)) && n))
          );
        })(e, r, a, o) &&
          ((d = !1),
          (e_.instantAnimations || !l) && c?.(ts(e, i, t)),
          (e[0] = e[e.length - 1]),
          nR(i),
          (i.repeat = 0));
        let u = {
            startTime: n
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : void 0,
            finalKeyframe: t,
            ...i,
            keyframes: e,
          },
          p =
            d &&
            !h &&
            (function (e) {
              let {
                motionValue: t,
                name: i,
                repeatDelay: n,
                repeatType: s,
                damping: r,
                type: a,
                keyframes: o,
              } = e;
              if (!(t?.owner?.current instanceof HTMLElement)) return !1;
              let { onUpdate: l, transformTemplate: h } = t.owner.getProps();
              return (
                nB() &&
                i &&
                (tm.has(i) ||
                  (nL.has(i) &&
                    (function (e) {
                      for (let t = 0; t < e.length; t++)
                        if ("string" == typeof e[t] && nD.test(e[t])) return !0;
                      return !1;
                    })(o))) &&
                ("transform" !== i || !h) &&
                !l &&
                !n &&
                "mirror" !== s &&
                0 !== r &&
                "inertia" !== a
              );
            })(u),
          m = u.motionValue?.owner?.current;
        if (p)
          try {
            s = new nM({ ...u, element: m });
          } catch {
            s = new nE(u);
          }
        else s = new nE(u);
        s.finished
          .then(() => {
            this.notifyFinished();
          })
          .catch(eO),
          this.pendingTimeline &&
            ((this.stopTimeline = s.attachTimeline(this.pendingTimeline)),
            (this.pendingTimeline = void 0)),
          (this._animation = s);
      }
      get finished() {
        return this._animation ? this.animation.finished : this._finished;
      }
      then(e, t) {
        return this.finished.finally(e).then(() => {});
      }
      get animation() {
        return (
          this._animation ||
            (this.keyframeResolver?.resume(), (eK = !0), eJ(), eZ(), (eK = !1)),
          this._animation
        );
      }
      get duration() {
        return this.animation.duration;
      }
      get iterationDuration() {
        return this.animation.iterationDuration;
      }
      get time() {
        return this.animation.time;
      }
      set time(e) {
        this.animation.time = e;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(e) {
        this.animation.speed = e;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(e) {
        return (
          this._animation
            ? (this.stopTimeline = this.animation.attachTimeline(e))
            : (this.pendingTimeline = e),
          () => this.stop()
        );
      }
      play() {
        this.animation.play();
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.complete();
      }
      cancel() {
        this._animation && this.animation.cancel(),
          this.keyframeResolver?.cancel();
      }
    }
    let nF = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      nO = { type: "keyframes", duration: 0.8 },
      n_ = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      n$ = new Set([
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
      ]),
      nz =
        (e, t, i, n = {}, s, r) =>
        (a) => {
          let o = iz(n, e) || {},
            l = o.delay || n.delay || 0,
            { elapsed: h = 0 } = n;
          h -= e3(l);
          let c = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...o,
            delay: -h,
            onUpdate: (e) => {
              t.set(e), o.onUpdate && o.onUpdate(e);
            },
            onComplete: () => {
              a(), o.onComplete && o.onComplete();
            },
            name: e,
            motionValue: t,
            element: r ? void 0 : s,
          };
          !(function (e) {
            for (let t in e) if (!n$.has(t)) return !0;
            return !1;
          })(o) &&
            Object.assign(
              c,
              ((e, { keyframes: t }) =>
                t.length > 2
                  ? nO
                  : j.has(e)
                  ? e.startsWith("scale")
                    ? {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10,
                      }
                    : nF
                  : n_)(e, c)
            ),
            c.duration && (c.duration = e3(c.duration)),
            c.repeatDelay && (c.repeatDelay = e3(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from);
          let d = !1;
          if (
            ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
              (nR(c), 0 === c.delay && (d = !0)),
            (e_.instantAnimations ||
              e_.skipAnimations ||
              s?.shouldSkipAnimations ||
              o.skipAnimations) &&
              ((d = !0), nR(c), (c.delay = 0)),
            (c.allowFlatten = !o.type && !o.ease),
            d && !r && void 0 !== t.get())
          ) {
            let e = ts(c.keyframes, o);
            if (void 0 !== e)
              return void eW.update(() => {
                c.onUpdate(e), c.onComplete();
              });
          }
          return o.isSync ? new nE(c) : new nI(c);
        };
    function nW(e, t, { delay: i = 0, transitionOverride: n, type: s } = {}) {
      let { transition: r, transitionEnd: a, ...o } = t,
        l = e.getDefaultTransition();
      r = r ? i$(r, l) : l;
      let h = r?.reduceMotion,
        c = r?.skipAnimations;
      n && (r = n);
      let d = [],
        u = s && e.animationState && e.animationState.getState()[s],
        p = r?.path;
      for (let t in (p && p.animateVisualElement(e, o, r, i, d), o)) {
        let n = e.getValue(t, e.latestValues[t] ?? null),
          s = o[t];
        if (
          void 0 === s ||
          (u &&
            (function ({ protectedKeys: e, needsAnimating: t }, i) {
              let n = e.hasOwnProperty(i) && !0 !== t[i];
              return (t[i] = !1), n;
            })(u, t))
        )
          continue;
        let a = { delay: i, ...iz(r || {}, t) };
        c && (a.skipAnimations = !0);
        let l = n.get();
        if (
          void 0 !== l &&
          !n.isAnimating() &&
          !Array.isArray(s) &&
          s === l &&
          !a.velocity
        ) {
          eW.update(() => n.set(s));
          continue;
        }
        let p = !1;
        if (window.MotionHandoffAnimation) {
          let i = e.props[iD];
          if (i) {
            let e = window.MotionHandoffAnimation(i, t, eW);
            null !== e && ((a.startTime = e), (p = !0));
          }
        }
        iU(e, t);
        let m = h ?? e.shouldReduceMotion;
        n.start(nz(t, n, s, m && ed.has(t) ? { type: !1 } : a, e, p));
        let f = n.animation;
        f && d.push(f);
      }
      if (a) {
        let t = () =>
          eW.update(() => {
            a &&
              (function (e, t) {
                let {
                  transitionEnd: i = {},
                  transition: n = {},
                  ...s
                } = i_(e, t) || {};
                for (let t in (s = { ...s, ...i })) {
                  var r;
                  let i = iW((r = s[t])) ? r[r.length - 1] || 0 : r;
                  e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, tb(i));
                }
              })(e, a);
          });
        d.length ? Promise.all(d).then(t) : t();
      }
      return d;
    }
    function nU(e, t, i, n = 0, s = 1) {
      let r = Array.from(e)
          .sort((e, t) => e.sortNodePosition(t))
          .indexOf(t),
        a = e.size,
        o = (a - 1) * n;
      return "function" == typeof i ? i(r, a) : 1 === s ? r * n : o - r * n;
    }
    function nX(e, t, i = {}) {
      let n = i_(e, t, "exit" === i.type ? e.presenceContext?.custom : void 0),
        { transition: s = e.getDefaultTransition() || {} } = n || {};
      i.transitionOverride && (s = i.transitionOverride);
      let r = n ? () => Promise.all(nW(e, n, i)) : () => Promise.resolve(),
        a =
          e.variantChildren && e.variantChildren.size
            ? (n = 0) => {
                let {
                  delayChildren: r = 0,
                  staggerChildren: a,
                  staggerDirection: o,
                } = s;
                return (function (e, t, i = 0, n = 0, s = 0, r = 1, a) {
                  let o = [];
                  for (let l of e.variantChildren)
                    l.notify("AnimationStart", t),
                      o.push(
                        nX(l, t, {
                          ...a,
                          delay:
                            i +
                            ("function" == typeof n ? 0 : n) +
                            nU(e.variantChildren, l, n, s, r),
                        }).then(() => l.notify("AnimationComplete", t))
                      );
                  return Promise.all(o);
                })(e, t, n, r, a, o, i);
              }
            : () => Promise.resolve(),
        { when: o } = s;
      if (!o) return Promise.all([r(), a(i.delay)]);
      {
        let [e, t] = "beforeChildren" === o ? [r, a] : [a, r];
        return e().then(() => t());
      }
    }
    let nH = tN.length;
    function nY(e, t) {
      if (!Array.isArray(t)) return !1;
      let i = t.length;
      if (i !== e.length) return !1;
      for (let n = 0; n < i; n++) if (t[n] !== e[n]) return !1;
      return !0;
    }
    let nq = [...tP].reverse(),
      nG = tP.length;
    function nK(e = !1) {
      return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      };
    }
    function nZ() {
      return {
        animate: nK(!0),
        whileInView: nK(),
        whileHover: nK(),
        whileTap: nK(),
        whileDrag: nK(),
        whileFocus: nK(),
        exit: nK(),
      };
    }
    let nJ = 0;
    function nQ(e) {
      return [e("x"), e("y")];
    }
    function n0(e, t, i, n = { passive: !0 }) {
      return e.addEventListener(t, i, n), () => e.removeEventListener(t, i);
    }
    let n1 = { x: !1, y: !1 };
    function n2(e) {
      return e.max - e.min;
    }
    function n5(e, t, i, n = 0.5) {
      (e.origin = n),
        (e.originPoint = tQ(t.min, t.max, e.origin)),
        (e.scale = n2(i) / n2(t)),
        (e.translate = tQ(i.min, i.max, e.origin) - e.originPoint),
        ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
          (e.scale = 1),
        ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
          (e.translate = 0);
    }
    function n3(e, t, i, n) {
      n5(e.x, t.x, i.x, n ? n.originX : void 0),
        n5(e.y, t.y, i.y, n ? n.originY : void 0);
    }
    function n4(e, t, i, n = 0) {
      (e.min = (n ? tQ(i.min, i.max, n) : i.min) + t.min),
        (e.max = e.min + n2(t));
    }
    function n6(e, t, i, n = 0) {
      let s = n ? tQ(i.min, i.max, n) : i.min;
      (e.min = t.min - s), (e.max = e.min + n2(t));
    }
    function n8(e, t, i, n) {
      n6(e.x, t.x, i.x, n?.x), n6(e.y, t.y, i.y, n?.y);
    }
    let n7 = (e) => "object" == typeof e && null !== e;
    function n9(e) {
      return n7(e) && "ownerSVGElement" in e;
    }
    function se(e, t, i) {
      if (null == e) return [];
      if (e instanceof EventTarget) return [e];
      if ("string" == typeof e) {
        let n = document;
        t && (n = t.current);
        let s = i?.[e] ?? n.querySelectorAll(e);
        return s ? Array.from(s) : [];
      }
      return Array.from(e).filter((e) => null != e);
    }
    let st = new WeakMap(),
      si = (e, t, i) => (n, s) =>
        s && s[0]
          ? s[0][e + "Size"]
          : n9(n) && "getBBox" in n
          ? n.getBBox()[t]
          : n[i],
      sn = si("inline", "width", "offsetWidth"),
      ss = si("block", "height", "offsetHeight");
    function sr({ target: e, borderBoxSize: t }) {
      st.get(e)?.forEach((i) => {
        i(e, {
          get width() {
            return sn(e, t);
          },
          get height() {
            return ss(e, t);
          },
        });
      });
    }
    function sa(e) {
      e.forEach(sr);
    }
    let so = new Set();
    function sl(e, t) {
      let s;
      return "function" == typeof e
        ? (so.add(e),
          n ||
            ((n = () => {
              let e = {
                get width() {
                  return window.innerWidth;
                },
                get height() {
                  return window.innerHeight;
                },
              };
              so.forEach((t) => t(e));
            }),
            window.addEventListener("resize", n)),
          () => {
            so.delete(e),
              so.size ||
                "function" != typeof n ||
                (window.removeEventListener("resize", n), (n = void 0));
          })
        : (!i && "u" > typeof ResizeObserver && (i = new ResizeObserver(sa)),
          (s = se(e)).forEach((e) => {
            let n = st.get(e);
            n || ((n = new Set()), st.set(e, n)), n.add(t), i?.observe(e);
          }),
          () => {
            s.forEach((e) => {
              let n = st.get(e);
              n?.delete(t), n?.size || i?.unobserve(e);
            });
          });
    }
    let sh = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
      sc = new Set(["INPUT", "SELECT", "TEXTAREA"]),
      sd = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
    function su(e) {
      return { point: { x: e.pageX, y: e.pageY } };
    }
    function sp(e, t, i, n) {
      return n0(e, t, (e) => sd(e) && i(e, su(e)), n);
    }
    let sm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
      sf = (e, t) => Math.abs(e - t),
      sg = new Set(["auto", "scroll"]);
    class sx {
      constructor(
        e,
        t,
        {
          transformPagePoint: i,
          contextWindow: n = window,
          dragSnapToOrigin: s = !1,
          distanceThreshold: r = 3,
          element: a,
        } = {}
      ) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.lastRawMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.scrollPositions = new Map()),
          (this.removeScrollListeners = null),
          (this.onElementScroll = (e) => {
            this.handleScroll(e.target);
          }),
          (this.onWindowScroll = () => {
            this.handleScroll(window);
          }),
          (this.updatePoint = () => {
            var e, t;
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            this.lastRawMoveEventInfo &&
              (this.lastMoveEventInfo = sy(
                this.lastRawMoveEventInfo,
                this.transformPagePoint
              ));
            let i = sw(this.lastMoveEventInfo, this.history),
              n = null !== this.startEvent,
              s =
                ((e = i.offset),
                (t = { x: 0, y: 0 }),
                Math.sqrt(sf(e.x, t.x) ** 2 + sf(e.y, t.y) ** 2) >=
                  this.distanceThreshold);
            if (!n && !s) return;
            let { point: r } = i,
              { timestamp: a } = eX;
            this.history.push({ ...r, timestamp: a });
            let { onStart: o, onMove: l } = this.handlers;
            n ||
              (o && o(this.lastMoveEvent, i),
              (this.startEvent = this.lastMoveEvent)),
              l && l(this.lastMoveEvent, i);
          }),
          (this.handlePointerMove = (e, t) => {
            (this.lastMoveEvent = e),
              (this.lastRawMoveEventInfo = t),
              (this.lastMoveEventInfo = sy(t, this.transformPagePoint)),
              eW.update(this.updatePoint, !0);
          }),
          (this.handlePointerUp = (e, t) => {
            this.end();
            let {
              onEnd: i,
              onSessionEnd: n,
              resumeAnimation: s,
            } = this.handlers;
            if (
              ((this.dragSnapToOrigin || !this.startEvent) && s && s(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
            )
              return;
            let r = sw(
              "pointercancel" === e.type
                ? this.lastMoveEventInfo
                : sy(t, this.transformPagePoint),
              this.history
            );
            this.startEvent && i && i(e, r), n && n(e, r);
          }),
          !sd(e))
        )
          return;
        (this.dragSnapToOrigin = s),
          (this.handlers = t),
          (this.transformPagePoint = i),
          (this.distanceThreshold = r),
          (this.contextWindow = n || window);
        const o = sy(su(e), this.transformPagePoint),
          { point: l } = o,
          { timestamp: h } = eX;
        this.history = [{ ...l, timestamp: h }];
        const { onSessionStart: c } = t;
        c && c(e, sw(o, this.history)),
          (this.removeListeners = iX(
            sp(this.contextWindow, "pointermove", this.handlePointerMove),
            sp(this.contextWindow, "pointerup", this.handlePointerUp),
            sp(this.contextWindow, "pointercancel", this.handlePointerUp)
          )),
          a && this.startScrollTracking(a);
      }
      startScrollTracking(e) {
        let t = e.parentElement;
        for (; t; ) {
          let e = getComputedStyle(t);
          (sg.has(e.overflowX) || sg.has(e.overflowY)) &&
            this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
            (t = t.parentElement);
        }
        this.scrollPositions.set(window, {
          x: window.scrollX,
          y: window.scrollY,
        }),
          window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
          }),
          window.addEventListener("scroll", this.onWindowScroll),
          (this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
              capture: !0,
            }),
              window.removeEventListener("scroll", this.onWindowScroll);
          });
      }
      handleScroll(e) {
        let t = this.scrollPositions.get(e);
        if (!t) return;
        let i = e === window,
          n = i
            ? { x: window.scrollX, y: window.scrollY }
            : { x: e.scrollLeft, y: e.scrollTop },
          s = { x: n.x - t.x, y: n.y - t.y };
        (0 !== s.x || 0 !== s.y) &&
          (i
            ? this.lastMoveEventInfo &&
              ((this.lastMoveEventInfo.point.x += s.x),
              (this.lastMoveEventInfo.point.y += s.y))
            : this.history.length > 0 &&
              ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
          this.scrollPositions.set(e, n),
          eW.update(this.updatePoint, !0));
      }
      updateHandlers(e) {
        this.handlers = e;
      }
      end() {
        this.removeListeners && this.removeListeners(),
          this.removeScrollListeners && this.removeScrollListeners(),
          this.scrollPositions.clear(),
          eU(this.updatePoint);
      }
    }
    function sy(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function sv(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function sw({ point: e }, t) {
      return {
        point: e,
        delta: sv(e, sb(t)),
        offset: sv(e, t[0]),
        velocity: (function (e) {
          if (e.length < 2) return { x: 0, y: 0 };
          let t = e.length - 1,
            i = null,
            n = sb(e);
          for (
            ;
            t >= 0 && ((i = e[t]), !(n.timestamp - i.timestamp > e3(0.1)));

          )
            t--;
          if (!i) return { x: 0, y: 0 };
          i === e[0] &&
            e.length > 2 &&
            n.timestamp - i.timestamp > 2 * e3(0.1) &&
            (i = e[1]);
          let s = (n.timestamp - i.timestamp) / 1e3;
          if (0 === s) return { x: 0, y: 0 };
          let r = { x: (n.x - i.x) / s, y: (n.y - i.y) / s };
          return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
        })(t),
      };
    }
    function sb(e) {
      return e[e.length - 1];
    }
    function sj(e, t, i) {
      return {
        min: void 0 !== t ? e.min + t : void 0,
        max: void 0 !== i ? e.max + i - (e.max - e.min) : void 0,
      };
    }
    function sk(e, t) {
      let i = t.min - e.min,
        n = t.max - e.max;
      return (
        t.max - t.min < e.max - e.min && ([i, n] = [n, i]), { min: i, max: n }
      );
    }
    function sS(e, t, i) {
      return { min: sT(e, t), max: sT(e, i) };
    }
    function sT(e, t) {
      return "number" == typeof e ? e : e[t] || 0;
    }
    let sP = new WeakMap();
    class sN {
      constructor(e) {
        (this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = eh()),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = e);
      }
      start(e, { snapToCursor: t = !1, distanceThreshold: i } = {}) {
        let { presenceContext: n } = this.visualElement;
        if (n && !1 === n.isPresent) return;
        let s = (e) => {
            t && this.snapToCursor(su(e).point), this.stopAnimation();
          },
          r = (e, t) => {
            let {
              drag: i,
              dragPropagation: n,
              onDragStart: s,
            } = this.getProps();
            if (
              i &&
              !n &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (function (e) {
                if ("x" === e || "y" === e)
                  if (n1[e]) return null;
                  else
                    return (
                      (n1[e] = !0),
                      () => {
                        n1[e] = !1;
                      }
                    );
                return n1.x || n1.y
                  ? null
                  : ((n1.x = n1.y = !0),
                    () => {
                      n1.x = n1.y = !1;
                    });
              })(i)),
              !this.openDragLock)
            )
              return;
            (this.latestPointerEvent = e),
              (this.latestPanInfo = t),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              nQ((e) => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (I.test(t)) {
                  let { projection: i } = this.visualElement;
                  if (i && i.layout) {
                    let n = i.layout.layoutBox[e];
                    n && (t = n2(n) * (parseFloat(t) / 100));
                  }
                }
                this.originPoint[e] = t;
              }),
              s && eW.update(() => s(e, t), !1, !0),
              iU(this.visualElement, "transform");
            let { animationState: r } = this.visualElement;
            r && r.setActive("whileDrag", !0);
          },
          a = (e, t) => {
            (this.latestPointerEvent = e), (this.latestPanInfo = t);
            let {
              dragPropagation: i,
              dragDirectionLock: n,
              onDirectionLock: s,
              onDrag: r,
            } = this.getProps();
            if (!i && !this.openDragLock) return;
            let { offset: a } = t;
            if (n && null === this.currentDirection) {
              (this.currentDirection = (function (e, t = 10) {
                let i = null;
                return (
                  Math.abs(e.y) > t
                    ? (i = "y")
                    : Math.abs(e.x) > t && (i = "x"),
                  i
                );
              })(a)),
                null !== this.currentDirection && s && s(this.currentDirection);
              return;
            }
            this.updateAxis("x", t.point, a),
              this.updateAxis("y", t.point, a),
              this.visualElement.render(),
              r && eW.update(() => r(e, t), !1, !0);
          },
          o = (e, t) => {
            (this.latestPointerEvent = e),
              (this.latestPanInfo = t),
              this.stop(e, t),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null);
          },
          l = () => {
            let { dragSnapToOrigin: e } = this.getProps();
            (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
          },
          { dragSnapToOrigin: h } = this.getProps();
        this.panSession = new sx(
          e,
          {
            onSessionStart: s,
            onStart: r,
            onMove: a,
            onSessionEnd: o,
            resumeAnimation: l,
          },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: h,
            distanceThreshold: i,
            contextWindow: sm(this.visualElement),
            element: this.visualElement.current,
          }
        );
      }
      stop(e, t) {
        let i = e || this.latestPointerEvent,
          n = t || this.latestPanInfo,
          s = this.isDragging;
        if ((this.cancel(), !s || !n || !i)) return;
        let { velocity: r } = n;
        this.startAnimation(r);
        let { onDragEnd: a } = this.getProps();
        a && eW.postRender(() => a(i, n));
      }
      cancel() {
        this.isDragging = !1;
        let { projection: e, animationState: t } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.endPanSession();
        let { dragPropagation: i } = this.getProps();
        !i &&
          this.openDragLock &&
          (this.openDragLock(), (this.openDragLock = null)),
          t && t.setActive("whileDrag", !1);
      }
      endPanSession() {
        this.panSession && this.panSession.end(), (this.panSession = void 0);
      }
      updateAxis(e, t, i) {
        let { drag: n } = this.getProps();
        if (!i || !sE(e, n, this.currentDirection)) return;
        let s = this.getAxisMotionValue(e),
          r = this.originPoint[e] + i[e];
        this.constraints &&
          this.constraints[e] &&
          (r = (function (e, { min: t, max: i }, n) {
            return (
              void 0 !== t && e < t
                ? (e = n ? tQ(t, e, n.min) : Math.max(e, t))
                : void 0 !== i &&
                  e > i &&
                  (e = n ? tQ(i, e, n.max) : Math.min(e, i)),
              e
            );
          })(r, this.constraints[e], this.elastic[e])),
          s.set(r);
      }
      resolveConstraints() {
        let { dragConstraints: e, dragElastic: t } = this.getProps(),
          i =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : this.visualElement.projection?.layout,
          n = this.constraints;
        e && iB(e)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : e && i
          ? (this.constraints = (function (
              e,
              { top: t, left: i, bottom: n, right: s }
            ) {
              return { x: sj(e.x, i, s), y: sj(e.y, t, n) };
            })(i.layoutBox, e))
          : (this.constraints = !1),
          (this.elastic = (function (e = 0.35) {
            return (
              !1 === e ? (e = 0) : !0 === e && (e = 0.35),
              { x: sS(e, "left", "right"), y: sS(e, "top", "bottom") }
            );
          })(t)),
          n !== this.constraints &&
            !iB(e) &&
            i &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            nQ((e) => {
              var t, n;
              let s;
              !1 !== this.constraints &&
                this.getAxisMotionValue(e) &&
                (this.constraints[e] =
                  ((t = i.layoutBox[e]),
                  (n = this.constraints[e]),
                  (s = {}),
                  void 0 !== n.min && (s.min = n.min - t.min),
                  void 0 !== n.max && (s.max = n.max - t.min),
                  s));
            });
      }
      resolveRefConstraints() {
        var e;
        let { dragConstraints: t, onMeasureDragConstraints: i } =
          this.getProps();
        if (!t || !iB(t)) return !1;
        let n = t.current;
        ex(
          null !== n,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          "drag-constraints-ref"
        );
        let { projection: s } = this.visualElement;
        if (!s || !s.layout) return !1;
        s.root && ((s.root.scroll = void 0), s.root.updateScroll());
        let r = (function (e, t, i) {
            let n = il(e, i),
              { scroll: s } = t;
            return s && (is(n.x, s.offset.x), is(n.y, s.offset.y)), n;
          })(n, s.root, this.visualElement.getTransformPagePoint()),
          a = ((e = s.layout.layoutBox), { x: sk(e.x, r.x), y: sk(e.y, r.y) });
        if (i) {
          let e = i(
            (function ({ x: e, y: t }) {
              return { top: t.min, right: e.max, bottom: t.max, left: e.min };
            })(a)
          );
          (this.hasMutatedConstraints = !!e), e && (a = t4(e));
        }
        return a;
      }
      startAnimation(e) {
        let {
            drag: t,
            dragMomentum: i,
            dragElastic: n,
            dragTransition: s,
            dragSnapToOrigin: r,
            onDragTransitionEnd: a,
          } = this.getProps(),
          o = this.constraints || {};
        return Promise.all(
          nQ((a) => {
            if (!sE(a, t, this.currentDirection)) return;
            let l = (o && o[a]) || {};
            (!0 === r || r === a) && (l = { min: 0, max: 0 });
            let h = {
              type: "inertia",
              velocity: i ? e[a] : 0,
              bounceStiffness: n ? 200 : 1e6,
              bounceDamping: n ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...s,
              ...l,
            };
            return this.startAxisValueAnimation(a, h);
          })
        ).then(a);
      }
      startAxisValueAnimation(e, t) {
        let i = this.getAxisMotionValue(e);
        return (
          iU(this.visualElement, e),
          i.start(nz(e, i, 0, t, this.visualElement, !1))
        );
      }
      stopAnimation() {
        nQ((e) => this.getAxisMotionValue(e).stop());
      }
      getAxisMotionValue(e) {
        let t = `_drag${e.toUpperCase()}`;
        return (
          this.visualElement.getProps()[t] ||
          this.visualElement.getValue(
            e,
            this.visualElement.latestValues[e] ?? 0
          )
        );
      }
      snapToCursor(e) {
        nQ((t) => {
          let { drag: i } = this.getProps();
          if (!sE(t, i, this.currentDirection)) return;
          let { projection: n } = this.visualElement,
            s = this.getAxisMotionValue(t);
          if (n && n.layout) {
            let { min: i, max: r } = n.layout.layoutBox[t],
              a = s.get() || 0;
            s.set(e[t] - tQ(i, r, 0.5) + a);
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let { drag: e, dragConstraints: t } = this.getProps(),
          { projection: i } = this.visualElement;
        if (!iB(t) || !i || !this.constraints) return;
        this.stopAnimation();
        let n = { x: 0, y: 0 };
        nQ((e) => {
          let t = this.getAxisMotionValue(e);
          if (t && !1 !== this.constraints) {
            var i, s;
            let r,
              a,
              o,
              l = t.get();
            n[e] =
              ((i = { min: l, max: l }),
              (s = this.constraints[e]),
              (r = 0.5),
              (a = n2(i)),
              (o = n2(s)) > a
                ? (r = nS(s.min, s.max - a, i.min))
                : a > o && (r = nS(i.min, i.max - o, s.min)),
              k(0, 1, r));
          }
        });
        let { transformTemplate: s } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
          i.root && i.root.updateScroll(),
          i.updateLayout(),
          (this.constraints = !1),
          this.resolveConstraints(),
          nQ((t) => {
            if (!sE(t, e, null)) return;
            let i = this.getAxisMotionValue(t),
              { min: s, max: r } = this.constraints[t];
            i.set(tQ(s, r, n[t]));
          }),
          this.visualElement.render();
      }
      addListeners() {
        let e;
        if (!this.visualElement.current) return;
        sP.set(this.visualElement, this);
        let t = this.visualElement.current,
          i = sp(t, "pointerdown", (e) => {
            let { drag: i, dragListener: n = !0 } = this.getProps(),
              s = e.target,
              r = s !== t && (sc.has(s.tagName) || !0 === s.isContentEditable);
            i && n && !r && this.start(e);
          }),
          n = () => {
            var i, n, s;
            let r,
              a,
              { dragConstraints: o } = this.getProps();
            iB(o) &&
              o.current &&
              ((this.constraints = this.resolveRefConstraints()),
              e ||
                ((i = t),
                (n = o.current),
                (r = sl(
                  i,
                  sC((s = () => this.scalePositionWithinConstraints()))
                )),
                (a = sl(n, sC(s))),
                (e = () => {
                  r(), a();
                })));
          },
          { projection: s } = this.visualElement,
          r = s.addEventListener("measure", n);
        s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
          eW.read(n);
        let a = n0(window, "resize", () =>
            this.scalePositionWithinConstraints()
          ),
          o = s.addEventListener(
            "didUpdate",
            ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (nQ((t) => {
                  let i = this.getAxisMotionValue(t);
                  i &&
                    ((this.originPoint[t] += e[t].translate),
                    i.set(i.get() + e[t].translate));
                }),
                this.visualElement.render());
            }
          );
        return () => {
          a(), i(), r(), o && o(), e && e();
        };
      }
      getProps() {
        let e = this.visualElement.getProps(),
          {
            drag: t = !1,
            dragDirectionLock: i = !1,
            dragPropagation: n = !1,
            dragConstraints: s = !1,
            dragElastic: r = 0.35,
            dragMomentum: a = !0,
          } = e;
        return {
          ...e,
          drag: t,
          dragDirectionLock: i,
          dragPropagation: n,
          dragConstraints: s,
          dragElastic: r,
          dragMomentum: a,
        };
      }
    }
    function sC(e) {
      let t = !0;
      return () => {
        if (t) {
          t = !1;
          return;
        }
        e();
      };
    }
    function sE(e, t, i) {
      return (!0 === t || t === e) && (null === i || i === e);
    }
    let sA = (e) => (t, i) => {
        e && eW.update(() => e(t, i), !1, !0);
      },
      sM = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    var sV = p;
    function sR(e = !0) {
      let t = (0, p.useContext)(iT);
      if (null === t) return [!0, null];
      let { isPresent: i, onExitComplete: n, register: s } = t,
        r = (0, p.useId)();
      (0, p.useEffect)(() => {
        if (e) return s(r);
      }, [e]);
      let a = (0, p.useCallback)(() => e && n && n(r), [r, n, e]);
      return !i && n ? [!1, a] : [!0];
    }
    let sD = !1;
    class sL extends sV.Component {
      componentDidMount() {
        let {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: i,
            layoutId: n,
          } = this.props,
          { projection: s } = e;
        s &&
          (t.group && t.group.add(s),
          i && i.register && n && i.register(s),
          sD && s.root.didUpdate(),
          s.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove(),
          })),
          (sM.hasEverUpdated = !0);
      }
      getSnapshotBeforeUpdate(e) {
        let {
            layoutDependency: t,
            visualElement: i,
            drag: n,
            isPresent: s,
          } = this.props,
          { projection: r } = i;
        return (
          r &&
            ((r.isPresent = s),
            e.layoutDependency !== t &&
              r.setOptions({ ...r.options, layoutDependency: t }),
            (sD = !0),
            n || e.layoutDependency !== t || void 0 === t || e.isPresent !== s
              ? r.willUpdate()
              : this.safeToRemove(),
            e.isPresent !== s &&
              (s
                ? r.promote()
                : r.relegate() ||
                  eW.postRender(() => {
                    let e = r.getStack();
                    (e && e.members.length) || this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        let { visualElement: e, layoutAnchor: t } = this.props,
          { projection: i } = e;
        i &&
          ((i.options.layoutAnchor = t),
          i.root.didUpdate(),
          tf.postRender(() => {
            !i.currentAnimation && i.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        let {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: i,
          } = this.props,
          { projection: n } = e;
        (sD = !0),
          n &&
            (n.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(n),
            i && i.deregister && i.deregister(n));
      }
      safeToRemove() {
        let { safeToRemove: e } = this.props;
        e && e();
      }
      render() {
        return null;
      }
    }
    function sB(e) {
      let [t, i] = sR(),
        n = (0, sV.useContext)(iu);
      return (0, r.jsx)(sL, {
        ...e,
        layoutGroup: n,
        switchLayoutGroup: (0, sV.useContext)(iL),
        isPresent: t,
        safeToRemove: i,
      });
    }
    let sI = [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
      sF = sI.length,
      sO = (e) => ("string" == typeof e ? parseFloat(e) : e),
      s_ = (e) => "number" == typeof e || F.test(e);
    function s$(e, t) {
      return void 0 !== e[t] ? e[t] : e.borderRadius;
    }
    let sz = sU(0, 0.5, nw),
      sW = sU(0.5, 0.95, eO);
    function sU(e, t, i) {
      return (n) => (n < e ? 0 : n > t ? 1 : i(nS(e, t, n)));
    }
    function sX(e, t) {
      (e.min = t.min), (e.max = t.max);
    }
    function sH(e, t) {
      sX(e.x, t.x), sX(e.y, t.y);
    }
    function sY(e, t) {
      (e.translate = t.translate),
        (e.scale = t.scale),
        (e.originPoint = t.originPoint),
        (e.origin = t.origin);
    }
    function sq(e, t, i, n, s) {
      return (
        (e -= t),
        (e = n + (1 / i) * (e - n)),
        void 0 !== s && (e = n + (1 / s) * (e - n)),
        e
      );
    }
    function sG(e, t, [i, n, s], r, a) {
      !(function (e, t = 0, i = 1, n = 0.5, s, r = e, a = e) {
        if (
          (I.test(t) &&
            ((t = parseFloat(t)), (t = tQ(a.min, a.max, t / 100) - a.min)),
          "number" != typeof t)
        )
          return;
        let o = tQ(r.min, r.max, n);
        e === r && (o -= t),
          (e.min = sq(e.min, t, i, o, s)),
          (e.max = sq(e.max, t, i, o, s));
      })(e, t[i], t[n], t[s], t.scale, r, a);
    }
    let sK = ["x", "scaleX", "originX"],
      sZ = ["y", "scaleY", "originY"];
    function sJ(e, t, i, n) {
      sG(e.x, t, sK, i ? i.x : void 0, n ? n.x : void 0),
        sG(e.y, t, sZ, i ? i.y : void 0, n ? n.y : void 0);
    }
    function sQ(e) {
      return 0 === e.translate && 1 === e.scale;
    }
    function s0(e) {
      return sQ(e.x) && sQ(e.y);
    }
    function s1(e, t) {
      return e.min === t.min && e.max === t.max;
    }
    function s2(e, t) {
      return (
        Math.round(e.min) === Math.round(t.min) &&
        Math.round(e.max) === Math.round(t.max)
      );
    }
    function s5(e, t) {
      return s2(e.x, t.x) && s2(e.y, t.y);
    }
    function s3(e) {
      return n2(e.x) / n2(e.y);
    }
    function s4(e, t) {
      return (
        e.translate === t.translate &&
        e.scale === t.scale &&
        e.originPoint === t.originPoint
      );
    }
    class s6 {
      constructor() {
        this.members = [];
      }
      add(e) {
        e4(this.members, e);
        for (let t = this.members.length - 1; t >= 0; t--) {
          let i = this.members[t];
          if (i === e || i === this.lead || i === this.prevLead) continue;
          let n = i.instance;
          (n && !1 !== n.isConnected) ||
            i.snapshot ||
            (e6(this.members, i), i.unmount());
        }
        e.scheduleRender();
      }
      remove(e) {
        if (
          (e6(this.members, e),
          e === this.prevLead && (this.prevLead = void 0),
          e === this.lead)
        ) {
          let e = this.members[this.members.length - 1];
          e && this.promote(e);
        }
      }
      relegate(e) {
        for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
          let e = this.members[t];
          if (!1 !== e.isPresent && e.instance?.isConnected !== !1)
            return this.promote(e), !0;
        }
        return !1;
      }
      promote(e, t) {
        let i = this.lead;
        if (e !== i && ((this.prevLead = i), (this.lead = e), e.show(), i)) {
          i.updateSnapshot(), e.scheduleRender();
          let { layoutDependency: n } = i.options,
            { layoutDependency: s } = e.options;
          (void 0 === n || n !== s) &&
            ((e.resumeFrom = i),
            t && (i.preserveOpacity = !0),
            i.snapshot &&
              ((e.snapshot = i.snapshot),
              (e.snapshot.latestValues = i.animationValues || i.latestValues)),
            e.root?.isUpdating && (e.isLayoutDirty = !0)),
            !1 === e.options.crossfade && i.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((e) => {
          e.options.onExitComplete?.(),
            e.resumingFrom?.options.onExitComplete?.();
        });
      }
      scheduleRender() {
        this.members.forEach((e) => e.instance && e.scheduleRender(!1));
      }
      removeLeadSnapshot() {
        this.lead?.snapshot && (this.lead.snapshot = void 0);
      }
    }
    let s8 = (e, t) => e.depth - t.depth;
    class s7 {
      constructor() {
        (this.children = []), (this.isDirty = !1);
      }
      add(e) {
        e4(this.children, e), (this.isDirty = !0);
      }
      remove(e) {
        e6(this.children, e), (this.isDirty = !0);
      }
      forEach(e) {
        this.isDirty && this.children.sort(s8),
          (this.isDirty = !1),
          this.children.forEach(e);
      }
    }
    let s9 = ["", "X", "Y", "Z"],
      re = 0;
    function rt(e, t, i, n) {
      let { latestValues: s } = t;
      s[e] && ((i[e] = s[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
    }
    function ri({
      attachResizeListener: e,
      defaultParent: t,
      measureScroll: i,
      checkIsScrollRoot: n,
      resetTransform: s,
    }) {
      return class {
        constructor(e = {}, i = t?.()) {
          (this.id = re++),
            (this.animationId = 0),
            (this.animationCommitId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.layoutVersion = 0),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating &&
                ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              (this.projectionUpdateScheduled = !1),
                this.nodes.forEach(rr),
                this.nodes.forEach(rm),
                this.nodes.forEach(rf),
                this.nodes.forEach(ra);
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.linkedParentVersion = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = e),
            (this.root = i ? i.root || i : this),
            (this.path = i ? [...i.path, i] : []),
            (this.parent = i),
            (this.depth = i ? i.depth + 1 : 0);
          for (let e = 0; e < this.path.length; e++)
            this.path[e].shouldResetTransform = !0;
          this.root === this && (this.nodes = new s7());
        }
        addEventListener(e, t) {
          return (
            this.eventHandlers.has(e) || this.eventHandlers.set(e, new e8()),
            this.eventHandlers.get(e).add(t)
          );
        }
        notifyListeners(e, ...t) {
          let i = this.eventHandlers.get(e);
          i && i.notify(...t);
        }
        hasListeners(e) {
          return this.eventHandlers.has(e);
        }
        mount(t) {
          if (this.instance) return;
          (this.isSVG = n9(t) && !(n9(t) && "svg" === t.tagName)),
            (this.instance = t);
          let { layoutId: i, layout: n, visualElement: s } = this.options;
          if (
            (s && !s.current && s.mount(t),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (n || i) && (this.isLayoutDirty = !0),
            e)
          ) {
            let i,
              n = 0,
              s = () => (this.root.updateBlockedByResize = !1);
            eW.read(() => {
              n = window.innerWidth;
            }),
              e(t, () => {
                let e = window.innerWidth;
                if (e !== n) {
                  let t, r;
                  (n = e),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (t = tx.now()),
                    (r = ({ timestamp: e }) => {
                      let i = e - t;
                      i >= 250 && (eU(r), s(i - 250));
                    }),
                    eW.setup(r, !0),
                    (i = () => eU(r)),
                    sM.hasAnimatedSinceResize &&
                      ((sM.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(rp));
                }
              });
          }
          i && this.root.registerSharedNode(i, this),
            !1 !== this.options.animate &&
              s &&
              (i || n) &&
              this.addEventListener(
                "didUpdate",
                ({
                  delta: e,
                  hasLayoutChanged: t,
                  hasRelativeLayoutChanged: i,
                  layout: n,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    (this.target = void 0), (this.relativeTarget = void 0);
                    return;
                  }
                  let r =
                      this.options.transition || s.getDefaultTransition() || rb,
                    {
                      onLayoutAnimationStart: a,
                      onLayoutAnimationComplete: o,
                    } = s.getProps(),
                    l = !this.targetLayout || !s5(this.targetLayout, n),
                    h = !t && i;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    h ||
                    (t && (l || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0));
                    let t = { ...iz(r, "layout"), onPlay: a, onComplete: o };
                    (s.shouldReduceMotion || this.options.layoutRoot) &&
                      ((t.delay = 0), (t.type = !1)),
                      this.startAnimation(t),
                      this.setAnimationOrigin(e, h, t.path);
                  } else
                    t || rp(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                  this.targetLayout = n;
                }
              );
        }
        unmount() {
          this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
          let e = this.getStack();
          e && e.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            eU(this.updateProjection);
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return (
            this.isAnimationBlocked ||
            (this.parent && this.parent.isTreeAnimationBlocked()) ||
            !1
          );
        }
        startUpdate() {
          !this.isUpdateBlocked() &&
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(rg),
            this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: e } = this.options;
          return e && e.getProps().transformTemplate;
        }
        willUpdate(e = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              (function e(t) {
                if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
                let { visualElement: i } = t.options;
                if (!i) return;
                let n = i.props[iD];
                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                  let { layout: e, layoutId: i } = t.options;
                  window.MotionCancelOptimisedAnimation(
                    n,
                    "transform",
                    eW,
                    !(e || i)
                  );
                }
                let { parent: s } = t;
                s && !s.hasCheckedOptimisedAppear && e(s);
              })(this),
            this.root.isUpdating || this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let e = 0; e < this.path.length; e++) {
            let t = this.path[e];
            (t.shouldResetTransform = !0),
              ("string" == typeof t.latestValues.x ||
                "string" == typeof t.latestValues.y) &&
                (t.isLayoutDirty = !0),
              t.updateScroll("snapshot"),
              t.options.layoutRoot && t.willUpdate(!1);
          }
          let { layoutId: t, layout: i } = this.options;
          if (void 0 === t && !i) return;
          let n = this.getTransformTemplate();
          (this.prevTransformTemplateValue = n
            ? n(this.latestValues, "")
            : void 0),
            this.updateSnapshot(),
            e && this.notifyListeners("willUpdate");
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            let e = this.updateBlockedByResize;
            this.unblockUpdate(),
              (this.updateBlockedByResize = !1),
              this.clearAllSnapshots(),
              e && this.nodes.forEach(rh),
              this.nodes.forEach(rl);
            return;
          }
          if (this.animationId <= this.animationCommitId)
            return void this.nodes.forEach(rc);
          (this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1),
                this.nodes.forEach(rd),
                this.nodes.forEach(ru),
                this.nodes.forEach(rn),
                this.nodes.forEach(rs))
              : this.nodes.forEach(rc),
            this.clearAllSnapshots();
          let e = tx.now();
          (eX.delta = k(0, 1e3 / 60, e - eX.timestamp)),
            (eX.timestamp = e),
            (eX.isProcessing = !0),
            eH.update.process(eX),
            eH.preRender.process(eX),
            eH.render.process(eX),
            (eX.isProcessing = !1);
        }
        didUpdate() {
          this.updateScheduled ||
            ((this.updateScheduled = !0), tf.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          this.nodes.forEach(ro), this.sharedNodes.forEach(rx);
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0),
            eW.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          eW.postRender(() => {
            this.isLayoutDirty
              ? this.root.didUpdate()
              : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot &&
            this.instance &&
            ((this.snapshot = this.measure()),
            !this.snapshot ||
              n2(this.snapshot.measuredBox.x) ||
              n2(this.snapshot.measuredBox.y) ||
              (this.snapshot = void 0));
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
              !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let e = 0; e < this.path.length; e++)
              this.path[e].updateScroll();
          let e = this.layout;
          (this.layout = this.measure(!1)),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = eh()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox);
          let { visualElement: t } = this.options;
          t &&
            t.notify(
              "LayoutMeasure",
              this.layout.layoutBox,
              e ? e.layoutBox : void 0
            );
        }
        updateScroll(e = "measure") {
          let t = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
            t && this.instance)
          ) {
            let t = n(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: t,
              offset: i(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : t,
            };
          }
        }
        resetTransform() {
          if (!s) return;
          let e =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout,
            t = this.projectionDelta && !s0(this.projectionDelta),
            i = this.getTransformTemplate(),
            n = i ? i(this.latestValues, "") : void 0,
            r = n !== this.prevTransformTemplateValue;
          e &&
            this.instance &&
            (t || t7(this.latestValues) || r) &&
            (s(this.instance, n),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
        measure(e = !0) {
          var t;
          let i = this.measurePageBox(),
            n = this.removeElementScroll(i);
          return (
            e && (n = this.removeTransform(n)),
            rS((t = n).x),
            rS(t.y),
            {
              animationId: this.root.animationId,
              measuredBox: i,
              layoutBox: n,
              latestValues: {},
              source: this.id,
            }
          );
        }
        measurePageBox() {
          let { visualElement: e } = this.options;
          if (!e) return eh();
          let t = e.measureViewportBox();
          if (!(this.scroll?.wasRoot || this.path.some(rP))) {
            let { scroll: e } = this.root;
            e && (is(t.x, e.offset.x), is(t.y, e.offset.y));
          }
          return t;
        }
        removeElementScroll(e) {
          let t = eh();
          if ((sH(t, e), this.scroll?.wasRoot)) return t;
          for (let i = 0; i < this.path.length; i++) {
            let n = this.path[i],
              { scroll: s, options: r } = n;
            n !== this.root &&
              s &&
              r.layoutScroll &&
              (s.wasRoot && sH(t, e), is(t.x, s.offset.x), is(t.y, s.offset.y));
          }
          return t;
        }
        applyTransform(e, t = !1, i) {
          let n = i || eh();
          sH(n, e);
          for (let e = 0; e < this.path.length; e++) {
            let i = this.path[e];
            !t &&
              i.options.layoutScroll &&
              i.scroll &&
              i !== i.root &&
              (is(n.x, -i.scroll.offset.x), is(n.y, -i.scroll.offset.y)),
              t7(i.latestValues) && io(n, i.latestValues, i.layout?.layoutBox);
          }
          return (
            t7(this.latestValues) &&
              io(n, this.latestValues, this.layout?.layoutBox),
            n
          );
        }
        removeTransform(e) {
          let t = eh();
          sH(t, e);
          for (let e = 0; e < this.path.length; e++) {
            let i,
              n = this.path[e];
            t7(n.latestValues) &&
              (n.instance &&
                (t8(n.latestValues) && n.updateSnapshot(),
                sH((i = eh()), n.measurePageBox())),
              sJ(t, n.latestValues, n.snapshot?.layoutBox, i));
          }
          return t7(this.latestValues) && sJ(t, this.latestValues), t;
        }
        setTargetDelta(e) {
          (this.targetDelta = e),
            this.root.scheduleUpdateProjection(),
            (this.isProjectionDirty = !0);
        }
        setOptions(e) {
          this.options = {
            ...this.options,
            ...e,
            crossfade: void 0 === e.crossfade || e.crossfade,
          };
        }
        clearMeasurements() {
          (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== eX.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(e = !1) {
          let t = this.getLead();
          this.isProjectionDirty ||
            (this.isProjectionDirty = t.isProjectionDirty),
            this.isTransformDirty ||
              (this.isTransformDirty = t.isTransformDirty),
            this.isSharedProjectionDirty ||
              (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
          let i = !!this.resumingFrom || this !== t;
          if (
            !(
              e ||
              (i && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              this.parent?.isProjectionDirty ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          let { layout: n, layoutId: s } = this.options;
          if (!this.layout || !(n || s)) return;
          this.resolvedRelativeTargetAt = eX.timestamp;
          let r = this.getClosestProjectingParent();
          if (
            (r &&
              this.linkedParentVersion !== r.layoutVersion &&
              !r.options.layoutRoot &&
              this.removeRelativeTarget(),
            this.targetDelta ||
              this.relativeTarget ||
              (!1 !== this.options.layoutAnchor && r && r.layout
                ? this.createRelativeTarget(
                    r,
                    this.layout.layoutBox,
                    r.layout.layoutBox
                  )
                : this.removeRelativeTarget()),
            this.relativeTarget || this.targetDelta)
          ) {
            if (
              (this.target ||
                ((this.target = eh()), (this.targetWithTransforms = eh())),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target)
            ) {
              var a, o, l, h;
              this.forceRelativeParentToResolveTarget(),
                (a = this.target),
                (o = this.relativeTarget),
                (l = this.relativeParent.target),
                (h = this.options.layoutAnchor || void 0),
                n4(a.x, o.x, l.x, h?.x),
                n4(a.y, o.y, l.y, h?.y);
            } else
              this.targetDelta
                ? (this.resumingFrom
                    ? this.applyTransform(
                        this.layout.layoutBox,
                        !1,
                        this.target
                      )
                    : sH(this.target, this.layout.layoutBox),
                  ii(this.target, this.targetDelta))
                : sH(this.target, this.layout.layoutBox);
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              !1 !== this.options.layoutAnchor &&
              r &&
              !!r.resumingFrom == !!this.resumingFrom &&
              !r.options.layoutScroll &&
              r.target &&
              1 !== this.animationProgress
                ? this.createRelativeTarget(r, this.target, r.target)
                : (this.relativeParent = this.relativeTarget = void 0));
          }
        }
        getClosestProjectingParent() {
          if (
            !(
              !this.parent ||
              t8(this.parent.latestValues) ||
              t9(this.parent.latestValues)
            )
          )
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!(
            (this.relativeTarget ||
              this.targetDelta ||
              this.options.layoutRoot) &&
            this.layout
          );
        }
        createRelativeTarget(e, t, i) {
          (this.relativeParent = e),
            (this.linkedParentVersion = e.layoutVersion),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = eh()),
            (this.relativeTargetOrigin = eh()),
            n8(
              this.relativeTargetOrigin,
              t,
              i,
              this.options.layoutAnchor || void 0
            ),
            sH(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          let e = this.getLead(),
            t = !!this.resumingFrom || this !== e,
            i = !0;
          if (
            ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
              (i = !1),
            t &&
              (this.isSharedProjectionDirty || this.isTransformDirty) &&
              (i = !1),
            this.resolvedRelativeTargetAt === eX.timestamp && (i = !1),
            i)
          )
            return;
          let { layout: n, layoutId: s } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(n || s))
          )
            return;
          sH(this.layoutCorrected, this.layout.layoutBox);
          let r = this.treeScale.x,
            a = this.treeScale.y;
          !(function (e, t, i, n = !1) {
            let s,
              r,
              a = i.length;
            if (a) {
              t.x = t.y = 1;
              for (let o = 0; o < a; o++) {
                r = (s = i[o]).projectionDelta;
                let { visualElement: a } = s.options;
                (!a ||
                  !a.props.style ||
                  "contents" !== a.props.style.display) &&
                  (n &&
                    s.options.layoutScroll &&
                    s.scroll &&
                    s !== s.root &&
                    (is(e.x, -s.scroll.offset.x), is(e.y, -s.scroll.offset.y)),
                  r && ((t.x *= r.x.scale), (t.y *= r.y.scale), ii(e, r)),
                  n &&
                    t7(s.latestValues) &&
                    io(e, s.latestValues, s.layout?.layoutBox));
              }
              t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
            }
          })(this.layoutCorrected, this.treeScale, this.path, t),
            e.layout &&
              !e.target &&
              (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
              ((e.target = e.layout.layoutBox),
              (e.targetWithTransforms = eh()));
          let { target: o } = e;
          if (!o) {
            this.prevProjectionDelta &&
              (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          this.projectionDelta && this.prevProjectionDelta
            ? (sY(this.prevProjectionDelta.x, this.projectionDelta.x),
              sY(this.prevProjectionDelta.y, this.projectionDelta.y))
            : this.createProjectionDeltas(),
            n3(
              this.projectionDelta,
              this.layoutCorrected,
              o,
              this.latestValues
            ),
            (this.treeScale.x === r &&
              this.treeScale.y === a &&
              s4(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              s4(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", o));
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(e = !0) {
          if ((this.options.visualElement?.scheduleRender(), e)) {
            let e = this.getStack();
            e && e.scheduleRender();
          }
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          (this.prevProjectionDelta = eo()),
            (this.projectionDelta = eo()),
            (this.projectionDeltaWithTransform = eo());
        }
        setAnimationOrigin(e, t = !1, i) {
          let n,
            s = this.snapshot,
            r = s ? s.latestValues : {},
            a = { ...this.latestValues },
            o = eo();
          (this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !t);
          let l = eh(),
            h =
              (s ? s.source : void 0) !==
              (this.layout ? this.layout.source : void 0),
            c = this.getStack(),
            d = !c || c.members.length <= 1,
            u = !!(
              h &&
              !d &&
              !0 === this.options.crossfade &&
              !this.path.some(rw)
            );
          this.animationProgress = 0;
          let p = i?.interpolateProjection(e);
          (this.mixTargetDelta = (t) => {
            let i = t / 1e3,
              s = p?.(i);
            if (
              (s
                ? ((o.x.translate = s.x),
                  (o.x.scale = tQ(e.x.scale, 1, i)),
                  (o.x.origin = e.x.origin),
                  (o.x.originPoint = e.x.originPoint),
                  (o.y.translate = s.y),
                  (o.y.scale = tQ(e.y.scale, 1, i)),
                  (o.y.origin = e.y.origin),
                  (o.y.originPoint = e.y.originPoint))
                : (ry(o.x, e.x, i), ry(o.y, e.y, i)),
              this.setTargetDelta(o),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout)
            ) {
              var c, m, f, g, x, y;
              n8(
                l,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox,
                this.options.layoutAnchor || void 0
              ),
                (f = this.relativeTarget),
                (g = this.relativeTargetOrigin),
                (x = l),
                (y = i),
                rv(f.x, g.x, x.x, y),
                rv(f.y, g.y, x.y, y),
                n &&
                  ((c = this.relativeTarget),
                  (m = n),
                  s1(c.x, m.x) && s1(c.y, m.y)) &&
                  (this.isProjectionDirty = !1),
                n || (n = eh()),
                sH(n, this.relativeTarget);
            }
            h &&
              ((this.animationValues = a),
              (function (e, t, i, n, s, r) {
                s
                  ? ((e.opacity = tQ(0, i.opacity ?? 1, sz(n))),
                    (e.opacityExit = tQ(t.opacity ?? 1, 0, sW(n))))
                  : r && (e.opacity = tQ(t.opacity ?? 1, i.opacity ?? 1, n));
                for (let s = 0; s < sF; s++) {
                  let r = sI[s],
                    a = s$(t, r),
                    o = s$(i, r);
                  (void 0 !== a || void 0 !== o) &&
                    (a || (a = 0),
                    o || (o = 0),
                    0 === a || 0 === o || s_(a) === s_(o)
                      ? ((e[r] = Math.max(tQ(sO(a), sO(o), n), 0)),
                        (I.test(o) || I.test(a)) && (e[r] += "%"))
                      : (e[r] = o));
                }
                (t.rotate || i.rotate) &&
                  (e.rotate = tQ(t.rotate || 0, i.rotate || 0, n));
              })(a, r, this.latestValues, i, u, d)),
              s &&
                void 0 !== s.rotate &&
                (this.animationValues || (this.animationValues = a),
                (this.animationValues.pathRotation = s.rotate)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = i);
          }),
            this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
        }
        startAnimation(e) {
          this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation &&
              (eU(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = eW.update(() => {
              var t, i, n;
              let s;
              (sM.hasAnimatedSinceResize = !0),
                ta.layout++,
                this.motionValue || (this.motionValue = tb(0)),
                this.motionValue.jump(0, !1),
                (this.currentAnimation =
                  ((t = this.motionValue),
                  (i = [0, 1e3]),
                  (n = {
                    ...e,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onStop: () => {
                      ta.layout--;
                    },
                    onComplete: () => {
                      ta.layout--,
                        e.onComplete && e.onComplete(),
                        this.completeAnimation();
                    },
                  }),
                  (s = ec(t) ? t : tb(t)).start(nz("", s, i, n)),
                  s.animation)),
                this.resumingFrom &&
                  (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0);
            }));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0));
          let e = this.getStack();
          e && e.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
          this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation();
        }
        applyTransformsToTarget() {
          let e = this.getLead(),
            {
              targetWithTransforms: t,
              target: i,
              layout: n,
              latestValues: s,
            } = e;
          if (t && i && n) {
            if (
              this !== e &&
              this.layout &&
              n &&
              rT(this.options.animationType, this.layout.layoutBox, n.layoutBox)
            ) {
              i = this.target || eh();
              let t = n2(this.layout.layoutBox.x);
              (i.x.min = e.target.x.min), (i.x.max = i.x.min + t);
              let n = n2(this.layout.layoutBox.y);
              (i.y.min = e.target.y.min), (i.y.max = i.y.min + n);
            }
            sH(t, i),
              io(t, s),
              n3(this.projectionDeltaWithTransform, this.layoutCorrected, t, s);
          }
        }
        registerSharedNode(e, t) {
          this.sharedNodes.has(e) || this.sharedNodes.set(e, new s6()),
            this.sharedNodes.get(e).add(t);
          let i = t.options.initialPromotionConfig;
          t.promote({
            transition: i ? i.transition : void 0,
            preserveFollowOpacity:
              i && i.shouldPreserveFollowOpacity
                ? i.shouldPreserveFollowOpacity(t)
                : void 0,
          });
        }
        isLead() {
          let e = this.getStack();
          return !e || e.lead === this;
        }
        getLead() {
          let { layoutId: e } = this.options;
          return (e && this.getStack()?.lead) || this;
        }
        getPrevLead() {
          let { layoutId: e } = this.options;
          return e ? this.getStack()?.prevLead : void 0;
        }
        getStack() {
          let { layoutId: e } = this.options;
          if (e) return this.root.sharedNodes.get(e);
        }
        promote({
          needsReset: e,
          transition: t,
          preserveFollowOpacity: i,
        } = {}) {
          let n = this.getStack();
          n && n.promote(this, i),
            e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            t && this.setOptions({ transition: t });
        }
        relegate() {
          let e = this.getStack();
          return !!e && e.relegate(this);
        }
        resetSkewAndRotation() {
          let { visualElement: e } = this.options;
          if (!e) return;
          let t = !1,
            { latestValues: i } = e;
          if (
            ((i.z ||
              i.rotate ||
              i.rotateX ||
              i.rotateY ||
              i.rotateZ ||
              i.skewX ||
              i.skewY) &&
              (t = !0),
            !t)
          )
            return;
          let n = {};
          i.z && rt("z", e, n, this.animationValues);
          for (let t = 0; t < s9.length; t++)
            rt(`rotate${s9[t]}`, e, n, this.animationValues),
              rt(`skew${s9[t]}`, e, n, this.animationValues);
          for (let t in (e.render(), n))
            e.setStaticValue(t, n[t]),
              this.animationValues && (this.animationValues[t] = n[t]);
          e.scheduleRender();
        }
        applyProjectionStyles(e, t) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) {
            e.visibility = "hidden";
            return;
          }
          let i = this.getTransformTemplate();
          if (this.needsReset) {
            (this.needsReset = !1),
              (e.visibility = ""),
              (e.opacity = ""),
              (e.pointerEvents = iS(t?.pointerEvents) || ""),
              (e.transform = i ? i(this.latestValues, "") : "none");
            return;
          }
          let n = this.getLead();
          if (!this.projectionDelta || !this.layout || !n.target) {
            this.options.layoutId &&
              ((e.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (e.pointerEvents = iS(t?.pointerEvents) || "")),
              this.hasProjected &&
                !t7(this.latestValues) &&
                ((e.transform = i ? i({}, "") : "none"),
                (this.hasProjected = !1));
            return;
          }
          e.visibility = "";
          let s = n.animationValues || n.latestValues;
          this.applyTransformsToTarget();
          let r = (function (e, t, i) {
            let n = "",
              s = e.x.translate / t.x,
              r = e.y.translate / t.y,
              a = i?.z || 0;
            if (
              ((s || r || a) && (n = `translate3d(${s}px, ${r}px, ${a}px) `),
              (1 !== t.x || 1 !== t.y) &&
                (n += `scale(${1 / t.x}, ${1 / t.y}) `),
              i)
            ) {
              let {
                transformPerspective: e,
                rotate: t,
                pathRotation: s,
                rotateX: r,
                rotateY: a,
                skewX: o,
                skewY: l,
              } = i;
              e && (n = `perspective(${e}px) ${n}`),
                t && (n += `rotate(${t}deg) `),
                s && (n += `rotate(${s}deg) `),
                r && (n += `rotateX(${r}deg) `),
                a && (n += `rotateY(${a}deg) `),
                o && (n += `skewX(${o}deg) `),
                l && (n += `skewY(${l}deg) `);
            }
            let o = e.x.scale * t.x,
              l = e.y.scale * t.y;
            return (
              (1 !== o || 1 !== l) && (n += `scale(${o}, ${l})`), n || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, s);
          i && (r = i(s, r)), (e.transform = r);
          let { x: a, y: o } = this.projectionDelta;
          for (let t in ((e.transformOrigin = `${100 * a.origin}% ${
            100 * o.origin
          }% 0`),
          n.animationValues
            ? (e.opacity =
                n === this
                  ? s.opacity ?? this.latestValues.opacity ?? 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : s.opacityExit)
            : (e.opacity =
                n === this
                  ? void 0 !== s.opacity
                    ? s.opacity
                    : ""
                  : void 0 !== s.opacityExit
                  ? s.opacityExit
                  : 0),
          t0)) {
            if (void 0 === s[t]) continue;
            let { correct: i, applyTo: a, isCSSVariable: o } = t0[t],
              l = "none" === r ? s[t] : i(s[t], n);
            if (a) {
              let t = a.length;
              for (let i = 0; i < t; i++) e[a[i]] = l;
            } else
              o
                ? (this.options.visualElement.renderState.vars[t] = l)
                : (e[t] = l);
          }
          this.options.layoutId &&
            (e.pointerEvents =
              n === this ? iS(t?.pointerEvents) || "" : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
            this.root.nodes.forEach(rl),
            this.root.sharedNodes.clear();
        }
      };
    }
    function rn(e) {
      e.updateLayout();
    }
    function rs(e) {
      let t = e.resumeFrom?.snapshot || e.snapshot;
      if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        let { layoutBox: i, measuredBox: n } = e.layout,
          { animationType: s } = e.options,
          r = t.source !== e.layout.source;
        if ("size" === s)
          nQ((e) => {
            let n = r ? t.measuredBox[e] : t.layoutBox[e],
              s = n2(n);
            (n.min = i[e].min), (n.max = n.min + s);
          });
        else if ("x" === s || "y" === s) {
          let e = "x" === s ? "y" : "x";
          sX(r ? t.measuredBox[e] : t.layoutBox[e], i[e]);
        } else
          rT(s, t.layoutBox, i) &&
            nQ((n) => {
              let s = r ? t.measuredBox[n] : t.layoutBox[n],
                a = n2(i[n]);
              (s.max = s.min + a),
                e.relativeTarget &&
                  !e.currentAnimation &&
                  ((e.isProjectionDirty = !0),
                  (e.relativeTarget[n].max = e.relativeTarget[n].min + a));
            });
        let a = eo();
        n3(a, i, t.layoutBox);
        let o = eo();
        r
          ? n3(o, e.applyTransform(n, !0), t.measuredBox)
          : n3(o, i, t.layoutBox);
        let l = !s0(a),
          h = !1;
        if (!e.resumeFrom) {
          let n = e.getClosestProjectingParent();
          if (n && !n.resumeFrom) {
            let { snapshot: s, layout: r } = n;
            if (s && r) {
              let a = e.options.layoutAnchor || void 0,
                o = eh();
              n8(o, t.layoutBox, s.layoutBox, a);
              let l = eh();
              n8(l, i, r.layoutBox, a),
                s5(o, l) || (h = !0),
                n.options.layoutRoot &&
                  ((e.relativeTarget = l),
                  (e.relativeTargetOrigin = o),
                  (e.relativeParent = n));
            }
          }
        }
        e.notifyListeners("didUpdate", {
          layout: i,
          snapshot: t,
          delta: o,
          layoutDelta: a,
          hasLayoutChanged: l,
          hasRelativeLayoutChanged: h,
        });
      } else if (e.isLead()) {
        let { onExitComplete: t } = e.options;
        t && t();
      }
      e.options.transition = void 0;
    }
    function rr(e) {
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = !!(
            e.isProjectionDirty ||
            e.parent.isProjectionDirty ||
            e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function ra(e) {
      e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function ro(e) {
      e.clearSnapshot();
    }
    function rl(e) {
      e.clearMeasurements();
    }
    function rh(e) {
      (e.isLayoutDirty = !0), e.updateLayout();
    }
    function rc(e) {
      e.isLayoutDirty = !1;
    }
    function rd(e) {
      e.isAnimationBlocked &&
        e.layout &&
        !e.isLayoutDirty &&
        ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
    }
    function ru(e) {
      let { visualElement: t } = e.options;
      t &&
        t.getProps().onBeforeLayoutMeasure &&
        t.notify("BeforeLayoutMeasure"),
        e.resetTransform();
    }
    function rp(e) {
      e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0);
    }
    function rm(e) {
      e.resolveTargetDelta();
    }
    function rf(e) {
      e.calcProjection();
    }
    function rg(e) {
      e.resetSkewAndRotation();
    }
    function rx(e) {
      e.removeLeadSnapshot();
    }
    function ry(e, t, i) {
      (e.translate = tQ(t.translate, 0, i)),
        (e.scale = tQ(t.scale, 1, i)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
    }
    function rv(e, t, i, n) {
      (e.min = tQ(t.min, i.min, n)), (e.max = tQ(t.max, i.max, n));
    }
    function rw(e) {
      return e.animationValues && void 0 !== e.animationValues.opacityExit;
    }
    let rb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      rj = (e) =>
        "u" > typeof navigator &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(e),
      rk = rj("applewebkit/") && !rj("chrome/") ? Math.round : eO;
    function rS(e) {
      (e.min = rk(e.min)), (e.max = rk(e.max));
    }
    function rT(e, t, i) {
      return (
        "position" === e ||
        ("preserve-aspect" === e && !(0.2 >= Math.abs(s3(t) - s3(i))))
      );
    }
    function rP(e) {
      return e !== e.root && e.scroll?.wasRoot;
    }
    let rN = ri({
        attachResizeListener: (e, t) => n0(e, "resize", t),
        measureScroll: () => ({
          x:
            document.documentElement.scrollLeft ||
            document.body?.scrollLeft ||
            0,
          y:
            document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      }),
      rC = { current: void 0 },
      rE = ri({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!rC.current) {
            let e = new rN({});
            e.mount(window),
              e.setOptions({ layoutScroll: !0 }),
              (rC.current = e);
          }
          return rC.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = void 0 !== t ? t : "none";
        },
        checkIsScrollRoot: (e) =>
          "fixed" === window.getComputedStyle(e).position,
      });
    function rA(e, t) {
      let i = se(e),
        n = new AbortController();
      return [i, { passive: !0, ...t, signal: n.signal }, () => n.abort()];
    }
    function rM(e, t, i) {
      let { props: n } = e;
      e.animationState &&
        n.whileHover &&
        e.animationState.setActive("whileHover", "Start" === i);
      let s = n["onHover" + i];
      s && eW.postRender(() => s(t, su(t)));
    }
    function rV(e) {
      return n7(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
    }
    let rR = (e, t) => !!t && (e === t || rR(e, t.parentElement)),
      rD = new WeakSet();
    function rL(e) {
      return (t) => {
        "Enter" === t.key && e(t);
      };
    }
    function rB(e, t) {
      e.dispatchEvent(
        new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
      );
    }
    function rI(e) {
      return sd(e) && !(n1.x || n1.y);
    }
    let rF = new WeakSet();
    function rO(e, t, i) {
      let { props: n } = e;
      if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
      e.animationState &&
        n.whileTap &&
        e.animationState.setActive("whileTap", "Start" === i);
      let s = n["onTap" + ("End" === i ? "" : i)];
      s && eW.postRender(() => s(t, su(t)));
    }
    let r_ = new WeakMap(),
      r$ = new WeakMap(),
      rz = (e) => {
        let t = r_.get(e.target);
        t && t(e);
      },
      rW = (e) => {
        e.forEach(rz);
      },
      rU = { some: 0, all: 1 },
      rX = (function (e, t) {
        if ("u" < typeof Proxy) return iF;
        let i = new Map(),
          n = (i, n) => iF(i, n, e, t);
        return new Proxy((e, t) => n(e, t), {
          get: (s, r) =>
            "create" === r
              ? n
              : (i.has(r) || i.set(r, iF(r, void 0, e, t)), i.get(r)),
        });
      })(
        {
          animation: {
            Feature: class extends iO {
              constructor(e) {
                super(e),
                  e.animationState ||
                    (e.animationState = (function (e) {
                      let t = (t) =>
                          Promise.all(
                            t.map(({ animation: t, options: i }) =>
                              (function (e, t, i = {}) {
                                let n;
                                if (
                                  (e.notify("AnimationStart", t),
                                  Array.isArray(t))
                                )
                                  n = Promise.all(t.map((t) => nX(e, t, i)));
                                else if ("string" == typeof t) n = nX(e, t, i);
                                else {
                                  let s =
                                    "function" == typeof t
                                      ? i_(e, t, i.custom)
                                      : t;
                                  n = Promise.all(nW(e, s, i));
                                }
                                return n.then(() => {
                                  e.notify("AnimationComplete", t);
                                });
                              })(e, t, i)
                            )
                          ),
                        i = nZ(),
                        n = !0,
                        s = !1,
                        r = (t) => (i, n) => {
                          let s = i_(
                            e,
                            n,
                            "exit" === t ? e.presenceContext?.custom : void 0
                          );
                          if (s) {
                            let { transition: e, transitionEnd: t, ...n } = s;
                            i = { ...i, ...n, ...t };
                          }
                          return i;
                        };
                      function a(a) {
                        let { props: o } = e,
                          l =
                            (function e(t) {
                              if (!t) return;
                              if (!t.isControllingVariants) {
                                let i = (t.parent && e(t.parent)) || {};
                                return (
                                  void 0 !== t.props.initial &&
                                    (i.initial = t.props.initial),
                                  i
                                );
                              }
                              let i = {};
                              for (let e = 0; e < nH; e++) {
                                let n = tN[e],
                                  s = t.props[n];
                                (tT(s) || !1 === s) && (i[n] = s);
                              }
                              return i;
                            })(e.parent) || {},
                          h = [],
                          c = new Set(),
                          d = {},
                          u = 1 / 0;
                        for (let t = 0; t < nG; t++) {
                          var p, m;
                          let f = nq[t],
                            g = i[f],
                            x = void 0 !== o[f] ? o[f] : l[f],
                            y = tT(x),
                            v = f === a ? g.isActive : null;
                          !1 === v && (u = t);
                          let w = x === l[f] && x !== o[f] && y;
                          if (
                            (w &&
                              (n || s) &&
                              e.manuallyAnimateOnMount &&
                              (w = !1),
                            (g.protectedKeys = { ...d }),
                            (!g.isActive && null === v) ||
                              (!x && !g.prevProp) ||
                              tS(x) ||
                              "boolean" == typeof x)
                          )
                            continue;
                          if ("exit" === f && g.isActive && !0 !== v) {
                            g.prevResolvedValues &&
                              (d = { ...d, ...g.prevResolvedValues });
                            continue;
                          }
                          let b =
                              ((p = g.prevProp),
                              "string" == typeof (m = x)
                                ? m !== p
                                : !!Array.isArray(m) && !nY(m, p)),
                            j =
                              b ||
                              (f === a && g.isActive && !w && y) ||
                              (t > u && y),
                            k = !1,
                            S = Array.isArray(x) ? x : [x],
                            T = S.reduce(r(f), {});
                          !1 === v && (T = {});
                          let { prevResolvedValues: P = {} } = g,
                            N = { ...P, ...T },
                            C = (t) => {
                              (j = !0),
                                c.has(t) && ((k = !0), c.delete(t)),
                                (g.needsAnimating[t] = !0);
                              let i = e.getValue(t);
                              i && (i.liveStyle = !1);
                            };
                          for (let e in N) {
                            let t = T[e],
                              i = P[e];
                            if (!d.hasOwnProperty(e))
                              (iW(t) && iW(i) ? !nY(t, i) || b : t !== i)
                                ? null != t
                                  ? C(e)
                                  : c.add(e)
                                : void 0 !== t && c.has(e)
                                ? C(e)
                                : (g.protectedKeys[e] = !0);
                          }
                          (g.prevProp = x),
                            (g.prevResolvedValues = T),
                            g.isActive && (d = { ...d, ...T }),
                            (n || s) && e.blockInitialAnimation && (j = !1);
                          let E = w && b,
                            A = !E || k;
                          j &&
                            A &&
                            h.push(
                              ...S.map((t) => {
                                let i = { type: f };
                                if (
                                  "string" == typeof t &&
                                  (n || s) &&
                                  !E &&
                                  e.manuallyAnimateOnMount &&
                                  e.parent
                                ) {
                                  let { parent: n } = e,
                                    s = i_(n, t);
                                  if (n.enteringChildren && s) {
                                    let { delayChildren: t } =
                                      s.transition || {};
                                    i.delay = nU(n.enteringChildren, e, t);
                                  }
                                }
                                return { animation: t, options: i };
                              })
                            );
                        }
                        if (c.size) {
                          let t = {};
                          if ("boolean" != typeof o.initial) {
                            let i = i_(
                              e,
                              Array.isArray(o.initial)
                                ? o.initial[0]
                                : o.initial
                            );
                            i && i.transition && (t.transition = i.transition);
                          }
                          c.forEach((i) => {
                            let n = e.getBaseTarget(i),
                              s = e.getValue(i);
                            s && (s.liveStyle = !0), (t[i] = n ?? null);
                          }),
                            h.push({ animation: t });
                        }
                        let f = !!h.length;
                        return (
                          n &&
                            (!1 === o.initial || o.initial === o.animate) &&
                            !e.manuallyAnimateOnMount &&
                            (f = !1),
                          (n = !1),
                          (s = !1),
                          f ? t(h) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: a,
                        setActive: function (t, n) {
                          if (i[t].isActive === n) return Promise.resolve();
                          e.variantChildren?.forEach((e) =>
                            e.animationState?.setActive(t, n)
                          ),
                            (i[t].isActive = n);
                          let s = a(t);
                          for (let e in i) i[e].protectedKeys = {};
                          return s;
                        },
                        setAnimateFunction: function (i) {
                          t = i(e);
                        },
                        getState: () => i,
                        reset: () => {
                          (i = nZ()), (s = !0);
                        },
                      };
                    })(e));
              }
              updateAnimationControlsSubscription() {
                let { animate: e } = this.node.getProps();
                tS(e) && (this.unmountControls = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: e } = this.node.getProps(),
                  { animate: t } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {
                this.node.animationState.reset(), this.unmountControls?.();
              }
            },
          },
          exit: {
            Feature: class extends iO {
              constructor() {
                super(...arguments),
                  (this.id = nJ++),
                  (this.isExitComplete = !1);
              }
              update() {
                if (!this.node.presenceContext) return;
                let { isPresent: e, onExitComplete: t } =
                    this.node.presenceContext,
                  { isPresent: i } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === i) return;
                if (e && !1 === i) {
                  if (this.isExitComplete) {
                    let { initial: e, custom: t } = this.node.getProps();
                    if (
                      "string" == typeof e ||
                      ("object" == typeof e && null !== e && !Array.isArray(e))
                    ) {
                      let i = i_(this.node, e, t);
                      if (i) {
                        let { transition: e, transitionEnd: t, ...n } = i;
                        for (let e in n) this.node.getValue(e)?.jump(n[e]);
                      }
                    }
                    this.node.animationState.reset(),
                      this.node.animationState.animateChanges();
                  } else this.node.animationState.setActive("exit", !1);
                  this.isExitComplete = !1;
                  return;
                }
                let n = this.node.animationState.setActive("exit", !e);
                t &&
                  !e &&
                  n.then(() => {
                    (this.isExitComplete = !0), t(this.id);
                  });
              }
              mount() {
                let { register: e, onExitComplete: t } =
                  this.node.presenceContext || {};
                t && t(this.id), e && (this.unmount = e(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends iO {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                var e;
                let t;
                this.stopObserver?.();
                let { viewport: i = {} } = this.node.getProps(),
                  { root: n, margin: s, amount: r = "some", once: a } = i,
                  o = {
                    root: n ? n.current : void 0,
                    rootMargin: s,
                    threshold: "number" == typeof r ? r : rU[r],
                  },
                  l = (e) => {
                    let { isIntersecting: t } = e;
                    if (
                      this.isInView === t ||
                      ((this.isInView = t), a && !t && this.hasEnteredView)
                    )
                      return;
                    t && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", t);
                    let { onViewportEnter: i, onViewportLeave: n } =
                        this.node.getProps(),
                      s = t ? i : n;
                    s && s(e);
                  };
                this.stopObserver =
                  ((e = this.node.current),
                  (t = (function ({ root: e, ...t }) {
                    let i = e || document;
                    r$.has(i) || r$.set(i, {});
                    let n = r$.get(i),
                      s = JSON.stringify(t);
                    return (
                      n[s] ||
                        (n[s] = new IntersectionObserver(rW, {
                          root: e,
                          ...t,
                        })),
                      n[s]
                    );
                  })(o)),
                  r_.set(e, l),
                  t.observe(e),
                  () => {
                    r_.delete(e), t.unobserve(e);
                  });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("u" < typeof IntersectionObserver) return;
                let { props: e, prevProps: t } = this.node;
                ["amount", "margin", "root"].some(
                  (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                    return (i) => e[i] !== t[i];
                  })(e, t)
                ) && this.startObserver();
              }
              unmount() {
                this.stopObserver?.(),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
            },
          },
          tap: {
            Feature: class extends iO {
              mount() {
                let { current: e } = this.node;
                if (!e) return;
                let { globalTapTarget: t, propagate: i } = this.node.props;
                this.unmount = (function (e, t, i = {}) {
                  let [n, s, r] = rA(e, i),
                    a = (e) => {
                      let n = e.currentTarget;
                      if (!rI(e) || rF.has(e)) return;
                      rD.add(n), i.stopPropagation && rF.add(e);
                      let r = t(n, e),
                        a = (e, t) => {
                          window.removeEventListener("pointerup", o),
                            window.removeEventListener("pointercancel", l),
                            rD.has(n) && rD.delete(n),
                            rI(e) &&
                              "function" == typeof r &&
                              r(e, { success: t });
                        },
                        o = (e) => {
                          a(
                            e,
                            n === window ||
                              n === document ||
                              i.useGlobalTarget ||
                              rR(n, e.target)
                          );
                        },
                        l = (e) => {
                          a(e, !1);
                        };
                      window.addEventListener("pointerup", o, s),
                        window.addEventListener("pointercancel", l, s);
                    };
                  return (
                    n.forEach((e) => {
                      ((i.useGlobalTarget ? window : e).addEventListener(
                        "pointerdown",
                        a,
                        s
                      ),
                      rV(e)) &&
                        (e.addEventListener("focus", (e) =>
                          ((e, t) => {
                            let i = e.currentTarget;
                            if (!i) return;
                            let n = rL(() => {
                              if (rD.has(i)) return;
                              rB(i, "down");
                              let e = rL(() => {
                                rB(i, "up");
                              });
                              i.addEventListener("keyup", e, t),
                                i.addEventListener(
                                  "blur",
                                  () => rB(i, "cancel"),
                                  t
                                );
                            });
                            i.addEventListener("keydown", n, t),
                              i.addEventListener(
                                "blur",
                                () => i.removeEventListener("keydown", n),
                                t
                              );
                          })(e, s)
                        ),
                        sh.has(e.tagName) ||
                          !0 === e.isContentEditable ||
                          e.hasAttribute("tabindex") ||
                          (e.tabIndex = 0));
                    }),
                    r
                  );
                })(
                  e,
                  (e, t) => (
                    rO(this.node, t, "Start"),
                    (e, { success: t }) =>
                      rO(this.node, e, t ? "End" : "Cancel")
                  ),
                  { useGlobalTarget: t, stopPropagation: i?.tap === !1 }
                );
              }
              unmount() {}
            },
          },
          focus: {
            Feature: class extends iO {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible");
                } catch (t) {
                  e = !0;
                }
                e &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = iX(
                  n0(this.node.current, "focus", () => this.onFocus()),
                  n0(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends iO {
              mount() {
                let { current: e } = this.node;
                e &&
                  (this.unmount = (function (e, t, i = {}) {
                    let [n, s, r] = rA(e, i);
                    return (
                      n.forEach((e) => {
                        let i,
                          n = !1,
                          r = !1,
                          a = (t) => {
                            i && (i(t), (i = void 0)),
                              e.removeEventListener("pointerleave", l);
                          },
                          o = (e) => {
                            (n = !1),
                              window.removeEventListener("pointerup", o),
                              window.removeEventListener("pointercancel", o),
                              r && ((r = !1), a(e));
                          },
                          l = (e) => {
                            if ("touch" !== e.pointerType) {
                              if (n) {
                                r = !0;
                                return;
                              }
                              a(e);
                            }
                          };
                        e.addEventListener(
                          "pointerenter",
                          (n) => {
                            if ("touch" === n.pointerType || n1.x || n1.y)
                              return;
                            r = !1;
                            let a = t(e, n);
                            "function" == typeof a &&
                              ((i = a),
                              e.addEventListener("pointerleave", l, s));
                          },
                          s
                        ),
                          e.addEventListener(
                            "pointerdown",
                            () => {
                              (n = !0),
                                window.addEventListener("pointerup", o, s),
                                window.addEventListener("pointercancel", o, s);
                            },
                            s
                          );
                      }),
                      r
                    );
                  })(
                    e,
                    (e, t) => (
                      rM(this.node, t, "Start"), (e) => rM(this.node, e, "End")
                    )
                  ));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends iO {
              constructor() {
                super(...arguments), (this.removePointerDownListener = eO);
              }
              onPointerDown(e) {
                this.session = new sx(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: sm(this.node),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: i,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: sA(e),
                  onStart: sA(t),
                  onMove: sA(i),
                  onEnd: (e, t) => {
                    delete this.session, n && eW.postRender(() => n(e, t));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = sp(
                  this.node.current,
                  "pointerdown",
                  (e) => this.onPointerDown(e)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends iO {
              constructor(e) {
                super(e),
                  (this.removeGroupControls = eO),
                  (this.removeListeners = eO),
                  (this.controls = new sN(e));
              }
              mount() {
                let { dragControls: e } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || eO);
              }
              update() {
                let { dragControls: e } = this.node.getProps(),
                  { dragControls: t } = this.node.prevProps || {};
                e !== t &&
                  (this.removeGroupControls(),
                  e && (this.removeGroupControls = e.subscribe(this.controls)));
              }
              unmount() {
                this.removeGroupControls(),
                  this.removeListeners(),
                  this.controls.isDragging || this.controls.endPanSession();
              }
            },
            ProjectionNode: rE,
            MeasureLayout: sB,
          },
          layout: { ProjectionNode: rE, MeasureLayout: sB },
        },
        (e, t) =>
          t.isSVG ?? id(e)
            ? new t3(t)
            : new ih(t, { allowProjection: e !== p.Fragment })
      );
    var rH = p;
    function rY(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class rq extends rH.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (
          rV(t) &&
          e.isPresent &&
          !this.props.isPresent &&
          !1 !== this.props.pop
        ) {
          let e = t.offsetParent,
            i = (rV(e) && e.offsetWidth) || 0,
            n = (rV(e) && e.offsetHeight) || 0,
            s = getComputedStyle(t),
            r = this.props.sizeRef.current;
          (r.height = parseFloat(s.height)),
            (r.width = parseFloat(s.width)),
            (r.top = t.offsetTop),
            (r.left = t.offsetLeft),
            (r.right = i - r.width - r.left),
            (r.bottom = n - r.height - r.top),
            (r.direction = s.direction);
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function rG({
      children: e,
      isPresent: t,
      anchorX: i,
      anchorY: n,
      root: s,
      pop: a,
    }) {
      let o = (0, rH.useId)(),
        l = (0, rH.useRef)(null),
        h = (0, rH.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          direction: "ltr",
        }),
        { nonce: c } = (0, rH.useContext)(im),
        d = (function (...e) {
          return p.useCallback(
            (function (...e) {
              return (t) => {
                let i = !1,
                  n = e.map((e) => {
                    let n = rY(e, t);
                    return i || "function" != typeof n || (i = !0), n;
                  });
                if (i)
                  return () => {
                    for (let t = 0; t < n.length; t++) {
                      let i = n[t];
                      "function" == typeof i ? i() : rY(e[t], null);
                    }
                  };
              };
            })(...e),
            e
          );
        })(l, e.props?.ref ?? e?.ref);
      return (
        (0, rH.useInsertionEffect)(() => {
          let {
            width: e,
            height: r,
            top: d,
            left: u,
            right: p,
            bottom: m,
            direction: f,
          } = h.current;
          if (t || !1 === a || !l.current || !e || !r) return;
          let g = "rtl" === f,
            x =
              "left" === i
                ? g
                  ? `right: ${p}`
                  : `left: ${u}`
                : g
                ? `left: ${u}`
                : `right: ${p}`,
            y = "bottom" === n ? `bottom: ${m}` : `top: ${d}`;
          l.current.dataset.motionPopId = o;
          let v = document.createElement("style");
          c && (v.nonce = c);
          let w = s ?? document.head;
          return (
            w.appendChild(v),
            v.sheet &&
              v.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `),
            () => {
              l.current?.removeAttribute("data-motion-pop-id"),
                w.contains(v) && w.removeChild(v);
            }
          );
        }, [t]),
        (0, r.jsx)(rq, {
          isPresent: t,
          childRef: l,
          sizeRef: h,
          pop: a,
          children: !1 === a ? e : rH.cloneElement(e, { ref: d }),
        })
      );
    }
    let rK = ({
      children: e,
      initial: t,
      isPresent: i,
      onExitComplete: n,
      custom: s,
      presenceAffectsLayout: a,
      mode: o,
      anchorX: l,
      anchorY: h,
      root: c,
    }) => {
      let d = iP(rZ),
        u = (0, p.useId)(),
        m = !0,
        f = (0, p.useMemo)(
          () => (
            (m = !1),
            {
              id: u,
              initial: t,
              isPresent: i,
              custom: s,
              onExitComplete: (e) => {
                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                n && n();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }
          ),
          [i, d, n]
        );
      return (
        a && m && (f = { ...f }),
        (0, p.useMemo)(() => {
          d.forEach((e, t) => d.set(t, !1));
        }, [i]),
        p.useEffect(() => {
          i || d.size || !n || n();
        }, [i]),
        (e = (0, r.jsx)(rG, {
          pop: "popLayout" === o,
          isPresent: i,
          anchorX: l,
          anchorY: h,
          root: c,
          children: e,
        })),
        (0, r.jsx)(iT.Provider, { value: f, children: e })
      );
    };
    function rZ() {
      return new Map();
    }
    let rJ = (e) => e.key || "";
    function rQ(e) {
      let t = [];
      return (
        p.Children.forEach(e, (e) => {
          (0, p.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    let r0 = ({
      children: e,
      custom: t,
      initial: i = !0,
      onExitComplete: n,
      presenceAffectsLayout: s = !0,
      mode: a = "sync",
      propagate: o = !1,
      anchorX: l = "left",
      anchorY: h = "top",
      root: c,
    }) => {
      let [d, u] = sR(o),
        m = (0, p.useMemo)(() => rQ(e), [e]),
        f = o && !d ? [] : m.map(rJ),
        g = (0, p.useRef)(!0),
        x = (0, p.useRef)(m),
        y = iP(() => new Map()),
        v = (0, p.useRef)(new Set()),
        [w, b] = (0, p.useState)(m),
        [j, k] = (0, p.useState)(m);
      iI(() => {
        (g.current = !1), (x.current = m);
        for (let e = 0; e < j.length; e++) {
          let t = rJ(j[e]);
          f.includes(t)
            ? (y.delete(t), v.current.delete(t))
            : !0 !== y.get(t) && y.set(t, !1);
        }
      }, [j, f.length, f.join("-")]);
      let S = [];
      if (m !== w) {
        let e = [...m];
        for (let t = 0; t < j.length; t++) {
          let i = j[t],
            n = rJ(i);
          f.includes(n) || (e.splice(t, 0, i), S.push(i));
        }
        return "wait" === a && S.length && (e = S), k(rQ(e)), b(m), null;
      }
      let { forceRender: T } = (0, p.useContext)(iu);
      return (0, r.jsx)(r.Fragment, {
        children: j.map((e) => {
          let p = rJ(e),
            w = (!o || !!d) && (m === j || f.includes(p));
          return (0, r.jsx)(
            rK,
            {
              isPresent: w,
              initial: (!g.current || !!i) && void 0,
              custom: t,
              presenceAffectsLayout: s,
              mode: a,
              root: c,
              onExitComplete: w
                ? void 0
                : () => {
                    if (v.current.has(p) || !y.has(p)) return;
                    v.current.add(p), y.set(p, !0);
                    let e = !0;
                    y.forEach((t) => {
                      t || (e = !1);
                    }),
                      e && (T?.(), k(x.current), o && u?.(), n && n());
                  },
              anchorX: l,
              anchorY: h,
              children: e,
            },
            p
          );
        }),
      });
    };
    function r1(e) {
      return (0, r.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        children: [
          (0, r.jsx)("path", { d: "M5 12h14" }),
          (0, r.jsx)("path", { d: "m13 6 6 6-6 6" }),
        ],
      });
    }
    function r2(e) {
      return (0, r.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        children: [
          (0, r.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
          (0, r.jsx)("path", { d: "M12 7v5l3 2" }),
        ],
      });
    }
    function r5({ className: e = "" }) {
      let [t, i] = (0, p.useState)(!1);
      return (0, r.jsx)(rX.button, {
        type: "button",
        whileTap: { scale: 0.96 },
        onClick: () => {
          t || (i(!0), setTimeout(() => i(!1), 2200));
        },
        className: `group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-gold-200 to-gold-600 font-oswald font-semibold uppercase tracking-[0.18em] text-ink shadow-coin transition-transform hover:scale-[1.04] ${e}`,
        children: (0, r.jsx)(r0, {
          mode: "wait",
          initial: !1,
          children: t
            ? (0, r.jsxs)(
                rX.span,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                  className: "flex items-center gap-2",
                  children: [
                    (0, r.jsx)(r2, { className: "h-4 w-4" }),
                    "Coming Soon",
                  ],
                },
                "soon"
              )
            : (0, r.jsxs)(
                rX.span,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                  className: "flex items-center gap-2.5",
                  children: [
                    "Launch dApp",
                    (0, r.jsx)(r1, {
                      className:
                        "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                    }),
                  ],
                },
                "launch"
              ),
        }),
      });
    }
    function r3(e) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: (0, r.jsx)("path", {
          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
        }),
      });
    }
    function r4(e) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: (0, r.jsx)("path", {
          d: "M21.94 4.62 18.6 20.36c-.25 1.11-.91 1.39-1.85.86l-5.1-3.76-2.46 2.37c-.27.27-.5.5-1.03.5l.37-5.2 9.46-8.55c.41-.37-.09-.57-.64-.2L5.5 13.13l-5.03-1.57C-.62 11.23-.64 10.47.84 9.9l20.3-7.82c.91-.34 1.71.2 1.4 2.54Z",
        }),
      });
    }
    let r6 =
      "flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-ink-700/40 text-gold-100 backdrop-blur transition-all hover:scale-[1.06] hover:border-gold-300/60 hover:bg-gold-500/15";
    function r8() {
      let [e, t] = (0, p.useState)(!1),
        [i, n] = (0, p.useState)(!1);
      return (
        (0, p.useEffect)(() => {
          let e = () => t(window.scrollY > 24);
          return (
            e(),
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
        (0, p.useEffect)(() => {
          let e = () => {
            window.location.hash &&
              window.history.replaceState(
                null,
                "",
                window.location.pathname + window.location.search
              );
          };
          return (
            window.addEventListener("hashchange", e),
            () => window.removeEventListener("hashchange", e)
          );
        }, []),
        (0, r.jsxs)("header", {
          className: "fixed left-0 top-0 z-50 w-full",
          children: [
            (0, r.jsx)("div", {
              className: `border-b px-5 transition-colors duration-300 sm:px-8 lg:px-14 ${
                e || i
                  ? "border-gold-400/15 bg-ink/90 backdrop-blur-xl"
                  : "border-transparent"
              }`,
              children: (0, r.jsxs)("div", {
                className:
                  "mx-auto flex max-w-[1300px] items-center justify-between gap-6 py-4",
                children: [
                  (0, r.jsxs)("a", {
                    href: "#top",
                    className: "flex items-center gap-3 lg:flex-1",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold-400/40 shadow-[0_0_22px_-4px_rgba(201,151,31,0.7)]",
                        children: (0, r.jsx)(m.default, {
                          src: "/logo.png",
                          alt: "$WORLDCUP",
                          fill: !0,
                          sizes: "44px",
                          className: "object-cover",
                          priority: !0,
                        }),
                      }),
                      (0, r.jsxs)("span", {
                        className:
                          "font-anton text-xl tracking-wide text-cream",
                        children: [
                          "WORLD",
                          (0, r.jsx)("span", {
                            className: "text-gold-300",
                            children: "CUP",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("nav", {
                    className: "hidden items-center gap-4 lg:flex xl:gap-9",
                    children: w.map((e) =>
                      (0, r.jsx)(
                        "a",
                        {
                          href: e.href,
                          className:
                            "font-oswald text-[0.7rem] uppercase tracking-[0.14em] text-cream/70 transition-colors hover:text-gold-200 xl:text-sm xl:tracking-[0.18em]",
                          children: e.label,
                        },
                        e.href
                      )
                    ),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "hidden items-center gap-3 lg:flex lg:flex-1 lg:justify-end",
                    children: [
                      (0, r.jsx)(r5, {
                        className: "min-w-[140px] px-5 py-2.5 text-xs",
                      }),
                      (0, r.jsx)("a", {
                        href: v,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "Telegram",
                        className: r6,
                        children: (0, r.jsx)(r4, { className: "h-5 w-5" }),
                      }),
                      (0, r.jsx)("a", {
                        href: y,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "X",
                        className: r6,
                        children: (0, r.jsx)(r3, {
                          className: "h-[18px] w-[18px]",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("button", {
                    type: "button",
                    onClick: () => n((e) => !e),
                    "aria-label": "Toggle menu",
                    className:
                      "flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-ink-700/40 text-gold-100 backdrop-blur transition-all hover:border-gold-300/60 hover:bg-gold-500/15 lg:hidden",
                    children: (0, r.jsx)("svg", {
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: i
                        ? (0, r.jsx)("path", {
                            d: "M6 6L18 18M6 18L18 6",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                          })
                        : (0, r.jsx)("path", {
                            d: "M4 7h16M4 12h16M4 17h16",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                          }),
                    }),
                  }),
                ],
              }),
            }),
            i &&
              (0, r.jsx)("div", {
                className:
                  "border-b border-gold-400/18 bg-ink/95 backdrop-blur-xl lg:hidden",
                children: (0, r.jsxs)("div", {
                  className: "flex flex-col gap-1 px-5 py-4",
                  children: [
                    w.map((e) =>
                      (0, r.jsx)(
                        "a",
                        {
                          href: e.href,
                          onClick: () => n(!1),
                          className:
                            "rounded-lg px-3 py-3 font-oswald text-base uppercase tracking-[0.18em] text-cream/80 transition-colors hover:bg-gold-500/10 hover:text-gold-200",
                          children: e.label,
                        },
                        e.href
                      )
                    ),
                    (0, r.jsxs)("div", {
                      className:
                        "mt-3 flex items-center gap-3 border-t border-gold-400/12 px-3 pt-4",
                      children: [
                        (0, r.jsx)("a", {
                          href: v,
                          target: "_blank",
                          rel: "noreferrer",
                          "aria-label": "Telegram",
                          className: r6,
                          children: (0, r.jsx)(r4, { className: "h-5 w-5" }),
                        }),
                        (0, r.jsx)("a", {
                          href: y,
                          target: "_blank",
                          rel: "noreferrer",
                          "aria-label": "X",
                          className: r6,
                          children: (0, r.jsx)(r3, {
                            className: "h-[18px] w-[18px]",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        })
      );
    }
    let r7 = [
      { label: "Chain", value: "ETH Chain" },
      { label: "Tax", value: "0 / 0" },
      { label: "Liquidity", value: "Burnt" },
      { label: "Supply", value: "1B" },
    ];
    function r9() {
      let [e, t] = (0, p.useState)(!1),
        i = async () => {
          try {
            await navigator.clipboard.writeText(g),
              t(!0),
              setTimeout(() => t(!1), 1600);
          } catch {}
        };
      return (0, r.jsxs)("section", {
        id: "top",
        className:
          "relative isolate flex min-h-screen flex-col overflow-hidden",
        children: [
          (0, r.jsx)("div", { className: "absolute inset-0 z-0 bg-ink" }),
          (0, r.jsx)("div", {
            className: "absolute inset-0 z-0 bg-cover bg-center",
            style: {
              backgroundImage: "url('/heronew.png')",
              filter: "brightness(0.5) saturate(0.85)",
            },
          }),
          (0, r.jsx)("div", {
            className: "absolute inset-0 z-0",
            style: {
              background:
                "linear-gradient(to bottom, rgba(10,10,11,0.6) 0%, rgba(10,10,11,0.38) 45%, rgba(10,10,11,0.52) 100%)",
            },
          }),
          (0, r.jsx)("div", {
            className: "absolute inset-0 z-0",
            style: {
              background:
                "linear-gradient(to top, #0A0A0B 0%, rgba(10,10,11,0.4) 8%, transparent 26%)",
            },
          }),
          (0, r.jsx)("div", {
            className: "absolute inset-0 z-0",
            style: {
              background:
                "radial-gradient(130% 100% at 0% 100%, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.45) 34%, transparent 62%)",
            },
          }),
          (0, r.jsx)("div", {
            className: "absolute inset-0 z-0",
            style: {
              background:
                "radial-gradient(90% 80% at 100% 100%, rgba(10,10,11,0.6) 0%, transparent 55%)",
            },
          }),
          (0, r.jsx)("div", {
            className: "absolute inset-x-0 top-0 z-0 h-40",
            style: {
              background:
                "linear-gradient(to bottom, rgba(10,10,11,0.65), transparent)",
            },
          }),
          (0, r.jsx)("div", {
            className:
              "relative z-[3] flex w-full flex-1 flex-col px-5 sm:px-8 lg:px-14",
            children: (0, r.jsx)("div", {
              className:
                "mx-auto flex w-full max-w-[1300px] flex-1 flex-col justify-end pb-14 pt-28 lg:pb-20",
              children: (0, r.jsxs)("div", {
                className: "grid items-end gap-10 lg:grid-cols-[1.4fr_0.9fr]",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsxs)(rX.span, {
                        initial: { y: 16, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { duration: 0.6, delay: 0.1 },
                        className:
                          "flex items-center justify-center gap-2 font-oswald text-xs uppercase tracking-[0.3em] text-gold-200 lg:justify-start",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "h-2 w-2 animate-pulse rounded-full bg-pitch-light",
                          }),
                          "The World United By Football",
                        ],
                      }),
                      (0, r.jsxs)(rX.h1, {
                        initial: { y: 28, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { duration: 0.7, delay: 0.2 },
                        className:
                          "mt-4 text-center font-anton uppercase leading-[0.9] tracking-[0.01em] text-[clamp(3.5rem,9vw,9rem)] lg:text-left",
                        children: [
                          (0, r.jsx)("span", {
                            className: "block text-cream",
                            children: "WORLD",
                          }),
                          (0, r.jsx)("span", {
                            className: "block text-gold-300",
                            children: "CUP",
                          }),
                        ],
                      }),
                      (0, r.jsxs)(rX.p, {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { duration: 0.7, delay: 0.32 },
                        className:
                          "mt-6 mx-auto max-w-lg text-center font-mont text-base leading-relaxed text-cream/70 sm:text-lg lg:mx-0 lg:text-left",
                        children: [
                          "The only World Cup you can hold in your wallet. Fair launched on ETH Chain with 0% tax, Burnt liquidity, and 1B supply",
                          " ",
                          (0, r.jsx)("span", {
                            className: "text-gold-200",
                            children: f,
                          }),
                          ".",
                        ],
                      }),
                      (0, r.jsxs)(rX.div, {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { duration: 0.7, delay: 0.42 },
                        className:
                          "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start",
                        children: [
                          (0, r.jsx)("a", {
                            href: x,
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "min-w-[150px] rounded-full bg-gradient-to-b from-gold-200 to-gold-600 px-8 py-3.5 text-center font-oswald text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-coin transition-transform hover:scale-[1.05]",
                            children: "Buy",
                          }),
                          (0, r.jsx)(r5, {
                            className:
                              "w-full px-8 py-3.5 text-sm sm:w-auto lg:hidden",
                          }),
                          (0, r.jsx)("a", {
                            href: "https://dexscreener.com/ethereum/0xcomingsoon",
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "min-w-[150px] rounded-full border border-gold-400/40 px-8 py-3.5 text-center font-oswald text-sm font-semibold uppercase tracking-[0.18em] text-gold-100 transition-colors hover:bg-gold-400/10",
                            children: "Chart",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)(rX.div, {
                    initial: { y: 28, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.7, delay: 0.5 },
                    className:
                      "rounded-3xl border border-gold-400/20 bg-ink-700/55 p-6 backdrop-blur-xl lg:max-w-sm lg:justify-self-end",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-1 border-b border-gold-400/15 pb-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "flex items-center gap-2 font-oswald text-sm uppercase tracking-[0.2em] text-cream/80",
                            children: f,
                          }),
                          (0, r.jsx)("span", {
                            className: "font-anton text-xl text-gold-200",
                            children: "1B",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "mt-5 grid grid-cols-2 gap-4",
                        children: r7.map((e) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className: "text-center",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "font-oswald text-[0.65rem] uppercase tracking-[0.2em] text-cream/45",
                                  children: e.label,
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "mt-0.5 font-oswald text-lg font-semibold text-gold-100",
                                  children: e.value,
                                }),
                              ],
                            },
                            e.label
                          )
                        ),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "mt-5 flex items-center gap-3 rounded-full border border-gold-400/15 bg-ink/60 py-2 pl-4 pr-2",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "font-oswald text-[0.65rem] uppercase tracking-widest text-cream/45",
                            children: "CA",
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "flex-1 truncate font-mont text-sm text-cream/80",
                            children: `${g.slice(0, 6)}...${g.slice(-4)}`,
                          }),
                          (0, r.jsx)("button", {
                            onClick: i,
                            className:
                              "rounded-full bg-gold-500/20 px-4 py-1.5 font-oswald text-xs uppercase tracking-widest text-gold-100 transition-colors hover:bg-gold-500/35",
                            children: e ? "Copied" : "Copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    function ae({ id: e, children: t, bgImage: i }) {
      return (0, r.jsxs)("section", {
        id: e,
        className:
          "relative isolate scroll-mt-24 px-5 py-24 sm:px-8 lg:px-14 lg:py-32",
        children: [
          i &&
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-80",
                  style: { backgroundImage: `url('${i}')` },
                }),
                (0, r.jsx)("div", {
                  className: "pointer-events-none absolute inset-0 z-0",
                  style: {
                    background:
                      "linear-gradient(to bottom, rgba(10,10,11,0.94) 0%, rgba(10,10,11,0.5) 26%, rgba(10,10,11,0.5) 74%, rgba(10,10,11,0.96) 100%)",
                  },
                }),
              ],
            }),
          (0, r.jsx)("div", {
            className: "pointer-events-none absolute inset-0 z-0",
            style: {
              background:
                "radial-gradient(55% 45% at 50% 0%, rgba(201,151,31,0.06), transparent 70%)",
            },
          }),
          (0, r.jsx)("div", {
            className: "relative z-10 mx-auto max-w-[1300px]",
            children: t,
          }),
        ],
      });
    }
    let at = [
        { year: "1930", teams: 13 },
        { year: "1934", teams: 16 },
        { year: "1982", teams: 24 },
        { year: "1998", teams: 32 },
        { year: "2026", teams: 48, now: !0 },
      ],
      ai = [
        {
          y: "1930",
          h: "The first kickoff",
          t: "Uruguay host and win the very first World Cup, just 13 teams invited.",
        },
        {
          y: "1950",
          h: "The Maracanazo",
          t: "Uruguay silence a record 200,000 crowd to stun Brazil at home.",
        },
        {
          y: "1958",
          h: "Pelé arrives",
          t: "A teenage Pelé lights up Sweden as Brazil lift their first title.",
        },
        {
          y: "1970",
          h: "Theirs to keep",
          t: "Brazil's third crown wins the Jules Rimet trophy forever.",
        },
        {
          y: "2022",
          h: "Messi's moment",
          t: "Argentina win their third in Qatar after an unforgettable final.",
        },
        {
          y: "2026",
          h: "Biggest ever",
          t: "48 nations across the USA, Canada & Mexico, 104 matches.",
        },
      ],
      an = [
        { n: "Brazil", c: "br", t: 5 },
        { n: "Germany", c: "de", t: 4 },
        { n: "Italy", c: "it", t: 4 },
        { n: "Argentina", c: "ar", t: 3 },
        { n: "France", c: "fr", t: 2 },
        { n: "Uruguay", c: "uy", t: 2 },
        { n: "England", c: "gb-eng", t: 1 },
        { n: "Spain", c: "es", t: 1 },
      ],
      as = [
        "Climb the FIFA World Ranking",
        "Survive years of qualifiers",
        "Outlast your confederation",
        "Seize one of 2026's new spots",
      ],
      ar = [
        { n: "Cape Verde", c: "cv" },
        { n: "Curaçao", c: "cw" },
        { n: "Jordan", c: "jo" },
        { n: "Uzbekistan", c: "uz" },
      ];
    function aa() {
      let [e, t] = (0, p.useState)(0);
      return (0, r.jsxs)(ae, {
        id: "history",
        children: [
          (0, r.jsxs)(rX.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.6 },
            className: "grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end",
            children: [
              (0, r.jsxs)("h2", {
                className:
                  "max-w-[18ch] text-balance font-anton uppercase leading-[1.02] tracking-[0.01em] text-cream text-[clamp(2.8rem,7vw,6rem)]",
                children: [
                  "From 13 to ",
                  (0, r.jsx)("span", {
                    className: "text-gold-300",
                    children: "48.",
                  }),
                ],
              }),
              (0, r.jsx)("p", {
                className:
                  "font-mont text-[1.02rem] leading-relaxed text-cream/65 lg:pb-3",
                children:
                  "Since the very first tournament in Uruguay, 1930, the World Cup has become the most-watched event on earth: a month every four years when the whole planet stops for one game. It has grown broader and more global with every edition, and in 2026 it reaches its grandest stage yet, with three host nations, 104 matches, one trophy.",
              }),
            ],
          }),
          (0, r.jsxs)("div", {
            className:
              "mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:items-stretch",
            children: [
              (0, r.jsxs)(rX.div, {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-60px" },
                transition: { duration: 0.6 },
                className:
                  "relative min-h-[320px] overflow-hidden rounded-2xl border border-cream/10",
                children: [
                  (0, r.jsx)(m.default, {
                    src: "/history.png",
                    alt: "A floodlit World Cup stadium packed under the lights",
                    fill: !0,
                    sizes: "(max-width:1024px) 100vw, 50vw",
                    className: "object-cover",
                  }),
                  (0, r.jsx)("div", {
                    className: "pointer-events-none absolute inset-0",
                    style: {
                      background:
                        "linear-gradient(to top, rgba(10,10,11,0.55) 0%, transparent 55%)",
                    },
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "absolute bottom-5 left-6 font-oswald text-[0.6rem] uppercase tracking-[0.28em] text-cream/70",
                    children: "The world's stage",
                  }),
                ],
              }),
              (0, r.jsxs)(rX.div, {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-60px" },
                transition: { duration: 0.6, delay: 0.1 },
                className:
                  "overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.02] p-6 sm:p-8",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, r.jsxs)("span", {
                        className:
                          "flex items-center gap-2 font-oswald text-[0.65rem] uppercase tracking-[0.28em] text-gold-200",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "h-1.5 w-1.5 animate-pulse rounded-full bg-pitch-light",
                          }),
                          "The Expansion",
                        ],
                      }),
                      (0, r.jsx)("span", {
                        className:
                          "font-oswald text-[0.6rem] uppercase tracking-[0.25em] text-cream/40",
                        children: "Teams per finals",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-11 flex items-end gap-4 sm:gap-6",
                    children: at.map((e, t) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className: "flex flex-1 flex-col items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "flex h-40 w-full items-end justify-center",
                              children: (0, r.jsx)(rX.div, {
                                className: `relative w-full max-w-[3.5rem] rounded-t-md ${
                                  e.now
                                    ? "bg-gradient-to-t from-gold-600 to-gold-200"
                                    : "bg-cream/15"
                                }`,
                                style: {
                                  boxShadow: e.now
                                    ? "0 0 30px rgba(233,190,87,0.4)"
                                    : "none",
                                },
                                initial: { height: 0 },
                                whileInView: {
                                  height: `${(e.teams / 48) * 100}%`,
                                },
                                viewport: { once: !0 },
                                transition: {
                                  duration: 0.8,
                                  delay: 0.1 * t,
                                  ease: [0.22, 1, 0.36, 1],
                                },
                                children: (0, r.jsx)("span", {
                                  className: `absolute -top-7 left-1/2 -translate-x-1/2 font-anton text-lg leading-none ${
                                    e.now ? "text-gold-300" : "text-cream/80"
                                  }`,
                                  children: e.teams,
                                }),
                              }),
                            }),
                            (0, r.jsx)("span", {
                              className:
                                "mt-3 font-oswald text-[0.62rem] uppercase tracking-[0.16em] text-cream/45",
                              children: e.year,
                            }),
                          ],
                        },
                        e.year
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)("div", {
            className: "mt-16",
            children: [
              (0, r.jsxs)(rX.span, {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.5 },
                className:
                  "flex items-center gap-2 font-oswald text-[0.65rem] uppercase tracking-[0.3em] text-gold-200",
                children: [
                  (0, r.jsx)("span", {
                    className:
                      "h-1.5 w-1.5 animate-pulse rounded-full bg-pitch-light",
                  }),
                  "Defining Moments",
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "mt-6 grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-stretch",
                children: [
                  (0, r.jsx)("div", {
                    className: "space-y-3",
                    children: ai.map((i, n) => {
                      let s = e === n;
                      return (0, r.jsxs)(
                        "button",
                        {
                          type: "button",
                          onClick: () => t(n),
                          "aria-expanded": s,
                          className: `block w-full rounded-2xl border px-6 py-5 text-left transition-all ${
                            s
                              ? "border-gold-300/60 bg-gradient-to-br from-gold-200 to-gold-500 shadow-[0_14px_40px_-16px_rgba(201,151,31,0.65)]"
                              : "border-cream/10 bg-cream/[0.02] hover:border-cream/20"
                          }`,
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-4",
                              children: [
                                (0, r.jsx)("span", {
                                  className: `font-anton text-2xl leading-none ${
                                    s ? "text-ink" : "text-cream/70"
                                  }`,
                                  children: i.y,
                                }),
                                (0, r.jsx)("span", {
                                  className: `flex-1 font-oswald text-sm uppercase tracking-[0.16em] ${
                                    s ? "text-ink" : "text-cream"
                                  }`,
                                  children: i.h,
                                }),
                                (0, r.jsx)("span", {
                                  className: `flex h-6 w-6 flex-none items-center justify-center rounded-full border text-base leading-none transition-transform duration-300 ${
                                    s
                                      ? "rotate-45 border-ink/40 text-ink"
                                      : "border-cream/20 text-cream/40"
                                  }`,
                                  children: "+",
                                }),
                              ],
                            }),
                            (0, r.jsx)(r0, {
                              initial: !1,
                              children:
                                s &&
                                (0, r.jsx)(rX.div, {
                                  initial: { height: 0, opacity: 0 },
                                  animate: { height: "auto", opacity: 1 },
                                  exit: { height: 0, opacity: 0 },
                                  transition: {
                                    duration: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                  },
                                  className: "overflow-hidden",
                                  children: (0, r.jsx)("p", {
                                    className:
                                      "pt-3 font-mont text-sm leading-relaxed text-ink/75",
                                    children: i.t,
                                  }),
                                }),
                            }),
                          ],
                        },
                        i.y
                      );
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "relative min-h-[420px] overflow-hidden rounded-2xl border border-cream/10 lg:min-h-0",
                    children: [
                      (0, r.jsx)(m.default, {
                        src: "/cup.png",
                        alt: "FIFA World Cup trophy",
                        fill: !0,
                        sizes: "(max-width:1024px) 100vw, 40vw",
                        className: "object-cover",
                      }),
                      (0, r.jsx)("div", {
                        className: "absolute inset-0",
                        style: {
                          background:
                            "linear-gradient(to top, rgba(10,10,11,0.94) 0%, rgba(10,10,11,0.15) 48%, transparent 74%)",
                        },
                      }),
                      (0, r.jsxs)("div", {
                        className: "absolute inset-x-0 bottom-0 p-7",
                        children: [
                          (0, r.jsx)("span", {
                            className:
                              "font-oswald text-[0.6rem] uppercase tracking-[0.3em] text-gold-200",
                            children: "Defining Moment",
                          }),
                          (0, r.jsx)(r0, {
                            mode: "wait",
                            children: (0, r.jsxs)(
                              rX.div,
                              {
                                initial: { opacity: 0, y: 14 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -10 },
                                transition: { duration: 0.3 },
                                className: "mt-2",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "font-anton text-5xl leading-none text-gold-300",
                                    style: {
                                      textShadow:
                                        "0 0 30px rgba(233,190,87,0.35)",
                                    },
                                    children: ai[e].y,
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "mt-2 font-oswald text-sm uppercase tracking-[0.18em] text-cream",
                                    children: ai[e].h,
                                  }),
                                ],
                              },
                              e
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)(rX.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-60px" },
            transition: { duration: 0.55 },
            className:
              "mt-5 rounded-2xl border border-cream/10 bg-cream/[0.02] p-6 sm:p-8",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "flex flex-wrap items-center justify-between gap-x-4 gap-y-2",
                children: [
                  (0, r.jsxs)("span", {
                    className:
                      "flex items-center gap-2 font-oswald text-[0.65rem] uppercase tracking-[0.28em] text-gold-200",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "h-1.5 w-1.5 animate-pulse rounded-full bg-pitch-light",
                      }),
                      "Roll of Champions",
                    ],
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "font-oswald text-[0.6rem] uppercase tracking-[0.25em] text-cream/40",
                    children: "22 finals · 8 winners",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
                children: an.map((e) =>
                  (0, r.jsxs)(
                    "span",
                    {
                      className:
                        "flex items-center gap-2.5 rounded-full border border-cream/[0.06] bg-ink-800/60 py-1.5 pl-1.5 pr-4",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "block h-7 w-7 flex-none overflow-hidden rounded-full ring-1 ring-gold-400/30",
                          children: (0, r.jsx)("img", {
                            src: `/flags/${e.c}.svg`,
                            alt: e.n,
                            width: "28",
                            height: "28",
                            loading: "lazy",
                            className: "h-full w-full object-cover",
                          }),
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "min-w-0 flex-1 truncate font-oswald text-xs uppercase tracking-wide text-cream/70",
                          children: e.n,
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "font-anton text-sm leading-none text-gold-300",
                          children: e.t,
                        }),
                      ],
                    },
                    e.c
                  )
                ),
              }),
            ],
          }),
          (0, r.jsx)(rX.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-60px" },
            transition: { duration: 0.55 },
            className:
              "mt-5 overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.02] p-6 sm:p-10",
            children: (0, r.jsxs)("div", {
              className: "grid gap-10 lg:grid-cols-2 lg:items-center",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("span", {
                      className:
                        "flex items-center gap-2 font-oswald text-[0.65rem] uppercase tracking-[0.28em] text-gold-200",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "h-1.5 w-1.5 animate-pulse rounded-full bg-pitch-light",
                        }),
                        "Breaking Into the 48",
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "mt-6 flex items-baseline gap-3",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "font-anton text-[4rem] leading-none text-gold-300",
                          style: {
                            textShadow: "0 0 34px rgba(233,190,87,0.3)",
                          },
                          children: "48",
                        }),
                        (0, r.jsxs)("span", {
                          className:
                            "font-oswald text-[0.7rem] uppercase leading-tight tracking-[0.22em] text-cream/50",
                          children: [
                            "qualify from",
                            (0, r.jsx)("br", {}),
                            "200+ nations",
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "mt-6 font-mont text-sm leading-relaxed text-cream/65",
                      children:
                        "The leap from 32 to 48 opened sixteen new doors, the most open World Cup ever. But a place is earned, never given: a nation has to climb the world ranking, grind through years of qualifiers, and outlast its continent's best.",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "font-oswald text-[0.62rem] uppercase tracking-[0.25em] text-cream/45",
                      children: "What it takes",
                    }),
                    (0, r.jsx)("ol", {
                      className: "mt-4 space-y-3",
                      children: as.map((e, t) =>
                        (0, r.jsxs)(
                          "li",
                          {
                            className: "flex items-center gap-3.5",
                            children: [
                              (0, r.jsx)("span", {
                                className:
                                  "flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gold-400/40 font-anton text-xs text-gold-200",
                                children: t + 1,
                              }),
                              (0, r.jsx)("span", {
                                className: "font-mont text-sm text-cream/70",
                                children: e,
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                    (0, r.jsxs)("div", {
                      className: "mt-7 border-t border-cream/10 pt-6",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "font-oswald text-[0.62rem] uppercase tracking-[0.25em] text-cream/45",
                          children: "First-timers · 2026, proof it pays off",
                        }),
                        (0, r.jsx)("div", {
                          className: "mt-4 flex flex-wrap gap-5",
                          children: ar.map((e) =>
                            (0, r.jsxs)(
                              "div",
                              {
                                className: "flex flex-col items-center gap-1.5",
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "block h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold-400/30",
                                    children: (0, r.jsx)("img", {
                                      src: `/flags/${e.c}.svg`,
                                      alt: e.n,
                                      width: "44",
                                      height: "44",
                                      loading: "lazy",
                                      className: "h-full w-full object-cover",
                                    }),
                                  }),
                                  (0, r.jsx)("span", {
                                    className:
                                      "font-oswald text-[0.55rem] uppercase tracking-[0.12em] text-cream/50",
                                    children: e.n,
                                  }),
                                ],
                              },
                              e.c
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    let ao = [
      { n: "Argentina", c: "ar" },
      { n: "Brazil", c: "br" },
      { n: "Uruguay", c: "uy" },
      { n: "Colombia", c: "co" },
      { n: "Ecuador", c: "ec" },
      { n: "Paraguay", c: "py" },
      { n: "France", c: "fr" },
      { n: "England", c: "gb-eng" },
      { n: "Spain", c: "es" },
      { n: "Germany", c: "de" },
      { n: "Portugal", c: "pt" },
      { n: "Netherlands", c: "nl" },
      { n: "Croatia", c: "hr" },
      { n: "Belgium", c: "be" },
      { n: "Switzerland", c: "ch" },
      { n: "Austria", c: "at" },
      { n: "Scotland", c: "gb-sct" },
      { n: "Norway", c: "no" },
      { n: "Sweden", c: "se" },
      { n: "Czechia", c: "cz" },
      { n: "Türkiye", c: "tr" },
      { n: "Bosnia & Herzegovina", c: "ba" },
      { n: "United States", c: "us" },
      { n: "Mexico", c: "mx" },
      { n: "Canada", c: "ca" },
      { n: "Panama", c: "pa" },
      { n: "Haiti", c: "ht" },
      { n: "Curaçao", c: "cw" },
      { n: "Morocco", c: "ma" },
      { n: "Senegal", c: "sn" },
      { n: "Ivory Coast", c: "ci" },
      { n: "Egypt", c: "eg" },
      { n: "Ghana", c: "gh" },
      { n: "Algeria", c: "dz" },
      { n: "Tunisia", c: "tn" },
      { n: "South Africa", c: "za" },
      { n: "Cape Verde", c: "cv" },
      { n: "DR Congo", c: "cd" },
      { n: "Japan", c: "jp" },
      { n: "South Korea", c: "kr" },
      { n: "Iran", c: "ir" },
      { n: "Australia", c: "au" },
      { n: "Saudi Arabia", c: "sa" },
      { n: "Qatar", c: "qa" },
      { n: "Uzbekistan", c: "uz" },
      { n: "Jordan", c: "jo" },
      { n: "Iraq", c: "iq" },
      { n: "New Zealand", c: "nz" },
    ];
    function al({ hidden: e }) {
      return (0, r.jsx)("ul", {
        "aria-hidden": e,
        className: "flex shrink-0 items-center gap-5 pr-5 sm:gap-7 sm:pr-7",
        children: ao.map((e) =>
          (0, r.jsx)(
            "li",
            {
              className: "shrink-0",
              children: (0, r.jsx)("span", {
                className:
                  "block h-14 w-14 overflow-hidden rounded-full shadow-[0_8px_24px_-10px_rgba(0,0,0,0.85)] ring-1 ring-gold-400/30 transition-transform hover:scale-110 sm:h-16 sm:w-16",
                children: (0, r.jsx)("img", {
                  src: `/flags/${e.c}.svg`,
                  alt: e.n,
                  title: e.n,
                  width: "64",
                  height: "64",
                  loading: "lazy",
                  className: "h-full w-full object-cover",
                }),
              }),
            },
            e.c
          )
        ),
      });
    }
    function ah() {
      return (0, r.jsxs)("section", {
        className: "relative overflow-hidden pb-24 pt-10 lg:pb-32 lg:pt-14",
        children: [
          (0, r.jsxs)("div", {
            className:
              "mx-auto max-w-[1300px] px-5 text-center sm:px-8 lg:px-14",
            children: [
              (0, r.jsxs)("h2", {
                className:
                  "font-anton uppercase leading-[1.02] tracking-[0.01em] text-cream text-[clamp(2.4rem,6vw,4.5rem)]",
                children: [
                  "48 Nations. ",
                  (0, r.jsx)("span", {
                    className: "text-gold-300",
                    children: "One Cup.",
                  }),
                ],
              }),
              (0, r.jsxs)("p", {
                className:
                  "mx-auto mt-5 max-w-[48ch] font-mont text-[1.02rem] leading-relaxed text-cream/65",
                children: [
                  "Every nation in the 2026 World Cup, united on-chain. The whole world plays, and so does",
                  " ",
                  (0, r.jsx)("span", {
                    className: "text-gold-200",
                    children: "$WORLDCUP",
                  }),
                  ".",
                ],
              }),
            ],
          }),
          (0, r.jsx)("div", {
            className: "relative mt-12 sm:mt-14",
            style: {
              WebkitMaskImage:
                "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            },
            children: (0, r.jsxs)(rX.div, {
              className: "flex w-max",
              animate: { x: ["0%", "-50%"] },
              transition: { duration: 70, repeat: 1 / 0, ease: "linear" },
              children: [(0, r.jsx)(al, {}), (0, r.jsx)(al, { hidden: !0 })],
            }),
          }),
        ],
      });
    }
    let ac = [
      { k: "4", em: "B+", l: "Football fans worldwide" },
      { k: "211", em: "", l: "Nations playing" },
      { k: "", em: "∞", l: "Reasons to chant" },
      { k: "01", em: "", l: "Coin for the terrace" },
    ];
    function ad() {
      return (0, r.jsxs)(ae, {
        id: "about",
        children: [
          (0, r.jsxs)("div", {
            className:
              "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center",
            children: [
              (0, r.jsxs)(rX.div, {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-80px" },
                transition: { duration: 0.6 },
                children: [
                  (0, r.jsxs)("h2", {
                    className:
                      "max-w-[16ch] text-balance font-anton uppercase leading-[1.02] tracking-[0.01em] text-cream text-[clamp(2.8rem,7vw,6rem)]",
                    children: [
                      "For the fans. ",
                      (0, r.jsx)("span", {
                        className: "text-gold-300",
                        children: "By the fans.",
                      }),
                    ],
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "mt-7 max-w-[54ch] font-mont text-[1.05rem] leading-relaxed text-cream/75",
                    children:
                      "Football is the only language four billion people speak fluently. $WORLDCUP turns that energy into a community coin on ETH Chain, a digital terrace where the chants get louder every match. No federations. No suits. Just supporters who keep showing up.",
                  }),
                ],
              }),
              (0, r.jsxs)(rX.div, {
                initial: { opacity: 0, scale: 0.97 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: !0, margin: "-60px" },
                transition: { duration: 0.6 },
                className:
                  "relative aspect-[5/4] overflow-hidden rounded-2xl border border-cream/10 lg:aspect-[4/3]",
                children: [
                  (0, r.jsx)(m.default, {
                    src: "/about.png",
                    alt: "World Cup crowd",
                    fill: !0,
                    sizes: "(max-width:1024px) 100vw, 50vw",
                    className: "object-cover",
                  }),
                  (0, r.jsx)("div", {
                    className: "pointer-events-none absolute inset-0",
                    style: {
                      background:
                        "linear-gradient(180deg, transparent 45%, rgba(10,10,11,0.65))",
                    },
                  }),
                  (0, r.jsxs)("span", {
                    className:
                      "absolute left-4 top-4 flex items-center gap-2 rounded-full border border-gold-400/25 bg-ink/60 px-3 py-1 font-oswald text-[0.6rem] uppercase tracking-[0.25em] text-gold-200 backdrop-blur",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "h-1.5 w-1.5 animate-pulse rounded-full bg-pitch-light",
                      }),
                      "Live · The Terrace",
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)(rX.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-60px" },
            transition: { duration: 0.6 },
            className:
              "mt-12 overflow-hidden rounded-2xl border border-gold-400/20 lg:mt-16",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "flex items-center justify-between border-b border-gold-400/15 bg-ink-800 px-6 py-3",
                children: [
                  (0, r.jsxs)("span", {
                    className:
                      "flex items-center gap-2 font-oswald text-[0.65rem] uppercase tracking-[0.28em] text-gold-200",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "h-1.5 w-1.5 animate-pulse rounded-full bg-pitch-light",
                      }),
                      "Matchday Stats",
                    ],
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "font-oswald text-[0.65rem] uppercase tracking-[0.28em] text-cream/40",
                    children: "90:00",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "grid grid-cols-2 gap-px bg-gold-400/10 md:grid-cols-4",
                children: ac.map((e, t) =>
                  (0, r.jsxs)(
                    rX.div,
                    {
                      initial: { opacity: 0, y: 16 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.45, delay: 0.08 * t },
                      className: "bg-ink-800 px-5 py-9 text-center",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "font-anton leading-none text-cream text-[clamp(2.6rem,5vw,4rem)]",
                          style: {
                            textShadow: "0 0 22px rgba(233,190,87,0.25)",
                          },
                          children: [
                            e.k,
                            e.em &&
                              (0, r.jsx)("span", {
                                className: "text-gold-300",
                                children: e.em,
                              }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "mt-3 font-oswald text-[0.7rem] uppercase tracking-[0.18em] text-cream/50",
                          children: e.l,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        ],
      });
    }
    let au = [
        {
          pct: "1%",
          name: "Marketing",
          color: "#E9BE57",
          desc: "Reach, partnerships and community growth.",
        },
        {
          pct: "1%",
          name: "Development",
          color: "#1FA85E",
          desc: "Ongoing build, audits and operations.",
        },
        {
          pct: "1%",
          name: "Reward Pool",
          color: "#F4ECDC",
          desc: "Holder rewards and community incentives.",
        },
      ],
      ap = [
        { l: "Name", v: "WORLDCUP" },
        { l: "Symbol", v: "$WORLDCUP" },
        { l: "Supply", v: "1B" },
        { l: "Tax · B/S", v: "0 / 0" },
        { l: "Liquidity", v: "Burnt" },
      ];
    function am() {
      let [e, t] = (0, p.useState)(!1),
        i = async () => {
          try {
            await navigator.clipboard.writeText(g),
              t(!0),
              setTimeout(() => t(!1), 1600);
          } catch {}
        };
      return (0, r.jsxs)(ae, {
        id: "tokenomics",
        children: [
          (0, r.jsxs)(rX.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.6 },
            className: "grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end",
            children: [
              (0, r.jsxs)("h2", {
                className:
                  "max-w-[16ch] text-balance font-anton uppercase leading-[1.02] tracking-[0.01em] text-cream text-[clamp(2.8rem,7vw,6rem)]",
                children: [
                  "The ",
                  (0, r.jsx)("span", {
                    className: "text-gold-300",
                    children: "starting",
                  }),
                  " eleven.",
                ],
              }),
              (0, r.jsx)("p", {
                className:
                  "font-mont text-[1.02rem] leading-relaxed text-cream/65 lg:pb-3",
                children:
                  "Fair launch. 0% tax, split evenly three ways. Liquidity Burnt, contract renounced, built to last the whole tournament, not a single match.",
              }),
            ],
          }),
          (0, r.jsx)(rX.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-60px" },
            transition: { duration: 0.55 },
            className:
              "mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 lg:grid-cols-5",
            children: ap.map((e, t) =>
              (0, r.jsxs)(
                "div",
                {
                  className: `bg-ink-800 px-6 py-7 text-center lg:text-left ${
                    t === ap.length - 1 ? "col-span-2 lg:col-span-1" : ""
                  }`,
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "font-oswald text-[0.6rem] uppercase tracking-[0.25em] text-cream/45",
                      children: e.l,
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "mt-1.5 font-anton text-xl uppercase leading-none text-cream",
                      style: { textShadow: "0 0 20px rgba(233,190,87,0.2)" },
                      children: e.v,
                    }),
                  ],
                },
                e.l
              )
            ),
          }),
          (0, r.jsxs)(rX.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-60px" },
            transition: { duration: 0.55 },
            className:
              "mt-5 flex flex-col gap-4 rounded-2xl border border-dashed border-cream/15 bg-cream/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6",
            children: [
              (0, r.jsxs)("div", {
                className: "min-w-0",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "font-oswald text-[0.6rem] uppercase tracking-[0.25em] text-cream/45",
                    children: "Contract Address · BEP-20",
                  }),
                  (0, r.jsx)("code", {
                    className:
                      "mt-1.5 block truncate font-mont text-sm text-gold-100",
                    children: g,
                  }),
                ],
              }),
              (0, r.jsx)("button", {
                onClick: i,
                className:
                  "flex-none rounded-xl bg-gradient-to-b from-gold-200 to-gold-600 px-6 py-3 font-oswald text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-coin transition-transform hover:-translate-y-0.5",
                children: e ? "Copied ✓" : "Copy Address",
              }),
            ],
          }),
        ],
      });
    }
    function af(e) {
      return (0, r.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...e,
        children: [
          (0, r.jsx)("path", { d: "M7 17 17 7" }),
          (0, r.jsx)("path", { d: "M7 7h10v10" }),
        ],
      });
    }
    let ag = [
      {
        n: "01",
        tag: "Kick-off",
        h: "Get a Wallet",
        p: "Install MetaMask or Trust Wallet.",
      },
      {
        n: "02",
        tag: "30'",
        h: "Fund with ETH",
        p: "Buy ETH on your preferred exchange (Binance, etc.). Withdraw to your wallet EVM address.",
      },
      {
        n: "03",
        tag: "60'",
        h: "Go to Uniswap",
        p: "Open Uniswap > Swap. Select ETH > $WORLDCUP. Paste the contract: 0xcomingsoon",
      },
      {
        n: "04",
        tag: "Full-time",
        h: "Swap",
        p: "Set slippage (usually 0–2%; adjust only if needed). Confirm the transaction. You’re in. Welcome to the terrace.",
      },
    ];
    function ax({ s: e }) {
      return (0, r.jsxs)(rX.div, {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0, margin: "-60px" },
        transition: { duration: 0.55 },
        className:
          "group relative rounded-2xl border border-gold-400/15 bg-ink-800/80 p-7 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold-300/40 hover:bg-ink-800/90 sm:p-8",
        children: [
          (0, r.jsxs)("div", {
            className: "flex items-start justify-between gap-4",
            children: [
              (0, r.jsxs)("span", {
                className:
                  "font-oswald text-[0.65rem] uppercase tracking-[0.28em] text-gold-300",
                children: ["Step ", e.n, " · ", e.tag],
              }),
              (0, r.jsx)("span", {
                className:
                  "flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold-400/30 text-gold-200 transition-all group-hover:border-gold-300/60 group-hover:bg-gold-500/15",
                children: (0, r.jsx)(af, { className: "h-4 w-4" }),
              }),
            ],
          }),
          (0, r.jsx)("h4", {
            className:
              "mt-5 font-anton text-[1.7rem] uppercase leading-[1.05] tracking-wide text-cream",
            children: e.h,
          }),
          (0, r.jsx)("p", {
            className:
              "mt-2.5 font-mont text-[0.92rem] leading-relaxed text-cream/60",
            children: e.p,
          }),
        ],
      });
    }
    function ay() {
      return (0, r.jsxs)(ae, {
        id: "how-to-buy",
        bgImage: "/buy.png",
        children: [
          (0, r.jsxs)(rX.div, {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.6 },
            className: "text-center",
            children: [
              (0, r.jsxs)("h2", {
                className:
                  "mx-auto max-w-[16ch] text-balance font-anton uppercase leading-[1.02] tracking-[0.01em] text-cream text-[clamp(2.8rem,7vw,6rem)]",
                children: [
                  "Four touches ",
                  (0, r.jsx)("span", {
                    className: "text-gold-300",
                    children: "to score.",
                  }),
                ],
              }),
              (0, r.jsx)("p", {
                className:
                  "mx-auto mt-7 max-w-[52ch] font-mont text-[1.05rem] leading-relaxed text-cream/75",
                children:
                  "From kick-off to celebration. If you've used ETH Chain before, skip to step three and start the chant.",
              }),
            ],
          }),
          (0, r.jsxs)("div", {
            className: "relative mt-14 lg:mt-20",
            children: [
              (0, r.jsx)("div", {
                className:
                  "pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent lg:block",
              }),
              ag.map((e, t) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className: `relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 ${
                      t > 0 ? "mt-6 lg:mt-20" : ""
                    }`,
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "pointer-events-none absolute left-1/2 top-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300 shadow-[0_0_18px_rgba(233,190,87,0.5)] ring-4 ring-gold-400/15 lg:block",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          t % 2 == 0 ? "lg:col-start-1" : "lg:col-start-2",
                        children: (0, r.jsx)(ax, { s: e }),
                      }),
                    ],
                  },
                  e.n
                )
              ),
            ],
          }),
          (0, r.jsxs)("div", {
            className:
              "mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row",
            children: [
              (0, r.jsx)(r5, { className: "min-w-[240px] px-9 py-4 text-sm" }),
              (0, r.jsx)("a", {
                href: x,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex min-w-[240px] items-center justify-center rounded-full border border-gold-400/40 px-9 py-4 font-oswald text-sm font-semibold uppercase tracking-[0.18em] text-gold-100 transition-colors hover:bg-gold-400/10",
                children: "Buy",
              }),
            ],
          }),
        ],
      });
    }
    function av(e) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: (0, r.jsx)("path", {
          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
        }),
      });
    }
    function aw(e) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...e,
        children: (0, r.jsx)("path", {
          d: "M21.94 4.62 18.6 20.36c-.25 1.11-.91 1.39-1.85.86l-5.1-3.76-2.46 2.37c-.27.27-.5.5-1.03.5l.37-5.2 9.46-8.55c.41-.37-.09-.57-.64-.2L5.5 13.13l-5.03-1.57C-.62 11.23-.64 10.47.84 9.9l20.3-7.82c.91-.34 1.71.2 1.4 2.54Z",
        }),
      });
    }
    let ab = [
      {
        name: "X / Twitter",
        desc: "Daily highlights and the loudest matchday banter on the timeline.",
        handle: "@wcup_bnb",
        href: y,
        Icon: av,
      },
      {
        name: "Telegram",
        desc: "The main group chat. Where the chants are written in real time.",
        handle: "@wcup_bnb",
        href: v,
        Icon: aw,
      },
    ];
    function aj() {
      return (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsxs)(ae, {
            id: "community",
            children: [
              (0, r.jsxs)(rX.div, {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-80px" },
                transition: { duration: 0.6 },
                children: [
                  (0, r.jsxs)("h2", {
                    className:
                      "max-w-[16ch] text-balance font-anton uppercase leading-[1.02] tracking-[0.01em] text-cream text-[clamp(2.8rem,7vw,6rem)]",
                    children: [
                      "Join the ",
                      (0, r.jsx)("span", {
                        className: "text-gold-300",
                        children: "terrace.",
                      }),
                    ],
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "mt-7 max-w-[58ch] font-mont text-[1.05rem] leading-relaxed text-cream/75",
                    children:
                      "No sign-ups. No gatekeepers. Hop into the channel that fits your matchday vibe and bring the noise.",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2",
                children: ab.map((e, t) =>
                  (0, r.jsxs)(
                    rX.a,
                    {
                      href: e.href,
                      target: "_blank",
                      rel: "noreferrer",
                      initial: { opacity: 0, y: 24 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, margin: "-60px" },
                      transition: { duration: 0.5, delay: 0.1 * t },
                      className:
                        "group flex overflow-hidden rounded-2xl border border-gold-400/20 bg-ink-800 transition-all hover:-translate-y-1 hover:border-gold-300/50",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex w-24 flex-none flex-col items-center justify-center gap-2 border-r-2 border-dashed border-ink/50 bg-gradient-to-b from-gold-200 to-gold-600 text-ink",
                          children: [
                            (0, r.jsx)(e.Icon, { className: "h-7 w-7" }),
                            (0, r.jsx)("span", {
                              className:
                                "font-oswald text-[0.5rem] font-semibold uppercase tracking-[0.22em]",
                              children: "Pass",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex-1 p-6 sm:p-7",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "font-oswald text-[0.6rem] uppercase tracking-[0.28em] text-cream/40",
                              children: ["Matchday Pass · No. 0", t + 1],
                            }),
                            (0, r.jsx)("h5", {
                              className:
                                "mt-1.5 font-anton text-[1.6rem] uppercase leading-none tracking-wide text-cream",
                              children: e.name,
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "mt-2 font-mont text-sm leading-relaxed text-cream/60",
                              children: e.desc,
                            }),
                            (0, r.jsx)("span", {
                              className:
                                "mt-3 inline-block font-oswald text-xs tracking-wide text-gold-300 transition-colors group-hover:text-gold-200",
                              children: e.handle,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.name
                  )
                ),
              }),
              (0, r.jsx)(rX.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-60px" },
                transition: { duration: 0.55 },
                className:
                  "mt-8 overflow-hidden rounded-2xl border border-gold-400/25 px-8 py-9 sm:px-11",
                style: {
                  background:
                    "linear-gradient(90deg, rgba(244,236,220,.08), rgba(244,236,220,.03))",
                },
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left",
                  children: [
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "font-oswald text-[0.6rem] uppercase tracking-[0.3em] text-gold-300",
                          children: "Final whistle",
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "mt-1.5 font-anton text-[1.7rem] uppercase tracking-wide text-cream sm:text-[2.1rem]",
                          children: [
                            "Ready to ",
                            (0, r.jsx)("span", {
                              className: "text-gold-300",
                              children: "lift the cup?",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("a", {
                      href: x,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "min-w-[150px] flex-none rounded-full bg-gradient-to-b from-gold-200 to-gold-600 px-8 py-3.5 text-center font-oswald text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-coin transition-transform hover:scale-[1.05]",
                      children: "Buy",
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)(rX.div, {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-60px" },
                transition: { duration: 0.7 },
                className:
                  "relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream/10 sm:aspect-[16/9]",
                children: [
                  (0, r.jsx)(m.default, {
                    src: "/join.png",
                    alt: "Messi, Ronaldo and Neymar at the World Cup",
                    fill: !0,
                    sizes: "(max-width:1300px) 100vw, 1300px",
                    className: "object-cover",
                  }),
                  (0, r.jsx)("div", {
                    className: "pointer-events-none absolute inset-0",
                    style: {
                      background:
                        "linear-gradient(to top, rgba(10,10,11,0.5) 0%, transparent 35%)",
                    },
                  }),
                ],
              }),
            ],
          }),
          (0, r.jsx)("footer", {
            className: "mt-4 px-5 text-cream/45 sm:px-8 lg:px-14",
            children: (0, r.jsxs)("div", {
              className:
                "mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-8 border-t border-cream/10 py-8",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex items-center gap-3.5 font-oswald text-xs tracking-wide",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "relative h-9 w-9 overflow-hidden rounded-full",
                      children: (0, r.jsx)(m.default, {
                        src: "/logo.png",
                        alt: "",
                        fill: !0,
                        sizes: "36px",
                        className: "object-cover",
                      }),
                    }),
                    "© 2026 · ",
                    f,
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, r.jsx)("a", {
                      href: v,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Telegram",
                      className:
                        "flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-ink-700/40 text-gold-100 transition-all hover:scale-[1.06] hover:border-gold-300/60 hover:bg-gold-500/15",
                      children: (0, r.jsx)(aw, { className: "h-5 w-5" }),
                    }),
                    (0, r.jsx)("a", {
                      href: y,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "X",
                      className:
                        "flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-ink-700/40 text-gold-100 transition-all hover:scale-[1.06] hover:border-gold-300/60 hover:bg-gold-500/15",
                      children: (0, r.jsx)(av, {
                        className: "h-[18px] w-[18px]",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        function () {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(a.default, {
                children: [
                  (0, r.jsx)("title", {
                    children: "$WORLDCUP — The World United By Football",
                  }),
                  (0, r.jsx)("link", { rel: "icon", href: "/logo.png" }),
                ],
              }),
              (0, r.jsxs)("main", {
                className: `${l.variable} ${c.variable} ${u.variable} relative min-h-screen text-cream overflow-x-clip`,
                children: [
                  (0, r.jsx)(r8, {}),
                  (0, r.jsx)(r9, {}),
                  (0, r.jsx)(aa, {}),
                  (0, r.jsx)(ah, {}),
                  (0, r.jsx)(ad, {}),
                  (0, r.jsx)(am, {}),
                  (0, r.jsx)(ay, {}),
                  (0, r.jsx)(aj, {}),
                ],
              }),
            ],
          });
        },
      ],
      10477
    );
  },
  21899,
  (e, t, i) => {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/", () => e.r(10477)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push(["/"]);
        });
  },
]);
