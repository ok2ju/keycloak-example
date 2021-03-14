import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'

const Login = () => {
  const { keycloak } = useKeycloak()
  const location = useLocation()
  const currentLocationState = location.state || { from: { pathname: '/home' } }

  const handleLogin = () => {
    keycloak?.login()
  }

  if (keycloak?.authenticated)
    return <Redirect to={currentLocationState?.from} />

  return (
    <div>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
