import React, { useState , useContext } from "react"
import { Navigate } from "react-router-dom"
import { DataContext } from "../Context/Context"
import "./CreatePosts.css"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { createNewPost } from "../../functions/createNewPost"
function CreatePosts() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [redirect, setRedirect] = useState(false)
  const {currentUser,setCurrentUser} = useContext(DataContext)
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (title && content) {
      const postData = await createNewPost(title, content, setRedirect , currentUser , setCurrentUser)
    } else {
      alert("Please fill all the fields")
    }
  }
  if (redirect) return <Navigate to="/" />
  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <h2>Create Post </h2>
      <input
        type="text"
        style={{ backgroundColor: "#e8e8e4", marginTop: "20px" }}
        placeholder="title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <ReactQuill
        theme="snow"
        value={content}
        name="content"
        onChange={(content) => setContent(content)}
      />
      <button style={{ marginTop: "20px" }}>create post</button>
    </form>
  )
}

export default CreatePosts

//
//
