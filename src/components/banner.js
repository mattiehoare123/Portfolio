import React from "react"
import Icons from "../components/social-media"
import { Link } from 'gatsby';

const Banner = () => {
  return (
    <section className="banner">
      <p>
        <div>
          I'm
          <h1 className="animate__backInRight"><span>Matt</span>hew Hoare</h1>
          Front End Web Developer
          <Link to="/portfolio">
            <button className="banner-cta">My Portfolio</button>
            <button className="banner-cta">My CV</button>
          </Link>
        </div>
      </p>
      <Icons/>
    </section>
  )
}
export default Banner
