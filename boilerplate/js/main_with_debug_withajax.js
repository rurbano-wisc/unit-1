//creates an array for cities and population calling it cities, associates each city w/ a population 
//initialize function called when the script loads
function initialize(){
    cities();
};

//creates table with cities and populations functions as cityPop
//places function inside cities
function cities(){
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];
//calls the cityPop function aka the array but it is not making it yet
    //object within an array
    //
    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

 //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");
        //adds cities to that column
        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city;
        tr.appendChild(city);
        //adds population to corresponding column
        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var myDiv =  document.getElementById("table");
    myDiv.appendChild(table);
    ///
    function addColumns(cityPop){
  //use of querySelector allows me to isolate tr elements      
        document.querySelectorAll("tr").forEach(function(row, i){
//conditional statements which determines how to add the rows based on the statements
            if (i == 0) {
                //simplified command beforeend is the first position to insert HTML as last child of selected element in this case: inserts column City Size as the header 
                //insertAdjacemtHTML replaced
                row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
            } else {
                //creates citySize var
                var citySize;
                //creates various sizes associated with city based on population
                //less than 100,000 = small
                if (cityPop[i-1].population < 100000){
                    citySize = 'Small';
                //offsets index, which starts at zero; if less than 500,000k and greater than 100k = medium
                } else if (cityPop[i-1].population < 500000){
                    citySize = 'Medium';
                 //if greater than 500,000 it is large
                } else {
                    citySize = 'Large';
                };
//data inserted finally with this line
                row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
            };
        });
    };
    //calls actual function
    addColumns(cityPop);
//creates function 
    function addEvents(){
        //adds event listener, applies action aka the mousover and color in this case
        document.querySelector("table").addEventListener("mouseover", function(){
            //variable for color
            var color = "rgb(";
            //loop that grabs the records, scoped to the immediate body function
            for (var i=0; i<3; i++){
                //creating var random as a formula using built-in math functions to assign a color; random color generator by selecting a random # 3 times
                var random = Math.round(Math.random() * 255);
                //adds the value of the right operand to a variable and assigns the result to the variable
                color += random;
                // if i<2 assign ,
                if (i<2) {
                    color += ",";
                //otherwise assign )
                } else {
                    color += ")";
                }
            };
            //give table random generated color
            document.querySelector("table").style.color = color;
        });
        //creates clickme function
        function clickme(){

            alert('Hey, you clicked me!');
        };
        //calls the actual clickme function to be used, assigning the click event handler function 
        document.querySelector("table").addEventListener("click", clickme)
    };
    //calls function again
    addEvents();
    
   //activity #4  
    
    
   //creates debugCallback(response) 
    function debugCallback(response){
        document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
    };
    //I think this was needed to call the function, should make the function work as expected
    debugCallback();

    //creates function
    function debugAjax(){
        //variable for myData
        var myData;
        //retrieves the geojson data; steps through and uses the debugCallback; 
        fetch("data/MegaCities.geojson")
            .then(function(response){ //stringify static method converts a JavaScript value to a JSON string 
            
            //I think I need to return the values or make us of callback
                //return response.json();
       // })
            //.then(function(response)){
              //myData = response;
    //debugAjax(); //sends retrieved data to callback function
            //check the data
            console.log(JSON.stringify(myData))
            }) //<--- do I need ; here?
        //needed , between 'beforeend' and the <br> GeoJSON data:<br>' 
        //this is SUPPOSED TO be essentially the header of the GeoJSON data: section.
        document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
    };

        document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
    debugAjax();
    
}
//do everything contained in the curly braces
document.addEventListener('DOMContentLoaded',initialize)