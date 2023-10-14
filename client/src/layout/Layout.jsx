import React from "react"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"
export default function Layout() {
  return (
    // this is the layout for the entire app
    <main>
      <Header />
      <Outlet />
    </main>
  )
}
