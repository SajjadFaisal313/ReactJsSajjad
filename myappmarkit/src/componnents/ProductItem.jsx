import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Button, Form, Image } from "react-bootstrap";

export const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log("=========>", item);
  return (
    <Card className="productitem">
      <Row>
        <Form.Label>{item.title}</Form.Label>
      </Row>
      <Row>
        <Form.Label>{item.price}</Form.Label>
      </Row>
      <Row>
        <Image src={`${item.image}`} width="100px" height="200px" />
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["Soap", "Nammak"],
              })
            }
          >
            +
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                data: "Sabun",
              })
            }
          >
            -
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
