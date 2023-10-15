import React, { createContext, useState } from "react"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState("");
  const [specificPostData, setSpecificPostData] = useState({});

  const [voteCount, setVoteCount] = useState(0);
  

  return (
    <DataContext.Provider value={{ isLogin, setIsLogin , currentUser , setCurrentUser , specificPostData , setSpecificPostData , voteCount , setVoteCount}}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
