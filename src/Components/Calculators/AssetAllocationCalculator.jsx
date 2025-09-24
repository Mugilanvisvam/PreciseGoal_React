import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const AssetAllocationCalculator = () => {
  const ageRanges = ["21-30yrs", "31-45yrs", "40-60yrs", ">60yrs"];
  const riskLevels = ["Very Low", "Low", "Medium", "High", "Very High"];
  const investmentHorizon = ["<2yrs", "2-5yrs", "5-10yrs", ">10yrs"];
  const returnPreferences = ["Yes", "No I prefer big companies", "Not sure"];

  const [ageIndex, setAgeIndex] = useState(1);
  const [riskIndex, setRiskIndex] = useState(2);
  const [horizonIndex, setHorizonIndex] = useState(2);
  const [returnsIndex, setReturnsIndex] = useState(1);

  const assetData = [
    ["Asset Type", "Percentage"],
    ["Debt", 45],
    ["FMPs and Debt Funds", 17],
    ["Long-Term Fixed Income", 23],
    ["Cash/Bank FD/Liquid", 5],
    ["Equity", 55],
    ["Mid-Cap/Small-Cap", 8],
    ["Large-Caps", 47],
  ];

  // Input Controls
  const inputControls = [
    {
      label: "Your Current Age (Years)",
      value: ageIndex,
      setValue: setAgeIndex,
      min: 0,
      max: 3,
      range: true,
      step: 1,
      displayValue: ageRanges[ageIndex],
    },
    {
      label: "How much risk you can take?",
      value: riskIndex,
      setValue: setRiskIndex,
      min: 0,
      max: 4,
      range: true,
      step: 1,
      displayValue: riskLevels[riskIndex],
    },
    {
      label: "Your Investment Horizon (Years)",
      value: horizonIndex,
      setValue: setHorizonIndex,
      min: 0,
      max: 3,
      range: true,
      step: 1,
      displayValue: investmentHorizon[horizonIndex],
    },
    {
      label: "Do you know that mid & small caps generate better return in long term?",
      value: returnsIndex,
      setValue: setReturnsIndex,
      min: 0,
      max: 2,
      range: true,
      step: 1,
      displayValue: returnPreferences[returnsIndex],
    },
  ];

  // Charts
  const charts = [
    {
      title: "Suggested Asset Allocation",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={assetData}
          options={{
            pieHole: 0.4,
            colors: ["#1363a2", "#57C675", "#1363a2", "#57C675", "#1363a2", "#57C675", "#1363a2"],
            legend: { position: "bottom", textStyle: { fontSize: 12 } },
            chartArea: { width: "90%", height: "80%" },
          }}
        />
      ),
    },
  ];

  // Results (you can expand these as needed)
  const results = [
    { title: "Debt Allocation", value: "45%" },
    { title: "Equity Allocation", value: "55%" },
    { title: "Mid & Small Cap", value: "8%" },
    { title: "Large Cap", value: "47%" },
  ];

  return (
    <CalculatorLayout
      title="Asset Allocation Calculator"
      description="Calculate your suggested asset allocation based on your age, risk appetite, and investment horizon."
      inputControls={inputControls}
      charts={charts}
      results={results}
    />
  );
};

export default AssetAllocationCalculator;
