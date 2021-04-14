/* --------------------------------------------------------------
TODO

1.- Setup empty JS object to act as endpoint for all routes
2.- Express to run server and routes
3.- Start up an instance of app
    Dependencies
    Middleware
4.- Here we are configuring express to use body-parser as middle-ware.
5.- Cors for cross origin allowance
6.- Initialize the main project folder
7.- Spin up the server
8.- Callback to debug
9.- Initialize all route with a callback function
10.- Callback function to complete GET '/all'
11.- Post Route
------------------------------------------------------------------- */

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

//Dependencies
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*
How body-parser is deprecated you could also use this way:
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
*/

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

//Callback to debug
function listening(){
    console.log("server running...");
    console.log(`running on localhost: ${port}`);
}

// ROUTES

/*---------------------------------
  GET Route
----------------------------------*/

app.get('/getWeatherData', (request, response) => {
    console.log(projectData);
    response.send(projectData);
});

/*-----------------------------------------
  POST Route
-------------------------------------------*/

app.post('/addWeatherData', addWeatherData);

function addWeatherData(request, response){
    let data = request.body;
    let newEntry = {
        date: data.date,
        temp: data.temp,
        content: data.content,
    }
    projectData['zone'] = newEntry;
    response.send(projectData);
}
