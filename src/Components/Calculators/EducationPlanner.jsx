import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationPlanner = () => {
  const [childName, setChildName] = useState("Raju");
  const [currentCost, setCurrentCost] = useState(500000);
  const [years, setYears] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);
  const [returnRate, setReturnRate] = useState(8);
  const [savings, setSavings] = useState(10000);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [futureCost, setFutureCost] = useState(0);

  const calculateEducationCost = () => {
    // Future cost formula: FV = PV * (1 + r)^n
    const futureValue = currentCost * Math.pow(1 + inflationRate / 100, years);
    setFutureCost(Math.round(futureValue));

    // Monthly savings required to reach future cost
    const months = years * 12;
    const monthlyRate = returnRate / 100 / 12;
    const requiredSavings = 
      ((futureValue - savings * Math.pow(1 + monthlyRate, months)) * monthlyRate) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setMonthlySavings(Math.round(requiredSavings));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">🎓 Education Planner</h2>
      <div className="card shadow-sm p-3 mb-4">
        <div className="card-body">
          <h4 className="card-title text-center">📝 Enter Details</h4>
          <div className="row">
            <div className="col-md-4">
              <label>Child's Name</label>
              <input type="text" className="form-control" value={childName} onChange={(e) => setChildName(e.target.value)} />
            </div>
            <div className="col-md-4">
              <label>Current Cost of Education (Rs.)</label>
              <input type="number" className="form-control" value={currentCost} onChange={(e) => setCurrentCost(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Years Until Education Starts</label>
              <input type="number" className="form-control" value={years} onChange={(e) => setYears(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Inflation Rate (% per annum)</label>
              <input type="number" className="form-control" value={inflationRate} onChange={(e) => setInflationRate(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Expected Return Rate (% per annum)</label>
              <input type="number" className="form-control" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Current Savings (Rs.)</label>
              <input type="number" className="form-control" value={savings} onChange={(e) => setSavings(Number(e.target.value))} />
            </div>
          </div>
          <button className="btn btn-primary mt-3 w-100" onClick={calculateEducationCost}>
            Calculate Future Cost 🎯
          </button>
        </div>
      </div>
      
      <div className="card shadow-sm p-3">
        <div className="card-body">
          <h4 className="card-title text-center">📊 Education Cost Projection</h4>
          {futureCost > 0 ? (
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Education Planner</th>
                  <th>Cost of {childName}'s Education</th>
                  <th>Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amount at Today's Prices</td>
                  <td>Rs. {currentCost.toLocaleString()}</td>
                  <td>Rs. {currentCost.toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Education Starts In</td>
                  <td>{years} year(s)</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Future Cost (Inflation Adjusted)</td>
                  <td>Rs. {futureCost.toLocaleString()}</td>
                  <td>Rs. {futureCost.toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Current Savings</td>
                  <td>Rs. {savings.toLocaleString()}</td>
                  <td>Rs. {savings.toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Monthly Savings Required</td>
                  <td>Rs. {monthlySavings.toLocaleString()}</td>
                  <td>Rs. {monthlySavings.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="text-center text-muted">Enter details and calculate future education cost.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationPlanner;
