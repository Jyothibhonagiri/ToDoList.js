 import { useState } from "react"
 
 function CreateToDo(){
   const[taskname,setTaskname] = useState("")
   const[taskdescription,setDescription]= useState("")

const handletaskname=(e)=>{
setTaskname(e.target.value)
}

const handletaskdescription=(e)=>{
setDescription(e.target.value)
}

const CreateToDo =()=>{
    console.log(taskname,taskdescription)
    fetch("http://localhost:7000/todos/create",{method:"POST",headers:{"content-type":"application/json"},
    body:JSON.stringify({taskname,taskdescription})}).then(function(res){
        return res.json();
    }).then(function(result){
        console.log("data saved successfully")
        resetData();
    })
}
const resetData=()=>{
    setDescription("")
    setTaskname("")
}
    return(
        <div className="container">
            <div className="row">
                <h1>TODO'S</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label> Task Name</label>
                    <input type="text" className="form-control" value={taskname} onChange={handletaskname}/>
                </div>
                <div className="col-md-6">
                    <label> Task Description</label>
                    <input type="text" className="form-control" value={taskdescription} onChange={(e)=>handletaskdescription(e)}/>
                </div>
                <div className="col-md-3 mt-4">
                    <button className="btn btn-success" onClick={()=>{CreateToDo()}}>create</button>
                </div>
            </div>
        </div>
    )
}
export default CreateToDo