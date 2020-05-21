import React from "react";
import {graphql} from 'gatsby';
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import Project from '../components/project';


export const query = graphql`
  query($title: String!) {
    projectsJson(title: {eq: $title}) {
      title
      outline
      challenge
      software
      url
      personaDescription
      sketchDescription
      wireframeDescription
      fidelityDescription
      sketchImage {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fidelityImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wireframeImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      personaImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
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

{/*Getting the data from json and assign each value a variable*/}
const ProjectTemplate = ({data}) => {
  const project = data.projectsJson;
  const title = project.title;
  const outline = project.outline;
  const url = project.url;
  const challenge = project.challenge
  const image = project.image.childImageSharp.fluid;
  const software = project.software;
  const background = project.background.childImageSharp.fluid;
  const personaDescription = project.personaDescription;
  const personaImage = project.personaImage.childImageSharp.fluid;
  const sketchDescription = project.sketchDescription;
  const sketchImage = project.sketchImage.childImageSharp.fluid;
  const wireframeDescription = project.wireframeDescription
  const wireframeImage = project.wireframeImage.childImageSharp.fluid;
  const fidelityDescription = project.fidelityDescription
  const fidelityImage = project.fidelityImage.childImageSharp.fluid;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        {/*Needed to use the animate CSS library*/}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </Helmet>
        <Layout>
          {/*Passing all the props to the project component*/}
          <Project
            title={title}
            outline={outline}
            challenge={challenge}
            url={url}
            image={image}
            software={software}
            background={background}
            personaDescription={personaDescription}
            personaImage={personaImage}
            sketchDescription={sketchDescription}
            sketchImage={sketchImage}
            wireframeDescription={wireframeDescription}
            wireframeImage={wireframeImage}
            fidelityDescription={fidelityDescription}
            fidelityImage={fidelityImage}
          />
        </Layout>
    </React.Fragment>
  )
}

export default ProjectTemplate
