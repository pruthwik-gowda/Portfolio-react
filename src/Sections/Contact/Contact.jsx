import styles from './ContactStyles.module.css';
import React, { useState } from 'react';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const [state, handleSubmit] = useForm("mzzpdwgn");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmitTest = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData); // Log form data
    await handleSubmit(e); // Call Formspree's handleSubmit function
  };

  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

  return (
    <section id="section4" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmitTest}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
