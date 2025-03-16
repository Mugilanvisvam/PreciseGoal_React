import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const RetirementPlanningCalculator = () => {
    const [targetAmount, setTargetAmount] = useState(20000000);
    const [currentAge, setCurrentAge] = useState(25);
    const [retirementAge, setRetirementAge] = useState(75);
    const [inflationRate, setInflationRate] = useState(7.5);
    const [returnRate, setReturnRate] = useState(12.5);
    const [currentSavings, setCurrentSavings] = useState(100000);

    const yearsToSave = retirementAge - currentAge;
    const inflationAdjustedRetirementAmount =
        targetAmount * Math.pow(1 + inflationRate / 100, yearsToSave);
    const savingsGrowth = currentSavings * Math.pow(1 + returnRate / 100, yearsToSave);
    const finalTargetAmount = inflationAdjustedRetirementAmount - savingsGrowth;
    const monthlySavingsRequired = finalTargetAmount / (yearsToSave * 12);
    const totalInvestedAmount = monthlySavingsRequired * 12 * yearsToSave;
    const totalGrowthAmount = finalTargetAmount - totalInvestedAmount;

    const pieChartData = [
        ["Category", "Amount"],
        ["Total Invested", totalInvestedAmount],
        ["Growth Amount", totalGrowthAmount],
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card p-3">
                        <h5 className="card-title text-primary">Adjust Your Inputs</h5>

                        <label>Retirement Target Amount (Rs)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={targetAmount.toLocaleString()}
                            onChange={(e) => setTargetAmount(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            className="form-range"
                            min="1000000"
                            max="100000000"
                            value={targetAmount}
                            onChange={(e) => setTargetAmount(Number(e.target.value))}
                        />

                        <label>Your Age Today</label>
                        <input
                            type="text"
                            className="form-control"
                            value={currentAge}
                            onChange={(e) => setCurrentAge(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            className="form-range"
                            min="18"
                            max="60"
                            value={currentAge}
                            onChange={(e) => setCurrentAge(Number(e.target.value))}
                        />

                        <label>Planned Retirement Age</label>
                        <input
                            type="text"
                            className="form-control"
                            value={retirementAge}
                            onChange={(e) => setRetirementAge(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            className="form-range"
                            min="40"
                            max="80"
                            value={retirementAge}
                            onChange={(e) => setRetirementAge(Number(e.target.value))}
                        />

                        <label>Inflation Rate (%)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={inflationRate}
                            onChange={(e) => setInflationRate(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="15"
                            value={inflationRate}
                            onChange={(e) => setInflationRate(Number(e.target.value))}
                        />

                        <label>Expected Return Rate (%)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={returnRate}
                            onChange={(e) => setReturnRate(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            className="form-range"
                            min="5"
                            max="20"
                            value={returnRate}
                            onChange={(e) => setReturnRate(Number(e.target.value))}
                        />

                        <label>Current Savings (Rs)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={currentSavings}
                            onChange={(e) => setCurrentSavings(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="10000000"
                            value={currentSavings}
                            onChange={(e) => setCurrentSavings(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card p-3">
                        <h5 className="card-title text-success">Results</h5>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Retirement Amount (Inflation Adjusted)</td>
                                    <td>₹ {inflationAdjustedRetirementAmount.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Growth of Your Savings Amount (12.5% per annum)</td>
                                    <td>₹ {savingsGrowth.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Final Targeted Amount (Minus Growth)</td>
                                    <td>₹ {finalTargetAmount.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Number of Years to Save</td>
                                    <td>{yearsToSave} years</td>
                                </tr>
                                <tr>
                                    <td>Monthly Savings Required</td>
                                    <td>₹ {monthlySavingsRequired.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Total Amount Invested in {yearsToSave} years</td>
                                    <td>₹ {totalInvestedAmount.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Total Growth Amount</td>
                                    <td>₹ {totalGrowthAmount.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="mt-4 p-4 bg-light rounded shadow">
                            <h4 className="text-center text-primary mb-3">📊 Investment Summary</h4>

                            <div className="d-flex flex-column align-items-center">
                                <div className="border rounded p-3 bg-white shadow-sm w-100">
                                    <h5 className="text-center text-secondary">Investment Breakdown</h5>
                                    <Chart
                                        chartType="PieChart"
                                        data={pieChartData}
                                        options={{
                                            title: "Investment Distribution",
                                            pieHole: 0.4,
                                            slices: {
                                                0: { color: "#4CAF50" },  // Green for Invested Amount
                                                1: { color: "#FFC107" },  // Yellow for Growth Amount
                                                2: { color: "#2196F3" },  // Blue for Expected Return Contribution
                                            },
                                            legend: { position: "bottom" },
                                            fontName: "Arial",
                                            fontSize: 14,
                                        }}
                                        width="100%"
                                        height="300px"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RetirementPlanningCalculator;
