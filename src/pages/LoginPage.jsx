import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'username' && password === 'password') {
      navigate('/home')
    }    
  }

  console.log(username)
  console.log(password)

  useEffect(() => {

  }, [username, password])

  return (
    <>
      <div className="form-wrapper">
        <form className="flex-container" onSubmit={handleSubmit}>

          <div className="form-elements-wrapper">
            <label htmlFor="username">Username</label>

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