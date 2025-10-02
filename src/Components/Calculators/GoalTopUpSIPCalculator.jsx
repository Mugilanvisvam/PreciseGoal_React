import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const GoalTopUpSIPCalculator = () => {
  const [goalAmount, setGoalAmount] = useState(5000000);
  const [investmentYears, setInvestmentYears] = useState(30);
  const [returnRate, setReturnRate] = useState(12);
  const [inflationRate, setInflationRate] = useState(5);
  const [sipTopUpRate, setSipTopUpRate] = useState(10);

  // 🧮 Calculation Logic
  const finalAmount =
    goalAmount * Math.pow(1 + inflationRate / 100, investmentYears);

  const sipAmountFirstYear =
    (finalAmount * (returnRate / 100)) /
    ((Math.pow(1 + returnRate / 100, investmentYears) - 1) /
      (returnRate / 100));

  let totalSipInvestment = 0;
  let sipAmount = sipAmountFirstYear;
  for (let i = 0; i < investmentYears; i++) {
    totalSipInvestment += sipAmount * 12;
    sipAmount *= 1 + sipTopUpRate / 100;
  }

  const totalGrowth = finalAmount - totalSipInvestment;

  // 🎛 Input Controls
  const inputControls = [
    {
      label: `Financial Goal (Rs): ${goalAmount}`,
      value: goalAmount,
      setValue: setGoalAmount,
      type: "number",
      range: true,
      min: 100000,
      max: 100000000,
      step: 10000,
    },
    {
      label: `Investment Period (Years): ${investmentYears}`,
      value: investmentYears,
      setValue: setInvestmentYears,
      type: "number",
      range: true,
      min: 1,
      max: 50,
      step: 1,
    },
    {
      label: `Expected Rate of Return (% p.a.): ${returnRate}`,
      value: returnRate,
      setValue: setReturnRate,
      type: "number",
      range: true,
      min: 5,
      max: 20,
      step: 0.5,
    },
    {
      label: `Inflation Rate (% p.a.): ${inflationRate}`,
      value: inflationRate,
      setValue: setInflationRate,
      type: "number",
      range: true,
      min: 0,
      max: 10,
      step: 0.5,
    },
    {
      label: `SIP Top-Up (% per annum): ${sipTopUpRate}`,
      value: sipTopUpRate,
      setValue: setSipTopUpRate,
      type: "number",
      range: true,
      min: 0,
      max: 20,
      step: 1,
    },
  ];

  // 📊 Charts
  const charts = [
    {
      title: "Investment vs Growth",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Category", "Amount"],
            ["Amount Invested", totalSipInvestment],
            ["Total Growth", totalGrowth],
          ]}
          options={{
            pieHole: 0.4,
            legend: { position: "bottom" },
            colors: ["#1363a2", "#57C675"],
          }}
        />
      ),
    },
  ];

  // 📑 Results
  const resultsArray = [
    {
      title: "Targeted Wealth Amount (Inflation adjusted)",
      value: '₹' + Math.round(finalAmount).toLocaleString(),
    },
    {
      title: "Number of Years to Achieve Goal",
      value: '₹' + Math.round(investmentYears) + "years",
    },
    {
      title: "Monthly SIP (First Year)",
      value: '₹' + Math.round(sipAmountFirstYear).toLocaleString(),
    },
    {
      title: "Total Amount Invested",
      value: '₹' + Math.round(totalSipInvestment).toLocaleString(),
    },
    {
      title: "Total Growth Amount",
      value: '₹' + Math.round(totalGrowth).toLocaleString(),
    },
    {
      title: "Final Amount",
      value: '₹' + Math.round(finalAmount).toLocaleString(),
    },
  ];

  return (
    <CalculatorLayout
      title="Goal-Based SIP Top-Up Calculator"
      description="Calculate your SIP with annual top-up to reach your financial goal."
      inputControls={inputControls}
      charts={charts}
      results={resultsArray}
    />
  );
};

export default GoalTopUpSIPCalculator;
