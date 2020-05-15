import React from "react"
import { Link } from 'gatsby';
import Image from "gatsby-image"

const Project = ({title, description, image, software}) => (
  <section>
    <h1>{title}</h1>

    <Image fluid={image} alt={title}/>
    <a href="www.example.com">View Live</a>
    <p>{software}</p>
    <p>{description}</p>
  </section>
)

export default Project
