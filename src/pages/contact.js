import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import Phone from "../images/phone.svg"
import Email from "../images/email.svg"

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact</title>
        {/*Needed to use the animate CSS library*/}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </Helmet>
      <Layout>
        <div className="contact">
          <h1>Contact</h1>
          <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"/>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit" className="submit">Send</button>
          </form>
          <article className="contact-info">
            <section>
              <a href="tel:07887770657">
                <Phone className="contact-icon"/>
              </a>
              <p>Call Me</p>
              <a href="tel:07887770657">07887770657</a>
            </section>
            <section>
              <a href="mailto:matthoare5@hotmail.co.uk?subject=Portfolio">
                <Email className="contact-icon"/>
              </a>
              <p>Email Me</p>
              <a href="mailto:matthoare5@hotmail.co.uk?subject=Portfolio">matthoare5@hotmail.co.uk</a>
            </section>
          </article>
        </div>
      </Layout>
    </React.Fragment>
  )
}
export default Contact
