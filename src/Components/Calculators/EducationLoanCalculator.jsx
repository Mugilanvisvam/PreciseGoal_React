import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

// Constants for loan parameters
const loanAmounts = [100000, 25000000, 50000000, 75000000, 100000000];
const interestRates = [5, 7.5, 10, 12.5, 15, 17.5, 20];
const loanTenures = [1, 5, 10, 15, 20, 25, 30];

// Loan Repayment Data (example)
const loanData = [
    { year: 2025, principal: 500211, interest: 13493959, totalPayment: 13994170, balance: 94413497 },
    { year: 2026, principal: 701600, interest: 16091404, totalPayment: 16793004, balance: 93711897 },
    { year: 2027, principal: 831435, interest: 15961569, totalPayment: 16793004, balance: 92880462 },
    { year: 2028, principal: 985301, interest: 15807703, totalPayment: 16793004, balance: 91895161 },
    { year: 2029, principal: 1167641, interest: 15625363, totalPayment: 16793004, balance: 90727520 },
    { year: 2030, principal: 1383724, interest: 15409280, totalPayment: 16793004, balance: 89343796 },
    { year: 2031, principal: 1639796, interest: 15153208, totalPayment: 16793004, balance: 87704000 },
    { year: 2032, principal: 1943256, interest: 14849748, totalPayment: 16793004, balance: 85760744 },
    { year: 2033, principal: 2302873, interest: 14490131, totalPayment: 16793004, balance: 83457871 },
    { year: 2034, principal: 2729043, interest: 14063961, totalPayment: 16793004, balance: 80728828 },
    { year: 2035, principal: 3234078, interest: 13558926, totalPayment: 16793004, balance: 77494750 },
    { year: 2036, principal: 3832576, interest: 12960428, totalPayment: 16793004, balance: 73662174 },
    { year: 2037, principal: 4541832, interest: 12251172, totalPayment: 16793004, balance: 69120342 },
    { year: 2038, principal: 5382341, interest: 11410663, totalPayment: 16793004, balance: 63738001 },
    { year: 2039, principal: 6378394, interest: 10414610, totalPayment: 16793004, balance: 57359607 },
    { year: 2040, principal: 7558778, interest: 9234226, totalPayment: 16793004, balance: 49800829 },
    { year: 2041, principal: 8957602, interest: 7835402, totalPayment: 16793004, balance: 40843227 },
    { year: 2042, principal: 10615290, interest: 6177714, totalPayment: 16793004, balance: 30227937 },
    { year: 2043, principal: 12579753, interest: 4213251, totalPayment: 16793004, balance: 17648184 },
    { year: 2044, principal: 14907756, interest: 1885248, totalPayment: 16793004, balance: 2740428 },
    { year: 2045, principal: 2740117, interest: 58717, totalPayment: 2798834, balance: 311 }
];

const currencyFormat = (num) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(num);

