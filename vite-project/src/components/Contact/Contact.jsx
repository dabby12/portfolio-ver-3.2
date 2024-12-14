import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="ml-64 min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-50 p-8">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-center mb-8">
        Get In Touch
      </h1>

      <ContactForm />
    </div>
  );
};

export default Contact;
