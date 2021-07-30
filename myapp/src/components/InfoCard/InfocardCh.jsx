import React from "react";
import { Card } from "react-bootstrap";
import "./Infocard.css";

export const InfocardCh = ({ cardData }) => {
  return (
    <Card className="InfocardChcard">
      <h4>Name : {`${cardData.firstName} ${cardData.lastName}`}</h4>
      <p>City : {`${cardData.cityName}`}</p>
      <p>Address : {`${cardData.firstLine}${cardData.secLine}`}</p>
    </Card>
  );
};