const EducationLoanCalculator = () => {
    const [loanIndex, setLoanIndex] = useState(1);
    const [rateIndex, setRateIndex] = useState(3);
    const [tenureIndex, setTenureIndex] = useState(4);

    const loanAmount = loanAmounts[loanIndex];
    const annualRate = interestRates[rateIndex];
    const tenureYears = loanTenures[tenureIndex];

    const monthlyRate = annualRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    const EMI =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayment = EMI * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    const pieData = [
        ["Component", "Amount (Rs)"],
        ["Principal Amount", loanAmount],
        ["Total Interest", totalInterest],
    ];

    const emiGrowthData = [
        ["Year", "Total Paid", "Interest Paid"],
        ...Array.from({ length: tenureYears }, (_, i) => [
            i + 1,
            EMI * (i + 1) * 12,
            (totalInterest / tenureYears) * (i + 1),
        ]),
    ];

    return (
        <div className="container mt-4">
            <div className="card p-4">
                <h4 className="mb-3 text-warning text-center">Education Loan Calculator</h4>
                <div className="row">
                    {/* Input Controls */}
                    <div className="col-md-6">
                        {[
                            { label: "Education Loan Amount (Rs)", values: loanAmounts, setter: setLoanIndex, index: loanIndex },
                            { label: "Interest Rate (% per annum)", values: interestRates, setter: setRateIndex, index: rateIndex },
                            { label: "Loan Tenure (Years)", values: loanTenures, setter: setTenureIndex, index: tenureIndex },
                        ].map(({ label, values, setter, index }, i) => (
                            <div className="mb-3" key={i}>
                                <label className="form-label">{label}</label>
                                <input type="range" className="form-range" min="0" max={values.length - 1} step="1"
                                    value={index} onChange={(e) => setter(Number(e.target.value))} />
                                <input type="text" className="form-control mt-2" value={`${values[index]} ${i === 0 ? "Rs." : i === 1 ? "%" : "Years"}`} readOnly />
                            </div>
                        ))}
                    </div>

                    {/* Pie Chart */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <Chart chartType="PieChart" data={pieData} width="100%" height="400px"
                            options={{ pieHole: 0.4, fontSize: 14, legend: { position: "bottom" } }} />
                    </div>
                </div>

                {/* EMI and Loan Summary */}
                <div className="row mt-4">
                    {[{ label: "Monthly EMI", value: EMI }, { label: "Total Interest Payable", value: totalInterest }, { label: "Total Payment", value: totalPayment }].map(({ label, value }, i) => (
                        <div className="col-md-4" key={i}>
                            <div className={`alert ${i === 0 ? "alert-primary" : i === 1 ? "alert-danger" : "alert-success"} text-center`}>
                                <h5>{label}</h5>
                                <p className="mb-0">{currencyFormat(value)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EMI Growth Chart */}
                <div className="row mt-4">
                    <div className="col-md-12">
                        <Chart chartType="LineChart" data={emiGrowthData} width="100%" height="400px"
                            options={{ title: "EMI Growth Over Time", curveType: "function", legend: { position: "bottom" } }} />
                    </div>
                </div>

                {/* Loan Repayment Schedule Table */}
                <h4 className="mt-4 text-warning">Loan Repayment Schedule</h4>
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead className="table-dark">
                            <tr>
                                <th>Year</th>
                                <th>Principal (A)</th>
                                <th>Interest (B)</th>
                                <th>Total Payment (A + B)</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loanData.map(({ year, principal, interest, totalPayment, balance }, i) => (
                                <tr key={i}>
                                    <td>{year}</td>
                                    <td>{currencyFormat(principal)}</td>
                                    <td>{currencyFormat(interest)}</td>
                                    <td>{currencyFormat(totalPayment)}</td>
                                    <td>{currencyFormat(balance)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* EMI Explanation Section */}
                <div className="mt-4 p-3 border rounded bg-light">
                    <h5 className="text-primary">What is EMI?</h5>
                    <p>
                        Equated Monthly Installment – <b>EMI</b> for short – is the amount payable every month to the bank
                        or any other financial institution until the loan amount is fully paid off.
                        It consists of the interest on the loan as well as part of the principal amount to be repaid.
                        The sum of the principal amount and interest is divided by the tenure, i.e., the number of months,
                        in which the loan has to be repaid. This amount has to be repaid monthly.
                    </p>
                    <p>
                        The interest component of the EMI would be larger in the initial months and gradually reduce
                        when compared to the principal amount. The exact percentage allocated towards payment of the
                        principal depends on the interest rate. Even though your monthly EMI payment won't change,
                        the proportion of principal and interest components will change with time. With each successive
                        payment, you'll pay more towards the principal and less in interest.
                    </p>

                    {/* EMI Formula */}
                    <h5 className="text-primary mt-3">EMI Formula</h5>
                    <p>
                        <b>EMI = P × r × (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> – 1)</b>
                    </p>
                    <p>
                        where:
                        <ul>
                            <li><b>E</b> = EMI</li>
                            <li><b>P</b> = Principal Loan Amount</li>
                            <li><b>r</b> = Monthly interest rate (Annual Interest Rate / 12 / 100)</li>
                            <li><b>n</b> = Loan term (in months)</li>
                        </ul>
                    </p>

                    {/* Example Calculation */}
                    <h5 className="text-primary mt-3">Example Calculation</h5>
                    <p>
                        If you borrow ₹10,00,000 from the bank at 10.5% annual interest for a period of 10 years (120 months),
                        then the EMI will be calculated as:
                    </p>
                    <p>
                        <b>EMI = ₹10,00,000 × 0.00875 × (1 + 0.00875)<sup>120</sup> / ((1 + 0.00875)<sup>120</sup> – 1)</b>
                    </p>
                    <p>
                        This results in an EMI of <b>₹13,493</b>. The total amount payable will be <b>₹16,19,220</b>, including <b>₹6,19,220</b> as interest.
                    </p>

                    {/* EMI Calculator Explanation */}
                    <h5 className="text-primary mt-3">How to Use the EMI Calculator?</h5>
                    <p>
                        Our EMI calculator is easy to use and provides instant results. You can calculate EMI for home loans,
                        car loans, personal loans, education loans, or any other amortizing loan.
                    </p>
                    <p>
                        Enter the following details:
                        <ul>
                            <li>Principal Loan Amount (₹)</li>
                            <li>Loan Term (Months / Years)</li>
                            <li>Rate of Interest (%)</li>
                            <li>EMI in Advance or EMI in Arrears (for car loans only)</li>
                        </ul>
                    </p>
                    <p>
                        The EMI calculator will automatically compute your monthly payment amount and display a
                        breakdown of interest and principal payments over time.
                    </p>

                    {/* Floating Rate EMI Calculation */}
                    <h5 className="text-primary mt-3">Floating Rate EMI Calculation</h5>
                    <p>
                        It’s advisable to calculate floating-rate EMIs under two scenarios:
                    </p>
                    <ul>
                        <li>
                            <b>Optimistic Scenario (Deflationary):</b> Assume that interest rates drop by 1% – 3%. This lowers
                            your EMI or shortens the loan tenure.
                        </li>
                        <li>
                            <b>Pessimistic Scenario (Inflationary):</b> Assume that interest rates increase by 1% – 3%. This helps
                            you assess affordability under worst-case conditions.
                        </li>
                    </ul>
                    <p>
                        Such calculations help in financial planning, ensuring you are prepared for fluctuations in
                        interest rates and their impact on EMIs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EducationLoanCalculator;
