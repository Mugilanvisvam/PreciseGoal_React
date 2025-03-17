import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

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
      futureEducationCost: futureEducationCost.toFixed(2),
      futureWealthCost: futureWealthCost.toFixed(2),
      futureDreamExpense: futureDreamExpense.toFixed(2),
      totalFutureAmount: totalFutureAmount.toFixed(2),
      savingsGrowth: savingsGrowth.toFixed(2),
      finalAmountNeeded: finalAmountNeeded.toFixed(2),
      monthlyInvestment: monthlyInvestment.toFixed(2)
    };
  };

  const results = calculateGoal();
  const data = [
    ["Category", "Amount"],
    ["Education", parseFloat(results.futureEducationCost)],
    ["Wealth", parseFloat(results.futureWealthCost)],
    ["Expenses", parseFloat(results.futureDreamExpense)]
  ];

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow-lg">
      <h2 className="text-center text-warning mb-4">📊 Composite Financial Goal Planner</h2>

      <div className="row">
        {/* Left Column: Form Inputs */}
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h4>🎯 Financial Inputs</h4>
            {[
              { label: "Education Cost", value: educationCost, setter: setEducationCost, min: 100000, max: 10000000 },
              { label: "Wealth Cost", value: wealthCost, setter: setWealthCost, min: 100000, max: 10000000 },
              { label: "Dream Expense", value: dreamExpense, setter: setDreamExpense, min: 100000, max: 10000000 },
              { label: "Current Age", value: currentAge, setter: setCurrentAge, min: 10, max: 100 },
              { label: "Wealth Age", value: wealthAge, setter: setWealthAge, min: 10, max: 100 },
              { label: "Child Age", value: childAge, setter: setChildAge, min: 0, max: 100 },
              { label: "Education Age", value: educationAge, setter: setEducationAge, min: 0, max: 100 },
              { label: "Years to Expense", value: expenseYears, setter: setExpenseYears, min: 1, max: 100 },
              { label: "Inflation Rate", value: inflationRate, setter: setInflationRate, min: 5, max: 15 },
              { label: "Return Rate", value: returnRate, setter: setReturnRate, min: 5, max: 20 },
              { label: "Current Savings", value: currentSavings, setter: setCurrentSavings, min: 0, max: 10000000 }
            ].map(({ label, value, setter, min, max }) => (
              <div key={label} className="mb-2">
                <label className="form-label">{label}: Rs. {value}</label>
                <input type="range" className="form-range" min={min} max={max} value={value} onChange={(e) => setter(Number(e.target.value))} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Chart & Details */}
        <div className="col-md-6">
          {/* Pie Chart */}
          <div className="card p-3 mb-3">
            <h5>📊 Financial Goal Distribution</h5>
            <Chart
              chartType="PieChart"
              width="100%"
              height="300px"
              data={data}
              options={{
                pieHole: 0.4,
                slices: { 0: { color: "#007bff" }, 1: { color: "#28a745" }, 2: { color: "#ffc107" } },
              }}
            />
          </div>

          {/* Targeted Amount (Inflation Adjusted) */}
          <div className="card p-3 mb-3">
            <h5>🎯 Targeted Amount (Inflation Adjusted)</h5>
            <p>🎓 Education: Rs. {results.futureEducationCost}</p>
            <p>💰 Wealth: Rs. {results.futureWealthCost}</p>
            <p>🌍 Expenses: Rs. {results.futureDreamExpense}</p>
            <p><strong>Total Future Amount:</strong> Rs. {results.totalFutureAmount}</p>
          </div>

          {/* Investment Details */}
          <div className="card p-3">
            <h5>💰 Investment Details</h5>
            <p>📈 Expected Growth of Current Savings: Rs. {results.savingsGrowth}</p>
            <p>🎯 Final Target Amount Needed: Rs. {results.finalAmountNeeded}</p>
            <p>💳 Monthly Savings Required: Rs. {results.monthlyInvestment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositeGoalPlanner;
