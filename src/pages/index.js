import React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import Banner from "../components/banner"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  {/*Using graphql to get the image and optimize it*/}
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <Helmet>
        <title>Matthew Hoare</title>
        {/*Needed to use the animate CSS library*/}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </Helmet>
      <Layout>
        {/*Hero*/}
        <Banner/>
        {/*About Me*/}
        <article className="about-me">
          <h1>About Me</h1>
          {/*Gatsby plugin to fade in elements on scroll*/}
          <section data-sal="slide-left" data-sal-duration="500">
            <p>
              I’m a front end web developer from Liverpool, currently in my final year of study, doing web design and development at Edge Hill University.
              I started getting into web development around four years and have loved it ever since. I like how the industry is always evolving and new
              technologies are constantly emerging which always gives me a new challenges to learn.
            </p>
            <p>
              Throughout my degree, I’ve enhanced my skills on HTML5, CSS3, JavaScript and SCSS. I’ve designed and built systems through end to end testing
              with the frameworks Laravel and Nuxt.js. While also integrating these builds with API’s and Databases. I’ve further improved my workflow by
              using tools such as Gulp and also Git for version control.
            </p>
            <p>
              As a soon to be graduate I’m looking to take that next step in my career and escape from my bedroom desk into the web industry. When I’m not
              coding, I like to DJ and play a few 80’s classic’s. I guess that may save you some money off your next Christmas party.
            </p>
          </section>
          <div data-sal="slide-right" data-sal-duration="500" >
            <Img fluid={data.me.childImageSharp.fluid} />
          </div>
        </article>
      </Layout>
    </React.Fragment>
  )
}


export default IndexPage
