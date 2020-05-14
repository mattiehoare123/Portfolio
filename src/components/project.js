import React from "react"
import { Link } from 'gatsby';
import Image from "gatsby-image"

const Project = ({title, description, image}) => (
  <section>
    <h1>{title}</h1>
    <Image fluid={image} alt={title}/>
    <p>{description}</p>
    <p>
    </p>
  </section>
)

export default Project
