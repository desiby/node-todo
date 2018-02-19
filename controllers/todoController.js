const bodyParser = require("body-parser");
var data = [{item: "get milk"}, {item: "do laundry"}, {item: "pay bills"}];
//bodyparser middleware
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
 
    app.get("/todo", (req,res) => {
       res.render("todo.ejs", {todos: data});
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

    app.delete("/todo", (req,res) => {
        
    });

    app.put("/todo", (req,res) => {
       
    });
}