// from data.js
var tableData = data;

// function to display UFO sightings
var tbody = d3.select("tbody");

// add row, table data to table, and add data from dataset into table.
tableData.forEach(function(UFOs){
    var row = tbody.append("tr");
    Object.entries(UFOs).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
    
});
var button = d3.select("button");


button.on("click", function(){

    //read user input
    var userDate = d3.select("#datetime");
    var dateValue = userDate.property("value");

    // filter by user input and display what the selected value
    var filteredResults = tableData.filter(options=>options.datetime===dateValue);

    
    var rows = filteredResults.length
    if (rows>=1){

        d3.select("tbody").remove();
        var add = d3.select("table");
        var tbody2 = add.append("tbody");

        filteredResults.forEach(function(date){
            var row = tbody2.append("tr");
            Object.entries(date).forEach(function([key,value]){
                var cell = row.append("td");
                cell.text(value);
            });
        });
        // assign the output message 
        var output = d3.select(".output");
        output.html("");
        
    }
    else {
        
        d3.select("tbody").remove();
        var output = d3.select(".output");
        output.text("Nothing found that meets your results. Keep searching...the truth is out there.");
    }

    // clear the search input value
    d3.select("#datetime").node().value = "";


});