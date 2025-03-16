import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const GoalTopUpSIPCalculator = () => {
  const [goalAmount, setGoalAmount] = useState(5000000);
  const [investmentYears, setInvestmentYears] = useState(30);
  const [returnRate, setReturnRate] = useState(12);
  const [inflationRate, setInflationRate] = useState(5);
  const [sipTopUpRate, setSipTopUpRate] = useState(10);

  const finalAmount = goalAmount * Math.pow(1 + inflationRate / 100, investmentYears);
  
  const sipAmountFirstYear = (finalAmount * (returnRate / 100)) / ((Math.pow(1 + returnRate / 100, investmentYears) - 1) / (returnRate / 100));
  
  let totalSipInvestment = 0;
  let sipAmount = sipAmountFirstYear;
  for (let i = 0; i < investmentYears; i++) {
    totalSipInvestment += sipAmount * 12;
    sipAmount *= 1 + sipTopUpRate / 100;
  }
  
  const totalGrowth = finalAmount - totalSipInvestment;

  return (
    <div className="container mt-4" style={{marginBottom:'2%'}}>
      <h2 className="text-warning text-center">Goal-Based SIP Top-Up Calculator</h2>
      <p className="text-center">Calculate your SIP with annual top-up to reach your financial goal.</p>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Adjust Your Inputs</h5>
            <label>Your Financial Goal (Rs)</label>
            <input type="text" className="form-control" value={goalAmount.toLocaleString()} readOnly />
            <input type="range" className="form-range" min="100000" max="100000000" value={goalAmount} onChange={(e) => setGoalAmount(Number(e.target.value))} />

            <label>Investment Period (Years)</label>
            <input type="text" className="form-control" value={investmentYears} readOnly />
            <input type="range" className="form-range" min="1" max="50" value={investmentYears} onChange={(e) => setInvestmentYears(Number(e.target.value))} />

            <label>Expected Rate of Return (% per annum)</label>
            <input type="text" className="form-control" value={returnRate} readOnly />
            <input type="range" className="form-range" min="5" max="20" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} />

            <label>Inflation Rate (% per annum)</label>
            <input type="text" className="form-control" value={inflationRate} readOnly />
            <input type="range" className="form-range" min="0" max="10" value={inflationRate} onChange={(e) => setInflationRate(Number(e.target.value))} />

            <label>SIP Top-Up (% per annum)</label>
            <input type="text" className="form-control" value={sipTopUpRate} readOnly />
            <input type="range" className="form-range" min="0" max="20" value={sipTopUpRate} onChange={(e) => setSipTopUpRate(Number(e.target.value))} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Investment Breakdown</h5>
            <Chart chartType="PieChart" width="100%" height="250px" data={[["Type", "Amount"], ["Amount Invested", totalSipInvestment], ["Total Growth", totalGrowth]]} options={{ pieHole: 0.4 }} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Results</h5>
            <h6>Your Targeted Wealth Amount (Inflation adjusted)</h6>
            <p className="fs-5 text-success">Rs. {finalAmount.toLocaleString()}</p>

            <h6>Number of Years to Achieve Your Goal</h6>
            <p className="fs-5 text-success">{investmentYears} years</p>

            <h6>Monthly SIP Amount (For the First Year in Rs.)</h6>
            <p className="fs-3 text-danger">Rs. {sipAmountFirstYear.toLocaleString()}</p>

            <h6>Total Amount Invested in {investmentYears} years</h6>
            <p className="fs-5 text-success">Rs. {totalSipInvestment.toLocaleString()}</p>

            <h6>Total Growth Amount</h6>
            <p className="fs-5 text-success">Rs. {totalGrowth.toLocaleString()}</p>

            <h6>Final Amount</h6>
            <p className="fs-5 text-success">Rs. {finalAmount.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalTopUpSIPCalculator;