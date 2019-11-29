export const Test = () => {
    let data = [80, 100, 56, 120];

    let svgWidth = 500, svgHeight = 300, barPadding = 5;
    let barWidth = svgWidth/ data.length;

    let svg = d3.select('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight);

    let barChart = svg.selectAll('rect')
                      .data(data)
                      .enter()
                      .append('rect')
                      .attr('y', function(d) {
                          return svgHeight - d
                      })
                      .attr('height', function(d){
                          return d
                      })
                      .attr('width', barWidth - barPadding)
                      .attr('class', 'bar')
                      .attr('transform', function(d, i){
                          let translate = [barWidth * i, 0];
                          return 'translate(' + translate + ')';
                      });
    
    let text = svg.selectAll('text')
                  .data(data)
                  .enter()
                  .append('text')
                  .text(function(d) {
                      return d
                  })
                  .attr("y", function (d, i){
                      return svgHeight -d - 2
                  })
                  .attr('y', function(d, i) {
                      return barWidth * i
                  })
                  .attr("fill", '#A64C38')
}