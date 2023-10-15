import React, { useEffect, useState, useContext } from "react"
import "./AllPosts.css"
import SinglePost from "./SinglePost"
import { fetchAllPosts } from "../../functions/fetchAllPosts"
import { DataContext } from "../Context/Context"

function AllPosts() {
  const [allPosts, setAllPosts] = useState([])
  const { voteCount } = useContext(DataContext)
  useEffect(() => {
    fetchAllPosts(setAllPosts)
  }, [voteCount])

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
