import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sectionVideo from '../assets/section.mp4'; // Import the video
const HeroSection = () => {
  return (
    <section
    className="hero d-flex align-items-center text-white position-relative"
    style={{
      height: '90vh',
      overflow: 'hidden', 
    }}
  >
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{ objectFit: 'cover', zIndex: '-1' }}
    >
      <source src={sectionVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div 
  className="text-justify" 
  style={{ 
    maxWidth: '50%', /* Adjust to keep straight edges */
    textAlign: 'justify', 
    lineHeight: '1.8' /* Ensures good spacing between lines */
  }}
>
  <h1 style={{ fontSize: '3rem',marginLeft:'10%', marginBottom: '1rem' }}>To invest, the right way.</h1>
  
  <p style={{marginLeft:'10%'}}>
    The approach to investing should be simple, clear, and straightforward. We strive to build 
    diversified portfolios using technology to efficiently manage them with our expertise.
    Our goal is to keep you updated on where your money is invested. We provide unbiased services 
    to help you find the right choice of products for you.
  </p>

  <button className="btn btn-warning hero-btn" style={{ marginTop: '1rem',marginLeft:'10%',backgroundColor: '#1362a2', borderColor: '#1362a2' }}>
    Explore Now
  </button>
</div>

    </section>
  );
};

export default HeroSection;
