import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const SIPAnnualIncreaseCalculator = () => {
  const [monthlySIP, setMonthlySIP] = useState(25000);
  const [months, setMonths] = useState(120);
  const [returnRate, setReturnRate] = useState(12.5);
  const [annualIncrease, setAnnualIncrease] = useState(10);

  // 🧮 Calculation Logic
  const calculateSIPWithoutIncrease = () => {
    const totalInvestment = monthlySIP * months;
    const totalGrowth = totalInvestment * (Math.pow(1 + returnRate / 100, months / 12) - 1);
    const futureValue = totalInvestment + totalGrowth;
    return { totalInvestment, totalGrowth, futureValue };
  };

  const calculateSIPWithIncrease = () => {
    let totalInvestment = 0;
    let monthlyInvestment = monthlySIP;
    let totalGrowth = 0;

    for (let i = 0; i < months; i++) {
      totalInvestment += monthlyInvestment;
      totalGrowth += monthlyInvestment * (Math.pow(1 + returnRate / 100, (months - i) / 12) - 1);
      if ((i + 1) % 12 === 0) monthlyInvestment *= 1 + annualIncrease / 100;
    }
    const futureValue = totalInvestment + totalGrowth;
    return { totalInvestment, totalGrowth, futureValue };
  };

  const resultWithoutIncrease = calculateSIPWithoutIncrease();
  const resultWithIncrease = calculateSIPWithIncrease();

  // 🎛 Input Controls
  const inputControls = [
    { label: `Monthly SIP (Rs): ${monthlySIP}`, value: monthlySIP, setValue: setMonthlySIP, type: "number", range: true, min: 500, max: 100000, step: 500 },
    { label: `Investment Period (Months): ${months}`, value: months, setValue: setMonths, type: "number", range: true, min: 12, max: 600, step: 12 },
    { label: `Expected Return Rate (% p.a.): ${returnRate}`, value: returnRate, setValue: setReturnRate, type: "number", range: true, min: 5, max: 20, step: 0.5 },
    { label: `Annual Increase in SIP (%): ${annualIncrease}`, value: annualIncrease, setValue: setAnnualIncrease, type: "number", range: true, min: 0, max: 20, step: 1 },
  ];

  // 📊 Charts
  const charts = [
    {
      title: "Investment Breakdown (With Increase)",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Category", "Amount"],
            ["Total Investment", resultWithIncrease.totalInvestment],
            ["Total Growth", resultWithIncrease.totalGrowth],
          ]}
          options={{
            pieHole: 0.4,
            legend: { position: "bottom" },
            colors: ["#007bff", "#28a745"],
            pieSliceText: "label",
            fontSize: 14,
          }}
        />
      ),
    },
  ];

  // 📑 Results
  const resultsArray = [
    { title: "Total SIP Invested (Without Increase)", value: `Rs. ${resultWithoutIncrease.totalInvestment.toFixed(2)}` },
    { title: "Total Growth (Without Increase)", value: `Rs. ${resultWithoutIncrease.totalGrowth.toFixed(2)}` },
    { title: "Future Value (Without Increase)", value: `Rs. ${resultWithoutIncrease.futureValue.toFixed(2)}` },
    { title: "Total SIP Invested (With Increase)", value: `Rs. ${resultWithIncrease.totalInvestment.toFixed(2)}` },
    { title: "Total Growth (With Increase)", value: `Rs. ${resultWithIncrease.totalGrowth.toFixed(2)}` },
    { title: "Future Value (With Increase)", value: `Rs. ${resultWithIncrease.futureValue.toFixed(2)}` },
  ];

  return (
    <CalculatorLayout
      title=" SIP with Annual Increase Calculator"
      description="Calculate your SIP growth with annual top-up to see how your investments grow over time."
      inputControls={inputControls}
      charts={charts}
      results={resultsArray}
    />
  );
};

export default SIPAnnualIncreaseCalculator;
