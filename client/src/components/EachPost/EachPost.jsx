import React, { useState, useContext } from "react"
import "./EachPost.css"
import { voteFunc } from "../../functions/voteFunc"
import Comment from "./Comment"
import ReactHTMLParser from "react-html-parser"
import TimeAgo from "timeago-react"
import { DataContext } from "../Context/Context"
function EachPost() {
  const [voteCount, setVoteCount] = useState(0)
  const { specificPostData } = useContext(DataContext)
  const {username , time , postID, content, title} = specificPostData;
  return (
    <section className="Each-post-container" id={`post-${postID}`}>
      <header className="Each-post-header">
        <span className="Each-post-author">
          {username} <TimeAgo datetime={time} />
        </span>
      </header>
      <aside className="Each-post-aside">
        <div className="Each-post-count">
          <button
            className="Each-post-btn up-vote filter-gray"
            id="up"
            onClick={(event) =>
              voteFunc(event, voteCount, setVoteCount, postID)
            }>
            😍
          </button>
          <p>{voteCount}</p>
          <button
            id="down"
            className="Each-post-btn down-vote filter-gray"
            onClick={(event) =>
              voteFunc(event, voteCount, setVoteCount, postID)
            }>
            🤢
          </button>
        </div>
      </aside>
      <main className="Each-post-main">
        <h3 className="title">{title}</h3>
        {ReactHTMLParser(content)}
      </main>
      <footer className="comments-container">
        <Comment />
        <Comment />
      </footer>
    </section>
  )
}

export default EachPost
