/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homicide.js":
/*!*************************!*\
  !*** ./src/homicide.js ***!
  \*************************/
/*! exports provided: Homicide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Homicide", function() { return Homicide; });
var Homicide = function Homicide() {
  d3.csv("data/homicide.csv").then(function (data) {
    console.log(data);
    console.log(data[0]);
    var sortedData = [{
      year: 1990,
      countries: []
    }, {
      year: 1991,
      countries: []
    }, {
      year: 1992,
      countries: []
    }, {
      year: 1993,
      countries: []
    }, {
      year: 1994,
      countries: []
    }, {
      year: 1995,
      countries: []
    }, {
      year: 1996,
      countries: []
    }, {
      year: 1997,
      countries: []
    }, {
      year: 1998,
      countries: []
    }, {
      year: 1999,
      countries: []
    }, {
      year: 2000,
      countries: []
    }, {
      year: 2001,
      countries: []
    }, {
      year: 2002,
      countries: []
    }, {
      year: 2003,
      countries: []
    }, {
      year: 2004,
      countries: []
    }, {
      year: 2005,
      countries: []
    }, {
      year: 2006,
      countries: []
    }, {
      year: 2007,
      countries: []
    }, {
      year: 2008,
      countries: []
    }, {
      year: 2009,
      countries: []
    }, {
      year: 2010,
      countries: []
    }, {
      year: 2011,
      countries: []
    }, {
      year: 2012,
      countries: []
    }, {
      year: 2013,
      countries: []
    }, {
      year: 2014,
      countries: []
    }, {
      year: 2015,
      countries: []
    }, {
      year: 2016,
      countries: []
    }, {
      year: 2017,
      countries: []
    }];

    for (var i = 0; i < data.length; i++) {
      var pojo = data[i];

      for (var j = 0; j < sortedData.length; j++) {
        if (parseInt(pojo.Year) === sortedData[j].year) {
          sortedData[j].countries.push(pojo);
        }
      }
    }

    var finalData = sortedData.map(function (year) {
      return year["countries"].filter(function (country) {
        var dataExists = country.Count && country.Rate;
        return dataExists;
      }).map(function (country) {
        country.Count = +country.Count;
        country.Rate = +country.Rate;
        return country;
      });
    });
    console.log(finalData);
  });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _homicide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homicide */ "./src/homicide.js");


document.addEventListener('DOMContentLoaded', function () {
  console.log("webpack is working");
  Object(_main__WEBPACK_IMPORTED_MODULE_0__["Main"])(); //Homicide()
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
var Main = function Main() {
  var margin = {
    left: 80,
    right: 20,
    top: 50,
    bottom: 100
  };
  var height = 800 - margin.top - margin.bottom,
      width = 1000 - margin.left - margin.right; //let flag = true

  var g = d3.select("#chart-area").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
  var tip = d3.tip().attr("class", "d3-tip").html(function (d) {
    var text = d.country_name;
    text += " " + d.region_name;
    text += " " + d.Count;
    text += " " + d.Rate;
    return text;
  });
  g.call(tip);
  var x = d3.scaleLog().base(100).range([0, width]).domain([1, 80000]);
  var y = d3.scaleLinear() //   .base(10)
  .range([height, 0]).domain([0, 1000]);
  var area = d3.scaleLinear().range([25 * Math.PI, 1500 * Math.PI]).domain([2000, 1400000000]);
  var xLabel = g.append("text").attr("y", height + 50).attr("x", width / 2).attr("font-size", "20px").attr("text-anchor", "middle").text("Crime Count"); //Y Label

  var yLabel = g.append("text").attr("y", -40).attr("x", -170).attr("font-size", "20px").attr("text-anchor", "middle").attr("transform", "rotate(-90)").text("Crime Rate per 100,000 ");
  var xAxis = d3.axisBottom(x).tickValues([100, 500, 10000]).tickFormat(function (d) {
    return +d;
  });
  g.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
  var timeLabel = g.append("text").attr("y", height - 10).attr("x", width - 40).attr("font-size", "40px").attr("opacity", "0.4").attr("text-anchor", "middle").text("2003"); //Y-Axis

  var yAxis = d3.axisLeft(y).tickValues([0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]).tickFormat(function (d) {
    return +d;
  });
  g.append("g").attr("class", "y axis").call(yAxis);
  var regions = ["Europe", "Asia", "Americas", "Africa", "Oceania"];
  var regionColor = d3.scaleOrdinal(d3.schemeDark2);
  var legend = g.append("g").attr("transform", "translate(" + (width - 10) + "," + (height - 200) + ")");
  regions.forEach(function (region, i) {
    var legendRow = legend.append("g").attr("transform", "translate(0, " + i * 20 + ")");
    legendRow.append("rect").attr("width", 10).attr("height", 10).attr("fill", regionColor(region));
    legendRow.append("text").attr("x", -10).attr("y", 10).attr("text-anchor", "end").style("text-transform", "capitalize").text(region);
  });
  d3.csv("data/assaults.csv").then(function (data) {
    //   console.log(data);
    var sortedData = [{
      year: 2003,
      countries: []
    }, {
      year: 2004,
      countries: []
    }, {
      year: 2005,
      countries: []
    }, {
      year: 2006,
      countries: []
    }, {
      year: 2007,
      countries: []
    }, {
      year: 2008,
      countries: []
    }, {
      year: 2009,
      countries: []
    }, {
      year: 2010,
      countries: []
    }, {
      year: 2011,
      countries: []
    }, {
      year: 2012,
      countries: []
    }, {
      year: 2013,
      countries: []
    }, {
      year: 2014,
      countries: []
    }, {
      year: 2015,
      countries: []
    }, {
      year: 2016,
      countries: []
    }, {
      year: 2017,
      countries: []
    }];

    for (var i = 0; i < data.length; i++) {
      var pojo = data[i];

      for (var j = 0; j < sortedData.length; j++) {
        if (parseInt(pojo.Year) === sortedData[j].year) {
          sortedData[j].countries.push(pojo);
        }
      }

      ;
    }

    ;
    var finalData = sortedData.map(function (year) {
      return year["countries"].filter(function (country) {
        var dataExists = country.Count && country.Rate;
        return dataExists;
      }).map(function (country) {
        country.Count = +country.Count;
        country.Rate = +country.Rate;
        return country;
      });
    });
    console.log(finalData);
    update(finalData[0]);
  });

  function update(data) {
    var t = d3.transition().duration(100);
    var circles = g.selectAll('circle').data(data, function (d) {
      return d.country_name;
    });
    circles.exit().remove();
    circles.enter().append("circle").attr('fill', function (d) {
      return regionColor(d.region_name);
    }).merge(circles).attr("cy", function (d) {
      return y(d.Rate);
    }).attr("cx", function (d) {
      return x(d.Count);
    }).attr("r", function (d) {
      return 5;
    }).on("mouseover", tip.show).on("mouseout", tip.hide);
  }
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map