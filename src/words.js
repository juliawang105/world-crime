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

 return results;
});
