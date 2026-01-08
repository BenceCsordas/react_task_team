import React from 'react'
import { useState } from 'react'
import EditTask from './EditTask'

const TaskItem = ({obj, setTasks}) => {
    const [isEditing, setIsEditing] = useState(false)

    const toggleCompleted = () => {
        setTasks(prev=>prev.map(a=>a.id==obj.id ? ({...a, completed:!a.completed}):a))
    }
    const handleDelete = () => {
        setTasks(prev=>prev.filter(a=>a.id!=obj.id))
    }
    if(isEditing){
        return (
            <EditTask obj={obj} setTasks={setTasks} setIsEditing={setIsEditing}/>
        )
    }

  return (
    <li style={{display:"flex", gap:"5px"}} className='listStuff'>
        <input type="checkbox" checked={obj.completed} onChange={toggleCompleted} style={{width:"100px"}}/>
        <span style={{textDecoration: obj.completed ? "line-through" : "none"}}>{obj.text}
            <em> (Felelős:{obj.assignedTo})</em>
        </span>
        <button onClick={()=>setIsEditing(true)}>Szerkesztés</button>
        <button onClick={handleDelete}>Törlés</button>
    </li>
  )
}

export default TaskItem
