import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import "./Clock.css";

export const Clock = () => {
  const [sec, setSec] = useState(58);
  const [min, setMin] = useState(58);
  const [hr, setHr] = useState(0);
  setTimeout(() => {
    setSec(sec + 1);
    if (sec === 60) {
      setMin(min + 1);
      setSec(0);
      if (min === 60) {
        setHr(hr + 1);
        setMin(0);
      }
    }
  }, 200);
  return (
    <Card className="clock">
      <span style={{ color: "red" }}>
        {hr}:{min}:{sec}
      </span>
    </Card>
  );
};
