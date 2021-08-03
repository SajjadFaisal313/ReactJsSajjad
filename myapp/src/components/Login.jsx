import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassord] = useState("");
  const [isvalid, setIsvalid] = useState(true);
  useEffect(() => {
    if (username.length >= 6 && password.length >= 6) setIsvalid(false);
    else setIsvalid(true);
  }, [username, password]);

  return (
    <Card className="logincard">
      <Row>
        <Col>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
          ></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="password"
            onChange={(e) => setPassord(e.target.value)}
            placeholder="Password"
          ></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button disabled={isvalid}>Submit</Button>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </Card>
  );
};
