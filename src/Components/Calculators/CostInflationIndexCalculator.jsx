import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Cost Inflation Index values
const CII_VALUES = {
  1981: 100, 1982: 105, 1983: 110, 1984: 115, 1985: 120, 1986: 125,
  2012: 200, 2013: 220, 2014: 240, 2015: 260, 2016: 280,
  2017: 300, 2018: 320, 2019: 340, 2020: 360, 2021: 380,
  2022: 400, 2023: 420, 2024: 440, 2025: 460,
};

// Generate year options in "YYYY-YY" format
const generateYearOptions = () => {
  let years = [];
  for (let year = 1981; year <= 2025; year++) {
    years.push({ label: `${year}-${(year + 1) % 100}`, value: year });
  }
  return years;
};

const CostInflationIndexCalculator = () => {
  const yearOptions = generateYearOptions();

  const [purchaseYear, setPurchaseYear] = useState(2012);
  const [salesYear, setSalesYear] = useState(2016);
  const [purchaseValue, setPurchaseValue] = useState(200000);
  const [salesValue, setSalesValue] = useState(500000);

  const calculateCapitalGain = () => {
    const purchaseCII = CII_VALUES[purchaseYear] || 1;
    const salesCII = CII_VALUES[salesYear] || 1;

    const indexedCost = (purchaseValue * salesCII) / purchaseCII;
    const capitalGain = salesValue - indexedCost;
    const taxPercentage = 20;
    const capitalGainTax = (capitalGain * taxPercentage) / 100;

    return {
      indexedCost: indexedCost.toFixed(2),
      capitalGain: capitalGain.toFixed(2),
      capitalGainTax: capitalGainTax.toFixed(2),
    };
  };

  const results = calculateCapitalGain();

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow-lg">
      <h2 className="text-center text-warning mb-4">📈 Cost Inflation Index Calculator</h2>

      {/* Input Form */}
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <h5>Enter Details</h5>

            {/* Purchase Year */}
            <label className="form-label">Purchase Year</label>
            <select className="form-select mb-3" value={purchaseYear} onChange={(e) => setPurchaseYear(Number(e.target.value))}>
              {yearOptions.map((year) => (
                <option key={year.value} value={year.value}>{year.label}</option>
              ))}
            </select>

            {/* Purchase Value */}
            <label className="form-label">Purchase Value (Rs.)</label>
            <input type="number" className="form-control mb-3" value={purchaseValue} onChange={(e) => setPurchaseValue(Number(e.target.value))} />

            {/* Sales Year */}
            <label className="form-label">Sales Year</label>
            <select className="form-select mb-3" value={salesYear} onChange={(e) => setSalesYear(Number(e.target.value))}>
              {yearOptions.map((year) => (
                <option key={year.value} value={year.value}>{year.label}</option>
              ))}
            </select>

            {/* Sales Value */}
            <label className="form-label">Sales Value (Rs.)</label>
            <input type="number" className="form-control mb-3" value={salesValue} onChange={(e) => setSalesValue(Number(e.target.value))} />
          </div>
        </div>

        {/* Result Display */}
        <div className="col-md-6">
          <div className="card p-4">
            <h5>Results</h5>
            <p>📊 <strong>Indexed Purchase Cost:</strong> Rs. {results.indexedCost}</p>
            <p>💰 <strong>Capital Gain:</strong> Rs. {results.capitalGain}</p>
            <p>💸 <strong>Capital Gain Tax %:</strong> 20%</p>
            <p>🧾 <strong>Capital Gain Tax:</strong> Rs. {results.capitalGainTax}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostInflationIndexCalculator;
