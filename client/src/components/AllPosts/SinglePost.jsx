import React, { useState } from "react"
import "./AllPosts.css"
import { voteFunc } from "../../functions/voteFunc"
import ReactHTMLParser from "react-html-parser"
import TimeAgo from "timeago-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faMessage } from "@fortawesome/free-solid-svg-icons"
function SinglePost({ username, time, postID, content, title }) {
  const [voteCount, setVoteCount] = useState(0)
  return (
    <section className="post-container" id={`post-${postID}`}>
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
        <div className="comments">
          <FontAwesomeIcon icon={faMessage} style={{ color: "#008000" }} />
          <p></p>
        </div>
      </aside>
      <footer className="post-footer">
        <textarea
          id="Textarea"
          rows="4"
          cols="50"
          placeholder="comment..."></textarea>
        <FontAwesomeIcon icon={faPaperPlane} className="paper-plane" />
      </footer>
      <main className="post-main">
        <h3 className="title">{title}</h3>
        {ReactHTMLParser(content)}
      </main>
    </section>
  )
}

export default SinglePost
