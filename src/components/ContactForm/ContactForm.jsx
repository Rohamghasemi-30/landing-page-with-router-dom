import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name (optional)" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number (optional)" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm
