import React, { useState } from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";

export const AddToDo = ({ handleAdd }) => {
  const [newToDo, setNewToDo] = useState("");
  return (
    <Card className="addToDo">
      <Row>
        <Col md={10}>
          <Form.Control
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
          ></Form.Control>
        </Col>
        <Col>
          <Button
            onClick={() => {
              setNewToDo("");
              handleAdd(newToDo);
            }}
            disabled={newToDo === ""}
          >
            Q
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
