import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const CompoundingCalculator = () => {
  const [principal, setPrincipal] = useState(2500000);
  const [interestRate, setInterestRate] = useState(12.5);
  const [years, setYears] = useState(20);
  const [interval, setInterval] = useState("Yearly");

  const compoundingsPerYear = {
    Yearly: 1,
    "Half Yearly": 2,
    Quarterly: 4,
    Monthly: 12,
  };

  const calculateMaturity = () => {
    const n = compoundingsPerYear[interval];
    const maturityAmount = principal * Math.pow(1 + interestRate / 100 / n, n * years);

    return {
      maturityAmount: maturityAmount.toFixed(2),
      interestEarned: (maturityAmount - principal).toFixed(2),
    };
  };

  const results = calculateMaturity();

  // Input Controls
  const inputControls = [
  { label: "Principal Amount (Rs)", value: principal, setValue: setPrincipal, min: 100000, max: 100000000, step: 100000, type: "range" },
  { label: "Interest Rate (% per annum)", value: interestRate, setValue: setInterestRate, min: 5, max: 20, step: 0.5, type: "range" },
  { label: "Period (Years)", value: years, setValue: setYears, min: 1, max: 30, step: 1, type: "range" },
  { label: "Compound Interval", value: interval, setValue: setInterval, options: Object.keys(compoundingsPerYear), type: "select" }
];


  // Chart
  const charts = [
    {
      title: "Investment Breakdown",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Category", "Amount"],
            ["Principal", principal],
            ["Interest Earned", parseFloat(results.interestEarned)]
          ]}
          options={{
            pieHole: 0.4,
            slices: { 0: { color: "#007bff" }, 1: { color: "#28a745" } },
            chartArea: { width: "90%", height: "80%" },
            legend: { position: "bottom", textStyle: { fontSize: 12 } },
          }}
        />
      )
    }
  ];

  // Results
  const resultItems = [
    { title: "💰 Principal Amount", value: '₹' + Math.round(principal) },
    { title: "📈 Interest Rate (% per annum)", value: '₹' + Math.round(interestRate) },
    { title: "⏳ Period (Years)", value: '₹' + Math.round(years) },
    { title: "🏆 Total Maturity Amount", value: '₹' + Math.round(results.maturityAmount) },
    { title: "💵 Interest Earned", value: '₹' + Math.round(results.interestEarned) }
  ];

  return (
    <CalculatorLayout
      title="Compounding Calculator"
      description="Calculate your maturity amount and interest earned with compounding interest over a period of time."
      inputControls={inputControls}
      charts={charts}
      results={resultItems}
    />
  );
};

export default CompoundingCalculator;
