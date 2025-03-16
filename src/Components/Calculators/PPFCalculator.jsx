import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const PPFCalculator = () => {
    const [investmentType, setInvestmentType] = useState("fixed");
    const [openingYear, setOpeningYear] = useState(2010);
    const [investmentAmount, setInvestmentAmount] = useState(2000);
    const [error, setError] = useState("");
    const [ppfData, setPpfData] = useState([]);
    
    const handleSubmit = () => {
        if (openingYear < 1980 || openingYear > 2014) {
            setError("Please enter a year between 1980 and 2014.");
            setPpfData([]);
            return;
        }
        setError("");
        generatePPFTable();
    };
    
    const generatePPFTable = () => {
        let data = [];
        let rate = 8.0; 
        let balance = 0;
        let investment = investmentAmount;
        
        for (let i = 0; i < 15; i++) {
            let year = parseInt(openingYear) + i;
            let interest = (balance + investment) * (rate / 100);
            let closingBalance = balance + investment + interest;
            let withdrawalLimit = i >= 7 ? (closingBalance * 0.5).toFixed(2) : "-";
            let loanPossible = i >= 3 ? (closingBalance * 0.25).toFixed(2) : "-";
            
            data.push({
                year, rate, openingBalance: balance.toFixed(2), annualInvestment: investment, totalInvestment: balance + investment, 
                interest: interest.toFixed(2), closingBalance: closingBalance.toFixed(2), withdrawalLimit, loanPossible
            });
            
            balance = closingBalance;
        }
        setPpfData(data);
    };
    
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card p-4 shadow">
                        <h4 className="text-center text-warning mb-3">Public Provident Fund (PPF) Calculator
                        </h4>
                        
                        {/* Investment Type */}
                        <div className="mb-3">
                            <label className="form-label">Investment Type</label>
                            <select className="form-select" value={investmentType} onChange={(e) => setInvestmentType(e.target.value)}>
                                <option value="fixed">Fixed Investment</option>
                                <option value="variable">Variable Investment</option>
                            </select>
                        </div>
                        
                        {/* Opening Year */}
                        <div className="mb-3">
                            <label className="form-label">Opening Year (1980 - 2014)</label>
                            <input type="number" className="form-control" value={openingYear} onChange={(e) => setOpeningYear(e.target.value)} />
                        </div>
                        
                        {/* Investment Amount */}
                        {investmentType === "fixed" && (
                            <div className="mb-3">
                                <label className="form-label">Annual Investment (Rs.)</label>
                                <input type="number" className="form-control" value={investmentAmount} onChange={(e) => setInvestmentAmount(e.target.value)} />
                            </div>
                        )}
                        
                        {/* Error Message */}
                        {error && <p className="text-danger text-center">{error}</p>}
                        
                        {/* Submit Button */}
                        <div className="text-center">
                            <button className="btn btn-success px-4" onClick={handleSubmit}>Calculate</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Results Table */}
            {ppfData.length > 0 && (
                <div className="mt-4">
                    <h5 className="text-center text-success">PPF Growth Report</h5>
                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Year</th><th>Rate (%)</th><th>Opening Balance (Rs.)</th><th>Annual Investment (Rs.)</th><th>Total Investment (Rs.)</th><th>Interest (Rs.)</th><th>Closing Balance (Rs.)</th><th>Withdrawal Limit (Rs.)</th><th>Loan Possible (Rs.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ppfData.map((row) => (
                                    <tr key={row.year}>
                                        <td>{row.year}</td><td>{row.rate}</td><td>{row.openingBalance}</td><td>{row.annualInvestment}</td><td>{row.totalInvestment}</td><td>{row.interest}</td><td>{row.closingBalance}</td><td>{row.withdrawalLimit}</td><td>{row.loanPossible}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Growth Chart */}
                    <h5 className="text-center text-success">PPF Growth Report</h5>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={ppfData}>
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="closingBalance" stroke="#28a745" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default PPFCalculator;