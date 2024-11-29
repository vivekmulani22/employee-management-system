import React from 'react'

function Header({ changeUser, data }) {
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

  const logUser = () => {
    localStorage.removeItem('loggedUser')
    changeUser('')
  }
 
  return (
    <div className='flex justify-between items-center p-10 text-white'>
      <h1 className='text-2xl font-semibold'>
        Hello {loggedUser?.name || 'User'} <br /> 
        <span className='text-3xl font-semibold'>👋</span>
      </h1>
      <button 
        onClick={logUser}
        className='text-white text-lg font-medium bg-gradient-to-br from-red-400 to-red-700 px-4 py-2 rounded-md hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
