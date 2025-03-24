import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DisclaimerPage = () => {
  return (
    <div className="container my-5">
      <div className=" border-0 shadow-lg p-4 animate__animated animate__fadeIn">
        <h2 className="text-center fw-bold text-primary mb-4">Disclaimer</h2>
        <p className="text-dark">
          Mutual fund investments are subject to market risks. Please read the scheme information
          and other related documents carefully before investing. Past performance is not indicative of
          future returns. Please consider your specific investment requirements before choosing a fund
          or designing a portfolio that suits your needs.
        </p>

        <h5 className="fw-bold text-success mt-4">Precisegoal.com</h5>
        <p className="text-dark">
          Dilli Babu.M is a Mutual Fund Distributor registered with the Association of Mutual Funds
          in India (AMFI), holding ARN No. 171703 and operated under the brand name Precisegoal.com.
        </p>

        <p className="text-dark">
          The contents of this site & related services offered by Precise Goal are solely our personal
          views. Precise Goal reserves the right to make modifications and alterations to the contents of this website.
        </p>

        <h5 className="fw-bold text-danger mt-4">No Investment Advice</h5>
        <p className="text-dark">
          Please note that we are not registered investment advisers (RIAs) and do not provide investment
          advice or charge a professional fee from our customers on any investment product.
        </p>

        <div className="alert alert-warning mt-4">
          <strong>Note:</strong> We do not make any warranty (express or implied) of any investment product and
          do not assume any responsibility for losses or damages resulting from investment decisions.
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
