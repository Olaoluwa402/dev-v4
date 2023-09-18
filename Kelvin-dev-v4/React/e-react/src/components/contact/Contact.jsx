import React, { useState } from "react";
import contact from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const contactDataHandler = (m) => {
    if (m.target.name === "name") {
      setName(m.target.value);
      console.log(name);
    }
    if (m.target.name === "email") {
      setEmail(m.target.value);
      console.log(email);
    }
    if (m.target.name === "tel") {
      setTel(m.target.value);
      console.log(tel);
    }
    if (m.target.name === "message") {
      setMessage(m.target.value);
      console.log(message);
    }
  };

  //   contactDataHandler();

  return (
    <main className={contact.main}>
      {/* Main section start  */}
      <div className={contact.dir}>
        <p>Home</p>
        <p>/</p>
        <p>Contact</p>
      </div>
      <div id={contact.contact_container}>
        <div id={contact.contact_details}>
          <div className={`${contact.contact_detail} ${contact.liner}`}>
            <div>
              <img
                src="../Assets/icons/icons-phone.png"
                alt=""
                className={contact.contact_icon}
              />
              <h5>Call To Us</h5>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className={contact.contact_detail}>
            <div>
              <img
                src="../Assets/icons/icons-mail.png"
                alt=""
                className={contact.contact_icon}
              />
              <h5>Write To US</h5>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <form action="" id={contact.contact_fields}>
          <div>
            <input
              name="name"
              type="text"
              value={name}
              placeholder="your Name"
              className={contact.input}
              onChange={contactDataHandler}
            />
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Your Email"
              className={contact.input}
              onChange={contactDataHandler}
            />
            <input
              name="tel"
              type="tel"
              value={tel}
              placeholder="Your Phone"
              className={contact.input}
              onChange={contactDataHandler}
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={message}
            placeholder="Your Message"
            className={contact.textarea}
            id={contact.textarea}
            onChange={contactDataHandler}
          ></textarea>

          <button type="submit" id={contact.button}>
            Send Message
          </button>
        </form>
      </div>
      {/* Main section end  */}
    </main>
  );
};

export default Contact;
