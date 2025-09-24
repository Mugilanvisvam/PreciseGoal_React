import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const TargetAmountSIPCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(2500000);
  const [investmentPeriod, setInvestmentPeriod] = useState(30);
  const [inflationRate, setInflationRate] = useState(5);
  const [returnRate, setReturnRate] = useState(12);

  const inflationAdjustedAmount =
    targetAmount * Math.pow(1 + inflationRate / 100, investmentPeriod);

  const monthlySIP =
    (inflationAdjustedAmount * (returnRate / 100 / 12)) /
    (Math.pow(1 + returnRate / 100 / 12, investmentPeriod * 12) - 1);

  const totalInvestment = monthlySIP * 12 * investmentPeriod;
  const totalGrowth = inflationAdjustedAmount - totalInvestment;

  const inputControls = [
    { label: "Target Amount (Rs)", value: targetAmount, setValue: setTargetAmount, min: 100000, max: 10000000, range: true, step: 10000 },
    { label: "Investment Period (Years)", value: investmentPeriod, setValue: setInvestmentPeriod, min: 1, max: 50, range: true, step: 1 },
    { label: "Inflation Rate (%)", value: inflationRate, setValue: setInflationRate, min: 0, max: 10, range: true, step: 0.1 },
    { label: "Expected Return Rate (%)", value: returnRate, setValue: setReturnRate, min: 5, max: 20, range: true, step: 0.1 },
  ];

  const charts = [
    {
      title: "Investment vs Growth",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="250px"
          data={[
            ["Category", "Amount"],
            ["Invested", totalInvestment],
            ["Growth", totalGrowth],
          ]}
          options={{
            pieHole: 0.4,
            legend: { position: "bottom" },
            colors: ["#007bff", "#28a745"],
            chartArea: { width: "90%", height: "80%" },
          }}
        />
      ),
    },
  ];

  const results = [
    { title: "Targeted Amount (Inflation Adjusted)", value: `Rs. ${inflationAdjustedAmount.toLocaleString()}`, color: "#28a745" },
    { title: "Monthly SIP Required", value: `Rs. ${monthlySIP.toFixed(2)}` },
    { title: "Total Amount Invested", value: `Rs. ${totalInvestment.toLocaleString()}` },
    { title: "Total Growth Amount", value: `Rs. ${totalGrowth.toLocaleString()}` },
    { title: "Years to Save", value: `${investmentPeriod} years` },
  ];

  return (
    <CalculatorLayout
      title="Target Amount SIP Calculator"
      description="Calculate how much you need to invest monthly to achieve your goal."
      inputControls={inputControls}
      charts={charts}
      results={results}
    />
  );
};

export default TargetAmountSIPCalculator;
