// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/lazy-ass/index.js":[function(require,module,exports) {
var global = arguments[3];
(function initLazyAss() {
  function isArrayLike(a) {
    return a && typeof a.length === 'number';
  }

  function toStringArray(arr) {
    return 'array with ' + arr.length + ' items.\n[' + arr.map(toString).join(',') + ']\n';
  }

  function isPrimitive(arg) {
    return typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'boolean';
  }

  function isError(e) {
    return e instanceof Error;
  }
  /*
    custom JSON.stringify replacer to make sure we do not
    hide properties that have value "undefined"
    var o = {
      foo: 42,
      bar: undefined
    }
    // standard JSON.stringify returns '{"foo": 42}'
    // this replacer returns '{"foo": 42, "bar": null}'
  */


  function replacer(key, value) {
    if (value === undefined) {
      return null;
    }

    return value;
  }

  function toString(arg, k) {
    if (isPrimitive(arg)) {
      return JSON.stringify(arg);
    }

    if (arg instanceof Error) {
      return arg.name + ' ' + arg.message;
    }

    if (Array.isArray(arg)) {
      return toStringArray(arg);
    }

    if (isArrayLike(arg)) {
      return toStringArray(Array.prototype.slice.call(arg, 0));
    }

    var argString;

    try {
      argString = JSON.stringify(arg, replacer, 2);
    } catch (err) {
      argString = '{ cannot stringify arg ' + k + ', it has type "' + typeof arg + '"';

      if (typeof arg === 'object') {
        argString += ' with keys ' + Object.keys(arg).join(', ') + ' }';
      } else {
        argString += ' }';
      }
    }

    return argString;
  }

  function endsWithNewLine(s) {
    return /\n$/.test(s);
  }

  function formMessage(args) {
    var msg = args.reduce(function (total, arg, k) {
      if (k && !endsWithNewLine(total)) {
        total += ' ';
      }

      if (typeof arg === 'string') {
        return total + arg;
      }

      if (typeof arg === 'function') {
        var fnResult;

        try {
          fnResult = arg();
        } catch (err) {
          // ignore the error
          fnResult = '[function ' + arg.name + ' threw error!]';
        }

        return total + fnResult;
      }

      var argString = toString(arg, k);
      return total + argString;
    }, '');
    return msg;
  }

  function lazyAssLogic(condition) {
    if (isError(condition)) {
      return condition;
    }

    var fn = typeof condition === 'function' ? condition : null;

    if (fn) {
      condition = fn();
    }

    if (!condition) {
      var args = [].slice.call(arguments, 1);

      if (fn) {
        args.unshift(fn.toString());
      }

      return new Error(formMessage(args));
    }
  }

  var lazyAss = function lazyAss() {
    var err = lazyAssLogic.apply(null, arguments);

    if (err) {
      throw err;
    }
  };

  var lazyAssync = function lazyAssync() {
    var err = lazyAssLogic.apply(null, arguments);

    if (err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }
  };

  lazyAss.async = lazyAssync;

  function isNode() {
    return typeof global === 'object';
  }

  function isBrowser() {
    return typeof window === 'object';
  }

  function isCommonJS() {
    return typeof module === 'object';
  }

  function globalRegister() {
    if (isNode()) {
      /* global global */
      register(global, lazyAss, 'lazyAss', 'la');
      register(global, lazyAssync, 'lazyAssync', 'lac');
    }
  }

  function register(root, value, name, alias) {
    root[name] = root[alias] = value;
  }

  lazyAss.globalRegister = globalRegister;

  if (isBrowser()) {
    /* global window */
    register(window, lazyAss, 'lazyAss', 'la');
    register(window, lazyAssync, 'lazyAssync', 'lac');
  }

  if (isCommonJS()) {
    /* global module */
    module.exports = lazyAss;
  }
})();
},{}]