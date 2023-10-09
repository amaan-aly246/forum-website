import React, { useEffect, useState } from "react"
import "./AllPosts.css"
import SinglePost from "./SinglePost"
// import { generateUniqueID } from "../../functions/generateUniqueID";
import { fetchAllPosts } from "../../functions/fetchAllPosts"

function AllPosts() {
  // const name = "Amaan"
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    fetchAllPosts(setAllPosts)
  }, [])

  // useEffect(() => {
  //   if (allPosts.length > 0) {
  //     console.log(allPosts);
  //   }
  // }, [allPosts]);

  return (
    <>
      {allPosts.map(({ _id, content, createdAt, title , username}) => (
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
