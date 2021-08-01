import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import "./Infocard.css";
import { InfocardCh } from "./InfocardCh";
import { InfocardReducer } from "../../Reducers/InfocardReducer";

export const InfocardPt = () => {
  const [empArr, setEmpArr] = useState(InfocardReducer.Data);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const filterempArr = empArr.filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.firstLine.toLowerCase().includes(searchText.toLowerCase()) ||
        item.secLine.toLowerCase().includes(searchText.toLowerCase()) ||
        item.cityName.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setEmpArr(InfocardReducer.Data);
    else setEmpArr(filterempArr);
  }, [searchText]);
  return (
    <Card className="InfocardPtcard">
      <h2>Employee List</h2>
      <Form.Control
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      ></Form.Control>
      <Row>
        {empArr.map((item) => (
          <Col md={3}>
            <InfocardCh cardData={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
