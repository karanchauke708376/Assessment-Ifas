const express = require("express");  // instance
const app = express();   // server create

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;  // port find out 

// middleware to parse json request body
app.use(express.json());  // body passing data

// import routes for TODO API
const todoRoutes = require("./routes/todos");

// mount the todo API routes / append
app.use("/api/v1" , todoRoutes); 

// start server
app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT}`);
})

// Connection to the database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (request , response) => {
    response.send(`<h1> This Is Homepage . . .  </h1> `);
})