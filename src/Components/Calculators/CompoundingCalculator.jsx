import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const CompoundingCalculator = () => {
  const [principal, setPrincipal] = useState(2500000);
  const [interestRate, setInterestRate] = useState(12.5);
  const [years, setYears] = useState(20);
  const [interval, setInterval] = useState("Yearly");

  const compoundingsPerYear = {
    Yearly: 1,
    "Half Yearly": 2,
    Quarterly: 4,
    Monthly: 12,
  };

  const calculateMaturity = () => {
    const n = compoundingsPerYear[interval];
    const maturityAmount =
      principal * Math.pow(1 + interestRate / 100 / n, n * years);

    return {
      maturityAmount: maturityAmount.toFixed(2),
      interestEarned: (maturityAmount - principal).toFixed(2),
    };
  };

  const results = calculateMaturity();

  const data = [
    ["Category", "Amount"],
    ["Principal", principal],
    ["Interest Earned", parseFloat(results.interestEarned)],
  ];

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow-lg">
      <h2 className="text-center text-warning mb-4">📈Compounding Calculator</h2>

      <div className="row g-3">
        {/* Input Fields */}
        <div className="col-md-4">
          <div className="card p-3 h-100 d-flex flex-column">
            <h5 className="mb-3">Input Details</h5>

            <label className="form-label">Principal Amount (Rs): {principal}</label>
            <input
              type="range"
              className="form-range"
              min="100000"
              max="100000000"
              step="100000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
            />

            <label className="form-label">Interest Rate (% per annum): {interestRate}%</label>
            <input
              type="range"
              className="form-range"
              min="5"
              max="20"
              step="0.5"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />

            <label className="form-label">Period (in years): {years}</label>
            <input
              type="range"
              className="form-range"
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />

            <label className="form-label">Compound Interval:</label>
            <select
              className="form-select"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
            >
              {Object.keys(compoundingsPerYear).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

       {/* Pie Chart - Larger */}
<div className="col-md-4">
  <div className="card p-3 h-100 d-flex flex-column justify-content-center align-items-center">
    <h5 className="mb-3">Investment Breakdown</h5>
    <div style={{ width: "100%", height: "400px" }}> {/* Increased container size */}
      <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={data}
        options={{
          title: "Investment Breakdown",
          pieHole: 0.4,
          slices: { 0: { color: "#007bff" }, 1: { color: "#28a745" } },
          chartArea: { width: "90%", height: "90%" }, // Expands chart area
        }}
      />
    </div>
  </div>
</div>


        {/* Maturity Details */}
        <div className="col-md-4">
          <div className="card p-3 h-100 d-flex flex-column">
            <h5 className="mb-3">Maturity Details</h5>
            <p>💰 <strong>Principal Amount:</strong> Rs. {principal.toLocaleString()}</p>
            <p>📈 <strong>Interest Rate:</strong> {interestRate}% per annum</p>
            <p>⏳ <strong>Period:</strong> {years} Years</p>
            <p>🏆 <strong>Total Maturity Amount:</strong> Rs. {parseFloat(results.maturityAmount).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundingCalculator;
