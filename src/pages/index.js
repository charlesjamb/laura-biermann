import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="flexCenterColumn">
    <h1 className='construction-woman'></h1>
    <h1 style={{ 'color': 'orange' }}>Site en construction</h1>
    <div id="contact" className="flexCenterColumn w-100">
      <h2>Me contacter</h2>
        <div id="contact-form" className="w-100">
          <form method="POST" action="https://formspree.io/l.biermann@hotmail.fr" className="flexCenterColumn">
            <input type="hidden" name="_subject" value="Demande de contact via laura-biermann.com" />
            <input type="email" name="_replyto" placeholder="Votre email" className="contactEmail" required />
            <textarea name="message" placeholder="Votre message" className="contactTextArea" required></textarea>
            <button type="submit" className="contactButton">Envoyer</button>
          </form>
      </div>
    </div>
    {
      // <Link to="/page-2/">Go to page 2</Link>
    }
  </div>
)

export default IndexPage
