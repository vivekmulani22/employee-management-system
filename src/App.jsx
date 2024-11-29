import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorageData, getLocalStorageData } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  setLocalStorageData()

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser')
    if (loggedUser) {
      const userdata = JSON.parse(loggedUser)
      setUser(userdata.role)
      setIsLoading(userdata.data)
    }
  }, [])
  
  const handleLogin = (email, password) => {
    
    if (userData && userData.admin.find(admin => admin.email == email && admin.password == password)){
      setUser('admin')
      localStorage.setItem('loggedUser', JSON.stringify({role : 'admin'}))
    }
    else if (userData){
      const employee = userData.employees.find((employee) => employee.email == email && employee.password == password)
      if (employee){  
        setUser('employee')
        setIsLoading(employee)
        localStorage.setItem('loggedUser', JSON.stringify({role:'employee' , data: employee}))
      }
    }
    else{
      alert(" Invalid credentials")
    }
  }
  
  
  return (
    <div className='bg-black'>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser}/> :  (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={isLoading}/> : null)}
    </div>
  )
}

export default App
