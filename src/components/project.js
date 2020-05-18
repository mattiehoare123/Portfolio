import React from "react"
import { Link } from 'gatsby';
import Image from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';

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
        <div>
          <h1>{title}</h1>
          <p>{software}</p>
          <a href="www.example.com">
            <button className="view-live">View Live</button>
          </a>
        </div>
      </BackgroundImage>
      <Image fluid={image} alt={title} className="laptop"/>
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
