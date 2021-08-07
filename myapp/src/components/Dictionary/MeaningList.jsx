import React from "react";
import { Card } from "react-bootstrap";
import { Meaning } from "./Meaning";

export const MeaningList = ({ item }) => {
  return (
    <div className="meaningcard">
      {item.meanings.map((means) => (
        <Meaning means={means} />
      ))}
    </div>
  );
};
