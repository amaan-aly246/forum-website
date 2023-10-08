import { Navigate } from "react-router-dom"
import { registerFunc } from "../../functions/registerFunc"
import "../Login/Login.css"
import React, { useState } from "react"

function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false);
  
  const handleOnChange = (event) => {
    event.target.type == "password"
      ? setPassword(event.target.value)
      : setUsername(event.target.value)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (username && password) {
      registerFunc(username, password , setRedirect , setUsername, setPassword)
    } else {
      alert("Please enter username and password")
    }
  }
  if(redirect) return <Navigate to='/'></Navigate>

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Register </h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleOnChange}
      />
      <input
        type="password"
        placeholder=" password"
        value={password}
        onChange={handleOnChange}
      />
      <button>Register</button>
    </form>
  )
}

export default RegisterPage
