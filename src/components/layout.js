import React from "react"
import "../scss/styles.scss"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({children}) => {
  return (
    <React.Fragment>
      {/*These will appear on every page*/}
      <Header/>
      <main>{children}</main>{/*Content goes in here*/}
      <Footer/>
    </React.Fragment>
  )
}
export default Layout
