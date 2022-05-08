import Request from "../components/Request"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  //Remove the token and navigate the user to the login screen
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>
      <h1>Home Page</h1>
      <button className="standard-button" onClick={handleLogout}>Log out</button>
      <Request></Request>
    </>
  )
}

export default HomePage