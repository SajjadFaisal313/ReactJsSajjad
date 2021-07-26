import React from 'react';
import {Row ,Col, Card, Form, Button} from "react-bootstrap";

export const Table = () => {
    return (
        <div>
            <Row>
                <Col md={2}></Col>
                <Col md={4}>
                    <Card>
                        <Row>
                            <Col>
                            <Form>
                                <Form.group >
                                    <Row>
                                        <Col>
                                        <Form.Control type="text" placeholder="First Name">
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Control type="text" placeholder="Last Name">
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Label>Address:</Form.Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Control type="text" placeholder="Line 1">
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Control type="text" placeholder="Line 2">
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Form.Control type="text" placeholder="City">
                                        </Form.Control>
                                        </Col>
                                    </Row>
                                </Form.group>
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
                                <Col>Salmaan Shaikh,</Col>
                            </Row>
                            <Row>
                                <Col>H No.23153 </Col>
                            </Row>
                            <Row>
                                <Col>Degloor Naka</Col>
                            </Row>
                            <Row>
                                <Col>Nanded </Col>
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
