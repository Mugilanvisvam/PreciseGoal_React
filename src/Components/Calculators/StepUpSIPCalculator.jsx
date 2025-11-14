import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const StepUpSIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [investmentPeriod, setInvestmentPeriod] = useState(120);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12.5);
  const [stepUpPercentage, setStepUpPercentage] = useState(10);

  // 🧮 Calculation Logic
  const monthlyRate = expectedReturnRate / 12 / 100;
  let totalInvestment = 0;
  let futureValue = 0;
  let growthData = [["Month", "Investment", "Growth"]];
  let sipTableData = [];

  let currentInvestment = monthlyInvestment;

  for (let i = 1; i <= investmentPeriod; i++) {
    totalInvestment += currentInvestment;
    futureValue = (futureValue + currentInvestment) * (1 + monthlyRate);
    growthData.push([`Month ${i}`, totalInvestment, futureValue - totalInvestment]);

    if (i % 12 === 0) {
      sipTableData.push([
        i / 12,
        Math.round(currentInvestment).toLocaleString("en-IN"),
        Math.round(currentInvestment * 12).toLocaleString("en-IN"),
        Math.round(totalInvestment).toLocaleString("en-IN"),
      ]);
      currentInvestment *= 1 + stepUpPercentage / 100;
    }
  }

  const totalGrowth = futureValue - totalInvestment;

  // 🎛 Input Controls
  const inputControls = [
    {
      label: `Monthly SIP Investment (Rs): ${monthlyInvestment}`,
      value: monthlyInvestment,
      setValue: setMonthlyInvestment,
      type: "number",
      range: true,
      min: 500,
      max: 50000,
      step: 500,
    },
    {
      label: `Investment Duration (Months): ${investmentPeriod}`,
      value: investmentPeriod,
      setValue: setInvestmentPeriod,
      type: "number",
      range: true,
      min: 6,
      max: 360,
      step: 6,
    },
    {
      label: `Expected Return Rate (% p.a.): ${expectedReturnRate}`,
      value: expectedReturnRate,
      setValue: setExpectedReturnRate,
      type: "number",
      range: true,
      min: 5,
      max: 20,
      step: 0.5,
    },
    {
      label: `Annual Step-Up Percentage (%): ${stepUpPercentage}`,
      value: stepUpPercentage,
      setValue: setStepUpPercentage,
      type: "number",
      range: true,
      min: 0,
      max: 50,
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
            ["Total Investment", Math.round(totalInvestment)],
            ["Total Growth", Math.round(totalGrowth)],
          ]}
          options={{
            pieHole: 0.4,
            legend: { position: "bottom" },
            colors: ["#007bff", "#28a745"],
          }}
        />
      ),
    },
    // {
    //   title: "Investment Growth Over Time",
    //   component: (
    //     <Chart
    //       chartType="LineChart"
    //       width="100%"
    //       height="300px"
    //       data={growthData}
    //       options={{
    //         hAxis: { title: "Months" },
    //         vAxis: { title: "Amount (Rs)" },
    //         colors: ["#007bff", "#28a745"],
    //       }}
    //     />
    //   ),
    // },
  ];

  // 📑 Results
  const resultsArray = [
    { title: "Total SIP Amount Invested", value: `Rs. ${Math.round(totalInvestment).toLocaleString("en-IN")}` },
    { title: "Total Growth", value: `Rs. ${Math.round(totalGrowth).toLocaleString("en-IN")}` },
    { title: "Total Future Value", value: `Rs. ${Math.round(futureValue).toLocaleString("en-IN")}` },
  ];

  return (
    <CalculatorLayout
      title="Step-Up SIP Calculator"
      description="Calculate your SIP with annual step-ups and see your investment growth over time."
      inputControls={inputControls}
      charts={charts}
      results={resultsArray}
    />
  );
};

export default StepUpSIPCalculator;
