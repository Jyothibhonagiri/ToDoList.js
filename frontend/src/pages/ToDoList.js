import { useState,useEffect } from "react"


function ToDoList(){
   const[todos,setTodos] = useState([])
   const getAllToDos=()=>{
    fetch("http://localhost:7000/todos/list").then(function(res){
        return res.json();
    }).then(function(result){
        setTodos(result)
    })
   }
   useEffect(()=>{
      getAllToDos();
   },[])

   const deleteTodo=(id)=>{
    fetch("http://localhost:7000/todos/delete/"+id,{method:"DELETE"}).then(function(res){
        return res.json();
    }).then(function(result){
        setTodos();
    }
    )
   }
    return(
        <div className="container">
            {todos.length===0&&<h4>no todos available</h4>}
        
        {todos.length >0&& <div className="row">
            <table  class="table table-hover">
            <h4>My Todo's</h4>
                <thead>
                    <tr>
                        <th> Id</th>
                        <th>Task Name </th>
                        <th>Task Description </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {todos.map((item)=>{
                    return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.taskname}</td>
                        <td>{item.taskdescription}</td>
                        <td><button className="btn btn-danger" onClick={()=>deleteTodo(item.id)}>Delete</button></td>
                    </tr>
                    )
                   } )}
                </tbody>
            </table>
         </div>}
        </div>
    )
}
export default ToDoList