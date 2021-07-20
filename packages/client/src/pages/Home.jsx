import React, { useEffect } from 'react'
import { dataApi } from '../api/data'
import AuthService from '../services/AuthService'

const Home = () => {
  useEffect(() => {
    dataApi.getProtectedData()
  }, [])

  const handleLogout = () => {
    AuthService.logout()
  }

  return (
    <div>
      <h1>Hello, {AuthService.getUsername()}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
