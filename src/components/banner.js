import React from "react"
import Icons from "../components/social-media"
import { Link } from 'gatsby';
import CV from '../images/Matthew-Hoare-CV.pdf'
import { Animated } from "react-animated-css";

const Banner = () => {
  return (
    <section className="banner">
      <p>
        {/*Fade In Banner text*/}
        <Animated animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
          I'm
          <h1 className="animate__backInRight"><span>Matt</span>hew Hoare</h1>
          Front End Web Developer<br/> {/*So buttons don't wrap onto this line*/}
          {/*Call to actions*/}
          <Link to="/portfolio">
            <button className="banner-cta">My Portfolio</button>
          </Link>
          <a href={CV} target="__blank">
            <button className="banner-cta">My CV</button>
          </a>
        </Animated>
      </p>
      <Icons/>
    </section>
  )
}
export default Banner
