import { Link } from "react-router-dom"

const LoginPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="form-wrapper">
        <form className="flex-container" onSubmit={handleSubmit}>
          <div className="form-elements-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-elements-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-elements-wrapper">
            <Link to="/home">
              <button className="standard-button">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage