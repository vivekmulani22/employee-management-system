import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../TaskList/AllTask'

function AdminDashboard(props) {
  return (
    <div>
      <Header changeUser={props.changeUser}/>  
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
