import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  // State hooks to capture user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // Used for success/error messages

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the fields are not empty before sending
    if (!name || !email || !message) {
      setStatus('All fields are required.');
      return;
    }

    // Sending the form data to EmailJS using the environment variables
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from .env
        e.target, // The form itself
        process.env.REACT_APP_EMAILJS_USER_ID // User ID from .env
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          setStatus('Your message has been sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('Error:', error.text);
          setStatus('There was an error sending your message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form-container bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your Message"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-center text-lg">{status}</p>} {/* Display success or error message */}
    </div>
  );
};

export default ContactForm;
