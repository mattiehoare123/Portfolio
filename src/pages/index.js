import React from "react"
import Layout from "../components/layout"
import Icons from "../components/social-media"
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    {/*Hero*/}
    <section>
      <p>I'm</p>
      <h1><span>Matt</span>hew Hoare</h1>
      <p>Front End Web Developer</p>
      <Link to="/portfolio">
        <button>My Portfolio</button>
      </Link>
    </section>
    <Icons/>
    {/*About Me*/}
    <section>
      <h2>About Me</h2>
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
  </Layout>
)

export default IndexPage
