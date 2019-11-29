export const wordCloud = () => {
  console.log("wordCloud is working");

  function words(results) {
    let layout = d3.layout
      .cloud()
      .size([750, 500])
      .words(
        results.map(function(d) {
          return {
            text: d.keyWords,
            size: d.count + Math.random() * 90,
            test: "haha"
          };
        })
      )
      .padding(5)
      .rotate(function() {
        return ~~(Math.random() * 2) * 90;
      })
      .font("Julius Sans One")
      .fontSize(function(d) {
        return d.size;
      })
      .on("end", draw);

    layout.start();

    function draw(words) {
      d3.select("#word-cloud")
        .append("svg")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr(
          "transform",
          "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"
        )
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", function(d) {
          return d.size + "px";
        })
        .style("font-family", "Julius Sans One")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) {
          return d.text;
        });
    }
  }

  let url =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=GTmpcsZu5C6PWkRN8a3pHDaLwB8kCULG";

  d3.json(url).then(data => {
    let arr = data.results.reverse();
    console.log(arr);
    let results = []; //array pojos
    for (let i = 0; i < 10; i++) {
      let keyWords = arr[i].des_facet[0];
      let count = arr[i].views;

      results.push({
        keyWords: keyWords,
        count: count
      });
    }
    words(results);
  });

};
