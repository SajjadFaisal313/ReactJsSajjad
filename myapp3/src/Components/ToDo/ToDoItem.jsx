import React, { useState } from "react";
import { Card, Row, Form, Col } from "react-bootstrap";

export const ToDoItem = ({ item }) => {
  const [check, setCheck] = useState(false);
  return (
    <Card className="toDoItem">
      <Row>
        <Col>
          <Form.Check onClick={() => setCheck(!check)}></Form.Check>
        </Col>
        <Col>
          <Form.Label>{check ? <del>{item}</del> : item}</Form.Label>
        </Col>
      </Row>
    </Card>
  );
};
