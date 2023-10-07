import React, { useState } from "react"
import "./AllPosts.css"
import SinglePost from "./SinglePost"
import { generateUniqueID } from "../../functions/generateUniqueID"

function AllPosts() {
  const name = "Amaan"
  const time = "12:30 am"

  return (
    <>
      <SinglePost
        key={generateUniqueID()}
        name={name}
        time={time}
        postID={generateUniqueID()}></SinglePost>
      <SinglePost
        key={generateUniqueID()}
        name={name}
        time={time}
        postID={generateUniqueID()}></SinglePost>
    </>
  )
}

export default AllPosts
