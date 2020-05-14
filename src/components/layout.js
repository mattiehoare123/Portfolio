import React from "react"
import "../scss/styles.scss"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </React.Fragment>
  )
}
export default Layout
