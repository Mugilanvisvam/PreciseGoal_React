import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const TargetAmountSIPCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(2500000);
  const [investmentPeriod, setInvestmentPeriod] = useState(30);
  const [inflationRate, setInflationRate] = useState(5);
  const [returnRate, setReturnRate] = useState(12);

  const inflationAdjustedAmount =
    targetAmount * Math.pow(1 + inflationRate / 100, investmentPeriod);
  const monthlySIP =
    (inflationAdjustedAmount * (returnRate / 100 / 12)) /
    (Math.pow(1 + returnRate / 100 / 12, investmentPeriod * 12) - 1);
  const totalInvestment = monthlySIP * 12 * investmentPeriod;
  const totalGrowth = inflationAdjustedAmount - totalInvestment;

  return (
    <div className="container mt-4">
      <h2 className="text-warning text-center">Target Amount SIP Calculator</h2>
      <p className="text-center">
        Calculate how much you need to invest monthly to achieve your goal.
      </p>

      <div className="row">
        {/* Input Controls */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Adjust Your Inputs</h5>

            {/* Target Amount */}
            <label>Target Amount (Rs)</label>
            <input
              type="text"
              className="form-control"
              value={targetAmount.toLocaleString()}
              onChange={(e) => {
                const value = e.target.value.replace(/,/g, ""); // Remove commas
                setTargetAmount(Number(value) || 0);
              }}
            />
            <input
              type="range"
              className="form-range"
              min="100000"
              max="10000000"
              step="10000"
              value={targetAmount}
              onChange={(e) => setTargetAmount(Number(e.target.value))}
            />

            {/* Investment Period */}
            <label>Investment Period (Years)</label>
            <input
              type="number"
              className="form-control"
              value={investmentPeriod}
              onChange={(e) => setInvestmentPeriod(Number(e.target.value) || 1)}
              min="1"
              max="50"
            />
            <input
              type="range"
              className="form-range"
              min="1"
              max="50"
              value={investmentPeriod}
              onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
            />

            {/* Inflation Rate */}
            <label>Inflation Rate (%)</label>
            <input
              type="number"
              className="form-control"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value) || 0)}
              min="0"
              max="10"
              step="0.1"
            />
            <input
              type="range"
              className="form-range"
              min="0"
              max="10"
              step="0.1"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
            />

            {/* Expected Return Rate */}
            <label>Expected Return Rate (%)</label>
            <input
              type="number"
              className="form-control"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value) || 5)}
              min="5"
              max="20"
              step="0.1"
            />
            <input
              type="range"
              className="form-range"
              min="5"
              max="20"
              step="0.1"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
            />
          </div>
        </div>


        {/* Pie Chart */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Investment Breakdown</h5>
            <Chart
              chartType="PieChart"
              width="100%"
              height="300px" // Increased height for better spacing
              data={[
                ["Category", "Amount"],
                ["Invested", totalInvestment], // Shorter labels
                ["Growth", totalGrowth],
              ]}
              options={{
                pieHole: 0.4,
                legend: {
                  position: "bottom", // Moves legend below the chart
                  alignment: "center",
                  textStyle: { fontSize: 14 }, // Adjust font size
                },
                chartArea: { width: "90%", height: "80%" }, // Expands the chart
                tooltip: { showColorCode: true }, // Enables tooltips
              }}
            />
          </div>
        </div>


        {/* Results */}
        <div className="col-md-4">
          <div className="card p-3" style={{ marginBottom: '2%' }}>
            <h5 className="card-title text-primary">Results</h5>
            <h6>Your Targeted Amount (Inflation Adjusted)</h6>
            <p className="fs-5 text-success">Rs. {inflationAdjustedAmount.toLocaleString()}</p>

            <h6>Number of Years You Need to Save</h6>
            <p className="fs-5 text-success">{investmentPeriod} years</p>

            <h6>Monthly SIP Investment Required</h6>
            <p className="fs-3 text-danger">Rs. {monthlySIP.toFixed(2)}</p>

            <h6>Total Amount Invested in {investmentPeriod} years</h6>
            <p className="fs-5 text-success">Rs. {totalInvestment.toLocaleString()}</p>

            <h6>Total Growth Amount</h6>
            <p className="fs-5 text-success">Rs. {totalGrowth.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAmountSIPCalculator;