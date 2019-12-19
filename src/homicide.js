export const Homicide = () => {
    d3.csv("data/homicide.csv").then( data => {
        console.log(data)
        console.log(data[0])

        let sortedData = [
          { year: 1990, countries: [] },
          { year: 1991, countries: [] },
          { year: 1992, countries: [] },
          { year: 1993, countries: [] },
          { year: 1994, countries: [] },
          { year: 1995, countries: [] },
          { year: 1996, countries: [] },
          { year: 1997, countries: [] },
          { year: 1998, countries: [] },
          { year: 1999, countries: [] },
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
        console.log(finalData);
    })
}