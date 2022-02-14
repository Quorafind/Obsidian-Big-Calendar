"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var require$$0 = require("obsidian");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0);
const CALENDAR_VIEW_TYPE = "calendar_view";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n2, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n2[k];
      }
    });
  });
  return a;
}
var _react_17_0_2_react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$n = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var _objectAssign_4_1_1_objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$n.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = _objectAssign_4_1_1_objectAssign, n$1 = 60103, p$1 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$1 = 60109, r$1 = 60110, t$1 = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w = Symbol.for;
  n$1 = w("react.element");
  p$1 = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q$1 = w("react.provider");
  r$1 = w("react.context");
  t$1 = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = typeof Symbol === "function" && Symbol.iterator;
function y$1(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = x && a[x] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$1 = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {
}
D$1.prototype = C.prototype;
function E$1(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
var F$1 = E$1.prototype = new D$1();
F$1.constructor = E$1;
l(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G$1 = { current: null }, H$1 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k = null, h2 = null;
  if (b != null)
    for (e in b.ref !== void 0 && (h2 = b.ref), b.key !== void 0 && (k = "" + b.key), b)
      H$1.call(b, e) && !I$1.hasOwnProperty(e) && (d[e] = b[e]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    d.children = c;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d.children = f2;
  }
  if (a && a.defaultProps)
    for (e in g2 = a.defaultProps, g2)
      d[e] === void 0 && (d[e] = g2[e]);
  return { $$typeof: n$1, type: a, key: k, ref: h2, props: d, _owner: G$1.current };
}
function K(a, b) {
  return { $$typeof: n$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
}
function O$1(a, b, c, e, d) {
  var k = typeof a;
  if (k === "undefined" || k === "boolean")
    a = null;
  var h2 = false;
  if (a === null)
    h2 = true;
  else
    switch (k) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$1:
          case p$1:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, d = d(h2), a = e === "" ? "." + N$1(h2, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M$1, "$&/") + "/"), O$1(d, b, c, "", function(a2) {
      return a2;
    })) : d != null && (L(d) && (d = K(d, c + (!d.key || h2 && h2.key === d.key ? "" : ("" + d.key).replace(M$1, "$&/") + "/") + a)), b.push(d)), 1;
  h2 = 0;
  e = e === "" ? "." : e + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k = a[g2];
      var f2 = e + N$1(k, g2);
      h2 += O$1(k, b, c, f2, d);
    }
  else if (f2 = y$1(a), typeof f2 === "function")
    for (a = f2.call(a), g2 = 0; !(k = a.next()).done; )
      k = k.value, f2 = e + N$1(k, g2++), h2 += O$1(k, b, c, f2, d);
  else if (k === "object")
    throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h2;
}
function P$1(a, b, c) {
  if (a == null)
    return a;
  var e = [], d = 0;
  O$1(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (a._status === -1) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      a._status === 0 && (a._status = 2, a._result = b2);
    });
  }
  if (a._status === 1)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (a === null)
    throw Error(z(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$1, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P$1, forEach: function(a, b, c) {
  P$1(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b, c) {
  if (a === null || a === void 0)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h2 = a._owner;
  if (b != null) {
    b.ref !== void 0 && (k = b.ref, h2 = G$1.current);
    b.key !== void 0 && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b)
      H$1.call(b, f2) && !I$1.hasOwnProperty(f2) && (e[f2] = b[f2] === void 0 && g2 !== void 0 ? g2[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    e.children = c;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e.children = g2;
  }
  return {
    $$typeof: n$1,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h2
  };
};
react_production_min.createContext = function(a, b) {
  b === void 0 && (b = null);
  a = { $$typeof: r$1, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t$1, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S$1().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S$1().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S$1().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S$1().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S$1().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S$1().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S$1().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  _react_17_0_2_react.exports = react_production_min;
}
var React = _react_17_0_2_react.exports;
var _reactDom_17_0_2_reactDom = { exports: {} };
var reactDom_production_min = {};
var _scheduler_0_20_2_scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports2) {
  var f2, g2, h2, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports2.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports2.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w2 = function() {
      if (t2 !== null)
        try {
          var a = exports2.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b) {
          throw setTimeout(w2, 0), b;
        }
    };
    f2 = function(a) {
      t2 !== null ? setTimeout(f2, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g2 = function(a, b) {
      u2 = setTimeout(a, b);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports2.unstable_shouldYield = function() {
      return false;
    };
    k = exports2.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports2.unstable_shouldYield = function() {
      return exports2.unstable_now() >= E2;
    };
    k = function() {
    };
    exports2.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports2.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A2 = false;
    };
    f2 = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a, b) {
      C2 = x2(function() {
        a(exports2.unstable_now());
      }, b);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K2(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m2 = 2 * (d + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (n2 !== void 0 && 0 > I2(n2, c))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a[d] = r2, a[v2] = c, d = v2) : (a[d] = n2, a[m2] = c, d = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c))
              a[d] = r2, a[v2] = c, d = v2;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J2(M2); b !== null; ) {
      if (b.callback === null)
        K2(M2);
      else if (b.startTime <= a)
        K2(M2), b.sortIndex = b.expirationTime, H2(L2, b);
      else
        break;
      b = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J2(L2) !== null)
        R2 = true, f2(V2);
      else {
        var b = J2(M2);
        b !== null && g2(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J2(L2); O2 !== null && (!(O2.expirationTime > b) || a && !exports2.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports2.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J2(L2) && K2(L2);
          T2(b);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J2(M2);
        n2 !== null && g2(U2, n2.startTime - b);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c, Q2 = false;
    }
  }
  var W2 = k;
  exports2.unstable_IdlePriority = 5;
  exports2.unstable_ImmediatePriority = 1;
  exports2.unstable_LowPriority = 4;
  exports2.unstable_NormalPriority = 3;
  exports2.unstable_Profiling = null;
  exports2.unstable_UserBlockingPriority = 2;
  exports2.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports2.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports2.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports2.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports2.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports2.unstable_pauseExecution = function() {
  };
  exports2.unstable_requestPaint = W2;
  exports2.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports2.unstable_scheduleCallback = function(a, b, c) {
    var d = exports2.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, H2(M2, a), J2(L2) === null && a === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c - d))) : (a.sortIndex = e, H2(L2, a), R2 || Q2 || (R2 = true, f2(V2)));
    return a;
  };
  exports2.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  _scheduler_0_20_2_scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = _react_17_0_2_react.exports, m$1 = _objectAssign_4_1_1_objectAssign, r = _scheduler_0_20_2_scheduler.exports;
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = new Set(), ca = {};
function da$1(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja$1 = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja$1, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja$1[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f2, g2) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f2 = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f2 || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2])
                return "\n" + e[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return m$1({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = m$1({ children: void 0 }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return m$1({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = m$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
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
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b, c, d, e, f2, g2, h2, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b, c, d, e, f2, g2, h2, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f2, g2, h2, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f2 = e.alternate;
    if (f2 === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return ac(e), a;
        if (f2 === d)
          return ac(e), b;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g2 = false, h2 = e.child; h2; ) {
        if (h2 === c) {
          g2 = true;
          c = e;
          d = f2;
          break;
        }
        if (h2 === d) {
          g2 = true;
          d = e;
          c = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c) {
            g2 = true;
            c = f2;
            d = e;
            break;
          }
          if (h2 === d) {
            g2 = true;
            d = f2;
            c = e;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = new Map(), oc = new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f2) {
  if (a === null || a.nativeEvent !== f2)
    return a = rc(b, c, d, e, f2), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            r.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = new Map(), Nc = new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da$1(e, [d]);
  }
}
var Qc = r.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f2 = a.expiredLanes, g2 = a.suspendedLanes, h2 = a.pingedLanes;
  if (f2 !== 0)
    d = f2, e = F = 15;
  else if (f2 = c & 134217727, f2 !== 0) {
    var k = f2 & ~g2;
    k !== 0 ? (d = Rc(k), e = F) : (h2 &= f2, h2 !== 0 && (d = Rc(h2), e = F));
  } else
    f2 = c & ~g2, f2 !== 0 ? (d = Rc(f2), e = F) : h2 !== 0 && (d = Rc(h2), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g2) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id$1(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f2 = yc(a, b, c, d);
      if (f2 === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f2 = Zb(e);
    if (f2 === null)
      e = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e = $b(f2);
        if (e !== null)
          return e;
        e = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e = null;
      } else
        f2 !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g2 = c - a;
  for (d = 1; d <= g2 && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g2) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$1(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$1({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
  MozPrintableKey: "Unidentified"
}, Nd = {
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
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m$1({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$1({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de$1 = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de$1 && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da$1("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da$1("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da$1("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da$1("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da$1("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da$1("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g2 = d.length - 1; 0 <= g2; g2--) {
          var h2 = d[g2], k = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h2, l2);
          f2 = k;
        }
      else
        for (g2 = 0; g2 < d.length; g2++) {
          h2 = d[g2];
          k = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k !== f2 && e.isPropagationStopped())
            break a;
          Ze(e, h2, l2);
          f2 = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c;
  a === "selectionchange" && c.nodeType !== 9 && (f2 = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f2 = d;
  }
  var g2 = $e(f2), h2 = a + "__" + (b ? "capture" : "bubble");
  g2.has(h2) || (b && (e |= 4), af(f2, a, e, b), g2.add(h2));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id$1;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f2 = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g2 = d.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e || h2.nodeType === 8 && h2.parentNode === e)
            break;
          if (g2 === 4)
            for (g2 = d.return; g2 !== null; ) {
              var k = g2.tag;
              if (k === 3 || k === 4) {
                if (k = g2.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = wc(h2);
            if (g2 === null)
              return;
            k = g2.tag;
            if (k === 5 || k === 6) {
              d = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f2, e2 = xb(c), g3 = [];
    a: {
      var h3 = Mc.get(a);
      if (h3 !== void 0) {
        var k2 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w2 = (b & 4) !== 0, z2 = !w2 && a === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d2, q2; t2 !== null; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          q2.tag === 5 && v2 !== null && (q2 = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k2(h3, x2, null, c, e2), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h3 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h3 && (b & 16) === 0 && (x2 = c.relatedTarget || c.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k2 || h3) {
          h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k2) {
            if (x2 = c.relatedTarget || c.toElement, k2 = d2, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
              x2 = null;
          } else
            k2 = null, x2 = d2;
          if (k2 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k2 == null ? h3 : ue(k2);
            q2 = x2 == null ? h3 : ue(x2);
            h3 = new w2(v2, t2 + "leave", k2, c, e2);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e2) === d2 && (w2 = new w2(u2, t2 + "enter", x2, c, e2), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k2 && x2)
              b: {
                w2 = k2;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k2 !== null && hf(g3, h3, k2, w2, false);
            x2 !== null && z2 !== null && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d2 ? ue(d2) : window;
        k2 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h3.type === "file")
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k2 = h3.nodeName) && k2.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a, d2))) {
          ne(g3, J2, c, e2);
          break a;
        }
        K2 && K2(a, h3, d2);
        a === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c, e2);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c) && (L2 = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de$1 && c.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d2, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c, e2), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g3.push({ event: e2, listeners: d2 }), e2.data = Q2);
    }
    se(g3, b);
  });
}
function ef(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f2 = e.stateNode;
    e.tag === 5 && f2 !== null && (e = f2, f2 = Ob(a, c), f2 != null && d.unshift(ef(a, f2, e)), f2 = Ob(a, b), f2 != null && d.push(ef(a, f2, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f2 = b._reactName, g2 = []; c !== null && c !== d; ) {
    var h2 = c, k = h2.alternate, l2 = h2.stateNode;
    if (k !== null && k === d)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e ? (k = Ob(c, f2), k != null && g2.unshift(ef(c, k, h2))) : e || (k = Ob(c, f2), k != null && g2.push(ef(c, k, h2))));
    c = c.return;
  }
  g2.length !== 0 && a.push({ event: b, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = new Set());
  return b;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return m$1({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = m$1({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = { lanes: 0, firstContext: b, responders: null };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        f2 === null ? e = f2 = g2 : f2 = f2.next = g2;
        c = c.next;
      } while (c !== null);
      f2 === null ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
  if (h2 !== null) {
    e.shared.pending = null;
    var k = h2, l2 = k.next;
    k.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k;
    var n2 = a.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k);
    }
  }
  if (f2 !== null) {
    A2 = e.baseState;
    g2 = 0;
    n2 = l2 = k = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d & h2) === h2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a, x2 = f2;
          h2 = b;
          p2 = c;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = typeof C2 === "function" ? C2.call(p2, A2, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A2 = m$1({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a.flags |= 32, h2 = e.effects, h2 === null ? e.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l2 = n2 = p2, k = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e.lastBaseUpdate = h2, e.shared.pending = null;
    } while (1);
    n2 === null && (k = A2);
    e.baseState = k;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = n2;
    Dg |= g2;
    a.lanes = g2;
    a.memoizedState = A2;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : m$1({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.payload = b;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f2 = zg(d, e);
  f2.tag = 1;
  f2.payload = b;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a, f2);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
} };
function Lg(a, b, c, d, e, f2, g2) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f2, g2) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f2) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f2 = b.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f2 = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f2);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f2 = b.contextType;
  typeof f2 === "object" && f2 !== null ? e.context = vg(f2) : (f2 = Ff(b) ? Df : M.current, e.context = Ef(a, f2));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a, b, f2, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g2(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n2(a2, b2, c2, d2, f3) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A2(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p2(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h2(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n2(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n2(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C2(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n2(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n2(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x2(e2, g3, h3, k2) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; u2 !== null && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e2, u2, h3[z2], k2);
      if (n3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && n3.alternate === null && b(e2, u2);
      g3 = f2(n3, g3, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c(e2, u2), l3;
    if (u2 === null) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e2, h3[z2], k2), u2 !== null && (g3 = f2(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d(e2, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e2, z2, h3[z2], k2), q2 !== null && (a && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g3 = f2(q2, g3, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  function w2(e2, g3, h3, k2) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e2, u2, n3.value, k2);
      if (w3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && w3.alternate === null && b(e2, u2);
      g3 = f2(w3, g3, z2);
      t2 === null ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c(e2, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e2, n3.value, k2), n3 !== null && (g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d(e2, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e2, z2, n3.value, k2), n3 !== null && (a && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  return function(a2, d2, f3, h3) {
    var k2 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k2 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l3) {
                switch (k2.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f3.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f3.props);
                      d2.ref = Qg(a2, k2, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f3.type === ua ? (d2 = Xg(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Qg(a2, d2, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case ta:
          a: {
            for (k2 = f3.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f3, a2.mode, h3);
            d2.return = a2;
            a2 = d2;
          }
          return g2(a2);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f3, a2.mode, h3), d2.return = a2, a2 = d2), g2(a2);
    if (Pg(f3))
      return x2(a2, d2, f3, h3);
    if (La(f3))
      return w2(a2, d2, f3, h3);
    l3 && Rg(a2, f3);
    if (typeof f3 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f2) {
  xh = f2;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f2 = c.pending;
  if (f2 !== null) {
    if (e !== null) {
      var g2 = e.next;
      e.next = f2.next;
      f2.next = g2;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h2 = g2 = f2 = null, k = e;
    do {
      var l2 = k.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n2 = {
          lane: l2,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h2 === null ? (g2 = h2 = n2, f2 = d) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h2 === null ? f2 = d : h2.next = g2;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f2;
    b.baseQueue = h2;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g2 = e = e.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e);
    He(f2, b.memoizedState) || (ug = true);
    b.memoizedState = f2;
    b.baseQueue === null && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f2 = b._getVersion, g2 = f2(b._source), h2 = vh.current, k = h2.useState(function() {
    return Mh(e, b, c);
  }), l2 = k[1], n2 = k[0];
  k = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b, subscribe: d };
  h2.useEffect(function() {
    p2.getSnapshot = c;
    p2.setSnapshot = l2;
    var a2 = f2(b._source);
    if (!He(g2, a2)) {
      a2 = c(b._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h3 = a2; 0 < h3; ) {
        var k2 = 31 - Vc(h3), v2 = 1 << k2;
        d2[k2] |= a2;
        h3 &= ~v2;
      }
    }
  }, [c, b, d]);
  h2.useEffect(function() {
    return d(b._source, function() {
      var a2 = p2.getSnapshot, c2 = p2.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w2);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q2) {
        c2(function() {
          throw q2;
        });
      }
    });
  }, [b, d]);
  He(C2, c) && He(x2, b) && He(A2, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n2 = Mh(e, b, c), k.memoizedState = k.baseState = n2);
  return n2;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = R.updateQueue;
  b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = { current: a };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f2 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (d !== null && Bh(d, g2.deps)) {
      Rh(b, c, f2, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f2, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f2 = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g2 = b.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b.pending = f2;
  g2 = a.alternate;
  if (a === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b.lastRenderedReducer, g2 !== null))
      try {
        var h2 = b.lastRenderedState, k = g2(h2, c);
        f2.eagerReducer = g2;
        f2.eagerState = k;
        if (He(k, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c("r:" + (tf++).toString(36));
    }, void 0, null));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f2, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi$1(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f2) {
  if (a === null) {
    var g2 = c.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g2, ki(a, b, g2, d, e, f2);
    a = Vg(c.type, null, d, b, b.mode, f2);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g2 = a.child;
  if ((e & f2) === 0 && (e = g2.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi$1(a, b, f2);
  b.flags |= 1;
  a = Tg(g2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f2) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f2 & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi$1(a, b, f2);
  return li(a, b, c, d, f2);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
    if ((b.mode & 4) === 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, f2 !== null ? f2.baseLanes : c);
    else
      return a = f2 !== null ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
  else
    f2 !== null ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f2 = Ff(c) ? Df : M.current;
  f2 = Ef(b, f2);
  tg(b, e);
  c = Ch(a, b, c, d, f2, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi$1(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f2 = true;
    Jf(b);
  } else
    f2 = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g2 = b.stateNode, h2 = b.memoizedProps;
    g2.props = h2;
    var k = g2.context, l2 = c.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c) ? Df : M.current, l2 = Ef(b, l2));
    var n2 = c.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d || k !== l2) && Ng(b, g2, d, l2);
    wg = false;
    var p2 = b.memoizedState;
    g2.state = p2;
    Cg(b, d, g2, e);
    k = b.memoizedState;
    h2 !== d || p2 !== k || N.current || wg ? (typeof n2 === "function" && (Gg(b, c, n2, d), k = b.memoizedState), (h2 = wg || Lg(b, c, h2, d, p2, k, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g2.props = d, g2.state = k, g2.context = l2, d = h2) : (typeof g2.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g2 = b.stateNode;
    yg(a, b);
    h2 = b.memoizedProps;
    l2 = b.type === b.elementType ? h2 : lg(b.type, h2);
    g2.props = l2;
    A2 = b.pendingProps;
    p2 = g2.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C2 = c.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p2 !== k) && Ng(b, g2, d, k);
    wg = false;
    p2 = b.memoizedState;
    g2.state = p2;
    Cg(b, d, g2, e);
    var x2 = b.memoizedState;
    h2 !== A2 || p2 !== x2 || N.current || wg ? (typeof C2 === "function" && (Gg(b, c, C2, d), x2 = b.memoizedState), (l2 = wg || Lg(b, c, l2, d, p2, x2, k)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d, x2, k), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d, x2, k)), typeof g2.componentDidUpdate === "function" && (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x2), g2.props = d, g2.state = x2, g2.context = k, d = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f2, e);
}
function qi(a, b, c, d, e, f2) {
  oi(a, b);
  var g2 = (b.flags & 64) !== 0;
  if (!d && !g2)
    return e && Kf(b, c, false), hi$1(a, b, f2);
  d = b.stateNode;
  ei.current = b;
  var h2 = g2 && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g2 ? (b.child = Yg(b, a.child, null, f2), b.child = Yg(b, null, h2, f2)) : fi(a, b, h2, f2);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f2 = false, g2;
  (g2 = (b.flags & 64) !== 0) || (g2 = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g2 ? (f2 = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f2)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({ mode: "visible", children: a }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f2)
      return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f2)
    return d = wi(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f2.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f2 = a.child;
  b = { mode: "hidden", children: b };
  (e & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b) : f2 = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f2.return = a;
  c.return = a;
  f2.sibling = c;
  a.child = f2;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, { mode: "visible", children: c });
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f2 = b.mode, g2 = a.child;
  a = g2.sibling;
  var h2 = { mode: "hidden", children: c };
  (f2 & 2) === 0 && b.child !== g2 ? (c = b.child, c.childLanes = 0, c.pendingProps = h2, g2 = c.lastEffect, g2 !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g2, g2.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g2, h2);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f2, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f2) {
  var g2 = a.memoizedState;
  g2 === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f2 } : (g2.isBackwards = b, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d, g2.tail = c, g2.tailMode = e, g2.lastEffect = f2);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f2, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f2, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi$1(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f2 = [];
        break;
      case "select":
        e = m$1({}, e, { value: void 0 });
        d = m$1({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g2;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
        if (l2 === "style") {
          var h2 = e[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k = d[l2];
      h2 = e != null ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k !== h2 && (k != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k && k.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
            for (g2 in k)
              k.hasOwnProperty(g2) && h2[g2] !== k[g2] && (c || (c = {}), c[g2] = k[g2]);
          } else
            c || (f2 || (f2 = []), f2.push(l2, c)), c = k;
        else
          l2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h2 = h2 ? h2.__html : void 0, k != null && h2 !== k && (f2 = f2 || []).push(l2, k)) : l2 === "children" ? typeof k !== "string" && typeof k !== "number" || (f2 = f2 || []).push(l2, "" + k) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k != null && l2 === "onScroll" && G("scroll", a), f2 || h2 === k || (f2 = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f2 = f2 || []).push(l2, k));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
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
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[wf] = b;
          d[xf] = f2;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f2);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f2), G("invalid", d);
          }
          vb(c, f2);
          a = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e = f2[g2], g2 === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g2) && e != null && g2 === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g2 = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g2.createElement(c, { is: d.is }) : (a = g2.createElement(c), c === "select" && (g2 = a, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a = g2.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g2 = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              e = m$1({}, d, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h2 = e;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k = h2[f2];
              f2 === "style" ? tb(a, k) : f2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f2 === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k != null && f2 === "onScroll" && G("scroll", a) : k != null && qa(a, f2, k, g2));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f2 = d.value;
              f2 != null ? fb(a, !!d.multiple, f2, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f2 = (b.flags & 64) !== 0;
      g2 = d.rendering;
      if (g2 === null)
        if (f2)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g2 = ih(a);
              if (g2 !== null) {
                b.flags |= 64;
                Fi(d, false);
                f2 = g2.updateQueue;
                f2 !== null && (b.updateQueue = f2, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f2 = c, a = d, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g2), a !== null) {
            if (b.flags |= 64, f2 = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g2.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f2 = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c = d.last, c !== null ? c.sibling = g2 : b.child = g2, d.last = g2);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f2 ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f2 = a.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f2) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f2) {
                Wi(d, f2);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(b, f2);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f2; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e = e.containerInfo;
              f2 = true;
              break a;
            case 4:
              e = e.containerInfo;
              f2 = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g2 = a, h2 = c, k = h2; ; )
          if (bj(g2, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h2)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h2)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f2 ? (g2 = e, h2 = c.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f2 = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f2 = b.updateQueue;
        b.updateQueue = null;
        if (f2 !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f2.length; e += 2) {
            var g2 = f2[e], h2 = f2[e + 1];
            g2 === "style" ? tb(c, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c, h2) : g2 === "children" ? pb(c, h2) : qa(c, g2, h2, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f2 = d.value, f2 != null ? fb(c, !!d.multiple, f2, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f2 = a.expirationTimes, g2 = a.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l2 = b;
        Rc(k);
        var n2 = F;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b && (a.expiredLanes |= k);
    g2 &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g2 = 31 - Vc(c);
          f2 = 1 << g2;
          g2 = d[g2];
          g2 > e && (e = g2);
          c &= ~f2;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c.return, h2 = c, k = b;
        b = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l2 = k;
          if ((h2.mode & 2) === 0) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p2 = g2;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x2 = p2.memoizedState;
              if (x2 !== null)
                C2 = x2.dehydrated !== null ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k = void 0;
              h2 = b;
              var q2 = f2.pingCache;
              q2 === null ? (q2 = f2.pingCache = new Oi(), k = new Set(), q2.set(l2, k)) : (k = q2.get(l2), k === void 0 && (k = new Set(), q2.set(l2, k)));
              if (!k.has(h2)) {
                k.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k;
              p2.flags |= 4096;
              b &= -b;
              p2.lanes |= b;
              var J2 = Pi(p2, f2, b);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k;
              var K2 = p2.type, Q2 = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b &= -b;
                p2.lanes |= b;
                var L2 = Si(p2, f2, b);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f2 = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g2 = a.eventTimes, h2 = a.expirationTimes; 0 < f2; ) {
    var k = 31 - Vc(f2), l2 = 1 << k;
    e[k] = 0;
    g2[k] = -1;
    h2[k] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A2 = n2 + f2);
                  w2 !== k || l2 !== 0 && w2.nodeType !== 3 || (p2 = n2 + l2);
                  w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                  if ((u2 = w2.firstChild) === null)
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k && ++x2 === l2 && (p2 = n2);
                  if ((u2 = w2.nextSibling) !== null)
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g2 = a; Z !== null; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v2 = q2.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g2 !== null && Oe(t2) && (q2 = g2.start, v2 = g2.end, v2 === void 0 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t2 = a; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f2 = c[d + 1], g2 = e.destroy;
    e.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k) {
        if (f2 === null)
          throw Error(y(330));
        Wi(f2, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f2 = c[d + 1];
    try {
      var h2 = e.create;
      e.destroy = h2();
    } catch (k) {
      if (f2 === null)
        throw Error(y(330));
      Wi(f2, k);
    }
  }
  for (h2 = a.current.firstEffect; h2 !== null; )
    a = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f2) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi$1(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi$1(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f2 = true;
          Jf(b);
        } else
          f2 = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g2 = d.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b, d, g2, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f2, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f2 = e._init;
        e = f2(e._payload);
        b.type = e;
        f2 = b.tag = hk(e);
        a = lg(e, a);
        switch (f2) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi$1(a, b, c);
      else {
        e = b.stateNode;
        if (f2 = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f2 = lh = true;
        if (f2) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f2 = a[e], f2._workInProgressVersionPrimary = a[e + 1], th.push(f2);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f2 = a !== null ? a.memoizedProps : null, g2 = e.children, nf(d, e) ? g2 = null : f2 !== null && nf(d, f2) && (b.flags |= 16), oi(a, b), fi(a, b, g2, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g2 = b.memoizedProps;
        f2 = e.value;
        var h2 = b.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g2 !== null)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e.children && !N.current) {
              b = hi$1(a, b, c);
              break a;
            }
          } else
            for (h2 = b.child, h2 !== null && (h2.return = b); h2 !== null; ) {
              var k = h2.dependencies;
              if (k !== null) {
                g2 = h2.child;
                for (var l2 = k.firstContext; l2 !== null; ) {
                  if (l2.context === d && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c & -c), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c);
                    sg(h2.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = h2.tag === 10 ? h2.type === b.type ? null : h2.child : h2.child;
              if (g2 !== null)
                g2.return = h2;
              else
                for (g2 = h2; g2 !== null; ) {
                  if (g2 === b) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (h2 !== null) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f2 = b.pendingProps, d = f2.children, tg(b, c), e = vg(e, f2.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f2 = lg(e, b.pendingProps), f2 = lg(e.type, f2), ii(a, b, e, f2, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f2) {
  var g2 = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g2 = 1);
  else if (typeof a === "string")
    g2 = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f2, b);
        case Ha:
          g2 = 8;
          e |= 16;
          break;
        case wa:
          g2 = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c, e, f2, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f2, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g2, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function lk(a, b, c, d) {
  var e = b.current, f2 = Hg(), g2 = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h2 = c;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h2);
          break a;
        }
      }
      c = h2;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f2, g2);
  b.payload = { element: a };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g2, f2);
  return g2;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? { hydrate: true } : void 0);
}
function tk(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e === "function") {
      var h2 = e;
      e = function() {
        var a2 = mk(g2);
        h2.call(a2);
      };
    }
    lk(b, g2, a, e);
  } else {
    f2 = c._reactRootContainer = sk(c, d);
    g2 = f2._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g2);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g2, a, e);
    });
  }
  return mk(g2);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  _reactDom_17_0_2_reactDom.exports = reactDom_production_min;
}
var ReactDOM = _reactDom_17_0_2_reactDom.exports;
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducersObj = {};
  for (const key of reducerKeys) {
    if (typeof reducers[key] === "function") {
      finalReducersObj[key] = reducers[key];
    }
  }
  return (state = {}, action) => {
    let hasChanged = false;
    const nextState = {};
    for (const key of reducerKeys) {
      const prevStateForKey = state[key];
      const nextStateForKey = finalReducersObj[key](prevStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== prevStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
function createStore(preloadedState, reducer2) {
  const listeners = [];
  let currentState = preloadedState;
  const dispatch = (action) => {
    const nextState = reducer2(currentState, action);
    const prevState = currentState;
    currentState = nextState;
    for (const cb2 of listeners) {
      cb2(currentState, prevState);
    }
  };
  const subscribe = (listener) => {
    let isSubscribed = true;
    listeners.push(listener);
    return () => {
      if (!isSubscribed) {
        return;
      }
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
      isSubscribed = false;
    };
  };
  const getState = () => {
    return currentState;
  };
  return {
    dispatch,
    getState,
    subscribe
  };
}
function reducer$3(state, action) {
  switch (action.type) {
    case "SET_MARK_EVENT_ID": {
      if (action.payload.markEventId === state.markEventId) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        markEventId: action.payload.markEventId
      });
    }
    case "SET_EDIT_EVENT_ID": {
      if (action.payload.editEventId === state.editEventId) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        editEventId: action.payload.editEventId
      });
    }
    case "SET_MOBILE_VIEW": {
      if (action.payload.isMobileView === state.isMobileView) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        isMobileView: action.payload.isMobileView
      });
    }
    case "SET_SHOW_SIDEBAR_IN_MOBILE_VIEW": {
      if (action.payload.showSiderbarInMobileView === state.showSiderbarInMobileView) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        showSiderbarInMobileView: action.payload.showSiderbarInMobileView
      });
    }
    case "SET_APP_SETTING": {
      return __spreadValues(__spreadValues({}, state), action.payload);
    }
    default: {
      return state;
    }
  }
}
const defaultState$3 = {
  markEventId: "",
  editEventId: "",
  shouldSplitEventWord: true,
  shouldHideImageUrl: true,
  shouldUseMarkdownParser: true,
  useTinyUndoHistoryCache: false,
  isMobileView: false,
  showSiderbarInMobileView: false
};
function reducer$2(state, action) {
  switch (action.type) {
    case "SET_LOCATION": {
      return action.payload;
    }
    case "SET_PATHNAME": {
      if (action.payload.pathname === state.pathname) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        pathname: action.payload.pathname
      });
    }
    case "SET_HASH": {
      if (action.payload.hash === state.hash) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        hash: action.payload.hash
      });
    }
    case "SET_QUERY": {
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadValues({}, action.payload)
      });
    }
    case "SET_TAG_QUERY": {
      if (action.payload.tag === state.query.tag) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          tag: action.payload.tag
        })
      });
    }
    case "SET_DURATION_QUERY": {
      if (action.payload.duration === state.query.duration) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          duration: __spreadValues(__spreadValues({}, state.query.duration), action.payload.duration)
        })
      });
    }
    case "SET_TYPE": {
      if (action.payload.type === state.query.type) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          type: action.payload.type
        })
      });
    }
    case "SET_TEXT": {
      if (action.payload.text === state.query.text) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          text: action.payload.text
        })
      });
    }
    case "SET_QUERY_FILTER": {
      if (action.payload === state.query.filter) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        query: __spreadProps(__spreadValues({}, state.query), {
          filter: action.payload
        })
      });
    }
    default: {
      return state;
    }
  }
}
const defaultState$2 = {
  pathname: "/",
  hash: "",
  query: {
    tag: "",
    duration: null,
    type: "",
    text: "",
    filter: ""
  }
};
var utils;
(function(utils2) {
  function getNowTimeStamp() {
    return parseInt(require$$0.moment().format("x"));
  }
  utils2.getNowTimeStamp = getNowTimeStamp;
  function getOSVersion() {
    const appVersion = navigator.userAgent;
    let detectedOS = "Unknown";
    if (appVersion.indexOf("Win") != -1) {
      detectedOS = "Windows";
    } else if (appVersion.indexOf("Mac") != -1) {
      detectedOS = "MacOS";
    } else if (appVersion.indexOf("Linux") != -1) {
      detectedOS = "Linux";
    }
    return detectedOS;
  }
  utils2.getOSVersion = getOSVersion;
  function getTimeStampByDate(t2) {
    if (typeof t2 === "string") {
      t2 = t2.replaceAll("-", "/");
    }
    return new Date(t2).getTime();
  }
  utils2.getTimeStampByDate = getTimeStampByDate;
  function getDateStampByDate(t2) {
    const d = new Date(getTimeStampByDate(t2));
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  }
  utils2.getDateStampByDate = getDateStampByDate;
  function getDateString(t2) {
    const d = new Date(getTimeStampByDate(t2));
    const year2 = d.getFullYear();
    const month2 = d.getMonth() + 1;
    const date2 = d.getDate();
    return `${year2}/${month2}/${date2}`;
  }
  utils2.getDateString = getDateString;
  function getTimeString(t2) {
    const d = new Date(getTimeStampByDate(t2));
    const hours2 = d.getHours();
    const mins = d.getMinutes();
    const hoursStr = hours2 < 10 ? "0" + hours2 : hours2;
    const minsStr = mins < 10 ? "0" + mins : mins;
    return `${hoursStr}:${minsStr}`;
  }
  utils2.getTimeString = getTimeString;
  function getDateTimeString(t2) {
    const d = new Date(getTimeStampByDate(t2));
    const year2 = d.getFullYear();
    const month2 = d.getMonth() + 1;
    const date2 = d.getDate();
    const hours2 = d.getHours();
    const mins = d.getMinutes();
    const monthStr = month2 < 10 ? "0" + month2 : month2;
    const dateStr = date2 < 10 ? "0" + date2 : date2;
    const hoursStr = hours2 < 10 ? "0" + hours2 : hours2;
    const minsStr = mins < 10 ? "0" + mins : mins;
    const secsStr = "00";
    return `${year2}/${monthStr}/${dateStr} ${hoursStr}:${minsStr}:${secsStr}`;
  }
  utils2.getDateTimeString = getDateTimeString;
  function dedupe(data) {
    return Array.from(new Set(data));
  }
  utils2.dedupe = dedupe;
  function dedupeObjectWithId(data) {
    const idSet = new Set();
    const result = [];
    for (const d of data) {
      if (!idSet.has(d.id)) {
        idSet.add(d.id);
        result.push(d);
      }
    }
    return result;
  }
  utils2.dedupeObjectWithId = dedupeObjectWithId;
  function debounce2(fn3, delay) {
    let timer = null;
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = setTimeout(fn3, delay);
      } else {
        timer = setTimeout(fn3, delay);
      }
    };
  }
  utils2.debounce = debounce2;
  function throttle(fn3, delay) {
    let valid = true;
    return () => {
      if (!valid) {
        return false;
      }
      valid = false;
      setTimeout(() => {
        fn3();
        valid = true;
      }, delay);
    };
  }
  utils2.throttle = throttle;
  function transformObjectToParamsString(object) {
    const params = [];
    const keys2 = Object.keys(object).sort();
    for (const key of keys2) {
      const val = object[key];
      if (val) {
        if (typeof val === "object") {
          params.push(...transformObjectToParamsString(val).split("&"));
        } else {
          params.push(`${key}=${val}`);
        }
      }
    }
    return params.join("&");
  }
  utils2.transformObjectToParamsString = transformObjectToParamsString;
  function transformParamsStringToObject(paramsString) {
    const object = {};
    const params = paramsString.split("&");
    for (const p2 of params) {
      const [key, val] = p2.split("=");
      if (key && val) {
        object[key] = val;
      }
    }
    return object;
  }
  utils2.transformParamsStringToObject = transformParamsStringToObject;
  function filterObjectNullKeys(object) {
    if (!object) {
      return {};
    }
    const finalObject = {};
    const keys2 = Object.keys(object).sort();
    for (const key of keys2) {
      const val = object[key];
      if (typeof val === "object") {
        const temp = filterObjectNullKeys(JSON.parse(JSON.stringify(val)));
        if (temp && Object.keys(temp).length > 0) {
          finalObject[key] = temp;
        }
      } else {
        if (val) {
          finalObject[key] = val;
        }
      }
    }
    return finalObject;
  }
  utils2.filterObjectNullKeys = filterObjectNullKeys;
  async function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        console.warn("Copy to clipboard failed.", error);
      }
    } else {
      console.warn("Copy to clipboard failed, methods not supports.");
    }
  }
  utils2.copyTextToClipboard = copyTextToClipboard;
  function getImageSize(src) {
    return new Promise((resolve) => {
      const imgEl = new Image();
      imgEl.onload = () => {
        const { width, height: height2 } = imgEl;
        if (width > 0 && height2 > 0) {
          resolve({ width, height: height2 });
        } else {
          resolve({ width: 0, height: 0 });
        }
      };
      imgEl.onerror = () => {
        resolve({ width: 0, height: 0 });
      };
      imgEl.className = "hidden";
      imgEl.src = src;
      document.body.appendChild(imgEl);
      imgEl.remove();
    });
  }
  utils2.getImageSize = getImageSize;
})(utils || (utils = {}));
var utils$1 = utils;
function reducer$1(state, action) {
  switch (action.type) {
    case "SET_EVENTS": {
      const events = utils$1.dedupeObjectWithId(action.payload.events.sort((a, b) => utils$1.getTimeStampByDate(b.start) - utils$1.getTimeStampByDate(a.start)));
      return __spreadProps(__spreadValues({}, state), {
        events: [...events]
      });
    }
    case "SET_TAGS": {
      return __spreadProps(__spreadValues({}, state), {
        tags: action.payload.tags
      });
    }
    case "INSERT_EVENT": {
      const events = utils$1.dedupeObjectWithId([action.payload.event, ...state.events]);
      return __spreadProps(__spreadValues({}, state), {
        events
      });
    }
    case "DELETE_EVENT_BY_ID": {
      return __spreadProps(__spreadValues({}, state), {
        events: [...state.events].filter((event) => event.id !== action.payload.id)
      });
    }
    case "EDIT_EVENT": {
      const events = state.events.map((m2) => {
        if (m2.id === action.payload.id) {
          return __spreadValues(__spreadValues({}, m2), action.payload);
        } else {
          return m2;
        }
      });
      return __spreadProps(__spreadValues({}, state), {
        events
      });
    }
    default: {
      return state;
    }
  }
}
const defaultState$1 = {
  events: [],
  tags: []
};
var main$1 = {};
Object.defineProperty(main$1, "__esModule", { value: true });
var obsidian = require$$0__default["default"];
const DEFAULT_DAILY_NOTE_FORMAT = "YYYY-MM-DD";
const DEFAULT_WEEKLY_NOTE_FORMAT = "gggg-[W]ww";
const DEFAULT_MONTHLY_NOTE_FORMAT = "YYYY-MM";
const DEFAULT_QUARTERLY_NOTE_FORMAT = "YYYY-[Q]Q";
const DEFAULT_YEARLY_NOTE_FORMAT = "YYYY";
function shouldUsePeriodicNotesSettings(periodicity) {
  var _a, _b;
  const periodicNotes = window.app.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a[periodicity]) == null ? void 0 : _b.enabled);
}
function getDailyNoteSettings() {
  var _a, _b, _c, _d;
  try {
    const { internalPlugins, plugins } = window.app;
    if (shouldUsePeriodicNotesSettings("daily")) {
      const { format: format2, folder: folder2, template: template2 } = ((_b = (_a = plugins.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.daily) || {};
      return {
        format: format2 || DEFAULT_DAILY_NOTE_FORMAT,
        folder: (folder2 == null ? void 0 : folder2.trim()) || "",
        template: (template2 == null ? void 0 : template2.trim()) || ""
      };
    }
    const { folder, format, template } = ((_d = (_c = internalPlugins.getPluginById("daily-notes")) == null ? void 0 : _c.instance) == null ? void 0 : _d.options) || {};
    return {
      format: format || DEFAULT_DAILY_NOTE_FORMAT,
      folder: (folder == null ? void 0 : folder.trim()) || "",
      template: (template == null ? void 0 : template.trim()) || ""
    };
  } catch (err) {
    console.info("No custom daily note settings found!", err);
  }
}
function getWeeklyNoteSettings() {
  var _a, _b, _c, _d, _e, _f, _g;
  try {
    const pluginManager = window.app.plugins;
    const calendarSettings = (_a = pluginManager.getPlugin("calendar")) == null ? void 0 : _a.options;
    const periodicNotesSettings = (_c = (_b = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _b.settings) == null ? void 0 : _c.weekly;
    if (shouldUsePeriodicNotesSettings("weekly")) {
      return {
        format: periodicNotesSettings.format || DEFAULT_WEEKLY_NOTE_FORMAT,
        folder: ((_d = periodicNotesSettings.folder) == null ? void 0 : _d.trim()) || "",
        template: ((_e = periodicNotesSettings.template) == null ? void 0 : _e.trim()) || ""
      };
    }
    const settings = calendarSettings || {};
    return {
      format: settings.weeklyNoteFormat || DEFAULT_WEEKLY_NOTE_FORMAT,
      folder: ((_f = settings.weeklyNoteFolder) == null ? void 0 : _f.trim()) || "",
      template: ((_g = settings.weeklyNoteTemplate) == null ? void 0 : _g.trim()) || ""
    };
  } catch (err) {
    console.info("No custom weekly note settings found!", err);
  }
}
function getMonthlyNoteSettings() {
  var _a, _b, _c, _d;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("monthly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.monthly) || {};
    return {
      format: settings.format || DEFAULT_MONTHLY_NOTE_FORMAT,
      folder: ((_c = settings.folder) == null ? void 0 : _c.trim()) || "",
      template: ((_d = settings.template) == null ? void 0 : _d.trim()) || ""
    };
  } catch (err) {
    console.info("No custom monthly note settings found!", err);
  }
}
function getQuarterlyNoteSettings() {
  var _a, _b, _c, _d;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("quarterly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.quarterly) || {};
    return {
      format: settings.format || DEFAULT_QUARTERLY_NOTE_FORMAT,
      folder: ((_c = settings.folder) == null ? void 0 : _c.trim()) || "",
      template: ((_d = settings.template) == null ? void 0 : _d.trim()) || ""
    };
  } catch (err) {
    console.info("No custom quarterly note settings found!", err);
  }
}
function getYearlyNoteSettings() {
  var _a, _b, _c, _d;
  const pluginManager = window.app.plugins;
  try {
    const settings = shouldUsePeriodicNotesSettings("yearly") && ((_b = (_a = pluginManager.getPlugin("periodic-notes")) == null ? void 0 : _a.settings) == null ? void 0 : _b.yearly) || {};
    return {
      format: settings.format || DEFAULT_YEARLY_NOTE_FORMAT,
      folder: ((_c = settings.folder) == null ? void 0 : _c.trim()) || "",
      template: ((_d = settings.template) == null ? void 0 : _d.trim()) || ""
    };
  } catch (err) {
    console.info("No custom yearly note settings found!", err);
  }
}
function join(...partSegments) {
  let parts = [];
  for (let i = 0, l2 = partSegments.length; i < l2; i++) {
    parts = parts.concat(partSegments[i].split("/"));
  }
  const newParts = [];
  for (let i = 0, l2 = parts.length; i < l2; i++) {
    const part = parts[i];
    if (!part || part === ".")
      continue;
    else
      newParts.push(part);
  }
  if (parts[0] === "")
    newParts.unshift("");
  return newParts.join("/");
}
function basename(fullPath) {
  let base = fullPath.substring(fullPath.lastIndexOf("/") + 1);
  if (base.lastIndexOf(".") != -1)
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}
async function ensureFolderExists(path) {
  const dirs = path.replace(/\\/g, "/").split("/");
  dirs.pop();
  if (dirs.length) {
    const dir = join(...dirs);
    if (!window.app.vault.getAbstractFileByPath(dir)) {
      await window.app.vault.createFolder(dir);
    }
  }
}
async function getNotePath(directory, filename) {
  if (!filename.endsWith(".md")) {
    filename += ".md";
  }
  const path = obsidian.normalizePath(join(directory, filename));
  await ensureFolderExists(path);
  return path;
}
async function getTemplateInfo(template) {
  const { metadataCache, vault } = window.app;
  const templatePath = obsidian.normalizePath(template);
  if (templatePath === "/") {
    return Promise.resolve(["", null]);
  }
  try {
    const templateFile = metadataCache.getFirstLinkpathDest(templatePath, "");
    const contents = await vault.cachedRead(templateFile);
    const IFoldInfo = window.app.foldManager.load(templateFile);
    return [contents, IFoldInfo];
  } catch (err) {
    console.error(`Failed to read the daily note template '${templatePath}'`, err);
    new obsidian.Notice("Failed to read the daily note template");
    return ["", null];
  }
}
function getDateUID(date2, granularity = "day") {
  const ts = date2.clone().startOf(granularity).format();
  return `${granularity}-${ts}`;
}
function removeEscapedCharacters(format) {
  return format.replace(/\[[^\]]*\]/g, "");
}
function isFormatAmbiguous(format, granularity) {
  if (granularity === "week") {
    const cleanFormat = removeEscapedCharacters(format);
    return /w{1,2}/i.test(cleanFormat) && (/M{1,4}/.test(cleanFormat) || /D{1,4}/.test(cleanFormat));
  }
  return false;
}
function getDateFromFile(file, granularity) {
  return getDateFromFilename(file.basename, granularity);
}
function getDateFromPath(path, granularity) {
  return getDateFromFilename(basename(path), granularity);
}
function getDateFromFilename(filename, granularity) {
  const getSettings = {
    day: getDailyNoteSettings,
    week: getWeeklyNoteSettings,
    month: getMonthlyNoteSettings,
    quarter: getQuarterlyNoteSettings,
    year: getYearlyNoteSettings
  };
  const format = getSettings[granularity]().format.split("/").pop();
  const noteDate = window.moment(filename, format, true);
  if (!noteDate.isValid()) {
    return null;
  }
  if (isFormatAmbiguous(format, granularity)) {
    if (granularity === "week") {
      const cleanFormat = removeEscapedCharacters(format);
      if (/w{1,2}/i.test(cleanFormat)) {
        return window.moment(filename, format.replace(/M{1,4}/g, "").replace(/D{1,4}/g, ""), false);
      }
    }
  }
  return noteDate;
}
class DailyNotesFolderMissingError$1 extends Error {
}
async function createDailyNote(date2) {
  const app = window.app;
  const { vault } = app;
  const moment2 = window.moment;
  const { template, format, folder } = getDailyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date2.format(format);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, moment2().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename).replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = moment2();
      const currentDate = date2.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format);
    }).replace(/{{\s*yesterday\s*}}/gi, date2.clone().subtract(1, "day").format(format)).replace(/{{\s*tomorrow\s*}}/gi, date2.clone().add(1, "d").format(format)));
    app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getDailyNote(date2, dailyNotes) {
  var _a;
  return (_a = dailyNotes[getDateUID(date2, "day")]) != null ? _a : null;
}
function getAllDailyNotes() {
  const { vault } = window.app;
  const { folder } = getDailyNoteSettings();
  const dailyNotesFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!dailyNotesFolder) {
    throw new DailyNotesFolderMissingError$1("Failed to find daily notes folder");
  }
  const dailyNotes = {};
  obsidian.Vault.recurseChildren(dailyNotesFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date2 = getDateFromFile(note, "day");
      if (date2) {
        const dateString = getDateUID(date2, "day");
        dailyNotes[dateString] = note;
      }
    }
  });
  return dailyNotes;
}
class WeeklyNotesFolderMissingError extends Error {
}
function getDaysOfWeek() {
  const { moment: moment2 } = window;
  let weekStart = moment2.localeData()._week.dow;
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  while (weekStart) {
    daysOfWeek.push(daysOfWeek.shift());
    weekStart--;
  }
  return daysOfWeek;
}
function getDayOfWeekNumericalValue(dayOfWeekName) {
  return getDaysOfWeek().indexOf(dayOfWeekName.toLowerCase());
}
async function createWeeklyNote(date2) {
  const { vault } = window.app;
  const { template, format, folder } = getWeeklyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date2.format(format);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = window.moment();
      const currentDate = date2.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format);
    }).replace(/{{\s*title\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s*:(.*?)}}/gi, (_, dayOfWeek, momentFormat) => {
      const day2 = getDayOfWeekNumericalValue(dayOfWeek);
      return date2.weekday(day2).format(momentFormat.trim());
    }));
    window.app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getWeeklyNote(date2, weeklyNotes) {
  var _a;
  return (_a = weeklyNotes[getDateUID(date2, "week")]) != null ? _a : null;
}
function getAllWeeklyNotes() {
  const weeklyNotes = {};
  if (!appHasWeeklyNotesPluginLoaded()) {
    return weeklyNotes;
  }
  const { vault } = window.app;
  const { folder } = getWeeklyNoteSettings();
  const weeklyNotesFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!weeklyNotesFolder) {
    throw new WeeklyNotesFolderMissingError("Failed to find weekly notes folder");
  }
  obsidian.Vault.recurseChildren(weeklyNotesFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date2 = getDateFromFile(note, "week");
      if (date2) {
        const dateString = getDateUID(date2, "week");
        weeklyNotes[dateString] = note;
      }
    }
  });
  return weeklyNotes;
}
class MonthlyNotesFolderMissingError extends Error {
}
async function createMonthlyNote(date2) {
  const { vault } = window.app;
  const { template, format, folder } = getMonthlyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date2.format(format);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = window.moment();
      const currentDate = date2.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format);
    }).replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename));
    window.app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getMonthlyNote(date2, monthlyNotes) {
  var _a;
  return (_a = monthlyNotes[getDateUID(date2, "month")]) != null ? _a : null;
}
function getAllMonthlyNotes() {
  const monthlyNotes = {};
  if (!appHasMonthlyNotesPluginLoaded()) {
    return monthlyNotes;
  }
  const { vault } = window.app;
  const { folder } = getMonthlyNoteSettings();
  const monthlyNotesFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!monthlyNotesFolder) {
    throw new MonthlyNotesFolderMissingError("Failed to find monthly notes folder");
  }
  obsidian.Vault.recurseChildren(monthlyNotesFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date2 = getDateFromFile(note, "month");
      if (date2) {
        const dateString = getDateUID(date2, "month");
        monthlyNotes[dateString] = note;
      }
    }
  });
  return monthlyNotes;
}
class QuarterlyNotesFolderMissingError extends Error {
}
async function createQuarterlyNote(date2) {
  const { vault } = window.app;
  const { template, format, folder } = getQuarterlyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date2.format(format);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = window.moment();
      const currentDate = date2.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format);
    }).replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename));
    window.app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getQuarterlyNote(date2, quarterly) {
  var _a;
  return (_a = quarterly[getDateUID(date2, "quarter")]) != null ? _a : null;
}
function getAllQuarterlyNotes() {
  const quarterly = {};
  if (!appHasQuarterlyNotesPluginLoaded()) {
    return quarterly;
  }
  const { vault } = window.app;
  const { folder } = getQuarterlyNoteSettings();
  const quarterlyFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!quarterlyFolder) {
    throw new QuarterlyNotesFolderMissingError("Failed to find quarterly notes folder");
  }
  obsidian.Vault.recurseChildren(quarterlyFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date2 = getDateFromFile(note, "quarter");
      if (date2) {
        const dateString = getDateUID(date2, "quarter");
        quarterly[dateString] = note;
      }
    }
  });
  return quarterly;
}
class YearlyNotesFolderMissingError extends Error {
}
async function createYearlyNote(date2) {
  const { vault } = window.app;
  const { template, format, folder } = getYearlyNoteSettings();
  const [templateContents, IFoldInfo] = await getTemplateInfo(template);
  const filename = date2.format(format);
  const normalizedPath = await getNotePath(folder, filename);
  try {
    const createdFile = await vault.create(normalizedPath, templateContents.replace(/{{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?}}/gi, (_, _timeOrDate, calc, timeDelta, unit, momentFormat) => {
      const now = window.moment();
      const currentDate = date2.clone().set({
        hour: now.get("hour"),
        minute: now.get("minute"),
        second: now.get("second")
      });
      if (calc) {
        currentDate.add(parseInt(timeDelta, 10), unit);
      }
      if (momentFormat) {
        return currentDate.format(momentFormat.substring(1).trim());
      }
      return currentDate.format(format);
    }).replace(/{{\s*date\s*}}/gi, filename).replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm")).replace(/{{\s*title\s*}}/gi, filename));
    window.app.foldManager.save(createdFile, IFoldInfo);
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${normalizedPath}'`, err);
    new obsidian.Notice("Unable to create new file.");
  }
}
function getYearlyNote(date2, yearlyNotes) {
  var _a;
  return (_a = yearlyNotes[getDateUID(date2, "year")]) != null ? _a : null;
}
function getAllYearlyNotes() {
  const yearlyNotes = {};
  if (!appHasYearlyNotesPluginLoaded()) {
    return yearlyNotes;
  }
  const { vault } = window.app;
  const { folder } = getYearlyNoteSettings();
  const yearlyNotesFolder = vault.getAbstractFileByPath(obsidian.normalizePath(folder));
  if (!yearlyNotesFolder) {
    throw new YearlyNotesFolderMissingError("Failed to find yearly notes folder");
  }
  obsidian.Vault.recurseChildren(yearlyNotesFolder, (note) => {
    if (note instanceof obsidian.TFile) {
      const date2 = getDateFromFile(note, "year");
      if (date2) {
        const dateString = getDateUID(date2, "year");
        yearlyNotes[dateString] = note;
      }
    }
  });
  return yearlyNotes;
}
function appHasDailyNotesPluginLoaded() {
  var _a, _b;
  const { app } = window;
  const dailyNotesPlugin = app.internalPlugins.plugins["daily-notes"];
  if (dailyNotesPlugin && dailyNotesPlugin.enabled) {
    return true;
  }
  const periodicNotes = app.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.daily) == null ? void 0 : _b.enabled);
}
function appHasWeeklyNotesPluginLoaded() {
  var _a, _b;
  const { app } = window;
  if (app.plugins.getPlugin("calendar")) {
    return true;
  }
  const periodicNotes = app.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.weekly) == null ? void 0 : _b.enabled);
}
function appHasMonthlyNotesPluginLoaded() {
  var _a, _b;
  const { app } = window;
  const periodicNotes = app.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.monthly) == null ? void 0 : _b.enabled);
}
function appHasQuarterlyNotesPluginLoaded() {
  var _a, _b;
  const { app } = window;
  const periodicNotes = app.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.quarterly) == null ? void 0 : _b.enabled);
}
function appHasYearlyNotesPluginLoaded() {
  var _a, _b;
  const { app } = window;
  const periodicNotes = app.plugins.getPlugin("periodic-notes");
  return periodicNotes && ((_b = (_a = periodicNotes.settings) == null ? void 0 : _a.yearly) == null ? void 0 : _b.enabled);
}
function getPeriodicNoteSettings(granularity) {
  const getSettings = {
    day: getDailyNoteSettings,
    week: getWeeklyNoteSettings,
    month: getMonthlyNoteSettings,
    quarter: getQuarterlyNoteSettings,
    year: getYearlyNoteSettings
  }[granularity];
  return getSettings();
}
function createPeriodicNote(granularity, date2) {
  const createFn = {
    day: createDailyNote,
    month: createMonthlyNote,
    week: createWeeklyNote
  };
  return createFn[granularity](date2);
}
main$1.DEFAULT_DAILY_NOTE_FORMAT = DEFAULT_DAILY_NOTE_FORMAT;
main$1.DEFAULT_MONTHLY_NOTE_FORMAT = DEFAULT_MONTHLY_NOTE_FORMAT;
main$1.DEFAULT_QUARTERLY_NOTE_FORMAT = DEFAULT_QUARTERLY_NOTE_FORMAT;
main$1.DEFAULT_WEEKLY_NOTE_FORMAT = DEFAULT_WEEKLY_NOTE_FORMAT;
main$1.DEFAULT_YEARLY_NOTE_FORMAT = DEFAULT_YEARLY_NOTE_FORMAT;
main$1.appHasDailyNotesPluginLoaded = appHasDailyNotesPluginLoaded;
main$1.appHasMonthlyNotesPluginLoaded = appHasMonthlyNotesPluginLoaded;
main$1.appHasQuarterlyNotesPluginLoaded = appHasQuarterlyNotesPluginLoaded;
main$1.appHasWeeklyNotesPluginLoaded = appHasWeeklyNotesPluginLoaded;
main$1.appHasYearlyNotesPluginLoaded = appHasYearlyNotesPluginLoaded;
var createDailyNote_1 = main$1.createDailyNote = createDailyNote;
main$1.createMonthlyNote = createMonthlyNote;
main$1.createPeriodicNote = createPeriodicNote;
main$1.createQuarterlyNote = createQuarterlyNote;
main$1.createWeeklyNote = createWeeklyNote;
main$1.createYearlyNote = createYearlyNote;
var getAllDailyNotes_1 = main$1.getAllDailyNotes = getAllDailyNotes;
main$1.getAllMonthlyNotes = getAllMonthlyNotes;
main$1.getAllQuarterlyNotes = getAllQuarterlyNotes;
main$1.getAllWeeklyNotes = getAllWeeklyNotes;
main$1.getAllYearlyNotes = getAllYearlyNotes;
var getDailyNote_1 = main$1.getDailyNote = getDailyNote;
var getDailyNoteSettings_1 = main$1.getDailyNoteSettings = getDailyNoteSettings;
var getDateFromFile_1 = main$1.getDateFromFile = getDateFromFile;
main$1.getDateFromPath = getDateFromPath;
main$1.getDateUID = getDateUID;
main$1.getMonthlyNote = getMonthlyNote;
main$1.getMonthlyNoteSettings = getMonthlyNoteSettings;
main$1.getPeriodicNoteSettings = getPeriodicNoteSettings;
main$1.getQuarterlyNote = getQuarterlyNote;
main$1.getQuarterlyNoteSettings = getQuarterlyNoteSettings;
main$1.getTemplateInfo = getTemplateInfo;
main$1.getWeeklyNote = getWeeklyNote;
main$1.getWeeklyNoteSettings = getWeeklyNoteSettings;
main$1.getYearlyNote = getYearlyNote;
main$1.getYearlyNoteSettings = getYearlyNoteSettings;
function reducer(state, action) {
  switch (action.type) {
    case "SET_DAILYNOTES": {
      const dailyNotes = getAllDailyNotes_1();
      return __spreadProps(__spreadValues({}, state), {
        dailyNotes
      });
    }
    case "SET_APP": {
      return __spreadProps(__spreadValues({}, state), {
        app: action.payload.app
      });
    }
    default: {
      return state;
    }
  }
}
const defaultState = {
  dailyNotes: null,
  app: null
};
const appStore = createStore({
  globalState: defaultState$3,
  locationState: defaultState$2,
  eventState: defaultState$1,
  dailyNotesState: defaultState
}, combineReducers({
  globalState: reducer$3,
  locationState: reducer$2,
  eventState: reducer$1,
  dailyNotesState: reducer
}));
const appContext = _react_17_0_2_react.exports.createContext(appStore.getState());
class DailyNotesService {
  getState() {
    return appStore.getState().dailyNotesState;
  }
  getApp(app) {
    appStore.dispatch({
      type: "SET_APP",
      payload: {
        app
      }
    });
    return app;
  }
  async getMyAllDailyNotes() {
    const dailyNotes = getAllDailyNotes_1();
    appStore.dispatch({
      type: "SET_DAILYNOTES",
      payload: {
        dailyNotes
      }
    });
    return dailyNotes;
  }
  async getDailyNoteByEvent(date2) {
    const { dailyNotes } = this.getState();
    const dailyNote = getDailyNote_1(date2, dailyNotes);
    return dailyNote;
  }
}
const dailyNotesService = new DailyNotesService();
var storage;
(function(storage2) {
  function get2(keys2) {
    const data = {};
    for (const key of keys2) {
      try {
        const stringifyValue = localStorage.getItem(key);
        if (stringifyValue !== null) {
          const val = JSON.parse(stringifyValue);
          data[key] = val;
        }
      } catch (error) {
        console.error("Get storage failed in ", key, error);
      }
    }
    return data;
  }
  storage2.get = get2;
  function set(data) {
    for (const key in data) {
      try {
        const stringifyValue = JSON.stringify(data[key]);
        localStorage.setItem(key, stringifyValue);
      } catch (error) {
        console.error("Save storage failed in ", key, error);
      }
    }
  }
  storage2.set = set;
  function remove(keys2) {
    for (const key of keys2) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error("Remove storage failed in ", key, error);
      }
    }
  }
  storage2.remove = remove;
  function emitStorageChangedEvent() {
    var _a;
    const iframeEl = document.createElement("iframe");
    iframeEl.style.display = "none";
    document.body.appendChild(iframeEl);
    (_a = iframeEl.contentWindow) == null ? void 0 : _a.localStorage.setItem("t", Date.now().toString());
    iframeEl.remove();
  }
  storage2.emitStorageChangedEvent = emitStorageChangedEvent;
})(storage || (storage = {}));
class GlobalStateService {
  constructor() {
    __publicField(this, "getState", () => {
      return appStore.getState().globalState;
    });
    __publicField(this, "setEditEventId", (editEventId) => {
      appStore.dispatch({
        type: "SET_EDIT_EVENT_ID",
        payload: {
          editEventId
        }
      });
    });
    __publicField(this, "setMarkEventId", (markEventId) => {
      appStore.dispatch({
        type: "SET_MARK_EVENT_ID",
        payload: {
          markEventId
        }
      });
    });
    __publicField(this, "setIsMobileView", (isMobileView) => {
      appStore.dispatch({
        type: "SET_MOBILE_VIEW",
        payload: {
          isMobileView
        }
      });
    });
    __publicField(this, "setShowSiderbarInMobileView", (showSiderbarInMobileView) => {
      appStore.dispatch({
        type: "SET_SHOW_SIDEBAR_IN_MOBILE_VIEW",
        payload: {
          showSiderbarInMobileView
        }
      });
    });
    __publicField(this, "setAppSetting", (appSetting) => {
      appStore.dispatch({
        type: "SET_APP_SETTING",
        payload: appSetting
      });
      storage.set(appSetting);
    });
    var _a, _b, _c;
    const cachedSetting = storage.get([
      "shouldSplitEventWord",
      "shouldHideImageUrl",
      "shouldUseMarkdownParser"
    ]);
    const defaultAppSetting = {
      shouldSplitEventWord: (_a = cachedSetting.shouldSplitEventWord) != null ? _a : true,
      shouldHideImageUrl: (_b = cachedSetting.shouldHideImageUrl) != null ? _b : true,
      shouldUseMarkdownParser: (_c = cachedSetting.shouldUseMarkdownParser) != null ? _c : true
    };
    this.setAppSetting(defaultAppSetting);
  }
}
const globalStateService = new GlobalStateService();
class LocationService {
  constructor() {
    __publicField(this, "updateStateWithLocation", () => {
      var _a, _b, _c, _d, _e, _f;
      const { pathname, search, hash: hash2 } = window.location;
      const urlParams = new URLSearchParams(search);
      const state = {
        pathname: "/",
        hash: "",
        query: {
          tag: "",
          duration: null,
          text: "",
          type: "",
          filter: ""
        }
      };
      state.query.tag = (_a = urlParams.get("tag")) != null ? _a : "";
      state.query.type = (_b = urlParams.get("type")) != null ? _b : "";
      state.query.text = (_c = urlParams.get("text")) != null ? _c : "";
      state.query.filter = (_d = urlParams.get("filter")) != null ? _d : "";
      const from = parseInt((_e = urlParams.get("from")) != null ? _e : "0");
      const to = parseInt((_f = urlParams.get("to")) != null ? _f : "0");
      if (to > from && to !== 0) {
        state.query.duration = {
          from,
          to
        };
      }
      state.hash = hash2;
      state.pathname = this.getValidPathname(pathname);
      appStore.dispatch({
        type: "SET_LOCATION",
        payload: state
      });
    });
    __publicField(this, "getState", () => {
      return appStore.getState().locationState;
    });
    __publicField(this, "clearQuery", () => {
      appStore.dispatch({
        type: "SET_QUERY",
        payload: {
          tag: "",
          duration: null,
          text: "",
          type: "",
          filter: ""
        }
      });
    });
    __publicField(this, "setQuery", (query) => {
      appStore.dispatch({
        type: "SET_QUERY",
        payload: query
      });
    });
    __publicField(this, "setHash", (hash2) => {
      appStore.dispatch({
        type: "SET_HASH",
        payload: {
          hash: hash2
        }
      });
    });
    __publicField(this, "setPathname", (pathname) => {
      appStore.dispatch({
        type: "SET_PATHNAME",
        payload: {
          pathname
        }
      });
    });
    __publicField(this, "pushHistory", (pathname) => {
      appStore.dispatch({
        type: "SET_PATHNAME",
        payload: {
          pathname
        }
      });
    });
    __publicField(this, "replaceHistory", (pathname) => {
      appStore.dispatch({
        type: "SET_PATHNAME",
        payload: {
          pathname
        }
      });
    });
    __publicField(this, "setEventTypeQuery", (type = "") => {
      appStore.dispatch({
        type: "SET_TYPE",
        payload: {
          type
        }
      });
    });
    __publicField(this, "setEventFilter", (filterId) => {
      appStore.dispatch({
        type: "SET_QUERY_FILTER",
        payload: filterId
      });
    });
    __publicField(this, "setTextQuery", (text) => {
      appStore.dispatch({
        type: "SET_TEXT",
        payload: {
          text
        }
      });
    });
    __publicField(this, "setTagQuery", (tag) => {
      appStore.dispatch({
        type: "SET_TAG_QUERY",
        payload: {
          tag
        }
      });
    });
    __publicField(this, "setFromAndToQuery", (from, to) => {
      appStore.dispatch({
        type: "SET_DURATION_QUERY",
        payload: {
          duration: { from, to }
        }
      });
    });
    __publicField(this, "getValidPathname", (pathname) => {
      if (["/", "/recycle", "/setting"].includes(pathname)) {
        return pathname;
      } else {
        return "/";
      }
    });
    this.updateStateWithLocation();
    window.onpopstate = () => {
      this.updateStateWithLocation();
    };
  }
}
new LocationService();
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function getLinesInString(input) {
  const lines = [];
  let tempString = input;
  while (tempString.contains("\n")) {
    const lineEndIndex = tempString.indexOf("\n");
    lines.push(tempString.slice(0, lineEndIndex));
    tempString = tempString.slice(lineEndIndex + 1);
  }
  lines.push(tempString);
  return lines;
}
async function waitForInsert(EventContent, startDate) {
  const { vault } = appStore.getState().dailyNotesState.app;
  let lineNum;
  const startTime = startDate.toString();
  const newEvent = `- [ ] ` + DefaultEventComposition.replace(/{TIME}/g, require$$0.moment(startTime).format("HH:mm")).replace(/{CONTENT}/g, EventContent);
  const dailyNotes = await getAllDailyNotes_1();
  const existingFile = getDailyNote_1(require$$0.moment(startDate), dailyNotes);
  if (!existingFile) {
    const file = await createDailyNote_1(require$$0.moment(startDate));
    await dailyNotesService.getMyAllDailyNotes();
    const fileContents = await vault.read(file);
    const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents);
    await vault.modify(file, newFileContent.content);
    if (newFileContent.posNum === -1) {
      const allLines = getAllLinesFromFile$4(newFileContent.content);
      lineNum = allLines.length + 1;
    } else {
      lineNum = newFileContent.posNum + 1;
    }
    return {
      id: require$$0.moment(startDate).format("YYYYMMDDHHmm") + "00" + lineNum,
      title: EventContent,
      start: require$$0.moment(startDate).toDate(),
      end: require$$0.moment(startDate).toDate(),
      eventType: "TASK-TODO"
    };
  } else {
    const fileContents = await vault.read(existingFile);
    const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents);
    await vault.modify(existingFile, newFileContent.content);
    if (newFileContent.posNum === -1) {
      const allLines = getAllLinesFromFile$4(newFileContent.content);
      lineNum = allLines.length + 1;
    } else {
      lineNum = newFileContent.posNum + 1;
    }
    return {
      id: require$$0.moment(startDate).format("YYYYMMDDHHmm") + "00" + lineNum,
      title: EventContent,
      start: require$$0.moment(startDate).toDate(),
      end: require$$0.moment(startDate).toDate(),
      eventType: "TASK-TODO"
    };
  }
}
async function insertAfterHandler(targetString, formatted, fileContent) {
  const targetRegex = new RegExp(`s*${await escapeRegExp(targetString)}s*`);
  const fileContentLines = getLinesInString(fileContent);
  const targetPosition = fileContentLines.findIndex((line) => targetRegex.test(line));
  const targetNotFound = targetPosition === -1;
  if (targetNotFound) {
    console.log("unable to find insert after line in file.");
  }
  const nextHeaderPositionAfterTargetPosition = fileContentLines.slice(targetPosition + 1).findIndex((line) => /^#+ |---/.test(line));
  const foundNextHeader = nextHeaderPositionAfterTargetPosition !== -1;
  if (foundNextHeader) {
    let endOfSectionIndex;
    for (let i = nextHeaderPositionAfterTargetPosition + targetPosition; i > targetPosition; i--) {
      const lineIsNewline = /^[\s\n ]*$/.test(fileContentLines[i]);
      if (!lineIsNewline) {
        endOfSectionIndex = i;
        break;
      }
    }
    if (!endOfSectionIndex)
      endOfSectionIndex = targetPosition;
    return await insertTextAfterPositionInBody(formatted, fileContent, endOfSectionIndex, foundNextHeader);
  } else {
    return await insertTextAfterPositionInBody(formatted, fileContent, fileContentLines.length - 1, foundNextHeader);
  }
}
async function insertTextAfterPositionInBody(text, body, pos, found) {
  if (pos === -1) {
    return {
      content: `${body}
${text}`,
      posNum: -1
    };
  }
  const splitContent = body.split("\n");
  if (found) {
    const pre = splitContent.slice(0, pos + 1).join("\n");
    const post = splitContent.slice(pos + 1).join("\n");
    return {
      content: `${pre}
${text}
${post}`,
      posNum: pos
    };
  } else {
    const pre = splitContent.slice(0, pos + 1).join("\n");
    const post = splitContent.slice(pos + 1).join("\n");
    if (/[\s\S]*?/g.test(post)) {
      return {
        content: `${pre}
${text}`,
        posNum: pos
      };
    } else {
      return {
        content: `${pre}${text}
${post}`,
        posNum: pos
      };
    }
  }
}
const getAllLinesFromFile$4 = (cache) => cache.split(/\r?\n/);
async function changeEvent(eventid, originalContent, content, eventType) {
  const { dailyNotes } = dailyNotesService.getState();
  const { vault } = appStore.getState().dailyNotesState.app;
  const timeString = eventid.slice(0, 13) + "00";
  const idString = parseInt(eventid.slice(14));
  const originalDate = require$$0.moment(timeString, "YYYYMMDDHHmmSS");
  const dailyNote = getDailyNote_1(originalDate, dailyNotes);
  const fileContent = await vault.read(dailyNote);
  const fileLines = getAllLinesFromFile$3(fileContent);
  const removeEnter = content.replace(/\n/g, "<br>");
  const originalLine = fileLines[idString];
  const newLine = fileLines[idString].replace(originalContent, removeEnter);
  const newFileContent = fileContent.replace(originalLine, newLine);
  await vault.modify(dailyNote, newFileContent);
  return {
    id: eventid,
    title: removeEnter,
    start: require$$0.moment(originalDate.format("YYYY/MM/DD HH:mm:SS")).toDate(),
    end: require$$0.moment(originalDate.format("YYYY/MM/DD HH:mm:SS")).toDate(),
    eventType
  };
}
function getDailyNotePath() {
  const dailyNotesSetting = getDailyNoteSettings_1();
  const dailyNotePath = dailyNotesSetting.folder;
  return dailyNotePath;
}
const getAllLinesFromFile$3 = (cache) => cache.split(/\r?\n/);
class DailyNotesFolderMissingError extends Error {
}
async function getRemainingEvents(note) {
  if (!note) {
    return 0;
  }
  const { vault } = appStore.getState().dailyNotesState.app;
  let fileContents = await vault.read(note);
  let regexMatch;
  if (DefaultEventComposition != "" && /{TIME}/g.test(DefaultEventComposition) && /{CONTENT}/g.test(DefaultEventComposition)) {
    regexMatch = "(-|\\*) (\\[(.{1})\\]\\s)?" + DefaultEventComposition.replace(/{TIME}/g, "((\\<time\\>)?\\d{1,2}:\\d{2})?").replace(/ {CONTENT}/g, "");
  } else {
    regexMatch = "(-|\\*) (\\[(.{1})\\]\\s)?((\\<time\\>)?\\d{1,2}\\:\\d{2})?";
  }
  const regexMatchRe = new RegExp(regexMatch, "g");
  const matchLength = (fileContents.match(regexMatchRe) || []).length;
  const re2 = new RegExp(ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
  const processEntriesHeader = (fileContents.match(re2) || []).length;
  fileContents = null;
  if (processEntriesHeader) {
    return matchLength;
  }
  return 0;
}
async function getEventsFromDailyNote(dailyNote, dailyEvents) {
  if (!dailyNote) {
    return [];
  }
  const { vault } = appStore.getState().dailyNotesState.app;
  const Events = await getRemainingEvents(dailyNote);
  if (Events) {
    let fileContents = await vault.read(dailyNote);
    let fileLines = getAllLinesFromFile$2(fileContents);
    const startDate = getDateFromFile_1(dailyNote, "day");
    const endDate = getDateFromFile_1(dailyNote, "day");
    let processHeaderFound = false;
    let eventType;
    for (let i = 0; i < fileLines.length; i++) {
      const line = fileLines[i];
      if (line.length === 0)
        continue;
      if (processHeaderFound == false && lineContainsParseBelowToken(line)) {
        processHeaderFound = true;
      }
      if (processHeaderFound == true && !lineContainsParseBelowToken(line) && /^#{1,} /g.test(line)) {
        processHeaderFound = false;
      }
      if (lineContainsTime(line) && processHeaderFound) {
        const hourText = extractHourFromBulletLine(line);
        const minText = extractMinFromBulletLine(line);
        startDate.hours(parseInt(hourText));
        startDate.minutes(parseInt(minText));
        endDate.hours(parseInt(hourText));
        if (parseInt(hourText) > 22) {
          endDate.minutes(parseInt(minText));
        } else {
          endDate.minutes(parseInt(minText));
        }
        if (/^\s*[-*]\s(\[(.{1})\])\s/g.test(line)) {
          const eventTaskType = extractEventTaskTypeFromLine(line);
          if (eventTaskType === " ") {
            eventType = "TASK-TODO";
          } else if (eventTaskType === "x" || eventTaskType === "X") {
            eventType = "TASK-DONE";
          } else {
            eventType = "TASK-" + eventTaskType;
          }
        } else {
          eventType = "JOURNAL";
        }
        const rawText = extractTextFromTodoLine(line);
        if (rawText !== "") {
          dailyEvents.push({
            id: startDate.format("YYYYMMDDHHmm") + "00" + i,
            title: rawText,
            start: require$$0.moment(startDate).toDate(),
            end: require$$0.moment(startDate).toDate(),
            eventType
          });
        }
      }
    }
    fileLines = null;
    fileContents = null;
  }
}
async function getEvents() {
  const events = [];
  const { vault } = appStore.getState().dailyNotesState.app;
  const { folder } = getDailyNoteSettings_1();
  const dailyNotesFolder = vault.getAbstractFileByPath(require$$0.normalizePath(folder));
  if (!dailyNotesFolder) {
    throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
  }
  const dailyNotes = getAllDailyNotes_1();
  for (const string in dailyNotes) {
    if (dailyNotes[string] instanceof require$$0.TFile) {
      await getEventsFromDailyNote(dailyNotes[string], events);
    }
  }
  return events;
}
const getAllLinesFromFile$2 = (cache) => cache.split(/\r?\n/);
const lineContainsTime = (line) => {
  let regexMatch;
  if (DefaultEventComposition != "" && /{TIME}/g.test(DefaultEventComposition) && /{CONTENT}/g.test(DefaultEventComposition)) {
    regexMatch = "^\\s*(-|\\*)\\s(\\[(.{1})\\]\\s)?" + DefaultEventComposition.replace(/{TIME}/g, "(\\<time\\>)?\\d{1,2}:\\d{2}(\\<\\/time\\>)?").replace(/{CONTENT}/g, "(.*)$");
  } else {
    regexMatch = "^\\s*(-|\\*)\\s(\\[(.{1})\\]\\s)?(\\<time\\>)?\\d{1,2}\\:\\d{2}(.*)$";
  }
  const regexMatchRe = new RegExp(regexMatch, "");
  return regexMatchRe.test(line);
};
const lineContainsParseBelowToken = (line) => {
  if (ProcessEntriesBelow === "") {
    return true;
  }
  const re2 = new RegExp(ProcessEntriesBelow.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "");
  return re2.test(line);
};
const extractTextFromTodoLine = (line) => {
  var _a;
  let regexMatch;
  if (DefaultEventComposition != "" && /{TIME}/g.test(DefaultEventComposition) && /{CONTENT}/g.test(DefaultEventComposition)) {
    regexMatch = "^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?" + DefaultEventComposition.replace(/{TIME}/g, "(\\<time\\>)?((\\d{1,2})\\:(\\d{2}))?(\\<\\/time\\>)?").replace(/{CONTENT}/g, "(.*)$");
  } else {
    regexMatch = "^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?(\\<time\\>)?((\\d{1,2})\\:(\\d{2}))?(\\<\\/time\\>)?\\s?(.*)$";
  }
  const regexMatchRe = new RegExp(regexMatch, "");
  return (_a = regexMatchRe.exec(line)) == null ? void 0 : _a[8];
};
const extractHourFromBulletLine = (line) => {
  var _a;
  let regexHourMatch;
  if (DefaultEventComposition != "" && /{TIME}/g.test(DefaultEventComposition) && /{CONTENT}/g.test(DefaultEventComposition)) {
    regexHourMatch = "^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?" + DefaultEventComposition.replace(/{TIME}/g, "(\\<time\\>)?(\\d{1,2})\\:(\\d{2})(\\<\\/time\\>)?").replace(/{CONTENT}/g, "(.*)$");
  } else {
    regexHourMatch = "^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?(\\<time\\>)?(\\d{1,2})\\:(\\d{2})(.*)$";
  }
  const regexMatchRe = new RegExp(regexHourMatch, "");
  return (_a = regexMatchRe.exec(line)) == null ? void 0 : _a[4];
};
const extractMinFromBulletLine = (line) => {
  var _a;
  let regexHourMatch;
  if (DefaultEventComposition != "" && /{TIME}/g.test(DefaultEventComposition) && /{CONTENT}/g.test(DefaultEventComposition)) {
    regexHourMatch = "^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?" + DefaultEventComposition.replace(/{TIME}/g, "(\\<time\\>)?(\\d{1,2})\\:(\\d{2})(\\<\\/time\\>)?").replace(/{CONTENT}/g, "(.*)$");
  } else {
    regexHourMatch = "^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?(\\<time\\>)?(\\d{1,2})\\:(\\d{2})(.*)$";
  }
  const regexMatchRe = new RegExp(regexHourMatch, "");
  return (_a = regexMatchRe.exec(line)) == null ? void 0 : _a[5];
};
const extractEventTaskTypeFromLine = (line) => {
  var _a;
  return (_a = /^\s*[\-\*]\s(\[(.{1})\])\s(.*)$/.exec(line)) == null ? void 0 : _a[2];
};
const sendEventToDelete = async (eventContent) => {
  const { metadataCache, vault } = appStore.getState().dailyNotesState.app;
  const filePath = getDailyNotePath();
  const absolutePath = filePath + "/delete.md";
  const deleteFile = metadataCache.getFirstLinkpathDest("", absolutePath);
  if (deleteFile instanceof require$$0.TFile) {
    const fileContents = await vault.read(deleteFile);
    const fileLines = getAllLinesFromFile$1(fileContents);
    const date2 = require$$0.moment();
    const deleteDate = date2.format("YYYY/MM/DD HH:mm:ss");
    let lineNum;
    if (fileLines.length === 1 && fileLines[0] === "") {
      lineNum = 1;
    } else {
      lineNum = fileLines.length + 1;
    }
    const deleteDateID = date2.format("YYYYMMDDHHmmss") + lineNum;
    await createDeleteEventInFile(deleteFile, fileContents, eventContent, deleteDateID);
    return deleteDate;
  } else {
    const deleteFilePath = require$$0.normalizePath(absolutePath);
    const file = await createdeleteFile(deleteFilePath);
    const date2 = require$$0.moment();
    const deleteDate = date2.format("YYYY/MM/DD HH:mm:ss");
    const lineNum = 1;
    const deleteDateID = date2.format("YYYYMMDDHHmmss") + lineNum;
    await createDeleteEventInFile(file, "", eventContent, deleteDateID);
    return deleteDate;
  }
};
const createDeleteEventInFile = async (file, fileContent, eventContent, deleteDate) => {
  const { vault } = appStore.getState().dailyNotesState.app;
  let newContent;
  if (fileContent === "") {
    newContent = eventContent + " deletedAt: " + deleteDate;
  } else {
    newContent = fileContent + "\n" + eventContent + " deletedAt: " + deleteDate;
  }
  await vault.modify(file, newContent);
  return true;
};
const createdeleteFile = async (path) => {
  const { vault } = appStore.getState().dailyNotesState.app;
  try {
    const createdFile = await vault.create(path, "");
    return createdFile;
  } catch (err) {
    console.error(`Failed to create file: '${path}'`, err);
    new require$$0.Notice("Unable to create new file.");
  }
};
const getAllLinesFromFile$1 = (cache) => cache.split(/\r?\n/);
async function obHideEvent(eventid) {
  const { dailyNotes } = dailyNotesService.getState();
  if (/\d{14,}/.test(eventid)) {
    const { vault } = appStore.getState().dailyNotesState.app;
    const timeString = eventid.slice(0, 14);
    const idString = parseInt(eventid.slice(14));
    const changeDate = require$$0.moment(timeString, "YYYYMMDDHHmmSS");
    const dailyNote = getDailyNote_1(changeDate, dailyNotes);
    const fileContent = await vault.read(dailyNote);
    const fileLines = getAllLinesFromFile(fileContent);
    const content = extractContentfromText(fileLines[idString]);
    const originalLine = "- " + eventid + " " + content;
    const newLine = fileLines[idString];
    const newFileContent = fileContent.replace(newLine, "");
    await vault.modify(dailyNote, newFileContent);
    const deleteDate = await sendEventToDelete(originalLine);
    return deleteDate;
  }
}
const getAllLinesFromFile = (cache) => cache.split(/\r?\n/);
const extractContentfromText = (line) => {
  var _a;
  let regexMatch;
  if (DefaultEventComposition != "" && /{TIME}/g.test(DefaultEventComposition) && /{CONTENT}/g.test(DefaultEventComposition)) {
    regexMatch = "^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?" + DefaultEventComposition.replace(/{TIME}/g, "(\\<time\\>)?((\\d{1,2})\\:(\\d{2}))?(\\<\\/time\\>)?").replace(/{CONTENT}/g, "(.*)$");
  } else {
    regexMatch = "^\\s*[\\-\\*]\\s(\\[(.{1})\\]\\s?)?(\\<time\\>)?((\\d{1,2})\\:(\\d{2}))?(\\<\\/time\\>)?\\s?(.*)$";
  }
  const regexMatchRe = new RegExp(regexMatch, "");
  return (_a = regexMatchRe.exec(line)) == null ? void 0 : _a[8];
};
var api;
(function(api2) {
  function getUserInfo() {
  }
  api2.getUserInfo = getUserInfo;
  function checkUsernameUsable(username) {
  }
  api2.checkUsernameUsable = checkUsernameUsable;
  function checkPasswordValid(password) {
  }
  api2.checkPasswordValid = checkPasswordValid;
  function updateUserinfo(userinfo) {
  }
  api2.updateUserinfo = updateUserinfo;
  async function getMyEvents() {
    return await getEvents();
  }
  api2.getMyEvents = getMyEvents;
  function hideEvent(eventId) {
    return obHideEvent(eventId);
  }
  api2.hideEvent = hideEvent;
})(api || (api = {}));
var api$1 = api;
class EventService {
  constructor() {
    __publicField(this, "initialized", false);
  }
  getState() {
    return appStore.getState().eventState;
  }
  async fetchAllEvents() {
    const data = await api$1.getMyEvents();
    const events = [];
    for (const m2 of data) {
      events.push(m2);
    }
    appStore.dispatch({
      type: "SET_EVENTS",
      payload: {
        events
      }
    });
    if (!this.initialized) {
      this.initialized = true;
    }
    return events;
  }
  pushEvent(event) {
    appStore.dispatch({
      type: "INSERT_EVENT",
      payload: {
        event: __spreadValues({}, event)
      }
    });
  }
  getEventById(id2) {
    for (const m2 of this.getState().events) {
      if (m2.id === id2) {
        return m2;
      }
    }
    return null;
  }
  async hideEventById(id2) {
    await api$1.hideEvent(id2);
    appStore.dispatch({
      type: "DELETE_EVENT_BY_ID",
      payload: {
        id: id2
      }
    });
  }
  editEvent(event) {
    appStore.dispatch({
      type: "EDIT_EVENT",
      payload: event
    });
  }
  clearEvents() {
    appStore.dispatch({
      type: "SET_EVENTS",
      payload: {
        events: []
      }
    });
  }
  async createEvent(text, startDate) {
    const event = await waitForInsert(text, startDate);
    return event;
  }
  async updateEvent(eventId, originalText, text, type) {
    const event = await changeEvent(eventId, originalText, text, type);
    return event;
  }
}
const eventService = new EventService();
function useRefresh() {
  const [, setBoolean] = _react_17_0_2_react.exports.useState(false);
  const refresh = _react_17_0_2_react.exports.useCallback(() => {
    setBoolean((ps) => {
      return !ps;
    });
  }, []);
  return refresh;
}
var Calendar$2 = "";
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var _propTypes_15_7_2_propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  _propTypes_15_7_2_propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = _propTypes_15_7_2_propTypes.exports;
var invariant = function(condition, format, a, b, c, d, e, f2) {
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var args = [a, b, c, d, e, f2];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
var browser = invariant;
var noop$1 = function noop2() {
};
function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function(prop) {
    propTypes[defaultKey(prop)] = noop$1;
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== void 0;
}
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
  return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
  }
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }
  var displayName = Component.displayName || Component.name || "Component";
  var canAcceptRef$1 = canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef$1 || !methods.length) ? browser(false) : void 0;
  var UncontrolledComponent = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(UncontrolledComponent2, _React$Component);
    function UncontrolledComponent2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function(propName) {
        var handlerName = controlledValues[propName];
        var handleChange = function handleChange2(value) {
          if (_this.props[handlerName]) {
            var _this$props;
            _this._notifying = true;
            for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args2[_key2 - 1] = arguments[_key2];
            }
            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args2));
            _this._notifying = false;
          }
          if (!_this.unmounted)
            _this.setState(function(_ref) {
              var _extends22;
              var values2 = _ref.values;
              return {
                values: _extends$1(Object.create(null), values2, (_extends22 = {}, _extends22[propName] = value, _extends22))
              };
            });
        };
        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length)
        _this.attachRef = function(ref) {
          _this.inner = ref;
        };
      var values = Object.create(null);
      controlledProps.forEach(function(key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values,
        prevProps: {}
      };
      return _this;
    }
    var _proto = UncontrolledComponent2.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      return !this._notifying;
    };
    UncontrolledComponent2.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values, prevProps = _ref2.prevProps;
      var nextState = {
        values: _extends$1(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function(key) {
        nextState.prevProps[key] = props[key];
        if (!isProp(props, key) && isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);
      PROPS_TO_OMIT.forEach(function(prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function(propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== void 0 ? propValue : _this2.state.values[propName];
      });
      return React.createElement(Component, _extends$1({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };
    return UncontrolledComponent2;
  }(React.Component);
  polyfill(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends$1({
    innerRef: function innerRef() {
    }
  }, uncontrolledPropTypes(controlledValues));
  methods.forEach(function(method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;
      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;
  if (React.forwardRef) {
    WrappedComponent = React.forwardRef(function(props, ref) {
      return React.createElement(UncontrolledComponent, _extends$1({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }
  WrappedComponent.ControlledComponent = Component;
  WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }
    return uncontrollable(newComponent, _extends$1({}, controlledValues, additions), nextMethods);
  };
  return WrappedComponent;
}
function toVal(mix) {
  var k, y2, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y2 = toVal(mix[k])) {
            str && (str += " ");
            str += y2;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx() {
  var i = 0, tmp, x2, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x2 = toVal(tmp)) {
        str && (str += " ");
        str += x2;
      }
    }
  }
  return str;
}
var clsx_m = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": clsx
});
var MILI = "milliseconds", SECONDS = "seconds", MINUTES = "minutes", HOURS = "hours", DAY = "day", WEEK = "week", MONTH = "month", YEAR = "year", DECADE = "decade", CENTURY = "century";
var multiplierMilli = {
  "milliseconds": 1,
  "seconds": 1e3,
  "minutes": 60 * 1e3,
  "hours": 60 * 60 * 1e3,
  "day": 24 * 60 * 60 * 1e3,
  "week": 7 * 24 * 60 * 60 * 1e3
};
var multiplierMonth = {
  "month": 1,
  "year": 12,
  "decade": 10 * 12,
  "century": 100 * 12
};
function daysOf(year2) {
  return [31, daysInFeb(year2), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function daysInFeb(year2) {
  return year2 % 4 === 0 && year2 % 100 !== 0 || year2 % 400 === 0 ? 29 : 28;
}
function add(d, num, unit) {
  d = new Date(d);
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      return addMillis(d, num * multiplierMilli[unit]);
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      return addMonths(d, num * multiplierMonth[unit]);
  }
  throw new TypeError('Invalid units: "' + unit + '"');
}
function addMillis(d, num) {
  var nextDate = new Date(+d + num);
  return solveDST(d, nextDate);
}
function addMonths(d, num) {
  var year2 = d.getFullYear(), month2 = d.getMonth(), day2 = d.getDate(), totalMonths = year2 * 12 + month2 + num, nextYear = Math.trunc(totalMonths / 12), nextMonth = totalMonths % 12, nextDay = Math.min(day2, daysOf(nextYear)[nextMonth]);
  var nextDate = new Date(d);
  nextDate.setFullYear(nextYear);
  nextDate.setDate(1);
  nextDate.setMonth(nextMonth);
  nextDate.setDate(nextDay);
  return nextDate;
}
function solveDST(currentDate, nextDate) {
  var currentOffset = currentDate.getTimezoneOffset(), nextOffset = nextDate.getTimezoneOffset();
  var diffMinutes = nextOffset - currentOffset;
  return new Date(+nextDate + diffMinutes * multiplierMilli["minutes"]);
}
function subtract(d, num, unit) {
  return add(d, -num, unit);
}
function startOf(d, unit, firstOfWeek) {
  d = new Date(d);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
      d = month(d, 0);
    case MONTH:
      d = date(d, 1);
    case WEEK:
    case DAY:
      d = hours(d, 0);
    case HOURS:
      d = minutes(d, 0);
    case MINUTES:
      d = seconds(d, 0);
    case SECONDS:
      d = milliseconds(d, 0);
  }
  if (unit === DECADE)
    d = subtract(d, year(d) % 10, "year");
  if (unit === CENTURY)
    d = subtract(d, year(d) % 100, "year");
  if (unit === WEEK)
    d = weekday(d, 0, firstOfWeek);
  return d;
}
function endOf(d, unit, firstOfWeek) {
  d = new Date(d);
  d = startOf(d, unit, firstOfWeek);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
    case MONTH:
    case WEEK:
      d = add(d, 1, unit);
      d = subtract(d, 1, DAY);
      d.setHours(23, 59, 59, 999);
      break;
    case DAY:
      d.setHours(23, 59, 59, 999);
      break;
    case HOURS:
    case MINUTES:
    case SECONDS:
      d = add(d, 1, unit);
      d = subtract(d, 1, MILI);
  }
  return d;
}
var eq$4 = createComparer(function(a, b) {
  return a === b;
});
var neq = createComparer(function(a, b) {
  return a !== b;
});
var gt = createComparer(function(a, b) {
  return a > b;
});
var gte = createComparer(function(a, b) {
  return a >= b;
});
var lt = createComparer(function(a, b) {
  return a < b;
});
var lte = createComparer(function(a, b) {
  return a <= b;
});
function min$1() {
  return new Date(Math.min.apply(Math, arguments));
}
function max$1() {
  return new Date(Math.max.apply(Math, arguments));
}
function inRange$2(day2, min2, max2, unit) {
  unit = unit || "day";
  return (!min2 || gte(day2, min2, unit)) && (!max2 || lte(day2, max2, unit));
}
var milliseconds = createAccessor("Milliseconds");
var seconds = createAccessor("Seconds");
var minutes = createAccessor("Minutes");
var hours = createAccessor("Hours");
var day = createAccessor("Day");
var date = createAccessor("Date");
var month = createAccessor("Month");
var year = createAccessor("FullYear");
function weekday(d, val, firstDay) {
  var w2 = (day(d) + 7 - (firstDay || 0)) % 7;
  return val === void 0 ? w2 : add(d, val - w2, DAY);
}
function createAccessor(method) {
  var hourLength = function(method2) {
    switch (method2) {
      case "Milliseconds":
        return 36e5;
      case "Seconds":
        return 3600;
      case "Minutes":
        return 60;
      case "Hours":
        return 1;
      default:
        return null;
    }
  }(method);
  return function(d, val) {
    if (val === void 0)
      return d["get" + method]();
    var dateOut = new Date(d);
    dateOut["set" + method](val);
    if (hourLength && dateOut["get" + method]() != val && (method === "Hours" || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {
      dateOut["set" + method](val + hourLength);
    }
    return dateOut;
  };
}
function createComparer(operator) {
  return function(a, b, unit) {
    return operator(+startOf(a, unit), +startOf(b, unit));
  };
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function baseSlice(array, start2, end2) {
  var index = -1, length = array.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end2 = end2 > length ? length : end2;
  if (end2 < 0) {
    end2 += length;
  }
  length = start2 > end2 ? 0 : end2 - start2 >>> 0;
  start2 >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start2];
  }
  return result;
}
function eq$3(value, other) {
  return value === other || value !== value && other !== other;
}
var freeGlobal$2 = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$3 = freeGlobal$2;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$9 = freeGlobal$3 || freeSelf$1 || Function("return this")();
var root$a = root$9;
var Symbol$6 = root$a.Symbol;
var Symbol$7 = Symbol$6;
var objectProto$s = Object.prototype;
var hasOwnProperty$m = objectProto$s.hasOwnProperty;
var nativeObjectToString$3 = objectProto$s.toString;
var symToStringTag$3 = Symbol$7 ? Symbol$7.toStringTag : void 0;
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$m.call(value, symToStringTag$3), tag = value[symToStringTag$3];
  try {
    value[symToStringTag$3] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}
var objectProto$r = Object.prototype;
var nativeObjectToString$2 = objectProto$r.toString;
function objectToString$2(value) {
  return nativeObjectToString$2.call(value);
}
var nullTag$1 = "[object Null]", undefinedTag$1 = "[object Undefined]";
var symToStringTag$2 = Symbol$7 ? Symbol$7.toStringTag : void 0;
function baseGetTag$6(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag$1 : nullTag$1;
  }
  return symToStringTag$2 && symToStringTag$2 in Object(value) ? getRawTag$2(value) : objectToString$2(value);
}
function isObject$5(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag$1 = "[object AsyncFunction]", funcTag$4 = "[object Function]", genTag$2 = "[object GeneratorFunction]", proxyTag$1 = "[object Proxy]";
function isFunction$5(value) {
  if (!isObject$5(value)) {
    return false;
  }
  var tag = baseGetTag$6(value);
  return tag == funcTag$4 || tag == genTag$2 || tag == asyncTag$1 || tag == proxyTag$1;
}
var MAX_SAFE_INTEGER$3 = 9007199254740991;
function isLength$4(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$3;
}
function isArrayLike$2(value) {
  return value != null && isLength$4(value.length) && !isFunction$5(value);
}
var MAX_SAFE_INTEGER$2 = 9007199254740991;
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$2 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint$1.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function isIterateeCall(value, index, object) {
  if (!isObject$5(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike$2(object) && isIndex$3(index, object.length) : type == "string" && index in object) {
    return eq$3(object[index], value);
  }
  return false;
}
var reWhitespace$1 = /\s/;
function trimmedEndIndex$2(string) {
  var index = string.length;
  while (index-- && reWhitespace$1.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart$1 = /^\s+/;
function baseTrim$2(string) {
  return string ? string.slice(0, trimmedEndIndex$2(string) + 1).replace(reTrimStart$1, "") : string;
}
function isObjectLike$6(value) {
  return value != null && typeof value == "object";
}
var symbolTag$5 = "[object Symbol]";
function isSymbol$5(value) {
  return typeof value == "symbol" || isObjectLike$6(value) && baseGetTag$6(value) == symbolTag$5;
}
var NAN$1 = 0 / 0;
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary$1 = /^0b[01]+$/i;
var reIsOctal$1 = /^0o[0-7]+$/i;
var freeParseInt$1 = parseInt;
function toNumber$2(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$5(value)) {
    return NAN$1;
  }
  if (isObject$5(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$5(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim$2(value);
  var isBinary = reIsBinary$1.test(value);
  return isBinary || reIsOctal$1.test(value) ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$1.test(value) ? NAN$1 : +value;
}
var INFINITY$5 = 1 / 0, MAX_INTEGER$1 = 17976931348623157e292;
function toFinite$2(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$2(value);
  if (value === INFINITY$5 || value === -INFINITY$5) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER$1;
  }
  return value === value ? value : 0;
}
function toInteger$2(value) {
  var result = toFinite$2(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var nativeCeil$1 = Math.ceil, nativeMax$4 = Math.max;
function chunk(array, size2, guard) {
  if (guard ? isIterateeCall(array, size2, guard) : size2 === void 0) {
    size2 = 1;
  } else {
    size2 = nativeMax$4(toInteger$2(size2), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size2 < 1) {
    return [];
  }
  var index = 0, resIndex = 0, result = Array(nativeCeil$1(length / size2));
  while (index < length) {
    result[resIndex++] = baseSlice(array, index, index += size2);
  }
  return result;
}
function ownerDocument$1(node) {
  return node && node.ownerDocument || document;
}
function ownerWindow(node) {
  var doc = ownerDocument$1(node);
  return doc && doc.defaultView || window;
}
function getComputedStyle$1(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
function style(node, property2) {
  var css = "";
  var transforms = "";
  if (typeof property2 === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property2)) || getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property2));
  }
  Object.keys(property2).forEach(function(key) {
    var value = property2[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
function contains$1(context, node) {
  if (context.contains)
    return context.contains(node);
  if (context.compareDocumentPosition)
    return context === node || !!(context.compareDocumentPosition(node) & 16);
}
var contains$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": contains$1
});
function isDocument(element) {
  return "nodeType" in element && element.nodeType === document.DOCUMENT_NODE;
}
function isWindow(node) {
  if ("window" in node && node.window === node)
    return node;
  if (isDocument(node))
    return node.defaultView || false;
  return false;
}
function getscrollAccessor(offset2) {
  var prop = offset2 === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function scrollAccessor(node, val) {
    var win = isWindow(node);
    if (val === void 0) {
      return win ? win[offset2] : node[prop];
    }
    if (win) {
      win.scrollTo(win[offset2], val);
    } else {
      node[prop] = val;
    }
  }
  return scrollAccessor;
}
var getScrollLeft = getscrollAccessor("pageXOffset");
var getScrollTop = getscrollAccessor("pageYOffset");
function offset$2(node) {
  var doc = ownerDocument$1(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement;
  if (!docElem || !contains$1(docElem, node))
    return box;
  if (node.getBoundingClientRect !== void 0)
    box = node.getBoundingClientRect();
  box = {
    top: box.top + getScrollTop(docElem) - (docElem.clientTop || 0),
    left: box.left + getScrollLeft(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}
var isHTMLElement$1 = function isHTMLElement2(e) {
  return !!e && "offsetParent" in e;
};
function offsetParent(node) {
  var doc = ownerDocument$1(node);
  var parent2 = node && node.offsetParent;
  while (isHTMLElement$1(parent2) && parent2.nodeName !== "HTML" && style(parent2, "position") === "static") {
    parent2 = parent2.offsetParent;
  }
  return parent2 || doc.documentElement;
}
var nodeName = function nodeName2(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};
function position(node, offsetParent$1) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset2;
  if (style(node, "position") === "fixed") {
    offset2 = node.getBoundingClientRect();
  } else {
    var parent2 = offsetParent$1 || offsetParent(node);
    offset2 = offset$2(node);
    if (nodeName(parent2) !== "html")
      parentOffset = offset$2(parent2);
    var borderTop = String(style(parent2, "borderTopWidth") || 0);
    parentOffset.top += parseInt(borderTop, 10) - getScrollTop(parent2) || 0;
    var borderLeft = String(style(parent2, "borderLeftWidth") || 0);
    parentOffset.left += parseInt(borderLeft, 10) - getScrollLeft(parent2) || 0;
  }
  var marginTop = String(style(node, "marginTop") || 0);
  var marginLeft = String(style(node, "marginLeft") || 0);
  return _extends$1({}, offset2, {
    top: offset2.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset2.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var prev = new Date().getTime();
function fallback(fn3) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var handle = setTimeout(fn3, ms);
  prev = curr;
  return handle;
}
var vendors = ["", "webkit", "moz", "o", "ms"];
var cancelMethod = "clearTimeout";
var rafImpl = fallback;
var getKey$1 = function getKey2(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};
if (canUseDOM) {
  vendors.some(function(vendor) {
    var rafMethod = getKey$1(vendor, "request");
    if (rafMethod in window) {
      cancelMethod = getKey$1(vendor, "cancel");
      rafImpl = function rafImpl2(cb2) {
        return window[rafMethod](cb2);
      };
    }
    return !!rafImpl;
  });
}
var cancel = function cancel2(id2) {
  if (typeof window[cancelMethod] === "function")
    window[cancelMethod](id2);
};
var request = rafImpl;
function listCacheClear$2() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf$5(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto$1 = Array.prototype;
var splice$1 = arrayProto$1.splice;
function listCacheDelete$2(key) {
  var data = this.__data__, index = assocIndexOf$5(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet$2(key) {
  var data = this.__data__, index = assocIndexOf$5(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas$2(key) {
  return assocIndexOf$5(this.__data__, key) > -1;
}
function listCacheSet$2(key, value) {
  var data = this.__data__, index = assocIndexOf$5(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache$5(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$5.prototype.clear = listCacheClear$2;
ListCache$5.prototype["delete"] = listCacheDelete$2;
ListCache$5.prototype.get = listCacheGet$2;
ListCache$5.prototype.has = listCacheHas$2;
ListCache$5.prototype.set = listCacheSet$2;
function stackClear$2() {
  this.__data__ = new ListCache$5();
  this.size = 0;
}
function stackDelete$2(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet$2(key) {
  return this.__data__.get(key);
}
function stackHas$2(key) {
  return this.__data__.has(key);
}
var coreJsData$2 = root$a["__core-js_shared__"];
var coreJsData$3 = coreJsData$2;
var maskSrcKey$1 = function() {
  var uid = /[^.]+$/.exec(coreJsData$3 && coreJsData$3.keys && coreJsData$3.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$2(func) {
  return !!maskSrcKey$1 && maskSrcKey$1 in func;
}
var funcProto$4 = Function.prototype;
var funcToString$4 = funcProto$4.toString;
function toSource$3(func) {
  if (func != null) {
    try {
      return funcToString$4.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
var funcProto$3 = Function.prototype, objectProto$q = Object.prototype;
var funcToString$3 = funcProto$3.toString;
var hasOwnProperty$l = objectProto$q.hasOwnProperty;
var reIsNative$1 = RegExp("^" + funcToString$3.call(hasOwnProperty$l).replace(reRegExpChar$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$2(value) {
  if (!isObject$5(value) || isMasked$2(value)) {
    return false;
  }
  var pattern = isFunction$5(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(toSource$3(value));
}
function getValue$2(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative$7(object, key) {
  var value = getValue$2(object, key);
  return baseIsNative$2(value) ? value : void 0;
}
var Map$5 = getNative$7(root$a, "Map");
var Map$6 = Map$5;
var nativeCreate$5 = getNative$7(Object, "create");
var nativeCreate$6 = nativeCreate$5;
function hashClear$2() {
  this.__data__ = nativeCreate$6 ? nativeCreate$6(null) : {};
  this.size = 0;
}
function hashDelete$2(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$5 = "__lodash_hash_undefined__";
var objectProto$p = Object.prototype;
var hasOwnProperty$k = objectProto$p.hasOwnProperty;
function hashGet$2(key) {
  var data = this.__data__;
  if (nativeCreate$6) {
    var result = data[key];
    return result === HASH_UNDEFINED$5 ? void 0 : result;
  }
  return hasOwnProperty$k.call(data, key) ? data[key] : void 0;
}
var objectProto$o = Object.prototype;
var hasOwnProperty$j = objectProto$o.hasOwnProperty;
function hashHas$2(key) {
  var data = this.__data__;
  return nativeCreate$6 ? data[key] !== void 0 : hasOwnProperty$j.call(data, key);
}
var HASH_UNDEFINED$4 = "__lodash_hash_undefined__";
function hashSet$2(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$6 && value === void 0 ? HASH_UNDEFINED$4 : value;
  return this;
}
function Hash$2(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$2.prototype.clear = hashClear$2;
Hash$2.prototype["delete"] = hashDelete$2;
Hash$2.prototype.get = hashGet$2;
Hash$2.prototype.has = hashHas$2;
Hash$2.prototype.set = hashSet$2;
function mapCacheClear$2() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash$2(),
    "map": new (Map$6 || ListCache$5)(),
    "string": new Hash$2()
  };
}
function isKeyable$2(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData$5(map, key) {
  var data = map.__data__;
  return isKeyable$2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete$2(key) {
  var result = getMapData$5(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet$2(key) {
  return getMapData$5(this, key).get(key);
}
function mapCacheHas$2(key) {
  return getMapData$5(this, key).has(key);
}
function mapCacheSet$2(key, value) {
  var data = getMapData$5(this, key), size2 = data.size;
  data.set(key, value);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
function MapCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$4.prototype.clear = mapCacheClear$2;
MapCache$4.prototype["delete"] = mapCacheDelete$2;
MapCache$4.prototype.get = mapCacheGet$2;
MapCache$4.prototype.has = mapCacheHas$2;
MapCache$4.prototype.set = mapCacheSet$2;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$2(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$5) {
    var pairs = data.__data__;
    if (!Map$6 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$4(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack$3(entries) {
  var data = this.__data__ = new ListCache$5(entries);
  this.size = data.size;
}
Stack$3.prototype.clear = stackClear$2;
Stack$3.prototype["delete"] = stackDelete$2;
Stack$3.prototype.get = stackGet$2;
Stack$3.prototype.has = stackHas$2;
Stack$3.prototype.set = stackSet$2;
var HASH_UNDEFINED$3 = "__lodash_hash_undefined__";
function setCacheAdd$2(value) {
  this.__data__.set(value, HASH_UNDEFINED$3);
  return this;
}
function setCacheHas$2(value) {
  return this.__data__.has(value);
}
function SetCache$2(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$4();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd$2;
SetCache$2.prototype.has = setCacheHas$2;
function arraySome$2(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas$2(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$b = 1, COMPARE_UNORDERED_FLAG$7 = 2;
function equalArrays$3(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$b, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$7 ? new SetCache$2() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome$2(other, function(othValue2, othIndex) {
        if (!cacheHas$2(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var Uint8Array$2 = root$a.Uint8Array;
var Uint8Array$3 = Uint8Array$2;
function mapToArray$2(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray$2(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$a = 1, COMPARE_UNORDERED_FLAG$6 = 2;
var boolTag$5 = "[object Boolean]", dateTag$5 = "[object Date]", errorTag$4 = "[object Error]", mapTag$8 = "[object Map]", numberTag$5 = "[object Number]", regexpTag$5 = "[object RegExp]", setTag$8 = "[object Set]", stringTag$5 = "[object String]", symbolTag$4 = "[object Symbol]";
var arrayBufferTag$5 = "[object ArrayBuffer]", dataViewTag$7 = "[object DataView]";
var symbolProto$4 = Symbol$7 ? Symbol$7.prototype : void 0, symbolValueOf$2 = symbolProto$4 ? symbolProto$4.valueOf : void 0;
function equalByTag$2(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$7:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$5:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$3(object), new Uint8Array$3(other))) {
        return false;
      }
      return true;
    case boolTag$5:
    case dateTag$5:
    case numberTag$5:
      return eq$3(+object, +other);
    case errorTag$4:
      return object.name == other.name && object.message == other.message;
    case regexpTag$5:
    case stringTag$5:
      return object == other + "";
    case mapTag$8:
      var convert = mapToArray$2;
    case setTag$8:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$a;
      convert || (convert = setToArray$2);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$6;
      stack.set(object, other);
      var result = equalArrays$3(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$4:
      if (symbolValueOf$2) {
        return symbolValueOf$2.call(object) == symbolValueOf$2.call(other);
      }
  }
  return false;
}
function arrayPush$2(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
var isArray$9 = Array.isArray;
var isArray$a = isArray$9;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$a(object) ? result : arrayPush$2(result, symbolsFunc(object));
}
function arrayFilter$2(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray$2() {
  return [];
}
var objectProto$n = Object.prototype;
var propertyIsEnumerable$3 = objectProto$n.propertyIsEnumerable;
var nativeGetSymbols$2 = Object.getOwnPropertySymbols;
var getSymbols$2 = !nativeGetSymbols$2 ? stubArray$2 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter$2(nativeGetSymbols$2(object), function(symbol) {
    return propertyIsEnumerable$3.call(object, symbol);
  });
};
var getSymbols$3 = getSymbols$2;
function baseTimes$2(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$6 = "[object Arguments]";
function baseIsArguments$2(value) {
  return isObjectLike$6(value) && baseGetTag$6(value) == argsTag$6;
}
var objectProto$m = Object.prototype;
var hasOwnProperty$i = objectProto$m.hasOwnProperty;
var propertyIsEnumerable$2 = objectProto$m.propertyIsEnumerable;
var isArguments$3 = baseIsArguments$2(function() {
  return arguments;
}()) ? baseIsArguments$2 : function(value) {
  return isObjectLike$6(value) && hasOwnProperty$i.call(value, "callee") && !propertyIsEnumerable$2.call(value, "callee");
};
var isArguments$4 = isArguments$3;
function stubFalse$1() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$a.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer$3 = nativeIsBuffer || stubFalse$1;
var isBuffer$4 = isBuffer$3;
var argsTag$5 = "[object Arguments]", arrayTag$4 = "[object Array]", boolTag$4 = "[object Boolean]", dateTag$4 = "[object Date]", errorTag$3 = "[object Error]", funcTag$3 = "[object Function]", mapTag$7 = "[object Map]", numberTag$4 = "[object Number]", objectTag$7 = "[object Object]", regexpTag$4 = "[object RegExp]", setTag$7 = "[object Set]", stringTag$4 = "[object String]", weakMapTag$4 = "[object WeakMap]";
var arrayBufferTag$4 = "[object ArrayBuffer]", dataViewTag$6 = "[object DataView]", float32Tag$3 = "[object Float32Array]", float64Tag$3 = "[object Float64Array]", int8Tag$3 = "[object Int8Array]", int16Tag$3 = "[object Int16Array]", int32Tag$3 = "[object Int32Array]", uint8Tag$3 = "[object Uint8Array]", uint8ClampedTag$3 = "[object Uint8ClampedArray]", uint16Tag$3 = "[object Uint16Array]", uint32Tag$3 = "[object Uint32Array]";
var typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$3] = typedArrayTags$1[float64Tag$3] = typedArrayTags$1[int8Tag$3] = typedArrayTags$1[int16Tag$3] = typedArrayTags$1[int32Tag$3] = typedArrayTags$1[uint8Tag$3] = typedArrayTags$1[uint8ClampedTag$3] = typedArrayTags$1[uint16Tag$3] = typedArrayTags$1[uint32Tag$3] = true;
typedArrayTags$1[argsTag$5] = typedArrayTags$1[arrayTag$4] = typedArrayTags$1[arrayBufferTag$4] = typedArrayTags$1[boolTag$4] = typedArrayTags$1[dataViewTag$6] = typedArrayTags$1[dateTag$4] = typedArrayTags$1[errorTag$3] = typedArrayTags$1[funcTag$3] = typedArrayTags$1[mapTag$7] = typedArrayTags$1[numberTag$4] = typedArrayTags$1[objectTag$7] = typedArrayTags$1[regexpTag$4] = typedArrayTags$1[setTag$7] = typedArrayTags$1[stringTag$4] = typedArrayTags$1[weakMapTag$4] = false;
function baseIsTypedArray$2(value) {
  return isObjectLike$6(value) && isLength$4(value.length) && !!typedArrayTags$1[baseGetTag$6(value)];
}
function baseUnary$2(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$3.process;
var nodeUtil$1 = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$2 = nodeUtil$1;
var nodeIsTypedArray$1 = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray$1 ? baseUnary$2(nodeIsTypedArray$1) : baseIsTypedArray$2;
var isTypedArray$4 = isTypedArray$3;
var objectProto$l = Object.prototype;
var hasOwnProperty$h = objectProto$l.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$a(value), isArg = !isArr && isArguments$4(value), isBuff = !isArr && !isArg && isBuffer$4(value), isType = !isArr && !isArg && !isBuff && isTypedArray$4(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes$2(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$h.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$3(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$k = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$k;
  return value === proto;
}
function overArg$2(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var nativeKeys$2 = overArg$2(Object.keys, Object);
var nativeKeys$3 = nativeKeys$2;
var objectProto$j = Object.prototype;
var hasOwnProperty$g = objectProto$j.hasOwnProperty;
function baseKeys$2(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys$3(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$g.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys$3(object) {
  return isArrayLike$2(object) ? arrayLikeKeys$2(object) : baseKeys$2(object);
}
function getAllKeys$2(object) {
  return baseGetAllKeys$2(object, keys$3, getSymbols$3);
}
var COMPARE_PARTIAL_FLAG$9 = 1;
var objectProto$i = Object.prototype;
var hasOwnProperty$f = objectProto$i.hasOwnProperty;
function equalObjects$2(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$9, objProps = getAllKeys$2(object), objLength = objProps.length, othProps = getAllKeys$2(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$f.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var DataView$2 = getNative$7(root$a, "DataView");
var DataView$3 = DataView$2;
var Promise$3 = getNative$7(root$a, "Promise");
var Promise$4 = Promise$3;
var Set$3 = getNative$7(root$a, "Set");
var Set$4 = Set$3;
var WeakMap$3 = getNative$7(root$a, "WeakMap");
var WeakMap$4 = WeakMap$3;
var mapTag$6 = "[object Map]", objectTag$6 = "[object Object]", promiseTag$1 = "[object Promise]", setTag$6 = "[object Set]", weakMapTag$3 = "[object WeakMap]";
var dataViewTag$5 = "[object DataView]";
var dataViewCtorString$1 = toSource$3(DataView$3), mapCtorString$1 = toSource$3(Map$6), promiseCtorString$1 = toSource$3(Promise$4), setCtorString$1 = toSource$3(Set$4), weakMapCtorString$1 = toSource$3(WeakMap$4);
var getTag$2 = baseGetTag$6;
if (DataView$3 && getTag$2(new DataView$3(new ArrayBuffer(1))) != dataViewTag$5 || Map$6 && getTag$2(new Map$6()) != mapTag$6 || Promise$4 && getTag$2(Promise$4.resolve()) != promiseTag$1 || Set$4 && getTag$2(new Set$4()) != setTag$6 || WeakMap$4 && getTag$2(new WeakMap$4()) != weakMapTag$3) {
  getTag$2 = function(value) {
    var result = baseGetTag$6(value), Ctor = result == objectTag$6 ? value.constructor : void 0, ctorString = Ctor ? toSource$3(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString$1:
          return dataViewTag$5;
        case mapCtorString$1:
          return mapTag$6;
        case promiseCtorString$1:
          return promiseTag$1;
        case setCtorString$1:
          return setTag$6;
        case weakMapCtorString$1:
          return weakMapTag$3;
      }
    }
    return result;
  };
}
var getTag$3 = getTag$2;
var COMPARE_PARTIAL_FLAG$8 = 1;
var argsTag$4 = "[object Arguments]", arrayTag$3 = "[object Array]", objectTag$5 = "[object Object]";
var objectProto$h = Object.prototype;
var hasOwnProperty$e = objectProto$h.hasOwnProperty;
function baseIsEqualDeep$2(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$a(object), othIsArr = isArray$a(other), objTag = objIsArr ? arrayTag$3 : getTag$3(object), othTag = othIsArr ? arrayTag$3 : getTag$3(other);
  objTag = objTag == argsTag$4 ? objectTag$5 : objTag;
  othTag = othTag == argsTag$4 ? objectTag$5 : othTag;
  var objIsObj = objTag == objectTag$5, othIsObj = othTag == objectTag$5, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$4(object)) {
    if (!isBuffer$4(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3());
    return objIsArr || isTypedArray$4(object) ? equalArrays$3(object, other, bitmask, customizer, equalFunc, stack) : equalByTag$2(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$8)) {
    var objIsWrapped = objIsObj && hasOwnProperty$e.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$e.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$3());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3());
  return equalObjects$2(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual$4(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$6(value) && !isObjectLike$6(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep$2(value, other, bitmask, customizer, baseIsEqual$4, stack);
}
function isEqual$3(value, other) {
  return baseIsEqual$4(value, other);
}
function useCallbackRef() {
  return _react_17_0_2_react.exports.useState(null);
}
var toFnRef = function toFnRef2(ref) {
  return !ref || typeof ref === "function" ? ref : function(value) {
    ref.current = value;
  };
};
function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function(value) {
    if (a)
      a(value);
    if (b)
      b(value);
  };
}
function useMergedRefs(refA, refB) {
  return _react_17_0_2_react.exports.useMemo(function() {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument2 = node.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height2 = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height2) <= 1) {
    height2 = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height: height2
  };
}
function contains(parent2, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent2.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent2.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent2 = getTrueOffsetParent(element);
  while (offsetParent2 && isTableElement(offsetParent2) && getComputedStyle(offsetParent2).position === "static") {
    offsetParent2 = getTrueOffsetParent(offsetParent2);
  }
  if (offsetParent2 && (getNodeName(offsetParent2) === "html" || getNodeName(offsetParent2) === "body" && getComputedStyle(offsetParent2).position === "static")) {
    return window2;
  }
  return offsetParent2 || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$12, value, max$12) {
  return max(min$12, min(value, max$12));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options2 = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options2.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options2 = _ref2.options;
  var _options$element = options2.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y2 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x2 = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y2 = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent2 = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent2 === getWindow(popper2)) {
      offsetParent2 = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent2).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent2 = offsetParent2;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent2[heightProp];
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent2[widthProp];
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options2 = _ref4.options;
  var _options$gpuAccelerat = options2.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options2.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options2.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options2 = _ref.options;
  var _options$scroll = options2.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options2.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height2 = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height2 = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height: height2,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height2 = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height: height2,
    x: x2,
    y: y2
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle(clippingParent).position !== "static" : true);
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var _options = options2, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var _options = options2, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options2 = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options2.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options2.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options2.fallbackPlacements, padding = options2.padding, boundary = options2.boundary, rootBoundary = options2.rootBoundary, altBoundary = options2.altBoundary, _options$flipVariatio = options2.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options2.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options2 = _ref2.options, name = _ref2.name;
  var _options$offset = options2.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options2 = _ref.options, name = _ref.name;
  var _options$mainAxis = options2.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options2.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options2.boundary, rootBoundary = options2.rootBoundary, altBoundary = options2.altBoundary, padding = options2.padding, _options$tether = options2.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options2.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$12 = offset2 + overflow[mainSide];
    var max$12 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$12, tetherMin) : min$12, offset2, tether ? max(max$12, tetherMax) : max$12);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent2, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent2);
  var offsetParentIsScaled = isHTMLElement(offsetParent2) && isElementScaled(offsetParent2);
  var documentElement = getDocumentElement(offsetParent2);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent2) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent2);
    }
    if (isHTMLElement(offsetParent2)) {
      offsets = getBoundingClientRect(offsetParent2, true);
      offsets.x += offsetParent2.clientLeft;
      offsets.y += offsetParent2.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options2) {
    if (options2 === void 0) {
      options2 = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options3 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options3);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options2).then(function(state2) {
      if (!isDestroyed && options2.onFirstUpdate) {
        options2.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options3 = _ref3$options === void 0 ? {} : _ref3$options, effect3 = _ref3.effect;
        if (typeof effect3 === "function") {
          var cleanupFn = effect3({
            state,
            name,
            instance,
            options: options3
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator({
  defaultModifiers: [hide$1, popperOffsets$1, computeStyles$1, eventListeners, offset$1, flip$1, preventOverflow$1, arrow$1]
});
function useMounted() {
  var mounted = _react_17_0_2_react.exports.useRef(true);
  var isMounted = _react_17_0_2_react.exports.useRef(function() {
    return mounted.current;
  });
  _react_17_0_2_react.exports.useEffect(function() {
    return function() {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
function useSafeState(state) {
  var isMounted = useMounted();
  return [state[0], _react_17_0_2_react.exports.useCallback(function(nextState) {
    if (!isMounted())
      return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
var initialPopperStyles = function initialPopperStyles2(position2) {
  return {
    position: position2,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
};
var disabledApplyStylesModifier = {
  name: "applyStyles",
  enabled: false
};
var ariaDescribedByModifier = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect: function effect2(_ref) {
    var state = _ref.state;
    return function() {
      var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper;
      if ("removeAttribute" in reference2) {
        var ids = (reference2.getAttribute("aria-describedby") || "").split(",").filter(function(id2) {
          return id2.trim() !== popper2.id;
        });
        if (!ids.length)
          reference2.removeAttribute("aria-describedby");
        else
          reference2.setAttribute("aria-describedby", ids.join(","));
      }
    };
  },
  fn: function fn2(_ref2) {
    var _popper$getAttribute;
    var state = _ref2.state;
    var _state$elements2 = state.elements, popper2 = _state$elements2.popper, reference2 = _state$elements2.reference;
    var role = (_popper$getAttribute = popper2.getAttribute("role")) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper2.id && role === "tooltip" && "setAttribute" in reference2) {
      var ids = reference2.getAttribute("aria-describedby");
      if (ids && ids.split(",").indexOf(popper2.id) !== -1) {
        return;
      }
      reference2.setAttribute("aria-describedby", ids ? ids + "," + popper2.id : popper2.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp, _ref3$enabled = _ref3.enabled, enabled = _ref3$enabled === void 0 ? true : _ref3$enabled, _ref3$placement = _ref3.placement, placement = _ref3$placement === void 0 ? "bottom" : _ref3$placement, _ref3$strategy = _ref3.strategy, strategy = _ref3$strategy === void 0 ? "absolute" : _ref3$strategy, _ref3$modifiers = _ref3.modifiers, modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers, config = _objectWithoutPropertiesLoose(_ref3, ["enabled", "placement", "strategy", "modifiers"]);
  var popperInstanceRef = _react_17_0_2_react.exports.useRef();
  var update = _react_17_0_2_react.exports.useCallback(function() {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = _react_17_0_2_react.exports.useCallback(function() {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  var _useSafeState = useSafeState(_react_17_0_2_react.exports.useState({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {}
    }
  })), popperState = _useSafeState[0], setState = _useSafeState[1];
  var updateModifier = _react_17_0_2_react.exports.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: true,
      phase: "write",
      requires: ["computeStyles"],
      fn: function fn3(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function(element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state,
          styles,
          attributes,
          update,
          forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  _react_17_0_2_react.exports.useEffect(function() {
    if (!popperInstanceRef.current || !enabled)
      return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    });
  }, [strategy, placement, updateModifier, enabled]);
  _react_17_0_2_react.exports.useEffect(function() {
    if (!enabled || referenceElement == null || popperElement == null) {
      return void 0;
    }
    popperInstanceRef.current = createPopper(referenceElement, popperElement, _extends$1({}, config, {
      placement,
      strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function() {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = void 0;
        setState(function(s) {
          return _extends$1({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    };
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
var optionsSupported = false;
var onceSupported = false;
try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e) {
}
function addEventListener$2(node, eventName, handler, options2) {
  if (options2 && typeof options2 !== "boolean" && !onceSupported) {
    var once = options2.once, capture = options2.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options2 : capture);
  }
  node.addEventListener(eventName, handler, options2);
}
function removeEventListener(node, eventName, handler, options2) {
  var capture = options2 && typeof options2 !== "boolean" ? options2.capture : options2;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
function listen(node, eventName, handler, options2) {
  addEventListener$2(node, eventName, handler, options2);
  return function() {
    removeEventListener(node, eventName, handler, options2);
  };
}
var listen$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": listen
});
function useCommittedRef(value) {
  var ref = _react_17_0_2_react.exports.useRef(value);
  _react_17_0_2_react.exports.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref;
}
function useEventCallback(fn3) {
  var ref = useCommittedRef(fn3);
  return _react_17_0_2_react.exports.useCallback(function() {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
var ownerDocument = function(componentOrElement) {
  return ownerDocument$1(safeFindDOMNode(componentOrElement));
};
var escapeKeyCode = 27;
var noop = function noop3() {
};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget2(ref) {
  return ref && ("current" in ref ? ref.current : ref);
};
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, disabled = _ref.disabled, _ref$clickTrigger = _ref.clickTrigger, clickTrigger = _ref$clickTrigger === void 0 ? "click" : _ref$clickTrigger;
  var preventMouseRootCloseRef = _react_17_0_2_react.exports.useRef(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = _react_17_0_2_react.exports.useCallback(function(e) {
    var currentTarget = getRefTarget(ref);
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains$1(currentTarget, e.target);
  }, [ref]);
  var handleMouse = useEventCallback(function(e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = useEventCallback(function(e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  _react_17_0_2_react.exports.useEffect(function() {
    if (disabled || ref == null)
      return void 0;
    var currentEvent = window.event;
    var doc = ownerDocument(getRefTarget(ref));
    var removeMouseCaptureListener = listen(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = listen(doc, clickTrigger, function(e) {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleMouse(e);
    });
    var removeKeyupListener = listen(doc, "keyup", function(e) {
      if (e === currentEvent) {
        currentEvent = void 0;
        return;
      }
      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function(el) {
        return listen(el, "mousemove", noop);
      });
    }
    return function() {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function(remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}
var resolveContainerRef = function resolveContainerRef2(ref) {
  var _ref;
  if (typeof document === "undefined")
    return null;
  if (ref == null)
    return ownerDocument$1().body;
  if (typeof ref === "function")
    ref = ref();
  if (ref && "current" in ref)
    ref = ref.current;
  if ((_ref = ref) == null ? void 0 : _ref.nodeType)
    return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = _react_17_0_2_react.exports.useState(function() {
    return resolveContainerRef(ref);
  }), resolvedRef = _useState[0], setRef = _useState[1];
  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef)
      setRef(earlyRef);
  }
  _react_17_0_2_react.exports.useEffect(function() {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  _react_17_0_2_react.exports.useEffect(function() {
    var nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
function toModifierMap(modifiers) {
  var result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  }
  modifiers == null ? void 0 : modifiers.forEach(function(m2) {
    result[m2.name] = m2;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }
  if (Array.isArray(map))
    return map;
  return Object.keys(map).map(function(k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  var enabled = _ref.enabled, enableEvents = _ref.enableEvents, placement = _ref.placement, flip2 = _ref.flip, offset2 = _ref.offset, containerPadding = _ref.containerPadding, arrowElement = _ref.arrowElement, _ref$popperConfig = _ref.popperConfig, popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return _extends$1({}, popperConfig, {
    placement,
    enabled,
    modifiers: toModifierArray(_extends$1({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: _extends$1({}, modifiers.preventOverflow, {
        options: containerPadding ? _extends$1({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: _extends$1({
          offset: offset2
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: _extends$1({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: _extends$1({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: _extends$1({
        enabled: !!flip2
      }, modifiers.flip)
    }))
  });
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = _react_17_0_2_react.exports, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l2 = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l2 = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l2, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
var Overlay = /* @__PURE__ */ React.forwardRef(function(props, outerRef) {
  var flip2 = props.flip, offset2 = props.offset, placement = props.placement, _props$containerPaddi = props.containerPadding, containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi, _props$popperConfig = props.popperConfig, popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig, Transition = props.transition;
  var _useCallbackRef = useCallbackRef(), rootElement = _useCallbackRef[0], attachRef = _useCallbackRef[1];
  var _useCallbackRef2 = useCallbackRef(), arrowElement = _useCallbackRef2[0], attachArrowRef = _useCallbackRef2[1];
  var mergedRef = useMergedRefs(attachRef, outerRef);
  var container = useWaitForDOMRef(props.container);
  var target = useWaitForDOMRef(props.target);
  var _useState = _react_17_0_2_react.exports.useState(!props.show), exited = _useState[0], setExited = _useState[1];
  var _usePopper = usePopper(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip2,
    offset: offset2,
    arrowElement,
    popperConfig
  })), styles = _usePopper.styles, attributes = _usePopper.attributes, popper2 = _objectWithoutPropertiesLoose(_usePopper, ["styles", "attributes"]);
  if (props.show) {
    if (exited)
      setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }
  var handleHidden = function handleHidden2() {
    setExited(true);
    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  };
  var mountOverlay = props.show || Transition && !exited;
  useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    return null;
  }
  var child = props.children(_extends$1({}, popper2, {
    show: !!props.show,
    props: _extends$1({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: _extends$1({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));
  if (Transition) {
    var onExit = props.onExit, onExiting = props.onExiting, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered;
    child = /* @__PURE__ */ jsx(Transition, {
      in: props.show,
      appear: true,
      onExit,
      onExiting,
      onExited: handleHidden,
      onEnter,
      onEntering,
      onEntered,
      children: child
    });
  }
  return container ? /* @__PURE__ */ ReactDOM.createPortal(child, container) : null;
});
Overlay.displayName = "Overlay";
Overlay.propTypes = {
  show: PropTypes.bool,
  placement: PropTypes.oneOf(placements),
  target: PropTypes.any,
  container: PropTypes.any,
  flip: PropTypes.bool,
  children: PropTypes.func.isRequired,
  containerPadding: PropTypes.number,
  popperConfig: PropTypes.object,
  rootClose: PropTypes.bool,
  rootCloseEvent: PropTypes.oneOf(["click", "mousedown"]),
  rootCloseDisabled: PropTypes.bool,
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (props.rootClose) {
      var _PropTypes$func;
      return (_PropTypes$func = PropTypes.func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }
    return PropTypes.func.apply(PropTypes, [props].concat(args));
  },
  transition: PropTypes.elementType,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func
};
function height(node, client) {
  var win = isWindow(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset$2(node).height;
}
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
var matchesImpl;
function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesImpl = function matchesImpl2(n2, s) {
      return nativeMatch.call(n2, s);
    };
  }
  return matchesImpl(node, selector);
}
function closest(node, selector, stopAt) {
  if (node.closest && !stopAt)
    node.closest(selector);
  var nextNode = node;
  do {
    if (matches(nextNode, selector))
      return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);
  return null;
}
var closest$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": closest
});
function baseFindIndex$2(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var COMPARE_PARTIAL_FLAG$7 = 1, COMPARE_UNORDERED_FLAG$5 = 2;
function baseIsMatch$2(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$3();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$4(srcValue, objValue, COMPARE_PARTIAL_FLAG$7 | COMPARE_UNORDERED_FLAG$5, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable$3(value) {
  return value === value && !isObject$5(value);
}
function getMatchData$2(object) {
  var result = keys$3(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$3(value)];
  }
  return result;
}
function matchesStrictComparable$3(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches$2(source) {
  var matchData = getMatchData$2(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$3(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch$2(object, source, matchData);
  };
}
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp$1 = /^\w*$/;
function isKey$4(value, object) {
  if (isArray$a(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$5(value)) {
    return true;
  }
  return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize$2(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache$4)();
  return memoized;
}
memoize$2.Cache = MapCache$4;
var MAX_MEMOIZE_SIZE$1 = 500;
function memoizeCapped$2(func) {
  var result = memoize$2(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE$1) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$1 = /\\(\\)?/g;
var stringToPath$2 = memoizeCapped$2(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName$1, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, "$1") : number || match);
  });
  return result;
});
var stringToPath$3 = stringToPath$2;
function arrayMap$2(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var INFINITY$4 = 1 / 0;
var symbolProto$3 = Symbol$7 ? Symbol$7.prototype : void 0, symbolToString$1 = symbolProto$3 ? symbolProto$3.toString : void 0;
function baseToString$2(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$a(value)) {
    return arrayMap$2(value, baseToString$2) + "";
  }
  if (isSymbol$5(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$4 ? "-0" : result;
}
function toString$2(value) {
  return value == null ? "" : baseToString$2(value);
}
function castPath$3(value, object) {
  if (isArray$a(value)) {
    return value;
  }
  return isKey$4(value, object) ? [value] : stringToPath$3(toString$2(value));
}
var INFINITY$3 = 1 / 0;
function toKey$5(value) {
  if (typeof value == "string" || isSymbol$5(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$3 ? "-0" : result;
}
function baseGet$3(object, path) {
  path = castPath$3(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey$5(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get$2(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$3(object, path);
  return result === void 0 ? defaultValue : result;
}
function baseHasIn$2(object, key) {
  return object != null && key in Object(object);
}
function hasPath$2(object, path, hasFunc) {
  path = castPath$3(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey$5(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$4(length) && isIndex$3(key, length) && (isArray$a(object) || isArguments$4(object));
}
function hasIn$2(object, path) {
  return object != null && hasPath$2(object, path, baseHasIn$2);
}
var COMPARE_PARTIAL_FLAG$6 = 1, COMPARE_UNORDERED_FLAG$4 = 2;
function baseMatchesProperty$2(path, srcValue) {
  if (isKey$4(path) && isStrictComparable$3(srcValue)) {
    return matchesStrictComparable$3(toKey$5(path), srcValue);
  }
  return function(object) {
    var objValue = get$2(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn$2(object, path) : baseIsEqual$4(srcValue, objValue, COMPARE_PARTIAL_FLAG$6 | COMPARE_UNORDERED_FLAG$4);
  };
}
function identity$2(value) {
  return value;
}
function baseProperty$2(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep$2(path) {
  return function(object) {
    return baseGet$3(object, path);
  };
}
function property$2(path) {
  return isKey$4(path) ? baseProperty$2(toKey$5(path)) : basePropertyDeep$2(path);
}
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity$2;
  }
  if (typeof value == "object") {
    return isArray$a(value) ? baseMatchesProperty$2(value[0], value[1]) : baseMatches$2(value);
  }
  return property$2(value);
}
var nativeMax$3 = Math.max;
function findIndex$1(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger$2(fromIndex);
  if (index < 0) {
    index = nativeMax$3(length + index, 0);
  }
  return baseFindIndex$2(array, baseIteratee$2(predicate), index);
}
var nativeCeil = Math.ceil, nativeMax$2 = Math.max;
function baseRange(start2, end2, step, fromRight) {
  var index = -1, length = nativeMax$2(nativeCeil((end2 - start2) / (step || 1)), 0), result = Array(length);
  while (length--) {
    result[fromRight ? length : ++index] = start2;
    start2 += step;
  }
  return result;
}
function createRange(fromRight) {
  return function(start2, end2, step) {
    if (step && typeof step != "number" && isIterateeCall(start2, end2, step)) {
      end2 = step = void 0;
    }
    start2 = toFinite$2(start2);
    if (end2 === void 0) {
      end2 = start2;
      start2 = 0;
    } else {
      end2 = toFinite$2(end2);
    }
    step = step === void 0 ? start2 < end2 ? 1 : -1 : toFinite$2(step);
    return baseRange(start2, end2, step, fromRight);
  };
}
var range$1 = createRange();
var range$1$1 = range$1;
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual$2(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual$2(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual3(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var spreadableSymbol = Symbol$7 ? Symbol$7.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray$a(value) || isArguments$4(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$2(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var baseFor$1 = baseFor;
function baseForOwn(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys$3);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$2(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
var baseEach$1 = baseEach;
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike$2(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol$5(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol$5(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
function compareMultiple(object, other, orders) {
  var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order2 = orders[index];
      return result * (order2 == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap$2(iteratees, function(iteratee) {
      if (isArray$a(iteratee)) {
        return function(value) {
          return baseGet$3(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [identity$2];
  }
  var index = -1;
  iteratees = arrayMap$2(iteratees, baseUnary$2(baseIteratee$2));
  var result = baseMap(collection, function(value, key, collection2) {
    var criteria = arrayMap$2(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { "criteria": criteria, "index": ++index, "value": value };
  });
  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax$1 = Math.max;
function overRest(func, start2, transform2) {
  start2 = nativeMax$1(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform2(array);
    return apply(func, this, otherArgs);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative$7(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity$2 : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function baseRest(func, start2) {
  return setToString$1(overRest(func, start2, identity$2), func + "");
}
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});
var sortBy$1 = sortBy;
function getWidth(node, client) {
  var win = isWindow(node);
  return win ? win.innerWidth : client ? node.clientWidth : offset$2(node).width;
}
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var objectProto$g = Object.prototype;
var hasOwnProperty$d = objectProto$g.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$d.call(object, key) && eq$3(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
function baseAssign(object, source) {
  return object && copyObject(source, keys$3(source), object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$5(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$2(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$c.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike$2(object) ? arrayLikeKeys$2(object, true) : baseKeysIn(object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$a.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
function copySymbols(source, object) {
  return copyObject(source, getSymbols$3(source), object);
}
var getPrototype = overArg$2(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray$2 : function(object) {
  var result = [];
  while (object) {
    arrayPush$2(result, getSymbols$3(object));
    object = getPrototype$1(object);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function getAllKeysIn(object) {
  return baseGetAllKeys$2(object, keysIn, getSymbolsIn$1);
}
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$b.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$3(result).set(new Uint8Array$3(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$2 = Symbol$7 ? Symbol$7.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$3 = "[object Symbol]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return cloneArrayBuffer(object);
    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object);
    case dataViewTag$4:
      return cloneDataView(object, isDeep);
    case float32Tag$2:
    case float64Tag$2:
    case int8Tag$2:
    case int16Tag$2:
    case int32Tag$2:
    case uint8Tag$2:
    case uint8ClampedTag$2:
    case uint16Tag$2:
    case uint32Tag$2:
      return cloneTypedArray(object, isDeep);
    case mapTag$5:
      return new Ctor();
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);
    case regexpTag$3:
      return cloneRegExp(object);
    case setTag$5:
      return new Ctor();
    case symbolTag$3:
      return cloneSymbol(object);
  }
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$5(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype$2(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$4 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike$6(value) && getTag$3(value) == mapTag$4;
}
var nodeIsMap = nodeUtil$2 && nodeUtil$2.isMap;
var isMap = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$4 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike$6(value) && getTag$3(value) == setTag$4;
}
var nodeIsSet = nodeUtil$2 && nodeUtil$2.isSet;
var isSet = nodeIsSet ? baseUnary$2(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$3 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$2 = "[object Error]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] = cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] = cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] = cloneableTags[numberTag$2] = cloneableTags[objectTag$4] = cloneableTags[regexpTag$2] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] = cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$5(value)) {
    return value;
  }
  var isArr = isArray$a(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$3(value), isFunc = tag == funcTag$2 || tag == genTag$1;
    if (isBuffer$4(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$4 || tag == argsTag$3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$3());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys$2 : isFlat ? keysIn : keys$3;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet$3(object, baseSlice(path, 0, -1));
}
function baseUnset(object, path) {
  path = castPath$3(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey$5(last(path))];
}
var objectTag$3 = "[object Object]";
var funcProto$2 = Function.prototype, objectProto$d = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
var objectCtorString = funcToString$2.call(Object);
function isPlainObject(value) {
  if (!isObjectLike$6(value) || baseGetTag$6(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$a.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}
function customOmitClone(value) {
  return isPlainObject(value) ? void 0 : value;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap$2(paths, function(path) {
    path = castPath$3(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit$1 = omit;
var objectProto$c = Object.prototype;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
var defaults = baseRest(function(object, sources) {
  object = Object(object);
  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq$3(value, objectProto$c[key]) && !hasOwnProperty$9.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults$1 = defaults;
function transform(object, iteratee, accumulator) {
  var isArr = isArray$a(object), isArrLike = isArr || isBuffer$4(object) || isTypedArray$4(object);
  iteratee = baseIteratee$2(iteratee);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if (isObject$5(object)) {
      accumulator = isFunction$5(Ctor) ? baseCreate$1(getPrototype$1(object)) : {};
    } else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
    return iteratee(accumulator, value, index, object2);
  });
  return accumulator;
}
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee$2(iteratee);
  baseForOwn(object, function(value, key, object2) {
    baseAssignValue(result, key, iteratee(value, key, object2));
  });
  return result;
}
function NoopWrapper$1(props) {
  return props.children;
}
var navigate$1 = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
};
var views$1 = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
};
var viewNames$1 = Object.keys(views$1).map(function(k) {
  return views$1[k];
});
PropTypes.oneOfType([PropTypes.string, PropTypes.func]);
PropTypes.any;
PropTypes.func;
PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOf(viewNames$1)), PropTypes.objectOf(function(prop, key) {
  var isBuiltinView = viewNames$1.indexOf(key) !== -1 && typeof prop[key] === "boolean";
  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return PropTypes.elementType.apply(PropTypes, [prop, key].concat(args));
  }
})]);
PropTypes.oneOfType([PropTypes.oneOf(["overlap", "no-overlap"]), PropTypes.func]);
function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}
var MILLI = {
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  day: 1e3 * 60 * 60 * 24
};
function firstVisibleDay(date2, localizer) {
  var firstOfMonth = startOf(date2, "month");
  return startOf(firstOfMonth, "week", localizer.startOfWeek());
}
function lastVisibleDay(date2, localizer) {
  var endOfMonth = endOf(date2, "month");
  return endOf(endOfMonth, "week", localizer.startOfWeek());
}
function visibleDays(date2, localizer) {
  var current = firstVisibleDay(date2, localizer), last2 = lastVisibleDay(date2, localizer), days = [];
  while (lte(current, last2, "day")) {
    days.push(current);
    current = add(current, 1, "day");
  }
  return days;
}
function ceil(date2, unit) {
  var floor = startOf(date2, unit);
  return eq$4(floor, date2) ? floor : add(floor, 1, unit);
}
function range(start2, end2, unit) {
  if (unit === void 0) {
    unit = "day";
  }
  var current = start2, days = [];
  while (lte(current, end2, unit)) {
    days.push(current);
    current = add(current, 1, unit);
  }
  return days;
}
function merge(date2, time) {
  if (time == null && date2 == null)
    return null;
  if (time == null)
    time = new Date();
  if (date2 == null)
    date2 = new Date();
  date2 = startOf(date2, "day");
  date2 = hours(date2, hours(time));
  date2 = minutes(date2, minutes(time));
  date2 = seconds(date2, seconds(time));
  return milliseconds(date2, milliseconds(time));
}
function isJustDate(date2) {
  return hours(date2) === 0 && minutes(date2) === 0 && seconds(date2) === 0 && milliseconds(date2) === 0;
}
function diff(dateA, dateB, unit) {
  if (!unit || unit === "milliseconds")
    return Math.abs(+dateA - +dateB);
  return Math.round(Math.abs(+startOf(dateA, unit) / MILLI[unit] - +startOf(dateB, unit) / MILLI[unit]));
}
var localePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func]);
function _format(localizer, formatter, value, format, culture) {
  var result = typeof format === "function" ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
  !(result == null || typeof result === "string") ? browser(false) : void 0;
  return result;
}
function getSlotDate(dt, minutesFromMidnight, offset2) {
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, minutesFromMidnight + offset2, 0, 0);
}
function getDstOffset(start2, end2) {
  return start2.getTimezoneOffset() - end2.getTimezoneOffset();
}
function getTotalMin(start2, end2) {
  return diff(start2, end2, "minutes") + getDstOffset(start2, end2);
}
function getMinutesFromMidnight(start2) {
  var daystart = startOf(start2, "day");
  return diff(daystart, start2, "minutes") + getDstOffset(daystart, start2);
}
function continuesPrior(start2, first) {
  return lt(start2, first, "day");
}
function continuesAfter(start2, end2, last2) {
  var singleDayDuration = eq$4(start2, end2, "minutes");
  return singleDayDuration ? gte(end2, last2, "minutes") : gt(end2, last2, "minutes");
}
function sortEvents$1(_ref) {
  var _ref$evtA = _ref.evtA, aStart = _ref$evtA.start, aEnd = _ref$evtA.end, aAllDay = _ref$evtA.allDay, _ref$evtB = _ref.evtB, bStart = _ref$evtB.start, bEnd = _ref$evtB.end, bAllDay = _ref$evtB.allDay;
  var startSort = +startOf(aStart, "day") - +startOf(bStart, "day");
  var durA = diff(aStart, ceil(aEnd, "day"), "day");
  var durB = diff(bStart, ceil(bEnd, "day"), "day");
  return startSort || Math.max(durB, 1) - Math.max(durA, 1) || !!bAllDay - !!aAllDay || +aStart - +bStart || +aEnd - +bEnd;
}
function inEventRange(_ref2) {
  var _ref2$event = _ref2.event, start2 = _ref2$event.start, end2 = _ref2$event.end, _ref2$range = _ref2.range, rangeStart = _ref2$range.start, rangeEnd = _ref2$range.end;
  var eStart = startOf(start2, "day");
  var startsBeforeEnd = lte(eStart, rangeEnd, "day");
  var sameMin = neq(eStart, end2, "minutes");
  var endsAfterStart = sameMin ? gt(end2, rangeStart, "minutes") : gte(end2, rangeStart, "minutes");
  return startsBeforeEnd && endsAfterStart;
}
function isSameDate(date1, date2) {
  return eq$4(date1, date2, "day");
}
function startAndEndAreDateOnly(start2, end2) {
  return isJustDate(start2) && isJustDate(end2);
}
var DateLocalizer = function DateLocalizer2(spec) {
  var _this = this;
  !(typeof spec.format === "function") ? browser(false) : void 0;
  !(typeof spec.firstOfWeek === "function") ? browser(false) : void 0;
  this.propType = spec.propType || localePropType;
  this.formats = spec.formats;
  this.format = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
  this.startOfWeek = spec.firstOfWeek;
  this.merge = spec.merge || merge;
  this.inRange = spec.inRange || inRange$2;
  this.lt = spec.lt || lt;
  this.lte = spec.lte || lte;
  this.gt = spec.gt || gt;
  this.gte = spec.gte || gte;
  this.eq = spec.eq || eq$4;
  this.neq = spec.neq || neq;
  this.startOf = spec.startOf || startOf;
  this.endOf = spec.endOf || endOf;
  this.add = spec.add || add;
  this.range = spec.range || range;
  this.diff = spec.diff || diff;
  this.ceil = spec.ceil || ceil;
  this.min = spec.min || min$1;
  this.max = spec.max || max$1;
  this.minutes = spec.minutes || minutes;
  this.firstVisibleDay = spec.firstVisibleDay || firstVisibleDay;
  this.lastVisibleDay = spec.lastVisibleDay || lastVisibleDay;
  this.visibleDays = spec.visibleDays || visibleDays;
  this.getSlotDate = spec.getSlotDate || getSlotDate;
  this.getTotalMin = spec.getTotalMin || getTotalMin;
  this.getMinutesFromMidnight = spec.getMinutesFromMidnight || getMinutesFromMidnight;
  this.continuesPrior = spec.continuesPrior || continuesPrior;
  this.continuesAfter = spec.continuesAfter || continuesAfter;
  this.sortEvents = spec.sortEvents || sortEvents$1;
  this.inEventRange = spec.inEventRange || inEventRange;
  this.isSameDate = spec.isSameDate || isSameDate;
  this.startAndEndAreDateOnly = spec.startAndEndAreDateOnly || startAndEndAreDateOnly;
  this.segmentOffset = spec.browserTZOffset ? spec.browserTZOffset() : 0;
};
function mergeWithDefaults(localizer, culture, formatOverrides, messages2) {
  var formats2 = _extends$1({}, localizer.formats, formatOverrides);
  return _extends$1({}, localizer, {
    messages: messages2,
    startOfWeek: function startOfWeek() {
      return localizer.startOfWeek(culture);
    },
    format: function format(value, _format2) {
      return localizer.format(value, formats2[_format2] || _format2, culture);
    }
  });
}
var defaultMessages = {
  date: "Date",
  time: "Time",
  event: "Event",
  allDay: "All Day",
  week: "Week",
  work_week: "Work Week",
  day: "Day",
  month: "Month",
  previous: "Back",
  next: "Next",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  today: "Today",
  agenda: "Agenda",
  noEventsInRange: "There are no events in this range.",
  showMore: function showMore(total) {
    return "+" + total + " more";
  }
};
function messages(msgs) {
  return _extends$1({}, defaultMessages, msgs);
}
var _excluded$1 = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
var EventCell$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(EventCell2, _React$Component);
  function EventCell2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = EventCell2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, style2 = _this$props.style, className = _this$props.className, event = _this$props.event, selected = _this$props.selected, isAllDay = _this$props.isAllDay, onSelect = _this$props.onSelect, _onDoubleClick = _this$props.onDoubleClick, _onKeyPress = _this$props.onKeyPress, localizer = _this$props.localizer, continuesPrior2 = _this$props.continuesPrior, continuesAfter2 = _this$props.continuesAfter, accessors2 = _this$props.accessors, getters = _this$props.getters, children = _this$props.children, _this$props$component = _this$props.components, Event2 = _this$props$component.event, EventWrapper2 = _this$props$component.eventWrapper, slotStart = _this$props.slotStart, slotEnd = _this$props.slotEnd, props = _objectWithoutPropertiesLoose(_this$props, _excluded$1);
    delete props.resizable;
    var title = accessors2.title(event);
    var tooltip = accessors2.tooltip(event);
    var end2 = accessors2.end(event);
    var start2 = accessors2.start(event);
    var allDay = accessors2.allDay(event);
    var showAsAllDay = isAllDay || allDay || localizer.diff(start2, localizer.ceil(end2, "day"), "day") > 1;
    var userProps = getters.eventProp(event, start2, end2, selected);
    var content = /* @__PURE__ */ jsx("div", {
      className: "rbc-event-content",
      title: tooltip || void 0,
      children: Event2 ? /* @__PURE__ */ jsx(Event2, {
        event,
        continuesPrior: continuesPrior2,
        continuesAfter: continuesAfter2,
        title,
        isAllDay: allDay,
        localizer,
        slotStart,
        slotEnd
      }) : title
    });
    return /* @__PURE__ */ jsx(EventWrapper2, __spreadProps(__spreadValues({}, this.props), {
      type: "date",
      children: /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({}, props), {
        tabIndex: 0,
        style: _extends$1({}, userProps.style, style2),
        className: clsx("rbc-event", className, userProps.className, {
          "rbc-selected": selected,
          "rbc-event-allday": showAsAllDay,
          "rbc-event-continues-prior": continuesPrior2,
          "rbc-event-continues-after": continuesAfter2
        }),
        onClick: function onClick(e) {
          return onSelect && onSelect(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return _onDoubleClick && _onDoubleClick(event, e);
        },
        onKeyPress: function onKeyPress(e) {
          return _onKeyPress && _onKeyPress(event, e);
        },
        children: typeof children === "function" ? children(content) : content
      }))
    }));
  };
  return EventCell2;
}(React.Component);
EventCell$1.propTypes = {};
function isSelected$1(event, selected) {
  if (!event || selected == null)
    return false;
  return isEqual$3(event, selected);
}
function slotWidth$1(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX$1(rowBox, x2, rtl, slots) {
  var cellWidth = slotWidth$1(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x2 - rowBox.left) / cellWidth) : Math.floor((x2 - rowBox.left) / cellWidth);
}
function pointInBox$1(box, _ref) {
  var x2 = _ref.x, y2 = _ref.y;
  return y2 >= box.top && y2 <= box.bottom && x2 >= box.left && x2 <= box.right;
}
function dateCellSelection$1(start2, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth$1(rowBox, slots);
  var currentSlot = getSlotAtX$1(rowBox, box.x, rtl, slots);
  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start2.y && rowBox.bottom > start2.y;
  var isAboveStart = start2.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start2.y;
  var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom;
  if (isBetween) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }
  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }
  if (isStartRow) {
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start2.x - rowBox.left) / cellWidth) : Math.floor((start2.x - rowBox.left) / cellWidth);
    if (isCurrentRow) {
      if (currentSlot < startIdx)
        startIdx = currentSlot;
      else
        endIdx = currentSlot;
    } else if (start2.y < box.y) {
      endIdx = lastSlotIdx;
    } else {
      startIdx = 0;
    }
  }
  return {
    startIdx,
    endIdx
  };
}
var Popup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Popup2, _React$Component);
  function Popup2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Popup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props, _this$props$popupOffs = _this$props.popupOffset, popupOffset = _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs, popperRef = _this$props.popperRef, _getOffset = offset$2(popperRef.current), top2 = _getOffset.top, left2 = _getOffset.left, width = _getOffset.width, height2 = _getOffset.height, viewBottom = window.innerHeight + getScrollTop(window), viewRight = window.innerWidth + getScrollLeft(window), bottom2 = top2 + height2, right2 = left2 + width;
    if (bottom2 > viewBottom || right2 > viewRight) {
      var topOffset, leftOffset;
      if (bottom2 > viewBottom)
        topOffset = bottom2 - viewBottom + (popupOffset.y || +popupOffset || 0);
      if (right2 > viewRight)
        leftOffset = right2 - viewRight + (popupOffset.x || +popupOffset || 0);
      this.setState({
        topOffset,
        leftOffset
      });
    }
  };
  _proto.render = function render() {
    var _this = this;
    var _this$props2 = this.props, events = _this$props2.events, selected = _this$props2.selected, getters = _this$props2.getters, accessors2 = _this$props2.accessors, components = _this$props2.components, onSelect = _this$props2.onSelect, onDoubleClick = _this$props2.onDoubleClick, onKeyPress = _this$props2.onKeyPress, slotStart = _this$props2.slotStart, slotEnd = _this$props2.slotEnd, localizer = _this$props2.localizer, popperRef = _this$props2.popperRef;
    var width = this.props.position.width, topOffset = (this.state || {}).topOffset || 0, leftOffset = (this.state || {}).leftOffset || 0;
    var style2 = {
      top: -topOffset,
      left: -leftOffset,
      minWidth: width + width / 2
    };
    return /* @__PURE__ */ jsxs("div", {
      style: _extends$1({}, this.props.style, style2),
      className: "rbc-overlay",
      ref: popperRef,
      children: [/* @__PURE__ */ jsx("div", {
        className: "rbc-overlay-header",
        children: localizer.format(slotStart, "dayHeaderFormat")
      }), events.map(function(event, idx) {
        return /* @__PURE__ */ jsx(EventCell$1, {
          type: "popup",
          localizer,
          event,
          getters,
          onSelect,
          accessors: accessors2,
          components,
          onDoubleClick,
          onKeyPress,
          continuesPrior: localizer.lt(accessors2.end(event), slotStart, "day"),
          continuesAfter: localizer.gte(accessors2.start(event), slotEnd, "day"),
          slotStart,
          slotEnd,
          selected: isSelected$1(event, selected),
          draggable: true,
          onDragStart: function onDragStart() {
            return _this.props.handleDragStart(event);
          },
          onDragEnd: function onDragEnd() {
            return _this.props.show();
          }
        }, idx);
      })]
    });
  };
  return Popup2;
}(React.Component);
Popup.propTypes = {};
var Popup$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsx(Popup, __spreadValues({
    popperRef: ref
  }, props));
});
function addEventListener$1(type, handler, target) {
  if (target === void 0) {
    target = document;
  }
  return listen(target, type, handler, {
    passive: false
  });
}
function isOverContainer$1(container, x2, y2) {
  return !container || contains$1(container, document.elementFromPoint(x2, y2));
}
function getEventNodeFromPoint$1(node, _ref) {
  var clientX = _ref.clientX, clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, ".rbc-event", node);
}
function isEvent$1(node, bounds) {
  return !!getEventNodeFromPoint$1(node, bounds);
}
function getEventCoordinates$1(e) {
  var target = e;
  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }
  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}
var clickTolerance$1 = 5;
var clickInterval$1 = 250;
var Selection$2 = /* @__PURE__ */ function() {
  function Selection2(node, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp, _ref2$global = _ref2.global, global2 = _ref2$global === void 0 ? false : _ref2$global, _ref2$longPressThresh = _ref2.longPressThreshold, longPressThreshold = _ref2$longPressThresh === void 0 ? 250 : _ref2$longPressThresh;
    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global2;
    this.longPressThreshold = longPressThreshold;
    this._listeners = Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);
    this._removeTouchMoveWindowListener = addEventListener$1("touchmove", function() {
    }, window);
    this._removeKeyDownListener = addEventListener$1("keydown", this._keyListener);
    this._removeKeyUpListener = addEventListener$1("keyup", this._keyListener);
    this._removeDropFromOutsideListener = addEventListener$1("drop", this._dropFromOutsideListener);
    this._removeDragOverFromOutsideListener = addEventListener$1("dragover", this._dragOverFromOutsideListener);
    this._addInitialEventListener();
  }
  var _proto = Selection2.prototype;
  _proto.on = function on(type, handler) {
    var handlers = this._listeners[type] || (this._listeners[type] = []);
    handlers.push(handler);
    return {
      remove: function remove() {
        var idx = handlers.indexOf(handler);
        if (idx !== -1)
          handlers.splice(idx, 1);
      }
    };
  };
  _proto.emit = function emit(type) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var result;
    var handlers = this._listeners[type] || [];
    handlers.forEach(function(fn3) {
      if (result === void 0)
        result = fn3.apply(void 0, args);
    });
    return result;
  };
  _proto.teardown = function teardown() {
    this.isDetached = true;
    this._listeners = Object.create(null);
    this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
    this._removeInitialEventListener && this._removeInitialEventListener();
    this._removeEndListener && this._removeEndListener();
    this._onEscListener && this._onEscListener();
    this._removeMoveListener && this._removeMoveListener();
    this._removeKeyUpListener && this._removeKeyUpListener();
    this._removeKeyDownListener && this._removeKeyDownListener();
    this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
    this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
  };
  _proto.isSelected = function isSelected2(node) {
    var box = this._selectRect;
    if (!box || !this.selecting)
      return false;
    return objectsCollide$1(box, getBoundsForNode$1(node));
  };
  _proto.filter = function filter(items) {
    var box = this._selectRect;
    if (!box || !this.selecting)
      return [];
    return items.filter(this.isSelected, this);
  };
  _proto._addLongPressListener = function _addLongPressListener(handler, initialEvent) {
    var _this = this;
    var timer = null;
    var removeTouchMoveListener = null;
    var removeTouchEndListener = null;
    var handleTouchStart = function handleTouchStart2(initialEvent2) {
      timer = setTimeout(function() {
        cleanup();
        handler(initialEvent2);
      }, _this.longPressThreshold);
      removeTouchMoveListener = addEventListener$1("touchmove", function() {
        return cleanup();
      });
      removeTouchEndListener = addEventListener$1("touchend", function() {
        return cleanup();
      });
    };
    var removeTouchStartListener = addEventListener$1("touchstart", handleTouchStart);
    var cleanup = function cleanup2() {
      if (timer) {
        clearTimeout(timer);
      }
      if (removeTouchMoveListener) {
        removeTouchMoveListener();
      }
      if (removeTouchEndListener) {
        removeTouchEndListener();
      }
      timer = null;
      removeTouchMoveListener = null;
      removeTouchEndListener = null;
    };
    if (initialEvent) {
      handleTouchStart(initialEvent);
    }
    return function() {
      cleanup();
      removeTouchStartListener();
    };
  };
  _proto._addInitialEventListener = function _addInitialEventListener() {
    var _this2 = this;
    var removeMouseDownListener = addEventListener$1("mousedown", function(e) {
      _this2._removeInitialEventListener();
      _this2._handleInitialEvent(e);
      _this2._removeInitialEventListener = addEventListener$1("mousedown", _this2._handleInitialEvent);
    });
    var removeTouchStartListener = addEventListener$1("touchstart", function(e) {
      _this2._removeInitialEventListener();
      _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
    });
    this._removeInitialEventListener = function() {
      removeMouseDownListener();
      removeTouchStartListener();
    };
  };
  _proto._dropFromOutsideListener = function _dropFromOutsideListener(e) {
    var _getEventCoordinates = getEventCoordinates$1(e), pageX = _getEventCoordinates.pageX, pageY = _getEventCoordinates.pageY, clientX = _getEventCoordinates.clientX, clientY = _getEventCoordinates.clientY;
    this.emit("dropFromOutside", {
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
    e.preventDefault();
  };
  _proto._dragOverFromOutsideListener = function _dragOverFromOutsideListener(e) {
    var _getEventCoordinates2 = getEventCoordinates$1(e), pageX = _getEventCoordinates2.pageX, pageY = _getEventCoordinates2.pageY, clientX = _getEventCoordinates2.clientX, clientY = _getEventCoordinates2.clientY;
    this.emit("dragOverFromOutside", {
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
    e.preventDefault();
  };
  _proto._handleInitialEvent = function _handleInitialEvent(e) {
    if (this.isDetached) {
      return;
    }
    var _getEventCoordinates3 = getEventCoordinates$1(e), clientX = _getEventCoordinates3.clientX, clientY = _getEventCoordinates3.clientY, pageX = _getEventCoordinates3.pageX, pageY = _getEventCoordinates3.pageY;
    var node = this.container(), collides, offsetData;
    if (e.which === 3 || e.button === 2 || !isOverContainer$1(node, clientX, clientY))
      return;
    if (!this.globalMouse && node && !contains$1(node, e.target)) {
      var _normalizeDistance = normalizeDistance$1(0), top2 = _normalizeDistance.top, left2 = _normalizeDistance.left, bottom2 = _normalizeDistance.bottom, right2 = _normalizeDistance.right;
      offsetData = getBoundsForNode$1(node);
      collides = objectsCollide$1({
        top: offsetData.top - top2,
        left: offsetData.left - left2,
        bottom: offsetData.bottom + bottom2,
        right: offsetData.right + right2
      }, {
        top: pageY,
        left: pageX
      });
      if (!collides)
        return;
    }
    var result = this.emit("beforeSelect", this._initialEventData = {
      isTouch: /^touch/.test(e.type),
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
    if (result === false)
      return;
    switch (e.type) {
      case "mousedown":
        this._removeEndListener = addEventListener$1("mouseup", this._handleTerminatingEvent);
        this._onEscListener = addEventListener$1("keydown", this._handleTerminatingEvent);
        this._removeMoveListener = addEventListener$1("mousemove", this._handleMoveEvent);
        break;
      case "touchstart":
        this._handleMoveEvent(e);
        this._removeEndListener = addEventListener$1("touchend", this._handleTerminatingEvent);
        this._removeMoveListener = addEventListener$1("touchmove", this._handleMoveEvent);
        break;
    }
  };
  _proto._handleTerminatingEvent = function _handleTerminatingEvent(e) {
    var _getEventCoordinates4 = getEventCoordinates$1(e), pageX = _getEventCoordinates4.pageX, pageY = _getEventCoordinates4.pageY;
    this.selecting = false;
    this._removeEndListener && this._removeEndListener();
    this._removeMoveListener && this._removeMoveListener();
    if (!this._initialEventData)
      return;
    var inRoot = !this.container || contains$1(this.container(), e.target);
    var bounds = this._selectRect;
    var click = this.isClick(pageX, pageY);
    this._initialEventData = null;
    if (e.key === "Escape") {
      return this.emit("reset");
    }
    if (!inRoot) {
      return this.emit("reset");
    }
    if (click && inRoot) {
      return this._handleClickEvent(e);
    }
    if (!click)
      return this.emit("select", bounds);
  };
  _proto._handleClickEvent = function _handleClickEvent(e) {
    var _getEventCoordinates5 = getEventCoordinates$1(e), pageX = _getEventCoordinates5.pageX, pageY = _getEventCoordinates5.pageY, clientX = _getEventCoordinates5.clientX, clientY = _getEventCoordinates5.clientY;
    var now = new Date().getTime();
    if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval$1) {
      this._lastClickData = null;
      return this.emit("doubleClick", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
    }
    this._lastClickData = {
      timestamp: now
    };
    return this.emit("click", {
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
  };
  _proto._handleMoveEvent = function _handleMoveEvent(e) {
    if (this._initialEventData === null || this.isDetached) {
      return;
    }
    var _this$_initialEventDa = this._initialEventData, x2 = _this$_initialEventDa.x, y2 = _this$_initialEventDa.y;
    var _getEventCoordinates6 = getEventCoordinates$1(e), pageX = _getEventCoordinates6.pageX, pageY = _getEventCoordinates6.pageY;
    var w2 = Math.abs(x2 - pageX);
    var h2 = Math.abs(y2 - pageY);
    var left2 = Math.min(pageX, x2), top2 = Math.min(pageY, y2), old = this.selecting;
    if (this.isClick(pageX, pageY) && !old && !(w2 || h2)) {
      return;
    }
    this.selecting = true;
    this._selectRect = {
      top: top2,
      left: left2,
      x: pageX,
      y: pageY,
      right: left2 + w2,
      bottom: top2 + h2
    };
    if (!old) {
      this.emit("selectStart", this._initialEventData);
    }
    if (!this.isClick(pageX, pageY))
      this.emit("selecting", this._selectRect);
    e.preventDefault();
  };
  _proto._keyListener = function _keyListener(e) {
    this.ctrl = e.metaKey || e.ctrlKey;
  };
  _proto.isClick = function isClick(pageX, pageY) {
    var _this$_initialEventDa2 = this._initialEventData, x2 = _this$_initialEventDa2.x, y2 = _this$_initialEventDa2.y, isTouch = _this$_initialEventDa2.isTouch;
    return !isTouch && Math.abs(pageX - x2) <= clickTolerance$1 && Math.abs(pageY - y2) <= clickTolerance$1;
  };
  return Selection2;
}();
function normalizeDistance$1(distance) {
  if (distance === void 0) {
    distance = 0;
  }
  if (typeof distance !== "object")
    distance = {
      top: distance,
      left: distance,
      right: distance,
      bottom: distance
    };
  return distance;
}
function objectsCollide$1(nodeA, nodeB, tolerance) {
  if (tolerance === void 0) {
    tolerance = 0;
  }
  var _getBoundsForNode = getBoundsForNode$1(nodeA), aTop = _getBoundsForNode.top, aLeft = _getBoundsForNode.left, _getBoundsForNode$rig = _getBoundsForNode.right, aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig, _getBoundsForNode$bot = _getBoundsForNode.bottom, aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
  var _getBoundsForNode2 = getBoundsForNode$1(nodeB), bTop = _getBoundsForNode2.top, bLeft = _getBoundsForNode2.left, _getBoundsForNode2$ri = _getBoundsForNode2.right, bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri, _getBoundsForNode2$bo = _getBoundsForNode2.bottom, bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
  return !(aBottom - tolerance < bTop || aTop + tolerance > bBottom || aRight - tolerance < bLeft || aLeft + tolerance > bRight);
}
function getBoundsForNode$1(node) {
  if (!node.getBoundingClientRect)
    return node;
  var rect = node.getBoundingClientRect(), left2 = rect.left + pageOffset$1("left"), top2 = rect.top + pageOffset$1("top");
  return {
    top: top2,
    left: left2,
    right: (node.offsetWidth || 0) + left2,
    bottom: (node.offsetHeight || 0) + top2
  };
}
function pageOffset$1(dir) {
  if (dir === "left")
    return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === "top")
    return window.pageYOffset || document.body.scrollTop || 0;
}
var BackgroundCells = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(BackgroundCells2, _React$Component);
  function BackgroundCells2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    _this.state = {
      selecting: false
    };
    return _this;
  }
  var _proto = BackgroundCells2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.props.selectable && this._selectable();
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this._teardownSelectable();
  };
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable)
      this._selectable();
    if (!nextProps.selectable && this.props.selectable)
      this._teardownSelectable();
  };
  _proto.render = function render() {
    var _this$props = this.props, range2 = _this$props.range, getNow2 = _this$props.getNow, getters = _this$props.getters, currentDate = _this$props.date, Wrapper = _this$props.components.dateCellWrapper, localizer = _this$props.localizer;
    var _this$state = this.state, selecting = _this$state.selecting, startIdx = _this$state.startIdx, endIdx = _this$state.endIdx;
    var current = getNow2();
    return /* @__PURE__ */ jsx("div", {
      className: "rbc-row-bg",
      children: range2.map(function(date2, index) {
        var selected = selecting && index >= startIdx && index <= endIdx;
        var _getters$dayProp = getters.dayProp(date2), className = _getters$dayProp.className, style2 = _getters$dayProp.style;
        return /* @__PURE__ */ jsx(Wrapper, {
          value: date2,
          range: range2,
          children: /* @__PURE__ */ jsx("div", {
            style: style2,
            className: clsx("rbc-day-bg", className, selected && "rbc-selected-cell", localizer.isSameDate(date2, current) && "rbc-today", currentDate && localizer.neq(currentDate, date2, "month") && "rbc-off-range-bg")
          })
        }, index);
      })
    });
  };
  _proto._selectable = function _selectable() {
    var _this2 = this;
    var node = _reactDom_17_0_2_reactDom.exports.findDOMNode(this);
    var selector = this._selector = new Selection$2(this.props.container, {
      longPressThreshold: this.props.longPressThreshold
    });
    var selectorClicksHandler = function selectorClicksHandler2(point, actionType) {
      if (!isEvent$1(_reactDom_17_0_2_reactDom.exports.findDOMNode(_this2), point)) {
        var rowBox = getBoundsForNode$1(node);
        var _this2$props = _this2.props, range2 = _this2$props.range, rtl = _this2$props.rtl;
        if (pointInBox$1(rowBox, point)) {
          var currentCell = getSlotAtX$1(rowBox, point.x, rtl, range2.length);
          _this2._selectSlot({
            startIdx: currentCell,
            endIdx: currentCell,
            action: actionType,
            box: point
          });
        }
      }
      _this2._initial = {};
      _this2.setState({
        selecting: false
      });
    };
    selector.on("selecting", function(box) {
      var _this2$props2 = _this2.props, range2 = _this2$props2.range, rtl = _this2$props2.rtl;
      var startIdx = -1;
      var endIdx = -1;
      if (!_this2.state.selecting) {
        notify(_this2.props.onSelectStart, [box]);
        _this2._initial = {
          x: box.x,
          y: box.y
        };
      }
      if (selector.isSelected(node)) {
        var nodeBox = getBoundsForNode$1(node);
        var _dateCellSelection = dateCellSelection$1(_this2._initial, nodeBox, box, range2.length, rtl);
        startIdx = _dateCellSelection.startIdx;
        endIdx = _dateCellSelection.endIdx;
      }
      _this2.setState({
        selecting: true,
        startIdx,
        endIdx
      });
    });
    selector.on("beforeSelect", function(box) {
      if (_this2.props.selectable !== "ignoreEvents")
        return;
      return !isEvent$1(_reactDom_17_0_2_reactDom.exports.findDOMNode(_this2), box);
    });
    selector.on("click", function(point) {
      return selectorClicksHandler(point, "click");
    });
    selector.on("doubleClick", function(point) {
      return selectorClicksHandler(point, "doubleClick");
    });
    selector.on("select", function(bounds) {
      _this2._selectSlot(_extends$1({}, _this2.state, {
        action: "select",
        bounds
      }));
      _this2._initial = {};
      _this2.setState({
        selecting: false
      });
      notify(_this2.props.onSelectEnd, [_this2.state]);
    });
  };
  _proto._teardownSelectable = function _teardownSelectable() {
    if (!this._selector)
      return;
    this._selector.teardown();
    this._selector = null;
  };
  _proto._selectSlot = function _selectSlot(_ref) {
    var endIdx = _ref.endIdx, startIdx = _ref.startIdx, action = _ref.action, bounds = _ref.bounds, box = _ref.box;
    if (endIdx !== -1 && startIdx !== -1)
      this.props.onSelectSlot && this.props.onSelectSlot({
        start: startIdx,
        end: endIdx,
        action,
        bounds,
        box,
        resourceId: this.props.resourceId
      });
  };
  return BackgroundCells2;
}(React.Component);
BackgroundCells.propTypes = {};
var EventRowMixin$1 = {
  propTypes: {
    slotMetrics: PropTypes.object.isRequired,
    selected: PropTypes.object,
    isAllDay: PropTypes.bool,
    accessors: PropTypes.object.isRequired,
    localizer: PropTypes.object.isRequired,
    components: PropTypes.object.isRequired,
    getters: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onKeyPress: PropTypes.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function renderEvent(props, event) {
    var selected = props.selected;
    props.isAllDay;
    var accessors2 = props.accessors, getters = props.getters, onSelect = props.onSelect, onDoubleClick = props.onDoubleClick, onKeyPress = props.onKeyPress, localizer = props.localizer, slotMetrics = props.slotMetrics, components = props.components, resizable = props.resizable;
    var continuesPrior2 = slotMetrics.continuesPrior(event);
    var continuesAfter2 = slotMetrics.continuesAfter(event);
    return /* @__PURE__ */ jsx(EventCell$1, {
      event,
      getters,
      localizer,
      accessors: accessors2,
      components,
      onSelect,
      onDoubleClick,
      onKeyPress,
      continuesPrior: continuesPrior2,
      continuesAfter: continuesAfter2,
      slotStart: slotMetrics.first,
      slotEnd: slotMetrics.last,
      selected: isSelected$1(event, selected),
      resizable
    });
  },
  renderSpan: function renderSpan(slots, len, key, content) {
    if (content === void 0) {
      content = " ";
    }
    var per = Math.abs(len) / slots * 100 + "%";
    return /* @__PURE__ */ jsx("div", {
      className: "rbc-row-segment",
      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      },
      children: content
    }, key);
  }
};
var EventRow$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(EventRow2, _React$Component);
  function EventRow2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = EventRow2.prototype;
  _proto.render = function render() {
    var _this = this;
    var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots, className = _this$props.className;
    var lastEnd = 1;
    return /* @__PURE__ */ jsx("div", {
      className: clsx(className, "rbc-row"),
      children: segments.reduce(function(row, _ref, li2) {
        var event = _ref.event, left2 = _ref.left, right2 = _ref.right, span = _ref.span;
        var key = "_lvl_" + li2;
        var gap = left2 - lastEnd;
        var content = EventRowMixin$1.renderEvent(_this.props, event);
        if (gap)
          row.push(EventRowMixin$1.renderSpan(slots, gap, key + "_gap"));
        row.push(EventRowMixin$1.renderSpan(slots, span, key, content));
        lastEnd = right2 + 1;
        return row;
      }, [])
    });
  };
  return EventRow2;
}(React.Component);
EventRow$1.propTypes = {};
EventRow$1.defaultProps = _extends$1({}, EventRowMixin$1.defaultProps);
function endOfRange$1(_ref) {
  var dateRange = _ref.dateRange, _ref$unit = _ref.unit, unit = _ref$unit === void 0 ? "day" : _ref$unit, localizer = _ref.localizer;
  return {
    first: dateRange[0],
    last: localizer.add(dateRange[dateRange.length - 1], 1, unit)
  };
}
function eventSegments$1(event, range2, accessors2, localizer) {
  var _endOfRange = endOfRange$1({
    dateRange: range2,
    localizer
  }), first = _endOfRange.first, last2 = _endOfRange.last;
  var slots = localizer.diff(first, last2, "day");
  var start2 = localizer.max(localizer.startOf(accessors2.start(event), "day"), first);
  var end2 = localizer.min(localizer.ceil(accessors2.end(event), "day"), last2);
  var padding = findIndex$1(range2, function(x2) {
    return localizer.isSameDate(x2, start2);
  });
  var span = localizer.diff(start2, end2, "day");
  span = Math.min(span, slots);
  span = Math.max(span - localizer.segmentOffset, 1);
  return {
    event,
    span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels$2(rowSegments, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }
  var i, j, seg, levels = [], extra = [];
  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];
    for (j = 0; j < levels.length; j++) {
      if (!segsOverlap$1(seg, levels[j]))
        break;
    }
    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }
  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function(a, b) {
      return a.left - b.left;
    });
  }
  return {
    levels,
    extra
  };
}
function inRange$1(e, start2, end2, accessors2, localizer) {
  var event = {
    start: accessors2.start(e),
    end: accessors2.end(e)
  };
  var range2 = {
    start: start2,
    end: end2
  };
  return localizer.inEventRange({
    event,
    range: range2
  });
}
function segsOverlap$1(seg, otherSegs) {
  return otherSegs.some(function(otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}
function sortEvents$1$1(eventA, eventB, accessors2, localizer) {
  var evtA = {
    start: accessors2.start(eventA),
    end: accessors2.end(eventA),
    allDay: accessors2.allDay(eventA)
  };
  var evtB = {
    start: accessors2.start(eventB),
    end: accessors2.end(eventB),
    allDay: accessors2.allDay(eventB)
  };
  return localizer.sortEvents({
    evtA,
    evtB
  });
}
var isSegmentInSlot = function isSegmentInSlot2(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var eventsInSlot = function eventsInSlot2(segments, slot) {
  return segments.filter(function(seg) {
    return isSegmentInSlot(seg, slot);
  }).length;
};
var EventEndingRow = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(EventEndingRow2, _React$Component);
  function EventEndingRow2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = EventEndingRow2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots;
    var rowSegments = eventLevels$2(segments).levels[0];
    var current = 1, lastEnd = 1, row = [];
    while (current <= slots) {
      var key = "_lvl_" + current;
      var _ref = rowSegments.filter(function(seg) {
        return isSegmentInSlot(seg, current);
      })[0] || {}, event = _ref.event, left2 = _ref.left, right2 = _ref.right, span = _ref.span;
      if (!event) {
        current++;
        continue;
      }
      var gap = Math.max(0, left2 - lastEnd);
      if (this.canRenderSlotEvent(left2, span)) {
        var content = EventRowMixin$1.renderEvent(this.props, event);
        if (gap) {
          row.push(EventRowMixin$1.renderSpan(slots, gap, key + "_gap"));
        }
        row.push(EventRowMixin$1.renderSpan(slots, span, key, content));
        lastEnd = current = right2 + 1;
      } else {
        if (gap) {
          row.push(EventRowMixin$1.renderSpan(slots, gap, key + "_gap"));
        }
        row.push(EventRowMixin$1.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
        lastEnd = current = current + 1;
      }
    }
    return /* @__PURE__ */ jsx("div", {
      className: "rbc-row",
      children: row
    });
  };
  _proto.canRenderSlotEvent = function canRenderSlotEvent(slot, span) {
    var segments = this.props.segments;
    return range$1$1(slot, slot + span).every(function(s) {
      var count = eventsInSlot(segments, s);
      return count === 1;
    });
  };
  _proto.renderShowMore = function renderShowMore(segments, slot) {
    var _this = this;
    var localizer = this.props.localizer;
    var count = eventsInSlot(segments, slot);
    return count ? /* @__PURE__ */ jsx("a", {
      href: "#",
      className: "rbc-show-more",
      onClick: function onClick(e) {
        return _this.showMore(slot, e);
      },
      children: localizer.messages.showMore(count)
    }, "sm_" + slot) : false;
  };
  _proto.showMore = function showMore2(slot, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onShowMore(slot, e.target);
  };
  return EventEndingRow2;
}(React.Component);
EventEndingRow.propTypes = {};
EventEndingRow.defaultProps = _extends$1({}, EventRowMixin$1.defaultProps);
var ScrollableWeekWrapper = function ScrollableWeekWrapper2(_ref) {
  var children = _ref.children;
  return /* @__PURE__ */ jsx("div", {
    className: "rbc-row-content-scroll-container",
    children
  });
};
var isSegmentInSlot$1 = function isSegmentInSlot3(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var isEqual$1 = function isEqual2(a, b) {
  return a[0].range === b[0].range && a[0].events === b[0].events;
};
function getSlotMetrics() {
  return memoizeOne(function(options2) {
    var range2 = options2.range, events = options2.events, maxRows = options2.maxRows, minRows = options2.minRows, accessors2 = options2.accessors, localizer = options2.localizer;
    var _endOfRange = endOfRange$1({
      dateRange: range2,
      localizer
    }), first = _endOfRange.first, last2 = _endOfRange.last;
    var segments = events.map(function(evt) {
      return eventSegments$1(evt, range2, accessors2, localizer);
    });
    var _eventLevels = eventLevels$2(segments, Math.max(maxRows - 1, 1)), levels = _eventLevels.levels, extra = _eventLevels.extra;
    while (levels.length < minRows) {
      levels.push([]);
    }
    return {
      first,
      last: last2,
      levels,
      extra,
      range: range2,
      slots: range2.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics();
        return metrics(_extends$1({}, options2, args));
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range2[slotNumber];
      },
      getSlotForDate: function getSlotForDate(date2) {
        return range2.find(function(r2) {
          return localizer.isSameDate(r2, date2);
        });
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments.filter(function(seg) {
          return isSegmentInSlot$1(seg, slot);
        }).map(function(seg) {
          return seg.event;
        });
      },
      continuesPrior: function continuesPrior2(event) {
        return localizer.continuesPrior(accessors2.start(event), first);
      },
      continuesAfter: function continuesAfter2(event) {
        var start2 = accessors2.start(event);
        var end2 = accessors2.end(event);
        return localizer.continuesAfter(start2, end2, last2);
      }
    };
  }, isEqual$1);
}
var DateContentRow = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(DateContentRow2, _React$Component);
  function DateContentRow2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handleSelectSlot = function(slot) {
      var _this$props = _this.props, range2 = _this$props.range, onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range2.slice(slot.start, slot.end + 1), slot);
    };
    _this.handleShowMore = function(slot, target) {
      var _this$props2 = _this.props, range2 = _this$props2.range, onShowMore = _this$props2.onShowMore;
      var metrics = _this.slotMetrics(_this.props);
      var row = qsa(_reactDom_17_0_2_reactDom.exports.findDOMNode(_assertThisInitialized(_this)), ".rbc-row-bg")[0];
      var cell;
      if (row)
        cell = row.children[slot - 1];
      var events = metrics.getEventsForSlot(slot);
      onShowMore(events, range2[slot - 1], cell, slot, target);
    };
    _this.createHeadingRef = function(r2) {
      _this.headingRow = r2;
    };
    _this.createEventRef = function(r2) {
      _this.eventRow = r2;
    };
    _this.getContainer = function() {
      var container = _this.props.container;
      return container ? container() : _reactDom_17_0_2_reactDom.exports.findDOMNode(_assertThisInitialized(_this));
    };
    _this.renderHeadingCell = function(date2, index) {
      var _this$props3 = _this.props, renderHeader = _this$props3.renderHeader, getNow2 = _this$props3.getNow, localizer = _this$props3.localizer;
      return renderHeader({
        date: date2,
        key: "header_" + index,
        className: clsx("rbc-date-cell", localizer.isSameDate(date2, getNow2()) && "rbc-now")
      });
    };
    _this.renderDummy = function() {
      var _this$props4 = _this.props, className = _this$props4.className, range2 = _this$props4.range, renderHeader = _this$props4.renderHeader, showAllEvents = _this$props4.showAllEvents;
      return /* @__PURE__ */ jsx("div", {
        className,
        children: /* @__PURE__ */ jsxs("div", {
          className: clsx("rbc-row-content", showAllEvents && "rbc-row-content-scrollable"),
          children: [renderHeader && /* @__PURE__ */ jsx("div", {
            className: "rbc-row",
            ref: _this.createHeadingRef,
            children: range2.map(_this.renderHeadingCell)
          }), /* @__PURE__ */ jsx("div", {
            className: "rbc-row",
            ref: _this.createEventRef,
            children: /* @__PURE__ */ jsx("div", {
              className: "rbc-row-segment",
              children: /* @__PURE__ */ jsx("div", {
                className: "rbc-event",
                children: /* @__PURE__ */ jsx("div", {
                  className: "rbc-event-content",
                  children: "\xA0"
                })
              })
            })
          })]
        })
      });
    };
    _this.slotMetrics = getSlotMetrics();
    return _this;
  }
  var _proto = DateContentRow2.prototype;
  _proto.getRowLimit = function getRowLimit() {
    var eventHeight = height(this.eventRow);
    var headingHeight = this.headingRow ? height(this.headingRow) : 0;
    var eventSpace = height(_reactDom_17_0_2_reactDom.exports.findDOMNode(this)) - headingHeight;
    return Math.max(Math.floor(eventSpace / eventHeight), 1);
  };
  _proto.render = function render() {
    var _this$props5 = this.props, date2 = _this$props5.date, rtl = _this$props5.rtl, range2 = _this$props5.range, className = _this$props5.className, selected = _this$props5.selected, selectable = _this$props5.selectable, renderForMeasure = _this$props5.renderForMeasure, accessors2 = _this$props5.accessors, getters = _this$props5.getters, components = _this$props5.components, getNow2 = _this$props5.getNow, renderHeader = _this$props5.renderHeader, onSelect = _this$props5.onSelect, localizer = _this$props5.localizer, onSelectStart = _this$props5.onSelectStart, onSelectEnd = _this$props5.onSelectEnd, onDoubleClick = _this$props5.onDoubleClick, onKeyPress = _this$props5.onKeyPress, resourceId = _this$props5.resourceId, longPressThreshold = _this$props5.longPressThreshold, isAllDay = _this$props5.isAllDay, resizable = _this$props5.resizable, showAllEvents = _this$props5.showAllEvents;
    if (renderForMeasure)
      return this.renderDummy();
    var metrics = this.slotMetrics(this.props);
    var levels = metrics.levels, extra = metrics.extra;
    var ScrollableWeekComponent = showAllEvents ? ScrollableWeekWrapper : NoopWrapper$1;
    var WeekWrapper2 = components.weekWrapper;
    var eventRowProps = {
      selected,
      accessors: accessors2,
      getters,
      localizer,
      components,
      onSelect,
      onDoubleClick,
      onKeyPress,
      resourceId,
      slotMetrics: metrics,
      resizable
    };
    return /* @__PURE__ */ jsxs("div", {
      className,
      role: "rowgroup",
      children: [/* @__PURE__ */ jsx(BackgroundCells, {
        localizer,
        date: date2,
        getNow: getNow2,
        rtl,
        range: range2,
        selectable,
        container: this.getContainer,
        getters,
        onSelectStart,
        onSelectEnd,
        onSelectSlot: this.handleSelectSlot,
        components,
        longPressThreshold,
        resourceId
      }), /* @__PURE__ */ jsxs("div", {
        className: clsx("rbc-row-content", showAllEvents && "rbc-row-content-scrollable"),
        role: "row",
        children: [renderHeader && /* @__PURE__ */ jsx("div", {
          className: "rbc-row ",
          ref: this.createHeadingRef,
          children: range2.map(this.renderHeadingCell)
        }), /* @__PURE__ */ jsx(ScrollableWeekComponent, {
          children: /* @__PURE__ */ jsxs(WeekWrapper2, __spreadProps(__spreadValues({
            isAllDay
          }, eventRowProps), {
            children: [levels.map(function(segs, idx) {
              return /* @__PURE__ */ jsx(EventRow$1, __spreadValues({
                segments: segs
              }, eventRowProps), idx);
            }), !!extra.length && /* @__PURE__ */ jsx(EventEndingRow, __spreadValues({
              segments: extra,
              onShowMore: this.handleShowMore
            }, eventRowProps))]
          }))
        })]
      })]
    });
  };
  return DateContentRow2;
}(React.Component);
DateContentRow.propTypes = {};
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};
var Header = function Header2(_ref) {
  var label = _ref.label;
  return /* @__PURE__ */ jsx("span", {
    role: "columnheader",
    "aria-sort": "none",
    children: label
  });
};
Header.propTypes = {};
var DateHeader = function DateHeader2(_ref) {
  var label = _ref.label, drilldownView = _ref.drilldownView, onDrillDown = _ref.onDrillDown;
  if (!drilldownView) {
    return /* @__PURE__ */ jsx("span", {
      children: label
    });
  }
  return /* @__PURE__ */ jsx("a", {
    href: "#",
    onClick: onDrillDown,
    role: "cell",
    children: label
  });
};
DateHeader.propTypes = {};
var _excluded$1$1 = ["date", "className"];
var eventsForWeek = function eventsForWeek2(evts, start2, end2, accessors2, localizer) {
  return evts.filter(function(e) {
    return inRange$1(e, start2, end2, accessors2, localizer);
  });
};
var MonthView = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(MonthView2, _React$Component);
  function MonthView2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.getContainer = function() {
      return _reactDom_17_0_2_reactDom.exports.findDOMNode(_assertThisInitialized(_this));
    };
    _this.renderWeek = function(week, weekIdx) {
      var _this$props = _this.props, events = _this$props.events, components = _this$props.components, selectable = _this$props.selectable, getNow2 = _this$props.getNow, selected = _this$props.selected, date2 = _this$props.date, localizer = _this$props.localizer, longPressThreshold = _this$props.longPressThreshold, accessors2 = _this$props.accessors, getters = _this$props.getters, showAllEvents = _this$props.showAllEvents;
      var _this$state = _this.state, needLimitMeasure = _this$state.needLimitMeasure, rowLimit = _this$state.rowLimit;
      var weeksEvents = eventsForWeek([].concat(events), week[0], week[week.length - 1], accessors2, localizer);
      weeksEvents.sort(function(a, b) {
        return sortEvents$1$1(a, b, accessors2, localizer);
      });
      return /* @__PURE__ */ jsx(DateContentRow, {
        ref: weekIdx === 0 ? _this.slotRowRef : void 0,
        container: _this.getContainer,
        className: "rbc-month-row",
        getNow: getNow2,
        date: date2,
        range: week,
        events: weeksEvents,
        maxRows: showAllEvents ? Infinity : rowLimit,
        selected,
        selectable,
        components,
        accessors: accessors2,
        getters,
        localizer,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onDoubleClick: _this.handleDoubleClickEvent,
        onKeyPress: _this.handleKeyPressEvent,
        onSelectSlot: _this.handleSelectSlot,
        longPressThreshold,
        rtl: _this.props.rtl,
        resizable: _this.props.resizable,
        showAllEvents
      }, weekIdx);
    };
    _this.readerDateHeading = function(_ref) {
      var date2 = _ref.date, className = _ref.className, props = _objectWithoutPropertiesLoose(_ref, _excluded$1$1);
      var _this$props2 = _this.props, currentDate = _this$props2.date, getDrilldownView = _this$props2.getDrilldownView, localizer = _this$props2.localizer;
      var isOffRange = localizer.neq(date2, currentDate, "month");
      var isCurrent = localizer.isSameDate(date2, currentDate);
      var drilldownView = getDrilldownView(date2);
      var label = localizer.format(date2, "dateFormat");
      var DateHeaderComponent = _this.props.components.dateHeader || DateHeader;
      return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({}, props), {
        className: clsx(className, isOffRange && "rbc-off-range", isCurrent && "rbc-current"),
        role: "cell",
        children: /* @__PURE__ */ jsx(DateHeaderComponent, {
          label,
          date: date2,
          drilldownView,
          isOffRange,
          onDrillDown: function onDrillDown(e) {
            return _this.handleHeadingClick(date2, drilldownView, e);
          }
        })
      }));
    };
    _this.handleSelectSlot = function(range2, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range2);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function() {
        return _this.selectDates(slotInfo);
      });
    };
    _this.handleHeadingClick = function(date2, view, e) {
      e.preventDefault();
      _this.clearSelection();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    _this.handleSelectEvent = function() {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function() {
      _this.clearSelection();
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleShowMore = function(events, date2, cell, slot, target) {
      var _this$props3 = _this.props, popup = _this$props3.popup, onDrillDown = _this$props3.onDrillDown, onShowMore = _this$props3.onShowMore, getDrilldownView = _this$props3.getDrilldownView, doShowMoreDrillDown = _this$props3.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position$1 = position(cell, _reactDom_17_0_2_reactDom.exports.findDOMNode(_assertThisInitialized(_this)));
        _this.setState({
          overlay: {
            date: date2,
            events,
            position: position$1,
            target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date2, getDrilldownView(date2) || views$1.DAY]);
      }
      notify(onShowMore, [events, date2, slot]);
    };
    _this.overlayDisplay = function() {
      _this.setState({
        overlay: null
      });
    };
    _this._bgRows = [];
    _this._pendingSelection = [];
    _this.slotRowRef = /* @__PURE__ */ React.createRef();
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true
    };
    return _this;
  }
  var _proto = MonthView2.prototype;
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(_ref2) {
    var date2 = _ref2.date;
    var _this$props4 = this.props, propsDate = _this$props4.date, localizer = _this$props4.localizer;
    this.setState({
      needLimitMeasure: localizer.neq(date2, propsDate, "month")
    });
  };
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    var running;
    if (this.state.needLimitMeasure)
      this.measureRowLimit(this.props);
    window.addEventListener("resize", this._resizeListener = function() {
      if (!running) {
        request(function() {
          running = false;
          _this2.setState({
            needLimitMeasure: true
          });
        });
      }
    }, false);
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.needLimitMeasure)
      this.measureRowLimit(this.props);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this._resizeListener, false);
  };
  _proto.render = function render() {
    var _this$props5 = this.props, date2 = _this$props5.date, localizer = _this$props5.localizer, className = _this$props5.className, month2 = localizer.visibleDays(date2, localizer), weeks = chunk(month2, 7);
    this._weekCount = weeks.length;
    return /* @__PURE__ */ jsxs("div", {
      className: clsx("rbc-month-view", className),
      role: "table",
      "aria-label": "Month View",
      children: [/* @__PURE__ */ jsx("div", {
        className: "rbc-row rbc-month-header",
        role: "row",
        children: this.renderHeaders(weeks[0])
      }), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay()]
    });
  };
  _proto.renderHeaders = function renderHeaders(row) {
    var _this$props6 = this.props, localizer = _this$props6.localizer, components = _this$props6.components;
    var first = row[0];
    var last2 = row[row.length - 1];
    var HeaderComponent = components.header || Header;
    return localizer.range(first, last2, "day").map(function(day2, idx) {
      return /* @__PURE__ */ jsx("div", {
        className: "rbc-header",
        children: /* @__PURE__ */ jsx(HeaderComponent, {
          date: day2,
          localizer,
          label: localizer.format(day2, "weekdayFormat")
        })
      }, "header_" + idx);
    });
  };
  _proto.renderOverlay = function renderOverlay() {
    var _this3 = this;
    var overlay = this.state && this.state.overlay || {};
    var _this$props7 = this.props, accessors2 = _this$props7.accessors, localizer = _this$props7.localizer, components = _this$props7.components, getters = _this$props7.getters, selected = _this$props7.selected, popupOffset = _this$props7.popupOffset;
    return /* @__PURE__ */ jsx(Overlay, {
      rootClose: true,
      placement: "bottom",
      show: !!overlay.position,
      onHide: function onHide2() {
        return _this3.setState({
          overlay: null
        });
      },
      target: function target() {
        return overlay.target;
      },
      children: function(_ref3) {
        var props = _ref3.props;
        return /* @__PURE__ */ jsx(Popup$1, __spreadProps(__spreadValues({}, props), {
          popupOffset,
          accessors: accessors2,
          getters,
          selected,
          components,
          localizer,
          position: overlay.position,
          show: _this3.overlayDisplay,
          events: overlay.events,
          slotStart: overlay.date,
          slotEnd: overlay.end,
          onSelect: _this3.handleSelectEvent,
          onDoubleClick: _this3.handleDoubleClickEvent,
          onKeyPress: _this3.handleKeyPressEvent,
          handleDragStart: _this3.props.handleDragStart
        }));
      }
    });
  };
  _proto.measureRowLimit = function measureRowLimit() {
    this.setState({
      needLimitMeasure: false,
      rowLimit: this.slotRowRef.current.getRowLimit()
    });
  };
  _proto.selectDates = function selectDates(slotInfo) {
    var slots = this._pendingSelection.slice();
    this._pendingSelection = [];
    slots.sort(function(a, b) {
      return +a - +b;
    });
    var start2 = new Date(slots[0]);
    var end2 = new Date(slots[slots.length - 1]);
    end2.setDate(slots[slots.length - 1].getDate() + 1);
    notify(this.props.onSelectSlot, {
      slots,
      start: start2,
      end: end2,
      action: slotInfo.action,
      bounds: slotInfo.bounds,
      box: slotInfo.box
    });
  };
  _proto.clearSelection = function clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  };
  return MonthView2;
}(React.Component);
MonthView.propTypes = {};
MonthView.range = function(date2, _ref4) {
  var localizer = _ref4.localizer;
  var start2 = localizer.firstVisibleDay(date2, localizer);
  var end2 = localizer.lastVisibleDay(date2, localizer);
  return {
    start: start2,
    end: end2
  };
};
MonthView.navigate = function(date2, action, _ref5) {
  var localizer = _ref5.localizer;
  switch (action) {
    case navigate$1.PREVIOUS:
      return localizer.add(date2, -1, "month");
    case navigate$1.NEXT:
      return localizer.add(date2, 1, "month");
    default:
      return date2;
  }
};
MonthView.title = function(date2, _ref6) {
  var localizer = _ref6.localizer;
  return localizer.format(date2, "monthHeaderFormat");
};
var getKey = function getKey3(_ref) {
  var min2 = _ref.min, max2 = _ref.max, step = _ref.step, slots = _ref.slots, localizer = _ref.localizer;
  return "" + +localizer.startOf(min2, "minutes") + ("" + +localizer.startOf(max2, "minutes")) + (step + "-" + slots);
};
function getSlotMetrics$1(_ref2) {
  var start2 = _ref2.min, end2 = _ref2.max, step = _ref2.step, timeslots = _ref2.timeslots, localizer = _ref2.localizer;
  var key = getKey({
    start: start2,
    end: end2,
    step,
    timeslots,
    localizer
  });
  var totalMin = 1 + localizer.getTotalMin(start2, end2);
  var minutesFromMidnight = localizer.getMinutesFromMidnight(start2);
  var numGroups = Math.ceil((totalMin - 1) / (step * timeslots));
  var numSlots = numGroups * timeslots;
  var groups = new Array(numGroups);
  var slots = new Array(numSlots);
  for (var grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);
    for (var slot = 0; slot < timeslots; slot++) {
      var slotIdx = grp * timeslots + slot;
      var minFromStart = slotIdx * step;
      slots[slotIdx] = groups[grp][slot] = localizer.getSlotDate(start2, minutesFromMidnight, minFromStart);
    }
  }
  var lastSlotMinFromStart = slots.length * step;
  slots.push(localizer.getSlotDate(start2, minutesFromMidnight, lastSlotMinFromStart));
  function positionFromDate(date2) {
    var diff2 = localizer.getTotalMin(start2, date2);
    return Math.min(diff2, totalMin);
  }
  return {
    groups,
    update: function update(args) {
      if (getKey(args) !== key)
        return getSlotMetrics$1(args);
      return this;
    },
    dateIsInGroup: function dateIsInGroup(date2, groupIndex) {
      var nextGroup = groups[groupIndex + 1];
      return localizer.inRange(date2, groups[groupIndex][0], nextGroup ? nextGroup[0] : end2, "minutes");
    },
    nextSlot: function nextSlot(slot2) {
      var next = slots[Math.min(slots.indexOf(slot2) + 1, slots.length - 1)];
      if (next === slot2)
        next = localizer.add(slot2, step, "minutes");
      return next;
    },
    closestSlotToPosition: function closestSlotToPosition(percent) {
      var slot2 = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot2];
    },
    closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
      var range2 = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range2);
    },
    closestSlotFromDate: function closestSlotFromDate(date2, offset2) {
      if (offset2 === void 0) {
        offset2 = 0;
      }
      if (localizer.lt(date2, start2, "minutes"))
        return slots[0];
      var diffMins = localizer.diff(start2, date2, "minutes");
      return slots[(diffMins - diffMins % step) / step + offset2];
    },
    startsBeforeDay: function startsBeforeDay(date2) {
      return localizer.lt(date2, start2, "day");
    },
    startsAfterDay: function startsAfterDay(date2) {
      return localizer.gt(date2, end2, "day");
    },
    startsBefore: function startsBefore(date2) {
      return localizer.lt(localizer.merge(start2, date2), start2, "minutes");
    },
    startsAfter: function startsAfter(date2) {
      return localizer.gt(localizer.merge(end2, date2), end2, "minutes");
    },
    getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
      if (!ignoreMin)
        rangeStart = localizer.min(end2, localizer.max(start2, rangeStart));
      if (!ignoreMax)
        rangeEnd = localizer.min(end2, localizer.max(start2, rangeEnd));
      var rangeStartMin = positionFromDate(rangeStart);
      var rangeEndMin = positionFromDate(rangeEnd);
      var top2 = rangeEndMin > step * numSlots && !localizer.eq(end2, rangeEnd) ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
      return {
        top: top2,
        height: rangeEndMin / (step * numSlots) * 100 - top2,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    },
    getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
      var rangeStartMin = positionFromDate(rangeStart);
      var top2 = rangeStartMin / (step * numSlots) * 100;
      return top2;
    }
  };
}
var Event = /* @__PURE__ */ function() {
  function Event2(data, _ref) {
    var accessors2 = _ref.accessors, slotMetrics = _ref.slotMetrics;
    var _slotMetrics$getRange = slotMetrics.getRange(accessors2.start(data), accessors2.end(data)), start2 = _slotMetrics$getRange.start, startDate = _slotMetrics$getRange.startDate, end2 = _slotMetrics$getRange.end, endDate = _slotMetrics$getRange.endDate, top2 = _slotMetrics$getRange.top, height2 = _slotMetrics$getRange.height;
    this.start = start2;
    this.end = end2;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top2;
    this.height = height2;
    this.data = data;
  }
  _createClass(Event2, [{
    key: "_width",
    get: function get2() {
      if (this.rows) {
        var columns = this.rows.reduce(function(max2, row) {
          return Math.max(max2, row.leaves.length + 1);
        }, 0) + 1;
        return 100 / columns;
      }
      var availableWidth = 100 - this.container._width;
      if (this.leaves) {
        return availableWidth / (this.leaves.length + 1);
      }
      return this.row._width;
    }
  }, {
    key: "width",
    get: function get2() {
      var noOverlap2 = this._width;
      var overlap = Math.min(100, this._width * 1.7);
      if (this.rows) {
        return overlap;
      }
      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap2;
      }
      var leaves = this.row.leaves;
      var index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap2 : overlap;
    }
  }, {
    key: "xOffset",
    get: function get2() {
      if (this.rows)
        return 0;
      if (this.leaves)
        return this.container._width;
      var _this$row = this.row, leaves = _this$row.leaves, xOffset = _this$row.xOffset, _width = _this$row._width;
      var index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }
  }]);
  return Event2;
}();
function onSameRow(a, b, minimumStartDifference) {
  return Math.abs(b.start - a.start) < minimumStartDifference || b.start > a.start && b.start < a.end;
}
function sortByRender(events) {
  var sortedByTime = sortBy$1(events, ["startMs", function(e) {
    return -e.endMs;
  }]);
  var sorted = [];
  while (sortedByTime.length > 0) {
    var event = sortedByTime.shift();
    sorted.push(event);
    for (var i = 0; i < sortedByTime.length; i++) {
      var test = sortedByTime[i];
      if (event.endMs > test.startMs)
        continue;
      if (i > 0) {
        var _event = sortedByTime.splice(i, 1)[0];
        sorted.push(_event);
      }
      break;
    }
  }
  return sorted;
}
function getStyledEvents(_ref2) {
  var events = _ref2.events, minimumStartDifference = _ref2.minimumStartDifference, slotMetrics = _ref2.slotMetrics, accessors2 = _ref2.accessors;
  var proxies = events.map(function(event) {
    return new Event(event, {
      slotMetrics,
      accessors: accessors2
    });
  });
  var eventsInRenderOrder = sortByRender(proxies);
  var containerEvents = [];
  var _loop = function _loop2(i2) {
    var event = eventsInRenderOrder[i2];
    var container = containerEvents.find(function(c) {
      return c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference;
    });
    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      return "continue";
    }
    event.container = container;
    var row = null;
    for (var j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }
    if (row) {
      row.leaves.push(event);
      event.row = row;
    } else {
      event.leaves = [];
      container.rows.push(event);
    }
  };
  for (var i = 0; i < eventsInRenderOrder.length; i++) {
    var _ret = _loop(i);
    if (_ret === "continue")
      continue;
  }
  return eventsInRenderOrder.map(function(event) {
    return {
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: Math.max(0, event.xOffset)
      }
    };
  });
}
function getMaxIdxDFS(node, maxIdx, visited) {
  for (var i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1)
      continue;
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx;
    visited.push(node.friends[i]);
    var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited);
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx;
  }
  return maxIdx;
}
function noOverlap(_ref) {
  var events = _ref.events, minimumStartDifference = _ref.minimumStartDifference, slotMetrics = _ref.slotMetrics, accessors2 = _ref.accessors;
  var styledEvents = getStyledEvents({
    events,
    minimumStartDifference,
    slotMetrics,
    accessors: accessors2
  });
  styledEvents.sort(function(a, b) {
    a = a.style;
    b = b.style;
    if (a.top !== b.top)
      return a.top > b.top ? 1 : -1;
    else
      return a.top + a.height < b.top + b.height ? 1 : -1;
  });
  for (var i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = [];
    delete styledEvents[i].style.left;
    delete styledEvents[i].style.left;
    delete styledEvents[i].idx;
    delete styledEvents[i].size;
  }
  for (var _i = 0; _i < styledEvents.length - 1; ++_i) {
    var se1 = styledEvents[_i];
    var y1 = se1.style.top;
    var y2 = se1.style.top + se1.style.height;
    for (var j = _i + 1; j < styledEvents.length; ++j) {
      var se2 = styledEvents[j];
      var y3 = se2.style.top;
      var y4 = se2.style.top + se2.style.height;
      if (y3 <= y1 && y1 < y4 || y1 <= y3 && y3 < y2) {
        se1.friends.push(se2);
        se2.friends.push(se1);
      }
    }
  }
  for (var _i2 = 0; _i2 < styledEvents.length; ++_i2) {
    var se3 = styledEvents[_i2];
    var bitmap = [];
    for (var _j = 0; _j < 100; ++_j) {
      bitmap.push(1);
    }
    for (var _j2 = 0; _j2 < se3.friends.length; ++_j2) {
      if (se3.friends[_j2].idx !== void 0)
        bitmap[se3.friends[_j2].idx] = 0;
    }
    se3.idx = bitmap.indexOf(1);
  }
  for (var _i3 = 0; _i3 < styledEvents.length; ++_i3) {
    var size2 = 0;
    if (styledEvents[_i3].size)
      continue;
    var allFriends = [];
    var maxIdx = getMaxIdxDFS(styledEvents[_i3], 0, allFriends);
    size2 = 100 / (maxIdx + 1);
    styledEvents[_i3].size = size2;
    for (var _j3 = 0; _j3 < allFriends.length; ++_j3) {
      allFriends[_j3].size = size2;
    }
  }
  for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
    var e = styledEvents[_i4];
    e.style.left = e.idx * e.size;
    var _maxIdx = 0;
    for (var _j4 = 0; _j4 < e.friends.length; ++_j4) {
      var idx = e.friends[_j4];
      _maxIdx = _maxIdx > idx ? _maxIdx : idx;
    }
    if (_maxIdx <= e.idx)
      e.size = 100 - e.idx * e.size;
    var padding = e.idx === 0 ? 0 : 3;
    e.style.width = "calc(" + e.size + "% - " + padding + "px)";
    e.style.height = "calc(" + e.style.height + "% - 2px)";
    e.style.xOffset = "calc(" + e.style.left + "% + " + padding + "px)";
  }
  return styledEvents;
}
var DefaultAlgorithms = {
  overlap: getStyledEvents,
  "no-overlap": noOverlap
};
function isFunction$4(a) {
  return !!(a && a.constructor && a.call && a.apply);
}
function getStyledEvents$1(_ref) {
  _ref.events;
  _ref.minimumStartDifference;
  _ref.slotMetrics;
  _ref.accessors;
  var dayLayoutAlgorithm = _ref.dayLayoutAlgorithm;
  var algorithm = dayLayoutAlgorithm;
  if (dayLayoutAlgorithm in DefaultAlgorithms)
    algorithm = DefaultAlgorithms[dayLayoutAlgorithm];
  if (!isFunction$4(algorithm)) {
    return [];
  }
  return algorithm.apply(this, arguments);
}
var TimeSlotGroup = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(TimeSlotGroup2, _Component);
  function TimeSlotGroup2() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = TimeSlotGroup2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, renderSlot = _this$props.renderSlot, resource = _this$props.resource, group = _this$props.group, getters = _this$props.getters, _this$props$component = _this$props.components;
    _this$props$component = _this$props$component === void 0 ? {} : _this$props$component;
    var _this$props$component2 = _this$props$component.timeSlotWrapper, Wrapper = _this$props$component2 === void 0 ? NoopWrapper$1 : _this$props$component2;
    var groupProps = getters ? getters.slotGroupProp() : {};
    return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({
      className: "rbc-timeslot-group"
    }, groupProps), {
      children: group.map(function(value, idx) {
        var slotProps = getters ? getters.slotProp(value, resource) : {};
        return /* @__PURE__ */ jsx(Wrapper, {
          value,
          resource,
          children: /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({}, slotProps), {
            className: clsx("rbc-time-slot", slotProps.className),
            children: renderSlot && renderSlot(value, idx)
          }))
        }, idx);
      })
    }));
  };
  return TimeSlotGroup2;
}(_react_17_0_2_react.exports.Component);
TimeSlotGroup.propTypes = {};
function stringifyPercent(v2) {
  return typeof v2 === "string" ? v2 : v2 + "%";
}
function TimeGridEvent$1(props) {
  var _extends22, _extends3;
  var style2 = props.style, className = props.className, event = props.event, accessors2 = props.accessors, rtl = props.rtl, selected = props.selected, label = props.label, continuesEarlier = props.continuesEarlier, continuesLater = props.continuesLater, getters = props.getters, onClick = props.onClick, onDoubleClick = props.onDoubleClick, isBackgroundEvent = props.isBackgroundEvent, onKeyPress = props.onKeyPress, _props$components = props.components, Event2 = _props$components.event, EventWrapper2 = _props$components.eventWrapper;
  var title = accessors2.title(event);
  var tooltip = accessors2.tooltip(event);
  var end2 = accessors2.end(event);
  var start2 = accessors2.start(event);
  var userProps = getters.eventProp(event, start2, end2, selected);
  var height2 = style2.height, top2 = style2.top, width = style2.width, xOffset = style2.xOffset;
  var inner = [
    /* @__PURE__ */ jsx("div", {
      className: "rbc-event-label",
      children: label
    }, "1"),
    /* @__PURE__ */ jsx("div", {
      className: "rbc-event-content",
      children: Event2 ? /* @__PURE__ */ jsx(Event2, {
        event,
        title
      }) : title
    }, "2")
  ];
  var eventStyle = isBackgroundEvent ? _extends$1({}, userProps.style, (_extends22 = {
    top: stringifyPercent(top2),
    height: stringifyPercent(height2),
    width: "calc(" + width + " + 10px)"
  }, _extends22[rtl ? "right" : "left"] = stringifyPercent(Math.max(0, xOffset)), _extends22)) : _extends$1({}, userProps.style, (_extends3 = {
    top: stringifyPercent(top2),
    width: stringifyPercent(width),
    height: stringifyPercent(height2)
  }, _extends3[rtl ? "right" : "left"] = stringifyPercent(xOffset), _extends3));
  return /* @__PURE__ */ jsx(EventWrapper2, __spreadProps(__spreadValues({
    type: "time"
  }, props), {
    children: /* @__PURE__ */ jsx("div", {
      onClick,
      onDoubleClick,
      style: eventStyle,
      onKeyPress,
      title: tooltip ? (typeof label === "string" ? label + ": " : "") + tooltip : void 0,
      className: clsx(isBackgroundEvent ? "rbc-background-event" : "rbc-event", className, userProps.className, {
        "rbc-selected": selected,
        "rbc-event-continues-earlier": continuesEarlier,
        "rbc-event-continues-later": continuesLater
      }),
      children: inner
    })
  }));
}
var DayColumnWrapper = function DayColumnWrapper2(_ref) {
  var children = _ref.children, className = _ref.className, style2 = _ref.style;
  return /* @__PURE__ */ jsx("div", {
    className,
    style: style2,
    children
  });
};
var _excluded$2 = ["dayProp"], _excluded2 = ["eventContainerWrapper"];
var DayColumn = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(DayColumn2, _React$Component);
  function DayColumn2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    _this.intervalTriggered = false;
    _this.renderEvents = function(_ref) {
      var events = _ref.events, isBackgroundEvent = _ref.isBackgroundEvent;
      var _this$props = _this.props, rtl = _this$props.rtl, selected = _this$props.selected, accessors2 = _this$props.accessors, localizer = _this$props.localizer, getters = _this$props.getters, components = _this$props.components, step = _this$props.step, timeslots = _this$props.timeslots, dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm, resizable = _this$props.resizable;
      var _assertThisInitialize = _assertThisInitialized(_this), slotMetrics = _assertThisInitialize.slotMetrics;
      var messages2 = localizer.messages;
      var styledEvents = getStyledEvents$1({
        events,
        accessors: accessors2,
        slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2),
        dayLayoutAlgorithm
      });
      return styledEvents.map(function(_ref2, idx) {
        var event = _ref2.event, style2 = _ref2.style;
        var end2 = accessors2.end(event);
        var start2 = accessors2.start(event);
        var format = "eventTimeRangeFormat";
        var label;
        var startsBeforeDay = slotMetrics.startsBeforeDay(start2);
        var startsAfterDay = slotMetrics.startsAfterDay(end2);
        if (startsBeforeDay)
          format = "eventTimeRangeEndFormat";
        else if (startsAfterDay)
          format = "eventTimeRangeStartFormat";
        if (startsBeforeDay && startsAfterDay)
          label = messages2.allDay;
        else
          label = localizer.format({
            start: start2,
            end: end2
          }, format);
        var continuesEarlier = startsBeforeDay || slotMetrics.startsBefore(start2);
        var continuesLater = startsAfterDay || slotMetrics.startsAfter(end2);
        return /* @__PURE__ */ jsx(TimeGridEvent$1, {
          style: style2,
          event,
          label,
          getters,
          rtl,
          components,
          continuesEarlier,
          continuesLater,
          accessors: accessors2,
          selected: isSelected$1(event, selected),
          onClick: function onClick(e) {
            return _this._select(event, e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return _this._doubleClick(event, e);
          },
          isBackgroundEvent,
          onKeyPress: function onKeyPress(e) {
            return _this._keyPress(event, e);
          },
          resizable
        }, "evt_" + idx);
      });
    };
    _this._selectable = function() {
      var node = _reactDom_17_0_2_reactDom.exports.findDOMNode(_assertThisInitialized(_this));
      var _this$props2 = _this.props, longPressThreshold = _this$props2.longPressThreshold, localizer = _this$props2.localizer;
      var selector = _this._selector = new Selection$2(function() {
        return _reactDom_17_0_2_reactDom.exports.findDOMNode(_assertThisInitialized(_this));
      }, {
        longPressThreshold
      });
      var maybeSelect = function maybeSelect2(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start2 = state.startDate, end2 = state.endDate;
        if (onSelecting) {
          if (localizer.eq(current.startDate, start2, "minutes") && localizer.eq(current.endDate, end2, "minutes") || onSelecting({
            start: start2,
            end: end2,
            resourceId: _this.props.resource
          }) === false)
            return;
        }
        if (_this.state.start !== state.start || _this.state.end !== state.end || _this.state.selecting !== state.selecting) {
          _this.setState(state);
        }
      };
      var selectionState = function selectionState2(point) {
        var currentSlot = _this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode$1(node));
        if (!_this.state.selecting) {
          _this._initialSlot = currentSlot;
        }
        var initialSlot = _this._initialSlot;
        if (localizer.lte(initialSlot, currentSlot)) {
          currentSlot = _this.slotMetrics.nextSlot(currentSlot);
        } else if (localizer.gt(initialSlot, currentSlot)) {
          initialSlot = _this.slotMetrics.nextSlot(initialSlot);
        }
        var selectRange = _this.slotMetrics.getRange(localizer.min(initialSlot, currentSlot), localizer.max(initialSlot, currentSlot));
        return _extends$1({}, selectRange, {
          selecting: true,
          top: selectRange.top + "%",
          height: selectRange.height + "%"
        });
      };
      var selectorClicksHandler = function selectorClicksHandler2(box, actionType) {
        if (!isEvent$1(_reactDom_17_0_2_reactDom.exports.findDOMNode(_assertThisInitialized(_this)), box)) {
          var _selectionState = selectionState(box), startDate = _selectionState.startDate, endDate = _selectionState.endDate;
          _this._selectSlot({
            startDate,
            endDate,
            action: actionType,
            box
          });
        }
        _this.setState({
          selecting: false
        });
      };
      selector.on("selecting", maybeSelect);
      selector.on("selectStart", maybeSelect);
      selector.on("beforeSelect", function(box) {
        if (_this.props.selectable !== "ignoreEvents")
          return;
        return !isEvent$1(_reactDom_17_0_2_reactDom.exports.findDOMNode(_assertThisInitialized(_this)), box);
      });
      selector.on("click", function(box) {
        return selectorClicksHandler(box, "click");
      });
      selector.on("doubleClick", function(box) {
        return selectorClicksHandler(box, "doubleClick");
      });
      selector.on("select", function(bounds) {
        if (_this.state.selecting) {
          _this._selectSlot(_extends$1({}, _this.state, {
            action: "select",
            bounds
          }));
          _this.setState({
            selecting: false
          });
        }
      });
      selector.on("reset", function() {
        if (_this.state.selecting) {
          _this.setState({
            selecting: false
          });
        }
      });
    };
    _this._teardownSelectable = function() {
      if (!_this._selector)
        return;
      _this._selector.teardown();
      _this._selector = null;
    };
    _this._selectSlot = function(_ref3) {
      var startDate = _ref3.startDate, endDate = _ref3.endDate, action = _ref3.action, bounds = _ref3.bounds, box = _ref3.box;
      var current = startDate, slots = [];
      while (_this.props.localizer.lte(current, endDate)) {
        slots.push(current);
        current = new Date(+current + _this.props.step * 60 * 1e3);
      }
      notify(_this.props.onSelectSlot, {
        slots,
        start: startDate,
        end: endDate,
        resourceId: _this.props.resource,
        action,
        bounds,
        box
      });
    };
    _this._select = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this._doubleClick = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this._keyPress = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.slotMetrics = getSlotMetrics$1(_this.props);
    return _this;
  }
  var _proto = DayColumn2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.props.selectable && this._selectable();
    if (this.props.isNow) {
      this.setTimeIndicatorPositionUpdateInterval();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this._teardownSelectable();
    this.clearTimeIndicatorInterval();
  };
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable)
      this._selectable();
    if (!nextProps.selectable && this.props.selectable)
      this._teardownSelectable();
    this.slotMetrics = this.slotMetrics.update(nextProps);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props3 = this.props, getNow2 = _this$props3.getNow, isNow = _this$props3.isNow, localizer = _this$props3.localizer, date2 = _this$props3.date, min2 = _this$props3.min, max2 = _this$props3.max;
    var getNowChanged = localizer.neq(prevProps.getNow(), getNow2(), "minutes");
    if (prevProps.isNow !== isNow || getNowChanged) {
      this.clearTimeIndicatorInterval();
      if (isNow) {
        var tail = !getNowChanged && localizer.eq(prevProps.date, date2, "minutes") && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
        this.setTimeIndicatorPositionUpdateInterval(tail);
      }
    } else if (isNow && (localizer.neq(prevProps.min, min2, "minutes") || localizer.neq(prevProps.max, max2, "minutes"))) {
      this.positionTimeIndicator();
    }
  };
  _proto.setTimeIndicatorPositionUpdateInterval = function setTimeIndicatorPositionUpdateInterval(tail) {
    var _this2 = this;
    if (tail === void 0) {
      tail = false;
    }
    if (!this.intervalTriggered && !tail) {
      this.positionTimeIndicator();
    }
    this._timeIndicatorTimeout = window.setTimeout(function() {
      _this2.intervalTriggered = true;
      _this2.positionTimeIndicator();
      _this2.setTimeIndicatorPositionUpdateInterval();
    }, 6e4);
  };
  _proto.clearTimeIndicatorInterval = function clearTimeIndicatorInterval() {
    this.intervalTriggered = false;
    window.clearTimeout(this._timeIndicatorTimeout);
  };
  _proto.positionTimeIndicator = function positionTimeIndicator() {
    var _this$props4 = this.props, min2 = _this$props4.min, max2 = _this$props4.max, getNow2 = _this$props4.getNow;
    var current = getNow2();
    if (current >= min2 && current <= max2) {
      var top2 = this.slotMetrics.getCurrentTimePosition(current);
      this.intervalTriggered = true;
      this.setState({
        timeIndicatorPosition: top2
      });
    } else {
      this.clearTimeIndicatorInterval();
    }
  };
  _proto.render = function render() {
    var _this$props5 = this.props, date2 = _this$props5.date, max2 = _this$props5.max, rtl = _this$props5.rtl, isNow = _this$props5.isNow, resource = _this$props5.resource, accessors2 = _this$props5.accessors, localizer = _this$props5.localizer, _this$props5$getters = _this$props5.getters, dayProp = _this$props5$getters.dayProp, getters = _objectWithoutPropertiesLoose(_this$props5$getters, _excluded$2), _this$props5$componen = _this$props5.components, EventContainer = _this$props5$componen.eventContainerWrapper, components = _objectWithoutPropertiesLoose(_this$props5$componen, _excluded2);
    var slotMetrics = this.slotMetrics;
    var _this$state = this.state, selecting = _this$state.selecting, top2 = _this$state.top, height2 = _this$state.height, startDate = _this$state.startDate, endDate = _this$state.endDate;
    var selectDates = {
      start: startDate,
      end: endDate
    };
    var _dayProp = dayProp(max2), className = _dayProp.className, style2 = _dayProp.style;
    var DayColumnWrapperComponent = components.dayColumnWrapper || DayColumnWrapper;
    return /* @__PURE__ */ jsxs(DayColumnWrapperComponent, {
      date: date2,
      style: style2,
      className: clsx(className, "rbc-day-slot", "rbc-time-column", isNow && "rbc-now", isNow && "rbc-today", selecting && "rbc-slot-selecting"),
      children: [slotMetrics.groups.map(function(grp, idx) {
        return /* @__PURE__ */ jsx(TimeSlotGroup, {
          group: grp,
          resource,
          getters,
          components
        }, idx);
      }), /* @__PURE__ */ jsx(EventContainer, {
        localizer,
        resource,
        accessors: accessors2,
        getters,
        components,
        slotMetrics,
        children: /* @__PURE__ */ jsxs("div", {
          className: clsx("rbc-events-container", rtl && "rtl"),
          children: [this.renderEvents({
            events: this.props.backgroundEvents,
            isBackgroundEvent: true
          }), this.renderEvents({
            events: this.props.events
          })]
        })
      }), selecting && /* @__PURE__ */ jsx("div", {
        className: "rbc-slot-selection",
        style: {
          top: top2,
          height: height2
        },
        children: /* @__PURE__ */ jsx("span", {
          children: localizer.format(selectDates, "selectRangeFormat")
        })
      }), isNow && this.intervalTriggered && /* @__PURE__ */ jsx("div", {
        className: "rbc-current-time-indicator",
        style: {
          top: this.state.timeIndicatorPosition + "%"
        }
      })]
    });
  };
  return DayColumn2;
}(React.Component);
DayColumn.propTypes = {};
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};
var TimeGutter = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(TimeGutter2, _Component);
  function TimeGutter2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.renderSlot = function(value, idx) {
      if (idx !== 0)
        return null;
      var _this$props = _this.props, localizer = _this$props.localizer, getNow2 = _this$props.getNow;
      var isNow = _this.slotMetrics.dateIsInGroup(getNow2(), idx);
      return /* @__PURE__ */ jsx("span", {
        className: clsx("rbc-label", isNow && "rbc-now"),
        children: localizer.format(value, "timeGutterFormat")
      });
    };
    var _this$props2 = _this.props, min2 = _this$props2.min, max2 = _this$props2.max, timeslots = _this$props2.timeslots, step = _this$props2.step, _localizer = _this$props2.localizer;
    _this.slotMetrics = getSlotMetrics$1({
      min: min2,
      max: max2,
      timeslots,
      step,
      localizer: _localizer
    });
    return _this;
  }
  var _proto = TimeGutter2.prototype;
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    this.slotMetrics = this.slotMetrics.update(nextProps);
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props3 = this.props, resource = _this$props3.resource, components = _this$props3.components, getters = _this$props3.getters;
    return /* @__PURE__ */ jsx("div", {
      className: "rbc-time-gutter rbc-time-column",
      children: this.slotMetrics.groups.map(function(grp, idx) {
        return /* @__PURE__ */ jsx(TimeSlotGroup, {
          group: grp,
          resource,
          components,
          renderSlot: _this2.renderSlot,
          getters
        }, idx);
      })
    });
  };
  return TimeGutter2;
}(_react_17_0_2_react.exports.Component);
TimeGutter.propTypes = {};
var ResourceHeader = function ResourceHeader2(_ref) {
  var label = _ref.label;
  return /* @__PURE__ */ jsx(Fragment, {
    children: label
  });
};
ResourceHeader.propTypes = {};
var TimeGridHeader = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TimeGridHeader2, _React$Component);
  function TimeGridHeader2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handleHeaderClick = function(date2, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date2, view]);
    };
    _this.renderRow = function(resource) {
      var _this$props = _this.props, events = _this$props.events, rtl = _this$props.rtl, selectable = _this$props.selectable, getNow2 = _this$props.getNow, range2 = _this$props.range, getters = _this$props.getters, localizer = _this$props.localizer, accessors2 = _this$props.accessors, components = _this$props.components, resizable = _this$props.resizable;
      var resourceId = accessors2.resourceId(resource);
      var eventsToDisplay = resource ? events.filter(function(event) {
        return accessors2.resource(event) === resourceId;
      }) : events;
      return /* @__PURE__ */ jsx(DateContentRow, {
        isAllDay: true,
        rtl,
        getNow: getNow2,
        minRows: 2,
        range: range2,
        events: eventsToDisplay,
        resourceId,
        className: "rbc-allday-cell",
        selectable,
        selected: _this.props.selected,
        components,
        accessors: accessors2,
        getters,
        localizer,
        onSelect: _this.props.onSelectEvent,
        onDoubleClick: _this.props.onDoubleClickEvent,
        onKeyPress: _this.props.onKeyPressEvent,
        onSelectSlot: _this.props.onSelectSlot,
        longPressThreshold: _this.props.longPressThreshold,
        resizable
      });
    };
    return _this;
  }
  var _proto = TimeGridHeader2.prototype;
  _proto.renderHeaderCells = function renderHeaderCells(range2) {
    var _this2 = this;
    var _this$props2 = this.props, localizer = _this$props2.localizer, getDrilldownView = _this$props2.getDrilldownView, getNow2 = _this$props2.getNow, dayProp = _this$props2.getters.dayProp, _this$props2$componen = _this$props2.components.header, HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
    var today = getNow2();
    return range2.map(function(date2, i) {
      var drilldownView = getDrilldownView(date2);
      var label = localizer.format(date2, "dayFormat");
      var _dayProp = dayProp(date2), className = _dayProp.className, style2 = _dayProp.style;
      var header = /* @__PURE__ */ jsx(HeaderComponent, {
        date: date2,
        label,
        localizer
      });
      return /* @__PURE__ */ jsx("div", {
        style: style2,
        className: clsx("rbc-header", className, localizer.isSameDate(date2, today) && "rbc-today"),
        children: drilldownView ? /* @__PURE__ */ jsx("a", {
          href: "#",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date2, drilldownView, e);
          },
          children: header
        }) : /* @__PURE__ */ jsx("span", {
          children: header
        })
      }, i);
    });
  };
  _proto.render = function render() {
    var _this3 = this;
    var _this$props3 = this.props, width = _this$props3.width, rtl = _this$props3.rtl, resources = _this$props3.resources, range2 = _this$props3.range, events = _this$props3.events, getNow2 = _this$props3.getNow, accessors2 = _this$props3.accessors, selectable = _this$props3.selectable, components = _this$props3.components, getters = _this$props3.getters, scrollRef = _this$props3.scrollRef, localizer = _this$props3.localizer, isOverflowing = _this$props3.isOverflowing, _this$props3$componen = _this$props3.components, TimeGutterHeader = _this$props3$componen.timeGutterHeader, _this$props3$componen2 = _this$props3$componen.resourceHeader, ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2, resizable = _this$props3.resizable;
    var style2 = {};
    if (isOverflowing) {
      style2[rtl ? "marginLeft" : "marginRight"] = scrollbarSize() + "px";
    }
    var groupedEvents = resources.groupEvents(events);
    return /* @__PURE__ */ jsxs("div", {
      style: style2,
      ref: scrollRef,
      className: clsx("rbc-time-header", isOverflowing && "rbc-overflowing"),
      children: [/* @__PURE__ */ jsx("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width,
          minWidth: width,
          maxWidth: width
        },
        children: TimeGutterHeader && /* @__PURE__ */ jsx(TimeGutterHeader, {})
      }), resources.map(function(_ref, idx) {
        var id2 = _ref[0], resource = _ref[1];
        return /* @__PURE__ */ jsxs("div", {
          className: "rbc-time-header-content",
          children: [resource && /* @__PURE__ */ jsx("div", {
            className: "rbc-row rbc-row-resource",
            children: /* @__PURE__ */ jsx("div", {
              className: "rbc-header",
              children: /* @__PURE__ */ jsx(ResourceHeaderComponent, {
                index: idx,
                label: accessors2.resourceTitle(resource),
                resource
              })
            })
          }, "resource_" + idx), /* @__PURE__ */ jsx("div", {
            className: "rbc-row rbc-time-header-cell" + (range2.length <= 1 ? " rbc-time-header-cell-single-day" : ""),
            children: _this3.renderHeaderCells(range2)
          }), /* @__PURE__ */ jsx(DateContentRow, {
            isAllDay: true,
            rtl,
            getNow: getNow2,
            minRows: 2,
            range: range2,
            events: groupedEvents.get(id2) || [],
            resourceId: resource && id2,
            className: "rbc-allday-cell",
            selectable,
            selected: _this3.props.selected,
            components,
            accessors: accessors2,
            getters,
            localizer,
            onSelect: _this3.props.onSelectEvent,
            onDoubleClick: _this3.props.onDoubleClickEvent,
            onKeyPress: _this3.props.onKeyPressEvent,
            onSelectSlot: _this3.props.onSelectSlot,
            longPressThreshold: _this3.props.longPressThreshold,
            resizable
          })]
        }, id2 || idx);
      })]
    });
  };
  return TimeGridHeader2;
}(React.Component);
TimeGridHeader.propTypes = {};
var NONE = {};
function Resources(resources, accessors2) {
  return {
    map: function map(fn3) {
      if (!resources)
        return [fn3([NONE, null], 0)];
      return resources.map(function(resource, idx) {
        return fn3([accessors2.resourceId(resource), resource], idx);
      });
    },
    groupEvents: function groupEvents(events) {
      var eventsByResource = new Map();
      if (!resources) {
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }
      events.forEach(function(event) {
        var id2 = accessors2.resource(event) || NONE;
        var resourceEvents = eventsByResource.get(id2) || [];
        resourceEvents.push(event);
        eventsByResource.set(id2, resourceEvents);
      });
      return eventsByResource;
    }
  };
}
var TimeGrid = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(TimeGrid2, _Component);
  function TimeGrid2(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleScroll = function(e) {
      if (_this.scrollRef.current) {
        _this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };
    _this.handleResize = function() {
      cancel(_this.rafHandle);
      _this.rafHandle = request(_this.checkOverflow);
    };
    _this.gutterRef = function(ref) {
      _this.gutter = ref && _reactDom_17_0_2_reactDom.exports.findDOMNode(ref);
    };
    _this.handleSelectAlldayEvent = function() {
      _this.clearSelection();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleSelectAllDaySlot = function(slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;
      var start2 = new Date(slots[0]);
      var end2 = new Date(slots[slots.length - 1]);
      end2.setDate(slots[slots.length - 1].getDate() + 1);
      notify(onSelectSlot, {
        slots,
        start: start2,
        end: end2,
        action: slotInfo.action,
        resourceId: slotInfo.resourceId
      });
    };
    _this.checkOverflow = function() {
      if (_this._updatingOverflow)
        return;
      var content = _this.contentRef.current;
      var isOverflowing = content.scrollHeight > content.clientHeight;
      if (_this.state.isOverflowing !== isOverflowing) {
        _this._updatingOverflow = true;
        _this.setState({
          isOverflowing
        }, function() {
          _this._updatingOverflow = false;
        });
      }
    };
    _this.memoizedResources = memoizeOne(function(resources, accessors2) {
      return Resources(resources, accessors2);
    });
    _this.state = {
      gutterWidth: void 0,
      isOverflowing: null
    };
    _this.scrollRef = /* @__PURE__ */ React.createRef();
    _this.contentRef = /* @__PURE__ */ React.createRef();
    _this._scrollRatio = null;
    return _this;
  }
  var _proto = TimeGrid2.prototype;
  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    this.calculateScroll();
  };
  _proto.componentDidMount = function componentDidMount() {
    this.checkOverflow();
    if (this.props.width == null) {
      this.measureGutter();
    }
    this.applyScroll();
    window.addEventListener("resize", this.handleResize);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    cancel(this.rafHandle);
    if (this.measureGutterAnimationFrameRequest) {
      window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.width == null) {
      this.measureGutter();
    }
    this.applyScroll();
  };
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var _this$props = this.props, range2 = _this$props.range, scrollToTime = _this$props.scrollToTime, localizer = _this$props.localizer;
    if (localizer.neq(nextProps.range[0], range2[0], "minutes") || localizer.neq(nextProps.scrollToTime, scrollToTime, "minutes")) {
      this.calculateScroll(nextProps);
    }
  };
  _proto.renderEvents = function renderEvents(range2, events, backgroundEvents, now) {
    var _this2 = this;
    var _this$props2 = this.props, min2 = _this$props2.min, max2 = _this$props2.max, components = _this$props2.components, accessors2 = _this$props2.accessors, localizer = _this$props2.localizer, dayLayoutAlgorithm = _this$props2.dayLayoutAlgorithm;
    var resources = this.memoizedResources(this.props.resources, accessors2);
    var groupedEvents = resources.groupEvents(events);
    var groupedBackgroundEvents = resources.groupEvents(backgroundEvents);
    return resources.map(function(_ref, i) {
      var id2 = _ref[0], resource = _ref[1];
      return range2.map(function(date2, jj2) {
        var daysEvents = (groupedEvents.get(id2) || []).filter(function(event) {
          return localizer.inRange(date2, accessors2.start(event), accessors2.end(event), "day");
        });
        var daysBackgroundEvents = (groupedBackgroundEvents.get(id2) || []).filter(function(event) {
          return localizer.inRange(date2, accessors2.start(event), accessors2.end(event), "day");
        });
        return /* @__PURE__ */ _react_17_0_2_react.exports.createElement(DayColumn, __spreadProps(__spreadValues({}, _this2.props), {
          localizer,
          min: localizer.merge(date2, min2),
          max: localizer.merge(date2, max2),
          resource: resource && id2,
          components,
          isNow: localizer.isSameDate(date2, now),
          key: i + "-" + jj2,
          date: date2,
          events: daysEvents,
          backgroundEvents: daysBackgroundEvents,
          dayLayoutAlgorithm
        }));
      });
    });
  };
  _proto.render = function render() {
    var _this$props3 = this.props, events = _this$props3.events, backgroundEvents = _this$props3.backgroundEvents, range2 = _this$props3.range, width = _this$props3.width, rtl = _this$props3.rtl, selected = _this$props3.selected, getNow2 = _this$props3.getNow, resources = _this$props3.resources, components = _this$props3.components, accessors2 = _this$props3.accessors, getters = _this$props3.getters, localizer = _this$props3.localizer, min2 = _this$props3.min, max2 = _this$props3.max, showMultiDayTimes = _this$props3.showMultiDayTimes, longPressThreshold = _this$props3.longPressThreshold, resizable = _this$props3.resizable;
    width = width || this.state.gutterWidth;
    var start2 = range2[0], end2 = range2[range2.length - 1];
    this.slots = range2.length;
    var allDayEvents = [], rangeEvents = [], rangeBackgroundEvents = [];
    events.forEach(function(event) {
      if (inRange$1(event, start2, end2, accessors2, localizer)) {
        var eStart = accessors2.start(event), eEnd = accessors2.end(event);
        if (accessors2.allDay(event) || localizer.startAndEndAreDateOnly(eStart, eEnd) || !showMultiDayTimes && !localizer.isSameDate(eStart, eEnd)) {
          allDayEvents.push(event);
        } else {
          rangeEvents.push(event);
        }
      }
    });
    backgroundEvents.forEach(function(event) {
      if (inRange$1(event, start2, end2, accessors2, localizer)) {
        rangeBackgroundEvents.push(event);
      }
    });
    allDayEvents.sort(function(a, b) {
      return sortEvents$1$1(a, b, accessors2, localizer);
    });
    return /* @__PURE__ */ jsxs("div", {
      className: clsx("rbc-time-view", resources && "rbc-time-view-resources"),
      children: [/* @__PURE__ */ jsx(TimeGridHeader, {
        range: range2,
        events: allDayEvents,
        width,
        rtl,
        getNow: getNow2,
        localizer,
        selected,
        resources: this.memoizedResources(resources, accessors2),
        selectable: this.props.selectable,
        accessors: accessors2,
        getters,
        components,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectAlldayEvent,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable
      }), /* @__PURE__ */ jsxs("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll,
        children: [/* @__PURE__ */ jsx(TimeGutter, {
          date: start2,
          ref: this.gutterRef,
          localizer,
          min: localizer.merge(start2, min2),
          max: localizer.merge(start2, max2),
          step: this.props.step,
          getNow: this.props.getNow,
          timeslots: this.props.timeslots,
          components,
          className: "rbc-time-gutter",
          getters
        }), this.renderEvents(range2, rangeEvents, rangeBackgroundEvents, getNow2())]
      })]
    });
  };
  _proto.clearSelection = function clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  };
  _proto.measureGutter = function measureGutter() {
    var _this3 = this;
    if (this.measureGutterAnimationFrameRequest) {
      window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }
    this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
      var width = getWidth(_this3.gutter);
      if (width && _this3.state.gutterWidth !== width) {
        _this3.setState({
          gutterWidth: width
        });
      }
    });
  };
  _proto.applyScroll = function applyScroll() {
    if (this._scrollRatio != null) {
      var content = this.contentRef.current;
      content.scrollTop = content.scrollHeight * this._scrollRatio;
      this._scrollRatio = null;
    }
  };
  _proto.calculateScroll = function calculateScroll(props) {
    if (props === void 0) {
      props = this.props;
    }
    var _props = props, min2 = _props.min, max2 = _props.max, scrollToTime = _props.scrollToTime, localizer = _props.localizer;
    var diffMillis = scrollToTime - localizer.startOf(scrollToTime, "day");
    var totalMillis = localizer.diff(min2, max2, "milliseconds");
    this._scrollRatio = diffMillis / totalMillis;
  };
  return TimeGrid2;
}(_react_17_0_2_react.exports.Component);
TimeGrid.propTypes = {};
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2
};
var _excluded$3 = ["date", "localizer", "min", "max", "scrollToTime"];
var Day = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Day2, _React$Component);
  function Day2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Day2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, date2 = _this$props.date, localizer = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer.startOf(new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer.endOf(new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), "day") : _this$props$scrollToT, props = _objectWithoutPropertiesLoose(_this$props, _excluded$3);
    var range2 = Day2.range(date2, {
      localizer
    });
    return /* @__PURE__ */ jsx(TimeGrid, __spreadProps(__spreadValues({}, props), {
      range: range2,
      eventOffset: 10,
      localizer,
      min: min2,
      max: max2,
      scrollToTime
    }));
  };
  return Day2;
}(React.Component);
Day.propTypes = {};
Day.range = function(date2, _ref) {
  var localizer = _ref.localizer;
  return [localizer.startOf(date2, "day")];
};
Day.navigate = function(date2, action, _ref2) {
  var localizer = _ref2.localizer;
  switch (action) {
    case navigate$1.PREVIOUS:
      return localizer.add(date2, -1, "day");
    case navigate$1.NEXT:
      return localizer.add(date2, 1, "day");
    default:
      return date2;
  }
};
Day.title = function(date2, _ref3) {
  var localizer = _ref3.localizer;
  return localizer.format(date2, "dayHeaderFormat");
};
var _excluded$4 = ["date", "localizer", "min", "max", "scrollToTime"];
var Week = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Week2, _React$Component);
  function Week2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Week2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, date2 = _this$props.date, localizer = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer.startOf(new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer.endOf(new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), "day") : _this$props$scrollToT, props = _objectWithoutPropertiesLoose(_this$props, _excluded$4);
    var range2 = Week2.range(date2, this.props);
    return /* @__PURE__ */ jsx(TimeGrid, __spreadProps(__spreadValues({}, props), {
      range: range2,
      eventOffset: 15,
      localizer,
      min: min2,
      max: max2,
      scrollToTime
    }));
  };
  return Week2;
}(React.Component);
Week.propTypes = {};
Week.defaultProps = TimeGrid.defaultProps;
Week.navigate = function(date2, action, _ref) {
  var localizer = _ref.localizer;
  switch (action) {
    case navigate$1.PREVIOUS:
      return localizer.add(date2, -1, "week");
    case navigate$1.NEXT:
      return localizer.add(date2, 1, "week");
    default:
      return date2;
  }
};
Week.range = function(date2, _ref2) {
  var localizer = _ref2.localizer;
  var firstOfWeek = localizer.startOfWeek();
  var start2 = localizer.startOf(date2, "week", firstOfWeek);
  var end2 = localizer.endOf(date2, "week", firstOfWeek);
  return localizer.range(start2, end2);
};
Week.title = function(date2, _ref3) {
  var localizer = _ref3.localizer;
  var _Week$range = Week.range(date2, {
    localizer
  }), start2 = _Week$range[0], rest = _Week$range.slice(1);
  return localizer.format({
    start: start2,
    end: rest.pop()
  }, "dayRangeHeaderFormat");
};
var _excluded$5 = ["date", "localizer", "min", "max", "scrollToTime"];
function workWeekRange(date2, options2) {
  return Week.range(date2, options2).filter(function(d) {
    return [6, 0].indexOf(d.getDay()) === -1;
  });
}
var WorkWeek = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(WorkWeek2, _React$Component);
  function WorkWeek2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = WorkWeek2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, date2 = _this$props.date, localizer = _this$props.localizer, _this$props$min = _this$props.min, min2 = _this$props$min === void 0 ? localizer.startOf(new Date(), "day") : _this$props$min, _this$props$max = _this$props.max, max2 = _this$props$max === void 0 ? localizer.endOf(new Date(), "day") : _this$props$max, _this$props$scrollToT = _this$props.scrollToTime, scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), "day") : _this$props$scrollToT, props = _objectWithoutPropertiesLoose(_this$props, _excluded$5);
    var range2 = workWeekRange(date2, this.props);
    return /* @__PURE__ */ jsx(TimeGrid, __spreadProps(__spreadValues({}, props), {
      range: range2,
      eventOffset: 15,
      localizer,
      min: min2,
      max: max2,
      scrollToTime
    }));
  };
  return WorkWeek2;
}(React.Component);
WorkWeek.propTypes = {};
WorkWeek.defaultProps = TimeGrid.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = Week.navigate;
WorkWeek.title = function(date2, _ref) {
  var localizer = _ref.localizer;
  var _workWeekRange = workWeekRange(date2, {
    localizer
  }), start2 = _workWeekRange[0], rest = _workWeekRange.slice(1);
  return localizer.format({
    start: start2,
    end: rest.pop()
  }, "dayRangeHeaderFormat");
};
function Agenda(_ref) {
  var accessors2 = _ref.accessors, components = _ref.components, date2 = _ref.date, events = _ref.events, getters = _ref.getters, length = _ref.length, localizer = _ref.localizer, onDoubleClickEvent = _ref.onDoubleClickEvent, onSelectEvent = _ref.onSelectEvent, selected = _ref.selected;
  var headerRef = _react_17_0_2_react.exports.useRef(null);
  var dateColRef = _react_17_0_2_react.exports.useRef(null);
  var timeColRef = _react_17_0_2_react.exports.useRef(null);
  var contentRef = _react_17_0_2_react.exports.useRef(null);
  var tbodyRef = _react_17_0_2_react.exports.useRef(null);
  _react_17_0_2_react.exports.useEffect(function() {
    _adjustHeader();
  });
  var renderDay = function renderDay2(day2, events2, dayKey) {
    var Event2 = components.event, AgendaDate = components.date;
    events2 = events2.filter(function(e) {
      return inRange$1(e, localizer.startOf(day2, "day"), localizer.endOf(day2, "day"), accessors2, localizer);
    });
    return events2.map(function(event, idx) {
      var title = accessors2.title(event);
      var end3 = accessors2.end(event);
      var start2 = accessors2.start(event);
      var userProps = getters.eventProp(event, start2, end3, isSelected$1(event, selected));
      var dateLabel = idx === 0 && localizer.format(day2, "agendaDateFormat");
      var first = idx === 0 ? /* @__PURE__ */ jsx("td", {
        rowSpan: events2.length,
        className: "rbc-agenda-date-cell",
        children: AgendaDate ? /* @__PURE__ */ jsx(AgendaDate, {
          day: day2,
          label: dateLabel
        }) : dateLabel
      }) : false;
      return /* @__PURE__ */ jsxs("tr", {
        className: userProps.className,
        style: userProps.style,
        children: [first, /* @__PURE__ */ jsx("td", {
          className: "rbc-agenda-time-cell",
          children: timeRangeLabel(day2, event)
        }), /* @__PURE__ */ jsx("td", {
          className: "rbc-agenda-event-cell",
          onClick: function onClick(e) {
            return onSelectEvent && onSelectEvent(event, e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return onDoubleClickEvent && onDoubleClickEvent(event, e);
          },
          children: Event2 ? /* @__PURE__ */ jsx(Event2, {
            event,
            title
          }) : title
        })]
      }, dayKey + "_" + idx);
    }, []);
  };
  var timeRangeLabel = function timeRangeLabel2(day2, event) {
    var labelClass = "", TimeComponent = components.time, label = localizer.messages.allDay;
    var end3 = accessors2.end(event);
    var start2 = accessors2.start(event);
    if (!accessors2.allDay(event)) {
      if (localizer.eq(start2, end3)) {
        label = localizer.format(start2, "agendaTimeFormat");
      } else if (localizer.isSameDate(start2, end3)) {
        label = localizer.format({
          start: start2,
          end: end3
        }, "agendaTimeRangeFormat");
      } else if (localizer.isSameDate(day2, start2)) {
        label = localizer.format(start2, "agendaTimeFormat");
      } else if (localizer.isSameDate(day2, end3)) {
        label = localizer.format(end3, "agendaTimeFormat");
      }
    }
    if (localizer.gt(day2, start2, "day"))
      labelClass = "rbc-continues-prior";
    if (localizer.lt(day2, end3, "day"))
      labelClass += " rbc-continues-after";
    return /* @__PURE__ */ jsx("span", {
      className: labelClass.trim(),
      children: TimeComponent ? /* @__PURE__ */ jsx(TimeComponent, {
        event,
        day: day2,
        label
      }) : label
    });
  };
  var _adjustHeader = function _adjustHeader2() {
    if (!tbodyRef.current)
      return;
    var header = headerRef.current;
    var firstRow = tbodyRef.current.firstChild;
    if (!firstRow)
      return;
    var isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
    var _widths = [];
    var widths = _widths;
    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];
    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + "px";
      timeColRef.current.style.width = _widths[1] + "px";
    }
    if (isOverflowing) {
      addClass(header, "rbc-header-overflowing");
      header.style.marginRight = scrollbarSize() + "px";
    } else {
      removeClass(header, "rbc-header-overflowing");
    }
  };
  var messages2 = localizer.messages;
  var end2 = localizer.add(date2, length, "day");
  var range2 = localizer.range(date2, end2, "day");
  events = events.filter(function(event) {
    return inRange$1(event, localizer.startOf(date2, "day"), localizer.endOf(end2, "day"), accessors2, localizer);
  });
  events.sort(function(a, b) {
    return +accessors2.start(a) - +accessors2.start(b);
  });
  return /* @__PURE__ */ jsx("div", {
    className: "rbc-agenda-view",
    children: events.length !== 0 ? /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("table", {
        ref: headerRef,
        className: "rbc-agenda-table",
        children: /* @__PURE__ */ jsx("thead", {
          children: /* @__PURE__ */ jsxs("tr", {
            children: [/* @__PURE__ */ jsx("th", {
              className: "rbc-header",
              ref: dateColRef,
              children: messages2.date
            }), /* @__PURE__ */ jsx("th", {
              className: "rbc-header",
              ref: timeColRef,
              children: messages2.time
            }), /* @__PURE__ */ jsx("th", {
              className: "rbc-header",
              children: messages2.event
            })]
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "rbc-agenda-content",
        ref: contentRef,
        children: /* @__PURE__ */ jsx("table", {
          className: "rbc-agenda-table",
          children: /* @__PURE__ */ jsx("tbody", {
            ref: tbodyRef,
            children: range2.map(function(day2, idx) {
              return renderDay(day2, events, idx);
            })
          })
        })
      })]
    }) : /* @__PURE__ */ jsx("span", {
      className: "rbc-agenda-empty",
      children: messages2.noEventsInRange
    })
  });
}
Agenda.propTypes = {};
Agenda.defaultProps = {
  length: 30
};
Agenda.range = function(start2, _ref2) {
  var _ref2$length = _ref2.length, length = _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length, localizer = _ref2.localizer;
  var end2 = localizer.add(start2, length, "day");
  return {
    start: start2,
    end: end2
  };
};
Agenda.navigate = function(date2, action, _ref3) {
  var _ref3$length = _ref3.length, length = _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length, localizer = _ref3.localizer;
  switch (action) {
    case navigate$1.PREVIOUS:
      return localizer.add(date2, -length, "day");
    case navigate$1.NEXT:
      return localizer.add(date2, length, "day");
    default:
      return date2;
  }
};
Agenda.title = function(start2, _ref4) {
  var _ref4$length = _ref4.length, length = _ref4$length === void 0 ? Agenda.defaultProps.length : _ref4$length, localizer = _ref4.localizer;
  var end2 = localizer.add(start2, length, "day");
  return localizer.format({
    start: start2,
    end: end2
  }, "agendaHeaderFormat");
};
var _VIEWS;
var VIEWS = (_VIEWS = {}, _VIEWS[views$1.MONTH] = MonthView, _VIEWS[views$1.WEEK] = Week, _VIEWS[views$1.WORK_WEEK] = WorkWeek, _VIEWS[views$1.DAY] = Day, _VIEWS[views$1.AGENDA] = Agenda, _VIEWS);
var _excluded$6 = ["action", "date", "today"];
function moveDate(View, _ref) {
  var action = _ref.action, date2 = _ref.date, today = _ref.today, props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  View = typeof View === "string" ? VIEWS[View] : View;
  switch (action) {
    case navigate$1.TODAY:
      date2 = today || new Date();
      break;
    case navigate$1.DATE:
      break;
    default:
      !(View && typeof View.navigate === "function") ? browser(false) : void 0;
      date2 = View.navigate(date2, action, props);
  }
  return date2;
}
var Toolbar = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Toolbar2, _React$Component);
  function Toolbar2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.navigate = function(action) {
      _this.props.onNavigate(action);
    };
    _this.view = function(view) {
      _this.props.onView(view);
    };
    return _this;
  }
  var _proto = Toolbar2.prototype;
  _proto.render = function render() {
    var _this$props = this.props, messages2 = _this$props.localizer.messages, label = _this$props.label;
    return /* @__PURE__ */ jsxs("div", {
      className: "rbc-toolbar",
      children: [/* @__PURE__ */ jsxs("span", {
        className: "rbc-btn-group",
        children: [/* @__PURE__ */ jsx("button", {
          type: "button",
          onClick: this.navigate.bind(null, navigate$1.TODAY),
          children: messages2.today
        }), /* @__PURE__ */ jsx("button", {
          type: "button",
          onClick: this.navigate.bind(null, navigate$1.PREVIOUS),
          children: messages2.previous
        }), /* @__PURE__ */ jsx("button", {
          type: "button",
          onClick: this.navigate.bind(null, navigate$1.NEXT),
          children: messages2.next
        })]
      }), /* @__PURE__ */ jsx("span", {
        className: "rbc-toolbar-label",
        children: label
      }), /* @__PURE__ */ jsx("span", {
        className: "rbc-btn-group",
        children: this.viewNamesGroup(messages2)
      })]
    });
  };
  _proto.viewNamesGroup = function viewNamesGroup(messages2) {
    var _this2 = this;
    var viewNames2 = this.props.views;
    var view = this.props.view;
    if (viewNames2.length > 1) {
      return viewNames2.map(function(name) {
        return /* @__PURE__ */ jsx("button", {
          type: "button",
          className: clsx({
            "rbc-active": view === name
          }),
          onClick: _this2.view.bind(null, name),
          children: messages2[name]
        }, name);
      });
    }
  };
  return Toolbar2;
}(React.Component);
Toolbar.propTypes = {};
function accessor$1(data, field) {
  var value = null;
  if (typeof field === "function")
    value = field(data);
  else if (typeof field === "string" && typeof data === "object" && data != null && field in data)
    value = data[field];
  return value;
}
var wrapAccessor$1 = function wrapAccessor2(acc) {
  return function(data) {
    return accessor$1(data, acc);
  };
};
var _excluded$7 = ["view", "date", "getNow", "onNavigate"], _excluded2$1 = ["view", "toolbar", "events", "backgroundEvents", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function viewNames$1$1(_views) {
  return !Array.isArray(_views) ? Object.keys(_views) : _views;
}
function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames$1$1(_views);
  return names.indexOf(view) !== -1;
}
var Calendar = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Calendar2, _React$Component);
  function Calendar2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.getViews = function() {
      var views2 = _this.props.views;
      if (Array.isArray(views2)) {
        return transform(views2, function(obj, name) {
          return obj[name] = VIEWS[name];
        }, {});
      }
      if (typeof views2 === "object") {
        return mapValues(views2, function(value, key) {
          if (value === true) {
            return VIEWS[key];
          }
          return value;
        });
      }
      return VIEWS;
    };
    _this.getView = function() {
      var views2 = _this.getViews();
      return views2[_this.props.view];
    };
    _this.getDrilldownView = function(date2) {
      var _this$props = _this.props, view = _this$props.view, drilldownView = _this$props.drilldownView, getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView)
        return drilldownView;
      return getDrilldownView(date2, view, Object.keys(_this.getViews()));
    };
    _this.handleRangeChange = function(date2, viewComponent, view) {
      var _this$props2 = _this.props, onRangeChange = _this$props2.onRangeChange, localizer = _this$props2.localizer;
      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date2, {
            localizer
          }), view);
        }
      }
    };
    _this.handleNavigate = function(action, newDate) {
      var _this$props3 = _this.props, view = _this$props3.view, date2 = _this$props3.date, getNow2 = _this$props3.getNow, onNavigate = _this$props3.onNavigate, props = _objectWithoutPropertiesLoose(_this$props3, _excluded$7);
      var ViewComponent = _this.getView();
      var today = getNow2();
      date2 = moveDate(ViewComponent, _extends$1({}, props, {
        action,
        date: newDate || date2 || today,
        today
      }));
      onNavigate(date2, view, action);
      _this.handleRangeChange(date2, ViewComponent);
    };
    _this.handleViewChange = function(view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) {
        _this.props.onView(view);
      }
      var views2 = _this.getViews();
      _this.handleRangeChange(_this.props.date || _this.props.getNow(), views2[view], view);
    };
    _this.handleSelectEvent = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectSlot = function(slotInfo) {
      notify(_this.props.onSelectSlot, slotInfo);
    };
    _this.handleDrillDown = function(date2, view) {
      var onDrillDown = _this.props.onDrillDown;
      if (onDrillDown) {
        onDrillDown(date2, view, _this.drilldownView);
        return;
      }
      if (view)
        _this.handleViewChange(view);
      _this.handleNavigate(navigate$1.DATE, date2);
    };
    _this.state = {
      context: _this.getContext(_this.props)
    };
    return _this;
  }
  var _proto = Calendar2.prototype;
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      context: this.getContext(nextProps)
    });
  };
  _proto.getContext = function getContext(_ref2) {
    var startAccessor = _ref2.startAccessor, endAccessor = _ref2.endAccessor, allDayAccessor = _ref2.allDayAccessor, tooltipAccessor = _ref2.tooltipAccessor, titleAccessor = _ref2.titleAccessor, resourceAccessor = _ref2.resourceAccessor, resourceIdAccessor = _ref2.resourceIdAccessor, resourceTitleAccessor = _ref2.resourceTitleAccessor, eventPropGetter = _ref2.eventPropGetter, backgroundEventPropGetter = _ref2.backgroundEventPropGetter, slotPropGetter = _ref2.slotPropGetter, slotGroupPropGetter = _ref2.slotGroupPropGetter, dayPropGetter = _ref2.dayPropGetter, view = _ref2.view, views2 = _ref2.views, localizer = _ref2.localizer, culture = _ref2.culture, _ref2$messages = _ref2.messages, messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages, _ref2$components = _ref2.components, components = _ref2$components === void 0 ? {} : _ref2$components, _ref2$formats = _ref2.formats, formats2 = _ref2$formats === void 0 ? {} : _ref2$formats;
    var names = viewNames$1$1(views2);
    var msgs = messages(messages$1);
    return {
      viewNames: names,
      localizer: mergeWithDefaults(localizer, culture, formats2, msgs),
      getters: {
        eventProp: function eventProp() {
          return eventPropGetter && eventPropGetter.apply(void 0, arguments) || {};
        },
        backgroundEventProp: function backgroundEventProp() {
          return backgroundEventPropGetter && backgroundEventPropGetter.apply(void 0, arguments) || {};
        },
        slotProp: function slotProp() {
          return slotPropGetter && slotPropGetter.apply(void 0, arguments) || {};
        },
        slotGroupProp: function slotGroupProp() {
          return slotGroupPropGetter && slotGroupPropGetter.apply(void 0, arguments) || {};
        },
        dayProp: function dayProp() {
          return dayPropGetter && dayPropGetter.apply(void 0, arguments) || {};
        }
      },
      components: defaults$1(components[view] || {}, omit$1(components, names), {
        eventWrapper: NoopWrapper$1,
        backgroundEventWrapper: NoopWrapper$1,
        eventContainerWrapper: NoopWrapper$1,
        dateCellWrapper: NoopWrapper$1,
        weekWrapper: NoopWrapper$1,
        timeSlotWrapper: NoopWrapper$1
      }),
      accessors: {
        start: wrapAccessor$1(startAccessor),
        end: wrapAccessor$1(endAccessor),
        allDay: wrapAccessor$1(allDayAccessor),
        tooltip: wrapAccessor$1(tooltipAccessor),
        title: wrapAccessor$1(titleAccessor),
        resource: wrapAccessor$1(resourceAccessor),
        resourceId: wrapAccessor$1(resourceIdAccessor),
        resourceTitle: wrapAccessor$1(resourceTitleAccessor)
      }
    };
  };
  _proto.render = function render() {
    var _this$props4 = this.props, view = _this$props4.view, toolbar = _this$props4.toolbar, events = _this$props4.events, _this$props4$backgrou = _this$props4.backgroundEvents, backgroundEvents = _this$props4$backgrou === void 0 ? [] : _this$props4$backgrou, style2 = _this$props4.style, className = _this$props4.className, elementProps = _this$props4.elementProps, current = _this$props4.date, getNow2 = _this$props4.getNow, length = _this$props4.length, showMultiDayTimes = _this$props4.showMultiDayTimes, onShowMore = _this$props4.onShowMore, doShowMoreDrillDown = _this$props4.doShowMoreDrillDown;
    _this$props4.components;
    _this$props4.formats;
    _this$props4.messages;
    _this$props4.culture;
    var props = _objectWithoutPropertiesLoose(_this$props4, _excluded2$1);
    current = current || getNow2();
    var View = this.getView();
    var _this$state$context = this.state.context, accessors2 = _this$state$context.accessors, components = _this$state$context.components, getters = _this$state$context.getters, localizer = _this$state$context.localizer, viewNames2 = _this$state$context.viewNames;
    var CalToolbar = components.toolbar || Toolbar;
    var label = View.title(current, {
      localizer,
      length
    });
    return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({}, elementProps), {
      className: clsx(className, "rbc-calendar", props.rtl && "rbc-rtl"),
      style: style2,
      children: [toolbar && /* @__PURE__ */ jsx(CalToolbar, {
        date: current,
        view,
        views: viewNames2,
        label,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer
      }), /* @__PURE__ */ jsx(View, __spreadProps(__spreadValues({}, props), {
        events,
        backgroundEvents,
        date: current,
        getNow: getNow2,
        length,
        localizer,
        getters,
        components,
        accessors: accessors2,
        showMultiDayTimes,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore,
        doShowMoreDrillDown
      }))]
    }));
  };
  return Calendar2;
}(React.Component);
Calendar.defaultProps = {
  elementProps: {},
  popup: false,
  toolbar: true,
  view: views$1.MONTH,
  views: [views$1.MONTH, views$1.WEEK, views$1.DAY, views$1.AGENDA],
  step: 30,
  length: 30,
  doShowMoreDrillDown: true,
  drilldownView: views$1.DAY,
  titleAccessor: "title",
  tooltipAccessor: "title",
  allDayAccessor: "allDay",
  startAccessor: "start",
  endAccessor: "end",
  resourceAccessor: "resourceId",
  resourceIdAccessor: "id",
  resourceTitleAccessor: "title",
  longPressThreshold: 250,
  getNow: function getNow() {
    return new Date();
  },
  dayLayoutAlgorithm: "overlap"
};
Calendar.propTypes = {};
var Calendar$1 = uncontrollable(Calendar, {
  view: "onView",
  date: "onNavigate",
  selected: "onSelectEvent"
});
var weekRangeFormat = function weekRangeFormat2(_ref, culture, local) {
  var start2 = _ref.start, end2 = _ref.end;
  return local.format(start2, "MMMM DD", culture) + " \u2013 " + local.format(end2, local.eq(start2, end2, "month") ? "DD" : "MMMM DD", culture);
};
var dateRangeFormat$1 = function dateRangeFormat(_ref2, culture, local) {
  var start2 = _ref2.start, end2 = _ref2.end;
  return local.format(start2, "L", culture) + " \u2013 " + local.format(end2, "L", culture);
};
var timeRangeFormat = function timeRangeFormat2(_ref3, culture, local) {
  var start2 = _ref3.start, end2 = _ref3.end;
  return local.format(start2, "LT", culture) + " \u2013 " + local.format(end2, "LT", culture);
};
var timeRangeStartFormat = function timeRangeStartFormat2(_ref4, culture, local) {
  var start2 = _ref4.start;
  return local.format(start2, "LT", culture) + " \u2013 ";
};
var timeRangeEndFormat = function timeRangeEndFormat2(_ref5, culture, local) {
  var end2 = _ref5.end;
  return " \u2013 " + local.format(end2, "LT", culture);
};
var formats = {
  dateFormat: "DD",
  dayFormat: "DD ddd",
  weekdayFormat: "ddd",
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: "LT",
  monthHeaderFormat: "MMMM YYYY",
  dayHeaderFormat: "dddd MMM DD",
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat$1,
  agendaDateFormat: "ddd MMM DD",
  agendaTimeFormat: "LT",
  agendaTimeRangeFormat: timeRangeFormat
};
function fixUnit(unit) {
  var datePart = unit ? unit.toLowerCase() : unit;
  if (datePart === "FullYear") {
    datePart = "year";
  } else if (!datePart) {
    datePart = void 0;
  }
  return datePart;
}
function moment(moment2) {
  var locale2 = function locale3(m2, c) {
    return c ? m2.locale(c) : m2;
  };
  function defineComparators(a, b, unit) {
    var datePart = fixUnit(unit);
    var dtA = datePart ? moment2(a).startOf(datePart) : moment2(a);
    var dtB = datePart ? moment2(b).startOf(datePart) : moment2(b);
    return [dtA, dtB, datePart];
  }
  function startOf2(date2, unit) {
    if (date2 === void 0) {
      date2 = null;
    }
    var datePart = fixUnit(unit);
    if (datePart) {
      return moment2(date2).startOf(datePart).toDate();
    }
    return moment2(date2).toDate();
  }
  function endOf2(date2, unit) {
    if (date2 === void 0) {
      date2 = null;
    }
    var datePart = fixUnit(unit);
    if (datePart) {
      return moment2(date2).endOf(datePart).toDate();
    }
    return moment2(date2).toDate();
  }
  function eq2(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit), dtA = _defineComparators[0], dtB = _defineComparators[1], datePart = _defineComparators[2];
    return dtA.isSame(dtB, datePart);
  }
  function neq2(a, b, unit) {
    return !eq2(a, b, unit);
  }
  function gt2(a, b, unit) {
    var _defineComparators2 = defineComparators(a, b, unit), dtA = _defineComparators2[0], dtB = _defineComparators2[1], datePart = _defineComparators2[2];
    return dtA.isAfter(dtB, datePart);
  }
  function lt2(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit), dtA = _defineComparators3[0], dtB = _defineComparators3[1], datePart = _defineComparators3[2];
    return dtA.isBefore(dtB, datePart);
  }
  function gte2(a, b, unit) {
    var _defineComparators4 = defineComparators(a, b, unit), dtA = _defineComparators4[0], dtB = _defineComparators4[1], datePart = _defineComparators4[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function lte2(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit), dtA = _defineComparators5[0], dtB = _defineComparators5[1], datePart = _defineComparators5[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function inRange2(day2, min3, max3, unit) {
    if (unit === void 0) {
      unit = "day";
    }
    var datePart = fixUnit(unit);
    var mDay = moment2(day2);
    var mMin = moment2(min3);
    var mMax = moment2(max3);
    return mDay.isBetween(mMin, mMax, datePart, "[]");
  }
  function min2(dateA, dateB) {
    var dtA = moment2(dateA);
    var dtB = moment2(dateB);
    var minDt = moment2.min(dtA, dtB);
    return minDt.toDate();
  }
  function max2(dateA, dateB) {
    var dtA = moment2(dateA);
    var dtB = moment2(dateB);
    var maxDt = moment2.max(dtA, dtB);
    return maxDt.toDate();
  }
  function merge2(date2, time) {
    if (!date2 && !time)
      return null;
    var tm = moment2(time).format("HH:mm:ss");
    var dt = moment2(date2).startOf("day").format("MM/DD/YYYY");
    return moment2(dt + " " + tm, "MM/DD/YYYY HH:mm:ss").toDate();
  }
  function add2(date2, adder, unit) {
    var datePart = fixUnit(unit);
    return moment2(date2).add(adder, datePart).toDate();
  }
  function range2(start2, end2, unit) {
    if (unit === void 0) {
      unit = "day";
    }
    var datePart = fixUnit(unit);
    var current = moment2(start2).toDate();
    var days = [];
    while (lte2(current, end2)) {
      days.push(current);
      current = add2(current, 1, datePart);
    }
    return days;
  }
  function ceil2(date2, unit) {
    var datePart = fixUnit(unit);
    var floor = startOf2(date2, datePart);
    return eq2(floor, date2) ? floor : add2(floor, 1, datePart);
  }
  function diff2(a, b, unit) {
    if (unit === void 0) {
      unit = "day";
    }
    var datePart = fixUnit(unit);
    var dtA = moment2(a);
    var dtB = moment2(b);
    return dtB.diff(dtA, datePart);
  }
  function minutes2(date2) {
    var dt = moment2(date2);
    return dt.minutes();
  }
  function firstOfWeek(culture) {
    var data = culture ? moment2.localeData(culture) : moment2.localeData();
    return data ? data.firstDayOfWeek() : 0;
  }
  function firstVisibleDay2(date2) {
    return moment2(date2).startOf("month").startOf("week").toDate();
  }
  function lastVisibleDay2(date2) {
    return moment2(date2).endOf("month").endOf("week").toDate();
  }
  function visibleDays2(date2) {
    var current = firstVisibleDay2(date2);
    var last2 = lastVisibleDay2(date2);
    var days = [];
    while (lte2(current, last2)) {
      days.push(current);
      current = add2(current, 1, "d");
    }
    return days;
  }
  function getSlotDate2(dt, minutesFromMidnight, offset2) {
    return moment2(dt).startOf("day").minute(minutesFromMidnight + offset2).toDate();
  }
  function getTotalMin2(start2, end2) {
    return diff2(start2, end2, "minutes");
  }
  function getMinutesFromMidnight2(start2) {
    var dayStart = moment2(start2).startOf("day");
    var day2 = moment2(start2);
    return day2.diff(dayStart, "minutes");
  }
  function continuesPrior2(start2, first) {
    var mStart = moment2(start2);
    var mFirst = moment2(first);
    return mStart.isBefore(mFirst, "day");
  }
  function continuesAfter2(start2, end2, last2) {
    var mEnd = moment2(end2);
    var mLast = moment2(last2);
    return mEnd.isSameOrAfter(mLast, "minutes");
  }
  function sortEvents2(_ref6) {
    var _ref6$evtA = _ref6.evtA, aStart = _ref6$evtA.start, aEnd = _ref6$evtA.end, aAllDay = _ref6$evtA.allDay, _ref6$evtB = _ref6.evtB, bStart = _ref6$evtB.start, bEnd = _ref6$evtB.end, bAllDay = _ref6$evtB.allDay;
    var startSort = +startOf2(aStart, "day") - +startOf2(bStart, "day");
    var durA = diff2(aStart, ceil2(aEnd, "day"), "day");
    var durB = diff2(bStart, ceil2(bEnd, "day"), "day");
    return startSort || Math.max(durB, 1) - Math.max(durA, 1) || !!bAllDay - !!aAllDay || +aStart - +bStart || +aEnd - +bEnd;
  }
  function inEventRange2(_ref7) {
    var _ref7$event = _ref7.event, start2 = _ref7$event.start, end2 = _ref7$event.end, _ref7$range = _ref7.range, rangeStart = _ref7$range.start, rangeEnd = _ref7$range.end;
    var startOfDay = moment2(start2).startOf("day");
    var eEnd = moment2(end2);
    var rStart = moment2(rangeStart);
    var rEnd = moment2(rangeEnd);
    var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, "day");
    var sameMin = !startOfDay.isSame(eEnd, "minutes");
    var endsAfterStart = sameMin ? eEnd.isAfter(rStart, "minutes") : eEnd.isSameOrAfter(rStart, "minutes");
    return startsBeforeEnd && endsAfterStart;
  }
  function isSameDate2(date1, date2) {
    var dt = moment2(date1);
    var dt2 = moment2(date2);
    return dt.isSame(dt2, "date");
  }
  function browserTZOffset() {
    var dt = new Date();
    var neg = /-/.test(dt.toString()) ? "-" : "";
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("" + neg + Math.abs(dtOffset));
    var mtOffset = moment2().utcOffset();
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    formats,
    firstOfWeek,
    firstVisibleDay: firstVisibleDay2,
    lastVisibleDay: lastVisibleDay2,
    visibleDays: visibleDays2,
    format: function format(value, _format2, culture) {
      return locale2(moment2(value), culture).format(_format2);
    },
    lt: lt2,
    lte: lte2,
    gt: gt2,
    gte: gte2,
    eq: eq2,
    neq: neq2,
    merge: merge2,
    inRange: inRange2,
    startOf: startOf2,
    endOf: endOf2,
    range: range2,
    add: add2,
    diff: diff2,
    ceil: ceil2,
    min: min2,
    max: max2,
    minutes: minutes2,
    getSlotDate: getSlotDate2,
    getTotalMin: getTotalMin2,
    getMinutesFromMidnight: getMinutesFromMidnight2,
    continuesPrior: continuesPrior2,
    continuesAfter: continuesAfter2,
    sortEvents: sortEvents2,
    inEventRange: inEventRange2,
    isSameDate: isSameDate2,
    browserTZOffset
  });
}
var dragAndDrop = { exports: {} };
var interopRequireDefault = { exports: {} };
(function(module2) {
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  module2.exports = _interopRequireDefault2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(interopRequireDefault);
var withDragAndDrop$1 = { exports: {} };
var _extends = { exports: {} };
(function(module2) {
  function _extends3() {
    module2.exports = _extends3 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
    return _extends3.apply(this, arguments);
  }
  module2.exports = _extends3, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(_extends);
var objectWithoutPropertiesLoose = { exports: {} };
(function(module2) {
  function _objectWithoutPropertiesLoose3(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  module2.exports = _objectWithoutPropertiesLoose3, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(objectWithoutPropertiesLoose);
var inheritsLoose = { exports: {} };
var setPrototypeOf = { exports: {} };
(function(module2) {
  function _setPrototypeOf2(o, p2) {
    module2.exports = _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
    return _setPrototypeOf2(o, p2);
  }
  module2.exports = _setPrototypeOf2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(setPrototypeOf);
(function(module2) {
  var setPrototypeOf$1 = setPrototypeOf.exports;
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf$1(subClass, superClass);
  }
  module2.exports = _inheritsLoose2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(inheritsLoose);
var require$$6 = /* @__PURE__ */ getAugmentedNamespace(clsx_m);
var constants = {};
constants.__esModule = true;
constants.views = constants.navigate = void 0;
var navigate = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
};
constants.navigate = navigate;
var views = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
};
constants.views = views;
var _interopRequireDefault$5 = interopRequireDefault.exports;
var _propTypes = _interopRequireDefault$5(_propTypes_15_7_2_propTypes.exports);
var _constants = constants;
var viewNames = Object.keys(_constants.views).map(function(k) {
  return _constants.views[k];
});
_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);
_propTypes.default.any;
_propTypes.default.func;
_propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(viewNames)), _propTypes.default.objectOf(function(prop, key) {
  var isBuiltinView = viewNames.indexOf(key) !== -1 && typeof prop[key] === "boolean";
  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return _propTypes.default.elementType.apply(_propTypes.default, [prop, key].concat(args));
  }
})]);
_propTypes.default.oneOfType([_propTypes.default.oneOf(["overlap", "no-overlap"]), _propTypes.default.func]);
var EventWrapper = { exports: {} };
var accessors = {};
accessors.__esModule = true;
accessors.accessor = accessor;
accessors.wrapAccessor = void 0;
function accessor(data, field) {
  var value = null;
  if (typeof field === "function")
    value = field(data);
  else if (typeof field === "string" && typeof data === "object" && data != null && field in data)
    value = data[field];
  return value;
}
var wrapAccessor = function wrapAccessor3(acc) {
  return function(data) {
    return accessor(data, acc);
  };
};
accessors.wrapAccessor = wrapAccessor;
var DnDContext$1 = {};
var _interopRequireDefault$4 = interopRequireDefault.exports;
DnDContext$1.__esModule = true;
DnDContext$1.DnDContext = void 0;
var _react$1 = _interopRequireDefault$4(_react_17_0_2_react.exports);
var DnDContext = /* @__PURE__ */ _react$1.default.createContext();
DnDContext$1.DnDContext = DnDContext;
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = void 0;
  var _inheritsLoose2 = _interopRequireDefault2(inheritsLoose.exports);
  _interopRequireDefault2(_propTypes_15_7_2_propTypes.exports);
  var _react2 = _interopRequireDefault2(_react_17_0_2_react.exports);
  var _clsx = _interopRequireDefault2(require$$6);
  var _accessors2 = accessors;
  var _DnDContext = DnDContext$1;
  var EventWrapper2 = /* @__PURE__ */ function(_React$Component) {
    (0, _inheritsLoose2.default)(EventWrapper3, _React$Component);
    function EventWrapper3() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handleResizeUp = function(e) {
        if (e.button !== 0)
          return;
        _this.context.draggable.onBeginAction(_this.props.event, "resize", "UP");
      };
      _this.handleResizeDown = function(e) {
        if (e.button !== 0)
          return;
        _this.context.draggable.onBeginAction(_this.props.event, "resize", "DOWN");
      };
      _this.handleResizeLeft = function(e) {
        if (e.button !== 0)
          return;
        _this.context.draggable.onBeginAction(_this.props.event, "resize", "LEFT");
      };
      _this.handleResizeRight = function(e) {
        if (e.button !== 0)
          return;
        _this.context.draggable.onBeginAction(_this.props.event, "resize", "RIGHT");
      };
      _this.handleStartDragging = function(e) {
        if (e.button !== 0)
          return;
        var isResizeHandle = e.target.className.includes("rbc-addons-dnd-resize");
        if (!isResizeHandle)
          _this.context.draggable.onBeginAction(_this.props.event, "move");
      };
      return _this;
    }
    var _proto = EventWrapper3.prototype;
    _proto.renderAnchor = function renderAnchor(direction) {
      var cls = direction === "Up" || direction === "Down" ? "ns" : "ew";
      return /* @__PURE__ */ _react2.default.createElement("div", {
        className: "rbc-addons-dnd-resize-" + cls + "-anchor",
        onMouseDown: this["handleResize" + direction]
      }, /* @__PURE__ */ _react2.default.createElement("div", {
        className: "rbc-addons-dnd-resize-" + cls + "-icon"
      }));
    };
    _proto.render = function render() {
      var _this$props = this.props, event = _this$props.event, type = _this$props.type, continuesPrior2 = _this$props.continuesPrior, continuesAfter2 = _this$props.continuesAfter, resizable = _this$props.resizable;
      var children = this.props.children;
      if (event.__isPreview)
        return /* @__PURE__ */ _react2.default.cloneElement(children, {
          className: (0, _clsx.default)(children.props.className, "rbc-addons-dnd-drag-preview")
        });
      var draggable = this.context.draggable;
      var draggableAccessor = draggable.draggableAccessor, resizableAccessor = draggable.resizableAccessor;
      var isDraggable = draggableAccessor ? !!(0, _accessors2.accessor)(event, draggableAccessor) : true;
      if (!isDraggable) {
        return children;
      }
      var isResizable = resizable && (resizableAccessor ? !!(0, _accessors2.accessor)(event, resizableAccessor) : true);
      if (isResizable || isDraggable) {
        var newProps = {
          onMouseDown: this.handleStartDragging,
          onTouchStart: this.handleStartDragging
        };
        if (isResizable) {
          var StartAnchor = null;
          var EndAnchor = null;
          if (type === "date") {
            StartAnchor = !continuesPrior2 && this.renderAnchor("Left");
            EndAnchor = !continuesAfter2 && this.renderAnchor("Right");
          } else {
            StartAnchor = !continuesPrior2 && this.renderAnchor("Up");
            EndAnchor = !continuesAfter2 && this.renderAnchor("Down");
          }
          newProps.children = /* @__PURE__ */ _react2.default.createElement("div", {
            className: "rbc-addons-dnd-resizable"
          }, StartAnchor, children.props.children, EndAnchor);
        }
        if (draggable.dragAndDropAction.interacting && draggable.dragAndDropAction.event === event) {
          newProps.className = (0, _clsx.default)(children.props.className, "rbc-addons-dnd-dragged-event");
        }
        children = /* @__PURE__ */ _react2.default.cloneElement(children, newProps);
      }
      return children;
    };
    return EventWrapper3;
  }(_react2.default.Component);
  EventWrapper2.contextType = _DnDContext.DnDContext;
  EventWrapper2.propTypes = {};
  var _default2 = EventWrapper2;
  exports2.default = _default2;
  module2.exports = exports2.default;
})(EventWrapper, EventWrapper.exports);
var EventContainerWrapper = { exports: {} };
var Selection$1 = {};
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(contains$2);
var require$$2 = /* @__PURE__ */ getAugmentedNamespace(closest$1);
var require$$3 = /* @__PURE__ */ getAugmentedNamespace(listen$1);
var _interopRequireDefault$3 = interopRequireDefault.exports;
Selection$1.__esModule = true;
Selection$1.getEventNodeFromPoint = getEventNodeFromPoint;
Selection$1.isEvent = isEvent;
Selection$1.objectsCollide = objectsCollide;
Selection$1.getBoundsForNode = getBoundsForNode;
Selection$1.default = void 0;
var _contains = _interopRequireDefault$3(require$$1);
var _closest = _interopRequireDefault$3(require$$2);
var _listen = _interopRequireDefault$3(require$$3);
function addEventListener(type, handler, target) {
  if (target === void 0) {
    target = document;
  }
  return (0, _listen.default)(target, type, handler, {
    passive: false
  });
}
function isOverContainer(container, x2, y2) {
  return !container || (0, _contains.default)(container, document.elementFromPoint(x2, y2));
}
function getEventNodeFromPoint(node, _ref) {
  var clientX = _ref.clientX, clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return (0, _closest.default)(target, ".rbc-event", node);
}
function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}
function getEventCoordinates(e) {
  var target = e;
  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }
  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}
var clickTolerance = 5;
var clickInterval = 250;
var Selection = /* @__PURE__ */ function() {
  function Selection2(node, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp, _ref2$global = _ref2.global, global2 = _ref2$global === void 0 ? false : _ref2$global, _ref2$longPressThresh = _ref2.longPressThreshold, longPressThreshold = _ref2$longPressThresh === void 0 ? 250 : _ref2$longPressThresh;
    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global2;
    this.longPressThreshold = longPressThreshold;
    this._listeners = Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);
    this._removeTouchMoveWindowListener = addEventListener("touchmove", function() {
    }, window);
    this._removeKeyDownListener = addEventListener("keydown", this._keyListener);
    this._removeKeyUpListener = addEventListener("keyup", this._keyListener);
    this._removeDropFromOutsideListener = addEventListener("drop", this._dropFromOutsideListener);
    this._removeDragOverFromOutsideListener = addEventListener("dragover", this._dragOverFromOutsideListener);
    this._addInitialEventListener();
  }
  var _proto = Selection2.prototype;
  _proto.on = function on(type, handler) {
    var handlers = this._listeners[type] || (this._listeners[type] = []);
    handlers.push(handler);
    return {
      remove: function remove() {
        var idx = handlers.indexOf(handler);
        if (idx !== -1)
          handlers.splice(idx, 1);
      }
    };
  };
  _proto.emit = function emit(type) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var result;
    var handlers = this._listeners[type] || [];
    handlers.forEach(function(fn3) {
      if (result === void 0)
        result = fn3.apply(void 0, args);
    });
    return result;
  };
  _proto.teardown = function teardown() {
    this.isDetached = true;
    this._listeners = Object.create(null);
    this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
    this._removeInitialEventListener && this._removeInitialEventListener();
    this._removeEndListener && this._removeEndListener();
    this._onEscListener && this._onEscListener();
    this._removeMoveListener && this._removeMoveListener();
    this._removeKeyUpListener && this._removeKeyUpListener();
    this._removeKeyDownListener && this._removeKeyDownListener();
    this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
    this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
  };
  _proto.isSelected = function isSelected2(node) {
    var box = this._selectRect;
    if (!box || !this.selecting)
      return false;
    return objectsCollide(box, getBoundsForNode(node));
  };
  _proto.filter = function filter(items) {
    var box = this._selectRect;
    if (!box || !this.selecting)
      return [];
    return items.filter(this.isSelected, this);
  };
  _proto._addLongPressListener = function _addLongPressListener(handler, initialEvent) {
    var _this = this;
    var timer = null;
    var removeTouchMoveListener = null;
    var removeTouchEndListener = null;
    var handleTouchStart = function handleTouchStart2(initialEvent2) {
      timer = setTimeout(function() {
        cleanup();
        handler(initialEvent2);
      }, _this.longPressThreshold);
      removeTouchMoveListener = addEventListener("touchmove", function() {
        return cleanup();
      });
      removeTouchEndListener = addEventListener("touchend", function() {
        return cleanup();
      });
    };
    var removeTouchStartListener = addEventListener("touchstart", handleTouchStart);
    var cleanup = function cleanup2() {
      if (timer) {
        clearTimeout(timer);
      }
      if (removeTouchMoveListener) {
        removeTouchMoveListener();
      }
      if (removeTouchEndListener) {
        removeTouchEndListener();
      }
      timer = null;
      removeTouchMoveListener = null;
      removeTouchEndListener = null;
    };
    if (initialEvent) {
      handleTouchStart(initialEvent);
    }
    return function() {
      cleanup();
      removeTouchStartListener();
    };
  };
  _proto._addInitialEventListener = function _addInitialEventListener() {
    var _this2 = this;
    var removeMouseDownListener = addEventListener("mousedown", function(e) {
      _this2._removeInitialEventListener();
      _this2._handleInitialEvent(e);
      _this2._removeInitialEventListener = addEventListener("mousedown", _this2._handleInitialEvent);
    });
    var removeTouchStartListener = addEventListener("touchstart", function(e) {
      _this2._removeInitialEventListener();
      _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
    });
    this._removeInitialEventListener = function() {
      removeMouseDownListener();
      removeTouchStartListener();
    };
  };
  _proto._dropFromOutsideListener = function _dropFromOutsideListener(e) {
    var _getEventCoordinates = getEventCoordinates(e), pageX = _getEventCoordinates.pageX, pageY = _getEventCoordinates.pageY, clientX = _getEventCoordinates.clientX, clientY = _getEventCoordinates.clientY;
    this.emit("dropFromOutside", {
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
    e.preventDefault();
  };
  _proto._dragOverFromOutsideListener = function _dragOverFromOutsideListener(e) {
    var _getEventCoordinates2 = getEventCoordinates(e), pageX = _getEventCoordinates2.pageX, pageY = _getEventCoordinates2.pageY, clientX = _getEventCoordinates2.clientX, clientY = _getEventCoordinates2.clientY;
    this.emit("dragOverFromOutside", {
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
    e.preventDefault();
  };
  _proto._handleInitialEvent = function _handleInitialEvent(e) {
    if (this.isDetached) {
      return;
    }
    var _getEventCoordinates3 = getEventCoordinates(e), clientX = _getEventCoordinates3.clientX, clientY = _getEventCoordinates3.clientY, pageX = _getEventCoordinates3.pageX, pageY = _getEventCoordinates3.pageY;
    var node = this.container(), collides, offsetData;
    if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY))
      return;
    if (!this.globalMouse && node && !(0, _contains.default)(node, e.target)) {
      var _normalizeDistance = normalizeDistance(0), top2 = _normalizeDistance.top, left2 = _normalizeDistance.left, bottom2 = _normalizeDistance.bottom, right2 = _normalizeDistance.right;
      offsetData = getBoundsForNode(node);
      collides = objectsCollide({
        top: offsetData.top - top2,
        left: offsetData.left - left2,
        bottom: offsetData.bottom + bottom2,
        right: offsetData.right + right2
      }, {
        top: pageY,
        left: pageX
      });
      if (!collides)
        return;
    }
    var result = this.emit("beforeSelect", this._initialEventData = {
      isTouch: /^touch/.test(e.type),
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
    if (result === false)
      return;
    switch (e.type) {
      case "mousedown":
        this._removeEndListener = addEventListener("mouseup", this._handleTerminatingEvent);
        this._onEscListener = addEventListener("keydown", this._handleTerminatingEvent);
        this._removeMoveListener = addEventListener("mousemove", this._handleMoveEvent);
        break;
      case "touchstart":
        this._handleMoveEvent(e);
        this._removeEndListener = addEventListener("touchend", this._handleTerminatingEvent);
        this._removeMoveListener = addEventListener("touchmove", this._handleMoveEvent);
        break;
    }
  };
  _proto._handleTerminatingEvent = function _handleTerminatingEvent(e) {
    var _getEventCoordinates4 = getEventCoordinates(e), pageX = _getEventCoordinates4.pageX, pageY = _getEventCoordinates4.pageY;
    this.selecting = false;
    this._removeEndListener && this._removeEndListener();
    this._removeMoveListener && this._removeMoveListener();
    if (!this._initialEventData)
      return;
    var inRoot = !this.container || (0, _contains.default)(this.container(), e.target);
    var bounds = this._selectRect;
    var click = this.isClick(pageX, pageY);
    this._initialEventData = null;
    if (e.key === "Escape") {
      return this.emit("reset");
    }
    if (!inRoot) {
      return this.emit("reset");
    }
    if (click && inRoot) {
      return this._handleClickEvent(e);
    }
    if (!click)
      return this.emit("select", bounds);
  };
  _proto._handleClickEvent = function _handleClickEvent(e) {
    var _getEventCoordinates5 = getEventCoordinates(e), pageX = _getEventCoordinates5.pageX, pageY = _getEventCoordinates5.pageY, clientX = _getEventCoordinates5.clientX, clientY = _getEventCoordinates5.clientY;
    var now = new Date().getTime();
    if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
      this._lastClickData = null;
      return this.emit("doubleClick", {
        x: pageX,
        y: pageY,
        clientX,
        clientY
      });
    }
    this._lastClickData = {
      timestamp: now
    };
    return this.emit("click", {
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
  };
  _proto._handleMoveEvent = function _handleMoveEvent(e) {
    if (this._initialEventData === null || this.isDetached) {
      return;
    }
    var _this$_initialEventDa = this._initialEventData, x2 = _this$_initialEventDa.x, y2 = _this$_initialEventDa.y;
    var _getEventCoordinates6 = getEventCoordinates(e), pageX = _getEventCoordinates6.pageX, pageY = _getEventCoordinates6.pageY;
    var w2 = Math.abs(x2 - pageX);
    var h2 = Math.abs(y2 - pageY);
    var left2 = Math.min(pageX, x2), top2 = Math.min(pageY, y2), old = this.selecting;
    if (this.isClick(pageX, pageY) && !old && !(w2 || h2)) {
      return;
    }
    this.selecting = true;
    this._selectRect = {
      top: top2,
      left: left2,
      x: pageX,
      y: pageY,
      right: left2 + w2,
      bottom: top2 + h2
    };
    if (!old) {
      this.emit("selectStart", this._initialEventData);
    }
    if (!this.isClick(pageX, pageY))
      this.emit("selecting", this._selectRect);
    e.preventDefault();
  };
  _proto._keyListener = function _keyListener(e) {
    this.ctrl = e.metaKey || e.ctrlKey;
  };
  _proto.isClick = function isClick(pageX, pageY) {
    var _this$_initialEventDa2 = this._initialEventData, x2 = _this$_initialEventDa2.x, y2 = _this$_initialEventDa2.y, isTouch = _this$_initialEventDa2.isTouch;
    return !isTouch && Math.abs(pageX - x2) <= clickTolerance && Math.abs(pageY - y2) <= clickTolerance;
  };
  return Selection2;
}();
function normalizeDistance(distance) {
  if (distance === void 0) {
    distance = 0;
  }
  if (typeof distance !== "object")
    distance = {
      top: distance,
      left: distance,
      right: distance,
      bottom: distance
    };
  return distance;
}
function objectsCollide(nodeA, nodeB, tolerance) {
  if (tolerance === void 0) {
    tolerance = 0;
  }
  var _getBoundsForNode = getBoundsForNode(nodeA), aTop = _getBoundsForNode.top, aLeft = _getBoundsForNode.left, _getBoundsForNode$rig = _getBoundsForNode.right, aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig, _getBoundsForNode$bot = _getBoundsForNode.bottom, aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
  var _getBoundsForNode2 = getBoundsForNode(nodeB), bTop = _getBoundsForNode2.top, bLeft = _getBoundsForNode2.left, _getBoundsForNode2$ri = _getBoundsForNode2.right, bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri, _getBoundsForNode2$bo = _getBoundsForNode2.bottom, bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
  return !(aBottom - tolerance < bTop || aTop + tolerance > bBottom || aRight - tolerance < bLeft || aLeft + tolerance > bRight);
}
function getBoundsForNode(node) {
  if (!node.getBoundingClientRect)
    return node;
  var rect = node.getBoundingClientRect(), left2 = rect.left + pageOffset("left"), top2 = rect.top + pageOffset("top");
  return {
    top: top2,
    left: left2,
    right: (node.offsetWidth || 0) + left2,
    bottom: (node.offsetHeight || 0) + top2
  };
}
function pageOffset(dir) {
  if (dir === "left")
    return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === "top")
    return window.pageYOffset || document.body.scrollTop || 0;
}
var _default = Selection;
Selection$1.default = _default;
var TimeGridEvent = { exports: {} };
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = void 0;
  var _extends4 = _interopRequireDefault2(_extends.exports);
  var _clsx = _interopRequireDefault2(require$$6);
  var _react2 = _interopRequireDefault2(_react_17_0_2_react.exports);
  function stringifyPercent2(v2) {
    return typeof v2 === "string" ? v2 : v2 + "%";
  }
  function TimeGridEvent2(props) {
    var _extends22, _extends3;
    var style2 = props.style, className = props.className, event = props.event, accessors2 = props.accessors, rtl = props.rtl, selected = props.selected, label = props.label, continuesEarlier = props.continuesEarlier, continuesLater = props.continuesLater, getters = props.getters, onClick = props.onClick, onDoubleClick = props.onDoubleClick, isBackgroundEvent = props.isBackgroundEvent, onKeyPress = props.onKeyPress, _props$components = props.components, Event2 = _props$components.event, EventWrapper2 = _props$components.eventWrapper;
    var title = accessors2.title(event);
    var tooltip = accessors2.tooltip(event);
    var end2 = accessors2.end(event);
    var start2 = accessors2.start(event);
    var userProps = getters.eventProp(event, start2, end2, selected);
    var height2 = style2.height, top2 = style2.top, width = style2.width, xOffset = style2.xOffset;
    var inner = [/* @__PURE__ */ _react2.default.createElement("div", {
      key: "1",
      className: "rbc-event-label"
    }, label), /* @__PURE__ */ _react2.default.createElement("div", {
      key: "2",
      className: "rbc-event-content"
    }, Event2 ? /* @__PURE__ */ _react2.default.createElement(Event2, {
      event,
      title
    }) : title)];
    var eventStyle = isBackgroundEvent ? (0, _extends4.default)({}, userProps.style, (_extends22 = {
      top: stringifyPercent2(top2),
      height: stringifyPercent2(height2),
      width: "calc(" + width + " + 10px)"
    }, _extends22[rtl ? "right" : "left"] = stringifyPercent2(Math.max(0, xOffset)), _extends22)) : (0, _extends4.default)({}, userProps.style, (_extends3 = {
      top: stringifyPercent2(top2),
      width: stringifyPercent2(width),
      height: stringifyPercent2(height2)
    }, _extends3[rtl ? "right" : "left"] = stringifyPercent2(xOffset), _extends3));
    return /* @__PURE__ */ _react2.default.createElement(EventWrapper2, (0, _extends4.default)({
      type: "time"
    }, props), /* @__PURE__ */ _react2.default.createElement("div", {
      onClick,
      onDoubleClick,
      style: eventStyle,
      onKeyPress,
      title: tooltip ? (typeof label === "string" ? label + ": " : "") + tooltip : void 0,
      className: (0, _clsx.default)(isBackgroundEvent ? "rbc-background-event" : "rbc-event", className, userProps.className, {
        "rbc-selected": selected,
        "rbc-event-continues-earlier": continuesEarlier,
        "rbc-event-continues-later": continuesLater
      })
    }, inner));
  }
  var _default2 = TimeGridEvent2;
  exports2.default = _default2;
  module2.exports = exports2.default;
})(TimeGridEvent, TimeGridEvent.exports);
var common = {};
var _interopRequireDefault$2 = interopRequireDefault.exports;
common.__esModule = true;
common.mergeComponents = mergeComponents;
common.pointInColumn = pointInColumn;
common.eventTimes = eventTimes;
common.dragAccessors = void 0;
var _extends2 = _interopRequireDefault$2(_extends.exports);
var _objectWithoutPropertiesLoose2 = _interopRequireDefault$2(objectWithoutPropertiesLoose.exports);
var _accessors = accessors;
var _react = _react_17_0_2_react.exports;
var _excluded = ["children"];
var dragAccessors = {
  start: (0, _accessors.wrapAccessor)(function(e) {
    return e.start;
  }),
  end: (0, _accessors.wrapAccessor)(function(e) {
    return e.end;
  })
};
common.dragAccessors = dragAccessors;
function nest() {
  for (var _len = arguments.length, Components = new Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }
  var factories = Components.filter(Boolean).map(_react.createFactory);
  var Nest = function Nest2(_ref) {
    var children = _ref.children, props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
    return factories.reduceRight(function(child, factory) {
      return factory(props, child);
    }, children);
  };
  return Nest;
}
function mergeComponents(components, addons) {
  if (components === void 0) {
    components = {};
  }
  var keys2 = Object.keys(addons);
  var result = (0, _extends2.default)({}, components);
  keys2.forEach(function(key) {
    result[key] = components[key] ? nest(components[key], addons[key]) : addons[key];
  });
  return result;
}
function pointInColumn(bounds, point) {
  var left2 = bounds.left, right2 = bounds.right, top2 = bounds.top;
  var x2 = point.x, y2 = point.y;
  return x2 < right2 + 10 && x2 > left2 && y2 > top2;
}
function eventTimes(event, accessors2, localizer) {
  var start2 = accessors2.start(event);
  var end2 = accessors2.end(event);
  var isZeroDuration = localizer.eq(start2, end2, "minutes") && localizer.diff(start2, end2, "minutes") === 0;
  if (isZeroDuration)
    end2 = localizer.add(end2, 1, "day");
  var duration = localizer.diff(start2, end2, "milliseconds");
  return {
    start: start2,
    end: end2,
    duration
  };
}
var NoopWrapper = { exports: {} };
(function(module2, exports2) {
  exports2.__esModule = true;
  exports2.default = void 0;
  function NoopWrapper2(props) {
    return props.children;
  }
  var _default2 = NoopWrapper2;
  exports2.default = _default2;
  module2.exports = exports2.default;
})(NoopWrapper, NoopWrapper.exports);
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = void 0;
  var _extends22 = _interopRequireDefault2(_extends.exports);
  var _inheritsLoose2 = _interopRequireDefault2(inheritsLoose.exports);
  _interopRequireDefault2(_propTypes_15_7_2_propTypes.exports);
  var _react2 = _interopRequireDefault2(_react_17_0_2_react.exports);
  var _DnDContext = DnDContext$1;
  var _Selection = _interopRequireWildcard(Selection$1);
  var _TimeGridEvent = _interopRequireDefault2(TimeGridEvent.exports);
  var _common = common;
  var _NoopWrapper = _interopRequireDefault2(NoopWrapper.exports);
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var EventContainerWrapper2 = /* @__PURE__ */ function(_React$Component) {
    (0, _inheritsLoose2.default)(EventContainerWrapper3, _React$Component);
    function EventContainerWrapper3() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handleMove = function(point, bounds) {
        if (!(0, _common.pointInColumn)(bounds, point))
          return _this.reset();
        var event = _this.context.draggable.dragAndDropAction.event;
        var _this$props = _this.props, accessors2 = _this$props.accessors, slotMetrics = _this$props.slotMetrics;
        var newSlot = slotMetrics.closestSlotFromPoint({
          y: point.y - _this.eventOffsetTop,
          x: point.x
        }, bounds);
        var _eventTimes = (0, _common.eventTimes)(event, accessors2, _this.props.localizer), duration = _eventTimes.duration;
        var newEnd = _this.props.localizer.add(newSlot, duration, "milliseconds");
        _this.update(event, slotMetrics.getRange(newSlot, newEnd, false, true));
      };
      _this.handleDropFromOutside = function(point, boundaryBox) {
        var _this$props2 = _this.props, slotMetrics = _this$props2.slotMetrics, resource = _this$props2.resource;
        var start2 = slotMetrics.closestSlotFromPoint({
          y: point.y,
          x: point.x
        }, boundaryBox);
        _this.context.draggable.onDropFromOutside({
          start: start2,
          end: slotMetrics.nextSlot(start2),
          allDay: false,
          resource
        });
      };
      _this._selectable = function() {
        var wrapper = _this.ref.current;
        var node = wrapper.children[0];
        var isBeingDragged = false;
        var selector = _this._selector = new _Selection.default(function() {
          return wrapper.closest(".rbc-time-view");
        });
        selector.on("beforeSelect", function(point) {
          var dragAndDropAction = _this.context.draggable.dragAndDropAction;
          if (!dragAndDropAction.action)
            return false;
          if (dragAndDropAction.action === "resize") {
            return (0, _common.pointInColumn)((0, _Selection.getBoundsForNode)(node), point);
          }
          var eventNode = (0, _Selection.getEventNodeFromPoint)(node, point);
          if (!eventNode)
            return false;
          _this.eventOffsetTop = point.y - (0, _Selection.getBoundsForNode)(eventNode).top;
        });
        selector.on("selecting", function(box) {
          var bounds = (0, _Selection.getBoundsForNode)(node);
          var dragAndDropAction = _this.context.draggable.dragAndDropAction;
          if (dragAndDropAction.action === "move")
            _this.handleMove(box, bounds);
          if (dragAndDropAction.action === "resize")
            _this.handleResize(box, bounds);
        });
        selector.on("dropFromOutside", function(point) {
          if (!_this.context.draggable.onDropFromOutside)
            return;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          if (!(0, _common.pointInColumn)(bounds, point))
            return;
          _this.handleDropFromOutside(point, bounds);
        });
        selector.on("dragOver", function(point) {
          if (!_this.context.draggable.dragFromOutsideItem)
            return;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          _this.handleDropFromOutside(point, bounds);
        });
        selector.on("selectStart", function() {
          isBeingDragged = true;
          _this.context.draggable.onStart();
        });
        selector.on("select", function(point) {
          var bounds = (0, _Selection.getBoundsForNode)(node);
          isBeingDragged = false;
          if (!_this.state.event || !(0, _common.pointInColumn)(bounds, point))
            return;
          _this.handleInteractionEnd();
        });
        selector.on("click", function() {
          if (isBeingDragged)
            _this.reset();
          _this.context.draggable.onEnd(null);
        });
        selector.on("reset", function() {
          _this.reset();
          _this.context.draggable.onEnd(null);
        });
      };
      _this.handleInteractionEnd = function() {
        var resource = _this.props.resource;
        var event = _this.state.event;
        _this.reset();
        _this.context.draggable.onEnd({
          start: event.start,
          end: event.end,
          resourceId: resource
        });
      };
      _this._teardownSelectable = function() {
        if (!_this._selector)
          return;
        _this._selector.teardown();
        _this._selector = null;
      };
      _this.state = {};
      _this.ref = /* @__PURE__ */ _react2.default.createRef();
      return _this;
    }
    var _proto = EventContainerWrapper3.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this._selectable();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this._teardownSelectable();
    };
    _proto.reset = function reset() {
      if (this.state.event)
        this.setState({
          event: null,
          top: null,
          height: null
        });
    };
    _proto.update = function update(event, _ref) {
      var startDate = _ref.startDate, endDate = _ref.endDate, top2 = _ref.top, height2 = _ref.height;
      var lastEvent = this.state.event;
      if (lastEvent && startDate === lastEvent.start && endDate === lastEvent.end) {
        return;
      }
      this.setState({
        top: top2,
        height: height2,
        event: (0, _extends22.default)({}, event, {
          start: startDate,
          end: endDate
        })
      });
    };
    _proto.handleResize = function handleResize(point, bounds) {
      var _this$props3 = this.props, accessors2 = _this$props3.accessors, slotMetrics = _this$props3.slotMetrics, localizer = _this$props3.localizer;
      var _this$context$draggab = this.context.draggable.dragAndDropAction, event = _this$context$draggab.event, direction = _this$context$draggab.direction;
      var newTime = slotMetrics.closestSlotFromPoint(point, bounds);
      var _eventTimes2 = (0, _common.eventTimes)(event, accessors2, localizer), start2 = _eventTimes2.start, end2 = _eventTimes2.end;
      if (direction === "UP") {
        start2 = localizer.min(newTime, slotMetrics.closestSlotFromDate(end2, -1));
      } else if (direction === "DOWN") {
        end2 = localizer.max(newTime, slotMetrics.closestSlotFromDate(start2));
      }
      this.update(event, slotMetrics.getRange(start2, end2));
    };
    _proto.renderContent = function renderContent() {
      var _this$props4 = this.props, children = _this$props4.children, accessors2 = _this$props4.accessors, components = _this$props4.components, getters = _this$props4.getters, slotMetrics = _this$props4.slotMetrics, localizer = _this$props4.localizer;
      var _this$state = this.state, event = _this$state.event, top2 = _this$state.top, height2 = _this$state.height;
      if (!event)
        return children;
      var events = children.props.children;
      var start2 = event.start, end2 = event.end;
      var label;
      var format = "eventTimeRangeFormat";
      var startsBeforeDay = slotMetrics.startsBeforeDay(start2);
      var startsAfterDay = slotMetrics.startsAfterDay(end2);
      if (startsBeforeDay)
        format = "eventTimeRangeEndFormat";
      else if (startsAfterDay)
        format = "eventTimeRangeStartFormat";
      if (startsBeforeDay && startsAfterDay)
        label = localizer.messages.allDay;
      else
        label = localizer.format({
          start: start2,
          end: end2
        }, format);
      return /* @__PURE__ */ _react2.default.cloneElement(children, {
        children: /* @__PURE__ */ _react2.default.createElement(_react2.default.Fragment, null, events, event && /* @__PURE__ */ _react2.default.createElement(_TimeGridEvent.default, {
          event,
          label,
          className: "rbc-addons-dnd-drag-preview",
          style: {
            top: top2,
            height: height2,
            width: 100
          },
          getters,
          components: (0, _extends22.default)({}, components, {
            eventWrapper: _NoopWrapper.default
          }),
          accessors: (0, _extends22.default)({}, accessors2, _common.dragAccessors),
          continuesEarlier: startsBeforeDay,
          continuesLater: startsAfterDay
        }))
      });
    };
    _proto.render = function render() {
      return /* @__PURE__ */ _react2.default.createElement("div", {
        ref: this.ref
      }, this.renderContent());
    };
    return EventContainerWrapper3;
  }(_react2.default.Component);
  EventContainerWrapper2.contextType = _DnDContext.DnDContext;
  EventContainerWrapper2.propTypes = {};
  var _default2 = EventContainerWrapper2;
  exports2.default = _default2;
  module2.exports = exports2.default;
})(EventContainerWrapper, EventContainerWrapper.exports);
var WeekWrapper = { exports: {} };
var EventRow = { exports: {} };
var EventRowMixin = { exports: {} };
var EventCell = { exports: {} };
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = void 0;
  var _extends22 = _interopRequireDefault2(_extends.exports);
  var _objectWithoutPropertiesLoose22 = _interopRequireDefault2(objectWithoutPropertiesLoose.exports);
  var _inheritsLoose2 = _interopRequireDefault2(inheritsLoose.exports);
  _interopRequireDefault2(_propTypes_15_7_2_propTypes.exports);
  var _react2 = _interopRequireDefault2(_react_17_0_2_react.exports);
  var _clsx = _interopRequireDefault2(require$$6);
  var _excluded3 = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
  var EventCell2 = /* @__PURE__ */ function(_React$Component) {
    (0, _inheritsLoose2.default)(EventCell3, _React$Component);
    function EventCell3() {
      return _React$Component.apply(this, arguments) || this;
    }
    var _proto = EventCell3.prototype;
    _proto.render = function render() {
      var _this$props = this.props, style2 = _this$props.style, className = _this$props.className, event = _this$props.event, selected = _this$props.selected, isAllDay = _this$props.isAllDay, onSelect = _this$props.onSelect, _onDoubleClick = _this$props.onDoubleClick, _onKeyPress = _this$props.onKeyPress, localizer = _this$props.localizer, continuesPrior2 = _this$props.continuesPrior, continuesAfter2 = _this$props.continuesAfter, accessors2 = _this$props.accessors, getters = _this$props.getters, children = _this$props.children, _this$props$component = _this$props.components, Event2 = _this$props$component.event, EventWrapper2 = _this$props$component.eventWrapper, slotStart = _this$props.slotStart, slotEnd = _this$props.slotEnd, props = (0, _objectWithoutPropertiesLoose22.default)(_this$props, _excluded3);
      delete props.resizable;
      var title = accessors2.title(event);
      var tooltip = accessors2.tooltip(event);
      var end2 = accessors2.end(event);
      var start2 = accessors2.start(event);
      var allDay = accessors2.allDay(event);
      var showAsAllDay = isAllDay || allDay || localizer.diff(start2, localizer.ceil(end2, "day"), "day") > 1;
      var userProps = getters.eventProp(event, start2, end2, selected);
      var content = /* @__PURE__ */ _react2.default.createElement("div", {
        className: "rbc-event-content",
        title: tooltip || void 0
      }, Event2 ? /* @__PURE__ */ _react2.default.createElement(Event2, {
        event,
        continuesPrior: continuesPrior2,
        continuesAfter: continuesAfter2,
        title,
        isAllDay: allDay,
        localizer,
        slotStart,
        slotEnd
      }) : title);
      return /* @__PURE__ */ _react2.default.createElement(EventWrapper2, (0, _extends22.default)({}, this.props, {
        type: "date"
      }), /* @__PURE__ */ _react2.default.createElement("div", (0, _extends22.default)({}, props, {
        tabIndex: 0,
        style: (0, _extends22.default)({}, userProps.style, style2),
        className: (0, _clsx.default)("rbc-event", className, userProps.className, {
          "rbc-selected": selected,
          "rbc-event-allday": showAsAllDay,
          "rbc-event-continues-prior": continuesPrior2,
          "rbc-event-continues-after": continuesAfter2
        }),
        onClick: function onClick(e) {
          return onSelect && onSelect(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return _onDoubleClick && _onDoubleClick(event, e);
        },
        onKeyPress: function onKeyPress(e) {
          return _onKeyPress && _onKeyPress(event, e);
        }
      }), typeof children === "function" ? children(content) : content));
    };
    return EventCell3;
  }(_react2.default.Component);
  EventCell2.propTypes = {};
  var _default2 = EventCell2;
  exports2.default = _default2;
  module2.exports = exports2.default;
})(EventCell, EventCell.exports);
var selection = {};
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObject$4(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$4;
var baseGetTag$4 = _baseGetTag, isObject$3 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$3(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$2 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$6(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$6;
var getNative$5 = _getNative, root$5 = _root;
var Map$4 = getNative$5(root$5, "Map");
var _Map = Map$4;
var getNative$4 = _getNative;
var nativeCreate$4 = getNative$4(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size2 = data.size;
  data.set(key, value);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$2 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache$1 = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$1 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$1;
function mapToArray$1(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$2 = _Symbol, Uint8Array = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$1;
var isArray$8 = Array.isArray;
var isArray_1 = isArray$8;
var arrayPush = _arrayPush, isArray$7 = isArray_1;
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$7(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$6 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;
function baseTimes$1(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$3 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$3(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$3 = isObjectLike_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module2, exports2) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer2 = moduleExports2 ? root2.Buffer : void 0;
  var nativeIsBuffer2 = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer2 || stubFalse2;
  module2.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var baseGetTag$2 = _baseGetTag, isLength$2 = isLength_1, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength$2(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module2, exports2) {
  var freeGlobal2 = _freeGlobal;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess2 = moduleExports2 && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
    } catch (e) {
    }
  }();
  module2.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$6 = isArray_1, isBuffer$1 = isBuffer$2.exports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$6(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$3 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$3;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function overArg$1(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction$1 = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$2(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$2;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$2 = getNative$1(root$1, "Set");
var _Set = Set$2;
var getNative = _getNative, root = _root;
var WeakMap$2 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$2;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$1 = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag$1 = baseGetTag$1;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1()) != setTag || WeakMap$1 && getTag$1(new WeakMap$1()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$5 = isArray_1, isBuffer = isBuffer$2.exports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$5(object), othIsArr = isArray$5(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$1 = isObjectLike_1;
function baseIsEqual$3(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$1(value) && !isObjectLike$1(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$3, stack);
}
var _baseIsEqual = baseIsEqual$3;
var baseIsEqual$2 = _baseIsEqual;
function isEqual(value, other) {
  return baseIsEqual$2(value, other);
}
var isEqual_1 = isEqual;
var _interopRequireDefault$1 = interopRequireDefault.exports;
selection.__esModule = true;
selection.isSelected = isSelected;
selection.slotWidth = slotWidth;
selection.getSlotAtX = getSlotAtX;
selection.pointInBox = pointInBox;
selection.dateCellSelection = dateCellSelection;
var _isEqual = _interopRequireDefault$1(isEqual_1);
function isSelected(event, selected) {
  if (!event || selected == null)
    return false;
  return (0, _isEqual.default)(event, selected);
}
function slotWidth(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX(rowBox, x2, rtl, slots) {
  var cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x2 - rowBox.left) / cellWidth) : Math.floor((x2 - rowBox.left) / cellWidth);
}
function pointInBox(box, _ref) {
  var x2 = _ref.x, y2 = _ref.y;
  return y2 >= box.top && y2 <= box.bottom && x2 >= box.left && x2 <= box.right;
}
function dateCellSelection(start2, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth(rowBox, slots);
  var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots);
  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start2.y && rowBox.bottom > start2.y;
  var isAboveStart = start2.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start2.y;
  var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom;
  if (isBetween) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }
  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }
  if (isStartRow) {
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start2.x - rowBox.left) / cellWidth) : Math.floor((start2.x - rowBox.left) / cellWidth);
    if (isCurrentRow) {
      if (currentSlot < startIdx)
        startIdx = currentSlot;
      else
        endIdx = currentSlot;
    } else if (start2.y < box.y) {
      endIdx = lastSlotIdx;
    } else {
      startIdx = 0;
    }
  }
  return {
    startIdx,
    endIdx
  };
}
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = void 0;
  var _propTypes2 = _interopRequireDefault2(_propTypes_15_7_2_propTypes.exports);
  var _react2 = _interopRequireDefault2(_react_17_0_2_react.exports);
  var _EventCell = _interopRequireDefault2(EventCell.exports);
  var _selection = selection;
  var _default2 = {
    propTypes: {
      slotMetrics: _propTypes2.default.object.isRequired,
      selected: _propTypes2.default.object,
      isAllDay: _propTypes2.default.bool,
      accessors: _propTypes2.default.object.isRequired,
      localizer: _propTypes2.default.object.isRequired,
      components: _propTypes2.default.object.isRequired,
      getters: _propTypes2.default.object.isRequired,
      onSelect: _propTypes2.default.func,
      onDoubleClick: _propTypes2.default.func,
      onKeyPress: _propTypes2.default.func
    },
    defaultProps: {
      segments: [],
      selected: {}
    },
    renderEvent: function renderEvent2(props, event) {
      var selected = props.selected;
      props.isAllDay;
      var accessors2 = props.accessors, getters = props.getters, onSelect = props.onSelect, onDoubleClick = props.onDoubleClick, onKeyPress = props.onKeyPress, localizer = props.localizer, slotMetrics = props.slotMetrics, components = props.components, resizable = props.resizable;
      var continuesPrior2 = slotMetrics.continuesPrior(event);
      var continuesAfter2 = slotMetrics.continuesAfter(event);
      return /* @__PURE__ */ _react2.default.createElement(_EventCell.default, {
        event,
        getters,
        localizer,
        accessors: accessors2,
        components,
        onSelect,
        onDoubleClick,
        onKeyPress,
        continuesPrior: continuesPrior2,
        continuesAfter: continuesAfter2,
        slotStart: slotMetrics.first,
        slotEnd: slotMetrics.last,
        selected: (0, _selection.isSelected)(event, selected),
        resizable
      });
    },
    renderSpan: function renderSpan2(slots, len, key, content) {
      if (content === void 0) {
        content = " ";
      }
      var per = Math.abs(len) / slots * 100 + "%";
      return /* @__PURE__ */ _react2.default.createElement("div", {
        key,
        className: "rbc-row-segment",
        style: {
          WebkitFlexBasis: per,
          flexBasis: per,
          maxWidth: per
        }
      }, content);
    }
  };
  exports2.default = _default2;
  module2.exports = exports2.default;
})(EventRowMixin, EventRowMixin.exports);
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = void 0;
  var _extends22 = _interopRequireDefault2(_extends.exports);
  var _inheritsLoose2 = _interopRequireDefault2(inheritsLoose.exports);
  _interopRequireDefault2(_propTypes_15_7_2_propTypes.exports);
  var _clsx = _interopRequireDefault2(require$$6);
  var _react2 = _interopRequireDefault2(_react_17_0_2_react.exports);
  var _EventRowMixin = _interopRequireDefault2(EventRowMixin.exports);
  var EventRow2 = /* @__PURE__ */ function(_React$Component) {
    (0, _inheritsLoose2.default)(EventRow3, _React$Component);
    function EventRow3() {
      return _React$Component.apply(this, arguments) || this;
    }
    var _proto = EventRow3.prototype;
    _proto.render = function render() {
      var _this = this;
      var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots, className = _this$props.className;
      var lastEnd = 1;
      return /* @__PURE__ */ _react2.default.createElement("div", {
        className: (0, _clsx.default)(className, "rbc-row")
      }, segments.reduce(function(row, _ref, li2) {
        var event = _ref.event, left2 = _ref.left, right2 = _ref.right, span = _ref.span;
        var key = "_lvl_" + li2;
        var gap = left2 - lastEnd;
        var content = _EventRowMixin.default.renderEvent(_this.props, event);
        if (gap)
          row.push(_EventRowMixin.default.renderSpan(slots, gap, key + "_gap"));
        row.push(_EventRowMixin.default.renderSpan(slots, span, key, content));
        lastEnd = right2 + 1;
        return row;
      }, []));
    };
    return EventRow3;
  }(_react2.default.Component);
  EventRow2.propTypes = {};
  EventRow2.defaultProps = (0, _extends22.default)({}, _EventRowMixin.default.defaultProps);
  var _default2 = EventRow2;
  exports2.default = _default2;
  module2.exports = exports2.default;
})(EventRow, EventRow.exports);
var eventLevels$1 = {};
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$1 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$1(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$4;
var isArray$4 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$4(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$1 = _Symbol, arrayMap = _arrayMap, isArray$3 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$2 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$3(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$2 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$2(value, object) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$2;
var isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
function toKey$4(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _toKey = toKey$4;
var castPath$1 = _castPath, toKey$3 = _toKey;
function baseGet$2(object, path) {
  path = castPath$1(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey$3(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$2;
var baseGet$1 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$1(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath = _castPath, isArguments = isArguments_1, isArray$1 = isArray_1, isIndex = _isIndex, isLength = isLength_1, toKey$2 = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$1(value) {
  return value;
}
var identity_1 = identity$1;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray = isArray_1, property = property_1;
function baseIteratee$1(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var baseTrim = _baseTrim, isObject = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var toNumber = toNumber_1;
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_1 = toFinite$1;
var toFinite = toFinite_1;
function toInteger$1(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_1 = toInteger$1;
var baseFindIndex = _baseFindIndex, baseIteratee = _baseIteratee, toInteger = toInteger_1;
var nativeMax = Math.max;
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate), index);
}
var findIndex_1 = findIndex;
var _interopRequireDefault = interopRequireDefault.exports;
eventLevels$1.__esModule = true;
eventLevels$1.endOfRange = endOfRange;
eventLevels$1.eventSegments = eventSegments;
eventLevels$1.eventLevels = eventLevels;
eventLevels$1.inRange = inRange;
eventLevels$1.segsOverlap = segsOverlap;
eventLevels$1.sortEvents = sortEvents;
var _findIndex = _interopRequireDefault(findIndex_1);
function endOfRange(_ref) {
  var dateRange = _ref.dateRange, _ref$unit = _ref.unit, unit = _ref$unit === void 0 ? "day" : _ref$unit, localizer = _ref.localizer;
  return {
    first: dateRange[0],
    last: localizer.add(dateRange[dateRange.length - 1], 1, unit)
  };
}
function eventSegments(event, range2, accessors2, localizer) {
  var _endOfRange = endOfRange({
    dateRange: range2,
    localizer
  }), first = _endOfRange.first, last2 = _endOfRange.last;
  var slots = localizer.diff(first, last2, "day");
  var start2 = localizer.max(localizer.startOf(accessors2.start(event), "day"), first);
  var end2 = localizer.min(localizer.ceil(accessors2.end(event), "day"), last2);
  var padding = (0, _findIndex.default)(range2, function(x2) {
    return localizer.isSameDate(x2, start2);
  });
  var span = localizer.diff(start2, end2, "day");
  span = Math.min(span, slots);
  span = Math.max(span - localizer.segmentOffset, 1);
  return {
    event,
    span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels(rowSegments, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }
  var i, j, seg, levels = [], extra = [];
  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];
    for (j = 0; j < levels.length; j++) {
      if (!segsOverlap(seg, levels[j]))
        break;
    }
    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }
  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function(a, b) {
      return a.left - b.left;
    });
  }
  return {
    levels,
    extra
  };
}
function inRange(e, start2, end2, accessors2, localizer) {
  var event = {
    start: accessors2.start(e),
    end: accessors2.end(e)
  };
  var range2 = {
    start: start2,
    end: end2
  };
  return localizer.inEventRange({
    event,
    range: range2
  });
}
function segsOverlap(seg, otherSegs) {
  return otherSegs.some(function(otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}
function sortEvents(eventA, eventB, accessors2, localizer) {
  var evtA = {
    start: accessors2.start(eventA),
    end: accessors2.end(eventA),
    allDay: accessors2.allDay(eventA)
  };
  var evtB = {
    start: accessors2.start(eventB),
    end: accessors2.end(eventB),
    allDay: accessors2.allDay(eventB)
  };
  return localizer.sortEvents({
    evtA,
    evtB
  });
}
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = void 0;
  var _extends22 = _interopRequireDefault2(_extends.exports);
  var _inheritsLoose2 = _interopRequireDefault2(inheritsLoose.exports);
  _interopRequireDefault2(_propTypes_15_7_2_propTypes.exports);
  var _react2 = _interopRequireDefault2(_react_17_0_2_react.exports);
  var _EventRow = _interopRequireDefault2(EventRow.exports);
  var _Selection = _interopRequireWildcard(Selection$1);
  var _eventLevels = eventLevels$1;
  var _selection = selection;
  var _common = common;
  var _DnDContext = DnDContext$1;
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var WeekWrapper2 = /* @__PURE__ */ function(_React$Component) {
    (0, _inheritsLoose2.default)(WeekWrapper3, _React$Component);
    function WeekWrapper3() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handleMove = function(point, bounds, draggedEvent) {
        if (!(0, _selection.pointInBox)(bounds, point))
          return _this.reset();
        var event = _this.context.draggable.dragAndDropAction.event || draggedEvent;
        var _this$props = _this.props, accessors2 = _this$props.accessors, slotMetrics = _this$props.slotMetrics, rtl = _this$props.rtl, localizer = _this$props.localizer;
        var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
        var date2 = slotMetrics.getDateForSlot(slot);
        var _eventTimes = (0, _common.eventTimes)(event, accessors2, localizer), start2 = _eventTimes.start, duration = _eventTimes.duration;
        start2 = localizer.merge(date2, start2);
        var end2 = localizer.add(start2, duration, "milliseconds");
        _this.update(event, start2, end2);
      };
      _this.handleDropFromOutside = function(point, bounds) {
        if (!_this.context.draggable.onDropFromOutside)
          return;
        var _this$props2 = _this.props, slotMetrics = _this$props2.slotMetrics, rtl = _this$props2.rtl, localizer = _this$props2.localizer;
        var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
        var start2 = slotMetrics.getDateForSlot(slot);
        _this.context.draggable.onDropFromOutside({
          start: start2,
          end: localizer.add(start2, 1, "day"),
          allDay: false
        });
      };
      _this.handleDragOverFromOutside = function(point, node) {
        if (!_this.context.draggable.dragFromOutsideItem)
          return;
        _this.handleMove(point, node, _this.context.draggable.dragFromOutsideItem());
      };
      _this._selectable = function() {
        var node = _this.ref.current.closest(".rbc-month-row, .rbc-allday-cell");
        var container = node.closest(".rbc-month-view, .rbc-time-view");
        var selector = _this._selector = new _Selection.default(function() {
          return container;
        });
        selector.on("beforeSelect", function(point) {
          var isAllDay = _this.props.isAllDay;
          var action = _this.context.draggable.dragAndDropAction.action;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          var isInBox = (0, _selection.pointInBox)(bounds, point);
          return action === "move" || action === "resize" && (!isAllDay || isInBox);
        });
        selector.on("selecting", function(box) {
          var bounds = (0, _Selection.getBoundsForNode)(node);
          var dragAndDropAction = _this.context.draggable.dragAndDropAction;
          if (dragAndDropAction.action === "move")
            _this.handleMove(box, bounds);
          if (dragAndDropAction.action === "resize")
            _this.handleResize(box, bounds);
        });
        selector.on("selectStart", function() {
          return _this.context.draggable.onStart();
        });
        selector.on("select", function(point) {
          var bounds = (0, _Selection.getBoundsForNode)(node);
          if (!_this.state.segment)
            return;
          if (!(0, _selection.pointInBox)(bounds, point)) {
            _this.reset();
          } else {
            _this.handleInteractionEnd();
          }
        });
        selector.on("dropFromOutside", function(point) {
          if (!_this.context.draggable.onDropFromOutside)
            return;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          if (!(0, _selection.pointInBox)(bounds, point))
            return;
          _this.handleDropFromOutside(point, bounds);
        });
        selector.on("dragOverFromOutside", function(point) {
          if (!_this.context.draggable.dragFromOutsideItem)
            return;
          var bounds = (0, _Selection.getBoundsForNode)(node);
          _this.handleDragOverFromOutside(point, bounds);
        });
        selector.on("click", function() {
          return _this.context.draggable.onEnd(null);
        });
        selector.on("reset", function() {
          _this.reset();
          _this.context.draggable.onEnd(null);
        });
      };
      _this.handleInteractionEnd = function() {
        var _this$props3 = _this.props, resourceId = _this$props3.resourceId, isAllDay = _this$props3.isAllDay;
        var event = _this.state.segment.event;
        _this.reset();
        _this.context.draggable.onEnd({
          start: event.start,
          end: event.end,
          resourceId,
          isAllDay
        });
      };
      _this._teardownSelectable = function() {
        if (!_this._selector)
          return;
        _this._selector.teardown();
        _this._selector = null;
      };
      _this.state = {};
      _this.ref = /* @__PURE__ */ _react2.default.createRef();
      return _this;
    }
    var _proto = WeekWrapper3.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this._selectable();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this._teardownSelectable();
    };
    _proto.reset = function reset() {
      if (this.state.segment)
        this.setState({
          segment: null
        });
    };
    _proto.update = function update(event, start2, end2) {
      var segment = (0, _eventLevels.eventSegments)((0, _extends22.default)({}, event, {
        end: end2,
        start: start2,
        __isPreview: true
      }), this.props.slotMetrics.range, _common.dragAccessors, this.props.localizer);
      var lastSegment = this.state.segment;
      if (lastSegment && segment.span === lastSegment.span && segment.left === lastSegment.left && segment.right === lastSegment.right) {
        return;
      }
      this.setState({
        segment
      });
    };
    _proto.handleResize = function handleResize(point, bounds) {
      var _this$context$draggab = this.context.draggable.dragAndDropAction, event = _this$context$draggab.event, direction = _this$context$draggab.direction;
      var _this$props4 = this.props, accessors2 = _this$props4.accessors, slotMetrics = _this$props4.slotMetrics, rtl = _this$props4.rtl, localizer = _this$props4.localizer;
      var _eventTimes2 = (0, _common.eventTimes)(event, accessors2, localizer), start2 = _eventTimes2.start, end2 = _eventTimes2.end;
      var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
      var date2 = slotMetrics.getDateForSlot(slot);
      var cursorInRow = (0, _selection.pointInBox)(bounds, point);
      if (direction === "RIGHT") {
        if (cursorInRow) {
          if (slotMetrics.last < start2)
            return this.reset();
          end2 = localizer.add(date2, 1, "day");
        } else if (localizer.inRange(start2, slotMetrics.first, slotMetrics.last) || bounds.bottom < point.y && +slotMetrics.first > +start2) {
          end2 = localizer.add(slotMetrics.last, 1, "milliseconds");
        } else {
          this.setState({
            segment: null
          });
          return;
        }
        var originalEnd = accessors2.end(event);
        end2 = localizer.merge(end2, originalEnd);
        if (localizer.lt(end2, start2)) {
          end2 = originalEnd;
        }
      } else if (direction === "LEFT") {
        if (cursorInRow) {
          if (slotMetrics.first > end2)
            return this.reset();
          start2 = date2;
        } else if (localizer.inRange(end2, slotMetrics.first, slotMetrics.last) || bounds.top > point.y && localizer.lt(slotMetrics.last, end2)) {
          start2 = localizer.add(slotMetrics.first, -1, "milliseconds");
        } else {
          this.reset();
          return;
        }
        var originalStart = accessors2.start(event);
        start2 = localizer.merge(start2, originalStart);
        if (localizer.gt(start2, end2)) {
          start2 = originalStart;
        }
      }
      this.update(event, start2, end2);
    };
    _proto.render = function render() {
      var _this$props5 = this.props, children = _this$props5.children, accessors2 = _this$props5.accessors;
      var segment = this.state.segment;
      return /* @__PURE__ */ _react2.default.createElement("div", {
        ref: this.ref,
        className: "rbc-addons-dnd-row-body"
      }, children, segment && /* @__PURE__ */ _react2.default.createElement(_EventRow.default, (0, _extends22.default)({}, this.props, {
        selected: null,
        className: "rbc-addons-dnd-drag-row",
        segments: [segment],
        accessors: (0, _extends22.default)({}, accessors2, _common.dragAccessors)
      })));
    };
    return WeekWrapper3;
  }(_react2.default.Component);
  WeekWrapper2.contextType = _DnDContext.DnDContext;
  WeekWrapper2.propTypes = {};
  var _default2 = WeekWrapper2;
  exports2.default = _default2;
  module2.exports = exports2.default;
})(WeekWrapper, WeekWrapper.exports);
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = withDragAndDrop2;
  var _extends22 = _interopRequireDefault2(_extends.exports);
  var _objectWithoutPropertiesLoose22 = _interopRequireDefault2(objectWithoutPropertiesLoose.exports);
  var _inheritsLoose2 = _interopRequireDefault2(inheritsLoose.exports);
  _interopRequireDefault2(_propTypes_15_7_2_propTypes.exports);
  var _react2 = _interopRequireDefault2(_react_17_0_2_react.exports);
  var _clsx = _interopRequireDefault2(require$$6);
  var _EventWrapper = _interopRequireDefault2(EventWrapper.exports);
  var _EventContainerWrapper = _interopRequireDefault2(EventContainerWrapper.exports);
  var _WeekWrapper = _interopRequireDefault2(WeekWrapper.exports);
  var _common = common;
  var _DnDContext = DnDContext$1;
  var _excluded3 = ["selectable", "elementProps"];
  function withDragAndDrop2(Calendar2) {
    var DragAndDropCalendar = /* @__PURE__ */ function(_React$Component) {
      (0, _inheritsLoose2.default)(DragAndDropCalendar2, _React$Component);
      function DragAndDropCalendar2() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.defaultOnDragOver = function(event) {
          event.preventDefault();
        };
        _this.handleBeginAction = function(event, action, direction) {
          _this.setState({
            event,
            action,
            direction
          });
          var onDragStart = _this.props.onDragStart;
          if (onDragStart)
            onDragStart({
              event,
              action,
              direction
            });
        };
        _this.handleInteractionStart = function() {
          if (_this.state.interacting === false)
            _this.setState({
              interacting: true
            });
        };
        _this.handleInteractionEnd = function(interactionInfo) {
          var _this$state = _this.state, action = _this$state.action, event = _this$state.event;
          if (!action)
            return;
          _this.setState({
            action: null,
            event: null,
            interacting: false,
            direction: null
          });
          if (interactionInfo == null)
            return;
          interactionInfo.event = event;
          var _this$props = _this.props, onEventDrop = _this$props.onEventDrop, onEventResize = _this$props.onEventResize;
          if (action === "move" && onEventDrop)
            onEventDrop(interactionInfo);
          if (action === "resize" && onEventResize)
            onEventResize(interactionInfo);
        };
        var components = _this.props.components;
        _this.components = (0, _common.mergeComponents)(components, {
          eventWrapper: _EventWrapper.default,
          eventContainerWrapper: _EventContainerWrapper.default,
          weekWrapper: _WeekWrapper.default
        });
        _this.state = {
          interacting: false
        };
        return _this;
      }
      var _proto = DragAndDropCalendar2.prototype;
      _proto.getDnDContextValue = function getDnDContextValue() {
        return {
          draggable: {
            onStart: this.handleInteractionStart,
            onEnd: this.handleInteractionEnd,
            onBeginAction: this.handleBeginAction,
            onDropFromOutside: this.props.onDropFromOutside,
            dragFromOutsideItem: this.props.dragFromOutsideItem,
            draggableAccessor: this.props.draggableAccessor,
            resizableAccessor: this.props.resizableAccessor,
            dragAndDropAction: this.state
          }
        };
      };
      _proto.render = function render() {
        var _this$props2 = this.props, selectable = _this$props2.selectable, elementProps = _this$props2.elementProps, props = (0, _objectWithoutPropertiesLoose22.default)(_this$props2, _excluded3);
        var interacting = this.state.interacting;
        delete props.onEventDrop;
        delete props.onEventResize;
        props.selectable = selectable ? "ignoreEvents" : false;
        var elementPropsWithDropFromOutside = this.props.onDropFromOutside ? (0, _extends22.default)({}, elementProps, {
          onDragOver: this.props.onDragOver || this.defaultOnDragOver
        }) : elementProps;
        props.className = (0, _clsx.default)(props.className, "rbc-addons-dnd", !!interacting && "rbc-addons-dnd-is-dragging");
        var context = this.getDnDContextValue();
        return /* @__PURE__ */ _react2.default.createElement(_DnDContext.DnDContext.Provider, {
          value: context
        }, /* @__PURE__ */ _react2.default.createElement(Calendar2, (0, _extends22.default)({}, props, {
          elementProps: elementPropsWithDropFromOutside,
          components: this.components
        })));
      };
      return DragAndDropCalendar2;
    }(_react2.default.Component);
    DragAndDropCalendar.defaultProps = (0, _extends22.default)({}, Calendar2.defaultProps, {
      draggableAccessor: null,
      resizableAccessor: null,
      resizable: true
    });
    DragAndDropCalendar.propTypes = {};
    return DragAndDropCalendar;
  }
  module2.exports = exports2.default;
})(withDragAndDrop$1, withDragAndDrop$1.exports);
(function(module2, exports2) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  exports2.__esModule = true;
  exports2.default = void 0;
  var _withDragAndDrop = _interopRequireDefault2(withDragAndDrop$1.exports);
  var _default2 = _withDragAndDrop.default;
  exports2.default = _default2;
  module2.exports = exports2.default;
})(dragAndDrop, dragAndDrop.exports);
var withDragAndDrop = /* @__PURE__ */ getDefaultExportFromCjs(dragAndDrop.exports);
class GenericInputPrompt extends require$$0.Modal {
  constructor(app, header, placeholder, value) {
    super(app);
    __publicField(this, "waitForClose");
    __publicField(this, "resolvePromise");
    __publicField(this, "rejectPromise");
    __publicField(this, "didSubmit", false);
    __publicField(this, "inputComponent");
    __publicField(this, "input");
    __publicField(this, "placeholder");
    __publicField(this, "submitClickCallback", (evt) => this.submit());
    __publicField(this, "cancelClickCallback", (evt) => this.cancel());
    __publicField(this, "submitEnterCallback", (evt) => {
      if (evt.key === "Enter") {
        evt.preventDefault();
        this.submit();
      }
    });
    this.header = header;
    this.placeholder = placeholder;
    this.input = value;
    this.waitForClose = new Promise((resolve, reject) => {
      this.resolvePromise = resolve;
      this.rejectPromise = reject;
    });
    this.display();
    this.open();
  }
  static Prompt(app, header, placeholder, value) {
    const newPromptModal = new GenericInputPrompt(app, header, placeholder, value);
    return newPromptModal.waitForClose;
  }
  display() {
    this.contentEl.empty();
    this.titleEl.textContent = this.header;
    const mainContentContainer = this.contentEl.createDiv();
    this.inputComponent = this.createInputField(mainContentContainer, this.placeholder, this.input);
    this.createButtonBar(mainContentContainer);
  }
  createInputField(container, placeholder, value) {
    const textComponent = new require$$0.TextComponent(container);
    textComponent.inputEl.style.width = "100%";
    textComponent.setPlaceholder(placeholder != null ? placeholder : "").setValue(value != null ? value : "").onChange((value2) => this.input = value2).inputEl.addEventListener("keydown", this.submitEnterCallback);
    return textComponent;
  }
  createButton(container, text, callback) {
    const btn = new require$$0.ButtonComponent(container);
    btn.setButtonText(text).onClick(callback);
    return btn;
  }
  createButtonBar(mainContentContainer) {
    const buttonBarContainer = mainContentContainer.createDiv();
    this.createButton(buttonBarContainer, "Ok", this.submitClickCallback).setCta().buttonEl.style.marginRight = "0";
    this.createButton(buttonBarContainer, "Cancel", this.cancelClickCallback);
    buttonBarContainer.style.display = "flex";
    buttonBarContainer.style.flexDirection = "row-reverse";
    buttonBarContainer.style.justifyContent = "flex-start";
    buttonBarContainer.style.marginTop = "1rem";
  }
  submit() {
    this.didSubmit = true;
    this.close();
  }
  cancel() {
    this.close();
  }
  resolveInput() {
    if (!this.didSubmit)
      this.rejectPromise("No input given.");
    else
      this.resolvePromise(this.input);
  }
  removeInputListener() {
    this.inputComponent.inputEl.removeEventListener("keydown", this.submitEnterCallback);
  }
  onOpen() {
    super.onOpen();
    this.inputComponent.inputEl.focus();
    this.inputComponent.inputEl.select();
  }
  onClose() {
    super.onClose();
    this.resolveInput();
    this.removeInputListener();
  }
}
const OnlyWhen = (props) => {
  const {
    children,
    when
  } = props;
  return when ? /* @__PURE__ */ jsx(Fragment, {
    children
  }) : null;
};
const Only = OnlyWhen;
var react_1 = _react_17_0_2_react.exports;
var isFunction = function(setStateAction) {
  return typeof setStateAction === "function";
};
var useStateRef = function(initialState) {
  var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
  var ref = react_1.useRef(state);
  var dispatch = react_1.useCallback(function(setStateAction) {
    ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;
    setState(ref.current);
  }, []);
  return [state, dispatch, ref];
};
var dist = useStateRef;
const CalendarComponent = _react_17_0_2_react.exports.forwardRef((props, ref) => {
  const {
    selectable,
    resizeable,
    defaultView,
    popup,
    onEventDoubleClick: handleDoubleClickEventCallback,
    onEventSelect: handleEventSelectCallback
  } = props;
  const {
    eventState: {
      events
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const refresh = useRefresh();
  const [newEvents, setNewEvents, eventRef] = dist(null);
  const [calendarView, setCalendarView, calendarViewRef] = dist(null);
  const DragAndDropCalendar = withDragAndDrop(Calendar$1);
  const localizer = moment(require$$0.moment);
  _react_17_0_2_react.exports.useEffect(() => {
    momentChange();
    const getView = getEditorContentCache();
    if (getView !== null && getView !== "month") {
      handleViewChange(getView);
    }
    if (eventRef.current !== events) {
      setNewEvents(events);
      refresh();
    }
  }, [events]);
  _react_17_0_2_react.exports.useImperativeHandle(ref, () => ({
    setEvents: () => {
      if (eventRef.current !== events) {
        setNewEvents(events);
        refresh();
      }
    }
  }), []);
  const momentChange = () => {
    require$$0.moment.locale("en");
    if (StartDate == "sunday") {
      require$$0.moment.updateLocale("en", {
        week: {
          dow: 0
        }
      });
      return require$$0.moment;
    }
    if (StartDate == "monday") {
      require$$0.moment.updateLocale("en", {
        week: {
          dow: 1
        }
      });
    }
    return require$$0.moment;
  };
  const styleEvents = (event) => {
    const className = event.eventType;
    return {
      className
    };
  };
  const handleDoubleClickEvent = _react_17_0_2_react.exports.useCallback((event) => {
    handleDoubleClickEventCallback(event);
  }, []);
  const handleEventSelect = _react_17_0_2_react.exports.useCallback(async (slotInfo) => {
    const {
      app
    } = dailyNotesService.getState();
    const addEvent = await GenericInputPrompt.Prompt(app, "Input Event", "", "");
    handleEventSelectCallback(addEvent, slotInfo);
  }, []);
  const handleViewChange = (view) => {
    setCalendarView(view);
    setEditorContentCache(view);
  };
  const onEventResize = (data) => {
    console.log(data);
  };
  const onEventDrop = (data) => {
    console.log(data);
  };
  return /* @__PURE__ */ jsx(Only, {
    when: newEvents !== void 0,
    children: /* @__PURE__ */ jsx(DragAndDropCalendar, {
      selectable,
      localizer,
      events: eventRef.current,
      resizable: resizeable,
      defaultView: calendarViewRef.current || defaultView,
      style: {
        height: "90vh"
      },
      eventPropGetter: styleEvents,
      popup,
      onEventDrop,
      onEventResize,
      titleAccessor: (event) => event.title,
      tooltipAccessor: (event) => event.title,
      onView: handleViewChange,
      onDoubleClickEvent: handleDoubleClickEvent,
      onSelectSlot: handleEventSelect
    })
  });
});
function getEditorContentCache() {
  var _a;
  return (_a = storage.get(["viewCache"]).viewCache) != null ? _a : "month";
}
function setEditorContentCache(view) {
  storage.set({
    viewCache: view
  });
}
const showEventInDailyNotes = async (eventId) => {
  const { app } = dailyNotesService.getState();
  const lineNum = parseInt(eventId.slice(14));
  const eventDateString = eventId.slice(0, 14);
  console.log(eventDateString);
  const date2 = require$$0.moment(eventDateString, "YYYYMMDDHHmmss");
  console.log(eventDateString);
  const file = await dailyNotesService.getDailyNoteByEvent(date2);
  if (!require$$0.Platform.isMobile) {
    const leaf = app.workspace.splitActiveLeaf();
    leaf.openFile(file, { eState: { line: lineNum } });
  } else {
    let leaf = app.workspace.activeLeaf;
    if (leaf === null) {
      leaf = app.workspace.getLeaf(true);
    }
    leaf.openFile(file, { eState: { line: lineNum } });
  }
  return;
};
const BigCalendar$1 = () => {
  const {
    globalState,
    eventState: {
      events
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  _react_17_0_2_react.exports.useRef(globalState);
  const [isFetching, setFetchStatus] = _react_17_0_2_react.exports.useState(true);
  const eventRef = _react_17_0_2_react.exports.useRef(null);
  _react_17_0_2_react.exports.useEffect(() => {
    eventService.fetchAllEvents().then(() => {
      setFetchStatus(false);
    }).catch(() => {
      new require$$0.Notice("\u{1F62D} Fetch Error");
    });
    dailyNotesService.getMyAllDailyNotes().then(() => {
      setFetchStatus(false);
    }).catch(() => {
      new require$$0.Notice("\u{1F62D} Fetch DailyNotes Error");
    });
    dailyNotesService.getState();
  }, []);
  const handleEventSelect = _react_17_0_2_react.exports.useCallback(async (content, slotInfo) => {
    const newEvent = await eventService.createEvent(content, slotInfo.start);
    eventService.pushEvent(newEvent);
  }, []);
  const handleEventDoubleClick = _react_17_0_2_react.exports.useCallback(async (event) => {
    if (event.path === void 0) {
      console.log(event.id);
      showEventInDailyNotes(event.id);
    }
  }, []);
  const calendarConfig = _react_17_0_2_react.exports.useMemo(() => ({
    selectable: true,
    resizeable: true,
    defaultView: "month",
    popup: true,
    onEventDoubleClick: handleEventDoubleClick,
    onEventSelect: handleEventSelect
  }), []);
  return /* @__PURE__ */ jsx("div", {
    className: `big-calendar-wrapper`,
    children: /* @__PURE__ */ jsx(Only, {
      when: events.length > 0,
      children: /* @__PURE__ */ jsx(CalendarComponent, __spreadValues({
        ref: eventRef
      }, calendarConfig))
    })
  });
};
const homeRouter = {
  "*": /* @__PURE__ */ jsx(BigCalendar$1, {})
};
const routerSwitch = (router) => {
  return (pathname) => {
    for (const key of Object.keys(router)) {
      if (key === pathname) {
        return router[key];
      }
    }
    return router["*"];
  };
};
const homeRouterSwitch = routerSwitch(homeRouter);
function useLoading(initialState = true) {
  const [state, setState] = _react_17_0_2_react.exports.useState({ isLoading: initialState, isFailed: false, isSucceed: false });
  return __spreadProps(__spreadValues({}, state), {
    setLoading: () => {
      setState(__spreadProps(__spreadValues({}, state), {
        isLoading: true,
        isFailed: false,
        isSucceed: false
      }));
    },
    setFinish: () => {
      setState(__spreadProps(__spreadValues({}, state), {
        isLoading: false,
        isFailed: false,
        isSucceed: true
      }));
    },
    setError: () => {
      setState(__spreadProps(__spreadValues({}, state), {
        isLoading: false,
        isFailed: true,
        isSucceed: false
      }));
    }
  });
}
function Home() {
  const {
    locationState: {
      pathname
    }
  } = _react_17_0_2_react.exports.useContext(appContext);
  const loadingState = useLoading();
  _react_17_0_2_react.exports.useEffect(() => {
    loadingState.setFinish();
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("section", {
      id: "page-wrapper",
      children: /* @__PURE__ */ jsx("main", {
        className: "content-wrapper",
        children: homeRouterSwitch(pathname)
      })
    })
  });
}
const Provider = (props) => {
  const {
    children,
    store,
    context: Context
  } = props;
  const [appState, setAppState] = _react_17_0_2_react.exports.useState(store.getState());
  _react_17_0_2_react.exports.useEffect(() => {
    const unsubscribe = store.subscribe((ns) => {
      setAppState(ns);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: appState,
    children
  });
};
(() => {
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(str, newStr) {
      if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
        return this.replace(str, newStr);
      }
      return this.replace(new RegExp(str, "g"), newStr);
    };
  }
})();
function StrictApp() {
  return /* @__PURE__ */ jsx(Provider, {
    store: appStore,
    context: appContext,
    children: /* @__PURE__ */ jsx(App, {})
  });
}
function App() {
  _react_17_0_2_react.exports.useEffect(() => {
    const handleWindowResize = () => {
      globalStateService.setIsMobileView(document.body.clientWidth <= 875);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Home, {})
  });
}
class BigCalendar extends require$$0.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    __publicField(this, "plugin");
    __publicField(this, "bigCalendarComponent");
    this.plugin = plugin;
  }
  getDisplayText() {
    return "Big Calendar";
  }
  getIcon() {
    return "calendar-with-checkmark";
  }
  getViewType() {
    return CALENDAR_VIEW_TYPE;
  }
  onEventsSettingsUpdate() {
    eventService.clearEvents();
    eventService.fetchAllEvents();
  }
  async onFileDeleted(file) {
    if (getDateFromFile_1(file, "day")) {
      await dailyNotesService.getMyAllDailyNotes();
      eventService.clearEvents();
      eventService.fetchAllEvents();
    }
  }
  async onFileModified(file) {
    const date2 = getDateFromFile_1(file, "day");
    if (date2 && this.bigCalendarComponent) {
      eventService.fetchAllEvents();
    }
  }
  onFileCreated(file) {
    if (this.app.workspace.layoutReady && this.bigCalendarComponent) {
      if (getDateFromFile_1(file, "day")) {
        dailyNotesService.getMyAllDailyNotes();
        eventService.fetchAllEvents();
      }
    }
  }
  async onOpen() {
    this.onEventsSettingsUpdate = this.onEventsSettingsUpdate.bind(this);
    this.onFileCreated = this.onFileCreated.bind(this);
    this.onFileDeleted = this.onFileDeleted.bind(this);
    this.onFileModified = this.onFileModified.bind(this);
    this.registerEvent(this.app.workspace.on("obsidian-events:settings-updated", this.onEventsSettingsUpdate));
    this.registerEvent(this.app.vault.on("create", this.onFileCreated));
    this.registerEvent(this.app.vault.on("delete", this.onFileDeleted));
    this.registerEvent(this.app.vault.on("modify", this.onFileModified));
    dailyNotesService.getApp(this.app);
    InsertAfter = this.plugin.settings.InsertAfter;
    StartDate = this.plugin.settings.StartDate;
    DefaultEventComposition = this.plugin.settings.DefaultEventComposition;
    ProcessEntriesBelow = this.plugin.settings.ProcessEntriesBelow;
    this.bigCalendarComponent = React.createElement(StrictApp);
    ReactDOM.render(this.bigCalendarComponent, this.contentEl);
  }
  async onClose() {
  }
}
let InsertAfter;
let StartDate;
let DefaultEventComposition;
let ProcessEntriesBelow;
const icons = {
  changeTaskStatus: `<svg t="1637072255349" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4250" width="100" height="100"><path d="M662.75 440.612c15.863-17.426 42.848-18.693 60.274-2.83 17.426 15.861 18.693 42.847 2.831 60.273L527.617 715.832c-16.55 18.18-45 18.65-62.14 1.026l-112.064-115.23c-16.429-16.894-16.053-43.906 0.84-60.335 16.893-16.428 43.905-16.052 60.334 0.84l80.45 82.724 167.714-184.245zM697.653 256c-23.565 0-42.667-19.103-42.667-42.667s19.102-42.666 42.667-42.666h124.651c40.288 0 73.697 31.956 73.697 72.347v85.783c0 23.564-19.103 42.667-42.667 42.667s-42.666-19.103-42.666-42.667V256H697.652z m113.015 597.333V449.167c0-23.564 19.102-42.667 42.666-42.667 23.564 0 42.667 19.103 42.667 42.667v417.152c0 40.391-33.41 72.348-73.697 72.348H201.697c-40.288 0-73.697-31.957-73.697-72.348V243.014c0-40.39 33.41-72.347 73.697-72.347h124.727c23.564 0 42.667 19.102 42.667 42.666 0 23.564-19.103 42.667-42.667 42.667h-113.09v597.333h597.333z m-384-682.666c-23.564 0-42.667 19.102-42.667 42.666C384 236.897 403.103 256 426.667 256h170.666C620.897 256 640 236.897 640 213.333s-19.103-42.666-42.667-42.666H426.667z m0-85.334h170.666c70.693 0 128 57.308 128 128 0 70.693-57.307 128-128 128H426.667c-70.693 0-128-57.307-128-128 0-70.692 57.307-128 128-128z" p-id="4251" fill="currentColor"></path></svg>`
};
function addIcons() {
  Object.keys(icons).forEach((key) => {
    require$$0.addIcon(key, icons[key]);
  });
}
var ar = {};
var cz = {};
var da = {};
var de = {};
var en = {
  welcome: "Welcome to the Big Calendar",
  "Open Big Calendar Successfully": "Open Big Calendar Successfully",
  "Open Big Calendar": "Open Big Calendar",
  Sunday: "Sunday",
  Monday: "Monday",
  "Regular Options": "Regular Options",
  "First Day of Week": "First Day of Week",
  "Insert after heading": "Insert after heading",
  "Choose the first day of the week. Sunday is the default.": "Choose the first day of the week. Sunday is the default.",
  "You should set the same heading below if you want to insert and process events below the same heading.": "You should set the same heading below if you want to insert and process events below the same heading.",
  "Process Events below": "Process events below",
  "Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.": "Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.",
  "Experimental Options": "Experimental Options",
  'Set default event composition, you should use {TIME} as "HH:mm" and {CONTENT} as content. "{TIME} {CONTENT}" by default': 'Set default event composition, you should use {TIME} as "HH:mm" and {CONTENT} as content. "{TIME} {CONTENT}" by default',
  "Default Event Composition": "Default Event Composition",
  "Say Thank You": "Say Thank You",
  Donate: "Donate",
  "If you like this plugin, consider donating to support continued development:": "If you like this plugin, consider donating to support continued development:"
};
var enGB = {};
var es = {};
var fr = {};
var hi = {};
var id = {};
var it = {};
var ja = {};
var ko = {};
var nl = {};
var no = {};
var pl = {};
var pt = {};
var ptBR = {};
var ro = {};
var ru = {};
var tr = {};
var zhCN = {
  welcome: "\u6B22\u8FCE\u4F7F\u7528\u5927\u65E5\u5386",
  "Open Big Calendar Successfully": "\u6210\u529F\u6253\u5F00\u5927\u65E5\u5386",
  "Open Big Calendar": "\u6253\u5F00\u5927\u65E5\u5386",
  Sunday: "\u661F\u671F\u65E5",
  Monday: "\u661F\u671F\u4E00",
  "Regular Options": "\u5E38\u89C4\u9009\u9879",
  "First Day of Week": "\u4E00\u5468\u5F00\u59CB",
  "Choose the first day of the week. Sunday is the default.": "\u9009\u62E9\u4E00\u5468\u7684\u5F00\u59CB\u65E5\u671F\u3002\u9ED8\u8BA4\u4E3A\u661F\u671F\u65E5\u3002",
  "Insert after heading": "\u5728\u6307\u5B9A\u6807\u9898\u540E\u63D2\u5165\u4E8B\u4EF6",
  "You should set the same heading below if you want to insert and process events below the same heading.": "\u4F60\u5982\u679C\u60F3\u8981\u63D2\u5165\u6807\u9898\u7684\u540C\u65F6\u663E\u793A\u5BF9\u5E94\u6807\u9898\u4E0B\u7684\u4E8B\u4EF6\uFF0C\u4F60\u5FC5\u987B\u4FDD\u8BC1\u5F53\u524D\u8BBE\u7F6E\u4E0E\u4E0B\u65B9\u7684\u89E3\u6790\u8BBE\u7F6E\u662F\u4E00\u81F4\u7684\u3002\u5F53\u4E3A\u7A7A\u65F6\u63D2\u5165\u5230\u6587\u672B",
  "Process Events below": "\u89E3\u6790\u6307\u5B9A\u6807\u9898\u540E\u7684\u4E8B\u4EF6",
  "Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.": "\u53EA\u6709\u5728\u8BBE\u7F6E\u7684\u6807\u9898\u540E\u7684\u4E8B\u4EF6 \u624D\u4F1A\u88AB\u89E3\u6790\u3002\u5F53\u4E3A\u7A7A\u65F6\u89E3\u6790\u5168\u6587\u7684\u4E8B\u4EF6",
  "Experimental Options": "\u5B9E\u9A8C\u6027\u9009\u9879",
  'Set default event composition, you should use {TIME} as "HH:mm" and {CONTENT} as content. "{TIME} {CONTENT}" by default': '\u8BBE\u7F6E\u9ED8\u8BA4\u4E8B\u4EF6\u7EC4\u6210\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 {TIME} \u4F5C\u4E3A "HH:mm" \u548C {CONTENT} \u4F5C\u4E3A\u5185\u5BB9\u3002\u9ED8\u8BA4\u4E3A "{TIME} {CONTENT}"',
  "Default Event Composition": "\u9ED8\u8BA4\u4E8B\u4EF6\u7EC4\u6210",
  "Say Thank You": "Say Thank You",
  Donate: "\u6350\u8D60",
  "If you like this plugin, consider donating to support continued development:": "\u5982\u679C\u4F60\u559C\u6B22\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u800C\u4E14\u4E5F\u5E0C\u671B\u7ED9\u6211\u4E70\u9E21\u817F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8003\u8651 Github \u9875\u9762\u53F3\u8FB9\u7684 Sponsor~"
};
var zhTW = {};
const localeMap = {
  ar,
  cs: cz,
  da,
  de,
  en,
  "en-gb": enGB,
  es,
  fr,
  hi,
  id,
  it,
  ja,
  ko,
  nl,
  nn: no,
  pl,
  pt,
  "pt-br": ptBR,
  ro,
  ru,
  tr,
  "zh-cn": zhCN,
  "zh-tw": zhTW
};
const locale = localeMap[require$$0.moment.locale()];
function t(str) {
  return locale && locale[str] || en[str];
}
const DEFAULT_SETTINGS = {
  StartDate: "Sunday",
  InsertAfter: "# Journal",
  ProcessEntriesBelow: "",
  DefaultEventComposition: "{TIME} {CONTENT}"
};
class BigCalendarSettingTab extends require$$0.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    __publicField(this, "plugin");
    __publicField(this, "applyDebounceTimer", 0);
    this.plugin = plugin;
  }
  applySettingsUpdate() {
    clearTimeout(this.applyDebounceTimer);
    const plugin = this.plugin;
    this.applyDebounceTimer = window.setTimeout(() => {
      plugin.saveSettings();
    }, 100);
  }
  async hide() {
  }
  async display() {
    await this.plugin.loadSettings();
    const { containerEl } = this;
    this.containerEl.empty();
    this.containerEl.createEl("h1", { text: t("Regular Options") });
    new require$$0.Setting(containerEl).setName(t("First Day of Week")).setDesc(t("Choose the first day of the week. Sunday is the default.")).addDropdown((dropdown) => dropdown.addOption("sunday", t("Sunday")).addOption("monday", t("Monday")).setValue(this.plugin.settings.StartDate).onChange(async (value) => {
      this.plugin.settings.StartDate = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Insert after heading")).setDesc(t("You should set the same heading below if you want to insert and process events below the same heading.")).addText((text) => text.setPlaceholder("# JOURNAL").setValue(this.plugin.settings.InsertAfter).onChange(async (value) => {
      this.plugin.settings.InsertAfter = value;
      this.applySettingsUpdate();
    }));
    new require$$0.Setting(containerEl).setName(t("Process Events below")).setDesc(t("Only entries below this string/section in your notes will be processed. If it does not exist no notes will be processed for that file.")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.ProcessEntriesBelow).setValue(this.plugin.settings.ProcessEntriesBelow).onChange(async (value) => {
      this.plugin.settings.ProcessEntriesBelow = value;
      this.applySettingsUpdate();
    }));
    this.containerEl.createEl("h1", { text: t("Experimental Options") });
    new require$$0.Setting(containerEl).setName(t("Default Event Composition")).setDesc(t('Set default event composition, you should use {TIME} as "HH:mm" and {CONTENT} as content. "{TIME} {CONTENT}" by default')).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.DefaultEventComposition).setValue(this.plugin.settings.DefaultEventComposition).onChange(async (value) => {
      this.plugin.settings.DefaultEventComposition = value;
      this.applySettingsUpdate();
    }));
    this.containerEl.createEl("h1", { text: t("Say Thank You") });
    new require$$0.Setting(containerEl).setName(t("Donate")).setDesc(t("If you like this plugin, consider donating to support continued development:")).addButton((bt) => {
      bt.buttonEl.outerHTML = `<a href="https://www.buymeacoffee.com/boninall"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>`;
    });
  }
}
class BigCalendarPlugin extends require$$0.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "settings");
  }
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new BigCalendarSettingTab(this.app, this));
    this.registerView(CALENDAR_VIEW_TYPE, (leaf) => new BigCalendar(leaf, this));
    addIcons();
    this.addRibbonIcon("changeTaskStatus", "Big Calendar", () => {
      new require$$0.Notice(t("Open Big Calendar Successfully"));
      this.openCalendar();
    });
    this.addCommand({
      id: "open-big-calendar",
      name: t("Open Big Calendar"),
      callback: () => this.openCalendar(),
      hotkeys: []
    });
    await this.loadSettings();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(CALENDAR_VIEW_TYPE);
    new require$$0.Notice("Close Big Calendar Successfully");
  }
  async openCalendar() {
    const workspace = this.app.workspace;
    workspace.detachLeavesOfType(CALENDAR_VIEW_TYPE);
    const leaf = workspace.getLeaf(!require$$0.Platform.isMobile && workspace.activeLeaf && workspace.activeLeaf.view instanceof require$$0.FileView);
    await leaf.setViewState({ type: CALENDAR_VIEW_TYPE });
    workspace.revealLeaf(leaf);
  }
}
module.exports = BigCalendarPlugin;