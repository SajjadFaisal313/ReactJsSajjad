import React from "react";
import {
  Card,
  Form,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Meaning } from "./Meaning";
import { Pronounciation } from "./Pronounciation";
import "./Dictionary.css";
import { Synonyms } from "./Synonyms";
import axios from "axios";

export const DictionaryParent = () => {
  const handleSearch = () => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en_US/rate")
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="dictDiv">
      <Card className="dictmaincard">
        <Row>
          <Col md={3}></Col>
          <Col md={3}>
            <Row>
              <Form.Control
                type="search"
                className="searchbox"
                placeholder="Search Dictionary"
              ></Form.Control>
              <Button onClick={handleSearch}>Search</Button>
            </Row>
            <Row>
              {/* <h4>Pronounciation</h4> */}
              <Pronounciation /> <Button className="palybtn">O</Button>
            </Row>
            <Row>
              {/* <h4>Meaning</h4> */}
              <Meaning />
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <DropdownButton id="dropdown-basic-button" title="Language">
                <Dropdown.Item href="#/action-2">English-UK</Dropdown.Item>
                <Dropdown.Item href="#/action-3">English-US</Dropdown.Item>
              </DropdownButton>
            </Row>
            <Row>
              {/* <h4>Synonyms</h4> */}
              <Synonyms />
            </Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Card>
    </div>
  );
};
