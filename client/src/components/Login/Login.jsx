import React, { useState } from "react"
import "../Login/Login.css"
import {loginFunc} from "../../functions/loginFunc"
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleOnChange = (event) => {
    event.target.type == "password"
      ? setPassword(event.target.value)
      : setUsername(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    loginFunc(username, password, setUsername, setPassword);
  };
  return (
    <form
      onSubmit={handleFormSubmit}>
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


