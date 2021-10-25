import React from "react";
import { InfocardReducer } from "../Reducers/InfocardReducer";
import { Card, Row, Col } from "react-bootstrap";

const Infocard = () => {
  const data = InfocardReducer.data;
  return (
    <React.Fragment>
      {data.map((item) => {
      <Card>
        <Row>Name : </Row>
        <Row>Address :</Row>
      </Card>
  );
})};
<React.Fragment/>

export default Infocard;
