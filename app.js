const express = require("express");
const todoController = require("./controllers/todoController");
const app = express();

//set up template engine
app.set("view engine", "ejs");

// use static files
app.use(express.static("./public"))

//fire controller
todoController(app);

//start server
app.listen(3000, () => {
  console.log("server started on port:3000")
});