export const Literacy = () => {
     let margin = { left: 80, right: 20, top: 50, bottom: 100 };
     let height = 800 - margin.top - margin.bottom,
       width = 1000 - margin.left - margin.right;

     let time = 0;

     let g = d3
       .select("#chart-area")
       .append("svg")
       .attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom)
       .append("g")
       .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

     //    let tip = d3
     //      .tip()
     //      .attr("class", "d3-tip")
     //      .html(function(d) {
     //        let text = d.country_name;
     //        text += " " + d.region_name;
     //        text += " " + d.Count;
     //        text += " " + d.Rate;
     //        return text;
     //      });

     //    g.call(tip);

     let x = d3
       .scaleLinear()
       .range([0, width])
       .domain([1, 100]);

     let y = d3
       .scaleLinear()
       //   .base(10)
       .range([height, 0])
       .domain([0, 100]);

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
       .text("Youth Literacy Rate");

     //Y Label
     let yLabel = g
       .append("text")
       .attr("y", -40)
       .attr("x", -170)
       .attr("font-size", "20px")
       .attr("text-anchor", "middle")
       .attr("transform", "rotate(-90)")
       .text("Elderly Literacy Rate");

     let xAxis = d3
       .axisBottom(x)
       .ticks(10)
       .tickFormat(function(d) {
         return +d;
       });

     g.append("g")
       .attr("class", "x axis")
       .attr("transform", "translate(0," + height + ")")
       .call(xAxis);

     let timeLabel = g
       .append("text")
       .attr("y", height - 10)
       .attr("x", width - 40)
       .attr("font-size", "40px")
       .attr("opacity", "0.4")
       .attr("text-anchor", "middle")
       .text("2003");

     //Y-Axis
     let yAxis = d3
       .axisLeft(y)
       .ticks(10)
       .tickFormat(function(d) {
         return +d;
       });

     g.append("g")
       .attr("class", "y axis")
       .call(yAxis);
  d3.csv("data/literacy.csv").then( data => {
      console.log(data)
      

      let sortedData = [
        { year: 2000, countries: [] },
        { year: 2001, countries: [] },
        { year: 2002, countries: [] },
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
            let dataExists = country.Elderly && country.Youth;
            return dataExists;
          })
          .map(function(country) {
            country.Elderly = +country.Elderly;
            country.Youth= +country.Youth;
            country.Pop = +country.Pop;
            return country;
          });
      });

      
      update(finalData[0])
      console.log(finalData);
  });

 function update(data) {
   let t = d3.transition().duration(100);

   let circles = g.selectAll("circle").data(data, function(d) {
     return d.Entity;
   });

   circles.exit().remove();

   circles
     .enter()
     .append("circle")
    //  .attr("fill", function(d) {
    //    return regionColor(d.region_name);
    //  })
     .merge(circles)
     .attr("cy", function(d) {
       return y(d.Elderly);
     })
     .attr("cx", function(d) {
       return x(d.Youth);
     })
     .attr("r", function(d) {
         let pop = (d.Pop/10000000) * 3
       return (pop);
     })
    //  .on("mouseover", tip.show)
    //  .on("mouseout", tip.hide);

   timeLabel.text(+(time + 2003));
 }
};
