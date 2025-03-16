import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

const AssetAllocationCalculator = () => {
  const ageRanges = ["21-30yrs", "31-45yrs", "40-60yrs", ">60yrs"];
  const riskLevels = ["Very Low", "Low", "Medium", "High", "Very High"];
  const investmentHorizon = ["<2yrs", "2-5yrs", "5-10yrs", ">10yrs"];
  const returnPreferences = ["Yes", "No I prefer big companies", "Not sure"];

  const [ageIndex, setAgeIndex] = useState(1);
  const [riskIndex, setRiskIndex] = useState(2);
  const [horizonIndex, setHorizonIndex] = useState(2);
  const [returnsIndex, setReturnsIndex] = useState(1);

  const assetData = [
    ["Asset Type", "Percentage"],
    ["Debt", 45],
    ["FMPs and Debt Funds", 17],
    ["Long-Term Fixed Income", 23],
    ["Cash/Bank FD/Liquid", 5],
    ["Equity", 55],
    ["Mid-Cap/Small-Cap", 8],
    ["Large-Caps", 47],
  ];

  return (
    <div className="container mt-4">
      <div className="card p-4" style={{marginBottom:'2%'}}>
        <h4 className="mb-3 text-center text-warning">Asset Allocation Calculator</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Your Current Age (Years)</label>
              <input type="range" className="form-range" min="0" max="3" step="1" 
                     value={ageIndex} onChange={(e) => setAgeIndex(e.target.value)} />
              <input type="text" className="form-control mt-2" value={ageRanges[ageIndex]} readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">How much risk you can take?</label>
              <input type="range" className="form-range" min="0" max="4" step="1" 
                     value={riskIndex} onChange={(e) => setRiskIndex(e.target.value)} />
              <input type="text" className="form-control mt-2" value={riskLevels[riskIndex]} readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Investment Horizon (Years)</label>
              <input type="range" className="form-range" min="0" max="3" step="1" 
                     value={horizonIndex} onChange={(e) => setHorizonIndex(e.target.value)} />
              <input type="text" className="form-control mt-2" value={investmentHorizon[horizonIndex]} readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Do you know that mid & small caps generate better return in long term?</label>
              <input type="range" className="form-range" min="0" max="2" step="1" 
                     value={returnsIndex} onChange={(e) => setReturnsIndex(e.target.value)} />
              <input type="text" className="form-control mt-2" value={returnPreferences[returnsIndex]} readOnly />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
  <Chart
    chartType="PieChart"
    data={assetData}
    width="100%"
    height="400px" // Increased height for better visibility
    options={{
      pieHole: 0.4, // Makes it look like a donut chart (optional)
      fontSize: 14,
      legend: { position: "bottom", textStyle: { fontSize: 10 } }, // Bigger legend
      chartArea: { width: "90%", height: "80%" }, // Expands chart area
    }}
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default AssetAllocationCalculator;
