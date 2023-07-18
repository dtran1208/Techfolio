import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isNameRequired, setIsNameRequired] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setIsNameRequired(true);
    } else if (!isValidEmail(email)) {
      setIsEmailValid(false);
    } else {
      console.log('Form submitted:', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      setIsNameRequired(false);
      setIsEmailValid(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {isNameRequired && <p className="error">Name is required.</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && <p className="error">Invalid email address.</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
