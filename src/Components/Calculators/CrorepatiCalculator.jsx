import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const CrorepatiCalculator = () => {
  const [wealthAmount, setWealthAmount] = useState(500000000);
  const [currentAge, setCurrentAge] = useState(25);
  const [targetAge, setTargetAge] = useState(75);
  const [inflationRate, setInflationRate] = useState(5);
  const [returnRate, setReturnRate] = useState(12.5);
  const [savings, setSavings] = useState(500000);

  const yearsToSave = targetAge - currentAge;
  const finalAmount =
    wealthAmount * Math.pow(1 + inflationRate / 100, yearsToSave);
  const growthSavings = savings * Math.pow(1 + returnRate / 100, yearsToSave);
  const sipInvestment =
    (finalAmount - growthSavings) /
    ((Math.pow(1 + returnRate / 100, yearsToSave) - 1) / (returnRate / 100));

  const totalSipInvestment = sipInvestment * 12 * yearsToSave; // Total SIP invested over years
  const totalGrowth = finalAmount - totalSipInvestment; // Growth of the total invested amount

  return (
    <div className="container mt-4">
      <h2 className="text-warning text-center">Become A Crorepati Calculator</h2>
      <p className="text-center">
        Calculate how much you need to save monthly to become a crorepati.
      </p>

      <div className="row">
        {/* Input Controls Card */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Adjust Your Inputs</h5>
            <label>Desired Wealth (Rs)</label>
            <input
              type="text"
              className="form-control"
              value={wealthAmount.toLocaleString()}
              readOnly
            />
            <input
              type="range"
              className="form-range"
              min="10000000"
              max="1000000000"
              value={wealthAmount}
              onChange={(e) => setWealthAmount(Number(e.target.value))}
            />

            <label>Current Age</label>
            <input
              type="text"
              className="form-control"
              value={currentAge}
              readOnly
            />
            <input
              type="range"
              className="form-range"
              min="10"
              max="100"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
            />

            <label>Target Age</label>
            <input
              type="text"
              className="form-control"
              value={targetAge}
              readOnly
            />
            <input
              type="range"
              className="form-range"
              min="10"
              max="100"
              value={targetAge}
              onChange={(e) => setTargetAge(Number(e.target.value))}
            />

            <label>Inflation Rate (%)</label>
            <input
              type="text"
              className="form-control"
              value={inflationRate}
              readOnly
            />
            <input
              type="range"
              className="form-range"
              min="0"
              max="10"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
            />

            <label>Expected Return Rate (%)</label>
            <input
              type="text"
              className="form-control"
              value={returnRate}
              readOnly
            />
            <input
              type="range"
              className="form-range"
              min="5"
              max="20"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Pie Chart Card */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Investment Breakdown</h5>
            <Chart
              chartType="PieChart"
              width="100%"
              height="250px"
              data={[
                ["Type", "Amount"],
                ["Amount Invested", totalSipInvestment],
                ["Total Growth", totalGrowth],
              ]}
              options={{ pieHole: 0.4 }}
            />
          </div>
        </div>

        {/* Results Card */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Results</h5>
            <h6>Your Targeted Wealth Amount (Inflation adjusted)</h6>
            <p className="fs-5 text-success">Rs. {finalAmount.toLocaleString()}</p>

            <h6>Growth of Your Savings Amount (12.5% per annum)</h6>
            <p className="fs-5 text-success">Rs. {growthSavings.toLocaleString()}</p>

            <h6>Final Targeted Amount (Minus growth of your savings amount)</h6>
            <p className="fs-5 text-success">Rs. {(finalAmount - growthSavings).toLocaleString()}</p>

            <h6>Number of Years You Need to Save</h6>
            <p className="fs-5 text-success">{yearsToSave} years</p>

            <h6>Monthly SIP Investment Required to Become Crorepati</h6>
            <p className="fs-3 text-danger">Rs. {sipInvestment.toLocaleString()}</p>

            <h6>Total Amount Invested through SIP in {yearsToSave} years</h6>
            <p className="fs-5 text-success">Rs. {totalSipInvestment.toLocaleString()}</p>

            <h6>Total Growth Amount</h6>
            <p className="fs-5 text-success">Rs. {totalGrowth.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrorepatiCalculator;
