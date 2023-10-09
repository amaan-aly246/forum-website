import React, { useEffect, useState } from "react"
import "./AllPosts.css"
import SinglePost from "./SinglePost"
import { fetchAllPosts } from "../../functions/fetchAllPosts"

function AllPosts() {
  const [allPosts, setAllPosts] = useState([])
  
  useEffect(() => {
    fetchAllPosts(setAllPosts)
  }, [])

  return (
    <>
      {allPosts.map(({ _id, content, createdAt, title, username }) => (
        <SinglePost
          key={_id}
          username={username}
          time={createdAt}
          postID={_id}
          title={title}
          content={content}
        />
      ))}
    </>
  )
}

export default AllPosts
