import React from 'react'
import { useState } from 'react'

export const Add = ({setTasks}) => {

  const [text, setText] = useState("")
  const [assignedTo, setAssignedTo] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!text || !assignedTo) return
    const newTask={id:Date.now(), text, assignedTo, completed:false}
    setTasks(prev=>[...prev, newTask])
    setText("")
    setAssignedTo("")
  }

  return (
    <div>
      <h3>Új teendő hozzáadása</h3>
        <form className='newTopicForm'>
            <input type="text" placeholder='Új feladat' value={text} onChange={(e) => setText(e.target.value)} required/>
            <input type="text" placeholder='Fejlesztő neve' value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required/>
            <button type='submit' onClick={handleSubmit}>Hozzáadás</button>
        </form>
    </div>
  )
}