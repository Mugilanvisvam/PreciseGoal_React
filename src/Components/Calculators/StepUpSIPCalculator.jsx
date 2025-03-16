import React, { useState } from "react";
import { Form, Row, Col, Card, Container, Table } from "react-bootstrap";
import { Chart } from "react-google-charts";

const StepUpSIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [investmentPeriod, setInvestmentPeriod] = useState(120);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12.5);
  const [stepUpPercentage, setStepUpPercentage] = useState(10);

  const calculateStepUpSIP = () => {
    const monthlyRate = expectedReturnRate / 12 / 100;
    let totalInvestment = 0;
    let futureValue = 0;
    let growthData = [["Month", "Investment", "Growth"]];
    let sipTableData = [];

    let currentInvestment = monthlyInvestment;
    
    for (let i = 1; i <= investmentPeriod; i++) {
      totalInvestment += currentInvestment;
      futureValue = (futureValue + currentInvestment) * (1 + monthlyRate);
      growthData.push([`Month ${i}`, totalInvestment, futureValue - totalInvestment]);

      if (i % 12 === 0) {
        sipTableData.push([
          i / 12,
          currentInvestment.toFixed(2),
          (currentInvestment * 12).toFixed(2),
          totalInvestment.toFixed(2)
        ]);
        currentInvestment *= 1 + stepUpPercentage / 100;
      }
    }

    return { totalInvestment, futureValue, growthData, sipTableData };
  };

  const { totalInvestment, futureValue, growthData, sipTableData } = calculateStepUpSIP();
  const totalGrowth = futureValue - totalInvestment;

  return (
    <Container className="mt-4">
      <Card className="p-4" style={{ marginBottom: "2%" }}>
        <h2 className="text-warning text-center">Mutual Fund SIP Calculator Step Up
        </h2>
        
        {[
          {
            label: "Monthly SIP Investment (Rs):",
            value: monthlyInvestment,
            setValue: setMonthlyInvestment,
            min: 500, max: 50000, step: 500
          },
          {
            label: "Investment Duration (Months):",
            value: investmentPeriod,
            setValue: setInvestmentPeriod,
            min: 6, max: 360, step: 6
          },
          {
            label: "Expected Return Rate (% p.a.):",
            value: expectedReturnRate,
            setValue: setExpectedReturnRate,
            min: 5, max: 20, step: 0.5
          },
          {
            label: "Annual Step-Up Percentage:",
            value: stepUpPercentage,
            setValue: setStepUpPercentage,
            min: 0, max: 50, step: 1
          }
        ].map(({ label, value, setValue, min, max, step }, index) => (
          <Form.Group as={Row} className="mb-3" key={index}>
            <Form.Label column sm={6}>{label}</Form.Label>
            <Col sm={3}>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="form-control"
              />
            </Col>
            <Col sm={3}>
              <Form.Range min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} />
            </Col>
          </Form.Group>
        ))}

        <h4 className="mt-4 text-center">Investment Summary</h4>
        <Row>
          {[
            {
              title: "Total SIP Amount Invested",
              value: `Rs. ${totalInvestment.toFixed(2)}`
            },
            {
              title: "Total Growth",
              value: `Rs. ${totalGrowth.toFixed(2)}`
            },
            {
              title: "Total Future Value",
              value: `Rs. ${futureValue.toFixed(2)}`
            }
          ].map(({ title, value }, index) => (
            <Col md={4} key={index}>
              <Card className="p-3 text-center">
                <h5>{title}</h5>
                <p className="fw-bold">{value}</p>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Card className="p-3 shadow-sm">
              <h5 className="text-center">Investment vs Growth</h5>
              <Chart
                chartType="PieChart"
                width="100%"
                height="300px"
                data={[
                  ["Category", "Amount"],
                  ["Total Investment", totalInvestment],
                  ["Total Growth", totalGrowth],
                ]}
                options={{ is3D: true }}
              />
            </Card>
          </Col>

          <Col md={6}>
            <Card className="p-3 shadow-sm">
              <h5 className="text-center">Investment Growth Over Time</h5>
              <Chart
                chartType="LineChart"
                width="100%"
                height="300px"
                data={growthData}
                options={{
                  hAxis: { title: "Months" },
                  vAxis: { title: "Amount (Rs)" },
                  colors: ["#007bff", "#28a745"],
                }}
              />
            </Card>
          </Col>
        </Row>

        {/* SIP Table */}
        <Card className="mt-4 p-3">
          <h5 className="text-center">SIP Calculator Step-Up Amount Invested Summary</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Year</th>
                <th>SIP Amount / Month</th>
                <th>Invested Amount / Year</th>
                <th>Total Invested Amount</th>
              </tr>
            </thead>
            <tbody>
              {sipTableData.map((row, index) => (
                <tr key={index}>
                  {row.map((data, i) => (
                    <td key={i}>{data}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>

        {/* SIP Explanation */}
        <Card className="mt-4 p-3">
          <h5>What is SIP (Systematic Investment Plan)?</h5>
          <p>
            A SIP is a vehicle offered by Mutual Funds which helps investors invest regularly through a step-by-step
            approach to investing. It works just like recurring deposits with banks or post offices, but in Mutual Funds,
            the money is invested in the market.
          </p>

          <h5>Benefits of SIP</h5>
          <ul>
            <li><b>Inculcates Savings Habit:</b> Helps in disciplined investing.</li>
            <li><b>Flexibility:</b> Easy to start and stop, with no penalty.</li>
            <li><b>Wide Choice:</b> Various Mutual Fund schemes available.</li>
            <li><b>Convenient:</b> Automated deductions via ECS.</li>
            <li><b>Low Investment Amount:</b> Start as low as ₹100/month.</li>
            <li><b>Diversification:</b> Reduces risk by investing across multiple companies.</li>
            <li><b>Achieve Financial Goals:</b> Helps in planning for retirement, education, etc.</li>
            <li><b>Free Insurance:</b> Some schemes offer free insurance.</li>
            <li><b>Tax Savings:</b> ELSS schemes provide tax benefits under Section 80C.</li>
            <li><b>Compounding Benefits:</b> Investing early and regularly maximizes returns.</li>
            <li><b>Rupee Cost Averaging:</b> Reduces impact of market volatility.</li>
          </ul>
        </Card>
      </Card>
    </Container>
  );
};

export default StepUpSIPCalculator;
