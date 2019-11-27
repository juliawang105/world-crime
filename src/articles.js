// let json = {
//     'children': [
//         {'name': 'Suicides', 'value': 70},
//         {'name': 'Supreme Court', 'value': 40},
//     ]
// }

// let diameter = 600,
//     color = d3.scaleOrdinal(d3.schemeCategory20c);

// let colorScale = d3.scaleLinear()
//     .domain([0, d3.max(json.children, function(d){
//         return d.value;
//     })])
//     .range(["rgb(46,73,123)", "rgb(71, 187, 94"])

// let bubble = d3.pack()
//     .size([diameter, diameter])
//     .padding(5)

// let margin = {
//     left: 0,
//     right: 100,
//     top: 0,
//     bottom: 0
// };

// let svg = d3.select('#content').append('svg')
//     .attr('viewBox', '0 0 ' + (diameter.margin.right) + ' ' + diameter)
//     .attr('width', (diameter + margin.right))
//     .attr('height', diameter)
//     .attr('class', 'chart-svg');


// var root = d3
//   .hierarchy(json)
//   .sum(function(d) {
//     return d.value;
//   })
//   .sort(function(a, b) {
//     return b.value - a.value;
//   });

// bubble(root)