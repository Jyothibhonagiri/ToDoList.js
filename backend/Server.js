const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

const todoRoutes = require("./routes/todos");


app.use(cors())

app.use("/todos",todoRoutes);


app.get("/",function(req,res){
    res.send("helloooooo todo")
})

app.listen(7000,()=>{
    console.log("server is running on port 7000!!")
})