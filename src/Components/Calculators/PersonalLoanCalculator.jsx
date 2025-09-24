import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";
import Sidebar from "../Sidebar";

const loanAmounts = [100000, 25000000, 50000000, 75000000, 100000000];
const interestRates = [5, 7.5, 10, 12.5, 15, 17.5, 20];
const loanTenures = [1, 5, 10, 15, 20, 25, 30];

const currencyFormat = (num) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    num
  );

const PersonalLoanCalculator = () => {
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

  // Input Controls (shared with CalculatorLayout)
  const inputControls = [
    {
      label: "Loan Amount (Rs)",
      value: loanAmount,
      setValue: (val) => {
        const idx = loanAmounts.findIndex((x) => x >= val);
        setLoanIndex(idx >= 0 ? idx : loanAmounts.length - 1);
      },
      min: loanAmounts[0],
      max: loanAmounts[loanAmounts.length - 1],
      step: 100000,
      range: true,
    },
    {
      label: "Interest Rate (% per annum)",
      value: annualRate,
      setValue: (val) => {
        const idx = interestRates.findIndex((x) => x >= val);
        setRateIndex(idx >= 0 ? idx : interestRates.length - 1);
      },
      min: interestRates[0],
      max: interestRates[interestRates.length - 1],
      step: 0.5,
      range: true,
    },
    {
      label: "Loan Tenure (Years)",
      value: tenureYears,
      setValue: (val) => {
        const idx = loanTenures.findIndex((x) => x >= val);
        setTenureIndex(idx >= 0 ? idx : loanTenures.length - 1);
      },
      min: loanTenures[0],
      max: loanTenures[loanTenures.length - 1],
      step: 1,
      range: true,
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
            ["Component", "Amount"],
            ["Principal Amount", loanAmount],
            ["Total Interest", totalInterest],
          ]}
          options={{
            pieHole: 0.4,
            colors: ["#007bff", "#28a745"],
            legend: { position: "bottom" },
          }}
        />
      ),
    },
    // {
    //   title: "EMI Growth Over Time",
    //   component: (
    //     <Chart
    //       chartType="LineChart"
    //       width="100%"
    //       height="300px"
    //       data={[
    //         ["Year", "Total Paid", "Interest Paid"],
    //         ...Array.from({ length: tenureYears }, (_, i) => [
    //           i + 1,
    //           EMI * (i + 1) * 12,
    //           (totalInterest / tenureYears) * (i + 1),
    //         ]),
    //       ]}
    //       options={{
    //         curveType: "function",
    //         legend: { position: "bottom" },
    //       }}
    //     />
    //   ),
    // },
  ];

  // Results Summary
  const results = [
    { title: "Monthly EMI", value: currencyFormat(EMI) },
    { title: "Total Interest Payable", value: currencyFormat(totalInterest) },
    { title: "Total Payment", value: currencyFormat(totalPayment) },
  ];

  return (
    <CalculatorLayout
      title="Personal Loan Calculator"
      description="Calculate EMI, interest payable, and repayment schedule for your personal loan."
      inputControls={inputControls}
      charts={charts}
      results={results}
      sidebar={<Sidebar />}
    />
  );
};

export default PersonalLoanCalculator;
