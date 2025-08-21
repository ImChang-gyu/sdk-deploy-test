(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function f2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gm = { exports: {} },
  lu = {},
  vm = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qo = Symbol.for("react.element"),
  d2 = Symbol.for("react.portal"),
  p2 = Symbol.for("react.fragment"),
  h2 = Symbol.for("react.strict_mode"),
  m2 = Symbol.for("react.profiler"),
  y2 = Symbol.for("react.provider"),
  g2 = Symbol.for("react.context"),
  v2 = Symbol.for("react.forward_ref"),
  w2 = Symbol.for("react.suspense"),
  x2 = Symbol.for("react.memo"),
  S2 = Symbol.for("react.lazy"),
  lp = Symbol.iterator;
function k2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lp && e[lp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xm = Object.assign,
  Sm = {};
function _i(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sm),
    (this.updater = n || wm);
}
_i.prototype.isReactComponent = {};
_i.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_i.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function km() {}
km.prototype = _i.prototype;
function Cf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sm),
    (this.updater = n || wm);
}
var Ef = (Cf.prototype = new km());
Ef.constructor = Cf;
xm(Ef, _i.prototype);
Ef.isPureReactComponent = !0;
var up = Array.isArray,
  Cm = Object.prototype.hasOwnProperty,
  Rf = { current: null },
  Em = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Cm.call(t, r) && !Em.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: qo,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Rf.current,
  };
}
function C2(e, t) {
  return {
    $$typeof: qo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _f(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qo;
}
function E2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ap = /\/+/g;
function Wu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? E2("" + e.key)
    : t.toString(36);
}
function Fs(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qo:
          case d2:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Wu(s, 0) : r),
      up(i)
        ? ((n = ""),
          e != null && (n = e.replace(ap, "$&/") + "/"),
          Fs(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (_f(i) &&
            (i = C2(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ap, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), up(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + Wu(o, l);
      s += Fs(o, t, n, u, i);
    }
  else if (((u = k2(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Wu(o, l++)), (s += Fs(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function is(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fs(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function R2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var st = { current: null },
  As = { transition: null },
  _2 = {
    ReactCurrentDispatcher: st,
    ReactCurrentBatchConfig: As,
    ReactCurrentOwner: Rf,
  };
re.Children = {
  map: is,
  forEach: function (e, t, n) {
    is(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_f(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
re.Component = _i;
re.Fragment = p2;
re.Profiler = m2;
re.PureComponent = Cf;
re.StrictMode = h2;
re.Suspense = w2;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _2;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xm({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Rf.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Cm.call(t, u) &&
        !Em.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: qo, type: e.type, key: i, ref: o, props: r, _owner: s };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: g2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: y2, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = Rm;
re.createFactory = function (e) {
  var t = Rm.bind(null, e);
  return (t.type = e), t;
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: v2, render: e };
};
re.isValidElement = _f;
re.lazy = function (e) {
  return { $$typeof: S2, _payload: { _status: -1, _result: e }, _init: R2 };
};
re.memo = function (e, t) {
  return { $$typeof: x2, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = As.transition;
  As.transition = {};
  try {
    e();
  } finally {
    As.transition = t;
  }
};
re.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
re.useCallback = function (e, t) {
  return st.current.useCallback(e, t);
};
re.useContext = function (e) {
  return st.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return st.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return st.current.useEffect(e, t);
};
re.useId = function () {
  return st.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return st.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return st.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return st.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return st.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return st.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return st.current.useRef(e);
};
re.useState = function (e) {
  return st.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return st.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return st.current.useTransition();
};
re.version = "18.2.0";
vm.exports = re;
var X = vm.exports;
const Ae = f2(X);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b2 = X,
  P2 = Symbol.for("react.element"),
  O2 = Symbol.for("react.fragment"),
  T2 = Object.prototype.hasOwnProperty,
  $2 = b2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  F2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function _m(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) T2.call(t, r) && !F2.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: P2,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: $2.current,
  };
}
lu.Fragment = O2;
lu.jsx = _m;
lu.jsxs = _m;
gm.exports = lu;
var y = gm.exports,
  qa = {},
  bm = { exports: {} },
  bt = {},
  Pm = { exports: {} },
  Om = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, z) {
    var Y = A.length;
    A.push(z);
    e: for (; 0 < Y; ) {
      var ae = (Y - 1) >>> 1,
        pe = A[ae];
      if (0 < i(pe, z)) (A[ae] = z), (A[Y] = pe), (Y = ae);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var z = A[0],
      Y = A.pop();
    if (Y !== z) {
      A[0] = Y;
      e: for (var ae = 0, pe = A.length, zt = pe >>> 1; ae < zt; ) {
        var Ye = 2 * (ae + 1) - 1,
          Xt = A[Ye],
          Ie = Ye + 1,
          Ke = A[Ie];
        if (0 > i(Xt, Y))
          Ie < pe && 0 > i(Ke, Xt)
            ? ((A[ae] = Ke), (A[Ie] = Y), (ae = Ie))
            : ((A[ae] = Xt), (A[Ye] = Y), (ae = Ye));
        else if (Ie < pe && 0 > i(Ke, Y)) (A[ae] = Ke), (A[Ie] = Y), (ae = Ie);
        else break e;
      }
    }
    return z;
  }
  function i(A, z) {
    var Y = A.sortIndex - z.sortIndex;
    return Y !== 0 ? Y : A.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    a = [],
    c = 1,
    d = null,
    p = 3,
    v = !1,
    g = !1,
    S = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(A) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= A)
        r(a), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(a);
    }
  }
  function k(A) {
    if (((S = !1), m(A), !g))
      if (n(u) !== null) (g = !0), Z(E);
      else {
        var z = n(a);
        z !== null && H(k, z.startTime - A);
      }
  }
  function E(A, z) {
    (g = !1), S && ((S = !1), h(w), (w = -1)), (v = !0);
    var Y = p;
    try {
      for (
        m(z), d = n(u);
        d !== null && (!(d.expirationTime > z) || (A && !D()));

      ) {
        var ae = d.callback;
        if (typeof ae == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var pe = ae(d.expirationTime <= z);
          (z = e.unstable_now()),
            typeof pe == "function" ? (d.callback = pe) : d === n(u) && r(u),
            m(z);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var zt = !0;
      else {
        var Ye = n(a);
        Ye !== null && H(k, Ye.startTime - z), (zt = !1);
      }
      return zt;
    } finally {
      (d = null), (p = Y), (v = !1);
    }
  }
  var P = !1,
    R = null,
    w = -1,
    O = 5,
    L = -1;
  function D() {
    return !(e.unstable_now() - L < O);
  }
  function C() {
    if (R !== null) {
      var A = e.unstable_now();
      L = A;
      var z = !0;
      try {
        z = R(!0, A);
      } finally {
        z ? T() : ((P = !1), (R = null));
      }
    } else P = !1;
  }
  var T;
  if (typeof f == "function")
    T = function () {
      f(C);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      q = N.port2;
    (N.port1.onmessage = C),
      (T = function () {
        q.postMessage(null);
      });
  } else
    T = function () {
      _(C, 0);
    };
  function Z(A) {
    (R = A), P || ((P = !0), T());
  }
  function H(A, z) {
    w = _(function () {
      A(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), Z(E));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (A) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var Y = p;
      p = z;
      try {
        return A();
      } finally {
        p = Y;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, z) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Y = p;
      p = A;
      try {
        return z();
      } finally {
        p = Y;
      }
    }),
    (e.unstable_scheduleCallback = function (A, z, Y) {
      var ae = e.unstable_now();
      switch (
        (typeof Y == "object" && Y !== null
          ? ((Y = Y.delay), (Y = typeof Y == "number" && 0 < Y ? ae + Y : ae))
          : (Y = ae),
        A)
      ) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return (
        (pe = Y + pe),
        (A = {
          id: c++,
          callback: z,
          priorityLevel: A,
          startTime: Y,
          expirationTime: pe,
          sortIndex: -1,
        }),
        Y > ae
          ? ((A.sortIndex = Y),
            t(a, A),
            n(u) === null &&
              A === n(a) &&
              (S ? (h(w), (w = -1)) : (S = !0), H(k, Y - ae)))
          : ((A.sortIndex = pe), t(u, A), g || v || ((g = !0), Z(E))),
        A
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (A) {
      var z = p;
      return function () {
        var Y = p;
        p = z;
        try {
          return A.apply(this, arguments);
        } finally {
          p = Y;
        }
      };
    });
})(Om);
Pm.exports = Om;
var A2 = Pm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tm = X,
  _t = A2;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $m = new Set(),
  wo = {};
function Mr(e, t) {
  di(e, t), di(e + "Capture", t);
}
function di(e, t) {
  for (wo[e] = t, e = 0; e < t.length; e++) $m.add(t[e]);
}
var En = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ya = Object.prototype.hasOwnProperty,
  L2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  cp = {},
  fp = {};
function D2(e) {
  return Ya.call(fp, e)
    ? !0
    : Ya.call(cp, e)
    ? !1
    : L2.test(e)
    ? (fp[e] = !0)
    : ((cp[e] = !0), !1);
}
function M2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function j2(e, t, n, r) {
  if (t === null || typeof t > "u" || M2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function lt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    We[e] = new lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  We[t] = new lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  We[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  We[e] = new lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    We[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  We[e] = new lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  We[e] = new lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  We[e] = new lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  We[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bf = /[\-:]([a-z])/g;
function Pf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bf, Pf);
    We[t] = new lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bf, Pf);
    We[t] = new lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bf, Pf);
  We[t] = new lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  We[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  We[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Of(e, t, n, r) {
  var i = We.hasOwnProperty(t) ? We[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (j2(t, n, i, r) && (n = null),
    r || i === null
      ? D2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tn = Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  os = Symbol.for("react.element"),
  Wr = Symbol.for("react.portal"),
  Qr = Symbol.for("react.fragment"),
  Tf = Symbol.for("react.strict_mode"),
  Ka = Symbol.for("react.profiler"),
  Fm = Symbol.for("react.provider"),
  Am = Symbol.for("react.context"),
  $f = Symbol.for("react.forward_ref"),
  Ga = Symbol.for("react.suspense"),
  Xa = Symbol.for("react.suspense_list"),
  Ff = Symbol.for("react.memo"),
  Nn = Symbol.for("react.lazy"),
  Lm = Symbol.for("react.offscreen"),
  dp = Symbol.iterator;
function Di(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dp && e[dp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ke = Object.assign,
  Qu;
function Yi(e) {
  if (Qu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qu = (t && t[1]) || "";
    }
  return (
    `
` +
    Qu +
    e
  );
}
var qu = !1;
function Yu(e, t) {
  if (!e || qu) return "";
  qu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (qu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Yi(e) : "";
}
function N2(e) {
  switch (e.tag) {
    case 5:
      return Yi(e.type);
    case 16:
      return Yi("Lazy");
    case 13:
      return Yi("Suspense");
    case 19:
      return Yi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yu(e.type, !1)), e;
    case 11:
      return (e = Yu(e.type.render, !1)), e;
    case 1:
      return (e = Yu(e.type, !0)), e;
    default:
      return "";
  }
}
function Za(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qr:
      return "Fragment";
    case Wr:
      return "Portal";
    case Ka:
      return "Profiler";
    case Tf:
      return "StrictMode";
    case Ga:
      return "Suspense";
    case Xa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Am:
        return (e.displayName || "Context") + ".Consumer";
      case Fm:
        return (e._context.displayName || "Context") + ".Provider";
      case $f:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ff:
        return (
          (t = e.displayName || null), t !== null ? t : Za(e.type) || "Memo"
        );
      case Nn:
        (t = e._payload), (e = e._init);
        try {
          return Za(e(t));
        } catch {}
    }
  return null;
}
function I2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Za(t);
    case 8:
      return t === Tf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function rr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Dm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function z2(e) {
  var t = Dm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ss(e) {
  e._valueTracker || (e._valueTracker = z2(e));
}
function Mm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ja(e, t) {
  var n = t.checked;
  return ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = rr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function jm(e, t) {
  (t = t.checked), t != null && Of(e, "checked", t, !1);
}
function ec(e, t) {
  jm(e, t);
  var n = rr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? tc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && tc(e, t.type, rr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function tc(e, t, n) {
  (t !== "number" || fl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ki = Array.isArray;
function oi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + rr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function nc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function mp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Ki(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: rr(n) };
}
function Nm(e, t) {
  var n = rr(t.value),
    r = rr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Im(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function rc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Im(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ls,
  zm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ls = ls || document.createElement("div"),
          ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ls.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  B2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(oo).forEach(function (e) {
  B2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oo[t] = oo[e]);
  });
});
function Bm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (oo.hasOwnProperty(e) && oo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Um(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Bm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var U2 = ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ic(e, t) {
  if (t) {
    if (U2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function oc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var sc = null;
function Af(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var lc = null,
  si = null,
  li = null;
function gp(e) {
  if ((e = Go(e))) {
    if (typeof lc != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = du(t)), lc(e.stateNode, e.type, t));
  }
}
function Vm(e) {
  si ? (li ? li.push(e) : (li = [e])) : (si = e);
}
function Hm() {
  if (si) {
    var e = si,
      t = li;
    if (((li = si = null), gp(e), t)) for (e = 0; e < t.length; e++) gp(t[e]);
  }
}
function Wm(e, t) {
  return e(t);
}
function Qm() {}
var Ku = !1;
function qm(e, t, n) {
  if (Ku) return e(t, n);
  Ku = !0;
  try {
    return Wm(e, t, n);
  } finally {
    (Ku = !1), (si !== null || li !== null) && (Qm(), Hm());
  }
}
function So(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = du(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var uc = !1;
if (En)
  try {
    var Mi = {};
    Object.defineProperty(Mi, "passive", {
      get: function () {
        uc = !0;
      },
    }),
      window.addEventListener("test", Mi, Mi),
      window.removeEventListener("test", Mi, Mi);
  } catch {
    uc = !1;
  }
function V2(e, t, n, r, i, o, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var so = !1,
  dl = null,
  pl = !1,
  ac = null,
  H2 = {
    onError: function (e) {
      (so = !0), (dl = e);
    },
  };
function W2(e, t, n, r, i, o, s, l, u) {
  (so = !1), (dl = null), V2.apply(H2, arguments);
}
function Q2(e, t, n, r, i, o, s, l, u) {
  if ((W2.apply(this, arguments), so)) {
    if (so) {
      var a = dl;
      (so = !1), (dl = null);
    } else throw Error(M(198));
    pl || ((pl = !0), (ac = a));
  }
}
function jr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ym(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function vp(e) {
  if (jr(e) !== e) throw Error(M(188));
}
function q2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jr(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return vp(i), e;
        if (o === r) return vp(i), t;
        o = o.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Km(e) {
  return (e = q2(e)), e !== null ? Gm(e) : null;
}
function Gm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xm = _t.unstable_scheduleCallback,
  wp = _t.unstable_cancelCallback,
  Y2 = _t.unstable_shouldYield,
  K2 = _t.unstable_requestPaint,
  be = _t.unstable_now,
  G2 = _t.unstable_getCurrentPriorityLevel,
  Lf = _t.unstable_ImmediatePriority,
  Zm = _t.unstable_UserBlockingPriority,
  hl = _t.unstable_NormalPriority,
  X2 = _t.unstable_LowPriority,
  Jm = _t.unstable_IdlePriority,
  uu = null,
  cn = null;
function Z2(e) {
  if (cn && typeof cn.onCommitFiberRoot == "function")
    try {
      cn.onCommitFiberRoot(uu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qt = Math.clz32 ? Math.clz32 : tw,
  J2 = Math.log,
  ew = Math.LN2;
function tw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((J2(e) / ew) | 0)) | 0;
}
var us = 64,
  as = 4194304;
function Gi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Gi(l)) : ((o &= s), o !== 0 && (r = Gi(o)));
  } else (s = n & ~i), s !== 0 ? (r = Gi(s)) : o !== 0 && (r = Gi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function nw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function rw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - qt(o),
      l = 1 << s,
      u = i[s];
    u === -1
      ? (!(l & n) || l & r) && (i[s] = nw(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function cc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function e1() {
  var e = us;
  return (us <<= 1), !(us & 4194240) && (us = 64), e;
}
function Gu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qt(t)),
    (e[t] = n);
}
function iw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Df(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ue = 0;
function t1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var n1,
  Mf,
  r1,
  i1,
  o1,
  fc = !1,
  cs = [],
  Yn = null,
  Kn = null,
  Gn = null,
  ko = new Map(),
  Co = new Map(),
  Bn = [],
  ow =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yn = null;
      break;
    case "dragenter":
    case "dragleave":
      Kn = null;
      break;
    case "mouseover":
    case "mouseout":
      Gn = null;
      break;
    case "pointerover":
    case "pointerout":
      ko.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Co.delete(t.pointerId);
  }
}
function ji(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Go(t)), t !== null && Mf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function sw(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Yn = ji(Yn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Kn = ji(Kn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Gn = ji(Gn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ko.set(o, ji(ko.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Co.set(o, ji(Co.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function s1(e) {
  var t = vr(e.target);
  if (t !== null) {
    var n = jr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ym(n)), t !== null)) {
          (e.blockedOn = t),
            o1(e.priority, function () {
              r1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ls(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = dc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sc = r), n.target.dispatchEvent(r), (sc = null);
    } else return (t = Go(n)), t !== null && Mf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Sp(e, t, n) {
  Ls(e) && n.delete(t);
}
function lw() {
  (fc = !1),
    Yn !== null && Ls(Yn) && (Yn = null),
    Kn !== null && Ls(Kn) && (Kn = null),
    Gn !== null && Ls(Gn) && (Gn = null),
    ko.forEach(Sp),
    Co.forEach(Sp);
}
function Ni(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fc ||
      ((fc = !0),
      _t.unstable_scheduleCallback(_t.unstable_NormalPriority, lw)));
}
function Eo(e) {
  function t(i) {
    return Ni(i, e);
  }
  if (0 < cs.length) {
    Ni(cs[0], e);
    for (var n = 1; n < cs.length; n++) {
      var r = cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yn !== null && Ni(Yn, e),
      Kn !== null && Ni(Kn, e),
      Gn !== null && Ni(Gn, e),
      ko.forEach(t),
      Co.forEach(t),
      n = 0;
    n < Bn.length;
    n++
  )
    (r = Bn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bn.length && ((n = Bn[0]), n.blockedOn === null); )
    s1(n), n.blockedOn === null && Bn.shift();
}
var ui = Tn.ReactCurrentBatchConfig,
  yl = !0;
function uw(e, t, n, r) {
  var i = ue,
    o = ui.transition;
  ui.transition = null;
  try {
    (ue = 1), jf(e, t, n, r);
  } finally {
    (ue = i), (ui.transition = o);
  }
}
function aw(e, t, n, r) {
  var i = ue,
    o = ui.transition;
  ui.transition = null;
  try {
    (ue = 4), jf(e, t, n, r);
  } finally {
    (ue = i), (ui.transition = o);
  }
}
function jf(e, t, n, r) {
  if (yl) {
    var i = dc(e, t, n, r);
    if (i === null) sa(e, t, r, gl, n), xp(e, r);
    else if (sw(i, e, t, n, r)) r.stopPropagation();
    else if ((xp(e, r), t & 4 && -1 < ow.indexOf(e))) {
      for (; i !== null; ) {
        var o = Go(i);
        if (
          (o !== null && n1(o),
          (o = dc(e, t, n, r)),
          o === null && sa(e, t, r, gl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else sa(e, t, r, null, n);
  }
}
var gl = null;
function dc(e, t, n, r) {
  if (((gl = null), (e = Af(r)), (e = vr(e)), e !== null))
    if (((t = jr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ym(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (gl = e), null;
}
function l1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (G2()) {
        case Lf:
          return 1;
        case Zm:
          return 4;
        case hl:
        case X2:
          return 16;
        case Jm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vn = null,
  Nf = null,
  Ds = null;
function u1() {
  if (Ds) return Ds;
  var e,
    t = Nf,
    n = t.length,
    r,
    i = "value" in Vn ? Vn.value : Vn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ds = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ms(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fs() {
  return !0;
}
function kp() {
  return !1;
}
function Pt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fs
        : kp),
      (this.isPropagationStopped = kp),
      this
    );
  }
  return (
    ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fs));
      },
      persist: function () {},
      isPersistent: fs,
    }),
    t
  );
}
var bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  If = Pt(bi),
  Ko = ke({}, bi, { view: 0, detail: 0 }),
  cw = Pt(Ko),
  Xu,
  Zu,
  Ii,
  au = ke({}, Ko, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ii &&
            (Ii && e.type === "mousemove"
              ? ((Xu = e.screenX - Ii.screenX), (Zu = e.screenY - Ii.screenY))
              : (Zu = Xu = 0),
            (Ii = e)),
          Xu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zu;
    },
  }),
  Cp = Pt(au),
  fw = ke({}, au, { dataTransfer: 0 }),
  dw = Pt(fw),
  pw = ke({}, Ko, { relatedTarget: 0 }),
  Ju = Pt(pw),
  hw = ke({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mw = Pt(hw),
  yw = ke({}, bi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gw = Pt(yw),
  vw = ke({}, bi, { data: 0 }),
  Ep = Pt(vw),
  ww = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  xw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Sw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function kw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sw[e]) ? !!t[e] : !1;
}
function zf() {
  return kw;
}
var Cw = ke({}, Ko, {
    key: function (e) {
      if (e.key) {
        var t = ww[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ms(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? xw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zf,
    charCode: function (e) {
      return e.type === "keypress" ? Ms(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ms(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ew = Pt(Cw),
  Rw = ke({}, au, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rp = Pt(Rw),
  _w = ke({}, Ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zf,
  }),
  bw = Pt(_w),
  Pw = ke({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ow = Pt(Pw),
  Tw = ke({}, au, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $w = Pt(Tw),
  Fw = [9, 13, 27, 32],
  Bf = En && "CompositionEvent" in window,
  lo = null;
En && "documentMode" in document && (lo = document.documentMode);
var Aw = En && "TextEvent" in window && !lo,
  a1 = En && (!Bf || (lo && 8 < lo && 11 >= lo)),
  _p = String.fromCharCode(32),
  bp = !1;
function c1(e, t) {
  switch (e) {
    case "keyup":
      return Fw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function f1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qr = !1;
function Lw(e, t) {
  switch (e) {
    case "compositionend":
      return f1(t);
    case "keypress":
      return t.which !== 32 ? null : ((bp = !0), _p);
    case "textInput":
      return (e = t.data), e === _p && bp ? null : e;
    default:
      return null;
  }
}
function Dw(e, t) {
  if (qr)
    return e === "compositionend" || (!Bf && c1(e, t))
      ? ((e = u1()), (Ds = Nf = Vn = null), (qr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return a1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Pp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mw[e.type] : t === "textarea";
}
function d1(e, t, n, r) {
  Vm(r),
    (t = vl(t, "onChange")),
    0 < t.length &&
      ((n = new If("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var uo = null,
  Ro = null;
function jw(e) {
  C1(e, 0);
}
function cu(e) {
  var t = Gr(e);
  if (Mm(t)) return e;
}
function Nw(e, t) {
  if (e === "change") return t;
}
var p1 = !1;
if (En) {
  var ea;
  if (En) {
    var ta = "oninput" in document;
    if (!ta) {
      var Op = document.createElement("div");
      Op.setAttribute("oninput", "return;"),
        (ta = typeof Op.oninput == "function");
    }
    ea = ta;
  } else ea = !1;
  p1 = ea && (!document.documentMode || 9 < document.documentMode);
}
function Tp() {
  uo && (uo.detachEvent("onpropertychange", h1), (Ro = uo = null));
}
function h1(e) {
  if (e.propertyName === "value" && cu(Ro)) {
    var t = [];
    d1(t, Ro, e, Af(e)), qm(jw, t);
  }
}
function Iw(e, t, n) {
  e === "focusin"
    ? (Tp(), (uo = t), (Ro = n), uo.attachEvent("onpropertychange", h1))
    : e === "focusout" && Tp();
}
function zw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cu(Ro);
}
function Bw(e, t) {
  if (e === "click") return cu(t);
}
function Uw(e, t) {
  if (e === "input" || e === "change") return cu(t);
}
function Vw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gt = typeof Object.is == "function" ? Object.is : Vw;
function _o(e, t) {
  if (Gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ya.call(t, i) || !Gt(e[i], t[i])) return !1;
  }
  return !0;
}
function $p(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fp(e, t) {
  var n = $p(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $p(n);
  }
}
function m1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? m1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function y1() {
  for (var e = window, t = fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fl(e.document);
  }
  return t;
}
function Uf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hw(e) {
  var t = y1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    m1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Fp(n, o));
        var s = Fp(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ww = En && "documentMode" in document && 11 >= document.documentMode,
  Yr = null,
  pc = null,
  ao = null,
  hc = !1;
function Ap(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hc ||
    Yr == null ||
    Yr !== fl(r) ||
    ((r = Yr),
    "selectionStart" in r && Uf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ao && _o(ao, r)) ||
      ((ao = r),
      (r = vl(pc, "onSelect")),
      0 < r.length &&
        ((t = new If("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yr))));
}
function ds(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kr = {
    animationend: ds("Animation", "AnimationEnd"),
    animationiteration: ds("Animation", "AnimationIteration"),
    animationstart: ds("Animation", "AnimationStart"),
    transitionend: ds("Transition", "TransitionEnd"),
  },
  na = {},
  g1 = {};
En &&
  ((g1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kr.animationend.animation,
    delete Kr.animationiteration.animation,
    delete Kr.animationstart.animation),
  "TransitionEvent" in window || delete Kr.transitionend.transition);
function fu(e) {
  if (na[e]) return na[e];
  if (!Kr[e]) return e;
  var t = Kr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in g1) return (na[e] = t[n]);
  return e;
}
var v1 = fu("animationend"),
  w1 = fu("animationiteration"),
  x1 = fu("animationstart"),
  S1 = fu("transitionend"),
  k1 = new Map(),
  Lp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function sr(e, t) {
  k1.set(e, t), Mr(t, [e]);
}
for (var ra = 0; ra < Lp.length; ra++) {
  var ia = Lp[ra],
    Qw = ia.toLowerCase(),
    qw = ia[0].toUpperCase() + ia.slice(1);
  sr(Qw, "on" + qw);
}
sr(v1, "onAnimationEnd");
sr(w1, "onAnimationIteration");
sr(x1, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(S1, "onTransitionEnd");
di("onMouseEnter", ["mouseout", "mouseover"]);
di("onMouseLeave", ["mouseout", "mouseover"]);
di("onPointerEnter", ["pointerout", "pointerover"]);
di("onPointerLeave", ["pointerout", "pointerover"]);
Mr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Xi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Yw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));
function Dp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Q2(r, t, void 0, e), (e.currentTarget = null);
}
function C1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          Dp(i, l, a), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Dp(i, l, a), (o = u);
        }
    }
  }
  if (pl) throw ((e = ac), (pl = !1), (ac = null), e);
}
function he(e, t) {
  var n = t[wc];
  n === void 0 && (n = t[wc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (E1(t, e, 2, !1), n.add(r));
}
function oa(e, t, n) {
  var r = 0;
  t && (r |= 4), E1(n, e, r, t);
}
var ps = "_reactListening" + Math.random().toString(36).slice(2);
function bo(e) {
  if (!e[ps]) {
    (e[ps] = !0),
      $m.forEach(function (n) {
        n !== "selectionchange" && (Yw.has(n) || oa(n, !1, e), oa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ps] || ((t[ps] = !0), oa("selectionchange", !1, t));
  }
}
function E1(e, t, n, r) {
  switch (l1(t)) {
    case 1:
      var i = uw;
      break;
    case 4:
      i = aw;
      break;
    default:
      i = jf;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !uc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function sa(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = vr(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  qm(function () {
    var a = o,
      c = Af(n),
      d = [];
    e: {
      var p = k1.get(e);
      if (p !== void 0) {
        var v = If,
          g = e;
        switch (e) {
          case "keypress":
            if (Ms(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Ew;
            break;
          case "focusin":
            (g = "focus"), (v = Ju);
            break;
          case "focusout":
            (g = "blur"), (v = Ju);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ju;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Cp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = dw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = bw;
            break;
          case v1:
          case w1:
          case x1:
            v = mw;
            break;
          case S1:
            v = Ow;
            break;
          case "scroll":
            v = cw;
            break;
          case "wheel":
            v = $w;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = gw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Rp;
        }
        var S = (t & 4) !== 0,
          _ = !S && e === "scroll",
          h = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var f = a, m; f !== null; ) {
          m = f;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              h !== null && ((k = So(f, h)), k != null && S.push(Po(f, k, m)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((p = new v(p, g, null, n, c)), d.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== sc &&
            (g = n.relatedTarget || n.fromElement) &&
            (vr(g) || g[Rn]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = a),
              (g = g ? vr(g) : null),
              g !== null &&
                ((_ = jr(g)), g !== _ || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = a)),
          v !== g)
        ) {
          if (
            ((S = Cp),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Rp),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (_ = v == null ? p : Gr(v)),
            (m = g == null ? p : Gr(g)),
            (p = new S(k, f + "leave", v, n, c)),
            (p.target = _),
            (p.relatedTarget = m),
            (k = null),
            vr(c) === a &&
              ((S = new S(h, f + "enter", g, n, c)),
              (S.target = m),
              (S.relatedTarget = _),
              (k = S)),
            (_ = k),
            v && g)
          )
            t: {
              for (S = v, h = g, f = 0, m = S; m; m = zr(m)) f++;
              for (m = 0, k = h; k; k = zr(k)) m++;
              for (; 0 < f - m; ) (S = zr(S)), f--;
              for (; 0 < m - f; ) (h = zr(h)), m--;
              for (; f--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                (S = zr(S)), (h = zr(h));
              }
              S = null;
            }
          else S = null;
          v !== null && Mp(d, p, v, S, !1),
            g !== null && _ !== null && Mp(d, _, g, S, !0);
        }
      }
      e: {
        if (
          ((p = a ? Gr(a) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var E = Nw;
        else if (Pp(p))
          if (p1) E = Uw;
          else {
            E = zw;
            var P = Iw;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Bw);
        if (E && (E = E(e, a))) {
          d1(d, E, n, c);
          break e;
        }
        P && P(e, p, a),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            tc(p, "number", p.value);
      }
      switch (((P = a ? Gr(a) : window), e)) {
        case "focusin":
          (Pp(P) || P.contentEditable === "true") &&
            ((Yr = P), (pc = a), (ao = null));
          break;
        case "focusout":
          ao = pc = Yr = null;
          break;
        case "mousedown":
          hc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hc = !1), Ap(d, n, c);
          break;
        case "selectionchange":
          if (Ww) break;
        case "keydown":
        case "keyup":
          Ap(d, n, c);
      }
      var R;
      if (Bf)
        e: {
          switch (e) {
            case "compositionstart":
              var w = "onCompositionStart";
              break e;
            case "compositionend":
              w = "onCompositionEnd";
              break e;
            case "compositionupdate":
              w = "onCompositionUpdate";
              break e;
          }
          w = void 0;
        }
      else
        qr
          ? c1(e, n) && (w = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (w = "onCompositionStart");
      w &&
        (a1 &&
          n.locale !== "ko" &&
          (qr || w !== "onCompositionStart"
            ? w === "onCompositionEnd" && qr && (R = u1())
            : ((Vn = c),
              (Nf = "value" in Vn ? Vn.value : Vn.textContent),
              (qr = !0))),
        (P = vl(a, w)),
        0 < P.length &&
          ((w = new Ep(w, e, null, n, c)),
          d.push({ event: w, listeners: P }),
          R ? (w.data = R) : ((R = f1(n)), R !== null && (w.data = R)))),
        (R = Aw ? Lw(e, n) : Dw(e, n)) &&
          ((a = vl(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new Ep("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: a }),
            (c.data = R)));
    }
    C1(d, t);
  });
}
function Po(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = So(e, n)),
      o != null && r.unshift(Po(e, o, i)),
      (o = So(e, t)),
      o != null && r.push(Po(e, o, i))),
      (e = e.return);
  }
  return r;
}
function zr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mp(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      i
        ? ((u = So(n, o)), u != null && s.unshift(Po(n, u, l)))
        : i || ((u = So(n, o)), u != null && s.push(Po(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Kw = /\r\n?/g,
  Gw = /\u0000|\uFFFD/g;
function jp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kw,
      `
`
    )
    .replace(Gw, "");
}
function hs(e, t, n) {
  if (((t = jp(t)), jp(e) !== t && n)) throw Error(M(425));
}
function wl() {}
var mc = null,
  yc = null;
function gc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vc = typeof setTimeout == "function" ? setTimeout : void 0,
  Xw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Np = typeof Promise == "function" ? Promise : void 0,
  Zw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Np < "u"
      ? function (e) {
          return Np.resolve(null).then(e).catch(Jw);
        }
      : vc;
function Jw(e) {
  setTimeout(function () {
    throw e;
  });
}
function la(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Eo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Eo(t);
}
function Xn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ip(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pi = Math.random().toString(36).slice(2),
  sn = "__reactFiber$" + Pi,
  Oo = "__reactProps$" + Pi,
  Rn = "__reactContainer$" + Pi,
  wc = "__reactEvents$" + Pi,
  ex = "__reactListeners$" + Pi,
  tx = "__reactHandles$" + Pi;
function vr(e) {
  var t = e[sn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rn] || n[sn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ip(e); e !== null; ) {
          if ((n = e[sn])) return n;
          e = Ip(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Go(e) {
  return (
    (e = e[sn] || e[Rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function du(e) {
  return e[Oo] || null;
}
var xc = [],
  Xr = -1;
function lr(e) {
  return { current: e };
}
function ge(e) {
  0 > Xr || ((e.current = xc[Xr]), (xc[Xr] = null), Xr--);
}
function de(e, t) {
  Xr++, (xc[Xr] = e.current), (e.current = t);
}
var ir = {},
  et = lr(ir),
  ht = lr(!1),
  Tr = ir;
function pi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ir;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function mt(e) {
  return (e = e.childContextTypes), e != null;
}
function xl() {
  ge(ht), ge(et);
}
function zp(e, t, n) {
  if (et.current !== ir) throw Error(M(168));
  de(et, t), de(ht, n);
}
function R1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, I2(e) || "Unknown", i));
  return ke({}, n, r);
}
function Sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ir),
    (Tr = et.current),
    de(et, e),
    de(ht, ht.current),
    !0
  );
}
function Bp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = R1(e, t, Tr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(ht),
      ge(et),
      de(et, e))
    : ge(ht),
    de(ht, n);
}
var wn = null,
  pu = !1,
  ua = !1;
function _1(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function nx(e) {
  (pu = !0), _1(e);
}
function ur() {
  if (!ua && wn !== null) {
    ua = !0;
    var e = 0,
      t = ue;
    try {
      var n = wn;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wn = null), (pu = !1);
    } catch (i) {
      throw (wn !== null && (wn = wn.slice(e + 1)), Xm(Lf, ur), i);
    } finally {
      (ue = t), (ua = !1);
    }
  }
  return null;
}
var Zr = [],
  Jr = 0,
  kl = null,
  Cl = 0,
  Ft = [],
  At = 0,
  $r = null,
  xn = 1,
  Sn = "";
function cr(e, t) {
  (Zr[Jr++] = Cl), (Zr[Jr++] = kl), (kl = e), (Cl = t);
}
function b1(e, t, n) {
  (Ft[At++] = xn), (Ft[At++] = Sn), (Ft[At++] = $r), ($r = e);
  var r = xn;
  e = Sn;
  var i = 32 - qt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - qt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (xn = (1 << (32 - qt(t) + i)) | (n << i) | r),
      (Sn = o + e);
  } else (xn = (1 << o) | (n << i) | r), (Sn = e);
}
function Vf(e) {
  e.return !== null && (cr(e, 1), b1(e, 1, 0));
}
function Hf(e) {
  for (; e === kl; )
    (kl = Zr[--Jr]), (Zr[Jr] = null), (Cl = Zr[--Jr]), (Zr[Jr] = null);
  for (; e === $r; )
    ($r = Ft[--At]),
      (Ft[At] = null),
      (Sn = Ft[--At]),
      (Ft[At] = null),
      (xn = Ft[--At]),
      (Ft[At] = null);
}
var Rt = null,
  Et = null,
  we = !1,
  Wt = null;
function P1(e, t) {
  var n = Lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Up(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Rt = e), (Et = Xn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Rt = e), (Et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $r !== null ? { id: xn, overflow: Sn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Rt = e),
            (Et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Sc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function kc(e) {
  if (we) {
    var t = Et;
    if (t) {
      var n = t;
      if (!Up(e, t)) {
        if (Sc(e)) throw Error(M(418));
        t = Xn(n.nextSibling);
        var r = Rt;
        t && Up(e, t)
          ? P1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (we = !1), (Rt = e));
      }
    } else {
      if (Sc(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (we = !1), (Rt = e);
    }
  }
}
function Vp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Rt = e;
}
function ms(e) {
  if (e !== Rt) return !1;
  if (!we) return Vp(e), (we = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gc(e.type, e.memoizedProps))),
    t && (t = Et))
  ) {
    if (Sc(e)) throw (O1(), Error(M(418)));
    for (; t; ) P1(e, t), (t = Xn(t.nextSibling));
  }
  if ((Vp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Et = Xn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Et = null;
    }
  } else Et = Rt ? Xn(e.stateNode.nextSibling) : null;
  return !0;
}
function O1() {
  for (var e = Et; e; ) e = Xn(e.nextSibling);
}
function hi() {
  (Et = Rt = null), (we = !1);
}
function Wf(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
var rx = Tn.ReactCurrentBatchConfig;
function Ut(e, t) {
  if (e && e.defaultProps) {
    (t = ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var El = lr(null),
  Rl = null,
  ei = null,
  Qf = null;
function qf() {
  Qf = ei = Rl = null;
}
function Yf(e) {
  var t = El.current;
  ge(El), (e._currentValue = t);
}
function Cc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ai(e, t) {
  (Rl = e),
    (Qf = ei = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pt = !0), (e.firstContext = null));
}
function jt(e) {
  var t = e._currentValue;
  if (Qf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ei === null)) {
      if (Rl === null) throw Error(M(308));
      (ei = e), (Rl.dependencies = { lanes: 0, firstContext: e });
    } else ei = ei.next = e;
  return t;
}
var wr = null;
function Kf(e) {
  wr === null ? (wr = [e]) : wr.push(e);
}
function T1(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Kf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    _n(e, r)
  );
}
function _n(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var In = !1;
function Gf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function kn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), oe & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      _n(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Kf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    _n(e, n)
  );
}
function js(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Df(e, n);
  }
}
function Hp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function _l(e, t, n, r) {
  var i = e.updateQueue;
  In = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      a = u.next;
    (u.next = null), s === null ? (o = a) : (s.next = a), (s = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = a) : (l.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = a = u = null), (l = o);
    do {
      var p = l.lane,
        v = l.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            S = l;
          switch (((p = t), (v = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == "function")) {
                d = g.call(v, d, p);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = S.payload),
                (p = typeof g == "function" ? g.call(v, d, p) : g),
                p == null)
              )
                break e;
              d = ke({}, d, p);
              break e;
            case 2:
              In = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [l]) : p.push(l));
      } else
        (v = {
          eventTime: v,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((a = c = v), (u = d)) : (c = c.next = v),
          (s |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ar |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Wp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var F1 = new Tm.Component().refs;
function Ec(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = it(),
      i = er(e),
      o = kn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Zn(e, o, i)),
      t !== null && (Yt(t, e, i, r), js(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = it(),
      i = er(e),
      o = kn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Zn(e, o, i)),
      t !== null && (Yt(t, e, i, r), js(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = it(),
      r = er(e),
      i = kn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Zn(e, i, r)),
      t !== null && (Yt(t, e, r, n), js(t, e, r));
  },
};
function Qp(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !_o(n, r) || !_o(i, o)
      : !0
  );
}
function A1(e, t, n) {
  var r = !1,
    i = ir,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = jt(o))
      : ((i = mt(t) ? Tr : et.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? pi(e, i) : ir)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function qp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hu.enqueueReplaceState(t, t.state, null);
}
function Rc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = F1), Gf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = jt(o))
    : ((o = mt(t) ? Tr : et.current), (i.context = pi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ec(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && hu.enqueueReplaceState(i, i.state, null),
      _l(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function zi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === F1 && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yp(e) {
  var t = e._init;
  return t(e._payload);
}
function L1(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function i(h, f) {
    return (h = tr(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, f, m, k) {
    return f === null || f.tag !== 6
      ? ((f = ma(m, h.mode, k)), (f.return = h), f)
      : ((f = i(f, m)), (f.return = h), f);
  }
  function u(h, f, m, k) {
    var E = m.type;
    return E === Qr
      ? c(h, f, m.props.children, k, m.key)
      : f !== null &&
        (f.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Nn &&
            Yp(E) === f.type))
      ? ((k = i(f, m.props)), (k.ref = zi(h, f, m)), (k.return = h), k)
      : ((k = Vs(m.type, m.key, m.props, null, h.mode, k)),
        (k.ref = zi(h, f, m)),
        (k.return = h),
        k);
  }
  function a(h, f, m, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = ya(m, h.mode, k)), (f.return = h), f)
      : ((f = i(f, m.children || [])), (f.return = h), f);
  }
  function c(h, f, m, k, E) {
    return f === null || f.tag !== 7
      ? ((f = Pr(m, h.mode, k, E)), (f.return = h), f)
      : ((f = i(f, m)), (f.return = h), f);
  }
  function d(h, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ma("" + f, h.mode, m)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case os:
          return (
            (m = Vs(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = zi(h, null, f)),
            (m.return = h),
            m
          );
        case Wr:
          return (f = ya(f, h.mode, m)), (f.return = h), f;
        case Nn:
          var k = f._init;
          return d(h, k(f._payload), m);
      }
      if (Ki(f) || Di(f))
        return (f = Pr(f, h.mode, m, null)), (f.return = h), f;
      ys(h, f);
    }
    return null;
  }
  function p(h, f, m, k) {
    var E = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return E !== null ? null : l(h, f, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case os:
          return m.key === E ? u(h, f, m, k) : null;
        case Wr:
          return m.key === E ? a(h, f, m, k) : null;
        case Nn:
          return (E = m._init), p(h, f, E(m._payload), k);
      }
      if (Ki(m) || Di(m)) return E !== null ? null : c(h, f, m, k, null);
      ys(h, m);
    }
    return null;
  }
  function v(h, f, m, k, E) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(m) || null), l(f, h, "" + k, E);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case os:
          return (h = h.get(k.key === null ? m : k.key) || null), u(f, h, k, E);
        case Wr:
          return (h = h.get(k.key === null ? m : k.key) || null), a(f, h, k, E);
        case Nn:
          var P = k._init;
          return v(h, f, m, P(k._payload), E);
      }
      if (Ki(k) || Di(k)) return (h = h.get(m) || null), c(f, h, k, E, null);
      ys(f, k);
    }
    return null;
  }
  function g(h, f, m, k) {
    for (
      var E = null, P = null, R = f, w = (f = 0), O = null;
      R !== null && w < m.length;
      w++
    ) {
      R.index > w ? ((O = R), (R = null)) : (O = R.sibling);
      var L = p(h, R, m[w], k);
      if (L === null) {
        R === null && (R = O);
        break;
      }
      e && R && L.alternate === null && t(h, R),
        (f = o(L, f, w)),
        P === null ? (E = L) : (P.sibling = L),
        (P = L),
        (R = O);
    }
    if (w === m.length) return n(h, R), we && cr(h, w), E;
    if (R === null) {
      for (; w < m.length; w++)
        (R = d(h, m[w], k)),
          R !== null &&
            ((f = o(R, f, w)), P === null ? (E = R) : (P.sibling = R), (P = R));
      return we && cr(h, w), E;
    }
    for (R = r(h, R); w < m.length; w++)
      (O = v(R, h, w, m[w], k)),
        O !== null &&
          (e && O.alternate !== null && R.delete(O.key === null ? w : O.key),
          (f = o(O, f, w)),
          P === null ? (E = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        R.forEach(function (D) {
          return t(h, D);
        }),
      we && cr(h, w),
      E
    );
  }
  function S(h, f, m, k) {
    var E = Di(m);
    if (typeof E != "function") throw Error(M(150));
    if (((m = E.call(m)), m == null)) throw Error(M(151));
    for (
      var P = (E = null), R = f, w = (f = 0), O = null, L = m.next();
      R !== null && !L.done;
      w++, L = m.next()
    ) {
      R.index > w ? ((O = R), (R = null)) : (O = R.sibling);
      var D = p(h, R, L.value, k);
      if (D === null) {
        R === null && (R = O);
        break;
      }
      e && R && D.alternate === null && t(h, R),
        (f = o(D, f, w)),
        P === null ? (E = D) : (P.sibling = D),
        (P = D),
        (R = O);
    }
    if (L.done) return n(h, R), we && cr(h, w), E;
    if (R === null) {
      for (; !L.done; w++, L = m.next())
        (L = d(h, L.value, k)),
          L !== null &&
            ((f = o(L, f, w)), P === null ? (E = L) : (P.sibling = L), (P = L));
      return we && cr(h, w), E;
    }
    for (R = r(h, R); !L.done; w++, L = m.next())
      (L = v(R, h, w, L.value, k)),
        L !== null &&
          (e && L.alternate !== null && R.delete(L.key === null ? w : L.key),
          (f = o(L, f, w)),
          P === null ? (E = L) : (P.sibling = L),
          (P = L));
    return (
      e &&
        R.forEach(function (C) {
          return t(h, C);
        }),
      we && cr(h, w),
      E
    );
  }
  function _(h, f, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Qr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case os:
          e: {
            for (var E = m.key, P = f; P !== null; ) {
              if (P.key === E) {
                if (((E = m.type), E === Qr)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (f = i(P, m.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Nn &&
                    Yp(E) === P.type)
                ) {
                  n(h, P.sibling),
                    (f = i(P, m.props)),
                    (f.ref = zi(h, P, m)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            m.type === Qr
              ? ((f = Pr(m.props.children, h.mode, k, m.key)),
                (f.return = h),
                (h = f))
              : ((k = Vs(m.type, m.key, m.props, null, h.mode, k)),
                (k.ref = zi(h, f, m)),
                (k.return = h),
                (h = k));
          }
          return s(h);
        case Wr:
          e: {
            for (P = m.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = i(f, m.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = ya(m, h.mode, k)), (f.return = h), (h = f);
          }
          return s(h);
        case Nn:
          return (P = m._init), _(h, f, P(m._payload), k);
      }
      if (Ki(m)) return g(h, f, m, k);
      if (Di(m)) return S(h, f, m, k);
      ys(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = i(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = ma(m, h.mode, k)), (f.return = h), (h = f)),
        s(h))
      : n(h, f);
  }
  return _;
}
var mi = L1(!0),
  D1 = L1(!1),
  Xo = {},
  fn = lr(Xo),
  To = lr(Xo),
  $o = lr(Xo);
function xr(e) {
  if (e === Xo) throw Error(M(174));
  return e;
}
function Xf(e, t) {
  switch ((de($o, t), de(To, e), de(fn, Xo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : rc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = rc(t, e));
  }
  ge(fn), de(fn, t);
}
function yi() {
  ge(fn), ge(To), ge($o);
}
function M1(e) {
  xr($o.current);
  var t = xr(fn.current),
    n = rc(t, e.type);
  t !== n && (de(To, e), de(fn, n));
}
function Zf(e) {
  To.current === e && (ge(fn), ge(To));
}
var xe = lr(0);
function bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var aa = [];
function Jf() {
  for (var e = 0; e < aa.length; e++)
    aa[e]._workInProgressVersionPrimary = null;
  aa.length = 0;
}
var Ns = Tn.ReactCurrentDispatcher,
  ca = Tn.ReactCurrentBatchConfig,
  Fr = 0,
  Se = null,
  Fe = null,
  Me = null,
  Pl = !1,
  co = !1,
  Fo = 0,
  ix = 0;
function Ge() {
  throw Error(M(321));
}
function ed(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Gt(e[n], t[n])) return !1;
  return !0;
}
function td(e, t, n, r, i, o) {
  if (
    ((Fr = o),
    (Se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ns.current = e === null || e.memoizedState === null ? ux : ax),
    (e = n(r, i)),
    co)
  ) {
    o = 0;
    do {
      if (((co = !1), (Fo = 0), 25 <= o)) throw Error(M(301));
      (o += 1),
        (Me = Fe = null),
        (t.updateQueue = null),
        (Ns.current = cx),
        (e = n(r, i));
    } while (co);
  }
  if (
    ((Ns.current = Ol),
    (t = Fe !== null && Fe.next !== null),
    (Fr = 0),
    (Me = Fe = Se = null),
    (Pl = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function nd() {
  var e = Fo !== 0;
  return (Fo = 0), e;
}
function rn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (Se.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function Nt() {
  if (Fe === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Fe.next;
  var t = Me === null ? Se.memoizedState : Me.next;
  if (t !== null) (Me = t), (Fe = e);
  else {
    if (e === null) throw Error(M(310));
    (Fe = e),
      (e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null,
      }),
      Me === null ? (Se.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function Ao(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fa(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Fe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((Fr & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((l = u = d), (s = r)) : (u = u.next = d),
          (Se.lanes |= c),
          (Ar |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (s = r) : (u.next = l),
      Gt(r, t.memoizedState) || (pt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Se.lanes |= o), (Ar |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function da(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Gt(o, t.memoizedState) || (pt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function j1() {}
function N1(e, t) {
  var n = Se,
    r = Nt(),
    i = t(),
    o = !Gt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (pt = !0)),
    (r = r.queue),
    rd(B1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Lo(9, z1.bind(null, n, r, i, t), void 0, null),
      Ne === null)
    )
      throw Error(M(349));
    Fr & 30 || I1(n, t, i);
  }
  return i;
}
function I1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function z1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), U1(t) && V1(e);
}
function B1(e, t, n) {
  return n(function () {
    U1(t) && V1(e);
  });
}
function U1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gt(e, n);
  } catch {
    return !0;
  }
}
function V1(e) {
  var t = _n(e, 1);
  t !== null && Yt(t, e, 1, -1);
}
function Kp(e) {
  var t = rn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ao,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = lx.bind(null, Se, e)),
    [t.memoizedState, e]
  );
}
function Lo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function H1() {
  return Nt().memoizedState;
}
function Is(e, t, n, r) {
  var i = rn();
  (Se.flags |= e),
    (i.memoizedState = Lo(1 | t, n, void 0, r === void 0 ? null : r));
}
function mu(e, t, n, r) {
  var i = Nt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Fe !== null) {
    var s = Fe.memoizedState;
    if (((o = s.destroy), r !== null && ed(r, s.deps))) {
      i.memoizedState = Lo(t, n, o, r);
      return;
    }
  }
  (Se.flags |= e), (i.memoizedState = Lo(1 | t, n, o, r));
}
function Gp(e, t) {
  return Is(8390656, 8, e, t);
}
function rd(e, t) {
  return mu(2048, 8, e, t);
}
function W1(e, t) {
  return mu(4, 2, e, t);
}
function Q1(e, t) {
  return mu(4, 4, e, t);
}
function q1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Y1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), mu(4, 4, q1.bind(null, t, e), n)
  );
}
function id() {}
function K1(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ed(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function G1(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ed(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function X1(e, t, n) {
  return Fr & 21
    ? (Gt(n, t) || ((n = e1()), (Se.lanes |= n), (Ar |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pt = !0)), (e.memoizedState = n));
}
function ox(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ca.transition;
  ca.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (ca.transition = r);
  }
}
function Z1() {
  return Nt().memoizedState;
}
function sx(e, t, n) {
  var r = er(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    J1(e))
  )
    ey(t, n);
  else if (((n = T1(e, t, n, r)), n !== null)) {
    var i = it();
    Yt(n, e, r, i), ty(n, t, r);
  }
}
function lx(e, t, n) {
  var r = er(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (J1(e)) ey(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Gt(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Kf(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = T1(e, t, i, r)),
      n !== null && ((i = it()), Yt(n, e, r, i), ty(n, t, r));
  }
}
function J1(e) {
  var t = e.alternate;
  return e === Se || (t !== null && t === Se);
}
function ey(e, t) {
  co = Pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ty(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Df(e, n);
  }
}
var Ol = {
    readContext: jt,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useInsertionEffect: Ge,
    useLayoutEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useMutableSource: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    unstable_isNewReconciler: !1,
  },
  ux = {
    readContext: jt,
    useCallback: function (e, t) {
      return (rn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: jt,
    useEffect: Gp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Is(4194308, 4, q1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Is(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Is(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = rn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = sx.bind(null, Se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Kp,
    useDebugValue: id,
    useDeferredValue: function (e) {
      return (rn().memoizedState = e);
    },
    useTransition: function () {
      var e = Kp(!1),
        t = e[0];
      return (e = ox.bind(null, e[1])), (rn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Se,
        i = rn();
      if (we) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), Ne === null)) throw Error(M(349));
        Fr & 30 || I1(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Gp(B1.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Lo(9, z1.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rn(),
        t = Ne.identifierPrefix;
      if (we) {
        var n = Sn,
          r = xn;
        (n = (r & ~(1 << (32 - qt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ix++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ax = {
    readContext: jt,
    useCallback: K1,
    useContext: jt,
    useEffect: rd,
    useImperativeHandle: Y1,
    useInsertionEffect: W1,
    useLayoutEffect: Q1,
    useMemo: G1,
    useReducer: fa,
    useRef: H1,
    useState: function () {
      return fa(Ao);
    },
    useDebugValue: id,
    useDeferredValue: function (e) {
      var t = Nt();
      return X1(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = fa(Ao)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: j1,
    useSyncExternalStore: N1,
    useId: Z1,
    unstable_isNewReconciler: !1,
  },
  cx = {
    readContext: jt,
    useCallback: K1,
    useContext: jt,
    useEffect: rd,
    useImperativeHandle: Y1,
    useInsertionEffect: W1,
    useLayoutEffect: Q1,
    useMemo: G1,
    useReducer: da,
    useRef: H1,
    useState: function () {
      return da(Ao);
    },
    useDebugValue: id,
    useDeferredValue: function (e) {
      var t = Nt();
      return Fe === null ? (t.memoizedState = e) : X1(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = da(Ao)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: j1,
    useSyncExternalStore: N1,
    useId: Z1,
    unstable_isNewReconciler: !1,
  };
function gi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += N2(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function pa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _c(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fx = typeof WeakMap == "function" ? WeakMap : Map;
function ny(e, t, n) {
  (n = kn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $l || (($l = !0), (Mc = r)), _c(e, t);
    }),
    n
  );
}
function ry(e, t, n) {
  (n = kn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        _c(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        _c(e, t),
          typeof r != "function" &&
            (Jn === null ? (Jn = new Set([this])) : Jn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Xp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fx();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Rx.bind(null, e, t, n)), t.then(e, e));
}
function Zp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Jp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = kn(-1, 1)), (t.tag = 2), Zn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dx = Tn.ReactCurrentOwner,
  pt = !1;
function tt(e, t, n, r) {
  t.child = e === null ? D1(t, null, n, r) : mi(t, e.child, n, r);
}
function eh(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ai(t, i),
    (r = td(e, t, n, r, o, i)),
    (n = nd()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        bn(e, t, i))
      : (we && n && Vf(t), (t.flags |= 1), tt(e, t, r, i), t.child)
  );
}
function th(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !dd(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), iy(e, t, o, r, i))
      : ((e = Vs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : _o), n(s, r) && e.ref === t.ref)
    )
      return bn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = tr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function iy(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (_o(o, r) && e.ref === t.ref)
      if (((pt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (pt = !0);
      else return (t.lanes = e.lanes), bn(e, t, i);
  }
  return bc(e, t, n, r, i);
}
function oy(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(ni, wt),
        (wt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          de(ni, wt),
          (wt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        de(ni, wt),
        (wt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      de(ni, wt),
      (wt |= r);
  return tt(e, t, i, n), t.child;
}
function sy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bc(e, t, n, r, i) {
  var o = mt(n) ? Tr : et.current;
  return (
    (o = pi(t, o)),
    ai(t, i),
    (n = td(e, t, n, r, o, i)),
    (r = nd()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        bn(e, t, i))
      : (we && r && Vf(t), (t.flags |= 1), tt(e, t, n, i), t.child)
  );
}
function nh(e, t, n, r, i) {
  if (mt(n)) {
    var o = !0;
    Sl(t);
  } else o = !1;
  if ((ai(t, i), t.stateNode === null))
    zs(e, t), A1(t, n, r), Rc(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = jt(a))
      : ((a = mt(n) ? Tr : et.current), (a = pi(t, a)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== a) && qp(t, s, r, a)),
      (In = !1);
    var p = t.memoizedState;
    (s.state = p),
      _l(t, r, s, i),
      (u = t.memoizedState),
      l !== r || p !== u || ht.current || In
        ? (typeof c == "function" && (Ec(t, n, c, r), (u = t.memoizedState)),
          (l = In || Qp(t, n, l, r, p, u, a))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = a),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      $1(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : Ut(t.type, l)),
      (s.props = a),
      (d = t.pendingProps),
      (p = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = jt(u))
        : ((u = mt(n) ? Tr : et.current), (u = pi(t, u)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || p !== u) && qp(t, s, r, u)),
      (In = !1),
      (p = t.memoizedState),
      (s.state = p),
      _l(t, r, s, i);
    var g = t.memoizedState;
    l !== d || p !== g || ht.current || In
      ? (typeof v == "function" && (Ec(t, n, v, r), (g = t.memoizedState)),
        (a = In || Qp(t, n, a, r, p, g, u) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = u),
        (r = a))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pc(e, t, n, r, o, i);
}
function Pc(e, t, n, r, i, o) {
  sy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Bp(t, n, !1), bn(e, t, o);
  (r = t.stateNode), (dx.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = mi(t, e.child, null, o)), (t.child = mi(t, null, l, o)))
      : tt(e, t, l, o),
    (t.memoizedState = r.state),
    i && Bp(t, n, !0),
    t.child
  );
}
function ly(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zp(e, t.context, !1),
    Xf(e, t.containerInfo);
}
function rh(e, t, n, r, i) {
  return hi(), Wf(i), (t.flags |= 256), tt(e, t, n, r), t.child;
}
var Oc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function uy(e, t, n) {
  var r = t.pendingProps,
    i = xe.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    de(xe, i & 1),
    e === null)
  )
    return (
      kc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = vu(s, r, 0, null)),
              (e = Pr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Tc(n)),
              (t.memoizedState = Oc),
              e)
            : od(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return px(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = tr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = tr(l, o)) : ((o = Pr(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Tc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = tr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function od(e, t) {
  return (
    (t = vu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gs(e, t, n, r) {
  return (
    r !== null && Wf(r),
    mi(t, e.child, null, n),
    (e = od(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function px(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pa(Error(M(422)))), gs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = vu({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Pr(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && mi(t, e.child, null, s),
        (t.child.memoizedState = Tc(s)),
        (t.memoizedState = Oc),
        o);
  if (!(t.mode & 1)) return gs(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(M(419))), (r = pa(o, r, void 0)), gs(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), pt || l)) {
    if (((r = Ne), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), _n(e, i), Yt(r, e, i, -1));
    }
    return fd(), (r = pa(Error(M(421)))), gs(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _x.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Et = Xn(i.nextSibling)),
      (Rt = t),
      (we = !0),
      (Wt = null),
      e !== null &&
        ((Ft[At++] = xn),
        (Ft[At++] = Sn),
        (Ft[At++] = $r),
        (xn = e.id),
        (Sn = e.overflow),
        ($r = t)),
      (t = od(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ih(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cc(e.return, t, n);
}
function ha(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function ay(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((tt(e, t, r.children, n), (r = xe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ih(e, n, t);
        else if (e.tag === 19) ih(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((de(xe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && bl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ha(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && bl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ha(t, !0, n, null, o);
        break;
      case "together":
        ha(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function bn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ar |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hx(e, t, n) {
  switch (t.tag) {
    case 3:
      ly(t), hi();
      break;
    case 5:
      M1(t);
      break;
    case 1:
      mt(t.type) && Sl(t);
      break;
    case 4:
      Xf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      de(El, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(xe, xe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? uy(e, t, n)
          : (de(xe, xe.current & 1),
            (e = bn(e, t, n)),
            e !== null ? e.sibling : null);
      de(xe, xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ay(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        de(xe, xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), oy(e, t, n);
  }
  return bn(e, t, n);
}
var cy, $c, fy, dy;
cy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
$c = function () {};
fy = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), xr(fn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ja(e, i)), (r = Ja(e, r)), (o = []);
        break;
      case "select":
        (i = ke({}, i, { value: void 0 })),
          (r = ke({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = nc(e, i)), (r = nc(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = wl);
    }
    ic(n, r);
    var s;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var l = i[a];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (wo.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((l = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== l && (u != null || l != null))
      )
        if (a === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (wo.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && he("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
dy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bi(e, t) {
  if (!we)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function mx(e, t, n) {
  var r = t.pendingProps;
  switch ((Hf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Xe(t), null;
    case 1:
      return mt(t.type) && xl(), Xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        yi(),
        ge(ht),
        ge(et),
        Jf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ms(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Wt !== null && (Ic(Wt), (Wt = null)))),
        $c(e, t),
        Xe(t),
        null
      );
    case 5:
      Zf(t);
      var i = xr($o.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fy(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Xe(t), null;
        }
        if (((e = xr(fn.current)), ms(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[sn] = t), (r[Oo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Xi.length; i++) he(Xi[i], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              pp(r, o), he("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                he("invalid", r);
              break;
            case "textarea":
              mp(r, o), he("invalid", r);
          }
          ic(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hs(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hs(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : wo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  he("scroll", r);
            }
          switch (n) {
            case "input":
              ss(r), hp(r, o, !0);
              break;
            case "textarea":
              ss(r), yp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = wl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Im(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[sn] = t),
            (e[Oo] = r),
            cy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = oc(n, r)), n)) {
              case "dialog":
                he("cancel", e), he("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Xi.length; i++) he(Xi[i], e);
                i = r;
                break;
              case "source":
                he("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), (i = r);
                break;
              case "details":
                he("toggle", e), (i = r);
                break;
              case "input":
                pp(e, r), (i = Ja(e, r)), he("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ke({}, r, { value: void 0 })),
                  he("invalid", e);
                break;
              case "textarea":
                mp(e, r), (i = nc(e, r)), he("invalid", e);
                break;
              default:
                i = r;
            }
            ic(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? Um(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && zm(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && xo(e, u)
                    : typeof u == "number" && xo(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (wo.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && he("scroll", e)
                      : u != null && Of(e, o, u, s));
              }
            switch (n) {
              case "input":
                ss(e), hp(e, r, !1);
                break;
              case "textarea":
                ss(e), yp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? oi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      oi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = wl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Xe(t), null;
    case 6:
      if (e && t.stateNode != null) dy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = xr($o.current)), xr(fn.current), ms(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[sn] = t),
            (o = r.nodeValue !== n) && ((e = Rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                hs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[sn] = t),
            (t.stateNode = r);
      }
      return Xe(t), null;
    case 13:
      if (
        (ge(xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && Et !== null && t.mode & 1 && !(t.flags & 128))
          O1(), hi(), (t.flags |= 98560), (o = !1);
        else if (((o = ms(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(M(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(M(317));
            o[sn] = t;
          } else
            hi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Xe(t), (o = !1);
        } else Wt !== null && (Ic(Wt), (Wt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || xe.current & 1 ? Le === 0 && (Le = 3) : fd())),
          t.updateQueue !== null && (t.flags |= 4),
          Xe(t),
          null);
    case 4:
      return (
        yi(), $c(e, t), e === null && bo(t.stateNode.containerInfo), Xe(t), null
      );
    case 10:
      return Yf(t.type._context), Xe(t), null;
    case 17:
      return mt(t.type) && xl(), Xe(t), null;
    case 19:
      if ((ge(xe), (o = t.memoizedState), o === null)) return Xe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Bi(o, !1);
        else {
          if (Le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = bl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Bi(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return de(xe, (xe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            be() > vi &&
            ((t.flags |= 128), (r = !0), Bi(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !we)
            )
              return Xe(t), null;
          } else
            2 * be() - o.renderingStartTime > vi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bi(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = be()),
          (t.sibling = null),
          (n = xe.current),
          de(xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Xe(t), null);
    case 22:
    case 23:
      return (
        cd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? wt & 1073741824 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function yx(e, t) {
  switch ((Hf(t), t.tag)) {
    case 1:
      return (
        mt(t.type) && xl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yi(),
        ge(ht),
        ge(et),
        Jf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Zf(t), null;
    case 13:
      if (
        (ge(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        hi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(xe), null;
    case 4:
      return yi(), null;
    case 10:
      return Yf(t.type._context), null;
    case 22:
    case 23:
      return cd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vs = !1,
  Ze = !1,
  gx = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function ti(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function Fc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var oh = !1;
function vx(e, t) {
  if (((mc = yl), (e = y1()), Uf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            a = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (p = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++a === i && (l = s),
                p === o && ++c === r && (u = s),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = v;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yc = { focusedElem: e, selectionRange: n }, yl = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e);
    else
      for (; U !== null; ) {
        t = U;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var S = g.memoizedProps,
                    _ = g.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Ut(t.type, S),
                      _
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (k) {
          Ee(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (U = e);
          break;
        }
        U = t.return;
      }
  return (g = oh), (oh = !1), g;
}
function fo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Fc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function yu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ac(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function py(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), py(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[sn], delete t[Oo], delete t[wc], delete t[ex], delete t[tx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Lc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = wl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lc(e, t, n), e = e.sibling; e !== null; ) Lc(e, t, n), (e = e.sibling);
}
function Dc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dc(e, t, n), e = e.sibling; e !== null; ) Dc(e, t, n), (e = e.sibling);
}
var Be = null,
  Vt = !1;
function $n(e, t, n) {
  for (n = n.child; n !== null; ) my(e, t, n), (n = n.sibling);
}
function my(e, t, n) {
  if (cn && typeof cn.onCommitFiberUnmount == "function")
    try {
      cn.onCommitFiberUnmount(uu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ze || ti(n, t);
    case 6:
      var r = Be,
        i = Vt;
      (Be = null),
        $n(e, t, n),
        (Be = r),
        (Vt = i),
        Be !== null &&
          (Vt
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null &&
        (Vt
          ? ((e = Be),
            (n = n.stateNode),
            e.nodeType === 8
              ? la(e.parentNode, n)
              : e.nodeType === 1 && la(e, n),
            Eo(e))
          : la(Be, n.stateNode));
      break;
    case 4:
      (r = Be),
        (i = Vt),
        (Be = n.stateNode.containerInfo),
        (Vt = !0),
        $n(e, t, n),
        (Be = r),
        (Vt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Fc(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      $n(e, t, n);
      break;
    case 1:
      if (
        !Ze &&
        (ti(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ee(n, t, l);
        }
      $n(e, t, n);
      break;
    case 21:
      $n(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ze = (r = Ze) || n.memoizedState !== null), $n(e, t, n), (Ze = r))
        : $n(e, t, n);
      break;
    default:
      $n(e, t, n);
  }
}
function lh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gx()),
      t.forEach(function (r) {
        var i = bx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Bt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Be = l.stateNode), (Vt = !1);
              break e;
            case 3:
              (Be = l.stateNode.containerInfo), (Vt = !0);
              break e;
            case 4:
              (Be = l.stateNode.containerInfo), (Vt = !0);
              break e;
          }
          l = l.return;
        }
        if (Be === null) throw Error(M(160));
        my(o, s, i), (Be = null), (Vt = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        Ee(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yy(t, e), (t = t.sibling);
}
function yy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bt(t, e), Jt(e), r & 4)) {
        try {
          fo(3, e, e.return), yu(3, e);
        } catch (S) {
          Ee(e, e.return, S);
        }
        try {
          fo(5, e, e.return);
        } catch (S) {
          Ee(e, e.return, S);
        }
      }
      break;
    case 1:
      Bt(t, e), Jt(e), r & 512 && n !== null && ti(n, n.return);
      break;
    case 5:
      if (
        (Bt(t, e),
        Jt(e),
        r & 512 && n !== null && ti(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          xo(i, "");
        } catch (S) {
          Ee(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && jm(i, o),
              oc(l, s);
            var a = oc(l, o);
            for (s = 0; s < u.length; s += 2) {
              var c = u[s],
                d = u[s + 1];
              c === "style"
                ? Um(i, d)
                : c === "dangerouslySetInnerHTML"
                ? zm(i, d)
                : c === "children"
                ? xo(i, d)
                : Of(i, c, d, a);
            }
            switch (l) {
              case "input":
                ec(i, o);
                break;
              case "textarea":
                Nm(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? oi(i, !!o.multiple, v, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? oi(i, !!o.multiple, o.defaultValue, !0)
                      : oi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Oo] = o;
          } catch (S) {
            Ee(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Bt(t, e), Jt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (S) {
          Ee(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Bt(t, e), Jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Eo(t.containerInfo);
        } catch (S) {
          Ee(e, e.return, S);
        }
      break;
    case 4:
      Bt(t, e), Jt(e);
      break;
    case 13:
      Bt(t, e),
        Jt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ud = be())),
        r & 4 && lh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ze = (a = Ze) || c), Bt(t, e), (Ze = a)) : Bt(t, e),
        Jt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (U = e, c = e.child; c !== null; ) {
            for (d = U = c; U !== null; ) {
              switch (((p = U), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fo(4, p, p.return);
                  break;
                case 1:
                  ti(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (S) {
                      Ee(r, n, S);
                    }
                  }
                  break;
                case 5:
                  ti(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ah(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (U = v)) : ah(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = d.stateNode),
                      (u = d.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = Bm("display", s)));
              } catch (S) {
                Ee(e, e.return, S);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (S) {
                Ee(e, e.return, S);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Bt(t, e), Jt(e), r & 4 && lh(e);
      break;
    case 21:
      break;
    default:
      Bt(t, e), Jt(e);
  }
}
function Jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (xo(i, ""), (r.flags &= -33));
          var o = sh(e);
          Dc(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = sh(e);
          Lc(e, l, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (u) {
      Ee(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wx(e, t, n) {
  (U = e), gy(e);
}
function gy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var i = U,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || vs;
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || Ze;
        l = vs;
        var a = Ze;
        if (((vs = s), (Ze = u) && !a))
          for (U = i; U !== null; )
            (s = U),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ch(i)
                : u !== null
                ? ((u.return = s), (U = u))
                : ch(i);
        for (; o !== null; ) (U = o), gy(o), (o = o.sibling);
        (U = i), (vs = l), (Ze = a);
      }
      uh(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (U = o)) : uh(e);
  }
}
function uh(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ze || yu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ze)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Wp(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wp(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Eo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        Ze || (t.flags & 512 && Ac(t));
      } catch (p) {
        Ee(t, t.return, p);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function ah(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function ch(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yu(4, t);
          } catch (u) {
            Ee(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ee(t, i, u);
            }
          }
          var o = t.return;
          try {
            Ac(t);
          } catch (u) {
            Ee(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ac(t);
          } catch (u) {
            Ee(t, s, u);
          }
      }
    } catch (u) {
      Ee(t, t.return, u);
    }
    if (t === e) {
      U = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (U = l);
      break;
    }
    U = t.return;
  }
}
var xx = Math.ceil,
  Tl = Tn.ReactCurrentDispatcher,
  sd = Tn.ReactCurrentOwner,
  Dt = Tn.ReactCurrentBatchConfig,
  oe = 0,
  Ne = null,
  Te = null,
  Ve = 0,
  wt = 0,
  ni = lr(0),
  Le = 0,
  Do = null,
  Ar = 0,
  gu = 0,
  ld = 0,
  po = null,
  dt = null,
  ud = 0,
  vi = 1 / 0,
  gn = null,
  $l = !1,
  Mc = null,
  Jn = null,
  ws = !1,
  Hn = null,
  Fl = 0,
  ho = 0,
  jc = null,
  Bs = -1,
  Us = 0;
function it() {
  return oe & 6 ? be() : Bs !== -1 ? Bs : (Bs = be());
}
function er(e) {
  return e.mode & 1
    ? oe & 2 && Ve !== 0
      ? Ve & -Ve
      : rx.transition !== null
      ? (Us === 0 && (Us = e1()), Us)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : l1(e.type))),
        e)
    : 1;
}
function Yt(e, t, n, r) {
  if (50 < ho) throw ((ho = 0), (jc = null), Error(M(185)));
  Yo(e, n, r),
    (!(oe & 2) || e !== Ne) &&
      (e === Ne && (!(oe & 2) && (gu |= n), Le === 4 && Un(e, Ve)),
      yt(e, r),
      n === 1 && oe === 0 && !(t.mode & 1) && ((vi = be() + 500), pu && ur()));
}
function yt(e, t) {
  var n = e.callbackNode;
  rw(e, t);
  var r = ml(e, e === Ne ? Ve : 0);
  if (r === 0)
    n !== null && wp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wp(n), t === 1))
      e.tag === 0 ? nx(fh.bind(null, e)) : _1(fh.bind(null, e)),
        Zw(function () {
          !(oe & 6) && ur();
        }),
        (n = null);
    else {
      switch (t1(r)) {
        case 1:
          n = Lf;
          break;
        case 4:
          n = Zm;
          break;
        case 16:
          n = hl;
          break;
        case 536870912:
          n = Jm;
          break;
        default:
          n = hl;
      }
      n = Ry(n, vy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vy(e, t) {
  if (((Bs = -1), (Us = 0), oe & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (ci() && e.callbackNode !== n) return null;
  var r = ml(e, e === Ne ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Al(e, r);
  else {
    t = r;
    var i = oe;
    oe |= 2;
    var o = xy();
    (Ne !== e || Ve !== t) && ((gn = null), (vi = be() + 500), br(e, t));
    do
      try {
        Cx();
        break;
      } catch (l) {
        wy(e, l);
      }
    while (1);
    qf(),
      (Tl.current = o),
      (oe = i),
      Te !== null ? (t = 0) : ((Ne = null), (Ve = 0), (t = Le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = cc(e)), i !== 0 && ((r = i), (t = Nc(e, i)))), t === 1)
    )
      throw ((n = Do), br(e, 0), Un(e, r), yt(e, be()), n);
    if (t === 6) Un(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Sx(i) &&
          ((t = Al(e, r)),
          t === 2 && ((o = cc(e)), o !== 0 && ((r = o), (t = Nc(e, o)))),
          t === 1))
      )
        throw ((n = Do), br(e, 0), Un(e, r), yt(e, be()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          fr(e, dt, gn);
          break;
        case 3:
          if (
            (Un(e, r), (r & 130023424) === r && ((t = ud + 500 - be()), 10 < t))
          ) {
            if (ml(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              it(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = vc(fr.bind(null, e, dt, gn), t);
            break;
          }
          fr(e, dt, gn);
          break;
        case 4:
          if ((Un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - qt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = be() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * xx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vc(fr.bind(null, e, dt, gn), r);
            break;
          }
          fr(e, dt, gn);
          break;
        case 5:
          fr(e, dt, gn);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return yt(e, be()), e.callbackNode === n ? vy.bind(null, e) : null;
}
function Nc(e, t) {
  var n = po;
  return (
    e.current.memoizedState.isDehydrated && (br(e, t).flags |= 256),
    (e = Al(e, t)),
    e !== 2 && ((t = dt), (dt = n), t !== null && Ic(t)),
    e
  );
}
function Ic(e) {
  dt === null ? (dt = e) : dt.push.apply(dt, e);
}
function Sx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Gt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Un(e, t) {
  for (
    t &= ~ld,
      t &= ~gu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fh(e) {
  if (oe & 6) throw Error(M(327));
  ci();
  var t = ml(e, 0);
  if (!(t & 1)) return yt(e, be()), null;
  var n = Al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = cc(e);
    r !== 0 && ((t = r), (n = Nc(e, r)));
  }
  if (n === 1) throw ((n = Do), br(e, 0), Un(e, t), yt(e, be()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    fr(e, dt, gn),
    yt(e, be()),
    null
  );
}
function ad(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    (oe = n), oe === 0 && ((vi = be() + 500), pu && ur());
  }
}
function Lr(e) {
  Hn !== null && Hn.tag === 0 && !(oe & 6) && ci();
  var t = oe;
  oe |= 1;
  var n = Dt.transition,
    r = ue;
  try {
    if (((Dt.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), (Dt.transition = n), (oe = t), !(oe & 6) && ur();
  }
}
function cd() {
  (wt = ni.current), ge(ni);
}
function br(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Xw(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((Hf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && xl();
          break;
        case 3:
          yi(), ge(ht), ge(et), Jf();
          break;
        case 5:
          Zf(r);
          break;
        case 4:
          yi();
          break;
        case 13:
          ge(xe);
          break;
        case 19:
          ge(xe);
          break;
        case 10:
          Yf(r.type._context);
          break;
        case 22:
        case 23:
          cd();
      }
      n = n.return;
    }
  if (
    ((Ne = e),
    (Te = e = tr(e.current, null)),
    (Ve = wt = t),
    (Le = 0),
    (Do = null),
    (ld = gu = Ar = 0),
    (dt = po = null),
    wr !== null)
  ) {
    for (t = 0; t < wr.length; t++)
      if (((n = wr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    wr = null;
  }
  return e;
}
function wy(e, t) {
  do {
    var n = Te;
    try {
      if ((qf(), (Ns.current = Ol), Pl)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Pl = !1;
      }
      if (
        ((Fr = 0),
        (Me = Fe = Se = null),
        (co = !1),
        (Fo = 0),
        (sd.current = null),
        n === null || n.return === null)
      ) {
        (Le = 1), (Do = t), (Te = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = Ve),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Zp(s);
          if (v !== null) {
            (v.flags &= -257),
              Jp(v, s, l, o, t),
              v.mode & 1 && Xp(o, a, t),
              (t = v),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Xp(o, a, t), fd();
              break e;
            }
            u = Error(M(426));
          }
        } else if (we && l.mode & 1) {
          var _ = Zp(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Jp(_, s, l, o, t),
              Wf(gi(u, l));
            break e;
          }
        }
        (o = u = gi(u, l)),
          Le !== 4 && (Le = 2),
          po === null ? (po = [o]) : po.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = ny(o, u, t);
              Hp(o, h);
              break e;
            case 1:
              l = u;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Jn === null || !Jn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = ry(o, l, t);
                Hp(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ky(n);
    } catch (E) {
      (t = E), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function xy() {
  var e = Tl.current;
  return (Tl.current = Ol), e === null ? Ol : e;
}
function fd() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
    Ne === null || (!(Ar & 268435455) && !(gu & 268435455)) || Un(Ne, Ve);
}
function Al(e, t) {
  var n = oe;
  oe |= 2;
  var r = xy();
  (Ne !== e || Ve !== t) && ((gn = null), br(e, t));
  do
    try {
      kx();
      break;
    } catch (i) {
      wy(e, i);
    }
  while (1);
  if ((qf(), (oe = n), (Tl.current = r), Te !== null)) throw Error(M(261));
  return (Ne = null), (Ve = 0), Le;
}
function kx() {
  for (; Te !== null; ) Sy(Te);
}
function Cx() {
  for (; Te !== null && !Y2(); ) Sy(Te);
}
function Sy(e) {
  var t = Ey(e.alternate, e, wt);
  (e.memoizedProps = e.pendingProps),
    t === null ? ky(e) : (Te = t),
    (sd.current = null);
}
function ky(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yx(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Le = 6), (Te = null);
        return;
      }
    } else if (((n = mx(n, t, wt)), n !== null)) {
      Te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function fr(e, t, n) {
  var r = ue,
    i = Dt.transition;
  try {
    (Dt.transition = null), (ue = 1), Ex(e, t, n, r);
  } finally {
    (Dt.transition = i), (ue = r);
  }
  return null;
}
function Ex(e, t, n, r) {
  do ci();
  while (Hn !== null);
  if (oe & 6) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (iw(e, o),
    e === Ne && ((Te = Ne = null), (Ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ws ||
      ((ws = !0),
      Ry(hl, function () {
        return ci(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Dt.transition), (Dt.transition = null);
    var s = ue;
    ue = 1;
    var l = oe;
    (oe |= 4),
      (sd.current = null),
      vx(e, n),
      yy(n, e),
      Hw(yc),
      (yl = !!mc),
      (yc = mc = null),
      (e.current = n),
      wx(n),
      K2(),
      (oe = l),
      (ue = s),
      (Dt.transition = o);
  } else e.current = n;
  if (
    (ws && ((ws = !1), (Hn = e), (Fl = i)),
    (o = e.pendingLanes),
    o === 0 && (Jn = null),
    Z2(n.stateNode),
    yt(e, be()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if ($l) throw (($l = !1), (e = Mc), (Mc = null), e);
  return (
    Fl & 1 && e.tag !== 0 && ci(),
    (o = e.pendingLanes),
    o & 1 ? (e === jc ? ho++ : ((ho = 0), (jc = e))) : (ho = 0),
    ur(),
    null
  );
}
function ci() {
  if (Hn !== null) {
    var e = t1(Fl),
      t = Dt.transition,
      n = ue;
    try {
      if (((Dt.transition = null), (ue = 16 > e ? 16 : e), Hn === null))
        var r = !1;
      else {
        if (((e = Hn), (Hn = null), (Fl = 0), oe & 6)) throw Error(M(331));
        var i = oe;
        for (oe |= 4, U = e.current; U !== null; ) {
          var o = U,
            s = o.child;
          if (U.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u];
                for (U = a; U !== null; ) {
                  var c = U;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fo(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (U = d);
                  else
                    for (; U !== null; ) {
                      c = U;
                      var p = c.sibling,
                        v = c.return;
                      if ((py(c), c === a)) {
                        U = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (U = p);
                        break;
                      }
                      U = v;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var _ = S.sibling;
                    (S.sibling = null), (S = _);
                  } while (S !== null);
                }
              }
              U = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (U = s);
          else
            e: for (; U !== null; ) {
              if (((o = U), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fo(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (U = h);
                break e;
              }
              U = o.return;
            }
        }
        var f = e.current;
        for (U = f; U !== null; ) {
          s = U;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (U = m);
          else
            e: for (s = f; U !== null; ) {
              if (((l = U), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yu(9, l);
                  }
                } catch (E) {
                  Ee(l, l.return, E);
                }
              if (l === s) {
                U = null;
                break e;
              }
              var k = l.sibling;
              if (k !== null) {
                (k.return = l.return), (U = k);
                break e;
              }
              U = l.return;
            }
        }
        if (
          ((oe = i), ur(), cn && typeof cn.onPostCommitFiberRoot == "function")
        )
          try {
            cn.onPostCommitFiberRoot(uu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), (Dt.transition = t);
    }
  }
  return !1;
}
function dh(e, t, n) {
  (t = gi(n, t)),
    (t = ny(e, t, 1)),
    (e = Zn(e, t, 1)),
    (t = it()),
    e !== null && (Yo(e, 1, t), yt(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) dh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Jn === null || !Jn.has(r)))
        ) {
          (e = gi(n, e)),
            (e = ry(t, e, 1)),
            (t = Zn(t, e, 1)),
            (e = it()),
            t !== null && (Yo(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Rx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = it()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      (Ve & n) === n &&
      (Le === 4 || (Le === 3 && (Ve & 130023424) === Ve && 500 > be() - ud)
        ? br(e, 0)
        : (ld |= n)),
    yt(e, t);
}
function Cy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = as), (as <<= 1), !(as & 130023424) && (as = 4194304))
      : (t = 1));
  var n = it();
  (e = _n(e, t)), e !== null && (Yo(e, t, n), yt(e, n));
}
function _x(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cy(e, n);
}
function bx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), Cy(e, n);
}
var Ey;
Ey = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current) pt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pt = !1), hx(e, t, n);
      pt = !!(e.flags & 131072);
    }
  else (pt = !1), we && t.flags & 1048576 && b1(t, Cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zs(e, t), (e = t.pendingProps);
      var i = pi(t, et.current);
      ai(t, n), (i = td(null, t, r, e, i, n));
      var o = nd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mt(r) ? ((o = !0), Sl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Gf(t),
            (i.updater = hu),
            (t.stateNode = i),
            (i._reactInternals = t),
            Rc(t, r, e, n),
            (t = Pc(null, t, r, !0, o, n)))
          : ((t.tag = 0), we && o && Vf(t), tt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ox(r)),
          (e = Ut(r, e)),
          i)
        ) {
          case 0:
            t = bc(null, t, r, e, n);
            break e;
          case 1:
            t = nh(null, t, r, e, n);
            break e;
          case 11:
            t = eh(null, t, r, e, n);
            break e;
          case 14:
            t = th(null, t, r, Ut(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ut(r, i)),
        bc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ut(r, i)),
        nh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ly(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          $1(e, t),
          _l(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = gi(Error(M(423)), t)), (t = rh(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = gi(Error(M(424)), t)), (t = rh(e, t, r, n, i));
            break e;
          } else
            for (
              Et = Xn(t.stateNode.containerInfo.firstChild),
                Rt = t,
                we = !0,
                Wt = null,
                n = D1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hi(), r === i)) {
            t = bn(e, t, n);
            break e;
          }
          tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        M1(t),
        e === null && kc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        gc(r, i) ? (s = null) : o !== null && gc(r, o) && (t.flags |= 32),
        sy(e, t),
        tt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && kc(t), null;
    case 13:
      return uy(e, t, n);
    case 4:
      return (
        Xf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mi(t, null, r, n)) : tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ut(r, i)),
        eh(e, t, r, i, n)
      );
    case 7:
      return tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          de(El, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Gt(o.value, s)) {
            if (o.children === i.children && !ht.current) {
              t = bn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = kn(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Cc(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(M(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Cc(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        tt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ai(t, n),
        (i = jt(i)),
        (r = r(i)),
        (t.flags |= 1),
        tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ut(r, t.pendingProps)),
        (i = Ut(r.type, i)),
        th(e, t, r, i, n)
      );
    case 15:
      return iy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ut(r, i)),
        zs(e, t),
        (t.tag = 1),
        mt(r) ? ((e = !0), Sl(t)) : (e = !1),
        ai(t, n),
        A1(t, r, i),
        Rc(t, r, i, n),
        Pc(null, t, r, !0, e, n)
      );
    case 19:
      return ay(e, t, n);
    case 22:
      return oy(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Ry(e, t) {
  return Xm(e, t);
}
function Px(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Lt(e, t, n, r) {
  return new Px(e, t, n, r);
}
function dd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ox(e) {
  if (typeof e == "function") return dd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $f)) return 11;
    if (e === Ff) return 14;
  }
  return 2;
}
function tr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vs(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) dd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Qr:
        return Pr(n.children, i, o, t);
      case Tf:
        (s = 8), (i |= 8);
        break;
      case Ka:
        return (
          (e = Lt(12, n, t, i | 2)), (e.elementType = Ka), (e.lanes = o), e
        );
      case Ga:
        return (e = Lt(13, n, t, i)), (e.elementType = Ga), (e.lanes = o), e;
      case Xa:
        return (e = Lt(19, n, t, i)), (e.elementType = Xa), (e.lanes = o), e;
      case Lm:
        return vu(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Fm:
              s = 10;
              break e;
            case Am:
              s = 9;
              break e;
            case $f:
              s = 11;
              break e;
            case Ff:
              s = 14;
              break e;
            case Nn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Lt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Pr(e, t, n, r) {
  return (e = Lt(7, e, r, t)), (e.lanes = n), e;
}
function vu(e, t, n, r) {
  return (
    (e = Lt(22, e, r, t)),
    (e.elementType = Lm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ma(e, t, n) {
  return (e = Lt(6, e, null, t)), (e.lanes = n), e;
}
function ya(e, t, n) {
  return (
    (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tx(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gu(0)),
    (this.expirationTimes = Gu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function pd(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new Tx(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Lt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gf(o),
    e
  );
}
function $x(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _y(e) {
  if (!e) return ir;
  e = e._reactInternals;
  e: {
    if (jr(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (mt(n)) return R1(e, n, t);
  }
  return t;
}
function by(e, t, n, r, i, o, s, l, u) {
  return (
    (e = pd(n, r, !0, e, i, o, s, l, u)),
    (e.context = _y(null)),
    (n = e.current),
    (r = it()),
    (i = er(n)),
    (o = kn(r, i)),
    (o.callback = t ?? null),
    Zn(n, o, i),
    (e.current.lanes = i),
    Yo(e, i, r),
    yt(e, r),
    e
  );
}
function wu(e, t, n, r) {
  var i = t.current,
    o = it(),
    s = er(i);
  return (
    (n = _y(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = kn(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zn(i, t, s)),
    e !== null && (Yt(e, i, s, o), js(e, i, s)),
    s
  );
}
function Ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ph(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hd(e, t) {
  ph(e, t), (e = e.alternate) && ph(e, t);
}
function Fx() {
  return null;
}
var Py =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function md(e) {
  this._internalRoot = e;
}
xu.prototype.render = md.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  wu(e, t, null, null);
};
xu.prototype.unmount = md.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lr(function () {
      wu(null, e, null, null);
    }),
      (t[Rn] = null);
  }
};
function xu(e) {
  this._internalRoot = e;
}
xu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = i1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bn.length && t !== 0 && t < Bn[n].priority; n++);
    Bn.splice(n, 0, e), n === 0 && s1(e);
  }
};
function yd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Su(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hh() {}
function Ax(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Ll(s);
        o.call(a);
      };
    }
    var s = by(t, r, e, 0, null, !1, !1, "", hh);
    return (
      (e._reactRootContainer = s),
      (e[Rn] = s.current),
      bo(e.nodeType === 8 ? e.parentNode : e),
      Lr(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var a = Ll(u);
      l.call(a);
    };
  }
  var u = pd(e, 0, !1, null, null, !1, !1, "", hh);
  return (
    (e._reactRootContainer = u),
    (e[Rn] = u.current),
    bo(e.nodeType === 8 ? e.parentNode : e),
    Lr(function () {
      wu(t, u, n, r);
    }),
    u
  );
}
function ku(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = Ll(s);
        l.call(u);
      };
    }
    wu(t, s, e, i);
  } else s = Ax(n, t, e, i, r);
  return Ll(s);
}
n1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gi(t.pendingLanes);
        n !== 0 &&
          (Df(t, n | 1), yt(t, be()), !(oe & 6) && ((vi = be() + 500), ur()));
      }
      break;
    case 13:
      Lr(function () {
        var r = _n(e, 1);
        if (r !== null) {
          var i = it();
          Yt(r, e, 1, i);
        }
      }),
        hd(e, 1);
  }
};
Mf = function (e) {
  if (e.tag === 13) {
    var t = _n(e, 134217728);
    if (t !== null) {
      var n = it();
      Yt(t, e, 134217728, n);
    }
    hd(e, 134217728);
  }
};
r1 = function (e) {
  if (e.tag === 13) {
    var t = er(e),
      n = _n(e, t);
    if (n !== null) {
      var r = it();
      Yt(n, e, t, r);
    }
    hd(e, t);
  }
};
i1 = function () {
  return ue;
};
o1 = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
lc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ec(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = du(r);
            if (!i) throw Error(M(90));
            Mm(r), ec(r, i);
          }
        }
      }
      break;
    case "textarea":
      Nm(e, n);
      break;
    case "select":
      (t = n.value), t != null && oi(e, !!n.multiple, t, !1);
  }
};
Wm = ad;
Qm = Lr;
var Lx = { usingClientEntryPoint: !1, Events: [Go, Gr, du, Vm, Hm, ad] },
  Ui = {
    findFiberByHostInstance: vr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Dx = {
    bundleType: Ui.bundleType,
    version: Ui.version,
    rendererPackageName: Ui.rendererPackageName,
    rendererConfig: Ui.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Km(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ui.findFiberByHostInstance || Fx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xs.isDisabled && xs.supportsFiber)
    try {
      (uu = xs.inject(Dx)), (cn = xs);
    } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lx;
bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yd(t)) throw Error(M(200));
  return $x(e, t, null, n);
};
bt.createRoot = function (e, t) {
  if (!yd(e)) throw Error(M(299));
  var n = !1,
    r = "",
    i = Py;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = pd(e, 1, !1, null, null, n, !1, r, i)),
    (e[Rn] = t.current),
    bo(e.nodeType === 8 ? e.parentNode : e),
    new md(t)
  );
};
bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = Km(t)), (e = e === null ? null : e.stateNode), e;
};
bt.flushSync = function (e) {
  return Lr(e);
};
bt.hydrate = function (e, t, n) {
  if (!Su(t)) throw Error(M(200));
  return ku(null, e, t, !0, n);
};
bt.hydrateRoot = function (e, t, n) {
  if (!yd(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Py;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = by(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Rn] = t.current),
    bo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new xu(t);
};
bt.render = function (e, t, n) {
  if (!Su(t)) throw Error(M(200));
  return ku(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function (e) {
  if (!Su(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (Lr(function () {
        ku(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rn] = null);
        });
      }),
      !0)
    : !1;
};
bt.unstable_batchedUpdates = ad;
bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Su(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return ku(e, t, n, !1, r);
};
bt.version = "18.2.0-next-9e3b772b8-20220608";
function Oy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oy);
    } catch (e) {
      console.error(e);
    }
}
Oy(), (bm.exports = bt);
var Mx = bm.exports,
  mh = Mx;
(qa.createRoot = mh.createRoot), (qa.hydrateRoot = mh.hydrateRoot);
var Je = function () {
  return (
    (Je =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    Je.apply(this, arguments)
  );
};
function Mo(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var me = "-ms-",
  mo = "-moz-",
  se = "-webkit-",
  Ty = "comm",
  Cu = "rule",
  gd = "decl",
  jx = "@import",
  $y = "@keyframes",
  Nx = "@layer",
  Ix = Math.abs,
  vd = String.fromCharCode,
  zc = Object.assign;
function zx(e, t) {
  return je(e, 0) ^ 45
    ? (((((((t << 2) ^ je(e, 0)) << 2) ^ je(e, 1)) << 2) ^ je(e, 2)) << 2) ^
        je(e, 3)
    : 0;
}
function Fy(e) {
  return e.trim();
}
function vn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, n) {
  return e.replace(t, n);
}
function Hs(e, t) {
  return e.indexOf(t);
}
function je(e, t) {
  return e.charCodeAt(t) | 0;
}
function wi(e, t, n) {
  return e.slice(t, n);
}
function on(e) {
  return e.length;
}
function Ay(e) {
  return e.length;
}
function Zi(e, t) {
  return t.push(e), e;
}
function Bx(e, t) {
  return e.map(t).join("");
}
function yh(e, t) {
  return e.filter(function (n) {
    return !vn(n, t);
  });
}
var Eu = 1,
  xi = 1,
  Ly = 0,
  It = 0,
  Oe = 0,
  Oi = "";
function Ru(e, t, n, r, i, o, s, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Eu,
    column: xi,
    length: s,
    return: "",
    siblings: l,
  };
}
function Ln(e, t) {
  return zc(
    Ru("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Br(e) {
  for (; e.root; ) e = Ln(e.root, { children: [e] });
  Zi(e, e.siblings);
}
function Ux() {
  return Oe;
}
function Vx() {
  return (
    (Oe = It > 0 ? je(Oi, --It) : 0), xi--, Oe === 10 && ((xi = 1), Eu--), Oe
  );
}
function Kt() {
  return (
    (Oe = It < Ly ? je(Oi, It++) : 0), xi++, Oe === 10 && ((xi = 1), Eu++), Oe
  );
}
function Or() {
  return je(Oi, It);
}
function Ws() {
  return It;
}
function _u(e, t) {
  return wi(Oi, e, t);
}
function Bc(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Hx(e) {
  return (Eu = xi = 1), (Ly = on((Oi = e))), (It = 0), [];
}
function Wx(e) {
  return (Oi = ""), e;
}
function ga(e) {
  return Fy(_u(It - 1, Uc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qx(e) {
  for (; (Oe = Or()) && Oe < 33; ) Kt();
  return Bc(e) > 2 || Bc(Oe) > 3 ? "" : " ";
}
function qx(e, t) {
  for (
    ;
    --t &&
    Kt() &&
    !(Oe < 48 || Oe > 102 || (Oe > 57 && Oe < 65) || (Oe > 70 && Oe < 97));

  );
  return _u(e, Ws() + (t < 6 && Or() == 32 && Kt() == 32));
}
function Uc(e) {
  for (; Kt(); )
    switch (Oe) {
      case e:
        return It;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Uc(Oe);
        break;
      case 40:
        e === 41 && Uc(e);
        break;
      case 92:
        Kt();
        break;
    }
  return It;
}
function Yx(e, t) {
  for (; Kt() && e + Oe !== 47 + 10; )
    if (e + Oe === 42 + 42 && Or() === 47) break;
  return "/*" + _u(t, It - 1) + "*" + vd(e === 47 ? e : Kt());
}
function Kx(e) {
  for (; !Bc(Or()); ) Kt();
  return _u(e, It);
}
function Gx(e) {
  return Wx(Qs("", null, null, null, [""], (e = Hx(e)), 0, [0], e));
}
function Qs(e, t, n, r, i, o, s, l, u) {
  for (
    var a = 0,
      c = 0,
      d = s,
      p = 0,
      v = 0,
      g = 0,
      S = 1,
      _ = 1,
      h = 1,
      f = 0,
      m = "",
      k = i,
      E = o,
      P = r,
      R = m;
    _;

  )
    switch (((g = f), (f = Kt()))) {
      case 40:
        if (g != 108 && je(R, d - 1) == 58) {
          Hs((R += ee(ga(f), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += ga(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Qx(g);
        break;
      case 92:
        R += qx(Ws() - 1, 7);
        continue;
      case 47:
        switch (Or()) {
          case 42:
          case 47:
            Zi(Xx(Yx(Kt(), Ws()), t, n, u), u);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * S:
        l[a++] = on(R) * h;
      case 125 * S:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            _ = 0;
          case 59 + c:
            h == -1 && (R = ee(R, /\f/g, "")),
              v > 0 &&
                on(R) - d &&
                Zi(
                  v > 32
                    ? vh(R + ";", r, n, d - 1, u)
                    : vh(ee(R, " ", "") + ";", r, n, d - 2, u),
                  u
                );
            break;
          case 59:
            R += ";";
          default:
            if (
              (Zi(
                (P = gh(R, t, n, a, c, i, l, m, (k = []), (E = []), d, o)),
                o
              ),
              f === 123)
            )
              if (c === 0) Qs(R, t, P, P, k, o, d, l, E);
              else
                switch (p === 99 && je(R, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qs(
                      e,
                      P,
                      P,
                      r && Zi(gh(e, P, P, 0, 0, i, l, m, i, (k = []), d, E), E),
                      i,
                      E,
                      d,
                      l,
                      r ? k : E
                    );
                    break;
                  default:
                    Qs(R, P, P, P, [""], E, 0, l, E);
                }
        }
        (a = c = v = 0), (S = h = 1), (m = R = ""), (d = s);
        break;
      case 58:
        (d = 1 + on(R)), (v = g);
      default:
        if (S < 1) {
          if (f == 123) --S;
          else if (f == 125 && S++ == 0 && Vx() == 125) continue;
        }
        switch (((R += vd(f)), f * S)) {
          case 38:
            h = c > 0 ? 1 : ((R += "\f"), -1);
            break;
          case 44:
            (l[a++] = (on(R) - 1) * h), (h = 1);
            break;
          case 64:
            Or() === 45 && (R += ga(Kt())),
              (p = Or()),
              (c = d = on((m = R += Kx(Ws())))),
              f++;
            break;
          case 45:
            g === 45 && on(R) == 2 && (S = 0);
        }
    }
  return o;
}
function gh(e, t, n, r, i, o, s, l, u, a, c, d) {
  for (
    var p = i - 1, v = i === 0 ? o : [""], g = Ay(v), S = 0, _ = 0, h = 0;
    S < r;
    ++S
  )
    for (var f = 0, m = wi(e, p + 1, (p = Ix((_ = s[S])))), k = e; f < g; ++f)
      (k = Fy(_ > 0 ? v[f] + " " + m : ee(m, /&\f/g, v[f]))) && (u[h++] = k);
  return Ru(e, t, n, i === 0 ? Cu : l, u, a, c, d);
}
function Xx(e, t, n, r) {
  return Ru(e, t, n, Ty, vd(Ux()), wi(e, 2, -2), 0, r);
}
function vh(e, t, n, r, i) {
  return Ru(e, t, n, gd, wi(e, 0, r), wi(e, r + 1, -1), r, i);
}
function Dy(e, t, n) {
  switch (zx(e, t)) {
    case 5103:
      return se + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + e + e;
    case 4789:
      return mo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + mo + e + me + e + e;
    case 5936:
      switch (je(e, t + 11)) {
        case 114:
          return se + e + me + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + me + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + me + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return se + e + me + e + e;
    case 6165:
      return se + e + me + "flex-" + e + e;
    case 5187:
      return (
        se + e + ee(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + me + "flex-$1$2") + e
      );
    case 5443:
      return (
        se +
        e +
        me +
        "flex-item-" +
        ee(e, /flex-|-self/g, "") +
        (vn(e, /flex-|baseline/)
          ? ""
          : me + "grid-row-" + ee(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        se +
        e +
        me +
        "flex-line-pack" +
        ee(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return se + e + me + ee(e, "shrink", "negative") + e;
    case 5292:
      return se + e + me + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        se +
        "box-" +
        ee(e, "-grow", "") +
        se +
        e +
        me +
        ee(e, "grow", "positive") +
        e
      );
    case 4554:
      return se + ee(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return (
        ee(
          ee(ee(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        se +
        e +
        e
      );
    case 4200:
      if (!vn(e, /flex-|baseline/))
        return me + "grid-column-align" + wi(e, t) + e;
      break;
    case 2592:
    case 3360:
      return me + ee(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), vn(r.props, /grid-\w+-end/);
        })
        ? ~Hs(e + (n = n[t].value), "span")
          ? e
          : me +
            ee(e, "-start", "") +
            e +
            me +
            "grid-row-span:" +
            (~Hs(n, "span") ? vn(n, /\d+/) : +vn(n, /\d+/) - +vn(e, /\d+/)) +
            ";"
        : me + ee(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return vn(r.props, /grid-\w+-start/);
        })
        ? e
        : me + ee(ee(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, se + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (on(e) - 1 - t > 6)
        switch (je(e, t + 1)) {
          case 109:
            if (je(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  se +
                  "$2-$3$1" +
                  mo +
                  (je(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Hs(e, "stretch")
              ? Dy(ee(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return ee(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, s, l, u, a) {
          return (
            me +
            i +
            ":" +
            o +
            a +
            (s ? me + i + "-span:" + (l ? u : +u - +o) + a : "") +
            e
          );
        }
      );
    case 4949:
      if (je(e, t + 6) === 121) return ee(e, ":", ":" + se) + e;
      break;
    case 6444:
      switch (je(e, je(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            ee(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                se +
                (je(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                se +
                "$2$3$1" +
                me +
                "$2box$3"
            ) + e
          );
        case 100:
          return ee(e, ":", ":" + me) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ee(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Dl(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Zx(e, t, n, r) {
  switch (e.type) {
    case Nx:
      if (e.children.length) break;
    case jx:
    case gd:
      return (e.return = e.return || e.value);
    case Ty:
      return "";
    case $y:
      return (e.return = e.value + "{" + Dl(e.children, r) + "}");
    case Cu:
      if (!on((e.value = e.props.join(",")))) return "";
  }
  return on((n = Dl(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Jx(e) {
  var t = Ay(e);
  return function (n, r, i, o) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, i, o) || "";
    return s;
  };
}
function eS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function tS(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case gd:
        e.return = Dy(e.value, e.length, n);
        return;
      case $y:
        return Dl([Ln(e, { value: ee(e.value, "@", "@" + se) })], r);
      case Cu:
        if (e.length)
          return Bx((n = e.props), function (i) {
            switch (vn(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Br(Ln(e, { props: [ee(i, /:(read-\w+)/, ":" + mo + "$1")] })),
                  Br(Ln(e, { props: [i] })),
                  zc(e, { props: yh(n, r) });
                break;
              case "::placeholder":
                Br(
                  Ln(e, { props: [ee(i, /:(plac\w+)/, ":" + se + "input-$1")] })
                ),
                  Br(Ln(e, { props: [ee(i, /:(plac\w+)/, ":" + mo + "$1")] })),
                  Br(Ln(e, { props: [ee(i, /:(plac\w+)/, me + "input-$1")] })),
                  Br(Ln(e, { props: [i] })),
                  zc(e, { props: yh(n, r) });
                break;
            }
            return "";
          });
    }
}
var nS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Si =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  wd = typeof window < "u" && "HTMLElement" in window,
  rS = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  iS = {},
  bu = Object.freeze([]),
  ki = Object.freeze({});
function My(e, t, n) {
  return (
    n === void 0 && (n = ki), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var jy = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  oS = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  sS = /(^-|-$)/g;
function wh(e) {
  return e.replace(oS, "-").replace(sS, "");
}
var lS = /(a)(d)/gi,
  xh = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Vc(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = xh(t % 52) + n;
  return (xh(t % 52) + n).replace(lS, "$1-$2");
}
var va,
  ri = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Ny = function (e) {
    return ri(5381, e);
  };
function Iy(e) {
  return Vc(Ny(e) >>> 0);
}
function uS(e) {
  return e.displayName || e.name || "Component";
}
function wa(e) {
  return typeof e == "string" && !0;
}
var zy = typeof Symbol == "function" && Symbol.for,
  By = zy ? Symbol.for("react.memo") : 60115,
  aS = zy ? Symbol.for("react.forward_ref") : 60112,
  cS = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  fS = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Uy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  dS =
    (((va = {})[aS] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (va[By] = Uy),
    va);
function Sh(e) {
  return ("type" in (t = e) && t.type.$$typeof) === By
    ? Uy
    : "$$typeof" in e
    ? dS[e.$$typeof]
    : cS;
  var t;
}
var pS = Object.defineProperty,
  hS = Object.getOwnPropertyNames,
  kh = Object.getOwnPropertySymbols,
  mS = Object.getOwnPropertyDescriptor,
  yS = Object.getPrototypeOf,
  Ch = Object.prototype;
function Vy(e, t, n) {
  if (typeof t != "string") {
    if (Ch) {
      var r = yS(t);
      r && r !== Ch && Vy(e, r, n);
    }
    var i = hS(t);
    kh && (i = i.concat(kh(t)));
    for (var o = Sh(e), s = Sh(t), l = 0; l < i.length; ++l) {
      var u = i[l];
      if (!(u in fS || (n && n[u]) || (s && u in s) || (o && u in o))) {
        var a = mS(t, u);
        try {
          pS(e, u, a);
        } catch {}
      }
    }
  }
  return e;
}
function Ci(e) {
  return typeof e == "function";
}
function xd(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Sr(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Hc(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function jo(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Wc(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !jo(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Wc(e[r], t[r]);
  else if (jo(t)) for (var r in t) e[r] = Wc(e[r], t[r]);
  return e;
}
function Sd(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Zo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var gS = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw Zo(16, "".concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var s = i; s < o; s++) this.groupSizes[s] = 0;
        }
        for (
          var l = this.indexOfGroup(t + 1), u = ((s = 0), n.length);
          s < u;
          s++
        )
          this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            s = i;
          s < o;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  qs = new Map(),
  Ml = new Map(),
  xa = 1,
  Ss = function (e) {
    if (qs.has(e)) return qs.get(e);
    for (; Ml.has(xa); ) xa++;
    var t = xa++;
    return qs.set(e, t), Ml.set(t, e), t;
  },
  vS = function (e, t) {
    qs.set(e, t), Ml.set(t, e);
  },
  wS = "style["
    .concat(Si, "][")
    .concat("data-styled-version", '="')
    .concat("6.0.7", '"]'),
  xS = new RegExp(
    "^".concat(Si, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  SS = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  kS = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        i = [],
        o = 0,
        s = r.length;
      o < s;
      o++
    ) {
      var l = r[o].trim();
      if (l) {
        var u = l.match(xS);
        if (u) {
          var a = 0 | parseInt(u[1], 10),
            c = u[2];
          a !== 0 && (vS(c, a), SS(e, c, u[3]), e.getTag().insertRules(a, i)),
            (i.length = 0);
        } else i.push(l);
      }
    }
  };
function CS() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Hy = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (l) {
        var u = Array.from(l.querySelectorAll("style[".concat(Si, "]")));
        return u[u.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Si, "active"),
      r.setAttribute("data-styled-version", "6.0.7");
    var s = CS();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
  },
  ES = (function () {
    function e(t) {
      (this.element = Hy(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var s = r[i];
            if (s.ownerNode === n) return s;
          }
          throw Zo(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  RS = (function () {
    function e(t) {
      (this.element = Hy(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  _S = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Eh = wd,
  bS = { isServer: !wd, useCSSOMInjection: !rS },
  jl = (function () {
    function e(t, n, r) {
      t === void 0 && (t = ki), n === void 0 && (n = {});
      var i = this;
      (this.options = Je(Je({}, bS), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          wd &&
          Eh &&
          ((Eh = !1),
          (function (o) {
            for (
              var s = document.querySelectorAll(wS), l = 0, u = s.length;
              l < u;
              l++
            ) {
              var a = s[l];
              a &&
                a.getAttribute(Si) !== "active" &&
                (kS(o, a), a.parentNode && a.parentNode.removeChild(a));
            }
          })(this)),
        Sd(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                l = s.length,
                u = "",
                a = function (d) {
                  var p = (function (h) {
                    return Ml.get(h);
                  })(d);
                  if (p === void 0) return "continue";
                  var v = o.names.get(p),
                    g = s.getGroup(d);
                  if (v === void 0 || g.length === 0) return "continue";
                  var S = ""
                      .concat(Si, ".g")
                      .concat(d, '[id="')
                      .concat(p, '"]'),
                    _ = "";
                  v !== void 0 &&
                    v.forEach(function (h) {
                      h.length > 0 && (_ += "".concat(h, ","));
                    }),
                    (u += "".concat(g).concat(S, '{content:"').concat(_, '"}')
                      .concat(`/*!sc*/
`));
                },
                c = 0;
              c < l;
              c++
            )
              a(c);
            return u;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return Ss(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Je(Je({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new _S(i) : r ? new ES(i) : new RS(i);
            })(this.options)),
            new gS(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Ss(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Ss(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Ss(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  PS = /&/g,
  OS = /^\s*\/\/.*$/gm;
function Wy(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = Wy(n.children, t)),
      n
    );
  });
}
function TS(e) {
  var t,
    n,
    r,
    i = e === void 0 ? ki : e,
    o = i.options,
    s = o === void 0 ? ki : o,
    l = i.plugins,
    u = l === void 0 ? bu : l,
    a = function (p, v, g) {
      return g === n ||
        (g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : p;
    },
    c = u.slice();
  c.push(function (p) {
    p.type === Cu &&
      p.value.includes("&") &&
      (p.props[0] = p.props[0].replace(PS, n).replace(r, a));
  }),
    s.prefix && c.push(tS),
    c.push(Zx);
  var d = function (p, v, g, S) {
    v === void 0 && (v = ""),
      g === void 0 && (g = ""),
      S === void 0 && (S = "&"),
      (t = S),
      (n = v),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var _ = p.replace(OS, ""),
      h = Gx(g || v ? "".concat(g, " ").concat(v, " { ").concat(_, " }") : _);
    s.namespace && (h = Wy(h, s.namespace));
    var f = [];
    return (
      Dl(
        h,
        Jx(
          c.concat(
            eS(function (m) {
              return f.push(m);
            })
          )
        )
      ),
      f
    );
  };
  return (
    (d.hash = u.length
      ? u
          .reduce(function (p, v) {
            return v.name || Zo(15), ri(p, v.name);
          }, 5381)
          .toString()
      : ""),
    d
  );
}
var $S = new jl(),
  Qc = TS(),
  Qy = Ae.createContext({
    shouldForwardProp: void 0,
    styleSheet: $S,
    stylis: Qc,
  });
Qy.Consumer;
Ae.createContext(void 0);
function qc() {
  return X.useContext(Qy);
}
var FS = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = Qc);
        var s = r.name + o.hash;
        i.hasNameForId(r.id, s) ||
          i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Sd(this, function () {
          throw Zo(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Qc), this.name + t.hash;
      }),
      e
    );
  })(),
  AS = function (e) {
    return e >= "A" && e <= "Z";
  };
function Rh(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    AS(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var qy = function (e) {
    return e == null || e === !1 || e === "";
  },
  Yy = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !qy(o) &&
        ((Array.isArray(o) && o.isCss) || Ci(o)
          ? r.push("".concat(Rh(i), ":"), o, ";")
          : jo(o)
          ? r.push.apply(r, Mo(Mo(["".concat(i, " {")], Yy(o), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Rh(i), ": ")
                .concat(
                  ((t = i),
                  (n = o) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in nS ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function nr(e, t, n, r) {
  if (qy(e)) return [];
  if (xd(e)) return [".".concat(e.styledComponentId)];
  if (Ci(e)) {
    if (!Ci((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return nr(i, t, n, r);
  }
  var o;
  return e instanceof FS
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : jo(e)
    ? Yy(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        bu,
        e.map(function (s) {
          return nr(s, t, n, r);
        })
      )
    : [e.toString()];
}
function Ky(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ci(n) && !xd(n)) return !1;
  }
  return !0;
}
var LS = Ny("6.0.7"),
  DS = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Ky(t)),
        (this.componentId = n),
        (this.baseHash = ri(LS, n)),
        (this.baseStyle = r),
        jl.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = Sr(i, this.staticRulesId);
          else {
            var o = Hc(nr(this.rules, t, n, r)),
              s = Vc(ri(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var l = r(o, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, l);
            }
            (i = Sr(i, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var u = ri(this.baseHash, r.hash), a = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var d = this.rules[c];
            if (typeof d == "string") a += d;
            else if (d) {
              var p = Hc(nr(d, t, n, r));
              (u = ri(u, p)), (a += p);
            }
          }
          if (a) {
            var v = Vc(u >>> 0);
            n.hasNameForId(this.componentId, v) ||
              n.insertRules(
                this.componentId,
                v,
                r(a, ".".concat(v), void 0, this.componentId)
              ),
              (i = Sr(i, v));
          }
        }
        return i;
      }),
      e
    );
  })(),
  kd = Ae.createContext(void 0);
kd.Consumer;
var Sa = {};
function MS(e, t, n) {
  var r = xd(e),
    i = e,
    o = !wa(e),
    s = t.attrs,
    l = s === void 0 ? bu : s,
    u = t.componentId,
    a =
      u === void 0
        ? (function (m, k) {
            var E = typeof m != "string" ? "sc" : wh(m);
            Sa[E] = (Sa[E] || 0) + 1;
            var P = "".concat(E, "-").concat(Iy("6.0.7" + E + Sa[E]));
            return k ? "".concat(k, "-").concat(P) : P;
          })(t.displayName, t.parentComponentId)
        : u,
    c = t.displayName;
  c === void 0 &&
    (function (m) {
      return wa(m) ? "styled.".concat(m) : "Styled(".concat(uS(m), ")");
    })(e);
  var d =
      t.displayName && t.componentId
        ? "".concat(wh(t.displayName), "-").concat(t.componentId)
        : t.componentId || a,
    p = r && i.attrs ? i.attrs.concat(l).filter(Boolean) : l,
    v = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var g = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      v = function (m, k) {
        return g(m, k) && S(m, k);
      };
    } else v = g;
  }
  var _ = new DS(n, d, r ? i.componentStyle : void 0);
  function h(m, k) {
    return (function (E, P, R) {
      var w = E.attrs,
        O = E.componentStyle,
        L = E.defaultProps,
        D = E.foldedComponentIds,
        C = E.styledComponentId,
        T = E.target,
        N = Ae.useContext(kd),
        q = qc(),
        Z = E.shouldForwardProp || q.shouldForwardProp,
        H = (function (zt, Ye, Xt) {
          for (
            var Ie,
              Ke = Je(Je({}, Ye), { className: void 0, theme: Xt }),
              Nr = 0;
            Nr < zt.length;
            Nr += 1
          ) {
            var ar = Ci((Ie = zt[Nr])) ? Ie(Ke) : Ie;
            for (var Zt in ar)
              Ke[Zt] =
                Zt === "className"
                  ? Sr(Ke[Zt], ar[Zt])
                  : Zt === "style"
                  ? Je(Je({}, Ke[Zt]), ar[Zt])
                  : ar[Zt];
          }
          return (
            Ye.className && (Ke.className = Sr(Ke.className, Ye.className)), Ke
          );
        })(w, P, My(P, N, L) || ki),
        A = H.as || T,
        z = {};
      for (var Y in H)
        H[Y] === void 0 ||
          Y[0] === "$" ||
          Y === "as" ||
          Y === "theme" ||
          (Y === "forwardedAs"
            ? (z.as = H.forwardedAs)
            : (Z && !Z(Y, A)) || (z[Y] = H[Y]));
      var ae = (function (zt, Ye) {
          var Xt = qc(),
            Ie = zt.generateAndInjectStyles(Ye, Xt.styleSheet, Xt.stylis);
          return Ie;
        })(O, H),
        pe = Sr(D, C);
      return (
        ae && (pe += " " + ae),
        H.className && (pe += " " + H.className),
        (z[wa(A) && !jy.has(A) ? "class" : "className"] = pe),
        (z.ref = R),
        X.createElement(A, z)
      );
    })(f, m, k);
  }
  var f = Ae.forwardRef(h);
  return (
    (f.attrs = p),
    (f.componentStyle = _),
    (f.shouldForwardProp = v),
    (f.foldedComponentIds = r
      ? Sr(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (f.styledComponentId = d),
    (f.target = r ? i.target : e),
    Object.defineProperty(f, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (m) {
        this._foldedDefaultProps = r
          ? (function (k) {
              for (var E = [], P = 1; P < arguments.length; P++)
                E[P - 1] = arguments[P];
              for (var R = 0, w = E; R < w.length; R++) Wc(k, w[R], !0);
              return k;
            })({}, i.defaultProps, m)
          : m;
      },
    }),
    Sd(f, function () {
      return ".".concat(f.styledComponentId);
    }),
    o &&
      Vy(f, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    f
  );
}
function _h(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var bh = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function He(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ci(e) || jo(e)) {
    var r = e;
    return bh(nr(_h(bu, Mo([r], t, !0))));
  }
  var i = e;
  return t.length === 0 && i.length === 1 && typeof i[0] == "string"
    ? nr(i)
    : bh(nr(_h(i, t)));
}
function Yc(e, t, n) {
  if ((n === void 0 && (n = ki), !t)) throw Zo(1, t);
  var r = function (i) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, n, He.apply(void 0, Mo([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return Yc(
        e,
        t,
        Je(Je({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return Yc(e, t, Je(Je({}, n), i));
    }),
    r
  );
}
var Gy = function (e) {
    return Yc(MS, e);
  },
  K = Gy;
jy.forEach(function (e) {
  K[e] = Gy(e);
});
var jS = (function () {
  function e(t, n) {
    (this.rules = t),
      (this.componentId = n),
      (this.isStatic = Ky(t)),
      jl.registerId(this.componentId + 1);
  }
  return (
    (e.prototype.createStyles = function (t, n, r, i) {
      var o = i(Hc(nr(this.rules, n, r, i)), ""),
        s = this.componentId + t;
      r.insertRules(s, s, o);
    }),
    (e.prototype.removeStyles = function (t, n) {
      n.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, n, r, i) {
      t > 2 && jl.registerId(this.componentId + t),
        this.removeStyles(t, r),
        this.createStyles(t, n, r, i);
    }),
    e
  );
})();
function NS(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = He.apply(void 0, Mo([e], t, !1)),
    i = "sc-global-".concat(Iy(JSON.stringify(r))),
    o = new jS(r, i),
    s = function (u) {
      var a = qc(),
        c = Ae.useContext(kd),
        d = Ae.useRef(a.styleSheet.allocateGSInstance(i)).current;
      return (
        a.styleSheet.server && l(d, u, a.styleSheet, c, a.stylis),
        Ae.useLayoutEffect(
          function () {
            if (!a.styleSheet.server)
              return (
                l(d, u, a.styleSheet, c, a.stylis),
                function () {
                  return o.removeStyles(d, a.styleSheet);
                }
              );
          },
          [d, u, a.styleSheet, c, a.stylis]
        ),
        null
      );
    };
  function l(u, a, c, d, p) {
    if (o.isStatic) o.renderStyles(u, iS, c, p);
    else {
      var v = Je(Je({}, a), { theme: My(a, d, s.defaultProps) });
      o.renderStyles(u, v, c, p);
    }
  }
  return Ae.memo(s);
}
const Xy = (e) => He`
  -ms-overflow-style: none;
  overflow-${e === "y" ? "x" : "y"}: hidden;
  overflow-${e}: auto;
  
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar {
    width: 0;
    transition: 0.3s;
  }

  &::-webkit-scrollbar-button {
    height: 3px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px 10px 10px 8px;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-right-width: 3px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 8px 10px 10px 8px;
    height: 40%;
    transition: 0.3s;
    background-clip: padding-box !important;
    border: 2px solid transparent;
    border-right-width: 3px;

    &:hover {
      background: #999;
    }
  }
`,
  Zy = (e, t) => He`
	display: block;
	display: -webkit-box;
	max-width: 100%;
	//height: $height * $line;
	max-height: calc(${e} * ${t});
	font-size: 14px;
	line-height: ${e};
	-webkit-line-clamp: ${t};
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
`,
  IS = K.div`
	width: 100%;
	height: 100%;
	border-radius: 24px;
	background: #fff;
	position: fixed;
	z-index: 999;
	display: flex;
	flex-direction: column;
`,
  Ph = K.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid transparent;

	${(e) =>
    e.$chat
      ? `
			height: 70px;
			border-color: var(--bd-color);
			padding: 20px 24px;
		`
      : `
			height: 80px;
			padding: 10px 24px;
		`}

	button {
		fill: #b2b2b2;
		display: flex;
		align-items: center;

		svg {
			transition: 0.3s;
		}

		&:disabled {
			cursor: not-allowed;
			fill: #e4e4e4;
		}

		&:not(:disabled):hover > svg {
			fill: var(--primary-color);
		}
	}
`,
  Oh = K.div`
	flex: 1;
	display: flex;
	align-items: center;
	gap: 8px;
`;
K.div`
	font-family: "Exo 2", sans-serif;
	font-size: 20px;
	font-weight: 400;
	color: #666;
`;
const zS = K.span`
	flex: 1;
	font-size: 18px;
	font-weight: 500;
	display: flex;
	justify-content: center;
`,
  Th = K.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	gap: 8px;
`,
  BS = K.div`
	width: 40px;
	height: 40px;
	border-radius: 10px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	background: ${(e) => (e.logoImage ? "transparent" : "var(--primary-color)")};
	padding: ${(e) => (e.logoImage ? "0px" : "8px")};

	img {
		width: ${(e) => (e.logoImage ? "inherit" : "100%")};
		height: ${(e) => (e.logoImage ? "inherit" : "100%")};
		object-fit: cover;
	}
`,
  US = K.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`,
  VS = K.p`
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.0675rem;
	font-weight: 500;
	color: #333;
`;
K.em`
	font-size: 14px;
	font-style: normal;
	letter-spacing: -0.0525rem;
	color: #666;
	position: relative;

	&.active::after {
		content: "";
		width: 6px;
		height: 6px;
		display: inline-block;
		margin-left: 4px;
		border-radius: 50%;
		background: var(--primary-color);
		position: absolute;
		top: calc(50% + 1px);
		transform: translateY(-50%);
	}
`;
const HS = K.article`
	min-height: 0;
	flex: 1 1;
	display: flex;
	flex-direction: column;
	//gap: 16px;
`,
  WS = K.article`
	${Xy("y")};
	display: flex;
	flex-direction: column;
	flex: 1 1;
	padding: 0 24px;
	gap: 10px;
`,
  QS = K.div`
	flex: 0 1;
	display: flex;
	gap: 10px;
	padding: 16px 24px 0;

	button {
		flex: 1;
		gap: 4px;

		&.counselling {
			flex-direction: column;

			span {
				color: currentColor;
				font-size: 12px;
			}
		}
	}
`,
  qS = K.article`
	display: flex;
	align-self: stretch;
	justify-content: center;
	padding: 16px 24px;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: -0.045rem;
	color: #999;
`,
  Pu = () =>
    y.jsxs("svg", {
      width: "30",
      height: "30",
      viewBox: "0 0 60 60",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        y.jsx("path", {
          d: "M32.1152 0L32.2344 0.0595829L59.8809 27.7656L60 27.8252V0H32.1152Z",
          fill: "white",
        }),
        y.jsx("path", {
          d: "M31.4602 31.5194V60C46.6538 59.285 58.8683 47.1897 59.8812 32.0557C59.8812 31.8769 59.8812 31.6982 59.9408 31.5194H59.4046H31.4602Z",
          fill: "white",
        }),
        y.jsx("path", {
          d: "M0.0595829 28.4806C0.0595829 28.9573 0 29.4935 0 29.9702C0 30.5065 0 30.9831 0.0595829 31.4598C0.83416 46.8322 13.1082 59.1658 28.4806 59.8808V31.5194V30.0298V28.4806V0.595829V0C28.3019 0 28.1231 4.43927e-09 27.9444 0.0595829C12.8699 1.07249 0.83416 13.287 0.0595829 28.4806Z",
          fill: "white",
        }),
      ],
    }),
  YS = () =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      children: [
        y.jsx("path", {
          d: "M15.9934 19.9507C13.8082 19.9507 12.036 18.1786 12.036 15.9934C12.036 13.8082 13.8082 12.036 15.9934 12.036C18.1786 12.036 19.9507 13.8082 19.9507 15.9934C19.9507 18.1786 18.1786 19.9507 15.9934 19.9507ZM15.9934 13.3685C14.541 13.3685 13.3685 14.541 13.3685 15.9934C13.3685 17.4457 14.541 18.6183 15.9934 18.6183C17.4457 18.6183 18.6183 17.4457 18.6183 15.9934C18.6183 14.541 17.4457 13.3685 15.9934 13.3685Z",
        }),
        y.jsx("path", {
          d: "M18.4317 25.9867H13.5416V23.3884C13.1819 23.2685 12.8221 23.1219 12.4757 22.9487L10.6369 24.7875L7.1992 21.3364L9.03797 19.4977C8.86476 19.1512 8.71819 18.8048 8.59827 18.4317H6V13.5416H8.59827C8.71819 13.1819 8.86476 12.8221 9.03797 12.4757L7.1992 10.6502L10.6502 7.1992L12.489 9.03797C12.8354 8.86476 13.1819 8.71819 13.555 8.59827V6H18.445V8.59827C18.8048 8.71819 19.1646 8.86476 19.511 9.03797L21.3498 7.1992L24.8008 10.6502L22.962 12.489C23.1352 12.8354 23.2818 13.1819 23.4017 13.555H26V18.445H23.4017C23.2818 18.8048 23.1352 19.1646 22.962 19.511L24.8008 21.3498L21.3498 24.8008L19.511 22.962C19.1646 23.1352 18.8181 23.2818 18.445 23.4017V26L18.4317 25.9867ZM14.8741 24.6542H17.0993V22.3757L17.6056 22.2425C18.1919 22.0959 18.7648 21.8561 19.2845 21.5496L19.7242 21.2831L21.3364 22.8954L22.9087 21.3231L21.2965 19.7109L21.563 19.2712C21.8694 18.7515 22.1093 18.1919 22.2558 17.5923L22.3891 17.0859H24.6676V14.8608H22.3891L22.2558 14.3544C22.1093 13.7682 21.8694 13.2085 21.563 12.6755L21.2965 12.2358L22.9087 10.6236L21.3364 9.0513L19.7242 10.6636L19.2845 10.3971C18.7648 10.0906 18.2052 9.85077 17.6189 9.7042L17.1126 9.57095V7.33245H14.8874V9.61093L14.3811 9.74417C13.7948 9.89074 13.2352 10.1306 12.7155 10.437L12.2758 10.7035L10.6636 9.09127L9.09127 10.6636L10.7035 12.2758L10.437 12.7155C10.1306 13.2352 9.89074 13.7948 9.74417 14.3944L9.61093 14.9007H7.33245V17.1259H9.61093L9.74417 17.6322C9.89074 18.2185 10.1306 18.7781 10.437 19.3111L10.7035 19.7508L9.09127 21.3631L10.6636 22.9354L12.2758 21.3231L12.7155 21.5896C13.2352 21.8961 13.7948 22.1359 14.3944 22.2825L14.9007 22.4157V24.6942L14.8741 24.6542Z",
        }),
      ],
    }),
  $h = () =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      children: y.jsx("path", {
        d: "M5 7.11097V24.8888C5 25.3165 5.242 25.7053 5.6237 25.8909C6.0043 26.0753 6.4575 26.0231 6.7875 25.7564L11.985 21.5558H25.9C26.5072 21.5558 27 21.0581 27 20.4449V7.11097C27 6.49772 26.5072 6 25.9 6H6.1C5.4928 6 5 6.49772 5 7.11097ZM25.35 19.8894H11.4053L6.65 23.7333V7.66646H25.35V19.8894ZM15.9978 12.6681C16.4532 12.6681 16.8228 13.0413 16.8228 13.5013V17.3897C16.8228 17.8496 16.4532 18.2229 15.9978 18.2229C15.5424 18.2229 15.1728 17.8496 15.1728 17.3897V13.5013C15.1728 13.0413 15.5424 12.6681 15.9978 12.6681ZM16 9.33514C16.6072 9.33514 17.1 9.83285 17.1 10.4461C17.1 11.0594 16.6072 11.5571 16 11.5571C15.3928 11.5571 14.9 11.0594 14.9 10.4461C14.9 9.83285 15.3928 9.33514 16 9.33514Z",
      }),
    }),
  Kc = () =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      children: y.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.30563 8.30563C8.71313 7.89812 9.37383 7.89812 9.78133 8.30563L16 14.5243L22.2187 8.30563C22.6262 7.89812 23.2869 7.89812 23.6944 8.30563C24.1019 8.71313 24.1019 9.37383 23.6944 9.78133L17.4757 16L23.6944 22.2187C24.1019 22.6262 24.1019 23.2869 23.6944 23.6944C23.2869 24.1019 22.6262 24.1019 22.2187 23.6944L16 17.4757L9.78133 23.6944C9.37383 24.1019 8.71313 24.1019 8.30563 23.6944C7.89812 23.2869 7.89812 22.6262 8.30563 22.2187L14.5243 16L8.30563 9.78133C7.89812 9.37383 7.89812 8.71313 8.30563 8.30563Z",
      }),
    }),
  Jy = () =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      children: y.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.5303 26.5303C21.2374 26.8232 20.7626 26.8232 20.4697 26.5303L10.8232 16.8839C10.3351 16.3957 10.3351 15.6043 10.8232 15.1161L20.4697 5.46967C20.7626 5.17678 21.2374 5.17678 21.5303 5.46967C21.8232 5.76256 21.8232 6.23744 21.5303 6.53033L12.0607 16L21.5303 25.4697C21.8232 25.7626 21.8232 26.2374 21.5303 26.5303Z",
      }),
    }),
  KS = () =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      children: y.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.09693 7.47305C6.09275 7.48687 6.08977 7.5079 6.09922 7.54072L6.10115 7.54739L8.42694 15.91L15.6924 15.91C16.1066 15.91 16.4424 16.2458 16.4424 16.66C16.4424 17.0742 16.1066 17.41 15.6924 17.41L8.4274 17.41L6.10127 25.7987C6.09667 25.8153 6.09153 25.8317 6.08586 25.8478C6.0866 25.8513 6.08746 25.8545 6.08839 25.8576C6.09459 25.8778 6.10603 25.8947 6.11843 25.906C6.12457 25.9116 6.12937 25.9145 6.13222 25.9159C6.13406 25.9152 6.13665 25.9142 6.14002 25.9126C6.14042 25.9124 6.14083 25.9122 6.14125 25.912L24.5379 16.7498C24.5379 16.7497 24.5378 16.7498 24.5379 16.7498C24.5546 16.7414 24.5626 16.7324 24.5685 16.7221C24.5762 16.7087 24.5833 16.6872 24.5833 16.66C24.5833 16.6329 24.5762 16.6113 24.5685 16.5979C24.5626 16.5876 24.5549 16.5789 24.5384 16.5705C24.5382 16.5704 24.5385 16.5706 24.5384 16.5705L6.15458 7.42132C6.1542 7.42114 6.15383 7.42096 6.15348 7.42079C6.14864 7.41849 6.14541 7.41742 6.14369 7.41694C6.14096 7.41788 6.13395 7.42086 6.12469 7.42923C6.11206 7.44065 6.102 7.45626 6.09693 7.47305ZM4.7 25.2386C4.67515 25.2863 4.65525 25.337 4.64095 25.3902C4.47102 26.0221 4.69017 26.6341 5.10837 27.015C5.53225 27.401 6.18227 27.5623 6.80119 27.2591L25.2093 18.0911C26.3747 17.5078 26.3747 15.8123 25.2093 15.2289L6.81871 6.07636L6.81452 6.0743C5.52382 5.44194 4.306 6.72332 4.65675 7.95216L7.07868 16.6603L4.7 25.2386Z",
      }),
    }),
  GS = () =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      children: y.jsx("path", {
        d: "M14.3136 5.09818C12.8653 3.63394 10.5049 3.63394 9.05668 5.09818L5.04001 9.15086C5.012 9.17486 5 9.21087 5 9.25087C5 9.29088 5.012 9.32289 5.04001 9.35089L5.6081 9.92299C5.66411 9.979 5.74812 9.979 5.80413 9.92299L9.8208 5.87031C10.3209 5.36623 10.981 5.09018 11.6851 5.09018C12.3892 5.09018 13.0533 5.36623 13.5494 5.87031C14.0495 6.3744 14.3216 7.04251 14.3216 7.75463C14.3216 8.46674 14.0455 9.13486 13.5494 9.63894L9.45674 13.7716L8.79263 14.4437C8.17253 15.0718 7.16436 15.0718 6.54426 14.4437C6.24421 14.1397 6.08018 13.7396 6.08018 13.3076C6.08018 12.8755 6.24421 12.4754 6.54426 12.1714L10.6089 8.07068C10.713 7.96666 10.849 7.91065 10.993 7.91065C11.137 7.91065 11.273 7.96666 11.3731 8.07068C11.4771 8.1747 11.5331 8.31072 11.5331 8.45874C11.5331 8.60677 11.4771 8.74279 11.3731 8.84281L8.05251 12.1914C8.0245 12.2194 8.0125 12.2554 8.0125 12.2914C8.0125 12.3274 8.0245 12.3634 8.05251 12.3914L8.6206 12.9635C8.67661 13.0195 8.76063 13.0195 8.81664 12.9635L12.1332 9.61093C12.4412 9.30288 12.6053 8.89082 12.6053 8.45474C12.6053 8.01867 12.4372 7.6066 12.1332 7.29855C11.5011 6.66244 10.4729 6.66244 9.84081 7.29855L9.44474 7.69862L5.78013 11.3992C5.28005 11.9033 5 12.5914 5 13.3076C5 14.0277 5.28005 14.7038 5.78013 15.2119C6.30022 15.736 6.98433 16 7.66844 16C8.35256 16 9.03267 15.736 9.55276 15.2119L14.3096 10.4071C15.0097 9.69895 15.3977 8.75479 15.3977 7.75063C15.3977 6.74646 15.0097 5.8023 14.3096 5.09418L14.3136 5.09818Z",
        fill: "#B2B2B2",
      }),
    }),
  XS = () =>
    y.jsxs("svg", {
      width: "67",
      height: "57",
      viewBox: "0 0 67 57",
      fill: "none",
      children: [
        y.jsxs("g", {
          clipPath: "url(#clip0_75_6628)",
          children: [
            y.jsx("path", {
              d: "M57.46 41.8801C62.71 41.8801 67 40.65 67 33.59C67 26.53 62.71 25.3 57.46 25.3V41.8801Z",
              fill: "#32A6FF",
            }),
            y.jsx("path", {
              d: "M44.3401 13.46H22.6701C12.1701 13.46 3.58008 21.98 3.58008 32.4V37.82C3.58008 48.24 12.1701 56.77 22.6701 56.77H44.3401C54.8401 56.77 63.4301 48.25 63.4301 37.82V32.4C63.4301 21.98 54.8401 13.46 44.3401 13.46ZM44.3401 46.74H22.6701C16.2101 46.74 10.9601 41.53 10.9601 35.11C10.9601 28.69 16.2101 23.49 22.6701 23.49H44.3401C50.8001 23.49 56.0501 28.71 56.0501 35.11C56.0501 41.51 50.8001 46.74 44.3401 46.74Z",
              fill: "#32A6FF",
            }),
            y.jsx("path", {
              d: "M44.34 23.49H22.67C16.21 23.49 10.96 28.7 10.96 35.11C10.96 41.52 16.21 46.74 22.67 46.74H44.34C50.8 46.74 56.05 41.53 56.05 35.11C56.05 28.69 50.8 23.49 44.34 23.49Z",
              fill: "#F8FCFF",
            }),
            y.jsx("path", {
              d: "M41.8504 20.5701C41.8504 15.3601 40.6104 11.1001 33.5004 11.1001C26.3904 11.1001 25.1504 15.3601 25.1504 20.5701H41.8504Z",
              fill: "#32A6FF",
            }),
            y.jsx("path", {
              d: "M29.8896 3.58C29.8896 1.6 31.5096 0 33.4996 0C35.4896 0 37.1096 1.6 37.1096 3.58C37.1096 5.56 35.4896 7.16 33.4996 7.16C31.5096 7.16 29.8896 5.56 29.8896 3.58Z",
              fill: "#32A6FF",
            }),
            y.jsx("path", {
              d: "M30.9996 4.30999C30.9996 2.32999 32.6196 0.72999 34.6096 0.72999C35.1096 0.72999 35.5896 0.82999 36.0196 1.00999C35.3696 0.37999 34.4796 -0.0100098 33.4996 -0.0100098C31.5096 -0.0100098 29.8896 1.58999 29.8896 3.56999C29.8896 5.04999 30.7996 6.32999 32.0896 6.86999C31.4196 6.21999 30.9896 5.30999 30.9896 4.29999L30.9996 4.30999Z",
              fill: "#0E96E1",
            }),
            y.jsx("path", {
              d: "M34.7098 6.16992H32.2998V15.1499H34.7098V6.16992Z",
              fill: "#32A6FF",
            }),
            y.jsx("path", {
              d: "M22.6701 13.46H27.0001C18.2201 13.46 7.62008 21.98 7.62008 32.4V37.82C7.62008 48.24 16.9401 56.77 27.4401 56.77H22.6701C12.1701 56.77 3.58008 48.25 3.58008 37.82V32.4C3.58008 21.98 12.1701 13.46 22.6701 13.46Z",
              fill: "#0E96E1",
            }),
            y.jsx("path", {
              d: "M6.64 25.47C2.8 25.99 0 27.89 0 33.59C0 38.98 2.54 40.98 6.11 41.62C6.76 41.74 7.24 25.39 6.64 25.47Z",
              fill: "#0E96E1",
            }),
            y.jsx("path", {
              d: "M47.2796 38.5899C47.0296 38.0599 46.1396 37.3299 45.6096 37.5799C45.0796 37.8299 45.0896 38.9799 45.3396 39.5099C45.5896 40.0399 46.2296 40.2699 46.7696 40.0099C47.3096 39.7499 47.5296 39.1199 47.2796 38.5799V38.5899Z",
              fill: "#0069BA",
            }),
            y.jsx("path", {
              d: "M46.93 35.34C46.93 33.5 45.43 32.01 43.57 32.01C41.71 32.01 40.21 33.5 40.21 35.34C40.21 37.18 41.71 38.67 43.57 38.67C45.43 38.67 46.93 37.18 46.93 35.34Z",
              fill: "#0069BA",
            }),
            y.jsx("path", {
              d: "M20.2299 40.0099C20.7699 40.2699 21.4099 40.0399 21.6599 39.5099C21.9099 38.9799 21.9299 37.8299 21.3899 37.5799C20.8499 37.3299 19.9699 38.0599 19.7199 38.5899C19.4699 39.1199 19.6899 39.7599 20.2299 40.0199V40.0099Z",
              fill: "#0069BA",
            }),
            y.jsx("path", {
              d: "M23.4303 38.67C25.2903 38.67 26.7903 37.18 26.7903 35.34C26.7903 33.5 25.2903 32.01 23.4303 32.01C21.5703 32.01 20.0703 33.5 20.0703 35.34C20.0703 37.18 21.5703 38.67 23.4303 38.67Z",
              fill: "#0069BA",
            }),
            y.jsx("path", {
              d: "M27.8203 42C31.6103 39.35 35.4003 39.35 39.1803 42",
              stroke: "#0069BA",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        y.jsx("defs", {
          children: y.jsx("clipPath", {
            id: "clip0_75_6628",
            children: y.jsx("rect", {
              width: "67",
              height: "57",
              fill: "white",
            }),
          }),
        }),
      ],
    });
let ZS = 0;
function dn(e, t) {
  const n = `atom${++ZS}`,
    r = { toString: () => n };
  return (
    typeof e == "function"
      ? (r.read = e)
      : ((r.init = e),
        (r.read = (i) => i(r)),
        (r.write = (i, o, s) => o(r, typeof s == "function" ? s(i(r)) : s))),
    t && (r.write = t),
    r
  );
}
const Fh = (e) => "init" in e,
  Ah = (e) => !!e.write,
  Nl = new WeakMap(),
  JS = (e, t) => {
    Nl.set(e, t), e.catch(() => {}).finally(() => Nl.delete(e));
  },
  Lh = (e, t) => {
    const n = Nl.get(e);
    n && (Nl.delete(e), n(t));
  },
  Dh = (e, t) => {
    (e.status = "fulfilled"), (e.value = t);
  },
  Mh = (e, t) => {
    (e.status = "rejected"), (e.reason = t);
  },
  e3 = (e) => typeof (e == null ? void 0 : e.then) == "function",
  ks = (e, t) => "v" in e && "v" in t && Object.is(e.v, t.v),
  jh = (e, t) => "e" in e && "e" in t && Object.is(e.e, t.e),
  Vi = (e) => "v" in e && e.v instanceof Promise,
  t3 = (e, t) => "v" in e && "v" in t && e.v.orig && e.v.orig === t.v.orig,
  Cs = (e) => {
    if ("e" in e) throw e.e;
    return e.v;
  },
  n3 = () => {
    const e = new WeakMap(),
      t = new WeakMap(),
      n = new Map();
    let r, i;
    const o = (w) => e.get(w),
      s = (w, O) => {
        const L = e.get(w);
        if ((e.set(w, O), n.has(w) || n.set(w, L), L && Vi(L))) {
          const D =
            "v" in O
              ? O.v instanceof Promise
                ? O.v
                : Promise.resolve(O.v)
              : Promise.reject(O.e);
          L.v !== D && Lh(L.v, D);
        }
      },
      l = (w, O, L) => {
        const D = new Map();
        let C = !1;
        L.forEach((T, N) => {
          !T && N === w && (T = O),
            T && (D.set(N, T), O.d.get(N) !== T && (C = !0));
        }),
          (C || O.d.size !== D.size) && (O.d = D);
      },
      u = (w, O, L) => {
        const D = o(w),
          C = { d: (D == null ? void 0 : D.d) || new Map(), v: O };
        if ((L && l(w, C, L), D && ks(D, C) && D.d === C.d)) return D;
        if (D && Vi(D) && Vi(C) && t3(D, C)) {
          if (D.d === C.d) return D;
          C.v = D.v;
        }
        return s(w, C), C;
      },
      a = (w, O, L, D) => {
        if (e3(O)) {
          let C;
          const T = new Promise((N, q) => {
            let Z = !1;
            O.then(
              (H) => {
                if (!Z) {
                  Z = !0;
                  const A = o(w),
                    z = u(w, T, L);
                  Dh(T, H),
                    N(H),
                    t.has(w) &&
                      (A == null ? void 0 : A.d) !== z.d &&
                      E(w, z, A == null ? void 0 : A.d);
                }
              },
              (H) => {
                if (!Z) {
                  Z = !0;
                  const A = o(w),
                    z = u(w, T, L);
                  Mh(T, H),
                    q(H),
                    t.has(w) &&
                      (A == null ? void 0 : A.d) !== z.d &&
                      E(w, z, A == null ? void 0 : A.d);
                }
              }
            ),
              (C = (H) => {
                Z ||
                  ((Z = !0),
                  H.then(
                    (A) => Dh(T, A),
                    (A) => Mh(T, A)
                  ),
                  N(H));
              });
          });
          return (
            (T.orig = O),
            (T.status = "pending"),
            JS(T, (N) => {
              N && C(N), D == null || D();
            }),
            u(w, T, L)
          );
        }
        return u(w, O, L);
      },
      c = (w, O, L) => {
        const D = o(w),
          C = { d: (D == null ? void 0 : D.d) || new Map(), e: O };
        return L && l(w, C, L), D && jh(D, C) && D.d === C.d ? D : (s(w, C), C);
      },
      d = (w, O) => {
        const L = o(w);
        if (
          !O &&
          L &&
          (t.has(w) || Array.from(L.d).every(([H, A]) => H === w || d(H) === A))
        )
          return L;
        const D = new Map();
        let C = !0;
        const T = (H) => {
          if (H === w) {
            const z = o(H);
            if (z) return D.set(H, z), Cs(z);
            if (Fh(H)) return D.set(H, void 0), H.init;
            throw new Error("no atom init");
          }
          const A = d(H);
          return D.set(H, A), Cs(A);
        };
        let N, q;
        const Z = {
          get signal() {
            return N || (N = new AbortController()), N.signal;
          },
          get setSelf() {
            return (
              !q &&
                Ah(w) &&
                (q = (...H) => {
                  if (!C) return f(w, ...H);
                }),
              q
            );
          },
        };
        try {
          const H = w.read(T, Z);
          return a(w, H, D, () => (N == null ? void 0 : N.abort()));
        } catch (H) {
          return c(w, H, D);
        } finally {
          C = !1;
        }
      },
      p = (w) => Cs(d(w)),
      v = (w) => {
        let O = t.get(w);
        return O || (O = m(w)), O;
      },
      g = (w, O) => !O.l.size && (!O.t.size || (O.t.size === 1 && O.t.has(w))),
      S = (w) => {
        const O = t.get(w);
        O && g(w, O) && k(w);
      },
      _ = (w) => {
        const O = new Map(),
          L = new WeakMap(),
          D = (N) => {
            var q;
            const Z = new Set((q = t.get(N)) == null ? void 0 : q.t);
            return (
              n.forEach((H, A) => {
                var z;
                (z = o(A)) != null && z.d.has(N) && Z.add(A);
              }),
              Z
            );
          },
          C = (N) => {
            D(N).forEach((q) => {
              q !== N &&
                (O.set(q, (O.get(q) || new Set()).add(N)),
                L.set(q, (L.get(q) || 0) + 1),
                C(q));
            });
          };
        C(w);
        const T = (N) => {
          D(N).forEach((q) => {
            var Z;
            if (q !== N) {
              let H = L.get(q);
              if ((H && L.set(q, --H), !H)) {
                let A = !!((Z = O.get(q)) != null && Z.size);
                if (A) {
                  const z = o(q),
                    Y = d(q, !0);
                  A = !z || !ks(z, Y);
                }
                A || O.forEach((z) => z.delete(q));
              }
              T(q);
            }
          });
        };
        T(w);
      },
      h = (w, ...O) => {
        let L = !0;
        const D = (N) => Cs(d(N)),
          C = (N, ...q) => {
            let Z;
            if (N === w) {
              if (!Fh(N)) throw new Error("atom not writable");
              const H = o(N),
                A = a(N, q[0]);
              (!H || !ks(H, A)) && _(N);
            } else Z = h(N, ...q);
            if (!L) {
              const H = P();
            }
            return Z;
          },
          T = w.write(D, C, ...O);
        return (L = !1), T;
      },
      f = (w, ...O) => {
        const L = h(w, ...O),
          D = P();
        return L;
      },
      m = (w, O, L) => {
        var D;
        const C = L || [];
        (D = o(w)) == null ||
          D.d.forEach((N, q) => {
            const Z = t.get(q);
            Z ? Z.t.add(w) : q !== w && m(q, w, C);
          }),
          d(w);
        const T = { t: new Set(O && [O]), l: new Set() };
        if ((t.set(w, T), Ah(w) && w.onMount)) {
          const { onMount: N } = w;
          C.push(() => {
            const q = N((...Z) => f(w, ...Z));
            q && (T.u = q);
          });
        }
        return L || C.forEach((N) => N()), T;
      },
      k = (w) => {
        var O;
        const L = (O = t.get(w)) == null ? void 0 : O.u;
        L && L(), t.delete(w);
        const D = o(w);
        D &&
          (Vi(D) && Lh(D.v),
          D.d.forEach((C, T) => {
            if (T !== w) {
              const N = t.get(T);
              N && (N.t.delete(w), g(T, N) && k(T));
            }
          }));
      },
      E = (w, O, L) => {
        const D = new Set(O.d.keys());
        L == null ||
          L.forEach((C, T) => {
            if (D.has(T)) {
              D.delete(T);
              return;
            }
            const N = t.get(T);
            N && (N.t.delete(w), g(T, N) && k(T));
          }),
          D.forEach((C) => {
            const T = t.get(C);
            T ? T.t.add(w) : t.has(w) && m(C, w);
          });
      },
      P = () => {
        let w;
        for (; n.size; ) {
          const O = Array.from(n);
          n.clear(),
            O.forEach(([L, D]) => {
              const C = o(L);
              if (C) {
                const T = t.get(L);
                T &&
                  C.d !== (D == null ? void 0 : D.d) &&
                  E(L, C, D == null ? void 0 : D.d),
                  T &&
                    !(D && !Vi(D) && (ks(D, C) || jh(D, C))) &&
                    T.l.forEach((N) => N());
              }
            });
        }
      };
    return {
      get: p,
      set: f,
      sub: (w, O) => {
        const L = v(w),
          D = P(),
          C = L.l;
        return (
          C.add(O),
          () => {
            C.delete(O), S(w);
          }
        );
      },
    };
  };
let ka;
const r3 = () => (ka || (ka = n3()), ka),
  i3 = X.createContext(void 0),
  eg = (e) => {
    const t = X.useContext(i3);
    return (e == null ? void 0 : e.store) || t || r3();
  },
  o3 = (e) => typeof (e == null ? void 0 : e.then) == "function",
  s3 =
    Ae.use ||
    ((e) => {
      if (e.status === "pending") throw e;
      if (e.status === "fulfilled") return e.value;
      throw e.status === "rejected"
        ? e.reason
        : ((e.status = "pending"),
          e.then(
            (t) => {
              (e.status = "fulfilled"), (e.value = t);
            },
            (t) => {
              (e.status = "rejected"), (e.reason = t);
            }
          ),
          e);
    });
function Il(e, t) {
  const n = eg(t),
    [[r, i, o], s] = X.useReducer(
      (a) => {
        const c = n.get(e);
        return Object.is(a[0], c) && a[1] === n && a[2] === e ? a : [c, n, e];
      },
      void 0,
      () => [n.get(e), n, e]
    );
  let l = r;
  (i !== n || o !== e) && (s(), (l = n.get(e)));
  const u = t == null ? void 0 : t.delay;
  return (
    X.useEffect(() => {
      const a = n.sub(e, () => {
        if (typeof u == "number") {
          setTimeout(s, u);
          return;
        }
        s();
      });
      return s(), a;
    }, [n, e, u]),
    X.useDebugValue(l),
    o3(l) ? s3(l) : l
  );
}
function Ht(e, t) {
  const n = eg(t);
  return X.useCallback((...i) => n.set(e, ...i), [n, e]);
}
function dr(e, t) {
  return [Il(e, t), Ht(e, t)];
}
const Cd = dn(!0),
  Ed = dn("home");
dn(0);
const tg = dn([]),
  ng = dn([]),
  rg = dn(!1),
  ig = dn(!0),
  og = dn(!1),
  sg = dn(!1),
  lg = dn([]);
class Ti {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    const n = { listener: t };
    return (
      this.listeners.add(n),
      this.onSubscribe(),
      () => {
        this.listeners.delete(n), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const No = typeof window > "u" || "Deno" in window;
function Tt() {}
function l3(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ug(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ji(e, t, n) {
  return Jo(e)
    ? typeof t == "function"
      ? { ...n, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e;
}
function u3(e, t, n) {
  return Jo(e)
    ? typeof t == "function"
      ? { ...n, mutationKey: e, mutationFn: t }
      : { ...t, mutationKey: e }
    : typeof e == "function"
    ? { ...t, mutationFn: e }
    : { ...e };
}
function zn(e, t, n) {
  return Jo(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function Nh(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: s,
    stale: l,
  } = e;
  if (Jo(s)) {
    if (r) {
      if (t.queryHash !== Rd(s, t.options)) return !1;
    } else if (!zl(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const u = t.isActive();
    if ((n === "active" && !u) || (n === "inactive" && u)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (typeof i < "u" && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Ih(e, t) {
  const { exact: n, fetching: r, predicate: i, mutationKey: o } = e;
  if (Jo(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (kr(t.options.mutationKey) !== kr(o)) return !1;
    } else if (!zl(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function Rd(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || kr)(e);
}
function kr(e) {
  return JSON.stringify(e, (t, n) =>
    Xc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function zl(e, t) {
  return ag(e, t);
}
function ag(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !ag(e[n], t[n]))
    : !1;
}
function cg(e, t) {
  if (e === t) return e;
  const n = zh(e) && zh(t);
  if (n || (Xc(e) && Xc(t))) {
    const r = n ? e.length : Object.keys(e).length,
      i = n ? t : Object.keys(t),
      o = i.length,
      s = n ? [] : {};
    let l = 0;
    for (let u = 0; u < o; u++) {
      const a = n ? u : i[u];
      (s[a] = cg(e[a], t[a])), s[a] === e[a] && l++;
    }
    return r === o && l === r ? e : s;
  }
  return t;
}
function Bl(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function zh(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Xc(e) {
  if (!Bh(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Bh(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Bh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Jo(e) {
  return Array.isArray(e);
}
function fg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Uh(e) {
  fg(0).then(e);
}
function a3() {
  if (typeof AbortController == "function") return new AbortController();
}
function Zc(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? cg(e, t)
    : t;
}
class c3 extends Ti {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!No && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("visibilitychange", n, !1),
            window.addEventListener("focus", n, !1),
            () => {
              window.removeEventListener("visibilitychange", n),
                window.removeEventListener("focus", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    this.focused !== t && ((this.focused = t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Ul = new c3(),
  Vh = ["online", "offline"];
class f3 extends Ti {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!No && window.addEventListener) {
          const n = () => t();
          return (
            Vh.forEach((r) => {
              window.addEventListener(r, n, !1);
            }),
            () => {
              Vh.forEach((r) => {
                window.removeEventListener(r, n);
              });
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    this.online !== t && ((this.online = t), this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const Vl = new f3();
function d3(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ou(e) {
  return (e ?? "online") === "online" ? Vl.isOnline() : !0;
}
class dg {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function Ys(e) {
  return e instanceof dg;
}
function pg(e) {
  let t = !1,
    n = 0,
    r = !1,
    i,
    o,
    s;
  const l = new Promise((_, h) => {
      (o = _), (s = h);
    }),
    u = (_) => {
      r || (v(new dg(_)), e.abort == null || e.abort());
    },
    a = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    d = () => !Ul.isFocused() || (e.networkMode !== "always" && !Vl.isOnline()),
    p = (_) => {
      r ||
        ((r = !0),
        e.onSuccess == null || e.onSuccess(_),
        i == null || i(),
        o(_));
    },
    v = (_) => {
      r ||
        ((r = !0), e.onError == null || e.onError(_), i == null || i(), s(_));
    },
    g = () =>
      new Promise((_) => {
        (i = (h) => {
          const f = r || !d();
          return f && _(h), f;
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (i = void 0), r || e.onContinue == null || e.onContinue();
      }),
    S = () => {
      if (r) return;
      let _;
      try {
        _ = e.fn();
      } catch (h) {
        _ = Promise.reject(h);
      }
      Promise.resolve(_)
        .then(p)
        .catch((h) => {
          var f, m;
          if (r) return;
          const k = (f = e.retry) != null ? f : 3,
            E = (m = e.retryDelay) != null ? m : d3,
            P = typeof E == "function" ? E(n, h) : E,
            R =
              k === !0 ||
              (typeof k == "number" && n < k) ||
              (typeof k == "function" && k(n, h));
          if (t || !R) {
            v(h);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, h),
            fg(P)
              .then(() => {
                if (d()) return g();
              })
              .then(() => {
                t ? v(h) : S();
              });
        });
    };
  return (
    Ou(e.networkMode) ? S() : g().then(S),
    {
      promise: l,
      cancel: u,
      continue: () => ((i == null ? void 0 : i()) ? l : Promise.resolve()),
      cancelRetry: a,
      continueRetry: c,
    }
  );
}
const _d = console;
function p3() {
  let e = [],
    t = 0,
    n = (c) => {
      c();
    },
    r = (c) => {
      c();
    };
  const i = (c) => {
      let d;
      t++;
      try {
        d = c();
      } finally {
        t--, t || l();
      }
      return d;
    },
    o = (c) => {
      t
        ? e.push(c)
        : Uh(() => {
            n(c);
          });
    },
    s =
      (c) =>
      (...d) => {
        o(() => {
          c(...d);
        });
      },
    l = () => {
      const c = e;
      (e = []),
        c.length &&
          Uh(() => {
            r(() => {
              c.forEach((d) => {
                n(d);
              });
            });
          });
    };
  return {
    batch: i,
    batchCalls: s,
    schedule: o,
    setNotifyFunction: (c) => {
      n = c;
    },
    setBatchNotifyFunction: (c) => {
      r = c;
    },
  };
}
const Re = p3();
class hg {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Gc(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t ?? (No ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class h3 extends hg {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || _d),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || m3(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(t, n) {
    const r = Zc(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual,
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({ type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (
      (n = this.retryer) == null || n.cancel(t),
      r ? r.then(Tt).catch(Tt) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !ug(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, n) {
    var r, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var o;
        return (o = this.retryer) == null || o.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((g) => g.options.queryFn);
      v && this.setOptions(v.options);
    }
    const s = a3(),
      l = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      u = (v) => {
        Object.defineProperty(v, "signal", {
          enumerable: !0,
          get: () => {
            if (s) return (this.abortSignalConsumed = !0), s.signal;
          },
        });
      };
    u(l);
    const a = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(l))
          : Promise.reject(
              "Missing queryFn for queryKey '" + this.options.queryHash + "'"
            ),
      c = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: a,
      };
    if (
      (u(c),
      (r = this.options.behavior) == null || r.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((i = c.fetchOptions) == null ? void 0 : i.meta))
    ) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = c.fetchOptions) == null ? void 0 : d.meta,
      });
    }
    const p = (v) => {
      if (
        ((Ys(v) && v.silent) || this.dispatch({ type: "error", error: v }),
        !Ys(v))
      ) {
        var g, S, _, h;
        (g = (S = this.cache.config).onError) == null || g.call(S, v, this),
          (_ = (h = this.cache.config).onSettled) == null ||
            _.call(h, this.state.data, v, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = pg({
        fn: c.fetchFn,
        abort: s == null ? void 0 : s.abort.bind(s),
        onSuccess: (v) => {
          var g, S, _, h;
          if (typeof v > "u") {
            p(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(v),
            (g = (S = this.cache.config).onSuccess) == null ||
              g.call(S, v, this),
            (_ = (h = this.cache.config).onSettled) == null ||
              _.call(h, v, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: p,
        onFail: (v, g) => {
          this.dispatch({ type: "failed", failureCount: v, error: g });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var i, o;
      switch (t.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error,
          };
        case "pause":
          return { ...r, fetchStatus: "paused" };
        case "continue":
          return { ...r, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = t.meta) != null ? i : null,
            fetchStatus: Ou(this.options.networkMode) ? "fetching" : "paused",
            ...(!r.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (o = t.dataUpdatedAt) != null ? o : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case "error":
          const s = t.error;
          return Ys(s) && s.revert && this.revertState
            ? { ...this.revertState, fetchStatus: "idle" }
            : {
                ...r,
                error: s,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...r, isInvalidated: !0 };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      Re.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function m3(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = typeof t < "u",
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class y3 extends Ti {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, n, r) {
    var i;
    const o = n.queryKey,
      s = (i = n.queryHash) != null ? i : Rd(o, n);
    let l = this.get(s);
    return (
      l ||
        ((l = new h3({
          cache: this,
          logger: t.getLogger(),
          queryKey: o,
          queryHash: s,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(o),
        })),
        this.add(l)),
      l
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    Re.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = zn(t, n);
    return (
      typeof r.exact > "u" && (r.exact = !0), this.queries.find((i) => Nh(r, i))
    );
  }
  findAll(t, n) {
    const [r] = zn(t, n);
    return Object.keys(r).length > 0
      ? this.queries.filter((i) => Nh(r, i))
      : this.queries;
  }
  notify(t) {
    Re.batch(() => {
      this.listeners.forEach(({ listener: n }) => {
        n(t);
      });
    });
  }
  onFocus() {
    Re.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Re.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class g3 extends hg {
  constructor(t) {
    super(),
      (this.defaultOptions = t.defaultOptions),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || _d),
      (this.observers = []),
      (this.state = t.state || mg()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: t,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    var t, n;
    return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null
      ? t
      : this.execute();
  }
  async execute() {
    const t = () => {
        var R;
        return (
          (this.retryer = pg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (w, O) => {
              this.dispatch({ type: "failed", failureCount: w, error: O });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (R = this.options.retry) != null ? R : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === "loading";
    try {
      var r, i, o, s, l, u, a, c;
      if (!n) {
        var d, p, v, g;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((d = (p = this.mutationCache.config).onMutate) == null
            ? void 0
            : d.call(p, this.state.variables, this));
        const w = await ((v = (g = this.options).onMutate) == null
          ? void 0
          : v.call(g, this.state.variables));
        w !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: w,
            variables: this.state.variables,
          });
      }
      const R = await t();
      return (
        await ((r = (i = this.mutationCache.config).onSuccess) == null
          ? void 0
          : r.call(i, R, this.state.variables, this.state.context, this)),
        await ((o = (s = this.options).onSuccess) == null
          ? void 0
          : o.call(s, R, this.state.variables, this.state.context)),
        await ((l = (u = this.mutationCache.config).onSettled) == null
          ? void 0
          : l.call(u, R, null, this.state.variables, this.state.context, this)),
        await ((a = (c = this.options).onSettled) == null
          ? void 0
          : a.call(c, R, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: R }),
        R
      );
    } catch (R) {
      try {
        var S, _, h, f, m, k, E, P;
        throw (
          (await ((S = (_ = this.mutationCache.config).onError) == null
            ? void 0
            : S.call(_, R, this.state.variables, this.state.context, this)),
          await ((h = (f = this.options).onError) == null
            ? void 0
            : h.call(f, R, this.state.variables, this.state.context)),
          await ((m = (k = this.mutationCache.config).onSettled) == null
            ? void 0
            : m.call(
                k,
                void 0,
                R,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((E = (P = this.options).onSettled) == null
            ? void 0
            : E.call(P, void 0, R, this.state.variables, this.state.context)),
          R)
        );
      } finally {
        this.dispatch({ type: "error", error: R });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "loading":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Ou(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      Re.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function mg() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class v3 extends Ti {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, n, r) {
    const i = new g3({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey
        ? t.getMutationDefaults(n.mutationKey)
        : void 0,
    });
    return this.add(i), i;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)),
      this.notify({ type: "removed", mutation: t });
  }
  clear() {
    Re.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > "u" && (t.exact = !0),
      this.mutations.find((n) => Ih(t, n))
    );
  }
  findAll(t) {
    return this.mutations.filter((n) => Ih(t, n));
  }
  notify(t) {
    Re.batch(() => {
      this.listeners.forEach(({ listener: n }) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const n = this.mutations.filter((r) => r.state.isPaused);
          return Re.batch(() =>
            n.reduce(
              (r, i) => r.then(() => i.continue().catch(Tt)),
              Promise.resolve()
            )
          );
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function w3() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, i, o, s;
        const l =
            (t = e.fetchOptions) == null || (n = t.meta) == null
              ? void 0
              : n.refetchPage,
          u =
            (r = e.fetchOptions) == null || (i = r.meta) == null
              ? void 0
              : i.fetchMore,
          a = u == null ? void 0 : u.pageParam,
          c = (u == null ? void 0 : u.direction) === "forward",
          d = (u == null ? void 0 : u.direction) === "backward",
          p = ((o = e.state.data) == null ? void 0 : o.pages) || [],
          v = ((s = e.state.data) == null ? void 0 : s.pageParams) || [];
        let g = v,
          S = !1;
        const _ = (P) => {
            Object.defineProperty(P, "signal", {
              enumerable: !0,
              get: () => {
                var R;
                if ((R = e.signal) != null && R.aborted) S = !0;
                else {
                  var w;
                  (w = e.signal) == null ||
                    w.addEventListener("abort", () => {
                      S = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          h =
            e.options.queryFn ||
            (() =>
              Promise.reject(
                "Missing queryFn for queryKey '" + e.options.queryHash + "'"
              )),
          f = (P, R, w, O) => (
            (g = O ? [R, ...g] : [...g, R]), O ? [w, ...P] : [...P, w]
          ),
          m = (P, R, w, O) => {
            if (S) return Promise.reject("Cancelled");
            if (typeof w > "u" && !R && P.length) return Promise.resolve(P);
            const L = {
              queryKey: e.queryKey,
              pageParam: w,
              meta: e.options.meta,
            };
            _(L);
            const D = h(L);
            return Promise.resolve(D).then((T) => f(P, w, T, O));
          };
        let k;
        if (!p.length) k = m([]);
        else if (c) {
          const P = typeof a < "u",
            R = P ? a : Hh(e.options, p);
          k = m(p, P, R);
        } else if (d) {
          const P = typeof a < "u",
            R = P ? a : x3(e.options, p);
          k = m(p, P, R, !0);
        } else {
          g = [];
          const P = typeof e.options.getNextPageParam > "u";
          k = (l && p[0] ? l(p[0], 0, p) : !0)
            ? m([], P, v[0])
            : Promise.resolve(f([], v[0], p[0]));
          for (let w = 1; w < p.length; w++)
            k = k.then((O) => {
              if (l && p[w] ? l(p[w], w, p) : !0) {
                const D = P ? v[w] : Hh(e.options, O);
                return m(O, P, D);
              }
              return Promise.resolve(f(O, v[w], p[w]));
            });
        }
        return k.then((P) => ({ pages: P, pageParams: g }));
      };
    },
  };
}
function Hh(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function x3(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class S3 {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new y3()),
      (this.mutationCache = t.mutationCache || new v3()),
      (this.logger = t.logger || _d),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Ul.subscribe(() => {
          Ul.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = Vl.subscribe(() => {
          Vl.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, n;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (n = this.unsubscribeOnline) == null || n.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, n) {
    const [r] = zn(t, n);
    return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t, n, r) {
    const i = Ji(t, n, r),
      o = this.getQueryData(i.queryKey);
    return o ? Promise.resolve(o) : this.fetchQuery(i);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const i = r.data;
        return [n, i];
      });
  }
  setQueryData(t, n, r) {
    const i = this.queryCache.find(t),
      o = i == null ? void 0 : i.state.data,
      s = l3(n, o);
    if (typeof s > "u") return;
    const l = Ji(t),
      u = this.defaultQueryOptions(l);
    return this.queryCache.build(this, u).setData(s, { ...r, manual: !0 });
  }
  setQueriesData(t, n, r) {
    return Re.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: i }) => [i, this.setQueryData(i, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = zn(t, n),
      i = this.queryCache;
    Re.batch(() => {
      i.findAll(r).forEach((o) => {
        i.remove(o);
      });
    });
  }
  resetQueries(t, n, r) {
    const [i, o] = zn(t, n, r),
      s = this.queryCache,
      l = { type: "active", ...i };
    return Re.batch(
      () => (
        s.findAll(i).forEach((u) => {
          u.reset();
        }),
        this.refetchQueries(l, o)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [i, o = {}] = zn(t, n, r);
    typeof o.revert > "u" && (o.revert = !0);
    const s = Re.batch(() =>
      this.queryCache.findAll(i).map((l) => l.cancel(o))
    );
    return Promise.all(s).then(Tt).catch(Tt);
  }
  invalidateQueries(t, n, r) {
    const [i, o] = zn(t, n, r);
    return Re.batch(() => {
      var s, l;
      if (
        (this.queryCache.findAll(i).forEach((a) => {
          a.invalidate();
        }),
        i.refetchType === "none")
      )
        return Promise.resolve();
      const u = {
        ...i,
        type:
          (s = (l = i.refetchType) != null ? l : i.type) != null ? s : "active",
      };
      return this.refetchQueries(u, o);
    });
  }
  refetchQueries(t, n, r) {
    const [i, o] = zn(t, n, r),
      s = Re.batch(() =>
        this.queryCache
          .findAll(i)
          .filter((u) => !u.isDisabled())
          .map((u) => {
            var a;
            return u.fetch(void 0, {
              ...o,
              cancelRefetch:
                (a = o == null ? void 0 : o.cancelRefetch) != null ? a : !0,
              meta: { refetchPage: i.refetchPage },
            });
          })
      );
    let l = Promise.all(s).then(Tt);
    return (o != null && o.throwOnError) || (l = l.catch(Tt)), l;
  }
  fetchQuery(t, n, r) {
    const i = Ji(t, n, r),
      o = this.defaultQueryOptions(i);
    typeof o.retry > "u" && (o.retry = !1);
    const s = this.queryCache.build(this, o);
    return s.isStaleByTime(o.staleTime)
      ? s.fetch(o)
      : Promise.resolve(s.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(Tt).catch(Tt);
  }
  fetchInfiniteQuery(t, n, r) {
    const i = Ji(t, n, r);
    return (i.behavior = w3()), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(Tt).catch(Tt);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((i) => kr(t) === kr(i.queryKey));
    r
      ? (r.defaultOptions = n)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => zl(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((i) => kr(t) === kr(i.mutationKey));
    r
      ? (r.defaultOptions = n)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => zl(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = Rd(n.queryKey, n)),
      typeof n.refetchOnReconnect > "u" &&
        (n.refetchOnReconnect = n.networkMode !== "always"),
      typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class k3 extends Ti {
  constructor(t, n) {
    super(),
      (this.client = t),
      (this.options = n),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(n);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.currentQuery.addObserver(this),
      Wh(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Jc(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Jc(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = new Set()),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options,
      i = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      Bl(r, this.options) ||
        this.client
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.currentQuery,
            observer: this,
          }),
      typeof this.options.enabled < "u" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey),
      this.updateQuery();
    const o = this.hasListeners();
    o && Qh(this.currentQuery, i, this.options, r) && this.executeFetch(),
      this.updateResult(n),
      o &&
        (this.currentQuery !== i ||
          this.options.enabled !== r.enabled ||
          this.options.staleTime !== r.staleTime) &&
        this.updateStaleTimeout();
    const s = this.computeRefetchInterval();
    o &&
      (this.currentQuery !== i ||
        this.options.enabled !== r.enabled ||
        s !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(s);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t),
      r = this.createResult(n, t);
    return (
      E3(this, r, t) &&
        ((this.currentResult = r),
        (this.currentResultOptions = this.options),
        (this.currentResultState = this.currentQuery.state)),
      r
    );
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const n = {};
    return (
      Object.keys(t).forEach((r) => {
        Object.defineProperty(n, r, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(r), t[r]),
        });
      }),
      n
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...n } = {}) {
    return this.fetch({ ...n, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const n = this.client.defaultQueryOptions(t),
      r = this.client.getQueryCache().build(this.client, n);
    return (
      (r.isFetchingOptimistic = !0),
      r.fetch().then(() => this.createResult(r, n))
    );
  }
  fetch(t) {
    var n;
    return this.executeFetch({
      ...t,
      cancelRefetch: (n = t.cancelRefetch) != null ? n : !0,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, t);
    return (t != null && t.throwOnError) || (n = n.catch(Tt)), n;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      No || this.currentResult.isStale || !Gc(this.options.staleTime))
    )
      return;
    const n = ug(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(
        No ||
        this.options.enabled === !1 ||
        !Gc(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Ul.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(t, n) {
    const r = this.currentQuery,
      i = this.options,
      o = this.currentResult,
      s = this.currentResultState,
      l = this.currentResultOptions,
      u = t !== r,
      a = u ? t.state : this.currentQueryInitialState,
      c = u ? this.currentResult : this.previousQueryResult,
      { state: d } = t;
    let {
        dataUpdatedAt: p,
        error: v,
        errorUpdatedAt: g,
        fetchStatus: S,
        status: _,
      } = d,
      h = !1,
      f = !1,
      m;
    if (n._optimisticResults) {
      const w = this.hasListeners(),
        O = !w && Wh(t, n),
        L = w && Qh(t, r, n, i);
      (O || L) &&
        ((S = Ou(t.options.networkMode) ? "fetching" : "paused"),
        p || (_ = "loading")),
        n._optimisticResults === "isRestoring" && (S = "idle");
    }
    if (
      n.keepPreviousData &&
      !d.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      _ !== "error"
    )
      (m = c.data), (p = c.dataUpdatedAt), (_ = c.status), (h = !0);
    else if (n.select && typeof d.data < "u")
      if (
        o &&
        d.data === (s == null ? void 0 : s.data) &&
        n.select === this.selectFn
      )
        m = this.selectResult;
      else
        try {
          (this.selectFn = n.select),
            (m = n.select(d.data)),
            (m = Zc(o == null ? void 0 : o.data, m, n)),
            (this.selectResult = m),
            (this.selectError = null);
        } catch (w) {
          this.selectError = w;
        }
    else m = d.data;
    if (typeof n.placeholderData < "u" && typeof m > "u" && _ === "loading") {
      let w;
      if (
        o != null &&
        o.isPlaceholderData &&
        n.placeholderData === (l == null ? void 0 : l.placeholderData)
      )
        w = o.data;
      else if (
        ((w =
          typeof n.placeholderData == "function"
            ? n.placeholderData()
            : n.placeholderData),
        n.select && typeof w < "u")
      )
        try {
          (w = n.select(w)), (this.selectError = null);
        } catch (O) {
          this.selectError = O;
        }
      typeof w < "u" &&
        ((_ = "success"),
        (m = Zc(o == null ? void 0 : o.data, w, n)),
        (f = !0));
    }
    this.selectError &&
      ((v = this.selectError),
      (m = this.selectResult),
      (g = Date.now()),
      (_ = "error"));
    const k = S === "fetching",
      E = _ === "loading",
      P = _ === "error";
    return {
      status: _,
      fetchStatus: S,
      isLoading: E,
      isSuccess: _ === "success",
      isError: P,
      isInitialLoading: E && k,
      data: m,
      dataUpdatedAt: p,
      error: v,
      errorUpdatedAt: g,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount:
        d.dataUpdateCount > a.dataUpdateCount ||
        d.errorUpdateCount > a.errorUpdateCount,
      isFetching: k,
      isRefetching: k && !E,
      isLoadingError: P && d.dataUpdatedAt === 0,
      isPaused: S === "paused",
      isPlaceholderData: f,
      isPreviousData: h,
      isRefetchError: P && d.dataUpdatedAt !== 0,
      isStale: bd(t, n),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const n = this.currentResult,
      r = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      Bl(r, n))
    )
      return;
    this.currentResult = r;
    const i = { cache: !0 },
      o = () => {
        if (!n) return !0;
        const { notifyOnChangeProps: s } = this.options,
          l = typeof s == "function" ? s() : s;
        if (l === "all" || (!l && !this.trackedProps.size)) return !0;
        const u = new Set(l ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && u.add("error"),
          Object.keys(this.currentResult).some((a) => {
            const c = a;
            return this.currentResult[c] !== n[c] && u.has(c);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0),
      this.notify({ ...i, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const n = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (n == null || n.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const n = {};
    t.type === "success"
      ? (n.onSuccess = !t.manual)
      : t.type === "error" && !Ys(t.error) && (n.onError = !0),
      this.updateResult(n),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    Re.batch(() => {
      if (t.onSuccess) {
        var n, r, i, o;
        (n = (r = this.options).onSuccess) == null ||
          n.call(r, this.currentResult.data),
          (i = (o = this.options).onSettled) == null ||
            i.call(o, this.currentResult.data, null);
      } else if (t.onError) {
        var s, l, u, a;
        (s = (l = this.options).onError) == null ||
          s.call(l, this.currentResult.error),
          (u = (a = this.options).onSettled) == null ||
            u.call(a, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        }),
        t.cache &&
          this.client
            .getQueryCache()
            .notify({
              query: this.currentQuery,
              type: "observerResultsUpdated",
            });
    });
  }
}
function C3(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Wh(e, t) {
  return C3(e, t) || (e.state.dataUpdatedAt > 0 && Jc(e, t, t.refetchOnMount));
}
function Jc(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && bd(e, t));
  }
  return !1;
}
function Qh(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    bd(e, n)
  );
}
function bd(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function E3(e, t, n) {
  return n.keepPreviousData
    ? !1
    : n.placeholderData !== void 0
    ? t.isPlaceholderData
    : !Bl(e.getCurrentResult(), t);
}
let R3 = class extends Ti {
  constructor(t, n) {
    super(),
      (this.client = t),
      this.setOptions(n),
      this.bindMethods(),
      this.updateResult();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(t) {
    var n;
    const r = this.options;
    (this.options = this.client.defaultMutationOptions(t)),
      Bl(r, this.options) ||
        this.client
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.currentMutation,
            observer: this,
          }),
      (n = this.currentMutation) == null || n.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.currentMutation) == null || t.removeObserver(this);
    }
  }
  onMutationUpdate(t) {
    this.updateResult();
    const n = { listeners: !0 };
    t.type === "success"
      ? (n.onSuccess = !0)
      : t.type === "error" && (n.onError = !0),
      this.notify(n);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    (this.currentMutation = void 0),
      this.updateResult(),
      this.notify({ listeners: !0 });
  }
  mutate(t, n) {
    return (
      (this.mutateOptions = n),
      this.currentMutation && this.currentMutation.removeObserver(this),
      (this.currentMutation = this.client
        .getMutationCache()
        .build(this.client, {
          ...this.options,
          variables: typeof t < "u" ? t : this.options.variables,
        })),
      this.currentMutation.addObserver(this),
      this.currentMutation.execute()
    );
  }
  updateResult() {
    const t = this.currentMutation ? this.currentMutation.state : mg(),
      n = {
        ...t,
        isLoading: t.status === "loading",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    this.currentResult = n;
  }
  notify(t) {
    Re.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (t.onSuccess) {
          var n, r, i, o;
          (n = (r = this.mutateOptions).onSuccess) == null ||
            n.call(
              r,
              this.currentResult.data,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (i = (o = this.mutateOptions).onSettled) == null ||
              i.call(
                o,
                this.currentResult.data,
                null,
                this.currentResult.variables,
                this.currentResult.context
              );
        } else if (t.onError) {
          var s, l, u, a;
          (s = (l = this.mutateOptions).onError) == null ||
            s.call(
              l,
              this.currentResult.error,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (u = (a = this.mutateOptions).onSettled) == null ||
              u.call(
                a,
                void 0,
                this.currentResult.error,
                this.currentResult.variables,
                this.currentResult.context
              );
        }
      }
      t.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        });
    });
  }
};
var yg = { exports: {} },
  gg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ei = X;
function _3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var b3 = typeof Object.is == "function" ? Object.is : _3,
  P3 = Ei.useState,
  O3 = Ei.useEffect,
  T3 = Ei.useLayoutEffect,
  $3 = Ei.useDebugValue;
function F3(e, t) {
  var n = t(),
    r = P3({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    T3(
      function () {
        (i.value = n), (i.getSnapshot = t), Ca(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    O3(
      function () {
        return (
          Ca(i) && o({ inst: i }),
          e(function () {
            Ca(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    $3(n),
    n
  );
}
function Ca(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !b3(e, n);
  } catch {
    return !0;
  }
}
function A3(e, t) {
  return t();
}
var L3 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? A3
    : F3;
gg.useSyncExternalStore =
  Ei.useSyncExternalStore !== void 0 ? Ei.useSyncExternalStore : L3;
yg.exports = gg;
var D3 = yg.exports;
const vg = D3.useSyncExternalStore,
  qh = X.createContext(void 0),
  wg = X.createContext(!1);
function xg(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = qh),
        window.ReactQueryClientContext)
      : qh)
  );
}
const Sg = ({ context: e } = {}) => {
    const t = X.useContext(xg(e, X.useContext(wg)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  M3 = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
    X.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const i = xg(n, r);
    return X.createElement(
      wg.Provider,
      { value: !n && r },
      X.createElement(i.Provider, { value: e }, t)
    );
  },
  kg = X.createContext(!1),
  j3 = () => X.useContext(kg);
kg.Provider;
function N3() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const I3 = X.createContext(N3()),
  z3 = () => X.useContext(I3);
function Cg(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const B3 = (e, t) => {
    (e.suspense || e.useErrorBoundary) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  U3 = (e) => {
    X.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  V3 = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && Cg(n, [e.error, r]),
  H3 = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  W3 = (e, t) => e.isLoading && e.isFetching && !t,
  Q3 = (e, t, n) => (e == null ? void 0 : e.suspense) && W3(t, n),
  q3 = (e, t, n) =>
    t
      .fetchOptimistic(e)
      .then(({ data: r }) => {
        e.onSuccess == null || e.onSuccess(r),
          e.onSettled == null || e.onSettled(r, null);
      })
      .catch((r) => {
        n.clearReset(),
          e.onError == null || e.onError(r),
          e.onSettled == null || e.onSettled(void 0, r);
      });
function Y3(e, t) {
  const n = Sg({ context: e.context }),
    r = j3(),
    i = z3(),
    o = n.defaultQueryOptions(e);
  (o._optimisticResults = r ? "isRestoring" : "optimistic"),
    o.onError && (o.onError = Re.batchCalls(o.onError)),
    o.onSuccess && (o.onSuccess = Re.batchCalls(o.onSuccess)),
    o.onSettled && (o.onSettled = Re.batchCalls(o.onSettled)),
    H3(o),
    B3(o, i),
    U3(i);
  const [s] = X.useState(() => new t(n, o)),
    l = s.getOptimisticResult(o);
  if (
    (vg(
      X.useCallback(
        (u) => {
          const a = r ? () => {} : s.subscribe(Re.batchCalls(u));
          return s.updateResult(), a;
        },
        [s, r]
      ),
      () => s.getCurrentResult(),
      () => s.getCurrentResult()
    ),
    X.useEffect(() => {
      s.setOptions(o, { listeners: !1 });
    }, [o, s]),
    Q3(o, l, r))
  )
    throw q3(o, s, i);
  if (
    V3({
      result: l,
      errorResetBoundary: i,
      useErrorBoundary: o.useErrorBoundary,
      query: s.getCurrentQuery(),
    })
  )
    throw l.error;
  return o.notifyOnChangeProps ? l : s.trackResult(l);
}
function $i(e, t, n) {
  const r = Ji(e, t, n);
  return Y3(r, k3);
}
function Tu(e, t, n) {
  const r = u3(e, t, n),
    i = Sg({ context: r.context }),
    [o] = X.useState(() => new R3(i, r));
  X.useEffect(() => {
    o.setOptions(r);
  }, [o, r]);
  const s = vg(
      X.useCallback((u) => o.subscribe(Re.batchCalls(u)), [o]),
      () => o.getCurrentResult(),
      () => o.getCurrentResult()
    ),
    l = X.useCallback(
      (u, a) => {
        o.mutate(u, a).catch(K3);
      },
      [o]
    );
  if (s.error && Cg(o.options.useErrorBoundary, [s.error])) throw s.error;
  return { ...s, mutate: l, mutateAsync: s.mutate };
}
function K3() {}
function Eg(e) {
  return URL.createObjectURL(new Blob([e], { type: "image/*" }));
}
function Rg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: G3 } = Object.prototype,
  { getPrototypeOf: Pd } = Object,
  $u = ((e) => (t) => {
    const n = G3.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  pn = (e) => ((e = e.toLowerCase()), (t) => $u(t) === e),
  Fu = (e) => (t) => typeof t === e,
  { isArray: Fi } = Array,
  Io = Fu("undefined");
function X3(e) {
  return (
    e !== null &&
    !Io(e) &&
    e.constructor !== null &&
    !Io(e.constructor) &&
    Mt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const _g = pn("ArrayBuffer");
function Z3(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _g(e.buffer)),
    t
  );
}
const J3 = Fu("string"),
  Mt = Fu("function"),
  bg = Fu("number"),
  Au = (e) => e !== null && typeof e == "object",
  ek = (e) => e === !0 || e === !1,
  Ks = (e) => {
    if ($u(e) !== "object") return !1;
    const t = Pd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  tk = pn("Date"),
  nk = pn("File"),
  rk = pn("Blob"),
  ik = pn("FileList"),
  ok = (e) => Au(e) && Mt(e.pipe),
  sk = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Mt(e.append) &&
          ((t = $u(e)) === "formdata" ||
            (t === "object" &&
              Mt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lk = pn("URLSearchParams"),
  uk = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function es(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Fi(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let l;
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Pg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Og = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Tg = (e) => !Io(e) && e !== Og;
function ef() {
  const { caseless: e } = (Tg(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && Pg(t, i)) || i;
      Ks(t[o]) && Ks(r)
        ? (t[o] = ef(t[o], r))
        : Ks(r)
        ? (t[o] = ef({}, r))
        : Fi(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && es(arguments[r], n);
  return t;
}
const ak = (e, t, n, { allOwnKeys: r } = {}) => (
    es(
      t,
      (i, o) => {
        n && Mt(i) ? (e[o] = Rg(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ck = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  fk = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  dk = (e, t, n, r) => {
    let i, o, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && Pd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  pk = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  hk = (e) => {
    if (!e) return null;
    if (Fi(e)) return e;
    let t = e.length;
    if (!bg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  mk = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Pd(Uint8Array)),
  yk = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  gk = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  vk = pn("HTMLFormElement"),
  wk = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Yh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  xk = pn("RegExp"),
  $g = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    es(n, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (r[o] = s || i);
    }),
      Object.defineProperties(e, r);
  },
  Sk = (e) => {
    $g(e, (t, n) => {
      if (Mt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Mt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  kk = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Fi(e) ? r(e) : r(String(e).split(t)), n;
  },
  Ck = () => {},
  Ek = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ea = "abcdefghijklmnopqrstuvwxyz",
  Kh = "0123456789",
  Fg = { DIGIT: Kh, ALPHA: Ea, ALPHA_DIGIT: Ea + Ea.toUpperCase() + Kh },
  Rk = (e = 16, t = Fg.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function _k(e) {
  return !!(
    e &&
    Mt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const bk = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Au(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Fi(r) ? [] : {};
            return (
              es(r, (s, l) => {
                const u = n(s, i + 1);
                !Io(u) && (o[l] = u);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Pk = pn("AsyncFunction"),
  Ok = (e) => e && (Au(e) || Mt(e)) && Mt(e.then) && Mt(e.catch),
  $ = {
    isArray: Fi,
    isArrayBuffer: _g,
    isBuffer: X3,
    isFormData: sk,
    isArrayBufferView: Z3,
    isString: J3,
    isNumber: bg,
    isBoolean: ek,
    isObject: Au,
    isPlainObject: Ks,
    isUndefined: Io,
    isDate: tk,
    isFile: nk,
    isBlob: rk,
    isRegExp: xk,
    isFunction: Mt,
    isStream: ok,
    isURLSearchParams: lk,
    isTypedArray: mk,
    isFileList: ik,
    forEach: es,
    merge: ef,
    extend: ak,
    trim: uk,
    stripBOM: ck,
    inherits: fk,
    toFlatObject: dk,
    kindOf: $u,
    kindOfTest: pn,
    endsWith: pk,
    toArray: hk,
    forEachEntry: yk,
    matchAll: gk,
    isHTMLForm: vk,
    hasOwnProperty: Yh,
    hasOwnProp: Yh,
    reduceDescriptors: $g,
    freezeMethods: Sk,
    toObjectSet: kk,
    toCamelCase: wk,
    noop: Ck,
    toFiniteNumber: Ek,
    findKey: Pg,
    global: Og,
    isContextDefined: Tg,
    ALPHABET: Fg,
    generateString: Rk,
    isSpecCompliantForm: _k,
    toJSONObject: bk,
    isAsyncFn: Pk,
    isThenable: Ok,
  };
function ie(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
$.inherits(ie, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: $.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Ag = ie.prototype,
  Lg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Lg[e] = { value: e };
});
Object.defineProperties(ie, Lg);
Object.defineProperty(Ag, "isAxiosError", { value: !0 });
ie.from = (e, t, n, r, i, o) => {
  const s = Object.create(Ag);
  return (
    $.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    ie.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const Tk = null;
function tf(e) {
  return $.isPlainObject(e) || $.isArray(e);
}
function Dg(e) {
  return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Dg(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function $k(e) {
  return $.isArray(e) && !e.some(tf);
}
const Fk = $.toFlatObject($, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Lu(e, t, n) {
  if (!$.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = $.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, _) {
        return !$.isUndefined(_[S]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && $.isSpecCompliantForm(t);
  if (!$.isFunction(i)) throw new TypeError("visitor must be a function");
  function a(g) {
    if (g === null) return "";
    if ($.isDate(g)) return g.toISOString();
    if (!u && $.isBlob(g))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return $.isArrayBuffer(g) || $.isTypedArray(g)
      ? u && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, S, _) {
    let h = g;
    if (g && !_ && typeof g == "object") {
      if ($.endsWith(S, "{}"))
        (S = r ? S : S.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        ($.isArray(g) && $k(g)) ||
        (($.isFileList(g) || $.endsWith(S, "[]")) && (h = $.toArray(g)))
      )
        return (
          (S = Dg(S)),
          h.forEach(function (m, k) {
            !($.isUndefined(m) || m === null) &&
              t.append(
                s === !0 ? Gh([S], k, o) : s === null ? S : S + "[]",
                a(m)
              );
          }),
          !1
        );
    }
    return tf(g) ? !0 : (t.append(Gh(_, S, o), a(g)), !1);
  }
  const d = [],
    p = Object.assign(Fk, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: tf,
    });
  function v(g, S) {
    if (!$.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      d.push(g),
        $.forEach(g, function (h, f) {
          (!($.isUndefined(h) || h === null) &&
            i.call(t, h, $.isString(f) ? f.trim() : f, S, p)) === !0 &&
            v(h, S ? S.concat(f) : [f]);
        }),
        d.pop();
    }
  }
  if (!$.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function Xh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Od(e, t) {
  (this._pairs = []), e && Lu(e, this, t);
}
const Mg = Od.prototype;
Mg.append = function (t, n) {
  this._pairs.push([t, n]);
};
Mg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Xh);
      }
    : Xh;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function Ak(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function jg(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Ak,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = $.isURLSearchParams(t) ? t.toString() : new Od(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Lk {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    $.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Zh = Lk,
  Ng = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Dk = typeof URLSearchParams < "u" ? URLSearchParams : Od,
  Mk = typeof FormData < "u" ? FormData : null,
  jk = typeof Blob < "u" ? Blob : null,
  Nk = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  Ik = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  ln = {
    isBrowser: !0,
    classes: { URLSearchParams: Dk, FormData: Mk, Blob: jk },
    isStandardBrowserEnv: Nk,
    isStandardBrowserWebWorkerEnv: Ik,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function zk(e, t) {
  return Lu(
    e,
    new ln.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return ln.isNode && $.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Bk(e) {
  return $.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Uk(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Ig(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    const l = Number.isFinite(+s),
      u = o >= n.length;
    return (
      (s = !s && $.isArray(i) ? i.length : s),
      u
        ? ($.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !$.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && $.isArray(i[s]) && (i[s] = Uk(i[s])),
          !l)
    );
  }
  if ($.isFormData(e) && $.isFunction(e.entries)) {
    const n = {};
    return (
      $.forEachEntry(e, (r, i) => {
        t(Bk(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Vk(e, t, n) {
  if ($.isString(e))
    try {
      return (t || JSON.parse)(e), $.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Td = {
  transitional: Ng,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = $.isObject(t);
      if ((o && $.isHTMLForm(t) && (t = new FormData(t)), $.isFormData(t)))
        return i && i ? JSON.stringify(Ig(t)) : t;
      if (
        $.isArrayBuffer(t) ||
        $.isBuffer(t) ||
        $.isStream(t) ||
        $.isFile(t) ||
        $.isBlob(t)
      )
        return t;
      if ($.isArrayBufferView(t)) return t.buffer;
      if ($.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return zk(t, this.formSerializer).toString();
        if ((l = $.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Lu(
            l ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), Vk(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Td.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && $.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? ie.from(l, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ln.classes.FormData, Blob: ln.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
$.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Td.headers[e] = {};
});
const $d = Td,
  Hk = $.toObjectSet([
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
    "user-agent",
  ]),
  Wk = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && Hk[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Jh = Symbol("internals");
function Hi(e) {
  return e && String(e).trim().toLowerCase();
}
function Gs(e) {
  return e === !1 || e == null ? e : $.isArray(e) ? e.map(Gs) : String(e);
}
function Qk(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const qk = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ra(e, t, n, r, i) {
  if ($.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!$.isString(t))) {
    if ($.isString(r)) return t.indexOf(r) !== -1;
    if ($.isRegExp(r)) return r.test(t);
  }
}
function Yk(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Kk(e, t) {
  const n = $.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
class Du {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, u, a) {
      const c = Hi(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = $.findKey(i, c);
      (!d || i[d] === void 0 || a === !0 || (a === void 0 && i[d] !== !1)) &&
        (i[d || u] = Gs(l));
    }
    const s = (l, u) => $.forEach(l, (a, c) => o(a, c, u));
    return (
      $.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : $.isString(t) && (t = t.trim()) && !qk(t)
        ? s(Wk(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Hi(t)), t)) {
      const r = $.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Qk(i);
        if ($.isFunction(n)) return n.call(this, i, r);
        if ($.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Hi(t)), t)) {
      const r = $.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ra(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = Hi(s)), s)) {
        const l = $.findKey(r, s);
        l && (!n || Ra(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return $.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ra(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      $.forEach(this, (i, o) => {
        const s = $.findKey(r, o);
        if (s) {
          (n[s] = Gs(i)), delete n[o];
          return;
        }
        const l = t ? Yk(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Gs(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      $.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && $.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Jh] = this[Jh] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const l = Hi(s);
      r[l] || (Kk(i, s), (r[l] = !0));
    }
    return $.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Du.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
$.reduceDescriptors(Du.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
$.freezeMethods(Du);
const Cn = Du;
function _a(e, t) {
  const n = this || $d,
    r = t || n,
    i = Cn.from(r.headers);
  let o = r.data;
  return (
    $.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function zg(e) {
  return !!(e && e.__CANCEL__);
}
function ts(e, t, n) {
  ie.call(this, e ?? "canceled", ie.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
$.inherits(ts, ie, { __CANCEL__: !0 });
function Gk(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ie(
          "Request failed with status code " + n.status,
          [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Xk = ln.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, o, s, l) {
          const u = [];
          u.push(n + "=" + encodeURIComponent(r)),
            $.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()),
            $.isString(o) && u.push("path=" + o),
            $.isString(s) && u.push("domain=" + s),
            l === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function Zk(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Jk(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bg(e, t) {
  return e && !Zk(t) ? Jk(e, t) : t;
}
const e4 = ln.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(o) {
        let s = o;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (s) {
          const l = $.isString(s) ? i(s) : s;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function t4(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function n4(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[o];
      s || (s = a), (n[i] = u), (r[i] = a);
      let d = o,
        p = 0;
      for (; d !== i; ) (p += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), a - s < t)) return;
      const v = c && a - c;
      return v ? Math.round((p * 1e3) / v) : void 0;
    }
  );
}
function e0(e, t) {
  let n = 0;
  const r = n4(50, 250);
  return (i) => {
    const o = i.loaded,
      s = i.lengthComputable ? i.total : void 0,
      l = o - n,
      u = r(l),
      a = o <= s;
    n = o;
    const c = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && s && a ? (s - o) / u : void 0,
      event: i,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const r4 = typeof XMLHttpRequest < "u",
  i4 =
    r4 &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const o = Cn.from(e.headers).normalize(),
          s = e.responseType;
        let l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let a;
        $.isFormData(i) &&
          (ln.isStandardBrowserEnv || ln.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.getContentType(/^\s*multipart\/form-data/)
            ? $.isString((a = o.getContentType())) &&
              o.setContentType(a.replace(/^\s*(multipart\/form-data);+/, "$1"))
            : o.setContentType("multipart/form-data"));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            S = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(g + ":" + S));
        }
        const d = Bg(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), jg(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function p() {
          if (!c) return;
          const g = Cn.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            _ = {
              data:
                !s || s === "text" || s === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: g,
              config: e,
              request: c,
            };
          Gk(
            function (f) {
              n(f), u();
            },
            function (f) {
              r(f), u();
            },
            _
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = p)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (c.onabort = function () {
            c &&
              (r(new ie("Request aborted", ie.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new ie("Network Error", ie.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let S = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const _ = e.transitional || Ng;
            e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
              r(
                new ie(
                  S,
                  _.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          ln.isStandardBrowserEnv)
        ) {
          const g =
            (e.withCredentials || e4(d)) &&
            e.xsrfCookieName &&
            Xk.read(e.xsrfCookieName);
          g && o.set(e.xsrfHeaderName, g);
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            $.forEach(o.toJSON(), function (S, _) {
              c.setRequestHeader(_, S);
            }),
          $.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          s && s !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", e0(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", e0(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (g) => {
              c &&
                (r(!g || g.type ? new ts(null, e, c) : g),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const v = t4(d);
        if (v && ln.protocols.indexOf(v) === -1) {
          r(new ie("Unsupported protocol " + v + ":", ie.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  nf = { http: Tk, xhr: i4 };
$.forEach(nf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const t0 = (e) => `- ${e}`,
  o4 = (e) => $.isFunction(e) || e === null || e === !1,
  Ug = {
    getAdapter: (e) => {
      e = $.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let s;
        if (
          ((r = n),
          !o4(n) && ((r = nf[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ie(`Unknown adapter '${s}'`);
        if (r) break;
        i[s || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(t0).join(`
`)
            : " " + t0(o[0])
          : "as no adapter specified";
        throw new ie(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: nf,
  };
function ba(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ts(null, e);
}
function n0(e) {
  return (
    ba(e),
    (e.headers = Cn.from(e.headers)),
    (e.data = _a.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ug.getAdapter(e.adapter || $d.adapter)(e).then(
      function (r) {
        return (
          ba(e),
          (r.data = _a.call(e, e.transformResponse, r)),
          (r.headers = Cn.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          zg(r) ||
            (ba(e),
            r &&
              r.response &&
              ((r.response.data = _a.call(e, e.transformResponse, r.response)),
              (r.response.headers = Cn.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const r0 = (e) => (e instanceof Cn ? e.toJSON() : e);
function Ri(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, d) {
    return $.isPlainObject(a) && $.isPlainObject(c)
      ? $.merge.call({ caseless: d }, a, c)
      : $.isPlainObject(c)
      ? $.merge({}, c)
      : $.isArray(c)
      ? c.slice()
      : c;
  }
  function i(a, c, d) {
    if ($.isUndefined(c)) {
      if (!$.isUndefined(a)) return r(void 0, a, d);
    } else return r(a, c, d);
  }
  function o(a, c) {
    if (!$.isUndefined(c)) return r(void 0, c);
  }
  function s(a, c) {
    if ($.isUndefined(c)) {
      if (!$.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function l(a, c, d) {
    if (d in t) return r(a, c);
    if (d in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (a, c) => i(r0(a), r0(c), !0),
  };
  return (
    $.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = u[c] || i,
        p = d(e[c], t[c], c);
      ($.isUndefined(p) && d !== l) || (n[c] = p);
    }),
    n
  );
}
const Vg = "1.5.1",
  Fd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Fd[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const i0 = {};
Fd.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      "[Axios v" +
      Vg +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (o, s, l) => {
    if (t === !1)
      throw new ie(
        i(s, " has been removed" + (n ? " in " + n : "")),
        ie.ERR_DEPRECATED
      );
    return (
      n &&
        !i0[s] &&
        ((i0[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, l) : !0
    );
  };
};
function s4(e, t, n) {
  if (typeof e != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const l = e[o],
        u = l === void 0 || s(l, o, e);
      if (u !== !0)
        throw new ie("option " + o + " must be " + u, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ie("Unknown option " + o, ie.ERR_BAD_OPTION);
  }
}
const rf = { assertOptions: s4, validators: Fd },
  Fn = rf.validators;
class Hl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Zh(), response: new Zh() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ri(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      rf.assertOptions(
        r,
        {
          silentJSONParsing: Fn.transitional(Fn.boolean),
          forcedJSONParsing: Fn.transitional(Fn.boolean),
          clarifyTimeoutError: Fn.transitional(Fn.boolean),
        },
        !1
      ),
      i != null &&
        ($.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : rf.assertOptions(
              i,
              { encode: Fn.function, serialize: Fn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = o && $.merge(o.common, o[n.method]);
    o &&
      $.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete o[g];
        }
      ),
      (n.headers = Cn.concat(s, o));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(n) === !1) ||
        ((u = u && S.synchronous), l.unshift(S.fulfilled, S.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (S) {
      a.push(S.fulfilled, S.rejected);
    });
    let c,
      d = 0,
      p;
    if (!u) {
      const g = [n0.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, a),
          p = g.length,
          c = Promise.resolve(n);
        d < p;

      )
        c = c.then(g[d++], g[d++]);
      return c;
    }
    p = l.length;
    let v = n;
    for (d = 0; d < p; ) {
      const g = l[d++],
        S = l[d++];
      try {
        v = g(v);
      } catch (_) {
        S.call(this, _);
        break;
      }
    }
    try {
      c = n0.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, p = a.length; d < p; ) c = c.then(a[d++], a[d++]);
    return c;
  }
  getUri(t) {
    t = Ri(this.defaults, t);
    const n = Bg(t.baseURL, t.url);
    return jg(n, t.params, t.paramsSerializer);
  }
}
$.forEach(["delete", "get", "head", "options"], function (t) {
  Hl.prototype[t] = function (n, r) {
    return this.request(
      Ri(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
$.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(
        Ri(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (Hl.prototype[t] = n()), (Hl.prototype[t + "Form"] = n(!0));
});
const Xs = Hl;
class Ad {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new ts(o, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ad(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const l4 = Ad;
function u4(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function a4(e) {
  return $.isObject(e) && e.isAxiosError === !0;
}
const of = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(of).forEach(([e, t]) => {
  of[t] = e;
});
const c4 = of;
function Hg(e) {
  const t = new Xs(e),
    n = Rg(Xs.prototype.request, t);
  return (
    $.extend(n, Xs.prototype, t, { allOwnKeys: !0 }),
    $.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Hg(Ri(e, i));
    }),
    n
  );
}
const $e = Hg($d);
$e.Axios = Xs;
$e.CanceledError = ts;
$e.CancelToken = l4;
$e.isCancel = zg;
$e.VERSION = Vg;
$e.toFormData = Lu;
$e.AxiosError = ie;
$e.Cancel = $e.CanceledError;
$e.all = function (t) {
  return Promise.all(t);
};
$e.spread = u4;
$e.isAxiosError = a4;
$e.mergeConfig = Ri;
$e.AxiosHeaders = Cn;
$e.formToJSON = (e) => Ig($.isHTMLForm(e) ? new FormData(e) : e);
$e.getAdapter = Ug.getAdapter;
$e.HttpStatusCode = c4;
$e.default = $e;
const Wg = $e,
  f4 = "http://220.118.147.58:10087/api",
  d4 = { "Access-Control-Allow-Origin": "*" },
  ot = Wg.create({ baseURL: f4, headers: { ...d4 } });
ot.interceptors.request.use((e) => {
  const t = localStorage.getItem("NTBOT.access_token");
  return t && e.headers.setAuthorization(`Bearer ${t}`), e;
});
ot.interceptors.response.use(
  (e) => e,
  async (e) => {
    const { response: t, config: n } = e;
    if (t.status === 401) {
      const { data: r } = await ot.post("/customer/token", {
        url: "https://example.com/",
      });
      return (
        localStorage.setItem("NTBOT.access_token", r.id_token),
        (n.headers["access-token"] = r.id_token),
        await ot(n)
      );
    }
    return Promise.reject(e);
  }
);
const Qg = async () => {
    const { data: e } = await ot.get("/logo/bot", {
      responseType: "blob",
      headers: { Accept: "image/jpeg" },
    });
    return Eg(e);
  },
  p4 = async () => {
    const { data: e } = await ot.get("/logo/dialogue", {
      responseType: "blob",
      headers: { Accept: "image/jpeg" },
    });
    return Eg(e);
  },
  h4 = async () => {
    const { data: e } = await ot.get("/bot/channel/settings");
    return e;
  },
  m4 = async (e, t, n) => {
    const { data: r } = await ot.post("/statistics", {
      ip: e,
      browser: t,
      url: n,
    });
    return r;
  };
function y4() {
  return $i(["chatbot-logo"], () => Qg());
}
function Ld() {
  return $i(["channel-info"], () => h4());
}
const g4 = () => {
    const e = Ht(Cd),
      [t, n] = dr(Ed),
      r = () => {
        e((l) => !l);
      },
      i = () => {
        const l = window.parent.document.querySelector(
          "#chatbot-plugin-script"
        );
        if (l != null && l.classList.value.includes("hidden"))
          return l.classList.remove("hidden");
        l == null || l.classList.add("hidden");
      },
      { data: o } = y4(),
      { data: s } = Ld();
    return y.jsx(y.Fragment, {
      children:
        t === "chat"
          ? y.jsxs(Ph, {
              $chat: !0,
              children: [
                y.jsx(Oh, {
                  children: y.jsx("button", {
                    onClick: () => n("home"),
                    children: y.jsx(Jy, {}),
                  }),
                }),
                y.jsx(zS, { children: s.BotProfile ?? "EM | Connect" }),
                y.jsxs(Th, {
                  children: [
                    y.jsx("button", { onClick: r, children: y.jsx($h, {}) }),
                    y.jsx("button", { onClick: i, children: y.jsx(Kc, {}) }),
                  ],
                }),
              ],
            })
          : y.jsxs(Ph, {
              children: [
                y.jsxs(Oh, {
                  children: [
                    y.jsx(BS, {
                      logoImage: o,
                      children: o ? y.jsx("img", { src: o }) : y.jsx(Pu, {}),
                    }),
                    y.jsx(US, {
                      children: y.jsx(VS, {
                        children:
                          (s == null ? void 0 : s.ChannelTitle) ||
                          "EM | Connect",
                      }),
                    }),
                  ],
                }),
                y.jsxs(Th, {
                  children: [
                    y.jsx("button", { disabled: !0, children: y.jsx(YS, {}) }),
                    y.jsx("button", { onClick: r, children: y.jsx($h, {}) }),
                    y.jsx("button", { onClick: i, children: y.jsx(Kc, {}) }),
                  ],
                }),
              ],
            }),
    });
  },
  v4 = () =>
    y.jsx(y.Fragment, {
      children: y.jsx(qS, {
        children: "All copy rights to Koita 신고관리시스템 서비스 이용중",
      }),
    }),
  w4 = ({ children: e, buttonList: t, input: n }) =>
    y.jsx(y.Fragment, {
      children: y.jsxs(IS, {
        children: [
          y.jsx(g4, {}),
          y.jsx(HS, { children: e }),
          y.jsx(QS, { children: t }),
          n,
          y.jsx(v4, {}),
        ],
      }),
    }),
  x4 = K.div`
	flex: 0 1;
	border-radius: 12px;
	border: 1px solid #e8e8e8;
	display: flex;
	transition: 0.3s;
	padding: 20px;
	gap: 10px;

	&:hover {
		cursor: pointer;
		background: #e5f6ff;
		border-color: #99dbff;
	}
`,
  S4 = K.div`
	width: 40px;
	height: 40px;
	flex-shrink: 0;
	background: var(--primary-color);
	border-radius: 10px;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
`,
  k4 = K.div`
	display: flex;
	flex-direction: column;
	white-space: pre-wrap;
	gap: 4px;
`,
  C4 = K.em`
	font-style: normal;
	font-weight: 500;
	letter-spacing: -0.0525rem;
`,
  E4 = K.p`
	${Zy("16px", "3")};
`,
  R4 = K.div`
	width: 40px;
	height: 40px;
	flex-shrink: 0;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	img {
		width: 100%;
		object-fit: cover;
	}
`;
function qg() {
  return $i(["dialogue-logo"], () => p4());
}
const _4 = () => {
    const e = Ht(Ed),
      { data: t } = Ld(),
      { data: n } = qg();
    return t
      ? y.jsx(y.Fragment, {
          children: y.jsxs(x4, {
            onClick: () => {
              e("chat");
            },
            children: [
              n
                ? y.jsx(R4, { children: y.jsx("img", { src: n }) })
                : y.jsx(S4, { children: y.jsx(Pu, {}) }),
              y.jsxs(k4, {
                children: [
                  y.jsx(C4, { children: t.BotProfile }),
                  y.jsx(E4, { children: t.ChannelDescription }),
                ],
              }),
            ],
          }),
        })
      : y.jsx("div", {});
  },
  Yg = {
    small: He`
    height: 28px;
    line-height: 28px;
    font-size: 12px;
  `,
    default: He`
    height: 35px;
    line-height: 35px;
    font-size: 14px;
  `,
    large: He`
    height: 45px;
    line-height: 45px;
    font-size: 16px;
  `,
  },
  sf = K.input`
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  color: #333;
  background: #fff;
  border: 1px solid var(--bd-color);
  border-radius: 2px;
  transition: 0.3s ease-in-out;

  &:not(:disabled):not(.disabled):not([readonly]):not(.readonly) {
    &:hover,
    &:active,
    &:focus {
      border-color: var(--primary-color);
    }
    &::placeholder {
      color: #999;
    }
  }

  &:disabled,
  &.disabled {
    color: var(--bd-color);
    background: #fafafa;
    border-color: #e8e8e8;
    cursor: not-allowed;

    &::placeholder {
      color: #d7d7d7;
    }
  }

  &[readonly],
  &.readonly {
    color: #b2b2b2;
    background: #f8f8f8;
    border-color: #e4e4e4;
    cursor: default;
  }

  ${(e) => Yg[e.size || "default"]}
`,
  b4 = K.span`
  color: #999;
  position: absolute;
  right: 12px;

  ${(e) => Yg[e.size || "default"]}
`,
  P4 = K.div`
	min-width: 200px;
	height: fit-content;
	position: relative;
	margin-top: 16px;
	display: flex;
	align-items: center;

	.btn-send {
		height: 34px;
		border: 0 !important;
		padding: 0 !important;
		position: absolute;
		right: 10px;

		svg {
			fill: var(--bd-color);
		}

		&:not(:disabled):not(.disabled):not([readonly]):not(.readonly):hover svg {
			fill: var(--primary-color);
		}
	}

	${sf} {
		height: 60px;
		padding: 0 16px;
		border-width: 1px 0;
		border-color: #e8e8e8;

		&:not(:disabled):not(.disabled):not([readonly]):not(.readonly) {
			&:hover,
			&:active,
			&:focus {
				border-color: #e8e8e8;
			}
		}
	}
`,
  eo = ({
    register: e,
    name: t,
    type: n,
    className: r,
    size: i = "default",
    autoComplete: o,
    placeholder: s,
    disabled: l = !1,
    readonly: u = !1,
    maxLength: a,
    unit: c,
    required: d = !1,
    validation: p,
    onChange: v,
    onEnter: g,
    value: S,
  }) =>
    e
      ? y.jsxs(y.Fragment, {
          children: [
            y.jsx(sf, {
              type: n,
              className: `${r} f__item`,
              size: i,
              autoComplete: o,
              placeholder: s,
              disabled: l,
              readOnly: u,
              maxLength: a,
              ...e(t, {
                required:
                  d === !0 ? "필수 입력 사항 입니다." : d === null ? " " : d,
                ...p,
              }),
            }),
            c && y.jsx(b4, { size: i, children: c }),
          ],
        })
      : y.jsx(sf, {
          type: n,
          className: `${r} f__item`,
          size: i,
          autoComplete: o,
          placeholder: s,
          disabled: l,
          readOnly: u,
          maxLength: a,
          onChange: (_) => (v == null ? void 0 : v(_.target.value)),
          value: S,
          onKeyDown: (_) => {
            _.key === "Enter" &&
              !_.nativeEvent.isComposing &&
              (g == null || g());
          },
        }),
  O4 = {
    small: He`
		height: initial;
		min-height: 30px;
		text-align: right;
		border-radius: 20px;
		padding: 10px 20px;
		font-size: 14px;
		letter-spacing: -0.0525rem;
		line-height: 1.3;
	`,
    default: He`
		height: 60px;
		letter-spacing: -0.06rem;
	`,
  },
  T4 = {
    fill: He`
		color: #fff;
		${(e) => `
        background: var(--${e.color}-color);
      
      &:not(:disabled):not(.disabled):hover {
        background: var(--darken-${e.color}-color)
      }
      &:disabled, &.disabled {
      	background: var(--bd-color);
      }
    `}
	`,
    outline: He`
		${(e) => `
        border: 1px solid var(--${e.color}-color);
        color: var(--${e.color}-color);
        
        &:not(:disabled):not(.disabled):hover {
         background: var(--${e.color}-color); color: #fff;
        }
        
      &:disabled, &.disabled {
      	border-color: var(--bd-color);
      	color: var(--bd-color);
      }
    `}
	`,
    icon: He`
		border: unset;

		&:hover svg {
			fill: var(--primary-color);
		}
	`,
  },
  $4 = K.button`
	width: ${(e) => (e.width ? e.width : "auto")};
	font-weight: 500;
	padding: 0 20px;
	border-radius: ${(e) => (e.$radius ? "50px" : "12px")};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	transition: 0.3s;
	cursor: pointer;
	flex-shrink: 0;

	&:disabled,
	&.disabled {
		cursor: not-allowed;
		color: currentColor;
	}

	svg {
		fill: currentColor;
		transition: ease-in-out 0.3s;
	}

	// type
	${(e) => T4[e.states || "fill"]}
	${(e) => O4[e.size || "default"]}
`,
  Ot = ({
    width: e,
    height: t,
    font: n = "",
    size: r = "default",
    color: i = "primary",
    $radius: o = !0,
    states: s = "fill",
    children: l,
    disabled: u,
    ...a
  }) =>
    y.jsx($4, {
      width: e,
      height: t,
      font: n,
      size: r,
      color: i,
      $radius: o,
      states: s,
      disabled: u,
      ...a,
      children: l,
    }),
  F4 = ({
    name: e,
    className: t,
    placeholder: n,
    onClick: r,
    disabled: i,
    onChange: o,
    value: s,
  }) =>
    y.jsx(y.Fragment, {
      children: y.jsxs(P4, {
        className: t,
        disabled: i,
        children: [
          y.jsx(eo, {
            name: e,
            placeholder: n,
            disabled: i,
            onChange: o,
            onEnter: r,
            value: s,
          }),
          y.jsx(Ot, {
            className: "btn-send",
            states: "icon",
            onClick: r,
            disabled: i,
            children: y.jsx(KS, {}),
          }),
        ],
      }),
    }),
  A4 = async () => {
    const {
      data: { content: e },
    } = await ot.get("/notification?page=0&size=100&activated=true");
    return e.filter((t) => t.type === "Link");
  };
function L4() {
  return $i(["notification-list"], () => A4());
}
const D4 = K.div`
	flex: 0 1;
	height: 90px;
	padding: 16px 20px;
	margin: 0 24px;
	display: flex;
	flex-direction: column;
	gap: 4px;
	border-radius: 12px;
	background: #f8f8f8;
`,
  M4 = K.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`,
  j4 = K.em`
	color: var(--primary-color);
	font-weight: 500;
	font-size: 14px;
	font-style: normal;
	letter-spacing: -0.0525rem;
`,
  N4 = K.a`
	display: flex;
	align-items: center;
	color: #999;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: -0.045rem;
	transition: 0.3s;
	cursor: pointer;

	svg {
		width: 20px;
		height: 20px;
		fill: #999;
		transform: rotate(180deg);
		transition: 0.3s;
	}

	&:hover {
		color: var(--primary-color);

		svg {
			fill: var(--primary-color);
		}
	}
`,
  I4 = K.p`
	${Zy("18px", "2")};
	color: #333;
	text-align: left;
	letter-spacing: -0.045rem;
	word-break: keep-all;
`,
  z4 = () => {
    const { data: e } = L4();
    return e
      ? (e == null ? void 0 : e.length) === 0
        ? y.jsx("div", {})
        : y.jsx(y.Fragment, {
            children: y.jsxs(D4, {
              children: [
                y.jsxs(M4, {
                  children: [
                    y.jsx(j4, { children: e[0].title }),
                    y.jsxs(N4, {
                      href: e[0].url,
                      target: "_blank",
                      rel: "noreferrer",
                      children: ["자세히 보기", y.jsx(Jy, {})],
                    }),
                  ],
                }),
                y.jsx(I4, { children: e[0].summary }),
              ],
            }),
          })
      : y.jsx("div", {});
  },
  B4 = K.div`
	margin: 0 24px;
	border-radius: 12px;
	background: var(--point-color);
	overflow: hidden;
`,
  U4 = K.div`
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 14px 10px 20px;
	border-bottom: 1px solid #5b5f6a;

	.close {
		width: 24px;
		height: 24px;
		padding: 0;

		svg {
			width: inherit;
			height: inherit;
			fill: #fff;
		}

		&:hover {
			opacity: 0.5;
		}
	}
`,
  V4 = K.div`
	display: flex;
	gap: 8px;
`,
  H4 = K.p`
	font-weight: 500;
	color: #fff;
`,
  W4 = K.span`
	color: #fff;
`,
  Q4 = K.div`
	${Xy("y")};
	height: 150px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	.detail {
		height: 50px;
		border-radius: 0;
		font-weight: 400;
		padding: 0;
		letter-spacing: -0.0525rem;
		color: #fff;

		&:hover {
			background: #5b5f6a;
		}
	}
`,
  q4 = K.a`
	width: auto;
	font-weight: 500;
	padding: 0 20px;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	transition: 0.3s;
	cursor: pointer;
	flex-shrink: 0;

	&:disabled,
	&.disabled {
		cursor: not-allowed;
		color: currentColor;
	}
	color: #fff;
	text-decoration: none;

	background: var(--point-color);
	&:disabled,
	&.disabled {
		background: var(--bd-color);
	}
`,
  Y4 = async () => {
    const {
      data: { content: e },
    } = await ot.get("/recommendation?page=0&size=100");
    return e;
  };
function K4() {
  return $i(["recommend"], () => Y4());
}
const G4 = () => {
    const { data: e } = K4(),
      t = Ht(Cd);
    return e
      ? e.length === 0
        ? y.jsx("div", {})
        : y.jsx(y.Fragment, {
            children: y.jsxs(B4, {
              children: [
                y.jsxs(U4, {
                  children: [
                    y.jsxs(V4, {
                      children: [
                        y.jsx(H4, { children: "추천 정보" }),
                        y.jsx(W4, { children: "다음을 추천드려요!" }),
                      ],
                    }),
                    y.jsx(Ot, {
                      className: "close",
                      states: "icon",
                      onClick: () => t((n) => !n),
                      children: y.jsx(Kc, {}),
                    }),
                  ],
                }),
                y.jsx(Q4, {
                  children: e.map((n, r) =>
                    y.jsx(
                      q4,
                      {
                        className: "detail",
                        href: n.url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: n.mainKeyword,
                      },
                      `recommend_${r}`
                    )
                  ),
                }),
              ],
            }),
          })
      : y.jsx("div", {});
  },
  X4 = async (e) => {
    const { data: t } = await ot.get(`/faq/${e}`);
    return {
      ...t,
      faq_dialogues: t.faq_dialogues.sort((n, r) => n.order - r.order),
    };
  },
  Kg = async (e) => {
    const { data: t } = await ot.get("/faq", {
      params: { "keyword-title": e },
    });
    return t;
  },
  Z4 = async (e, t) => {
    const { data: n } = await ot.get(e.replace("/api", ""), {
      responseType: "blob",
      headers: { Accept: t },
    });
    return URL.createObjectURL(n);
  };
function J4() {
  return $i(["faq-list"], () => Kg());
}
function eC() {
  return Tu(["faq-list"], (e) => Kg(e));
}
const tC = K.div`
	display: flex;
	gap: 16px;
`,
  nC = K.p`
	font-weight: 500;
	color: #333;
	letter-spacing: -0.0525rem;
	margin-bottom: 6px;
`,
  rC = K.div`
	width: 40px;
	height: 40px;
	flex-shrink: 0;
	background: var(--primary-color);
	border-radius: 10px;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
`,
  iC = K.div`
	width: 40px;
	height: 40px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`,
  oC = K.img`
	width: 100%;
	object-fit: cover;
`,
  yo = ({ children: e }) => {
    const { data: t } = Ld(),
      { data: n } = qg();
    return y.jsxs(tC, {
      children: [
        n
          ? y.jsx(iC, { children: y.jsx(oC, { src: n }) })
          : y.jsx(rC, { children: y.jsx(Pu, {}) }),
        y.jsxs("div", {
          children: [
            y.jsx(nC, { children: t.BotProfile ?? "EM | Connect" }),
            e,
          ],
        }),
      ],
    });
  },
  Gg = {
    left: He`
		justify-content: flex-start;
	`,
    center: He`
		justify-content: center;
	`,
    right: He`
		justify-content: flex-end;
	`,
  },
  sC = K.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 5px;
	gap: 6px;
	${(e) => Gg[e.align || "left"]}
`,
  lC = K.p`
	margin-bottom: 10px;
	color: #666;
	letter-spacing: -0.0525rem;
`,
  uC = K.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	padding: 0 24px;
	gap: 6px;

	${(e) => Gg[e.align || "left"]}
`,
  Es = ({ align: e = "left", info: t, children: n }) =>
    y.jsxs(uC, {
      align: e,
      children: [
        t && y.jsx(lC, { children: t }),
        y.jsx(sC, { align: e, children: n }),
      ],
    }),
  aC = {
    admin: He`
		background: #edf1f4;

		&:before {
			left: -10px;
			bottom: 10px;
			background: #edf1f4;
		}
	`,
    user: He`
		background: var(--primary-color);
		color: #fff;

		&:before {
			right: -10px;
			bottom: 10px;
			transform: scaleX(-1);
			background: var(--primary-color);
		}
	`,
  },
  cC = K.div`
	display: flex;
	justify-content: ${(e) => (e.side === "user" ? "flex-end" : "flex-start")};
`,
  fC = K.div`
	min-width: 56px;
	max-width: 300px;
	position: relative;
	padding: 16px;
	word-break: break-all;
	font-size: 14px;
	line-height: 18px;
	color: #333;
	border-radius: 6px;
	letter-spacing: -0.0525rem;
	white-space: pre-line;
	${(e) => aC[e.side || "admin"]}

	.message {
		color: inherit;
		a {
			color: var(--primary-color);
		}
	}

	.search-empty {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 8px;
	}

	&:before {
		content: "";
		width: 10px;
		height: 12px;
		clip-path: polygon(35% 100%, 100% 100%, 100% 0);
		position: absolute;
	}
`,
  Cr = ({ side: e = "admin", children: t }) =>
    y.jsx(y.Fragment, {
      children: y.jsx(cC, {
        side: e,
        children: y.jsx(fC, { side: e, children: t }),
      }),
    }),
  dC = K.div`
	--animation-duration: 800ms;
`,
  Pa = K.div`
	width: 6px;
	height: 6px;
	display: inline-block;
	margin: 0 3px;
	border-radius: 50%;
	background: #fff;
	animation: spinner4 var(--animation-duration) ease-in-out infinite;

	&:nth-child(1) {
		animation-delay: calc(var(--animation-duration) / 6 * -1);
	}
	&:nth-child(2) {
		animation-delay: calc(var(--animation-duration) / 6 * -2);
	}
	&:nth-child(3) {
		animation-delay: calc(var(--animation-duration) / 6 * -3);
	}

	@keyframes spinner4 {
		0%,
		100% {
			transform: translateY(50%);
		}

		50% {
			transform: translateY(-50%);
		}
	}
`,
  o0 = () =>
    y.jsxs(dC, { children: [y.jsx(Pa, {}), y.jsx(Pa, {}), y.jsx(Pa, {})] }),
  pC = K.div`
	display: flex;
	align-items: center;
	justify-content: center;
`,
  hC = K.div`
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	font-size: 12px;
	letter-spacing: -0.045rem;
	color: #fff;
	padding: 0 40px;
	margin-top: 14px;
	background: var(--point-color);
`,
  mC = ({ children: e }) =>
    y.jsx(y.Fragment, {
      children: y.jsx(pC, { children: y.jsx(hC, { children: e }) }),
    });
function yC() {
  return Tu((e) => X4(e));
}
const Xg = (e, t) => {
  if (t)
    try {
      const n = t.split(".");
      return Xg(e[n.shift()], n.join("."));
    } catch {
      return;
    }
  else return e;
};
function gC({ useForm: e, className: t = "horiz", children: n }) {
  const [r, i] = X.useState({}),
    {
      formState: { errors: o },
      ...s
    } = e;
  return (
    X.useEffect(() => {
      i(o);
    }, [o]),
    y.jsx("div", {
      className: `c__form ${t || ""}`,
      children: X.Children.map(n, (l, u) => {
        if (X.isValidElement(l))
          return l.props.name
            ? y.jsx(
                _s,
                {
                  label: l.props.label,
                  name: l.props.name,
                  className: `${l.props.className ? l.props.className : ""} ${
                    l.props.required ? "required" : ""
                  }`,
                  children: y.jsx(Rs, {
                    type: l.type,
                    props: l.props,
                    description: l.props.description,
                    errorMessage: r,
                    ...s,
                  }),
                },
                u
              )
            : l.props.children
            ? y.jsx(
                _s,
                {
                  label: l.props.label,
                  name: l.props.name,
                  className: `${l.props.className ? l.props.className : ""} ${
                    l.props.required ? "required" : ""
                  }`,
                  children: y.jsx("div", {
                    className: "f__control-wrap",
                    children: X.Children.map(l.props.children, (a, c) =>
                      a.props.name
                        ? y.jsx(
                            Rs,
                            {
                              type: a.type,
                              props: a.props,
                              description: a.props.description,
                              className: a.props.className,
                              errorMessage: r,
                              ...s,
                            },
                            c
                          )
                        : a
                    ),
                  }),
                },
                u
              )
            : typeof l.type == "symbol"
            ? X.Children.map(l.props.children, (a) =>
                a.props.name
                  ? y.jsx(
                      _s,
                      {
                        label: a.props.label,
                        name: a.props.name,
                        className: `${
                          a.props.className ? a.props.className : ""
                        } ${a.props.required ? "required" : ""}`,
                        children: y.jsx(Rs, {
                          type: a.type,
                          props: a.props,
                          errorMessage: r,
                          ...s,
                        }),
                      },
                      u
                    )
                  : l.props.children
                  ? y.jsx(
                      _s,
                      {
                        label: a.props.label,
                        name: a.props.name,
                        className: `${
                          a.props.className ? a.props.className : ""
                        } ${a.props.required ? "required" : ""}`,
                        children: y.jsx("div", {
                          className: "f__control-wrap",
                          children: X.Children.map(a.props.children, (c, d) =>
                            c.props.name
                              ? y.jsx(
                                  Rs,
                                  {
                                    type: c.type,
                                    props: c.props,
                                    className: c.props.className,
                                    errorMessage: r,
                                    ...s,
                                  },
                                  d
                                )
                              : c
                          ),
                        }),
                      },
                      u
                    )
                  : a.props.children
              )
            : l;
      }),
    })
  );
}
function Rs({
  type: e,
  props: t,
  errorMessage: n,
  className: r,
  description: i,
  ...o
}) {
  var l;
  const s = ((l = Xg(n, t.name)) == null ? void 0 : l.message) ?? " ";
  return y.jsxs("div", {
    className: `f__control ${r || ""} ${
      s !== void 0 && s !== " " ? "has-error" : ""
    }`,
    children: [
      X.createElement(e, { ...t, ...o }),
      s !== void 0 && s !== " "
        ? y.jsx("p", { className: "f__feedback", children: s })
        : i !== void 0 &&
          i !== "" &&
          y.jsx("p", { className: "f__description", children: i }),
    ],
  });
}
function _s({ label: e, name: t, children: n, className: r }) {
  return y.jsxs("div", {
    className: `f__group ${r || ""}`,
    children: [
      e && y.jsx("label", { htmlFor: t, className: "f__label", children: e }),
      n,
    ],
  });
}
function vC({ children: e }) {
  return y.jsx(y.Fragment, { children: e });
}
var ns = (e) => e.type === "checkbox",
  ii = (e) => e instanceof Date,
  nt = (e) => e == null;
const Zg = (e) => typeof e == "object";
var De = (e) => !nt(e) && !Array.isArray(e) && Zg(e) && !ii(e),
  wC = (e) =>
    De(e) && e.target ? (ns(e.target) ? e.target.checked : e.target.value) : e,
  xC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  SC = (e, t) => e.has(xC(t)),
  kC = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return De(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Dd =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Dn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(Dd && (e instanceof Blob || e instanceof FileList)) &&
    (n || De(e))
  )
    if (((t = n ? [] : {}), !n && !kC(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Dn(e[r]));
  else return e;
  return t;
}
var rs = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Pe = (e) => e === void 0,
  W = (e, t, n) => {
    if (!t || !De(e)) return n;
    const r = rs(t.split(/[,[\].]+?/)).reduce((i, o) => (nt(i) ? i : i[o]), e);
    return Pe(r) || r === e ? (Pe(e[t]) ? n : e[t]) : r;
  };
const s0 = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Qt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  mn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
Ae.createContext(null);
var CC = (e, t, n, r = !0) => {
    const i = { defaultValues: t._defaultValues };
    for (const o in e)
      Object.defineProperty(i, o, {
        get: () => {
          const s = o;
          return (
            t._proxyFormState[s] !== Qt.all &&
              (t._proxyFormState[s] = !r || Qt.all),
            n && (n[s] = !0),
            e[s]
          );
        },
      });
    return i;
  },
  $t = (e) => De(e) && !Object.keys(e).length,
  EC = (e, t, n, r) => {
    n(e);
    const { name: i, ...o } = e;
    return (
      $t(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((s) => t[s] === (!r || Qt.all))
    );
  },
  Oa = (e) => (Array.isArray(e) ? e : [e]);
function RC(e) {
  const t = Ae.useRef(e);
  (t.current = e),
    Ae.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var un = (e) => typeof e == "string",
  _C = (e, t, n, r, i) =>
    un(e)
      ? (r && t.watch.add(e), W(n, e, i))
      : Array.isArray(e)
      ? e.map((o) => (r && t.watch.add(o), W(n, o)))
      : (r && (t.watchAll = !0), n),
  Md = (e) => /^\w*$/.test(e),
  Jg = (e) => rs(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function ve(e, t, n) {
  let r = -1;
  const i = Md(t) ? [t] : Jg(t),
    o = i.length,
    s = o - 1;
  for (; ++r < o; ) {
    const l = i[r];
    let u = n;
    if (r !== s) {
      const a = e[l];
      u = De(a) || Array.isArray(a) ? a : isNaN(+i[r + 1]) ? {} : [];
    }
    (e[l] = u), (e = e[l]);
  }
  return e;
}
var bC = (e, t, n, r, i) =>
  t
    ? {
        ...n[e],
        types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
      }
    : {};
const lf = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const i = W(e, r);
    if (i) {
      const { _f: o, ...s } = i;
      if (o && t(o.name)) {
        if (o.ref.focus) {
          o.ref.focus();
          break;
        } else if (o.refs && o.refs[0].focus) {
          o.refs[0].focus();
          break;
        }
      } else De(s) && lf(s, t);
    }
  }
};
var l0 = (e) => ({
    isOnSubmit: !e || e === Qt.onSubmit,
    isOnBlur: e === Qt.onBlur,
    isOnChange: e === Qt.onChange,
    isOnAll: e === Qt.all,
    isOnTouch: e === Qt.onTouched,
  }),
  u0 = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      )),
  PC = (e, t, n) => {
    const r = rs(W(e, n));
    return ve(r, "root", t[n]), ve(e, n, r), e;
  },
  fi = (e) => typeof e == "boolean",
  jd = (e) => e.type === "file",
  Wn = (e) => typeof e == "function",
  Wl = (e) => {
    if (!Dd) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Zs = (e) => un(e),
  Nd = (e) => e.type === "radio",
  Ql = (e) => e instanceof RegExp;
const a0 = { value: !1, isValid: !1 },
  c0 = { value: !0, isValid: !0 };
var ev = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Pe(e[0].attributes.value)
        ? Pe(e[0].value) || e[0].value === ""
          ? c0
          : { value: e[0].value, isValid: !0 }
        : c0
      : a0;
  }
  return a0;
};
const f0 = { isValid: !1, value: null };
var tv = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        f0
      )
    : f0;
function d0(e, t, n = "validate") {
  if (Zs(e) || (Array.isArray(e) && e.every(Zs)) || (fi(e) && !e))
    return { type: n, message: Zs(e) ? e : "", ref: t };
}
var Ur = (e) => (De(e) && !Ql(e) ? e : { value: e, message: "" }),
  p0 = async (e, t, n, r, i) => {
    const {
        ref: o,
        refs: s,
        required: l,
        maxLength: u,
        minLength: a,
        min: c,
        max: d,
        pattern: p,
        validate: v,
        name: g,
        valueAsNumber: S,
        mount: _,
        disabled: h,
      } = e._f,
      f = W(t, g);
    if (!_ || h) return {};
    const m = s ? s[0] : o,
      k = (C) => {
        r &&
          m.reportValidity &&
          (m.setCustomValidity(fi(C) ? "" : C || ""), m.reportValidity());
      },
      E = {},
      P = Nd(o),
      R = ns(o),
      w = P || R,
      O =
        ((S || jd(o)) && Pe(o.value) && Pe(f)) ||
        (Wl(o) && o.value === "") ||
        f === "" ||
        (Array.isArray(f) && !f.length),
      L = bC.bind(null, g, n, E),
      D = (C, T, N, q = mn.maxLength, Z = mn.minLength) => {
        const H = C ? T : N;
        E[g] = { type: C ? q : Z, message: H, ref: o, ...L(C ? q : Z, H) };
      };
    if (
      i
        ? !Array.isArray(f) || !f.length
        : l &&
          ((!w && (O || nt(f))) ||
            (fi(f) && !f) ||
            (R && !ev(s).isValid) ||
            (P && !tv(s).isValid))
    ) {
      const { value: C, message: T } = Zs(l)
        ? { value: !!l, message: l }
        : Ur(l);
      if (
        C &&
        ((E[g] = {
          type: mn.required,
          message: T,
          ref: m,
          ...L(mn.required, T),
        }),
        !n)
      )
        return k(T), E;
    }
    if (!O && (!nt(c) || !nt(d))) {
      let C, T;
      const N = Ur(d),
        q = Ur(c);
      if (!nt(f) && !isNaN(f)) {
        const Z = o.valueAsNumber || (f && +f);
        nt(N.value) || (C = Z > N.value), nt(q.value) || (T = Z < q.value);
      } else {
        const Z = o.valueAsDate || new Date(f),
          H = (Y) => new Date(new Date().toDateString() + " " + Y),
          A = o.type == "time",
          z = o.type == "week";
        un(N.value) &&
          f &&
          (C = A ? H(f) > H(N.value) : z ? f > N.value : Z > new Date(N.value)),
          un(q.value) &&
            f &&
            (T = A
              ? H(f) < H(q.value)
              : z
              ? f < q.value
              : Z < new Date(q.value));
      }
      if ((C || T) && (D(!!C, N.message, q.message, mn.max, mn.min), !n))
        return k(E[g].message), E;
    }
    if ((u || a) && !O && (un(f) || (i && Array.isArray(f)))) {
      const C = Ur(u),
        T = Ur(a),
        N = !nt(C.value) && f.length > +C.value,
        q = !nt(T.value) && f.length < +T.value;
      if ((N || q) && (D(N, C.message, T.message), !n))
        return k(E[g].message), E;
    }
    if (p && !O && un(f)) {
      const { value: C, message: T } = Ur(p);
      if (
        Ql(C) &&
        !f.match(C) &&
        ((E[g] = { type: mn.pattern, message: T, ref: o, ...L(mn.pattern, T) }),
        !n)
      )
        return k(T), E;
    }
    if (v) {
      if (Wn(v)) {
        const C = await v(f, t),
          T = d0(C, m);
        if (T && ((E[g] = { ...T, ...L(mn.validate, T.message) }), !n))
          return k(T.message), E;
      } else if (De(v)) {
        let C = {};
        for (const T in v) {
          if (!$t(C) && !n) break;
          const N = d0(await v[T](f, t), m, T);
          N &&
            ((C = { ...N, ...L(T, N.message) }), k(N.message), n && (E[g] = C));
        }
        if (!$t(C) && ((E[g] = { ref: m, ...C }), !n)) return E;
      }
    }
    return k(!0), E;
  };
function OC(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Pe(e) ? r++ : e[t[r++]];
  return e;
}
function TC(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Pe(e[t])) return !1;
  return !0;
}
function ze(e, t) {
  const n = Array.isArray(t) ? t : Md(t) ? [t] : Jg(t),
    r = n.length === 1 ? e : OC(e, n),
    i = n.length - 1,
    o = n[i];
  return (
    r && delete r[o],
    i !== 0 &&
      ((De(r) && $t(r)) || (Array.isArray(r) && TC(r))) &&
      ze(e, n.slice(0, -1)),
    e
  );
}
function Ta() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const o of e) o.next && o.next(i);
    },
    subscribe: (i) => (
      e.push(i),
      {
        unsubscribe: () => {
          e = e.filter((o) => o !== i);
        },
      }
    ),
    unsubscribe: () => {
      e = [];
    },
  };
}
var ql = (e) => nt(e) || !Zg(e);
function Er(e, t) {
  if (ql(e) || ql(t)) return e === t;
  if (ii(e) && ii(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const o = e[i];
    if (!r.includes(i)) return !1;
    if (i !== "ref") {
      const s = t[i];
      if (
        (ii(o) && ii(s)) ||
        (De(o) && De(s)) ||
        (Array.isArray(o) && Array.isArray(s))
          ? !Er(o, s)
          : o !== s
      )
        return !1;
    }
  }
  return !0;
}
var nv = (e) => e.type === "select-multiple",
  $C = (e) => Nd(e) || ns(e),
  $a = (e) => Wl(e) && e.isConnected,
  rv = (e) => {
    for (const t in e) if (Wn(e[t])) return !0;
    return !1;
  };
function Yl(e, t = {}) {
  const n = Array.isArray(e);
  if (De(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (De(e[r]) && !rv(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Yl(e[r], t[r]))
        : nt(e[r]) || (t[r] = !0);
  return t;
}
function iv(e, t, n) {
  const r = Array.isArray(e);
  if (De(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || (De(e[i]) && !rv(e[i]))
        ? Pe(t) || ql(n[i])
          ? (n[i] = Array.isArray(e[i]) ? Yl(e[i], []) : { ...Yl(e[i]) })
          : iv(e[i], nt(t) ? {} : t[i], n[i])
        : (n[i] = !Er(e[i], t[i]));
  return n;
}
var Fa = (e, t) => iv(e, t, Yl(t)),
  ov = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Pe(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && un(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function Aa(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return jd(t)
      ? t.files
      : Nd(t)
      ? tv(e.refs).value
      : nv(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : ns(t)
      ? ev(e.refs).value
      : ov(Pe(t.value) ? e.ref.value : t.value, e);
}
var FC = (e, t, n, r) => {
    const i = {};
    for (const o of e) {
      const s = W(t, o);
      s && ve(i, o, s._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: r,
    };
  },
  Wi = (e) =>
    Pe(e)
      ? e
      : Ql(e)
      ? e.source
      : De(e)
      ? Ql(e.value)
        ? e.value.source
        : e.value
      : e,
  AC = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function h0(e, t, n) {
  const r = W(e, n);
  if (r || Md(n)) return { error: r, name: n };
  const i = n.split(".");
  for (; i.length; ) {
    const o = i.join("."),
      s = W(t, o),
      l = W(e, o);
    if (s && !Array.isArray(s) && n !== o) return { name: n };
    if (l && l.type) return { name: o, error: l };
    i.pop();
  }
  return { name: n };
}
var LC = (e, t, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : i.isOnBlur)
      ? !e
      : (n ? r.isOnChange : i.isOnChange)
      ? e
      : !0,
  DC = (e, t) => !rs(W(e, t)).length && ze(e, t);
const MC = {
  mode: Qt.onSubmit,
  reValidateMode: Qt.onChange,
  shouldFocusError: !0,
};
function jC(e = {}, t) {
  let n = { ...MC, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Wn(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: {},
    },
    i = {},
    o =
      De(n.defaultValues) || De(n.values)
        ? Dn(n.defaultValues || n.values) || {}
        : {},
    s = n.shouldUnregister ? {} : Dn(o),
    l = { action: !1, mount: !1, watch: !1 },
    u = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    a,
    c = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    p = { values: Ta(), array: Ta(), state: Ta() },
    v = e.resetOptions && e.resetOptions.keepDirtyValues,
    g = l0(n.mode),
    S = l0(n.reValidateMode),
    _ = n.criteriaMode === Qt.all,
    h = (x) => (b) => {
      clearTimeout(c), (c = setTimeout(x, b));
    },
    f = async (x) => {
      if (d.isValid || x) {
        const b = n.resolver ? $t((await O()).errors) : await D(i, !0);
        b !== r.isValid && p.state.next({ isValid: b });
      }
    },
    m = (x) => d.isValidating && p.state.next({ isValidating: x }),
    k = (x, b = [], F, Q, B = !0, j = !0) => {
      if (Q && F) {
        if (((l.action = !0), j && Array.isArray(W(i, x)))) {
          const G = F(W(i, x), Q.argA, Q.argB);
          B && ve(i, x, G);
        }
        if (j && Array.isArray(W(r.errors, x))) {
          const G = F(W(r.errors, x), Q.argA, Q.argB);
          B && ve(r.errors, x, G), DC(r.errors, x);
        }
        if (d.touchedFields && j && Array.isArray(W(r.touchedFields, x))) {
          const G = F(W(r.touchedFields, x), Q.argA, Q.argB);
          B && ve(r.touchedFields, x, G);
        }
        d.dirtyFields && (r.dirtyFields = Fa(o, s)),
          p.state.next({
            name: x,
            isDirty: T(x, b),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else ve(s, x, b);
    },
    E = (x, b) => {
      ve(r.errors, x, b), p.state.next({ errors: r.errors });
    },
    P = (x, b, F, Q) => {
      const B = W(i, x);
      if (B) {
        const j = W(s, x, Pe(F) ? W(o, x) : F);
        Pe(j) || (Q && Q.defaultChecked) || b
          ? ve(s, x, b ? j : Aa(B._f))
          : Z(x, j),
          l.mount && f();
      }
    },
    R = (x, b, F, Q, B) => {
      let j = !1,
        G = !1;
      const Ce = { name: x };
      if (!F || Q) {
        d.isDirty &&
          ((G = r.isDirty),
          (r.isDirty = Ce.isDirty = T()),
          (j = G !== Ce.isDirty));
        const _e = Er(W(o, x), b);
        (G = W(r.dirtyFields, x)),
          _e ? ze(r.dirtyFields, x) : ve(r.dirtyFields, x, !0),
          (Ce.dirtyFields = r.dirtyFields),
          (j = j || (d.dirtyFields && G !== !_e));
      }
      if (F) {
        const _e = W(r.touchedFields, x);
        _e ||
          (ve(r.touchedFields, x, F),
          (Ce.touchedFields = r.touchedFields),
          (j = j || (d.touchedFields && _e !== F)));
      }
      return j && B && p.state.next(Ce), j ? Ce : {};
    },
    w = (x, b, F, Q) => {
      const B = W(r.errors, x),
        j = d.isValid && fi(b) && r.isValid !== b;
      if (
        (e.delayError && F
          ? ((a = h(() => E(x, F))), a(e.delayError))
          : (clearTimeout(c),
            (a = null),
            F ? ve(r.errors, x, F) : ze(r.errors, x)),
        (F ? !Er(B, F) : B) || !$t(Q) || j)
      ) {
        const G = {
          ...Q,
          ...(j && fi(b) ? { isValid: b } : {}),
          errors: r.errors,
          name: x,
        };
        (r = { ...r, ...G }), p.state.next(G);
      }
      m(!1);
    },
    O = async (x) =>
      n.resolver(
        s,
        n.context,
        FC(x || u.mount, i, n.criteriaMode, n.shouldUseNativeValidation)
      ),
    L = async (x) => {
      const { errors: b } = await O();
      if (x)
        for (const F of x) {
          const Q = W(b, F);
          Q ? ve(r.errors, F, Q) : ze(r.errors, F);
        }
      else r.errors = b;
      return b;
    },
    D = async (x, b, F = { valid: !0 }) => {
      for (const Q in x) {
        const B = x[Q];
        if (B) {
          const { _f: j, ...G } = B;
          if (j) {
            const Ce = u.array.has(j.name),
              _e = await p0(B, s, _, n.shouldUseNativeValidation && !b, Ce);
            if (_e[j.name] && ((F.valid = !1), b)) break;
            !b &&
              (W(_e, j.name)
                ? Ce
                  ? PC(r.errors, _e, j.name)
                  : ve(r.errors, j.name, _e[j.name])
                : ze(r.errors, j.name));
          }
          G && (await D(G, b, F));
        }
      }
      return F.valid;
    },
    C = () => {
      for (const x of u.unMount) {
        const b = W(i, x);
        b &&
          (b._f.refs ? b._f.refs.every((F) => !$a(F)) : !$a(b._f.ref)) &&
          Ie(x);
      }
      u.unMount = new Set();
    },
    T = (x, b) => (x && b && ve(s, x, b), !Er(ae(), o)),
    N = (x, b, F) =>
      _C(x, u, { ...(l.mount ? s : Pe(b) ? o : un(x) ? { [x]: b } : b) }, F, b),
    q = (x) => rs(W(l.mount ? s : o, x, e.shouldUnregister ? W(o, x, []) : [])),
    Z = (x, b, F = {}) => {
      const Q = W(i, x);
      let B = b;
      if (Q) {
        const j = Q._f;
        j &&
          (!j.disabled && ve(s, x, ov(b, j)),
          (B = Wl(j.ref) && nt(b) ? "" : b),
          nv(j.ref)
            ? [...j.ref.options].forEach(
                (G) => (G.selected = B.includes(G.value))
              )
            : j.refs
            ? ns(j.ref)
              ? j.refs.length > 1
                ? j.refs.forEach(
                    (G) =>
                      (!G.defaultChecked || !G.disabled) &&
                      (G.checked = Array.isArray(B)
                        ? !!B.find((Ce) => Ce === G.value)
                        : B === G.value)
                  )
                : j.refs[0] && (j.refs[0].checked = !!B)
              : j.refs.forEach((G) => (G.checked = G.value === B))
            : jd(j.ref)
            ? (j.ref.value = "")
            : ((j.ref.value = B),
              j.ref.type || p.values.next({ name: x, values: { ...s } })));
      }
      (F.shouldDirty || F.shouldTouch) &&
        R(x, B, F.shouldTouch, F.shouldDirty, !0),
        F.shouldValidate && Y(x);
    },
    H = (x, b, F) => {
      for (const Q in b) {
        const B = b[Q],
          j = `${x}.${Q}`,
          G = W(i, j);
        (u.array.has(x) || !ql(B) || (G && !G._f)) && !ii(B)
          ? H(j, B, F)
          : Z(j, B, F);
      }
    },
    A = (x, b, F = {}) => {
      const Q = W(i, x),
        B = u.array.has(x),
        j = Dn(b);
      ve(s, x, j),
        B
          ? (p.array.next({ name: x, values: { ...s } }),
            (d.isDirty || d.dirtyFields) &&
              F.shouldDirty &&
              p.state.next({
                name: x,
                dirtyFields: Fa(o, s),
                isDirty: T(x, j),
              }))
          : Q && !Q._f && !nt(j)
          ? H(x, j, F)
          : Z(x, j, F),
        u0(x, u) && p.state.next({ ...r }),
        p.values.next({ name: x, values: { ...s } }),
        !l.mount && t();
    },
    z = async (x) => {
      const b = x.target;
      let F = b.name,
        Q = !0;
      const B = W(i, F),
        j = () => (b.type ? Aa(B._f) : wC(x));
      if (B) {
        let G, Ce;
        const _e = j(),
          Ir = x.type === s0.BLUR || x.type === s0.FOCUS_OUT,
          u2 =
            (!AC(B._f) && !n.resolver && !W(r.errors, F) && !B._f.deps) ||
            LC(Ir, W(r.touchedFields, F), r.isSubmitted, S, g),
          Vu = u0(F, u, Ir);
        ve(s, F, _e),
          Ir
            ? (B._f.onBlur && B._f.onBlur(x), a && a(0))
            : B._f.onChange && B._f.onChange(x);
        const Hu = R(F, _e, Ir, !1),
          a2 = !$t(Hu) || Vu;
        if (
          (!Ir && p.values.next({ name: F, type: x.type, values: { ...s } }),
          u2)
        )
          return (
            d.isValid && f(), a2 && p.state.next({ name: F, ...(Vu ? {} : Hu) })
          );
        if ((!Ir && Vu && p.state.next({ ...r }), m(!0), n.resolver)) {
          const { errors: op } = await O([F]),
            c2 = h0(r.errors, i, F),
            sp = h0(op, i, c2.name || F);
          (G = sp.error), (F = sp.name), (Ce = $t(op));
        } else
          (G = (await p0(B, s, _, n.shouldUseNativeValidation))[F]),
            (Q = isNaN(_e) || _e === W(s, F, _e)),
            Q && (G ? (Ce = !1) : d.isValid && (Ce = await D(i, !0)));
        Q && (B._f.deps && Y(B._f.deps), w(F, Ce, G, Hu));
      }
    },
    Y = async (x, b = {}) => {
      let F, Q;
      const B = Oa(x);
      if ((m(!0), n.resolver)) {
        const j = await L(Pe(x) ? x : B);
        (F = $t(j)), (Q = x ? !B.some((G) => W(j, G)) : F);
      } else
        x
          ? ((Q = (
              await Promise.all(
                B.map(async (j) => {
                  const G = W(i, j);
                  return await D(G && G._f ? { [j]: G } : G);
                })
              )
            ).every(Boolean)),
            !(!Q && !r.isValid) && f())
          : (Q = F = await D(i));
      return (
        p.state.next({
          ...(!un(x) || (d.isValid && F !== r.isValid) ? {} : { name: x }),
          ...(n.resolver || !x ? { isValid: F } : {}),
          errors: r.errors,
          isValidating: !1,
        }),
        b.shouldFocus &&
          !Q &&
          lf(i, (j) => j && W(r.errors, j), x ? B : u.mount),
        Q
      );
    },
    ae = (x) => {
      const b = { ...o, ...(l.mount ? s : {}) };
      return Pe(x) ? b : un(x) ? W(b, x) : x.map((F) => W(b, F));
    },
    pe = (x, b) => ({
      invalid: !!W((b || r).errors, x),
      isDirty: !!W((b || r).dirtyFields, x),
      isTouched: !!W((b || r).touchedFields, x),
      error: W((b || r).errors, x),
    }),
    zt = (x) => {
      x && Oa(x).forEach((b) => ze(r.errors, b)),
        p.state.next({ errors: x ? r.errors : {} });
    },
    Ye = (x, b, F) => {
      const Q = (W(i, x, { _f: {} })._f || {}).ref;
      ve(r.errors, x, { ...b, ref: Q }),
        p.state.next({ name: x, errors: r.errors, isValid: !1 }),
        F && F.shouldFocus && Q && Q.focus && Q.focus();
    },
    Xt = (x, b) =>
      Wn(x)
        ? p.values.subscribe({ next: (F) => x(N(void 0, b), F) })
        : N(x, b, !0),
    Ie = (x, b = {}) => {
      for (const F of x ? Oa(x) : u.mount)
        u.mount.delete(F),
          u.array.delete(F),
          b.keepValue || (ze(i, F), ze(s, F)),
          !b.keepError && ze(r.errors, F),
          !b.keepDirty && ze(r.dirtyFields, F),
          !b.keepTouched && ze(r.touchedFields, F),
          !n.shouldUnregister && !b.keepDefaultValue && ze(o, F);
      p.values.next({ values: { ...s } }),
        p.state.next({ ...r, ...(b.keepDirty ? { isDirty: T() } : {}) }),
        !b.keepIsValid && f();
    },
    Ke = (x, b = {}) => {
      let F = W(i, x);
      const Q = fi(b.disabled);
      return (
        ve(i, x, {
          ...(F || {}),
          _f: {
            ...(F && F._f ? F._f : { ref: { name: x } }),
            name: x,
            mount: !0,
            ...b,
          },
        }),
        u.mount.add(x),
        F
          ? Q && ve(s, x, b.disabled ? void 0 : W(s, x, Aa(F._f)))
          : P(x, !0, b.value),
        {
          ...(Q ? { disabled: b.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!b.required,
                min: Wi(b.min),
                max: Wi(b.max),
                minLength: Wi(b.minLength),
                maxLength: Wi(b.maxLength),
                pattern: Wi(b.pattern),
              }
            : {}),
          name: x,
          onChange: z,
          onBlur: z,
          ref: (B) => {
            if (B) {
              Ke(x, b), (F = W(i, x));
              const j =
                  (Pe(B.value) &&
                    B.querySelectorAll &&
                    B.querySelectorAll("input,select,textarea")[0]) ||
                  B,
                G = $C(j),
                Ce = F._f.refs || [];
              if (G ? Ce.find((_e) => _e === j) : j === F._f.ref) return;
              ve(i, x, {
                _f: {
                  ...F._f,
                  ...(G
                    ? {
                        refs: [
                          ...Ce.filter($a),
                          j,
                          ...(Array.isArray(W(o, x)) ? [{}] : []),
                        ],
                        ref: { type: j.type, name: x },
                      }
                    : { ref: j }),
                },
              }),
                P(x, !1, void 0, j);
            } else
              (F = W(i, x, {})),
                F._f && (F._f.mount = !1),
                (n.shouldUnregister || b.shouldUnregister) &&
                  !(SC(u.array, x) && l.action) &&
                  u.unMount.add(x);
          },
        }
      );
    },
    Nr = () => n.shouldFocusError && lf(i, (x) => x && W(r.errors, x), u.mount),
    ar = (x, b) => async (F) => {
      F && (F.preventDefault && F.preventDefault(), F.persist && F.persist());
      let Q = Dn(s);
      if ((p.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: B, values: j } = await O();
        (r.errors = B), (Q = j);
      } else await D(i);
      ze(r.errors, "root"),
        $t(r.errors)
          ? (p.state.next({ errors: {} }), await x(Q, F))
          : (b && (await b({ ...r.errors }, F)), Nr(), setTimeout(Nr)),
        p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: $t(r.errors),
          submitCount: r.submitCount + 1,
          errors: r.errors,
        });
    },
    Zt = (x, b = {}) => {
      W(i, x) &&
        (Pe(b.defaultValue)
          ? A(x, W(o, x))
          : (A(x, b.defaultValue), ve(o, x, b.defaultValue)),
        b.keepTouched || ze(r.touchedFields, x),
        b.keepDirty ||
          (ze(r.dirtyFields, x),
          (r.isDirty = b.defaultValue ? T(x, W(o, x)) : T())),
        b.keepError || (ze(r.errors, x), d.isValid && f()),
        p.state.next({ ...r }));
    },
    rp = (x, b = {}) => {
      const F = x || o,
        Q = Dn(F),
        B = x && !$t(x) ? Q : o;
      if ((b.keepDefaultValues || (o = F), !b.keepValues)) {
        if (b.keepDirtyValues || v)
          for (const j of u.mount)
            W(r.dirtyFields, j) ? ve(B, j, W(s, j)) : A(j, W(B, j));
        else {
          if (Dd && Pe(x))
            for (const j of u.mount) {
              const G = W(i, j);
              if (G && G._f) {
                const Ce = Array.isArray(G._f.refs) ? G._f.refs[0] : G._f.ref;
                if (Wl(Ce)) {
                  const _e = Ce.closest("form");
                  if (_e) {
                    _e.reset();
                    break;
                  }
                }
              }
            }
          i = {};
        }
        (s = e.shouldUnregister ? (b.keepDefaultValues ? Dn(o) : {}) : Dn(B)),
          p.array.next({ values: { ...B } }),
          p.values.next({ values: { ...B } });
      }
      (u = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        !l.mount && t(),
        (l.mount = !d.isValid || !!b.keepIsValid),
        (l.watch = !!e.shouldUnregister),
        p.state.next({
          submitCount: b.keepSubmitCount ? r.submitCount : 0,
          isDirty: b.keepDirty
            ? r.isDirty
            : !!(b.keepDefaultValues && !Er(x, o)),
          isSubmitted: b.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: b.keepDirtyValues
            ? r.dirtyFields
            : b.keepDefaultValues && x
            ? Fa(o, x)
            : {},
          touchedFields: b.keepTouched ? r.touchedFields : {},
          errors: b.keepErrors ? r.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1,
        });
    },
    ip = (x, b) => rp(Wn(x) ? x(s) : x, b);
  return {
    control: {
      register: Ke,
      unregister: Ie,
      getFieldState: pe,
      handleSubmit: ar,
      setError: Ye,
      _executeSchema: O,
      _getWatch: N,
      _getDirty: T,
      _updateValid: f,
      _removeUnmounted: C,
      _updateFieldArray: k,
      _getFieldArray: q,
      _reset: rp,
      _resetDefaultValues: () =>
        Wn(n.defaultValues) &&
        n.defaultValues().then((x) => {
          ip(x, n.resetOptions), p.state.next({ isLoading: !1 });
        }),
      _updateFormState: (x) => {
        r = { ...r, ...x };
      },
      _subjects: p,
      _proxyFormState: d,
      get _fields() {
        return i;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return l;
      },
      set _state(x) {
        l = x;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return u;
      },
      set _names(x) {
        u = x;
      },
      get _formState() {
        return r;
      },
      set _formState(x) {
        r = x;
      },
      get _options() {
        return n;
      },
      set _options(x) {
        n = { ...n, ...x };
      },
    },
    trigger: Y,
    register: Ke,
    handleSubmit: ar,
    watch: Xt,
    setValue: A,
    getValues: ae,
    reset: ip,
    resetField: Zt,
    clearErrors: zt,
    unregister: Ie,
    setError: Ye,
    setFocus: (x, b = {}) => {
      const F = W(i, x),
        Q = F && F._f;
      if (Q) {
        const B = Q.refs ? Q.refs[0] : Q.ref;
        B.focus && (B.focus(), b.shouldSelect && B.select());
      }
    },
    getFieldState: pe,
  };
}
function NC(e = {}) {
  const t = Ae.useRef(),
    n = Ae.useRef(),
    [r, i] = Ae.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Wn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: Wn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current ||
    (t.current = { ...jC(e, () => i((s) => ({ ...s }))), formState: r });
  const o = t.current.control;
  return (
    (o._options = e),
    RC({
      subject: o._subjects.state,
      next: (s) => {
        EC(s, o._proxyFormState, o._updateFormState, !0) &&
          i({ ...o._formState });
      },
    }),
    Ae.useEffect(() => {
      e.values && !Er(e.values, n.current)
        ? (o._reset(e.values, o._options.resetOptions), (n.current = e.values))
        : o._resetDefaultValues();
    }, [e.values, o]),
    Ae.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch &&
          ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    (t.current.formState = CC(r, o)),
    t.current
  );
}
const IC = K.div`
	display: flex;
	justify-content: ${(e) => e.$justifyContent};
	align-items: ${(e) => e.$alignItems};
	flex-direction: ${(e) => e.$flexDirection};
	${(e) => e.$customStyle}
`,
  zC = (
    {
      as: e,
      flexDirection: t = "row",
      alignItems: n = "center",
      justifyContent: r = "center",
      className: i = "",
      children: o,
      customStyle: s,
      ...l
    },
    u
  ) => {
    const a = e ?? "div";
    return y.jsx(IC, {
      as: a,
      style: {
        display: "flex",
        flexDirection: t,
        alignItems: n,
        justifyContent: r,
      },
      className: i,
      ref: u,
      $customStyle: s,
      ...l,
      children: o,
    });
  },
  Js = X.forwardRef(zC);
const BC = async (e) => {
  await ot.post("/inquiry", e);
};
function UC() {
  return Tu((e) => BC(e));
}
function VC(e) {
  return Tu(({ url: t, type: n }) => Z4(t, n), {
    onSuccess(t, n) {
      e((r) =>
        r.map((i) => ({
          ...i,
          dialogue_files: i.dialogue_files.map((o) =>
            o.file_url === n.url ? { ...o, url: t } : o
          ),
        }))
      );
    },
  });
}
function hn(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
      t === "[object Number]" ||
      typeof e == "string" ||
      t === "[object String]"
    ? new Date(e)
    : new Date(NaN);
}
function Dr(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const sv = 6048e5,
  HC = 864e5;
let WC = {};
function Mu() {
  return WC;
}
function zo(e, t) {
  var l, u, a, c;
  const n = Mu(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((u = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) ==
      null
        ? void 0
        : u.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (a = n.locale) == null ? void 0 : a.options) == null
        ? void 0
        : c.weekStartsOn) ??
      0,
    i = hn(e),
    o = i.getDay(),
    s = (o < r ? 7 : 0) + o - r;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Kl(e) {
  return zo(e, { weekStartsOn: 1 });
}
function lv(e) {
  const t = hn(e),
    n = t.getFullYear(),
    r = Dr(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = Kl(r),
    o = Dr(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Kl(o);
  return t.getTime() >= i.getTime()
    ? n + 1
    : t.getTime() >= s.getTime()
    ? n
    : n - 1;
}
function m0(e) {
  const t = hn(e);
  return t.setHours(0, 0, 0, 0), t;
}
function y0(e) {
  const t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function QC(e, t) {
  const n = m0(e),
    r = m0(t),
    i = n.getTime() - y0(n),
    o = r.getTime() - y0(r);
  return Math.round((i - o) / HC);
}
function qC(e) {
  const t = lv(e),
    n = Dr(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Kl(n);
}
function YC(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function KC(e) {
  if (!YC(e) && typeof e != "number") return !1;
  const t = hn(e);
  return !isNaN(Number(t));
}
function GC(e) {
  const t = hn(e),
    n = Dr(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const XC = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  ZC = (e, t, n) => {
    let r;
    const i = XC[e];
    return (
      typeof i == "string"
        ? (r = i)
        : t === 1
        ? (r = i.one)
        : (r = i.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function La(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const JC = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  eE = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  tE = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  nE = {
    date: La({ formats: JC, defaultWidth: "full" }),
    time: La({ formats: eE, defaultWidth: "full" }),
    dateTime: La({ formats: tE, defaultWidth: "full" }),
  },
  rE = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  iE = (e, t, n, r) => rE[e];
function Qi(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth,
        l = n != null && n.width ? String(n.width) : s;
      i = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth,
        l = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[l] || e.values[s];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[o];
  };
}
const oE = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  sE = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  lE = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  uE = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  aE = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  cE = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  fE = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  dE = {
    ordinalNumber: fE,
    era: Qi({ values: oE, defaultWidth: "wide" }),
    quarter: Qi({
      values: sE,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Qi({ values: lE, defaultWidth: "wide" }),
    day: Qi({ values: uE, defaultWidth: "wide" }),
    dayPeriod: Qi({
      values: aE,
      defaultWidth: "wide",
      formattingValues: cE,
      defaultFormattingWidth: "wide",
    }),
  };
function qi(e) {
  return (t, n = {}) => {
    const r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      o = t.match(i);
    if (!o) return null;
    const s = o[0],
      l = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      u = Array.isArray(l) ? hE(l, (d) => d.test(s)) : pE(l, (d) => d.test(s));
    let a;
    (a = e.valueCallback ? e.valueCallback(u) : u),
      (a = n.valueCallback ? n.valueCallback(a) : a);
    const c = t.slice(s.length);
    return { value: a, rest: c };
  };
}
function pE(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function hE(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function mE(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0],
      o = t.match(e.parsePattern);
    if (!o) return null;
    let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = t.slice(i.length);
    return { value: s, rest: l };
  };
}
const yE = /^(\d+)(th|st|nd|rd)?/i,
  gE = /\d+/i,
  vE = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  wE = { any: [/^b/i, /^(a|c)/i] },
  xE = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  SE = { any: [/1/i, /2/i, /3/i, /4/i] },
  kE = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  CE = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  EE = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  RE = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  _E = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  bE = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  PE = {
    ordinalNumber: mE({
      matchPattern: yE,
      parsePattern: gE,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: qi({
      matchPatterns: vE,
      defaultMatchWidth: "wide",
      parsePatterns: wE,
      defaultParseWidth: "any",
    }),
    quarter: qi({
      matchPatterns: xE,
      defaultMatchWidth: "wide",
      parsePatterns: SE,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: qi({
      matchPatterns: kE,
      defaultMatchWidth: "wide",
      parsePatterns: CE,
      defaultParseWidth: "any",
    }),
    day: qi({
      matchPatterns: EE,
      defaultMatchWidth: "wide",
      parsePatterns: RE,
      defaultParseWidth: "any",
    }),
    dayPeriod: qi({
      matchPatterns: _E,
      defaultMatchWidth: "any",
      parsePatterns: bE,
      defaultParseWidth: "any",
    }),
  },
  OE = {
    code: "en-US",
    formatDistance: ZC,
    formatLong: nE,
    formatRelative: iE,
    localize: dE,
    match: PE,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function TE(e) {
  const t = hn(e);
  return QC(t, GC(t)) + 1;
}
function $E(e) {
  const t = hn(e),
    n = Kl(t).getTime() - qC(t).getTime();
  return Math.round(n / sv) + 1;
}
function uv(e, t) {
  var c, d, p, v;
  const n = hn(e),
    r = n.getFullYear(),
    i = Mu(),
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((v = (p = i.locale) == null ? void 0 : p.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    s = Dr(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const l = zo(s, t),
    u = Dr(e, 0);
  u.setFullYear(r, 0, o), u.setHours(0, 0, 0, 0);
  const a = zo(u, t);
  return n.getTime() >= l.getTime()
    ? r + 1
    : n.getTime() >= a.getTime()
    ? r
    : r - 1;
}
function FE(e, t) {
  var l, u, a, c;
  const n = Mu(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((u = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) ==
      null
        ? void 0
        : u.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((c = (a = n.locale) == null ? void 0 : a.options) == null
        ? void 0
        : c.firstWeekContainsDate) ??
      1,
    i = uv(e, t),
    o = Dr(e, 0);
  return o.setFullYear(i, 0, r), o.setHours(0, 0, 0, 0), zo(o, t);
}
function AE(e, t) {
  const n = hn(e),
    r = zo(n, t).getTime() - FE(n, t).getTime();
  return Math.round(r / sv) + 1;
}
function le(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const An = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return le(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : le(n + 1, 2);
    },
    d(e, t) {
      return le(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return le(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return le(e.getHours(), t.length);
    },
    m(e, t) {
      return le(e.getMinutes(), t.length);
    },
    s(e, t) {
      return le(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        i = Math.floor(r * Math.pow(10, n - 3));
      return le(i, t.length);
    },
  },
  Vr = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  LE = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          i = r > 0 ? r : 1 - r;
        return n.ordinalNumber(i, { unit: "year" });
      }
      return An.y(e, t);
    },
    Y: function (e, t, n, r) {
      const i = uv(e, r),
        o = i > 0 ? i : 1 - i;
      if (t === "YY") {
        const s = o % 100;
        return le(s, 2);
      }
      return t === "Yo"
        ? n.ordinalNumber(o, { unit: "year" })
        : le(o, t.length);
    },
    R: function (e, t) {
      const n = lv(e);
      return le(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return le(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return le(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return le(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return An.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return le(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const i = AE(e, r);
      return t === "wo"
        ? n.ordinalNumber(i, { unit: "week" })
        : le(i, t.length);
    },
    I: function (e, t, n) {
      const r = $E(e);
      return t === "Io"
        ? n.ordinalNumber(r, { unit: "week" })
        : le(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : An.d(e, t);
    },
    D: function (e, t, n) {
      const r = TE(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : le(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const i = e.getDay(),
        o = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(o);
        case "ee":
          return le(o, 2);
        case "eo":
          return n.ordinalNumber(o, { unit: "day" });
        case "eee":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(i, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const i = e.getDay(),
        o = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(o);
        case "cc":
          return le(o, t.length);
        case "co":
          return n.ordinalNumber(o, { unit: "day" });
        case "ccc":
          return n.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(i, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        i = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(i);
        case "ii":
          return le(i, t.length);
        case "io":
          return n.ordinalNumber(i, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const i = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let i;
      switch (
        (r === 12
          ? (i = Vr.noon)
          : r === 0
          ? (i = Vr.midnight)
          : (i = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let i;
      switch (
        (r >= 17
          ? (i = Vr.evening)
          : r >= 12
          ? (i = Vr.afternoon)
          : r >= 4
          ? (i = Vr.morning)
          : (i = Vr.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return An.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : An.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko"
        ? n.ordinalNumber(r, { unit: "hour" })
        : le(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : le(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : An.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : An.s(e, t);
    },
    S: function (e, t) {
      return An.S(e, t);
    },
    X: function (e, t, n, r) {
      const o = (r._originalDate || e).getTimezoneOffset();
      if (o === 0) return "Z";
      switch (t) {
        case "X":
          return v0(o);
        case "XXXX":
        case "XX":
          return pr(o);
        case "XXXXX":
        case "XXX":
        default:
          return pr(o, ":");
      }
    },
    x: function (e, t, n, r) {
      const o = (r._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "x":
          return v0(o);
        case "xxxx":
        case "xx":
          return pr(o);
        case "xxxxx":
        case "xxx":
        default:
          return pr(o, ":");
      }
    },
    O: function (e, t, n, r) {
      const o = (r._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + g0(o, ":");
        case "OOOO":
        default:
          return "GMT" + pr(o, ":");
      }
    },
    z: function (e, t, n, r) {
      const o = (r._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + g0(o, ":");
        case "zzzz":
        default:
          return "GMT" + pr(o, ":");
      }
    },
    t: function (e, t, n, r) {
      const i = r._originalDate || e,
        o = Math.floor(i.getTime() / 1e3);
      return le(o, t.length);
    },
    T: function (e, t, n, r) {
      const o = (r._originalDate || e).getTime();
      return le(o, t.length);
    },
  };
function g0(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    i = Math.floor(r / 60),
    o = r % 60;
  return o === 0 ? n + String(i) : n + String(i) + t + le(o, 2);
}
function v0(e, t) {
  return e % 60 === 0
    ? (e > 0 ? "-" : "+") + le(Math.abs(e) / 60, 2)
    : pr(e, t);
}
function pr(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    i = le(Math.floor(r / 60), 2),
    o = le(r % 60, 2);
  return n + i + t + o;
}
const w0 = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  av = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  DE = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      i = n[2];
    if (!i) return w0(e, t);
    let o;
    switch (r) {
      case "P":
        o = t.dateTime({ width: "short" });
        break;
      case "PP":
        o = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        o = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        o = t.dateTime({ width: "full" });
        break;
    }
    return o.replace("{{date}}", w0(r, t)).replace("{{time}}", av(i, t));
  },
  ME = { p: av, P: DE },
  jE = ["D", "DD"],
  NE = ["YY", "YYYY"];
function IE(e) {
  return jE.indexOf(e) !== -1;
}
function zE(e) {
  return NE.indexOf(e) !== -1;
}
function x0(e, t, n) {
  if (e === "YYYY")
    throw new RangeError(
      `Use \`yyyy\` instead of \`YYYY\` (in \`${t}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
    );
  if (e === "YY")
    throw new RangeError(
      `Use \`yy\` instead of \`YY\` (in \`${t}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
    );
  if (e === "D")
    throw new RangeError(
      `Use \`d\` instead of \`D\` (in \`${t}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
    );
  if (e === "DD")
    throw new RangeError(
      `Use \`dd\` instead of \`DD\` (in \`${t}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
    );
}
const BE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  UE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  VE = /^'([^]*?)'?$/,
  HE = /''/g,
  WE = /[a-zA-Z]/;
function QE(e, t, n) {
  var c, d, p, v, g, S, _, h;
  const r = Mu(),
    i = (n == null ? void 0 : n.locale) ?? r.locale ?? OE,
    o =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((v = (p = r.locale) == null ? void 0 : p.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    s =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((S = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) ==
      null
        ? void 0
        : S.weekStartsOn) ??
      r.weekStartsOn ??
      ((h = (_ = r.locale) == null ? void 0 : _.options) == null
        ? void 0
        : h.weekStartsOn) ??
      0,
    l = hn(e);
  if (!KC(l)) throw new RangeError("Invalid time value");
  const u = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: i,
    _originalDate: l,
  };
  return t
    .match(UE)
    .map(function (f) {
      const m = f[0];
      if (m === "p" || m === "P") {
        const k = ME[m];
        return k(f, i.formatLong);
      }
      return f;
    })
    .join("")
    .match(BE)
    .map(function (f) {
      if (f === "''") return "'";
      const m = f[0];
      if (m === "'") return qE(f);
      const k = LE[m];
      if (k)
        return (
          !(n != null && n.useAdditionalWeekYearTokens) &&
            zE(f) &&
            x0(f, t, String(e)),
          !(n != null && n.useAdditionalDayOfYearTokens) &&
            IE(f) &&
            x0(f, t, String(e)),
          k(l, f, i.localize, u)
        );
      if (m.match(WE))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            m +
            "`"
        );
      return f;
    })
    .join("");
}
function qE(e) {
  const t = e.match(VE);
  return t ? t[1].replace(HE, "'") : e;
}
const YE =
    /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%.+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#?&//=]{1,256})/gim,
  S0 = (e, t = "yyyyMMdd") => QE(new Date(e), t),
  k0 = (e) => {
    const t = (n) =>
      `<a href="${
        n.includes("http") ? n : `https://${n}`
      }" target="_blank">${n}</a>`;
    return e.replace(YE, t);
  };
function KE({ item: e, setSelectedQNAList: t }) {
  const { mutate: n } = VC(t),
    r = e.dialogue_files.filter((l) => l.type === "Image"),
    i = e.dialogue_files.filter((l) => l.type === "File"),
    o = () =>
      i.map((l) =>
        y.jsx(Js, {
          as: "a",
          download: !0,
          href: l.url,
          justifyContent: "space-between",
          className: "speech-file",
          children: y.jsxs(Js, {
            children: [
              y.jsx("div", {
                className: "file-icon-wrap",
                children: y.jsx(GS, {}),
              }),
              y.jsx("p", {
                className: "file-name",
                children: l.original_filename,
              }),
            ],
          }),
        })
      ),
    s = () =>
      y.jsx(Js, {
        as: "ul",
        className: "speech-img-list",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        children: r.map((l) =>
          y.jsx("li", {
            className: "speech-img",
            onClick: () => window.open(l.url),
            children: y.jsx("img", { src: l.url, alt: "첨부" }),
          })
        ),
      });
  return (
    X.useEffect(() => {
      e.dialogue_files.map((l) => n({ url: l.file_url, type: l.content_type }));
    }, []),
    y.jsxs(y.Fragment, {
      children: [
        e.type === "Question" &&
          y.jsxs("div", {
            className: "user-side",
            children: [
              y.jsx(Cr, {
                side: e.type === "Question" ? "user" : "admin",
                children: y.jsx("div", {
                  className: "message",
                  dangerouslySetInnerHTML: { __html: k0(e.message) },
                }),
              }),
              y.jsx(o, {}),
              y.jsx(s, {}),
            ],
          }),
        e.type === "Answer" &&
          y.jsxs(yo, {
            children: [
              y.jsx(Cr, {
                side: e.type === "Question" ? "user" : "admin",
                children: y.jsx("div", {
                  className: "message",
                  dangerouslySetInnerHTML: { __html: k0(e.message) },
                }),
              }),
              y.jsx(o, {}),
              y.jsx(s, {}),
            ],
          }),
        e.type === "SearchEmpty" &&
          y.jsx(yo, {
            children: y.jsx(Cr, {
              side: "admin",
              children: y.jsxs("div", {
                className: "search-empty",
                children: [
                  "문의 주신 내용에 적절한 답변을",
                  y.jsx("br", {}),
                  "찾지 못했습니다.",
                  y.jsx(XS, {}),
                ],
              }),
            }),
          }),
      ],
    })
  );
}
function GE() {
  const e = X.useRef(null),
    [t, n] = dr(ng),
    [r, i] = dr(tg),
    [o, s] = X.useState(0),
    [l, u] = X.useState({ type: "", state: !1 }),
    [a, c] = dr(og),
    [d, p] = X.useState(!1),
    [v, g] = dr(ig),
    [S, _] = dr(rg),
    [h, f] = dr(sg),
    m = Il(lg),
    { data: k } = J4(),
    { data: E, mutate: P } = yC(),
    { mutate: R } = UC(),
    w = NC(),
    O = (C) => {
      P(C),
        i(k.sort((T, N) => T.order - N.order).filter((T) => T.parent_id === C));
    },
    L = (C) => {
      c((T) => !T),
        R({
          contents: C.inquiry,
          requester: {
            name: C.name,
            email: C.email,
            phone: C.phone,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            city: "",
            region: "",
            country: window.parent.navigator.language === "ko-KR" ? "한국" : "",
            lang: window.parent.navigator.language,
          },
          visit: {
            accessedAt: new Date(),
            accessedFrom: window.parent.location.origin,
          },
        });
    },
    D = () => {
      var C;
      (C = e.current) == null ||
        C.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
    };
  return (
    X.useEffect(() => {
      if (!E) return;
      let C;
      return E.faq_dialogues.length === 0
        ? _(!0)
        : (E.faq_dialogues.map((T, N) => {
            C = setTimeout(() => {
              u((q) => ({
                ...q,
                type:
                  N + 1 !== E.faq_dialogues.length
                    ? E.faq_dialogues[N + 1].type
                    : "Question",
                state: !0,
              })),
                n((q) => [...q, T]),
                N + 1 === E.faq_dialogues.length &&
                  (u({ type: "", state: !1 }), r.length === 0 ? c(!0) : _(!0));
            }, (N + 1) * 1e3);
          }),
          D(),
          () => clearTimeout(C));
    }, [E]),
    X.useEffect(() => {
      D();
    }, [S, v, t]),
    k
      ? y.jsxs("div", {
          ref: e,
          className: "chat-room",
          children: [
            y.jsx(yo, {
              children: y.jsx(Cr, {
                children: `안녕하세요 환영합니다!
항상 도움을 드리기 위해 있습니다.
궁금한 점이 있으실까요?`,
              }),
            }),
            t.map((C, T) =>
              y.jsx(KE, { item: C, setSelectedQNAList: n }, `qna__${T}`)
            ),
            S &&
              (r.length !== 0
                ? y.jsxs(Es, {
                    align: "right",
                    info: "아래 항목 중 도움이 필요하신 부분을 선택해주세요.",
                    children: [
                      r.map((C) =>
                        y.jsx(
                          Ot,
                          {
                            width: "fit-content",
                            size: "small",
                            $radius: !0,
                            states: "outline",
                            onClick: () => {
                              n((T) => [
                                ...T,
                                {
                                  dialogue_files: [],
                                  message: C.title,
                                  order: 99,
                                  type: "Question",
                                },
                              ]),
                                _((T) => !T),
                                f(!1),
                                O(C.id),
                                s(C.parent_id ?? 0);
                            },
                            children: C.title,
                          },
                          `faq_${C.id}`
                        )
                      ),
                      (E == null ? void 0 : E.to_connect) &&
                        y.jsx(Ot, {
                          width: "fit-content",
                          size: "small",
                          $radius: !0,
                          states: "outline",
                          onClick: () => {
                            n((C) => [
                              ...C,
                              {
                                dialogue_files: [],
                                message: "상담원 연결",
                                order: 99,
                                type: "Question",
                              },
                            ]),
                              f(!1),
                              _((C) => !C),
                              p((C) => !C);
                          },
                          children: "상담원 연결",
                        }),
                      (E == null ? void 0 : E.first) &&
                        y.jsx(Ot, {
                          width: "fit-content",
                          size: "small",
                          $radius: !0,
                          states: "outline",
                          onClick: () => {
                            n((C) => [
                              ...C,
                              {
                                dialogue_files: [],
                                message: "처음으로",
                                type: "Question",
                              },
                            ]),
                              _((C) => !C),
                              g((C) => !C),
                              f(!1);
                          },
                          children: "처음으로",
                        }),
                      (E == null ? void 0 : E.previous) &&
                        y.jsx(Ot, {
                          width: "fit-content",
                          size: "small",
                          $radius: !0,
                          states: "outline",
                          onClick: () => {
                            if (
                              (n((C) => [
                                ...C,
                                {
                                  dialogue_files: [],
                                  message: "이전으로",
                                  type: "Question",
                                },
                              ]),
                              _((C) => !C),
                              o === 0)
                            )
                              return g((C) => !C);
                            O(o);
                          },
                          children: "이전으로",
                        }),
                    ],
                  })
                : (E != null && E.first) ||
                  (E != null && E.previous) ||
                  (E != null && E.to_connect)
                ? y.jsxs(Es, {
                    align: "right",
                    info: "아래 항목 중 도움이 필요하신 부분을 선택해주세요.",
                    children: [
                      E.to_connect &&
                        y.jsx(Ot, {
                          width: "fit-content",
                          size: "small",
                          $radius: !0,
                          states: "outline",
                          onClick: () => {
                            n((C) => [
                              ...C,
                              {
                                dialogue_files: [],
                                message: "상담원 연결",
                                type: "Question",
                              },
                            ]),
                              f(!1),
                              _((C) => !C),
                              p((C) => !C);
                          },
                          children: "상담원 연결",
                        }),
                      (E == null ? void 0 : E.first) &&
                        y.jsx(Ot, {
                          width: "fit-content",
                          size: "small",
                          $radius: !0,
                          states: "outline",
                          onClick: () => {
                            n((C) => [
                              ...C,
                              {
                                dialogue_files: [],
                                message: "처음으로",
                                type: "Question",
                              },
                            ]),
                              _((C) => !C),
                              g((C) => !C),
                              f(!1);
                          },
                          children: "처음으로",
                        }),
                      (E == null ? void 0 : E.previous) &&
                        y.jsx(Ot, {
                          width: "fit-content",
                          size: "small",
                          $radius: !0,
                          states: "outline",
                          onClick: () => {
                            if (
                              (n((C) => [
                                ...C,
                                {
                                  dialogue_files: [],
                                  message: "이전으로",
                                  type: "Question",
                                },
                              ]),
                              _((C) => !C),
                              o === 0)
                            )
                              return m.length !== 0 ? f(!0) : g((C) => !C);
                            O(o);
                          },
                          children: "이전으로",
                        }),
                    ],
                  })
                : y.jsx(y.Fragment, {})),
            v &&
              !h &&
              y.jsx(Es, {
                align: "right",
                info: "아래 항목 중 도움이 필요하신 부분을 선택해주세요.",
                children: k
                  .sort((C, T) => C.order - T.order)
                  .filter((C) => C.parent_id === null)
                  .map((C) =>
                    y.jsx(
                      Ot,
                      {
                        width: "fit-content",
                        size: "small",
                        $radius: !0,
                        states: "outline",
                        onClick: () => {
                          n((T) => [
                            ...T,
                            {
                              dialogue_files: [],
                              message: C.title,
                              type: "Question",
                            },
                          ]),
                            g((T) => !T),
                            O(C.id);
                        },
                        children: C.title,
                      },
                      `faq_${C.id}`
                    )
                  ),
              }),
            h &&
              m.length !== 0 &&
              y.jsx(Es, {
                align: "right",
                info: "아래 항목 중 도움이 필요하신 부분을 선택해주세요.",
                children: m.map((C) =>
                  y.jsx(
                    Ot,
                    {
                      width: "fit-content",
                      size: "small",
                      $radius: !0,
                      states: "outline",
                      onClick: () => {
                        n((T) => [
                          ...T,
                          {
                            dialogue_files: [],
                            message: C.title,
                            type: "Question",
                          },
                        ]),
                          f(!1),
                          O(C.id);
                      },
                      children: C.title,
                    },
                    `faq_${C.id}`
                  )
                ),
              }),
            d &&
              y.jsxs(yo, {
                children: [
                  y.jsxs(Cr, {
                    children: [
                      "원활한 문의 접수와 답변을 위해",
                      y.jsx("br", {}),
                      "개인정보 수집 및 활용에 동의해 주세요!",
                      y.jsx("br", {}),
                      "◆ 수집 개인 정보 항목: 이름, 이메일, 연락처",
                    ],
                  }),
                  y.jsx(Js, {
                    className: "exposure-text-case",
                    flexDirection: "column",
                    children: y.jsxs(gC, {
                      useForm: w,
                      className: "vertical",
                      children: [
                        y.jsx(eo, {
                          name: "name",
                          label: "이름",
                          placeholder: "이름을 입력해 주세요.",
                          disabled: a,
                          required: !0,
                        }),
                        y.jsx(eo, {
                          name: "email",
                          label: "메일",
                          placeholder: "메일을 입력해 주세요.",
                          disabled: a,
                        }),
                        y.jsx(eo, {
                          name: "phone",
                          label: "연락처",
                          placeholder: "연락처를 입력해 주세요.",
                          disabled: a,
                          required: !0,
                        }),
                        y.jsx(eo, {
                          name: "inquiry",
                          label: "문의사항",
                          placeholder: "문의사항을 입력해 주세요.",
                          disabled: a,
                          required: !0,
                        }),
                        y.jsx(vC, {
                          children: y.jsx(Ot, {
                            size: "small",
                            width: "100%",
                            height: "14px",
                            $radius: !1,
                            states: "outline",
                            disabled: a,
                            onClick: w.handleSubmit(L),
                            children: "저장",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            l.state &&
              (l.type === "Answer"
                ? y.jsx(yo, {
                    children: y.jsx(Cr, { children: y.jsx(o0, {}) }),
                  })
                : y.jsx(Cr, { side: "user", children: y.jsx(o0, {}) })),
            a && y.jsx(mC, { children: "상담이 종료 되었습니다." }),
          ],
        })
      : y.jsx("div", {})
  );
}
var or = {},
  Ai = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cv = X;
function J(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ct = Object.prototype.hasOwnProperty,
  XE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  C0 = {},
  E0 = {};
function fv(e) {
  return ct.call(E0, e)
    ? !0
    : ct.call(C0, e)
    ? !1
    : XE.test(e)
    ? (E0[e] = !0)
    : ((C0[e] = !0), !1);
}
function ut(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Qe[e] = new ut(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Qe[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Qe[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Qe[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Qe[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Qe[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Qe[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Qe[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Qe[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Id = /[\-:]([a-z])/g;
function zd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Id, zd);
    Qe[t] = new ut(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Id, zd);
    Qe[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Id, zd);
  Qe[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Qe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Qe.xlinkHref = new ut(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Qe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var el = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ZE = ["Webkit", "ms", "Moz", "O"];
Object.keys(el).forEach(function (e) {
  ZE.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (el[t] = el[e]);
  });
});
var JE = /["'&<>]/;
function rt(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = JE.exec(e);
  if (t) {
    var n = "",
      r,
      i = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      i !== r && (n += e.substring(i, r)), (i = r + 1), (n += t);
    }
    e = i !== r ? n + e.substring(i, r) : n;
  }
  return e;
}
var e6 = /([A-Z])/g,
  t6 = /^ms-/,
  uf = Array.isArray;
function yn(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function n6(e, t, n) {
  switch (t) {
    case "select":
      return yn(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return yn(2, null);
    case "math":
      return yn(3, null);
    case "foreignObject":
      return yn(1, null);
    case "table":
      return yn(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return yn(5, null);
    case "colgroup":
      return yn(7, null);
    case "tr":
      return yn(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? yn(1, null) : e;
}
var R0 = new Map();
function dv(e, t, n) {
  if (typeof n != "object") throw Error(J(62));
  t = !0;
  for (var r in n)
    if (ct.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != "boolean" && i !== "") {
        if (r.indexOf("--") === 0) {
          var o = rt(r);
          i = rt(("" + i).trim());
        } else {
          o = r;
          var s = R0.get(o);
          s !== void 0 ||
            ((s = rt(o.replace(e6, "-$1").toLowerCase().replace(t6, "-ms-"))),
            R0.set(o, s)),
            (o = s),
            (i =
              typeof i == "number"
                ? i === 0 || ct.call(el, r)
                  ? "" + i
                  : i + "px"
                : rt(("" + i).trim()));
        }
        t ? ((t = !1), e.push(' style="', o, ":", i)) : e.push(";", o, ":", i);
      }
    }
  t || e.push('"');
}
function gt(e, t, n, r) {
  switch (n) {
    case "style":
      dv(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (
    !(2 < n.length) ||
    (n[0] !== "o" && n[0] !== "O") ||
    (n[1] !== "n" && n[1] !== "N")
  ) {
    if (((t = Qe.hasOwnProperty(n) ? Qe[n] : null), t !== null)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
        case 3:
          r && e.push(" ", n, '=""');
          break;
        case 4:
          r === !0
            ? e.push(" ", n, '=""')
            : r !== !1 && e.push(" ", n, '="', rt(r), '"');
          break;
        case 5:
          isNaN(r) || e.push(" ", n, '="', rt(r), '"');
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(" ", n, '="', rt(r), '"');
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', rt(r), '"');
      }
    } else if (fv(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (
            ((t = n.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-")
          )
            return;
      }
      e.push(" ", n, '="', rt(r), '"');
    }
  }
}
function tl(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(J(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(J(61));
    (t = t.__html), t != null && e.push("" + t);
  }
}
function r6(e) {
  var t = "";
  return (
    cv.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function Da(e, t, n, r) {
  e.push(en(n));
  var i = (n = null),
    o;
  for (o in t)
    if (ct.call(t, o)) {
      var s = t[o];
      if (s != null)
        switch (o) {
          case "children":
            n = s;
            break;
          case "dangerouslySetInnerHTML":
            i = s;
            break;
          default:
            gt(e, r, o, s);
        }
    }
  return (
    e.push(">"), tl(e, i, n), typeof n == "string" ? (e.push(rt(n)), null) : n
  );
}
var i6 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
  _0 = new Map();
function en(e) {
  var t = _0.get(e);
  if (t === void 0) {
    if (!i6.test(e)) throw Error(J(65, e));
    (t = "<" + e), _0.set(e, t);
  }
  return t;
}
function o6(e, t, n, r, i) {
  switch (t) {
    case "select":
      e.push(en("select"));
      var o = null,
        s = null;
      for (c in n)
        if (ct.call(n, c)) {
          var l = n[c];
          if (l != null)
            switch (c) {
              case "children":
                o = l;
                break;
              case "dangerouslySetInnerHTML":
                s = l;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                gt(e, r, c, l);
            }
        }
      return e.push(">"), tl(e, s, o), o;
    case "option":
      (s = i.selectedValue), e.push(en("option"));
      var u = (l = null),
        a = null,
        c = null;
      for (o in n)
        if (ct.call(n, o)) {
          var d = n[o];
          if (d != null)
            switch (o) {
              case "children":
                l = d;
                break;
              case "selected":
                a = d;
                break;
              case "dangerouslySetInnerHTML":
                c = d;
                break;
              case "value":
                u = d;
              default:
                gt(e, r, o, d);
            }
        }
      if (s != null)
        if (((n = u !== null ? "" + u : r6(l)), uf(s))) {
          for (r = 0; r < s.length; r++)
            if ("" + s[r] === n) {
              e.push(' selected=""');
              break;
            }
        } else "" + s === n && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), tl(e, c, l), l;
    case "textarea":
      e.push(en("textarea")), (c = s = o = null);
      for (l in n)
        if (ct.call(n, l) && ((u = n[l]), u != null))
          switch (l) {
            case "children":
              c = u;
              break;
            case "value":
              o = u;
              break;
            case "defaultValue":
              s = u;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(J(91));
            default:
              gt(e, r, l, u);
          }
      if ((o === null && s !== null && (o = s), e.push(">"), c != null)) {
        if (o != null) throw Error(J(92));
        if (uf(c) && 1 < c.length) throw Error(J(93));
        o = "" + c;
      }
      return (
        typeof o == "string" &&
          o[0] ===
            `
` &&
          e.push(`
`),
        o !== null && e.push(rt("" + o)),
        null
      );
    case "input":
      e.push(en("input")), (u = c = l = o = null);
      for (s in n)
        if (ct.call(n, s) && ((a = n[s]), a != null))
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(J(399, "input"));
            case "defaultChecked":
              u = a;
              break;
            case "defaultValue":
              l = a;
              break;
            case "checked":
              c = a;
              break;
            case "value":
              o = a;
              break;
            default:
              gt(e, r, s, a);
          }
      return (
        c !== null
          ? gt(e, r, "checked", c)
          : u !== null && gt(e, r, "checked", u),
        o !== null ? gt(e, r, "value", o) : l !== null && gt(e, r, "value", l),
        e.push("/>"),
        null
      );
    case "menuitem":
      e.push(en("menuitem"));
      for (var p in n)
        if (ct.call(n, p) && ((o = n[p]), o != null))
          switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(J(400));
            default:
              gt(e, r, p, o);
          }
      return e.push(">"), null;
    case "title":
      e.push(en("title")), (o = null);
      for (d in n)
        if (ct.call(n, d) && ((s = n[d]), s != null))
          switch (d) {
            case "children":
              o = s;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(J(434));
            default:
              gt(e, r, d, s);
          }
      return e.push(">"), o;
    case "listing":
    case "pre":
      e.push(en(t)), (s = o = null);
      for (u in n)
        if (ct.call(n, u) && ((l = n[u]), l != null))
          switch (u) {
            case "children":
              o = l;
              break;
            case "dangerouslySetInnerHTML":
              s = l;
              break;
            default:
              gt(e, r, u, l);
          }
      if ((e.push(">"), s != null)) {
        if (o != null) throw Error(J(60));
        if (typeof s != "object" || !("__html" in s)) throw Error(J(61));
        (n = s.__html),
          n != null &&
            (typeof n == "string" &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(
                  `
`,
                  n
                )
              : e.push("" + n));
      }
      return (
        typeof o == "string" &&
          o[0] ===
            `
` &&
          e.push(`
`),
        o
      );
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(en(t));
      for (var v in n)
        if (ct.call(n, v) && ((o = n[v]), o != null))
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(J(399, t));
            default:
              gt(e, r, v, o);
          }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Da(e, n, t, r);
    case "html":
      return i.insertionMode === 0 && e.push("<!DOCTYPE html>"), Da(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string")
        return Da(e, n, t, r);
      e.push(en(t)), (s = o = null);
      for (a in n)
        if (ct.call(n, a) && ((l = n[a]), l != null))
          switch (a) {
            case "children":
              o = l;
              break;
            case "dangerouslySetInnerHTML":
              s = l;
              break;
            case "style":
              dv(e, r, l);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              fv(a) &&
                typeof l != "function" &&
                typeof l != "symbol" &&
                e.push(" ", a, '="', rt(l), '"');
          }
      return e.push(">"), tl(e, s, o), o;
  }
}
function b0(e, t, n) {
  if ((e.push('<!--$?--><template id="'), n === null)) throw Error(J(395));
  return e.push(n), e.push('"></template>');
}
function s6(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        e.push('<div hidden id="'),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 2:
      return (
        e.push('<svg aria-hidden="true" style="display:none" id="'),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 3:
      return (
        e.push('<math aria-hidden="true" style="display:none" id="'),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 4:
      return (
        e.push('<table hidden id="'),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 5:
      return (
        e.push('<table hidden><tbody id="'),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 6:
      return (
        e.push('<table hidden><tr id="'),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push('">')
      );
    case 7:
      return (
        e.push('<table hidden><colgroup id="'),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push('">')
      );
    default:
      throw Error(J(397));
  }
}
function l6(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(J(397));
  }
}
var u6 = /[<\u2028\u2029]/g;
function Ma(e) {
  return JSON.stringify(e).replace(u6, function (t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error(
          "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  });
}
function a6(e, t) {
  return (
    (t = t === void 0 ? "" : t),
    {
      bootstrapChunks: [],
      startInlineScript: "<script>",
      placeholderPrefix: t + "P:",
      segmentPrefix: t + "S:",
      boundaryPrefix: t + "B:",
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function P0(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(rt(t)), !1)
    : (t === "" ? (e = r) : (r && e.push("<!-- -->"), e.push(rt(t)), (e = !0)),
      e);
}
var go = Object.assign,
  c6 = Symbol.for("react.element"),
  pv = Symbol.for("react.portal"),
  hv = Symbol.for("react.fragment"),
  mv = Symbol.for("react.strict_mode"),
  yv = Symbol.for("react.profiler"),
  gv = Symbol.for("react.provider"),
  vv = Symbol.for("react.context"),
  wv = Symbol.for("react.forward_ref"),
  xv = Symbol.for("react.suspense"),
  Sv = Symbol.for("react.suspense_list"),
  kv = Symbol.for("react.memo"),
  Bd = Symbol.for("react.lazy"),
  f6 = Symbol.for("react.scope"),
  d6 = Symbol.for("react.debug_trace_mode"),
  p6 = Symbol.for("react.legacy_hidden"),
  h6 = Symbol.for("react.default_value"),
  O0 = Symbol.iterator;
function af(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hv:
      return "Fragment";
    case pv:
      return "Portal";
    case yv:
      return "Profiler";
    case mv:
      return "StrictMode";
    case xv:
      return "Suspense";
    case Sv:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vv:
        return (e.displayName || "Context") + ".Consumer";
      case gv:
        return (e._context.displayName || "Context") + ".Provider";
      case wv:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case kv:
        return (
          (t = e.displayName || null), t !== null ? t : af(e.type) || "Memo"
        );
      case Bd:
        (t = e._payload), (e = e._init);
        try {
          return af(e(t));
        } catch {}
    }
  return null;
}
var Cv = {};
function T0(e, t) {
  if (((e = e.contextTypes), !e)) return Cv;
  var n = {},
    r;
  for (r in e) n[r] = t[r];
  return n;
}
var Rr = null;
function ju(e, t) {
  if (e !== t) {
    (e.context._currentValue2 = e.parentValue), (e = e.parent);
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(J(401));
    } else {
      if (n === null) throw Error(J(401));
      ju(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function Ev(e) {
  (e.context._currentValue2 = e.parentValue),
    (e = e.parent),
    e !== null && Ev(e);
}
function Rv(e) {
  var t = e.parent;
  t !== null && Rv(t), (e.context._currentValue2 = e.value);
}
function _v(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null))
    throw Error(J(402));
  e.depth === t.depth ? ju(e, t) : _v(e, t);
}
function bv(e, t) {
  var n = t.parent;
  if (n === null) throw Error(J(402));
  e.depth === n.depth ? ju(e, n) : bv(e, n),
    (t.context._currentValue2 = t.value);
}
function Gl(e) {
  var t = Rr;
  t !== e &&
    (t === null
      ? Rv(e)
      : e === null
      ? Ev(t)
      : t.depth === e.depth
      ? ju(t, e)
      : t.depth > e.depth
      ? _v(t, e)
      : bv(t, e),
    (Rr = e));
}
var $0 = {
  isMounted: function () {
    return !1;
  },
  enqueueSetState: function (e, t) {
    (e = e._reactInternals), e.queue !== null && e.queue.push(t);
  },
  enqueueReplaceState: function (e, t) {
    (e = e._reactInternals), (e.replace = !0), (e.queue = [t]);
  },
  enqueueForceUpdate: function () {},
};
function F0(e, t, n, r) {
  var i = e.state !== void 0 ? e.state : null;
  (e.updater = $0), (e.props = n), (e.state = i);
  var o = { queue: [], replace: !1 };
  e._reactInternals = o;
  var s = t.contextType;
  if (
    ((e.context = typeof s == "object" && s !== null ? s._currentValue2 : r),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" &&
      ((s = s(n, i)), (i = s == null ? i : go({}, i, s)), (e.state = i)),
    typeof t.getDerivedStateFromProps != "function" &&
      typeof e.getSnapshotBeforeUpdate != "function" &&
      (typeof e.UNSAFE_componentWillMount == "function" ||
        typeof e.componentWillMount == "function"))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == "function" && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == "function" &&
        e.UNSAFE_componentWillMount(),
      t !== e.state && $0.enqueueReplaceState(e, e.state, null),
      o.queue !== null && 0 < o.queue.length)
    )
      if (
        ((t = o.queue),
        (s = o.replace),
        (o.queue = null),
        (o.replace = !1),
        s && t.length === 1)
      )
        e.state = t[0];
      else {
        for (o = s ? t[0] : e.state, i = !0, s = s ? 1 : 0; s < t.length; s++) {
          var l = t[s];
          (l = typeof l == "function" ? l.call(e, o, n, r) : l),
            l != null && (i ? ((i = !1), (o = go({}, o, l))) : go(o, l));
        }
        e.state = o;
      }
    else o.queue = null;
}
var m6 = { id: 1, overflow: "" };
function cf(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - nl(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - nl(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    return (
      (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      { id: (1 << (32 - nl(t) + i)) | (n << i) | r, overflow: o + e }
    );
  }
  return { id: (1 << o) | (n << i) | r, overflow: e };
}
var nl = Math.clz32 ? Math.clz32 : v6,
  y6 = Math.log,
  g6 = Math.LN2;
function v6(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((y6(e) / g6) | 0)) | 0;
}
function w6(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var x6 = typeof Object.is == "function" ? Object.is : w6,
  Pn = null,
  Ud = null,
  rl = null,
  ce = null,
  to = !1,
  Xl = !1,
  Bo = 0,
  Qn = null,
  Nu = 0;
function mr() {
  if (Pn === null) throw Error(J(321));
  return Pn;
}
function A0() {
  if (0 < Nu) throw Error(J(312));
  return { memoizedState: null, queue: null, next: null };
}
function Vd() {
  return (
    ce === null
      ? rl === null
        ? ((to = !1), (rl = ce = A0()))
        : ((to = !0), (ce = rl))
      : ce.next === null
      ? ((to = !1), (ce = ce.next = A0()))
      : ((to = !0), (ce = ce.next)),
    ce
  );
}
function Hd() {
  (Ud = Pn = null), (Xl = !1), (rl = null), (Nu = 0), (ce = Qn = null);
}
function Pv(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function L0(e, t, n) {
  if (((Pn = mr()), (ce = Vd()), to)) {
    var r = ce.queue;
    if (((t = r.dispatch), Qn !== null && ((n = Qn.get(r)), n !== void 0))) {
      Qn.delete(r), (r = ce.memoizedState);
      do (r = e(r, n.action)), (n = n.next);
      while (n !== null);
      return (ce.memoizedState = r), [r, t];
    }
    return [ce.memoizedState, t];
  }
  return (
    (e =
      e === Pv ? (typeof t == "function" ? t() : t) : n !== void 0 ? n(t) : t),
    (ce.memoizedState = e),
    (e = ce.queue = { last: null, dispatch: null }),
    (e = e.dispatch = S6.bind(null, Pn, e)),
    [ce.memoizedState, e]
  );
}
function D0(e, t) {
  if (((Pn = mr()), (ce = Vd()), (t = t === void 0 ? null : t), ce !== null)) {
    var n = ce.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!x6(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return (e = e()), (ce.memoizedState = [e, t]), e;
}
function S6(e, t, n) {
  if (25 <= Nu) throw Error(J(301));
  if (e === Pn)
    if (
      ((Xl = !0),
      (e = { action: n, next: null }),
      Qn === null && (Qn = new Map()),
      (n = Qn.get(t)),
      n === void 0)
    )
      Qn.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function k6() {
  throw Error(J(394));
}
function bs() {}
var M0 = {
    readContext: function (e) {
      return e._currentValue2;
    },
    useContext: function (e) {
      return mr(), e._currentValue2;
    },
    useMemo: D0,
    useReducer: L0,
    useRef: function (e) {
      (Pn = mr()), (ce = Vd());
      var t = ce.memoizedState;
      return t === null ? ((e = { current: e }), (ce.memoizedState = e)) : t;
    },
    useState: function (e) {
      return L0(Pv, e);
    },
    useInsertionEffect: bs,
    useLayoutEffect: function () {},
    useCallback: function (e, t) {
      return D0(function () {
        return e;
      }, t);
    },
    useImperativeHandle: bs,
    useEffect: bs,
    useDebugValue: bs,
    useDeferredValue: function (e) {
      return mr(), e;
    },
    useTransition: function () {
      return mr(), [!1, k6];
    },
    useId: function () {
      var e = Ud.treeContext,
        t = e.overflow;
      (e = e.id), (e = (e & ~(1 << (32 - nl(e) - 1))).toString(32) + t);
      var n = il;
      if (n === null) throw Error(J(404));
      return (
        (t = Bo++),
        (e = ":" + n.idPrefix + "R" + e),
        0 < t && (e += "H" + t.toString(32)),
        e + ":"
      );
    },
    useMutableSource: function (e, t) {
      return mr(), t(e._source);
    },
    useSyncExternalStore: function (e, t, n) {
      if (n === void 0) throw Error(J(407));
      return n();
    },
  },
  il = null,
  ja =
    cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentDispatcher;
function C6(e) {
  return console.error(e), null;
}
function no() {}
function E6(e, t, n, r, i, o, s, l, u) {
  var a = [],
    c = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: c,
      pingedTasks: a,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? C6 : i,
      onAllReady: o === void 0 ? no : o,
      onShellReady: s === void 0 ? no : s,
      onShellError: l === void 0 ? no : l,
      onFatalError: u === void 0 ? no : u,
    }),
    (n = Zl(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = Wd(t, e, null, n, c, Cv, null, m6)),
    a.push(e),
    t
  );
}
function Wd(e, t, n, r, i, o, s, l) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = {
    node: t,
    ping: function () {
      var a = e.pingedTasks;
      a.push(u), a.length === 1 && $v(e);
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: o,
    context: s,
    treeContext: l,
  };
  return i.add(u), u;
}
function Zl(e, t, n, r, i, o) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: o,
  };
}
function Uo(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != "string"))
    throw Error(
      'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
        typeof e +
        '" instead'
    );
  return e;
}
function Jl(e, t) {
  var n = e.onShellError;
  n(t),
    (n = e.onFatalError),
    n(t),
    e.destination !== null
      ? ((e.status = 2), e.destination.destroy(t))
      : ((e.status = 1), (e.fatalError = t));
}
function j0(e, t, n, r, i) {
  for (Pn = {}, Ud = t, Bo = 0, e = n(r, i); Xl; )
    (Xl = !1), (Bo = 0), (Nu += 1), (ce = null), (e = n(r, i));
  return Hd(), e;
}
function N0(e, t, n, r) {
  var i = n.render(),
    o = r.childContextTypes;
  if (o != null) {
    var s = t.legacyContext;
    if (typeof n.getChildContext != "function") r = s;
    else {
      n = n.getChildContext();
      for (var l in n)
        if (!(l in o)) throw Error(J(108, af(r) || "Unknown", l));
      r = go({}, s, n);
    }
    (t.legacyContext = r), xt(e, t, i), (t.legacyContext = s);
  } else xt(e, t, i);
}
function I0(e, t) {
  if (e && e.defaultProps) {
    (t = go({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ff(e, t, n, r, i) {
  if (typeof n == "function")
    if (n.prototype && n.prototype.isReactComponent) {
      i = T0(n, t.legacyContext);
      var o = n.contextType;
      (o = new n(r, typeof o == "object" && o !== null ? o._currentValue2 : i)),
        F0(o, n, r, i),
        N0(e, t, o, n);
    } else {
      (o = T0(n, t.legacyContext)), (i = j0(e, t, n, r, o));
      var s = Bo !== 0;
      if (
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
      )
        F0(i, n, r, o), N0(e, t, i, n);
      else if (s) {
        (r = t.treeContext), (t.treeContext = cf(r, 1, 0));
        try {
          xt(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else xt(e, t, i);
    }
  else if (typeof n == "string") {
    switch (
      ((i = t.blockedSegment),
      (o = o6(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (s = i.formatContext),
      (i.formatContext = n6(s, n, r)),
      df(e, t, o),
      (i.formatContext = s),
      n)
    ) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        i.chunks.push("</", n, ">");
    }
    i.lastPushedText = !1;
  } else {
    switch (n) {
      case p6:
      case d6:
      case mv:
      case yv:
      case hv:
        xt(e, t, r.children);
        return;
      case Sv:
        xt(e, t, r.children);
        return;
      case f6:
        throw Error(J(343));
      case xv:
        e: {
          (n = t.blockedBoundary),
            (i = t.blockedSegment),
            (o = r.fallback),
            (r = r.children),
            (s = new Set());
          var l = {
              id: null,
              rootSegmentID: -1,
              parentFlushed: !1,
              pendingTasks: 0,
              forceClientRender: !1,
              completedSegments: [],
              byteSize: 0,
              fallbackAbortableTasks: s,
              errorDigest: null,
            },
            u = Zl(e, i.chunks.length, l, i.formatContext, !1, !1);
          i.children.push(u), (i.lastPushedText = !1);
          var a = Zl(e, 0, null, i.formatContext, !1, !1);
          (a.parentFlushed = !0),
            (t.blockedBoundary = l),
            (t.blockedSegment = a);
          try {
            if (
              (df(e, t, r),
              e.responseState.generateStaticMarkup ||
                (a.lastPushedText &&
                  a.textEmbedded &&
                  a.chunks.push("<!-- -->")),
              (a.status = 1),
              eu(l, a),
              l.pendingTasks === 0)
            )
              break e;
          } catch (c) {
            (a.status = 4),
              (l.forceClientRender = !0),
              (l.errorDigest = Uo(e, c));
          } finally {
            (t.blockedBoundary = n), (t.blockedSegment = i);
          }
          (t = Wd(e, o, n, u, s, t.legacyContext, t.context, t.treeContext)),
            e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null)
      switch (n.$$typeof) {
        case wv:
          if (((r = j0(e, t, n.render, r, i)), Bo !== 0)) {
            (n = t.treeContext), (t.treeContext = cf(n, 1, 0));
            try {
              xt(e, t, r);
            } finally {
              t.treeContext = n;
            }
          } else xt(e, t, r);
          return;
        case kv:
          (n = n.type), (r = I0(n, r)), ff(e, t, n, r, i);
          return;
        case gv:
          if (
            ((i = r.children),
            (n = n._context),
            (r = r.value),
            (o = n._currentValue2),
            (n._currentValue2 = r),
            (s = Rr),
            (Rr = r =
              {
                parent: s,
                depth: s === null ? 0 : s.depth + 1,
                context: n,
                parentValue: o,
                value: r,
              }),
            (t.context = r),
            xt(e, t, i),
            (e = Rr),
            e === null)
          )
            throw Error(J(403));
          (r = e.parentValue),
            (e.context._currentValue2 = r === h6 ? e.context._defaultValue : r),
            (e = Rr = e.parent),
            (t.context = e);
          return;
        case vv:
          (r = r.children), (r = r(n._currentValue2)), xt(e, t, r);
          return;
        case Bd:
          (i = n._init),
            (n = i(n._payload)),
            (r = I0(n, r)),
            ff(e, t, n, r, void 0);
          return;
      }
    throw Error(J(130, n == null ? n : typeof n, ""));
  }
}
function xt(e, t, n) {
  if (((t.node = n), typeof n == "object" && n !== null)) {
    switch (n.$$typeof) {
      case c6:
        ff(e, t, n.type, n.props, n.ref);
        return;
      case pv:
        throw Error(J(257));
      case Bd:
        var r = n._init;
        (n = r(n._payload)), xt(e, t, n);
        return;
    }
    if (uf(n)) {
      z0(e, t, n);
      return;
    }
    if (
      (n === null || typeof n != "object"
        ? (r = null)
        : ((r = (O0 && n[O0]) || n["@@iterator"]),
          (r = typeof r == "function" ? r : null)),
      r && (r = r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do i.push(n.value), (n = r.next());
        while (!n.done);
        z0(e, t, i);
      }
      return;
    }
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        J(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  typeof n == "string"
    ? ((r = t.blockedSegment),
      (r.lastPushedText = P0(
        t.blockedSegment.chunks,
        n,
        e.responseState,
        r.lastPushedText
      )))
    : typeof n == "number" &&
      ((r = t.blockedSegment),
      (r.lastPushedText = P0(
        t.blockedSegment.chunks,
        "" + n,
        e.responseState,
        r.lastPushedText
      )));
}
function z0(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var o = t.treeContext;
    t.treeContext = cf(o, r, i);
    try {
      df(e, t, n[i]);
    } finally {
      t.treeContext = o;
    }
  }
}
function df(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    o = t.context;
  try {
    return xt(e, t, n);
  } catch (u) {
    if (
      (Hd(), typeof u == "object" && u !== null && typeof u.then == "function")
    ) {
      n = u;
      var s = t.blockedSegment,
        l = Zl(e, s.chunks.length, null, s.formatContext, s.lastPushedText, !0);
      s.children.push(l),
        (s.lastPushedText = !1),
        (e = Wd(
          e,
          t.node,
          t.blockedBoundary,
          l,
          t.abortSet,
          t.legacyContext,
          t.context,
          t.treeContext
        ).ping),
        n.then(e, e),
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = o),
        Gl(o);
    } else
      throw (
        ((t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = o),
        Gl(o),
        u)
      );
  }
}
function R6(e) {
  var t = e.blockedBoundary;
  (e = e.blockedSegment), (e.status = 3), Tv(this, t, e);
}
function Ov(e, t, n) {
  var r = e.blockedBoundary;
  (e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 &&
          ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(J(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (i) {
          return Ov(i, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r()));
}
function eu(e, t) {
  if (
    t.chunks.length === 0 &&
    t.children.length === 1 &&
    t.children[0].boundary === null
  ) {
    var n = t.children[0];
    (n.id = t.id), (n.parentFlushed = !0), n.status === 1 && eu(e, n);
  } else e.completedSegments.push(t);
}
function Tv(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(J(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--,
      e.pendingRootTasks === 0 &&
        ((e.onShellError = no), (t = e.onShellReady), t());
  } else
    t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && eu(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(R6, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (eu(t, n),
            t.completedSegments.length === 1 &&
              t.parentFlushed &&
              e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
}
function $v(e) {
  if (e.status !== 2) {
    var t = Rr,
      n = ja.current;
    ja.current = M0;
    var r = il;
    il = e.responseState;
    try {
      var i = e.pingedTasks,
        o;
      for (o = 0; o < i.length; o++) {
        var s = i[o],
          l = e,
          u = s.blockedSegment;
        if (u.status === 0) {
          Gl(s.context);
          try {
            xt(l, s, s.node),
              l.responseState.generateStaticMarkup ||
                (u.lastPushedText &&
                  u.textEmbedded &&
                  u.chunks.push("<!-- -->")),
              s.abortSet.delete(s),
              (u.status = 1),
              Tv(l, s.blockedBoundary, u);
          } catch (g) {
            if (
              (Hd(),
              typeof g == "object" && g !== null && typeof g.then == "function")
            ) {
              var a = s.ping;
              g.then(a, a);
            } else {
              s.abortSet.delete(s), (u.status = 4);
              var c = s.blockedBoundary,
                d = g,
                p = Uo(l, d);
              if (
                (c === null
                  ? Jl(l, d)
                  : (c.pendingTasks--,
                    c.forceClientRender ||
                      ((c.forceClientRender = !0),
                      (c.errorDigest = p),
                      c.parentFlushed && l.clientRenderedBoundaries.push(c))),
                l.allPendingTasks--,
                l.allPendingTasks === 0)
              ) {
                var v = l.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      i.splice(0, o), e.destination !== null && Qd(e, e.destination);
    } catch (g) {
      Uo(e, g), Jl(e, g);
    } finally {
      (il = r), (ja.current = n), n === M0 && Gl(t);
    }
  }
}
function Ps(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        t.push('<template id="'),
        t.push(e.placeholderPrefix),
        (e = r.toString(16)),
        t.push(e),
        t.push('"></template>')
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var o = 0;
      n = n.children;
      for (var s = 0; s < n.length; s++) {
        for (i = n[s]; o < i.index; o++) t.push(r[o]);
        i = Iu(e, t, i);
      }
      for (; o < r.length - 1; o++) t.push(r[o]);
      return o < r.length && (i = t.push(r[o])), i;
    default:
      throw Error(J(390));
  }
}
function Iu(e, t, n) {
  var r = n.boundary;
  if (r === null) return Ps(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push("<!--$!-->"),
        t.push("<template"),
        r && (t.push(' data-dgst="'), (r = rt(r)), t.push(r), t.push('"')),
        t.push("></template>")),
      Ps(e, t, n),
      (e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->")),
      e
    );
  if (0 < r.pendingTasks) {
    (r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var i = e.responseState,
      o = i.nextSuspenseID++;
    return (
      (i = i.boundaryPrefix + o.toString(16)),
      (r = r.id = i),
      b0(t, e.responseState, r),
      Ps(e, t, n),
      t.push("<!--/$-->")
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      b0(t, e.responseState, r.id),
      Ps(e, t, n),
      t.push("<!--/$-->")
    );
  if (
    (e.responseState.generateStaticMarkup || t.push("<!--$-->"),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(J(391));
  return (
    Iu(e, t, n[0]),
    (e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->")),
    e
  );
}
function B0(e, t, n) {
  return (
    s6(t, e.responseState, n.formatContext, n.id),
    Iu(e, t, n),
    l6(t, n.formatContext)
  );
}
function U0(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Fv(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push('$RC("')
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
        )),
    r === null)
  )
    throw Error(J(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push('","'),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push('")</script>')
  );
}
function Fv(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(J(392));
    return B0(e, t, r);
  }
  return (
    B0(e, t, r),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push('$RS("')
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
        )),
    t.push(e.segmentPrefix),
    (i = i.toString(16)),
    t.push(i),
    t.push('","'),
    t.push(e.placeholderPrefix),
    t.push(i),
    t.push('")</script>')
  );
}
function Qd(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      Iu(e, t, n), (e.completedRootSegment = null);
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var i = e.clientRenderedBoundaries,
      o;
    for (o = 0; o < i.length; o++) {
      var s = i[o];
      r = t;
      var l = e.responseState,
        u = s.id,
        a = s.errorDigest,
        c = s.errorMessage,
        d = s.errorComponentStack;
      if (
        (r.push(l.startInlineScript),
        l.sentClientRenderFunction
          ? r.push('$RX("')
          : ((l.sentClientRenderFunction = !0),
            r.push(
              'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
            )),
        u === null)
      )
        throw Error(J(395));
      if ((r.push(u), r.push('"'), a || c || d)) {
        r.push(",");
        var p = Ma(a || "");
        r.push(p);
      }
      if (c || d) {
        r.push(",");
        var v = Ma(c || "");
        r.push(v);
      }
      if (d) {
        r.push(",");
        var g = Ma(d);
        r.push(g);
      }
      if (!r.push(")</script>")) {
        (e.destination = null), o++, i.splice(0, o);
        return;
      }
    }
    i.splice(0, o);
    var S = e.completedBoundaries;
    for (o = 0; o < S.length; o++)
      if (!U0(e, t, S[o])) {
        (e.destination = null), o++, S.splice(0, o);
        return;
      }
    S.splice(0, o);
    var _ = e.partialBoundaries;
    for (o = 0; o < _.length; o++) {
      var h = _[o];
      e: {
        (i = e), (s = t);
        var f = h.completedSegments;
        for (l = 0; l < f.length; l++)
          if (!Fv(i, s, h, f[l])) {
            l++, f.splice(0, l);
            var m = !1;
            break e;
          }
        f.splice(0, l), (m = !0);
      }
      if (!m) {
        (e.destination = null), o++, _.splice(0, o);
        return;
      }
    }
    _.splice(0, o);
    var k = e.completedBoundaries;
    for (o = 0; o < k.length; o++)
      if (!U0(e, t, k[o])) {
        (e.destination = null), o++, k.splice(0, o);
        return;
      }
    k.splice(0, o);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function _6(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function (r) {
      return Ov(r, e, t);
    }),
      n.clear(),
      e.destination !== null && Qd(e, e.destination);
  } catch (r) {
    Uo(e, r), Jl(e, r);
  }
}
function b6() {}
function Av(e, t, n, r) {
  var i = !1,
    o = null,
    s = "",
    l = {
      push: function (a) {
        return a !== null && (s += a), !0;
      },
      destroy: function (a) {
        (i = !0), (o = a);
      },
    },
    u = !1;
  if (
    ((e = E6(
      e,
      a6(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      b6,
      void 0,
      function () {
        u = !0;
      },
      void 0,
      void 0
    )),
    $v(e),
    _6(e, r),
    e.status === 1)
  )
    (e.status = 2), l.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = l;
    try {
      Qd(e, l);
    } catch (a) {
      Uo(e, a), Jl(e, a);
    }
  }
  if (i) throw o;
  if (!u) throw Error(J(426));
  return s;
}
Ai.renderToNodeStream = function () {
  throw Error(J(207));
};
Ai.renderToStaticMarkup = function (e, t) {
  return Av(
    e,
    t,
    !0,
    'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
};
Ai.renderToStaticNodeStream = function () {
  throw Error(J(208));
};
Ai.renderToString = function (e, t) {
  return Av(
    e,
    t,
    !1,
    'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
};
Ai.version = "18.2.0";
var qd = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lv = X;
function te(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var St = null,
  kt = 0;
function V(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      0 < kt &&
        (e.enqueue(new Uint8Array(St.buffer, 0, kt)),
        (St = new Uint8Array(512)),
        (kt = 0)),
        e.enqueue(t);
    else {
      var n = St.length - kt;
      n < t.length &&
        (n === 0
          ? e.enqueue(St)
          : (St.set(t.subarray(0, n), kt), e.enqueue(St), (t = t.subarray(n))),
        (St = new Uint8Array(512)),
        (kt = 0)),
        St.set(t, kt),
        (kt += t.length);
    }
}
function ye(e, t) {
  return V(e, t), !0;
}
function V0(e) {
  St &&
    0 < kt &&
    (e.enqueue(new Uint8Array(St.buffer, 0, kt)), (St = null), (kt = 0));
}
var Dv = new TextEncoder();
function ne(e) {
  return Dv.encode(e);
}
function I(e) {
  return Dv.encode(e);
}
function Mv(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var ft = Object.prototype.hasOwnProperty,
  P6 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  H0 = {},
  W0 = {};
function jv(e) {
  return ft.call(W0, e)
    ? !0
    : ft.call(H0, e)
    ? !1
    : P6.test(e)
    ? (W0[e] = !0)
    : ((H0[e] = !0), !1);
}
function at(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    qe[e] = new at(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  qe[t] = new at(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  qe[e] = new at(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  qe[e] = new at(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    qe[e] = new at(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  qe[e] = new at(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  qe[e] = new at(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  qe[e] = new at(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  qe[e] = new at(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yd = /[\-:]([a-z])/g;
function Kd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yd, Kd);
    qe[t] = new at(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yd, Kd);
    qe[t] = new at(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yd, Kd);
  qe[t] = new at(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  qe[e] = new at(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
qe.xlinkHref = new at(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  qe[e] = new at(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ol = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  O6 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ol).forEach(function (e) {
  O6.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ol[t] = ol[e]);
  });
});
var T6 = /["'&<>]/;
function Ue(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = T6.exec(e);
  if (t) {
    var n = "",
      r,
      i = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      i !== r && (n += e.substring(i, r)), (i = r + 1), (n += t);
    }
    e = i !== r ? n + e.substring(i, r) : n;
  }
  return e;
}
var $6 = /([A-Z])/g,
  F6 = /^ms-/,
  pf = Array.isArray,
  A6 = I("<script>"),
  L6 = I("</script>"),
  D6 = I('<script src="'),
  M6 = I('<script type="module" src="'),
  Q0 = I('" async=""></script>'),
  j6 = /(<\/|<)(s)(cript)/gi;
function N6(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function I6(e, t, n, r, i) {
  (e = e === void 0 ? "" : e),
    (t = t === void 0 ? A6 : I('<script nonce="' + Ue(t) + '">'));
  var o = [];
  if (
    (n !== void 0 && o.push(t, ne(("" + n).replace(j6, N6)), L6), r !== void 0)
  )
    for (n = 0; n < r.length; n++) o.push(D6, ne(Ue(r[n])), Q0);
  if (i !== void 0) for (r = 0; r < i.length; r++) o.push(M6, ne(Ue(i[r])), Q0);
  return {
    bootstrapChunks: o,
    startInlineScript: t,
    placeholderPrefix: I(e + "P:"),
    segmentPrefix: I(e + "S:"),
    boundaryPrefix: e + "B:",
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function tn(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function z6(e) {
  return tn(
    e === "http://www.w3.org/2000/svg"
      ? 2
      : e === "http://www.w3.org/1998/Math/MathML"
      ? 3
      : 0,
    null
  );
}
function B6(e, t, n) {
  switch (t) {
    case "select":
      return tn(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return tn(2, null);
    case "math":
      return tn(3, null);
    case "foreignObject":
      return tn(1, null);
    case "table":
      return tn(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return tn(5, null);
    case "colgroup":
      return tn(7, null);
    case "tr":
      return tn(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? tn(1, null) : e;
}
var Gd = I("<!-- -->");
function q0(e, t, n, r) {
  return t === "" ? r : (r && e.push(Gd), e.push(ne(Ue(t))), !0);
}
var Y0 = new Map(),
  U6 = I(' style="'),
  K0 = I(":"),
  V6 = I(";");
function Nv(e, t, n) {
  if (typeof n != "object") throw Error(te(62));
  t = !0;
  for (var r in n)
    if (ft.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != "boolean" && i !== "") {
        if (r.indexOf("--") === 0) {
          var o = ne(Ue(r));
          i = ne(Ue(("" + i).trim()));
        } else {
          o = r;
          var s = Y0.get(o);
          s !== void 0 ||
            ((s = I(
              Ue(o.replace($6, "-$1").toLowerCase().replace(F6, "-ms-"))
            )),
            Y0.set(o, s)),
            (o = s),
            (i =
              typeof i == "number"
                ? i === 0 || ft.call(ol, r)
                  ? ne("" + i)
                  : ne(i + "px")
                : ne(Ue(("" + i).trim())));
        }
        t ? ((t = !1), e.push(U6, o, K0, i)) : e.push(V6, o, K0, i);
      }
    }
  t || e.push(yr);
}
var Mn = I(" "),
  Hr = I('="'),
  yr = I('"'),
  G0 = I('=""');
function vt(e, t, n, r) {
  switch (n) {
    case "style":
      Nv(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (
    !(2 < n.length) ||
    (n[0] !== "o" && n[0] !== "O") ||
    (n[1] !== "n" && n[1] !== "N")
  ) {
    if (((t = qe.hasOwnProperty(n) ? qe[n] : null), t !== null)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (((n = ne(t.attributeName)), t.type)) {
        case 3:
          r && e.push(Mn, n, G0);
          break;
        case 4:
          r === !0
            ? e.push(Mn, n, G0)
            : r !== !1 && e.push(Mn, n, Hr, ne(Ue(r)), yr);
          break;
        case 5:
          isNaN(r) || e.push(Mn, n, Hr, ne(Ue(r)), yr);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Mn, n, Hr, ne(Ue(r)), yr);
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(Mn, n, Hr, ne(Ue(r)), yr);
      }
    } else if (jv(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (
            ((t = n.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-")
          )
            return;
      }
      e.push(Mn, ne(n), Hr, ne(Ue(r)), yr);
    }
  }
}
var jn = I(">"),
  X0 = I("/>");
function sl(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(te(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(te(61));
    (t = t.__html), t != null && e.push(ne("" + t));
  }
}
function H6(e) {
  var t = "";
  return (
    Lv.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
var Na = I(' selected=""');
function Ia(e, t, n, r) {
  e.push(nn(n));
  var i = (n = null),
    o;
  for (o in t)
    if (ft.call(t, o)) {
      var s = t[o];
      if (s != null)
        switch (o) {
          case "children":
            n = s;
            break;
          case "dangerouslySetInnerHTML":
            i = s;
            break;
          default:
            vt(e, r, o, s);
        }
    }
  return (
    e.push(jn),
    sl(e, i, n),
    typeof n == "string" ? (e.push(ne(Ue(n))), null) : n
  );
}
var za = I(`
`),
  W6 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
  Z0 = new Map();
function nn(e) {
  var t = Z0.get(e);
  if (t === void 0) {
    if (!W6.test(e)) throw Error(te(65, e));
    (t = I("<" + e)), Z0.set(e, t);
  }
  return t;
}
var Q6 = I("<!DOCTYPE html>");
function q6(e, t, n, r, i) {
  switch (t) {
    case "select":
      e.push(nn("select"));
      var o = null,
        s = null;
      for (c in n)
        if (ft.call(n, c)) {
          var l = n[c];
          if (l != null)
            switch (c) {
              case "children":
                o = l;
                break;
              case "dangerouslySetInnerHTML":
                s = l;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                vt(e, r, c, l);
            }
        }
      return e.push(jn), sl(e, s, o), o;
    case "option":
      (s = i.selectedValue), e.push(nn("option"));
      var u = (l = null),
        a = null,
        c = null;
      for (o in n)
        if (ft.call(n, o)) {
          var d = n[o];
          if (d != null)
            switch (o) {
              case "children":
                l = d;
                break;
              case "selected":
                a = d;
                break;
              case "dangerouslySetInnerHTML":
                c = d;
                break;
              case "value":
                u = d;
              default:
                vt(e, r, o, d);
            }
        }
      if (s != null)
        if (((n = u !== null ? "" + u : H6(l)), pf(s))) {
          for (r = 0; r < s.length; r++)
            if ("" + s[r] === n) {
              e.push(Na);
              break;
            }
        } else "" + s === n && e.push(Na);
      else a && e.push(Na);
      return e.push(jn), sl(e, c, l), l;
    case "textarea":
      e.push(nn("textarea")), (c = s = o = null);
      for (l in n)
        if (ft.call(n, l) && ((u = n[l]), u != null))
          switch (l) {
            case "children":
              c = u;
              break;
            case "value":
              o = u;
              break;
            case "defaultValue":
              s = u;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(te(91));
            default:
              vt(e, r, l, u);
          }
      if ((o === null && s !== null && (o = s), e.push(jn), c != null)) {
        if (o != null) throw Error(te(92));
        if (pf(c) && 1 < c.length) throw Error(te(93));
        o = "" + c;
      }
      return (
        typeof o == "string" &&
          o[0] ===
            `
` &&
          e.push(za),
        o !== null && e.push(ne(Ue("" + o))),
        null
      );
    case "input":
      e.push(nn("input")), (u = c = l = o = null);
      for (s in n)
        if (ft.call(n, s) && ((a = n[s]), a != null))
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(te(399, "input"));
            case "defaultChecked":
              u = a;
              break;
            case "defaultValue":
              l = a;
              break;
            case "checked":
              c = a;
              break;
            case "value":
              o = a;
              break;
            default:
              vt(e, r, s, a);
          }
      return (
        c !== null
          ? vt(e, r, "checked", c)
          : u !== null && vt(e, r, "checked", u),
        o !== null ? vt(e, r, "value", o) : l !== null && vt(e, r, "value", l),
        e.push(X0),
        null
      );
    case "menuitem":
      e.push(nn("menuitem"));
      for (var p in n)
        if (ft.call(n, p) && ((o = n[p]), o != null))
          switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(te(400));
            default:
              vt(e, r, p, o);
          }
      return e.push(jn), null;
    case "title":
      e.push(nn("title")), (o = null);
      for (d in n)
        if (ft.call(n, d) && ((s = n[d]), s != null))
          switch (d) {
            case "children":
              o = s;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(te(434));
            default:
              vt(e, r, d, s);
          }
      return e.push(jn), o;
    case "listing":
    case "pre":
      e.push(nn(t)), (s = o = null);
      for (u in n)
        if (ft.call(n, u) && ((l = n[u]), l != null))
          switch (u) {
            case "children":
              o = l;
              break;
            case "dangerouslySetInnerHTML":
              s = l;
              break;
            default:
              vt(e, r, u, l);
          }
      if ((e.push(jn), s != null)) {
        if (o != null) throw Error(te(60));
        if (typeof s != "object" || !("__html" in s)) throw Error(te(61));
        (n = s.__html),
          n != null &&
            (typeof n == "string" &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(za, ne(n))
              : e.push(ne("" + n)));
      }
      return (
        typeof o == "string" &&
          o[0] ===
            `
` &&
          e.push(za),
        o
      );
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(nn(t));
      for (var v in n)
        if (ft.call(n, v) && ((o = n[v]), o != null))
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(te(399, t));
            default:
              vt(e, r, v, o);
          }
      return e.push(X0), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Ia(e, n, t, r);
    case "html":
      return i.insertionMode === 0 && e.push(Q6), Ia(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string")
        return Ia(e, n, t, r);
      e.push(nn(t)), (s = o = null);
      for (a in n)
        if (ft.call(n, a) && ((l = n[a]), l != null))
          switch (a) {
            case "children":
              o = l;
              break;
            case "dangerouslySetInnerHTML":
              s = l;
              break;
            case "style":
              Nv(e, r, l);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              jv(a) &&
                typeof l != "function" &&
                typeof l != "symbol" &&
                e.push(Mn, ne(a), Hr, ne(Ue(l)), yr);
          }
      return e.push(jn), sl(e, s, o), o;
  }
}
var Y6 = I("</"),
  K6 = I(">"),
  G6 = I('<template id="'),
  X6 = I('"></template>'),
  Z6 = I("<!--$-->"),
  J6 = I('<!--$?--><template id="'),
  e5 = I('"></template>'),
  t5 = I("<!--$!-->"),
  n5 = I("<!--/$-->"),
  r5 = I("<template"),
  i5 = I('"'),
  o5 = I(' data-dgst="');
I(' data-msg="');
I(' data-stck="');
var s5 = I("></template>");
function J0(e, t, n) {
  if ((V(e, J6), n === null)) throw Error(te(395));
  return V(e, n), ye(e, e5);
}
var l5 = I('<div hidden id="'),
  u5 = I('">'),
  a5 = I("</div>"),
  c5 = I('<svg aria-hidden="true" style="display:none" id="'),
  f5 = I('">'),
  d5 = I("</svg>"),
  p5 = I('<math aria-hidden="true" style="display:none" id="'),
  h5 = I('">'),
  m5 = I("</math>"),
  y5 = I('<table hidden id="'),
  g5 = I('">'),
  v5 = I("</table>"),
  w5 = I('<table hidden><tbody id="'),
  x5 = I('">'),
  S5 = I("</tbody></table>"),
  k5 = I('<table hidden><tr id="'),
  C5 = I('">'),
  E5 = I("</tr></table>"),
  R5 = I('<table hidden><colgroup id="'),
  _5 = I('">'),
  b5 = I("</colgroup></table>");
function P5(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        V(e, l5), V(e, t.segmentPrefix), V(e, ne(r.toString(16))), ye(e, u5)
      );
    case 2:
      return (
        V(e, c5), V(e, t.segmentPrefix), V(e, ne(r.toString(16))), ye(e, f5)
      );
    case 3:
      return (
        V(e, p5), V(e, t.segmentPrefix), V(e, ne(r.toString(16))), ye(e, h5)
      );
    case 4:
      return (
        V(e, y5), V(e, t.segmentPrefix), V(e, ne(r.toString(16))), ye(e, g5)
      );
    case 5:
      return (
        V(e, w5), V(e, t.segmentPrefix), V(e, ne(r.toString(16))), ye(e, x5)
      );
    case 6:
      return (
        V(e, k5), V(e, t.segmentPrefix), V(e, ne(r.toString(16))), ye(e, C5)
      );
    case 7:
      return (
        V(e, R5), V(e, t.segmentPrefix), V(e, ne(r.toString(16))), ye(e, _5)
      );
    default:
      throw Error(te(397));
  }
}
function O5(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return ye(e, a5);
    case 2:
      return ye(e, d5);
    case 3:
      return ye(e, m5);
    case 4:
      return ye(e, v5);
    case 5:
      return ye(e, S5);
    case 6:
      return ye(e, E5);
    case 7:
      return ye(e, b5);
    default:
      throw Error(te(397));
  }
}
var T5 = I(
    'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  ),
  $5 = I('$RS("'),
  F5 = I('","'),
  A5 = I('")</script>'),
  L5 = I(
    'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
  ),
  D5 = I('$RC("'),
  M5 = I('","'),
  j5 = I('")</script>'),
  N5 = I(
    'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
  ),
  I5 = I('$RX("'),
  z5 = I('"'),
  B5 = I(")</script>"),
  Ba = I(","),
  U5 = /[<\u2028\u2029]/g;
function Ua(e) {
  return JSON.stringify(e).replace(U5, function (t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error(
          "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  });
}
var vo = Object.assign,
  V5 = Symbol.for("react.element"),
  Iv = Symbol.for("react.portal"),
  zv = Symbol.for("react.fragment"),
  Bv = Symbol.for("react.strict_mode"),
  Uv = Symbol.for("react.profiler"),
  Vv = Symbol.for("react.provider"),
  Hv = Symbol.for("react.context"),
  Wv = Symbol.for("react.forward_ref"),
  Qv = Symbol.for("react.suspense"),
  qv = Symbol.for("react.suspense_list"),
  Yv = Symbol.for("react.memo"),
  Xd = Symbol.for("react.lazy"),
  H5 = Symbol.for("react.scope"),
  W5 = Symbol.for("react.debug_trace_mode"),
  Q5 = Symbol.for("react.legacy_hidden"),
  q5 = Symbol.for("react.default_value"),
  em = Symbol.iterator;
function hf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zv:
      return "Fragment";
    case Iv:
      return "Portal";
    case Uv:
      return "Profiler";
    case Bv:
      return "StrictMode";
    case Qv:
      return "Suspense";
    case qv:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hv:
        return (e.displayName || "Context") + ".Consumer";
      case Vv:
        return (e._context.displayName || "Context") + ".Provider";
      case Wv:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Yv:
        return (
          (t = e.displayName || null), t !== null ? t : hf(e.type) || "Memo"
        );
      case Xd:
        (t = e._payload), (e = e._init);
        try {
          return hf(e(t));
        } catch {}
    }
  return null;
}
var Kv = {};
function tm(e, t) {
  if (((e = e.contextTypes), !e)) return Kv;
  var n = {},
    r;
  for (r in e) n[r] = t[r];
  return n;
}
var _r = null;
function zu(e, t) {
  if (e !== t) {
    (e.context._currentValue = e.parentValue), (e = e.parent);
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(te(401));
    } else {
      if (n === null) throw Error(te(401));
      zu(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function Gv(e) {
  (e.context._currentValue = e.parentValue),
    (e = e.parent),
    e !== null && Gv(e);
}
function Xv(e) {
  var t = e.parent;
  t !== null && Xv(t), (e.context._currentValue = e.value);
}
function Zv(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null))
    throw Error(te(402));
  e.depth === t.depth ? zu(e, t) : Zv(e, t);
}
function Jv(e, t) {
  var n = t.parent;
  if (n === null) throw Error(te(402));
  e.depth === n.depth ? zu(e, n) : Jv(e, n),
    (t.context._currentValue = t.value);
}
function tu(e) {
  var t = _r;
  t !== e &&
    (t === null
      ? Xv(e)
      : e === null
      ? Gv(t)
      : t.depth === e.depth
      ? zu(t, e)
      : t.depth > e.depth
      ? Zv(t, e)
      : Jv(t, e),
    (_r = e));
}
var nm = {
  isMounted: function () {
    return !1;
  },
  enqueueSetState: function (e, t) {
    (e = e._reactInternals), e.queue !== null && e.queue.push(t);
  },
  enqueueReplaceState: function (e, t) {
    (e = e._reactInternals), (e.replace = !0), (e.queue = [t]);
  },
  enqueueForceUpdate: function () {},
};
function rm(e, t, n, r) {
  var i = e.state !== void 0 ? e.state : null;
  (e.updater = nm), (e.props = n), (e.state = i);
  var o = { queue: [], replace: !1 };
  e._reactInternals = o;
  var s = t.contextType;
  if (
    ((e.context = typeof s == "object" && s !== null ? s._currentValue : r),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" &&
      ((s = s(n, i)), (i = s == null ? i : vo({}, i, s)), (e.state = i)),
    typeof t.getDerivedStateFromProps != "function" &&
      typeof e.getSnapshotBeforeUpdate != "function" &&
      (typeof e.UNSAFE_componentWillMount == "function" ||
        typeof e.componentWillMount == "function"))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == "function" && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == "function" &&
        e.UNSAFE_componentWillMount(),
      t !== e.state && nm.enqueueReplaceState(e, e.state, null),
      o.queue !== null && 0 < o.queue.length)
    )
      if (
        ((t = o.queue),
        (s = o.replace),
        (o.queue = null),
        (o.replace = !1),
        s && t.length === 1)
      )
        e.state = t[0];
      else {
        for (o = s ? t[0] : e.state, i = !0, s = s ? 1 : 0; s < t.length; s++) {
          var l = t[s];
          (l = typeof l == "function" ? l.call(e, o, n, r) : l),
            l != null && (i ? ((i = !1), (o = vo({}, o, l))) : vo(o, l));
        }
        e.state = o;
      }
    else o.queue = null;
}
var Y5 = { id: 1, overflow: "" };
function mf(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - ll(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - ll(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    return (
      (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      { id: (1 << (32 - ll(t) + i)) | (n << i) | r, overflow: o + e }
    );
  }
  return { id: (1 << o) | (n << i) | r, overflow: e };
}
var ll = Math.clz32 ? Math.clz32 : X5,
  K5 = Math.log,
  G5 = Math.LN2;
function X5(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((K5(e) / G5) | 0)) | 0;
}
function Z5(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var J5 = typeof Object.is == "function" ? Object.is : Z5,
  On = null,
  Zd = null,
  ul = null,
  fe = null,
  ro = !1,
  nu = !1,
  Vo = 0,
  qn = null,
  Bu = 0;
function gr() {
  if (On === null) throw Error(te(321));
  return On;
}
function im() {
  if (0 < Bu) throw Error(te(312));
  return { memoizedState: null, queue: null, next: null };
}
function Jd() {
  return (
    fe === null
      ? ul === null
        ? ((ro = !1), (ul = fe = im()))
        : ((ro = !0), (fe = ul))
      : fe.next === null
      ? ((ro = !1), (fe = fe.next = im()))
      : ((ro = !0), (fe = fe.next)),
    fe
  );
}
function ep() {
  (Zd = On = null), (nu = !1), (ul = null), (Bu = 0), (fe = qn = null);
}
function e2(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function om(e, t, n) {
  if (((On = gr()), (fe = Jd()), ro)) {
    var r = fe.queue;
    if (((t = r.dispatch), qn !== null && ((n = qn.get(r)), n !== void 0))) {
      qn.delete(r), (r = fe.memoizedState);
      do (r = e(r, n.action)), (n = n.next);
      while (n !== null);
      return (fe.memoizedState = r), [r, t];
    }
    return [fe.memoizedState, t];
  }
  return (
    (e =
      e === e2 ? (typeof t == "function" ? t() : t) : n !== void 0 ? n(t) : t),
    (fe.memoizedState = e),
    (e = fe.queue = { last: null, dispatch: null }),
    (e = e.dispatch = e8.bind(null, On, e)),
    [fe.memoizedState, e]
  );
}
function sm(e, t) {
  if (((On = gr()), (fe = Jd()), (t = t === void 0 ? null : t), fe !== null)) {
    var n = fe.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!J5(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return (e = e()), (fe.memoizedState = [e, t]), e;
}
function e8(e, t, n) {
  if (25 <= Bu) throw Error(te(301));
  if (e === On)
    if (
      ((nu = !0),
      (e = { action: n, next: null }),
      qn === null && (qn = new Map()),
      (n = qn.get(t)),
      n === void 0)
    )
      qn.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function t8() {
  throw Error(te(394));
}
function Os() {}
var lm = {
    readContext: function (e) {
      return e._currentValue;
    },
    useContext: function (e) {
      return gr(), e._currentValue;
    },
    useMemo: sm,
    useReducer: om,
    useRef: function (e) {
      (On = gr()), (fe = Jd());
      var t = fe.memoizedState;
      return t === null ? ((e = { current: e }), (fe.memoizedState = e)) : t;
    },
    useState: function (e) {
      return om(e2, e);
    },
    useInsertionEffect: Os,
    useLayoutEffect: function () {},
    useCallback: function (e, t) {
      return sm(function () {
        return e;
      }, t);
    },
    useImperativeHandle: Os,
    useEffect: Os,
    useDebugValue: Os,
    useDeferredValue: function (e) {
      return gr(), e;
    },
    useTransition: function () {
      return gr(), [!1, t8];
    },
    useId: function () {
      var e = Zd.treeContext,
        t = e.overflow;
      (e = e.id), (e = (e & ~(1 << (32 - ll(e) - 1))).toString(32) + t);
      var n = al;
      if (n === null) throw Error(te(404));
      return (
        (t = Vo++),
        (e = ":" + n.idPrefix + "R" + e),
        0 < t && (e += "H" + t.toString(32)),
        e + ":"
      );
    },
    useMutableSource: function (e, t) {
      return gr(), t(e._source);
    },
    useSyncExternalStore: function (e, t, n) {
      if (n === void 0) throw Error(te(407));
      return n();
    },
  },
  al = null,
  Va =
    Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentDispatcher;
function n8(e) {
  return console.error(e), null;
}
function io() {}
function r8(e, t, n, r, i, o, s, l, u) {
  var a = [],
    c = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: c,
      pingedTasks: a,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? n8 : i,
      onAllReady: o === void 0 ? io : o,
      onShellReady: s === void 0 ? io : s,
      onShellError: l === void 0 ? io : l,
      onFatalError: u === void 0 ? io : u,
    }),
    (n = ru(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = tp(t, e, null, n, c, Kv, null, Y5)),
    a.push(e),
    t
  );
}
function tp(e, t, n, r, i, o, s, l) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = {
    node: t,
    ping: function () {
      var a = e.pingedTasks;
      a.push(u), a.length === 1 && r2(e);
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: o,
    context: s,
    treeContext: l,
  };
  return i.add(u), u;
}
function ru(e, t, n, r, i, o) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: o,
  };
}
function Ho(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != "string"))
    throw Error(
      'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
        typeof e +
        '" instead'
    );
  return e;
}
function iu(e, t) {
  var n = e.onShellError;
  n(t),
    (n = e.onFatalError),
    n(t),
    e.destination !== null
      ? ((e.status = 2), Mv(e.destination, t))
      : ((e.status = 1), (e.fatalError = t));
}
function um(e, t, n, r, i) {
  for (On = {}, Zd = t, Vo = 0, e = n(r, i); nu; )
    (nu = !1), (Vo = 0), (Bu += 1), (fe = null), (e = n(r, i));
  return ep(), e;
}
function am(e, t, n, r) {
  var i = n.render(),
    o = r.childContextTypes;
  if (o != null) {
    var s = t.legacyContext;
    if (typeof n.getChildContext != "function") r = s;
    else {
      n = n.getChildContext();
      for (var l in n)
        if (!(l in o)) throw Error(te(108, hf(r) || "Unknown", l));
      r = vo({}, s, n);
    }
    (t.legacyContext = r), Ct(e, t, i), (t.legacyContext = s);
  } else Ct(e, t, i);
}
function cm(e, t) {
  if (e && e.defaultProps) {
    (t = vo({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yf(e, t, n, r, i) {
  if (typeof n == "function")
    if (n.prototype && n.prototype.isReactComponent) {
      i = tm(n, t.legacyContext);
      var o = n.contextType;
      (o = new n(r, typeof o == "object" && o !== null ? o._currentValue : i)),
        rm(o, n, r, i),
        am(e, t, o, n);
    } else {
      (o = tm(n, t.legacyContext)), (i = um(e, t, n, r, o));
      var s = Vo !== 0;
      if (
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
      )
        rm(i, n, r, o), am(e, t, i, n);
      else if (s) {
        (r = t.treeContext), (t.treeContext = mf(r, 1, 0));
        try {
          Ct(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else Ct(e, t, i);
    }
  else if (typeof n == "string") {
    switch (
      ((i = t.blockedSegment),
      (o = q6(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (s = i.formatContext),
      (i.formatContext = B6(s, n, r)),
      gf(e, t, o),
      (i.formatContext = s),
      n)
    ) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        i.chunks.push(Y6, ne(n), K6);
    }
    i.lastPushedText = !1;
  } else {
    switch (n) {
      case Q5:
      case W5:
      case Bv:
      case Uv:
      case zv:
        Ct(e, t, r.children);
        return;
      case qv:
        Ct(e, t, r.children);
        return;
      case H5:
        throw Error(te(343));
      case Qv:
        e: {
          (n = t.blockedBoundary),
            (i = t.blockedSegment),
            (o = r.fallback),
            (r = r.children),
            (s = new Set());
          var l = {
              id: null,
              rootSegmentID: -1,
              parentFlushed: !1,
              pendingTasks: 0,
              forceClientRender: !1,
              completedSegments: [],
              byteSize: 0,
              fallbackAbortableTasks: s,
              errorDigest: null,
            },
            u = ru(e, i.chunks.length, l, i.formatContext, !1, !1);
          i.children.push(u), (i.lastPushedText = !1);
          var a = ru(e, 0, null, i.formatContext, !1, !1);
          (a.parentFlushed = !0),
            (t.blockedBoundary = l),
            (t.blockedSegment = a);
          try {
            if (
              (gf(e, t, r),
              a.lastPushedText && a.textEmbedded && a.chunks.push(Gd),
              (a.status = 1),
              ou(l, a),
              l.pendingTasks === 0)
            )
              break e;
          } catch (c) {
            (a.status = 4),
              (l.forceClientRender = !0),
              (l.errorDigest = Ho(e, c));
          } finally {
            (t.blockedBoundary = n), (t.blockedSegment = i);
          }
          (t = tp(e, o, n, u, s, t.legacyContext, t.context, t.treeContext)),
            e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null)
      switch (n.$$typeof) {
        case Wv:
          if (((r = um(e, t, n.render, r, i)), Vo !== 0)) {
            (n = t.treeContext), (t.treeContext = mf(n, 1, 0));
            try {
              Ct(e, t, r);
            } finally {
              t.treeContext = n;
            }
          } else Ct(e, t, r);
          return;
        case Yv:
          (n = n.type), (r = cm(n, r)), yf(e, t, n, r, i);
          return;
        case Vv:
          if (
            ((i = r.children),
            (n = n._context),
            (r = r.value),
            (o = n._currentValue),
            (n._currentValue = r),
            (s = _r),
            (_r = r =
              {
                parent: s,
                depth: s === null ? 0 : s.depth + 1,
                context: n,
                parentValue: o,
                value: r,
              }),
            (t.context = r),
            Ct(e, t, i),
            (e = _r),
            e === null)
          )
            throw Error(te(403));
          (r = e.parentValue),
            (e.context._currentValue = r === q5 ? e.context._defaultValue : r),
            (e = _r = e.parent),
            (t.context = e);
          return;
        case Hv:
          (r = r.children), (r = r(n._currentValue)), Ct(e, t, r);
          return;
        case Xd:
          (i = n._init),
            (n = i(n._payload)),
            (r = cm(n, r)),
            yf(e, t, n, r, void 0);
          return;
      }
    throw Error(te(130, n == null ? n : typeof n, ""));
  }
}
function Ct(e, t, n) {
  if (((t.node = n), typeof n == "object" && n !== null)) {
    switch (n.$$typeof) {
      case V5:
        yf(e, t, n.type, n.props, n.ref);
        return;
      case Iv:
        throw Error(te(257));
      case Xd:
        var r = n._init;
        (n = r(n._payload)), Ct(e, t, n);
        return;
    }
    if (pf(n)) {
      fm(e, t, n);
      return;
    }
    if (
      (n === null || typeof n != "object"
        ? (r = null)
        : ((r = (em && n[em]) || n["@@iterator"]),
          (r = typeof r == "function" ? r : null)),
      r && (r = r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do i.push(n.value), (n = r.next());
        while (!n.done);
        fm(e, t, i);
      }
      return;
    }
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        te(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  typeof n == "string"
    ? ((r = t.blockedSegment),
      (r.lastPushedText = q0(
        t.blockedSegment.chunks,
        n,
        e.responseState,
        r.lastPushedText
      )))
    : typeof n == "number" &&
      ((r = t.blockedSegment),
      (r.lastPushedText = q0(
        t.blockedSegment.chunks,
        "" + n,
        e.responseState,
        r.lastPushedText
      )));
}
function fm(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var o = t.treeContext;
    t.treeContext = mf(o, r, i);
    try {
      gf(e, t, n[i]);
    } finally {
      t.treeContext = o;
    }
  }
}
function gf(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    o = t.context;
  try {
    return Ct(e, t, n);
  } catch (u) {
    if (
      (ep(), typeof u == "object" && u !== null && typeof u.then == "function")
    ) {
      n = u;
      var s = t.blockedSegment,
        l = ru(e, s.chunks.length, null, s.formatContext, s.lastPushedText, !0);
      s.children.push(l),
        (s.lastPushedText = !1),
        (e = tp(
          e,
          t.node,
          t.blockedBoundary,
          l,
          t.abortSet,
          t.legacyContext,
          t.context,
          t.treeContext
        ).ping),
        n.then(e, e),
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = o),
        tu(o);
    } else
      throw (
        ((t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = o),
        tu(o),
        u)
      );
  }
}
function i8(e) {
  var t = e.blockedBoundary;
  (e = e.blockedSegment), (e.status = 3), n2(this, t, e);
}
function t2(e, t, n) {
  var r = e.blockedBoundary;
  (e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 &&
          ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(te(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (i) {
          return t2(i, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r()));
}
function ou(e, t) {
  if (
    t.chunks.length === 0 &&
    t.children.length === 1 &&
    t.children[0].boundary === null
  ) {
    var n = t.children[0];
    (n.id = t.id), (n.parentFlushed = !0), n.status === 1 && ou(e, n);
  } else e.completedSegments.push(t);
}
function n2(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(te(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--,
      e.pendingRootTasks === 0 &&
        ((e.onShellError = io), (t = e.onShellReady), t());
  } else
    t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && ou(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(i8, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (ou(t, n),
            t.completedSegments.length === 1 &&
              t.parentFlushed &&
              e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
}
function r2(e) {
  if (e.status !== 2) {
    var t = _r,
      n = Va.current;
    Va.current = lm;
    var r = al;
    al = e.responseState;
    try {
      var i = e.pingedTasks,
        o;
      for (o = 0; o < i.length; o++) {
        var s = i[o],
          l = e,
          u = s.blockedSegment;
        if (u.status === 0) {
          tu(s.context);
          try {
            Ct(l, s, s.node),
              u.lastPushedText && u.textEmbedded && u.chunks.push(Gd),
              s.abortSet.delete(s),
              (u.status = 1),
              n2(l, s.blockedBoundary, u);
          } catch (g) {
            if (
              (ep(),
              typeof g == "object" && g !== null && typeof g.then == "function")
            ) {
              var a = s.ping;
              g.then(a, a);
            } else {
              s.abortSet.delete(s), (u.status = 4);
              var c = s.blockedBoundary,
                d = g,
                p = Ho(l, d);
              if (
                (c === null
                  ? iu(l, d)
                  : (c.pendingTasks--,
                    c.forceClientRender ||
                      ((c.forceClientRender = !0),
                      (c.errorDigest = p),
                      c.parentFlushed && l.clientRenderedBoundaries.push(c))),
                l.allPendingTasks--,
                l.allPendingTasks === 0)
              ) {
                var v = l.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      i.splice(0, o), e.destination !== null && np(e, e.destination);
    } catch (g) {
      Ho(e, g), iu(e, g);
    } finally {
      (al = r), (Va.current = n), n === lm && tu(t);
    }
  }
}
function Ts(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        V(t, G6),
        V(t, e.placeholderPrefix),
        (e = ne(r.toString(16))),
        V(t, e),
        ye(t, X6)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var o = 0;
      n = n.children;
      for (var s = 0; s < n.length; s++) {
        for (i = n[s]; o < i.index; o++) V(t, r[o]);
        i = Uu(e, t, i);
      }
      for (; o < r.length - 1; o++) V(t, r[o]);
      return o < r.length && (i = ye(t, r[o])), i;
    default:
      throw Error(te(390));
  }
}
function Uu(e, t, n) {
  var r = n.boundary;
  if (r === null) return Ts(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    (r = r.errorDigest),
      ye(t, t5),
      V(t, r5),
      r && (V(t, o5), V(t, ne(Ue(r))), V(t, i5)),
      ye(t, s5),
      Ts(e, t, n);
  else if (0 < r.pendingTasks) {
    (r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var i = e.responseState,
      o = i.nextSuspenseID++;
    (i = I(i.boundaryPrefix + o.toString(16))),
      (r = r.id = i),
      J0(t, e.responseState, r),
      Ts(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize)
    (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      J0(t, e.responseState, r.id),
      Ts(e, t, n);
  else {
    if ((ye(t, Z6), (n = r.completedSegments), n.length !== 1))
      throw Error(te(391));
    Uu(e, t, n[0]);
  }
  return ye(t, n5);
}
function dm(e, t, n) {
  return (
    P5(t, e.responseState, n.formatContext, n.id),
    Uu(e, t, n),
    O5(t, n.formatContext)
  );
}
function pm(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) i2(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    V(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? V(t, D5)
      : ((e.sentCompleteBoundaryFunction = !0), V(t, L5)),
    r === null)
  )
    throw Error(te(395));
  return (
    (n = ne(n.toString(16))),
    V(t, r),
    V(t, M5),
    V(t, e.segmentPrefix),
    V(t, n),
    ye(t, j5)
  );
}
function i2(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(te(392));
    return dm(e, t, r);
  }
  return (
    dm(e, t, r),
    (e = e.responseState),
    V(t, e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? V(t, $5)
      : ((e.sentCompleteSegmentFunction = !0), V(t, T5)),
    V(t, e.segmentPrefix),
    (i = ne(i.toString(16))),
    V(t, i),
    V(t, F5),
    V(t, e.placeholderPrefix),
    V(t, i),
    ye(t, A5)
  );
}
function np(e, t) {
  (St = new Uint8Array(512)), (kt = 0);
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      Uu(e, t, n), (e.completedRootSegment = null);
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) V(t, r[n]);
      n < r.length && ye(t, r[n]);
    }
    var i = e.clientRenderedBoundaries,
      o;
    for (o = 0; o < i.length; o++) {
      var s = i[o];
      r = t;
      var l = e.responseState,
        u = s.id,
        a = s.errorDigest,
        c = s.errorMessage,
        d = s.errorComponentStack;
      if (
        (V(r, l.startInlineScript),
        l.sentClientRenderFunction
          ? V(r, I5)
          : ((l.sentClientRenderFunction = !0), V(r, N5)),
        u === null)
      )
        throw Error(te(395));
      V(r, u),
        V(r, z5),
        (a || c || d) && (V(r, Ba), V(r, ne(Ua(a || "")))),
        (c || d) && (V(r, Ba), V(r, ne(Ua(c || "")))),
        d && (V(r, Ba), V(r, ne(Ua(d)))),
        ye(r, B5);
    }
    i.splice(0, o);
    var p = e.completedBoundaries;
    for (o = 0; o < p.length; o++) pm(e, t, p[o]);
    p.splice(0, o), V0(t), (St = new Uint8Array(512)), (kt = 0);
    var v = e.partialBoundaries;
    for (o = 0; o < v.length; o++) {
      var g = v[o];
      e: {
        (i = e), (s = t);
        var S = g.completedSegments;
        for (l = 0; l < S.length; l++)
          if (!i2(i, s, g, S[l])) {
            l++, S.splice(0, l);
            var _ = !1;
            break e;
          }
        S.splice(0, l), (_ = !0);
      }
      if (!_) {
        (e.destination = null), o++, v.splice(0, o);
        return;
      }
    }
    v.splice(0, o);
    var h = e.completedBoundaries;
    for (o = 0; o < h.length; o++) pm(e, t, h[o]);
    h.splice(0, o);
  } finally {
    V0(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close();
  }
}
function hm(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function (r) {
      return t2(r, e, t);
    }),
      n.clear(),
      e.destination !== null && np(e, e.destination);
  } catch (r) {
    Ho(e, r), iu(e, r);
  }
}
qd.renderToReadableStream = function (e, t) {
  return new Promise(function (n, r) {
    var i,
      o,
      s = new Promise(function (c, d) {
        (o = c), (i = d);
      }),
      l = r8(
        e,
        I6(
          t ? t.identifierPrefix : void 0,
          t ? t.nonce : void 0,
          t ? t.bootstrapScriptContent : void 0,
          t ? t.bootstrapScripts : void 0,
          t ? t.bootstrapModules : void 0
        ),
        z6(t ? t.namespaceURI : void 0),
        t ? t.progressiveChunkSize : void 0,
        t ? t.onError : void 0,
        o,
        function () {
          var c = new ReadableStream(
            {
              type: "bytes",
              pull: function (d) {
                if (l.status === 1) (l.status = 2), Mv(d, l.fatalError);
                else if (l.status !== 2 && l.destination === null) {
                  l.destination = d;
                  try {
                    np(l, d);
                  } catch (p) {
                    Ho(l, p), iu(l, p);
                  }
                }
              },
              cancel: function () {
                hm(l);
              },
            },
            { highWaterMark: 0 }
          );
          (c.allReady = s), n(c);
        },
        function (c) {
          s.catch(function () {}), r(c);
        },
        i
      );
    if (t && t.signal) {
      var u = t.signal,
        a = function () {
          hm(l, u.reason), u.removeEventListener("abort", a);
        };
      u.addEventListener("abort", a);
    }
    r2(l);
  });
};
qd.version = "18.2.0";
var Li, o2;
(Li = Ai), (o2 = qd);
or.version = Li.version;
or.renderToString = Li.renderToString;
or.renderToStaticMarkup = Li.renderToStaticMarkup;
or.renderToNodeStream = Li.renderToNodeStream;
or.renderToStaticNodeStream = Li.renderToStaticNodeStream;
or.renderToReadableStream = o2.renderToReadableStream;
const o8 = K.div`
	width: fit-content;
	height: initial;
	position: fixed;
	bottom: 20px;
	right: 0;

	img {
		width: 100%;
		height: 100%;
	}

	.bubble {
		position: absolute;
		top: -60px;
		right: 1px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 120px;
		height: 43px;
		background: #fff;
		box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
		border-radius: 50px;
		color: #333;
		letter-spacing: -0.025em;
		transition: 0.3s ease-in-out;

		&:after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 0;
			height: 0;
			border: 7px solid transparent;
			border-top-color: #fff;
			border-bottom: 0;
			margin-left: 23px;
			margin-bottom: -7px;
		}
	}

	.ico-bot {
		width: 60px;
		height: 60px;
		background: var(--primary-color);
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.13);
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			cursor: pointer;
		}
	}

	.image-bot {
		width: 60px;
		height: 60px;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.13);
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			object-fit: cover;
		}
	}
`,
  mm = ({ onClick: e, logoImage: t }) =>
    y.jsx(o8, {
      children: t
        ? y.jsx("button", {
            className: "image-bot",
            children: y.jsx("img", { src: t }),
          })
        : y.jsx("button", {
            className: "ico-bot",
            onClick: e,
            children: y.jsx(Pu, {}),
          }),
    }),
  s8 = (e) => {
    async function t() {
      if (e) {
        let n, r;
        try {
          (r = await Qg()),
            (n = or.renderToStaticMarkup(y.jsx(mm, { logoImage: r })));
        } catch {
          (r = void 0),
            (n = or.renderToStaticMarkup(y.jsx(mm, { logoImage: void 0 })));
        }
        let i;
        e.shadowRoot
          ? (i = e.shadowRoot)
          : (i = e.attachShadow({ mode: "open" })),
          (i.innerHTML = n);
        const o = document.createElement("style");
        (o.textContent = `
			div {
				width: fit-content;
				height: initial;
				position: fixed;
				bottom: 20px;
				right: 24px;
			}
	
			img {
				width: 100%;
				height: 100%;
			}
		
			.bubble {
				position: absolute;
				top: -60px;
				right: 1px;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 120px;
				height: 43px;
				background: #fff;
				box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
				border-radius: 50px;
				color: #333;
				letter-spacing: -0.025em;
				transition: 0.3s ease-in-out;
			}
			.bubble:after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 50%;
				width: 0;
				height: 0;
				border: 7px solid transparent;
				border-top-color: #fff;
				border-bottom: 0;
				margin-left: 23px;
				margin-bottom: -7px;
			}
			.ico-bot {
				width: 60px;
				height: 60px;
				background: #00a4ff;
				-webkit-border-radius: 50%;
				-moz-border-radius: 50%;
				border-radius: 50%;
				box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.13);
				display: flex;
				align-items: center;
				justify-content: center;
				border: none;
			}
			.ico-bot:hover {
				cursor: pointer;
			}
			.image-bot {
				width: 60px;
				height: 60px;
				-webkit-border-radius: 50%;
				-moz-border-radius: 50%;
				border-radius: 50%;
				overflow: hidden;
				box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.13);
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				border: none;
				padding: unset;
				img {
					object-fit: cover;
				}
			}
			`),
          i.appendChild(o);
        const s = i.querySelector(r ? ".image-bot" : ".ico-bot");
        s == null ||
          s.addEventListener("click", () => {
            const l = window.parent.document.querySelector(
              "#chatbot-plugin-script"
            );
            if (l != null && l.classList.value.includes("hidden"))
              return l.classList.remove("hidden");
            l == null || l.classList.add("hidden");
          });
      }
    }
    t();
  };
function l8() {
  const e = Il(Ed),
    t = Il(Cd),
    n = Ht(ng),
    r = Ht(tg),
    i = Ht(ig),
    o = Ht(rg),
    s = Ht(og),
    l = Ht(sg),
    u = Ht(lg),
    [a, c] = X.useState(""),
    d = e === "home",
    p = e === "chat",
    { mutate: v } = eC(),
    g = () => {
      a.trim().length !== 0 &&
        (n((f) => [
          ...f,
          { dialogue_files: [], message: a, order: 99, type: "Question" },
        ]),
        u([]),
        c(""),
        v(a, {
          onSuccess: (f) => {
            f.length === 0
              ? n((m) => [
                  ...m,
                  {
                    message: "",
                    dialogue_files: [],
                    order: 99,
                    type: "SearchEmpty",
                  },
                ])
              : (console.log(f), u(f.sort((m, k) => m.order - k.order))),
              r([]),
              l(!0),
              s(!1),
              i(!1);
          },
        }));
    },
    S = (f) => {
      c(f);
    },
    _ = [
      y.jsx(F4, {
        name: "send",
        placeholder: "메세지를 입력해 주세요.",
        onChange: S,
        onClick: g,
        value: a,
      }),
    ],
    h = window.parent.document.querySelector(".chatbot-entry");
  return (
    s8(h),
    X.useEffect(() => {
      p || (n([]), r([]), i(!0), o(!1), s(!1), l(!1), u([]));
    }, [p]),
    y.jsx(y.Fragment, {
      children: y.jsxs(w4, {
        input: p && _,
        children: [
          d && y.jsx(z4, {}),
          y.jsxs(WS, {
            style: p ? { padding: "24px" } : { padding: "16px 24px 24px" },
            children: [d && y.jsx(_4, {}), p && y.jsx(GE, {})],
          }),
          t && y.jsx(G4, {}),
        ],
      }),
    })
  );
}
const u8 = function () {
  return null;
};
function a8() {
  const e = [
      "Chrome",
      "Opera",
      "WebTV",
      "Whale",
      "Beonex",
      "Chimera",
      "NetPositive",
      "Phoenix",
      "Firefox",
      "Safari",
      "SkipStone",
      "Netscape",
      "Mozilla",
    ],
    t = window.navigator.userAgent.toLowerCase();
  return t.includes("edg")
    ? "Edge"
    : t.includes("trident") || t.includes("msie")
    ? "Internet Explorer"
    : e.find((n) => t.includes(n.toLowerCase())) || "Other";
}
window.hasAuth ||
  (async () => {
    var i;
    const { data: e } = await ot.post("/customer/token", {
        url: window.parent.location.origin,
      }),
      t = await Wg.get("https://geolocation-db.com/json/");
    localStorage.setItem("NTBOT.access_token", e.id_token),
      (window.hasAuth = !0);
    const n = localStorage.getItem("NTBOT.visitDate");
    if (S0(new Date(), "yyyyMMdd") !== n) {
      const o = a8(),
        s = window.parent.location.origin,
        l = ((i = t == null ? void 0 : t.data) == null ? void 0 : i.IPv4) || "";
      await m4(l, o, s);
    }
    localStorage.setItem("NTBOT.visitDate", S0(new Date(), "yyyyMMdd"));
  })();
function c8() {
  const e = new S3({
    defaultOptions: {
      queries: { retry: !1, refetchOnWindowFocus: !1 },
      mutations: { retry: !1 },
    },
  });
  return y.jsx(y.Fragment, {
    children: y.jsxs(M3, {
      client: e,
      children: [y.jsx(u8, {}), y.jsx(l8, {})],
    }),
  });
}
function vf() {
  return (
    (vf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vf.apply(this, arguments)
  );
}
function f8(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Wo(e, t) {
  return (
    (Wo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Wo(e, t)
  );
}
function d8(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Wo(e, t);
}
function wf(e) {
  return (
    (wf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    wf(e)
  );
}
function p8(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function h8() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function cl(e, t, n) {
  return (
    h8()
      ? (cl = Reflect.construct.bind())
      : (cl = function (i, o, s) {
          var l = [null];
          l.push.apply(l, o);
          var u = Function.bind.apply(i, l),
            a = new u();
          return s && Wo(a, s.prototype), a;
        }),
    cl.apply(null, arguments)
  );
}
function xf(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (xf = function (r) {
      if (r === null || !p8(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, i);
      }
      function i() {
        return cl(r, arguments, wf(this).constructor);
      }
      return (
        (i.prototype = Object.create(r.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Wo(i, r)
      );
    }),
    xf(e)
  );
}
var an = (function (e) {
  d8(t, e);
  function t(n) {
    var r;
    return (
      (r =
        e.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            n +
            " for more information."
        ) || this),
      f8(r)
    );
  }
  return t;
})(xf(Error));
function Ha(e) {
  return Math.round(e * 255);
}
function m8(e, t, n) {
  return Ha(e) + "," + Ha(t) + "," + Ha(n);
}
function Qo(e, t, n, r) {
  if ((r === void 0 && (r = m8), t === 0)) return r(n, n, n);
  var i = (((e % 360) + 360) % 360) / 60,
    o = (1 - Math.abs(2 * n - 1)) * t,
    s = o * (1 - Math.abs((i % 2) - 1)),
    l = 0,
    u = 0,
    a = 0;
  i >= 0 && i < 1
    ? ((l = o), (u = s))
    : i >= 1 && i < 2
    ? ((l = s), (u = o))
    : i >= 2 && i < 3
    ? ((u = o), (a = s))
    : i >= 3 && i < 4
    ? ((u = s), (a = o))
    : i >= 4 && i < 5
    ? ((l = s), (a = o))
    : i >= 5 && i < 6 && ((l = o), (a = s));
  var c = n - o / 2,
    d = l + c,
    p = u + c,
    v = a + c;
  return r(d, p, v);
}
var ym = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
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
  fuchsia: "ff00ff",
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
  rebeccapurple: "639",
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
  yellowgreen: "9acd32",
};
function y8(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return ym[t] ? "#" + ym[t] : e;
}
var g8 = /^#[a-fA-F0-9]{6}$/,
  v8 = /^#[a-fA-F0-9]{8}$/,
  w8 = /^#[a-fA-F0-9]{3}$/,
  x8 = /^#[a-fA-F0-9]{4}$/,
  Wa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  S8 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  k8 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  C8 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function s2(e) {
  if (typeof e != "string") throw new an(3);
  var t = y8(e);
  if (t.match(g8))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(v8)) {
    var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: n,
    };
  }
  if (t.match(w8))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(x8)) {
    var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: r,
    };
  }
  var i = Wa.exec(t);
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
    };
  var o = S8.exec(t.substring(0, 50));
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10),
      alpha:
        parseFloat("" + o[4]) > 1
          ? parseFloat("" + o[4]) / 100
          : parseFloat("" + o[4]),
    };
  var s = k8.exec(t);
  if (s) {
    var l = parseInt("" + s[1], 10),
      u = parseInt("" + s[2], 10) / 100,
      a = parseInt("" + s[3], 10) / 100,
      c = "rgb(" + Qo(l, u, a) + ")",
      d = Wa.exec(c);
    if (!d) throw new an(4, t, c);
    return {
      red: parseInt("" + d[1], 10),
      green: parseInt("" + d[2], 10),
      blue: parseInt("" + d[3], 10),
    };
  }
  var p = C8.exec(t.substring(0, 50));
  if (p) {
    var v = parseInt("" + p[1], 10),
      g = parseInt("" + p[2], 10) / 100,
      S = parseInt("" + p[3], 10) / 100,
      _ = "rgb(" + Qo(v, g, S) + ")",
      h = Wa.exec(_);
    if (!h) throw new an(4, t, _);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10),
      alpha:
        parseFloat("" + p[4]) > 1
          ? parseFloat("" + p[4]) / 100
          : parseFloat("" + p[4]),
    };
  }
  throw new an(5);
}
function E8(e) {
  var t = e.red / 255,
    n = e.green / 255,
    r = e.blue / 255,
    i = Math.max(t, n, r),
    o = Math.min(t, n, r),
    s = (i + o) / 2;
  if (i === o)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: s, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: s };
  var l,
    u = i - o,
    a = s > 0.5 ? u / (2 - i - o) : u / (i + o);
  switch (i) {
    case t:
      l = (n - r) / u + (n < r ? 6 : 0);
      break;
    case n:
      l = (r - t) / u + 2;
      break;
    default:
      l = (t - n) / u + 4;
      break;
  }
  return (
    (l *= 60),
    e.alpha !== void 0
      ? { hue: l, saturation: a, lightness: s, alpha: e.alpha }
      : { hue: l, saturation: a, lightness: s }
  );
}
function R8(e) {
  return E8(s2(e));
}
var _8 = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
      ? "#" + t[1] + t[3] + t[5]
      : t;
  },
  Sf = _8;
function hr(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Qa(e) {
  return hr(Math.round(e * 255));
}
function b8(e, t, n) {
  return Sf("#" + Qa(e) + Qa(t) + Qa(n));
}
function su(e, t, n) {
  return Qo(e, t, n, b8);
}
function P8(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return su(e, t, n);
  if (typeof e == "object" && t === void 0 && n === void 0)
    return su(e.hue, e.saturation, e.lightness);
  throw new an(1);
}
function O8(e, t, n, r) {
  if (
    typeof e == "number" &&
    typeof t == "number" &&
    typeof n == "number" &&
    typeof r == "number"
  )
    return r >= 1 ? su(e, t, n) : "rgba(" + Qo(e, t, n) + "," + r + ")";
  if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
    return e.alpha >= 1
      ? su(e.hue, e.saturation, e.lightness)
      : "rgba(" + Qo(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new an(2);
}
function kf(e, t, n) {
  if (typeof e == "number" && typeof t == "number" && typeof n == "number")
    return Sf("#" + hr(e) + hr(t) + hr(n));
  if (typeof e == "object" && t === void 0 && n === void 0)
    return Sf("#" + hr(e.red) + hr(e.green) + hr(e.blue));
  throw new an(6);
}
function T8(e, t, n, r) {
  if (typeof e == "string" && typeof t == "number") {
    var i = s2(e);
    return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")";
  } else {
    if (
      typeof e == "number" &&
      typeof t == "number" &&
      typeof n == "number" &&
      typeof r == "number"
    )
      return r >= 1
        ? kf(e, t, n)
        : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
      return e.alpha >= 1
        ? kf(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new an(7);
}
var $8 = function (t) {
    return (
      typeof t.red == "number" &&
      typeof t.green == "number" &&
      typeof t.blue == "number" &&
      (typeof t.alpha != "number" || typeof t.alpha > "u")
    );
  },
  F8 = function (t) {
    return (
      typeof t.red == "number" &&
      typeof t.green == "number" &&
      typeof t.blue == "number" &&
      typeof t.alpha == "number"
    );
  },
  A8 = function (t) {
    return (
      typeof t.hue == "number" &&
      typeof t.saturation == "number" &&
      typeof t.lightness == "number" &&
      (typeof t.alpha != "number" || typeof t.alpha > "u")
    );
  },
  L8 = function (t) {
    return (
      typeof t.hue == "number" &&
      typeof t.saturation == "number" &&
      typeof t.lightness == "number" &&
      typeof t.alpha == "number"
    );
  };
function D8(e) {
  if (typeof e != "object") throw new an(8);
  if (F8(e)) return T8(e);
  if ($8(e)) return kf(e);
  if (L8(e)) return O8(e);
  if (A8(e)) return P8(e);
  throw new an(8);
}
function l2(e, t, n) {
  return function () {
    var i = n.concat(Array.prototype.slice.call(arguments));
    return i.length >= t ? e.apply(this, i) : l2(e, t, i);
  };
}
function M8(e) {
  return l2(e, e.length, []);
}
function j8(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function N8(e, t) {
  if (t === "transparent") return t;
  var n = R8(t);
  return D8(vf({}, n, { lightness: j8(0, 1, n.lightness - parseFloat(e)) }));
}
var I8 = M8(N8),
  z8 = I8;
function $s(e, t) {
  return z8(e, t);
}
const B8 = NS`
  :root {
    --primary-color: #00a4ff;
    --secondary-color: #999;
    --error-color: #f44;
    --point-color: #747A88;
    --bd-color: #d7d7d7;
    --darken-primary-color: ${$s(0.06, "#00a4ff")};
    --darken-secondary-color: ${$s(0.06, "#999")};
    --darken-error-color: ${$s(0.06, "#f44")};
    --darken-point-color: ${$s(0.1, "#747A88")};
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    outline: none !important;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    min-width: 100%;
    min-height: 100%;
    line-height: 1;
    
    * {
      color: #333;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    color: initial;
    cursor: pointer;
    background-color: initial;
    font: inherit;
    padding: initial;
    border: initial;
    margin: initial;
    outline: none;
  }

  input, textarea, select {
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
  }

  input {
    box-sizing: border-box;
  }

  a {
    color: #000;
    text-decoration: none;
    outline: none;

    &:hover,
    &:active {
      text-decoration: none;
      color: #000;
    }
  }
`;
qa.createRoot(document.getElementById("root")).render(
  y.jsxs(Ae.StrictMode, { children: [y.jsx(B8, {}), y.jsx(c8, {})] })
);
