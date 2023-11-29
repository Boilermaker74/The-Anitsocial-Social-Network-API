// Setting up the Express.js application and importing necessary modules and files. 

// The express module is being imported and assigned to the express variable. 
// This module is used to create an instance of an Express application.

// The db module is being imported and assigned to the db variable. 
// This module likely contains the configuration for connecting to your MySQL database.

// The routes module is being imported and assigned to the routes variable. 
// This module likely contains the route definitions for your application.

const express = require("express");

// The db module is being imported and assigned to the db variable. 
// ./config/connection contains the configuration for connecting the MySQL database.

const db = require("./config/connection");


const routes = require("./routes");


// Heroku dynamically assigns a port to the app, so the process.env.PORT method allow
// the port to be assigned dynamically, || means if dynamic fails the port will default to 3001

const PORT = process.env.PORT || 5050;

// create an instance of the Express.js application.

const app = express();

// The lines app.use(express.urlencoded({ extended: true }));, app.use(express.json());, and app.use(routes); 
// are used to configure middleware in an Express.js application.

// The express.urlencoded() middleware is used to parse URL-encoded data submitted through HTML forms. 
// It adds a new property req.body to the request object, which contains the parsed data. 
// The extended: true option allows for nested objects in the URL-encoded data.

app.use(express.urlencoded({ extended: true }));

// The express.json() middleware is used to parse JSON data sent in the request body. 
// It also adds a new property req.body to the request object, which contains the parsed JSON data.

app.use(express.json());

// The app.use(routes); line is used to mount the routes defined in the routes module to the application. 
// It specifies that any incoming requests should be passed through the routes middleware, 
// which handles the routing logic for the application.

app.use(routes);

// Start the server once the database connection is open

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});