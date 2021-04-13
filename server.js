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

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server