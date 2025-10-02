import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const RetirementPlanningCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(20000000);
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(75);
  const [inflationRate, setInflationRate] = useState(7.5);
  const [returnRate, setReturnRate] = useState(12.5);
  const [currentSavings, setCurrentSavings] = useState(100000);

  // Calculation logic
  const yearsToSave = retirementAge - currentAge;
  const inflationAdjustedRetirementAmount =
    targetAmount * Math.pow(1 + inflationRate / 100, yearsToSave);
  const savingsGrowth = currentSavings * Math.pow(1 + returnRate / 100, yearsToSave);
  const finalTargetAmount = inflationAdjustedRetirementAmount - savingsGrowth;
  const monthlySavingsRequired = finalTargetAmount / (yearsToSave * 12);
  const totalInvestedAmount = monthlySavingsRequired * 12 * yearsToSave;
  const totalGrowthAmount = finalTargetAmount - totalInvestedAmount;

  // Input controls for CalculatorLayout
  const inputControls = [
    {
      label: `Retirement Target Amount (Rs): ${targetAmount.toLocaleString()}`,
      value: targetAmount,
      setValue: setTargetAmount,
      type: "number",
      range: true,
      min: 1000000,
      max: 100000000,
      step: 100000,
    },
    {
      label: `Your Age Today: ${currentAge}`,
      value: currentAge,
      setValue: setCurrentAge,
      type: "number",
      range: true,
      min: 18,
      max: 60,
      step: 1,
    },
    {
      label: `Planned Retirement Age: ${retirementAge}`,
      value: retirementAge,
      setValue: setRetirementAge,
      type: "number",
      range: true,
      min: 40,
      max: 80,
      step: 1,
    },
    {
      label: `Inflation Rate (% p.a.): ${inflationRate}`,
      value: inflationRate,
      setValue: setInflationRate,
      type: "number",
      range: true,
      min: 0,
      max: 15,
      step: 0.5,
    },
    {
      label: `Expected Return Rate (% p.a.): ${returnRate}`,
      value: returnRate,
      setValue: setReturnRate,
      type: "number",
      range: true,
      min: 5,
      max: 20,
      step: 0.5,
    },
    {
      label: `Current Savings (Rs): ${currentSavings.toLocaleString()}`,
      value: currentSavings,
      setValue: setCurrentSavings,
      type: "number",
      range: true,
      min: 0,
      max: 10000000,
      step: 10000,
    },
  ];

  // Charts
  const charts = [
    {
      title: "📊 Investment Breakdown",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Category", "Amount"],
            ["Total Invested", totalInvestedAmount],
            ["Growth Amount", totalGrowthAmount],
          ]}
          options={{
            pieHole: 0.4,
            legend: { position: "bottom" },
            colors: ["#57C675", "#1363a2"],
            fontSize: 14,
          }}
        />
      ),
    },
  ];

  // Results
  const resultsArray = [
    {
      title: "Retirement Amount (Inflation Adjusted)",
      value: '₹' + Math.round(inflationAdjustedRetirementAmount).toLocaleString(),
    },
    {
      title: "Growth of Your Savings",
      value: '₹' + Math.round(savingsGrowth).toLocaleString(),
    },
    {
      title: "Final Targeted Amount",
      value: '₹' + Math.round(finalTargetAmount).toLocaleString(),
    },
    {
      title: "Number of Years to Save",
      value: `${yearsToSave} years`,
    },
    {
      title: "Monthly Savings Required",
      value: '₹' + Math.round(monthlySavingsRequired).toLocaleString(),
    },
    {
      title: "Total Amount Invested",
      value: '₹' + Math.round(totalInvestedAmount).toLocaleString(),
    },
    {
      title: "Total Growth Amount",
      value: '₹' + Math.round(totalGrowthAmount).toLocaleString(),
    },
  ];

  return (
    <CalculatorLayout
      title="🏖️ Retirement Planning Calculator"
      description="Calculate how much you need to save each month to reach your retirement goal."
      inputControls={inputControls}
      charts={charts}
      results={resultsArray}
    />
  );
};

export default RetirementPlanningCalculator;
