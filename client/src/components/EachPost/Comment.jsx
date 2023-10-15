import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons"
import parse from "html-react-parser"
import TimeAgo from "timeago-react"
import "./comment.css"
function Comment({ singleComment }) {
  return (
    <div className="comment">
      <header className="comment-header">
        <span className="comment-username">{`@${singleComment.username}`}</span>
        <span className="comment-time">
          <TimeAgo datetime={singleComment.createdAt} />
        </span>
      </header>
      <main className="comment-main">{parse(singleComment.comment)}</main>
      <footer className="comment-footer">
        <FontAwesomeIcon icon={faHeart} style={{ color: "#eb0000" }} />
        <FontAwesomeIcon icon={faComment} style={{ color: "#10e565" }} />
      </footer>
    </div>
  )
}

export default Comment
