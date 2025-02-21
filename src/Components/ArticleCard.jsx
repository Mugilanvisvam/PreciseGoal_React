import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mutualfund from '../assets/mutualfund.jpg'
import Insurance from '../assets/insurance.jpg'
import Loan from '../assets/loans.jpg'
import StructuredProduct from '../assets/structuredProduct.jpg'

const articles = [
  {
    id: 1,
    image: Mutualfund, // Replace with actual image URL
    title: "Mutual Fund",
    description: "Mutual funds are one of the most helpful investment options for people of almost all ages...",
  },
  {
    id: 2,
    image: Insurance, // Replace with actual image URL
    title: "Insurance",
    description: "Insurance is an agreement, or a policy signed between an individual (policyholder) and the insurance...",
  },
  {
    id: 3,
    image: Loan, // Replace with actual image URL
    title: "Loan",
    description: "A loan is an amount of money that a bank or non-banking financial corporation (NBFC) gives...",
  },
  {
    id: 4,
    image: StructuredProduct, // Replace with actual image URL
    title: "Structured Products",
    description: "Structured products are a type of financial instrument.performance of the structured products...",
  },
];

const ArticleCard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
      <h3 className="text-center" style={{color:'#1362a2',fontWeight:'bold'}}>Our Products</h3>
      <p className="text-center mb-4 text-black">All our product offerings are customer centric to meet our client specific needs. Our products include:-</p>
        {articles.map((article) => (
          <div key={article.id} className="col-md-3 mb-4">
            {/* Bootstrap Grid: col-md-3 ensures 4 cards per row */}
            <div className="card shadow border-0" style={{ borderRadius: "12px", backgroundColor: "#f4f6f8" }}>
              <img
                src={article.image}
                className="card-img-top"
                alt="Article"
                style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px", height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold text-dark">{article.title}</span>
                </div>
                <p className="text-muted" style={{ fontSize: "14px" }}>{article.description}</p>
                <a href="#" className="fw-bold" style={{color:'#1362a2'}}>
                  Read More <span>...</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
