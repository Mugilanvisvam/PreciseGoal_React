import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const GoalSettingCalculator = () => {
  const [dreamAmount, setDreamAmount] = useState(10000000);
  const [years, setYears] = useState(30);
  const [inflationRate, setInflationRate] = useState(8);
  const [returnRate, setReturnRate] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(0);

  const calculateGoal = () => {
    const adjustedDreamAmount =
      dreamAmount * Math.pow(1 + inflationRate / 100, years);
    const futureSavings = currentSavings * Math.pow(1 + returnRate / 100, years);
    const finalTargetAmount = adjustedDreamAmount - futureSavings;
    const monthlyInvestment =
      (finalTargetAmount * (returnRate / 100 / 12)) /
      (Math.pow(1 + returnRate / 100 / 12, years * 12) - 1);
    const totalInvestment = monthlyInvestment * years * 12;
    const totalGrowth = adjustedDreamAmount - totalInvestment;

    return {
      adjustedDreamAmount: adjustedDreamAmount.toFixed(2),
      futureSavings: futureSavings.toFixed(2),
      finalTargetAmount: finalTargetAmount.toFixed(2),
      monthlyInvestment: monthlyInvestment.toFixed(2),
      totalInvestment: totalInvestment.toFixed(2),
      totalGrowth: totalGrowth.toFixed(2),
    };
  };

  const results = calculateGoal();

  const data = [
    ["Category", "Amount"],
    ["Total Investment", parseFloat(results.totalInvestment)],
    ["Total Growth", parseFloat(results.totalGrowth)],
  ];

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow-lg">
      <h2 className="text-center text-warning mb-4">🎯 Goal Setting Calculator</h2>

      {/* Input Fields */}
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Dream Amount (Rs): {dreamAmount}</label>
            <input
              type="range"
              min="10000000"
              max="1000000000"
              step="1000000"
              value={dreamAmount}
              onChange={(e) => setDreamAmount(Number(e.target.value))}
              className="form-range"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Years to Achieve Goal: {years}</label>
            <input
              type="range"
              min="1"
              max="100"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="form-range"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Inflation Rate (% p.a.): {inflationRate}</label>
            <input
              type="range"
              min="5"
              max="15"
              step="0.5"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className="form-range"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Expected Return Rate (% p.a.): {returnRate}</label>
            <input
              type="range"
              min="5"
              max="20"
              step="0.5"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="form-range"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Current Savings (Rs): {currentSavings}</label>
            <input
              type="range"
              min="0"
              max="100000000"
              step="500000"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="form-range"
            />
          </div>
        </div>

        {/* Results and Pie Chart */}
        <div className="col-md-6">
          <div className="card p-3 bg-light shadow-sm">
            <h4 className="text-center">📊 Results</h4>
            <p><strong>Targeted Dream Amount (Inflation Adjusted):</strong> Rs. {results.adjustedDreamAmount}</p>
            <p><strong>Growth of Current Savings:</strong> Rs. {results.futureSavings}</p>
            <p><strong>Final Targeted Amount:</strong> Rs. {results.finalTargetAmount}</p>
            <p><strong>Monthly Savings Required:</strong> Rs. {results.monthlyInvestment}</p>
            <p><strong>Total Amount Invested in {years} years:</strong> Rs. {results.totalInvestment}</p>
            <p><strong>Total Growth Amount:</strong> Rs. {results.totalGrowth}</p>
          </div>

          {/* Pie Chart Section */}
          <div className="card p-3 mt-4 shadow-sm">
            <h4 className="text-center">📈 Investment Growth Breakdown</h4>
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data}
              options={{
                title: "Investment vs. Growth",
                pieHole: 0.3,
                is3D: true,
                slices: {
                  0: { color: "#007bff" }, // Blue for investment
                  1: { color: "#28a745" }, // Green for growth
                },
                fontSize: 14,
                legend: { position: "bottom" },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSettingCalculator;
