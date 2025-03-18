import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const InflationCalculator = () => {
  const [currentCost, setCurrentCost] = useState(2500000);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(10);

  const futureCost = currentCost * Math.pow(1 + inflationRate / 100, years);

  return (
    <div className="container mt-4">
      <h2 className="text-warning text-center">Inflation Calculator</h2>
      <p className="text-center">
        Calculate the future value of money based on the inflation rate.
      </p>

      <div className="row">
        {/* Input Controls */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Adjust Your Inputs</h5>

            {/* Current Cost */}
            <label>Current Cost (Rs)</label>
            <input
              type="text"
              className="form-control"
              value={currentCost.toLocaleString()}
              readOnly
            />
            <input
              type="range"
              className="form-range"
              min="100000"
              max="100000000"
              step="10000"
              value={currentCost}
              onChange={(e) => setCurrentCost(Number(e.target.value))}
            />

            {/* Inflation Rate */}
            <label>Inflation Rate (% per annum)</label>
            <input
              type="text"
              className="form-control"
              value={inflationRate + " %"}
              readOnly
            />
            <input
              type="range"
              className="form-range"
              min="0"
              max="20"
              step="0.1"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
            />

            {/* Number of Years */}
            <label>Number of Years</label>
            <input
              type="text"
              className="form-control"
              value={years + " Years"}
              readOnly
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

        {/* Pie Chart */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="card-title text-primary">Investment Breakdown</h5>
            <Chart
              chartType="PieChart"
              width="100%"
              height="350px"
              data={[
                ["Category", "Amount"],
                ["Current Cost", currentCost],
                ["Inflation Growth", futureCost - currentCost],
              ]}
              options={{
                pieHole: 0.4,
                legend: { position: "bottom", alignment: "center" },
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
            <h6>Current Cost</h6>
            <p className="fs-5 text-success">Rs. {currentCost.toLocaleString()}</p>

            <h6>Inflation Rate</h6>
            <p className="fs-5 text-success">{inflationRate} %</p>

            <h6>Number of Years</h6>
            <p className="fs-5 text-success">{years} Years</p>

            <h6>Future Cost</h6>
            <p className="fs-3 text-danger">Rs. {futureCost.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InflationCalculator;
