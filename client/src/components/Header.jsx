import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import "./Header.css"

const searchFun = () => {
  const searchInput = document.querySelector(".search-input")
  const currentVisibility = searchInput.style.visibility
  if (currentVisibility === "hidden") {
    searchInput.style.visibility = "visible"
    searchInput.focus()
  } else {
    searchInput.style.visibility = "hidden"
  }
}
function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/">all post</Link>
          </li>
          <li>
            <Link to="/about">my post</Link>
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
      <Link to="/login-signup">Login/Sign-up</Link>
    </header>
  )
}

export default Header
