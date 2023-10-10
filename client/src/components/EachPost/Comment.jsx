import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons"
import './Comment.css'
function Comment() {
  return (
    <div className="comment" id="2">
      <header className="comment-header">
        <span className="comment-username">Username</span>
        <span className="comment-time">time</span>
      </header>
      <main className="comment-main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam
        nisi corrupti optio placeat vitae exercitationem, vel aperiam. Vel,
        debitis?
      </main>
      <footer className="comment-footer">
        <FontAwesomeIcon icon={faHeart} style={{ color: "#eb0000" }} />
        <FontAwesomeIcon icon={faComment} style={{ color: "#10e565" }} />
      </footer>
    </div>
  )
}

export default Comment
