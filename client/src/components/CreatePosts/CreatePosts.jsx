import React , {useState} from "react";
import './CreatePosts.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function CreatePosts() {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');

  return (
    <form style={{border: '2px solid black'
    , padding: '20px',
    marginInline: '50px',
    marginTop: '50px',
    }}>
      <h2>Create Post </h2>
      <input type="text" style={{backgroundColor: '#e8e8e4', marginTop: '20px'}} placeholder="title" value={title} onChange={(event)=> setTitle(event.target.value)} />
      <ReactQuill theme="snow" value={body} onChange={ (body)=> setBody(body)} />
      <button  style={{marginTop: '20px'}}>create post</button>
    </form>
  )
}

export default CreatePosts;
