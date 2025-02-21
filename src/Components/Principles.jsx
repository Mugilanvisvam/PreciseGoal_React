import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../Components/styles.css'; 
import offerImage from '../assets/principles.png';

const Principles = () => {
  return (
    <section className="featured-event py-5" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="text-content" style={{ flex: 1, marginRight: '20px', color: '#000' }}>
          <h2>Our Core Principles!</h2>
          <p>Our foundation is built upon three unwavering core principles, <br/>
            ensuring clarity, security, and strategic growth in every investment decision we make.</p>
        </div>
        <div className="image-content" style={{ flex: 1 }}>
          <img src={offerImage} alt="Offer" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Principles;
