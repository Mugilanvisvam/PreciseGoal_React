import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const NetWorthCalculator = () => {
    const [assets, setAssets] = useState({
        shares: 500000,
        fixedIncome: 200000,
        cashBank: 300000,
        property: 200000,
        goldJewellery: 200000,
        others: 200000,
    });

    const [liabilities, setLiabilities] = useState({
        homeLoan: 50000,
        personalLoans: 250000,
        incomeTax: 200000,
        outstandingBills: 500000,
        creditCardDues: 200000,
        otherLiabilities: 20000,
    });

    const totalAssets = Object.values(assets).reduce((a, b) => a + b, 0);
    const totalLiabilities = Object.values(liabilities).reduce((a, b) => a + b, 0);
    const netWorth = totalAssets - totalLiabilities;

    const data = [
        ["Category", "Amount"],
        ["Total Assets", totalAssets],
        ["Total Liabilities", totalLiabilities],
    ];

    const handleInputChange = (e, type, key) => {
        const value = Number(e.target.value) || 0;
        if (type === "assets") {
            setAssets({ ...assets, [key]: value });
        } else {
            setLiabilities({ ...liabilities, [key]: value });
        }
    };

    return (
        <div className="container mt-5 p-4 bg-white rounded shadow-lg">
            <h2 className="text-center text-warning mb-4">💰 Net Worth Calculator</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-3 mb-3">
                        <h5>Assets</h5>
                        {Object.entries(assets).map(([key, value]) => (
                            <div key={key} className="mb-2">
                                <label className="form-label">{key.replace(/([A-Z])/g, " $1")}:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={value}
                                    onChange={(e) => handleInputChange(e, "assets", key)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="card p-3">
                        <h5>Liabilities</h5>
                        {Object.entries(liabilities).map(([key, value]) => (
                            <div key={key} className="mb-2">
                                <label className="form-label">{key.replace(/([A-Z])/g, " $1")}:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={value}
                                    onChange={(e) => handleInputChange(e, "liabilities", key)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 h-100 d-flex flex-column align-items-center">
                        <h5 className="mb-3">Net Worth Breakdown</h5>
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="300px"
                            data={data}
                            options={{
                                title: "Assets vs Liabilities",
                                pieHole: 0.4,
                                slices: {
                                    0: { color: "#28a745" },
                                    1: { color: "#dc3545" },
                                },
                            }}
                        />
                        <hr className="w-100" />
                        <div className="card p-4 shadow-lg border-0 rounded-4 text-center bg-light">
                            <h4 className="mb-3 text-primary fw-bold">📊 Your Net Worth Summary</h4>
                            <div className="p-3 bg-white rounded-3 shadow-sm">
                                <h6 className="text-success mb-1">💰 Total Assets</h6>
                                <p className="fs-5 fw-bold text-dark">Rs. {totalAssets.toLocaleString()}</p>
                            </div>
                            <div className="p-3 bg-white rounded-3 shadow-sm mt-3">
                                <h6 className="text-danger mb-1">📉 Total Liabilities</h6>
                                <p className="fs-5 fw-bold text-dark">Rs. {totalLiabilities.toLocaleString()}</p>
                            </div>
                            <div className="p-3 bg-white rounded-3 shadow-sm mt-3">
                                <h6 className="text-primary mb-1">🏆 Net Worth</h6>
                                <p className="fs-5 fw-bold text-dark">Rs. {netWorth.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetWorthCalculator;