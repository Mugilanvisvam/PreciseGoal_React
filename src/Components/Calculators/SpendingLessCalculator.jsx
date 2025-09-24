import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const SpendingLessCalculator = () => {
    const [personalDetails, setPersonalDetails] = useState({
        currentAge: 25,
        retirementAge: 60,
        interestRate: 12,
        incomeTaxRate: 7,
        inflationRate: 5,
    });

    const [spending, setSpending] = useState({
        house: 500000,
        homeLoanEMI: 30000,
        newCar: 300000,
        eatingOut: 25000,
        lifestyle: 25000,
        holidays: 10000,
        publicTransport: 10000,
        creditCard: 30000,
        personalLoan: 20000,
        shopping: 10000,
    });

    // Calculate Total Yearly Savings
    const totalYearlySavings = Object.values(spending).reduce((a, b) => a + b, 0);

    // Calculate Accumulated Amount at Retirement
    const years = personalDetails.retirementAge - personalDetails.currentAge;
    const accumulatedAmount =
        totalYearlySavings * ((Math.pow(1 + personalDetails.interestRate / 100, years) - 1) / (personalDetails.interestRate / 100));

    // Data for Pie Chart
    const data = [
        ["Category", "Amount"],
        ["House Deferral", spending.house],
        ["Home Loan EMI", spending.homeLoanEMI],
        ["New Car Delay", spending.newCar],
        ["Eating Out Less", spending.eatingOut],
        ["Lifestyle Cut", spending.lifestyle],
        ["Fewer Holidays", spending.holidays],
        ["Public Transport", spending.publicTransport],
        ["Credit Card Interest", spending.creditCard],
        ["Personal Loan", spending.personalLoan],
        ["Shopping Reduction", spending.shopping],
    ];

    // Handle Input Change
    const handleInputChange = (e, type, key) => {
        const value = Number(e.target.value) || 0;
        if (type === "personal") {
            setPersonalDetails({ ...personalDetails, [key]: value });
        } else {
            setSpending({ ...spending, [key]: value });
        }
    };

    return (
        <div className="container mt-5 p-4 bg-white rounded shadow-lg" style={{marginBottom:'50px'}}>
            <h2 className="text-center mb-4" style={{color:'#1363a2'}}>Spending Less Calculator</h2>
            <div className="row">

                {/* Left Column - Personal & Spending Details */}
                <div className="col-md-6">

                    {/* Personal Details */}
                    <div className="card p-3 mb-3">
                        <h5>Personal Details</h5>
                        {Object.entries(personalDetails).map(([key, value]) => (
                            <div key={key} className="mb-2">
                                <label className="form-label">
                                    {key.replace(/([A-Z])/g, " $1")}:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={value}
                                    onChange={(e) => handleInputChange(e, "personal", key)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Spending Details */}
                    <div className="card p-3">
                        <h5>Spending Details</h5>
                        {Object.entries(spending).map(([key, value]) => (
                            <div key={key} className="mb-2">
                                <label className="form-label">
                                    {key.replace(/([A-Z])/g, " $1")}:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={value}
                                    onChange={(e) => handleInputChange(e, "spending", key)}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Column - Pie Chart & Results */}
                {/* Right Column - Pie Chart & Results in One Card */}
                <div className="col-md-6">
                    <div className="card p-3 h-100 d-flex flex-column align-items-center">
                        <h5 className="mb-3">Spending Breakdown</h5>
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="300px"
                            data={data}
                            options={{
                                title: "Spending Reduction Breakdown",
                                pieHole: 0.4,
                                slices: {
                                    0: { color: "#007bff" },
                                    1: { color: "#28a745" },
                                    2: { color: "#dc3545" },
                                    3: { color: "#ffc107" },
                                    4: { color: "#17a2b8" },
                                    5: { color: "#6f42c1" },
                                    6: { color: "#fd7e14" },
                                    7: { color: "#20c997" },
                                    8: { color: "#6610f2" },
                                    9: { color: "#e83e8c" },
                                },
                            }}
                        />

                        <hr className="w-100" />

                        <div className="card p-4 shadow-lg border-0 rounded-4 text-center bg-light">
                            <h4 className="mb-3  fw-bold" style={{color:'#1363a2'}}>🎯 Your Savings Summary</h4>

                            <div className="p-3 bg-white rounded-3 shadow-sm">
                                <h6 className="text-success mb-1">💰 Annual Savings</h6>
                                <p className="fs-5 fw-bold text-dark">Rs. {totalYearlySavings.toLocaleString()}</p>
                            </div>

                            <div className="p-3 bg-white rounded-3 shadow-sm mt-3">
                                <h6 className="text-warning mb-1">⏳ Years Until Retirement</h6>
                                <p className="fs-5 fw-bold text-dark">{years} Years</p>
                            </div>

                            <div className="p-3 bg-white rounded-3 shadow-sm mt-3">
                                <h6 className="text-danger mb-1">🏆 Accumulated Amount</h6>
                                <p className="fs-5 fw-bold text-dark">Rs. {Math.round(accumulatedAmount).toLocaleString()}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpendingLessCalculator;
