import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [investmentPeriod, setInvestmentPeriod] = useState(120);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12.5);

  // 🧮 SIP Calculation
  const monthlyRate = expectedReturnRate / 12 / 100;
  const months = investmentPeriod;
  const FV =
    monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const totalInvested = monthlyInvestment * months;
  const totalGrowth = FV - totalInvested;

  // 📊 Input Controls
  const inputControls = [
    {
      label: `Monthly Investment (Rs): ${monthlyInvestment}`,
      value: monthlyInvestment,
      setValue: setMonthlyInvestment,
      type: "number",
      range: true,
      min: 500,
      max: 50000,
      step: 500,
    },
    {
      label: `Investment Period (Months): ${investmentPeriod}`,
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
  ];

  // 📊 Charts
  const charts = [
    {
      title: "💹 Investment vs Growth",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Category", "Amount"],
            ["Total Investment", totalInvested],
            ["Total Growth", totalGrowth],
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
    //   title: "📈 Growth Over Time",
    //   component: (
    //     <Chart
    //       chartType="LineChart"
    //       width="100%"
    //       height="300px"
    //       data={[
    //         ["Month", "Investment", "Growth"],
    //         ...Array.from({ length: investmentPeriod }, (_, i) => [
    //           `Month ${i + 1}`,
    //           monthlyInvestment * (i + 1),
    //           (FV * (i + 1)) / investmentPeriod,
    //         ]),
    //       ]}
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
    { title: "Total Investment", value: `Rs. ${totalInvested.toLocaleString()}` },
    { title: "Total Growth", value: `Rs. ${totalGrowth.toLocaleString()}` },
    { title: "Future Value", value: `Rs. ${FV.toLocaleString()}` },
  ];

  return (
    <CalculatorLayout
      title="SIP Calculator - Mutual Funds"
      description="Calculate the future value of your systematic investments in mutual funds."
      inputControls={inputControls}
      charts={charts}
      results={resultsArray}
    />
  );
};

export default SIPCalculator;
