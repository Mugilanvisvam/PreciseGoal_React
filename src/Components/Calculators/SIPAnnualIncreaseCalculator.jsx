import React, { useState } from "react";
import { Chart } from "react-google-charts";

const SIPAnnualIncreaseCalculator = () => {
    const [monthlySIP, setMonthlySIP] = useState(25000);
    const [months, setMonths] = useState(120);
    const [returnRate, setReturnRate] = useState(12.5);
    const [annualIncrease, setAnnualIncrease] = useState(10);

    // Function to calculate SIP without annual increase
    const calculateSIPWithoutIncrease = () => {
        let totalInvestment = monthlySIP * months;
        let totalGrowth = totalInvestment * (Math.pow(1 + returnRate / 100, months / 12) - 1);
        let futureValue = totalInvestment + totalGrowth;
        return { totalInvestment, totalGrowth, futureValue };
    };

    // Function to calculate SIP with annual increase
    const calculateSIPWithIncrease = () => {
        let totalInvestment = 0;
        let monthlyInvestment = monthlySIP;
        let totalGrowth = 0;

        for (let i = 0; i < months; i++) {
            totalInvestment += monthlyInvestment;
            totalGrowth += monthlyInvestment * (Math.pow(1 + returnRate / 100, (months - i) / 12) - 1);
            if ((i + 1) % 12 === 0) monthlyInvestment *= 1 + annualIncrease / 100;
        }
        let futureValue = totalInvestment + totalGrowth;
        return { totalInvestment, totalGrowth, futureValue };
    };

    const resultWithoutIncrease = calculateSIPWithoutIncrease();
    const resultWithIncrease = calculateSIPWithIncrease();

    return (
        <div className="container mt-4">
            <h2 className="text-center text-warning">SIP with Annual Increase Calculator</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card p-3">
                        <h5 className="card-title text-primary">Adjust Your Inputs</h5>

                        <label>Monthly SIP (Rs)</label>
                        <input
                            type="number"
                            className="form-control"
                            value={monthlySIP}
                            onChange={(e) => setMonthlySIP(Number(e.target.value))}
                        />
                        <input type="range" min="500" max="100000" value={monthlySIP} onChange={(e) => setMonthlySIP(Number(e.target.value))} className="form-range" />

                        <label>Investment Period (Months)</label>
                        <input
                            type="number"
                            className="form-control"
                            value={months}
                            onChange={(e) => setMonths(Number(e.target.value))}
                        />
                        <input type="range" min="12" max="600" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="form-range" />

                        <label>Expected Return Rate (%)</label>
                        <input
                            type="number"
                            className="form-control"
                            value={returnRate}
                            onChange={(e) => setReturnRate(Number(e.target.value))}
                        />
                        <input type="range" min="5" max="20" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} className="form-range" />

                        <label>Annual Increase in SIP (%)</label>
                        <input
                            type="number"
                            className="form-control"
                            value={annualIncrease}
                            onChange={(e) => setAnnualIncrease(Number(e.target.value))}
                        />
                        <input type="range" min="0" max="20" value={annualIncrease} onChange={(e) => setAnnualIncrease(Number(e.target.value))} className="form-range" />
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card p-3">
                        <h5 className="card-title text-primary">Investment Breakdown</h5>
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="250px"
                            data={[
                                ["Type", "Amount"],
                                ["Total Investment (With Increase)", resultWithIncrease.totalInvestment],
                                ["Total Growth (With Increase)", resultWithIncrease.totalGrowth],
                            ]}
                            options={{
                                pieHole: 0.4,
                                slices: { 0: { color: "#007bff" }, 1: { color: "#28a745" } },
                                pieSliceText: "label",
                                legend: { position: "bottom" },
                                fontSize: 14,
                            }}
                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-3" style={{ marginBottom: '2%' }}>
                        <h5 className="card-title text-primary">Results</h5>
                        <p><strong>Total SIP Invested (Without Increase):</strong> Rs {resultWithoutIncrease.totalInvestment.toFixed(2)}</p>
                        <p><strong>Total Growth (Without Increase):</strong> Rs {resultWithoutIncrease.totalGrowth.toFixed(2)}</p>
                        <p><strong>Future Value (Without Increase):</strong> Rs {resultWithoutIncrease.futureValue.toFixed(2)}</p>
                        <hr />
                        <p><strong>Total SIP Invested (With Increase):</strong> Rs {resultWithIncrease.totalInvestment.toFixed(2)}</p>
                        <p><strong>Total Growth (With Increase):</strong> Rs {resultWithIncrease.totalGrowth.toFixed(2)}</p>
                        <p><strong>Future Value (With Increase):</strong> Rs {resultWithIncrease.futureValue.toFixed(2)}</p>
                    </div>
                </div>
                {/* SIP Summary Table */}
                <h5 className="mt-3 text-primary">SIP with Annual Increase Amount Invested Summary</h5>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>SIP Amount / Month</th>
                            <th>Invested Amount / Year</th>
                            <th>Total Invested Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>25,000</td><td>3,00,000</td><td>3,00,000</td></tr>
                        <tr><td>2</td><td>27,500</td><td>3,30,000</td><td>6,30,000</td></tr>
                        <tr><td>3</td><td>30,250</td><td>3,63,000</td><td>9,93,000</td></tr>
                        <tr><td>4</td><td>33,275</td><td>3,99,300</td><td>13,92,300</td></tr>
                        <tr><td>5</td><td>36,603</td><td>4,39,236</td><td>18,31,536</td></tr>
                        <tr><td>6</td><td>40,263</td><td>4,83,156</td><td>23,14,692</td></tr>
                        <tr><td>7</td><td>44,289</td><td>5,31,468</td><td>28,46,160</td></tr>
                        <tr><td>8</td><td>48,718</td><td>5,84,616</td><td>34,30,776</td></tr>
                        <tr><td>9</td><td>53,590</td><td>6,43,080</td><td>40,73,856</td></tr>
                        <tr><td>10</td><td>58,949</td><td>7,07,388</td><td>47,81,244</td></tr>
                    </tbody>
                </table>

                {/* SIP Explanation */}
                <div className="mt-3">
                    <h5 className="text-primary">What is SIP (Systematic Investment Plan)?</h5>
                    <p>
                        A SIP is a vehicle offered by Mutual Funds that helps investors invest regularly...
                    </p>

                    <h5 className="text-primary">Benefits of SIP</h5>
                    <ul>
                        <li>Inculcates Savings Habit</li>
                        <li>Flexibility</li>
                        <li>Wide Choice</li>
                        <li>Convenient</li>
                        <li>Low Investment Amount</li>
                        <li>Diversification</li>
                        <li>Helps Achieve Your Goals</li>
                        <li>Free Insurance</li>
                        <li>Tax Savings</li>
                        <li>Helps in Compounding</li>
                        <li>Rupee Cost Averaging</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SIPAnnualIncreaseCalculator;
