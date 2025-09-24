import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const PPFCalculator = () => {
  const [openingYear, setOpeningYear] = useState(2010);
  const [investmentAmount, setInvestmentAmount] = useState(2000);
  const [error, setError] = useState("");
  const [ppfData, setPpfData] = useState([]);

  const handleSubmit = () => {
    if (openingYear < 1980 || openingYear > 2014) {
      setError("Please enter a year between 1980 and 2014.");
      setPpfData([]);
      return;
    }
    setError("");
    generatePPFTable();
  };

  const generatePPFTable = () => {
    let data = [];
    let rate = 8.0;
    let balance = 0;
    let investment = investmentAmount;

    for (let i = 0; i < 15; i++) {
      let year = parseInt(openingYear) + i;
      let interest = (balance + investment) * (rate / 100);
      let closingBalance = balance + investment + interest;
      let withdrawalLimit = i >= 7 ? (closingBalance * 0.5).toFixed(2) : "-";
      let loanPossible = i >= 3 ? (closingBalance * 0.25).toFixed(2) : "-";

      data.push({
        year,
        rate,
        openingBalance: balance.toFixed(2),
        annualInvestment: investment,
        totalInvestment: balance + investment,
        interest: interest.toFixed(2),
        closingBalance: closingBalance.toFixed(2),
        withdrawalLimit,
        loanPossible,
      });

      balance = closingBalance;
    }
    setPpfData(data);
  };

  // Input controls
  const inputControls = [
    {
      label: "Opening Year (1980 - 2014)",
      value: openingYear,
      setValue: setOpeningYear,
      min: 1980,
      max: 2014,
      step: 1,
    },
    {
      label: "Annual Investment (Rs.)",
      value: investmentAmount,
      setValue: setInvestmentAmount,
      min: 500,
      max: 150000,
      step: 500,
    },
  ];

//   Charts
  const charts =
    ppfData.length > 0
      ? [
          {
            title: "PPF Growth Report",
            component: (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ppfData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line
                    type="monotone"
                    dataKey="closingBalance"
                    stroke="#28a745"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            ),
          },
        ]
      : [];

  // Results
  const results =
    ppfData.length > 0
      ? [
          {
            title: "Final Balance",
            value: `₹${ppfData.slice(-1)[0].closingBalance}`,
          },
          {
            title: "Total Investment",
            value: `₹${ppfData.reduce(
              (acc, row) => acc + row.annualInvestment,
              0
            )}`,
          },
          {
            title: "Total Interest",
            value: `₹${ppfData
              .reduce((acc, row) => acc + parseFloat(row.interest), 0)
              .toFixed(2)}`,
          },
        ]
      : [];

  // Extra Content: Detailed Table
  const extraContent = (
  <div>
    {/* Calculate Button */}
    <div className="text-center mb-3">
      <button className="btn btn-success px-4" onClick={handleSubmit}>
        Calculate
      </button>
    </div>

    {/* Detailed PPF Table (only if data exists) */}
    {ppfData.length > 0 && (
      <div className="mt-4">
        <h5 className="text-center text-success">Detailed PPF Growth Report</h5>
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Year</th>
                <th>Rate (%)</th>
                <th>Opening Balance (₹)</th>
                <th>Annual Investment (₹)</th>
                <th>Total Investment (₹)</th>
                <th>Interest (₹)</th>
                <th>Closing Balance (₹)</th>
                <th>Withdrawal Limit (₹)</th>
                <th>Loan Possible (₹)</th>
              </tr>
            </thead>
            <tbody>
              {ppfData.map((row) => (
                <tr key={row.year}>
                  <td>{row.year}</td>
                  <td>{row.rate}</td>
                  <td>{row.openingBalance}</td>
                  <td>{row.annualInvestment}</td>
                  <td>{row.totalInvestment}</td>
                  <td>{row.interest}</td>
                  <td>{row.closingBalance}</td>
                  <td>{row.withdrawalLimit}</td>
                  <td>{row.loanPossible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </div>
);

  return (
    <CalculatorLayout
      title="Public Provident Fund (PPF) Calculator"
      description="Plan your long-term savings with PPF and track growth over 15 years."
      inputControls={inputControls}
      charts={charts}
      results={results}
      extraContent={extraContent} // 👈 extra section below results
    />
    
  );
};

export default PPFCalculator;
