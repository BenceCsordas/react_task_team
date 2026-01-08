import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, setTasks}) => {
  return (
    <div>
    <ul>
      {tasks.map(obj=>
        <TaskItem className='listStuff' obj={obj} setTasks={setTasks} key={obj.id}/>
      )}

    </ul>
    </div>
  )
}

export default TaskList
