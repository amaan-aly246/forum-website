import React, { useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import "./AllPosts.css"
import { voteFunc } from "../../functions/voteFunc"
import ReactHTMLParser from "react-html-parser"
import TimeAgo from "timeago-react"
import { DataContext } from "../Context/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faMessage } from "@fortawesome/free-solid-svg-icons"
import { fetchEachPost } from "../../functions/fetchEachPost"
function SinglePost({ username, time, postID, content, title }) {
  const [redirect, setRedirect] = useState(false)
  const { setSpecificPostData } =
    useContext(DataContext)
 const [voteCount, setVoteCount] = useState(0);
 
  var postID
  const handleClick = (event) => {
    postID = event.target.closest(".post-container").id
    fetchEachPost(postID, setRedirect, setSpecificPostData)
  }

  if (redirect) return <Navigate to={`/${postID}`}></Navigate>
  return (
    <section className="post-container" id={`postID-${postID}`}>
      <header className="post-header">
        <span className="author">
          {username} <TimeAgo datetime={time} />
        </span>
      </header>
      <aside className="post-aside">
        <div className="post-count">
          <button
            className="post-btn up-vote filter-gray"
            id="up"
            onClick={(event) =>
              voteFunc(event, voteCount, setVoteCount, postID)
            }>
            😍
          </button>
          <p>{voteCount}</p>
          <button
            id="down"
            className="post-btn down-vote filter-gray"
            onClick={(event) =>
              voteFunc(event, voteCount, setVoteCount, postID)
            }>
            🤢
          </button>
        </div>
        <div className="comments" onClick={handleClick}>
          <FontAwesomeIcon icon={faMessage} style={{ color: "#008000" }} />
          <p></p>
        </div>
      </aside>
      <main className="post-main" onClick={handleClick}>
        <h3 className="title">{title}</h3>
        {ReactHTMLParser(content)}
      </main>
    </section>
  )
}

export default SinglePost
