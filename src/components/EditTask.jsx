import React from 'react'
import { useState } from 'react'

const EditTask = ({obj, setTasks, setIsEditing}) => {

      const [text, setText] = useState("")
      const [assignedTo, setAssignedTo] = useState("")
    
      const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("AsD")
        if(!text || !assignedTo) return
        console.log("Asd")
        const editedTask={id:Date.now(), text, assignedTo, completed:false}
        setTasks(prev=>prev.map(a=>a.id==obj.id ? editedTask : a))
        setText("")
        setAssignedTo("")
        setIsEditing(false)
      }

  return (
    <div>
      
        <form className='newTopicForm'>
            <input type="text" placeholder={obj.text} onChange={(e) => setText(e.target.value)} required/>
            <input type="text" placeholder={obj.assignedTo}  onChange={(e) => setAssignedTo(e.target.value)} required/>
            <button onClick={handleSubmit}>Szerkesztés</button>
        </form>
    </div>
  )
}

export default EditTask
