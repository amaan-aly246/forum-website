import React, { useState, useContext } from "react"
import "./EachPost.css"
import { voteFunc } from "../../functions/voteFunc"
import Comment from "./Comment"
import ReactQuill from "react-quill"
import ReactHTMLParser from "react-html-parser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import TimeAgo from "timeago-react"
import { DataContext } from "../Context/Context"
import { createNewComment } from "../../functions/createNewComment"
function EachPost() {
  const [voteCount, setVoteCount] = useState(0)
  const { specificPostData, isLogin } = useContext(DataContext)
  const { username, time, _id:postID, content, title } = specificPostData
  const [comment, setComment] = useState('');
  
  const handleClick = (event) => {
    if (isLogin && comment !== "") {
      createNewComment(postID, username ,comment)
    }
    else{
      alert("You need to login first")
    }
  }
  return (
    <div className="parent-container">
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
      </section>
      <section className="comment-area">
        <ReactQuill
          theme="snow"
          name="comment-area"
          style={{ height: "150px" }}
          placeholder="Write your comment here"
          value={comment}
          onChange={setComment}
        />
        <span className="add-comment-btn">
          <FontAwesomeIcon icon={faPaperPlane} onClick={handleClick} />
        </span>
      </section>
      <section className="post-comments">
        <Comment />
        <Comment />
      </section>
    </div>
  )
}

export default EachPost


