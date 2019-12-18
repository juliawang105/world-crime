import { json } from "body-parser";

export const Main = () => {
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
      .text("Crime Rates");

    //Y Label
    let yLabel = g
      .append("text")
      .attr("y", -40)
      .attr("x", -170)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Crime Count");

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

    d3.csv("data/assaults.csv").then(function(data) {
      console.log(data);
      let sortedData = [
          {year: 2000, countries: []},
          {year: 2001, countries: []},
          {year: 2002, countries: []},
          {year: 2003, countries: []},
          {year: 2004, countries: []},
          {year: 2005, countries: []},
          {year: 2006, countries: []},
          {year: 2007, countries: []},
          {year: 2008, countries: []},
          {year: 2009, countries: []},
          {year: 2010, countries: []},
          {year: 2011, countries: []},
          {year: 2012, countries: []},
          {year: 2013, countries: []},
          {year: 2014, countries: []},
          {year: 2015, countries: []},
          {year: 2016, countries: []},
          {year: 2017, countries: []},
      ];

      console.log(sortedData)
      console.log(sortedData[0].year)
      console.log(data[0])

      for(let i = 0; i < data.length; i ++ ){
          let pojo = data[i];
    
          for (let j = 0; j < sortedData.length; j ++ ){
              if(parseInt(pojo.Year) === sortedData[j].year ){
                sortedData[j].countries.push(pojo)
              }
          };
          
      };

    console.log(sortedData)
    });
        
}