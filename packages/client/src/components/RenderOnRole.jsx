import AuthService from '../services/AuthService'

// Example: <RenderOnRole roles={['admin']}>Hello, Admin</RenderOnRole>
const RenderOnRole = ({ roles, children }) => {
  return (
    AuthService.hasRole(roles) ? children : null
  )
}

export default RenderOnRole
