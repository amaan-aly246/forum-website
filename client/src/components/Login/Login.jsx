import React, { useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import "../Login/Login.css"
import { loginFunc } from "../../functions/loginFunc"
import { DataContext } from "../Context/Context"
function Login() {
  const { setIsLogin, setCurrentUser , url} = useContext(DataContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

  const handleOnChange = (event) => {
    event.target.type == "password"
      ? setPassword(event.target.value)
      : setUsername(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    loginFunc(
      username,
      password,
      setUsername,
      setPassword,
      setRedirect,
      setIsLogin,
      setCurrentUser,
      url
    )
  }
  if (redirect) return <Navigate to={"/"}></Navigate>

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login </h2>
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
      <button>Login</button>
    </form>
  )
}

export default Login
