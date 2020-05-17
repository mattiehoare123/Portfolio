import React from "react"
import Image from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';

const Project = ({title, description, image, software}) => (
  <React.Fragment>
    <section className="project-header">
        {/*Using plugin to use background image from graphql*/}
        <BackgroundImage
          Tag="section"
          className={'project-hero'}
          fluid={image}
        >
        <h1>{title}</h1>
        <p>{software}</p>
        <a href="www.example.com">
          <button className="view-live">Visit Site</button>
        </a>
      </BackgroundImage>
    </section>
    <section className="project-process">
      <h2>Description</h2>
      <p>{description}</p>
    </section>
  </React.Fragment>
)


export default Project
