import React, { useState } from "react";
import CalculatorLayout from "../../Constants/CalculatorLayout";

// Cost Inflation Index values
const CII_VALUES = {
  1981: 100, 1982: 105, 1983: 110, 1984: 115, 1985: 120, 1986: 125,
  2012: 200, 2013: 220, 2014: 240, 2015: 260, 2016: 280,
  2017: 300, 2018: 320, 2019: 340, 2020: 360, 2021: 380,
  2022: 400, 2023: 420, 2024: 440, 2025: 460,
};

// Generate year options in "YYYY-YY" format
const generateYearOptions = () => {
  let years = [];
  for (let year = 1981; year <= 2025; year++) {
    years.push({ label: `${year}-${(year + 1) % 100}`, value: year });
  }
  return years;
};

const CostInflationIndexCalculator = () => {
  const yearOptions = generateYearOptions();

  const [purchaseYear, setPurchaseYear] = useState(2012);
  const [salesYear, setSalesYear] = useState(2016);
  const [purchaseValue, setPurchaseValue] = useState(200000);
  const [salesValue, setSalesValue] = useState(500000);

  const calculateCapitalGain = () => {
    const purchaseCII = CII_VALUES[purchaseYear] || 1;
    const salesCII = CII_VALUES[salesYear] || 1;

    const indexedCost = (purchaseValue * salesCII) / purchaseCII;
    const capitalGain = salesValue - indexedCost;
    const taxPercentage = 20;
    const capitalGainTax = (capitalGain * taxPercentage) / 100;

    return {
      indexedCost: indexedCost.toFixed(2),
      capitalGain: capitalGain.toFixed(2),
      capitalGainTax: capitalGainTax.toFixed(2),
    };
  };

  const results = calculateCapitalGain();

  // Input Controls for CalculatorLayout
  const inputControls = [
    { 
      label: "Purchase Year", 
      value: purchaseYear, 
      setValue: setPurchaseYear, 
      options: yearOptions 
    },
    { 
      label: "Purchase Value (Rs.)", 
      value: purchaseValue, 
      setValue: setPurchaseValue, 
      min: 1000, 
      max: 10000000, 
      step: 1000 
    },
    { 
      label: "Sales Year", 
      value: salesYear, 
      setValue: setSalesYear, 
      options: yearOptions 
    },
    { 
      label: "Sales Value (Rs.)", 
      value: salesValue, 
      setValue: setSalesValue, 
      min: 1000, 
      max: 10000000, 
      step: 1000 
    },
  ];

  // Result Items for CalculatorLayout
  const resultItems = [
    { title: "📊 Indexed Purchase Cost", value: results.indexedCost },
    { title: "💰 Capital Gain", value: results.capitalGain },
    { title: "💸 Capital Gain Tax %", value: "20%" },
    { title: "🧾 Capital Gain Tax", value: results.capitalGainTax },
  ];

  return (
    <CalculatorLayout
      title="Cost Inflation Index Calculator"
      description="Calculate Indexed Purchase Cost, Capital Gain and Tax using Cost Inflation Index (CII) values."
      inputControls={inputControls}
      results={resultItems}
    />
  );
};

export default CostInflationIndexCalculator;
