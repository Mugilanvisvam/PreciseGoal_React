import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const GoalSettingCalculator = () => {
  const [dreamAmount, setDreamAmount] = useState(10000000);
  const [years, setYears] = useState(30);
  const [inflationRate, setInflationRate] = useState(8);
  const [returnRate, setReturnRate] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(0);

  const calculateGoal = () => {
    const adjustedDreamAmount =
      dreamAmount * Math.pow(1 + inflationRate / 100, years);
    const futureSavings =
      currentSavings * Math.pow(1 + returnRate / 100, years);
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

  const chartData = [
    ["Category", "Amount"],
    ["Total Investment", parseFloat(results.totalInvestment)],
    ["Total Growth", parseFloat(results.totalGrowth)],
  ];

  // ✅ Inputs config
  const inputControls = [
    {
      label: `Dream Amount (Rs): ${dreamAmount}`,
      value: dreamAmount,
      setValue: setDreamAmount,
      type: "number",
      range: true,
      min: 10000000,
      max: 1000000000,
      step: 1000000,
    },
    {
      label: `Years to Achieve Goal: ${years}`,
      value: years,
      setValue: setYears,
      type: "number",
      range: true,
      min: 1,
      max: 100,
    },
    {
      label: `Inflation Rate (% p.a.): ${inflationRate}`,
      value: inflationRate,
      setValue: setInflationRate,
      type: "number",
      range: true,
      min: 5,
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
      label: `Current Savings (Rs): ${currentSavings}`,
      value: currentSavings,
      setValue: setCurrentSavings,
      type: "number",
      range: true,
      min: 0,
      max: 100000000,
      step: 500000,
    },
  ];

  // ✅ Charts config
  const charts = [
    {
      title: "Investment Growth Breakdown",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={chartData}
          options={{
            title: "Investment vs Growth",
            pieHole: 0.3,
            slices: {
              0: { color: "#1363a2" }, // Investmentcolor
              1: { color: "#57C675" }, // Growth
            },
            fontSize: 14,
            legend: { position: "bottom" },
          }}
        />
      ),
    },
  ];

  // ✅ Results config
  const resultsArray = [
    { title: "Targeted Dream Amount (Inflation Adjusted)", value: `Rs. ${results.adjustedDreamAmount}` },
    { title: "Growth of Current Savings", value: `Rs. ${results.futureSavings}` },
    { title: "Final Targeted Amount", value: `Rs. ${results.finalTargetAmount}` },
    { title: "Monthly Savings Required", value: `Rs. ${results.monthlyInvestment}` },
    { title: `Total Amount Invested in ${years} years`, value: `Rs. ${results.totalInvestment}` },
    { title: "Total Growth Amount", value: `Rs. ${results.totalGrowth}` },
  ];

  return (
    <CalculatorLayout
      title="Goal Setting Calculator"
      description="Plan your investments smartly to achieve your dream goals considering inflation, returns, and savings."
      inputControls={inputControls}
      charts={charts}
      results={resultsArray}
    />
  );
};

export default GoalSettingCalculator;
