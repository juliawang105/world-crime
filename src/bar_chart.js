export const BarChart = () => {

let margin = { left: 100, right: 10, top: 10, bottom: 150 };

let width = 800 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;

let g = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// X Label
g.append("text")
  .attr("class", "x axis-label")
  .attr("x", width / 2)
  .attr("y", height + 140)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Country");

// Y Label
g.append("text")
  .attr("class", "y axis-label")
  .attr("x", -(height / 2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Crime Rate");

 d3.csv("data/assaults.csv").then(function(data) {
   console.log(data);

  let sortedData = [
    { year: 2003, countries: [] },
    { year: 2004, countries: [] },
    { year: 2005, countries: [] },
    { year: 2006, countries: [] },
    { year: 2007, countries: [] },
    { year: 2008, countries: [] },
    { year: 2009, countries: [] },
    { year: 2010, countries: [] },
    { year: 2011, countries: [] },
    { year: 2012, countries: [] },
    { year: 2013, countries: [] },
    { year: 2014, countries: [] },
    { year: 2015, countries: [] },
    { year: 2016, countries: [] },
    { year: 2017, countries: [] }
  ];

  for (let i = 0; i < data.length; i++) {
    let pojo = data[i];

    for (let j = 0; j < sortedData.length; j++) {
      if (parseInt(pojo.Year) === sortedData[j].year) {
        sortedData[j].countries.push(pojo);
      }
    }
  }

  let finalData = sortedData.map(function(year) {
    return year["countries"]
      .filter(function(country) {
        let dataExists = country.Count && country.Rate;
        return dataExists;
      })
      .map(function(country) {
        country.Count = +country.Count;
        country.Rate = +country.Rate;
        return country;
      });
  });
   let x = d3
     .scaleBand()
     .domain(
       data.map(function(d) {
         return d.region_name;
       })
     )
     .range([0, width])
     .paddingInner(0.3)
     .paddingOuter(0.3);

   let y = d3
     .scaleLinear()
     .domain([
       0,
       2000
     ])
     .range([height, 0]);

   let xAxisCall = d3.axisBottom(x);
   g.append("g")
     .attr("class", "x axis")
     .attr("transform", "translate(0, " + height + ")")
     .call(xAxisCall)
     .selectAll("text")
     .attr("y", "10")
     .attr("x", "-5")
     .attr("text-anchor", "end")
     .attr("transform", "rotate(-40)");

   let yAxisCall = d3
     .axisLeft(y)
    //  .ticks(3)
    //  .tickFormat(function(d) {
    //    return d + "m";
    //  });
   g.append("g")
     .attr("class", "y-axis")
     .call(yAxisCall);

   let rects = g.selectAll("rect").data(data);

   rects
     .enter()
     .append("rect")
     .attr("y", function(d) {
       return y(d.Rate);
     })
     .attr("x", function(d) {
       return x(d.region_name);
     })
     .attr("width", x.bandwidth)
     .attr("height", function(d) {
       return height - y(d.Rate);
     })
     .attr("fill", "grey");
 });
}