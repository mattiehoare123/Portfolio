import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import Layout from "../components/layout"
import PortfolioPreview from "../components/portfolio-preview"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            outline
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges;
  return (
    <Layout>
      <h1 className="portfolio-title">Portfolio</h1>
      <article className="portfolio">
        {/*Loop through projects in the projects variable*/}
        {projects.map(({node: project}) => {
          const title = project.title;
          const image = project.image.childImageSharp.fluid;
          const outline = project.outline;

          return (
              <PortfolioPreview
                title={title}
                image={image}
                outline={outline}
                />
            );
        })}
      </article>
    </Layout>
  )
}
export default Portfolio
