import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from 'react';

function App() {
  // Fetch the token on initial render
  const [fetchedToken, setFetchedToken] = useState(JSON.parse(localStorage.getItem('token')))

  const queryClient = new QueryClient()

  // Function to set the localstorage as well as updating the state of 'fetchedToken'
  const setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token))
    setFetchedToken(token)
  }

  return (
    <QueryClientProvider client={queryClient}>

      <Routes>

        <Route path="/" element={<LoginPage setToken={setToken} />}></Route>

        <Route
          path="/home"
          // check if fetchedToken is truthy and that the token has the correct value
          // Else navigate to the login page instead
          element={fetchedToken && fetchedToken.token === "token12345" ? <HomePage /> : <Navigate to={'/'} />}>
        </Route>

      </Routes>
    </QueryClientProvider>
  );
}

export default App;
