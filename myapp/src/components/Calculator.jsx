import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
// import "./EmiCal.css";

export const EmiCal = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [emi, setEmi] = useState(0);
  const handleCalEMI = () => {
    const si = (p * n * r) / 100;
    const repayAmount = Number(p) + Number(si);
    const emiLocal = Math.ceil(repayAmount / (n * 12));
    setEmi(emiLocal);
  };
  useEffect(() => {
    handleCalEMI();
  }, [p, n, r]);
  return (
    <div>
      <Card className="Calc">
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="principle Amount"
              onChange={(e) => setP(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Number of Year"
              onChange={(e) => setN(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Rate of Interest"
              onChange={(e) => setR(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Button Variant="primary" onClick={() => handleCalEMI()}>
              EMI Cal-C
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h1>EMI Interest : {emi}</h1>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
