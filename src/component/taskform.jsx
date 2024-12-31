import { useState } from 'react';
import '../css/taskform.css'
import TaskList  from './TaskList'
import { useDispatch, useSelector } from 'react-redux';
import { addtask } from '../reducer/reducer';

const form={
    
    name:"",
    description:"",
    com:false,
}
var j=1;
export default function TaskForm(params) {
    // const taskform=[{id:1,name:'watch tv',description:"watchy tv from 10 to 11 vcjgjdjfnsafdms"}]
    // const [ data,setdata]= useState(taskform);
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
        

        dispatch(addtask(task))
        settask(form)
    
    }
    return<>

<div style={{ width:'100%',display:'flex',gap:'10em'}}> 

    <div className="container bg" >
        
        <form action="" onSubmit={handlesubmit}>
        <h1 className='txt'>Add Task</h1>
        <hr />
            <input  onChange={handleschange} className="txt" type="text" name="name" placeholder="Enter Task Name" />
            <input  onChange={handleschange} className="txt" type="text" name="description" placeholder="Enter description" />
            <button type='Submit'> create Task</button>
        </form>
    </div>
    <TaskList data={tasklist}></TaskList>
    </div>
    </>
}


