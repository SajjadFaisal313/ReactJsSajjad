import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { productReducer } from "../state/reducers/productReducer";
import { useState } from "react";

export const ProductList = () => {
  const myProducts = useSelector((state) => state.productReducer.product);
  const [prod, setProd] = useState([...myProducts]);
  return (
    <Card className="productlist">
      <Row>
        <Col>
          <ProductItem />
        </Col>
        <Col>
          <ProductItem />
        </Col>
        <Col>
          <ProductItem />
        </Col>
      </Row>
    </Card>
  );
};
