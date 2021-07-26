import React, { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

export const Details = () => {
  const [namea, setNamea] = useState("--");
  const [nameb, setNameb] = useState("--");
  const [line1, setLine1] = useState("--");
  const [line2, setLine2] = useState("--");
  const [city, setCity] = useState("--");
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <Card>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          onChange={(e) => setNamea(e.target.value)}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) => setNameb(e.target.value)}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Address:</Form.Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Line 1"
                          onChange={(e) => setLine1(e.target.value)}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Line 2"
                          onChange={(e) => setLine2(e.target.value)}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                        ></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Row>
            <Col>
              <Button>Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Row>
                  <Col>
                    <h3>{`${namea} ${nameb}`}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>{`${line1},`}</Col>
                </Row>
                <Row>
                  <Col>{`${line2},`}</Col>
                </Row>
                <Row>
                  <Col>{`${city}`}</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
