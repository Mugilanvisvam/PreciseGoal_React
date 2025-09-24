import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const CrorepatiCalculator = () => {
  const [wealthAmount, setWealthAmount] = useState(500000000);
  const [currentAge, setCurrentAge] = useState(25);
  const [targetAge, setTargetAge] = useState(75);
  const [inflationRate, setInflationRate] = useState(5);
  const [returnRate, setReturnRate] = useState(12.5);
  const [savings, setSavings] = useState(500000);

  const yearsToSave = targetAge - currentAge;
  const finalAmount = wealthAmount * Math.pow(1 + inflationRate / 100, yearsToSave);
  const growthSavings = savings * Math.pow(1 + returnRate / 100, yearsToSave);
  const sipInvestment =
    (finalAmount - growthSavings) /
    ((Math.pow(1 + returnRate / 100, yearsToSave) - 1) / (returnRate / 100));

  const totalSipInvestment = sipInvestment * 12 * yearsToSave; // Total SIP invested over years
  const totalGrowth = finalAmount - totalSipInvestment; // Growth of the total invested amount

  // Input controls
  const inputControls = [
    { label: "Desired Wealth (Rs)", value: wealthAmount, setValue: setWealthAmount, min: 10000000, max: 1000000000, step: 1000000 },
    { label: "Current Age", value: currentAge, setValue: setCurrentAge, min: 10, max: 100, step: 1 },
    { label: "Target Age", value: targetAge, setValue: setTargetAge, min: 10, max: 100, step: 1 },
    { label: "Inflation Rate (%)", value: inflationRate, setValue: setInflationRate, min: 0, max: 10, step: 0.1 },
    { label: "Expected Return Rate (%)", value: returnRate, setValue: setReturnRate, min: 5, max: 20, step: 0.1 },
    { label: "Current Savings (Rs)", value: savings, setValue: setSavings, min: 0, max: 10000000, step: 10000 },
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
            ["Invested", totalSipInvestment],
            ["Growth", totalGrowth],
          ]}
          options={{
            pieHole: 0.4,
            slices: { 0: { color: "#0f8b8b" }, 1: { color: "#57C675" } },
            chartArea: { width: "90%", height: "80%" },
            legend: { position: "bottom", alignment: "center", textStyle: { fontSize: 12 } },
          }}
        />
      ),
    },
  ];

  // Results
  const resultItems = [
    { title: "Targeted Wealth Amount (Inflation Adjusted)", value: finalAmount },
    { title: "Growth of Your Savings Amount", value: growthSavings },
    { title: "Final Targeted Amount (Minus Savings Growth)", value: finalAmount - growthSavings },
    { title: "Number of Years You Need to Save", value: yearsToSave },
    { title: "Monthly SIP Investment Required", value: sipInvestment },
    { title: "Total SIP Investment", value: totalSipInvestment },
    { title: "Total Growth Amount", value: totalGrowth },
  ];

  return (
    <CalculatorLayout
      title="Become A Crorepati Calculator"
      description="Calculate how much you need to save monthly to become a crorepati."
      inputControls={inputControls}
      charts={charts}
      results={resultItems}
    />
  );
};

export default CrorepatiCalculator;
