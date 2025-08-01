var ku = (e) => {
  throw TypeError(e);
};
var ws = (e, t, n) => t.has(e) || ku("Cannot " + n);
var T = (e, t, n) => (
    ws(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  K = (e, t, n) =>
    t.has(e)
      ? ku("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  F = (e, t, n, r) => (
    ws(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  ve = (e, t, n) => (ws(e, t, "access private method"), n);
var Lo = (e, t, n, r) => ({
  set _(o) {
    F(e, t, o, n);
  },
  get _() {
    return T(e, t, r);
  },
});
function wm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function wd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sd = { exports: {} },
  Qi = {},
  Ed = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var To = Symbol.for("react.element"),
  Sm = Symbol.for("react.portal"),
  Em = Symbol.for("react.fragment"),
  Cm = Symbol.for("react.strict_mode"),
  km = Symbol.for("react.profiler"),
  Pm = Symbol.for("react.provider"),
  Tm = Symbol.for("react.context"),
  Nm = Symbol.for("react.forward_ref"),
  Rm = Symbol.for("react.suspense"),
  Om = Symbol.for("react.memo"),
  _m = Symbol.for("react.lazy"),
  Pu = Symbol.iterator;
function jm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pu && e[Pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Cd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kd = Object.assign,
  Pd = {};
function kr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pd),
    (this.updater = n || Cd);
}
kr.prototype.isReactComponent = {};
kr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Td() {}
Td.prototype = kr.prototype;
function oa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pd),
    (this.updater = n || Cd);
}
var ia = (oa.prototype = new Td());
ia.constructor = oa;
kd(ia, kr.prototype);
ia.isPureReactComponent = !0;
var Tu = Array.isArray,
  Nd = Object.prototype.hasOwnProperty,
  sa = { current: null },
  Rd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Od(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Nd.call(t, r) && !Rd.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: To,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: sa.current,
  };
}
function bm(e, t) {
  return {
    $$typeof: To,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function la(e) {
  return typeof e == "object" && e !== null && e.$$typeof === To;
}
function Am(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Nu = /\/+/g;
function Ss(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Am("" + e.key)
    : t.toString(36);
}
function ni(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case To:
          case Sm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Ss(s, 0) : r),
      Tu(o)
        ? ((n = ""),
          e != null && (n = e.replace(Nu, "$&/") + "/"),
          ni(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (la(o) &&
            (o = bm(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Nu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Tu(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Ss(i, l);
      s += ni(i, t, n, a, o);
    }
  else if (((a = jm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Ss(i, l++)), (s += ni(i, t, n, a, o));
  else if (i === "object")
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
function Mo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ni(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Lm(e) {
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
var Te = { current: null },
  ri = { transition: null },
  Mm = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: ri,
    ReactCurrentOwner: sa,
  };
function _d() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: Mo,
  forEach: function (e, t, n) {
    Mo(
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
      Mo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!la(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = kr;
V.Fragment = Em;
V.Profiler = km;
V.PureComponent = oa;
V.StrictMode = Cm;
V.Suspense = Rm;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
V.act = _d;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kd({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = sa.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Nd.call(t, a) &&
        !Rd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: To, type: e.type, key: o, ref: i, props: r, _owner: s };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Tm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pm, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Od;
V.createFactory = function (e) {
  var t = Od.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Nm, render: e };
};
V.isValidElement = la;
V.lazy = function (e) {
  return { $$typeof: _m, _payload: { _status: -1, _result: e }, _init: Lm };
};
V.memo = function (e, t) {
  return { $$typeof: Om, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = ri.transition;
  ri.transition = {};
  try {
    e();
  } finally {
    ri.transition = t;
  }
};
V.unstable_act = _d;
V.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Te.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
V.useId = function () {
  return Te.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Te.current.useRef(e);
};
V.useState = function (e) {
  return Te.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Te.current.useTransition();
};
V.version = "18.3.1";
Ed.exports = V;
var x = Ed.exports;
const Ut = wd(x),
  Dm = wm({ __proto__: null, default: Ut }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im = x,
  Fm = Symbol.for("react.element"),
  zm = Symbol.for("react.fragment"),
  $m = Object.prototype.hasOwnProperty,
  Um = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function jd(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) $m.call(t, r) && !Vm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Fm,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Um.current,
  };
}
Qi.Fragment = zm;
Qi.jsx = jd;
Qi.jsxs = jd;
Sd.exports = Qi;
var v = Sd.exports,
  bd = { exports: {} },
  Ue = {},
  Ad = { exports: {} },
  Ld = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, _) {
    var D = N.length;
    N.push(_);
    e: for (; 0 < D; ) {
      var $ = (D - 1) >>> 1,
        J = N[$];
      if (0 < o(J, _)) (N[$] = _), (N[D] = J), (D = $);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var _ = N[0],
      D = N.pop();
    if (D !== _) {
      N[0] = D;
      e: for (var $ = 0, J = N.length, Ze = J >>> 1; $ < Ze; ) {
        var Be = 2 * ($ + 1) - 1,
          _r = N[Be],
          Ct = Be + 1,
          yn = N[Ct];
        if (0 > o(_r, D))
          Ct < J && 0 > o(yn, _r)
            ? ((N[$] = yn), (N[Ct] = D), ($ = Ct))
            : ((N[$] = _r), (N[Be] = D), ($ = Be));
        else if (Ct < J && 0 > o(yn, D)) (N[$] = yn), (N[Ct] = D), ($ = Ct);
        else break e;
      }
    }
    return _;
  }
  function o(N, _) {
    var D = N.sortIndex - _.sortIndex;
    return D !== 0 ? D : N.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    p = null,
    h = 3,
    g = !1,
    S = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= N)
        r(u), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(u);
    }
  }
  function E(N) {
    if (((y = !1), m(N), !S))
      if (n(a) !== null) (S = !0), U(C);
      else {
        var _ = n(u);
        _ !== null && W(E, _.startTime - N);
      }
  }
  function C(N, _) {
    (S = !1), y && ((y = !1), f(R), (R = -1)), (g = !0);
    var D = h;
    try {
      for (
        m(_), p = n(a);
        p !== null && (!(p.expirationTime > _) || (N && !z()));

      ) {
        var $ = p.callback;
        if (typeof $ == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var J = $(p.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(a) && r(a),
            m(_);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Ze = !0;
      else {
        var Be = n(u);
        Be !== null && W(E, Be.startTime - _), (Ze = !1);
      }
      return Ze;
    } finally {
      (p = null), (h = D), (g = !1);
    }
  }
  var k = !1,
    P = null,
    R = -1,
    L = 5,
    b = -1;
  function z() {
    return !(e.unstable_now() - b < L);
  }
  function M() {
    if (P !== null) {
      var N = e.unstable_now();
      b = N;
      var _ = !0;
      try {
        _ = P(!0, N);
      } finally {
        _ ? H() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var H;
  if (typeof d == "function")
    H = function () {
      d(M);
    };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(),
      Q = A.port2;
    (A.port1.onmessage = M),
      (H = function () {
        Q.postMessage(null);
      });
  } else
    H = function () {
      w(M, 0);
    };
  function U(N) {
    (P = N), k || ((k = !0), H());
  }
  function W(N, _) {
    R = w(function () {
      N(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || g || ((S = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = h;
      }
      var D = h;
      h = _;
      try {
        return N();
      } finally {
        h = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, _) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = h;
      h = N;
      try {
        return _();
      } finally {
        h = D;
      }
    }),
    (e.unstable_scheduleCallback = function (N, _, D) {
      var $ = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? $ + D : $))
          : (D = $),
        N)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = D + J),
        (N = {
          id: c++,
          callback: _,
          priorityLevel: N,
          startTime: D,
          expirationTime: J,
          sortIndex: -1,
        }),
        D > $
          ? ((N.sortIndex = D),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (y ? (f(R), (R = -1)) : (y = !0), W(E, D - $)))
          : ((N.sortIndex = J), t(a, N), S || g || ((S = !0), U(C))),
        N
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (N) {
      var _ = h;
      return function () {
        var D = h;
        h = _;
        try {
          return N.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})(Ld);
Ad.exports = Ld;
var Hm = Ad.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm = x,
  $e = Hm;
function O(e) {
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
var Md = new Set(),
  no = {};
function Dn(e, t) {
  hr(e, t), hr(e + "Capture", t);
}
function hr(e, t) {
  for (no[e] = t, e = 0; e < t.length; e++) Md.add(t[e]);
}
var jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  tl = Object.prototype.hasOwnProperty,
  Wm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ru = {},
  Ou = {};
function Qm(e) {
  return tl.call(Ou, e)
    ? !0
    : tl.call(Ru, e)
    ? !1
    : Wm.test(e)
    ? (Ou[e] = !0)
    : ((Ru[e] = !0), !1);
}
function Km(e, t, n, r) {
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
function Gm(e, t, n, r) {
  if (t === null || typeof t > "u" || Km(e, t, n, r)) return !0;
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
function Ne(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var aa = /[\-:]([a-z])/g;
function ua(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(aa, ua);
    me[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(aa, ua);
    me[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(aa, ua);
  me[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ca(e, t, n, r) {
  var o = me.hasOwnProperty(t) ? me[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Gm(t, n, o, r) && (n = null),
    r || o === null
      ? Qm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var It = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Do = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  da = Symbol.for("react.strict_mode"),
  nl = Symbol.for("react.profiler"),
  Dd = Symbol.for("react.provider"),
  Id = Symbol.for("react.context"),
  fa = Symbol.for("react.forward_ref"),
  rl = Symbol.for("react.suspense"),
  ol = Symbol.for("react.suspense_list"),
  pa = Symbol.for("react.memo"),
  Ht = Symbol.for("react.lazy"),
  Fd = Symbol.for("react.offscreen"),
  _u = Symbol.iterator;
function br(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_u && e[_u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Es;
function Vr(e) {
  if (Es === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Es = (t && t[1]) || "";
    }
  return (
    `
` +
    Es +
    e
  );
}
var Cs = !1;
function ks(e, t) {
  if (!e || Cs) return "";
  Cs = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Cs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function Ym(e) {
  switch (e.tag) {
    case 5:
      return Vr(e.type);
    case 16:
      return Vr("Lazy");
    case 13:
      return Vr("Suspense");
    case 19:
      return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ks(e.type, !1)), e;
    case 11:
      return (e = ks(e.type.render, !1)), e;
    case 1:
      return (e = ks(e.type, !0)), e;
    default:
      return "";
  }
}
function il(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case zn:
      return "Portal";
    case nl:
      return "Profiler";
    case da:
      return "StrictMode";
    case rl:
      return "Suspense";
    case ol:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Id:
        return (e.displayName || "Context") + ".Consumer";
      case Dd:
        return (e._context.displayName || "Context") + ".Provider";
      case fa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pa:
        return (
          (t = e.displayName || null), t !== null ? t : il(e.type) || "Memo"
        );
      case Ht:
        (t = e._payload), (e = e._init);
        try {
          return il(e(t));
        } catch {}
    }
  return null;
}
function Xm(e) {
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
      return il(t);
    case 8:
      return t === da ? "StrictMode" : "Mode";
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
function un(e) {
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
function zd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function qm(e) {
  var t = zd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
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
function Io(e) {
  e._valueTracker || (e._valueTracker = qm(e));
}
function $d(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = zd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function yi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sl(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ju(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ud(e, t) {
  (t = t.checked), t != null && ca(e, "checked", t, !1);
}
function ll(e, t) {
  Ud(e, t);
  var n = un(t.value),
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
    ? al(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && al(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function bu(e, t, n) {
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
function al(e, t, n) {
  (t !== "number" || yi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hr = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ul(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Hr(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function Vd(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Fo,
  Bd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Fo = Fo || document.createElement("div"),
          Fo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ro(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qr = {
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
  Zm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qr).forEach(function (e) {
  Zm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qr[t] = Qr[e]);
  });
});
function Wd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Qr.hasOwnProperty(e) && Qr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Qd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Wd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Jm = re(
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
function dl(e, t) {
  if (t) {
    if (Jm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function fl(e, t) {
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
var pl = null;
function ha(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hl = null,
  Zn = null,
  Jn = null;
function Mu(e) {
  if ((e = Oo(e))) {
    if (typeof hl != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = qi(t)), hl(e.stateNode, e.type, t));
  }
}
function Kd(e) {
  Zn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Zn = e);
}
function Gd() {
  if (Zn) {
    var e = Zn,
      t = Jn;
    if (((Jn = Zn = null), Mu(e), t)) for (e = 0; e < t.length; e++) Mu(t[e]);
  }
}
function Yd(e, t) {
  return e(t);
}
function Xd() {}
var Ps = !1;
function qd(e, t, n) {
  if (Ps) return e(t, n);
  Ps = !0;
  try {
    return Yd(e, t, n);
  } finally {
    (Ps = !1), (Zn !== null || Jn !== null) && (Xd(), Gd());
  }
}
function oo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qi(n);
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
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var ml = !1;
if (jt)
  try {
    var Ar = {};
    Object.defineProperty(Ar, "passive", {
      get: function () {
        ml = !0;
      },
    }),
      window.addEventListener("test", Ar, Ar),
      window.removeEventListener("test", Ar, Ar);
  } catch {
    ml = !1;
  }
function ev(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Kr = !1,
  gi = null,
  xi = !1,
  vl = null,
  tv = {
    onError: function (e) {
      (Kr = !0), (gi = e);
    },
  };
function nv(e, t, n, r, o, i, s, l, a) {
  (Kr = !1), (gi = null), ev.apply(tv, arguments);
}
function rv(e, t, n, r, o, i, s, l, a) {
  if ((nv.apply(this, arguments), Kr)) {
    if (Kr) {
      var u = gi;
      (Kr = !1), (gi = null);
    } else throw Error(O(198));
    xi || ((xi = !0), (vl = u));
  }
}
function In(e) {
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
function Zd(e) {
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
function Du(e) {
  if (In(e) !== e) throw Error(O(188));
}
function ov(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = In(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Du(o), e;
        if (i === r) return Du(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
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
      if (!s) {
        for (l = i.child; l; ) {
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
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Jd(e) {
  return (e = ov(e)), e !== null ? ef(e) : null;
}
function ef(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ef(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var tf = $e.unstable_scheduleCallback,
  Iu = $e.unstable_cancelCallback,
  iv = $e.unstable_shouldYield,
  sv = $e.unstable_requestPaint,
  se = $e.unstable_now,
  lv = $e.unstable_getCurrentPriorityLevel,
  ma = $e.unstable_ImmediatePriority,
  nf = $e.unstable_UserBlockingPriority,
  wi = $e.unstable_NormalPriority,
  av = $e.unstable_LowPriority,
  rf = $e.unstable_IdlePriority,
  Ki = null,
  yt = null;
function uv(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(Ki, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : fv,
  cv = Math.log,
  dv = Math.LN2;
function fv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cv(e) / dv) | 0)) | 0;
}
var zo = 64,
  $o = 4194304;
function Br(e) {
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
function Si(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Br(l)) : ((i &= s), i !== 0 && (r = Br(i)));
  } else (s = n & ~o), s !== 0 ? (r = Br(s)) : i !== 0 && (r = Br(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function pv(e, t) {
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
function hv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - it(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = pv(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function yl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function of() {
  var e = zo;
  return (zo <<= 1), !(zo & 4194240) && (zo = 64), e;
}
function Ts(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function No(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function mv(e, t) {
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
    var o = 31 - it(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function va(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function sf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var lf,
  ya,
  af,
  uf,
  cf,
  gl = !1,
  Uo = [],
  en = null,
  tn = null,
  nn = null,
  io = new Map(),
  so = new Map(),
  Wt = [],
  vv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      so.delete(t.pointerId);
  }
}
function Lr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Oo(t)), t !== null && ya(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function yv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (en = Lr(en, e, t, n, r, o)), !0;
    case "dragenter":
      return (tn = Lr(tn, e, t, n, r, o)), !0;
    case "mouseover":
      return (nn = Lr(nn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return io.set(i, Lr(io.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), so.set(i, Lr(so.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function df(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zd(n)), t !== null)) {
          (e.blockedOn = t),
            cf(e.priority, function () {
              af(n);
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
function oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (pl = r), n.target.dispatchEvent(r), (pl = null);
    } else return (t = Oo(n)), t !== null && ya(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zu(e, t, n) {
  oi(e) && n.delete(t);
}
function gv() {
  (gl = !1),
    en !== null && oi(en) && (en = null),
    tn !== null && oi(tn) && (tn = null),
    nn !== null && oi(nn) && (nn = null),
    io.forEach(zu),
    so.forEach(zu);
}
function Mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gl ||
      ((gl = !0),
      $e.unstable_scheduleCallback($e.unstable_NormalPriority, gv)));
}
function lo(e) {
  function t(o) {
    return Mr(o, e);
  }
  if (0 < Uo.length) {
    Mr(Uo[0], e);
    for (var n = 1; n < Uo.length; n++) {
      var r = Uo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && Mr(en, e),
      tn !== null && Mr(tn, e),
      nn !== null && Mr(nn, e),
      io.forEach(t),
      so.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    df(n), n.blockedOn === null && Wt.shift();
}
var er = It.ReactCurrentBatchConfig,
  Ei = !0;
function xv(e, t, n, r) {
  var o = G,
    i = er.transition;
  er.transition = null;
  try {
    (G = 1), ga(e, t, n, r);
  } finally {
    (G = o), (er.transition = i);
  }
}
function wv(e, t, n, r) {
  var o = G,
    i = er.transition;
  er.transition = null;
  try {
    (G = 4), ga(e, t, n, r);
  } finally {
    (G = o), (er.transition = i);
  }
}
function ga(e, t, n, r) {
  if (Ei) {
    var o = xl(e, t, n, r);
    if (o === null) Ds(e, t, r, Ci, n), Fu(e, r);
    else if (yv(o, e, t, n, r)) r.stopPropagation();
    else if ((Fu(e, r), t & 4 && -1 < vv.indexOf(e))) {
      for (; o !== null; ) {
        var i = Oo(o);
        if (
          (i !== null && lf(i),
          (i = xl(e, t, n, r)),
          i === null && Ds(e, t, r, Ci, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ds(e, t, r, null, n);
  }
}
var Ci = null;
function xl(e, t, n, r) {
  if (((Ci = null), (e = ha(r)), (e = wn(e)), e !== null))
    if (((t = In(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function ff(e) {
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
      switch (lv()) {
        case ma:
          return 1;
        case nf:
          return 4;
        case wi:
        case av:
          return 16;
        case rf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null,
  xa = null,
  ii = null;
function pf() {
  if (ii) return ii;
  var e,
    t = xa,
    n = t.length,
    r,
    o = "value" in Zt ? Zt.value : Zt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ii = o.slice(e, 1 < r ? 1 - r : void 0));
}
function si(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vo() {
  return !0;
}
function $u() {
  return !1;
}
function Ve(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Vo
        : $u),
      (this.isPropagationStopped = $u),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Vo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vo));
      },
      persist: function () {},
      isPersistent: Vo,
    }),
    t
  );
}
var Pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wa = Ve(Pr),
  Ro = re({}, Pr, { view: 0, detail: 0 }),
  Sv = Ve(Ro),
  Ns,
  Rs,
  Dr,
  Gi = re({}, Ro, {
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
    getModifierState: Sa,
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
        : (e !== Dr &&
            (Dr && e.type === "mousemove"
              ? ((Ns = e.screenX - Dr.screenX), (Rs = e.screenY - Dr.screenY))
              : (Rs = Ns = 0),
            (Dr = e)),
          Ns);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Rs;
    },
  }),
  Uu = Ve(Gi),
  Ev = re({}, Gi, { dataTransfer: 0 }),
  Cv = Ve(Ev),
  kv = re({}, Ro, { relatedTarget: 0 }),
  Os = Ve(kv),
  Pv = re({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tv = Ve(Pv),
  Nv = re({}, Pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Rv = Ve(Nv),
  Ov = re({}, Pr, { data: 0 }),
  Vu = Ve(Ov),
  _v = {
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
  jv = {
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
  bv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Av(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bv[e]) ? !!t[e] : !1;
}
function Sa() {
  return Av;
}
var Lv = re({}, Ro, {
    key: function (e) {
      if (e.key) {
        var t = _v[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = si(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? jv[e.keyCode] || "Unidentified"
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
    getModifierState: Sa,
    charCode: function (e) {
      return e.type === "keypress" ? si(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? si(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Mv = Ve(Lv),
  Dv = re({}, Gi, {
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
  Hu = Ve(Dv),
  Iv = re({}, Ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sa,
  }),
  Fv = Ve(Iv),
  zv = re({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $v = Ve(zv),
  Uv = re({}, Gi, {
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
  Vv = Ve(Uv),
  Hv = [9, 13, 27, 32],
  Ea = jt && "CompositionEvent" in window,
  Gr = null;
jt && "documentMode" in document && (Gr = document.documentMode);
var Bv = jt && "TextEvent" in window && !Gr,
  hf = jt && (!Ea || (Gr && 8 < Gr && 11 >= Gr)),
  Bu = " ",
  Wu = !1;
function mf(e, t) {
  switch (e) {
    case "keyup":
      return Hv.indexOf(t.keyCode) !== -1;
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
function vf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Wv(e, t) {
  switch (e) {
    case "compositionend":
      return vf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wu = !0), Bu);
    case "textInput":
      return (e = t.data), e === Bu && Wu ? null : e;
    default:
      return null;
  }
}
function Qv(e, t) {
  if (Un)
    return e === "compositionend" || (!Ea && mf(e, t))
      ? ((e = pf()), (ii = xa = Zt = null), (Un = !1), e)
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
      return hf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kv = {
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
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kv[e.type] : t === "textarea";
}
function yf(e, t, n, r) {
  Kd(r),
    (t = ki(t, "onChange")),
    0 < t.length &&
      ((n = new wa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yr = null,
  ao = null;
function Gv(e) {
  Rf(e, 0);
}
function Yi(e) {
  var t = Bn(e);
  if ($d(t)) return e;
}
function Yv(e, t) {
  if (e === "change") return t;
}
var gf = !1;
if (jt) {
  var _s;
  if (jt) {
    var js = "oninput" in document;
    if (!js) {
      var Ku = document.createElement("div");
      Ku.setAttribute("oninput", "return;"),
        (js = typeof Ku.oninput == "function");
    }
    _s = js;
  } else _s = !1;
  gf = _s && (!document.documentMode || 9 < document.documentMode);
}
function Gu() {
  Yr && (Yr.detachEvent("onpropertychange", xf), (ao = Yr = null));
}
function xf(e) {
  if (e.propertyName === "value" && Yi(ao)) {
    var t = [];
    yf(t, ao, e, ha(e)), qd(Gv, t);
  }
}
function Xv(e, t, n) {
  e === "focusin"
    ? (Gu(), (Yr = t), (ao = n), Yr.attachEvent("onpropertychange", xf))
    : e === "focusout" && Gu();
}
function qv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yi(ao);
}
function Zv(e, t) {
  if (e === "click") return Yi(t);
}
function Jv(e, t) {
  if (e === "input" || e === "change") return Yi(t);
}
function ey(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == "function" ? Object.is : ey;
function uo(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!tl.call(t, o) || !lt(e[o], t[o])) return !1;
  }
  return !0;
}
function Yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xu(e, t) {
  var n = Yu(e);
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
    n = Yu(n);
  }
}
function wf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Sf() {
  for (var e = window, t = yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yi(e.document);
  }
  return t;
}
function Ca(e) {
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
function ty(e) {
  var t = Sf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ca(n)) {
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
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Xu(n, i));
        var s = Xu(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
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
var ny = jt && "documentMode" in document && 11 >= document.documentMode,
  Vn = null,
  wl = null,
  Xr = null,
  Sl = !1;
function qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sl ||
    Vn == null ||
    Vn !== yi(r) ||
    ((r = Vn),
    "selectionStart" in r && Ca(r)
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
    (Xr && uo(Xr, r)) ||
      ((Xr = r),
      (r = ki(wl, "onSelect")),
      0 < r.length &&
        ((t = new wa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vn))));
}
function Ho(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Hn = {
    animationend: Ho("Animation", "AnimationEnd"),
    animationiteration: Ho("Animation", "AnimationIteration"),
    animationstart: Ho("Animation", "AnimationStart"),
    transitionend: Ho("Transition", "TransitionEnd"),
  },
  bs = {},
  Ef = {};
jt &&
  ((Ef = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hn.animationend.animation,
    delete Hn.animationiteration.animation,
    delete Hn.animationstart.animation),
  "TransitionEvent" in window || delete Hn.transitionend.transition);
function Xi(e) {
  if (bs[e]) return bs[e];
  if (!Hn[e]) return e;
  var t = Hn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ef) return (bs[e] = t[n]);
  return e;
}
var Cf = Xi("animationend"),
  kf = Xi("animationiteration"),
  Pf = Xi("animationstart"),
  Tf = Xi("transitionend"),
  Nf = new Map(),
  Zu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, t) {
  Nf.set(e, t), Dn(t, [e]);
}
for (var As = 0; As < Zu.length; As++) {
  var Ls = Zu[As],
    ry = Ls.toLowerCase(),
    oy = Ls[0].toUpperCase() + Ls.slice(1);
  hn(ry, "on" + oy);
}
hn(Cf, "onAnimationEnd");
hn(kf, "onAnimationIteration");
hn(Pf, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Tf, "onTransitionEnd");
hr("onMouseEnter", ["mouseout", "mouseover"]);
hr("onMouseLeave", ["mouseout", "mouseover"]);
hr("onPointerEnter", ["pointerout", "pointerover"]);
hr("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  iy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
function Ju(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), rv(r, t, void 0, e), (e.currentTarget = null);
}
function Rf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Ju(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Ju(o, l, u), (i = a);
        }
    }
  }
  if (xi) throw ((e = vl), (xi = !1), (vl = null), e);
}
function q(e, t) {
  var n = t[Tl];
  n === void 0 && (n = t[Tl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Of(t, e, 2, !1), n.add(r));
}
function Ms(e, t, n) {
  var r = 0;
  t && (r |= 4), Of(n, e, r, t);
}
var Bo = "_reactListening" + Math.random().toString(36).slice(2);
function co(e) {
  if (!e[Bo]) {
    (e[Bo] = !0),
      Md.forEach(function (n) {
        n !== "selectionchange" && (iy.has(n) || Ms(n, !1, e), Ms(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bo] || ((t[Bo] = !0), Ms("selectionchange", !1, t));
  }
}
function Of(e, t, n, r) {
  switch (ff(t)) {
    case 1:
      var o = xv;
      break;
    case 4:
      o = wv;
      break;
    default:
      o = ga;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ml ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ds(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = wn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  qd(function () {
    var u = i,
      c = ha(n),
      p = [];
    e: {
      var h = Nf.get(e);
      if (h !== void 0) {
        var g = wa,
          S = e;
        switch (e) {
          case "keypress":
            if (si(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Mv;
            break;
          case "focusin":
            (S = "focus"), (g = Os);
            break;
          case "focusout":
            (S = "blur"), (g = Os);
            break;
          case "beforeblur":
          case "afterblur":
            g = Os;
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
            g = Uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Cv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Fv;
            break;
          case Cf:
          case kf:
          case Pf:
            g = Tv;
            break;
          case Tf:
            g = $v;
            break;
          case "scroll":
            g = Sv;
            break;
          case "wheel":
            g = Vv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Rv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Hu;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          f = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var d = u, m; d !== null; ) {
          m = d;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              f !== null && ((E = oo(d, f)), E != null && y.push(fo(d, E, m)))),
            w)
          )
            break;
          d = d.return;
        }
        0 < y.length &&
          ((h = new g(h, S, null, n, c)), p.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== pl &&
            (S = n.relatedTarget || n.fromElement) &&
            (wn(S) || S[bt]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((S = n.relatedTarget || n.toElement),
              (g = u),
              (S = S ? wn(S) : null),
              S !== null &&
                ((w = In(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = u)),
          g !== S)
        ) {
          if (
            ((y = Uu),
            (E = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Hu),
              (E = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (w = g == null ? h : Bn(g)),
            (m = S == null ? h : Bn(S)),
            (h = new y(E, d + "leave", g, n, c)),
            (h.target = w),
            (h.relatedTarget = m),
            (E = null),
            wn(c) === u &&
              ((y = new y(f, d + "enter", S, n, c)),
              (y.target = m),
              (y.relatedTarget = w),
              (E = y)),
            (w = E),
            g && S)
          )
            t: {
              for (y = g, f = S, d = 0, m = y; m; m = Fn(m)) d++;
              for (m = 0, E = f; E; E = Fn(E)) m++;
              for (; 0 < d - m; ) (y = Fn(y)), d--;
              for (; 0 < m - d; ) (f = Fn(f)), m--;
              for (; d--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = Fn(y)), (f = Fn(f));
              }
              y = null;
            }
          else y = null;
          g !== null && ec(p, h, g, y, !1),
            S !== null && w !== null && ec(p, w, S, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? Bn(u) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var C = Yv;
        else if (Qu(h))
          if (gf) C = Jv;
          else {
            C = qv;
            var k = Xv;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = Zv);
        if (C && (C = C(e, u))) {
          yf(p, C, n, c);
          break e;
        }
        k && k(e, h, u),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            al(h, "number", h.value);
      }
      switch (((k = u ? Bn(u) : window), e)) {
        case "focusin":
          (Qu(k) || k.contentEditable === "true") &&
            ((Vn = k), (wl = u), (Xr = null));
          break;
        case "focusout":
          Xr = wl = Vn = null;
          break;
        case "mousedown":
          Sl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Sl = !1), qu(p, n, c);
          break;
        case "selectionchange":
          if (ny) break;
        case "keydown":
        case "keyup":
          qu(p, n, c);
      }
      var P;
      if (Ea)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Un
          ? mf(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (hf &&
          n.locale !== "ko" &&
          (Un || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Un && (P = pf())
            : ((Zt = c),
              (xa = "value" in Zt ? Zt.value : Zt.textContent),
              (Un = !0))),
        (k = ki(u, R)),
        0 < k.length &&
          ((R = new Vu(R, e, null, n, c)),
          p.push({ event: R, listeners: k }),
          P ? (R.data = P) : ((P = vf(n)), P !== null && (R.data = P)))),
        (P = Bv ? Wv(e, n) : Qv(e, n)) &&
          ((u = ki(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Vu("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Rf(p, t);
  });
}
function fo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = oo(e, n)),
      i != null && r.unshift(fo(e, i, o)),
      (i = oo(e, t)),
      i != null && r.push(fo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = oo(n, i)), a != null && s.unshift(fo(n, a, l)))
        : o || ((a = oo(n, i)), a != null && s.push(fo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var sy = /\r\n?/g,
  ly = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sy,
      `
`
    )
    .replace(ly, "");
}
function Wo(e, t, n) {
  if (((t = tc(t)), tc(e) !== t && n)) throw Error(O(425));
}
function Pi() {}
var El = null,
  Cl = null;
function kl(e, t) {
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
var Pl = typeof setTimeout == "function" ? setTimeout : void 0,
  ay = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nc = typeof Promise == "function" ? Promise : void 0,
  uy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nc < "u"
      ? function (e) {
          return nc.resolve(null).then(e).catch(cy);
        }
      : Pl;
function cy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Is(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), lo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  lo(t);
}
function rn(e) {
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
function rc(e) {
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
var Tr = Math.random().toString(36).slice(2),
  vt = "__reactFiber$" + Tr,
  po = "__reactProps$" + Tr,
  bt = "__reactContainer$" + Tr,
  Tl = "__reactEvents$" + Tr,
  dy = "__reactListeners$" + Tr,
  fy = "__reactHandles$" + Tr;
function wn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bt] || n[vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rc(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = rc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Oo(e) {
  return (
    (e = e[vt] || e[bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function qi(e) {
  return e[po] || null;
}
var Nl = [],
  Wn = -1;
function mn(e) {
  return { current: e };
}
function Z(e) {
  0 > Wn || ((e.current = Nl[Wn]), (Nl[Wn] = null), Wn--);
}
function Y(e, t) {
  Wn++, (Nl[Wn] = e.current), (e.current = t);
}
var cn = {},
  Se = mn(cn),
  _e = mn(!1),
  On = cn;
function mr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function je(e) {
  return (e = e.childContextTypes), e != null;
}
function Ti() {
  Z(_e), Z(Se);
}
function oc(e, t, n) {
  if (Se.current !== cn) throw Error(O(168));
  Y(Se, t), Y(_e, n);
}
function _f(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, Xm(e) || "Unknown", o));
  return re({}, n, r);
}
function Ni(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cn),
    (On = Se.current),
    Y(Se, e),
    Y(_e, _e.current),
    !0
  );
}
function ic(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = _f(e, t, On)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(_e),
      Z(Se),
      Y(Se, e))
    : Z(_e),
    Y(_e, n);
}
var Nt = null,
  Zi = !1,
  Fs = !1;
function jf(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function py(e) {
  (Zi = !0), jf(e);
}
function vn() {
  if (!Fs && Nt !== null) {
    Fs = !0;
    var e = 0,
      t = G;
    try {
      var n = Nt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Zi = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), tf(ma, vn), o);
    } finally {
      (G = t), (Fs = !1);
    }
  }
  return null;
}
var Qn = [],
  Kn = 0,
  Ri = null,
  Oi = 0,
  Qe = [],
  Ke = 0,
  _n = null,
  Rt = 1,
  Ot = "";
function gn(e, t) {
  (Qn[Kn++] = Oi), (Qn[Kn++] = Ri), (Ri = e), (Oi = t);
}
function bf(e, t, n) {
  (Qe[Ke++] = Rt), (Qe[Ke++] = Ot), (Qe[Ke++] = _n), (_n = e);
  var r = Rt;
  e = Ot;
  var o = 32 - it(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - it(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Rt = (1 << (32 - it(t) + o)) | (n << o) | r),
      (Ot = i + e);
  } else (Rt = (1 << i) | (n << o) | r), (Ot = e);
}
function ka(e) {
  e.return !== null && (gn(e, 1), bf(e, 1, 0));
}
function Pa(e) {
  for (; e === Ri; )
    (Ri = Qn[--Kn]), (Qn[Kn] = null), (Oi = Qn[--Kn]), (Qn[Kn] = null);
  for (; e === _n; )
    (_n = Qe[--Ke]),
      (Qe[Ke] = null),
      (Ot = Qe[--Ke]),
      (Qe[Ke] = null),
      (Rt = Qe[--Ke]),
      (Qe[Ke] = null);
}
var Fe = null,
  Ie = null,
  ee = !1,
  ot = null;
function Af(e, t) {
  var n = Ge(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (Ie = rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _n !== null ? { id: Rt, overflow: Ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ge(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Rl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ol(e) {
  if (ee) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!sc(e, t)) {
        if (Rl(e)) throw Error(O(418));
        t = rn(n.nextSibling);
        var r = Fe;
        t && sc(e, t)
          ? Af(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Fe = e));
      }
    } else {
      if (Rl(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Fe = e);
    }
  }
}
function lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Qo(e) {
  if (e !== Fe) return !1;
  if (!ee) return lc(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !kl(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (Rl(e)) throw (Lf(), Error(O(418)));
    for (; t; ) Af(e, t), (t = rn(t.nextSibling));
  }
  if ((lc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Fe ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Lf() {
  for (var e = Ie; e; ) e = rn(e.nextSibling);
}
function vr() {
  (Ie = Fe = null), (ee = !1);
}
function Ta(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var hy = It.ReactCurrentBatchConfig;
function Ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Ko(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ac(e) {
  var t = e._init;
  return t(e._payload);
}
function Mf(e) {
  function t(f, d) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [d]), (f.flags |= 16)) : m.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function o(f, d) {
    return (f = an(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, d, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((f.flags |= 2), d) : m)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function s(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function l(f, d, m, E) {
    return d === null || d.tag !== 6
      ? ((d = Ws(m, f.mode, E)), (d.return = f), d)
      : ((d = o(d, m)), (d.return = f), d);
  }
  function a(f, d, m, E) {
    var C = m.type;
    return C === $n
      ? c(f, d, m.props.children, E, m.key)
      : d !== null &&
        (d.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Ht &&
            ac(C) === d.type))
      ? ((E = o(d, m.props)), (E.ref = Ir(f, d, m)), (E.return = f), E)
      : ((E = pi(m.type, m.key, m.props, null, f.mode, E)),
        (E.ref = Ir(f, d, m)),
        (E.return = f),
        E);
  }
  function u(f, d, m, E) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = Qs(m, f.mode, E)), (d.return = f), d)
      : ((d = o(d, m.children || [])), (d.return = f), d);
  }
  function c(f, d, m, E, C) {
    return d === null || d.tag !== 7
      ? ((d = Rn(m, f.mode, E, C)), (d.return = f), d)
      : ((d = o(d, m)), (d.return = f), d);
  }
  function p(f, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Ws("" + d, f.mode, m)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Do:
          return (
            (m = pi(d.type, d.key, d.props, null, f.mode, m)),
            (m.ref = Ir(f, null, d)),
            (m.return = f),
            m
          );
        case zn:
          return (d = Qs(d, f.mode, m)), (d.return = f), d;
        case Ht:
          var E = d._init;
          return p(f, E(d._payload), m);
      }
      if (Hr(d) || br(d))
        return (d = Rn(d, f.mode, m, null)), (d.return = f), d;
      Ko(f, d);
    }
    return null;
  }
  function h(f, d, m, E) {
    var C = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : l(f, d, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Do:
          return m.key === C ? a(f, d, m, E) : null;
        case zn:
          return m.key === C ? u(f, d, m, E) : null;
        case Ht:
          return (C = m._init), h(f, d, C(m._payload), E);
      }
      if (Hr(m) || br(m)) return C !== null ? null : c(f, d, m, E, null);
      Ko(f, m);
    }
    return null;
  }
  function g(f, d, m, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (f = f.get(m) || null), l(d, f, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Do:
          return (f = f.get(E.key === null ? m : E.key) || null), a(d, f, E, C);
        case zn:
          return (f = f.get(E.key === null ? m : E.key) || null), u(d, f, E, C);
        case Ht:
          var k = E._init;
          return g(f, d, m, k(E._payload), C);
      }
      if (Hr(E) || br(E)) return (f = f.get(m) || null), c(d, f, E, C, null);
      Ko(d, E);
    }
    return null;
  }
  function S(f, d, m, E) {
    for (
      var C = null, k = null, P = d, R = (d = 0), L = null;
      P !== null && R < m.length;
      R++
    ) {
      P.index > R ? ((L = P), (P = null)) : (L = P.sibling);
      var b = h(f, P, m[R], E);
      if (b === null) {
        P === null && (P = L);
        break;
      }
      e && P && b.alternate === null && t(f, P),
        (d = i(b, d, R)),
        k === null ? (C = b) : (k.sibling = b),
        (k = b),
        (P = L);
    }
    if (R === m.length) return n(f, P), ee && gn(f, R), C;
    if (P === null) {
      for (; R < m.length; R++)
        (P = p(f, m[R], E)),
          P !== null &&
            ((d = i(P, d, R)), k === null ? (C = P) : (k.sibling = P), (k = P));
      return ee && gn(f, R), C;
    }
    for (P = r(f, P); R < m.length; R++)
      (L = g(P, f, R, m[R], E)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? R : L.key),
          (d = i(L, d, R)),
          k === null ? (C = L) : (k.sibling = L),
          (k = L));
    return (
      e &&
        P.forEach(function (z) {
          return t(f, z);
        }),
      ee && gn(f, R),
      C
    );
  }
  function y(f, d, m, E) {
    var C = br(m);
    if (typeof C != "function") throw Error(O(150));
    if (((m = C.call(m)), m == null)) throw Error(O(151));
    for (
      var k = (C = null), P = d, R = (d = 0), L = null, b = m.next();
      P !== null && !b.done;
      R++, b = m.next()
    ) {
      P.index > R ? ((L = P), (P = null)) : (L = P.sibling);
      var z = h(f, P, b.value, E);
      if (z === null) {
        P === null && (P = L);
        break;
      }
      e && P && z.alternate === null && t(f, P),
        (d = i(z, d, R)),
        k === null ? (C = z) : (k.sibling = z),
        (k = z),
        (P = L);
    }
    if (b.done) return n(f, P), ee && gn(f, R), C;
    if (P === null) {
      for (; !b.done; R++, b = m.next())
        (b = p(f, b.value, E)),
          b !== null &&
            ((d = i(b, d, R)), k === null ? (C = b) : (k.sibling = b), (k = b));
      return ee && gn(f, R), C;
    }
    for (P = r(f, P); !b.done; R++, b = m.next())
      (b = g(P, f, R, b.value, E)),
        b !== null &&
          (e && b.alternate !== null && P.delete(b.key === null ? R : b.key),
          (d = i(b, d, R)),
          k === null ? (C = b) : (k.sibling = b),
          (k = b));
    return (
      e &&
        P.forEach(function (M) {
          return t(f, M);
        }),
      ee && gn(f, R),
      C
    );
  }
  function w(f, d, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === $n &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Do:
          e: {
            for (var C = m.key, k = d; k !== null; ) {
              if (k.key === C) {
                if (((C = m.type), C === $n)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (d = o(k, m.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Ht &&
                    ac(C) === k.type)
                ) {
                  n(f, k.sibling),
                    (d = o(k, m.props)),
                    (d.ref = Ir(f, k, m)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            m.type === $n
              ? ((d = Rn(m.props.children, f.mode, E, m.key)),
                (d.return = f),
                (f = d))
              : ((E = pi(m.type, m.key, m.props, null, f.mode, E)),
                (E.ref = Ir(f, d, m)),
                (E.return = f),
                (f = E));
          }
          return s(f);
        case zn:
          e: {
            for (k = m.key; d !== null; ) {
              if (d.key === k)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(f, d.sibling),
                    (d = o(d, m.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = Qs(m, f.mode, E)), (d.return = f), (f = d);
          }
          return s(f);
        case Ht:
          return (k = m._init), w(f, d, k(m._payload), E);
      }
      if (Hr(m)) return S(f, d, m, E);
      if (br(m)) return y(f, d, m, E);
      Ko(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, m)), (d.return = f), (f = d))
          : (n(f, d), (d = Ws(m, f.mode, E)), (d.return = f), (f = d)),
        s(f))
      : n(f, d);
  }
  return w;
}
var yr = Mf(!0),
  Df = Mf(!1),
  _i = mn(null),
  ji = null,
  Gn = null,
  Na = null;
function Ra() {
  Na = Gn = ji = null;
}
function Oa(e) {
  var t = _i.current;
  Z(_i), (e._currentValue = t);
}
function _l(e, t, n) {
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
function tr(e, t) {
  (ji = e),
    (Na = Gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (Na !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (ji === null) throw Error(O(308));
      (Gn = e), (ji.dependencies = { lanes: 0, firstContext: e });
    } else Gn = Gn.next = e;
  return t;
}
var Sn = null;
function _a(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function If(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), _a(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    At(e, r)
  );
}
function At(e, t) {
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
var Bt = !1;
function ja(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ff(e, t) {
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
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      At(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), _a(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    At(e, n)
  );
}
function li(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), va(e, n);
  }
}
function uc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
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
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
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
function bi(e, t, n, r) {
  var o = e.updateQueue;
  Bt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var h = l.lane,
        g = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var S = e,
            y = l;
          switch (((h = t), (g = n), y.tag)) {
            case 1:
              if (((S = y.payload), typeof S == "function")) {
                p = S.call(g, p, h);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = y.payload),
                (h = typeof S == "function" ? S.call(g, p, h) : S),
                h == null)
              )
                break e;
              p = re({}, p, h);
              break e;
            case 2:
              Bt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = p)) : (c = c.next = g),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (bn |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function cc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var _o = {},
  gt = mn(_o),
  ho = mn(_o),
  mo = mn(_o);
function En(e) {
  if (e === _o) throw Error(O(174));
  return e;
}
function ba(e, t) {
  switch ((Y(mo, t), Y(ho, e), Y(gt, _o), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cl(t, e));
  }
  Z(gt), Y(gt, t);
}
function gr() {
  Z(gt), Z(ho), Z(mo);
}
function zf(e) {
  En(mo.current);
  var t = En(gt.current),
    n = cl(t, e.type);
  t !== n && (Y(ho, e), Y(gt, n));
}
function Aa(e) {
  ho.current === e && (Z(gt), Z(ho));
}
var te = mn(0);
function Ai(e) {
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
var zs = [];
function La() {
  for (var e = 0; e < zs.length; e++)
    zs[e]._workInProgressVersionPrimary = null;
  zs.length = 0;
}
var ai = It.ReactCurrentDispatcher,
  $s = It.ReactCurrentBatchConfig,
  jn = 0,
  ne = null,
  ae = null,
  de = null,
  Li = !1,
  qr = !1,
  vo = 0,
  my = 0;
function ye() {
  throw Error(O(321));
}
function Ma(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Da(e, t, n, r, o, i) {
  if (
    ((jn = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ai.current = e === null || e.memoizedState === null ? xy : wy),
    (e = n(r, o)),
    qr)
  ) {
    i = 0;
    do {
      if (((qr = !1), (vo = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (de = ae = null),
        (t.updateQueue = null),
        (ai.current = Sy),
        (e = n(r, o));
    } while (qr);
  }
  if (
    ((ai.current = Mi),
    (t = ae !== null && ae.next !== null),
    (jn = 0),
    (de = ae = ne = null),
    (Li = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Ia() {
  var e = vo !== 0;
  return (vo = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (ne.memoizedState = de = e) : (de = de.next = e), de;
}
function qe() {
  if (ae === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? ne.memoizedState : de.next;
  if (t !== null) (de = t), (ae = e);
  else {
    if (e === null) throw Error(O(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      de === null ? (ne.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function yo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Us(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((jn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (ne.lanes |= c),
          (bn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      lt(r, t.memoizedState) || (Oe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ne.lanes |= i), (bn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vs(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    lt(i, t.memoizedState) || (Oe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function $f() {}
function Uf(e, t) {
  var n = ne,
    r = qe(),
    o = t(),
    i = !lt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Oe = !0)),
    (r = r.queue),
    Fa(Bf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      go(9, Hf.bind(null, n, r, o, t), void 0, null),
      fe === null)
    )
      throw Error(O(349));
    jn & 30 || Vf(n, t, o);
  }
  return o;
}
function Vf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wf(t) && Qf(e);
}
function Bf(e, t, n) {
  return n(function () {
    Wf(t) && Qf(e);
  });
}
function Wf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function Qf(e) {
  var t = At(e, 1);
  t !== null && st(t, e, 1, -1);
}
function dc(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gy.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function go(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kf() {
  return qe().memoizedState;
}
function ui(e, t, n, r) {
  var o = ft();
  (ne.flags |= e),
    (o.memoizedState = go(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ji(e, t, n, r) {
  var o = qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (((i = s.destroy), r !== null && Ma(r, s.deps))) {
      o.memoizedState = go(t, n, i, r);
      return;
    }
  }
  (ne.flags |= e), (o.memoizedState = go(1 | t, n, i, r));
}
function fc(e, t) {
  return ui(8390656, 8, e, t);
}
function Fa(e, t) {
  return Ji(2048, 8, e, t);
}
function Gf(e, t) {
  return Ji(4, 2, e, t);
}
function Yf(e, t) {
  return Ji(4, 4, e, t);
}
function Xf(e, t) {
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
function qf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ji(4, 4, Xf.bind(null, t, e), n)
  );
}
function za() {}
function Zf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ma(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ma(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ep(e, t, n) {
  return jn & 21
    ? (lt(n, t) || ((n = of()), (ne.lanes |= n), (bn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function vy(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $s.transition;
  $s.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), ($s.transition = r);
  }
}
function tp() {
  return qe().memoizedState;
}
function yy(e, t, n) {
  var r = ln(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    np(e))
  )
    rp(t, n);
  else if (((n = If(e, t, n, r)), n !== null)) {
    var o = Pe();
    st(n, e, r, o), op(n, t, r);
  }
}
function gy(e, t, n) {
  var r = ln(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (np(e)) rp(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), lt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), _a(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = If(e, t, o, r)),
      n !== null && ((o = Pe()), st(n, e, r, o), op(n, t, r));
  }
}
function np(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function rp(e, t) {
  qr = Li = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function op(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), va(e, n);
  }
}
var Mi = {
    readContext: Xe,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  xy = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: fc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ui(4194308, 4, Xf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ui(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ui(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
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
        (e = e.dispatch = yy.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: dc,
    useDebugValue: za,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = dc(!1),
        t = e[0];
      return (e = vy.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        o = ft();
      if (ee) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(O(349));
        jn & 30 || Vf(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        fc(Bf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        go(9, Hf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = fe.identifierPrefix;
      if (ee) {
        var n = Ot,
          r = Rt;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = my++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wy = {
    readContext: Xe,
    useCallback: Zf,
    useContext: Xe,
    useEffect: Fa,
    useImperativeHandle: qf,
    useInsertionEffect: Gf,
    useLayoutEffect: Yf,
    useMemo: Jf,
    useReducer: Us,
    useRef: Kf,
    useState: function () {
      return Us(yo);
    },
    useDebugValue: za,
    useDeferredValue: function (e) {
      var t = qe();
      return ep(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Us(yo)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: $f,
    useSyncExternalStore: Uf,
    useId: tp,
    unstable_isNewReconciler: !1,
  },
  Sy = {
    readContext: Xe,
    useCallback: Zf,
    useContext: Xe,
    useEffect: Fa,
    useImperativeHandle: qf,
    useInsertionEffect: Gf,
    useLayoutEffect: Yf,
    useMemo: Jf,
    useReducer: Vs,
    useRef: Kf,
    useState: function () {
      return Vs(yo);
    },
    useDebugValue: za,
    useDeferredValue: function (e) {
      var t = qe();
      return ae === null ? (t.memoizedState = e) : ep(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Vs(yo)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: $f,
    useSyncExternalStore: Uf,
    useId: tp,
    unstable_isNewReconciler: !1,
  };
function et(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function jl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var es = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = ln(e),
      i = _t(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = on(e, i, o)),
      t !== null && (st(t, e, o, r), li(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = ln(e),
      i = _t(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = on(e, i, o)),
      t !== null && (st(t, e, o, r), li(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = ln(e),
      o = _t(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = on(e, o, r)),
      t !== null && (st(t, e, r, n), li(t, e, r));
  },
};
function pc(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !uo(n, r) || !uo(o, i)
      : !0
  );
}
function ip(e, t, n) {
  var r = !1,
    o = cn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Xe(i))
      : ((o = je(t) ? On : Se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? mr(e, o) : cn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = es),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function hc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && es.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ja(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Xe(i))
    : ((i = je(t) ? On : Se.current), (o.context = mr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (jl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && es.enqueueReplaceState(o, o.state, null),
      bi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function xr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ym(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Hs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Al(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ey = typeof WeakMap == "function" ? WeakMap : Map;
function sp(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ii || ((Ii = !0), (Hl = r)), Al(e, t);
    }),
    n
  );
}
function lp(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Al(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Al(e, t),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function mc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ey();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Dy.bind(null, e, t, n)), t.then(e, e));
}
function vc(e) {
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
function yc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _t(-1, 1)), (t.tag = 2), on(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Cy = It.ReactCurrentOwner,
  Oe = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? Df(t, null, n, r) : yr(t, e.child, n, r);
}
function gc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    tr(t, o),
    (r = Da(e, t, n, r, i, o)),
    (n = Ia()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Lt(e, t, o))
      : (ee && n && ka(t), (t.flags |= 1), Ce(e, t, r, o), t.child)
  );
}
function xc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ka(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ap(e, t, i, r, o))
      : ((e = pi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : uo), n(s, r) && e.ref === t.ref)
    )
      return Lt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = an(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ap(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (uo(i, r) && e.ref === t.ref)
      if (((Oe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Oe = !0);
      else return (t.lanes = e.lanes), Lt(e, t, o);
  }
  return Ll(e, t, n, r, o);
}
function up(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Xn, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(Xn, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Y(Xn, Me),
        (Me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Xn, Me),
      (Me |= r);
  return Ce(e, t, o, n), t.child;
}
function cp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ll(e, t, n, r, o) {
  var i = je(n) ? On : Se.current;
  return (
    (i = mr(t, i)),
    tr(t, o),
    (n = Da(e, t, n, r, i, o)),
    (r = Ia()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Lt(e, t, o))
      : (ee && r && ka(t), (t.flags |= 1), Ce(e, t, n, o), t.child)
  );
}
function wc(e, t, n, r, o) {
  if (je(n)) {
    var i = !0;
    Ni(t);
  } else i = !1;
  if ((tr(t, o), t.stateNode === null))
    ci(e, t), ip(t, n, r), bl(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Xe(u))
      : ((u = je(n) ? On : Se.current), (u = mr(t, u)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && hc(t, s, r, u)),
      (Bt = !1);
    var h = t.memoizedState;
    (s.state = h),
      bi(t, r, s, o),
      (a = t.memoizedState),
      l !== r || h !== a || _e.current || Bt
        ? (typeof c == "function" && (jl(t, n, c, r), (a = t.memoizedState)),
          (l = Bt || pc(t, n, l, r, h, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Ff(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : et(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Xe(a))
        : ((a = je(n) ? On : Se.current), (a = mr(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || h !== a) && hc(t, s, r, a)),
      (Bt = !1),
      (h = t.memoizedState),
      (s.state = h),
      bi(t, r, s, o);
    var S = t.memoizedState;
    l !== p || h !== S || _e.current || Bt
      ? (typeof g == "function" && (jl(t, n, g, r), (S = t.memoizedState)),
        (u = Bt || pc(t, n, u, r, h, S, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, S, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, S, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ml(e, t, n, r, i, o);
}
function Ml(e, t, n, r, o, i) {
  cp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && ic(t, n, !1), Lt(e, t, i);
  (r = t.stateNode), (Cy.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = yr(t, e.child, null, i)), (t.child = yr(t, null, l, i)))
      : Ce(e, t, l, i),
    (t.memoizedState = r.state),
    o && ic(t, n, !0),
    t.child
  );
}
function dp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oc(e, t.context, !1),
    ba(e, t.containerInfo);
}
function Sc(e, t, n, r, o) {
  return vr(), Ta(o), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Il(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fp(e, t, n) {
  var r = t.pendingProps,
    o = te.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Y(te, o & 1),
    e === null)
  )
    return (
      Ol(t),
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
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = rs(s, r, 0, null)),
              (e = Rn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Il(n)),
              (t.memoizedState = Dl),
              e)
            : $a(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return ky(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = an(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = an(l, i)) : ((i = Rn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Il(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Dl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = an(i, { mode: "visible", children: r.children })),
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
function $a(e, t) {
  return (
    (t = rs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Go(e, t, n, r) {
  return (
    r !== null && Ta(r),
    yr(t, e.child, null, n),
    (e = $a(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ky(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hs(Error(O(422)))), Go(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = rs({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Rn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && yr(t, e.child, null, s),
        (t.child.memoizedState = Il(s)),
        (t.memoizedState = Dl),
        i);
  if (!(t.mode & 1)) return Go(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(O(419))), (r = Hs(i, r, void 0)), Go(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Oe || l)) {
    if (((r = fe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), At(e, o), st(r, e, o, -1));
    }
    return Qa(), (r = Hs(Error(O(421)))), Go(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Iy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ie = rn(o.nextSibling)),
      (Fe = t),
      (ee = !0),
      (ot = null),
      e !== null &&
        ((Qe[Ke++] = Rt),
        (Qe[Ke++] = Ot),
        (Qe[Ke++] = _n),
        (Rt = e.id),
        (Ot = e.overflow),
        (_n = t)),
      (t = $a(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ec(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _l(e.return, t, n);
}
function Bs(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function pp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ce(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
        else if (e.tag === 19) Ec(e, n, t);
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
  if ((Y(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ai(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Bs(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ai(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Bs(t, !0, n, null, i);
        break;
      case "together":
        Bs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ci(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (bn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = an(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Py(e, t, n) {
  switch (t.tag) {
    case 3:
      dp(t), vr();
      break;
    case 5:
      zf(t);
      break;
    case 1:
      je(t.type) && Ni(t);
      break;
    case 4:
      ba(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Y(_i, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fp(e, t, n)
          : (Y(te, te.current & 1),
            (e = Lt(e, t, n)),
            e !== null ? e.sibling : null);
      Y(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Y(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), up(e, t, n);
  }
  return Lt(e, t, n);
}
var hp, Fl, mp, vp;
hp = function (e, t) {
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
Fl = function () {};
mp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), En(gt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = sl(e, o)), (r = sl(e, r)), (i = []);
        break;
      case "select":
        (o = re({}, o, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ul(e, o)), (r = ul(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Pi);
    }
    dl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (no.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (no.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && q("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
vp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fr(e, t) {
  if (!ee)
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
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ty(e, t, n) {
  var r = t.pendingProps;
  switch ((Pa(t), t.tag)) {
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
      return ge(t), null;
    case 1:
      return je(t.type) && Ti(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        gr(),
        Z(_e),
        Z(Se),
        La(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (Ql(ot), (ot = null)))),
        Fl(e, t),
        ge(t),
        null
      );
    case 5:
      Aa(t);
      var o = En(mo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return ge(t), null;
        }
        if (((e = En(gt.current)), Qo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vt] = t), (r[po] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Wr.length; o++) q(Wr[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              ju(r, i), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              Au(r, i), q("invalid", r);
          }
          dl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Wo(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Wo(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : no.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              Io(r), bu(r, i, !0);
              break;
            case "textarea":
              Io(r), Lu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hd(n)),
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
            (e[vt] = t),
            (e[po] = r),
            hp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = fl(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Wr.length; o++) q(Wr[o], e);
                o = r;
                break;
              case "source":
                q("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (o = r);
                break;
              case "details":
                q("toggle", e), (o = r);
                break;
              case "input":
                ju(e, r), (o = sl(e, r)), q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = re({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                Au(e, r), (o = ul(e, r)), q("invalid", e);
                break;
              default:
                o = r;
            }
            dl(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Qd(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Bd(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ro(e, a)
                    : typeof a == "number" && ro(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (no.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && q("scroll", e)
                      : a != null && ca(e, i, a, s));
              }
            switch (n) {
              case "input":
                Io(e), bu(e, r, !1);
                break;
              case "textarea":
                Io(e), Lu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Pi);
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) vp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = En(mo.current)), En(gt.current), Qo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vt] = t),
            (i = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vt] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (Z(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Ie !== null && t.mode & 1 && !(t.flags & 128))
          Lf(), vr(), (t.flags |= 98560), (i = !1);
        else if (((i = Qo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[vt] = t;
          } else
            vr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (i = !1);
        } else ot !== null && (Ql(ot), (ot = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ce === 0 && (ce = 3) : Qa())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        gr(), Fl(e, t), e === null && co(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return Oa(t.type._context), ge(t), null;
    case 17:
      return je(t.type) && Ti(), ge(t), null;
    case 19:
      if ((Z(te), (i = t.memoizedState), i === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Fr(i, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ai(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Fr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            se() > wr &&
            ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ai(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ee)
            )
              return ge(t), null;
          } else
            2 * se() - i.renderingStartTime > wr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = te.current),
          Y(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Wa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Ny(e, t) {
  switch ((Pa(t), t.tag)) {
    case 1:
      return (
        je(t.type) && Ti(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gr(),
        Z(_e),
        Z(Se),
        La(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Aa(t), null;
    case 13:
      if ((Z(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(O(340));
        vr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(te), null;
    case 4:
      return gr(), null;
    case 10:
      return Oa(t.type._context), null;
    case 22:
    case 23:
      return Wa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yo = !1,
  we = !1,
  Ry = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function zl(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Cc = !1;
function Oy(e, t) {
  if (((El = Ei), (e = Sf()), Ca(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (h = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++u === o && (l = s),
                h === i && ++c === r && (a = s),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Cl = { focusedElem: e, selectionRange: n }, Ei = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var y = S.memoizedProps,
                    w = S.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : et(t.type, y),
                      w
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(O(163));
            }
        } catch (E) {
          ie(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (S = Cc), (Cc = !1), S;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && zl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ts(e, t) {
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
function $l(e) {
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
function yp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vt], delete t[po], delete t[Tl], delete t[dy], delete t[fy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function gp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gp(e.return)) return null;
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
function Ul(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ul(e, t, n), e = e.sibling; e !== null; ) Ul(e, t, n), (e = e.sibling);
}
function Vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), (e = e.sibling);
}
var pe = null,
  rt = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) xp(e, t, n), (n = n.sibling);
}
function xp(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(Ki, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Yn(n, t);
    case 6:
      var r = pe,
        o = rt;
      (pe = null),
        Ft(e, t, n),
        (pe = r),
        (rt = o),
        pe !== null &&
          (rt
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (rt
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Is(e.parentNode, n)
              : e.nodeType === 1 && Is(e, n),
            lo(e))
          : Is(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (o = rt),
        (pe = n.stateNode.containerInfo),
        (rt = !0),
        Ft(e, t, n),
        (pe = r),
        (rt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && zl(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ie(n, t, l);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Ft(e, t, n), (we = r))
        : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function Pc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ry()),
      t.forEach(function (r) {
        var o = Fy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (pe = l.stateNode), (rt = !1);
              break e;
            case 3:
              (pe = l.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (pe = l.stateNode.containerInfo), (rt = !0);
              break e;
          }
          l = l.return;
        }
        if (pe === null) throw Error(O(160));
        xp(i, s, o), (pe = null), (rt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        ie(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) wp(t, e), (t = t.sibling);
}
function wp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), dt(e), r & 4)) {
        try {
          Zr(3, e, e.return), ts(3, e);
        } catch (y) {
          ie(e, e.return, y);
        }
        try {
          Zr(5, e, e.return);
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 1:
      Je(t, e), dt(e), r & 512 && n !== null && Yn(n, n.return);
      break;
    case 5:
      if (
        (Je(t, e),
        dt(e),
        r & 512 && n !== null && Yn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ro(o, "");
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Ud(o, i),
              fl(l, s);
            var u = fl(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                p = a[s + 1];
              c === "style"
                ? Qd(o, p)
                : c === "dangerouslySetInnerHTML"
                ? Bd(o, p)
                : c === "children"
                ? ro(o, p)
                : ca(o, c, p, u);
            }
            switch (l) {
              case "input":
                ll(o, i);
                break;
              case "textarea":
                Vd(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? qn(o, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qn(o, !!i.multiple, i.defaultValue, !0)
                      : qn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[po] = i;
          } catch (y) {
            ie(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Je(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          ie(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          lo(t.containerInfo);
        } catch (y) {
          ie(e, e.return, y);
        }
      break;
    case 4:
      Je(t, e), dt(e);
      break;
    case 13:
      Je(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ha = se())),
        r & 4 && Pc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || c), Je(t, e), (we = u)) : Je(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (p = j = c; j !== null; ) {
              switch (((h = j), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, h, h.return);
                  break;
                case 1:
                  Yn(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (y) {
                      ie(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Yn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Nc(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (j = g)) : Nc(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Wd("display", s)));
              } catch (y) {
                ie(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                ie(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Je(t, e), dt(e), r & 4 && Pc(e);
      break;
    case 21:
      break;
    default:
      Je(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ro(o, ""), (r.flags &= -33));
          var i = kc(e);
          Vl(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = kc(e);
          Ul(e, l, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      ie(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _y(e, t, n) {
  (j = e), Sp(e);
}
function Sp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Yo;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || we;
        l = Yo;
        var u = we;
        if (((Yo = s), (we = a) && !u))
          for (j = o; j !== null; )
            (s = j),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Rc(o)
                : a !== null
                ? ((a.return = s), (j = a))
                : Rc(o);
        for (; i !== null; ) (j = i), Sp(i), (i = i.sibling);
        (j = o), (Yo = l), (we = u);
      }
      Tc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : Tc(e);
  }
}
function Tc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || ts(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && cc(t, i, r);
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
                cc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && lo(p);
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
              throw Error(O(163));
          }
        we || (t.flags & 512 && $l(t));
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Nc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Rc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ts(4, t);
          } catch (a) {
            ie(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ie(t, o, a);
            }
          }
          var i = t.return;
          try {
            $l(t);
          } catch (a) {
            ie(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            $l(t);
          } catch (a) {
            ie(t, s, a);
          }
      }
    } catch (a) {
      ie(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (j = l);
      break;
    }
    j = t.return;
  }
}
var jy = Math.ceil,
  Di = It.ReactCurrentDispatcher,
  Ua = It.ReactCurrentOwner,
  Ye = It.ReactCurrentBatchConfig,
  B = 0,
  fe = null,
  le = null,
  he = 0,
  Me = 0,
  Xn = mn(0),
  ce = 0,
  xo = null,
  bn = 0,
  ns = 0,
  Va = 0,
  Jr = null,
  Re = null,
  Ha = 0,
  wr = 1 / 0,
  Tt = null,
  Ii = !1,
  Hl = null,
  sn = null,
  Xo = !1,
  Jt = null,
  Fi = 0,
  eo = 0,
  Bl = null,
  di = -1,
  fi = 0;
function Pe() {
  return B & 6 ? se() : di !== -1 ? di : (di = se());
}
function ln(e) {
  return e.mode & 1
    ? B & 2 && he !== 0
      ? he & -he
      : hy.transition !== null
      ? (fi === 0 && (fi = of()), fi)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ff(e.type))),
        e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < eo) throw ((eo = 0), (Bl = null), Error(O(185)));
  No(e, n, r),
    (!(B & 2) || e !== fe) &&
      (e === fe && (!(B & 2) && (ns |= n), ce === 4 && Qt(e, he)),
      be(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((wr = se() + 500), Zi && vn()));
}
function be(e, t) {
  var n = e.callbackNode;
  hv(e, t);
  var r = Si(e, e === fe ? he : 0);
  if (r === 0)
    n !== null && Iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Iu(n), t === 1))
      e.tag === 0 ? py(Oc.bind(null, e)) : jf(Oc.bind(null, e)),
        uy(function () {
          !(B & 6) && vn();
        }),
        (n = null);
    else {
      switch (sf(r)) {
        case 1:
          n = ma;
          break;
        case 4:
          n = nf;
          break;
        case 16:
          n = wi;
          break;
        case 536870912:
          n = rf;
          break;
        default:
          n = wi;
      }
      n = Op(n, Ep.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ep(e, t) {
  if (((di = -1), (fi = 0), B & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (nr() && e.callbackNode !== n) return null;
  var r = Si(e, e === fe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zi(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = kp();
    (fe !== e || he !== t) && ((Tt = null), (wr = se() + 500), Nn(e, t));
    do
      try {
        Ly();
        break;
      } catch (l) {
        Cp(e, l);
      }
    while (!0);
    Ra(),
      (Di.current = i),
      (B = o),
      le !== null ? (t = 0) : ((fe = null), (he = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = yl(e)), o !== 0 && ((r = o), (t = Wl(e, o)))), t === 1)
    )
      throw ((n = xo), Nn(e, 0), Qt(e, r), be(e, se()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !by(o) &&
          ((t = zi(e, r)),
          t === 2 && ((i = yl(e)), i !== 0 && ((r = i), (t = Wl(e, i)))),
          t === 1))
      )
        throw ((n = xo), Nn(e, 0), Qt(e, r), be(e, se()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          xn(e, Re, Tt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = Ha + 500 - se()), 10 < t))
          ) {
            if (Si(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Pl(xn.bind(null, e, Re, Tt), t);
            break;
          }
          xn(e, Re, Tt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - it(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = se() - r),
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
                : 1960 * jy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pl(xn.bind(null, e, Re, Tt), r);
            break;
          }
          xn(e, Re, Tt);
          break;
        case 5:
          xn(e, Re, Tt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return be(e, se()), e.callbackNode === n ? Ep.bind(null, e) : null;
}
function Wl(e, t) {
  var n = Jr;
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    (e = zi(e, t)),
    e !== 2 && ((t = Re), (Re = n), t !== null && Ql(t)),
    e
  );
}
function Ql(e) {
  Re === null ? (Re = e) : Re.push.apply(Re, e);
}
function by(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!lt(i(), o)) return !1;
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
function Qt(e, t) {
  for (
    t &= ~Va,
      t &= ~ns,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Oc(e) {
  if (B & 6) throw Error(O(327));
  nr();
  var t = Si(e, 0);
  if (!(t & 1)) return be(e, se()), null;
  var n = zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yl(e);
    r !== 0 && ((t = r), (n = Wl(e, r)));
  }
  if (n === 1) throw ((n = xo), Nn(e, 0), Qt(e, t), be(e, se()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, Re, Tt),
    be(e, se()),
    null
  );
}
function Ba(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((wr = se() + 500), Zi && vn());
  }
}
function An(e) {
  Jt !== null && Jt.tag === 0 && !(B & 6) && nr();
  var t = B;
  B |= 1;
  var n = Ye.transition,
    r = G;
  try {
    if (((Ye.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (Ye.transition = n), (B = t), !(B & 6) && vn();
  }
}
function Wa() {
  (Me = Xn.current), Z(Xn);
}
function Nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ay(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Pa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ti();
          break;
        case 3:
          gr(), Z(_e), Z(Se), La();
          break;
        case 5:
          Aa(r);
          break;
        case 4:
          gr();
          break;
        case 13:
          Z(te);
          break;
        case 19:
          Z(te);
          break;
        case 10:
          Oa(r.type._context);
          break;
        case 22:
        case 23:
          Wa();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (le = e = an(e.current, null)),
    (he = Me = t),
    (ce = 0),
    (xo = null),
    (Va = ns = bn = 0),
    (Re = Jr = null),
    Sn !== null)
  ) {
    for (t = 0; t < Sn.length; t++)
      if (((n = Sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Sn = null;
  }
  return e;
}
function Cp(e, t) {
  do {
    var n = le;
    try {
      if ((Ra(), (ai.current = Mi), Li)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Li = !1;
      }
      if (
        ((jn = 0),
        (de = ae = ne = null),
        (qr = !1),
        (vo = 0),
        (Ua.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (xo = t), (le = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = he),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = vc(s);
          if (g !== null) {
            (g.flags &= -257),
              yc(g, s, l, i, t),
              g.mode & 1 && mc(i, u, t),
              (t = g),
              (a = u);
            var S = t.updateQueue;
            if (S === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              mc(i, u, t), Qa();
              break e;
            }
            a = Error(O(426));
          }
        } else if (ee && l.mode & 1) {
          var w = vc(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              yc(w, s, l, i, t),
              Ta(xr(a, l));
            break e;
          }
        }
        (i = a = xr(a, l)),
          ce !== 4 && (ce = 2),
          Jr === null ? (Jr = [i]) : Jr.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = sp(i, a, t);
              uc(i, f);
              break e;
            case 1:
              l = a;
              var d = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (sn === null || !sn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = lp(i, l, t);
                uc(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Tp(n);
    } catch (C) {
      (t = C), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function kp() {
  var e = Di.current;
  return (Di.current = Mi), e === null ? Mi : e;
}
function Qa() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    fe === null || (!(bn & 268435455) && !(ns & 268435455)) || Qt(fe, he);
}
function zi(e, t) {
  var n = B;
  B |= 2;
  var r = kp();
  (fe !== e || he !== t) && ((Tt = null), Nn(e, t));
  do
    try {
      Ay();
      break;
    } catch (o) {
      Cp(e, o);
    }
  while (!0);
  if ((Ra(), (B = n), (Di.current = r), le !== null)) throw Error(O(261));
  return (fe = null), (he = 0), ce;
}
function Ay() {
  for (; le !== null; ) Pp(le);
}
function Ly() {
  for (; le !== null && !iv(); ) Pp(le);
}
function Pp(e) {
  var t = Rp(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tp(e) : (le = t),
    (Ua.current = null);
}
function Tp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ny(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (le = null);
        return;
      }
    } else if (((n = Ty(n, t, Me)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function xn(e, t, n) {
  var r = G,
    o = Ye.transition;
  try {
    (Ye.transition = null), (G = 1), My(e, t, n, r);
  } finally {
    (Ye.transition = o), (G = r);
  }
  return null;
}
function My(e, t, n, r) {
  do nr();
  while (Jt !== null);
  if (B & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (mv(e, i),
    e === fe && ((le = fe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xo ||
      ((Xo = !0),
      Op(wi, function () {
        return nr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ye.transition), (Ye.transition = null);
    var s = G;
    G = 1;
    var l = B;
    (B |= 4),
      (Ua.current = null),
      Oy(e, n),
      wp(n, e),
      ty(Cl),
      (Ei = !!El),
      (Cl = El = null),
      (e.current = n),
      _y(n),
      sv(),
      (B = l),
      (G = s),
      (Ye.transition = i);
  } else e.current = n;
  if (
    (Xo && ((Xo = !1), (Jt = e), (Fi = o)),
    (i = e.pendingLanes),
    i === 0 && (sn = null),
    uv(n.stateNode),
    be(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ii) throw ((Ii = !1), (e = Hl), (Hl = null), e);
  return (
    Fi & 1 && e.tag !== 0 && nr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Bl ? eo++ : ((eo = 0), (Bl = e))) : (eo = 0),
    vn(),
    null
  );
}
function nr() {
  if (Jt !== null) {
    var e = sf(Fi),
      t = Ye.transition,
      n = G;
    try {
      if (((Ye.transition = null), (G = 16 > e ? 16 : e), Jt === null))
        var r = !1;
      else {
        if (((e = Jt), (Jt = null), (Fi = 0), B & 6)) throw Error(O(331));
        var o = B;
        for (B |= 4, j = e.current; j !== null; ) {
          var i = j,
            s = i.child;
          if (j.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, c, i);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (j = p);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var h = c.sibling,
                        g = c.return;
                      if ((yp(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (j = h);
                        break;
                      }
                      j = g;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var y = S.child;
                if (y !== null) {
                  S.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (j = s);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (j = f);
                break e;
              }
              j = i.return;
            }
        }
        var d = e.current;
        for (j = d; j !== null; ) {
          s = j;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (j = m);
          else
            e: for (s = d; j !== null; ) {
              if (((l = j), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ts(9, l);
                  }
                } catch (C) {
                  ie(l, l.return, C);
                }
              if (l === s) {
                j = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (j = E);
                break e;
              }
              j = l.return;
            }
        }
        if (
          ((B = o), vn(), yt && typeof yt.onPostCommitFiberRoot == "function")
        )
          try {
            yt.onPostCommitFiberRoot(Ki, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (Ye.transition = t);
    }
  }
  return !1;
}
function _c(e, t, n) {
  (t = xr(n, t)),
    (t = sp(e, t, 1)),
    (e = on(e, t, 1)),
    (t = Pe()),
    e !== null && (No(e, 1, t), be(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) _c(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _c(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = xr(n, e)),
            (e = lp(t, e, 1)),
            (t = on(t, e, 1)),
            (e = Pe()),
            t !== null && (No(t, 1, e), be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Dy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (he & n) === n &&
      (ce === 4 || (ce === 3 && (he & 130023424) === he && 500 > se() - Ha)
        ? Nn(e, 0)
        : (Va |= n)),
    be(e, t);
}
function Np(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $o), ($o <<= 1), !($o & 130023424) && ($o = 4194304))
      : (t = 1));
  var n = Pe();
  (e = At(e, t)), e !== null && (No(e, t, n), be(e, n));
}
function Iy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Np(e, n);
}
function Fy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Np(e, n);
}
var Rp;
Rp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), Py(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else (Oe = !1), ee && t.flags & 1048576 && bf(t, Oi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ci(e, t), (e = t.pendingProps);
      var o = mr(t, Se.current);
      tr(t, n), (o = Da(null, t, r, e, o, n));
      var i = Ia();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(r) ? ((i = !0), Ni(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ja(t),
            (o.updater = es),
            (t.stateNode = o),
            (o._reactInternals = t),
            bl(t, r, e, n),
            (t = Ml(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && ka(t), Ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ci(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = $y(r)),
          (e = et(r, e)),
          o)
        ) {
          case 0:
            t = Ll(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = gc(null, t, r, e, n);
            break e;
          case 14:
            t = xc(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Ll(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        wc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((dp(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ff(e, t),
          bi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = xr(Error(O(423)), t)), (t = Sc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = xr(Error(O(424)), t)), (t = Sc(e, t, r, n, o));
            break e;
          } else
            for (
              Ie = rn(t.stateNode.containerInfo.firstChild),
                Fe = t,
                ee = !0,
                ot = null,
                n = Df(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vr(), r === o)) {
            t = Lt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zf(t),
        e === null && Ol(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        kl(r, o) ? (s = null) : i !== null && kl(r, i) && (t.flags |= 32),
        cp(e, t),
        Ce(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ol(t), null;
    case 13:
      return fp(e, t, n);
    case 4:
      return (
        ba(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yr(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        gc(e, t, r, o, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Y(_i, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (lt(i.value, s)) {
            if (i.children === o.children && !_e.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = _t(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      _l(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(O(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  _l(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        tr(t, n),
        (o = Xe(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = et(r, t.pendingProps)),
        (o = et(r.type, o)),
        xc(e, t, r, o, n)
      );
    case 15:
      return ap(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        ci(e, t),
        (t.tag = 1),
        je(r) ? ((e = !0), Ni(t)) : (e = !1),
        tr(t, n),
        ip(t, r, o),
        bl(t, r, o, n),
        Ml(null, t, r, !0, e, n)
      );
    case 19:
      return pp(e, t, n);
    case 22:
      return up(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Op(e, t) {
  return tf(e, t);
}
function zy(e, t, n, r) {
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
function Ge(e, t, n, r) {
  return new zy(e, t, n, r);
}
function Ka(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $y(e) {
  if (typeof e == "function") return Ka(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fa)) return 11;
    if (e === pa) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ge(e.tag, t, e.key, e.mode)),
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
function pi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ka(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case $n:
        return Rn(n.children, o, i, t);
      case da:
        (s = 8), (o |= 8);
        break;
      case nl:
        return (
          (e = Ge(12, n, t, o | 2)), (e.elementType = nl), (e.lanes = i), e
        );
      case rl:
        return (e = Ge(13, n, t, o)), (e.elementType = rl), (e.lanes = i), e;
      case ol:
        return (e = Ge(19, n, t, o)), (e.elementType = ol), (e.lanes = i), e;
      case Fd:
        return rs(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Dd:
              s = 10;
              break e;
            case Id:
              s = 9;
              break e;
            case fa:
              s = 11;
              break e;
            case pa:
              s = 14;
              break e;
            case Ht:
              (s = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ge(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Rn(e, t, n, r) {
  return (e = Ge(7, e, r, t)), (e.lanes = n), e;
}
function rs(e, t, n, r) {
  return (
    (e = Ge(22, e, r, t)),
    (e.elementType = Fd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ws(e, t, n) {
  return (e = Ge(6, e, null, t)), (e.lanes = n), e;
}
function Qs(e, t, n) {
  return (
    (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uy(e, t, n, r, o) {
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
    (this.eventTimes = Ts(0)),
    (this.expirationTimes = Ts(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ts(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ga(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Uy(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ge(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ja(i),
    e
  );
}
function Vy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _p(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return _f(e, n, t);
  }
  return t;
}
function jp(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Ga(n, r, !0, e, o, i, s, l, a)),
    (e.context = _p(null)),
    (n = e.current),
    (r = Pe()),
    (o = ln(n)),
    (i = _t(r, o)),
    (i.callback = t ?? null),
    on(n, i, o),
    (e.current.lanes = o),
    No(e, o, r),
    be(e, r),
    e
  );
}
function os(e, t, n, r) {
  var o = t.current,
    i = Pe(),
    s = ln(o);
  return (
    (n = _p(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = on(o, t, s)),
    e !== null && (st(e, o, s, i), li(e, o, s)),
    s
  );
}
function $i(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ya(e, t) {
  jc(e, t), (e = e.alternate) && jc(e, t);
}
function Hy() {
  return null;
}
var bp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xa(e) {
  this._internalRoot = e;
}
is.prototype.render = Xa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  os(e, t, null, null);
};
is.prototype.unmount = Xa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    An(function () {
      os(null, e, null, null);
    }),
      (t[bt] = null);
  }
};
function is(e) {
  this._internalRoot = e;
}
is.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = uf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && df(e);
  }
};
function qa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ss(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function bc() {}
function By(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = $i(s);
        i.call(u);
      };
    }
    var s = jp(t, r, e, 0, null, !1, !1, "", bc);
    return (
      (e._reactRootContainer = s),
      (e[bt] = s.current),
      co(e.nodeType === 8 ? e.parentNode : e),
      An(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = $i(a);
      l.call(u);
    };
  }
  var a = Ga(e, 0, !1, null, null, !1, !1, "", bc);
  return (
    (e._reactRootContainer = a),
    (e[bt] = a.current),
    co(e.nodeType === 8 ? e.parentNode : e),
    An(function () {
      os(t, a, n, r);
    }),
    a
  );
}
function ls(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = $i(s);
        l.call(a);
      };
    }
    os(t, s, e, o);
  } else s = By(n, t, e, o, r);
  return $i(s);
}
lf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Br(t.pendingLanes);
        n !== 0 &&
          (va(t, n | 1), be(t, se()), !(B & 6) && ((wr = se() + 500), vn()));
      }
      break;
    case 13:
      An(function () {
        var r = At(e, 1);
        if (r !== null) {
          var o = Pe();
          st(r, e, 1, o);
        }
      }),
        Ya(e, 1);
  }
};
ya = function (e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Pe();
      st(t, e, 134217728, n);
    }
    Ya(e, 134217728);
  }
};
af = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      n = At(e, t);
    if (n !== null) {
      var r = Pe();
      st(n, e, t, r);
    }
    Ya(e, t);
  }
};
uf = function () {
  return G;
};
cf = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
hl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ll(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = qi(r);
            if (!o) throw Error(O(90));
            $d(r), ll(r, o);
          }
        }
      }
      break;
    case "textarea":
      Vd(e, n);
      break;
    case "select":
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
Yd = Ba;
Xd = An;
var Wy = { usingClientEntryPoint: !1, Events: [Oo, Bn, qi, Kd, Gd, Ba] },
  zr = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qy = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: It.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || Hy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qo.isDisabled && qo.supportsFiber)
    try {
      (Ki = qo.inject(Qy)), (yt = qo);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wy;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qa(t)) throw Error(O(200));
  return Vy(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!qa(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = bp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ga(e, 1, !1, null, null, n, !1, r, o)),
    (e[bt] = t.current),
    co(e.nodeType === 8 ? e.parentNode : e),
    new Xa(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Jd(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return An(e);
};
Ue.hydrate = function (e, t, n) {
  if (!ss(t)) throw Error(O(200));
  return ls(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!qa(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = bp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = jp(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[bt] = t.current),
    co(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new is(t);
};
Ue.render = function (e, t, n) {
  if (!ss(t)) throw Error(O(200));
  return ls(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!ss(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (An(function () {
        ls(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[bt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Ba;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ss(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return ls(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function Ap() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap);
    } catch (e) {
      console.error(e);
    }
}
Ap(), (bd.exports = Ue);
var jo = bd.exports;
const Ky = wd(jo);
var Lp,
  Ac = jo;
(Lp = Ac.createRoot), Ac.hydrateRoot;
function Gy(e, t) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var n,
    r,
    o,
    i,
    s = [],
    l = "",
    a = e.split("/");
  for (a[0] || a.shift(); (o = a.shift()); )
    (n = o[0]),
      n === "*"
        ? (s.push(n), (l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : n === ":"
        ? ((r = o.indexOf("?", 1)),
          (i = o.indexOf(".", 1)),
          s.push(o.substring(1, ~r ? r : ~i ? i : o.length)),
          (l += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~i && (l += (~r ? "?" : "") + "\\" + o.substring(i)))
        : (l += "/" + o);
  return {
    keys: s,
    pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Mp = { exports: {} },
  Dp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr = x;
function Yy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xy = typeof Object.is == "function" ? Object.is : Yy,
  qy = Sr.useState,
  Zy = Sr.useEffect,
  Jy = Sr.useLayoutEffect,
  eg = Sr.useDebugValue;
function tg(e, t) {
  var n = t(),
    r = qy({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    Jy(
      function () {
        (o.value = n), (o.getSnapshot = t), Ks(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    Zy(
      function () {
        return (
          Ks(o) && i({ inst: o }),
          e(function () {
            Ks(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    eg(n),
    n
  );
}
function Ks(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xy(e, n);
  } catch {
    return !0;
  }
}
function ng(e, t) {
  return t();
}
var rg =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ng
    : tg;
Dp.useSyncExternalStore =
  Sr.useSyncExternalStore !== void 0 ? Sr.useSyncExternalStore : rg;
Mp.exports = Dp;
var og = Mp.exports;
const ig = Dm.useInsertionEffect,
  sg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  lg = sg ? x.useLayoutEffect : x.useEffect,
  ag = ig || lg,
  Ip = (e) => {
    const t = x.useRef([e, (...n) => t[0](...n)]).current;
    return (
      ag(() => {
        t[0] = e;
      }),
      t[1]
    );
  },
  ug = "popstate",
  Za = "pushState",
  Ja = "replaceState",
  cg = "hashchange",
  Lc = [ug, Za, Ja, cg],
  dg = (e) => {
    for (const t of Lc) addEventListener(t, e);
    return () => {
      for (const t of Lc) removeEventListener(t, e);
    };
  },
  Fp = (e, t) => og.useSyncExternalStore(dg, e, t),
  fg = () => location.search,
  pg = ({ ssrSearch: e = "" } = {}) => Fp(fg, () => e),
  Mc = () => location.pathname,
  hg = ({ ssrPath: e } = {}) => Fp(Mc, e ? () => e : Mc),
  mg = (e, { replace: t = !1, state: n = null } = {}) =>
    history[t ? Ja : Za](n, "", e),
  vg = (e = {}) => [hg(e), mg],
  Dc = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Dc] > "u") {
  for (const e of [Za, Ja]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments),
        r = new Event(e);
      return (r.arguments = arguments), dispatchEvent(r), n;
    };
  }
  Object.defineProperty(window, Dc, { value: !0 });
}
const yg = (e, t) =>
    t.toLowerCase().indexOf(e.toLowerCase())
      ? "~" + t
      : t.slice(e.length) || "/",
  zp = (e = "") => (e === "/" ? "" : e),
  gg = (e, t) => (e[0] === "~" ? e.slice(1) : zp(t) + e),
  xg = (e = "", t) => yg(Ic(zp(e)), Ic(t)),
  Ic = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  $p = {
    hook: vg,
    searchHook: pg,
    parser: Gy,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (e) => e,
  },
  Up = x.createContext($p),
  as = () => x.useContext(Up),
  Vp = {},
  Hp = x.createContext(Vp),
  wg = () => x.useContext(Hp),
  eu = (e) => {
    const [t, n] = e.hook(e);
    return [xg(e.base, t), Ip((r, o) => n(gg(r, e.base), o))];
  },
  Bp = (e, t, n, r) => {
    const { pattern: o, keys: i } =
        t instanceof RegExp ? { keys: !1, pattern: t } : e(t || "*", r),
      s = o.exec(n) || [],
      [l, ...a] = s;
    return l !== void 0
      ? [
          !0,
          (() => {
            const u =
              i !== !1
                ? Object.fromEntries(i.map((p, h) => [p, a[h]]))
                : s.groups;
            let c = { ...a };
            return u && Object.assign(c, u), c;
          })(),
          ...(r ? [l] : []),
        ]
      : [!1, null];
  },
  Sg = ({ children: e, ...t }) => {
    var c, p;
    const n = as(),
      r = t.hook ? $p : n;
    let o = r;
    const [i, s] = ((c = t.ssrPath) == null ? void 0 : c.split("?")) ?? [];
    s && ((t.ssrSearch = s), (t.ssrPath = i)),
      (t.hrefs = t.hrefs ?? ((p = t.hook) == null ? void 0 : p.hrefs));
    let l = x.useRef({}),
      a = l.current,
      u = a;
    for (let h in r) {
      const g = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
      a === u && g !== u[h] && (l.current = u = { ...u }),
        (u[h] = g),
        g !== r[h] && (o = u);
    }
    return x.createElement(Up.Provider, { value: o, children: e });
  },
  Fc = ({ children: e, component: t }, n) =>
    t ? x.createElement(t, { params: n }) : typeof e == "function" ? e(n) : e,
  Eg = (e) => {
    let t = x.useRef(Vp),
      n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e), (t.current = n);
  },
  zc = ({ path: e, nest: t, match: n, ...r }) => {
    const o = as(),
      [i] = eu(o),
      [s, l, a] = n ?? Bp(o.parser, e, i, t),
      u = Eg({ ...wg(), ...l });
    if (!s) return null;
    const c = a ? x.createElement(Sg, { base: a }, Fc(r, u)) : Fc(r, u);
    return x.createElement(Hp.Provider, { value: u, children: c });
  };
x.forwardRef((e, t) => {
  const n = as(),
    [r, o] = eu(n),
    {
      to: i = "",
      href: s = i,
      onClick: l,
      asChild: a,
      children: u,
      className: c,
      replace: p,
      state: h,
      ...g
    } = e,
    S = Ip((w) => {
      w.ctrlKey ||
        w.metaKey ||
        w.altKey ||
        w.shiftKey ||
        w.button !== 0 ||
        (l == null || l(w),
        w.defaultPrevented || (w.preventDefault(), o(s, e)));
    }),
    y = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
  return a && x.isValidElement(u)
    ? x.cloneElement(u, { onClick: S, href: y })
    : x.createElement("a", {
        ...g,
        onClick: S,
        href: y,
        className: c != null && c.call ? c(r === s) : c,
        children: u,
        ref: t,
      });
});
const Wp = (e) =>
    Array.isArray(e)
      ? e.flatMap((t) => Wp(t && t.type === x.Fragment ? t.props.children : t))
      : [e],
  Cg = ({ children: e, location: t }) => {
    const n = as(),
      [r] = eu(n);
    for (const o of Wp(e)) {
      let i = 0;
      if (
        x.isValidElement(o) &&
        (i = Bp(n.parser, o.props.path, t || r, o.props.nest))[0]
      )
        return x.cloneElement(o, { match: i });
    }
    return null;
  };
var us = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  cs = typeof window > "u" || "Deno" in globalThis;
function tt() {}
function kg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pg(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Tg(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function $c(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ng(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Uc(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== tu(s, t.options)) return !1;
    } else if (!So(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Vc(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (wo(t.options.mutationKey) !== wo(i)) return !1;
    } else if (!So(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function tu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || wo)(e);
}
function wo(e) {
  return JSON.stringify(e, (t, n) =>
    Kl(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function So(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !So(e[n], t[n]))
    : !1;
}
function Qp(e, t) {
  if (e === t) return e;
  const n = Hc(e) && Hc(t);
  if (n || (Kl(e) && Kl(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < s; u++) {
      const c = n ? u : i[u];
      ((!n && r.includes(c)) || n) && e[c] === void 0 && t[c] === void 0
        ? ((l[c] = void 0), a++)
        : ((l[c] = Qp(e[c], t[c])), l[c] === e[c] && e[c] !== void 0 && a++);
    }
    return o === s && a === o ? e : l;
  }
  return t;
}
function Hc(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Kl(e) {
  if (!Bc(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Bc(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Bc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Rg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Og(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Qp(e, t)
    : t;
}
function _g(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function jg(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var nu = Symbol();
function Kp(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === nu
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Cn,
  Kt,
  ir,
  fd,
  bg =
    ((fd = class extends us {
      constructor() {
        super();
        K(this, Cn);
        K(this, Kt);
        K(this, ir);
        F(this, ir, (t) => {
          if (!cs && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, Kt) || this.setEventListener(T(this, ir));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, Kt)) == null || t.call(this), F(this, Kt, void 0));
      }
      setEventListener(t) {
        var n;
        F(this, ir, t),
          (n = T(this, Kt)) == null || n.call(this),
          F(
            this,
            Kt,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        T(this, Cn) !== t && (F(this, Cn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof T(this, Cn) == "boolean"
          ? T(this, Cn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Cn = new WeakMap()),
    (Kt = new WeakMap()),
    (ir = new WeakMap()),
    fd),
  Gp = new bg(),
  sr,
  Gt,
  lr,
  pd,
  Ag =
    ((pd = class extends us {
      constructor() {
        super();
        K(this, sr, !0);
        K(this, Gt);
        K(this, lr);
        F(this, lr, (t) => {
          if (!cs && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, Gt) || this.setEventListener(T(this, lr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, Gt)) == null || t.call(this), F(this, Gt, void 0));
      }
      setEventListener(t) {
        var n;
        F(this, lr, t),
          (n = T(this, Gt)) == null || n.call(this),
          F(this, Gt, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        T(this, sr) !== t &&
          (F(this, sr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return T(this, sr);
      }
    }),
    (sr = new WeakMap()),
    (Gt = new WeakMap()),
    (lr = new WeakMap()),
    pd),
  Ui = new Ag();
function Lg() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function Mg(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Yp(e) {
  return (e ?? "online") === "online" ? Ui.isOnline() : !0;
}
var Xp = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Gs(e) {
  return e instanceof Xp;
}
function qp(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = Lg(),
    s = (y) => {
      var w;
      r || (h(new Xp(y)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Gp.isFocused() &&
      (e.networkMode === "always" || Ui.isOnline()) &&
      e.canRun(),
    c = () => Yp(e.networkMode) && e.canRun(),
    p = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, y),
        o == null || o(),
        i.resolve(y));
    },
    h = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, y),
        o == null || o(),
        i.reject(y));
    },
    g = () =>
      new Promise((y) => {
        var w;
        (o = (f) => {
          (r || u()) && y(f);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var y;
        (o = void 0), r || (y = e.onContinue) == null || y.call(e);
      }),
    S = () => {
      if (r) return;
      let y;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        y = w ?? e.fn();
      } catch (f) {
        y = Promise.reject(f);
      }
      Promise.resolve(y)
        .then(p)
        .catch((f) => {
          var k;
          if (r) return;
          const d = e.retry ?? (cs ? 0 : 3),
            m = e.retryDelay ?? Mg,
            E = typeof m == "function" ? m(n, f) : m,
            C =
              d === !0 ||
              (typeof d == "number" && n < d) ||
              (typeof d == "function" && d(n, f));
          if (t || !C) {
            h(f);
            return;
          }
          n++,
            (k = e.onFail) == null || k.call(e, n, f),
            Rg(E)
              .then(() => (u() ? void 0 : g()))
              .then(() => {
                t ? h(f) : S();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: c,
    start: () => (c() ? S() : g().then(S), i),
  };
}
function Dg() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var ke = Dg(),
  kn,
  hd,
  Zp =
    ((hd = class {
      constructor() {
        K(this, kn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Pg(this.gcTime) &&
            F(
              this,
              kn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (cs ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        T(this, kn) && (clearTimeout(T(this, kn)), F(this, kn, void 0));
      }
    }),
    (kn = new WeakMap()),
    hd),
  ar,
  ur,
  We,
  xe,
  ko,
  Pn,
  nt,
  Pt,
  md,
  Ig =
    ((md = class extends Zp {
      constructor(t) {
        super();
        K(this, nt);
        K(this, ar);
        K(this, ur);
        K(this, We);
        K(this, xe);
        K(this, ko);
        K(this, Pn);
        F(this, Pn, !1),
          F(this, ko, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          F(this, We, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          F(this, ar, zg(this.options)),
          (this.state = t.state ?? T(this, ar)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = T(this, xe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...T(this, ko), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          T(this, We).remove(this);
      }
      setData(t, n) {
        const r = Og(this.state.data, t, this.options);
        return (
          ve(this, nt, Pt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ve(this, nt, Pt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = T(this, xe)) == null ? void 0 : r.promise;
        return (
          (o = T(this, xe)) == null || o.cancel(t),
          n ? n.then(tt).catch(tt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(T(this, ar));
      }
      isActive() {
        return this.observers.some((t) => Ng(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === nu ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Tg(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, xe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, xe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          T(this, We).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (T(this, xe) &&
              (T(this, Pn)
                ? T(this, xe).cancel({ revert: !0 })
                : T(this, xe).cancelRetry()),
            this.scheduleGc()),
          T(this, We).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ve(this, nt, Pt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var a, u, c;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (T(this, xe))
            return T(this, xe).continueRetry(), T(this, xe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const p = this.observers.find((h) => h.options.queryFn);
          p && this.setOptions(p.options);
        }
        const r = new AbortController(),
          o = (p) => {
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: () => (F(this, Pn, !0), r.signal),
            });
          },
          i = () => {
            const p = Kp(this.options, n),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(h),
              F(this, Pn, !1),
              this.options.persister ? this.options.persister(p, h, this) : p(h)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        o(s),
          (a = this.options.behavior) == null || a.onFetch(s, this),
          F(this, ur, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            ve(this, nt, Pt).call(this, {
              type: "fetch",
              meta: (c = s.fetchOptions) == null ? void 0 : c.meta,
            });
        const l = (p) => {
          var h, g, S, y;
          (Gs(p) && p.silent) ||
            ve(this, nt, Pt).call(this, { type: "error", error: p }),
            Gs(p) ||
              ((g = (h = T(this, We).config).onError) == null ||
                g.call(h, p, this),
              (y = (S = T(this, We).config).onSettled) == null ||
                y.call(S, this.state.data, p, this)),
            this.scheduleGc();
        };
        return (
          F(
            this,
            xe,
            qp({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (p) => {
                var h, g, S, y;
                if (p === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(p);
                } catch (w) {
                  l(w);
                  return;
                }
                (g = (h = T(this, We).config).onSuccess) == null ||
                  g.call(h, p, this),
                  (y = (S = T(this, We).config).onSettled) == null ||
                    y.call(S, p, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (p, h) => {
                ve(this, nt, Pt).call(this, {
                  type: "failed",
                  failureCount: p,
                  error: h,
                });
              },
              onPause: () => {
                ve(this, nt, Pt).call(this, { type: "pause" });
              },
              onContinue: () => {
                ve(this, nt, Pt).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            })
          ),
          T(this, xe).start()
        );
      }
    }),
    (ar = new WeakMap()),
    (ur = new WeakMap()),
    (We = new WeakMap()),
    (xe = new WeakMap()),
    (ko = new WeakMap()),
    (Pn = new WeakMap()),
    (nt = new WeakSet()),
    (Pt = function (t) {
      const n = (r) => {
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
              ...Fg(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
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
            const o = t.error;
            return Gs(o) && o.revert && T(this, ur)
              ? { ...T(this, ur), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
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
        ke.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            T(this, We).notify({ query: this, type: "updated", action: t });
        });
    }),
    md);
function Fg(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Yp(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function zg(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
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
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var pt,
  vd,
  $g =
    ((vd = class extends us {
      constructor(t = {}) {
        super();
        K(this, pt);
        (this.config = t), F(this, pt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? tu(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new Ig({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        T(this, pt).has(t.queryHash) ||
          (T(this, pt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = T(this, pt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && T(this, pt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        ke.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return T(this, pt).get(t);
      }
      getAll() {
        return [...T(this, pt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Uc(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Uc(t, r)) : n;
      }
      notify(t) {
        ke.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        ke.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        ke.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (pt = new WeakMap()),
    vd),
  ht,
  Ee,
  Tn,
  mt,
  Vt,
  yd,
  Ug =
    ((yd = class extends Zp {
      constructor(t) {
        super();
        K(this, mt);
        K(this, ht);
        K(this, Ee);
        K(this, Tn);
        (this.mutationId = t.mutationId),
          F(this, Ee, t.mutationCache),
          F(this, ht, []),
          (this.state = t.state || Vg()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        T(this, ht).includes(t) ||
          (T(this, ht).push(t),
          this.clearGcTimeout(),
          T(this, Ee).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        F(
          this,
          ht,
          T(this, ht).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          T(this, Ee).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        T(this, ht).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : T(this, Ee).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = T(this, Tn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, s, l, a, u, c, p, h, g, S, y, w, f, d, m, E, C, k, P;
        F(
          this,
          Tn,
          qp({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, L) => {
              ve(this, mt, Vt).call(this, {
                type: "failed",
                failureCount: R,
                error: L,
              });
            },
            onPause: () => {
              ve(this, mt, Vt).call(this, { type: "pause" });
            },
            onContinue: () => {
              ve(this, mt, Vt).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, Ee).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !T(this, Tn).canStart();
        try {
          if (!n) {
            ve(this, mt, Vt).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (o = T(this, Ee).config).onMutate) == null
                ? void 0
                : i.call(o, t, this));
            const L = await ((l = (s = this.options).onMutate) == null
              ? void 0
              : l.call(s, t));
            L !== this.state.context &&
              ve(this, mt, Vt).call(this, {
                type: "pending",
                context: L,
                variables: t,
                isPaused: r,
              });
          }
          const R = await T(this, Tn).start();
          return (
            await ((u = (a = T(this, Ee).config).onSuccess) == null
              ? void 0
              : u.call(a, R, t, this.state.context, this)),
            await ((p = (c = this.options).onSuccess) == null
              ? void 0
              : p.call(c, R, t, this.state.context)),
            await ((g = (h = T(this, Ee).config).onSettled) == null
              ? void 0
              : g.call(
                  h,
                  R,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((y = (S = this.options).onSettled) == null
              ? void 0
              : y.call(S, R, null, t, this.state.context)),
            ve(this, mt, Vt).call(this, { type: "success", data: R }),
            R
          );
        } catch (R) {
          try {
            throw (
              (await ((f = (w = T(this, Ee).config).onError) == null
                ? void 0
                : f.call(w, R, t, this.state.context, this)),
              await ((m = (d = this.options).onError) == null
                ? void 0
                : m.call(d, R, t, this.state.context)),
              await ((C = (E = T(this, Ee).config).onSettled) == null
                ? void 0
                : C.call(
                    E,
                    void 0,
                    R,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((P = (k = this.options).onSettled) == null
                ? void 0
                : P.call(k, void 0, R, t, this.state.context)),
              R)
            );
          } finally {
            ve(this, mt, Vt).call(this, { type: "error", error: R });
          }
        } finally {
          T(this, Ee).runNext(this);
        }
      }
    }),
    (ht = new WeakMap()),
    (Ee = new WeakMap()),
    (Tn = new WeakMap()),
    (mt = new WeakSet()),
    (Vt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
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
        }
      };
      (this.state = n(this.state)),
        ke.batch(() => {
          T(this, ht).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            T(this, Ee).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    yd);
function Vg() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Le,
  Po,
  gd,
  Hg =
    ((gd = class extends us {
      constructor(t = {}) {
        super();
        K(this, Le);
        K(this, Po);
        (this.config = t), F(this, Le, new Map()), F(this, Po, Date.now());
      }
      build(t, n, r) {
        const o = new Ug({
          mutationCache: this,
          mutationId: ++Lo(this, Po)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        const n = Zo(t),
          r = T(this, Le).get(n) ?? [];
        r.push(t),
          T(this, Le).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = Zo(t);
        if (T(this, Le).has(n)) {
          const o =
            (r = T(this, Le).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? T(this, Le).delete(n) : T(this, Le).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = T(this, Le).get(Zo(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = T(this, Le).get(Zo(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        ke.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...T(this, Le).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Vc(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Vc(t, n));
      }
      notify(t) {
        ke.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return ke.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(tt)))
        );
      }
    }),
    (Le = new WeakMap()),
    (Po = new WeakMap()),
    gd);
function Zo(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function Wc(e) {
  return {
    onFetch: (t, n) => {
      var c, p, h, g, S;
      const r = t.options,
        o =
          (h =
            (p = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((g = t.state.data) == null ? void 0 : g.pages) || [],
        s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let y = !1;
        const w = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          f = Kp(t.options, t.fetchOptions),
          d = async (m, E, C) => {
            if (y) return Promise.reject();
            if (E == null && m.pages.length) return Promise.resolve(m);
            const k = {
              queryKey: t.queryKey,
              pageParam: E,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            w(k);
            const P = await f(k),
              { maxPages: R } = t.options,
              L = C ? jg : _g;
            return {
              pages: L(m.pages, P, R),
              pageParams: L(m.pageParams, E, R),
            };
          };
        if (o && i.length) {
          const m = o === "backward",
            E = m ? Bg : Qc,
            C = { pages: i, pageParams: s },
            k = E(r, C);
          l = await d(C, k, m);
        } else {
          const m = e ?? i.length;
          do {
            const E = a === 0 ? s[0] ?? r.initialPageParam : Qc(r, l);
            if (a > 0 && E == null) break;
            (l = await d(l, E)), a++;
          } while (a < m);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, w;
            return (w = (y = t.options).persister) == null
              ? void 0
              : w.call(
                  y,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Qc(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Bg(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var oe,
  Yt,
  Xt,
  cr,
  dr,
  qt,
  fr,
  pr,
  xd,
  Wg =
    ((xd = class {
      constructor(e = {}) {
        K(this, oe);
        K(this, Yt);
        K(this, Xt);
        K(this, cr);
        K(this, dr);
        K(this, qt);
        K(this, fr);
        K(this, pr);
        F(this, oe, e.queryCache || new $g()),
          F(this, Yt, e.mutationCache || new Hg()),
          F(this, Xt, e.defaultOptions || {}),
          F(this, cr, new Map()),
          F(this, dr, new Map()),
          F(this, qt, 0);
      }
      mount() {
        Lo(this, qt)._++,
          T(this, qt) === 1 &&
            (F(
              this,
              fr,
              Gp.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, oe).onFocus());
              })
            ),
            F(
              this,
              pr,
              Ui.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, oe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Lo(this, qt)._--,
          T(this, qt) === 0 &&
            ((e = T(this, fr)) == null || e.call(this),
            F(this, fr, void 0),
            (t = T(this, pr)) == null || t.call(this),
            F(this, pr, void 0));
      }
      isFetching(e) {
        return T(this, oe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return T(this, Yt).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, oe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = T(this, oe).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime($c(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return T(this, oe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = T(this, oe).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = kg(t, i);
        if (s !== void 0)
          return T(this, oe)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return ke.batch(() =>
          T(this, oe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, oe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = T(this, oe);
        ke.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = T(this, oe),
          r = { type: "active", ...e };
        return ke.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = ke.batch(() =>
            T(this, oe)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(tt).catch(tt);
      }
      invalidateQueries(e = {}, t = {}) {
        return ke.batch(() => {
          if (
            (T(this, oe)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = ke.batch(() =>
            T(this, oe)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(tt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(tt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = T(this, oe).build(this, t);
        return n.isStaleByTime($c(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(tt).catch(tt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Wc(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(tt).catch(tt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Wc(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ui.isOnline()
          ? T(this, Yt).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return T(this, oe);
      }
      getMutationCache() {
        return T(this, Yt);
      }
      getDefaultOptions() {
        return T(this, Xt);
      }
      setDefaultOptions(e) {
        F(this, Xt, e);
      }
      setQueryDefaults(e, t) {
        T(this, cr).set(wo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...T(this, cr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            So(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        T(this, dr).set(wo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...T(this, dr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            So(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...T(this, Xt).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = tu(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === nu && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...T(this, Xt).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        T(this, oe).clear(), T(this, Yt).clear();
      }
    }),
    (oe = new WeakMap()),
    (Yt = new WeakMap()),
    (Xt = new WeakMap()),
    (cr = new WeakMap()),
    (dr = new WeakMap()),
    (qt = new WeakMap()),
    (fr = new WeakMap()),
    (pr = new WeakMap()),
    xd),
  Qg = x.createContext(void 0),
  Kg = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    v.jsx(Qg.Provider, { value: e, children: t })
  );
async function Gg(e) {
  if (!e.ok) {
    const t = (await e.text()) || e.statusText;
    throw new Error(`${e.status}: ${t}`);
  }
}
const Yg =
    ({ on401: e }) =>
    async ({ queryKey: t }) => {
      const n = await fetch(t.join("/"), { credentials: "include" });
      return e === "returnNull" && n.status === 401
        ? null
        : (await Gg(n), await n.json());
    },
  Xg = new Wg({
    defaultOptions: {
      queries: {
        queryFn: Yg({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  qg = 1,
  Zg = 1e6;
let Ys = 0;
function Jg() {
  return (Ys = (Ys + 1) % Number.MAX_SAFE_INTEGER), Ys.toString();
}
const Xs = new Map(),
  Kc = (e) => {
    if (Xs.has(e)) return;
    const t = setTimeout(() => {
      Xs.delete(e), to({ type: "REMOVE_TOAST", toastId: e });
    }, Zg);
    Xs.set(e, t);
  },
  e0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, qg) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Kc(n)
            : e.toasts.forEach((r) => {
                Kc(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  hi = [];
let mi = { toasts: [] };
function to(e) {
  (mi = e0(mi, e)),
    hi.forEach((t) => {
      t(mi);
    });
}
function t0({ ...e }) {
  const t = Jg(),
    n = (o) => to({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => to({ type: "DISMISS_TOAST", toastId: t });
  return (
    to({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function n0() {
  const [e, t] = x.useState(mi);
  return (
    x.useEffect(
      () => (
        hi.push(t),
        () => {
          const n = hi.indexOf(t);
          n > -1 && hi.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: t0,
      dismiss: (n) => to({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ue(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Gc(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Jp(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Gc(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Gc(e[o], null);
        }
      };
  };
}
function at(...e) {
  return x.useCallback(Jp(...e), e);
}
function ds(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = x.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (p) => {
      var f;
      const { scope: h, children: g, ...S } = p,
        y = ((f = h == null ? void 0 : h[e]) == null ? void 0 : f[a]) || l,
        w = x.useMemo(() => S, Object.values(S));
      return v.jsx(y.Provider, { value: w, children: g });
    };
    u.displayName = i + "Provider";
    function c(p, h) {
      var y;
      const g = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[a]) || l,
        S = x.useContext(g);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, r0(o, ...t)];
}
function r0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(i)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Gl(e) {
  const t = o0(e),
    n = x.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = x.Children.toArray(i),
        a = l.find(s0);
      if (a) {
        const u = a.props.children,
          c = l.map((p) =>
            p === a
              ? x.Children.count(u) > 1
                ? x.Children.only(null)
                : x.isValidElement(u)
                ? u.props.children
                : null
              : p
          );
        return v.jsx(t, {
          ...s,
          ref: o,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null,
        });
      }
      return v.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function o0(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (x.isValidElement(o)) {
      const s = a0(o),
        l = l0(i, o.props);
      return (
        o.type !== x.Fragment && (l.ref = r ? Jp(r, s) : s),
        x.cloneElement(o, l)
      );
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var eh = Symbol("radix.slottable");
function i0(e) {
  const t = ({ children: n }) => v.jsx(v.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = eh), t;
}
function s0(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === eh
  );
}
function l0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function a0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function u0(e) {
  const t = e + "CollectionProvider",
    [n, r] = ds(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (y) => {
      const { scope: w, children: f } = y,
        d = Ut.useRef(null),
        m = Ut.useRef(new Map()).current;
      return v.jsx(o, { scope: w, itemMap: m, collectionRef: d, children: f });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = Gl(l),
    u = Ut.forwardRef((y, w) => {
      const { scope: f, children: d } = y,
        m = i(l, f),
        E = at(w, m.collectionRef);
      return v.jsx(a, { ref: E, children: d });
    });
  u.displayName = l;
  const c = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    h = Gl(c),
    g = Ut.forwardRef((y, w) => {
      const { scope: f, children: d, ...m } = y,
        E = Ut.useRef(null),
        C = at(w, E),
        k = i(c, f);
      return (
        Ut.useEffect(
          () => (
            k.itemMap.set(E, { ref: E, ...m }), () => void k.itemMap.delete(E)
          )
        ),
        v.jsx(h, { [p]: "", ref: C, children: d })
      );
    });
  g.displayName = c;
  function S(y) {
    const w = i(e + "CollectionConsumer", y);
    return Ut.useCallback(() => {
      const d = w.collectionRef.current;
      if (!d) return [];
      const m = Array.from(d.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (k, P) => m.indexOf(k.ref.current) - m.indexOf(P.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: g }, S, r];
}
var c0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ae = c0.reduce((e, t) => {
    const n = Gl(`Primitive.${t}`),
      r = x.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          v.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function th(e, t) {
  e && jo.flushSync(() => e.dispatchEvent(t));
}
function wt(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function d0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var f0 = "DismissableLayer",
  Yl = "dismissableLayer.update",
  p0 = "dismissableLayer.pointerDownOutside",
  h0 = "dismissableLayer.focusOutside",
  Yc,
  nh = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ru = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = x.useContext(nh),
      [c, p] = x.useState(null),
      h =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = x.useState({}),
      S = at(t, (P) => p(P)),
      y = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      f = y.indexOf(w),
      d = c ? y.indexOf(c) : -1,
      m = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = d >= f,
      C = v0((P) => {
        const R = P.target,
          L = [...u.branches].some((b) => b.contains(R));
        !E ||
          L ||
          (o == null || o(P),
          s == null || s(P),
          P.defaultPrevented || l == null || l());
      }, h),
      k = y0((P) => {
        const R = P.target;
        [...u.branches].some((b) => b.contains(R)) ||
          (i == null || i(P),
          s == null || s(P),
          P.defaultPrevented || l == null || l());
      }, h);
    return (
      d0((P) => {
        d === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && l && (P.preventDefault(), l()));
      }, h),
      x.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Yc = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Xc(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Yc);
            }
          );
      }, [c, h, n, u]),
      x.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Xc());
        },
        [c, u]
      ),
      x.useEffect(() => {
        const P = () => g({});
        return (
          document.addEventListener(Yl, P),
          () => document.removeEventListener(Yl, P)
        );
      }, []),
      v.jsx(Ae.div, {
        ...a,
        ref: S,
        style: {
          pointerEvents: m ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ue(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ue(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ue(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
ru.displayName = f0;
var m0 = "DismissableLayerBranch",
  rh = x.forwardRef((e, t) => {
    const n = x.useContext(nh),
      r = x.useRef(null),
      o = at(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      v.jsx(Ae.div, { ...e, ref: o })
    );
  });
rh.displayName = m0;
function v0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              oh(p0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function y0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = wt(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          oh(h0, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Xc() {
  const e = new CustomEvent(Yl);
  document.dispatchEvent(e);
}
function oh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? th(o, i) : o.dispatchEvent(i);
}
var g0 = ru,
  x0 = rh,
  Ln = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  w0 = "Portal",
  ih = x.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = x.useState(!1);
    Ln(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? Ky.createPortal(v.jsx(Ae.div, { ...r, ref: t }), s) : null;
  });
ih.displayName = w0;
function S0(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var ou = (e) => {
  const { present: t, children: n } = e,
    r = E0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = at(r.ref, C0(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: i })
    : null;
};
ou.displayName = "Presence";
function E0(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    o = x.useRef(e),
    i = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = S0(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = Jo(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    Ln(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const h = i.current,
          g = Jo(u);
        e
          ? a("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(c && h !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    Ln(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          p = (g) => {
            const y = Jo(r.current).includes(g.animationName);
            if (g.target === t && y && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          h = (g) => {
            g.target === t && (i.current = Jo(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: x.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Jo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function C0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function k0({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = P0({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    l = wt(n),
    a = x.useCallback(
      (u) => {
        if (i) {
          const p = typeof u == "function" ? u(e) : u;
          p !== e && l(p);
        } else o(u);
      },
      [i, e, o, l]
    );
  return [s, a];
}
function P0({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    o = x.useRef(r),
    i = wt(t);
  return (
    x.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var T0 = "VisuallyHidden",
  fs = x.forwardRef((e, t) =>
    v.jsx(Ae.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
fs.displayName = T0;
var N0 = fs,
  iu = "ToastProvider",
  [su, R0, O0] = u0("Toast"),
  [sh, j1] = ds("Toast", [O0]),
  [_0, ps] = sh(iu),
  lh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = x.useState(null),
      [u, c] = x.useState(0),
      p = x.useRef(!1),
      h = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${iu}\`. Expected non-empty \`string\`.`
        ),
      v.jsx(su.Provider, {
        scope: t,
        children: v.jsx(_0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: x.useCallback(() => c((g) => g + 1), []),
          onToastRemove: x.useCallback(() => c((g) => g - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: h,
          children: s,
        }),
      })
    );
  };
lh.displayName = iu;
var ah = "ToastViewport",
  j0 = ["F8"],
  Xl = "toast.viewportPause",
  ql = "toast.viewportResume",
  uh = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = j0,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = ps(ah, n),
      l = R0(n),
      a = x.useRef(null),
      u = x.useRef(null),
      c = x.useRef(null),
      p = x.useRef(null),
      h = at(t, p, s.onViewportChange),
      g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = s.toastCount > 0;
    x.useEffect(() => {
      const w = (f) => {
        var m;
        r.length !== 0 &&
          r.every((E) => f[E] || f.code === E) &&
          ((m = p.current) == null || m.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      x.useEffect(() => {
        const w = a.current,
          f = p.current;
        if (S && w && f) {
          const d = () => {
              if (!s.isClosePausedRef.current) {
                const k = new CustomEvent(Xl);
                f.dispatchEvent(k), (s.isClosePausedRef.current = !0);
              }
            },
            m = () => {
              if (s.isClosePausedRef.current) {
                const k = new CustomEvent(ql);
                f.dispatchEvent(k), (s.isClosePausedRef.current = !1);
              }
            },
            E = (k) => {
              !w.contains(k.relatedTarget) && m();
            },
            C = () => {
              w.contains(document.activeElement) || m();
            };
          return (
            w.addEventListener("focusin", d),
            w.addEventListener("focusout", E),
            w.addEventListener("pointermove", d),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", d),
            window.addEventListener("focus", m),
            () => {
              w.removeEventListener("focusin", d),
                w.removeEventListener("focusout", E),
                w.removeEventListener("pointermove", d),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", d),
                window.removeEventListener("focus", m);
            }
          );
        }
      }, [S, s.isClosePausedRef]);
    const y = x.useCallback(
      ({ tabbingDirection: w }) => {
        const d = l().map((m) => {
          const E = m.ref.current,
            C = [E, ...B0(E)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? d.reverse() : d).flat();
      },
      [l]
    );
    return (
      x.useEffect(() => {
        const w = p.current;
        if (w) {
          const f = (d) => {
            var C, k, P;
            const m = d.altKey || d.ctrlKey || d.metaKey;
            if (d.key === "Tab" && !m) {
              const R = document.activeElement,
                L = d.shiftKey;
              if (d.target === w && L) {
                (C = u.current) == null || C.focus();
                return;
              }
              const M = y({ tabbingDirection: L ? "backwards" : "forwards" }),
                H = M.findIndex((A) => A === R);
              qs(M.slice(H + 1))
                ? d.preventDefault()
                : L
                ? (k = u.current) == null || k.focus()
                : (P = c.current) == null || P.focus();
            }
          };
          return (
            w.addEventListener("keydown", f),
            () => w.removeEventListener("keydown", f)
          );
        }
      }, [l, y]),
      v.jsxs(x0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
            v.jsx(Zl, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "forwards" });
                qs(w);
              },
            }),
          v.jsx(su.Slot, {
            scope: n,
            children: v.jsx(Ae.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          S &&
            v.jsx(Zl, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "backwards" });
                qs(w);
              },
            }),
        ],
      })
    );
  });
uh.displayName = ah;
var ch = "ToastFocusProxy",
  Zl = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = ps(ch, n);
    return v.jsx(fs, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Zl.displayName = ch;
var hs = "Toast",
  b0 = "toast.swipeStart",
  A0 = "toast.swipeMove",
  L0 = "toast.swipeCancel",
  M0 = "toast.swipeEnd",
  dh = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l = !0, a] = k0({ prop: r, defaultProp: o, onChange: i });
    return v.jsx(ou, {
      present: n || l,
      children: v.jsx(F0, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: wt(e.onPause),
        onResume: wt(e.onResume),
        onSwipeStart: ue(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ue(e.onSwipeMove, (u) => {
          const { x: c, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`
            );
        }),
        onSwipeCancel: ue(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ue(e.onSwipeEnd, (u) => {
          const { x: c, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`
            ),
            a(!1);
        }),
      }),
    });
  });
dh.displayName = hs;
var [D0, I0] = sh(hs, { onClose() {} }),
  F0 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: p,
        onSwipeCancel: h,
        onSwipeEnd: g,
        ...S
      } = e,
      y = ps(hs, n),
      [w, f] = x.useState(null),
      d = at(t, (A) => f(A)),
      m = x.useRef(null),
      E = x.useRef(null),
      C = o || y.duration,
      k = x.useRef(0),
      P = x.useRef(C),
      R = x.useRef(0),
      { onToastAdd: L, onToastRemove: b } = y,
      z = wt(() => {
        var Q;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((Q = y.viewport) == null || Q.focus()),
          s();
      }),
      M = x.useCallback(
        (A) => {
          !A ||
            A === 1 / 0 ||
            (window.clearTimeout(R.current),
            (k.current = new Date().getTime()),
            (R.current = window.setTimeout(z, A)));
        },
        [z]
      );
    x.useEffect(() => {
      const A = y.viewport;
      if (A) {
        const Q = () => {
            M(P.current), u == null || u();
          },
          U = () => {
            const W = new Date().getTime() - k.current;
            (P.current = P.current - W),
              window.clearTimeout(R.current),
              a == null || a();
          };
        return (
          A.addEventListener(Xl, U),
          A.addEventListener(ql, Q),
          () => {
            A.removeEventListener(Xl, U), A.removeEventListener(ql, Q);
          }
        );
      }
    }, [y.viewport, C, a, u, M]),
      x.useEffect(() => {
        i && !y.isClosePausedRef.current && M(C);
      }, [i, C, y.isClosePausedRef, M]),
      x.useEffect(() => (L(), () => b()), [L, b]);
    const H = x.useMemo(() => (w ? gh(w) : null), [w]);
    return y.viewport
      ? v.jsxs(v.Fragment, {
          children: [
            H &&
              v.jsx(z0, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: H,
              }),
            v.jsx(D0, {
              scope: n,
              onClose: z,
              children: jo.createPortal(
                v.jsx(su.ItemSlot, {
                  scope: n,
                  children: v.jsx(g0, {
                    asChild: !0,
                    onEscapeKeyDown: ue(l, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || z(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: v.jsx(Ae.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...S,
                      ref: d,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ue(e.onKeyDown, (A) => {
                        A.key === "Escape" &&
                          (l == null || l(A.nativeEvent),
                          A.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: ue(e.onPointerDown, (A) => {
                        A.button === 0 &&
                          (m.current = { x: A.clientX, y: A.clientY });
                      }),
                      onPointerMove: ue(e.onPointerMove, (A) => {
                        if (!m.current) return;
                        const Q = A.clientX - m.current.x,
                          U = A.clientY - m.current.y,
                          W = !!E.current,
                          N = ["left", "right"].includes(y.swipeDirection),
                          _ = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          D = N ? _(0, Q) : 0,
                          $ = N ? 0 : _(0, U),
                          J = A.pointerType === "touch" ? 10 : 2,
                          Ze = { x: D, y: $ },
                          Be = { originalEvent: A, delta: Ze };
                        W
                          ? ((E.current = Ze), ei(A0, p, Be, { discrete: !1 }))
                          : qc(Ze, y.swipeDirection, J)
                          ? ((E.current = Ze),
                            ei(b0, c, Be, { discrete: !1 }),
                            A.target.setPointerCapture(A.pointerId))
                          : (Math.abs(Q) > J || Math.abs(U) > J) &&
                            (m.current = null);
                      }),
                      onPointerUp: ue(e.onPointerUp, (A) => {
                        const Q = E.current,
                          U = A.target;
                        if (
                          (U.hasPointerCapture(A.pointerId) &&
                            U.releasePointerCapture(A.pointerId),
                          (E.current = null),
                          (m.current = null),
                          Q)
                        ) {
                          const W = A.currentTarget,
                            N = { originalEvent: A, delta: Q };
                          qc(Q, y.swipeDirection, y.swipeThreshold)
                            ? ei(M0, g, N, { discrete: !0 })
                            : ei(L0, h, N, { discrete: !0 }),
                            W.addEventListener(
                              "click",
                              (_) => _.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  z0 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = ps(hs, t),
      [i, s] = x.useState(!1),
      [l, a] = x.useState(!1);
    return (
      V0(() => s(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : v.jsx(ih, {
            asChild: !0,
            children: v.jsx(fs, {
              ...r,
              children:
                i && v.jsxs(v.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  $0 = "ToastTitle",
  fh = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return v.jsx(Ae.div, { ...r, ref: t });
  });
fh.displayName = $0;
var U0 = "ToastDescription",
  ph = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return v.jsx(Ae.div, { ...r, ref: t });
  });
ph.displayName = U0;
var hh = "ToastAction",
  mh = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? v.jsx(yh, {
          altText: n,
          asChild: !0,
          children: v.jsx(lu, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${hh}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
mh.displayName = hh;
var vh = "ToastClose",
  lu = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = I0(vh, n);
    return v.jsx(yh, {
      asChild: !0,
      children: v.jsx(Ae.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ue(e.onClick, o.onClose),
      }),
    });
  });
lu.displayName = vh;
var yh = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return v.jsx(Ae.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function gh(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        H0(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...gh(r));
      }
    }),
    t
  );
}
function ei(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? th(o, i) : o.dispatchEvent(i);
}
var qc = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function V0(e = () => {}) {
  const t = wt(e);
  Ln(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function H0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function B0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function qs(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var W0 = lh,
  xh = uh,
  wh = dh,
  Sh = fh,
  Eh = ph,
  Ch = mh,
  kh = lu;
function Ph(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Ph(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Th() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Ph(e)) && (r && (r += " "), (r += t));
  return r;
}
const Zc = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Jc = Th,
  Q0 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Jc(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          p = i == null ? void 0 : i[u];
        if (c === null) return null;
        const h = Zc(c) || Zc(p);
        return o[u][h];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [p, h] = c;
          return h === void 0 || (u[p] = h), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: p, className: h, ...g } = c;
              return Object.entries(g).every((S) => {
                let [y, w] = S;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[y])
                  : { ...i, ...l }[y] === w;
              })
                ? [...u, p, h]
                : u;
            }, []);
    return Jc(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Nh = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var G0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y0 = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    x.createElement(
      "svg",
      {
        ref: a,
        ...G0,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Nh("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, c]) => x.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rh = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, i) =>
    x.createElement(Y0, {
      ref: i,
      iconNode: t,
      className: Nh(`lucide-${K0(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X0 = Rh("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q0 = Rh("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  au = "-",
  Z0 = (e) => {
    const t = ex(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(au);
        return l[0] === "" && l.length !== 1 && l.shift(), Oh(l, t) || J0(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  Oh = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Oh(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(au);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  ed = /^\[(.+)\]$/,
  J0 = (e) => {
    if (ed.test(e)) {
      const t = ed.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  ex = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      nx(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Jl(s, r, i, t);
      }),
      r
    );
  },
  Jl = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : td(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (tx(o)) {
          Jl(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Jl(s, td(t, i), n, r);
      });
    });
  },
  td = (e, t) => {
    let n = e;
    return (
      t.split(au).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  tx = (e) => e.isThemeGetter,
  nx = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  rx = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  _h = "!",
  ox = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          c = 0,
          p;
        for (let w = 0; w < l.length; w++) {
          let f = l[w];
          if (u === 0) {
            if (f === o && (r || l.slice(w, w + i) === t)) {
              a.push(l.slice(c, w)), (c = w + i);
              continue;
            }
            if (f === "/") {
              p = w;
              continue;
            }
          }
          f === "[" ? u++ : f === "]" && u--;
        }
        const h = a.length === 0 ? l : l.substring(c),
          g = h.startsWith(_h),
          S = g ? h.substring(1) : h,
          y = p && p > c ? p - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: g,
          baseClassName: S,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  ix = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  sx = (e) => ({ cache: rx(e.cacheSize), parseClassName: ox(e), ...Z0(e) }),
  lx = /\s+/,
  ax = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(lx);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: c,
          hasImportantModifier: p,
          baseClassName: h,
          maybePostfixModifierPosition: g,
        } = n(u);
      let S = !!g,
        y = r(S ? h.substring(0, g) : h);
      if (!y) {
        if (!S) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((y = r(h)), !y)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        S = !1;
      }
      const w = ix(c).join(":"),
        f = p ? w + _h : w,
        d = f + y;
      if (i.includes(d)) continue;
      i.push(d);
      const m = o(y, S);
      for (let E = 0; E < m.length; ++E) {
        const C = m[E];
        i.push(f + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function ux() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = jh(t)) && (r && (r += " "), (r += n));
  return r;
}
const jh = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = jh(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function cx(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((c, p) => p(c), e());
    return (n = sx(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = ax(a, n);
    return o(a, c), c;
  }
  return function () {
    return i(ux.apply(null, arguments));
  };
}
const X = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  bh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  dx = /^\d+\/\d+$/,
  fx = new Set(["px", "full", "screen"]),
  px = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  hx =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  mx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  vx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  yx =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  kt = (e) => rr(e) || fx.has(e) || dx.test(e),
  zt = (e) => Nr(e, "length", Px),
  rr = (e) => !!e && !Number.isNaN(Number(e)),
  Zs = (e) => Nr(e, "number", rr),
  $r = (e) => !!e && Number.isInteger(Number(e)),
  gx = (e) => e.endsWith("%") && rr(e.slice(0, -1)),
  I = (e) => bh.test(e),
  $t = (e) => px.test(e),
  xx = new Set(["length", "size", "percentage"]),
  wx = (e) => Nr(e, xx, Ah),
  Sx = (e) => Nr(e, "position", Ah),
  Ex = new Set(["image", "url"]),
  Cx = (e) => Nr(e, Ex, Nx),
  kx = (e) => Nr(e, "", Tx),
  Ur = () => !0,
  Nr = (e, t, n) => {
    const r = bh.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Px = (e) => hx.test(e) && !mx.test(e),
  Ah = () => !1,
  Tx = (e) => vx.test(e),
  Nx = (e) => yx.test(e),
  Rx = () => {
    const e = X("colors"),
      t = X("spacing"),
      n = X("blur"),
      r = X("brightness"),
      o = X("borderColor"),
      i = X("borderRadius"),
      s = X("borderSpacing"),
      l = X("borderWidth"),
      a = X("contrast"),
      u = X("grayscale"),
      c = X("hueRotate"),
      p = X("invert"),
      h = X("gap"),
      g = X("gradientColorStops"),
      S = X("gradientColorStopPositions"),
      y = X("inset"),
      w = X("margin"),
      f = X("opacity"),
      d = X("padding"),
      m = X("saturate"),
      E = X("scale"),
      C = X("sepia"),
      k = X("skew"),
      P = X("space"),
      R = X("translate"),
      L = () => ["auto", "contain", "none"],
      b = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", I, t],
      M = () => [I, t],
      H = () => ["", kt, zt],
      A = () => ["auto", rr, I],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      W = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      N = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      _ = () => ["", "0", I],
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [rr, I];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ur],
        spacing: [kt, zt],
        blur: ["none", "", $t, I],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", $t, I],
        borderSpacing: M(),
        borderWidth: H(),
        contrast: $(),
        grayscale: _(),
        hueRotate: $(),
        invert: _(),
        gap: M(),
        gradientColorStops: [e],
        gradientColorStopPositions: [gx, zt],
        inset: z(),
        margin: z(),
        opacity: $(),
        padding: M(),
        saturate: $(),
        scale: $(),
        sepia: _(),
        skew: $(),
        space: M(),
        translate: M(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", I] }],
        container: ["container"],
        columns: [{ columns: [$t] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), I] }],
        overflow: [{ overflow: b() }],
        "overflow-x": [{ "overflow-x": b() }],
        "overflow-y": [{ "overflow-y": b() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", $r, I] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", I] }],
        grow: [{ grow: _() }],
        shrink: [{ shrink: _() }],
        order: [{ order: ["first", "last", "none", $r, I] }],
        "grid-cols": [{ "grid-cols": [Ur] }],
        "col-start-end": [{ col: ["auto", { span: ["full", $r, I] }, I] }],
        "col-start": [{ "col-start": A() }],
        "col-end": [{ "col-end": A() }],
        "grid-rows": [{ "grid-rows": [Ur] }],
        "row-start-end": [{ row: ["auto", { span: [$r, I] }, I] }],
        "row-start": [{ "row-start": A() }],
        "row-end": [{ "row-end": A() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", I] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", I] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...N()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...N(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...N(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [d] }],
        px: [{ px: [d] }],
        py: [{ py: [d] }],
        ps: [{ ps: [d] }],
        pe: [{ pe: [d] }],
        pt: [{ pt: [d] }],
        pr: [{ pr: [d] }],
        pb: [{ pb: [d] }],
        pl: [{ pl: [d] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t] }],
        "min-w": [{ "min-w": [I, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              I,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [$t] },
              $t,
            ],
          },
        ],
        h: [{ h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [I, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", $t, zt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Zs,
            ],
          },
        ],
        "font-family": [{ font: [Ur] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              I,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", rr, Zs] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              kt,
              I,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", I] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", I] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [f] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [f] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", kt, zt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", kt, I] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: M() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              I,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", I] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [f] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), Sx] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", wx] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Cx,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [f] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [f] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [kt, I] }],
        "outline-w": [{ outline: [kt, zt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: H() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [f] }],
        "ring-offset-w": [{ "ring-offset": [kt, zt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", $t, kx] }],
        "shadow-color": [{ shadow: [Ur] }],
        opacity: [{ opacity: [f] }],
        "mix-blend": [{ "mix-blend": [...W(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": W() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", $t, I] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [m] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [f] }],
        "backdrop-saturate": [{ "backdrop-saturate": [m] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              I,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", I] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", I] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [$r, I] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              I,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              I,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": M() }],
        "scroll-mx": [{ "scroll-mx": M() }],
        "scroll-my": [{ "scroll-my": M() }],
        "scroll-ms": [{ "scroll-ms": M() }],
        "scroll-me": [{ "scroll-me": M() }],
        "scroll-mt": [{ "scroll-mt": M() }],
        "scroll-mr": [{ "scroll-mr": M() }],
        "scroll-mb": [{ "scroll-mb": M() }],
        "scroll-ml": [{ "scroll-ml": M() }],
        "scroll-p": [{ "scroll-p": M() }],
        "scroll-px": [{ "scroll-px": M() }],
        "scroll-py": [{ "scroll-py": M() }],
        "scroll-ps": [{ "scroll-ps": M() }],
        "scroll-pe": [{ "scroll-pe": M() }],
        "scroll-pt": [{ "scroll-pt": M() }],
        "scroll-pr": [{ "scroll-pr": M() }],
        "scroll-pb": [{ "scroll-pb": M() }],
        "scroll-pl": [{ "scroll-pl": M() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", I] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [kt, zt, Zs] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Ox = cx(Rx);
function He(...e) {
  return Ox(Th(e));
}
const _x = W0,
  Lh = x.forwardRef(({ className: e, ...t }, n) =>
    v.jsx(xh, {
      ref: n,
      className: He(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Lh.displayName = xh.displayName;
const jx = Q0(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Mh = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    v.jsx(wh, { ref: r, className: He(jx({ variant: t }), e), ...n })
  );
Mh.displayName = wh.displayName;
const bx = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(Ch, {
    ref: n,
    className: He(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
bx.displayName = Ch.displayName;
const Dh = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(kh, {
    ref: n,
    className: He(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: v.jsx(q0, { className: "h-4 w-4" }),
  })
);
Dh.displayName = kh.displayName;
const Ih = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(Sh, { ref: n, className: He("text-sm font-semibold", e), ...t })
);
Ih.displayName = Sh.displayName;
const Fh = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx(Eh, { ref: n, className: He("text-sm opacity-90", e), ...t })
);
Fh.displayName = Eh.displayName;
function Ax() {
  const { toasts: e } = n0();
  return v.jsxs(_x, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return v.jsxs(
          Mh,
          {
            ...i,
            children: [
              v.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && v.jsx(Ih, { children: n }),
                  r && v.jsx(Fh, { children: r }),
                ],
              }),
              o,
              v.jsx(Dh, {}),
            ],
          },
          t
        );
      }),
      v.jsx(Lh, {}),
    ],
  });
}
const Lx = ["top", "right", "bottom", "left"],
  dn = Math.min,
  De = Math.max,
  Vi = Math.round,
  ti = Math.floor,
  xt = (e) => ({ x: e, y: e }),
  Mx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Dx = { start: "end", end: "start" };
function ea(e, t, n) {
  return De(e, dn(t, n));
}
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dt(e) {
  return e.split("-")[0];
}
function Rr(e) {
  return e.split("-")[1];
}
function uu(e) {
  return e === "x" ? "y" : "x";
}
function cu(e) {
  return e === "y" ? "height" : "width";
}
function fn(e) {
  return ["top", "bottom"].includes(Dt(e)) ? "y" : "x";
}
function du(e) {
  return uu(fn(e));
}
function Ix(e, t, n) {
  n === void 0 && (n = !1);
  const r = Rr(e),
    o = du(e),
    i = cu(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Hi(s)), [s, Hi(s)];
}
function Fx(e) {
  const t = Hi(e);
  return [ta(e), t, ta(t)];
}
function ta(e) {
  return e.replace(/start|end/g, (t) => Dx[t]);
}
function zx(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function $x(e, t, n, r) {
  const o = Rr(e);
  let i = zx(Dt(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(ta)))), i
  );
}
function Hi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Mx[t]);
}
function Ux(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function zh(e) {
  return typeof e != "number"
    ? Ux(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Bi(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function nd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = fn(t),
    s = du(t),
    l = cu(s),
    a = Dt(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    h = r[l] / 2 - o[l] / 2;
  let g;
  switch (a) {
    case "top":
      g = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      g = { x: c, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: p };
      break;
    case "left":
      g = { x: r.x - o.width, y: p };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (Rr(t)) {
    case "start":
      g[s] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += h * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Vx = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: p } = nd(u, r, a),
    h = r,
    g = {},
    S = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: w, fn: f } = l[y],
      {
        x: d,
        y: m,
        data: E,
        reset: C,
      } = await f({
        x: c,
        y: p,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: g,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = d ?? c),
      (p = m ?? p),
      (g = { ...g, [w]: { ...g[w], ...E } }),
      C &&
        S <= 50 &&
        (S++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: c, y: p } = nd(u, h, a))),
        (y = -1));
  }
  return { x: c, y: p, placement: h, strategy: o, middlewareData: g };
};
async function Eo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: p = "floating",
      altBoundary: h = !1,
      padding: g = 0,
    } = Mt(t, e),
    S = zh(g),
    w = l[h ? (p === "floating" ? "reference" : "floating") : p],
    f = Bi(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      })
    ),
    d =
      p === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    m = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(m)))
      ? (await (i.getScale == null ? void 0 : i.getScale(m))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Bi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: d,
            offsetParent: m,
            strategy: a,
          })
        : d
    );
  return {
    top: (f.top - C.top + S.top) / E.y,
    bottom: (C.bottom - f.bottom + S.bottom) / E.y,
    left: (f.left - C.left + S.left) / E.x,
    right: (C.right - f.right + S.right) / E.x,
  };
}
const Hx = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = Mt(e, t) || {};
      if (u == null) return {};
      const p = zh(c),
        h = { x: n, y: r },
        g = du(o),
        S = cu(g),
        y = await s.getDimensions(u),
        w = g === "y",
        f = w ? "top" : "left",
        d = w ? "bottom" : "right",
        m = w ? "clientHeight" : "clientWidth",
        E = i.reference[S] + i.reference[g] - h[g] - i.floating[S],
        C = h[g] - i.reference[g],
        k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let P = k ? k[m] : 0;
      (!P || !(await (s.isElement == null ? void 0 : s.isElement(k)))) &&
        (P = l.floating[m] || i.floating[S]);
      const R = E / 2 - C / 2,
        L = P / 2 - y[S] / 2 - 1,
        b = dn(p[f], L),
        z = dn(p[d], L),
        M = b,
        H = P - y[S] - z,
        A = P / 2 - y[S] / 2 + R,
        Q = ea(M, A, H),
        U =
          !a.arrow &&
          Rr(o) != null &&
          A !== Q &&
          i.reference[S] / 2 - (A < M ? b : z) - y[S] / 2 < 0,
        W = U ? (A < M ? A - M : A - H) : 0;
      return {
        [g]: h[g] + W,
        data: {
          [g]: Q,
          centerOffset: A - Q - W,
          ...(U && { alignmentOffset: W }),
        },
        reset: U,
      };
    },
  }),
  Bx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: p = !0,
              fallbackPlacements: h,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: y = !0,
              ...w
            } = Mt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const f = Dt(o),
            d = fn(l),
            m = Dt(l) === l,
            E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = h || (m || !y ? [Hi(l)] : Fx(l)),
            k = S !== "none";
          !h && k && C.push(...$x(l, y, S, E));
          const P = [l, ...C],
            R = await Eo(t, w),
            L = [];
          let b = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && L.push(R[f]), p)) {
            const A = Ix(o, s, E);
            L.push(R[A[0]], R[A[1]]);
          }
          if (
            ((b = [...b, { placement: o, overflows: L }]),
            !L.every((A) => A <= 0))
          ) {
            var z, M;
            const A = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              Q = P[A];
            if (Q)
              return {
                data: { index: A, overflows: b },
                reset: { placement: Q },
              };
            let U =
              (M = b
                .filter((W) => W.overflows[0] <= 0)
                .sort((W, N) => W.overflows[1] - N.overflows[1])[0]) == null
                ? void 0
                : M.placement;
            if (!U)
              switch (g) {
                case "bestFit": {
                  var H;
                  const W =
                    (H = b
                      .filter((N) => {
                        if (k) {
                          const _ = fn(N.placement);
                          return _ === d || _ === "y";
                        }
                        return !0;
                      })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((_) => _ > 0)
                          .reduce((_, D) => _ + D, 0),
                      ])
                      .sort((N, _) => N[1] - _[1])[0]) == null
                      ? void 0
                      : H[0];
                  W && (U = W);
                  break;
                }
                case "initialPlacement":
                  U = l;
                  break;
              }
            if (o !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function rd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function od(e) {
  return Lx.some((t) => e[t] >= 0);
}
const Wx = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Mt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Eo(t, { ...o, elementContext: "reference" }),
              s = rd(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: od(s) },
            };
          }
          case "escaped": {
            const i = await Eo(t, { ...o, altBoundary: !0 }),
              s = rd(i, n.floating);
            return { data: { escapedOffsets: s, escaped: od(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Qx(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Dt(n),
    l = Rr(n),
    a = fn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    c = i && a ? -1 : 1,
    p = Mt(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: S,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    l && typeof S == "number" && (g = l === "end" ? S * -1 : S),
    a ? { x: g * c, y: h * u } : { x: h * u, y: g * c }
  );
}
const Kx = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await Qx(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  Gx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: f, y: d } = w;
                  return { x: f, y: d };
                },
              },
              ...a
            } = Mt(e, t),
            u = { x: n, y: r },
            c = await Eo(t, a),
            p = fn(Dt(o)),
            h = uu(p);
          let g = u[h],
            S = u[p];
          if (i) {
            const w = h === "y" ? "top" : "left",
              f = h === "y" ? "bottom" : "right",
              d = g + c[w],
              m = g - c[f];
            g = ea(d, g, m);
          }
          if (s) {
            const w = p === "y" ? "top" : "left",
              f = p === "y" ? "bottom" : "right",
              d = S + c[w],
              m = S - c[f];
            S = ea(d, S, m);
          }
          const y = l.fn({ ...t, [h]: g, [p]: S });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [h]: i, [p]: s } },
          };
        },
      }
    );
  },
  Yx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Mt(e, t),
            c = { x: n, y: r },
            p = fn(o),
            h = uu(p);
          let g = c[h],
            S = c[p];
          const y = Mt(l, t),
            w =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (a) {
            const m = h === "y" ? "height" : "width",
              E = i.reference[h] - i.floating[m] + w.mainAxis,
              C = i.reference[h] + i.reference[m] - w.mainAxis;
            g < E ? (g = E) : g > C && (g = C);
          }
          if (u) {
            var f, d;
            const m = h === "y" ? "width" : "height",
              E = ["top", "left"].includes(Dt(o)),
              C =
                i.reference[p] -
                i.floating[m] +
                ((E && ((f = s.offset) == null ? void 0 : f[p])) || 0) +
                (E ? 0 : w.crossAxis),
              k =
                i.reference[p] +
                i.reference[m] +
                (E ? 0 : ((d = s.offset) == null ? void 0 : d[p]) || 0) -
                (E ? w.crossAxis : 0);
            S < C ? (S = C) : S > k && (S = k);
          }
          return { [h]: g, [p]: S };
        },
      }
    );
  },
  Xx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = Mt(e, t),
            c = await Eo(t, u),
            p = Dt(o),
            h = Rr(o),
            g = fn(o) === "y",
            { width: S, height: y } = i.floating;
          let w, f;
          p === "top" || p === "bottom"
            ? ((w = p),
              (f =
                h ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((f = p), (w = h === "end" ? "top" : "bottom"));
          const d = y - c.top - c.bottom,
            m = S - c.left - c.right,
            E = dn(y - c[w], d),
            C = dn(S - c[f], m),
            k = !t.middlewareData.shift;
          let P = E,
            R = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = m),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = d),
            k && !h)
          ) {
            const b = De(c.left, 0),
              z = De(c.right, 0),
              M = De(c.top, 0),
              H = De(c.bottom, 0);
            g
              ? (R = S - 2 * (b !== 0 || z !== 0 ? b + z : De(c.left, c.right)))
              : (P =
                  y - 2 * (M !== 0 || H !== 0 ? M + H : De(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: R, availableHeight: P });
          const L = await s.getDimensions(l.floating);
          return S !== L.width || y !== L.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ms() {
  return typeof window < "u";
}
function Or(e) {
  return $h(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ze(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Et(e) {
  var t;
  return (t = ($h(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function $h(e) {
  return ms() ? e instanceof Node || e instanceof ze(e).Node : !1;
}
function ut(e) {
  return ms() ? e instanceof Element || e instanceof ze(e).Element : !1;
}
function St(e) {
  return ms() ? e instanceof HTMLElement || e instanceof ze(e).HTMLElement : !1;
}
function id(e) {
  return !ms() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ze(e).ShadowRoot;
}
function bo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = ct(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function qx(e) {
  return ["table", "td", "th"].includes(Or(e));
}
function vs(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function fu(e) {
  const t = pu(),
    n = ut(e) ? ct(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function Zx(e) {
  let t = pn(e);
  for (; St(t) && !Er(t); ) {
    if (fu(t)) return t;
    if (vs(t)) return null;
    t = pn(t);
  }
  return null;
}
function pu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Er(e) {
  return ["html", "body", "#document"].includes(Or(e));
}
function ct(e) {
  return ze(e).getComputedStyle(e);
}
function ys(e) {
  return ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function pn(e) {
  if (Or(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (id(e) && e.host) || Et(e);
  return id(t) ? t.host : t;
}
function Uh(e) {
  const t = pn(e);
  return Er(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : St(t) && bo(t)
    ? t
    : Uh(t);
}
function Co(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Uh(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = ze(o);
  if (i) {
    const l = na(s);
    return t.concat(
      s,
      s.visualViewport || [],
      bo(o) ? o : [],
      l && n ? Co(l) : []
    );
  }
  return t.concat(o, Co(o, [], n));
}
function na(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vh(e) {
  const t = ct(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = St(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Vi(n) !== i || Vi(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function hu(e) {
  return ut(e) ? e : e.contextElement;
}
function or(e) {
  const t = hu(e);
  if (!St(t)) return xt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Vh(t);
  let s = (i ? Vi(n.width) : n.width) / r,
    l = (i ? Vi(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const Jx = xt(0);
function Hh(e) {
  const t = ze(e);
  return !pu() || !t.visualViewport
    ? Jx
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ew(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ze(e)) ? !1 : t;
}
function Mn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = hu(e);
  let s = xt(1);
  t && (r ? ut(r) && (s = or(r)) : (s = or(e)));
  const l = ew(i, n, r) ? Hh(i) : xt(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    c = o.width / s.x,
    p = o.height / s.y;
  if (i) {
    const h = ze(i),
      g = r && ut(r) ? ze(r) : r;
    let S = h,
      y = na(S);
    for (; y && r && g !== S; ) {
      const w = or(y),
        f = y.getBoundingClientRect(),
        d = ct(y),
        m = f.left + (y.clientLeft + parseFloat(d.paddingLeft)) * w.x,
        E = f.top + (y.clientTop + parseFloat(d.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (c *= w.x),
        (p *= w.y),
        (a += m),
        (u += E),
        (S = ze(y)),
        (y = na(S));
    }
  }
  return Bi({ width: c, height: p, x: a, y: u });
}
function mu(e, t) {
  const n = ys(e).scrollLeft;
  return t ? t.left + n : Mn(Et(e)).left + n;
}
function Bh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : mu(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function tw(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Et(r),
    l = t ? vs(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = xt(1);
  const c = xt(0),
    p = St(r);
  if (
    (p || (!p && !i)) &&
    ((Or(r) !== "body" || bo(s)) && (a = ys(r)), St(r))
  ) {
    const g = Mn(r);
    (u = or(r)), (c.x = g.x + r.clientLeft), (c.y = g.y + r.clientTop);
  }
  const h = s && !p && !i ? Bh(s, a, !0) : xt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + h.y,
  };
}
function nw(e) {
  return Array.from(e.getClientRects());
}
function rw(e) {
  const t = Et(e),
    n = ys(e),
    r = e.ownerDocument.body,
    o = De(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = De(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + mu(e);
  const l = -n.scrollTop;
  return (
    ct(r).direction === "rtl" && (s += De(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function ow(e, t) {
  const n = ze(e),
    r = Et(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = pu();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
function iw(e, t) {
  const n = Mn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = St(e) ? or(e) : xt(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function sd(e, t, n) {
  let r;
  if (t === "viewport") r = ow(e, n);
  else if (t === "document") r = rw(Et(e));
  else if (ut(t)) r = iw(t, n);
  else {
    const o = Hh(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Bi(r);
}
function Wh(e, t) {
  const n = pn(e);
  return n === t || !ut(n) || Er(n)
    ? !1
    : ct(n).position === "fixed" || Wh(n, t);
}
function sw(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Co(e, [], !1).filter((l) => ut(l) && Or(l) !== "body"),
    o = null;
  const i = ct(e).position === "fixed";
  let s = i ? pn(e) : e;
  for (; ut(s) && !Er(s); ) {
    const l = ct(s),
      a = fu(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (bo(s) && !a && Wh(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = l),
      (s = pn(s));
  }
  return t.set(e, r), r;
}
function lw(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? vs(t)
          ? []
          : sw(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, c) => {
      const p = sd(t, c, o);
      return (
        (u.top = De(p.top, u.top)),
        (u.right = dn(p.right, u.right)),
        (u.bottom = dn(p.bottom, u.bottom)),
        (u.left = De(p.left, u.left)),
        u
      );
    }, sd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function aw(e) {
  const { width: t, height: n } = Vh(e);
  return { width: t, height: n };
}
function uw(e, t, n) {
  const r = St(t),
    o = Et(t),
    i = n === "fixed",
    s = Mn(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = xt(0);
  if (r || (!r && !i))
    if (((Or(t) !== "body" || bo(o)) && (l = ys(t)), r)) {
      const h = Mn(t, !0, i, t);
      (a.x = h.x + t.clientLeft), (a.y = h.y + t.clientTop);
    } else o && (a.x = mu(o));
  const u = o && !r && !i ? Bh(o, l) : xt(0),
    c = s.left + l.scrollLeft - a.x - u.x,
    p = s.top + l.scrollTop - a.y - u.y;
  return { x: c, y: p, width: s.width, height: s.height };
}
function Js(e) {
  return ct(e).position === "static";
}
function ld(e, t) {
  if (!St(e) || ct(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Et(e) === n && (n = n.ownerDocument.body), n;
}
function Qh(e, t) {
  const n = ze(e);
  if (vs(e)) return n;
  if (!St(e)) {
    let o = pn(e);
    for (; o && !Er(o); ) {
      if (ut(o) && !Js(o)) return o;
      o = pn(o);
    }
    return n;
  }
  let r = ld(e, t);
  for (; r && qx(r) && Js(r); ) r = ld(r, t);
  return r && Er(r) && Js(r) && !fu(r) ? n : r || Zx(e) || n;
}
const cw = async function (e) {
  const t = this.getOffsetParent || Qh,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: uw(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function dw(e) {
  return ct(e).direction === "rtl";
}
const fw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tw,
  getDocumentElement: Et,
  getClippingRect: lw,
  getOffsetParent: Qh,
  getElementRects: cw,
  getClientRects: nw,
  getDimensions: aw,
  getScale: or,
  isElement: ut,
  isRTL: dw,
};
function Kh(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function pw(e, t) {
  let n = null,
    r;
  const o = Et(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: c, top: p, width: h, height: g } = u;
    if ((l || t(), !h || !g)) return;
    const S = ti(p),
      y = ti(o.clientWidth - (c + h)),
      w = ti(o.clientHeight - (p + g)),
      f = ti(c),
      m = {
        rootMargin: -S + "px " + -y + "px " + -w + "px " + -f + "px",
        threshold: De(0, dn(1, a)) || 1,
      };
    let E = !0;
    function C(k) {
      const P = k[0].intersectionRatio;
      if (P !== a) {
        if (!E) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      P === 1 && !Kh(u, e.getBoundingClientRect()) && s(), (E = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...m, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, m);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function hw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = hu(e),
    c = o || i ? [...(u ? Co(u) : []), ...Co(t)] : [];
  c.forEach((f) => {
    o && f.addEventListener("scroll", n, { passive: !0 }),
      i && f.addEventListener("resize", n);
  });
  const p = u && l ? pw(u, n) : null;
  let h = -1,
    g = null;
  s &&
    ((g = new ResizeObserver((f) => {
      let [d] = f;
      d &&
        d.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var m;
          (m = g) == null || m.observe(t);
        }))),
        n();
    })),
    u && !a && g.observe(u),
    g.observe(t));
  let S,
    y = a ? Mn(e) : null;
  a && w();
  function w() {
    const f = Mn(e);
    y && !Kh(y, f) && n(), (y = f), (S = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var f;
      c.forEach((d) => {
        o && d.removeEventListener("scroll", n),
          i && d.removeEventListener("resize", n);
      }),
        p == null || p(),
        (f = g) == null || f.disconnect(),
        (g = null),
        a && cancelAnimationFrame(S);
    }
  );
}
const mw = Kx,
  vw = Gx,
  yw = Bx,
  gw = Xx,
  xw = Wx,
  ad = Hx,
  ww = Yx,
  Sw = (e, t, n) => {
    const r = new Map(),
      o = { platform: fw, ...n },
      i = { ...o.platform, _c: r };
    return Vx(e, t, { ...o, platform: i });
  };
var vi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Wi(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Wi(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Wi(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Gh(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ud(e, t) {
  const n = Gh(e);
  return Math.round(t * n) / n;
}
function el(e) {
  const t = x.useRef(e);
  return (
    vi(() => {
      t.current = e;
    }),
    t
  );
}
function Ew(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, p] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, g] = x.useState(r);
  Wi(h, r) || g(r);
  const [S, y] = x.useState(null),
    [w, f] = x.useState(null),
    d = x.useCallback((N) => {
      N !== k.current && ((k.current = N), y(N));
    }, []),
    m = x.useCallback((N) => {
      N !== P.current && ((P.current = N), f(N));
    }, []),
    E = i || S,
    C = s || w,
    k = x.useRef(null),
    P = x.useRef(null),
    R = x.useRef(c),
    L = a != null,
    b = el(a),
    z = el(o),
    M = el(u),
    H = x.useCallback(() => {
      if (!k.current || !P.current) return;
      const N = { placement: t, strategy: n, middleware: h };
      z.current && (N.platform = z.current),
        Sw(k.current, P.current, N).then((_) => {
          const D = { ..._, isPositioned: M.current !== !1 };
          A.current &&
            !Wi(R.current, D) &&
            ((R.current = D),
            jo.flushSync(() => {
              p(D);
            }));
        });
    }, [h, t, n, z, M]);
  vi(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), p((N) => ({ ...N, isPositioned: !1 })));
  }, [u]);
  const A = x.useRef(!1);
  vi(
    () => (
      (A.current = !0),
      () => {
        A.current = !1;
      }
    ),
    []
  ),
    vi(() => {
      if ((E && (k.current = E), C && (P.current = C), E && C)) {
        if (b.current) return b.current(E, C, H);
        H();
      }
    }, [E, C, H, b, L]);
  const Q = x.useMemo(
      () => ({ reference: k, floating: P, setReference: d, setFloating: m }),
      [d, m]
    ),
    U = x.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    W = x.useMemo(() => {
      const N = { position: n, left: 0, top: 0 };
      if (!U.floating) return N;
      const _ = ud(U.floating, c.x),
        D = ud(U.floating, c.y);
      return l
        ? {
            ...N,
            transform: "translate(" + _ + "px, " + D + "px)",
            ...(Gh(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: _, top: D };
    }, [n, l, U.floating, c.x, c.y]);
  return x.useMemo(
    () => ({ ...c, update: H, refs: Q, elements: U, floatingStyles: W }),
    [c, H, Q, U, W]
  );
}
const Cw = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? ad({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? ad({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  kw = (e, t) => ({ ...mw(e), options: [e, t] }),
  Pw = (e, t) => ({ ...vw(e), options: [e, t] }),
  Tw = (e, t) => ({ ...ww(e), options: [e, t] }),
  Nw = (e, t) => ({ ...yw(e), options: [e, t] }),
  Rw = (e, t) => ({ ...gw(e), options: [e, t] }),
  Ow = (e, t) => ({ ...xw(e), options: [e, t] }),
  _w = (e, t) => ({ ...Cw(e), options: [e, t] });
var jw = "Arrow",
  Yh = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return v.jsx(Ae.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Yh.displayName = jw;
var bw = Yh;
function Aw(e) {
  const [t, n] = x.useState(void 0);
  return (
    Ln(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Xh = "Popper",
  [qh, Zh] = ds(Xh),
  [b1, Jh] = qh(Xh),
  em = "PopperAnchor",
  tm = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Jh(em, n),
      s = x.useRef(null),
      l = at(t, s);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : v.jsx(Ae.div, { ...o, ref: l })
    );
  });
tm.displayName = em;
var vu = "PopperContent",
  [Lw, Mw] = qh(vu),
  nm = x.forwardRef((e, t) => {
    var yn, gu, xu, wu, Su, Eu;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: p = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: S,
        ...y
      } = e,
      w = Jh(vu, n),
      [f, d] = x.useState(null),
      m = at(t, (jr) => d(jr)),
      [E, C] = x.useState(null),
      k = Aw(E),
      P = (k == null ? void 0 : k.width) ?? 0,
      R = (k == null ? void 0 : k.height) ?? 0,
      L = r + (i !== "center" ? "-" + i : ""),
      b =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      z = Array.isArray(u) ? u : [u],
      M = z.length > 0,
      H = { padding: b, boundary: z.filter(Iw), altBoundary: M },
      {
        refs: A,
        floatingStyles: Q,
        placement: U,
        isPositioned: W,
        middlewareData: N,
      } = Ew({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...jr) =>
          hw(...jr, { animationFrame: g === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          kw({ mainAxis: o + R, alignmentAxis: s }),
          a &&
            Pw({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? Tw() : void 0,
              ...H,
            }),
          a && Nw({ ...H }),
          Rw({
            ...H,
            apply: ({
              elements: jr,
              rects: Cu,
              availableWidth: vm,
              availableHeight: ym,
            }) => {
              const { width: gm, height: xm } = Cu.reference,
                Ao = jr.floating.style;
              Ao.setProperty("--radix-popper-available-width", `${vm}px`),
                Ao.setProperty("--radix-popper-available-height", `${ym}px`),
                Ao.setProperty("--radix-popper-anchor-width", `${gm}px`),
                Ao.setProperty("--radix-popper-anchor-height", `${xm}px`);
            },
          }),
          E && _w({ element: E, padding: l }),
          Fw({ arrowWidth: P, arrowHeight: R }),
          h && Ow({ strategy: "referenceHidden", ...H }),
        ],
      }),
      [_, D] = im(U),
      $ = wt(S);
    Ln(() => {
      W && ($ == null || $());
    }, [W, $]);
    const J = (yn = N.arrow) == null ? void 0 : yn.x,
      Ze = (gu = N.arrow) == null ? void 0 : gu.y,
      Be = ((xu = N.arrow) == null ? void 0 : xu.centerOffset) !== 0,
      [_r, Ct] = x.useState();
    return (
      Ln(() => {
        f && Ct(window.getComputedStyle(f).zIndex);
      }, [f]),
      v.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: W ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: _r,
          "--radix-popper-transform-origin": [
            (wu = N.transformOrigin) == null ? void 0 : wu.x,
            (Su = N.transformOrigin) == null ? void 0 : Su.y,
          ].join(" "),
          ...(((Eu = N.hide) == null ? void 0 : Eu.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: v.jsx(Lw, {
          scope: n,
          placedSide: _,
          onArrowChange: C,
          arrowX: J,
          arrowY: Ze,
          shouldHideArrow: Be,
          children: v.jsx(Ae.div, {
            "data-side": _,
            "data-align": D,
            ...y,
            ref: m,
            style: { ...y.style, animation: W ? void 0 : "none" },
          }),
        }),
      })
    );
  });
nm.displayName = vu;
var rm = "PopperArrow",
  Dw = { top: "bottom", right: "left", bottom: "top", left: "right" },
  om = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Mw(rm, r),
      s = Dw[i.placedSide];
    return v.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: v.jsx(bw, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
om.displayName = rm;
function Iw(e) {
  return e !== null;
}
var Fw = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, f, d;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, c] = im(n),
      p = { start: "0%", center: "50%", end: "100%" }[c],
      h = (((f = o.arrow) == null ? void 0 : f.x) ?? 0) + l / 2,
      g = (((d = o.arrow) == null ? void 0 : d.y) ?? 0) + a / 2;
    let S = "",
      y = "";
    return (
      u === "bottom"
        ? ((S = s ? p : `${h}px`), (y = `${-a}px`))
        : u === "top"
        ? ((S = s ? p : `${h}px`), (y = `${r.floating.height + a}px`))
        : u === "right"
        ? ((S = `${-a}px`), (y = s ? p : `${g}px`))
        : u === "left" &&
          ((S = `${r.floating.width + a}px`), (y = s ? p : `${g}px`)),
      { data: { x: S, y } }
    );
  },
});
function im(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var zw = tm,
  $w = nm,
  Uw = om,
  [gs, A1] = ds("Tooltip", [Zh]),
  yu = Zh(),
  sm = "TooltipProvider",
  Vw = 700,
  cd = "tooltip.open",
  [Hw, lm] = gs(sm),
  am = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Vw,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = x.useRef(!0),
      l = x.useRef(!1),
      a = x.useRef(0);
    return (
      x.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      v.jsx(Hw, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: x.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: x.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
am.displayName = sm;
var um = "Tooltip",
  [L1, xs] = gs(um),
  ra = "TooltipTrigger",
  Bw = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = xs(ra, n),
      i = lm(ra, n),
      s = yu(n),
      l = x.useRef(null),
      a = at(t, l, o.onTriggerChange),
      u = x.useRef(!1),
      c = x.useRef(!1),
      p = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      v.jsx(zw, {
        asChild: !0,
        ...s,
        children: v.jsx(Ae.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: ue(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: ue(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: ue(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", p, { once: !0 });
          }),
          onFocus: ue(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ue(e.onBlur, o.onClose),
          onClick: ue(e.onClick, o.onClose),
        }),
      })
    );
  });
Bw.displayName = ra;
var Ww = "TooltipPortal",
  [M1, Qw] = gs(Ww, { forceMount: void 0 }),
  Cr = "TooltipContent",
  cm = x.forwardRef((e, t) => {
    const n = Qw(Cr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = xs(Cr, e.__scopeTooltip);
    return v.jsx(ou, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? v.jsx(dm, { side: o, ...i, ref: t })
        : v.jsx(Kw, { side: o, ...i, ref: t }),
    });
  }),
  Kw = x.forwardRef((e, t) => {
    const n = xs(Cr, e.__scopeTooltip),
      r = lm(Cr, e.__scopeTooltip),
      o = x.useRef(null),
      i = at(t, o),
      [s, l] = x.useState(null),
      { trigger: a, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: p } = r,
      h = x.useCallback(() => {
        l(null), p(!1);
      }, [p]),
      g = x.useCallback(
        (S, y) => {
          const w = S.currentTarget,
            f = { x: S.clientX, y: S.clientY },
            d = Zw(f, w.getBoundingClientRect()),
            m = Jw(f, d),
            E = e1(y.getBoundingClientRect()),
            C = n1([...m, ...E]);
          l(C), p(!0);
        },
        [p]
      );
    return (
      x.useEffect(() => () => h(), [h]),
      x.useEffect(() => {
        if (a && c) {
          const S = (w) => g(w, c),
            y = (w) => g(w, a);
          return (
            a.addEventListener("pointerleave", S),
            c.addEventListener("pointerleave", y),
            () => {
              a.removeEventListener("pointerleave", S),
                c.removeEventListener("pointerleave", y);
            }
          );
        }
      }, [a, c, g, h]),
      x.useEffect(() => {
        if (s) {
          const S = (y) => {
            const w = y.target,
              f = { x: y.clientX, y: y.clientY },
              d =
                (a == null ? void 0 : a.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              m = !t1(f, s);
            d ? h() : m && (h(), u());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [a, c, s, u, h]),
      v.jsx(dm, { ...e, ref: i })
    );
  }),
  [Gw, Yw] = gs(um, { isInside: !1 }),
  Xw = i0("TooltipContent"),
  dm = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = xs(Cr, n),
      u = yu(n),
      { onClose: c } = a;
    return (
      x.useEffect(
        () => (
          document.addEventListener(cd, c),
          () => document.removeEventListener(cd, c)
        ),
        [c]
      ),
      x.useEffect(() => {
        if (a.trigger) {
          const p = (h) => {
            const g = h.target;
            g != null && g.contains(a.trigger) && c();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [a.trigger, c]),
      v.jsx(ru, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: c,
        children: v.jsxs($w, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            v.jsx(Xw, { children: r }),
            v.jsx(Gw, {
              scope: n,
              isInside: !0,
              children: v.jsx(N0, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
cm.displayName = Cr;
var fm = "TooltipArrow",
  qw = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = yu(n);
    return Yw(fm, n).isInside ? null : v.jsx(Uw, { ...o, ...r, ref: t });
  });
qw.displayName = fm;
function Zw(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Jw(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function e1(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function t1(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x,
      a = t[i].y,
      u = t[s].x,
      c = t[s].y;
    a > r != c > r && n < ((u - l) * (r - a)) / (c - a) + l && (o = !o);
  }
  return o;
}
function n1(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    r1(t)
  );
}
function r1(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var o1 = am,
  pm = cm;
const i1 = o1,
  s1 = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    v.jsx(pm, {
      ref: r,
      sideOffset: t,
      className: He(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        e
      ),
      ...n,
    })
  );
s1.displayName = pm.displayName;
function l1() {
  const [e, t] = x.useState({ x: 50, y: 50 });
  return (
    x.useEffect(() => {
      const n = (r) => {
        const o = (r.clientX / window.innerWidth) * 100,
          i = (r.clientY / window.innerHeight) * 100;
        t({ x: o, y: i });
      };
      return (
        document.addEventListener("mousemove", n),
        () => document.removeEventListener("mousemove", n)
      );
    }, []),
    v.jsx("div", {
      className:
        "fixed inset-0 pointer-events-none z-0 transition-all duration-100 ease-out",
      style: {
        background: `radial-gradient(circle at ${e.x}% ${e.y}%, 
                    rgba(0, 255, 65, 0.15) 0%, 
                    rgba(0, 255, 65, 0.05) 25%, 
                    transparent 50%)`,
      },
    })
  );
}
const a1 = [
    { name: "About", description: "Personal information & background" },
    { name: "Stack", description: "Programming languages & technologies" },
    { name: "Tools", description: "Development tools & software" },
    { name: "42", description: "42 Heilbronn experience & projects" },
    { name: "TUM", description: "Technical University of Munich" },
    { name: "Clear", description: "Clear terminal" },
  ],
  u1 = [{ name: "Back (..)", description: "Go back to System Navigation" }],
  c1 = [
    "libft",
    "gnl",
    "ft_printf",
    "pipex",
    "push_swap",
    "fractal",
    "philosophers",
    "minishell",
    "CPP_modules",
    "inception",
    "born2beroot",
    "webserv",
  ];
function d1() {
  return v.jsx("div", {
    className:
      "p-4 bg-black bg-opacity-30 rounded border border-green-500 border-opacity-30",
    children: v.jsxs("div", {
      className: "text-sm text-green-400 space-y-3 leading-relaxed",
      children: [
        v.jsxs("p", {
          children: [
            v.jsx("span", {
              className: "text-cyan-400 font-bold",
              children: "Mohsin Rahman",
            }),
            " - Cybersecurity enthusiast and developer passionate about low-level systems and ethical hacking.",
          ],
        }),
        v.jsxs("p", {
          children: [
            "Currently studying at ",
            v.jsx("span", {
              className: "text-green-300",
              children: "42 Heilbronn",
            }),
            " and",
            v.jsx("span", { className: "text-green-300", children: " TUM" }),
            ", diving deep into network security, reverse engineering, and system vulnerabilities.",
          ],
        }),
        v.jsx("p", {
          children:
            "Based in Germany, always learning new security concepts and exploring the fascinating world of cybersecurity through hands-on projects and challenges.",
        }),
        v.jsx("p", {
          className: "text-gray-400 text-xs mt-4",
          children: '"One command-line challenge at a time" 🔐',
        }),
      ],
    }),
  });
}
function f1() {
  return v.jsxs("div", {
    children: [
      v.jsx("div", {
        className: "mb-4 text-center",
        children: v.jsx("h3", {
          className: "text-lg font-bold text-cyan-400 mb-3",
          children: "Mohsin Rahman's Stack",
        }),
      }),
      v.jsx("div", {
        className:
          "mb-4 p-4 bg-black bg-opacity-30 rounded border border-green-500 border-opacity-30",
        children: v.jsx("div", {
          className: "text-sm text-green-400 space-y-4",
          children: v.jsxs("div", {
            children: [
              v.jsx("h4", {
                className: "text-cyan-400 font-bold mb-2",
                children: "Programming Languages:",
              }),
              v.jsxs("div", {
                className: "ml-3 space-y-1 text-xs",
                children: [
                  v.jsxs("div", {
                    children: [
                      "• ",
                      v.jsx("span", {
                        className: "text-green-300",
                        children: "C",
                      }),
                      " - Low-level systems programming",
                    ],
                  }),
                  v.jsxs("div", {
                    children: [
                      "• ",
                      v.jsx("span", {
                        className: "text-green-300",
                        children: "C++",
                      }),
                      " - Object-oriented development",
                    ],
                  }),
                  v.jsxs("div", {
                    children: [
                      "• ",
                      v.jsx("span", {
                        className: "text-green-300",
                        children: "Java",
                      }),
                      " - Enterprise applications",
                    ],
                  }),
                  v.jsxs("div", {
                    children: [
                      "• ",
                      v.jsx("span", {
                        className: "text-green-300",
                        children: "Dart",
                      }),
                      " - Flutter mobile development",
                    ],
                  }),
                  v.jsxs("div", {
                    children: [
                      "• ",
                      v.jsx("span", {
                        className: "text-green-300",
                        children: "Matlab",
                      }),
                      " - Mathematical computing",
                    ],
                  }),
                  v.jsxs("div", {
                    children: [
                      "• ",
                      v.jsx("span", {
                        className: "text-green-300",
                        children: "Bash",
                      }),
                      " - Shell scripting & automation",
                    ],
                  }),
                  v.jsxs("div", {
                    children: [
                      "• ",
                      v.jsx("span", {
                        className: "text-green-300",
                        children: "HTML",
                      }),
                      " - Web structure & markup",
                    ],
                  }),
                  v.jsxs("div", {
                    children: [
                      "• ",
                      v.jsx("span", {
                        className: "text-green-300",
                        children: "CSS",
                      }),
                      " - Web styling & design",
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
function p1() {
  return v.jsx("div", {
    className:
      "mt-4 p-4 bg-black bg-opacity-30 rounded border border-green-500 border-opacity-30",
    children: v.jsxs("div", {
      className: "text-sm text-green-400 space-y-4",
      children: [
        v.jsxs("div", {
          children: [
            v.jsx("h4", {
              className: "text-cyan-400 font-bold mb-2",
              children: "Development Tools:",
            }),
            v.jsxs("div", {
              className: "ml-3 space-y-1 text-xs",
              children: [
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Git",
                    }),
                    " - Version control & collaboration",
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "VSCode",
                    }),
                    " - Primary development environment",
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Docker",
                    }),
                    " - Containerization & deployment",
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          children: [
            v.jsx("h4", {
              className: "text-cyan-400 font-bold mb-2",
              children: "Security Tools:",
            }),
            v.jsxs("div", {
              className: "ml-3 space-y-1 text-xs",
              children: [
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Penetration Testing Frameworks",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Network Analysis Tools",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Reverse Engineering Utilities",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Vulnerability Scanners",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          children: [
            v.jsx("h4", {
              className: "text-cyan-400 font-bold mb-2",
              children: "System Tools:",
            }),
            v.jsxs("div", {
              className: "ml-3 space-y-1 text-xs",
              children: [
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Linux Terminal",
                    }),
                    " - Command line mastery",
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Debuggers",
                    }),
                    " - Low-level analysis",
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    "• ",
                    v.jsx("span", {
                      className: "text-green-300",
                      children: "Virtual Machines",
                    }),
                    " - Safe testing environments",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function h1() {
  return v.jsxs("div", {
    className: "mt-4",
    children: [
      v.jsx("div", {
        className: "mb-4 text-center",
        children: v.jsx("h3", {
          className: "text-lg font-bold text-cyan-400",
          children: "Projects",
        }),
      }),
      v.jsx("div", {
        className: "grid grid-cols-4 gap-2 mb-2",
        children: c1
          .slice(0, 12)
          .map((e, t) =>
            v.jsx(
              "div",
              {
                className:
                  "bg-black bg-opacity-50 border border-green-500 border-opacity-30 p-3 text-center text-xs font-mono text-green-400 hover:bg-green-900 hover:bg-opacity-20 transition-colors cursor-pointer aspect-square flex items-center justify-center",
                children: e,
              },
              e
            )
          ),
      }),
      v.jsx("div", {
        className:
          "bg-black bg-opacity-50 border border-green-500 border-opacity-30 p-6 text-center text-xs font-mono text-green-400 hover:bg-green-900 hover:bg-opacity-20 transition-colors cursor-pointer flex items-center justify-center",
        children: "transcendence",
      }),
    ],
  });
}
function m1() {
  return v.jsxs("div", {
    className: "mt-4",
    children: [
      v.jsx("div", {
        className: "mb-4 text-center",
        children: v.jsx("h3", {
          className: "text-lg font-bold text-cyan-400",
          children: "Semester",
        }),
      }),
      v.jsx("div", {
        className: "grid grid-cols-3 gap-2",
        children: [1, 2, 3, 4, 5, 6].map((e) =>
          v.jsx(
            "div",
            {
              className:
                "bg-black bg-opacity-50 border border-green-500 border-opacity-30 p-4 text-center text-lg font-mono text-green-400 hover:bg-green-900 hover:bg-opacity-20 transition-colors cursor-pointer aspect-square flex items-center justify-center font-bold",
              children: e,
            },
            e
          )
        ),
      }),
    ],
  });
}
function v1(e) {
  switch (e) {
    case "about":
      return v.jsx(d1, {});
    case "stack":
      return v.jsx(f1, {});
    case "tools":
      return v.jsx(p1, {});
    case "42":
      return v.jsx(h1, {});
    case "tum":
      return v.jsx(m1, {});
    default:
      return null;
  }
}
function y1(e) {
  switch (e) {
    case "about":
      return "ABOUT";
    case "stack":
      return "STACK";
    case "tools":
      return "TOOLS";
    case "42":
      return "42";
    case "tum":
      return "TUM";
    default:
      return "SYSTEM NAVIGATION";
  }
}
function g1({ currentPage: e, onCommandClick: t }) {
  const n = e === "main" ? a1 : u1;
  return v.jsx("div", {
    className: "w-1/2 p-6 panel-border bg-black bg-opacity-50",
    children: v.jsxs("div", {
      className: "h-full flex flex-col",
      children: [
        v.jsxs("div", {
          className: "mb-4",
          children: [
            v.jsx("h1", {
              className: "text-lg font-bold matrix-text mb-2 text-center",
              children: y1(e),
            }),
            v.jsx("div", { className: "h-px bg-green-500 w-full opacity-30" }),
          ],
        }),
        v.jsxs("div", {
          className: "flex-1 flex flex-col",
          children: [
            e === "main" &&
              v.jsx("h2", {
                className: "text-md font-semibold mb-4 text-cyan-400",
                children: "Available Commands:",
              }),
            v.jsx("div", {
              className: "space-y-3 mb-4",
              children: n.map((r) =>
                v.jsx(
                  "div",
                  {
                    className: "command-item",
                    onClick: () => t(r.name.toLowerCase()),
                    children: v.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        v.jsx("div", {
                          className: "matrix-text font-bold",
                          children: r.name,
                        }),
                        v.jsxs("div", {
                          className: "text-xs text-gray-400 ml-3",
                          children: ["(", r.description, ")"],
                        }),
                      ],
                    }),
                  },
                  r.name
                )
              ),
            }),
            e === "main" &&
              v.jsxs("div", {
                className:
                  "mt-2 mb-4 p-3 bg-black bg-opacity-30 rounded border border-gray-700",
                children: [
                  v.jsx("h3", {
                    className: "text-cyan-400 font-semibold mb-1 text-sm",
                    children: "Usage:",
                  }),
                  v.jsx("p", {
                    className: "text-xs text-gray-300",
                    children: "Type commands in terminal or click above.",
                  }),
                  v.jsxs("p", {
                    className: "text-xs text-gray-300 mt-1",
                    children: [
                      "Example: ",
                      v.jsx("span", {
                        className: "matrix-text",
                        children: "devMohsin > about",
                      }),
                    ],
                  }),
                ],
              }),
            v.jsx("div", {
              className: `flex-1 ${
                e === "main" ? "flex items-center justify-center" : ""
              }`,
              children: v1(e),
            }),
          ],
        }),
      ],
    }),
  });
}
const x1 = {
  about: `
<div class="mb-4">
<div class="text-cyan-400 font-bold mb-2">ABOUT MOHSIN RAHMAN</div>
<div class="text-sm space-y-1">
<div>🧑‍💻 Cybersecurity Enthusiast & Developer</div>
<div>📍 Based in Germany</div>
<div>🎓 Currently studying at 42 Heilbronn & TUM</div>
<div>🔐 Passionate about low-level systems & ethical hacking</div>
<div>🌱 Always learning new security concepts</div>
<div>💡 Exploring reverse engineering & network security</div>
<div class="mt-3 text-gray-400">
GitHub: <span class="text-green-400">github.com/MohsinAejazRahman</span>
</div>
<div class="text-gray-400">
LinkedIn: <span class="text-green-400">linkedin.com/in/mohsin-rahman-4933842a5</span>
</div>
</div>
</div>`,
  stack: `
<div class="mb-4">
<div class="text-cyan-400 font-bold mb-2">PROGRAMMING STACK</div>
<div class="text-sm space-y-2">
<div><span class="text-green-400">Languages:</span></div>
<div class="ml-4">• C - Low-level systems programming</div>
<div class="ml-4">• C++ - Object-oriented development</div>
<div class="ml-4">• Java - Enterprise applications</div>
<div class="ml-4">• Dart - Flutter mobile development</div>
<div class="ml-4">• Matlab - Mathematical computing</div>
<div class="ml-4">• Bash - Shell scripting & automation</div>
</div>
</div>`,
  tools: `
<div class="mb-4">
<div class="text-cyan-400 font-bold mb-2">DEVELOPMENT TOOLS</div>
<div class="text-sm space-y-2">
<div><span class="text-green-400">Core Tools:</span></div>
<div class="ml-4">• Git - Version control & collaboration</div>
<div class="ml-4">• VSCode - Primary development environment</div>
<div class="ml-4">• Docker - Containerization & deployment</div>
<div class="mt-3"><span class="text-green-400">Security Tools:</span></div>
<div class="ml-4">• Various penetration testing frameworks</div>
<div class="ml-4">• Network analysis tools</div>
<div class="ml-4">• Reverse engineering utilities</div>
</div>
</div>`,
  42: `
<div class="mb-4">
<div class="text-cyan-400 font-bold mb-2">42 HEILBRONN EXPERIENCE</div>
<div class="text-sm space-y-2">
<div>🏫 <span class="text-green-400">42 Heilbronn School</span></div>
<div class="ml-4">• Peer-to-peer learning environment</div>
<div class="ml-4">• Project-based curriculum</div>
<div class="ml-4">• Focus on C/C++ systems programming</div>
<div class="ml-4">• Collaborative problem-solving</div>
<div class="mt-3">📚 <span class="text-green-400">Key Projects:</span></div>
<div class="ml-4">• Libft - Custom C library implementation</div>
<div class="ml-4">• GetNextLine - File reading utility</div>
<div class="ml-4">• Various algorithm challenges</div>
<div class="mt-3">🎯 <span class="text-green-400">Skills Developed:</span></div>
<div class="ml-4">• Memory management in C</div>
<div class="ml-4">• Unix system programming</div>
<div class="ml-4">• Problem-solving methodologies</div>
</div>
</div>`,
  tum: `
<div class="mb-4">
<div class="text-cyan-400 font-bold mb-2">TECHNICAL UNIVERSITY OF MUNICH</div>
<div class="text-sm space-y-2">
<div>🏛️ <span class="text-green-400">TUM - Technische Universität München</span></div>
<div class="ml-4">• One of Germany's top technical universities</div>
<div class="ml-4">• Focus on computer science & cybersecurity</div>
<div class="ml-4">• Research-oriented approach</div>
<div class="ml-4">• Strong theoretical foundations</div>
<div class="mt-3">🔬 <span class="text-green-400">Areas of Study:</span></div>
<div class="ml-4">• Network security protocols</div>
<div class="ml-4">• Cryptography & encryption</div>
<div class="ml-4">• System security analysis</div>
<div class="ml-4">• Advanced algorithms & data structures</div>
</div>
</div>`,
  help: `
<div class="mb-4">
<div class="text-cyan-400 font-bold mb-2">AVAILABLE COMMANDS</div>
<div class="text-sm space-y-1">
<div><span class="text-green-400">about</span> - Personal information</div>
<div><span class="text-green-400">stack</span> - Programming languages</div>
<div><span class="text-green-400">tools</span> - Development tools</div>
<div><span class="text-green-400">42</span> - 42 Heilbronn experience</div>
<div><span class="text-green-400">tum</span> - TUM studies</div>
<div><span class="text-green-400">clear</span> - Clear terminal</div>
<div><span class="text-green-400">help</span> - Show this help</div>
</div>
</div>`,
};
function w1({ commandToExecute: e, onCommandExecuted: t, onPageChange: n }) {
  const [r, o] = x.useState([]),
    [i, s] = x.useState(""),
    [l, a] = x.useState([]),
    [u, c] = x.useState(-1),
    p = x.useRef(null),
    h = x.useRef(null);
  x.useEffect(() => {
    p.current && p.current.focus();
  }, []),
    x.useEffect(() => {
      h.current && (h.current.scrollTop = h.current.scrollHeight);
    }, [r]),
    x.useEffect(() => {
      e && (S(e), t == null || t());
    }, [e]);
  const g = (w, f = !1) => {
      o(
        f
          ? (d) => [
              ...d,
              `<div class="terminal-line mb-2"><span class="prompt">devMohsin &gt;</span><span class="text-green-400">${w}</span></div>`,
            ]
          : (d) => [...d, w]
      );
    },
    S = (w) => {
      if (w.trim() === "") return;
      a((m) => [w, ...m]), c(-1), g(w, !0);
      const f = w.toLowerCase().trim();
      if (f === "clear") {
        o([]), s("");
        return;
      }
      if (f === ".." || f === "back") {
        n == null || n("main"),
          g(
            '<div class="mb-4"><div class="text-cyan-400">Returning to main menu...</div></div>'
          ),
          s("");
        return;
      }
      if (["about", "stack", "tools", "42", "tum"].includes(f)) {
        n == null || n(f);
        const m =
          f === "42"
            ? "42 Heilbronn"
            : f === "tum"
            ? "TUM"
            : f.charAt(0).toUpperCase() + f.slice(1);
        g(
          `<div class="mb-4"><div class="text-cyan-400">Entering ${m} section...</div></div>`
        ),
          s("");
        return;
      }
      const d =
        x1[f] ||
        `
      <div class="mb-4">
        <div class="text-red-400">Command not found: ${w}</div>
        <div class="text-gray-400 text-sm">Type 'help' for available commands</div>
      </div>
    `;
      g(d), s("");
    },
    y = (w) => {
      if (w.key === "Enter") S(i);
      else if (w.key === "ArrowUp") {
        if ((w.preventDefault(), u < l.length - 1)) {
          const f = u + 1;
          c(f), s(l[f]);
        }
      } else if (w.key === "ArrowDown")
        if ((w.preventDefault(), u > 0)) {
          const f = u - 1;
          c(f), s(l[f]);
        } else u === 0 && (c(-1), s(""));
    };
  return v.jsx("div", {
    className: "w-1/2 p-6 panel-border bg-black bg-opacity-50",
    children: v.jsxs("div", {
      className: "h-full flex flex-col",
      children: [
        v.jsx("div", {
          className: "mb-4 pb-2 border-b border-gray-700",
          children: v.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              v.jsx("h2", {
                className: "text-lg font-bold matrix-text flex-1 text-center",
                children: "TERMINAL",
              }),
              v.jsxs("div", {
                className: "flex space-x-2",
                children: [
                  v.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-red-500",
                  }),
                  v.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-yellow-500",
                  }),
                  v.jsx("div", {
                    className: "w-3 h-3 rounded-full bg-green-500",
                  }),
                ],
              }),
            ],
          }),
        }),
        v.jsxs("div", {
          className: "flex-1 overflow-hidden",
          children: [
            v.jsxs("div", {
              ref: h,
              className: "h-full overflow-y-auto pb-4",
              children: [
                v.jsxs("div", {
                  className: "mb-4",
                  children: [
                    v.jsx("div", {
                      className: "matrix-text text-xl font-bold",
                      children: "Mohsin Rahman",
                    }),
                    v.jsx("div", {
                      className: "text-gray-400 text-sm",
                      children: "Cybersecurity Enthusiast | 42 Heilbronn | TUM",
                    }),
                    v.jsx("div", {
                      className: "text-gray-500 text-xs mt-1",
                      children: "Type 'help' for available commands",
                    }),
                  ],
                }),
                v.jsx("div", {
                  className: "h-px bg-green-500 w-full opacity-20 mb-4",
                }),
                r.map((w, f) =>
                  v.jsx("div", { dangerouslySetInnerHTML: { __html: w } }, f)
                ),
              ],
            }),
            v.jsxs("div", {
              className: "terminal-line",
              children: [
                v.jsx("span", { className: "prompt", children: "devMohsin >" }),
                v.jsxs("div", {
                  className: "flex-1 relative",
                  children: [
                    v.jsx("input", {
                      ref: p,
                      type: "text",
                      value: i,
                      onChange: (w) => s(w.target.value),
                      onKeyDown: y,
                      className:
                        "w-full bg-transparent outline-none matrix-text caret-transparent",
                      placeholder: "",
                      autoComplete: "off",
                      spellCheck: !1,
                    }),
                    v.jsx("span", {
                      className: "cursor absolute top-0",
                      style: { left: `${i.length * 0.6}em` },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function S1() {
  const [e, t] = x.useState(),
    [n, r] = x.useState("main"),
    o = (l) => {
      l === "back (..)" || l === ".." || l === "back"
        ? (r("main"), t(".."))
        : (["about", "stack", "tools", "42", "tum"].includes(l) && r(l), t(l));
    },
    i = () => {
      t(void 0);
    },
    s = (l) => {
      r(l);
    };
  return v.jsxs("div", {
    className: "h-screen relative",
    children: [
      v.jsx(l1, {}),
      v.jsxs("div", {
        className: "relative z-10 h-full flex",
        children: [
          v.jsx(g1, { currentPage: n, onCommandClick: o }),
          v.jsx(w1, {
            commandToExecute: e,
            onCommandExecuted: i,
            onPageChange: s,
          }),
        ],
      }),
    ],
  });
}
const hm = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    ref: n,
    className: He(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t,
  })
);
hm.displayName = "Card";
const E1 = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    ref: n,
    className: He("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
E1.displayName = "CardHeader";
const C1 = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    ref: n,
    className: He("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
C1.displayName = "CardTitle";
const k1 = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", {
    ref: n,
    className: He("text-sm text-muted-foreground", e),
    ...t,
  })
);
k1.displayName = "CardDescription";
const mm = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", { ref: n, className: He("p-6 pt-0", e), ...t })
);
mm.displayName = "CardContent";
const P1 = x.forwardRef(({ className: e, ...t }, n) =>
  v.jsx("div", { ref: n, className: He("flex items-center p-6 pt-0", e), ...t })
);
P1.displayName = "CardFooter";
function T1() {
  return v.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: v.jsx(hm, {
      className: "w-full max-w-md mx-4",
      children: v.jsxs(mm, {
        className: "pt-6",
        children: [
          v.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              v.jsx(X0, { className: "h-8 w-8 text-red-500" }),
              v.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          v.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const dd = [
  "SYSTEM BOOT SEQUENCE INITIATED...",
  "Loading kernel modules...",
  "Initializing security protocols...",
  "Establishing secure connection...",
  "Authenticating user credentials...",
  "Loading filesystem...",
  "Starting network services...",
  "Initializing terminal interface...",
  "Loading user environment...",
  "System ready for operation.",
];
function N1({ onComplete: e }) {
  const [t, n] = x.useState(!0),
    [r, o] = x.useState(0),
    [i, s] = x.useState(0);
  return (
    x.useEffect(() => {
      let l = 0;
      const a = setInterval(() => {
        (l += Math.random() * 3 + 1),
          l >= 100 &&
            ((l = 100),
            clearInterval(a),
            setTimeout(() => {
              n(!1),
                setTimeout(() => {
                  e();
                }, 300);
            }, 500)),
          o(Math.floor(l));
        const u = Math.floor((l / 100) * (dd.length - 1));
        s(u);
      }, 100);
      return () => {
        clearInterval(a);
      };
    }, [e]),
    t
      ? v.jsxs("div", {
          className: `fixed inset-0 z-50 bg-black transition-opacity duration-300 ${
            r >= 100 ? "opacity-0" : "opacity-100"
          }`,
          style: {
            fontFamily: "Fira Code, monospace",
            fontSize: "12px",
            overflow: "hidden",
          },
          children: [
            v.jsx("div", {
              className: "absolute inset-0 flex items-center justify-center",
              children: v.jsxs("div", {
                className:
                  "bg-black border-2 border-green-400 rounded p-6 w-96 h-64 shadow-2xl",
                style: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                children: [
                  v.jsxs("div", {
                    className:
                      "flex items-center justify-between mb-4 pb-2 border-b border-green-400",
                    children: [
                      v.jsx("div", {
                        className: "text-green-400 font-bold text-sm",
                        children: "MOHSIN SECURITY TERMINAL",
                      }),
                      v.jsxs("div", {
                        className: "flex space-x-1",
                        children: [
                          v.jsx("div", {
                            className: "w-3 h-3 rounded-full bg-red-500",
                          }),
                          v.jsx("div", {
                            className: "w-3 h-3 rounded-full bg-yellow-500",
                          }),
                          v.jsx("div", {
                            className: "w-3 h-3 rounded-full bg-green-500",
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex flex-col h-full",
                    children: [
                      v.jsxs("div", {
                        className: "flex-1 mb-4",
                        children: [
                          v.jsx("div", {
                            className: "text-green-400 text-xs mb-2",
                            children: dd[i],
                          }),
                          v.jsxs("div", {
                            className:
                              "text-green-300 text-xs opacity-70 space-y-1",
                            children: [
                              v.jsx("div", { children: "$ whoami" }),
                              v.jsx("div", {
                                children: "mohsin@security-terminal",
                              }),
                              v.jsx("div", {
                                children: "$ ls -la /home/mohsin/",
                              }),
                              v.jsx("div", {
                                children: "drwxr-xr-x cybersecurity/",
                              }),
                              v.jsx("div", {
                                children: "drwxr-xr-x projects/",
                              }),
                              v.jsx("div", {
                                children: "-rw-r--r-- portfolio.exe",
                              }),
                            ],
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: "mt-auto",
                        children: [
                          v.jsxs("div", {
                            className: "text-cyan-400 text-sm mb-2 font-bold",
                            children: ["LOADING: ", r, "%"],
                          }),
                          v.jsx("div", {
                            className:
                              "w-full h-4 bg-gray-800 border border-green-400 rounded overflow-hidden",
                            children: v.jsx("div", {
                              className:
                                "h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-200 ease-out",
                              style: { width: `${r}%` },
                              children: v.jsx("div", {
                                className:
                                  "h-full bg-green-400 animate-pulse opacity-50",
                              }),
                            }),
                          }),
                          v.jsx("div", {
                            className: "text-xs text-gray-400 mt-2",
                            children:
                              "Establishing secure connection to portfolio...",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            v.jsx("div", {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 65, 0.02) 2px,
            rgba(0, 255, 65, 0.02) 4px
          )`,
              },
            }),
          ],
        })
      : null
  );
}
function R1() {
  return v.jsxs(Cg, {
    children: [
      v.jsx(zc, { path: "/", component: S1 }),
      v.jsx(zc, { component: T1 }),
    ],
  });
}
function O1() {
  const [e, t] = x.useState(!0),
    n = () => {
      t(!1);
    };
  return v.jsx(Kg, {
    client: Xg,
    children: v.jsxs(i1, {
      children: [
        v.jsx(Ax, {}),
        e ? v.jsx(N1, { onComplete: n }) : v.jsx(R1, {}),
      ],
    }),
  });
}
Lp(document.getElementById("root")).render(v.jsx(O1, {}));
