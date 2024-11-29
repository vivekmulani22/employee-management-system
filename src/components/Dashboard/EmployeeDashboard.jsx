import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({changeUser, data}) {
  return (
    <div className='bg-[#1C1C1C] p-10 '>
      
      <Header changeUser={changeUser} data={data} />
      <br />
      <TaskListNumber data={data} />
      <br />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
