import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./contact.css";

const Contact = () => (
  <section className="contact-section">
    <h2 className="contact-title">Contact</h2>
    <div className="contact-underline"></div>
    <p className="contact-desc">
      {/* Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit */}
    </p>
    <div className="contact-grid">
      <div className="contact-info fade-in-left">
        <div className="contact-info-block">
          <div className="contact-info-icon"><FaMapMarkerAlt /></div>
          <div>
            <h3>Address</h3>
            <p>Bhubaneswar, Odisha</p>
          </div>
        </div>
        <div className="contact-info-block">
          <div className="contact-info-icon"><FaPhoneAlt /></div>
          <div>
            <h3>Call Me</h3>
            <p>7326979835</p>
          </div>
        </div>
        <div className="contact-info-block">
          <div className="contact-info-icon"><FaEnvelope /></div>
          <div>
            <h3>Email</h3>
            <p>mainyaverma5@gmail.com</p>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Downtown+Conference+Center,+New+York,+NY,+USA&output=embed"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            style={{ border: 0, width: "100%", height: "180px", borderRadius: "8px" }}
          ></iframe>
        </div>
      </div>
      <form className="contact-form fade-in-right">
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" rows={7} required />
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;