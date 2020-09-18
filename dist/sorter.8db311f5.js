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
})({"node_modules/htmlnano/node_modules/posthtml-parser/coverage/sorter.js":[function(require,module,exports) {
var addSorting = function () {
  "use strict";

  var cols,
      currentSort = {
    index: 0,
    desc: false
  }; // returns the summary table element

  function getTable() {
    return document.querySelector('.coverage-summary');
  } // returns the thead element of the summary table


  function getTableHeader() {
    return getTable().querySelector('thead tr');
  } // returns the tbody element of the summary table


  function getTableBody() {
    return getTable().querySelector('tbody');
  } // returns the th element for nth column


  function getNthColumn(n) {
    return getTableHeader().querySelectorAll('th')[n];
  } // loads all columns


  function loadColumns() {
    var colNodes = getTableHeader().querySelectorAll('th'),
        colNode,
        cols = [],
        col,
        i;

    for (i = 0; i < colNodes.length; i += 1) {
      colNode = colNodes[i];
      col = {
        key: colNode.getAttribute('data-col'),
        sortable: !colNode.getAttribute('data-nosort'),
        type: colNode.getAttribute('data-type') || 'string'
      };
      cols.push(col);

      if (col.sortable) {
        col.defaultDescSort = col.type === 'number';
        colNode.innerHTML = colNode.innerHTML + '<span class="sorter"></span>';
      }
    }

    return cols;
  } // attaches a data attribute to every tr element with an object
  // of data values keyed by column name


  function loadRowData(tableRow) {
    var tableCols = tableRow.querySelectorAll('td'),
        colNode,
        col,
        data = {},
        i,
        val;

    for (i = 0; i < tableCols.length; i += 1) {
      colNode = tableCols[i];
      col = cols[i];
      val = colNode.getAttribute('data-value');

      if (col.type === 'number') {
        val = Number(val);
      }

      data[col.key] = val;
    }

    return data;
  } // loads all row data


  function loadData() {
    var rows = getTableBody().querySelectorAll('tr'),
        i;

    for (i = 0; i < rows.length; i += 1) {
      rows[i].data = loadRowData(rows[i]);
    }
  } // sorts the table using the data for the ith column


  function sortByIndex(index, desc) {
    var key = cols[index].key,
        sorter = function sorter(a, b) {
      a = a.data[key];
      b = b.data[key];
      return a < b ? -1 : a > b ? 1 : 0;
    },
        finalSorter = sorter,
        tableBody = document.querySelector('.coverage-summary tbody'),
        rowNodes = tableBody.querySelectorAll('tr'),
        rows = [],
        i;

    if (desc) {
      finalSorter = function finalSorter(a, b) {
        return -1 * sorter(a, b);
      };
    }

    for (i = 0; i < rowNodes.length; i += 1) {
      rows.push(rowNodes[i]);
      tableBody.removeChild(rowNodes[i]);
    }

    rows.sort(finalSorter);

    for (i = 0; i < rows.length; i += 1) {
      tableBody.appendChild(rows[i]);
    }
  } // removes sort indicators for current column being sorted


  function removeSortIndicators() {
    var col = getNthColumn(currentSort.index),
        cls = col.className;
    cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
    col.className = cls;
  } // adds sort indicators for current column being sorted


  function addSortIndicators() {
    getNthColumn(currentSort.index).className += currentSort.desc ? ' sorted-desc' : ' sorted';
  } // adds event listeners for all sorter widgets


  function enableUI() {
    var i,
        el,
        ithSorter = function ithSorter(i) {
      var col = cols[i];
      return function () {
        var desc = col.defaultDescSort;

        if (currentSort.index === i) {
          desc = !currentSort.desc;
        }

        sortByIndex(i, desc);
        removeSortIndicators();
        currentSort.index = i;
        currentSort.desc = desc;
        addSortIndicators();
      };
    };

    for (i = 0; i < cols.length; i += 1) {
      if (cols[i].sortable) {
        // add the click event handler on the th so users
        // dont have to click on those tiny arrows
        el = getNthColumn(i).querySelector('.sorter').parentElement;

        if (el.addEventListener) {
          el.addEventListener('click', ithSorter(i));
        } else {
          el.attachEvent('onclick', ithSorter(i));
        }
      }
    }
  } // adds sorting functionality to the UI


  return function () {
    if (!getTable()) {
      return;
    }

    cols = loadColumns();
    loadData(cols);
    addSortIndicators();
    enableUI();
  };
}();

window.addEventListener('load', addSorting);
},{}]