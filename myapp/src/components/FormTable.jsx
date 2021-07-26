import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export const FormTable = () => {
  return (
    <div>
      <Row>
        <Col>
          <Form.Control type="text" placeholder="First Name"></Form.Control>
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Middle Name"></Form.Control>
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Last Name"></Form.Control>
        </Col>
      </Row>
      <Button>Submit</Button>
      <Row>
        <Col>
          <Form.Control type="text" placeholder="Email"></Form.Control>
        </Col>
        <Col></Col>
        <Col>
          <Form.Control type="text" placeholder="Phone Number"></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Current Address"
          ></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Permanant Address"
          ></Form.Control>
        </Col>
      </Row>
    </div>
  );
};
