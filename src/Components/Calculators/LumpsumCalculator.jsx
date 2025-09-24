import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const LumpsumCalculator = () => {
  const [lumpsumAmount, setLumpsumAmount] = useState(5000000);
  const [investmentPeriod, setInvestmentPeriod] = useState(30);
  const [returnRate, setReturnRate] = useState(12);

  const futureValue =
    lumpsumAmount * Math.pow(1 + returnRate / 100, investmentPeriod);
  const totalGrowth = futureValue - lumpsumAmount;

  // Input Controls (for CalculatorLayout)
  const inputControls = [
    {
      label: "Lumpsum Investment (Rs)",
      value: lumpsumAmount,
      setValue: setLumpsumAmount,
      min: 100000,
      max: 10000000000,
      step: 100000,
      range: true,
    },
    {
      label: "Investment Period (Years)",
      value: investmentPeriod,
      setValue: setInvestmentPeriod,
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

  // Chart (for CalculatorLayout)
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
            ["Invested", lumpsumAmount],
            ["Growth", totalGrowth],
          ]}
          options={{
            pieHole: 0.4,
            legend: { position: "bottom", alignment: "center" },
            chartArea: { width: "90%", height: "80%" },
            colors: ["#1363a2", "#57C675"],
          }}
        />
      ),
    },
  ];

  // Results (for CalculatorLayout)
  const results = [
    { title: "Your Lumpsum Amount", value: `Rs. ${lumpsumAmount.toLocaleString()}` },
    { title: "Investment Period", value: `${investmentPeriod} Years` },
    { title: "Future Value", value: `Rs. ${futureValue.toLocaleString()}` },
  ];

  return (
    <CalculatorLayout
      title="Lumpsum Calculator"
      description="Calculate the future value of your one-time investment."
      inputControls={inputControls}
      charts={charts}
      results={results}
    />
  );
};

export default LumpsumCalculator;
