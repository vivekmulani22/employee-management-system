import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorageData, setLocalStorageData } from '../utils/localStorage'

export const AuthContext = createContext()
 

function AuthProvider({children}) {
  // localStorage.clear()
  const [userData, setUserData] = useState(null)


  useEffect(() => {
    const {employees, admin} = getLocalStorageData()
    if (employees && admin) {
      setUserData({ admin, employees })
    }
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
