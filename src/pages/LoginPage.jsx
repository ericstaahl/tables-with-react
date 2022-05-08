import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = ({setToken}) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Check if the entered username and password correspond to these set values
  // If so, navigate to the page with the table
  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'username' && password === 'password') {
      const token = {token: "token12345"}
      setToken(token)
      navigate('/home')
    }
  }

  return (
    <>
      <div className="form-wrapper">
        <form className="flex-container" onSubmit={handleSubmit}>

          <div className="form-elements-wrapper">
            <label htmlFor="username">Username</label>
            {/* Controlled input. Value is equal to 'username' 
            and writing in the field causes that variable to change */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </div>

          <div className="form-elements-wrapper">
            <label htmlFor="password">Password</label>
            {/* Controlled input. Value is equal to 'username' 
            and writing in the field causes that variable to change */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />

          </div>
          <div className="form-elements-wrapper">
            <button className="standard-button">Login</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default LoginPage