import { useState } from 'react';
import '../css/tasklist.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletetask,compltask } from '../reducer/reducer';


export default function TaskList({ data }) {
    const {tasklist}=useSelector((state)=>state.task);
    const dispatch=useDispatch()
    
    const deleteTask = (id) => {
        dispatch(deletetask(id))
    };
    const completetask = (id) => {
        // const updatedData = data.map((task) => 
        //     task.id === id ? { ...task, com: true } : task
        // );
        dispatch(compltask(id))
        
    }
    if(tasklist.length===0)
    {
        return<>
         <div className='listcontainer'>
         <h1>To do</h1>
         <h4 style={{fontSize:'1.3em',color:'purple'}}>No task to show </h4>
         </div>
         </>

    }

    return (    
        <div className='listcontainer'>
            <h1>To do</h1>
            {tasklist.map((val) => {
                
                return <>
                    <div key={val.id} className={val.com ? 'ctask' : `listbody`}>
                        <div className='content'>
                            <h6>Task Name: {val?.name}</h6>
                            <p>Description: {val?.description}</p>
                        </div>
                        <div className='action'>
                            <button onClick={() => completetask(val.id)} style={{ backgroundColor: 'green',display:val.com?'none':'block' }}>Complete</button>
                            <button
                                onClick={() => deleteTask(val.id)}
                                style={{ backgroundColor: 'red' }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>


                </>
            })}
                </div>
     ) ;
}
