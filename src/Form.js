import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Invalid email format");
      return;
    }
    try {
      const response = await axios.post("http://34.225.132.160:8002/api", {
        email,
      });
      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setMessage("Invalid email domain: @ez.works");
      } else {
        setMessage("An error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <button type="submit">Contact Me</button>
      <p>{message}</p>
    </form>
  );
}

export default ContactForm;
