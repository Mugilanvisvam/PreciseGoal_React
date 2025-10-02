import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HumanLifeValueCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(2500000);
  const [incomeIncreaseRate, setIncomeIncreaseRate] = useState(10);
  const [loanAmount, setLoanAmount] = useState(0);
  const [years, setYears] = useState(10);

  const cumulativeIncome =
    (annualIncome * ((Math.pow(1 + incomeIncreaseRate / 100, years) - 1) / (incomeIncreaseRate / 100))) || 0;
  const lifeCover = cumulativeIncome + loanAmount;

  return (
    <div className="container mt-4" style={{marginBottom:'50px'}}>
      <h2 className="text-center" style={{color:'#1363a2'}}>Human Life Value Calculator</h2>
      <p className="text-center">Find out your ideal life cover based on your income and loans.</p>

      <div className="row">
        {/* Input Controls */}
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="card-title" style={{color:'#1363a2'}}>Adjust Your Inputs</h5>
            
            {/* Annual Income */}
            <label>Your Current Annual Income (Rs)</label>
            <input
              type="text"
              className="form-control"
              value={annualIncome.toLocaleString()}
              onChange={(e) => {
                const value = e.target.value.replace(/,/g, "");
                setAnnualIncome(Number(value) || 0);
              }}
            />
            <input
              type="range"
              className="form-range"
              min="100000"
              max="10000000"
              step="10000"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
            />
            
            {/* Income Increase Rate */}
            <label>Expected Increase in Income (% per annum)</label>
            <input
              type="number"
              className="form-control"
              value={incomeIncreaseRate}
              onChange={(e) => setIncomeIncreaseRate(Number(e.target.value) || 0)}
              min="0"
              max="30"
              step="1"
            />
            <input
              type="range"
              className="form-range"
              min="0"
              max="30"
              value={incomeIncreaseRate}
              onChange={(e) => setIncomeIncreaseRate(Number(e.target.value))}
            />
            
            {/* Loan Amount */}
            <label>Outstanding Loan Amount (Rs)</label>
            <input
              type="text"
              className="form-control"
              value={loanAmount.toLocaleString()}
              onChange={(e) => {
                const value = e.target.value.replace(/,/g, "");
                setLoanAmount(Number(value) || 0);
              }}
            />
            <input
              type="range"
              className="form-range"
              min="0"
              max="10000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
            
            {/* Number of Years */}
            <label>Number of Years</label>
            <input
              type="number"
              className="form-control"
              value={years}
              onChange={(e) => setYears(Number(e.target.value) || 1)}
              min="1"
              max="30"
            />
            <input
              type="range"
              className="form-range"
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Results */}
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="card-title" style={{color:'#1363a2'}}>Results</h5>
            <h6>Your Current Annual Income</h6>
            <p className="fs-5 " style={{color:'#1363a2'}}> {'₹' + Math.round(annualIncome).toLocaleString()}</p>
            
            <h6>Expected Increase in Income (% per annum)</h6>
            <p className="fs-5 " style={{color:'#1363a2'}}>{'₹' + Math.round(incomeIncreaseRate)} %</p>
            
            <h6>Outstanding Loan Amount</h6>
            <p className="fs-5 " style={{color:'#1363a2'}}>{'₹' + Math.round(loanAmount).toLocaleString()}</p>
            
            <h6>Cumulative Income Over Next {years} Years</h6>
            <p className="fs-5 " style={{color:'#1363a2'}}>{'₹' + Math.round(cumulativeIncome).toLocaleString()}</p>
            
            <h6>Your Ideal Life Cover</h6>
            <p className="fs-3 " style={{color:'#57C675'}}>{'₹' + Math.round(lifeCover).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanLifeValueCalculator;
