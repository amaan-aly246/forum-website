import react from "react"
import "./App.css"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import AllPosts from "./components/AllPosts/AllPosts"
import MyPosts from "./components/MyPosts/MyPosts"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<AllPosts></AllPosts>}></Route>
          <Route path="/myPost" element={<MyPosts />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
