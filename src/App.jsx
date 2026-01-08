import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList';
import { initialTasks } from '../data';
import { AddTask } from './components/AddTask';


function App() {
  
  const [tasks, setTasks] = useState(initialTasks)
  

  return (
    <div className='mainDiv'>
      <h1 style={{fontSize:"4rem", color:"red"}}>Feladatlista</h1>
      
      <AddTask setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
