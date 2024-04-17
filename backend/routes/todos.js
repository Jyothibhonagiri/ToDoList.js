const express = require("express");

const router = express.Router();
const todos =[]

router.get("/list",function(req,res){
    res.send(todos)
})

router.post("/create",function(req,res){
    console.log(req.body)
    todos.push({taskdescription:req.body.taskdescription,taskname:req.body.taskname,id:todos.length ? todos.length+1 : 1})
    res.send("coming soon create todos")
})

router.delete("/delete/:id",function(req,res){
    console.log(req.params);
    let filteredtodos=todos.filter((item)=>{
        return item.id!== req.params.id
    })
    todos = filteredtodos;
    res.send(filteredtodos)
})

module.exports = router