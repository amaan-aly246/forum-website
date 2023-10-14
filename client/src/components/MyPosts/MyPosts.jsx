import React, { useState, useEffect, useContext } from "react"
import "./MyPosts.css"
import SinglePost from "../AllPosts/SinglePost"
import { DataContext } from "../Context/Context"
import { fetchMyPosts } from "../../functions/fetchMyPosts"

function MyPosts() {
  const { currentUser } = useContext(DataContext)
  const [myPosts, setMyPosts] = useState([])
  useEffect(() => {
    if (currentUser) {
      fetchMyPosts(currentUser, setMyPosts)
    }
  }, [])
  return <>{myPosts && myPosts.map(({_id , title, content , username , createdAt })=>{
     return <SinglePost postID ={_id} title={title} content={content}  username={username} time={createdAt}/>
  })}
  {myPosts.length === 0 && <h1>you have no posts</h1>}
  </>
}

export default MyPosts
