import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import { Chart } from "react-google-charts";

const SIPCalculator = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  // Default values
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [investmentPeriod, setInvestmentPeriod] = useState(120);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12.5);
  const [futureValue, setFutureValue] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalGrowth, setTotalGrowth] = useState(0);

  // SIP Calculation Function
  const calculateSIP = () => {
    const monthlyRate = expectedReturnRate / 12 / 100;
    const months = investmentPeriod;
    const FV =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const totalInvested = monthlyInvestment * months;
    const growth = FV - totalInvested;

    setFutureValue(FV.toFixed(2));
    setTotalInvestment(totalInvested.toFixed(2));
    setTotalGrowth(growth.toFixed(2));
  };

  // Auto-calculate on load
  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, investmentPeriod, expectedReturnRate]);

  return (
    <Container className="mt-4">
      <h2 className="text-warning text-center mb-4">Mutual Fund Calculator - Systematic Investment Plans
      </h2>

      <Form>
        {/* Monthly Investment */}
        <Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6}>
    How much you can invest through monthly SIP? (Rs):
  </Form.Label>
  <Col sm={3}>
    <Form.Control
      type="number"
      min="500"
      max="50000"
      step="500"
      value={monthlyInvestment}
      onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
    />
  </Col>
  <Col sm={3}>
    <Form.Range
      min="500"
      max="50000"
      step="500"
      value={monthlyInvestment}
      onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
    />
  </Col>
</Form.Group>

{/* Investment Period */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6}>
    How many months will you continue the SIP?
  </Form.Label>
  <Col sm={3}>
    <Form.Control
      type="number"
      min="6"
      max="360"
      step="6"
      value={investmentPeriod}
      onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
    />
  </Col>
  <Col sm={3}>
    <Form.Range
      min="6"
      max="360"
      step="6"
      value={investmentPeriod}
      onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
    />
  </Col>
</Form.Group>

{/* Expected Return Rate */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6}>
    What rate of return do you expect? (% per annum):
  </Form.Label>
  <Col sm={3}>
    <Form.Control
      type="number"
      min="5"
      max="20"
      step="0.5"
      value={expectedReturnRate}
      onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
    />
  </Col>
  <Col sm={3}>
    <Form.Range
      min="5"
      max="20"
      step="0.5"
      value={expectedReturnRate}
      onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
    />
  </Col>
</Form.Group>


        {/* Calculate Button
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 12 }} className="text-center">
            <Button variant="primary" onClick={calculateSIP}>
              Calculate
            </Button>
          </Col>
        </Form.Group> */}
      </Form>

      {/* Result Cards */}
      <Row className="mt-4">
        <Col md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <h5>Total SIP Amount Invested</h5>
              <h3 className="text-primary">₹ {totalInvestment}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <h5>Total Growth</h5>
              <h3 className="text-success">₹ {totalGrowth}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <h5>Total Future Value</h5>
              <h3 className="text-danger">₹ {futureValue}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
  {/* Pie Chart (Left Side) */}
  <Col md={6}>
    <Card className="p-3 shadow">
      <h4 className="text-center">Investment vs Growth</h4>
      <Chart
        chartType="PieChart"
        width="100%"
        height="300px"
        data={[
          ["Category", "Amount"],
          ["Total Investment", parseFloat(totalInvestment)],
          ["Total Growth", parseFloat(totalGrowth)],
        ]}
        options={{
          title: "SIP Investment vs Growth",
          is3D: true,
        }}
      />
    </Card>
  </Col>

  {/* Growth Chart (Right Side) */}
  <Col md={6}>
    <Card className="p-3 shadow">
      <h4 className="text-center">Growth Over Time</h4>
      <Chart
        chartType="LineChart"
        width="100%"
        height="300px"
        data={[
          ["Month", "Investment", "Growth"],
          ...Array.from({ length: investmentPeriod }, (_, i) => [
            `Month ${i + 1}`,
            monthlyInvestment * (i + 1),
            futureValue * (i + 1) / investmentPeriod,
          ]),
        ]}
        options={{
          title: "Investment Growth Over Time",
          hAxis: { title: "Months" },
          vAxis: { title: "Amount (Rs)" },
          colors: ["#007bff", "#28a745"],
        }}
      />
    </Card>
  </Col>
</Row>
<Card className="p-4 mt-4 shadow" style={{marginBottom:'2%'}}>
  <h3 className="text-center">What is SIP (Systematic Investment Plan)?</h3>
  <p>
    A SIP is a vehicle offered by Mutual Funds which helps investors invest regularly through a step-by-step approach to investing.
    It works just like recurring deposits with the bank or post office where you put in a small amount every month.
    The only difference is that in the case of Mutual Funds, it is invested in the market.
  </p>

  <h4>Benefits of SIP</h4>
  <ul>
    <li><strong>Inculcates Savings Habit:</strong> Helps develop a habit of investing as you commit a fixed amount systematically.</li>
    <li><strong>Flexibility:</strong> Starting or stopping a SIP is easy, and there is no penalty for foreclosure.</li>
    <li><strong>Wide Choice:</strong> You get various Mutual Fund schemes and asset management companies to choose from.</li>
    <li><strong>Convenient:</strong> Auto-debit ensures hassle-free investing.</li>
    <li><strong>Low Investment Amount:</strong> You can start with as low as Rs. 100 per month.</li>
    <li><strong>Diversification:</strong> Spreads your investment across companies, sectors, and markets.</li>
    <li><strong>Helps Achieve Financial Goals:</strong> Supports long-term goals like retirement, children’s education, and marriage.</li>
    <li><strong>Free Insurance:</strong> Some schemes offer free insurance coverage up to 100 times your SIP amount.</li>
    <li><strong>Tax Savings:</strong> SIP in ELSS schemes provides tax benefits under section 80C.</li>
    <li><strong>Compounding Benefits:</strong> Starting early and saving consistently helps achieve exponential growth.</li>
    <li><strong>Rupee Cost Averaging:</strong> Ensures you buy more units when prices are low and fewer when they are high.</li>
  </ul>

  <h4>SIP vs. Lump Sum Investment</h4>
  <p>
    A SIP investment of Rs. 1000 per month in HDFC Top 200 Fund for 12 months resulted in Rs. 13,079.69 as of Jan 1, 2014,
    compared to a lump sum of Rs. 12,000 invested at the beginning of the same period.
    The SIP route provided higher returns through rupee cost averaging.
  </p>
</Card>
    </Container>
  );
};

export default SIPCalculator;
