import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent! Name: ${formData.name}, Email: ${formData.email}`);
    // Aqui você pode integrar com um backend ou serviço de e-mail
  };

  return (
    <div className={styles.contact_container}>
      <h1>Contactos</h1>
      <form onSubmit={handleSubmit} className={styles.contact_form}>
        <div className={styles.form_group}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submit_button}>Enviar a Mensagem</button>
      </form>
    </div>
  );
}

export default Contact;
