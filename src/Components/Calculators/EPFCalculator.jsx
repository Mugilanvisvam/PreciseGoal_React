import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

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
      annualContribution *= (1 + growthRate / 100);
      balance = balance * (1 + interestRate / 100) + annualContribution;
      pension *= (1 + interestRate / 100);
      yearlyData.push({ year, balance: Math.round(balance), pension: Math.round(pension) });
    }

    setResult(yearlyData);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-warning mb-4">📊 Employees Provident Fund (EPF) Calculator</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Enter Details Section */}
      <div className="card shadow-sm p-3 mb-4">
        <div className="card-body">
          <h4 className="card-title text-center">📝 Enter Details</h4>
          <div className="row">
            <div className="col-md-4">
              <label>Your Current Age</label>
              <input type="number" className="form-control mb-2" value={age} min="1" max="99" onChange={handleAgeChange} />
            </div>
            <div className="col-md-4">
              <label>Your Retirement Age</label>
              <input type="number" className="form-control mb-2" value={retirementAge} min="1" max="99" onChange={handleRetirementAgeChange} />
            </div>
            <div className="col-md-4">
              <label>Your Current EPF Balance (Rs.)</label>
              <input type="number" className="form-control mb-2" value={epfBalance} onChange={(e) => setEpfBalance(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Your Employee Contribution per month (Rs.)</label>
              <input type="number" className="form-control mb-2" value={employeeContribution} onChange={(e) => setEmployeeContribution(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Your Employer Contribution per month (Rs.)</label>
              <input type="number" className="form-control mb-2" value={employerContribution} onChange={(e) => setEmployerContribution(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Your Growth Rate in EPF Contribution (% per annum)</label>
              <input type="number" className="form-control mb-2" value={growthRate} onChange={(e) => setGrowthRate(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Your Rate of Interest (% per annum)</label>
              <input type="number" className="form-control mb-2" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Your Current Pension Fund Balance (Rs.)</label>
              <input type="number" className="form-control mb-2" value={pensionFund} onChange={(e) => setPensionFund(Number(e.target.value))} />
            </div>
          </div>

          <button className="btn btn-primary mt-3 w-100" onClick={calculateEPF} disabled={error !== ""}>
            Calculate EPF 📈
          </button>
        </div>
      </div>

      {/* Growth Chart Section */}
      <div className="card shadow-sm p-3 mb-4">
        <div className="card-body">
          <h4 className="card-title text-center">📈 EPF Growth Over Time</h4>
          {result.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={result}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="balance" stroke="#007bff" strokeWidth={3} name="EPF Balance" />
                <Line type="monotone" dataKey="pension" stroke="#28a745" strokeWidth={3} name="Pension Fund" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-muted">No data to display. Enter details and calculate EPF.</p>
          )}
        </div>
      </div>

      {/* EPF & Pension Table Section */}
      <div className="card shadow-sm p-3">
        <div className="card-body">
          <h4 className="card-title text-center">📊 EPF & Pension Growth Table</h4>
          {result.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Year</th>
                    <th>EPF Balance (Rs.)</th>
                    <th>Pension Fund (Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((row, index) => (
                    <tr key={index}>
                      <td>{row.year}</td>
                      <td>{row.balance.toLocaleString()}</td>
                      <td>{row.pension.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-muted">No data available. Enter details and calculate EPF.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EPFCalculator;
