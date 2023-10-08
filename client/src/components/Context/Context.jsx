import React, { createContext, useState } from "react"

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <DataContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
