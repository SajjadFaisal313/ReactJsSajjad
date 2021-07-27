import React, { useState } from "react";
import { Row, Col, Form, Button, Card, Image } from "react-bootstrap";

import "./Details.css";

import { EmployeeReducer } from "../Reducers/EmployeeReducer";
export const Details = () => {
  const { firstName, lastName, firstLine, secLine, cityName } =
    EmployeeReducer.Data[0];
  const [namea, setNamea] = useState(firstName);
  const [nameb, setNameb] = useState(lastName);
  const [line1, setLine1] = useState(firstLine);
  const [line2, setLine2] = useState(secLine);
  const [city, setCity] = useState(cityName);

  const [bulbstate, setBulbState] = useState("on");

  return (
    <div>
      <Row>
        <Col md={3} className="bulbcolmn">
          <Image
            src={`Imagess/bulb${bulbstate}.png`}
            height="70px"
            onClick={() =>
              bulbstate === "off" ? setBulbState("on") : setBulbState("off")
            }
          ></Image>
        </Col>
        <Col md={3}>
          <Card id="details">
            <Row>
              <Col>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setNamea(e.target.value)}
                        value={namea}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setNameb(e.target.value)}
                        value={nameb}
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
                        value={line1}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Line 2"
                        onChange={(e) => setLine2(e.target.value)}
                        value={line2}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      ></Form.Control>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={3}>
          <Row>
            <Col>
              <Button>Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card id="details">
                <Row>
                  <Col>
                    <h3>{`${namea} ${nameb}`}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>{`${line1} `}</Col>
                </Row>
                <Row>
                  <Col>{`${line2} `}</Col>
                </Row>
                <Row>
                  <Col>{`${city} `}</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Button>ChangeMe</Button>
    </div>
  );
};
