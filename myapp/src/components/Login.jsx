import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Row, Col, Form, Card } from "react-bootstrap";
import "./Login.css";
import { userData } from "./config";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassord] = useState("");
  const [valid, setValid] = useState(true);
  const [isSuccess, SetisSuccess] = useState(false);

  useEffect(() => {
    if (username.length >= 6 && password.length >= 6) setValid(false);
    if (userData.name == username.trim() && userData.pass === password.trim()) {
      SetisSuccess(true);
    } else setValid(true);
  }, [username, password]);

  return (
    <div>
      {isSuccess ? (
        <p>Login Successful</p>
      ) : (
        <div>
          <h1>login with validation</h1>
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
                <Button disabled={valid}>Submit</Button>
                <Button>Cancel</Button>
              </Col>
            </Row>
            {!isSuccess && !valid && <p>Wrong username or password</p>}
          </Card>
        </div>
      )}
    </div>
  );
};
