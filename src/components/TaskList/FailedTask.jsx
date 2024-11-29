import React from 'react'

function FailedTask({task}) {
  return (
    <div className='flex-shrink-0 w-[34vw] h-auto py-10 px-5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-cyan-400/30'>
        <div className='flex justify-between items-center p-5'>
          <h3 className='bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-1.5 rounded-full text-white text-xl font-medium shadow-lg'>{task.category}</h3>
          <h4 className='text-white/90 font-semibold bg-black/20 px-4 py-1.5 rounded-full'>{task.date}</h4>
        </div>
        <h2 className='text-white text-2xl font-medium px-5 hover:text-cyan-200 transition-colors'>{task.title}</h2>
        <p className='text-white/80 text-sm mt-3 font-medium px-5 line-clamp-2'>{task.description}</p>
        <div className="flex justify-center mt-6 px-5">
      <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
        Failed Task
      </button>
    </div>
      </div> 
  )
}

export default FailedTask
