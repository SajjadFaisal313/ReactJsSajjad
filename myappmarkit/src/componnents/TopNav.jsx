import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Form } from "react-bootstrap";
import { useEffect } from "react";

export const TopNav = ({ setSearchText }) => {
  const products = useSelector((state) => state.productReducer.product);
  return (
    <Card className="TopNav">
      <Row>
        <Col md={7}></Col>
        <Col md={3}>
          <Form.Control
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col md={2}>Cart: {products.length} </Col>
      </Row>
    </Card>
  );
};
