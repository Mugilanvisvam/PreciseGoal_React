import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const CarLoanCalculator = () => {
  // Constants
  const loanAmounts = [100000, 25000000, 50000000, 75000000, 100000000];
  const interestRates = [5, 7.5, 10, 12.5, 15, 17.5, 20];
  const loanTenures = [1, 5, 10, 15, 20, 25, 30];

  const [loanIndex, setLoanIndex] = useState(1);
  const [rateIndex, setRateIndex] = useState(3);
  const [tenureIndex, setTenureIndex] = useState(4);

  const loanAmount = loanAmounts[loanIndex];
  const annualRate = interestRates[rateIndex];
  const tenureYears = loanTenures[tenureIndex];

  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const EMI =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = EMI * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // Input Controls
  const inputControls = [
    {
      label: "Car Loan Amount (Rs)",
      value: loanIndex,
      setValue: setLoanIndex,
      min: 0,
      max: loanAmounts.length - 1,
      step: 1,
      displayValue: `${loanAmounts[loanIndex]} Rs.`,
    },
    {
      label: "Interest Rate (% per annum)",
      value: rateIndex,
      setValue: setRateIndex,
      min: 0,
      max: interestRates.length - 1,
      step: 1,
      displayValue: `${interestRates[rateIndex]}%`,
    },
    {
      label: "Loan Tenure (Years)",
      value: tenureIndex,
      setValue: setTenureIndex,
      min: 0,
      max: loanTenures.length - 1,
      step: 1,
      displayValue: `${loanTenures[tenureIndex]} Years`,
    },
  ];

  // Charts
  const charts = [
    {
      title: "Loan Breakdown",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Component", "Amount (Rs)"],
            ["Principal Amount", loanAmount],
            ["Total Interest", totalInterest],
          ]}
          options={{
            pieHole: 0.4,
            colors: ["#1363a2", "#57C675"],
            legend: { position: "bottom", textStyle: { fontSize: 12 } },
            chartArea: { width: "90%", height: "80%" },
          }}
        />
      ),
    },
    
  ];

  // Results
  const results = [
    { title: "Monthly EMI", value: '₹' + Math.round(EMI) },
    { title: "Total Interest Payable", value: '₹' + Math.round(totalInterest) },
    { title: "Total Payment", value: '₹' + Math.round(totalPayment) },
  ];

  return (
    <CalculatorLayout
      title="Car Loan Calculator"
      description="Calculate your monthly EMI, total interest, and total payment for your car loan."
      inputControls={inputControls}
      charts={charts}
      results={results}
    />
  );
};

export default CarLoanCalculator;
