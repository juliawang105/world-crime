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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
var play = function play() {
  var button = document.getElementById("play-button");
  console.log(button); //   if (button.innerText === "Play") {
  //     button.innerText("Pause");
  //     let interval = setInterval(step, 100);
  //   } else {
  //     button.innerText("Play");
  //     clearInterval(interval);
  //   };

  button.addEventListener('click', function (event) {
    console.log('click');
    setInterval(step, 100);
  });
};
1;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _literacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./literacy */ "./src/literacy.js");

document.addEventListener('DOMContentLoaded', function () {
  console.log("webpack is working");
  Object(_literacy__WEBPACK_IMPORTED_MODULE_0__["Literacy"])();
});

/***/ }),

/***/ "./src/literacy.js":
/*!*************************!*\
  !*** ./src/literacy.js ***!
  \*************************/
/*! exports provided: Literacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literacy", function() { return Literacy; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");

var Literacy = function Literacy() {
  var button = document.getElementById("play-button");
  console.log(button);

  function step() {
    // At the end of our data, loop back
    time = time < 15 ? time + 1 : 0;
    update(finalData[time]);
  }

  button.addEventListener("click", function (event) {
    console.log("click");
    setInterval(step, 100);
  });
  console.log('hello');
  var margin = {
    left: 80,
    right: 20,
    top: 50,
    bottom: 100
  };
  var height = 800 - margin.top - margin.bottom,
      width = 900 - margin.left - margin.right;
  var time = 0;
  var interval;
  var finalData;
  var g = d3.select("#chart-area").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
  var tip = d3.tip().attr("class", "d3-tip").html(function (d) {
    var text = d.name; // text += " " + d.region_name;

    text += " " + d.Elderly;
    text += " " + d.Youth;
    return text;
  });
  g.call(tip);
  var x = d3.scaleLinear().range([0, width - 40]).domain([1, 100]);
  var y = d3.scaleLinear() //   .base(10)
  .range([height, 0]).domain([0, 100]);
  var line = g.append("line").attr("x1", 760).attr("y1", 0).attr("x2", 0).attr("y2", 650).attr("stroke", "silver").attr("stroke-width", "1");
  var area = d3.scaleLinear().range([2 * Math.PI, 20 * Math.PI]).domain([1, 1400000000]);
  var xLabel = g.append("text").attr("y", height + 50).attr("x", width / 2).attr("font-size", "20px").attr("text-anchor", "middle").text("Youth Literacy Rate"); //Y Label

  var yLabel = g.append("text").attr("y", -40).attr("x", -170).attr("font-size", "20px").attr("text-anchor", "middle").attr("transform", "rotate(-90)").text("Elderly Literacy Rate");
  var xAxis = d3.axisBottom(x).ticks(10).tickFormat(function (d) {
    return +d;
  });
  g.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
  var timeLabel = g.append("text").attr("y", height - 10).attr("x", width - 40).attr("font-size", "40px").attr("opacity", "0.4").attr("text-anchor", "middle").text("2003"); //Y-Axis

  var yAxis = d3.axisLeft(y).ticks(10).tickFormat(function (d) {
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
  d3.csv("data/literacy.csv").then(function (data) {
    // console.log(data)
    var sortedData = [{
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
    }];

    for (var i = 0; i < data.length; i++) {
      var pojo = data[i];

      for (var j = 0; j < sortedData.length; j++) {
        if (parseInt(pojo.Year) === sortedData[j].year) {
          sortedData[j].countries.push(pojo);
        }
      }
    }

    finalData = sortedData.map(function (year) {
      return year["countries"].filter(function (country) {
        var dataExists = country.Elderly !== "NA" && country.Youth !== "NA";
        return dataExists;
      }).map(function (country) {
        country.Elderly = +country.Elderly;
        country.Youth = +country.Youth;
        country.Pop = +country.Pop;
        return country;
      });
    }); // console.log(finalData[])

    update(finalData[0]); // d3.interval(function() {
    //    // At the end of our data, loop back
    //    time = time < 15 ? time + 1 : 0;
    //    update(finalData[time]);
    //  }, 200);
    // console.log(finalData);
  });

  function update(data) {
    var t = d3.transition().duration(100);
    var circles = g.selectAll("circle").data(data, function (d) {
      return d.Entity;
    });
    circles.exit().remove();
    circles.enter().append("circle").attr("fill", function (d) {
      return regionColor(d.region);
    }).merge(circles).attr("cy", function (d) {
      return y(d.Elderly);
    }).attr("cx", function (d) {
      return x(d.Youth);
    }).attr("r", function (d) {
      return area(d.Pop);
    }).on("mouseover", tip.show).on("mouseout", tip.hide);
    timeLabel.text(+(time + 2000));
  }
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map