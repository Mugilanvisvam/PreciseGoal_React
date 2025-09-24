import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const LumpsumTargetCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(5000000);
  const [years, setYears] = useState(30);
  const [returnRate, setReturnRate] = useState(12);

  const lumpsumInvestment =
    targetAmount / Math.pow(1 + returnRate / 100, years);
  const growth = targetAmount - lumpsumInvestment;

  // Input Controls
  const inputControls = [
    {
      label: "Target Amount (Rs)",
      value: targetAmount,
      setValue: setTargetAmount,
      min: 100000,
      max: 10000000000,
      step: 100000,
      range: true,
    },
    {
      label: "Investment Period (Years)",
      value: years,
      setValue: setYears,
      min: 1,
      max: 100,
      step: 1,
      range: true,
    },
    {
      label: "Expected Return Rate (%)",
      value: returnRate,
      setValue: setReturnRate,
      min: 0,
      max: 25,
      step: 0.1,
      range: true,
    },
  ];

  // Charts
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
            ["Lumpsum Investment", lumpsumInvestment],
            ["Growth", growth],
          ]}
          options={{
            pieHole: 0.4,
            legend: { position: "bottom", alignment: "center" },
            chartArea: { width: "90%", height: "80%" },
            colors: ["#007bff", "#28a745"],
          }}
        />
      ),
    },
  ];

  // Results
  const results = [
    { title: "Targeted Amount", value: `Rs. ${targetAmount.toLocaleString()}` },
    { title: "Investment Period", value: `${years} Years` },
    { title: "Required Lumpsum Investment", value: `Rs. ${lumpsumInvestment.toFixed(2)}` },
  ];

  return (
    <CalculatorLayout
      title="Lumpsum Target Calculator"
      description="Calculate how much you need to invest today to achieve your financial goal."
      inputControls={inputControls}
      charts={charts}
      results={results}
    />
  );
};

export default LumpsumTargetCalculator;
