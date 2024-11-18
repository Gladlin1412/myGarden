import React, { useState } from "react";
import ContactImg from "../assets/contactimg.jpg";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true); 
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImg})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={formData.name}
            onChange={handleChange}
            required />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email"  value={formData.email}
            onChange={handleChange}
            required/>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit"> Send Message</button>
          </form>
          {submitted && (
        <div className="success-message">Message received! Thank you for reaching out.</div>
      )}
        
      </div>
    </div>
  );
}

export default Contact;