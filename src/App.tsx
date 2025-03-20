import Registration from './components/auth/registration'
import {  Routes, Route } from "react-router-dom";
import Login from "./components/auth/loginn/login"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  )
}

export default App
