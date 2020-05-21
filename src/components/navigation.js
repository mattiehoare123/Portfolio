import React from "react"
import { Link } from 'gatsby';
import CV from '../images/Matthew-Hoare-CV.pdf'

const Navigation = () => {
  return (
    <React.Fragment>
      <Link className="logo" to="/">MH</Link>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/portfolio" activeClassName="active">Portfolio</Link>
          </li>
          <li>
            <a href={CV} target="__blank">CV</a>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">Contact</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}
export default Navigation
