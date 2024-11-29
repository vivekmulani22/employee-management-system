import React from 'react'

function TaskListNumber({data}) {
  const taskCards = [
    {
      type: 'new',
      title: 'New Tasks',
      gradient: 'from-red-400 to-red-700'
    },
    {
      type: 'completed', 
      title: 'Completed Tasks',
      gradient: 'from-green-400 to-green-700'
    },
    {
      type: 'active',
      title: 'Accepted Tasks', 
      gradient: 'from-blue-400 to-blue-700'
    },
    {
      type: 'failed',
      title: 'Failed Tasks',
      gradient: 'from-yellow-400 to-yellow-700' 
    }
  ]

  return (
    <div className='grid grid-cols-4 gap-6 p-4'>
      {taskCards.map((card, index) => (
        <div key={index} className={`p-8 w-[95%] bg-gradient-to-br ${card.gradient} rounded-xl shadow-lg hover:scale-105 transition-transform duration-300`}>
          <h2 className='text-white text-3xl font-bold mb-2'>
            {data?.taskCounts?.[card.type] || 0}
          </h2>
          <h3 className='text-white/90 text-lg font-medium tracking-wide'>  
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber
