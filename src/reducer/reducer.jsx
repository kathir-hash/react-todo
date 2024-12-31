import { createSlice } from "@reduxjs/toolkit";

const form={   
task:null,
tasklist:[{id:1,name:'watch tv' ,description:'watch tv',com:false}]
} 
 const taskslice=createSlice({
    name:"task",
    initialState:form,
    reducers:{
        addtask(state,action){
            state.task={...action.payload,id:state.tasklist.length+1}
            state.tasklist=[...state.tasklist,state.task]
            console.log(state.tasklist)
        },
        deletetask(state,action){
            console.log('delete')
           state.tasklist=  state.tasklist.filter((val)=>val.id!==action.payload)
        },
        compltask(state,action){
           state.tasklist= state.tasklist.map((val)=>{return val.id===action.payload?{...val,com:true}:val})
        }
    }
})

export const {addtask,deletetask,compltask}=taskslice.actions;

export default taskslice.reducer;