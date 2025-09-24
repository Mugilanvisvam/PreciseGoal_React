import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const NetWorthCalculator = () => {
  const [assets, setAssets] = useState({
    shares: 500000,
    fixedIncome: 200000,
    cashBank: 300000,
    property: 200000,
    goldJewellery: 200000,
    others: 200000,
  });

  const [liabilities, setLiabilities] = useState({
    homeLoan: 50000,
    personalLoans: 250000,
    incomeTax: 200000,
    outstandingBills: 500000,
    creditCardDues: 200000,
    otherLiabilities: 20000,
  });

  const totalAssets = Object.values(assets).reduce((a, b) => a + b, 0);
  const totalLiabilities = Object.values(liabilities).reduce((a, b) => a + b, 0);
  const netWorth = totalAssets - totalLiabilities;

  // Input Controls
  const inputControls = [
    ...Object.keys(assets).map((key) => ({
      label: `Asset: ${key.replace(/([A-Z])/g, " $1")}`,
      value: assets[key],
      setValue: (val) => setAssets({ ...assets, [key]: val }),
      min: 0,
      max: 10000000,
      step: 10000,
      range: true,
    })),
    ...Object.keys(liabilities).map((key) => ({
      label: `Liability: ${key.replace(/([A-Z])/g, " $1")}`,
      value: liabilities[key],
      setValue: (val) => setLiabilities({ ...liabilities, [key]: val }),
      min: 0,
      max: 5000000,
      step: 10000,
      range: true,
    })),
  ];

  // Chart
  const charts = [
    {
      title: "Assets vs Liabilities",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Category", "Amount"],
            ["Total Assets", totalAssets],
            ["Total Liabilities", totalLiabilities],
          ]}
          options={{
            pieHole: 0.4,
            colors: ["#1363a2", "#57C675"],
            legend: { position: "bottom" },
            chartArea: { width: "90%", height: "80%" },
          }}
        />
      ),
    },
  ];

  // Results
  const results = [
    { title: "Total Assets", value: `Rs. ${totalAssets.toLocaleString()}` },
    { title: "Total Liabilities", value: `Rs. ${totalLiabilities.toLocaleString()}` },
    { title: "Net Worth", value: `Rs. ${netWorth.toLocaleString()}` },
  ];

  return (
    <CalculatorLayout
      title="Net Worth Calculator"
      description="Calculate your net worth by adjusting assets and liabilities."
      inputControls={inputControls}
      charts={charts}
      results={results}
    />
  );
};

export default NetWorthCalculator;
