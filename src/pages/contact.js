import React from "react"
import Layout from "../components/layout"
import Phone from "../images/phone.svg"
import Email from "../images/email.svg"

const Contact = () => {
  return (
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
            <Phone className="contact-icon"/>
            <p>Call Me</p>
            <a href="tel:1-847-555-5555">07887770657</a>
          </section>
          <section>
            <Email className="contact-icon"/>
            <p>Email Me</p>
            <a href="mailto:matthoare5@hotmail.co.uk?subject=Portfolio">matthoare5@hotmail.co.uk</a>
          </section>
        </article>
      </div>
    </Layout>
  )
}
export default Contact
