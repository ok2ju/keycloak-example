import React from 'react'
import { useKeycloak } from '@react-keycloak/web'

const Home = () => {
  const { keycloak = {} } = useKeycloak()

  const handleLogout = () => {
    keycloak.logout()
  }

  return (
    <div>
      <h1>User is {!keycloak.authenticated ? 'not' : ''} authenticated</h1>
      {keycloak.authenticated && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  )
}

export default Home
