import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from 'react';

function App() {
  const [fetchedToken, setFetchedToken] = useState(JSON.parse(localStorage.getItem('token')))

  const queryClient = new QueryClient()

  const setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token))
    setFetchedToken(token)
  }

  console.log(fetchedToken)

  return (
    <QueryClientProvider client={queryClient}>

      <Routes>

        <Route path="/" element={<LoginPage setToken={setToken} />}></Route>

        <Route
          path="/home"
          element={fetchedToken && fetchedToken.token === "token12345" ? <HomePage /> : <Navigate to={'/'} />}>
        </Route>

      </Routes>
    </QueryClientProvider>
  );
}

export default App;
