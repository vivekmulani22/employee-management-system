import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
function AllTask() {
  const [userData, setUserData] = useContext(AuthContext)
  return (
    <div  className='h-[55vh] w-[93%] gap-4 mx-auto mt-10 mb-10 bg-gradient-to-br from-[#1C1C1C]/80 to-[#2d2d2d]/50 backdrop-blur-xl text-white p-8 rounded-3xl border border-white/10 shadow-2xl'>
      <div className='flex justify-between items-center p-4 bg-white/5 rounded-xl mb-4'>
        <h2 className='text-lg font-bold text-emerald-400'>Task</h2>
        <h2 className='text-lg font-bold text-emerald-400'>Name</h2>
        <h2 className='text-lg font-bold text-emerald-400'>Active</h2>
        <h2 className='text-lg font-bold text-emerald-400'>Completed</h2>
        <h2 className='text-lg font-bold text-emerald-400'>Failed</h2>
      </div>
      
      <div id='tasklist' className='h-[35vh] overflow-y-auto  custom-scrollbar space-y-3'>
      {userData.employees.map((task, index) => {
        return <div key={index} className='flex justify-between items-center p-4 hover:bg-white/5 transition-all duration-300 rounded-xl backdrop-blur-md bg-gradient-to-r from-white/5 to-transparent'>
          <h2 className='text-lg font-medium text-white/90 bg-purple-500/20 px-3 py-1 rounded-lg'>{task.taskCounts.new}</h2>
          <h2 className='text-lg font-medium text-white/90'>{task.firstName}</h2>
          <h2 className='text-lg font-medium text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-lg'>{task.taskCounts.active}</h2>
          <h2 className='text-lg font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-lg'>{task.taskCounts.completed}</h2>
          <h2 className='text-lg font-medium text-rose-400 bg-rose-500/20 px-3 py-1 rounded-lg'>{task.taskCounts.failed}</h2>
        </div>
      })}
      </div>
    </div>
  )
}

export default AllTask
