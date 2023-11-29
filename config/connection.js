
// The code is an example of how to connect to a MongoDB database using Mongoose. 
// It establishes a connection to the "socialnetworkDB" database running on the local machine at "mongodb://127.0.0.1:27017".

// The mongoose package is being imported in the code snippet you provided. 
// This package is used to connect to a MongoDB database and work with data using the Mongoose ODM (Object Data Modeling).

const mongoose = require('mongoose');

// mongoose.set('strictQuery,true')
// The mongoose.connect() method is used to connect to the MongoDB database. 
// It takes two arguments: the connection string and an options object. 
// In this case, the useNewUrlParser and useUnifiedTopology options are set to true 
// to ensure compatibility with the latest version of MongoDB.

mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// The module.exports is used to export the connection object, 
// allowing other parts of the application to use it to interact with the database.

module.exports = mongoose.connection;
