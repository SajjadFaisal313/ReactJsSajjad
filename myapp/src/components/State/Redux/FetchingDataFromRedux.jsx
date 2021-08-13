import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { getAllGroups } from "../Selector/Selector";
import { useSelector } from "react-redux";

export const FetchingDataFromRedux = () => {
  const selector = useSelector(getAllGroups);
  console.log("selctor===>", selector);
  const [data, setData] = useState(selector);
  console.log("testing Data", data);
  return (
    <div>
      {data.map((item) => {
        return (
          <Card>
            <Card.Title> Name: {item.Name}</Card.Title>
            <Card.Body> Age: {item.Age}</Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
