import React from "react"
import Navigation from '../components/navigation'
import Hamburger from "../images/hamburger.svg";

const Header = () => {
  return (
    <header>
      <Navigation/>
      <Hamburger className="menu-icon"/>
    </header>
  )
}
export default Header
