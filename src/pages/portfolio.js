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
            slug
            description
            image {
              childImageSharp {
                fluid {
                  srcSet
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
      {projects.map(({node: project}) => {
        const title = project.title;
        const slug = project.slug;
        const image = project.image.childImageSharp.fluid;
        const description = project.description;

        return (
          <PortfolioPreview
            title={title}
            image={image}
            slug={slug}
            description={description}
            />
        );
      })}
    </Layout>
  )
}
export default Portfolio
