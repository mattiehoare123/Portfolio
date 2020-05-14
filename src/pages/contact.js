import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"/>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </form>
      <article>
        <section>
          <p>Call Me</p>
          <a href="tel:1-847-555-5555">1-847-555-5555</a>
        </section>
        <section>
          <p>Email Me</p>
          <a href="mailto:matthoare5@hotmail.co.uk?subject=Portfolio">matthoare5@hotmail.co.uk</a>
        </section>
        <section>
          <p>Follow Me</p>
          <p>Social Media Icons</p>
        </section>
      </article>
    </Layout>
  )
}
export default Contact
