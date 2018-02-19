const bodyParser = require("body-parser");
const mongojs = require("mongojs");
const db = mongojs("todo",["todoCollection"])

//bodyparser middleware
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
 
    app.get("/todo", (req,res) => {
       db.todoCollection.find((err,docs) =>{
           if(err){
               console.log(err);
           }else{
              res.render("todo.ejs", {todos: docs});
           }
       }) 
       
    });

    app.post("/todo", urlEncodedParser, (req,res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete("/todo/:item", (req,res) => {
        data = data.filter((todo) => {
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        res.json(data)
    });
}