import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const myProducts = useSelector((state) => state.productReducer.product);
  console.log("=-=-=-=-=>>>>>>>>>>", myProducts);
  const [prods, setProds] = useState([]);

  useEffect(() => {
    console.log("====>", myProducts);
    setProds([...myProducts]);
  }, [myProducts]);
  return (
    <Card className="productlist">
      {prods.length > 1 && (
        <Row>
          {prods.map((item) => (
            <Col>
              <ProductItem item={item} />
            </Col>
          ))}
        </Row>
      )}
    </Card>
  );
};
