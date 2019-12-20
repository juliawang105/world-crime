export const graph = () => {
     let margin = { left: 80, right: 20, top: 50, bottom: 100 };
     let height = 800 - margin.top - margin.bottom,
       width = 900 - margin.left - margin.right;
    
    let g = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    let tip = d3
      .tip()
      .attr("class", "d3-tip")
      .html(function(d) {
        let text = d.name;
        // text += " " + d.region_name;
        text += " " + d.Elderly;
        text += " " + d.Youth;
        return text;
      });

    g.call(tip);

    let x = d3
      .scaleLinear()
      .range([0, width - 40])
      .domain([1, 100]);

    let y = d3
      .scaleLinear()
      //   .base(10)
      .range([height, 0])
      .domain([0, 100]);

    let line = g
      .append("line")
      .attr("x1", 760)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", 650)
      .attr("stroke", "silver")
      .attr("stroke-width", "1");

    let area = d3
      .scaleLinear()
      .range([2 * Math.PI, 20 * Math.PI])
      .domain([1, 1400000000]);

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

}