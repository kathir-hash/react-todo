import { configureStore, createStore } from "@reduxjs/toolkit";
import taskreducer from './reducer.jsx'
 export const store =configureStore({
reducer:{
    task:taskreducer
},

 })