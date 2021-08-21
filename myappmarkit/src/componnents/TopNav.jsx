import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";

export const TopNav = () => {
  const products = useSelector((state) => state.productReducer.product);
  return (
    <Card className="TopNav">
      <Row>
        <Col md={10}></Col>
        <Col>Cart: {products.length} </Col>
      </Row>
    </Card>
  );
};
