import React from 'react'

function AcceptTask({ task }) {
  return (
    <div className='flex-shrink-0 w-[34vw] py-10 px-5 h-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-xl hover:shadow-indigo-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-indigo-400/30'>
      <div className='flex justify-between items-center p-5'>
        <h3 className='bg-gradient-to-r from-red-500 to-pink-600 px-4 py-1.5 rounded-full text-white text-xl font-medium shadow-lg'>{task.category}</h3>
        <h4 className='text-white/90 font-semibold bg-black/20 px-4 py-1.5 rounded-full'>{task.date}</h4>
      </div>
      <h2 className='text-white text-2xl font-medium px-5 hover:text-indigo-200 transition-colors'>{task.title}</h2>
      <p className='text-white/80 text-sm mt-3 font-medium px-5 line-clamp-2'>{task.description}</p>
      <div className="flex justify-center gap-4 mt-6 px-5">
        <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300">
          Mark as Completed
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
