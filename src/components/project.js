import React from "react"
import Image from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';
import { Animated } from "react-animated-css";

const Project = ({
  title,
  outline,
  image,
  software,
  background,
  personaTitle,
  personaDescription,
  sketchTitle,
  sketchDescription,
  wireframeTitle,
  wireframeDescription,
  fidelityTitle,
  fidelityDescription
}) => (
  <React.Fragment>
    <section className="project-header">
        {/*Using plugin to use background image from graphql*/}
        <BackgroundImage
          Tag="section"
          className={'project-hero'}
          fluid={background}
        >
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <h1>{title}</h1>
          <p>{software}</p>
          <a href="www.example.com">
            <button className="view-live">View Live</button>
          </a>
        </Animated>
      </BackgroundImage>
      <Animated animationIn="fadeInRight" isVisible={true} className="laptop">
        <Image fluid={image} alt={title}/>
      </Animated>
    </section>
    <section className="project-process">
      <h2>Outline</h2>
      <p>{outline}</p>
      <h2>{personaTitle}</h2>
      <p>{personaDescription}</p>
      <h2>{sketchTitle}</h2>
      <p>{sketchDescription}</p>
      <h2>{wireframeTitle}</h2>
      <p>{wireframeDescription}</p>
      <h2>{fidelityTitle}</h2>
      <p>{fidelityDescription}</p>
    </section>
  </React.Fragment>
)

export default Project
