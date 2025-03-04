import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.comment || !formData.accepted) {
      alert("Please fill all required fields and accept the policy.");
      return;
    }
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold" >Contact Us</h2>
        <p className="text-muted" style={{color:'#57C675'}}>Let’s explore how PreciseGoal can work for you</p>
      </div>

      <div className="row">
        {/* Left Side - Contact Info */}
        <div className="col-md-5 mb-4">
          <div className="bg-light p-4 rounded shadow-sm">
            <h4 className="fw-bold"  style={{color:'#57C675'}}>📞 Get in Touch</h4>
            <div className="mt-3">
              <p className="mb-2">
                <FaPhoneAlt className="text-primary me-2" />
                <strong>Dillibabu M:</strong> <a href="tel:+917397395959" className="text-dark text-decoration-none">+91 739 739 5959</a>
              </p>
              <p className="mb-2">
                <FaPhoneAlt className="text-primary me-2" />
                <strong>Hema Raju:</strong> <a href="tel:+919952964768" className="text-dark text-decoration-none">+91 995 296 4768</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-md-7">
          <div className="p-4 bg-white shadow-sm rounded">
            <h4 className="fw-bold mb-3" style={{color:'#57C675'}}>Help us serve you better</h4>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name *</label>
                  <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name *</label>
                  <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Comment *</label>
                <textarea className="form-control" rows="4" name="comment" value={formData.comment} onChange={handleChange} required></textarea>
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" name="accepted" checked={formData.accepted} onChange={handleChange} required />
                <label className="form-check-label">By submitting, I acknowledge receipt of the <a href="#" className="text-primary">PreciseGoal privacy policy</a>.</label>
              </div>

              <button type="submit" className="btn w-100" style={{ backgroundColor: "#57C675", borderColor: "#57C675", color: "#fff" }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
