import React, { useState } from "react"
import "./AllPosts.css"
import { voteFunc } from "../../functions/voteFunc"
function SinglePost({name, time}) {
  const [voteCount, setVoteCount] = useState(0)

  return (
    <section className="post-container">
      <header className="post-header">
        <span className="author">
          {name} {time}
        </span>
      </header>
      <aside className="post-aside">
        <div className="post-count">
          <button
            className="post-btn up-vote filter-gray"
            id="up"
            onClick={(event) => voteFunc(event, voteCount, setVoteCount)}>
            😍
          </button>
          <p>{voteCount}</p>
          <button
            id="down"
            className="post-btn down-vote filter-gray"
            onClick={(event) => voteFunc(event, voteCount, setVoteCount)}>
            🤢
          </button>
        </div>
      </aside>
      <footer className="post-footer">comment...</footer>
      <main className="post-main">main content</main>
    </section>
  )
}

export default SinglePost
