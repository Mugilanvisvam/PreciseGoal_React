import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const LumpsumCalculator = () => {
  const [lumpsumAmount, setLumpsumAmount] = useState(5000000);
  const [investmentPeriod, setInvestmentPeriod] = useState(30);
  const [returnRate, setReturnRate] = useState(12);

  const futureValue =
    lumpsumAmount * Math.pow(1 + returnRate / 100, investmentPeriod);
  const totalGrowth = futureValue - lumpsumAmount;

  return (
    <div className="container mt-4">
      <h2 className="text-warning text-center">Lumpsum Calculator</h2>
      <p className="text-center">
        Calculate the future value of your one-time investment.
      </p>

      <div className="row">
        {/* Input Controls */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Adjust Your Inputs</h5>

            {/* Lumpsum Amount */}
            <label>Lumpsum Investment (Rs)</label>
            <input
              type="text"
              className="form-control"
              value={lumpsumAmount.toLocaleString()}
              onChange={(e) => {
                const value = e.target.value.replace(/,/g, "");
                setLumpsumAmount(Number(value) || 0);
              }}
            />
            <input
              type="range"
              className="form-range"
              min="100000"
              max="10000000000"
              step="100000"
              value={lumpsumAmount}
              onChange={(e) => setLumpsumAmount(Number(e.target.value))}
            />

            {/* Investment Period */}
            <label>Investment Period (Years)</label>
            <input
              type="number"
              className="form-control"
              value={investmentPeriod}
              onChange={(e) => setInvestmentPeriod(Number(e.target.value) || 1)}
              min="1"
              max="100"
            />
            <input
              type="range"
              className="form-range"
              min="1"
              max="100"
              value={investmentPeriod}
              onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
            />

            {/* Expected Return Rate */}
            <label>Expected Return Rate (%)</label>
            <input
              type="number"
              className="form-control"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value) || 5)}
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
              data={[["Category", "Amount"], ["Invested", lumpsumAmount], ["Growth", totalGrowth]]}
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
            <h6>Your Lumpsum Amount</h6>
            <p className="fs-5 text-success">Rs. {lumpsumAmount.toLocaleString()}</p>

            <h6>Number of Years to Achieve Your Goal</h6>
            <p className="fs-5 text-success">{investmentPeriod} years</p>

            <h6>Your Future Amount</h6>
            <p className="fs-3 text-danger">Rs. {futureValue.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LumpsumCalculator;