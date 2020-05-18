import React from "react";
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';


export const query = graphql`
  query($title: String!) {
    projectsJson(title: {eq: $title}) {
      title
      outline
      software
      personaTitle
      personaDescription
      sketchTitle
      sketchDescription
      wireframeTitle
      wireframeDescription
      fidelityTitle
      fidelityDescription
      background {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
  const outline = project.outline;
  const image = project.image.childImageSharp.fluid;
  const software = project.software;
  const background = project.background.childImageSharp.fluid;
  const personaTitle = project.personaTitle;
  const personaDescription = project.personaDescription;
  const sketchTitle = project.sketchTitle;
  const sketchDescription = project.sketchDescription;
  const wireframeTitle = project.wireframeTitle;
  const wireframeDescription = project.wireframeDescription
  const fidelityTitle = project.fidelityTitle
  const fidelityDescription = project.fidelityDescription

  return (
    <Layout>
      <Project
        title={title}
        outline={outline}
        image={image}
        software={software}
        background={background}
        personaTitle={personaTitle}
        personaDescription={personaDescription}
        sketchTitle={sketchTitle}
        sketchDescription={sketchDescription}
        wireframeTitle={wireframeTitle}
        wireframeDescription={wireframeDescription}
        fidelityTitle={fidelityTitle}
        fidelityDescription={fidelityDescription}
      />
    </Layout>
  )
}

export default ProjectTemplate
