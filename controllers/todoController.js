const bodyParser = require("body-parser");
const mongojs = require("mongojs");
const db = mongojs("todo",["todoCollection"])

//bodyparser middleware
var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    //get all todos
    app.get("/todo", (req,res) => {
       db.todoCollection.find((err,docs) =>{
           if(err){
               console.log(err);
           }else{
              res.render("todo.ejs", {todos: docs});
           }
       }) 
       
    });

    //add a todo
    app.post("/todo", urlEncodedParser, (req,res) => {
        db.todoCollection.insert({item: req.body.item}, (err)=> {
            if (err){
                throw err;
            }else{
                res.redirect("/todo");
            }
        });
    });

    //delete a todo
    app.delete("/todo/:item", (req,res) => {
        db.todoCollection.remove({item: req.params.item.replace(/\-/g, " ")}, (err) => {
            if (err){
                throw err;
            }else{
                res.redirect("/todo");
                
            }
        });
        
    });

}