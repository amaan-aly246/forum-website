import React, { createContext, useState } from "react"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState("");
  const [specificPostData, setSpecificPostData] = useState({});

  const [voteCount, setVoteCount] = useState(0);
  const url = 'https://forum-website-client.vercel.app'
  

  return (
    <DataContext.Provider value={{ isLogin, setIsLogin , currentUser , setCurrentUser , specificPostData , setSpecificPostData , voteCount , setVoteCount, url}}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
