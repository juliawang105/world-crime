// import * as d3 from 'd3';

document.addEventListener('DOMContentLoaded', () => {
    console.log("webpack is working");
    let margin = { left: 80, right: 20, top: 50, bottom: 100 };
    let height = 500 - margin.top - margin.bottom,
      width = 800 - margin.left - margin.right;

    //let flag = true

    let g = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    let x = d3
      .scaleLog()
      .base(10)
      .range([0, width])
      .domain([142, 150000]);

    let y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, 90]);

    let area = d3
      .scaleLinear()
      .range([25 * Math.PI, 1500 * Math.PI])
      .domain([2000, 1400000000]);

    let xLabel = g
      .append("text")
      .attr("y", height + 50)
      .attr("x", width / 2)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("GDP Per Capita($)");

    //Y Label
    let yLabel = g
      .append("text")
      .attr("y", -40)
      .attr("x", -170)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Life expectancy");

    let xAxis = d3
      .axisBottom(x)
      .tickValues([400, 4000, 40000])
      .tickFormat(d3.format("$"));

    g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    //Y-Axis
    let yAxis = d3.axisLeft(y).tickFormat(function(d) {
      return +d;
    });

    g.append("g")
      .attr("class", "y axis")
      .call(yAxis);
    

});




    