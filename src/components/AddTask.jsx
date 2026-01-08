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
  //asd
  return (
    <div>
      
    </div>
  )
}