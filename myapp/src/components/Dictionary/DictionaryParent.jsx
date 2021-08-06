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
import { MeaningList } from "./MeaningList";
import { Pronounciation } from "./Pronounciation";
import "./Dictionary.css";
import { Synonyms } from "./Synonyms";
import axios from "axios";
import { useState } from "react";

export const DictionaryParent = () => {
  const [resData, setResData] = useState([]);
  const handleSearch = () => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en_US/rate")
      .then((res) => {
        console.log(res.data);
        setResData([...res.data]);
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
              <Pronounciation /> <Button className="palybtn">Listen</Button>
            </Row>
            <Row>
              {resData.map(
                (item) =>
                  item.meanings.length > 0 && <MeaningList item={item} />
              )}
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
