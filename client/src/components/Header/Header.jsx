import React, { useState, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import "./Header.css"
import { logoutFunc } from "../../functions/logoutFunc"
import { DataContext } from "../Context/Context"
export default function Header() {
  const { isLogin, setIsLogin, currentUser , url} = useContext(DataContext)
  const [redirect, setRedirect] = useState(false);
  
  if(redirect) return <Navigate to="/"></Navigate>
  return (
    <header className="header">
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/">all posts</Link>
          </li>
          <li>
            {isLogin &&
              <Link to="/myPost">my posts</Link>
            }
            
          </li>
          <li>
            {isLogin && (
              <span>
                <Link to="/createPost">Create post</Link>
              </span>
            )}
          </li>
        </ul>
      </nav>

      {!isLogin && (
        <span className="loginRegister">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </span>
      )}
      {isLogin && (
        <span className="loginRegister">
          <Link
            onClick={() => {
              logoutFunc(setIsLogin , setRedirect  , url)
            }}>
            logOut
          </Link>
          <Link>{currentUser.toUpperCase()}</Link>
        </span>
      )}
    </header>
  )
}


      {/* <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" /> 
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#85a3d6" }}
          className="search-icon"
          onClick={searchFun}
        />
      </div> */}