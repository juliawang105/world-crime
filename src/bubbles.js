export const bubbles = () => {
   console.log('bubbles is working')
   // let url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=GTmpcsZu5C6PWkRN8a3pHDaLwB8kCULG";

   // d3.json(url).then(
   //    data => {
   //       let arr = data.results.reverse()
   //       console.log(arr)
   //       let content = document.getElementById("content");
   //       for (let i = 0; i < 10; i++) {
   //          let article = document.createElement('p')
   //          article.innerHTML = arr[i].title;
   //          content.appendChild(article)
   //       }
   //    }
   // )
      
   // let circleData = [
   //    {"cx:": 20, "cy": 20, "radius": 20, "color": "green"},
   //    { "cx": 70, "cy": 70, "radius": 20, "color": "purple" }];

   
   let svgContainer = d3.selectAll('.name').style("color", "green").append('svg')
                                                                   .attr('width', 200)
                                                                   .attr("height",200)
                                                                  //  .attr('border')

   
   
  
   let circle = svgContainer.append('circle')
                            .attr('cx', 30)
                            .attr('cy', 30)
                            .attr('r', 70)
                            .append("p")

   



};