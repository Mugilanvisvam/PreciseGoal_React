import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row g-4 text-center">
          
          {/* Contact - Phone */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="contact-card">
              <FaPhoneAlt className="contact-icon" />
              <h6>Give us a call</h6>
              <p>+91 739 739 5959</p>
            </div>
          </div>

          {/* Contact - Email */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h6>Send Us a Message</h6>
              <p>contact@precisegoal.com</p>
            </div>
          </div>

          {/* Contact - Location */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h6>Office Location</h6>
              <p>No 9/5, Bharathi street, Velachery, Chennai – 600042.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
