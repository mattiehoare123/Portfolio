import React from "react"
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <React.Fragment>
    <Link to="/">MH</Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          CV
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </React.Fragment>
  )
}
export default Navigation
