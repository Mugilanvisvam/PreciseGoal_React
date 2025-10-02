import React, { useState } from "react";
import CalculatorLayout from "../../Constants/CalculatorLayout";
import { Chart } from "react-google-charts";

const EducationPlanner = () => {
  const [childName, setChildName] = useState("Raju");
  const [currentCost, setCurrentCost] = useState(500000);
  const [years, setYears] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);
  const [returnRate, setReturnRate] = useState(8);
  const [savings, setSavings] = useState(10000);

  const months = years * 12;
  const monthlyRate = returnRate / 100 / 12;

  // Future Value of Education
  const futureCost = currentCost * Math.pow(1 + inflationRate / 100, years);

  // Monthly savings required
  const requiredSavings =
    ((futureCost - savings * Math.pow(1 + monthlyRate, months)) * monthlyRate) /
    (Math.pow(1 + monthlyRate, months) - 1);

  // Input Controls
  const inputControls = [
    { label: "Child's Name", value: childName, setValue: setChildName, type: "text" },
    { label: "Current Cost of Education (Rs.)", value: currentCost, setValue: setCurrentCost, min: 10000, max: 10000000, step: 10000 },
    { label: "Years Until Education Starts", value: years, setValue: setYears, min: 1, max: 50, step: 1 },
    { label: "Inflation Rate (% per annum)", value: inflationRate, setValue: setInflationRate, min: 0, max: 15, step: 0.1 },
    { label: "Expected Return Rate (% per annum)", value: returnRate, setValue: setReturnRate, min: 1, max: 20, step: 0.1 },
    { label: "Current Savings (Rs.)", value: savings, setValue: setSavings, min: 0, max: 10000000, step: 1000 },
  ];

  // Chart
  const charts = [
    {
      title: "Future Education Cost",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Category", "Amount"],
            ["Future Cost", futureCost],
            ["Current Savings", savings],
          ]}
          options={{
            pieHole: 0.4,
            slices: { 0: { color: "#007bff" }, 1: { color: "#ffc107" } },
            chartArea: { width: "90%", height: "80%" },
            legend: { position: "bottom", alignment: "center", textStyle: { fontSize: 12 } },
          }}
        />
      ),
    },
  ];

  // Results
  const resultItems = [
    { title: `Amount at Today's Prices`, value: '₹' + Math.round(currentCost) },
    { title: `Education Starts In`, value: `${years} year(s)` },
    { title: `Future Cost (Inflation Adjusted)`, value: '₹' + Math.round(futureCost) },
    { title: `Current Savings`, value: '₹' + Math.round(savings) },
    { title: `Monthly Savings Required`, value: '₹' + Math.round(requiredSavings) },
  ];

  return (
    <CalculatorLayout
      title="Education Planner"
      description="Plan your child's education expenses by estimating future cost and required savings."
      inputControls={inputControls}
      charts={charts}
      results={resultItems}
    />
  );
};

export default EducationPlanner;
