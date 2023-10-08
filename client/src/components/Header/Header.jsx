import React, { useState } from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { searchFun } from "../../functions/searchFunc"
import "./Header.css"
import { logoutFunc } from "../../functions/logoutFunc"

function Header() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <header className="header">
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/">all posts</Link>
          </li>
          <li>
            <Link to="/myPost">my posts</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#85a3d6" }}
          className="search-icon "
          onClick={searchFun}
        />
      </div>
      {isLogin && (
        <span className="loginRegister">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </span>
      )}
      {!isLogin && (
        <span className="loginRegister">
          <Link to="/createPost">Create post</Link>
          <Link onClick={logoutFunc}>logOut</Link>
        </span>
      )}
    </header>
  )
}

export default Header
