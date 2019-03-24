// from data.js
// YOUR CODE HERE!


// POPULATING DATA
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}
populate(data);

// FILTER DATA
var filterbtn = d3.select("#filter-btn");
var filterDate = d3.select("#datetime"); 



filterbtn.on("click",() => {
	d3.event.preventDefault();
	var inputDate = filterDate.property("value");
	var datefilter = data.filter(data => data.datetime === inputDate);
	console.log(datefilter)
	tbody.html("");
	populate(datefilter);
	})
