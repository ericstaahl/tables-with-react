const LoginPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Navigate to another page")
  }

  return (
    <>
      <div className="form-wrapper">
        <form className="flex-container" onSubmit={handleSubmit}>
          <div className="form-elements-wrapper">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-elements-wrapper">
            <input type="password" name="password" placeholder="Password" />
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