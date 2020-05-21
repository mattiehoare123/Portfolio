import React from "react"
import Image from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';
import { Animated } from "react-animated-css";

const Project = ({
  title,
  outline,
  image,
  url,
  challenge,
  software,
  background,
  personaDescription,
  personaImage,
  sketchDescription,
  sketchImage,
  wireframeDescription,
  wireframeImage,
  fidelityDescription,
  fidelityImage
}) => (
  <React.Fragment>
    <section className="project-header">
        {/*Using plugin to use background image from graphql*/}
        <BackgroundImage
          Tag="section"
          className={'project-hero'}
          fluid={background}
        >
        {/*Title, Software & CTA*/}
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <h1>{title}</h1>
          <p>{software}</p>
          <a href={url} target="__blank">
            <button className="view-live">View Live</button>
          </a>
        </Animated>
      </BackgroundImage>
      {/*Laptop Screen*/}
      <Animated animationIn="fadeInRight" isVisible={true} className="laptop">
        <Image fluid={image} alt={title}/>
      </Animated>
    </section>
    {/*Dev Process*/}
    <section className="project-process">
      <h2>Overview</h2>
      <p>{outline}</p>
      <h2>Challenge</h2>
      <p>{challenge}</p>
      <h2>Understanding The User</h2>
      <p>{personaDescription}</p>
      <Image fluid={personaImage} alt={title} className="persona"/>
      <h2>Ideation</h2>
      <p>{sketchDescription}</p>
      <Image fluid={sketchImage} alt={title} className="sketch"/>
      <h2>Wireframes</h2>
      <p>{wireframeDescription}</p>
      <Image fluid={wireframeImage} alt={title} className="wireframe"/>
      <h2>Visual Desgins</h2>
      <p>{fidelityDescription}</p>
      <Image fluid={fidelityImage} alt={title} className="fidelity"/>
      <a href={url} target="__blank">
        <button className="view-live view-live-btm">View Live</button>
      </a>
    </section>
  </React.Fragment>
)

export default Project
