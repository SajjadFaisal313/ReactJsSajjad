import React from "react";
import { Card } from "react-bootstrap";

export const Meaning = ({ means }) => {
  return (
    <div className="meaningcard">
      <i>
        <h4>{means.partsOfSpeech}</h4>
      </i>
      {means.definitions.map((def, index) => (
        <p>
          <span>
            <i>
              {(index = 1)}.{def.definition}
            </i>
          </span>
        </p>
      ))}
    </div>
  );
};
