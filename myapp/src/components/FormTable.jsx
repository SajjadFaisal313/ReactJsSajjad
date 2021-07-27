// import React from "react";
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Details.css";

export const FormTable = () => {
  return (
    <div>
      <Row>
        <Col md={3}></Col>
        <Col>
          <Form.Control type="text" placeholder="First Name"></Form.Control>
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Middle Name"></Form.Control>
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Last Name"></Form.Control>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Button>Submit</Button>
      <Row>
      <Col md={3}></Col>
        <Col>
          <Form.Control type="text" placeholder="Email"></Form.Control>
        </Col>
        <Col></Col>
        <Col>
          <Form.Control type="text" placeholder="Phone Number"></Form.Control>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
      <Col md={3}></Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Current Address"
          ></Form.Control>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
      <Col md={3}></Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Permanant Address"
          ></Form.Control>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Button>ChangeMe</Button>
    </div>
  );
};
