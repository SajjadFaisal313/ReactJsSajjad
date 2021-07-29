import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./Piano.css";

export const Piano = () => {
  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col>
          <Button>Sa</Button>
          <Button>Re</Button>
          <Button>Ga</Button>
          <Button>Ma</Button>
          <Button>Pa</Button>
          <Button>Dh</Button>
          <Button>Ni</Button>
        </Col>
        <Col>
          <Button>Sa</Button>
          <Button>Re</Button>
          <Button>Ga</Button>
          <Button>Ma</Button>
          <Button>Pa</Button>
          <Button>Dh</Button>
          <Button>Ni</Button>
        </Col>
        <Col>
          <Button>Sa</Button>
          <Button>Re</Button>
          <Button>Ga</Button>
          <Button>Ma</Button>
          <Button>Pa</Button>
          <Button>Dh</Button>
          <Button>Ni</Button>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
};
