import React from "react";
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';


export const query = graphql`
  query($title: String!) {
    projectsJson(title: {eq: $title}) {
      title
      description
      software
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;


const ProjectTemplate = ({data}) => {
  const project = data.projectsJson;
  const title = project.title;
  const description = project.description;
  const image = project.image.childImageSharp.fluid;
  const sofware = project.software;

  return (
    <Layout>
      <Project
        title={title}
        description={description}
        image={image}
        software={sofware}
      />
    </Layout>
  )
}

export default ProjectTemplate
