export const bubbles = () => {
   console.log('bubbles is working')
     
   //let url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=GTmpcsZu5C6PWkRN8a3pHDaLwB8kCULG";

   d3.json(url).then(
      data => {
         let arr = data.results.reverse()
         console.log(arr)
         let content = document.getElementById("content");
            let size = [];
         for (let i = 0; i < 10; i++) {
            let article = document.createElement('p')
            article.innerHTML = arr[i].title;
            content.appendChild(article);
               size.push(arr[i].views)
         }

         

   // let margin = { left: 100, right: 80, top: 10, bottom: 130 };
   // let width = 1300 - margin.left - margin.right;
   // let height = 700 - margin.top - margin.bottom;

   // let chart = d3
   //         .select("#content").append("svg")
   //         .attr("height", height + margin.top + margin.bottom)
   //         .attr("width", width + margin.left + margin.right)
   //         .style("border", "1px solid black")

   // document.getElementById("content").align = 'center';
         let circle = d3.selectAll("circle")
         circle.style("fill", "steelblue")
         circle.attr("r", 30)
         console.log(size)
         // circle.attr("cx", function () {return Math.random() * 720});
         circle.data(size)
         circle.attr("r", function (d) { return d})
   
   })

   
}