import React from "react"
import { Link } from 'gatsby';
import Image from "gatsby-image"

const PortfolioPreview = ({id, title, description, image}) => (
  <article>
    <Link to={`/${title}`}>
      <Image fluid={image} alt={title}/>
    </Link>
    <Link to={`/${title}`}>
      <h2>{title}</h2>
    </Link>
    <p>{description}</p>
    <Link to={`/${title}`}>
      <button>View this project &rarr;</button>
    </Link>
  </article>
)
export default PortfolioPreview
