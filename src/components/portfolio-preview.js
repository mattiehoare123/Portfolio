import React from "react"
import { Link } from 'gatsby';
import Image from "gatsby-image"

const PortfolioPreview = ({id, title, outline, image}) => (
  <section className="project-preview">
    <Link to={`/${title}`}>
      <figure className="rock-boat">
        <Image fluid={image} alt={title}/>
      </figure>
    </Link>
    <Link to={`/${title}`}>
      <h2>{title}</h2>
    </Link>
    <p>{outline}</p>
    <Link to={`/${title}`}>
      {/*Read more arrow button*/}
      <button class="read-more">Read more <span>&rarr;</span></button>
    </Link>
  </section>
)
export default PortfolioPreview
