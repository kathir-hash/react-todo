import { useEffect, useState } from 'react';
import '../css/taskform.css'
import TaskList  from './TaskList'
import { useDispatch, useSelector } from 'react-redux';
import { addtask } from '../reducer/reducer';

const form={
    
    name:"",
    com:false,
}
var j=1;
export default function TaskForm(params) {
    


    const [task,settask]=useState(form);

    const {tasklist}=useSelector((state)=>state.task);
    const dispatch=useDispatch()

   const  handleschange=(e)=>{
    const {name,value} =e.target;
    settask((prev) => {
        return {
          ...prev,

          [name]: value,
        };
      });
    
   }
   const all = ()=>{
   }
   const j =useEffect(()=>{all()},
   [])

    const handlesubmit=(e)=>{
        e.preventDefault()
        if(task.name==="")
        {
            console.log("err")
            return 
        }
        if(task.description==="")
            {
                console.log("err")
                return 
            }
        console.log(task)

        dispatch(addtask(task))
        settask(form)
    
    }
    return<>

<div style={{ width:'95%',display:'flex',margin:'3em',gap:'4em',justifyContent:'flex-start',backgroundColor:'#daebad',borderRadius:'10px'}}> 

    <div className="container bg" >
        
        <form action="" onSubmit={handlesubmit}>
        <h1 className='txt'>Add Task</h1>
        <hr />
            <input  onChange={handleschange} className="txt" type="text" name="name" placeholder="Enter Task Name" />
            {/* <input  onChange={handleschange} className="txt" type="text" name="description" placeholder="Enter description" /> */}
            <button type='Submit'> create Task</button>
        </form>
    </div>
    <TaskList data={tasklist}></TaskList>
    </div>
    </>
}


