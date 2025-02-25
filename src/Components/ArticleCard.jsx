import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mutualfund from "../assets/mutualfund.jpg";
import Insurance from "../assets/insurance.jpg";
import Loan from "../assets/loans.jpg";
import StructuredProduct from "../assets/structuredProduct.jpg";
import "../Components/styles.css";

const articles = [
  {
    id: 1,
    image: Mutualfund,
    title: "Mutual Fund",
    description:
      "Mutual funds are one of the most helpful investment options for people of almost all ages...",
  },
  {
    id: 2,
    image: Insurance,
    title: "Insurance",
    description:
      "Insurance is an agreement, or a policy signed between an individual (policyholder) and the insurance...",
  },
  {
    id: 3,
    image: Loan,
    title: "Loan",
    description:
      "A loan is an amount of money that a bank or non-banking financial corporation (NBFC) gives...",
  },
  {
    id: 4,
    image: StructuredProduct,
    title: "Structured Products",
    description:
      "Structured products are a type of financial instrument that depend on market performance...",
  },
];

const ArticleCard = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center fw-bold" style={{color:'#57C675'}}>Our Products</h3>
      <p className="text-center mb-4 text-dark">
        All our product offerings are customer-centric to meet our client’s
        specific needs. Our products include:
      </p>

      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            {/* Responsive grid: 1 per row (xs), 2 per row (sm), 3 (md), 4 (lg) */}
            <div className="card shadow border-0 h-100">
              <img
                src={article.image}
                className="card-img-top"
                alt={article.title}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="fw-bold text-dark">{article.title}</h6>
                <p className="text-muted small flex-grow-1">{article.description}</p>
                <a href="#" className="fw-bold mt-auto"  style={{color:'#57C675'}}>
                  Read More...
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
