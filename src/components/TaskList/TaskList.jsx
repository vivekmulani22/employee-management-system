import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({ data }) {
  return (
    <div id="tasklist" className='overflow-x-auto px-3 w-[98%] h-[55%] flex justify-start items-center gap-8 flex-nowrap'>
      {data?.tasks?.map((task, index) => {
        if (!task) return null;
        
        if (task.active) {
          return <AcceptTask key={`task-${index}`} task={task} />
        }
        if (task.newTask) {
          return <NewTask key={`task-${index}`} task={task} />
        }
        if (task.completed) {
          return <CompleteTask key={`task-${index}`} task={task} />
        }
        if (task.failed) {
          return <FailedTask key={`task-${index}`} task={task} />
        }
        return null;
      })}
    </div>
  )
}

export default TaskList
