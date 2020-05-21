import React from "react"
import { Link } from 'gatsby';
import Image from "gatsby-image"

const PortfolioPreview = ({id, title, challenge, image}) => (
  <section className="project-preview">
    <Link to={`/${title}`}>
      {/*Floating Animation*/}
      <figure className="rock-boat">
        <Image fluid={image} alt={title}/>
      </figure>
    </Link>
    {/*Title*/}
    <Link to={`/${title}`}>
      <h2>{title}</h2>
    </Link>
    {/*Outline*/}
    <p>{challenge}</p>
    <Link to={`/${title}`}>
      {/*Read more arrow button*/}
      <button class="read-more">Read more <span>&rarr;</span></button>
    </Link>
  </section>
)
export default PortfolioPreview
