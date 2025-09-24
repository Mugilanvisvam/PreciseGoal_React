import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const InflationCalculator = () => {
  const [currentCost, setCurrentCost] = useState(2500000);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(10);

  const futureCost = currentCost * Math.pow(1 + inflationRate / 100, years);

  // Input controls (for CalculatorLayout)
  const inputControls = [
    {
      label: "Current Cost (Rs)",
      value: currentCost,
      setValue: setCurrentCost,
      min: 100000,
      max: 100000000,
      step: 10000,
      range: true,
    },
    {
      label: "Inflation Rate (% per annum)",
      value: inflationRate,
      setValue: setInflationRate,
      min: 0,
      max: 20,
      step: 0.1,
      range: true,
    },
    {
      label: "Number of Years",
      value: years,
      setValue: setYears,
      min: 1,
      max: 30,
      step: 1,
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
            ["Current Cost", currentCost],
            ["Inflation Growth", futureCost - currentCost],
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
    { title: "Current Cost", value: `Rs. ${currentCost.toLocaleString()}` },
    { title: "Inflation Rate", value: `${inflationRate} %` },
    { title: "Number of Years", value: `${years} Years` },
    { title: "Future Cost", value: `Rs. ${futureCost.toLocaleString()}` },
  ];

  return (
    <CalculatorLayout
      title="Inflation Calculator"
      description="Calculate the future value of money based on the inflation rate."
      inputControls={inputControls}
      charts={charts}
      results={results}
    />
  );
};

export default InflationCalculator;
