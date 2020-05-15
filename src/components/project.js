import React from "react"
import { Link } from 'gatsby';
import Image from "gatsby-image"

const Project = ({title, description, image, software}) => (
  <React.Fragment>
    <section className="project-header">
      <Image fluid={image} alt={title}/>
      <h1>{title}</h1>
      <a href="www.example.com">
        <button className="view-live">View Live</button>
      </a>
      <p>{software}</p>
    </section>
    <section className="project-process">
      <h2>Description</h2>
      <p>{description}</p>
    </section>
  </React.Fragment>
)

export default Project
