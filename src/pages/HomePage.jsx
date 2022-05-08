import Request from "../components/Request"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  // useEffect(() => {
  //   setToken(getToken())
  // }, [getToken])

  // if (!token || !token.token === 'tokenhejhej') {
  //   return (
  //     <div className="center min-height-100">
  //       <p>Not authenticated</p>
  //       <button className="standard-button" onClick={() => {
  //         navigate('/')
  //       }}
  //       >To login
  //       </button>
  //     </div>
  //   )
  // }

  return (
    <>
      <h1>Home Page</h1>
      <button className="standard-button" onClick={handleLogout}>Log out</button>
      <Request></Request>
    </>
  )
}

export default HomePage