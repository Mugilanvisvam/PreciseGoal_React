import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalculatorLayout from "../../Constants/CalculatorLayout";

const CompositeGoalPlanner = () => {
  const [educationCost, setEducationCost] = useState(2500000);
  const [wealthCost, setWealthCost] = useState(5000000);
  const [dreamExpense, setDreamExpense] = useState(1500000);
  const [currentAge, setCurrentAge] = useState(25);
  const [wealthAge, setWealthAge] = useState(60);
  const [childAge, setChildAge] = useState(5);
  const [educationAge, setEducationAge] = useState(25);
  const [expenseYears, setExpenseYears] = useState(30);
  const [inflationRate, setInflationRate] = useState(7.5);
  const [returnRate, setReturnRate] = useState(12.5);
  const [currentSavings, setCurrentSavings] = useState(500000);

  const calculateGoal = () => {
    const yearsToEducation = educationAge - childAge;
    const yearsToWealth = wealthAge - currentAge;
    const futureEducationCost = educationCost * Math.pow(1 + inflationRate / 100, yearsToEducation);
    const futureWealthCost = wealthCost * Math.pow(1 + inflationRate / 100, yearsToWealth);
    const futureDreamExpense = dreamExpense * Math.pow(1 + inflationRate / 100, expenseYears);
    const totalFutureAmount = futureEducationCost + futureWealthCost + futureDreamExpense;

    const savingsGrowth = currentSavings * Math.pow(1 + returnRate / 100, Math.max(yearsToEducation, yearsToWealth, expenseYears));
    const finalAmountNeeded = totalFutureAmount - savingsGrowth;

    const monthlyInvestment = (finalAmountNeeded * (returnRate / 100 / 12)) /
      (Math.pow(1 + returnRate / 100 / 12, Math.max(yearsToEducation, yearsToWealth, expenseYears) * 12) - 1);

    return {
      futureEducationCost,
      futureWealthCost,
      futureDreamExpense,
      totalFutureAmount,
      savingsGrowth,
      finalAmountNeeded,
      monthlyInvestment
    };
  };

  const results = calculateGoal();

  // Input Controls
  const inputControls = [
    { label: "Education Cost", value: educationCost, setValue: setEducationCost, min: 100000, max: 10000000 },
    { label: "Wealth Cost", value: wealthCost, setValue: setWealthCost, min: 100000, max: 10000000 },
    { label: "Dream Expense", value: dreamExpense, setValue: setDreamExpense, min: 100000, max: 10000000 },
    { label: "Current Age", value: currentAge, setValue: setCurrentAge, min: 10, max: 100 },
    { label: "Wealth Age", value: wealthAge, setValue: setWealthAge, min: 10, max: 100 },
    { label: "Child Age", value: childAge, setValue: setChildAge, min: 0, max: 100 },
    { label: "Education Age", value: educationAge, setValue: setEducationAge, min: 0, max: 100 },
    { label: "Years to Expense", value: expenseYears, setValue: setExpenseYears, min: 1, max: 100 },
    { label: "Inflation Rate (%)", value: inflationRate, setValue: setInflationRate, min: 5, max: 15, step: 0.1 },
    { label: "Return Rate (%)", value: returnRate, setValue: setReturnRate, min: 5, max: 20, step: 0.1 },
    { label: "Current Savings", value: currentSavings, setValue: setCurrentSavings, min: 0, max: 10000000 },
  ];

  // Charts
  const charts = [
    {
      title: "Financial Goal Distribution",
      component: (
        <Chart
          chartType="PieChart"
          width="100%"
          height="300px"
          data={[
            ["Category", "Amount"],
            ["Education", results.futureEducationCost],
            ["Wealth", results.futureWealthCost],
            ["Expenses", results.futureDreamExpense]
          ]}
          options={{
            pieHole: 0.4,
            colors: ["#1363a2", "#57C675", "red"],
            legend: { position: "bottom", textStyle: { fontSize: 12 } },
            chartArea: { width: "90%", height: "80%" },
          }}
        />
      )
    }
  ];

  // Results
  const resultItems = [
    { title: "🎓 Education (Inflation Adjusted)", value: results.futureEducationCost },
    { title: "💰 Wealth (Inflation Adjusted)", value: results.futureWealthCost },
    { title: "🌍 Expenses (Inflation Adjusted)", value: results.futureDreamExpense },
    { title: "Total Future Amount", value: results.totalFutureAmount },
    { title: "Expected Growth of Current Savings", value: results.savingsGrowth },
    { title: "Final Target Amount Needed", value: results.finalAmountNeeded },
    { title: "Monthly Savings Required", value: results.monthlyInvestment },
  ];

  return (
    <CalculatorLayout
      title="Composite Financial Goal Planner"
      description="Plan your education, wealth, and dream expenses and find the required monthly savings to reach your financial goals."
      inputControls={inputControls}
      charts={charts}
      results={resultItems}
    />
  );
};

export default CompositeGoalPlanner;
