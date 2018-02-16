module.exports = function(app) {
    
    app.get("/todo", (req,res) => {
       res.render("todo.ejs");
    });

    app.post("/todo", (req,res) => {
        
    });

    app.delete("/todo", (req,res) => {
        
    });

    app.delete("/todo", (req,res) => {
        
    });

    app.put("/todo", (req,res) => {
       
    });
}