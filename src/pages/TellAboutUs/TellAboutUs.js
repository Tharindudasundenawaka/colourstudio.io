import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import "./tellAboutUs.css";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailMessage, setEmailemailMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          message.success("Message Send Sucsessfully");
        },
        (error) => {
          console.log(error.text);
          message.error("Message Not Send");
        }
      );

    setEmail("");
    setEmailemailMessage("");
    setName("");
    setPhoneNumber("");
  };

  return (
    <div>
      <div>
        <h1 className="tellus-header">communicate with us</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="tellus-form">
        <div className="form-input">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="user_name"
            required
          />
        </div>
        <div className="form-input">
          <label>Phone:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            name="user_phone"
            required
          />
        </div>
        <div className="form-input">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
            required
          />
        </div>

        <div className="form-input">
          <label>Message:</label>
          <textarea
            value={emailMessage}
            onChange={(e) => setEmailemailMessage(e.target.value)}
            name="message"
            required
          />
        </div>
        <button type="submit" value="Send" className="s-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
