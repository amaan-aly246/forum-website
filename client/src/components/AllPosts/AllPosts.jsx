import React, { useState } from "react"
import "./AllPosts.css"
import SinglePost from "./SinglePost"
function AllPosts() {
  const name = "Amaan"
  const time = "12:30 am"

  return (
    <>
      <SinglePost key={1} name={name} time={time}></SinglePost>
      <SinglePost key={2} name={name} time={time}></SinglePost>
    </>
  )
}

export default AllPosts
