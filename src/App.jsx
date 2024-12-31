import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/header.jsx'
import './App.css'
import TaskForm  from './component/taskform.jsx'
import { Provider } from 'react-redux'
import { store } from './reducer/store.jsx'

function App() {

  return (
    <>
    <Provider store={store}>
    <Header></Header>
     
     <TaskForm></TaskForm>
    </Provider>
    
     
     

    </>
  )
}

export default App
