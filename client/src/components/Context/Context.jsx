import React, { createContext, useState } from "react"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState("");
  const [specificPostData, setSpecificPostData] = useState({});
  

  return (
    <DataContext.Provider value={{ isLogin, setIsLogin , currentUser , setCurrentUser , specificPostData , setSpecificPostData}}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
