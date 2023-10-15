import React, { useState, useContext, useEffect } from "react"
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
import { fetchComment } from "../../functions/fetchComment"
function EachPost() {
  const [voteCount, setVoteCount] = useState(0)
  const { specificPostData, isLogin, currentUser } = useContext(DataContext)
  const { username, time, _id: postID, content, title } = specificPostData
  const [comment, setComment] = useState("")
  const [fetchedComments, setFetchedComments] = useState([])

  const handleClick = (event) => {
    if (isLogin && comment !== "") {
      createNewComment(postID, currentUser, comment, setComment)
    } else {
      alert("You need to login first")
    }
  }
  useEffect(() => {
    const fetchCommentFunc = async () => {
      const data = await fetchComment(postID)
      setFetchedComments(data)
    }
    fetchCommentFunc()
  }, [])
  return (
    <div className="parent-container">
      <section className="Each-post-container" id={`postID-${postID}`}>
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
        {console.log(fetchedComments)}
        {fetchedComments &&
          fetchedComments.map((singleComment) => {
            return (
              <Comment key={singleComment._id} singleComment={singleComment} />
            )
          })}
      </section>
    </div>
  )
}

export default EachPost
