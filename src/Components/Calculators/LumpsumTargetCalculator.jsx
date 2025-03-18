import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const LumpsumTargetCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(5000000);
  const [years, setYears] = useState(30);
  const [returnRate, setReturnRate] = useState(12);

  const lumpsumInvestment = targetAmount / Math.pow(1 + returnRate / 100, years);

  return (
    <div className="container mt-4">
      <h2 className="text-warning text-center">Lumpsum Target Calculator</h2>
      <p className="text-center">
        Calculate how much you need to invest today to achieve your financial goal.
      </p>

      <div className="row">
        {/* Input Controls */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Adjust Your Inputs</h5>

            {/* Target Amount */}
            <label>How much amount you want to save (Rs)</label>
            <input
              type="text"
              className="form-control"
              value={targetAmount.toLocaleString()}
              onChange={(e) => setTargetAmount(Number(e.target.value.replace(/,/g, "")) || 0)}
            />
            <input
              type="range"
              className="form-range"
              min="100000"
              max="10000000000"
              step="100000"
              value={targetAmount}
              onChange={(e) => setTargetAmount(Number(e.target.value))}
            />

            {/* Investment Period */}
            <label>How many years after you need this amount (Years)</label>
            <input
              type="number"
              className="form-control"
              value={years}
              onChange={(e) => setYears(Number(e.target.value) || 0)}
              min="0"
              max="100"
            />
            <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />

            {/* Expected Return Rate */}
            <label>Expected rate of return (% per annum)</label>
            <input
              type="number"
              className="form-control"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value) || 0)}
              min="0"
              max="25"
              step="0.1"
            />
            <input
              type="range"
              className="form-range"
              min="0"
              max="25"
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
              height="300px"
              data={[["Category", "Amount"], ["Lumpsum Investment", lumpsumInvestment], ["Growth", targetAmount - lumpsumInvestment]]}
              options={{
                pieHole: 0.4,
                legend: { position: "bottom", alignment: "center", textStyle: { fontSize: 14 } },
                chartArea: { width: "90%", height: "80%" },
                tooltip: { showColorCode: true },
              }}
            />
          </div>
        </div>

        {/* Results */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Results</h5>
            <h6>Your Targeted Amount</h6>
            <p className="fs-5 text-success">Rs. {targetAmount.toLocaleString()}</p>

            <h6>Number of years to achieve your goal</h6>
            <p className="fs-5 text-success">{years} Years</p>

            <h6>Lumpsum Investment Amount</h6>
            <p className="fs-3 text-danger">Rs. {lumpsumInvestment.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LumpsumTargetCalculator;
