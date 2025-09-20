import React from "react";
import "./../styles/Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <h1>CONTACTEZ-NOUS</h1>
      <p>Nous sommes disponibles pour toute question ou demande d’information.</p>
      <div className="contact-info">
        <div><FaEnvelope /> contact@gwicratings.com</div>
        <div><FaPhone /> +225 00 00 00 00</div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
