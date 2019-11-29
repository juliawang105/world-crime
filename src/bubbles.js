export const bubbles = () => {
  console.log("bubbles is working");

  let url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=GTmpcsZu5C6PWkRN8a3pHDaLwB8kCULG";

  d3.json(url).then(data => {
    let arr = data.results.reverse();
    console.log(arr)
    let results = [];
    for (let i = 0; i < 10; i++) {
      // let x = (i * 20);
      // let y = (i * 10);
      let title = arr[i].title;
      let view = arr[i].views;
      let abstract = arr[i].abstract;
      let url = arr[i].url;
      let keywords = arr[i].adx_keywords.split(';')
      results.push({
      //   x: x,
      //   y: y,
        title: title,
        view: view,
        abstract: abstract,
        url: url,
        keywords: keywords[0]
      });
    }
    let width = 960;
    let height = 500;

    let svg = d3
       .select("body")
       .append("svg")
       .attr("width", width)
       .attr("height", height);
  

    let elem = svg
      .selectAll("g")
      .data(results)

    let eleElem = elem.enter()
                      .append('g')
                  //     .attr('transform', function(d){
                  //           return 'translate('+(d.view * 10)+',4 0)'
                  //     });
    let diameter = 400;
    let circle = eleElem.append('circle')
                        .attr('r', function(d){
                              return (d.view + 5)
                        })
                        .attr("cx", function(d) {
                              return (d.view * 45)
                        })
                        .attr("cy", function(d){
                        return (d.view + 30)
                        })
                        .attr('stroke', 'black')
                        .attr('fill', 'white')
//     eleElem.append('text')
//            .attr('dx', function(d){
//                  return 60;
//            })
//            .attr('dy', function(d){
//                  return 60;
//            })
//            .text(function(d){return d.keywords})


   

//     let text = g.append('text')
//                 .text(function(d){
//                  return d.keywords
//           });

    //       let circle = d3.selectAll("circle").data(results)
    //       circle.style("fill", "none")
    //       circle.style('stroke', 'black')
    //       circle.attr("r", function (d) {
    //        return (d.view * 4)
    //       })
    //       circle.attr("cx", function(d) {
    //             return (width * d.view)
    //       })
    //       circle.attr("cy", function(d){
    //             return (height + d.view)
    //       })
    //       circle.append('text').text(function(d){
    //             return d.title
    //       });
  });
};
