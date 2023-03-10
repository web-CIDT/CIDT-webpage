(function () {
    var t,
      e,
      n,
      r,
      i,
      o,
      s,
      a,
      l,
      u,
      f,
      h,
      c,
      p,
      m,
      d,
      g,
      y,
      v,
      b,
      w,
      x,
      M,
      k,
      S,
      T,
      C,
      F,
      H,
      R,
      q,
      X,
      Y,
      j,
      z,
      I,
      A,
      G,
      V,
      Z,
      E,
      O,
      L,
      D,
      P,
      W,
      N,
      $,
      B,
      U,
      K,
      J,
      Q,
      _,
      te,
      ee,
      ne = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
    (H = function () {
      return "visible" === document.visibilityState || null != T.tests;
    }),
      (j = (function () {
        var t;
        return (
          (t = []),
          "undefined" != typeof document &&
            null !== document &&
            document.addEventListener("visibilitychange", function () {
              var e, n, r, i;
              for (i = [], n = 0, r = t.length; r > n; n++)
                (e = t[n]), i.push(e(H()));
              return i;
            }),
          function (e) {
            return t.push(e);
          }
        );
      })()),
      (x = function (t) {
        var e, n, r;
        n = {};
        for (e in t) (r = t[e]), (n[e] = r);
        return n;
      }),
      (b = function (t) {
        var e;
        return (
          (e = {}),
          function () {
            var n, r, i, o, s;
            for (r = "", o = 0, s = arguments.length; s > o; o++)
              (n = arguments[o]), (r += n.toString() + ",");
            return (i = e[r]), i || (e[r] = i = t.apply(this, arguments)), i;
          }
        );
      }),
      (Y = function (t) {
        return function (e) {
          var n, r, i;
          return e instanceof Array ||
            e instanceof NodeList ||
            e instanceof HTMLCollection
            ? (i = function () {
                var i, o, s;
                for (
                  s = [], r = i = 0, o = e.length;
                  o >= 0 ? o > i : i > o;
                  r = o >= 0 ? ++i : --i
                )
                  (n = Array.prototype.slice.call(arguments, 1)),
                    n.splice(0, 0, e[r]),
                    s.push(t.apply(this, n));
                return s;
              }.apply(this, arguments))
            : t.apply(this, arguments);
        };
      }),
      (d = function (t, e) {
        var n, r, i;
        i = [];
        for (n in e) (r = e[n]), i.push(null != t[n] ? t[n] : (t[n] = r));
        return i;
      }),
      (g = function (t, e) {
        var n, r, i;
        if (null != t.style) return y(t, e);
        i = [];
        for (n in e) (r = e[n]), i.push((t[n] = r.format()));
        return i;
      }),
      (y = function (t, e) {
        var n, r, i, o, s;
        (e = z(e)), (o = []), (n = R(t));
        for (r in e)
          (s = e[r]),
            _.contains(r)
              ? o.push([r, s])
              : ((s = null != s.format ? s.format() : "" + s + ee(r, s)),
                n && B.contains(r) ? t.setAttribute(r, s) : (t.style[A(r)] = s));
        return o.length > 0
          ? n
            ? ((i = new l()),
              i.applyProperties(o),
              t.setAttribute("transform", i.decompose().format()))
            : ((s = o
                .map(function (t) {
                  return te(t[0], t[1]);
                })
                .join(" ")),
              (t.style[A("transform")] = s))
          : void 0;
      }),
      (R = function (t) {
        var e, n;
        return "undefined" != typeof SVGElement &&
          null !== SVGElement &&
          "undefined" != typeof SVGSVGElement &&
          null !== SVGSVGElement
          ? t instanceof SVGElement && !(t instanceof SVGSVGElement)
          : null !=
            (e =
              null != (n = T.tests) && "function" == typeof n.isSVG
                ? n.isSVG(t)
                : void 0)
          ? e
          : !1;
      }),
      (Z = function (t, e) {
        var n;
        return (n = Math.pow(10, e)), Math.round(t * n) / n;
      }),
      (u = (function () {
        function t(t) {
          var e, n, r;
          for (this.obj = {}, n = 0, r = t.length; r > n; n++)
            (e = t[n]), (this.obj[e] = 1);
        }
        return (
          (t.prototype.contains = function (t) {
            return 1 === this.obj[t];
          }),
          t
        );
      })()),
      (Q = function (t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }),
      (G = new u(
        "marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(
          ","
        )
      )),
      (S = new u(
        "rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")
      )),
      (_ = new u(
        "translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(
          ","
        )
      )),
      (B = new u(
        "accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(
          ","
        )
      )),
      (ee = function (t, e) {
        return "number" != typeof e
          ? ""
          : G.contains(t)
          ? "px"
          : S.contains(t)
          ? "deg"
          : "";
      }),
      (te = function (t, e) {
        var n, r;
        return (
          (n = ("" + e).match(/^([0-9.-]*)([^0-9]*)$/)),
          null != n ? ((e = n[1]), (r = n[2])) : (e = parseFloat(e)),
          (e = Z(parseFloat(e), 10)),
          (null == r || "" === r) && (r = ee(t, e)),
          "" + t + "(" + e + r + ")"
        );
      }),
      (z = function (t) {
        var e, n, r, i, o, s, a, l;
        r = {};
        for (i in t)
          if (((o = t[i]), _.contains(i)))
            if (
              ((n = i.match(
                /(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/
              )),
              n && n[2].length > 0)
            )
              r[i] = o;
            else
              for (l = ["X", "Y", "Z"], s = 0, a = l.length; a > s; s++)
                (e = l[s]), (r[n[1] + e] = o);
          else r[i] = o;
        return r;
      }),
      (k = function (t) {
        var e;
        return (e = "opacity" === t ? 1 : 0), "" + e + ee(t, e);
      }),
      (C = function (t, e) {
        var n, r, i, o, s, u, f, h, c, p, m;
        if (((o = {}), (n = R(t)), null != t.style))
          for (
            s = window.getComputedStyle(t, null), f = 0, c = e.length;
            c > f;
            f++
          )
            (r = e[f]),
              _.contains(r)
                ? null == o.transform &&
                  ((i = n
                    ? new l(
                        null != (m = t.transform.baseVal.consolidate())
                          ? m.matrix
                          : void 0
                      )
                    : a.fromTransform(s[A("transform")])),
                  (o.transform = i.decompose()))
                : ((u = s[r]),
                  null == u && B.contains(r) && (u = t.getAttribute(r)),
                  ("" === u || null == u) && (u = k(r)),
                  (o[r] = M(u)));
        else for (h = 0, p = e.length; p > h; h++) (r = e[h]), (o[r] = M(t[r]));
        return o;
      }),
      (M = function (t) {
        var e, n, a, l, u;
        for (a = [i, r, o, s], l = 0, u = a.length; u > l; l++)
          if (((n = a[l]), (e = n.create(t)), null != e)) return e;
        return null;
      }),
      (o = (function () {
        function t(t) {
          (this.format = ne(this.format, this)),
            (this.interpolate = ne(this.interpolate, this)),
            (this.obj = t);
        }
        return (
          (t.prototype.interpolate = function (e, n) {
            var r, i, o, s, a;
            (s = this.obj), (r = e.obj), (o = {});
            for (i in s)
              (a = s[i]),
                (o[i] = null != a.interpolate ? a.interpolate(r[i], n) : a);
            return new t(o);
          }),
          (t.prototype.format = function () {
            return this.obj;
          }),
          (t.create = function (e) {
            var n, r, i;
            if (e instanceof Object) {
              r = {};
              for (n in e) (i = e[n]), (r[n] = M(i));
              return new t(r);
            }
            return null;
          }),
          t
        );
      })()),
      (s = (function () {
        function t(t, e, n) {
          (this.prefix = e),
            (this.suffix = n),
            (this.format = ne(this.format, this)),
            (this.interpolate = ne(this.interpolate, this)),
            (this.value = parseFloat(t));
        }
        return (
          (t.prototype.interpolate = function (e, n) {
            var r, i;
            return (
              (i = this.value),
              (r = e.value),
              new t(
                (r - i) * n + i,
                e.prefix || this.prefix,
                e.suffix || this.suffix
              )
            );
          }),
          (t.prototype.format = function () {
            return null == this.prefix && null == this.suffix
              ? Z(this.value, 5)
              : this.prefix + Z(this.value, 5) + this.suffix;
          }),
          (t.create = function (e) {
            var n;
            return "string" != typeof e
              ? new t(e)
              : ((n = ("" + e).match("([^0-9.+-]*)([0-9.+-]+)([^0-9.+-]*)")),
                null != n ? new t(n[2], n[1], n[3]) : null);
          }),
          t
        );
      })()),
      (r = (function () {
        function t(t, e) {
          (this.values = t),
            (this.sep = e),
            (this.format = ne(this.format, this)),
            (this.interpolate = ne(this.interpolate, this));
        }
        return (
          (t.prototype.interpolate = function (e, n) {
            var r, i, o, s, a, l;
            for (
              s = this.values,
                r = e.values,
                o = [],
                i = a = 0,
                l = Math.min(s.length, r.length);
              l >= 0 ? l > a : a > l;
              i = l >= 0 ? ++a : --a
            )
              o.push(null != s[i].interpolate ? s[i].interpolate(r[i], n) : s[i]);
            return new t(o, this.sep);
          }),
          (t.prototype.format = function () {
            var t;
            return (
              (t = this.values.map(function (t) {
                return null != t.format ? t.format() : t;
              })),
              null != this.sep ? t.join(this.sep) : t
            );
          }),
          (t.createFromArray = function (e, n) {
            var r;
            return (
              (r = e.map(function (t) {
                return M(t) || t;
              })),
              (r = r.filter(function (t) {
                return null != t;
              })),
              new t(r, n)
            );
          }),
          (t.create = function (e) {
            var n, r, i, o, s;
            if (e instanceof Array) return t.createFromArray(e, null);
            if ("string" == typeof e) {
              for (
                i = [" ", ",", "|", ";", "/", ":"], o = 0, s = i.length;
                s > o;
                o++
              )
                if (((r = i[o]), (n = e.split(r)), n.length > 1))
                  return t.createFromArray(n, r);
              return null;
            }
          }),
          t
        );
      })()),
      (t = (function () {
        function t(t, e) {
          (this.rgb = null != t ? t : {}),
            (this.format = e),
            (this.toRgba = ne(this.toRgba, this)),
            (this.toRgb = ne(this.toRgb, this)),
            (this.toHex = ne(this.toHex, this));
        }
        return (
          (t.fromHex = function (e) {
            var n, r;
            return (
              (n = e.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i)),
              null != n && (e = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]),
              (r = e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)),
              null != r
                ? new t(
                    {
                      r: parseInt(r[1], 16),
                      g: parseInt(r[2], 16),
                      b: parseInt(r[3], 16),
                      a: 1
                    },
                    "hex"
                  )
                : null
            );
          }),
          (t.fromRgb = function (e) {
            var n, r;
            return (
              (n = e.match(
                /^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/
              )),
              null != n
                ? new t(
                    {
                      r: parseFloat(n[1]),
                      g: parseFloat(n[2]),
                      b: parseFloat(n[3]),
                      a: parseFloat(null != (r = n[4]) ? r : 1)
                    },
                    null != n[4] ? "rgba" : "rgb"
                  )
                : null
            );
          }),
          (t.componentToHex = function (t) {
            var e;
            return (e = t.toString(16)), 1 === e.length ? "0" + e : e;
          }),
          (t.prototype.toHex = function () {
            return (
              "#" +
              t.componentToHex(this.rgb.r) +
              t.componentToHex(this.rgb.g) +
              t.componentToHex(this.rgb.b)
            );
          }),
          (t.prototype.toRgb = function () {
            return (
              "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")"
            );
          }),
          (t.prototype.toRgba = function () {
            return (
              "rgba(" +
              this.rgb.r +
              ", " +
              this.rgb.g +
              ", " +
              this.rgb.b +
              ", " +
              this.rgb.a +
              ")"
            );
          }),
          t
        );
      })()),
      (i = (function () {
        function e(t) {
          (this.color = t),
            (this.format = ne(this.format, this)),
            (this.interpolate = ne(this.interpolate, this));
        }
        return (
          (e.prototype.interpolate = function (n, r) {
            var i, o, s, a, l, u, f, h;
            for (
              a = this.color,
                i = n.color,
                s = {},
                h = ["r", "g", "b"],
                u = 0,
                f = h.length;
              f > u;
              u++
            )
              (o = h[u]),
                (l = Math.round((i.rgb[o] - a.rgb[o]) * r + a.rgb[o])),
                (s[o] = Math.min(255, Math.max(0, l)));
            return (
              (o = "a"),
              (l = Z((i.rgb[o] - a.rgb[o]) * r + a.rgb[o], 5)),
              (s[o] = Math.min(1, Math.max(0, l))),
              new e(new t(s, i.format))
            );
          }),
          (e.prototype.format = function () {
            return "hex" === this.color.format
              ? this.color.toHex()
              : "rgb" === this.color.format
              ? this.color.toRgb()
              : "rgba" === this.color.format
              ? this.color.toRgba()
              : void 0;
          }),
          (e.create = function (n) {
            var r;
            if ("string" == typeof n)
              return (
                (r = t.fromHex(n) || t.fromRgb(n)), null != r ? new e(r) : null
              );
          }),
          e
        );
      })()),
      (n = (function () {
        function t(t) {
          (this.props = t),
            (this.applyRotateCenter = ne(this.applyRotateCenter, this)),
            (this.format = ne(this.format, this)),
            (this.interpolate = ne(this.interpolate, this));
        }
        return (
          (t.prototype.interpolate = function (e, n) {
            var r, i, o, s, a, l, u, f, h, c, p, m;
            for (
              o = {}, c = ["translate", "scale", "rotate"], s = 0, f = c.length;
              f > s;
              s++
            )
              for (
                i = c[s], o[i] = [], r = a = 0, p = this.props[i].length;
                p >= 0 ? p > a : a > p;
                r = p >= 0 ? ++a : --a
              )
                o[i][r] =
                  (e.props[i][r] - this.props[i][r]) * n + this.props[i][r];
            for (r = l = 1; 2 >= l; r = ++l) o.rotate[r] = e.props.rotate[r];
            for (m = ["skew"], u = 0, h = m.length; h > u; u++)
              (i = m[u]),
                (o[i] = (e.props[i] - this.props[i]) * n + this.props[i]);
            return new t(o);
          }),
          (t.prototype.format = function () {
            return (
              "translate(" +
              this.props.translate.join(",") +
              ") rotate(" +
              this.props.rotate.join(",") +
              ") skewX(" +
              this.props.skew +
              ") scale(" +
              this.props.scale.join(",") +
              ")"
            );
          }),
          (t.prototype.applyRotateCenter = function (t) {
            var e, n, r, i, o, s;
            for (
              n = v.createSVGMatrix(),
                n = n.translate(t[0], t[1]),
                n = n.rotate(this.props.rotate[0]),
                n = n.translate(-t[0], -t[1]),
                r = new l(n),
                i = r.decompose().props.translate,
                s = [],
                e = o = 0;
              1 >= o;
              e = ++o
            )
              s.push((this.props.translate[e] -= i[e]));
            return s;
          }),
          t
        );
      })()),
      (v =
        "undefined" != typeof document && null !== document
          ? document.createElementNS("http://www.w3.org/2000/svg", "svg")
          : void 0),
      (l = (function () {
        function t(t) {
          (this.m = t),
            (this.applyProperties = ne(this.applyProperties, this)),
            (this.decompose = ne(this.decompose, this)),
            this.m || (this.m = v.createSVGMatrix());
        }
        return (
          (t.prototype.decompose = function () {
            var t, e, r, i, o;
            return (
              (i = new f([this.m.a, this.m.b])),
              (o = new f([this.m.c, this.m.d])),
              (t = i.length()),
              (r = i.dot(o)),
              (i = i.normalize()),
              (e = o.combine(i, 1, -r).length()),
              new n({
                translate: [this.m.e, this.m.f],
                rotate: [
                  (180 * Math.atan2(this.m.b, this.m.a)) / Math.PI,
                  this.rotateCX,
                  this.rotateCY
                ],
                scale: [t, e],
                skew: ((r / e) * 180) / Math.PI
              })
            );
          }),
          (t.prototype.applyProperties = function (t) {
            var e, n, r, i, o, s, a, l;
            for (e = {}, o = 0, s = t.length; s > o; o++)
              (r = t[o]), (e[r[0]] = r[1]);
            for (n in e)
              (i = e[n]),
                "translateX" === n
                  ? (this.m = this.m.translate(i, 0))
                  : "translateY" === n
                  ? (this.m = this.m.translate(0, i))
                  : "scaleX" === n
                  ? (this.m = this.m.scale(i, 1))
                  : "scaleY" === n
                  ? (this.m = this.m.scale(1, i))
                  : "rotateZ" === n
                  ? (this.m = this.m.rotate(i))
                  : "skewX" === n
                  ? (this.m = this.m.skewX(i))
                  : "skewY" === n && (this.m = this.m.skewY(i));
            return (
              (this.rotateCX = null != (a = e.rotateCX) ? a : 0),
              (this.rotateCY = null != (l = e.rotateCY) ? l : 0)
            );
          }),
          t
        );
      })()),
      (f = (function () {
        function t(t) {
          (this.els = t),
            (this.combine = ne(this.combine, this)),
            (this.normalize = ne(this.normalize, this)),
            (this.length = ne(this.length, this)),
            (this.cross = ne(this.cross, this)),
            (this.dot = ne(this.dot, this)),
            (this.e = ne(this.e, this));
        }
        return (
          (t.prototype.e = function (t) {
            return 1 > t || t > this.els.length ? null : this.els[t - 1];
          }),
          (t.prototype.dot = function (t) {
            var e, n, r;
            if (
              ((e = t.els || t), (r = 0), (n = this.els.length), n !== e.length)
            )
              return null;
            for (n += 1; --n; ) r += this.els[n - 1] * e[n - 1];
            return r;
          }),
          (t.prototype.cross = function (e) {
            var n, r;
            return (
              (r = e.els || e),
              3 !== this.els.length || 3 !== r.length
                ? null
                : ((n = this.els),
                  new t([
                    n[1] * r[2] - n[2] * r[1],
                    n[2] * r[0] - n[0] * r[2],
                    n[0] * r[1] - n[1] * r[0]
                  ]))
            );
          }),
          (t.prototype.length = function () {
            var t, e, n, r, i;
            for (t = 0, i = this.els, n = 0, r = i.length; r > n; n++)
              (e = i[n]), (t += Math.pow(e, 2));
            return Math.sqrt(t);
          }),
          (t.prototype.normalize = function () {
            var e, n, r, i, o;
            (r = this.length()), (i = []), (o = this.els);
            for (n in o) (e = o[n]), (i[n] = e / r);
            return new t(i);
          }),
          (t.prototype.combine = function (e, n, r) {
            var i, o, s, a;
            for (
              o = [], i = s = 0, a = this.els.length;
              a >= 0 ? a > s : s > a;
              i = a >= 0 ? ++s : --s
            )
              o[i] = n * this.els[i] + r * e.els[i];
            return new t(o);
          }),
          t
        );
      })()),
      (e = (function () {
        function t() {
          (this.toMatrix = ne(this.toMatrix, this)),
            (this.format = ne(this.format, this)),
            (this.interpolate = ne(this.interpolate, this));
        }
        return (
          (t.prototype.interpolate = function (e, n, r) {
            var i, o, s, a, l, u, f, h, c, p, m, d, g, y, v, b, w, x;
            for (
              null == r && (r = null),
                s = this,
                o = new t(),
                w = ["translate", "scale", "skew", "perspective"],
                d = 0,
                b = w.length;
              b > d;
              d++
            )
              for (
                f = w[d], o[f] = [], a = g = 0, x = s[f].length - 1;
                x >= 0 ? x >= g : g >= x;
                a = x >= 0 ? ++g : --g
              )
                o[f][a] =
                  null == r ||
                  r.indexOf(f) > -1 ||
                  r.indexOf("" + f + ["x", "y", "z"][a]) > -1
                    ? (e[f][a] - s[f][a]) * n + s[f][a]
                    : s[f][a];
            if (null == r || -1 !== r.indexOf("rotate")) {
              if (
                ((h = s.quaternion),
                (c = e.quaternion),
                (i = h[0] * c[0] + h[1] * c[1] + h[2] * c[2] + h[3] * c[3]),
                0 > i)
              ) {
                for (a = y = 0; 3 >= y; a = ++y) h[a] = -h[a];
                i = -i;
              }
              for (
                i + 1 > 0.05
                  ? 1 - i >= 0.05
                    ? ((m = Math.acos(i)),
                      (u = 1 / Math.sin(m)),
                      (p = Math.sin(m * (1 - n)) * u),
                      (l = Math.sin(m * n) * u))
                    : ((p = 1 - n), (l = n))
                  : ((c[0] = -h[1]),
                    (c[1] = h[0]),
                    (c[2] = -h[3]),
                    (c[3] = h[2]),
                    (p = Math.sin(piDouble * (0.5 - n))),
                    (l = Math.sin(piDouble * n))),
                  o.quaternion = [],
                  a = v = 0;
                3 >= v;
                a = ++v
              )
                o.quaternion[a] = h[a] * p + c[a] * l;
            } else o.quaternion = s.quaternion;
            return o;
          }),
          (t.prototype.format = function () {
            return this.toMatrix().toString();
          }),
          (t.prototype.toMatrix = function () {
            var t, e, n, r, i, o, s, l, u, f, h, c, p, m, d, g;
            for (t = this, i = a.I(4), e = p = 0; 3 >= p; e = ++p)
              i.els[e][3] = t.perspective[e];
            for (
              o = t.quaternion,
                f = o[0],
                h = o[1],
                c = o[2],
                u = o[3],
                s = t.skew,
                r = [
                  [1, 0],
                  [2, 0],
                  [2, 1]
                ],
                e = m = 2;
              m >= 0;
              e = --m
            )
              s[e] &&
                ((l = a.I(4)),
                (l.els[r[e][0]][r[e][1]] = s[e]),
                (i = i.multiply(l)));
            for (
              i = i.multiply(
                new a([
                  [
                    1 - 2 * (h * h + c * c),
                    2 * (f * h - c * u),
                    2 * (f * c + h * u),
                    0
                  ],
                  [
                    2 * (f * h + c * u),
                    1 - 2 * (f * f + c * c),
                    2 * (h * c - f * u),
                    0
                  ],
                  [
                    2 * (f * c - h * u),
                    2 * (h * c + f * u),
                    1 - 2 * (f * f + h * h),
                    0
                  ],
                  [0, 0, 0, 1]
                ])
              ),
                e = d = 0;
              2 >= d;
              e = ++d
            ) {
              for (n = g = 0; 2 >= g; n = ++g) i.els[e][n] *= t.scale[e];
              i.els[3][e] = t.translate[e];
            }
            return i;
          }),
          t
        );
      })()),
      (a = (function () {
        function t(t) {
          (this.els = t),
            (this.toString = ne(this.toString, this)),
            (this.decompose = ne(this.decompose, this)),
            (this.inverse = ne(this.inverse, this)),
            (this.augment = ne(this.augment, this)),
            (this.toRightTriangular = ne(this.toRightTriangular, this)),
            (this.transpose = ne(this.transpose, this)),
            (this.multiply = ne(this.multiply, this)),
            (this.dup = ne(this.dup, this)),
            (this.e = ne(this.e, this));
        }
        return (
          (t.prototype.e = function (t, e) {
            return 1 > t || t > this.els.length || 1 > e || e > this.els[0].length
              ? null
              : this.els[t - 1][e - 1];
          }),
          (t.prototype.dup = function () {
            return new t(this.els);
          }),
          (t.prototype.multiply = function (e) {
            var n, r, i, o, s, a, l, u, f, h, c, p, m;
            for (
              p = e.modulus ? !0 : !1,
                n = e.els || e,
                "undefined" == typeof n[0][0] && (n = new t(n).els),
                h = this.els.length,
                l = h,
                u = n[0].length,
                i = this.els[0].length,
                o = [],
                h += 1;
              --h;
  
            )
              for (s = l - h, o[s] = [], c = u, c += 1; --c; ) {
                for (a = u - c, m = 0, f = i, f += 1; --f; )
                  (r = i - f), (m += this.els[s][r] * n[r][a]);
                o[s][a] = m;
              }
            return (n = new t(o)), p ? n.col(1) : n;
          }),
          (t.prototype.transpose = function () {
            var e, n, r, i, o, s, a;
            for (
              a = this.els.length, e = this.els[0].length, n = [], o = e, o += 1;
              --o;
  
            )
              for (r = e - o, n[r] = [], s = a, s += 1; --s; )
                (i = a - s), (n[r][i] = this.els[i][r]);
            return new t(n);
          }),
          (t.prototype.toRightTriangular = function () {
            var t, e, n, r, i, o, s, a, l, u, f, h, c, p;
            for (
              t = this.dup(), a = this.els.length, i = a, o = this.els[0].length;
              --a;
  
            ) {
              if (((n = i - a), 0 === t.els[n][n]))
                for (
                  r = f = c = n + 1;
                  i >= c ? i > f : f > i;
                  r = i >= c ? ++f : --f
                )
                  if (0 !== t.els[r][n]) {
                    for (e = [], l = o, l += 1; --l; )
                      (u = o - l), e.push(t.els[n][u] + t.els[r][u]);
                    t.els[n] = e;
                    break;
                  }
              if (0 !== t.els[n][n])
                for (
                  r = h = p = n + 1;
                  i >= p ? i > h : h > i;
                  r = i >= p ? ++h : --h
                ) {
                  for (
                    s = t.els[r][n] / t.els[n][n], e = [], l = o, l += 1;
                    --l;
  
                  )
                    (u = o - l),
                      e.push(n >= u ? 0 : t.els[r][u] - t.els[n][u] * s);
                  t.els[r] = e;
                }
            }
            return t;
          }),
          (t.prototype.augment = function (e) {
            var n, r, i, o, s, a, l, u, f;
            if (
              ((n = e.els || e),
              "undefined" == typeof n[0][0] && (n = new t(n).els),
              (r = this.dup()),
              (i = r.els[0].length),
              (u = r.els.length),
              (a = u),
              (l = n[0].length),
              u !== n.length)
            )
              return null;
            for (u += 1; --u; )
              for (o = a - u, f = l, f += 1; --f; )
                (s = l - f), (r.els[o][i + s] = n[o][s]);
            return r;
          }),
          (t.prototype.inverse = function () {
            var e, n, r, i, o, s, a, l, u, f, h, c, p;
            for (
              f = this.els.length,
                a = f,
                e = this.augment(t.I(f)).toRightTriangular(),
                l = e.els[0].length,
                o = [],
                f += 1;
              --f;
  
            ) {
              for (
                i = f - 1, r = [], h = l, o[i] = [], n = e.els[i][i], h += 1;
                --h;
  
              )
                (c = l - h),
                  (u = e.els[i][c] / n),
                  r.push(u),
                  c >= a && o[i].push(u);
              for (
                e.els[i] = r, s = p = 0;
                i >= 0 ? i > p : p > i;
                s = i >= 0 ? ++p : --p
              ) {
                for (r = [], h = l, h += 1; --h; )
                  (c = l - h), r.push(e.els[s][c] - e.els[i][c] * e.els[s][i]);
                e.els[s] = r;
              }
            }
            return new t(o);
          }),
          (t.I = function (e) {
            var n, r, i, o, s;
            for (n = [], o = e, e += 1; --e; )
              for (r = o - e, n[r] = [], s = o, s += 1; --s; )
                (i = o - s), (n[r][i] = r === i ? 1 : 0);
            return new t(n);
          }),
          (t.prototype.decompose = function () {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              l,
              u,
              h,
              c,
              p,
              m,
              d,
              g,
              y,
              v,
              b,
              w,
              x,
              M,
              k,
              S,
              T,
              C,
              F,
              H,
              R,
              q,
              X,
              Y,
              j,
              z,
              I,
              A,
              G,
              V,
              Z;
            for (
              s = this, x = [], v = [], b = [], h = [], l = [], t = [], n = q = 0;
              3 >= q;
              n = ++q
            )
              for (t[n] = [], i = X = 0; 3 >= X; i = ++X) t[n][i] = s.els[n][i];
            if (0 === t[3][3]) return !1;
            for (n = Y = 0; 3 >= Y; n = ++Y)
              for (i = j = 0; 3 >= j; i = ++j) t[n][i] /= t[3][3];
            for (u = s.dup(), n = z = 0; 2 >= z; n = ++z) u.els[n][3] = 0;
            if (
              ((u.els[3][3] = 1), 0 !== t[0][3] || 0 !== t[1][3] || 0 !== t[2][3])
            ) {
              for (
                p = new f(t.slice(0, 4)[3]),
                  r = u.inverse(),
                  M = r.transpose(),
                  l = M.multiply(p).els,
                  n = I = 0;
                2 >= I;
                n = ++I
              )
                t[n][3] = 0;
              t[3][3] = 1;
            } else l = [0, 0, 0, 1];
            for (n = A = 0; 2 >= A; n = ++A) (x[n] = t[3][n]), (t[3][n] = 0);
            for (d = [], n = G = 0; 2 >= G; n = ++G)
              d[n] = new f(t[n].slice(0, 3));
            if (
              ((v[0] = d[0].length()),
              (d[0] = d[0].normalize()),
              (b[0] = d[0].dot(d[1])),
              (d[1] = d[1].combine(d[0], 1, -b[0])),
              (v[1] = d[1].length()),
              (d[1] = d[1].normalize()),
              (b[0] /= v[1]),
              (b[1] = d[0].dot(d[2])),
              (d[2] = d[2].combine(d[0], 1, -b[1])),
              (b[2] = d[1].dot(d[2])),
              (d[2] = d[2].combine(d[1], 1, -b[2])),
              (v[2] = d[2].length()),
              (d[2] = d[2].normalize()),
              (b[1] /= v[2]),
              (b[2] /= v[2]),
              (a = d[1].cross(d[2])),
              d[0].dot(a) < 0)
            )
              for (n = V = 0; 2 >= V; n = ++V)
                for (v[n] *= -1, i = Z = 0; 2 >= Z; i = ++Z) d[n].els[i] *= -1;
            (g = function (t, e) {
              return d[t].els[e];
            }),
              (m = []),
              (m[1] = Math.asin(-g(0, 2))),
              0 !== Math.cos(m[1])
                ? ((m[0] = Math.atan2(g(1, 2), g(2, 2))),
                  (m[2] = Math.atan2(g(0, 1), g(0, 0))))
                : ((m[0] = Math.atan2(-g(2, 0), g(1, 1))), (m[1] = 0)),
              (w = g(0, 0) + g(1, 1) + g(2, 2) + 1),
              w > 1e-4
                ? ((y = 0.5 / Math.sqrt(w)),
                  (C = 0.25 / y),
                  (F = (g(2, 1) - g(1, 2)) * y),
                  (H = (g(0, 2) - g(2, 0)) * y),
                  (R = (g(1, 0) - g(0, 1)) * y))
                : g(0, 0) > g(1, 1) && g(0, 0) > g(2, 2)
                ? ((y = 2 * Math.sqrt(1 + g(0, 0) - g(1, 1) - g(2, 2))),
                  (F = 0.25 * y),
                  (H = (g(0, 1) + g(1, 0)) / y),
                  (R = (g(0, 2) + g(2, 0)) / y),
                  (C = (g(2, 1) - g(1, 2)) / y))
                : g(1, 1) > g(2, 2)
                ? ((y = 2 * Math.sqrt(1 + g(1, 1) - g(0, 0) - g(2, 2))),
                  (F = (g(0, 1) + g(1, 0)) / y),
                  (H = 0.25 * y),
                  (R = (g(1, 2) + g(2, 1)) / y),
                  (C = (g(0, 2) - g(2, 0)) / y))
                : ((y = 2 * Math.sqrt(1 + g(2, 2) - g(0, 0) - g(1, 1))),
                  (F = (g(0, 2) + g(2, 0)) / y),
                  (H = (g(1, 2) + g(2, 1)) / y),
                  (R = 0.25 * y),
                  (C = (g(1, 0) - g(0, 1)) / y)),
              (h = [F, H, R, C]),
              (c = new e()),
              (c.translate = x),
              (c.scale = v),
              (c.skew = b),
              (c.quaternion = h),
              (c.perspective = l),
              (c.rotate = m);
            for (S in c) {
              k = c[S];
              for (o in k) (T = k[o]), isNaN(T) && (k[o] = 0);
            }
            return c;
          }),
          (t.prototype.toString = function () {
            var t, e, n, r, i;
            for (n = "matrix3d(", t = r = 0; 3 >= r; t = ++r)
              for (e = i = 0; 3 >= i; e = ++i)
                (n += Z(this.els[t][e], 10)), (3 !== t || 3 !== e) && (n += ",");
            return (n += ")");
          }),
          (t.matrixForTransform = b(function (t) {
            var e, n, r, i, o, s;
            return (
              (e = document.createElement("div")),
              (e.style.position = "absolute"),
              (e.style.visibility = "hidden"),
              (e.style[A("transform")] = t),
              document.body.appendChild(e),
              (r = window.getComputedStyle(e, null)),
              (n =
                null != (i = null != (o = r.transform) ? o : r[A("transform")])
                  ? i
                  : null != (s = T.tests)
                  ? s.matrixForTransform(t)
                  : void 0),
              document.body.removeChild(e),
              n
            );
          })),
          (t.fromTransform = function (e) {
            var n, r, i, o, s, a;
            for (
              o = null != e ? e.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0,
                o
                  ? ((n = o[1].split(",")),
                    (n = n.map(parseFloat)),
                    (r =
                      6 === n.length
                        ? [
                            n[0],
                            n[1],
                            0,
                            0,
                            n[2],
                            n[3],
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            n[4],
                            n[5],
                            0,
                            1
                          ]
                        : n))
                  : (r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
                s = [],
                i = a = 0;
              3 >= a;
              i = ++a
            )
              s.push(r.slice(4 * i, 4 * i + 4));
            return new t(s);
          }),
          t
        );
      })()),
      (I = b(function (t) {
        var e, n, r, i, o, s, a, l, u, f;
        if (void 0 !== document.body.style[t]) return "";
        for (i = t.split("-"), o = "", s = 0, l = i.length; l > s; s++)
          (r = i[s]), (o += r.substring(0, 1).toUpperCase() + r.substring(1));
        for (f = ["Webkit", "Moz", "ms"], a = 0, u = f.length; u > a; a++)
          if (((n = f[a]), (e = n + o), void 0 !== document.body.style[e]))
            return n;
        return "";
      })),
      (A = b(function (t) {
        var e;
        return (
          (e = I(t)),
          "Moz" === e
            ? "" + e + (t.substring(0, 1).toUpperCase() + t.substring(1))
            : "" !== e
            ? "-" + e.toLowerCase() + "-" + Q(t)
            : Q(t)
        );
      })),
      (V =
        "undefined" != typeof window && null !== window
          ? window.requestAnimationFrame
          : void 0),
      (p = []),
      (m = []),
      (P = !1),
      (W = 1),
      "undefined" != typeof window &&
        null !== window &&
        window.addEventListener("keyup", function (t) {
          return 68 === t.keyCode && t.shiftKey && t.ctrlKey
            ? T.toggleSlow()
            : void 0;
        }),
      null == V &&
        ((q = 0),
        (V = function (t) {
          var e, n, r;
          return (
            (e = Date.now()),
            (r = Math.max(0, 16 - (e - q))),
            (n = window.setTimeout(function () {
              return t(e + r);
            }, r)),
            (q = e + r),
            n
          );
        })),
      (O = !1),
      (E = !1),
      ($ = function () {
        return O ? void 0 : ((O = !0), V(L));
      }),
      (L = function (t) {
        var e, n, r, i;
        if (E) return void V(L);
        for (n = [], r = 0, i = p.length; i > r; r++)
          (e = p[r]), c(t, e) || n.push(e);
        return (
          (p = p.filter(function (t) {
            return -1 === n.indexOf(t);
          })),
          0 === p.length ? (O = !1) : V(L)
        );
      }),
      (c = function (t, e) {
        var n, r, i, o, s, a, l, u;
        if (
          (null == e.tStart && (e.tStart = t),
          (o = (t - e.tStart) / e.options.duration),
          (s = e.curve(o)),
          (r = {}),
          o >= 1)
        )
          r = e.curve.initialForce ? e.properties.start : e.properties.end;
        else {
          u = e.properties.start;
          for (n in u) (i = u[n]), (r[n] = F(i, e.properties.end[n], s));
        }
        return (
          g(e.el, r),
          "function" == typeof (a = e.options).change && a.change(e.el),
          o >= 1 &&
            "function" == typeof (l = e.options).complete &&
            l.complete(e.el),
          1 > o
        );
      }),
      (F = function (t, e, n) {
        return null != t && null != t.interpolate ? t.interpolate(e, n) : null;
      }),
      (N = function (t, e, n, r) {
        var i, o, u, f, h, c, d, g;
        if (
          (null != r &&
            (m = m.filter(function (t) {
              return t.id !== r;
            })),
          T.stop(t, { timeout: !1 }),
          !n.animated)
        )
          return (
            T.css(t, e),
            void ("function" == typeof n.complete && n.complete(this))
          );
        (e = z(e)), (h = C(t, Object.keys(e))), (i = {}), (c = []);
        for (u in e)
          (d = e[u]),
            _.contains(u)
              ? c.push([u, d])
              : ((i[u] = M(d)),
                i[u] instanceof s &&
                  null != t.style &&
                  ((i[u].prefix = ""),
                  null == (g = i[u]).suffix && (g.suffix = ee(u, 0))));
        return (
          c.length > 0 &&
            ((o = R(t)),
            o
              ? ((f = new l()), f.applyProperties(c))
              : ((d = c
                  .map(function (t) {
                    return te(t[0], t[1]);
                  })
                  .join(" ")),
                (f = a.fromTransform(a.matrixForTransform(d)))),
            (i.transform = f.decompose()),
            o &&
              h.transform.applyRotateCenter([
                i.transform.props.rotate[1],
                i.transform.props.rotate[2]
              ])),
          p.push({
            el: t,
            properties: { start: h, end: i },
            options: n,
            curve: n.type.call(n.type, n)
          }),
          $()
        );
      }),
      (J = []),
      (K = 0),
      (D = function (t) {
        return H()
          ? (t.realTimeoutId = setTimeout(function () {
              return t.fn(), w(t.id);
            }, t.delay))
          : void 0;
      }),
      (h = function (t, e) {
        var n;
        return (
          (K += 1),
          (n = { id: K, tStart: Date.now(), fn: t, delay: e, originalDelay: e }),
          D(n),
          J.push(n),
          K
        );
      }),
      (w = function (t) {
        return (J = J.filter(function (e) {
          return e.id === t && clearTimeout(e.realTimeoutId), e.id !== t;
        }));
      }),
      (X = function (t, e) {
        var n;
        return null != t
          ? ((n = t - e.tStart), e.originalDelay - n)
          : e.originalDelay;
      }),
      "undefined" != typeof window &&
        null !== window &&
        window.addEventListener("unload", function () {}),
      (U = null),
      j(function (t) {
        var e, n, r, i, o, s, a, l, u, f;
        if (((E = !t), t)) {
          if (O)
            for (n = Date.now() - U, o = 0, l = p.length; l > o; o++)
              (e = p[o]), null != e.tStart && (e.tStart += n);
          for (s = 0, u = J.length; u > s; s++)
            (r = J[s]), (r.delay = X(U, r)), D(r);
          return (U = null);
        }
        for (U = Date.now(), f = [], i = 0, a = J.length; a > i; i++)
          (r = J[i]), f.push(clearTimeout(r.realTimeoutId));
        return f;
      }),
      (T = {}),
      (T.linear = function () {
        return function (t) {
          return t;
        };
      }),
      (T.spring = function (t) {
        var e, n, r, i, o, s;
        return (
          null == t && (t = {}),
          d(t, arguments.callee.defaults),
          (i = Math.max(1, t.frequency / 20)),
          (o = Math.pow(20, t.friction / 100)),
          (s = t.anticipationSize / 1e3),
          (r = Math.max(0, s)),
          (e = function (e) {
            var n, r, i, o, a;
            return (
              (n = 0.8),
              (o = s / (1 - s)),
              (a = 0),
              (i = (o - n * a) / (o - a)),
              (r = (n - i) / o),
              (r * e * t.anticipationStrength) / 100 + i
            );
          }),
          (n = function (t) {
            return Math.pow(o / 10, -t) * (1 - t);
          }),
          function (t) {
            var r, o, a, l, u, f, h, c;
            return (
              (f = t / (1 - s) - s / (1 - s)),
              s > t
                ? ((c = s / (1 - s) - s / (1 - s)),
                  (h = 0 / (1 - s) - s / (1 - s)),
                  (u = Math.acos(1 / e(c))),
                  (a = (Math.acos(1 / e(h)) - u) / (i * -s)),
                  (r = e))
                : ((r = n), (u = 0), (a = 1)),
              (o = r(f)),
              (l = i * (t - s) * a + u),
              1 - o * Math.cos(l)
            );
          }
        );
      }),
      (T.bounce = function (t) {
        var e, n, r, i;
        return (
          null == t && (t = {}),
          d(t, arguments.callee.defaults),
          (r = Math.max(1, t.frequency / 20)),
          (i = Math.pow(20, t.friction / 100)),
          (e = function (t) {
            return Math.pow(i / 10, -t) * (1 - t);
          }),
          (n = function (t) {
            var n, i, o, s;
            return (
              (s = -1.57),
              (i = 1),
              (n = e(t)),
              (o = r * t * i + s),
              n * Math.cos(o)
            );
          }),
          (n.initialForce = !0),
          n
        );
      }),
      (T.gravity = function (t) {
        var e, n, r, i, o, s, a;
        return (
          null == t && (t = {}),
          d(t, arguments.callee.defaults),
          (n = Math.min(t.bounciness / 1250, 0.8)),
          (i = t.elasticity / 1e3),
          (a = 100),
          (r = []),
          (e = (function () {
            var r, i;
            for (
              r = Math.sqrt(2 / a),
                i = { a: -r, b: r, H: 1 },
                t.initialForce && ((i.a = 0), (i.b = 2 * i.b));
              i.H > 0.001;
  
            )
              (e = i.b - i.a), (i = { a: i.b, b: i.b + e * n, H: i.H * n * n });
            return i.b;
          })()),
          (s = function (n, r, i, o) {
            var s, a;
            return (
              (e = r - n),
              (a = (2 / e) * o - 1 - (2 * n) / e),
              (s = a * a * i - i + 1),
              t.initialForce && (s = 1 - s),
              s
            );
          }),
          (function () {
            var o, s, l, u;
            for (
              s = Math.sqrt(2 / (a * e * e)),
                l = { a: -s, b: s, H: 1 },
                t.initialForce && ((l.a = 0), (l.b = 2 * l.b)),
                r.push(l),
                o = e,
                u = [];
              l.b < 1 && l.H > 0.001;
  
            )
              (o = l.b - l.a),
                (l = { a: l.b, b: l.b + o * n, H: l.H * i }),
                u.push(r.push(l));
            return u;
          })(),
          (o = function (e) {
            var n, i, o;
            for (
              i = 0, n = r[i];
              !(e >= n.a && e <= n.b) && ((i += 1), (n = r[i]));
  
            );
            return (o = n ? s(n.a, n.b, n.H, e) : t.initialForce ? 0 : 1);
          }),
          (o.initialForce = t.initialForce),
          o
        );
      }),
      (T.forceWithGravity = function (t) {
        return (
          null == t && (t = {}),
          d(t, arguments.callee.defaults),
          (t.initialForce = !0),
          T.gravity(t)
        );
      }),
      (T.bezier = (function () {
        var t, e, n;
        return (
          (e = function (t, e, n, r, i) {
            return (
              Math.pow(1 - t, 3) * e +
              3 * Math.pow(1 - t, 2) * t * n +
              3 * (1 - t) * Math.pow(t, 2) * r +
              Math.pow(t, 3) * i
            );
          }),
          (t = function (t, n, r, i, o) {
            return { x: e(t, n.x, r.x, i.x, o.x), y: e(t, n.y, r.y, i.y, o.y) };
          }),
          (n = function (t, e, n) {
            var r, i, o, s, a, l, u, f, h, c;
            for (
              r = null, h = 0, c = e.length;
              c > h &&
              ((i = e[h]), t >= i(0).x && t <= i(1).x && (r = i), null === r);
              h++
            );
            if (!r) return n ? 0 : 1;
            for (
              f = 1e-4, s = 0, l = 1, a = (l + s) / 2, u = r(a).x, o = 0;
              Math.abs(t - u) > f && 100 > o;
  
            )
              t > u ? (s = a) : (l = a),
                (a = (l + s) / 2),
                (u = r(a).x),
                (o += 1);
            return r(a).y;
          }),
          function (e) {
            var r, i, o;
            return (
              null == e && (e = {}),
              (i = e.points),
              (o = !1),
              (r = (function () {
                var e, n, o;
                (r = []),
                  (o = function (e, n) {
                    var i;
                    return (
                      (i = function (r) {
                        return t(r, e, e.cp[e.cp.length - 1], n.cp[0], n);
                      }),
                      r.push(i)
                    );
                  });
                for (e in i) {
                  if (((n = parseInt(e)), n >= i.length - 1)) break;
                  o(i[n], i[n + 1]);
                }
                return r;
              })()),
              function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : n(t, r, o);
              }
            );
          }
        );
      })()),
      (T.easeInOut = function (t) {
        var e, n;
        return (
          null == t && (t = {}),
          (e = null != (n = t.friction) ? n : arguments.callee.defaults.friction),
          T.bezier({
            points: [
              { x: 0, y: 0, cp: [{ x: 0.92 - e / 1e3, y: 0 }] },
              { x: 1, y: 1, cp: [{ x: 0.08 + e / 1e3, y: 1 }] }
            ]
          })
        );
      }),
      (T.easeIn = function (t) {
        var e, n;
        return (
          null == t && (t = {}),
          (e = null != (n = t.friction) ? n : arguments.callee.defaults.friction),
          T.bezier({
            points: [
              { x: 0, y: 0, cp: [{ x: 0.92 - e / 1e3, y: 0 }] },
              { x: 1, y: 1, cp: [{ x: 1, y: 1 }] }
            ]
          })
        );
      }),
      (T.easeOut = function (t) {
        var e, n;
        return (
          null == t && (t = {}),
          (e = null != (n = t.friction) ? n : arguments.callee.defaults.friction),
          T.bezier({
            points: [
              { x: 0, y: 0, cp: [{ x: 0, y: 0 }] },
              { x: 1, y: 1, cp: [{ x: 0.08 + e / 1e3, y: 1 }] }
            ]
          })
        );
      }),
      (T.spring.defaults = {
        frequency: 300,
        friction: 200,
        anticipationSize: 0,
        anticipationStrength: 0
      }),
      (T.bounce.defaults = { frequency: 300, friction: 200 }),
      (T.forceWithGravity.defaults = T.gravity.defaults =
        { bounciness: 400, elasticity: 200 }),
      (T.easeInOut.defaults =
        T.easeIn.defaults =
        T.easeOut.defaults =
          { friction: 500 }),
      (T.css = Y(function (t, e) {
        return y(t, e, !0);
      })),
      (T.animate = Y(function (t, e, n) {
        var r;
        return (
          null == n && (n = {}),
          (n = x(n)),
          d(n, { type: T.easeInOut, duration: 1e3, delay: 0, animated: !0 }),
          (n.duration = Math.max(0, n.duration * W)),
          (n.delay = Math.max(0, n.delay)),
          0 === n.delay
            ? N(t, e, n)
            : ((r = T.setTimeout(function () {
                return N(t, e, n, r);
              }, n.delay)),
              m.push({ id: r, el: t }))
        );
      })),
      (T.stop = Y(function (t, e) {
        return (
          null == e && (e = {}),
          null == e.timeout && (e.timeout = !0),
          e.timeout &&
            (m = m.filter(function (n) {
              return n.el !== t || (null != e.filter && !e.filter(n))
                ? !1
                : (T.clearTimeout(n.id), !0);
            })),
          (p = p.filter(function (e) {
            return e.el !== t;
          }))
        );
      })),
      (T.setTimeout = function (t, e) {
        return h(t, e * W);
      }),
      (T.clearTimeout = function (t) {
        return w(t);
      }),
      (T.toggleSlow = function () {
        return (
          (P = !P),
          (W = P ? 3 : 1),
          "undefined" != typeof console &&
          null !== console &&
          "function" == typeof console.log
            ? console.log(
                "dynamics.js: slow animations " + (P ? "enabled" : "disabled")
              )
            : void 0
        );
      }),
      "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = T)
        : "function" == typeof define && define.amd
        ? define(T)
        : (window.dynamics = T);
  }.call(this));
  