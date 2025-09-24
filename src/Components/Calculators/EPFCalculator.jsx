import React, { useState } from "react";
import CalculatorLayout from "../../Constants/CalculatorLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const EPFCalculator = () => {
  const [age, setAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [epfBalance, setEpfBalance] = useState(25000);
  const [employeeContribution, setEmployeeContribution] = useState(1000);
  const [employerContribution, setEmployerContribution] = useState(1000);
  const [growthRate, setGrowthRate] = useState(8);
  const [interestRate, setInterestRate] = useState(8);
  const [pensionFund, setPensionFund] = useState(25000);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleAgeChange = (e) => {
    let value = Number(e.target.value);
    if (value < 1 || value > 99) {
      setError("Age must be between 1 and 99.");
    } else {
      setError("");
      setAge(value);
    }
  };

  const handleRetirementAgeChange = (e) => {
    let value = Number(e.target.value);
    if (value < 1 || value > 99) {
      setError("Retirement age must be between 1 and 99.");
    } else if (value <= age) {
      setError("Retirement age must be greater than current age.");
    } else {
      setError("");
      setRetirementAge(value);
    }
  };

  const calculateEPF = () => {
    if (error) return;

    let balance = epfBalance;
    let pension = pensionFund;
    let yearlyData = [];

    for (let year = age; year <= retirementAge; year++) {
      let annualContribution = (employeeContribution + employerContribution) * 12;
      annualContribution *= 1 + growthRate / 100;
      balance = balance * (1 + interestRate / 100) + annualContribution;
      pension *= 1 + interestRate / 100;
      yearlyData.push({
        year,
        balance: Math.round(balance),
        pension: Math.round(pension),
      });
    }

    setResult(yearlyData);
  };

  // Input Controls
  const inputControls = [
    { label: "Your Current Age", value: age, setValue: setAge, min: 1, max: 99, step: 1, onChange: handleAgeChange },
    { label: "Your Retirement Age", value: retirementAge, setValue: setRetirementAge, min: 1, max: 99, step: 1, onChange: handleRetirementAgeChange },
    { label: "Current EPF Balance (Rs.)", value: epfBalance, setValue: setEpfBalance, min: 0, max: 10000000, step: 1000 },
    { label: "Employee Contribution per month (Rs.)", value: employeeContribution, setValue: setEmployeeContribution, min: 0, max: 100000, step: 100 },
    { label: "Employer Contribution per month (Rs.)", value: employerContribution, setValue: setEmployerContribution, min: 0, max: 100000, step: 100 },
    { label: "Growth Rate in EPF Contribution (% p.a.)", value: growthRate, setValue: setGrowthRate, min: 0, max: 20, step: 0.1 },
    { label: "Rate of Interest (% p.a.)", value: interestRate, setValue: setInterestRate, min: 0, max: 20, step: 0.1 },
    { label: "Current Pension Fund Balance (Rs.)", value: pensionFund, setValue: setPensionFund, min: 0, max: 10000000, step: 1000 },
  ];

  // Charts
  const charts = [
    {
      title: "EPF Growth Over Time",
      component:
        result.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={result}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#007bff"
                strokeWidth={3}
                name="EPF Balance"
              />
              <Line
                type="monotone"
                dataKey="pension"
                stroke="#28a745"
                strokeWidth={3}
                name="Pension Fund"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-muted">
            No data to display. Enter details and calculate EPF.
          </p>
        ),
    },
  ];

  // Results
  const resultItems =
    result.length > 0
      ? [
          {
            title: "Final EPF Balance at Retirement",
            value: result[result.length - 1].balance,
          },
          {
            title: "Final Pension Fund at Retirement",
            value: result[result.length - 1].pension,
          },
        ]
      : [];

  return (
    <CalculatorLayout
      title="Employees Provident Fund (EPF) Calculator"
      description="Estimate your EPF balance and pension fund growth until retirement."
      inputControls={inputControls}
      charts={charts}
      results={resultItems}
      onCalculate={calculateEPF}
      error={error}
    />
  );
};

export default EPFCalculator;
