import React from "react"
import Header from "./header"
import Footer from "./footer"

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}