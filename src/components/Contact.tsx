import React from 'react';
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css'; 

export default function Contact() {
  return (
    <div id="contact" className="container">
      <div>
        <div>
          <h2 className="heading" data-aos="zoom-in">Get in touch</h2>
          <p className="subheading" data-aos="zoom-in">
            Drop me a line, send me a message
          </p>
        </div>
        <div>
          <div className="contact-info" data-aos="zoom-in">
            <GoMail size={35} />
            <span>wwwtanoli302@gmail.com</span>
          </div>
          <div className="contact-info" data-aos="zoom-in">
            <BsTelephone size={35} />
            <span>(021) 000-0000</span>
          </div>
        </div>
        <div>
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="message">Message</label>
            <textarea
              className="textarea"
              id="message"
              rows={8}
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button className="button" data-aos="zoom-in">Send</button>
        </div>
      </div>
    </div>
  );
}
